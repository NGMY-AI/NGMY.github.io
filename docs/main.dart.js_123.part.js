((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,K,T,F,L,U,C={
hwK(d,e,f){var w=null,v=f.k("GU<0>"),u=new B.GU(w,w,w,w,v)
$.vX()
u.d=new C.cC1(new B.vt(),e,u,f,d)
return new B.i7(u,v.k("i7<1>"))},
cC1:function cC1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cC2:function cC2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBZ:function cBZ(d){this.a=d},
cC_:function cC_(d,e){this.a=d
this.b=e},
cC0:function cC0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cBY:function cBY(d,e,f){this.a=d
this.b=e
this.c=f},
buU:function buU(d){this.a=d},
hwJ(d,e,f,g){return new C.axX(d,e,f,null,g.k("axX<0>"))},
G5:function G5(){},
aKD:function aKD(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
feJ:function feJ(d){this.a=d},
feI:function feI(d,e){this.a=d
this.b=e},
feL:function feL(d){this.a=d},
feG:function feG(d,e,f){this.a=d
this.b=e
this.c=f},
feK:function feK(d){this.a=d},
feH:function feH(d){this.a=d},
axX:function axX(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
iox(d){var w=A.a.i(d)
while(A.a.Y(w,"$"))w=A.a.i(A.a.b_(w,1))
return w},
hHH(d){var w=C.iox(d)
if(w.length===0)return""
return"$"+w},
fOq(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fOq=B.e(function(f,g){if(f===1)return B.f(g,v)
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
if(!B.cR(m,"game payout:",0))if(!B.cR(m,"game partial:",0)){if(!B.cR(m,"multiplayer payout:",0))o=B.cR(m,"dice",0)&&q.e===A.fx
else o=l
l=o}if(!l){w=4
break}if(B.cR(m,"game payout:",0))k=A.a.i(A.a.b_(n,A.a.cm(m,"game payout:")+12))
else if(B.cR(m,"game partial:",0)){k=A.a.i(A.a.b_(n,A.a.cm(m,"game partial:")+13))
j=A.a.cm(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else if(B.cR(m,"multiplayer payout:",0)){k=A.a.i(A.a.b_(n,A.a.cm(m,"multiplayer payout:")+19))
j=A.a.cm(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else k=B.cR(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vc(q.c,p,n,d,o,null,q.a,!0),$async$fOq)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fOq,v)},
itq(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ipz(d,e,f){return A.d.aU(e,new C.fS9(f,A.a.i(d.toLowerCase())))},
fS0(d){var w
C.hsS(d)
w=d.c7
return B.br(new B.N(w,new C.fS1(),B.U(w).k("N<1,@>")),!0,x.N)},
if8(d,e,f){var w,v,u,t,s,r,q=null,p=A.bY,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eh().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a3(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.ghn():s}w=A.h.cC(f*t)
v=new C.fyi(f)
if(J.d3(n,"data:image"))try{u=B.fX(A.cH.aK(A.d.gal(J.lM(n,","))),A.z,w,new C.fyf(v),A.h3,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d3(n,"supabase://"))return new B.lb(B.a36(n),new C.fyg(f,e,p,w,v),q,q,x.gh)
return B.kG(n,A.z,w,new C.fyh(v),A.h3,p,!0,e,q,q,f)},
hgM(d,e){return new B.a5(e,e,B.i3(C.if8(d,e,e),A.aq),null)},
i7c(){var w,v,u=B.a([],x._),t=x.N,s=B.C(D.dwk,x.gm)
for(w=0;w<36;++w){v=A.DY[w]
s.push(new C.rd(v.a,v.b,v.c,v.e,v.f))}return new C.aCK(u,B.T(t,t),s)},
fS9:function fS9(d,e){this.a=d
this.b=e},
fS1:function fS1(){},
fyi:function fyi(d){this.a=d},
fyf:function fyf(d){this.a=d},
fyg:function fyg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fye:function fye(d){this.a=d},
fyh:function fyh(d){this.a=d},
an3:function an3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
rd:function rd(d,e,f,g,h){var _=this
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
dlZ:function dlZ(d,e){this.a=d
this.b=e},
dm9:function dm9(d,e){this.a=d
this.b=e},
dmr:function dmr(){},
dms:function dms(d){this.a=d},
dmh:function dmh(d,e){this.a=d
this.b=e},
dmg:function dmg(){},
dmi:function dmi(d){this.a=d},
dmf:function dmf(){},
dmk:function dmk(d){this.a=d},
dmj:function dmj(){},
dmc:function dmc(d){this.a=d},
dma:function dma(d){this.a=d},
dmb:function dmb(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dm4:function dm4(d,e){this.a=d
this.b=e},
dm5:function dm5(d,e){this.a=d
this.b=e},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm6:function dm6(d){this.a=d},
dm7:function dm7(d){this.a=d},
dm8:function dm8(d,e,f){this.a=d
this.b=e
this.c=f},
dm1:function dm1(d,e){this.a=d
this.b=e},
dm0:function dm0(d,e){this.a=d
this.b=e},
dm_:function dm_(d,e){this.a=d
this.b=e},
dmq:function dmq(d){this.a=d},
dmo:function dmo(d,e,f){this.a=d
this.b=e
this.c=f},
dmn:function dmn(d,e,f){this.a=d
this.b=e
this.c=f},
dmm:function dmm(d,e){this.a=d
this.b=e},
dml:function dml(){},
dmp:function dmp(d){this.a=d},
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
e_y:function e_y(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_z:function e_z(d){this.a=d},
e_w:function e_w(){},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_v:function e_v(d){this.a=d},
e_B:function e_B(d){this.a=d},
an2:function an2(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dlT:function dlT(d){this.a=d},
dlW:function dlW(d){this.a=d},
dlX:function dlX(d){this.a=d},
dlY:function dlY(d){this.a=d},
dlV:function dlV(d,e){this.a=d
this.b=e},
dlU:function dlU(d,e){this.a=d
this.b=e},
an4:function an4(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.aO=_.aR=_.aL=_.aH=$
_.bH=_.bi=_.aZ=_.b2=null
_.aY=!1
_.bx=_.bn=null
_.c7=!1
_.bT=_.cT=""
_.c=_.a=_.bI=null},
dnL:function dnL(d,e){this.a=d
this.b=e},
dnO:function dnO(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnQ:function dnQ(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnS:function dnS(d){this.a=d},
dnM:function dnM(d){this.a=d},
dnN:function dnN(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
dn1:function dn1(d,e){this.a=d
this.b=e},
dnu:function dnu(d){this.a=d},
dnv:function dnv(){},
dng:function dng(d,e,f){this.a=d
this.b=e
this.c=f},
dnh:function dnh(d){this.a=d},
dni:function dni(d,e,f){this.a=d
this.b=e
this.c=f},
dnj:function dnj(d,e){this.a=d
this.b=e},
dnk:function dnk(){},
dmt:function dmt(d){this.a=d},
dn_:function dn_(d,e){this.a=d
this.b=e},
dnw:function dnw(){},
dnF:function dnF(){},
dnt:function dnt(d){this.a=d},
dns:function dns(d){this.a=d},
dmY:function dmY(d){this.a=d},
dmZ:function dmZ(){},
dnA:function dnA(){},
dnB:function dnB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnC:function dnC(d,e,f){this.a=d
this.b=e
this.c=f},
dmu:function dmu(){},
dmv:function dmv(d){this.a=d},
dmw:function dmw(){},
dn9:function dn9(d,e){this.a=d
this.b=e},
dna:function dna(d,e,f){this.a=d
this.b=e
this.c=f},
dnb:function dnb(d){this.a=d},
dn8:function dn8(d){this.a=d},
dnl:function dnl(d){this.a=d},
dnm:function dnm(){},
dnn:function dnn(d){this.a=d},
dno:function dno(){},
dnp:function dnp(d){this.a=d},
dnq:function dnq(){},
dnz:function dnz(d,e,f){this.a=d
this.b=e
this.c=f},
dnc:function dnc(d){this.a=d},
dnd:function dnd(d,e){this.a=d
this.b=e},
dne:function dne(d){this.a=d},
dnf:function dnf(d){this.a=d},
dnD:function dnD(d){this.a=d},
dnE:function dnE(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmy:function dmy(d,e){this.a=d
this.b=e},
dmz:function dmz(d){this.a=d},
dmA:function dmA(d){this.a=d},
dnx:function dnx(d,e){this.a=d
this.b=e},
dny:function dny(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dnr:function dnr(d,e,f){this.a=d
this.b=e
this.c=f},
dn5:function dn5(d,e,f){this.a=d
this.b=e
this.c=f},
dn6:function dn6(){},
dnG:function dnG(d){this.a=d},
dnH:function dnH(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnK:function dnK(d){this.a=d},
dnJ:function dnJ(){},
dn4:function dn4(d,e,f){this.a=d
this.b=e
this.c=f},
dn3:function dn3(d,e){this.a=d
this.b=e},
dn2:function dn2(d,e){this.a=d
this.b=e},
dmN:function dmN(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
dmO:function dmO(d){this.a=d},
dmL:function dmL(d,e){this.a=d
this.b=e},
dmP:function dmP(d){this.a=d},
dmK:function dmK(){},
dmQ:function dmQ(d){this.a=d},
dmI:function dmI(){},
dmJ:function dmJ(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmS:function dmS(d){this.a=d},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmC:function dmC(d,e){this.a=d
this.b=e},
dmT:function dmT(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmU:function dmU(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmB:function dmB(d,e){this.a=d
this.b=e},
dmV:function dmV(d,e,f){this.a=d
this.b=e
this.c=f},
dmW:function dmW(d){this.a=d},
dmD:function dmD(){},
dmX:function dmX(d){this.a=d},
anS:function anS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjK:function bjK(){this.c=this.a=null},
drk:function drk(d,e){this.a=d
this.b=e},
drj:function drj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajT:function ajT(d,e,f,g,h,i,j){var _=this
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
cO3:function cO3(d){this.a=d},
cNo:function cNo(d,e){this.a=d
this.b=e},
cNe:function cNe(d){this.a=d},
cNf:function cNf(d){this.a=d},
cNy:function cNy(d){this.a=d},
cNv:function cNv(d){this.a=d},
cNw:function cNw(d){this.a=d},
cNx:function cNx(d,e,f){this.a=d
this.b=e
this.c=f},
cNq:function cNq(d){this.a=d},
cNp:function cNp(d){this.a=d},
cNg:function cNg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNt:function cNt(d){this.a=d},
cNs:function cNs(d){this.a=d},
cNr:function cNr(d,e){this.a=d
this.b=e},
cNR:function cNR(d){this.a=d},
cNL:function cNL(d){this.a=d},
cNO:function cNO(d){this.a=d},
cNN:function cNN(){},
cNK:function cNK(d){this.a=d},
cNM:function cNM(d,e){this.a=d
this.b=e},
cNJ:function cNJ(){},
cNl:function cNl(){},
cNm:function cNm(d,e){this.a=d
this.b=e},
cNn:function cNn(d){this.a=d},
cNj:function cNj(d,e){this.a=d
this.b=e},
cNk:function cNk(d,e){this.a=d
this.b=e},
cNB:function cNB(d,e){this.a=d
this.b=e},
cNu:function cNu(d){this.a=d},
cNC:function cNC(d){this.a=d},
cND:function cND(d,e){this.a=d
this.b=e},
cNE:function cNE(d,e){this.a=d
this.b=e},
cNF:function cNF(d,e){this.a=d
this.b=e},
cNG:function cNG(d,e,f){this.a=d
this.b=e
this.c=f},
cNH:function cNH(d){this.a=d},
cNI:function cNI(d){this.a=d},
cNz:function cNz(d,e){this.a=d
this.b=e},
cNQ:function cNQ(d){this.a=d},
cNA:function cNA(d,e){this.a=d
this.b=e},
cO2:function cO2(d){this.a=d},
cNW:function cNW(d){this.a=d},
cNZ:function cNZ(d){this.a=d},
cNT:function cNT(d,e){this.a=d
this.b=e},
cNX:function cNX(){},
cNY:function cNY(d,e){this.a=d
this.b=e},
cNU:function cNU(d){this.a=d},
cNV:function cNV(d){this.a=d},
cO0:function cO0(){},
cO_:function cO_(d){this.a=d},
cNS:function cNS(d,e){this.a=d
this.b=e},
cO1:function cO1(d){this.a=d},
cNh:function cNh(d){this.a=d},
cNP:function cNP(d,e){this.a=d
this.b=e},
cNi:function cNi(d,e,f){this.a=d
this.b=e
this.c=f},
aN8:function aN8(){},
aN9:function aN9(){},
aNa:function aNa(){},
aO7:function aO7(){},
c4D(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4E(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hVu(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_I(d,e){return C.hVv(d,e)},
hVv(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3x(d),$async$b_I)
case 3:p=g
if(p!=null){try{t=A.W.aP(0,p.c,null)
if(x.f.b(t)){s=C.hrc(B.a1(t,x.N,x.z))
if(s==null){u=new B.GP(D.a9k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4D(s,e,p.b)){u=new B.GP(D.aMy,null)
w=1
break}r=p.a?D.emn:D.aMx
u=new B.GP(r,s)
w=1
break}}catch(o){}u=new B.GP(D.a9k,null)
w=1
break}s=C.hrd(d)
if(s==null){u=new B.GP(D.a9k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4D(s,e,null)){u=new B.GP(D.aMy,null)
w=1
break}u=new B.GP(D.aMx,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_I,v)},
hrd(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d3(w,"\ufeff"))w=J.mY(w,1)
v=!1
if(J.d3(w,"NGMYSNAP1|")){v=!0
w=A.cb.cD(0,A.cH.aK(J.mY(w,10)))}u=A.W.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hVt(t):C.hrc(t)
return s}catch(r){return null}},
hVt(d){var w,v,u,t,s,r,q,p,o,n=new C.c4A(),m=new C.c4z(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w0(v,u,t,s,r,A.h.M(q==null?0:q))}else p=null
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
return new B.a7n("","",v,u,t,s,r,q,n,m,o,p,A.iD,new B.V(Date.now(),0,!1),-1)},
hrc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4C()
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
n=new B.w0(t,s,r,q,p,A.h.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.C(new B.el(J.b9(m,new C.c4B(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7n(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
haY(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$haY=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4y(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hl(B.KW(t.f2(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$haY,v)},
Xz:function Xz(d,e){this.a=d
this.b=e},
c4A:function c4A(){},
c4z:function c4z(){},
c4C:function c4C(){},
c4B:function c4B(d){this.a=d},
iig(d){return B.cg(null,A.b5,!0,null,new C.fCV(),d,null,!0,!0,x.N)},
iit(d,e,f,g){return B.cg(null,A.b5,!0,null,new C.fE7(g,f,e),d,null,!0,!0,x.y)},
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
dHQ:function dHQ(d,e){this.a=d
this.b=e},
dHR:function dHR(d){this.a=d},
dHH:function dHH(d,e){this.a=d
this.b=e},
dHF:function dHF(d){this.a=d},
dHP:function dHP(d){this.a=d},
dHO:function dHO(d,e){this.a=d
this.b=e},
dHE:function dHE(d,e){this.a=d
this.b=e},
dHD:function dHD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHG:function dHG(d){this.a=d},
dHN:function dHN(){},
dHL:function dHL(d){this.a=d},
dHM:function dHM(d,e){this.a=d
this.b=e},
dHI:function dHI(){},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHK:function dHK(d,e){this.a=d
this.b=e},
dHS:function dHS(d){this.a=d},
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
dHW:function dHW(d){this.a=d},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHU:function dHU(d,e){this.a=d
this.b=e},
dHV:function dHV(d){this.a=d},
a0F:function a0F(d){this.a=d},
bmc:function bmc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dHX:function dHX(d,e){this.a=d
this.b=e},
fCV:function fCV(){},
fE7:function fE7(d,e,f){this.a=d
this.b=e
this.c=f},
afX:function afX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8e:function f8e(d){this.a=d},
f8f:function f8f(d){this.a=d},
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
dgM:function dgM(d){this.a=d},
dgJ:function dgJ(){},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d){this.a=d},
VF(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O_(s),$async$VF)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apH(s,t),$async$VF)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VF,v)},
hVN(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.U(d).k("Y<1>")
v=B.C(new B.Y(d,new C.c5m(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5m:function c5m(){},
inV(d){return A.d.dM(A.DY,new C.fOk(d),new C.fOl()).r},
fOk:function fOk(d){this.a=d},
fOl:function fOl(){},
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
dOj:function dOj(d){this.a=d},
dOi:function dOi(d){this.a=d},
dOa:function dOa(d,e,f){this.a=d
this.b=e
this.c=f},
dOf:function dOf(d){this.a=d},
dOc:function dOc(d,e,f){this.a=d
this.b=e
this.c=f},
dOg:function dOg(d){this.a=d},
dOb:function dOb(d){this.a=d},
dOh:function dOh(d){this.a=d},
dOd:function dOd(d){this.a=d},
dOe:function dOe(d){this.a=d},
hsS(d){var w=B.cdy(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bx=0
d.c7=B.a([],x.s)},
hsU(d){return B.cg(null,A.w.j(0.82),!0,null,new C.cdD(),d,null,!0,!0,x.H)},
a82:function a82(d){this.a=d},
cdD:function cdD(){},
cdC:function cdC(d){this.a=d},
hGN(){var w=new B.V(Date.now(),0,!1),v=w.bS(B.dx(4-B.mq(w),0,0,0,0,0).a),u=B.c1(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.h.bh(A.o.aq(v.bB(B.c1(B.bD(u),B.bM(u),B.bY(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
ft5(d,e){var w,v,u,t,s,r,q=B.H0(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.aA(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
icI(d,e){var w,v,u,t,s,r,q,p=B.H0(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.h.M(w)
return w==null?0:w}}return 0},
ixr(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H0(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.h.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ij8(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H0(b5),b2=B.ceU(),b3=C.hGN()
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
return w==null?1:w}n=new C.fEX()
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
if(l!=null)return l}k=C.ft5(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.T(r,q)
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
d=v.b(j.h(0,h))?B.a1(v.a(j.h(0,h)),r,q):B.T(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=B.aI(d.h(0,a6))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.cc(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aI(d.h(0,a8))
a0=g==null?a1:A.h.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cc(h,a1)}}}return a1},
hD3(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h4()?1:2
return s},
hh7(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ij9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H0(a3),a1=new C.fEY()
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
q=new C.fEZ(v+r+q>1,l)
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
return C.hh7(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ij7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.h.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.h.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hGN():B.ceU()
t=v+"|"+u
s=C.ft5(d,e)
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
irJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.blP()
w=C.ij9(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.aht(d,a0,w)
return w}v=C.ij8(d,a0)
if(v!=null){if(v===3)++d.f
C.aht(d,a0,v)
return v}u=C.ij7(d,a0,a1)
if(u!=null)return new C.fVC(d,a1,a0).$1(u)
t=C.ft5(d,a0)
s=J.a8(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.h.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.h.M(s)
if(p==null)p=0
o=new C.fVE(d,a1)
if(C.icI(d,a0)>0){n=o.$0()
C.ixr(d,a0)
C.aht(d,a0,n)
return n}if(q>=d.c){n=new C.fVD(d,a1).$0()
C.aht(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aht(d,a0,n)
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
C.aht(d,a0,e)
return e},
ceM(d){var w=0,v=B.j(x.y),u
var $async$ceM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ceL(d),$async$ceM)
case 3:if(f){u=!0
w=1
break}u=B.ceL(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ceM,v)},
aht(d,e,f){var w,v="winStreak",u="loseStreak",t=C.ft5(d,e),s=J.a8(t),r=B.aI(s.h(t,v)),q=r==null?null:A.h.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.h.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fEX:function fEX(){},
fEY:function fEY(){},
fEZ:function fEZ(d,e){this.a=d
this.b=e},
fVC:function fVC(d,e,f){this.a=d
this.b=e
this.c=f},
fVE:function fVE(d,e){this.a=d
this.b=e},
fVD:function fVD(d,e){this.a=d
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
_.b9$=e
_.c=_.a=null},
dHs:function dHs(d){this.a=d},
dHr:function dHr(d){this.a=d},
dHt:function dHt(d){this.a=d},
dHq:function dHq(d,e){this.a=d
this.b=e},
aNG:function aNG(){},
Or:function Or(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cg3:function cg3(){},
cg2:function cg2(){},
arJ:function arJ(d,e,f){this.c=d
this.d=e
this.a=f},
hbY(d,e,f){return B.cg(null,A.w.j(0.88),!0,null,new C.cgv(f,e),d,null,!0,!0,x.H)},
hZB(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cc(r[0],null)
v=r[1]
u=B.cc(v,null)
t=B.cc(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
Oz:function Oz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgv:function cgv(d,e){this.a=d
this.b=e},
bmU:function bmU(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e78:function e78(d,e){this.a=d
this.b=e},
e74:function e74(){},
e75:function e75(){},
e76:function e76(d,e){this.a=d
this.b=e},
e77:function e77(d,e){this.a=d
this.b=e},
aOh:function aOh(){},
hGJ(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blm(new C.fQI(w))
w=w.a
return w==null?null:w.c.a},
hGB(d){$.aU.x1$.push(new C.fQv(d))},
hGW(d){var w=$.to().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hGJ(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q5())w.eb()},
hGV(d){C.hDb(d,0)},
hDb(d,e){var w,v
if(e>4)return
w=d==null?$.to().gbl():d
if(w==null||w.c==null)return
v=C.hGJ(w)
if(v==="GameCenterScreen")return
if(D.fkU.q(0,v)&&w.q5()){w.eb()
$.aU.x1$.push(new C.fBe(w,e))}},
aSh(d,e,f){return B.eb(B.ck(new C.fS4(e,d,f)),e,!0)},
fQI:function fQI(d){this.a=d},
fQv:function fQv(d){this.a=d},
fQu:function fQu(d){this.a=d},
fBe:function fBe(d,e){this.a=d
this.b=e},
fS4:function fS4(d,e,f){this.a=d
this.b=e
this.c=f},
arN(d,e){var w=0,v=B.j(x.H),u
var $async$arN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WK(e)
w=2
return B.b(B.arM(d,u),$async$arN)
case 2:B.a8F(d,u)
return B.h(null,v)}})
return B.i($async$arN,v)},
vc(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vc=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.yX(g)
if(o.length===0){w=1
break}t=e==null?B.M6(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OA(o),$async$vc)
case 3:q=m
if(j!=null&&j.length!==0&&J.rn(q,new C.cgJ(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mX(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arN(o,q),$async$vc)
case 4:if(i==null||r==null||s)C.a8H(o).bG(new C.cgK(),x.S).eF(new C.cgL())
case 1:return B.h(u,v)}})
return B.i($async$vc,v)},
a8H(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hHZ
m=B.yX(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OA(m),$async$a8H)
case 3:t=f
s=J.cE(t)
if(!s.aU(t,new C.cgI())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8H)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.W.av(s.h(t,o).aj(),null)!==A.W.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arN(m,r),$async$a8H)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8H,v)},
b2a(d){var w=0,v=B.j(x.S),u,t
var $async$b2a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc0(d,!1),$async$b2a)
case 3:t=J
w=4
return B.b(C.arO(d,!1),$async$b2a)
case 4:u=t.dH(f,new C.cgH(new B.V(Date.now(),0,!1).bS(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2a,v)},
arO(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.yX(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OA(r),$async$arO)
case 3:t=g
s=B.WK(t)
if(s.length!==J.ad(t))C.arN(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arO,v)},
ipt(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bB(d).a,r=A.o.aq(s,6e7)
if(r<1)return"Just now"
w=A.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.aq(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12)
s=A.iX[B.bM(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fV(d)),2,"0")
u=B.dg(d)<12?"AM":"PM"
return s+" "+B.bY(d)+r+" \xb7 "+v+":"+w+" "+u},
bDy(d){var w=A.h.ad(Math.abs(d),2).split(".")
return"$"+B.ou(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fxY(),null)+"."+w[1]},
bHc(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arO(e,!1),$async$bHc)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hc0(e,!0).bG(new C.h3E(e),t).bG(new C.h3F(),t).eF(new C.h3G())
w=4
return B.b(B.bU(A.L,null,new C.h3H(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHc)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHc,v)},
hf1(d,e,f){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.dv(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hz,w,w,w),1)},
e79(d,e,f){var w=null,v=A.w.j(0.22),u=B.l(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dv(A.dJ,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.OR,w,w,w),1)},
cgJ:function cgJ(d){this.a=d},
cgK:function cgK(){},
cgL:function cgL(){},
cgI:function cgI(){},
cgH:function cgH(d){this.a=d},
fxY:function fxY(){},
h3E:function h3E(d){this.a=d},
h3F:function h3F(){},
h3G:function h3G(){},
h3H:function h3H(d,e){this.a=d
this.b=e},
h3D:function h3D(d,e){this.a=d
this.b=e},
h3C:function h3C(d){this.a=d},
aeO:function aeO(d,e){this.c=d
this.a=e},
e7b:function e7b(){},
e7c:function e7c(){},
e7d:function e7d(){},
e7e:function e7e(d){this.a=d},
e7g:function e7g(){},
e7f:function e7f(d){this.a=d},
aeN:function aeN(d,e){this.c=d
this.a=e},
e7a:function e7a(){},
bHd(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hQ(A.b5,!1,w,d,new C.h3K(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h3K:function h3K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h3I:function h3I(d,e){this.a=d
this.b=e},
h3J:function h3J(d,e){this.a=d
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
dnU:function dnU(d,e){this.a=d
this.b=e},
dnT:function dnT(){},
afb:function afb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNb:function aNb(){},
asy(d,e,f){return new C.b30(f,d,e,null)},
i_g(d){var w=B.a(A.h.ad(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.ou(w[0],v,new C.ciq(),null)
return A.d.aN(w,".")},
b2d(){var w=$.tT
if((w>0?$.tT=w-1:w)<=0)$.tT=0},
aiy(d,e){var w=0,v=B.j(x.H),u
var $async$aiy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hk5
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiy)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiy,v)},
b30:function b30(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cir:function cir(d){this.a=d},
ciq:function ciq(){},
O2:function O2(){},
c5T:function c5T(){},
hjq(d){if(d>0)return"+"+d
return""+d},
hiG(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fS5(d,e){var w=J.t(e,d)
if(w==null)w=B.fQS().h(0,d)
return w==null?90:w},
fwT(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.ka(u,new C.fwU(),u.$ti.k("ka<ci.E,q>")))
A.d.e0(v,e)
return v},
hC7(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pN(s,3,s.$ti.k("ci.E")))
A.d.e0(t,e)
return t},
ikz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JD("Simplify \u221a("+t*s+"x^"+q+")",m,C.hC7(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JD("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fwT(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JD("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fwT(g,b2)))}else b1.push(new C.JD("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fwT(k,b2)))}else if(u===3){e=b2.aw(11)-5
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
b1.push(new C.JD("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fwT(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JD("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hC7(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
ivw(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dt(B.a(d.split(""),u),x.bJ).hg(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hg(t)
if(v!==d)return v}return new B.dt(t,x.bJ).hg(0)},
JD:function JD(d,e,f){this.a=d
this.b=e
this.c=f},
fwU:function fwU(){},
ar6:function ar6(d,e,f,g,h,i,j){var _=this
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
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_H:function e_H(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_J:function e_J(d){this.a=d},
e_D:function e_D(d){this.a=d},
e_K:function e_K(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_N:function e_N(d){this.a=d},
e_O:function e_O(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
arP:function arP(d,e,f,g,h,i){var _=this
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
e7m:function e7m(d,e,f){this.a=d
this.b=e
this.c=f},
e7n:function e7n(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7h:function e7h(d){this.a=d},
hWr(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bS(36e8)
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
return new C.rQ(w,u,t,s,r,q==null?null:J.k(q))},
a8P(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8P)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.dd(s,x.f)
p=B.cF(p,new C.che(),p.$ti.k("M.E"),x.b1)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b0(p,new C.chf())
u=p
w=1
break}catch(n){r=B.ab(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8P,v)},
as4(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$as4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8P(d),$async$as4)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.chb(e))
q.I(r,e)
q.b0(r,new C.chc())
w=3
return B.b(B.az(),$async$as4)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kq(r,80)
s=q.$ti.k("N<ak.E,aa<q,@>>")
q=B.C(new B.N(q,new C.chd(),s),s.k("ak.E"))
w=4
return B.b(u.aC("String","ngmy_helper_calendar_v1_"+t,A.W.av(q,null)),$async$as4)
case 4:return B.h(null,v)}})
return B.i($async$as4,v)},
hZO(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dH(d,new C.chg(v,v.bS(B.dx(14,0,0,0,0,0).a)))
w=B.C(w,w.$ti.k("M.E"))
return w},
htu(d){var w,v,u,t,s,r,q,p,o,n,m=C.hZO(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cT(m,0,B.dA(20,"count",x.S),B.U(m).c),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.dg(s),12)===0?12:A.o.F(B.dg(s),12)
q=B.dg(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fV(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bM(s)+"/"+B.bY(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rQ:function rQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
che:function che(){},
chf:function chf(){},
chb:function chb(d){this.a=d},
chc:function chc(){},
chd:function chd(){},
chg:function chg(d,e){this.a=d
this.b=e},
hWs(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
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
return new C.rR(w,u,t,s,r,q,J.k(p==null?"user":p))},
hrM(d){var w=A.o.F(B.dg(d),12)===0?12:A.o.F(B.dg(d),12),v=B.dg(d)>=12?"PM":"AM"
return""+B.bM(d)+"/"+B.bY(d)+" "+w+":"+A.a.b1(A.o.v(B.fV(d)),2,"0")+" "+v},
VT(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VT)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.dd(s,x.f)
p=B.cF(p,new C.c90(),p.$ti.k("M.E"),x.Q)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b0(p,new C.c91())
u=p
w=1
break}catch(n){r=B.ab(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VT,v)},
b0v(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0v=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0v)
case 2:u=g
t=B.cT(e,0,B.dA(120,"count",x.S),B.U(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.U(t).k("N<1,aa<q,@>>")
r=B.C(new B.N(t,new C.c8Z(),r),r.k("ak.E"))
w=3
return B.b(u.aC("String","ngmy_call_memory_v1_"+s,A.W.av(r,null)),$async$b0v)
case 3:return B.h(null,v)}})
return B.i($async$b0v,v)},
b0w(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0w=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.T(x.N,x.Q)
o=J
w=2
return B.b(C.VT(d),$async$b0w)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.C(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c9_())
w=5
return B.b(C.b0v(d,q),$async$b0w)
case 5:return B.h(null,v)}})
return B.i($async$b0w,v)},
c92(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c92=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VT(d),$async$c92)
case 3:t=s.dH(g,new C.c93(e.bS(-72e8),e.bS(72e8)))
t=B.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c92,v)},
hrN(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kq(d,e),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWG()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.aA(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
irt(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c1(B.bD(p),B.bM(p),B.bY(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bS(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bS(r)
w=B.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.cc(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.cc(v==null?"":v,null)
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
hIu(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rR:function rR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c90:function c90(){},
c91:function c91(){},
c8Z:function c8Z(){},
c9_:function c9_(){},
c93:function c93(d,e){this.a=d
this.b=e},
htx(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lY(t,w,v,u==null?null:J.k(u))},
hZU(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.cho(),x.bP)
v=B.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqc
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iB(r,w,v,u,t,typeof d.h(0,s)=="number"?A.h.M(B.dF(d.h(0,s))):0)},
hZT(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.icW(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.h.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.h.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chm(),x.u)
s=B.C(s,s.$ti.k("ak.E"))}return new C.ip(p,w,v,u,s==null?D.aDh:s,t)},
icX(d){var w,v,u,t=B.J([F.Dr,"investments",A.nP,"games",A.js,"loans",A.hD,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kf,"store",A.qX,"jobs",A.nO,"refunds",A.eY,"account",A.lr,"music",A.zz,"help"],x.dk,x.N)
for(w=new B.cb(t,B.a3(t).k("cb<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
icW(d){switch(d){case"investments":return F.Dr
case"games":return A.nP
case"loans":return A.js
case"withdrawals":return A.hD
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qX
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zz}},
ni(d){var w=B.a([new C.lY("text",d,null,null)],x.a)
return w},
aiv(){var w=null,v=x.v
return B.a([new C.ip("investments","Investments",F.Dr,4280468830,B.a([new C.iB("inv1","How do I buy an investment plan?",C.ni("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iB("inv2","When do I get paid from my plan?",C.ni("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iB("inv3","Can I have more than one plan?",C.ni("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.ip("games","Games",A.nP,4287323382,B.a([new C.iB("gam1","How do NGMY games work?",C.ni("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iB("gam2","Why did my game payout change?",C.ni("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.ip("loans","Loans",A.js,4294538006,B.a([new C.iB("loan1","How do I apply for a loan?",C.ni("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iB("loan2","What is the repayment period?",C.ni("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.ip("withdrawals","Withdrawals",A.hD,4282090230,B.a([new C.iB("wd1","How do I withdraw money?",C.ni("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iB("wd2","Why is my withdrawal pending?",C.ni("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.ip("deposits","Deposits",A.jN,4279548070,B.a([new C.iB("dep1","How do I deposit funds?",C.ni("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iB("dep2","How long until my deposit posts?",C.ni("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.ip("civic","Civic Registry",A.l2,4289170426,B.a([new C.iB("civ1","What is Civic Registry?",C.ni("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iB("civ2","What does \u201cmissed\u201d mean on my profile?",C.ni("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.ip("store","NGMY Store",A.kf,4293675161,B.a([new C.iB("sto1","How do I buy from NGMY Store?",C.ni("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iB("sto2","How do I sell in the store?",C.ni("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.ip("jobs","Jobs & Creator",A.qX,4293548044,B.a([new C.iB("job1","How do I find jobs?",C.ni("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iB("job2","How do I post a job?",C.ni("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.ip("refunds","Refunds",A.nO,4293870660,B.a([new C.iB("ref1","Can I get a refund?",C.ni("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iB("ref2","How long do refunds take?",C.ni("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.ip("account","Account",A.eY,4281908728,B.a([new C.iB("acc1","How do I update my profile?",C.ni("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iB("acc2","I forgot my password \u2014 what now?",C.ni("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.ip("music","Music Charts",A.lr,4290807036,B.a([new C.iB("mus1","What are Music Charts?",C.ni("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iB("mus2","How do I upload music?",C.ni("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.ip("help","Help Center",A.zz,4279080072,B.a([new C.iB("hlp1","Where can I get live help?",C.ni("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iB("hlp2","How do daily Helper limits work?",C.ni("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hty(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiv()
v=v.dO(d,new C.chr(),x.i)
w=B.C(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chs())
return w.length===0?C.aiv():w},
htz(d){var w=J.b9(d,new C.cht(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
as6(d){return C.hZV(d)},
hZV(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$as6=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$as6)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_kb_v1",A.W.av(C.htz(d),null)),$async$as6)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.ab(p)
$.am.$1("[helper kb] local save: "+B.w(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$as6,v)},
chq(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chq)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiv()
u=l
w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){l=C.aiv()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiv()
u=l
w=1
break}n=C.hty(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.ab(j)
$.am.$1("[helper kb] local load: "+B.w(m))
l=C.aiv()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chq,v)},
b2z(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2z)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2z)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ab(o)
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
return B.i($async$b2z,v)},
b2A(d){return C.hZW(d)},
hZW(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2A=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b2A)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hP("ngmy_helper_kb",d,!1,!1,A.cQ,null),$async$b2A)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ab(o)
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
return B.i($async$b2A,v)},
as7(){var w=0,v=B.j(x.I),u,t,s,r
var $async$as7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chq(),$async$as7)
case 3:s=e
w=4
return B.b(C.b2z(),$async$as7)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hty(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.as6(t),$async$as7)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as7,v)},
chu(d){var w=0,v=B.j(x.y),u
var $async$chu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as6(d),$async$chu)
case 3:u=C.b2A(C.htz(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chu,v)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iB:function iB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chp:function chp(){},
cho:function cho(){},
ip:function ip(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chn:function chn(){},
chm:function chm(){},
chr:function chr(){},
chs:function chs(){},
cht:function cht(){},
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
ebs:function ebs(){},
ebt:function ebt(){},
ebm:function ebm(d){this.a=d},
ebn:function ebn(d){this.a=d},
eb5:function eb5(d,e){this.a=d
this.b=e},
eb6:function eb6(d){this.a=d},
eb7:function eb7(d,e,f){this.a=d
this.b=e
this.c=f},
eb4:function eb4(d){this.a=d},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebk:function ebk(d,e){this.a=d
this.b=e},
ebl:function ebl(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebe:function ebe(d,e,f){this.a=d
this.b=e
this.c=f},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebi:function ebi(d,e,f){this.a=d
this.b=e
this.c=f},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebf:function ebf(d,e,f){this.a=d
this.b=e
this.c=f},
eb9:function eb9(d){this.a=d},
eb8:function eb8(d){this.a=d},
eba:function eba(d,e){this.a=d
this.b=e},
ebb:function ebb(d){this.a=d},
ebr:function ebr(d,e){this.a=d
this.b=e},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebp:function ebp(){},
ebo:function ebo(d,e){this.a=d
this.b=e},
QE:function QE(d,e){this.c=d
this.a=e},
bdO:function bdO(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cWO:function cWO(d){this.a=d},
cWN:function cWN(d,e){this.a=d
this.b=e},
cWL:function cWL(d,e){this.a=d
this.b=e},
cWP:function cWP(d){this.a=d},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWK:function cWK(d,e){this.a=d
this.b=e},
cWQ:function cWQ(d){this.a=d},
cWR:function cWR(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e,f){this.c=d
this.d=e
this.a=f},
aI4:function aI4(){this.d=$
this.c=this.a=null},
f38:function f38(d,e){this.a=d
this.b=e},
f39:function f39(d){this.a=d},
f3f:function f3f(){},
f3e:function f3e(d,e){this.a=d
this.b=e},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3a:function f3a(d,e){this.a=d
this.b=e},
f3c:function f3c(d,e,f){this.a=d
this.b=e
this.c=f},
f3b:function f3b(d,e,f){this.a=d
this.b=e
this.c=f},
a1p:function a1p(d,e){this.c=d
this.a=e},
aI3:function aI3(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f34:function f34(d,e){this.a=d
this.b=e},
f32:function f32(d){this.a=d},
f33:function f33(d,e){this.a=d
this.b=e},
f36:function f36(d,e){this.a=d
this.b=e},
f37:function f37(d){this.a=d},
f35:function f35(d,e){this.a=d
this.b=e},
hZR(d){var w=new B.N(d,new C.chj(),B.U(d).k("N<1,q>")).aN(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chk(d,e,f){return C.hZS(d,e,f)},
hZS(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chk=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.La([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rj(B.nl(b3),C.hZR(b6)+"\n\nAdmin instruction:\n"+b4,A.i1,null,null),$async$chk)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.La([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d3(s,"```"))s=A.a.el(J.hn7(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.W.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.La([a3,"AI response was not valid JSON.",null,null])
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
u=new B.La([a3,"AI did not return any categories.",p,o])
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
J.c4(a0,C.htx(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c4(a0,new C.lY("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.t(e,"question")
J.c4(g,new C.iB("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.hZQ(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.h.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c4(m,new C.ip(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.La([m,null,p,a3])
w=1
break}catch(b7){a2=B.ab(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.La([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chk,v)},
hZQ(d){switch(d){case"investments":return F.Dr
case"games":return A.nP
case"loans":return A.js
case"withdrawals":return A.hD
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qX
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zz}},
ipS(d,e,f){var w,v,u,t=B.br(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fSD(f))
if(w>=0){t[w]=J.fm(e).cQc(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bfT(u)
return t},
chj:function chj(){},
fSD:function fSD(d){this.a=d},
ddH:function ddH(d){this.a=d},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
aG5:function aG5(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ec2:function ec2(){},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebO:function ebO(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebK:function ebK(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebN:function ebN(d,e,f){this.a=d
this.b=e
this.c=f},
ebF:function ebF(){},
ebG:function ebG(){},
ebH:function ebH(){},
ebI:function ebI(){},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebU:function ebU(d){this.a=d},
ebV:function ebV(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebZ:function ebZ(){},
ec_:function ec_(d){this.a=d},
ebS:function ebS(d){this.a=d},
ec0:function ec0(d){this.a=d},
ebR:function ebR(d){this.a=d},
ec1:function ec1(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebP:function ebP(d,e){this.a=d
this.b=e},
i6R(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).l_(0,d),w=new B.Gs(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.aA(d,t,q)
o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,A.cL,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.ev(p,n,n,A.cN,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.ne,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.b_(d,t)
m.push(B.cS(n,n,n,n,n,n,n,n,n,B.m(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u5(A.cx,n,n,n,A.eT,n,n,!0,n,B.cS(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.c2)},
dsc:function dsc(d){this.a=d},
aDG:function aDG(d,e){this.a=d
this.b=e},
as5:function as5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG4:function aG4(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebu:function ebu(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebE:function ebE(){},
ebx:function ebx(d,e){this.a=d
this.b=e},
ebw:function ebw(d,e){this.a=d
this.b=e},
ebz:function ebz(){},
ebB:function ebB(){},
ebA:function ebA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eby:function eby(d,e){this.a=d
this.b=e},
aDE:function aDE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adi:function adi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2y:function b2y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chl:function chl(d){this.a=d},
ada:function ada(d,e,f){this.c=d
this.d=e
this.a=f},
cQi:function cQi(d){this.a=d},
cQj:function cQj(){},
cQk:function cQk(d){this.a=d},
aDF:function aDF(d,e,f){this.c=d
this.d=e
this.a=f},
bjY:function bjY(){this.c=this.a=this.d=null},
dsd:function dsd(d,e){this.a=d
this.b=e},
dsf:function dsf(d,e){this.a=d
this.b=e},
dse:function dse(d){this.a=d},
i0o(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i0p(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i0n(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hC2(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fwC(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
ir6(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i0n(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asW:function asW(d,e){this.a=d
this.b=e},
JI:function JI(d,e){this.a=d
this.b=e},
rW:function rW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwC:function fwC(){},
as8:function as8(d,e,f,g,h,i){var _=this
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
ecg:function ecg(d,e){this.a=d
this.b=e},
ec7:function ec7(d){this.a=d},
ec9:function ec9(){},
eca:function eca(d,e){this.a=d
this.b=e},
ecb:function ecb(d){this.a=d},
ecc:function ecc(){},
ecd:function ecd(d,e){this.a=d
this.b=e},
ece:function ece(d){this.a=d},
ecf:function ecf(d){this.a=d},
ec8:function ec8(d,e){this.a=d
this.b=e},
ecn:function ecn(d,e){this.a=d
this.b=e},
eck:function eck(){},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecm:function ecm(d,e){this.a=d
this.b=e},
ecj:function ecj(d,e){this.a=d
this.b=e},
eci:function eci(d,e){this.a=d
this.b=e},
ecp:function ecp(d){this.a=d},
eco:function eco(d){this.a=d},
ec6:function ec6(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
ech:function ech(d,e){this.a=d
this.b=e},
ec3:function ec3(d){this.a=d},
ec4:function ec4(d){this.a=d},
aOp:function aOp(){},
chw(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.U8
w=1
break}w=3
return B.b(B.az(),$async$chw)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aV(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.U8
w=1
break}try{q=B.a1(x.f.a(A.W.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WU(p,o,n,q)
w=1
break}catch(l){s=B.ab(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.U8
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chw,v)},
as9(d,e){var w=0,v=B.j(x.H),u
var $async$as9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$as9)
case 4:w=3
return B.b(g.aC("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.W.av(e.aj(),null)),$async$as9)
case 3:case 1:return B.h(u,v)}})
return B.i($async$as9,v)},
chv(d){var w=0,v=B.j(x.gp),u,t
var $async$chv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WU(!0,!0,!0,!0)
w=3
return B.b(C.as9(d,t),$async$chv)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chv,v)},
hIv(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hIt(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WU:function WU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHh(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHh=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2t(h),$async$bHh)
case 3:if(j){w=1
break}w=4
return B.b(C.as1(h),$async$bHh)
case 4:if(d.e==null){w=1
break}t=B.qV(d,!0)
t.toString
s=B.dl()
s.b=B.pE(new C.h4B(g,e,f,s),!1,!1)
t.mf(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHh,v)},
h4B:function h4B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4A:function h4A(d){this.a=d},
a0a:function a0a(d,e,f,g,h){var _=this
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
dpy:function dpy(d){this.a=d},
dpz:function dpz(d,e,f){this.a=d
this.b=e
this.c=f},
dpE:function dpE(){},
dpD:function dpD(d){this.a=d},
dpA:function dpA(d){this.a=d},
dpB:function dpB(){},
dpC:function dpC(d){this.a=d},
aNg:function aNg(){},
i_S(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i_R(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asH(d){return C.i_P(d)},
i_P(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asH)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.ab(o)
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
return B.i($async$asH,v)},
b3o(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3o=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i_S(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3o)
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
q=B.ab(m)
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
return B.i($async$b3o,v)},
hu_(d){var w,v=A.a.i(d)
if(A.a.Y(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.b_(v,14))
return w.length===0?null:w}return null},
i_Q(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aU(e,new C.cjk(A.a.i(d.toLowerCase()),w))},
hu0(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qk(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qk(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qk(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qk(!1,0,"Verification code does not match this deposit.")
if(!C.i_Q(e,d,w))return new C.qk(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hcg(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_k
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OQ(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OQ(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OQ(!0,!1,!1,!1)},
cjq(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hu_(d)
if(s==null){u=D.Ua
w=1
break}w=3
return B.b(C.asH(s),$async$cjq)
case 3:t=g
if(t==null){u=D.Ua
w=1
break}u=C.hcg(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjq,v)},
b3q(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3o(d),$async$b3q)
case 3:s=g
if(s==null||s.length===0){u=D.Ua
w=1
break}w=4
return B.b(C.asH(s),$async$b3q)
case 4:t=g
if(t==null){u=D.Ua
w=1
break}u=C.hcg(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3q,v)},
cjr(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjr=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3o(d),$async$cjr)
case 3:t=j
if(t==null||t.length===0){u=new C.qk(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xc(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjr,v)},
Xc(d,e,f,g,h){return C.i_T(d,e,f,g,h)},
i_T(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xc=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hu_(a4)
if(a0==null){u=new C.qk(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asH(a0),$async$Xc)
case 3:k=a8
if(k==null){u=new C.qk(!1,0,y.m)
w=1
break}j=C.hcg(k,a5)
if(j.b){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qk(!1,0,y.u)
w=1
break}if(j.c){u=new C.qk(!1,0,y.j)
w=1
break}i=C.hu0(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qk(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xc)
case 8:p=a8
if(p==null){u=new C.qk(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}o=C.hu0(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dK(p,f,e)
J.aK(n,"redeemedBy",q)
J.aK(n,"redeemedAt",r)
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
l=B.ab(a1)
$.am.$1("[local deposit qr] redeem: "+B.w(l))
u=new C.qk(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.qk(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xc,v)},
OQ:function OQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qk:function qk(d,e,f){this.a=d
this.b=e
this.c=f},
cjk:function cjk(d,e){this.a=d
this.b=e},
cjy(d,e){var w
B.hj1(d,e,!1)
B.ri(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bp(!0,!1,d.d,w)},
a9b(d,e){if(d==null)return!1
return B.bD(d)===e.gcl()&&B.bM(d)===e.gci()&&B.bY(d)===e.gcz()},
i00(d){var w=B.dg(d)*60+B.fV(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hu7(d){if(B.dg(d)>=12)return!1
if(B.mq(d)===6||B.mq(d)===7)return!1
return!0},
cjC(d){var w=d.c?d.bU():d
return w.d5(B.c1(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))},
hck(d,e){var w,v,u,t=d.gD6()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9b(d.fx,e)&&d.fy>0.0001)return A.h.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjC(w))return 0
v=B.c1(e.gcl(),e.gci(),e.gcz(),12,0,0,0,0)
if(!e.d5(v))return t
if(!e.cb(w))return 0
u=A.o.aq(v.bB(w).a,1000)
if(u<=0)return t
return A.h.D(t*(A.o.D(A.o.aq(e.bB(w).a,1000),0,u)/u),0,t)},
hcj(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9b(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aU(e,new C.cjx(s))&&C.cjC(t)){r=d.gD6()
v=r>0
if(v){q=new B.d8(s,d.a,r,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,p)
C.cjy(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9b(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9b(o,p)&&!C.cjC(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjx:function cjx(d){this.a=d},
if7(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iwo(d,e,f,g,h,i){return B.hE(d,new C.asI(f,e,i,g,h,null),!0,null,x.H)},
hym(d){var w,v,u=d.c?d.bU():d,t=B.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bM(u)+"/"+B.bY(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fV(u)),2,"0")+" "+v},
hGd(d){var w=d.x
if(w===A.dG)return"Processing"
if(w===A.kJ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
inq(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fT)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
ieM(d){var w=d.d,v=w===A.fT||w===A.pa||w===A.h8||w===A.kK,u=d.x
if(u===A.dG)return w===A.f4?-d.c:0
if(u!==A.cv)return 0
w=d.c
return v?w:-w},
inZ(d,e){var w,v,u,t,s,r,q=B.C(d,x.o)
A.d.b0(q,new C.fOr())
w=B.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.ieM(s)
if(r<0)r=0
w.n(0,s.a,new B.brw(v,r))}return w},
asI:function asI(d,e,f,g,h,i){var _=this
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
eqE:function eqE(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d){this.a=d},
erm:function erm(d){this.a=d},
er2:function er2(d,e){this.a=d
this.b=e},
er3:function er3(){},
er4:function er4(d){this.a=d},
er5:function er5(){},
er6:function er6(d){this.a=d},
er7:function er7(d,e,f){this.a=d
this.b=e
this.c=f},
er8:function er8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(){},
er_:function er_(){},
er0:function er0(d){this.a=d},
er1:function er1(){},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqS:function eqS(){},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqT:function eqT(d){this.a=d},
eqU:function eqU(d,e,f){this.a=d
this.b=e
this.c=f},
eqV:function eqV(d){this.a=d},
eqX:function eqX(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d,e,f){this.a=d
this.b=e
this.c=f},
erc:function erc(){},
erd:function erd(){},
erh:function erh(d){this.a=d},
era:function era(d){this.a=d},
eri:function eri(d){this.a=d},
er9:function er9(d){this.a=d},
erj:function erj(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(d){this.a=d},
erg:function erg(d){this.a=d},
erb:function erb(d){this.a=d},
eqI:function eqI(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqG:function eqG(d){this.a=d},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e){this.a=d
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
dtY:function dtY(){},
dtZ:function dtZ(){},
du_:function du_(d,e,f){this.a=d
this.b=e
this.c=f},
dtX:function dtX(d){this.a=d},
du0:function du0(d,e){this.a=d
this.b=e},
dtW:function dtW(d){this.a=d},
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
_.b9$=e
_.c=_.a=null},
dtR:function dtR(d){this.a=d},
dtS:function dtS(d){this.a=d},
dtT:function dtT(d){this.a=d},
dtU:function dtU(){},
dtV:function dtV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dtQ:function dtQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dtP:function dtP(d){this.a=d},
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
duh:function duh(){},
dui:function dui(){},
duj:function duj(){},
du3:function du3(d){this.a=d},
du2:function du2(d,e){this.a=d
this.b=e},
du1:function du1(d,e){this.a=d
this.b=e},
due:function due(d,e){this.a=d
this.b=e},
dug:function dug(d,e){this.a=d
this.b=e},
duf:function duf(d,e){this.a=d
this.b=e},
dud:function dud(){},
duc:function duc(d){this.a=d},
dub:function dub(){},
du6:function du6(d){this.a=d},
du7:function du7(){},
du8:function du8(d){this.a=d},
du9:function du9(d){this.a=d},
du5:function du5(){},
dua:function dua(d){this.a=d},
du4:function du4(d){this.a=d},
bdH:function bdH(d){this.a=d},
fOr:function fOr(){},
byR:function byR(d,e){this.b=d
this.a=e},
aNw:function aNw(){},
bAQ:function bAQ(){},
ik2(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fG8(v,g))
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
aRJ(d){var w,v=J.a8(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.h.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.h.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
iv2(d,e){var w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fZC(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiJ(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRJ(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
imJ(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRJ(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRJ(d)>0},
imI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.h.M(h)
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
ik1(d,e){var w
C.aiJ(e)
w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fG7(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uy(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
igx(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hiC(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.igx(x.f.b(u)?B.a1(u,r,q):B.T(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bG7(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bG7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bG7)
case 7:r=e
q=B.aV(J.t(r.a,"all_users"))
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
i=J.t(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.t(n,"username")
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
return B.i($async$bG7,v)},
bF9(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bF9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bG7(),$async$bF9)
case 3:u=t.hiC(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF9,v)},
LX(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$LX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hDm.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bB(p)
t=t.a>B.dx(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hDm.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S3(A.cf,q),$async$LX)
case 5:case 4:s=$.hDl.h(0,q)
if(s==null){u=C.uy(e,q)
w=1
break}r=C.uy(B.bFg(e,B.a([s],x._)),q)
if(r!=null)B.hlk(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$LX,v)},
ivh(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
id2(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.J(["ttt",B.c0(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e4(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c0(7,0,!1,q)
return B.J(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e4(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.iA(8,new C.fue(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ik0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.id2(u,f)
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
ivf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
hlj(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fY2(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fY2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiJ(d)
t=$.hhR
if(t==null)s=$.hhR=B.S3(A.cf,null).fv(new C.fY3())
else s=t
w=3
return B.b(s,$async$fY2)
case 3:r=f
if(r==null){u=B.br(new B.N(d,new C.fY4(),B.U(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFg(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fY2,v)},
aiK(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiJ(d)
t=B.U(d).k("N<1,aa<q,@>>")
t=B.C(new B.N(d,new C.fVP(),t),t.k("ak.E"))
w=3
return B.b(B.S3(t,null),$async$aiK)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFg(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiK,v)},
aSH(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hlj(d,e,f)
t=C.uy(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S3(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSH)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uy(s,e)
if(r!=null)B.hlk(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSH,v)},
irR(d,e,f){var w
C.hlj(d,e,f)
w=$.hhF.h(0,e)
if(w!=null)w.a1(0)
$.hhF.n(0,e,B.cz(A.lM,new C.fVQ(e,d)))},
hc1(d,e){return new C.b2b(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fG8:function fG8(d,e){this.a=d
this.b=e},
fZC:function fZC(d){this.a=d},
fG7:function fG7(d){this.a=d},
fue:function fue(d){this.a=d},
fY3:function fY3(){},
fY4:function fY4(){},
fVP:function fVP(){},
fVQ:function fVQ(d,e){this.a=d
this.b=e},
b2b:function b2b(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
ivL(d,e,f){return B.bU(A.L,null,new C.h_O(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h_O:function h_O(d,e){this.a=d
this.b=e},
a0Y:function a0Y(d,e,f){this.c=d
this.d=e
this.a=f},
aGh:function aGh(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
elk:function elk(d){this.a=d},
eln:function eln(d){this.a=d},
elo:function elo(d){this.a=d},
elm:function elm(d){this.a=d},
elp:function elp(d){this.a=d},
elq:function elq(d,e){this.a=d
this.b=e},
ell:function ell(d,e){this.a=d
this.b=e},
iqg(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iY
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iY
v=Date.now()
u=C.ifQ(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kI("calendar",B.J(["title",C.ifP(t,w),"start",u.ag(),"end",u.bS(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ifP(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hEb(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hEb(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hEb(d){var w
if(d.length===0)return d
w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fF6(),B.U(w).k("N<1,q>")).aN(0," ")},
ifQ(d,e){var w,v,u,t,s,r,q,p,o=B.c1(B.bD(e),B.bM(e),B.bY(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bS(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKt.gdQ(D.aKt),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cR(d,u,0)){t=C.ieL(o,v.b)
o=t
break}}s=B.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
if(s!=null){w=s.b
v=w[1]
r=B.cc(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.cc(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.c1(B.bD(o),B.bM(o),B.bY(o),r,q,0,0,0)},
ieL(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mq(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fF6:function fF6(){},
iqh(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
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
q=C.ibR(w,j)
if(q==null||q.length===0)return A.iY
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
return B.a([new B.kI("call",B.J(["name",q],t,t))],x.Z)}return A.iY},
ibR(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.ijf(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
ijf(d){var w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fF5(),B.U(w).k("N<1,q>")).aN(0," ")},
fF5:function fF5(){},
hIC(d){var w=new B.N(d,new C.fYk(),B.U(d).k("N<1,aa<q,@>>")).c_(0,new C.fYl())
w=B.C(w,w.$ti.k("M.E"))
return w},
fYk:function fYk(){},
fYl:function fYl(){},
iqk(d,e){var w,v,u,t,s,r,q,p,o
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
t=B.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kI("send_email",t)],x.Z)},
ipp(d,e){var w
if(e)return d
w=J.dH(d,new C.fRQ())
w=B.C(w,w.$ti.k("M.E"))
return w},
fRQ:function fRQ(){},
irO(d){switch(d){case"blackjack_vegas":return D.e3A
case"roulette_euro":return D.e3k
case"slots_jackpot":return D.e3r
case"poker_texas":return D.e3u
case"chess_royale":return D.e3l
case"connect_four_pro":return D.e3m
case"domino_block":return D.e3o
case"plinko_prizes":return D.e3w
case"spin_wheel":return D.e3t
case"baccarat_punto":return D.e3n
case"craps_table":return D.e3v
case"casino_war":return D.e3p
case"bingo_live":return D.e3s
case"solitaire_klondike":return D.e3z
case"backgammon_pro":return D.e3j
case"billiards_snooker":return D.e3x
case"profit_solve":return D.e3y
default:return D.e3q}},
fVG(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.l(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ac(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.X(A.nM,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbj,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.l(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ac(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bJO,B.d(D.cK_[t-1]+"\n"+r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b4,B.as(B.d(r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b4],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.n(A.hN,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
it_(d,e){var w,v=null,u=B.l(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ac(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.U(e).k("N<1,h8>")
r=B.C(new B.N(e,new C.fXM(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fRk,A.af,B.A(r,A.l,v,A.b9,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cbD,A.n),v,v,v,v,H.ant,v,v,v),A.aB,B.de(A.atC,v,D.fRY,d,B.bp(A.aQ,v,v,v,A.dA,v,A.a1F,v,v,v,v,v))],w),A.l,v,A.e,A.i,0,A.p)},
pB:function pB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btF:function btF(d,e){this.b=d
this.a=e},
fXM:function fXM(){},
i0A(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c0(8,0,!1,w)
u=B.c0(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c0(7,0,!1,w)
return new C.at8(B.T(p,x.z),n,u,s,r,t,q,new B.at(A.aw,$.aw()))},
ikB(d,e,f,g,h){var w=new C.fHU(f,h)
switch(d){case"checkers_deluxe":return C.iar(h,g,e,w)
case"tic_tac_go":return C.ijt(h,g,e,w)
case"blackjack_vegas":return C.i9K(h,g,e,new C.fHO(w))
case"roulette_euro":return C.ihJ(h,g,e,new C.fHP(w))
case"slots_jackpot":return C.iiy(h,g,e,new C.fHQ(w))
case"billiards_snooker":return C.igA(h,g,e,new C.fHR(w))
case"connect_four_pro":return C.iaO(h,g,e,w)
case"profit_solve":return C.igD(h,g,e,new C.fHS(w))
default:return C.ian(d,h,g,e,new C.fHT(w))}},
iar(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=B.l(12),t=B.K(D.a_1,A.r,8),s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bv(B.l(6),B.iz(!0,w,w,A.y,D.fpO,new C.fri(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
ijt(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),w),B.E(B.as(new B.fG(1,B.ck(new C.fFr(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
i9K(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xH,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fqA(),B.U(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fVG(q[0],!1),A.bn,C.fVG(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4N(d.ay),v,v,v,v,v,v,D.fMc,v,v,v)
q=d.ay
w=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.fqB(),w),w.k("ak.E"))
q=B.c_(A.fU,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eP,u,v),D.fYv,A.am,s,A.aB,D.h5e,r,A.am,q,A.b4,B.A(B.a([B.E(B.bJ(D.fSr,v,d.CW?v:new C.fqC(d,e,f,g),v),1),A.ae,B.E(B.bJ(D.h7J,v,new C.fqD(d,e,f,g),v),1)],t),A.l,v,A.e,A.i,0,v,v)],t),A.l,v,A.e,A.i,0,A.p)},
ihJ(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=d.cx,t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eP,v,w),B.o(w,B.b5(w,w,w,new C.btF(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fz9,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fU,B.iA(6,new C.fCl(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
iiy(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=d.db,t=B.U(u).k("N<1,q>")
u=B.C(new B.N(u,new C.fEi(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eP,v,w),C.it_(new C.fEj(d,e,f,g),u)],x.p),A.l,w,A.e,A.i,0,A.p)},
igA(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),u=B.l(20),t=B.K(A.iL,A.r,12),s=x.V,r=B.a([new B.ac(0,A.G,A.w.j(0.45),A.dp,18)],s),q=x.p
return B.x(B.a([new B.D(A.eP,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8y,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.afQ,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.l(2),B.a([new B.ac(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eG7,A.n),w,w,w,A.f6,w,w,w,w),1),B.l0(A.bi,w,w,1,0,new C.fBa(d,f),d.dy),B.bJ(D.fXw,w,new C.fBb(d,e,g,f),w)],q),A.l,w,A.e,A.i,0,A.p)},
iaO(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xH,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.bd,B.ay(v,B.x(B.iA(6,new C.frK(d,w),!0,t),A.l,v,A.mu,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.frL(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eP,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dO,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
igD(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eP,B.d(d.c,w,w,w,w,w,w,D.xH,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iH,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aXX,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c6X,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fBm(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fW3,w,new C.fBn(d,e,g,f),w)],x.p),A.l,w,A.e,A.i,0,A.p)},
ian(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkt(),k=e.d
k=k==null?n:k.c
w=C.irO(d)
v=D.aKi.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.kI,A.K,n,n)
u=B.l(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ac(0,A.G,w.c.j(0.35),A.eS,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,Z.L8,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.mD,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.m(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.db,B.X(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aY,A.b3,A.x,t,n,n),A.n),n,n,n,A.f6,A.ac,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h6P,n,new C.fr5(f,e,g,h),B.bp(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.co,n,n,n,n,n)),n)],k),A.l,n,A.e,A.i,0,A.p)},
Ft:function Ft(d,e){this.a=d
this.b=e},
at8:function at8(d,e,f,g,h,i,j,k){var _=this
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
cld:function cld(){},
cle:function cle(){},
clc:function clc(){},
clf:function clf(){},
clb:function clb(){},
clh:function clh(){},
cli:function cli(){},
cla:function cla(d){this.a=d},
clg:function clg(){},
cl9:function cl9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHU:function fHU(d,e){this.a=d
this.b=e},
fHO:function fHO(d){this.a=d},
fHP:function fHP(d){this.a=d},
fHQ:function fHQ(d){this.a=d},
fHR:function fHR(d){this.a=d},
fHS:function fHS(d){this.a=d},
fHT:function fHT(d){this.a=d},
fri:function fri(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frh:function frh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFr:function fFr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFq:function fFq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFp:function fFp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqA:function fqA(){},
fqB:function fqB(){},
fqC:function fqC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqD:function fqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCl:function fCl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCk:function fCk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEi:function fEi(){},
fEj:function fEj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBa:function fBa(d,e){this.a=d
this.b=e},
fBb:function fBb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frL:function frL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frK:function frK(d,e){this.a=d
this.b=e},
fBm:function fBm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBn:function fBn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fr5:function fr5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ins(d){var w,v=B.U(d).k("Y<1>")
v=B.pN(new B.Y(d,new C.fNu(),v),120,v.k("M.E"))
w=B.cF(v,new C.fNv(),B.a3(v).k("M.E"),x.N).aN(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fNu:function fNu(){},
fNv:function fNv(){},
aiW(d,e){var w,v,u,t
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
eST:function eST(){},
aP0:function aP0(){},
hZy(){var w=$.Jv
if(w<=0)return;--w
$.Jv=w
if(w===0){w=$.htj
if(w!=null)w.$0()}},
cgu(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arI(d){var w=0,v=B.j(x.H),u,t
var $async$arI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hbX.I(0,t)
w=4
return B.b(B.az(),$async$arI)
case 4:w=3
return B.b(f.aC("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arI)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arI,v)},
arH(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgu(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hbX.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arH)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arH,v)},
WR(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$WR)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_helper_ai_usage_v1"))
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
return B.i($async$WR,v)},
b2s(d){return C.hZL(d)},
hZL(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2s=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2s)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_ai_usage_v1",A.W.av(d,null)),$async$b2s)
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
return B.i($async$b2s,v)},
b2q(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afu(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bj(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afu(typeof v=="number"?A.o.D(A.h.M(v),0,999999):0,t)},
b2r(d,e){if(A.o.aq(e.bB(d.b).a,36e8)>=24)return new B.afu(0,e)
return d},
ch4(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$ch4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WR(),$async$ch4)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2r(C.b2q(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch4,v)},
ch5(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$ch5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WR(),$async$ch5)
case 3:t=g
s=Date.now()
r=C.b2r(C.b2q(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch5,v)},
hZM(d){var w,v,u,t=d.a,s=A.o.aq(t,1e6)
if(s<=0)return"0s"
w=A.o.aq(t,36e8)
v=A.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2t(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WR(),$async$b2t)
case 3:t=p.b2r(o.b2q(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2t)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2t,v)},
as1(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WR(),$async$as1)
case 3:t=s.b2r(r.b2q(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$as1)
case 5:w=4
return B.b(f.aC("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$as1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$as1,v)},
as2(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$as2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WR(),$async$as2)
case 3:s=g
r=Date.now()
q=C.b2r(C.b2q(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aK(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2s(s),$async$as2)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as2,v)},
aiw(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiw=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hIu(a0))if(!C.hIt(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hIu(a0)?3:4
break
case 3:o=C.irt(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c92(e,o),$async$aiw)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hrM(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWG()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MS("text/plain"),$async$aiw)
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
case 13:case 9:w=C.hIt(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8P(e),$async$aiw)
case 17:m=f.htu(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VT(e),$async$aiw)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hrN(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiw,v)},
i08(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cjH(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cjH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.huc(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$cjH)
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
q=B.ab(m)
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
return B.i($async$cjH,v)},
asL(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asL)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cD(0,A.cH.aK(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIy(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.ab(j)
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
return B.i($async$asL,v)},
b3x(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i08(q)?3:4
break
case 3:w=5
return B.b(C.cjH(q),$async$b3x)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asL(t)
w=1
break
case 4:if(A.a.Y(q,"NGMYLOCALSYNC1|")){u=C.asL(A.a.i(A.a.b_(q,15)))
w=1
break}w=A.a.Y(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asL(A.a.i(A.a.b_(q,15))),$async$b3x)
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
return B.i($async$b3x,v)},
hus(d){var w=d.bL
if(w>=0)return w
return 1},
aiI(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSS(d,e),$async$aiI)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HB(d,null,null,!1,!0,""),$async$aiI)
case 5:w=4
return B.b(t.$1(h),$async$aiI)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiI,v)},
iqf(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iY
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.iY
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.ifO(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hCY(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.aq(v,e)<=180)q.b="Reminder \u2014 "+A.o.aq(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hCZ(v[2],v[4],v[3])
o=v[3]
m=B.cc(o==null?"":o,null)
if(m==null)m=0
l=B.c1(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bS(a0)
r.b=B.c1(B.bD(l),B.bM(l),B.bY(l),n,m,0,0,0).bS(-36e8)
if(r.bm().d5(s.bS(e)))r.b=J.c4(r.bm(),A.ox)
v=C.ijZ(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c1(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bS(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hCZ(o[1],o[3],o[2])
o=o[2]
g=B.cc(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c1(B.bD(l),B.bM(l),B.bY(l),h,g,0,0,0)
r.b=f.d5(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hCY(a1,w)}}v=x.N
return B.a([new B.kI("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ifO(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.cc(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.Y(r,"sec"))return new B.bf(1e6*A.o.D(s,5,86400))
if(A.a.Y(r,"hour")||A.a.Y(r,"hr"))return new B.bf(36e8*A.o.D(s,1,168))
return new B.bf(6e7*A.o.D(s,1,10080))}return null},
ijZ(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hCZ(d,e,f){var w,v=B.cc(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hCY(d,e){var w,v,u,t
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
i0t(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kq(d,80),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,V,H,M,I,W,N,E,X,Y,O,Z,A_,P,A0,A1,Q,A2,R,S,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
K=c[78]
T=c[70]
F=c[119]
L=c[103]
U=c[71]
C=a.updateHolder(c[4],C)
D=c[108]
G=c[25]
V=c[42]
H=c[111]
M=c[69]
I=c[61]
W=c[118]
N=c[26]
E=c[110]
X=c[89]
Y=c[87]
O=c[75]
Z=c[88]
A_=c[114]
P=c[109]
A0=c[117]
A1=c[115]
Q=c[50]
A2=c[51]
R=c[94]
S=c[46]
A3=c[116]
A4=c[113]
A5=c[112]
C.buU.prototype={
pb(d,e){return this.a.$2(d,e)}}
C.G5.prototype={
S(){return new C.aKD(this.$ti.k("aKD<G5.T,G5.S>"))}}
C.aKD.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hw(A.GZ,v,null,null,w.$ti.k("hw<1>"))
u.e=w
u.Xf()},
bz(d){var w,v=this
v.bK(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQv()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.GZ,w.b,w.c,w.d,w.$ti)}v.Xf()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.my(d,w)},
t(){this.aQv()
this.a2()},
Xf(){var w,v=this
v.d=v.a.c.lP(new C.feJ(v),new C.feK(v),new C.feL(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.a09,w.b,w.c,w.d,w.$ti)},
aQv(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axX.prototype={
my(d,e){return this.e.$2(d,e)}}
C.an3.prototype={
S(){return C.i7c()},
bv(){return this.r.$0()}}
C.rd.prototype={}
C.aCK.prototype={
aeu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hsS(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hsU(s),$async$aeu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeu,v)},
YI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asJ(t.a.c),$async$YI)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cgu(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arH(t.a.c),$async$YI)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dlZ(t,s))
if(!s)t.aeu()
case 1:return B.h(u,v)}})
return B.i($async$YI,v)},
ae4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bG7(),$async$ae4)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dm9(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
Z(){var w,v,u=this
u.byX()
$.tT=$.tT+1
w=u.a
$.bGc=w.c.a
w=w.d.bd
v=B.U(w).k("N<1,aa<q,@>>")
w=B.C(new B.N(w,new C.dmr(),v),v.k("ak.E"))
u.f=w
u.ae4()
u.Ks()
u.YI()
u.e=B.dh(A.ov,new C.dms(u))},
Ks(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ks=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiJ(t.a.d.bd)
w=3
return B.b(C.fY2(t.a.d.bd),$async$Ks)
case 3:s=e
if(t.c==null){w=1
break}C.aiJ(t.a.d.bd)
if(s!=null)t.m(new C.dmh(t,s))
else t.m(new C.dmi(t))
case 1:return B.h(u,v)}})
return B.i($async$Ks,v)},
t(){C.b2d()
var w=this.e
if(w!=null)w.a1(0)
this.byW()},
ajn(d,e,f){return this.cz5(d,e,f)},
cz5(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajn=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ik2(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aiK(t.a.d.bd),$async$ajn)
case 3:if(t.c==null){w=1
break}t.m(new C.dmk(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajn,v)},
Je(d,e){return this.ck2(d,e)},
c6S(d){return this.Je(d,null)},
ck2(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Je=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uy(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRJ(s)<=0){t.c.K(x.q).f.T(D.aVy)
w=1
break}}w=5
return B.b(C.arH(t.a.c),$async$Je)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hbY(r,C.fS0(q.c),p),$async$Je)
case 6:w=1
break
case 4:o=new C.dmc(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hE(r,new C.aFB(p,q.d,q.f,q.r,new C.dmd(o),q.w,C.fS0(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hE(q,new C.an2(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dme(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Je,v)},
c42(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiJ(i.a.d.bd)
C.aiJ(i.f)
w=C.iv2(i.a.c.a,i.f)
v=C.ik1(i.a.c.a,i.f)
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
return B.o(h,B.x(B.a([D.h0Q,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.p7,h,h,h),A.P,B.A(B.a([B.E(B.dV(A.Lq,new C.dm4(i,t),h),1),A.ae,B.E(B.bJ(D.had,h,new C.dm5(i,t),h),1)],n),A.l,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dM(i.y,new C.dm6(m),new C.dm7(i))
k=C.hiC(m,i.a.c.a,i.r)
j=C.aRJ(m)
u=B.l(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fTC,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.p7,h,h,h),A.ax,B.d(C.imI(m,i.a.c.a),h,h,h,h,h,h,A.We,h,h,h),A.P,B.bJ(D.h06,h,new C.dm8(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)},
bVI(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.flj.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EF(w[v])
t=A.h.D(u.d*0.58,0.12,0.3)
l.push(new B.rA(u.a,u.b,A.h.D(u.c*0.92,0,0.9),t).je())}s=A.d.gH(w)
w=B.l(16)
t=B.l(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i3,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.i,0,n,n),A.ax,B.d(d.c,n,2,A.a2,n,n,n,A.pY,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c4q,n,n,n,new C.dm0(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a0Y,B.o(n,D.c2o,A.f,n,n,new B.n(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.h.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ac(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.n),n,92,n,A.el,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dm1(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nz:A.qr,k=m?A.iJ.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iJ:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.ci
if(!o.x)return C.aSh(n,l,B.as(B.n0(n,m?A.c:A.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fS0(o.a.c)
return new C.Oz(o.a.w,w,!0,o.gaVz(),n)}w=B.aE(d,A.dD,x.w).w
v=B.l(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ac(0,A.G,A.w.j(0.04),A.cM,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.m(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wk(new C.dmo(o,f,g),n,$.aTN(),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.n),n,n,n,n,A.a1a,n,n,1/0),A.T,o.c42()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbVH(),B.U(v).k("N<1,v>")))
w=B.ca(B.x(s,A.l,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.l(35)
v=B.a([new B.ac(0,A.G,A.w.j(m?0.28:0.08),A.i3,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aH(n,n,n,n,B.X(A.eK,j,n,n,n,18),n,n,n,o.gaVz(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.m(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.l(20)
return B.oS(!0,C.aSh(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OB,B.o(n,B.A(B.a([t,q,new B.D(A.iS,B.o(n,B.A(B.a([D.c_u,A.e7,C.asy(new C.dmp(o),A.kI,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.n),n,n,n,n,A.ho,n,n,n),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.n),n,60,n,n,A.n2,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dmq(o),x.K)},
aVA(){var w,v
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
aJP(){return this.r.$0()}}
C.bmG.prototype={
Z(){this.bzY()
this.d=B.Wh(this.a.d.bg)
$.tT=$.tT+1},
t(){C.b2d()
this.bzX()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ar6(v,new C.e_y(w),u,new C.e_z(w),new C.e_A(w,d),new C.e_B(w),null)}}
C.an2.prototype={
S(){return new C.aCJ(new B.at(A.aw,$.aw()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJP(){return this.z.$0()}}
C.aCJ.prototype={
Z(){this.byV()
this.a.toString
$.tT=$.tT+1},
t(){C.b2d()
var w=this.d
w.V$=$.aw()
w.R$=0
this.byU()},
a3A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OJ()
w=5
return B.b(C.arH(t.a.c),$async$a3A)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hbY(s,C.fS0(r.c),q),$async$a3A)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uy(s.d.bd,A.a.i(r))
if(p!=null&&C.aRJ(p)<=0){t.c.K(x.q).f.T(D.aVy)
w=1
break}}o=B.cW(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.T(D.fsY)
w=1
break}m=B.M6(t.a.c.a,new C.dlT(t))
if(m+0.001<n){t.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJP()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d8(r,q.c.a,n,A.kr,A.fx,"Game bet: "+q.f,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.fl5.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hE(s,new C.apX(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hE(s,new C.an4(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3A,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.In,o,o,o,new C.dlW(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.l(12),h=x.p
j=B.eR(B.a([B.o(o,B.as(C.asy(new C.dlX(p),A.iH,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.n),o,o,o,D.bDX,A.f3,o,o,o)],h),o,o,!0,!0,D.a05,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.l(16)
i=B.K(A.aT,A.r,1)
k=B.X(D.bRd,D.bxB,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mD,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.p7,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.l(12)
s=x.a3
s=B.C(new B.N(B.a([2,5,10,25],x.t),new C.dlY(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.i,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.o(o,B.x(B.a([D.hbT,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.l(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lY,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.l(12)
r=B.K(B.a0(102,A.a84.l()>>>16&255,A.a84.l()>>>8&255,A.a84.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.l(10)
q=B.o(o,B.x(B.a([D.fSZ,B.d("+ $"+A.h.ad(n*0.46,2),o,o,o,o,o,o,D.fIG,o,o,o),B.d("(46% return on $"+A.h.ad(p.e,2)+" bet)",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.l(10)
u=B.o(o,B.x(B.a([D.h17,A.P,q,A.P,B.o(o,B.x(B.a([D.fNL,B.d("$"+A.h.ad(m,2),o,o,o,o,o,o,D.fxl,o,o,o),B.d("8 pairs \xd7 $"+A.h.ad(m,2)+" each",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(D.bsV,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fu(o,o,A.bi,o,o,o,o,o,o,A.c,o,A.hg,o,o,o,o,o,o,o,o)
return C.aSh(j,D.a05,B.ca(B.o(o,B.x(B.a([k,A.ax,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iy(B.d("Start Game ($"+A.h.ad(p.e,2)+")",o,o,o,o,o,o,A.ce,o,o,o),p.gcD2(),r),o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.caE,A.n),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A.a1d,o,o,A.ah))}}
C.an4.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aCL(A.cT,new B.at(A.aw,$.aw()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aCL.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rW(d){return this.bTQ(d)},
bTQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AP()
r=t.Ps()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acu(d),$async$rW)
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
return B.b(t.Fc(q,s,r),$async$rW)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rW,v)},
FP(d,e,f,g){return this.cAL(d,e,f,g)},
cAL(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHd(s,C.bGV(),C.hkI(),d,e,f,g),$async$FP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FP,v)},
AP(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5W(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aiW(t,s.e.a.a)
case"memory":return s.ghR()&&D.nc.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAQ()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bg
case"color":return s.bd
case"reflex":return s.a0
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAQ(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Ps(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hiG()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bK(d)
if(u.f||u.c7)return
w=u.a
v=C.fS5(w.e,w.d.y2)
if(v!==C.fS5(d.e,d.d.y2)&&u.c!=null)u.m(new C.dnL(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.byZ()
w=i.a
w.toString
$.tT=$.tT+1
i.Q=C.fS5(w.e,w.d.y2)
i.b8N()
i.adP()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PR()
i.ads()
i.bn=B.dh(A.h1,new C.dnO(i))}if(A.d.q(D.SQ,i.a.e)){w=i.ghR()
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
m=s.b(t.h(u,h))?B.a1(s.a(t.h(u,h)),o,n):B.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.b2b(!1,w,k.length===0||A.a.q(k,"@")?C.hiC(u,v,null):k,p,l,s)}else{w=w.c
w=C.hc1(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.hc1(w.c,w.a)}v=C.i0A()
v.bsD(i.a.e,i.d,w)
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
w.bef(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.Uj
else j=w.f===!0?D.r4:D.JH
i.AR(j)}}}i.b2=B.dh(A.n1,new C.dnP(i))
if(i.ghR())i.bi=B.dh(A.n0,new C.dnQ(i))}if(i.ghR()&&!A.d.q(D.SQ,i.a.e))i.bi=B.dh(A.n0,new C.dnR(i))
i.as=B.dh(A.fM,new C.dnS(i))},
PR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uy(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bF9(p,t.a.c.a),$async$PR)
case 5:o=e
if(t.c!=null)t.m(new C.dn0(t,o))
w=1
break
case 4:w=6
return B.b(C.LX(q,t.a.d.bd,!1),$async$PR)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bF9(n,t.a.c.a),$async$PR)
case 7:o=e
if(t.c!=null)t.m(new C.dn1(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PR,v)},
akt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LX(r,s.d.bd,!1),$async$akt)
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
t.aQh(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.h.M(j)
else{h=j==null?null:J.k(j)
i=B.cc(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dnu(t))
if(i!=null&&t.fr.length!==0){s=B.C(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dnv())}case 1:return B.h(u,v)}})
return B.i($async$akt,v)},
ads(){var w=0,v=B.j(x.H),u=this
var $async$ads=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a1T(!0),$async$ads)
case 2:return B.h(null,v)}})
return B.i($async$ads,v)},
a1T(d){return this.cq_(d)},
cpZ(){return this.a1T(!1)},
cq_(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1T=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.LX(q,s.d.bd,b3),$async$a1T)
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
if(!new B.V(Date.now(),0,!1).d5(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.irR(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bI
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dng(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dnh(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d5(s)){s=s.bB(b1).a
r=A.o.aq(s,1e6)
t.m(new C.dni(b2,t,r+(A.o.F(A.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.m(new C.dnj(b2,t))
b2=t.a.e
if(b2==="pattern")t.aah()
else if(b2==="memory"){t.b8M()
if(t.c!=null)t.m(new C.dnk())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a1T,v)},
aRe(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRd(){return this.aRe(null)},
aah(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aah=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cns()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.LX(q,s.d.bd,!1),$async$aah)
case 5:r=t.b4H(e)
case 4:if(t.c==null){w=1
break}t.aRe(r)
t.m(new C.dmt(t))
t.Ep()
case 1:return B.h(u,v)}})
return B.i($async$aah,v)},
b4H(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.h.M(v)
u=v==null?t:J.k(v)
return B.cc(u==null?"":u,t)},
cns(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4H(C.uy(w.d.bd,v))},
adP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$adP)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dn_(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adP,v)},
pB(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pB)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHG().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aC("Int","ngmy_game_"+n+"_"+o,r),$async$pB)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pB,v)},
a3S(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.aZ==null||t.f||t.aY){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LX(r,s.d.bd,!1),$async$a3S)
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
s.bef(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Uj
else k=r.f===!0?D.r4:D.JH
w=7
return B.b(t.AR(k),$async$a3S)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dnw())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a3S,v)},
aik(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aik=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.aZ==null||q.a.Q==null||q.aY){w=1
break}q.aY=!0
t=3
o=q.aZ
o.toString
p=o.cTk(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSH(n,o,p),$async$aik)
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
return B.i($async$aik,v)},
AR(d){return this.c0b(d)},
c0b(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.K1(s,s),$async$AR)
case 9:w=4
break
case 6:w=10
return B.b(t.Z3(s,s),$async$AR)
case 10:w=4
break
case 7:w=11
return B.b(t.act(s,s),$async$AR)
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
a0S(d,e){return this.chM(d,e)},
chM(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a0S=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aik(),$async$a0S)
case 6:if(d===D.r3){w=1
break}w=4
break
case 5:if(d===D.r3){w=1
break}case 4:w=7
return B.b(t.AR(d),$async$a0S)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a0S,v)},
adI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adI=B.e(function(d,e){if(d===1)return B.f(e,v)
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
j=s.b(k)?B.a1(k,r,m):B.T(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aSH(t.a.d.bd,q,l),$async$adI)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
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
n=x.f.b(o)?B.a1(o,s,r):B.T(s,r)
n.n(0,"gameOver",!0)
C.hlj(t.a.d.bd,q,n)
C.ivf(t.a.d.bd,q)
w=3
return B.b(C.aiK(t.a.d.bd),$async$Iv)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iv,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adI()
else if(!v.f)v.c6T()
C.b2d();++v.RG
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
v.byY()},
cGm(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c7)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.uA("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dnF())},
b8N(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b8M()
break
case"scramble":r.bg=0
r.b8O()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzq[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.cg)
break
case"math":r.y2=0
r.b8L()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b8P()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csq()){w=J.e4(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RH()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRd()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Ep()}break
case"color":r.bd=0
r.b8G()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.ba1()
break
default:if(A.d.q(D.SQ,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5W(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csq(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b8P(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
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
b8L(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHG().length-6)u.at=0
w=$.bHG()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b8O(){var w=this,v=w.w=D.daa[A.o.F(w.at+w.bg,105)]
w.ax=C.ivw(v)
w.ay=B.c0(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.cg)},
ba1(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cz(B.dx(0,0,0,120+w.d.aw(280),0,0),new C.dnt(w))},
c0e(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rW("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.aq(new B.V(v,0,!1).bB(u).a,1000)}if(w<520){t.m(new C.dmY(t))
v=t.a0
if(v>=5){t.pB()
t.uA("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.ba1()
t.m(new C.dmZ())}}else t.rW("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cFA(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dnA())
if(u<0)return
t.m(new C.dnB(t,u,v,d))},
cFB(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dnC(u,d,v))},
bKD(){var w,v,u=this
if(u.f)return
if(A.d.aU(u.ay,new C.dmu())){u.c.K(x.q).f.T(D.fsS)
return}w=A.d.hg(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dmv(u))
if(u.ghR()&&D.nc.q(0,u.a.e))u.a27()
if(u.bg>=5){u.pB()
if(u.ghR()&&D.nc.q(0,u.a.e))u.nm(!0)
else u.uA("All 5 words unscrambled!")}else{u.b8O()
u.r="Word "+(u.bg+1)+" of 5 \u2014 place letters in order"
u.m(new C.dmw())}}else u.rW("Wrong word \u2014 paid for "+u.bg+"/5.")},
b8G(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dP,A.dL,A.im,A.tB][u]
w.w=t},
aQh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.i9(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cu),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.h.M(m):B.cc(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.h.M(m):B.cc(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.h.bh(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.t(j,g))
i=f==null?null:A.h.M(f)
if(i!=null)h.fx=i}},
b8M(){var w,v,u,t,s,r,q,p=this
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
u=C.uy(v,w)
t=u==null?null:J.t(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a1(t,w,v):B.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.h.M(r)
else{w=r==null?null:J.k(r)
q=B.cc(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e_()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQh(s)}else A.d.e0(p.fr,p.d)},
cpj(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dn9(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dna(t,v,u))
if(t.ghR()&&D.nc.q(0,t.a.e))t.a27()
if(t.go.a>=t.fr.length){t.pB()
if(t.ghR()&&D.nc.q(0,t.a.e))t.nm(!0)
else t.aAT()}return}t.k1=!0
B.bO(D.bCV,new C.dnb(t),x.c)},
b89(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dnl(u))
if(u.y1>=5){u.pB()
u.uA("All 5 questions correct!")}else{u.b8P()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dnm())}}else u.rW(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dnn(u))
if(u.y2>=6){u.pB()
u.uA("All 6 math questions correct!")}else{u.b8L()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dno())}}else{u.X0(u.y2+1)
u.rW(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dnp(u))
if(u.bd>=5){u.pB()
u.uA("All 5 color rounds correct!")}else{u.b8G()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dnq())}}else u.rW("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pB()
u.aAT()}else u.c.K(x.q).f.T(D.ftC)},
cFz(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cm(q.k4,0)
v=A.o.aq(d,3)
u=A.o.F(d,3)
t=A.o.aq(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dnz(q,d,w))
if(A.d.hg(q.k4)==="123456780"){q.pB()
q.aAT()}}},
RH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dnc(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnd(t,q).$0()
t.c.eq()
w=6
return B.b(B.bO(A.kV,null,r),$async$RH)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dne(t).$0()
t.c.eq()
w=7
return B.b(B.bO(A.k4,null,r),$async$RH)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dnf(t))
case 1:return B.h(u,v)}})
return B.i($async$RH,v)},
cFC(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rW("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dnD(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pB()
u.uA("Perfect Simon run!")
return}u.m(new C.dnE(u))
u.RH()}},
Ep(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ep=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dmx(t))
s=x.H
w=3
return B.b(B.bO(A.jq,null,s),$async$Ep)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dmy(t,o).$0()
t.c.eq()
w=7
return B.b(B.bO(A.a0P,null,s),$async$Ep)
case 7:if(t.c==null){w=1
break}new C.dmz(t).$0()
t.c.eq()
w=8
return B.b(B.bO(A.iQ,null,s),$async$Ep)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dmA(t))
case 1:return B.h(u,v)}})
return B.i($async$Ep,v)},
X0(d){return this.bFe(d)},
bFe(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X0)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHG().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aC("Int","ngmy_game_"+q+"_"+r,o),$async$X0)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X0,v)},
cFw(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rW("Wrong tile \u2014 paid for "+v.aAQ()+"/"+C.hiG()+" moves.")
return}v.m(new C.dnx(v,w))
if(v.ghR()&&D.nc.q(0,v.a.e))v.a27()
if(v.x1>=w)if(v.x2>=7){v.pB()
if(v.ghR()&&D.nc.q(0,v.a.e))v.nm(!0)
else v.uA("All 7 pattern rounds correct!")}else{v.m(new C.dny(v))
v.Ep()}},
K1(d,e){return this.cnI(d,e)},
uA(d){return this.K1(null,d)},
aAT(){return this.K1(null,null)},
cnI(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dn7(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d8(q,s.c.a,r,A.h8,A.fx,"Game payout: "+s.f,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.h.ad(r,2)+" added to your balance!":e
s=t.a
C.vc(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FP(d,o,"YOU WIN!",!0),$async$K1)
case 3:w=4
return B.b(C.aiy(t.a.f,o),$async$K1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K1,v)},
FN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nc.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.czP(),$async$FN)
case 5:w=1
break
case 4:s=t.AP()
r=t.Ps()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acu("Time's up \u2014 no progress to pay."),$async$FN)
case 8:w=1
break
case 7:q=A.h.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uA("Complete! Max payout earned."),$async$FN)
case 12:w=10
break
case 11:w=13
return B.b(t.Fc(q,s,r),$async$FN)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FN,v)},
RO(d){return this.cs4(d)},
a27(){return this.RO(!1)},
cs4(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RO=B.e(function(b2,b3){if(b2===1){s.push(b3)
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
return B.b(C.LX(q,r.a.d.bd,!1),$async$RO)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.t(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.a1(n,a3,a5):B.T(a3,a5)
l=J.t(m,"scores")
k=a2.b(l)?B.a1(l,a3,a5):B.T(a3,a5)
J.aK(k,p,r.AP())
J.aK(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
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
e=typeof f=="number"?A.h.M(f):B.cc(J.k(f),null)
if(e!=null)J.c4(h,e)}}a6=h
a6=B.C(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aK(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.T(a3,a5)
J.aK(a0,p,r.a.x)
J.aK(m,"wagers",a0)
w=11
return B.b(C.aSH(r.a.d.bd,q,m),$async$RO)
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
return B.i($async$RO,v)},
nm(d){return this.czQ(d)},
czP(){return this.nm(!1)},
czQ(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FN(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RO(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.LX(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.Ps()
w=o==null?8:9
break
case 8:m=A.h.D(t.AP()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acu("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uA("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Fc(m,t.AP(),n),$async$nm)
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
g=s.b(i)?B.a1(i,r,h):B.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.a1(f,r,h):B.T(r,h)
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
return B.b(t.acu("Time's up \u2014 no progress to pay."),$async$nm)
case 22:w=23
return B.b(t.Iv(),$async$nm)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aI((s.b(a3)?B.a1(a3,r,h):B.T(r,h)).h(0,j))
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
t.m(new C.dnr(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.h.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d8(h,b0,a9,A.h8,A.fx,d,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.h.ad(a9,2)+" (includes opponent bonus $"+A.h.ad(a7,2)+")":"+$"+A.h.ad(a8,2)+" (your progress payout)"
s=t.a
C.vc(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FP(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Iv(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fc(d,e,f){return this.cnG(d,e,f)},
cnG(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b2
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dn5(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d8(s,q.c.a,r,A.h8,A.fx,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.h.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aiW(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cB(t.cy,0,new C.dn6()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.h.ad(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.h.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vc(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FP(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fc)
case 3:w=4
return B.b(C.aiy(t.a.f,j),$async$Fc)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fc,v)},
c6T(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AP()
v=o.Ps()}catch(u){return}if(v<=0||w<=0)return
t=A.h.D(w/v,0,1)
s=B.or(A.h.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d8(q,p.c.a,s,A.h8,A.fx,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cv,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vc(s,n,"Left early \xb7 +$"+A.h.ad(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
act(d,e){return this.bVC(d,e)},
bVC(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$act=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.d8(r,q,p,A.h8,A.fx,"Game payout: "+s+" (draw, stake returned)",null,null,A.cv,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vc(o,null,"Draw. Your $"+A.h.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FP(d,"Nobody won, so your $"+A.h.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$act)
case 3:case 1:return B.h(u,v)}})
return B.i($async$act,v)},
Z3(d,e){return this.bVD(d,e)},
acu(d){return this.Z3(null,d)},
bVD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Z3=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.vc(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FP(d,e,"YOU LOSE",!1),$async$Z3)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Z3,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.aq(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.asZ,n,n,n,new C.dnG(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bI
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bI):t.f,n,2,A.a2,n,n,n,A.fF,n,n,n),1)
r=B.l(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asy(new C.dnH(o),A.o5,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.n),n,n,n,n,A.hn,n,n,n)],q),A.l,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.l(10)
s=B.o(n,B.A(B.a([B.E(B.d("Win $"+A.h.ad(t.x*1.46,2)+" \xb7 stake $"+A.h.ad(o.a.x,2)+" \u2022 Progress "+o.AP()+"/"+o.Ps(),n,n,n,n,n,n,D.fCU,n,n,n),1),new C.arJ(o.a.c.a,new C.dnI(o),n),A.ae,D.bVX,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o7,n,n,n)],q),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hm,n,n,n)
v=o.a.w
m=B.U(v).k("N<1,u>")
m=B.C(new B.N(v,new C.dnJ(),m),m.k("ak.E"))
w=B.l(14)
v=B.K(A.aT,A.r,1)
p=C.aSh(n,D.bgU,B.bm(!0,new B.D(A.Oy,B.x(B.a([r,s,A.P,new B.fh(new C.dnK(o),n),A.am,B.E(B.o(n,o.bVB(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cq,n,n,n),1)],q),A.al,n,A.e,A.i,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iN.l()>>>16&255,A.iN.l()>>>8&255,A.iN.l()&255)
v=B.l(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.ds(!1,B.o(n,B.x(B.a([D.foT,A.af,B.d(o.cT,n,n,n,n,n,n,D.fEs,A.K,n,n),A.am,B.d(o.bT,n,n,n,n,n,n,D.fCA,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.n),n,n,n,A.t9,A.z5,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c7S(){var w=this.k3
return B.ck(new C.dn4(this,w,A.h.cC(this.fr.length/w)))},
bVB(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c7S()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Words "+o.bg+"/5",n,n,n,n,n,n,A.Fj,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.m(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fU,B.iA(o.ay.length,new C.dmN(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fU,B.iA(o.ch.length,new C.dmO(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iy(D.h4O,o.gbKC(),B.fu(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.co,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.au4(m,o.e,new C.dmP(o),new C.dmQ(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fj,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(new B.dv(A.dC,A.z,A.f,B.d(w,n,n,n,n,n,n,A.mD,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dmR(o),B.U(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.ck(new C.dmS(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fj,n,n,n),A.P,B.E(B.l_(1,B.iA(4,new C.dmT(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.ck(new C.dmU(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dP,A.dL,A.im,A.tB]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pY,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fj,n,n,n)
v=o.aL
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.m(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fu(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fi,n,n,n,n,n,n,n)
r[q]=new B.D(A.cw,new B.a5(1/0,n,B.iy(B.d(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dmV(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bi:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.aci,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fzN,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.m(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aE(s,A.bX,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qq(B.ay(A.c_,B.cU(n,B.x(B.a([w,A.P,v,A.b4,s,A.b4,new B.D(A.Ha,B.d(m,n,n,n,n,n,n,B.m(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.i,0,A.p),p,n,A.b0,n,P.Cz,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0d(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SQ,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.ikB(m,new C.dmW(o),new C.dmX(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anS.prototype={
S(){return new C.bjK()},
cZ8(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjK.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aE(a3,A.dD,a0).w
a0=B.aE(a3,A.dD,a0).w
v=x.p
u=B.a([B.bUj(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bM(s)),2,"0")
q=A.a.b_(A.o.v(B.bD(s)+1),2)
p=B.l(18)
o=B.K(K.Cj,A.r,2.2)
n=x.V
m=B.a([new B.ac(0,A.G,B.a0(89,A.rE.l()>>>16&255,A.rE.l()>>>8&255,A.rE.l()&255),A.eS,20),new B.ac(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dp,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.l(10)
j=B.K(K.Cj,A.r,3.4)
n=B.a([new B.ac(0,A.G,B.a0(166,A.rE.l()>>>16&255,A.rE.l()>>>8&255,A.rE.l()&255),A.dM,10),new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dmc,D.cWw,d),A.n),d,42,d,d,d,d,d,56),A.b4,e.baW(a3,!0)],v),A.l,d,A.e,A.i,0,d,d)
k=B.Eg(t.a,1,A.a2,D.fHQ)
j=t.b
i=t.c
h=B.Eg("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fI4)
g=B.Eg(e.b5I(j),1,A.a2,D.fAE)
q=B.A(B.a([B.E(B.x(B.a([D.fYC,B.Eg(a1.c,1,A.a2,D.aXB)],v),A.E,d,A.e,A.i,0,A.p),1),B.x(B.a([D.fYn,B.d(r+"/"+q,d,d,d,d,d,d,D.aXB,d,d,d)],v),A.dO,d,A.e,A.i,0,A.p)],v),A.l,d,A.e,A.i,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yu.l()>>>16&255,D.yu.l()>>>8&255,D.yu.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atI("INVESTED","$"+B.dG(j),!0),e.atI("DAILY ROI",A.h.ad(i*100,2)+"%",!0),e.atI("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j_,A.i,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h4k,A.rf,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fX_,A.bF,k,A.ax,h,A.ax,g,A.P,q,A.am,r,A.am,i,A.ax,B.Eg("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHb)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cbv,A.n),d,d,d,d,A.bH,d,d,1/0),A.abD],v))}u.push(D.fOx)
u.push(A.rf)
A.d.u(u,new B.N(a2,new C.drk(e,a3),B.U(a2).k("N<1,v>")))
return B.c5(d,A.L,B.bm(!1,B.ca(B.x(u,A.E,d,A.e,A.i,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
baW(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(8),t=B.K(A.k0,A.r,1)
return B.o(w,B.A(B.a([B.X(A.a3w,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.eQ,w,w,w)},
b5I(d){var w=A.a.b1(A.o.v(A.h.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.b_(w,w.length-4)},
atI(d,e,f){var w=null,v=B.a0(217,D.yu.l()>>>16&255,D.yu.l()>>>8&255,D.yu.l()&255)
v=B.d(d,w,w,w,w,w,w,B.m(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Eg(e,w,w,B.m(w,w,A.Cg,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cpO(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd3_(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ac(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.UE,16),new B.ac(0,A.G,B.a0(115,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),A.dp,14),new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cM,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.l(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.h.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ac(0.5,A.G,k,A.J,14),new B.ac(0,A.G,j,A.J,6),new B.ac(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.ca4,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eFw],h),d),d),A.b4,e.baW(b2,!0)],h),A.l,d,A.e,A.i,0,d,d)
a6=B.Eg(a6,1,A.a2,D.fx2)
i=B.Eg(e.b5I(a3),1,A.a2,D.fML)
j=B.A(B.a([e.b58(A.h.ad(2.86,2)+"%"),A.e7,e.b58("261d")],h),A.l,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fPS,B.Eg("$"+B.dG(a3),1,A.a2,D.fLu)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.fxT,d,d,d)],h),A.dO,d,A.e,A.i,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.by.l()>>>16&255,A.by.l()>>>8&255,A.by.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aB7("Daily","$"+B.dG(a4)),1),A.e7,B.E(e.aB7("Total","$"+B.dG(a4*261)),1),A.e7,B.E(e.aB7("Days","261"),1)],h),A.l,d,A.e,A.i,0,d,d)
g=q?d:new C.drj(e,b3,a3,t)
f=A.h.U(127.5)
f=B.fu(d,d,A.bs,B.a0(f,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.l(10),D.b6K),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fZl,A.bF,a6,A.cS,i,A.fE,j,A.fE,m,A.fE,k,A.fE,l,A.P,new B.a5(1/0,40,B.iy(new B.dv(A.dJ,A.z,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fyp,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.cc6,A.n),d,d,d,A.kA,D.bEI,d,d,1/0)},
b58(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.d(d,w,w,w,w,w,w,D.fxr,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.z9,w,w,w)},
aB7(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(7),t=B.K(A.bm,A.r,1)
return B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fHx,w,w,w),A.rg,new B.dv(A.dC,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fKt,w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)}}
C.ajT.prototype={
S(){var w=null,v=B.a([],x._),u=$.aw()
return new C.azM(v,new B.at(A.aw,u),new B.at(A.aw,u),B.mR(0,w,w),new B.i5(),D.U8,C.aiv(),B.a([],x.fw),B.aR(x.N),B.mR(0,w,w))}}
C.azM.prototype={
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.Ae(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.br(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.adU()
r.PQ()
r.atj()
r.cCP()
r.cD4()
$.aU.x1$.push(new C.cO3(r))
r.a.toString},
PQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as7(),$async$PQ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cNo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PQ,v)},
gaCL(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPK())return!0
return!1},
gPK(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYz(){var w,v=this.CW
if(v==null)return A.bC
w=v.bB(new B.V(Date.now(),0,!1))
return w.a<0?A.bC:w},
bG1(){var w=this
if(w.a.c.w)return
if(w.gPK()){if(!w.cx)w.m(new C.cNe(w))}else if(w.cx)w.m(new C.cNf(w))},
cw3(){this.m(new C.cNy(this))},
uJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cNv(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cNw(t))
w=1
break}w=3
return B.b(C.ch4(o.a,s),$async$uJ)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.ch5(t.a.c.a,s),$async$uJ)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNx(t,r,q))
t.cEY()
t.bG1()
if(r===3)t.a_9(r)}case 1:return B.h(u,v)}})
return B.i($async$uJ,v)},
a_9(d){return this.c7K(d)},
c7K(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHh(q,r,new C.cNq(t),d,s.c.a),$async$a_9)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_9,v)},
yf(d){return this.bHy(d)},
atj(){return this.yf(!1)},
bHy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9s(k,C.hIC(l.d)),$async$yf)
case 3:j=m
w=4
return B.b(C.chw(k),$async$yf)
case 4:s=j.a=f
w=5
return B.b(B.at_(k),$async$yf)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WU(!0,l,q,p)
m.a=s
w=8
return B.b(C.as9(k,s),$async$yf)
case 8:case 7:w=9
return B.b(C.VT(k),$async$yf)
case 9:o=f
w=10
return B.b(C.a8P(k),$async$yf)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cNg(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yf,v)},
Ri(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ri=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PQ(),$async$Ri)
case 3:s=t.c
if(s==null){w=1
break}r=B.ee(new C.cNt(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).ce(r),$async$Ri)
case 4:w=5
return B.b(t.PQ(),$async$Ri)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ri,v)},
cHc(){this.m(new C.cNR(this))},
cD4(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dh(A.t4,new C.cNL(w))},
cEY(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPK()||w.CW==null)return
w.id=B.dh(A.fM,new C.cNO(w))},
cCP(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dh(A.jJ,new C.cNK(w))
w.FV()},
FV(){return this.cEX()},
cEX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$FV)
case 7:q=e
p=B.aV(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.W.aP(0,p,null)
if(x.f.b(o)){m=B.DY(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.M9(),$async$FV)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSg(),$async$FV)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aC("String","app_config",A.W.av(k.aj(),null)),$async$FV)
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
break}if(i.a!==r.ay)r.m(new C.cNM(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FV,v)},
b9E(){A.d.b0(this.f,new C.cNJ())},
adU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O_(t.a.c.a),$async$adU)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b0(s,new C.cNl())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cNm(t,s))
t.a33(!0)
B.bO(A.jq,new C.cNn(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
ahJ(){var w=0,v=B.j(x.H),u=this
var $async$ahJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apH(u.a.c.a,u.f),$async$ahJ)
case 2:return B.h(null,v)}})
return B.i($async$ahJ,v)},
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
acR(d){var w,v=this
v.m(new C.cNj(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BV(d,A.ck,A.kV)
else $.aU.x1$.push(new C.cNk(v,d))
if(d===0)v.a33(!0)
if(d===1)v.cy6(!0)},
a33(d){$.aU.x1$.push(new C.cNB(this,d))},
aCo(){return this.a33(!1)},
a2n(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2K(),$async$a2n)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cNu(t))
case 1:return B.h(u,v)}})
return B.i($async$a2n,v)},
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
return B.b(C.as2(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uJ(),$async$nl)
case 10:q.m(new C.cNC(q))
w=1
break
case 8:w=11
return B.b(q.uJ(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_9(3)
case 6:case 4:q.m(new C.cND(q,c5))
C.VF(q.a.c.a,"user",c5)
q.aCo()
t=13
a8={}
w=16
return B.b(q.a2n(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2K(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cNE(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFn("",null)
q.m(new C.cNF(q,p))
C.VF(q.a.c.a,"ai",p)
q.aCo()
r=[1]
w=14
break}o=B.nl(a9)
a9=q.a
n=""
m=C.hIC(a9.d)
w=C.hIv(c5)?20:21
break
case 20:w=22
return B.b(C.chv(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yf(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9s(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i0t(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bM(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bY(b3)),2,"0")
b5=A.a.b1(A.o.v(B.dg(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fV(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VT(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hrN(i,25)
w=26
return B.b(C.a8P(q.a.c.a),$async$nl)
case 26:g=c9
f=C.htu(g)
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
return B.b(C.aiw(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hIv(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.ins(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hVN(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.rj(o,a2,A.i1,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFn(a8.a,a3.a)
a4=c2
a5=B.hHM(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.C(C.iqf(c5),x.an)
a6=a9
J.h0(a6,C.iqg(c5))
J.h0(a6,C.iqh(c5))
J.h0(a6,B.hHc(c5))
J.h0(a6,C.iqk(c5,q.a.c.w))
a8.b=a6}c3=C.ipp(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiN(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cNG(a8,q,a7))
C.VF(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KI(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cNH(q))
C.VF(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cNI(q))
q.aCo()
q.ahJ()
if(!q.a.c.w)q.uJ()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
coJ(d){var w=B.T(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
coK(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.iY
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckE(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KI(d){return this.cwB(d)},
cwB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiI(p,o,new C.cNz(t,p)),$async$KI)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HB(p,null,o,!1,!0,t.a.c.a),$async$KI)
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
return B.b(B.HB(p,l.f,o,k,n,j),$async$KI)
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
return B.b(C.b0w(p,B.a([new C.rR("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KI)
case 14:t.atj()
case 13:p=t.c.K(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new B.b0(o,A.dn,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KI,v)},
T1(d){return this.cFq(d)},
cFq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiI(d,n,new C.cNQ(t)),$async$T1)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HB(d,null,n,!1,!0,t.a.c.a),$async$T1)
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
return B.b(B.HB(d,q.f,r,p,n,o),$async$T1)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T1,v)},
cy6(d){$.aU.x1$.push(new C.cNA(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cp,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.al6,D.bo5],w):B.a([A.aN,A.yp],w)
v=B.l(22)
u=B.a([new B.ac(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gcki():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hgM(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dl,l,l,l)
s=B.o(l,l,A.f,l,l,D.b8R,l,8,l,l,l,l,l,8)
if(m.gaCL()&&m.d===0)q=m.gPK()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bc,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.m(l,l,B.a0(A.h.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cD,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aH(l,l,l,l,A.nR,l,l,l,new C.cNW(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.n),l,l,l,E.an3,D.bFv,l,l,l)
v=k?D.uo:A.c
u=B.l(14)
t=B.K(k?A.bw:A.dY,A.r,1)
u=B.o(l,B.A(B.a([m.bKn(),m.cF9(1,A.lr,"Music")],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCL()){v=B.a([],p)
if(m.gPK()){s=B.a0(38,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255)
r=B.l(12)
q=B.K(B.a0(115,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255),A.r,1)
v.push(new B.D(A.Oz,B.o(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hZM(m.gaYz())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fJU,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPK()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.l(12)
q=B.l(12)
o=B.X(A.kb,k?A.iz:A.hL,l,l,l,16)
v.push(new B.D(A.Oz,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.m(l,l,k?A.iz:A.hL,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcw2(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHb():l
v.push(B.E(new C.as5(s,q,new C.cNX(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.i,0,A.p)}else v=m.bKo(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hus(r)
t=B.a([w,A.af,new B.D(A.hZ,u,l),A.P,B.E(B.hvp(B.a([v,new C.as8(q,o,n,new C.cNY(m,d),s,l)],p),A.t,t,A.y,new C.cNZ(m),l),1)],p)
if(m.d===0&&!m.gaCL()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6F:D.a5V
w.push(new B.a5(l,36,B.hV(l,new C.cO_(m),v.length,l,l,A.aM,new C.cO0(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.m(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.m(l,l,k?A.aE:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.l(22)
o=B.l(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CI,l,l,l,l,!0,new B.b6(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cO1(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWn,l,l),1)
s=m.at
r=s?l:m.gcz6()
w.push(B.A(B.a([u,new B.JR(v,A.aN,l),A.bn,B.aF(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyk:R.asR,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.ai)],p),A.dO,l,A.e,A.i,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lI:A.c
t.push(B.uz(A.ud,B.o(l,new B.D(A.CD,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.ud,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XK(i,new C.cO2(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKn(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.U(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.U(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(A.uZ,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.ay(q,B.cU(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNh(this),q,q,q,q,q,q,!1,A.a4),1)},
cF9(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.h.U(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.h.U(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.X(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bn,B.d(f,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cU(q,B.A(r,A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNP(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKo(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.buD:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.l(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.o(s,B.ku(!0,s,t.ok,new C.cNi(t,e,d),u,s,A.bT,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.n),s,s,s,A.hZ,s,s,s,s)},
aRR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iY:this.coK(d),k=m?A.mu:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hgM(this.a.f.Q,28),o),A.ae],j))
w=m?A.dO:A.E
j=B.a([],j)
if(h)j.push(D.eyB)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_L:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ac(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dM,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.m(o,o,e?A.aE:A.dZ,o,o,o,o,o,o,o,o,12,A.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.d(n,o,o,o,o,o,o,B.m(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hcv(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,U.wF,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hHR(l,e,this.gcFp()))
i.push(new B.df(1,A.cl,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dO,o,k,A.i,0,o,o),o)},
bKm(d,e){return this.aRR(d,e,!1)}}
C.aN8.prototype={
Z(){this.a3()
$.zd().aV(0,this.gF5())},
t(){$.zd().a6(0,this.gF5())
this.a2()}}
C.aN9.prototype={
Z(){this.a3()
$.zd().aV(0,this.gF5())},
t(){$.zd().a6(0,this.gF5())
this.a2()}}
C.aNa.prototype={
Z(){this.a3()
$.zd().aV(0,this.gF5())},
t(){$.zd().a6(0,this.gF5())
this.a2()}}
C.aO7.prototype={
Z(){this.a3()
$.zd().aV(0,this.gF5())},
t(){$.zd().a6(0,this.gF5())
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
v.e=B.br(w.e,!0,x.o)
v.f=v.a.f},
li(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B1(d,e){return this.cKV(d,e)},
cKV(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dHQ(q,e))
t=3
w=6
return B.b(d.$0(),$async$B1)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dHR(q))
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
return B.b(B.vg(r,q),$async$Bu)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Bu,v)},
abj(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$abj)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.OR(s,B.KW(B.c4y(r,q,s,p).f2(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
YN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pD(s,t.a.c,!1),$async$YN)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B1(new C.dHF(t),"Preparing download\u2026"),$async$YN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YN,v)},
a_l(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pD(s,t.a.c,!1),$async$a_l)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B1(new C.dHP(t),"Creating QR code\u2026"),$async$a_l)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_l,v)},
a_k(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iig(r),$async$a_k)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B1(new C.dHE(t,s),"Looking up code\u2026"),$async$a_k)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_k,v)},
aeN(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aeN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xP.cq().MW(A.T8,A.uU,!0),$async$aeN)
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
case 6:u=B.Hy()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeN,v)},
AF(d,e,f){return this.bMG(d,e,f)},
aTb(d,e){return this.AF(d,!1,e)},
bMF(d){return this.AF(d,!1,!1)},
bMG(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$AF)
case 3:if(t.c==null){w=1
break}if(!C.c4D(d,t.a.c,null)){t.li(C.c4E(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hVu(d,s)}if(s){t.li(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.iit(s,q,t.a.c,d),$async$AF)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m4(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rV(s,p,r,!1,null,null,d.ax),$async$AF)
case 5:if(t.c==null){w=1
break}t.m(new C.dHD(t,p,r,d))
t.li("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AF,v)},
aeM(){var w=0,v=B.j(x.H),u=this
var $async$aeM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B1(new C.dHG(u),"Reading file\u2026"),$async$aeM)
case 2:return B.h(null,v)}})
return B.i($async$aeM,v)},
Y4(d){return this.bO_(d)},
bO_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Y4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d8("local_qr_dep_"+1000*r,q.a,d,A.fT,A.fx,"Admin deposit ($"+B.dG(d)+")",null,null,A.cv,new B.V(Date.now(),0,!1))
C.cjy(t.d,s)
q=t.e
q===$&&B.c()
r=B.C(q,x.o)
r.push(s)
w=3
return B.b(B.rV(t.a.c,t.d,r,!0,null,null,null),$async$Y4)
case 3:w=4
return B.b(t.Bu(),$async$Y4)
case 4:if(t.c==null){w=1
break}t.li("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Y4,v)},
b91(d){var w=null
return B.cg(w,w,!0,w,new C.dHN(),d,w,!0,!0,x.N)},
X7(d){return this.bFW(d)},
bFW(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$X7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Y4(d.b),$async$X7)
case 5:w=1
break
case 4:s=d.c
t.li(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$X7,v)},
Fr(d){return this.ctF(d)},
ctF(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$Fr)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3q(d,t.a.c),$async$Fr)
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
return B.b(t.b91(r),$async$Fr)
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
return B.b(C.cjr(d,o,n.a,r,p),$async$Fr)
case 7:w=6
return B.b(t.X7(f),$async$Fr)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fr,v)},
Fs(d){return this.ctG(d)},
ctG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bu(),$async$Fs)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjq(d,t.a.c),$async$Fs)
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
return B.b(t.b91(r),$async$Fs)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Xc(o,n.a,d,r,p),$async$Fs)
case 7:w=6
return B.b(t.X7(f),$async$Fs)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fs,v)},
Q5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Q5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DE()){t.li("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).ce(B.ee(new C.dHI(),!0,null,x.N)),$async$Q5)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.Y(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B1(new C.dHJ(t,r),"Applying deposit\u2026"),$async$Q5)
case 6:w=1
break
case 5:w=7
return B.b(t.B1(new C.dHK(t,r),"Loading\u2026"),$async$Q5)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Q5,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nz:A.qr,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aE(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.X(A.eK,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dHS(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cD,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a20(D.bTk,"Download",A.a6U,u?o:p.gbTD(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a20(A.ju,"Show QR",D.dDa,u?o:p.gc9t(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a20(D.bTl,"Upload",A.a6g,u?o:p.gc9r(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a20(A.jv,"Scan QR",D.dar,u?o:p.gc9s(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc9q()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.l(16)
j=B.a([B.cv(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvq(A.to,"Enter Code",A.a5B,u,o),A.lb,B.o(o,B.A(B.a([B.X(A.hp,A.aV,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.n),o,o,o,o,A.jr,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iJ:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aF(!1,A.a3,!0,o,new B.D(A.CM,B.A(B.a([H.aVk,A.bc,B.E(B.d(w,o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.i,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a20.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u5,v,v,v)],x.p),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bT,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvq.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u5,v,v,v)],x.p),A.l,v,A.b9,A.i,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bHJ,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0E.prototype={
S(){return new C.bmb()}}
C.bmb.prototype={
gayU(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a3()
w.S_()
w.f=B.dh(A.ov,new C.dHW(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
S_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vg(q.e,q.f),$async$S_)
case 3:q=e.a
s=B.c4y(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OR(t.a.e,B.KW(s.f2(),null,"  ")),$async$S_)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dHT(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S_,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nz:A.qr,s=u?A.iJ:A.c,r=u?A.c:A.bq,q=B.eR(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYv,v,v,v,1,v,!0),p=B.l(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qi(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gayU(),v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.l(20),j=A.aV.j(0.12),i=B.l(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.X(A.fO,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.m(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.n),v,v,v,v,A.lO,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dHU(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ac,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.m(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bc,v,new C.dHV(d),B.bp(A.aV,v,v,v,v,A.hg,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a0F.prototype={
S(){return new C.bmc(B.zS(A.yO,A.oe,A.vn))}}
C.bmc.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4J,w,w,w,1,w,!0),A.w,B.zR(this.d,A.bY,new C.dHX(this,d)),w,!1,!1,w,w)}}
C.afX.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iJ:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dY,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.l(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ac(0,A.G,A.aV.j(0.16),A.kF,36)],x.V)
u=B.o(m,D.bZs,A.f,m,m,new B.n(m,m,m,B.l(18),A.a6T,D.c9n,A.n),m,58,m,m,m,m,m,58)
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
return B.eI(m,A.L,new B.cN(A.Yf,new B.bN(new B.n(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wK,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.m(m,m,l?A.bL:A.ia,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dV(A.o8,new C.f8e(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.co,m,new B.ba(B.l(14),A.a1),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fNN,m,new C.f8f(a0),B.bp(A.aV,m,m,m,m,m,A.co,m,new B.ba(B.l(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.i,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rg.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.m(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.a_M.prototype={
S(){return new C.aC2(new B.at(A.aw,$.aw()),B.kc(!0,null,!0,!0,null,null,!1))}}
C.aC2.prototype={
Z(){this.a3()
$.aU.x1$.push(new C.dgM(this))},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.e.t()
this.a2()},
c9v(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iJ:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nz:A.qr,p=u?A.aT:A.dY,o=B.l(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ac(0,A.G,A.aV.j(0.18),A.fQ,32)],x.V),l=B.o(v,A5.atA,A.f,v,v,new B.n(v,v,v,B.l(18),A.a6T,D.ccg,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.m(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uW(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.buU(new C.dgJ())],x.G),g=B.m(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cN(A.Mq,new B.bN(new B.n(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wK,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CL,v,v,"",v,!0,new B.b6(4,B.l(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.l(16),D.b6I),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dgK(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mB,v,v,v,v),A.e4,B.A(B.a([B.E(B.dV(A.o8,new C.dgL(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.co,v,new B.ba(B.l(14),A.a1),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fRD,v,w.gc9u(),B.bp(A.aV,v,v,v,v,v,A.co,v,new B.ba(B.l(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.i,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OQ,v,A.d7,v,v,v)}}
C.apX.prototype={
S(){return new C.bmj(A.cT)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bmj.prototype={
Z(){var w,v=this
v.a3()
w=v.a
w.toString
$.tT=$.tT+1
v.r=A.o.M(A.o.D(C.fS5(w.e,w.d.y2),1,600))
w=v.a
if(!J.lJ(w.d.y2,w.e))v.r=C.inV(v.a.e)
v.w=B.dh(A.fM,new C.dOj(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cnA()
C.b2d()
this.a2()},
cnA(){var w,v,u,t,s,r=this,q=null
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
w.hK(new B.d8(t,s.c.a,u,A.h8,A.fx,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cv,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vc(u,q,"Left early \xb7 +$"+A.h.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KS(d,e){return this.czL(d,e)},
b8F(d){return this.KS(!1,d)},
czK(d){return this.KS(d,"")},
czL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KS=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.vc(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bHd(s,C.bGV(),C.hkI(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KS)
case 5:w=1
break
case 4:n=B.or(A.h.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dOa(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d8(s,p,n,A.h8,A.fx,q,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.h.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.h.ad(n,2)+" ("+A.h.U(r*100)+"% of the prize)"}q=t.a
C.vc(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHd(s,C.bGV(),C.hkI(),""+t.e+"/"+t.f,k,q,!0),$async$KS)
case 6:w=7
return B.b(C.aiy(t.a.f,k),$async$KS)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KS,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.aq(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.Qx,o,o,o,new C.dOd(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.h.ad(t.w*1.46,2)+" \xb7 stake $"+A.h.ad(p.a.w,2),o,o,o,o,o,o,D.fCe,o,o,o)],s),A.E,o,A.e,A.i,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.l(99)
q=B.A(B.a([u,t,new C.arJ(r,new C.dOe(p),o),A.bn,B.cU(o,B.A(B.a([D.c3j,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o,o,A.b0,new B.n(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSh(o,D.bvM,B.bm(!0,B.x(B.a([new B.D(D.bJU,q,o),new C.Or(w*r,w,v,o),new B.D(E.anw,B.A(B.a([B.E(B.bv(B.l(99),B.kt(A.bw,o,o,9,o,r,new B.lN(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fLV,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o),B.E(new B.D(A.yW,B.bv(B.l(22),new B.bN(new B.n(o,o,o,o,o,new B.a7(A.aY,A.b3,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.akZ],x.O),o,o),A.n),A.bk,new B.ds(p.x,N.hGk(p.a.e,new N.zZ(new C.dOf(p),new C.dOg(p),new C.dOh(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a82.prototype={
B(d){var w=null,v=B.l(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ac(0,A.G,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bXE,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h0t,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fOz,w,new C.cdC(d),B.bp(A.at,w,w,w,A.w,A.hg,w,w,new B.ba(B.l(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.ca2,A.n),w,w,w,w,D.bI9,w,w,w),w,w,w,A.a1C,w,A.d7,w,w,w)}}
C.app.prototype={
S(){return new C.bm9(null,null)},
ga_(d){return this.e}}
C.bm9.prototype={
Z(){var w,v=this,u=null
v.a3()
w=v.d=B.bo(u,A.Cy,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dHs(v))
w=B.bo(u,A.mf,u,1,u,v)
w.cK(0)
v.e=w
w=B.bo(u,A.Og,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dHt(v))
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
w.bzv()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.T9[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.T9[A.o.F(a9.w,5)]:b0
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
b3=B.a([B.e1(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ac(6+e,A.G,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ac(3,A.G,A.ba.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bh,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ac(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wR(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.l(b2*0.5),B.a([new B.ac(b2*0.02,A.G,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.dr()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fE(m)
d=b2*0.2
a1=B.l(d)
if(a9.a.c)a2=D.dgx
else{a2=B.ap(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.ci,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ac(0,A.G,A.w.j(0.3),D.euM,16)],e)
if(!a9.a.c)e.push(new B.ac(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ac(0,A.G,A.c.j(0.9),A.UE,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bN(new B.n(b0,b0,b0,B.l(d),b0,new B.a7(new B.d7(-1+Math.cos(j)*0.8,-1),new B.d7(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.l(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cX(A.w.j(0.18),A.dM,5)],x.C)
if(!a9.a.c)d.push(new B.cX(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uK(B.d(v,b0,b0,b0,b0,b0,b0,B.m(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jq,b3),b0,b0,b0))
f.push(B.dO(B.fz(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNG.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.Or.prototype={
B(d){var w=null,v=new C.cg3(),u=v.$3("STAKE","$"+A.h.ad(this.e,2),A.c),t=B.l(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ac(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.Oz,B.A(B.a([u,B.o(w,B.x(B.a([D.h_6,B.lC(new C.cg2(),w,A.b0,A.n_,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.aus,A.n),w,w,w,w,A.OM,w,w,w),v.$3("FULL WIN","$"+A.h.ad(this.d,2),A.bL)],q),A.l,w,A.e,A.i,0,w,w),w)}}
C.arJ.prototype={
B(d){var w=null,v=B.l(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bW4,A.df,C.asy(this.d,A.o7,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.aus,A.n),w,w,w,w,A.OX,w,w,w)},
ge3(){return this.c}}
C.Oz.prototype={
S(){return new C.bmU(null,null)}}
C.bmU.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,A.mf,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bA7()},
aQI(d,e){var w=this.a.d,v=B.U(w).k("N<1,q>"),u=B.C(new B.N(w,C.iuc(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c6(w,new C.e78(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.aki,B.bm(!0,this.aQI(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aQI(0,d)},
azI(d,e,f){var w=null,v=f.j(0.16),u=B.l(10)
return B.A(B.a([B.o(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w)}}
C.aOh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aeO.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aE(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e7b()).gJ(0),j=new B.el(l.dO(m,new C.e7c(),x.cD),x.bG).cB(0,0,new C.e7d())
o=B.aE(d,A.bX,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.l(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anO,B.A(B.a([B.o(p,D.c5Q,A.f,p,p,new B.n(p,p,p,B.l(14),B.a([new B.ac(0,A.G,A.fe.j(0.45),A.J,14)],x.V),D.aul,A.n),p,44,p,p,p,p,p,44),A.bc,D.bMj,B.aH(p,p,p,p,A.lt,p,p,p,new C.e7e(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.i,0,p,p),p)],w)
if(l.gcn(m)){u=C.hf1("GAMES",""+l.gJ(m),A.ey)
t=C.hf1("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDy(j)
s=s?A.jY:A.eV
v.push(new B.D(D.bGi,B.A(B.a([u,A.ae,t,A.ae,C.hf1("NET",r+q,s)],w),A.l,p,A.e,A.i,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.X(D.bS4,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.m(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.m(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.i,0,A.p),p))
else v.push(new B.df(1,A.cl,B.hV(p,new C.e7f(this),l.gJ(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7g(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9y,p,p,p,p,p,p,p,p)}}
C.aeN.prototype={
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
r=w}q=h.gbkt()
w=new C.e7a()
s=B.l(14)
p=B.a([r.j(0.13),D.buw],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.X(g?A.ml:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u4,i,i,i),1)
l=r.j(0.2)
k=B.l(99)
k=B.o(i,B.d(t,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.n),i,i,i,i,D.bJM,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDy(q)}else{l=g?"+":"-"
l+=C.bDy(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.i,0,i,i)
k=C.e79("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e79("PAID",C.bDy(g?h.d:0),r),A.df,C.e79("BEFORE",w.$1(h.x),A.ey),A.df,C.e79("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.i,0,i,i)
n=C.ipt(h.f)
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
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afb(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a85,A.tB,A.d3,A.c][w.aw(4)],[A.i0,A.kc,A.e9,A.HD][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bz_()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aF(!1,A.a3,!0,w,B.c6(v,new C.dnU(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.afb.prototype={
ga_(d){return this.f}}
C.aNb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.b30.prototype={
B(d){return new B.wk(new C.cir(this),null,new B.he(B.a([$.zd(),$.a4m()],x.U)),null)},
ge3(){return this.c}}
C.O2.prototype={
chs(){if(this.c!=null)this.m(new C.c5T())}}
C.JD.prototype={}
C.ar6.prototype={
S(){return new C.aFC(A.cT,new B.at(A.aw,$.aw()))},
cMH(){return this.d.$0()},
cYF(){return this.f.$0()},
cYt(d,e){return this.r.$2(d,e)},
cZg(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFC.prototype={
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
avp(){var w=B.cW(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avp()
if(s<2){t.azJ("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cMH()<s){t.azJ("Insufficient balance.")
w=1
break}if(!t.a.cYt(s,"Dice Roll bet")){t.azJ("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e_E(t))}w=3
return B.b(C.ceM(t.a.e),$async$Bx)
case 3:r=t.a
q=C.irJ(r.e,r.c,t.d)
t.a.cYF()
B.b1B(t.a.e)
t.m(new C.e_F(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bO(new B.bf(1000*(40+p*6)),null,r),$async$Bx)
case 7:if(t.c==null){w=1
break}new C.e_G(t).$0()
t.c.eq()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bO(A.k4,null,r),$async$Bx)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hjq(q)
t.m(new C.e_H(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cZg(m,"Dice Roll "+n,o)
t.m(new C.e_I(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"
w=12
return B.b(C.bHd(r,C.bGV(),new C.e_J(t),n,k,"YOU WIN!",!0),$async$Bx)
case 12:w=13
return B.b(C.aiy("Dice Roll",l?"+$"+A.h.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(m,2)+" added to your balance"),$async$Bx)
case 13:w=10
break
case 11:w=14
return B.b(C.bHd(r,C.bGV(),new C.e_K(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bx)
case 14:C.vc(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$Bx,v)},
azJ(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avp(),d=x.w,a0=B.aE(a2,A.dD,d).w,a1=Math.min(B.aE(a2,A.bX,d).w.a.a*0.44,200)
d=B.ht(A.asM,D.h6H,new C.e_N(a2),f)
w=B.l(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b4,B.o(f,B.A(B.a([A.asH,A.bn,C.asy(v.d,A.j2,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.n),f,f,f,f,A.lP,f,f,f)],t),A.l,f,A.e,A.i,0,f,f)
u=g.z
v=B.a0(140,D.a_S.l()>>>16&255,D.a_S.l()>>>8&255,D.a_S.l()&255)
d=B.l(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.app(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.m(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.T9[q]
o=C.hjq(p)
n=p>0?A.bi:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ac(1,A.G,n.j(0.65),A.J,14)],r):A.SX
m=m?18:15
s.push(new B.bz(1,A.bd,new B.D(A.j9,B.o(A.z,B.d(o,f,f,f,f,f,f,new B.G(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bH(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hjq(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.m(f,f,s>0?A.be:A.bZ,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.m(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.C(new B.N(B.a([2,5,10,25],x.n),new C.e_O(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1I,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.l(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.lY,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.i,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.h.ad(g.avp()*0.46,2),f,f,f,f,f,f,M.aXc,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.hZ,B.x(d,A.al,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gcwk()
s=B.fu(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.l(14),A.a1),f,f,f,f,f)
return C.aSh(f,D.a05,B.bm(!0,B.x(B.a([new B.D(D.bKe,w,f),new C.Or(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iy(B.d("\ud83c\udfb2 ROLL ($"+A.h.ad(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.i,0,A.p),1)],t),A.l,f,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arP.prototype={
S(){return new C.aFS(A.l7,new B.at(A.aw,$.aw()))},
cYl(d){return this.e.$1(d)}}
C.aFS.prototype={
gauc(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cT.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRq(){var w=this.d,v=this.a
return w===A.l7?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaA(){var w=this.gRq(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
JJ(d,e){return this.bN8(d,e)},
bN8(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fH(new B.fx(d)),$async$JJ)
case 2:B.eY()
t=u.c
if(t!=null)t.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JJ,v)},
Rk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRq().length===0){r.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jn()
o=A.h.ad(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaaA()+"/"+o,0,null):B.cD("bitcoin:"+r.gRq(),0,null)
t=4
w=7
return B.b(B.iP(q,A.fo,null),$async$Rk)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaaA():r.gRq()
w=10
return B.b(r.JJ(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rk)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaaA():r.gRq()
w=11
return B.b(r.JJ(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rk)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rk,v)},
a1N(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i5().blf(A.eR),$async$a1N)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fq(),$async$a1N)
case 4:s=e
t.m(new C.e7m(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1N,v)},
cdH(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hHH(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cYl(new B.d8(s,w.c.a,w.d,A.fT,v.d,r,v.f,v.gauc(),A.dG,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eR(o,o,o,!0,!0,A.C0,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.In,o,o,o,new C.e7n(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fQh,o,o,o,1,o,!0),m=B.l(26),l=B.K(D.f1.j(0.25),A.r,1),k=x.V,j=B.a([new B.ac(0,A.G,A.b2.j(0.25),A.eS,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.m(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dv(A.dC,A.z,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fye,o,o,o),o),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.m(o,o,D.f1.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cd2,A.n),o,o,o,o,A.ao0,o,o,o)
m=p.c89()
l=p.aDq(1,"Send the money to NGMY Pay",p.cdF())
w=p.aDq(2,"Put this code in the payment note",p.bLJ())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.m(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDq(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.l(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uE,!0,o,o,o,o,new B.b6(4,B.l(18),D.b6D),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fzL,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u5,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.l(20)
s=r?D.f1:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bv(B.l(14),new B.cN(D.b82,new B.Fs(p.f,o),o),A.aq),A.P,D.fiE,A.ax],i),A.l,o,A.e,A.i,0,A.p):B.x(B.a([B.o(o,D.c5_,A.f,o,o,new B.n(D.f1.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fVO,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p)
return B.c5(n,A.C0,B.as(new B.cN(A.afB,B.cv(B.a([j,A.bx,m,A.bx,l,w,t,p.baf(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uE,o,s,u,o,o,A.n),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcps(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.d(p.a.r,o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bN(new B.n(o,o,o,B.l(18),B.a([new B.ac(0,A.G,A.b2.j(0.45),A.dp,18)],k),D.cbC,A.n),A.bk,B.lT(A.ato,D.h5S,p.gcdG(),B.fu(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.l(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHh,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c89(){var w=null,v=new C.e7i(this),u=B.l(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.l7,A.hC,"Cash App"),A.e7,v.$3(A.a9V,D.ask,"Bitcoin")],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.n(A.uE,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)},
baf(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.d(""+d,v,v,v,v,v,v,D.fFh,v,v,v),A.f,v,v,D.b8M,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f1.j(0.18),v,v,v,v,v,A.wC,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.EQ(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a11,B.d(e,v,v,v,v,v,v,A2.La,v,v,v),v),f],u),A.al,v,A.e,A.i,0,A.p),v),1)],u),A.al,v,A.e,A.i,0,v,v),v)},
aDq(d,e,f){return this.baf(d,e,f,!1)},
cdF(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaaA():s.gRq(),p=B.l(20),o=B.l(20),n=s.d===A.l7,m=n?D.caw:D.ccp,l=B.a([new B.ac(0,A.G,(n?A.a_s:D.Zy).j(0.35),A.cz,16)],x.V),k=B.l(12)
n=s.d===A.l7
w=n?A.hC:D.ask
k=B.o(r,B.X(w,n?A.a_s:D.Zy,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.m(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.ax,B.A(B.a([D.c0a,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rj,r,r,r)],u),A.l,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bc,v,B.aH(r,r,r,r,D.c_8,r,r,r,w?r:new C.e7l(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.i,0,r,r),r,new B.n(r,r,r,o,l,m,A.n),r,A.anq,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gckC(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bLJ(){var w,v,u,t,s,r,q,p,o=null,n=B.l(20),m=B.K(A.b8.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gauc().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b8.j(0.28),A.b8.j(0.08)],u)
p=new B.ax(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.d(s,o,o,o,o,o,o,A.q2,o,o,o),A.f,o,o,new B.n(o,o,new B.bH(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b3,A.x,q,o,o),A.n),o,52,o,A.j9,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.i,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.m(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.ht(A.a4A,D.h7S,new C.e7h(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.i,0,o,o)],l),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(A.uE,o,m,n,o,o,A.n),o,o,o,o,A.bH,o,o,o)}}
C.rQ.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rR.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWG(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hrM(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aN(v," \xb7 ")},
giK(d){return this.c}}
C.lY.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iB.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b9(v.c,new C.chp(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.ip.prototype={
amM(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.ip(v,u,t,s,r,h==null?w.f:h)},
bfT(d){var w=null
return this.amM(w,w,w,w,d,w)},
cQy(d,e,f){return this.amM(d,e,null,null,null,f)},
bfS(d){var w=null
return this.amM(w,w,w,d,w,w)},
cQc(d,e){var w=null
return this.amM(w,w,d,w,e,w)},
aj(){var w=this,v=C.icX(w.c),u=w.e,t=B.U(u).k("N<1,aa<q,@>>")
u=B.C(new B.N(u,new C.chn(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbT.prototype={}
C.WS.prototype={
S(){return new C.aG3(new B.at(A.aw,$.aw()),B.mR(0,null,null),B.a([],x.m))},
Vc(d){return this.d.$1(d)}}
C.aG3.prototype={
Z(){var w,v=this
v.a3()
w=J.b9(v.a.c,new C.ebs(),x.i)
w=B.C(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ebt())
v.d=w
v.JT()},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.x.t()
this.a2()},
afS(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$afS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JT()
u.m(new C.ebm(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.Vc(s),$async$afS)
case 2:r=e
if(u.c!=null){u.m(new C.ebn(u))
t=u.c.K(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.T(B.b2(null,null,null,r?A.dn:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$afS,v)},
a9O(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.ip(q,"New Category",A.HY,4284773515,D.aDh,p.length)
t.m(new C.eb5(t,s))
t.JT()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.eb6(s),p,null,!0,!0,x.i),$async$a9O)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.eb7(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9O,v)},
a2J(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2J=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.ebj(t,p))
q.bP(0,A.cg)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.chk(p,q,s),$async$a2J)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebk(t,r))
$.aU.x1$.push(new C.ebl(t))
case 1:return B.h(u,v)}})
return B.i($async$a2J,v)},
abP(d){return this.bRY(d)},
bRY(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$abP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ebd(t),r,null,!0,!0,x.i),$async$abP)
case 2:s=f
if(s!=null)u.m(new C.ebe(u,d,s))
return B.h(null,v)}})
return B.i($async$abP,v)},
bPC(d){this.m(new C.ebc(this,d))
this.JT()},
JT(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bfT(v)},
chY(d,e){var w={}
w.a=e
this.m(new C.ebi(w,this,d))},
a_1(d){return this.c75(d)},
c75(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ee(new C.ebh(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).ce(t),$async$a_1)
case 2:return B.h(null,v)}})
return B.i($async$a_1,v)},
bHT(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fY,A.bs],l):B.a([A.ph,A.eO],l)
w=B.l(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.X(A.e9,m?A.dy:A.dX,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a2T:A4.Po
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.X(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.eb9(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.uo:A.c).j(0.65)
p=B.l(12)
u.push(B.o(n,B.ku(!0,n,o.x,new C.eba(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afw,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.cq,n,n,n))}u.push(A.P)
t=o.w
q=B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.m(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.l(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebb(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcwA()
p=B.bp(A.bp,n,n,n,n,n,A.jr,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JR(t,A.bp,n),A.df,B.bJ(o.f?A.re:D.asy,n,m,p)],r),A.dO,n,A.e,A.i,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.al,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.Hf,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bbT(t),r=t?A.bA:A.ci,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcdL()
if(n)n=A.VH
else n=B.X(A.zx,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eR(B.a([B.ht(n,B.d("Save",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXx(A.aN,u,A.Yt,A.oQ,D.h44,v.gbE9())
q=v.bHT(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.m(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hf,n,u),B.E(G.hwh(!1,new C.ebr(v,s),m.length,v.gchX(),D.bG4,u,!1),1)],w),A.al,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
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
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.uo:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c6M,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.m(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.C(new B.N(D.cdw,new C.cWO(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.C(new B.N(D.ddh,new C.cWP(t),v),v.k("ak.E"))
u=x.p
v=B.ca(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.em(B.a([B.bP(!1,A.ds,s,s,!0,s,s,s,new C.cWQ(d),s,s),B.bJ(A.rk,s,new C.cWR(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1q.prototype={
S(){return new C.aI4()},
pk(d){return this.d.$1(d)}}
C.aI4.prototype={
Z(){this.a3()
this.d=B.br(this.a.c.e,!0,x.u)},
azL(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pk(v.bfS(u))},
a9Q(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a9Q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b3W(new C.iB("q_"+1000*s,"",D.dbM,null,!1,r.length)),$async$a9Q)
case 2:t=e
if(t!=null){u.m(new C.f38(u,t))
u.azL()}return B.h(null,v)}})
return B.i($async$a9Q,v)},
b3W(d){var w,v=this.c
v.toString
w=B.ee(new C.f39(d),!1,null,x.u)
return B.a6(v,!1).ce(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.ci,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eR(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXx(A.aN,v,A.Yt,A.oQ,D.h9Z,w.gbEB())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.m(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hV(v,new C.f3e(w,new C.bbT(u)),q,D.bGd,v,A.ah,new C.f3f(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1p.prototype={
S(){return new C.aI3()}}
C.aI3.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.at(new B.bb(w.b,A.b7,A.aP),$.aw())
w=B.br(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c4(v.e,D.a93)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.a2()},
afR(){var w=0,v=B.j(x.H),u=this,t
var $async$afR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DH(78,1920),$async$afR)
case 2:t=e
if(t!=null)u.m(new C.f34(u,t))
return B.h(null,v)}})
return B.i($async$afR,v)},
ah_(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ah_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ee(new C.f32(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).ce(t),$async$ah_)
case 2:s=e
if(s!=null)u.m(new C.f33(u,s))
return B.h(null,v)}})
return B.i($async$ah_,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.ci,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eR(B.a([B.de(Q.a4J,i,A.rk,new C.f36(j,a1),B.bp(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.l(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bv(e,B.aSn(B.l(14),A.bY,140,A.D2,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcdK(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.l(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eN,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cD,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JR(j.d,i,i)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f37(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uo:A.c
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
return B.c5(d,g,B.cv(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.ax,s,A.af,B.aF(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.X(A.zt,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcjz(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bT,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.ddH.prototype={}
C.WT.prototype={
S(){return new C.aG5(B.kc(!0,null,!0,!0,null,null,!1))}}
C.aG5.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dH(q.a.c,new C.ec2())
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
q.d=new B.at(new B.bb(w,A.b7,A.aP),$.aw())},
t(){var w=this.d
w===$&&B.c()
w.V$=$.aw()
w.R$=0
this.f.t()
this.a2()},
azM(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.aA(v,r,u)+e
s=A.a.oi(v,r,u,t)
this.d.bP(0,new B.bb(s,B.ho(A.bB,r+t.length),A.aP))},
b20(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.oi(w,v,v,u)
this.d.bP(0,new B.bb(t,B.ho(A.bB,v+u.length),A.aP))},
adx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DH(78,1920),$async$adx)
case 3:s=e
if(s==null){w=1
break}t.m(new C.ebJ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adx,v)},
Zt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i5().a7b(A.eR),$async$Zt)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fq(),$async$Zt)
case 4:t.m(new r.ebO(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zt,v)},
ady(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$ady=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new B.at(A.aw,t)
r=new B.at(new B.bb("https://",A.b7,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ebM(s,r),q,null,!0,!0,x.y),$async$ady)
case 2:if(e===!0)u.m(new C.ebN(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$ady,v)},
bIQ(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fw(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ebF(),B.U(p).k("N<1,q>")).c_(0,new C.ebG())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.Y(s,"## "))q.push(new C.lY("heading",A.a.i(A.a.b_(s,3)),r,r))
else if(A.a.Y(s,"\u2022 ")||A.a.Y(s,"- "))q.push(new C.lY("bullets",new B.N(B.a(s.split("\n"),u),new C.ebH(),t).c_(0,new C.ebI()).aN(0,"\n"),r,r))
else q.push(new C.lY("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a93)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.ddH(n),l=n?A.av:A.hk,k=B.d(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eR(B.a([B.de(Q.a4J,o,A.acP,new C.ebT(p,d),B.bp(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.ct:A.hY
v=B.c_(A.bI,B.a([p.wk(A.Pp,"Bold",new C.ebU(p),m),p.wk(A.a2V,"Italic",new C.ebV(p),m),p.wk(A.apW,"Underline",new C.ebW(p),m),p.wk(V.a31,"Heading",new C.ebX(p),m),p.wk(A.Pq,"Bullets",new C.ebY(p),m),p.wk(A.apV,"Align",new C.ebZ(),m),p.wk(A.HE,"Link",p.gc3T(),m),p.wk(A.qN,"Image",p.gc3S(),m),p.wk(S.a3f,"Video",p.gc3U(),m),p.wk(A.a4n,"Signature",new C.ec_(p),m),p.wk(S.Pr,"Divider",new C.ec0(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,A.aoy,o,o,o)
v=n?A.bA:A.c
u=B.l(12)
t=B.K(n?A.cR:A.dY,A.r,1)
s=B.a([new B.ac(0,A.G,A.w.j(n?0.35:0.08),A.cM,16)],x.V)
r=p.d
r===$&&B.c()
q=B.m(o,o,n?A.iO:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bT,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.n),o,o,o,o,A_.CP,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.ic(n,B.U(n).k("ic<1>"))
j.push(B.o(o,B.c_(A.bI,n.gdQ(n).dO(0,new C.ec1(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OC,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
wk(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.l(8),s=B.l(8)
return B.hd(B.aF(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cq,B.X(d,v?A.iO:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.dsc.prototype={}
C.aDG.prototype={
a7(){return"_KbView."+this.b}}
C.as5.prototype={
S(){return new C.aG4(D.b21)},
cXx(d,e){return this.e.$2$size(d,e)}}
C.aG4.prototype={
gaCB(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gcyO(){var w,v,u,t,s,r=this.gaCB()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cdM(d){this.m(new C.ebC(this,d))},
ckL(d){this.m(new C.ebD(this,d))},
bGY(){this.m(new C.ebu(this))},
bH_(){this.m(new C.ebv(this))},
gb9F(){var w=B.br(this.a.c,!0,x.i)
A.d.b0(w,new C.ebE())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsc(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eO.j(0.55),A.nv.j(0.45)],e)
w=B.l(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bI5(f)
break
case 1:g=i.gaCB()
g.toString
g=i.bIO(f,g)
break
case 2:u=i.gaCB()
u.toString
t=i.gcyO()
t.toString
s=B.b1(u.d)
r=B.l(16)
r=B.o(h,B.d(t.b,h,h,h,h,h,h,D.fEh,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.l(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ac(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fY:A.ph
l=B.l(8)
k=B.X(A.oG,g?A.dy:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDE(f,i.gbGZ(),u.c,s,"Answer",h),B.E(B.cv(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e7,B.d("Stored answer",h,h,h,h,h,h,B.m(h,h,g?A.dy:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.n),h,h,h,A.el,A.hm,h,h,h),new C.b2y(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.n),h,h,h,h,A.bT,h,h,1/0)],j),h,h,A.anj,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aY,A.b3,A.x,e,h,h),A.n),h,h,h,A.hZ,h,h,h,h)},
b_7(d){var w,v,u,t=null,s=d.a,r=s?D.uo:A.c,q=A.aD.j(0.22)
q=B.a([new B.ac(0,A.G,q,A.J,14),new B.ac(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i3(v.cXx(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.m(t,t,A.dn,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.i,0,A.p)},
bI5(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_7(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_7(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.m(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cv(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.m(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iz(!0,t,t,A.y,E.aVp,new C.ebx(u,d),u.gb9F().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGe,t,t,A.ah,!1)},
bIO(d,e){var w,v,u,t,s=null,r=B.br(e.e,!0,x.u)
A.d.b0(r,new C.ebz())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hV(s,new C.ebA(this,r,d,e),t,A.wE,s,A.ah,new C.ebB(),!1)
return B.x(B.a([new C.aDE(d,this.gbGX(),e.c,w,e.b,s),new B.D(A.wG,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.i,0,A.p)}}
C.aDE.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.X(A.eK,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.l(12)
q=B.o(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.n),v,v,v,v,A.cq,v,v,v)
return new B.D(D.bJy,B.A(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v),v)}}
C.adi.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uo:A.c,r=B.l(14),q=B.l(14),p=B.l(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ac(0,A.G,A.w.j(t?0.28:0.06),A.dM,6)],x.V),m=u.j(0.15),l=B.l(12)
l=B.o(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a2,w,w,w,B.m(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.i,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.n),w,w,w,w,A.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2y.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fY:A.ph
u=B.l(8)
t=B.X(A.va,w?A.dy:A.dX,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.m(s,s,w?A.dy:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.n),s,s,s,A.cw,A.eQ,s,s,s))}A.d.u(p,J.b9(this.c,new C.chl(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.ada.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bDT,B.d(q.b,r,r,r,r,r,r,B.m(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hz,B.bv(B.l(12),B.aSn(r,A.bY,160,A.qN,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hz,new C.aDF(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wC,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.m(r,r,s.d.a?A.cs:A.bp,r,A.ne,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQi(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iQ(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.m(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cL,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.yU,B.x(B.a([u,q,A.aO,t,A.ax,B.d("Signature",r,r,r,r,r,r,B.m(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.C(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQj(),x.cc),new C.cQk(s),v),v.k("M.E"))
return new B.D(A.kB,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hz,B.iQ(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eP,C.i6R(q,s.d),r)}}}
C.aDF.prototype={
S(){return new C.bjY()}}
C.bjY.prototype={
Z(){this.a3()
this.afT()},
afT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d3(n,"http")&&!J.d3(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZO(B.cD(n,0,null),null)
w=7
return B.b(J.a4p(q),$async$afT)
case 7:if(r.c==null){w=1
break}r.m(new C.dsd(r,q))
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
return B.i($async$afT,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.l(12)
return B.o(A.z,B.X(A.qW,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.l(12)
v=s.a
u=J.ajv(v)
return B.bv(w,new B.fG(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AH(s,t),B.aH(t,t,t,t,B.X(v.f?A.aq2:A.Ps,A.c,t,t,t,44),t,t,t,new C.dsf(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.asW.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JI.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rW.prototype={}
C.as8.prototype={
S(){var w=null
return new C.aG6(new B.at(A.aw,$.aw()),B.mR(0,w,w),B.a([],x.m),D.Er,D.aMj,w,w)},
ge3(){return this.d}}
C.aG6.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,A.nE,null,1,null,v)
w.f1(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7p).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.V$=$.aw()
v.R$=0
w.e.t()
w.bAg()},
gasJ(){var w,v,u,t,s=this.x
if(s===D.Es)return null
s=s===D.Er
w=s?D.a7p:D.a6t
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
czA(d){return this.m(new C.ecg(this,d))},
aCn(){$.aU.x1$.push(new C.ec7(this))},
JK(d){return this.cz1(d)},
b21(){return this.JK(null)},
cz1(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JK=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JK)
case 3:e=b2
if(!e){w=1
break}B.jW()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aU(a0,new C.ec9())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hC2(a8)&&a1
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
l=C.hC2(a8)&&!p
q.m(new C.eca(q,a8))
q.aCn()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.ecb(q))
q.aCn()
w=1
break}t=5
j=B.nl(k)
i=new B.N(a0,new C.ecc(),B.U(a0).k("N<1,q>")).aN(0,"\n\n")
a0=C.ir6(m,p,o,q.x,n,q.y,q.gasJ(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.rj(j,h,A.i1,null,null),$async$JK)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFn(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ecd(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ece(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.ecf(q))
q.aCn()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JK,v)},
bMR(){return this.JK("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GN:D.bsM,o=x.p
o=B.a([B.x(B.a([B.E(s.cyh(q),1),s.bM3(q)],o),A.l,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbMQ()
u=B.l(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.eyF,r,new B.n(r,r,r,u,B.a([new B.ac(0,A.G,A.aQ.j(0.45),A.cM,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o1,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o1,r,r,A.ai),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cyh(d){var w,v,u,t=this,s=null
if(t.x===D.Es)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.he_(s,!1,A.L,0,0,w,B.haf(t.cE7(d),A.YO,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.asm,A.aD.j(0.5),s,s,s,52)
w.push(B.b94(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.m(s,s,d?A.aE:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fU,B.a([t.akd("Full bongo love song ABAB",d),t.akd("Mix: group vs private jet \u2014 which flies?",d),t.akd("Song from John 3:16 + matching verses",d),t.akd("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nC(D.bEA,B.Zc(new B.oV(new C.ec8(t,d),u+v,!0,!0,!0,0,B.tm(),s)),s))}return B.w5(0,s,A.t,t.e,A.y,s,s,A1.afs,s,s,!1,s,A.ah,!1,w)},
cE7(d){var w=this.as
w===$&&B.c()
return B.c6(w,new C.ecn(this,d),null)},
cE9(d){var w,v=this,u=null,t=B.l(14),s=v.r?u:new C.ecp(v),r=A.w.j(d?0.35:0.06),q=B.l(14),p=B.K(A.ba.j(0.35),A.r,1),o=v.gasJ()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fc,u,u,u)
w=v.gasJ()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.m(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ae,w,B.X(v.w?A.PT:A.tj,A.ba,u,u,u,20)],x.p),A.l,u,A.e,A.i,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.n),u,u,u,u,A.nI,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
axV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b2,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.cs],x.O)
break
case 2:w=B.a([A.bE,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.l(14)
t=B.l(14)
s=this.r?n:new C.ec6(this,d)
r=B.l(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Fc,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bq
return B.E(B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.m(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cEa(d,e){var w,v,u,t=this,s=null,r=t.x===D.Er?t.z:t.Q,q=B.l(20)
if(r===d.a)r=A.ba.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.l(20)
v=t.r?s:new C.ecq(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.W_,s,s,s)
return B.aF(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.hn,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.m(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
akd(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,A.acH,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mZ(w,u,v,w,this.r?w:new C.ech(this,d),w,w,w,w)},
bM3(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.l(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(Y.aoi,B.d("$"+A.h.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.m(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.m(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Es?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eN,r,A.ho,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m(r,r,d?A.bV:A.hO,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ec3(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ec4(s)
l.push(B.A(B.a([v,new B.JR(w,A.aD,r),B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.eyV:D.c0j,r,D.b9E,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.ai)],m),A.dO,r,A.e,A.i,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.n),r,r,r,A.t7,A.a15,r,r,r)}}
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
bkL(){return this.f.$0()}}
C.aD4.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bo(u,D.bCZ,u,1,u,v)
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
w=B.bo(u,A.yQ,u,1,u,v)
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
w.bz4()},
cdO(){var w=this.d
w===$&&B.c()
w.eJ(0).bG(new C.dpy(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aE(d,A.bX,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcdN(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.DW(new C.dpz(k,v,d),j,w,j)}f=B.C(e,f)
w=k.d
w===$&&B.c()
u=B.l(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ac(2,A.G,A.at.j(0.35),A.J,40),new B.ac(0,A.G,A.aN.j(0.25),A.fQ,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c6(new B.he(B.a([r,q],x.U)),new C.dpA(k),j)
r=B.og(A.jV,D.h7b,new C.dpB())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.m(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cD,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b22(A.ke,"Resets in 24h"),A.ae,k.b22(A.oG,"Help Topics ready")],o),A.l,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dV(D.h1i,new C.dpC(k),B.dj(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kW,j,new B.ba(B.l(14),A.a1),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.l(14)
m.push(B.E(B.bJ(D.h71,j,g,B.bp(A.aN,j,j,6,A.c,j,A.kW,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c6(w,new C.dpD(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.i,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.c9B,A.n),j,j,j,j,A3.ao8,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dpE(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aF(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b22(d,e){var w=null,v=A.c.j(0.08),u=B.l(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.X(d,A.at,w,w,w,13),A.e7,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hn,w,w,w)}}
C.aNg.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.OQ.prototype={}
C.qk.prototype={}
C.asI.prototype={
S(){return new C.aGt(B.a([],x.E),B.a([],x.s))}}
C.aGt.prototype={
gat7(){return A.h.D(B.M6(this.a.c.a,new C.eqE(this)),0,1/0)},
a9W(){var w,v=this,u=v.d,t=v.gat7()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.ri(u.a,t,!0,!1)},
Ke(d,e){var w,v,u,t=this,s=t.gat7(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gat7()
if(w<v-0.005)B.hHJ(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.ri(u.a,w,!0,!1)
B.ri(t.a.c.a,w,!0,!1)
B.Bp(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a3()
$.aU.bZ$.push(o)
w=$.Jv+1
$.Jv=w
if(w===1){w=$.htg
if(w!=null)w.$0()}v=$.hch.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.br(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.br(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m4(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aS_(u,A.h.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w0(w,u,r,q,s.e,p)}o.d=t}o.Q1()
o.a9W()
$.aU.x1$.push(new C.erk(o))
o.Q=B.dh(A.ow,new C.erl(o))
o.as=B.dh(A.h2,new C.erm(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.hZy()
w.a2()},
cGl(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9b(v,w)){if(C.hcj(p,q.e)){q.m(new C.er2(q,p))
q.yH(!1,!0,!0)}else if(q.c!=null)q.m(new C.er3())
return}if(!C.cjC(v.c?v.bU():v)){q.m(new C.er4(p))
q.b2b(!1)
return}u=p.gD6()
if(u<=0)return
t=w.d5(B.c1(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))
s=C.hck(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.er5())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aU(q.e,new C.er6(r))){q.m(new C.er7(p,w,u))
return}q.m(new C.er8(q,p,u,w))
q.aAo(new B.d8(r,p.a,u,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cv,w))},
jn(d){if(d===A.fW)this.Fm()},
Q1(){var w,v,u,t,s,r,q,p=this.d
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
w.c7=B.br(p.c7,!0,x.N)
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
q=new B.w0(u,t,s,r,v.e,q)
u=q}w.x=u},
SW(d){return this.cEV(d)},
cEV(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$SW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Q1()
t.Ke(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$SW)
case 3:case 1:return B.h(u,v)}})
return B.i($async$SW,v)},
Fm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fm=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(G.A9(q.w,k,l,j,m,!1,n),$async$Fm)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.eqY(q,p))
q.SW(!1)}w=8
return B.b(q.Kq(),$async$Fm)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ab(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Kq(),$async$Fm)
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
return B.i($async$Fm,v)},
On(d){return this.bG9(d)},
bG8(){return this.On(null)},
bG9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$On=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$On)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d0(t.w,x.N)
r=s.rC("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jA(d,B.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fT&&l.x===A.cv&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eqF(j,t,i))
q.u(0,p)
r=B.C(q,B.a3(q).k("ci.E"))
t.w=r
w=4
return B.b(B.asK(t.a.c.a,r),$async$On)
case 4:t.azU(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$On,v)},
Kq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kq=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.U(a2).k("Y<1>")
a4=B.C(new B.Y(a2,new C.eqZ(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.U(a2).k("N<1,q>")
e=B.C(new B.N(a2,new C.er_(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lI("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kq)
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
j=A.d.bk(r.e,new C.er0(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cv
else a0=J.z(k,2)?A.kJ:A.dG
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dG&&h===A.cv&&a3[j].d===A.fT)J.c4(a6,l)
if(i===A.dG&&h===A.kJ&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.Ke(g.d+r.e[j].c,!1)
r.azU(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.er1())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.ab(a7)
$.am.$1("[growth income] refresh deposit status: "+B.w(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return B.b(r.On(a6),$async$Kq)
case 13:w=11
break
case 12:w=14
return B.b(r.bG8(),$async$Kq)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kq,v)},
QP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vg(i.a,i),$async$QP)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.eqJ(t,h))
t.Q1()
t.a9W()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.A9(s[0],p,q,o,r,!0,i),$async$QP)
case 4:i=e.a
n=i[4]
m=B.br(i[2],!0,x.o)
l=i[5]
t.w=B.br(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q1()
t.a9W()
k=C.hcj(n,m)
if(k)t.Ke(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hu6(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q1()
if(t.c==null){w=1
break}t.m(new C.eqK(t,n,m,l))
if(i){t.yH(!1,!0,!0)
if(j==="reset"){B.hsQ(t.a.c.a)
i=t.c
if(i!=null)B.hsT(i,null)}else if(j==="warn2"){B.hsR(t.a.c.a)
i=t.c
if(i!=null)C.hsU(i)}}else if(k)t.yH(!1,!0,!0)
else t.SW(!1)
case 1:return B.h(u,v)}})
return B.i($async$QP,v)},
yH(d,e,f){return this.coq(d,e,f)},
azU(d,e){return this.yH(d,!1,e)},
b2b(d){return this.yH(!1,d,!1)},
coq(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rV(r,o,q,!1,t.w,s,p),$async$yH)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JB(t.w,p,q,s,o,r)
if(f)t.SW(d)
case 1:return B.h(u,v)}})
return B.i($async$yH,v)},
ce4(){this.m(new C.eqS())
this.azU(!1,!0)},
agD(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cv&&B.tk(d)){w=r.a
w.f.$1(new B.d8(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjy(q,d)
v=q.d=B.M6(r.a.c.a,new C.eqP(r))
r.at=r.a.c.d=v
B.ri(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.eqQ(r,d))
r.yH(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d8(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dG
if(w&&d.d===A.fT)s=!1
else if(w&&d.d===A.f4){r.Ke(q.d-d.c,!0)
s=!0}else{C.cjy(q,d)
w=d.d
s=w===A.f4||w===A.kr
r.Ke(q.d,s)}r.m(new C.eqR(r,d))
w=d.d
r.yH(s,e,w===A.f4||w===A.kr||d.x===A.cv||w===A.h8)},
aAo(d){return this.agD(d,!0,!1)},
b3f(d,e){return this.agD(d,!0,e)},
b3e(d,e){return this.agD(d,e,!1)},
chb(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.itq(u,e,d)){v.mt("This plan is already active.")
return}w=B.hHd(u.a,d,e)
if(C.ipz(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.eqT(v))
v.m(new C.eqU(v,u,new B.w0(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAo(new B.d8(w,u.a,g,A.kr,A.fx,"Direct investment buy: "+d,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.m(new C.eqV(v))
v.mt("Plan purchased: "+d)},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a0Z(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.apq(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0Z)
case 3:w=4
return B.b(t.QP(),$async$a0Z)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a0Z,v)},
ah6(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.ajT(r,B.a([r],x.d9),A.SY,t.a.d,t.gb3d(),t.gb2a(),null),!1,null,x.X),$async$ah6)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah6,v)},
ah4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hE(s,new C.an3(r,t.a.d,t.e,t.gb3d(),t.gb2a(),new C.eqX(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ah4)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah4,v)},
aei(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aei=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hcj(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2b(!0),$async$aei)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.m(new C.eqL(t))
w=1
break}if(B.mq(r)===6||B.mq(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hu7(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9b(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSM(q,r))if(!B.aSM(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIq(m.y,l,m.a))}}q=B.hGA(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i00(r)
q=j.a
t.m(new C.eqM(j,r,k))
t.b3e(new B.d8("local_clockin_manual_"+q+"_"+s,j.a,0,A.h8,A.fx,"Clock-in session started (local)",null,null,A.cv,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aei,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nz:A.qr
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fOb
u=u==null?k:u.$0()
u=J.aT(u==null?A.iD:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.am(0,q)||B.tk(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cR(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.C(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erc(),B.U(v).k("Y<1>")))
A.d.b0(w,new C.erd())
v=l.d
v.toString
u=C.if7(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anS(t,l.a.e,l.z,l.gcha(),l.aXm(),D.hBD),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDT(l.aXm(),q,n,o,w,new C.ere(l),l.gcjh(),new C.erf(l),D.hBE),j,!0)
m=B.aE(d,k,x.w).w
n=l.y
return new B.XK(n,new C.erg(l),B.aF(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDS(v,u,w,l.gc77(),new C.erh(l),new C.eri(l),new C.erj(d),l.gck9(),l.gck4(),D.hBC),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIx(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXm(){var w=null,v=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.z,D.c59,A.f,w,w,new B.n(w,w,B.K(D.f1.j(0.38),A.r,1),w,B.a([new B.ac(0,A.G,D.f1.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqI(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIx(){var w=null,v=B.l(27),u=B.K(A.aF.j(0.45),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.5),A.eS,24),new B.ac(-2,A.G,A.aF.j(0.12),A.J,18)],x.V)
return new B.D(A.OC,B.bm(!0,B.as(new B.cN(D.b7V,B.o(w,B.ck(new C.eqG(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c91,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c8N(d){var w=null,v=this.y===d,u=D.dfY[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dw(w,!0,w,B.ay(A.c_,B.qq(B.oC(v?B.X(s,D.agQ,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.i,0,A.p),A.iQ,B.pY(),A.b0,A.b0,B.LN())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqO(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDS.prototype={
c5N(d){return C.hck(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.U(v).k("Y<1>")
u=B.pN(new B.Y(v,new C.dtY(),u),3,u.k("M.E"))
t=B.C(u,B.a3(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9b(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hu7(r)
m=v.gD6()
l=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f1.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ac(0,A.G,D.f1.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.X(A.hC,D.f1,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.l(14)
k=B.l(14)
j=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.cM,16)],j)
h=B.l(12)
g=x.p
j=B.bUj(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bYa,A.f,e,e,new B.n(A.iN.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.caC,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c48,A.f,e,e,new B.n(A.bt,e,B.K(D.ajP,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hwK(A.fM,new C.dtZ(),k)
k=B.A(B.a([B.E(C.hwJ(new C.du_(f,A.rD,n),new B.V(Date.now(),0,!1),h,k),1),A.p4,B.E(new B.wk(new C.du0(f,A.rD),e,new B.he(B.a([$.zd(),$.a4m()],x.U)),e),1)],g),A.l,e,A.e,A.i,0,e,e)
h=f.c9_(A.rD,D.f1)
v=B.E(f.cCp("Total Profit","$"+B.dG(v.e),A.rD),1)
u=u?e:s.b
return B.eb(B.ca(B.x(B.a([j,A.T,k,A.af,new C.aDR(f.d,m,q,p,n,o,D.f1,f.gc5M(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p4,B.E(f.b9A("Total Investment","$"+B.dG(u==null?0:u),A.rD,f.r),1)],g),A.l,e,A.e,A.i,0,e,e),A.T,f.c5J(d,t,D.f1,w)],g),A.al,e,A.e,A.i,0,A.p),A.t,e,A.y,e,e,A.a1B,e,e,A.ah),D.ajP,!0)},
azT(d,e,f,g,h){var w=null,v=B.l(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.dp,18)],x.V)
return B.o(w,B.bv(B.l(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bN(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.c9v,A.n),w,w,w,w,w,w,w,w)},
b29(d,e,f,g){return this.azT(d,e,f,A.ag,g)},
bbI(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.l(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b29(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bF8,B.x(B.a([B.o(w,B.A(B.a([B.X(e,f,w,w,w,15),A.e7,B.d(h.toUpperCase(),w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.n),w,w,w,w,A.aon,w,w,w),A.b4,new B.dv(A.dJ,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.m(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.l(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9_(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.d_t[w],s,D.bIO,s,s,s,5))}r=B.o(s,B.A(o,A.dO,s,A.b9,A.i,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h35,A.bF,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ac(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.df(1,A.cl,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.m(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.l(16)
v=B.l(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.azT(B.A(B.a([r,D.foH,q,A.ae,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.X(A.nP,e.j(0.95),s,s,s,21),A.rg,B.d("PLAY",s,s,s,s,s,s,B.m(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.i,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.i,0,s,s),e,A.a5,A.a18,26)},
b9A(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b65,v,v,A.n),v,v,v,A.nG,v,v,v,5),r=x.p
r=B.a([s,A.bc,B.E(B.x(B.a([B.A(B.a([B.X(u?A.v8:A.zI,t,v,v,v,14),A.e7,new B.df(1,A.cl,B.d(d,v,1,A.a2,v,v,v,B.m(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.i,0,v,v),A.am,new B.dv(A.dJ,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.fy5,v,v,v),v)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(T.Op,B.X(A.eI,A.c.j(0.35),v,v,v,v),v))
w=this.b29(new B.a5(v,66,B.A(r,A.l,v,A.e,A.i,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.l(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cCp(d,e,f){return this.b9A(d,e,f,null)},
c5J(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ac(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.m(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.l(20),h=x.p
i=B.a([B.A(B.a([l,A.VG,k,A.b4,B.o(m,B.d(""+e.length,m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.n),m,m,m,m,A.a1O,m,m,m)],h),A.l,m,A.e,A.i,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a0Z,B.x(B.a([B.X(A.hp,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.m(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mD(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.kr
t=u?A.hM:D.f1
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.X(u?A.v8:A.x3,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bH(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.inq(j),m,1,A.a2,m,m,m,A.kI,m,m,m)
q=C.hym(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.G(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.G(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oz,m,m,m)
j=C.hGd(j)
k.push(new B.D(I.Ot,new B.c8(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([v,A.bc,new B.bz(1,A.bd,s,m),B.x(B.a([q,A.cS,B.d(j,m,m,m,m,m,m,new B.G(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dO,m,A.e,A.i,0,A.p)],h),m),m))
A.d.u(i,k)}return this.azT(B.x(i,A.l,m,A.e,A.i,0,A.p),f,A.aY,D.bFj,26)}}
C.aDR.prototype={
S(){return new C.bkH(null,null)},
cXc(d){return this.z.$1(d)},
cYw(){return this.Q.$0()}}
C.bkH.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bo(u,A.qD,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bo(u,D.bCP,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bo(u,A.qG,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.baJ()},
gbdr(){var w=new B.V(Date.now(),0,!1)
if(B.mq(w)===6||B.mq(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
baJ(){var w=this,v=w.a,u=v.e||v.f||w.gbdr()
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
this.baJ()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bzl()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdr()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aF:g.x
g=g.r?new C.dtR(i):h
v=B.l(32)
s=B.l(32)
r=f?D.dyL:D.dyJ
q=B.K((f?D.pk:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ac(0,A.G,(f?A.aF:A.ba).j(0.16),A.fQ,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.acO(D.pk,130),h,h,h,-24,-30,h),B.ao(-36,i.acO(A.aF,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.acO(A.ba,120),h,h,h,-30,-36,h),B.ao(-40,i.acO(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.ds(!0,B.bv(l,new B.e6(B.c6(k,new C.dtS(i),h),h),A.aq),h),0,0,0))}if(f){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.ds(!0,B.bv(l,new B.e6(B.c6(k,new C.dtT(i),h),h),A.aq),h),0,0,0))}l=B.l(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b81,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ac(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.df(1,A.cl,B.d(u,h,1,A.a2,h,h,h,D.fE2,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.n),h,h,h,h,A.ho,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hwK(A.fM,new C.dtU(),l)
m.push(C.hwJ(new C.dtV(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.n(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.n),A.Cx,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acO(d,e){var w=null
return new B.ds(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beh.prototype={
b2c(d,e,f,g){var w=new B.aG($.S().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
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
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2c(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.h.F(a7+p/3,1)
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
J.bs(m.save())
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
if(f>0.6&&g>0.35){i=$.hMq()
h=i.b
d=h.c
h=h.a.c
i.a4(b2,new B.r(-d/2,-h.gba(h)/2))}m.restore()
break
case 1:$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2c(b2,o,3+g*3,i)
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
i.y=A.oA
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aE(d){return d.b!==this.b}}
C.beg.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.S(),a4=B.L()
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
J.bs(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aD(0,D.fha))
a5.aF(new B.a4(-18,a2,18,a2+a1*3),v)
a3.restore()
for(a2=a1+40,t=0;t<34;++t){m=A.h.F(Math.abs(Math.sin(t*91.7)*43758.5453),1)
l=A.h.F(w*(1+A.o.F(t,2))+t/34,1)
v=l*6.283185307179586
u=Math.sin(v*2+t)
J.bs(a3.save())
a3.translate(m*d+u*14,l*a2-20)
a3.rotate(v*(2+A.o.F(t,3))*180/3.141592653589793,0,0)
v=A.h.D(Math.abs(Math.cos(v*3+t)),0.3,1)
a3.scale(1,v)
if(l<0.08)v=l/0.08
else v=l>0.9?(1-l)/0.1:1
k=A.h.D(v,0,1)
v=B.by(D.fhJ,A.V7)
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
C.bef.prototype={
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
J.bs(w.save())
t=$.S().r
q=x.g
p=new B.aG(t,A.aj,e,e,B.a([],q))
p.E(new B.jt(B.bW(a1,a3)))
a4.mz(0,p)
p=B.bW(a1,a3)
o=B.L()
o.san(D.eGf.aD(0,B.bW(a1,a3)))
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
S(){var w=$.aw()
return new C.aDU(new B.at(A.aw,w),new B.at(A.aw,w))},
bkE(d,e){return this.w.$2$cloudRequest(d,e)}}
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
v.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cEj(d){this.a.bkE(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.m(new C.duh())},
cCU(){var w,v,u=this,t=B.cW(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hE(w,new C.arP(v.d,t,u.gcEi(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cL_(){var w,v,u,t,s=this,r=s.d,q=B.cW(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hHH(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkE(new B.d8("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dG,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.cg)
w.bP(0,A.cg)
s.m(new C.dui())},
cHD(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cv||!this.aZl(r)||B.hkA(r))continue
q=r.d
p=q===A.f4||q===A.kr||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brQ(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cHD(),p=s.a.r,o=new B.Y(p,new C.duj(),B.U(p).k("Y<1>")).gJ(0)
p=B.aE(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f1.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f1.j(0.38),A.r,1)
w=B.bUj(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.z,B.X(L.arE,D.f1,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bH3(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asG(A.x3,"Deposit",0),s.asG(A.v8,"Withdraw",1),s.asG(A.h4,"History",2)],t),A.l,r,A.r0,A.i,0,r,r)
return B.eb(B.bm(!1,B.ca(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oC(s.f===2?s.c2B():s.c8r(),A.ie,B.pY(),A.b0,A.b0,B.LN())],t),A.al,r,A.e,A.i,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.C0,!0)},
bH3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cm(g,"@")
v=A.a.aA(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.b_(g,w)}else v=g
w=B.l(26)
u=B.ao(h,i.aC8(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aC8(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aC8(150,0.05),h,h,-40,h,h,h)
r=B.l(26)
r=B.bS(0,new B.bN(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.l(6)
p=x.p
q=B.A(B.a([B.o(h,B.b5(h,h,h,new C.bdH(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.cbI,A.n),h,28,h,h,h,h,h,38),A.b4,D.hbS],p),A.l,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.m(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asy(new C.du3(i),D.fJN,i.a.d.a)
m=B.a([B.E(i.aRI(A.qO,"In",d),1),B.E(i.aRI(A.tf,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.l(99)
j=B.K(A.jd.j(0.6),A.r,1)
m.push(B.o(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fF_,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.n),h,h,h,h,A.oz,h,h,h))}return new B.fG(1.62,B.bv(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFs,u,t,s,r,new B.D(A0.ta,B.x(B.a([q,A.b4,o,A.bF,new B.dv(A.dJ,A.a5,A.f,n,h),A.b4,B.A(m,A.l,h,A.e,A.i,0,h,h),A.am,B.d(v,h,1,A.a2,h,h,h,B.m(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.aq),h)},
aC8(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRI(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.df(1,A.cl,new B.dv(A.dJ,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o5,w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w)},
asG(d,e,f){var w=null,v=this.f===f,u=v?D.cd4:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f1.j(0.25),A.r,1),s=v?B.a([new B.ac(0,A.G,A.aF.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.X(d,v?D.agQ:D.f1,w,w,w,26),w,w,A.ck,new B.n(w,w,t,w,s,u,A.a6),A.H7,w,62,w,w,w,w,w,62)
return B.ay(A.c_,new B.a5(92,w,B.x(B.a([u,A.aVn,B.d(e,w,w,w,w,w,w,B.m(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.du2(this,f),w,w,w,w,w,w,!1,A.a4)},
c8r(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cW(a1.a.a)
if(a2==null)a2=0
w=a0?D.f1:A.cs
v=a2>0
u=new C.due(e,w)
t=new C.dud()
s=e.f
r=B.l(26)
q=x.O
p=B.a([w.j(0.1),A.uE,A.uE],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ac(0,A.G,A.w.j(0.35),A.eS,22)],n)
l=w.j(0.15)
l=B.o(d,B.X(a0?A.x3:A.v8,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fF,d,d,d),1)
j=A.c.j(0.06)
i=B.l(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.o(d,B.A(B.a([B.X(A.hC,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.m(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.m(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uW(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ig,l,d),A.df,B.aZe(new B.cN(D.b8k,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eN,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.m(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.eb,d,d,d,1,d,d,!1,"\u2022",d,new C.duc(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fMH,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b0,new B.n(d,d,d,B.l(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.m(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.ch1:D.cvP
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
l=a0?A.Tm:A.a5l
n=B.a([new B.ac(0,A.G,(a0?A.b2:A.dX).j(0.45),A.dp,18)],n)
k=a0?e.gcCT():e.gcKZ()
j=B.X(a0?A.a3i:A.lU,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bN(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lT(j,B.d(i,d,d,d,d,d,d,A.lZ,d,d,d),k,B.fu(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.l(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aY,A.b3,A.x,p,A.xg,d),A.n),d,d,new B.bl("form"+s,x.W),d,A.wH,d,d,d)},
c2B(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.U(a2).k("Y<1>"),a4=B.C(new B.Y(a2,new C.du6(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.du7())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.T(x.N,x.o)
a3=$.fOb
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iD:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.C(new B.b8(a2,a3),a3.k("M.E"))
r=C.inZ(a2,B.M6(a0.a.e,new C.du8(a0)))
a2=B.l(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.l(99)
u=B.l(99)
q=x.p
u=B.a([B.A(B.a([D.bMg,B.aM(!1,v,!0,B.o(a1,D.fiG,A.f,a1,a1,new B.n(a1,a1,B.K(D.f1.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lO,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.du9(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.i,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bDL,B.x(B.a([B.X(A.HG,A.c.j(0.25),a1,a1,a1,40),A.T,D.h8q],q),A.l,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cT(a4,0,B.dA(a0.r,"count",x.S),B.U(a4).c),o=p.$ti,p=new B.bR(p,p.gJ(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f4||k===A.kr||k===A.eF
if(l===A.cv)i=j?A.bZ:D.f1
else i=l===A.dG?A.jd:A.fj
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.X(j?A.v8:A.x3,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bH(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXz(n),a1,a1,a1,a1,a1,a1,A.j2,a1,a1,a1)
e=C.hym(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.G(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.G(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kJ)f.push(new B.D(A.amJ,new B.D2(A.bI,5,4,A.br,B.a([a0.aQB("Before",m.b),a0.aQB("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.G(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hGd(n)
v.push(B.o(a1,new B.c8(A.aM,A.e,A.i,A.l,a1,A.p,a1,0,B.a([k,A.bc,new B.bz(1,A.bd,m,a1),A.ae,B.x(B.a([f,A.ax,B.o(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.G(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.z8,a1,a1,a1)],q),A.dO,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bH(A.a1,A.a1,new B.ax(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qH,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.ht(D.c2c,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.ce,a1,a1,a1),new C.dua(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.n(A.uE,a1,a3,a2,a1,a1,A.n),a1,a1,D.hBf,a1,D.bG9,a1,a1,a1)},
aQB(d,e){var w=null,v=A.c.j(0.05),u=B.l(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zm(B.cS(B.a([s,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fJY,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.n3,w,w,w)},
aZl(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tk(d))return!1
if(v===A.fT||v===A.f4)return!0
if(v===A.pa||v===A.kr)return!0
if(v===A.kK)return!0
if(v===A.h8)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXz(d){var w,v=d.f
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
$.S()
w=B.L()
w.r=D.bjY.j(0.55).gp(0)
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
C.byR.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a4(0,p,s,p+80)
n=[A.ba,A.h9,A.bv][q]
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
d=new B.iD(new B.ev("z",a0,a0,A.cN,a0,a0,a0,a0,a0,a0,new B.G(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.c1,new B.jh(1),a0,a0,a0,a0,A.c2,a0,A.cx)
d.ep()
d.a4(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aNw.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.bAQ.prototype={}
C.b2b.prototype={}
C.a0Y.prototype={
S(){return new C.aGh(new B.at(A.aw,$.aw()))},
cZH(d,e){return this.d.$2(d,e)}}
C.aGh.prototype={
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
b2h(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.elk(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.cZH(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aE(a0,A.eU,e).w
e=B.aE(a0,A.dD,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.l(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c1y,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ac(0,A.G,A.fe.j(0.5),A.J,18)],v),D.aum,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fWv,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mD,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aH(f,f,f,f,D.c2r,f,f,f,new C.eln(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.i,0,f,f)
s=g.b9i(A.eY,"You",A.cs)
r=A.aQ.j(0.15)
q=B.l(99)
q=B.A(B.a([s,new B.D(A.kX,B.o(f,D.h_G,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.hn,f,f,f),f),g.b9i(A.x_,"Your friend",A.c4)],u),A.l,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.l(16)
p=A.c.j(0.12)
o=B.l(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b75),f,f,f,f,f,f,f,f,A.Fh,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c54,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mC,f,f,f,1,f,f,!1,"\u2022",f,new C.elo(g),f,new C.elp(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cqP[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.aul:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aE:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dl,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.bd,B.ay(f,B.cU(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.G(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.i,0,A.p),f,f,A.b0,new B.n(p,f,new B.bH(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fi,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.elq(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.i,0,f,f)
r=B.A(B.a([B.X(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.m(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.i,0,f,f)
p=B.l(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h3J,A.am,o,A.aO,D.h8e,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bN(new B.n(f,f,f,p,v,D.cbX,A.n),A.bk,B.ht(D.asy,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fF,f,f,f),g.gceq(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b97,f,f,f,f,D.bHu,f,f,f),f)},
b9i(d,e,f){var w=null,v=f.j(0.1),u=B.l(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.X(d,f,w,w,w,24),A.ax,B.d(e,w,w,w,w,w,w,A.Fi,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.fi,w,w,w),1)}}
C.pB.prototype={}
C.btF.prototype={
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
if(r!=null){u=B.fD(s,A.cx,s,s,s,B.cS(s,s,s,s,s,s,s,s,s,A.aXY,B.w(r)),A.a7,A.c1,s,A.dK,A.c2)
u.ep()
r=u.b
t=r.c
r=r.a.c
u.a4(d,q.aJ(0,new B.r(t/2,r.gba(r)/2)))}},
aE(d){return d.b!=this.b}}
C.Ft.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.at8.prototype={
gkt(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsD(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hc1("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3r()
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
u=J.e4(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c0(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkt())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0p(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKi.h(0,d)
s.c=w==null?"Play to earn":w}},
bef(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkt()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.cld(),o)
v=B.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.C(v,o)
A.d.u(v,B.c0(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cIf(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atc(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.cle(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c0(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dP(e.h(0,q))
else{o=B.cc(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJp(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atc(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clf(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dP(e.h(0,p))
else{o=B.cc(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bKI(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atc(e,f)
break}},
cTk(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.br(w.at,!0,q))
o.n(0,"turnEmail",w.aEh())
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
p=B.U(q).k("N<1,ai<H>>")
q=B.C(new B.N(q,new C.clh(),p),p.k("ak.E"))
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
p=B.U(q).k("N<1,ai<H>>")
q=B.C(new B.N(q,new C.cli(),p),p.k("ak.E"))
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
default:q=B.dK(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aEh(){var w,v,u,t=this
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
atc(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cIf(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJp(d,e){var w,v,u,t,s
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
bKI(d,e){var w,v,u,t,s,r,q
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
UU(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkt())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEh():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3r(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iA(8,new C.cla(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0p(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.cg)},
d2t(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkt())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UU(q,v==null?"":v)?r.z:-1}if(!r.gkt()){v=r.d
v=v==null?null:v.d
v=!r.UU(q,v==null?"":v)}else v=!1
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
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aK(r.y[d],e,r.z)
J.aK(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aaE(2)){r.ace(1)
return!0}if(r.aaE(1)){r.ace(2)
return!0}if(r.gkt()&&r.z===2){r.bFj(f)
if(r.aaE(2)){r.ace(1)
return!0}if(r.aaE(1)){r.ace(2)
return!0}}}return!1},
ace(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bFj(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.t(m.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.t(m.y[p],o)===0&&A.o.F(p+o,2)===1)l.push(B.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.aw(w)]
J.aK(m.y[n[2]],n[3],2)
J.aK(m.y[n[0]],n[1],0)
m.z=1},
aaE(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d2v(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r3
if(!s.gkt()){w=s.d
w=w!=null&&!s.UU("tic_tac_go",w.d)}else w=!1
if(w)return D.r3
if(s.gkt())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.akU(v))return s.aVY(v,!0)
if(!A.d.q(s.at,""))return s.aVZ()
s.ax=!s.ax
if(!s.gkt()){s.x.n(0,"turnEmail",s.aEh())
s.c=s.b_T()
return D.r3}if(s.gkt()){t=s.cpD(e)
if(t>=0){s.at[t]="O"
if(s.akU("O"))return s.aVY("O",!1)
if(!A.d.q(s.at,""))return s.aVZ()
s.ax=!0}}s.c=s.gkt()?"Your turn \u2014 you are X":s.b_T()
return D.r3},
b_T(){var w=this.d
if(w==null)return"Take your turn"
return this.UU("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aVY(d,e){var w,v,u=this
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
return e?D.r4:D.JH},
aVZ(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Uj},
cpD(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.akU("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.akU("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dgp[u]
if(v[w].length===0)return w}return-1},
akU(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.doO[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4N(d){return A.d.cB(d,0,new C.clg())},
cMP(d){this.ay.push(1+d.aw(10))
if(this.a4N(this.ay)>21)return!0
return!1},
cMQ(d){var w,v,u,t=this
while(t.a4N(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4N(t.ay)
v=t.a4N(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cSG(d,e){var w,v,u,t=this
if(t.e)return D.r3
if(!t.gkt()){w=t.d
w=w!=null&&!t.UU("connect_four_pro",w.d)}else w=!1
if(w)return D.r3
if(t.gkt())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r3
if(!t.ai_(d,w))return D.r3
if(t.aas(t.fx))return t.aVW(t.fx,!0)
if(t.aRr())return t.aVX()
w=t.fx===1?2:1
t.fx=w
if(t.gkt()&&w===2){u=t.cp0(e)
if(u>=0){t.ai_(u,2)
if(t.aas(2))return t.aVW(2,!1)
if(t.aRr())return t.aVX()
t.fx=1}}t.c=t.gkt()?"Your turn \u2014 drop a red disc":t.bJo()
return D.r3},
bJo(){var w=this.d
if(w==null)return"Drop a disc"
return this.UU("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ai_(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aK(this.fr[w],d,e)
return!0}return!1},
aRr(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aVW(d,e){var w,v,u,t=this
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
return e?D.r4:D.JH},
aVX(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Uj},
cp0(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ai_(w,2)
v=r.aas(2)
r.bbV(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ai_(w,1)
u=r.aas(1)
r.bbV(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bbV(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aK(this.fr[w],d,0)
return}},
aas(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJq(w,v,d))return!0}return!1},
bJq(d,e,f){var w,v,u,t,s=new C.cl9(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfc(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0p(d)}return w.a>=w.b}}
C.au4.prototype={
S(){return new C.aH4(null,null)},
cYA(d){return this.e.$1(d)}}
C.aH4.prototype={
Z(){var w,v=this
v.a3()
w=B.bo(null,D.bCS,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aV(0,v.gb2K())
v.aAa()},
bz(d){var w
this.bK(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.cg)
this.aAa()}},
aAa(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aiW(t,u)
C.aiW(t,u)
w.a.cYA(s)
w.a.toString
w.m(new C.eST())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb2K())
w=v.d
w===$&&B.c()
w.t()
v.bAS()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aiW(j,i),g=C.aiW(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wV(new B.d4(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ac(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1v,l,l,l,3),l),A.US,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.ev(v,l,l,A.cN,l,l,l,l,l,l,D.fGM))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cD}else if(s===t){r=A.be
q=A.O}else{r=A.aA
q=A.H}d.push(new B.ev(t,l,l,A.cN,l,l,l,l,l,l,new B.G(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wV(new B.d4(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.US,l,l))}p=f===0?0:A.h.U(h/f*100)
k=A.w.j(0.35)
v=B.l(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b2J("Correct",""+h,A.bi),A.ae,m.b2J("Wrong / missed",""+(f-g),A.aA),A.b4,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fyn,l,l,l)],o),A.l,l,A.e,A.i,0,l,l),A.am,D.h0P],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.ca(new B.abj(l,B.cS(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.m(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.l(12),D.b6Z),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,D.aXX,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.i,0,A.p)},
b2J(d,e,f){var w=null,v=f.j(0.15),u=B.l(8)
return B.o(w,B.d(d+": "+e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,w,w,w,A.hn,w,w,w)}}
C.aP0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
var z=a.updateTypes(["aA<~>()","~()","H(ip,ip)","~([y2?])","Q(rd)","rd()","H(rQ,rQ)","Q(rQ)","H(rR,rR)","QE(Z)","Q(ip)","cK(afb)","a0F(Z)","a_M(Z)","afX(Z)","a82(Z)","Oz(Z)","aeO(Z,hw<ai<jq>>)","aeN(Z,H)","v(rd)","rQ(aa<@,@>)","~(Ft,at8)","Or(Z)","aa<q,@>(rQ)","rR(aa<@,@>)","aa<q,@>(kI)","aa<q,@>(rR)","Q(rR)","aa<q,@>(lY)","lY(@)","aa<q,@>(iB)","iB(@)","ip(@)","aA<~>(kI)","aa<q,@>(ip)","~(H,H)","ip(ip)","WS(Z)","aA<Q>(ai<ip>)","a0E(Z)","~(ip)","a1p(Z)","WT(Z)","q(ip)","Q(lY)","xH(bC<H,lY>)","adi(Z,H)","H(iB,iB)","ada(lY)","v(rW)","bz(JI)","a0a(Z)","~(d8{bumpWalletRevision:Q,cloudRequest:Q})","~(q,F,F,F)","F(V)","~(d8)","a0Y(Z)","~(Ft)","q(q)","a1q(Z)"])
C.cC1.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cC2(r,w,s.b,v,s.d)
t=s.e
r.b=B.dh(t,u)
v.r=new C.cBZ(r)
v.e=new C.cC_(r,w)
v.f=new C.cC0(r,w,t,u)},
$S:0}
C.cC2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ab(r)
u=B.cs(r)
s=v
q=u
p=B.H4(s,q)
if(p==null)p=new B.jT(s,q==null?B.HU(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:41}
C.cBZ.prototype={
$0(){this.a.b.a1(0)
return $.HI()},
$S:1977}
C.cC_.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaC.$0()
this.a.b.a1(0)},
$S:0}
C.cC0.prototype={
$0(){var w,v=this,u=v.b,t=B.dx(0,0,u.gbhl(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=B.cz(new B.bf(u.a-t.a),new C.cBY(w,u,v.d))},
$S:0}
C.cBY.prototype={
$0(){var w=this.c
this.a.b=B.dh(this.b,w)
w.$1(null)},
$S:0}
C.feJ.prototype={
$1(d){var w=this.a
w.m(new C.feI(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.feI.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.alS,this.b,null,null,v.$ti.k("hw<1>"))},
$S:0}
C.feL.prototype={
$2(d,e){var w=this.a
w.m(new C.feG(w,d,e))},
$S:60}
C.feG.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.alS,null,this.b,this.c,v.$ti.k("hw<1>"))},
$S:0}
C.feK.prototype={
$0(){var w=this.a
w.m(new C.feH(w))},
$S:0}
C.feH.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.yK,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fS9.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cv},
$S:15}
C.fS1.prototype={
$1(d){return d},
$S:13}
C.fyi.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.d("NGMY",w,1,A.eT,w,!1,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afL,w,v,w,w,w,w,w,v)},
$S:160}
C.fyf.prototype={
$3(d,e,f){return this.a.$0()},
$S:147}
C.fyg.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kG(w,A.z,v.d,new C.fye(v.e),A.h3,v.c,!0,v.b,null,null,v.a)},
$S:1978}
C.fye.prototype={
$3(d,e,f){return this.a.$0()},
$S:147}
C.fyh.prototype={
$3(d,e,f){return this.a.$0()},
$S:147}
C.dlZ.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dm9.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dmr.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dms.prototype={
$1(d){return this.a.Ks()},
$S:12}
C.dmh.prototype={
$0(){var w=J.b9(this.b,new C.dmg(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmg.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmi.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,aa<q,@>>")
v=B.C(new B.N(v,new C.dmf(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmf.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmk.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,aa<q,@>>")
v=B.C(new B.N(v,new C.dmj(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmj.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmc.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgu(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arI(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dma(t))
case 3:if(t.c!=null)t.m(new C.dmb(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:47}
C.dma.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmb.prototype={
$0(){return this.a.d++},
$S:0}
C.dmd.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dme.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dm4.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.ivh(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aiK(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ks(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dm5.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.ik0(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aiK(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Ks(),$async$$0)
case 3:t.Je(A.d.dM(t.y,new C.dm2(s),new C.dm3(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dm2.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dm3.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dm6.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dm7.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dm8.prototype={
$0(){return this.a.Je(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dm1.prototype={
$0(){return this.a.c6S(this.b)},
$S:0}
C.dm0.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.ivL(u,w.b,new C.dm_(v,w))},
$S:0}
C.dm_.prototype={
$2(d,e){return this.a.ajn(this.b,d,e)},
$S:627}
C.dmq.prototype={
$2(d,e){if(d)return
this.a.aVA()},
$S:135}
C.dmo.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b2a(w.a.c.a),new C.dmn(w,this.b,this.c),null,null,x.gH)},
$S:1980}
C.dmn.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.l(12)
v=B.l(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aF(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k7,B.bJU(A.d3,B.X(A.h4,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dmm(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:1981}
C.dmm.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fOq(s.c.a,s.e).eF(new C.dml())
w=2
return B.b(C.bHc(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dml.prototype={
$1(d){},
$S:31}
C.dmp.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_y.prototype={
$0(){var w=this.a
return B.M6(w.a.c.a,new C.e_x(w))},
$S:83}
C.e_x.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_z.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bg=t.aj()
v.bv()
w.m(new C.e_w())},
$S:0}
C.e_w.prototype={
$0(){},
$S:0}
C.e_A.prototype={
$2(d,e){var w,v=this.a
if(!C.cgu(v.a.c)){if($.hbX.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hbY(this.b,v.x,w)
return!1}C.arI(v.a.c.a)}if(B.M6(v.a.c.a,new C.e_v(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJP()
w=v.a
w.toString
w.hK(new B.d8(A.o.v(1000*Date.now()),v.a.c.a,d,A.kr,A.fx,e,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1982}
C.e_v.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e_B.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d8(u,s.c.a,d,A.h8,A.fx,e,v,v,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.h.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vc(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1983}
C.dlT.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dlW.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dlX.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dlY.prototype={
$1(d){var w=null,v=this.a,u=B.fu(w,w,v.e===d?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f6,B.iy(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dlV(v,d),u),w),1)},
$S:235}
C.dlV.prototype={
$0(){var w=this.a
return w.m(new C.dlU(w,this.b))},
$S:0}
C.dlU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dnL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnO.prototype={
$1(d){this.a.cpZ()
return null},
$S:12}
C.dnP.prototype={
$1(d){return this.a.cGm()},
$S:12}
C.dnQ.prototype={
$1(d){this.a.a3S()
return null},
$S:12}
C.dnR.prototype={
$1(d){this.a.akt()
return null},
$S:12}
C.dnS.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.dnM(v))
w=v.as
if(w!=null)w.a1(0)
v.FN()
return}v.m(new C.dnN(v))},
$S:12}
C.dnM.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dnN.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dn0.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dn1.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dnu.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dnv.prototype={
$0(){},
$S:0}
C.dng.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnh.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dni.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnj.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dnk.prototype={
$0(){},
$S:0}
C.dmt.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dn_.prototype={
$0(){var w=this.a
w.at=this.b
w.b8N()},
$S:0}
C.dnw.prototype={
$0(){},
$S:0}
C.dnF.prototype={
$0(){},
$S:0}
C.dnt.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dns(w))},
$S:0}
C.dns.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dmY.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dmZ.prototype={
$0(){},
$S:0}
C.dnA.prototype={
$1(d){return d==null},
$S:221}
C.dnB.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dnC.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dmu.prototype={
$1(d){return d==null},
$S:221}
C.dmv.prototype={
$0(){return this.a.bg++},
$S:0}
C.dmw.prototype={
$0(){},
$S:0}
C.dn9.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dna.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nc.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dnb.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dn8(w))},
$S:11}
C.dn8.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dnl.prototype={
$0(){return this.a.y1++},
$S:0}
C.dnm.prototype={
$0(){},
$S:0}
C.dnn.prototype={
$0(){return this.a.y2++},
$S:0}
C.dno.prototype={
$0(){},
$S:0}
C.dnp.prototype={
$0(){return this.a.bd++},
$S:0}
C.dnq.prototype={
$0(){},
$S:0}
C.dnz.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnc.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnd.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dne.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnf.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dnD.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dnE.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dmx.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmy.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dmz.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dmA.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dnx.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dny.prototype={
$0(){var w,v=this.a;++v.x2
v.aRd()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dn7.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dnr.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dn5.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dn6.prototype={
$2(d,e){return d+e.length},
$S:189}
C.dnG.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dnH.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dnI.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dnK.prototype={
$1(d){var w=this.a,v=w.Ps(),u=v<=0?0:A.h.D(w.AP()/v,0,1),t=w.a.x,s=t*1.46
return new C.Or(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dnJ.prototype={
$1(d){return d.bW(0.85)},
$S:176}
C.dn4.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nc.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j2,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iz(!0,w,w,A.y,new B.hM(v,6,6,1,r),new C.dn3(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
$S:159}
C.dn3.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nc.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nc.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.aut:D.c9E,l=B.l(10),k=B.l(10)
if(p)w=m
else if(o)w=m
else w=n?D.aut:D.aum
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.X(D.cEz[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.m(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.n(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dn2(r,e),s,s,s,s,s,s,s)},
$S:196}
C.dn2.prototype={
$0(){return this.a.cpj(this.b)},
$S:0}
C.dmN.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bi.l()>>>16&255,A.bi.l()>>>8&255,A.bi.l()&255),r=B.l(10),q=B.l(10),p=B.l(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.d(t?"":u,w,w,w,w,w,w,D.aWT,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmM(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:612}
C.dmM.prototype={
$0(){return this.a.cFB(this.b)},
$S:0}
C.dmO.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aF(!1,A.a3,!0,B.l(10),B.aM(!1,B.l(10),!0,B.o(A.z,B.d(u,w,w,w,w,w,w,D.aWT,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmL(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:612}
C.dmL.prototype={
$0(){return this.a.cFA(this.b)},
$S:0}
C.dmP.prototype={
$1(d){return this.a.m(new C.dmK())},
$S:29}
C.dmK.prototype={
$0(){},
$S:0}
C.dmQ.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aiW(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pB()
if(u.ghR()&&D.nc.q(0,u.a.e)){u.a27()
u.nm(!0)}else{v=A.d.cB(u.cy,0,new C.dmI())
t=u.dx
if(t>=v)u.uA("All 5 sentences perfect \u2014 full payout!")
else u.Fc(t/v,t,v)}}else{if(u.ghR()&&D.nc.q(0,u.a.e))u.a27()
u.m(new C.dmJ(u))}},
$S:0}
C.dmI.prototype={
$2(d,e){return d+e.length},
$S:189}
C.dmJ.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.cg)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dmR.prototype={
$1(d){var w=null,v=B.fu(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.co,w,w,w,w,w,w,w)
return new B.D(A.cw,new B.a5(1/0,w,B.iy(B.d(d,w,w,w,w,w,w,L.aWM,w,w,w),new C.dmH(this.a,d),v),w),w)},
$S:145}
C.dmH.prototype={
$0(){return this.a.b89(this.b)},
$S:0}
C.dmS.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pY,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iz(!0,v,v,A.y,new B.hM(3,4,4,1,u),new C.dmG(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
$S:159}
C.dmG.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5W(e),p=r===0
if(p)w=A.L
else w=q?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.l(10)
s=p?t:new C.dmC(s,e)
u=B.l(10)
p=p?"":""+r
return B.aF(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:82}
C.dmC.prototype={
$0(){return this.a.cFz(this.b)},
$S:0}
C.dmT.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dmF(q,d)
p=B.l(16)
if(o)w=D.a6y[d]
else{w=D.a6y[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.l(16)
u=o?B.a0(A.h.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6y[d]
t=B.a([new B.ac(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b0,new B.n(w,r,u,v,t,r,A.n),P.Cz,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1986}
C.dmF.prototype={
$0(){return this.a.cFC(this.b)},
$S:0}
C.dmU.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pY,t,t,t)
w=B.d("Move "+r.aAQ()+"/"+C.hiG(),t,t,t,t,t,t,A.Fj,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.m(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iz(!0,t,t,A.y,new B.hM(3,6,6,1,s),new C.dmE(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:159}
C.dmE.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.l(10),s=B.l(10),r=u?A.bi:D.bmk,q=u?A.ew:D.bwW
return B.aF(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dmB(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:82}
C.dmB.prototype={
$0(){return this.a.cFw(this.b)},
$S:0}
C.dmV.prototype={
$0(){return this.a.b89(this.b[this.c])},
$S:0}
C.dmW.prototype={
$0(){return this.a.m(new C.dmD())},
$S:0}
C.dmD.prototype={
$0(){},
$S:0}
C.dmX.prototype={
$2(d,e){this.a.a0S(d,e)
return null},
$S:z+21}
C.drk.prototype={
$1(d){return this.a.cpO(this.b,d)},
$S:1987}
C.drj.prototype={
$0(){var w=this
return w.a.a.cZ8(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cO3.prototype={
$1(d){var w=this.a
w.a2n()
w.uJ()},
$S:7}
C.cNo.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNe.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNf.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNy.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNv.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNw.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNx.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNq.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cNp(w))},
$S:0}
C.cNp.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNg.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNt.prototype={
$1(d){var w=this.a
return new C.WS(w.fx,new C.cNs(w),w.a.f.r,null)},
$S:z+37}
C.cNs.prototype={
$1(d){return this.bnU(d)},
bnU(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chu(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cNr(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNr.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNR.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cNL.prototype={
$1(d){this.a.uJ()
return null},
$S:12}
C.cNO.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.aq(v.gaYz().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uJ()
return}v.m(new C.cNN())},
$S:12}
C.cNN.prototype={
$0(){},
$S:0}
C.cNK.prototype={
$1(d){this.a.FV()
return null},
$S:12}
C.cNM.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cNJ.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h1(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h1(0,0),0,!1):w)},
$S:43}
C.cNl.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h1(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h1(0,0),0,!1):w)},
$S:43}
C.cNm.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNn.prototype={
$0(){var w=this.a
if(w.c!=null)w.a33(!0)},
$S:11}
C.cNj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNk.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.UY(this.b)},
$S:7}
C.cNB.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e6,A.kV)},
$S:7}
C.cNu.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNC.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cND.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9E()
w.r.bP(0,A.cg)
w.at=!0},
$S:0}
C.cNE.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cNF.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cNG.prototype={
$0(){var w,v=this.b,u=B.T(x.N,x.z)
J.aK(u,"role","ai")
J.aK(u,"text",this.c)
J.aK(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b9(w.b,v.gcoI(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
J.aK(u,"phoneActions",w)}v.f.push(u)
v.b9E()},
$S:0}
C.cNH.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cNI.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNz.prototype={
$1(d){return this.bnV(d)},
bnV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.as4(q,new C.rQ("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atj()
case 4:k.c.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:467}
C.cNQ.prototype={
$1(d){return this.bnW(d)},
bnW(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:467}
C.cNA.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cO2.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.acR(v-1)},
$S:0}
C.cNW.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cNZ.prototype={
$1(d){var w=this.a
w.m(new C.cNT(w,d))
if(d===0)w.a33(!0)},
$S:29}
C.cNT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNX.prototype={
$2$size(d,e){return C.hgM(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1988}
C.cNY.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hus(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.asX(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cNU(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.as2(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uJ(),$async$$0)
case 15:p.m(new C.cNV(p))
p.acR(0)
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
C.cNU.prototype={
$2(d,e){return this.bnX(d,e)},
bnX(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3C(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:128}
C.cNV.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO0.prototype={
$2(d,e){return A.ae},
$S:38}
C.cO_.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6F:D.a5V)[e],w,w,w,w,w,w,A.q0,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cNS(v,e)
return B.mZ(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:585}
C.cNS.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6F:D.a5V
w.r.sb4(0,v[this.b])
w.nl()
return null},
$S:0}
C.cO1.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNh.prototype={
$0(){return this.a.acR(0)},
$S:0}
C.cNP.prototype={
$0(){return this.a.acR(this.b)},
$S:0}
C.cNi.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3c,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.m(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a1_,B.x(B.a([u,A.af,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.m(v,v,t?A.aE:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bKm(t[e],w.c)
return u.aRR(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c4A.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.h.M(d)
return new B.V(B.h1(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bj(J.k(d))
return v==null?null:v.bU()},
$S:343}
C.c4z.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:600}
C.c4C.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bj(J.k(d))
w=w==null?null:w.bU()}return w},
$S:343}
C.c4B.prototype={
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
s=B.a5Z(A.a7u,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a5Z(A.a5T,J.k(r==null?"system":r))
q=B.aV(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a5Z(A.IQ,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d8(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:571}
C.dHQ.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dHR.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dHH.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.br(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dHF.prototype={
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
return B.b(C.haY(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pC(o.a.c,!1),$async$$0)
case 4:o.li(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abj(),$async$$0)
case 3:q=e
if(q==null){r.li("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).ce(B.ee(new C.dHO(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pC(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHO.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0E(w.b,w.a,u,v,null)},
$S:z+39}
C.dHE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i_R(q)?3:4
break
case 3:w=5
return B.b(t.a.Fr(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_I(q,s.a.c),$async$$0)
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
case 9:s.li(C.c4E(s.a.c))
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
return B.b(s.aTb(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHD.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.br(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dHG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aeN(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hrd(q)
if(s==null){r.li("Could not read that backup file.")
w=1
break}if(!C.c4D(s,r.a.c,null)){r.li(C.c4E(r.a.c))
w=1
break}w=4
return B.b(r.bMF(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHN.prototype={
$1(d){var w=null,v=new B.at(A.aw,$.aw()),u=B.O(d).ax.a===A.I,t=u?A.iJ:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.m(w,w,u?A.ab:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.l(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.dHL(d),w,w),B.bJ(D.fPV,w,new C.dHM(d,v),B.bp(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h43,w)},
$S:18}
C.dHL.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHM.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dHI.prototype={
$1(d){return D.hIL},
$S:z+12}
C.dHJ.prototype={
$0(){return this.a.Fs(A.a.i(this.b))},
$S:1}
C.dHK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_I(t.b,r.a.c),$async$$0)
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
case 7:r.li(C.c4E(r.a.c))
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
return B.b(r.aTb(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHS.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHW.prototype={
$1(d){this.a.S_()
return null},
$S:12}
C.dHT.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dHU.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fx(v.gayU()))
this.b.K(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gayU()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dHV.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHX.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.Y(s,"NGMYSNAP1|")||A.a.Y(s,"NGMYLOCALSYNC1|")||A.a.Y(s,"NGMYLOCALLIVE1|")||A.a.Y(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:155}
C.fCV.prototype={
$1(d){return D.hFa},
$S:z+13}
C.fE7.prototype={
$1(d){return new C.afX(this.a,this.b,this.c,null)},
$S:z+14}
C.f8e.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f8f.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dgM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.dgJ.prototype={
$2(d,e){return e.amI(e.a.toUpperCase())},
$S:1989}
C.dgK.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dgL.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5m.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aU(D.dxT,A.a.gkh(v))},
$S:4}
C.fOk.prototype={
$1(d){return d.a===this.a},
$S:1990}
C.fOl.prototype={
$0(){return A.d.gH(A.DY)},
$S:1991}
C.dOj.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dOi(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8F("Time's up")},
$S:12}
C.dOi.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dOa.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOf.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dOc(w,d,e))},
$S:244}
C.dOc.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOg.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dOb(w))
w.czK(!0)},
$S:0}
C.dOb.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOh.prototype={
$1(d){this.a.b8F(d)
return null},
$S:2}
C.dOd.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOe.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.cdD.prototype={
$1(d){return D.dVH},
$S:z+15}
C.cdC.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fEX.prototype={
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
$S:1992}
C.fEY.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.h.M(w)
return w==null?0:w},
$S:716}
C.fEZ.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:189}
C.fVC.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hD3(w,v):C.hh7(w,v)
if(u===3)++w.f
C.aht(w,this.c,u)
return u},
$S:1993}
C.fVE.prototype={
$0(){return C.hD3(this.a,this.b)},
$S:93}
C.fVD.prototype={
$0(){return C.hh7(this.a,this.b)},
$S:93}
C.dHs.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dHr(w))},
$S:0}
C.dHr.prototype={
$0(){this.a.r=1+A.o.F(B.FO(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dHt.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.h.bh(u*10)
if(w!==v.w)v.m(new C.dHq(v,w))}},
$S:0}
C.dHq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cg3.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.dv(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),1)},
$S:1994}
C.cg2.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.h.ad(e,2),w,w,w,w,w,w,A.mD,w,w,w)},
$S:469}
C.cgv.prototype={
$1(d){return new C.Oz(this.a,this.b,!1,null,null)},
$S:z+16}
C.e78.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.l(e?0:30)
e=e?g:B.K(A.b8.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ac(2,A.G,A.b8.j(0.35),A.J,36),new B.ac(0,A.G,A.bE.j(0.175),A.J,24)],x.V)
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
o.push(B.o(g,D.bZi,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ac(0,A.G,A.b8.j(0.55),A.cz,18)],n),A.vi,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.og(A.jV,D.h1z,new C.e74()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.m(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cD,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.bZ.j(0.12)
k=B.l(18)
j=B.K(A.bZ.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.X(D.bTf,A.bZ.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.m(g,g,A.bZ.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.i,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.m(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e75(),B.U(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.n),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.l(18)
k=B.K(A.b8.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azI(A.hp,"Unlimited games with an active plan",A.ba),A.P,f.azI(A.ke,"Weekday check-ins grow your balance",A.b8),A.P,f.azI(A.ml,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.n),g,g,g,g,A.bH,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bN(new B.n(g,g,g,B.l(16),B.a([new B.ac(0,A.G,A.bE.j(0.45),A.cz,16)],n),A.vi,A.n),A.bk,B.de(D.c1O,g,D.fXW,new C.e76(f,a0),B.bp(A.L,g,g,g,A.c,A.KO,g,A.L,new B.ba(B.l(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bP(!1,B.d(n,g,g,g,g,g,g,B.m(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e77(f,a0),g,g))
if(f.a.e)o.push(A.b4)
h=B.o(g,B.bv(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.ccz,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,W.a1s,g,A.d7,g,g,g)},
$S:814}
C.e74.prototype={
$1(d){return D.cbt.aD(0,d)},
$S:75}
C.e75.prototype={
$1(d){var w=null
return new B.D(A.eP,B.A(B.a([B.X(A.a3q,A.bZ.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$S:145}
C.e76.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e77.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fQI.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:662}
C.fQv.prototype={
$1(d){$.aU.x1$.push(new C.fQu(this.a))},
$S:7}
C.fQu.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fBe.prototype={
$1(d){return C.hDb(this.a,this.b+1)},
$S:7}
C.fS4.prototype={
$2(d,e){var w=B.aE(d,A.bX,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:142}
C.cgJ.prototype={
$1(d){return d.r===this.a},
$S:272}
C.cgK.prototype={
$1(d){var w=$.aTN(),v=w.a
w.sp(0,v+1)
return v},
$S:1995}
C.cgL.prototype={
$1(d){},
$S:31}
C.cgI.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:272}
C.cgH.prototype={
$1(d){return d.f.cb(this.a)},
$S:272}
C.fxY.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.h3E.prototype={
$1(d){return C.a8H(this.a)},
$S:113}
C.h3F.prototype={
$1(d){var w=$.aTN()
w.sp(0,w.a+1)},
$S:28}
C.h3G.prototype={
$1(d){},
$S:31}
C.h3H.prototype={
$1(d){return new B.kj($.aTN(),new C.h3D(this.a,this.b),null,null,x.am)},
$S:1996}
C.h3D.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arO(this.a,!1),new C.h3C(w),w,null,x.gv)},
$S:1997}
C.h3C.prototype={
$2(d,e){var w=e.b
return new C.aeO(w==null?this.a:w,null)},
$S:z+17}
C.e7b.prototype={
$1(d){return d.c},
$S:272}
C.e7c.prototype={
$1(d){return d.gbkt()},
$S:1998}
C.e7d.prototype={
$2(d,e){return d+e},
$S:89}
C.e7e.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7g.prototype={
$2(d,e){return A.P},
$S:38}
C.e7f.prototype={
$2(d,e){return new C.aeN(J.t(this.a.c,e),null)},
$S:z+18}
C.e7a.prototype={
$1(d){return d==null?"\u2026":C.bDy(d)},
$S:1999}
C.h3K.prototype={
$3(d,e,f){var w=this
return B.qq(new C.aCM(w.a,w.b,w.c,w.d,new C.h3I(d,w.e),new C.h3J(d,w.f),null))},
$C:"$3",
$R:3,
$S:91}
C.h3I.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hGB(this.b)},
$S:0}
C.h3J.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hGB(this.b)},
$S:0}
C.dnU.prototype={
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
A.d.u(w,new B.N(t,new C.dnT(),B.U(t).k("N<1,v>")))}t=h.d
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
m=B.a([new B.ac(6,A.G,(h.a.c?A.dL:A.dP).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dr()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.ak_,A.us],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fz(A.z,B.o(i,D.bfr,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ac(4,A.G,A.d3.j(0.6),A.J,24),new B.ac(0,A.G,A.w.j(0.3),A.dp,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5j)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.Wt,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.l(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fRH,A.P,B.o(i,B.d(r,i,i,i,i,i,i,D.fHw,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Os,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fKx,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dV(D.fP9,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.co,i,i,D.b6F,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(E.aYh,i,n,B.bp(A.c,i,i,i,h.c?A.ep:A.er,i,A.co,i,i,i,i,i)),1)],g),A.l,i,A.e,A.i,0,i,i))
w.push(B.e1(A.z,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.ao7,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:120}
C.dnT.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d1(B.eK(A.z,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cir.prototype={
$2(d,e){var w=null,v=this.a,u=C.i_g(B.M6(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2000}
C.ciq.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:63}
C.c5T.prototype={
$0(){},
$S:0}
C.fwU.prototype={
$1(d){return A.o.v(d)},
$S:79}
C.e_E.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e_F.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e_G.prototype={
$0(){var w=this.a
return w.w=D.T9[w.d.aw(5)]},
$S:0}
C.e_H.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e_J.prototype={
$0(){var w=this.a
return w.m(new C.e_D(w))},
$S:0}
C.e_D.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_K.prototype={
$0(){var w=this.a
return w.m(new C.e_C(w))},
$S:0}
C.e_C.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_N.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e_O.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bi:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.l(10)
t=t.y?u:new C.e_M(t,d)
w=B.l(10)
v=A.h.ad(d,0)
return B.E(new B.D(A.j9,B.aF(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.m(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:2001}
C.e_M.prototype={
$0(){var w=this.a
return w.m(new C.e_L(w,this.b))},
$S:0}
C.e_L.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.cg)},
$S:0}
C.e7m.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cK.gco().aK(this.c)},
$S:0}
C.e7n.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7i.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.l(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f1.j(0.5):A.L,A.r,1),q=B.X(e,u?D.f1:A.aE,w,w,w,20)
return B.E(B.ay(w,B.cU(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.m(w,w,u?A.c:A.aE,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),w,w,A.b0,new B.n(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7k(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2002}
C.e7k.prototype={
$0(){var w=this.a
return w.m(new C.e7j(w,this.b))},
$S:0}
C.e7j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7l.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JJ(this.b,v)},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
return w.JJ(w.gauc(),"Code")},
$S:0}
C.che.prototype={
$1(d){return C.hWr(B.a1(d,x.N,x.z))},
$S:z+20}
C.chf.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chb.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chc.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chd.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chg.prototype={
$1(d){var w=d.c
return!w.d5(this.a.bS(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c90.prototype={
$1(d){return C.hWs(B.a1(d,x.N,x.z))},
$S:z+24}
C.c91.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c8Z.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c9_.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c93.prototype={
$1(d){var w=d.b
return!w.d5(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chp.prototype={
$1(d){return d.aj()},
$S:z+28}
C.cho.prototype={
$1(d){return C.htx(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chn.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chm.prototype={
$1(d){return C.hZU(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chr.prototype={
$1(d){return C.hZT(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chs.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.cht.prototype={
$1(d){return d.aj()},
$S:z+34}
C.ebs.prototype={
$1(d){return d.bfS(B.br(d.e,!0,x.u))},
$S:z+36}
C.ebt.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ebn.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eb5.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.eb6.prototype={
$1(d){return new C.QE(this.a,null)},
$S:z+9}
C.eb7.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.eb4(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JT()}},
$S:0}
C.eb4.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebj.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebk.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.ipS(v,w[0],w[3])
t.JT()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ebl.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebd.prototype={
$1(d){return new C.QE(this.a,null)},
$S:z+9}
C.ebe.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebc.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.ebi.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JT()},
$S:0}
C.ebh.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1q(u[w],new C.ebg(v,w),null)},
$S:z+59}
C.ebg.prototype={
$1(d){var w=this.a
return w.m(new C.ebf(w,this.b,d))},
$S:z+40}
C.ebf.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eb9.prototype={
$0(){var w=this.a
return w.m(new C.eb8(w))},
$S:0}
C.eb8.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eba.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eP,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.m(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cD,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:127}
C.ebb.prototype={
$1(d){return this.a.a2J()},
$S:2}
C.ebr.prototype={
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
q=B.o(n,B.X(A.aqW,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.b1(r).j(0.12)
o=B.l(8)
o=B.o(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.n),n,n,n,n,A.hB,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.da,B.aF(!1,A.a3,!0,u,B.dI(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awE(q,e,!0,n),n,n,n,n,new C.ebo(m,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CE(n,n,n,n,n,new C.ebp(),A.J,new C.ebq(m,e),A.cq,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bl(w.a,x.W))},
$S:127}
C.ebq.prototype={
$1(d){var w=this
if(d==="edit")w.a.abP(w.b)
if(d==="questions")w.a.a_1(w.b)
if(d==="delete")w.a.bPC(w.b)},
$S:2}
C.ebp.prototype={
$1(d){return D.d5m},
$S:149}
C.ebo.prototype={
$0(){return this.a.a_1(this.b)},
$S:0}
C.cWO.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.n),s,s,s,s,A.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cWN(r,d),s,s,s,s,s,s,s)},
$S:2003}
C.cWN.prototype={
$0(){var w=this.a
return w.m(new C.cWL(w,this.b))},
$S:0}
C.cWL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWP.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.ay(w,B.hg(u,w,t===d?D.c2B:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cWM(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:505}
C.cWM.prototype={
$0(){var w=this.a
return w.m(new C.cWK(w,this.b))},
$S:0}
C.cWK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cWQ.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cWR.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cQy(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f38.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f39.prototype={
$1(d){return new C.a1p(this.a,null)},
$S:z+41}
C.f3f.prototype={
$2(d,e){return A.P},
$S:38}
C.f3e.prototype={
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
r=B.bv(q,B.aSn(n,A.bY,36,A.qN,l?A.bP:A.an,r,48),A.aq)}else r=B.X(D.a3a,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aF(!1,A.a3,!0,u,B.dI(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f3c(m,w,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c0S,n,n,n,new C.f3d(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:82}
C.f3d.prototype={
$0(){var w=this.a
w.m(new C.f3a(w,this.b))
w.azL()},
$S:0}
C.f3a.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f3c.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b3W(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f3b(t,u.c,s))
t.azL()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f3b.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f34.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f32.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WT(w,"Answer Document",null)},
$S:z+42}
C.f33.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f36.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).N(new C.iB(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f37.prototype={
$1(d){var w=this.a
return w.m(new C.f35(w,d))},
$S:9}
C.f35.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chj.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fSD.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ec2.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ebJ.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lY("image","",this.b,null))},
$S:0}
C.ebO.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lY("video","","data:video/mp4;base64,"+A.cK.gco().aK(this.b),null))},
$S:0}
C.ebM.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7c,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7b,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.em(B.a([B.bP(!1,A.ds,w,w,!0,w,w,w,new C.ebK(d),w,w),B.bJ(D.h11,w,new C.ebL(d),w)],v),w,w,w,u,w,w,w,w,D.fOm,w)},
$S:18}
C.ebK.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ebL.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ebN.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lY("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ebF.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ebG.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebH.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ebI.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebT.prototype={
$0(){var w=this.a.bIQ()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ebU.prototype={
$0(){return this.a.azM("**","**")},
$S:0}
C.ebV.prototype={
$0(){return this.a.azM("*","*")},
$S:0}
C.ebW.prototype={
$0(){return this.a.azM("__","__")},
$S:0}
C.ebX.prototype={
$0(){return this.a.b20("## Section title")},
$S:0}
C.ebY.prototype={
$0(){return this.a.b20("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ebZ.prototype={
$0(){},
$S:0}
C.ec_.prototype={
$0(){var w=this.a
w.m(new C.ebS(w))},
$S:0}
C.ebS.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZb)},
$S:0}
C.ec0.prototype={
$0(){var w=this.a
w.m(new C.ebR(w))},
$S:0}
C.ebR.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZc)},
$S:0}
C.ec1.prototype={
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
return B.E8(v,w,A.atf,t,v,new C.ebQ(this.a,d),v)},
$S:z+45}
C.ebQ.prototype={
$0(){var w=this.a
return w.m(new C.ebP(w,this.b))},
$S:0}
C.ebP.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.ebC.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b22},
$S:0}
C.ebD.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hGe},
$S:0}
C.ebu.prototype={
$0(){var w=this.a
w.d=D.b21
w.f=w.e=null},
$S:0}
C.ebv.prototype={
$0(){var w=this.a
w.d=D.b22
w.f=null},
$S:0}
C.ebE.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebx.prototype={
$2(d,e){var w=this.a,v=w.gb9F()[e]
return new C.adi(v,this.b,new C.ebw(w,v),null)},
$S:z+46}
C.ebw.prototype={
$0(){return this.a.cdM(this.b.a)},
$S:0}
C.ebz.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ebB.prototype={
$2(d,e){return A.T},
$S:38}
C.ebA.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uo:A.c,p=B.l(16),o=B.l(16),n=B.l(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ac(0,A.G,A.w.j(r?0.28:0.06),A.dM,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.l(10)
v=B.l(10)
k.push(B.bv(w,B.aSn(v,A.bY,52,D.a3a,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.l(12)
k.push(B.o(t,B.X(D.a3a,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bc)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.m(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eI,r?A.bP:A.an,t,t,t,22))
return B.aF(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.eby(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:82}
C.eby.prototype={
$0(){return this.a.ckL(this.b)},
$S:0}
C.chl.prototype={
$1(d){return new C.ada(d,this.a,null)},
$S:z+48}
C.cQi.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oj(v==null?w.b:v)
if(u!=null)B.iP(u,A.fo,null)},
$S:0}
C.cQj.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQk.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nF,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:145}
C.dsd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsf.prototype={
$0(){return this.a.m(new C.dse(this.b))},
$S:0}
C.dse.prototype={
$0(){var w=this.a
return w.a.f?w.hi(0):w.qv(0)},
$S:0}
C.fwC.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecg.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Er)w.z=v
else w.Q=v},
$S:0}
C.ec7.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.ck,A.eW)},
$S:7}
C.ec9.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:100}
C.eca.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.cg)
w.r=!0},
$S:0}
C.ecb.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecc.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:156}
C.ecd.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ece.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ecf.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ec8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n0(l,A.bE.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bT,B.A(B.a([new B.a5(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.m(l,l,this.b?A.aE:A.dZ,l,l,l,l,l,l,l,l,12,A.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aE(k,A.bX,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ac(0,A.G,(u?A.bE:A.aD).j(0.22),A.i3,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bm:A.bq
n=u?13.5:15
m=u?A.bo:A.cL
return new B.bK(t,l,l,B.o(l,B.d(w,l,l,l,l,l,l,B.m(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cD,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.be(A.iq,A.iq,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kA,A.jr,l,l,l),l)},
$S:42}
C.ecn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([D.aib,A.a_,A.ol],t):B.a([A.qk,A.qi,A.qj],t)
w=B.a([new B.ac(-4,A.G,A.aD.j(0.35+w*0.25),A.dp,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dr()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fz(A.z,B.o(o,D.bYk,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eGD,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.og(A.jV,D.h5P,new C.eck())
p=x.p
m=B.a([B.A(B.a([q,A.bc,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.m(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.l,o,A.e,A.i,0,o,o),A.af,B.A(B.a([n.axV(D.Er,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.axV(D.aMi,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.axV(D.Es,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.Es){t=B.a([A.P,n.cE9(u)],p)
if(n.w){q=n.x===D.Er?D.a7p:D.a6t
p=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.ecl(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bE.j(0.22),A.aD.j(0.12)],t)
q=B.l(12)
p=B.K(A.bE.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.o(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.m(o,o,u?A.ix:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.C(new B.N(D.dpV,new C.ecm(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.i,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.n),o,o,o,H.an_,H.ana,o,o,o)},
$S:85}
C.eck.prototype={
$1(d){return D.cbZ.aD(0,d)},
$S:75}
C.ecl.prototype={
$1(d){return this.a.cEa(d,this.b)},
$S:z+49}
C.ecm.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMk?6:0,m=o?5:0,l=B.l(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.l(12)
p=p.r?q:new C.ecj(p,d)
s=C.i0o(d)
if(o)r=A.c
else r=v?A.ab:A.bq
r=B.d(s,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i0p(d)
if(o)v=A.ab
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aF(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(I.Ot,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.m(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.ecj.prototype={
$0(){var w=this.a
return w.m(new C.eci(w,this.b))},
$S:0}
C.eci.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ecp.prototype={
$0(){var w=this.a
return w.m(new C.eco(w))},
$S:0}
C.eco.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ec6.prototype={
$0(){var w=this.a
return w.m(new C.ec5(w,this.b))},
$S:0}
C.ec5.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Es
if(v===D.aMi&&w.Q==null)w.Q=A.d.gH(D.a6t).a},
$S:0}
C.ecq.prototype={
$0(){return this.a.czA(this.b.a)},
$S:0}
C.ech.prototype={
$0(){return this.a.JK(this.b)},
$S:0}
C.ec3.prototype={
$1(d){return this.a.b21()},
$S:2}
C.ec4.prototype={
$0(){return this.a.b21()},
$S:0}
C.h4B.prototype={
$1(d){var w=this
return new C.a0a(w.a,w.b,w.c,new C.h4A(w.d),null)},
$S:z+51}
C.h4A.prototype={
$0(){return J.lL(this.a.bm())},
$S:0}
C.dpy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bkL()},
$S:28}
C.dpz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aE(m,A.bX,u).w
s=Math.cos(v)
u=B.aE(m,A.bX,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e9:A.hp
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d1(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:334}
C.dpE.prototype={
$0(){},
$S:0}
C.dpD.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nl.az(0,A.h.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.dr()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fE(t*0.08)
w.k5(0.12)
return B.e1(A.z,B.fz(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.dpA.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ac(6,A.G,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n0(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cX(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:120}
C.dpB.prototype={
$1(d){return D.cc2.aD(0,d)},
$S:75}
C.dpC.prototype={
$0(){var w=this.a
w.a.bkL()
w.a.e.$0()},
$S:0}
C.cjk.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fT)if(d.x===A.dG){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjx.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqE.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.erk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QP()},
$S:7}
C.erl.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ub||w===A.uc)return
this.a.Fm()},
$S:12}
C.erm.prototype={
$1(d){this.a.cGl()},
$S:12}
C.er2.prototype={
$0(){this.a.Ke(this.b.d,!1)},
$S:0}
C.er3.prototype={
$0(){},
$S:0}
C.er4.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.er5.prototype={
$0(){},
$S:0}
C.er6.prototype={
$1(d){return d.a===this.a},
$S:15}
C.er7.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.er8.prototype={
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
C.eqY.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.br(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.br(v[1],!0,x.N)
w.Q1()
w.a9W()},
$S:0}
C.eqF.prototype={
$0(){this.b.Ke(this.c.d+this.a.a,!1)},
$S:0}
C.eqZ.prototype={
$1(d){var w=d.d
return(w===A.fT||w===A.f4)&&d.x===A.dG},
$S:15}
C.er_.prototype={
$1(d){return d.a},
$S:178}
C.er0.prototype={
$1(d){return d.a===this.a},
$S:15}
C.er1.prototype={
$0(){},
$S:0}
C.eqJ.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.br(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.br(v[0],!0,x.N)},
$S:0}
C.eqK.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.eqS.prototype={
$0(){},
$S:0}
C.eqP.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.eqQ.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqR.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqT.prototype={
$0(){return this.a.z=!0},
$S:0}
C.eqU.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w0(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.eqV.prototype={
$0(){return this.a.z=!1},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
return w.m(new C.eqW(w))},
$S:0}
C.eqW.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqL.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqM.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erc.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erd.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.erh.prototype={
$0(){var w=this.a
return w.m(new C.era(w))},
$S:0}
C.era.prototype={
$0(){return this.a.y=1},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.m(new C.er9(w))},
$S:0}
C.er9.prototype={
$0(){return this.a.y=2},
$S:0}
C.erj.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.ere.prototype={
$2$cloudRequest(d,e){return this.a.b3f(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2004}
C.erf.prototype={
$0(){return this.a.Fm()},
$S:1}
C.erg.prototype={
$0(){var w=this.a
return w.m(new C.erb(w))},
$S:0}
C.erb.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.eqI.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.eqH(w))},
$S:0}
C.eqH.prototype={
$0(){return this.a.y=0},
$S:0}
C.eqG.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIs(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ac(1,A.G,A.aF.j(0.55),A.J,18)],x.V),D.c9Y,A.a6),t,t,t,t,t,t,t,t),A.ed,A.t3,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c8N(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.i,0,t,t)],w),t)},
$S:64}
C.eqO.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.m(new C.eqN(w,v))},
$S:0}
C.eqN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtY.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fT||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dtZ.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:601}
C.du_.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hck(v.c,u))
w=this.c?new C.dtX(v):null
return v.bbI(this.b,A.pC,D.f1,w,"Today","$"+u,D.f1)},
$S:2006}
C.dtX.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.du0.prototype={
$2(d,e){var w=this.a
return w.bbI(this.b,A.ka,A.cj,w.w,"Balance","$"+B.dG(B.M6(w.c.a,new C.dtW(w))),A.cs)},
$S:73}
C.dtW.prototype={
$0(){return this.a.c.d},
$S:83}
C.dtR.prototype={
$0(){this.a.a.cYw()
return null},
$S:0}
C.dtS.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b5(w,w,w,new C.byR(v,w),A.az)},
$S:58}
C.dtT.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beh(v,!0,A.aF,D.pk,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beg(v,D.pk,w)}return B.b5(w,w,w,v,A.az)},
$S:58}
C.dtU.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:601}
C.dtV.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cXc(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.h.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c6(new B.he(B.a([u,s],x.U)),new C.dtQ(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2007}
C.dtQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iA(7,new C.dtP(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b5(n,n,n,new C.bef(o.c,v,k,u,D.pk,D.byu,n),D.fnY))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.v6
else t=o.e?A.wT:D.bTr
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
$S:240}
C.dtP.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.h.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.ds(!0,B.d1(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.l(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.pk.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:219}
C.duh.prototype={
$0(){},
$S:0}
C.dui.prototype={
$0(){},
$S:0}
C.duj.prototype={
$1(d){return d.x===A.dG},
$S:15}
C.du3.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.du2.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.m(new C.du1(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.du1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.due.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.l(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.j9,B.ay(v,B.cU(A.z,B.d("$"+t,v,v,v,v,v,v,B.m(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.n(q,v,p,r,v,v,A.n),A.hb,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dug(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2009}
C.dug.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.duf(w,this.b))},
$S:0}
C.duf.prototype={
$0(){var w=""+this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dud.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uM,B.A(B.a([v,A.b4,B.d(e,w,w,w,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2010}
C.duc.prototype={
$1(d){return this.a.m(new C.dub())},
$S:2}
C.dub.prototype={
$0(){},
$S:0}
C.du6.prototype={
$1(d){return this.a.aZl(d)&&!B.hkA(d)},
$S:15}
C.du7.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.du8.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.du9.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.du5())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.du5.prototype={
$0(){},
$S:0}
C.dua.prototype={
$0(){var w=this.a
return w.m(new C.du4(w))},
$S:0}
C.du4.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fOr.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.fG8.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fZC.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fG7.prototype={
$1(d){var w,v,u
if(!C.imJ(d,this.a))return!1
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
C.fue.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.fY3.prototype={
$0(){return $.hhR=null},
$S:11}
C.fY4.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fVP.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fVQ.prototype={
$0(){var w,v=this.a
$.hhF.W(0,v)
w=C.uy(this.b,v)
if(w!=null)B.S3(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h_O.prototype={
$1(d){return new C.a0Y(this.a,this.b,null)},
$S:z+56}
C.elk.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.eln.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.elo.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.elm(w))},
$S:2}
C.elm.prototype={
$0(){return this.a.f=""},
$S:0}
C.elp.prototype={
$1(d){return this.a.b2h()},
$S:2}
C.elq.prototype={
$0(){var w=this.a
return w.m(new C.ell(w,this.b))},
$S:0}
C.ell.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fF6.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.b_(d,1)},
$S:13}
C.fF5.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.b_(d,1)},
$S:13}
C.fYk.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.T(x.N,x.z)}},
$S:14}
C.fYl.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fRQ.prototype={
$1(d){return d.a!=="send_email"},
$S:341}
C.fXM.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.l(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.d(d,w,w,w,w,w,w,A.hh,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,86,w,A.f6,w,w,w,72)},
$S:567}
C.cld.prototype={
$1(d){return J.k(d)},
$S:16}
C.cle.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clc(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c0(7,0,!1,x.S)},
$S:562}
C.clc.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cc(J.k(d),null)
if(w==null)w=0}return w},
$S:502}
C.clf.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clb(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c0(8,0,!1,x.S)},
$S:562}
C.clb.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cc(J.k(d),null)
if(w==null)w=0}return w},
$S:502}
C.clh.prototype={
$1(d){return B.br(d,!0,x.S)},
$S:543}
C.cli.prototype={
$1(d){return B.br(d,!0,x.S)},
$S:543}
C.cla.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.clg.prototype={
$2(d,e){return d+e},
$S:68}
C.cl9.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:68}
C.fHU.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fHO.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHP.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHQ.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHR.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHS.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fHT.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fri.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.aq(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_1:D.bjU
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dB
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ac(0,A.G,A.w.j(0.35),A.dM,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.frh(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:86}
C.frh.prototype={
$0(){var w=this,v=w.a,u=v.d2t(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r4:D.JH
w.f.$1(v)}},
$S:0}
C.fFr.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iz(!0,v,v,A.y,A.aVo,new C.fFq(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:142}
C.fFq.prototype={
$2(d,e){var w=this,v=null,u=B.l(12),t=B.l(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aA
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.m(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fFp(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fY,0,v,v,v,v,v,A.ai)},
$S:82}
C.fFp.prototype={
$0(){var w=this,v=w.a.d2v(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fqA.prototype={
$1(d){return new B.D(A.j9,C.fVG(d,!1),null)},
$S:303}
C.fqB.prototype={
$1(d){return C.fVG(d,!1)},
$S:2014}
C.fqC.prototype={
$0(){var w=this,v=w.a
v.cMP(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fqD.prototype={
$0(){var w=this
w.a.cMQ(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fCl.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mZ(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.ce,v,v,v),A.dk,new C.fCk(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:2015}
C.fCk.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fEi.prototype={
$1(d){return D.dug[d]},
$S:79}
C.fEj.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fBa.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fBb.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.frL.prototype={
$0(){var w=this,v=w.a.cSG(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frK.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.mc
else w=u===1?A.dP:A.tB
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nK,v,v,v,v),v)},
$S:2016}
C.fBm.prototype={
$1(d){var w=this
if(w.a.bfc(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fBn.prototype={
$0(){var w=this
if(w.a.bfc(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fr5.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fNu.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fNv.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:57}
C.eST.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aN8.prototype
w.byV=w.Z
w.byU=w.t
w=C.aN9.prototype
w.byX=w.Z
w.byW=w.t
w=C.aNa.prototype
w.byZ=w.Z
w.byY=w.t
w=C.aO7.prototype
w.bzY=w.Z
w.bzX=w.t
w=C.aNG.prototype
w.bzv=w.t
w=C.aOh.prototype
w.bA7=w.t
w=C.aNb.prototype
w.bz_=w.t
w=C.aOp.prototype
w.bAg=w.t
w=C.aNg.prototype
w.bz4=w.t
w=C.aNw.prototype
w.bzl=w.t
w=C.aP0.prototype
w.bAS=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCK.prototype,"gbVH","bVI",19)
v(q,"gaVz","aVA",1)
v(C.aCJ.prototype,"gcD2","a3A",1)
v(q=C.aCL.prototype,"gc0d","c0e",1)
v(q,"gbKC","bKD",1)
v(q=C.azM.prototype,"gcw2","cw3",1)
v(q,"gcki","Ri",0)
v(q,"gcHb","cHc",1)
v(q,"gcz6","nl",0)
w(q,"gcoI","coJ",25)
w(q,"gcFp","T1",33)
v(q=C.aER.prototype,"gbTD","YN",0)
v(q,"gc9t","a_l",0)
v(q,"gc9q","a_k",0)
v(q,"gc9r","aeM",0)
v(q,"gc9s","Q5",0)
v(C.aC2.prototype,"gc9u","c9v",1)
u(C,"iuc","hZB",58)
t(C,"hkI",0,null,["$1","$0"],["hGW",function(){return C.hGW(null)}],3,0)
t(C,"bGV",0,null,["$1","$0"],["hGV",function(){return C.hGV(null)}],3,0)
v(C.O2.prototype,"gF5","chs",1)
v(C.aFC.prototype,"gcwk","Bx",0)
v(q=C.aFS.prototype,"gckC","Rk",0)
v(q,"gcps","a1N",0)
v(q,"gcdG","cdH",1)
v(q=C.aG3.prototype,"gcdL","afS",0)
v(q,"gbE9","a9O",0)
v(q,"gcwA","a2J",0)
s(q,"gchX","chY",35)
v(C.aI4.prototype,"gbEB","a9Q",1)
v(q=C.aI3.prototype,"gcdK","afR",0)
v(q,"gcjz","ah_",0)
v(q=C.aG5.prototype,"gc3S","adx",0)
v(q,"gc3U","Zt",0)
v(q,"gc3T","ady",0)
v(q=C.aG4.prototype,"gbGX","bGY",1)
v(q,"gbGZ","bH_",1)
v(C.aG6.prototype,"gbMQ","bMR",1)
v(C.aD4.prototype,"gcdN","cdO",1)
v(q=C.aGt.prototype,"gb2a","ce4",1)
r(q,"gb3d",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agD","aAo","b3f","b3e"],52,0,0)
r(q,"gcha",0,4,null,["$4"],["chb"],53,0,0)
v(q,"gcjh","a0Z",0)
v(q,"gck9","ah6",0)
v(q,"gck4","ah4",0)
v(q,"gc77","aei",0)
w(C.aDS.prototype,"gc5M","c5N",54)
w(q=C.aDU.prototype,"gcEi","cEj",55)
v(q,"gcCT","cCU",1)
v(q,"gcKZ","cL_",1)
v(C.aGh.prototype,"gceq","b2h",1)
v(C.aH4.prototype,"gb2K","aAa",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.lR,[C.cC1,C.cBZ,C.cC_,C.cC0,C.cBY,C.feI,C.feG,C.feK,C.feH,C.fyi,C.dlZ,C.dm9,C.dmh,C.dmi,C.dmk,C.dmc,C.dma,C.dmb,C.dmd,C.dme,C.dm4,C.dm5,C.dm3,C.dm7,C.dm8,C.dm1,C.dm0,C.dmm,C.dmp,C.e_y,C.e_x,C.e_z,C.e_w,C.e_v,C.dlT,C.dlW,C.dlX,C.dlV,C.dlU,C.dnL,C.dnM,C.dnN,C.dn0,C.dn1,C.dnv,C.dng,C.dnh,C.dni,C.dnj,C.dnk,C.dmt,C.dn_,C.dnw,C.dnF,C.dnt,C.dns,C.dmY,C.dmZ,C.dnB,C.dnC,C.dmv,C.dmw,C.dn9,C.dna,C.dnb,C.dn8,C.dnl,C.dnm,C.dnn,C.dno,C.dnp,C.dnq,C.dnz,C.dnc,C.dnd,C.dne,C.dnf,C.dnD,C.dnE,C.dmx,C.dmy,C.dmz,C.dmA,C.dnx,C.dny,C.dn7,C.dnr,C.dn5,C.dnG,C.dnH,C.dnI,C.dn2,C.dmM,C.dmL,C.dmK,C.dmQ,C.dmJ,C.dmH,C.dmC,C.dmF,C.dmB,C.dmV,C.dmW,C.dmD,C.drj,C.cNo,C.cNe,C.cNf,C.cNy,C.cNv,C.cNw,C.cNx,C.cNq,C.cNp,C.cNg,C.cNr,C.cNR,C.cNN,C.cNM,C.cNm,C.cNn,C.cNj,C.cNu,C.cNC,C.cND,C.cNE,C.cNF,C.cNG,C.cNH,C.cNI,C.cO2,C.cNW,C.cNT,C.cNY,C.cNV,C.cNS,C.cNh,C.cNP,C.dHQ,C.dHR,C.dHH,C.dHF,C.dHP,C.dHE,C.dHD,C.dHG,C.dHL,C.dHM,C.dHJ,C.dHK,C.dHS,C.dHT,C.dHU,C.dHV,C.f8e,C.f8f,C.dgL,C.fOl,C.dOi,C.dOa,C.dOc,C.dOg,C.dOb,C.dOd,C.dOe,C.cdC,C.fVE,C.fVD,C.dHs,C.dHr,C.dHt,C.dHq,C.e76,C.e77,C.e7e,C.h3I,C.h3J,C.c5T,C.e_E,C.e_F,C.e_G,C.e_H,C.e_I,C.e_J,C.e_D,C.e_K,C.e_C,C.e_N,C.e_M,C.e_L,C.e7m,C.e7n,C.e7k,C.e7j,C.e7l,C.e7h,C.ebm,C.ebn,C.eb5,C.eb7,C.ebj,C.ebk,C.ebe,C.ebc,C.ebi,C.ebf,C.eb9,C.eb8,C.ebo,C.cWN,C.cWL,C.cWM,C.cWK,C.cWQ,C.cWR,C.f38,C.f3d,C.f3a,C.f3c,C.f3b,C.f34,C.f33,C.f36,C.f35,C.ebJ,C.ebO,C.ebK,C.ebL,C.ebN,C.ebT,C.ebU,C.ebV,C.ebW,C.ebX,C.ebY,C.ebZ,C.ec_,C.ebS,C.ec0,C.ebR,C.ebQ,C.ebP,C.ebC,C.ebD,C.ebu,C.ebv,C.ebw,C.eby,C.cQi,C.dsd,C.dsf,C.dse,C.ecg,C.eca,C.ecb,C.ecd,C.ece,C.ecf,C.ecj,C.eci,C.ecp,C.eco,C.ec6,C.ec5,C.ecq,C.ech,C.ec4,C.h4A,C.dpE,C.dpC,C.eqE,C.er2,C.er3,C.er4,C.er5,C.er7,C.er8,C.eqY,C.eqF,C.er1,C.eqJ,C.eqK,C.eqS,C.eqP,C.eqQ,C.eqR,C.eqT,C.eqU,C.eqV,C.eqX,C.eqW,C.eqL,C.eqM,C.erh,C.era,C.eri,C.er9,C.erj,C.erf,C.erg,C.erb,C.eqI,C.eqH,C.eqO,C.eqN,C.dtX,C.dtW,C.dtR,C.duh,C.dui,C.du3,C.du2,C.du1,C.dug,C.duf,C.dub,C.du8,C.du9,C.du5,C.dua,C.du4,C.fY3,C.fVQ,C.elk,C.eln,C.elm,C.elq,C.ell,C.fHO,C.fHP,C.fHQ,C.fHR,C.fHS,C.fHT,C.frh,C.fFp,C.fqC,C.fqD,C.fCk,C.fEj,C.fBb,C.frL,C.fBn,C.fr5,C.eST])
u(B.k8,[C.cC2,C.feJ,C.fS9,C.fS1,C.fyf,C.fye,C.fyh,C.dmr,C.dms,C.dmg,C.dmf,C.dmj,C.dm2,C.dm6,C.dml,C.e_B,C.dlY,C.dnO,C.dnP,C.dnQ,C.dnR,C.dnS,C.dnu,C.dnA,C.dmu,C.dnK,C.dnJ,C.dmN,C.dmO,C.dmP,C.dmR,C.dmT,C.drk,C.cO3,C.cNt,C.cNs,C.cNL,C.cNO,C.cNK,C.cNk,C.cNB,C.cNz,C.cNQ,C.cNA,C.cNZ,C.cNX,C.cO1,C.c4A,C.c4z,C.c4C,C.c4B,C.dHO,C.dHN,C.dHI,C.dHW,C.dHX,C.fCV,C.fE7,C.dgM,C.dgK,C.c5m,C.fOk,C.dOj,C.dOh,C.cdD,C.fEX,C.fVC,C.cg3,C.cg2,C.cgv,C.e74,C.e75,C.fQI,C.fQv,C.fQu,C.fBe,C.cgJ,C.cgK,C.cgL,C.cgI,C.cgH,C.fxY,C.h3E,C.h3F,C.h3G,C.h3H,C.h3D,C.e7b,C.e7c,C.e7a,C.h3K,C.dnT,C.ciq,C.fwU,C.e_O,C.e7i,C.che,C.chb,C.chd,C.chg,C.c90,C.c8Z,C.c93,C.chp,C.cho,C.chn,C.chm,C.chr,C.cht,C.ebs,C.eb6,C.eb4,C.ebl,C.ebd,C.ebh,C.ebg,C.ebb,C.ebq,C.ebp,C.cWO,C.cWP,C.f39,C.f32,C.f37,C.chj,C.fSD,C.ec2,C.ebM,C.ebF,C.ebG,C.ebH,C.ebI,C.ec1,C.chl,C.cQj,C.cQk,C.fwC,C.ec7,C.ec9,C.ecc,C.eck,C.ecl,C.ecm,C.ec3,C.h4B,C.dpy,C.dpB,C.cjk,C.cjx,C.erk,C.erl,C.erm,C.er6,C.eqZ,C.er_,C.er0,C.erc,C.ere,C.dtY,C.dtZ,C.dtU,C.dtP,C.duj,C.due,C.dud,C.duc,C.du6,C.fG8,C.fZC,C.fG7,C.fue,C.fY4,C.fVP,C.h_O,C.elo,C.elp,C.fF6,C.fF5,C.fYk,C.fYl,C.fRQ,C.fXM,C.cld,C.cle,C.clc,C.clf,C.clb,C.clh,C.cli,C.cla,C.fHU,C.fqA,C.fqB,C.fCl,C.fEi,C.fBa,C.frK,C.fBm,C.fNu,C.fNv])
t(C.buU,B.jL)
u(B.ag,[C.G5,C.an3,C.aFB,C.an2,C.an4,C.anS,C.ajT,C.apq,C.a0E,C.a0F,C.a_M,C.apX,C.app,C.Oz,C.aCM,C.ar6,C.arP,C.WS,C.QE,C.a1q,C.a1p,C.WT,C.as5,C.aDF,C.as8,C.a0a,C.asI,C.aDR,C.aDT,C.a0Y,C.au4])
u(B.ah,[C.aKD,C.aN9,C.aO7,C.aN8,C.aNa,C.bjK,C.azM,C.aER,C.bmb,C.bmc,C.aC2,C.bmj,C.aNG,C.aOh,C.aNb,C.aFC,C.aFS,C.aG3,C.bdO,C.aI4,C.aI3,C.aG5,C.aG4,C.bjY,C.aOp,C.aNg,C.bAQ,C.aNw,C.aDU,C.aGh,C.aP0])
u(B.lr,[C.feL,C.fyg,C.dm_,C.dmq,C.dmo,C.dmn,C.e_A,C.dn6,C.dn4,C.dn3,C.dmI,C.dmS,C.dmG,C.dmU,C.dmE,C.dmX,C.cNJ,C.cNl,C.cNU,C.cO0,C.cO_,C.cNi,C.dgJ,C.dOf,C.fEY,C.fEZ,C.e78,C.fS4,C.h3C,C.e7d,C.e7g,C.e7f,C.dnU,C.cir,C.chf,C.chc,C.c91,C.c9_,C.chs,C.ebt,C.eba,C.ebr,C.f3f,C.f3e,C.ebE,C.ebx,C.ebz,C.ebB,C.ebA,C.ec8,C.ecn,C.dpz,C.dpD,C.dpA,C.erd,C.eqG,C.du_,C.du0,C.dtS,C.dtT,C.dtV,C.dtQ,C.du7,C.fOr,C.clg,C.cl9,C.fri,C.fFr,C.fFq])
t(C.axX,C.G5)
u(B.aJ,[C.rd,C.afb,C.O2,C.JD,C.rQ,C.rR,C.lY,C.iB,C.ip,C.bbT,C.ddH,C.dsc,C.rW,C.WU,C.OQ,C.qk,C.b2b,C.pB,C.at8])
t(C.aCK,C.aN9)
t(C.bmG,C.aO7)
t(C.aCJ,C.aN8)
t(C.aCL,C.aNa)
u(B.ol,[C.Xz,C.aDG,C.asW,C.JI,C.Ft])
u(B.av,[C.a20,C.bvq,C.afX,C.Rg,C.a82,C.Or,C.arJ,C.aeO,C.aeN,C.b30,C.aDE,C.adi,C.b2y,C.ada,C.aDS])
t(C.bm9,C.aNG)
t(C.bmU,C.aOh)
t(C.bip,C.aNb)
t(C.aG6,C.aOp)
t(C.aD4,C.aNg)
t(C.aGt,C.bAQ)
t(C.bkH,C.aNw)
u(B.oE,[C.beh,C.beg,C.bef,C.bdH,C.byR,C.btF])
t(C.aH4,C.aP0)
w(C.aN8,C.O2)
w(C.aN9,C.O2)
w(C.aNa,C.O2)
w(C.aO7,C.O2)
w(C.aNG,B.eO)
w(C.aOh,B.cf)
w(C.aNb,B.cf)
w(C.aOp,B.cf)
w(C.aNg,B.eO)
w(C.aNw,B.eO)
v(C.bAQ,B.eG)
w(C.aP0,B.cf)})()
B.ng(b.typeUniverse,JSON.parse('{"buU":{"jL":[]},"G5":{"ag":[],"v":[]},"aKD":{"ah":["G5<1,2>"]},"axX":{"G5":["1","hw<1>"],"ag":[],"v":[],"G5.T":"1","G5.S":"hw<1>"},"an3":{"ag":[],"v":[]},"aFB":{"ag":[],"v":[]},"an2":{"ag":[],"v":[]},"an4":{"ag":[],"v":[]},"anS":{"ag":[],"v":[]},"ajT":{"ag":[],"v":[]},"aCK":{"ah":["an3"]},"bmG":{"ah":["aFB"]},"aCJ":{"ah":["an2"]},"aCL":{"ah":["an4"]},"bjK":{"ah":["anS"]},"azM":{"ah":["ajT"]},"apq":{"ag":[],"v":[]},"a0E":{"ag":[],"v":[]},"a0F":{"ag":[],"v":[]},"afX":{"av":[],"v":[]},"a_M":{"ag":[],"v":[]},"aER":{"ah":["apq"]},"a20":{"av":[],"v":[]},"bvq":{"av":[],"v":[]},"bmb":{"ah":["a0E"]},"bmc":{"ah":["a0F"]},"Rg":{"av":[],"v":[]},"aC2":{"ah":["a_M"]},"apX":{"ag":[],"v":[]},"bmj":{"ah":["apX"]},"a82":{"av":[],"v":[]},"app":{"ag":[],"v":[]},"bm9":{"ah":["app"]},"Or":{"av":[],"v":[]},"arJ":{"av":[],"v":[]},"Oz":{"ag":[],"v":[]},"bmU":{"ah":["Oz"]},"aeO":{"av":[],"v":[]},"aeN":{"av":[],"v":[]},"aCM":{"ag":[],"v":[]},"bip":{"ah":["aCM"]},"b30":{"av":[],"v":[]},"ar6":{"ag":[],"v":[]},"aFC":{"ah":["ar6"]},"arP":{"ag":[],"v":[]},"aFS":{"ah":["arP"]},"WS":{"ag":[],"v":[]},"QE":{"ag":[],"v":[]},"a1q":{"ag":[],"v":[]},"a1p":{"ag":[],"v":[]},"aG3":{"ah":["WS"]},"bdO":{"ah":["QE"]},"aI4":{"ah":["a1q"]},"aI3":{"ah":["a1p"]},"WT":{"ag":[],"v":[]},"aG5":{"ah":["WT"]},"as5":{"ag":[],"v":[]},"adi":{"av":[],"v":[]},"ada":{"av":[],"v":[]},"aDF":{"ag":[],"v":[]},"aG4":{"ah":["as5"]},"aDE":{"av":[],"v":[]},"b2y":{"av":[],"v":[]},"bjY":{"ah":["aDF"]},"as8":{"ag":[],"v":[]},"aG6":{"ah":["as8"]},"a0a":{"ag":[],"v":[]},"aD4":{"ah":["a0a"]},"asI":{"ag":[],"v":[]},"aDR":{"ag":[],"v":[]},"aDT":{"ag":[],"v":[]},"aGt":{"ah":["asI"],"eG":[]},"aDS":{"av":[],"v":[]},"bkH":{"ah":["aDR"]},"beh":{"aB":[]},"beg":{"aB":[]},"bef":{"aB":[]},"aDU":{"ah":["aDT"]},"bdH":{"aB":[]},"byR":{"aB":[]},"a0Y":{"ag":[],"v":[]},"aGh":{"ah":["a0Y"]},"btF":{"aB":[]},"au4":{"ag":[],"v":[]},"aH4":{"ah":["au4"]}}'))
B.Rs(b.typeUniverse,JSON.parse('{"O2":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aC
return{dw:w("lN<u?>"),gS:w("oD"),o:w("d8"),g5:w("xH"),M:w("di<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("R<oD>"),E:w("R<d8>"),V:w("R<ac>"),O:w("R<u>"),A:w("R<a_>"),R:w("R<o0>"),B:w("R<ai<H>>"),m:w("R<aa<q,q>>"),_:w("R<aa<q,@>>"),b:w("R<rQ>"),x:w("R<rR>"),gi:w("R<jq>"),a:w("R<lY>"),Y:w("R<ip>"),v:w("R<iB>"),dA:w("R<JD>"),F:w("R<rW>"),Z:w("R<kI>"),g:w("R<hl>"),gK:w("R<+at,details,id(V,q,q)>"),C:w("R<cX>"),s:w("R<q>"),G:w("R<jL>"),eO:w("R<ev>"),d9:w("R<eZ>"),p:w("R<v>"),n:w("R<F>"),t:w("R<H>"),U:w("R<aB?>"),d4:w("R<q?>"),ck:w("ai<rQ>"),e:w("ai<rR>"),ac:w("ai<jq>"),dZ:w("ai<lY>"),I:w("ai<ip>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("aa<q,q>"),P:w("aa<q,@>"),f:w("aa<@,@>"),cl:w("cM<q,D>"),aS:w("N<a_,tJ>"),dc:w("N<JI,bz>"),dv:w("N<q,q>"),bL:w("N<F,bz>"),a3:w("N<H,bz>"),gN:w("N<H,qc>"),w:w("jY"),b1:w("rQ"),Q:w("rR"),bP:w("lY"),i:w("ip"),u:w("iB"),gp:w("WU"),J:w("OQ"),D:w("qk"),an:w("kI"),c:w("cw"),K:w("aJ"),d:w("jF<q>"),di:w("+outcome,snapshot(Xz,a7n?)"),ee:w("+after,before(F,F)"),et:w("+categories,error,message,replaceId(ai<ip>,q?,q?,q?)"),cz:w("Kb"),bJ:w("dt<q>"),N:w("q"),e7:w("bt<F>"),W:w("bl<q>"),am:w("kj<H>"),cc:w("Y<q>"),aM:w("el<d8>"),bG:w("el<F>"),l:w("v"),gm:w("rd"),ec:w("afb"),q:w("nG"),y:w("Q"),gR:w("F"),z:w("@"),S:w("H"),eG:w("d8?"),cJ:w("V?"),gw:w("ai<aa<q,@>>?"),bM:w("ai<@>?"),h:w("aa<q,@>?"),X:w("aJ?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b65=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f1=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6D=new B.ax(D.f1,1,A.r,-1)
D.b6F=new B.ax(A.ab,2,A.r,-1)
D.b6I=new B.ax(A.aV,2,A.r,-1)
D.b6K=new B.ax(A.cA,0.8,A.r,-1)
D.b6Z=new B.ax(A.aQ,2,A.r,-1)
D.b75=new B.ax(A.fe,1.6,A.r,-1)
D.b7V=new B.aY(0,330,0,1/0)
D.b81=new B.aY(0,176,0,1/0)
D.b82=new B.aY(0,1/0,0,260)
D.b8k=new B.aY(90,1/0,0,1/0)
D.bbk=new B.ac(0,A.G,A.dB,A.J,4)
D.d9G=w([D.bbk],x.V)
D.b8y=new B.n(A.c,null,null,null,D.d9G,null,A.a6)
D.d2X=w([D.f1,A.b2],x.O)
D.cd0=new B.a7(A.a5,A.a9,A.x,D.d2X,null,null)
D.b8M=new B.n(null,null,null,null,null,D.cd0,A.a6)
D.b8R=new B.n(A.be,null,null,null,null,null,A.a6)
D.bmK=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dqP=w([R.ahM,D.bmK],x.O)
D.cc7=new B.a7(A.aY,A.b3,A.x,D.dqP,null,null)
D.b97=new B.n(null,null,null,A.mJ,null,D.cc7,A.n)
D.bv4=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dDL=w([D.bv4,A.ake],x.O)
D.cbh=new B.a7(A.aY,A.b3,A.x,D.dDL,null,null)
D.b9y=new B.n(null,null,null,A.ud,null,D.cbh,A.n)
D.dmn=w([A.aD,A.bE],x.O)
D.cbR=new B.a7(A.a5,A.a9,A.x,D.dmn,null,null)
D.b9E=new B.n(null,null,null,null,null,D.cbR,A.a6)
D.fCO=new B.G(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXB=new B.B("\ud83c\udf89",null,D.fCO,null,null,null,null,null,null,null,null,null)
D.bfr=new B.cj(A.z,null,null,D.fXB,null)
D.bgU=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agQ=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bjU=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bjY=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pk=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uo=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.aib=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmk=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.Zy=new B.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yu=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bo5=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_1=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajP=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bsM=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bsV=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.aki=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buw=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.buD=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bvM=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_S=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bwW=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bxB=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a05=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.byu=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alS=new B.a5h(2,"active")
D.bCP=new B.bf(42e5)
D.bCS=new B.bf(53e4)
D.bCV=new B.bf(58e4)
D.bCZ=new B.bf(82e4)
D.bDL=new B.P(0,30,0,30)
D.bDT=new B.P(0,4,0,8)
D.bDX=new B.P(0,8,12,8)
D.bEA=new B.P(12,0,12,88)
D.bEI=new B.P(12,11,12,10)
D.bF8=new B.P(13,10,12,10)
D.bFj=new B.P(14,10,14,2)
D.bFv=new B.P(14,14,10,14)
D.bG4=new B.P(16,12,16,96)
D.bG9=new B.P(16,14,16,8)
D.bGd=new B.P(16,16,16,96)
D.bGe=new B.P(16,18,16,16)
D.bGi=new B.P(16,4,16,10)
D.bHh=new B.P(18,6,18,40)
D.bHu=new B.P(20,10,20,20)
D.bHJ=new B.P(20,18,20,18)
D.bI9=new B.P(22,22,22,16)
D.bIO=new B.P(2,0,2,10)
D.bJy=new B.P(4,8,12,4)
D.bJM=new B.P(6,1,6,1)
D.bJO=new B.P(6,4,0,0)
D.bJU=new B.P(6,6,12,4)
D.bKe=new B.P(8,4,12,8)
D.h0c=new B.B("Activity",null,A.fF,null,null,null,null,null,null,null,null,null)
D.bMg=new B.bz(1,A.bd,D.h0c,null)
D.h8T=new B.B("Game Receipts",null,A.u_,null,null,null,null,null,null,null,null,null)
D.fSs=new B.B("Your last 59 games \xb7 kept for 7 days",null,I.acj,null,null,null,null,null,null,null,null,null)
D.d_j=w([D.h8T,D.fSs],x.p)
D.bzB=new B.fo(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.d_j,null)
D.bMj=new B.bz(1,A.bd,D.bzB,null)
D.bRd=new B.a_(58607,"MaterialIcons",!1)
D.a3a=new B.a_(62178,"MaterialIcons",!1)
D.bS4=new B.a_(62410,"MaterialIcons",!1)
D.bTf=new B.a_(63258,"MaterialIcons",!1)
D.bTk=new B.a_(63304,"MaterialIcons",!1)
D.bTl=new B.a_(63306,"MaterialIcons",!1)
D.bTr=new B.a_(63330,"MaterialIcons",!1)
D.ask=new B.a_(984777,"MaterialIcons",!1)
D.bVX=new B.ae(A.D7,13,A.ab,null,null,null)
D.bW4=new B.ae(A.js,13,A.qu,null,null,null)
D.asy=new B.ae(A.lU,null,A.c,null,null,null)
D.bXE=new B.ae(A.Dn,34,A.at,null,null,null)
D.bYa=new B.ae(A.Da,19,A.c,null,null,null)
D.bYk=new B.ae(A.aqF,24,A.aQ,null,null,null)
D.bYN=new B.ae(A.D3,28,A.bp,null,null,null)
D.bZi=new B.ae(A.arY,42,A.c,null,null,null)
D.bZs=new B.ae(A.a48,30,A.c,null,null,null)
D.c_8=new B.ae(A.fO,null,A.c,null,null,null)
D.c_u=new B.ae(A.js,16,A.c,null,null,null)
D.c0a=new B.ae(A.tn,13,A.c,null,null,null)
D.c0j=new B.ae(A.lU,18,A.c,null,null,null)
D.c0S=new B.ae(A.wS,null,A.dP,null,null,null)
D.c1y=new B.ae(A.nP,28,A.c,null,null,null)
D.c1O=new B.ae(A.oO,22,null,null,null,null)
D.c2c=new B.ae(A.tj,null,null,null,null,null)
D.c2o=new B.ae(A.he,28,A.c,null,null,null)
D.c2r=new B.ae(A.cB,null,A.aR,null,null,null)
D.c2B=new B.ae(A.a2R,14,A.c,null,null,null)
D.c3c=new B.ae(A.HZ,36,A.aN,null,null,null)
D.c3j=new B.ae(A.oK,16,A.c,null,null,null)
D.bnc=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c48=new B.ae(A.e9,9,D.bnc,null,null,null)
D.bUk=new B.a_(983146,"MaterialIcons",!1)
D.c4q=new B.ae(D.bUk,null,A.aQ,null,null,null)
D.c5_=new B.ae(A.uX,28,D.f1,null,null,null)
D.c54=new B.ae(A.te,null,A.fe,null,null,null)
D.c59=new B.ae(A.hC,20,D.f1,null,null,null)
D.bUH=new B.a_(983377,"MaterialIcons",!1)
D.c5j=new B.ae(D.bUH,64,A.c,null,null,null)
D.c5Q=new B.ae(A.h4,24,A.c,null,null,null)
D.c6M=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6X=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7b=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7c=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkN=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bot=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bo6=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dra=w([D.bkN,D.bot,D.bo6],x.O)
D.c91=new B.a7(A.ay,A.aC,A.x,D.dra,null,null)
D.dwQ=w([A.bi,A.b2],x.O)
D.c9n=new B.a7(A.ay,A.aC,A.x,D.dwQ,null,null)
D.bmC=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.btA=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.dah=w([D.bmC,D.btA],x.O)
D.c9v=new B.a7(A.ay,A.aC,A.x,D.dah,null,null)
D.dsS=w([A.bs,A.a_,A.ec],x.O)
D.c9B=new B.a7(A.ay,A.aC,A.x,D.dsS,null,null)
D.c9E=new B.a7(A.a5,A.a9,A.x,E.azT,null,null)
D.d9v=w([A.fe,A.cj],x.O)
D.aul=new B.a7(A.a5,A.a9,A.x,D.d9v,null,null)
D.d9Y=w([A.fe,A.bE],x.O)
D.aum=new B.a7(A.a5,A.a9,A.x,D.d9Y,null,null)
D.aE4=w([D.pk,A.aF,A.c3],x.O)
D.c9Y=new B.a7(A.ay,A.aC,A.x,D.aE4,null,null)
D.bqq=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7h=w([D.bqq,A.ah6,A.a_],x.O)
D.ca2=new B.a7(A.ay,A.aC,A.x,D.d7h,null,null)
D.b42=new B.d7(-0.8,-1)
D.b44=new B.d7(1.2,1)
D.d6n=w([A.c,A.eO,A.ha,A.c,A.ft,A.aH,A.ok],x.O)
D.dsc=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.ca4=new B.a7(D.b42,D.b44,A.x,D.d6n,D.dsc,null)
D.btq=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqH=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dr9=w([D.btq,D.bqH],x.O)
D.caw=new B.a7(A.a5,A.a9,A.x,D.dr9,null,null)
D.caC=new B.a7(A.ay,A.aC,A.x,A.SG,null,null)
D.dlh=w([A.a_W,A.yw],x.O)
D.caE=new B.a7(A.a5,A.a9,A.x,D.dlh,null,null)
D.dpQ=w([A.hl,A.fX],x.O)
D.aus=new B.a7(A.a5,A.a9,A.x,D.dpQ,null,null)
D.dwl=w([A.be,A.bQ],x.O)
D.aut=new B.a7(A.a5,A.a9,A.x,D.dwl,null,null)
D.cRo=w([A.dh,A.fB],x.O)
D.cbj=new B.a7(A.ay,A.aC,A.x,D.cRo,null,null)
D.d5h=w([A.c,A.ba],x.O)
D.cbt=new B.a7(A.a5,A.a9,A.x,D.d5h,null,null)
D.ajh=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjE=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dhG=w([D.ajh,A.jI,A.rE,A.aF,D.bjE],x.O)
D.ce6=w([0,0.28,0.55,0.82,1],x.n)
D.cbv=new B.a7(A.ay,A.aC,A.x,D.dhG,D.ce6,null)
D.cbC=new B.a7(A.a5,A.a9,A.x,A.Tm,null,null)
D.cbD=new B.a7(A.a5,A.a9,A.x,E.aCp,null,null)
D.cbI=new B.a7(A.a5,A.a9,A.x,D.aE4,null,null)
D.dbz=w([A.bE,A.fe],x.O)
D.cbX=new B.a7(A.a5,A.a9,A.x,D.dbz,null,null)
D.dAR=w([A.aD,A.bE,A.ba],x.O)
D.cbZ=new B.a7(A.a5,A.a9,A.x,D.dAR,null,null)
D.dls=w([A.at,A.bL,A.fL],x.O)
D.cc2=new B.a7(A.a5,A.a9,A.x,D.dls,null,null)
D.dAA=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.an],x.O)
D.dfH=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cc6=new B.a7(A.ay,A.aC,A.x,D.dAA,D.dfH,null)
D.ccg=new B.a7(A.ay,A.aC,A.x,A.a5B,null,null)
D.dm5=w([D.Zy,A.e3],x.O)
D.ccp=new B.a7(A.a5,A.a9,A.x,D.dm5,null,null)
D.duo=w([D.aki,D.aib,A.a_],x.O)
D.ccz=new B.a7(A.ay,A.aC,A.x,D.duo,null,null)
D.bwh=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d5S=w([A.ff,A.hl,D.bwh],x.O)
D.cd2=new B.a7(A.ay,A.aC,A.x,D.d5S,null,null)
D.dc9=w([D.pk,A.aF],x.O)
D.cd4=new B.a7(A.ay,A.aC,A.x,D.dc9,null,null)
D.cdw=w([F.Dr,A.nP,A.js,A.hD,A.jN,A.l2,A.kf,A.qX,A.nO,A.eY,A.lr,A.zz,A.HY],x.A)
D.ch1=w([10,50,100,200],x.t)
D.cqP=w([1,3,5,7],x.t)
D.cvP=w([25,50,100,250],x.t)
D.bUe=new B.a_(983104,"MaterialIcons",!1)
D.cEz=w([A.nP,A.mo,A.oO,A.lS,A.hp,A.v6,D.bUe,A.a42],x.A)
D.cK_=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cWw=w([0,0.22,0.5,0.78,1],x.n)
D.d_t=w([8,13,19],x.n)
D.a5V=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h_b=new B.B("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eEZ=new B.jF("questions",!0,48,null,D.h_b,null,x.d)
D.fPz=new B.B("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eF5=new B.jF("edit",!0,48,null,D.fPz,null,x.d)
D.h7p=new B.B("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eEY=new B.jF("delete",!0,48,null,D.h7p,null,x.d)
D.d5m=w([D.eEZ,D.eF5,D.eEY],B.aC("R<t_<q>>"))
D.daa=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.dar=w([A.bU,A.fn],x.O)
D.a93=new C.lY("text","",null,null)
D.dbM=w([D.a93],x.a)
D.ddh=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_c=new B.afy(A.kC,"Home")
D.eQL=new B.afy(A.pC,"Growth")
D.eVz=new B.afy(A.js,"Wallet")
D.dfY=w([D.f_c,D.eQL,D.eVz],B.aC("R<+icon,label(a_,q)>"))
D.dgp=w([4,0,2,6,8,1,3,5,7],x.t)
D.dgx=w([A.c,A.ci,A.cA],x.O)
D.e2d=new C.rW("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2g=new C.rW("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2e=new C.rW("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e28=new C.rW("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e29=new C.rW("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2h=new C.rW("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6t=w([D.e2d,D.e2g,D.e2e,D.e28,D.e29,D.e2h],x.F)
D.a6y=w([A.aA,A.bi,A.d9,A.at],x.O)
D.bnr=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dmc=w([A.Z3,D.bnr,A.rE,A.iy,A.jI],x.O)
D.a6F=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SQ=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cEO=w([3,4,5],x.t)
D.cS1=w([6,7,8],x.t)
D.cdD=w([0,3,6],x.t)
D.cqU=w([1,4,7],x.t)
D.cym=w([2,5,8],x.t)
D.cdI=w([0,4,8],x.t)
D.cyj=w([2,4,6],x.t)
D.doO=w([M.auT,D.cEO,D.cS1,D.cdD,D.cqU,D.cym,D.cdI,D.cyj],x.B)
D.aMj=new C.JI(0,"abab")
D.e26=new C.JI(1,"aaaBbb")
D.aMk=new C.JI(2,"aabb")
D.dpV=w([D.aMj,D.e26,D.aMk],B.aC("R<JI>"))
D.dqc=w([],x.a)
D.aDh=w([],x.v)
D.dug=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.T9=w([1,2,3,-1,-2],x.t)
D.dDw=w([A.j7,A.aD],x.O)
D.hFy=new C.rd("dice","Dice Roll","Roll for cash & prizes!",A.nM,D.dDw)
D.hFv=new C.rd("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v3,A.aBU)
D.dxf=w([A.dn,A.bp],x.O)
D.hFt=new C.rd("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3P,D.dxf)
D.dCW=w([A.dN,A.nt],x.O)
D.hFz=new C.rd("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a42,D.dCW)
D.cqz=w([A.jG,A.rR],x.O)
D.hFw=new C.rd("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",O.PU,D.cqz)
D.duf=w([A.lJ,D.a_1],x.O)
D.hFu=new C.rd("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.I1,D.duf)
D.hFx=new C.rd("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nS)
D.dwk=w([D.hFy,D.hFv,D.hFt,D.hFz,D.hFw,D.hFu,D.hFx],B.aC("R<rd>"))
D.dxT=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsv=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bsm=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.al8=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dyJ=w([D.bsv,D.bsm,D.al8],x.O)
D.buZ=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dyL=w([A.ah5,D.buZ,D.al8],x.O)
D.dzq=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEs=w([D.pk,A.c,D.f1,A.c4,A.b_,A.aF],x.O)
D.e2b=new C.rW("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2a=new C.rW("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e27=new C.rW("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2f=new C.rW("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2i=new C.rW("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2c=new C.rW("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7p=w([D.e2b,D.e2a,D.e27,D.e2f,D.e2i,D.e2c],x.F)
D.dDa=w([A.cj,A.rR],x.O)
D.erl={checkers_deluxe:0,tic_tac_go:1}
D.aKi=new B.bq(D.erl,["Checkers Deluxe","Tic Tac Go"],B.aC("bq<q,q>"))
D.eqo={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKt=new B.bq(D.eqo,[1,2,3,4,5,6,7],B.aC("bq<q,H>"))
D.dVH=new C.a82(null)
D.dZb=new C.lY("signature","NGMY Support Team",null,null)
D.dZc=new C.lY("divider","",null,null)
D.U8=new C.WU(!1,!1,!1,!1)
D.Ua=new C.OQ(!1,!1,!1,!1)
D.e_k=new C.OQ(!0,!0,!1,!1)
D.Er=new C.asW(0,"swahili")
D.aMi=new C.asW(1,"english")
D.Es=new C.asW(2,"mix")
D.dob=w([A.iL,A.ia,A.d6],x.O)
D.bT_=new B.a_(63118,"MaterialIcons",!1)
D.e3j=new C.pB(D.dob,A.fZ,A.at,"BACKGAMMON","\ud83c\udfb2",D.bT_)
D.bV4=new B.a_(983637,"MaterialIcons",!1)
D.e3k=new C.pB(A.aEI,A.bi,A.er,"EURO WHEEL","\ud83c\udfa1",D.bV4)
D.dyd=w([A.a_,A.aL,A.by],x.O)
D.e3l=new C.pB(D.dyd,A.aS,A.an,"ROYALE","\u265f\ufe0f",O.PU)
D.d9B=w([A.dh,A.bp,A.dX],x.O)
D.e3m=new C.pB(D.d9B,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a4h)
D.dsw=w([A.dA,A.fB,A.rR],x.O)
D.e3n=new C.pB(D.dsw,A.wn,A.cj,"PUNTO BANCO","\ud83d\udc8e",A.mo)
D.cRq=w([A.oj,A.iw,A.ma],x.O)
D.e3o=new C.pB(D.cRq,A.jE,A.kx,"DOMINOES","\ud83c\udc53",A.arZ)
D.dyY=w([A.yE,A.ut,A.hK],x.O)
D.e3p=new C.pB(D.dyY,A.Cn,A.hv,"WAR","\u2694\ufe0f",A.a3u)
D.e3q=new C.pB(A.aEB,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nM)
D.dbA=w([A.kv,A.aD,A.dN],x.O)
D.e3r=new C.pB(D.dbA,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nM)
D.drt=w([A.jX,A.lF,A.bE],x.O)
D.e3s=new C.pB(D.drt,A.qi,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zs)
D.d2V=w([A.ia,A.e3,A.at],x.O)
D.bSq=new B.a_(62865,"MaterialIcons",!1)
D.e3t=new C.pB(D.d2V,A.uy,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSq)
D.e3u=new C.pB(A.a7m,A.bm,A.bi,"HOLD'EM","\u2660\ufe0f",A.js)
D.dzp=w([A.ff,A.fX,A.b2],x.O)
D.bRz=new B.a_(61234,"MaterialIcons",!1)
D.e3v=new C.pB(D.dzp,A.mb,A.aV,"CRAPS","\ud83c\udfb2",D.bRz)
D.d8N=w([A.fn,A.jl,A.bU],x.O)
D.e3w=new C.pB(D.d8N,A.bL,A.ba,"PLINKO","\ud83d\udc8e",A.Q2)
D.bUP=new B.a_(983492,"MaterialIcons",!1)
D.e3x=new C.pB(A.a7m,A.ew,A.bi,"SNOOKER","\ud83c\udfb1",D.bUP)
D.dwJ=w([A.ff,A.fX,A.aV],x.O)
D.e3y=new C.pB(D.dwJ,A.uu,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hC)
D.dx7=w([A.ec,A.ep,A.bi],x.O)
D.bTq=new B.a_(63324,"MaterialIcons",!1)
D.e3z=new C.pB(D.dx7,A.wq,A.be,"KLONDIKE","\ud83c\udccf",D.bTq)
D.doX=w([A.bA,A.bs,A.a_],x.O)
D.e3A=new C.pB(D.doX,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Ig)
D.r3=new C.Ft(0,"continueGame")
D.r4=new C.Ft(1,"youWin")
D.JH=new C.Ft(2,"youLose")
D.Uj=new C.Ft(3,"draw")
D.aMx=new C.Xz(0,"found")
D.emn=new C.Xz(1,"foundLive")
D.a9k=new C.Xz(2,"notFound")
D.aMy=new C.Xz(3,"wrongAccount")
D.euM=new B.r(4,12)
D.eyk=new B.D(A.yY,A.uh,null)
D.bJc=new B.P(4,0,0,3)
D.fzW=new B.G(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc_=new B.B("NGMY Helper",null,D.fzW,null,null,null,null,null,null,null,null,null)
D.eyB=new B.D(D.bJc,D.hc_,null)
D.bTj=new B.a_(63284,"MaterialIcons",!1)
D.bYA=new B.ae(D.bTj,18,A.pn,null,null,null)
D.fES=new B.G(!0,A.pn,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTE=new B.B("Continue",null,D.fES,null,null,null,null,null,null,null,null,null)
D.dqJ=w([D.bYA,A.bn,D.fTE],x.p)
D.fjh=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqJ,null)
D.eyF=new B.D(A.hP,D.fjh,null)
D.eyV=new B.D(A.bS,A.uh,null)
D.bs4=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dmS=w([A.hl,A.fX,A.cW,D.bs4],x.O)
D.cc9=new B.a7(A.ay,A.aC,A.x,D.dmS,A.DO,null)
D.b9H=new B.n(null,null,null,null,null,D.cc9,A.n)
D.bAR=new B.bN(D.b9H,A.bk,null,null)
D.eFs=new B.cK(0,0,0,0,null,null,D.bAR,null)
D.c_q=new B.ae(A.wR,11,A.c,null,null,null)
D.eFw=new B.cK(10,12,null,null,null,null,D.c_q,null)
D.cWm=w([A.hL,A.ec,A.ll],x.O)
D.eG7=new B.bT(A.Bv,1.1,A.x,null,0,D.cWm,null,null)
D.btO=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bmW=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bp6=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkh=w([D.btO,D.bmW,D.bp6],x.O)
D.eGf=new B.bT(A.aeD,1.05,A.x,null,0,D.dkh,null,null)
D.eGD=new B.bT(A.z,0.5,A.x,null,0,X.a69,null,null)
D.fha=new B.a4(-18,0,18,1)
D.fhJ=new B.a4(-3,-5,3,5)
D.bZ1=new B.ae(A.ea,16,D.f1,null,null,null)
D.aYb=new B.G(!0,D.f1,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9w=new B.B("Screenshot added \xb7 tap to change",null,D.aYb,null,null,null,null,null,null,null,null,null)
D.d6q=w([D.bZ1,A.bn,D.h9w],x.p)
D.fiE=new B.c8(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.d6q,null)
D.c28=new B.ae(A.oJ,15,D.f1,null,null,null)
D.h7j=new B.B("Refresh",null,D.aYb,null,null,null,null,null,null,null,null,null)
D.d8Y=w([D.c28,A.df,D.h7j],x.p)
D.fiG=new B.c8(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d8Y,null)
D.eqI={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fkU=new B.di(D.eqI,3,x.M)
D.eqw={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fl5=new B.di(D.eqw,36,x.M)
D.eqz={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.flj=new B.di(D.eqz,6,x.M)
D.es7={memory:0,typing:1,scramble:2,pattern:3}
D.nc=new B.di(D.es7,4,x.M)
D.fnY=new B.au(276,276)
D.foH=new B.a5(13,null,null,null)
D.bg8=new B.fi(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.foT=new B.a5(26,26,D.bg8,null)
D.fpO=new B.hM(8,0,0,1,null)
D.haI=new B.B("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVy=new B.b0(D.haI,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOB=new B.B("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fsS=new B.b0(D.fOB,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPL=new B.B("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new B.b0(D.fPL,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h7u=new B.B("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ftC=new B.b0(D.h7u,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bsX=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fDL=new B.G(!0,D.bsX,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new B.ev("$",null,null,A.cN,null,null,null,null,null,null,D.fDL)
D.fx2=new B.G(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new B.G(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new B.G(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new B.G(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy5=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fye=new B.G(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyn=new B.G(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.G(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz9=new B.G(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new B.G(!0,D.f1,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new B.G(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAE=new B.G(!0,A.Cg,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWT=new B.G(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new B.G(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCA=new B.G(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fCU=new B.G(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new B.G(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new B.G(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fF_=new B.G(!0,A.jd,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blc=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fFh=new B.G(!0,D.blc,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGM=new B.G(!0,A.aA,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHb=new B.G(!0,D.ajh,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXB=new B.G(!0,A.Cg,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHw=new B.G(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new B.G(!0,A.by,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHQ=new B.G(!0,A.Cg,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xH=new B.G(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqa=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fI4=new B.G(!0,D.bqa,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIG=new B.G(!0,A.TN,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJN=new B.G(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJU=new B.G(!0,A.iz,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new B.G(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXX=new B.G(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKt=new B.G(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKx=new B.G(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new B.G(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLV=new B.G(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMc=new B.G(!0,A.be,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMH=new B.G(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fML=new B.G(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNL=new B.B("Value per pair",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fNN=new B.B("Restore now",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fOm=new B.B("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXl=new B.G(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOx=new B.B("AVAILABLE PLANS",null,D.aXl,null,null,null,null,null,null,null,null,null)
D.fOz=new B.B("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fP9=new B.B("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fAt=new B.G(!0,A.by,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPS=new B.B("PLAN VALUE",null,D.fAt,null,null,null,null,null,null,null,null,null)
D.fPV=new B.B("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fQh=new B.B("Deposit",null,A.Ww,null,null,null,null,null,null,null,null,null)
D.fKP=new B.G(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRk=new B.B("JACKPOT SLOTS",null,D.fKP,null,null,null,null,null,null,null,null,null)
D.fRD=new B.B("Restore",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fAz=new B.G(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRH=new B.B("YOUR NUMBER",null,D.fAz,null,null,null,null,null,null,null,null,null)
D.fRY=new B.B("SPIN REELS",null,E.acd,null,null,null,null,null,null,null,null,null)
D.fSr=new B.B("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fSZ=new B.B("Perfect Score Profit",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fTC=new B.B("Join room",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fVO=new B.B("Add payment screenshot",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fW3=new B.B("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fK1=new B.G(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWv=new B.B("INVITE A PLAYER",null,D.fK1,null,null,null,null,null,null,null,null,null)
D.fJ4=new B.G(!0,A.Z3,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX_=new B.B("NGMY GOLD LEADER",null,D.fJ4,null,null,null,null,null,null,null,null,null)
D.fXw=new B.B("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fXW=new B.B("Invest & Play",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.aXg=new B.G(!0,D.yu,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYn=new B.B("VALID THRU",null,D.aXg,null,null,null,null,null,null,null,null,null)
D.aXZ=new B.G(!0,A.aE,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYv=new B.B("DEALER",null,D.aXZ,null,null,null,null,null,null,null,null,null)
D.fYC=new B.B("CARDHOLDER",null,D.aXg,null,null,null,null,null,null,null,null,null)
D.fIw=new B.G(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZl=new B.B("NGMY PLATINUM",null,D.fIw,null,null,null,null,null,null,null,null,null)
D.fM1=new B.G(!0,A.qu,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_6=new B.B("EARNED SO FAR",null,D.fM1,null,null,null,null,null,null,null,null,null)
D.h_G=new B.B("VS",null,A.ace,null,null,null,null,null,null,null,null,null)
D.h06=new B.B("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h0t=new B.B("One day left",null,A.ac4,null,A.K,null,null,null,null,null,null,null)
D.h0P=new B.B("Keep typing \u2014 mistakes are counted in your payout",null,A.F6,null,null,null,null,null,null,null,null,null)
D.h0Q=new B.B("Multiplayer invite",null,A.iH,null,null,null,null,null,null,null,null,null)
D.h11=new B.B("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fyW=new B.G(!0,A.TN,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h17=new B.B("\ud83d\udcb0 Partial Payout System",null,D.fyW,null,null,null,null,null,null,null,null,null)
D.h1i=new B.B("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.fxP=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1z=new B.B("Investment Required",null,D.fxP,null,A.K,null,null,null,null,null,null,null)
D.h35=new B.B("Network Status",null,A.aWw,null,null,null,null,null,null,null,null,null)
D.aWD=new B.G(!0,A.ab,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3J=new B.B("Their account email",null,D.aWD,null,null,null,null,null,null,null,null,null)
D.h43=new B.B("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h44=new B.B("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h4k=new B.B("ACTIVE ASSET",null,D.aXl,null,null,null,null,null,null,null,null,null)
D.h4J=new B.B("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4O=new B.B("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5e=new B.B("YOUR HAND",null,D.aXZ,null,null,null,null,null,null,null,null,null)
D.h5P=new B.B("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h5S=new B.B("I sent it \u2014 submit deposit",null,A.lZ,null,null,null,null,null,null,null,null,null)
D.h6H=new B.B("Back",null,A.B3,null,null,null,null,null,null,null,null,null)
D.fMX=new B.G(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6P=new B.B("DEAL / PLAY ROUND",null,D.fMX,null,null,null,null,null,null,null,null,null)
D.h71=new B.B("Got it \u2014 keep chatting",null,A.ce,null,null,null,null,null,null,null,null,null)
D.h7b=new B.B("3 Messages Left",null,A.aXO,null,null,null,null,null,null,null,null,null)
D.h7J=new B.B("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h7S=new B.B("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h8e=new B.B("How many games?",null,D.aWD,null,null,null,null,null,null,null,null,null)
D.fHY=new B.G(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8q=new B.B("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fHY,null,A.K,null,null,null,null,null,null,null)
D.h9Z=new B.B("Question",null,null,null,null,null,null,null,null,null,null,null)
D.had=new B.B("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fNo=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbS=new B.B("NGMY  WALLET",null,D.fNo,null,null,null,null,null,null,null,null,null)
D.hbT=new B.B("Select Your Bet",null,A.h7,null,null,null,null,null,null,null,null,null)
D.hBf=new B.bl("history",x.W)
D.hBC=new B.bl("ngmy_local_home",x.W)
D.hBD=new B.bl("ngmy_local_invest",x.W)
D.hBE=new B.bl("ngmy_local_wallet",x.W)
D.hFa=new C.a_M(null)
D.b21=new C.aDG(0,"grid")
D.b22=new C.aDG(1,"questions")
D.hGe=new C.aDG(2,"answer")
D.hIL=new C.a0F(null)})();(function staticFields(){$.hbX=B.aR(x.N)
$.hDm=B.T(x.N,x.k)
$.hhR=null
$.hhF=B.T(x.N,B.aC("Gi"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iD5","bHG",()=>C.ikz())
w($,"iCS","hMq",()=>{var v=null,u=B.fD(v,A.cx,v,v,v,D.fwN,A.a7,A.c1,v,A.dK,A.c2)
u.ep()
return u})})()};
(a=>{a["wR6uwIJIrToU4lWc+y+GN5UcB1M="]=a.current})($__dart_deferred_initializers__);