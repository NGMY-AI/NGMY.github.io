((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Q,K,R,S,L,M,T,N,U,V,W,F,O,X,C={
hxP(d,e,f){var w=null,v=f.k("GZ<0>"),u=new B.GZ(w,w,w,w,v)
$.w_()
u.d=new C.cCn(new B.vu(),e,u,f,d)
return new B.i8(u,v.k("i8<1>"))},
cCn:function cCn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCo:function cCo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCk:function cCk(d){this.a=d},
cCl:function cCl(d,e){this.a=d
this.b=e},
cCm:function cCm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCj:function cCj(d,e,f){this.a=d
this.b=e
this.c=f},
bv1:function bv1(d){this.a=d},
hxO(d,e,f,g){return new C.ay1(d,e,f,null,g.k("ay1<0>"))},
Gb:function Gb(){},
aKI:function aKI(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
ffx:function ffx(d){this.a=d},
ffw:function ffw(d,e){this.a=d
this.b=e},
ffz:function ffz(d){this.a=d},
ffu:function ffu(d,e,f){this.a=d
this.b=e
this.c=f},
ffy:function ffy(d){this.a=d},
ffv:function ffv(d){this.a=d},
ay1:function ay1(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
ipD(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aY(w,1))
return w},
hIN(d){var w=C.ipD(d)
if(w.length===0)return""
return"$"+w},
fPg(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fPg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.V(Date.now(),0,!1).bR(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbt())o=o===t.gbt()&&p.b<t.gcG()
else o=!0
if(o){w=4
break}if(q.x!==A.cw){w=4
break}if(q.d!==A.h8){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cS(m,"game payout:",0))if(!B.cS(m,"game partial:",0)){if(!B.cS(m,"multiplayer payout:",0))o=B.cS(m,"dice",0)&&q.e===A.fx
else o=l
l=o}if(!l){w=4
break}if(B.cS(m,"game payout:",0))k=A.a.i(A.a.aY(n,A.a.cj(m,"game payout:")+12))
else if(B.cS(m,"game partial:",0)){k=A.a.i(A.a.aY(n,A.a.cj(m,"game partial:")+13))
j=A.a.cj(k,"(")
if(j>0)k=A.a.i(A.a.aB(k,0,j))}else if(B.cS(m,"multiplayer payout:",0)){k=A.a.i(A.a.aY(n,A.a.cj(m,"multiplayer payout:")+19))
j=A.a.cj(k,"(")
if(j>0)k=A.a.i(A.a.aB(k,0,j))}else k=B.cS(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vd(q.c,p,n,d,o,null,q.a,!0),$async$fPg)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fPg,v)},
iuB(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
iqF(d,e,f){return A.d.aS(e,new C.fT_(f,A.a.i(d.toLowerCase())))},
fSR(d){var w
C.htW(d)
w=d.c7
return B.bs(new B.N(w,new C.fSS(),B.T(w).k("N<1,@>")),!0,x.N)},
ige(d,e,f){var w,v,u,t,s,r,q=null,p=A.bX,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ej().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a4(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.gho():s}w=A.h.cD(f*t)
v=new C.fz8(f)
if(J.d2(n,"data:image"))try{u=B.fY(A.cD.aK(A.d.gal(J.lJ(n,","))),A.A,w,new C.fz5(v),A.h2,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d2(n,"supabase://"))return new B.lb(B.a3a(n),new C.fz6(f,e,p,w,v),q,q,x.gh)
return B.kF(n,A.A,w,new C.fz7(v),A.h2,p,!0,e,q,q,f)},
hhQ(d,e){return new B.a5(e,e,B.i4(C.ige(d,e,e),A.aq),null)},
i8h(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dwq,x.gm)
for(w=0;w<36;++w){v=A.E_[w]
s.push(new C.re(v.a,v.b,v.c,v.e,v.f))}return new C.aCO(u,B.S(t,t),s)},
fT_:function fT_(d,e){this.a=d
this.b=e},
fSS:function fSS(){},
fz8:function fz8(d){this.a=d},
fz5:function fz5(d){this.a=d},
fz6:function fz6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fz4:function fz4(d){this.a=d},
fz7:function fz7(d){this.a=d},
an9:function an9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
re:function re(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aCO:function aCO(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dml:function dml(d,e){this.a=d
this.b=e},
dmw:function dmw(d,e){this.a=d
this.b=e},
dmO:function dmO(){},
dmP:function dmP(d){this.a=d},
dmE:function dmE(d,e){this.a=d
this.b=e},
dmD:function dmD(){},
dmF:function dmF(d){this.a=d},
dmC:function dmC(){},
dmH:function dmH(d){this.a=d},
dmG:function dmG(){},
dmz:function dmz(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmA:function dmA(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmr:function dmr(d,e){this.a=d
this.b=e},
dms:function dms(d,e){this.a=d
this.b=e},
dmp:function dmp(d){this.a=d},
dmq:function dmq(d){this.a=d},
dmt:function dmt(d){this.a=d},
dmu:function dmu(d){this.a=d},
dmv:function dmv(d,e,f){this.a=d
this.b=e
this.c=f},
dmo:function dmo(d,e){this.a=d
this.b=e},
dmn:function dmn(d,e){this.a=d
this.b=e},
dmm:function dmm(d,e){this.a=d
this.b=e},
dmN:function dmN(d){this.a=d},
dmL:function dmL(d,e,f){this.a=d
this.b=e
this.c=f},
dmK:function dmK(d,e,f){this.a=d
this.b=e
this.c=f},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
dmI:function dmI(){},
dmM:function dmM(d){this.a=d},
aFF:function aFF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmN:function bmN(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e_U:function e_U(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_V:function e_V(d){this.a=d},
e_S:function e_S(){},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_R:function e_R(d){this.a=d},
e_X:function e_X(d){this.a=d},
an8:function an8(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.a=o},
aCN:function aCN(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dmf:function dmf(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d){this.a=d},
dmk:function dmk(d){this.a=d},
dmh:function dmh(d,e){this.a=d
this.b=e},
dmg:function dmg(d,e){this.a=d
this.b=e},
ana:function ana(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.a=m},
aCP:function aCP(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.d=d
_.e=e
_.f=!1
_.w=_.r=$
_.x=f
_.y=!1
_.z=null
_.Q=$
_.as=null
_.at=0
_.ax=""
_.ay=g
_.ch=h
_.CW=""
_.cx=null
_.cy=i
_.dx=_.db=0
_.dy=j
_.fr=k
_.fx=0
_.fy=l
_.go=m
_.id=n
_.k1=!1
_.k2=0
_.k3=4
_.k4=o
_.ok=p
_.p1=-1
_.p3=_.p2=0
_.p4=!1
_.rx=_.RG=0
_.ry=q
_.to=-1
_.x1=0
_.x2=1
_.xr=!1
_.a0=_.bd=_.bh=_.y2=_.y1=0
_.aO=_.aR=_.aL=_.aH=$
_.bG=_.bi=_.b_=_.b2=null
_.aZ=!1
_.bw=_.bn=null
_.c7=!1
_.bT=_.cT=""
_.c=_.a=_.bH=null},
do7:function do7(d,e){this.a=d
this.b=e},
doa:function doa(d){this.a=d},
dob:function dob(d){this.a=d},
doc:function doc(d){this.a=d},
dod:function dod(d){this.a=d},
doe:function doe(d){this.a=d},
do8:function do8(d){this.a=d},
do9:function do9(d){this.a=d},
dnn:function dnn(d,e){this.a=d
this.b=e},
dno:function dno(d,e){this.a=d
this.b=e},
dnR:function dnR(d){this.a=d},
dnS:function dnS(){},
dnD:function dnD(d,e,f){this.a=d
this.b=e
this.c=f},
dnE:function dnE(d){this.a=d},
dnF:function dnF(d,e,f){this.a=d
this.b=e
this.c=f},
dnG:function dnG(d,e){this.a=d
this.b=e},
dnH:function dnH(){},
dmQ:function dmQ(d){this.a=d},
dnm:function dnm(d,e){this.a=d
this.b=e},
dnT:function dnT(){},
do1:function do1(){},
dnQ:function dnQ(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnk:function dnk(d){this.a=d},
dnl:function dnl(){},
dnX:function dnX(){},
dnY:function dnY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnZ:function dnZ(d,e,f){this.a=d
this.b=e
this.c=f},
dmR:function dmR(){},
dmS:function dmS(d){this.a=d},
dmT:function dmT(){},
dnw:function dnw(d,e){this.a=d
this.b=e},
dnx:function dnx(d,e,f){this.a=d
this.b=e
this.c=f},
dny:function dny(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnJ:function dnJ(){},
dnK:function dnK(d){this.a=d},
dnL:function dnL(){},
dnM:function dnM(d){this.a=d},
dnN:function dnN(){},
dnW:function dnW(d,e,f){this.a=d
this.b=e
this.c=f},
dnz:function dnz(d){this.a=d},
dnA:function dnA(d,e){this.a=d
this.b=e},
dnB:function dnB(d){this.a=d},
dnC:function dnC(d){this.a=d},
do_:function do_(d){this.a=d},
do0:function do0(d){this.a=d},
dmU:function dmU(d){this.a=d},
dmV:function dmV(d,e){this.a=d
this.b=e},
dmW:function dmW(d){this.a=d},
dmX:function dmX(d){this.a=d},
dnU:function dnU(d,e){this.a=d
this.b=e},
dnV:function dnV(d){this.a=d},
dnu:function dnu(d,e){this.a=d
this.b=e},
dnO:function dnO(d,e,f){this.a=d
this.b=e
this.c=f},
dns:function dns(d,e,f){this.a=d
this.b=e
this.c=f},
dnt:function dnt(){},
do2:function do2(d){this.a=d},
do3:function do3(d){this.a=d},
do4:function do4(d){this.a=d},
do6:function do6(d){this.a=d},
do5:function do5(){},
dnr:function dnr(d,e,f){this.a=d
this.b=e
this.c=f},
dnq:function dnq(d,e){this.a=d
this.b=e},
dnp:function dnp(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dn8:function dn8(d,e){this.a=d
this.b=e},
dna:function dna(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dnb:function dnb(d){this.a=d},
dn6:function dn6(){},
dnc:function dnc(d){this.a=d},
dn4:function dn4(){},
dn5:function dn5(d){this.a=d},
dnd:function dnd(d){this.a=d},
dn3:function dn3(d,e){this.a=d
this.b=e},
dne:function dne(d){this.a=d},
dn2:function dn2(d,e){this.a=d
this.b=e},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dnf:function dnf(d){this.a=d},
dn1:function dn1(d,e){this.a=d
this.b=e},
dng:function dng(d){this.a=d},
dn0:function dn0(d){this.a=d},
dmY:function dmY(d,e){this.a=d
this.b=e},
dnh:function dnh(d,e,f){this.a=d
this.b=e
this.c=f},
dni:function dni(d){this.a=d},
dn_:function dn_(){},
dnj:function dnj(d){this.a=d},
anX:function anX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjR:function bjR(){this.c=this.a=null},
drH:function drH(d,e){this.a=d
this.b=e},
drG:function drG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ak_:function ak_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azR:function azR(d,e,f,g,h,i,j,k,l,m){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.ay=_.ax=_.at=!1
_.ch=-1
_.CW=null
_.cy=_.cx=!1
_.db=i
_.fr=_.dy=_.dx=0
_.fx=j
_.id=_.go=_.fy=null
_.k3=k
_.k4=l
_.ok=m
_.c=_.a=null},
cOp:function cOp(d){this.a=d},
cNK:function cNK(d,e){this.a=d
this.b=e},
cNA:function cNA(d){this.a=d},
cNB:function cNB(d){this.a=d},
cNU:function cNU(d){this.a=d},
cNR:function cNR(d){this.a=d},
cNS:function cNS(d){this.a=d},
cNT:function cNT(d,e,f){this.a=d
this.b=e
this.c=f},
cNM:function cNM(d){this.a=d},
cNL:function cNL(d){this.a=d},
cNC:function cNC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNP:function cNP(d){this.a=d},
cNO:function cNO(d){this.a=d},
cNN:function cNN(d,e){this.a=d
this.b=e},
cOc:function cOc(d){this.a=d},
cO6:function cO6(d){this.a=d},
cO9:function cO9(d){this.a=d},
cO8:function cO8(){},
cO5:function cO5(d){this.a=d},
cO7:function cO7(d,e){this.a=d
this.b=e},
cO4:function cO4(){},
cNH:function cNH(){},
cNI:function cNI(d,e){this.a=d
this.b=e},
cNJ:function cNJ(d){this.a=d},
cNF:function cNF(d,e){this.a=d
this.b=e},
cNG:function cNG(d,e){this.a=d
this.b=e},
cNX:function cNX(d,e){this.a=d
this.b=e},
cNQ:function cNQ(d){this.a=d},
cNY:function cNY(d){this.a=d},
cNZ:function cNZ(d,e){this.a=d
this.b=e},
cO_:function cO_(d,e){this.a=d
this.b=e},
cO0:function cO0(d,e){this.a=d
this.b=e},
cO1:function cO1(d,e,f){this.a=d
this.b=e
this.c=f},
cO2:function cO2(d){this.a=d},
cO3:function cO3(d){this.a=d},
cNV:function cNV(d,e){this.a=d
this.b=e},
cOb:function cOb(d){this.a=d},
cNW:function cNW(d,e){this.a=d
this.b=e},
cOo:function cOo(d){this.a=d},
cOh:function cOh(d){this.a=d},
cOk:function cOk(d){this.a=d},
cOe:function cOe(d,e){this.a=d
this.b=e},
cOi:function cOi(){},
cOj:function cOj(d,e){this.a=d
this.b=e},
cOf:function cOf(d){this.a=d},
cOg:function cOg(d){this.a=d},
cOm:function cOm(){},
cOl:function cOl(d){this.a=d},
cOd:function cOd(d,e){this.a=d
this.b=e},
cOn:function cOn(d){this.a=d},
cND:function cND(d){this.a=d},
cOa:function cOa(d,e){this.a=d
this.b=e},
cNE:function cNE(d,e,f){this.a=d
this.b=e
this.c=f},
aNd:function aNd(){},
aNe:function aNe(){},
aNf:function aNf(){},
aOc:function aOc(){},
c4U(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
if(s.length===0)return!1
w=f==null?"":f
v=A.a.i(w.toLowerCase())
if(v.length!==0&&v!==s)return!1
u=A.a.i(d.b.toLowerCase())
if(u.length!==0&&u===s)return!0
w=A.a.i(e.toLowerCase())
t=A.a.i(d.a.toLowerCase())
if(t===s||t===(w+"+local.ngmy").toLowerCase())return!0
return!1},
c4V(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hWz(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_L(d,e){return C.hWA(d,e)},
hWA(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_L=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3A(d),$async$b_L)
case 3:p=g
if(p!=null){try{t=A.W.aP(0,p.c,null)
if(x.f.b(t)){s=C.hsg(B.a1(t,x.N,x.z))
if(s==null){u=new B.GU(D.a9j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4U(s,e,p.b)){u=new B.GU(D.aMz,null)
w=1
break}r=p.a?D.emv:D.aMy
u=new B.GU(r,s)
w=1
break}}catch(o){}u=new B.GU(D.a9j,null)
w=1
break}s=C.hsh(d)
if(s==null){u=new B.GU(D.a9j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4U(s,e,null)){u=new B.GU(D.aMz,null)
w=1
break}u=new B.GU(D.aMy,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_L,v)},
hsh(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d2(w,"\ufeff"))w=J.mX(w,1)
v=!1
if(J.d2(w,"NGMYSNAP1|")){v=!0
w=A.cb.cE(0,A.cD.aK(J.mX(w,10)))}u=A.W.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hWy(t):C.hsg(t)
return s}catch(r){return null}},
hWy(d){var w,v,u,t,s,r,q,p,o,n=new C.c4R(),m=new C.c4Q(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w3(v,u,t,s,r,A.h.M(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.z(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=B.aI(d.h(0,"qn"))
if(o==null)o=0
return new B.a7s("","",v,u,t,s,r,q,n,m,o,p,A.iF,new B.V(Date.now(),0,!1),-1)},
hsg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4T()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=B.a1(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=B.aI(u.h(0,"amount"))
if(s==null)s=0
r=B.aI(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new B.V(Date.now(),0,!1)
p=B.aI(u.h(0,"totalEarned"))
if(p==null)p=0
o=B.aI(u.h(0,"daysClockedIn"))
n=new B.w3(t,s,r,q,p,A.h.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.B(new B.ee(J.b9(m,new C.c4S(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=B.aI(d.h(0,"accountBalance"))
if(q==null)q=0
p=B.aI(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.z(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=B.aI(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=B.aI(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new B.V(Date.now(),0,!1)
f=B.aI(d.h(0,"walletStateRevision"))
f=f==null?null:A.h.M(f)
return new B.a7s(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hc1(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hc1=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4P(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hp(B.KY(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hc1,v)},
XB:function XB(d,e){this.a=d
this.b=e},
c4R:function c4R(){},
c4Q:function c4Q(){},
c4T:function c4T(){},
c4S:function c4S(d){this.a=d},
ijm(d){return B.ce(null,A.b5,!0,null,new C.fDK(),d,null,!0,!0,x.N)},
ijz(d,e,f,g){return B.ce(null,A.b5,!0,null,new C.fEX(g,f,e),d,null,!0,!0,x.y)},
apv:function apv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEV:function aEV(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dId:function dId(d,e){this.a=d
this.b=e},
dIe:function dIe(d){this.a=d},
dI4:function dI4(d,e){this.a=d
this.b=e},
dI2:function dI2(d){this.a=d},
dIc:function dIc(d){this.a=d},
dIb:function dIb(d,e){this.a=d
this.b=e},
dI1:function dI1(d,e){this.a=d
this.b=e},
dI0:function dI0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dI3:function dI3(d){this.a=d},
dIa:function dIa(){},
dI8:function dI8(d){this.a=d},
dI9:function dI9(d,e){this.a=d
this.b=e},
dI5:function dI5(){},
dI6:function dI6(d,e){this.a=d
this.b=e},
dI7:function dI7(d,e){this.a=d
this.b=e},
dIf:function dIf(d){this.a=d},
a23:function a23(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvy:function bvy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0H:function a0H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmi:function bmi(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dIj:function dIj(d){this.a=d},
dIg:function dIg(d,e){this.a=d
this.b=e},
dIh:function dIh(d,e){this.a=d
this.b=e},
dIi:function dIi(d){this.a=d},
a0I:function a0I(d){this.a=d},
bmj:function bmj(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dIk:function dIk(d,e){this.a=d
this.b=e},
fDK:function fDK(){},
fEX:function fEX(d,e,f){this.a=d
this.b=e
this.c=f},
ag2:function ag2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8Y:function f8Y(d){this.a=d},
f8Z:function f8Z(d){this.a=d},
Ri:function Ri(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_P:function a_P(d){this.a=d},
aC6:function aC6(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dh8:function dh8(d){this.a=d},
dh5:function dh5(){},
dh6:function dh6(d){this.a=d},
dh7:function dh7(d){this.a=d},
VH(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O2(s),$async$VH)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apM(s,t),$async$VH)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VH,v)},
hWS(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5D(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5D:function c5D(){},
ip0(d){return A.d.dM(A.E_,new C.fPa(d),new C.fPb()).r},
fPa:function fPa(d){this.a=d},
fPb:function fPb(){},
aq1:function aq1(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmq:function bmq(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dOH:function dOH(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOy:function dOy(d,e,f){this.a=d
this.b=e
this.c=f},
dOD:function dOD(d){this.a=d},
dOA:function dOA(d,e,f){this.a=d
this.b=e
this.c=f},
dOE:function dOE(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOC:function dOC(d){this.a=d},
htW(d){var w=B.cdP(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
htY(d){return B.ce(null,A.w.j(0.82),!0,null,new C.cdU(),d,null,!0,!0,x.H)},
a87:function a87(d){this.a=d},
cdU:function cdU(){},
cdT:function cdT(d){this.a=d},
hHU(){var w=new B.V(Date.now(),0,!1),v=w.bR(B.dx(4-B.mn(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.h.bf(A.o.aq(v.bz(B.c0(B.bD(u),B.bM(u),B.bY(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
ftW(d,e){var w,v,u,t,s,r,q=B.H5(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.aB(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
idP(d,e){var w,v,u,t,s,r,q,p=B.H5(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aB(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.h.M(w)
return w==null?0:w}}return 0},
iyF(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H5(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aB(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.h.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ike(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H5(b5),b2=B.cfa(),b3=C.hHU()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,a3)?A.a.aB(p,0,p.length-11):p)!==b1)continue
q=B.aI(r.h(s,a4))
o=q==null?a1:A.h.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.t(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a8(u)
v=B.aI(w.h(u,a4))
v=v==null?a1:A.h.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aI(w.h(u,"outcome"))
w=w==null?a1:A.h.M(w)
return w==null?1:w}n=new C.fFM()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.aB(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.aB(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.ftW(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.S(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cd(w,B.a4(w).k("cd<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a8(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?B.a1(v.a(j.h(0,h)),r,q):B.S(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=B.aI(d.h(0,a6))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.cb(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aI(d.h(0,a8))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cb(h,a1)}}}return a1},
hEb(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hib(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ikf(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H5(a3),a1=new C.fFN()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,"+local.ngmy")?A.a.aB(p,0,p.length-11):p)!==a0)continue
if(a1.$2(s,h)+a1.$2(s,g)+a1.$2(s,f)<=0)continue
if(u!=null){r=r.h(s,e)
r=J.k(r==null?"":r)
q=J.t(u,e)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u==null)return null
o=a1.$2(u,h)
n=a1.$2(u,g)
m=a1.$2(u,f)
w=J.a8(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fFO(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aw(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aw(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.hib(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ikd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.h.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.h.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hHU():B.cfa()
t=v+"|"+u
s=C.ftW(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=B.aI(h.h(s,k))
q=r==null?m:A.h.M(r)
if(q==null)q=0
r=B.aI(h.h(s,j))
p=r==null?m:A.h.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aw(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
isQ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bm6()
w=C.ikf(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahz(d,a0,w)
return w}v=C.ike(d,a0)
if(v!=null){if(v===3)++d.f
C.ahz(d,a0,v)
return v}u=C.ikd(d,a0,a1)
if(u!=null)return new C.fWu(d,a1,a0).$1(u)
t=C.ftW(d,a0)
s=J.a8(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.h.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.h.M(s)
if(p==null)p=0
o=new C.fWw(d,a1)
if(C.idP(d,a0)>0){n=o.$0()
C.iyF(d,a0)
C.ahz(d,a0,n)
return n}if(q>=d.c){n=new C.fWv(d,a1).$0()
C.ahz(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahz(d,a0,n)
return n}s=x.t
m=B.a([],s)
l=B.a([],s)
for(s=[1,2,3],r=s.length,k=d.a,j=0;j<r;++j){n=s[j]
i=k.h(0,""+n)
if(i==null)i=10
for(h=0;h<i;++h)m.push(n)}for(s=[-1,-2],r=s.length,j=0;j<r;++j){n=s[j]
i=k.h(0,""+n)
if(i==null)i=10
for(h=0;h<i;++h)l.push(n)}g=A.o.D(d.b,5,95)
f=a1.aw(100)<g
if(f&&m.length!==0){e=m[a1.aw(m.length)]
if(e===3&&d.f>=d.e)e=a1.h5()?1:2}else{s=l.length
if(s!==0)e=l[a1.aw(s)]
else e=f?1:-1}if(e===3)++d.f
C.ahz(d,a0,e)
return e},
cf2(d){var w=0,v=B.j(x.y),u
var $async$cf2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cf1(d),$async$cf2)
case 3:if(f){u=!0
w=1
break}u=B.cf1(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf2,v)},
ahz(d,e,f){var w,v="winStreak",u="loseStreak",t=C.ftW(d,e),s=J.a8(t),r=B.aI(s.h(t,v)),q=r==null?null:A.h.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.h.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fFM:function fFM(){},
fFN:function fFN(){},
fFO:function fFO(d,e){this.a=d
this.b=e},
fWu:function fWu(d,e,f){this.a=d
this.b=e
this.c=f},
fWw:function fWw(d,e){this.a=d
this.b=e},
fWv:function fWv(d,e){this.a=d
this.b=e},
apu:function apu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmg:function bmg(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dHQ:function dHQ(d){this.a=d},
dHP:function dHP(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHO:function dHO(d,e){this.a=d
this.b=e},
aNL:function aNL(){},
Ot:function Ot(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgk:function cgk(){},
cgj:function cgj(){},
arP:function arP(d,e,f){this.c=d
this.d=e
this.a=f},
hd1(d,e,f){return B.ce(null,A.w.j(0.88),!0,null,new C.cgM(f,e),d,null,!0,!0,x.H)},
i_F(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
OB:function OB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgM:function cgM(d,e){this.a=d
this.b=e},
bn0:function bn0(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7q:function e7q(){},
e7r:function e7r(){},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7t:function e7t(d,e){this.a=d
this.b=e},
aOm:function aOm(){},
hHQ(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blE(new C.fRy(w))
w=w.a
return w==null?null:w.c.a},
hHI(d){$.aU.x1$.push(new C.fRl(d))},
hI2(d){var w=$.tp().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hHQ(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.eb()},
hI1(d){C.hEj(d,0)},
hEj(d,e){var w,v
if(e>4)return
w=d==null?$.tp().gbl():d
if(w==null||w.c==null)return
v=C.hHQ(w)
if(v==="GameCenterScreen")return
if(D.fl2.q(0,v)&&w.q8()){w.eb()
$.aU.x1$.push(new C.fC3(w,e))}},
aSm(d,e,f){return B.eb(B.ci(new C.fSV(e,d,f)),e,!0)},
fRy:function fRy(d){this.a=d},
fRl:function fRl(d){this.a=d},
fRk:function fRk(d){this.a=d},
fC3:function fC3(d,e){this.a=d
this.b=e},
fSV:function fSV(d,e,f){this.a=d
this.b=e
this.c=f},
arT(d,e){var w=0,v=B.j(x.H),u
var $async$arT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WM(e)
w=2
return B.b(B.arS(d,u),$async$arT)
case 2:B.a8K(d,u)
return B.h(null,v)}})
return B.i($async$arT,v)},
vd(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vd=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z0(g)
if(o.length===0){w=1
break}t=e==null?B.M8(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OC(o),$async$vd)
case 3:q=m
if(j!=null&&j.length!==0&&J.ro(q,new C.ch_(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mV(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arT(o,q),$async$vd)
case 4:if(i==null||r==null||s)C.a8M(o).bF(new C.ch0(),x.S).eF(new C.ch1())
case 1:return B.h(u,v)}})
return B.i($async$vd,v)},
a8M(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8M=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hJ4
m=B.z0(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OC(m),$async$a8M)
case 3:t=f
s=J.cE(t)
if(!s.aS(t,new C.cgZ())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8M)
case 4:r=f
q=J.a8(r)
if(q.gK(r)!==s.gK(t)){w=1
break}for(p=!1,o=0;o<s.gK(t);++o)if(A.W.av(s.h(t,o).aj(),null)!==A.W.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arT(m,r),$async$a8M)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8M,v)},
b2d(d){var w=0,v=B.j(x.S),u,t
var $async$b2d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hd4(d,!1),$async$b2d)
case 3:t=J
w=4
return B.b(C.arU(d,!1),$async$b2d)
case 4:u=t.dH(f,new C.cgY(new B.V(Date.now(),0,!1).bR(-864e8))).gK(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2d,v)},
arU(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z0(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OC(r),$async$arU)
case 3:t=g
s=B.WM(t)
if(s.length!==J.ad(t))C.arT(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arU,v)},
iqz(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bz(d).a,r=A.o.aq(s,6e7)
if(r<1)return"Just now"
w=A.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.aq(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.dh(d),12)===0?12:A.o.F(B.dh(d),12)
s=A.iX[B.bM(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fV(d)),2,"0")
u=B.dh(d)<12?"AM":"PM"
return s+" "+B.bY(d)+r+" \xb7 "+v+":"+w+" "+u},
bDH(d){var w=A.h.ad(Math.abs(d),2).split(".")
return"$"+B.nO(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fyO(),null)+"."+w[1]},
bHr(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arU(e,!1),$async$bHr)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hd4(e,!0).bF(new C.h4H(e),t).bF(new C.h4I(),t).eF(new C.h4J())
w=4
return B.b(B.bU(A.L,null,new C.h4K(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHr)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHr,v)},
hg5(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.du(A.dB,A.A,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hA,w,w,w),1)},
e7v(d,e,f){var w=null,v=A.w.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.du(A.dI,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.OY,w,w,w),1)},
ch_:function ch_(d){this.a=d},
ch0:function ch0(){},
ch1:function ch1(){},
cgZ:function cgZ(){},
cgY:function cgY(d){this.a=d},
fyO:function fyO(){},
h4H:function h4H(d){this.a=d},
h4I:function h4I(){},
h4J:function h4J(){},
h4K:function h4K(d,e){this.a=d
this.b=e},
h4G:function h4G(d,e){this.a=d
this.b=e},
h4F:function h4F(d){this.a=d},
aeU:function aeU(d,e){this.c=d
this.a=e},
e7x:function e7x(){},
e7y:function e7y(){},
e7z:function e7z(){},
e7A:function e7A(d){this.a=d},
e7C:function e7C(){},
e7B:function e7B(d){this.a=d},
aeT:function aeT(d,e){this.c=d
this.a=e},
e7w:function e7w(){},
bHs(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hR(A.b5,!1,w,d,new C.h4N(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h4N:function h4N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h4L:function h4L(d,e){this.a=d
this.b=e},
h4M:function h4M(d,e){this.a=d
this.b=e},
aCQ:function aCQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biw:function biw(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bv$=e
_.a9$=f
_.c=_.a=null},
dog:function dog(d,e){this.a=d
this.b=e},
dof:function dof(){},
afh:function afh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNg:function aNg(){},
asE(d,e,f){return new C.b33(f,d,e,null)},
i0k(d){var w=B.a(A.h.ad(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nO(w[0],v,new C.ciK(),null)
return A.d.aM(w,".")},
b2g(){var w=$.tT
if((w>0?$.tT=w-1:w)<=0)$.tT=0},
aiG(d,e){var w=0,v=B.j(x.H),u
var $async$aiG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hla
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiG)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiG,v)},
b33:function b33(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciL:function ciL(d){this.a=d},
ciK:function ciK(){},
O5:function O5(){},
c69:function c69(){},
hku(d){if(d>0)return"+"+d
return""+d},
hjJ(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fSW(d,e){var w=J.t(e,d)
if(w==null)w=B.fRI().h(0,d)
return w==null?90:w},
fxJ(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.k9(u,new C.fxK(),u.$ti.k("k9<cj.E,q>")))
A.d.e0(v,e)
return v},
hDc(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pK(s,3,s.$ti.k("cj.E")))
A.d.e0(t,e)
return t},
ilF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
b2.cU(42)
for(w=x.s,v=0;v<200;++v){u=A.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aw(12)]
s=[2,3,5,6,7,10,11,13][b2.aw(8)]
r=A.h.M(Math.sqrt(t))
q=2+b2.aw(4)
p=A.o.aq(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.JE("Simplify \u221a("+t*s+"x^"+q+")",m,C.hDc(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JE("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fxJ(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JE("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fxJ(g,b2)))}else b1.push(new C.JE("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fxJ(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h5()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.h.fL(a4)?""+A.h.M(a4):"\u221a"+a3
b1.push(new C.JE("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fxJ(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JE("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hDc(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
iwJ(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dt(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hh(t)
if(v!==d)return v}return new B.dt(t,x.bJ).hh(0)},
JE:function JE(d,e,f){this.a=d
this.b=e
this.c=f},
fxK:function fxK(){},
arc:function arc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFG:function aFG(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e0_:function e0_(d){this.a=d},
e00:function e00(d){this.a=d},
e01:function e01(d){this.a=d},
e02:function e02(d,e){this.a=d
this.b=e},
e03:function e03(d,e){this.a=d
this.b=e},
e04:function e04(d){this.a=d},
e_Z:function e_Z(d){this.a=d},
e05:function e05(d){this.a=d},
e_Y:function e_Y(d){this.a=d},
e08:function e08(d){this.a=d},
e09:function e09(d){this.a=d},
e07:function e07(d,e){this.a=d
this.b=e},
e06:function e06(d,e){this.a=d
this.b=e},
arV:function arV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFW:function aFW(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e7I:function e7I(d,e,f){this.a=d
this.b=e
this.c=f},
e7J:function e7J(d){this.a=d},
e7E:function e7E(d){this.a=d},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7F:function e7F(d,e){this.a=d
this.b=e},
e7H:function e7H(d,e){this.a=d
this.b=e},
e7D:function e7D(d){this.a=d},
hXw(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bR(36e8)
try{w=d.h(0,"start")
p=B.n3(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n3(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rR(w,u,t,s,r,q==null?null:J.k(q))},
a8U(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8U)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d7(s,x.f)
p=B.cF(p,new C.chy(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.chz())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8U,v)},
asa(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$asa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8U(d),$async$asa)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.chv(e))
q.I(r,e)
q.b0(r,new C.chw())
w=3
return B.b(B.az(),$async$asa)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,ab<q,@>>")
q=B.B(new B.N(q,new C.chx(),s),s.k("ak.E"))
w=4
return B.b(u.aG("String","ngmy_helper_calendar_v1_"+t,A.W.av(q,null)),$async$asa)
case 4:return B.h(null,v)}})
return B.i($async$asa,v)},
i_S(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dH(d,new C.chA(v,v.bR(B.dx(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
huy(d){var w,v,u,t,s,r,q,p,o,n,m=C.i_S(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cT(m,0,B.dA(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gK(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.dh(s),12)===0?12:A.o.F(B.dh(s),12)
q=B.dh(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fV(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bM(s)+"/"+B.bY(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rR:function rR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chy:function chy(){},
chz:function chz(){},
chv:function chv(d){this.a=d},
chw:function chw(){},
chx:function chx(){},
chA:function chA(d,e){this.a=d
this.b=e},
hXx(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n3(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=n
t=d.h(0,"phone")
t=t==null?o:J.k(t)
s=d.h(0,"name")
s=s==null?o:J.k(s)
r=d.h(0,"note")
r=r==null?o:J.k(r)
q=d.h(0,"transcript")
q=q==null?o:J.k(q)
p=d.h(0,"source")
return new C.rS(w,u,t,s,r,q,J.k(p==null?"user":p))},
hsQ(d){var w=A.o.F(B.dh(d),12)===0?12:A.o.F(B.dh(d),12),v=B.dh(d)>=12?"PM":"AM"
return""+B.bM(d)+"/"+B.bY(d)+" "+w+":"+A.a.b1(A.o.v(B.fV(d)),2,"0")+" "+v},
VV(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VV)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d7(s,x.f)
p=B.cF(p,new C.c9h(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.c9i())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VV,v)},
b0y(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0y=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0y)
case 2:u=g
t=B.cT(e,0,B.dA(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,ab<q,@>>")
r=B.B(new B.N(t,new C.c9f(),r),r.k("ak.E"))
w=3
return B.b(u.aG("String","ngmy_call_memory_v1_"+s,A.W.av(r,null)),$async$b0y)
case 3:return B.h(null,v)}})
return B.i($async$b0y,v)},
b0z(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.VV(d),$async$b0z)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c9g())
w=5
return B.b(C.b0y(d,q),$async$b0z)
case 5:return B.h(null,v)}})
return B.i($async$b0z,v)},
c9j(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9j=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VV(d),$async$c9j)
case 3:t=s.dH(g,new C.c9k(e.bR(-72e8),e.bR(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9j,v)},
hsR(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bR(w,w.gK(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWM()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.aB(s,0,177)+"\u2026":s)+"\n"}}r=r.gK(d)>e?u+("\u2026 and "+(r.gK(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
isA(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bM(p),B.bY(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bR(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bR(r)
w=B.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.cb(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.cb(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=A.a.q(o,"am")||A.a.q(o,"morning")||A.a.q(o,"night")
if(v)if(A.a.q(o,"pm")||A.a.q(o,"afternoon")||A.a.q(o,"evening"))u=u<12?u+12:u
if(q&&A.a.q(o,"pm"))u=u<12?u+12:u
return B.c0(B.bD(n),B.bM(n),B.bY(n),u,t,0,0,0)},
hJA(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rS:function rS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9h:function c9h(){},
c9i:function c9i(){},
c9f:function c9f(){},
c9g:function c9g(){},
c9k:function c9k(d,e){this.a=d
this.b=e},
huB(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lT(t,w,v,u==null?null:J.k(u))},
i_Y(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.chI(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqk
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iC(r,w,v,u,t,typeof d.h(0,s)=="number"?A.h.M(B.dF(d.h(0,s))):0)},
i_X(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ie2(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.h.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.h.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chG(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.iq(p,w,v,u,s==null?D.aDh:s,t)},
ie3(d){var w,v,u,t=B.J([F.Dt,"investments",A.nO,"games",A.jt,"loans",A.hE,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kg,"store",A.r_,"jobs",A.nN,"refunds",A.eY,"account",A.lr,"music",A.zC,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a4(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ie2(d){switch(d){case"investments":return F.Dt
case"games":return A.nO
case"loans":return A.jt
case"withdrawals":return A.hE
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kg
case"jobs":return A.r_
case"refunds":return A.nN
case"account":return A.eY
case"music":return A.lr
default:return A.zC}},
ni(d){var w=B.a([new C.lT("text",d,null,null)],x.a)
return w},
aiC(){var w=null,v=x.v
return B.a([new C.iq("investments","Investments",F.Dt,4280468830,B.a([new C.iC("inv1","How do I buy an investment plan?",C.ni("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iC("inv2","When do I get paid from my plan?",C.ni("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iC("inv3","Can I have more than one plan?",C.ni("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iq("games","Games",A.nO,4287323382,B.a([new C.iC("gam1","How do NGMY games work?",C.ni("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iC("gam2","Why did my game payout change?",C.ni("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iq("loans","Loans",A.jt,4294538006,B.a([new C.iC("loan1","How do I apply for a loan?",C.ni("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iC("loan2","What is the repayment period?",C.ni("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iq("withdrawals","Withdrawals",A.hE,4282090230,B.a([new C.iC("wd1","How do I withdraw money?",C.ni("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iC("wd2","Why is my withdrawal pending?",C.ni("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iq("deposits","Deposits",A.jN,4279548070,B.a([new C.iC("dep1","How do I deposit funds?",C.ni("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iC("dep2","How long until my deposit posts?",C.ni("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iq("civic","Civic Registry",A.l2,4289170426,B.a([new C.iC("civ1","What is Civic Registry?",C.ni("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iC("civ2","What does \u201cmissed\u201d mean on my profile?",C.ni("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iq("store","NGMY Store",A.kg,4293675161,B.a([new C.iC("sto1","How do I buy from NGMY Store?",C.ni("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iC("sto2","How do I sell in the store?",C.ni("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iq("jobs","Jobs & Creator",A.r_,4293548044,B.a([new C.iC("job1","How do I find jobs?",C.ni("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iC("job2","How do I post a job?",C.ni("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iq("refunds","Refunds",A.nN,4293870660,B.a([new C.iC("ref1","Can I get a refund?",C.ni("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iC("ref2","How long do refunds take?",C.ni("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iq("account","Account",A.eY,4281908728,B.a([new C.iC("acc1","How do I update my profile?",C.ni("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iC("acc2","I forgot my password \u2014 what now?",C.ni("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iq("music","Music Charts",A.lr,4290807036,B.a([new C.iC("mus1","What are Music Charts?",C.ni("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iC("mus2","How do I upload music?",C.ni("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iq("help","Help Center",A.zC,4279080072,B.a([new C.iC("hlp1","Where can I get live help?",C.ni("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iC("hlp2","How do daily Helper limits work?",C.ni("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
huC(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiC()
v=v.dO(d,new C.chL(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chM())
return w.length===0?C.aiC():w},
huD(d){var w=J.b9(d,new C.chN(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
asc(d){return C.i_Z(d)},
i_Z(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$asc=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$asc)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_kb_v1",A.W.av(C.huD(d),null)),$async$asc)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.aa(p)
$.am.$1("[helper kb] local save: "+B.w(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$asc,v)},
chK(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chK)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiC()
u=l
w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){l=C.aiC()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiC()
u=l
w=1
break}n=C.huC(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.aa(j)
$.am.$1("[helper kb] local load: "+B.w(m))
l=C.aiC()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chK,v)},
b2C(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2C=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2C)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2C)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.aa(o)
$.am.$1("[helper kb] cloud fetch: "+B.w(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b2C,v)},
b2D(d){return C.i0_(d)},
i0_(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2D=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2D)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hQ("ngmy_helper_kb",d,!1,!1,A.cR,null),$async$b2D)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.aa(o)
$.am.$1("[helper kb] cloud upsert: "+B.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b2D,v)},
asd(){var w=0,v=B.j(x.I),u,t,s,r
var $async$asd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chK(),$async$asd)
case 3:s=e
w=4
return B.b(C.b2C(),$async$asd)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.huC(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.asc(t),$async$asd)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asd,v)},
chO(d){var w=0,v=B.j(x.y),u
var $async$chO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asc(d),$async$chO)
case 3:u=C.b2D(C.huD(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chO,v)},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iC:function iC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chJ:function chJ(){},
chI:function chI(){},
iq:function iq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chH:function chH(){},
chG:function chG(){},
chL:function chL(){},
chM:function chM(){},
chN:function chN(){},
bbZ:function bbZ(d){this.a=d},
WU:function WU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG7:function aG7(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ebO:function ebO(){},
ebP:function ebP(){},
ebI:function ebI(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebr:function ebr(d,e){this.a=d
this.b=e},
ebs:function ebs(d){this.a=d},
ebt:function ebt(d,e,f){this.a=d
this.b=e
this.c=f},
ebq:function ebq(d){this.a=d},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebH:function ebH(d){this.a=d},
ebz:function ebz(d){this.a=d},
ebA:function ebA(d,e,f){this.a=d
this.b=e
this.c=f},
eby:function eby(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e,f){this.a=d
this.b=e
this.c=f},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebB:function ebB(d,e,f){this.a=d
this.b=e
this.c=f},
ebv:function ebv(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebw:function ebw(d,e){this.a=d
this.b=e},
ebx:function ebx(d){this.a=d},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebL:function ebL(){},
ebK:function ebK(d,e){this.a=d
this.b=e},
QG:function QG(d,e){this.c=d
this.a=e},
bdV:function bdV(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cX9:function cX9(d){this.a=d},
cX8:function cX8(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
cXa:function cXa(d){this.a=d},
cX7:function cX7(d,e){this.a=d
this.b=e},
cX5:function cX5(d,e){this.a=d
this.b=e},
cXb:function cXb(d){this.a=d},
cXc:function cXc(d,e){this.a=d
this.b=e},
a1t:function a1t(d,e,f){this.c=d
this.d=e
this.a=f},
aI9:function aI9(){this.d=$
this.c=this.a=null},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3T:function f3T(d){this.a=d},
f3Z:function f3Z(){},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
f3X:function f3X(d,e){this.a=d
this.b=e},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3W:function f3W(d,e,f){this.a=d
this.b=e
this.c=f},
f3V:function f3V(d,e,f){this.a=d
this.b=e
this.c=f},
a1s:function a1s(d,e){this.c=d
this.a=e},
aI8:function aI8(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f3O:function f3O(d,e){this.a=d
this.b=e},
f3M:function f3M(d){this.a=d},
f3N:function f3N(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3R:function f3R(d){this.a=d},
f3P:function f3P(d,e){this.a=d
this.b=e},
i_V(d){var w=new B.N(d,new C.chD(),B.T(d).k("N<1,q>")).aM(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chE(d,e,f){return C.i_W(d,e,f)},
i_W(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chE=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Lc([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rk(B.nl(b3),C.i_V(b6)+"\n\nAdmin instruction:\n"+b4,A.i3,null,null),$async$chE)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Lc([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d2(s,"```"))s=A.a.ek(J.hob(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.W.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Lc([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=B.a1(r,a4,a5)
a6=J.t(q,"message")
p=a6==null?null:J.k(a6)
a6=J.t(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.t(q,"categories")
a6=x.j
if(!a6.b(n)||J.ct(n)){a3=B.a([],x.Y)
u=new B.Lc([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=B.a1(a3.a(J.t(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.w(k)
h=J.t(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=B.a1(a3.a(J.t(h,f)),a4,a5)
d=J.t(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aT(d);a9.C();){a1=a9.gP(a9)
J.c4(a0,C.huB(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c4(a0,new C.lT("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.t(e,"question")
J.c4(g,new C.iC("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i_U(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.h.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c4(m,new C.iq(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Lc([m,null,p,a3])
w=1
break}catch(b7){a2=B.aa(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.Lc([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chE,v)},
i_U(d){switch(d){case"investments":return F.Dt
case"games":return A.nO
case"loans":return A.jt
case"withdrawals":return A.hE
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kg
case"jobs":return A.r_
case"refunds":return A.nN
case"account":return A.eY
case"music":return A.lr
default:return A.zC}},
iqY(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fTu(f))
if(w>=0){t[w]=J.fl(e).cQH(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bg9(u)
return t},
chD:function chD(){},
fTu:function fTu(d){this.a=d},
de3:function de3(d){this.a=d},
WV:function WV(d,e,f){this.c=d
this.d=e
this.a=f},
aG9:function aG9(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
eco:function eco(){},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec9:function ec9(d,e){this.a=d
this.b=e},
ec7:function ec7(d,e){this.a=d
this.b=e},
ec5:function ec5(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec8:function ec8(d,e,f){this.a=d
this.b=e
this.c=f},
ec0:function ec0(){},
ec1:function ec1(){},
ec2:function ec2(){},
ec3:function ec3(){},
ece:function ece(d,e){this.a=d
this.b=e},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(){},
ecl:function ecl(d){this.a=d},
ecd:function ecd(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecc:function ecc(d){this.a=d},
ecn:function ecn(d,e){this.a=d
this.b=e},
ecb:function ecb(d,e){this.a=d
this.b=e},
eca:function eca(d,e){this.a=d
this.b=e},
i7W(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.Gx(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.aB(d,t,q)
o=u?A.cA:A.aL
m.push(new B.eu(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.eu(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.eu(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cK,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.eu(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.ne,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aY(d,t)
m.push(B.cR(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u5(A.cy,n,n,n,A.eT,n,n,!0,n,B.cR(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.c1)},
dsz:function dsz(d){this.a=d},
aDK:function aDK(d,e){this.a=d
this.b=e},
asb:function asb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG8:function aG8(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(d){this.a=d},
ec_:function ec_(){},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebV:function ebV(){},
ebX:function ebX(){},
ebW:function ebW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebU:function ebU(d,e){this.a=d
this.b=e},
aDI:function aDI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ado:function ado(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2B:function b2B(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chF:function chF(d){this.a=d},
adf:function adf(d,e,f){this.c=d
this.d=e
this.a=f},
cQE:function cQE(d){this.a=d},
cQF:function cQF(){},
cQG:function cQG(d){this.a=d},
aDJ:function aDJ(d,e,f){this.c=d
this.d=e
this.a=f},
bk4:function bk4(){this.c=this.a=this.d=null},
dsA:function dsA(d,e){this.a=d
this.b=e},
dsC:function dsC(d,e){this.a=d
this.b=e},
dsB:function dsB(d){this.a=d},
i1s(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i1t(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i1r(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hD7(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fxs(),x.cc).gK(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
isd(d,e,f,g,h,i,j,k){var w,v,u,t,s
switch(g.a){case 0:w=j==null?null:j.d
w="Language: Swahili (East African \u2014 Tanzania/Kenya). Style: "+(w==null?"general Swahili song":w)+"."
break
case 1:w=j==null?null:j.d
w="Language: English. Style: "+(w==null?"general English song":w)+"."
break
case 2:w='MIX TWIST MODE \u2014 this is NOT a normal song. Every bar must RHYME and TWIST.\n\nTWIST = one phrase heard two ways (Swahili pun, name split, English flip). Examples:\n\u2022 "mambo mengi mpaka wana shangaha" / "kuhona Idi Amin dada amezaha"\n  \u2014 Idi Amin Dada (leader) but "dada" = sister; "amezaha" rhymes with shangaha AND means sister gave birth / twist on the name.\n\u2022 "KATI YA KISU NA JUA NINI KINA CHOMA" \u2014 kisu (knife) vs jua (sun), what burns?\n\u2022 "we just live in the moment \u2014 atulipi rent" \u2014 English freedom vs Swahili "we don\'t pay rent".\n\u2022 "Between my group and a private jet \u2014 which one flies?" \u2014 fly = looking fly/stylish AND a jet flies.\n\u2022 "Where do you live?" / "I live in the moment" \u2014 live (where you stay) vs live (in the now).\n\nRULES FOR MIX:\n1. NO line without rhyme \u2014 every couplet or quatrain must rhyme tight.\n2. At least 2\u20133 twist bars per verse (names, homophones, Swahili/English double meaning).\n3. Twist can use historical names, street slang, bible words, or everyday words that flip.\n4. Lines must still MAKE SENSE when you hear both meanings \u2014 twists must FLOW together, not random words.\n5. Swahili + English can sit in the same bar when the twist lands harder.\n6. When artist gives a rough line, polish it into rhyming twist bars that connect bar-to-bar.\n'
break
default:w=null}v=f?'FIRST REQUEST \u2014 WRITE A WHOLE COMPLETE SONG NOW. Required sections: [Verse 1], [Verse 2], [Chorus] (repeatable hook), and at least one of [Bridge] or [Verse 3]. Optional [Outro]. Minimum 20\u201332 lines of lyrics total. Do NOT give a short teaser, sample, or "here is the start" \u2014 deliver the FULL song in one reply. User should NOT need Continue just to get a basic complete song.\n':""
u=e?"CONTINUE MODE: User wants MORE of the SAME song after your full song. Read all prior lyrics. Add [Verse 3+], extra [Chorus], [Bridge], or [Outro] \u2014 pick up the story, same twists, same rhyme scheme. Do NOT restart.\n":""
t=h||k?"REWRITE / FIX MODE: Artist gave their own lines or asked to fix rhyme, flow, or sound. KEEP their story, topic, and meaning. Improve rhymes, twists, punchlines, and how bars connect. Return the FULL improved song \u2014 not tips or commentary.\n":""
s=d?"BIBLE MODE: Artist gave a Bible verse or faith topic. Build the FULL song around it. Weave their verse into lyrics. Also pick 1\u20132 OTHER Bible verses on the SAME topic/theme (tag like [Psalm 23:1] or [Romans 8:28]). Keep it musical \u2014 not a sermon essay.\n":""
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i1r(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
at1:function at1(d,e){this.a=d
this.b=e},
JJ:function JJ(d,e){this.a=d
this.b=e},
rX:function rX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxs:function fxs(){},
ase:function ase(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGa:function aGa(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bv$=i
_.a9$=j
_.c=_.a=null},
ecC:function ecC(d,e){this.a=d
this.b=e},
ect:function ect(d){this.a=d},
ecv:function ecv(){},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecx:function ecx(d){this.a=d},
ecy:function ecy(){},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecG:function ecG(){},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecL:function ecL(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecp:function ecp(d){this.a=d},
ecq:function ecq(d){this.a=d},
aOu:function aOu(){},
chQ(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.Uh
w=1
break}w=3
return B.b(B.az(),$async$chQ)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Uh
w=1
break}try{q=B.a1(x.f.a(A.W.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WW(p,o,n,q)
w=1
break}catch(l){s=B.aa(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.Uh
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chQ,v)},
asf(d,e){var w=0,v=B.j(x.H),u
var $async$asf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$asf)
case 4:w=3
return B.b(g.aG("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.W.av(e.aj(),null)),$async$asf)
case 3:case 1:return B.h(u,v)}})
return B.i($async$asf,v)},
chP(d){var w=0,v=B.j(x.gp),u,t
var $async$chP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WW(!0,!0,!0,!0)
w=3
return B.b(C.asf(d,t),$async$chP)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chP,v)},
hJB(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hJz(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WW:function WW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHw(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHw=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2w(h),$async$bHw)
case 3:if(j){w=1
break}w=4
return B.b(C.as7(h),$async$bHw)
case 4:if(d.e==null){w=1
break}t=B.qW(d,!0)
t.toString
s=B.dl()
s.b=B.pD(new C.h5E(g,e,f,s),!1,!1)
t.me(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHw,v)},
h5E:function h5E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5D:function h5D(d){this.a=d},
a0d:function a0d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD8:function aD8(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dpV:function dpV(d){this.a=d},
dpW:function dpW(d,e,f){this.a=d
this.b=e
this.c=f},
dq0:function dq0(){},
dq_:function dq_(d){this.a=d},
dpX:function dpX(d){this.a=d},
dpY:function dpY(){},
dpZ:function dpZ(d){this.a=d},
aNl:function aNl(){},
i0W(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i0V(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asN(d){return C.i0T(d)},
i0T(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asN)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.aa(o)
$.am.$1("[local deposit qr] load: "+B.w(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asN,v)},
b3r(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3r=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i0W(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3r)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.z(J.t(r,"redeemed"),!0)){u=null
w=1
break}p=J.t(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[local deposit qr] code lookup: "+B.w(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b3r,v)},
hv3(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aY(v,14))
return w.length===0?null:w}return null},
i0U(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.cjE(A.a.i(d.toLowerCase()),w))},
hv4(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qh(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qh(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qh(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qh(!1,0,"Verification code does not match this deposit.")
if(!C.i0U(e,d,w))return new C.qh(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hdk(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_s
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OS(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OS(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OS(!0,!1,!1,!1)},
cjK(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hv3(d)
if(s==null){u=D.Uj
w=1
break}w=3
return B.b(C.asN(s),$async$cjK)
case 3:t=g
if(t==null){u=D.Uj
w=1
break}u=C.hdk(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjK,v)},
b3t(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3t=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3r(d),$async$b3t)
case 3:s=g
if(s==null||s.length===0){u=D.Uj
w=1
break}w=4
return B.b(C.asN(s),$async$b3t)
case 4:t=g
if(t==null){u=D.Uj
w=1
break}u=C.hdk(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3t,v)},
cjL(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjL=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3r(d),$async$cjL)
case 3:t=j
if(t==null||t.length===0){u=new C.qh(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xe(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjL,v)},
Xe(d,e,f,g,h){return C.i0X(d,e,f,g,h)},
i0X(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xe=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hv3(a4)
if(a0==null){u=new C.qh(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asN(a0),$async$Xe)
case 3:k=a8
if(k==null){u=new C.qh(!1,0,y.m)
w=1
break}j=C.hdk(k,a5)
if(j.b){u=new C.qh(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qh(!1,0,y.u)
w=1
break}if(j.c){u=new C.qh(!1,0,y.j)
w=1
break}i=C.hv4(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qh(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xe)
case 8:p=a8
if(p==null){u=new C.qh(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qh(!1,0,"This deposit code was already used.")
w=1
break}o=C.hv4(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dI(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hQ("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cR,null),$async$Xe)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hQ("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cR,null),$async$Xe)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.aa(a1)
$.am.$1("[local deposit qr] redeem: "+B.w(l))
u=new C.qh(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.qh(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xe,v)},
OS:function OS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qh:function qh(d,e,f){this.a=d
this.b=e
this.c=f},
cjE:function cjE(d,e){this.a=d
this.b=e},
cjS(d,e){var w
B.hk5(d,e,!1)
B.rj(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bs(!0,!1,d.d,w)},
a9g(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bM(d)===e.gcf()&&B.bY(d)===e.gcv()},
i14(d){var w=B.dh(d)*60+B.fV(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hvb(d){if(B.dh(d)>=12)return!1
if(B.mn(d)===6||B.mn(d)===7)return!1
return!0},
cjW(d){var w=d.c?d.bU():d
return w.d2(B.c0(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))},
hdo(d,e){var w,v,u,t=d.gD9()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9g(d.fx,e)&&d.fy>0.0001)return A.h.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjW(w))return 0
v=B.c0(e.gck(),e.gcf(),e.gcv(),12,0,0,0,0)
if(!e.d2(v))return t
if(!e.cb(w))return 0
u=A.o.aq(v.bz(w).a,1000)
if(u<=0)return t
return A.h.D(t*(A.o.D(A.o.aq(e.bz(w).a,1000),0,u)/u),0,t)},
hdn(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9g(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.cjR(s))&&C.cjW(t)){r=d.gD9()
v=r>0
if(v){q=new B.d8(s,d.a,r,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cw,p)
C.cjS(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9g(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9g(o,p)&&!C.cjW(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjR:function cjR(d){this.a=d},
igd(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
ixB(d,e,f,g,h,i){return B.hF(d,new C.asO(f,e,i,g,h,null),!0,null,x.H)},
hzr(d){var w,v,u=d.c?d.bU():d,t=B.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bM(u)+"/"+B.bY(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fV(u)),2,"0")+" "+v},
hHk(d){var w=d.x
if(w===A.dG)return"Processing"
if(w===A.kK)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
iow(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fS)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
ifS(d){var w=d.d,v=w===A.fS||w===A.p9||w===A.h8||w===A.kL,u=d.x
if(u===A.dG)return w===A.f4?-d.c:0
if(u!==A.cw)return 0
w=d.c
return v?w:-w},
ip4(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b0(q,new C.fPh())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.ifS(s)
if(r<0)r=0
w.n(0,s.a,new B.brD(v,r))}return w},
asO:function asO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGx:function aGx(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
er3:function er3(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erM:function erM(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
ert:function ert(){},
eru:function eru(d){this.a=d},
erv:function erv(){},
erw:function erw(d){this.a=d},
erx:function erx(d,e,f){this.a=d
this.b=e
this.c=f},
ery:function ery(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ern:function ern(d,e){this.a=d
this.b=e},
er4:function er4(d,e,f){this.a=d
this.b=e
this.c=f},
ero:function ero(){},
erp:function erp(){},
erq:function erq(d){this.a=d},
err:function err(){},
er8:function er8(d,e){this.a=d
this.b=e},
er9:function er9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erh:function erh(){},
ere:function ere(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erj:function erj(d,e,f){this.a=d
this.b=e
this.c=f},
erk:function erk(d){this.a=d},
erm:function erm(d){this.a=d},
erl:function erl(d){this.a=d},
era:function era(d){this.a=d},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
erC:function erC(){},
erD:function erD(){},
erH:function erH(d){this.a=d},
erA:function erA(d){this.a=d},
erI:function erI(d){this.a=d},
erz:function erz(d){this.a=d},
erJ:function erJ(d){this.a=d},
erE:function erE(d){this.a=d},
erF:function erF(d){this.a=d},
erG:function erG(d){this.a=d},
erB:function erB(d){this.a=d},
er7:function er7(d){this.a=d},
er6:function er6(d){this.a=d},
er5:function er5(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
aDW:function aDW(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
duk:function duk(){},
dul:function dul(){},
dum:function dum(d,e,f){this.a=d
this.b=e
this.c=f},
duj:function duj(d){this.a=d},
dun:function dun(d,e){this.a=d
this.b=e},
dui:function dui(d){this.a=d},
aDV:function aDV(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k
_.Q=l
_.a=m},
bkO:function bkO(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dud:function dud(d){this.a=d},
due:function due(d){this.a=d},
duf:function duf(d){this.a=d},
dug:function dug(){},
duh:function duh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
duc:function duc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dub:function dub(d){this.a=d},
beo:function beo(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ben:function ben(d,e,f){this.b=d
this.d=e
this.a=f},
bem:function bem(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDX:function aDX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDY:function aDY(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
duE:function duE(){},
duF:function duF(){},
duG:function duG(){},
duq:function duq(d){this.a=d},
dup:function dup(d,e){this.a=d
this.b=e},
duo:function duo(d,e){this.a=d
this.b=e},
duB:function duB(d,e){this.a=d
this.b=e},
duD:function duD(d,e){this.a=d
this.b=e},
duC:function duC(d,e){this.a=d
this.b=e},
duA:function duA(){},
duz:function duz(d){this.a=d},
duy:function duy(){},
dut:function dut(d){this.a=d},
duu:function duu(){},
duv:function duv(d){this.a=d},
duw:function duw(d){this.a=d},
dus:function dus(){},
dux:function dux(d){this.a=d},
dur:function dur(d){this.a=d},
bdO:function bdO(d){this.a=d},
fPh:function fPh(){},
byZ:function byZ(d,e){this.b=d
this.a=e},
aNB:function aNB(){},
bAY:function bAY(){},
il8(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fGZ(v,g))
w=B.S(x.N,x.z)
w.n(0,"id",A.o.v(1000*Date.now()))
w.n(0,"fromEmail",A.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&A.a.i(k).length!==0)w.n(0,"toName",A.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new B.V(Date.now(),0,!1).ag())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
A.d.I(d,w)},
aRO(d){var w,v=J.a8(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.h.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.h.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
iwf(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.h_F(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiR(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRO(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
inP(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRO(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRO(d)>0},
inO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.h.M(h)
if(g==null)g=1
h=B.aI(i.h(d,"matchesPlayed"))
w=h==null?null:A.h.M(h)
v=(w==null?0:w)+1
u=A.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=B.a1(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?B.a1(p,s,r):B.S(s,r)
h=q.h(0,"player1Email")
if(h==null)h=q.h(0,"playerXEmail")
if(h==null)h=i.h(d,"fromEmail")
n=A.a.i(J.k(h==null?"":h).toLowerCase())
h=q.h(0,"player2Email")
if(h==null)h=q.h(0,"playerOEmail")
i=h==null?i.h(d,"toEmail"):h
m=A.a.i(J.k(i==null?"":i).toLowerCase())
if(n===u&&m.length!==0)l=m
else l=m===u&&n.length!==0?n:null
k=J.z(o.h(0,u),!0)
j=l!=null&&J.z(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
il7(d,e){var w
C.aiR(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fGY(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uy(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ihD(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(f,"toEmail")
w=A.a.i(J.k(r==null?"":r).toLowerCase())
r=d.h(0,"player1Email")
if(r==null)r=d.h(0,"playerXEmail")
v=A.a.i(J.k(r==null?q:r).toLowerCase())
r=d.h(0,"player2Email")
if(r==null)r=d.h(0,"playerOEmail")
u=A.a.i(J.k(r==null?w:r).toLowerCase())
if(e===v){r=d.h(0,"player1Name")
if(r==null)r=d.h(0,"playerXName")
s=r==null?s.h(f,t):r
return A.a.i(J.k(s==null?"":s))}if(e===u){r=d.h(0,"player2Name")
if(r==null)r=d.h(0,"playerOName")
s=r==null?s.h(f,"toName"):r
return A.a.i(J.k(s==null?"":s))}if(e===q){s=s.h(f,t)
return A.a.i(J.k(s==null?"":s))}if(e===w){s=s.h(f,"toName")
return A.a.i(J.k(s==null?"":s))}return""},
hjF(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ihD(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGk(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGk)
case 7:r=e
q=B.aW(J.t(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.S(k,k)
w=1
break}p=A.W.aP(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.S(k,k)
w=1
break}k=x.N
o=B.S(k,k)
for(k=J.aT(p),j=x.f;k.C();){n=k.gP(k)
if(!j.b(n))continue
i=J.t(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.t(n,"username")
l=A.a.i(J.k(i==null?"":i))
if(J.ad(m)!==0&&J.ad(l)!==0)J.aJ(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=B.S(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bGk,v)},
bFm(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGk(),$async$bFm)
case 3:u=t.hjF(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFm,v)},
LZ(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$LZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hEu.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bz(p)
t=t.a>B.dx(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hEu.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S4(A.cg,q),$async$LZ)
case 5:case 4:s=$.hEt.h(0,q)
if(s==null){u=C.uy(e,q)
w=1
break}r=C.uy(B.bFt(e,B.a([s],x._)),q)
if(r!=null)B.hmq(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$LZ,v)},
iwu(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ie9(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.J(["ttt",B.c1(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e4(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c1(7,0,!1,q)
return B.J(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e4(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.fv4(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
il6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ie9(u,f)
w=t.h(u,"fromEmail")
q=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.h(u,"toEmail")
p=A.a.i(J.k(w==null?"":w).toLowerCase())
w=r.h(0,l)
if(w==null)w=r.h(0,"playerXEmail")
o=A.a.i(J.k(w==null?q:w).toLowerCase())
w=r.h(0,k)
if(w==null)w=r.h(0,"playerOEmail")
n=A.a.i(J.k(w==null?p:w).toLowerCase())
w=o.length!==0
if(w)r.n(0,l,o)
s=n.length!==0
if(s)r.n(0,k,n)
m=B.S(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
iws(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aI(t.h(u,i))
w=w==null?null:A.h.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=B.aI(t.h(u,"matchesTotal"))
q=w==null?null:A.h.M(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=B.a1(p,w,s)
o.n(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=A.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=A.a.i(J.k(n==null?"":n).toLowerCase())
k=B.S(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",B.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}},
hmp(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fZ4(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fZ4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiR(d)
t=$.hiV
if(t==null)s=$.hiV=B.S4(A.cg,null).fw(new C.fZ5())
else s=t
w=3
return B.b(s,$async$fZ4)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.fZ6(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFt(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZ4,v)},
aiS(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiR(d)
t=B.T(d).k("N<1,ab<q,@>>")
t=B.B(new B.N(d,new C.fWH(),t),t.k("ak.E"))
w=3
return B.b(B.S4(t,null),$async$aiS)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFt(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiS,v)},
aSL(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSL=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hmp(d,e,f)
t=C.uy(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S4(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSL)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uy(s,e)
if(r!=null)B.hmq(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSL,v)},
isY(d,e,f){var w
C.hmp(d,e,f)
w=$.hiJ.h(0,e)
if(w!=null)w.a1(0)
$.hiJ.n(0,e,B.cy(A.lP,new C.fWI(e,d)))},
hd5(d,e){return new C.b2e(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fGZ:function fGZ(d,e){this.a=d
this.b=e},
h_F:function h_F(d){this.a=d},
fGY:function fGY(d){this.a=d},
fv4:function fv4(d){this.a=d},
fZ5:function fZ5(){},
fZ6:function fZ6(){},
fWH:function fWH(){},
fWI:function fWI(d,e){this.a=d
this.b=e},
b2e:function b2e(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
iwY(d,e,f){return B.bU(A.L,null,new C.h0R(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h0R:function h0R(d,e){this.a=d
this.b=e},
a10:function a10(d,e,f){this.c=d
this.d=e
this.a=f},
aGl:function aGl(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
elH:function elH(d){this.a=d},
elK:function elK(d){this.a=d},
elL:function elL(d){this.a=d},
elJ:function elJ(d){this.a=d},
elM:function elM(d){this.a=d},
elN:function elN(d,e){this.a=d
this.b=e},
elI:function elI(d,e){this.a=d
this.b=e},
irl(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iZ
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iZ
v=Date.now()
u=C.igW(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kI("calendar",B.J(["title",C.igV(t,w),"start",u.ag(),"end",u.bR(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
igV(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFj(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFj(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hFj(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fFW(),B.T(w).k("N<1,q>")).aM(0," ")},
igW(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bM(e),B.bY(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bR(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKt.gdQ(D.aKt),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cS(d,u,0)){t=C.ifR(o,v.b)
o=t
break}}s=B.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
if(s!=null){w=s.b
v=w[1]
r=B.cb(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.cb(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.c0(B.bD(o),B.bM(o),B.bY(o),r,q,0,0,0)},
ifR(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mn(w)===e){u=!0
if(v<=0){t=d.bR(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bR(r)}return d.bR(r)},
fFW:function fFW(){},
irm(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.iZ
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cF(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.icY(w,j)
if(q==null||q.length===0)return A.iZ
t=B.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kI("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kI(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kI("call",B.J(["name",q],t,t))],x.Z)}return A.iZ},
icY(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:A.a.i(u)
if(t==null)t=""
u=B.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=A.a.i(B.aL(t,u,""))
u=B.af("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=A.a.i(B.aL(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=B.af("^\\d+$",!0,!1,!1,!1)
s=B.af("\\s",!0,!1,!1,!1)
s=B.aL(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.ikl(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
ikl(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fFV(),B.T(w).k("N<1,q>")).aM(0," ")},
fFV:function fFV(){},
hJI(d){var w=new B.N(d,new C.fZn(),B.T(d).k("N<1,ab<q,@>>")).c0(0,new C.fZo())
w=B.B(w,w.$ti.k("M.E"))
return w},
fZn:function fZn(){},
fZo:function fZo(){},
irp(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.iZ
w=A.a.i(d)
if(w.length===0)return A.iZ
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.iZ
u=B.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return A.iZ
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.S(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kI("send_email",t)],x.Z)},
iqv(d,e){var w
if(e)return d
w=J.dH(d,new C.fSG())
w=B.B(w,w.$ti.k("M.E"))
return w},
fSG:function fSG(){},
isV(d){switch(d){case"blackjack_vegas":return D.e3I
case"roulette_euro":return D.e3s
case"slots_jackpot":return D.e3z
case"poker_texas":return D.e3C
case"chess_royale":return D.e3t
case"connect_four_pro":return D.e3u
case"domino_block":return D.e3w
case"plinko_prizes":return D.e3E
case"spin_wheel":return D.e3B
case"baccarat_punto":return D.e3v
case"craps_table":return D.e3D
case"casino_war":return D.e3x
case"bingo_live":return D.e3A
case"solitaire_klondike":return D.e3H
case"backgammon_pro":return D.e3r
case"billiards_snooker":return D.e3F
case"profit_solve":return D.e3G
default:return D.e3y}},
fWy(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ac(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.X(A.nL,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbz,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.m(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ac(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bK2,B.d(D.cKk[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b4,B.as(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b4],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.n(A.hP,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
iua(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ac(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.fYO(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fRv,A.af,B.A(r,A.l,v,A.b9,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cbT,A.n),v,v,v,v,H.ans,v,v,v),A.aB,B.da(A.atA,v,D.fS9,d,B.bn(A.aQ,v,v,v,A.dA,v,A.a1K,v,v,v,v,v))],w),A.l,v,A.e,A.i,0,A.p)},
pA:function pA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btN:function btN(d,e){this.b=d
this.a=e},
fYO:function fYO(){},
i1E(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.ate(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.aw()))},
ilH(d,e,f,g,h){var w=new C.fIK(f,h)
switch(d){case"checkers_deluxe":return C.ibx(h,g,e,w)
case"tic_tac_go":return C.ikz(h,g,e,w)
case"blackjack_vegas":return C.iaQ(h,g,e,new C.fIE(w))
case"roulette_euro":return C.iiP(h,g,e,new C.fIF(w))
case"slots_jackpot":return C.ijE(h,g,e,new C.fIG(w))
case"billiards_snooker":return C.ihG(h,g,e,new C.fIH(w))
case"connect_four_pro":return C.ibU(h,g,e,w)
case"profit_solve":return C.ihJ(h,g,e,new C.fII(w))
default:return C.ibt(d,h,g,e,new C.fIJ(w))}},
ibx(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=B.m(12),t=B.K(D.a_8,A.r,8),s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bv(B.m(6),B.iA(!0,w,w,A.y,D.fpX,new C.fs6(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
ikz(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),w),B.E(B.as(new B.fG(1,B.ci(new C.fGg(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
iaQ(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xK,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fro(),B.T(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fWy(q[0],!1),A.bn,C.fWy(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4X(d.ay),v,v,v,v,v,v,D.fMl,v,v,v)
q=d.ay
w=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.frp(),w),w.k("ak.E"))
q=B.c_(A.fT,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eI,u,v),D.fYI,A.am,s,A.aB,D.h5r,r,A.am,q,A.b4,B.A(B.a([B.E(B.bJ(D.fSD,v,d.CW?v:new C.frq(d,e,f,g),v),1),A.ae,B.E(B.bJ(D.h7X,v,new C.frr(d,e,f,g),v),1)],t),A.l,v,A.e,A.i,0,v,v)],t),A.l,v,A.e,A.i,0,A.p)},
iiP(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=d.cx,t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eI,v,w),B.o(w,B.b3(w,w,w,new C.btN(u,w),A.aA),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fzi,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fT,B.iB(6,new C.fDa(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
ijE(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fF7(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eI,v,w),C.iua(new C.fF8(d,e,f,g),u)],x.p),A.l,w,A.e,A.i,0,A.p)},
ihG(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=B.m(20),t=B.K(A.iM,A.r,12),s=x.V,r=B.a([new B.ac(0,A.G,A.w.j(0.45),A.dn,18)],s),q=x.p
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8D,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.afQ,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.A,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ac(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eGc,A.n),w,w,w,A.f6,w,w,w,w),1),B.l0(A.bf,w,w,1,0,new C.fC_(d,f),d.dy),B.bJ(D.fXJ,w,new C.fC0(d,e,g,f),w)],q),A.l,w,A.e,A.i,0,A.p)},
ibU(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xK,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.bd,B.ay(v,B.x(B.iB(6,new C.fsy(d,w),!0,t),A.l,v,A.mu,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fsz(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eI,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dO,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
ihJ(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iI,w,w,w),B.d(d.fy,w,w,w,w,w,w,I.acw,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c7b,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e4,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fCb(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fWg,w,new C.fCc(d,e,g,f),w)],x.p),A.l,w,A.e,A.i,0,A.p)},
ibt(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.isV(d)
v=D.aKi.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.kJ,A.K,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ac(0,A.G,w.c.j(0.35),A.eS,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,A.Lc,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.mD,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.db,B.X(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aY,A.b2,A.x,t,n,n),A.n),n,n,n,A.f6,A.ac,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h72,n,new C.frU(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.cp,n,n,n,n,n)),n)],k),A.l,n,A.e,A.i,0,A.p)},
Fz:function Fz(d,e){this.a=d
this.b=e},
ate:function ate(d,e,f,g,h,i,j,k){var _=this
_.a=0
_.b=1
_.c=""
_.d=null
_.e=!1
_.f=null
_.r=!1
_.w=""
_.x=d
_.y=e
_.z=1
_.as=_.Q=null
_.at=f
_.ax=!0
_.ay=g
_.ch=h
_.CW=!1
_.cx=null
_.db=i
_.dx=0
_.dy=0.5
_.fr=j
_.fx=1
_.go=_.fy=""
_.id=k},
clx:function clx(){},
cly:function cly(){},
clw:function clw(){},
clz:function clz(){},
clv:function clv(){},
clB:function clB(){},
clC:function clC(){},
clu:function clu(d){this.a=d},
clA:function clA(){},
clt:function clt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIK:function fIK(d,e){this.a=d
this.b=e},
fIE:function fIE(d){this.a=d},
fIF:function fIF(d){this.a=d},
fIG:function fIG(d){this.a=d},
fIH:function fIH(d){this.a=d},
fII:function fII(d){this.a=d},
fIJ:function fIJ(d){this.a=d},
fs6:function fs6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs5:function fs5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGg:function fGg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGf:function fGf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fGe:function fGe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fro:function fro(){},
frp:function frp(){},
frq:function frq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frr:function frr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDa:function fDa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD9:function fD9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fF7:function fF7(){},
fF8:function fF8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fC_:function fC_(d,e){this.a=d
this.b=e},
fC0:function fC0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsz:function fsz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsy:function fsy(d,e){this.a=d
this.b=e},
fCb:function fCb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCc:function fCc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frU:function frU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ioy(d){var w,v=B.T(d).k("Y<1>")
v=B.pK(new B.Y(d,new C.fOk(),v),120,v.k("M.E"))
w=B.cF(v,new C.fOl(),B.a4(v).k("M.E"),x.N).aM(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fOk:function fOk(){},
fOl:function fOl(){},
aj2(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
au9:function au9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aH9:function aH9(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
eTA:function eTA(){},
aP5:function aP5(){},
i_C(){var w=$.Jw
if(w<=0)return;--w
$.Jw=w
if(w===0){w=$.hun
if(w!=null)w.$0()}},
cgL(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arO(d){var w=0,v=B.j(x.H),u,t
var $async$arO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hd0.I(0,t)
w=4
return B.b(B.az(),$async$arO)
case 4:w=3
return B.b(f.aG("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arO,v)},
arN(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgL(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hd0.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arN)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arN,v)},
WT(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$WT)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.S(x.N,x.z)
w=1
break}p=A.W.aP(0,q,null)
if(x.f.b(p)){o=B.a1(p,x.N,x.z)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:u=B.S(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WT,v)},
b2v(d){return C.i_P(d)},
i_P(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2v=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2v)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_ai_usage_v1",A.W.av(d,null)),$async$b2v)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$b2v,v)},
b2t(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afA(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bj(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afA(typeof v=="number"?A.o.D(A.h.M(v),0,999999):0,t)},
b2u(d,e){if(A.o.aq(e.bz(d.b).a,36e8)>=24)return new B.afA(0,e)
return d},
cho(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$cho=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WT(),$async$cho)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2u(C.b2t(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cho,v)},
chp(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$chp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WT(),$async$chp)
case 3:t=g
s=Date.now()
r=C.b2u(C.b2t(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bR(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chp,v)},
i_Q(d){var w,v,u,t=d.a,s=A.o.aq(t,1e6)
if(s<=0)return"0s"
w=A.o.aq(t,36e8)
v=A.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2w(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WT(),$async$b2w)
case 3:t=p.b2u(o.b2t(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2w)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2w,v)},
as7(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WT(),$async$as7)
case 3:t=s.b2u(r.b2t(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$as7)
case 5:w=4
return B.b(f.aG("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$as7)
case 4:case 1:return B.h(u,v)}})
return B.i($async$as7,v)},
as8(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$as8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WT(),$async$as8)
case 3:s=g
r=Date.now()
q=C.b2u(C.b2t(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2v(s),$async$as8)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as8,v)},
aiD(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiD=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hJA(a0))if(!C.hJz(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hJA(a0)?3:4
break
case 3:o=C.isA(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9j(e,o),$async$aiD)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hsQ(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWM()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MU("text/plain"),$async$aiD)
case 14:r=a2
p=r
if(p==null)p=null
else p=A.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+B.w(q)+"\n\n"
p.a+=m}else h.a+="CLIPBOARD: empty or not accessible \u2014 user may need to paste manually.\n\n"
t=2
w=13
break
case 11:t=10
g=s.pop()
h.a+="CLIPBOARD: could not read \u2014 ask user to paste the text.\n\n"
w=13
break
case 10:w=2
break
case 13:case 9:w=C.hJz(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8U(e),$async$aiD)
case 17:m=f.huy(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VV(e),$async$aiD)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hsR(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiD,v)},
i1c(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ck0(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ck0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hvg(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ck0)
case 7:r=f
if(r!=null){p=J.t(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[local growth income stash] code lookup: "+B.w(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ck0,v)},
asR(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asR)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cE(0,A.cD.aK(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aID(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.aa(j)
$.am.$1("[local growth income stash] consume: "+B.w(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asR,v)},
b3A(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i1c(q)?3:4
break
case 3:w=5
return B.b(C.ck0(q),$async$b3A)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asR(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.asR(A.a.i(A.a.aY(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asR(A.a.i(A.a.aY(q,15))),$async$b3A)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aID(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3A,v)},
hvw(d){var w=d.bK
if(w>=0)return w
return 1},
aiQ(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSX(d,e),$async$aiQ)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HE(d,null,null,!1,!0,""),$async$aiQ)
case 5:w=4
return B.b(t.$1(h),$async$aiQ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiQ,v)},
irk(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iZ
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.iZ
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.igU(w)
if(p!=null){v=p.a
r.b=s.bR(v)
q.b=C.hE5(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.aq(v,e)<=180)q.b="Reminder \u2014 "+A.o.aq(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.ek(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hE6(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bR(a0)
r.b=B.c0(B.bD(l),B.bM(l),B.bY(l),n,m,0,0,0).bR(-36e8)
if(r.bm().d2(s.bR(e)))r.b=J.c4(r.bm(),A.ox)
v=C.il4(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bR(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hE6(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bM(l),B.bY(l),h,g,0,0,0)
r.b=f.d2(s.bR(3e7))&&!v?f.bR(a0):f
q.b=C.hE5(a1,w)}}v=x.N
return B.a([new B.kI("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
igU(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.cb(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.X(r,"sec"))return new B.bf(1e6*A.o.D(s,5,86400))
if(A.a.X(r,"hour")||A.a.X(r,"hr"))return new B.bf(36e8*A.o.D(s,1,168))
return new B.bf(6e7*A.o.D(s,1,10080))}return null},
il4(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hE6(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hE5(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
i1x(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new B.bR(w,w.gK(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gK(d)>80?u+("\u2026 and "+(s.gK(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,Y,H,I,Z,P,E
J=c[1]
B=c[0]
A=c[2]
Q=c[82]
K=c[77]
R=c[85]
S=c[83]
L=c[43]
M=c[64]
T=c[84]
N=c[40]
U=c[81]
V=c[80]
W=c[55]
F=c[87]
O=c[73]
X=c[56]
C=a.updateHolder(c[3],C)
D=c[76]
G=c[22]
Y=c[36]
H=c[79]
I=c[53]
Z=c[86]
P=c[23]
E=c[78]
C.bv1.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Gb.prototype={
T(){return new C.aKI(this.$ti.k("aKI<Gb.T,Gb.S>"))}}
C.aKI.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hx(A.H2,v,null,null,w.$ti.k("hx<1>"))
u.e=w
u.Xl()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQH()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.H2,w.b,w.c,w.d,w.$ti)}v.Xl()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.my(d,w)},
t(){this.aQH()
this.a2()},
Xl(){var w,v=this
v.d=v.a.c.lQ(new C.ffx(v),new C.ffy(v),new C.ffz(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.a0f,w.b,w.c,w.d,w.$ti)},
aQH(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.ay1.prototype={
my(d,e){return this.e.$2(d,e)}}
C.an9.prototype={
T(){return C.i8h()},
bu(){return this.r.$0()}}
C.re.prototype={}
C.aCO.prototype={
aeG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.htW(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.htY(s),$async$aeG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeG,v)},
YP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asP(t.a.c),$async$YP)
case 3:if(e!=null&&t.c!=null)t.a.bu()
r=!C.cgL(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arN(t.a.c),$async$YP)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dml(t,s))
if(!s)t.aeG()
case 1:return B.h(u,v)}})
return B.i($async$YP,v)},
aeg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGk(),$async$aeg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dmw(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
Z(){var w,v,u=this
u.bzf()
$.tT=$.tT+1
w=u.a
$.bGp=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,ab<q,@>>")
w=B.B(new B.N(w,new C.dmO(),v),v.k("ak.E"))
u.f=w
u.aeg()
u.Ky()
u.YP()
u.e=B.df(A.ov,new C.dmP(u))},
Ky(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ky=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiR(t.a.d.bd)
w=3
return B.b(C.fZ4(t.a.d.bd),$async$Ky)
case 3:s=e
if(t.c==null){w=1
break}C.aiR(t.a.d.bd)
if(s!=null)t.m(new C.dmE(t,s))
else t.m(new C.dmF(t))
case 1:return B.h(u,v)}})
return B.i($async$Ky,v)},
t(){C.b2g()
var w=this.e
if(w!=null)w.a1(0)
this.bze()},
ajA(d,e,f){return this.czz(d,e,f)},
czz(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.il8(n,o.a,o.c,d.a,s,f,e,p)
t.a.bu()
w=3
return B.b(C.aiS(t.a.d.bd),$async$ajA)
case 3:if(t.c==null){w=1
break}t.m(new C.dmH(t))
r=f===1?"1 game":""+f+" games"
t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajA,v)},
Jh(d,e){return this.ckt(d,e)},
c7h(d){return this.Jh(d,null)},
ckt(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uy(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRO(s)<=0){t.c.J(x.q).f.U(D.aVD)
w=1
break}}w=5
return B.b(C.arN(t.a.c),$async$Jh)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hd1(r,C.fSR(q.c),p),$async$Jh)
case 6:w=1
break
case 4:o=new C.dmz(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hF(r,new C.aFF(p,q.d,q.f,q.r,new C.dmA(o),q.w,C.fSR(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hF(q,new C.an8(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dmB(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
c4o(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiR(i.a.d.bd)
C.aiR(i.f)
w=C.iwf(i.a.c.a,i.f)
v=C.il7(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bM
if(!u){t=A.d.gH(w)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=B.w(q==null?r.h(t,"fromEmail"):q)
p=B.w(r.h(t,"gameTitle"))
o=B.aI(r.h(t,g))
o=o==null?h:A.h.M(o)
if(o==null)o=1
r=B.aI(r.h(t,g))
r=r==null?h:A.h.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.o(h,B.x(B.a([D.h12,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.o7,h,h,h),A.P,B.A(B.a([B.E(B.dU(A.Lt,new C.dmr(i,t),h),1),A.ae,B.E(B.bJ(D.hat,h,new C.dms(i,t),h),1)],n),A.l,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.n),h,h,h,A.eg,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dM(i.y,new C.dmt(m),new C.dmu(i))
k=C.hjF(m,i.a.c.a,i.r)
j=C.aRO(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fTO,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.o7,h,h,h),A.aw,B.d(C.inO(m,i.a.c.a),h,h,h,h,h,h,A.Wm,h,h,h),A.P,B.bJ(D.h0j,h,new C.dmv(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.n),h,h,h,A.eg,A.bl,h,h,1/0)},
bW3(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fls.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EM(w[v])
t=A.h.D(u.d*0.58,0.12,0.3)
l.push(new B.rB(u.a,u.b,A.h.D(u.c*0.92,0,0.9),t).jd())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i5,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.i,0,n,n),A.aw,B.d(d.c,n,2,A.a2,n,n,n,A.pZ,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c4F,n,n,n,new C.dmn(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a11,B.o(n,D.c2D,A.f,n,n,new B.n(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.h.S(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ac(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.az,A.aC,A.x,l,n,n),A.n),n,92,n,A.eg,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dmo(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.ny:A.qt,k=m?A.iK.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iK:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.cf
if(!o.x)return C.aSm(n,l,B.as(B.n_(n,m?A.c:A.bf,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fSR(o.a.c)
return new C.OB(o.a.w,w,!0,o.gaVL(),n)}w=B.aD(d,A.dD,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ac(0,A.G,A.w.j(0.04),A.cM,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wo(new C.dmL(o,f,g),n,$.aTR(),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.n),n,n,n,n,A.a1e,n,n,1/0),A.T,o.c4o()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbW2(),B.T(v).k("N<1,v>")))
w=B.cc(B.x(s,A.l,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ac(0,A.G,A.w.j(m?0.28:0.08),A.i5,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aH(n,n,n,n,B.X(A.eL,j,n,n,n,18),n,n,n,o.gaVL(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oQ(!0,C.aSm(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OI,B.o(n,B.A(B.a([t,q,new B.D(A.iS,B.o(n,B.A(B.a([D.c_I,A.e7,C.asE(new C.dmM(o),A.kJ,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.n),n,n,n,n,A.hp,n,n,n),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.n),n,60,n,n,A.n2,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dmN(o),x.K)},
aVM(){var w,v
this.a.bu()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j3(w,v)}}
C.aFF.prototype={
T(){return new C.bmN()},
hK(d){return this.e.$1(d)},
bu(){return this.f.$0()},
aK1(){return this.r.$0()}}
C.bmN.prototype={
Z(){this.bAg()
this.d=B.Wj(this.a.d.bh)
$.tT=$.tT+1},
t(){C.b2g()
this.bAf()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.arc(v,new C.e_U(w),u,new C.e_V(w),new C.e_W(w,d),new C.e_X(w),null)}}
C.an8.prototype={
T(){return new C.aCN(new B.at(A.ax,$.aw()))},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()},
aK1(){return this.z.$0()}}
C.aCN.prototype={
Z(){this.bzd()
this.a.toString
$.tT=$.tT+1},
t(){C.b2g()
var w=this.d
w.V$=$.aw()
w.R$=0
this.bzc()},
a3L(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OL()
w=5
return B.b(C.arN(t.a.c),$async$a3L)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hd1(s,C.fSR(r.c),q),$async$a3L)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uy(s.d.bd,A.a.i(r))
if(p!=null&&C.aRO(p)<=0){t.c.J(x.q).f.U(D.aVD)
w=1
break}}o=B.cV(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.J(x.q).f.U(D.ft6)
w=1
break}m=B.M8(t.a.c.a,new C.dmf(t))
if(m+0.001<n){t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aK1()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d8(r,q.c.a,n,A.ks,A.fx,"Game bet: "+q.f,null,null,A.cw,new B.V(Date.now(),0,!1)))
t.a.bu()
if(D.fle.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hF(s,new C.aq1(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hF(s,new C.ana(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3L,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.Iq,o,o,o,new C.dmi(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.m(12),h=x.p
j=B.eM(B.a([B.o(o,B.as(C.asE(new C.dmj(p),A.iI,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.n),o,o,o,D.bEb,A.f2,o,o,o)],h),o,o,!0,!0,D.a0a,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.X(D.bRr,D.bxQ,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mD,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.o7,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dmk(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.i,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.o(o,B.x(B.a([D.hc9,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m0,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e4,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a86.l()>>>16&255,A.a86.l()>>>8&255,A.a86.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fTa,B.d("+ $"+A.h.ad(n*0.46,2),o,o,o,o,o,o,D.fIP,o,o,o),B.d("(46% return on $"+A.h.ad(p.e,2)+" bet)",o,o,o,o,o,o,A.pZ,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.n),o,o,o,o,A.cs,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h1k,A.P,q,A.P,B.o(o,B.x(B.a([D.fNV,B.d("$"+A.h.ad(m,2),o,o,o,o,o,o,D.fxu,o,o,o),B.d("8 pairs \xd7 $"+A.h.ad(m,2)+" each",o,o,o,o,o,o,A.pZ,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.n),o,o,o,o,A.cs,o,o,1/0)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(D.bt6,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fu(o,o,A.bf,o,o,o,o,o,o,A.c,o,A.hh,o,o,o,o,o,o,o,o)
return C.aSm(j,D.a0a,B.cc(B.o(o,B.x(B.a([k,A.aw,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iz(B.d("Start Game ($"+A.h.ad(p.e,2)+")",o,o,o,o,o,o,A.cd,o,o,o),p.gcDx(),r),o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.caU,A.n),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A.a1h,o,o,A.ah))}}
C.ana.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.aCP(A.cT,new B.at(A.ax,$.aw()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bu(){return this.z.$0()}}
C.aCP.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rX(d){return this.bUb(d)},
bUb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AS()
r=t.PA()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acG(d),$async$rX)
case 5:w=1
break
case 4:q=A.h.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uB(d),$async$rX)
case 9:w=7
break
case 8:w=10
return B.b(t.Ff(q,s,r),$async$rX)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rX,v)},
FS(d,e,f,g){return this.cBf(d,e,f,g)},
cBf(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHs(s,C.bH8(),C.hlP(),d,e,f,g),$async$FS)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FS,v)},
AS(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6d(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aj2(t,s.e.a.a)
case"memory":return s.ghR()&&D.nc.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aB2()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.b_
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aB2(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
PA(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hjJ()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b_
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fSW(w.e,w.d.y2)
if(v!==C.fSW(d.e,d.d.y2)&&u.c!=null)u.m(new C.do7(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzh()
w=i.a
w.toString
$.tT=$.tT+1
i.Q=C.fSW(w.e,w.d.y2)
i.b94()
i.ae0()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PY()
i.adE()
i.bn=B.df(A.h0,new C.doa(i))}if(A.d.q(D.SY,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uy(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a8(u)
s=t.h(u,"id")
J.k(s==null?"":s)
s=t.h(u,"fromEmail")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(u,"toEmail")
q=A.a.i(J.k(s==null?"":s).toLowerCase())
p=A.a.i(v.toLowerCase())
s=x.f
o=x.N
n=x.z
m=s.b(t.h(u,h))?B.a1(s.a(t.h(u,h)),o,n):B.S(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.b2e(!1,w,k.length===0||A.a.q(k,"@")?C.hjF(u,v,null):k,p,l,s)}else{w=w.c
w=C.hd5(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.hd5(w.c,w.a)}v=C.i1E()
v.bsW(i.a.e,i.d,w)
i.b_=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uy(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b_
w.toString
w.bev(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b_
i.r=w.c
if(w.e){if(w.r)j=D.Us
else j=w.f===!0?D.r8:D.JJ
i.AU(j)}}}i.b2=B.df(A.n1,new C.dob(i))
if(i.ghR())i.bi=B.df(A.n0,new C.doc(i))}if(i.ghR()&&!A.d.q(D.SY,i.a.e))i.bi=B.df(A.n0,new C.dod(i))
i.as=B.df(A.fN,new C.doe(i))},
PY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uy(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFm(p,t.a.c.a),$async$PY)
case 5:o=e
if(t.c!=null)t.m(new C.dnn(t,o))
w=1
break
case 4:w=6
return B.b(C.LZ(q,t.a.d.bd,!1),$async$PY)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFm(n,t.a.c.a),$async$PY)
case 7:o=e
if(t.c!=null)t.m(new C.dno(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
akG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LZ(r,s.d.bd,!1),$async$akG)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.t(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=B.a1(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aQt(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.h.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dnR(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dnS())}case 1:return B.h(u,v)}})
return B.i($async$akG,v)},
adE(){var w=0,v=B.j(x.H),u=this
var $async$adE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a23(!0),$async$adE)
case 2:return B.h(null,v)}})
return B.i($async$adE,v)},
a23(d){return this.cqs(d)},
cqr(){return this.a23(!1)},
cqs(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a23=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.LZ(q,s.d.bd,b3),$async$a23)
case 3:o=b5
if(o==null)o=C.uy(t.a.d.bd,q)
if(o==null){w=1
break}s=J.a8(o)
r=s.h(o,"fromEmail")
n=A.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=A.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?B.a1(l,r,k):B.S(r,k)
i=j.h(0,"player1Email")
if(i==null)i=j.h(0,"playerXEmail")
h=A.a.i(J.k(i==null?n:i).toLowerCase())
i=j.h(0,"player2Email")
if(i==null)i=j.h(0,"playerOEmail")
g=A.a.i(J.k(i==null?m:i).toLowerCase())
i=h.length!==0
if(i)j.n(0,"player1Email",h)
f=g.length!==0
if(f)j.n(0,"player2Email",g)
e=j.h(0,"inGame")
d=s.b(e)?B.a1(e,r,k):B.S(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?B.a1(a0,r,k):B.S(r,k)
a2=new B.V(Date.now(),0,!1).aa()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ag())}if(i&&!d.an(0,h))d.n(0,h,!1)
if(f&&!d.an(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.z(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ag())
s=!1
if(f)if(J.z(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ag())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=B.bj(a3)
a4=s==null?null:s.bU()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bj(J.k(r==null?"":r))
a6=r==null?null:r.bU()}else a6=null
if(f){r=a1.h(0,g)
r=B.bj(J.k(r==null?"":r))
a7=r==null?null:r.bU()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cb(a7)?a6:a7).bR(5e5)
if(!new B.V(Date.now(),0,!1).d2(a8)){a4=b2.a=a8.bR(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.isY(t.a.d.bd,q,j)
t.a.bu()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dnD(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dnE(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d2(s)){s=s.bz(b1).a
r=A.o.aq(s,1e6)
t.m(new C.dnF(b2,t,r+(A.o.F(A.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.m(new C.dnG(b2,t))
b2=t.a.e
if(b2==="pattern")t.aat()
else if(b2==="memory"){t.b93()
if(t.c!=null)t.m(new C.dnH())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a23,v)},
aRp(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRo(){return this.aRp(null)},
aat(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aat=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cnU()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.LZ(q,s.d.bd,!1),$async$aat)
case 5:r=t.b4Y(e)
case 4:if(t.c==null){w=1
break}t.aRp(r)
t.m(new C.dmQ(t))
t.Es()
case 1:return B.h(u,v)}})
return B.i($async$aat,v)},
b4Y(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.h.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
cnU(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4Y(C.uy(w.d.bd,v))},
ae0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ae0)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dnm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
pD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pD)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHV().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aG("Int","ngmy_game_"+n+"_"+o,r),$async$pD)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pD,v)},
a42(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a42=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.b_==null||t.f||t.aZ){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LZ(r,s.d.bd,!1),$async$a42)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uy(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a8(p)
r.u(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bj(J.k(r==null?"":r))
s=s?null:J.t(p,"sessionUpdatedAt")
l=B.bj(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cb(l)){w=1
break}s=t.b_
s.toString
r=t.a
s.bev(r.e,n,r.c.a)
r=t.b_
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Us
else k=r.f===!0?D.r8:D.JJ
w=7
return B.b(t.AU(k),$async$a42)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dnT())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a42,v)},
aiy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aiy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b_==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b_
o.toString
p=o.cTO(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSL(n,o,p),$async$aiy)
case 6:q.a.bu()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aZ=!1
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiy,v)},
AU(d){return this.c0x(d)},
c0x(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$AU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.b_==null){w=1
break}s=t.b_.w
s=s.length!==0?s:"Game over"
case 3:switch(d.a){case 1:w=5
break
case 2:w=6
break
case 3:w=7
break
case 0:w=8
break
default:w=4
break}break
case 5:w=9
return B.b(t.K7(s,s),$async$AU)
case 9:w=4
break
case 6:w=10
return B.b(t.Za(s,s),$async$AU)
case 10:w=4
break
case 7:w=11
return B.b(t.acF(s,s),$async$AU)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghR()?12:13
break
case 12:w=14
return B.b(t.Ix(),$async$AU)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$AU,v)},
a11(d,e){return this.cic(d,e)},
cic(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a11=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aiy(),$async$a11)
case 6:if(d===D.r7){w=1
break}w=4
break
case 5:if(d===D.r7){w=1
break}case 4:w=7
return B.b(t.AU(d),$async$a11)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a11,v)},
adU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uy(s.d.bd,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.t(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=B.a1(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?B.a1(k,r,m):B.S(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aSL(t.a.d.bd,q,l),$async$adU)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uy(s.d.bd,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.S(s,r)
n.n(0,"gameOver",!0)
C.hmp(t.a.d.bd,q,n)
C.iws(t.a.d.bd,q)
w=3
return B.b(C.aiS(t.a.d.bd),$async$Ix)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adU()
else if(!v.f)v.c7i()
C.b2g();++v.RG
w=v.as
if(w!=null)w.a1(0)
w=v.b2
if(w!=null)w.a1(0)
w=v.cx
if(w!=null)w.a1(0)
w=v.bi
if(w!=null)w.a1(0)
w=v.bn
if(w!=null)w.a1(0)
w=v.e
w.V$=$.aw()
w.R$=0
v.bzg()},
cGR(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.b_==null}if(v)return
if(w.c7)return
v=w.b_
v.toString
w.a.toString
if(v.a>=v.b){w.uB("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.do1())},
b94(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b93()
break
case"scramble":r.bh=0
r.b95()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzv[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.ch)
break
case"math":r.y2=0
r.b92()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b96()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csT()){w=J.e4(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RN()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRo()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Es()}break
case"color":r.bd=0
r.b8Y()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.baj()
break
default:if(A.d.q(D.SY,w)){w=r.b_
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6d(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csT(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b96(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.h.M(Math.pow(p,v))}u=A.h.M(Math.pow(p,o))
r.w=A.o.v(u)
r.aH=A.d.aM(n,", ")
q=r.w
t=x.s
s=B.a([A.o.v(u+p),A.o.v(u-p),A.o.v(u+p*2)],t)
t=B.a([q],t)
A.d.u(t,s)
A.d.e0(t,r.d)
r.x=t},
b92(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHV().length-6)u.at=0
w=$.bHV()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b95(){var w=this,v=w.w=D.dap[A.o.F(w.at+w.bh,105)]
w.ax=C.iwJ(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.ch)},
baj(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.dx(0,0,0,120+w.d.aw(280),0,0),new C.dnQ(w))},
c0A(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rX("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.aq(new B.V(v,0,!1).bz(u).a,1000)}if(w<520){t.m(new C.dnk(t))
v=t.a0
if(v>=5){t.pD()
t.uB("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.baj()
t.m(new C.dnl())}}else t.rX("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cG4(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dnX())
if(u<0)return
t.m(new C.dnY(t,u,v,d))},
cG5(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dnZ(u,d,v))},
bL_(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dmR())){u.c.J(x.q).f.U(D.ft0)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dmS(u))
if(u.ghR()&&D.nc.q(0,u.a.e))u.a2i()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nc.q(0,u.a.e))u.nm(!0)
else u.uB("All 5 words unscrambled!")}else{u.b95()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.m(new C.dmT())}}else u.rX("Wrong word \u2014 paid for "+u.bh+"/5.")},
b8Y(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dP,A.dL,A.io,A.tF][u]
w.w=t},
aQt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.ia(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.co),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.h.M(m):B.cb(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.h.M(m):B.cb(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.h.bf(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.t(j,g))
i=f==null?null:A.h.M(f)
if(i!=null)h.fx=i}},
b93(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.B(p.dy,x.S)
A.d.u(w,p.dy)
p.fr=w
if(p.ghR()&&p.a.Q!=null){w=p.a
v=w.d.bd
w=w.Q
w.toString
u=C.uy(v,w)
t=u==null?null:J.t(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a1(t,w,v):B.S(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.h.M(r)
else{w=r==null?null:J.k(r)
q=B.cb(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e_()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQt(s)}else A.d.e0(p.fr,p.d)},
cpM(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dnw(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dnx(t,v,u))
if(t.ghR()&&D.nc.q(0,t.a.e))t.a2i()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nc.q(0,t.a.e))t.nm(!0)
else t.aB5()}return}t.k1=!0
B.bP(D.bD9,new C.dny(t),x.c)},
b8r(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dnI(u))
if(u.y1>=5){u.pD()
u.uB("All 5 questions correct!")}else{u.b96()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dnJ())}}else u.rX(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dnK(u))
if(u.y2>=6){u.pD()
u.uB("All 6 math questions correct!")}else{u.b92()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dnL())}}else{u.X6(u.y2+1)
u.rX(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dnM(u))
if(u.bd>=5){u.pD()
u.uB("All 5 color rounds correct!")}else{u.b8Y()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dnN())}}else u.rX("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aB5()}else u.c.J(x.q).f.U(D.ftL)},
cG3(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cj(q.k4,0)
v=A.o.aq(d,3)
u=A.o.F(d,3)
t=A.o.aq(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dnW(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aB5()}}},
RN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dnz(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnA(t,q).$0()
t.c.er()
w=6
return B.b(B.bP(A.kW,null,r),$async$RN)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dnB(t).$0()
t.c.er()
w=7
return B.b(B.bP(A.k4,null,r),$async$RN)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dnC(t))
case 1:return B.h(u,v)}})
return B.i($async$RN,v)},
cG6(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rX("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.do_(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uB("Perfect Simon run!")
return}u.m(new C.do0(u))
u.RN()}},
Es(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Es=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dmU(t))
s=x.H
w=3
return B.b(B.bP(A.jr,null,s),$async$Es)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dmV(t,o).$0()
t.c.er()
w=7
return B.b(B.bP(A.a0T,null,s),$async$Es)
case 7:if(t.c==null){w=1
break}new C.dmW(t).$0()
t.c.er()
w=8
return B.b(B.bP(A.iQ,null,s),$async$Es)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dmX(t))
case 1:return B.h(u,v)}})
return B.i($async$Es,v)},
X6(d){return this.bFx(d)},
bFx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X6)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHV().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aG("Int","ngmy_game_"+q+"_"+r,o),$async$X6)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X6,v)},
cG0(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rX("Wrong tile \u2014 paid for "+v.aB2()+"/"+C.hjJ()+" moves.")
return}v.m(new C.dnU(v,w))
if(v.ghR()&&D.nc.q(0,v.a.e))v.a2i()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nc.q(0,v.a.e))v.nm(!0)
else v.uB("All 7 pattern rounds correct!")}else{v.m(new C.dnV(v))
v.Es()}},
K7(d,e){return this.co9(d,e)},
uB(d){return this.K7(null,d)},
aB5(){return this.K7(null,null)},
co9(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dnu(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d8(q,s.c.a,r,A.h8,A.fx,"Game payout: "+s.f,null,null,A.cw,new B.V(Date.now(),0,!1))
B.aiO(p,!0)
t.a.hK(p)
t.a.bu()
o=e==null?"+$"+A.h.ad(r,2)+" added to your balance!":e
s=t.a
C.vd(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FS(d,o,"YOU WIN!",!0),$async$K7)
case 3:w=4
return B.b(C.aiG(t.a.f,o),$async$K7)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K7,v)},
FQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nc.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cAj(),$async$FQ)
case 5:w=1
break
case 4:s=t.AS()
r=t.PA()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acG("Time's up \u2014 no progress to pay."),$async$FQ)
case 8:w=1
break
case 7:q=A.h.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uB("Complete! Max payout earned."),$async$FQ)
case 12:w=10
break
case 11:w=13
return B.b(t.Ff(q,s,r),$async$FQ)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FQ,v)},
RU(d){return this.csy(d)},
a2i(){return this.RU(!1)},
csy(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RU=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nc.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.V(Date.now(),0,!1)
a2=r.bw
if(a2!=null&&a1.bz(a2).a<3e6){w=1
break}r.bw=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.uy(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.LZ(q,r.a.d.bd,!1),$async$RU)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.t(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.a1(n,a3,a5):B.S(a3,a5)
l=J.t(m,"scores")
k=a2.b(l)?B.a1(l,a3,a5):B.S(a3,a5)
J.aJ(k,p,r.AS())
J.aJ(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
i=a2.b(j)?B.a1(j,a3,a5):B.S(a3,a5)
a6=r.id
a6=B.B(a6,B.a4(a6).k("cj.E"))
A.d.ff(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aR(x.S)
for(a6=i,a6=new B.dp(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.h.M(f):B.cb(J.k(f),null)
if(e!=null)J.c4(h,e)}}a6=h
a6=B.B(a6,B.a4(a6).k("cj.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aSL(r.a.d.bd,q,m),$async$RU)
case 11:r.a.bu()
t=2
w=6
break
case 4:t=3
b0=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$RU,v)},
nm(d){return this.cAk(d)},
cAj(){return this.nm(!1)},
cAk(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FQ(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RU(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.LZ(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PA()
w=o==null?8:9
break
case 8:m=A.h.D(t.AS()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acG("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uB("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Ff(m,t.AS(),n),$async$nm)
case 18:case 15:case 11:w=19
return B.b(t.Ix(),$async$nm)
case 19:w=1
break
case 9:s=J.a8(o)
r=s.h(o,"fromEmail")
l=A.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=A.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?B.a1(i,r,h):B.S(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.a1(f,r,h):B.S(r,h)
d=B.aI(e.h(0,p))
a0=d==null?null:A.h.M(d)
if(a0==null)a0=t.AS()
d=B.aI(e.h(0,j))
a1=d==null?null:A.h.M(d)
if(a1==null)a1=0
a2=A.h.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.acG("Time's up \u2014 no progress to pay."),$async$nm)
case 22:w=23
return B.b(t.Ix(),$async$nm)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aI((s.b(a3)?B.a1(a3,r,h):B.S(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a1(0)
r=t.b2
if(r!=null)r.a1(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dnO(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.h.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d8(h,b0,a9,A.h8,A.fx,d,null,null,A.cw,new B.V(Date.now(),0,!1)))
t.a.bu()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.h.ad(a9,2)+" (includes opponent bonus $"+A.h.ad(a7,2)+")":"+$"+A.h.ad(a8,2)+" (your progress payout)"
s=t.a
C.vd(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FS(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Ix(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Ff(d,e,f){return this.co7(d,e,f)},
co7(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ff=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dns(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d8(s,q.c.a,r,A.h8,A.fx,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cw,new B.V(Date.now(),0,!1))
B.aiO(p,!0)
t.a.hK(p)
t.a.bu()
if(t.c==null){w=1
break}o=A.h.S(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aj2(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.dnt()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.h.ad(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.h.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vd(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FS(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Ff)
case 3:w=4
return B.b(C.aiG(t.a.f,j),$async$Ff)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ff,v)},
c7i(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AS()
v=o.PA()}catch(u){return}if(v<=0||w<=0)return
t=A.h.D(w/v,0,1)
s=B.or(A.h.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d8(q,p.c.a,s,A.h8,A.fx,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cw,new B.V(Date.now(),0,!1)))
o.a.bu()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vd(s,n,"Left early \xb7 +$"+A.h.ad(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
acF(d,e){return this.bVY(d,e)},
bVY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=A.o.v(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hK(new B.d8(r,q,p,A.h8,A.fx,"Game payout: "+s+" (draw, stake returned)",null,null,A.cw,new B.V(o,0,!1)))
t.a.bu()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vd(o,null,"Draw. Your $"+A.h.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FS(d,"Nobody won, so your $"+A.h.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acF,v)},
Za(d,e){return this.bVZ(d,e)},
acG(d){return this.Za(null,d)},
bVZ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Za=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.vd(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FS(d,e,"YOU LOSE",!1),$async$Za)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Za,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.aq(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.asX,n,n,n,new C.do2(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bH):t.f,n,2,A.a2,n,n,n,A.fG,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asE(new C.do3(o),A.o4,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.n),n,n,n,n,A.ho,n,n,n)],q),A.l,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.d("Win $"+A.h.ad(t.x*1.46,2)+" \xb7 stake $"+A.h.ad(o.a.x,2)+" \u2022 Progress "+o.AS()+"/"+o.PA(),n,n,n,n,n,n,D.fD2,n,n,n),1),new C.arP(o.a.c.a,new C.do4(o),n),A.ae,D.bWa,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o6,n,n,n)],q),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hn,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.do5(),m),m.k("ak.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSm(n,D.bgZ,B.bm(!0,new B.D(A.OF,B.x(B.a([r,s,A.P,new B.fh(new C.do6(o),n),A.am,B.E(B.o(n,o.bVX(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cs,n,n,n),1)],q),A.al,n,A.e,A.i,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iO.l()>>>16&255,A.iO.l()>>>8&255,A.iO.l()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.A,new B.dn(!1,B.o(n,B.x(B.a([D.fp3,A.af,B.d(o.cT,n,n,n,n,n,n,D.fEB,A.K,n,n),A.am,B.d(o.bT,n,n,n,n,n,n,D.fCJ,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.n),n,n,n,A.tc,A.z8,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8h(){var w=this.k3
return B.ci(new C.dnr(this,w,A.h.cD(this.fr.length/w)))},
bVX(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8h()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pZ,n,n,n),B.d("Words "+o.bh+"/5",n,n,n,n,n,n,A.Fl,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fT,B.iB(o.ay.length,new C.dn9(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fT,B.iB(o.ch.length,new C.dna(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iz(D.h50,o.gbKZ(),B.fu(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cp,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.au9(m,o.e,new C.dnb(o),new C.dnc(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pZ,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fl,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(new B.du(A.dB,A.A,A.f,B.d(w,n,n,n,n,n,n,A.mD,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dnd(o),B.T(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.ci(new C.dne(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pZ,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fl,n,n,n),A.P,B.E(B.l_(1,B.iB(4,new C.dnf(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.ci(new C.dng(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dP,A.dL,A.io,A.tF]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pZ,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fl,n,n,n)
v=o.aL
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fu(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fh,n,n,n,n,n,n,n)
r[q]=new B.D(A.cx,new B.a5(1/0,n,B.iz(B.d(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dnh(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bf:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.aci,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fzW,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aD(s,A.bW,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qp(B.ay(A.c_,B.cU(n,B.x(B.a([w,A.P,v,A.b4,s,A.b4,new B.D(A.He,B.d(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.i,0,A.p),p,n,A.b0,n,K.CA,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0z(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SY,m)&&o.b_!=null){m=o.a.e
w=o.b_
w.toString
return C.ilH(m,new C.dni(o),new C.dnj(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anX.prototype={
T(){return new C.bjR()},
cZD(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjR.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aD(a3,A.dD,a0).w
a0=B.aD(a3,A.dD,a0).w
v=x.p
u=B.a([B.bUC(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bM(s)),2,"0")
q=A.a.aY(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.Ck,A.r,2.2)
n=x.V
m=B.a([new B.ac(0,A.G,B.a0(89,A.rJ.l()>>>16&255,A.rJ.l()>>>8&255,A.rJ.l()&255),A.eS,20),new B.ac(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dn,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.Ck,A.r,3.4)
n=B.a([new B.ac(0,A.G,B.a0(166,A.rJ.l()>>>16&255,A.rJ.l()>>>8&255,A.rJ.l()&255),A.dM,10),new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.az,A.aC,A.x,D.dmn,D.cWQ,d),A.n),d,42,d,d,d,d,d,56),A.b4,e.bbe(a3,!0)],v),A.l,d,A.e,A.i,0,d,d)
k=B.Em(t.a,1,A.a2,D.fHZ)
j=t.b
i=t.c
h=B.Em("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fId)
g=B.Em(e.b6_(j),1,A.a2,D.fAN)
q=B.A(B.a([B.E(B.x(B.a([D.fYP,B.Em(a1.c,1,A.a2,D.aXH)],v),A.E,d,A.e,A.i,0,A.p),1),B.x(B.a([D.fYA,B.d(r+"/"+q,d,d,d,d,d,d,D.aXH,d,d,d)],v),A.dO,d,A.e,A.i,0,A.p)],v),A.l,d,A.e,A.i,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yx.l()>>>16&255,D.yx.l()>>>8&255,D.yx.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atU("INVESTED","$"+B.dG(j),!0),e.atU("DAILY ROI",A.h.ad(i*100,2)+"%",!0),e.atU("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j0,A.i,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h4x,A.rj,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fXc,A.bF,k,A.aw,h,A.aw,g,A.P,q,A.am,r,A.am,i,A.aw,B.Em("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHk)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cbL,A.n),d,d,d,d,A.bH,d,d,1/0),A.abD],v))}u.push(D.fOH)
u.push(A.rj)
A.d.u(u,new B.N(a2,new C.drH(e,a3),B.T(a2).k("N<1,v>")))
return B.c5(d,A.L,B.bm(!1,B.cc(B.x(u,A.E,d,A.e,A.i,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbe(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.K(A.k0,A.r,1)
return B.o(w,B.A(B.a([B.X(A.a3B,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.eQ,w,w,w)},
b6_(d){var w=A.a.b1(A.o.v(A.h.S(d*100)),4,"0")
return"****  ****  ****  "+A.a.aY(w,w.length-4)},
atU(d,e,f){var w=null,v=B.a0(217,D.yx.l()>>>16&255,D.yx.l()>>>8&255,D.yx.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Em(e,w,w,B.l(w,w,A.Ch,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cqg(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd3u(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
a6=b3.a
if(a1.ry===a6){w=a1.to
v=w!=null&&Math.abs(w-a3)<0.0001}else v=!1
u=a7&&Math.abs(a3-a5.b)<0.0001
t=u?a3:Math.max(0,a3-a2)
w=!a9
s=w&&!b1&&!v&&t>0&&a1.d>=t
if(a9)r="Active"
else if(b1)r="Downgrade Locked"
else if(v)r="Waiting for Deposit"
else if(s)r="Buy"
else if(b0)r="Upgrade Now"
else r=u?"Renew Plan":"Invest Now"
q=!w||b1||v||a0.e
a0=B.m(18)
w=B.K(A.aS,A.r,2)
p=x.V
o=B.a([new B.ac(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.UN,16),new B.ac(0,A.G,B.a0(115,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),A.dn,14),new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.A,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.h.S(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.A,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ac(0.5,A.G,k,A.J,14),new B.ac(0,A.G,j,A.J,6),new B.ac(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.caj,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eFz],h),d),d),A.b4,e.bbe(b2,!0)],h),A.l,d,A.e,A.i,0,d,d)
a6=B.Em(a6,1,A.a2,D.fxb)
i=B.Em(e.b6_(a3),1,A.a2,D.fMU)
j=B.A(B.a([e.b5p(A.h.ad(2.86,2)+"%"),A.e7,e.b5p("261d")],h),A.l,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fQ2,B.Em("$"+B.dG(a3),1,A.a2,D.fLD)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.fy1,d,d,d)],h),A.dO,d,A.e,A.i,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.l()>>>16&255,A.bz.l()>>>8&255,A.bz.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBk("Daily","$"+B.dG(a4)),1),A.e7,B.E(e.aBk("Total","$"+B.dG(a4*261)),1),A.e7,B.E(e.aBk("Days","261"),1)],h),A.l,d,A.e,A.i,0,d,d)
g=q?d:new C.drG(e,b3,a3,t)
f=A.h.S(127.5)
f=B.fu(d,d,A.bs,B.a0(f,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.m(10),D.b6P),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fZy,A.bF,a6,A.cS,i,A.fF,j,A.fF,m,A.fF,k,A.fF,l,A.P,new B.a5(1/0,40,B.iz(new B.du(A.dI,A.A,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fyy,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.ccm,A.n),d,d,d,A.kB,D.bEX,d,d,1/0)},
b5p(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.d(d,w,w,w,w,w,w,D.fxA,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.zc,w,w,w)},
aBk(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.K(A.bm,A.r,1)
return B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fHG,w,w,w),A.rk,new B.du(A.dB,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fKC,w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.lT,w,w,w)}}
C.ak_.prototype={
T(){var w=null,v=B.a([],x._),u=$.aw()
return new C.azR(v,new B.at(A.ax,u),new B.at(A.ax,u),B.mP(0,w,w),new B.i6(),D.Uh,C.aiC(),B.a([],x.fw),B.aR(x.N),B.mP(0,w,w))}}
C.azR.prototype={
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.Ah(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.ae5()
r.PX()
r.atv()
r.cDj()
r.cDz()
$.aU.x1$.push(new C.cOp(r))
r.a.toString},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asd(),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cNK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
gaCY(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPR())return!0
return!1},
gPR(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYJ(){var w,v=this.CW
if(v==null)return A.bE
w=v.bz(new B.V(Date.now(),0,!1))
return w.a<0?A.bE:w},
bGk(){var w=this
if(w.a.c.w)return
if(w.gPR()){if(!w.cx)w.m(new C.cNA(w))}else if(w.cx)w.m(new C.cNB(w))},
cwx(){this.m(new C.cNU(this))},
uK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cNR(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cNS(t))
w=1
break}w=3
return B.b(C.cho(o.a,s),$async$uK)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.chp(t.a.c.a,s),$async$uK)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNT(t,r,q))
t.cFs()
t.bGk()
if(r===3)t.a_g(r)}case 1:return B.h(u,v)}})
return B.i($async$uK,v)},
a_g(d){return this.c89(d)},
c89(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHw(q,r,new C.cNM(t),d,s.c.a),$async$a_g)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_g,v)},
yg(d){return this.bHS(d)},
atv(){return this.yg(!1)},
bHS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9x(k,C.hJI(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.chQ(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.at5(k),$async$yg)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WW(!0,l,q,p)
m.a=s
w=8
return B.b(C.asf(k,s),$async$yg)
case 8:case 7:w=9
return B.b(C.VV(k),$async$yg)
case 9:o=f
w=10
return B.b(C.a8U(k),$async$yg)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cNC(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Rp(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Rp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PX(),$async$Rp)
case 3:s=t.c
if(s==null){w=1
break}r=B.ed(new C.cNP(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).cc(r),$async$Rp)
case 4:w=5
return B.b(t.PX(),$async$Rp)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Rp,v)},
cHH(){this.m(new C.cOc(this))},
cDz(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.df(A.pt,new C.cO6(w))},
cFs(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPR()||w.CW==null)return
w.id=B.df(A.fN,new C.cO9(w))},
cDj(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.df(A.jJ,new C.cO5(w))
w.FY()},
FY(){return this.cFr()},
cFr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$FY)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.W.aP(0,p,null)
if(x.f.b(o)){m=B.E3(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Mb(),$async$FY)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSl(),$async$FY)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aG("String","app_config",A.W.av(k.aj(),null)),$async$FY)
case 14:case 13:case 9:t=2
w=6
break
case 4:t=3
h=s.pop()
w=6
break
case 3:w=2
break
case 6:if(r.c==null){w=1
break}if(i.a!==r.ay)r.m(new C.cO7(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FY,v)},
b9W(){A.d.b0(this.f,new C.cO4())},
ae5(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ae5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O2(t.a.c.a),$async$ae5)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b0(s,new C.cNH())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cNI(t,s))
t.a3e(!0)
B.bP(A.jr,new C.cNJ(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$ae5,v)},
ahW(){var w=0,v=B.j(x.H),u=this
var $async$ahW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apM(u.a.c.a,u.f),$async$ahW)
case 2:return B.h(null,v)}})
return B.i($async$ahW,v)},
by(d){this.bJ(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a1(0)
u=v.go
if(u!=null)u.a1(0)
u=v.id
if(u!=null)u.a1(0)
u=v.r
w=$.aw()
u.V$=w
u.R$=0
u=v.w
u.V$=w
u.R$=0
v.ok.t()
v.x.t()
u=v.e
u===$&&B.c()
u.t()
v.a2()},
ad2(d){var w,v=this
v.m(new C.cNF(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BY(d,A.ck,A.kW)
else $.aU.x1$.push(new C.cNG(v,d))
if(d===0)v.a3e(!0)
if(d===1)v.cyA(!0)},
a3e(d){$.aU.x1$.push(new C.cNX(this,d))},
aCB(){return this.a3e(!1)},
a2y(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2O(),$async$a2y)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cNQ(t))
case 1:return B.h(u,v)}})
return B.i($async$a2y,v)},
nl(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$nl=B.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=A.a.i(q.r.a.a)
if(J.ad(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return B.b(C.as8(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uK(),$async$nl)
case 10:q.m(new C.cNY(q))
w=1
break
case 8:w=11
return B.b(q.uK(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_g(3)
case 6:case 4:q.m(new C.cNZ(q,c5))
C.VH(q.a.c.a,"user",c5)
q.aCB()
t=13
a8={}
w=16
return B.b(q.a2y(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2O(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cO_(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFA("",null)
q.m(new C.cO0(q,p))
C.VH(q.a.c.a,"ai",p)
q.aCB()
r=[1]
w=14
break}o=B.nl(a9)
a9=q.a
n=""
m=C.hJI(a9.d)
w=C.hJB(c5)?20:21
break
case 20:w=22
return B.b(C.chP(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9x(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i1x(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bM(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bY(b3)),2,"0")
b5=A.a.b1(A.o.v(B.dh(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fV(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VV(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hsR(i,25)
w=26
return B.b(C.a8U(q.a.c.a),$async$nl)
case 26:g=c9
f=C.huy(g)
a9=q.db
b2=q.dx
b4=q.dy
b5=q.fr
b2=a9.a?"GRANTED ("+b2+" names linked)":'NOT YET \u2014 ask user to say "allow access" ONCE, then never ask again'
b5=a9.b?"GRANTED ("+b5+" NGMY events saved)":'NOT YET \u2014 one-time "allow access"'
b4=a9.c?"GRANTED ("+b4+" saved calls)":'NOT YET \u2014 one-time "allow access"'
b4="NGMY DEVICE CONNECTIONS (saved on this phone \u2014 do not ask again if granted):\n"+("- Contacts: "+b2+"\n")+("- Calendar: "+b5+"\n")+("- Calls / voicemail memory: "+b4+"\n")
b2=a9.d?b4+"User already granted access on this device \u2014 NEVER ask for screenshots, manual contact linking, or permission again unless they revoked.\n":b4
e=A.a.i(b2.charCodeAt(0)==0?b2:b2)
b2=h
b4=f
b5=e
b5=b5.length!==0?b5+"\n":""
b2=b2.length!==0?b2+"\n":""
b4=b4.length!==0?b4+"\n":""
d='NGMY EXCLUSIVE SUPERPOWERS \u2014 user commands only; NEVER ask for screenshots, invoices, or manual uploads.\n\nThe user talks naturally. You do the work:\n- "Who called me at 2 AM?" \u2192 search CALL MEMORY (if access granted). Give name, number, what they said.\n- "What\'s on my calendar?" \u2192 read CALENDAR MEMORY below.\n- "Wake me at 7" / "Set alarm in 2 minutes" / "Timer for 1 hour" \u2192 alarm action (ISO start = now + duration when relative).\n- "Open Video Studio" / "Open Play Zone" / "Open Phone Unlock" \u2192 open_tool action so the app opens inside NGMY.\n- "Call Mom" / "Text John" \u2192 phone actions by contact name.\n- "NGMY morning brief" \u2192 summarize calls + calendar + wallet from LIVE DB.\n- "Allow access" / "Yes connect" \u2192 confirm everything is now linked permanently on this device.\n\nCALL DETECTIVE rules:\n- iPhone/web cannot read Apple\'s call log directly. After user says "allow access" ONCE, NGMY remembers calls from device sync (when available) and calls made through NGMY.\n- NEVER ask the user to upload call screenshots or paste voicemail unless they voluntarily send it in chat.\n- If access not granted yet, ask ONCE: "Say allow access once and I\'ll connect your contacts, calendar, and calls on this phone permanently."\n- If access granted but no match, say you checked memory and found nothing at that time \u2014 suggest they may have had a blocked/private number.\n\n'+b5+"\n"+b2+"\n"+b4+"\n"
w=27
return B.b(C.aiD(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hJB(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.ioy(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hWS(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.rk(o,a2,A.i3,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFA(a8.a,a3.a)
a4=c2
a5=B.hIS(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.irk(c5),x.an)
a6=a9
J.h2(a6,C.irl(c5))
J.h2(a6,C.irm(c5))
J.h2(a6,B.hIi(c5))
J.h2(a6,C.irp(c5,q.a.c.w))
a8.b=a6}c3=C.iqv(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiV(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cO1(a8,q,a7))
C.VH(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KO(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cO2(q))
C.VH(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cO3(q))
q.aCB()
q.ahW()
if(!q.a.c.w)q.uK()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpa(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpb(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.iZ
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckY(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KO(d){return this.cx4(d)},
cx4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiQ(p,o,new C.cNV(t,p)),$async$KO)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HE(p,null,o,!1,!0,t.a.c.a),$async$KO)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.J(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lQ,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HE(p,l.f,o,k,n,j),$async$KO)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a8(p)
n=o.h(p,"name")
h=A.a.i(n==null?"":n)
p=o.h(p,"phone")
g=A.a.i(p==null?"":p)
p=t.a.c.a
o=Date.now()
n=Date.now()
l=g.length!==0?g:null
k=h.length!==0?h:null
w=14
return B.b(C.b0z(p,B.a([new C.rS("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KO)
case 14:t.atv()
case 13:p=t.c.J(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dr,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KO,v)},
T8(d){return this.cFV(d)},
cFV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiQ(d,n,new C.cOb(t)),$async$T8)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HE(d,null,n,!1,!0,t.a.c.a),$async$T8)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.J(x.q).f.U(B.b2(null,null,null,A.c9,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.lQ,null,null,null,null,null,null,null,null,null,null))
w=1
break
case 7:r=t.c
r.toString
q=t.a
p=q.c
o=p.a
n=n==="call"||n==="sms"||n==="whatsapp"||n==="send_email"
p=p.w
w=9
return B.b(B.HE(d,q.f,r,p,n,o),$async$T8)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T8,v)},
cyA(d){$.aU.x1$.push(new C.cNW(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cq,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.al5,D.bof],w):B.a([A.aN,A.ys],w)
v=B.m(22)
u=B.a([new B.ac(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckJ():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hhQ(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dm,l,l,l)
s=B.o(l,l,A.f,l,l,D.b8W,l,8,l,l,l,l,l,8)
if(m.gaCY()&&m.d===0)q=m.gPR()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bc,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.h.S(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cE,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aH(l,l,l,l,A.nQ,l,l,l,new C.cOh(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.az,A.aC,A.x,w,l,l),A.n),l,l,l,E.an2,D.bFK,l,l,l)
v=k?D.us:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dN,A.r,1)
u=B.o(l,B.A(B.a([m.bKJ(),m.cFE(1,A.lr,"Music")],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCY()){v=B.a([],p)
if(m.gPR()){s=B.a0(38,A.dr.l()>>>16&255,A.dr.l()>>>8&255,A.dr.l()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dr.l()>>>16&255,A.dr.l()>>>8&255,A.dr.l()&255),A.r,1)
v.push(new B.D(A.OG,B.o(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i_Q(m.gaYJ())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fK2,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPR()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.m(12)
q=B.m(12)
o=B.X(A.kc,k?A.iB:A.hN,l,l,l,16)
v.push(new B.D(A.OG,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iB:A.hN,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcww(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHG():l
v.push(B.E(new C.asb(s,q,new C.cOi(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.i,0,A.p)}else v=m.bKK(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hvw(r)
t=B.a([w,A.af,new B.D(A.i0,u,l),A.P,B.E(B.hwu(B.a([v,new C.ase(q,o,n,new C.cOj(m,d),s,l)],p),A.t,t,A.y,new C.cOk(m),l),1)],p)
if(m.d===0&&!m.gaCY()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6H:D.a5Y
w.push(new B.a5(l,36,B.hX(l,new C.cOl(m),v.length,l,l,A.aM,new C.cOm(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CJ,l,l,l,l,!0,new B.b6(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOn(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWs,l,l),1)
s=m.at
r=s?l:m.gczA()
w.push(B.A(B.a([u,new B.JS(v,A.aN,l),A.bn,B.aE(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyo:M.asP,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.aj)],p),A.dO,l,A.e,A.i,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lJ:A.c
t.push(B.uz(A.uh,B.o(l,new B.D(A.CE,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.uh,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XM(i,new C.cOo(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKJ(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.S(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.h.S(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(A.v2,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.ay(q,B.cU(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cND(this),q,q,q,q,q,q,!1,A.a4),1)},
cFE(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.S(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.h.S(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bn,B.d(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cU(q,B.A(r,A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOa(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKK(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.buP:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.o(s,B.ks(!0,s,t.ok,new C.cNE(t,e,d),u,s,A.bT,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.n),s,s,s,A.i0,s,s,s,s)},
aS2(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iZ:this.cpb(d),k=m?A.mu:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hhQ(this.a.f.Q,28),o),A.ae],j))
w=m?A.dO:A.E
j=B.a([],j)
if(h)j.push(D.eyF)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_Q:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ac(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dM,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.dZ,o,o,o,o,o,o,o,o,12,A.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.aa:A.bs
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hdz(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,X.wH,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hIX(l,e,this.gcFU()))
i.push(new B.dd(1,A.cl,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dO,o,k,A.i,0,o,o),o)},
bKI(d,e){return this.aS2(d,e,!1)}}
C.aNd.prototype={
Z(){this.a3()
$.zi().aV(0,this.gF9())},
t(){$.zi().a6(0,this.gF9())
this.a2()}}
C.aNe.prototype={
Z(){this.a3()
$.zi().aV(0,this.gF9())},
t(){$.zi().a6(0,this.gF9())
this.a2()}}
C.aNf.prototype={
Z(){this.a3()
$.zi().aV(0,this.gF9())},
t(){$.zi().a6(0,this.gF9())
this.a2()}}
C.aOc.prototype={
Z(){this.a3()
$.zi().aV(0,this.gF9())},
t(){$.zi().a6(0,this.gF9())
this.a2()}}
C.XB.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apv.prototype={
T(){return new C.aEV()}}
C.aEV.prototype={
Z(){var w,v=this
v.a3()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B4(d,e){return this.cLp(d,e)},
cLp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dId(q,e))
t=3
w=6
return B.b(d.$0(),$async$B4)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dIe(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B4,v)},
Bx(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Bx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.vh(r,q),$async$Bx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dI4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Bx,v)},
abv(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$abv)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.OT(s,B.KY(B.c4P(r,q,s,p).f1(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abv,v)},
YU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pC(s,t.a.c,!1),$async$YU)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B4(new C.dI2(t),"Preparing download\u2026"),$async$YU)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YU,v)},
a_t(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pC(s,t.a.c,!1),$async$a_t)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B4(new C.dIc(t),"Creating QR code\u2026"),$async$a_t)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_t,v)},
a_s(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ijm(r),$async$a_s)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B4(new C.dI1(t,s),"Looking up code\u2026"),$async$a_s)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_s,v)},
aeZ(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aeZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xS.cq().N3(A.Tg,A.uY,!0),$async$aeZ)
case 7:r=e
p=r
q=p==null?null:J.fl(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aI.gau(p)}else p=!1
if(p){p=q.c
p.toString
p=B.jJ(p,0,null)
u=p
w=1
break}t=2
w=6
break
case 4:t=3
n=s.pop()
w=6
break
case 3:w=2
break
case 6:u=B.HB()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeZ,v)},
AI(d,e,f){return this.bN2(d,e,f)},
aTn(d,e){return this.AI(d,!1,e)},
bN1(d){return this.AI(d,!1,!1)},
bN2(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$AI)
case 3:if(t.c==null){w=1
break}if(!C.c4U(d,t.a.c,null)){t.lg(C.c4V(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hWz(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ijz(s,q,t.a.c,d),$async$AI)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m_(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rW(s,p,r,!1,null,null,d.ax),$async$AI)
case 5:if(t.c==null){w=1
break}t.m(new C.dI0(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AI,v)},
aeY(){var w=0,v=B.j(x.H),u=this
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B4(new C.dI3(u),"Reading file\u2026"),$async$aeY)
case 2:return B.h(null,v)}})
return B.i($async$aeY,v)},
Yb(d){return this.bOm(d)},
bOm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Yb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d8("local_qr_dep_"+1000*r,q.a,d,A.fS,A.fx,"Admin deposit ($"+B.dG(d)+")",null,null,A.cw,new B.V(Date.now(),0,!1))
C.cjS(t.d,s)
q=t.e
q===$&&B.c()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.rW(t.a.c,t.d,r,!0,null,null,null),$async$Yb)
case 3:w=4
return B.b(t.Bx(),$async$Yb)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Yb,v)},
b9j(d){var w=null
return B.ce(w,w,!0,w,new C.dIa(),d,w,!0,!0,x.N)},
Xd(d){return this.bGe(d)},
bGe(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$Xd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Yb(d.b),$async$Xd)
case 5:w=1
break
case 4:s=d.c
t.lg(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$Xd,v)},
Fu(d){return this.cu7(d)},
cu7(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$Fu)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3t(d,t.a.c),$async$Fu)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.lg("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.lg(y.y)
u=!0
w=1
break}if(s.c){t.lg(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return B.b(t.b9j(r),$async$Fu)
case 5:q=f
if(q==null||A.a.i(q).length===0){u=!0
w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.cjL(d,o,n.a,r,p),$async$Fu)
case 7:w=6
return B.b(t.Xd(f),$async$Fu)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fu,v)},
Fv(d){return this.cu8(d)},
cu8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$Fv)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjK(d,t.a.c),$async$Fv)
case 4:s=f
if(!s.a){t.lg(y.m)
w=1
break}if(s.b){t.lg("This deposit code was already used.")
w=1
break}if(s.d){t.lg(y.y)
w=1
break}if(s.c){t.lg(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return B.b(t.b9j(r),$async$Fv)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Xe(o,n.a,d,r,p),$async$Fv)
case 7:w=6
return B.b(t.Xd(f),$async$Fv)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fv,v)},
Qb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DK()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).cc(B.ed(new C.dI5(),!0,null,x.N)),$async$Qb)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B4(new C.dI6(t,r),"Applying deposit\u2026"),$async$Qb)
case 6:w=1
break
case 5:w=7
return B.b(t.B4(new C.dI7(t,r),"Loading\u2026"),$async$Qb)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qb,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.ny:A.qt,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aD(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.A,B.X(A.eL,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dIf(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cE,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a23(D.bTy,"Download",A.a6W,u?o:p.gbTZ(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a23(A.jv,"Show QR",D.dDf,u?o:p.gc9T(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a23(D.bTz,"Upload",A.a6i,u?o:p.gc9R(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a23(A.jw,"Scan QR",D.daF,u?o:p.gc9S(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc9Q()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.m(16)
j=B.a([B.cu(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvy(A.tr,"Enter Code",A.a5E,u,o),A.lb,B.o(o,B.A(B.a([B.X(A.hq,A.aV,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.n),o,o,o,o,A.js,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iK:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aE(!1,A.a3,!0,o,new B.D(A.CN,B.A(B.a([H.aVo,A.bc,B.E(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.i,0,o,o),o),A.f,i,8,o,o,o,o,o,A.aj),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a23.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u9,v,v,v)],x.p),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.az,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bT,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.bvy.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u9,v,v,v)],x.p),A.l,v,A.b9,A.i,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.az,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bHY,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.a0H.prototype={
T(){return new C.bmi()}}
C.bmi.prototype={
gaz4(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a3()
w.S5()
w.f=B.df(A.ov,new C.dIj(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
S5(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vh(q.e,q.f),$async$S5)
case 3:q=e.a
s=B.c4P(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OT(t.a.e,B.KY(s.f1(),null,"  ")),$async$S5)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dIg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S5,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.ny:A.qt,s=u?A.iK:A.c,r=u?A.c:A.bq,q=B.eM(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYA,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qf(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gaz4(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aV.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.X(A.fO,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.n),v,v,v,v,A.lR,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dIh(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ac,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Be,v,new C.dIi(d),B.bn(A.aV,v,v,v,v,A.hh,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a0I.prototype={
T(){return new C.bmj(B.zW(A.yR,A.oe,A.vp))}}
C.bmj.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c5(B.eM(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4W,w,w,w,1,w,!0),A.w,B.zV(this.d,A.bX,new C.dIk(this,d)),w,!1,!1,w,w)}}
C.ag2.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iK:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dN,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ac(0,A.G,A.aV.j(0.16),A.kG,36)],x.V)
u=B.o(m,D.bZG,A.f,m,m,new B.n(m,m,m,B.m(18),A.a6V,D.c9C,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.ny:A.qt
q=B.m(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Ri("Account",A.a.i(this.d),i,j,m),A.T,new C.Ri("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Ri("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Ri("Saved on",""+B.bM(f)+"/"+B.bY(f)+"/"+B.bD(f),i,j,m))
g.push(A.T)
g.push(new C.Ri("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.bT,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.X(A.tp,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cN(A.Yp,new B.bO(new B.n(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wM,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bL:A.ic,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dU(A.o8,new C.f8Y(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.cp,m,new B.ba(B.m(14),A.a1),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fNX,m,new C.f8Z(a0),B.bn(A.aV,m,m,m,m,m,A.cp,m,new B.ba(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.i,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Ri.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.a_P.prototype={
T(){return new C.aC6(new B.at(A.ax,$.aw()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aC6.prototype={
Z(){this.a3()
$.aU.x1$.push(new C.dh8(this))},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.e.t()
this.a2()},
c9V(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iK:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.ny:A.qt,p=u?A.aT:A.dN,o=B.m(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ac(0,A.G,A.aV.j(0.18),A.fP,32)],x.V),l=B.o(v,V.aty,A.f,v,v,new B.n(v,v,v,B.m(18),A.a6V,D.ccw,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uW(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bv1(new C.dh5())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cN(A.Mt,new B.bO(new B.n(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wM,B.x(B.a([l,A.aO,k,A.P,j,A.e3,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CM,v,v,"",v,!0,new B.b6(4,B.m(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b6N),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dh6(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mB,v,v,v,v),A.e3,B.A(B.a([B.E(B.dU(A.o8,new C.dh7(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.cp,v,new B.ba(B.m(14),A.a1),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fRO,v,w.gc9U(),B.bn(A.aV,v,v,v,v,v,A.cp,v,new B.ba(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.i,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OX,v,A.d7,v,v,v)}}
C.aq1.prototype={
T(){return new C.bmq(A.cT)},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()}}
C.bmq.prototype={
Z(){var w,v=this
v.a3()
w=v.a
w.toString
$.tT=$.tT+1
v.r=A.o.M(A.o.D(C.fSW(w.e,w.d.y2),1,600))
w=v.a
if(!J.lo(w.d.y2,w.e))v.r=C.ip0(v.a.e)
v.w=B.df(A.fN,new C.dOH(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.co1()
C.b2g()
this.a2()},
co1(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.h.D(r.e/w,0,1)
if(v<=0)return
u=B.or(A.h.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d8(t,s.c.a,u,A.h8,A.fx,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cw,new B.V(Date.now(),0,!1)))
r.a.bu()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vd(u,q,"Left early \xb7 +$"+A.h.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KY(d,e){return this.cAf(d,e)},
b8X(d){return this.KY(!1,d)},
cAe(d){return this.KY(d,"")},
cAf(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a1(0)
if(d)r=1
else{s=t.f
r=s<=0?0:A.h.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.vd(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bHs(s,C.bH8(),C.hlP(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KY)
case 5:w=1
break
case 4:n=B.or(A.h.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dOy(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d8(s,p,n,A.h8,A.fx,q,null,null,A.cw,new B.V(Date.now(),0,!1))
B.aiO(l,!0)
t.a.hK(l)
t.a.bu()
if(m)k="+$"+A.h.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.h.ad(n,2)+" ("+A.h.S(r*100)+"% of the prize)"}q=t.a
C.vd(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHs(s,C.bH8(),C.hlP(),""+t.e+"/"+t.f,k,q,!0),$async$KY)
case 6:w=7
return B.b(C.aiG(t.a.f,k),$async$KY)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KY,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.aq(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.QF,o,o,o,new C.dOB(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.h.ad(t.w*1.46,2)+" \xb7 stake $"+A.h.ad(p.a.w,2),o,o,o,o,o,o,D.fCn,o,o,o)],s),A.E,o,A.e,A.i,0,A.p),1)
r=p.a.c.a
n=n<=10?A.ay:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.arP(r,new C.dOC(p),o),A.bn,B.cU(o,B.A(B.a([D.c3y,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iI,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o,o,A.b0,new B.n(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nG,o,o,o)],s),A.l,o,A.e,A.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSm(o,D.bw_,B.bm(!0,B.x(B.a([new B.D(D.bK8,q,o),new C.Ot(w*r,w,v,o),new B.D(E.anv,B.A(B.a([B.E(B.bv(B.m(99),B.kc(A.bw,o,o,9,o,r,new B.me(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fM3,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o),B.E(new B.D(A.yZ,B.bv(B.m(22),new B.bO(new B.n(o,o,o,o,o,new B.a7(A.aY,A.b2,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.akY],x.O),o,o),A.n),A.bk,new B.dn(p.x,P.hHr(p.a.e,new P.A2(new C.dOD(p),new C.dOE(p),new C.dOF(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a87.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ac(0,A.G,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bXS,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h0G,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fOJ,w,new C.cdT(d),B.bn(A.at,w,w,w,A.w,A.hh,w,w,new B.ba(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.cah,A.n),w,w,w,w,D.bIo,w,w,w),w,w,w,A.a1H,w,A.d7,w,w,w)}}
C.apu.prototype={
T(){return new C.bmg(null,null)},
ga_(d){return this.e}}
C.bmg.prototype={
Z(){var w,v=this,u=null
v.a3()
w=v.d=B.bp(u,A.Cz,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dHQ(v))
w=B.bp(u,A.mf,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.Ol,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dHR(v))
if(v.a.c){v.d.cK(0)
v.e.bQ(0)
v.f.bQ(0)}},
by(d){var w,v,u=this
u.bJ(d)
w=u.a.c
if(w){v=u.d
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&B.c()
w.cK(0)
w=u.e
w===$&&B.c()
w.bQ(0)
w=u.f
w===$&&B.c()
w.bQ(0)}else if(!w&&d.c){w=u.d
w===$&&B.c()
w.bQ(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.f
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)}},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bzO()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Th[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Th[A.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.w(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.w(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dr:A.bD
else if(w!=null){b1=(w>0?A.dr:A.bD).j(0.45)
u=b1}else u=A.c
b1=a9.a.c
if(b1){b3=a9.d
b3===$&&B.c()
b3=b3.x
b3===$&&B.c()
t=b3*3.141592653589793*2}else t=0
b3=a9.e
b3===$&&B.c()
b3=b3.x
b3===$&&B.c()
s=b3*3.141592653589793*2
b3=a9.f
b3===$&&B.c()
b3=b3.x
b3===$&&B.c()
r=b3*3.141592653589793*2
q=b1?0:(Math.sin(s)+1)*0.5
p=a9.a.c?0:(Math.sin(r)+1)*0.5
o=a9.a.c?Math.sin(t)*0.12:Math.sin(s)*0.11+Math.sin(r*2)*0.05
n=a9.a.c?0:Math.sin(s*1.6)*b2*0.045
m=a9.a.c?t*2.2:0.38+Math.sin(s*1.3)*0.28+Math.sin(r*1.7)*0.12
l=a9.a.c?0.55+Math.sin(t)*0.42:0.52+Math.sin(s*0.9)*0.14+Math.sin(r)*0.08
k=a9.a.c?1+Math.sin(t*2)*0.06:1+Math.sin(s*1.1)*0.07+p*0.06
j=s*0.9+r*1.4
b1=q*0.15
b3=p*0.08
i=b2*(1.2+b1+b3)
h=b2*1.55
g=x.p
f=B.a([],g)
if(!a9.a.c){e=q*8
d=x.V
b3=B.a([B.e1(A.A,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ac(6+e,A.G,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ac(3,A.G,A.ba.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.be,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ac(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wV(a4+a3),b0,A.A,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(b2*0.5),B.a([new B.ac(b2*0.02,A.G,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.ds()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fE(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.dgN
else{a2=B.ap(A.c,A.kP,q*0.45)
a2.toString
a2=B.a([a2,A.cf,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ac(0,A.G,A.w.j(0.3),D.euV,16)],e)
if(!a9.a.c)e.push(new B.ac(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ac(0,A.G,A.c.j(0.9),A.UN,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bO(new B.n(b0,b0,b0,B.m(d),b0,new B.a7(new B.dc(-1+Math.cos(j)*0.8,-1),new B.dc(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.d6(A.w.j(0.18),A.dM,5)],x.C)
if(!a9.a.c)d.push(new B.d6(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uK(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jr,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.A,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.az,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.A,b0,A.ad,A.f,f,b0),b0)}}
C.aNL.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.Ot.prototype={
B(d){var w=null,v=new C.cgk(),u=v.$3("STAKE","$"+A.h.ad(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ac(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OG,B.A(B.a([u,B.o(w,B.x(B.a([D.h_j,B.lB(new C.cgj(),w,A.b0,A.n_,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.auq,A.n),w,w,w,w,A.OT,w,w,w),v.$3("FULL WIN","$"+A.h.ad(this.d,2),A.bL)],q),A.l,w,A.e,A.i,0,w,w),w)}}
C.arP.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bWi,A.df,C.asE(this.d,A.o6,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.auq,A.n),w,w,w,w,A.P3,w,w,w)},
ge3(){return this.c}}
C.OB.prototype={
T(){return new C.bn0(null,null)}}
C.bn0.prototype={
Z(){var w,v=this
v.a3()
w=B.bp(null,A.mf,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAq()},
b2c(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.ivo(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c6(w,new C.e7u(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akg,B.bm(!0,this.b2c(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.b2c(0,d)},
azT(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w)}}
C.aOm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.aeU.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aD(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eN(m,new C.e7x()).gK(0),j=new B.ee(l.dO(m,new C.e7y(),x.cD),x.bG).cC(0,0,new C.e7z())
o=B.aD(d,A.bW,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anM,B.A(B.a([B.o(p,D.c64,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ac(0,A.G,A.fd.j(0.45),A.J,14)],x.V),D.auj,A.n),p,44,p,p,p,p,p,44),A.bc,D.bMx,B.aH(p,p,p,p,A.lt,p,p,p,new C.e7A(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.i,0,p,p),p)],w)
if(l.gcn(m)){u=C.hg5("GAMES",""+l.gK(m),A.ey)
t=C.hg5("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDH(j)
s=s?A.jY:A.eV
v.push(new B.D(D.bGx,B.A(B.a([u,A.ae,t,A.ae,C.hg5("NET",r+q,s)],w),A.l,p,A.e,A.i,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.X(D.bSi,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.i,0,A.p),p))
else v.push(new B.dd(1,A.cl,B.hX(p,new C.e7B(this),l.gK(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7C(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9D,p,p,p,p,p,p,p,p)}}
C.aeT.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!A.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&A.a.X(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=A.bY
else if(u)r=A.dy
else{w=v?A.aQ:A.bv
r=w}q=h.gbkL()
w=new C.e7w()
s=B.m(14)
p=B.a([r.j(0.13),D.buI],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.X(g?A.ml:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u8,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.d(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.n),i,i,i,i,D.bK0,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDH(q)}else{l=g?"+":"-"
l+=C.bDH(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.i,0,i,i)
k=C.e7v("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e7v("PAID",C.bDH(g?h.d:0),r),A.df,C.e7v("BEFORE",w.$1(h.x),A.ey),A.df,C.e7v("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.i,0,i,i)
n=C.iqz(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.am,w,A.aw,B.d(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.i,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.az,A.aC,A.x,p,i,i),A.n),i,i,i,i,A.k8,i,i,i)}}
C.aCQ.prototype={
T(){return new C.biw(A.cT,null,null)}}
C.biw.prototype={
Z(){var w,v,u,t=this
t.a3()
w=B.bp(null,A.mZ,null,1,null,t)
w.cK(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afh(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a87,A.tF,A.d3,A.c][w.aw(4)],[A.i2,A.kd,A.e9,A.D3][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzi()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aE(!1,A.a3,!0,w,B.c6(v,new C.dog(this,d),w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)}}
C.afh.prototype={
ga_(d){return this.f}}
C.aNg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.b33.prototype={
B(d){return new B.wo(new C.ciL(this),null,new B.he(B.a([$.zi(),$.a4q()],x.U)),null)},
ge3(){return this.c}}
C.O5.prototype={
chT(){if(this.c!=null)this.m(new C.c69())}}
C.JE.prototype={}
C.arc.prototype={
T(){return new C.aFG(A.cT,new B.at(A.ax,$.aw()))},
cNa(){return this.d.$0()},
cZ9(){return this.f.$0()},
cYY(d,e){return this.r.$2(d,e)},
cZL(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFG.prototype={
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
avB(){var w=B.cV(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avB()
if(s<2){t.azU("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cNa()<s){t.azU("Insufficient balance.")
w=1
break}if(!t.a.cYY(s,"Dice Roll bet")){t.azU("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e0_(t))}w=3
return B.b(C.cf2(t.a.e),$async$BA)
case 3:r=t.a
q=C.isQ(r.e,r.c,t.d)
t.a.cZ9()
B.b1E(t.a.e)
t.m(new C.e00(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bP(new B.bf(1000*(40+p*6)),null,r),$async$BA)
case 7:if(t.c==null){w=1
break}new C.e01(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bP(A.k4,null,r),$async$BA)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hku(q)
t.m(new C.e02(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cZL(m,"Dice Roll "+n,o)
t.m(new C.e03(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"
w=12
return B.b(C.bHs(r,C.bH8(),new C.e04(t),n,k,"YOU WIN!",!0),$async$BA)
case 12:w=13
return B.b(C.aiG("Dice Roll",l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"),$async$BA)
case 13:w=10
break
case 11:w=14
return B.b(C.bHs(r,C.bH8(),new C.e05(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BA)
case 14:C.vd(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BA,v)},
azU(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avB(),d=x.w,a0=B.aD(a2,A.dD,d).w,a1=Math.min(B.aD(a2,A.bW,d).w.a.a*0.44,200)
d=B.hu(A.asK,D.h6V,new C.e08(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b4,B.o(f,B.A(B.a([A.asF,A.bn,C.asE(v.d,A.j4,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.n),f,f,f,f,A.lS,f,f,f)],t),A.l,f,A.e,A.i,0,f,f)
u=g.z
v=B.a0(140,D.a_X.l()>>>16&255,D.a_X.l()>>>8&255,D.a_X.l()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apu(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Th[q]
o=C.hku(p)
n=p>0?A.bf:A.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ac(1,A.G,n.j(0.65),A.J,14)],r):A.T4
m=m?18:15
s.push(new B.bz(1,A.bd,new B.D(A.jb,B.o(A.A,B.d(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bF(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hku(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.bg:A.bY,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e09(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1N,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.m(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.m0,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e4,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.i,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.h.ad(g.avB()*0.46,2),f,f,f,f,f,f,I.aXi,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.i0,B.x(d,A.al,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gcwO()
s=B.fu(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.m(14),A.a1),f,f,f,f,f)
return C.aSm(f,D.a0a,B.bm(!0,B.x(B.a([new B.D(D.bKt,w,f),new C.Ot(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iz(B.d("\ud83c\udfb2 ROLL ($"+A.h.ad(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.i,0,A.p),1)],t),A.l,f,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arV.prototype={
T(){return new C.aFW(A.l7,new B.at(A.ax,$.aw()))},
cYQ(d){return this.e.$1(d)}}
C.aFW.prototype={
gauo(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cT.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRw(){var w=this.d,v=this.a
return w===A.l7?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaM(){var w=this.gRw(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
JN(d,e){return this.bNv(d,e)},
bNv(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fH(new B.fx(d)),$async$JN)
case 2:B.eY()
t=u.c
if(t!=null)t.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JN,v)},
Rr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRw().length===0){r.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jo()
o=A.h.ad(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaaM()+"/"+o,0,null):B.cD("bitcoin:"+r.gRw(),0,null)
t=4
w=7
return B.b(B.iQ(q,A.fo,null),$async$Rr)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaaM():r.gRw()
w=10
return B.b(r.JN(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rr)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaaM():r.gRw()
w=11
return B.b(r.JN(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rr)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rr,v)},
a1Y(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().blx(A.eR),$async$a1Y)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a1Y)
case 4:s=e
t.m(new C.e7I(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1Y,v)},
ce6(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hIN(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.J(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.J(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cYQ(new B.d8(s,w.c.a,w.d,A.fS,v.d,r,v.f,v.gauo(),A.dG,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eM(o,o,o,!0,!0,A.C2,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.Iq,o,o,o,new C.e7J(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fQs,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f0.j(0.25),A.r,1),k=x.V,j=B.a([new B.ac(0,A.G,A.b3.j(0.25),A.eS,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.du(A.dB,A.A,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fyn,o,o,o),o),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f0.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cdk,A.n),o,o,o,o,A.anZ,o,o,o)
m=p.c8z()
l=p.aDE(1,"Send the money to NGMY Pay",p.ce4())
w=p.aDE(2,"Put this code in the payment note",p.bM5())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDE(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uI,!0,o,o,o,o,new B.b6(4,B.m(18),D.b6I),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fzU,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u9,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f0:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bv(B.m(14),new B.cN(D.b87,new B.Fy(p.f,o),o),A.aq),A.P,D.fiO,A.aw],i),A.l,o,A.e,A.i,0,A.p):B.x(B.a([B.o(o,D.c5e,A.f,o,o,new B.n(D.f0.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fW0,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p)
return B.c5(n,A.C2,B.as(new B.cN(A.afB,B.cu(B.a([j,A.bx,m,A.bx,l,w,t,p.bax(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uI,o,s,u,o,o,A.n),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcpV(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bO(new B.n(o,o,o,B.m(18),B.a([new B.ac(0,A.G,A.b3.j(0.45),A.dn,18)],k),D.cbS,A.n),A.bk,B.lO(A.atm,D.h65,p.gce5(),B.fu(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHw,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c8z(){var w=null,v=new C.e7E(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.l7,A.hD,"Cash App"),A.e7,v.$3(A.a9U,D.asi,"Bitcoin")],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.n(A.uI,w,t,u,w,w,A.n),w,w,w,w,A.lT,w,w,w)},
bax(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.A,B.d(""+d,v,v,v,v,v,v,D.fFq,v,v,v),A.f,v,v,D.b8R,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f0.j(0.18),v,v,v,v,v,A.wE,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.EW(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a15,B.d(e,v,v,v,v,v,v,A.Le,v,v,v),v),f],u),A.al,v,A.e,A.i,0,A.p),v),1)],u),A.al,v,A.e,A.i,0,v,v),v)},
aDE(d,e,f){return this.bax(d,e,f,!1)},
ce4(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaaM():s.gRw(),p=B.m(20),o=B.m(20),n=s.d===A.l7,m=n?D.caM:D.ccG,l=B.a([new B.ac(0,A.G,(n?A.a_y:D.ZG).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.l7
w=n?A.hD:D.asi
k=B.o(r,B.X(w,n?A.a_y:D.ZG,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.aw,B.A(B.a([D.c0o,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rn,r,r,r)],u),A.l,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bc,v,B.aH(r,r,r,r,D.c_m,r,r,r,w?r:new C.e7H(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.i,0,r,r),r,new B.n(r,r,r,o,l,m,A.n),r,A.anp,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcl2(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)},
bM5(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b8.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gauo().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b8.j(0.28),A.b8.j(0.08)],u)
p=new B.ax(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.A,B.d(s,o,o,o,o,o,o,A.q3,o,o,o),A.f,o,o,new B.n(o,o,new B.bF(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b2,A.x,q,o,o),A.n),o,52,o,A.jb,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.i,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.hu(A.a4E,D.h85,new C.e7D(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.i,0,o,o)],l),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(A.uI,o,m,n,o,o,A.n),o,o,o,o,A.bH,o,o,o)}}
C.rR.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rS.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWM(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hsQ(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aM(v," \xb7 ")},
giK(d){return this.c}}
C.lT.prototype={
aj(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iC.prototype={
aj(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b9(v.c,new C.chJ(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.iq.prototype={
amZ(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.iq(v,u,t,s,r,h==null?w.f:h)},
bg9(d){var w=null
return this.amZ(w,w,w,w,d,w)},
cR2(d,e,f){return this.amZ(d,e,null,null,null,f)},
bg8(d){var w=null
return this.amZ(w,w,w,d,w,w)},
cQH(d,e){var w=null
return this.amZ(w,w,d,w,e,w)},
aj(){var w=this,v=C.ie3(w.c),u=w.e,t=B.T(u).k("N<1,ab<q,@>>")
u=B.B(new B.N(u,new C.chH(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbZ.prototype={}
C.WU.prototype={
T(){return new C.aG7(new B.at(A.ax,$.aw()),B.mP(0,null,null),B.a([],x.m))},
Vi(d){return this.d.$1(d)}}
C.aG7.prototype={
Z(){var w,v=this
v.a3()
w=J.b9(v.a.c,new C.ebO(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ebP())
v.d=w
v.JY()},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.x.t()
this.a2()},
ag2(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JY()
u.m(new C.ebI(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.Vi(s),$async$ag2)
case 2:r=e
if(u.c!=null){u.m(new C.ebJ(u))
t=u.c.J(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dr:A.ay,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ag2,v)},
aa_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.iq(q,"New Category",A.I0,4284773515,D.aDh,p.length)
t.m(new C.ebr(t,s))
t.JY()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ce(null,null,!0,null,new C.ebs(s),p,null,!0,!0,x.i),$async$aa_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebt(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
a2U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.ebF(t,p))
q.bP(0,A.ch)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.chE(p,q,s),$async$a2U)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebG(t,r))
$.aU.x1$.push(new C.ebH(t))
case 1:return B.h(u,v)}})
return B.i($async$a2U,v)},
ac0(d){return this.bSk(d)},
bSk(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ebz(t),r,null,!0,!0,x.i),$async$ac0)
case 2:s=f
if(s!=null)u.m(new C.ebA(u,d,s))
return B.h(null,v)}})
return B.i($async$ac0,v)},
bPZ(d){this.m(new C.eby(this,d))
this.JY()},
JY(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bg9(v)},
cio(d,e){var w={}
w.a=e
this.m(new C.ebE(w,this,d))},
a_8(d){return this.c7v(d)},
c7v(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ed(new C.ebD(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).cc(t),$async$a_8)
case 2:return B.h(null,v)}})
return B.i($async$a_8,v)},
bIc(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fX,A.bs],l):B.a([A.pg,A.eP],l)
w=B.m(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.X(A.e9,m?A.dy:A.dX,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a2Y:U.Pv
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.X(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ebv(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.us:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.ks(!0,n,o.x,new C.ebw(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afw,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.cs,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.m(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebx(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcx3()
p=B.bn(A.bp,n,n,n,n,n,A.js,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JS(t,A.bp,n),A.df,B.bJ(o.f?A.ri:D.asw,n,m,p)],r),A.dO,n,A.e,A.i,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.al,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.Hj,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bbZ(t),r=t?A.bA:A.cf,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcea()
if(n)n=A.VP
else n=B.X(A.zA,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eM(B.a([B.hu(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXA(A.aN,u,A.YD,A.oP,D.h4h,v.gbEs())
q=v.bIc(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hj,n,u),B.E(G.hxm(!1,new C.ebN(v,s),m.length,v.gcin(),D.bGj,u,!1),1)],w),A.al,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
C.QG.prototype={
T(){return new C.bdV()}}
C.bdV.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.at(new B.bc(w.b,A.b7,A.aP),$.aw())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.us:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c70,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cdO,new C.cX9(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.ddw,new C.cXa(t),v),v.k("ak.E"))
u=x.p
v=B.cc(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bN(!1,A.dp,s,s,!0,s,s,s,new C.cXb(d),s,s),B.bJ(A.ro,s,new C.cXc(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1t.prototype={
T(){return new C.aI9()},
pp(d){return this.d.$1(d)}}
C.aI9.prototype={
Z(){this.a3()
this.d=B.bs(this.a.c.e,!0,x.u)},
azW(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pp(v.bg8(u))},
aa1(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aa1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b4c(new C.iC("q_"+1000*s,"",D.dbY,null,!1,r.length)),$async$aa1)
case 2:t=e
if(t!=null){u.m(new C.f3S(u,t))
u.azW()}return B.h(null,v)}})
return B.i($async$aa1,v)},
b4c(d){var w,v=this.c
v.toString
w=B.ed(new C.f3T(d),!1,null,x.u)
return B.a6(v,!1).cc(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.cf,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eM(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXA(A.aN,v,A.YD,A.oP,D.hae,w.gbEU())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hX(v,new C.f3Y(w,new C.bbZ(u)),q,D.bGs,v,A.ah,new C.f3Z(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1s.prototype={
T(){return new C.aI8()}}
C.aI8.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.at(new B.bc(w.b,A.b7,A.aP),$.aw())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c4(v.e,D.a92)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.a2()},
ag1(){var w=0,v=B.j(x.H),u=this,t
var $async$ag1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DN(78,1920),$async$ag1)
case 2:t=e
if(t!=null)u.m(new C.f3O(u,t))
return B.h(null,v)}})
return B.i($async$ag1,v)},
ahc(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ed(new C.f3M(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).cc(t),$async$ahc)
case 2:s=e
if(s!=null)u.m(new C.f3N(u,s))
return B.h(null,v)}})
return B.i($async$ahc,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.cf,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eM(B.a([B.da(L.a4N,i,A.ro,new C.f3Q(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bv(e,B.aSr(B.m(14),A.bX,140,A.D4,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gce9(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eO,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cE,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JS(j.d,i,i)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f3R(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.us:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bZ0,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.n),i,i,i,i,A.bl,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.aw,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.i,0,A.p),1)
return B.c5(d,g,B.cu(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.aw,s,A.af,B.aE(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.X(A.zw,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gck_(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.aj)],a0),i,i,A.bT,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.de3.prototype={}
C.WV.prototype={
T(){return new C.aG9(B.kb(!0,null,!0,!0,null,null,!1))}}
C.aG9.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dH(q.a.c,new C.eco())
w=B.B(w,w.$ti.k("M.E"))
q.e=w
v=B.a([],x.s)
for(w=J.aT(q.a.c);w.C();){u=w.gP(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(A.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=A.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=A.d.aM(v,"\n\n")
q.d=new B.at(new B.bc(w,A.b7,A.aP),$.aw())},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.f.t()
this.a2()},
azX(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.aB(v,r,u)+e
s=A.a.ol(v,r,u,t)
this.d.bP(0,new B.bc(s,B.ho(A.bB,r+t.length),A.aP))},
b2e(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.ol(w,v,v,u)
this.d.bP(0,new B.bc(t,B.ho(A.bB,v+u.length),A.aP))},
adJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DN(78,1920),$async$adJ)
case 3:s=e
if(s==null){w=1
break}t.m(new C.ec4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adJ,v)},
Zz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().a7m(A.eR),$async$Zz)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fs(),$async$Zz)
case 4:t.m(new r.ec9(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zz,v)},
adK(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new B.at(A.ax,t)
r=new B.at(new B.bc("https://",A.b7,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ec7(s,r),q,null,!0,!0,x.y),$async$adK)
case 2:if(e===!0)u.m(new C.ec8(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adK,v)},
bJ9(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ec0(),B.T(p).k("N<1,q>")).c0(0,new C.ec1())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.lT("heading",A.a.i(A.a.aY(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.lT("bullets",new B.N(B.a(s.split("\n"),u),new C.ec2(),t).c0(0,new C.ec3()).aM(0,"\n"),r,r))
else q.push(new C.lT("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a92)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.de3(n),l=n?A.av:A.hl,k=B.d(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eM(B.a([B.da(L.a4N,o,A.acQ,new C.ece(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hM
v=B.c_(A.bI,B.a([p.wm(A.Pw,"Bold",new C.ecf(p),m),p.wm(A.a3_,"Italic",new C.ecg(p),m),p.wm(A.apU,"Underline",new C.ech(p),m),p.wm(Y.a36,"Heading",new C.eci(p),m),p.wm(A.Px,"Bullets",new C.ecj(p),m),p.wm(A.apT,"Align",new C.eck(),m),p.wm(A.HH,"Link",p.gc4e(),m),p.wm(A.qQ,"Image",p.gc4d(),m),p.wm(N.a3k,"Video",p.gc4f(),m),p.wm(A.a4r,"Signature",new C.ecl(p),m),p.wm(N.Py,"Divider",new C.ecm(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,A.aow,o,o,o)
v=n?A.bA:A.c
u=B.m(12)
t=B.K(n?A.cQ:A.dN,A.r,1)
s=B.a([new B.ac(0,A.G,A.w.j(n?0.35:0.08),A.cM,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iA:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bT,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.n),o,o,o,o,Q.CQ,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.id(n,B.T(n).k("id<1>"))
j.push(B.o(o,B.c_(A.bI,n.gdQ(n).dO(0,new C.ecn(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OJ,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.m(8),s=B.m(8)
return B.hd(B.aE(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cs,B.X(d,v?A.iA:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.aj),w,e,w,w)}}
C.dsz.prototype={}
C.aDK.prototype={
a7(){return"_KbView."+this.b}}
C.asb.prototype={
T(){return new C.aG8(D.b26)},
cY1(d,e){return this.e.$2$size(d,e)}}
C.aG8.prototype={
gaCO(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gczh(){var w,v,u,t,s,r=this.gaCO()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ceb(d){this.m(new C.ebY(this,d))},
clb(d){this.m(new C.ebZ(this,d))},
bHg(){this.m(new C.ebQ(this))},
bHi(){this.m(new C.ebR(this))},
gb9X(){var w=B.bs(this.a.c,!0,x.i)
A.d.b0(w,new C.ec_())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsz(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eP.j(0.55),A.nu.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIp(f)
break
case 1:g=i.gaCO()
g.toString
g=i.bJ7(f,g)
break
case 2:u=i.gaCO()
u.toString
t=i.gczh()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.d(t.b,h,h,h,h,h,h,D.fEq,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.m(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ac(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fX:A.pg
l=B.m(8)
k=B.X(A.oG,g?A.dy:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDI(f,i.gbHh(),u.c,s,"Answer",h),B.E(B.cu(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e7,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dy:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.n),h,h,h,A.eg,A.hn,h,h,h),new C.b2B(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.n),h,h,h,h,A.bT,h,h,1/0)],j),h,h,A.ani,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aY,A.b2,A.x,e,h,h),A.n),h,h,h,A.i0,h,h,h,h)},
b_h(d){var w,v,u,t=null,s=d.a,r=s?D.us:A.c,q=A.aD.j(0.22)
q=B.a([new B.ac(0,A.G,q,A.J,14),new B.ac(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i4(v.cY1(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dr,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.i,0,A.p)},
bIp(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_h(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_h(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cu(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,E.aVu,new C.ebT(u,d),u.gb9X().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGt,t,t,A.ah,!1)},
bJ7(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b0(r,new C.ebV())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hX(s,new C.ebW(this,r,d,e),t,A.wG,s,A.ah,new C.ebX(),!1)
return B.x(B.a([new C.aDI(d,this.gbHf(),e.c,w,e.b,s),new B.D(A.wI,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.i,0,A.p)}}
C.aDI.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.X(A.eL,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.n),v,v,v,v,A.cs,v,v,v)
return new B.D(D.bJN,B.A(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v),v)}}
C.ado.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.us:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ac(0,A.G,A.w.j(t?0.28:0.06),A.dM,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.i,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.n),w,w,w,w,A.cs,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj),w)}}
C.b2B.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fX:A.pg
u=B.m(8)
t=B.X(A.ve,w?A.dy:A.dX,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dy:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.n),s,s,s,A.cx,A.eQ,s,s,s))}A.d.u(p,J.b9(this.c,new C.chF(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.adf.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bE7,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hA,B.bv(B.m(12),B.aSr(r,A.bX,160,A.qQ,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hA,new C.aDJ(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wE,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cq:A.bp,r,A.ne,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQE(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iR(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cK,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.yX,B.x(B.a([u,q,A.aO,t,A.aw,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQF(),x.cc),new C.cQG(s),v),v.k("M.E"))
return new B.D(A.k7,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hA,B.iR(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eI,C.i7W(q,s.d),r)}}}
C.aDJ.prototype={
T(){return new C.bk4()}}
C.bk4.prototype={
Z(){this.a3()
this.ag3()},
ag3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ag3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d2(n,"http")&&!J.d2(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZR(B.cD(n,0,null),null)
w=7
return B.b(J.a4t(q),$async$ag3)
case 7:if(r.c==null){w=1
break}r.m(new C.dsA(r,q))
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag3,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.m(12)
return B.o(A.A,B.X(A.qZ,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajC(v)
return B.bv(w,new B.fG(u,new B.an(A.A,t,A.ad,A.t,B.a([new B.AK(s,t),B.aH(t,t,t,t,B.X(v.f?A.aq0:A.Pz,A.c,t,t,t,44),t,t,t,new C.dsC(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.at1.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JJ.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rX.prototype={}
C.ase.prototype={
T(){var w=null
return new C.aGa(new B.at(A.ax,$.aw()),B.mP(0,w,w),B.a([],x.m),D.Et,D.aMk,w,w)},
ge3(){return this.d}}
C.aGa.prototype={
Z(){var w,v=this
v.a3()
w=B.bp(null,A.nD,null,1,null,v)
w.eT(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7r).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.V$=$.aw()
v.R$=0
w.e.t()
w.bAz()},
gasV(){var w,v,u,t,s=this.x
if(s===D.Eu)return null
s=s===D.Et
w=s?D.a7r:D.a6v
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cA4(d){return this.m(new C.ecC(this,d))},
aCA(){$.aU.x1$.push(new C.ect(this))},
JO(d){return this.czv(d)},
b2f(){return this.JO(null)},
czv(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JO=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JO)
case 3:e=b2
if(!e){w=1
break}B.jX()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aS(a0,new C.ecv())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hD7(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!A.a.q(d,"bible"))if(!A.a.q(d,"scripture")){if(!A.a.q(d,"biblia"))if(!A.a.q(d,"andiko"))if(!A.a.q(d,"gospel verse")){a5=B.af("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=B.af("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.hD7(a8)&&!p
q.m(new C.ecw(q,a8))
q.aCA()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.ecx(q))
q.aCA()
w=1
break}t=5
j=B.nl(k)
i=new B.N(a0,new C.ecy(),B.T(a0).k("N<1,q>")).aM(0,"\n\n")
a0=C.isd(m,p,o,q.x,n,q.y,q.gasV(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.rk(j,h,A.i3,null,null),$async$JO)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFA(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ecz(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ecA(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.ecB(q))
q.aCA()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JO,v)},
bNd(){return this.JO("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GR:D.bsY,o=x.p
o=B.a([B.x(B.a([B.E(s.cyL(q),1),s.bMq(q)],o),A.l,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNc()
u=B.m(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.eyJ,r,new B.n(r,r,r,u,B.a([new B.ac(0,A.G,A.aQ.j(0.45),A.cM,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o0,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o0,r,r,A.aj),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cyL(d){var w,v,u,t=this,s=null
if(t.x===D.Eu)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hf3(s,!1,A.L,0,0,w,B.hbj(t.cEC(d),A.YX,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.ask,A.aD.j(0.5),s,s,s,52)
w.push(B.b9a(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fT,B.a([t.akq("Full bongo love song ABAB",d),t.akq("Mix: group vs private jet \u2014 which flies?",d),t.akq("Song from John 3:16 + matching verses",d),t.akq("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nE(D.bEP,B.Zf(new B.oT(new C.ecu(t,d),u+v,!0,!0,!0,0,B.tn(),s)),s))}return B.w9(0,s,A.t,t.e,A.y,s,s,S.afs,s,s,!1,s,A.ah,!1,w)},
cEC(d){var w=this.as
w===$&&B.c()
return B.c6(w,new C.ecJ(this,d),null)},
cEE(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.ecL(v),r=A.w.j(d?0.35:0.06),q=B.m(14),p=B.K(A.ba.j(0.35),A.r,1),o=v.gasV()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fe,u,u,u)
w=v.gasV()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ae,w,B.X(v.w?A.Q_:A.tm,A.ba,u,u,u,20)],x.p),A.l,u,A.e,A.i,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.n),u,u,u,u,A.nH,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)},
ay6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b3,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.cq],x.O)
break
case 2:w=B.a([A.bC,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.ecs(this,d)
r=B.m(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Fe,n,n,n)
if(m)o=A.c
else o=g?A.aa:A.bq
return B.E(B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.aj),1)},
cEF(d,e){var w,v,u,t=this,s=null,r=t.x===D.Et?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.ba.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.ecM(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.W7,s,s,s)
return B.aE(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.ho,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.aj)},
akq(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,A.acI,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mY(w,u,v,w,this.r?w:new C.ecD(this,d),w,w,w,w)},
bMq(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aog,B.d("$"+A.h.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Eu?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eO,r,A.hp,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.hQ,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ecp(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ecq(s)
l.push(B.A(B.a([v,new B.JS(w,A.aD,r),B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.eyZ:D.c0x,r,D.b9J,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.aj)],m),A.dO,r,A.e,A.i,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.n),r,r,r,A.ta,A.a19,r,r,r)}}
C.aOu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.WW.prototype={
aj(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0d.prototype={
T(){return new C.aD8(null,null)},
bl2(){return this.f.$0()}}
C.aD8.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bp(u,D.bDd,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,A.nC,u,1,u,v)
w.eT(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.lQ,u,1,u,v)
w.cK(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bp(u,A.yT,u,1,u,v)
w.cs(0)
v.r!==$&&B.aQ()
v.r=w},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
v=w.r
v===$&&B.c()
v.t()
w.bzn()},
ced(){var w=this.d
w===$&&B.c()
w.eI(0).bF(new C.dpV(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aD(d,A.bW,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcec(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.E1(new C.dpW(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ac(2,A.G,A.at.j(0.35),A.J,40),new B.ac(0,A.G,A.aN.j(0.25),A.fP,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c6(new B.he(B.a([r,q],x.U)),new C.dpX(k),j)
r=B.og(A.jV,D.h7p,new C.dpY())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cE,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2g(A.kf,"Resets in 24h"),A.ae,k.b2g(A.oG,"Help Topics ready")],o),A.l,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dU(D.h1v,new C.dpZ(k),B.dj(j,j,j,j,j,j,j,j,j,A.aa,j,j,A.kC,j,new B.ba(B.m(14),A.a1),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.m(14)
m.push(B.E(B.bJ(D.h7f,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kC,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c6(w,new C.dq_(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.i,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.c9Q,A.n),j,j,j,j,T.ao6,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dq0(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aE(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.aj)},
b2g(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.X(d,A.at,w,w,w,13),A.e7,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.ho,w,w,w)}}
C.aNl.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.OS.prototype={}
C.qh.prototype={}
C.asO.prototype={
T(){return new C.aGx(B.a([],x.E),B.a([],x.s))}}
C.aGx.prototype={
gatj(){return A.h.D(B.M8(this.a.c.a,new C.er3(this)),0,1/0)},
aa7(){var w,v=this,u=v.d,t=v.gatj()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rj(u.a,t,!0,!1)},
Kk(d,e){var w,v,u,t=this,s=t.gatj(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gatj()
if(w<v-0.005)B.hIP(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rj(u.a,w,!0,!1)
B.rj(t.a.c.a,w,!0,!1)
B.Bs(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a3()
$.aU.bZ$.push(o)
w=$.Jw+1
$.Jw=w
if(w===1){w=$.huk
if(w!=null)w.$0()}v=$.hdl.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m_(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aS4(u,A.h.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w3(w,u,r,q,s.e,p)}o.d=t}o.Q7()
o.aa7()
$.aU.x1$.push(new C.erK(o))
o.Q=B.df(A.ow,new C.erL(o))
o.as=B.df(A.h1,new C.erM(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i_C()
w.a2()},
cGQ(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9g(v,w)){if(C.hdn(p,q.e)){q.m(new C.ers(q,p))
q.yI(!1,!0,!0)}else if(q.c!=null)q.m(new C.ert())
return}if(!C.cjW(v.c?v.bU():v)){q.m(new C.eru(p))
q.b2p(!1)
return}u=p.gD9()
if(u<=0)return
t=w.d2(B.c0(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))
s=C.hdo(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.erv())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.erw(r))){q.m(new C.erx(p,w,u))
return}q.m(new C.ery(q,p,u,w))
q.aAB(new B.d8(r,p.a,u,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cw,w))},
jn(d){if(d===A.fV)this.Fp()},
Q7(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bn=p.bn
w.c7=B.bs(p.c7,!0,x.N)
w=this.a.c
w.bw=p.c7.length
w.ry=p.ry
w.to=p.to
w.x1=p.x1
v=p.x
if(v==null)u=null
else{u=v.a
t=v.b
s=v.c
r=v.d
q=v.f
q=new B.w3(u,t,s,r,v.e,q)
u=q}w.x=u},
T2(d){return this.cFp(d)},
cFp(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$T2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Q7()
t.Kk(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$T2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$T2,v)},
Fp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.x||q.d==null){w=1
break}q.x=!0
t=4
n=q.a.c.a
m=q.d
m.toString
l=q.e
k=q.f
j=q.r
w=7
return B.b(G.Ac(q.w,k,l,j,m,!1,n),$async$Fp)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.ern(q,p))
q.T2(!1)}w=8
return B.b(q.Kw(),$async$Fp)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.aa(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Kw(),$async$Fp)
case 9:r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.x=!1
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Fp,v)},
Ov(d){return this.bGs(d)},
bGr(){return this.Ov(null)},
bGs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Ov=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Ov)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d_(t.w,x.N)
r=s.rD("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jA(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fS&&l.x===A.cw&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.er4(j,t,i))
q.u(0,p)
r=B.B(q,B.a4(q).k("cj.E"))
t.w=r
w=4
return B.b(B.asQ(t.a.c.a,r),$async$Ov)
case 4:t.aA4(!1,!0)
r=t.c
if(r!=null)r.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ov,v)},
Kw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kw=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.ero(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.erp(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lG("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kw)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gP(a2)
m=n
a3=J.t(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aI(J.t(m,"status"))
d=a3==null?null:A.h.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bk(r.e,new C.erq(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cw
else a0=J.z(k,2)?A.kK:A.dG
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dG&&h===A.cw&&a3[j].d===A.fS)J.c4(a6,l)
if(i===A.dG&&h===A.kK&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.Kk(g.d+r.e[j].c,!1)
r.aA4(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.err())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.aa(a7)
$.am.$1("[growth income] refresh deposit status: "+B.w(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return B.b(r.Ov(a6),$async$Kw)
case 13:w=11
break
case 12:w=14
return B.b(r.bGr(),$async$Kw)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kw,v)},
QV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vh(i.a,i),$async$QV)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.er8(t,h))
t.Q7()
t.aa7()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Ac(s[0],p,q,o,r,!0,i),$async$QV)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q7()
t.aa7()
k=C.hdn(n,m)
if(k)t.Kk(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hva(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q7()
if(t.c==null){w=1
break}t.m(new C.er9(t,n,m,l))
if(i){t.yI(!1,!0,!0)
if(j==="reset"){B.htU(t.a.c.a)
i=t.c
if(i!=null)B.htX(i,null)}else if(j==="warn2"){B.htV(t.a.c.a)
i=t.c
if(i!=null)C.htY(i)}}else if(k)t.yI(!1,!0,!0)
else t.T2(!1)
case 1:return B.h(u,v)}})
return B.i($async$QV,v)},
yI(d,e,f){return this.coS(d,e,f)},
aA4(d,e){return this.yI(d,!1,e)},
b2p(d){return this.yI(!1,d,!1)},
coS(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rW(r,o,q,!1,t.w,s,p),$async$yI)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JC(t.w,p,q,s,o,r)
if(f)t.T2(d)
case 1:return B.h(u,v)}})
return B.i($async$yI,v)},
ceu(){this.m(new C.erh())
this.aA4(!1,!0)},
agQ(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cw&&B.tl(d)){w=r.a
w.f.$1(new B.d8(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjS(q,d)
v=q.d=B.M8(r.a.c.a,new C.ere(r))
r.at=r.a.c.d=v
B.rj(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.erf(r,d))
r.yI(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d8(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dG
if(w&&d.d===A.fS)s=!1
else if(w&&d.d===A.f4){r.Kk(q.d-d.c,!0)
s=!0}else{C.cjS(q,d)
w=d.d
s=w===A.f4||w===A.ks
r.Kk(q.d,s)}r.m(new C.erg(r,d))
w=d.d
r.yI(s,e,w===A.f4||w===A.ks||d.x===A.cw||w===A.h8)},
aAB(d){return this.agQ(d,!0,!1)},
b3w(d,e){return this.agQ(d,!0,e)},
b3v(d,e){return this.agQ(d,e,!1)},
chC(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iuB(u,e,d)){v.mt("This plan is already active.")
return}w=B.hIj(u.a,d,e)
if(C.iqF(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.eri(v))
v.m(new C.erj(v,u,new B.w3(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAB(new B.d8(w,u.a,g,A.ks,A.fx,"Direct investment buy: "+d,null,null,A.cw,new B.V(Date.now(),0,!1)))
v.m(new C.erk(v))
v.mt("Plan purchased: "+d)},
mt(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a18(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a18=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.apv(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a18)
case 3:w=4
return B.b(t.QV(),$async$a18)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a18,v)},
ahj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.ak_(r,B.a([r],x.d9),A.T5,t.a.d,t.gb3u(),t.gb2o(),null),!1,null,x.X),$async$ahj)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahj,v)},
ahh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.an9(r,t.a.d,t.e,t.gb3u(),t.gb2o(),new C.erm(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ahh)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
aeu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aeu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hdn(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2p(!0),$async$aeu)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.m(new C.era(t))
w=1
break}if(B.mn(r)===6||B.mn(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hvb(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9g(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSQ(q,r))if(!B.aSQ(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIv(m.y,l,m.a))}}q=B.hHH(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i14(r)
q=j.a
t.m(new C.erb(j,r,k))
t.b3v(new B.d8("local_clockin_manual_"+q+"_"+s,j.a,0,A.h8,A.fx,"Clock-in session started (local)",null,null,A.cw,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aeu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.ny:A.qt
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fP1
u=u==null?k:u.$0()
u=J.aT(u==null?A.iF:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.an(0,q)||B.tl(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cS(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erC(),B.T(v).k("Y<1>")))
A.d.b0(w,new C.erD())
v=l.d
v.toString
u=C.igd(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anX(t,l.a.e,l.z,l.gchB(),l.aXy(),D.hBW),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDX(l.aXy(),q,n,o,w,new C.erE(l),l.gcjI(),new C.erF(l),D.hBX),j,!0)
m=B.aD(d,k,x.w).w
n=l.y
return new B.XM(n,new C.erG(l),B.aE(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDW(v,u,w,l.gc7x(),new C.erH(l),new C.erI(l),new C.erJ(d),l.gckA(),l.gckv(),D.hBV),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIR(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.aj),k)},
aXy(){var w=null,v=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.A,D.c5o,A.f,w,w,new B.n(w,w,B.K(D.f0.j(0.38),A.r,1),w,B.a([new B.ac(0,A.G,D.f0.j(0.18),A.J,16)],x.V),new B.a7(A.az,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.er7(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIR(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.5),A.eS,24),new B.ac(-2,A.G,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.OJ,B.bm(!0,B.as(new B.cN(D.b8_,B.o(w,B.ci(new C.er5(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c9h,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9c(d){var w=null,v=this.y===d,u=D.dgd[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dw(w,!0,w,B.ay(A.c_,B.qp(B.oB(v?B.X(s,D.agO,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.i,0,A.p),A.iQ,B.pV(),A.b0,A.b0,B.LP())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erd(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDW.prototype={
c68(d){return C.hdo(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pK(new B.Y(v,new C.duk(),u),3,u.k("M.E"))
t=B.B(u,B.a4(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9g(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hvb(r)
m=v.gD9()
l=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f0.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ac(0,A.G,D.f0.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.A,B.X(A.hD,D.f0,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.az,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.cM,16)],j)
h=B.m(12)
g=x.p
j=B.bUC(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.A,B.o(A.A,D.bYo,A.f,e,e,new B.n(A.iO.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.caS,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.A,D.c4n,A.f,e,e,new B.n(A.bt,e,B.K(D.ajM,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hxP(A.fN,new C.dul(),k)
k=B.A(B.a([B.E(C.hxO(new C.dum(f,A.rH,n),new B.V(Date.now(),0,!1),h,k),1),A.p4,B.E(new B.wo(new C.dun(f,A.rH),e,new B.he(B.a([$.zi(),$.a4q()],x.U)),e),1)],g),A.l,e,A.e,A.i,0,e,e)
h=f.c9p(A.rH,D.f0)
v=B.E(f.cCU("Total Profit","$"+B.dG(v.e),A.rH),1)
u=u?e:s.b
return B.eb(B.cc(B.x(B.a([j,A.T,k,A.af,new C.aDV(f.d,m,q,p,n,o,D.f0,f.gc67(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p4,B.E(f.b9S("Total Investment","$"+B.dG(u==null?0:u),A.rH,f.r),1)],g),A.l,e,A.e,A.i,0,e,e),A.T,f.c64(d,t,D.f0,w)],g),A.al,e,A.e,A.i,0,A.p),A.t,e,A.y,e,e,A.a1G,e,e,A.ah),D.ajM,!0)},
aA3(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.dn,18)],x.V)
return B.o(w,B.bv(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bO(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.c9K,A.n),w,w,w,w,w,w,w,w)},
b2n(d,e,f,g){return this.aA3(d,e,f,A.ag,g)},
bc0(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2n(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFn,B.x(B.a([B.o(w,B.A(B.a([B.X(e,f,w,w,w,15),A.e7,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.n),w,w,w,w,A.aol,w,w,w),A.b4,new B.du(A.dI,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9p(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.d_N[w],s,D.bJ2,s,s,s,5))}r=B.o(s,B.A(o,A.dO,s,A.b9,A.i,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h3i,A.bF,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ac(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.dd(1,A.cl,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aA3(B.A(B.a([r,D.foS,q,A.ae,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.X(A.nO,e.j(0.95),s,s,s,21),A.rk,B.d("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.i,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.i,0,s,s),e,A.a5,A.a1c,26)},
b9S(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b6a,v,v,A.n),v,v,v,A.nF,v,v,v,5),r=x.p
r=B.a([s,A.bc,B.E(B.x(B.a([B.A(B.a([B.X(u?A.vc:A.zL,t,v,v,v,14),A.e7,new B.dd(1,A.cl,B.d(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.i,0,v,v),A.am,new B.du(A.dI,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.fye,v,v,v),v)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(W.Ow,B.X(A.eJ,A.c.j(0.35),v,v,v,v),v))
w=this.b2n(new B.a5(v,66,B.A(r,A.l,v,A.e,A.i,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cCU(d,e,f){return this.b9S(d,e,f,null)},
c64(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ac(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.VO,k,A.b4,B.o(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.n),m,m,m,m,A.a1T,m,m,m)],h),A.l,m,A.e,A.i,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a12,B.x(B.a([B.X(A.hq,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mB(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.ks
t=u?A.hO:D.f0
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.o(A.A,B.X(u?A.vc:A.x5,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bF(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.az,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.iow(j),m,1,A.a2,m,m,m,A.kJ,m,m,m)
q=C.hzr(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oz,m,m,m)
j=C.hHk(j)
k.push(new B.D(A.OA,new B.c7(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([v,A.bc,new B.bz(1,A.bd,s,m),B.x(B.a([q,A.cS,B.d(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dO,m,A.e,A.i,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aA3(B.x(i,A.l,m,A.e,A.i,0,A.p),f,A.aY,D.bFy,26)}}
C.aDV.prototype={
T(){return new C.bkO(null,null)},
cXH(d){return this.z.$1(d)},
cZ0(){return this.Q.$0()}}
C.bkO.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bp(u,A.qG,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,D.bD3,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.qJ,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.bb1()},
gbdK(){var w=new B.V(Date.now(),0,!1)
if(B.mn(w)===6||B.mn(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bb1(){var w=this,v=w.a,u=v.e||v.f||w.gbdK()
if(u){v=w.f
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&B.c()
v.cK(0)}else{if(!u){v=w.f
v===$&&B.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&B.c()
v.bQ(0)}}},
by(d){this.bJ(d)
this.bb1()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bzE()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdK()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.dud(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dyR:D.dyP
q=B.K((f?D.pj:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ac(0,A.G,(f?A.aE:A.ba).j(0.16),A.fP,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ad_(D.pj,130),h,h,h,-24,-30,h),B.ao(-36,i.ad_(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ad_(A.ba,120),h,h,h,-30,-36,h),B.ao(-40,i.ad_(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dn(!0,B.bv(l,new B.e6(B.c6(k,new C.due(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dn(!0,B.bv(l,new B.e6(B.c6(k,new C.duf(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b86,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ac(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.dd(1,A.cl,B.d(u,h,1,A.a2,h,h,h,D.fEb,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.n),h,h,h,h,A.hp,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hxP(A.fN,new C.dug(),l)
m.push(C.hxO(new C.duh(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.n(h,h,q,s,o,new B.a7(A.az,A.aC,A.x,r,h,h),A.n),A.Cy,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ad_(d,e){var w=null
return new B.dn(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.A,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beo.prototype={
b2q(d,e,f,g){var w=new B.aG($.R().r,A.ai,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.cf(v,u,v+f,u))
w.E(new B.cf(v,u,v,u+f))
w.E(new B.cf(v,u,v-f,u))
w.E(new B.cf(v,u,v,t))
w.E(new B.bx())
d.af(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.h.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.h.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2q(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.h.F(a7+p/3,1)
$.R()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.ab
n.c=1.6
n.r=a9.j((1-o)*0.38).gp(0)
b2.O(b1,138+o*90,n)}for(a7=a6.d,m=b2.c,u=0;u<28;++u){l=A.h.F(w*(1+A.o.F(u,2))+u/28,1)
k=u*2.399963+Math.sin(u*1.7)*0.2
j=113.16+l*(70+A.o.F(u,5)*18)
i=a8+Math.cos(k)*j
h=b0+Math.sin(k)*j*0.96
o=new B.r(i,h)
g=A.h.D(Math.sin(l*3.141592653589793),0,1)
switch(A.o.F(u,4)){case 0:f=A.h.D(Math.abs(Math.cos(l*6.283185307179586*3)),0.28,1)
J.br(m.save())
m.translate(i,h)
m.scale(f,1)
$.R()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.b=A.ab
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hNv()
h=i.b
d=h.c
h=h.a.c
i.a4(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2q(b2,o,3+g*3,i)
break
case 2:$.R()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.R()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.c=1.8
a2.d=A.bG
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.R()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.R()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a7.j(0.28).gp(0)
i.y=A.oA
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aE(d){return d.b!==this.b}}
C.ben.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=B.a([],u)
q=new B.aG(a3,A.ai,e,e,r)
p=s-0.14361566416410484
r.push(new B.aZ(a0+Math.cos(p)*130,a2+Math.sin(p)*130))
q.ab()
p=new B.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(p)
o=q.f
if(o!=null)p.ak(o)
q.ab()
p=s+0.14361566416410484
o=new B.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(o)
n=q.f
if(n!=null)o.ak(n)
q.ab()
p=new B.aq(a0+Math.cos(p)*130,a2+Math.sin(p)*130)
r.push(p)
o=q.f
if(o!=null)p.ak(o)
q.ab()
p=new B.bx()
r.push(p)
r=q.f
if(r!=null)p.ak(r)
q.ab()
a5.af(q,a4)}a0=w*2
a2=A.h.F(a0,1)
a3=a5.c
J.br(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.sam(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).az(0,D.fhl))
a5.aD(new B.a3(-18,a2,18,a2+a1*3),v)
a3.restore()
for(a2=a1+40,t=0;t<34;++t){m=A.h.F(Math.abs(Math.sin(t*91.7)*43758.5453),1)
l=A.h.F(w*(1+A.o.F(t,2))+t/34,1)
v=l*6.283185307179586
u=Math.sin(v*2+t)
J.br(a3.save())
a3.translate(m*d+u*14,l*a2-20)
a3.rotate(v*(2+A.o.F(t,3))*180/3.141592653589793,0,0)
v=A.h.D(Math.abs(Math.cos(v*3+t)),0.3,1)
a3.scale(1,v)
if(l<0.08)v=l/0.08
else v=l>0.9?(1-l)/0.1:1
k=A.h.D(v,0,1)
v=B.bw(D.fhT,A.EY)
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.r=D.aEs[A.o.F(t,6)].j(k*0.9).gp(0)
a5.ar(v,u)
a3.restore()}j=[new B.r(d*0.18,a1*0.2),new B.r(d*0.82,a1*0.26),new B.r(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=A.h.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=A.h.D(d,0,1)
for(a1=g*0.62,a2=g+5,t=0;t<14;++t){s=t*6.283185307179586/14
a3=Math.cos(s)
w=Math.sin(s)
f=D.aEs[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.R()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.c=2
r.d=A.bG
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.R()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aE(d){return d.b!==this.b}}
C.bem.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
w=B.L()
w.b=A.ab
w.c=14
v=f.d
w.r=(v?f.r:A.b_).j(0.22).gp(0)
a4.O(a1,a2-7,w)
w=B.L()
w.b=A.ab
w.c=1.7
w.r=(v?f.f:A.c).j(0.28).gp(0)
a4.O(a1,a2-1,w)
w=B.L()
w.b=A.ab
w.c=1.6
w.r=A.c.j(0.16).gp(0)
a4.O(a1,a3+8,w)
u=B.L()
u.c=1.5
u.d=A.bG
u.r=(v?f.f:A.c).j(0.22).gp(0)
for(w=a2-3,t=a2+2,s=0;s<12;++s){r=s/12*3.141592653589793*2-1.5707963267948966
a4.ah(new B.r(d+Math.cos(r)*w,a0+Math.sin(r)*w),new B.r(d+Math.cos(r)*t,a0+Math.sin(r)*t),u)}w=a4.c
J.br(w.save())
t=$.R().r
q=x.g
p=new B.aG(t,A.ai,e,e,B.a([],q))
p.E(new B.jt(B.bW(a1,a3)))
a4.mz(0,p)
p=B.bW(a1,a3)
o=B.L()
o.sam(D.eGk.az(0,B.bW(a1,a3)))
a4.aD(p,o)
n=A.h.D(f.b,0,1)
if(n>0.004){a0+=a3
m=a0-a3*2*n
l=v?5.2:1.8
q=B.a([],q)
k=new B.aG(t,A.ai,e,e,q)
j=d-a3
a0+=4
k.E(new B.aZ(j,a0))
for(t=d+a3,p=f.c*3.141592653589793,o=p*2,p*=2.2,i=l*0.42;j<=t;j+=3){h=(j-d)/a3*3.141592653589793
h=new B.aq(j,m+Math.sin(h*2+o)*l+Math.sin(h*3.1-p)*i)
q.push(h)
g=k.f
if(g!=null)h.ak(g)
k.ab()}k.E(new B.aq(t,a0))
k.E(new B.bx())
$.R()
d=B.L()
a0=x.O
t=f.e
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f0.j(0.34),A.cX.j(0.62)],a0)
d.sam(new B.a7(A.aY,A.b2,A.x,a0,e,e).az(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.ab
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDX.prototype={
T(){var w=$.aw()
return new C.aDY(new B.at(A.ax,w),new B.at(A.ax,w))},
bkW(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDY.prototype={
t(){var w=this.d,v=$.aw()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a2()},
mt(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cEO(d){this.a.bkW(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.m(new C.duE())},
cDo(){var w,v,u=this,t=B.cV(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hF(w,new C.arV(v.d,t,u.gcEN(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cLu(){var w,v,u,t,s=this,r=s.d,q=B.cV(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hIN(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkW(new B.d8("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dG,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.ch)
w.bP(0,A.ch)
s.m(new C.duF())},
cI7(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cw||!this.aZv(r)||B.hlH(r))continue
q=r.d
p=q===A.f4||q===A.ks||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brX(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cI7(),p=s.a.r,o=new B.Y(p,new C.duG(),B.T(p).k("Y<1>")).gK(0)
p=B.aD(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f0.j(0.38),A.r,1)
w=B.bUC(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.A,B.X(O.arC,D.f0,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.az,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bHm(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asS(A.x5,"Deposit",0),s.asS(A.vc,"Withdraw",1),s.asS(A.h4,"History",2)],t),A.l,r,A.r4,A.i,0,r,r)
return B.eb(B.bm(!1,B.cc(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oB(s.f===2?s.c2X():s.c8R(),A.ig,B.pV(),A.b0,A.b0,B.LP())],t),A.al,r,A.e,A.i,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.C2,!0)},
bHm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cj(g,"@")
v=A.a.aB(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aY(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCl(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCl(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCl(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bO(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b3(h,h,h,new C.bdO(h),A.aA),A.f,h,h,new B.n(h,h,h,q,h,D.cbY,A.n),h,28,h,h,h,h,h,38),A.b4,D.hc8],p),A.l,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asE(new C.duq(i),D.fJW,i.a.d.a)
m=B.a([B.E(i.aRT(A.qR,"In",d),1),B.E(i.aRT(A.ti,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.je.j(0.6),A.r,1)
m.push(B.o(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fF8,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.n),h,h,h,h,A.oz,h,h,h))}return new B.fG(1.62,B.bv(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFv,u,t,s,r,new B.D(R.td,B.x(B.a([q,A.b4,o,A.bF,new B.du(A.dI,A.a5,A.f,n,h),A.b4,B.A(m,A.l,h,A.e,A.i,0,h,h),A.am,B.d(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.aq),h)},
aCl(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRT(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.dd(1,A.cl,new B.du(A.dI,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o4,w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w)},
asS(d,e,f){var w=null,v=this.f===f,u=v?D.cdm:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f0.j(0.25),A.r,1),s=v?B.a([new B.ac(0,A.G,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.X(d,v?D.agO:D.f0,w,w,w,26),w,w,A.ck,new B.n(w,w,t,w,s,u,A.a6),A.Hb,w,62,w,w,w,w,w,62)
return B.ay(A.c_,new B.a5(92,w,B.x(B.a([u,A.aVs,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dup(this,f),w,w,w,w,w,w,!1,A.a4)},
c8R(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cV(a1.a.a)
if(a2==null)a2=0
w=a0?D.f0:A.cq
v=a2>0
u=new C.duB(e,w)
t=new C.duA()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.uI,A.uI],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ac(0,A.G,A.w.j(0.35),A.eS,22)],n)
l=w.j(0.15)
l=B.o(d,B.X(a0?A.x5:A.vc,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fG,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.o(d,B.A(B.a([B.X(A.hD,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uW(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ih,l,d),A.df,B.aZh(new B.cN(D.b8p,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eO,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.eb,d,d,d,1,d,d,!1,"\u2022",d,new C.duz(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fMQ,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b0,new B.n(d,d,d,B.m(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.chj:D.cw7
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.i,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.X(A.hD,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bA(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.m(16),new B.ax(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.m(16),new B.ax(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,A.nf,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.eV),B.iR(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f0)],h),A.l,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.n),d,d,d,d,A.hS,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.Tv:A.a5o
n=B.a([new B.ac(0,A.G,(a0?A.b3:A.dX).j(0.45),A.dn,18)],n)
k=a0?e.gcDn():e.gcLt()
j=B.X(a0?A.a3n:A.lX,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bO(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lO(j,B.d(i,d,d,d,d,d,d,A.m1,d,d,d),k,B.fu(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aY,A.b2,A.x,p,A.xj,d),A.n),d,d,new B.bl("form"+s,x.W),d,A.wJ,d,d,d)},
c2X(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.dut(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.duu())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fP1
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iF:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.ip4(a2,B.M8(a0.a.e,new C.duv(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bMu,B.aM(!1,v,!0,B.o(a1,D.fiQ,A.f,a1,a1,new B.n(a1,a1,B.K(D.f0.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lR,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.duw(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.i,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bE_,B.x(B.a([B.X(A.HJ,A.c.j(0.25),a1,a1,a1,40),A.T,D.h8E],q),A.l,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cT(a4,0,B.dA(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gK(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f4||k===A.ks||k===A.eF
if(l===A.cw)i=j?A.bY:D.f0
else i=l===A.dG?A.je:A.fi
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.X(j?A.vc:A.x5,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bF(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXV(n),a1,a1,a1,a1,a1,a1,A.j4,a1,a1,a1)
e=C.hzr(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kK)f.push(new B.D(A.amI,new B.D6(A.bI,5,4,A.br,B.a([a0.aQN("Before",m.b),a0.aQN("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hHk(n)
v.push(B.o(a1,new B.c7(A.aM,A.e,A.i,A.l,a1,A.p,a1,0,B.a([k,A.bc,new B.bz(1,A.bd,m,a1),A.ae,B.x(B.a([f,A.aw,B.o(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.zb,a1,a1,a1)],q),A.dO,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bF(A.a1,A.a1,new B.ax(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qK,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hu(D.c2r,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cd,a1,a1,a1),new C.dux(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.n(A.uI,a1,a3,a2,a1,a1,A.n),a1,a1,D.hBy,a1,D.bGo,a1,a1,a1)},
aQN(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zp(B.cR(B.a([s,B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fK6,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.n3,w,w,w)},
aZv(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tl(d))return!1
if(v===A.fS||v===A.f4)return!0
if(v===A.p9||v===A.ks)return!0
if(v===A.kL)return!0
if(v===A.h8)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXV(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in"))return"Clock-in earnings"
if(A.a.q(w,"crown daily reward"))return A.a.q(w,"queen")?"Queen crown reward":"King crown reward"
if(A.a.q(w,"investment"))return"Investment"
switch(d.d.a){case 0:return"Deposit"
case 1:return"Withdrawal"
case 2:return"Added"
case 3:return"Spent"
case 6:return"Claim"
case 4:return"Earnings"
case 5:return"Contribution"}}}
C.bdO.prototype={
a4(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bk3.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.ah(new B.r(u,0),new B.r(u,t),w)
u=v*0.65
d.ah(new B.r(u,0),new B.r(u,t),w)
t*=0.5
d.ah(new B.r(0,t),new B.r(v,t),w)},
aE(d){return!1}}
C.byZ.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a3(0,p,s,p+80)
n=[A.ba,A.h9,A.bv][q]
$.R()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.sam(new B.a7(A.aY,A.b2,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).az(0,o))
a1.aD(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.R()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.po.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.h.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.R()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.h.F(v+m*0.25,1)
t=A.po.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jM(new B.eu("z",a0,a0,A.cN,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.c0,new B.ji(1),a0,a0,a0,a0,A.c1,a0,A.cy)
d.ep()
d.a4(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aNB.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.bAY.prototype={}
C.b2e.prototype={}
C.a10.prototype={
T(){return new C.aGl(new B.at(A.ax,$.aw()))},
d_b(d,e){return this.d.$2(d,e)}}
C.aGl.prototype={
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
b2v(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.elH(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.d_b(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aD(a0,A.eU,e).w
e=B.aD(a0,A.dD,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c1N,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ac(0,A.G,A.fd.j(0.5),A.J,18)],v),D.auk,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fWI,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mD,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aH(f,f,f,f,D.c2G,f,f,f,new C.elK(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.i,0,f,f)
s=g.b9A(A.eY,"You",A.cq)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.kX,B.o(f,D.h_T,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.ho,f,f,f),f),g.b9A(A.x1,"Your friend",A.c4)],u),A.l,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b7a),f,f,f,f,f,f,f,f,A.Fj,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c5j,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mC,f,f,f,1,f,f,!1,"\u2022",f,new C.elL(g),f,new C.elM(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cr6[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.auj:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dm,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.bd,B.ay(f,B.cU(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.i,0,A.p),f,f,A.b0,new B.n(p,f,new B.bF(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fh,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.elN(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.i,0,f,f)
r=B.A(B.a([B.X(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.i,0,f,f)
p=B.m(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h3W,A.am,o,A.aO,D.h8s,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bO(new B.n(f,f,f,p,v,D.ccc,A.n),A.bk,B.hu(D.asw,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fG,f,f,f),g.gceQ(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b9c,f,f,f,f,D.bHJ,f,f,f),f)},
b9A(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.X(d,f,w,w,w,24),A.aw,B.d(e,w,w,w,w,w,w,A.Fk,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.fh,w,w,w),1)}}
C.pA.prototype={}
C.btN.prototype={
a4(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(w===0)r=A.bf
else r=(w&1)===0?A.bD:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iM.gp(0)
r.b=A.ab
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fz(s,A.cy,s,s,s,B.cR(s,s,s,s,s,s,s,s,s,A.aY2,B.w(r)),A.a7,A.c0,s,A.dJ,A.c1)
u.ep()
r=u.b
t=r.c
r=r.a.c
u.a4(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aE(d){return d.b!=this.b}}
C.Fz.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.ate.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsW(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hd5("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3N()
w=s.gks()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.c1(9,"",!1,x.N)
s.ax=!0
if(s.gks())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=B.a([1+e.aw(10),1+e.aw(10)],w)
s.ch=B.a([1+e.aw(10),1+e.aw(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=B.a([e.aw(6),e.aw(6),e.aw(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ai()*3.141592653589793*2
s.c=s.gks()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e4(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c1(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gks())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0A(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKi.h(0,d)
s.c=w==null?"Play to earn":w}},
bev(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.clx(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cIK(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.cly(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dR(e.h(0,q))
else{o=B.cb(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJJ(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clz(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dR(e.h(0,p))
else{o=B.cb(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bL4(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break}},
cTO(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEv())
o.n(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.n(0,u,q)
o.n(0,s,w.w)
o.n(0,r,w.r)
return o
case"connect_four_pro":q=w.fr
p=B.T(q).k("N<1,ai<H>>")
q=B.B(new B.N(q,new C.clB(),p),p.k("ak.E"))
o.n(0,"c4",q)
o.n(0,"c4Turn",w.fx)
o.n(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.n(0,u,q)
o.n(0,s,w.w)
o.n(0,r,w.r)
return o
case"checkers_deluxe":q=w.y
p=B.T(q).k("N<1,ai<H>>")
q=B.B(new B.N(q,new C.clC(),p),p.k("ak.E"))
o.n(0,"checkers",q)
o.n(0,"checkersTurn",w.z)
o.n(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.n(0,u,q)
o.n(0,s,w.w)
o.n(0,r,w.r)
return o
default:q=B.dI(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aEv(){var w,v,u,t=this
if(t.gks()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=A.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
ato(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
v.r=J.z(d.h(0,"isDraw"),!0)
t=d.h(0,"winnerLabel")
t=J.k(t==null?"":t)
v.w=t
if(v.r)v.f=null
else if(s.length!==0){w=s===u
v.f=w
if(t.length===0){t=v.d
if(w){t=t==null?null:t.b
t=(t==null?"You":t)+" wins!"}else{t=t==null?null:t.c
t=(t==null?"Opponent":t)+" wins!"}v.w=t}}v.a=v.f===!0?1:0},
cIK(d,e){var w,v,u,t,s,r="playerXEmail"
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=A.a.i(e.toLowerCase())
w=d.h(0,"turnEmail")
u=A.a.i(J.k(w==null?"":w).toLowerCase())
w=d.h(0,"playerXName")
t=J.k(w==null?"X":w)
w=d.h(0,"playerOName")
s=J.k(w==null?"O":w)
if(u===v){w=d.h(0,r)
return"Your turn ("+(u===A.a.i(J.k(w==null?"":w).toLowerCase())?"X":"O")+")"}w=d.h(0,r)
return(u===A.a.i(J.k(w==null?"":w).toLowerCase())?t:s)+"'s turn"},
bJJ(d,e){var w,v,u,t,s
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=A.a.i(e.toLowerCase())
w=d.h(0,"player1Email")
u=A.a.i(J.k(w==null?"":w).toLowerCase())
w=d.h(0,"player1Name")
t=J.k(w==null?"Player 1":w)
w=d.h(0,"player2Name")
s=J.k(w==null?"Player 2":w)
if(this.fx===1)return v===u?"Your turn \u2014 drop a red disc":t+"'s turn (red)"
return v===u?s+"'s turn (gold)":"Your turn \u2014 drop a gold disc"},
bL4(d,e){var w,v,u,t,s,r,q
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=A.a.i(e.toLowerCase())
w=d.h(0,"player1Email")
u=A.a.i(J.k(w==null?"":w).toLowerCase())
w=d.h(0,"player1Name")
t=J.k(w==null?"Player 1":w)
w=d.h(0,"player2Name")
s=J.k(w==null?"Player 2":w)
w=this.z
r=w===1
if(!(r&&v===u))q=w===2&&v!==u
else q=!0
if(q)return"Your turn \u2014 move a disc"
return r?t+"'s turn":s+"'s turn"},
V_(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gks())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEv():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3N(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.clu(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0A(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.ch)},
d2Y(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gks())w=1
else{v=r.d
v=v==null?null:v.d
w=r.V_(q,v==null?"":v)?r.z:-1}if(!r.gks()){v=r.d
v=v==null?null:v.d
v=!r.V_(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gks()?r.z:w
if(!r.gks()&&u!==r.z)return!1
t=J.t(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gks()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aJ(r.y[d],e,r.z)
J.aJ(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aaQ(2)){r.acq(1)
return!0}if(r.aaQ(1)){r.acq(2)
return!0}if(r.gks()&&r.z===2){r.bFC(f)
if(r.aaQ(2)){r.acq(1)
return!0}if(r.aaQ(1)){r.acq(2)
return!0}}}return!1},
acq(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gks()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bFC(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.t(m.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.t(m.y[p],o)===0&&A.o.F(p+o,2)===1)l.push(B.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.aw(w)]
J.aJ(m.y[n[2]],n[3],2)
J.aJ(m.y[n[0]],n[1],0)
m.z=1},
aaQ(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d3_(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r7
if(!s.gks()){w=s.d
w=w!=null&&!s.V_("tic_tac_go",w.d)}else w=!1
if(w)return D.r7
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.al6(v))return s.aW9(v,!0)
if(!A.d.q(s.at,""))return s.aWa()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEv())
s.c=s.b03()
return D.r7}if(s.gks()){t=s.cq5(e)
if(t>=0){s.at[t]="O"
if(s.al6("O"))return s.aW9("O",!1)
if(!A.d.q(s.at,""))return s.aWa()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b03()
return D.r7},
b03(){var w=this.d
if(w==null)return"Take your turn"
return this.V_("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aW9(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gks()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.r8:D.JJ},
aWa(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Us},
cq5(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.al6("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.al6("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dgF[u]
if(v[w].length===0)return w}return-1},
al6(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.doX[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4X(d){return A.d.cC(d,0,new C.clA())},
cNi(d){this.ay.push(1+d.aw(10))
if(this.a4X(this.ay)>21)return!0
return!1},
cNj(d){var w,v,u,t=this
while(t.a4X(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4X(t.ay)
v=t.a4X(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cT9(d,e){var w,v,u,t=this
if(t.e)return D.r7
if(!t.gks()){w=t.d
w=w!=null&&!t.V_("connect_four_pro",w.d)}else w=!1
if(w)return D.r7
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r7
if(!t.aic(d,w))return D.r7
if(t.aaE(t.fx))return t.aW7(t.fx,!0)
if(t.aRC())return t.aW8()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cps(e)
if(u>=0){t.aic(u,2)
if(t.aaE(2))return t.aW7(2,!1)
if(t.aRC())return t.aW8()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bJI()
return D.r7},
bJI(){var w=this.d
if(w==null)return"Drop a disc"
return this.V_("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aic(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRC(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aW7(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gks()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.r8:D.JJ},
aW8(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Us},
cps(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aic(w,2)
v=r.aaE(2)
r.bcd(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aic(w,1)
u=r.aaE(1)
r.bcd(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bcd(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaE(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJK(w,v,d))return!0}return!1},
bJK(d,e,f){var w,v,u,t,s=new C.clt(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bft(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0A(d)}return w.a>=w.b}}
C.au9.prototype={
T(){return new C.aH9(null,null)},
cZ4(d){return this.e.$1(d)}}
C.aH9.prototype={
Z(){var w,v=this
v.a3()
w=B.bp(null,D.bD6,null,1,null,v)
w.eT(0,!0)
v.d=w
v.a.d.aV(0,v.gb30())
v.aAn()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.ch)
this.aAn()}},
aAn(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aj2(t,u)
C.aj2(t,u)
w.a.cZ4(s)
w.a.toString
w.m(new C.eTA())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb30())
w=v.d
w===$&&B.c()
w.t()
v.bBa()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aj2(j,i),g=C.aj2(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wY(new B.d3(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ac(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1A,l,l,l,3),l),A.V0,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.eu(v,l,l,A.cN,l,l,l,l,l,l,D.fGV))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cE}else if(s===t){r=A.bg
q=A.O}else{r=A.ay
q=A.H}d.push(new B.eu(t,l,l,A.cN,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wY(new B.d3(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.V0,l,l))}p=f===0?0:A.h.S(h/f*100)
k=A.w.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b3_("Correct",""+h,A.bf),A.ae,m.b3_("Wrong / missed",""+(f-g),A.ay),A.b4,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fyw,l,l,l)],o),A.l,l,A.e,A.i,0,l,l),A.am,D.h11],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.cc(new B.abo(l,B.cR(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b73),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,I.acw,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.i,0,A.p)},
b3_(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,w,w,w,A.ho,w,w,w)}}
C.aP5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","H(iq,iq)","~([y5?])","Q(re)","re()","H(rR,rR)","Q(rR)","H(rS,rS)","QG(Z)","Q(iq)","cK(afh)","a0I(Z)","a_P(Z)","ag2(Z)","a87(Z)","OB(Z)","aeU(Z,hx<ai<jq>>)","aeT(Z,H)","v(re)","rR(ab<@,@>)","~(Fz,ate)","Ot(Z)","ab<q,@>(rR)","rS(ab<@,@>)","ab<q,@>(kI)","ab<q,@>(rS)","Q(rS)","ab<q,@>(lT)","lT(@)","ab<q,@>(iC)","iC(@)","iq(@)","aA<~>(kI)","ab<q,@>(iq)","~(H,H)","iq(iq)","WU(Z)","aA<Q>(ai<iq>)","a0H(Z)","~(iq)","a1s(Z)","WV(Z)","q(iq)","Q(lT)","xK(bC<H,lT>)","ado(Z,H)","H(iC,iC)","adf(lT)","v(rX)","bz(JJ)","a0d(Z)","~(d8{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(d8)","a10(Z)","~(Fz)","q(q)","a1t(Z)"])
C.cCn.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCo(r,w,s.b,v,s.d)
t=s.e
r.b=B.df(t,u)
v.r=new C.cCk(r)
v.e=new C.cCl(r,w)
v.f=new C.cCm(r,w,t,u)},
$S:0}
C.cCo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.aa(r)
u=B.cs(r)
s=v
q=u
p=B.H9(s,q)
if(p==null)p=new B.jU(s,q==null?B.HX(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:42}
C.cCk.prototype={
$0(){this.a.b.a1(0)
return $.HL()},
$S:2086}
C.cCl.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaI.$0()
this.a.b.a1(0)},
$S:0}
C.cCm.prototype={
$0(){var w,v=this,u=v.b,t=B.dx(0,0,u.gbhD(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cCj(w,u,v.d))},
$S:0}
C.cCj.prototype={
$0(){var w=this.c
this.a.b=B.df(this.b,w)
w.$1(null)},
$S:0}
C.ffx.prototype={
$1(d){var w=this.a
w.m(new C.ffw(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.ffw.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alS,this.b,null,null,v.$ti.k("hx<1>"))},
$S:0}
C.ffz.prototype={
$2(d,e){var w=this.a
w.m(new C.ffu(w,d,e))},
$S:59}
C.ffu.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alS,null,this.b,this.c,v.$ti.k("hx<1>"))},
$S:0}
C.ffy.prototype={
$0(){var w=this.a
w.m(new C.ffv(w))},
$S:0}
C.ffv.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.yN,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fT_.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cw},
$S:15}
C.fSS.prototype={
$1(d){return d},
$S:13}
C.fz8.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.A,new B.D(new B.P(u,0,u,0),B.d("NGMY",w,1,A.eT,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afL,w,v,w,w,w,w,w,v)},
$S:156}
C.fz5.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.fz6.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kF(w,A.A,v.d,new C.fz4(v.e),A.h2,v.c,!0,v.b,null,null,v.a)},
$S:2087}
C.fz4.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.fz7.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.dml.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dmw.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dmO.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmP.prototype={
$1(d){return this.a.Ky()},
$S:12}
C.dmE.prototype={
$0(){var w=J.b9(this.b,new C.dmD(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmD.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmF.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmC(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmC.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmH.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmG(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmG.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmz.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgL(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arO(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dmx(t))
case 3:if(t.c!=null)t.m(new C.dmy(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:47}
C.dmx.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmy.prototype={
$0(){return this.a.d++},
$S:0}
C.dmA.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmB.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmr.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.iwu(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bu()
w=2
return B.b(C.aiS(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ky(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dms.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.il6(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bu()
w=2
return B.b(C.aiS(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ky(),$async$$0)
case 3:t.Jh(A.d.dM(t.y,new C.dmp(s),new C.dmq(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmp.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmq.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmt.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmu.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmv.prototype={
$0(){return this.a.Jh(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dmo.prototype={
$0(){return this.a.c7h(this.b)},
$S:0}
C.dmn.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.iwY(u,w.b,new C.dmm(v,w))},
$S:0}
C.dmm.prototype={
$2(d,e){return this.a.ajA(this.b,d,e)},
$S:784}
C.dmN.prototype={
$2(d,e){if(d)return
this.a.aVM()},
$S:134}
C.dmL.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b2d(w.a.c.a),new C.dmK(w,this.b,this.c),null,null,x.gH)},
$S:2089}
C.dmK.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aE(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k8,B.bKa(A.d3,B.X(A.h4,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dmJ(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.aj)},
$S:2090}
C.dmJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fPg(s.c.a,s.e).eF(new C.dmI())
w=2
return B.b(C.bHr(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmI.prototype={
$1(d){},
$S:32}
C.dmM.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_U.prototype={
$0(){var w=this.a
return B.M8(w.a.c.a,new C.e_T(w))},
$S:83}
C.e_T.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_V.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bh=t.aj()
v.bu()
w.m(new C.e_S())},
$S:0}
C.e_S.prototype={
$0(){},
$S:0}
C.e_W.prototype={
$2(d,e){var w,v=this.a
if(!C.cgL(v.a.c)){if($.hd0.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hd1(this.b,v.x,w)
return!1}C.arO(v.a.c.a)}if(B.M8(v.a.c.a,new C.e_R(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aK1()
w=v.a
w.toString
w.hK(new B.d8(A.o.v(1000*Date.now()),v.a.c.a,d,A.ks,A.fx,e,null,null,A.cw,new B.V(Date.now(),0,!1)))
v.a.bu()
return!0},
$S:2091}
C.e_R.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_X.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d8(u,s.c.a,d,A.h8,A.fx,e,v,v,A.cw,new B.V(Date.now(),0,!1)))
t.a.bu()
w=f>0?"+$"+A.h.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vd(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2092}
C.dmf.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dmi.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dmj.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dmk.prototype={
$1(d){var w=null,v=this.a,u=B.fu(w,w,v.e===d?A.bf:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f6,B.iz(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dmh(v,d),u),w),1)},
$S:253}
C.dmh.prototype={
$0(){var w=this.a
return w.m(new C.dmg(w,this.b))},
$S:0}
C.dmg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.do7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.doa.prototype={
$1(d){this.a.cqr()
return null},
$S:12}
C.dob.prototype={
$1(d){return this.a.cGR()},
$S:12}
C.doc.prototype={
$1(d){this.a.a42()
return null},
$S:12}
C.dod.prototype={
$1(d){this.a.akG()
return null},
$S:12}
C.doe.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.do8(v))
w=v.as
if(w!=null)w.a1(0)
v.FQ()
return}v.m(new C.do9(v))},
$S:12}
C.do8.prototype={
$0(){return this.a.Q=0},
$S:0}
C.do9.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dnn.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dno.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnR.prototype={
$1(d){return this.a.go.q(0,d)},
$S:31}
C.dnS.prototype={
$0(){},
$S:0}
C.dnD.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnE.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dnF.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnG.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dnH.prototype={
$0(){},
$S:0}
C.dmQ.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dnm.prototype={
$0(){var w=this.a
w.at=this.b
w.b94()},
$S:0}
C.dnT.prototype={
$0(){},
$S:0}
C.do1.prototype={
$0(){},
$S:0}
C.dnQ.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dnP(w))},
$S:0}
C.dnP.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dnk.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dnl.prototype={
$0(){},
$S:0}
C.dnX.prototype={
$1(d){return d==null},
$S:233}
C.dnY.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dnZ.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dmR.prototype={
$1(d){return d==null},
$S:233}
C.dmS.prototype={
$0(){return this.a.bh++},
$S:0}
C.dmT.prototype={
$0(){},
$S:0}
C.dnw.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dnx.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nc.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dny.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dnv(w))},
$S:11}
C.dnv.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dnI.prototype={
$0(){return this.a.y1++},
$S:0}
C.dnJ.prototype={
$0(){},
$S:0}
C.dnK.prototype={
$0(){return this.a.y2++},
$S:0}
C.dnL.prototype={
$0(){},
$S:0}
C.dnM.prototype={
$0(){return this.a.bd++},
$S:0}
C.dnN.prototype={
$0(){},
$S:0}
C.dnW.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnz.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnA.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dnB.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnC.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.do_.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.do0.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dmU.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmV.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dmW.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmX.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dnU.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dnV.prototype={
$0(){var w,v=this.a;++v.x2
v.aRo()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dnu.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dnO.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dns.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnt.prototype={
$2(d,e){return d+e.length},
$S:200}
C.do2.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.do3.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.do4.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.do6.prototype={
$1(d){var w=this.a,v=w.PA(),u=v<=0?0:A.h.D(w.AS()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ot(w.f?s:s*u,s,t,null)},
$S:z+22}
C.do5.prototype={
$1(d){return d.bW(0.85)},
$S:173}
C.dnr.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nc.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j4,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hN(v,6,6,1,r),new C.dnq(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
$S:159}
C.dnq.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nc.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nc.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.aur:D.c9T,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.aur:D.auk
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.X(D.cET[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.n(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dnp(r,e),s,s,s,s,s,s,s)},
$S:189}
C.dnp.prototype={
$0(){return this.a.cpM(this.b)},
$S:0}
C.dn9.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bf.l()>>>16&255,A.bf.l()>>>8&255,A.bf.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.A,B.d(t?"":u,w,w,w,w,w,w,D.aWZ,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dn8(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj)},
$S:786}
C.dn8.prototype={
$0(){return this.a.cG5(this.b)},
$S:0}
C.dna.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aE(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.A,B.d(u,w,w,w,w,w,w,D.aWZ,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dn7(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
$S:786}
C.dn7.prototype={
$0(){return this.a.cG4(this.b)},
$S:0}
C.dnb.prototype={
$1(d){return this.a.m(new C.dn6())},
$S:25}
C.dn6.prototype={
$0(){},
$S:0}
C.dnc.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aj2(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nc.q(0,u.a.e)){u.a2i()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dn4())
t=u.dx
if(t>=v)u.uB("All 5 sentences perfect \u2014 full payout!")
else u.Ff(t/v,t,v)}}else{if(u.ghR()&&D.nc.q(0,u.a.e))u.a2i()
u.m(new C.dn5(u))}},
$S:0}
C.dn4.prototype={
$2(d,e){return d+e.length},
$S:200}
C.dn5.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.ch)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnd.prototype={
$1(d){var w=null,v=B.fu(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.cp,w,w,w,w,w,w,w)
return new B.D(A.cx,new B.a5(1/0,w,B.iz(B.d(d,w,w,w,w,w,w,O.aWS,w,w,w),new C.dn3(this.a,d),v),w),w)},
$S:150}
C.dn3.prototype={
$0(){return this.a.b8r(this.b)},
$S:0}
C.dne.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pZ,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hN(3,4,4,1,u),new C.dn2(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
$S:159}
C.dn2.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6d(e),p=r===0
if(p)w=A.L
else w=q?A.bf:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.dmZ(s,e)
u=B.m(10)
p=p?"":""+r
return B.aE(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.aj)},
$S:84}
C.dmZ.prototype={
$0(){return this.a.cG3(this.b)},
$S:0}
C.dnf.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dn1(q,d)
p=B.m(16)
if(o)w=D.a6A[d]
else{w=D.a6A[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.a0(A.h.S(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6A[d]
t=B.a([new B.ac(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b0,new B.n(w,r,u,v,t,r,A.n),K.CA,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2095}
C.dn1.prototype={
$0(){return this.a.cG6(this.b)},
$S:0}
C.dng.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pZ,t,t,t)
w=B.d("Move "+r.aB2()+"/"+C.hjJ(),t,t,t,t,t,t,A.Fl,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hN(3,6,6,1,s),new C.dn0(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:159}
C.dn0.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bf:D.bms,q=u?A.ew:D.bxa
return B.aE(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dmY(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:84}
C.dmY.prototype={
$0(){return this.a.cG0(this.b)},
$S:0}
C.dnh.prototype={
$0(){return this.a.b8r(this.b[this.c])},
$S:0}
C.dni.prototype={
$0(){return this.a.m(new C.dn_())},
$S:0}
C.dn_.prototype={
$0(){},
$S:0}
C.dnj.prototype={
$2(d,e){this.a.a11(d,e)
return null},
$S:z+21}
C.drH.prototype={
$1(d){return this.a.cqg(this.b,d)},
$S:2096}
C.drG.prototype={
$0(){var w=this
return w.a.a.cZD(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOp.prototype={
$1(d){var w=this.a
w.a2y()
w.uK()},
$S:7}
C.cNK.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNA.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNB.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNU.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNR.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNS.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNT.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNM.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cNL(w))},
$S:0}
C.cNL.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNC.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNP.prototype={
$1(d){var w=this.a
return new C.WU(w.fx,new C.cNO(w),w.a.f.r,null)},
$S:z+37}
C.cNO.prototype={
$1(d){return this.boa(d)},
boa(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chO(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cNN(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNN.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOc.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cO6.prototype={
$1(d){this.a.uK()
return null},
$S:12}
C.cO9.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.aq(v.gaYJ().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uK()
return}v.m(new C.cO8())},
$S:12}
C.cO8.prototype={
$0(){},
$S:0}
C.cO5.prototype={
$1(d){this.a.FY()
return null},
$S:12}
C.cO7.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cO4.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:43}
C.cNH.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:43}
C.cNI.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3e(!0)},
$S:11}
C.cNF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNG.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.V3(this.b)},
$S:7}
C.cNX.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e6,A.kW)},
$S:7}
C.cNQ.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNY.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNZ.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9W()
w.r.bP(0,A.ch)
w.at=!0},
$S:0}
C.cO_.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cO0.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cO1.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b9(w.b,v.gcp9(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.b9W()},
$S:0}
C.cO2.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cO3.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNV.prototype={
$1(d){return this.bob(d)},
bob(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a8(s)
q=r.h(s,"start")
p=B.bj(q==null?"":q)
q=r.h(s,"end")
o=B.bj(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bU()
w=5
return B.b(C.asa(q,new C.rR("cal_"+1000*n,m,l,(o==null?p.bR(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atv()
case 4:k.c.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:437}
C.cOb.prototype={
$1(d){return this.boc(d)},
boc(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:437}
C.cNW.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cOo.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.ad2(v-1)},
$S:0}
C.cOh.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cOk.prototype={
$1(d){var w=this.a
w.m(new C.cOe(w,d))
if(d===0)w.a3e(!0)},
$S:25}
C.cOe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOi.prototype={
$2$size(d,e){return C.hhQ(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2097}
C.cOj.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hvw(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.at2(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOf(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.as8(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uK(),$async$$0)
case 15:p.m(new C.cOg(p))
p.ad2(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.uK(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.cOf.prototype={
$2(d,e){return this.bod(d,e)},
bod(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3H(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:133}
C.cOg.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOm.prototype={
$2(d,e){return A.ae},
$S:38}
C.cOl.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6H:D.a5Y)[e],w,w,w,w,w,w,A.q1,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cOd(v,e)
return B.mY(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:534}
C.cOd.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6H:D.a5Y
w.r.sb4(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOn.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cND.prototype={
$0(){return this.a.ad2(0)},
$S:0}
C.cOa.prototype={
$0(){return this.a.ad2(this.b)},
$S:0}
C.cNE.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3r,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a13,B.x(B.a([u,A.af,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bKI(t[e],w.c)
return u.aS2(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.c4R.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.h.M(d)
return new B.V(B.h3(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bj(J.k(d))
return v==null?null:v.bU()},
$S:315}
C.c4Q.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:559}
C.c4T.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bj(J.k(d))
w=w==null?null:w.bU()}return w},
$S:315}
C.c4S.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.a1(d,x.N,x.z)
try{v=J.t(w,"id")
v=J.k(v==null?"":v)
u=J.t(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aI(J.t(w,"amount"))
if(t==null)t=0
s=J.t(w,"type")
s=B.a62(A.a7w,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a62(A.a5W,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a62(A.IT,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d8(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:682}
C.dId.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dIe.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dI4.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dI2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.Bx(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.hc1(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pB(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abv(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).cc(B.ed(new C.dIb(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pB(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIb.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0H(w.b,w.a,u,v,null)},
$S:z+39}
C.dI1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i0V(q)?3:4
break
case 3:w=5
return B.b(t.a.Fu(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_L(q,s.a.c),$async$$0)
case 6:r=e
case 7:switch(r.a.a){case 3:w=9
break
case 2:w=10
break
case 4:w=11
break
case 1:w=12
break
case 0:w=13
break
default:w=8
break}break
case 9:s.lg(C.c4V(s.a.c))
w=1
break
case 10:s.lg("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.lg(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return B.b(s.AI(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aTn(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dI0.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dI3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aeZ(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hsh(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c4U(s,r.a.c,null)){r.lg(C.c4V(r.a.c))
w=1
break}w=4
return B.b(r.bN1(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIa.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.aw()),u=B.O(d).ax.a===A.I,t=u?A.iK:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.aa:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.m(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e4,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bN(!1,A.dp,w,w,!0,w,w,w,new C.dI8(d),w,w),B.bJ(D.fQ5,w,new C.dI9(d,v),B.bn(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h4g,w)},
$S:18}
C.dI8.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dI9.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dI5.prototype={
$1(d){return D.hJ3},
$S:z+12}
C.dI6.prototype={
$0(){return this.a.Fv(A.a.i(this.b))},
$S:1}
C.dI7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_L(t.b,r.a.c),$async$$0)
case 3:q=e
case 4:switch(q.a.a){case 1:w=6
break
case 3:w=7
break
case 2:w=8
break
case 4:w=9
break
case 0:w=10
break
default:w=5
break}break
case 6:s=q.b
s.toString
w=11
return B.b(r.AI(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.lg(C.c4V(r.a.c))
w=1
break
case 8:r.lg("Could not read that QR code for your account.")
w=1
break
case 9:r.lg(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return B.b(r.aTn(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIf.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIj.prototype={
$1(d){this.a.S5()
return null},
$S:12}
C.dIg.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dIh.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fx(v.gaz4()))
this.b.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gaz4()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dIi.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIk.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.X(s,"NGMYSNAP1|")||A.a.X(s,"NGMYLOCALSYNC1|")||A.a.X(s,"NGMYLOCALLIVE1|")||A.a.X(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:167}
C.fDK.prototype={
$1(d){return D.hFt},
$S:z+13}
C.fEX.prototype={
$1(d){return new C.ag2(this.a,this.b,this.c,null)},
$S:z+14}
C.f8Y.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f8Z.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dh8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dh5.prototype={
$2(d,e){return e.amV(e.a.toUpperCase())},
$S:2098}
C.dh6.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dh7.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5D.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dxZ,A.a.gjP(v))},
$S:4}
C.fPa.prototype={
$1(d){return d.a===this.a},
$S:2099}
C.fPb.prototype={
$0(){return A.d.gH(A.E_)},
$S:2100}
C.dOH.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dOG(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8X("Time's up")},
$S:12}
C.dOG.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dOy.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOD.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dOA(w,d,e))},
$S:219}
C.dOA.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOE.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dOz(w))
w.cAe(!0)},
$S:0}
C.dOz.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOF.prototype={
$1(d){this.a.b8X(d)
return null},
$S:2}
C.dOB.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOC.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.cdU.prototype={
$1(d){return D.dVL},
$S:z+15}
C.cdT.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fFM.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=B.aI(u.h(d,e)),s=t==null?v:A.h.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=B.aI(u.h(d,f))
w=t==null?v:A.h.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=B.aI(u.h(d,"outcome"))
return u==null?v:A.h.M(u)},
$S:2101}
C.fFN.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.h.M(w)
return w==null?0:w},
$S:631}
C.fFO.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:200}
C.fWu.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hEb(w,v):C.hib(w,v)
if(u===3)++w.f
C.ahz(w,this.c,u)
return u},
$S:2102}
C.fWw.prototype={
$0(){return C.hEb(this.a,this.b)},
$S:97}
C.fWv.prototype={
$0(){return C.hib(this.a,this.b)},
$S:97}
C.dHQ.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dHP(w))},
$S:0}
C.dHP.prototype={
$0(){this.a.r=1+A.o.F(B.FU(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dHR.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.h.bf(u*10)
if(w!==v.w)v.m(new C.dHO(v,w))}},
$S:0}
C.dHO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgk.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.du(A.dB,A.A,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),1)},
$S:2103}
C.cgj.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.h.ad(e,2),w,w,w,w,w,w,A.mD,w,w,w)},
$S:440}
C.cgM.prototype={
$1(d){return new C.OB(this.a,this.b,!1,null,null)},
$S:z+16}
C.e7u.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.K(A.b8.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ac(2,A.G,A.b8.j(0.35),A.J,36),new B.ac(0,A.G,A.bC.j(0.175),A.J,24)],x.V)
v=B.m(f.a.e?0:30)
u=x.O
t=B.ao(g,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.A,0.5,A.x,g,0,B.a([A.ba.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.A,0.5,A.x,g,0,B.a([A.bC.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.i:A.N
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.o(g,D.bZw,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ac(0,A.G,A.b8.j(0.55),A.cz,18)],n),A.vk,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.og(A.jV,D.h1M,new C.e7q()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cE,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.bY.j(0.12)
k=B.m(18)
j=B.K(A.bY.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.X(D.bTt,A.bY.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.bY.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.i,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e7r(),B.T(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.n),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.m(18)
k=B.K(A.b8.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azT(A.hq,"Unlimited games with an active plan",A.ba),A.P,f.azT(A.kf,"Weekday check-ins grow your balance",A.b8),A.P,f.azT(A.ml,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.n),g,g,g,g,A.bH,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bO(new B.n(g,g,g,B.m(16),B.a([new B.ac(0,A.G,A.bC.j(0.45),A.cz,16)],n),A.vk,A.n),A.bk,B.da(D.c22,g,D.fY8,new C.e7s(f,a0),B.bn(A.L,g,g,g,A.c,A.KR,g,A.L,new B.ba(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bN(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e7t(f,a0),g,g))
if(f.a.e)o.push(A.b4)
h=B.o(g,B.bv(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.ccP,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,Z.a1x,g,A.d7,g,g,g)},
$S:742}
C.e7q.prototype={
$1(d){return D.cbJ.az(0,d)},
$S:77}
C.e7r.prototype={
$1(d){var w=null
return new B.D(A.eI,B.A(B.a([B.X(A.a3v,A.bY.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$S:150}
C.e7s.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e7t.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fRy.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:730}
C.fRl.prototype={
$1(d){$.aU.x1$.push(new C.fRk(this.a))},
$S:7}
C.fRk.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fC3.prototype={
$1(d){return C.hEj(this.a,this.b+1)},
$S:7}
C.fSV.prototype={
$2(d,e){var w=B.aD(d,A.bW,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:142}
C.ch_.prototype={
$1(d){return d.r===this.a},
$S:280}
C.ch0.prototype={
$1(d){var w=$.aTR(),v=w.a
w.sp(0,v+1)
return v},
$S:2104}
C.ch1.prototype={
$1(d){},
$S:32}
C.cgZ.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:280}
C.cgY.prototype={
$1(d){return d.f.cb(this.a)},
$S:280}
C.fyO.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:62}
C.h4H.prototype={
$1(d){return C.a8M(this.a)},
$S:114}
C.h4I.prototype={
$1(d){var w=$.aTR()
w.sp(0,w.a+1)},
$S:29}
C.h4J.prototype={
$1(d){},
$S:32}
C.h4K.prototype={
$1(d){return new B.kj($.aTR(),new C.h4G(this.a,this.b),null,null,x.am)},
$S:2105}
C.h4G.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arU(this.a,!1),new C.h4F(w),w,null,x.gv)},
$S:2106}
C.h4F.prototype={
$2(d,e){var w=e.b
return new C.aeU(w==null?this.a:w,null)},
$S:z+17}
C.e7x.prototype={
$1(d){return d.c},
$S:280}
C.e7y.prototype={
$1(d){return d.gbkL()},
$S:2107}
C.e7z.prototype={
$2(d,e){return d+e},
$S:88}
C.e7A.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7C.prototype={
$2(d,e){return A.P},
$S:38}
C.e7B.prototype={
$2(d,e){return new C.aeT(J.t(this.a.c,e),null)},
$S:z+18}
C.e7w.prototype={
$1(d){return d==null?"\u2026":C.bDH(d)},
$S:2108}
C.h4N.prototype={
$3(d,e,f){var w=this
return B.qp(new C.aCQ(w.a,w.b,w.c,w.d,new C.h4L(d,w.e),new C.h4M(d,w.f),null))},
$C:"$3",
$R:3,
$S:95}
C.h4L.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hHI(this.b)},
$S:0}
C.h4M.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hHI(this.b)},
$S:0}
C.dog.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&B.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ai()*260
u.c=1.5+w.ai()*3}}g=x.p
w=B.a([],g)
if(h.a.c){t=h.f
A.d.u(w,new B.N(t,new C.dof(),B.T(t).k("N<1,v>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aD(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bf,A.ep,A.ec],r):B.a([A.ay,A.er,A.eq],r)
p=B.m(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ac(6,A.G,(h.a.c?A.dL:A.dP).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.ds()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.ajX,A.uv],r)
l.push(new B.a5(i,100,new B.an(A.A,i,A.ad,A.f,B.a([B.fA(A.A,B.o(i,D.bfw,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ac(4,A.G,A.d3.j(0.6),A.J,24),new B.ac(0,A.G,A.w.j(0.3),A.dn,12)],n),new B.bT(A.A,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5y)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.WB,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fRT,A.P,B.o(i,B.d(r,i,i,i,i,i,i,D.fHF,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Oz,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fKG,A.K,i,i)],g))
l.push(A.e3)
r=B.E(B.dU(D.fPj,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cp,i,i,D.b6K,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(E.aYm,i,n,B.bn(A.c,i,i,i,h.c?A.ep:A.er,i,A.cp,i,i,i,i,i)),1)],g),A.l,i,A.e,A.i,0,i,i))
w.push(B.e1(A.A,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.az,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.ao5,i,i,s),1+t*0.02,i,i))
return new B.an(A.A,i,A.ad,A.f,w,i)},
$S:124}
C.dof.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.A,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.ciL.prototype={
$2(d,e){var w=null,v=this.a,u=C.i0k(B.M8(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2109}
C.ciK.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:62}
C.c69.prototype={
$0(){},
$S:0}
C.fxK.prototype={
$1(d){return A.o.v(d)},
$S:80}
C.e0_.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e00.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e01.prototype={
$0(){var w=this.a
return w.w=D.Th[w.d.aw(5)]},
$S:0}
C.e02.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e03.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e04.prototype={
$0(){var w=this.a
return w.m(new C.e_Z(w))},
$S:0}
C.e_Z.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e05.prototype={
$0(){var w=this.a
return w.m(new C.e_Y(w))},
$S:0}
C.e_Y.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e08.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e09.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bf:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.e07(t,d)
w=B.m(10)
v=A.h.ad(d,0)
return B.E(new B.D(A.jb,B.aE(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.aj),u),1)},
$S:2110}
C.e07.prototype={
$0(){var w=this.a
return w.m(new C.e06(w,this.b))},
$S:0}
C.e06.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.ch)},
$S:0}
C.e7I.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cL.gco().aK(this.c)},
$S:0}
C.e7J.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7E.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f0.j(0.5):A.L,A.r,1),q=B.X(e,u?D.f0:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cU(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),w,w,A.b0,new B.n(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7G(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2111}
C.e7G.prototype={
$0(){var w=this.a
return w.m(new C.e7F(w,this.b))},
$S:0}
C.e7F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7H.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JN(this.b,v)},
$S:0}
C.e7D.prototype={
$0(){var w=this.a
return w.JN(w.gauo(),"Code")},
$S:0}
C.chy.prototype={
$1(d){return C.hXw(B.a1(d,x.N,x.z))},
$S:z+20}
C.chz.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chv.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chw.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chx.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chA.prototype={
$1(d){var w=d.c
return!w.d2(this.a.bR(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c9h.prototype={
$1(d){return C.hXx(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9i.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9f.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c9g.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9k.prototype={
$1(d){var w=d.b
return!w.d2(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chJ.prototype={
$1(d){return d.aj()},
$S:z+28}
C.chI.prototype={
$1(d){return C.huB(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chH.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chG.prototype={
$1(d){return C.i_Y(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chL.prototype={
$1(d){return C.i_X(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chM.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chN.prototype={
$1(d){return d.aj()},
$S:z+34}
C.ebO.prototype={
$1(d){return d.bg8(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ebP.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebI.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ebJ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ebr.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.ebs.prototype={
$1(d){return new C.QG(this.a,null)},
$S:z+9}
C.ebt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.ebq(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JY()}},
$S:0}
C.ebq.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebF.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebG.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.iqY(v,w[0],w[3])
t.JY()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ebH.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebz.prototype={
$1(d){return new C.QG(this.a,null)},
$S:z+9}
C.ebA.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eby.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.ebE.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JY()},
$S:0}
C.ebD.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1t(u[w],new C.ebC(v,w),null)},
$S:z+59}
C.ebC.prototype={
$1(d){var w=this.a
return w.m(new C.ebB(w,this.b,d))},
$S:z+40}
C.ebB.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebv.prototype={
$0(){var w=this.a
return w.m(new C.ebu(w))},
$S:0}
C.ebu.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ebw.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eI,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cE,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:126}
C.ebx.prototype={
$1(d){return this.a.a2U()},
$S:2}
C.ebN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.us:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aL:A.bm
r=w.d
q=B.b1(r).j(0.15)
p=B.m(12)
q=B.o(n,B.X(A.aqU,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.n),n,n,n,n,A.hC,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.da,B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awJ(q,e,!0,n),n,n,n,n,new C.ebK(m,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CI(n,n,n,n,n,new C.ebL(),A.J,new C.ebM(m,e),A.cs,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.aj),new B.bl(w.a,x.W))},
$S:126}
C.ebM.prototype={
$1(d){var w=this
if(d==="edit")w.a.ac0(w.b)
if(d==="questions")w.a.a_8(w.b)
if(d==="delete")w.a.bPZ(w.b)},
$S:2}
C.ebL.prototype={
$1(d){return D.d5D},
$S:138}
C.ebK.prototype={
$0(){return this.a.a_8(this.b)},
$S:0}
C.cX9.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.c()
w=d.a===q.a
if(w){q=r.f
q===$&&B.c()
q=B.b1(q).j(0.2)}else q=A.cC.j(0.1)
v=B.m(10)
if(w){u=r.f
u===$&&B.c()
u=B.b1(u)}else u=A.L
u=B.K(u,A.r,1)
t=r.f
t===$&&B.c()
return B.aM(!1,s,!0,B.o(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.n),s,s,s,s,A.cs,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cX8(r,d),s,s,s,s,s,s,s)},
$S:2112}
C.cX8.prototype={
$0(){var w=this.a
return w.m(new C.cX6(w,this.b))},
$S:0}
C.cX6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXa.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.ay(w,B.hg(u,w,t===d?D.c2Q:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cX7(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:482}
C.cX7.prototype={
$0(){var w=this.a
return w.m(new C.cX5(w,this.b))},
$S:0}
C.cX5.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXb.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cXc.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cR2(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f3S.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f3T.prototype={
$1(d){return new C.a1s(this.a,null)},
$S:z+41}
C.f3Z.prototype={
$2(d,e){return A.P},
$S:38}
C.f3Y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.us:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aL:A.bm
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bv(q,B.aSr(n,A.bX,36,A.qQ,l?A.bP:A.an,r,48),A.aq)}else r=B.X(D.a3f,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f3W(m,w,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c15,n,n,n,new C.f3X(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.aj)},
$S:84}
C.f3X.prototype={
$0(){var w=this.a
w.m(new C.f3U(w,this.b))
w.azW()},
$S:0}
C.f3U.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f3W.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4c(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f3V(t,u.c,s))
t.azW()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f3V.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f3O.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f3M.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WV(w,"Answer Document",null)},
$S:z+42}
C.f3N.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f3Q.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).N(new C.iC(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f3R.prototype={
$1(d){var w=this.a
return w.m(new C.f3P(w,d))},
$S:9}
C.f3P.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chD.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fTu.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.eco.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ec4.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lT("image","",this.b,null))},
$S:0}
C.ec9.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lT("video","","data:video/mp4;base64,"+A.cL.gco().aK(this.b),null))},
$S:0}
C.ec7.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7r,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7q,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bN(!1,A.dp,w,w,!0,w,w,w,new C.ec5(d),w,w),B.bJ(D.h1e,w,new C.ec6(d),w)],v),w,w,w,u,w,w,w,w,D.fOw,w)},
$S:18}
C.ec5.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ec6.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ec8.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lT("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ec0.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ec1.prototype={
$1(d){return d.length!==0},
$S:3}
C.ec2.prototype={
$1(d){return A.a.i(A.a.ek(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ec3.prototype={
$1(d){return d.length!==0},
$S:3}
C.ece.prototype={
$0(){var w=this.a.bJ9()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ecf.prototype={
$0(){return this.a.azX("**","**")},
$S:0}
C.ecg.prototype={
$0(){return this.a.azX("*","*")},
$S:0}
C.ech.prototype={
$0(){return this.a.azX("__","__")},
$S:0}
C.eci.prototype={
$0(){return this.a.b2e("## Section title")},
$S:0}
C.ecj.prototype={
$0(){return this.a.b2e("\u2022 First point\n\u2022 Second point")},
$S:0}
C.eck.prototype={
$0(){},
$S:0}
C.ecl.prototype={
$0(){var w=this.a
w.m(new C.ecd(w))},
$S:0}
C.ecd.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZj)},
$S:0}
C.ecm.prototype={
$0(){var w=this.a
w.m(new C.ecc(w))},
$S:0}
C.ecc.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZk)},
$S:0}
C.ecn.prototype={
$1(d){var w,v=null,u=d.b,t=u.a
switch(t){case"image":t="Image"
break
case"video":t="Video"
break
case"link":t=u.d
if(t==null)t="Link"
break
case"signature":t="Signature"
break
default:break}w=this.b.a
t=B.d(t,v,v,v,v,v,v,B.l(v,v,w?A.iA:A.av,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?A.cu:A.hM
return B.Ee(v,w,A.atd,t,v,new C.ecb(this.a,d),v)},
$S:z+45}
C.ecb.prototype={
$0(){var w=this.a
return w.m(new C.eca(w,this.b))},
$S:0}
C.eca.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.ebY.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b27},
$S:0}
C.ebZ.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hGx},
$S:0}
C.ebQ.prototype={
$0(){var w=this.a
w.d=D.b26
w.f=w.e=null},
$S:0}
C.ebR.prototype={
$0(){var w=this.a
w.d=D.b27
w.f=null},
$S:0}
C.ec_.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebT.prototype={
$2(d,e){var w=this.a,v=w.gb9X()[e]
return new C.ado(v,this.b,new C.ebS(w,v),null)},
$S:z+46}
C.ebS.prototype={
$0(){return this.a.ceb(this.b.a)},
$S:0}
C.ebV.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ebX.prototype={
$2(d,e){return A.T},
$S:38}
C.ebW.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.us:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ac(0,A.G,A.w.j(r?0.28:0.06),A.dM,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bv(w,B.aSr(v,A.bX,52,D.a3f,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.X(D.a3f,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bc)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eJ,r?A.bP:A.an,t,t,t,22))
return B.aE(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ebU(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.aj)},
$S:84}
C.ebU.prototype={
$0(){return this.a.clb(this.b)},
$S:0}
C.chF.prototype={
$1(d){return new C.adf(d,this.a,null)},
$S:z+48}
C.cQE.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oj(v==null?w.b:v)
if(u!=null)B.iQ(u,A.fo,null)},
$S:0}
C.cQF.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQG.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nE,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:150}
C.dsA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsC.prototype={
$0(){return this.a.m(new C.dsB(this.b))},
$S:0}
C.dsB.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fxs.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecC.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Et)w.z=v
else w.Q=v},
$S:0}
C.ect.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.ck,A.eW)},
$S:7}
C.ecv.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:106}
C.ecw.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.ch)
w.r=!0},
$S:0}
C.ecx.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecy.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:161}
C.ecz.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ecA.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ecB.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ecu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n_(l,A.bC.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bT,B.A(B.a([new B.a5(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.dZ,l,l,l,l,l,l,l,l,12,A.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aD(k,A.bW,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bC.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ac(0,A.G,(u?A.bC:A.aD).j(0.22),A.i5,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bm:A.bq
n=u?13.5:15
m=u?A.bo:A.cK
return new B.bK(t,l,l,B.o(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cE,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.be(A.ir,A.ir,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kB,A.js,l,l,l),l)},
$S:41}
C.ecJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.ai9,A.a_,A.ol],t):B.a([A.qm,A.qj,A.qk],t)
w=B.a([new B.ac(-4,A.G,A.aD.j(0.35+w*0.25),A.dn,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.ds()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fA(A.A,B.o(o,D.bYy,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eGJ,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.og(A.jV,D.h62,new C.ecG())
p=x.p
m=B.a([B.A(B.a([q,A.bc,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.l,o,A.e,A.i,0,o,o),A.af,B.A(B.a([n.ay6(D.Et,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.ay6(D.aMj,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.ay6(D.Eu,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.Eu){t=B.a([A.P,n.cEE(u)],p)
if(n.w){q=n.x===D.Et?D.a7r:D.a6v
p=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.ecH(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bC.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bC.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.o(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iy:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dq2,new C.ecI(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.i,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.az,A.aC,A.x,s,o,o),A.n),o,o,o,H.amZ,H.an9,o,o,o)},
$S:90}
C.ecG.prototype={
$1(d){return D.cce.az(0,d)},
$S:77}
C.ecH.prototype={
$1(d){return this.a.cEF(d,this.b)},
$S:z+49}
C.ecI.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMl?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.ecF(p,d)
s=C.i1s(d)
if(o)r=A.c
else r=v?A.aa:A.bq
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i1t(d)
if(o)v=A.aa
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aE(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.OA,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.aj),q),1)},
$S:z+50}
C.ecF.prototype={
$0(){var w=this.a
return w.m(new C.ecE(w,this.b))},
$S:0}
C.ecE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ecL.prototype={
$0(){var w=this.a
return w.m(new C.ecK(w))},
$S:0}
C.ecK.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ecs.prototype={
$0(){var w=this.a
return w.m(new C.ecr(w,this.b))},
$S:0}
C.ecr.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Eu
if(v===D.aMj&&w.Q==null)w.Q=A.d.gH(D.a6v).a},
$S:0}
C.ecM.prototype={
$0(){return this.a.cA4(this.b.a)},
$S:0}
C.ecD.prototype={
$0(){return this.a.JO(this.b)},
$S:0}
C.ecp.prototype={
$1(d){return this.a.b2f()},
$S:2}
C.ecq.prototype={
$0(){return this.a.b2f()},
$S:0}
C.h5E.prototype={
$1(d){var w=this
return new C.a0d(w.a,w.b,w.c,new C.h5D(w.d),null)},
$S:z+51}
C.h5D.prototype={
$0(){return J.lI(this.a.bm())},
$S:0}
C.dpV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bl2()},
$S:29}
C.dpW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aD(m,A.bW,u).w
s=Math.cos(v)
u=B.aD(m,A.bW,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e9:A.hq
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d0(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:366}
C.dq0.prototype={
$0(){},
$S:0}
C.dq_.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nk.aA(0,A.h.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.ds()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fE(t*0.08)
w.k5(0.12)
return B.e1(A.A,B.fA(A.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.dpX.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ac(6,A.G,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.A,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n_(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.d6(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:124}
C.dpY.prototype={
$1(d){return D.cci.az(0,d)},
$S:77}
C.dpZ.prototype={
$0(){var w=this.a
w.a.bl2()
w.a.e.$0()},
$S:0}
C.cjE.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fS)if(d.x===A.dG){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjR.prototype={
$1(d){return d.a===this.a},
$S:15}
C.er3.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.erK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QV()},
$S:7}
C.erL.prototype={
$1(d){var w=$.aU.p2$
if(w===A.uf||w===A.ug)return
this.a.Fp()},
$S:12}
C.erM.prototype={
$1(d){this.a.cGQ()},
$S:12}
C.ers.prototype={
$0(){this.a.Kk(this.b.d,!1)},
$S:0}
C.ert.prototype={
$0(){},
$S:0}
C.eru.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.erv.prototype={
$0(){},
$S:0}
C.erw.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erx.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.ery.prototype={
$0(){var w,v,u,t=this,s=t.b,r=t.c
s.e=s.e+r
w=s.x
v=w!=null
if(v){w.e+=r;++w.f}u=s.f=!1
s.r=null
s.rx=0
s.fx=s.fr=t.d
s.fy=r
s=t.a.a.c.x
if(s!=null?v:u){s.e=w.e
s.f=w.f}},
$S:0}
C.ern.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Q7()
w.aa7()},
$S:0}
C.er4.prototype={
$0(){this.b.Kk(this.c.d+this.a.a,!1)},
$S:0}
C.ero.prototype={
$1(d){var w=d.d
return(w===A.fS||w===A.f4)&&d.x===A.dG},
$S:15}
C.erp.prototype={
$1(d){return d.a},
$S:179}
C.erq.prototype={
$1(d){return d.a===this.a},
$S:15}
C.err.prototype={
$0(){},
$S:0}
C.er8.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.er9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.erh.prototype={
$0(){},
$S:0}
C.ere.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.erf.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erg.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eri.prototype={
$0(){return this.a.z=!0},
$S:0}
C.erj.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w3(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.erk.prototype={
$0(){return this.a.z=!1},
$S:0}
C.erm.prototype={
$0(){var w=this.a
return w.m(new C.erl(w))},
$S:0}
C.erl.prototype={
$0(){return this.a.y=1},
$S:0}
C.era.prototype={
$0(){return this.a.y=1},
$S:0}
C.erb.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erC.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erD.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.erH.prototype={
$0(){var w=this.a
return w.m(new C.erA(w))},
$S:0}
C.erA.prototype={
$0(){return this.a.y=1},
$S:0}
C.erI.prototype={
$0(){var w=this.a
return w.m(new C.erz(w))},
$S:0}
C.erz.prototype={
$0(){return this.a.y=2},
$S:0}
C.erJ.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.erE.prototype={
$2$cloudRequest(d,e){return this.a.b3w(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2113}
C.erF.prototype={
$0(){return this.a.Fp()},
$S:1}
C.erG.prototype={
$0(){var w=this.a
return w.m(new C.erB(w))},
$S:0}
C.erB.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.er7.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.er6(w))},
$S:0}
C.er6.prototype={
$0(){return this.a.y=0},
$S:0}
C.er5.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIJ(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ac(1,A.G,A.aE.j(0.55),A.J,18)],x.V),D.cac,A.a6),t,t,t,t,t,t,t,t),A.ed,A.t7,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9c(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.i,0,t,t)],w),t)},
$S:70}
C.erd.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.m(new C.erc(w,v))},
$S:0}
C.erc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.duk.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fS||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dul.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.dum.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hdo(v.c,u))
w=this.c?new C.duj(v):null
return v.bc0(this.b,A.pC,D.f0,w,"Today","$"+u,D.f0)},
$S:2115}
C.duj.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dun.prototype={
$2(d,e){var w=this.a
return w.bc0(this.b,A.kb,A.cj,w.w,"Balance","$"+B.dG(B.M8(w.c.a,new C.dui(w))),A.cq)},
$S:74}
C.dui.prototype={
$0(){return this.a.c.d},
$S:83}
C.dud.prototype={
$0(){this.a.a.cZ0()
return null},
$S:0}
C.due.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b3(w,w,w,new C.byZ(v,w),A.aA)},
$S:60}
C.duf.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beo(v,!0,A.aE,D.pj,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.ben(v,D.pj,w)}return B.b3(w,w,w,v,A.aA)},
$S:60}
C.dug.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.duh.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cXH(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.h.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c6(new B.he(B.a([u,s],x.U)),new C.duc(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2116}
C.duc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.dub(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b3(n,n,n,new C.bem(o.c,v,k,u,D.pj,D.byK,n),D.fo8))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.va
else t=o.e?A.wV:D.bTF
t=B.X(t,k?D.pj:A.b_,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pj:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.am,s,A.aw,w,A.P,B.o(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.pj:A.po,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.n),n,n,n,n,A.lo,n,n,n)],m),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.A,n,A.ad,A.f,l,n),n),n,n,n)},
$S:235}
C.dub.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.h.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dn(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.A,0.5,A.x,s,0,B.a([D.pj.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:243}
C.duE.prototype={
$0(){},
$S:0}
C.duF.prototype={
$0(){},
$S:0}
C.duG.prototype={
$1(d){return d.x===A.dG},
$S:15}
C.duq.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.dup.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.m(new C.duo(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.duo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.duB.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jb,B.ay(v,B.cU(A.A,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.aa,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.n(q,v,p,r,v,v,A.n),A.hb,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.duD(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2118}
C.duD.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.duC(w,this.b))},
$S:0}
C.duC.prototype={
$0(){var w=""+this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.duA.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uQ,B.A(B.a([v,A.b4,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2119}
C.duz.prototype={
$1(d){return this.a.m(new C.duy())},
$S:2}
C.duy.prototype={
$0(){},
$S:0}
C.dut.prototype={
$1(d){return this.a.aZv(d)&&!B.hlH(d)},
$S:15}
C.duu.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.duv.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.duw.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dus())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dus.prototype={
$0(){},
$S:0}
C.dux.prototype={
$0(){var w=this.a
return w.m(new C.dur(w))},
$S:0}
C.dur.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fPh.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.fGZ.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h_F.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fGY.prototype={
$1(d){var w,v,u
if(!C.inP(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bj(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bj(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bj(J.k(w==null?"":w))}if(u!=null&&A.o.aq(new B.V(Date.now(),0,!1).bz(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fv4.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.fZ5.prototype={
$0(){return $.hiV=null},
$S:11}
C.fZ6.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fWH.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fWI.prototype={
$0(){var w,v=this.a
$.hiJ.W(0,v)
w=C.uy(this.b,v)
if(w!=null)B.S4(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h0R.prototype={
$1(d){return new C.a10(this.a,this.b,null)},
$S:z+56}
C.elH.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.elK.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.elL.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.elJ(w))},
$S:2}
C.elJ.prototype={
$0(){return this.a.f=""},
$S:0}
C.elM.prototype={
$1(d){return this.a.b2v()},
$S:2}
C.elN.prototype={
$0(){var w=this.a
return w.m(new C.elI(w,this.b))},
$S:0}
C.elI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fFW.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fFV.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fZn.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.fZo.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fSG.prototype={
$1(d){return d.a!=="send_email"},
$S:333}
C.fYO.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.A,B.d(d,w,w,w,w,w,w,A.hi,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,86,w,A.f6,w,w,w,72)},
$S:789}
C.clx.prototype={
$1(d){return J.k(d)},
$S:16}
C.cly.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clw(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:790}
C.clw.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:429}
C.clz.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clv(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:790}
C.clv.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:429}
C.clB.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.clC.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.clu.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.clA.prototype={
$2(d,e){return d+e},
$S:67}
C.clt.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:67}
C.fIK.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fIE.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fIF.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fIG.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fIH.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fII.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fIJ.prototype={
$0(){return this.a.$1(D.r8)},
$S:0}
C.fs6.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.aq(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_8:D.bk_
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dC
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ac(0,A.G,A.w.j(0.35),A.dM,4)],x.V),new B.bT(A.A,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fs5(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:87}
C.fs5.prototype={
$0(){var w=this,v=w.a,u=v.d2Y(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r8:D.JJ
w.f.$1(v)}},
$S:0}
C.fGg.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,A.aVt,new C.fGf(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:142}
C.fGf.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.ay
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fGe(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fX,0,v,v,v,v,v,A.aj)},
$S:84}
C.fGe.prototype={
$0(){var w=this,v=w.a.d3_(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fro.prototype={
$1(d){return new B.D(A.jb,C.fWy(d,!1),null)},
$S:363}
C.frp.prototype={
$1(d){return C.fWy(d,!1)},
$S:2123}
C.frq.prototype={
$0(){var w=this,v=w.a
v.cNi(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.frr.prototype={
$0(){var w=this
w.a.cNj(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fDa.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mY(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.cd,v,v,v),A.dk,new C.fD9(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:2124}
C.fD9.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fF7.prototype={
$1(d){return D.dun[d]},
$S:80}
C.fF8.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fC_.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fC0.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fsz.prototype={
$0(){var w=this,v=w.a.cT9(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fsy.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.lM
else w=u===1?A.dP:A.tF
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nJ,v,v,v,v),v)},
$S:2125}
C.fCb.prototype={
$1(d){var w=this
if(w.a.bft(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fCc.prototype={
$0(){var w=this
if(w.a.bft(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.frU.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fOk.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fOl.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:55}
C.eTA.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNd.prototype
w.bzd=w.Z
w.bzc=w.t
w=C.aNe.prototype
w.bzf=w.Z
w.bze=w.t
w=C.aNf.prototype
w.bzh=w.Z
w.bzg=w.t
w=C.aOc.prototype
w.bAg=w.Z
w.bAf=w.t
w=C.aNL.prototype
w.bzO=w.t
w=C.aOm.prototype
w.bAq=w.t
w=C.aNg.prototype
w.bzi=w.t
w=C.aOu.prototype
w.bAz=w.t
w=C.aNl.prototype
w.bzn=w.t
w=C.aNB.prototype
w.bzE=w.t
w=C.aP5.prototype
w.bBa=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCO.prototype,"gbW2","bW3",19)
v(q,"gaVL","aVM",1)
v(C.aCN.prototype,"gcDx","a3L",1)
v(q=C.aCP.prototype,"gc0z","c0A",1)
v(q,"gbKZ","bL_",1)
v(q=C.azR.prototype,"gcww","cwx",1)
v(q,"gckJ","Rp",0)
v(q,"gcHG","cHH",1)
v(q,"gczA","nl",0)
w(q,"gcp9","cpa",25)
w(q,"gcFU","T8",33)
v(q=C.aEV.prototype,"gbTZ","YU",0)
v(q,"gc9T","a_t",0)
v(q,"gc9Q","a_s",0)
v(q,"gc9R","aeY",0)
v(q,"gc9S","Qb",0)
v(C.aC6.prototype,"gc9U","c9V",1)
u(C,"ivo","i_F",58)
t(C,"hlP",0,null,["$1","$0"],["hI2",function(){return C.hI2(null)}],3,0)
t(C,"bH8",0,null,["$1","$0"],["hI1",function(){return C.hI1(null)}],3,0)
v(C.O5.prototype,"gF9","chT",1)
v(C.aFG.prototype,"gcwO","BA",0)
v(q=C.aFW.prototype,"gcl2","Rr",0)
v(q,"gcpV","a1Y",0)
v(q,"gce5","ce6",1)
v(q=C.aG7.prototype,"gcea","ag2",0)
v(q,"gbEs","aa_",0)
v(q,"gcx3","a2U",0)
s(q,"gcin","cio",35)
v(C.aI9.prototype,"gbEU","aa1",1)
v(q=C.aI8.prototype,"gce9","ag1",0)
v(q,"gck_","ahc",0)
v(q=C.aG9.prototype,"gc4d","adJ",0)
v(q,"gc4f","Zz",0)
v(q,"gc4e","adK",0)
v(q=C.aG8.prototype,"gbHf","bHg",1)
v(q,"gbHh","bHi",1)
v(C.aGa.prototype,"gbNc","bNd",1)
v(C.aD8.prototype,"gcec","ced",1)
v(q=C.aGx.prototype,"gb2o","ceu",1)
r(q,"gb3u",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agQ","aAB","b3w","b3v"],52,0,0)
r(q,"gchB",0,4,null,["$4"],["chC"],53,0,0)
v(q,"gcjI","a18",0)
v(q,"gckA","ahj",0)
v(q,"gckv","ahh",0)
v(q,"gc7x","aeu",0)
w(C.aDW.prototype,"gc67","c68",54)
w(q=C.aDY.prototype,"gcEN","cEO",55)
v(q,"gcDn","cDo",1)
v(q,"gcLt","cLu",1)
v(C.aGl.prototype,"gceQ","b2v",1)
v(C.aH9.prototype,"gb30","aAn",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.n0,[C.cCn,C.cCk,C.cCl,C.cCm,C.cCj,C.ffw,C.ffu,C.ffy,C.ffv,C.fz8,C.dml,C.dmw,C.dmE,C.dmF,C.dmH,C.dmz,C.dmx,C.dmy,C.dmA,C.dmB,C.dmr,C.dms,C.dmq,C.dmu,C.dmv,C.dmo,C.dmn,C.dmJ,C.dmM,C.e_U,C.e_T,C.e_V,C.e_S,C.e_R,C.dmf,C.dmi,C.dmj,C.dmh,C.dmg,C.do7,C.do8,C.do9,C.dnn,C.dno,C.dnS,C.dnD,C.dnE,C.dnF,C.dnG,C.dnH,C.dmQ,C.dnm,C.dnT,C.do1,C.dnQ,C.dnP,C.dnk,C.dnl,C.dnY,C.dnZ,C.dmS,C.dmT,C.dnw,C.dnx,C.dny,C.dnv,C.dnI,C.dnJ,C.dnK,C.dnL,C.dnM,C.dnN,C.dnW,C.dnz,C.dnA,C.dnB,C.dnC,C.do_,C.do0,C.dmU,C.dmV,C.dmW,C.dmX,C.dnU,C.dnV,C.dnu,C.dnO,C.dns,C.do2,C.do3,C.do4,C.dnp,C.dn8,C.dn7,C.dn6,C.dnc,C.dn5,C.dn3,C.dmZ,C.dn1,C.dmY,C.dnh,C.dni,C.dn_,C.drG,C.cNK,C.cNA,C.cNB,C.cNU,C.cNR,C.cNS,C.cNT,C.cNM,C.cNL,C.cNC,C.cNN,C.cOc,C.cO8,C.cO7,C.cNI,C.cNJ,C.cNF,C.cNQ,C.cNY,C.cNZ,C.cO_,C.cO0,C.cO1,C.cO2,C.cO3,C.cOo,C.cOh,C.cOe,C.cOj,C.cOg,C.cOd,C.cND,C.cOa,C.dId,C.dIe,C.dI4,C.dI2,C.dIc,C.dI1,C.dI0,C.dI3,C.dI8,C.dI9,C.dI6,C.dI7,C.dIf,C.dIg,C.dIh,C.dIi,C.f8Y,C.f8Z,C.dh7,C.fPb,C.dOG,C.dOy,C.dOA,C.dOE,C.dOz,C.dOB,C.dOC,C.cdT,C.fWw,C.fWv,C.dHQ,C.dHP,C.dHR,C.dHO,C.e7s,C.e7t,C.e7A,C.h4L,C.h4M,C.c69,C.e0_,C.e00,C.e01,C.e02,C.e03,C.e04,C.e_Z,C.e05,C.e_Y,C.e08,C.e07,C.e06,C.e7I,C.e7J,C.e7G,C.e7F,C.e7H,C.e7D,C.ebI,C.ebJ,C.ebr,C.ebt,C.ebF,C.ebG,C.ebA,C.eby,C.ebE,C.ebB,C.ebv,C.ebu,C.ebK,C.cX8,C.cX6,C.cX7,C.cX5,C.cXb,C.cXc,C.f3S,C.f3X,C.f3U,C.f3W,C.f3V,C.f3O,C.f3N,C.f3Q,C.f3P,C.ec4,C.ec9,C.ec5,C.ec6,C.ec8,C.ece,C.ecf,C.ecg,C.ech,C.eci,C.ecj,C.eck,C.ecl,C.ecd,C.ecm,C.ecc,C.ecb,C.eca,C.ebY,C.ebZ,C.ebQ,C.ebR,C.ebS,C.ebU,C.cQE,C.dsA,C.dsC,C.dsB,C.ecC,C.ecw,C.ecx,C.ecz,C.ecA,C.ecB,C.ecF,C.ecE,C.ecL,C.ecK,C.ecs,C.ecr,C.ecM,C.ecD,C.ecq,C.h5D,C.dq0,C.dpZ,C.er3,C.ers,C.ert,C.eru,C.erv,C.erx,C.ery,C.ern,C.er4,C.err,C.er8,C.er9,C.erh,C.ere,C.erf,C.erg,C.eri,C.erj,C.erk,C.erm,C.erl,C.era,C.erb,C.erH,C.erA,C.erI,C.erz,C.erJ,C.erF,C.erG,C.erB,C.er7,C.er6,C.erd,C.erc,C.duj,C.dui,C.dud,C.duE,C.duF,C.duq,C.dup,C.duo,C.duD,C.duC,C.duy,C.duv,C.duw,C.dus,C.dux,C.dur,C.fZ5,C.fWI,C.elH,C.elK,C.elJ,C.elN,C.elI,C.fIE,C.fIF,C.fIG,C.fIH,C.fII,C.fIJ,C.fs5,C.fGe,C.frq,C.frr,C.fD9,C.fF8,C.fC0,C.fsz,C.fCc,C.frU,C.eTA])
u(B.kB,[C.cCo,C.ffx,C.fT_,C.fSS,C.fz5,C.fz4,C.fz7,C.dmO,C.dmP,C.dmD,C.dmC,C.dmG,C.dmp,C.dmt,C.dmI,C.e_X,C.dmk,C.doa,C.dob,C.doc,C.dod,C.doe,C.dnR,C.dnX,C.dmR,C.do6,C.do5,C.dn9,C.dna,C.dnb,C.dnd,C.dnf,C.drH,C.cOp,C.cNP,C.cNO,C.cO6,C.cO9,C.cO5,C.cNG,C.cNX,C.cNV,C.cOb,C.cNW,C.cOk,C.cOi,C.cOn,C.c4R,C.c4Q,C.c4T,C.c4S,C.dIb,C.dIa,C.dI5,C.dIj,C.dIk,C.fDK,C.fEX,C.dh8,C.dh6,C.c5D,C.fPa,C.dOH,C.dOF,C.cdU,C.fFM,C.fWu,C.cgk,C.cgj,C.cgM,C.e7q,C.e7r,C.fRy,C.fRl,C.fRk,C.fC3,C.ch_,C.ch0,C.ch1,C.cgZ,C.cgY,C.fyO,C.h4H,C.h4I,C.h4J,C.h4K,C.h4G,C.e7x,C.e7y,C.e7w,C.h4N,C.dof,C.ciK,C.fxK,C.e09,C.e7E,C.chy,C.chv,C.chx,C.chA,C.c9h,C.c9f,C.c9k,C.chJ,C.chI,C.chH,C.chG,C.chL,C.chN,C.ebO,C.ebs,C.ebq,C.ebH,C.ebz,C.ebD,C.ebC,C.ebx,C.ebM,C.ebL,C.cX9,C.cXa,C.f3T,C.f3M,C.f3R,C.chD,C.fTu,C.eco,C.ec7,C.ec0,C.ec1,C.ec2,C.ec3,C.ecn,C.chF,C.cQF,C.cQG,C.fxs,C.ect,C.ecv,C.ecy,C.ecG,C.ecH,C.ecI,C.ecp,C.h5E,C.dpV,C.dpY,C.cjE,C.cjR,C.erK,C.erL,C.erM,C.erw,C.ero,C.erp,C.erq,C.erC,C.erE,C.duk,C.dul,C.dug,C.dub,C.duG,C.duB,C.duA,C.duz,C.dut,C.fGZ,C.h_F,C.fGY,C.fv4,C.fZ6,C.fWH,C.h0R,C.elL,C.elM,C.fFW,C.fFV,C.fZn,C.fZo,C.fSG,C.fYO,C.clx,C.cly,C.clw,C.clz,C.clv,C.clB,C.clC,C.clu,C.fIK,C.fro,C.frp,C.fDa,C.fF7,C.fC_,C.fsy,C.fCb,C.fOk,C.fOl])
t(C.bv1,B.jL)
u(B.ag,[C.Gb,C.an9,C.aFF,C.an8,C.ana,C.anX,C.ak_,C.apv,C.a0H,C.a0I,C.a_P,C.aq1,C.apu,C.OB,C.aCQ,C.arc,C.arV,C.WU,C.QG,C.a1t,C.a1s,C.WV,C.asb,C.aDJ,C.ase,C.a0d,C.asO,C.aDV,C.aDX,C.a10,C.au9])
u(B.ah,[C.aKI,C.aNe,C.aOc,C.aNd,C.aNf,C.bjR,C.azR,C.aEV,C.bmi,C.bmj,C.aC6,C.bmq,C.aNL,C.aOm,C.aNg,C.aFG,C.aFW,C.aG7,C.bdV,C.aI9,C.aI8,C.aG9,C.aG8,C.bk4,C.aOu,C.aNl,C.bAY,C.aNB,C.aDY,C.aGl,C.aP5])
u(B.n1,[C.ffz,C.fz6,C.dmm,C.dmN,C.dmL,C.dmK,C.e_W,C.dnt,C.dnr,C.dnq,C.dn4,C.dne,C.dn2,C.dng,C.dn0,C.dnj,C.cO4,C.cNH,C.cOf,C.cOm,C.cOl,C.cNE,C.dh5,C.dOD,C.fFN,C.fFO,C.e7u,C.fSV,C.h4F,C.e7z,C.e7C,C.e7B,C.dog,C.ciL,C.chz,C.chw,C.c9i,C.c9g,C.chM,C.ebP,C.ebw,C.ebN,C.f3Z,C.f3Y,C.ec_,C.ebT,C.ebV,C.ebX,C.ebW,C.ecu,C.ecJ,C.dpW,C.dq_,C.dpX,C.erD,C.er5,C.dum,C.dun,C.due,C.duf,C.duh,C.duc,C.duu,C.fPh,C.clA,C.clt,C.fs6,C.fGg,C.fGf])
t(C.ay1,C.Gb)
u(B.aK,[C.re,C.afh,C.O5,C.JE,C.rR,C.rS,C.lT,C.iC,C.iq,C.bbZ,C.de3,C.dsz,C.rX,C.WW,C.OS,C.qh,C.b2e,C.pA,C.ate])
t(C.aCO,C.aNe)
t(C.bmN,C.aOc)
t(C.aCN,C.aNd)
t(C.aCP,C.aNf)
u(B.qw,[C.XB,C.aDK,C.at1,C.JJ,C.Fz])
u(B.av,[C.a23,C.bvy,C.ag2,C.Ri,C.a87,C.Ot,C.arP,C.aeU,C.aeT,C.b33,C.aDI,C.ado,C.b2B,C.adf,C.aDW])
t(C.bmg,C.aNL)
t(C.bn0,C.aOm)
t(C.biw,C.aNg)
t(C.aGa,C.aOu)
t(C.aD8,C.aNl)
t(C.aGx,C.bAY)
t(C.bkO,C.aNB)
u(B.qJ,[C.beo,C.ben,C.bem,C.bdO,C.byZ,C.btN])
t(C.aH9,C.aP5)
w(C.aNd,C.O5)
w(C.aNe,C.O5)
w(C.aNf,C.O5)
w(C.aOc,C.O5)
w(C.aNL,B.eP)
w(C.aOm,B.cg)
w(C.aNg,B.cg)
w(C.aOu,B.cg)
w(C.aNl,B.eP)
w(C.aNB,B.eP)
v(C.bAY,B.eG)
w(C.aP5,B.cg)})()
B.on(b.typeUniverse,JSON.parse('{"bv1":{"jL":[]},"Gb":{"ag":[],"v":[]},"aKI":{"ah":["Gb<1,2>"]},"ay1":{"Gb":["1","hx<1>"],"ag":[],"v":[],"Gb.T":"1","Gb.S":"hx<1>"},"an9":{"ag":[],"v":[]},"aFF":{"ag":[],"v":[]},"an8":{"ag":[],"v":[]},"ana":{"ag":[],"v":[]},"anX":{"ag":[],"v":[]},"ak_":{"ag":[],"v":[]},"aCO":{"ah":["an9"]},"bmN":{"ah":["aFF"]},"aCN":{"ah":["an8"]},"aCP":{"ah":["ana"]},"bjR":{"ah":["anX"]},"azR":{"ah":["ak_"]},"apv":{"ag":[],"v":[]},"a0H":{"ag":[],"v":[]},"a0I":{"ag":[],"v":[]},"ag2":{"av":[],"v":[]},"a_P":{"ag":[],"v":[]},"aEV":{"ah":["apv"]},"a23":{"av":[],"v":[]},"bvy":{"av":[],"v":[]},"bmi":{"ah":["a0H"]},"bmj":{"ah":["a0I"]},"Ri":{"av":[],"v":[]},"aC6":{"ah":["a_P"]},"aq1":{"ag":[],"v":[]},"bmq":{"ah":["aq1"]},"a87":{"av":[],"v":[]},"apu":{"ag":[],"v":[]},"bmg":{"ah":["apu"]},"Ot":{"av":[],"v":[]},"arP":{"av":[],"v":[]},"OB":{"ag":[],"v":[]},"bn0":{"ah":["OB"]},"aeU":{"av":[],"v":[]},"aeT":{"av":[],"v":[]},"aCQ":{"ag":[],"v":[]},"biw":{"ah":["aCQ"]},"b33":{"av":[],"v":[]},"arc":{"ag":[],"v":[]},"aFG":{"ah":["arc"]},"arV":{"ag":[],"v":[]},"aFW":{"ah":["arV"]},"WU":{"ag":[],"v":[]},"QG":{"ag":[],"v":[]},"a1t":{"ag":[],"v":[]},"a1s":{"ag":[],"v":[]},"aG7":{"ah":["WU"]},"bdV":{"ah":["QG"]},"aI9":{"ah":["a1t"]},"aI8":{"ah":["a1s"]},"WV":{"ag":[],"v":[]},"aG9":{"ah":["WV"]},"asb":{"ag":[],"v":[]},"ado":{"av":[],"v":[]},"adf":{"av":[],"v":[]},"aDJ":{"ag":[],"v":[]},"aG8":{"ah":["asb"]},"aDI":{"av":[],"v":[]},"b2B":{"av":[],"v":[]},"bk4":{"ah":["aDJ"]},"ase":{"ag":[],"v":[]},"aGa":{"ah":["ase"]},"a0d":{"ag":[],"v":[]},"aD8":{"ah":["a0d"]},"asO":{"ag":[],"v":[]},"aDV":{"ag":[],"v":[]},"aDX":{"ag":[],"v":[]},"aGx":{"ah":["asO"],"eG":[]},"aDW":{"av":[],"v":[]},"bkO":{"ah":["aDV"]},"beo":{"aB":[]},"ben":{"aB":[]},"bem":{"aB":[]},"aDY":{"ah":["aDX"]},"bdO":{"aB":[]},"byZ":{"aB":[]},"a10":{"ag":[],"v":[]},"aGl":{"ah":["a10"]},"btN":{"aB":[]},"au9":{"ag":[],"v":[]},"aH9":{"ah":["au9"]}}'))
B.a2t(b.typeUniverse,JSON.parse('{"O5":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aF
return{dw:w("me<u?>"),gS:w("oC"),o:w("d8"),g5:w("xK"),M:w("di<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oC>"),E:w("U<d8>"),V:w("U<ac>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o1>"),B:w("U<ai<H>>"),m:w("U<ab<q,q>>"),_:w("U<ab<q,@>>"),b:w("U<rR>"),x:w("U<rS>"),gi:w("U<jq>"),a:w("U<lT>"),Y:w("U<iq>"),v:w("U<iC>"),dA:w("U<JE>"),F:w("U<rX>"),Z:w("U<kI>"),g:w("U<hZ>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<d6>"),s:w("U<q>"),G:w("U<jL>"),eO:w("U<eu>"),d9:w("U<eZ>"),p:w("U<v>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aB?>"),d4:w("U<q?>"),ck:w("ai<rR>"),e:w("ai<rS>"),ac:w("ai<jq>"),dZ:w("ai<lT>"),I:w("ai<iq>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("ab<q,q>"),P:w("ab<q,@>"),f:w("ab<@,@>"),cl:w("cM<q,D>"),aS:w("N<a_,tJ>"),dc:w("N<JJ,bz>"),dv:w("N<q,q>"),bL:w("N<G,bz>"),a3:w("N<H,bz>"),gN:w("N<H,q9>"),w:w("kG"),b1:w("rR"),Q:w("rS"),bP:w("lT"),i:w("iq"),u:w("iC"),gp:w("WW"),J:w("OS"),D:w("qh"),an:w("kI"),c:w("cw"),K:w("aK"),d:w("jF<q>"),di:w("+outcome,snapshot(XB,a7s?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<iq>,q?,q?,q?)"),cz:w("Kc"),bJ:w("dt<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("kj<H>"),cc:w("Y<q>"),aM:w("ee<d8>"),bG:w("ee<G>"),l:w("v"),gm:w("re"),ec:w("afh"),q:w("p3"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("d8?"),cJ:w("V?"),gw:w("ai<ab<q,@>>?"),bM:w("ai<@>?"),h:w("ab<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6a=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f0=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6I=new B.ax(D.f0,1,A.r,-1)
D.b6K=new B.ax(A.aa,2,A.r,-1)
D.b6N=new B.ax(A.aV,2,A.r,-1)
D.b6P=new B.ax(A.cA,0.8,A.r,-1)
D.b73=new B.ax(A.aQ,2,A.r,-1)
D.b7a=new B.ax(A.fd,1.6,A.r,-1)
D.b8_=new B.aY(0,330,0,1/0)
D.b86=new B.aY(0,176,0,1/0)
D.b87=new B.aY(0,1/0,0,260)
D.b8p=new B.aY(90,1/0,0,1/0)
D.bbp=new B.ac(0,A.G,A.dC,A.J,4)
D.d9U=w([D.bbp],x.V)
D.b8D=new B.n(A.c,null,null,null,D.d9U,null,A.a6)
D.d3f=w([D.f0,A.b3],x.O)
D.cdi=new B.a7(A.a5,A.a9,A.x,D.d3f,null,null)
D.b8R=new B.n(null,null,null,null,null,D.cdi,A.a6)
D.b8W=new B.n(A.bg,null,null,null,null,null,A.a6)
D.bmS=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dqX=w([M.ahK,D.bmS],x.O)
D.ccn=new B.a7(A.aY,A.b2,A.x,D.dqX,null,null)
D.b9c=new B.n(null,null,null,A.mK,null,D.ccn,A.n)
D.bvh=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dDQ=w([D.bvh,A.akc],x.O)
D.cbx=new B.a7(A.aY,A.b2,A.x,D.dDQ,null,null)
D.b9D=new B.n(null,null,null,A.uh,null,D.cbx,A.n)
D.dmy=w([A.aD,A.bC],x.O)
D.cc6=new B.a7(A.a5,A.a9,A.x,D.dmy,null,null)
D.b9J=new B.n(null,null,null,null,null,D.cc6,A.a6)
D.fCX=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXO=new B.C("\ud83c\udf89",null,D.fCX,null,null,null,null,null,null,null,null,null)
D.bfw=new B.cl(A.A,null,null,D.fXO,null)
D.bgZ=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agO=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bk_=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bk3=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pj=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.us=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ai9=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bms=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.ZG=new B.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yx=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bof=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_8=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajM=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bsY=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bt6=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akg=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buI=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.buP=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bw_=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_X=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bxa=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bxQ=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0a=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.byK=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alS=new B.a5l(2,"active")
D.bD3=new B.bf(42e5)
D.bD6=new B.bf(53e4)
D.bD9=new B.bf(58e4)
D.bDd=new B.bf(82e4)
D.bE_=new B.P(0,30,0,30)
D.bE7=new B.P(0,4,0,8)
D.bEb=new B.P(0,8,12,8)
D.bEP=new B.P(12,0,12,88)
D.bEX=new B.P(12,11,12,10)
D.bFn=new B.P(13,10,12,10)
D.bFy=new B.P(14,10,14,2)
D.bFK=new B.P(14,14,10,14)
D.bGj=new B.P(16,12,16,96)
D.bGo=new B.P(16,14,16,8)
D.bGs=new B.P(16,16,16,96)
D.bGt=new B.P(16,18,16,16)
D.bGx=new B.P(16,4,16,10)
D.bHw=new B.P(18,6,18,40)
D.bHJ=new B.P(20,10,20,20)
D.bHY=new B.P(20,18,20,18)
D.bIo=new B.P(22,22,22,16)
D.bJ2=new B.P(2,0,2,10)
D.bJN=new B.P(4,8,12,4)
D.bK0=new B.P(6,1,6,1)
D.bK2=new B.P(6,4,0,0)
D.bK8=new B.P(6,6,12,4)
D.bKt=new B.P(8,4,12,8)
D.h0p=new B.C("Activity",null,A.fG,null,null,null,null,null,null,null,null,null)
D.bMu=new B.bz(1,A.bd,D.h0p,null)
D.h97=new B.C("Game Receipts",null,A.u3,null,null,null,null,null,null,null,null,null)
D.fSE=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.acj,null,null,null,null,null,null,null,null,null)
D.d_D=w([D.h97,D.fSE],x.p)
D.bzQ=new B.fo(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.d_D,null)
D.bMx=new B.bz(1,A.bd,D.bzQ,null)
D.bRr=new B.a_(58607,"MaterialIcons",!1)
D.a3f=new B.a_(62178,"MaterialIcons",!1)
D.bSi=new B.a_(62410,"MaterialIcons",!1)
D.bTt=new B.a_(63258,"MaterialIcons",!1)
D.bTy=new B.a_(63304,"MaterialIcons",!1)
D.bTz=new B.a_(63306,"MaterialIcons",!1)
D.bTF=new B.a_(63330,"MaterialIcons",!1)
D.asi=new B.a_(984777,"MaterialIcons",!1)
D.bWa=new B.ae(A.D9,13,A.aa,null,null,null)
D.bWi=new B.ae(A.jt,13,A.qx,null,null,null)
D.asw=new B.ae(A.lX,null,A.c,null,null,null)
D.bXS=new B.ae(A.Dp,34,A.at,null,null,null)
D.bYo=new B.ae(A.Dc,19,A.c,null,null,null)
D.bYy=new B.ae(A.aqD,24,A.aQ,null,null,null)
D.bZ0=new B.ae(A.D5,28,A.bp,null,null,null)
D.bZw=new B.ae(A.arW,42,A.c,null,null,null)
D.bZG=new B.ae(A.a4c,30,A.c,null,null,null)
D.c_m=new B.ae(A.fO,null,A.c,null,null,null)
D.c_I=new B.ae(A.jt,16,A.c,null,null,null)
D.c0o=new B.ae(A.tq,13,A.c,null,null,null)
D.c0x=new B.ae(A.lX,18,A.c,null,null,null)
D.c15=new B.ae(A.wU,null,A.dP,null,null,null)
D.c1N=new B.ae(A.nO,28,A.c,null,null,null)
D.c22=new B.ae(A.oO,22,null,null,null,null)
D.c2r=new B.ae(A.tm,null,null,null,null,null)
D.c2D=new B.ae(A.h3,28,A.c,null,null,null)
D.c2G=new B.ae(A.cB,null,A.aR,null,null,null)
D.c2Q=new B.ae(A.a2W,14,A.c,null,null,null)
D.c3r=new B.ae(A.I1,36,A.aN,null,null,null)
D.c3y=new B.ae(A.oK,16,A.c,null,null,null)
D.bnl=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c4n=new B.ae(A.e9,9,D.bnl,null,null,null)
D.bUy=new B.a_(983146,"MaterialIcons",!1)
D.c4F=new B.ae(D.bUy,null,A.aQ,null,null,null)
D.c5e=new B.ae(A.v0,28,D.f0,null,null,null)
D.c5j=new B.ae(A.th,null,A.fd,null,null,null)
D.c5o=new B.ae(A.hD,20,D.f0,null,null,null)
D.bUV=new B.a_(983377,"MaterialIcons",!1)
D.c5y=new B.ae(D.bUV,64,A.c,null,null,null)
D.c64=new B.ae(A.h4,24,A.c,null,null,null)
D.c70=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7b=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7q=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7r=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkT=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.boE=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bog=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.drg=w([D.bkT,D.boE,D.bog],x.O)
D.c9h=new B.a7(A.az,A.aC,A.x,D.drg,null,null)
D.dwV=w([A.bf,A.b3],x.O)
D.c9C=new B.a7(A.az,A.aC,A.x,D.dwV,null,null)
D.bmK=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.btM=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.dav=w([D.bmK,D.btM],x.O)
D.c9K=new B.a7(A.az,A.aC,A.x,D.dav,null,null)
D.dsY=w([A.bs,A.a_,A.ec],x.O)
D.c9Q=new B.a7(A.az,A.aC,A.x,D.dsY,null,null)
D.c9T=new B.a7(A.a5,A.a9,A.x,E.azS,null,null)
D.d9I=w([A.fd,A.cj],x.O)
D.auj=new B.a7(A.a5,A.a9,A.x,D.d9I,null,null)
D.dac=w([A.fd,A.bC],x.O)
D.auk=new B.a7(A.a5,A.a9,A.x,D.dac,null,null)
D.aE4=w([D.pj,A.aE,A.c3],x.O)
D.cac=new B.a7(A.az,A.aC,A.x,D.aE4,null,null)
D.bqD=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7x=w([D.bqD,A.ah4,A.a_],x.O)
D.cah=new B.a7(A.az,A.aC,A.x,D.d7x,null,null)
D.b47=new B.dc(-0.8,-1)
D.b49=new B.dc(1.2,1)
D.d6E=w([A.c,A.eP,A.ha,A.c,A.ft,A.aH,A.ok],x.O)
D.dsh=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.caj=new B.a7(D.b47,D.b49,A.x,D.d6E,D.dsh,null)
D.btC=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqV=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.drf=w([D.btC,D.bqV],x.O)
D.caM=new B.a7(A.a5,A.a9,A.x,D.drf,null,null)
D.caS=new B.a7(A.az,A.aC,A.x,A.SO,null,null)
D.dlt=w([A.a00,A.yz],x.O)
D.caU=new B.a7(A.a5,A.a9,A.x,D.dlt,null,null)
D.dpY=w([A.hm,A.fW],x.O)
D.auq=new B.a7(A.a5,A.a9,A.x,D.dpY,null,null)
D.dwr=w([A.bg,A.bQ],x.O)
D.aur=new B.a7(A.a5,A.a9,A.x,D.dwr,null,null)
D.cRH=w([A.dh,A.fB],x.O)
D.cbz=new B.a7(A.az,A.aC,A.x,D.cRH,null,null)
D.d5y=w([A.c,A.ba],x.O)
D.cbJ=new B.a7(A.a5,A.a9,A.x,D.d5y,null,null)
D.aje=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjK=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dhW=w([D.aje,A.jI,A.rJ,A.aE,D.bjK],x.O)
D.ceo=w([0,0.28,0.55,0.82,1],x.n)
D.cbL=new B.a7(A.az,A.aC,A.x,D.dhW,D.ceo,null)
D.cbS=new B.a7(A.a5,A.a9,A.x,A.Tv,null,null)
D.cbT=new B.a7(A.a5,A.a9,A.x,E.aCp,null,null)
D.cbY=new B.a7(A.a5,A.a9,A.x,D.aE4,null,null)
D.dbM=w([A.bC,A.fd],x.O)
D.ccc=new B.a7(A.a5,A.a9,A.x,D.dbM,null,null)
D.dAW=w([A.aD,A.bC,A.ba],x.O)
D.cce=new B.a7(A.a5,A.a9,A.x,D.dAW,null,null)
D.dlE=w([A.at,A.bL,A.fM],x.O)
D.cci=new B.a7(A.a5,A.a9,A.x,D.dlE,null,null)
D.dAF=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.an],x.O)
D.dfX=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.ccm=new B.a7(A.az,A.aC,A.x,D.dAF,D.dfX,null)
D.ccw=new B.a7(A.az,A.aC,A.x,A.a5E,null,null)
D.dmg=w([D.ZG,A.e5],x.O)
D.ccG=new B.a7(A.a5,A.a9,A.x,D.dmg,null,null)
D.duv=w([D.akg,D.ai9,A.a_],x.O)
D.ccP=new B.a7(A.az,A.aC,A.x,D.duv,null,null)
D.bwv=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d68=w([A.fe,A.hm,D.bwv],x.O)
D.cdk=new B.a7(A.az,A.aC,A.x,D.d68,null,null)
D.dcm=w([D.pj,A.aE],x.O)
D.cdm=new B.a7(A.az,A.aC,A.x,D.dcm,null,null)
D.cdO=w([F.Dt,A.nO,A.jt,A.hE,A.jN,A.l2,A.kg,A.r_,A.nN,A.eY,A.lr,A.zC,A.I0],x.A)
D.chj=w([10,50,100,200],x.t)
D.cr6=w([1,3,5,7],x.t)
D.cw7=w([25,50,100,250],x.t)
D.bUs=new B.a_(983104,"MaterialIcons",!1)
D.cET=w([A.nO,A.mo,A.oO,A.lV,A.hq,A.va,D.bUs,A.a47],x.A)
D.cKk=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cWQ=w([0,0.22,0.5,0.78,1],x.n)
D.d_N=w([8,13,19],x.n)
D.a5Y=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h_o=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eF2=new B.jF("questions",!0,48,null,D.h_o,null,x.d)
D.fPJ=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eF9=new B.jF("edit",!0,48,null,D.fPJ,null,x.d)
D.h7D=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eF1=new B.jF("delete",!0,48,null,D.h7D,null,x.d)
D.d5D=w([D.eF2,D.eF9,D.eF1],B.aF("U<t0<q>>"))
D.dap=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.daF=w([A.bU,A.fn],x.O)
D.a92=new C.lT("text","",null,null)
D.dbY=w([D.a92],x.a)
D.ddw=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_l=new B.afE(A.kD,"Home")
D.eQT=new B.afE(A.pC,"Growth")
D.eVH=new B.afE(A.jt,"Wallet")
D.dgd=w([D.f_l,D.eQT,D.eVH],B.aF("U<+icon,label(a_,q)>"))
D.dgF=w([4,0,2,6,8,1,3,5,7],x.t)
D.dgN=w([A.c,A.cf,A.cA],x.O)
D.e2l=new C.rX("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2o=new C.rX("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2m=new C.rX("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e2g=new C.rX("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e2h=new C.rX("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2p=new C.rX("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6v=w([D.e2l,D.e2o,D.e2m,D.e2g,D.e2h,D.e2p],x.F)
D.a6A=w([A.ay,A.bf,A.d9,A.at],x.O)
D.bnA=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dmn=w([A.Zb,D.bnA,A.rJ,A.iz,A.jI],x.O)
D.a6H=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SY=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cF7=w([3,4,5],x.t)
D.cSk=w([6,7,8],x.t)
D.cdV=w([0,3,6],x.t)
D.crb=w([1,4,7],x.t)
D.cyE=w([2,5,8],x.t)
D.ce_=w([0,4,8],x.t)
D.cyB=w([2,4,6],x.t)
D.doX=w([I.auS,D.cF7,D.cSk,D.cdV,D.crb,D.cyE,D.ce_,D.cyB],x.B)
D.aMk=new C.JJ(0,"abab")
D.e2e=new C.JJ(1,"aaaBbb")
D.aMl=new C.JJ(2,"aabb")
D.dq2=w([D.aMk,D.e2e,D.aMl],B.aF("U<JJ>"))
D.dqk=w([],x.a)
D.aDh=w([],x.v)
D.dun=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Th=w([1,2,3,-1,-2],x.t)
D.dDB=w([A.j9,A.aD],x.O)
D.hFR=new C.re("dice","Dice Roll","Roll for cash & prizes!",A.nL,D.dDB)
D.hFO=new C.re("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v7,A.aBU)
D.dxk=w([A.dr,A.bp],x.O)
D.hFM=new C.re("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3U,D.dxk)
D.dD1=w([A.dS,A.ns],x.O)
D.hFS=new C.re("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a47,D.dD1)
D.cqR=w([A.jG,A.rW],x.O)
D.hFP=new C.re("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Q0,D.cqR)
D.dum=w([A.lK,D.a_8],x.O)
D.hFN=new C.re("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.I4,D.dum)
D.hFQ=new C.re("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nS)
D.dwq=w([D.hFR,D.hFO,D.hFM,D.hFS,D.hFP,D.hFN,D.hFQ],B.aF("U<re>"))
D.dxZ=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsH=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bsy=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.al7=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dyP=w([D.bsH,D.bsy,D.al7],x.O)
D.bv9=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dyR=w([A.ah3,D.bv9,D.al7],x.O)
D.dzv=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEs=w([D.pj,A.c,D.f0,A.c4,A.b_,A.aE],x.O)
D.e2j=new C.rX("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2i=new C.rX("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e2f=new C.rX("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2n=new C.rX("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2q=new C.rX("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2k=new C.rX("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7r=w([D.e2j,D.e2i,D.e2f,D.e2n,D.e2q,D.e2k],x.F)
D.dDf=w([A.cj,A.rW],x.O)
D.ert={checkers_deluxe:0,tic_tac_go:1}
D.aKi=new B.bq(D.ert,["Checkers Deluxe","Tic Tac Go"],B.aF("bq<q,q>"))
D.eqw={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKt=new B.bq(D.eqw,[1,2,3,4,5,6,7],B.aF("bq<q,H>"))
D.dVL=new C.a87(null)
D.dZj=new C.lT("signature","NGMY Support Team",null,null)
D.dZk=new C.lT("divider","",null,null)
D.Uh=new C.WW(!1,!1,!1,!1)
D.Uj=new C.OS(!1,!1,!1,!1)
D.e_s=new C.OS(!0,!0,!1,!1)
D.Et=new C.at1(0,"swahili")
D.aMj=new C.at1(1,"english")
D.Eu=new C.at1(2,"mix")
D.dok=w([A.iM,A.ic,A.d6],x.O)
D.bTd=new B.a_(63118,"MaterialIcons",!1)
D.e3r=new C.pA(D.dok,A.fY,A.at,"BACKGAMMON","\ud83c\udfb2",D.bTd)
D.bVi=new B.a_(983637,"MaterialIcons",!1)
D.e3s=new C.pA(A.aEI,A.bf,A.er,"EURO WHEEL","\ud83c\udfa1",D.bVi)
D.dyj=w([A.a_,A.aL,A.bz],x.O)
D.e3t=new C.pA(D.dyj,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.Q0)
D.d9P=w([A.dh,A.bp,A.dX],x.O)
D.e3u=new C.pA(D.d9P,A.ay,A.d9,"CONNECT 4","\ud83d\udd34",A.a4l)
D.dsC=w([A.dA,A.fB,A.rW],x.O)
D.e3v=new C.pA(D.dsC,A.wq,A.cj,"PUNTO BANCO","\ud83d\udc8e",A.mo)
D.cRJ=w([A.oj,A.ix,A.mb],x.O)
D.e3w=new C.pA(D.cRJ,A.jE,A.ky,"DOMINOES","\ud83c\udc53",A.arX)
D.dz3=w([A.yH,A.uw,A.hL],x.O)
D.e3x=new C.pA(D.dz3,A.Co,A.hw,"WAR","\u2694\ufe0f",A.a3z)
D.e3y=new C.pA(A.aEB,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nL)
D.dbN=w([A.kw,A.aD,A.dS],x.O)
D.e3z=new C.pA(D.dbN,A.ex,A.fd,"JACKPOT","\ud83c\udfb0",A.nL)
D.drz=w([A.jX,A.lG,A.bC],x.O)
D.e3A=new C.pA(D.drz,A.qj,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zv)
D.d3d=w([A.ic,A.e5,A.at],x.O)
D.bSE=new B.a_(62865,"MaterialIcons",!1)
D.e3B=new C.pA(D.d3d,A.uC,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSE)
D.e3C=new C.pA(A.a7o,A.bm,A.bf,"HOLD'EM","\u2660\ufe0f",A.jt)
D.dzu=w([A.fe,A.fW,A.b3],x.O)
D.bRN=new B.a_(61234,"MaterialIcons",!1)
D.e3D=new C.pA(D.dzu,A.mc,A.aV,"CRAPS","\ud83c\udfb2",D.bRN)
D.d9_=w([A.fn,A.jm,A.bU],x.O)
D.e3E=new C.pA(D.d9_,A.bL,A.ba,"PLINKO","\ud83d\udc8e",A.Q9)
D.bV2=new B.a_(983492,"MaterialIcons",!1)
D.e3F=new C.pA(A.a7o,A.ew,A.bf,"SNOOKER","\ud83c\udfb1",D.bV2)
D.dwP=w([A.fe,A.fW,A.aV],x.O)
D.e3G=new C.pA(D.dwP,A.ux,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hD)
D.dxc=w([A.ec,A.ep,A.bf],x.O)
D.bTE=new B.a_(63324,"MaterialIcons",!1)
D.e3H=new C.pA(D.dxc,A.ws,A.bg,"KLONDIKE","\ud83c\udccf",D.bTE)
D.dp4=w([A.bA,A.bs,A.a_],x.O)
D.e3I=new C.pA(D.dp4,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Ij)
D.r7=new C.Fz(0,"continueGame")
D.r8=new C.Fz(1,"youWin")
D.JJ=new C.Fz(2,"youLose")
D.Us=new C.Fz(3,"draw")
D.aMy=new C.XB(0,"found")
D.emv=new C.XB(1,"foundLive")
D.a9j=new C.XB(2,"notFound")
D.aMz=new C.XB(3,"wrongAccount")
D.euV=new B.r(4,12)
D.eyo=new B.D(A.z0,A.ul,null)
D.bJr=new B.P(4,0,0,3)
D.fA4=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcg=new B.C("NGMY Helper",null,D.fA4,null,null,null,null,null,null,null,null,null)
D.eyF=new B.D(D.bJr,D.hcg,null)
D.bTx=new B.a_(63284,"MaterialIcons",!1)
D.bYO=new B.ae(D.bTx,18,A.pm,null,null,null)
D.fF0=new B.F(!0,A.pm,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.C("Continue",null,D.fF0,null,null,null,null,null,null,null,null,null)
D.dqR=w([D.bYO,A.bn,D.fTQ],x.p)
D.fjr=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqR,null)
D.eyJ=new B.D(A.hS,D.fjr,null)
D.eyZ=new B.D(A.bS,A.ul,null)
D.bsi=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dn2=w([A.hm,A.fW,A.cX,D.bsi],x.O)
D.ccp=new B.a7(A.az,A.aC,A.x,D.dn2,A.DQ,null)
D.b9M=new B.n(null,null,null,null,null,D.ccp,A.n)
D.bB5=new B.bO(D.b9M,A.bk,null,null)
D.eFv=new B.cK(0,0,0,0,null,null,D.bB5,null)
D.c_E=new B.ae(A.wT,11,A.c,null,null,null)
D.eFz=new B.cK(10,12,null,null,null,null,D.c_E,null)
D.cWG=w([A.hN,A.ec,A.ll],x.O)
D.eGc=new B.bT(A.Bx,1.1,A.x,null,0,D.cWG,null,null)
D.bu_=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bn3=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bph=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkv=w([D.bu_,D.bn3,D.bph],x.O)
D.eGk=new B.bT(A.aeD,1.05,A.x,null,0,D.dkv,null,null)
D.eGJ=new B.bT(A.A,0.5,A.x,null,0,E.aBt,null,null)
D.fhl=new B.a3(-18,0,18,1)
D.fhT=new B.a3(-3,-5,3,5)
D.bZf=new B.ae(A.ea,16,D.f0,null,null,null)
D.aYg=new B.F(!0,D.f0,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9L=new B.C("Screenshot added \xb7 tap to change",null,D.aYg,null,null,null,null,null,null,null,null,null)
D.d6H=w([D.bZf,A.bn,D.h9L],x.p)
D.fiO=new B.c7(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.d6H,null)
D.c2n=new B.ae(A.oJ,15,D.f0,null,null,null)
D.h7x=new B.C("Refresh",null,D.aYg,null,null,null,null,null,null,null,null,null)
D.d9a=w([D.c2n,A.df,D.h7x],x.p)
D.fiQ=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d9a,null)
D.eqQ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fl2=new B.di(D.eqQ,3,x.M)
D.eqE={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fle=new B.di(D.eqE,36,x.M)
D.eqH={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fls=new B.di(D.eqH,6,x.M)
D.esf={memory:0,typing:1,scramble:2,pattern:3}
D.nc=new B.di(D.esf,4,x.M)
D.fo8=new B.au(276,276)
D.foS=new B.a5(13,null,null,null)
D.bge=new B.fm(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fp3=new B.a5(26,26,D.bge,null)
D.fpX=new B.hN(8,0,0,1,null)
D.haY=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVD=new B.b0(D.haY,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOL=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.b0(D.fOL,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPV=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new B.b0(D.fPV,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h7I=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ftL=new B.b0(D.h7I,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bt8=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fDU=new B.F(!0,D.bt8,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwW=new B.eu("$",null,null,A.cN,null,null,null,null,null,null,D.fDU)
D.fxb=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxu=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new B.F(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy1=new B.F(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fye=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyn=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzi=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzU=new B.F(!0,D.f0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new B.F(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAN=new B.F(!0,A.Ch,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWZ=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new B.F(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new B.F(!0,A.aa,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fD2=new B.F(!0,A.aa,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEB=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fF8=new B.F(!0,A.je,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bli=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fFq=new B.F(!0,D.bli,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGV=new B.F(!0,A.ay,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHk=new B.F(!0,D.aje,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXH=new B.F(!0,A.Ch,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHF=new B.F(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHG=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHZ=new B.F(!0,A.Ch,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xK=new B.F(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bql=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fId=new B.F(!0,D.bql,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIP=new B.F(!0,A.TW,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJW=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK2=new B.F(!0,A.iB,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK6=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKC=new B.F(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKG=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLD=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new B.F(!0,A.aa,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMl=new B.F(!0,A.bg,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMQ=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMU=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.C("Value per pair",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fNX=new B.C("Restore now",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fOw=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXr=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new B.C("AVAILABLE PLANS",null,D.aXr,null,null,null,null,null,null,null,null,null)
D.fOJ=new B.C("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fPj=new B.C("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fAC=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ2=new B.C("PLAN VALUE",null,D.fAC,null,null,null,null,null,null,null,null,null)
D.fQ5=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fQs=new B.C("Deposit",null,A.WE,null,null,null,null,null,null,null,null,null)
D.fKY=new B.F(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRv=new B.C("JACKPOT SLOTS",null,D.fKY,null,null,null,null,null,null,null,null,null)
D.fRO=new B.C("Restore",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fAI=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRT=new B.C("YOUR NUMBER",null,D.fAI,null,null,null,null,null,null,null,null,null)
D.fS9=new B.C("SPIN REELS",null,E.acd,null,null,null,null,null,null,null,null,null)
D.fSD=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fTa=new B.C("Perfect Score Profit",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fTO=new B.C("Join room",null,A.iI,null,null,null,null,null,null,null,null,null)
D.fW0=new B.C("Add payment screenshot",null,A.j4,null,null,null,null,null,null,null,null,null)
D.fWg=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fKa=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new B.C("INVITE A PLAYER",null,D.fKa,null,null,null,null,null,null,null,null,null)
D.fJd=new B.F(!0,A.Zb,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXc=new B.C("NGMY GOLD LEADER",null,D.fJd,null,null,null,null,null,null,null,null,null)
D.fXJ=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fY8=new B.C("Invest & Play",null,A.m1,null,null,null,null,null,null,null,null,null)
D.aXm=new B.F(!0,D.yx,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYA=new B.C("VALID THRU",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.aY3=new B.F(!0,A.aF,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYI=new B.C("DEALER",null,D.aY3,null,null,null,null,null,null,null,null,null)
D.fYP=new B.C("CARDHOLDER",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.fIF=new B.F(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZy=new B.C("NGMY PLATINUM",null,D.fIF,null,null,null,null,null,null,null,null,null)
D.fMa=new B.F(!0,A.qx,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new B.C("EARNED SO FAR",null,D.fMa,null,null,null,null,null,null,null,null,null)
D.h_T=new B.C("VS",null,A.ace,null,null,null,null,null,null,null,null,null)
D.h0j=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h0G=new B.C("One day left",null,A.ac4,null,A.K,null,null,null,null,null,null,null)
D.h11=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.F9,null,null,null,null,null,null,null,null,null)
D.h12=new B.C("Multiplayer invite",null,A.iI,null,null,null,null,null,null,null,null,null)
D.h1e=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fz4=new B.F(!0,A.TW,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1k=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fz4,null,null,null,null,null,null,null,null,null)
D.h1v=new B.C("Browse Topics",null,A.fa,null,null,null,null,null,null,null,null,null)
D.fxY=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1M=new B.C("Investment Required",null,D.fxY,null,A.K,null,null,null,null,null,null,null)
D.h3i=new B.C("Network Status",null,A.aWC,null,null,null,null,null,null,null,null,null)
D.aWJ=new B.F(!0,A.aa,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3W=new B.C("Their account email",null,D.aWJ,null,null,null,null,null,null,null,null,null)
D.h4g=new B.C("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4h=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h4x=new B.C("ACTIVE ASSET",null,D.aXr,null,null,null,null,null,null,null,null,null)
D.h4W=new B.C("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h50=new B.C("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5r=new B.C("YOUR HAND",null,D.aY3,null,null,null,null,null,null,null,null,null)
D.h62=new B.C("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h65=new B.C("I sent it \u2014 submit deposit",null,A.m1,null,null,null,null,null,null,null,null,null)
D.h6V=new B.C("Back",null,A.B5,null,null,null,null,null,null,null,null,null)
D.fN6=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h72=new B.C("DEAL / PLAY ROUND",null,D.fN6,null,null,null,null,null,null,null,null,null)
D.h7f=new B.C("Got it \u2014 keep chatting",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h7p=new B.C("3 Messages Left",null,A.aXU,null,null,null,null,null,null,null,null,null)
D.h7X=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h85=new B.C("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h8s=new B.C("How many games?",null,D.aWJ,null,null,null,null,null,null,null,null,null)
D.fI6=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8E=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fI6,null,A.K,null,null,null,null,null,null,null)
D.hae=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hat=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fNy=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc8=new B.C("NGMY  WALLET",null,D.fNy,null,null,null,null,null,null,null,null,null)
D.hc9=new B.C("Select Your Bet",null,A.h7,null,null,null,null,null,null,null,null,null)
D.hBy=new B.bl("history",x.W)
D.hBV=new B.bl("ngmy_local_home",x.W)
D.hBW=new B.bl("ngmy_local_invest",x.W)
D.hBX=new B.bl("ngmy_local_wallet",x.W)
D.hFt=new C.a_P(null)
D.b26=new C.aDK(0,"grid")
D.b27=new C.aDK(1,"questions")
D.hGx=new C.aDK(2,"answer")
D.hJ3=new C.a0I(null)})();(function staticFields(){$.hd0=B.aR(x.N)
$.hEu=B.S(x.N,x.k)
$.hiV=null
$.hiJ=B.S(x.N,B.aF("KA"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iEj","bHV",()=>C.ilF())
w($,"iE5","hNv",()=>{var v=null,u=B.fz(v,A.cy,v,v,v,D.fwW,A.a7,A.c0,v,A.dJ,A.c1)
u.ep()
return u})})()};
(a=>{a["iXPlmWG4VuRKg1zQ08p27w40/wM="]=a.current})($__dart_deferred_initializers__);