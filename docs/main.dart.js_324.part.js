((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,P,K,A2,L,Q,A3,E,R,M,A4,A5,A6,S,N,A7,A8,T,A9,Aa,U,Ab,V,Ac,Ad,Ae,W,Af,G,X,Ag,C={
hw6(d,e,f){var w=null,v=f.k("GW<0>"),u=new B.GW(w,w,w,w,v)
$.vZ()
u.d=new C.cBS(new B.vw(),e,u,f,d)
return new B.i6(u,v.k("i6<1>"))},
cBS:function cBS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBT:function cBT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBP:function cBP(d){this.a=d},
cBQ:function cBQ(d,e){this.a=d
this.b=e},
cBR:function cBR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cBO:function cBO(d,e,f){this.a=d
this.b=e
this.c=f},
buO:function buO(d){this.a=d},
hw5(d,e,f,g){return new C.axX(d,e,f,null,g.k("axX<0>"))},
G7:function G7(){},
aKB:function aKB(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fei:function fei(d){this.a=d},
feh:function feh(d,e){this.a=d
this.b=e},
fek:function fek(d){this.a=d},
fef:function fef(d,e,f){this.a=d
this.b=e
this.c=f},
fej:function fej(d){this.a=d},
feg:function feg(d){this.a=d},
axX:function axX(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
inO(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.b1(w,1))
return w},
hH2(d){var w=C.inO(d)
if(w.length===0)return""
return"$"+w},
fNW(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fNW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.V(Date.now(),0,!1).bS(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbt())o=o===t.gbt()&&p.b<t.gcG()
else o=!0
if(o){w=4
break}if(q.x!==A.cv){w=4
break}if(q.d!==A.h7){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cR(m,"game payout:",0))if(!B.cR(m,"game partial:",0)){if(!B.cR(m,"multiplayer payout:",0))o=B.cR(m,"dice",0)&&q.e===A.fx
else o=l
l=o}if(!l){w=4
break}if(B.cR(m,"game payout:",0))k=A.a.i(A.a.b1(n,A.a.co(m,"game payout:")+12))
else if(B.cR(m,"game partial:",0)){k=A.a.i(A.a.b1(n,A.a.co(m,"game partial:")+13))
j=A.a.co(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else if(B.cR(m,"multiplayer payout:",0)){k=A.a.i(A.a.b1(n,A.a.co(m,"multiplayer payout:")+19))
j=A.a.co(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else k=B.cR(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.ve(q.c,p,n,d,o,null,q.a,!0),$async$fNW)
case 6:case 4:e.length===s||(0,B.J)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fNW,v)},
isF(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ioQ(d,e,f){return A.d.aU(e,new C.fRE(f,A.a.i(d.toLowerCase())))},
fRv(d){var w
C.hsf(d)
w=d.c6
return B.bp(new B.N(w,new C.fRw(),B.U(w).k("N<1,@>")),!0,x.N)},
ieq(d,e,f){var w,v,u,t,s,r,q=null,p=A.bX,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eh().gib().b
if(u.a===0)t=1
else{new B.b7(u,B.a3(u).k("b7<2>")).gH(0)
u=$.le()
s=u.d
t=s==null?u.ghn():s}w=A.h.cC(f*t)
v=new C.fxQ(f)
if(J.d5(n,"data:image"))try{u=B.fX(A.cJ.aK(A.d.gal(J.lR(n,","))),A.z,w,new C.fxN(v),A.h2,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d5(n,"supabase://"))return new B.li(B.a34(n),new C.fxO(f,e,p,w,v),q,q,x.gh)
return B.kK(n,A.z,w,new C.fxP(v),A.h2,p,!0,e,q,q,f)},
hgb(d,e){return new B.a5(e,e,B.i2(C.ieq(d,e,e),A.aq),null)},
i6u(){var w,v,u=B.a([],x._),t=x.N,s=B.C(D.dvX,x.gm)
for(w=0;w<36;++w){v=A.DY[w]
s.push(new C.rf(v.a,v.b,v.c,v.e,v.f))}return new C.aCK(u,B.T(t,t),s)},
fRE:function fRE(d,e){this.a=d
this.b=e},
fRw:function fRw(){},
fxQ:function fxQ(d){this.a=d},
fxN:function fxN(d){this.a=d},
fxO:function fxO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxM:function fxM(d){this.a=d},
fxP:function fxP(d){this.a=d},
an7:function an7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
rf:function rf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aCK:function aCK(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlO:function dlO(d,e){this.a=d
this.b=e},
dm5:function dm5(){},
dm6:function dm6(d){this.a=d},
dlW:function dlW(d,e){this.a=d
this.b=e},
dlV:function dlV(){},
dlX:function dlX(d){this.a=d},
dlU:function dlU(){},
dlZ:function dlZ(d){this.a=d},
dlY:function dlY(){},
dlR:function dlR(d){this.a=d},
dlP:function dlP(d){this.a=d},
dlQ:function dlQ(d){this.a=d},
dlS:function dlS(d){this.a=d},
dlT:function dlT(d){this.a=d},
dlJ:function dlJ(d,e){this.a=d
this.b=e},
dlK:function dlK(d,e){this.a=d
this.b=e},
dlH:function dlH(d){this.a=d},
dlI:function dlI(d){this.a=d},
dlL:function dlL(d){this.a=d},
dlM:function dlM(d){this.a=d},
dlN:function dlN(d,e,f){this.a=d
this.b=e
this.c=f},
dlG:function dlG(d,e){this.a=d
this.b=e},
dlF:function dlF(d,e){this.a=d
this.b=e},
dlE:function dlE(d,e){this.a=d
this.b=e},
dm4:function dm4(d){this.a=d},
dm2:function dm2(d,e,f){this.a=d
this.b=e
this.c=f},
dm1:function dm1(d,e,f){this.a=d
this.b=e
this.c=f},
dm0:function dm0(d,e){this.a=d
this.b=e},
dm_:function dm_(){},
dm3:function dm3(d){this.a=d},
aFB:function aFB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmA:function bmA(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e_e:function e_e(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_f:function e_f(d){this.a=d},
e_c:function e_c(){},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_b:function e_b(d){this.a=d},
e_h:function e_h(d){this.a=d},
an6:function an6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCJ:function aCJ(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dlx:function dlx(d){this.a=d},
dlA:function dlA(d){this.a=d},
dlB:function dlB(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlz:function dlz(d,e){this.a=d
this.b=e},
dly:function dly(d,e){this.a=d
this.b=e},
an8:function an8(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCL:function aCL(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bH=_.bi=_.aZ=_.b2=null
_.aY=!1
_.bx=_.bn=null
_.c6=!1
_.bT=_.cT=""
_.c=_.a=_.bI=null},
dnp:function dnp(d,e){this.a=d
this.b=e},
dns:function dns(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnu:function dnu(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnw:function dnw(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmG:function dmG(d,e){this.a=d
this.b=e},
dn8:function dn8(d){this.a=d},
dn9:function dn9(){},
dmV:function dmV(d,e,f){this.a=d
this.b=e
this.c=f},
dmW:function dmW(d){this.a=d},
dmX:function dmX(d,e,f){this.a=d
this.b=e
this.c=f},
dmY:function dmY(d,e){this.a=d
this.b=e},
dmZ:function dmZ(){},
dm7:function dm7(d){this.a=d},
dmE:function dmE(d,e){this.a=d
this.b=e},
dna:function dna(){},
dnj:function dnj(){},
dn7:function dn7(d){this.a=d},
dn6:function dn6(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmD:function dmD(){},
dne:function dne(){},
dnf:function dnf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dng:function dng(d,e,f){this.a=d
this.b=e
this.c=f},
dm8:function dm8(){},
dm9:function dm9(d){this.a=d},
dma:function dma(){},
dmO:function dmO(d,e){this.a=d
this.b=e},
dmP:function dmP(d,e,f){this.a=d
this.b=e
this.c=f},
dmQ:function dmQ(d){this.a=d},
dmN:function dmN(d){this.a=d},
dn_:function dn_(d){this.a=d},
dn0:function dn0(){},
dn1:function dn1(d){this.a=d},
dn2:function dn2(){},
dn3:function dn3(d){this.a=d},
dn4:function dn4(){},
dnd:function dnd(d,e,f){this.a=d
this.b=e
this.c=f},
dmR:function dmR(d){this.a=d},
dmS:function dmS(d,e){this.a=d
this.b=e},
dmT:function dmT(d){this.a=d},
dmU:function dmU(d){this.a=d},
dnh:function dnh(d){this.a=d},
dni:function dni(d){this.a=d},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d,e){this.a=d
this.b=e},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
dnc:function dnc(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
dn5:function dn5(d,e,f){this.a=d
this.b=e
this.c=f},
dmK:function dmK(d,e,f){this.a=d
this.b=e
this.c=f},
dmL:function dmL(){},
dnk:function dnk(d){this.a=d},
dnl:function dnl(d){this.a=d},
dnm:function dnm(d){this.a=d},
dno:function dno(d){this.a=d},
dnn:function dnn(){},
dmJ:function dmJ(d,e,f){this.a=d
this.b=e
this.c=f},
dmI:function dmI(d,e){this.a=d
this.b=e},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmr:function dmr(d){this.a=d},
dmq:function dmq(d,e){this.a=d
this.b=e},
dms:function dms(d){this.a=d},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmt:function dmt(d){this.a=d},
dmo:function dmo(){},
dmu:function dmu(d){this.a=d},
dmm:function dmm(){},
dmn:function dmn(d){this.a=d},
dmv:function dmv(d){this.a=d},
dml:function dml(d,e){this.a=d
this.b=e},
dmw:function dmw(d){this.a=d},
dmk:function dmk(d,e){this.a=d
this.b=e},
dmg:function dmg(d,e){this.a=d
this.b=e},
dmx:function dmx(d){this.a=d},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmy:function dmy(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmf:function dmf(d,e){this.a=d
this.b=e},
dmz:function dmz(d,e,f){this.a=d
this.b=e
this.c=f},
dmA:function dmA(d){this.a=d},
dmh:function dmh(){},
dmB:function dmB(d){this.a=d},
anW:function anW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjE:function bjE(){this.c=this.a=null},
dqZ:function dqZ(d,e){this.a=d
this.b=e},
dqY:function dqY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajY:function ajY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azM:function azM(d,e,f,g,h,i,j,k,l,m){var _=this
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
cNS:function cNS(d){this.a=d},
cNc:function cNc(d,e){this.a=d
this.b=e},
cN2:function cN2(d){this.a=d},
cN3:function cN3(d){this.a=d},
cNm:function cNm(d){this.a=d},
cNj:function cNj(d){this.a=d},
cNk:function cNk(d){this.a=d},
cNl:function cNl(d,e,f){this.a=d
this.b=e
this.c=f},
cNe:function cNe(d){this.a=d},
cNd:function cNd(d){this.a=d},
cN4:function cN4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNh:function cNh(d){this.a=d},
cNg:function cNg(d){this.a=d},
cNf:function cNf(d,e){this.a=d
this.b=e},
cNF:function cNF(d){this.a=d},
cNz:function cNz(d){this.a=d},
cNC:function cNC(d){this.a=d},
cNB:function cNB(){},
cNy:function cNy(d){this.a=d},
cNA:function cNA(d,e){this.a=d
this.b=e},
cNx:function cNx(){},
cN9:function cN9(){},
cNa:function cNa(d,e){this.a=d
this.b=e},
cNb:function cNb(d){this.a=d},
cN7:function cN7(d,e){this.a=d
this.b=e},
cN8:function cN8(d,e){this.a=d
this.b=e},
cNp:function cNp(d,e){this.a=d
this.b=e},
cNi:function cNi(d){this.a=d},
cNq:function cNq(d){this.a=d},
cNr:function cNr(d,e){this.a=d
this.b=e},
cNs:function cNs(d,e){this.a=d
this.b=e},
cNt:function cNt(d,e){this.a=d
this.b=e},
cNu:function cNu(d,e,f){this.a=d
this.b=e
this.c=f},
cNv:function cNv(d){this.a=d},
cNw:function cNw(d){this.a=d},
cNn:function cNn(d,e){this.a=d
this.b=e},
cNE:function cNE(d){this.a=d},
cNo:function cNo(d,e){this.a=d
this.b=e},
cNR:function cNR(d){this.a=d},
cNK:function cNK(d){this.a=d},
cNN:function cNN(d){this.a=d},
cNH:function cNH(d,e){this.a=d
this.b=e},
cNL:function cNL(){},
cNM:function cNM(d,e){this.a=d
this.b=e},
cNI:function cNI(d){this.a=d},
cNJ:function cNJ(d){this.a=d},
cNP:function cNP(){},
cNO:function cNO(d){this.a=d},
cNG:function cNG(d,e){this.a=d
this.b=e},
cNQ:function cNQ(d){this.a=d},
cN5:function cN5(d){this.a=d},
cND:function cND(d,e){this.a=d
this.b=e},
cN6:function cN6(d,e,f){this.a=d
this.b=e
this.c=f},
aN6:function aN6(){},
aN7:function aN7(){},
aN8:function aN8(){},
aO5:function aO5(){},
c4z(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4A(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hUO(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_D(d,e){return C.hUP(d,e)},
hUP(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_D=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3s(d),$async$b_D)
case 3:p=g
if(p!=null){try{t=A.W.aP(0,p.c,null)
if(x.f.b(t)){s=C.hqA(B.a1(t,x.N,x.z))
if(s==null){u=new B.GR(D.a9i,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4z(s,e,p.b)){u=new B.GR(D.aMz,null)
w=1
break}r=p.a?D.elF:D.aMy
u=new B.GR(r,s)
w=1
break}}catch(o){}u=new B.GR(D.a9i,null)
w=1
break}s=C.hqB(d)
if(s==null){u=new B.GR(D.a9i,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4z(s,e,null)){u=new B.GR(D.aMz,null)
w=1
break}u=new B.GR(D.aMy,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_D,v)},
hqB(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d5(w,"\ufeff"))w=J.nv(w,1)
v=!1
if(J.d5(w,"NGMYSNAP1|")){v=!0
w=A.cb.cD(0,A.cJ.aK(J.nv(w,10)))}u=A.W.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hUN(t):C.hqA(t)
return s}catch(r){return null}},
hUN(d){var w,v,u,t,s,r,q,p,o,n=new C.c4w(),m=new C.c4v(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aJ(w.h(0,"d"))
p=new B.w2(v,u,t,s,r,A.h.M(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.z(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=B.aJ(d.h(0,"qn"))
if(o==null)o=0
return new B.a7n("","",v,u,t,s,r,q,n,m,o,p,A.iD,new B.V(Date.now(),0,!1),-1)},
hqA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4y()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=B.a1(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=B.aJ(u.h(0,"amount"))
if(s==null)s=0
r=B.aJ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new B.V(Date.now(),0,!1)
p=B.aJ(u.h(0,"totalEarned"))
if(p==null)p=0
o=B.aJ(u.h(0,"daysClockedIn"))
n=new B.w2(t,s,r,q,p,A.h.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.C(new B.ec(J.b8(m,new C.c4x(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=B.aJ(d.h(0,"accountBalance"))
if(q==null)q=0
p=B.aJ(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.z(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=B.aJ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=B.aJ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new B.V(Date.now(),0,!1)
f=B.aJ(d.h(0,"walletStateRevision"))
f=f==null?null:A.h.M(f)
return new B.a7n(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
ham(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$ham=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4u(d,e,f,g)
s=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hm(B.KX(t.f2(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ham,v)},
Xw:function Xw(d,e){this.a=d
this.b=e},
c4w:function c4w(){},
c4v:function c4v(){},
c4y:function c4y(){},
c4x:function c4x(d){this.a=d},
ihz(d){return B.cg(null,A.b5,!0,null,new C.fCr(),d,null,!0,!0,x.N)},
ihM(d,e,f,g){return B.cg(null,A.b5,!0,null,new C.fDE(g,f,e),d,null,!0,!0,x.y)},
aps:function aps(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aER:function aER(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dHw:function dHw(d,e){this.a=d
this.b=e},
dHx:function dHx(d){this.a=d},
dHn:function dHn(d,e){this.a=d
this.b=e},
dHl:function dHl(d){this.a=d},
dHv:function dHv(d){this.a=d},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHk:function dHk(d,e){this.a=d
this.b=e},
dHj:function dHj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHm:function dHm(d){this.a=d},
dHt:function dHt(){},
dHr:function dHr(d){this.a=d},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHo:function dHo(){},
dHp:function dHp(d,e){this.a=d
this.b=e},
dHq:function dHq(d,e){this.a=d
this.b=e},
dHy:function dHy(d){this.a=d},
a1Z:function a1Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvk:function bvk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0C:function a0C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm5:function bm5(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dHC:function dHC(d){this.a=d},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHA:function dHA(d,e){this.a=d
this.b=e},
dHB:function dHB(d){this.a=d},
a0D:function a0D(d){this.a=d},
bm6:function bm6(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dHD:function dHD(d,e){this.a=d
this.b=e},
fCr:function fCr(){},
fDE:function fDE(d,e,f){this.a=d
this.b=e
this.c=f},
ag1:function ag1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7O:function f7O(d){this.a=d},
f7P:function f7P(d){this.a=d},
Rg:function Rg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_K:function a_K(d){this.a=d},
aC2:function aC2(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgv:function dgv(d){this.a=d},
dgs:function dgs(){},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
VE(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O_(s),$async$VE)
case 3:t=h
J.c5(t,B.I(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apJ(s,t),$async$VE)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VE,v)},
hV6(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.U(d).k("Y<1>")
v=B.C(new B.Y(d,new C.c5i(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.J)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5i:function c5i(){},
inb(d){return A.d.dL(A.DY,new C.fNQ(d),new C.fNR()).r},
fNQ:function fNQ(d){this.a=d},
fNR:function fNR(){},
apZ:function apZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmd:function bmd(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dO_:function dO_(d){this.a=d},
dNZ:function dNZ(d){this.a=d},
dNR:function dNR(d,e,f){this.a=d
this.b=e
this.c=f},
dNW:function dNW(d){this.a=d},
dNT:function dNT(d,e,f){this.a=d
this.b=e
this.c=f},
dNX:function dNX(d){this.a=d},
dNS:function dNS(d){this.a=d},
dNY:function dNY(d){this.a=d},
dNU:function dNU(d){this.a=d},
dNV:function dNV(d){this.a=d},
hsf(d){var w=B.cdu(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bx=0
d.c6=B.a([],x.s)},
hsh(d){return B.cg(null,A.w.j(0.82),!0,null,new C.cdz(),d,null,!0,!0,x.H)},
a82:function a82(d){this.a=d},
cdz:function cdz(){},
cdy:function cdy(d){this.a=d},
hGa(){var w=new B.V(Date.now(),0,!1),v=w.bS(B.dw(4-B.mA(w),0,0,0,0,0).a),u=B.c0(B.bC(v),1,4,0,0,0,0,0)
return""+B.bC(v)+"-W"+A.a.b0(A.o.v(1+A.h.bg(A.o.ar(v.bB(B.c0(B.bC(u),B.bM(u),B.bY(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fsF(d,e){var w,v,u,t,s,r,q=B.H2(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.u(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c5(r,"+local.ngmy")?A.a.aA(r,0,r.length-11):r)===q)return t}t=B.I(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
ic0(d,e){var w,v,u,t,s,r,q,p=B.H2(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===p){w=B.aJ(s.h(t,"winsLeft"))
w=w==null?null:A.h.M(w)
return w==null?0:w}}return 0},
iwF(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H2(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===n){w=B.aJ(s.h(t,o))
w=w==null?null:A.h.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
iir(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H2(b5),b2=B.ceQ(),b3=C.hGa()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c5(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
q=B.aJ(r.h(s,a4))
o=q==null?a1:A.h.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.u(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a8(u)
v=B.aJ(w.h(u,a4))
v=v==null?a1:A.h.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aJ(w.h(u,"outcome"))
w=w==null?a1:A.h.M(w)
return w==null?1:w}n=new C.fEs()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.u(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.u(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fsF(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.T(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cd(w,B.a3(w).k("cd<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a8(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?B.a1(v.a(j.h(0,h)),r,q):B.T(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=B.aJ(d.h(0,a6))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.cb(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aJ(d.h(0,a8))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cb(h,a1)}}}return a1},
hCp(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h4()?1:2
return s},
hgx(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
iis(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H2(a3),a1=new C.fEt()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c5(p,"+local.ngmy")?A.a.aA(p,0,p.length-11):p)!==a0)continue
if(a1.$2(s,h)+a1.$2(s,g)+a1.$2(s,f)<=0)continue
if(u!=null){r=r.h(s,e)
r=J.k(r==null?"":r)
q=J.u(u,e)
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
q=new C.fEu(v+r+q>1,l)
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
return C.hgx(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
iiq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aJ(i.h(0,"wins")),g=h==null?m:A.h.M(h)
if(g==null)g=0
h=B.aJ(i.h(0,"loses"))
w=h==null?m:A.h.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hGa():B.ceQ()
t=v+"|"+u
s=C.fsF(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=B.aJ(h.h(s,k))
q=r==null?m:A.h.M(r)
if(q==null)q=0
r=B.aJ(h.h(s,j))
p=r==null?m:A.h.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aw(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
iqZ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.blH()
w=C.iis(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahy(d,a0,w)
return w}v=C.iir(d,a0)
if(v!=null){if(v===3)++d.f
C.ahy(d,a0,v)
return v}u=C.iiq(d,a0,a1)
if(u!=null)return new C.fV3(d,a1,a0).$1(u)
t=C.fsF(d,a0)
s=J.a8(t)
r=B.aJ(s.h(t,"winStreak"))
q=r==null?null:A.h.M(r)
if(q==null)q=0
s=B.aJ(s.h(t,"loseStreak"))
p=s==null?null:A.h.M(s)
if(p==null)p=0
o=new C.fV5(d,a1)
if(C.ic0(d,a0)>0){n=o.$0()
C.iwF(d,a0)
C.ahy(d,a0,n)
return n}if(q>=d.c){n=new C.fV4(d,a1).$0()
C.ahy(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahy(d,a0,n)
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
if(e===3&&d.f>=d.e)e=a1.h4()?1:2}else{s=l.length
if(s!==0)e=l[a1.aw(s)]
else e=f?1:-1}if(e===3)++d.f
C.ahy(d,a0,e)
return e},
ceI(d){var w=0,v=B.j(x.y),u
var $async$ceI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ceH(d),$async$ceI)
case 3:if(f){u=!0
w=1
break}u=B.ceH(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ceI,v)},
ahy(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fsF(d,e),s=J.a8(t),r=B.aJ(s.h(t,v)),q=r==null?null:A.h.M(r)
if(q==null)q=0
r=B.aJ(s.h(t,u))
w=r==null?null:A.h.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fEs:function fEs(){},
fEt:function fEt(){},
fEu:function fEu(d,e){this.a=d
this.b=e},
fV3:function fV3(d,e,f){this.a=d
this.b=e
this.c=f},
fV5:function fV5(d,e){this.a=d
this.b=e},
fV4:function fV4(d,e){this.a=d
this.b=e},
apr:function apr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm3:function bm3(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.b9$=e
_.c=_.a=null},
dH8:function dH8(d){this.a=d},
dH7:function dH7(d){this.a=d},
dH9:function dH9(d){this.a=d},
dH6:function dH6(d,e){this.a=d
this.b=e},
aNE:function aNE(){},
Or:function Or(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cg_:function cg_(){},
cfZ:function cfZ(){},
arL:function arL(d,e,f){this.c=d
this.d=e
this.a=f},
hbm(d,e,f){return B.cg(null,A.w.j(0.88),!0,null,new C.cgr(f,e),d,null,!0,!0,x.H)},
hYV(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
Oz:function Oz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgr:function cgr(d,e){this.a=d
this.b=e},
bmO:function bmO(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6L:function e6L(){},
e6M:function e6M(){},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6O:function e6O(d,e){this.a=d
this.b=e},
aOf:function aOf(){},
hG6(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.ble(new C.fQc(w))
w=w.a
return w==null?null:w.c.a},
hFZ(d){$.aU.x1$.push(new C.fQ_(d))},
hGj(d){var w=$.tu().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hG6(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q4())w.ek()},
hGi(d){C.hCx(d,0)},
hCx(d,e){var w,v
if(e>4)return
w=d==null?$.tu().gbl():d
if(w==null||w.c==null)return
v=C.hG6(w)
if(v==="GameCenterScreen")return
if(D.fiy.q(0,v)&&w.q4()){w.ek()
$.aU.x1$.push(new C.fAL(w,e))}},
aSf(d,e,f){return B.eb(B.cm(new C.fRz(e,d,f)),e,!0)},
fQc:function fQc(d){this.a=d},
fQ_:function fQ_(d){this.a=d},
fPZ:function fPZ(d){this.a=d},
fAL:function fAL(d,e){this.a=d
this.b=e},
fRz:function fRz(d,e,f){this.a=d
this.b=e
this.c=f},
arP(d,e){var w=0,v=B.j(x.H),u
var $async$arP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WJ(e)
w=2
return B.b(B.arO(d,u),$async$arP)
case 2:B.a8F(d,u)
return B.h(null,v)}})
return B.i($async$arP,v)},
ve(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$ve=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z0(g)
if(o.length===0){w=1
break}t=e==null?B.M6(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OA(o),$async$ve)
case 3:q=m
if(j!=null&&j.length!==0&&J.rq(q,new C.cgF(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.n7(q,0,new B.jw(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arP(o,q),$async$ve)
case 4:if(i==null||r==null||s)C.a8H(o).bG(new C.cgG(),x.S).eF(new C.cgH())
case 1:return B.h(u,v)}})
return B.i($async$ve,v)},
a8H(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hHk
m=B.z0(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OA(m),$async$a8H)
case 3:t=f
s=J.cE(t)
if(!s.aU(t,new C.cgE())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8H)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.W.av(s.h(t,o).aj(),null)!==A.W.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arP(m,r),$async$a8H)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8H,v)},
b25(d){var w=0,v=B.j(x.S),u,t
var $async$b25=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hbp(d,!1),$async$b25)
case 3:t=J
w=4
return B.b(C.arQ(d,!1),$async$b25)
case 4:u=t.dI(f,new C.cgD(new B.V(Date.now(),0,!1).bS(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b25,v)},
arQ(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z0(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OA(r),$async$arQ)
case 3:t=g
s=B.WJ(t)
if(s.length!==J.ad(t))C.arP(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arQ,v)},
ioK(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bB(d).a,r=A.o.ar(s,6e7)
if(r<1)return"Just now"
w=A.o.ar(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ar(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12)
s=A.iX[B.bM(d)-1]
r=B.bC(d)===B.bC(t)?"":", "+B.bC(d)
w=A.a.b0(A.o.v(B.fV(d)),2,"0")
u=B.dg(d)<12?"AM":"PM"
return s+" "+B.bY(d)+r+" \xb7 "+v+":"+w+" "+u},
bDs(d){var w=A.h.ad(Math.abs(d),2).split(".")
return"$"+B.ox(w[0],B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fxv(),null)+"."+w[1]},
bH8(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bH8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arQ(e,!1),$async$bH8)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hbp(e,!0).bG(new C.h34(e),t).bG(new C.h35(),t).eF(new C.h36())
w=4
return B.b(B.bU(A.L,null,new C.h37(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bH8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bH8,v)},
her(d,e,f){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.dx(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hy,w,w,w),1)},
e6Q(d,e,f){var w=null,v=A.w.j(0.22),u=B.l(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dx(A.dM,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.OP,w,w,w),1)},
cgF:function cgF(d){this.a=d},
cgG:function cgG(){},
cgH:function cgH(){},
cgE:function cgE(){},
cgD:function cgD(d){this.a=d},
fxv:function fxv(){},
h34:function h34(d){this.a=d},
h35:function h35(){},
h36:function h36(){},
h37:function h37(d,e){this.a=d
this.b=e},
h33:function h33(d,e){this.a=d
this.b=e},
h32:function h32(d){this.a=d},
aeT:function aeT(d,e){this.c=d
this.a=e},
e6S:function e6S(){},
e6T:function e6T(){},
e6U:function e6U(){},
e6V:function e6V(d){this.a=d},
e6X:function e6X(){},
e6W:function e6W(d){this.a=d},
aeS:function aeS(d,e){this.c=d
this.a=e},
e6R:function e6R(){},
bH9(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hQ(A.b5,!1,w,d,new C.h3a(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h3a:function h3a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h38:function h38(d,e){this.a=d
this.b=e},
h39:function h39(d,e){this.a=d
this.b=e},
aCM:function aCM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bik:function bik(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
dny:function dny(d,e){this.a=d
this.b=e},
dnx:function dnx(){},
afg:function afg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aN9:function aN9(){},
asz(d,e,f){return new C.b2W(f,d,e,null)},
hZA(d){var w=B.a(A.h.ad(d,2).split("."),x.s),v=B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.ox(w[0],v,new C.cim(),null)
return A.d.aN(w,".")},
b28(){var w=$.tZ
if((w>0?$.tZ=w-1:w)<=0)$.tZ=0},
aiE(d,e){var w=0,v=B.j(x.H),u
var $async$aiE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hjw
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiE)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiE,v)},
b2W:function b2W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cin:function cin(d){this.a=d},
cim:function cim(){},
O2:function O2(){},
c5P:function c5P(){},
hiS(d){if(d>0)return"+"+d
return""+d},
hi6(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fRA(d,e){var w=J.u(e,d)
if(w==null)w=B.fQm().h(0,d)
return w==null?90:w},
fwq(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.kd(u,new C.fwr(),u.$ti.k("kd<ci.E,n>")))
A.d.e0(v,e)
return v},
hBt(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pQ(s,3,s.$ti.k("ci.E")))
A.d.e0(t,e)
return t},
ijQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e0()
b2.cU(42)
for(w=x.s,v=0;v<200;++v){u=A.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aw(12)]
s=[2,3,5,6,7,10,11,13][b2.aw(8)]
r=A.h.M(Math.sqrt(t))
q=2+b2.aw(4)
p=A.o.ar(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.JE("Simplify \u221a("+t*s+"x^"+q+")",m,C.hBt(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JE("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fwq(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JE("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fwq(g,b2)))}else b1.push(new C.JE("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fwq(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h4()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.h.fK(a4)?""+A.h.M(a4):"\u221a"+a3
b1.push(new C.JE("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fwq(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JE("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hBt(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
iuK(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.ds(B.a(d.split(""),u),x.bJ).hg(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hg(t)
if(v!==d)return v}return new B.ds(t,x.bJ).hg(0)},
JE:function JE(d,e,f){this.a=d
this.b=e
this.c=f},
fwr:function fwr(){},
ar8:function ar8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFC:function aFC(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_p:function e_p(d){this.a=d},
e_j:function e_j(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_r:function e_r(d,e){this.a=d
this.b=e},
arR:function arR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFS:function aFS(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e72:function e72(d,e,f){this.a=d
this.b=e
this.c=f},
e73:function e73(d){this.a=d},
e6Z:function e6Z(d){this.a=d},
e70:function e70(d,e){this.a=d
this.b=e},
e7_:function e7_(d,e){this.a=d
this.b=e},
e71:function e71(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d){this.a=d},
hVL(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bS(36e8)
try{w=d.h(0,"start")
p=B.nc(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.nc(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rV(w,u,t,s,r,q==null?null:J.k(q))},
a8Q(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.aA(),$async$a8Q)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.u(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cF(p,new C.cha(),p.$ti.k("M.E"),x.b1)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b_(p,new C.chb())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8Q,v)},
as6(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$as6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8Q(d),$async$as6)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.ch7(e))
q.I(r,e)
q.b_(r,new C.ch8())
w=3
return B.b(B.aA(),$async$as6)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kq(r,80)
s=q.$ti.k("N<ak.E,a9<n,@>>")
q=B.C(new B.N(q,new C.ch9(),s),s.k("ak.E"))
w=4
return B.b(u.aC("String","ngmy_helper_calendar_v1_"+t,A.W.av(q,null)),$async$as6)
case 4:return B.h(null,v)}})
return B.i($async$as6,v)},
hZ7(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dI(d,new C.chc(v,v.bS(B.dw(14,0,0,0,0,0).a)))
w=B.C(w,w.$ti.k("M.E"))
return w},
hsR(d){var w,v,u,t,s,r,q,p,o,n,m=C.hZ7(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cY(m,0,B.dD(20,"count",x.S),B.U(m).c),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.dg(s),12)===0?12:A.o.F(B.dg(s),12)
q=B.dg(s)>=12?"PM":"AM"
p=A.a.b0(A.o.v(B.fV(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bM(s)+"/"+B.bY(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rV:function rV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cha:function cha(){},
chb:function chb(){},
ch7:function ch7(d){this.a=d},
ch8:function ch8(){},
ch9:function ch9(){},
chc:function chc(d,e){this.a=d
this.b=e},
hVM(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.nc(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
return new C.rW(w,u,t,s,r,q,J.k(p==null?"user":p))},
hr9(d){var w=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12),v=B.dg(d)>=12?"PM":"AM"
return""+B.bM(d)+"/"+B.bY(d)+" "+w+":"+A.a.b0(A.o.v(B.fV(d)),2,"0")+" "+v},
VS(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.aA(),$async$VS)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.u(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cF(p,new C.c8X(),p.$ti.k("M.E"),x.Q)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b_(p,new C.c8Y())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VS,v)},
b0q(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aA(),$async$b0q)
case 2:u=g
t=B.cY(e,0,B.dD(120,"count",x.S),B.U(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.U(t).k("N<1,a9<n,@>>")
r=B.C(new B.N(t,new C.c8V(),r),r.k("ak.E"))
w=3
return B.b(u.aC("String","ngmy_call_memory_v1_"+s,A.W.av(r,null)),$async$b0q)
case 3:return B.h(null,v)}})
return B.i($async$b0q,v)},
b0r(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0r=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.T(x.N,x.Q)
o=J
w=2
return B.b(C.VS(d),$async$b0r)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b7<2>")
q=B.C(new B.b7(p,u),u.k("M.E"))
A.d.b_(q,new C.c8W())
w=5
return B.b(C.b0q(d,q),$async$b0r)
case 5:return B.h(null,v)}})
return B.i($async$b0r,v)},
c8Z(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c8Z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VS(d),$async$c8Z)
case 3:t=s.dI(g,new C.c9_(e.bS(-72e8),e.bS(72e8)))
t=B.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8Z,v)},
hra(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kq(d,e),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWz()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.aA(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
iqJ(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bC(p),B.bM(p),B.bY(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bS(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bS(r)
w=B.ag("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
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
return B.c0(B.bC(n),B.bM(n),B.bY(n),u,t,0,0,0)},
hHO(d){var w=B.ag("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rW:function rW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c8X:function c8X(){},
c8Y:function c8Y(){},
c8V:function c8V(){},
c8W:function c8W(){},
c9_:function c9_(d,e){this.a=d
this.b=e},
hsU(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.m3(t,w,v,u==null?null:J.k(u))},
hZd(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b8(v,new C.chk(),x.bP)
v=B.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.dpP
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iD(r,w,v,u,t,typeof d.h(0,s)=="number"?A.h.M(B.dF(d.h(0,s))):0)},
hZc(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ice(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.h.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.h.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b8(s,new C.chi(),x.u)
s=B.C(s,s.$ti.k("ak.E"))}return new C.ip(p,w,v,u,s==null?D.aDe:s,t)},
icf(d){var w,v,u,t=B.I([G.Dr,"investments",A.nO,"games",A.js,"loans",A.hC,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kf,"store",A.qW,"jobs",A.nN,"refunds",A.eY,"account",A.lr,"music",A.zy,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a3(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ice(d){switch(d){case"investments":return G.Dr
case"games":return A.nO
case"loans":return A.js
case"withdrawals":return A.hC
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qW
case"refunds":return A.nN
case"account":return A.eY
case"music":return A.lr
default:return A.zy}},
np(d){var w=B.a([new C.m3("text",d,null,null)],x.a)
return w},
aiB(){var w=null,v=x.v
return B.a([new C.ip("investments","Investments",G.Dr,4280468830,B.a([new C.iD("inv1","How do I buy an investment plan?",C.np("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iD("inv2","When do I get paid from my plan?",C.np("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iD("inv3","Can I have more than one plan?",C.np("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.ip("games","Games",A.nO,4287323382,B.a([new C.iD("gam1","How do NGMY games work?",C.np("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iD("gam2","Why did my game payout change?",C.np("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.ip("loans","Loans",A.js,4294538006,B.a([new C.iD("loan1","How do I apply for a loan?",C.np("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iD("loan2","What is the repayment period?",C.np("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.ip("withdrawals","Withdrawals",A.hC,4282090230,B.a([new C.iD("wd1","How do I withdraw money?",C.np("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iD("wd2","Why is my withdrawal pending?",C.np("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.ip("deposits","Deposits",A.jN,4279548070,B.a([new C.iD("dep1","How do I deposit funds?",C.np("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iD("dep2","How long until my deposit posts?",C.np("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.ip("civic","Civic Registry",A.l2,4289170426,B.a([new C.iD("civ1","What is Civic Registry?",C.np("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iD("civ2","What does \u201cmissed\u201d mean on my profile?",C.np("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.ip("store","NGMY Store",A.kf,4293675161,B.a([new C.iD("sto1","How do I buy from NGMY Store?",C.np("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iD("sto2","How do I sell in the store?",C.np("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.ip("jobs","Jobs & Creator",A.qW,4293548044,B.a([new C.iD("job1","How do I find jobs?",C.np("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iD("job2","How do I post a job?",C.np("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.ip("refunds","Refunds",A.nN,4293870660,B.a([new C.iD("ref1","Can I get a refund?",C.np("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iD("ref2","How long do refunds take?",C.np("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.ip("account","Account",A.eY,4281908728,B.a([new C.iD("acc1","How do I update my profile?",C.np("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iD("acc2","I forgot my password \u2014 what now?",C.np("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.ip("music","Music Charts",A.lr,4290807036,B.a([new C.iD("mus1","What are Music Charts?",C.np("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iD("mus2","How do I upload music?",C.np("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.ip("help","Help Center",A.zy,4279080072,B.a([new C.iD("hlp1","Where can I get live help?",C.np("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iD("hlp2","How do daily Helper limits work?",C.np("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hsV(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiB()
v=v.dN(d,new C.chn(),x.i)
w=B.C(v,v.$ti.k("ak.E"))
A.d.b_(w,new C.cho())
return w.length===0?C.aiB():w},
hsW(d){var w=J.b8(d,new C.chp(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
return B.I(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
as8(d){return C.hZe(d)},
hZe(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$as8=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$as8)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_kb_v1",A.W.av(C.hsW(d),null)),$async$as8)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.ac(p)
$.am.$1("[helper kb] local save: "+B.w(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$as8,v)},
chm(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$chm)
case 7:r=e
q=B.aV(J.u(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiB()
u=l
w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){l=C.aiB()
u=l
w=1
break}o=J.u(p,"categories")
if(!x.j.b(o)){l=C.aiB()
u=l
w=1
break}n=C.hsV(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.ac(j)
$.am.$1("[helper kb] local load: "+B.w(m))
l=C.aiB()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chm,v)},
b2u(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2u=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2u)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f5("ngmy_helper_kb",null,!1,A.bN),$async$b2u)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ac(o)
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
return B.i($async$b2u,v)},
b2v(d){return C.hZf(d)},
hZf(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2v=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2v)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hP("ngmy_helper_kb",d,!1,!1,A.cQ,null),$async$b2v)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ac(o)
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
return B.i($async$b2v,v)},
as9(){var w=0,v=B.j(x.I),u,t,s,r
var $async$as9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chm(),$async$as9)
case 3:s=e
w=4
return B.b(C.b2u(),$async$as9)
case 4:r=e
w=r!=null&&x.j.b(J.u(r,"categories"))?5:6
break
case 5:t=C.hsV(x.j.a(J.u(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.as8(t),$async$as9)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as9,v)},
chq(d){var w=0,v=B.j(x.y),u
var $async$chq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as8(d),$async$chq)
case 3:u=C.b2v(C.hsW(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chq,v)},
m3:function m3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iD:function iD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chl:function chl(){},
chk:function chk(){},
ip:function ip(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chj:function chj(){},
chi:function chi(){},
chn:function chn(){},
cho:function cho(){},
chp:function chp(){},
bbO:function bbO(d){this.a=d},
WQ:function WQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG3:function aG3(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
eb8:function eb8(){},
eb9:function eb9(){},
eb2:function eb2(d){this.a=d},
eb3:function eb3(d){this.a=d},
eaM:function eaM(d,e){this.a=d
this.b=e},
eaN:function eaN(d){this.a=d},
eaO:function eaO(d,e,f){this.a=d
this.b=e
this.c=f},
eaL:function eaL(d){this.a=d},
eb_:function eb_(d,e){this.a=d
this.b=e},
eb0:function eb0(d,e){this.a=d
this.b=e},
eb1:function eb1(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d,e,f){this.a=d
this.b=e
this.c=f},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d,e,f){this.a=d
this.b=e
this.c=f},
eaY:function eaY(d,e){this.a=d
this.b=e},
eaX:function eaX(d,e){this.a=d
this.b=e},
eaW:function eaW(d,e,f){this.a=d
this.b=e
this.c=f},
eaQ:function eaQ(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaR:function eaR(d,e){this.a=d
this.b=e},
eaS:function eaS(d){this.a=d},
eb7:function eb7(d,e){this.a=d
this.b=e},
eb6:function eb6(d,e){this.a=d
this.b=e},
eb5:function eb5(){},
eb4:function eb4(d,e){this.a=d
this.b=e},
QD:function QD(d,e){this.c=d
this.a=e},
bdJ:function bdJ(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cWC:function cWC(d){this.a=d},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWD:function cWD(d){this.a=d},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWy:function cWy(d,e){this.a=d
this.b=e},
cWE:function cWE(d){this.a=d},
cWF:function cWF(d,e){this.a=d
this.b=e},
a1o:function a1o(d,e,f){this.c=d
this.d=e
this.a=f},
aI3:function aI3(){this.d=$
this.c=this.a=null},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2J:function f2J(d){this.a=d},
f2P:function f2P(){},
f2O:function f2O(d,e){this.a=d
this.b=e},
f2N:function f2N(d,e){this.a=d
this.b=e},
f2K:function f2K(d,e){this.a=d
this.b=e},
f2M:function f2M(d,e,f){this.a=d
this.b=e
this.c=f},
f2L:function f2L(d,e,f){this.a=d
this.b=e
this.c=f},
a1n:function a1n(d,e){this.c=d
this.a=e},
aI2:function aI2(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f2E:function f2E(d,e){this.a=d
this.b=e},
f2C:function f2C(d){this.a=d},
f2D:function f2D(d,e){this.a=d
this.b=e},
f2G:function f2G(d,e){this.a=d
this.b=e},
f2H:function f2H(d){this.a=d},
f2F:function f2F(d,e){this.a=d
this.b=e},
hZa(d){var w=new B.N(d,new C.chf(),B.U(d).k("N<1,n>")).aN(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chg(d,e,f){return C.hZb(d,e,f)},
hZb(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chg=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Lb([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rm(B.ns(b3),C.hZa(b6)+"\n\nAdmin instruction:\n"+b4,A.i1,null,null),$async$chg)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Lb([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d5(s,"```"))s=A.a.el(J.hmv(s,B.ag("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ag("\\s*```$",!0,!1,!1,!1),"")
r=A.W.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Lb([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=B.a1(r,a4,a5)
a6=J.u(q,"message")
p=a6==null?null:J.k(a6)
a6=J.u(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.u(q,"categories")
a6=x.j
if(!a6.b(n)||J.ct(n)){a3=B.a([],x.Y)
u=new B.Lb([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=B.a1(a3.a(J.u(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.w(k)
h=J.u(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=B.a1(a3.a(J.u(h,f)),a4,a5)
d=J.u(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aT(d);a9.C();){a1=a9.gP(a9)
J.c5(a0,C.hsU(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.u(e,"answer")
J.c5(a0,new C.m3("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.u(e,"question")
J.c5(g,new C.iD("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.u(e,"printable"),!0),f))}a9=J.u(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.u(j,"iconKey")
b0=C.hZ9(J.k(b0==null?"help":b0))
b1=typeof J.u(j,"colorValue")=="number"?A.h.M(B.dF(J.u(j,"colorValue"))):4284773515
J.c5(m,new C.ip(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Lb([m,null,p,a3])
w=1
break}catch(b7){a2=B.ac(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.Lb([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chg,v)},
hZ9(d){switch(d){case"investments":return G.Dr
case"games":return A.nO
case"loans":return A.js
case"withdrawals":return A.hC
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qW
case"refunds":return A.nN
case"account":return A.eY
case"music":return A.lr
default:return A.zy}},
ip7(d,e,f){var w,v,u,t=B.bp(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fS4(f))
if(w>=0){t[w]=J.fn(e).cQ3(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bfL(u)
return t},
chf:function chf(){},
fS4:function fS4(d){this.a=d},
ddq:function ddq(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
aG5:function aG5(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ebJ:function ebJ(){},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebu:function ebu(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebt:function ebt(d,e,f){this.a=d
this.b=e
this.c=f},
ebl:function ebl(){},
ebm:function ebm(){},
ebn:function ebn(){},
ebo:function ebo(){},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebA:function ebA(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebF:function ebF(){},
ebG:function ebG(d){this.a=d},
eby:function eby(d){this.a=d},
ebH:function ebH(d){this.a=d},
ebx:function ebx(d){this.a=d},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebw:function ebw(d,e){this.a=d
this.b=e},
ebv:function ebv(d,e){this.a=d
this.b=e},
i68(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ag("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).l_(0,d),w=new B.Gu(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.aA(d,t,q)
o=u?A.cA:A.aL
m.push(new B.et(p,n,n,A.cN,n,n,n,n,n,n,new B.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.et(p,n,n,A.cN,n,n,n,n,n,n,new B.H(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.et(p,n,n,A.cN,n,n,n,n,n,n,new B.H(!0,o,n,n,n,n,13,n,A.cL,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.et(p,n,n,A.cN,n,n,n,n,n,n,new B.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.ne,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.b1(d,t)
m.push(B.cS(n,n,n,n,n,n,n,n,n,B.m(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u9(A.cx,n,n,n,A.eT,n,n,!0,n,B.cS(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.c2)},
drR:function drR(d){this.a=d},
aDG:function aDG(d,e){this.a=d
this.b=e},
as7:function as7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG4:function aG4(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ebi:function ebi(d,e){this.a=d
this.b=e},
ebj:function ebj(d,e){this.a=d
this.b=e},
eba:function eba(d){this.a=d},
ebb:function ebb(d){this.a=d},
ebk:function ebk(){},
ebd:function ebd(d,e){this.a=d
this.b=e},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebf:function ebf(){},
ebh:function ebh(){},
ebg:function ebg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebe:function ebe(d,e){this.a=d
this.b=e},
aDE:function aDE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adm:function adm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2t:function b2t(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chh:function chh(d){this.a=d},
ade:function ade(d,e,f){this.c=d
this.d=e
this.a=f},
cQ6:function cQ6(d){this.a=d},
cQ7:function cQ7(){},
cQ8:function cQ8(d){this.a=d},
aDF:function aDF(d,e,f){this.c=d
this.d=e
this.a=f},
bjS:function bjS(){this.c=this.a=this.d=null},
drS:function drS(d,e){this.a=d
this.b=e},
drU:function drU(d,e){this.a=d
this.b=e},
drT:function drT(d){this.a=d},
i_J(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i_K(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i_I(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hBo(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fw9(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
iqm(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i_I(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asX:function asX(d,e){this.a=d
this.b=e},
JJ:function JJ(d,e){this.a=d
this.b=e},
t1:function t1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fw9:function fw9(){},
asa:function asa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG6:function aG6(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bw$=i
_.a9$=j
_.c=_.a=null},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebQ:function ebQ(){},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebS:function ebS(d){this.a=d},
ebT:function ebT(){},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebP:function ebP(d,e){this.a=d
this.b=e},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec0:function ec0(){},
ec1:function ec1(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ec5:function ec5(d){this.a=d},
ec4:function ec4(d){this.a=d},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ec6:function ec6(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebK:function ebK(d){this.a=d},
ebL:function ebL(d){this.a=d},
aOn:function aOn(){},
chs(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.U6
w=1
break}w=3
return B.b(B.aA(),$async$chs)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aV(J.u(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.U6
w=1
break}try{q=B.a1(x.f.a(A.W.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WS(p,o,n,q)
w=1
break}catch(l){s=B.ac(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.U6
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chs,v)},
asb(d,e){var w=0,v=B.j(x.H),u
var $async$asb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.aA(),$async$asb)
case 4:w=3
return B.b(g.aC("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.W.av(e.aj(),null)),$async$asb)
case 3:case 1:return B.h(u,v)}})
return B.i($async$asb,v)},
chr(d){var w=0,v=B.j(x.gp),u,t
var $async$chr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WS(!0,!0,!0,!0)
w=3
return B.b(C.asb(d,t),$async$chr)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chr,v)},
hHP(d){var w=A.a.i(d.toLowerCase()),v=B.ag("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ag("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ag("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ag("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hHN(d){var w=B.ag("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WS:function WS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHd(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHd=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2o(h),$async$bHd)
case 3:if(j){w=1
break}w=4
return B.b(C.as3(h),$async$bHd)
case 4:if(d.e==null){w=1
break}t=B.qZ(d,!0)
t.toString
s=B.dl()
s.b=B.pG(new C.h4_(g,e,f,s),!1,!1)
t.md(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHd,v)},
h4_:function h4_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3Z:function h3Z(d){this.a=d},
a08:function a08(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD4:function aD4(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dpc:function dpc(d){this.a=d},
dpd:function dpd(d,e,f){this.a=d
this.b=e
this.c=f},
dpi:function dpi(){},
dph:function dph(d){this.a=d},
dpe:function dpe(d){this.a=d},
dpf:function dpf(){},
dpg:function dpg(d){this.a=d},
aNe:function aNe(){},
i_b(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i_a(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asI(d){return C.i_8(d)},
i_8(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f5("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asI)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ac(o)
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
return B.i($async$asI,v)},
b3j(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3j=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i_b(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3j)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.z(J.u(r,"redeemed"),!0)){u=null
w=1
break}p=J.u(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
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
return B.i($async$b3j,v)},
htm(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.b1(v,14))
return w.length===0?null:w}return null},
i_9(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aU(e,new C.cjg(A.a.i(d.toLowerCase()),w))},
htn(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.ql(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.ql(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.ql(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.ql(!1,0,"Verification code does not match this deposit.")
if(!C.i_9(e,d,w))return new C.ql(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hbF(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dZK
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aJ(t.h(d,u))
return new C.OQ(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aJ(t.h(d,u))
return new C.OQ(!0,!1,!0,!1)}B.aJ(t.h(d,u))
return new C.OQ(!0,!1,!1,!1)},
cjm(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.htm(d)
if(s==null){u=D.U8
w=1
break}w=3
return B.b(C.asI(s),$async$cjm)
case 3:t=g
if(t==null){u=D.U8
w=1
break}u=C.hbF(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjm,v)},
b3l(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3l=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3j(d),$async$b3l)
case 3:s=g
if(s==null||s.length===0){u=D.U8
w=1
break}w=4
return B.b(C.asI(s),$async$b3l)
case 4:t=g
if(t==null){u=D.U8
w=1
break}u=C.hbF(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3l,v)},
cjn(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjn=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3j(d),$async$cjn)
case 3:t=j
if(t==null||t.length===0){u=new C.ql(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xa(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjn,v)},
Xa(d,e,f,g,h){return C.i_c(d,e,f,g,h)},
i_c(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xa=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.htm(a4)
if(a0==null){u=new C.ql(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asI(a0),$async$Xa)
case 3:k=a8
if(k==null){u=new C.ql(!1,0,y.m)
w=1
break}j=C.hbF(k,a5)
if(j.b){u=new C.ql(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.ql(!1,0,y.u)
w=1
break}if(j.c){u=new C.ql(!1,0,y.j)
w=1
break}i=C.htn(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aJ(J.u(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.ql(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f5("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xa)
case 8:p=a8
if(p==null){u=new C.ql(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.u(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.ql(!1,0,"This deposit code was already used.")
w=1
break}o=C.htn(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dL(p,f,e)
J.aK(n,"redeemedBy",q)
J.aK(n,"redeemedAt",r)
w=9
return B.b(B.hP("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cQ,null),$async$Xa)
case 9:n=J.u(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hP("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.I(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cQ,null),$async$Xa)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.ac(a1)
$.am.$1("[local deposit qr] redeem: "+B.w(l))
u=new C.ql(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.ql(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xa,v)},
OQ:function OQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ql:function ql(d,e,f){this.a=d
this.b=e
this.c=f},
cjg:function cjg(d,e){this.a=d
this.b=e},
cju(d,e){var w
B.his(d,e,!1)
B.rk(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Br(!0,!1,d.d,w)},
a9d(d,e){if(d==null)return!1
return B.bC(d)===e.gcl()&&B.bM(d)===e.gci()&&B.bY(d)===e.gcz()},
i_k(d){var w=B.dg(d)*60+B.fV(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
htu(d){if(B.dg(d)>=12)return!1
if(B.mA(d)===6||B.mA(d)===7)return!1
return!0},
cjy(d){var w=d.c?d.bU():d
return w.d4(B.c0(B.bC(w),B.bM(w),B.bY(w),12,0,0,0,0))},
hbJ(d,e){var w,v,u,t=d.gD3()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9d(d.fx,e)&&d.fy>0.0001)return A.h.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjy(w))return 0
v=B.c0(e.gcl(),e.gci(),e.gcz(),12,0,0,0,0)
if(!e.d4(v))return t
if(!e.cb(w))return 0
u=A.o.ar(v.bB(w).a,1000)
if(u<=0)return t
return A.h.D(t*(A.o.D(A.o.ar(e.bB(w).a,1000),0,u)/u),0,t)},
hbI(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9d(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aU(e,new C.cjt(s))&&C.cjy(t)){r=d.gD3()
v=r>0
if(v){q=new B.d8(s,d.a,r,A.h7,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,p)
C.cju(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9d(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9d(o,p)&&!C.cjy(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjt:function cjt(d){this.a=d},
iep(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
ivC(d,e,f,g,h,i){return B.hE(d,new C.asJ(f,e,i,g,h,null),!0,null,x.H)},
hxJ(d){var w,v,u=d.c?d.bU():d,t=B.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bM(u)+"/"+B.bY(u)+"/"+B.bC(u)+" \xb7 "+w+":"+A.a.b0(A.o.v(B.fV(u)),2,"0")+" "+v},
hFB(d){var w=d.x
if(w===A.dF)return"Processing"
if(w===A.kJ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
imH(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fT)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
ie4(d){var w=d.d,v=w===A.fT||w===A.pa||w===A.h7||w===A.kK,u=d.x
if(u===A.dF)return w===A.f4?-d.c:0
if(u!==A.cv)return 0
w=d.c
return v?w:-w},
inf(d,e){var w,v,u,t,s,r,q=B.C(d,x.o)
A.d.b_(q,new C.fNX())
w=B.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.J)(q),++t,v=r){s=q[t]
r=v-C.ie4(s)
if(r<0)r=0
w.n(0,s.a,new B.brq(v,r))}return w},
asJ:function asJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGt:function aGt(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
eqk:function eqk(d){this.a=d},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er2:function er2(d){this.a=d},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(){},
eqL:function eqL(d){this.a=d},
eqM:function eqM(){},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d,e,f){this.a=d
this.b=e
this.c=f},
eqP:function eqP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqE:function eqE(d,e){this.a=d
this.b=e},
eql:function eql(d,e,f){this.a=d
this.b=e
this.c=f},
eqF:function eqF(){},
eqG:function eqG(){},
eqH:function eqH(d){this.a=d},
eqI:function eqI(){},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqy:function eqy(){},
eqv:function eqv(d){this.a=d},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d,e,f){this.a=d
this.b=e
this.c=f},
eqB:function eqB(d){this.a=d},
eqD:function eqD(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqr:function eqr(d){this.a=d},
eqs:function eqs(d,e,f){this.a=d
this.b=e
this.c=f},
eqT:function eqT(){},
eqU:function eqU(){},
eqY:function eqY(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
er_:function er_(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqX:function eqX(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqo:function eqo(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqm:function eqm(d){this.a=d},
equ:function equ(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e){this.a=d
this.b=e},
aDS:function aDS(d,e,f,g,h,i,j,k,l,m){var _=this
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
dtC:function dtC(){},
dtD:function dtD(){},
dtE:function dtE(d,e,f){this.a=d
this.b=e
this.c=f},
dtB:function dtB(d){this.a=d},
dtF:function dtF(d,e){this.a=d
this.b=e},
dtA:function dtA(d){this.a=d},
aDR:function aDR(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkB:function bkB(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dtv:function dtv(d){this.a=d},
dtw:function dtw(d){this.a=d},
dtx:function dtx(d){this.a=d},
dty:function dty(){},
dtz:function dtz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dtu:function dtu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dtt:function dtt(d){this.a=d},
bec:function bec(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
beb:function beb(d,e,f){this.b=d
this.d=e
this.a=f},
bea:function bea(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDT:function aDT(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDU:function aDU(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dtW:function dtW(){},
dtX:function dtX(){},
dtY:function dtY(){},
dtI:function dtI(d){this.a=d},
dtH:function dtH(d,e){this.a=d
this.b=e},
dtG:function dtG(d,e){this.a=d
this.b=e},
dtT:function dtT(d,e){this.a=d
this.b=e},
dtV:function dtV(d,e){this.a=d
this.b=e},
dtU:function dtU(d,e){this.a=d
this.b=e},
dtS:function dtS(){},
dtR:function dtR(d){this.a=d},
dtQ:function dtQ(){},
dtL:function dtL(d){this.a=d},
dtM:function dtM(){},
dtN:function dtN(d){this.a=d},
dtO:function dtO(d){this.a=d},
dtK:function dtK(){},
dtP:function dtP(d){this.a=d},
dtJ:function dtJ(d){this.a=d},
bdC:function bdC(d){this.a=d},
fNX:function fNX(){},
byL:function byL(d,e){this.b=d
this.a=e},
aNu:function aNu(){},
bAK:function bAK(){},
ijj(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fFF(v,g))
w=B.T(x.N,x.z)
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
aRH(d){var w,v=J.a8(d),u=B.aJ(v.h(d,"matchesTotal")),t=u==null?null:A.h.M(u)
if(t==null)t=1
v=B.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:A.h.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
iug(d,e){var w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fZ2(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiP(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(C.aRH(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
im_(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRH(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRH(d)>0},
ilZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aJ(i.h(d,"matchesTotal")),g=h==null?null:A.h.M(h)
if(g==null)g=1
h=B.aJ(i.h(d,"matchesPlayed"))
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
o=h.b(p)?B.a1(p,s,r):B.T(s,r)
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
iji(d,e){var w
C.aiP(e)
w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fFE(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uC(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.u(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ifP(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hi2(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ifP(x.f.b(u)?B.a1(u,r,q):B.T(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.u(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bG1(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bG1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$bG1)
case 7:r=e
q=B.aV(J.u(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.T(k,k)
w=1
break}p=A.W.aP(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.T(k,k)
w=1
break}k=x.N
o=B.T(k,k)
for(k=J.aT(p),j=x.f;k.C();){n=k.gP(k)
if(!j.b(n))continue
i=J.u(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.u(n,"username")
l=A.a.i(J.k(i==null?"":i))
if(J.ad(m)!==0&&J.ad(l)!==0)J.aK(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=B.T(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bG1,v)},
bF3(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bF3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bG1(),$async$bF3)
case 3:u=t.hi2(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF3,v)},
LY(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$LY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hCI.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bB(p)
t=t.a>B.dw(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hCI.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S1(A.cf,q),$async$LY)
case 5:case 4:s=$.hCH.h(0,q)
if(s==null){u=C.uC(e,q)
w=1
break}r=C.uC(B.bFa(e,B.a([s],x._)),q)
if(r!=null)B.hkL(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$LY,v)},
iuv(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
icl(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.I(["ttt",B.c2(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e6(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c2(7,0,!1,q)
return B.I(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e6(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.ftO(r),!0,q)
return B.I(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.I(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ijh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.icl(u,f)
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
m=B.T(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
iut(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aJ(t.h(u,i))
w=w==null?null:A.h.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=B.aJ(t.h(u,"matchesTotal"))
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
k=B.T(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",B.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}},
hkK(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fXt(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fXt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiP(d)
t=$.hhg
if(t==null)s=$.hhg=B.S1(A.cf,null).fv(new C.fXu())
else s=t
w=3
return B.b(s,$async$fXt)
case 3:r=f
if(r==null){u=B.bp(new B.N(d,new C.fXv(),B.U(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFa(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXt,v)},
aiQ(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiP(d)
t=B.U(d).k("N<1,a9<n,@>>")
t=B.C(new B.N(d,new C.fVg(),t),t.k("ak.E"))
w=3
return B.b(B.S1(t,null),$async$aiQ)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFa(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiQ,v)},
aSC(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hkK(d,e,f)
t=C.uC(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S1(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSC)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uC(s,e)
if(r!=null)B.hkL(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSC,v)},
ir6(d,e,f){var w
C.hkK(d,e,f)
w=$.hh3.h(0,e)
if(w!=null)w.a1(0)
$.hh3.n(0,e,B.cz(A.lM,new C.fVh(e,d)))},
hbq(d,e){return new C.b26(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fFF:function fFF(d,e){this.a=d
this.b=e},
fZ2:function fZ2(d){this.a=d},
fFE:function fFE(d){this.a=d},
ftO:function ftO(d){this.a=d},
fXu:function fXu(){},
fXv:function fXv(){},
fVg:function fVg(){},
fVh:function fVh(d,e){this.a=d
this.b=e},
b26:function b26(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
iuZ(d,e,f){return B.bU(A.L,null,new C.h_e(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h_e:function h_e(d,e){this.a=d
this.b=e},
a0W:function a0W(d,e,f){this.c=d
this.d=e
this.a=f},
aGh:function aGh(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
el0:function el0(d){this.a=d},
el3:function el3(d){this.a=d},
el4:function el4(d){this.a=d},
el2:function el2(d){this.a=d},
el5:function el5(d){this.a=d},
el6:function el6(d,e){this.a=d
this.b=e},
el1:function el1(d,e){this.a=d
this.b=e},
ipw(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iY
w=t.toLowerCase()
v=B.ag("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iY
v=Date.now()
u=C.if7(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kM("calendar",B.I(["title",C.if6(t,w),"start",u.ag(),"end",u.bS(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
if6(d,e){var w,v,u,t,s,r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ag("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hDx(A.a.i(t))}s=B.ag("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hDx(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hDx(d){var w
if(d.length===0)return d
w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fEC(),B.U(w).k("N<1,n>")).aN(0," ")},
if7(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bC(e),B.bM(e),B.bY(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bS(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKp.gdP(D.aKp),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cR(d,u,0)){t=C.ie3(o,v.b)
o=t
break}}s=B.ag("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
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
q=0}return B.c0(B.bC(o),B.bM(o),B.bY(o),r,q,0,0,0)},
ie3(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mA(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fEC:function fEC(){},
ipx(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.iY
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.ag("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cF(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.ib9(w,j)
if(q==null||q.length===0)return A.iY
t=B.ag("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.ag("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kM("call",B.I(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.I(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kM(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kM("call",B.I(["name",q],t,t))],x.Z)}return A.iY},
ib9(d,e){var w,v,u,t,s,r,q=[B.ag("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ag("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ag("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:A.a.i(u)
if(t==null)t=""
u=B.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=A.a.i(B.aL(t,u,""))
u=B.ag("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=A.a.i(B.aL(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=B.ag("^\\d+$",!0,!1,!1,!1)
s=B.ag("\\s",!0,!1,!1,!1)
s=B.aL(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.iiy(t)}r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
iiy(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fEB(),B.U(w).k("N<1,n>")).aN(0," ")},
fEB:function fEB(){},
hHW(d){var w=new B.N(d,new C.fXL(),B.U(d).k("N<1,a9<n,@>>")).c_(0,new C.fXM())
w=B.C(w,w.$ti.k("M.E"))
return w},
fXL:function fXL(){},
fXM:function fXM(){},
ipA(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.iY
w=A.a.i(d)
if(w.length===0)return A.iY
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.iY
u=B.ag("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return A.iY
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.ag("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.ag("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kM("send_email",t)],x.Z)},
ioG(d,e){var w
if(e)return d
w=J.dI(d,new C.fRk())
w=B.C(w,w.$ti.k("M.E"))
return w},
fRk:function fRk(){},
ir3(d){switch(d){case"blackjack_vegas":return D.e2S
case"roulette_euro":return D.e2C
case"slots_jackpot":return D.e2J
case"poker_texas":return D.e2M
case"chess_royale":return D.e2D
case"connect_four_pro":return D.e2E
case"domino_block":return D.e2G
case"plinko_prizes":return D.e2O
case"spin_wheel":return D.e2L
case"baccarat_punto":return D.e2F
case"craps_table":return D.e2N
case"casino_war":return D.e2H
case"bingo_live":return D.e2K
case"solitaire_klondike":return D.e2R
case"backgammon_pro":return D.e2B
case"billiards_snooker":return D.e2P
case"profit_solve":return D.e2Q
default:return D.e2I}},
fV7(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.l(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.p(p,B.as(B.X(A.nL,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.o(p,p,v,w,u,D.cbl,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.l(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ab(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.p(p,B.x(B.a([new B.D(D.bJQ,B.d(D.cJY[t-1]+"\n"+r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b4,B.as(B.d(r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b4],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(A.hM,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
ise(d,e){var w,v=null,u=B.l(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.U(e).k("N<1,h9>")
r=B.C(new B.N(e,new C.fXc(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.p(v,B.x(B.a([D.fP_,A.af,B.A(r,A.l,v,A.b9,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(v,v,t,u,s,D.cbF,A.n),v,v,v,v,I.anq,v,v,v),A.aB,B.df(A.atz,v,D.fPD,d,B.bo(A.aQ,v,v,v,A.dA,v,Ao.a1D,v,v,v,v,v))],w),A.l,v,A.e,A.i,0,A.p)},
pD:function pD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btz:function btz(d,e){this.b=d
this.a=e},
fXc:function fXc(){},
i_V(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e6(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c2(8,0,!1,w)
u=B.c2(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e6(6,o)
for(v=0;v<6;++v)q[v]=B.c2(7,0,!1,w)
return new C.at9(B.T(p,x.z),n,u,s,r,t,q,new B.au(A.aw,$.ax()))},
ijS(d,e,f,g,h){var w=new C.fHq(f,h)
switch(d){case"checkers_deluxe":return C.i9K(h,g,e,w)
case"tic_tac_go":return C.iiM(h,g,e,w)
case"blackjack_vegas":return C.i93(h,g,e,new C.fHk(w))
case"roulette_euro":return C.ih0(h,g,e,new C.fHl(w))
case"slots_jackpot":return C.ihR(h,g,e,new C.fHm(w))
case"billiards_snooker":return C.ifS(h,g,e,new C.fHn(w))
case"connect_four_pro":return C.ia6(h,g,e,w)
case"profit_solve":return C.ifV(h,g,e,new C.fHo(w))
default:return C.i9H(d,h,g,e,new C.fHp(w))}},
i9K(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=B.l(12),t=B.K(D.a_0,A.r,8),s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.as(new B.fH(1,B.p(w,B.bu(B.l(6),B.iA(!0,w,w,A.y,D.fnr,new C.fqS(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
iiM(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),w),B.E(B.as(new B.fH(1,B.cm(new C.fEX(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
i93(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xH,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fq9(),B.U(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fV7(q[0],!1),A.bn,C.fV7(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4H(d.ay),v,v,v,v,v,v,D.fJS,v,v,v)
q=d.ay
w=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.fqa(),w),w.k("ak.E"))
q=B.c_(A.fU,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eP,u,v),D.fWb,A.am,s,A.aB,D.h2V,r,A.am,q,A.b4,B.A(B.a([B.E(B.bJ(D.fQ6,v,d.CW?v:new C.fqb(d,e,f,g),v),1),A.ae,B.E(B.bJ(D.h5p,v,new C.fqc(d,e,f,g),v),1)],t),A.l,v,A.e,A.i,0,v,v)],t),A.l,v,A.e,A.i,0,A.p)},
ih0(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eP,v,w),B.p(w,B.b5(w,w,w,new C.btz(u,w),A.az),A.f,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fwP,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fU,B.iB(6,new C.fBS(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
ihR(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=d.db,t=B.U(u).k("N<1,n>")
u=B.C(new B.N(u,new C.fDO(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eP,v,w),C.ise(new C.fDP(d,e,f,g),u)],x.p),A.l,w,A.e,A.i,0,A.p)},
ifS(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=B.l(20),t=B.K(A.iL,A.r,12),s=x.V,r=B.a([new B.ab(0,A.G,A.w.j(0.45),A.dp,18)],s),q=x.p
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.p(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.p(w,w,A.f,w,w,D.b8z,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.p(w,w,A.f,w,w,A.afO,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.p(w,w,A.f,w,w,new B.o(A.aQ,w,w,B.l(2),B.a([new B.ab(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.o(w,w,t,u,r,D.eFn,A.n),w,w,w,A.f6,w,w,w,w),1),B.l5(A.bi,w,w,1,0,new C.fAH(d,f),d.dy),B.bJ(D.fVc,w,new C.fAI(d,e,g,f),w)],q),A.l,w,A.e,A.i,0,A.p)},
ia6(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xH,A.K,v,v),t=x.l,s=J.e6(7,t)
for(w=0;w<7;++w)s[w]=new B.by(1,A.bd,B.az(v,B.x(B.iB(6,new C.frj(d,w),!0,t),A.l,v,A.mu,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.frk(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eP,u,v),B.E(B.as(new B.fH(1.1666666666666667,B.A(s,A.dO,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
ifV(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iH,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aXY,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c6Z,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fAT(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fTK,w,new C.fAU(d,e,g,f),w)],x.p),A.l,w,A.e,A.i,0,A.p)},
i9H(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkt(),k=e.d
k=k==null?n:k.c
w=C.ir3(d)
v=D.aKe.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.kq,A.K,n,n)
u=B.l(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.G,w.c.j(0.35),A.eS,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,Al.L4,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.mD,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.as(B.p(n,B.x(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.m(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.db,B.X(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.o(n,n,r,u,q,new B.a7(A.aY,A.b3,A.x,t,n,n),A.n),n,n,n,A.f6,A.ac,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h4v,n,new C.fqF(f,e,g,h),B.bo(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.co,n,n,n,n,n)),n)],k),A.l,n,A.e,A.i,0,A.p)},
Fu:function Fu(d,e){this.a=d
this.b=e},
at9:function at9(d,e,f,g,h,i,j,k){var _=this
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
cl9:function cl9(){},
cla:function cla(){},
cl8:function cl8(){},
clb:function clb(){},
cl7:function cl7(){},
cld:function cld(){},
cle:function cle(){},
cl6:function cl6(d){this.a=d},
clc:function clc(){},
cl5:function cl5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHq:function fHq(d,e){this.a=d
this.b=e},
fHk:function fHk(d){this.a=d},
fHl:function fHl(d){this.a=d},
fHm:function fHm(d){this.a=d},
fHn:function fHn(d){this.a=d},
fHo:function fHo(d){this.a=d},
fHp:function fHp(d){this.a=d},
fqS:function fqS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqR:function fqR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEX:function fEX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEW:function fEW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEV:function fEV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fq9:function fq9(){},
fqa:function fqa(){},
fqb:function fqb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqc:function fqc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBS:function fBS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBR:function fBR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDO:function fDO(){},
fDP:function fDP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAH:function fAH(d,e){this.a=d
this.b=e},
fAI:function fAI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frk:function frk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frj:function frj(d,e){this.a=d
this.b=e},
fAT:function fAT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAU:function fAU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqF:function fqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
imJ(d){var w,v=B.U(d).k("Y<1>")
v=B.pQ(new B.Y(d,new C.fN_(),v),120,v.k("M.E"))
w=B.cF(v,new C.fN0(),B.a3(v).k("M.E"),x.N).aN(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fN_:function fN_(){},
fN0:function fN0(){},
aj1(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
au4:function au4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aH4:function aH4(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eSs:function eSs(){},
aOZ:function aOZ(){},
hYS(){var w=$.Jw
if(w<=0)return;--w
$.Jw=w
if(w===0){w=$.hsH
if(w!=null)w.$0()}},
cgq(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arK(d){var w=0,v=B.j(x.H),u,t
var $async$arK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hbl.I(0,t)
w=4
return B.b(B.aA(),$async$arK)
case 4:w=3
return B.b(f.aC("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arK,v)},
arJ(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgq(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hbl.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.aA(),$async$arJ)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k8(J.u(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arJ,v)},
WP(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$WP)
case 7:r=e
q=B.aV(J.u(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.T(x.N,x.z)
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
case 6:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WP,v)},
b2n(d){return C.hZ4(d)},
hZ4(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2n=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b2n)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_ai_usage_v1",A.W.av(d,null)),$async$b2n)
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
return B.i($async$b2n,v)},
b2l(d,e){var w,v,u,t,s=J.u(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afz(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bj(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afz(typeof v=="number"?A.o.D(A.h.M(v),0,999999):0,t)},
b2m(d,e){if(A.o.ar(e.bB(d.b).a,36e8)>=24)return new B.afz(0,e)
return d},
ch0(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$ch0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WP(),$async$ch0)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2m(C.b2l(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch0,v)},
ch1(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$ch1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WP(),$async$ch1)
case 3:t=g
s=Date.now()
r=C.b2m(C.b2l(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch1,v)},
hZ5(d){var w,v,u,t=d.a,s=A.o.ar(t,1e6)
if(s<=0)return"0s"
w=A.o.ar(t,36e8)
v=A.o.ar(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b0(A.o.v(v),2,"0")+"m "+A.a.b0(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b0(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2o(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WP(),$async$b2o)
case 3:t=p.b2m(o.b2l(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.aA(),$async$b2o)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k8(J.u(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2o,v)},
as3(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WP(),$async$as3)
case 3:t=s.b2m(r.b2l(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.aA(),$async$as3)
case 5:w=4
return B.b(f.aC("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$as3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$as3,v)},
as4(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$as4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WP(),$async$as4)
case 3:s=g
r=Date.now()
q=C.b2m(C.b2l(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aK(s,t,B.I(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2n(s),$async$as4)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as4,v)},
aiC(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiC=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hHO(a0))if(!C.hHN(a0)){p=B.ag("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hHO(a0)?3:4
break
case 3:o=C.iqJ(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c8Z(e,o),$async$aiC)
case 7:n=a2
p=J.a8(n)
if(p.gcm(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hr9(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWz()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ag("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MS("text/plain"),$async$aiC)
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
case 13:case 9:w=C.hHN(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8Q(e),$async$aiC)
case 17:m=f.hsR(a2)+"\n"
p.a+=m
case 16:p=B.ag("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VS(e),$async$aiC)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hra(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiC,v)},
i_s(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cjD(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cjD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.htz(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$cjD)
case 7:r=f
if(r!=null){p=J.u(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
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
return B.i($async$cjD,v)},
asM(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asM)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.u(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.u(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cD(0,A.cJ.aK(q))
m=J.z(J.u(r,"live"),!0)
u=new B.aIw(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.ac(j)
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
return B.i($async$asM,v)},
b3s(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i_s(q)?3:4
break
case 3:w=5
return B.b(C.cjD(q),$async$b3s)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asM(t)
w=1
break
case 4:if(A.a.a_(q,"NGMYLOCALSYNC1|")){u=C.asM(A.a.i(A.a.b1(q,15)))
w=1
break}w=A.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asM(A.a.i(A.a.b1(q,15))),$async$b3s)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIw(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3s,v)},
htP(d){var w=d.bL
if(w>=0)return w
return 1},
aiO(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSN(d,e),$async$aiO)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HC(d,null,null,!1,!0,""),$async$aiO)
case 5:w=4
return B.b(t.$1(h),$async$aiO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiO,v)},
ipv(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iY
w=a1.toLowerCase()
v=B.ag("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ag("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.iY
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.if5(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hCj(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ar(v,e)<=180)q.b="Reminder \u2014 "+A.o.ar(v,e)+" min"}else{if(t!=null){v=B.ag("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hCk(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bC(s),B.bM(s),B.bY(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bS(a0)
r.b=B.c0(B.bC(l),B.bM(l),B.bY(l),n,m,0,0,0).bS(-36e8)
if(r.bm().d4(s.bS(e)))r.b=J.c5(r.bm(),A.ox)
v=C.ijf(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b0(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bC(s),B.bM(s),B.bY(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bS(a0)
i=B.ag("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hCk(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bC(l),B.bM(l),B.bY(l),h,g,0,0,0)
r.b=f.d4(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hCj(a1,w)}}v=x.N
return B.a([new B.kM("alarm",B.I(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
if5(d){var w,v,u,t,s,r,q=[B.ag("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ag("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.cb(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.a_(r,"sec"))return new B.bd(1e6*A.o.D(s,5,86400))
if(A.a.a_(r,"hour")||A.a.a_(r,"hr"))return new B.bd(36e8*A.o.D(s,1,168))
return new B.bd(6e7*A.o.D(s,1,10080))}return null},
ijf(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hCk(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hCj(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.ag("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
i_O(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kq(d,80),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ah,I,Y,O,Ai,Z,F,Aj,Ak,A_,Al,Am,An,A0,Ao,Ap,Aq,A1,Ar
J=c[1]
B=c[0]
A=c[2]
P=c[65]
K=c[62]
A2=c[211]
L=c[36]
Q=c[203]
A3=c[216]
E=c[197]
R=c[146]
M=c[205]
A4=c[127]
A5=c[122]
A6=c[201]
S=c[41]
N=c[83]
A7=c[162]
A8=c[206]
T=c[196]
A9=c[209]
Aa=c[207]
U=c[88]
Ab=c[89]
V=c[172]
Ac=c[208]
Ad=c[204]
Ae=c[200]
W=c[137]
Af=c[119]
G=c[212]
X=c[187]
Ag=c[123]
C=a.updateHolder(c[6],C)
D=c[194]
H=c[30]
Ah=c[74]
I=c[199]
Y=c[118]
O=c[103]
Ai=c[210]
Z=c[31]
F=c[198]
Aj=c[161]
Ak=c[159]
A_=c[132]
Al=c[160]
Am=c[195]
An=c[214]
A0=c[202]
Ao=c[217]
Ap=c[152]
Aq=c[213]
A1=c[82]
Ar=c[215]
C.buO.prototype={
pa(d,e){return this.a.$2(d,e)}}
C.G7.prototype={
S(){return new C.aKB(this.$ti.k("aKB<G7.T,G7.S>"))}}
C.aKB.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hx(A.GV,v,null,null,w.$ti.k("hx<1>"))
u.e=w
u.X8()},
bz(d){var w,v=this
v.bK(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQo()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.GV,w.b,w.c,w.d,w.$ti)}v.X8()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mw(d,w)},
t(){this.aQo()
this.a2()},
X8(){var w,v=this
v.d=v.a.c.lP(new C.fei(v),new C.fej(v),new C.fek(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.a07,w.b,w.c,w.d,w.$ti)},
aQo(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axX.prototype={
mw(d,e){return this.e.$2(d,e)}}
C.an7.prototype={
S(){return C.i6u()},
bv(){return this.r.$0()}}
C.rf.prototype={}
C.aCK.prototype={
aep(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aep=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hsf(r)
if(r.x==null||r.c6.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hsh(s),$async$aep)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
YB(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asK(t.a.c),$async$YB)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cgq(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arJ(t.a.c),$async$YB)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dlD(t,s))
if(!s)t.aep()
case 1:return B.h(u,v)}})
return B.i($async$YB,v)},
ae_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bG1(),$async$ae_)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dlO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae_,v)},
Y(){var w,v,u=this
u.byQ()
$.tZ=$.tZ+1
w=u.a
$.bG7=w.c.a
w=w.d.bd
v=B.U(w).k("N<1,a9<n,@>>")
w=B.C(new B.N(w,new C.dm5(),v),v.k("ak.E"))
u.f=w
u.ae_()
u.Kn()
u.YB()
u.e=B.dh(A.ov,new C.dm6(u))},
Kn(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiP(t.a.d.bd)
w=3
return B.b(C.fXt(t.a.d.bd),$async$Kn)
case 3:s=e
if(t.c==null){w=1
break}C.aiP(t.a.d.bd)
if(s!=null)t.m(new C.dlW(t,s))
else t.m(new C.dlX(t))
case 1:return B.h(u,v)}})
return B.i($async$Kn,v)},
t(){C.b28()
var w=this.e
if(w!=null)w.a1(0)
this.byP()},
aji(d,e,f){return this.cyY(d,e,f)},
cyY(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aji=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.u(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ijj(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aiQ(t.a.d.bd),$async$aji)
case 3:if(t.c==null){w=1
break}t.m(new C.dlZ(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aji,v)},
J9(d,e){return this.cjW(d,e)},
c6L(d){return this.J9(d,null)},
cjW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uC(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRH(s)<=0){t.c.K(x.q).f.T(D.aVz)
w=1
break}}w=5
return B.b(C.arJ(t.a.c),$async$J9)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hbm(r,C.fRv(q.c),p),$async$J9)
case 6:w=1
break
case 4:o=new C.dlR(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hE(r,new C.aFB(p,q.d,q.f,q.r,new C.dlS(o),q.w,C.fRv(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hE(q,new C.an6(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dlT(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
c3W(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiP(i.a.d.bd)
C.aiP(i.f)
w=C.iug(i.a.c.a,i.f)
v=C.iji(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bM
if(!u){t=A.d.gH(w)
u=B.l(14)
s=B.K(A.aT,A.r,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=B.w(q==null?r.h(t,"fromEmail"):q)
p=B.w(r.h(t,"gameTitle"))
o=B.aJ(r.h(t,g))
o=o==null?h:A.h.M(o)
if(o==null)o=1
r=B.aJ(r.h(t,g))
r=r==null?h:A.h.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.p(h,B.x(B.a([D.fZw,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.p7,h,h,h),A.P,B.A(B.a([B.E(B.dW(A.Lo,new C.dlJ(i,t),h),1),A.ae,B.E(B.bJ(D.h7U,h,new C.dlK(i,t),h),1)],n),A.l,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(A.aD,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dL(i.y,new C.dlL(m),new C.dlM(i))
k=C.hi2(m,i.a.c.a,i.r)
j=C.aRH(m)
u=B.l(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.p(h,B.x(B.a([D.fRi,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.p7,h,h,h),A.ax,B.d(C.ilZ(m,i.a.c.a),h,h,h,h,h,h,A.Wd,h,h,h),A.P,B.bJ(D.fYN,h,new C.dlN(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(A.bp,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)},
bVB(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fiY.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EI(w[v])
t=A.h.D(u.d*0.58,0.12,0.3)
l.push(new B.rF(u.a,u.b,A.h.D(u.c*0.92,0,0.9),t).je())}s=A.d.gH(w)
w=B.l(16)
t=B.l(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i3,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.i,0,n,n),A.ax,B.d(d.c,n,2,A.a2,n,n,n,A.pX,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aI(n,n,n,n,D.c4s,n,n,n,new C.dlF(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a0W,B.p(n,D.c2q,A.f,n,n,new B.o(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.h.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ab(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.p(n,B.A(o,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.n),n,92,n,A.el,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dlG(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=B.P(d).ax.a===A.I?A.ny:A.qq,k=m?A.iJ.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iJ:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.ci
if(!o.x)return C.aSf(n,l,B.as(B.na(n,m?A.c:A.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fRv(o.a.c)
return new C.Oz(o.a.w,w,!0,o.gaVs(),n)}w=B.aE(d,A.dD,x.w).w
v=B.l(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.G,A.w.j(0.04),A.cM,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.m(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wm(new C.dm2(o,f,g),n,$.aTI(),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.a18,n,n,1/0),A.T,o.c3W()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbVA(),B.U(v).k("N<1,v>")))
w=B.ca(B.x(s,A.l,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,new B.Q(14,w.r.b+78,14,24),n,n,A.ah)
s=B.l(35)
v=B.a([new B.ab(0,A.G,A.w.j(m?0.28:0.08),A.i3,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aI(n,n,n,n,B.X(A.eK,j,n,n,n,18),n,n,n,o.gaVs(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.m(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.l(20)
return B.oU(!0,C.aSf(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.Oz,B.p(n,B.A(B.a([t,q,new B.D(A.iS,B.p(n,B.A(B.a([D.c_w,A.e7,C.asz(new C.dm3(o),A.kq,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(A.d3,n,n,p,n,n,A.n),n,n,n,n,A.hn,n,n,n),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.n2,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dm4(o),x.K)},
aVt(){var w,v
this.a.bv()
w=this.d
v=w>0?B.I(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j8(w,v)}}
C.aFB.prototype={
S(){return new C.bmA()},
hK(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aJI(){return this.r.$0()}}
C.bmA.prototype={
Y(){this.bzR()
this.d=B.Wg(this.a.d.bh)
$.tZ=$.tZ+1},
t(){C.b28()
this.bzQ()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ar8(v,new C.e_e(w),u,new C.e_f(w),new C.e_g(w,d),new C.e_h(w),null)}}
C.an6.prototype={
S(){return new C.aCJ(new B.au(A.aw,$.ax()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJI(){return this.z.$0()}}
C.aCJ.prototype={
Y(){this.byO()
this.a.toString
$.tZ=$.tZ+1},
t(){C.b28()
var w=this.d
w.V$=$.ax()
w.R$=0
this.byN()},
a3u(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OJ()
w=5
return B.b(C.arJ(t.a.c),$async$a3u)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hbm(s,C.fRv(r.c),q),$async$a3u)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uC(s.d.bd,A.a.i(r))
if(p!=null&&C.aRH(p)<=0){t.c.K(x.q).f.T(D.aVz)
w=1
break}}o=B.cX(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.T(D.fqC)
w=1
break}m=B.M6(t.a.c.a,new C.dlx(t))
if(m+0.001<n){t.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJI()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d8(r,q.c.a,n,A.ks,A.fx,"Game bet: "+q.f,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.fiK.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hE(s,new C.apZ(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hE(s,new C.an8(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3u,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aI(o,o,o,o,A.Ii,o,o,o,new C.dlA(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.l(12),h=x.p
j=B.eS(B.a([B.p(o,B.as(C.asz(new C.dlB(p),A.iH,k.c.a),o,o,o),A.f,o,o,new B.o(A.d3,o,o,i,o,o,A.n),o,o,o,D.bE_,A.f3,o,o,o)],h),o,o,!0,!0,D.a03,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.l(16)
i=B.K(A.aT,A.r,1)
k=B.X(D.bRf,D.bxD,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mD,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.p7,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.l(12)
s=x.a3
s=B.C(new B.N(B.a([2,5,10,25],x.t),new C.dlC(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.i,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.x(B.a([D.h9z,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bz(o,new B.b6(4,B.l(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lY,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.l(12)
r=B.K(B.a0(102,A.a82.l()>>>16&255,A.a82.l()>>>8&255,A.a82.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.l(10)
q=B.p(o,B.x(B.a([D.fQE,B.d("+ $"+A.h.ad(n*0.46,2),o,o,o,o,o,o,D.fGl,o,o,o),B.d("(46% return on $"+A.h.ad(p.e,2)+" bet)",o,o,o,o,o,o,A.pX,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.l(10)
u=B.p(o,B.x(B.a([D.fZO,A.P,q,A.P,B.p(o,B.x(B.a([D.fLq,B.d("$"+A.h.ad(m,2),o,o,o,o,o,o,D.fv0,o,o,o),B.d("8 pairs \xd7 $"+A.h.ad(m,2)+" each",o,o,o,o,o,o,A.pX,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(D.bsX,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fv(o,o,A.bi,o,o,o,o,o,o,A.c,o,A.hg,o,o,o,o,o,o,o,o)
return C.aSf(j,D.a03,B.ca(B.p(o,B.x(B.a([k,A.ax,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iy(B.d("Start Game ($"+A.h.ad(p.e,2)+")",o,o,o,o,o,o,A.ce,o,o,o),p.gcCV(),r),o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,i,l,o,D.caG,A.n),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A4.a1b,o,o,A.ah))}}
C.an8.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aCL(A.cT,new B.au(A.aw,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aCL.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rT(d){return this.bTJ(d)},
bTJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AM()
r=t.Po()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.aco(d),$async$rT)
case 5:w=1
break
case 4:q=A.h.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uy(d),$async$rT)
case 9:w=7
break
case 8:w=10
return B.b(t.F8(q,s,r),$async$rT)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rT,v)},
FL(d,e,f,g){return this.cAD(d,e,f,g)},
cAD(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bH9(s,C.bGQ(),C.hk8(),d,e,f,g),$async$FL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FL,v)},
AM(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5O(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aj1(t,s.e.a.a)
case"memory":return s.ghR()&&D.nc.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAJ()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAJ(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Po(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hi6()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bK(d)
if(u.f||u.c6)return
w=u.a
v=C.fRA(w.e,w.d.y2)
if(v!==C.fRA(d.e,d.d.y2)&&u.c!=null)u.m(new C.dnp(u,v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.byS()
w=i.a
w.toString
$.tZ=$.tZ+1
i.Q=C.fRA(w.e,w.d.y2)
i.b8E()
i.adK()
if(i.ghR()){i.c6=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PL()
i.adm()
i.bn=B.dh(A.h1,new C.dns(i))}if(A.d.q(D.SO,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uC(w,v)
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
m=s.b(t.h(u,h))?B.a1(s.a(t.h(u,h)),o,n):B.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.b26(!1,w,k.length===0||A.a.q(k,"@")?C.hi2(u,v,null):k,p,l,s)}else{w=w.c
w=C.hbq(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.hbq(w.c,w.a)}v=C.i_V()
v.bsw(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uC(v,w)
m=u==null?null:J.u(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.be7(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.Uh
else j=w.f===!0?D.r4:D.JD
i.AO(j)}}}i.b2=B.dh(A.n1,new C.dnt(i))
if(i.ghR())i.bi=B.dh(A.n0,new C.dnu(i))}if(i.ghR()&&!A.d.q(D.SO,i.a.e))i.bi=B.dh(A.n0,new C.dnv(i))
i.as=B.dh(A.fM,new C.dnw(i))},
PL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uC(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bF3(p,t.a.c.a),$async$PL)
case 5:o=e
if(t.c!=null)t.m(new C.dmF(t,o))
w=1
break
case 4:w=6
return B.b(C.LY(q,t.a.d.bd,!1),$async$PL)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bF3(n,t.a.c.a),$async$PL)
case 7:o=e
if(t.c!=null)t.m(new C.dmG(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PL,v)},
akn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LY(r,s.d.bd,!1),$async$akn)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.u(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=B.a1(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aQa(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.h.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dn8(t))
if(i!=null&&t.fr.length!==0){s=B.C(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e0()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dn9())}case 1:return B.h(u,v)}})
return B.i($async$akn,v)},
adm(){var w=0,v=B.j(x.H),u=this
var $async$adm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a1N(!0),$async$adm)
case 2:return B.h(null,v)}})
return B.i($async$adm,v)},
a1N(d){return this.cpS(d)},
cpR(){return this.a1N(!1)},
cpS(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1N=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.LY(q,s.d.bd,b3),$async$a1N)
case 3:o=b5
if(o==null)o=C.uC(t.a.d.bd,q)
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
j=s.b(l)?B.a1(l,r,k):B.T(r,k)
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
d=s.b(e)?B.a1(e,r,k):B.T(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?B.a1(a0,r,k):B.T(r,k)
a2=new B.V(Date.now(),0,!1).aa()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ag())}if(i&&!d.am(0,h))d.n(0,h,!1)
if(f&&!d.am(0,g))d.n(0,g,!1)
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
if(a6!=null&&a7!=null){a8=(a6.cb(a7)?a6:a7).bS(5e5)
if(!new B.V(Date.now(),0,!1).d4(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.ir6(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bI
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dmV(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dmW(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d4(s)){s=s.bB(b1).a
r=A.o.ar(s,1e6)
t.m(new C.dmX(b2,t,r+(A.o.F(A.o.ar(s,1000),1000)>0?1:0)))
w=1
break}if(t.c6){t.m(new C.dmY(b2,t))
b2=t.a.e
if(b2==="pattern")t.aab()
else if(b2==="memory"){t.b8D()
if(t.c!=null)t.m(new C.dmZ())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a1N,v)},
aR7(d){var w,v,u,t,s=this
if(d!=null){w=new B.e0()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e6(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aR6(){return this.aR7(null)},
aab(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aab=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cnk()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.LY(q,s.d.bd,!1),$async$aab)
case 5:r=t.b4z(e)
case 4:if(t.c==null){w=1
break}t.aR7(r)
t.m(new C.dm7(t))
t.Em()
case 1:return B.h(u,v)}})
return B.i($async$aab,v)},
b4z(d){var w,v,u,t=null
if(d==null)return t
w=J.u(d,"sessionState")
if(!x.f.b(w))return t
v=J.u(w,"patternSeed")
if(typeof v=="number")return A.h.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
cnk(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4z(C.uC(w.d.bd,v))},
adK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$adK)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.u(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dmE(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adK,v)},
pA(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aA(),$async$pA)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHC().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aC("Int","ngmy_game_"+n+"_"+o,r),$async$pA)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pA,v)},
a3M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.aZ==null||t.f||t.aY){w=1
break}if(t.c6){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LY(r,s.d.bd,!1),$async$a3M)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uC(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a8(p)
r.u(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bj(J.k(r==null?"":r))
s=s?null:J.u(p,"sessionUpdatedAt")
l=B.bj(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cb(l)){w=1
break}s=t.aZ
s.toString
r=t.a
s.be7(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Uh
else k=r.f===!0?D.r4:D.JD
w=7
return B.b(t.AO(k),$async$a3M)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dna())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a3M,v)},
aif(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aif=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.aZ==null||q.a.Q==null||q.aY){w=1
break}q.aY=!0
t=3
o=q.aZ
o.toString
p=o.cTa(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSC(n,o,p),$async$aif)
case 6:q.a.bv()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aY=!1
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aif,v)},
AO(d){return this.c04(d)},
c04(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$AO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aZ==null){w=1
break}s=t.aZ.w
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
return B.b(t.JX(s,s),$async$AO)
case 9:w=4
break
case 6:w=10
return B.b(t.YX(s,s),$async$AO)
case 10:w=4
break
case 7:w=11
return B.b(t.acn(s,s),$async$AO)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghR()?12:13
break
case 12:w=14
return B.b(t.Iq(),$async$AO)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$AO,v)},
a0L(d,e){return this.chF(d,e)},
chF(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a0L=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aif(),$async$a0L)
case 6:if(d===D.r3){w=1
break}w=4
break
case 5:if(d===D.r3){w=1
break}case 4:w=7
return B.b(t.AO(d),$async$a0L)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a0L,v)},
adD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uC(s.d.bd,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.u(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=B.a1(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?B.a1(k,r,m):B.T(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aSC(t.a.d.bd,q,l),$async$adD)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$adD,v)},
Iq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uC(s.d.bd,q)
if(p==null){w=1
break}o=J.u(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.T(s,r)
n.n(0,"gameOver",!0)
C.hkK(t.a.d.bd,q,n)
C.iut(t.a.d.bd,q)
w=3
return B.b(C.aiQ(t.a.d.bd),$async$Iq)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iq,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adD()
else if(!v.f)v.c6M()
C.b28();++v.RG
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
w.V$=$.ax()
w.R$=0
v.byR()},
cGd(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c6)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.uy("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dnj())},
b8E(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e6(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b8D()
break
case"scramble":r.bh=0
r.b8F()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e6(5,x.N)
for(t=0;t<5;++t)v[t]=D.dz1[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.cg)
break
case"math":r.y2=0
r.b8C()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b8G()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e6(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csh()){w=J.e6(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Rz()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aR6()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Em()}break
case"color":r.bd=0
r.b8x()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b9U()
break
default:if(A.d.q(D.SO,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5O(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csh(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b8G(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e6(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.h.M(Math.pow(p,v))}u=A.h.M(Math.pow(p,o))
r.w=A.o.v(u)
r.aH=A.d.aN(n,", ")
q=r.w
t=x.s
s=B.a([A.o.v(u+p),A.o.v(u-p),A.o.v(u+p*2)],t)
t=B.a([q],t)
A.d.u(t,s)
A.d.e0(t,r.d)
r.x=t},
b8C(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHC().length-6)u.at=0
w=$.bHC()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b8F(){var w=this,v=w.w=D.d9X[A.o.F(w.at+w.bh,105)]
w.ax=C.iuK(v)
w.ay=B.c2(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.cg)},
b9U(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cz(B.dw(0,0,0,120+w.d.aw(280),0,0),new C.dn7(w))},
c07(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rT("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ar(new B.V(v,0,!1).bB(u).a,1000)}if(w<520){t.m(new C.dmC(t))
v=t.a0
if(v>=5){t.pA()
t.uy("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b9U()
t.m(new C.dmD())}}else t.rT("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cFs(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dne())
if(u<0)return
t.m(new C.dnf(t,u,v,d))},
cFt(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dng(u,d,v))},
bKw(){var w,v,u=this
if(u.f)return
if(A.d.aU(u.ay,new C.dm8())){u.c.K(x.q).f.T(D.fqw)
return}w=A.d.hg(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dm9(u))
if(u.ghR()&&D.nc.q(0,u.a.e))u.a21()
if(u.bh>=5){u.pA()
if(u.ghR()&&D.nc.q(0,u.a.e))u.nl(!0)
else u.uy("All 5 words unscrambled!")}else{u.b8F()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.m(new C.dma())}}else u.rT("Wrong word \u2014 paid for "+u.bh+"/5.")},
b8x(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dP,A.dK,A.im,A.tB][u]
w.w=t},
aQa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.i8(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cu),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.h.M(m):B.cb(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.h.M(m):B.cb(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.h.bg(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aJ(J.u(j,g))
i=f==null?null:A.h.M(f)
if(i!=null)h.fx=i}},
b8D(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.C(p.dy,x.S)
A.d.u(w,p.dy)
p.fr=w
if(p.ghR()&&p.a.Q!=null){w=p.a
v=w.d.bd
w=w.Q
w.toString
u=C.uC(v,w)
t=u==null?null:J.u(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a1(t,w,v):B.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.h.M(r)
else{w=r==null?null:J.k(r)
q=B.cb(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e0()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQa(s)}else A.d.e0(p.fr,p.d)},
cpb(d){var w,v,u,t=this
if(t.c6)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dmO(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dmP(t,v,u))
if(t.ghR()&&D.nc.q(0,t.a.e))t.a21()
if(t.go.a>=t.fr.length){t.pA()
if(t.ghR()&&D.nc.q(0,t.a.e))t.nl(!0)
else t.aAM()}return}t.k1=!0
B.bO(D.bCY,new C.dmQ(t),x.c)},
b80(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dn_(u))
if(u.y1>=5){u.pA()
u.uy("All 5 questions correct!")}else{u.b8G()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dn0())}}else u.rT(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dn1(u))
if(u.y2>=6){u.pA()
u.uy("All 6 math questions correct!")}else{u.b8C()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dn2())}}else{u.WU(u.y2+1)
u.rT(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dn3(u))
if(u.bd>=5){u.pA()
u.uy("All 5 color rounds correct!")}else{u.b8x()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dn4())}}else u.rT("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pA()
u.aAM()}else u.c.K(x.q).f.T(D.frg)},
cFr(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.co(q.k4,0)
v=A.o.ar(d,3)
u=A.o.F(d,3)
t=A.o.ar(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dnd(q,d,w))
if(A.d.hg(q.k4)==="123456780"){q.pA()
q.aAM()}}},
Rz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Rz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dmR(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dmS(t,q).$0()
t.c.eq()
w=6
return B.b(B.bO(A.kV,null,r),$async$Rz)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dmT(t).$0()
t.c.eq()
w=7
return B.b(B.bO(A.k4,null,r),$async$Rz)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dmU(t))
case 1:return B.h(u,v)}})
return B.i($async$Rz,v)},
cFu(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rT("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dnh(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pA()
u.uy("Perfect Simon run!")
return}u.m(new C.dni(u))
u.Rz()}},
Em(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Em=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dmb(t))
s=x.H
w=3
return B.b(B.bO(A.jq,null,s),$async$Em)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dmc(t,o).$0()
t.c.eq()
w=7
return B.b(B.bO(A.a0N,null,s),$async$Em)
case 7:if(t.c==null){w=1
break}new C.dmd(t).$0()
t.c.eq()
w=8
return B.b(B.bO(A.iQ,null,s),$async$Em)
case 8:case 5:r.length===q||(0,B.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dme(t))
case 1:return B.h(u,v)}})
return B.i($async$Em,v)},
WU(d){return this.bF7(d)},
bF7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$WU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.aA(),$async$WU)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHC().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aC("Int","ngmy_game_"+q+"_"+r,o),$async$WU)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$WU,v)},
cFo(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rT("Wrong tile \u2014 paid for "+v.aAJ()+"/"+C.hi6()+" moves.")
return}v.m(new C.dnb(v,w))
if(v.ghR()&&D.nc.q(0,v.a.e))v.a21()
if(v.x1>=w)if(v.x2>=7){v.pA()
if(v.ghR()&&D.nc.q(0,v.a.e))v.nl(!0)
else v.uy("All 7 pattern rounds correct!")}else{v.m(new C.dnc(v))
v.Em()}},
JX(d,e){return this.cnA(d,e)},
uy(d){return this.JX(null,d)},
aAM(){return this.JX(null,null)},
cnA(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dmM(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d8(q,s.c.a,r,A.h7,A.fx,"Game payout: "+s.f,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiM(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.h.ad(r,2)+" added to your balance!":e
s=t.a
C.ve(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,o,"YOU WIN!",!0),$async$JX)
case 3:w=4
return B.b(C.aiE(t.a.f,o),$async$JX)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JX,v)},
FJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nc.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.czH(),$async$FJ)
case 5:w=1
break
case 4:s=t.AM()
r=t.Po()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.aco("Time's up \u2014 no progress to pay."),$async$FJ)
case 8:w=1
break
case 7:q=A.h.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uy("Complete! Max payout earned."),$async$FJ)
case 12:w=10
break
case 11:w=13
return B.b(t.F8(q,s,r),$async$FJ)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FJ,v)},
RH(d){return this.crX(d)},
a21(){return this.RH(!1)},
crX(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RH=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nc.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.V(Date.now(),0,!1)
a2=r.bx
if(a2!=null&&a1.bB(a2).a<3e6){w=1
break}r.bx=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.uC(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.LY(q,r.a.d.bd,!1),$async$RH)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.u(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.a1(n,a3,a5):B.T(a3,a5)
l=J.u(m,"scores")
k=a2.b(l)?B.a1(l,a3,a5):B.T(a3,a5)
J.aK(k,p,r.AM())
J.aK(m,"scores",k)
if(r.a.e==="memory"){j=J.u(m,"memoryMatchedBy")
i=a2.b(j)?B.a1(j,a3,a5):B.T(a3,a5)
a6=r.id
a6=B.C(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aK(i,p,a6)
J.aK(m,"memoryMatchedBy",i)
h=B.aR(x.S)
for(a6=i,a6=new B.dn(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.h.M(f):B.cb(J.k(f),null)
if(e!=null)J.c5(h,e)}}a6=h
a6=B.C(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aK(m,"memoryMatched",a6)}d=J.u(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.T(a3,a5)
J.aK(a0,p,r.a.x)
J.aK(m,"wagers",a0)
w=11
return B.b(C.aSC(r.a.d.bd,q,m),$async$RH)
case 11:r.a.bv()
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
return B.i($async$RH,v)},
nl(d){return this.czI(d)},
czH(){return this.nl(!1)},
czI(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nl=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FJ(),$async$nl)
case 5:w=1
break
case 4:w=6
return B.b(t.RH(!0),$async$nl)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.LY(q,s.d.bd,!0),$async$nl)
case 7:o=b7
n=t.Po()
w=o==null?8:9
break
case 8:m=A.h.D(t.AM()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.aco("Time's up \u2014 no progress to pay."),$async$nl)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uy("Complete! Max payout earned."),$async$nl)
case 17:w=15
break
case 16:w=18
return B.b(t.F8(m,t.AM(),n),$async$nl)
case 18:case 15:case 11:w=19
return B.b(t.Iq(),$async$nl)
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
g=s.b(i)?B.a1(i,r,h):B.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.a1(f,r,h):B.T(r,h)
d=B.aJ(e.h(0,p))
a0=d==null?null:A.h.M(d)
if(a0==null)a0=t.AM()
d=B.aJ(e.h(0,j))
a1=d==null?null:A.h.M(d)
if(a1==null)a1=0
a2=A.h.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.aco("Time's up \u2014 no progress to pay."),$async$nl)
case 22:w=23
return B.b(t.Iq(),$async$nl)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aJ((s.b(a3)?B.a1(a3,r,h):B.T(r,h)).h(0,j))
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
t.m(new C.dn5(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.h.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d8(h,b0,a9,A.h7,A.fx,d,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.h.ad(a9,2)+" (includes opponent bonus $"+A.h.ad(a7,2)+")":"+$"+A.h.ad(a8,2)+" (your progress payout)"
s=t.a
C.ve(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FL(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nl)
case 24:w=25
return B.b(t.Iq(),$async$nl)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nl,v)},
F8(d,e,f){return this.cny(d,e,f)},
cny(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$F8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dmK(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d8(s,q.c.a,r,A.h7,A.fx,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiM(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.h.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aj1(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cB(t.cy,0,new C.dmL()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.h.ad(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.h.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.ve(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FL(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$F8)
case 3:w=4
return B.b(C.aiE(t.a.f,j),$async$F8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$F8,v)},
c6M(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AM()
v=o.Po()}catch(u){return}if(v<=0||w<=0)return
t=A.h.D(w/v,0,1)
s=B.ou(A.h.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d8(q,p.c.a,s,A.h7,A.fx,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cv,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ve(s,n,"Left early \xb7 +$"+A.h.ad(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
acn(d,e){return this.bVv(d,e)},
bVv(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acn=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.d8(r,q,p,A.h7,A.fx,"Game payout: "+s+" (draw, stake returned)",null,null,A.cv,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ve(o,null,"Draw. Your $"+A.h.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,"Nobody won, so your $"+A.h.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acn)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acn,v)},
YX(d,e){return this.bVw(d,e)},
aco(d){return this.YX(null,d)},
bVw(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$YX=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.ve(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,e,"YOU LOSE",!1),$async$YX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$YX,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.ar(m,60)
m=A.a.b0(A.o.v(A.o.F(m,60)),2,"0")
v=B.aI(n,n,n,n,A.asW,n,n,n,new C.dnk(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bI
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bI):t.f,n,2,A.a2,n,n,n,A.fF,n,n,n),1)
r=B.l(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.asz(new C.dnl(o),A.o4,t.c.a),A.f,n,n,new B.o(A.d3,n,n,r,n,n,A.n),n,n,n,n,A.hm,n,n,n)],q),A.l,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.l(10)
s=B.p(n,B.A(B.a([B.E(B.d("Win $"+A.h.ad(t.x*1.46,2)+" \xb7 stake $"+A.h.ad(o.a.x,2)+" \u2022 Progress "+o.AM()+"/"+o.Po(),n,n,n,n,n,n,D.fAz,n,n,n),1),new C.arL(o.a.c.a,new C.dnm(o),n),A.ae,D.bVZ,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o6,n,n,n)],q),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hl,n,n,n)
v=o.a.w
m=B.U(v).k("N<1,t>")
m=B.C(new B.N(v,new C.dnn(),m),m.k("ak.E"))
w=B.l(14)
v=B.K(A.aT,A.r,1)
p=C.aSf(n,D.bgV,B.bm(!0,new B.D(Am.Ow,B.x(B.a([r,s,A.P,new B.fh(new C.dno(o),n),A.am,B.E(B.p(n,o.bVu(),A.f,n,n,new B.o(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cq,n,n,n),1)],q),A.al,n,A.e,A.i,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c6)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iN.l()>>>16&255,A.iN.l()>>>8&255,A.iN.l()&255)
v=B.l(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.p(A.z,new B.dt(!1,B.p(n,B.x(B.a([D.fmw,A.af,B.d(o.cT,n,n,n,n,n,n,D.fC7,A.K,n,n),A.am,B.d(o.bT,n,n,n,n,n,n,D.fAf,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.t9,A.z4,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c7L(){var w=this.k3
return B.cm(new C.dmJ(this,w,A.h.cC(this.fr.length/w)))},
bVu(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c7L()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pX,n,n,n),B.d("Words "+o.bh+"/5",n,n,n,n,n,n,A.Ff,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.m(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fU,B.iB(o.ay.length,new C.dmr(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fU,B.iB(o.ch.length,new C.dms(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iy(D.h2u,o.gbKv(),B.fv(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.co,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.au4(m,o.e,new C.dmt(o),new C.dmu(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pX,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Ff,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(new B.dx(A.dC,A.z,A.f,B.d(w,n,n,n,n,n,n,A.mD,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dmv(o),B.U(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.cm(new C.dmw(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pX,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Ff,n,n,n),A.P,B.E(B.l4(1,B.iB(4,new C.dmx(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.cm(new C.dmy(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dP,A.dK,A.im,A.tB]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pX,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Ff,n,n,n)
v=o.aL
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.m(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e6(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fv(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fi,n,n,n,n,n,n,n)
r[q]=new B.D(A.cw,new B.a5(1/0,n,B.iy(B.d(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dmz(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bi:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.acg,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fxs,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.m(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aE(s,A.c_,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qt(B.az(A.bZ,B.cU(n,B.x(B.a([w,A.P,v,A.b4,s,A.b4,new B.D(A.H5,B.d(m,n,n,n,n,n,n,B.m(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.i,0,A.p),p,n,A.b0,n,T.Cy,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc06(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SO,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.ijS(m,new C.dmA(o),new C.dmB(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anW.prototype={
S(){return new C.bjE()},
cZ_(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjE.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aE(a3,A.dD,a0).w
a0=B.aE(a3,A.dD,a0).w
v=x.p
u=B.a([B.bUf(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b0(A.o.v(B.bM(s)),2,"0")
q=A.a.b1(A.o.v(B.bC(s)+1),2)
p=B.l(18)
o=B.K(W.Ch,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.G,B.a0(89,A.rE.l()>>>16&255,A.rE.l()>>>8&255,A.rE.l()&255),A.eS,20),new B.ab(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dp,14)],n)
l=B.ao(d,B.p(d,d,A.f,d,d,new B.o(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.l(10)
j=B.K(W.Ch,A.r,3.4)
n=B.a([new B.ab(0,A.G,B.a0(166,A.rE.l()>>>16&255,A.rE.l()>>>8&255,A.rE.l()&255),A.dL,10),new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,6)],n)
n=B.A(B.a([B.p(d,d,A.f,d,d,new B.o(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dlP,D.cWn,d),A.n),d,42,d,d,d,d,d,56),A.b4,e.baO(a3,!0)],v),A.l,d,A.e,A.i,0,d,d)
k=B.Ej(t.a,1,A.a2,D.fFv)
j=t.b
i=t.c
h=B.Ej("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fFK)
g=B.Ej(e.b5A(j),1,A.a2,D.fyj)
q=B.A(B.a([B.E(B.x(B.a([D.fWi,B.Ej(a1.c,1,A.a2,D.aXC)],v),A.E,d,A.e,A.i,0,A.p),1),B.x(B.a([D.fW3,B.d(r+"/"+q,d,d,d,d,d,d,D.aXC,d,d,d)],v),A.dO,d,A.e,A.i,0,A.p)],v),A.l,d,A.e,A.i,0,d,d)
r=B.p(d,d,A.f,B.a0(89,D.yu.l()>>>16&255,D.yu.l()>>>8&255,D.yu.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atB("INVESTED","$"+B.dG(j),!0),e.atB("DAILY ROI",A.h.ad(i*100,2)+"%",!0),e.atB("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j_,A.i,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h2_,A.rf,B.p(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fUG,A.bF,k,A.ax,h,A.ax,g,A.P,q,A.am,r,A.am,i,A.ax,B.Ej("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fER)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.o(d,d,o,p,m,D.cbx,A.n),d,d,d,d,A.bH,d,d,1/0),A.abB],v))}u.push(D.fMb)
u.push(A.rf)
A.d.u(u,new B.N(a2,new C.dqZ(e,a3),B.U(a2).k("N<1,v>")))
return B.c6(d,A.L,B.bm(!1,B.ca(B.x(u,A.E,d,A.e,A.i,0,A.p),A.t,d,A.y,d,d,new B.Q(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
baO(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(8),t=B.K(A.k0,A.r,1)
return B.p(w,B.A(B.a([B.X(A.a3u,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eQ,w,w,w)},
b5A(d){var w=A.a.b0(A.o.v(A.h.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.b1(w,w.length-4)},
atB(d,e,f){var w=null,v=B.a0(217,D.yu.l()>>>16&255,D.yu.l()>>>8&255,D.yu.l()&255)
v=B.d(d,w,w,w,w,w,w,B.m(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Ej(e,w,w,B.m(w,w,E.Ce,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cpG(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd2R(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
a0=B.l(18)
w=B.K(A.aS,A.r,2)
p=x.V
o=B.a([new B.ab(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.UD,16),new B.ab(0,A.G,B.a0(115,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),A.dp,14),new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,8)],p)
n=B.ao(d,B.p(d,d,A.f,d,d,new B.o(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.l(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.h.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.p(d,d,A.f,d,d,new B.o(d,d,l,m,B.a([new B.ab(0.5,A.G,k,A.J,14),new B.ab(0,A.G,j,A.J,6),new B.ab(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.ca6,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eEM],h),d),d),A.b4,e.baO(b2,!0)],h),A.l,d,A.e,A.i,0,d,d)
a6=B.Ej(a6,1,A.a2,D.fuI)
i=B.Ej(e.b5A(a3),1,A.a2,D.fKq)
j=B.A(B.a([e.b50(A.h.ad(2.86,2)+"%"),A.e7,e.b50("261d")],h),A.l,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fNw,B.Ej("$"+B.dG(a3),1,A.a2,D.fJ9)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.fvy,d,d,d)],h),A.dO,d,A.e,A.i,0,d,d)
k=B.p(d,d,A.f,B.a0(89,A.by.l()>>>16&255,A.by.l()>>>8&255,A.by.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aB0("Daily","$"+B.dG(a4)),1),A.e7,B.E(e.aB0("Total","$"+B.dG(a4*261)),1),A.e7,B.E(e.aB0("Days","261"),1)],h),A.l,d,A.e,A.i,0,d,d)
g=q?d:new C.dqY(e,b3,a3,t)
f=A.h.U(127.5)
f=B.fv(d,d,A.bs,B.a0(f,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.b9(B.l(10),D.b6L),d,d,d,d,d)
return B.p(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fX1,A.bF,a6,A.cS,i,A.fE,j,A.fE,m,A.fE,k,A.fE,l,A.P,new B.a5(1/0,40,B.iy(new B.dx(A.dM,A.z,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fw4,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.o(d,d,w,a0,o,D.cc8,A.n),d,d,d,A.kB,D.bEL,d,d,1/0)},
b50(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(5),t=B.K(A.cA,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.fv6,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.z8,w,w,w)},
aB0(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(7),t=B.K(A.bm,A.r,1)
return B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fFc,w,w,w),A.rg,new B.dx(A.dC,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fI8,w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)}}
C.ajY.prototype={
S(){var w=null,v=B.a([],x._),u=$.ax()
return new C.azM(v,new B.au(A.aw,u),new B.au(A.aw,u),B.n2(0,w,w),new B.i4(),D.U6,C.aiB(),B.a([],x.fw),B.aR(x.N),B.n2(0,w,w))}}
C.azM.prototype={
Y(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.Af(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bp(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.adP()
r.PK()
r.atc()
r.cCH()
r.cCX()
$.aU.x1$.push(new C.cNS(r))
r.a.toString},
PK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as9(),$async$PK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cNc(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PK,v)},
gaCE(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPF())return!0
return!1},
gPF(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYs(){var w,v=this.CW
if(v==null)return A.bC
w=v.bB(new B.V(Date.now(),0,!1))
return w.a<0?A.bC:w},
bFV(){var w=this
if(w.a.c.w)return
if(w.gPF()){if(!w.cx)w.m(new C.cN2(w))}else if(w.cx)w.m(new C.cN3(w))},
cvW(){this.m(new C.cNm(this))},
uH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cNj(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cNk(t))
w=1
break}w=3
return B.b(C.ch0(o.a,s),$async$uH)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.ch1(t.a.c.a,s),$async$uH)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNl(t,r,q))
t.cEQ()
t.bFV()
if(r===3)t.a_2(r)}case 1:return B.h(u,v)}})
return B.i($async$uH,v)},
a_2(d){return this.c7D(d)},
c7D(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHd(q,r,new C.cNe(t),d,s.c.a),$async$a_2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_2,v)},
yc(d){return this.bHr(d)},
atc(){return this.yc(!1)},
bHr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9u(k,C.hHW(l.d)),$async$yc)
case 3:j=m
w=4
return B.b(C.chs(k),$async$yc)
case 4:s=j.a=f
w=5
return B.b(B.at0(k),$async$yc)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WS(!0,l,q,p)
m.a=s
w=8
return B.b(C.asb(k,s),$async$yc)
case 8:case 7:w=9
return B.b(C.VS(k),$async$yc)
case 9:o=f
w=10
return B.b(C.a8Q(k),$async$yc)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cN4(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yc,v)},
Rc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Rc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PK(),$async$Rc)
case 3:s=t.c
if(s==null){w=1
break}r=B.ee(new C.cNh(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).ce(r),$async$Rc)
case 4:w=5
return B.b(t.PK(),$async$Rc)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Rc,v)},
cH3(){this.m(new C.cNF(this))},
cCX(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dh(A.t4,new C.cNz(w))},
cEQ(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPF()||w.CW==null)return
w.id=B.dh(A.fM,new C.cNC(w))},
cCH(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dh(A.jJ,new C.cNy(w))
w.FR()},
FR(){return this.cEP()},
cEP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.aA(),$async$FR)
case 7:q=e
p=B.aV(J.u(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.W.aP(0,p,null)
if(x.f.b(o)){m=B.E0(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.M9(),$async$FR)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSe(),$async$FR)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aC("String","app_config",A.W.av(k.aj(),null)),$async$FR)
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
break}if(i.a!==r.ay)r.m(new C.cNA(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FR,v)},
b9w(){A.d.b_(this.f,new C.cNx())},
adP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O_(t.a.c.a),$async$adP)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b_(s,new C.cN9())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.I(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cNa(t,s))
t.a2Y(!0)
B.bO(A.jq,new C.cNb(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$adP,v)},
ahE(){var w=0,v=B.j(x.H),u=this
var $async$ahE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apJ(u.a.c.a,u.f),$async$ahE)
case 2:return B.h(null,v)}})
return B.i($async$ahE,v)},
bz(d){this.bK(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a1(0)
u=v.go
if(u!=null)u.a1(0)
u=v.id
if(u!=null)u.a1(0)
u=v.r
w=$.ax()
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
acL(d){var w,v=this
v.m(new C.cN7(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BS(d,A.ck,A.kV)
else $.aU.x1$.push(new C.cN8(v,d))
if(d===0)v.a2Y(!0)
if(d===1)v.cxZ(!0)},
a2Y(d){$.aU.x1$.push(new C.cNp(this,d))},
aCh(){return this.a2Y(!1)},
a2h(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2I(),$async$a2h)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cNi(t))
case 1:return B.h(u,v)}})
return B.i($async$a2h,v)},
nk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$nk=B.e(function(c8,c9){if(c8===1){s.push(c9)
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
return B.b(C.as4(a9.a,b0),$async$nk)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uH(),$async$nk)
case 10:q.m(new C.cNq(q))
w=1
break
case 8:w=11
return B.b(q.uH(),$async$nk)
case 11:if(q.c!=null&&q.ch===3)q.a_2(3)
case 6:case 4:q.m(new C.cNr(q,c5))
C.VE(q.a.c.a,"user",c5)
q.aCh()
t=13
a8={}
w=16
return B.b(q.a2h(),$async$nk)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2I(),$async$nk)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cNs(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bFh("",null)
q.m(new C.cNt(q,p))
C.VE(q.a.c.a,"ai",p)
q.aCh()
r=[1]
w=14
break}o=B.ns(a9)
a9=q.a
n=""
m=C.hHW(a9.d)
w=C.hHP(c5)?20:21
break
case 20:w=22
return B.b(C.chr(q.a.c.a),$async$nk)
case 22:q.db=c9
w=23
return B.b(q.yc(!0),$async$nk)
case 23:case 21:w=24
return B.b(B.a9u(q.a.c.a,m),$async$nk)
case 24:l=c9
k=C.i_O(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b0(A.o.v(B.bM(b3)),2,"0")
b4=A.a.b0(A.o.v(B.bY(b3)),2,"0")
b5=A.a.b0(A.o.v(B.dg(b3)),2,"0")
b6=A.a.b0(A.o.v(B.fV(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bC(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VS(q.a.c.a),$async$nk)
case 25:i=c9
h=C.hra(i,25)
w=26
return B.b(C.a8Q(q.a.c.a),$async$nk)
case 26:g=c9
f=C.hsR(g)
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
return B.b(C.aiC(a9,q.a.c.a,c5),$async$nk)
case 27:a0=c9
a1=""
if(C.hHP(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.imJ(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hV6(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.rm(o,a2,A.i1,null,null),$async$nk)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bFh(a8.a,a3.a)
a4=c2
a5=B.hH7(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.C(C.ipv(c5),x.an)
a6=a9
J.h1(a6,C.ipw(c5))
J.h1(a6,C.ipx(c5))
J.h1(a6,B.hGy(c5))
J.h1(a6,C.ipA(c5,q.a.c.w))
a8.b=a6}c3=C.ioG(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiT(c3,a6,m,q.a.c.a),$async$nk)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cNu(a8,q,a7))
C.VE(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KD(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cNv(q))
C.VE(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cNw(q))
q.aCh()
q.ahE()
if(!q.a.c.w)q.uH()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nk,v)},
coB(d){var w=B.T(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
coC(d){var w,v,u,t,s,r,q,p=J.u(d,"phoneActions")
if(!x.j.b(p))return A.iY
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckA(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KD(d){return this.cwt(d)},
cwt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiO(p,o,new C.cNn(t,p)),$async$KD)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HC(p,null,o,!1,!0,t.a.c.a),$async$KD)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.K(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lN,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HC(p,l.f,o,k,n,j),$async$KD)
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
return B.b(C.b0r(p,B.a([new C.rW("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KD)
case 14:t.atc()
case 13:p=t.c.K(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new B.b0(o,A.dn,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KD,v)},
SV(d){return this.cFi(d)},
cFi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$SV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiO(d,n,new C.cNE(t)),$async$SV)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HC(d,null,n,!1,!0,t.a.c.a),$async$SV)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.T(B.b2(null,null,null,A.c9,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.lN,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HC(d,q.f,r,p,n,o),$async$SV)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$SV,v)},
cxZ(d){$.aU.x1$.push(new C.cNo(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.P(d).ax.a===A.I,j=k?A.bA:A.Cn,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.al4,D.bo6],w):B.a([A.aN,A.yp],w)
v=B.l(22)
u=B.a([new B.ab(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckb():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.az(l,B.p(l,C.hgb(m.a.f.Q,48),A.f,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dl,l,l,l)
s=B.p(l,l,A.f,l,l,D.b8S,l,8,l,l,l,l,l,8)
if(m.gaCE()&&m.d===0)q=m.gPF()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.bc,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.m(l,l,B.a0(A.h.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cD,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aI(l,l,l,l,A.nQ,l,l,l,new C.cNK(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.n),l,l,l,F.an0,D.bFx,l,l,l)
v=k?D.uo:A.c
u=B.l(14)
t=B.K(k?A.bw:A.dY,A.r,1)
u=B.p(l,B.A(B.a([m.bKg(),m.cF1(1,A.lr,"Music")],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCE()){v=B.a([],p)
if(m.gPF()){s=B.a0(38,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255)
r=B.l(12)
q=B.K(B.a0(115,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255),A.r,1)
v.push(new B.D(A.Ox,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hZ5(m.gaYs())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fHz,A.K,l,l),A.f,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPF()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.l(12)
q=B.l(12)
o=B.X(A.kb,k?A.iz:A.hK,l,l,l,16)
v.push(new B.D(A.Ox,B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.m(l,l,k?A.iz:A.hK,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcvV(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcH2():l
v.push(B.E(new C.as7(s,q,new C.cNL(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.i,0,A.p)}else v=m.bKh(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.htP(r)
t=B.a([w,A.af,new B.D(A.hZ,u,l),A.P,B.E(B.huM(B.a([v,new C.asa(q,o,n,new C.cNM(m,d),s,l)],p),A.t,t,A.y,new C.cNN(m),l),1)],p)
if(m.d===0&&!m.gaCE()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6D:D.a5T
w.push(new B.a5(l,36,B.hV(l,new C.cNO(m),v.length,l,l,A.aM,new C.cNP(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.m(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.m(l,l,k?A.aE:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.l(22)
o=B.l(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bz(l,new B.b6(4,q,A.a1),l,A.CI,l,l,l,l,!0,new B.b6(4,o,new B.ay(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cNQ(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWo,l,l),1)
s=m.at
r=s?l:m.gcyZ()
w.push(B.A(B.a([u,new B.JS(v,A.aN,l),A.bn,B.aG(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.exA:V.asO,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.ai)],p),A.dO,l,A.e,A.i,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lI:A.c
t.push(B.uD(A.ud,B.p(l,new B.D(A.CD,w,l),A.f,l,l,new B.o(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.ud,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XH(i,new C.cNR(m),B.c6(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKg(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.P(p).ax.a===A.I
if(w)p=B.a0(A.h.U(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.U(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(A.uY,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.az(q,B.cU(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cN5(this),q,q,q,q,q,q,!1,A.a4),1)},
cF1(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.P(p).ax.a===A.I
if(w)p=B.a0(A.h.U(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.U(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bn,B.d(f,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.az(q,B.cU(q,B.A(r,A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cND(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKh(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.buF:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.l(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.p(s,B.kx(!0,s,t.ok,new C.cN6(t,e,d),u,s,A.bT,s,s,!1,!1),A.f,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.hZ,s,s,s,s)},
aRK(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iY:this.coC(d),k=m?A.mu:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hgb(this.a.f.Q,28),o),A.ae],j))
w=m?A.dO:A.E
j=B.a([],j)
if(h)j.push(D.exR)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_J:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ab(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dL,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.m(o,o,e?A.aE:A.dZ,o,o,o,o,o,o,o,o,12,A.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.d(n,o,o,o,o,o,o,B.m(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hbU(m,B.p(o,n,A.f,o,o,new B.o(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,Ag.wE,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hHc(l,e,this.gcFh()))
i.push(new B.di(1,A.cn,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dO,o,k,A.i,0,o,o),o)},
bKf(d,e){return this.aRK(d,e,!1)}}
C.aN6.prototype={
Y(){this.a3()
$.zh().aV(0,this.gF2())},
t(){$.zh().a6(0,this.gF2())
this.a2()}}
C.aN7.prototype={
Y(){this.a3()
$.zh().aV(0,this.gF2())},
t(){$.zh().a6(0,this.gF2())
this.a2()}}
C.aN8.prototype={
Y(){this.a3()
$.zh().aV(0,this.gF2())},
t(){$.zh().a6(0,this.gF2())
this.a2()}}
C.aO5.prototype={
Y(){this.a3()
$.zh().aV(0,this.gF2())},
t(){$.zh().a6(0,this.gF2())
this.a2()}}
C.Xw.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.aps.prototype={
S(){return new C.aER()}}
C.aER.prototype={
Y(){var w,v=this
v.a3()
w=v.a
v.d=w.d
v.e=B.bp(w.e,!0,x.o)
v.f=v.a.f},
li(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
AZ(d,e){return this.cKM(d,e)},
cKM(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$AZ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dHw(q,e))
t=3
w=6
return B.b(d.$0(),$async$AZ)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dHx(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AZ,v)},
Br(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Br=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.vi(r,q),$async$Br)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Br,v)},
abd(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$abd)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.OR(s,B.KX(B.c4u(r,q,s,p).f2(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abd,v)},
YG(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pF(s,t.a.c,!1),$async$YG)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.AZ(new C.dHl(t),"Preparing download\u2026"),$async$YG)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YG,v)},
a_e(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pF(s,t.a.c,!1),$async$a_e)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.AZ(new C.dHv(t),"Creating QR code\u2026"),$async$a_e)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_e,v)},
a_d(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ihz(r),$async$a_d)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.AZ(new C.dHk(t,s),"Looking up code\u2026"),$async$a_d)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_d,v)},
aeI(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aeI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xQ.cq().MS(A.T6,A.uT,!0),$async$aeI)
case 7:r=e
p=r
q=p==null?null:J.fn(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aI.gau(p)}else p=!1
if(p){p=q.c
p.toString
p=B.jP(p,0,null)
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
case 6:u=B.Hz()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeI,v)},
AC(d,e,f){return this.bMz(d,e,f)},
aT4(d,e){return this.AC(d,!1,e)},
bMy(d){return this.AC(d,!1,!1)},
bMz(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$AC)
case 3:if(t.c==null){w=1
break}if(!C.c4z(d,t.a.c,null)){t.li(C.c4A(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hUO(d,s)}if(s){t.li(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ihM(s,q,t.a.c,d),$async$AC)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.mb(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.t_(s,p,r,!1,null,null,d.ax),$async$AC)
case 5:if(t.c==null){w=1
break}t.m(new C.dHj(t,p,r,d))
t.li("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AC,v)},
aeH(){var w=0,v=B.j(x.H),u=this
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.AZ(new C.dHm(u),"Reading file\u2026"),$async$aeH)
case 2:return B.h(null,v)}})
return B.i($async$aeH,v)},
XY(d){return this.bNT(d)},
bNT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d8("local_qr_dep_"+1000*r,q.a,d,A.fT,A.fx,"Admin deposit ($"+B.dG(d)+")",null,null,A.cv,new B.V(Date.now(),0,!1))
C.cju(t.d,s)
q=t.e
q===$&&B.c()
r=B.C(q,x.o)
r.push(s)
w=3
return B.b(B.t_(t.a.c,t.d,r,!0,null,null,null),$async$XY)
case 3:w=4
return B.b(t.Br(),$async$XY)
case 4:if(t.c==null){w=1
break}t.li("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$XY,v)},
b8T(d){var w=null
return B.cg(w,w,!0,w,new C.dHt(),d,w,!0,!0,x.N)},
X0(d){return this.bFP(d)},
bFP(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$X0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.XY(d.b),$async$X0)
case 5:w=1
break
case 4:s=d.c
t.li(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$X0,v)},
Fn(d){return this.ctx(d)},
ctx(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$Fn)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3l(d,t.a.c),$async$Fn)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.li("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.li(y.y)
u=!0
w=1
break}if(s.c){t.li(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return B.b(t.b8T(r),$async$Fn)
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
return B.b(C.cjn(d,o,n.a,r,p),$async$Fn)
case 7:w=6
return B.b(t.X0(f),$async$Fn)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fn,v)},
Fo(d){return this.cty(d)},
cty(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$Fo)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjm(d,t.a.c),$async$Fo)
case 4:s=f
if(!s.a){t.li(y.m)
w=1
break}if(s.b){t.li("This deposit code was already used.")
w=1
break}if(s.d){t.li(y.y)
w=1
break}if(s.c){t.li(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return B.b(t.b8T(r),$async$Fo)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Xa(o,n.a,d,r,p),$async$Fo)
case 7:w=6
return B.b(t.X0(f),$async$Fo)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fo,v)},
Q_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Q_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DG()){t.li("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).ce(B.ee(new C.dHo(),!0,null,x.N)),$async$Q_)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.AZ(new C.dHp(t,r),"Applying deposit\u2026"),$async$Q_)
case 6:w=1
break
case 5:w=7
return B.b(t.AZ(new C.dHq(t,r),"Loading\u2026"),$async$Q_)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Q_,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.P(d).ax.a===A.I,m=n?A.ny:A.qq,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aE(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.p(A.z,B.X(A.eK,l,o,o,o,16),A.f,o,o,new B.o(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dHy(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cD,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a1Z(D.bTm,"Download",E.a6S,u?o:p.gbTw(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a1Z(A.ju,"Show QR",D.dCK,u?o:p.gc9m(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a1Z(D.bTn,"Upload",A.a6e,u?o:p.gc9k(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a1Z(A.jv,"Scan QR",D.dad,u?o:p.gc9l(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc9j()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.l(16)
j=B.a([B.cw(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvk(A.to,"Enter Code",A.a5z,u,o),A.lb,B.p(o,B.A(B.a([B.X(A.ho,A.aV,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.jr,o,o,o)],h),o,o,new B.Q(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iJ:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aG(!1,A.a3,!0,o,new B.D(A.CM,B.A(B.a([I.aVl,A.bc,B.E(B.d(w,o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.i,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c6(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a1Z.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(v,B.x(B.a([B.p(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u5,v,v,v)],x.p),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bT,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvk.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u5,v,v,v)],x.p),A.l,v,A.b9,A.i,0,v,v),A.f,v,v,new B.o(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bHL,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0C.prototype={
S(){return new C.bm5()}}
C.bm5.prototype={
gayN(){var w=this.e
return w===$?this.e=this.a.d:w},
Y(){var w=this
w.a3()
w.RT()
w.f=B.dh(A.ov,new C.dHC(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
RT(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$RT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vi(q.e,q.f),$async$RT)
case 3:q=e.a
s=B.c4u(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OR(t.a.e,B.KX(s.f2(),null,"  ")),$async$RT)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dHz(t,r))
case 1:return B.h(u,v)}})
return B.i($async$RT,v)},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.ny:A.qq,s=u?A.iJ:A.c,r=u?A.c:A.bq,q=B.eS(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYw,v,v,v,1,v,!0),p=B.l(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qj(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gayN(),v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.l(20),j=A.aV.j(0.12),i=B.l(20),h=x.p
i=B.aM(!1,k,!0,B.p(v,B.A(B.a([B.X(A.fO,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.m(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.lO,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dHA(w,d),v,v,v,v,v,v,v)
return B.c6(q,t,new B.D(A.ac,B.x(B.a([B.E(B.p(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.m(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Ba,v,new C.dHB(d),B.bo(A.aV,v,v,v,v,A.hg,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a0D.prototype={
S(){return new C.bm6(B.zU(A.yO,A.oe,A.vl))}}
C.bm6.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c6(B.eS(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h2p,w,w,w,1,w,!0),A.w,B.zT(this.d,A.bX,new C.dHD(this,d)),w,!1,!1,w,w)}}
C.ag1.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.P(a0).ax.a===A.I,k=l?A.iJ:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dY,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.l(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.G,A.aV.j(0.16),A.kG,36)],x.V)
u=B.p(m,D.bZu,A.f,m,m,new B.o(m,m,m,B.l(18),A.a6R,D.c9p,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.m(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.m(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.ny:A.qq
q=B.l(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rg("Account",A.a.i(this.d),i,j,m),A.T,new C.Rg("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Rg("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Rg("Saved on",""+B.bM(f)+"/"+B.bY(f)+"/"+B.bC(f),i,j,m))
g.push(A.T)
g.push(new C.Rg("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.x(g,A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.bT,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.l(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.X(A.tm,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cN(A.Ye,new B.bN(new B.o(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wJ,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.p(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.m(m,m,l?A.bL:A.ia,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dW(A.o7,new C.f7O(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.co,m,new B.b9(B.l(14),A.a1),new B.ay(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fLs,m,new C.f7P(a0),B.bo(A.aV,m,m,m,m,m,A.co,m,new B.b9(B.l(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.i,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rg.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.m(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.a_K.prototype={
S(){return new C.aC2(new B.au(A.aw,$.ax()),B.ke(!0,null,!0,!0,null,null,!1))}}
C.aC2.prototype={
Y(){this.a3()
$.aU.x1$.push(new C.dgv(this))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a2()},
c9o(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.iJ:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.ny:A.qq,p=u?A.aT:A.dY,o=B.l(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ab(0,A.G,A.aV.j(0.18),A.fQ,32)],x.V),l=B.p(v,Ae.atx,A.f,v,v,new B.o(v,v,v,B.l(18),A.a6R,D.cci,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.m(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uY(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.buO(new C.dgs())],x.G),g=B.m(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cN(A6.Mo,new B.bN(new B.o(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wJ,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bz(v,v,v,A.CL,v,v,"",v,!0,new B.b6(4,B.l(16),new B.ay(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.l(16),D.b6J),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dgt(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mB,v,v,v,v),A.e4,B.A(B.a([B.E(B.dW(A.o7,new C.dgu(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.co,v,new B.b9(B.l(14),A.a1),new B.ay(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fPi,v,w.gc9n(),B.bo(A.aV,v,v,v,v,v,A.co,v,new B.b9(B.l(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.i,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OO,v,A.d7,v,v,v)}}
C.apZ.prototype={
S(){return new C.bmd(A.cT)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bmd.prototype={
Y(){var w,v=this
v.a3()
w=v.a
w.toString
$.tZ=$.tZ+1
v.r=A.o.M(A.o.D(C.fRA(w.e,w.d.y2),1,600))
w=v.a
if(!J.lO(w.d.y2,w.e))v.r=C.inb(v.a.e)
v.w=B.dh(A.fM,new C.dO_(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cns()
C.b28()
this.a2()},
cns(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.h.D(r.e/w,0,1)
if(v<=0)return
u=B.ou(A.h.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d8(t,s.c.a,u,A.h7,A.fx,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cv,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ve(u,q,"Left early \xb7 +$"+A.h.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KN(d,e){return this.czD(d,e)},
b8w(d){return this.KN(!1,d)},
czC(d){return this.KN(d,"")},
czD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KN=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.ve(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bH9(s,C.bGQ(),C.hk8(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KN)
case 5:w=1
break
case 4:n=B.ou(A.h.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dNR(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d8(s,p,n,A.h7,A.fx,q,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiM(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.h.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.h.ad(n,2)+" ("+A.h.U(r*100)+"% of the prize)"}q=t.a
C.ve(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bH9(s,C.bGQ(),C.hk8(),""+t.e+"/"+t.f,k,q,!0),$async$KN)
case 6:w=7
return B.b(C.aiE(t.a.f,k),$async$KN)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KN,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.ar(n,60)
v=A.a.b0(A.o.v(A.o.F(n,60)),2,"0")
u=B.aI(o,o,o,o,A.Qv,o,o,o,new C.dNU(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.h.ad(t.w*1.46,2)+" \xb7 stake $"+A.h.ad(p.a.w,2),o,o,o,o,o,o,D.fzU,o,o,o)],s),A.E,o,A.e,A.i,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.l(99)
q=B.A(B.a([u,t,new C.arL(r,new C.dNV(p),o),A.bn,B.cU(o,B.A(B.a([D.c3l,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o,o,A.b0,new B.o(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nG,o,o,o)],s),A.l,o,A.e,A.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSf(o,D.bvO,B.bm(!0,B.x(B.a([new B.D(D.bJW,q,o),new C.Or(w*r,w,v,o),new B.D(F.ant,B.A(B.a([B.E(B.bu(B.l(99),B.kw(A.bw,o,o,9,o,r,new B.lS(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fJA,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o),B.E(new B.D(A.yV,B.bu(B.l(22),new B.bN(new B.o(o,o,o,o,o,new B.a7(A.aY,A.b3,A.x,B.a([A.d.gH(p.a.r).j(0.35),F.akX],x.O),o,o),A.n),A.bk,new B.dt(p.x,Z.hFI(p.a.e,new Z.A0(new C.dNW(p),new C.dNX(p),new C.dNY(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a82.prototype={
B(d){var w=null,v=B.l(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ab(0,A.G,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.p(w,B.x(B.a([B.p(w,D.bXG,A.f,w,w,new B.o(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.fZ9,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fMd,w,new C.cdy(d),B.bo(A.at,w,w,w,A.w,A.hg,w,w,new B.b9(B.l(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(w,w,u,v,t,D.ca4,A.n),w,w,w,w,D.bIb,w,w,w),w,w,w,A.a1A,w,A.d7,w,w,w)}}
C.apr.prototype={
S(){return new C.bm3(null,null)},
gZ(d){return this.e}}
C.bm3.prototype={
Y(){var w,v=this,u=null
v.a3()
w=v.d=B.bn(u,A.Cx,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dH8(v))
w=B.bn(u,A.mf,u,1,u,v)
w.cK(0)
v.e=w
w=B.bn(u,A.Oe,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dH9(v))
if(v.a.c){v.d.cK(0)
v.e.bQ(0)
v.f.bQ(0)}},
bz(d){var w,v,u=this
u.bK(d)
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
w.bzo()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.T7[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.T7[A.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.w(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.w(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dn:A.bD
else if(w!=null){b1=(w>0?A.dn:A.bD).j(0.45)
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
b3=B.a([B.e4(A.z,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,b0,B.a([new B.ab(6+e,A.G,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.G,A.ba.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.p(b0,b0,A.f,b0,b0,new B.o(B.ap(A.bh,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dP(new B.j_(B.wS(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dP(B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,B.l(b2*0.5),B.a([new B.ab(b2*0.02,A.G,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.dr()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n5(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fE(m)
d=b2*0.2
a1=B.l(d)
if(a9.a.c)a2=D.dgd
else{a2=B.ap(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.ci,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.G,A.w.j(0.3),D.eu1,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.G,A.c.j(0.9),A.UD,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bN(new B.o(b0,b0,b0,B.l(d),b0,new B.a7(new B.d7(-1+Math.cos(j)*0.8,-1),new B.d7(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,B.l(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cT(A.w.j(0.18),A.dL,5)],x.C)
if(!a9.a.c)d.push(new B.cT(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uM(B.d(v,b0,b0,b0,b0,b0,b0,B.m(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jq,b3),b0,b0,b0))
f.push(B.dP(B.fA(A.z,B.p(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNE.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.Or.prototype={
B(d){var w=null,v=new C.cg_(),u=v.$3("STAKE","$"+A.h.ad(this.e,2),A.c),t=B.l(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.Ox,B.A(B.a([u,B.p(w,B.x(B.a([D.fXN,B.lJ(new C.cfZ(),w,A.b0,A.n_,w,w,new B.bq(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,s,t,r,D.aup,A.n),w,w,w,w,A.OK,w,w,w),v.$3("FULL WIN","$"+A.h.ad(this.d,2),A.bL)],q),A.l,w,A.e,A.i,0,w,w),w)}}
C.arL.prototype={
B(d){var w=null,v=B.l(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.bW6,A.df,C.asz(this.d,A.o6,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,u,v,w,D.aup,A.n),w,w,w,w,A.OV,w,w,w)},
ge3(){return this.c}}
C.Oz.prototype={
S(){return new C.bmO(null,null)}}
C.bmO.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.mf,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bA0()},
aQB(d,e){var w=this.a.d,v=B.U(w).k("N<1,n>"),u=B.C(new B.N(w,C.itr(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c7(w,new C.e6P(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c6(w,D.akg,B.bm(!0,this.aQB(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aQB(0,d)},
azB(d,e,f){var w=null,v=f.j(0.16),u=B.l(10)
return B.A(B.a([B.p(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w)}}
C.aOf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aeT.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aE(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e6S()).gJ(0),j=new B.ec(l.dN(m,new C.e6T(),x.cD),x.bG).cB(0,0,new C.e6U())
o=B.aE(d,A.c_,o).w
w=x.p
v=B.a([A.T,B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anL,B.A(B.a([B.p(p,D.c5S,A.f,p,p,new B.o(p,p,p,B.l(14),B.a([new B.ab(0,A.G,A.fe.j(0.45),A.J,14)],x.V),D.aui,A.n),p,44,p,p,p,p,p,44),A.bc,D.bMl,B.aI(p,p,p,p,A.lt,p,p,p,new C.e6V(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.i,0,p,p),p)],w)
if(l.gcm(m)){u=C.her("GAMES",""+l.gJ(m),A.ey)
t=C.her("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDs(j)
s=s?A.jY:A.eV
v.push(new B.D(D.bGk,B.A(B.a([u,A.ae,t,A.ae,C.her("NET",r+q,s)],w),A.l,p,A.e,A.i,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.Q(24,36,24,24+n),B.x(B.a([B.X(D.bS6,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.m(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.m(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.i,0,A.p),p))
else v.push(new B.di(1,A.cn,B.hV(p,new C.e6W(this),l.gJ(m),new B.Q(14,2,14,16+n),p,A.ah,new C.e6X(),!1),p))
return B.p(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9z,p,p,p,p,p,p,p,p)}}
C.aeS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!A.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&A.a.a_(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=A.bY
else if(u)r=A.dy
else{w=v?A.aQ:A.bv
r=w}q=h.gbkl()
w=new C.e6R()
s=B.l(14)
p=B.a([r.j(0.13),D.buy],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.X(g?A.ml:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u4,i,i,i),1)
l=r.j(0.2)
k=B.l(99)
k=B.p(i,B.d(t,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.o(l,i,i,k,i,i,A.n),i,i,i,i,D.bJO,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDs(q)}else{l=g?"+":"-"
l+=C.bDs(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.i,0,i,i)
k=C.e6Q("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e6Q("PAID",C.bDs(g?h.d:0),r),A.df,C.e6Q("BEFORE",w.$1(h.x),A.ey),A.df,C.e6Q("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.i,0,i,i)
n=C.ioK(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.p(i,B.x(B.a([l,A.am,w,A.ax,B.d(n+h,i,1,A.a2,i,i,i,B.m(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.i,0,A.p),A.f,i,i,new B.o(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.n),i,i,i,i,A.k7,i,i,i)}}
C.aCM.prototype={
S(){return new C.bik(A.cT,null,null)}}
C.bik.prototype={
Y(){var w,v,u,t=this
t.a3()
w=B.bn(null,A.mZ,null,1,null,t)
w.cK(0)
t.d=w
v=J.e6(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afg(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A0.a83,A.tB,A.d3,A.c][w.aw(4)],[A.i0,A.kc,A.e9,A.Hy][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.byT()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aG(!1,A.a3,!0,w,B.c7(v,new C.dny(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.afg.prototype={
gZ(d){return this.f}}
C.aN9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.b2W.prototype={
B(d){return new B.wm(new C.cin(this),null,new B.hf(B.a([$.zh(),$.a4j()],x.U)),null)},
ge3(){return this.c}}
C.O2.prototype={
chl(){if(this.c!=null)this.m(new C.c5P())}}
C.JE.prototype={}
C.ar8.prototype={
S(){return new C.aFC(A.cT,new B.au(A.aw,$.ax()))},
cMy(){return this.d.$0()},
cYw(){return this.f.$0()},
cYk(d,e){return this.r.$2(d,e)},
cZ7(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFC.prototype={
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a2()},
avi(){var w=B.cX(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avi()
if(s<2){t.azC("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cMy()<s){t.azC("Insufficient balance.")
w=1
break}if(!t.a.cYk(s,"Dice Roll bet")){t.azC("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e_k(t))}w=3
return B.b(C.ceI(t.a.e),$async$Bu)
case 3:r=t.a
q=C.iqZ(r.e,r.c,t.d)
t.a.cYw()
B.b1w(t.a.e)
t.m(new C.e_l(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bO(new B.bd(1000*(40+p*6)),null,r),$async$Bu)
case 7:if(t.c==null){w=1
break}new C.e_m(t).$0()
t.c.eq()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bO(A.k4,null,r),$async$Bu)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hiS(q)
t.m(new C.e_n(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cZ7(m,"Dice Roll "+n,o)
t.m(new C.e_o(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"
w=12
return B.b(C.bH9(r,C.bGQ(),new C.e_p(t),n,k,"YOU WIN!",!0),$async$Bu)
case 12:w=13
return B.b(C.aiE("Dice Roll",l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"),$async$Bu)
case 13:w=10
break
case 11:w=14
return B.b(C.bH9(r,C.bGQ(),new C.e_q(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bu)
case 14:C.ve(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$Bu,v)},
azC(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avi(),d=x.w,a0=B.aE(a2,A.dD,d).w,a1=Math.min(B.aE(a2,A.c_,d).w.a.a*0.44,200)
d=B.hv(Q.asJ,D.h4n,new C.e_t(a2),f)
w=B.l(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b4,B.p(f,B.A(B.a([A.asE,A.bn,C.asz(v.d,A.j2,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.o(A.d3,f,f,w,f,f,A.n),f,f,f,f,A.lP,f,f,f)],t),A.l,f,A.e,A.i,0,f,f)
u=g.z
v=B.a0(140,D.a_Q.l()>>>16&255,D.a_Q.l()>>>8&255,D.a_Q.l()&255)
d=B.l(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.p(f,B.as(new C.apr(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.m(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.T7[q]
o=C.hiS(p)
n=p>0?A.bi:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ay(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.G,n.j(0.65),A.J,14)],r):A.SV
m=m?18:15
s.push(new B.by(1,A.bd,new B.D(A.j9,B.p(A.z,B.d(o,f,f,f,f,f,f,new B.H(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.o(k,f,new B.bH(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hiS(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.m(f,f,s>0?A.be:A.bY,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bL(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.m(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.C(new B.N(B.a([2,5,10,25],x.n),new C.e_u(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1G,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bz(f,new B.b6(4,B.l(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.lY,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h6,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.i,0,f,f))
d.push(A.P)
d.push(new B.bL(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.h.ad(g.avi()*0.46,2),f,f,f,f,f,f,Y.aXd,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.hZ,B.x(d,A.al,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gcwc()
s=B.fv(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.b9(B.l(14),A.a1),f,f,f,f,f)
return C.aSf(f,D.a03,B.bm(!0,B.x(B.a([new B.D(D.bKg,w,f),new C.Or(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.Q(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iy(B.d("\ud83c\udfb2 ROLL ($"+A.h.ad(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.i,0,A.p),1)],t),A.l,f,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arR.prototype={
S(){return new C.aFS(A.l7,new B.au(A.aw,$.ax()))},
cYc(d){return this.e.$1(d)}}
C.aFS.prototype={
gau5(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cT.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRj(){var w=this.d,v=this.a
return w===A.l7?A.a.i(v.f.a):A.a.i(v.f.b)},
gaau(){var w=this.gRj(),v=B.ag("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a2()},
JE(d,e){return this.bN1(d,e)},
bN1(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fI(new B.fx(d)),$async$JE)
case 2:B.eZ()
t=u.c
if(t!=null)t.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JE,v)},
Re(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Re=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRj().length===0){r.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jv()
o=A.h.ad(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaau()+"/"+o,0,null):B.cD("bitcoin:"+r.gRj(),0,null)
t=4
w=7
return B.b(B.iS(q,A.fo,null),$async$Re)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaau():r.gRj()
w=10
return B.b(r.JE(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Re)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaau():r.gRj()
w=11
return B.b(r.JE(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Re)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Re,v)},
a1H(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i4().bl7(A.eR),$async$a1H)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fq(),$async$a1H)
case 4:s=e
t.m(new C.e72(t,A.a.c5(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1H,v)},
cdA(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hH2(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cYc(new B.d8(s,w.c.a,w.d,A.fT,v.d,r,v.f,v.gau5(),A.dF,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j8(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eS(o,o,o,!0,!0,A.BZ,o,1,!0,o,0,!1,o,!1,A.c,o,B.aI(o,o,o,o,A.Ii,o,o,o,new C.e73(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fNX,o,o,o,1,o,!0),m=B.l(26),l=B.K(D.f1.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.G,A.b2.j(0.25),A.eS,24)],k),i=x.p
j=B.p(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.m(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dx(A.dC,A.z,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fvU,o,o,o),o),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.m(o,o,D.f1.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,l,m,j,D.cd4,A.n),o,o,o,o,A.anY,o,o,o)
m=p.c82()
l=p.aDj(1,"Send the money to NGMY Pay",p.cdy())
w=p.aDj(2,"Put this code in the payment note",p.bLC())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.m(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDj(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bz(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.l(18),new B.ay(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uD,!0,o,o,o,o,new B.b6(4,B.l(18),D.b6E),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fxq,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u5,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.l(20)
s=r?D.f1:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bu(B.l(14),new B.cN(D.b83,new B.Ft(p.f,o),o),A.aq),A.P,D.fgi,A.ax],i),A.l,o,A.e,A.i,0,A.p):B.x(B.a([B.p(o,D.c51,A.f,o,o,new B.o(D.f1.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fTu,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p)
return B.c6(n,A.BZ,B.as(new B.cN(A.afz,B.cw(B.a([j,A.bx,m,A.bx,l,w,t,p.ba7(4,"Screenshot of your payment",B.az(o,B.p(o,q,A.f,o,o,new B.o(A.uD,o,s,u,o,o,A.n),o,o,o,o,new B.Q(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcpk(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.d(p.a.r,o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bN(new B.o(o,o,o,B.l(18),B.a([new B.ab(0,A.G,A.b2.j(0.45),A.dp,18)],k),D.cbE,A.n),A.bk,B.lX(A.atl,D.h3y,p.gcdz(),B.fv(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.b9(B.l(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHj,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c82(){var w=null,v=new C.e6Z(this),u=B.l(18),t=B.K(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.l7,A.hB,"Cash App"),A.e7,v.$3(A.a9T,D.ash,"Bitcoin")],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(A.uD,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)},
ba7(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.z,B.d(""+d,v,v,v,v,v,v,D.fCX,v,v,v),A.f,v,v,D.b8N,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.p(v,v,A.f,D.f1.j(0.18),v,v,v,v,v,A.wB,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.ER(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.Q(0,0,0,w),B.x(B.a([new B.D(A.a1_,B.d(e,v,v,v,v,v,v,Ab.L6,v,v,v),v),f],u),A.al,v,A.e,A.i,0,A.p),v),1)],u),A.al,v,A.e,A.i,0,v,v),v)},
aDj(d,e,f){return this.ba7(d,e,f,!1)},
cdy(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaau():s.gRj(),p=B.l(20),o=B.l(20),n=s.d===A.l7,m=n?D.cay:D.ccr,l=B.a([new B.ab(0,A.G,(n?A.a_q:D.Zx).j(0.35),A.cz,16)],x.V),k=B.l(12)
n=s.d===A.l7
w=n?A.hB:D.ash
k=B.p(r,B.X(w,n?A.a_q:D.Zx,r,r,r,30),A.f,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.m(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.ax,B.A(B.a([D.c0c,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rj,r,r,r)],u),A.l,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aG(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bc,v,B.aI(r,r,r,r,D.c_a,r,r,r,w?r:new C.e71(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.i,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.ann,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gckv(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bLC(){var w,v,u,t,s,r,q,p,o=null,n=B.l(20),m=B.K(A.b7.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gau5().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b7.j(0.28),A.b7.j(0.08)],u)
p=new B.ay(A.ey.j(0.4),1,A.r,-1)
k.push(B.p(A.z,B.d(s,o,o,o,o,o,o,A.q1,o,o,o),A.f,o,o,new B.o(o,o,new B.bH(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b3,A.x,q,o,o),A.n),o,52,o,A.j9,o,o,o,42))}return B.p(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.i,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.m(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.hv(A.a4y,D.h5y,new C.e6Y(this),B.fs(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.i,0,o,o)],l),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(A.uD,o,m,n,o,o,A.n),o,o,o,o,A.bH,o,o,o)}}
C.rV.prototype={
aj(){var w=this
return B.I(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rW.prototype={
aj(){var w=this
return B.I(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWz(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hr9(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aN(v," \xb7 ")},
giJ(d){return this.c}}
C.m3.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iD.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b8(v.c,new C.chl(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.ip.prototype={
amG(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.ip(v,u,t,s,r,h==null?w.f:h)},
bfL(d){var w=null
return this.amG(w,w,w,w,d,w)},
cQp(d,e,f){return this.amG(d,e,null,null,null,f)},
bfK(d){var w=null
return this.amG(w,w,w,d,w,w)},
cQ3(d,e){var w=null
return this.amG(w,w,d,w,e,w)},
aj(){var w=this,v=C.icf(w.c),u=w.e,t=B.U(u).k("N<1,a9<n,@>>")
u=B.C(new B.N(u,new C.chj(),t),t.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbO.prototype={}
C.WQ.prototype={
S(){return new C.aG3(new B.au(A.aw,$.ax()),B.n2(0,null,null),B.a([],x.m))},
V5(d){return this.d.$1(d)}}
C.aG3.prototype={
Y(){var w,v=this
v.a3()
w=J.b8(v.a.c,new C.eb8(),x.i)
w=B.C(w,w.$ti.k("ak.E"))
A.d.b_(w,new C.eb9())
v.d=w
v.JO()},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.x.t()
this.a2()},
afN(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$afN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JO()
u.m(new C.eb2(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.V5(s),$async$afN)
case 2:r=e
if(u.c!=null){u.m(new C.eb3(u))
t=u.c.K(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.T(B.b2(null,null,null,r?A.dn:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$afN,v)},
a9I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.ip(q,"New Category",A.HT,4284773515,D.aDe,p.length)
t.m(new C.eaM(t,s))
t.JO()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.eaN(s),p,null,!0,!0,x.i),$async$a9I)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.eaO(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9I,v)},
a2D(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.eb_(t,p))
q.bP(0,A.cg)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.chg(p,q,s),$async$a2D)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.eb0(t,r))
$.aU.x1$.push(new C.eb1(t))
case 1:return B.h(u,v)}})
return B.i($async$a2D,v)},
abJ(d){return this.bRR(d)},
bRR(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$abJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eaU(t),r,null,!0,!0,x.i),$async$abJ)
case 2:s=f
if(s!=null)u.m(new C.eaV(u,d,s))
return B.h(null,v)}})
return B.i($async$abJ,v)},
bPv(d){this.m(new C.eaT(this,d))
this.JO()},
JO(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bfL(v)},
chR(d,e){var w={}
w.a=e
this.m(new C.eaZ(w,this,d))},
ZU(d){return this.c6Z(d)},
c6Z(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$ZU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ee(new C.eaY(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).ce(t),$async$ZU)
case 2:return B.h(null,v)}})
return B.i($async$ZU,v)},
bHM(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fY,A.bs],l):B.a([A.ph,A.eO],l)
w=B.l(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.X(A.e9,m?A.dy:A.dX,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a2R:Ad.Pm
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.X(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.eaQ(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.uo:A.c).j(0.65)
p=B.l(12)
u.push(B.p(n,B.kx(!0,n,o.x,new C.eaR(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afu,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.cq,n,n,n))}u.push(A.P)
t=o.w
q=B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.m(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bz(n,new B.b6(4,B.l(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.eaS(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcws()
p=B.bo(A.bp,n,n,n,n,n,A.jr,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JS(t,A.bp,n),A.df,B.bJ(o.f?A.re:D.asv,n,m,p)],r),A.dO,n,A.e,A.i,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.al,n,A.e,A.i,0,A.p),n,n,A.b0,new B.o(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.Ha,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.P(d).ax.a===A.I,s=new C.bbO(t),r=t?A.bA:A.ci,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcdE()
if(n)n=A.VG
else n=B.X(A.zw,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eS(B.a([B.hv(n,B.d("Save",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aXs(A.aN,u,N.Ys,A.oQ,D.h1K,v.gbE2())
q=v.bHM(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.m(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c6(o,r,B.x(B.a([q,new B.D(A.Ha,n,u),B.E(H.hvE(!1,new C.eb7(v,s),m.length,v.gchQ(),D.bG6,u,!1),1)],w),A.al,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
C.QD.prototype={
S(){return new C.bdJ()}}
C.bdJ.prototype={
Y(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.c()
w.V$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.I,q=r?D.uo:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c6O,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.C(new B.N(D.cdx,new C.cWC(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.C(new B.N(D.dd_,new C.cWD(t),v),v.k("ak.E"))
u=x.p
v=B.ca(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.el(B.a([B.bP(!1,A.ds,s,s,!0,s,s,s,new C.cWE(d),s,s),B.bJ(A.rk,s,new C.cWF(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1o.prototype={
S(){return new C.aI3()},
pj(d){return this.d.$1(d)}}
C.aI3.prototype={
Y(){this.a3()
this.d=B.bp(this.a.c.e,!0,x.u)},
azE(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pj(v.bfK(u))},
a9K(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a9K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b3O(new C.iD("q_"+1000*s,"",D.dbu,null,!1,r.length)),$async$a9K)
case 2:t=e
if(t!=null){u.m(new C.f2I(u,t))
u.azE()}return B.h(null,v)}})
return B.i($async$a9K,v)},
b3O(d){var w,v=this.c
v.toString
w=B.ee(new C.f2J(d),!1,null,x.u)
return B.a6(v,!1).ce(w)},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.bA:A.ci,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eS(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aXs(A.aN,v,N.Ys,A.oQ,D.h7F,w.gbEu())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.m(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hV(v,new C.f2O(w,new C.bbO(u)),q,D.bGf,v,A.ah,new C.f2P(),!1)
return B.c6(s,t,u,v,!1,!1,r,v)}}
C.a1n.prototype={
S(){return new C.aI2()}}
C.aI2.prototype={
Y(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())
w=B.bp(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c5(v.e,D.a91)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.V$=$.ax()
w.R$=0
this.a2()},
afM(){var w=0,v=B.j(x.H),u=this,t
var $async$afM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(P.DJ(78,1920),$async$afM)
case 2:t=e
if(t!=null)u.m(new C.f2E(u,t))
return B.h(null,v)}})
return B.i($async$afM,v)},
agV(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$agV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ee(new C.f2C(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).ce(t),$async$agV)
case 2:s=e
if(s!=null)u.m(new C.f2D(u,s))
return B.h(null,v)}})
return B.i($async$agV,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.P(a1).ax.a===A.I,g=h?A.bA:A.ci,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eS(B.a([B.df(U.a4H,i,A.rk,new C.f2G(j,a1),B.bo(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.l(14)
w=j.f
v=h?A.bP:A.an
w=B.az(i,B.bu(e,K.aSj(B.l(14),A.bX,140,A.D2,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcdD(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.l(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bz(i,A.eN,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cD,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JS(j.d,i,i)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iZ(A.aN,i,i,A.ag,i,new C.f2H(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uo:A.c
q=B.l(16)
p=B.l(16)
o=B.l(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.p(i,D.bYP,A.f,i,i,new B.o(A.bp.j(0.12),i,i,B.l(12),i,i,A.n),i,i,i,i,A.bl,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.ax,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.i,0,A.p),1)
return B.c6(d,g,B.cw(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.ax,s,A.af,B.aG(!1,A.a3,!0,q,B.aM(!1,p,!0,B.p(i,B.A(B.a([m,A.eu,l,B.X(A.zs,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcjs(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bT,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.ddq.prototype={}
C.WR.prototype={
S(){return new C.aG5(B.ke(!0,null,!0,!0,null,null,!1))}}
C.aG5.prototype={
Y(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dI(q.a.c,new C.ebJ())
w=B.C(w,w.$ti.k("M.E"))
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
default:break}}w=A.d.aN(v,"\n\n")
q.d=new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
t(){var w=this.d
w===$&&B.c()
w.V$=$.ax()
w.R$=0
this.f.t()
this.a2()},
azF(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.aA(v,r,u)+e
s=A.a.oh(v,r,u,t)
this.d.bP(0,new B.ba(s,B.ho(A.bB,r+t.length),A.aP))},
b1T(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.oh(w,v,v,u)
this.d.bP(0,new B.ba(t,B.ho(A.bB,v+u.length),A.aP))},
adr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(P.DJ(78,1920),$async$adr)
case 3:s=e
if(s==null){w=1
break}t.m(new C.ebp(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adr,v)},
Zn(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i4().a75(A.eR),$async$Zn)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fq(),$async$Zn)
case 4:t.m(new r.ebu(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zn,v)},
ads(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$ads=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.au(A.aw,t)
r=new B.au(new B.ba("https://",A.b6,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ebs(s,r),q,null,!0,!0,x.y),$async$ads)
case 2:if(e===!0)u.m(new C.ebt(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$ads,v)},
bIJ(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fw(p.a.a,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ebl(),B.U(p).k("N<1,n>")).c_(0,new C.ebm())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.a_(s,"## "))q.push(new C.m3("heading",A.a.i(A.a.b1(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.m3("bullets",new B.N(B.a(s.split("\n"),u),new C.ebn(),t).c_(0,new C.ebo()).aN(0,"\n"),r,r))
else q.push(new C.m3("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a91)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.P(d).ax.a===A.I,m=new C.ddq(n),l=n?A.av:A.hj,k=B.d(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eS(B.a([B.df(U.a4H,o,A.acN,new C.ebz(p,d),B.bo(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.ct:A.hY
v=B.c_(A.bI,B.a([p.wh(E.Pn,"Bold",new C.ebA(p),m),p.wh(E.a2T,"Italic",new C.ebB(p),m),p.wh(E.apT,"Underline",new C.ebC(p),m),p.wh(Ah.a3_,"Heading",new C.ebD(p),m),p.wh(N.Po,"Bullets",new C.ebE(p),m),p.wh(E.apS,"Align",new C.ebF(),m),p.wh(A.Hz,"Link",p.gc3M(),m),p.wh(A.qM,"Image",p.gc3L(),m),p.wh(A1.a3d,"Video",p.gc3N(),m),p.wh(M.a4l,"Signature",new C.ebG(p),m),p.wh(A1.Pp,"Divider",new C.ebH(p),m)],j),A.br,o,4,4)
w=B.p(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,E.aov,o,o,o)
v=n?A.bA:A.c
u=B.l(12)
t=B.K(n?A.cR:A.dY,A.r,1)
s=B.a([new B.ab(0,A.G,A.w.j(n?0.35:0.08),A.cM,16)],x.V)
r=p.d
r===$&&B.c()
q=B.m(o,o,n?A.iO:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bT,B.p(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bz(o,A.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A8.CP,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.ia(n,B.U(n).k("ia<1>"))
j.push(B.p(o,B.c_(A.bI,n.gdP(n).dN(0,new C.ebI(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OA,o,o,o))}return B.c6(k,l,B.x(j,A.l,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
wh(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.l(8),s=B.l(8)
return B.he(B.aG(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cq,B.X(d,v?A.iO:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.drR.prototype={}
C.aDG.prototype={
a7(){return"_KbView."+this.b}}
C.as7.prototype={
S(){return new C.aG4(D.b22)},
cXn(d,e){return this.e.$2$size(d,e)}}
C.aG4.prototype={
gaCu(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gcyG(){var w,v,u,t,s,r=this.gaCu()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cdF(d){this.m(new C.ebi(this,d))},
ckE(d){this.m(new C.ebj(this,d))},
bGR(){this.m(new C.eba(this))},
bGT(){this.m(new C.ebb(this))},
gb9x(){var w=B.bp(this.a.c,!0,x.i)
A.d.b_(w,new C.ebk())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.P(d).ax.a===A.I,f=new C.drR(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eO.j(0.55),A.nu.j(0.45)],e)
w=B.l(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bHZ(f)
break
case 1:g=i.gaCu()
g.toString
g=i.bIH(f,g)
break
case 2:u=i.gaCu()
u.toString
t=i.gcyG()
t.toString
s=B.b1(u.d)
r=B.l(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.fBX,h,h,h),A.f,h,h,new B.o(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.l(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ab(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fY:A.ph
l=B.l(8)
k=B.X(A.oG,g?A.dy:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDE(f,i.gbGS(),u.c,s,"Answer",h),B.E(B.cw(B.a([r,A.af,B.p(h,B.x(B.a([B.p(h,B.A(B.a([k,A.e7,B.d("Stored answer",h,h,h,h,h,h,B.m(h,h,g?A.dy:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.el,A.hl,h,h,h),new C.b2t(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.bT,h,h,1/0)],j),h,h,A.ang,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.aq,h,h,new B.o(h,h,v,w,h,new B.a7(A.aY,A.b3,A.x,e,h,h),A.n),h,h,h,A.hZ,h,h,h,h)},
b_0(d){var w,v,u,t=null,s=d.a,r=s?D.uo:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.G,q,A.J,14),new B.ab(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.i2(v.cXn(v.d,72),A.aq),A.f,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.m(t,t,A.dn,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.i,0,A.p)},
bHZ(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.az(t,u.b_0(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_0(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.m(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cw(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.m(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,F.aVq,new C.ebd(u,d),u.gb9x().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGg,t,t,A.ah,!1)},
bIH(d,e){var w,v,u,t,s=null,r=B.bp(e.e,!0,x.u)
A.d.b_(r,new C.ebf())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hV(s,new C.ebg(this,r,d,e),t,A.wD,s,A.ah,new C.ebh(),!1)
return B.x(B.a([new C.aDE(d,this.gbGQ(),e.c,w,e.b,s),new B.D(Ap.wF,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.i,0,A.p)}}
C.aDE.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aI(v,v,v,v,B.X(A.eK,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.l(12)
q=B.p(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.cq,v,v,v)
return new B.D(D.bJA,B.A(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v),v)}}
C.adm.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uo:A.c,r=B.l(14),q=B.l(14),p=B.l(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ab(0,A.G,A.w.j(t?0.28:0.06),A.dL,6)],x.V),m=u.j(0.15),l=B.l(12)
l=B.p(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fH(1,B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,B.p(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a2,w,w,w,B.m(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.i,0,A.p),A.f,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2t.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fY:A.ph
u=B.l(8)
t=B.X(A.v9,w?A.dy:A.dX,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.m(s,s,w?A.dy:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cw,A.eQ,s,s,s))}A.d.u(p,J.b8(this.c,new C.chh(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.ade.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bDW,B.d(q.b,r,r,r,r,r,r,B.m(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hy,B.bu(B.l(12),K.aSj(r,A.bX,160,A.qM,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hy,new C.aDF(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wB,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.m(r,r,s.d.a?A.cs:A.bp,r,A.ne,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQ6(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iU(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.m(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cL,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.CA,B.x(B.a([u,q,A.aO,t,A.ax,B.d("Signature",r,r,r,r,r,r,B.m(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.C(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQ7(),x.cc),new C.cQ8(s),v),v.k("M.E"))
return new B.D(A.kC,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hy,B.iU(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eP,C.i68(q,s.d),r)}}}
C.aDF.prototype={
S(){return new C.bjS()}}
C.bjS.prototype={
Y(){this.a3()
this.afO()},
afO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d5(n,"http")&&!J.d5(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZM(B.cD(n,0,null),null)
w=7
return B.b(J.a4m(q),$async$afO)
case 7:if(r.c==null){w=1
break}r.m(new C.drS(r,q))
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
return B.i($async$afO,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.l(12)
return B.p(A.z,B.X(A.qV,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.l(12)
v=s.a
u=J.ajA(v)
return B.bu(w,new B.fH(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AK(s,t),B.aI(t,t,t,t,B.X(v.f?A.aq_:A.Pq,A.c,t,t,t,44),t,t,t,new C.drU(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.asX.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JJ.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.t1.prototype={}
C.asa.prototype={
S(){var w=null
return new C.aG6(new B.au(A.aw,$.ax()),B.n2(0,w,w),B.a([],x.m),D.Ep,D.aMk,w,w)},
ge3(){return this.d}}
C.aG6.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.nD,null,1,null,v)
w.f1(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7n).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.e.t()
w.bA9()},
gasC(){var w,v,u,t,s=this.x
if(s===D.Eq)return null
s=s===D.Ep
w=s?D.a7n:D.a6r
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
czs(d){return this.m(new C.ebX(this,d))},
aCg(){$.aU.x1$.push(new C.ebO(this))},
JF(d){return this.cyU(d)},
b1U(){return this.JF(null)},
cyU(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JF=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JF)
case 3:e=b2
if(!e){w=1
break}B.k0()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aU(a0,new C.ebQ())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hBo(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!A.a.q(d,"bible"))if(!A.a.q(d,"scripture")){if(!A.a.q(d,"biblia"))if(!A.a.q(d,"andiko"))if(!A.a.q(d,"gospel verse")){a5=B.ag("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=B.ag("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.hBo(a8)&&!p
q.m(new C.ebR(q,a8))
q.aCg()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.ebS(q))
q.aCg()
w=1
break}t=5
j=B.ns(k)
i=new B.N(a0,new C.ebT(),B.U(a0).k("N<1,n>")).aN(0,"\n\n")
a0=C.iqm(m,p,o,q.x,n,q.y,q.gasC(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.rm(j,h,A.i1,null,null),$async$JF)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bFh(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ebU(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ebV(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.ebW(q))
q.aCg()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JF,v)},
bMK(){return this.JF("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.P(d).ax.a===A.I,p=q?A.GJ:D.bsO,o=x.p
o=B.a([B.x(B.a([B.E(s.cy9(q),1),s.bLX(q)],o),A.l,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbMJ()
u=B.l(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.exV,r,new B.o(r,r,r,u,B.a([new B.ab(0,A.G,A.aQ.j(0.45),A.cM,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o0,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o0,r,r,A.ai),r,r,r,14,r,r))}return B.p(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cy9(d){var w,v,u,t=this,s=null
if(t.x===D.Eq)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hdp(s,!1,A.L,0,0,w,B.h9E(t.cE_(d),A.YN,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.asj,A.aD.j(0.5),s,s,s,52)
w.push(B.b8Z(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.m(s,s,d?A.aE:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fU,B.a([t.ak7("Full bongo love song ABAB",d),t.ak7("Mix: group vs private jet \u2014 which flies?",d),t.ak7("Song from John 3:16 + matching verses",d),t.ak7("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nN(D.bED,B.Za(new B.oX(new C.ebP(t,d),u+v,!0,!0,!0,0,B.ts(),s)),s))}return B.w7(0,s,A.t,t.e,A.y,s,s,Aa.afq,s,s,!1,s,A.ah,!1,w)},
cE_(d){var w=this.as
w===$&&B.c()
return B.c7(w,new C.ec3(this,d),null)},
cE1(d){var w,v=this,u=null,t=B.l(14),s=v.r?u:new C.ec5(v),r=A.w.j(d?0.35:0.06),q=B.l(14),p=B.K(A.ba.j(0.35),A.r,1),o=v.gasC()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fa,u,u,u)
w=v.gasC()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.m(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(u,B.A(B.a([o,A.ae,w,B.X(v.w?A.PR:A.tj,A.ba,u,u,u,20)],x.p),A.l,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.nH,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
axO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b2,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.cs],x.O)
break
case 2:w=B.a([A.bE,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.l(14)
t=B.l(14)
s=this.r?n:new C.ebN(this,d)
r=B.l(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Fa,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bq
return B.E(B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.m(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.i,0,A.p),n,n,A.b0,new B.o(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cE2(d,e){var w,v,u,t=this,s=null,r=t.x===D.Ep?t.z:t.Q,q=B.l(20)
if(r===d.a)r=A.ba.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.l(20)
v=t.r?s:new C.ec6(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.VZ,s,s,s)
return B.aG(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.hm,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.m(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
ak7(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.acF,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.n8(w,u,v,w,this.r?w:new C.ebY(this,d),w,w,w,w)},
bLX(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.l(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(Ak.aof,B.d("$"+A.h.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.m(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.m(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Eq?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bz(r,A.eN,r,A.hn,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m(r,r,d?A.bV:A.hN,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ebK(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ebL(s)
l.push(B.A(B.a([v,new B.JS(w,A.aD,r),B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.eya:D.c0l,r,D.b9F,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.ai)],m),A.dO,r,A.e,A.i,0,r,r))
return B.p(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.t7,A.a13,r,r,r)}}
C.aOn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.WS.prototype={
aj(){var w=this
return B.I(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a08.prototype={
S(){return new C.aD4(null,null)},
bkD(){return this.f.$0()}}
C.aD4.prototype={
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,D.bD1,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,A.nC,u,1,u,v)
w.f1(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bn(u,A.lN,u,1,u,v)
w.cK(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bn(u,A.yQ,u,1,u,v)
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
w.byY()},
cdH(){var w=this.d
w===$&&B.c()
w.eJ(0).bG(new C.dpc(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aE(d,A.c_,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcdG(),f=x.l,e=J.e6(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.DZ(new C.dpd(k,v,d),j,w,j)}f=B.C(e,f)
w=k.d
w===$&&B.c()
u=B.l(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.G,A.at.j(0.35),A.J,40),new B.ab(0,A.G,A.aN.j(0.25),A.fQ,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c7(new B.hf(B.a([r,q],x.U)),new C.dpe(k),j)
r=B.ok(A.jV,D.h4S,new C.dpf())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.m(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cD,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b1V(A.ke,"Resets in 24h"),A.ae,k.b1V(A.oG,"Help Topics ready")],o),A.l,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dW(D.fZZ,new C.dpg(k),B.dj(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kW,j,new B.b9(B.l(14),A.a1),new B.ay(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.l(14)
m.push(B.E(B.bJ(D.h4I,j,g,B.bo(A.aN,j,j,6,A.c,j,A.kW,A.aN.j(0.5),new B.b9(l,A.a1),j,j,j)),1))
f.push(B.as(B.az(j,B.c7(w,new C.dph(k),B.p(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.i,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.o(j,j,t,u,s,D.c9D,A.n),j,j,j,j,Ac.ao5,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dpi(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aG(!1,A.a3,!0,j,B.az(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b1V(d,e){var w=null,v=A.c.j(0.08),u=B.l(20),t=B.K(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.X(d,A.at,w,w,w,13),A.e7,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hm,w,w,w)}}
C.aNe.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.OQ.prototype={}
C.ql.prototype={}
C.asJ.prototype={
S(){return new C.aGt(B.a([],x.E),B.a([],x.s))}}
C.aGt.prototype={
gat0(){return A.h.D(B.M6(this.a.c.a,new C.eqk(this)),0,1/0)},
a9Q(){var w,v=this,u=v.d,t=v.gat0()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rk(u.a,t,!0,!1)},
K9(d,e){var w,v,u,t=this,s=t.gat0(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gat0()
if(w<v-0.005)B.hH4(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rk(u.a,w,!0,!1)
B.rk(t.a.c.a,w,!0,!1)
B.Br(!0,!1,w,t.a.c.a)},
Y(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a3()
$.aU.bZ$.push(o)
w=$.Jw+1
$.Jw=w
if(w===1){w=$.hsE
if(w!=null)w.$0()}v=$.hbG.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bp(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bp(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.mb(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aRY(u,A.h.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w2(w,u,r,q,s.e,p)}o.d=t}o.PW()
o.a9Q()
$.aU.x1$.push(new C.er0(o))
o.Q=B.dh(A.ow,new C.er1(o))
o.as=B.dh(A.hb,new C.er2(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.hYS()
w.a2()},
cGc(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9d(v,w)){if(C.hbI(p,q.e)){q.m(new C.eqJ(q,p))
q.yE(!1,!0,!0)}else if(q.c!=null)q.m(new C.eqK())
return}if(!C.cjy(v.c?v.bU():v)){q.m(new C.eqL(p))
q.b23(!1)
return}u=p.gD3()
if(u<=0)return
t=w.d4(B.c0(B.bC(w),B.bM(w),B.bY(w),12,0,0,0,0))
s=C.hbJ(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.eqM())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aU(q.e,new C.eqN(r))){q.m(new C.eqO(p,w,u))
return}q.m(new C.eqP(q,p,u,w))
q.aAh(new B.d8(r,p.a,u,A.h7,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,w))},
jn(d){if(d===A.fW)this.Fi()},
PW(){var w,v,u,t,s,r,q,p=this.d
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
w.c6=B.bp(p.c6,!0,x.N)
w=this.a.c
w.bx=p.c6.length
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
q=new B.w2(u,t,s,r,v.e,q)
u=q}w.x=u},
SP(d){return this.cEN(d)},
cEN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$SP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.PW()
t.K9(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dN(s,x.H),$async$SP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$SP,v)},
Fi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fi=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(H.Aa(q.w,k,l,j,m,!1,n),$async$Fi)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.eqE(q,p))
q.SP(!1)}w=8
return B.b(q.Kl(),$async$Fi)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ac(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Kl(),$async$Fi)
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
return B.i($async$Fi,v)},
Oj(d){return this.bG2(d)},
bG1(){return this.Oj(null)},
bG2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Oj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.aA(),$async$Oj)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d0(t.w,x.N)
r=s.rA("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jH(d,B.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fT&&l.x===A.cv&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eql(j,t,i))
q.u(0,p)
r=B.C(q,B.a3(q).k("ci.E"))
t.w=r
w=4
return B.b(B.asL(t.a.c.a,r),$async$Oj)
case 4:t.azN(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oj,v)},
Kl(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kl=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.U(a2).k("Y<1>")
a4=B.C(new B.Y(a2,new C.eqF(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.U(a2).k("N<1,n>")
e=B.C(new B.N(a2,new C.eqG(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lN("transactions","id,status",null,null,null,B.I(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kl)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gP(a2)
m=n
a3=J.u(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aJ(J.u(m,"status"))
d=a3==null?null:A.h.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bk(r.e,new C.eqH(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cv
else a0=J.z(k,2)?A.kJ:A.dF
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dF&&h===A.cv&&a3[j].d===A.fT)J.c5(a6,l)
if(i===A.dF&&h===A.kJ&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.K9(g.d+r.e[j].c,!1)
r.azN(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.eqI())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.ac(a7)
$.am.$1("[growth income] refresh deposit status: "+B.w(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return B.b(r.Oj(a6),$async$Kl)
case 13:w=11
break
case 12:w=14
return B.b(r.bG1(),$async$Kl)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kl,v)},
QJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vi(i.a,i),$async$QJ)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.eqp(t,h))
t.PW()
t.a9Q()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.Aa(s[0],p,q,o,r,!0,i),$async$QJ)
case 4:i=e.a
n=i[4]
m=B.bp(i[2],!0,x.o)
l=i[5]
t.w=B.bp(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.PW()
t.a9Q()
k=C.hbI(n,m)
if(k)t.K9(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.htt(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.PW()
if(t.c==null){w=1
break}t.m(new C.eqq(t,n,m,l))
if(i){t.yE(!1,!0,!0)
if(j==="reset"){B.hsd(t.a.c.a)
i=t.c
if(i!=null)B.hsg(i,null)}else if(j==="warn2"){B.hse(t.a.c.a)
i=t.c
if(i!=null)C.hsh(i)}}else if(k)t.yE(!1,!0,!0)
else t.SP(!1)
case 1:return B.h(u,v)}})
return B.i($async$QJ,v)},
yE(d,e,f){return this.coi(d,e,f)},
azN(d,e){return this.yE(d,!1,e)},
b23(d){return this.yE(!1,d,!1)},
coi(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.t_(r,o,q,!1,t.w,s,p),$async$yE)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JC(t.w,p,q,s,o,r)
if(f)t.SP(d)
case 1:return B.h(u,v)}})
return B.i($async$yE,v)},
cdY(){this.m(new C.eqy())
this.azN(!1,!0)},
agy(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cv&&B.tq(d)){w=r.a
w.f.$1(new B.d8(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cju(q,d)
v=q.d=B.M6(r.a.c.a,new C.eqv(r))
r.at=r.a.c.d=v
B.rk(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.eqw(r,d))
r.yE(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d8(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dF
if(w&&d.d===A.fT)s=!1
else if(w&&d.d===A.f4){r.K9(q.d-d.c,!0)
s=!0}else{C.cju(q,d)
w=d.d
s=w===A.f4||w===A.ks
r.K9(q.d,s)}r.m(new C.eqx(r,d))
w=d.d
r.yE(s,e,w===A.f4||w===A.ks||d.x===A.cv||w===A.h7)},
aAh(d){return this.agy(d,!0,!1)},
b37(d,e){return this.agy(d,!0,e)},
b36(d,e){return this.agy(d,e,!1)},
ch4(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.isF(u,e,d)){v.mr("This plan is already active.")
return}w=B.hGz(u.a,d,e)
if(C.ioQ(u.a,v.e,w)){v.mr("You already own this plan.")
return}if(u.d<g){v.mr("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.eqz(v))
v.m(new C.eqA(v,u,new B.w2(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAh(new B.d8(w,u.a,g,A.ks,A.fx,"Direct investment buy: "+d,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.m(new C.eqB(v))
v.mr("Plan purchased: "+d)},
mr(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a0S(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.aps(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0S)
case 3:w=4
return B.b(t.QJ(),$async$a0S)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a0S,v)},
ah1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.ajY(r,B.a([r],x.d9),A.SW,t.a.d,t.gb35(),t.gb22(),null),!1,null,x.X),$async$ah1)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah1,v)},
ah_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.an7(r,t.a.d,t.e,t.gb35(),t.gb22(),new C.eqD(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ah_)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah_,v)},
aed(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aed=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hbI(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b23(!0),$async$aed)
case 5:case 4:if(j.x==null){t.mr("Choose an investment plan first, then come back to clock in.")
t.m(new C.eqr(t))
w=1
break}if(B.mA(r)===6||B.mA(r)===7){t.mr("Clock-in opens Monday through Friday.")
w=1
break}if(!C.htu(r)){t.mr("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9d(q,r)&&j.fy>0){t.mr("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSH(q,r))if(!B.aSH(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIo(m.y,l,m.a))}}q=B.hFY(q,r)}else q=p
else q=p}else q=!1
if(q){t.mr("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mr("You are already clocked in for today.")
w=1
break}k=C.i_k(r)
q=j.a
t.m(new C.eqs(j,r,k))
t.b36(new B.d8("local_clockin_manual_"+q+"_"+s,j.a,0,A.h7,A.fx,"Clock-in session started (local)",null,null,A.cv,r),!1)
t.mr("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.P(d).ax.a===A.I?A.ny:A.qq
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fNH
u=u==null?k:u.$0()
u=J.aT(u==null?A.iD:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.am(0,q)||B.tq(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cR(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.C(new B.b7(v,v.$ti.k("b7<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.eqT(),B.U(v).k("Y<1>")))
A.d.b_(w,new C.eqU())
v=l.d
v.toString
u=C.iep(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anW(t,l.a.e,l.z,l.gch3(),l.aXf(),D.hzj),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDT(l.aXf(),q,n,o,w,new C.eqV(l),l.gcja(),new C.eqW(l),D.hzk),j,!0)
m=B.aE(d,k,x.w).w
n=l.y
return new B.XH(n,new C.eqX(l),B.aG(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDS(v,u,w,l.gc70(),new C.eqY(l),new C.eqZ(l),new C.er_(d),l.gck2(),l.gcjY(),D.hzi),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIq(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXf(){var w=null,v=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
return B.he(B.aM(!1,w,!0,B.p(A.z,D.c5b,A.f,w,w,new B.o(w,w,B.K(D.f1.j(0.38),A.r,1),w,B.a([new B.ab(0,A.G,D.f1.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqo(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIq(){var w=null,v=B.l(27),u=B.K(A.aF.j(0.45),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.5),A.eS,24),new B.ab(-2,A.G,A.aF.j(0.12),A.J,18)],x.V)
return new B.D(A.OA,B.bm(!0,B.as(new B.cN(D.b7W,B.p(w,B.cm(new C.eqm(this)),A.f,w,w,new B.o(w,w,u,v,t,D.c93,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c8G(d){var w=null,v=this.y===d,u=D.dfE[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dv(w,!0,w,B.az(A.bZ,B.qt(B.oF(v?B.X(s,D.agO,new B.bf("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bf("off"+r,q),A.b9,A.i,0,A.p),A.iQ,B.q0(),A.b0,A.b0,B.LO())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.equ(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDS.prototype={
c5G(d){return C.hbJ(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.P(d)
w=A.c.j(0.58)
v=f.e
u=B.U(v).k("Y<1>")
u=B.pQ(new B.Y(v,new C.dtC(),u),3,u.k("M.E"))
t=B.C(u,B.a3(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9d(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.htu(r)
m=v.gD3()
l=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f1.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.G,D.f1.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.p(A.z,B.X(A.hB,D.f1,e,e,e,19),A.f,e,e,new B.o(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.l(14)
k=B.l(14)
j=B.a([new B.ab(0,A.G,A.b7.j(0.45),A.cM,16)],j)
h=B.l(12)
g=x.p
j=B.bUf(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.p(A.z,B.p(A.z,D.bYc,A.f,e,e,new B.o(A.iN.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.o(e,e,e,k,j,D.caE,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.p(A.z,D.c4a,A.f,e,e,new B.o(A.bt,e,B.K(D.ajN,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hw6(A.fM,new C.dtD(),k)
k=B.A(B.a([B.E(C.hw5(new C.dtE(f,A.rD,n),new B.V(Date.now(),0,!1),h,k),1),A.p4,B.E(new B.wm(new C.dtF(f,A.rD),e,new B.hf(B.a([$.zh(),$.a4j()],x.U)),e),1)],g),A.l,e,A.e,A.i,0,e,e)
h=f.c8T(A.rD,D.f1)
v=B.E(f.cCh("Total Profit","$"+B.dG(v.e),A.rD),1)
u=u?e:s.b
return B.eb(B.ca(B.x(B.a([j,A.T,k,A.af,new C.aDR(f.d,m,q,p,n,o,D.f1,f.gc5F(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p4,B.E(f.b9s("Total Investment","$"+B.dG(u==null?0:u),A.rD,f.r),1)],g),A.l,e,A.e,A.i,0,e,e),A.T,f.c5C(d,t,D.f1,w)],g),A.al,e,A.e,A.i,0,A.p),A.t,e,A.y,e,e,A.a1z,e,e,A.ah),D.ajN,!0)},
azM(d,e,f,g,h){var w=null,v=B.l(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.4),A.dp,18)],x.V)
return B.p(w,B.bu(B.l(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bN(new B.o(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.o(w,w,u,v,t,D.c9x,A.n),w,w,w,w,w,w,w,w)},
b21(d,e,f,g){return this.azM(d,e,f,A.ag,g)},
bbA(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.l(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b21(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFa,B.x(B.a([B.p(w,B.A(B.a([B.X(e,f,w,w,w,15),A.e7,B.d(h.toUpperCase(),w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.aok,w,w,w),A.b4,new B.dx(A.dM,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.m(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.l(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c8T(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.p(s,s,A.f,s,s,new B.o(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.d_j[w],s,D.bIQ,s,s,s,5))}r=B.p(s,B.A(o,A.dO,s,A.b9,A.i,0,s,s),A.f,s,s,new B.o(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h0M,A.bF,B.A(B.a([B.p(s,s,A.f,s,s,new B.o(e,s,s,s,B.a([new B.ab(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.di(1,A.cn,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.m(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.l(16)
v=B.l(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.azM(B.A(B.a([r,D.fmk,q,A.ae,B.aM(!1,o,!0,B.p(s,B.x(B.a([B.X(A.nO,e.j(0.95),s,s,s,21),A.rg,B.d("PLAY",s,s,s,s,s,s,B.m(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.i,0,A.p),A.f,s,s,new B.o(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.i,0,s,s),e,A.a5,A.a16,26)},
b9s(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.p(v,v,A.f,v,v,new B.o(t,v,v,D.b66,v,v,A.n),v,v,v,A.nF,v,v,v,5),r=x.p
r=B.a([s,A.bc,B.E(B.x(B.a([B.A(B.a([B.X(u?A.v7:A.zH,t,v,v,v,14),A.e7,new B.di(1,A.cn,B.d(d,v,1,A.a2,v,v,v,B.m(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.i,0,v,v),A.am,new B.dx(A.dM,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.fvL,v,v,v),v)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(Af.On,B.X(A.eI,A.c.j(0.35),v,v,v,v),v))
w=this.b21(new B.a5(v,66,B.A(r,A.l,v,A.e,A.i,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.l(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cCh(d,e,f){return this.b9s(d,e,f,null)},
c5C(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.f,m,m,new B.o(f,m,m,m,B.a([new B.ab(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.m(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.l(20),h=x.p
i=B.a([B.A(B.a([l,A.VF,k,A.b4,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.a1M,m,m,m)],h),A.l,m,A.e,A.i,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a0X,B.x(B.a([B.X(A.ho,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.m(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mO(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.ks
t=u?A.hL:D.f1
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ay(t.j(0.35),1,A.r,-1)
v=B.p(A.z,B.X(u?A.v7:A.x2,t,m,m,m,18),A.f,m,m,new B.o(m,m,new B.bH(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.imH(j),m,1,A.a2,m,m,m,A.kq,m,m,m)
q=C.hxJ(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.H(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.p(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.H(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.o(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oz,m,m,m)
j=C.hFB(j)
k.push(new B.D(O.Or,new B.c8(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([v,A.bc,new B.by(1,A.bd,s,m),B.x(B.a([q,A.cS,B.d(j,m,m,m,m,m,m,new B.H(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dO,m,A.e,A.i,0,A.p)],h),m),m))
A.d.u(i,k)}return this.azM(B.x(i,A.l,m,A.e,A.i,0,A.p),f,A.aY,D.bFl,26)}}
C.aDR.prototype={
S(){return new C.bkB(null,null)},
cX2(d){return this.z.$1(d)},
cYn(){return this.Q.$0()}}
C.bkB.prototype={
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,A.qC,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bCS,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bn(u,A.qF,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.baB()},
gbdj(){var w=new B.V(Date.now(),0,!1)
if(B.mA(w)===6||B.mA(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
baB(){var w=this,v=w.a,u=v.e||v.f||w.gbdj()
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
bz(d){this.bK(d)
this.baB()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bze()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdj()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aF:g.x
g=g.r?new C.dtv(i):h
v=B.l(32)
s=B.l(32)
r=f?D.dym:D.dyk
q=B.K((f?D.pk:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.G,(f?A.aF:A.ba).j(0.16),A.fQ,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.acI(D.pk,130),h,h,h,-24,-30,h),B.ao(-36,i.acI(A.aF,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.acI(A.ba,120),h,h,h,-30,-36,h),B.ao(-40,i.acI(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dt(!0,B.bu(l,new B.ep(B.c7(k,new C.dtw(i),h),h),A.aq),h),0,0,0))}if(f){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dt(!0,B.bu(l,new B.ep(B.c7(k,new C.dtx(i),h),h),A.aq),h),0,0,0))}l=B.l(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b82,B.p(h,B.A(B.a([B.p(h,h,A.f,h,h,new B.o(t,h,h,h,B.a([new B.ab(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.di(1,A.cn,B.d(u,h,1,A.a2,h,h,h,D.fBI,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.hn,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hw6(A.fM,new C.dty(),l)
m.push(C.hw5(new C.dtz(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.o(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.n),A.Cw,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acI(d,e){var w=null
return new B.dt(!0,B.p(w,w,A.f,w,w,new B.o(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.bec.prototype={
b24(d,e,f,g){var w=new B.aH($.S().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+f,u))
w.E(new B.ce(v,u,v,u+f))
w.E(new B.ce(v,u,v-f,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bw())
d.af(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.h.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.h.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b24(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.h.F(a7+p/3,1)
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
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
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.b=A.aa
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hLK()
h=i.b
d=h.c
h=h.a.c
i.a4(b2,new B.r(-d/2,-h.gba(h)/2))}m.restore()
break
case 1:$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b24(b2,o,3+g*3,i)
break
case 2:$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.c=1.8
a2.d=A.bG
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a7.j(0.28).gp(0)
i.y=R.oA
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aE(d){return d.b!==this.b}}
C.beb.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.S(),a4=B.L()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=B.a([],u)
q=new B.aH(a3,A.aj,e,e,r)
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
p=new B.bw()
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
v.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aD(0,D.feP))
a5.aF(new B.a4(-18,a2,18,a2+a1*3),v)
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
v=B.bx(D.ffn,A.V6)
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.r=D.aEo[A.o.F(t,6)].j(k*0.9).gp(0)
a5.aq(v,u)
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
f=D.aEo[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.c=2
r.d=A.bG
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aE(d){return d.b!==this.b}}
C.bea.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.S()
w=B.L()
w.b=A.aa
w.c=14
v=f.d
w.r=(v?f.r:A.b_).j(0.22).gp(0)
a4.O(a1,a2-7,w)
w=B.L()
w.b=A.aa
w.c=1.7
w.r=(v?f.f:A.c).j(0.28).gp(0)
a4.O(a1,a2-1,w)
w=B.L()
w.b=A.aa
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
t=$.S().r
q=x.g
p=new B.aH(t,A.aj,e,e,B.a([],q))
p.E(new B.jA(B.bW(a1,a3)))
a4.mx(0,p)
p=B.bW(a1,a3)
o=B.L()
o.san(D.eFv.aD(0,B.bW(a1,a3)))
a4.aF(p,o)
n=A.h.D(f.b,0,1)
if(n>0.004){a0+=a3
m=a0-a3*2*n
l=v?5.2:1.8
q=B.a([],q)
k=new B.aH(t,A.aj,e,e,q)
j=d-a3
a0+=4
k.E(new B.aZ(j,a0))
for(t=d+a3,p=f.c*3.141592653589793,o=p*2,p*=2.2,i=l*0.42;j<=t;j+=3){h=(j-d)/a3*3.141592653589793
h=new B.aq(j,m+Math.sin(h*2+o)*l+Math.sin(h*3.1-p)*i)
q.push(h)
g=k.f
if(g!=null)h.ak(g)
k.ab()}k.E(new B.aq(t,a0))
k.E(new B.bw())
$.S()
d=B.L()
a0=x.O
t=f.e
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f1.j(0.34),A.cW.j(0.62)],a0)
d.san(new B.a7(A.aY,A.b3,A.x,a0,e,e).aD(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDT.prototype={
S(){var w=$.ax()
return new C.aDU(new B.au(A.aw,w),new B.au(A.aw,w))},
bkw(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDU.prototype={
t(){var w=this.d,v=$.ax()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a2()},
mr(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cEb(d){this.a.bkw(d,!0)
this.mr("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dtW())},
cCM(){var w,v,u=this,t=B.cX(u.d.a.a)
if(t==null||t<=0){u.mr("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hE(w,new C.arR(v.d,t,u.gcEa(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cKR(){var w,v,u,t,s=this,r=s.d,q=B.cX(r.a.a)
if(q==null||q<=0){s.mr("Enter an amount to withdraw.")
return}if(q<10){s.mr("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mr("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hH2(w.a.a)
if(v.length===0){s.mr("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkw(new B.d8("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dF,new B.V(Date.now(),0,!1)),!0)
s.mr("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.cg)
w.bP(0,A.cg)
s.m(new C.dtX())},
cHu(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
if(r.x!==A.cv||!this.aZe(r)||B.hk0(r))continue
q=r.d
p=q===A.f4||q===A.ks||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brK(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cHu(),p=s.a.r,o=new B.Y(p,new C.dtY(),B.U(p).k("Y<1>")).gJ(0)
p=B.aE(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f1.j(0.38),A.r,1)
w=B.bUf(!1,v,"WALLET",B.he(B.aM(!1,r,!0,B.p(A.z,B.X(X.arB,D.f1,r,r,r,18),A.f,r,r,new B.o(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bGX(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asz(A.x2,"Deposit",0),s.asz(A.v7,"Withdraw",1),s.asz(A.h3,"History",2)],t),A.l,r,A.r_,A.i,0,r,r)
return B.eb(B.bm(!1,B.ca(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oF(s.f===2?s.c2u():s.c8k(),A.ie,B.q0(),A.b0,A.b0,B.LO())],t),A.al,r,A.e,A.i,0,A.p),A.t,r,A.y,r,r,new B.Q(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.BZ,!0)},
bGX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.co(g,"@")
v=A.a.aA(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.b1(g,w)}else v=g
w=B.l(26)
u=B.ao(h,i.aC1(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aC1(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aC1(150,0.05),h,h,-40,h,h,h)
r=B.l(26)
r=B.bS(0,new B.bN(new B.o(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.l(6)
p=x.p
q=B.A(B.a([B.p(h,B.b5(h,h,h,new C.bdC(h),A.az),A.f,h,h,new B.o(h,h,h,q,h,D.cbK,A.n),h,28,h,h,h,h,h,38),A.b4,D.h9y],p),A.l,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.m(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asz(new C.dtI(i),D.fHs,i.a.d.a)
m=B.a([B.E(i.aRB(A.qN,"In",d),1),B.E(i.aRB(A.tf,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.l(99)
j=B.K(A.jd.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fCF,h,h,h),A.f,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.oz,h,h,h))}return new B.fH(1.62,B.bu(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eEI,u,t,s,r,new B.D(A9.ta,B.x(B.a([q,A.b4,o,A.bF,new B.dx(A.dM,A.a5,A.f,n,h),A.b4,B.A(m,A.l,h,A.e,A.i,0,h,h),A.am,B.d(v,h,1,A.a2,h,h,h,B.m(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.aq),h)},
aC1(d,e){var w=null
return B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRB(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.di(1,A.cn,new B.dx(A.dM,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o4,w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w)},
asz(d,e,f){var w=null,v=this.f===f,u=v?D.cd6:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f1.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.G,A.aF.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.X(d,v?D.agO:D.f1,w,w,w,26),w,w,A.ck,new B.o(w,w,t,w,s,u,A.a6),A.H2,w,62,w,w,w,w,w,62)
return B.az(A.bZ,new B.a5(92,w,B.x(B.a([u,A.aVo,B.d(e,w,w,w,w,w,w,B.m(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dtH(this,f),w,w,w,w,w,w,!1,A.a4)},
c8k(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cX(a1.a.a)
if(a2==null)a2=0
w=a0?D.f1:A.cs
v=a2>0
u=new C.dtT(e,w)
t=new C.dtS()
s=e.f
r=B.l(26)
q=x.O
p=B.a([w.j(0.1),A.uD,A.uD],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.G,A.w.j(0.35),A.eS,22)],n)
l=w.j(0.15)
l=B.p(d,B.X(a0?A.x2:A.v7,w,d,d,d,18),A.f,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fF,d,d,d),1)
j=A.c.j(0.06)
i=B.l(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.p(d,B.A(B.a([B.X(A.hB,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.m(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.m(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uY(B.ag("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ig,l,d),A.df,B.aZ9(new B.cN(D.b8l,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bz(d,A.eN,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.m(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.eb,d,d,d,1,d,d,!1,"\u2022",d,new C.dtR(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fKm,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b0,new B.o(d,d,d,B.l(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.m(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.ch2:D.cvP
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.i,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.X(A.hB,w,d,d,d,d)
k=B.m(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bz(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.l(16),new B.ay(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,A.nf,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.l(16)
A.d.u(l,B.a([A.af,B.p(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.eV),B.iU(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f1)],h),A.l,d,A.e,A.i,0,A.p),A.f,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.hP,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.l(18)
l=a0?A.Tk:A.a5j
n=B.a([new B.ab(0,A.G,(a0?A.b2:A.dX).j(0.45),A.dp,18)],n)
k=a0?e.gcCL():e.gcKQ()
j=B.X(a0?A.a3g:A.lU,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bN(new B.o(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lX(j,B.d(i,d,d,d,d,d,d,A.lZ,d,d,d),k,B.fv(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.b9(B.l(18),A.a1),d,d,d,d,d)),d),d))
return B.p(d,B.x(a1,A.al,d,A.e,A.i,0,A.p),A.f,d,d,new B.o(d,d,o,r,m,new B.a7(A.aY,A.b3,A.x,p,A.xg,d),A.n),d,d,new B.bf("form"+s,x.W),d,A.wG,d,d,d)},
c2u(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.U(a2).k("Y<1>"),a4=B.C(new B.Y(a2,new C.dtL(a0),a3),a3.k("M.E"))
A.d.b_(a4,new C.dtM())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.T(x.N,x.o)
a3=$.fNH
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iD:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b7<2>")
a2=B.C(new B.b7(a2,a3),a3.k("M.E"))
r=C.inf(a2,B.M6(a0.a.e,new C.dtN(a0)))
a2=B.l(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.l(99)
u=B.l(99)
q=x.p
u=B.a([B.A(B.a([D.bMi,B.aM(!1,v,!0,B.p(a1,D.fgk,A.f,a1,a1,new B.o(a1,a1,B.K(D.f1.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lO,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dtO(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.i,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bDO,B.x(B.a([B.X(A.HB,A.c.j(0.25),a1,a1,a1,40),A.T,D.h66],q),A.l,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cY(a4,0,B.dD(a0.r,"count",x.S),B.U(a4).c),o=p.$ti,p=new B.bR(p,p.gJ(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f4||k===A.ks||k===A.eF
if(l===A.cv)i=j?A.bY:D.f1
else i=l===A.dF?A.jd:A.fj
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ay(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.X(j?A.v7:A.x2,i,a1,a1,a1,19),A.f,a1,a1,new B.o(k,a1,new B.bH(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXs(n),a1,a1,a1,a1,a1,a1,A.j2,a1,a1,a1)
e=C.hxJ(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.H(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.H(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kJ)f.push(new B.D(E.amG,new B.D3(A.bI,5,4,A.br,B.a([a0.aQu("Before",m.b),a0.aQu("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.H(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hFB(n)
v.push(B.p(a1,new B.c8(A.aM,A.e,A.i,A.l,a1,A.p,a1,0,B.a([k,A.bc,new B.by(1,A.bd,m,a1),A.ae,B.x(B.a([f,A.ax,B.p(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.H(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.o(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.z7,a1,a1,a1)],q),A.dO,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.o(a1,a1,new B.bH(A.a1,A.a1,new B.ay(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qG,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hv(D.c2e,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.ce,a1,a1,a1),new C.dtP(a0),B.fs(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.p(a1,B.x(u,A.al,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.o(A.uD,a1,a3,a2,a1,a1,A.n),a1,a1,D.hyW,a1,D.bGb,a1,a1,a1)},
aQu(d,e){var w=null,v=A.c.j(0.05),u=B.l(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.p(w,B.Zk(B.cS(B.a([s,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fHD,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.n3,w,w,w)},
aZe(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tq(d))return!1
if(v===A.fT||v===A.f4)return!0
if(v===A.pa||v===A.ks)return!0
if(v===A.kK)return!0
if(v===A.h7)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXs(d){var w,v=d.f
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
C.bdC.prototype={
a4(d,e){var w,v,u,t
$.S()
w=B.L()
w.r=D.bjZ.j(0.55).gp(0)
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
C.byL.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a4(0,p,s,p+80)
n=[A.ba,A.h8,A.bv][q]
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.a7(A.aY,A.b3,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aD(0,o))
a1.aF(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.pp.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.h.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.h.F(v+m*0.25,1)
t=A.pp.j(0.5*Math.sin(h*3.141592653589793))
d=new B.iF(new B.et("z",a0,a0,A.cN,a0,a0,a0,a0,a0,a0,new B.H(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.c1,new B.jo(1),a0,a0,a0,a0,A.c2,a0,A.cx)
d.ep()
d.a4(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aNu.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.bAK.prototype={}
C.b26.prototype={}
C.a0W.prototype={
S(){return new C.aGh(new B.au(A.aw,$.ax()))},
cZy(d,e){return this.d.$2(d,e)}}
C.aGh.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
b29(){var w=this,v=A.a.i(w.d.a.a),u=B.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.el0(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.cZy(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aE(a0,A.eU,e).w
e=B.aE(a0,A.dD,e).w
w=B.as(B.p(f,f,A.f,f,f,new B.o(A.aT,f,f,B.l(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.c1A,A.f,f,f,new B.o(f,f,f,f,B.a([new B.ab(0,A.G,A.fe.j(0.5),A.J,18)],v),D.auj,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fUb,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mD,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aI(f,f,f,f,D.c2t,f,f,f,new C.el3(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.i,0,f,f)
s=g.b99(A.eY,"You",A.cs)
r=A.aQ.j(0.15)
q=B.l(99)
q=B.A(B.a([s,new B.D(A.kX,B.p(f,D.fYm,A.f,f,f,new B.o(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.hm,f,f,f),f),g.b99(A.wZ,"Your friend",A.c4)],u),A.l,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.l(16)
p=A.c.j(0.12)
o=B.l(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bz(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ay(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b76),f,f,f,f,f,f,f,f,R.Fe,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c56,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mC,f,f,f,1,f,f,!1,"\u2022",f,new C.el4(g),f,new C.el5(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cqQ[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.aui:f
p=p?f:A.c.j(0.06)
k=new B.ay(g.e===l?A.aE:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dl,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.by(1,A.bd,B.az(f,B.cU(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.H(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.i,0,A.p),f,f,A.b0,new B.o(p,f,new B.bH(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fi,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.el6(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.i,0,f,f)
r=B.A(B.a([B.X(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.m(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.i,0,f,f)
p=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.Q(0,0,0,d.f.d+e.r.d),B.p(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h1p,A.am,o,A.aO,D.h5V,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bN(new B.o(f,f,f,p,v,D.cbZ,A.n),A.bk,B.hv(D.asv,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fF,f,f,f),g.gcej(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b98,f,f,f,f,D.bHw,f,f,f),f)},
b99(d,e,f){var w=null,v=f.j(0.1),u=B.l(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.p(w,B.x(B.a([B.X(d,f,w,w,w,24),A.ax,B.d(e,w,w,w,w,w,w,A.Li,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fi,w,w,w),1)}}
C.pD.prototype={}
C.btz.prototype={
a4(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.S()
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(w===0)r=A.bi
else r=(w&1)===0?A.bD:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.S()
r=B.L()
r.r=A.iL.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fE(s,A.cx,s,s,s,B.cS(s,s,s,s,s,s,s,s,s,A.aXZ,B.w(r)),A.a7,A.c1,s,A.dJ,A.c2)
u.ep()
r=u.b
t=r.c
r=r.a.c
u.a4(d,q.aJ(0,new B.r(t/2,r.gba(r)/2)))}},
aE(d){return d.b!=this.b}}
C.Fu.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.at9.prototype={
gkt(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsw(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hbq("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3k()
w=s.gkt()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.c2(9,"",!1,x.N)
s.ax=!0
if(s.gkt())w="You are X vs NGMY (O) \u2014 get 3 in a row"
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
s.c=s.gkt()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e6(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkt())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0i(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKe.h(0,d)
s.c=w==null?"Play to earn":w}},
be7(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkt()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b8(w,new C.cl9(),o)
v=B.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.C(v,o)
A.d.u(v,B.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cI6(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at5(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b8(t,new C.cla(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c2(7,0,!1,o))}if(B.j1(e.h(0,q)))o=B.dQ(e.h(0,q))
else{o=B.cb(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJi(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at5(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b8(t,new C.clb(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.y=o}if(B.j1(e.h(0,p)))o=B.dQ(e.h(0,p))
else{o=B.cb(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bKB(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at5(e,f)
break}},
cTa(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bp(w.at,!0,q))
o.n(0,"turnEmail",w.aEa())
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
p=B.U(q).k("N<1,ai<G>>")
q=B.C(new B.N(q,new C.cld(),p),p.k("ak.E"))
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
p=B.U(q).k("N<1,ai<G>>")
q=B.C(new B.N(q,new C.cle(),p),p.k("ak.E"))
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
default:q=B.dL(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aEa(){var w,v,u,t=this
if(t.gkt()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=A.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
at5(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cI6(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJi(d,e){var w,v,u,t,s
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
bKB(d,e){var w,v,u,t,s,r,q
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
UN(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkt())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEa():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3k(){var w,v,u=this,t=J.e6(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.cl6(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0i(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.cg)},
d2k(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkt())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UN(q,v==null?"":v)?r.z:-1}if(!r.gkt()){v=r.d
v=v==null?null:v.d
v=!r.UN(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkt()?r.z:w
if(!r.gkt()&&u!==r.z)return!1
t=J.u(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkt()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aK(r.y[d],e,r.z)
J.aK(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aay(2)){r.ac8(1)
return!0}if(r.aay(1)){r.ac8(2)
return!0}if(r.gkt()&&r.z===2){r.bFc(f)
if(r.aay(2)){r.ac8(1)
return!0}if(r.aay(1)){r.ac8(2)
return!0}}}return!1},
ac8(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gkt()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bFc(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.u(m.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.u(m.y[p],o)===0&&A.o.F(p+o,2)===1)l.push(B.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.aw(w)]
J.aK(m.y[n[2]],n[3],2)
J.aK(m.y[n[0]],n[1],0)
m.z=1},
aay(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d2m(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r3
if(!s.gkt()){w=s.d
w=w!=null&&!s.UN("tic_tac_go",w.d)}else w=!1
if(w)return D.r3
if(s.gkt())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.akO(v))return s.aVR(v,!0)
if(!A.d.q(s.at,""))return s.aVS()
s.ax=!s.ax
if(!s.gkt()){s.x.n(0,"turnEmail",s.aEa())
s.c=s.b_M()
return D.r3}if(s.gkt()){t=s.cpv(e)
if(t>=0){s.at[t]="O"
if(s.akO("O"))return s.aVR("O",!1)
if(!A.d.q(s.at,""))return s.aVS()
s.ax=!0}}s.c=s.gkt()?"Your turn \u2014 you are X":s.b_M()
return D.r3},
b_M(){var w=this.d
if(w==null)return"Take your turn"
return this.UN("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aVR(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gkt()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.r4:D.JD},
aVS(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Uh},
cpv(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.akO("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.akO("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dg5[u]
if(v[w].length===0)return w}return-1},
akO(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.doq[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4H(d){return A.d.cB(d,0,new C.clc())},
cMG(d){this.ay.push(1+d.aw(10))
if(this.a4H(this.ay)>21)return!0
return!1},
cMH(d){var w,v,u,t=this
while(t.a4H(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4H(t.ay)
v=t.a4H(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cSx(d,e){var w,v,u,t=this
if(t.e)return D.r3
if(!t.gkt()){w=t.d
w=w!=null&&!t.UN("connect_four_pro",w.d)}else w=!1
if(w)return D.r3
if(t.gkt())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r3
if(!t.ahV(d,w))return D.r3
if(t.aam(t.fx))return t.aVP(t.fx,!0)
if(t.aRk())return t.aVQ()
w=t.fx===1?2:1
t.fx=w
if(t.gkt()&&w===2){u=t.coT(e)
if(u>=0){t.ahV(u,2)
if(t.aam(2))return t.aVP(2,!1)
if(t.aRk())return t.aVQ()
t.fx=1}}t.c=t.gkt()?"Your turn \u2014 drop a red disc":t.bJh()
return D.r3},
bJh(){var w=this.d
if(w==null)return"Drop a disc"
return this.UN("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ahV(d,e){var w
for(w=5;w>=0;--w)if(J.u(this.fr[w],d)===0){J.aK(this.fr[w],d,e)
return!0}return!1},
aRk(){for(var w=0;w<7;++w)if(J.u(this.fr[0],w)===0)return!1
return!0},
aVP(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gkt()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.r4:D.JD},
aVQ(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Uh},
coT(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.u(r.fr[0],w)!==0)continue
r.ahV(w,2)
v=r.aam(2)
r.bbN(w)
if(v)return w}for(w=0;w<7;++w){if(J.u(r.fr[0],w)!==0)continue
r.ahV(w,1)
u=r.aam(1)
r.bbN(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.u(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bbN(d){var w
for(w=0;w<6;++w)if(J.u(this.fr[w],d)!==0){J.aK(this.fr[w],d,0)
return}},
aam(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.u(this.fr[w],v)!==d)continue
if(this.bJj(w,v,d))return!0}return!1},
bJj(d,e,f){var w,v,u,t,s=new C.cl5(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bf4(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0i(d)}return w.a>=w.b}}
C.au4.prototype={
S(){return new C.aH4(null,null)},
cYr(d){return this.e.$1(d)}}
C.aH4.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,D.bCV,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aV(0,v.gb2C())
v.aA3()},
bz(d){var w
this.bK(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.cg)
this.aA3()}},
aA3(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aj1(t,u)
C.aj1(t,u)
w.a.cYr(s)
w.a.toString
w.m(new C.eSs())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb2C())
w=v.d
w===$&&B.c()
w.t()
v.bAL()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aj1(j,i),g=C.aj1(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wW(new B.d2(v,!1,B.p(l,l,A.f,l,l,new B.o(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ab(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1t,l,l,l,3),l),A.UR,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.et(v,l,l,A.cN,l,l,l,l,l,l,D.fEr))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cD}else if(s===t){r=A.be
q=A.O}else{r=A.aA
q=A.H}d.push(new B.et(t,l,l,A.cN,l,l,l,l,l,l,new B.H(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wW(new B.d2(k,!1,B.p(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.UR,l,l))}p=f===0?0:A.h.U(h/f*100)
k=A.w.j(0.35)
v=B.l(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.p(l,B.x(B.a([B.A(B.a([m.b2B("Correct",""+h,A.bi),A.ae,m.b2B("Wrong / missed",""+(f-g),A.aA),A.b4,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fw2,l,l,l)],o),A.l,l,A.e,A.i,0,l,l),A.am,D.fZv],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.ca(new B.abn(l,B.cS(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.m(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.l(12),D.b7_),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,D.aXY,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.i,0,A.p)},
b2B(d,e,f){var w=null,v=f.j(0.15),u=B.l(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.hm,w,w,w)}}
C.aOZ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
var z=a.updateTypes(["aB<~>()","~()","G(ip,ip)","~([y5?])","R(rf)","rf()","G(rV,rV)","R(rV)","G(rW,rW)","QD(Z)","R(ip)","cK(afg)","a0D(Z)","a_K(Z)","ag1(Z)","a82(Z)","Oz(Z)","aeT(Z,hx<ai<jw>>)","aeS(Z,G)","v(rf)","rV(a9<@,@>)","~(Fu,at9)","Or(Z)","a9<n,@>(rV)","rW(a9<@,@>)","a9<n,@>(kM)","a9<n,@>(rW)","R(rW)","a9<n,@>(m3)","m3(@)","a9<n,@>(iD)","iD(@)","ip(@)","aB<~>(kM)","a9<n,@>(ip)","~(G,G)","ip(ip)","WQ(Z)","aB<R>(ai<ip>)","a0C(Z)","~(ip)","a1n(Z)","WR(Z)","n(ip)","R(m3)","xI(bA<G,m3>)","adm(Z,G)","G(iD,iD)","ade(m3)","v(t1)","by(JJ)","a08(Z)","~(d8{bumpWalletRevision:R,cloudRequest:R})","~(n,F,F,F)","F(V)","~(d8)","a0W(Z)","~(Fu)","n(n)","a1o(Z)"])
C.cBS.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cBT(r,w,s.b,v,s.d)
t=s.e
r.b=B.dh(t,u)
v.r=new C.cBP(r)
v.e=new C.cBQ(r,w)
v.f=new C.cBR(r,w,t,u)},
$S:0}
C.cBT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ac(r)
u=B.cs(r)
s=v
q=u
p=B.H6(s,q)
if(p==null)p=new B.jX(s,q==null?B.HV(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:41}
C.cBP.prototype={
$0(){this.a.b.a1(0)
return $.HJ()},
$S:1653}
C.cBQ.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaG.$0()
this.a.b.a1(0)},
$S:0}
C.cBR.prototype={
$0(){var w,v=this,u=v.b,t=B.dw(0,0,u.gbhd(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=B.cz(new B.bd(u.a-t.a),new C.cBO(w,u,v.d))},
$S:0}
C.cBO.prototype={
$0(){var w=this.c
this.a.b=B.dh(this.b,w)
w.$1(null)},
$S:0}
C.fei.prototype={
$1(d){var w=this.a
w.m(new C.feh(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.feh.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alQ,this.b,null,null,v.$ti.k("hx<1>"))},
$S:0}
C.fek.prototype={
$2(d,e){var w=this.a
w.m(new C.fef(w,d,e))},
$S:57}
C.fef.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alQ,null,this.b,this.c,v.$ti.k("hx<1>"))},
$S:0}
C.fej.prototype={
$0(){var w=this.a
w.m(new C.feg(w))},
$S:0}
C.feg.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.yK,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fRE.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cv},
$S:15}
C.fRw.prototype={
$1(d){return d},
$S:13}
C.fxQ.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.z,new B.D(new B.Q(u,0,u,0),B.d("NGMY",w,1,A.eT,w,!1,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afJ,w,v,w,w,w,w,w,v)},
$S:159}
C.fxN.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.fxO.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kK(w,A.z,v.d,new C.fxM(v.e),A.h2,v.c,!0,v.b,null,null,v.a)},
$S:1654}
C.fxM.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.fxP.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.dlD.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dlO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dm5.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dm6.prototype={
$1(d){return this.a.Kn()},
$S:11}
C.dlW.prototype={
$0(){var w=J.b8(this.b,new C.dlV(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dlV.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlX.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,a9<n,@>>")
v=B.C(new B.N(v,new C.dlU(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dlU.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlZ.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,a9<n,@>>")
v=B.C(new B.N(v,new C.dlY(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dlY.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlR.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgq(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arK(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dlP(t))
case 3:if(t.c!=null)t.m(new C.dlQ(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:50}
C.dlP.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dlQ.prototype={
$0(){return this.a.d++},
$S:0}
C.dlS.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dlT.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dlJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.iuv(t.a.d.bd,J.k(J.u(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aiQ(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kn(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dlK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.ijh(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aiQ(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kn(),$async$$0)
case 3:t.J9(A.d.dL(t.y,new C.dlH(s),new C.dlI(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dlH.prototype={
$1(d){return d.a===J.u(this.a,"gameId")},
$S:z+4}
C.dlI.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dlL.prototype={
$1(d){return d.a===J.u(this.a,"gameId")},
$S:z+4}
C.dlM.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dlN.prototype={
$0(){return this.a.J9(this.b,J.k(J.u(this.c,"id")))},
$S:0}
C.dlG.prototype={
$0(){return this.a.c6L(this.b)},
$S:0}
C.dlF.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.iuZ(u,w.b,new C.dlE(v,w))},
$S:0}
C.dlE.prototype={
$2(d,e){return this.a.aji(this.b,d,e)},
$S:679}
C.dm4.prototype={
$2(d,e){if(d)return
this.a.aVt()},
$S:128}
C.dm2.prototype={
$2(d,e){var w=this.a
return new B.li(C.b25(w.a.c.a),new C.dm1(w,this.b,this.c),null,null,x.gH)},
$S:1656}
C.dm1.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.l(12)
v=B.l(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k7,B.bJQ(A.d3,B.X(A.h3,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dm0(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:1657}
C.dm0.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fNW(s.c.a,s.e).eF(new C.dm_())
w=2
return B.b(C.bH8(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dm_.prototype={
$1(d){},
$S:29}
C.dm3.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e_e.prototype={
$0(){var w=this.a
return B.M6(w.a.c.a,new C.e_d(w))},
$S:80}
C.e_d.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e_f.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bh=t.aj()
v.bv()
w.m(new C.e_c())},
$S:0}
C.e_c.prototype={
$0(){},
$S:0}
C.e_g.prototype={
$2(d,e){var w,v=this.a
if(!C.cgq(v.a.c)){if($.hbl.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hbm(this.b,v.x,w)
return!1}C.arK(v.a.c.a)}if(B.M6(v.a.c.a,new C.e_b(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJI()
w=v.a
w.toString
w.hK(new B.d8(A.o.v(1000*Date.now()),v.a.c.a,d,A.ks,A.fx,e,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1658}
C.e_b.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e_h.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d8(u,s.c.a,d,A.h7,A.fx,e,v,v,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.h.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ve(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1659}
C.dlx.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlA.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.dlB.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlC.prototype={
$1(d){var w=null,v=this.a,u=B.fv(w,w,v.e===d?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f6,B.iy(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dlz(v,d),u),w),1)},
$S:215}
C.dlz.prototype={
$0(){var w=this.a
return w.m(new C.dly(w,this.b))},
$S:0}
C.dly.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dnp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dns.prototype={
$1(d){this.a.cpR()
return null},
$S:11}
C.dnt.prototype={
$1(d){return this.a.cGd()},
$S:11}
C.dnu.prototype={
$1(d){this.a.a3M()
return null},
$S:11}
C.dnv.prototype={
$1(d){this.a.akn()
return null},
$S:11}
C.dnw.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c6)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.dnq(v))
w=v.as
if(w!=null)w.a1(0)
v.FJ()
return}v.m(new C.dnr(v))},
$S:11}
C.dnq.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dnr.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dmF.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dmG.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dn8.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dn9.prototype={
$0(){},
$S:0}
C.dmV.prototype={
$0(){var w=this.b
w.c6=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dmW.prototype={
$0(){var w=this.a
w.c6=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dmX.prototype={
$0(){var w=this.b
w.c6=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dmY.prototype={
$0(){this.b.c6=!1},
$S:0}
C.dmZ.prototype={
$0(){},
$S:0}
C.dm7.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dmE.prototype={
$0(){var w=this.a
w.at=this.b
w.b8E()},
$S:0}
C.dna.prototype={
$0(){},
$S:0}
C.dnj.prototype={
$0(){},
$S:0}
C.dn7.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dn6(w))},
$S:0}
C.dn6.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dmC.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dmD.prototype={
$0(){},
$S:0}
C.dne.prototype={
$1(d){return d==null},
$S:268}
C.dnf.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dng.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dm8.prototype={
$1(d){return d==null},
$S:268}
C.dm9.prototype={
$0(){return this.a.bh++},
$S:0}
C.dma.prototype={
$0(){},
$S:0}
C.dmO.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dmP.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nc.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dmQ.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dmN(w))},
$S:12}
C.dmN.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dn_.prototype={
$0(){return this.a.y1++},
$S:0}
C.dn0.prototype={
$0(){},
$S:0}
C.dn1.prototype={
$0(){return this.a.y2++},
$S:0}
C.dn2.prototype={
$0(){},
$S:0}
C.dn3.prototype={
$0(){return this.a.bd++},
$S:0}
C.dn4.prototype={
$0(){},
$S:0}
C.dnd.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dmR.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dmS.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dmT.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dmU.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dnh.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dni.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dmb.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmc.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dmd.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dme.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dnb.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dnc.prototype={
$0(){var w,v=this.a;++v.x2
v.aR6()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dmM.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dn5.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dmK.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dmL.prototype={
$2(d,e){return d+e.length},
$S:182}
C.dnk.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.dnl.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dnm.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dno.prototype={
$1(d){var w=this.a,v=w.Po(),u=v<=0?0:A.h.D(w.AM()/v,0,1),t=w.a.x,s=t*1.46
return new C.Or(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dnn.prototype={
$1(d){return d.bW(0.85)},
$S:169}
C.dmJ.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nc.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j2,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hM(v,6,6,1,r),new C.dmI(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
$S:153}
C.dmI.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nc.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nc.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.auq:D.c9G,l=B.l(10),k=B.l(10)
if(p)w=m
else if(o)w=m
else w=n?D.auq:D.auj
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.X(D.cEx[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.m(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.o(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dmH(r,e),s,s,s,s,s,s,s)},
$S:201}
C.dmH.prototype={
$0(){return this.a.cpb(this.b)},
$S:0}
C.dmr.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bi.l()>>>16&255,A.bi.l()>>>8&255,A.bi.l()&255),r=B.l(10),q=B.l(10),p=B.l(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,B.p(A.z,B.d(t?"":u,w,w,w,w,w,w,D.aWU,w,w,w),A.f,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmq(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:670}
C.dmq.prototype={
$0(){return this.a.cFt(this.b)},
$S:0}
C.dms.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aG(!1,A.a3,!0,B.l(10),B.aM(!1,B.l(10),!0,B.p(A.z,B.d(u,w,w,w,w,w,w,D.aWU,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmp(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:670}
C.dmp.prototype={
$0(){return this.a.cFs(this.b)},
$S:0}
C.dmt.prototype={
$1(d){return this.a.m(new C.dmo())},
$S:31}
C.dmo.prototype={
$0(){},
$S:0}
C.dmu.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aj1(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pA()
if(u.ghR()&&D.nc.q(0,u.a.e)){u.a21()
u.nl(!0)}else{v=A.d.cB(u.cy,0,new C.dmm())
t=u.dx
if(t>=v)u.uy("All 5 sentences perfect \u2014 full payout!")
else u.F8(t/v,t,v)}}else{if(u.ghR()&&D.nc.q(0,u.a.e))u.a21()
u.m(new C.dmn(u))}},
$S:0}
C.dmm.prototype={
$2(d,e){return d+e.length},
$S:182}
C.dmn.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.cg)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dmv.prototype={
$1(d){var w=null,v=B.fv(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.co,w,w,w,w,w,w,w)
return new B.D(A.cw,new B.a5(1/0,w,B.iy(B.d(d,w,w,w,w,w,w,X.aWN,w,w,w),new C.dml(this.a,d),v),w),w)},
$S:140}
C.dml.prototype={
$0(){return this.a.b80(this.b)},
$S:0}
C.dmw.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pX,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hM(3,4,4,1,u),new C.dmk(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
$S:153}
C.dmk.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5O(e),p=r===0
if(p)w=A.L
else w=q?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.l(10)
s=p?t:new C.dmg(s,e)
u=B.l(10)
p=p?"":""+r
return B.aG(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:79}
C.dmg.prototype={
$0(){return this.a.cFr(this.b)},
$S:0}
C.dmx.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dmj(q,d)
p=B.l(16)
if(o)w=D.a6w[d]
else{w=D.a6w[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.l(16)
u=o?B.a0(A.h.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6w[d]
t=B.a([new B.ab(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b0,new B.o(w,r,u,v,t,r,A.n),T.Cy,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1663}
C.dmj.prototype={
$0(){return this.a.cFu(this.b)},
$S:0}
C.dmy.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pX,t,t,t)
w=B.d("Move "+r.aAJ()+"/"+C.hi6(),t,t,t,t,t,t,A.Ff,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.m(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hM(3,6,6,1,s),new C.dmi(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:153}
C.dmi.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.l(10),s=B.l(10),r=u?A.bi:D.bml,q=u?A.ew:D.bwY
return B.aG(!1,A.a3,!0,w,B.aM(!1,t,!0,B.p(w,w,A.f,w,w,new B.o(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dmf(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.dmf.prototype={
$0(){return this.a.cFo(this.b)},
$S:0}
C.dmz.prototype={
$0(){return this.a.b80(this.b[this.c])},
$S:0}
C.dmA.prototype={
$0(){return this.a.m(new C.dmh())},
$S:0}
C.dmh.prototype={
$0(){},
$S:0}
C.dmB.prototype={
$2(d,e){this.a.a0L(d,e)
return null},
$S:z+21}
C.dqZ.prototype={
$1(d){return this.a.cpG(this.b,d)},
$S:1664}
C.dqY.prototype={
$0(){var w=this
return w.a.a.cZ_(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cNS.prototype={
$1(d){var w=this.a
w.a2h()
w.uH()},
$S:8}
C.cNc.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cN2.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cN3.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNm.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNj.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNk.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNl.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNe.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cNd(w))},
$S:0}
C.cNd.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cN4.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNh.prototype={
$1(d){var w=this.a
return new C.WQ(w.fx,new C.cNg(w),w.a.f.r,null)},
$S:z+37}
C.cNg.prototype={
$1(d){return this.bnM(d)},
bnM(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chq(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cNf(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNf.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNF.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cNz.prototype={
$1(d){this.a.uH()
return null},
$S:11}
C.cNC.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ar(v.gaYs().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uH()
return}v.m(new C.cNB())},
$S:11}
C.cNB.prototype={
$0(){},
$S:0}
C.cNy.prototype={
$1(d){this.a.FR()
return null},
$S:11}
C.cNA.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cNx.prototype={
$2(d,e){var w,v=J.u(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.u(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cN9.prototype={
$2(d,e){var w,v=J.u(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.u(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cNa.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNb.prototype={
$0(){var w=this.a
if(w.c!=null)w.a2Y(!0)},
$S:12}
C.cN7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cN8.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.UR(this.b)},
$S:8}
C.cNp.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd6(v).Q
v.toString
if(this.b)w.iv(v)
else w.mv(v,A.e6,A.kV)},
$S:8}
C.cNi.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNq.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNr.prototype={
$0(){var w=this.a
w.f.push(B.I(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9w()
w.r.bP(0,A.cg)
w.at=!0},
$S:0}
C.cNs.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cNt.prototype={
$0(){var w=this.a
w.f.push(B.I(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cNu.prototype={
$0(){var w,v=this.b,u=B.T(x.N,x.z)
J.aK(u,"role","ai")
J.aK(u,"text",this.c)
J.aK(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b8(w.b,v.gcoA(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
J.aK(u,"phoneActions",w)}v.f.push(u)
v.b9w()},
$S:0}
C.cNv.prototype={
$0(){this.a.f.push(B.I(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cNw.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNn.prototype={
$1(d){return this.bnN(d)},
bnN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.as6(q,new C.rV("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atc()
case 4:k.c.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:375}
C.cNE.prototype={
$1(d){return this.bnO(d)},
bnO(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:375}
C.cNo.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd6(v).Q
v.toString
w.iv(v)},
$S:8}
C.cNR.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.acL(v-1)},
$S:0}
C.cNK.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.cNN.prototype={
$1(d){var w=this.a
w.m(new C.cNH(w,d))
if(d===0)w.a2Y(!0)},
$S:31}
C.cNH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNL.prototype={
$2$size(d,e){return C.hgb(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2106}
C.cNM.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.htP(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.asY(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cNI(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.as4(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uH(),$async$$0)
case 15:p.m(new C.cNJ(p))
p.acL(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.uH(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:65}
C.cNI.prototype={
$2(d,e){return this.bnP(d,e)},
bnP(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3A(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:131}
C.cNJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNP.prototype={
$2(d,e){return A.ae},
$S:38}
C.cNO.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6D:D.a5T)[e],w,w,w,w,w,w,A.q_,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cNG(v,e)
return B.n8(w,t,u,w,v,w,w,new B.ay(s,1,A.r,-1),w)},
$S:509}
C.cNG.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6D:D.a5T
w.r.sb4(0,v[this.b])
w.nk()
return null},
$S:0}
C.cNQ.prototype={
$1(d){var w=this.a
return w.at?null:w.nk()},
$S:2}
C.cN5.prototype={
$0(){return this.a.acL(0)},
$S:0}
C.cND.prototype={
$0(){return this.a.acL(this.b)},
$S:0}
C.cN6.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.c3e,A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.m(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a0Y,B.x(B.a([u,A.af,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.m(v,v,t?A.aE:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bKf(t[e],w.c)
return u.aRK(B.I(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c4w.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.h.M(d)
return new B.V(B.h2(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bj(J.k(d))
return v==null?null:v.bU()},
$S:345}
C.c4v.prototype={
$1(d){B.aJ(d)
return(d==null?0:d)/100},
$S:779}
C.c4y.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bj(J.k(d))
w=w==null?null:w.bU()}return w},
$S:345}
C.c4x.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.a1(d,x.N,x.z)
try{v=J.u(w,"id")
v=J.k(v==null?"":v)
u=J.u(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aJ(J.u(w,"amount"))
if(t==null)t=0
s=J.u(w,"type")
s=B.a5X(A.a7s,J.k(s==null?"reimbursement":s))
r=J.u(w,"method")
r=B.a5X(A.a5R,J.k(r==null?"system":r))
q=B.aV(J.u(w,"sourceDetails"))
p=J.u(w,"status")
p=B.a5X(A.IL,J.k(p==null?"approved":p))
o=this.a.$1(J.u(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d8(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:749}
C.dHw.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dHx.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dHn.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dHl.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.Br(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.ham(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pE(o.a.c,!1),$async$$0)
case 4:o.li(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abd(),$async$$0)
case 3:q=e
if(q==null){r.li("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).ce(B.ee(new C.dHu(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pE(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHu.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0C(w.b,w.a,u,v,null)},
$S:z+39}
C.dHk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i_a(q)?3:4
break
case 3:w=5
return B.b(t.a.Fn(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_D(q,s.a.c),$async$$0)
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
case 9:s.li(C.c4A(s.a.c))
w=1
break
case 10:s.li("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.li(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return B.b(s.AC(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aT4(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHj.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bp(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dHm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aeI(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hqB(q)
if(s==null){r.li("Could not read that backup file.")
w=1
break}if(!C.c4z(s,r.a.c,null)){r.li(C.c4A(r.a.c))
w=1
break}w=4
return B.b(r.bMy(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHt.prototype={
$1(d){var w=null,v=new B.au(A.aw,$.ax()),u=B.P(d).ax.a===A.I,t=u?A.iJ:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.m(w,w,u?A.ab:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bz(w,new B.b6(4,B.l(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.el(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.dHr(d),w,w),B.bJ(D.fNz,w,new C.dHs(d,v),B.bo(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h1J,w)},
$S:18}
C.dHr.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHs.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dHo.prototype={
$1(d){return D.hGn},
$S:z+12}
C.dHp.prototype={
$0(){return this.a.Fo(A.a.i(this.b))},
$S:1}
C.dHq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_D(t.b,r.a.c),$async$$0)
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
return B.b(r.AC(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.li(C.c4A(r.a.c))
w=1
break
case 8:r.li("Could not read that QR code for your account.")
w=1
break
case 9:r.li(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return B.b(r.aT4(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHy.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHC.prototype={
$1(d){this.a.RT()
return null},
$S:11}
C.dHz.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dHA.prototype={
$0(){var w=null,v=this.a
B.fI(new B.fx(v.gayN()))
this.b.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gayN()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dHB.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHD.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a_(s,"NGMYSNAP1|")||A.a.a_(s,"NGMYLOCALSYNC1|")||A.a.a_(s,"NGMYLOCALLIVE1|")||A.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:205}
C.fCr.prototype={
$1(d){return D.hCR},
$S:z+13}
C.fDE.prototype={
$1(d){return new C.ag1(this.a,this.b,this.c,null)},
$S:z+14}
C.f7O.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f7P.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dgv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.dgs.prototype={
$2(d,e){return e.amC(e.a.toUpperCase())},
$S:1666}
C.dgt.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dgu.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5i.prototype={
$1(d){var w=J.u(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aU(D.dxu,A.a.gkh(v))},
$S:4}
C.fNQ.prototype={
$1(d){return d.a===this.a},
$S:1667}
C.fNR.prototype={
$0(){return A.d.gH(A.DY)},
$S:1668}
C.dO_.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dNZ(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8w("Time's up")},
$S:11}
C.dNZ.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dNR.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dNW.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dNT(w,d,e))},
$S:219}
C.dNT.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dNX.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dNS(w))
w.czC(!0)},
$S:0}
C.dNS.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dNY.prototype={
$1(d){this.a.b8w(d)
return null},
$S:2}
C.dNU.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.dNV.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.cdz.prototype={
$1(d){return D.dV6},
$S:z+15}
C.cdy.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fEs.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=B.aJ(u.h(d,e)),s=t==null?v:A.h.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=B.aJ(u.h(d,f))
w=t==null?v:A.h.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=B.aJ(u.h(d,"outcome"))
return u==null?v:A.h.M(u)},
$S:1669}
C.fEt.prototype={
$2(d,e){var w=B.aJ(J.u(d,e))
w=w==null?null:A.h.M(w)
return w==null?0:w},
$S:678}
C.fEu.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:182}
C.fV3.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hCp(w,v):C.hgx(w,v)
if(u===3)++w.f
C.ahy(w,this.c,u)
return u},
$S:1670}
C.fV5.prototype={
$0(){return C.hCp(this.a,this.b)},
$S:90}
C.fV4.prototype={
$0(){return C.hgx(this.a,this.b)},
$S:90}
C.dH8.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dH7(w))},
$S:0}
C.dH7.prototype={
$0(){this.a.r=1+A.o.F(B.FP(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dH9.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.h.bg(u*10)
if(w!==v.w)v.m(new C.dH6(v,w))}},
$S:0}
C.dH6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cg_.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.dx(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),1)},
$S:1671}
C.cfZ.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.h.ad(e,2),w,w,w,w,w,w,A.mD,w,w,w)},
$S:403}
C.cgr.prototype={
$1(d){return new C.Oz(this.a,this.b,!1,null,null)},
$S:z+16}
C.e6P.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.l(e?0:30)
e=e?g:B.K(A.b7.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ab(2,A.G,A.b7.j(0.35),A.J,36),new B.ab(0,A.G,A.bE.j(0.175),A.J,24)],x.V)
v=B.l(f.a.e?0:30)
u=x.O
t=B.ao(g,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.ba.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bE.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.i:A.N
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.p(g,D.bZk,A.f,g,g,new B.o(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.G,A.b7.j(0.55),A.cz,18)],n),E.vg,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.ok(A.jV,D.h_f,new C.e6L()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.m(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cD,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.bY.j(0.12)
k=B.l(18)
j=B.K(A.bY.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.X(D.bTh,A.bY.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.m(g,g,A.bY.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.i,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.m(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e6M(),B.U(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.p(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.l(18)
k=B.K(A.b7.j(0.35),A.r,1)
o.push(B.p(g,B.x(B.a([f.azB(A.ho,"Unlimited games with an active plan",A.ba),A.P,f.azB(A.ke,"Weekday check-ins grow your balance",A.b7),A.P,f.azB(A.ml,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.i,0,A.p),A.f,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bH,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bN(new B.o(g,g,g,B.l(16),B.a([new B.ab(0,A.G,A.bE.j(0.45),A.cz,16)],n),E.vg,A.n),A.bk,B.df(D.c1Q,g,D.fVC,new C.e6N(f,a0),B.bo(A.L,g,g,g,A.c,A.KK,g,A.L,new B.b9(B.l(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bP(!1,B.d(n,g,g,g,g,g,g,B.m(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e6O(f,a0),g,g))
if(f.a.e)o.push(A.b4)
h=B.p(g,B.bu(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.Q(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.o(g,g,e,d,w,D.ccB,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,Ai.a1q,g,A.d7,g,g,g)},
$S:669}
C.e6L.prototype={
$1(d){return D.cbv.aD(0,d)},
$S:71}
C.e6M.prototype={
$1(d){var w=null
return new B.D(A.eP,B.A(B.a([B.X(A2.a3o,A.bY.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$S:140}
C.e6N.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e6O.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fQc.prototype={
$1(d){if(d.gn0())this.a.a=d
return d.gn0()},
$S:563}
C.fQ_.prototype={
$1(d){$.aU.x1$.push(new C.fPZ(this.a))},
$S:8}
C.fPZ.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fAL.prototype={
$1(d){return C.hCx(this.a,this.b+1)},
$S:8}
C.fRz.prototype={
$2(d,e){var w=B.aE(d,A.c_,x.w).w.a
return new B.a5(w.a,w.b,B.c6(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:135}
C.cgF.prototype={
$1(d){return d.r===this.a},
$S:258}
C.cgG.prototype={
$1(d){var w=$.aTI(),v=w.a
w.sp(0,v+1)
return v},
$S:1673}
C.cgH.prototype={
$1(d){},
$S:29}
C.cgE.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:258}
C.cgD.prototype={
$1(d){return d.f.cb(this.a)},
$S:258}
C.fxv.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.h34.prototype={
$1(d){return C.a8H(this.a)},
$S:107}
C.h35.prototype={
$1(d){var w=$.aTI()
w.sp(0,w.a+1)},
$S:28}
C.h36.prototype={
$1(d){},
$S:29}
C.h37.prototype={
$1(d){return new B.k7($.aTI(),new C.h33(this.a,this.b),null,null,x.am)},
$S:1674}
C.h33.prototype={
$3(d,e,f){var w=this.b
return new B.li(C.arQ(this.a,!1),new C.h32(w),w,null,x.gv)},
$S:1675}
C.h32.prototype={
$2(d,e){var w=e.b
return new C.aeT(w==null?this.a:w,null)},
$S:z+17}
C.e6S.prototype={
$1(d){return d.c},
$S:258}
C.e6T.prototype={
$1(d){return d.gbkl()},
$S:1676}
C.e6U.prototype={
$2(d,e){return d+e},
$S:85}
C.e6V.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e6X.prototype={
$2(d,e){return A.P},
$S:38}
C.e6W.prototype={
$2(d,e){return new C.aeS(J.u(this.a.c,e),null)},
$S:z+18}
C.e6R.prototype={
$1(d){return d==null?"\u2026":C.bDs(d)},
$S:1677}
C.h3a.prototype={
$3(d,e,f){var w=this
return B.qt(new C.aCM(w.a,w.b,w.c,w.d,new C.h38(d,w.e),new C.h39(d,w.f),null))},
$C:"$3",
$R:3,
$S:88}
C.h38.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hFZ(this.b)},
$S:0}
C.h39.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hFZ(this.b)},
$S:0}
C.dny.prototype={
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
A.d.u(w,new B.N(t,new C.dnx(),B.U(t).k("N<1,v>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aE(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bi,A.ep,A.ec],r):B.a([A.aA,A.er,A.eq],r)
p=B.l(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.G,(h.a.c?A.dK:A.dP).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dr()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A0.ajY,A.us],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.p(i,D.bfs,A.f,i,i,new B.o(i,i,i,i,B.a([new B.ab(4,A.G,A.d3.j(0.6),A.J,24),new B.ab(0,A.G,A.w.j(0.3),A.dp,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5l)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.Ws,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.l(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fPm,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.fFb,A.K,i,i),A.f,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Oq,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fIc,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dW(D.fMO,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.co,i,i,D.b6G,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(F.aYi,i,n,B.bo(A.c,i,i,i,h.c?A.ep:A.er,i,A.co,i,i,i,i,i)),1)],g),A.l,i,A.e,A.i,0,i,i))
w.push(B.e4(A.z,B.p(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.o(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.ao4,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:123}
C.dnx.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d3(B.eK(A.z,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cin.prototype={
$2(d,e){var w=null,v=this.a,u=C.hZA(B.M6(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1678}
C.cim.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.c5P.prototype={
$0(){},
$S:0}
C.fwr.prototype={
$1(d){return A.o.v(d)},
$S:76}
C.e_k.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e_l.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e_m.prototype={
$0(){var w=this.a
return w.w=D.T7[w.d.aw(5)]},
$S:0}
C.e_n.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e_o.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e_p.prototype={
$0(){var w=this.a
return w.m(new C.e_j(w))},
$S:0}
C.e_j.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_q.prototype={
$0(){var w=this.a
return w.m(new C.e_i(w))},
$S:0}
C.e_i.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_t.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.e_u.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bi:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.l(10)
t=t.y?u:new C.e_s(t,d)
w=B.l(10)
v=A.h.ad(d,0)
return B.E(new B.D(A.j9,B.aG(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.m(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:1679}
C.e_s.prototype={
$0(){var w=this.a
return w.m(new C.e_r(w,this.b))},
$S:0}
C.e_r.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.cg)},
$S:0}
C.e72.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cK.gcn().aK(this.c)},
$S:0}
C.e73.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.e6Z.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.l(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f1.j(0.5):A.L,A.r,1),q=B.X(e,u?D.f1:A.aE,w,w,w,20)
return B.E(B.az(w,B.cU(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.m(w,w,u?A.c:A.aE,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),w,w,A.b0,new B.o(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e70(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:1680}
C.e70.prototype={
$0(){var w=this.a
return w.m(new C.e7_(w,this.b))},
$S:0}
C.e7_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e71.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JE(this.b,v)},
$S:0}
C.e6Y.prototype={
$0(){var w=this.a
return w.JE(w.gau5(),"Code")},
$S:0}
C.cha.prototype={
$1(d){return C.hVL(B.a1(d,x.N,x.z))},
$S:z+20}
C.chb.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.ch7.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.ch8.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.ch9.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chc.prototype={
$1(d){var w=d.c
return!w.d4(this.a.bS(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c8X.prototype={
$1(d){return C.hVM(B.a1(d,x.N,x.z))},
$S:z+24}
C.c8Y.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c8V.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c8W.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9_.prototype={
$1(d){var w=d.b
return!w.d4(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chl.prototype={
$1(d){return d.aj()},
$S:z+28}
C.chk.prototype={
$1(d){return C.hsU(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chj.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chi.prototype={
$1(d){return C.hZd(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chn.prototype={
$1(d){return C.hZc(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.cho.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chp.prototype={
$1(d){return d.aj()},
$S:z+34}
C.eb8.prototype={
$1(d){return d.bfK(B.bp(d.e,!0,x.u))},
$S:z+36}
C.eb9.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.eb2.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eb3.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eaM.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.eaN.prototype={
$1(d){return new C.QD(this.a,null)},
$S:z+9}
C.eaO.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.eaL(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JO()}},
$S:0}
C.eaL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.eb_.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.I(["role","admin","text",this.b],w,w))},
$S:0}
C.eb0.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.I(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.ip7(v,w[0],w[3])
t.JO()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.I(["role","ai","text",t],w,w))}},
$S:0}
C.eb1.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd6(v).Q
v.toString
w.iv(v)}},
$S:8}
C.eaU.prototype={
$1(d){return new C.QD(this.a,null)},
$S:z+9}
C.eaV.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eaT.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.eaZ.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JO()},
$S:0}
C.eaY.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1o(u[w],new C.eaX(v,w),null)},
$S:z+59}
C.eaX.prototype={
$1(d){var w=this.a
return w.m(new C.eaW(w,this.b,d))},
$S:z+40}
C.eaW.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a
return w.m(new C.eaP(w))},
$S:0}
C.eaP.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eaR.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eP,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.m(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cD,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:116}
C.eaS.prototype={
$1(d){return this.a.a2D()},
$S:2}
C.eb7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.uo:A.c
u=B.l(16)
t=B.l(16)
s=l?A.aL:A.bm
r=w.d
q=B.b1(r).j(0.15)
p=B.l(12)
q=B.p(n,B.X(A.aqT,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.b1(r).j(0.12)
o=B.l(8)
o=B.p(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hA,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.da,B.aG(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new H.awE(q,e,!0,n),n,n,n,n,new C.eb4(m,e),!1,n,n,new B.b9(t,new B.ay(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CF(n,n,n,n,n,new C.eb5(),A.J,new C.eb6(m,e),A.cq,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bf(w.a,x.W))},
$S:116}
C.eb6.prototype={
$1(d){var w=this
if(d==="edit")w.a.abJ(w.b)
if(d==="questions")w.a.ZU(w.b)
if(d==="delete")w.a.bPv(w.b)},
$S:2}
C.eb5.prototype={
$1(d){return D.d5a},
$S:144}
C.eb4.prototype={
$0(){return this.a.ZU(this.b)},
$S:0}
C.cWC.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.c()
w=d.a===q.a
if(w){q=r.f
q===$&&B.c()
q=B.b1(q).j(0.2)}else q=A.cC.j(0.1)
v=B.l(10)
if(w){u=r.f
u===$&&B.c()
u=B.b1(u)}else u=A.L
u=B.K(u,A.r,1)
t=r.f
t===$&&B.c()
return B.aM(!1,s,!0,B.p(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cWB(r,d),s,s,s,s,s,s,s)},
$S:1681}
C.cWB.prototype={
$0(){var w=this.a
return w.m(new C.cWz(w,this.b))},
$S:0}
C.cWz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWD.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.az(w,B.hh(u,w,t===d?D.c2D:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cWA(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:406}
C.cWA.prototype={
$0(){var w=this.a
return w.m(new C.cWy(w,this.b))},
$S:0}
C.cWy.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cWE.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cWF.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cQp(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f2I.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f2J.prototype={
$1(d){return new C.a1n(this.a,null)},
$S:z+41}
C.f2P.prototype={
$2(d,e){return A.P},
$S:38}
C.f2O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.uo:A.c
u=B.l(14)
t=B.l(14)
s=l?A.aL:A.bm
r=w.d
if(r!=null&&r.length!==0){q=B.l(8)
r=B.bu(q,K.aSj(n,A.bX,36,A.qM,l?A.bP:A.an,r,48),A.aq)}else r=B.X(D.a38,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aG(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f2M(m,w,e),!1,n,n,new B.b9(t,new B.ay(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aI(n,n,n,n,D.c0U,n,n,n,new C.f2N(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:79}
C.f2N.prototype={
$0(){var w=this.a
w.m(new C.f2K(w,this.b))
w.azE()},
$S:0}
C.f2K.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f2M.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b3O(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f2L(t,u.c,s))
t.azE()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f2L.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f2E.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f2C.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WR(w,"Answer Document",null)},
$S:z+42}
C.f2D.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f2G.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).N(new C.iD(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f2H.prototype={
$1(d){var w=this.a
return w.m(new C.f2F(w,d))},
$S:9}
C.f2F.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chf.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fS4.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebJ.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ebp.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.m3("image","",this.b,null))},
$S:0}
C.ebu.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.m3("video","","data:video/mp4;base64,"+A.cK.gcn().aK(this.b),null))},
$S:0}
C.ebs.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7e,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7d,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.el(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.ebq(d),w,w),B.bJ(D.fZI,w,new C.ebr(d),w)],v),w,w,w,u,w,w,w,w,D.fM0,w)},
$S:18}
C.ebq.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ebr.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ebt.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.m3("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ebl.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ebm.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebn.prototype={
$1(d){return A.a.i(A.a.el(d,B.ag("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ebo.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebz.prototype={
$0(){var w=this.a.bIJ()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ebA.prototype={
$0(){return this.a.azF("**","**")},
$S:0}
C.ebB.prototype={
$0(){return this.a.azF("*","*")},
$S:0}
C.ebC.prototype={
$0(){return this.a.azF("__","__")},
$S:0}
C.ebD.prototype={
$0(){return this.a.b1T("## Section title")},
$S:0}
C.ebE.prototype={
$0(){return this.a.b1T("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ebF.prototype={
$0(){},
$S:0}
C.ebG.prototype={
$0(){var w=this.a
w.m(new C.eby(w))},
$S:0}
C.eby.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dYB)},
$S:0}
C.ebH.prototype={
$0(){var w=this.a
w.m(new C.ebx(w))},
$S:0}
C.ebx.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dYC)},
$S:0}
C.ebI.prototype={
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
t=B.d(t,v,v,v,v,v,v,B.m(v,v,w?A.iO:A.av,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?A.ct:A.hY
return B.Eb(v,w,A.atc,t,v,new C.ebw(this.a,d),v)},
$S:z+45}
C.ebw.prototype={
$0(){var w=this.a
return w.m(new C.ebv(w,this.b))},
$S:0}
C.ebv.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.ebi.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b23},
$S:0}
C.ebj.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hDR},
$S:0}
C.eba.prototype={
$0(){var w=this.a
w.d=D.b22
w.f=w.e=null},
$S:0}
C.ebb.prototype={
$0(){var w=this.a
w.d=D.b23
w.f=null},
$S:0}
C.ebk.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebd.prototype={
$2(d,e){var w=this.a,v=w.gb9x()[e]
return new C.adm(v,this.b,new C.ebc(w,v),null)},
$S:z+46}
C.ebc.prototype={
$0(){return this.a.cdF(this.b.a)},
$S:0}
C.ebf.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ebh.prototype={
$2(d,e){return A.T},
$S:38}
C.ebg.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uo:A.c,p=B.l(16),o=B.l(16),n=B.l(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ab(0,A.G,A.w.j(r?0.28:0.06),A.dL,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.l(10)
v=B.l(10)
k.push(B.bu(w,K.aSj(v,A.bX,52,D.a38,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.l(12)
k.push(B.p(t,B.X(D.a38,B.b1(j),t,t,t,24),A.f,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bc)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.m(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eI,r?A.bP:A.an,t,t,t,22))
return B.aG(!1,A.a3,!0,p,B.aM(!1,o,!0,B.p(t,B.A(k,A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ebe(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:79}
C.ebe.prototype={
$0(){return this.a.ckE(this.b)},
$S:0}
C.chh.prototype={
$1(d){return new C.ade(d,this.a,null)},
$S:z+48}
C.cQ6.prototype={
$0(){var w=this.a.c,v=w.c,u=B.on(v==null?w.b:v)
if(u!=null)B.iS(u,A.fo,null)},
$S:0}
C.cQ7.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQ8.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nE,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:140}
C.drS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.drU.prototype={
$0(){return this.a.m(new C.drT(this.b))},
$S:0}
C.drT.prototype={
$0(){var w=this.a
return w.a.f?w.hi(0):w.qv(0)},
$S:0}
C.fw9.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ebX.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Ep)w.z=v
else w.Q=v},
$S:0}
C.ebO.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd6(v).Q
v.toString
w.mv(v,A.ck,A.eW)},
$S:8}
C.ebQ.prototype={
$1(d){return J.u(d,"role")==="ai"},
$S:97}
C.ebR.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.I(["role","user","text",this.b],v,v))
w.d.bP(0,A.cg)
w.r=!0},
$S:0}
C.ebS.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.I(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ebT.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:150}
C.ebU.prototype={
$0(){var w=x.N
return this.a.f.push(B.I(["role","ai","text",this.b],w,w))},
$S:0}
C.ebV.prototype={
$0(){var w=x.N
return this.a.f.push(B.I(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ebW.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ebP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.na(l,A.bE.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bT,B.A(B.a([new B.a5(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.m(l,l,this.b?A.aE:A.dZ,l,l,l,l,l,l,l,l,12,A.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aE(k,A.c_,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ab(0,A.G,(u?A.bE:A.aD).j(0.22),A.i3,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bm:A.bq
n=u?13.5:15
m=u?A.bo:A.cL
return new B.bL(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.m(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cD,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.be(A.iq,A.iq,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kB,A.jr,l,l,l),l)},
$S:42}
C.ec3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([D.ai9,A.a_,A.ol],t):B.a([A.qj,A.qh,A.qi],t)
w=B.a([new B.ab(-4,A.G,A.aD.j(0.35+w*0.25),A.dp,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dr()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fA(A.z,B.p(o,D.bYm,A.f,o,o,new B.o(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eFT,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.ok(A.jV,D.h3v,new C.ec0())
p=x.p
m=B.a([B.A(B.a([q,A.bc,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.m(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.l,o,A.e,A.i,0,o,o),A.af,B.A(B.a([n.axO(D.Ep,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.axO(D.aMj,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.axO(D.Eq,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.Eq){t=B.a([A.P,n.cE1(u)],p)
if(n.w){q=n.x===D.Ep?D.a7n:D.a6r
p=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.ec1(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bE.j(0.22),A.aD.j(0.12)],t)
q=B.l(12)
p=B.K(A.bE.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.m(o,o,u?A.ix:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.o(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.C(new B.N(D.dpx,new C.ec2(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.i,0,o,o))
return B.p(o,B.x(m,A.al,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.n),o,o,o,I.amX,I.an7,o,o,o)},
$S:81}
C.ec0.prototype={
$1(d){return D.cc0.aD(0,d)},
$S:71}
C.ec1.prototype={
$1(d){return this.a.cE2(d,this.b)},
$S:z+49}
C.ec2.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMl?6:0,m=o?5:0,l=B.l(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.l(12)
p=p.r?q:new C.ec_(p,d)
s=C.i_J(d)
if(o)r=A.c
else r=v?A.ab:A.bq
r=B.d(s,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i_K(d)
if(o)v=A.ab
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.Q(0,0,n,0),B.aG(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(O.Or,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.m(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.ec_.prototype={
$0(){var w=this.a
return w.m(new C.ebZ(w,this.b))},
$S:0}
C.ebZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ec5.prototype={
$0(){var w=this.a
return w.m(new C.ec4(w))},
$S:0}
C.ec4.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ebN.prototype={
$0(){var w=this.a
return w.m(new C.ebM(w,this.b))},
$S:0}
C.ebM.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Eq
if(v===D.aMj&&w.Q==null)w.Q=A.d.gH(D.a6r).a},
$S:0}
C.ec6.prototype={
$0(){return this.a.czs(this.b.a)},
$S:0}
C.ebY.prototype={
$0(){return this.a.JF(this.b)},
$S:0}
C.ebK.prototype={
$1(d){return this.a.b1U()},
$S:2}
C.ebL.prototype={
$0(){return this.a.b1U()},
$S:0}
C.h4_.prototype={
$1(d){var w=this
return new C.a08(w.a,w.b,w.c,new C.h3Z(w.d),null)},
$S:z+51}
C.h3Z.prototype={
$0(){return J.lQ(this.a.bm())},
$S:0}
C.dpc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bkD()},
$S:28}
C.dpd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aE(m,A.c_,u).w
s=Math.cos(v)
u=B.aE(m,A.c_,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e9:A.ho
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d3(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:350}
C.dpi.prototype={
$0(){},
$S:0}
C.dph.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nk.az(0,A.h.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.dr()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fE(t*0.08)
w.k5(0.12)
return B.e4(A.z,B.fA(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dpe.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.p(t,t,A.f,t,t,new B.o(t,t,t,t,B.a([new B.ab(6,A.G,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.na(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cT(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:123}
C.dpf.prototype={
$1(d){return D.cc4.aD(0,d)},
$S:71}
C.dpg.prototype={
$0(){var w=this.a
w.a.bkD()
w.a.e.$0()},
$S:0}
C.cjg.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fT)if(d.x===A.dF){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjt.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqk.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.er0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QJ()},
$S:8}
C.er1.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ub||w===A.uc)return
this.a.Fi()},
$S:11}
C.er2.prototype={
$1(d){this.a.cGc()},
$S:11}
C.eqJ.prototype={
$0(){this.a.K9(this.b.d,!1)},
$S:0}
C.eqK.prototype={
$0(){},
$S:0}
C.eqL.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.eqM.prototype={
$0(){},
$S:0}
C.eqN.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqO.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.eqP.prototype={
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
C.eqE.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bp(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bp(v[1],!0,x.N)
w.PW()
w.a9Q()},
$S:0}
C.eql.prototype={
$0(){this.b.K9(this.c.d+this.a.a,!1)},
$S:0}
C.eqF.prototype={
$1(d){var w=d.d
return(w===A.fT||w===A.f4)&&d.x===A.dF},
$S:15}
C.eqG.prototype={
$1(d){return d.a},
$S:171}
C.eqH.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqI.prototype={
$0(){},
$S:0}
C.eqp.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bp(v[0],!0,x.N)},
$S:0}
C.eqq.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.eqy.prototype={
$0(){},
$S:0}
C.eqv.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.eqw.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqx.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqz.prototype={
$0(){return this.a.z=!0},
$S:0}
C.eqA.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w2(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.eqB.prototype={
$0(){return this.a.z=!1},
$S:0}
C.eqD.prototype={
$0(){var w=this.a
return w.m(new C.eqC(w))},
$S:0}
C.eqC.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqr.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqs.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.eqT.prototype={
$1(d){return d.a.length===0},
$S:15}
C.eqU.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.eqY.prototype={
$0(){var w=this.a
return w.m(new C.eqR(w))},
$S:0}
C.eqR.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqZ.prototype={
$0(){var w=this.a
return w.m(new C.eqQ(w))},
$S:0}
C.eqQ.prototype={
$0(){return this.a.y=2},
$S:0}
C.er_.prototype={
$0(){return B.j8(this.a,null)},
$S:0}
C.eqV.prototype={
$2$cloudRequest(d,e){return this.a.b37(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1683}
C.eqW.prototype={
$0(){return this.a.Fi()},
$S:1}
C.eqX.prototype={
$0(){var w=this.a
return w.m(new C.eqS(w))},
$S:0}
C.eqS.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.eqo.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.eqn(w))},
$S:0}
C.eqn.prototype={
$0(){return this.a.y=0},
$S:0}
C.eqm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIo(B.p(t,t,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.G,A.aF.j(0.55),A.J,18)],x.V),D.ca_,A.a6),t,t,t,t,t,t,t,t),A.ed,A.t3,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c8G(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.i,0,t,t)],w),t)},
$S:62}
C.equ.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eZ()
w.m(new C.eqt(w,v))},
$S:0}
C.eqt.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtC.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fT||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dtD.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:650}
C.dtE.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hbJ(v.c,u))
w=this.c?new C.dtB(v):null
return v.bbA(this.b,A.pC,D.f1,w,"Today","$"+u,D.f1)},
$S:1685}
C.dtB.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dtF.prototype={
$2(d,e){var w=this.a
return w.bbA(this.b,A.ka,A.cj,w.w,"Balance","$"+B.dG(B.M6(w.c.a,new C.dtA(w))),A.cs)},
$S:67}
C.dtA.prototype={
$0(){return this.a.c.d},
$S:80}
C.dtv.prototype={
$0(){this.a.a.cYn()
return null},
$S:0}
C.dtw.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b5(w,w,w,new C.byL(v,w),A.az)},
$S:56}
C.dtx.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.bec(v,!0,A.aF,D.pk,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beb(v,D.pk,w)}return B.b5(w,w,w,v,A.az)},
$S:56}
C.dty.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:650}
C.dtz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cX2(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.h.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c7(new B.hf(B.a([u,s],x.U)),new C.dtu(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1686}
C.dtu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.dtt(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b5(n,n,n,new C.bea(o.c,v,k,u,D.pk,D.byw,n),D.flC))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.v5
else t=o.e?A.wS:D.bTt
t=B.X(t,k?D.pk:A.b_,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.m(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pk:A.c
w=B.d(w,n,n,n,n,n,n,B.m(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.l(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.p(n,B.x(B.a([t,A.am,s,A.ax,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.m(n,n,k?D.pk:A.pp,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.lo,n,n,n)],m),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.o(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:208}
C.dtt.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.h.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dt(!0,B.d3(B.p(s,s,A.f,s,s,new B.o(s,s,s,B.l(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.pk.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:222}
C.dtW.prototype={
$0(){},
$S:0}
C.dtX.prototype={
$0(){},
$S:0}
C.dtY.prototype={
$1(d){return d.x===A.dF},
$S:15}
C.dtI.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dtH.prototype={
$0(){var w,v
B.eZ()
w=this.a
v=this.b
w.m(new C.dtG(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f4(null,x.H)}},
$S:0}
C.dtG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dtT.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.l(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.j9,B.az(v,B.cU(A.z,B.d("$"+t,v,v,v,v,v,v,B.m(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.o(q,v,p,r,v,v,A.n),A.ha,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dtV(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:1688}
C.dtV.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.dtU(w,this.b))},
$S:0}
C.dtU.prototype={
$0(){var w=""+this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dtS.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uL,B.A(B.a([v,A.b4,B.d(e,w,w,w,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1689}
C.dtR.prototype={
$1(d){return this.a.m(new C.dtQ())},
$S:2}
C.dtQ.prototype={
$0(){},
$S:0}
C.dtL.prototype={
$1(d){return this.a.aZe(d)&&!B.hk0(d)},
$S:15}
C.dtM.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.dtN.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dtO.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dN(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dtK())
t.mr("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dtK.prototype={
$0(){},
$S:0}
C.dtP.prototype={
$0(){var w=this.a
return w.m(new C.dtJ(w))},
$S:0}
C.dtJ.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fNX.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.fFF.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fZ2.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fFE.prototype={
$1(d){var w,v,u
if(!C.im_(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bj(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bj(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bj(J.k(w==null?"":w))}if(u!=null&&A.o.ar(new B.V(Date.now(),0,!1).bB(u).a,36e8)>72)return!1
return!0},
$S:4}
C.ftO.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:68}
C.fXu.prototype={
$0(){return $.hhg=null},
$S:12}
C.fXv.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.fVg.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.fVh.prototype={
$0(){var w,v=this.a
$.hh3.W(0,v)
w=C.uC(this.b,v)
if(w!=null)B.S1(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h_e.prototype={
$1(d){return new C.a0W(this.a,this.b,null)},
$S:z+56}
C.el0.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.el3.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.el4.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.el2(w))},
$S:2}
C.el2.prototype={
$0(){return this.a.f=""},
$S:0}
C.el5.prototype={
$1(d){return this.a.b29()},
$S:2}
C.el6.prototype={
$0(){var w=this.a
return w.m(new C.el1(w,this.b))},
$S:0}
C.el1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fEC.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.b1(d,1)},
$S:13}
C.fEB.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.b1(d,1)},
$S:13}
C.fXL.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.T(x.N,x.z)}},
$S:14}
C.fXM.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fRk.prototype={
$1(d){return d.a!=="send_email"},
$S:280}
C.fXc.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.l(10),t=B.K(A.aT,A.r,1)
return B.p(A.z,B.d(d,w,w,w,w,w,w,A.hu,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.f6,w,w,w,72)},
$S:644}
C.cl9.prototype={
$1(d){return J.k(d)},
$S:17}
C.cla.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.cl8(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c2(7,0,!1,x.S)},
$S:638}
C.cl8.prototype={
$1(d){var w
if(B.j1(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:382}
C.clb.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.cl7(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c2(8,0,!1,x.S)},
$S:638}
C.cl7.prototype={
$1(d){var w
if(B.j1(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:382}
C.cld.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:631}
C.cle.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:631}
C.cl6.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:68}
C.clc.prototype={
$2(d,e){return d+e},
$S:66}
C.cl5.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.u(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:66}
C.fHq.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fHk.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHl.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHm.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHn.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHo.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHp.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fqS.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ar(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.u(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_0:D.bjV
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dB
w=B.p(t,t,A.f,t,t,new B.o(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.G,A.w.j(0.35),A.dL,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.az(t,B.p(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fqR(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:83}
C.fqR.prototype={
$0(){var w=this,v=w.a,u=v.d2k(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r4:D.JD
w.f.$1(v)}},
$S:0}
C.fEX.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,Q.aVp,new C.fEW(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:135}
C.fEW.prototype={
$2(d,e){var w=this,v=null,u=B.l(12),t=B.l(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aA
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.m(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fEV(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fY,0,v,v,v,v,v,A.ai)},
$S:79}
C.fEV.prototype={
$0(){var w=this,v=w.a.d2m(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fq9.prototype={
$1(d){return new B.D(A.j9,C.fV7(d,!1),null)},
$S:288}
C.fqa.prototype={
$1(d){return C.fV7(d,!1)},
$S:1693}
C.fqb.prototype={
$0(){var w=this,v=w.a
v.cMG(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fqc.prototype={
$0(){var w=this
w.a.cMH(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fBS.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n8(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.ce,v,v,v),A.dk,new C.fBR(w.a,w.b,u,w.c,w.d),v,v,new B.ay(A.c.j(0.2),1,A.r,-1),v)},
$S:1694}
C.fBR.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fDO.prototype={
$1(d){return D.dtT[d]},
$S:76}
C.fDP.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fAH.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fAI.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.frk.prototype={
$0(){var w=this,v=w.a.cSx(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frj.prototype={
$1(d){var w,v=null,u=J.u(this.a.fr[5-d],this.b)
if(u===0)w=A.mc
else w=u===1?A.dP:A.tB
return new B.fH(1,B.p(v,v,A.f,v,v,new B.o(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nJ,v,v,v,v),v)},
$S:1695}
C.fAT.prototype={
$1(d){var w=this
if(w.a.bf4(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fAU.prototype={
$0(){var w=this
if(w.a.bf4(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fqF.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fN_.prototype={
$1(d){var w=J.u(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fN0.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:55}
C.eSs.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aN6.prototype
w.byO=w.Y
w.byN=w.t
w=C.aN7.prototype
w.byQ=w.Y
w.byP=w.t
w=C.aN8.prototype
w.byS=w.Y
w.byR=w.t
w=C.aO5.prototype
w.bzR=w.Y
w.bzQ=w.t
w=C.aNE.prototype
w.bzo=w.t
w=C.aOf.prototype
w.bA0=w.t
w=C.aN9.prototype
w.byT=w.t
w=C.aOn.prototype
w.bA9=w.t
w=C.aNe.prototype
w.byY=w.t
w=C.aNu.prototype
w.bze=w.t
w=C.aOZ.prototype
w.bAL=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCK.prototype,"gbVA","bVB",19)
v(q,"gaVs","aVt",1)
v(C.aCJ.prototype,"gcCV","a3u",1)
v(q=C.aCL.prototype,"gc06","c07",1)
v(q,"gbKv","bKw",1)
v(q=C.azM.prototype,"gcvV","cvW",1)
v(q,"gckb","Rc",0)
v(q,"gcH2","cH3",1)
v(q,"gcyZ","nk",0)
w(q,"gcoA","coB",25)
w(q,"gcFh","SV",33)
v(q=C.aER.prototype,"gbTw","YG",0)
v(q,"gc9m","a_e",0)
v(q,"gc9j","a_d",0)
v(q,"gc9k","aeH",0)
v(q,"gc9l","Q_",0)
v(C.aC2.prototype,"gc9n","c9o",1)
u(C,"itr","hYV",58)
t(C,"hk8",0,null,["$1","$0"],["hGj",function(){return C.hGj(null)}],3,0)
t(C,"bGQ",0,null,["$1","$0"],["hGi",function(){return C.hGi(null)}],3,0)
v(C.O2.prototype,"gF2","chl",1)
v(C.aFC.prototype,"gcwc","Bu",0)
v(q=C.aFS.prototype,"gckv","Re",0)
v(q,"gcpk","a1H",0)
v(q,"gcdz","cdA",1)
v(q=C.aG3.prototype,"gcdE","afN",0)
v(q,"gbE2","a9I",0)
v(q,"gcws","a2D",0)
s(q,"gchQ","chR",35)
v(C.aI3.prototype,"gbEu","a9K",1)
v(q=C.aI2.prototype,"gcdD","afM",0)
v(q,"gcjs","agV",0)
v(q=C.aG5.prototype,"gc3L","adr",0)
v(q,"gc3N","Zn",0)
v(q,"gc3M","ads",0)
v(q=C.aG4.prototype,"gbGQ","bGR",1)
v(q,"gbGS","bGT",1)
v(C.aG6.prototype,"gbMJ","bMK",1)
v(C.aD4.prototype,"gcdG","cdH",1)
v(q=C.aGt.prototype,"gb22","cdY",1)
r(q,"gb35",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agy","aAh","b37","b36"],52,0,0)
r(q,"gch3",0,4,null,["$4"],["ch4"],53,0,0)
v(q,"gcja","a0S",0)
v(q,"gck2","ah1",0)
v(q,"gcjY","ah_",0)
v(q,"gc70","aed",0)
w(C.aDS.prototype,"gc5F","c5G",54)
w(q=C.aDU.prototype,"gcEa","cEb",55)
v(q,"gcCL","cCM",1)
v(q,"gcKQ","cKR",1)
v(C.aGh.prototype,"gcej","b29",1)
v(C.aH4.prototype,"gb2C","aA3",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.iT,[C.cBS,C.cBP,C.cBQ,C.cBR,C.cBO,C.feh,C.fef,C.fej,C.feg,C.fxQ,C.dlD,C.dlO,C.dlW,C.dlX,C.dlZ,C.dlR,C.dlP,C.dlQ,C.dlS,C.dlT,C.dlJ,C.dlK,C.dlI,C.dlM,C.dlN,C.dlG,C.dlF,C.dm0,C.dm3,C.e_e,C.e_d,C.e_f,C.e_c,C.e_b,C.dlx,C.dlA,C.dlB,C.dlz,C.dly,C.dnp,C.dnq,C.dnr,C.dmF,C.dmG,C.dn9,C.dmV,C.dmW,C.dmX,C.dmY,C.dmZ,C.dm7,C.dmE,C.dna,C.dnj,C.dn7,C.dn6,C.dmC,C.dmD,C.dnf,C.dng,C.dm9,C.dma,C.dmO,C.dmP,C.dmQ,C.dmN,C.dn_,C.dn0,C.dn1,C.dn2,C.dn3,C.dn4,C.dnd,C.dmR,C.dmS,C.dmT,C.dmU,C.dnh,C.dni,C.dmb,C.dmc,C.dmd,C.dme,C.dnb,C.dnc,C.dmM,C.dn5,C.dmK,C.dnk,C.dnl,C.dnm,C.dmH,C.dmq,C.dmp,C.dmo,C.dmu,C.dmn,C.dml,C.dmg,C.dmj,C.dmf,C.dmz,C.dmA,C.dmh,C.dqY,C.cNc,C.cN2,C.cN3,C.cNm,C.cNj,C.cNk,C.cNl,C.cNe,C.cNd,C.cN4,C.cNf,C.cNF,C.cNB,C.cNA,C.cNa,C.cNb,C.cN7,C.cNi,C.cNq,C.cNr,C.cNs,C.cNt,C.cNu,C.cNv,C.cNw,C.cNR,C.cNK,C.cNH,C.cNM,C.cNJ,C.cNG,C.cN5,C.cND,C.dHw,C.dHx,C.dHn,C.dHl,C.dHv,C.dHk,C.dHj,C.dHm,C.dHr,C.dHs,C.dHp,C.dHq,C.dHy,C.dHz,C.dHA,C.dHB,C.f7O,C.f7P,C.dgu,C.fNR,C.dNZ,C.dNR,C.dNT,C.dNX,C.dNS,C.dNU,C.dNV,C.cdy,C.fV5,C.fV4,C.dH8,C.dH7,C.dH9,C.dH6,C.e6N,C.e6O,C.e6V,C.h38,C.h39,C.c5P,C.e_k,C.e_l,C.e_m,C.e_n,C.e_o,C.e_p,C.e_j,C.e_q,C.e_i,C.e_t,C.e_s,C.e_r,C.e72,C.e73,C.e70,C.e7_,C.e71,C.e6Y,C.eb2,C.eb3,C.eaM,C.eaO,C.eb_,C.eb0,C.eaV,C.eaT,C.eaZ,C.eaW,C.eaQ,C.eaP,C.eb4,C.cWB,C.cWz,C.cWA,C.cWy,C.cWE,C.cWF,C.f2I,C.f2N,C.f2K,C.f2M,C.f2L,C.f2E,C.f2D,C.f2G,C.f2F,C.ebp,C.ebu,C.ebq,C.ebr,C.ebt,C.ebz,C.ebA,C.ebB,C.ebC,C.ebD,C.ebE,C.ebF,C.ebG,C.eby,C.ebH,C.ebx,C.ebw,C.ebv,C.ebi,C.ebj,C.eba,C.ebb,C.ebc,C.ebe,C.cQ6,C.drS,C.drU,C.drT,C.ebX,C.ebR,C.ebS,C.ebU,C.ebV,C.ebW,C.ec_,C.ebZ,C.ec5,C.ec4,C.ebN,C.ebM,C.ec6,C.ebY,C.ebL,C.h3Z,C.dpi,C.dpg,C.eqk,C.eqJ,C.eqK,C.eqL,C.eqM,C.eqO,C.eqP,C.eqE,C.eql,C.eqI,C.eqp,C.eqq,C.eqy,C.eqv,C.eqw,C.eqx,C.eqz,C.eqA,C.eqB,C.eqD,C.eqC,C.eqr,C.eqs,C.eqY,C.eqR,C.eqZ,C.eqQ,C.er_,C.eqW,C.eqX,C.eqS,C.eqo,C.eqn,C.equ,C.eqt,C.dtB,C.dtA,C.dtv,C.dtW,C.dtX,C.dtI,C.dtH,C.dtG,C.dtV,C.dtU,C.dtQ,C.dtN,C.dtO,C.dtK,C.dtP,C.dtJ,C.fXu,C.fVh,C.el0,C.el3,C.el2,C.el6,C.el1,C.fHk,C.fHl,C.fHm,C.fHn,C.fHo,C.fHp,C.fqR,C.fEV,C.fqb,C.fqc,C.fBR,C.fDP,C.fAI,C.frk,C.fAU,C.fqF,C.eSs])
u(B.ht,[C.cBT,C.fei,C.fRE,C.fRw,C.fxN,C.fxM,C.fxP,C.dm5,C.dm6,C.dlV,C.dlU,C.dlY,C.dlH,C.dlL,C.dm_,C.e_h,C.dlC,C.dns,C.dnt,C.dnu,C.dnv,C.dnw,C.dn8,C.dne,C.dm8,C.dno,C.dnn,C.dmr,C.dms,C.dmt,C.dmv,C.dmx,C.dqZ,C.cNS,C.cNh,C.cNg,C.cNz,C.cNC,C.cNy,C.cN8,C.cNp,C.cNn,C.cNE,C.cNo,C.cNN,C.cNL,C.cNQ,C.c4w,C.c4v,C.c4y,C.c4x,C.dHu,C.dHt,C.dHo,C.dHC,C.dHD,C.fCr,C.fDE,C.dgv,C.dgt,C.c5i,C.fNQ,C.dO_,C.dNY,C.cdz,C.fEs,C.fV3,C.cg_,C.cfZ,C.cgr,C.e6L,C.e6M,C.fQc,C.fQ_,C.fPZ,C.fAL,C.cgF,C.cgG,C.cgH,C.cgE,C.cgD,C.fxv,C.h34,C.h35,C.h36,C.h37,C.h33,C.e6S,C.e6T,C.e6R,C.h3a,C.dnx,C.cim,C.fwr,C.e_u,C.e6Z,C.cha,C.ch7,C.ch9,C.chc,C.c8X,C.c8V,C.c9_,C.chl,C.chk,C.chj,C.chi,C.chn,C.chp,C.eb8,C.eaN,C.eaL,C.eb1,C.eaU,C.eaY,C.eaX,C.eaS,C.eb6,C.eb5,C.cWC,C.cWD,C.f2J,C.f2C,C.f2H,C.chf,C.fS4,C.ebJ,C.ebs,C.ebl,C.ebm,C.ebn,C.ebo,C.ebI,C.chh,C.cQ7,C.cQ8,C.fw9,C.ebO,C.ebQ,C.ebT,C.ec0,C.ec1,C.ec2,C.ebK,C.h4_,C.dpc,C.dpf,C.cjg,C.cjt,C.er0,C.er1,C.er2,C.eqN,C.eqF,C.eqG,C.eqH,C.eqT,C.eqV,C.dtC,C.dtD,C.dty,C.dtt,C.dtY,C.dtT,C.dtS,C.dtR,C.dtL,C.fFF,C.fZ2,C.fFE,C.ftO,C.fXv,C.fVg,C.h_e,C.el4,C.el5,C.fEC,C.fEB,C.fXL,C.fXM,C.fRk,C.fXc,C.cl9,C.cla,C.cl8,C.clb,C.cl7,C.cld,C.cle,C.cl6,C.fHq,C.fq9,C.fqa,C.fBS,C.fDO,C.fAH,C.frj,C.fAT,C.fN_,C.fN0])
t(C.buO,B.jb)
u(B.af,[C.G7,C.an7,C.aFB,C.an6,C.an8,C.anW,C.ajY,C.aps,C.a0C,C.a0D,C.a_K,C.apZ,C.apr,C.Oz,C.aCM,C.ar8,C.arR,C.WQ,C.QD,C.a1o,C.a1n,C.WR,C.as7,C.aDF,C.asa,C.a08,C.asJ,C.aDR,C.aDT,C.a0W,C.au4])
u(B.ah,[C.aKB,C.aN7,C.aO5,C.aN6,C.aN8,C.bjE,C.azM,C.aER,C.bm5,C.bm6,C.aC2,C.bmd,C.aNE,C.aOf,C.aN9,C.aFC,C.aFS,C.aG3,C.bdJ,C.aI3,C.aI2,C.aG5,C.aG4,C.bjS,C.aOn,C.aNe,C.bAK,C.aNu,C.aDU,C.aGh,C.aOZ])
u(B.jE,[C.fek,C.fxO,C.dlE,C.dm4,C.dm2,C.dm1,C.e_g,C.dmL,C.dmJ,C.dmI,C.dmm,C.dmw,C.dmk,C.dmy,C.dmi,C.dmB,C.cNx,C.cN9,C.cNI,C.cNP,C.cNO,C.cN6,C.dgs,C.dNW,C.fEt,C.fEu,C.e6P,C.fRz,C.h32,C.e6U,C.e6X,C.e6W,C.dny,C.cin,C.chb,C.ch8,C.c8Y,C.c8W,C.cho,C.eb9,C.eaR,C.eb7,C.f2P,C.f2O,C.ebk,C.ebd,C.ebf,C.ebh,C.ebg,C.ebP,C.ec3,C.dpd,C.dph,C.dpe,C.eqU,C.eqm,C.dtE,C.dtF,C.dtw,C.dtx,C.dtz,C.dtu,C.dtM,C.fNX,C.clc,C.cl5,C.fqS,C.fEX,C.fEW])
t(C.axX,C.G7)
u(B.aF,[C.rf,C.afg,C.O2,C.JE,C.rV,C.rW,C.m3,C.iD,C.ip,C.bbO,C.ddq,C.drR,C.t1,C.WS,C.OQ,C.ql,C.b26,C.pD,C.at9])
t(C.aCK,C.aN7)
t(C.bmA,C.aO5)
t(C.aCJ,C.aN6)
t(C.aCL,C.aN8)
u(B.l8,[C.Xw,C.aDG,C.asX,C.JJ,C.Fu])
u(B.aw,[C.a1Z,C.bvk,C.ag1,C.Rg,C.a82,C.Or,C.arL,C.aeT,C.aeS,C.b2W,C.aDE,C.adm,C.b2t,C.ade,C.aDS])
t(C.bm3,C.aNE)
t(C.bmO,C.aOf)
t(C.bik,C.aN9)
t(C.aG6,C.aOn)
t(C.aD4,C.aNe)
t(C.aGt,C.bAK)
t(C.bkB,C.aNu)
u(B.mt,[C.bec,C.beb,C.bea,C.bdC,C.byL,C.btz])
t(C.aH4,C.aOZ)
w(C.aN6,C.O2)
w(C.aN7,C.O2)
w(C.aN8,C.O2)
w(C.aO5,C.O2)
w(C.aNE,B.eP)
w(C.aOf,B.cf)
w(C.aN9,B.cf)
w(C.aOn,B.cf)
w(C.aNe,B.eP)
w(C.aNu,B.eP)
v(C.bAK,B.eG)
w(C.aOZ,B.cf)})()
B.j0(b.typeUniverse,JSON.parse('{"buO":{"jb":[]},"G7":{"af":[],"v":[]},"aKB":{"ah":["G7<1,2>"]},"axX":{"G7":["1","hx<1>"],"af":[],"v":[],"G7.T":"1","G7.S":"hx<1>"},"an7":{"af":[],"v":[]},"aFB":{"af":[],"v":[]},"an6":{"af":[],"v":[]},"an8":{"af":[],"v":[]},"anW":{"af":[],"v":[]},"ajY":{"af":[],"v":[]},"aCK":{"ah":["an7"]},"bmA":{"ah":["aFB"]},"aCJ":{"ah":["an6"]},"aCL":{"ah":["an8"]},"bjE":{"ah":["anW"]},"azM":{"ah":["ajY"]},"aps":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"a0D":{"af":[],"v":[]},"ag1":{"aw":[],"v":[]},"a_K":{"af":[],"v":[]},"aER":{"ah":["aps"]},"a1Z":{"aw":[],"v":[]},"bvk":{"aw":[],"v":[]},"bm5":{"ah":["a0C"]},"bm6":{"ah":["a0D"]},"Rg":{"aw":[],"v":[]},"aC2":{"ah":["a_K"]},"apZ":{"af":[],"v":[]},"bmd":{"ah":["apZ"]},"a82":{"aw":[],"v":[]},"apr":{"af":[],"v":[]},"bm3":{"ah":["apr"]},"Or":{"aw":[],"v":[]},"arL":{"aw":[],"v":[]},"Oz":{"af":[],"v":[]},"bmO":{"ah":["Oz"]},"aeT":{"aw":[],"v":[]},"aeS":{"aw":[],"v":[]},"aCM":{"af":[],"v":[]},"bik":{"ah":["aCM"]},"b2W":{"aw":[],"v":[]},"ar8":{"af":[],"v":[]},"aFC":{"ah":["ar8"]},"arR":{"af":[],"v":[]},"aFS":{"ah":["arR"]},"WQ":{"af":[],"v":[]},"QD":{"af":[],"v":[]},"a1o":{"af":[],"v":[]},"a1n":{"af":[],"v":[]},"aG3":{"ah":["WQ"]},"bdJ":{"ah":["QD"]},"aI3":{"ah":["a1o"]},"aI2":{"ah":["a1n"]},"WR":{"af":[],"v":[]},"aG5":{"ah":["WR"]},"as7":{"af":[],"v":[]},"adm":{"aw":[],"v":[]},"ade":{"aw":[],"v":[]},"aDF":{"af":[],"v":[]},"aG4":{"ah":["as7"]},"aDE":{"aw":[],"v":[]},"b2t":{"aw":[],"v":[]},"bjS":{"ah":["aDF"]},"asa":{"af":[],"v":[]},"aG6":{"ah":["asa"]},"a08":{"af":[],"v":[]},"aD4":{"ah":["a08"]},"asJ":{"af":[],"v":[]},"aDR":{"af":[],"v":[]},"aDT":{"af":[],"v":[]},"aGt":{"ah":["asJ"],"eG":[]},"aDS":{"aw":[],"v":[]},"bkB":{"ah":["aDR"]},"bec":{"aC":[]},"beb":{"aC":[]},"bea":{"aC":[]},"aDU":{"ah":["aDT"]},"bdC":{"aC":[]},"byL":{"aC":[]},"a0W":{"af":[],"v":[]},"aGh":{"ah":["a0W"]},"btz":{"aC":[]},"au4":{"af":[],"v":[]},"aH4":{"ah":["au4"]}}'))
B.Dn(b.typeUniverse,JSON.parse('{"O2":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.at
return{dw:w("lS<t?>"),gS:w("oG"),o:w("d8"),g5:w("xI"),M:w("db<n>"),k:w("V"),gv:w("li<ai<jw>>"),gh:w("li<n>"),gH:w("li<G>"),r:w("aB<~>"),dk:w("a_"),fw:w("O<oG>"),E:w("O<d8>"),V:w("O<ab>"),O:w("O<t>"),A:w("O<a_>"),R:w("O<nE>"),B:w("O<ai<G>>"),m:w("O<a9<n,n>>"),_:w("O<a9<n,@>>"),b:w("O<rV>"),x:w("O<rW>"),gi:w("O<jw>"),a:w("O<m3>"),Y:w("O<ip>"),v:w("O<iD>"),dA:w("O<JE>"),F:w("O<t1>"),Z:w("O<kM>"),g:w("O<fZ>"),gK:w("O<+at,details,id(V,n,n)>"),C:w("O<cT>"),s:w("O<n>"),G:w("O<jb>"),eO:w("O<et>"),d9:w("O<f_>"),p:w("O<v>"),n:w("O<F>"),t:w("O<G>"),U:w("O<aC?>"),d4:w("O<n?>"),ck:w("ai<rV>"),e:w("ai<rW>"),ac:w("ai<jw>"),dZ:w("ai<m3>"),I:w("ai<ip>"),j:w("ai<@>"),L:w("ai<G>"),eq:w("a9<n,n>"),P:w("a9<n,@>"),f:w("a9<@,@>"),cl:w("cM<n,D>"),aS:w("N<a_,tP>"),dc:w("N<JJ,by>"),dv:w("N<n,n>"),bL:w("N<F,by>"),a3:w("N<G,by>"),gN:w("N<G,qd>"),w:w("iC"),b1:w("rV"),Q:w("rW"),bP:w("m3"),i:w("ip"),u:w("iD"),gp:w("WS"),J:w("OQ"),D:w("ql"),an:w("kM"),c:w("cu"),K:w("aF"),d:w("jz<n>"),di:w("+outcome,snapshot(Xw,a7n?)"),ee:w("+after,before(F,F)"),et:w("+categories,error,message,replaceId(ai<ip>,n?,n?,n?)"),cz:w("FW"),bJ:w("ds<n>"),N:w("n"),e7:w("bq<F>"),W:w("bf<n>"),am:w("k7<G>"),cc:w("Y<n>"),aM:w("ec<d8>"),bG:w("ec<F>"),l:w("v"),gm:w("rf"),ec:w("afg"),q:w("mf"),y:w("R"),gR:w("F"),z:w("@"),S:w("G"),eG:w("d8?"),cJ:w("V?"),gw:w("ai<a9<n,@>>?"),bM:w("ai<@>?"),h:w("a9<n,@>?"),X:w("aF?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b66=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f1=new B.t(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6E=new B.ay(D.f1,1,A.r,-1)
D.b6G=new B.ay(A.ab,2,A.r,-1)
D.b6J=new B.ay(A.aV,2,A.r,-1)
D.b6L=new B.ay(A.cA,0.8,A.r,-1)
D.b7_=new B.ay(A.aQ,2,A.r,-1)
D.b76=new B.ay(A.fe,1.6,A.r,-1)
D.b7W=new B.aY(0,330,0,1/0)
D.b82=new B.aY(0,176,0,1/0)
D.b83=new B.aY(0,1/0,0,260)
D.b8l=new B.aY(90,1/0,0,1/0)
D.bbl=new B.ab(0,A.G,A.dB,A.J,4)
D.d9s=w([D.bbl],x.V)
D.b8z=new B.o(A.c,null,null,null,D.d9s,null,A.a6)
D.d2N=w([D.f1,A.b2],x.O)
D.cd2=new B.a7(A.a5,A.a9,A.x,D.d2N,null,null)
D.b8N=new B.o(null,null,null,null,null,D.cd2,A.a6)
D.b8S=new B.o(A.be,null,null,null,null,null,A.a6)
D.bmL=new B.t(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dqr=w([V.ahK,D.bmL],x.O)
D.cc9=new B.a7(A.aY,A.b3,A.x,D.dqr,null,null)
D.b98=new B.o(null,null,null,A.mJ,null,D.cc9,A.n)
D.bv6=new B.t(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dDk=w([D.bv6,M.akc],x.O)
D.cbj=new B.a7(A.aY,A.b3,A.x,D.dDk,null,null)
D.b9z=new B.o(null,null,null,A.ud,null,D.cbj,A.n)
D.dm_=w([A.aD,A.bE],x.O)
D.cbT=new B.a7(A.a5,A.a9,A.x,D.dm_,null,null)
D.b9F=new B.o(null,null,null,null,null,D.cbT,A.a6)
D.fAt=new B.H(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVh=new B.B("\ud83c\udf89",null,D.fAt,null,null,null,null,null,null,null,null,null)
D.bfs=new B.cj(A.z,null,null,D.fVh,null)
D.bgV=new B.t(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agO=new B.t(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bjV=new B.t(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bjZ=new B.t(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pk=new B.t(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uo=new B.t(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ai9=new B.t(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bml=new B.t(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.Zx=new B.t(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yu=new B.t(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bo6=new B.t(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_0=new B.t(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajN=new B.t(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bsO=new B.t(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bsX=new B.t(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akg=new B.t(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buy=new B.t(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.buF=new B.t(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bvO=new B.t(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_Q=new B.t(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bwY=new B.t(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bxD=new B.t(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a03=new B.t(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.byw=new B.t(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alQ=new B.a5f(2,"active")
D.bCS=new B.bd(42e5)
D.bCV=new B.bd(53e4)
D.bCY=new B.bd(58e4)
D.bD1=new B.bd(82e4)
D.bDO=new B.Q(0,30,0,30)
D.bDW=new B.Q(0,4,0,8)
D.bE_=new B.Q(0,8,12,8)
D.bED=new B.Q(12,0,12,88)
D.bEL=new B.Q(12,11,12,10)
D.bFa=new B.Q(13,10,12,10)
D.bFl=new B.Q(14,10,14,2)
D.bFx=new B.Q(14,14,10,14)
D.bG6=new B.Q(16,12,16,96)
D.bGb=new B.Q(16,14,16,8)
D.bGf=new B.Q(16,16,16,96)
D.bGg=new B.Q(16,18,16,16)
D.bGk=new B.Q(16,4,16,10)
D.bHj=new B.Q(18,6,18,40)
D.bHw=new B.Q(20,10,20,20)
D.bHL=new B.Q(20,18,20,18)
D.bIb=new B.Q(22,22,22,16)
D.bIQ=new B.Q(2,0,2,10)
D.bJA=new B.Q(4,8,12,4)
D.bJO=new B.Q(6,1,6,1)
D.bJQ=new B.Q(6,4,0,0)
D.bJW=new B.Q(6,6,12,4)
D.bKg=new B.Q(8,4,12,8)
D.fYT=new B.B("Activity",null,A.fF,null,null,null,null,null,null,null,null,null)
D.bMi=new B.by(1,A.bd,D.fYT,null)
D.h6z=new B.B("Game Receipts",null,A5.u_,null,null,null,null,null,null,null,null,null)
D.fQ7=new B.B("Your last 59 games \xb7 kept for 7 days",null,O.ach,null,null,null,null,null,null,null,null,null)
D.d_9=w([D.h6z,D.fQ7],x.p)
D.bzD=new B.fp(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.d_9,null)
D.bMl=new B.by(1,A.bd,D.bzD,null)
D.bRf=new B.a_(58607,"MaterialIcons",!1)
D.a38=new B.a_(62178,"MaterialIcons",!1)
D.bS6=new B.a_(62410,"MaterialIcons",!1)
D.bTh=new B.a_(63258,"MaterialIcons",!1)
D.bTm=new B.a_(63304,"MaterialIcons",!1)
D.bTn=new B.a_(63306,"MaterialIcons",!1)
D.bTt=new B.a_(63330,"MaterialIcons",!1)
D.ash=new B.a_(984777,"MaterialIcons",!1)
D.bVZ=new B.ae(A.D7,13,A.ab,null,null,null)
D.bW6=new B.ae(A.js,13,A.qt,null,null,null)
D.asv=new B.ae(A.lU,null,A.c,null,null,null)
D.bXG=new B.ae(A.Dn,34,A.at,null,null,null)
D.bYc=new B.ae(A.Da,19,A.c,null,null,null)
D.bYm=new B.ae(A.aqC,24,A.aQ,null,null,null)
D.bYP=new B.ae(A.D3,28,A.bp,null,null,null)
D.bZk=new B.ae(A.arV,42,A.c,null,null,null)
D.bZu=new B.ae(A.a46,30,A.c,null,null,null)
D.c_a=new B.ae(A.fO,null,A.c,null,null,null)
D.c_w=new B.ae(A.js,16,A.c,null,null,null)
D.c0c=new B.ae(A.tn,13,A.c,null,null,null)
D.c0l=new B.ae(A.lU,18,A.c,null,null,null)
D.c0U=new B.ae(A.wR,null,A.dP,null,null,null)
D.c1A=new B.ae(A.nO,28,A.c,null,null,null)
D.c1Q=new B.ae(A.oO,22,null,null,null,null)
D.c2e=new B.ae(A.tj,null,null,null,null,null)
D.c2q=new B.ae(A.he,28,A.c,null,null,null)
D.c2t=new B.ae(A.cB,null,A.aR,null,null,null)
D.c2D=new B.ae(A.a2P,14,A.c,null,null,null)
D.c3e=new B.ae(A.HU,36,A.aN,null,null,null)
D.c3l=new B.ae(A.oK,16,A.c,null,null,null)
D.bnd=new B.t(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c4a=new B.ae(A.e9,9,D.bnd,null,null,null)
D.bUm=new B.a_(983146,"MaterialIcons",!1)
D.c4s=new B.ae(D.bUm,null,A.aQ,null,null,null)
D.c51=new B.ae(A.uW,28,D.f1,null,null,null)
D.c56=new B.ae(A.te,null,A.fe,null,null,null)
D.c5b=new B.ae(A.hB,20,D.f1,null,null,null)
D.bUJ=new B.a_(983377,"MaterialIcons",!1)
D.c5l=new B.ae(D.bUJ,64,A.c,null,null,null)
D.c5S=new B.ae(A.h3,24,A.c,null,null,null)
D.c6O=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6Z=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7d=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7e=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkO=new B.t(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bov=new B.t(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bo7=new B.t(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dqM=w([D.bkO,D.bov,D.bo7],x.O)
D.c93=new B.a7(A.ay,A.aC,A.x,D.dqM,null,null)
D.dws=w([A.bi,A.b2],x.O)
D.c9p=new B.a7(A.ay,A.aC,A.x,D.dws,null,null)
D.bmD=new B.t(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.btC=new B.t(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.da3=w([D.bmD,D.btC],x.O)
D.c9x=new B.a7(A.ay,A.aC,A.x,D.da3,null,null)
D.dss=w([A.bs,A.a_,A.ec],x.O)
D.c9D=new B.a7(A.ay,A.aC,A.x,D.dss,null,null)
D.c9G=new B.a7(A.a5,A.a9,A.x,F.azQ,null,null)
D.d9i=w([A.fe,A.cj],x.O)
D.aui=new B.a7(A.a5,A.a9,A.x,D.d9i,null,null)
D.d9K=w([A.fe,A.bE],x.O)
D.auj=new B.a7(A.a5,A.a9,A.x,D.d9K,null,null)
D.aE0=w([D.pk,A.aF,A.c3],x.O)
D.ca_=new B.a7(A.ay,A.aC,A.x,D.aE0,null,null)
D.bqs=new B.t(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d74=w([D.bqs,E.ah4,A.a_],x.O)
D.ca4=new B.a7(A.ay,A.aC,A.x,D.d74,null,null)
D.b43=new B.d7(-0.8,-1)
D.b45=new B.d7(1.2,1)
D.d6a=w([A.c,A.eO,A.h9,A.c,A.ft,A.aH,A.ok],x.O)
D.drN=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.ca6=new B.a7(D.b43,D.b45,A.x,D.d6a,D.drN,null)
D.bts=new B.t(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqJ=new B.t(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dqL=w([D.bts,D.bqJ],x.O)
D.cay=new B.a7(A.a5,A.a9,A.x,D.dqL,null,null)
D.caE=new B.a7(A.ay,A.aC,A.x,A.SE,null,null)
D.dkU=w([E.a_U,A.yw],x.O)
D.caG=new B.a7(A.a5,A.a9,A.x,D.dkU,null,null)
D.dps=w([A.hk,A.fX],x.O)
D.aup=new B.a7(A.a5,A.a9,A.x,D.dps,null,null)
D.dvY=w([A.be,A.bQ],x.O)
D.auq=new B.a7(A.a5,A.a9,A.x,D.dvY,null,null)
D.cRk=w([A.dh,A.fB],x.O)
D.cbl=new B.a7(A.ay,A.aC,A.x,D.cRk,null,null)
D.d55=w([A.c,A.ba],x.O)
D.cbv=new B.a7(A.a5,A.a9,A.x,D.d55,null,null)
D.aje=new B.t(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjF=new B.t(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dhk=w([D.aje,A.jI,A.rE,A.aF,D.bjF],x.O)
D.ce7=w([0,0.28,0.55,0.82,1],x.n)
D.cbx=new B.a7(A.ay,A.aC,A.x,D.dhk,D.ce7,null)
D.cbE=new B.a7(A.a5,A.a9,A.x,A.Tk,null,null)
D.cbF=new B.a7(A.a5,A.a9,A.x,F.aCm,null,null)
D.cbK=new B.a7(A.a5,A.a9,A.x,D.aE0,null,null)
D.dbi=w([A.bE,A.fe],x.O)
D.cbZ=new B.a7(A.a5,A.a9,A.x,D.dbi,null,null)
D.dAs=w([A.aD,A.bE,A.ba],x.O)
D.cc0=new B.a7(A.a5,A.a9,A.x,D.dAs,null,null)
D.dl4=w([A.at,A.bL,A.fL],x.O)
D.cc4=new B.a7(A.a5,A.a9,A.x,D.dl4,null,null)
D.dAb=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.an],x.O)
D.dfn=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cc8=new B.a7(A.ay,A.aC,A.x,D.dAb,D.dfn,null)
D.cci=new B.a7(A.ay,A.aC,A.x,A.a5z,null,null)
D.dlI=w([D.Zx,A.e3],x.O)
D.ccr=new B.a7(A.a5,A.a9,A.x,D.dlI,null,null)
D.du0=w([D.akg,D.ai9,A.a_],x.O)
D.ccB=new B.a7(A.ay,A.aC,A.x,D.du0,null,null)
D.bwj=new B.t(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d5G=w([A.ff,A.hk,D.bwj],x.O)
D.cd4=new B.a7(A.ay,A.aC,A.x,D.d5G,null,null)
D.dbS=w([D.pk,A.aF],x.O)
D.cd6=new B.a7(A.ay,A.aC,A.x,D.dbS,null,null)
D.cdx=w([G.Dr,A.nO,A.js,A.hC,A.jN,A.l2,A.kf,A.qW,A.nN,A.eY,A.lr,A.zy,A.HT],x.A)
D.ch2=w([10,50,100,200],x.t)
D.cqQ=w([1,3,5,7],x.t)
D.cvP=w([25,50,100,250],x.t)
D.bUg=new B.a_(983104,"MaterialIcons",!1)
D.cEx=w([A.nO,A.mo,A.oO,A.lS,A.ho,A.v5,D.bUg,A.a40],x.A)
D.cJY=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cWn=w([0,0.22,0.5,0.78,1],x.n)
D.d_j=w([8,13,19],x.n)
D.a5T=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fXS=new B.B("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eEe=new B.jz("questions",!0,48,null,D.fXS,null,x.d)
D.fNd=new B.B("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eEl=new B.jz("edit",!0,48,null,D.fNd,null,x.d)
D.h55=new B.B("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eEd=new B.jz("delete",!0,48,null,D.h55,null,x.d)
D.d5a=w([D.eEe,D.eEl,D.eEd],B.at("O<pK<n>>"))
D.d9X=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.dad=w([A.bU,A.fn],x.O)
D.a91=new C.m3("text","",null,null)
D.dbu=w([D.a91],x.a)
D.dd_=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eZs=new B.afD(A.kD,"Home")
D.eQ0=new B.afD(A.pC,"Growth")
D.eUP=new B.afD(A.js,"Wallet")
D.dfE=w([D.eZs,D.eQ0,D.eUP],B.at("O<+icon,label(a_,n)>"))
D.dg5=w([4,0,2,6,8,1,3,5,7],x.t)
D.dgd=w([A.c,A.ci,A.cA],x.O)
D.e1v=new C.t1("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e1y=new C.t1("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e1w=new C.t1("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e1q=new C.t1("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e1r=new C.t1("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e1z=new C.t1("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6r=w([D.e1v,D.e1y,D.e1w,D.e1q,D.e1r,D.e1z],x.F)
D.a6w=w([A.aA,A.bi,A.d9,A.at],x.O)
D.bns=new B.t(1,1,0.8980392156862745,0.4,A.q)
D.dlP=w([A.Z2,D.bns,A.rE,A.iy,A.jI],x.O)
D.a6D=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SO=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cEM=w([3,4,5],x.t)
D.cRX=w([6,7,8],x.t)
D.cdE=w([0,3,6],x.t)
D.cqV=w([1,4,7],x.t)
D.cyk=w([2,5,8],x.t)
D.cdJ=w([0,4,8],x.t)
D.cyh=w([2,4,6],x.t)
D.doq=w([Y.auQ,D.cEM,D.cRX,D.cdE,D.cqV,D.cyk,D.cdJ,D.cyh],x.B)
D.aMk=new C.JJ(0,"abab")
D.e1o=new C.JJ(1,"aaaBbb")
D.aMl=new C.JJ(2,"aabb")
D.dpx=w([D.aMk,D.e1o,D.aMl],B.at("O<JJ>"))
D.dpP=w([],x.a)
D.aDe=w([],x.v)
D.dtT=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.T7=w([1,2,3,-1,-2],x.t)
D.dD5=w([A.j7,A.aD],x.O)
D.hDa=new C.rf("dice","Dice Roll","Roll for cash & prizes!",A.nL,D.dD5)
D.hD7=new C.rf("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v2,A.aBR)
D.dwS=w([A.dn,A.bp],x.O)
D.hD5=new C.rf("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3N,D.dwS)
D.dCv=w([A.dN,A.ns],x.O)
D.hDb=new C.rf("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a40,D.dCv)
D.cqA=w([A.jG,A.rR],x.O)
D.hD8=new C.rf("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A_.PS,D.cqA)
D.dtS=w([M.lJ,D.a_0],x.O)
D.hD6=new C.rf("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.HX,D.dtS)
D.hD9=new C.rf("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,Aq.nR)
D.dvX=w([D.hDa,D.hD7,D.hD5,D.hDb,D.hD8,D.hD6,D.hD9],B.at("O<rf>"))
D.dxu=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsx=new B.t(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bso=new B.t(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.al6=new B.t(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dyk=w([D.bsx,D.bso,D.al6],x.O)
D.bv0=new B.t(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dym=w([A.ah3,D.bv0,D.al6],x.O)
D.dz1=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEo=w([D.pk,A.c,D.f1,A.c4,A.b_,A.aF],x.O)
D.e1t=new C.t1("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e1s=new C.t1("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e1p=new C.t1("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e1x=new C.t1("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e1A=new C.t1("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e1u=new C.t1("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7n=w([D.e1t,D.e1s,D.e1p,D.e1x,D.e1A,D.e1u],x.F)
D.dCK=w([A.cj,A.rR],x.O)
D.eqD={checkers_deluxe:0,tic_tac_go:1}
D.aKe=new B.bs(D.eqD,["Checkers Deluxe","Tic Tac Go"],B.at("bs<n,n>"))
D.epG={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKp=new B.bs(D.epG,[1,2,3,4,5,6,7],B.at("bs<n,G>"))
D.dV6=new C.a82(null)
D.dYB=new C.m3("signature","NGMY Support Team",null,null)
D.dYC=new C.m3("divider","",null,null)
D.U6=new C.WS(!1,!1,!1,!1)
D.U8=new C.OQ(!1,!1,!1,!1)
D.dZK=new C.OQ(!0,!0,!1,!1)
D.Ep=new C.asX(0,"swahili")
D.aMj=new C.asX(1,"english")
D.Eq=new C.asX(2,"mix")
D.dnO=w([A.iL,A.ia,A.d6],x.O)
D.bT1=new B.a_(63118,"MaterialIcons",!1)
D.e2B=new C.pD(D.dnO,A.fZ,A.at,"BACKGAMMON","\ud83c\udfb2",D.bT1)
D.bV6=new B.a_(983637,"MaterialIcons",!1)
D.e2C=new C.pD(An.aEE,A.bi,A.er,"EURO WHEEL","\ud83c\udfa1",D.bV6)
D.dxP=w([A.a_,A.aL,A.by],x.O)
D.e2D=new C.pD(D.dxP,A.aS,A.an,"ROYALE","\u265f\ufe0f",A_.PS)
D.d9n=w([A.dh,A.bp,A.dX],x.O)
D.e2E=new C.pD(D.d9n,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a4f)
D.ds6=w([A.dA,A.fB,A.rR],x.O)
D.e2F=new C.pD(D.ds6,A.wl,A.cj,"PUNTO BANCO","\ud83d\udc8e",A.mo)
D.cRm=w([A.oj,A.iw,A.ma],x.O)
D.e2G=new C.pD(D.cRm,A.jE,A.ky,"DOMINOES","\ud83c\udc53",A.arW)
D.dyz=w([A.yE,A.ut,A.hJ],x.O)
D.e2H=new C.pD(D.dyz,A.Cl,A.hv,"WAR","\u2694\ufe0f",A7.a3s)
D.e2I=new C.pD(A.aEx,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nL)
D.dbj=w([A.kw,A.aD,A.dN],x.O)
D.e2J=new C.pD(D.dbj,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nL)
D.dr4=w([A.jX,A.lF,A.bE],x.O)
D.e2K=new C.pD(D.dr4,A.qh,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zr)
D.d2L=w([A.ia,A.e3,A.at],x.O)
D.bSs=new B.a_(62865,"MaterialIcons",!1)
D.e2L=new C.pD(D.d2L,A.uy,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSs)
D.e2M=new C.pD(A.a7k,A.bm,A.bi,"HOLD'EM","\u2660\ufe0f",A.js)
D.dz0=w([A.ff,A.fX,A.b2],x.O)
D.bRB=new B.a_(61234,"MaterialIcons",!1)
D.e2N=new C.pD(D.dz0,A.mb,A.aV,"CRAPS","\ud83c\udfb2",D.bRB)
D.d8A=w([A.fn,A.jl,A.bU],x.O)
D.e2O=new C.pD(D.d8A,A.bL,A.ba,"PLINKO","\ud83d\udc8e",Ar.Q0)
D.bUR=new B.a_(983492,"MaterialIcons",!1)
D.e2P=new C.pD(A.a7k,A.ew,A.bi,"SNOOKER","\ud83c\udfb1",D.bUR)
D.dwl=w([A.ff,A.fX,A.aV],x.O)
D.e2Q=new C.pD(D.dwl,A.uu,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hB)
D.dwK=w([A.ec,A.ep,A.bi],x.O)
D.bTs=new B.a_(63324,"MaterialIcons",!1)
D.e2R=new C.pD(D.dwK,A.wo,A.be,"KLONDIKE","\ud83c\udccf",D.bTs)
D.doz=w([A.bA,A.bs,A.a_],x.O)
D.e2S=new C.pD(D.doz,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A3.Ib)
D.r3=new C.Fu(0,"continueGame")
D.r4=new C.Fu(1,"youWin")
D.JD=new C.Fu(2,"youLose")
D.Uh=new C.Fu(3,"draw")
D.aMy=new C.Xw(0,"found")
D.elF=new C.Xw(1,"foundLive")
D.a9i=new C.Xw(2,"notFound")
D.aMz=new C.Xw(3,"wrongAccount")
D.eu1=new B.r(4,12)
D.exA=new B.D(A.yX,A.uh,null)
D.bJe=new B.Q(4,0,0,3)
D.fxB=new B.H(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9G=new B.B("NGMY Helper",null,D.fxB,null,null,null,null,null,null,null,null,null)
D.exR=new B.D(D.bJe,D.h9G,null)
D.bTl=new B.a_(63284,"MaterialIcons",!1)
D.bYC=new B.ae(D.bTl,18,A.pn,null,null,null)
D.fCx=new B.H(!0,A.pn,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRk=new B.B("Continue",null,D.fCx,null,null,null,null,null,null,null,null,null)
D.dql=w([D.bYC,A.bn,D.fRk],x.p)
D.fgW=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dql,null)
D.exV=new B.D(A.hP,D.fgW,null)
D.eya=new B.D(A.bS,A.uh,null)
D.bs6=new B.t(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dmv=w([A.hk,A.fX,A.cW,D.bs6],x.O)
D.ccb=new B.a7(A.ay,A.aC,A.x,D.dmv,A.DO,null)
D.b9I=new B.o(null,null,null,null,null,D.ccb,A.n)
D.bAT=new B.bN(D.b9I,A.bk,null,null)
D.eEI=new B.cK(0,0,0,0,null,null,D.bAT,null)
D.c_s=new B.ae(A.wQ,11,A.c,null,null,null)
D.eEM=new B.cK(10,12,null,null,null,null,D.c_s,null)
D.cWd=w([A.hK,A.ec,A.ll],x.O)
D.eFn=new B.bT(A.Bt,1.1,A.x,null,0,D.cWd,null,null)
D.btQ=new B.t(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bmX=new B.t(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bp8=new B.t(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.djU=w([D.btQ,D.bmX,D.bp8],x.O)
D.eFv=new B.bT(A.aeB,1.05,A.x,null,0,D.djU,null,null)
D.eFT=new B.bT(A.z,0.5,A.x,null,0,Aj.a67,null,null)
D.feP=new B.a4(-18,0,18,1)
D.ffn=new B.a4(-3,-5,3,5)
D.bZ3=new B.ae(A.ea,16,D.f1,null,null,null)
D.aYc=new B.H(!0,D.f1,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7c=new B.B("Screenshot added \xb7 tap to change",null,D.aYc,null,null,null,null,null,null,null,null,null)
D.d6d=w([D.bZ3,A.bn,D.h7c],x.p)
D.fgi=new B.c8(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.d6d,null)
D.c2a=new B.ae(A.oJ,15,D.f1,null,null,null)
D.h5_=new B.B("Refresh",null,D.aYc,null,null,null,null,null,null,null,null,null)
D.d8L=w([D.c2a,A.df,D.h5_],x.p)
D.fgk=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d8L,null)
D.eq_={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fiy=new B.db(D.eq_,3,x.M)
D.epO={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fiK=new B.db(D.epO,36,x.M)
D.epR={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fiY=new B.db(D.epR,6,x.M)
D.ero={memory:0,typing:1,scramble:2,pattern:3}
D.nc=new B.db(D.ero,4,x.M)
D.flC=new B.av(276,276)
D.fmk=new B.a5(13,null,null,null)
D.bg9=new B.fi(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fmw=new B.a5(26,26,D.bg9,null)
D.fnr=new B.hM(8,0,0,1,null)
D.h8o=new B.B("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new B.b0(D.h8o,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMf=new B.B("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new B.b0(D.fMf,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNp=new B.B("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fqC=new B.b0(D.fNp,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5a=new B.B("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new B.b0(D.h5a,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bsZ=new B.t(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fBq=new B.H(!0,D.bsZ,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fus=new B.et("$",null,null,A.cN,null,null,null,null,null,null,D.fBq)
D.fuI=new B.H(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new B.H(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv6=new B.H(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvy=new B.H(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new B.H(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw2=new B.H(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw4=new B.H(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new B.H(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new B.H(!0,D.f1,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxs=new B.H(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyj=new B.H(!0,E.Ce,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWU=new B.H(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzU=new B.H(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAf=new B.H(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fAz=new B.H(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new B.H(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBX=new B.H(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC7=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fCF=new B.H(!0,A.jd,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bld=new B.t(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fCX=new B.H(!0,D.bld,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new B.H(!0,A.aA,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fER=new B.H(!0,D.aje,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXC=new B.H(!0,E.Ce,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFb=new B.H(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new B.H(!0,A.by,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFv=new B.H(!0,E.Ce,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xH=new B.H(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqc=new B.t(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fFK=new B.H(!0,D.bqc,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new B.H(!0,A.TL,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new B.H(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new B.H(!0,A.iz,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new B.H(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXY=new B.H(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI8=new B.H(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIc=new B.H(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.H(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new B.H(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJS=new B.H(!0,A.be,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKm=new B.H(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKq=new B.H(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLq=new B.B("Value per pair",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fLs=new B.B("Restore now",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fM0=new B.B("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXm=new B.H(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMb=new B.B("AVAILABLE PLANS",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.fMd=new B.B("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fMO=new B.B("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fy8=new B.H(!0,A.by,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNw=new B.B("PLAN VALUE",null,D.fy8,null,null,null,null,null,null,null,null,null)
D.fNz=new B.B("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new B.B("Deposit",null,A.Wv,null,null,null,null,null,null,null,null,null)
D.fIu=new B.H(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP_=new B.B("JACKPOT SLOTS",null,D.fIu,null,null,null,null,null,null,null,null,null)
D.fPi=new B.B("Restore",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fye=new B.H(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new B.B("YOUR NUMBER",null,D.fye,null,null,null,null,null,null,null,null,null)
D.fPD=new B.B("SPIN REELS",null,F.acb,null,null,null,null,null,null,null,null,null)
D.fQ6=new B.B("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fQE=new B.B("Perfect Score Profit",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fRi=new B.B("Join room",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fTu=new B.B("Add payment screenshot",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fTK=new B.B("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.H(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUb=new B.B("INVITE A PLAYER",null,D.fHH,null,null,null,null,null,null,null,null,null)
D.fGK=new B.H(!0,A.Z2,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUG=new B.B("NGMY GOLD LEADER",null,D.fGK,null,null,null,null,null,null,null,null,null)
D.fVc=new B.B("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fVC=new B.B("Invest & Play",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.aXh=new B.H(!0,D.yu,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW3=new B.B("VALID THRU",null,D.aXh,null,null,null,null,null,null,null,null,null)
D.aY_=new B.H(!0,A.aE,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWb=new B.B("DEALER",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.fWi=new B.B("CARDHOLDER",null,D.aXh,null,null,null,null,null,null,null,null,null)
D.fGb=new B.H(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX1=new B.B("NGMY PLATINUM",null,D.fGb,null,null,null,null,null,null,null,null,null)
D.fJH=new B.H(!0,A.qt,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new B.B("EARNED SO FAR",null,D.fJH,null,null,null,null,null,null,null,null,null)
D.fYm=new B.B("VS",null,A.acc,null,null,null,null,null,null,null,null,null)
D.fYN=new B.B("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fZ9=new B.B("One day left",null,A.ac2,null,A.K,null,null,null,null,null,null,null)
D.fZv=new B.B("Keep typing \u2014 mistakes are counted in your payout",null,A.F4,null,null,null,null,null,null,null,null,null)
D.fZw=new B.B("Multiplayer invite",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fZI=new B.B("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.H(!0,A.TL,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZO=new B.B("\ud83d\udcb0 Partial Payout System",null,D.fwB,null,null,null,null,null,null,null,null,null)
D.fZZ=new B.B("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.fvu=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_f=new B.B("Investment Required",null,D.fvu,null,A.K,null,null,null,null,null,null,null)
D.h0M=new B.B("Network Status",null,A.aWx,null,null,null,null,null,null,null,null,null)
D.aWE=new B.H(!0,A.ab,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1p=new B.B("Their account email",null,D.aWE,null,null,null,null,null,null,null,null,null)
D.h1J=new B.B("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h1K=new B.B("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h2_=new B.B("ACTIVE ASSET",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.h2p=new B.B("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h2u=new B.B("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h2V=new B.B("YOUR HAND",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.h3v=new B.B("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h3y=new B.B("I sent it \u2014 submit deposit",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.h4n=new B.B("Back",null,A.B1,null,null,null,null,null,null,null,null,null)
D.fKC=new B.H(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4v=new B.B("DEAL / PLAY ROUND",null,D.fKC,null,null,null,null,null,null,null,null,null)
D.h4I=new B.B("Got it \u2014 keep chatting",null,A.ce,null,null,null,null,null,null,null,null,null)
D.h4S=new B.B("3 Messages Left",null,A.aXP,null,null,null,null,null,null,null,null,null)
D.h5p=new B.B("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h5y=new B.B("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5V=new B.B("How many games?",null,D.aWE,null,null,null,null,null,null,null,null,null)
D.fFD=new B.H(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h66=new B.B("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fFD,null,A.K,null,null,null,null,null,null,null)
D.h7F=new B.B("Question",null,null,null,null,null,null,null,null,null,null,null)
D.h7U=new B.B("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fL3=new B.H(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9y=new B.B("NGMY  WALLET",null,D.fL3,null,null,null,null,null,null,null,null,null)
D.h9z=new B.B("Select Your Bet",null,A.h6,null,null,null,null,null,null,null,null,null)
D.hyW=new B.bf("history",x.W)
D.hzi=new B.bf("ngmy_local_home",x.W)
D.hzj=new B.bf("ngmy_local_invest",x.W)
D.hzk=new B.bf("ngmy_local_wallet",x.W)
D.hCR=new C.a_K(null)
D.b22=new C.aDG(0,"grid")
D.b23=new C.aDG(1,"questions")
D.hDR=new C.aDG(2,"answer")
D.hGn=new C.a0D(null)})();(function staticFields(){$.hbl=B.aR(x.N)
$.hCI=B.T(x.N,x.k)
$.hhg=null
$.hh3=B.T(x.N,B.at("Gk"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iCj","bHC",()=>C.ijQ())
w($,"iC5","hLK",()=>{var v=null,u=B.fE(v,A.cx,v,v,v,D.fus,A.a7,A.c1,v,A.dJ,A.c2)
u.ep()
return u})})()};
(a=>{a["ZEl+wZYz55E1reeA7gcT0bpKxEc="]=a.current})($__dart_deferred_initializers__);