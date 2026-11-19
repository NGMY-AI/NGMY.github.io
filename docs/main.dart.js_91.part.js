((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Q,I,R,S,K,L,T,U,M,V,W,F,N,X,C={
hx_(d,e,f){var w=null,v=f.k("GX<0>"),u=new B.GX(w,w,w,w,v)
$.vY()
u.d=new C.cC8(new B.vu(),e,u,f,d)
return new B.i8(u,v.k("i8<1>"))},
cC8:function cC8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cC9:function cC9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cC5:function cC5(d){this.a=d},
cC6:function cC6(d,e){this.a=d
this.b=e},
cC7:function cC7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cC4:function cC4(d,e,f){this.a=d
this.b=e
this.c=f},
buU:function buU(d){this.a=d},
hwZ(d,e,f,g){return new C.axX(d,e,f,null,g.k("axX<0>"))},
G9:function G9(){},
aKD:function aKD(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
feS:function feS(d){this.a=d},
feR:function feR(d,e){this.a=d
this.b=e},
feU:function feU(d){this.a=d},
feP:function feP(d,e,f){this.a=d
this.b=e
this.c=f},
feT:function feT(d){this.a=d},
feQ:function feQ(d){this.a=d},
axX:function axX(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
ioL(d){var w=A.a.i(d)
while(A.a.Y(w,"$"))w=A.a.i(A.a.b_(w,1))
return w},
hHY(d){var w=C.ioL(d)
if(w.length===0)return""
return"$"+w},
fOA(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fOA=B.e(function(f,g){if(f===1)return B.f(g,v)
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
break}if(q.d!==A.h8){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cS(m,"game payout:",0))if(!B.cS(m,"game partial:",0)){if(!B.cS(m,"multiplayer payout:",0))o=B.cS(m,"dice",0)&&q.e===A.fx
else o=l
l=o}if(!l){w=4
break}if(B.cS(m,"game payout:",0))k=A.a.i(A.a.b_(n,A.a.cm(m,"game payout:")+12))
else if(B.cS(m,"game partial:",0)){k=A.a.i(A.a.b_(n,A.a.cm(m,"game partial:")+13))
j=A.a.cm(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else if(B.cS(m,"multiplayer payout:",0)){k=A.a.i(A.a.b_(n,A.a.cm(m,"multiplayer payout:")+19))
j=A.a.cm(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else k=B.cS(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vd(q.c,p,n,d,o,null,q.a,!0),$async$fOA)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fOA,v)},
itG(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ipN(d,e,f){return A.d.aU(e,new C.fSj(f,A.a.i(d.toLowerCase())))},
fSa(d){var w
C.ht6(d)
w=d.c7
return B.bs(new B.N(w,new C.fSb(),B.T(w).k("N<1,@>")),!0,x.N)},
ifn(d,e,f){var w,v,u,t,s,r,q=null,p=A.bY,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eh().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a3(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.ghn():s}w=A.h.cC(f*t)
v=new C.fyt(f)
if(J.d2(n,"data:image"))try{u=B.fY(A.cH.aL(A.d.gal(J.lI(n,","))),A.z,w,new C.fyq(v),A.h2,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d2(n,"supabase://"))return new B.lb(B.a37(n),new C.fyr(f,e,p,w,v),q,q,x.gh)
return B.kE(n,A.z,w,new C.fys(v),A.h2,p,!0,e,q,q,f)},
hgZ(d,e){return new B.a5(e,e,B.i4(C.ifn(d,e,e),A.aq),null)},
i7r(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dwl,x.gm)
for(w=0;w<36;++w){v=A.DY[w]
s.push(new C.rc(v.a,v.b,v.c,v.e,v.f))}return new C.aCK(u,B.S(t,t),s)},
fSj:function fSj(d,e){this.a=d
this.b=e},
fSb:function fSb(){},
fyt:function fyt(d){this.a=d},
fyq:function fyq(d){this.a=d},
fyr:function fyr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyp:function fyp(d){this.a=d},
fys:function fys(d){this.a=d},
an4:function an4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
rc:function rc(d,e,f,g,h){var _=this
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
dm6:function dm6(d,e){this.a=d
this.b=e},
dmh:function dmh(d,e){this.a=d
this.b=e},
dmz:function dmz(){},
dmA:function dmA(d){this.a=d},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmo:function dmo(){},
dmq:function dmq(d){this.a=d},
dmn:function dmn(){},
dms:function dms(d){this.a=d},
dmr:function dmr(){},
dmk:function dmk(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d){this.a=d},
dml:function dml(d){this.a=d},
dmm:function dmm(d){this.a=d},
dmc:function dmc(d,e){this.a=d
this.b=e},
dmd:function dmd(d,e){this.a=d
this.b=e},
dma:function dma(d){this.a=d},
dmb:function dmb(d){this.a=d},
dme:function dme(d){this.a=d},
dmf:function dmf(d){this.a=d},
dmg:function dmg(d,e,f){this.a=d
this.b=e
this.c=f},
dm9:function dm9(d,e){this.a=d
this.b=e},
dm8:function dm8(d,e){this.a=d
this.b=e},
dm7:function dm7(d,e){this.a=d
this.b=e},
dmy:function dmy(d){this.a=d},
dmw:function dmw(d,e,f){this.a=d
this.b=e
this.c=f},
dmv:function dmv(d,e,f){this.a=d
this.b=e
this.c=f},
dmu:function dmu(d,e){this.a=d
this.b=e},
dmt:function dmt(){},
dmx:function dmx(d){this.a=d},
aFB:function aFB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmG:function bmG(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e_H:function e_H(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_I:function e_I(d){this.a=d},
e_F:function e_F(){},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_E:function e_E(d){this.a=d},
e_K:function e_K(d){this.a=d},
an3:function an3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dm0:function dm0(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm4:function dm4(d){this.a=d},
dm5:function dm5(d){this.a=d},
dm2:function dm2(d,e){this.a=d
this.b=e},
dm1:function dm1(d,e){this.a=d
this.b=e},
an5:function an5(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.a0=_.bd=_.bg=_.y2=_.y1=0
_.aO=_.aR=_.aK=_.aH=$
_.bH=_.bi=_.aZ=_.b2=null
_.aY=!1
_.bx=_.bn=null
_.c7=!1
_.bT=_.cT=""
_.c=_.a=_.bI=null},
dnT:function dnT(d,e){this.a=d
this.b=e},
dnW:function dnW(d){this.a=d},
dnX:function dnX(d){this.a=d},
dnY:function dnY(d){this.a=d},
dnZ:function dnZ(d){this.a=d},
do_:function do_(d){this.a=d},
dnU:function dnU(d){this.a=d},
dnV:function dnV(d){this.a=d},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn9:function dn9(d,e){this.a=d
this.b=e},
dnC:function dnC(d){this.a=d},
dnD:function dnD(){},
dno:function dno(d,e,f){this.a=d
this.b=e
this.c=f},
dnp:function dnp(d){this.a=d},
dnq:function dnq(d,e,f){this.a=d
this.b=e
this.c=f},
dnr:function dnr(d,e){this.a=d
this.b=e},
dns:function dns(){},
dmB:function dmB(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dnE:function dnE(){},
dnN:function dnN(){},
dnB:function dnB(d){this.a=d},
dnA:function dnA(d){this.a=d},
dn5:function dn5(d){this.a=d},
dn6:function dn6(){},
dnI:function dnI(){},
dnJ:function dnJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnK:function dnK(d,e,f){this.a=d
this.b=e
this.c=f},
dmC:function dmC(){},
dmD:function dmD(d){this.a=d},
dmE:function dmE(){},
dnh:function dnh(d,e){this.a=d
this.b=e},
dni:function dni(d,e,f){this.a=d
this.b=e
this.c=f},
dnj:function dnj(d){this.a=d},
dng:function dng(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnu:function dnu(){},
dnv:function dnv(d){this.a=d},
dnw:function dnw(){},
dnx:function dnx(d){this.a=d},
dny:function dny(){},
dnH:function dnH(d,e,f){this.a=d
this.b=e
this.c=f},
dnk:function dnk(d){this.a=d},
dnl:function dnl(d,e){this.a=d
this.b=e},
dnm:function dnm(d){this.a=d},
dnn:function dnn(d){this.a=d},
dnL:function dnL(d){this.a=d},
dnM:function dnM(d){this.a=d},
dmF:function dmF(d){this.a=d},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmH:function dmH(d){this.a=d},
dmI:function dmI(d){this.a=d},
dnF:function dnF(d,e){this.a=d
this.b=e},
dnG:function dnG(d){this.a=d},
dnf:function dnf(d,e){this.a=d
this.b=e},
dnz:function dnz(d,e,f){this.a=d
this.b=e
this.c=f},
dnd:function dnd(d,e,f){this.a=d
this.b=e
this.c=f},
dne:function dne(){},
dnO:function dnO(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnQ:function dnQ(d){this.a=d},
dnS:function dnS(d){this.a=d},
dnR:function dnR(){},
dnc:function dnc(d,e,f){this.a=d
this.b=e
this.c=f},
dnb:function dnb(d,e){this.a=d
this.b=e},
dna:function dna(d,e){this.a=d
this.b=e},
dmV:function dmV(d){this.a=d},
dmU:function dmU(d,e){this.a=d
this.b=e},
dmW:function dmW(d){this.a=d},
dmT:function dmT(d,e){this.a=d
this.b=e},
dmX:function dmX(d){this.a=d},
dmS:function dmS(){},
dmY:function dmY(d){this.a=d},
dmQ:function dmQ(){},
dmR:function dmR(d){this.a=d},
dmZ:function dmZ(d){this.a=d},
dmP:function dmP(d,e){this.a=d
this.b=e},
dn_:function dn_(d){this.a=d},
dmO:function dmO(d,e){this.a=d
this.b=e},
dmK:function dmK(d,e){this.a=d
this.b=e},
dn0:function dn0(d){this.a=d},
dmN:function dmN(d,e){this.a=d
this.b=e},
dn1:function dn1(d){this.a=d},
dmM:function dmM(d){this.a=d},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
dn2:function dn2(d,e,f){this.a=d
this.b=e
this.c=f},
dn3:function dn3(d){this.a=d},
dmL:function dmL(){},
dn4:function dn4(d){this.a=d},
anS:function anS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjK:function bjK(){this.c=this.a=null},
drs:function drs(d,e){this.a=d
this.b=e},
drr:function drr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajV:function ajV(d,e,f,g,h,i,j){var _=this
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
cOa:function cOa(d){this.a=d},
cNv:function cNv(d,e){this.a=d
this.b=e},
cNl:function cNl(d){this.a=d},
cNm:function cNm(d){this.a=d},
cNF:function cNF(d){this.a=d},
cNC:function cNC(d){this.a=d},
cND:function cND(d){this.a=d},
cNE:function cNE(d,e,f){this.a=d
this.b=e
this.c=f},
cNx:function cNx(d){this.a=d},
cNw:function cNw(d){this.a=d},
cNn:function cNn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNA:function cNA(d){this.a=d},
cNz:function cNz(d){this.a=d},
cNy:function cNy(d,e){this.a=d
this.b=e},
cNY:function cNY(d){this.a=d},
cNS:function cNS(d){this.a=d},
cNV:function cNV(d){this.a=d},
cNU:function cNU(){},
cNR:function cNR(d){this.a=d},
cNT:function cNT(d,e){this.a=d
this.b=e},
cNQ:function cNQ(){},
cNs:function cNs(){},
cNt:function cNt(d,e){this.a=d
this.b=e},
cNu:function cNu(d){this.a=d},
cNq:function cNq(d,e){this.a=d
this.b=e},
cNr:function cNr(d,e){this.a=d
this.b=e},
cNI:function cNI(d,e){this.a=d
this.b=e},
cNB:function cNB(d){this.a=d},
cNJ:function cNJ(d){this.a=d},
cNK:function cNK(d,e){this.a=d
this.b=e},
cNL:function cNL(d,e){this.a=d
this.b=e},
cNM:function cNM(d,e){this.a=d
this.b=e},
cNN:function cNN(d,e,f){this.a=d
this.b=e
this.c=f},
cNO:function cNO(d){this.a=d},
cNP:function cNP(d){this.a=d},
cNG:function cNG(d,e){this.a=d
this.b=e},
cNX:function cNX(d){this.a=d},
cNH:function cNH(d,e){this.a=d
this.b=e},
cO9:function cO9(d){this.a=d},
cO2:function cO2(d){this.a=d},
cO5:function cO5(d){this.a=d},
cO_:function cO_(d,e){this.a=d
this.b=e},
cO3:function cO3(){},
cO4:function cO4(d,e){this.a=d
this.b=e},
cO0:function cO0(d){this.a=d},
cO1:function cO1(d){this.a=d},
cO7:function cO7(){},
cO6:function cO6(d){this.a=d},
cNZ:function cNZ(d,e){this.a=d
this.b=e},
cO8:function cO8(d){this.a=d},
cNo:function cNo(d){this.a=d},
cNW:function cNW(d,e){this.a=d
this.b=e},
cNp:function cNp(d,e,f){this.a=d
this.b=e
this.c=f},
aN8:function aN8(){},
aN9:function aN9(){},
aNa:function aNa(){},
aO7:function aO7(){},
c4H(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4I(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hVK(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_H(d,e){return C.hVL(d,e)},
hVL(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_H=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3w(d),$async$b_H)
case 3:p=g
if(p!=null){try{t=A.V.aP(0,p.c,null)
if(x.f.b(t)){s=C.hrr(B.a1(t,x.N,x.z))
if(s==null){u=new B.GS(D.a9g,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4H(s,e,p.b)){u=new B.GS(D.aMt,null)
w=1
break}r=p.a?D.emv:D.aMs
u=new B.GS(r,s)
w=1
break}}catch(o){}u=new B.GS(D.a9g,null)
w=1
break}s=C.hrs(d)
if(s==null){u=new B.GS(D.a9g,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4H(s,e,null)){u=new B.GS(D.aMt,null)
w=1
break}u=new B.GS(D.aMs,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_H,v)},
hrs(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d2(w,"\ufeff"))w=J.mX(w,1)
v=!1
if(J.d2(w,"NGMYSNAP1|")){v=!0
w=A.cb.cD(0,A.cH.aL(J.mX(w,10)))}u=A.V.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hVJ(t):C.hrr(t)
return s}catch(r){return null}},
hVJ(d){var w,v,u,t,s,r,q,p,o,n=new C.c4E(),m=new C.c4D(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w1(v,u,t,s,r,A.h.M(q==null?0:q))}else p=null
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
return new B.a7p("","",v,u,t,s,r,q,n,m,o,p,A.iD,new B.V(Date.now(),0,!1),-1)},
hrr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4G()
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
n=new B.w1(t,s,r,q,p,A.h.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.B(new B.el(J.b9(m,new C.c4F(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7p(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hb9(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hb9=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4C(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hn(B.KX(t.f2(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hb9,v)},
Xz:function Xz(d,e){this.a=d
this.b=e},
c4E:function c4E(){},
c4D:function c4D(){},
c4G:function c4G(){},
c4F:function c4F(d){this.a=d},
iiv(d){return B.cg(null,A.b5,!0,null,new C.fD4(),d,null,!0,!0,x.N)},
iiI(d,e,f,g){return B.cg(null,A.b5,!0,null,new C.fEh(g,f,e),d,null,!0,!0,x.y)},
apq:function apq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aER:function aER(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dHZ:function dHZ(d,e){this.a=d
this.b=e},
dI_:function dI_(d){this.a=d},
dHQ:function dHQ(d,e){this.a=d
this.b=e},
dHO:function dHO(d){this.a=d},
dHY:function dHY(d){this.a=d},
dHX:function dHX(d,e){this.a=d
this.b=e},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHM:function dHM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHP:function dHP(d){this.a=d},
dHW:function dHW(){},
dHU:function dHU(d){this.a=d},
dHV:function dHV(d,e){this.a=d
this.b=e},
dHR:function dHR(){},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHT:function dHT(d,e){this.a=d
this.b=e},
dI0:function dI0(d){this.a=d},
a20:function a20(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvq:function bvq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0E:function a0E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmb:function bmb(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dI4:function dI4(d){this.a=d},
dI1:function dI1(d,e){this.a=d
this.b=e},
dI2:function dI2(d,e){this.a=d
this.b=e},
dI3:function dI3(d){this.a=d},
a0F:function a0F(d){this.a=d},
bmc:function bmc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dI5:function dI5(d,e){this.a=d
this.b=e},
fD4:function fD4(){},
fEh:function fEh(d,e,f){this.a=d
this.b=e
this.c=f},
ag_:function ag_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8n:function f8n(d){this.a=d},
f8o:function f8o(d){this.a=d},
Rg:function Rg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_M:function a_M(d){this.a=d},
aC2:function aC2(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgU:function dgU(d){this.a=d},
dgR:function dgR(){},
dgS:function dgS(d){this.a=d},
dgT:function dgT(d){this.a=d},
VF(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O1(s),$async$VF)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apH(s,t),$async$VF)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VF,v)},
hW2(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5q(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5q:function c5q(){},
io8(d){return A.d.dM(A.DY,new C.fOu(d),new C.fOv()).r},
fOu:function fOu(d){this.a=d},
fOv:function fOv(){},
apX:function apX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmj:function bmj(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dOs:function dOs(d){this.a=d},
dOr:function dOr(d){this.a=d},
dOj:function dOj(d,e,f){this.a=d
this.b=e
this.c=f},
dOo:function dOo(d){this.a=d},
dOl:function dOl(d,e,f){this.a=d
this.b=e
this.c=f},
dOp:function dOp(d){this.a=d},
dOk:function dOk(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOm:function dOm(d){this.a=d},
dOn:function dOn(d){this.a=d},
ht6(d){var w=B.cdC(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bx=0
d.c7=B.a([],x.s)},
ht8(d){return B.cg(null,A.w.j(0.82),!0,null,new C.cdH(),d,null,!0,!0,x.H)},
a84:function a84(d){this.a=d},
cdH:function cdH(){},
cdG:function cdG(d){this.a=d},
hH3(){var w=new B.V(Date.now(),0,!1),v=w.bS(B.dx(4-B.mm(w),0,0,0,0,0).a),u=B.c1(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.h.bh(A.o.aq(v.bB(B.c1(B.bD(u),B.bM(u),B.bY(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
ftg(d,e){var w,v,u,t,s,r,q=B.H3(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.aA(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
icX(d,e){var w,v,u,t,s,r,q,p=B.H3(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.h.M(w)
return w==null?0:w}}return 0},
ixJ(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H3(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.h.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ijn(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H3(b5),b2=B.ceY(),b3=C.hH3()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
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
return w==null?1:w}n=new C.fF6()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.ftg(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.S(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cb(w,B.a3(w).k("cb<1,2>")).gae(0);w.C();){i=w.d
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
return B.cd(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aI(d.h(0,a8))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cd(h,a1)}}}return a1},
hDk(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h4()?1:2
return s},
hhl(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ijo(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H3(a3),a1=new C.fF7()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,"+local.ngmy")?A.a.aA(p,0,p.length-11):p)!==a0)continue
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
q=new C.fF8(v+r+q>1,l)
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
return C.hhl(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ijm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.h.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.h.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hH3():B.ceY()
t=v+"|"+u
s=C.ftg(d,e)
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
irY(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.blT()
w=C.ijo(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahw(d,a0,w)
return w}v=C.ijn(d,a0)
if(v!=null){if(v===3)++d.f
C.ahw(d,a0,v)
return v}u=C.ijm(d,a0,a1)
if(u!=null)return new C.fVL(d,a1,a0).$1(u)
t=C.ftg(d,a0)
s=J.a8(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.h.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.h.M(s)
if(p==null)p=0
o=new C.fVN(d,a1)
if(C.icX(d,a0)>0){n=o.$0()
C.ixJ(d,a0)
C.ahw(d,a0,n)
return n}if(q>=d.c){n=new C.fVM(d,a1).$0()
C.ahw(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahw(d,a0,n)
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
C.ahw(d,a0,e)
return e},
ceQ(d){var w=0,v=B.j(x.y),u
var $async$ceQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ceP(d),$async$ceQ)
case 3:if(f){u=!0
w=1
break}u=B.ceP(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ceQ,v)},
ahw(d,e,f){var w,v="winStreak",u="loseStreak",t=C.ftg(d,e),s=J.a8(t),r=B.aI(s.h(t,v)),q=r==null?null:A.h.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.h.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fF6:function fF6(){},
fF7:function fF7(){},
fF8:function fF8(d,e){this.a=d
this.b=e},
fVL:function fVL(d,e,f){this.a=d
this.b=e
this.c=f},
fVN:function fVN(d,e){this.a=d
this.b=e},
fVM:function fVM(d,e){this.a=d
this.b=e},
app:function app(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm9:function bm9(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dHB:function dHB(d){this.a=d},
dHA:function dHA(d){this.a=d},
dHC:function dHC(d){this.a=d},
dHz:function dHz(d,e){this.a=d
this.b=e},
aNG:function aNG(){},
Os:function Os(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cg7:function cg7(){},
cg6:function cg6(){},
arK:function arK(d,e,f){this.c=d
this.d=e
this.a=f},
hc9(d,e,f){return B.cg(null,A.w.j(0.88),!0,null,new C.cgz(f,e),d,null,!0,!0,x.H)},
hZQ(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cd(r[0],null)
v=r[1]
u=B.cd(v,null)
t=B.cd(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
OA:function OA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgz:function cgz(d,e){this.a=d
this.b=e},
bmU:function bmU(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e7h:function e7h(d,e){this.a=d
this.b=e},
e7d:function e7d(){},
e7e:function e7e(){},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7g:function e7g(d,e){this.a=d
this.b=e},
aOh:function aOh(){},
hH_(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blq(new C.fQS(w))
w=w.a
return w==null?null:w.c.a},
hGS(d){$.aU.x1$.push(new C.fQF(d))},
hHc(d){var w=$.to().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hH_(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q5())w.eb()},
hHb(d){C.hDs(d,0)},
hDs(d,e){var w,v
if(e>4)return
w=d==null?$.to().gbl():d
if(w==null||w.c==null)return
v=C.hH_(w)
if(v==="GameCenterScreen")return
if(D.fl0.q(0,v)&&w.q5()){w.eb()
$.aU.x1$.push(new C.fBo(w,e))}},
aSg(d,e,f){return B.eb(B.cj(new C.fSe(e,d,f)),e,!0)},
fQS:function fQS(d){this.a=d},
fQF:function fQF(d){this.a=d},
fQE:function fQE(d){this.a=d},
fBo:function fBo(d,e){this.a=d
this.b=e},
fSe:function fSe(d,e,f){this.a=d
this.b=e
this.c=f},
arO(d,e){var w=0,v=B.j(x.H),u
var $async$arO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WK(e)
w=2
return B.b(B.arN(d,u),$async$arO)
case 2:B.a8H(d,u)
return B.h(null,v)}})
return B.i($async$arO,v)},
vd(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vd=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.yZ(g)
if(o.length===0){w=1
break}t=e==null?B.M7(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OB(o),$async$vd)
case 3:q=m
if(j!=null&&j.length!==0&&J.rm(q,new C.cgN(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mV(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arO(o,q),$async$vd)
case 4:if(i==null||r==null||s)C.a8J(o).bG(new C.cgO(),x.S).eF(new C.cgP())
case 1:return B.h(u,v)}})
return B.i($async$vd,v)},
a8J(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hIf
m=B.yZ(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OB(m),$async$a8J)
case 3:t=f
s=J.cE(t)
if(!s.aU(t,new C.cgM())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8J)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.V.av(s.h(t,o).aj(),null)!==A.V.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arO(m,r),$async$a8J)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8J,v)},
b29(d){var w=0,v=B.j(x.S),u,t
var $async$b29=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hcc(d,!1),$async$b29)
case 3:t=J
w=4
return B.b(C.arP(d,!1),$async$b29)
case 4:u=t.dH(f,new C.cgL(new B.V(Date.now(),0,!1).bS(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b29,v)},
arP(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.yZ(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OB(r),$async$arP)
case 3:t=g
s=B.WK(t)
if(s.length!==J.ad(t))C.arO(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arP,v)},
ipH(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bB(d).a,r=A.o.aq(s,6e7)
if(r<1)return"Just now"
w=A.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.aq(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12)
s=A.iX[B.bM(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fW(d)),2,"0")
u=B.dg(d)<12?"AM":"PM"
return s+" "+B.bY(d)+r+" \xb7 "+v+":"+w+" "+u},
bDy(d){var w=A.h.ad(Math.abs(d),2).split(".")
return"$"+B.os(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fy8(),null)+"."+w[1]},
bHf(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arP(e,!1),$async$bHf)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hcc(e,!0).bG(new C.h3Q(e),t).bG(new C.h3R(),t).eF(new C.h3S())
w=4
return B.b(B.bU(A.L,null,new C.h3T(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHf)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHf,v)},
hfe(d,e,f){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.dv(A.dB,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hz,w,w,w),1)},
e7i(d,e,f){var w=null,v=A.w.j(0.22),u=B.l(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dv(A.dK,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.OS,w,w,w),1)},
cgN:function cgN(d){this.a=d},
cgO:function cgO(){},
cgP:function cgP(){},
cgM:function cgM(){},
cgL:function cgL(d){this.a=d},
fy8:function fy8(){},
h3Q:function h3Q(d){this.a=d},
h3R:function h3R(){},
h3S:function h3S(){},
h3T:function h3T(d,e){this.a=d
this.b=e},
h3P:function h3P(d,e){this.a=d
this.b=e},
h3O:function h3O(d){this.a=d},
aeR:function aeR(d,e){this.c=d
this.a=e},
e7k:function e7k(){},
e7l:function e7l(){},
e7m:function e7m(){},
e7n:function e7n(d){this.a=d},
e7p:function e7p(){},
e7o:function e7o(d){this.a=d},
aeQ:function aeQ(d,e){this.c=d
this.a=e},
e7j:function e7j(){},
bHg(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hQ(A.b5,!1,w,d,new C.h3W(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h3W:function h3W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h3U:function h3U(d,e){this.a=d
this.b=e},
h3V:function h3V(d,e){this.a=d
this.b=e},
aCM:function aCM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bip:function bip(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
do1:function do1(d,e){this.a=d
this.b=e},
do0:function do0(){},
afe:function afe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNb:function aNb(){},
asz(d,e,f){return new C.b3_(f,d,e,null)},
i_v(d){var w=B.a(A.h.ad(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.os(w[0],v,new C.ciu(),null)
return A.d.aN(w,".")},
b2c(){var w=$.tS
if((w>0?$.tS=w-1:w)<=0)$.tS=0},
aiB(d,e){var w=0,v=B.j(x.H),u
var $async$aiB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hkj
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiB)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiB,v)},
b3_:function b3_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
civ:function civ(d){this.a=d},
ciu:function ciu(){},
O4:function O4(){},
c5X:function c5X(){},
hjE(d){if(d>0)return"+"+d
return""+d},
hiU(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fSf(d,e){var w=J.t(e,d)
if(w==null)w=B.fR1().h(0,d)
return w==null?90:w},
fx3(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.k9(u,new C.fx4(),u.$ti.k("k9<ci.E,q>")))
A.d.e0(v,e)
return v},
hCn(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pI(s,3,s.$ti.k("ci.E")))
A.d.e0(t,e)
return t},
ikO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JD("Simplify \u221a("+t*s+"x^"+q+")",m,C.hCn(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JD("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fx3(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JD("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fx3(g,b2)))}else b1.push(new C.JD("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fx3(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h4()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.h.fL(a4)?""+A.h.M(a4):"\u221a"+a3
b1.push(new C.JD("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fx3(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JD("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hCn(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
ivN(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dt(B.a(d.split(""),u),x.bJ).hg(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hg(t)
if(v!==d)return v}return new B.dt(t,x.bJ).hg(0)},
JD:function JD(d,e,f){this.a=d
this.b=e
this.c=f},
fx4:function fx4(){},
ar7:function ar7(d,e,f,g,h,i,j){var _=this
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
e_N:function e_N(d){this.a=d},
e_O:function e_O(d){this.a=d},
e_P:function e_P(d){this.a=d},
e_Q:function e_Q(d,e){this.a=d
this.b=e},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_S:function e_S(d){this.a=d},
e_M:function e_M(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_L:function e_L(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_X:function e_X(d){this.a=d},
e_V:function e_V(d,e){this.a=d
this.b=e},
e_U:function e_U(d,e){this.a=d
this.b=e},
arQ:function arQ(d,e,f,g,h,i){var _=this
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
e7v:function e7v(d,e,f){this.a=d
this.b=e
this.c=f},
e7w:function e7w(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
hWH(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bS(36e8)
try{w=d.h(0,"start")
p=B.n2(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n2(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rP(w,u,t,s,r,q==null?null:J.k(q))},
a8R(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8R)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.V.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.dd(s,x.f)
p=B.cF(p,new C.chi(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a3(p).k("M.E"))
A.d.b0(p,new C.chj())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8R,v)},
as5(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$as5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8R(d),$async$as5)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.chf(e))
q.I(r,e)
q.b0(r,new C.chg())
w=3
return B.b(B.az(),$async$as5)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kq(r,80)
s=q.$ti.k("N<ak.E,ac<q,@>>")
q=B.B(new B.N(q,new C.chh(),s),s.k("ak.E"))
w=4
return B.b(u.aE("String","ngmy_helper_calendar_v1_"+t,A.V.av(q,null)),$async$as5)
case 4:return B.h(null,v)}})
return B.i($async$as5,v)},
i_2(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dH(d,new C.chk(v,v.bS(B.dx(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
htJ(d){var w,v,u,t,s,r,q,p,o,n,m=C.i_2(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cT(m,0,B.dA(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.dg(s),12)===0?12:A.o.F(B.dg(s),12)
q=B.dg(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fW(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bM(s)+"/"+B.bY(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rP:function rP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chi:function chi(){},
chj:function chj(){},
chf:function chf(d){this.a=d},
chg:function chg(){},
chh:function chh(){},
chk:function chk(d,e){this.a=d
this.b=e},
hWI(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n2(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
return new C.rQ(w,u,t,s,r,q,J.k(p==null?"user":p))},
hs0(d){var w=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12),v=B.dg(d)>=12?"PM":"AM"
return""+B.bM(d)+"/"+B.bY(d)+" "+w+":"+A.a.b1(A.o.v(B.fW(d)),2,"0")+" "+v},
VT(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VT)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.V.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.dd(s,x.f)
p=B.cF(p,new C.c94(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a3(p).k("M.E"))
A.d.b0(p,new C.c95())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VT,v)},
b0u(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0u=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0u)
case 2:u=g
t=B.cT(e,0,B.dA(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,ac<q,@>>")
r=B.B(new B.N(t,new C.c92(),r),r.k("ak.E"))
w=3
return B.b(u.aE("String","ngmy_call_memory_v1_"+s,A.V.av(r,null)),$async$b0u)
case 3:return B.h(null,v)}})
return B.i($async$b0u,v)},
b0v(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0v=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.VT(d),$async$b0v)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c93())
w=5
return B.b(C.b0u(d,q),$async$b0v)
case 5:return B.h(null,v)}})
return B.i($async$b0v,v)},
c96(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c96=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VT(d),$async$c96)
case 3:t=s.dH(g,new C.c97(e.bS(-72e8),e.bS(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c96,v)},
hs1(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kq(d,e),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWH()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.aA(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
irI(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c1(B.bD(p),B.bM(p),B.bY(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bS(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bS(r)
w=B.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.cd(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.cd(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=A.a.q(o,"am")||A.a.q(o,"morning")||A.a.q(o,"night")
if(v)if(A.a.q(o,"pm")||A.a.q(o,"afternoon")||A.a.q(o,"evening"))u=u<12?u+12:u
if(q&&A.a.q(o,"pm"))u=u<12?u+12:u
return B.c1(B.bD(n),B.bM(n),B.bY(n),u,t,0,0,0)},
hIL(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rQ:function rQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c94:function c94(){},
c95:function c95(){},
c92:function c92(){},
c93:function c93(){},
c97:function c97(d,e){this.a=d
this.b=e},
htM(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lS(t,w,v,u==null?null:J.k(u))},
i_8(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.chs(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqf
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iC(r,w,v,u,t,typeof d.h(0,s)=="number"?A.h.M(B.dF(d.h(0,s))):0)},
i_7(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ida(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.h.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.h.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chq(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.iq(p,w,v,u,s==null?D.aDc:s,t)},
idb(d){var w,v,u,t=B.J([F.Dr,"investments",A.nP,"games",A.js,"loans",A.hD,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kf,"store",A.qY,"jobs",A.nO,"refunds",A.eY,"account",A.lr,"music",A.zA,"help"],x.dk,x.N)
for(w=new B.cb(t,B.a3(t).k("cb<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ida(d){switch(d){case"investments":return F.Dr
case"games":return A.nP
case"loans":return A.js
case"withdrawals":return A.hD
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qY
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zA}},
nh(d){var w=B.a([new C.lS("text",d,null,null)],x.a)
return w},
aiy(){var w=null,v=x.v
return B.a([new C.iq("investments","Investments",F.Dr,4280468830,B.a([new C.iC("inv1","How do I buy an investment plan?",C.nh("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iC("inv2","When do I get paid from my plan?",C.nh("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iC("inv3","Can I have more than one plan?",C.nh("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iq("games","Games",A.nP,4287323382,B.a([new C.iC("gam1","How do NGMY games work?",C.nh("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iC("gam2","Why did my game payout change?",C.nh("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iq("loans","Loans",A.js,4294538006,B.a([new C.iC("loan1","How do I apply for a loan?",C.nh("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iC("loan2","What is the repayment period?",C.nh("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iq("withdrawals","Withdrawals",A.hD,4282090230,B.a([new C.iC("wd1","How do I withdraw money?",C.nh("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iC("wd2","Why is my withdrawal pending?",C.nh("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iq("deposits","Deposits",A.jN,4279548070,B.a([new C.iC("dep1","How do I deposit funds?",C.nh("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iC("dep2","How long until my deposit posts?",C.nh("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iq("civic","Civic Registry",A.l2,4289170426,B.a([new C.iC("civ1","What is Civic Registry?",C.nh("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iC("civ2","What does \u201cmissed\u201d mean on my profile?",C.nh("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iq("store","NGMY Store",A.kf,4293675161,B.a([new C.iC("sto1","How do I buy from NGMY Store?",C.nh("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iC("sto2","How do I sell in the store?",C.nh("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iq("jobs","Jobs & Creator",A.qY,4293548044,B.a([new C.iC("job1","How do I find jobs?",C.nh("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iC("job2","How do I post a job?",C.nh("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iq("refunds","Refunds",A.nO,4293870660,B.a([new C.iC("ref1","Can I get a refund?",C.nh("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iC("ref2","How long do refunds take?",C.nh("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iq("account","Account",A.eY,4281908728,B.a([new C.iC("acc1","How do I update my profile?",C.nh("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iC("acc2","I forgot my password \u2014 what now?",C.nh("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iq("music","Music Charts",A.lr,4290807036,B.a([new C.iC("mus1","What are Music Charts?",C.nh("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iC("mus2","How do I upload music?",C.nh("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iq("help","Help Center",A.zA,4279080072,B.a([new C.iC("hlp1","Where can I get live help?",C.nh("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iC("hlp2","How do daily Helper limits work?",C.nh("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
htN(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiy()
v=v.dO(d,new C.chv(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chw())
return w.length===0?C.aiy():w},
htO(d){var w=J.b9(d,new C.chx(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
as7(d){return C.i_9(d)},
i_9(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$as7=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$as7)
case 6:s=f
w=7
return B.b(s.aE("String","ngmy_helper_kb_v1",A.V.av(C.htO(d),null)),$async$as7)
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
return B.i($async$as7,v)},
chu(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chu)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiy()
u=l
w=1
break}p=A.V.aP(0,q,null)
if(!x.f.b(p)){l=C.aiy()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiy()
u=l
w=1
break}n=C.htN(o)
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
l=C.aiy()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chu,v)},
b2y(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2y)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2y)
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
return B.i($async$b2y,v)},
b2z(d){return C.i_a(d)},
i_a(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2z)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hP("ngmy_helper_kb",d,!1,!1,A.cQ,null),$async$b2z)
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
return B.i($async$b2z,v)},
as8(){var w=0,v=B.j(x.I),u,t,s,r
var $async$as8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chu(),$async$as8)
case 3:s=e
w=4
return B.b(C.b2y(),$async$as8)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.htN(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.as7(t),$async$as8)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as8,v)},
chy(d){var w=0,v=B.j(x.y),u
var $async$chy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as7(d),$async$chy)
case 3:u=C.b2z(C.htO(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chy,v)},
lS:function lS(d,e,f,g){var _=this
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
cht:function cht(){},
chs:function chs(){},
iq:function iq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chr:function chr(){},
chq:function chq(){},
chv:function chv(){},
chw:function chw(){},
chx:function chx(){},
bbT:function bbT(d){this.a=d},
WS:function WS(d,e,f,g){var _=this
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
ebB:function ebB(){},
ebC:function ebC(){},
ebv:function ebv(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebf:function ebf(d){this.a=d},
ebg:function ebg(d,e,f){this.a=d
this.b=e
this.c=f},
ebd:function ebd(d){this.a=d},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebt:function ebt(d,e){this.a=d
this.b=e},
ebu:function ebu(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebn:function ebn(d,e,f){this.a=d
this.b=e
this.c=f},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebr:function ebr(d,e,f){this.a=d
this.b=e
this.c=f},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebo:function ebo(d,e,f){this.a=d
this.b=e
this.c=f},
ebi:function ebi(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebk:function ebk(d){this.a=d},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebz:function ebz(d,e){this.a=d
this.b=e},
eby:function eby(){},
ebx:function ebx(d,e){this.a=d
this.b=e},
QE:function QE(d,e){this.c=d
this.a=e},
bdO:function bdO(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cWV:function cWV(d){this.a=d},
cWU:function cWU(d,e){this.a=d
this.b=e},
cWS:function cWS(d,e){this.a=d
this.b=e},
cWW:function cWW(d){this.a=d},
cWT:function cWT(d,e){this.a=d
this.b=e},
cWR:function cWR(d,e){this.a=d
this.b=e},
cWX:function cWX(d){this.a=d},
cWY:function cWY(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e,f){this.c=d
this.d=e
this.a=f},
aI4:function aI4(){this.d=$
this.c=this.a=null},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3i:function f3i(d){this.a=d},
f3o:function f3o(){},
f3n:function f3n(d,e){this.a=d
this.b=e},
f3m:function f3m(d,e){this.a=d
this.b=e},
f3j:function f3j(d,e){this.a=d
this.b=e},
f3l:function f3l(d,e,f){this.a=d
this.b=e
this.c=f},
f3k:function f3k(d,e,f){this.a=d
this.b=e
this.c=f},
a1p:function a1p(d,e){this.c=d
this.a=e},
aI3:function aI3(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3b:function f3b(d){this.a=d},
f3c:function f3c(d,e){this.a=d
this.b=e},
f3f:function f3f(d,e){this.a=d
this.b=e},
f3g:function f3g(d){this.a=d},
f3e:function f3e(d,e){this.a=d
this.b=e},
i_5(d){var w=new B.N(d,new C.chn(),B.T(d).k("N<1,q>")).aN(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
cho(d,e,f){return C.i_6(d,e,f)},
i_6(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$cho=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Lb([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.ri(B.nk(b3),C.i_5(b6)+"\n\nAdmin instruction:\n"+b4,A.i1,null,null),$async$cho)
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
if(J.d2(s,"```"))s=A.a.el(J.hnm(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.V.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Lb([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Lb([a3,"AI did not return any categories.",p,o])
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
J.c4(a0,C.htM(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c4(a0,new C.lS("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.t(e,"question")
J.c4(g,new C.iC("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i_4(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.h.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c4(m,new C.iq(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Lb([m,null,p,a3])
w=1
break}catch(b7){a2=B.aa(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.Lb([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$cho,v)},
i_4(d){switch(d){case"investments":return F.Dr
case"games":return A.nP
case"loans":return A.js
case"withdrawals":return A.hD
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qY
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zA}},
iq5(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fSN(f))
if(w>=0){t[w]=J.fm(e).cQh(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bfX(u)
return t},
chn:function chn(){},
fSN:function fSN(d){this.a=d},
ddP:function ddP(d){this.a=d},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
aG5:function aG5(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ecb:function ecb(){},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e){this.a=d
this.b=e},
ebT:function ebT(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebW:function ebW(d,e,f){this.a=d
this.b=e
this.c=f},
ebO:function ebO(){},
ebP:function ebP(){},
ebQ:function ebQ(){},
ebR:function ebR(){},
ec1:function ec1(d,e){this.a=d
this.b=e},
ec2:function ec2(d){this.a=d},
ec3:function ec3(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec5:function ec5(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec7:function ec7(){},
ec8:function ec8(d){this.a=d},
ec0:function ec0(d){this.a=d},
ec9:function ec9(d){this.a=d},
ec_:function ec_(d){this.a=d},
eca:function eca(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
i75(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).l_(0,d),w=new B.Gv(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.aA(d,t,q)
o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cK,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.ne,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.b_(d,t)
m.push(B.cR(n,n,n,n,n,n,n,n,n,B.m(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u5(A.cw,n,n,n,A.eT,n,n,!0,n,B.cR(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.c1)},
dsk:function dsk(d){this.a=d},
aDG:function aDG(d,e){this.a=d
this.b=e},
as6:function as6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG4:function aG4(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebD:function ebD(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebN:function ebN(){},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebI:function ebI(){},
ebK:function ebK(){},
ebJ:function ebJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebH:function ebH(d,e){this.a=d
this.b=e},
aDE:function aDE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adl:function adl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2x:function b2x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chp:function chp(d){this.a=d},
add:function add(d,e,f){this.c=d
this.d=e
this.a=f},
cQp:function cQp(d){this.a=d},
cQq:function cQq(){},
cQr:function cQr(d){this.a=d},
aDF:function aDF(d,e,f){this.c=d
this.d=e
this.a=f},
bjY:function bjY(){this.c=this.a=this.d=null},
dsl:function dsl(d,e){this.a=d
this.b=e},
dsn:function dsn(d,e){this.a=d
this.b=e},
dsm:function dsm(d){this.a=d},
i0D(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i0E(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i0C(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hCi(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fwN(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
irl(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i0C(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asX:function asX(d,e){this.a=d
this.b=e},
JI:function JI(d,e){this.a=d
this.b=e},
rV:function rV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwN:function fwN(){},
as9:function as9(d,e,f,g,h,i){var _=this
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
ecp:function ecp(d,e){this.a=d
this.b=e},
ecg:function ecg(d){this.a=d},
eci:function eci(){},
ecj:function ecj(d,e){this.a=d
this.b=e},
eck:function eck(d){this.a=d},
ecl:function ecl(){},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecn:function ecn(d){this.a=d},
eco:function eco(d){this.a=d},
ech:function ech(d,e){this.a=d
this.b=e},
ecw:function ecw(d,e){this.a=d
this.b=e},
ect:function ect(){},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecy:function ecy(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecf:function ecf(d,e){this.a=d
this.b=e},
ece:function ece(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ecd:function ecd(d){this.a=d},
aOp:function aOp(){},
chA(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.U9
w=1
break}w=3
return B.b(B.az(),$async$chA)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.U9
w=1
break}try{q=B.a1(x.f.a(A.V.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WU(p,o,n,q)
w=1
break}catch(l){s=B.aa(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.U9
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chA,v)},
asa(d,e){var w=0,v=B.j(x.H),u
var $async$asa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$asa)
case 4:w=3
return B.b(g.aE("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.V.av(e.aj(),null)),$async$asa)
case 3:case 1:return B.h(u,v)}})
return B.i($async$asa,v)},
chz(d){var w=0,v=B.j(x.gp),u,t
var $async$chz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WU(!0,!0,!0,!0)
w=3
return B.b(C.asa(d,t),$async$chz)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chz,v)},
hIM(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hIK(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WU:function WU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHk(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHk=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2s(h),$async$bHk)
case 3:if(j){w=1
break}w=4
return B.b(C.as2(h),$async$bHk)
case 4:if(d.e==null){w=1
break}t=B.qV(d,!0)
t.toString
s=B.dl()
s.b=B.pA(new C.h4N(g,e,f,s),!1,!1)
t.mf(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHk,v)},
h4N:function h4N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4M:function h4M(d){this.a=d},
a0a:function a0a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD4:function aD4(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dpG:function dpG(d){this.a=d},
dpH:function dpH(d,e,f){this.a=d
this.b=e
this.c=f},
dpM:function dpM(){},
dpL:function dpL(d){this.a=d},
dpI:function dpI(d){this.a=d},
dpJ:function dpJ(){},
dpK:function dpK(d){this.a=d},
aNg:function aNg(){},
i06(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i05(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asI(d){return C.i03(d)},
i03(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asI)
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
return B.i($async$asI,v)},
b3n(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3n=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i06(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3n)
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
return B.i($async$b3n,v)},
hue(d){var w,v=A.a.i(d)
if(A.a.Y(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.b_(v,14))
return w.length===0?null:w}return null},
i04(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aU(e,new C.cjo(A.a.i(d.toLowerCase()),w))},
huf(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qh(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qh(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qh(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qh(!1,0,"Verification code does not match this deposit.")
if(!C.i04(e,d,w))return new C.qh(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hcs(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_s
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OR(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OR(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OR(!0,!1,!1,!1)},
cju(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cju=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hue(d)
if(s==null){u=D.Ub
w=1
break}w=3
return B.b(C.asI(s),$async$cju)
case 3:t=g
if(t==null){u=D.Ub
w=1
break}u=C.hcs(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cju,v)},
b3p(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3n(d),$async$b3p)
case 3:s=g
if(s==null||s.length===0){u=D.Ub
w=1
break}w=4
return B.b(C.asI(s),$async$b3p)
case 4:t=g
if(t==null){u=D.Ub
w=1
break}u=C.hcs(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3p,v)},
cjv(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjv=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3n(d),$async$cjv)
case 3:t=j
if(t==null||t.length===0){u=new C.qh(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xc(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjv,v)},
Xc(d,e,f,g,h){return C.i07(d,e,f,g,h)},
i07(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xc=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hue(a4)
if(a0==null){u=new C.qh(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asI(a0),$async$Xc)
case 3:k=a8
if(k==null){u=new C.qh(!1,0,y.m)
w=1
break}j=C.hcs(k,a5)
if(j.b){u=new C.qh(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qh(!1,0,y.u)
w=1
break}if(j.c){u=new C.qh(!1,0,y.j)
w=1
break}i=C.huf(a2,a3,a5,k,a6)
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
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xc)
case 8:p=a8
if(p==null){u=new C.qh(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qh(!1,0,"This deposit code was already used.")
w=1
break}o=C.huf(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dI(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hP("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cQ,null),$async$Xc)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hP("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cQ,null),$async$Xc)
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
return B.i($async$Xc,v)},
OR:function OR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qh:function qh(d,e,f){this.a=d
this.b=e
this.c=f},
cjo:function cjo(d,e){this.a=d
this.b=e},
cjC(d,e){var w
B.hjf(d,e,!1)
B.rh(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bp(!0,!1,d.d,w)},
a9d(d,e){if(d==null)return!1
return B.bD(d)===e.gcl()&&B.bM(d)===e.gci()&&B.bY(d)===e.gcz()},
i0f(d){var w=B.dg(d)*60+B.fW(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hum(d){if(B.dg(d)>=12)return!1
if(B.mm(d)===6||B.mm(d)===7)return!1
return!0},
cjG(d){var w=d.c?d.bU():d
return w.d5(B.c1(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))},
hcw(d,e){var w,v,u,t=d.gD7()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9d(d.fx,e)&&d.fy>0.0001)return A.h.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjG(w))return 0
v=B.c1(e.gcl(),e.gci(),e.gcz(),12,0,0,0,0)
if(!e.d5(v))return t
if(!e.cb(w))return 0
u=A.o.aq(v.bB(w).a,1000)
if(u<=0)return t
return A.h.D(t*(A.o.D(A.o.aq(e.bB(w).a,1000),0,u)/u),0,t)},
hcv(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9d(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aU(e,new C.cjB(s))&&C.cjG(t)){r=d.gD7()
v=r>0
if(v){q=new B.d7(s,d.a,r,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,p)
C.cjC(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9d(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9d(o,p)&&!C.cjG(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjB:function cjB(d){this.a=d},
ifm(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iwF(d,e,f,g,h,i){return B.hD(d,new C.asJ(f,e,i,g,h,null),!0,null,x.H)},
hyC(d){var w,v,u=d.c?d.bU():d,t=B.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bM(u)+"/"+B.bY(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fW(u)),2,"0")+" "+v},
hGu(d){var w=d.x
if(w===A.dG)return"Processing"
if(w===A.kJ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
inE(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fS)return"Deposit"
if(w===A.f5)return"Withdrawal"
return v.length!==0?v:w.b},
if0(d){var w=d.d,v=w===A.fS||w===A.pa||w===A.h8||w===A.kK,u=d.x
if(u===A.dG)return w===A.f5?-d.c:0
if(u!==A.cv)return 0
w=d.c
return v?w:-w},
ioc(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b0(q,new C.fOB())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.if0(s)
if(r<0)r=0
w.n(0,s.a,new B.brw(v,r))}return w},
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
eqM:function eqM(d){this.a=d},
ers:function ers(d){this.a=d},
ert:function ert(d){this.a=d},
eru:function eru(d){this.a=d},
era:function era(d,e){this.a=d
this.b=e},
erb:function erb(){},
erc:function erc(d){this.a=d},
erd:function erd(){},
ere:function ere(d){this.a=d},
erf:function erf(d,e,f){this.a=d
this.b=e
this.c=f},
erg:function erg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er5:function er5(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e,f){this.a=d
this.b=e
this.c=f},
er6:function er6(){},
er7:function er7(){},
er8:function er8(d){this.a=d},
er9:function er9(){},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqS:function eqS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er_:function er_(){},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
er1:function er1(d,e,f){this.a=d
this.b=e
this.c=f},
er2:function er2(d){this.a=d},
er4:function er4(d){this.a=d},
er3:function er3(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqU:function eqU(d,e,f){this.a=d
this.b=e
this.c=f},
erk:function erk(){},
erl:function erl(){},
erp:function erp(d){this.a=d},
eri:function eri(d){this.a=d},
erq:function erq(d){this.a=d},
erh:function erh(d){this.a=d},
err:function err(d){this.a=d},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erj:function erj(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqW:function eqW(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e){this.a=d
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
du5:function du5(){},
du6:function du6(){},
du7:function du7(d,e,f){this.a=d
this.b=e
this.c=f},
du4:function du4(d){this.a=d},
du8:function du8(d,e){this.a=d
this.b=e},
du3:function du3(d){this.a=d},
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
bkH:function bkH(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dtZ:function dtZ(d){this.a=d},
du_:function du_(d){this.a=d},
du0:function du0(d){this.a=d},
du1:function du1(){},
du2:function du2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dtY:function dtY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dtX:function dtX(d){this.a=d},
beh:function beh(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
beg:function beg(d,e,f){this.b=d
this.d=e
this.a=f},
bef:function bef(d,e,f,g,h,i,j){var _=this
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
dup:function dup(){},
duq:function duq(){},
dur:function dur(){},
dub:function dub(d){this.a=d},
dua:function dua(d,e){this.a=d
this.b=e},
du9:function du9(d,e){this.a=d
this.b=e},
dum:function dum(d,e){this.a=d
this.b=e},
duo:function duo(d,e){this.a=d
this.b=e},
dun:function dun(d,e){this.a=d
this.b=e},
dul:function dul(){},
duk:function duk(d){this.a=d},
duj:function duj(){},
due:function due(d){this.a=d},
duf:function duf(){},
dug:function dug(d){this.a=d},
duh:function duh(d){this.a=d},
dud:function dud(){},
dui:function dui(d){this.a=d},
duc:function duc(d){this.a=d},
bdH:function bdH(d){this.a=d},
fOB:function fOB(){},
byR:function byR(d,e){this.b=d
this.a=e},
aNw:function aNw(){},
bAQ:function bAQ(){},
ikh(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fGi(v,g))
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
aRI(d){var w,v=J.a8(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.h.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.h.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
ivj(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fZO(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiM(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRI(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
imY(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRI(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRI(d)>0},
imX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.h.M(h)
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
ikg(d,e){var w
C.aiM(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fGh(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uy(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
igM(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hiQ(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.igM(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bG9(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bG9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bG9)
case 7:r=e
q=B.aW(J.t(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.S(k,k)
w=1
break}p=A.V.aP(0,q,null)
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
return B.i($async$bG9,v)},
bFb(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bG9(),$async$bFb)
case 3:u=t.hiQ(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFb,v)},
LY(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$LY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hDD.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bB(p)
t=t.a>B.dx(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hDD.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S2(A.cf,q),$async$LY)
case 5:case 4:s=$.hDC.h(0,q)
if(s==null){u=C.uy(e,q)
w=1
break}r=C.uy(B.bFi(e,B.a([s],x._)),q)
if(r!=null)B.hlz(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$LY,v)},
ivy(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
idh(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.J(["ttt",B.c0(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e3(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c0(7,0,!1,q)
return B.J(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e3(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.fup(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ikf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.idh(u,f)
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
ivw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
hly(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fYe(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fYe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiM(d)
t=$.hi4
if(t==null)s=$.hi4=B.S2(A.cf,null).fv(new C.fYf())
else s=t
w=3
return B.b(s,$async$fYe)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.fYg(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFi(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fYe,v)},
aiN(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiM(d)
t=B.T(d).k("N<1,ac<q,@>>")
t=B.B(new B.N(d,new C.fVY(),t),t.k("ak.E"))
w=3
return B.b(B.S2(t,null),$async$aiN)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFi(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiN,v)},
aSG(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hly(d,e,f)
t=C.uy(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S2(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSG)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uy(s,e)
if(r!=null)B.hlz(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSG,v)},
is5(d,e,f){var w
C.hly(d,e,f)
w=$.hhT.h(0,e)
if(w!=null)w.a1(0)
$.hhT.n(0,e,B.cy(A.lM,new C.fVZ(e,d)))},
hcd(d,e){return new C.b2a(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fGi:function fGi(d,e){this.a=d
this.b=e},
fZO:function fZO(d){this.a=d},
fGh:function fGh(d){this.a=d},
fup:function fup(d){this.a=d},
fYf:function fYf(){},
fYg:function fYg(){},
fVY:function fVY(){},
fVZ:function fVZ(d,e){this.a=d
this.b=e},
b2a:function b2a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
iw1(d,e,f){return B.bU(A.L,null,new C.h0_(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h0_:function h0_(d,e){this.a=d
this.b=e},
a0Y:function a0Y(d,e,f){this.c=d
this.d=e
this.a=f},
aGh:function aGh(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
els:function els(d){this.a=d},
elv:function elv(d){this.a=d},
elw:function elw(d){this.a=d},
elu:function elu(d){this.a=d},
elx:function elx(d){this.a=d},
ely:function ely(d,e){this.a=d
this.b=e},
elt:function elt(d,e){this.a=d
this.b=e},
iqt(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iY
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iY
v=Date.now()
u=C.ig4(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kH("calendar",B.J(["title",C.ig3(t,w),"start",u.ag(),"end",u.bS(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ig3(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hEs(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hEs(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hEs(d){var w
if(d.length===0)return d
w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fFg(),B.T(w).k("N<1,q>")).aN(0," ")},
ig4(d,e){var w,v,u,t,s,r,q,p,o=B.c1(B.bD(e),B.bM(e),B.bY(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bS(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKo.gdQ(D.aKo),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cS(d,u,0)){t=C.if_(o,v.b)
o=t
break}}s=B.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
if(s!=null){w=s.b
v=w[1]
r=B.cd(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.cd(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.c1(B.bD(o),B.bM(o),B.bY(o),r,q,0,0,0)},
if_(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mm(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fFg:function fFg(){},
iqu(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.iY
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
q=C.ic5(w,j)
if(q==null||q.length===0)return A.iY
t=B.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kH("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kH(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kH("call",B.J(["name",q],t,t))],x.Z)}return A.iY},
ic5(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.iju(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
iju(d){var w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fFf(),B.T(w).k("N<1,q>")).aN(0," ")},
fFf:function fFf(){},
hIT(d){var w=new B.N(d,new C.fYw(),B.T(d).k("N<1,ac<q,@>>")).c0(0,new C.fYx())
w=B.B(w,w.$ti.k("M.E"))
return w},
fYw:function fYw(){},
fYx:function fYx(){},
iqx(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.iY
w=A.a.i(d)
if(w.length===0)return A.iY
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.iY
u=B.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return A.iY
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
return B.a([new B.kH("send_email",t)],x.Z)},
ipD(d,e){var w
if(e)return d
w=J.dH(d,new C.fS_())
w=B.B(w,w.$ti.k("M.E"))
return w},
fS_:function fS_(){},
is2(d){switch(d){case"blackjack_vegas":return D.e3I
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
fVP(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.l(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.X(A.nM,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbk,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.l(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ab(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bJP,B.d(D.cK0[t-1]+"\n"+r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b4,B.as(B.d(r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b4],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.n(A.hN,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
itf(d,e){var w,v=null,u=B.l(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.fXY(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fRq,A.af,B.A(r,A.l,v,A.b9,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cbE,A.n),v,v,v,v,H.ano,v,v,v),A.aB,B.de(A.atx,v,D.fS3,d,B.bp(A.aQ,v,v,v,A.dA,v,A.a1E,v,v,v,v,v))],w),A.l,v,A.e,A.i,0,A.p)},
px:function px(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btF:function btF(d,e){this.b=d
this.a=e},
fXY:function fXY(){},
i0P(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e3(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c0(8,0,!1,w)
u=B.c0(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e3(6,o)
for(v=0;v<6;++v)q[v]=B.c0(7,0,!1,w)
return new C.at9(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.aw,$.aw()))},
ikQ(d,e,f,g,h){var w=new C.fI3(f,h)
switch(d){case"checkers_deluxe":return C.iaF(h,g,e,w)
case"tic_tac_go":return C.ijI(h,g,e,w)
case"blackjack_vegas":return C.i9Y(h,g,e,new C.fHY(w))
case"roulette_euro":return C.ihY(h,g,e,new C.fHZ(w))
case"slots_jackpot":return C.iiN(h,g,e,new C.fI_(w))
case"billiards_snooker":return C.igP(h,g,e,new C.fI0(w))
case"connect_four_pro":return C.ib1(h,g,e,w)
case"profit_solve":return C.igS(h,g,e,new C.fI1(w))
default:return C.iaB(d,h,g,e,new C.fI2(w))}},
iaF(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),u=B.l(12),t=B.K(D.a_1,A.r,8),s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bv(B.l(6),B.iA(!0,w,w,A.y,D.fpU,new C.frr(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
ijI(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),w),B.E(B.as(new B.fG(1,B.cj(new C.fFB(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
i9Y(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xI,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fqJ(),B.T(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fVP(q[0],!1),A.bn,C.fVP(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4O(d.ay),v,v,v,v,v,v,D.fMi,v,v,v)
q=d.ay
w=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.fqK(),w),w.k("ak.E"))
q=B.c_(A.fT,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eP,u,v),D.fYB,A.am,s,A.aB,D.h5k,r,A.am,q,A.b4,B.A(B.a([B.E(B.bJ(D.fSx,v,d.CW?v:new C.fqL(d,e,f,g),v),1),A.ae,B.E(B.bJ(D.h7P,v,new C.fqM(d,e,f,g),v),1)],t),A.l,v,A.e,A.i,0,v,v)],t),A.l,v,A.e,A.i,0,A.p)},
ihY(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eP,v,w),B.o(w,B.b5(w,w,w,new C.btF(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fzf,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fT,B.iB(6,new C.fCv(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
iiN(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fEs(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eP,v,w),C.itf(new C.fEt(d,e,f,g),u)],x.p),A.l,w,A.e,A.i,0,A.p)},
igP(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),u=B.l(20),t=B.K(A.iL,A.r,12),s=x.V,r=B.a([new B.ab(0,A.G,A.w.j(0.45),A.dp,18)],s),q=x.p
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8v,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.afN,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.l(2),B.a([new B.ab(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eGc,A.n),w,w,w,A.f7,w,w,w,w),1),B.l0(A.bi,w,w,1,0,new C.fBk(d,f),d.dy),B.bJ(D.fXC,w,new C.fBl(d,e,g,f),w)],q),A.l,w,A.e,A.i,0,A.p)},
ib1(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xI,A.K,v,v),t=x.l,s=J.e3(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.bd,B.ay(v,B.x(B.iB(6,new C.frT(d,w),!0,t),A.l,v,A.mt,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.frU(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eP,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dO,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
igS(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xI,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iH,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aXU,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c6X,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fBw(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fW9,w,new C.fBx(d,e,g,f),w)],x.p),A.l,w,A.e,A.i,0,A.p)},
iaB(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkt(),k=e.d
k=k==null?n:k.c
w=C.is2(d)
v=D.aKd.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.kI,A.K,n,n)
u=B.l(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.G,w.c.j(0.35),A.eS,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,A.L9,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.mC,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.m(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.db,B.X(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aY,A.b3,A.x,t,n,n),A.n),n,n,n,A.f7,A.ac,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h6V,n,new C.fre(f,e,g,h),B.bp(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.co,n,n,n,n,n)),n)],k),A.l,n,A.e,A.i,0,A.p)},
Fx:function Fx(d,e){this.a=d
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
clh:function clh(){},
cli:function cli(){},
clg:function clg(){},
clj:function clj(){},
clf:function clf(){},
cll:function cll(){},
clm:function clm(){},
cle:function cle(d){this.a=d},
clk:function clk(){},
cld:function cld(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fI3:function fI3(d,e){this.a=d
this.b=e},
fHY:function fHY(d){this.a=d},
fHZ:function fHZ(d){this.a=d},
fI_:function fI_(d){this.a=d},
fI0:function fI0(d){this.a=d},
fI1:function fI1(d){this.a=d},
fI2:function fI2(d){this.a=d},
frr:function frr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frq:function frq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFB:function fFB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFA:function fFA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFz:function fFz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqJ:function fqJ(){},
fqK:function fqK(){},
fqL:function fqL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqM:function fqM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCv:function fCv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCu:function fCu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEs:function fEs(){},
fEt:function fEt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBk:function fBk(d,e){this.a=d
this.b=e},
fBl:function fBl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frU:function frU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frT:function frT(d,e){this.a=d
this.b=e},
fBw:function fBw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBx:function fBx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fre:function fre(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
inG(d){var w,v=B.T(d).k("Y<1>")
v=B.pI(new B.Y(d,new C.fNE(),v),120,v.k("M.E"))
w=B.cF(v,new C.fNF(),B.a3(v).k("M.E"),x.N).aN(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fNE:function fNE(){},
fNF:function fNF(){},
aiY(d,e){var w,v,u,t
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
eT1:function eT1(){},
aP0:function aP0(){},
hZN(){var w=$.Jv
if(w<=0)return;--w
$.Jv=w
if(w===0){w=$.hty
if(w!=null)w.$0()}},
cgy(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arJ(d){var w=0,v=B.j(x.H),u,t
var $async$arJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hc8.I(0,t)
w=4
return B.b(B.az(),$async$arJ)
case 4:w=3
return B.b(f.aE("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arJ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arJ,v)},
arI(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgy(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hc8.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arI)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arI,v)},
WR(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$WR)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.S(x.N,x.z)
w=1
break}p=A.V.aP(0,q,null)
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
return B.i($async$WR,v)},
b2r(d){return C.i__(d)},
i__(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2r=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2r)
case 6:s=f
w=7
return B.b(s.aE("String","ngmy_helper_ai_usage_v1",A.V.av(d,null)),$async$b2r)
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
return B.i($async$b2r,v)},
b2p(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afx(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bj(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afx(typeof v=="number"?A.o.D(A.h.M(v),0,999999):0,t)},
b2q(d,e){if(A.o.aq(e.bB(d.b).a,36e8)>=24)return new B.afx(0,e)
return d},
ch8(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$ch8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WR(),$async$ch8)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2q(C.b2p(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch8,v)},
ch9(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$ch9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WR(),$async$ch9)
case 3:t=g
s=Date.now()
r=C.b2q(C.b2p(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch9,v)},
i_0(d){var w,v,u,t=d.a,s=A.o.aq(t,1e6)
if(s<=0)return"0s"
w=A.o.aq(t,36e8)
v=A.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2s(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WR(),$async$b2s)
case 3:t=p.b2q(o.b2p(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2s)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2s,v)},
as2(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WR(),$async$as2)
case 3:t=s.b2q(r.b2p(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$as2)
case 5:w=4
return B.b(f.aE("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$as2)
case 4:case 1:return B.h(u,v)}})
return B.i($async$as2,v)},
as3(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$as3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WR(),$async$as3)
case 3:s=g
r=Date.now()
q=C.b2q(C.b2p(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2r(s),$async$as3)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as3,v)},
aiz(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiz=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hIL(a0))if(!C.hIK(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hIL(a0)?3:4
break
case 3:o=C.irI(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c96(e,o),$async$aiz)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hs0(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWH()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MT("text/plain"),$async$aiz)
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
case 13:case 9:w=C.hIK(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8R(e),$async$aiz)
case 17:m=f.htJ(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VT(e),$async$aiz)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hs1(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiz,v)},
i0n(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cjL(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cjL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hur(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$cjL)
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
return B.i($async$cjL,v)},
asM(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asM)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cD(0,A.cH.aL(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIy(m,p,n)
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
return B.i($async$asM,v)},
b3w(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i0n(q)?3:4
break
case 3:w=5
return B.b(C.cjL(q),$async$b3w)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asM(t)
w=1
break
case 4:if(A.a.Y(q,"NGMYLOCALSYNC1|")){u=C.asM(A.a.i(A.a.b_(q,15)))
w=1
break}w=A.a.Y(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asM(A.a.i(A.a.b_(q,15))),$async$b3w)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIy(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3w,v)},
huH(d){var w=d.bL
if(w>=0)return w
return 1},
aiL(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiL=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSR(d,e),$async$aiL)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HC(d,null,null,!1,!0,""),$async$aiL)
case 5:w=4
return B.b(t.$1(h),$async$aiL)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiL,v)},
iqs(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iY
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.iY
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.ig2(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hDe(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.aq(v,e)<=180)q.b="Reminder \u2014 "+A.o.aq(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hDf(v[2],v[4],v[3])
o=v[3]
m=B.cd(o==null?"":o,null)
if(m==null)m=0
l=B.c1(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bS(a0)
r.b=B.c1(B.bD(l),B.bM(l),B.bY(l),n,m,0,0,0).bS(-36e8)
if(r.bm().d5(s.bS(e)))r.b=J.c4(r.bm(),A.ox)
v=C.ikd(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c1(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bS(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hDf(o[1],o[3],o[2])
o=o[2]
g=B.cd(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c1(B.bD(l),B.bM(l),B.bY(l),h,g,0,0,0)
r.b=f.d5(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hDe(a1,w)}}v=x.N
return B.a([new B.kH("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ig2(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.cd(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.Y(r,"sec"))return new B.bf(1e6*A.o.D(s,5,86400))
if(A.a.Y(r,"hour")||A.a.Y(r,"hr"))return new B.bf(36e8*A.o.D(s,1,168))
return new B.bf(6e7*A.o.D(s,1,10080))}return null},
ikd(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hDf(d,e,f){var w,v=B.cd(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hDe(d,e){var w,v,u,t
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
i0I(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kq(d,80),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,Y,H,O,Z,P,E
J=c[1]
B=c[0]
A=c[2]
Q=c[81]
I=c[76]
R=c[84]
S=c[82]
K=c[42]
L=c[63]
T=c[83]
U=c[80]
M=c[39]
V=c[79]
W=c[54]
F=c[86]
N=c[72]
X=c[55]
C=a.updateHolder(c[3],C)
D=c[75]
G=c[21]
Y=c[35]
H=c[78]
O=c[53]
Z=c[85]
P=c[22]
E=c[77]
C.buU.prototype={
pb(d,e){return this.a.$2(d,e)}}
C.G9.prototype={
S(){return new C.aKD(this.$ti.k("aKD<G9.T,G9.S>"))}}
C.aKD.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hv(A.H_,v,null,null,w.$ti.k("hv<1>"))
u.e=w
u.Xg()},
bz(d){var w,v=this
v.bK(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQx()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hv(A.H_,w.b,w.c,w.d,w.$ti)}v.Xg()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.my(d,w)},
t(){this.aQx()
this.a2()},
Xg(){var w,v=this
v.d=v.a.c.lP(new C.feS(v),new C.feT(v),new C.feU(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hv(A.a08,w.b,w.c,w.d,w.$ti)},
aQx(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axX.prototype={
my(d,e){return this.e.$2(d,e)}}
C.an4.prototype={
S(){return C.i7r()},
bv(){return this.r.$0()}}
C.rc.prototype={}
C.aCK.prototype={
aev(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aev=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.ht6(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ht8(s),$async$aev)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aev,v)},
YJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asK(t.a.c),$async$YJ)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cgy(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arI(t.a.c),$async$YJ)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dm6(t,s))
if(!s)t.aev()
case 1:return B.h(u,v)}})
return B.i($async$YJ,v)},
ae5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bG9(),$async$ae5)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dmh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae5,v)},
Z(){var w,v,u=this
u.bz0()
$.tS=$.tS+1
w=u.a
$.bGe=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,ac<q,@>>")
w=B.B(new B.N(w,new C.dmz(),v),v.k("ak.E"))
u.f=w
u.ae5()
u.Ku()
u.YJ()
u.e=B.dh(A.ov,new C.dmA(u))},
Ku(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ku=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiM(t.a.d.bd)
w=3
return B.b(C.fYe(t.a.d.bd),$async$Ku)
case 3:s=e
if(t.c==null){w=1
break}C.aiM(t.a.d.bd)
if(s!=null)t.m(new C.dmp(t,s))
else t.m(new C.dmq(t))
case 1:return B.h(u,v)}})
return B.i($async$Ku,v)},
t(){C.b2c()
var w=this.e
if(w!=null)w.a1(0)
this.bz_()},
ajo(d,e,f){return this.cza(d,e,f)},
cza(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ikh(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aiN(t.a.d.bd),$async$ajo)
case 3:if(t.c==null){w=1
break}t.m(new C.dms(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajo,v)},
Jf(d,e){return this.ck6(d,e)},
c6W(d){return this.Jf(d,null)},
ck6(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uy(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRI(s)<=0){t.c.K(x.q).f.U(D.aVv)
w=1
break}}w=5
return B.b(C.arI(t.a.c),$async$Jf)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hc9(r,C.fSa(q.c),p),$async$Jf)
case 6:w=1
break
case 4:o=new C.dmk(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hD(r,new C.aFB(p,q.d,q.f,q.r,new C.dml(o),q.w,C.fSa(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hD(q,new C.an3(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dmm(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jf,v)},
c46(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiM(i.a.d.bd)
C.aiM(i.f)
w=C.ivj(i.a.c.a,i.f)
v=C.ikg(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bM
if(!u){t=A.d.gH(w)
u=B.l(14)
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
return B.o(h,B.x(B.a([D.h0W,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.p7,h,h,h),A.P,B.A(B.a([B.E(B.dV(A.Lr,new C.dmc(i,t),h),1),A.ae,B.E(B.bJ(D.haj,h,new C.dmd(i,t),h),1)],n),A.l,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dM(i.y,new C.dme(m),new C.dmf(i))
k=C.hiQ(m,i.a.c.a,i.r)
j=C.aRI(m)
u=B.l(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fTI,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.p7,h,h,h),A.ax,B.d(C.imX(m,i.a.c.a),h,h,h,h,h,h,A.Wf,h,h,h),A.P,B.bJ(D.h0c,h,new C.dmg(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)},
bVM(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.flq.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EJ(w[v])
t=A.h.D(u.d*0.58,0.12,0.3)
l.push(new B.rz(u.a,u.b,A.h.D(u.c*0.92,0,0.9),t).je())}s=A.d.gH(w)
w=B.l(16)
t=B.l(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i3,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.i,0,n,n),A.ax,B.d(d.c,n,2,A.a2,n,n,n,A.pY,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c4q,n,n,n,new C.dm8(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a0X,B.o(n,D.c2o,A.f,n,n,new B.n(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.h.T(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ab(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.n),n,92,n,A.el,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dm9(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nz:A.qr,k=m?A.iJ.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iJ:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.ci
if(!o.x)return C.aSg(n,l,B.as(B.n_(n,m?A.c:A.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fSa(o.a.c)
return new C.OA(o.a.w,w,!0,o.gaVB(),n)}w=B.aD(d,A.dD,x.w).w
v=B.l(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.G,A.w.j(0.04),A.cM,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.m(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wl(new C.dmw(o,f,g),n,$.aTM(),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.n),n,n,n,n,A.a19,n,n,1/0),A.T,o.c46()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbVL(),B.T(v).k("N<1,v>")))
w=B.ca(B.x(s,A.l,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.l(35)
v=B.a([new B.ab(0,A.G,A.w.j(m?0.28:0.08),A.i3,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aH(n,n,n,n,B.X(A.eK,j,n,n,n,18),n,n,n,o.gaVB(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.m(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.l(20)
return B.oO(!0,C.aSg(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OC,B.o(n,B.A(B.a([t,q,new B.D(A.iS,B.o(n,B.A(B.a([D.c_u,A.e7,C.asz(new C.dmx(o),A.kI,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d2,n,n,p,n,n,A.n),n,n,n,n,A.ho,n,n,n),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.n),n,60,n,n,A.n2,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dmy(o),x.K)},
aVC(){var w,v
this.a.bv()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j3(w,v)}}
C.aFB.prototype={
S(){return new C.bmG()},
hK(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aJR(){return this.r.$0()}}
C.bmG.prototype={
Z(){this.bA1()
this.d=B.Wh(this.a.d.bg)
$.tS=$.tS+1},
t(){C.b2c()
this.bA0()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ar7(v,new C.e_H(w),u,new C.e_I(w),new C.e_J(w,d),new C.e_K(w),null)}}
C.an3.prototype={
S(){return new C.aCJ(new B.at(A.aw,$.aw()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJR(){return this.z.$0()}}
C.aCJ.prototype={
Z(){this.byZ()
this.a.toString
$.tS=$.tS+1},
t(){C.b2c()
var w=this.d
w.V$=$.aw()
w.R$=0
this.byY()},
a3C(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OK()
w=5
return B.b(C.arI(t.a.c),$async$a3C)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hc9(s,C.fSa(r.c),q),$async$a3C)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uy(s.d.bd,A.a.i(r))
if(p!=null&&C.aRI(p)<=0){t.c.K(x.q).f.U(D.aVv)
w=1
break}}o=B.cX(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.U(D.ft3)
w=1
break}m=B.M7(t.a.c.a,new C.dm0(t))
if(m+0.001<n){t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJR()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d7(r,q.c.a,n,A.kr,A.fx,"Game bet: "+q.f,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.flc.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hD(s,new C.apX(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hD(s,new C.an5(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3C,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.Io,o,o,o,new C.dm3(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.l(12),h=x.p
j=B.eR(B.a([B.o(o,B.as(C.asz(new C.dm4(p),A.iH,k.c.a),o,o,o),A.f,o,o,new B.n(A.d2,o,o,i,o,o,A.n),o,o,o,D.bDY,A.f3,o,o,o)],h),o,o,!0,!0,D.a04,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.l(16)
i=B.K(A.aT,A.r,1)
k=B.X(D.bRd,D.bxC,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mC,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.p7,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.l(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dm5(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.i,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.o(o,B.x(B.a([D.hbZ,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.l(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lY,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.l(12)
r=B.K(B.a0(102,A.a83.l()>>>16&255,A.a83.l()>>>8&255,A.a83.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.l(10)
q=B.o(o,B.x(B.a([D.fT4,B.d("+ $"+A.h.ad(n*0.46,2),o,o,o,o,o,o,D.fIM,o,o,o),B.d("(46% return on $"+A.h.ad(p.e,2)+" bet)",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.l(10)
u=B.o(o,B.x(B.a([D.h1d,A.P,q,A.P,B.o(o,B.x(B.a([D.fNR,B.d("$"+A.h.ad(m,2),o,o,o,o,o,o,D.fxr,o,o,o),B.d("8 pairs \xd7 $"+A.h.ad(m,2)+" each",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(D.bsX,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fu(o,o,A.bi,o,o,o,o,o,o,A.c,o,A.hg,o,o,o,o,o,o,o,o)
return C.aSg(j,D.a04,B.ca(B.o(o,B.x(B.a([k,A.ax,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iz(B.d("Start Game ($"+A.h.ad(p.e,2)+")",o,o,o,o,o,o,A.ce,o,o,o),p.gcD7(),r),o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.caF,A.n),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A.a1c,o,o,A.ah))}}
C.an5.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aCL(A.cT,new B.at(A.aw,$.aw()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aCL.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rW(d){return this.bTU(d)},
bTU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AP()
r=t.Pv()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acv(d),$async$rW)
case 5:w=1
break
case 4:q=A.h.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uA(d),$async$rW)
case 9:w=7
break
case 8:w=10
return B.b(t.Fd(q,s,r),$async$rW)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rW,v)},
FQ(d,e,f,g){return this.cAQ(d,e,f,g)},
cAQ(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FQ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHg(s,C.bGX(),C.hkX(),d,e,f,g),$async$FQ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FQ,v)},
AP(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5Z(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aiY(t,s.e.a.a)
case"memory":return s.ghR()&&D.nc.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAR()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bg
case"color":return s.bd
case"reflex":return s.a0
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAR(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Pv(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hiU()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bK(d)
if(u.f||u.c7)return
w=u.a
v=C.fSf(w.e,w.d.y2)
if(v!==C.fSf(d.e,d.d.y2)&&u.c!=null)u.m(new C.dnT(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bz2()
w=i.a
w.toString
$.tS=$.tS+1
i.Q=C.fSf(w.e,w.d.y2)
i.b8Q()
i.adQ()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PT()
i.adt()
i.bn=B.dh(A.h0,new C.dnW(i))}if(A.d.q(D.SR,i.a.e)){w=i.ghR()
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2a(!1,w,k.length===0||A.a.q(k,"@")?C.hiQ(u,v,null):k,p,l,s)}else{w=w.c
w=C.hcd(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.hcd(w.c,w.a)}v=C.i0P()
v.bsH(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uy(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.bej(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.Uk
else j=w.f===!0?D.r5:D.JI
i.AR(j)}}}i.b2=B.dh(A.n1,new C.dnX(i))
if(i.ghR())i.bi=B.dh(A.n0,new C.dnY(i))}if(i.ghR()&&!A.d.q(D.SR,i.a.e))i.bi=B.dh(A.n0,new C.dnZ(i))
i.as=B.dh(A.fM,new C.do_(i))},
PT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uy(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFb(p,t.a.c.a),$async$PT)
case 5:o=e
if(t.c!=null)t.m(new C.dn8(t,o))
w=1
break
case 4:w=6
return B.b(C.LY(q,t.a.d.bd,!1),$async$PT)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFb(n,t.a.c.a),$async$PT)
case 7:o=e
if(t.c!=null)t.m(new C.dn9(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
aku(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aku=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LY(r,s.d.bd,!1),$async$aku)
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
t.aQj(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.h.M(j)
else{h=j==null?null:J.k(j)
i=B.cd(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dnC(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dnD())}case 1:return B.h(u,v)}})
return B.i($async$aku,v)},
adt(){var w=0,v=B.j(x.H),u=this
var $async$adt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a1V(!0),$async$adt)
case 2:return B.h(null,v)}})
return B.i($async$adt,v)},
a1V(d){return this.cq4(d)},
cq3(){return this.a1V(!1)},
cq4(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1V=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.LY(q,s.d.bd,b3),$async$a1V)
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
if(!new B.V(Date.now(),0,!1).d5(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.is5(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bI
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dno(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dnp(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d5(s)){s=s.bB(b1).a
r=A.o.aq(s,1e6)
t.m(new C.dnq(b2,t,r+(A.o.F(A.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.m(new C.dnr(b2,t))
b2=t.a.e
if(b2==="pattern")t.aai()
else if(b2==="memory"){t.b8P()
if(t.c!=null)t.m(new C.dns())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a1V,v)},
aRg(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e3(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRf(){return this.aRg(null)},
aai(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aai=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cnx()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.LY(q,s.d.bd,!1),$async$aai)
case 5:r=t.b4K(e)
case 4:if(t.c==null){w=1
break}t.aRg(r)
t.m(new C.dmB(t))
t.Eq()
case 1:return B.h(u,v)}})
return B.i($async$aai,v)},
b4K(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.h.M(v)
u=v==null?t:J.k(v)
return B.cd(u==null?"":u,t)},
cnx(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4K(C.uy(w.d.bd,v))},
adQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$adQ)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dn7(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adQ,v)},
pB(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pB)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHJ().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aE("Int","ngmy_game_"+n+"_"+o,r),$async$pB)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pB,v)},
a3U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.aZ==null||t.f||t.aY){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LY(r,s.d.bd,!1),$async$a3U)
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
break}s=t.aZ
s.toString
r=t.a
s.bej(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Uk
else k=r.f===!0?D.r5:D.JI
w=7
return B.b(t.AR(k),$async$a3U)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dnE())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a3U,v)},
ail(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ail=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.aZ==null||q.a.Q==null||q.aY){w=1
break}q.aY=!0
t=3
o=q.aZ
o.toString
p=o.cTp(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSG(n,o,p),$async$ail)
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
return B.i($async$ail,v)},
AR(d){return this.c0f(d)},
c0f(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$AR=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.K3(s,s),$async$AR)
case 9:w=4
break
case 6:w=10
return B.b(t.Z4(s,s),$async$AR)
case 10:w=4
break
case 7:w=11
return B.b(t.acu(s,s),$async$AR)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghR()?12:13
break
case 12:w=14
return B.b(t.Iv(),$async$AR)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$AR,v)},
a0T(d,e){return this.chQ(d,e)},
chQ(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a0T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.ail(),$async$a0T)
case 6:if(d===D.r4){w=1
break}w=4
break
case 5:if(d===D.r4){w=1
break}case 4:w=7
return B.b(t.AR(d),$async$a0T)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a0T,v)},
adJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adJ=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.aSG(t.a.d.bd,q,l),$async$adJ)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$adJ,v)},
Iv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iv=B.e(function(d,e){if(d===1)return B.f(e,v)
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
C.hly(t.a.d.bd,q,n)
C.ivw(t.a.d.bd,q)
w=3
return B.b(C.aiN(t.a.d.bd),$async$Iv)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iv,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adJ()
else if(!v.f)v.c6X()
C.b2c();++v.RG
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
v.bz1()},
cGr(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c7)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.uA("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dnN())},
b8Q(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e3(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b8P()
break
case"scramble":r.bg=0
r.b8R()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e3(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzr[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.cg)
break
case"math":r.y2=0
r.b8O()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b8S()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e3(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csv()){w=J.e3(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RI()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRf()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Eq()}break
case"color":r.bd=0
r.b8J()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.ba4()
break
default:if(A.d.q(D.SR,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5Z(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csv(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b8S(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e3(o,x.S)
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
b8O(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHJ().length-6)u.at=0
w=$.bHJ()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b8R(){var w=this,v=w.w=D.dac[A.o.F(w.at+w.bg,105)]
w.ax=C.ivN(v)
w.ay=B.c0(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.cg)},
ba4(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.dx(0,0,0,120+w.d.aw(280),0,0),new C.dnB(w))},
c0i(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rW("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.aq(new B.V(v,0,!1).bB(u).a,1000)}if(w<520){t.m(new C.dn5(t))
v=t.a0
if(v>=5){t.pB()
t.uA("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.ba4()
t.m(new C.dn6())}}else t.rW("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cFF(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dnI())
if(u<0)return
t.m(new C.dnJ(t,u,v,d))},
cFG(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dnK(u,d,v))},
bKH(){var w,v,u=this
if(u.f)return
if(A.d.aU(u.ay,new C.dmC())){u.c.K(x.q).f.U(D.fsY)
return}w=A.d.hg(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dmD(u))
if(u.ghR()&&D.nc.q(0,u.a.e))u.a29()
if(u.bg>=5){u.pB()
if(u.ghR()&&D.nc.q(0,u.a.e))u.nm(!0)
else u.uA("All 5 words unscrambled!")}else{u.b8R()
u.r="Word "+(u.bg+1)+" of 5 \u2014 place letters in order"
u.m(new C.dmE())}}else u.rW("Wrong word \u2014 paid for "+u.bg+"/5.")},
b8J(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aK=v[u]
w.aR=[A.dP,A.dL,A.im,A.tC][u]
w.w=t},
aQj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.ia(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cu),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.h.M(m):B.cd(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.h.M(m):B.cd(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.h.bh(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.t(j,g))
i=f==null?null:A.h.M(f)
if(i!=null)h.fx=i}},
b8P(){var w,v,u,t,s,r,q,p=this
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
q=B.cd(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e_()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQj(s)}else A.d.e0(p.fr,p.d)},
cpo(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dnh(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dni(t,v,u))
if(t.ghR()&&D.nc.q(0,t.a.e))t.a29()
if(t.go.a>=t.fr.length){t.pB()
if(t.ghR()&&D.nc.q(0,t.a.e))t.nm(!0)
else t.aAU()}return}t.k1=!0
B.bO(D.bCW,new C.dnj(t),x.c)},
b8c(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dnt(u))
if(u.y1>=5){u.pB()
u.uA("All 5 questions correct!")}else{u.b8S()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dnu())}}else u.rW(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dnv(u))
if(u.y2>=6){u.pB()
u.uA("All 6 math questions correct!")}else{u.b8O()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dnw())}}else{u.X1(u.y2+1)
u.rW(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dnx(u))
if(u.bd>=5){u.pB()
u.uA("All 5 color rounds correct!")}else{u.b8J()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dny())}}else u.rW("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pB()
u.aAU()}else u.c.K(x.q).f.U(D.ftI)},
cFE(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cm(q.k4,0)
v=A.o.aq(d,3)
u=A.o.F(d,3)
t=A.o.aq(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dnH(q,d,w))
if(A.d.hg(q.k4)==="123456780"){q.pB()
q.aAU()}}},
RI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dnk(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnl(t,q).$0()
t.c.eq()
w=6
return B.b(B.bO(A.kV,null,r),$async$RI)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dnm(t).$0()
t.c.eq()
w=7
return B.b(B.bO(A.k4,null,r),$async$RI)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dnn(t))
case 1:return B.h(u,v)}})
return B.i($async$RI,v)},
cFH(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rW("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dnL(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pB()
u.uA("Perfect Simon run!")
return}u.m(new C.dnM(u))
u.RI()}},
Eq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Eq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dmF(t))
s=x.H
w=3
return B.b(B.bO(A.jq,null,s),$async$Eq)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dmG(t,o).$0()
t.c.eq()
w=7
return B.b(B.bO(A.a0O,null,s),$async$Eq)
case 7:if(t.c==null){w=1
break}new C.dmH(t).$0()
t.c.eq()
w=8
return B.b(B.bO(A.iQ,null,s),$async$Eq)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dmI(t))
case 1:return B.h(u,v)}})
return B.i($async$Eq,v)},
X1(d){return this.bFi(d)},
bFi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X1)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHJ().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aE("Int","ngmy_game_"+q+"_"+r,o),$async$X1)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X1,v)},
cFB(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rW("Wrong tile \u2014 paid for "+v.aAR()+"/"+C.hiU()+" moves.")
return}v.m(new C.dnF(v,w))
if(v.ghR()&&D.nc.q(0,v.a.e))v.a29()
if(v.x1>=w)if(v.x2>=7){v.pB()
if(v.ghR()&&D.nc.q(0,v.a.e))v.nm(!0)
else v.uA("All 7 pattern rounds correct!")}else{v.m(new C.dnG(v))
v.Eq()}},
K3(d,e){return this.cnN(d,e)},
uA(d){return this.K3(null,d)},
aAU(){return this.K3(null,null)},
cnN(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dnf(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d7(q,s.c.a,r,A.h8,A.fx,"Game payout: "+s.f,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiJ(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.h.ad(r,2)+" added to your balance!":e
s=t.a
C.vd(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FQ(d,o,"YOU WIN!",!0),$async$K3)
case 3:w=4
return B.b(C.aiB(t.a.f,o),$async$K3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K3,v)},
FO(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nc.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.czU(),$async$FO)
case 5:w=1
break
case 4:s=t.AP()
r=t.Pv()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acv("Time's up \u2014 no progress to pay."),$async$FO)
case 8:w=1
break
case 7:q=A.h.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uA("Complete! Max payout earned."),$async$FO)
case 12:w=10
break
case 11:w=13
return B.b(t.Fd(q,s,r),$async$FO)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FO,v)},
RP(d){return this.cs9(d)},
a29(){return this.RP(!1)},
cs9(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RP=B.e(function(b2,b3){if(b2===1){s.push(b3)
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
a4=C.uy(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.LY(q,r.a.d.bd,!1),$async$RP)
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
J.aJ(k,p,r.AP())
J.aJ(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
i=a2.b(j)?B.a1(j,a3,a5):B.S(a3,a5)
a6=r.id
a6=B.B(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aR(x.S)
for(a6=i,a6=new B.dn(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.h.M(f):B.cd(J.k(f),null)
if(e!=null)J.c4(h,e)}}a6=h
a6=B.B(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aSG(r.a.d.bd,q,m),$async$RP)
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
return B.i($async$RP,v)},
nm(d){return this.czV(d)},
czU(){return this.nm(!1)},
czV(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FO(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RP(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.LY(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.Pv()
w=o==null?8:9
break
case 8:m=A.h.D(t.AP()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acv("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uA("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Fd(m,t.AP(),n),$async$nm)
case 18:case 15:case 11:w=19
return B.b(t.Iv(),$async$nm)
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
if(a0==null)a0=t.AP()
d=B.aI(e.h(0,j))
a1=d==null?null:A.h.M(d)
if(a1==null)a1=0
a2=A.h.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.acv("Time's up \u2014 no progress to pay."),$async$nm)
case 22:w=23
return B.b(t.Iv(),$async$nm)
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
t.m(new C.dnz(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.h.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d7(h,b0,a9,A.h8,A.fx,d,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.h.ad(a9,2)+" (includes opponent bonus $"+A.h.ad(a7,2)+")":"+$"+A.h.ad(a8,2)+" (your progress payout)"
s=t.a
C.vd(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FQ(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Iv(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fd(d,e,f){return this.cnL(d,e,f)},
cnL(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fd=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dnd(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d7(s,q.c.a,r,A.h8,A.fx,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiJ(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.h.T(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aiY(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cB(t.cy,0,new C.dne()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.h.ad(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.h.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vd(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FQ(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fd)
case 3:w=4
return B.b(C.aiB(t.a.f,j),$async$Fd)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fd,v)},
c6X(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AP()
v=o.Pv()}catch(u){return}if(v<=0||w<=0)return
t=A.h.D(w/v,0,1)
s=B.op(A.h.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d7(q,p.c.a,s,A.h8,A.fx,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cv,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vd(s,n,"Left early \xb7 +$"+A.h.ad(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
acu(d,e){return this.bVG(d,e)},
bVG(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acu=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.d7(r,q,p,A.h8,A.fx,"Game payout: "+s+" (draw, stake returned)",null,null,A.cv,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vd(o,null,"Draw. Your $"+A.h.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FQ(d,"Nobody won, so your $"+A.h.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acu,v)},
Z4(d,e){return this.bVH(d,e)},
acv(d){return this.Z4(null,d)},
bVH(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Z4=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(t.FQ(d,e,"YOU LOSE",!1),$async$Z4)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Z4,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.aq(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.asU,n,n,n,new C.dnO(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bI
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bI):t.f,n,2,A.a2,n,n,n,A.fF,n,n,n),1)
r=B.l(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asz(new C.dnP(o),A.o5,t.c.a),A.f,n,n,new B.n(A.d2,n,n,r,n,n,A.n),n,n,n,n,A.hn,n,n,n)],q),A.l,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.l(10)
s=B.o(n,B.A(B.a([B.E(B.d("Win $"+A.h.ad(t.x*1.46,2)+" \xb7 stake $"+A.h.ad(o.a.x,2)+" \u2022 Progress "+o.AP()+"/"+o.Pv(),n,n,n,n,n,n,D.fD_,n,n,n),1),new C.arK(o.a.c.a,new C.dnQ(o),n),A.ae,D.bVX,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o7,n,n,n)],q),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hm,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.dnR(),m),m.k("ak.E"))
w=B.l(14)
v=B.K(A.aT,A.r,1)
p=C.aSg(n,D.bgT,B.bm(!0,new B.D(A.Oz,B.x(B.a([r,s,A.P,new B.fh(new C.dnS(o),n),A.am,B.E(B.o(n,o.bVF(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cq,n,n,n),1)],q),A.al,n,A.e,A.i,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iN.l()>>>16&255,A.iN.l()>>>8&255,A.iN.l()&255)
v=B.l(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.dr(!1,B.o(n,B.x(B.a([D.fp_,A.af,B.d(o.cT,n,n,n,n,n,n,D.fEy,A.K,n,n),A.am,B.d(o.bT,n,n,n,n,n,n,D.fCG,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.n),n,n,n,A.t9,A.z6,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c7W(){var w=this.k3
return B.cj(new C.dnc(this,w,A.h.cC(this.fr.length/w)))},
bVF(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c7W()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Words "+o.bg+"/5",n,n,n,n,n,n,A.Fj,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.m(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fT,B.iB(o.ay.length,new C.dmV(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fT,B.iB(o.ch.length,new C.dmW(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iz(D.h4U,o.gbKG(),B.fu(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.co,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.au4(m,o.e,new C.dmX(o),new C.dmY(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fj,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(new B.dv(A.dB,A.z,A.f,B.d(w,n,n,n,n,n,n,A.mC,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dmZ(o),B.T(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.cj(new C.dn_(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fj,n,n,n),A.P,B.E(B.l_(1,B.iB(4,new C.dn0(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.cj(new C.dn1(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dP,A.dL,A.im,A.tC]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pY,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fj,n,n,n)
v=o.aK
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.m(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e3(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fu(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fi,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a5(1/0,n,B.iz(B.d(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dn2(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bi:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.acf,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fzT,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.m(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aD(s,A.bX,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qo(B.ay(A.c_,B.cU(n,B.x(B.a([w,A.P,v,A.b4,s,A.b4,new B.D(A.Hb,B.d(m,n,n,n,n,n,n,B.m(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.i,0,A.p),p,n,A.b0,n,I.Cz,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0h(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SR,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.ikQ(m,new C.dn3(o),new C.dn4(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anS.prototype={
S(){return new C.bjK()},
cZd(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjK.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aD(a3,A.dD,a0).w
a0=B.aD(a3,A.dD,a0).w
v=x.p
u=B.a([B.bUn(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bM(s)),2,"0")
q=A.a.b_(A.o.v(B.bD(s)+1),2)
p=B.l(18)
o=B.K(A.Cj,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.G,B.a0(89,A.rF.l()>>>16&255,A.rF.l()>>>8&255,A.rF.l()&255),A.eS,20),new B.ab(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dp,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.l(10)
j=B.K(A.Cj,A.r,3.4)
n=B.a([new B.ab(0,A.G,B.a0(166,A.rF.l()>>>16&255,A.rF.l()>>>8&255,A.rF.l()&255),A.dM,10),new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dmg,D.cWx,d),A.n),d,42,d,d,d,d,d,56),A.b4,e.bb_(a3,!0)],v),A.l,d,A.e,A.i,0,d,d)
k=B.Ek(t.a,1,A.a2,D.fHW)
j=t.b
i=t.c
h=B.Ek("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fIa)
g=B.Ek(e.b5L(j),1,A.a2,D.fAK)
q=B.A(B.a([B.E(B.x(B.a([D.fYI,B.Ek(a1.c,1,A.a2,D.aXy)],v),A.E,d,A.e,A.i,0,A.p),1),B.x(B.a([D.fYt,B.d(r+"/"+q,d,d,d,d,d,d,D.aXy,d,d,d)],v),A.dO,d,A.e,A.i,0,A.p)],v),A.l,d,A.e,A.i,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yv.l()>>>16&255,D.yv.l()>>>8&255,D.yv.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atJ("INVESTED","$"+B.dG(j),!0),e.atJ("DAILY ROI",A.h.ad(i*100,2)+"%",!0),e.atJ("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j_,A.i,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h4q,A.rg,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fX5,A.bF,k,A.ax,h,A.ax,g,A.P,q,A.am,r,A.am,i,A.ax,B.Ek("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHh)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cbw,A.n),d,d,d,d,A.bH,d,d,1/0),A.abA],v))}u.push(D.fOD)
u.push(A.rg)
A.d.u(u,new B.N(a2,new C.drs(e,a3),B.T(a2).k("N<1,v>")))
return B.c5(d,A.L,B.bm(!1,B.ca(B.x(u,A.E,d,A.e,A.i,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bb_(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(8),t=B.K(A.k0,A.r,1)
return B.o(w,B.A(B.a([B.X(A.a3v,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.eQ,w,w,w)},
b5L(d){var w=A.a.b1(A.o.v(A.h.T(d*100)),4,"0")
return"****  ****  ****  "+A.a.b_(w,w.length-4)},
atJ(d,e,f){var w=null,v=B.a0(217,D.yv.l()>>>16&255,D.yv.l()>>>8&255,D.yv.l()&255)
v=B.d(d,w,w,w,w,w,w,B.m(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Ek(e,w,w,B.m(w,w,A.Cg,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cpT(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd34(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ab(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.UF,16),new B.ab(0,A.G,B.a0(115,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),A.dp,14),new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.l(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.h.T(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ab(0.5,A.G,k,A.J,14),new B.ab(0,A.G,j,A.J,6),new B.ab(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.ca5,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eFB],h),d),d),A.b4,e.bb_(b2,!0)],h),A.l,d,A.e,A.i,0,d,d)
a6=B.Ek(a6,1,A.a2,D.fx8)
i=B.Ek(e.b5L(a3),1,A.a2,D.fMR)
j=B.A(B.a([e.b5b(A.h.ad(2.86,2)+"%"),A.e7,e.b5b("261d")],h),A.l,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fPY,B.Ek("$"+B.dG(a3),1,A.a2,D.fLA)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.fxZ,d,d,d)],h),A.dO,d,A.e,A.i,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.l()>>>16&255,A.bz.l()>>>8&255,A.bz.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aB8("Daily","$"+B.dG(a4)),1),A.e7,B.E(e.aB8("Total","$"+B.dG(a4*261)),1),A.e7,B.E(e.aB8("Days","261"),1)],h),A.l,d,A.e,A.i,0,d,d)
g=q?d:new C.drr(e,b3,a3,t)
f=A.h.T(127.5)
f=B.fu(d,d,A.bs,B.a0(f,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.l(10),D.b6H),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fZr,A.bF,a6,A.cS,i,A.fE,j,A.fE,m,A.fE,k,A.fE,l,A.P,new B.a5(1/0,40,B.iz(new B.dv(A.dK,A.z,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fyv,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.cc7,A.n),d,d,d,A.kA,D.bEJ,d,d,1/0)},
b5b(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.d(d,w,w,w,w,w,w,D.fxx,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.za,w,w,w)},
aB8(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(7),t=B.K(A.bm,A.r,1)
return B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fHD,w,w,w),A.rh,new B.dv(A.dB,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fKz,w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)}}
C.ajV.prototype={
S(){var w=null,v=B.a([],x._),u=$.aw()
return new C.azM(v,new B.at(A.aw,u),new B.at(A.aw,u),B.mP(0,w,w),new B.i6(),D.U9,C.aiy(),B.a([],x.fw),B.aR(x.N),B.mP(0,w,w))}}
C.azM.prototype={
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.Ae(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aK
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.adV()
r.PS()
r.atk()
r.cCU()
r.cD9()
$.aU.x1$.push(new C.cOa(r))
r.a.toString},
PS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as8(),$async$PS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cNv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PS,v)},
gaCM(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPM())return!0
return!1},
gPM(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYB(){var w,v=this.CW
if(v==null)return A.bC
w=v.bB(new B.V(Date.now(),0,!1))
return w.a<0?A.bC:w},
bG5(){var w=this
if(w.a.c.w)return
if(w.gPM()){if(!w.cx)w.m(new C.cNl(w))}else if(w.cx)w.m(new C.cNm(w))},
cw8(){this.m(new C.cNF(this))},
uJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cNC(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cND(t))
w=1
break}w=3
return B.b(C.ch8(o.a,s),$async$uJ)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.ch9(t.a.c.a,s),$async$uJ)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNE(t,r,q))
t.cF2()
t.bG5()
if(r===3)t.a_a(r)}case 1:return B.h(u,v)}})
return B.i($async$uJ,v)},
a_a(d){return this.c7O(d)},
c7O(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHk(q,r,new C.cNx(t),d,s.c.a),$async$a_a)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_a,v)},
yf(d){return this.bHC(d)},
atk(){return this.yf(!1)},
bHC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9u(k,C.hIT(l.d)),$async$yf)
case 3:j=m
w=4
return B.b(C.chA(k),$async$yf)
case 4:s=j.a=f
w=5
return B.b(B.at0(k),$async$yf)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WU(!0,l,q,p)
m.a=s
w=8
return B.b(C.asa(k,s),$async$yf)
case 8:case 7:w=9
return B.b(C.VT(k),$async$yf)
case 9:o=f
w=10
return B.b(C.a8R(k),$async$yf)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cNn(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yf,v)},
Rk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Rk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PS(),$async$Rk)
case 3:s=t.c
if(s==null){w=1
break}r=B.ee(new C.cNA(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).ce(r),$async$Rk)
case 4:w=5
return B.b(t.PS(),$async$Rk)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Rk,v)},
cHh(){this.m(new C.cNY(this))},
cD9(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dh(A.t4,new C.cNS(w))},
cF2(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPM()||w.CW==null)return
w.id=B.dh(A.fM,new C.cNV(w))},
cCU(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dh(A.jJ,new C.cNR(w))
w.FW()},
FW(){return this.cF1()},
cF1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aK
t=4
w=7
return B.b(B.az(),$async$FW)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.V.aP(0,p,null)
if(x.f.b(o)){m=B.E1(B.a1(o,x.N,x.z)).aK
i.a=m
r.a.f.aK=m}}w=10
return B.b(B.Ma(),$async$FW)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSf(),$async$FW)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aK=l
w=14
return B.b(q.aE("String","app_config",A.V.av(k.aj(),null)),$async$FW)
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
break}if(i.a!==r.ay)r.m(new C.cNT(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FW,v)},
b9H(){A.d.b0(this.f,new C.cNQ())},
adV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O1(t.a.c.a),$async$adV)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b0(s,new C.cNs())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cNt(t,s))
t.a35(!0)
B.bO(A.jq,new C.cNu(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$adV,v)},
ahK(){var w=0,v=B.j(x.H),u=this
var $async$ahK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apH(u.a.c.a,u.f),$async$ahK)
case 2:return B.h(null,v)}})
return B.i($async$ahK,v)},
bz(d){this.bK(d)},
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
acS(d){var w,v=this
v.m(new C.cNq(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BV(d,A.ck,A.kV)
else $.aU.x1$.push(new C.cNr(v,d))
if(d===0)v.a35(!0)
if(d===1)v.cyb(!0)},
a35(d){$.aU.x1$.push(new C.cNI(this,d))},
aCp(){return this.a35(!1)},
a2p(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2L(),$async$a2p)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cNB(t))
case 1:return B.h(u,v)}})
return B.i($async$a2p,v)},
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
return B.b(C.as3(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uJ(),$async$nl)
case 10:q.m(new C.cNJ(q))
w=1
break
case 8:w=11
return B.b(q.uJ(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_a(3)
case 6:case 4:q.m(new C.cNK(q,c5))
C.VF(q.a.c.a,"user",c5)
q.aCp()
t=13
a8={}
w=16
return B.b(q.a2p(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2L(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cNL(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFp("",null)
q.m(new C.cNM(q,p))
C.VF(q.a.c.a,"ai",p)
q.aCp()
r=[1]
w=14
break}o=B.nk(a9)
a9=q.a
n=""
m=C.hIT(a9.d)
w=C.hIM(c5)?20:21
break
case 20:w=22
return B.b(C.chz(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yf(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9u(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i0I(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bM(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bY(b3)),2,"0")
b5=A.a.b1(A.o.v(B.dg(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fW(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VT(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hs1(i,25)
w=26
return B.b(C.a8R(q.a.c.a),$async$nl)
case 26:g=c9
f=C.htJ(g)
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
return B.b(C.aiz(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hIM(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.inG(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hW2(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.ri(o,a2,A.i1,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFp(a8.a,a3.a)
a4=c2
a5=B.hI2(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.iqs(c5),x.an)
a6=a9
J.h1(a6,C.iqt(c5))
J.h1(a6,C.iqu(c5))
J.h1(a6,B.hHt(c5))
J.h1(a6,C.iqx(c5,q.a.c.w))
a8.b=a6}c3=C.ipD(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiQ(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cNN(a8,q,a7))
C.VF(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KK(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cNO(q))
C.VF(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cNP(q))
q.aCp()
q.ahK()
if(!q.a.c.w)q.uJ()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
coO(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
coP(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.iY
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckI(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KK(d){return this.cwG(d)},
cwG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiL(p,o,new C.cNG(t,p)),$async$KK)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HC(p,null,o,!1,!0,t.a.c.a),$async$KK)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.K(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lN,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HC(p,l.f,o,k,n,j),$async$KK)
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
return B.b(C.b0v(p,B.a([new C.rQ("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KK)
case 14:t.atk()
case 13:p=t.c.K(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dn,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KK,v)},
T2(d){return this.cFv(d)},
cFv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiL(d,n,new C.cNX(t)),$async$T2)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HC(d,null,n,!1,!0,t.a.c.a),$async$T2)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(B.b2(null,null,null,A.c9,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.lN,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HC(d,q.f,r,p,n,o),$async$T2)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(B.b2(null,null,null,A.dn,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T2,v)},
cyb(d){$.aU.x1$.push(new C.cNH(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cp,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.al1,D.bo6],w):B.a([A.aN,A.yq],w)
v=B.l(22)
u=B.a([new B.ab(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckm():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hgZ(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dl,l,l,l)
s=B.o(l,l,A.f,l,l,D.b8O,l,8,l,l,l,l,l,8)
if(m.gaCM()&&m.d===0)q=m.gPM()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bc,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.m(l,l,B.a0(A.h.T(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cD,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aH(l,l,l,l,A.nR,l,l,l,new C.cO2(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.n),l,l,l,E.amZ,D.bFw,l,l,l)
v=k?D.uq:A.c
u=B.l(14)
t=B.K(k?A.bw:A.dS,A.r,1)
u=B.o(l,B.A(B.a([m.bKr(),m.cFe(1,A.lr,"Music")],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCM()){v=B.a([],p)
if(m.gPM()){s=B.a0(38,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255)
r=B.l(12)
q=B.K(B.a0(115,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255),A.r,1)
v.push(new B.D(A.OA,B.o(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i_0(m.gaYB())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fK_,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPM()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.l(12)
q=B.l(12)
o=B.X(A.kb,k?A.iz:A.hL,l,l,l,16)
v.push(new B.D(A.OA,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.m(l,l,k?A.iz:A.hL,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcw7(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHg():l
v.push(B.E(new C.as6(s,q,new C.cO3(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.i,0,A.p)}else v=m.bKs(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.huH(r)
t=B.a([w,A.af,new B.D(A.hZ,u,l),A.P,B.E(B.hvF(B.a([v,new C.as9(q,o,n,new C.cO4(m,d),s,l)],p),A.t,t,A.y,new C.cO5(m),l),1)],p)
if(m.d===0&&!m.gaCM()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6E:D.a5U
w.push(new B.a5(l,36,B.hW(l,new C.cO6(m),v.length,l,l,A.aM,new C.cO7(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.m(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.m(l,l,k?A.aE:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.l(22)
o=B.l(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CI,l,l,l,l,!0,new B.b6(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cO8(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWk,l,l),1)
s=m.at
r=s?l:m.gczb()
w.push(B.A(B.a([u,new B.JR(v,A.aN,l),A.bn,B.aE(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyp:L.asM,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.ai)],p),A.dO,l,A.e,A.i,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lI:A.c
t.push(B.uz(A.uf,B.o(l,new B.D(A.CD,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.uf,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XK(i,new C.cO9(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKr(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.T(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.T(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(A.v_,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.ay(q,B.cU(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNo(this),q,q,q,q,q,q,!1,A.a4),1)},
cFe(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.T(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.T(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bn,B.d(f,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cU(q,B.A(r,A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNW(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKs(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.buF:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.l(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.o(s,B.ks(!0,s,t.ok,new C.cNp(t,e,d),u,s,A.bT,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.n),s,s,s,A.hZ,s,s,s,s)},
aRT(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iY:this.coP(d),k=m?A.mt:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hgZ(this.a.f.Q,28),o),A.ae],j))
w=m?A.dO:A.E
j=B.a([],j)
if(h)j.push(D.eyG)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_K:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ab(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dM,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.m(o,o,e?A.aE:A.dZ,o,o,o,o,o,o,o,o,12,A.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.d(n,o,o,o,o,o,o,B.m(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hcH(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,X.wG,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hI7(l,e,this.gcFu()))
i.push(new B.df(1,A.cl,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dO,o,k,A.i,0,o,o),o)},
bKq(d,e){return this.aRT(d,e,!1)}}
C.aN8.prototype={
Z(){this.a3()
$.zf().aV(0,this.gF6())},
t(){$.zf().a6(0,this.gF6())
this.a2()}}
C.aN9.prototype={
Z(){this.a3()
$.zf().aV(0,this.gF6())},
t(){$.zf().a6(0,this.gF6())
this.a2()}}
C.aNa.prototype={
Z(){this.a3()
$.zf().aV(0,this.gF6())},
t(){$.zf().a6(0,this.gF6())
this.a2()}}
C.aO7.prototype={
Z(){this.a3()
$.zf().aV(0,this.gF6())},
t(){$.zf().a6(0,this.gF6())
this.a2()}}
C.Xz.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apq.prototype={
S(){return new C.aER()}}
C.aER.prototype={
Z(){var w,v=this
v.a3()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
li(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B1(d,e){return this.cL_(d,e)},
cL_(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dHZ(q,e))
t=3
w=6
return B.b(d.$0(),$async$B1)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dI_(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B1,v)},
Bu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Bu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.vh(r,q),$async$Bu)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHQ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Bu,v)},
abk(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$abk)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.OS(s,B.KX(B.c4C(r,q,s,p).f2(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abk,v)},
YO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pz(s,t.a.c,!1),$async$YO)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B1(new C.dHO(t),"Preparing download\u2026"),$async$YO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YO,v)},
a_m(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_m=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pz(s,t.a.c,!1),$async$a_m)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B1(new C.dHY(t),"Creating QR code\u2026"),$async$a_m)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_m,v)},
a_l(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iiv(r),$async$a_l)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B1(new C.dHN(t,s),"Looking up code\u2026"),$async$a_l)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_l,v)},
aeO(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aeO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xR.cq().MZ(A.T9,A.uV,!0),$async$aeO)
case 7:r=e
p=r
q=p==null?null:J.fm(p.a)
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
case 6:u=B.Hz()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeO,v)},
AF(d,e,f){return this.bMK(d,e,f)},
aTd(d,e){return this.AF(d,!1,e)},
bMJ(d){return this.AF(d,!1,!1)},
bMK(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$AF)
case 3:if(t.c==null){w=1
break}if(!C.c4H(d,t.a.c,null)){t.li(C.c4I(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hVK(d,s)}if(s){t.li(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.iiI(s,q,t.a.c,d),$async$AF)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.lZ(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rU(s,p,r,!1,null,null,d.ax),$async$AF)
case 5:if(t.c==null){w=1
break}t.m(new C.dHM(t,p,r,d))
t.li("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AF,v)},
aeN(){var w=0,v=B.j(x.H),u=this
var $async$aeN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B1(new C.dHP(u),"Reading file\u2026"),$async$aeN)
case 2:return B.h(null,v)}})
return B.i($async$aeN,v)},
Y5(d){return this.bO3(d)},
bO3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Y5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d7("local_qr_dep_"+1000*r,q.a,d,A.fS,A.fx,"Admin deposit ($"+B.dG(d)+")",null,null,A.cv,new B.V(Date.now(),0,!1))
C.cjC(t.d,s)
q=t.e
q===$&&B.c()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.rU(t.a.c,t.d,r,!0,null,null,null),$async$Y5)
case 3:w=4
return B.b(t.Bu(),$async$Y5)
case 4:if(t.c==null){w=1
break}t.li("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Y5,v)},
b94(d){var w=null
return B.cg(w,w,!0,w,new C.dHW(),d,w,!0,!0,x.N)},
X8(d){return this.bG_(d)},
bG_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$X8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Y5(d.b),$async$X8)
case 5:w=1
break
case 4:s=d.c
t.li(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$X8,v)},
Fs(d){return this.ctK(d)},
ctK(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$Fs)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3p(d,t.a.c),$async$Fs)
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
return B.b(t.b94(r),$async$Fs)
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
return B.b(C.cjv(d,o,n.a,r,p),$async$Fs)
case 7:w=6
return B.b(t.X8(f),$async$Fs)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fs,v)},
Ft(d){return this.ctL(d)},
ctL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ft=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$Ft)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cju(d,t.a.c),$async$Ft)
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
return B.b(t.b94(r),$async$Ft)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Xc(o,n.a,d,r,p),$async$Ft)
case 7:w=6
return B.b(t.X8(f),$async$Ft)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ft,v)},
Q7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Q7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DI()){t.li("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).ce(B.ee(new C.dHR(),!0,null,x.N)),$async$Q7)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.Y(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B1(new C.dHS(t,r),"Applying deposit\u2026"),$async$Q7)
case 6:w=1
break
case 5:w=7
return B.b(t.B1(new C.dHT(t,r),"Loading\u2026"),$async$Q7)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Q7,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nz:A.qr,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aD(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.X(A.eK,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dI0(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cD,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a20(D.bTk,"Download",A.a6T,u?o:p.gbTH(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a20(A.ju,"Show QR",D.dDb,u?o:p.gc9x(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a20(D.bTl,"Upload",A.a6f,u?o:p.gc9v(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a20(A.jv,"Scan QR",D.dat,u?o:p.gc9w(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc9u()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.l(16)
j=B.a([B.cv(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvq(A.to,"Enter Code",A.a5A,u,o),A.lb,B.o(o,B.A(B.a([B.X(A.hp,A.aV,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.n),o,o,o,o,A.jr,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iJ:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aE(!1,A.a3,!0,o,new B.D(A.CM,B.A(B.a([H.aVg,A.bc,B.E(B.d(w,o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.i,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a20.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u7,v,v,v)],x.p),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bT,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvq.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u7,v,v,v)],x.p),A.l,v,A.b9,A.i,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bHK,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0E.prototype={
S(){return new C.bmb()}}
C.bmb.prototype={
gayV(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a3()
w.S0()
w.f=B.dh(A.ov,new C.dI4(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
S0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vh(q.e,q.f),$async$S0)
case 3:q=e.a
s=B.c4C(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OS(t.a.e,B.KX(s.f2(),null,"  ")),$async$S0)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dI1(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S0,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nz:A.qr,s=u?A.iJ:A.c,r=u?A.c:A.bq,q=B.eR(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYs,v,v,v,1,v,!0),p=B.l(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qf(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gayV(),v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.l(20),j=A.aV.j(0.12),i=B.l(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.X(A.fO,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.m(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.n),v,v,v,v,A.lO,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dI2(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ac,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.m(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bd,v,new C.dI3(d),B.bp(A.aV,v,v,v,v,A.hg,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a0F.prototype={
S(){return new C.bmc(B.zT(A.yP,A.oe,A.vn))}}
C.bmc.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4P,w,w,w,1,w,!0),A.w,B.zS(this.d,A.bY,new C.dI5(this,d)),w,!1,!1,w,w)}}
C.ag_.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iJ:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dS,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.l(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.G,A.aV.j(0.16),A.kF,36)],x.V)
u=B.o(m,D.bZs,A.f,m,m,new B.n(m,m,m,B.l(18),A.a6S,D.c9o,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.m(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.m(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nz:A.qr
q=B.l(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rg("Account",A.a.i(this.d),i,j,m),A.T,new C.Rg("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Rg("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Rg("Saved on",""+B.bM(f)+"/"+B.bY(f)+"/"+B.bD(f),i,j,m))
g.push(A.T)
g.push(new C.Rg("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.bT,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.l(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.X(A.tm,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cN(A.Yg,new B.bN(new B.n(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wL,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.m(m,m,l?A.bL:A.ia,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dV(A.o8,new C.f8n(a0),B.di(m,m,m,m,m,m,m,m,m,j,m,m,A.co,m,new B.ba(B.l(14),A.a1),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fNT,m,new C.f8o(a0),B.bp(A.aV,m,m,m,m,m,A.co,m,new B.ba(B.l(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.i,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rg.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.m(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.a_M.prototype={
S(){return new C.aC2(new B.at(A.aw,$.aw()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aC2.prototype={
Z(){this.a3()
$.aU.x1$.push(new C.dgU(this))},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.e.t()
this.a2()},
c9z(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iJ:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nz:A.qr,p=u?A.aT:A.dS,o=B.l(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ab(0,A.G,A.aV.j(0.18),A.fP,32)],x.V),l=B.o(v,V.atv,A.f,v,v,new B.n(v,v,v,B.l(18),A.a6S,D.cch,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.m(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uW(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.buU(new C.dgR())],x.G),g=B.m(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cN(A.Mr,new B.bN(new B.n(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wL,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CL,v,v,"",v,!0,new B.b6(4,B.l(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.l(16),D.b6F),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dgS(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mA,v,v,v,v),A.e4,B.A(B.a([B.E(B.dV(A.o8,new C.dgT(d),B.di(v,v,v,v,v,v,v,v,v,s,v,v,A.co,v,new B.ba(B.l(14),A.a1),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fRJ,v,w.gc9y(),B.bp(A.aV,v,v,v,v,v,A.co,v,new B.ba(B.l(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.i,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OR,v,A.d7,v,v,v)}}
C.apX.prototype={
S(){return new C.bmj(A.cT)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bmj.prototype={
Z(){var w,v=this
v.a3()
w=v.a
w.toString
$.tS=$.tS+1
v.r=A.o.M(A.o.D(C.fSf(w.e,w.d.y2),1,600))
w=v.a
if(!J.lo(w.d.y2,w.e))v.r=C.io8(v.a.e)
v.w=B.dh(A.fM,new C.dOs(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cnF()
C.b2c()
this.a2()},
cnF(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.h.D(r.e/w,0,1)
if(v<=0)return
u=B.op(A.h.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d7(t,s.c.a,u,A.h8,A.fx,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cv,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vd(u,q,"Left early \xb7 +$"+A.h.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KU(d,e){return this.czQ(d,e)},
b8I(d){return this.KU(!1,d)},
czP(d){return this.KU(d,"")},
czQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KU=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.bHg(s,C.bGX(),C.hkX(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KU)
case 5:w=1
break
case 4:n=B.op(A.h.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dOj(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d7(s,p,n,A.h8,A.fx,q,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiJ(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.h.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.h.ad(n,2)+" ("+A.h.T(r*100)+"% of the prize)"}q=t.a
C.vd(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHg(s,C.bGX(),C.hkX(),""+t.e+"/"+t.f,k,q,!0),$async$KU)
case 6:w=7
return B.b(C.aiB(t.a.f,k),$async$KU)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KU,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.aq(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.Qy,o,o,o,new C.dOm(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.h.ad(t.w*1.46,2)+" \xb7 stake $"+A.h.ad(p.a.w,2),o,o,o,o,o,o,D.fCk,o,o,o)],s),A.E,o,A.e,A.i,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.l(99)
q=B.A(B.a([u,t,new C.arK(r,new C.dOn(p),o),A.bn,B.cU(o,B.A(B.a([D.c3j,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o,o,A.b0,new B.n(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSg(o,D.bvN,B.bm(!0,B.x(B.a([new B.D(D.bJV,q,o),new C.Os(w*r,w,v,o),new B.D(E.anr,B.A(B.a([B.E(B.bv(B.l(99),B.kr(A.bw,o,o,9,o,r,new B.md(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fM0,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o),B.E(new B.D(A.yX,B.bv(B.l(22),new B.bN(new B.n(o,o,o,o,o,new B.a7(A.aY,A.b3,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.akU],x.O),o,o),A.n),A.bk,new B.dr(p.x,P.hGB(p.a.e,new P.A_(new C.dOo(p),new C.dOp(p),new C.dOq(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a84.prototype={
B(d){var w=null,v=B.l(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ab(0,A.G,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bXE,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h0z,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fOF,w,new C.cdG(d),B.bp(A.at,w,w,w,A.w,A.hg,w,w,new B.ba(B.l(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.ca3,A.n),w,w,w,w,D.bIa,w,w,w),w,w,w,A.a1B,w,A.d7,w,w,w)}}
C.app.prototype={
S(){return new C.bm9(null,null)},
ga_(d){return this.e}}
C.bm9.prototype={
Z(){var w,v=this,u=null
v.a3()
w=v.d=B.bo(u,A.Cy,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dHB(v))
w=B.bo(u,A.me,u,1,u,v)
w.cK(0)
v.e=w
w=B.bo(u,A.Oh,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dHC(v))
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
w.bzz()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Ta[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Ta[A.o.F(a9.w,5)]:b0
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
b3=B.a([B.e1(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ab(6+e,A.G,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.G,A.ba.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bh,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wS(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.l(b2*0.5),B.a([new B.ab(b2*0.02,A.G,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.ds()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fE(m)
d=b2*0.2
a1=B.l(d)
if(a9.a.c)a2=D.dgz
else{a2=B.ap(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.ci,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.G,A.w.j(0.3),D.euU,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.G,A.c.j(0.9),A.UF,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bN(new B.n(b0,b0,b0,B.l(d),b0,new B.a7(new B.da(-1+Math.cos(j)*0.8,-1),new B.da(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.l(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.d6(A.w.j(0.18),A.dM,5)],x.C)
if(!a9.a.c)d.push(new B.d6(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uK(B.d(v,b0,b0,b0,b0,b0,b0,B.m(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jq,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNG.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.Os.prototype={
B(d){var w=null,v=new C.cg7(),u=v.$3("STAKE","$"+A.h.ad(this.e,2),A.c),t=B.l(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OA,B.A(B.a([u,B.o(w,B.x(B.a([D.h_c,B.lB(new C.cg6(),w,A.b0,A.n_,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.aun,A.n),w,w,w,w,A.ON,w,w,w),v.$3("FULL WIN","$"+A.h.ad(this.d,2),A.bL)],q),A.l,w,A.e,A.i,0,w,w),w)}}
C.arK.prototype={
B(d){var w=null,v=B.l(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bW4,A.df,C.asz(this.d,A.o7,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.aun,A.n),w,w,w,w,A.OY,w,w,w)},
ge3(){return this.c}}
C.OA.prototype={
S(){return new C.bmU(null,null)}}
C.bmU.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,A.me,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAb()},
aQK(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.iut(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c6(w,new C.e7h(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akc,B.bm(!0,this.aQK(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aQK(0,d)},
azJ(d,e,f){var w=null,v=f.j(0.16),u=B.l(10)
return B.A(B.a([B.o(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w)}}
C.aOh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aeR.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aD(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e7k()).gJ(0),j=new B.el(l.dO(m,new C.e7l(),x.cD),x.bG).cB(0,0,new C.e7m())
o=B.aD(d,A.bX,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.l(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anJ,B.A(B.a([B.o(p,D.c5Q,A.f,p,p,new B.n(p,p,p,B.l(14),B.a([new B.ab(0,A.G,A.fe.j(0.45),A.J,14)],x.V),D.aug,A.n),p,44,p,p,p,p,p,44),A.bc,D.bMj,B.aH(p,p,p,p,A.lt,p,p,p,new C.e7n(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.i,0,p,p),p)],w)
if(l.gcn(m)){u=C.hfe("GAMES",""+l.gJ(m),A.ey)
t=C.hfe("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDy(j)
s=s?A.jY:A.eV
v.push(new B.D(D.bGj,B.A(B.a([u,A.ae,t,A.ae,C.hfe("NET",r+q,s)],w),A.l,p,A.e,A.i,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.X(D.bS4,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.m(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.m(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.i,0,A.p),p))
else v.push(new B.df(1,A.cl,B.hW(p,new C.e7o(this),l.gJ(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7p(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9v,p,p,p,p,p,p,p,p)}}
C.aeQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!A.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&A.a.Y(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=A.bZ
else if(u)r=A.dy
else{w=v?A.aQ:A.bv
r=w}q=h.gbkx()
w=new C.e7j()
s=B.l(14)
p=B.a([r.j(0.13),D.buy],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.X(g?A.mk:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u6,i,i,i),1)
l=r.j(0.2)
k=B.l(99)
k=B.o(i,B.d(t,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.n),i,i,i,i,D.bJN,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDy(q)}else{l=g?"+":"-"
l+=C.bDy(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.i,0,i,i)
k=C.e7i("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e7i("PAID",C.bDy(g?h.d:0),r),A.df,C.e7i("BEFORE",w.$1(h.x),A.ey),A.df,C.e7i("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.i,0,i,i)
n=C.ipH(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.am,w,A.ax,B.d(n+h,i,1,A.a2,i,i,i,B.m(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.i,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.n),i,i,i,i,A.k7,i,i,i)}}
C.aCM.prototype={
S(){return new C.bip(A.cT,null,null)}}
C.bip.prototype={
Z(){var w,v,u,t=this
t.a3()
w=B.bo(null,A.mZ,null,1,null,t)
w.cK(0)
t.d=w
v=J.e3(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afe(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a84,A.tC,A.d2,A.c][w.aw(4)],[A.i0,A.kc,A.e9,A.HE][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bz3()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aE(!1,A.a3,!0,w,B.c6(v,new C.do1(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.afe.prototype={
ga_(d){return this.f}}
C.aNb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.b3_.prototype={
B(d){return new B.wl(new C.civ(this),null,new B.he(B.a([$.zf(),$.a4n()],x.U)),null)},
ge3(){return this.c}}
C.O4.prototype={
chw(){if(this.c!=null)this.m(new C.c5X())}}
C.JD.prototype={}
C.ar7.prototype={
S(){return new C.aFC(A.cT,new B.at(A.aw,$.aw()))},
cMM(){return this.d.$0()},
cYK(){return this.f.$0()},
cYy(d,e){return this.r.$2(d,e)},
cZl(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFC.prototype={
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
avq(){var w=B.cX(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avq()
if(s<2){t.azK("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cMM()<s){t.azK("Insufficient balance.")
w=1
break}if(!t.a.cYy(s,"Dice Roll bet")){t.azK("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e_N(t))}w=3
return B.b(C.ceQ(t.a.e),$async$Bx)
case 3:r=t.a
q=C.irY(r.e,r.c,t.d)
t.a.cYK()
B.b1A(t.a.e)
t.m(new C.e_O(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bO(new B.bf(1000*(40+p*6)),null,r),$async$Bx)
case 7:if(t.c==null){w=1
break}new C.e_P(t).$0()
t.c.eq()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bO(A.k4,null,r),$async$Bx)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hjE(q)
t.m(new C.e_Q(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cZl(m,"Dice Roll "+n,o)
t.m(new C.e_R(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"
w=12
return B.b(C.bHg(r,C.bGX(),new C.e_S(t),n,k,"YOU WIN!",!0),$async$Bx)
case 12:w=13
return B.b(C.aiB("Dice Roll",l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"),$async$Bx)
case 13:w=10
break
case 11:w=14
return B.b(C.bHg(r,C.bGX(),new C.e_T(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bx)
case 14:C.vd(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$Bx,v)},
azK(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avq(),d=x.w,a0=B.aD(a2,A.dD,d).w,a1=Math.min(B.aD(a2,A.bX,d).w.a.a*0.44,200)
d=B.hs(A.asH,D.h6N,new C.e_W(a2),f)
w=B.l(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b4,B.o(f,B.A(B.a([A.asC,A.bn,C.asz(v.d,A.j2,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d2,f,f,w,f,f,A.n),f,f,f,f,A.lP,f,f,f)],t),A.l,f,A.e,A.i,0,f,f)
u=g.z
v=B.a0(140,D.a_R.l()>>>16&255,D.a_R.l()>>>8&255,D.a_R.l()&255)
d=B.l(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.app(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.m(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Ta[q]
o=C.hjE(p)
n=p>0?A.bi:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.G,n.j(0.65),A.J,14)],r):A.SY
m=m?18:15
s.push(new B.bz(1,A.bd,new B.D(A.j9,B.o(A.z,B.d(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bH(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hjE(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.m(f,f,s>0?A.be:A.bZ,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.m(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e_X(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1H,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.l(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.lY,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.i,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.h.ad(g.avq()*0.46,2),f,f,f,f,f,f,O.aX9,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.hZ,B.x(d,A.al,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gcwp()
s=B.fu(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.l(14),A.a1),f,f,f,f,f)
return C.aSg(f,D.a04,B.bm(!0,B.x(B.a([new B.D(D.bKf,w,f),new C.Os(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iz(B.d("\ud83c\udfb2 ROLL ($"+A.h.ad(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.i,0,A.p),1)],t),A.l,f,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arQ.prototype={
S(){return new C.aFS(A.l7,new B.at(A.aw,$.aw()))},
cYq(d){return this.e.$1(d)}}
C.aFS.prototype={
gaud(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cT.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRr(){var w=this.d,v=this.a
return w===A.l7?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaB(){var w=this.gRr(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
JK(d,e){return this.bNc(d,e)},
bNc(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fH(new B.fx(d)),$async$JK)
case 2:B.eY()
t=u.c
if(t!=null)t.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JK,v)},
Rm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRr().length===0){r.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jo()
o=A.h.ad(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaaB()+"/"+o,0,null):B.cD("bitcoin:"+r.gRr(),0,null)
t=4
w=7
return B.b(B.iP(q,A.fo,null),$async$Rm)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaaB():r.gRr()
w=10
return B.b(r.JK(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rm)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaaB():r.gRr()
w=11
return B.b(r.JK(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rm)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rm,v)},
a1P(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().blj(A.eR),$async$a1P)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fq(),$async$a1P)
case 4:s=e
t.m(new C.e7v(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1P,v)},
cdL(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hHY(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cYq(new B.d7(s,w.c.a,w.d,A.fS,v.d,r,v.f,v.gaud(),A.dG,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eR(o,o,o,!0,!0,A.C1,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.Io,o,o,o,new C.e7w(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fQn,o,o,o,1,o,!0),m=B.l(26),l=B.K(D.f1.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.G,A.b2.j(0.25),A.eS,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.m(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dv(A.dB,A.z,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fyk,o,o,o),o),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.m(o,o,D.f1.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cd3,A.n),o,o,o,o,A.anW,o,o,o)
m=p.c8d()
l=p.aDs(1,"Send the money to NGMY Pay",p.cdJ())
w=p.aDs(2,"Put this code in the payment note",p.bLN())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.m(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDs(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.l(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uF,!0,o,o,o,o,new B.b6(4,B.l(18),D.b6A),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fzR,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u7,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.l(20)
s=r?D.f1:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bv(B.l(14),new B.cN(D.b8_,new B.Fw(p.f,o),o),A.aq),A.P,D.fiM,A.ax],i),A.l,o,A.e,A.i,0,A.p):B.x(B.a([B.o(o,D.c5_,A.f,o,o,new B.n(D.f1.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fVU,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p)
return B.c5(n,A.C1,B.as(new B.cN(A.afy,B.cv(B.a([j,A.bx,m,A.bx,l,w,t,p.bai(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uF,o,s,u,o,o,A.n),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcpx(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.d(p.a.r,o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bN(new B.n(o,o,o,B.l(18),B.a([new B.ab(0,A.G,A.b2.j(0.45),A.dp,18)],k),D.cbD,A.n),A.bk,B.lN(A.atj,D.h5Y,p.gcdK(),B.fu(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.l(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHi,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c8d(){var w=null,v=new C.e7r(this),u=B.l(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.l7,A.hC,"Cash App"),A.e7,v.$3(A.a9R,D.asf,"Bitcoin")],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.n(A.uF,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)},
bai(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.d(""+d,v,v,v,v,v,v,D.fFn,v,v,v),A.f,v,v,D.b8J,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f1.j(0.18),v,v,v,v,v,A.wD,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.EU(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a10,B.d(e,v,v,v,v,v,v,A.Lb,v,v,v),v),f],u),A.al,v,A.e,A.i,0,A.p),v),1)],u),A.al,v,A.e,A.i,0,v,v),v)},
aDs(d,e,f){return this.bai(d,e,f,!1)},
cdJ(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaaB():s.gRr(),p=B.l(20),o=B.l(20),n=s.d===A.l7,m=n?D.cax:D.ccq,l=B.a([new B.ab(0,A.G,(n?A.a_r:D.Zy).j(0.35),A.cz,16)],x.V),k=B.l(12)
n=s.d===A.l7
w=n?A.hC:D.asf
k=B.o(r,B.X(w,n?A.a_r:D.Zy,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.m(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.ax,B.A(B.a([D.c0a,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rk,r,r,r)],u),A.l,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bc,v,B.aH(r,r,r,r,D.c_8,r,r,r,w?r:new C.e7u(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.i,0,r,r),r,new B.n(r,r,r,o,l,m,A.n),r,A.anl,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gckG(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bLN(){var w,v,u,t,s,r,q,p,o=null,n=B.l(20),m=B.K(A.b8.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaud().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b8.j(0.28),A.b8.j(0.08)],u)
p=new B.ax(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.d(s,o,o,o,o,o,o,A.q2,o,o,o),A.f,o,o,new B.n(o,o,new B.bH(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b3,A.x,q,o,o),A.n),o,52,o,A.j9,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.i,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.m(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.hs(A.a4z,D.h7Y,new C.e7q(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.i,0,o,o)],l),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(A.uF,o,m,n,o,o,A.n),o,o,o,o,A.bH,o,o,o)}}
C.rP.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rQ.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWH(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hs0(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aN(v," \xb7 ")},
giK(d){return this.c}}
C.lS.prototype={
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
w=J.b9(v.c,new C.cht(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.iq.prototype={
amN(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.iq(v,u,t,s,r,h==null?w.f:h)},
bfX(d){var w=null
return this.amN(w,w,w,w,d,w)},
cQD(d,e,f){return this.amN(d,e,null,null,null,f)},
bfW(d){var w=null
return this.amN(w,w,w,d,w,w)},
cQh(d,e){var w=null
return this.amN(w,w,d,w,e,w)},
aj(){var w=this,v=C.idb(w.c),u=w.e,t=B.T(u).k("N<1,ac<q,@>>")
u=B.B(new B.N(u,new C.chr(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbT.prototype={}
C.WS.prototype={
S(){return new C.aG3(new B.at(A.aw,$.aw()),B.mP(0,null,null),B.a([],x.m))},
Vd(d){return this.d.$1(d)}}
C.aG3.prototype={
Z(){var w,v=this
v.a3()
w=J.b9(v.a.c,new C.ebB(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ebC())
v.d=w
v.JU()},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.x.t()
this.a2()},
afT(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$afT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JU()
u.m(new C.ebv(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.Vd(s),$async$afT)
case 2:r=e
if(u.c!=null){u.m(new C.ebw(u))
t=u.c.K(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dn:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$afT,v)},
a9P(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.iq(q,"New Category",A.HZ,4284773515,D.aDc,p.length)
t.m(new C.ebe(t,s))
t.JU()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.ebf(s),p,null,!0,!0,x.i),$async$a9P)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebg(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9P,v)},
a2L(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.ebs(t,p))
q.bP(0,A.cg)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.cho(p,q,s),$async$a2L)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebt(t,r))
$.aU.x1$.push(new C.ebu(t))
case 1:return B.h(u,v)}})
return B.i($async$a2L,v)},
abQ(d){return this.bS1(d)},
bS1(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$abQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ebm(t),r,null,!0,!0,x.i),$async$abQ)
case 2:s=f
if(s!=null)u.m(new C.ebn(u,d,s))
return B.h(null,v)}})
return B.i($async$abQ,v)},
bPG(d){this.m(new C.ebl(this,d))
this.JU()},
JU(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bfX(v)},
ci1(d,e){var w={}
w.a=e
this.m(new C.ebr(w,this,d))},
a_2(d){return this.c79(d)},
c79(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ee(new C.ebq(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).ce(t),$async$a_2)
case 2:return B.h(null,v)}})
return B.i($async$a_2,v)},
bHX(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fX,A.bs],l):B.a([A.ph,A.eO],l)
w=B.l(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.X(A.e9,m?A.dy:A.dY,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a2S:U.Pp
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.X(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ebi(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.uq:A.c).j(0.65)
p=B.l(12)
u.push(B.o(n,B.ks(!0,n,o.x,new C.ebj(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.aft,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.cq,n,n,n))}u.push(A.P)
t=o.w
q=B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.m(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.l(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebk(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcwF()
p=B.bp(A.bp,n,n,n,n,n,A.jr,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JR(t,A.bp,n),A.df,B.bJ(o.f?A.rf:D.ast,n,m,p)],r),A.dO,n,A.e,A.i,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.al,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.Hg,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bbT(t),r=t?A.bA:A.ci,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcdP()
if(n)n=A.VI
else n=B.X(A.zy,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eR(B.a([B.hs(n,B.d("Save",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXw(A.aN,u,A.Yu,A.oQ,D.h4a,v.gbEd())
q=v.bHX(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.m(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hg,n,u),B.E(G.hwx(!1,new C.ebA(v,s),m.length,v.gci0(),D.bG5,u,!1),1)],w),A.al,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
C.QE.prototype={
S(){return new C.bdO()}}
C.bdO.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.at(new B.bb(w.b,A.b7,A.aP),$.aw())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.uq:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c6M,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cdx,new C.cWV(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.ddj,new C.cWW(t),v),v.k("ak.E"))
u=x.p
v=B.ca(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.em(B.a([B.bP(!1,A.ds,s,s,!0,s,s,s,new C.cWX(d),s,s),B.bJ(A.rl,s,new C.cWY(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1q.prototype={
S(){return new C.aI4()},
pk(d){return this.d.$1(d)}}
C.aI4.prototype={
Z(){this.a3()
this.d=B.bs(this.a.c.e,!0,x.u)},
azM(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pk(v.bfW(u))},
a9R(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a9R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b3Z(new C.iC("q_"+1000*s,"",D.dbO,null,!1,r.length)),$async$a9R)
case 2:t=e
if(t!=null){u.m(new C.f3h(u,t))
u.azM()}return B.h(null,v)}})
return B.i($async$a9R,v)},
b3Z(d){var w,v=this.c
v.toString
w=B.ee(new C.f3i(d),!1,null,x.u)
return B.a6(v,!1).ce(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.ci,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eR(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXw(A.aN,v,A.Yu,A.oQ,D.ha4,w.gbEF())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.m(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hW(v,new C.f3n(w,new C.bbT(u)),q,D.bGe,v,A.ah,new C.f3o(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1p.prototype={
S(){return new C.aI3()}}
C.aI3.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.at(new B.bb(w.b,A.b7,A.aP),$.aw())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c4(v.e,D.a9_)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.a2()},
afS(){var w=0,v=B.j(x.H),u=this,t
var $async$afS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DL(78,1920),$async$afS)
case 2:t=e
if(t!=null)u.m(new C.f3d(u,t))
return B.h(null,v)}})
return B.i($async$afS,v)},
ah0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ah0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ee(new C.f3b(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).ce(t),$async$ah0)
case 2:s=e
if(s!=null)u.m(new C.f3c(u,s))
return B.h(null,v)}})
return B.i($async$ah0,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.ci,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eR(B.a([B.de(K.a4I,i,A.rl,new C.f3f(j,a1),B.bp(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.l(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bv(e,B.aSm(B.l(14),A.bY,140,A.D2,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcdO(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.l(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eN,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cD,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JR(j.d,i,i)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f3g(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uq:A.c
q=B.l(16)
p=B.l(16)
o=B.l(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bYN,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.l(12),i,i,A.n),i,i,i,i,A.bl,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.ax,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.i,0,A.p),1)
return B.c5(d,g,B.cv(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.ax,s,A.af,B.aE(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.X(A.zu,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcjD(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bT,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.ddP.prototype={}
C.WT.prototype={
S(){return new C.aG5(B.kb(!0,null,!0,!0,null,null,!1))}}
C.aG5.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dH(q.a.c,new C.ecb())
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
default:break}}w=A.d.aN(v,"\n\n")
q.d=new B.at(new B.bb(w,A.b7,A.aP),$.aw())},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.f.t()
this.a2()},
azN(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.aA(v,r,u)+e
s=A.a.oi(v,r,u,t)
this.d.bP(0,new B.bb(s,B.hn(A.bB,r+t.length),A.aP))},
b23(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.oi(w,v,v,u)
this.d.bP(0,new B.bb(t,B.hn(A.bB,v+u.length),A.aP))},
ady(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ady=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DL(78,1920),$async$ady)
case 3:s=e
if(s==null){w=1
break}t.m(new C.ebS(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ady,v)},
Zu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().a7c(A.eR),$async$Zu)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fq(),$async$Zu)
case 4:t.m(new r.ebX(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zu,v)},
adz(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new B.at(A.aw,t)
r=new B.at(new B.bb("https://",A.b7,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ebV(s,r),q,null,!0,!0,x.y),$async$adz)
case 2:if(e===!0)u.m(new C.ebW(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adz,v)},
bIU(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fw(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ebO(),B.T(p).k("N<1,q>")).c0(0,new C.ebP())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.Y(s,"## "))q.push(new C.lS("heading",A.a.i(A.a.b_(s,3)),r,r))
else if(A.a.Y(s,"\u2022 ")||A.a.Y(s,"- "))q.push(new C.lS("bullets",new B.N(B.a(s.split("\n"),u),new C.ebQ(),t).c0(0,new C.ebR()).aN(0,"\n"),r,r))
else q.push(new C.lS("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a9_)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.ddP(n),l=n?A.av:A.hk,k=B.d(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eR(B.a([B.de(K.a4I,o,A.acM,new C.ec1(p,d),B.bp(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.ct:A.hY
v=B.c_(A.bI,B.a([p.wk(A.Pq,"Bold",new C.ec2(p),m),p.wk(A.a2U,"Italic",new C.ec3(p),m),p.wk(A.apR,"Underline",new C.ec4(p),m),p.wk(Y.a30,"Heading",new C.ec5(p),m),p.wk(A.Pr,"Bullets",new C.ec6(p),m),p.wk(A.apQ,"Align",new C.ec7(),m),p.wk(A.HF,"Link",p.gc3X(),m),p.wk(A.qO,"Image",p.gc3W(),m),p.wk(M.a3e,"Video",p.gc3Y(),m),p.wk(A.a4m,"Signature",new C.ec8(p),m),p.wk(M.Ps,"Divider",new C.ec9(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.m(o,o,n?A.d3:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,A.aot,o,o,o)
v=n?A.bA:A.c
u=B.l(12)
t=B.K(n?A.cR:A.dS,A.r,1)
s=B.a([new B.ab(0,A.G,A.w.j(n?0.35:0.08),A.cM,16)],x.V)
r=p.d
r===$&&B.c()
q=B.m(o,o,n?A.iO:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bT,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.m(o,o,n?A.d3:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.n),o,o,o,o,Q.CP,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.id(n,B.T(n).k("id<1>"))
j.push(B.o(o,B.c_(A.bI,n.gdQ(n).dO(0,new C.eca(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OD,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
wk(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.l(8),s=B.l(8)
return B.hd(B.aE(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cq,B.X(d,v?A.iO:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.dsk.prototype={}
C.aDG.prototype={
a7(){return"_KbView."+this.b}}
C.as6.prototype={
S(){return new C.aG4(D.b1Z)},
cXC(d,e){return this.e.$2$size(d,e)}}
C.aG4.prototype={
gaCC(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gcyT(){var w,v,u,t,s,r=this.gaCC()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cdQ(d){this.m(new C.ebL(this,d))},
ckP(d){this.m(new C.ebM(this,d))},
bH1(){this.m(new C.ebD(this))},
bH3(){this.m(new C.ebE(this))},
gb9I(){var w=B.bs(this.a.c,!0,x.i)
A.d.b0(w,new C.ebN())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsk(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eO.j(0.55),A.nv.j(0.45)],e)
w=B.l(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bI9(f)
break
case 1:g=i.gaCC()
g.toString
g=i.bIS(f,g)
break
case 2:u=i.gaCC()
u.toString
t=i.gcyT()
t.toString
s=B.b1(u.d)
r=B.l(16)
r=B.o(h,B.d(t.b,h,h,h,h,h,h,D.fEn,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.l(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ab(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fX:A.ph
l=B.l(8)
k=B.X(A.oG,g?A.dy:A.dY,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDE(f,i.gbH2(),u.c,s,"Answer",h),B.E(B.cv(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e7,B.d("Stored answer",h,h,h,h,h,h,B.m(h,h,g?A.dy:A.dY,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.n),h,h,h,A.el,A.hm,h,h,h),new C.b2x(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.n),h,h,h,h,A.bT,h,h,1/0)],j),h,h,A.ane,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aY,A.b3,A.x,e,h,h),A.n),h,h,h,A.hZ,h,h,h,h)},
b_9(d){var w,v,u,t=null,s=d.a,r=s?D.uq:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.G,q,A.J,14),new B.ab(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i4(v.cXC(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.m(t,t,A.dn,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.i,0,A.p)},
bI9(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_9(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_9(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.m(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cv(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.m(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,E.aVm,new C.ebG(u,d),u.gb9I().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGf,t,t,A.ah,!1)},
bIS(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b0(r,new C.ebI())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hW(s,new C.ebJ(this,r,d,e),t,A.wF,s,A.ah,new C.ebK(),!1)
return B.x(B.a([new C.aDE(d,this.gbH0(),e.c,w,e.b,s),new B.D(A.wH,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.i,0,A.p)}}
C.aDE.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.X(A.eK,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.l(12)
q=B.o(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.n),v,v,v,v,A.cq,v,v,v)
return new B.D(D.bJz,B.A(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v),v)}}
C.adl.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uq:A.c,r=B.l(14),q=B.l(14),p=B.l(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ab(0,A.G,A.w.j(t?0.28:0.06),A.dM,6)],x.V),m=u.j(0.15),l=B.l(12)
l=B.o(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a2,w,w,w,B.m(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.i,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.n),w,w,w,w,A.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2x.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fX:A.ph
u=B.l(8)
t=B.X(A.vb,w?A.dy:A.dY,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.m(s,s,w?A.dy:A.dY,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.n),s,s,s,A.cy,A.eQ,s,s,s))}A.d.u(p,J.b9(this.c,new C.chp(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.add.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bDU,B.d(q.b,r,r,r,r,r,r,B.m(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hz,B.bv(B.l(12),B.aSm(r,A.bY,160,A.qO,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hz,new C.aDF(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wD,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.m(r,r,s.d.a?A.cs:A.bp,r,A.ne,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQp(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iQ(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.m(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cK,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.yV,B.x(B.a([u,q,A.aO,t,A.ax,B.d("Signature",r,r,r,r,r,r,B.m(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQq(),x.cc),new C.cQr(s),v),v.k("M.E"))
return new B.D(A.kB,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hz,B.iQ(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eP,C.i75(q,s.d),r)}}}
C.aDF.prototype={
S(){return new C.bjY()}}
C.bjY.prototype={
Z(){this.a3()
this.afU()},
afU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d2(n,"http")&&!J.d2(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZO(B.cD(n,0,null),null)
w=7
return B.b(J.a4q(q),$async$afU)
case 7:if(r.c==null){w=1
break}r.m(new C.dsl(r,q))
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
return B.i($async$afU,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.l(12)
return B.o(A.z,B.X(A.qX,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.l(12)
v=s.a
u=J.ajx(v)
return B.bv(w,new B.fG(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AH(s,t),B.aH(t,t,t,t,B.X(v.f?A.apY:A.Pt,A.c,t,t,t,44),t,t,t,new C.dsn(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.asX.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JI.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rV.prototype={}
C.as9.prototype={
S(){var w=null
return new C.aG6(new B.at(A.aw,$.aw()),B.mP(0,w,w),B.a([],x.m),D.Er,D.aMe,w,w)},
ge3(){return this.d}}
C.aG6.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,A.nE,null,1,null,v)
w.f1(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7o).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.V$=$.aw()
v.R$=0
w.e.t()
w.bAk()},
gasK(){var w,v,u,t,s=this.x
if(s===D.Es)return null
s=s===D.Er
w=s?D.a7o:D.a6s
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
czF(d){return this.m(new C.ecp(this,d))},
aCo(){$.aU.x1$.push(new C.ecg(this))},
JL(d){return this.cz6(d)},
b24(){return this.JL(null)},
cz6(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JL=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JL)
case 3:e=b2
if(!e){w=1
break}B.jX()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aU(a0,new C.eci())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hCi(a8)&&a1
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
l=C.hCi(a8)&&!p
q.m(new C.ecj(q,a8))
q.aCo()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.eck(q))
q.aCo()
w=1
break}t=5
j=B.nk(k)
i=new B.N(a0,new C.ecl(),B.T(a0).k("N<1,q>")).aN(0,"\n\n")
a0=C.irl(m,p,o,q.x,n,q.y,q.gasK(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.ri(j,h,A.i1,null,null),$async$JL)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFp(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ecm(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ecn(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.eco(q))
q.aCo()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JL,v)},
bMV(){return this.JL("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GO:D.bsO,o=x.p
o=B.a([B.x(B.a([B.E(s.cym(q),1),s.bM7(q)],o),A.l,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbMU()
u=B.l(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.eyK,r,new B.n(r,r,r,u,B.a([new B.ab(0,A.G,A.aQ.j(0.45),A.cM,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o1,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o1,r,r,A.ai),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cym(d){var w,v,u,t=this,s=null
if(t.x===D.Es)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hec(s,!1,A.L,0,0,w,B.har(t.cEc(d),A.YO,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.ash,A.aD.j(0.5),s,s,s,52)
w.push(B.b94(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.m(s,s,d?A.aE:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fT,B.a([t.ake("Full bongo love song ABAB",d),t.ake("Mix: group vs private jet \u2014 which flies?",d),t.ake("Song from John 3:16 + matching verses",d),t.ake("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nE(D.bEB,B.Zc(new B.oR(new C.ech(t,d),u+v,!0,!0,!0,0,B.tm(),s)),s))}return B.w6(0,s,A.t,t.e,A.y,s,s,S.afp,s,s,!1,s,A.ah,!1,w)},
cEc(d){var w=this.as
w===$&&B.c()
return B.c6(w,new C.ecw(this,d),null)},
cEe(d){var w,v=this,u=null,t=B.l(14),s=v.r?u:new C.ecy(v),r=A.w.j(d?0.35:0.06),q=B.l(14),p=B.K(A.ba.j(0.35),A.r,1),o=v.gasK()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fc,u,u,u)
w=v.gasK()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.m(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ae,w,B.X(v.w?A.PU:A.tj,A.ba,u,u,u,20)],x.p),A.l,u,A.e,A.i,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.n),u,u,u,u,A.nI,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
axW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b2,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.cs],x.O)
break
case 2:w=B.a([A.bE,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.l(14)
t=B.l(14)
s=this.r?n:new C.ecf(this,d)
r=B.l(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Fc,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bq
return B.E(B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.m(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cEf(d,e){var w,v,u,t=this,s=null,r=t.x===D.Er?t.z:t.Q,q=B.l(20)
if(r===d.a)r=A.ba.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.l(20)
v=t.r?s:new C.ecz(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.W0,s,s,s)
return B.aE(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.hn,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.m(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
ake(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,A.acE,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mY(w,u,v,w,this.r?w:new C.ecq(this,d),w,w,w,w)},
bM7(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.l(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aod,B.d("$"+A.h.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.m(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.m(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Es?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eN,r,A.ho,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m(r,r,d?A.bV:A.hO,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ecc(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ecd(s)
l.push(B.A(B.a([v,new B.JR(w,A.aD,r),B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.ez_:D.c0j,r,D.b9B,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.ai)],m),A.dO,r,A.e,A.i,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.n),r,r,r,A.t7,A.a14,r,r,r)}}
C.aOp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.WU.prototype={
aj(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0a.prototype={
S(){return new C.aD4(null,null)},
bkP(){return this.f.$0()}}
C.aD4.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bo(u,D.bD_,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bo(u,A.nD,u,1,u,v)
w.f1(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bo(u,A.lN,u,1,u,v)
w.cK(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bo(u,A.yR,u,1,u,v)
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
w.bz8()},
cdS(){var w=this.d
w===$&&B.c()
w.eJ(0).bG(new C.dpG(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aD(d,A.bX,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcdR(),f=x.l,e=J.e3(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.E_(new C.dpH(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.c()
u=B.l(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.G,A.at.j(0.35),A.J,40),new B.ab(0,A.G,A.aN.j(0.25),A.fP,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c6(new B.he(B.a([r,q],x.U)),new C.dpI(k),j)
r=B.of(A.jV,D.h7h,new C.dpJ())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.m(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cD,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b25(A.ke,"Resets in 24h"),A.ae,k.b25(A.oG,"Help Topics ready")],o),A.l,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dV(D.h1o,new C.dpK(k),B.di(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kW,j,new B.ba(B.l(14),A.a1),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.l(14)
m.push(B.E(B.bJ(D.h77,j,g,B.bp(A.aN,j,j,6,A.c,j,A.kW,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c6(w,new C.dpL(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.i,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.c9C,A.n),j,j,j,j,T.ao3,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dpM(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aE(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b25(d,e){var w=null,v=A.c.j(0.08),u=B.l(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.X(d,A.at,w,w,w,13),A.e7,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hn,w,w,w)}}
C.aNg.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.OR.prototype={}
C.qh.prototype={}
C.asJ.prototype={
S(){return new C.aGt(B.a([],x.E),B.a([],x.s))}}
C.aGt.prototype={
gat8(){return A.h.D(B.M7(this.a.c.a,new C.eqM(this)),0,1/0)},
a9X(){var w,v=this,u=v.d,t=v.gat8()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rh(u.a,t,!0,!1)},
Kg(d,e){var w,v,u,t=this,s=t.gat8(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gat8()
if(w<v-0.005)B.hI_(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rh(u.a,w,!0,!1)
B.rh(t.a.c.a,w,!0,!1)
B.Bp(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a3()
$.aU.bZ$.push(o)
w=$.Jv+1
$.Jv=w
if(w===1){w=$.htv
if(w!=null)w.$0()}v=$.hct.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.lZ(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aRZ(u,A.h.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w1(w,u,r,q,s.e,p)}o.d=t}o.Q3()
o.a9X()
$.aU.x1$.push(new C.ers(o))
o.Q=B.dh(A.ow,new C.ert(o))
o.as=B.dh(A.h1,new C.eru(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.hZN()
w.a2()},
cGq(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9d(v,w)){if(C.hcv(p,q.e)){q.m(new C.era(q,p))
q.yH(!1,!0,!0)}else if(q.c!=null)q.m(new C.erb())
return}if(!C.cjG(v.c?v.bU():v)){q.m(new C.erc(p))
q.b2e(!1)
return}u=p.gD7()
if(u<=0)return
t=w.d5(B.c1(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))
s=C.hcw(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.erd())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aU(q.e,new C.ere(r))){q.m(new C.erf(p,w,u))
return}q.m(new C.erg(q,p,u,w))
q.aAp(new B.d7(r,p.a,u,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,w))},
jn(d){if(d===A.fV)this.Fn()},
Q3(){var w,v,u,t,s,r,q,p=this.d
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
w.bx=p.c7.length
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
q=new B.w1(u,t,s,r,v.e,q)
u=q}w.x=u},
SX(d){return this.cF_(d)},
cF_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$SX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Q3()
t.Kg(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$SX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$SX,v)},
Fn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fn=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(G.A9(q.w,k,l,j,m,!1,n),$async$Fn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.er5(q,p))
q.SX(!1)}w=8
return B.b(q.Ks(),$async$Fn)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.aa(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Ks(),$async$Fn)
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
return B.i($async$Fn,v)},
Oq(d){return this.bGd(d)},
bGc(){return this.Oq(null)},
bGd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Oq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Oq)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d_(t.w,x.N)
r=s.rC("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jA(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fS&&l.x===A.cv&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eqN(j,t,i))
q.u(0,p)
r=B.B(q,B.a3(q).k("ci.E"))
t.w=r
w=4
return B.b(B.asL(t.a.c.a,r),$async$Oq)
case 4:t.azV(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oq,v)},
Ks(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ks=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.er6(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.er7(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lF("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Ks)
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
j=A.d.bk(r.e,new C.er8(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cv
else a0=J.z(k,2)?A.kJ:A.dG
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dG&&h===A.cv&&a3[j].d===A.fS)J.c4(a6,l)
if(i===A.dG&&h===A.kJ&&r.e[j].d===A.f5){g=r.d
if(g!=null){r.Kg(g.d+r.e[j].c,!1)
r.azV(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.er9())
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
return B.b(r.Oq(a6),$async$Ks)
case 13:w=11
break
case 12:w=14
return B.b(r.bGc(),$async$Ks)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ks,v)},
QR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vh(i.a,i),$async$QR)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.eqR(t,h))
t.Q3()
t.a9X()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.A9(s[0],p,q,o,r,!0,i),$async$QR)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q3()
t.a9X()
k=C.hcv(n,m)
if(k)t.Kg(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hul(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q3()
if(t.c==null){w=1
break}t.m(new C.eqS(t,n,m,l))
if(i){t.yH(!1,!0,!0)
if(j==="reset"){B.ht4(t.a.c.a)
i=t.c
if(i!=null)B.ht7(i,null)}else if(j==="warn2"){B.ht5(t.a.c.a)
i=t.c
if(i!=null)C.ht8(i)}}else if(k)t.yH(!1,!0,!0)
else t.SX(!1)
case 1:return B.h(u,v)}})
return B.i($async$QR,v)},
yH(d,e,f){return this.cov(d,e,f)},
azV(d,e){return this.yH(d,!1,e)},
b2e(d){return this.yH(!1,d,!1)},
cov(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rU(r,o,q,!1,t.w,s,p),$async$yH)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JB(t.w,p,q,s,o,r)
if(f)t.SX(d)
case 1:return B.h(u,v)}})
return B.i($async$yH,v)},
ce8(){this.m(new C.er_())
this.azV(!1,!0)},
agE(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cv&&B.tk(d)){w=r.a
w.f.$1(new B.d7(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjC(q,d)
v=q.d=B.M7(r.a.c.a,new C.eqX(r))
r.at=r.a.c.d=v
B.rh(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.eqY(r,d))
r.yH(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d7(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dG
if(w&&d.d===A.fS)s=!1
else if(w&&d.d===A.f5){r.Kg(q.d-d.c,!0)
s=!0}else{C.cjC(q,d)
w=d.d
s=w===A.f5||w===A.kr
r.Kg(q.d,s)}r.m(new C.eqZ(r,d))
w=d.d
r.yH(s,e,w===A.f5||w===A.kr||d.x===A.cv||w===A.h8)},
aAp(d){return this.agE(d,!0,!1)},
b3i(d,e){return this.agE(d,!0,e)},
b3h(d,e){return this.agE(d,e,!1)},
chf(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.itG(u,e,d)){v.mt("This plan is already active.")
return}w=B.hHu(u.a,d,e)
if(C.ipN(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.er0(v))
v.m(new C.er1(v,u,new B.w1(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAp(new B.d7(w,u.a,g,A.kr,A.fx,"Direct investment buy: "+d,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.m(new C.er2(v))
v.mt("Plan purchased: "+d)},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a1_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.apq(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a1_)
case 3:w=4
return B.b(t.QR(),$async$a1_)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a1_,v)},
ah7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.ajV(r,B.a([r],x.d9),A.SZ,t.a.d,t.gb3g(),t.gb2d(),null),!1,null,x.X),$async$ah7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
ah5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.an4(r,t.a.d,t.e,t.gb3g(),t.gb2d(),new C.er4(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ah5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah5,v)},
aej(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aej=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hcv(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2e(!0),$async$aej)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.m(new C.eqT(t))
w=1
break}if(B.mm(r)===6||B.mm(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hum(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9d(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSL(q,r))if(!B.aSL(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIq(m.y,l,m.a))}}q=B.hGR(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i0f(r)
q=j.a
t.m(new C.eqU(j,r,k))
t.b3h(new B.d7("local_clockin_manual_"+q+"_"+s,j.a,0,A.h8,A.fx,"Clock-in session started (local)",null,null,A.cv,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aej,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nz:A.qr
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fOl
u=u==null?k:u.$0()
u=J.aT(u==null?A.iD:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.am(0,q)||B.tk(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cS(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erk(),B.T(v).k("Y<1>")))
A.d.b0(w,new C.erl())
v=l.d
v.toString
u=C.ifm(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anS(t,l.a.e,l.z,l.gche(),l.aXo(),D.hBJ),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDT(l.aXo(),q,n,o,w,new C.erm(l),l.gcjl(),new C.ern(l),D.hBK),j,!0)
m=B.aD(d,k,x.w).w
n=l.y
return new B.XK(n,new C.ero(l),B.aE(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDS(v,u,w,l.gc7b(),new C.erp(l),new C.erq(l),new C.err(d),l.gckd(),l.gck8(),D.hBI),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIB(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXo(){var w=null,v=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.z,D.c59,A.f,w,w,new B.n(w,w,B.K(D.f1.j(0.38),A.r,1),w,B.a([new B.ab(0,A.G,D.f1.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqQ(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIB(){var w=null,v=B.l(27),u=B.K(A.aF.j(0.45),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.5),A.eS,24),new B.ab(-2,A.G,A.aF.j(0.12),A.J,18)],x.V)
return new B.D(A.OD,B.bm(!0,B.as(new B.cN(D.b7S,B.o(w,B.cj(new C.eqO(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c92,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c8R(d){var w=null,v=this.y===d,u=D.dg_[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dw(w,!0,w,B.ay(A.c_,B.qo(B.oA(v?B.X(s,D.agL,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.i,0,A.p),A.iQ,B.pU(),A.b0,A.b0,B.LO())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqW(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDS.prototype={
c5R(d){return C.hcw(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pI(new B.Y(v,new C.du5(),u),3,u.k("M.E"))
t=B.B(u,B.a3(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9d(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hum(r)
m=v.gD7()
l=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f1.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.G,D.f1.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.X(A.hC,D.f1,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.l(14)
k=B.l(14)
j=B.a([new B.ab(0,A.G,A.b8.j(0.45),A.cM,16)],j)
h=B.l(12)
g=x.p
j=B.bUn(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bYa,A.f,e,e,new B.n(A.iN.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.caD,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c48,A.f,e,e,new B.n(A.bt,e,B.K(D.ajJ,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hx_(A.fM,new C.du6(),k)
k=B.A(B.a([B.E(C.hwZ(new C.du7(f,A.rE,n),new B.V(Date.now(),0,!1),h,k),1),A.p4,B.E(new B.wl(new C.du8(f,A.rE),e,new B.he(B.a([$.zf(),$.a4n()],x.U)),e),1)],g),A.l,e,A.e,A.i,0,e,e)
h=f.c93(A.rE,D.f1)
v=B.E(f.cCu("Total Profit","$"+B.dG(v.e),A.rE),1)
u=u?e:s.b
return B.eb(B.ca(B.x(B.a([j,A.T,k,A.af,new C.aDR(f.d,m,q,p,n,o,D.f1,f.gc5Q(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p4,B.E(f.b9D("Total Investment","$"+B.dG(u==null?0:u),A.rE,f.r),1)],g),A.l,e,A.e,A.i,0,e,e),A.T,f.c5N(d,t,D.f1,w)],g),A.al,e,A.e,A.i,0,A.p),A.t,e,A.y,e,e,A.a1A,e,e,A.ah),D.ajJ,!0)},
azU(d,e,f,g,h){var w=null,v=B.l(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.4),A.dp,18)],x.V)
return B.o(w,B.bv(B.l(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bN(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.c9w,A.n),w,w,w,w,w,w,w,w)},
b2c(d,e,f,g){return this.azU(d,e,f,A.ag,g)},
bbM(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.l(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2c(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bF9,B.x(B.a([B.o(w,B.A(B.a([B.X(e,f,w,w,w,15),A.e7,B.d(h.toUpperCase(),w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.n),w,w,w,w,A.aoi,w,w,w),A.b4,new B.dv(A.dK,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.m(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.l(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c93(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.d_u[w],s,D.bIP,s,s,s,5))}r=B.o(s,B.A(o,A.dO,s,A.b9,A.i,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h3b,A.bF,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ab(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.df(1,A.cl,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.m(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.l(16)
v=B.l(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.azU(B.A(B.a([r,D.foO,q,A.ae,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.X(A.nP,e.j(0.95),s,s,s,21),A.rh,B.d("PLAY",s,s,s,s,s,s,B.m(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.i,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.i,0,s,s),e,A.a5,A.a17,26)},
b9D(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b62,v,v,A.n),v,v,v,A.nG,v,v,v,5),r=x.p
r=B.a([s,A.bc,B.E(B.x(B.a([B.A(B.a([B.X(u?A.v9:A.zJ,t,v,v,v,14),A.e7,new B.df(1,A.cl,B.d(d,v,1,A.a2,v,v,v,B.m(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.i,0,v,v),A.am,new B.dv(A.dK,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.fyb,v,v,v),v)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(W.Oq,B.X(A.eI,A.c.j(0.35),v,v,v,v),v))
w=this.b2c(new B.a5(v,66,B.A(r,A.l,v,A.e,A.i,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.l(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cCu(d,e,f){return this.b9D(d,e,f,null)},
c5N(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ab(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.m(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.l(20),h=x.p
i=B.a([B.A(B.a([l,A.VH,k,A.b4,B.o(m,B.d(""+e.length,m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.n),m,m,m,m,A.a1N,m,m,m)],h),A.l,m,A.e,A.i,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a0Y,B.x(B.a([B.X(A.hp,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.m(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mB(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f5||v===A.kr
t=u?A.hM:D.f1
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.X(u?A.v9:A.x4,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bH(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.inE(j),m,1,A.a2,m,m,m,A.kI,m,m,m)
q=C.hyC(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oz,m,m,m)
j=C.hGu(j)
k.push(new B.D(A.Ou,new B.c8(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([v,A.bc,new B.bz(1,A.bd,s,m),B.x(B.a([q,A.cS,B.d(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dO,m,A.e,A.i,0,A.p)],h),m),m))
A.d.u(i,k)}return this.azU(B.x(i,A.l,m,A.e,A.i,0,A.p),f,A.aY,D.bFk,26)}}
C.aDR.prototype={
S(){return new C.bkH(null,null)},
cXh(d){return this.z.$1(d)},
cYB(){return this.Q.$0()}}
C.bkH.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bo(u,A.qE,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bo(u,D.bCQ,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bo(u,A.qH,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.baN()},
gbdv(){var w=new B.V(Date.now(),0,!1)
if(B.mm(w)===6||B.mm(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
baN(){var w=this,v=w.a,u=v.e||v.f||w.gbdv()
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
this.baN()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bzp()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdv()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aF:g.x
g=g.r?new C.dtZ(i):h
v=B.l(32)
s=B.l(32)
r=f?D.dyM:D.dyK
q=B.K((f?D.pk:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.G,(f?A.aF:A.ba).j(0.16),A.fP,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.acP(D.pk,130),h,h,h,-24,-30,h),B.ao(-36,i.acP(A.aF,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.acP(A.ba,120),h,h,h,-30,-36,h),B.ao(-40,i.acP(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dr(!0,B.bv(l,new B.e5(B.c6(k,new C.du_(i),h),h),A.aq),h),0,0,0))}if(f){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dr(!0,B.bv(l,new B.e5(B.c6(k,new C.du0(i),h),h),A.aq),h),0,0,0))}l=B.l(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b7Z,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ab(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.df(1,A.cl,B.d(u,h,1,A.a2,h,h,h,D.fE8,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.n),h,h,h,h,A.ho,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hx_(A.fM,new C.du1(),l)
m.push(C.hwZ(new C.du2(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.n(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.n),A.Cx,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acP(d,e){var w=null
return new B.dr(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beh.prototype={
b2f(d,e,f,g){var w=new B.aG($.R().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+f,u))
w.E(new B.ce(v,u,v,u+f))
w.E(new B.ce(v,u,v-f,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bx())
d.af(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.h.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.h.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2f(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.h.F(a7+p/3,1)
$.R()
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
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
$.R()
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.b=A.aa
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hMG()
h=i.b
d=h.c
h=h.a.c
i.a4(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2f(b2,o,3+g*3,i)
break
case 2:$.R()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.R()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.c=1.8
a2.d=A.bG
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.R()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.R()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=a7.j(0.28).gp(0)
i.y=A.oA
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.beg.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=B.a([],u)
q=new B.aG(a3,A.aj,e,e,r)
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
v.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aC(0,D.fhi))
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
v=B.by(D.fhR,A.V8)
u=new B.ar(A.S,A.Q,A.W,A.X,A.U)
u.r=D.aEn[A.o.F(t,6)].j(k*0.9).gp(0)
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
f=D.aEn[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.R()
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.c=2
r.d=A.bG
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.R()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aD(d){return d.b!==this.b}}
C.bef.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
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
t=$.R().r
q=x.g
p=new B.aG(t,A.aj,e,e,B.a([],q))
p.E(new B.jt(B.bW(a1,a3)))
a4.mz(0,p)
p=B.bW(a1,a3)
o=B.L()
o.san(D.eGk.aC(0,B.bW(a1,a3)))
a4.aF(p,o)
n=A.h.D(f.b,0,1)
if(n>0.004){a0+=a3
m=a0-a3*2*n
l=v?5.2:1.8
q=B.a([],q)
k=new B.aG(t,A.aj,e,e,q)
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
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f1.j(0.34),A.cW.j(0.62)],a0)
d.san(new B.a7(A.aY,A.b3,A.x,a0,e,e).aC(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDT.prototype={
S(){var w=$.aw()
return new C.aDU(new B.at(A.aw,w),new B.at(A.aw,w))},
bkI(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDU.prototype={
t(){var w=this.d,v=$.aw()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a2()},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cEo(d){this.a.bkI(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dup())},
cCZ(){var w,v,u=this,t=B.cX(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hD(w,new C.arQ(v.d,t,u.gcEn(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cL4(){var w,v,u,t,s=this,r=s.d,q=B.cX(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hHY(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkI(new B.d7("wd_"+1000*Date.now(),s.a.d.a,q,A.f5,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dG,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.cg)
w.bP(0,A.cg)
s.m(new C.duq())},
cHI(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cv||!this.aZn(r)||B.hkP(r))continue
q=r.d
p=q===A.f5||q===A.kr||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brQ(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cHI(),p=s.a.r,o=new B.Y(p,new C.dur(),B.T(p).k("Y<1>")).gJ(0)
p=B.aD(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f1.j(0.38),A.r,1)
w=B.bUn(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.z,B.X(N.arz,D.f1,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bH7(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asH(A.x4,"Deposit",0),s.asH(A.v9,"Withdraw",1),s.asH(A.h3,"History",2)],t),A.l,r,A.r1,A.i,0,r,r)
return B.eb(B.bm(!1,B.ca(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oA(s.f===2?s.c2F():s.c8v(),A.ie,B.pU(),A.b0,A.b0,B.LO())],t),A.al,r,A.e,A.i,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.C1,!0)},
bH7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cm(g,"@")
v=A.a.aA(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.b_(g,w)}else v=g
w=B.l(26)
u=B.ao(h,i.aC9(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aC9(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aC9(150,0.05),h,h,-40,h,h,h)
r=B.l(26)
r=B.bS(0,new B.bN(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.l(6)
p=x.p
q=B.A(B.a([B.o(h,B.b5(h,h,h,new C.bdH(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.cbJ,A.n),h,28,h,h,h,h,h,38),A.b4,D.hbY],p),A.l,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.m(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asz(new C.dub(i),D.fJT,i.a.d.a)
m=B.a([B.E(i.aRK(A.qP,"In",d),1),B.E(i.aRK(A.tf,"Out",e),1)],p)
if(f>0){l=A.d2.j(0.22)
k=B.l(99)
j=B.K(A.jd.j(0.6),A.r,1)
m.push(B.o(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fF5,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.n),h,h,h,h,A.oz,h,h,h))}return new B.fG(1.62,B.bv(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFx,u,t,s,r,new B.D(R.ta,B.x(B.a([q,A.b4,o,A.bF,new B.dv(A.dK,A.a5,A.f,n,h),A.b4,B.A(m,A.l,h,A.e,A.i,0,h,h),A.am,B.d(v,h,1,A.a2,h,h,h,B.m(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.aq),h)},
aC9(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRK(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.df(1,A.cl,new B.dv(A.dK,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o5,w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w)},
asH(d,e,f){var w=null,v=this.f===f,u=v?D.cd5:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f1.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.G,A.aF.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.X(d,v?D.agL:D.f1,w,w,w,26),w,w,A.ck,new B.n(w,w,t,w,s,u,A.a6),A.H8,w,62,w,w,w,w,w,62)
return B.ay(A.c_,new B.a5(92,w,B.x(B.a([u,A.aVk,B.d(e,w,w,w,w,w,w,B.m(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dua(this,f),w,w,w,w,w,w,!1,A.a4)},
c8v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cX(a1.a.a)
if(a2==null)a2=0
w=a0?D.f1:A.cs
v=a2>0
u=new C.dum(e,w)
t=new C.dul()
s=e.f
r=B.l(26)
q=x.O
p=B.a([w.j(0.1),A.uF,A.uF],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.G,A.w.j(0.35),A.eS,22)],n)
l=w.j(0.15)
l=B.o(d,B.X(a0?A.x4:A.v9,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fF,d,d,d),1)
j=A.c.j(0.06)
i=B.l(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.o(d,B.A(B.a([B.X(A.hC,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.m(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.m(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uW(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ig,l,d),A.df,B.aZd(new B.cN(D.b8h,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eN,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.m(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.eb,d,d,d,1,d,d,!1,"\u2022",d,new C.duk(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fMN,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b0,new B.n(d,d,d,B.l(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.m(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.ch2:D.cvQ
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.i,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.X(A.hC,w,d,d,d,d)
k=B.m(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bA(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.l(16),new B.ax(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.l(16),new B.ax(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,A.nf,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.l(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.eV),B.iQ(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f1)],h),A.l,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.n),d,d,d,d,A.hP,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.l(18)
l=a0?A.Tn:A.a5k
n=B.a([new B.ab(0,A.G,(a0?A.b2:A.dY).j(0.45),A.dp,18)],n)
k=a0?e.gcCY():e.gcL3()
j=B.X(a0?A.a3h:A.lU,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bN(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lN(j,B.d(i,d,d,d,d,d,d,A.lZ,d,d,d),k,B.fu(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.l(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aY,A.b3,A.x,p,A.xh,d),A.n),d,d,new B.bl("form"+s,x.W),d,A.wI,d,d,d)},
c2F(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.due(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.duf())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fOl
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iD:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.ioc(a2,B.M7(a0.a.e,new C.dug(a0)))
a2=B.l(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.l(99)
u=B.l(99)
q=x.p
u=B.a([B.A(B.a([D.bMg,B.aM(!1,v,!0,B.o(a1,D.fiO,A.f,a1,a1,new B.n(a1,a1,B.K(D.f1.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lO,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.duh(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.i,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bDM,B.x(B.a([B.X(A.HH,A.c.j(0.25),a1,a1,a1,40),A.T,D.h8w],q),A.l,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cT(a4,0,B.dA(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gJ(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f5||k===A.kr||k===A.eF
if(l===A.cv)i=j?A.bZ:D.f1
else i=l===A.dG?A.jd:A.fj
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.X(j?A.v9:A.x4,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bH(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXD(n),a1,a1,a1,a1,a1,a1,A.j2,a1,a1,a1)
e=C.hyC(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kJ)f.push(new B.D(A.amE,new B.D4(A.bI,5,4,A.br,B.a([a0.aQD("Before",m.b),a0.aQD("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hGu(n)
v.push(B.o(a1,new B.c8(A.aM,A.e,A.i,A.l,a1,A.p,a1,0,B.a([k,A.bc,new B.bz(1,A.bd,m,a1),A.ae,B.x(B.a([f,A.ax,B.o(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.z9,a1,a1,a1)],q),A.dO,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bH(A.a1,A.a1,new B.ax(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qI,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hs(D.c2c,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.ce,a1,a1,a1),new C.dui(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.n(A.uF,a1,a3,a2,a1,a1,A.n),a1,a1,D.hBl,a1,D.bGa,a1,a1,a1)},
aQD(d,e){var w=null,v=A.c.j(0.05),u=B.l(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cR(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zm(B.cR(B.a([s,B.cR(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fK3,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.n3,w,w,w)},
aZn(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tk(d))return!1
if(v===A.fS||v===A.f5)return!0
if(v===A.pa||v===A.kr)return!0
if(v===A.kK)return!0
if(v===A.h8)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXD(d){var w,v=d.f
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
C.bdH.prototype={
a4(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bjX.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.ah(new B.r(u,0),new B.r(u,t),w)
u=v*0.65
d.ah(new B.r(u,0),new B.r(u,t),w)
t*=0.5
d.ah(new B.r(0,t),new B.r(v,t),w)},
aD(d){return!1}}
C.byR.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a4(0,p,s,p+80)
n=[A.ba,A.h9,A.bv][q]
$.R()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.san(new B.a7(A.aY,A.b3,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aC(0,o))
a1.aF(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.R()
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.S,A.Q,A.W,A.X,A.U)
h.r=A.pp.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.h.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.R()
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.h.F(v+m*0.25,1)
t=A.pp.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jM(new B.ev("z",a0,a0,A.cN,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.c0,new B.ji(1),a0,a0,a0,a0,A.c1,a0,A.cw)
d.ep()
d.a4(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aNw.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.bAQ.prototype={}
C.b2a.prototype={}
C.a0Y.prototype={
S(){return new C.aGh(new B.at(A.aw,$.aw()))},
cZM(d,e){return this.d.$2(d,e)}}
C.aGh.prototype={
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
b2k(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.els(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.cZM(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aD(a0,A.eU,e).w
e=B.aD(a0,A.dD,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.l(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c1y,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ab(0,A.G,A.fe.j(0.5),A.J,18)],v),D.auh,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fWB,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mC,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aH(f,f,f,f,D.c2r,f,f,f,new C.elv(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.i,0,f,f)
s=g.b9l(A.eY,"You",A.cs)
r=A.aQ.j(0.15)
q=B.l(99)
q=B.A(B.a([s,new B.D(A.kX,B.o(f,D.h_M,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.hn,f,f,f),f),g.b9l(A.x0,"Your friend",A.c4)],u),A.l,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.l(16)
p=A.c.j(0.12)
o=B.l(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b72),f,f,f,f,f,f,f,f,A.Fh,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c54,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mB,f,f,f,1,f,f,!1,"\u2022",f,new C.elw(g),f,new C.elx(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cqQ[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.aug:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aE:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dl,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.bd,B.ay(f,B.cU(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.i,0,A.p),f,f,A.b0,new B.n(p,f,new B.bH(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fi,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ely(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.i,0,f,f)
r=B.A(B.a([B.X(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.m(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.i,0,f,f)
p=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h3P,A.am,o,A.aO,D.h8k,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bN(new B.n(f,f,f,p,v,D.cbY,A.n),A.bk,B.hs(D.ast,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fF,f,f,f),g.gceu(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b94,f,f,f,f,D.bHv,f,f,f),f)},
b9l(d,e,f){var w=null,v=f.j(0.1),u=B.l(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.X(d,f,w,w,w,24),A.ax,B.d(e,w,w,w,w,w,w,A.Fi,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.fi,w,w,w),1)}}
C.px.prototype={}
C.btF.prototype={
a4(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.S,A.Q,A.W,A.X,A.U)
if(w===0)r=A.bi
else r=(w&1)===0?A.bD:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iL.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fz(s,A.cw,s,s,s,B.cR(s,s,s,s,s,s,s,s,s,A.aXV,B.w(r)),A.a7,A.c0,s,A.dI,A.c1)
u.ep()
r=u.b
t=r.c
r=r.a.c
u.a4(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aD(d){return d.b!=this.b}}
C.Fx.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.at9.prototype={
gkt(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsH(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hcd("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3v()
w=s.gkt()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.c0(9,"",!1,x.N)
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
u=J.e3(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c0(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkt())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0r(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKd.h(0,d)
s.c=w==null?"Play to earn":w}},
bej(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkt()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.clh(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c0(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cIk(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atd(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.cli(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c0(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dP(e.h(0,q))
else{o=B.cd(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJt(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atd(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clj(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dP(e.h(0,p))
else{o=B.cd(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bKM(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atd(e,f)
break}},
cTp(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEj())
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
q=B.B(new B.N(q,new C.cll(),p),p.k("ak.E"))
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
q=B.B(new B.N(q,new C.clm(),p),p.k("ak.E"))
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
aEj(){var w,v,u,t=this
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
atd(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cIk(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJt(d,e){var w,v,u,t,s
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
bKM(d,e){var w,v,u,t,s,r,q
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
UV(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkt())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEj():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3v(){var w,v,u=this,t=J.e3(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.cle(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0r(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.cg)},
d2y(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkt())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UV(q,v==null?"":v)?r.z:-1}if(!r.gkt()){v=r.d
v=v==null?null:v.d
v=!r.UV(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkt()?r.z:w
if(!r.gkt()&&u!==r.z)return!1
t=J.t(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkt()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aJ(r.y[d],e,r.z)
J.aJ(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aaF(2)){r.acf(1)
return!0}if(r.aaF(1)){r.acf(2)
return!0}if(r.gkt()&&r.z===2){r.bFn(f)
if(r.aaF(2)){r.acf(1)
return!0}if(r.aaF(1)){r.acf(2)
return!0}}}return!1},
acf(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bFn(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
aaF(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d2A(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r4
if(!s.gkt()){w=s.d
w=w!=null&&!s.UV("tic_tac_go",w.d)}else w=!1
if(w)return D.r4
if(s.gkt())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.akV(v))return s.aW_(v,!0)
if(!A.d.q(s.at,""))return s.aW0()
s.ax=!s.ax
if(!s.gkt()){s.x.n(0,"turnEmail",s.aEj())
s.c=s.b_V()
return D.r4}if(s.gkt()){t=s.cpI(e)
if(t>=0){s.at[t]="O"
if(s.akV("O"))return s.aW_("O",!1)
if(!A.d.q(s.at,""))return s.aW0()
s.ax=!0}}s.c=s.gkt()?"Your turn \u2014 you are X":s.b_V()
return D.r4},
b_V(){var w=this.d
if(w==null)return"Take your turn"
return this.UV("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aW_(d,e){var w,v,u=this
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
return e?D.r5:D.JI},
aW0(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Uk},
cpI(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.akV("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.akV("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dgr[u]
if(v[w].length===0)return w}return-1},
akV(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.doR[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4O(d){return A.d.cB(d,0,new C.clk())},
cMU(d){this.ay.push(1+d.aw(10))
if(this.a4O(this.ay)>21)return!0
return!1},
cMV(d){var w,v,u,t=this
while(t.a4O(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4O(t.ay)
v=t.a4O(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cSL(d,e){var w,v,u,t=this
if(t.e)return D.r4
if(!t.gkt()){w=t.d
w=w!=null&&!t.UV("connect_four_pro",w.d)}else w=!1
if(w)return D.r4
if(t.gkt())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r4
if(!t.ai0(d,w))return D.r4
if(t.aat(t.fx))return t.aVY(t.fx,!0)
if(t.aRt())return t.aVZ()
w=t.fx===1?2:1
t.fx=w
if(t.gkt()&&w===2){u=t.cp5(e)
if(u>=0){t.ai0(u,2)
if(t.aat(2))return t.aVY(2,!1)
if(t.aRt())return t.aVZ()
t.fx=1}}t.c=t.gkt()?"Your turn \u2014 drop a red disc":t.bJs()
return D.r4},
bJs(){var w=this.d
if(w==null)return"Drop a disc"
return this.UV("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ai0(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRt(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aVY(d,e){var w,v,u,t=this
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
return e?D.r5:D.JI},
aVZ(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Uk},
cp5(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ai0(w,2)
v=r.aat(2)
r.bbZ(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ai0(w,1)
u=r.aat(1)
r.bbZ(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bbZ(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aat(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJu(w,v,d))return!0}return!1},
bJu(d,e,f){var w,v,u,t,s=new C.cld(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfg(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0r(d)}return w.a>=w.b}}
C.au4.prototype={
S(){return new C.aH4(null,null)},
cYF(d){return this.e.$1(d)}}
C.aH4.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,D.bCT,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aV(0,v.gb2N())
v.aAb()},
bz(d){var w
this.bK(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.cg)
this.aAb()}},
aAb(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aiY(t,u)
C.aiY(t,u)
w.a.cYF(s)
w.a.toString
w.m(new C.eT1())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb2N())
w=v.d
w===$&&B.c()
w.t()
v.bAW()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aiY(j,i),g=C.aiY(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wW(new B.d3(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ab(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1u,l,l,l,3),l),A.UT,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.ev(v,l,l,A.cN,l,l,l,l,l,l,D.fGS))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cD}else if(s===t){r=A.be
q=A.O}else{r=A.aA
q=A.H}d.push(new B.ev(t,l,l,A.cN,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wW(new B.d3(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.UT,l,l))}p=f===0?0:A.h.T(h/f*100)
k=A.w.j(0.35)
v=B.l(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b2M("Correct",""+h,A.bi),A.ae,m.b2M("Wrong / missed",""+(f-g),A.aA),A.b4,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fyt,l,l,l)],o),A.l,l,A.e,A.i,0,l,l),A.am,D.h0V],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.ca(new B.abm(l,B.cR(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.m(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.l(12),D.b6W),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,D.aXU,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.i,0,A.p)},
b2M(d,e,f){var w=null,v=f.j(0.15),u=B.l(8)
return B.o(w,B.d(d+": "+e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,w,w,w,A.hn,w,w,w)}}
C.aP0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
var z=a.updateTypes(["aB<~>()","~()","H(iq,iq)","~([y4?])","Q(rc)","rc()","H(rP,rP)","Q(rP)","H(rQ,rQ)","QE(Z)","Q(iq)","cK(afe)","a0F(Z)","a_M(Z)","ag_(Z)","a84(Z)","OA(Z)","aeR(Z,hv<ai<jq>>)","aeQ(Z,H)","v(rc)","rP(ac<@,@>)","~(Fx,at9)","Os(Z)","ac<q,@>(rP)","rQ(ac<@,@>)","ac<q,@>(kH)","ac<q,@>(rQ)","Q(rQ)","ac<q,@>(lS)","lS(@)","ac<q,@>(iC)","iC(@)","iq(@)","aB<~>(kH)","ac<q,@>(iq)","~(H,H)","iq(iq)","WS(Z)","aB<Q>(ai<iq>)","a0E(Z)","~(iq)","a1p(Z)","WT(Z)","q(iq)","Q(lS)","xJ(bC<H,lS>)","adl(Z,H)","H(iC,iC)","add(lS)","v(rV)","bz(JI)","a0a(Z)","~(d7{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(d7)","a0Y(Z)","~(Fx)","q(q)","a1q(Z)"])
C.cC8.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cC9(r,w,s.b,v,s.d)
t=s.e
r.b=B.dh(t,u)
v.r=new C.cC5(r)
v.e=new C.cC6(r,w)
v.f=new C.cC7(r,w,t,u)},
$S:0}
C.cC9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.aa(r)
u=B.cs(r)
s=v
q=u
p=B.H7(s,q)
if(p==null)p=new B.jU(s,q==null?B.HV(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:42}
C.cC5.prototype={
$0(){this.a.b.a1(0)
return $.HJ()},
$S:2080}
C.cC6.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaF.$0()
this.a.b.a1(0)},
$S:0}
C.cC7.prototype={
$0(){var w,v=this,u=v.b,t=B.dx(0,0,u.gbhp(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cC4(w,u,v.d))},
$S:0}
C.cC4.prototype={
$0(){var w=this.c
this.a.b=B.dh(this.b,w)
w.$1(null)},
$S:0}
C.feS.prototype={
$1(d){var w=this.a
w.m(new C.feR(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.feR.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hv(D.alN,this.b,null,null,v.$ti.k("hv<1>"))},
$S:0}
C.feU.prototype={
$2(d,e){var w=this.a
w.m(new C.feP(w,d,e))},
$S:60}
C.feP.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hv(D.alN,null,this.b,this.c,v.$ti.k("hv<1>"))},
$S:0}
C.feT.prototype={
$0(){var w=this.a
w.m(new C.feQ(w))},
$S:0}
C.feQ.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hv(A.yL,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fSj.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cv},
$S:15}
C.fSb.prototype={
$1(d){return d},
$S:13}
C.fyt.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.d("NGMY",w,1,A.eT,w,!1,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afI,w,v,w,w,w,w,w,v)},
$S:164}
C.fyq.prototype={
$3(d,e,f){return this.a.$0()},
$S:155}
C.fyr.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kE(w,A.z,v.d,new C.fyp(v.e),A.h2,v.c,!0,v.b,null,null,v.a)},
$S:2081}
C.fyp.prototype={
$3(d,e,f){return this.a.$0()},
$S:155}
C.fys.prototype={
$3(d,e,f){return this.a.$0()},
$S:155}
C.dm6.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dmh.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dmz.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmA.prototype={
$1(d){return this.a.Ku()},
$S:12}
C.dmp.prototype={
$0(){var w=J.b9(this.b,new C.dmo(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmo.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmq.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ac<q,@>>")
v=B.B(new B.N(v,new C.dmn(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmn.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dms.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ac<q,@>>")
v=B.B(new B.N(v,new C.dmr(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmr.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmk.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgy(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arJ(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dmi(t))
case 3:if(t.c!=null)t.m(new C.dmj(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:47}
C.dmi.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmj.prototype={
$0(){return this.a.d++},
$S:0}
C.dml.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmm.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmc.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.ivy(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aiN(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ku(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmd.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.ikf(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aiN(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ku(),$async$$0)
case 3:t.Jf(A.d.dM(t.y,new C.dma(s),new C.dmb(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dma.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmb.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dme.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmf.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmg.prototype={
$0(){return this.a.Jf(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dm9.prototype={
$0(){return this.a.c6W(this.b)},
$S:0}
C.dm8.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.iw1(u,w.b,new C.dm7(v,w))},
$S:0}
C.dm7.prototype={
$2(d,e){return this.a.ajo(this.b,d,e)},
$S:804}
C.dmy.prototype={
$2(d,e){if(d)return
this.a.aVC()},
$S:131}
C.dmw.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b29(w.a.c.a),new C.dmv(w,this.b,this.c),null,null,x.gH)},
$S:2083}
C.dmv.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.l(12)
v=B.l(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aE(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k7,B.bJX(A.d2,B.X(A.h3,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dmu(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:2084}
C.dmu.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fOA(s.c.a,s.e).eF(new C.dmt())
w=2
return B.b(C.bHf(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmt.prototype={
$1(d){},
$S:31}
C.dmx.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_H.prototype={
$0(){var w=this.a
return B.M7(w.a.c.a,new C.e_G(w))},
$S:83}
C.e_G.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_I.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bg=t.aj()
v.bv()
w.m(new C.e_F())},
$S:0}
C.e_F.prototype={
$0(){},
$S:0}
C.e_J.prototype={
$2(d,e){var w,v=this.a
if(!C.cgy(v.a.c)){if($.hc8.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hc9(this.b,v.x,w)
return!1}C.arJ(v.a.c.a)}if(B.M7(v.a.c.a,new C.e_E(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJR()
w=v.a
w.toString
w.hK(new B.d7(A.o.v(1000*Date.now()),v.a.c.a,d,A.kr,A.fx,e,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:2085}
C.e_E.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_K.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d7(u,s.c.a,d,A.h8,A.fx,e,v,v,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.h.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vd(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2086}
C.dm0.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dm3.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dm4.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dm5.prototype={
$1(d){var w=null,v=this.a,u=B.fu(w,w,v.e===d?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f7,B.iz(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dm2(v,d),u),w),1)},
$S:236}
C.dm2.prototype={
$0(){var w=this.a
return w.m(new C.dm1(w,this.b))},
$S:0}
C.dm1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dnT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnW.prototype={
$1(d){this.a.cq3()
return null},
$S:12}
C.dnX.prototype={
$1(d){return this.a.cGr()},
$S:12}
C.dnY.prototype={
$1(d){this.a.a3U()
return null},
$S:12}
C.dnZ.prototype={
$1(d){this.a.aku()
return null},
$S:12}
C.do_.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.dnU(v))
w=v.as
if(w!=null)w.a1(0)
v.FO()
return}v.m(new C.dnV(v))},
$S:12}
C.dnU.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dnV.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dn8.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dn9.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dnC.prototype={
$1(d){return this.a.go.q(0,d)},
$S:30}
C.dnD.prototype={
$0(){},
$S:0}
C.dno.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnp.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dnq.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnr.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dns.prototype={
$0(){},
$S:0}
C.dmB.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dn7.prototype={
$0(){var w=this.a
w.at=this.b
w.b8Q()},
$S:0}
C.dnE.prototype={
$0(){},
$S:0}
C.dnN.prototype={
$0(){},
$S:0}
C.dnB.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dnA(w))},
$S:0}
C.dnA.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dn5.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dn6.prototype={
$0(){},
$S:0}
C.dnI.prototype={
$1(d){return d==null},
$S:220}
C.dnJ.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dnK.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dmC.prototype={
$1(d){return d==null},
$S:220}
C.dmD.prototype={
$0(){return this.a.bg++},
$S:0}
C.dmE.prototype={
$0(){},
$S:0}
C.dnh.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dni.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nc.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dnj.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dng(w))},
$S:11}
C.dng.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dnt.prototype={
$0(){return this.a.y1++},
$S:0}
C.dnu.prototype={
$0(){},
$S:0}
C.dnv.prototype={
$0(){return this.a.y2++},
$S:0}
C.dnw.prototype={
$0(){},
$S:0}
C.dnx.prototype={
$0(){return this.a.bd++},
$S:0}
C.dny.prototype={
$0(){},
$S:0}
C.dnH.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnk.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnl.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dnm.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnn.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dnL.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dnM.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dmF.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmG.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dmH.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmI.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dnF.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dnG.prototype={
$0(){var w,v=this.a;++v.x2
v.aRf()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dnf.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dnz.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnd.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dne.prototype={
$2(d,e){return d+e.length},
$S:206}
C.dnO.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dnP.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dnQ.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dnS.prototype={
$1(d){var w=this.a,v=w.Pv(),u=v<=0?0:A.h.D(w.AP()/v,0,1),t=w.a.x,s=t*1.46
return new C.Os(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dnR.prototype={
$1(d){return d.bW(0.85)},
$S:178}
C.dnc.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nc.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j2,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hM(v,6,6,1,r),new C.dnb(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
$S:168}
C.dnb.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nc.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nc.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.auo:D.c9F,l=B.l(10),k=B.l(10)
if(p)w=m
else if(o)w=m
else w=n?D.auo:D.auh
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.X(D.cEA[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.m(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.n(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dna(r,e),s,s,s,s,s,s,s)},
$S:194}
C.dna.prototype={
$0(){return this.a.cpo(this.b)},
$S:0}
C.dmV.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bi.l()>>>16&255,A.bi.l()>>>8&255,A.bi.l()&255),r=B.l(10),q=B.l(10),p=B.l(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.d(t?"":u,w,w,w,w,w,w,D.aWQ,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmU(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:805}
C.dmU.prototype={
$0(){return this.a.cFG(this.b)},
$S:0}
C.dmW.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aE(!1,A.a3,!0,B.l(10),B.aM(!1,B.l(10),!0,B.o(A.z,B.d(u,w,w,w,w,w,w,D.aWQ,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmT(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:805}
C.dmT.prototype={
$0(){return this.a.cFF(this.b)},
$S:0}
C.dmX.prototype={
$1(d){return this.a.m(new C.dmS())},
$S:28}
C.dmS.prototype={
$0(){},
$S:0}
C.dmY.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aiY(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pB()
if(u.ghR()&&D.nc.q(0,u.a.e)){u.a29()
u.nm(!0)}else{v=A.d.cB(u.cy,0,new C.dmQ())
t=u.dx
if(t>=v)u.uA("All 5 sentences perfect \u2014 full payout!")
else u.Fd(t/v,t,v)}}else{if(u.ghR()&&D.nc.q(0,u.a.e))u.a29()
u.m(new C.dmR(u))}},
$S:0}
C.dmQ.prototype={
$2(d,e){return d+e.length},
$S:206}
C.dmR.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.cg)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dmZ.prototype={
$1(d){var w=null,v=B.fu(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.co,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a5(1/0,w,B.iz(B.d(d,w,w,w,w,w,w,N.aWJ,w,w,w),new C.dmP(this.a,d),v),w),w)},
$S:152}
C.dmP.prototype={
$0(){return this.a.b8c(this.b)},
$S:0}
C.dn_.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pY,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hM(3,4,4,1,u),new C.dmO(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
$S:168}
C.dmO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5Z(e),p=r===0
if(p)w=A.L
else w=q?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.l(10)
s=p?t:new C.dmK(s,e)
u=B.l(10)
p=p?"":""+r
return B.aE(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:85}
C.dmK.prototype={
$0(){return this.a.cFE(this.b)},
$S:0}
C.dn0.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dmN(q,d)
p=B.l(16)
if(o)w=D.a6x[d]
else{w=D.a6x[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.l(16)
u=o?B.a0(A.h.T(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6x[d]
t=B.a([new B.ab(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b0,new B.n(w,r,u,v,t,r,A.n),I.Cz,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2089}
C.dmN.prototype={
$0(){return this.a.cFH(this.b)},
$S:0}
C.dn1.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pY,t,t,t)
w=B.d("Move "+r.aAR()+"/"+C.hiU(),t,t,t,t,t,t,A.Fj,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.m(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hM(3,6,6,1,s),new C.dmM(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:168}
C.dmM.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.l(10),s=B.l(10),r=u?A.bi:D.bmk,q=u?A.ew:D.bwX
return B.aE(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dmJ(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:85}
C.dmJ.prototype={
$0(){return this.a.cFB(this.b)},
$S:0}
C.dn2.prototype={
$0(){return this.a.b8c(this.b[this.c])},
$S:0}
C.dn3.prototype={
$0(){return this.a.m(new C.dmL())},
$S:0}
C.dmL.prototype={
$0(){},
$S:0}
C.dn4.prototype={
$2(d,e){this.a.a0T(d,e)
return null},
$S:z+21}
C.drs.prototype={
$1(d){return this.a.cpT(this.b,d)},
$S:2090}
C.drr.prototype={
$0(){var w=this
return w.a.a.cZd(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOa.prototype={
$1(d){var w=this.a
w.a2p()
w.uJ()},
$S:7}
C.cNv.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNl.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNm.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNF.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNC.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cND.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNE.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNx.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cNw(w))},
$S:0}
C.cNw.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNn.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNA.prototype={
$1(d){var w=this.a
return new C.WS(w.fx,new C.cNz(w),w.a.f.r,null)},
$S:z+37}
C.cNz.prototype={
$1(d){return this.bnY(d)},
bnY(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chy(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cNy(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNy.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNY.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cNS.prototype={
$1(d){this.a.uJ()
return null},
$S:12}
C.cNV.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.aq(v.gaYB().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uJ()
return}v.m(new C.cNU())},
$S:12}
C.cNU.prototype={
$0(){},
$S:0}
C.cNR.prototype={
$1(d){this.a.FW()
return null},
$S:12}
C.cNT.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cNQ.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cNs.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cNt.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNu.prototype={
$0(){var w=this.a
if(w.c!=null)w.a35(!0)},
$S:11}
C.cNq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNr.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.UZ(this.b)},
$S:7}
C.cNI.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e6,A.kV)},
$S:7}
C.cNB.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNK.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9H()
w.r.bP(0,A.cg)
w.at=!0},
$S:0}
C.cNL.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cNM.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cNN.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b9(w.b,v.gcoN(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.b9H()},
$S:0}
C.cNO.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cNP.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNG.prototype={
$1(d){return this.bnZ(d)},
bnZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.as5(q,new C.rP("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atk()
case 4:k.c.K(x.q).f.U(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:401}
C.cNX.prototype={
$1(d){return this.bo_(d)},
bo_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:401}
C.cNH.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cO9.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.acS(v-1)},
$S:0}
C.cO2.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cO5.prototype={
$1(d){var w=this.a
w.m(new C.cO_(w,d))
if(d===0)w.a35(!0)},
$S:28}
C.cO_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cO3.prototype={
$2$size(d,e){return C.hgZ(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2091}
C.cO4.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.huH(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.asY(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cO0(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.as3(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uJ(),$async$$0)
case 15:p.m(new C.cO1(p))
p.acS(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.uJ(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:53}
C.cO0.prototype={
$2(d,e){return this.bo0(d,e)},
bo0(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3E(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:136}
C.cO1.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO7.prototype={
$2(d,e){return A.ae},
$S:38}
C.cO6.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6E:D.a5U)[e],w,w,w,w,w,w,A.q0,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cNZ(v,e)
return B.mY(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:652}
C.cNZ.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6E:D.a5U
w.r.sb4(0,v[this.b])
w.nl()
return null},
$S:0}
C.cO8.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNo.prototype={
$0(){return this.a.acS(0)},
$S:0}
C.cNW.prototype={
$0(){return this.a.acS(this.b)},
$S:0}
C.cNp.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3c,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.m(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a0Z,B.x(B.a([u,A.af,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.m(v,v,t?A.aE:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bKq(t[e],w.c)
return u.aRT(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.c4E.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.h.M(d)
return new B.V(B.h2(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bj(J.k(d))
return v==null?null:v.bU()},
$S:299}
C.c4D.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:559}
C.c4G.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bj(J.k(d))
w=w==null?null:w.bU()}return w},
$S:299}
C.c4F.prototype={
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
s=B.a6_(A.a7t,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a6_(A.a5S,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a6_(A.IR,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d7(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:737}
C.dHZ.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dI_.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dHQ.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dHO.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.Bu(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.hb9(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.py(o.a.c,!1),$async$$0)
case 4:o.li(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abk(),$async$$0)
case 3:q=e
if(q==null){r.li("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).ce(B.ee(new C.dHX(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.py(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHX.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0E(w.b,w.a,u,v,null)},
$S:z+39}
C.dHN.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i05(q)?3:4
break
case 3:w=5
return B.b(t.a.Fs(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_H(q,s.a.c),$async$$0)
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
case 9:s.li(C.c4I(s.a.c))
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
return B.b(s.AF(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aTd(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHM.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dHP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aeO(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hrs(q)
if(s==null){r.li("Could not read that backup file.")
w=1
break}if(!C.c4H(s,r.a.c,null)){r.li(C.c4I(r.a.c))
w=1
break}w=4
return B.b(r.bMJ(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHW.prototype={
$1(d){var w=null,v=new B.at(A.aw,$.aw()),u=B.O(d).ax.a===A.I,t=u?A.iJ:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.m(w,w,u?A.ab:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.l(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.dHU(d),w,w),B.bJ(D.fQ0,w,new C.dHV(d,v),B.bp(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h49,w)},
$S:18}
C.dHU.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHV.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dHR.prototype={
$1(d){return D.hIR},
$S:z+12}
C.dHS.prototype={
$0(){return this.a.Ft(A.a.i(this.b))},
$S:1}
C.dHT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_H(t.b,r.a.c),$async$$0)
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
return B.b(r.AF(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.li(C.c4I(r.a.c))
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
return B.b(r.aTd(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dI0.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dI4.prototype={
$1(d){this.a.S0()
return null},
$S:12}
C.dI1.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dI2.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fx(v.gayV()))
this.b.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gayV()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dI3.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dI5.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.Y(s,"NGMYSNAP1|")||A.a.Y(s,"NGMYLOCALSYNC1|")||A.a.Y(s,"NGMYLOCALLIVE1|")||A.a.Y(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:166}
C.fD4.prototype={
$1(d){return D.hFg},
$S:z+13}
C.fEh.prototype={
$1(d){return new C.ag_(this.a,this.b,this.c,null)},
$S:z+14}
C.f8n.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f8o.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dgU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.dgR.prototype={
$2(d,e){return e.amJ(e.a.toUpperCase())},
$S:2092}
C.dgS.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dgT.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5q.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aU(D.dxU,A.a.gkh(v))},
$S:4}
C.fOu.prototype={
$1(d){return d.a===this.a},
$S:2093}
C.fOv.prototype={
$0(){return A.d.gH(A.DY)},
$S:2094}
C.dOs.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dOr(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8I("Time's up")},
$S:12}
C.dOr.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dOj.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOo.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dOl(w,d,e))},
$S:253}
C.dOl.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOp.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dOk(w))
w.czP(!0)},
$S:0}
C.dOk.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOq.prototype={
$1(d){this.a.b8I(d)
return null},
$S:2}
C.dOm.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOn.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.cdH.prototype={
$1(d){return D.dVL},
$S:z+15}
C.cdG.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fF6.prototype={
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
$S:2095}
C.fF7.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.h.M(w)
return w==null?0:w},
$S:704}
C.fF8.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:206}
C.fVL.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hDk(w,v):C.hhl(w,v)
if(u===3)++w.f
C.ahw(w,this.c,u)
return u},
$S:2096}
C.fVN.prototype={
$0(){return C.hDk(this.a,this.b)},
$S:96}
C.fVM.prototype={
$0(){return C.hhl(this.a,this.b)},
$S:96}
C.dHB.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dHA(w))},
$S:0}
C.dHA.prototype={
$0(){this.a.r=1+A.o.F(B.FS(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dHC.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.h.bh(u*10)
if(w!==v.w)v.m(new C.dHz(v,w))}},
$S:0}
C.dHz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cg7.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.dv(A.dB,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),1)},
$S:2097}
C.cg6.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.h.ad(e,2),w,w,w,w,w,w,A.mC,w,w,w)},
$S:404}
C.cgz.prototype={
$1(d){return new C.OA(this.a,this.b,!1,null,null)},
$S:z+16}
C.e7h.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.l(e?0:30)
e=e?g:B.K(A.b8.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ab(2,A.G,A.b8.j(0.35),A.J,36),new B.ab(0,A.G,A.bE.j(0.175),A.J,24)],x.V)
v=B.l(f.a.e?0:30)
u=x.O
t=B.ao(g,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.ba.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bE.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.i:A.N
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.o(g,D.bZi,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.G,A.b8.j(0.55),A.cz,18)],n),A.vi,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.of(A.jV,D.h1F,new C.e7d()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.m(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cD,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.bZ.j(0.12)
k=B.l(18)
j=B.K(A.bZ.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.X(D.bTf,A.bZ.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.m(g,g,A.bZ.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.i,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.m(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e7e(),B.T(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.n),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.l(18)
k=B.K(A.b8.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azJ(A.hp,"Unlimited games with an active plan",A.ba),A.P,f.azJ(A.ke,"Weekday check-ins grow your balance",A.b8),A.P,f.azJ(A.mk,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.n),g,g,g,g,A.bH,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bN(new B.n(g,g,g,B.l(16),B.a([new B.ab(0,A.G,A.bE.j(0.45),A.cz,16)],n),A.vi,A.n),A.bk,B.de(D.c1O,g,D.fY1,new C.e7f(f,a0),B.bp(A.L,g,g,g,A.c,A.KP,g,A.L,new B.ba(B.l(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bP(!1,B.d(n,g,g,g,g,g,g,B.m(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e7g(f,a0),g,g))
if(f.a.e)o.push(A.b4)
h=B.o(g,B.bv(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.ccA,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,Z.a1r,g,A.d7,g,g,g)},
$S:774}
C.e7d.prototype={
$1(d){return D.cbu.aC(0,d)},
$S:76}
C.e7e.prototype={
$1(d){var w=null
return new B.D(A.eP,B.A(B.a([B.X(A.a3p,A.bZ.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$S:152}
C.e7f.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e7g.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fQS.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:625}
C.fQF.prototype={
$1(d){$.aU.x1$.push(new C.fQE(this.a))},
$S:7}
C.fQE.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fBo.prototype={
$1(d){return C.hDs(this.a,this.b+1)},
$S:7}
C.fSe.prototype={
$2(d,e){var w=B.aD(d,A.bX,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:154}
C.cgN.prototype={
$1(d){return d.r===this.a},
$S:263}
C.cgO.prototype={
$1(d){var w=$.aTM(),v=w.a
w.sp(0,v+1)
return v},
$S:2098}
C.cgP.prototype={
$1(d){},
$S:31}
C.cgM.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:263}
C.cgL.prototype={
$1(d){return d.f.cb(this.a)},
$S:263}
C.fy8.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.h3Q.prototype={
$1(d){return C.a8J(this.a)},
$S:113}
C.h3R.prototype={
$1(d){var w=$.aTM()
w.sp(0,w.a+1)},
$S:29}
C.h3S.prototype={
$1(d){},
$S:31}
C.h3T.prototype={
$1(d){return new B.ki($.aTM(),new C.h3P(this.a,this.b),null,null,x.am)},
$S:2099}
C.h3P.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arP(this.a,!1),new C.h3O(w),w,null,x.gv)},
$S:2100}
C.h3O.prototype={
$2(d,e){var w=e.b
return new C.aeR(w==null?this.a:w,null)},
$S:z+17}
C.e7k.prototype={
$1(d){return d.c},
$S:263}
C.e7l.prototype={
$1(d){return d.gbkx()},
$S:2101}
C.e7m.prototype={
$2(d,e){return d+e},
$S:89}
C.e7n.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7p.prototype={
$2(d,e){return A.P},
$S:38}
C.e7o.prototype={
$2(d,e){return new C.aeQ(J.t(this.a.c,e),null)},
$S:z+18}
C.e7j.prototype={
$1(d){return d==null?"\u2026":C.bDy(d)},
$S:2102}
C.h3W.prototype={
$3(d,e,f){var w=this
return B.qo(new C.aCM(w.a,w.b,w.c,w.d,new C.h3U(d,w.e),new C.h3V(d,w.f),null))},
$C:"$3",
$R:3,
$S:91}
C.h3U.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hGS(this.b)},
$S:0}
C.h3V.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hGS(this.b)},
$S:0}
C.do1.prototype={
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
A.d.u(w,new B.N(t,new C.do0(),B.T(t).k("N<1,v>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aD(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bi,A.ep,A.ec],r):B.a([A.aA,A.er,A.eq],r)
p=B.l(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.G,(h.a.c?A.dL:A.dP).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.ds()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.ajU,A.ut],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.o(i,D.bfp,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ab(4,A.G,A.d2.j(0.6),A.J,24),new B.ab(0,A.G,A.w.j(0.3),A.dp,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5j)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.Wu,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.l(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fRN,A.P,B.o(i,B.d(r,i,i,i,i,i,i,D.fHC,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Ot,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fKD,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dV(D.fPf,h.a.r,B.di(i,i,i,i,i,i,i,i,i,A.c,i,i,A.co,i,i,D.b6C,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(E.aYe,i,n,B.bp(A.c,i,i,i,h.c?A.ep:A.er,i,A.co,i,i,i,i,i)),1)],g),A.l,i,A.e,A.i,0,i,i))
w.push(B.e1(A.z,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.ao2,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:122}
C.do0.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.z,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.civ.prototype={
$2(d,e){var w=null,v=this.a,u=C.i_v(B.M7(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2103}
C.ciu.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.c5X.prototype={
$0(){},
$S:0}
C.fx4.prototype={
$1(d){return A.o.v(d)},
$S:82}
C.e_N.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e_O.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e_P.prototype={
$0(){var w=this.a
return w.w=D.Ta[w.d.aw(5)]},
$S:0}
C.e_Q.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e_R.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e_S.prototype={
$0(){var w=this.a
return w.m(new C.e_M(w))},
$S:0}
C.e_M.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_T.prototype={
$0(){var w=this.a
return w.m(new C.e_L(w))},
$S:0}
C.e_L.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_W.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e_X.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bi:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.l(10)
t=t.y?u:new C.e_V(t,d)
w=B.l(10)
v=A.h.ad(d,0)
return B.E(new B.D(A.j9,B.aE(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.m(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:2104}
C.e_V.prototype={
$0(){var w=this.a
return w.m(new C.e_U(w,this.b))},
$S:0}
C.e_U.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.cg)},
$S:0}
C.e7v.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cL.gco().aL(this.c)},
$S:0}
C.e7w.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7r.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.l(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f1.j(0.5):A.L,A.r,1),q=B.X(e,u?D.f1:A.aE,w,w,w,20)
return B.E(B.ay(w,B.cU(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.m(w,w,u?A.c:A.aE,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),w,w,A.b0,new B.n(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7t(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2105}
C.e7t.prototype={
$0(){var w=this.a
return w.m(new C.e7s(w,this.b))},
$S:0}
C.e7s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7u.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JK(this.b,v)},
$S:0}
C.e7q.prototype={
$0(){var w=this.a
return w.JK(w.gaud(),"Code")},
$S:0}
C.chi.prototype={
$1(d){return C.hWH(B.a1(d,x.N,x.z))},
$S:z+20}
C.chj.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chf.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chg.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chh.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chk.prototype={
$1(d){var w=d.c
return!w.d5(this.a.bS(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c94.prototype={
$1(d){return C.hWI(B.a1(d,x.N,x.z))},
$S:z+24}
C.c95.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c92.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c93.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c97.prototype={
$1(d){var w=d.b
return!w.d5(this.a)&&!w.cb(this.b)},
$S:z+27}
C.cht.prototype={
$1(d){return d.aj()},
$S:z+28}
C.chs.prototype={
$1(d){return C.htM(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chr.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chq.prototype={
$1(d){return C.i_8(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chv.prototype={
$1(d){return C.i_7(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chw.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chx.prototype={
$1(d){return d.aj()},
$S:z+34}
C.ebB.prototype={
$1(d){return d.bfW(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ebC.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ebw.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ebe.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.ebf.prototype={
$1(d){return new C.QE(this.a,null)},
$S:z+9}
C.ebg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.ebd(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JU()}},
$S:0}
C.ebd.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebs.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebt.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.iq5(v,w[0],w[3])
t.JU()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ebu.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebm.prototype={
$1(d){return new C.QE(this.a,null)},
$S:z+9}
C.ebn.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebl.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.ebr.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JU()},
$S:0}
C.ebq.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1q(u[w],new C.ebp(v,w),null)},
$S:z+59}
C.ebp.prototype={
$1(d){var w=this.a
return w.m(new C.ebo(w,this.b,d))},
$S:z+40}
C.ebo.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebi.prototype={
$0(){var w=this.a
return w.m(new C.ebh(w))},
$S:0}
C.ebh.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ebj.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eP,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.m(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cD,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:127}
C.ebk.prototype={
$1(d){return this.a.a2L()},
$S:2}
C.ebA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.uq:A.c
u=B.l(16)
t=B.l(16)
s=l?A.aL:A.bm
r=w.d
q=B.b1(r).j(0.15)
p=B.l(12)
q=B.o(n,B.X(A.aqR,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.b1(r).j(0.12)
o=B.l(8)
o=B.o(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.n),n,n,n,n,A.hB,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.da,B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awE(q,e,!0,n),n,n,n,n,new C.ebx(m,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CG(n,n,n,n,n,new C.eby(),A.J,new C.ebz(m,e),A.cq,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bl(w.a,x.W))},
$S:127}
C.ebz.prototype={
$1(d){var w=this
if(d==="edit")w.a.abQ(w.b)
if(d==="questions")w.a.a_2(w.b)
if(d==="delete")w.a.bPG(w.b)},
$S:2}
C.eby.prototype={
$1(d){return D.d5m},
$S:141}
C.ebx.prototype={
$0(){return this.a.a_2(this.b)},
$S:0}
C.cWV.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.n),s,s,s,s,A.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cWU(r,d),s,s,s,s,s,s,s)},
$S:2106}
C.cWU.prototype={
$0(){var w=this.a
return w.m(new C.cWS(w,this.b))},
$S:0}
C.cWS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWW.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.ay(w,B.hg(u,w,t===d?D.c2B:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cWT(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:467}
C.cWT.prototype={
$0(){var w=this.a
return w.m(new C.cWR(w,this.b))},
$S:0}
C.cWR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cWX.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cWY.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cQD(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f3h.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f3i.prototype={
$1(d){return new C.a1p(this.a,null)},
$S:z+41}
C.f3o.prototype={
$2(d,e){return A.P},
$S:38}
C.f3n.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.uq:A.c
u=B.l(14)
t=B.l(14)
s=l?A.aL:A.bm
r=w.d
if(r!=null&&r.length!==0){q=B.l(8)
r=B.bv(q,B.aSm(n,A.bY,36,A.qO,l?A.bP:A.an,r,48),A.aq)}else r=B.X(D.a39,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f3l(m,w,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c0S,n,n,n,new C.f3m(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:85}
C.f3m.prototype={
$0(){var w=this.a
w.m(new C.f3j(w,this.b))
w.azM()},
$S:0}
C.f3j.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f3l.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b3Z(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f3k(t,u.c,s))
t.azM()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f3k.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f3d.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f3b.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WT(w,"Answer Document",null)},
$S:z+42}
C.f3c.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f3f.prototype={
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
C.f3g.prototype={
$1(d){var w=this.a
return w.m(new C.f3e(w,d))},
$S:9}
C.f3e.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chn.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fSN.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ecb.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ebS.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lS("image","",this.b,null))},
$S:0}
C.ebX.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lS("video","","data:video/mp4;base64,"+A.cL.gco().aL(this.b),null))},
$S:0}
C.ebV.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7c,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7b,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.ebT(d),w,w),B.bJ(D.h17,w,new C.ebU(d),w)],v),w,w,w,u,w,w,w,w,D.fOs,w)},
$S:18}
C.ebT.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ebU.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ebW.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lS("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ebO.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ebP.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebQ.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ebR.prototype={
$1(d){return d.length!==0},
$S:3}
C.ec1.prototype={
$0(){var w=this.a.bIU()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ec2.prototype={
$0(){return this.a.azN("**","**")},
$S:0}
C.ec3.prototype={
$0(){return this.a.azN("*","*")},
$S:0}
C.ec4.prototype={
$0(){return this.a.azN("__","__")},
$S:0}
C.ec5.prototype={
$0(){return this.a.b23("## Section title")},
$S:0}
C.ec6.prototype={
$0(){return this.a.b23("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ec7.prototype={
$0(){},
$S:0}
C.ec8.prototype={
$0(){var w=this.a
w.m(new C.ec0(w))},
$S:0}
C.ec0.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZj)},
$S:0}
C.ec9.prototype={
$0(){var w=this.a
w.m(new C.ec_(w))},
$S:0}
C.ec_.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZk)},
$S:0}
C.eca.prototype={
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
return B.Ec(v,w,A.ata,t,v,new C.ebZ(this.a,d),v)},
$S:z+45}
C.ebZ.prototype={
$0(){var w=this.a
return w.m(new C.ebY(w,this.b))},
$S:0}
C.ebY.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.ebL.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2_},
$S:0}
C.ebM.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hGk},
$S:0}
C.ebD.prototype={
$0(){var w=this.a
w.d=D.b1Z
w.f=w.e=null},
$S:0}
C.ebE.prototype={
$0(){var w=this.a
w.d=D.b2_
w.f=null},
$S:0}
C.ebN.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebG.prototype={
$2(d,e){var w=this.a,v=w.gb9I()[e]
return new C.adl(v,this.b,new C.ebF(w,v),null)},
$S:z+46}
C.ebF.prototype={
$0(){return this.a.cdQ(this.b.a)},
$S:0}
C.ebI.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ebK.prototype={
$2(d,e){return A.T},
$S:38}
C.ebJ.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uq:A.c,p=B.l(16),o=B.l(16),n=B.l(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ab(0,A.G,A.w.j(r?0.28:0.06),A.dM,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.l(10)
v=B.l(10)
k.push(B.bv(w,B.aSm(v,A.bY,52,D.a39,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.l(12)
k.push(B.o(t,B.X(D.a39,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bc)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.m(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eI,r?A.bP:A.an,t,t,t,22))
return B.aE(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ebH(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:85}
C.ebH.prototype={
$0(){return this.a.ckP(this.b)},
$S:0}
C.chp.prototype={
$1(d){return new C.add(d,this.a,null)},
$S:z+48}
C.cQp.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oi(v==null?w.b:v)
if(u!=null)B.iP(u,A.fo,null)},
$S:0}
C.cQq.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQr.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nF,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:152}
C.dsl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsn.prototype={
$0(){return this.a.m(new C.dsm(this.b))},
$S:0}
C.dsm.prototype={
$0(){var w=this.a
return w.a.f?w.hi(0):w.qv(0)},
$S:0}
C.fwN.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecp.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Er)w.z=v
else w.Q=v},
$S:0}
C.ecg.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.ck,A.eW)},
$S:7}
C.eci.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:101}
C.ecj.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.cg)
w.r=!0},
$S:0}
C.eck.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecl.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:157}
C.ecm.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ecn.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.eco.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ech.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n_(l,A.bE.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bT,B.A(B.a([new B.a5(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.m(l,l,this.b?A.aE:A.dZ,l,l,l,l,l,l,l,l,12,A.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aD(k,A.bX,x.w).w
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
m=u?A.bo:A.cK
return new B.bK(t,l,l,B.o(l,B.d(w,l,l,l,l,l,l,B.m(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cD,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.be(A.iq,A.iq,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kA,A.jr,l,l,l),l)},
$S:41}
C.ecw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([D.ai6,A.a_,A.ol],t):B.a([A.qk,A.qi,A.qj],t)
w=B.a([new B.ab(-4,A.G,A.aD.j(0.35+w*0.25),A.dp,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.ds()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fA(A.z,B.o(o,D.bYk,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eGI,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.of(A.jV,D.h5V,new C.ect())
p=x.p
m=B.a([B.A(B.a([q,A.bc,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.m(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.l,o,A.e,A.i,0,o,o),A.af,B.A(B.a([n.axW(D.Er,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.axW(D.aMd,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.axW(D.Es,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.Es){t=B.a([A.P,n.cEe(u)],p)
if(n.w){q=n.x===D.Er?D.a7o:D.a6s
p=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.ecu(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bE.j(0.22),A.aD.j(0.12)],t)
q=B.l(12)
p=B.K(A.bE.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.o(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.m(o,o,u?A.ix:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dpY,new C.ecv(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.i,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.n),o,o,o,H.amV,H.an5,o,o,o)},
$S:90}
C.ect.prototype={
$1(d){return D.cc_.aC(0,d)},
$S:76}
C.ecu.prototype={
$1(d){return this.a.cEf(d,this.b)},
$S:z+49}
C.ecv.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMf?6:0,m=o?5:0,l=B.l(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.l(12)
p=p.r?q:new C.ecs(p,d)
s=C.i0D(d)
if(o)r=A.c
else r=v?A.ab:A.bq
r=B.d(s,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i0E(d)
if(o)v=A.ab
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aE(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.Ou,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.m(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.ecs.prototype={
$0(){var w=this.a
return w.m(new C.ecr(w,this.b))},
$S:0}
C.ecr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ecy.prototype={
$0(){var w=this.a
return w.m(new C.ecx(w))},
$S:0}
C.ecx.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ecf.prototype={
$0(){var w=this.a
return w.m(new C.ece(w,this.b))},
$S:0}
C.ece.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Es
if(v===D.aMd&&w.Q==null)w.Q=A.d.gH(D.a6s).a},
$S:0}
C.ecz.prototype={
$0(){return this.a.czF(this.b.a)},
$S:0}
C.ecq.prototype={
$0(){return this.a.JL(this.b)},
$S:0}
C.ecc.prototype={
$1(d){return this.a.b24()},
$S:2}
C.ecd.prototype={
$0(){return this.a.b24()},
$S:0}
C.h4N.prototype={
$1(d){var w=this
return new C.a0a(w.a,w.b,w.c,new C.h4M(w.d),null)},
$S:z+51}
C.h4M.prototype={
$0(){return J.lH(this.a.bm())},
$S:0}
C.dpG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bkP()},
$S:29}
C.dpH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aD(m,A.bX,u).w
s=Math.cos(v)
u=B.aD(m,A.bX,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e9:A.hp
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d0(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:345}
C.dpM.prototype={
$0(){},
$S:0}
C.dpL.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nl.az(0,A.h.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.ds()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fE(t*0.08)
w.k5(0.12)
return B.e1(A.z,B.fA(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.dpI.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ab(6,A.G,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n_(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.d6(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:122}
C.dpJ.prototype={
$1(d){return D.cc3.aC(0,d)},
$S:76}
C.dpK.prototype={
$0(){var w=this.a
w.a.bkP()
w.a.e.$0()},
$S:0}
C.cjo.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fS)if(d.x===A.dG){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjB.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqM.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.ers.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QR()},
$S:7}
C.ert.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ud||w===A.ue)return
this.a.Fn()},
$S:12}
C.eru.prototype={
$1(d){this.a.cGq()},
$S:12}
C.era.prototype={
$0(){this.a.Kg(this.b.d,!1)},
$S:0}
C.erb.prototype={
$0(){},
$S:0}
C.erc.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.erd.prototype={
$0(){},
$S:0}
C.ere.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erf.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.erg.prototype={
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
C.er5.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Q3()
w.a9X()},
$S:0}
C.eqN.prototype={
$0(){this.b.Kg(this.c.d+this.a.a,!1)},
$S:0}
C.er6.prototype={
$1(d){var w=d.d
return(w===A.fS||w===A.f5)&&d.x===A.dG},
$S:15}
C.er7.prototype={
$1(d){return d.a},
$S:182}
C.er8.prototype={
$1(d){return d.a===this.a},
$S:15}
C.er9.prototype={
$0(){},
$S:0}
C.eqR.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.eqS.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.er_.prototype={
$0(){},
$S:0}
C.eqX.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.eqY.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqZ.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.er0.prototype={
$0(){return this.a.z=!0},
$S:0}
C.er1.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w1(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.er2.prototype={
$0(){return this.a.z=!1},
$S:0}
C.er4.prototype={
$0(){var w=this.a
return w.m(new C.er3(w))},
$S:0}
C.er3.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqT.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqU.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erk.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erl.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:81}
C.erp.prototype={
$0(){var w=this.a
return w.m(new C.eri(w))},
$S:0}
C.eri.prototype={
$0(){return this.a.y=1},
$S:0}
C.erq.prototype={
$0(){var w=this.a
return w.m(new C.erh(w))},
$S:0}
C.erh.prototype={
$0(){return this.a.y=2},
$S:0}
C.err.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.erm.prototype={
$2$cloudRequest(d,e){return this.a.b3i(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2107}
C.ern.prototype={
$0(){return this.a.Fn()},
$S:1}
C.ero.prototype={
$0(){var w=this.a
return w.m(new C.erj(w))},
$S:0}
C.erj.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.eqQ.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.eqP(w))},
$S:0}
C.eqP.prototype={
$0(){return this.a.y=0},
$S:0}
C.eqO.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIv(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.G,A.aF.j(0.55),A.J,18)],x.V),D.c9Z,A.a6),t,t,t,t,t,t,t,t),A.ed,A.t3,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c8R(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.i,0,t,t)],w),t)},
$S:69}
C.eqW.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.m(new C.eqV(w,v))},
$S:0}
C.eqV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.du5.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fS||v===A.f5)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.du6.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:806}
C.du7.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hcw(v.c,u))
w=this.c?new C.du4(v):null
return v.bbM(this.b,A.pC,D.f1,w,"Today","$"+u,D.f1)},
$S:2109}
C.du4.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.du8.prototype={
$2(d,e){var w=this.a
return w.bbM(this.b,A.ka,A.cj,w.w,"Balance","$"+B.dG(B.M7(w.c.a,new C.du3(w))),A.cs)},
$S:74}
C.du3.prototype={
$0(){return this.a.c.d},
$S:83}
C.dtZ.prototype={
$0(){this.a.a.cYB()
return null},
$S:0}
C.du_.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b5(w,w,w,new C.byR(v,w),A.az)},
$S:59}
C.du0.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beh(v,!0,A.aF,D.pk,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beg(v,D.pk,w)}return B.b5(w,w,w,v,A.az)},
$S:59}
C.du1.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:806}
C.du2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cXh(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.h.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c6(new B.he(B.a([u,s],x.U)),new C.dtY(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2110}
C.dtY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.dtX(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b5(n,n,n,new C.bef(o.c,v,k,u,D.pk,D.byv,n),D.fo4))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.v7
else t=o.e?A.wU:D.bTr
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
l.push(B.o(n,B.x(B.a([t,A.am,s,A.ax,w,A.P,B.o(n,B.d(o.r,n,n,n,n,n,n,B.m(n,n,k?D.pk:A.pp,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.n),n,n,n,n,A.lo,n,n,n)],m),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:223}
C.dtX.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.h.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dr(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.l(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.pk.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:244}
C.dup.prototype={
$0(){},
$S:0}
C.duq.prototype={
$0(){},
$S:0}
C.dur.prototype={
$1(d){return d.x===A.dG},
$S:15}
C.dub.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.dua.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.m(new C.du9(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.du9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dum.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.l(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.j9,B.ay(v,B.cU(A.z,B.d("$"+t,v,v,v,v,v,v,B.m(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.n(q,v,p,r,v,v,A.n),A.hb,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.duo(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2112}
C.duo.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.dun(w,this.b))},
$S:0}
C.dun.prototype={
$0(){var w=""+this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dul.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uN,B.A(B.a([v,A.b4,B.d(e,w,w,w,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2113}
C.duk.prototype={
$1(d){return this.a.m(new C.duj())},
$S:2}
C.duj.prototype={
$0(){},
$S:0}
C.due.prototype={
$1(d){return this.a.aZn(d)&&!B.hkP(d)},
$S:15}
C.duf.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:81}
C.dug.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.duh.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dud())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dud.prototype={
$0(){},
$S:0}
C.dui.prototype={
$0(){var w=this.a
return w.m(new C.duc(w))},
$S:0}
C.duc.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fOB.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:81}
C.fGi.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fZO.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fGh.prototype={
$1(d){var w,v,u
if(!C.imY(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bj(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bj(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bj(J.k(w==null?"":w))}if(u!=null&&A.o.aq(new B.V(Date.now(),0,!1).bB(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fup.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.fYf.prototype={
$0(){return $.hi4=null},
$S:11}
C.fYg.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fVY.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fVZ.prototype={
$0(){var w,v=this.a
$.hhT.W(0,v)
w=C.uy(this.b,v)
if(w!=null)B.S2(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h0_.prototype={
$1(d){return new C.a0Y(this.a,this.b,null)},
$S:z+56}
C.els.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.elv.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.elw.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.elu(w))},
$S:2}
C.elu.prototype={
$0(){return this.a.f=""},
$S:0}
C.elx.prototype={
$1(d){return this.a.b2k()},
$S:2}
C.ely.prototype={
$0(){var w=this.a
return w.m(new C.elt(w,this.b))},
$S:0}
C.elt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fFg.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.b_(d,1)},
$S:13}
C.fFf.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.b_(d,1)},
$S:13}
C.fYw.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.fYx.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fS_.prototype={
$1(d){return d.a!=="send_email"},
$S:365}
C.fXY.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.l(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.d(d,w,w,w,w,w,w,A.hh,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,86,w,A.f7,w,w,w,72)},
$S:807}
C.clh.prototype={
$1(d){return J.k(d)},
$S:16}
C.cli.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clg(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c0(7,0,!1,x.S)},
$S:808}
C.clg.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cd(J.k(d),null)
if(w==null)w=0}return w},
$S:391}
C.clj.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clf(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c0(8,0,!1,x.S)},
$S:808}
C.clf.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cd(J.k(d),null)
if(w==null)w=0}return w},
$S:391}
C.cll.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:809}
C.clm.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:809}
C.cle.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.clk.prototype={
$2(d,e){return d+e},
$S:68}
C.cld.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:68}
C.fI3.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fHY.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.fHZ.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.fI_.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.fI0.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.fI1.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.fI2.prototype={
$0(){return this.a.$1(D.r5)},
$S:0}
C.frr.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.aq(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_1:D.bjT
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dC
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.G,A.w.j(0.35),A.dM,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.frq(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:86}
C.frq.prototype={
$0(){var w=this,v=w.a,u=v.d2y(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r5:D.JI
w.f.$1(v)}},
$S:0}
C.fFB.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,A.aVl,new C.fFA(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:154}
C.fFA.prototype={
$2(d,e){var w=this,v=null,u=B.l(12),t=B.l(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aA
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.m(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fFz(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fX,0,v,v,v,v,v,A.ai)},
$S:85}
C.fFz.prototype={
$0(){var w=this,v=w.a.d2A(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fqJ.prototype={
$1(d){return new B.D(A.j9,C.fVP(d,!1),null)},
$S:349}
C.fqK.prototype={
$1(d){return C.fVP(d,!1)},
$S:2117}
C.fqL.prototype={
$0(){var w=this,v=w.a
v.cMU(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fqM.prototype={
$0(){var w=this
w.a.cMV(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fCv.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mY(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.ce,v,v,v),A.dk,new C.fCu(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:2118}
C.fCu.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fEs.prototype={
$1(d){return D.duh[d]},
$S:82}
C.fEt.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fBk.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fBl.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.frU.prototype={
$0(){var w=this,v=w.a.cSL(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frT.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.mb
else w=u===1?A.dP:A.tC
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nK,v,v,v,v),v)},
$S:2119}
C.fBw.prototype={
$1(d){var w=this
if(w.a.bfg(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fBx.prototype={
$0(){var w=this
if(w.a.bfg(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fre.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fNE.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fNF.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:56}
C.eT1.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aN8.prototype
w.byZ=w.Z
w.byY=w.t
w=C.aN9.prototype
w.bz0=w.Z
w.bz_=w.t
w=C.aNa.prototype
w.bz2=w.Z
w.bz1=w.t
w=C.aO7.prototype
w.bA1=w.Z
w.bA0=w.t
w=C.aNG.prototype
w.bzz=w.t
w=C.aOh.prototype
w.bAb=w.t
w=C.aNb.prototype
w.bz3=w.t
w=C.aOp.prototype
w.bAk=w.t
w=C.aNg.prototype
w.bz8=w.t
w=C.aNw.prototype
w.bzp=w.t
w=C.aP0.prototype
w.bAW=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCK.prototype,"gbVL","bVM",19)
v(q,"gaVB","aVC",1)
v(C.aCJ.prototype,"gcD7","a3C",1)
v(q=C.aCL.prototype,"gc0h","c0i",1)
v(q,"gbKG","bKH",1)
v(q=C.azM.prototype,"gcw7","cw8",1)
v(q,"gckm","Rk",0)
v(q,"gcHg","cHh",1)
v(q,"gczb","nl",0)
w(q,"gcoN","coO",25)
w(q,"gcFu","T2",33)
v(q=C.aER.prototype,"gbTH","YO",0)
v(q,"gc9x","a_m",0)
v(q,"gc9u","a_l",0)
v(q,"gc9v","aeN",0)
v(q,"gc9w","Q7",0)
v(C.aC2.prototype,"gc9y","c9z",1)
u(C,"iut","hZQ",58)
t(C,"hkX",0,null,["$1","$0"],["hHc",function(){return C.hHc(null)}],3,0)
t(C,"bGX",0,null,["$1","$0"],["hHb",function(){return C.hHb(null)}],3,0)
v(C.O4.prototype,"gF6","chw",1)
v(C.aFC.prototype,"gcwp","Bx",0)
v(q=C.aFS.prototype,"gckG","Rm",0)
v(q,"gcpx","a1P",0)
v(q,"gcdK","cdL",1)
v(q=C.aG3.prototype,"gcdP","afT",0)
v(q,"gbEd","a9P",0)
v(q,"gcwF","a2L",0)
s(q,"gci0","ci1",35)
v(C.aI4.prototype,"gbEF","a9R",1)
v(q=C.aI3.prototype,"gcdO","afS",0)
v(q,"gcjD","ah0",0)
v(q=C.aG5.prototype,"gc3W","ady",0)
v(q,"gc3Y","Zu",0)
v(q,"gc3X","adz",0)
v(q=C.aG4.prototype,"gbH0","bH1",1)
v(q,"gbH2","bH3",1)
v(C.aG6.prototype,"gbMU","bMV",1)
v(C.aD4.prototype,"gcdR","cdS",1)
v(q=C.aGt.prototype,"gb2d","ce8",1)
r(q,"gb3g",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agE","aAp","b3i","b3h"],52,0,0)
r(q,"gche",0,4,null,["$4"],["chf"],53,0,0)
v(q,"gcjl","a1_",0)
v(q,"gckd","ah7",0)
v(q,"gck8","ah5",0)
v(q,"gc7b","aej",0)
w(C.aDS.prototype,"gc5Q","c5R",54)
w(q=C.aDU.prototype,"gcEn","cEo",55)
v(q,"gcCY","cCZ",1)
v(q,"gcL3","cL4",1)
v(C.aGh.prototype,"gceu","b2k",1)
v(C.aH4.prototype,"gb2N","aAb",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.np,[C.cC8,C.cC5,C.cC6,C.cC7,C.cC4,C.feR,C.feP,C.feT,C.feQ,C.fyt,C.dm6,C.dmh,C.dmp,C.dmq,C.dms,C.dmk,C.dmi,C.dmj,C.dml,C.dmm,C.dmc,C.dmd,C.dmb,C.dmf,C.dmg,C.dm9,C.dm8,C.dmu,C.dmx,C.e_H,C.e_G,C.e_I,C.e_F,C.e_E,C.dm0,C.dm3,C.dm4,C.dm2,C.dm1,C.dnT,C.dnU,C.dnV,C.dn8,C.dn9,C.dnD,C.dno,C.dnp,C.dnq,C.dnr,C.dns,C.dmB,C.dn7,C.dnE,C.dnN,C.dnB,C.dnA,C.dn5,C.dn6,C.dnJ,C.dnK,C.dmD,C.dmE,C.dnh,C.dni,C.dnj,C.dng,C.dnt,C.dnu,C.dnv,C.dnw,C.dnx,C.dny,C.dnH,C.dnk,C.dnl,C.dnm,C.dnn,C.dnL,C.dnM,C.dmF,C.dmG,C.dmH,C.dmI,C.dnF,C.dnG,C.dnf,C.dnz,C.dnd,C.dnO,C.dnP,C.dnQ,C.dna,C.dmU,C.dmT,C.dmS,C.dmY,C.dmR,C.dmP,C.dmK,C.dmN,C.dmJ,C.dn2,C.dn3,C.dmL,C.drr,C.cNv,C.cNl,C.cNm,C.cNF,C.cNC,C.cND,C.cNE,C.cNx,C.cNw,C.cNn,C.cNy,C.cNY,C.cNU,C.cNT,C.cNt,C.cNu,C.cNq,C.cNB,C.cNJ,C.cNK,C.cNL,C.cNM,C.cNN,C.cNO,C.cNP,C.cO9,C.cO2,C.cO_,C.cO4,C.cO1,C.cNZ,C.cNo,C.cNW,C.dHZ,C.dI_,C.dHQ,C.dHO,C.dHY,C.dHN,C.dHM,C.dHP,C.dHU,C.dHV,C.dHS,C.dHT,C.dI0,C.dI1,C.dI2,C.dI3,C.f8n,C.f8o,C.dgT,C.fOv,C.dOr,C.dOj,C.dOl,C.dOp,C.dOk,C.dOm,C.dOn,C.cdG,C.fVN,C.fVM,C.dHB,C.dHA,C.dHC,C.dHz,C.e7f,C.e7g,C.e7n,C.h3U,C.h3V,C.c5X,C.e_N,C.e_O,C.e_P,C.e_Q,C.e_R,C.e_S,C.e_M,C.e_T,C.e_L,C.e_W,C.e_V,C.e_U,C.e7v,C.e7w,C.e7t,C.e7s,C.e7u,C.e7q,C.ebv,C.ebw,C.ebe,C.ebg,C.ebs,C.ebt,C.ebn,C.ebl,C.ebr,C.ebo,C.ebi,C.ebh,C.ebx,C.cWU,C.cWS,C.cWT,C.cWR,C.cWX,C.cWY,C.f3h,C.f3m,C.f3j,C.f3l,C.f3k,C.f3d,C.f3c,C.f3f,C.f3e,C.ebS,C.ebX,C.ebT,C.ebU,C.ebW,C.ec1,C.ec2,C.ec3,C.ec4,C.ec5,C.ec6,C.ec7,C.ec8,C.ec0,C.ec9,C.ec_,C.ebZ,C.ebY,C.ebL,C.ebM,C.ebD,C.ebE,C.ebF,C.ebH,C.cQp,C.dsl,C.dsn,C.dsm,C.ecp,C.ecj,C.eck,C.ecm,C.ecn,C.eco,C.ecs,C.ecr,C.ecy,C.ecx,C.ecf,C.ece,C.ecz,C.ecq,C.ecd,C.h4M,C.dpM,C.dpK,C.eqM,C.era,C.erb,C.erc,C.erd,C.erf,C.erg,C.er5,C.eqN,C.er9,C.eqR,C.eqS,C.er_,C.eqX,C.eqY,C.eqZ,C.er0,C.er1,C.er2,C.er4,C.er3,C.eqT,C.eqU,C.erp,C.eri,C.erq,C.erh,C.err,C.ern,C.ero,C.erj,C.eqQ,C.eqP,C.eqW,C.eqV,C.du4,C.du3,C.dtZ,C.dup,C.duq,C.dub,C.dua,C.du9,C.duo,C.dun,C.duj,C.dug,C.duh,C.dud,C.dui,C.duc,C.fYf,C.fVZ,C.els,C.elv,C.elu,C.ely,C.elt,C.fHY,C.fHZ,C.fI_,C.fI0,C.fI1,C.fI2,C.frq,C.fFz,C.fqL,C.fqM,C.fCu,C.fEt,C.fBl,C.frU,C.fBx,C.fre,C.eT1])
u(B.kX,[C.cC9,C.feS,C.fSj,C.fSb,C.fyq,C.fyp,C.fys,C.dmz,C.dmA,C.dmo,C.dmn,C.dmr,C.dma,C.dme,C.dmt,C.e_K,C.dm5,C.dnW,C.dnX,C.dnY,C.dnZ,C.do_,C.dnC,C.dnI,C.dmC,C.dnS,C.dnR,C.dmV,C.dmW,C.dmX,C.dmZ,C.dn0,C.drs,C.cOa,C.cNA,C.cNz,C.cNS,C.cNV,C.cNR,C.cNr,C.cNI,C.cNG,C.cNX,C.cNH,C.cO5,C.cO3,C.cO8,C.c4E,C.c4D,C.c4G,C.c4F,C.dHX,C.dHW,C.dHR,C.dI4,C.dI5,C.fD4,C.fEh,C.dgU,C.dgS,C.c5q,C.fOu,C.dOs,C.dOq,C.cdH,C.fF6,C.fVL,C.cg7,C.cg6,C.cgz,C.e7d,C.e7e,C.fQS,C.fQF,C.fQE,C.fBo,C.cgN,C.cgO,C.cgP,C.cgM,C.cgL,C.fy8,C.h3Q,C.h3R,C.h3S,C.h3T,C.h3P,C.e7k,C.e7l,C.e7j,C.h3W,C.do0,C.ciu,C.fx4,C.e_X,C.e7r,C.chi,C.chf,C.chh,C.chk,C.c94,C.c92,C.c97,C.cht,C.chs,C.chr,C.chq,C.chv,C.chx,C.ebB,C.ebf,C.ebd,C.ebu,C.ebm,C.ebq,C.ebp,C.ebk,C.ebz,C.eby,C.cWV,C.cWW,C.f3i,C.f3b,C.f3g,C.chn,C.fSN,C.ecb,C.ebV,C.ebO,C.ebP,C.ebQ,C.ebR,C.eca,C.chp,C.cQq,C.cQr,C.fwN,C.ecg,C.eci,C.ecl,C.ect,C.ecu,C.ecv,C.ecc,C.h4N,C.dpG,C.dpJ,C.cjo,C.cjB,C.ers,C.ert,C.eru,C.ere,C.er6,C.er7,C.er8,C.erk,C.erm,C.du5,C.du6,C.du1,C.dtX,C.dur,C.dum,C.dul,C.duk,C.due,C.fGi,C.fZO,C.fGh,C.fup,C.fYg,C.fVY,C.h0_,C.elw,C.elx,C.fFg,C.fFf,C.fYw,C.fYx,C.fS_,C.fXY,C.clh,C.cli,C.clg,C.clj,C.clf,C.cll,C.clm,C.cle,C.fI3,C.fqJ,C.fqK,C.fCv,C.fEs,C.fBk,C.frT,C.fBw,C.fNE,C.fNF])
t(C.buU,B.jL)
u(B.ag,[C.G9,C.an4,C.aFB,C.an3,C.an5,C.anS,C.ajV,C.apq,C.a0E,C.a0F,C.a_M,C.apX,C.app,C.OA,C.aCM,C.ar7,C.arQ,C.WS,C.QE,C.a1q,C.a1p,C.WT,C.as6,C.aDF,C.as9,C.a0a,C.asJ,C.aDR,C.aDT,C.a0Y,C.au4])
u(B.ah,[C.aKD,C.aN9,C.aO7,C.aN8,C.aNa,C.bjK,C.azM,C.aER,C.bmb,C.bmc,C.aC2,C.bmj,C.aNG,C.aOh,C.aNb,C.aFC,C.aFS,C.aG3,C.bdO,C.aI4,C.aI3,C.aG5,C.aG4,C.bjY,C.aOp,C.aNg,C.bAQ,C.aNw,C.aDU,C.aGh,C.aP0])
u(B.n0,[C.feU,C.fyr,C.dm7,C.dmy,C.dmw,C.dmv,C.e_J,C.dne,C.dnc,C.dnb,C.dmQ,C.dn_,C.dmO,C.dn1,C.dmM,C.dn4,C.cNQ,C.cNs,C.cO0,C.cO7,C.cO6,C.cNp,C.dgR,C.dOo,C.fF7,C.fF8,C.e7h,C.fSe,C.h3O,C.e7m,C.e7p,C.e7o,C.do1,C.civ,C.chj,C.chg,C.c95,C.c93,C.chw,C.ebC,C.ebj,C.ebA,C.f3o,C.f3n,C.ebN,C.ebG,C.ebI,C.ebK,C.ebJ,C.ech,C.ecw,C.dpH,C.dpL,C.dpI,C.erl,C.eqO,C.du7,C.du8,C.du_,C.du0,C.du2,C.dtY,C.duf,C.fOB,C.clk,C.cld,C.frr,C.fFB,C.fFA])
t(C.axX,C.G9)
u(B.aK,[C.rc,C.afe,C.O4,C.JD,C.rP,C.rQ,C.lS,C.iC,C.iq,C.bbT,C.ddP,C.dsk,C.rV,C.WU,C.OR,C.qh,C.b2a,C.px,C.at9])
t(C.aCK,C.aN9)
t(C.bmG,C.aO7)
t(C.aCJ,C.aN8)
t(C.aCL,C.aNa)
u(B.qv,[C.Xz,C.aDG,C.asX,C.JI,C.Fx])
u(B.av,[C.a20,C.bvq,C.ag_,C.Rg,C.a84,C.Os,C.arK,C.aeR,C.aeQ,C.b3_,C.aDE,C.adl,C.b2x,C.add,C.aDS])
t(C.bm9,C.aNG)
t(C.bmU,C.aOh)
t(C.bip,C.aNb)
t(C.aG6,C.aOp)
t(C.aD4,C.aNg)
t(C.aGt,C.bAQ)
t(C.bkH,C.aNw)
u(B.qI,[C.beh,C.beg,C.bef,C.bdH,C.byR,C.btF])
t(C.aH4,C.aP0)
w(C.aN8,C.O4)
w(C.aN9,C.O4)
w(C.aNa,C.O4)
w(C.aO7,C.O4)
w(C.aNG,B.eO)
w(C.aOh,B.cf)
w(C.aNb,B.cf)
w(C.aOp,B.cf)
w(C.aNg,B.eO)
w(C.aNw,B.eO)
v(C.bAQ,B.eG)
w(C.aP0,B.cf)})()
B.p2(b.typeUniverse,JSON.parse('{"buU":{"jL":[]},"G9":{"ag":[],"v":[]},"aKD":{"ah":["G9<1,2>"]},"axX":{"G9":["1","hv<1>"],"ag":[],"v":[],"G9.T":"1","G9.S":"hv<1>"},"an4":{"ag":[],"v":[]},"aFB":{"ag":[],"v":[]},"an3":{"ag":[],"v":[]},"an5":{"ag":[],"v":[]},"anS":{"ag":[],"v":[]},"ajV":{"ag":[],"v":[]},"aCK":{"ah":["an4"]},"bmG":{"ah":["aFB"]},"aCJ":{"ah":["an3"]},"aCL":{"ah":["an5"]},"bjK":{"ah":["anS"]},"azM":{"ah":["ajV"]},"apq":{"ag":[],"v":[]},"a0E":{"ag":[],"v":[]},"a0F":{"ag":[],"v":[]},"ag_":{"av":[],"v":[]},"a_M":{"ag":[],"v":[]},"aER":{"ah":["apq"]},"a20":{"av":[],"v":[]},"bvq":{"av":[],"v":[]},"bmb":{"ah":["a0E"]},"bmc":{"ah":["a0F"]},"Rg":{"av":[],"v":[]},"aC2":{"ah":["a_M"]},"apX":{"ag":[],"v":[]},"bmj":{"ah":["apX"]},"a84":{"av":[],"v":[]},"app":{"ag":[],"v":[]},"bm9":{"ah":["app"]},"Os":{"av":[],"v":[]},"arK":{"av":[],"v":[]},"OA":{"ag":[],"v":[]},"bmU":{"ah":["OA"]},"aeR":{"av":[],"v":[]},"aeQ":{"av":[],"v":[]},"aCM":{"ag":[],"v":[]},"bip":{"ah":["aCM"]},"b3_":{"av":[],"v":[]},"ar7":{"ag":[],"v":[]},"aFC":{"ah":["ar7"]},"arQ":{"ag":[],"v":[]},"aFS":{"ah":["arQ"]},"WS":{"ag":[],"v":[]},"QE":{"ag":[],"v":[]},"a1q":{"ag":[],"v":[]},"a1p":{"ag":[],"v":[]},"aG3":{"ah":["WS"]},"bdO":{"ah":["QE"]},"aI4":{"ah":["a1q"]},"aI3":{"ah":["a1p"]},"WT":{"ag":[],"v":[]},"aG5":{"ah":["WT"]},"as6":{"ag":[],"v":[]},"adl":{"av":[],"v":[]},"add":{"av":[],"v":[]},"aDF":{"ag":[],"v":[]},"aG4":{"ah":["as6"]},"aDE":{"av":[],"v":[]},"b2x":{"av":[],"v":[]},"bjY":{"ah":["aDF"]},"as9":{"ag":[],"v":[]},"aG6":{"ah":["as9"]},"a0a":{"ag":[],"v":[]},"aD4":{"ah":["a0a"]},"asJ":{"ag":[],"v":[]},"aDR":{"ag":[],"v":[]},"aDT":{"ag":[],"v":[]},"aGt":{"ah":["asJ"],"eG":[]},"aDS":{"av":[],"v":[]},"bkH":{"ah":["aDR"]},"beh":{"aA":[]},"beg":{"aA":[]},"bef":{"aA":[]},"aDU":{"ah":["aDT"]},"bdH":{"aA":[]},"byR":{"aA":[]},"a0Y":{"ag":[],"v":[]},"aGh":{"ah":["a0Y"]},"btF":{"aA":[]},"au4":{"ag":[],"v":[]},"aH4":{"ah":["au4"]}}'))
B.a2q(b.typeUniverse,JSON.parse('{"O4":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aF
return{dw:w("md<u?>"),gS:w("oB"),o:w("d7"),g5:w("xJ"),M:w("dk<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aB<~>"),dk:w("a_"),fw:w("U<oB>"),E:w("U<d7>"),V:w("U<ab>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o0>"),B:w("U<ai<H>>"),m:w("U<ac<q,q>>"),_:w("U<ac<q,@>>"),b:w("U<rP>"),x:w("U<rQ>"),gi:w("U<jq>"),a:w("U<lS>"),Y:w("U<iq>"),v:w("U<iC>"),dA:w("U<JD>"),F:w("U<rV>"),Z:w("U<kH>"),g:w("U<hY>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<d6>"),s:w("U<q>"),G:w("U<jL>"),eO:w("U<ev>"),d9:w("U<eZ>"),p:w("U<v>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aA?>"),d4:w("U<q?>"),ck:w("ai<rP>"),e:w("ai<rQ>"),ac:w("ai<jq>"),dZ:w("ai<lS>"),I:w("ai<iq>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("ac<q,q>"),P:w("ac<q,@>"),f:w("ac<@,@>"),cl:w("cM<q,D>"),aS:w("N<a_,tI>"),dc:w("N<JI,bz>"),dv:w("N<q,q>"),bL:w("N<G,bz>"),a3:w("N<H,bz>"),gN:w("N<H,q9>"),w:w("kF"),b1:w("rP"),Q:w("rQ"),bP:w("lS"),i:w("iq"),u:w("iC"),gp:w("WU"),J:w("OR"),D:w("qh"),an:w("kH"),c:w("cw"),K:w("aK"),d:w("jF<q>"),di:w("+outcome,snapshot(Xz,a7p?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<iq>,q?,q?,q?)"),cz:w("Kb"),bJ:w("dt<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("ki<H>"),cc:w("Y<q>"),aM:w("el<d7>"),bG:w("el<G>"),l:w("v"),gm:w("rc"),ec:w("afe"),q:w("pO"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("d7?"),cJ:w("V?"),gw:w("ai<ac<q,@>>?"),bM:w("ai<@>?"),h:w("ac<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b62=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f1=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6A=new B.ax(D.f1,1,A.r,-1)
D.b6C=new B.ax(A.ab,2,A.r,-1)
D.b6F=new B.ax(A.aV,2,A.r,-1)
D.b6H=new B.ax(A.cA,0.8,A.r,-1)
D.b6W=new B.ax(A.aQ,2,A.r,-1)
D.b72=new B.ax(A.fe,1.6,A.r,-1)
D.b7S=new B.aY(0,330,0,1/0)
D.b7Z=new B.aY(0,176,0,1/0)
D.b8_=new B.aY(0,1/0,0,260)
D.b8h=new B.aY(90,1/0,0,1/0)
D.bbh=new B.ab(0,A.G,A.dC,A.J,4)
D.d9H=w([D.bbh],x.V)
D.b8v=new B.n(A.c,null,null,null,D.d9H,null,A.a6)
D.d2Y=w([D.f1,A.b2],x.O)
D.cd1=new B.a7(A.a5,A.a9,A.x,D.d2Y,null,null)
D.b8J=new B.n(null,null,null,null,null,D.cd1,A.a6)
D.b8O=new B.n(A.be,null,null,null,null,null,A.a6)
D.bmK=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dqS=w([L.ahH,D.bmK],x.O)
D.cc8=new B.a7(A.aY,A.b3,A.x,D.dqS,null,null)
D.b94=new B.n(null,null,null,A.mI,null,D.cc8,A.n)
D.bv5=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dDM=w([D.bv5,A.ak8],x.O)
D.cbi=new B.a7(A.aY,A.b3,A.x,D.dDM,null,null)
D.b9v=new B.n(null,null,null,A.uf,null,D.cbi,A.n)
D.dmr=w([A.aD,A.bE],x.O)
D.cbS=new B.a7(A.a5,A.a9,A.x,D.dmr,null,null)
D.b9B=new B.n(null,null,null,null,null,D.cbS,A.a6)
D.fCU=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXH=new B.C("\ud83c\udf89",null,D.fCU,null,null,null,null,null,null,null,null,null)
D.bfp=new B.ck(A.z,null,null,D.fXH,null)
D.bgT=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agL=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bjT=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bjX=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pk=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uq=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ai6=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmk=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.Zy=new B.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yv=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bo6=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_1=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajJ=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bsO=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bsX=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akc=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buy=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.buF=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bvN=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_R=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bwX=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bxC=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a04=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.byv=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alN=new B.a5i(2,"active")
D.bCQ=new B.bf(42e5)
D.bCT=new B.bf(53e4)
D.bCW=new B.bf(58e4)
D.bD_=new B.bf(82e4)
D.bDM=new B.P(0,30,0,30)
D.bDU=new B.P(0,4,0,8)
D.bDY=new B.P(0,8,12,8)
D.bEB=new B.P(12,0,12,88)
D.bEJ=new B.P(12,11,12,10)
D.bF9=new B.P(13,10,12,10)
D.bFk=new B.P(14,10,14,2)
D.bFw=new B.P(14,14,10,14)
D.bG5=new B.P(16,12,16,96)
D.bGa=new B.P(16,14,16,8)
D.bGe=new B.P(16,16,16,96)
D.bGf=new B.P(16,18,16,16)
D.bGj=new B.P(16,4,16,10)
D.bHi=new B.P(18,6,18,40)
D.bHv=new B.P(20,10,20,20)
D.bHK=new B.P(20,18,20,18)
D.bIa=new B.P(22,22,22,16)
D.bIP=new B.P(2,0,2,10)
D.bJz=new B.P(4,8,12,4)
D.bJN=new B.P(6,1,6,1)
D.bJP=new B.P(6,4,0,0)
D.bJV=new B.P(6,6,12,4)
D.bKf=new B.P(8,4,12,8)
D.h0i=new B.C("Activity",null,A.fF,null,null,null,null,null,null,null,null,null)
D.bMg=new B.bz(1,A.bd,D.h0i,null)
D.h8Z=new B.C("Game Receipts",null,A.u1,null,null,null,null,null,null,null,null,null)
D.fSy=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.acg,null,null,null,null,null,null,null,null,null)
D.d_k=w([D.h8Z,D.fSy],x.p)
D.bzC=new B.fo(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.d_k,null)
D.bMj=new B.bz(1,A.bd,D.bzC,null)
D.bRd=new B.a_(58607,"MaterialIcons",!1)
D.a39=new B.a_(62178,"MaterialIcons",!1)
D.bS4=new B.a_(62410,"MaterialIcons",!1)
D.bTf=new B.a_(63258,"MaterialIcons",!1)
D.bTk=new B.a_(63304,"MaterialIcons",!1)
D.bTl=new B.a_(63306,"MaterialIcons",!1)
D.bTr=new B.a_(63330,"MaterialIcons",!1)
D.asf=new B.a_(984777,"MaterialIcons",!1)
D.bVX=new B.ae(A.D7,13,A.ab,null,null,null)
D.bW4=new B.ae(A.js,13,A.qv,null,null,null)
D.ast=new B.ae(A.lU,null,A.c,null,null,null)
D.bXE=new B.ae(A.Dn,34,A.at,null,null,null)
D.bYa=new B.ae(A.Da,19,A.c,null,null,null)
D.bYk=new B.ae(A.aqA,24,A.aQ,null,null,null)
D.bYN=new B.ae(A.D3,28,A.bp,null,null,null)
D.bZi=new B.ae(A.arT,42,A.c,null,null,null)
D.bZs=new B.ae(A.a47,30,A.c,null,null,null)
D.c_8=new B.ae(A.fO,null,A.c,null,null,null)
D.c_u=new B.ae(A.js,16,A.c,null,null,null)
D.c0a=new B.ae(A.tn,13,A.c,null,null,null)
D.c0j=new B.ae(A.lU,18,A.c,null,null,null)
D.c0S=new B.ae(A.wT,null,A.dP,null,null,null)
D.c1y=new B.ae(A.nP,28,A.c,null,null,null)
D.c1O=new B.ae(A.oO,22,null,null,null,null)
D.c2c=new B.ae(A.tj,null,null,null,null,null)
D.c2o=new B.ae(A.he,28,A.c,null,null,null)
D.c2r=new B.ae(A.cB,null,A.aR,null,null,null)
D.c2B=new B.ae(A.a2Q,14,A.c,null,null,null)
D.c3c=new B.ae(A.I_,36,A.aN,null,null,null)
D.c3j=new B.ae(A.oK,16,A.c,null,null,null)
D.bnc=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c48=new B.ae(A.e9,9,D.bnc,null,null,null)
D.bUk=new B.a_(983146,"MaterialIcons",!1)
D.c4q=new B.ae(D.bUk,null,A.aQ,null,null,null)
D.c5_=new B.ae(A.uY,28,D.f1,null,null,null)
D.c54=new B.ae(A.te,null,A.fe,null,null,null)
D.c59=new B.ae(A.hC,20,D.f1,null,null,null)
D.bUH=new B.a_(983377,"MaterialIcons",!1)
D.c5j=new B.ae(D.bUH,64,A.c,null,null,null)
D.c5Q=new B.ae(A.h3,24,A.c,null,null,null)
D.c6M=new B.e7(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6X=new B.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7b=new B.e7(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7c=new B.e7(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkM=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bov=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bo7=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.drb=w([D.bkM,D.bov,D.bo7],x.O)
D.c92=new B.a7(A.ay,A.aC,A.x,D.drb,null,null)
D.dwQ=w([A.bi,A.b2],x.O)
D.c9o=new B.a7(A.ay,A.aC,A.x,D.dwQ,null,null)
D.bmC=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.btC=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.daj=w([D.bmC,D.btC],x.O)
D.c9w=new B.a7(A.ay,A.aC,A.x,D.daj,null,null)
D.dsT=w([A.bs,A.a_,A.ec],x.O)
D.c9C=new B.a7(A.ay,A.aC,A.x,D.dsT,null,null)
D.c9F=new B.a7(A.a5,A.a9,A.x,E.azO,null,null)
D.d9v=w([A.fe,A.cj],x.O)
D.aug=new B.a7(A.a5,A.a9,A.x,D.d9v,null,null)
D.da_=w([A.fe,A.bE],x.O)
D.auh=new B.a7(A.a5,A.a9,A.x,D.da_,null,null)
D.aE_=w([D.pk,A.aF,A.c3],x.O)
D.c9Z=new B.a7(A.ay,A.aC,A.x,D.aE_,null,null)
D.bqt=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7h=w([D.bqt,A.ah1,A.a_],x.O)
D.ca3=new B.a7(A.ay,A.aC,A.x,D.d7h,null,null)
D.b4_=new B.da(-0.8,-1)
D.b41=new B.da(1.2,1)
D.d6n=w([A.c,A.eO,A.ha,A.c,A.ft,A.aH,A.ok],x.O)
D.dsd=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.ca5=new B.a7(D.b4_,D.b41,A.x,D.d6n,D.dsd,null)
D.bts=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqK=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dra=w([D.bts,D.bqK],x.O)
D.cax=new B.a7(A.a5,A.a9,A.x,D.dra,null,null)
D.caD=new B.a7(A.ay,A.aC,A.x,A.SH,null,null)
D.dll=w([A.a_V,A.yx],x.O)
D.caF=new B.a7(A.a5,A.a9,A.x,D.dll,null,null)
D.dpT=w([A.hl,A.fW],x.O)
D.aun=new B.a7(A.a5,A.a9,A.x,D.dpT,null,null)
D.dwm=w([A.be,A.bQ],x.O)
D.auo=new B.a7(A.a5,A.a9,A.x,D.dwm,null,null)
D.cRp=w([A.dh,A.fB],x.O)
D.cbk=new B.a7(A.ay,A.aC,A.x,D.cRp,null,null)
D.d5h=w([A.c,A.ba],x.O)
D.cbu=new B.a7(A.a5,A.a9,A.x,D.d5h,null,null)
D.ajb=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjD=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dhJ=w([D.ajb,A.jI,A.rF,A.aF,D.bjD],x.O)
D.ce7=w([0,0.28,0.55,0.82,1],x.n)
D.cbw=new B.a7(A.ay,A.aC,A.x,D.dhJ,D.ce7,null)
D.cbD=new B.a7(A.a5,A.a9,A.x,A.Tn,null,null)
D.cbE=new B.a7(A.a5,A.a9,A.x,E.aCk,null,null)
D.cbJ=new B.a7(A.a5,A.a9,A.x,D.aE_,null,null)
D.dbB=w([A.bE,A.fe],x.O)
D.cbY=new B.a7(A.a5,A.a9,A.x,D.dbB,null,null)
D.dAT=w([A.aD,A.bE,A.ba],x.O)
D.cc_=new B.a7(A.a5,A.a9,A.x,D.dAT,null,null)
D.dlw=w([A.at,A.bL,A.fL],x.O)
D.cc3=new B.a7(A.a5,A.a9,A.x,D.dlw,null,null)
D.dAC=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.an],x.O)
D.dfJ=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cc7=new B.a7(A.ay,A.aC,A.x,D.dAC,D.dfJ,null)
D.cch=new B.a7(A.ay,A.aC,A.x,A.a5A,null,null)
D.dm9=w([D.Zy,A.e3],x.O)
D.ccq=new B.a7(A.a5,A.a9,A.x,D.dm9,null,null)
D.dup=w([D.akc,D.ai6,A.a_],x.O)
D.ccA=new B.a7(A.ay,A.aC,A.x,D.dup,null,null)
D.bwi=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d5S=w([A.ff,A.hl,D.bwi],x.O)
D.cd3=new B.a7(A.ay,A.aC,A.x,D.d5S,null,null)
D.dcb=w([D.pk,A.aF],x.O)
D.cd5=new B.a7(A.ay,A.aC,A.x,D.dcb,null,null)
D.cdx=w([F.Dr,A.nP,A.js,A.hD,A.jN,A.l2,A.kf,A.qY,A.nO,A.eY,A.lr,A.zA,A.HZ],x.A)
D.ch2=w([10,50,100,200],x.t)
D.cqQ=w([1,3,5,7],x.t)
D.cvQ=w([25,50,100,250],x.t)
D.bUe=new B.a_(983104,"MaterialIcons",!1)
D.cEA=w([A.nP,A.mn,A.oO,A.lS,A.hp,A.v7,D.bUe,A.a41],x.A)
D.cK0=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cWx=w([0,0.22,0.5,0.78,1],x.n)
D.d_u=w([8,13,19],x.n)
D.a5U=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h_h=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eF3=new B.jF("questions",!0,48,null,D.h_h,null,x.d)
D.fPF=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eFa=new B.jF("edit",!0,48,null,D.fPF,null,x.d)
D.h7v=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eF2=new B.jF("delete",!0,48,null,D.h7v,null,x.d)
D.d5m=w([D.eF3,D.eFa,D.eF2],B.aF("U<rZ<q>>"))
D.dac=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.dat=w([A.bU,A.fn],x.O)
D.a9_=new C.lS("text","",null,null)
D.dbO=w([D.a9_],x.a)
D.ddj=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_k=new B.afB(A.kC,"Home")
D.eQR=new B.afB(A.pC,"Growth")
D.eVG=new B.afB(A.js,"Wallet")
D.dg_=w([D.f_k,D.eQR,D.eVG],B.aF("U<+icon,label(a_,q)>"))
D.dgr=w([4,0,2,6,8,1,3,5,7],x.t)
D.dgz=w([A.c,A.ci,A.cA],x.O)
D.e2l=new C.rV("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2o=new C.rV("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2m=new C.rV("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e2g=new C.rV("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e2h=new C.rV("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2p=new C.rV("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6s=w([D.e2l,D.e2o,D.e2m,D.e2g,D.e2h,D.e2p],x.F)
D.a6x=w([A.aA,A.bi,A.d9,A.at],x.O)
D.bnr=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dmg=w([A.Z3,D.bnr,A.rF,A.iy,A.jI],x.O)
D.a6E=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SR=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cEP=w([3,4,5],x.t)
D.cS2=w([6,7,8],x.t)
D.cdE=w([0,3,6],x.t)
D.cqV=w([1,4,7],x.t)
D.cyn=w([2,5,8],x.t)
D.cdJ=w([0,4,8],x.t)
D.cyk=w([2,4,6],x.t)
D.doR=w([O.auO,D.cEP,D.cS2,D.cdE,D.cqV,D.cyn,D.cdJ,D.cyk],x.B)
D.aMe=new C.JI(0,"abab")
D.e2e=new C.JI(1,"aaaBbb")
D.aMf=new C.JI(2,"aabb")
D.dpY=w([D.aMe,D.e2e,D.aMf],B.aF("U<JI>"))
D.dqf=w([],x.a)
D.aDc=w([],x.v)
D.duh=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Ta=w([1,2,3,-1,-2],x.t)
D.dDx=w([A.j7,A.aD],x.O)
D.hFE=new C.rc("dice","Dice Roll","Roll for cash & prizes!",A.nM,D.dDx)
D.hFB=new C.rc("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v4,A.aBP)
D.dxf=w([A.dn,A.bp],x.O)
D.hFz=new C.rc("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3O,D.dxf)
D.dCY=w([A.dN,A.nt],x.O)
D.hFF=new C.rc("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a41,D.dCY)
D.cqA=w([A.jG,A.rS],x.O)
D.hFC=new C.rc("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.PV,D.cqA)
D.dug=w([A.lJ,D.a_1],x.O)
D.hFA=new C.rc("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.I2,D.dug)
D.hFD=new C.rc("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nS)
D.dwl=w([D.hFE,D.hFB,D.hFz,D.hFF,D.hFC,D.hFA,D.hFD],B.aF("U<rc>"))
D.dxU=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsx=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bso=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.al3=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dyK=w([D.bsx,D.bso,D.al3],x.O)
D.bv_=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dyM=w([A.ah0,D.bv_,D.al3],x.O)
D.dzr=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEn=w([D.pk,A.c,D.f1,A.c4,A.b_,A.aF],x.O)
D.e2j=new C.rV("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2i=new C.rV("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e2f=new C.rV("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2n=new C.rV("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2q=new C.rV("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2k=new C.rV("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7o=w([D.e2j,D.e2i,D.e2f,D.e2n,D.e2q,D.e2k],x.F)
D.dDb=w([A.cj,A.rS],x.O)
D.ert={checkers_deluxe:0,tic_tac_go:1}
D.aKd=new B.bq(D.ert,["Checkers Deluxe","Tic Tac Go"],B.aF("bq<q,q>"))
D.eqw={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKo=new B.bq(D.eqw,[1,2,3,4,5,6,7],B.aF("bq<q,H>"))
D.dVL=new C.a84(null)
D.dZj=new C.lS("signature","NGMY Support Team",null,null)
D.dZk=new C.lS("divider","",null,null)
D.U9=new C.WU(!1,!1,!1,!1)
D.Ub=new C.OR(!1,!1,!1,!1)
D.e_s=new C.OR(!0,!0,!1,!1)
D.Er=new C.asX(0,"swahili")
D.aMd=new C.asX(1,"english")
D.Es=new C.asX(2,"mix")
D.doe=w([A.iL,A.ia,A.d6],x.O)
D.bT_=new B.a_(63118,"MaterialIcons",!1)
D.e3r=new C.px(D.doe,A.fY,A.at,"BACKGAMMON","\ud83c\udfb2",D.bT_)
D.bV4=new B.a_(983637,"MaterialIcons",!1)
D.e3s=new C.px(A.aED,A.bi,A.er,"EURO WHEEL","\ud83c\udfa1",D.bV4)
D.dye=w([A.a_,A.aL,A.bz],x.O)
D.e3t=new C.px(D.dye,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.PV)
D.d9C=w([A.dh,A.bp,A.dY],x.O)
D.e3u=new C.px(D.d9C,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a4g)
D.dsx=w([A.dA,A.fB,A.rS],x.O)
D.e3v=new C.px(D.dsx,A.wo,A.cj,"PUNTO BANCO","\ud83d\udc8e",A.mn)
D.cRr=w([A.oj,A.iw,A.m9],x.O)
D.e3w=new C.px(D.cRr,A.jE,A.kx,"DOMINOES","\ud83c\udc53",A.arU)
D.dyZ=w([A.yF,A.uu,A.hK],x.O)
D.e3x=new C.px(D.dyZ,A.Cn,A.hv,"WAR","\u2694\ufe0f",A.a3t)
D.e3y=new C.px(A.aEw,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nM)
D.dbC=w([A.kv,A.aD,A.dN],x.O)
D.e3z=new C.px(D.dbC,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nM)
D.dru=w([A.jX,A.lF,A.bE],x.O)
D.e3A=new C.px(D.dru,A.qi,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zt)
D.d2W=w([A.ia,A.e3,A.at],x.O)
D.bSq=new B.a_(62865,"MaterialIcons",!1)
D.e3B=new C.px(D.d2W,A.uz,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSq)
D.e3C=new C.px(A.a7l,A.bm,A.bi,"HOLD'EM","\u2660\ufe0f",A.js)
D.dzq=w([A.ff,A.fW,A.b2],x.O)
D.bRz=new B.a_(61234,"MaterialIcons",!1)
D.e3D=new C.px(D.dzq,A.ma,A.aV,"CRAPS","\ud83c\udfb2",D.bRz)
D.d8N=w([A.fn,A.jl,A.bU],x.O)
D.e3E=new C.px(D.d8N,A.bL,A.ba,"PLINKO","\ud83d\udc8e",A.Q3)
D.bUP=new B.a_(983492,"MaterialIcons",!1)
D.e3F=new C.px(A.a7l,A.ew,A.bi,"SNOOKER","\ud83c\udfb1",D.bUP)
D.dwJ=w([A.ff,A.fW,A.aV],x.O)
D.e3G=new C.px(D.dwJ,A.uv,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hC)
D.dx7=w([A.ec,A.ep,A.bi],x.O)
D.bTq=new B.a_(63324,"MaterialIcons",!1)
D.e3H=new C.px(D.dx7,A.wr,A.be,"KLONDIKE","\ud83c\udccf",D.bTq)
D.dp_=w([A.bA,A.bs,A.a_],x.O)
D.e3I=new C.px(D.dp_,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Ih)
D.r4=new C.Fx(0,"continueGame")
D.r5=new C.Fx(1,"youWin")
D.JI=new C.Fx(2,"youLose")
D.Uk=new C.Fx(3,"draw")
D.aMs=new C.Xz(0,"found")
D.emv=new C.Xz(1,"foundLive")
D.a9g=new C.Xz(2,"notFound")
D.aMt=new C.Xz(3,"wrongAccount")
D.euU=new B.r(4,12)
D.eyp=new B.D(A.yZ,A.uj,null)
D.bJd=new B.P(4,0,0,3)
D.fA1=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc5=new B.C("NGMY Helper",null,D.fA1,null,null,null,null,null,null,null,null,null)
D.eyG=new B.D(D.bJd,D.hc5,null)
D.bTj=new B.a_(63284,"MaterialIcons",!1)
D.bYA=new B.ae(D.bTj,18,A.pn,null,null,null)
D.fEY=new B.F(!0,A.pn,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new B.C("Continue",null,D.fEY,null,null,null,null,null,null,null,null,null)
D.dqM=w([D.bYA,A.bn,D.fTK],x.p)
D.fjp=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqM,null)
D.eyK=new B.D(A.hP,D.fjp,null)
D.ez_=new B.D(A.bS,A.uj,null)
D.bs7=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dmW=w([A.hl,A.fW,A.cW,D.bs7],x.O)
D.cca=new B.a7(A.ay,A.aC,A.x,D.dmW,A.DO,null)
D.b9E=new B.n(null,null,null,null,null,D.cca,A.n)
D.bAS=new B.bN(D.b9E,A.bk,null,null)
D.eFx=new B.cK(0,0,0,0,null,null,D.bAS,null)
D.c_q=new B.ae(A.wS,11,A.c,null,null,null)
D.eFB=new B.cK(10,12,null,null,null,null,D.c_q,null)
D.cWn=w([A.hL,A.ec,A.ll],x.O)
D.eGc=new B.bT(A.Bw,1.1,A.x,null,0,D.cWn,null,null)
D.btQ=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bmW=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bp8=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkl=w([D.btQ,D.bmW,D.bp8],x.O)
D.eGk=new B.bT(A.aeA,1.05,A.x,null,0,D.dkl,null,null)
D.eGI=new B.bT(A.z,0.5,A.x,null,0,A.a68,null,null)
D.fhi=new B.a4(-18,0,18,1)
D.fhR=new B.a4(-3,-5,3,5)
D.bZ1=new B.ae(A.ea,16,D.f1,null,null,null)
D.aY8=new B.F(!0,D.f1,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9C=new B.C("Screenshot added \xb7 tap to change",null,D.aY8,null,null,null,null,null,null,null,null,null)
D.d6q=w([D.bZ1,A.bn,D.h9C],x.p)
D.fiM=new B.c8(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.d6q,null)
D.c28=new B.ae(A.oJ,15,D.f1,null,null,null)
D.h7p=new B.C("Refresh",null,D.aY8,null,null,null,null,null,null,null,null,null)
D.d8Y=w([D.c28,A.df,D.h7p],x.p)
D.fiO=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d8Y,null)
D.eqQ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fl0=new B.dk(D.eqQ,3,x.M)
D.eqE={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.flc=new B.dk(D.eqE,36,x.M)
D.eqH={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.flq=new B.dk(D.eqH,6,x.M)
D.esf={memory:0,typing:1,scramble:2,pattern:3}
D.nc=new B.dk(D.esf,4,x.M)
D.fo4=new B.au(276,276)
D.foO=new B.a5(13,null,null,null)
D.bg7=new B.fi(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fp_=new B.a5(26,26,D.bg7,null)
D.fpU=new B.hM(8,0,0,1,null)
D.haO=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVv=new B.b0(D.haO,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOH=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new B.b0(D.fOH,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPR=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ft3=new B.b0(D.fPR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h7A=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new B.b0(D.h7A,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bsZ=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fDR=new B.F(!0,D.bsZ,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwT=new B.ev("$",null,null,A.cN,null,null,null,null,null,null,D.fDR)
D.fx8=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxx=new B.F(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.F(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyb=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyk=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyt=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new B.F(!0,D.f1,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzT=new B.F(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAK=new B.F(!0,A.Cg,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWQ=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new B.F(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCG=new B.F(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fD_=new B.F(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE8=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEn=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEy=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fF5=new B.F(!0,A.jd,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blb=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fFn=new B.F(!0,D.blb,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGS=new B.F(!0,A.aA,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHh=new B.F(!0,D.ajb,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXy=new B.F(!0,A.Cg,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHC=new B.F(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHW=new B.F(!0,A.Cg,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xI=new B.F(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqc=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fIa=new B.F(!0,D.bqc,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIM=new B.F(!0,A.TO,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJT=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK_=new B.F(!0,A.iz,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK3=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXU=new B.F(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKz=new B.F(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLA=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM0=new B.F(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMi=new B.F(!0,A.be,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMN=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMR=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new B.C("Value per pair",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fNT=new B.C("Restore now",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fOs=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXi=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOD=new B.C("AVAILABLE PLANS",null,D.aXi,null,null,null,null,null,null,null,null,null)
D.fOF=new B.C("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fPf=new B.C("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fAz=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPY=new B.C("PLAN VALUE",null,D.fAz,null,null,null,null,null,null,null,null,null)
D.fQ0=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fQn=new B.C("Deposit",null,A.Wx,null,null,null,null,null,null,null,null,null)
D.fKV=new B.F(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRq=new B.C("JACKPOT SLOTS",null,D.fKV,null,null,null,null,null,null,null,null,null)
D.fRJ=new B.C("Restore",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fAF=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRN=new B.C("YOUR NUMBER",null,D.fAF,null,null,null,null,null,null,null,null,null)
D.fS3=new B.C("SPIN REELS",null,E.aca,null,null,null,null,null,null,null,null,null)
D.fSx=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fT4=new B.C("Perfect Score Profit",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fTI=new B.C("Join room",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fVU=new B.C("Add payment screenshot",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fW9=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fK7=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWB=new B.C("INVITE A PLAYER",null,D.fK7,null,null,null,null,null,null,null,null,null)
D.fJa=new B.F(!0,A.Z3,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX5=new B.C("NGMY GOLD LEADER",null,D.fJa,null,null,null,null,null,null,null,null,null)
D.fXC=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fY1=new B.C("Invest & Play",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.aXd=new B.F(!0,D.yv,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYt=new B.C("VALID THRU",null,D.aXd,null,null,null,null,null,null,null,null,null)
D.aXW=new B.F(!0,A.aE,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYB=new B.C("DEALER",null,D.aXW,null,null,null,null,null,null,null,null,null)
D.fYI=new B.C("CARDHOLDER",null,D.aXd,null,null,null,null,null,null,null,null,null)
D.fIC=new B.F(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZr=new B.C("NGMY PLATINUM",null,D.fIC,null,null,null,null,null,null,null,null,null)
D.fM7=new B.F(!0,A.qv,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_c=new B.C("EARNED SO FAR",null,D.fM7,null,null,null,null,null,null,null,null,null)
D.h_M=new B.C("VS",null,A.acb,null,null,null,null,null,null,null,null,null)
D.h0c=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h0z=new B.C("One day left",null,A.ac1,null,A.K,null,null,null,null,null,null,null)
D.h0V=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.F6,null,null,null,null,null,null,null,null,null)
D.h0W=new B.C("Multiplayer invite",null,A.iH,null,null,null,null,null,null,null,null,null)
D.h17=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fz1=new B.F(!0,A.TO,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1d=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fz1,null,null,null,null,null,null,null,null,null)
D.h1o=new B.C("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.fxV=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1F=new B.C("Investment Required",null,D.fxV,null,A.K,null,null,null,null,null,null,null)
D.h3b=new B.C("Network Status",null,A.aWt,null,null,null,null,null,null,null,null,null)
D.aWA=new B.F(!0,A.ab,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3P=new B.C("Their account email",null,D.aWA,null,null,null,null,null,null,null,null,null)
D.h49=new B.C("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4a=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h4q=new B.C("ACTIVE ASSET",null,D.aXi,null,null,null,null,null,null,null,null,null)
D.h4P=new B.C("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4U=new B.C("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5k=new B.C("YOUR HAND",null,D.aXW,null,null,null,null,null,null,null,null,null)
D.h5V=new B.C("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h5Y=new B.C("I sent it \u2014 submit deposit",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.h6N=new B.C("Back",null,A.B4,null,null,null,null,null,null,null,null,null)
D.fN2=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6V=new B.C("DEAL / PLAY ROUND",null,D.fN2,null,null,null,null,null,null,null,null,null)
D.h77=new B.C("Got it \u2014 keep chatting",null,A.ce,null,null,null,null,null,null,null,null,null)
D.h7h=new B.C("3 Messages Left",null,A.aXL,null,null,null,null,null,null,null,null,null)
D.h7P=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h7Y=new B.C("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h8k=new B.C("How many games?",null,D.aWA,null,null,null,null,null,null,null,null,null)
D.fI3=new B.F(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8w=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fI3,null,A.K,null,null,null,null,null,null,null)
D.ha4=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.haj=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fNu=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbY=new B.C("NGMY  WALLET",null,D.fNu,null,null,null,null,null,null,null,null,null)
D.hbZ=new B.C("Select Your Bet",null,A.h7,null,null,null,null,null,null,null,null,null)
D.hBl=new B.bl("history",x.W)
D.hBI=new B.bl("ngmy_local_home",x.W)
D.hBJ=new B.bl("ngmy_local_invest",x.W)
D.hBK=new B.bl("ngmy_local_wallet",x.W)
D.hFg=new C.a_M(null)
D.b1Z=new C.aDG(0,"grid")
D.b2_=new C.aDG(1,"questions")
D.hGk=new C.aDG(2,"answer")
D.hIR=new C.a0F(null)})();(function staticFields(){$.hc8=B.aR(x.N)
$.hDD=B.S(x.N,x.k)
$.hi4=null
$.hhT=B.S(x.N,B.aF("Kz"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iDn","bHJ",()=>C.ikO())
w($,"iD9","hMG",()=>{var v=null,u=B.fz(v,A.cw,v,v,v,D.fwT,A.a7,A.c0,v,A.dI,A.c1)
u.ep()
return u})})()};
(a=>{a["8yYBoUen0S74bXcSOcF/TtkJeq8="]=a.current})($__dart_deferred_initializers__);