((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,P,K,A2,L,Q,A3,E,R,M,A4,A5,A6,S,N,A7,A8,T,A9,Aa,U,Ab,V,Ac,Ad,Ae,W,Af,G,X,Ag,C={
hvy(d,e,f){var w=null,v=f.k("GU<0>"),u=new B.GU(w,w,w,w,v)
$.vX()
u.d=new C.cBH(new B.vu(),e,u,f,d)
return new B.i3(u,v.k("i3<1>"))},
cBH:function cBH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBI:function cBI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBE:function cBE(d){this.a=d},
cBF:function cBF(d,e){this.a=d
this.b=e},
cBG:function cBG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cBD:function cBD(d,e,f){this.a=d
this.b=e
this.c=f},
buF:function buF(d){this.a=d},
hvx(d,e,f,g){return new C.axS(d,e,f,null,g.k("axS<0>"))},
G5:function G5(){},
aKu:function aKu(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fdY:function fdY(d){this.a=d},
fdX:function fdX(d,e){this.a=d
this.b=e},
fe_:function fe_(d){this.a=d},
fdV:function fdV(d,e,f){this.a=d
this.b=e
this.c=f},
fdZ:function fdZ(d){this.a=d},
fdW:function fdW(d){this.a=d},
axS:function axS(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
inc(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.b4(w,1))
return w},
hGs(d){var w=C.inc(d)
if(w.length===0)return""
return"$"+w},
fNv(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fNv=B.e(function(f,g){if(f===1)return B.f(g,v)
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
if(!B.cR(m,"game payout:",0))if(!B.cR(m,"game partial:",0)){if(!B.cR(m,"multiplayer payout:",0))o=B.cR(m,"dice",0)&&q.e===A.fw
else o=l
l=o}if(!l){w=4
break}if(B.cR(m,"game payout:",0))k=A.a.i(A.a.b4(n,A.a.cn(m,"game payout:")+12))
else if(B.cR(m,"game partial:",0)){k=A.a.i(A.a.b4(n,A.a.cn(m,"game partial:")+13))
j=A.a.cn(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else if(B.cR(m,"multiplayer payout:",0)){k=A.a.i(A.a.b4(n,A.a.cn(m,"multiplayer payout:")+19))
j=A.a.cn(k,"(")
if(j>0)k=A.a.i(A.a.aA(k,0,j))}else k=B.cR(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vd(q.c,p,n,d,o,null,q.a,!0),$async$fNv)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fNv,v)},
is1(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ioe(d,e,f){return A.d.aU(e,new C.fRd(f,A.a.i(d.toLowerCase())))},
fR4(d){var w
C.hrH(d)
w=d.c5
return B.bp(new B.N(w,new C.fR5(),B.U(w).k("N<1,@>")),!0,x.N)},
idP(d,e,f){var w,v,u,t,s,r,q=null,p=A.c_,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eh().gib().b
if(u.a===0)t=1
else{new B.b7(u,B.a3(u).k("b7<2>")).gH(0)
u=$.lc()
s=u.d
t=s==null?u.ghn():s}w=A.i.cB(f*t)
v=new C.fxq(f)
if(J.d5(n,"data:image"))try{u=B.fX(A.cL.aN(A.d.gal(J.lP(n,","))),A.z,w,new C.fxn(v),A.h2,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d5(n,"supabase://"))return new B.lg(B.a3_(n),new C.fxo(f,e,p,w,v),q,q,x.gh)
return B.kJ(n,A.z,w,new C.fxp(v),A.h2,p,!0,e,q,q,f)},
hfE(d,e){return new B.a5(e,e,B.i_(C.idP(d,e,e),A.aq),null)},
i5U(){var w,v,u=B.a([],x._),t=x.N,s=B.C(D.dv7,x.gm)
for(w=0;w<36;++w){v=A.DU[w]
s.push(new C.rf(v.a,v.b,v.c,v.e,v.f))}return new C.aCD(u,B.T(t,t),s)},
fRd:function fRd(d,e){this.a=d
this.b=e},
fR5:function fR5(){},
fxq:function fxq(d){this.a=d},
fxn:function fxn(d){this.a=d},
fxo:function fxo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxm:function fxm(d){this.a=d},
fxp:function fxp(d){this.a=d},
an0:function an0(d,e,f,g,h,i,j){var _=this
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
aCD:function aCD(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dlk:function dlk(d,e){this.a=d
this.b=e},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlN:function dlN(){},
dlO:function dlO(d){this.a=d},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlC:function dlC(){},
dlE:function dlE(d){this.a=d},
dlB:function dlB(){},
dlG:function dlG(d){this.a=d},
dlF:function dlF(){},
dly:function dly(d){this.a=d},
dlw:function dlw(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlA:function dlA(d){this.a=d},
dlq:function dlq(d,e){this.a=d
this.b=e},
dlr:function dlr(d,e){this.a=d
this.b=e},
dlo:function dlo(d){this.a=d},
dlp:function dlp(d){this.a=d},
dls:function dls(d){this.a=d},
dlt:function dlt(d){this.a=d},
dlu:function dlu(d,e,f){this.a=d
this.b=e
this.c=f},
dln:function dln(d,e){this.a=d
this.b=e},
dlm:function dlm(d,e){this.a=d
this.b=e},
dll:function dll(d,e){this.a=d
this.b=e},
dlM:function dlM(d){this.a=d},
dlK:function dlK(d,e,f){this.a=d
this.b=e
this.c=f},
dlJ:function dlJ(d,e,f){this.a=d
this.b=e
this.c=f},
dlI:function dlI(d,e){this.a=d
this.b=e},
dlH:function dlH(){},
dlL:function dlL(d){this.a=d},
aFu:function aFu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bms:function bms(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dZW:function dZW(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZU:function dZU(){},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZZ:function dZZ(d){this.a=d},
an_:function an_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCC:function aCC(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dle:function dle(d){this.a=d},
dlh:function dlh(d){this.a=d},
dli:function dli(d){this.a=d},
dlj:function dlj(d){this.a=d},
dlg:function dlg(d,e){this.a=d
this.b=e},
dlf:function dlf(d,e){this.a=d
this.b=e},
an1:function an1(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCE:function aCE(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aO=_.aR=_.aK=_.aH=$
_.bH=_.bi=_.aZ=_.b1=null
_.aY=!1
_.bx=_.bn=null
_.c5=!1
_.bT=_.cT=""
_.c=_.a=_.bI=null},
dn6:function dn6(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dna:function dna(d){this.a=d},
dnb:function dnb(d){this.a=d},
dnc:function dnc(d){this.a=d},
dnd:function dnd(d){this.a=d},
dn7:function dn7(d){this.a=d},
dn8:function dn8(d){this.a=d},
dmm:function dmm(d,e){this.a=d
this.b=e},
dmn:function dmn(d,e){this.a=d
this.b=e},
dmQ:function dmQ(d){this.a=d},
dmR:function dmR(){},
dmC:function dmC(d,e,f){this.a=d
this.b=e
this.c=f},
dmD:function dmD(d){this.a=d},
dmE:function dmE(d,e,f){this.a=d
this.b=e
this.c=f},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmG:function dmG(){},
dlP:function dlP(d){this.a=d},
dml:function dml(d,e){this.a=d
this.b=e},
dmS:function dmS(){},
dn0:function dn0(){},
dmP:function dmP(d){this.a=d},
dmO:function dmO(d){this.a=d},
dmj:function dmj(d){this.a=d},
dmk:function dmk(){},
dmW:function dmW(){},
dmX:function dmX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dmY:function dmY(d,e,f){this.a=d
this.b=e
this.c=f},
dlQ:function dlQ(){},
dlR:function dlR(d){this.a=d},
dlS:function dlS(){},
dmv:function dmv(d,e){this.a=d
this.b=e},
dmw:function dmw(d,e,f){this.a=d
this.b=e
this.c=f},
dmx:function dmx(d){this.a=d},
dmu:function dmu(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmI:function dmI(){},
dmJ:function dmJ(d){this.a=d},
dmK:function dmK(){},
dmL:function dmL(d){this.a=d},
dmM:function dmM(){},
dmV:function dmV(d,e,f){this.a=d
this.b=e
this.c=f},
dmy:function dmy(d){this.a=d},
dmz:function dmz(d,e){this.a=d
this.b=e},
dmA:function dmA(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmZ:function dmZ(d){this.a=d},
dn_:function dn_(d){this.a=d},
dlT:function dlT(d){this.a=d},
dlU:function dlU(d,e){this.a=d
this.b=e},
dlV:function dlV(d){this.a=d},
dlW:function dlW(d){this.a=d},
dmT:function dmT(d,e){this.a=d
this.b=e},
dmU:function dmU(d){this.a=d},
dmt:function dmt(d,e){this.a=d
this.b=e},
dmN:function dmN(d,e,f){this.a=d
this.b=e
this.c=f},
dmr:function dmr(d,e,f){this.a=d
this.b=e
this.c=f},
dms:function dms(){},
dn1:function dn1(d){this.a=d},
dn2:function dn2(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn5:function dn5(d){this.a=d},
dn4:function dn4(){},
dmq:function dmq(d,e,f){this.a=d
this.b=e
this.c=f},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmo:function dmo(d,e){this.a=d
this.b=e},
dm8:function dm8(d){this.a=d},
dm7:function dm7(d,e){this.a=d
this.b=e},
dm9:function dm9(d){this.a=d},
dm6:function dm6(d,e){this.a=d
this.b=e},
dma:function dma(d){this.a=d},
dm5:function dm5(){},
dmb:function dmb(d){this.a=d},
dm3:function dm3(){},
dm4:function dm4(d){this.a=d},
dmc:function dmc(d){this.a=d},
dm2:function dm2(d,e){this.a=d
this.b=e},
dmd:function dmd(d){this.a=d},
dm1:function dm1(d,e){this.a=d
this.b=e},
dlY:function dlY(d,e){this.a=d
this.b=e},
dme:function dme(d){this.a=d},
dm0:function dm0(d,e){this.a=d
this.b=e},
dmf:function dmf(d){this.a=d},
dm_:function dm_(d){this.a=d},
dlX:function dlX(d,e){this.a=d
this.b=e},
dmg:function dmg(d,e,f){this.a=d
this.b=e
this.c=f},
dmh:function dmh(d){this.a=d},
dlZ:function dlZ(){},
dmi:function dmi(d){this.a=d},
anP:function anP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjw:function bjw(){this.c=this.a=null},
dqG:function dqG(d,e){this.a=d
this.b=e},
dqF:function dqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajS:function ajS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azG:function azG(d,e,f,g,h,i,j,k,l,m){var _=this
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
cNH:function cNH(d){this.a=d},
cN1:function cN1(d,e){this.a=d
this.b=e},
cMS:function cMS(d){this.a=d},
cMT:function cMT(d){this.a=d},
cNb:function cNb(d){this.a=d},
cN8:function cN8(d){this.a=d},
cN9:function cN9(d){this.a=d},
cNa:function cNa(d,e,f){this.a=d
this.b=e
this.c=f},
cN3:function cN3(d){this.a=d},
cN2:function cN2(d){this.a=d},
cMU:function cMU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cN6:function cN6(d){this.a=d},
cN5:function cN5(d){this.a=d},
cN4:function cN4(d,e){this.a=d
this.b=e},
cNu:function cNu(d){this.a=d},
cNo:function cNo(d){this.a=d},
cNr:function cNr(d){this.a=d},
cNq:function cNq(){},
cNn:function cNn(d){this.a=d},
cNp:function cNp(d,e){this.a=d
this.b=e},
cNm:function cNm(){},
cMZ:function cMZ(){},
cN_:function cN_(d,e){this.a=d
this.b=e},
cN0:function cN0(d){this.a=d},
cMX:function cMX(d,e){this.a=d
this.b=e},
cMY:function cMY(d,e){this.a=d
this.b=e},
cNe:function cNe(d,e){this.a=d
this.b=e},
cN7:function cN7(d){this.a=d},
cNf:function cNf(d){this.a=d},
cNg:function cNg(d,e){this.a=d
this.b=e},
cNh:function cNh(d,e){this.a=d
this.b=e},
cNi:function cNi(d,e){this.a=d
this.b=e},
cNj:function cNj(d,e,f){this.a=d
this.b=e
this.c=f},
cNk:function cNk(d){this.a=d},
cNl:function cNl(d){this.a=d},
cNc:function cNc(d,e){this.a=d
this.b=e},
cNt:function cNt(d){this.a=d},
cNd:function cNd(d,e){this.a=d
this.b=e},
cNG:function cNG(d){this.a=d},
cNz:function cNz(d){this.a=d},
cNC:function cNC(d){this.a=d},
cNw:function cNw(d,e){this.a=d
this.b=e},
cNA:function cNA(){},
cNB:function cNB(d,e){this.a=d
this.b=e},
cNx:function cNx(d){this.a=d},
cNy:function cNy(d){this.a=d},
cNE:function cNE(){},
cND:function cND(d){this.a=d},
cNv:function cNv(d,e){this.a=d
this.b=e},
cNF:function cNF(d){this.a=d},
cMV:function cMV(d){this.a=d},
cNs:function cNs(d,e){this.a=d
this.b=e},
cMW:function cMW(d,e,f){this.a=d
this.b=e
this.c=f},
aN_:function aN_(){},
aN0:function aN0(){},
aN1:function aN1(){},
aNZ:function aNZ(){},
c4o(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4p(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hUd(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_v(d,e){return C.hUe(d,e)},
hUe(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_v=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3k(d),$async$b_v)
case 3:p=g
if(p!=null){try{t=A.W.aP(0,p.c,null)
if(x.f.b(t)){s=C.hq1(B.a1(t,x.N,x.z))
if(s==null){u=new B.GP(D.a93,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4o(s,e,p.b)){u=new B.GP(D.aMi,null)
w=1
break}r=p.a?D.ekE:D.aMh
u=new B.GP(r,s)
w=1
break}}catch(o){}u=new B.GP(D.a93,null)
w=1
break}s=C.hq2(d)
if(s==null){u=new B.GP(D.a93,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4o(s,e,null)){u=new B.GP(D.aMi,null)
w=1
break}u=new B.GP(D.aMh,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_v,v)},
hq2(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d5(w,"\ufeff"))w=J.nv(w,1)
v=!1
if(J.d5(w,"NGMYSNAP1|")){v=!0
w=A.cb.cC(0,A.cL.aN(J.nv(w,10)))}u=A.W.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hUc(t):C.hq1(t)
return s}catch(r){return null}},
hUc(d){var w,v,u,t,s,r,q,p,o,n=new C.c4l(),m=new C.c4k(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aJ(w.h(0,"d"))
p=new B.w1(v,u,t,s,r,A.i.M(q==null?0:q))}else p=null
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
return new B.a7g("","",v,u,t,s,r,q,n,m,o,p,A.iD,new B.V(Date.now(),0,!1),-1)},
hq1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4n()
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
n=new B.w1(t,s,r,q,p,A.i.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.C(new B.ec(J.b8(m,new C.c4m(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
f=f==null?null:A.i.M(f)
return new B.a7g(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
h9R(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$h9R=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4j(d,e,f,g)
s=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hk(B.KW(t.f2(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h9R,v)},
Xs:function Xs(d,e){this.a=d
this.b=e},
c4l:function c4l(){},
c4k:function c4k(){},
c4n:function c4n(){},
c4m:function c4m(d){this.a=d},
igY(d){return B.cg(null,A.b5,!0,null,new C.fC1(),d,null,!0,!0,x.N)},
iha(d,e,f,g){return B.cg(null,A.b5,!0,null,new C.fDe(g,f,e),d,null,!0,!0,x.y)},
apm:function apm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEK:function aEK(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dHd:function dHd(d,e){this.a=d
this.b=e},
dHe:function dHe(d){this.a=d},
dH4:function dH4(d,e){this.a=d
this.b=e},
dH2:function dH2(d){this.a=d},
dHc:function dHc(d){this.a=d},
dHb:function dHb(d,e){this.a=d
this.b=e},
dH1:function dH1(d,e){this.a=d
this.b=e},
dH0:function dH0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dH3:function dH3(d){this.a=d},
dHa:function dHa(){},
dH8:function dH8(d){this.a=d},
dH9:function dH9(d,e){this.a=d
this.b=e},
dH5:function dH5(){},
dH6:function dH6(d,e){this.a=d
this.b=e},
dH7:function dH7(d,e){this.a=d
this.b=e},
dHf:function dHf(d){this.a=d},
a1U:function a1U(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvb:function bvb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0x:function a0x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blY:function blY(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dHj:function dHj(d){this.a=d},
dHg:function dHg(d,e){this.a=d
this.b=e},
dHh:function dHh(d,e){this.a=d
this.b=e},
dHi:function dHi(d){this.a=d},
a0y:function a0y(d){this.a=d},
blZ:function blZ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dHk:function dHk(d,e){this.a=d
this.b=e},
fC1:function fC1(){},
fDe:function fDe(d,e,f){this.a=d
this.b=e
this.c=f},
afT:function afT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7t:function f7t(d){this.a=d},
f7u:function f7u(d){this.a=d},
Re:function Re(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_F:function a_F(d){this.a=d},
aBW:function aBW(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgc:function dgc(d){this.a=d},
dg9:function dg9(){},
dga:function dga(d){this.a=d},
dgb:function dgb(d){this.a=d},
VA(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.NZ(s),$async$VA)
case 3:t=h
J.c5(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apD(s,t),$async$VA)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VA,v)},
hUw(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.U(d).k("Y<1>")
v=B.C(new B.Y(d,new C.c57(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c57:function c57(){},
imA(d){return A.d.dL(A.DU,new C.fNp(d),new C.fNq()).r},
fNp:function fNp(d){this.a=d},
fNq:function fNq(){},
apT:function apT(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bm5:function bm5(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dNH:function dNH(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNy:function dNy(d,e,f){this.a=d
this.b=e
this.c=f},
dND:function dND(d){this.a=d},
dNA:function dNA(d,e,f){this.a=d
this.b=e
this.c=f},
dNE:function dNE(d){this.a=d},
dNz:function dNz(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNB:function dNB(d){this.a=d},
dNC:function dNC(d){this.a=d},
hrH(d){var w=B.cdj(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bx=0
d.c5=B.a([],x.s)},
hrJ(d){return B.cg(null,A.w.j(0.82),!0,null,new C.cdo(),d,null,!0,!0,x.H)},
a7W:function a7W(d){this.a=d},
cdo:function cdo(){},
cdn:function cdn(d){this.a=d},
hFC(){var w=new B.V(Date.now(),0,!1),v=w.bS(B.dw(4-B.mz(w),0,0,0,0,0).a),u=B.c_(B.bC(v),1,4,0,0,0,0,0)
return""+B.bC(v)+"-W"+A.a.b0(A.o.v(1+A.i.bg(A.o.ar(v.bB(B.c_(B.bC(u),B.bL(u),B.bX(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fsk(d,e){var w,v,u,t,s,r,q=B.H0(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c7(r,"+local.ngmy")?A.a.aA(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
ibq(d,e){var w,v,u,t,s,r,q,p=B.H0(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c7(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===p){w=B.aJ(s.h(t,"winsLeft"))
w=w==null?null:A.i.M(w)
return w==null?0:w}}return 0},
iw1(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H0(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c7(q,"+local.ngmy")?A.a.aA(q,0,q.length-11):q)===n){w=B.aJ(s.h(t,o))
w=w==null?null:A.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ihQ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H0(b5),b2=B.ceF(),b3=C.hFC()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c7(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
q=B.aJ(r.h(s,a4))
o=q==null?a1:A.i.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.t(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a8(u)
v=B.aJ(w.h(u,a4))
v=v==null?a1:A.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aJ(w.h(u,"outcome"))
w=w==null?a1:A.i.M(w)
return w==null?1:w}n=new C.fE2()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c7(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c7(p,a3)?A.a.aA(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fsk(b4,b5)
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
a0=g==null?a1:A.i.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.cb(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aJ(d.h(0,a8))
a0=g==null?a1:A.i.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cb(h,a1)}}}return a1},
hBQ(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h4()?1:2
return s},
hg_(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ihR(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H0(a3),a1=new C.fE3()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c7(p,"+local.ngmy")?A.a.aA(p,0,p.length-11):p)!==a0)continue
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
q=new C.fE4(v+r+q>1,l)
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
return C.hg_(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ihP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aJ(i.h(0,"wins")),g=h==null?m:A.i.M(h)
if(g==null)g=0
h=B.aJ(i.h(0,"loses"))
w=h==null?m:A.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hFC():B.ceF()
t=v+"|"+u
s=C.fsk(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=B.aJ(h.h(s,k))
q=r==null?m:A.i.M(r)
if(q==null)q=0
r=B.aJ(h.h(s,j))
p=r==null?m:A.i.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aw(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
iql(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.blC()
w=C.ihR(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahp(d,a0,w)
return w}v=C.ihQ(d,a0)
if(v!=null){if(v===3)++d.f
C.ahp(d,a0,v)
return v}u=C.ihP(d,a0,a1)
if(u!=null)return new C.fUy(d,a1,a0).$1(u)
t=C.fsk(d,a0)
s=J.a8(t)
r=B.aJ(s.h(t,"winStreak"))
q=r==null?null:A.i.M(r)
if(q==null)q=0
s=B.aJ(s.h(t,"loseStreak"))
p=s==null?null:A.i.M(s)
if(p==null)p=0
o=new C.fUA(d,a1)
if(C.ibq(d,a0)>0){n=o.$0()
C.iw1(d,a0)
C.ahp(d,a0,n)
return n}if(q>=d.c){n=new C.fUz(d,a1).$0()
C.ahp(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahp(d,a0,n)
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
C.ahp(d,a0,e)
return e},
cex(d){var w=0,v=B.j(x.y),u
var $async$cex=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cew(d),$async$cex)
case 3:if(f){u=!0
w=1
break}u=B.cew(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cex,v)},
ahp(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fsk(d,e),s=J.a8(t),r=B.aJ(s.h(t,v)),q=r==null?null:A.i.M(r)
if(q==null)q=0
r=B.aJ(s.h(t,u))
w=r==null?null:A.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fE2:function fE2(){},
fE3:function fE3(){},
fE4:function fE4(d,e){this.a=d
this.b=e},
fUy:function fUy(d,e,f){this.a=d
this.b=e
this.c=f},
fUA:function fUA(d,e){this.a=d
this.b=e},
fUz:function fUz(d,e){this.a=d
this.b=e},
apl:function apl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blW:function blW(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.b9$=e
_.c=_.a=null},
dGQ:function dGQ(d){this.a=d},
dGP:function dGP(d){this.a=d},
dGR:function dGR(d){this.a=d},
dGO:function dGO(d,e){this.a=d
this.b=e},
aNx:function aNx(){},
Oq:function Oq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfP:function cfP(){},
cfO:function cfO(){},
arF:function arF(d,e,f){this.c=d
this.d=e
this.a=f},
haR(d,e,f){return B.cg(null,A.w.j(0.88),!0,null,new C.cgg(f,e),d,null,!0,!0,x.H)},
hYk(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
Oy:function Oy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgg:function cgg(d,e){this.a=d
this.b=e},
bmG:function bmG(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e6w:function e6w(d,e){this.a=d
this.b=e},
e6s:function e6s(){},
e6t:function e6t(){},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6v:function e6v(d,e){this.a=d
this.b=e},
aO8:function aO8(){},
hFy(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bl9(new C.fPM(w))
w=w.a
return w==null?null:w.c.a},
hFq(d){$.aU.x1$.push(new C.fPz(d))},
hFL(d){var w=$.tu().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hFy(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q4())w.eq()},
hFK(d){C.hBY(d,0)},
hBY(d,e){var w,v
if(e>4)return
w=d==null?$.tu().gbl():d
if(w==null||w.c==null)return
v=C.hFy(w)
if(v==="GameCenterScreen")return
if(D.fgL.q(0,v)&&w.q4()){w.eq()
$.aU.x1$.push(new C.fAl(w,e))}},
aS8(d,e,f){return B.eb(B.cm(new C.fR8(e,d,f)),e,!0)},
fPM:function fPM(d){this.a=d},
fPz:function fPz(d){this.a=d},
fPy:function fPy(d){this.a=d},
fAl:function fAl(d,e){this.a=d
this.b=e},
fR8:function fR8(d,e,f){this.a=d
this.b=e
this.c=f},
arJ(d,e){var w=0,v=B.j(x.H),u
var $async$arJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WF(e)
w=2
return B.b(B.arI(d,u),$async$arJ)
case 2:B.a8y(d,u)
return B.h(null,v)}})
return B.i($async$arJ,v)},
vd(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vd=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.yZ(g)
if(o.length===0){w=1
break}t=e==null?B.M5(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.Oz(o),$async$vd)
case 3:q=m
if(j!=null&&j.length!==0&&J.rq(q,new C.cgu(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.n7(q,0,new B.jv(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arJ(o,q),$async$vd)
case 4:if(i==null||r==null||s)C.a8A(o).bG(new C.cgv(),x.S).eF(new C.cgw())
case 1:return B.h(u,v)}})
return B.i($async$vd,v)},
a8A(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hGK
m=B.yZ(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.Oz(m),$async$a8A)
case 3:t=f
s=J.cE(t)
if(!s.aU(t,new C.cgt())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8A)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.W.av(s.h(t,o).aj(),null)!==A.W.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arJ(m,r),$async$a8A)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8A,v)},
b1Y(d){var w=0,v=B.j(x.S),u,t
var $async$b1Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.haU(d,!1),$async$b1Y)
case 3:t=J
w=4
return B.b(C.arK(d,!1),$async$b1Y)
case 4:u=t.dI(f,new C.cgs(new B.V(Date.now(),0,!1).bS(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1Y,v)},
arK(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.yZ(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.Oz(r),$async$arK)
case 3:t=g
s=B.WF(t)
if(s.length!==J.ad(t))C.arJ(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arK,v)},
io8(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bB(d).a,r=A.o.ar(s,6e7)
if(r<1)return"Just now"
w=A.o.ar(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ar(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.df(d),12)===0?12:A.o.F(B.df(d),12)
s=A.iX[B.bL(d)-1]
r=B.bC(d)===B.bC(t)?"":", "+B.bC(d)
w=A.a.b0(A.o.v(B.fV(d)),2,"0")
u=B.df(d)<12?"AM":"PM"
return s+" "+B.bX(d)+r+" \xb7 "+v+":"+w+" "+u},
bDj(d){var w=A.i.ad(Math.abs(d),2).split(".")
return"$"+B.ox(w[0],B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fx5(),null)+"."+w[1]},
bGY(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bGY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arK(e,!1),$async$bGY)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.haU(e,!0).bG(new C.h2z(e),t).bG(new C.h2A(),t).eF(new C.h2B())
w=4
return B.b(B.bT(A.L,null,new C.h2C(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bGY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bGY,v)},
hdW(d,e,f){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.dx(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hO,w,w,w),1)},
e6x(d,e,f){var w=null,v=A.w.j(0.22),u=B.l(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dx(A.dM,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.OJ,w,w,w),1)},
cgu:function cgu(d){this.a=d},
cgv:function cgv(){},
cgw:function cgw(){},
cgt:function cgt(){},
cgs:function cgs(d){this.a=d},
fx5:function fx5(){},
h2z:function h2z(d){this.a=d},
h2A:function h2A(){},
h2B:function h2B(){},
h2C:function h2C(d,e){this.a=d
this.b=e},
h2y:function h2y(d,e){this.a=d
this.b=e},
h2x:function h2x(d){this.a=d},
aeK:function aeK(d,e){this.c=d
this.a=e},
e6z:function e6z(){},
e6A:function e6A(){},
e6B:function e6B(){},
e6C:function e6C(d){this.a=d},
e6E:function e6E(){},
e6D:function e6D(d){this.a=d},
aeJ:function aeJ(d,e){this.c=d
this.a=e},
e6y:function e6y(){},
bGZ(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hO(A.b5,!1,w,d,new C.h2F(j,i,h,g,e,f),null,A.eU,!1,x.H)},
h2F:function h2F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h2D:function h2D(d,e){this.a=d
this.b=e},
h2E:function h2E(d,e){this.a=d
this.b=e},
aCF:function aCF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bic:function bic(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
dnf:function dnf(d,e){this.a=d
this.b=e},
dne:function dne(){},
af7:function af7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aN2:function aN2(){},
ast(d,e,f){return new C.b2O(f,d,e,null)},
hZ_(d){var w=B.a(A.i.ad(d,2).split("."),x.s),v=B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.ox(w[0],v,new C.cib(),null)
return A.d.aM(w,".")},
b20(){var w=$.tY
if((w>0?$.tY=w-1:w)<=0)$.tY=0},
aiy(d,e){var w=0,v=B.j(x.H),u
var $async$aiy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hiY
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiy)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiy,v)},
b2O:function b2O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cic:function cic(d){this.a=d},
cib:function cib(){},
O1:function O1(){},
c5E:function c5E(){},
hij(d){if(d>0)return"+"+d
return""+d},
hhy(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fR9(d,e){var w=J.t(e,d)
if(w==null)w=B.fPW().h(0,d)
return w==null?90:w},
fw0(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.kc(u,new C.fw1(),u.$ti.k("kc<ci.E,n>")))
A.d.e0(v,e)
return v},
hAV(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pO(s,3,s.$ti.k("ci.E")))
A.d.e0(t,e)
return t},
ije(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e0()
b2.cU(42)
for(w=x.s,v=0;v<200;++v){u=A.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aw(12)]
s=[2,3,5,6,7,10,11,13][b2.aw(8)]
r=A.i.M(Math.sqrt(t))
q=2+b2.aw(4)
p=A.o.ar(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.JD("Simplify \u221a("+t*s+"x^"+q+")",m,C.hAV(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JD("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fw0(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JD("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fw0(g,b2)))}else b1.push(new C.JD("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fw0(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h4()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.i.fK(a4)?""+A.i.M(a4):"\u221a"+a3
b1.push(new C.JD("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fw0(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JD("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hAV(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
iu6(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.ds(B.a(d.split(""),u),x.bJ).hg(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hg(t)
if(v!==d)return v}return new B.ds(t,x.bJ).hg(0)},
JD:function JD(d,e,f){this.a=d
this.b=e
this.c=f},
fw1:function fw1(){},
ar2:function ar2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFv:function aFv(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e_1:function e_1(d){this.a=d},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_4:function e_4(d,e){this.a=d
this.b=e},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_6:function e_6(d){this.a=d},
e_0:function e_0(d){this.a=d},
e_7:function e_7(d){this.a=d},
e__:function e__(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
arL:function arL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFL:function aFL(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e6K:function e6K(d,e,f){this.a=d
this.b=e
this.c=f},
e6L:function e6L(d){this.a=d},
e6G:function e6G(d){this.a=d},
e6I:function e6I(d,e){this.a=d
this.b=e},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6J:function e6J(d,e){this.a=d
this.b=e},
e6F:function e6F(d){this.a=d},
hVa(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bS(36e8)
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
a8I(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.aA(),$async$a8I)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cF(p,new C.ch_(),p.$ti.k("M.E"),x.b1)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b_(p,new C.ch0())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8I,v)},
as0(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$as0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8I(d),$async$as0)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.cgX(e))
q.I(r,e)
q.b_(r,new C.cgY())
w=3
return B.b(B.aA(),$async$as0)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,a9<n,@>>")
q=B.C(new B.N(q,new C.cgZ(),s),s.k("ak.E"))
w=4
return B.b(u.aC("String","ngmy_helper_calendar_v1_"+t,A.W.av(q,null)),$async$as0)
case 4:return B.h(null,v)}})
return B.i($async$as0,v)},
hYx(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dI(d,new C.ch1(v,v.bS(B.dw(14,0,0,0,0,0).a)))
w=B.C(w,w.$ti.k("M.E"))
return w},
hsi(d){var w,v,u,t,s,r,q,p,o,n,m=C.hYx(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cX(m,0,B.dD(20,"count",x.S),B.U(m).c),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.df(s),12)===0?12:A.o.F(B.df(s),12)
q=B.df(s)>=12?"PM":"AM"
p=A.a.b0(A.o.v(B.fV(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bL(s)+"/"+B.bX(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rV:function rV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ch_:function ch_(){},
ch0:function ch0(){},
cgX:function cgX(d){this.a=d},
cgY:function cgY(){},
cgZ:function cgZ(){},
ch1:function ch1(d,e){this.a=d
this.b=e},
hVb(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
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
hqB(d){var w=A.o.F(B.df(d),12)===0?12:A.o.F(B.df(d),12),v=B.df(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bX(d)+" "+w+":"+A.a.b0(A.o.v(B.fV(d)),2,"0")+" "+v},
VO(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.aA(),$async$VO)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aV(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cF(p,new C.c8M(),p.$ti.k("M.E"),x.Q)
p=B.C(p,B.a3(p).k("M.E"))
A.d.b_(p,new C.c8N())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VO,v)},
b0i(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0i=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aA(),$async$b0i)
case 2:u=g
t=B.cX(e,0,B.dD(120,"count",x.S),B.U(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.U(t).k("N<1,a9<n,@>>")
r=B.C(new B.N(t,new C.c8K(),r),r.k("ak.E"))
w=3
return B.b(u.aC("String","ngmy_call_memory_v1_"+s,A.W.av(r,null)),$async$b0i)
case 3:return B.h(null,v)}})
return B.i($async$b0i,v)},
b0j(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0j=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.T(x.N,x.Q)
o=J
w=2
return B.b(C.VO(d),$async$b0j)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b7<2>")
q=B.C(new B.b7(p,u),u.k("M.E"))
A.d.b_(q,new C.c8L())
w=5
return B.b(C.b0i(d,q),$async$b0j)
case 5:return B.h(null,v)}})
return B.i($async$b0j,v)},
c8O(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c8O=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VO(d),$async$c8O)
case 3:t=s.dI(g,new C.c8P(e.bS(-72e8),e.bS(72e8)))
t=B.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8O,v)},
hqC(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWx()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.aA(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
iq5(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c_(B.bC(p),B.bL(p),B.bX(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bS(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bS(r)
w=B.ag("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cE(o)
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
return B.c_(B.bC(n),B.bL(n),B.bX(n),u,t,0,0,0)},
hHd(d){var w=B.ag("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rW:function rW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c8M:function c8M(){},
c8N:function c8N(){},
c8K:function c8K(){},
c8L:function c8L(){},
c8P:function c8P(d,e){this.a=d
this.b=e},
hsl(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.m1(t,w,v,u==null?null:J.k(u))},
hYD(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b8(v,new C.ch9(),x.bP)
v=B.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.dp6
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iz(r,w,v,u,t,typeof d.h(0,s)=="number"?A.i.M(B.dF(d.h(0,s))):0)},
hYC(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ibE(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.i.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.i.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b8(s,new C.ch7(),x.u)
s=B.C(s,s.$ti.k("ak.E"))}return new C.ik(p,w,v,u,s==null?D.aD2:s,t)},
ibF(d){var w,v,u,t=B.J([G.Do,"investments",A.nO,"games",A.js,"loans",A.hB,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kf,"store",A.qX,"jobs",A.nN,"refunds",A.eW,"account",A.lr,"music",A.zu,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a3(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ibE(d){switch(d){case"investments":return G.Do
case"games":return A.nO
case"loans":return A.js
case"withdrawals":return A.hB
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qX
case"refunds":return A.nN
case"account":return A.eW
case"music":return A.lr
default:return A.zu}},
np(d){var w=B.a([new C.m1("text",d,null,null)],x.a)
return w},
aiv(){var w=null,v=x.v
return B.a([new C.ik("investments","Investments",G.Do,4280468830,B.a([new C.iz("inv1","How do I buy an investment plan?",C.np("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iz("inv2","When do I get paid from my plan?",C.np("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iz("inv3","Can I have more than one plan?",C.np("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.ik("games","Games",A.nO,4287323382,B.a([new C.iz("gam1","How do NGMY games work?",C.np("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iz("gam2","Why did my game payout change?",C.np("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.ik("loans","Loans",A.js,4294538006,B.a([new C.iz("loan1","How do I apply for a loan?",C.np("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iz("loan2","What is the repayment period?",C.np("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.ik("withdrawals","Withdrawals",A.hB,4282090230,B.a([new C.iz("wd1","How do I withdraw money?",C.np("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iz("wd2","Why is my withdrawal pending?",C.np("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.ik("deposits","Deposits",A.jN,4279548070,B.a([new C.iz("dep1","How do I deposit funds?",C.np("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iz("dep2","How long until my deposit posts?",C.np("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.ik("civic","Civic Registry",A.l2,4289170426,B.a([new C.iz("civ1","What is Civic Registry?",C.np("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iz("civ2","What does \u201cmissed\u201d mean on my profile?",C.np("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.ik("store","NGMY Store",A.kf,4293675161,B.a([new C.iz("sto1","How do I buy from NGMY Store?",C.np("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iz("sto2","How do I sell in the store?",C.np("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.ik("jobs","Jobs & Creator",A.qX,4293548044,B.a([new C.iz("job1","How do I find jobs?",C.np("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iz("job2","How do I post a job?",C.np("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.ik("refunds","Refunds",A.nN,4293870660,B.a([new C.iz("ref1","Can I get a refund?",C.np("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iz("ref2","How long do refunds take?",C.np("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.ik("account","Account",A.eW,4281908728,B.a([new C.iz("acc1","How do I update my profile?",C.np("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iz("acc2","I forgot my password \u2014 what now?",C.np("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.ik("music","Music Charts",A.lr,4290807036,B.a([new C.iz("mus1","What are Music Charts?",C.np("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iz("mus2","How do I upload music?",C.np("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.ik("help","Help Center",A.zu,4279080072,B.a([new C.iz("hlp1","Where can I get live help?",C.np("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iz("hlp2","How do daily Helper limits work?",C.np("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hsm(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiv()
v=v.dN(d,new C.chc(),x.i)
w=B.C(v,v.$ti.k("ak.E"))
A.d.b_(w,new C.chd())
return w.length===0?C.aiv():w},
hsn(d){var w=J.b8(d,new C.che(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
as2(d){return C.hYE(d)},
hYE(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$as2=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$as2)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_kb_v1",A.W.av(C.hsn(d),null)),$async$as2)
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
return B.i($async$as2,v)},
chb(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$chb)
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
break}n=C.hsm(o)
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
return B.i($async$chb,v)},
b2m(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2m=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b2m)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f5("ngmy_helper_kb",null,!1,A.bN),$async$b2m)
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
return B.i($async$b2m,v)},
b2n(d){return C.hYF(d)},
hYF(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2n=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b2n)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hN("ngmy_helper_kb",d,!1,!1,A.cP,null),$async$b2n)
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
return B.i($async$b2n,v)},
as3(){var w=0,v=B.j(x.I),u,t,s,r
var $async$as3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chb(),$async$as3)
case 3:s=e
w=4
return B.b(C.b2m(),$async$as3)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hsm(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.as2(t),$async$as3)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as3,v)},
chf(d){var w=0,v=B.j(x.y),u
var $async$chf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as2(d),$async$chf)
case 3:u=C.b2n(C.hsn(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chf,v)},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iz:function iz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cha:function cha(){},
ch9:function ch9(){},
ik:function ik(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ch8:function ch8(){},
ch7:function ch7(){},
chc:function chc(){},
chd:function chd(){},
che:function che(){},
bbH:function bbH(d){this.a=d},
WM:function WM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFX:function aFX(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
eaP:function eaP(){},
eaQ:function eaQ(){},
eaJ:function eaJ(d){this.a=d},
eaK:function eaK(d){this.a=d},
eas:function eas(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eau:function eau(d,e,f){this.a=d
this.b=e
this.c=f},
ear:function ear(d){this.a=d},
eaG:function eaG(d,e){this.a=d
this.b=e},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaI:function eaI(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaB:function eaB(d,e,f){this.a=d
this.b=e
this.c=f},
eaz:function eaz(d,e){this.a=d
this.b=e},
eaF:function eaF(d,e,f){this.a=d
this.b=e
this.c=f},
eaE:function eaE(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e,f){this.a=d
this.b=e
this.c=f},
eaw:function eaw(d){this.a=d},
eav:function eav(d){this.a=d},
eax:function eax(d,e){this.a=d
this.b=e},
eay:function eay(d){this.a=d},
eaO:function eaO(d,e){this.a=d
this.b=e},
eaN:function eaN(d,e){this.a=d
this.b=e},
eaM:function eaM(){},
eaL:function eaL(d,e){this.a=d
this.b=e},
QB:function QB(d,e){this.c=d
this.a=e},
bdC:function bdC(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cWr:function cWr(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWo:function cWo(d,e){this.a=d
this.b=e},
cWs:function cWs(d){this.a=d},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWt:function cWt(d){this.a=d},
cWu:function cWu(d,e){this.a=d
this.b=e},
a1j:function a1j(d,e,f){this.c=d
this.d=e
this.a=f},
aHX:function aHX(){this.d=$
this.c=this.a=null},
f2n:function f2n(d,e){this.a=d
this.b=e},
f2o:function f2o(d){this.a=d},
f2u:function f2u(){},
f2t:function f2t(d,e){this.a=d
this.b=e},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2p:function f2p(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e,f){this.a=d
this.b=e
this.c=f},
f2q:function f2q(d,e,f){this.a=d
this.b=e
this.c=f},
a1i:function a1i(d,e){this.c=d
this.a=e},
aHW:function aHW(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2h:function f2h(d){this.a=d},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2l:function f2l(d,e){this.a=d
this.b=e},
f2m:function f2m(d){this.a=d},
f2k:function f2k(d,e){this.a=d
this.b=e},
hYA(d){var w=new B.N(d,new C.ch4(),B.U(d).k("N<1,n>")).aM(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
ch5(d,e,f){return C.hYB(d,e,f)},
hYB(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ch5=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.La([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rm(B.ns(b3),C.hYA(b6)+"\n\nAdmin instruction:\n"+b4,A.i1,null,null),$async$ch5)
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
if(J.d5(s,"```"))s=A.a.ek(J.hlX(s,B.ag("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ag("\\s*```$",!0,!1,!1,!1),"")
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
J.c5(a0,C.hsl(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c5(a0,new C.m1("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.t(e,"question")
J.c5(g,new C.iz("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.hYz(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.i.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c5(m,new C.ik(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.La([m,null,p,a3])
w=1
break}catch(b7){a2=B.ac(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.La([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$ch5,v)},
hYz(d){switch(d){case"investments":return G.Do
case"games":return A.nO
case"loans":return A.js
case"withdrawals":return A.hB
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kf
case"jobs":return A.qX
case"refunds":return A.nN
case"account":return A.eW
case"music":return A.lr
default:return A.zu}},
iou(d,e,f){var w,v,u,t=B.bp(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fRx(f))
if(w>=0){t[w]=J.fm(e).cPV(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bfG(u)
return t},
ch4:function ch4(){},
fRx:function fRx(d){this.a=d},
dd7:function dd7(d){this.a=d},
WN:function WN(d,e,f){this.c=d
this.d=e
this.a=f},
aFZ:function aFZ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ebp:function ebp(){},
eb5:function eb5(d,e){this.a=d
this.b=e},
eba:function eba(d,e){this.a=d
this.b=e},
eb8:function eb8(d,e){this.a=d
this.b=e},
eb6:function eb6(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb9:function eb9(d,e,f){this.a=d
this.b=e
this.c=f},
eb1:function eb1(){},
eb2:function eb2(){},
eb3:function eb3(){},
eb4:function eb4(){},
ebf:function ebf(d,e){this.a=d
this.b=e},
ebg:function ebg(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebl:function ebl(){},
ebm:function ebm(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebb:function ebb(d,e){this.a=d
this.b=e},
i5y(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ag("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kZ(0,d),w=new B.Gs(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.aA(d,t,q)
o=u?A.cA:A.aL
m.push(new B.er(p,n,n,A.cM,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.er(p,n,n,A.cM,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.er(p,n,n,A.cM,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,A.cJ,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.er(p,n,n,A.cM,n,n,n,n,n,n,new B.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.ne,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.b4(d,t)
m.push(B.cS(n,n,n,n,n,n,n,n,n,B.m(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u8(A.cx,n,n,n,A.eS,n,n,!0,n,B.cS(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.c2)},
dry:function dry(d){this.a=d},
aDz:function aDz(d,e){this.a=d
this.b=e},
as1:function as1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFY:function aFY(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
eaZ:function eaZ(d,e){this.a=d
this.b=e},
eb_:function eb_(d,e){this.a=d
this.b=e},
eaR:function eaR(d){this.a=d},
eaS:function eaS(d){this.a=d},
eb0:function eb0(){},
eaU:function eaU(d,e){this.a=d
this.b=e},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaW:function eaW(){},
eaY:function eaY(){},
eaX:function eaX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaV:function eaV(d,e){this.a=d
this.b=e},
aDx:function aDx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
add:function add(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2l:function b2l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ch6:function ch6(d){this.a=d},
ad5:function ad5(d,e,f){this.c=d
this.d=e
this.a=f},
cPW:function cPW(d){this.a=d},
cPX:function cPX(){},
cPY:function cPY(d){this.a=d},
aDy:function aDy(d,e,f){this.c=d
this.d=e
this.a=f},
bjK:function bjK(){this.c=this.a=this.d=null},
drz:function drz(d,e){this.a=d
this.b=e},
drB:function drB(d,e){this.a=d
this.b=e},
drA:function drA(d){this.a=d},
i_8(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i_9(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i_7(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hAQ(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fvK(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
ipJ(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i_7(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asR:function asR(d,e){this.a=d
this.b=e},
JI:function JI(d,e){this.a=d
this.b=e},
t1:function t1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvK:function fvK(){},
as4:function as4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG_:function aG_(d,e,f,g,h,i,j){var _=this
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
ebD:function ebD(d,e){this.a=d
this.b=e},
ebu:function ebu(d){this.a=d},
ebw:function ebw(){},
ebx:function ebx(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebz:function ebz(){},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebB:function ebB(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebH:function ebH(){},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebM:function ebM(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebt:function ebt(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
ebr:function ebr(d){this.a=d},
aOg:function aOg(){},
chh(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.U1
w=1
break}w=3
return B.b(B.aA(),$async$chh)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aV(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.U1
w=1
break}try{q=B.a1(x.f.a(A.W.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WO(p,o,n,q)
w=1
break}catch(l){s=B.ac(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.U1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chh,v)},
as5(d,e){var w=0,v=B.j(x.H),u
var $async$as5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.aA(),$async$as5)
case 4:w=3
return B.b(g.aC("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.W.av(e.aj(),null)),$async$as5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$as5,v)},
chg(d){var w=0,v=B.j(x.gp),u,t
var $async$chg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WO(!0,!0,!0,!0)
w=3
return B.b(C.as5(d,t),$async$chg)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chg,v)},
hHe(d){var w=A.a.i(d.toLowerCase()),v=B.ag("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ag("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ag("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ag("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hHc(d){var w=B.ag("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WO:function WO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bH3(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bH3=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2g(h),$async$bH3)
case 3:if(j){w=1
break}w=4
return B.b(C.arY(h),$async$bH3)
case 4:if(d.e==null){w=1
break}t=B.qZ(d,!0)
t.toString
s=B.dl()
s.b=B.pE(new C.h3u(g,e,f,s),!1,!1)
t.md(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bH3,v)},
h3u:function h3u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3t:function h3t(d){this.a=d},
a03:function a03(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCY:function aCY(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
doU:function doU(d){this.a=d},
doV:function doV(d,e,f){this.a=d
this.b=e
this.c=f},
dp_:function dp_(){},
doZ:function doZ(d){this.a=d},
doW:function doW(d){this.a=d},
doX:function doX(){},
doY:function doY(d){this.a=d},
aN7:function aN7(){},
hZB(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hZA(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asC(d){return C.hZy(d)},
hZy(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f5("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asC)
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
return B.i($async$asC,v)},
b3b(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3b=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hZB(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3b)
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
return B.i($async$b3b,v)},
hsO(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.b4(v,14))
return w.length===0?null:w}return null},
hZz(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aU(e,new C.cj5(A.a.i(d.toLowerCase()),w))},
hsP(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qk(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qk(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qk(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qk(!1,0,"Verification code does not match this deposit.")
if(!C.hZz(e,d,w))return new C.qk(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hb9(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dYL
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aJ(t.h(d,u))
return new C.OP(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aJ(t.h(d,u))
return new C.OP(!0,!1,!0,!1)}B.aJ(t.h(d,u))
return new C.OP(!0,!1,!1,!1)},
cjb(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hsO(d)
if(s==null){u=D.U3
w=1
break}w=3
return B.b(C.asC(s),$async$cjb)
case 3:t=g
if(t==null){u=D.U3
w=1
break}u=C.hb9(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjb,v)},
b3d(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3d=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3b(d),$async$b3d)
case 3:s=g
if(s==null||s.length===0){u=D.U3
w=1
break}w=4
return B.b(C.asC(s),$async$b3d)
case 4:t=g
if(t==null){u=D.U3
w=1
break}u=C.hb9(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3d,v)},
cjc(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjc=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3b(d),$async$cjc)
case 3:t=j
if(t==null||t.length===0){u=new C.qk(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.X6(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjc,v)},
X6(d,e,f,g,h){return C.hZC(d,e,f,g,h)},
hZC(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X6=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hsO(a4)
if(a0==null){u=new C.qk(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asC(a0),$async$X6)
case 3:k=a8
if(k==null){u=new C.qk(!1,0,y.m)
w=1
break}j=C.hb9(k,a5)
if(j.b){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qk(!1,0,y.u)
w=1
break}if(j.c){u=new C.qk(!1,0,y.j)
w=1
break}i=C.hsP(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aJ(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qk(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f5("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$X6)
case 8:p=a8
if(p==null){u=new C.qk(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}o=C.hsP(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dL(p,f,e)
J.aK(n,"redeemedBy",q)
J.aK(n,"redeemedAt",r)
w=9
return B.b(B.hN("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cP,null),$async$X6)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hN("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cP,null),$async$X6)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.ac(a1)
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
return B.i($async$X6,v)},
OP:function OP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qk:function qk(d,e,f){this.a=d
this.b=e
this.c=f},
cj5:function cj5(d,e){this.a=d
this.b=e},
cjj(d,e){var w
B.hhU(d,e,!1)
B.rk(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Br(!0,!1,d.d,w)},
a95(d,e){if(d==null)return!1
return B.bC(d)===e.gcl()&&B.bL(d)===e.gci()&&B.bX(d)===e.gcz()},
hZK(d){var w=B.df(d)*60+B.fV(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hsW(d){if(B.df(d)>=12)return!1
if(B.mz(d)===6||B.mz(d)===7)return!1
return!0},
cjn(d){var w=d.c?d.bU():d
return w.d3(B.c_(B.bC(w),B.bL(w),B.bX(w),12,0,0,0,0))},
hbd(d,e){var w,v,u,t=d.gD3()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a95(d.fx,e)&&d.fy>0.0001)return A.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjn(w))return 0
v=B.c_(e.gcl(),e.gci(),e.gcz(),12,0,0,0,0)
if(!e.d3(v))return t
if(!e.ca(w))return 0
u=A.o.ar(v.bB(w).a,1000)
if(u<=0)return t
return A.i.D(t*(A.o.D(A.o.ar(e.bB(w).a,1000),0,u)/u),0,t)},
hbc(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a95(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aU(e,new C.cji(s))&&C.cjn(t)){r=d.gD3()
v=r>0
if(v){q=new B.d8(s,d.a,r,A.h7,A.fw,"Clock-in daily earnings (local)",null,null,A.cv,p)
C.cjj(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a95(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a95(o,p)&&!C.cjn(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cji:function cji(d){this.a=d},
idO(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iuZ(d,e,f,g,h,i){return B.hD(d,new C.asD(f,e,i,g,h,null),!0,null,x.H)},
hxa(d){var w,v,u=d.c?d.bU():d,t=B.df(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bX(u)+"/"+B.bC(u)+" \xb7 "+w+":"+A.a.b0(A.o.v(B.fV(u)),2,"0")+" "+v},
hF2(d){var w=d.x
if(w===A.dF)return"Processing"
if(w===A.kJ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
im5(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fT)return"Deposit"
if(w===A.f2)return"Withdrawal"
return v.length!==0?v:w.b},
idt(d){var w=d.d,v=w===A.fT||w===A.pb||w===A.h7||w===A.kK,u=d.x
if(u===A.dF)return w===A.f2?-d.c:0
if(u!==A.cv)return 0
w=d.c
return v?w:-w},
imE(d,e){var w,v,u,t,s,r,q=B.C(d,x.o)
A.d.b_(q,new C.fNw())
w=B.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.idt(s)
if(r<0)r=0
w.n(0,s.a,new B.bri(v,r))}return w},
asD:function asD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGm:function aGm(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
eq0:function eq0(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqI:function eqI(d){this.a=d},
eqJ:function eqJ(d){this.a=d},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqq:function eqq(){},
eqr:function eqr(d){this.a=d},
eqs:function eqs(){},
eqt:function eqt(d){this.a=d},
equ:function equ(d,e,f){this.a=d
this.b=e
this.c=f},
eqv:function eqv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqk:function eqk(d,e){this.a=d
this.b=e},
eq1:function eq1(d,e,f){this.a=d
this.b=e
this.c=f},
eql:function eql(){},
eqm:function eqm(){},
eqn:function eqn(d){this.a=d},
eqo:function eqo(){},
eq5:function eq5(d,e){this.a=d
this.b=e},
eq6:function eq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqe:function eqe(){},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d,e){this.a=d
this.b=e},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqf:function eqf(d){this.a=d},
eqg:function eqg(d,e,f){this.a=d
this.b=e
this.c=f},
eqh:function eqh(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqi:function eqi(d){this.a=d},
eq7:function eq7(d){this.a=d},
eq8:function eq8(d,e,f){this.a=d
this.b=e
this.c=f},
eqz:function eqz(){},
eqA:function eqA(){},
eqE:function eqE(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqG:function eqG(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d){this.a=d},
eqy:function eqy(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq2:function eq2(d){this.a=d},
eqa:function eqa(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e){this.a=d
this.b=e},
aDL:function aDL(d,e,f,g,h,i,j,k,l,m){var _=this
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
dtj:function dtj(){},
dtk:function dtk(){},
dtl:function dtl(d,e,f){this.a=d
this.b=e
this.c=f},
dti:function dti(d){this.a=d},
dtm:function dtm(d,e){this.a=d
this.b=e},
dth:function dth(d){this.a=d},
aDK:function aDK(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkt:function bkt(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dtc:function dtc(d){this.a=d},
dtd:function dtd(d){this.a=d},
dte:function dte(d){this.a=d},
dtf:function dtf(){},
dtg:function dtg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dtb:function dtb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dta:function dta(d){this.a=d},
be5:function be5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
be4:function be4(d,e,f){this.b=d
this.d=e
this.a=f},
be3:function be3(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDM:function aDM(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDN:function aDN(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dtD:function dtD(){},
dtE:function dtE(){},
dtF:function dtF(){},
dtp:function dtp(d){this.a=d},
dto:function dto(d,e){this.a=d
this.b=e},
dtn:function dtn(d,e){this.a=d
this.b=e},
dtA:function dtA(d,e){this.a=d
this.b=e},
dtC:function dtC(d,e){this.a=d
this.b=e},
dtB:function dtB(d,e){this.a=d
this.b=e},
dtz:function dtz(){},
dty:function dty(d){this.a=d},
dtx:function dtx(){},
dts:function dts(d){this.a=d},
dtt:function dtt(){},
dtu:function dtu(d){this.a=d},
dtv:function dtv(d){this.a=d},
dtr:function dtr(){},
dtw:function dtw(d){this.a=d},
dtq:function dtq(d){this.a=d},
bdv:function bdv(d){this.a=d},
fNw:function fNw(){},
byC:function byC(d,e){this.b=d
this.a=e},
aNn:function aNn(){},
bAB:function bAB(){},
iiI(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fFe(v,g))
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
aRA(d){var w,v=J.a8(d),u=B.aJ(v.h(d,"matchesTotal")),t=u==null?null:A.i.M(u)
if(t==null)t=1
v=B.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:A.i.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
itD(d,e){var w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fYx(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiJ(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRA(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ilo(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRA(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRA(d)>0},
iln(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aJ(i.h(d,"matchesTotal")),g=h==null?null:A.i.M(h)
if(g==null)g=1
h=B.aJ(i.h(d,"matchesPlayed"))
w=h==null?null:A.i.M(h)
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
iiH(d,e){var w
C.aiJ(e)
w=B.U(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fFd(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uB(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ifd(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hhu(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ifd(x.f.b(u)?B.a1(u,r,q):B.T(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bFS(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bFS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$bFS)
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
return B.i($async$bFS,v)},
bEV(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bEV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bFS(),$async$bEV)
case 3:u=t.hhu(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEV,v)},
LX(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$LX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hC8.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bB(p)
t=t.a>B.dw(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hC8.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S_(A.ce,q),$async$LX)
case 5:case 4:s=$.hC7.h(0,q)
if(s==null){u=C.uB(e,q)
w=1
break}r=C.uB(B.bF1(e,B.a([s],x._)),q)
if(r!=null)B.hkc(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$LX,v)},
itS(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ibL(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.J(["ttt",B.c1(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e6(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c1(7,0,!1,q)
return B.J(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e6(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.ix(8,new C.fts(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
iiG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ibL(u,f)
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
itQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aJ(t.h(u,i))
w=w==null?null:A.i.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=B.aJ(t.h(u,"matchesTotal"))
q=w==null?null:A.i.M(w)
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
hkb(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fWY(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fWY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiJ(d)
t=$.hgJ
if(t==null)s=$.hgJ=B.S_(A.ce,null).fv(new C.fWZ())
else s=t
w=3
return B.b(s,$async$fWY)
case 3:r=f
if(r==null){u=B.bp(new B.N(d,new C.fX_(),B.U(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bF1(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWY,v)},
aiK(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiJ(d)
t=B.U(d).k("N<1,a9<n,@>>")
t=B.C(new B.N(d,new C.fUL(),t),t.k("ak.E"))
w=3
return B.b(B.S_(t,null),$async$aiK)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bF1(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiK,v)},
aSt(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSt=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hkb(d,e,f)
t=C.uB(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S_(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSt)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uB(s,e)
if(r!=null)B.hkc(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSt,v)},
iqt(d,e,f){var w
C.hkb(d,e,f)
w=$.hgw.h(0,e)
if(w!=null)w.a1(0)
$.hgw.n(0,e,B.cz(A.lM,new C.fUM(e,d)))},
haV(d,e){return new C.b1Z(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fFe:function fFe(d,e){this.a=d
this.b=e},
fYx:function fYx(d){this.a=d},
fFd:function fFd(d){this.a=d},
fts:function fts(d){this.a=d},
fWZ:function fWZ(){},
fX_:function fX_(){},
fUL:function fUL(){},
fUM:function fUM(d,e){this.a=d
this.b=e},
b1Z:function b1Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
iul(d,e,f){return B.bT(A.L,null,new C.fZJ(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fZJ:function fZJ(d,e){this.a=d
this.b=e},
a0R:function a0R(d,e,f){this.c=d
this.d=e
this.a=f},
aGa:function aGa(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
ekH:function ekH(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekJ:function ekJ(d){this.a=d},
ekM:function ekM(d){this.a=d},
ekN:function ekN(d,e){this.a=d
this.b=e},
ekI:function ekI(d,e){this.a=d
this.b=e},
ioT(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iY
w=t.toLowerCase()
v=B.ag("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iY
v=Date.now()
u=C.iew(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kL("calendar",B.J(["title",C.iev(t,w),"start",u.ag(),"end",u.bS(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
iev(d,e){var w,v,u,t,s,r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cE(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ag("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cE(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hCY(A.a.i(t))}s=B.ag("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cE(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hCY(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hCY(d){var w
if(d.length===0)return d
w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fEc(),B.U(w).k("N<1,n>")).aM(0," ")},
iew(d,e){var w,v,u,t,s,r,q,p,o=B.c_(B.bC(e),B.bL(e),B.bX(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bS(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKd.gdP(D.aKd),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cR(d,u,0)){t=C.ids(o,v.b)
o=t
break}}s=B.ag("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cE(d)
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
q=0}return B.c_(B.bC(o),B.bL(o),B.bX(o),r,q,0,0,0)},
ids(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mz(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fEc:function fEc(){},
ioU(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.iY
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.ag("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cE(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.iaz(w,j)
if(q==null||q.length===0)return A.iY
t=B.ag("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.ag("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kL("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kL(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kL("call",B.J(["name",q],t,t))],x.Z)}return A.iY},
iaz(d,e){var w,v,u,t,s,r,q=[B.ag("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ag("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ag("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cE(d)
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
if(u)return C.ihX(t)}r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cE(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
ihX(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fEb(),B.U(w).k("N<1,n>")).aM(0," ")},
fEb:function fEb(){},
hHl(d){var w=new B.N(d,new C.fXf(),B.U(d).k("N<1,a9<n,@>>")).c_(0,new C.fXg())
w=B.C(w,w.$ti.k("M.E"))
return w},
fXf:function fXf(){},
fXg:function fXg(){},
ioX(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.iY
w=A.a.i(d)
if(w.length===0)return A.iY
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.iY
u=B.ag("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cE(w)
if(u==null)return A.iY
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.ag("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cE(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.ag("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cE(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kL("send_email",t)],x.Z)},
io4(d,e){var w
if(e)return d
w=J.dI(d,new C.fQU())
w=B.C(w,w.$ti.k("M.E"))
return w},
fQU:function fQU(){},
iqq(d){switch(d){case"blackjack_vegas":return D.e1R
case"roulette_euro":return D.e1B
case"slots_jackpot":return D.e1I
case"poker_texas":return D.e1L
case"chess_royale":return D.e1C
case"connect_four_pro":return D.e1D
case"domino_block":return D.e1F
case"plinko_prizes":return D.e1N
case"spin_wheel":return D.e1K
case"baccarat_punto":return D.e1E
case"craps_table":return D.e1M
case"casino_war":return D.e1G
case"bingo_live":return D.e1J
case"solitaire_klondike":return D.e1Q
case"backgammon_pro":return D.e1A
case"billiards_snooker":return D.e1O
case"profit_solve":return D.e1P
default:return D.e1H}},
fUC(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.l(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.p(p,B.as(B.W(A.nL,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.o(p,p,v,w,u,D.caL,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.l(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ab(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.p(p,B.x(B.a([new B.D(D.bJg,B.d(D.cJk[t-1]+"\n"+r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b3,B.as(B.d(r,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b3],x.p),A.E,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(A.hL,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
irB(d,e){var w,v=null,u=B.l(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.U(e).k("N<1,h8>")
r=B.C(new B.N(e,new C.fWH(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.p(v,B.x(B.a([D.fN8,A.af,B.A(r,A.l,v,A.b8,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(v,v,t,u,s,D.cb4,A.n),v,v,v,v,I.ane,v,v,v),A.aB,B.dh(A.atn,v,D.fNM,d,B.bo(A.aQ,v,v,v,A.dA,v,Ao.a1u,v,v,v,v,v))],w),A.l,v,A.e,A.h,0,A.p)},
pB:function pB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btq:function btq(d,e){this.b=d
this.a=e},
fWH:function fWH(){},
i_k(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e6(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e6(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.at3(B.T(p,x.z),n,u,s,r,t,q,new B.au(A.aw,$.ax()))},
ijg(d,e,f,g,h){var w=new C.fH_(f,h)
switch(d){case"checkers_deluxe":return C.i99(h,g,e,w)
case"tic_tac_go":return C.iia(h,g,e,w)
case"blackjack_vegas":return C.i8t(h,g,e,new C.fGU(w))
case"roulette_euro":return C.igp(h,g,e,new C.fGV(w))
case"slots_jackpot":return C.ihf(h,g,e,new C.fGW(w))
case"billiards_snooker":return C.ifg(h,g,e,new C.fGX(w))
case"connect_four_pro":return C.i9w(h,g,e,w)
case"profit_solve":return C.ifj(h,g,e,new C.fGY(w))
default:return C.i96(d,h,g,e,new C.fGZ(w))}},
i99(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),u=B.l(12),t=B.K(D.ZT,A.r,8),s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eO,v,w),B.E(B.as(new B.fH(1,B.p(w,B.bu(B.l(6),B.iv(!0,w,w,A.y,D.flD,new C.fqx(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
iia(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eO,B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),w),B.E(B.as(new B.fH(1,B.cm(new C.fEx(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
i8t(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xC,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fpP(),B.U(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fUC(q[0],!1),A.bn,C.fUC(0,!0)],t))
s=B.A(s,A.l,v,A.b8,A.h,0,v,v)
r=B.d("Total: "+d.a4F(d.ay),v,v,v,v,v,v,D.fI0,v,v,v)
q=d.ay
w=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.fpQ(),w),w.k("ak.E"))
q=B.bZ(A.fU,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eO,u,v),D.fUj,A.am,s,A.aB,D.h10,r,A.am,q,A.b3,B.A(B.a([B.E(B.bI(D.fOf,v,d.CW?v:new C.fpR(d,e,f,g),v),1),A.ae,B.E(B.bI(D.h3v,v,new C.fpS(d,e,f,g),v),1)],t),A.l,v,A.e,A.h,0,v,v)],t),A.l,v,A.e,A.h,0,A.p)},
igp(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eO,v,w),B.p(w,B.b5(w,w,w,new C.btq(u,w),A.az),A.f,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fuZ,w,w,w),w))
t.push(A.af)
t.push(B.bZ(A.fU,B.ix(6,new C.fBs(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
ihf(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),u=d.db,t=B.U(u).k("N<1,n>")
u=B.C(new B.N(u,new C.fDo(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eO,v,w),C.irB(new C.fDp(d,e,f,g),u)],x.p),A.l,w,A.e,A.h,0,A.p)},
ifg(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),u=B.l(20),t=B.K(A.iL,A.r,12),s=x.V,r=B.a([new B.ab(0,A.G,A.w.j(0.45),A.dp,18)],s),q=x.p
return B.x(B.a([new B.D(A.eO,v,w),B.E(B.p(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.p(w,w,A.f,w,w,D.b8g,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.p(w,w,A.f,w,w,A.afA,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eI(A.z,d.dx,B.p(w,w,A.f,w,w,new B.o(A.aQ,w,w,B.l(2),B.a([new B.ab(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.o(w,w,t,u,r,D.eEl,A.n),w,w,w,A.f5,w,w,w,w),1),B.l3(A.bi,w,w,1,0,new C.fAh(d,f),d.dy),B.bI(D.fTk,w,new C.fAi(d,e,g,f),w)],q),A.l,w,A.e,A.h,0,A.p)},
i9w(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xC,A.K,v,v),t=x.l,s=J.e6(7,t)
for(w=0;w<7;++w)s[w]=new B.by(1,A.ba,B.az(v,B.x(B.ix(6,new C.fqZ(d,w),!0,t),A.l,v,A.mt,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fr_(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eO,u,v),B.E(B.as(new B.fH(1.1666666666666667,B.A(s,A.dN,v,A.e,A.h,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
ifj(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eO,B.d(d.c,w,w,w,w,w,w,D.xC,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iH,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aXH,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c6o,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fAt(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bI(D.fRS,w,new C.fAu(d,e,g,f),w)],x.p),A.l,w,A.e,A.h,0,A.p)},
i96(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.iqq(d)
v=D.aK2.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.kI,A.K,n,n)
u=B.l(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.G,w.c.j(0.35),A.eR,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,Al.L_,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.mC,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.as(B.p(n,B.x(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.m(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.db,B.W(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b8,A.h,0,A.p),A.f,n,n,new B.o(n,n,r,u,q,new B.a7(A.aZ,A.b4,A.x,t,n,n),A.n),n,n,n,A.f5,A.ac,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bI(D.h2B,n,new C.fqk(f,e,g,h),B.bo(s,n,n,n,A.d.gH(t).iV()>0.4?A.w:A.c,n,A.cp,n,n,n,n,n)),n)],k),A.l,n,A.e,A.h,0,A.p)},
Fs:function Fs(d,e){this.a=d
this.b=e},
at3:function at3(d,e,f,g,h,i,j,k){var _=this
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
ckZ:function ckZ(){},
cl_:function cl_(){},
ckY:function ckY(){},
cl0:function cl0(){},
ckX:function ckX(){},
cl2:function cl2(){},
cl3:function cl3(){},
ckW:function ckW(d){this.a=d},
cl1:function cl1(){},
ckV:function ckV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH_:function fH_(d,e){this.a=d
this.b=e},
fGU:function fGU(d){this.a=d},
fGV:function fGV(d){this.a=d},
fGW:function fGW(d){this.a=d},
fGX:function fGX(d){this.a=d},
fGY:function fGY(d){this.a=d},
fGZ:function fGZ(d){this.a=d},
fqx:function fqx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqw:function fqw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEx:function fEx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEw:function fEw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEv:function fEv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fpP:function fpP(){},
fpQ:function fpQ(){},
fpR:function fpR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpS:function fpS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBs:function fBs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBr:function fBr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDo:function fDo(){},
fDp:function fDp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAh:function fAh(d,e){this.a=d
this.b=e},
fAi:function fAi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fr_:function fr_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqZ:function fqZ(d,e){this.a=d
this.b=e},
fAt:function fAt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAu:function fAu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqk:function fqk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
im7(d){var w,v=B.U(d).k("Y<1>")
v=B.pO(new B.Y(d,new C.fMz(),v),120,v.k("M.E"))
w=B.cF(v,new C.fMA(),B.a3(v).k("M.E"),x.N).aM(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fMz:function fMz(){},
fMA:function fMA(){},
aiX(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
atZ:function atZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aGY:function aGY(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eS7:function eS7(){},
aOS:function aOS(){},
hYh(){var w=$.Jv
if(w<=0)return;--w
$.Jv=w
if(w===0){w=$.hs8
if(w!=null)w.$0()}},
cgf(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arE(d){var w=0,v=B.j(x.H),u,t
var $async$arE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.haQ.I(0,t)
w=4
return B.b(B.aA(),$async$arE)
case 4:w=3
return B.b(f.aC("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arE)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arE,v)},
arD(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgf(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.haQ.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.aA(),$async$arD)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k8(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arD,v)},
WL(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$WL)
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
return B.i($async$WL,v)},
b2f(d){return C.hYu(d)},
hYu(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2f=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b2f)
case 6:s=f
w=7
return B.b(s.aC("String","ngmy_helper_ai_usage_v1",A.W.av(d,null)),$async$b2f)
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
return B.i($async$b2f,v)},
b2d(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afq(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bj(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afq(typeof v=="number"?A.o.D(A.i.M(v),0,999999):0,t)},
b2e(d,e){if(A.o.ar(e.bB(d.b).a,36e8)>=24)return new B.afq(0,e)
return d},
cgQ(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$cgQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WL(),$async$cgQ)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2e(C.b2d(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgQ,v)},
cgR(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$cgR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WL(),$async$cgR)
case 3:t=g
s=Date.now()
r=C.b2e(C.b2d(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgR,v)},
hYv(d){var w,v,u,t=d.a,s=A.o.ar(t,1e6)
if(s<=0)return"0s"
w=A.o.ar(t,36e8)
v=A.o.ar(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b0(A.o.v(v),2,"0")+"m "+A.a.b0(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b0(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2g(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WL(),$async$b2g)
case 3:t=p.b2e(o.b2d(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.aA(),$async$b2g)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k8(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2g,v)},
arY(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$arY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WL(),$async$arY)
case 3:t=s.b2e(r.b2d(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.aA(),$async$arY)
case 5:w=4
return B.b(f.aC("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$arY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$arY,v)},
arZ(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$arZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WL(),$async$arZ)
case 3:s=g
r=Date.now()
q=C.b2e(C.b2d(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aK(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2f(s),$async$arZ)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arZ,v)},
aiw(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiw=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hHd(a0))if(!C.hHc(a0)){p=B.ag("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hHd(a0)?3:4
break
case 3:o=C.iq5(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c8O(e,o),$async$aiw)
case 7:n=a2
p=J.a8(n)
if(p.gcm(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hqB(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWx()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ag("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MR("text/plain"),$async$aiw)
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
case 13:case 9:w=C.hHc(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8I(e),$async$aiw)
case 17:m=f.hsi(a2)+"\n"
p.a+=m
case 16:p=B.ag("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VO(e),$async$aiw)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hqC(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiw,v)},
hZS(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cjs(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cjs=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.ht0(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$cjs)
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
return B.i($async$cjs,v)},
asG(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f5("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asG)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cC(0,A.cL.aN(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIp(m,p,n)
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
return B.i($async$asG,v)},
b3k(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hZS(q)?3:4
break
case 3:w=5
return B.b(C.cjs(q),$async$b3k)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asG(t)
w=1
break
case 4:if(A.a.a_(q,"NGMYLOCALSYNC1|")){u=C.asG(A.a.i(A.a.b4(q,15)))
w=1
break}w=A.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asG(A.a.i(A.a.b4(q,15))),$async$b3k)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIp(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3k,v)},
htg(d){var w=d.bL
if(w>=0)return w
return 1},
aiI(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSE(d,e),$async$aiI)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HB(d,null,null,!1,!0,""),$async$aiI)
case 5:w=4
return B.b(t.$1(h),$async$aiI)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiI,v)},
ioS(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iY
w=a1.toLowerCase()
v=B.ag("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ag("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cE(w)
if(!u&&t==null)return A.iY
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.ieu(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hBK(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ar(v,e)<=180)q.b="Reminder \u2014 "+A.o.ar(v,e)+" min"}else{if(t!=null){v=B.ag("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.ek(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hBL(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c_(B.bC(s),B.bL(s),B.bX(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bS(a0)
r.b=B.c_(B.bC(l),B.bL(l),B.bX(l),n,m,0,0,0).bS(-36e8)
if(r.bm().d3(s.bS(e)))r.b=J.c5(r.bm(),A.ox)
v=C.iiE(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b0(A.o.v(m),2,"0")+" "+j)}else{l=B.c_(B.bC(s),B.bL(s),B.bX(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bS(a0)
i=B.ag("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cE(w)
if(i!=null){o=i.b
h=C.hBL(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c_(B.bC(l),B.bL(l),B.bX(l),h,g,0,0,0)
r.b=f.d3(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hBK(a1,w)}}v=x.N
return B.a([new B.kL("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ieu(d){var w,v,u,t,s,r,q=[B.ag("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ag("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cE(d)
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
iiE(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hBL(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hBK(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.ag("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cE(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
i_d(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ah,I,Y,O,Ai,Z,F,Aj,Ak,A_,Al,Am,An,A0,Ao,Ap,Aq,A1,Ar
J=c[1]
B=c[0]
A=c[2]
P=c[64]
K=c[61]
A2=c[209]
L=c[36]
Q=c[201]
A3=c[214]
E=c[195]
R=c[145]
M=c[203]
A4=c[126]
A5=c[121]
A6=c[199]
S=c[40]
N=c[82]
A7=c[161]
A8=c[204]
T=c[194]
A9=c[207]
Aa=c[205]
U=c[87]
Ab=c[88]
V=c[170]
Ac=c[206]
Ad=c[202]
Ae=c[198]
W=c[136]
Af=c[118]
G=c[210]
X=c[185]
Ag=c[122]
C=a.updateHolder(c[6],C)
D=c[192]
H=c[30]
Ah=c[73]
I=c[197]
Y=c[117]
O=c[102]
Ai=c[208]
Z=c[31]
F=c[196]
Aj=c[160]
Ak=c[158]
A_=c[131]
Al=c[159]
Am=c[193]
An=c[212]
A0=c[200]
Ao=c[215]
Ap=c[151]
Aq=c[211]
A1=c[81]
Ar=c[213]
C.buF.prototype={
pa(d,e){return this.a.$2(d,e)}}
C.G5.prototype={
S(){return new C.aKu(this.$ti.k("aKu<G5.T,G5.S>"))}}
C.aKu.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hw(A.GQ,v,null,null,w.$ti.k("hw<1>"))
u.e=w
u.X6()},
bz(d){var w,v=this
v.bK(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQk()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.GQ,w.b,w.c,w.d,w.$ti)}v.X6()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mw(d,w)},
t(){this.aQk()
this.a2()},
X6(){var w,v=this
v.d=v.a.c.lO(new C.fdY(v),new C.fdZ(v),new C.fe_(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.a0_,w.b,w.c,w.d,w.$ti)},
aQk(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axS.prototype={
mw(d,e){return this.e.$2(d,e)}}
C.an0.prototype={
S(){return C.i5U()},
bv(){return this.r.$0()}}
C.rf.prototype={}
C.aCD.prototype={
aen(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aen=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hrH(r)
if(r.x==null||r.c5.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hrJ(s),$async$aen)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aen,v)},
Yz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asE(t.a.c),$async$Yz)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cgf(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arD(t.a.c),$async$Yz)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dlk(t,s))
if(!s)t.aen()
case 1:return B.h(u,v)}})
return B.i($async$Yz,v)},
adY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bFS(),$async$adY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dlv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adY,v)},
Y(){var w,v,u=this
u.byL()
$.tY=$.tY+1
w=u.a
$.bFX=w.c.a
w=w.d.bd
v=B.U(w).k("N<1,a9<n,@>>")
w=B.C(new B.N(w,new C.dlN(),v),v.k("ak.E"))
u.f=w
u.adY()
u.Km()
u.Yz()
u.e=B.dg(A.ov,new C.dlO(u))},
Km(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Km=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiJ(t.a.d.bd)
w=3
return B.b(C.fWY(t.a.d.bd),$async$Km)
case 3:s=e
if(t.c==null){w=1
break}C.aiJ(t.a.d.bd)
if(s!=null)t.m(new C.dlD(t,s))
else t.m(new C.dlE(t))
case 1:return B.h(u,v)}})
return B.i($async$Km,v)},
t(){C.b20()
var w=this.e
if(w!=null)w.a1(0)
this.byK()},
ajf(d,e,f){return this.cyP(d,e,f)},
cyP(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.iiI(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aiK(t.a.d.bd),$async$ajf)
case 3:if(t.c==null){w=1
break}t.m(new C.dlG(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajf,v)},
J9(d,e){return this.cjQ(d,e)},
c6G(d){return this.J9(d,null)},
cjQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uB(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRA(s)<=0){t.c.L(x.q).f.T(D.aVi)
w=1
break}}w=5
return B.b(C.arD(t.a.c),$async$J9)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.haR(r,C.fR4(q.c),p),$async$J9)
case 6:w=1
break
case 4:o=new C.dly(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hD(r,new C.aFu(p,q.d,q.f,q.r,new C.dlz(o),q.w,C.fR4(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hD(q,new C.an_(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dlA(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
c3R(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiJ(i.a.d.bd)
C.aiJ(i.f)
w=C.itD(i.a.c.a,i.f)
v=C.iiH(i.a.c.a,i.f)
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
o=o==null?h:A.i.M(o)
if(o==null)o=1
r=B.aJ(r.h(t,g))
r=r==null?h:A.i.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.p(h,B.x(B.a([D.fXE,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.p8,h,h,h),A.P,B.A(B.a([B.E(B.dW(A.Li,new C.dlq(i,t),h),1),A.ae,B.E(B.bI(D.h6_,h,new C.dlr(i,t),h),1)],n),A.l,h,A.e,A.h,0,h,h)],n),A.E,h,A.e,A.h,0,A.p),A.f,h,h,new B.o(A.aD,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dL(i.y,new C.dls(m),new C.dlt(i))
k=C.hhu(m,i.a.c.a,i.r)
j=C.aRA(m)
u=B.l(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.p(h,B.x(B.a([D.fPq,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.p8,h,h,h),A.ax,B.d(C.iln(m,i.a.c.a),h,h,h,h,h,h,A.W7,h,h,h),A.P,B.bI(D.fWV,h,new C.dlu(i,l,m),h)],x.p),A.E,h,A.e,A.h,0,A.p),A.f,h,h,new B.o(A.bo,h,s,u,h,h,A.n),h,h,h,A.el,A.bl,h,h,1/0)},
bVw(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fha.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EF(w[v])
t=A.i.D(u.d*0.58,0.12,0.3)
l.push(new B.rF(u.a,u.b,A.i.D(u.c*0.92,0,0.9),t).je())}s=A.d.gH(w)
w=B.l(16)
t=B.l(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i3,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.W(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.h,0,n,n),A.ax,B.d(d.c,n,2,A.a2,n,n,n,A.pY,n,n,n)],o),A.E,n,A.b8,A.h,0,A.p),n),1)],o)
if(m)o.push(B.aI(n,n,n,n,D.c3S,n,n,n,new C.dlm(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a0N,B.p(n,D.c1Q,A.f,n,n,new B.o(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.i.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ab(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.p(n,B.A(o,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.n),n,92,n,A.el,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dln(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=B.P(d).ax.a===A.I?A.ny:A.qr,k=m?A.iJ.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iJ:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.ch
if(!o.x)return C.aS8(n,l,B.as(B.na(n,m?A.c:A.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fR4(o.a.c)
return new C.Oy(o.a.w,w,!0,o.gaVo(),n)}w=B.aE(d,A.dD,x.w).w
v=B.l(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.G,A.w.j(0.04),A.cK,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.m(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wk(new C.dlK(o,f,g),n,$.aTy(),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.a1_,n,n,1/0),A.T,o.c3R()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbVv(),B.U(v).k("N<1,v>")))
w=B.c9(B.x(s,A.l,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,new B.Q(14,w.r.b+78,14,24),n,n,A.ah)
s=B.l(35)
v=B.a([new B.ab(0,A.G,A.w.j(m?0.28:0.08),A.i3,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aI(n,n,n,n,B.W(A.eK,j,n,n,n,18),n,n,n,o.gaVo(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.m(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.l(20)
return B.oU(!0,C.aS8(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.Ot,B.p(n,B.A(B.a([t,q,new B.D(A.iS,B.p(n,B.A(B.a([D.bZW,A.e7,C.ast(new C.dlL(o),A.kI,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(A.d2,n,n,p,n,n,A.n),n,n,n,n,A.hn,n,n,n),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.n2,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dlM(o),x.K)},
aVp(){var w,v
this.a.bv()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j6(w,v)}}
C.aFu.prototype={
S(){return new C.bms()},
hK(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aJE(){return this.r.$0()}}
C.bms.prototype={
Y(){this.bzM()
this.d=B.Wc(this.a.d.bh)
$.tY=$.tY+1},
t(){C.b20()
this.bzL()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ar2(v,new C.dZW(w),u,new C.dZX(w),new C.dZY(w,d),new C.dZZ(w),null)}}
C.an_.prototype={
S(){return new C.aCC(new B.au(A.aw,$.ax()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJE(){return this.z.$0()}}
C.aCC.prototype={
Y(){this.byJ()
this.a.toString
$.tY=$.tY+1},
t(){C.b20()
var w=this.d
w.U$=$.ax()
w.R$=0
this.byI()},
a3s(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OI()
w=5
return B.b(C.arD(t.a.c),$async$a3s)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.haR(s,C.fR4(r.c),q),$async$a3s)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uB(s.d.bd,A.a.i(r))
if(p!=null&&C.aRA(p)<=0){t.c.L(x.q).f.T(D.aVi)
w=1
break}}o=B.cW(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.T(D.foN)
w=1
break}m=B.M5(t.a.c.a,new C.dle(t))
if(m+0.001<n){t.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJE()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d8(r,q.c.a,n,A.kr,A.fw,"Game bet: "+q.f,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.fgX.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hD(s,new C.apT(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hD(s,new C.an1(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3s,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aI(o,o,o,o,A.If,o,o,o,new C.dlh(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cF,o,o,o),i=B.l(12),h=x.p
j=B.eS(B.a([B.p(o,B.as(C.ast(new C.dli(p),A.iH,k.c.a),o,o,o),A.f,o,o,new B.o(A.d2,o,o,i,o,o,A.n),o,o,o,D.bDr,A.f4,o,o,o)],h),o,o,!0,!0,D.a_W,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.l(16)
i=B.K(A.aT,A.r,1)
k=B.W(D.bQG,D.bx6,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mC,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.p8,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.l(12)
s=x.a3
s=B.C(new B.N(B.a([2,5,10,25],x.t),new C.dlj(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.h,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.x(B.a([D.h7F,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bz(o,new B.b6(4,B.l(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lY,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bU,o,o,1/0)
u=B.l(12)
r=B.K(B.a0(102,A.a7U.l()>>>16&255,A.a7U.l()>>>8&255,A.a7U.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.l(10)
q=B.p(o,B.x(B.a([D.fON,B.d("+ $"+A.i.ad(n*0.46,2),o,o,o,o,o,o,D.fEu,o,o,o),B.d("(46% return on $"+A.i.ad(p.e,2)+" bet)",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.l(10)
u=B.p(o,B.x(B.a([D.fXW,A.P,q,A.P,B.p(o,B.x(B.a([D.fJz,B.d("$"+A.i.ad(m,2),o,o,o,o,o,o,D.fta,o,o,o),B.d("8 pairs \xd7 $"+A.i.ad(m,2)+" each",o,o,o,o,o,o,A.pY,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(D.bst,o,r,u,o,o,A.n),o,o,o,o,A.bU,o,o,1/0)
r=B.fv(o,o,A.bi,o,o,o,o,o,o,A.c,o,A.hg,o,o,o,o,o,o,o,o)
return C.aS8(j,D.a_W,B.c9(B.p(o,B.x(B.a([k,A.ax,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iu(B.d("Start Game ($"+A.i.ad(p.e,2)+")",o,o,o,o,o,o,A.cd,o,o,o),p.gcCM(),r),o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(o,o,i,l,o,D.ca5,A.n),o,o,o,o,A.eV,o,o,1/0),A.t,o,A.y,o,o,A4.a12,o,o,A.ah))}}
C.an1.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aCE(A.cT,new B.au(A.aw,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aCE.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rS(d){return this.bTE(d)},
bTE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AM()
r=t.Pm()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acm(d),$async$rS)
case 5:w=1
break
case 4:q=A.i.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uy(d),$async$rS)
case 9:w=7
break
case 8:w=10
return B.b(t.F8(q,s,r),$async$rS)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rS,v)},
FL(d,e,f,g){return this.cAu(d,e,f,g)},
cAu(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bGZ(s,C.bGF(),C.hjA(),d,e,f,g),$async$FL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FL,v)},
AM(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5K(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aiX(t,s.e.a.a)
case"memory":return s.ghR()&&D.nc.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAG()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAG(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Pm(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hhy()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bK(d)
if(u.f||u.c5)return
w=u.a
v=C.fR9(w.e,w.d.y2)
if(v!==C.fR9(d.e,d.d.y2)&&u.c!=null)u.m(new C.dn6(u,v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.byN()
w=i.a
w.toString
$.tY=$.tY+1
i.Q=C.fR9(w.e,w.d.y2)
i.b8A()
i.adI()
if(i.ghR()){i.c5=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PJ()
i.adk()
i.bn=B.dg(A.h1,new C.dn9(i))}if(A.d.q(D.SJ,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uB(w,v)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b1Z(!1,w,k.length===0||A.a.q(k,"@")?C.hhu(u,v,null):k,p,l,s)}else{w=w.c
w=C.haV(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.haV(w.c,w.a)}v=C.i_k()
v.bsr(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uB(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.be2(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.Uc
else j=w.f===!0?D.r4:D.Jz
i.AO(j)}}}i.b1=B.dg(A.n1,new C.dna(i))
if(i.ghR())i.bi=B.dg(A.n0,new C.dnb(i))}if(i.ghR()&&!A.d.q(D.SJ,i.a.e))i.bi=B.dg(A.n0,new C.dnc(i))
i.as=B.dg(A.fL,new C.dnd(i))},
PJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uB(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bEV(p,t.a.c.a),$async$PJ)
case 5:o=e
if(t.c!=null)t.m(new C.dmm(t,o))
w=1
break
case 4:w=6
return B.b(C.LX(q,t.a.d.bd,!1),$async$PJ)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bEV(n,t.a.c.a),$async$PJ)
case 7:o=e
if(t.c!=null)t.m(new C.dmn(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
akk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LX(r,s.d.bd,!1),$async$akk)
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
t.aQ6(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.i.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dmQ(t))
if(i!=null&&t.fr.length!==0){s=B.C(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e0()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dmR())}case 1:return B.h(u,v)}})
return B.i($async$akk,v)},
adk(){var w=0,v=B.j(x.H),u=this
var $async$adk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a1K(!0),$async$adk)
case 2:return B.h(null,v)}})
return B.i($async$adk,v)},
a1K(d){return this.cpL(d)},
cpK(){return this.a1K(!1)},
cpL(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1K=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.LX(q,s.d.bd,b3),$async$a1K)
case 3:o=b5
if(o==null)o=C.uB(t.a.d.bd,q)
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
if(a6!=null&&a7!=null){a8=(a6.ca(a7)?a6:a7).bS(5e5)
if(!new B.V(Date.now(),0,!1).d3(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.iqt(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bI
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dmC(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dmD(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d3(s)){s=s.bB(b1).a
r=A.o.ar(s,1e6)
t.m(new C.dmE(b2,t,r+(A.o.F(A.o.ar(s,1000),1000)>0?1:0)))
w=1
break}if(t.c5){t.m(new C.dmF(b2,t))
b2=t.a.e
if(b2==="pattern")t.aa9()
else if(b2==="memory"){t.b8z()
if(t.c!=null)t.m(new C.dmG())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a1K,v)},
aR3(d){var w,v,u,t,s=this
if(d!=null){w=new B.e0()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e6(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aR2(){return this.aR3(null)},
aa9(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cne()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.LX(q,s.d.bd,!1),$async$aa9)
case 5:r=t.b4v(e)
case 4:if(t.c==null){w=1
break}t.aR3(r)
t.m(new C.dlP(t))
t.Em()
case 1:return B.h(u,v)}})
return B.i($async$aa9,v)},
b4v(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.i.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
cne(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4v(C.uB(w.d.bd,v))},
adI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$adI)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.ep(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dml(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
pA(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aA(),$async$pA)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHs().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aC("Int","ngmy_game_"+n+"_"+o,r),$async$pA)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pA,v)},
a3K(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.aZ==null||t.f||t.aY){w=1
break}if(t.c5){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.LX(r,s.d.bd,!1),$async$a3K)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uB(r,s)
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
if(m!=null&&l!=null&&!m.ca(l)){w=1
break}s=t.aZ
s.toString
r=t.a
s.be2(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Uc
else k=r.f===!0?D.r4:D.Jz
w=7
return B.b(t.AO(k),$async$a3K)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dmS())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a3K,v)},
aic(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aic=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.aZ==null||q.a.Q==null||q.aY){w=1
break}q.aY=!0
t=3
o=q.aZ
o.toString
p=o.cT1(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSt(n,o,p),$async$aic)
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
return B.i($async$aic,v)},
AO(d){return this.c0_(d)},
c0_(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.JW(s,s),$async$AO)
case 9:w=4
break
case 6:w=10
return B.b(t.YV(s,s),$async$AO)
case 10:w=4
break
case 7:w=11
return B.b(t.acl(s,s),$async$AO)
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
a0I(d,e){return this.chz(d,e)},
chz(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a0I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aic(),$async$a0I)
case 6:if(d===D.r3){w=1
break}w=4
break
case 5:if(d===D.r3){w=1
break}case 4:w=7
return B.b(t.AO(d),$async$a0I)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
adB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uB(s.d.bd,q)
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
return B.b(C.aSt(t.a.d.bd,q,l),$async$adB)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$adB,v)},
Iq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uB(s.d.bd,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.T(s,r)
n.n(0,"gameOver",!0)
C.hkb(t.a.d.bd,q,n)
C.itQ(t.a.d.bd,q)
w=3
return B.b(C.aiK(t.a.d.bd),$async$Iq)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iq,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adB()
else if(!v.f)v.c6H()
C.b20();++v.RG
w=v.as
if(w!=null)w.a1(0)
w=v.b1
if(w!=null)w.a1(0)
w=v.cx
if(w!=null)w.a1(0)
w=v.bi
if(w!=null)w.a1(0)
w=v.bn
if(w!=null)w.a1(0)
w=v.e
w.U$=$.ax()
w.R$=0
v.byM()},
cG4(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c5)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.uy("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dn0())},
b8A(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e6(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b8z()
break
case"scramble":r.bh=0
r.b8B()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e6(5,x.N)
for(t=0;t<5;++t)v[t]=D.dyb[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.cf)
break
case"math":r.y2=0
r.b8y()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b8C()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e6(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csa()){w=J.e6(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Rw()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aR2()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Em()}break
case"color":r.bd=0
r.b8t()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b9P()
break
default:if(A.d.q(D.SJ,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5K(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csa(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b8C(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e6(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.i.M(Math.pow(p,v))}u=A.i.M(Math.pow(p,o))
r.w=A.o.v(u)
r.aH=A.d.aM(n,", ")
q=r.w
t=x.s
s=B.a([A.o.v(u+p),A.o.v(u-p),A.o.v(u+p*2)],t)
t=B.a([q],t)
A.d.u(t,s)
A.d.e0(t,r.d)
r.x=t},
b8y(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHs().length-6)u.at=0
w=$.bHs()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b8B(){var w=this,v=w.w=D.d9g[A.o.F(w.at+w.bh,105)]
w.ax=C.iu6(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.cf)},
b9P(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cz(B.dw(0,0,0,120+w.d.aw(280),0,0),new C.dmP(w))},
c02(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rS("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ar(new B.V(v,0,!1).bB(u).a,1000)}if(w<520){t.m(new C.dmj(t))
v=t.a0
if(v>=5){t.pA()
t.uy("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b9P()
t.m(new C.dmk())}}else t.rS("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cFj(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dmW())
if(u<0)return
t.m(new C.dmX(t,u,v,d))},
cFk(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dmY(u,d,v))},
bKr(){var w,v,u=this
if(u.f)return
if(A.d.aU(u.ay,new C.dlQ())){u.c.L(x.q).f.T(D.foH)
return}w=A.d.hg(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dlR(u))
if(u.ghR()&&D.nc.q(0,u.a.e))u.a1Z()
if(u.bh>=5){u.pA()
if(u.ghR()&&D.nc.q(0,u.a.e))u.nl(!0)
else u.uy("All 5 words unscrambled!")}else{u.b8B()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.m(new C.dlS())}}else u.rS("Wrong word \u2014 paid for "+u.bh+"/5.")},
b8t(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aK=v[u]
w.aR=[A.dO,A.dK,A.im,A.ty][u]
w.w=t},
aQ6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.i6(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cu),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.i.bg(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aJ(J.t(j,g))
i=f==null?null:A.i.M(f)
if(i!=null)h.fx=i}},
b8z(){var w,v,u,t,s,r,q,p=this
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
u=C.uB(v,w)
t=u==null?null:J.t(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a1(t,w,v):B.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.i.M(r)
else{w=r==null?null:J.k(r)
q=B.cb(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e0()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQ6(s)}else A.d.e0(p.fr,p.d)},
cp4(d){var w,v,u,t=this
if(t.c5)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dmv(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dmw(t,v,u))
if(t.ghR()&&D.nc.q(0,t.a.e))t.a1Z()
if(t.go.a>=t.fr.length){t.pA()
if(t.ghR()&&D.nc.q(0,t.a.e))t.nl(!0)
else t.aAJ()}return}t.k1=!0
B.bN(D.bCp,new C.dmx(t),x.c)},
b7X(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dmH(u))
if(u.y1>=5){u.pA()
u.uy("All 5 questions correct!")}else{u.b8C()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dmI())}}else u.rS(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dmJ(u))
if(u.y2>=6){u.pA()
u.uy("All 6 math questions correct!")}else{u.b8y()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dmK())}}else{u.WS(u.y2+1)
u.rS(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dmL(u))
if(u.bd>=5){u.pA()
u.uy("All 5 color rounds correct!")}else{u.b8t()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dmM())}}else u.rS("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pA()
u.aAJ()}else u.c.L(x.q).f.T(D.fpr)},
cFi(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cn(q.k4,0)
v=A.o.ar(d,3)
u=A.o.F(d,3)
t=A.o.ar(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dmV(q,d,w))
if(A.d.hg(q.k4)==="123456780"){q.pA()
q.aAJ()}}},
Rw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Rw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dmy(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dmz(t,q).$0()
t.c.ep()
w=6
return B.b(B.bN(A.kV,null,r),$async$Rw)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dmA(t).$0()
t.c.ep()
w=7
return B.b(B.bN(A.k4,null,r),$async$Rw)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dmB(t))
case 1:return B.h(u,v)}})
return B.i($async$Rw,v)},
cFl(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rS("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dmZ(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pA()
u.uy("Perfect Simon run!")
return}u.m(new C.dn_(u))
u.Rw()}},
Em(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Em=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dlT(t))
s=x.H
w=3
return B.b(B.bN(A.jq,null,s),$async$Em)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dlU(t,o).$0()
t.c.ep()
w=7
return B.b(B.bN(A.a0E,null,s),$async$Em)
case 7:if(t.c==null){w=1
break}new C.dlV(t).$0()
t.c.ep()
w=8
return B.b(B.bN(A.iQ,null,s),$async$Em)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dlW(t))
case 1:return B.h(u,v)}})
return B.i($async$Em,v)},
WS(d){return this.bF2(d)},
bF2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$WS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.aA(),$async$WS)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHs().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aC("Int","ngmy_game_"+q+"_"+r,o),$async$WS)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$WS,v)},
cFf(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rS("Wrong tile \u2014 paid for "+v.aAG()+"/"+C.hhy()+" moves.")
return}v.m(new C.dmT(v,w))
if(v.ghR()&&D.nc.q(0,v.a.e))v.a1Z()
if(v.x1>=w)if(v.x2>=7){v.pA()
if(v.ghR()&&D.nc.q(0,v.a.e))v.nl(!0)
else v.uy("All 7 pattern rounds correct!")}else{v.m(new C.dmU(v))
v.Em()}},
JW(d,e){return this.cnu(d,e)},
uy(d){return this.JW(null,d)},
aAJ(){return this.JW(null,null)},
cnu(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b1
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dmt(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d8(q,s.c.a,r,A.h7,A.fw,"Game payout: "+s.f,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.i.ad(r,2)+" added to your balance!":e
s=t.a
C.vd(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,o,"YOU WIN!",!0),$async$JW)
case 3:w=4
return B.b(C.aiy(t.a.f,o),$async$JW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JW,v)},
FJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nc.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.czy(),$async$FJ)
case 5:w=1
break
case 4:s=t.AM()
r=t.Pm()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acm("Time's up \u2014 no progress to pay."),$async$FJ)
case 8:w=1
break
case 7:q=A.i.D(s/r,0,1)
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
RD(d){return this.crQ(d)},
a1Z(){return this.RD(!1)},
crQ(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RD=B.e(function(b2,b3){if(b2===1){s.push(b3)
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
a4=C.uB(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.LX(q,r.a.d.bd,!1),$async$RD)
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
J.aK(k,p,r.AM())
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
e=typeof f=="number"?A.i.M(f):B.cb(J.k(f),null)
if(e!=null)J.c5(h,e)}}a6=h
a6=B.C(a6,B.a3(a6).k("ci.E"))
A.d.ff(a6)
J.aK(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.T(a3,a5)
J.aK(a0,p,r.a.x)
J.aK(m,"wagers",a0)
w=11
return B.b(C.aSt(r.a.d.bd,q,m),$async$RD)
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
return B.i($async$RD,v)},
nl(d){return this.czz(d)},
czy(){return this.nl(!1)},
czz(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nl=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FJ(),$async$nl)
case 5:w=1
break
case 4:w=6
return B.b(t.RD(!0),$async$nl)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.LX(q,s.d.bd,!0),$async$nl)
case 7:o=b7
n=t.Pm()
w=o==null?8:9
break
case 8:m=A.i.D(t.AM()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acm("Time's up \u2014 no progress to pay."),$async$nl)
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
a0=d==null?null:A.i.M(d)
if(a0==null)a0=t.AM()
d=B.aJ(e.h(0,j))
a1=d==null?null:A.i.M(d)
if(a1==null)a1=0
a2=A.i.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.acm("Time's up \u2014 no progress to pay."),$async$nl)
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
r=t.b1
if(r!=null)r.a1(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dmN(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.i.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d8(h,b0,a9,A.h7,A.fw,d,null,null,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.i.ad(a9,2)+" (includes opponent bonus $"+A.i.ad(a7,2)+")":"+$"+A.i.ad(a8,2)+" (your progress payout)"
s=t.a
C.vd(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FL(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nl)
case 24:w=25
return B.b(t.Iq(),$async$nl)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nl,v)},
F8(d,e,f){return this.cns(d,e,f)},
cns(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$F8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b1
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dmr(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d8(s,q.c.a,r,A.h7,A.fw,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.i.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aiX(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cF(t.cy,0,new C.dms()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.i.ad(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.i.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vd(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FL(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$F8)
case 3:w=4
return B.b(C.aiy(t.a.f,j),$async$F8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$F8,v)},
c6H(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AM()
v=o.Pm()}catch(u){return}if(v<=0||w<=0)return
t=A.i.D(w/v,0,1)
s=B.ou(A.i.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d8(q,p.c.a,s,A.h7,A.fw,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cv,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vd(s,n,"Left early \xb7 +$"+A.i.ad(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
acl(d,e){return this.bVq(d,e)},
bVq(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b1
if(s!=null)s.a1(0)
r=A.o.v(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hK(new B.d8(r,q,p,A.h7,A.fw,"Game payout: "+s+" (draw, stake returned)",null,null,A.cv,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vd(o,null,"Draw. Your $"+A.i.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,"Nobody won, so your $"+A.i.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acl)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acl,v)},
YV(d,e){return this.bVr(d,e)},
acm(d){return this.YV(null,d)},
bVr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$YV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b1
if(s!=null)s.a1(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.vd(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FL(d,e,"YOU LOSE",!1),$async$YV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$YV,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.ar(m,60)
m=A.a.b0(A.o.v(A.o.F(m,60)),2,"0")
v=B.aI(n,n,n,n,A.asK,n,n,n,new C.dn1(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bI
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bI):t.f,n,2,A.a2,n,n,n,A.fE,n,n,n),1)
r=B.l(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.ast(new C.dn2(o),A.o4,t.c.a),A.f,n,n,new B.o(A.d2,n,n,r,n,n,A.n),n,n,n,n,A.hm,n,n,n)],q),A.l,n,A.e,A.h,0,n,n)
t=o.a
s=t.w
v=B.l(10)
s=B.p(n,B.A(B.a([B.E(B.d("Win $"+A.i.ad(t.x*1.46,2)+" \xb7 stake $"+A.i.ad(o.a.x,2)+" \u2022 Progress "+o.AM()+"/"+o.Pm(),n,n,n,n,n,n,D.fyJ,n,n,n),1),new C.arF(o.a.c.a,new C.dn3(o),n),A.ae,D.bVo,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o6,n,n,n)],q),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hl,n,n,n)
v=o.a.w
m=B.U(v).k("N<1,u>")
m=B.C(new B.N(v,new C.dn4(),m),m.k("ak.E"))
w=B.l(14)
v=B.K(A.aT,A.r,1)
p=C.aS8(n,D.bgA,B.bm(!0,new B.D(Am.Oq,B.x(B.a([r,s,A.P,new B.fh(new C.dn5(o),n),A.am,B.E(B.p(n,o.bVp(),A.f,n,n,new B.o(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cq,n,n,n),1)],q),A.al,n,A.e,A.h,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c5)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iN.l()>>>16&255,A.iN.l()>>>8&255,A.iN.l()&255)
v=B.l(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bR(0,B.p(A.z,new B.dt(!1,B.p(n,B.x(B.a([D.fkJ,A.af,B.d(o.cT,n,n,n,n,n,n,D.fAh,A.K,n,n),A.am,B.d(o.bT,n,n,n,n,n,n,D.fyp,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.t7,A.z_,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c7F(){var w=this.k3
return B.cm(new C.dmq(this,w,A.i.cB(this.fr.length/w)))},
bVp(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c7F()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Words "+o.bh+"/5",n,n,n,n,n,n,A.Fb,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.m(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.bZ(A.fU,B.ix(o.ay.length,new C.dm8(o),!0,w),A.br,n,6,6),A.aO,B.bZ(A.fU,B.ix(o.ch.length,new C.dm9(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iu(D.h0A,o.gbKq(),B.fv(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cp,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.atZ(m,o.e,new C.dma(o),new C.dmb(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fb,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(new B.dx(A.dC,A.z,A.f,B.d(w,n,n,n,n,n,n,A.mC,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dmc(o),B.U(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.h,0,A.p)}if(m==="puzzle")return B.cm(new C.dmd(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pY,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fb,n,n,n),A.P,B.E(B.l2(1,B.ix(4,new C.dme(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="pattern")return B.cm(new C.dmf(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dO,A.dK,A.im,A.ty]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pY,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fb,n,n,n)
v=o.aK
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.m(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e6(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fv(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fi,n,n,n,n,n,n,n)
r[q]=new B.D(A.cw,new B.a5(1/0,n,B.iu(B.d(u[q],n,n,n,n,n,n,A.cF,n,n,n),new C.dmg(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.h,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bi:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.ac2,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fvC,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.m(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aE(s,A.bZ,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qs(B.az(A.bY,B.cT(n,B.x(B.a([w,A.P,v,A.b3,s,A.b3,new B.D(A.H1,B.d(m,n,n,n,n,n,n,B.m(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b8,A.h,0,A.p),p,n,A.b0,n,T.Cw,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc01(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SJ,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.ijg(m,new C.dmh(o),new C.dmi(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anP.prototype={
S(){return new C.bjw()},
cYR(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjw.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aE(a3,A.dD,a0).w
a0=B.aE(a3,A.dD,a0).w
v=x.p
u=B.a([B.bU4(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b0(A.o.v(B.bL(s)),2,"0")
q=A.a.b4(A.o.v(B.bC(s)+1),2)
p=B.l(18)
o=B.K(W.Cg,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.G,B.a0(89,A.rC.l()>>>16&255,A.rC.l()>>>8&255,A.rC.l()&255),A.eR,20),new B.ab(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dp,14)],n)
l=B.ao(d,B.p(d,d,A.f,d,d,new B.o(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.l(10)
j=B.K(W.Cg,A.r,3.4)
n=B.a([new B.ab(0,A.G,B.a0(166,A.rC.l()>>>16&255,A.rC.l()>>>8&255,A.rC.l()&255),A.dL,10),new B.ab(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cK,6)],n)
n=B.A(B.a([B.p(d,d,A.f,d,d,new B.o(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dl7,D.cVK,d),A.n),d,42,d,d,d,d,d,56),A.b3,e.baJ(a3,!0)],v),A.l,d,A.e,A.h,0,d,d)
k=B.Eg(t.a,1,A.a2,D.fDE)
j=t.b
i=t.c
h=B.Eg("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fDT)
g=B.Eg(e.b5w(j),1,A.a2,D.fwt)
q=B.A(B.a([B.E(B.x(B.a([D.fUq,B.Eg(a1.c,1,A.a2,D.aXl)],v),A.E,d,A.e,A.h,0,A.p),1),B.x(B.a([D.fUb,B.d(r+"/"+q,d,d,d,d,d,d,D.aXl,d,d,d)],v),A.dN,d,A.e,A.h,0,A.p)],v),A.l,d,A.e,A.h,0,d,d)
r=B.p(d,d,A.f,B.a0(89,D.yp.l()>>>16&255,D.yp.l()>>>8&255,D.yp.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.aty("INVESTED","$"+B.dG(j),!0),e.aty("DAILY ROI",A.i.ad(i*100,2)+"%",!0),e.aty("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j_,A.h,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h07,A.re,B.p(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fSO,A.bF,k,A.ax,h,A.ax,g,A.P,q,A.am,r,A.am,i,A.ax,B.Eg("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fD_)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.o(d,d,o,p,m,D.caX,A.n),d,d,d,d,A.bH,d,d,1/0),A.abn],v))}u.push(D.fKk)
u.push(A.re)
A.d.u(u,new B.N(a2,new C.dqG(e,a3),B.U(a2).k("N<1,v>")))
return B.c4(d,A.L,B.bm(!1,B.c9(B.x(u,A.E,d,A.e,A.h,0,A.p),A.t,d,A.y,d,d,new B.Q(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
baJ(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(8),t=B.K(A.k0,A.r,1)
return B.p(w,B.A(B.a([B.W(A.a3m,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eP,w,w,w)},
b5w(d){var w=A.a.b0(A.o.v(A.i.V(d*100)),4,"0")
return"****  ****  ****  "+A.a.b4(w,w.length-4)},
aty(d,e,f){var w=null,v=B.a0(217,D.yp.l()>>>16&255,D.yp.l()>>>8&255,D.yp.l()&255)
v=B.d(d,w,w,w,w,w,w,B.m(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Eg(e,w,w,B.m(w,w,E.Cd,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.h,0,A.p)},
cpz(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd2I(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ab(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.Ux,16),new B.ab(0,A.G,B.a0(115,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),A.dp,14),new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cK,8)],p)
n=B.ao(d,B.p(d,d,A.f,d,d,new B.o(d,d,d,d,d,new B.bS(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.l(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.i.V(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eI(A.z,0.7853981633974483,B.p(d,d,A.f,d,d,new B.o(d,d,l,m,B.a([new B.ab(0.5,A.G,k,A.J,14),new B.ab(0,A.G,j,A.J,6),new B.ab(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.c9w,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eDK],h),d),d),A.b3,e.baJ(b2,!0)],h),A.l,d,A.e,A.h,0,d,d)
a6=B.Eg(a6,1,A.a2,D.fsS)
i=B.Eg(e.b5w(a3),1,A.a2,D.fIz)
j=B.A(B.a([e.b4X(A.i.ad(2.86,2)+"%"),A.e7,e.b4X("261d")],h),A.l,d,A.e,A.h,0,d,d)
k=B.E(B.x(B.a([D.fLF,B.Eg("$"+B.dG(a3),1,A.a2,D.fHi)],h),A.E,d,A.e,A.h,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.ftI,d,d,d)],h),A.dN,d,A.e,A.h,0,d,d)
k=B.p(d,d,A.f,B.a0(89,A.by.l()>>>16&255,A.by.l()>>>8&255,A.by.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aAY("Daily","$"+B.dG(a4)),1),A.e7,B.E(e.aAY("Total","$"+B.dG(a4*261)),1),A.e7,B.E(e.aAY("Days","261"),1)],h),A.l,d,A.e,A.h,0,d,d)
g=q?d:new C.dqF(e,b3,a3,t)
f=A.i.V(127.5)
f=B.fv(d,d,A.bs,B.a0(f,A.an.l()>>>16&255,A.an.l()>>>8&255,A.an.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.b9(B.l(10),D.b6t),d,d,d,d,d)
return B.p(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fV9,A.bF,a6,A.cR,i,A.fD,j,A.fD,m,A.fD,k,A.fD,l,A.P,new B.a5(1/0,40,B.iu(new B.dx(A.dM,A.z,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fue,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.o(d,d,w,a0,o,D.cbx,A.n),d,d,d,A.kA,D.bEc,d,d,1/0)},
b4X(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(5),t=B.K(A.cA,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.ftg,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.z3,w,w,w)},
aAY(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.l(7),t=B.K(A.bm,A.r,1)
return B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fDl,w,w,w),A.tV,new B.dx(A.dC,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fGh,w,w,w),w)],x.p),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)}}
C.ajS.prototype={
S(){var w=null,v=B.a([],x._),u=$.ax()
return new C.azG(v,new B.au(A.aw,u),new B.au(A.aw,u),B.n2(0,w,w),new B.i1(),D.U1,C.aiv(),B.a([],x.fw),B.aR(x.N),B.n2(0,w,w))}}
C.azG.prototype={
Y(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.Ae(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aK
w=r.k3=B.bp(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.adN()
r.PI()
r.at9()
r.cCy()
r.cCO()
$.aU.x1$.push(new C.cNH(r))
r.a.toString},
PI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as3(),$async$PI)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cN1(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
gaCB(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPD())return!0
return!1},
gPD(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYo(){var w,v=this.CW
if(v==null)return A.bC
w=v.bB(new B.V(Date.now(),0,!1))
return w.a<0?A.bC:w},
bFQ(){var w=this
if(w.a.c.w)return
if(w.gPD()){if(!w.cx)w.m(new C.cMS(w))}else if(w.cx)w.m(new C.cMT(w))},
cvN(){this.m(new C.cNb(this))},
uH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cN8(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cN9(t))
w=1
break}w=3
return B.b(C.cgQ(o.a,s),$async$uH)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.cgR(t.a.c.a,s),$async$uH)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNa(t,r,q))
t.cEH()
t.bFQ()
if(r===3)t.a_0(r)}case 1:return B.h(u,v)}})
return B.i($async$uH,v)},
a_0(d){return this.c7x(d)},
c7x(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bH3(q,r,new C.cN3(t),d,s.c.a),$async$a_0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_0,v)},
yc(d){return this.bHm(d)},
at9(){return this.yc(!1)},
bHm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9m(k,C.hHl(l.d)),$async$yc)
case 3:j=m
w=4
return B.b(C.chh(k),$async$yc)
case 4:s=j.a=f
w=5
return B.b(B.asV(k),$async$yc)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WO(!0,l,q,p)
m.a=s
w=8
return B.b(C.as5(k,s),$async$yc)
case 8:case 7:w=9
return B.b(C.VO(k),$async$yc)
case 9:o=f
w=10
return B.b(C.a8I(k),$async$yc)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cMU(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yc,v)},
R9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$R9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PI(),$async$R9)
case 3:s=t.c
if(s==null){w=1
break}r=B.ee(new C.cN6(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).ce(r),$async$R9)
case 4:w=5
return B.b(t.PI(),$async$R9)
case 5:case 1:return B.h(u,v)}})
return B.i($async$R9,v)},
cGV(){this.m(new C.cNu(this))},
cCO(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dg(A.t2,new C.cNo(w))},
cEH(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPD()||w.CW==null)return
w.id=B.dg(A.fL,new C.cNr(w))},
cCy(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dg(A.jJ,new C.cNn(w))
w.FR()},
FR(){return this.cEG()},
cEG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aK
t=4
w=7
return B.b(B.aA(),$async$FR)
case 7:q=e
p=B.aV(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.W.aP(0,p,null)
if(x.f.b(o)){m=B.DY(B.a1(o,x.N,x.z)).aK
i.a=m
r.a.f.aK=m}}w=10
return B.b(B.M8(),$async$FR)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aS7(),$async$FR)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aK=l
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
break}if(i.a!==r.ay)r.m(new C.cNp(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FR,v)},
b9r(){A.d.b_(this.f,new C.cNm())},
adN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.NZ(t.a.c.a),$async$adN)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b_(s,new C.cMZ())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cN_(t,s))
t.a2W(!0)
B.bN(A.jq,new C.cN0(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$adN,v)},
ahB(){var w=0,v=B.j(x.H),u=this
var $async$ahB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apD(u.a.c.a,u.f),$async$ahB)
case 2:return B.h(null,v)}})
return B.i($async$ahB,v)},
bz(d){this.bK(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a1(0)
u=v.go
if(u!=null)u.a1(0)
u=v.id
if(u!=null)u.a1(0)
u=v.r
w=$.ax()
u.U$=w
u.R$=0
u=v.w
u.U$=w
u.R$=0
v.ok.t()
v.x.t()
u=v.e
u===$&&B.c()
u.t()
v.a2()},
acJ(d){var w,v=this
v.m(new C.cMX(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BS(d,A.cj,A.kV)
else $.aU.x1$.push(new C.cMY(v,d))
if(d===0)v.a2W(!0)
if(d===1)v.cxQ(!0)},
a2W(d){$.aU.x1$.push(new C.cNe(this,d))},
aCe(){return this.a2W(!1)},
a2e(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2D(),$async$a2e)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cN7(t))
case 1:return B.h(u,v)}})
return B.i($async$a2e,v)},
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
return B.b(C.arZ(a9.a,b0),$async$nk)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uH(),$async$nk)
case 10:q.m(new C.cNf(q))
w=1
break
case 8:w=11
return B.b(q.uH(),$async$nk)
case 11:if(q.c!=null&&q.ch===3)q.a_0(3)
case 6:case 4:q.m(new C.cNg(q,c5))
C.VA(q.a.c.a,"user",c5)
q.aCe()
t=13
a8={}
w=16
return B.b(q.a2e(),$async$nk)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2D(),$async$nk)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cNh(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bF8("",null)
q.m(new C.cNi(q,p))
C.VA(q.a.c.a,"ai",p)
q.aCe()
r=[1]
w=14
break}o=B.ns(a9)
a9=q.a
n=""
m=C.hHl(a9.d)
w=C.hHe(c5)?20:21
break
case 20:w=22
return B.b(C.chg(q.a.c.a),$async$nk)
case 22:q.db=c9
w=23
return B.b(q.yc(!0),$async$nk)
case 23:case 21:w=24
return B.b(B.a9m(q.a.c.a,m),$async$nk)
case 24:l=c9
k=C.i_d(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b0(A.o.v(B.bL(b3)),2,"0")
b4=A.a.b0(A.o.v(B.bX(b3)),2,"0")
b5=A.a.b0(A.o.v(B.df(b3)),2,"0")
b6=A.a.b0(A.o.v(B.fV(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bC(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VO(q.a.c.a),$async$nk)
case 25:i=c9
h=C.hqC(i,25)
w=26
return B.b(C.a8I(q.a.c.a),$async$nk)
case 26:g=c9
f=C.hsi(g)
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
return B.b(C.aiw(a9,q.a.c.a,c5),$async$nk)
case 27:a0=c9
a1=""
if(C.hHe(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.im7(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hUw(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.rm(o,a2,A.i1,null,null),$async$nk)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bF8(a8.a,a3.a)
a4=c2
a5=B.hGx(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.C(C.ioS(c5),x.an)
a6=a9
J.h1(a6,C.ioT(c5))
J.h1(a6,C.ioU(c5))
J.h1(a6,B.hFY(c5))
J.h1(a6,C.ioX(c5,q.a.c.w))
a8.b=a6}c3=C.io4(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiN(c3,a6,m,q.a.c.a),$async$nk)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cNj(a8,q,a7))
C.VA(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KC(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cNk(q))
C.VA(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cNl(q))
q.aCe()
q.ahB()
if(!q.a.c.w)q.uH()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nk,v)},
cov(d){var w=B.T(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cow(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.iY
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckp(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KC(d){return this.cwk(d)},
cwk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiI(p,o,new C.cNc(t,p)),$async$KC)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HB(p,null,o,!1,!0,t.a.c.a),$async$KC)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
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
return B.b(B.HB(p,l.f,o,k,n,j),$async$KC)
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
return B.b(C.b0j(p,B.a([new C.rW("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KC)
case 14:t.at9()
case 13:p=t.c.L(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new B.b0(o,A.dn,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KC,v)},
SS(d){return this.cF9(d)},
cF9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$SS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiI(d,n,new C.cNt(t)),$async$SS)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HB(d,null,n,!1,!0,t.a.c.a),$async$SS)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.T(B.b2(null,null,null,A.c9,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.lN,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HB(d,q.f,r,p,n,o),$async$SS)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$SS,v)},
cxQ(d){$.aU.x1$.push(new C.cNd(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.P(d).ax.a===A.I,j=k?A.bA:A.Cm,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.akT,D.bnG],w):B.a([A.aN,A.yk],w)
v=B.l(22)
u=B.a([new B.ab(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gck5():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.az(l,B.p(l,C.hfE(m.a.f.Q,48),A.f,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dl,l,l,l)
s=B.p(l,l,A.f,l,l,D.b8z,l,8,l,l,l,l,l,8)
if(m.gaCB()&&m.d===0)q=m.gPD()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.bb,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.m(l,l,B.a0(A.i.V(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cD,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.h,0,l,l)],p),A.E,l,A.e,A.h,0,A.p),1),B.aI(l,l,l,l,A.nQ,l,l,l,new C.cNz(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.o(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.n),l,l,l,F.amP,D.bEZ,l,l,l)
v=k?D.ul:A.c
u=B.l(14)
t=B.K(k?A.bw:A.dY,A.r,1)
u=B.p(l,B.A(B.a([m.bKb(),m.cET(1,A.lr,"Music")],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCB()){v=B.a([],p)
if(m.gPD()){s=B.a0(38,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255)
r=B.l(12)
q=B.K(B.a0(115,A.dn.l()>>>16&255,A.dn.l()>>>8&255,A.dn.l()&255),A.r,1)
v.push(new B.D(A.Or,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hYv(m.gaYo())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fFI,A.K,l,l),A.f,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPD()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.l(12)
q=B.l(12)
o=B.W(A.kb,k?A.iz:A.hJ,l,l,l,16)
v.push(new B.D(A.Or,B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.m(l,l,k?A.iz:A.hJ,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b8,A.h,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcvM(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcGU():l
v.push(B.E(new C.as1(s,q,new C.cNA(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.h,0,A.p)}else v=m.bKc(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.htg(r)
t=B.a([w,A.af,new B.D(A.hZ,u,l),A.P,B.E(B.hud(B.a([v,new C.as4(q,o,n,new C.cNB(m,d),s,l)],p),A.t,t,A.y,new C.cNC(m),l),1)],p)
if(m.d===0&&!m.gaCB()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6u:D.a5K
w.push(new B.a5(l,36,B.hT(l,new C.cND(m),v.length,l,l,A.aM,new C.cNE(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.m(l,l,k?A.c:A.bp,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.m(l,l,k?A.aF:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.l(22)
o=B.l(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bz(l,new B.b6(4,q,A.a1),l,A.CG,l,l,l,l,!0,new B.b6(4,o,new B.ay(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cNF(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aW7,l,l),1)
s=m.at
r=s?l:m.gcyQ()
w.push(B.A(B.a([u,new B.JR(v,A.aN,l),A.bn,B.aG(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.ewy:V.asC,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.ai)],p),A.dN,l,A.e,A.h,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lI:A.c
t.push(B.uC(A.ua,B.p(l,new B.D(A.CB,w,l),A.f,l,l,new B.o(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.ua,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XD(i,new C.cNG(m),B.c4(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKb(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.P(p).ax.a===A.I
if(w)p=B.a0(A.i.V(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.i.V(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.W(A.uV,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.az(q,B.cT(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b8,A.h,0,q,q),q,q,A.b0,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cMV(this),q,q,q,q,q,q,!1,A.a4),1)},
cET(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.P(p).ax.a===A.I
if(w)p=B.a0(A.i.V(255*(v?0.25:0.12)),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
else p=A.L
u=B.l(11)
t=w?B.K(B.a0(A.i.V(127.5),A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.r,1):q
s=B.W(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bn,B.d(f,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.az(q,B.cT(q,B.A(r,A.l,q,A.b8,A.h,0,q,q),q,q,A.b0,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNs(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKc(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bu9:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.l(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.p(s,B.kv(!0,s,t.ok,new C.cMW(t,e,d),u,s,A.bS,s,s,!1,!1),A.f,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.hZ,s,s,s,s)},
aRG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iY:this.cow(d),k=m?A.mt:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hfE(this.a.f.Q,28),o),A.ae],j))
w=m?A.dN:A.E
j=B.a([],j)
if(h)j.push(D.ewP)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_B:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ab(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dL,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.m(o,o,e?A.aF:A.dZ,o,o,o,o,o,o,o,o,12,A.cJ,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.d(n,o,o,o,o,o,o,B.m(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hbo(m,B.p(o,n,A.f,o,o,new B.o(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,Ag.wC,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hGC(l,e,this.gcF8()))
i.push(new B.di(1,A.cm,B.x(j,w,o,A.e,A.h,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dN,o,k,A.h,0,o,o),o)},
bKa(d,e){return this.aRG(d,e,!1)}}
C.aN_.prototype={
Y(){this.a3()
$.zf().aV(0,this.gF2())},
t(){$.zf().a6(0,this.gF2())
this.a2()}}
C.aN0.prototype={
Y(){this.a3()
$.zf().aV(0,this.gF2())},
t(){$.zf().a6(0,this.gF2())
this.a2()}}
C.aN1.prototype={
Y(){this.a3()
$.zf().aV(0,this.gF2())},
t(){$.zf().a6(0,this.gF2())
this.a2()}}
C.aNZ.prototype={
Y(){this.a3()
$.zf().aV(0,this.gF2())},
t(){$.zf().a6(0,this.gF2())
this.a2()}}
C.Xs.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apm.prototype={
S(){return new C.aEK()}}
C.aEK.prototype={
Y(){var w,v=this
v.a3()
w=v.a
v.d=w.d
v.e=B.bp(w.e,!0,x.o)
v.f=v.a.f},
li(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
AZ(d,e){return this.cKD(d,e)},
cKD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$AZ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dHd(q,e))
t=3
w=6
return B.b(d.$0(),$async$AZ)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dHe(q))
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
return B.b(B.vg(r,q),$async$Br)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dH4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Br,v)},
abb(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$abb)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.OQ(s,B.KW(B.c4j(r,q,s,p).f2(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abb,v)},
YE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pD(s,t.a.c,!1),$async$YE)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.AZ(new C.dH2(t),"Preparing download\u2026"),$async$YE)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YE,v)},
a_c(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pD(s,t.a.c,!1),$async$a_c)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.AZ(new C.dHc(t),"Creating QR code\u2026"),$async$a_c)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
a_b(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.igY(r),$async$a_b)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.AZ(new C.dH1(t,s),"Looking up code\u2026"),$async$a_b)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_b,v)},
aeG(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aeG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xP.cp().MQ(A.T1,A.uQ,!0),$async$aeG)
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
case 6:u=B.Hx()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeG,v)},
AC(d,e,f){return this.bMu(d,e,f)},
aT0(d,e){return this.AC(d,!1,e)},
bMt(d){return this.AC(d,!1,!1)},
bMu(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$AC)
case 3:if(t.c==null){w=1
break}if(!C.c4o(d,t.a.c,null)){t.li(C.c4p(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hUd(d,s)}if(s){t.li(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.iha(s,q,t.a.c,d),$async$AC)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m9(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.t_(s,p,r,!1,null,null,d.ax),$async$AC)
case 5:if(t.c==null){w=1
break}t.m(new C.dH0(t,p,r,d))
t.li("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AC,v)},
aeF(){var w=0,v=B.j(x.H),u=this
var $async$aeF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.AZ(new C.dH3(u),"Reading file\u2026"),$async$aeF)
case 2:return B.h(null,v)}})
return B.i($async$aeF,v)},
XW(d){return this.bNO(d)},
bNO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d8("local_qr_dep_"+1000*r,q.a,d,A.fT,A.fw,"Admin deposit ($"+B.dG(d)+")",null,null,A.cv,new B.V(Date.now(),0,!1))
C.cjj(t.d,s)
q=t.e
q===$&&B.c()
r=B.C(q,x.o)
r.push(s)
w=3
return B.b(B.t_(t.a.c,t.d,r,!0,null,null,null),$async$XW)
case 3:w=4
return B.b(t.Br(),$async$XW)
case 4:if(t.c==null){w=1
break}t.li("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$XW,v)},
b8P(d){var w=null
return B.cg(w,w,!0,w,new C.dHa(),d,w,!0,!0,x.N)},
WZ(d){return this.bFK(d)},
bFK(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$WZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.XW(d.b),$async$WZ)
case 5:w=1
break
case 4:s=d.c
t.li(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$WZ,v)},
Fn(d){return this.ctq(d)},
ctq(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$Fn)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3d(d,t.a.c),$async$Fn)
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
return B.b(t.b8P(r),$async$Fn)
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
return B.b(C.cjc(d,o,n.a,r,p),$async$Fn)
case 7:w=6
return B.b(t.WZ(f),$async$Fn)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fn,v)},
Fo(d){return this.ctr(d)},
ctr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$Fo)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjb(d,t.a.c),$async$Fo)
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
return B.b(t.b8P(r),$async$Fo)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.X6(o,n.a,d,r,p),$async$Fo)
case 7:w=6
return B.b(t.WZ(f),$async$Fo)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fo,v)},
PX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DE()){t.li("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).ce(B.ee(new C.dH5(),!0,null,x.N)),$async$PX)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.AZ(new C.dH6(t,r),"Applying deposit\u2026"),$async$PX)
case 6:w=1
break
case 5:w=7
return B.b(t.AZ(new C.dH7(t,r),"Loading\u2026"),$async$PX)
case 7:case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.P(d).ax.a===A.I,m=n?A.ny:A.qr,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aE(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.p(A.z,B.W(A.eK,l,o,o,o,16),A.f,o,o,new B.o(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dHf(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.h,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cD,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a1U(D.bSM,"Download",E.a6J,u?o:p.gbTr(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a1U(A.ju,"Show QR",D.dBU,u?o:p.gc9g(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r
s=B.E(new C.a1U(D.bSN,"Upload",A.a65,u?o:p.gc9e(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a1U(A.jv,"Scan QR",D.d9y,u?o:p.gc9f(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r?o:p.gc9d()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.l(16)
j=B.a([B.cw(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvb(A.tl,"Enter Code",A.a5q,u,o),A.lb,B.p(o,B.A(B.a([B.W(A.ho,A.aV,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.m(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.h,0,o,o),A.f,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.jr,o,o,o)],h),o,o,new B.Q(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iJ:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aG(!1,A.a3,!0,o,new B.D(A.CK,B.A(B.a([I.aV4,A.bb,B.E(B.d(w,o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.h,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c4(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a1U.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(v,B.x(B.a([B.p(v,B.W(w.c,A.c,v,v,v,30),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u2,v,v,v)],x.p),A.l,v,A.b8,A.h,0,A.p),A.f,v,v,new B.o(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bS,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvb.prototype={
B(d){var w=this,v=null,u=B.l(22),t=B.l(22),s=w.e,r=B.l(22),q=B.a([new B.ab(0,A.G,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,24),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u2,v,v,v)],x.p),A.l,v,A.b8,A.h,0,v,v),A.f,v,v,new B.o(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bHb,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0x.prototype={
S(){return new C.blY()}}
C.blY.prototype={
gayK(){var w=this.e
return w===$?this.e=this.a.d:w},
Y(){var w=this
w.a3()
w.RQ()
w.f=B.dg(A.ov,new C.dHj(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
RQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$RQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vg(q.e,q.f),$async$RQ)
case 3:q=e.a
s=B.c4j(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OQ(t.a.e,B.KW(s.f2(),null,"  ")),$async$RQ)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dHg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$RQ,v)},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.ny:A.qr,s=u?A.iJ:A.c,r=u?A.c:A.bp,q=B.eS(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYf,v,v,v,1,v,!0),p=B.l(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qi(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gayK(),v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.l(20),j=A.aV.j(0.12),i=B.l(20),h=x.p
i=B.aM(!1,k,!0,B.p(v,B.A(B.a([B.W(A.fN,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.m(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.lO,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dHh(w,d),v,v,v,v,v,v,v)
return B.c4(q,t,new B.D(A.ac,B.x(B.a([B.E(B.p(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.m(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b8,A.h,0,A.p),A.f,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bI(A.B9,v,new C.dHi(d),B.bo(A.aV,v,v,v,v,A.hg,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.h,0,A.p),v),v,!1,!1,v,v)}}
C.a0y.prototype={
S(){return new C.blZ(B.zT(A.yJ,A.oe,A.vj))}}
C.blZ.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c4(B.eS(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h0v,w,w,w,1,w,!0),A.w,B.zS(this.d,A.c_,new C.dHk(this,d)),w,!1,!1,w,w)}}
C.afT.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.P(a0).ax.a===A.I,k=l?A.iJ:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dY,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.l(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.G,A.aV.j(0.16),A.kF,36)],x.V)
u=B.p(m,D.bYU,A.f,m,m,new B.o(m,m,m,B.l(18),A.a6I,D.c8P,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.m(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.m(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.ny:A.qr
q=B.l(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Re("Account",A.a.i(this.d),i,j,m),A.T,new C.Re("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Re("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Re("Saved on",""+B.bL(f)+"/"+B.bX(f)+"/"+B.bC(f),i,j,m))
g.push(A.T)
g.push(new C.Re("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.x(g,A.E,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.bS,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.l(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.W(A.tj,l?A.aQ:A.d6,m,m,m,16)
return B.eG(m,A.L,new B.cN(A.Ya,new B.bM(new B.o(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wH,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.p(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.m(m,m,l?A.bL:A.ia,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.h,0,m,m),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dW(A.o7,new C.f7t(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.cp,m,new B.b9(B.l(14),A.a1),new B.ay(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bI(D.fJB,m,new C.f7u(a0),B.bo(A.aV,m,m,m,m,m,A.cp,m,new B.b9(B.l(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.h,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Re.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.m(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.h,0,v,v)}}
C.a_F.prototype={
S(){return new C.aBW(new B.au(A.aw,$.ax()),B.kd(!0,null,!0,!0,null,null,!1))}}
C.aBW.prototype={
Y(){this.a3()
$.aU.x1$.push(new C.dgc(this))},
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.e.t()
this.a2()},
c9i(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.iJ:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.ny:A.qr,p=u?A.aT:A.dY,o=B.l(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ab(0,A.G,A.aV.j(0.18),A.fQ,32)],x.V),l=B.p(v,Ae.atl,A.f,v,v,new B.o(v,v,v,B.l(18),A.a6I,D.cbH,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.m(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.m(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.buF(new C.dg9())],x.G),g=B.m(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eG(v,A.L,new B.cN(A6.Mh,new B.bM(new B.o(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wH,B.x(B.a([l,A.aO,k,A.P,j,A.e3,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bz(v,v,v,A.CJ,v,v,"",v,!0,new B.b6(4,B.l(16),new B.ay(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.l(16),D.b6r),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dga(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mA,v,v,v,v),A.e3,B.A(B.a([B.E(B.dW(A.o7,new C.dgb(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.cp,v,new B.b9(B.l(14),A.a1),new B.ay(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bI(D.fNr,v,w.gc9h(),B.bo(A.aV,v,v,v,v,v,A.cp,v,new B.b9(B.l(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.h,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OI,v,A.d7,v,v,v)}}
C.apT.prototype={
S(){return new C.bm5(A.cT)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bm5.prototype={
Y(){var w,v=this
v.a3()
w=v.a
w.toString
$.tY=$.tY+1
v.r=A.o.M(A.o.D(C.fR9(w.e,w.d.y2),1,600))
w=v.a
if(!J.lM(w.d.y2,w.e))v.r=C.imA(v.a.e)
v.w=B.dg(A.fL,new C.dNH(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cnm()
C.b20()
this.a2()},
cnm(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.i.D(r.e/w,0,1)
if(v<=0)return
u=B.ou(A.i.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d8(t,s.c.a,u,A.h7,A.fw,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cv,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vd(u,q,"Left early \xb7 +$"+A.i.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KM(d,e){return this.czu(d,e)},
b8s(d){return this.KM(!1,d)},
czt(d){return this.KM(d,"")},
czu(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a1(0)
if(d)r=1
else{s=t.f
r=s<=0?0:A.i.D(t.e/s,0,1)}w=r<=0?3:4
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
return B.b(C.bGZ(s,C.bGF(),C.hjA(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KM)
case 5:w=1
break
case 4:n=B.ou(A.i.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dNy(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d8(s,p,n,A.h7,A.fw,q,null,null,A.cv,new B.V(Date.now(),0,!1))
B.aiG(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.i.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.i.ad(n,2)+" ("+A.i.V(r*100)+"% of the prize)"}q=t.a
C.vd(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bGZ(s,C.bGF(),C.hjA(),""+t.e+"/"+t.f,k,q,!0),$async$KM)
case 6:w=7
return B.b(C.aiy(t.a.f,k),$async$KM)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KM,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.ar(n,60)
v=A.a.b0(A.o.v(A.o.F(n,60)),2,"0")
u=B.aI(o,o,o,o,A.Qp,o,o,o,new C.dNB(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.i.ad(t.w*1.46,2)+" \xb7 stake $"+A.i.ad(p.a.w,2),o,o,o,o,o,o,D.fy3,o,o,o)],s),A.E,o,A.e,A.h,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.l(99)
q=B.A(B.a([u,t,new C.arF(r,new C.dNC(p),o),A.bn,B.cT(o,B.A(B.a([D.c2L,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iH,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o,o,A.b0,new B.o(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nG,o,o,o)],s),A.l,o,A.e,A.h,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aS8(o,D.bvi,B.bm(!0,B.x(B.a([new B.D(D.bJm,q,o),new C.Oq(w*r,w,v,o),new B.D(F.anh,B.A(B.a([B.E(B.bu(B.l(99),B.ku(A.bw,o,o,9,o,r,new B.lQ(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fHJ,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o),B.E(new B.D(A.yQ,B.bu(B.l(22),new B.bM(new B.o(o,o,o,o,o,new B.a7(A.aZ,A.b4,A.x,B.a([A.d.gH(p.a.r).j(0.35),F.akL],x.O),o,o),A.n),A.bk,new B.dt(p.x,Z.hF9(p.a.e,new Z.A_(new C.dND(p),new C.dNE(p),new C.dNF(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a7W.prototype={
B(d){var w=null,v=B.l(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ab(0,A.G,A.at.j(0.22),A.J,26)],x.V)
return B.eG(w,A.L,B.p(w,B.x(B.a([B.p(w,D.bX5,A.f,w,w,new B.o(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.fXh,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bI(D.fKm,w,new C.cdn(d),B.bo(A.at,w,w,w,A.w,A.hg,w,w,new B.b9(B.l(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(w,w,u,v,t,D.c9u,A.n),w,w,w,w,D.bHC,w,w,w),w,w,w,A.a1r,w,A.d7,w,w,w)}}
C.apl.prototype={
S(){return new C.blW(null,null)},
gZ(d){return this.e}}
C.blW.prototype={
Y(){var w,v=this,u=null
v.a3()
w=v.d=B.bn(u,A.Cv,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dGQ(v))
w=B.bn(u,A.me,u,1,u,v)
w.cK(0)
v.e=w
w=B.bn(u,A.O8,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dGR(v))
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
w.bzj()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.T2[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.T2[A.o.F(a9.w,5)]:b0
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
b3=B.a([B.e4(A.z,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,b0,B.a([new B.ab(6+e,A.G,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.G,A.b9.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.p(b0,b0,A.f,b0,b0,new B.o(B.ap(A.bh,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dP(new B.iZ(B.wR(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
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
if(a9.a.c)a2=D.dfw
else{a2=B.ap(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.ch,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.G,A.w.j(0.3),D.et_,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.G,A.c.j(0.9),A.Ux,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bR(0,new B.bM(new B.o(b0,b0,b0,B.l(d),b0,new B.a7(new B.d7(-1+Math.cos(j)*0.8,-1),new B.d7(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,B.l(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cU(A.w.j(0.18),A.dL,5)],x.C)
if(!a9.a.c)d.push(new B.cU(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uL(B.d(v,b0,b0,b0,b0,b0,b0,B.m(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jq,b3),b0,b0,b0))
f.push(B.dP(B.fA(A.z,B.p(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNx.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.Oq.prototype={
B(d){var w=null,v=new C.cfP(),u=v.$3("STAKE","$"+A.i.ad(this.e,2),A.c),t=B.l(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.Or,B.A(B.a([u,B.p(w,B.x(B.a([D.fVV,B.lH(new C.cfO(),w,A.b0,A.n_,w,w,new B.bq(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(w,w,s,t,r,D.aud,A.n),w,w,w,w,A.OE,w,w,w),v.$3("FULL WIN","$"+A.i.ad(this.d,2),A.bL)],q),A.l,w,A.e,A.h,0,w,w),w)}}
C.arF.prototype={
B(d){var w=null,v=B.l(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.bVw,A.df,C.ast(this.d,A.o6,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,u,v,w,D.aud,A.n),w,w,w,w,A.OP,w,w,w)},
ge3(){return this.c}}
C.Oy.prototype={
S(){return new C.bmG(null,null)}}
C.bmG.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.me,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzW()},
aQx(d,e){var w=this.a.d,v=B.U(w).k("N<1,n>"),u=B.C(new B.N(w,C.isO(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c6(w,new C.e6w(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c4(w,D.ak4,B.bm(!0,this.aQx(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aQx(0,d)},
azy(d,e,f){var w=null,v=f.j(0.16),u=B.l(10)
return B.A(B.a([B.p(w,B.W(d,f,w,w,w,17),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w)}}
C.aO8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aeK.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aE(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e6z()).gJ(0),j=new B.ec(l.dN(m,new C.e6A(),x.cD),x.bG).cF(0,0,new C.e6B())
o=B.aE(d,A.bZ,o).w
w=x.p
v=B.a([A.T,B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anz,B.A(B.a([B.p(p,D.c5h,A.f,p,p,new B.o(p,p,p,B.l(14),B.a([new B.ab(0,A.G,A.fe.j(0.45),A.J,14)],x.V),D.au6,A.n),p,44,p,p,p,p,p,44),A.bb,D.bLM,B.aI(p,p,p,p,A.lt,p,p,p,new C.e6C(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.h,0,p,p),p)],w)
if(l.gcm(m)){u=C.hdW("GAMES",""+l.gJ(m),A.ey)
t=C.hdW("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDj(j)
s=s?A.jY:A.f_
v.push(new B.D(D.bFM,B.A(B.a([u,A.ae,t,A.ae,C.hdW("NET",r+q,s)],w),A.l,p,A.e,A.h,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.Q(24,36,24,24+n),B.x(B.a([B.W(D.bRw,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.m(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.m(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.h,0,A.p),p))
else v.push(new B.di(1,A.cm,B.hT(p,new C.e6D(this),l.gJ(m),new B.Q(14,2,14,16+n),p,A.ah,new C.e6E(),!1),p))
return B.p(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9g,p,p,p,p,p,p,p,p)}}
C.aeJ.prototype={
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
t=s}if(w)r=A.bX
else if(u)r=A.dy
else{w=v?A.aQ:A.bv
r=w}q=h.gbkg()
w=new C.e6y()
s=B.l(14)
p=B.a([r.j(0.13),D.bu2],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.W(g?A.mk:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u1,i,i,i),1)
l=r.j(0.2)
k=B.l(99)
k=B.p(i,B.d(t,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.o(l,i,i,k,i,i,A.n),i,i,i,i,D.bJe,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDj(q)}else{l=g?"+":"-"
l+=C.bDj(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.m(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.h,0,i,i)
k=C.e6x("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e6x("PAID",C.bDj(g?h.d:0),r),A.df,C.e6x("BEFORE",w.$1(h.x),A.ey),A.df,C.e6x("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.h,0,i,i)
n=C.io8(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.p(i,B.x(B.a([l,A.am,w,A.ax,B.d(n+h,i,1,A.a2,i,i,i,B.m(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.h,0,A.p),A.f,i,i,new B.o(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.n),i,i,i,i,A.k7,i,i,i)}}
C.aCF.prototype={
S(){return new C.bic(A.cT,null,null)}}
C.bic.prototype={
Y(){var w,v,u,t=this
t.a3()
w=B.bn(null,A.mZ,null,1,null,t)
w.cK(0)
t.d=w
v=J.e6(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.af7(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A0.a7V,A.ty,A.d2,A.c][w.aw(4)],[A.i0,A.kc,A.e9,A.Hu][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.byO()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aG(!1,A.a3,!0,w,B.c6(v,new C.dnf(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.af7.prototype={
gZ(d){return this.f}}
C.aN2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.b2O.prototype={
B(d){return new B.wk(new C.cic(this),null,new B.hd(B.a([$.zf(),$.a4d()],x.U)),null)},
ge3(){return this.c}}
C.O1.prototype={
chf(){if(this.c!=null)this.m(new C.c5E())}}
C.JD.prototype={}
C.ar2.prototype={
S(){return new C.aFv(A.cT,new B.au(A.aw,$.ax()))},
cMp(){return this.d.$0()},
cYn(){return this.f.$0()},
cYb(d,e){return this.r.$2(d,e)},
cYZ(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFv.prototype={
t(){var w=this.e
w.U$=$.ax()
w.R$=0
this.a2()},
avf(){var w=B.cW(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avf()
if(s<2){t.azz("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cMp()<s){t.azz("Insufficient balance.")
w=1
break}if(!t.a.cYb(s,"Dice Roll bet")){t.azz("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e_1(t))}w=3
return B.b(C.cex(t.a.e),$async$Bu)
case 3:r=t.a
q=C.iql(r.e,r.c,t.d)
t.a.cYn()
B.b1o(t.a.e)
t.m(new C.e_2(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bN(new B.bd(1000*(40+p*6)),null,r),$async$Bu)
case 7:if(t.c==null){w=1
break}new C.e_3(t).$0()
t.c.ep()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bN(A.k4,null,r),$async$Bu)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hij(q)
t.m(new C.e_4(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cYZ(m,"Dice Roll "+n,o)
t.m(new C.e_5(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.i.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ad(m,2)+" added to your balance"
w=12
return B.b(C.bGZ(r,C.bGF(),new C.e_6(t),n,k,"YOU WIN!",!0),$async$Bu)
case 12:w=13
return B.b(C.aiy("Dice Roll",l?"+$"+A.i.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ad(m,2)+" added to your balance"),$async$Bu)
case 13:w=10
break
case 11:w=14
return B.b(C.bGZ(r,C.bGF(),new C.e_7(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bu)
case 14:C.vd(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$Bu,v)},
azz(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avf(),d=x.w,a0=B.aE(a2,A.dD,d).w,a1=Math.min(B.aE(a2,A.bZ,d).w.a.a*0.44,200)
d=B.hu(Q.asx,D.h2t,new C.e_a(a2),f)
w=B.l(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b3,B.p(f,B.A(B.a([A.ass,A.bn,C.ast(v.d,A.j2,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.o(A.d2,f,f,w,f,f,A.n),f,f,f,f,A.lP,f,f,f)],t),A.l,f,A.e,A.h,0,f,f)
u=g.z
v=B.a0(140,D.a_I.l()>>>16&255,D.a_I.l()>>>8&255,D.a_I.l()&255)
d=B.l(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.p(f,B.as(new C.apl(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.m(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.T2[q]
o=C.hij(p)
n=p>0?A.bi:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ay(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.G,n.j(0.65),A.J,14)],r):A.SQ
m=m?18:15
s.push(new B.by(1,A.ba,new B.D(A.j9,B.p(A.z,B.d(o,f,f,f,f,f,f,new B.G(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.o(k,f,new B.bG(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.h,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hij(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.m(f,f,s>0?A.bc:A.bX,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.m(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.C(new B.N(B.a([2,5,10,25],x.n),new C.e_b(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1x,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bz(f,new B.b6(4,B.l(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.lY,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h6,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.h,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.i.ad(g.avf()*0.46,2),f,f,f,f,f,f,Y.aWX,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.hZ,B.x(d,A.al,f,A.e,A.h,0,A.p),f),1)
v=g.x?f:g.gcw3()
s=B.fv(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.b9(B.l(14),A.a1),f,f,f,f,f)
return C.aS8(f,D.a_W,B.bm(!0,B.x(B.a([new B.D(D.bJH,w,f),new C.Oq(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.Q(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iu(B.d("\ud83c\udfb2 ROLL ($"+A.i.ad(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.h,0,A.p),1)],t),A.l,f,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arL.prototype={
S(){return new C.aFL(A.l7,new B.au(A.aw,$.ax()))},
cY3(d){return this.e.$1(d)}}
C.aFL.prototype={
gau2(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cT.aw(89999))
this.r!==$&&B.bD()
this.r=w
v=w}return v},
gRg(){var w=this.d,v=this.a
return w===A.l7?A.a.i(v.f.a):A.a.i(v.f.b)},
gaas(){var w=this.gRg(),v=B.ag("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.U$=$.ax()
w.R$=0
this.a2()},
JD(d,e){return this.bMX(d,e)},
bMX(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fI(new B.fx(d)),$async$JD)
case 2:B.eZ()
t=u.c
if(t!=null)t.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JD,v)},
Rb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRg().length===0){r.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.ju()
o=A.i.ad(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaas()+"/"+o,0,null):B.cD("bitcoin:"+r.gRg(),0,null)
t=4
w=7
return B.b(B.iQ(q,A.fo,null),$async$Rb)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaas():r.gRg()
w=10
return B.b(r.JD(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rb)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaas():r.gRg()
w=11
return B.b(r.JD(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rb)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rb,v)},
a1E(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i1().bl2(A.eQ),$async$a1E)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fq(),$async$a1E)
case 4:s=e
t.m(new C.e6K(t,A.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1E,v)},
cdu(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hGs(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.T(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cY3(new B.d8(s,w.c.a,w.d,A.fT,v.d,r,v.f,v.gau2(),A.dF,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j6(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eS(o,o,o,!0,!0,A.BY,o,1,!0,o,0,!1,o,!1,A.c,o,B.aI(o,o,o,o,A.If,o,o,o,new C.e6L(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fM4,o,o,o,1,o,!0),m=B.l(26),l=B.K(D.f0.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.G,A.b2.j(0.25),A.eR,24)],k),i=x.p
j=B.p(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.m(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dx(A.dC,A.z,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fu3,o,o,o),o),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.m(o,o,D.f0.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(o,o,l,m,j,D.cct,A.n),o,o,o,o,A.anM,o,o,o)
m=p.c7X()
l=p.aDg(1,"Send the money to NGMY Pay",p.cds())
w=p.aDg(2,"Put this code in the payment note",p.bLx())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.m(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDg(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bz(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.l(18),new B.ay(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uA,!0,o,o,o,o,new B.b6(4,B.l(18),D.b6m),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fvA,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u2,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.l(20)
s=r?D.f0:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bu(B.l(14),new B.cN(D.b7M,new B.Fr(p.f,o),o),A.aq),A.P,D.fev,A.ax],i),A.l,o,A.e,A.h,0,A.p):B.x(B.a([B.p(o,D.c4r,A.f,o,o,new B.o(D.f0.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fRC,A.cR,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p)
return B.c4(n,A.BY,B.as(new B.cN(A.afl,B.cw(B.a([j,A.bx,m,A.bx,l,w,t,p.ba2(4,"Screenshot of your payment",B.az(o,B.p(o,q,A.f,o,o,new B.o(A.uA,o,s,u,o,o,A.n),o,o,o,o,new B.Q(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcpd(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.d(p.a.r,o,o,o,o,o,o,B.m(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bM(new B.o(o,o,o,B.l(18),B.a([new B.ab(0,A.G,A.b2.j(0.45),A.dp,18)],k),D.cb3,A.n),A.bk,B.lV(A.at9,D.h1E,p.gcdt(),B.fv(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.b9(B.l(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bGK,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c7X(){var w=null,v=new C.e6G(this),u=B.l(18),t=B.K(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.l7,A.hA,"Cash App"),A.e7,v.$3(A.a9E,D.as5,"Bitcoin")],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(A.uA,w,t,u,w,w,A.n),w,w,w,w,A.lQ,w,w,w)},
ba2(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.z,B.d(""+d,v,v,v,v,v,v,D.fB5,v,v,v),A.f,v,v,D.b8u,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.p(v,v,A.f,D.f0.j(0.18),v,v,v,v,v,A.wz,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.h,0,A.p)
w=g?12:20
return new B.EP(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.Q(0,0,0,w),B.x(B.a([new B.D(A.a0R,B.d(e,v,v,v,v,v,v,Ab.L1,v,v,v),v),f],u),A.al,v,A.e,A.h,0,A.p),v),1)],u),A.al,v,A.e,A.h,0,v,v),v)},
aDg(d,e,f){return this.ba2(d,e,f,!1)},
cds(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaas():s.gRg(),p=B.l(20),o=B.l(20),n=s.d===A.l7,m=n?D.c9Y:D.cbQ,l=B.a([new B.ab(0,A.G,(n?A.a_i:D.Zq).j(0.35),A.cz,16)],x.V),k=B.l(12)
n=s.d===A.l7
w=n?A.hA:D.as5
k=B.p(r,B.W(w,n?A.a_i:D.Zq,r,r,r,30),A.f,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.m(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.ax,B.A(B.a([D.c_C,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rh,r,r,r)],u),A.l,r,A.e,A.h,0,r,r)],u),A.E,r,A.e,A.h,0,A.p),1)
return B.aG(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eC(B.A(B.a([k,A.bb,v,B.aI(r,r,r,r,D.bZA,r,r,r,w?r:new C.e6J(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.h,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.anb,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gckp(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bLx(){var w,v,u,t,s,r,q,p,o=null,n=B.l(20),m=B.K(A.b7.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gau2().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b7.j(0.28),A.b7.j(0.08)],u)
p=new B.ay(A.ey.j(0.4),1,A.r,-1)
k.push(B.p(A.z,B.d(s,o,o,o,o,o,o,A.q2,o,o,o),A.f,o,o,new B.o(o,o,new B.bG(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aZ,A.b4,A.x,q,o,o),A.n),o,52,o,A.j9,o,o,o,42))}return B.p(o,B.x(B.a([B.A(k,A.l,o,A.b8,A.h,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.m(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.hu(A.a4p,D.h3E,new C.e6F(this),B.fs(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.h,0,o,o)],l),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(A.uA,o,m,n,o,o,A.n),o,o,o,o,A.bH,o,o,o)}}
C.rV.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rW.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWx(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hqB(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aM(v," \xb7 ")},
giH(d){return this.c}}
C.m1.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iz.prototype={
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b8(v.c,new C.cha(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.ik.prototype={
amD(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.ik(v,u,t,s,r,h==null?w.f:h)},
bfG(d){var w=null
return this.amD(w,w,w,w,d,w)},
cQg(d,e,f){return this.amD(d,e,null,null,null,f)},
bfF(d){var w=null
return this.amD(w,w,w,d,w,w)},
cPV(d,e){var w=null
return this.amD(w,w,d,w,e,w)},
aj(){var w=this,v=C.ibF(w.c),u=w.e,t=B.U(u).k("N<1,a9<n,@>>")
u=B.C(new B.N(u,new C.ch8(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbH.prototype={}
C.WM.prototype={
S(){return new C.aFX(new B.au(A.aw,$.ax()),B.n2(0,null,null),B.a([],x.m))},
V3(d){return this.d.$1(d)}}
C.aFX.prototype={
Y(){var w,v=this
v.a3()
w=J.b8(v.a.c,new C.eaP(),x.i)
w=B.C(w,w.$ti.k("ak.E"))
A.d.b_(w,new C.eaQ())
v.d=w
v.JN()},
t(){var w=this.w
w.U$=$.ax()
w.R$=0
this.x.t()
this.a2()},
afK(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$afK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JN()
u.m(new C.eaJ(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.V3(s),$async$afK)
case 2:r=e
if(u.c!=null){u.m(new C.eaK(u))
t=u.c.L(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.T(B.b2(null,null,null,r?A.dn:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$afK,v)},
a9G(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.ik(q,"New Category",A.HP,4284773515,D.aD2,p.length)
t.m(new C.eas(t,s))
t.JN()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.eat(s),p,null,!0,!0,x.i),$async$a9G)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.eau(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
a2B(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.eaG(t,p))
q.bP(0,A.cf)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.ch5(p,q,s),$async$a2B)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.eaH(t,r))
$.aU.x1$.push(new C.eaI(t))
case 1:return B.h(u,v)}})
return B.i($async$a2B,v)},
abH(d){return this.bRM(d)},
bRM(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$abH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eaA(t),r,null,!0,!0,x.i),$async$abH)
case 2:s=f
if(s!=null)u.m(new C.eaB(u,d,s))
return B.h(null,v)}})
return B.i($async$abH,v)},
bPq(d){this.m(new C.eaz(this,d))
this.JN()},
JN(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bfG(v)},
chL(d,e){var w={}
w.a=e
this.m(new C.eaF(w,this,d))},
ZS(d){return this.c6T(d)},
c6T(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$ZS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ee(new C.eaE(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).ce(t),$async$ZS)
case 2:return B.h(null,v)}})
return B.i($async$ZS,v)},
bHH(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fY,A.bs],l):B.a([A.pi,A.eN],l)
w=B.l(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.W(A.e9,m?A.dy:A.dX,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a2I:Ad.Pg
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.W(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.h,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.eaw(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.ul:A.c).j(0.65)
p=B.l(12)
u.push(B.p(n,B.kv(!0,n,o.x,new C.eax(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afg,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.cq,n,n,n))}u.push(A.P)
t=o.w
q=B.m(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.m(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bz(n,new B.b6(4,B.l(14),A.a1),n,A.eV,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.eay(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcwj()
p=B.bo(A.bo,n,n,n,n,n,A.jr,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JR(t,A.bo,n),A.df,B.bI(o.f?A.rd:D.asj,n,m,p)],r),A.dN,n,A.e,A.h,0,n,n))
A.d.u(s,u)}return B.cT(n,B.x(s,A.al,n,A.e,A.h,0,A.p),n,n,A.b0,new B.o(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.H6,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.P(d).ax.a===A.I,s=new C.bbH(t),r=t?A.bA:A.ch,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcdy()
if(n)n=A.VA
else n=B.W(A.zs,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eS(B.a([B.hu(n,B.d("Save",u,u,u,u,u,u,B.m(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aXk(A.aN,u,N.Yo,A.oQ,D.h_S,v.gbDY())
q=v.bHH(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.m(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c4(o,r,B.x(B.a([q,new B.D(A.H6,n,u),B.E(H.hv5(!1,new C.eaO(v,s),m.length,v.gchK(),D.bFy,u,!1),1)],w),A.al,u,A.e,A.h,0,A.p),u,!1,!1,p,u)}}
C.QB.prototype={
S(){return new C.bdC()}}
C.bdC.prototype={
Y(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.c()
w.U$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.I,q=r?D.ul:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.m(s,s,r?A.c:A.bp,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c6d,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.m(s,s,r?A.c:A.bp,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.C(new B.N(D.ccW,new C.cWr(t),w),w.k("ak.E"))
w=B.bZ(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.C(new B.N(D.dcj,new C.cWs(t),v),v.k("ak.E"))
u=x.p
v=B.c9(B.x(B.a([o,A.af,w,A.af,B.bZ(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bO(!1,A.ds,s,s,!0,s,s,s,new C.cWt(d),s,s),B.bI(A.ri,s,new C.cWu(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1j.prototype={
S(){return new C.aHX()},
pj(d){return this.d.$1(d)}}
C.aHX.prototype={
Y(){this.a3()
this.d=B.bp(this.a.c.e,!0,x.u)},
azB(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pj(v.bfF(u))},
a9I(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a9I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b3K(new C.iz("q_"+1000*s,"",D.daP,null,!1,r.length)),$async$a9I)
case 2:t=e
if(t!=null){u.m(new C.f2n(u,t))
u.azB()}return B.h(null,v)}})
return B.i($async$a9I,v)},
b3K(d){var w,v=this.c
v.toString
w=B.ee(new C.f2o(d),!1,null,x.u)
return B.a6(v,!1).ce(w)},
B(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.bA:A.ch,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eS(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aXk(A.aN,v,N.Yo,A.oQ,D.h5L,w.gbEp())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.m(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hT(v,new C.f2t(w,new C.bbH(u)),q,D.bFH,v,A.ah,new C.f2u(),!1)
return B.c4(s,t,u,v,!1,!1,r,v)}}
C.a1i.prototype={
S(){return new C.aHW()}}
C.aHW.prototype={
Y(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())
w=B.bp(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c5(v.e,D.a8N)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.U$=$.ax()
w.R$=0
this.a2()},
afJ(){var w=0,v=B.j(x.H),u=this,t
var $async$afJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(P.Hy(78,1920),$async$afJ)
case 2:t=e
if(t!=null)u.m(new C.f2j(u,t))
return B.h(null,v)}})
return B.i($async$afJ,v)},
agS(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ee(new C.f2h(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).ce(t),$async$agS)
case 2:s=e
if(s!=null)u.m(new C.f2i(u,s))
return B.h(null,v)}})
return B.i($async$agS,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.P(a1).ax.a===A.I,g=h?A.bA:A.ch,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eS(B.a([B.dh(U.a4y,i,A.ri,new C.f2l(j,a1),B.bo(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.l(14)
w=j.f
v=h?A.bP:A.an
w=B.az(i,B.bu(e,K.aSb(B.l(14),A.c_,140,A.D0,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcdx(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.l(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bz(i,A.eM,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cD,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JR(j.d,i,i)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iY(A.aN,i,i,A.ag,i,new C.f2m(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.ul:A.c
q=B.l(16)
p=B.l(16)
o=B.l(16)
n=B.K(A.bo.j(0.45),A.r,1)
m=B.p(i,D.bYe,A.f,i,i,new B.o(A.bo.j(0.12),i,i,B.l(12),i,i,A.n),i,i,i,i,A.bl,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.m(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.ax,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.m(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.h,0,A.p),1)
return B.c4(d,g,B.cw(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.ax,s,A.af,B.aG(!1,A.a3,!0,q,B.aM(!1,p,!0,B.p(i,B.A(B.a([m,A.eu,l,B.W(A.zo,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcjm(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bS,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.dd7.prototype={}
C.WN.prototype={
S(){return new C.aFZ(B.kd(!0,null,!0,!0,null,null,!1))}}
C.aFZ.prototype={
Y(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dI(q.a.c,new C.ebp())
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
default:break}}w=A.d.aM(v,"\n\n")
q.d=new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
t(){var w=this.d
w===$&&B.c()
w.U$=$.ax()
w.R$=0
this.f.t()
this.a2()},
azC(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.aA(v,r,u)+e
s=A.a.oh(v,r,u,t)
this.d.bP(0,new B.ba(s,B.hn(A.bB,r+t.length),A.aP))},
b1P(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.oh(w,v,v,u)
this.d.bP(0,new B.ba(t,B.hn(A.bB,v+u.length),A.aP))},
adp(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(P.Hy(78,1920),$async$adp)
case 3:s=e
if(s==null){w=1
break}t.m(new C.eb5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adp,v)},
Zl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i1().a73(A.eQ),$async$Zl)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fq(),$async$Zl)
case 4:t.m(new r.eba(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zl,v)},
adq(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.au(A.aw,t)
r=new B.au(new B.ba("https://",A.b6,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eb8(s,r),q,null,!0,!0,x.y),$async$adq)
case 2:if(e===!0)u.m(new C.eb9(u,s,r))
s.U$=t
s.R$=0
r.U$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adq,v)},
bIE(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fw(p.a.a,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.eb1(),B.U(p).k("N<1,n>")).c_(0,new C.eb2())
for(p=J.aT(w.a),v=new B.eJ(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.a_(s,"## "))q.push(new C.m1("heading",A.a.i(A.a.b4(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.m1("bullets",new B.N(B.a(s.split("\n"),u),new C.eb3(),t).c_(0,new C.eb4()).aM(0,"\n"),r,r))
else q.push(new C.m1("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a8N)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.P(d).ax.a===A.I,m=new C.dd7(n),l=n?A.av:A.hj,k=B.d(p.a.d,o,o,o,o,o,o,A.cF,o,o,o),j=x.p
k=B.eS(B.a([B.dh(U.a4y,o,A.acz,new C.ebf(p,d),B.bo(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.ct:A.hY
v=B.bZ(A.bI,B.a([p.wh(E.Ph,"Bold",new C.ebg(p),m),p.wh(E.a2K,"Italic",new C.ebh(p),m),p.wh(E.apH,"Underline",new C.ebi(p),m),p.wh(Ah.a2R,"Heading",new C.ebj(p),m),p.wh(N.Pi,"Bullets",new C.ebk(p),m),p.wh(E.apG,"Align",new C.ebl(),m),p.wh(A.Hv,"Link",p.gc3H(),m),p.wh(A.qN,"Image",p.gc3G(),m),p.wh(A1.a34,"Video",p.gc3I(),m),p.wh(M.a4c,"Signature",new C.ebm(p),m),p.wh(A1.Pj,"Divider",new C.ebn(p),m)],j),A.br,o,4,4)
w=B.p(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.h,0,A.p),A.f,w,o,o,o,o,o,o,E.aoj,o,o,o)
v=n?A.bA:A.c
u=B.l(12)
t=B.K(n?A.cQ:A.dY,A.r,1)
s=B.a([new B.ab(0,A.G,A.w.j(n?0.35:0.08),A.cK,16)],x.V)
r=p.d
r===$&&B.c()
q=B.m(o,o,n?A.iO:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bS,B.p(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bz(o,A.eM,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.m(o,o,n?A.d_:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A8.CN,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.i8(n,B.U(n).k("i8<1>"))
j.push(B.p(o,B.bZ(A.bI,n.gdP(n).dN(0,new C.ebo(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.Ou,o,o,o))}return B.c4(k,l,B.x(j,A.l,o,A.e,A.h,0,A.p),o,!1,!1,o,o)},
wh(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.l(8),s=B.l(8)
return B.hc(B.aG(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cq,B.W(d,v?A.iO:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.dry.prototype={}
C.aDz.prototype={
a7(){return"_KbView."+this.b}}
C.as1.prototype={
S(){return new C.aFY(D.b1M)},
cXe(d,e){return this.e.$2$size(d,e)}}
C.aFY.prototype={
gaCr(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gcyx(){var w,v,u,t,s,r=this.gaCr()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cdz(d){this.m(new C.eaZ(this,d))},
cky(d){this.m(new C.eb_(this,d))},
bGM(){this.m(new C.eaR(this))},
bGO(){this.m(new C.eaS(this))},
gb9s(){var w=B.bp(this.a.c,!0,x.i)
A.d.b_(w,new C.eb0())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.P(d).ax.a===A.I,f=new C.dry(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eN.j(0.55),A.nu.j(0.45)],e)
w=B.l(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bHU(f)
break
case 1:g=i.gaCr()
g.toString
g=i.bIC(f,g)
break
case 2:u=i.gaCr()
u.toString
t=i.gcyx()
t.toString
s=B.b1(u.d)
r=B.l(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.fA6,h,h,h),A.f,h,h,new B.o(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.l(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ab(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fY:A.pi
l=B.l(8)
k=B.W(A.oG,g?A.dy:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDx(f,i.gbGN(),u.c,s,"Answer",h),B.E(B.cw(B.a([r,A.af,B.p(h,B.x(B.a([B.p(h,B.A(B.a([k,A.e7,B.d("Stored answer",h,h,h,h,h,h,B.m(h,h,g?A.dy:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.el,A.hl,h,h,h),new C.b2l(t.c,t.e,f,h)],j),A.E,h,A.e,A.h,0,A.p),A.f,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.bS,h,h,1/0)],j),h,h,A.an4,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.h,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.aq,h,h,new B.o(h,h,v,w,h,new B.a7(A.aZ,A.b4,A.x,e,h,h),A.n),h,h,h,A.hZ,h,h,h,h)},
aZX(d){var w,v,u,t=null,s=d.a,r=s?D.ul:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.G,q,A.J,14),new B.ab(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.i_(v.cXe(v.d,72),A.aq),A.f,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.m(t,t,A.dn,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.h,0,A.p)},
bHU(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.az(t,u.aZX(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.aZX(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.m(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cw(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.m(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iv(!0,t,t,A.y,F.aV9,new C.eaU(u,d),u.gb9s().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bFI,t,t,A.ah,!1)},
bIC(d,e){var w,v,u,t,s=null,r=B.bp(e.e,!0,x.u)
A.d.b_(r,new C.eaW())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.m(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hT(s,new C.eaX(this,r,d,e),t,A.wB,s,A.ah,new C.eaY(),!1)
return B.x(B.a([new C.aDx(d,this.gbGL(),e.c,w,e.b,s),new B.D(Ap.wD,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.h,0,A.p)}}
C.aDx.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aI(v,v,v,v,B.W(A.eK,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.l(12)
q=B.p(v,B.W(w.e,s,v,v,v,22),A.f,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.cq,v,v,v)
return new B.D(D.bJ0,B.A(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.m(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v),v)}}
C.add.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.ul:A.c,r=B.l(14),q=B.l(14),p=B.l(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ab(0,A.G,A.w.j(t?0.28:0.06),A.dL,6)],x.V),m=u.j(0.15),l=B.l(12)
l=B.p(w,B.W(v.c,u,w,w,w,22),A.f,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fH(1,B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,B.p(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a2,w,w,w,B.m(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b8,A.h,0,A.p),A.f,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2l.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fY:A.pi
u=B.l(8)
t=B.W(A.v7,w?A.dy:A.dX,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.m(s,s,w?A.dy:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cw,A.eP,s,s,s))}A.d.u(p,J.b8(this.c,new C.ch6(r),x.l))
return B.x(p,A.E,s,A.e,A.h,0,A.p)}}
C.ad5.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bDn,B.d(q.b,r,r,r,r,r,r,B.m(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hO,B.bu(B.l(12),K.aSb(r,A.c_,160,A.qN,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hO,new C.aDy(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wz,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.m(r,r,s.d.a?A.cs:A.bo,r,A.ne,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cPW(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iS(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.m(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cJ,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.Cy,B.x(B.a([u,q,A.aO,t,A.ax,B.d("Signature",r,r,r,r,r,r,B.m(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.h,0,A.p),r)
case"bullets":v=x.cl
q=B.C(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cPX(),x.cc),new C.cPY(s),v),v.k("M.E"))
return new B.D(A.kB,B.x(q,A.E,r,A.e,A.h,0,A.p),r)
case"divider":return new B.D(A.hO,B.iS(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eO,C.i5y(q,s.d),r)}}}
C.aDy.prototype={
S(){return new C.bjK()}}
C.bjK.prototype={
Y(){this.a3()
this.afL()},
afL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d5(n,"http")&&!J.d5(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZI(B.cD(n,0,null),null)
w=7
return B.b(J.a4g(q),$async$afL)
case 7:if(r.c==null){w=1
break}r.m(new C.drz(r,q))
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
return B.i($async$afL,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.l(12)
return B.p(A.z,B.W(A.qW,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.l(12)
v=s.a
u=J.ajv(v)
return B.bu(w,new B.fH(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AK(s,t),B.aI(t,t,t,t,B.W(v.f?A.apO:A.Pk,A.c,t,t,t,44),t,t,t,new C.drB(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.asR.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JI.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.t1.prototype={}
C.as4.prototype={
S(){var w=null
return new C.aG_(new B.au(A.aw,$.ax()),B.n2(0,w,w),B.a([],x.m),D.El,D.aM3,w,w)},
ge3(){return this.d}}
C.aG_.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.nD,null,1,null,v)
w.f1(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7e).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.U$=$.ax()
v.R$=0
w.e.t()
w.bA4()},
gasz(){var w,v,u,t,s=this.x
if(s===D.Em)return null
s=s===D.El
w=s?D.a7e:D.a6i
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
czj(d){return this.m(new C.ebD(this,d))},
aCd(){$.aU.x1$.push(new C.ebu(this))},
JE(d){return this.cyL(d)},
b1Q(){return this.JE(null)},
cyL(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JE=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JE)
case 3:e=b2
if(!e){w=1
break}B.k0()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aU(a0,new C.ebw())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hAQ(a8)&&a1
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
l=C.hAQ(a8)&&!p
q.m(new C.ebx(q,a8))
q.aCd()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.eby(q))
q.aCd()
w=1
break}t=5
j=B.ns(k)
i=new B.N(a0,new C.ebz(),B.U(a0).k("N<1,n>")).aM(0,"\n\n")
a0=C.ipJ(m,p,o,q.x,n,q.y,q.gasz(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.rm(j,h,A.i1,null,null),$async$JE)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bF8(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ebA(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ebB(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.ebC(q))
q.aCd()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JE,v)},
bMF(){return this.JE("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.P(d).ax.a===A.I,p=q?A.GE:D.bsk,o=x.p
o=B.a([B.x(B.a([B.E(s.cy0(q),1),s.bLS(q)],o),A.l,r,A.e,A.h,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbME()
u=B.l(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eC(D.ewT,r,new B.o(r,r,r,u,B.a([new B.ab(0,A.G,A.aQ.j(0.45),A.cK,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o0,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o0,r,r,A.ai),r,r,r,14,r,r))}return B.p(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cy0(d){var w,v,u,t=this,s=null
if(t.x===D.Em)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hcU(s,!1,A.L,0,0,w,B.h98(t.cDR(d),A.YJ,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.W(A.as7,A.aD.j(0.5),s,s,s,52)
w.push(B.b8R(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.m(s,s,d?A.aF:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.bZ(A.fU,B.a([t.ak4("Full bongo love song ABAB",d),t.ak4("Mix: group vs private jet \u2014 which flies?",d),t.ak4("Song from John 3:16 + matching verses",d),t.ak4("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b8,A.h,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nN(D.bE4,B.Z6(new B.oX(new C.ebv(t,d),u+v,!0,!0,!0,0,B.ts(),s)),s))}return B.w6(0,s,A.t,t.e,A.y,s,s,Aa.afc,s,s,!1,s,A.ah,!1,w)},
cDR(d){var w=this.as
w===$&&B.c()
return B.c6(w,new C.ebK(this,d),null)},
cDT(d){var w,v=this,u=null,t=B.l(14),s=v.r?u:new C.ebM(v),r=A.w.j(d?0.35:0.06),q=B.l(14),p=B.K(A.b9.j(0.35),A.r,1),o=v.gasz()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.F6,u,u,u)
w=v.gasz()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.m(u,u,d?A.c:A.bp,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(u,B.A(B.a([o,A.ae,w,B.W(v.w?A.PL:A.th,A.b9,u,u,u,20)],x.p),A.l,u,A.e,A.h,0,u,u),A.f,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.nH,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
axL(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b2,A.aV],x.O)
break
case 1:w=B.a([A.bo,A.cs],x.O)
break
case 2:w=B.a([A.bE,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.l(14)
t=B.l(14)
s=this.r?n:new C.ebt(this,d)
r=B.l(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.F6,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bp
return B.E(B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cT(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.m(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.h,0,A.p),n,n,A.b0,new B.o(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cDU(d,e){var w,v,u,t=this,s=null,r=t.x===D.El?t.z:t.Q,q=B.l(20)
if(r===d.a)r=A.b9.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.l(20)
v=t.r?s:new C.ebN(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.VT,s,s,s)
return B.aG(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.hm,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.m(s,s,e?A.c:A.bp,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
ak4(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.acr,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.n8(w,u,v,w,this.r?w:new C.ebE(this,d),w,w,w,w)},
bLS(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.l(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(Ak.ao3,B.d("$"+A.i.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.m(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.m(r,r,d?A.c:A.bp,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Em?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bz(r,A.eM,r,A.hn,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m(r,r,d?A.bV:A.hM,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ebq(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ebr(s)
l.push(B.A(B.a([v,new B.JR(w,A.aD,r),B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eC(u?D.ex8:D.c_L,r,D.b9m,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.ai)],m),A.dN,r,A.e,A.h,0,r,r))
return B.p(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.t5,A.a0V,r,r,r)}}
C.aOg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.WO.prototype={
aj(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a03.prototype={
S(){return new C.aCY(null,null)},
bky(){return this.f.$0()}}
C.aCY.prototype={
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,D.bCt,u,1,u,v)
w.cr(0)
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
w=B.bn(u,A.yL,u,1,u,v)
w.cr(0)
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
w.byT()},
cdB(){var w=this.d
w===$&&B.c()
w.eJ(0).bG(new C.doU(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aE(d,A.bZ,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcdA(),f=x.l,e=J.e6(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.DW(new C.doV(k,v,d),j,w,j)}f=B.C(e,f)
w=k.d
w===$&&B.c()
u=B.l(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.G,A.at.j(0.35),A.J,40),new B.ab(0,A.G,A.aN.j(0.25),A.fQ,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c6(new B.hd(B.a([r,q],x.U)),new C.doW(k),j)
r=B.ok(A.jV,D.h2Y,new C.doX())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.m(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cD,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b1R(A.ke,"Resets in 24h"),A.ae,k.b1R(A.oG,"Help Topics ready")],o),A.l,j,A.b8,A.h,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dW(D.fY6,new C.doY(k),B.dj(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kW,j,new B.b9(B.l(14),A.a1),new B.ay(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.l(14)
m.push(B.E(B.bI(D.h2O,j,g,B.bo(A.aN,j,j,6,A.c,j,A.kW,A.aN.j(0.5),new B.b9(l,A.a1),j,j,j)),1))
f.push(B.as(B.az(j,B.c6(w,new C.doZ(k),B.p(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.h,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.o(j,j,t,u,s,D.c92,A.n),j,j,j,j,Ac.anU,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dp_(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aG(!1,A.a3,!0,j,B.az(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b1R(d,e){var w=null,v=A.c.j(0.08),u=B.l(20),t=B.K(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.W(d,A.at,w,w,w,13),A.e7,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hm,w,w,w)}}
C.aN7.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.OP.prototype={}
C.qk.prototype={}
C.asD.prototype={
S(){return new C.aGm(B.a([],x.E),B.a([],x.s))}}
C.aGm.prototype={
gasY(){return A.i.D(B.M5(this.a.c.a,new C.eq0(this)),0,1/0)},
a9O(){var w,v=this,u=v.d,t=v.gasY()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rk(u.a,t,!0,!1)},
K8(d,e){var w,v,u,t=this,s=t.gasY(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gasY()
if(w<v-0.005)B.hGu(t.a.c.a,v-w)
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
w=$.Jv+1
$.Jv=w
if(w===1){w=$.hs5
if(w!=null)w.$0()}v=$.hba.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bp(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bp(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m9(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aRR(u,A.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w1(w,u,r,q,s.e,p)}o.d=t}o.PT()
o.a9O()
$.aU.x1$.push(new C.eqH(o))
o.Q=B.dg(A.ow,new C.eqI(o))
o.as=B.dg(A.hb,new C.eqJ(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.hYh()
w.a2()},
cG3(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a95(v,w)){if(C.hbc(p,q.e)){q.m(new C.eqp(q,p))
q.yE(!1,!0,!0)}else if(q.c!=null)q.m(new C.eqq())
return}if(!C.cjn(v.c?v.bU():v)){q.m(new C.eqr(p))
q.b2_(!1)
return}u=p.gD3()
if(u<=0)return
t=w.d3(B.c_(B.bC(w),B.bL(w),B.bX(w),12,0,0,0,0))
s=C.hbd(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.eqs())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aU(q.e,new C.eqt(r))){q.m(new C.equ(p,w,u))
return}q.m(new C.eqv(q,p,u,w))
q.aAe(new B.d8(r,p.a,u,A.h7,A.fw,"Clock-in daily earnings (local)",null,null,A.cv,w))},
jn(d){if(d===A.fW)this.Fi()},
PT(){var w,v,u,t,s,r,q,p=this.d
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
w.c5=B.bp(p.c5,!0,x.N)
w=this.a.c
w.bx=p.c5.length
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
SM(d){return this.cEE(d)},
cEE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$SM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.PT()
t.K8(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dN(s,x.H),$async$SM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$SM,v)},
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
return B.b(H.A9(q.w,k,l,j,m,!1,n),$async$Fi)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.eqk(q,p))
q.SM(!1)}w=8
return B.b(q.Kk(),$async$Fi)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ac(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Kk(),$async$Fi)
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
Oh(d){return this.bFY(d)},
bFX(){return this.Oh(null)},
bFY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Oh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.aA(),$async$Oh)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d0(t.w,x.N)
r=s.tW("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jG(d,B.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fT&&l.x===A.cv&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eq1(j,t,i))
q.u(0,p)
r=B.C(q,B.a3(q).k("ci.E"))
t.w=r
w=4
return B.b(B.asF(t.a.c.a,r),$async$Oh)
case 4:t.azK(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oh,v)},
Kk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kk=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.U(a2).k("Y<1>")
a4=B.C(new B.Y(a2,new C.eql(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.U(a2).k("N<1,n>")
e=B.C(new B.N(a2,new C.eqm(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lL("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kk)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gP(a2)
m=n
a3=J.t(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aJ(J.t(m,"status"))
d=a3==null?null:A.i.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bk(r.e,new C.eqn(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cv
else a0=J.z(k,2)?A.kJ:A.dF
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dF&&h===A.cv&&a3[j].d===A.fT)J.c5(a6,l)
if(i===A.dF&&h===A.kJ&&r.e[j].d===A.f2){g=r.d
if(g!=null){r.K8(g.d+r.e[j].c,!1)
r.azK(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.eqo())
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
return B.b(r.Oh(a6),$async$Kk)
case 13:w=11
break
case 12:w=14
return B.b(r.bFX(),$async$Kk)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kk,v)},
QG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vg(i.a,i),$async$QG)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.eq5(t,h))
t.PT()
t.a9O()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.A9(s[0],p,q,o,r,!0,i),$async$QG)
case 4:i=e.a
n=i[4]
m=B.bp(i[2],!0,x.o)
l=i[5]
t.w=B.bp(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.PT()
t.a9O()
k=C.hbc(n,m)
if(k)t.K8(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hsV(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.PT()
if(t.c==null){w=1
break}t.m(new C.eq6(t,n,m,l))
if(i){t.yE(!1,!0,!0)
if(j==="reset"){B.hrF(t.a.c.a)
i=t.c
if(i!=null)B.hrI(i,null)}else if(j==="warn2"){B.hrG(t.a.c.a)
i=t.c
if(i!=null)C.hrJ(i)}}else if(k)t.yE(!1,!0,!0)
else t.SM(!1)
case 1:return B.h(u,v)}})
return B.i($async$QG,v)},
yE(d,e,f){return this.coc(d,e,f)},
azK(d,e){return this.yE(d,!1,e)},
b2_(d){return this.yE(!1,d,!1)},
coc(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
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
B.JB(t.w,p,q,s,o,r)
if(f)t.SM(d)
case 1:return B.h(u,v)}})
return B.i($async$yE,v)},
cdS(){this.m(new C.eqe())
this.azK(!1,!0)},
agv(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cv&&B.tq(d)){w=r.a
w.f.$1(new B.d8(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjj(q,d)
v=q.d=B.M5(r.a.c.a,new C.eqb(r))
r.at=r.a.c.d=v
B.rk(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.eqc(r,d))
r.yE(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d8(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dF
if(w&&d.d===A.fT)s=!1
else if(w&&d.d===A.f2){r.K8(q.d-d.c,!0)
s=!0}else{C.cjj(q,d)
w=d.d
s=w===A.f2||w===A.kr
r.K8(q.d,s)}r.m(new C.eqd(r,d))
w=d.d
r.yE(s,e,w===A.f2||w===A.kr||d.x===A.cv||w===A.h7)},
aAe(d){return this.agv(d,!0,!1)},
b33(d,e){return this.agv(d,!0,e)},
b32(d,e){return this.agv(d,e,!1)},
cgZ(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.is1(u,e,d)){v.mr("This plan is already active.")
return}w=B.hFZ(u.a,d,e)
if(C.ioe(u.a,v.e,w)){v.mr("You already own this plan.")
return}if(u.d<g){v.mr("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.eqf(v))
v.m(new C.eqg(v,u,new B.w1(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAe(new B.d8(w,u.a,g,A.kr,A.fw,"Direct investment buy: "+d,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.m(new C.eqh(v))
v.mr("Plan purchased: "+d)},
mr(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a0P(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.apm(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0P)
case 3:w=4
return B.b(t.QG(),$async$a0P)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a0P,v)},
agZ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.ajS(r,B.a([r],x.d9),A.SR,t.a.d,t.gb31(),t.gb1Z(),null),!1,null,x.X),$async$agZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agZ,v)},
agX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hD(s,new C.an0(r,t.a.d,t.e,t.gb31(),t.gb1Z(),new C.eqj(t),null),!1,"LocalGrowthGameCenter",x.X),$async$agX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agX,v)},
aeb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aeb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hbc(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2_(!0),$async$aeb)
case 5:case 4:if(j.x==null){t.mr("Choose an investment plan first, then come back to clock in.")
t.m(new C.eq7(t))
w=1
break}if(B.mz(r)===6||B.mz(r)===7){t.mr("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hsW(r)){t.mr("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a95(q,r)&&j.fy>0){t.mr("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSy(q,r))if(!B.aSy(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIh(m.y,l,m.a))}}q=B.hFp(q,r)}else q=p
else q=p}else q=!1
if(q){t.mr("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mr("You are already clocked in for today.")
w=1
break}k=C.hZK(r)
q=j.a
t.m(new C.eq8(j,r,k))
t.b32(new B.d8("local_clockin_manual_"+q+"_"+s,j.a,0,A.h7,A.fw,"Clock-in session started (local)",null,null,A.cv,r),!1)
t.mr("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aeb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.P(d).ax.a===A.I?A.ny:A.qr
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fNg
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
A.d.u(w,new B.Y(v,new C.eqz(),B.U(v).k("Y<1>")))
A.d.b_(w,new C.eqA())
v=l.d
v.toString
u=C.idO(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anP(t,l.a.e,l.z,l.gcgY(),l.aXb(),D.hxp),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDM(l.aXb(),q,n,o,w,new C.eqB(l),l.gcj4(),new C.eqC(l),D.hxq),j,!0)
m=B.aE(d,k,x.w).w
n=l.y
return new B.XD(n,new C.eqD(l),B.aG(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bR(0,B.eb(k,j,!0),0,0,0),B.bR(0,B.bm(!1,[new C.aDL(v,u,w,l.gc6V(),new C.eqE(l),new C.eqF(l),new C.eqG(d),l.gcjX(),l.gcjS(),D.hxo),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIl(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXb(){var w=null,v=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
return B.hc(B.aM(!1,w,!0,B.p(A.z,D.c4B,A.f,w,w,new B.o(w,w,B.K(D.f0.j(0.38),A.r,1),w,B.a([new B.ab(0,A.G,D.f0.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eq4(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIl(){var w=null,v=B.l(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.5),A.eR,24),new B.ab(-2,A.G,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.Ou,B.bm(!0,B.as(new B.cN(D.b7E,B.p(w,B.cm(new C.eq2(this)),A.f,w,w,new B.o(w,w,u,v,t,D.c8t,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c8A(d){var w=null,v=this.y===d,u=D.deX[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dv(w,!0,w,B.az(A.bY,B.qs(B.oF(v?B.W(s,D.agA,new B.bf("on"+r,q),w,w,21):B.x(B.a([B.W(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bf("off"+r,q),A.b8,A.h,0,A.p),A.iQ,B.pZ(),A.b0,A.b0,B.LN())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqa(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDL.prototype={
c5B(d){return C.hbd(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.P(d)
w=A.c.j(0.58)
v=f.e
u=B.U(v).k("Y<1>")
u=B.pO(new B.Y(v,new C.dtj(),u),3,u.k("M.E"))
t=B.C(u,B.a3(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a95(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hsW(r)
m=v.gD3()
l=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f0.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.G,D.f0.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.p(A.z,B.W(A.hA,D.f0,e,e,e,19),A.f,e,e,new B.o(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.l(14)
k=B.l(14)
j=B.a([new B.ab(0,A.G,A.b7.j(0.45),A.cK,16)],j)
h=B.l(12)
g=x.p
j=B.bU4(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.p(A.z,B.p(A.z,D.bXC,A.f,e,e,new B.o(A.iN.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.o(e,e,e,k,j,D.ca3,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.p(A.z,D.c3A,A.f,e,e,new B.o(A.bt,e,B.K(D.ajB,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hvy(A.fL,new C.dtk(),k)
k=B.A(B.a([B.E(C.hvx(new C.dtl(f,A.rB,n),new B.V(Date.now(),0,!1),h,k),1),A.p5,B.E(new B.wk(new C.dtm(f,A.rB),e,new B.hd(B.a([$.zf(),$.a4d()],x.U)),e),1)],g),A.l,e,A.e,A.h,0,e,e)
h=f.c8N(A.rB,D.f0)
v=B.E(f.cC8("Total Profit","$"+B.dG(v.e),A.rB),1)
u=u?e:s.b
return B.eb(B.c9(B.x(B.a([j,A.T,k,A.af,new C.aDK(f.d,m,q,p,n,o,D.f0,f.gc5A(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p5,B.E(f.b9n("Total Investment","$"+B.dG(u==null?0:u),A.rB,f.r),1)],g),A.l,e,A.e,A.h,0,e,e),A.T,f.c5x(d,t,D.f0,w)],g),A.al,e,A.e,A.h,0,A.p),A.t,e,A.y,e,e,A.a1q,e,e,A.ah),D.ajB,!0)},
azJ(d,e,f,g,h){var w=null,v=B.l(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.G,A.w.j(0.4),A.dp,18)],x.V)
return B.p(w,B.bu(B.l(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bR(0,new B.bM(new B.o(w,w,w,w,w,new B.bS(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.o(w,w,u,v,t,D.c8X,A.n),w,w,w,w,w,w,w,w)},
b1Y(d,e,f,g){return this.azJ(d,e,f,A.ag,g)},
bbv(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.l(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b1Y(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bEC,B.x(B.a([B.p(w,B.A(B.a([B.W(e,f,w,w,w,15),A.e7,B.d(h.toUpperCase(),w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.ao8,w,w,w),A.b3,new B.dx(A.dM,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.m(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.h,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.l(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c8N(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.p(s,s,A.f,s,s,new B.o(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.cZF[w],s,D.bIg,s,s,s,5))}r=B.p(s,B.A(o,A.dN,s,A.b8,A.h,0,s,s),A.f,s,s,new B.o(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.fZU,A.bF,B.A(B.a([B.p(s,s,A.f,s,s,new B.o(e,s,s,s,B.a([new B.ab(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.di(1,A.cm,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.m(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.h,0,s,s)],p),A.E,s,A.e,A.h,0,A.p),1)
o=B.l(16)
v=B.l(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.azJ(B.A(B.a([r,D.fkx,q,A.ae,B.aM(!1,o,!0,B.p(s,B.x(B.a([B.W(A.nO,e.j(0.95),s,s,s,21),A.tV,B.d("PLAY",s,s,s,s,s,s,B.m(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b8,A.h,0,A.p),A.f,s,s,new B.o(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.h,0,s,s),e,A.a5,A.a0Y,26)},
b9n(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aG,s=B.p(v,v,A.f,v,v,new B.o(t,v,v,D.b5Q,v,v,A.n),v,v,v,A.nF,v,v,v,5),r=x.p
r=B.a([s,A.bb,B.E(B.x(B.a([B.A(B.a([B.W(u?A.v5:A.zD,t,v,v,v,14),A.e7,new B.di(1,A.cm,B.d(d,v,1,A.a2,v,v,v,B.m(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.h,0,v,v),A.am,new B.dx(A.dM,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.ftV,v,v,v),v)],r),A.E,v,A.b8,A.h,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(Af.Oh,B.W(A.eI,A.c.j(0.35),v,v,v,v),v))
w=this.b1Y(new B.a5(v,66,B.A(r,A.l,v,A.e,A.h,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.l(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cC8(d,e,f){return this.b9n(d,e,f,null)},
c5x(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.f,m,m,new B.o(f,m,m,m,B.a([new B.ab(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.m(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.l(20),h=x.p
i=B.a([B.A(B.a([l,A.Vz,k,A.b3,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.a1D,m,m,m)],h),A.l,m,A.e,A.h,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a0O,B.x(B.a([B.W(A.ho,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.m(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.m(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.h,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mO(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f2||v===A.kr
t=u?A.hK:D.f0
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ay(t.j(0.35),1,A.r,-1)
v=B.p(A.z,B.W(u?A.v5:A.x_,t,m,m,m,18),A.f,m,m,new B.o(m,m,new B.bG(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.im5(j),m,1,A.a2,m,m,m,A.kI,m,m,m)
q=C.hxa(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.G(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.h,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.p(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.G(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.o(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oz,m,m,m)
j=C.hF2(j)
k.push(new B.D(O.Ol,new B.c7(A.aM,A.e,A.h,A.l,m,A.p,m,0,B.a([v,A.bb,new B.by(1,A.ba,s,m),B.x(B.a([q,A.cR,B.d(j,m,m,m,m,m,m,new B.G(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dN,m,A.e,A.h,0,A.p)],h),m),m))
A.d.u(i,k)}return this.azJ(B.x(i,A.l,m,A.e,A.h,0,A.p),f,A.aZ,D.bEN,26)}}
C.aDK.prototype={
S(){return new C.bkt(null,null)},
cWU(d){return this.z.$1(d)},
cYe(){return this.Q.$0()}}
C.bkt.prototype={
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,A.qD,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bCj,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bn(u,A.qG,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.baw()},
gbde(){var w=new B.V(Date.now(),0,!1)
if(B.mz(w)===6||B.mz(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
baw(){var w=this,v=w.a,u=v.e||v.f||w.gbde()
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
this.baw()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bz9()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbde()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.dtc(i):h
v=B.l(32)
s=B.l(32)
r=f?D.dxx:D.dxv
q=B.K((f?D.pl:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.G,(f?A.aE:A.b9).j(0.16),A.fQ,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.acG(D.pl,130),h,h,h,-24,-30,h),B.ao(-36,i.acG(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.acG(A.b9,120),h,h,h,-30,-36,h),B.ao(-40,i.acG(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bR(0,new B.dt(!0,B.bu(l,new B.eo(B.c6(k,new C.dtd(i),h),h),A.aq),h),0,0,0))}if(f){l=B.l(32)
k=i.f
k===$&&B.c()
m.push(B.bR(0,new B.dt(!0,B.bu(l,new B.eo(B.c6(k,new C.dte(i),h),h),A.aq),h),0,0,0))}l=B.l(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b7L,B.p(h,B.A(B.a([B.p(h,h,A.f,h,h,new B.o(t,h,h,h,B.a([new B.ab(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.di(1,A.cm,B.d(u,h,1,A.a2,h,h,h,D.fzS,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.hn,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hvy(A.fL,new C.dtf(),l)
m.push(C.hvx(new C.dtg(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cT(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.o(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.n),A.Cu,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acG(d,e){var w=null
return new B.dt(!0,B.p(w,w,A.f,w,w,new B.o(w,w,w,w,w,new B.bS(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.be5.prototype={
b20(d,e,f,g){var w=new B.aH($.S().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+f,u))
w.E(new B.ce(v,u,v,u+f))
w.E(new B.ce(v,u,v-f,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bw())
d.af(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.i.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.i.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b20(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.i.F(a7+p/3,1)
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=1.6
n.r=a9.j((1-o)*0.38).gp(0)
b2.O(b1,138+o*90,n)}for(a7=a6.d,m=b2.c,u=0;u<28;++u){l=A.i.F(w*(1+A.o.F(u,2))+u/28,1)
k=u*2.399963+Math.sin(u*1.7)*0.2
j=113.16+l*(70+A.o.F(u,5)*18)
i=a8+Math.cos(k)*j
h=b0+Math.sin(k)*j*0.96
o=new B.r(i,h)
g=A.i.D(Math.sin(l*3.141592653589793),0,1)
switch(A.o.F(u,4)){case 0:f=A.i.D(Math.abs(Math.cos(l*6.283185307179586*3)),0.28,1)
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
if(f>0.6&&g>0.35){i=$.hL9()
h=i.b
d=h.c
h=h.a.c
i.a4(b2,new B.r(-d/2,-h.gba(h)/2))}m.restore()
break
case 1:$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b20(b2,o,3+g*3,i)
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
C.be4.prototype={
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
a2=A.i.F(a0,1)
a3=a5.c
J.br(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aD(0,D.fd1))
a5.aF(new B.a4(-18,a2,18,a2+a1*3),v)
a3.restore()
for(a2=a1+40,t=0;t<34;++t){m=A.i.F(Math.abs(Math.sin(t*91.7)*43758.5453),1)
l=A.i.F(w*(1+A.o.F(t,2))+t/34,1)
v=l*6.283185307179586
u=Math.sin(v*2+t)
J.br(a3.save())
a3.translate(m*d+u*14,l*a2-20)
a3.rotate(v*(2+A.o.F(t,3))*180/3.141592653589793,0,0)
v=A.i.D(Math.abs(Math.cos(v*3+t)),0.3,1)
a3.scale(1,v)
if(l<0.08)v=l/0.08
else v=l>0.9?(1-l)/0.1:1
k=A.i.D(v,0,1)
v=B.bx(D.fdA,A.V0)
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.r=D.aEc[A.o.F(t,6)].j(k*0.9).gp(0)
a5.aq(v,u)
a3.restore()}j=[new B.r(d*0.18,a1*0.2),new B.r(d*0.82,a1*0.26),new B.r(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=A.i.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=A.i.D(d,0,1)
for(a1=g*0.62,a2=g+5,t=0;t<14;++t){s=t*6.283185307179586/14
a3=Math.cos(s)
w=Math.sin(s)
f=D.aEc[A.o.F(t+i,6)].j(k)
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
C.be3.prototype={
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
p.E(new B.jz(B.bV(a1,a3)))
a4.mx(0,p)
p=B.bV(a1,a3)
o=B.L()
o.san(D.eEt.aD(0,B.bV(a1,a3)))
a4.aF(p,o)
n=A.i.D(f.b,0,1)
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
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f0.j(0.34),A.cW.j(0.62)],a0)
d.san(new B.a7(A.aZ,A.b4,A.x,a0,e,e).aD(0,B.bV(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDM.prototype={
S(){var w=$.ax()
return new C.aDN(new B.au(A.aw,w),new B.au(A.aw,w))},
bkr(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDN.prototype={
t(){var w=this.d,v=$.ax()
w.U$=v
w.R$=0
w=this.e
w.U$=v
w.R$=0
this.a2()},
mr(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cE2(d){this.a.bkr(d,!0)
this.mr("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dtD())},
cCD(){var w,v,u=this,t=B.cW(u.d.a.a)
if(t==null||t<=0){u.mr("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hD(w,new C.arL(v.d,t,u.gcE1(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cKI(){var w,v,u,t,s=this,r=s.d,q=B.cW(r.a.a)
if(q==null||q<=0){s.mr("Enter an amount to withdraw.")
return}if(q<10){s.mr("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mr("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hGs(w.a.a)
if(v.length===0){s.mr("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkr(new B.d8("wd_"+1000*Date.now(),s.a.d.a,q,A.f2,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dF,new B.V(Date.now(),0,!1)),!0)
s.mr("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.cf)
w.bP(0,A.cf)
s.m(new C.dtE())},
cHl(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cv||!this.aZa(r)||B.hjs(r))continue
q=r.d
p=q===A.f2||q===A.kr||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brC(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cHl(),p=s.a.r,o=new B.Y(p,new C.dtF(),B.U(p).k("Y<1>")).gJ(0)
p=B.aE(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f0.j(0.38),A.r,1)
w=B.bU4(!1,v,"WALLET",B.hc(B.aM(!1,r,!0,B.p(A.z,B.W(X.arp,D.f0,r,r,r,18),A.f,r,r,new B.o(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bGS(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asw(A.x_,"Deposit",0),s.asw(A.v5,"Withdraw",1),s.asw(A.h3,"History",2)],t),A.l,r,A.r0,A.h,0,r,r)
return B.eb(B.bm(!1,B.c9(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oF(s.f===2?s.c2p():s.c8e(),A.ie,B.pZ(),A.b0,A.b0,B.LN())],t),A.al,r,A.e,A.h,0,A.p),A.t,r,A.y,r,r,new B.Q(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.BY,!0)},
bGS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cn(g,"@")
v=A.a.aA(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.b4(g,w)}else v=g
w=B.l(26)
u=B.ao(h,i.aBZ(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aBZ(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aBZ(150,0.05),h,h,-40,h,h,h)
r=B.l(26)
r=B.bR(0,new B.bM(new B.o(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.l(6)
p=x.p
q=B.A(B.a([B.p(h,B.b5(h,h,h,new C.bdv(h),A.az),A.f,h,h,new B.o(h,h,h,q,h,D.cb8,A.n),h,28,h,h,h,h,h,38),A.b3,D.h7E],p),A.l,h,A.e,A.h,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.m(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.ast(new C.dtp(i),D.fFB,i.a.d.a)
m=B.a([B.E(i.aRx(A.qO,"In",d),1),B.E(i.aRx(A.td,"Out",e),1)],p)
if(f>0){l=A.d2.j(0.22)
k=B.l(99)
j=B.K(A.jd.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fAO,h,h,h),A.f,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.oz,h,h,h))}return new B.fH(1.62,B.bu(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eDG,u,t,s,r,new B.D(A9.t8,B.x(B.a([q,A.b3,o,A.bF,new B.dx(A.dM,A.a5,A.f,n,h),A.b3,B.A(m,A.l,h,A.e,A.h,0,h,h),A.am,B.d(v,h,1,A.a2,h,h,h,B.m(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.h,0,A.p),h)],p),h),A.aq),h)},
aBZ(d,e){var w=null
return B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRx(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.W(d,A.c,w,w,w,13),A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.di(1,A.cm,new B.dx(A.dM,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o4,w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w)},
asw(d,e,f){var w=null,v=this.f===f,u=v?D.ccv:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f0.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.G,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cT(w,B.W(d,v?D.agA:D.f0,w,w,w,26),w,w,A.cj,new B.o(w,w,t,w,s,u,A.a6),A.GZ,w,62,w,w,w,w,w,62)
return B.az(A.bY,new B.a5(92,w,B.x(B.a([u,A.aV7,B.d(e,w,w,w,w,w,w,B.m(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dto(this,f),w,w,w,w,w,w,!1,A.a4)},
c8e(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cW(a1.a.a)
if(a2==null)a2=0
w=a0?D.f0:A.cs
v=a2>0
u=new C.dtA(e,w)
t=new C.dtz()
s=e.f
r=B.l(26)
q=x.O
p=B.a([w.j(0.1),A.uA,A.uA],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.G,A.w.j(0.35),A.eR,22)],n)
l=w.j(0.15)
l=B.p(d,B.W(a0?A.x_:A.v5,w,d,d,d,18),A.f,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fE,d,d,d),1)
j=A.c.j(0.06)
i=B.l(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.p(d,B.A(B.a([B.W(A.hA,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.m(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.h,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.m(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uX(B.ag("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ig,l,d),A.df,B.aZ1(new B.cN(D.b82,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bz(d,A.eM,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.m(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.ea,d,d,d,1,d,d,!1,"\u2022",d,new C.dty(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fIv,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b8,A.h,0,d,d)
a1=v?120:60
a1=B.as(B.cT(d,d,d,d,A.b0,new B.o(d,d,d,B.l(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.m(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.cgq:D.cvb
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.h,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.W(A.hA,w,d,d,d,d)
k=B.m(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bz(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.l(16),new B.ay(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,A.nf,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.l(16)
A.d.u(l,B.a([A.af,B.p(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.f_),B.iS(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f0)],h),A.l,d,A.e,A.h,0,A.p),A.f,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.hP,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.l(18)
l=a0?A.Tf:A.a5a
n=B.a([new B.ab(0,A.G,(a0?A.b2:A.dX).j(0.45),A.dp,18)],n)
k=a0?e.gcCC():e.gcKH()
j=B.W(a0?A.a37:A.lU,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bM(new B.o(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lV(j,B.d(i,d,d,d,d,d,d,A.mE,d,d,d),k,B.fv(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.b9(B.l(18),A.a1),d,d,d,d,d)),d),d))
return B.p(d,B.x(a1,A.al,d,A.e,A.h,0,A.p),A.f,d,d,new B.o(d,d,o,r,m,new B.a7(A.aZ,A.b4,A.x,p,A.xc,d),A.n),d,d,new B.bf("form"+s,x.W),d,A.wE,d,d,d)},
c2p(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.U(a2).k("Y<1>"),a4=B.C(new B.Y(a2,new C.dts(a0),a3),a3.k("M.E"))
A.d.b_(a4,new C.dtt())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.T(x.N,x.o)
a3=$.fNg
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iD:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b7<2>")
a2=B.C(new B.b7(a2,a3),a3.k("M.E"))
r=C.imE(a2,B.M5(a0.a.e,new C.dtu(a0)))
a2=B.l(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.l(99)
u=B.l(99)
q=x.p
u=B.a([B.A(B.a([D.bLJ,B.aM(!1,v,!0,B.p(a1,D.fex,A.f,a1,a1,new B.o(a1,a1,B.K(D.f0.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lO,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dtv(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.h,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bDf,B.x(B.a([B.W(A.Hx,A.c.j(0.25),a1,a1,a1,40),A.T,D.h4c],q),A.l,a1,A.e,A.h,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cX(a4,0,B.dD(a0.r,"count",x.S),B.U(a4).c),o=p.$ti,p=new B.bQ(p,p.gJ(0),o.k("bQ<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f2||k===A.kr||k===A.eF
if(l===A.cv)i=j?A.bX:D.f0
else i=l===A.dF?A.jd:A.fj
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ay(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.W(j?A.v5:A.x_,i,a1,a1,a1,19),A.f,a1,a1,new B.o(k,a1,new B.bG(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXn(n),a1,a1,a1,a1,a1,a1,A.j2,a1,a1,a1)
e=C.hxa(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.G(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.G(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kJ)f.push(new B.D(E.amu,new B.D1(A.bI,5,4,A.br,B.a([a0.aQq("Before",m.b),a0.aQq("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.h,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.G(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hF2(n)
v.push(B.p(a1,new B.c7(A.aM,A.e,A.h,A.l,a1,A.p,a1,0,B.a([k,A.bb,new B.by(1,A.ba,m,a1),A.ae,B.x(B.a([f,A.ax,B.p(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.G(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.o(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.z2,a1,a1,a1)],q),A.dN,a1,A.e,A.h,0,A.p)],q),a1),A.f,a1,a1,new B.o(a1,a1,new B.bG(A.a1,A.a1,new B.ay(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qH,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hu(D.c1E,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cd,a1,a1,a1),new C.dtw(a0),B.fs(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.p(a1,B.x(u,A.al,a1,A.e,A.h,0,A.p),A.f,a1,a1,new B.o(A.uA,a1,a3,a2,a1,a1,A.n),a1,a1,D.hx1,a1,D.bFD,a1,a1,a1)},
aQq(d,e){var w=null,v=A.c.j(0.05),u=B.l(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.p(w,B.Zg(B.cS(B.a([s,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fFM,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.n3,w,w,w)},
aZa(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tq(d))return!1
if(v===A.fT||v===A.f2)return!0
if(v===A.pb||v===A.kr)return!0
if(v===A.kK)return!0
if(v===A.h7)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXn(d){var w,v=d.f
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
C.bdv.prototype={
a4(d,e){var w,v,u,t
$.S()
w=B.L()
w.r=D.bjB.j(0.55).gp(0)
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
C.byC.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a4(0,p,s,p+80)
n=[A.b9,A.h8,A.bv][q]
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.a7(A.aZ,A.b4,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aD(0,o))
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
h.r=A.pq.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.i.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.i.F(v+m*0.25,1)
t=A.pq.j(0.5*Math.sin(h*3.141592653589793))
d=new B.iC(new B.er("z",a0,a0,A.cM,a0,a0,a0,a0,a0,a0,new B.G(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.c1,new B.jn(1),a0,a0,a0,a0,A.c2,a0,A.cx)
d.eo()
d.a4(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aNn.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.bAB.prototype={}
C.b1Z.prototype={}
C.a0R.prototype={
S(){return new C.aGa(new B.au(A.aw,$.ax()))},
cZp(d,e){return this.d.$2(d,e)}}
C.aGa.prototype={
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
b25(){var w=this,v=A.a.i(w.d.a.a),u=B.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.ekH(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.cZp(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aE(a0,A.eT,e).w
e=B.aE(a0,A.dD,e).w
w=B.as(B.p(f,f,A.f,f,f,new B.o(A.aT,f,f,B.l(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.c1_,A.f,f,f,new B.o(f,f,f,f,B.a([new B.ab(0,A.G,A.fe.j(0.5),A.J,18)],v),D.au7,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fSj,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mC,f,f,f)],u),A.E,f,A.e,A.h,0,A.p),1),B.aI(f,f,f,f,D.c1T,f,f,f,new C.ekK(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.h,0,f,f)
s=g.b95(A.eW,"You",A.cs)
r=A.aQ.j(0.15)
q=B.l(99)
q=B.A(B.a([s,new B.D(A.kX,B.p(f,D.fWu,A.f,f,f,new B.o(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.hm,f,f,f),f),g.b95(A.wW,"Your friend",A.c4)],u),A.l,f,A.e,A.h,0,f,f)
r=A.c.j(0.06)
s=B.l(16)
p=A.c.j(0.12)
o=B.l(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bz(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ay(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b6P),f,f,f,f,f,f,f,f,R.Fa,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c4w,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mB,f,f,f,1,f,f,!1,"\u2022",f,new C.ekL(g),f,new C.ekM(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cqc[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.au6:f
p=p?f:A.c.j(0.06)
k=new B.ay(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dl,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.by(1,A.ba,B.az(f,B.cT(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.G(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.h,0,A.p),f,f,A.b0,new B.o(p,f,new B.bG(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fi,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ekN(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.h,0,f,f)
r=B.A(B.a([B.W(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.m(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.h,0,f,f)
p=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.Q(0,0,0,d.f.d+e.r.d),B.p(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h_x,A.am,o,A.aO,D.h40,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bM(new B.o(f,f,f,p,v,D.cbn,A.n),A.bk,B.hu(D.asj,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fE,f,f,f),g.gced(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b8Q,f,f,f,f,D.bGX,f,f,f),f)},
b95(d,e,f){var w=null,v=f.j(0.1),u=B.l(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.p(w,B.x(B.a([B.W(d,f,w,w,w,24),A.ax,B.d(e,w,w,w,w,w,w,A.Lc,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fi,w,w,w),1)}}
C.pB.prototype={}
C.btq.prototype={
a4(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.S()
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(w===0)r=A.bi
else r=(w&1)===0?A.bD:A.a_
v.r=r.gp(0)
d.cQ(B.bV(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.S()
r=B.L()
r.r=A.iL.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fE(s,A.cx,s,s,s,B.cS(s,s,s,s,s,s,s,s,s,A.aXI,B.w(r)),A.a7,A.c1,s,A.dJ,A.c2)
u.eo()
r=u.b
t=r.c
r=r.a.c
u.a4(d,q.aJ(0,new B.r(t/2,r.gba(r)/2)))}},
aE(d){return d.b!=this.b}}
C.Fs.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.at3.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsr(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.haV("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3f()
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
u=J.e6(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c1(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gks())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0e(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aK2.h(0,d)
s.c=w==null?"Play to earn":w}},
be2(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b8(w,new C.ckZ(),o)
v=B.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.C(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cHY(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at2(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b8(t,new C.cl_(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.j_(e.h(0,q)))o=B.dQ(e.h(0,q))
else{o=B.cb(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJd(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at2(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b8(t,new C.cl0(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.y=o}if(B.j_(e.h(0,p)))o=B.dQ(e.h(0,p))
else{o=B.cb(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bKw(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.at2(e,f)
break}},
cT1(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bp(w.at,!0,q))
o.n(0,"turnEmail",w.aE7())
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
p=B.U(q).k("N<1,ai<F>>")
q=B.C(new B.N(q,new C.cl2(),p),p.k("ak.E"))
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
p=B.U(q).k("N<1,ai<F>>")
q=B.C(new B.N(q,new C.cl3(),p),p.k("ak.E"))
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
aE7(){var w,v,u,t=this
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
at2(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cHY(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJd(d,e){var w,v,u,t,s
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
bKw(d,e){var w,v,u,t,s,r,q
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
UL(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gks())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aE7():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3f(){var w,v,u=this,t=J.e6(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ix(8,new C.ckW(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0e(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.cf)},
d2b(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gks())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UL(q,v==null?"":v)?r.z:-1}if(!r.gks()){v=r.d
v=v==null?null:v.d
v=!r.UL(q,v==null?"":v)}else v=!1
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
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aK(r.y[d],e,r.z)
J.aK(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aaw(2)){r.ac6(1)
return!0}if(r.aaw(1)){r.ac6(2)
return!0}if(r.gks()&&r.z===2){r.bF7(f)
if(r.aaw(2)){r.ac6(1)
return!0}if(r.aaw(1)){r.ac6(2)
return!0}}}return!1},
ac6(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bF7(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
aaw(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d2d(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r3
if(!s.gks()){w=s.d
w=w!=null&&!s.UL("tic_tac_go",w.d)}else w=!1
if(w)return D.r3
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.akL(v))return s.aVN(v,!0)
if(!A.d.q(s.at,""))return s.aVO()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aE7())
s.c=s.b_I()
return D.r3}if(s.gks()){t=s.cpo(e)
if(t>=0){s.at[t]="O"
if(s.akL("O"))return s.aVN("O",!1)
if(!A.d.q(s.at,""))return s.aVO()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b_I()
return D.r3},
b_I(){var w=this.d
if(w==null)return"Take your turn"
return this.UL("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aVN(d,e){var w,v,u=this
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
return e?D.r4:D.Jz},
aVO(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Uc},
cpo(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.akL("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.akL("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dfo[u]
if(v[w].length===0)return w}return-1},
akL(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dnI[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4F(d){return A.d.cF(d,0,new C.cl1())},
cMx(d){this.ay.push(1+d.aw(10))
if(this.a4F(this.ay)>21)return!0
return!1},
cMy(d){var w,v,u,t=this
while(t.a4F(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4F(t.ay)
v=t.a4F(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cSo(d,e){var w,v,u,t=this
if(t.e)return D.r3
if(!t.gks()){w=t.d
w=w!=null&&!t.UL("connect_four_pro",w.d)}else w=!1
if(w)return D.r3
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r3
if(!t.ahS(d,w))return D.r3
if(t.aak(t.fx))return t.aVL(t.fx,!0)
if(t.aRg())return t.aVM()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.coM(e)
if(u>=0){t.ahS(u,2)
if(t.aak(2))return t.aVL(2,!1)
if(t.aRg())return t.aVM()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bJc()
return D.r3},
bJc(){var w=this.d
if(w==null)return"Drop a disc"
return this.UL("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ahS(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aK(this.fr[w],d,e)
return!0}return!1},
aRg(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aVL(d,e){var w,v,u,t=this
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
return e?D.r4:D.Jz},
aVM(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Uc},
coM(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahS(w,2)
v=r.aak(2)
r.bbI(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahS(w,1)
u=r.aak(1)
r.bbI(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bbI(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aK(this.fr[w],d,0)
return}},
aak(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJe(w,v,d))return!0}return!1},
bJe(d,e,f){var w,v,u,t,s=new C.ckV(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bf_(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0e(d)}return w.a>=w.b}}
C.atZ.prototype={
S(){return new C.aGY(null,null)},
cYi(d){return this.e.$1(d)}}
C.aGY.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,D.bCm,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aV(0,v.gb2y())
v.aA0()},
bz(d){var w
this.bK(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.cf)
this.aA0()}},
aA0(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aiX(t,u)
C.aiX(t,u)
w.a.cYi(s)
w.a.toString
w.m(new C.eS7())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb2y())
w=v.d
w===$&&B.c()
w.t()
v.bAG()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aiX(j,i),g=C.aiX(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wV(new B.d2(v,!1,B.p(l,l,A.f,l,l,new B.o(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ab(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1k,l,l,l,3),l),A.UL,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.er(v,l,l,A.cM,l,l,l,l,l,l,D.fCA))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cD}else if(s===t){r=A.bc
q=A.O}else{r=A.aA
q=A.H}d.push(new B.er(t,l,l,A.cM,l,l,l,l,l,l,new B.G(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wV(new B.d2(k,!1,B.p(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.UL,l,l))}p=f===0?0:A.i.V(h/f*100)
k=A.w.j(0.35)
v=B.l(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.p(l,B.x(B.a([B.A(B.a([m.b2x("Correct",""+h,A.bi),A.ae,m.b2x("Wrong / missed",""+(f-g),A.aA),A.b3,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fuc,l,l,l)],o),A.l,l,A.e,A.h,0,l,l),A.am,D.fXD],o),A.E,l,A.e,A.h,0,A.p),A.f,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.c9(new B.abe(l,B.cS(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.m(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.l(12),D.b6I),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,D.aXH,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.h,0,A.p)},
b2x(d,e,f){var w=null,v=f.j(0.15),u=B.l(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.hm,w,w,w)}}
C.aOS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
var z=a.updateTypes(["aB<~>()","~()","F(ik,ik)","~([y4?])","R(rf)","rf()","F(rV,rV)","R(rV)","F(rW,rW)","QB(Z)","R(ik)","cK(af7)","a0y(Z)","a_F(Z)","afT(Z)","a7W(Z)","Oy(Z)","aeK(Z,hw<ai<jv>>)","aeJ(Z,F)","v(rf)","rV(a9<@,@>)","~(Fs,at3)","Oq(Z)","a9<n,@>(rV)","rW(a9<@,@>)","a9<n,@>(kL)","a9<n,@>(rW)","R(rW)","a9<n,@>(m1)","m1(@)","a9<n,@>(iz)","iz(@)","ik(@)","aB<~>(kL)","a9<n,@>(ik)","~(F,F)","ik(ik)","WM(Z)","aB<R>(ai<ik>)","a0x(Z)","~(ik)","a1i(Z)","WN(Z)","n(ik)","R(m1)","xH(bA<F,m1>)","add(Z,F)","F(iz,iz)","ad5(m1)","v(t1)","by(JI)","a03(Z)","~(d8{bumpWalletRevision:R,cloudRequest:R})","~(n,H,H,H)","H(V)","~(d8)","a0R(Z)","~(Fs)","n(n)","a1j(Z)"])
C.cBH.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cBI(r,w,s.b,v,s.d)
t=s.e
r.b=B.dg(t,u)
v.r=new C.cBE(r)
v.e=new C.cBF(r,w)
v.f=new C.cBG(r,w,t,u)},
$S:0}
C.cBI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iv(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ac(r)
u=B.cs(r)
s=v
q=u
p=B.H4(s,q)
if(p==null)p=new B.jX(s,q==null?B.HU(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:41}
C.cBE.prototype={
$0(){this.a.b.a1(0)
return $.HI()},
$S:1653}
C.cBF.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aax.$0()
this.a.b.a1(0)},
$S:0}
C.cBG.prototype={
$0(){var w,v=this,u=v.b,t=B.dw(0,0,u.gbh8(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=B.cz(new B.bd(u.a-t.a),new C.cBD(w,u,v.d))},
$S:0}
C.cBD.prototype={
$0(){var w=this.c
this.a.b=B.dg(this.b,w)
w.$1(null)},
$S:0}
C.fdY.prototype={
$1(d){var w=this.a
w.m(new C.fdX(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fdX.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.alD,this.b,null,null,v.$ti.k("hw<1>"))},
$S:0}
C.fe_.prototype={
$2(d,e){var w=this.a
w.m(new C.fdV(w,d,e))},
$S:57}
C.fdV.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.alD,null,this.b,this.c,v.$ti.k("hw<1>"))},
$S:0}
C.fdZ.prototype={
$0(){var w=this.a
w.m(new C.fdW(w))},
$S:0}
C.fdW.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.yF,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fRd.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cv},
$S:15}
C.fR5.prototype={
$1(d){return d},
$S:13}
C.fxq.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.z,new B.D(new B.Q(u,0,u,0),B.d("NGMY",w,1,A.eS,w,!1,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afv,w,v,w,w,w,w,w,v)},
$S:158}
C.fxn.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.fxo.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kJ(w,A.z,v.d,new C.fxm(v.e),A.h2,v.c,!0,v.b,null,null,v.a)},
$S:1654}
C.fxm.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.fxp.prototype={
$3(d,e,f){return this.a.$0()},
$S:145}
C.dlk.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dlv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dlN.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlO.prototype={
$1(d){return this.a.Km()},
$S:11}
C.dlD.prototype={
$0(){var w=J.b8(this.b,new C.dlC(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dlC.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlE.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,a9<n,@>>")
v=B.C(new B.N(v,new C.dlB(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dlB.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dlG.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.U(v).k("N<1,a9<n,@>>")
v=B.C(new B.N(v,new C.dlF(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dlF.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.dly.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgf(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arE(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dlw(t))
case 3:if(t.c!=null)t.m(new C.dlx(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:52}
C.dlw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dlx.prototype={
$0(){return this.a.d++},
$S:0}
C.dlz.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dlA.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dlq.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.itS(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aiK(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Km(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dlr.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.iiG(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aiK(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Km(),$async$$0)
case 3:t.J9(A.d.dL(t.y,new C.dlo(s),new C.dlp(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dlo.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dlp.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dls.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dlt.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dlu.prototype={
$0(){return this.a.J9(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dln.prototype={
$0(){return this.a.c6G(this.b)},
$S:0}
C.dlm.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.iul(u,w.b,new C.dll(v,w))},
$S:0}
C.dll.prototype={
$2(d,e){return this.a.ajf(this.b,d,e)},
$S:679}
C.dlM.prototype={
$2(d,e){if(d)return
this.a.aVp()},
$S:128}
C.dlK.prototype={
$2(d,e){var w=this.a
return new B.lg(C.b1Y(w.a.c.a),new C.dlJ(w,this.b,this.c),null,null,x.gH)},
$S:1656}
C.dlJ.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.l(12)
v=B.l(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k7,B.bJF(A.d2,B.W(A.h3,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dlI(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:1657}
C.dlI.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fNv(s.c.a,s.e).eF(new C.dlH())
w=2
return B.b(C.bGY(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dlH.prototype={
$1(d){},
$S:29}
C.dlL.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dZW.prototype={
$0(){var w=this.a
return B.M5(w.a.c.a,new C.dZV(w))},
$S:80}
C.dZV.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dZX.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bh=t.aj()
v.bv()
w.m(new C.dZU())},
$S:0}
C.dZU.prototype={
$0(){},
$S:0}
C.dZY.prototype={
$2(d,e){var w,v=this.a
if(!C.cgf(v.a.c)){if($.haQ.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.haR(this.b,v.x,w)
return!1}C.arE(v.a.c.a)}if(B.M5(v.a.c.a,new C.dZT(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJE()
w=v.a
w.toString
w.hK(new B.d8(A.o.v(1000*Date.now()),v.a.c.a,d,A.kr,A.fw,e,null,null,A.cv,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1658}
C.dZT.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dZZ.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d8(u,s.c.a,d,A.h7,A.fw,e,v,v,A.cv,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.i.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vd(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1659}
C.dle.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlh.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.dli.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlj.prototype={
$1(d){var w=null,v=this.a,u=B.fv(w,w,v.e===d?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f5,B.iu(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dlg(v,d),u),w),1)},
$S:215}
C.dlg.prototype={
$0(){var w=this.a
return w.m(new C.dlf(w,this.b))},
$S:0}
C.dlf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dn6.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dn9.prototype={
$1(d){this.a.cpK()
return null},
$S:11}
C.dna.prototype={
$1(d){return this.a.cG4()},
$S:11}
C.dnb.prototype={
$1(d){this.a.a3K()
return null},
$S:11}
C.dnc.prototype={
$1(d){this.a.akk()
return null},
$S:11}
C.dnd.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c5)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.dn7(v))
w=v.as
if(w!=null)w.a1(0)
v.FJ()
return}v.m(new C.dn8(v))},
$S:11}
C.dn7.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dn8.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dmm.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dmn.prototype={
$0(){return this.a.bI=this.b},
$S:0}
C.dmQ.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dmR.prototype={
$0(){},
$S:0}
C.dmC.prototype={
$0(){var w=this.b
w.c5=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dmD.prototype={
$0(){var w=this.a
w.c5=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dmE.prototype={
$0(){var w=this.b
w.c5=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dmF.prototype={
$0(){this.b.c5=!1},
$S:0}
C.dmG.prototype={
$0(){},
$S:0}
C.dlP.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dml.prototype={
$0(){var w=this.a
w.at=this.b
w.b8A()},
$S:0}
C.dmS.prototype={
$0(){},
$S:0}
C.dn0.prototype={
$0(){},
$S:0}
C.dmP.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dmO(w))},
$S:0}
C.dmO.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dmj.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dmk.prototype={
$0(){},
$S:0}
C.dmW.prototype={
$1(d){return d==null},
$S:268}
C.dmX.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dmY.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dlQ.prototype={
$1(d){return d==null},
$S:268}
C.dlR.prototype={
$0(){return this.a.bh++},
$S:0}
C.dlS.prototype={
$0(){},
$S:0}
C.dmv.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dmw.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nc.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dmx.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dmu(w))},
$S:12}
C.dmu.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dmH.prototype={
$0(){return this.a.y1++},
$S:0}
C.dmI.prototype={
$0(){},
$S:0}
C.dmJ.prototype={
$0(){return this.a.y2++},
$S:0}
C.dmK.prototype={
$0(){},
$S:0}
C.dmL.prototype={
$0(){return this.a.bd++},
$S:0}
C.dmM.prototype={
$0(){},
$S:0}
C.dmV.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dmy.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dmz.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dmA.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dmB.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dmZ.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dn_.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dlT.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dlU.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dlV.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dlW.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dmT.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dmU.prototype={
$0(){var w,v=this.a;++v.x2
v.aR2()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dmt.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dmN.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dmr.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dms.prototype={
$2(d,e){return d+e.length},
$S:233}
C.dn1.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.dn2.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dn3.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dn5.prototype={
$1(d){var w=this.a,v=w.Pm(),u=v<=0?0:A.i.D(w.AM()/v,0,1),t=w.a.x,s=t*1.46
return new C.Oq(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dn4.prototype={
$1(d){return d.bW(0.85)},
$S:161}
C.dmq.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nc.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j2,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iv(!0,w,w,A.y,new B.hK(v,6,6,1,r),new C.dmp(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
$S:152}
C.dmp.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nc.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nc.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.aue:D.c95,l=B.l(10),k=B.l(10)
if(p)w=m
else if(o)w=m
else w=n?D.aue:D.au7
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ab(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cT(s,B.as(n?B.W(D.cDU[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.m(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.o(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dmo(r,e),s,s,s,s,s,s,s)},
$S:193}
C.dmo.prototype={
$0(){return this.a.cp4(this.b)},
$S:0}
C.dm8.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bi.l()>>>16&255,A.bi.l()>>>8&255,A.bi.l()&255),r=B.l(10),q=B.l(10),p=B.l(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aG(!1,A.a3,!0,r,B.aM(!1,q,!0,B.p(A.z,B.d(t?"":u,w,w,w,w,w,w,D.aWD,w,w,w),A.f,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dm7(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:670}
C.dm7.prototype={
$0(){return this.a.cFk(this.b)},
$S:0}
C.dm9.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aG(!1,A.a3,!0,B.l(10),B.aM(!1,B.l(10),!0,B.p(A.z,B.d(u,w,w,w,w,w,w,D.aWD,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dm6(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:670}
C.dm6.prototype={
$0(){return this.a.cFj(this.b)},
$S:0}
C.dma.prototype={
$1(d){return this.a.m(new C.dm5())},
$S:31}
C.dm5.prototype={
$0(){},
$S:0}
C.dmb.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aiX(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pA()
if(u.ghR()&&D.nc.q(0,u.a.e)){u.a1Z()
u.nl(!0)}else{v=A.d.cF(u.cy,0,new C.dm3())
t=u.dx
if(t>=v)u.uy("All 5 sentences perfect \u2014 full payout!")
else u.F8(t/v,t,v)}}else{if(u.ghR()&&D.nc.q(0,u.a.e))u.a1Z()
u.m(new C.dm4(u))}},
$S:0}
C.dm3.prototype={
$2(d,e){return d+e.length},
$S:233}
C.dm4.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.cf)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dmc.prototype={
$1(d){var w=null,v=B.fv(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.cp,w,w,w,w,w,w,w)
return new B.D(A.cw,new B.a5(1/0,w,B.iu(B.d(d,w,w,w,w,w,w,X.aWw,w,w,w),new C.dm2(this.a,d),v),w),w)},
$S:140}
C.dm2.prototype={
$0(){return this.a.b7X(this.b)},
$S:0}
C.dmd.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pY,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iv(!0,v,v,A.y,new B.hK(3,4,4,1,u),new C.dm1(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
$S:152}
C.dm1.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5K(e),p=r===0
if(p)w=A.L
else w=q?A.bi:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.l(10)
s=p?t:new C.dlY(s,e)
u=B.l(10)
p=p?"":""+r
return B.aG(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:79}
C.dlY.prototype={
$0(){return this.a.cFi(this.b)},
$S:0}
C.dme.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dm0(q,d)
p=B.l(16)
if(o)w=D.a6n[d]
else{w=D.a6n[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.l(16)
u=o?B.a0(A.i.V(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6n[d]
t=B.a([new B.ab(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cT(r,r,r,r,A.b0,new B.o(w,r,u,v,t,r,A.n),T.Cw,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1663}
C.dm0.prototype={
$0(){return this.a.cFl(this.b)},
$S:0}
C.dmf.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pY,t,t,t)
w=B.d("Move "+r.aAG()+"/"+C.hhy(),t,t,t,t,t,t,A.Fb,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.m(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iv(!0,t,t,A.y,new B.hK(3,6,6,1,s),new C.dm_(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:152}
C.dm_.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.l(10),s=B.l(10),r=u?A.bi:D.blX,q=u?A.ew:D.bws
return B.aG(!1,A.a3,!0,w,B.aM(!1,t,!0,B.p(w,w,A.f,w,w,new B.o(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dlX(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.dlX.prototype={
$0(){return this.a.cFf(this.b)},
$S:0}
C.dmg.prototype={
$0(){return this.a.b7X(this.b[this.c])},
$S:0}
C.dmh.prototype={
$0(){return this.a.m(new C.dlZ())},
$S:0}
C.dlZ.prototype={
$0(){},
$S:0}
C.dmi.prototype={
$2(d,e){this.a.a0I(d,e)
return null},
$S:z+21}
C.dqG.prototype={
$1(d){return this.a.cpz(this.b,d)},
$S:1664}
C.dqF.prototype={
$0(){var w=this
return w.a.a.cYR(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cNH.prototype={
$1(d){var w=this.a
w.a2e()
w.uH()},
$S:8}
C.cN1.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cMS.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cMT.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNb.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cN8.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cN9.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNa.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cN3.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cN2(w))},
$S:0}
C.cN2.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cMU.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cN6.prototype={
$1(d){var w=this.a
return new C.WM(w.fx,new C.cN5(w),w.a.f.r,null)},
$S:z+37}
C.cN5.prototype={
$1(d){return this.bnH(d)},
bnH(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chf(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cN4(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cN4.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNu.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cNo.prototype={
$1(d){this.a.uH()
return null},
$S:11}
C.cNr.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ar(v.gaYo().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uH()
return}v.m(new C.cNq())},
$S:11}
C.cNq.prototype={
$0(){},
$S:0}
C.cNn.prototype={
$1(d){this.a.FR()
return null},
$S:11}
C.cNp.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cNm.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cMZ.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bj(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h2(0,0),0,!1)
v=J.t(e,"at")
w=B.bj(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h2(0,0),0,!1):w)},
$S:43}
C.cN_.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cN0.prototype={
$0(){var w=this.a
if(w.c!=null)w.a2W(!0)},
$S:12}
C.cMX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cMY.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.UP(this.b)},
$S:8}
C.cNe.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd5(v).Q
v.toString
if(this.b)w.iu(v)
else w.mv(v,A.e6,A.kV)},
$S:8}
C.cN7.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNf.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNg.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9r()
w.r.bP(0,A.cf)
w.at=!0},
$S:0}
C.cNh.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cNi.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cNj.prototype={
$0(){var w,v=this.b,u=B.T(x.N,x.z)
J.aK(u,"role","ai")
J.aK(u,"text",this.c)
J.aK(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b8(w.b,v.gcou(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
J.aK(u,"phoneActions",w)}v.f.push(u)
v.b9r()},
$S:0}
C.cNk.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cNl.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNc.prototype={
$1(d){return this.bnI(d)},
bnI(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.as0(q,new C.rV("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.at9()
case 4:k.c.L(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:375}
C.cNt.prototype={
$1(d){return this.bnJ(d)},
bnJ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.T(B.b2(null,null,null,A.dn,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:375}
C.cNd.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd5(v).Q
v.toString
w.iu(v)},
$S:8}
C.cNG.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.acJ(v-1)},
$S:0}
C.cNz.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.cNC.prototype={
$1(d){var w=this.a
w.m(new C.cNw(w,d))
if(d===0)w.a2W(!0)},
$S:31}
C.cNw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNA.prototype={
$2$size(d,e){return C.hfE(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2106}
C.cNB.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.htg(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.asS(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cNx(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.arZ(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uH(),$async$$0)
case 15:p.m(new C.cNy(p))
p.acJ(0)
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
C.cNx.prototype={
$2(d,e){return this.bnK(d,e)},
bnK(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3u(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:131}
C.cNy.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNE.prototype={
$2(d,e){return A.ae},
$S:38}
C.cND.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6u:D.a5K)[e],w,w,w,w,w,w,A.q0,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cNv(v,e)
return B.n8(w,t,u,w,v,w,w,new B.ay(s,1,A.r,-1),w)},
$S:509}
C.cNv.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6u:D.a5K
w.r.sb3(0,v[this.b])
w.nk()
return null},
$S:0}
C.cNF.prototype={
$1(d){var w=this.a
return w.at?null:w.nk()},
$S:2}
C.cMV.prototype={
$0(){return this.a.acJ(0)},
$S:0}
C.cNs.prototype={
$0(){return this.a.acJ(this.b)},
$S:0}
C.cMW.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.c2E,A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.m(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a0P,B.x(B.a([u,A.af,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.m(v,v,t?A.aF:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),v,v,v)}if(e<s)return u.bKa(t[e],w.c)
return u.aRG(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c4l.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.i.M(d)
return new B.V(B.h2(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bj(J.k(d))
return v==null?null:v.bU()},
$S:345}
C.c4k.prototype={
$1(d){B.aJ(d)
return(d==null?0:d)/100},
$S:779}
C.c4n.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bj(J.k(d))
w=w==null?null:w.bU()}return w},
$S:345}
C.c4m.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.a1(d,x.N,x.z)
try{v=J.t(w,"id")
v=J.k(v==null?"":v)
u=J.t(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aJ(J.t(w,"amount"))
if(t==null)t=0
s=J.t(w,"type")
s=B.a5R(A.a7j,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a5R(A.a5I,J.k(r==null?"system":r))
q=B.aV(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a5R(A.II,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d8(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:749}
C.dHd.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dHe.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dH4.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dH2.prototype={
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
return B.b(C.h9R(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pC(o.a.c,!1),$async$$0)
case 4:o.li(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abb(),$async$$0)
case 3:q=e
if(q==null){r.li("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).ce(B.ee(new C.dHb(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pC(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHb.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0x(w.b,w.a,u,v,null)},
$S:z+39}
C.dH1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hZA(q)?3:4
break
case 3:w=5
return B.b(t.a.Fn(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_v(q,s.a.c),$async$$0)
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
case 9:s.li(C.c4p(s.a.c))
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
return B.b(s.aT0(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dH0.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bp(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dH3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aeG(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hq2(q)
if(s==null){r.li("Could not read that backup file.")
w=1
break}if(!C.c4o(s,r.a.c,null)){r.li(C.c4p(r.a.c))
w=1
break}w=4
return B.b(r.bMt(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHa.prototype={
$1(d){var w=null,v=new B.au(A.aw,$.ax()),u=B.P(d).ax.a===A.I,t=u?A.iJ:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.m(w,w,u?A.ab:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bz(w,new B.b6(4,B.l(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.dH8(d),w,w),B.bI(D.fLI,w,new C.dH9(d,v),B.bo(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h_R,w)},
$S:18}
C.dH8.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dH9.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dH5.prototype={
$1(d){return D.hEr},
$S:z+12}
C.dH6.prototype={
$0(){return this.a.Fo(A.a.i(this.b))},
$S:1}
C.dH7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_v(t.b,r.a.c),$async$$0)
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
case 7:r.li(C.c4p(r.a.c))
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
return B.b(r.aT0(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dHf.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHj.prototype={
$1(d){this.a.RQ()
return null},
$S:11}
C.dHg.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dHh.prototype={
$0(){var w=null,v=this.a
B.fI(new B.fx(v.gayK()))
this.b.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gayK()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dHi.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dHk.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a_(s,"NGMYSNAP1|")||A.a.a_(s,"NGMYLOCALSYNC1|")||A.a.a_(s,"NGMYLOCALLIVE1|")||A.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:200}
C.fC1.prototype={
$1(d){return D.hAX},
$S:z+13}
C.fDe.prototype={
$1(d){return new C.afT(this.a,this.b,this.c,null)},
$S:z+14}
C.f7t.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f7u.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dgc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.dg9.prototype={
$2(d,e){return e.amz(e.a.toUpperCase())},
$S:1666}
C.dga.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dgb.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c57.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aU(D.dwF,A.a.gkg(v))},
$S:4}
C.fNp.prototype={
$1(d){return d.a===this.a},
$S:1667}
C.fNq.prototype={
$0(){return A.d.gH(A.DU)},
$S:1668}
C.dNH.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dNG(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8s("Time's up")},
$S:11}
C.dNG.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dNy.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dND.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dNA(w,d,e))},
$S:239}
C.dNA.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dNE.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dNz(w))
w.czt(!0)},
$S:0}
C.dNz.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dNF.prototype={
$1(d){this.a.b8s(d)
return null},
$S:2}
C.dNB.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.dNC.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.cdo.prototype={
$1(d){return D.dUa},
$S:z+15}
C.cdn.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fE2.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=B.aJ(u.h(d,e)),s=t==null?v:A.i.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=B.aJ(u.h(d,f))
w=t==null?v:A.i.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=B.aJ(u.h(d,"outcome"))
return u==null?v:A.i.M(u)},
$S:1669}
C.fE3.prototype={
$2(d,e){var w=B.aJ(J.t(d,e))
w=w==null?null:A.i.M(w)
return w==null?0:w},
$S:678}
C.fE4.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:233}
C.fUy.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hBQ(w,v):C.hg_(w,v)
if(u===3)++w.f
C.ahp(w,this.c,u)
return u},
$S:1670}
C.fUA.prototype={
$0(){return C.hBQ(this.a,this.b)},
$S:90}
C.fUz.prototype={
$0(){return C.hg_(this.a,this.b)},
$S:90}
C.dGQ.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dGP(w))},
$S:0}
C.dGP.prototype={
$0(){this.a.r=1+A.o.F(B.FN(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dGR.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.i.bg(u*10)
if(w!==v.w)v.m(new C.dGO(v,w))}},
$S:0}
C.dGO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cfP.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.dx(A.dC,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),1)},
$S:1671}
C.cfO.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.i.ad(e,2),w,w,w,w,w,w,A.mC,w,w,w)},
$S:403}
C.cgg.prototype={
$1(d){return new C.Oy(this.a,this.b,!1,null,null)},
$S:z+16}
C.e6w.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.l(e?0:30)
e=e?g:B.K(A.b7.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ab(2,A.G,A.b7.j(0.35),A.J,36),new B.ab(0,A.G,A.bE.j(0.175),A.J,24)],x.V)
v=B.l(f.a.e?0:30)
u=x.O
t=B.ao(g,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.bS(A.z,0.5,A.x,g,0,B.a([A.b9.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.bS(A.z,0.5,A.x,g,0,B.a([A.bE.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.h:A.N
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.p(g,D.bYK,A.f,g,g,new B.o(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.G,A.b7.j(0.55),A.cz,18)],n),E.ve,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.ok(A.jV,D.fYn,new C.e6s()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.m(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cD,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.bX.j(0.12)
k=B.l(18)
j=B.K(A.bX.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.W(D.bSH,A.bX.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.m(g,g,A.bX.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.h,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.m(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e6t(),B.U(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.p(g,B.x(i,A.E,g,A.e,A.h,0,A.p),A.f,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.l(18)
k=B.K(A.b7.j(0.35),A.r,1)
o.push(B.p(g,B.x(B.a([f.azy(A.ho,"Unlimited games with an active plan",A.b9),A.P,f.azy(A.ke,"Weekday check-ins grow your balance",A.b7),A.P,f.azy(A.mk,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.h,0,A.p),A.f,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bH,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bM(new B.o(g,g,g,B.l(16),B.a([new B.ab(0,A.G,A.bE.j(0.45),A.cz,16)],n),E.ve,A.n),A.bk,B.dh(D.c1f,g,D.fTK,new C.e6u(f,a0),B.bo(A.L,g,g,g,A.c,A.KF,g,A.L,new B.b9(B.l(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bO(!1,B.d(n,g,g,g,g,g,g,B.m(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e6v(f,a0),g,g))
if(f.a.e)o.push(A.b3)
h=B.p(g,B.bu(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.Q(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.o(g,g,e,d,w,D.cc_,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eG(g,A.L,h,g,g,g,Ai.a1h,g,A.d7,g,g,g)},
$S:669}
C.e6s.prototype={
$1(d){return D.caV.aD(0,d)},
$S:71}
C.e6t.prototype={
$1(d){var w=null
return new B.D(A.eO,B.A(B.a([B.W(A2.a3g,A.bX.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$S:140}
C.e6u.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e6v.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fPM.prototype={
$1(d){if(d.gn0())this.a.a=d
return d.gn0()},
$S:563}
C.fPz.prototype={
$1(d){$.aU.x1$.push(new C.fPy(this.a))},
$S:8}
C.fPy.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fAl.prototype={
$1(d){return C.hBY(this.a,this.b+1)},
$S:8}
C.fR8.prototype={
$2(d,e){var w=B.aE(d,A.bZ,x.w).w.a
return new B.a5(w.a,w.b,B.c4(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:135}
C.cgu.prototype={
$1(d){return d.r===this.a},
$S:258}
C.cgv.prototype={
$1(d){var w=$.aTy(),v=w.a
w.sp(0,v+1)
return v},
$S:1673}
C.cgw.prototype={
$1(d){},
$S:29}
C.cgt.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:258}
C.cgs.prototype={
$1(d){return d.f.ca(this.a)},
$S:258}
C.fx5.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.h2z.prototype={
$1(d){return C.a8A(this.a)},
$S:107}
C.h2A.prototype={
$1(d){var w=$.aTy()
w.sp(0,w.a+1)},
$S:28}
C.h2B.prototype={
$1(d){},
$S:29}
C.h2C.prototype={
$1(d){return new B.k7($.aTy(),new C.h2y(this.a,this.b),null,null,x.am)},
$S:1674}
C.h2y.prototype={
$3(d,e,f){var w=this.b
return new B.lg(C.arK(this.a,!1),new C.h2x(w),w,null,x.gv)},
$S:1675}
C.h2x.prototype={
$2(d,e){var w=e.b
return new C.aeK(w==null?this.a:w,null)},
$S:z+17}
C.e6z.prototype={
$1(d){return d.c},
$S:258}
C.e6A.prototype={
$1(d){return d.gbkg()},
$S:1676}
C.e6B.prototype={
$2(d,e){return d+e},
$S:85}
C.e6C.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e6E.prototype={
$2(d,e){return A.P},
$S:38}
C.e6D.prototype={
$2(d,e){return new C.aeJ(J.t(this.a.c,e),null)},
$S:z+18}
C.e6y.prototype={
$1(d){return d==null?"\u2026":C.bDj(d)},
$S:1677}
C.h2F.prototype={
$3(d,e,f){var w=this
return B.qs(new C.aCF(w.a,w.b,w.c,w.d,new C.h2D(d,w.e),new C.h2E(d,w.f),null))},
$C:"$3",
$R:3,
$S:88}
C.h2D.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hFq(this.b)},
$S:0}
C.h2E.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hFq(this.b)},
$S:0}
C.dnf.prototype={
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
A.d.u(w,new B.N(t,new C.dne(),B.U(t).k("N<1,v>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aE(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bi,A.ep,A.eb],r):B.a([A.aA,A.er,A.eq],r)
p=B.l(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.G,(h.a.c?A.dK:A.dO).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dr()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A0.ajM,A.up],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.p(i,D.bf8,A.f,i,i,new B.o(i,i,i,i,B.a([new B.ab(4,A.G,A.d2.j(0.6),A.J,24),new B.ab(0,A.G,A.w.j(0.3),A.dp,12)],n),new B.bS(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c4L)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.Wn,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.l(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fNv,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.fDk,A.K,i,i),A.f,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Ok,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fGl,A.K,i,i)],g))
l.push(A.e3)
r=B.E(B.dW(D.fKX,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cp,i,i,D.b6o,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bI(F.aY1,i,n,B.bo(A.c,i,i,i,h.c?A.ep:A.er,i,A.cp,i,i,i,i,i)),1)],g),A.l,i,A.e,A.h,0,i,i))
w.push(B.e4(A.z,B.p(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.o(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.anT,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:123}
C.dne.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d3(B.eI(A.z,d.d,B.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cic.prototype={
$2(d,e){var w=null,v=this.a,u=C.hZ_(B.M5(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1678}
C.cib.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.c5E.prototype={
$0(){},
$S:0}
C.fw1.prototype={
$1(d){return A.o.v(d)},
$S:76}
C.e_1.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e_2.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e_3.prototype={
$0(){var w=this.a
return w.w=D.T2[w.d.aw(5)]},
$S:0}
C.e_4.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e_5.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e_6.prototype={
$0(){var w=this.a
return w.m(new C.e_0(w))},
$S:0}
C.e_0.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_7.prototype={
$0(){var w=this.a
return w.m(new C.e__(w))},
$S:0}
C.e__.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e_a.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.e_b.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bi:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.l(10)
t=t.y?u:new C.e_9(t,d)
w=B.l(10)
v=A.i.ad(d,0)
return B.E(new B.D(A.j9,B.aG(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.m(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:1679}
C.e_9.prototype={
$0(){var w=this.a
return w.m(new C.e_8(w,this.b))},
$S:0}
C.e_8.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.cf)},
$S:0}
C.e6K.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cS.gcs().aN(this.c)},
$S:0}
C.e6L.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.e6G.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.l(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f0.j(0.5):A.L,A.r,1),q=B.W(e,u?D.f0:A.aF,w,w,w,20)
return B.E(B.az(w,B.cT(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.m(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b8,A.h,0,w,w),w,w,A.b0,new B.o(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e6I(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:1680}
C.e6I.prototype={
$0(){var w=this.a
return w.m(new C.e6H(w,this.b))},
$S:0}
C.e6H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6J.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JD(this.b,v)},
$S:0}
C.e6F.prototype={
$0(){var w=this.a
return w.JD(w.gau2(),"Code")},
$S:0}
C.ch_.prototype={
$1(d){return C.hVa(B.a1(d,x.N,x.z))},
$S:z+20}
C.ch0.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.cgX.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.cgY.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.cgZ.prototype={
$1(d){return d.aj()},
$S:z+23}
C.ch1.prototype={
$1(d){var w=d.c
return!w.d3(this.a.bS(-36e8))&&!w.ca(this.b)},
$S:z+7}
C.c8M.prototype={
$1(d){return C.hVb(B.a1(d,x.N,x.z))},
$S:z+24}
C.c8N.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c8K.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c8L.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c8P.prototype={
$1(d){var w=d.b
return!w.d3(this.a)&&!w.ca(this.b)},
$S:z+27}
C.cha.prototype={
$1(d){return d.aj()},
$S:z+28}
C.ch9.prototype={
$1(d){return C.hsl(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.ch8.prototype={
$1(d){return d.aj()},
$S:z+30}
C.ch7.prototype={
$1(d){return C.hYD(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chc.prototype={
$1(d){return C.hYC(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chd.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.che.prototype={
$1(d){return d.aj()},
$S:z+34}
C.eaP.prototype={
$1(d){return d.bfF(B.bp(d.e,!0,x.u))},
$S:z+36}
C.eaQ.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.eaJ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eaK.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eas.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.eat.prototype={
$1(d){return new C.QB(this.a,null)},
$S:z+9}
C.eau.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.ear(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JN()}},
$S:0}
C.ear.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.eaG.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.eaH.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.iou(v,w[0],w[3])
t.JN()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.eaI.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.iu(v)}},
$S:8}
C.eaA.prototype={
$1(d){return new C.QB(this.a,null)},
$S:z+9}
C.eaB.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eaz.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.eaF.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.c9(t.d,u.a,v)
t.JN()},
$S:0}
C.eaE.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1j(u[w],new C.eaD(v,w),null)},
$S:z+59}
C.eaD.prototype={
$1(d){var w=this.a
return w.m(new C.eaC(w,this.b,d))},
$S:z+40}
C.eaC.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eaw.prototype={
$0(){var w=this.a
return w.m(new C.eav(w))},
$S:0}
C.eav.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eax.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eO,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.m(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cD,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:116}
C.eay.prototype={
$1(d){return this.a.a2B()},
$S:2}
C.eaO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.ul:A.c
u=B.l(16)
t=B.l(16)
s=l?A.aL:A.bm
r=w.d
q=B.b1(r).j(0.15)
p=B.l(12)
q=B.p(n,B.W(A.aqG,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bU,n,n,n)
p=B.b1(r).j(0.12)
o=B.l(8)
o=B.p(n,B.W(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hz,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.h,0,n,n)
p=w.e.length
return new B.D(A.da,B.aG(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new H.awz(q,e,!0,n),n,n,n,n,new C.eaL(m,e),!1,n,n,new B.b9(t,new B.ay(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CD(n,n,n,new C.eaM(),A.J,new C.eaN(m,e),A.cq,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bf(w.a,x.W))},
$S:116}
C.eaN.prototype={
$1(d){var w=this
if(d==="edit")w.a.abH(w.b)
if(d==="questions")w.a.ZS(w.b)
if(d==="delete")w.a.bPq(w.b)},
$S:2}
C.eaM.prototype={
$1(d){return D.cZQ},
$S:144}
C.eaL.prototype={
$0(){return this.a.ZS(this.b)},
$S:0}
C.cWr.prototype={
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
return B.aM(!1,s,!0,B.p(s,B.W(d,B.b1(t),s,s,s,s),A.f,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cWq(r,d),s,s,s,s,s,s,s)},
$S:1681}
C.cWq.prototype={
$0(){var w=this.a
return w.m(new C.cWo(w,this.b))},
$S:0}
C.cWo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWs.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.az(w,B.hg(u,w,t===d?D.c22:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cWp(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:406}
C.cWp.prototype={
$0(){var w=this.a
return w.m(new C.cWn(w,this.b))},
$S:0}
C.cWn.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cWt.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cWu.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cQg(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f2n.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f2o.prototype={
$1(d){return new C.a1i(this.a,null)},
$S:z+41}
C.f2u.prototype={
$2(d,e){return A.P},
$S:38}
C.f2t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.ul:A.c
u=B.l(14)
t=B.l(14)
s=l?A.aL:A.bm
r=w.d
if(r!=null&&r.length!==0){q=B.l(8)
r=B.bu(q,K.aSb(n,A.c_,36,A.qN,l?A.bP:A.an,r,48),A.aq)}else r=B.W(D.a3_,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.m(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aG(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f2r(m,w,e),!1,n,n,new B.b9(t,new B.ay(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.m(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aI(n,n,n,n,D.c0j,n,n,n,new C.f2s(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:79}
C.f2s.prototype={
$0(){var w=this.a
w.m(new C.f2p(w,this.b))
w.azB()},
$S:0}
C.f2p.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f2r.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b3K(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f2q(t,u.c,s))
t.azB()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f2q.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f2j.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f2h.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WN(w,"Answer Document",null)},
$S:z+42}
C.f2i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f2l.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).N(new C.iz(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f2m.prototype={
$1(d){var w=this.a
return w.m(new C.f2k(w,d))},
$S:9}
C.f2k.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ch4.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fRx.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebp.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.eb5.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.m1("image","",this.b,null))},
$S:0}
C.eba.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.m1("video","","data:video/mp4;base64,"+A.cS.gcs().aN(this.b),null))},
$S:0}
C.eb8.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c6E,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c6D,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.eb6(d),w,w),B.bI(D.fXQ,w,new C.eb7(d),w)],v),w,w,w,u,w,w,w,w,D.fK9,w)},
$S:18}
C.eb6.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eb7.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eb9.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.m1("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.eb1.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eb2.prototype={
$1(d){return d.length!==0},
$S:3}
C.eb3.prototype={
$1(d){return A.a.i(A.a.ek(d,B.ag("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.eb4.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebf.prototype={
$0(){var w=this.a.bIE()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ebg.prototype={
$0(){return this.a.azC("**","**")},
$S:0}
C.ebh.prototype={
$0(){return this.a.azC("*","*")},
$S:0}
C.ebi.prototype={
$0(){return this.a.azC("__","__")},
$S:0}
C.ebj.prototype={
$0(){return this.a.b1P("## Section title")},
$S:0}
C.ebk.prototype={
$0(){return this.a.b1P("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ebl.prototype={
$0(){},
$S:0}
C.ebm.prototype={
$0(){var w=this.a
w.m(new C.ebe(w))},
$S:0}
C.ebe.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dXC)},
$S:0}
C.ebn.prototype={
$0(){var w=this.a
w.m(new C.ebd(w))},
$S:0}
C.ebd.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dXD)},
$S:0}
C.ebo.prototype={
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
return B.E8(v,w,A.at0,t,v,new C.ebc(this.a,d),v)},
$S:z+45}
C.ebc.prototype={
$0(){var w=this.a
return w.m(new C.ebb(w,this.b))},
$S:0}
C.ebb.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.eaZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b1N},
$S:0}
C.eb_.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hBV},
$S:0}
C.eaR.prototype={
$0(){var w=this.a
w.d=D.b1M
w.f=w.e=null},
$S:0}
C.eaS.prototype={
$0(){var w=this.a
w.d=D.b1N
w.f=null},
$S:0}
C.eb0.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.eaU.prototype={
$2(d,e){var w=this.a,v=w.gb9s()[e]
return new C.add(v,this.b,new C.eaT(w,v),null)},
$S:z+46}
C.eaT.prototype={
$0(){return this.a.cdz(this.b.a)},
$S:0}
C.eaW.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.eaY.prototype={
$2(d,e){return A.T},
$S:38}
C.eaX.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.ul:A.c,p=B.l(16),o=B.l(16),n=B.l(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ab(0,A.G,A.w.j(r?0.28:0.06),A.dL,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.l(10)
v=B.l(10)
k.push(B.bu(w,K.aSb(v,A.c_,52,D.a3_,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.l(12)
k.push(B.p(t,B.W(D.a3_,B.b1(j),t,t,t,24),A.f,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bb)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.m(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.W(A.eI,r?A.bP:A.an,t,t,t,22))
return B.aG(!1,A.a3,!0,p,B.aM(!1,o,!0,B.p(t,B.A(k,A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.eaV(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:79}
C.eaV.prototype={
$0(){return this.a.cky(this.b)},
$S:0}
C.ch6.prototype={
$1(d){return new C.ad5(d,this.a,null)},
$S:z+48}
C.cPW.prototype={
$0(){var w=this.a.c,v=w.c,u=B.on(v==null?w.b:v)
if(u!=null)B.iQ(u,A.fo,null)},
$S:0}
C.cPX.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cPY.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nE,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.m(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.h,0,w,w),w)},
$S:140}
C.drz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.drB.prototype={
$0(){return this.a.m(new C.drA(this.b))},
$S:0}
C.drA.prototype={
$0(){var w=this.a
return w.a.f?w.hi(0):w.qv(0)},
$S:0}
C.fvK.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ebD.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.El)w.z=v
else w.Q=v},
$S:0}
C.ebu.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd5(v).Q
v.toString
w.mv(v,A.cj,A.eU)},
$S:8}
C.ebw.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:97}
C.ebx.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.cf)
w.r=!0},
$S:0}
C.eby.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ebz.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:149}
C.ebA.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ebB.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ebC.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ebv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.na(l,A.bE.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bS,B.A(B.a([new B.a5(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.m(l,l,this.b?A.aF:A.dZ,l,l,l,l,l,l,l,l,12,A.cJ,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.h,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aE(k,A.bZ,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ab(0,A.G,(u?A.bE:A.aD).j(0.22),A.i3,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bm:A.bp
n=u?13.5:15
m=u?A.bq:A.cJ
return new B.bK(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.m(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cD,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.be(A.iq,A.iq,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kA,A.jr,l,l,l),l)},
$S:42}
C.ebK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([D.ahY,A.a_,A.ol],t):B.a([A.qk,A.qi,A.qj],t)
w=B.a([new B.ab(-4,A.G,A.aD.j(0.35+w*0.25),A.dp,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dr()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fA(A.z,B.p(o,D.bXM,A.f,o,o,new B.o(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eER,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.ok(A.jV,D.h1B,new C.ebH())
p=x.p
m=B.a([B.A(B.a([q,A.bb,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.m(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.h,0,A.p),1)],p),A.l,o,A.e,A.h,0,o,o),A.af,B.A(B.a([n.axL(D.El,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.axL(D.aM2,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.axL(D.Em,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.h,0,o,o)],p)
if(n.x!==D.Em){t=B.a([A.P,n.cDT(u)],p)
if(n.w){q=n.x===D.El?D.a7e:D.a6i
p=B.U(q).k("N<1,v>")
q=B.C(new B.N(q,new C.ebI(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.bZ(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bE.j(0.22),A.aD.j(0.12)],t)
q=B.l(12)
p=B.K(A.bE.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.m(o,o,u?A.ix:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.o(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bU,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.C(new B.N(D.doP,new C.ebJ(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.h,0,o,o))
return B.p(o,B.x(m,A.al,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.n),o,o,o,I.amL,I.amW,o,o,o)},
$S:81}
C.ebH.prototype={
$1(d){return D.cbp.aD(0,d)},
$S:71}
C.ebI.prototype={
$1(d){return this.a.cDU(d,this.b)},
$S:z+49}
C.ebJ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aM4?6:0,m=o?5:0,l=B.l(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.l(12)
p=p.r?q:new C.ebG(p,d)
s=C.i_8(d)
if(o)r=A.c
else r=v?A.ab:A.bp
r=B.d(s,q,q,q,q,q,q,B.m(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i_9(d)
if(o)v=A.ab
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.Q(0,0,n,0),B.aG(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(O.Ol,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.m(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.ebG.prototype={
$0(){var w=this.a
return w.m(new C.ebF(w,this.b))},
$S:0}
C.ebF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ebM.prototype={
$0(){var w=this.a
return w.m(new C.ebL(w))},
$S:0}
C.ebL.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ebt.prototype={
$0(){var w=this.a
return w.m(new C.ebs(w,this.b))},
$S:0}
C.ebs.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Em
if(v===D.aM2&&w.Q==null)w.Q=A.d.gH(D.a6i).a},
$S:0}
C.ebN.prototype={
$0(){return this.a.czj(this.b.a)},
$S:0}
C.ebE.prototype={
$0(){return this.a.JE(this.b)},
$S:0}
C.ebq.prototype={
$1(d){return this.a.b1Q()},
$S:2}
C.ebr.prototype={
$0(){return this.a.b1Q()},
$S:0}
C.h3u.prototype={
$1(d){var w=this
return new C.a03(w.a,w.b,w.c,new C.h3t(w.d),null)},
$S:z+51}
C.h3t.prototype={
$0(){return J.lO(this.a.bm())},
$S:0}
C.doU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bky()},
$S:28}
C.doV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aE(m,A.bZ,u).w
s=Math.cos(v)
u=B.aE(m,A.bZ,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e9:A.ho
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d3(B.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:350}
C.dp_.prototype={
$0(){},
$S:0}
C.doZ.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nk.az(0,A.i.D(w,0,1))
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
C.doW.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.p(t,t,A.f,t,t,new B.o(t,t,t,t,B.a([new B.ab(6,A.G,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.na(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.m(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cU(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:123}
C.doX.prototype={
$1(d){return D.cbt.aD(0,d)},
$S:71}
C.doY.prototype={
$0(){var w=this.a
w.a.bky()
w.a.e.$0()},
$S:0}
C.cj5.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fT)if(d.x===A.dF){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cji.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eq0.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.eqH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QG()},
$S:8}
C.eqI.prototype={
$1(d){var w=$.aU.p2$
if(w===A.u8||w===A.u9)return
this.a.Fi()},
$S:11}
C.eqJ.prototype={
$1(d){this.a.cG3()},
$S:11}
C.eqp.prototype={
$0(){this.a.K8(this.b.d,!1)},
$S:0}
C.eqq.prototype={
$0(){},
$S:0}
C.eqr.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.eqs.prototype={
$0(){},
$S:0}
C.eqt.prototype={
$1(d){return d.a===this.a},
$S:15}
C.equ.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.eqv.prototype={
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
C.eqk.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bp(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bp(v[1],!0,x.N)
w.PT()
w.a9O()},
$S:0}
C.eq1.prototype={
$0(){this.b.K8(this.c.d+this.a.a,!1)},
$S:0}
C.eql.prototype={
$1(d){var w=d.d
return(w===A.fT||w===A.f2)&&d.x===A.dF},
$S:15}
C.eqm.prototype={
$1(d){return d.a},
$S:177}
C.eqn.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eqo.prototype={
$0(){},
$S:0}
C.eq5.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bp(v[0],!0,x.N)},
$S:0}
C.eq6.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.eqe.prototype={
$0(){},
$S:0}
C.eqb.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.eqc.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqd.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eqf.prototype={
$0(){return this.a.z=!0},
$S:0}
C.eqg.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w1(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.eqh.prototype={
$0(){return this.a.z=!1},
$S:0}
C.eqj.prototype={
$0(){var w=this.a
return w.m(new C.eqi(w))},
$S:0}
C.eqi.prototype={
$0(){return this.a.y=1},
$S:0}
C.eq7.prototype={
$0(){return this.a.y=1},
$S:0}
C.eq8.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.eqz.prototype={
$1(d){return d.a.length===0},
$S:15}
C.eqA.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.eqE.prototype={
$0(){var w=this.a
return w.m(new C.eqx(w))},
$S:0}
C.eqx.prototype={
$0(){return this.a.y=1},
$S:0}
C.eqF.prototype={
$0(){var w=this.a
return w.m(new C.eqw(w))},
$S:0}
C.eqw.prototype={
$0(){return this.a.y=2},
$S:0}
C.eqG.prototype={
$0(){return B.j6(this.a,null)},
$S:0}
C.eqB.prototype={
$2$cloudRequest(d,e){return this.a.b33(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1683}
C.eqC.prototype={
$0(){return this.a.Fi()},
$S:1}
C.eqD.prototype={
$0(){var w=this.a
return w.m(new C.eqy(w))},
$S:0}
C.eqy.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.eq4.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.eq3(w))},
$S:0}
C.eq3.prototype={
$0(){return this.a.y=0},
$S:0}
C.eq2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bId(B.p(t,t,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.G,A.aE.j(0.55),A.J,18)],x.V),D.c9p,A.a6),t,t,t,t,t,t,t,t),A.ec,A.t1,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c8A(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.h,0,t,t)],w),t)},
$S:62}
C.eqa.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eZ()
w.m(new C.eq9(w,v))},
$S:0}
C.eq9.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtj.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fT||v===A.f2)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dtk.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:650}
C.dtl.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hbd(v.c,u))
w=this.c?new C.dti(v):null
return v.bbv(this.b,A.pD,D.f0,w,"Today","$"+u,D.f0)},
$S:1685}
C.dti.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dtm.prototype={
$2(d,e){var w=this.a
return w.bbv(this.b,A.ka,A.ci,w.w,"Balance","$"+B.dG(B.M5(w.c.a,new C.dth(w))),A.cs)},
$S:67}
C.dth.prototype={
$0(){return this.a.c.d},
$S:80}
C.dtc.prototype={
$0(){this.a.a.cYe()
return null},
$S:0}
C.dtd.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b5(w,w,w,new C.byC(v,w),A.az)},
$S:56}
C.dte.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.be5(v,!0,A.aE,D.pl,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.be4(v,D.pl,w)}return B.b5(w,w,w,v,A.az)},
$S:56}
C.dtf.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:650}
C.dtg.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cWU(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.i.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c6(new B.hd(B.a([u,s],x.U)),new C.dtb(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1686}
C.dtb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.ix(7,new C.dta(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b5(n,n,n,new C.be3(o.c,v,k,u,D.pl,D.bxZ,n),D.fjP))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.v3
else t=o.e?A.wQ:D.bST
t=B.W(t,k?D.pl:A.b_,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.m(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pl:A.c
w=B.d(w,n,n,n,n,n,n,B.m(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.l(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.p(n,B.x(B.a([t,A.am,s,A.ax,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.m(n,n,k?D.pl:A.pq,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.lo,n,n,n)],m),A.l,n,A.b8,A.h,0,A.p),A.f,n,n,new B.o(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:208}
C.dta.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dt(!0,B.d3(B.p(s,s,A.f,s,s,new B.o(s,s,s,B.l(40),s,new B.bS(A.z,0.5,A.x,s,0,B.a([D.pl.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:238}
C.dtD.prototype={
$0(){},
$S:0}
C.dtE.prototype={
$0(){},
$S:0}
C.dtF.prototype={
$1(d){return d.x===A.dF},
$S:15}
C.dtp.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dto.prototype={
$0(){var w,v
B.eZ()
w=this.a
v=this.b
w.m(new C.dtn(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f4(null,x.H)}},
$S:0}
C.dtn.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dtA.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.l(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.j9,B.az(v,B.cT(A.z,B.d("$"+t,v,v,v,v,v,v,B.m(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.o(q,v,p,r,v,v,A.n),A.ha,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dtC(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:1688}
C.dtC.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.dtB(w,this.b))},
$S:0}
C.dtB.prototype={
$0(){var w=""+this.b
this.a.d.sb3(0,w)
return w},
$S:0}
C.dtz.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uI,B.A(B.a([v,A.b3,B.d(e,w,w,w,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1689}
C.dty.prototype={
$1(d){return this.a.m(new C.dtx())},
$S:2}
C.dtx.prototype={
$0(){},
$S:0}
C.dts.prototype={
$1(d){return this.a.aZa(d)&&!B.hjs(d)},
$S:15}
C.dtt.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.dtu.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dtv.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dN(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dtr())
t.mr("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dtr.prototype={
$0(){},
$S:0}
C.dtw.prototype={
$0(){var w=this.a
return w.m(new C.dtq(w))},
$S:0}
C.dtq.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fNw.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:78}
C.fFe.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fYx.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fFd.prototype={
$1(d){var w,v,u
if(!C.ilo(d,this.a))return!1
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
C.fts.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:68}
C.fWZ.prototype={
$0(){return $.hgJ=null},
$S:12}
C.fX_.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.fUL.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:7}
C.fUM.prototype={
$0(){var w,v=this.a
$.hgw.W(0,v)
w=C.uB(this.b,v)
if(w!=null)B.S_(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.fZJ.prototype={
$1(d){return new C.a0R(this.a,this.b,null)},
$S:z+56}
C.ekH.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.ekK.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.ekL.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.ekJ(w))},
$S:2}
C.ekJ.prototype={
$0(){return this.a.f=""},
$S:0}
C.ekM.prototype={
$1(d){return this.a.b25()},
$S:2}
C.ekN.prototype={
$0(){var w=this.a
return w.m(new C.ekI(w,this.b))},
$S:0}
C.ekI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fEc.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.b4(d,1)},
$S:13}
C.fEb.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.b4(d,1)},
$S:13}
C.fXf.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.T(x.N,x.z)}},
$S:14}
C.fXg.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fQU.prototype={
$1(d){return d.a!=="send_email"},
$S:280}
C.fWH.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.l(10),t=B.K(A.aT,A.r,1)
return B.p(A.z,B.d(d,w,w,w,w,w,w,A.hu,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.f5,w,w,w,72)},
$S:644}
C.ckZ.prototype={
$1(d){return J.k(d)},
$S:17}
C.cl_.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.ckY(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:638}
C.ckY.prototype={
$1(d){var w
if(B.j_(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:382}
C.cl0.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.ckX(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:638}
C.ckX.prototype={
$1(d){var w
if(B.j_(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:382}
C.cl2.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:631}
C.cl3.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:631}
C.ckW.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:68}
C.cl1.prototype={
$2(d,e){return d+e},
$S:66}
C.ckV.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:66}
C.fH_.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fGU.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fGV.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fGW.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fGX.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fGY.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fGZ.prototype={
$0(){return this.a.$1(D.r4)},
$S:0}
C.fqx.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ar(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.ZT:D.bjx
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dB
w=B.p(t,t,A.f,t,t,new B.o(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.G,A.w.j(0.35),A.dL,4)],x.V),new B.bS(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.az(t,B.p(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fqw(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:83}
C.fqw.prototype={
$0(){var w=this,v=w.a,u=v.d2b(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r4:D.Jz
w.f.$1(v)}},
$S:0}
C.fEx.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iv(!0,v,v,A.y,Q.aV8,new C.fEw(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:135}
C.fEw.prototype={
$2(d,e){var w=this,v=null,u=B.l(12),t=B.l(12),s=w.a,r=s.at[e],q=r==="X"?A.aG:A.aA
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.m(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fEv(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fY,0,v,v,v,v,v,A.ai)},
$S:79}
C.fEv.prototype={
$0(){var w=this,v=w.a.d2d(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fpP.prototype={
$1(d){return new B.D(A.j9,C.fUC(d,!1),null)},
$S:288}
C.fpQ.prototype={
$1(d){return C.fUC(d,!1)},
$S:1693}
C.fpR.prototype={
$0(){var w=this,v=w.a
v.cMx(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fpS.prototype={
$0(){var w=this
w.a.cMy(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fBs.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n8(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.cd,v,v,v),A.dk,new C.fBr(w.a,w.b,u,w.c,w.d),v,v,new B.ay(A.c.j(0.2),1,A.r,-1),v)},
$S:1694}
C.fBr.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fDo.prototype={
$1(d){return D.dt5[d]},
$S:76}
C.fDp.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fAh.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fAi.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fr_.prototype={
$0(){var w=this,v=w.a.cSo(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fqZ.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.mb
else w=u===1?A.dO:A.ty
return new B.fH(1,B.p(v,v,A.f,v,v,new B.o(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nJ,v,v,v,v),v)},
$S:1695}
C.fAt.prototype={
$1(d){var w=this
if(w.a.bf_(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fAu.prototype={
$0(){var w=this
if(w.a.bf_(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fqk.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fMz.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fMA.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:55}
C.eS7.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aN_.prototype
w.byJ=w.Y
w.byI=w.t
w=C.aN0.prototype
w.byL=w.Y
w.byK=w.t
w=C.aN1.prototype
w.byN=w.Y
w.byM=w.t
w=C.aNZ.prototype
w.bzM=w.Y
w.bzL=w.t
w=C.aNx.prototype
w.bzj=w.t
w=C.aO8.prototype
w.bzW=w.t
w=C.aN2.prototype
w.byO=w.t
w=C.aOg.prototype
w.bA4=w.t
w=C.aN7.prototype
w.byT=w.t
w=C.aNn.prototype
w.bz9=w.t
w=C.aOS.prototype
w.bAG=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCD.prototype,"gbVv","bVw",19)
v(q,"gaVo","aVp",1)
v(C.aCC.prototype,"gcCM","a3s",1)
v(q=C.aCE.prototype,"gc01","c02",1)
v(q,"gbKq","bKr",1)
v(q=C.azG.prototype,"gcvM","cvN",1)
v(q,"gck5","R9",0)
v(q,"gcGU","cGV",1)
v(q,"gcyQ","nk",0)
w(q,"gcou","cov",25)
w(q,"gcF8","SS",33)
v(q=C.aEK.prototype,"gbTr","YE",0)
v(q,"gc9g","a_c",0)
v(q,"gc9d","a_b",0)
v(q,"gc9e","aeF",0)
v(q,"gc9f","PX",0)
v(C.aBW.prototype,"gc9h","c9i",1)
u(C,"isO","hYk",58)
t(C,"hjA",0,null,["$1","$0"],["hFL",function(){return C.hFL(null)}],3,0)
t(C,"bGF",0,null,["$1","$0"],["hFK",function(){return C.hFK(null)}],3,0)
v(C.O1.prototype,"gF2","chf",1)
v(C.aFv.prototype,"gcw3","Bu",0)
v(q=C.aFL.prototype,"gckp","Rb",0)
v(q,"gcpd","a1E",0)
v(q,"gcdt","cdu",1)
v(q=C.aFX.prototype,"gcdy","afK",0)
v(q,"gbDY","a9G",0)
v(q,"gcwj","a2B",0)
s(q,"gchK","chL",35)
v(C.aHX.prototype,"gbEp","a9I",1)
v(q=C.aHW.prototype,"gcdx","afJ",0)
v(q,"gcjm","agS",0)
v(q=C.aFZ.prototype,"gc3G","adp",0)
v(q,"gc3I","Zl",0)
v(q,"gc3H","adq",0)
v(q=C.aFY.prototype,"gbGL","bGM",1)
v(q,"gbGN","bGO",1)
v(C.aG_.prototype,"gbME","bMF",1)
v(C.aCY.prototype,"gcdA","cdB",1)
v(q=C.aGm.prototype,"gb1Z","cdS",1)
r(q,"gb31",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agv","aAe","b33","b32"],52,0,0)
r(q,"gcgY",0,4,null,["$4"],["cgZ"],53,0,0)
v(q,"gcj4","a0P",0)
v(q,"gcjX","agZ",0)
v(q,"gcjS","agX",0)
v(q,"gc6V","aeb",0)
w(C.aDL.prototype,"gc5A","c5B",54)
w(q=C.aDN.prototype,"gcE1","cE2",55)
v(q,"gcCC","cCD",1)
v(q,"gcKH","cKI",1)
v(C.aGa.prototype,"gced","b25",1)
v(C.aGY.prototype,"gb2y","aA0",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.iR,[C.cBH,C.cBE,C.cBF,C.cBG,C.cBD,C.fdX,C.fdV,C.fdZ,C.fdW,C.fxq,C.dlk,C.dlv,C.dlD,C.dlE,C.dlG,C.dly,C.dlw,C.dlx,C.dlz,C.dlA,C.dlq,C.dlr,C.dlp,C.dlt,C.dlu,C.dln,C.dlm,C.dlI,C.dlL,C.dZW,C.dZV,C.dZX,C.dZU,C.dZT,C.dle,C.dlh,C.dli,C.dlg,C.dlf,C.dn6,C.dn7,C.dn8,C.dmm,C.dmn,C.dmR,C.dmC,C.dmD,C.dmE,C.dmF,C.dmG,C.dlP,C.dml,C.dmS,C.dn0,C.dmP,C.dmO,C.dmj,C.dmk,C.dmX,C.dmY,C.dlR,C.dlS,C.dmv,C.dmw,C.dmx,C.dmu,C.dmH,C.dmI,C.dmJ,C.dmK,C.dmL,C.dmM,C.dmV,C.dmy,C.dmz,C.dmA,C.dmB,C.dmZ,C.dn_,C.dlT,C.dlU,C.dlV,C.dlW,C.dmT,C.dmU,C.dmt,C.dmN,C.dmr,C.dn1,C.dn2,C.dn3,C.dmo,C.dm7,C.dm6,C.dm5,C.dmb,C.dm4,C.dm2,C.dlY,C.dm0,C.dlX,C.dmg,C.dmh,C.dlZ,C.dqF,C.cN1,C.cMS,C.cMT,C.cNb,C.cN8,C.cN9,C.cNa,C.cN3,C.cN2,C.cMU,C.cN4,C.cNu,C.cNq,C.cNp,C.cN_,C.cN0,C.cMX,C.cN7,C.cNf,C.cNg,C.cNh,C.cNi,C.cNj,C.cNk,C.cNl,C.cNG,C.cNz,C.cNw,C.cNB,C.cNy,C.cNv,C.cMV,C.cNs,C.dHd,C.dHe,C.dH4,C.dH2,C.dHc,C.dH1,C.dH0,C.dH3,C.dH8,C.dH9,C.dH6,C.dH7,C.dHf,C.dHg,C.dHh,C.dHi,C.f7t,C.f7u,C.dgb,C.fNq,C.dNG,C.dNy,C.dNA,C.dNE,C.dNz,C.dNB,C.dNC,C.cdn,C.fUA,C.fUz,C.dGQ,C.dGP,C.dGR,C.dGO,C.e6u,C.e6v,C.e6C,C.h2D,C.h2E,C.c5E,C.e_1,C.e_2,C.e_3,C.e_4,C.e_5,C.e_6,C.e_0,C.e_7,C.e__,C.e_a,C.e_9,C.e_8,C.e6K,C.e6L,C.e6I,C.e6H,C.e6J,C.e6F,C.eaJ,C.eaK,C.eas,C.eau,C.eaG,C.eaH,C.eaB,C.eaz,C.eaF,C.eaC,C.eaw,C.eav,C.eaL,C.cWq,C.cWo,C.cWp,C.cWn,C.cWt,C.cWu,C.f2n,C.f2s,C.f2p,C.f2r,C.f2q,C.f2j,C.f2i,C.f2l,C.f2k,C.eb5,C.eba,C.eb6,C.eb7,C.eb9,C.ebf,C.ebg,C.ebh,C.ebi,C.ebj,C.ebk,C.ebl,C.ebm,C.ebe,C.ebn,C.ebd,C.ebc,C.ebb,C.eaZ,C.eb_,C.eaR,C.eaS,C.eaT,C.eaV,C.cPW,C.drz,C.drB,C.drA,C.ebD,C.ebx,C.eby,C.ebA,C.ebB,C.ebC,C.ebG,C.ebF,C.ebM,C.ebL,C.ebt,C.ebs,C.ebN,C.ebE,C.ebr,C.h3t,C.dp_,C.doY,C.eq0,C.eqp,C.eqq,C.eqr,C.eqs,C.equ,C.eqv,C.eqk,C.eq1,C.eqo,C.eq5,C.eq6,C.eqe,C.eqb,C.eqc,C.eqd,C.eqf,C.eqg,C.eqh,C.eqj,C.eqi,C.eq7,C.eq8,C.eqE,C.eqx,C.eqF,C.eqw,C.eqG,C.eqC,C.eqD,C.eqy,C.eq4,C.eq3,C.eqa,C.eq9,C.dti,C.dth,C.dtc,C.dtD,C.dtE,C.dtp,C.dto,C.dtn,C.dtC,C.dtB,C.dtx,C.dtu,C.dtv,C.dtr,C.dtw,C.dtq,C.fWZ,C.fUM,C.ekH,C.ekK,C.ekJ,C.ekN,C.ekI,C.fGU,C.fGV,C.fGW,C.fGX,C.fGY,C.fGZ,C.fqw,C.fEv,C.fpR,C.fpS,C.fBr,C.fDp,C.fAi,C.fr_,C.fAu,C.fqk,C.eS7])
u(B.hs,[C.cBI,C.fdY,C.fRd,C.fR5,C.fxn,C.fxm,C.fxp,C.dlN,C.dlO,C.dlC,C.dlB,C.dlF,C.dlo,C.dls,C.dlH,C.dZZ,C.dlj,C.dn9,C.dna,C.dnb,C.dnc,C.dnd,C.dmQ,C.dmW,C.dlQ,C.dn5,C.dn4,C.dm8,C.dm9,C.dma,C.dmc,C.dme,C.dqG,C.cNH,C.cN6,C.cN5,C.cNo,C.cNr,C.cNn,C.cMY,C.cNe,C.cNc,C.cNt,C.cNd,C.cNC,C.cNA,C.cNF,C.c4l,C.c4k,C.c4n,C.c4m,C.dHb,C.dHa,C.dH5,C.dHj,C.dHk,C.fC1,C.fDe,C.dgc,C.dga,C.c57,C.fNp,C.dNH,C.dNF,C.cdo,C.fE2,C.fUy,C.cfP,C.cfO,C.cgg,C.e6s,C.e6t,C.fPM,C.fPz,C.fPy,C.fAl,C.cgu,C.cgv,C.cgw,C.cgt,C.cgs,C.fx5,C.h2z,C.h2A,C.h2B,C.h2C,C.h2y,C.e6z,C.e6A,C.e6y,C.h2F,C.dne,C.cib,C.fw1,C.e_b,C.e6G,C.ch_,C.cgX,C.cgZ,C.ch1,C.c8M,C.c8K,C.c8P,C.cha,C.ch9,C.ch8,C.ch7,C.chc,C.che,C.eaP,C.eat,C.ear,C.eaI,C.eaA,C.eaE,C.eaD,C.eay,C.eaN,C.eaM,C.cWr,C.cWs,C.f2o,C.f2h,C.f2m,C.ch4,C.fRx,C.ebp,C.eb8,C.eb1,C.eb2,C.eb3,C.eb4,C.ebo,C.ch6,C.cPX,C.cPY,C.fvK,C.ebu,C.ebw,C.ebz,C.ebH,C.ebI,C.ebJ,C.ebq,C.h3u,C.doU,C.doX,C.cj5,C.cji,C.eqH,C.eqI,C.eqJ,C.eqt,C.eql,C.eqm,C.eqn,C.eqz,C.eqB,C.dtj,C.dtk,C.dtf,C.dta,C.dtF,C.dtA,C.dtz,C.dty,C.dts,C.fFe,C.fYx,C.fFd,C.fts,C.fX_,C.fUL,C.fZJ,C.ekL,C.ekM,C.fEc,C.fEb,C.fXf,C.fXg,C.fQU,C.fWH,C.ckZ,C.cl_,C.ckY,C.cl0,C.ckX,C.cl2,C.cl3,C.ckW,C.fH_,C.fpP,C.fpQ,C.fBs,C.fDo,C.fAh,C.fqZ,C.fAt,C.fMz,C.fMA])
t(C.buF,B.j9)
u(B.af,[C.G5,C.an0,C.aFu,C.an_,C.an1,C.anP,C.ajS,C.apm,C.a0x,C.a0y,C.a_F,C.apT,C.apl,C.Oy,C.aCF,C.ar2,C.arL,C.WM,C.QB,C.a1j,C.a1i,C.WN,C.as1,C.aDy,C.as4,C.a03,C.asD,C.aDK,C.aDM,C.a0R,C.atZ])
u(B.ah,[C.aKu,C.aN0,C.aNZ,C.aN_,C.aN1,C.bjw,C.azG,C.aEK,C.blY,C.blZ,C.aBW,C.bm5,C.aNx,C.aO8,C.aN2,C.aFv,C.aFL,C.aFX,C.bdC,C.aHX,C.aHW,C.aFZ,C.aFY,C.bjK,C.aOg,C.aN7,C.bAB,C.aNn,C.aDN,C.aGa,C.aOS])
u(B.jD,[C.fe_,C.fxo,C.dll,C.dlM,C.dlK,C.dlJ,C.dZY,C.dms,C.dmq,C.dmp,C.dm3,C.dmd,C.dm1,C.dmf,C.dm_,C.dmi,C.cNm,C.cMZ,C.cNx,C.cNE,C.cND,C.cMW,C.dg9,C.dND,C.fE3,C.fE4,C.e6w,C.fR8,C.h2x,C.e6B,C.e6E,C.e6D,C.dnf,C.cic,C.ch0,C.cgY,C.c8N,C.c8L,C.chd,C.eaQ,C.eax,C.eaO,C.f2u,C.f2t,C.eb0,C.eaU,C.eaW,C.eaY,C.eaX,C.ebv,C.ebK,C.doV,C.doZ,C.doW,C.eqA,C.eq2,C.dtl,C.dtm,C.dtd,C.dte,C.dtg,C.dtb,C.dtt,C.fNw,C.cl1,C.ckV,C.fqx,C.fEx,C.fEw])
t(C.axS,C.G5)
u(B.aF,[C.rf,C.af7,C.O1,C.JD,C.rV,C.rW,C.m1,C.iz,C.ik,C.bbH,C.dd7,C.dry,C.t1,C.WO,C.OP,C.qk,C.b1Z,C.pB,C.at3])
t(C.aCD,C.aN0)
t(C.bms,C.aNZ)
t(C.aCC,C.aN_)
t(C.aCE,C.aN1)
u(B.l6,[C.Xs,C.aDz,C.asR,C.JI,C.Fs])
u(B.aw,[C.a1U,C.bvb,C.afT,C.Re,C.a7W,C.Oq,C.arF,C.aeK,C.aeJ,C.b2O,C.aDx,C.add,C.b2l,C.ad5,C.aDL])
t(C.blW,C.aNx)
t(C.bmG,C.aO8)
t(C.bic,C.aN2)
t(C.aG_,C.aOg)
t(C.aCY,C.aN7)
t(C.aGm,C.bAB)
t(C.bkt,C.aNn)
u(B.ms,[C.be5,C.be4,C.be3,C.bdv,C.byC,C.btq])
t(C.aGY,C.aOS)
w(C.aN_,C.O1)
w(C.aN0,C.O1)
w(C.aN1,C.O1)
w(C.aNZ,C.O1)
w(C.aNx,B.eP)
w(C.aO8,B.cf)
w(C.aN2,B.cf)
w(C.aOg,B.cf)
w(C.aN7,B.eP)
w(C.aNn,B.eP)
v(C.bAB,B.eE)
w(C.aOS,B.cf)})()
B.ja(b.typeUniverse,JSON.parse('{"buF":{"j9":[]},"G5":{"af":[],"v":[]},"aKu":{"ah":["G5<1,2>"]},"axS":{"G5":["1","hw<1>"],"af":[],"v":[],"G5.T":"1","G5.S":"hw<1>"},"an0":{"af":[],"v":[]},"aFu":{"af":[],"v":[]},"an_":{"af":[],"v":[]},"an1":{"af":[],"v":[]},"anP":{"af":[],"v":[]},"ajS":{"af":[],"v":[]},"aCD":{"ah":["an0"]},"bms":{"ah":["aFu"]},"aCC":{"ah":["an_"]},"aCE":{"ah":["an1"]},"bjw":{"ah":["anP"]},"azG":{"ah":["ajS"]},"apm":{"af":[],"v":[]},"a0x":{"af":[],"v":[]},"a0y":{"af":[],"v":[]},"afT":{"aw":[],"v":[]},"a_F":{"af":[],"v":[]},"aEK":{"ah":["apm"]},"a1U":{"aw":[],"v":[]},"bvb":{"aw":[],"v":[]},"blY":{"ah":["a0x"]},"blZ":{"ah":["a0y"]},"Re":{"aw":[],"v":[]},"aBW":{"ah":["a_F"]},"apT":{"af":[],"v":[]},"bm5":{"ah":["apT"]},"a7W":{"aw":[],"v":[]},"apl":{"af":[],"v":[]},"blW":{"ah":["apl"]},"Oq":{"aw":[],"v":[]},"arF":{"aw":[],"v":[]},"Oy":{"af":[],"v":[]},"bmG":{"ah":["Oy"]},"aeK":{"aw":[],"v":[]},"aeJ":{"aw":[],"v":[]},"aCF":{"af":[],"v":[]},"bic":{"ah":["aCF"]},"b2O":{"aw":[],"v":[]},"ar2":{"af":[],"v":[]},"aFv":{"ah":["ar2"]},"arL":{"af":[],"v":[]},"aFL":{"ah":["arL"]},"WM":{"af":[],"v":[]},"QB":{"af":[],"v":[]},"a1j":{"af":[],"v":[]},"a1i":{"af":[],"v":[]},"aFX":{"ah":["WM"]},"bdC":{"ah":["QB"]},"aHX":{"ah":["a1j"]},"aHW":{"ah":["a1i"]},"WN":{"af":[],"v":[]},"aFZ":{"ah":["WN"]},"as1":{"af":[],"v":[]},"add":{"aw":[],"v":[]},"ad5":{"aw":[],"v":[]},"aDy":{"af":[],"v":[]},"aFY":{"ah":["as1"]},"aDx":{"aw":[],"v":[]},"b2l":{"aw":[],"v":[]},"bjK":{"ah":["aDy"]},"as4":{"af":[],"v":[]},"aG_":{"ah":["as4"]},"a03":{"af":[],"v":[]},"aCY":{"ah":["a03"]},"asD":{"af":[],"v":[]},"aDK":{"af":[],"v":[]},"aDM":{"af":[],"v":[]},"aGm":{"ah":["asD"],"eE":[]},"aDL":{"aw":[],"v":[]},"bkt":{"ah":["aDK"]},"be5":{"aC":[]},"be4":{"aC":[]},"be3":{"aC":[]},"aDN":{"ah":["aDM"]},"bdv":{"aC":[]},"byC":{"aC":[]},"a0R":{"af":[],"v":[]},"aGa":{"ah":["a0R"]},"btq":{"aC":[]},"atZ":{"af":[],"v":[]},"aGY":{"ah":["atZ"]}}'))
B.Dl(b.typeUniverse,JSON.parse('{"O1":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.at
return{dw:w("lQ<u?>"),gS:w("oG"),o:w("d8"),g5:w("xH"),M:w("db<n>"),k:w("V"),gv:w("lg<ai<jv>>"),gh:w("lg<n>"),gH:w("lg<F>"),r:w("aB<~>"),dk:w("a_"),fw:w("O<oG>"),E:w("O<d8>"),V:w("O<ab>"),O:w("O<u>"),A:w("O<a_>"),R:w("O<nE>"),B:w("O<ai<F>>"),m:w("O<a9<n,n>>"),_:w("O<a9<n,@>>"),b:w("O<rV>"),x:w("O<rW>"),gi:w("O<jv>"),a:w("O<m1>"),Y:w("O<ik>"),v:w("O<iz>"),dA:w("O<JD>"),F:w("O<t1>"),Z:w("O<kL>"),g:w("O<fZ>"),gK:w("O<+at,details,id(V,n,n)>"),C:w("O<cU>"),s:w("O<n>"),G:w("O<j9>"),eO:w("O<er>"),d9:w("O<f_>"),p:w("O<v>"),n:w("O<H>"),t:w("O<F>"),U:w("O<aC?>"),d4:w("O<n?>"),ck:w("ai<rV>"),e:w("ai<rW>"),ac:w("ai<jv>"),dZ:w("ai<m1>"),I:w("ai<ik>"),j:w("ai<@>"),L:w("ai<F>"),eq:w("a9<n,n>"),P:w("a9<n,@>"),f:w("a9<@,@>"),cl:w("cM<n,D>"),aS:w("N<a_,tO>"),dc:w("N<JI,by>"),dv:w("N<n,n>"),bL:w("N<H,by>"),a3:w("N<F,by>"),gN:w("N<F,qb>"),w:w("iy"),b1:w("rV"),Q:w("rW"),bP:w("m1"),i:w("ik"),u:w("iz"),gp:w("WO"),J:w("OP"),D:w("qk"),an:w("kL"),c:w("cu"),K:w("aF"),d:w("jL<n>"),di:w("+outcome,snapshot(Xs,a7g?)"),ee:w("+after,before(H,H)"),et:w("+categories,error,message,replaceId(ai<ik>,n?,n?,n?)"),cz:w("FU"),bJ:w("ds<n>"),N:w("n"),e7:w("bq<H>"),W:w("bf<n>"),am:w("k7<F>"),cc:w("Y<n>"),aM:w("ec<d8>"),bG:w("ec<H>"),l:w("v"),gm:w("rf"),ec:w("af7"),q:w("md"),y:w("R"),gR:w("H"),z:w("@"),S:w("F"),eG:w("d8?"),cJ:w("V?"),gw:w("ai<a9<n,@>>?"),bM:w("ai<@>?"),h:w("a9<n,@>?"),X:w("aF?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("H?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5Q=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f0=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6m=new B.ay(D.f0,1,A.r,-1)
D.b6o=new B.ay(A.ab,2,A.r,-1)
D.b6r=new B.ay(A.aV,2,A.r,-1)
D.b6t=new B.ay(A.cA,0.8,A.r,-1)
D.b6I=new B.ay(A.aQ,2,A.r,-1)
D.b6P=new B.ay(A.fe,1.6,A.r,-1)
D.b7E=new B.aY(0,330,0,1/0)
D.b7L=new B.aY(0,176,0,1/0)
D.b7M=new B.aY(0,1/0,0,260)
D.b82=new B.aY(90,1/0,0,1/0)
D.bb1=new B.ab(0,A.G,A.dB,A.J,4)
D.d8M=w([D.bb1],x.V)
D.b8g=new B.o(A.c,null,null,null,D.d8M,null,A.a6)
D.d29=w([D.f0,A.b2],x.O)
D.ccr=new B.a7(A.a5,A.a9,A.x,D.d29,null,null)
D.b8u=new B.o(null,null,null,null,null,D.ccr,A.a6)
D.b8z=new B.o(A.bc,null,null,null,null,null,A.a6)
D.bml=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dpJ=w([V.ahx,D.bml],x.O)
D.cby=new B.a7(A.aZ,A.b4,A.x,D.dpJ,null,null)
D.b8Q=new B.o(null,null,null,A.mJ,null,D.cby,A.n)
D.buB=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dCu=w([D.buB,M.ak0],x.O)
D.caJ=new B.a7(A.aZ,A.b4,A.x,D.dCu,null,null)
D.b9g=new B.o(null,null,null,A.ua,null,D.caJ,A.n)
D.dli=w([A.aD,A.bE],x.O)
D.cbh=new B.a7(A.a5,A.a9,A.x,D.dli,null,null)
D.b9m=new B.o(null,null,null,null,null,D.cbh,A.a6)
D.fyD=new B.G(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTp=new B.B("\ud83c\udf89",null,D.fyD,null,null,null,null,null,null,null,null,null)
D.bf8=new B.cj(A.z,null,null,D.fTp,null)
D.bgA=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agA=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bjx=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bjB=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pl=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.ul=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ahY=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.blX=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.Zq=new B.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yp=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bnG=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.ZT=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajB=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bsk=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bst=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.ak4=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.bu2=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bu9=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bvi=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_I=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bws=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bx6=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a_W=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bxZ=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alD=new B.a59(2,"active")
D.bCj=new B.bd(42e5)
D.bCm=new B.bd(53e4)
D.bCp=new B.bd(58e4)
D.bCt=new B.bd(82e4)
D.bDf=new B.Q(0,30,0,30)
D.bDn=new B.Q(0,4,0,8)
D.bDr=new B.Q(0,8,12,8)
D.bE4=new B.Q(12,0,12,88)
D.bEc=new B.Q(12,11,12,10)
D.bEC=new B.Q(13,10,12,10)
D.bEN=new B.Q(14,10,14,2)
D.bEZ=new B.Q(14,14,10,14)
D.bFy=new B.Q(16,12,16,96)
D.bFD=new B.Q(16,14,16,8)
D.bFH=new B.Q(16,16,16,96)
D.bFI=new B.Q(16,18,16,16)
D.bFM=new B.Q(16,4,16,10)
D.bGK=new B.Q(18,6,18,40)
D.bGX=new B.Q(20,10,20,20)
D.bHb=new B.Q(20,18,20,18)
D.bHC=new B.Q(22,22,22,16)
D.bIg=new B.Q(2,0,2,10)
D.bJ0=new B.Q(4,8,12,4)
D.bJe=new B.Q(6,1,6,1)
D.bJg=new B.Q(6,4,0,0)
D.bJm=new B.Q(6,6,12,4)
D.bJH=new B.Q(8,4,12,8)
D.fX0=new B.B("Activity",null,A.fE,null,null,null,null,null,null,null,null,null)
D.bLJ=new B.by(1,A.ba,D.fX0,null)
D.h4F=new B.B("Game Receipts",null,A5.vN,null,null,null,null,null,null,null,null,null)
D.fOg=new B.B("Your last 59 games \xb7 kept for 7 days",null,O.ac3,null,null,null,null,null,null,null,null,null)
D.cZv=w([D.h4F,D.fOg],x.p)
D.bz4=new B.fp(A.ah,A.e,A.h,A.E,null,A.p,null,0,D.cZv,null)
D.bLM=new B.by(1,A.ba,D.bz4,null)
D.bQG=new B.a_(58607,"MaterialIcons",!1)
D.a3_=new B.a_(62178,"MaterialIcons",!1)
D.bRw=new B.a_(62410,"MaterialIcons",!1)
D.bSH=new B.a_(63258,"MaterialIcons",!1)
D.bSM=new B.a_(63304,"MaterialIcons",!1)
D.bSN=new B.a_(63306,"MaterialIcons",!1)
D.bST=new B.a_(63330,"MaterialIcons",!1)
D.as5=new B.a_(984777,"MaterialIcons",!1)
D.bVo=new B.ae(A.HB,13,A.ab,null,null,null)
D.bVw=new B.ae(A.js,13,A.qu,null,null,null)
D.asj=new B.ae(A.lU,null,A.c,null,null,null)
D.bX5=new B.ae(A.Dk,34,A.at,null,null,null)
D.bXC=new B.ae(A.D7,19,A.c,null,null,null)
D.bXM=new B.ae(A.aqp,24,A.aQ,null,null,null)
D.bYe=new B.ae(A.D1,28,A.bo,null,null,null)
D.bYK=new B.ae(A.arJ,42,A.c,null,null,null)
D.bYU=new B.ae(A.a3Y,30,A.c,null,null,null)
D.bZA=new B.ae(A.fN,null,A.c,null,null,null)
D.bZW=new B.ae(A.js,16,A.c,null,null,null)
D.c_C=new B.ae(A.tk,13,A.c,null,null,null)
D.c_L=new B.ae(A.lU,18,A.c,null,null,null)
D.c0j=new B.ae(A.wP,null,A.dO,null,null,null)
D.c1_=new B.ae(A.nO,28,A.c,null,null,null)
D.c1f=new B.ae(A.oO,22,null,null,null,null)
D.c1E=new B.ae(A.th,null,null,null,null,null)
D.c1Q=new B.ae(A.he,28,A.c,null,null,null)
D.c1T=new B.ae(A.cB,null,A.aR,null,null,null)
D.c22=new B.ae(A.a2G,14,A.c,null,null,null)
D.c2E=new B.ae(A.HQ,36,A.aN,null,null,null)
D.c2L=new B.ae(A.oK,16,A.c,null,null,null)
D.bmN=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c3A=new B.ae(A.e9,9,D.bmN,null,null,null)
D.bTM=new B.a_(983146,"MaterialIcons",!1)
D.c3S=new B.ae(D.bTM,null,A.aQ,null,null,null)
D.c4r=new B.ae(A.uT,28,D.f0,null,null,null)
D.c4w=new B.ae(A.tc,null,A.fe,null,null,null)
D.c4B=new B.ae(A.hA,20,D.f0,null,null,null)
D.bU8=new B.a_(983377,"MaterialIcons",!1)
D.c4L=new B.ae(D.bU8,64,A.c,null,null,null)
D.c5h=new B.ae(A.h3,24,A.c,null,null,null)
D.c6d=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6o=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6D=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c6E=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkq=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bo4=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bnH=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dq3=w([D.bkq,D.bo4,D.bnH],x.O)
D.c8t=new B.a7(A.ay,A.aC,A.x,D.dq3,null,null)
D.dvD=w([A.bi,A.b2],x.O)
D.c8P=new B.a7(A.ay,A.aC,A.x,D.dvD,null,null)
D.bmd=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.bt6=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.d9n=w([D.bmd,D.bt6],x.O)
D.c8X=new B.a7(A.ay,A.aC,A.x,D.d9n,null,null)
D.drJ=w([A.bs,A.a_,A.eb],x.O)
D.c92=new B.a7(A.ay,A.aC,A.x,D.drJ,null,null)
D.c95=new B.a7(A.a5,A.a9,A.x,F.azE,null,null)
D.d8C=w([A.fe,A.ci],x.O)
D.au6=new B.a7(A.a5,A.a9,A.x,D.d8C,null,null)
D.d93=w([A.fe,A.bE],x.O)
D.au7=new B.a7(A.a5,A.a9,A.x,D.d93,null,null)
D.aDP=w([D.pl,A.aE,A.c3],x.O)
D.c9p=new B.a7(A.ay,A.aC,A.x,D.aDP,null,null)
D.bq_=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d6p=w([D.bq_,E.agS,A.a_],x.O)
D.c9u=new B.a7(A.ay,A.aC,A.x,D.d6p,null,null)
D.b3N=new B.d7(-0.8,-1)
D.b3P=new B.d7(1.2,1)
D.d5v=w([A.c,A.eN,A.h9,A.c,A.ft,A.aG,A.ok],x.O)
D.dr3=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.c9w=new B.a7(D.b3N,D.b3P,A.x,D.d5v,D.dr3,null)
D.bsY=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqf=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dq2=w([D.bsY,D.bqf],x.O)
D.c9Y=new B.a7(A.a5,A.a9,A.x,D.dq2,null,null)
D.ca3=new B.a7(A.ay,A.aC,A.x,A.Sz,null,null)
D.dkd=w([E.a_M,A.yr],x.O)
D.ca5=new B.a7(A.a5,A.a9,A.x,D.dkd,null,null)
D.doK=w([A.hk,A.fX],x.O)
D.aud=new B.a7(A.a5,A.a9,A.x,D.doK,null,null)
D.dv8=w([A.bc,A.bQ],x.O)
D.aue=new B.a7(A.a5,A.a9,A.x,D.dv8,null,null)
D.cQH=w([A.dh,A.fA],x.O)
D.caL=new B.a7(A.ay,A.aC,A.x,D.cQH,null,null)
D.d4r=w([A.c,A.b9],x.O)
D.caV=new B.a7(A.a5,A.a9,A.x,D.d4r,null,null)
D.aj3=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjh=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dgD=w([D.aj3,A.jI,A.rC,A.aE,D.bjh],x.O)
D.cdv=w([0,0.28,0.55,0.82,1],x.n)
D.caX=new B.a7(A.ay,A.aC,A.x,D.dgD,D.cdv,null)
D.cb3=new B.a7(A.a5,A.a9,A.x,A.Tf,null,null)
D.cb4=new B.a7(A.a5,A.a9,A.x,F.aCa,null,null)
D.cb8=new B.a7(A.a5,A.a9,A.x,D.aDP,null,null)
D.daD=w([A.bE,A.fe],x.O)
D.cbn=new B.a7(A.a5,A.a9,A.x,D.daD,null,null)
D.dzC=w([A.aD,A.bE,A.b9],x.O)
D.cbp=new B.a7(A.a5,A.a9,A.x,D.dzC,null,null)
D.dko=w([A.at,A.bL,A.fK],x.O)
D.cbt=new B.a7(A.a5,A.a9,A.x,D.dko,null,null)
D.dzl=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.an],x.O)
D.deG=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cbx=new B.a7(A.ay,A.aC,A.x,D.dzl,D.deG,null)
D.cbH=new B.a7(A.ay,A.aC,A.x,A.a5q,null,null)
D.dl0=w([D.Zq,A.e2],x.O)
D.cbQ=new B.a7(A.a5,A.a9,A.x,D.dl0,null,null)
D.dtd=w([D.ak4,D.ahY,A.a_],x.O)
D.cc_=new B.a7(A.ay,A.aC,A.x,D.dtd,null,null)
D.bvO=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d50=w([A.ff,A.hk,D.bvO],x.O)
D.cct=new B.a7(A.ay,A.aC,A.x,D.d50,null,null)
D.dbc=w([D.pl,A.aE],x.O)
D.ccv=new B.a7(A.ay,A.aC,A.x,D.dbc,null,null)
D.ccW=w([G.Do,A.nO,A.js,A.hB,A.jN,A.l2,A.kf,A.qX,A.nN,A.eW,A.lr,A.zu,A.HP],x.A)
D.cgq=w([10,50,100,200],x.t)
D.cqc=w([1,3,5,7],x.t)
D.cvb=w([25,50,100,250],x.t)
D.bTG=new B.a_(983104,"MaterialIcons",!1)
D.cDU=w([A.nO,A.mn,A.oO,A.lS,A.ho,A.v3,D.bTG,A.a3S],x.A)
D.cJk=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cVK=w([0,0.22,0.5,0.78,1],x.n)
D.cZF=w([8,13,19],x.n)
D.a5K=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fW_=new B.B("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eDf=new B.jL("questions",48,D.fW_,null,x.d)
D.fLm=new B.B("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eDk=new B.jL("edit",48,D.fLm,null,x.d)
D.h3b=new B.B("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eDq=new B.jL("delete",48,D.h3b,null,x.d)
D.cZQ=w([D.eDf,D.eDk,D.eDq],B.at("O<pI<n>>"))
D.d9g=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.d9y=w([A.bT,A.fn],x.O)
D.a8N=new C.m1("text","",null,null)
D.daP=w([D.a8N],x.a)
D.dcj=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eYq=new B.afu(A.kC,"Home")
D.eOZ=new B.afu(A.pD,"Growth")
D.eTN=new B.afu(A.js,"Wallet")
D.deX=w([D.eYq,D.eOZ,D.eTN],B.at("O<+icon,label(a_,n)>"))
D.dfo=w([4,0,2,6,8,1,3,5,7],x.t)
D.dfw=w([A.c,A.ch,A.cA],x.O)
D.e0u=new C.t1("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e0x=new C.t1("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e0v=new C.t1("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e0p=new C.t1("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e0q=new C.t1("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e0y=new C.t1("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6i=w([D.e0u,D.e0x,D.e0v,D.e0p,D.e0q,D.e0y],x.F)
D.a6n=w([A.aA,A.bi,A.d9,A.at],x.O)
D.bn1=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dl7=w([A.YX,D.bn1,A.rC,A.iy,A.jI],x.O)
D.a6u=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SJ=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cE8=w([3,4,5],x.t)
D.cRj=w([6,7,8],x.t)
D.cd1=w([0,3,6],x.t)
D.cqh=w([1,4,7],x.t)
D.cxH=w([2,5,8],x.t)
D.cd6=w([0,4,8],x.t)
D.cxE=w([2,4,6],x.t)
D.dnI=w([Y.auE,D.cE8,D.cRj,D.cd1,D.cqh,D.cxH,D.cd6,D.cxE],x.B)
D.aM3=new C.JI(0,"abab")
D.e0n=new C.JI(1,"aaaBbb")
D.aM4=new C.JI(2,"aabb")
D.doP=w([D.aM3,D.e0n,D.aM4],B.at("O<JI>"))
D.dp6=w([],x.a)
D.aD2=w([],x.v)
D.dt5=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.T2=w([1,2,3,-1,-2],x.t)
D.dCf=w([A.j7,A.aD],x.O)
D.hBe=new C.rf("dice","Dice Roll","Roll for cash & prizes!",A.nL,D.dCf)
D.hBb=new C.rf("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v_,A.aBF)
D.dw2=w([A.dn,A.bo],x.O)
D.hB9=new C.rf("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3E,D.dw2)
D.dBF=w([A.dR,A.ns],x.O)
D.hBf=new C.rf("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a3S,D.dBF)
D.cpX=w([A.jG,A.rP],x.O)
D.hBc=new C.rf("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A_.PM,D.cpX)
D.dt4=w([M.lJ,D.ZT],x.O)
D.hBa=new C.rf("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.HT,D.dt4)
D.hBd=new C.rf("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,Aq.nR)
D.dv7=w([D.hBe,D.hBb,D.hB9,D.hBf,D.hBc,D.hBa,D.hBd],B.at("O<rf>"))
D.dwF=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bs3=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.brV=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.akV=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dxv=w([D.bs3,D.brV,D.akV],x.O)
D.buv=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dxx=w([A.agR,D.buv,D.akV],x.O)
D.dyb=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEc=w([D.pl,A.c,D.f0,A.c4,A.b_,A.aE],x.O)
D.e0s=new C.t1("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e0r=new C.t1("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e0o=new C.t1("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e0w=new C.t1("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e0z=new C.t1("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e0t=new C.t1("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7e=w([D.e0s,D.e0r,D.e0o,D.e0w,D.e0z,D.e0t],x.F)
D.dBU=w([A.ci,A.rP],x.O)
D.epC={checkers_deluxe:0,tic_tac_go:1}
D.aK2=new B.bs(D.epC,["Checkers Deluxe","Tic Tac Go"],B.at("bs<n,n>"))
D.eoF={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKd=new B.bs(D.eoF,[1,2,3,4,5,6,7],B.at("bs<n,F>"))
D.dUa=new C.a7W(null)
D.dXC=new C.m1("signature","NGMY Support Team",null,null)
D.dXD=new C.m1("divider","",null,null)
D.U1=new C.WO(!1,!1,!1,!1)
D.U3=new C.OP(!1,!1,!1,!1)
D.dYL=new C.OP(!0,!0,!1,!1)
D.El=new C.asR(0,"swahili")
D.aM2=new C.asR(1,"english")
D.Em=new C.asR(2,"mix")
D.dn5=w([A.iL,A.ia,A.d6],x.O)
D.bSr=new B.a_(63118,"MaterialIcons",!1)
D.e1A=new C.pB(D.dn5,A.fZ,A.at,"BACKGAMMON","\ud83c\udfb2",D.bSr)
D.bUw=new B.a_(983637,"MaterialIcons",!1)
D.e1B=new C.pB(An.aEs,A.bi,A.er,"EURO WHEEL","\ud83c\udfa1",D.bUw)
D.dx_=w([A.a_,A.aL,A.by],x.O)
D.e1C=new C.pB(D.dx_,A.aS,A.an,"ROYALE","\u265f\ufe0f",A_.PM)
D.d8H=w([A.dh,A.bo,A.dX],x.O)
D.e1D=new C.pB(D.d8H,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a46)
D.drn=w([A.dA,A.fA,A.rP],x.O)
D.e1E=new C.pB(D.drn,A.wk,A.ci,"PUNTO BANCO","\ud83d\udc8e",A.mn)
D.cQJ=w([A.oj,A.iw,A.m9],x.O)
D.e1F=new C.pB(D.cQJ,A.jE,A.kx,"DOMINOES","\ud83c\udc53",A.arK)
D.dxK=w([A.yz,A.uq,A.hI],x.O)
D.e1G=new C.pB(D.dxK,A.Ck,A.hv,"WAR","\u2694\ufe0f",A7.a3k)
D.e1H=new C.pB(A.aEl,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nL)
D.daE=w([A.kv,A.aD,A.dR],x.O)
D.e1I=new C.pB(D.daE,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nL)
D.dql=w([A.jX,A.lF,A.bE],x.O)
D.e1J=new C.pB(D.dql,A.qi,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zn)
D.d27=w([A.ia,A.e2,A.at],x.O)
D.bRS=new B.a_(62865,"MaterialIcons",!1)
D.e1K=new C.pB(D.d27,A.uv,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bRS)
D.e1L=new C.pB(A.a7b,A.bm,A.bi,"HOLD'EM","\u2660\ufe0f",A.js)
D.dya=w([A.ff,A.fX,A.b2],x.O)
D.bR0=new B.a_(61234,"MaterialIcons",!1)
D.e1M=new C.pB(D.dya,A.ma,A.aV,"CRAPS","\ud83c\udfb2",D.bR0)
D.d7U=w([A.fn,A.jl,A.bT],x.O)
D.e1N=new C.pB(D.d7U,A.bL,A.b9,"PLINKO","\ud83d\udc8e",Ar.PV)
D.bUg=new B.a_(983492,"MaterialIcons",!1)
D.e1O=new C.pB(A.a7b,A.ew,A.bi,"SNOOKER","\ud83c\udfb1",D.bUg)
D.dvw=w([A.ff,A.fX,A.aV],x.O)
D.e1P=new C.pB(D.dvw,A.ur,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hA)
D.dvV=w([A.eb,A.ep,A.bi],x.O)
D.bSS=new B.a_(63324,"MaterialIcons",!1)
D.e1Q=new C.pB(D.dvV,A.wn,A.bc,"KLONDIKE","\ud83c\udccf",D.bSS)
D.dnR=w([A.bA,A.bs,A.a_],x.O)
D.e1R=new C.pB(D.dnR,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A3.I7)
D.r3=new C.Fs(0,"continueGame")
D.r4=new C.Fs(1,"youWin")
D.Jz=new C.Fs(2,"youLose")
D.Uc=new C.Fs(3,"draw")
D.aMh=new C.Xs(0,"found")
D.ekE=new C.Xs(1,"foundLive")
D.a93=new C.Xs(2,"notFound")
D.aMi=new C.Xs(3,"wrongAccount")
D.et_=new B.r(4,12)
D.ewy=new B.D(A.yS,A.ue,null)
D.bIF=new B.Q(4,0,0,3)
D.fvL=new B.G(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7M=new B.B("NGMY Helper",null,D.fvL,null,null,null,null,null,null,null,null,null)
D.ewP=new B.D(D.bIF,D.h7M,null)
D.bSL=new B.a_(63284,"MaterialIcons",!1)
D.bY1=new B.ae(D.bSL,18,A.po,null,null,null)
D.fAG=new B.G(!0,A.po,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPs=new B.B("Continue",null,D.fAG,null,null,null,null,null,null,null,null,null)
D.dpD=w([D.bY1,A.bn,D.fPs],x.p)
D.ff8=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dpD,null)
D.ewT=new B.D(A.hP,D.ff8,null)
D.ex8=new B.D(A.bU,A.ue,null)
D.brD=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dlN=w([A.hk,A.fX,A.cW,D.brD],x.O)
D.cbA=new B.a7(A.ay,A.aC,A.x,D.dlN,A.DK,null)
D.b9p=new B.o(null,null,null,null,null,D.cbA,A.n)
D.bAk=new B.bM(D.b9p,A.bk,null,null)
D.eDG=new B.cK(0,0,0,0,null,null,D.bAk,null)
D.bZS=new B.ae(A.wO,11,A.c,null,null,null)
D.eDK=new B.cK(10,12,null,null,null,null,D.bZS,null)
D.cVA=w([A.hJ,A.eb,A.ll],x.O)
D.eEl=new B.bS(A.Bs,1.1,A.x,null,0,D.cVA,null,null)
D.btk=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bmx=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.boH=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.djc=w([D.btk,D.bmx,D.boH],x.O)
D.eEt=new B.bS(A.aen,1.05,A.x,null,0,D.djc,null,null)
D.eER=new B.bS(A.z,0.5,A.x,null,0,Aj.a5Z,null,null)
D.fd1=new B.a4(-18,0,18,1)
D.fdA=new B.a4(-3,-5,3,5)
D.bYt=new B.ae(A.ed,16,D.f0,null,null,null)
D.aXW=new B.G(!0,D.f0,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5i=new B.B("Screenshot added \xb7 tap to change",null,D.aXW,null,null,null,null,null,null,null,null,null)
D.d5y=w([D.bYt,A.bn,D.h5i],x.p)
D.fev=new B.c7(A.aM,A.b8,A.h,A.l,null,A.p,null,0,D.d5y,null)
D.c1A=new B.ae(A.oJ,15,D.f0,null,null,null)
D.h35=new B.B("Refresh",null,D.aXW,null,null,null,null,null,null,null,null,null)
D.d84=w([D.c1A,A.df,D.h35],x.p)
D.fex=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d84,null)
D.eoZ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fgL=new B.db(D.eoZ,3,x.M)
D.eoN={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fgX=new B.db(D.eoN,36,x.M)
D.eoQ={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fha=new B.db(D.eoQ,6,x.M)
D.eqn={memory:0,typing:1,scramble:2,pattern:3}
D.nc=new B.db(D.eqn,4,x.M)
D.fjP=new B.av(276,276)
D.fkx=new B.a5(13,null,null,null)
D.bfP=new B.fn(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fkJ=new B.a5(26,26,D.bfP,null)
D.flD=new B.hK(8,0,0,1,null)
D.h6u=new B.B("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVi=new B.b0(D.h6u,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fKo=new B.B("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.foH=new B.b0(D.fKo,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLy=new B.B("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.foN=new B.b0(D.fLy,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3g=new B.B("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new B.b0(D.h3g,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bsv=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fzA=new B.G(!0,D.bsv,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsC=new B.er("$",null,null,A.cM,null,null,null,null,null,null,D.fzA)
D.fsS=new B.G(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fta=new B.G(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new B.G(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftI=new B.G(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuc=new B.G(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fue=new B.G(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.G(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvA=new B.G(!0,D.f0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvC=new B.G(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwt=new B.G(!0,E.Cd,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWD=new B.G(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.G(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.G(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aH,null,null,null,null,null,null,null,null)
D.fyJ=new B.G(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzS=new B.G(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new B.G(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAh=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aH,null,null,null,null,null,null,null,null)
D.fAO=new B.G(!0,A.jd,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bkQ=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fB5=new B.G(!0,D.bkQ,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCA=new B.G(!0,A.aA,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD_=new B.G(!0,D.aj3,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXl=new B.G(!0,E.Cd,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDk=new B.G(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDl=new B.G(!0,A.by,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDE=new B.G(!0,E.Cd,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xC=new B.G(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bpL=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fDT=new B.G(!0,D.bpL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEu=new B.G(!0,A.TG,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFB=new B.G(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFI=new B.G(!0,A.iz,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new B.G(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXH=new B.G(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGh=new B.G(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new B.G(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHi=new B.G(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.G(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI0=new B.G(!0,A.bc,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new B.G(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new B.G(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new B.B("Value per pair",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fJB=new B.B("Restore now",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fK9=new B.B("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aX5=new B.G(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new B.B("AVAILABLE PLANS",null,D.aX5,null,null,null,null,null,null,null,null,null)
D.fKm=new B.B("I understand",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fKX=new B.B("Go Back",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fwi=new B.G(!0,A.by,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLF=new B.B("PLAN VALUE",null,D.fwi,null,null,null,null,null,null,null,null,null)
D.fLI=new B.B("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new B.B("Deposit",null,A.Wq,null,null,null,null,null,null,null,null,null)
D.fGD=new B.G(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN8=new B.B("JACKPOT SLOTS",null,D.fGD,null,null,null,null,null,null,null,null,null)
D.fNr=new B.B("Restore",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fwo=new B.G(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNv=new B.B("YOUR NUMBER",null,D.fwo,null,null,null,null,null,null,null,null,null)
D.fNM=new B.B("SPIN REELS",null,F.abY,null,null,null,null,null,null,null,null,null)
D.fOf=new B.B("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fON=new B.B("Perfect Score Profit",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fPq=new B.B("Join room",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fRC=new B.B("Add payment screenshot",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fRS=new B.B("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.G(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSj=new B.B("INVITE A PLAYER",null,D.fFQ,null,null,null,null,null,null,null,null,null)
D.fET=new B.G(!0,A.YX,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSO=new B.B("NGMY GOLD LEADER",null,D.fET,null,null,null,null,null,null,null,null,null)
D.fTk=new B.B("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new B.B("Invest & Play",null,A.mE,null,null,null,null,null,null,null,null,null)
D.aX0=new B.G(!0,D.yp,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUb=new B.B("VALID THRU",null,D.aX0,null,null,null,null,null,null,null,null,null)
D.aXJ=new B.G(!0,A.aF,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new B.B("DEALER",null,D.aXJ,null,null,null,null,null,null,null,null,null)
D.fUq=new B.B("CARDHOLDER",null,D.aX0,null,null,null,null,null,null,null,null,null)
D.fEk=new B.G(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV9=new B.B("NGMY PLATINUM",null,D.fEk,null,null,null,null,null,null,null,null,null)
D.fHQ=new B.G(!0,A.qu,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVV=new B.B("EARNED SO FAR",null,D.fHQ,null,null,null,null,null,null,null,null,null)
D.fWu=new B.B("VS",null,A.abZ,null,null,null,null,null,null,null,null,null)
D.fWV=new B.B("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fXh=new B.B("One day left",null,A.abP,null,A.K,null,null,null,null,null,null,null)
D.fXD=new B.B("Keep typing \u2014 mistakes are counted in your payout",null,A.F0,null,null,null,null,null,null,null,null,null)
D.fXE=new B.B("Multiplayer invite",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fXQ=new B.B("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fuL=new B.G(!0,A.TG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXW=new B.B("\ud83d\udcb0 Partial Payout System",null,D.fuL,null,null,null,null,null,null,null,null,null)
D.fY6=new B.B("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.ftE=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYn=new B.B("Investment Required",null,D.ftE,null,A.K,null,null,null,null,null,null,null)
D.fZU=new B.B("Network Status",null,A.aWg,null,null,null,null,null,null,null,null,null)
D.aWn=new B.G(!0,A.ab,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_x=new B.B("Their account email",null,D.aWn,null,null,null,null,null,null,null,null,null)
D.h_R=new B.B("Verification code",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h_S=new B.B("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h07=new B.B("ACTIVE ASSET",null,D.aX5,null,null,null,null,null,null,null,null,null)
D.h0v=new B.B("Scan QR",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h0A=new B.B("Check word",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h10=new B.B("YOUR HAND",null,D.aXJ,null,null,null,null,null,null,null,null,null)
D.h1B=new B.B("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h1E=new B.B("I sent it \u2014 submit deposit",null,A.mE,null,null,null,null,null,null,null,null,null)
D.h2t=new B.B("Back",null,A.B_,null,null,null,null,null,null,null,null,null)
D.fIL=new B.G(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2B=new B.B("DEAL / PLAY ROUND",null,D.fIL,null,null,null,null,null,null,null,null,null)
D.h2O=new B.B("Got it \u2014 keep chatting",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h2Y=new B.B("3 Messages Left",null,A.aXy,null,null,null,null,null,null,null,null,null)
D.h3v=new B.B("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h3E=new B.B("Copy",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h40=new B.B("How many games?",null,D.aWn,null,null,null,null,null,null,null,null,null)
D.fDM=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4c=new B.B("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fDM,null,A.K,null,null,null,null,null,null,null)
D.h5L=new B.B("Question",null,null,null,null,null,null,null,null,null,null,null)
D.h6_=new B.B("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7E=new B.B("NGMY  WALLET",null,D.fJc,null,null,null,null,null,null,null,null,null)
D.h7F=new B.B("Select Your Bet",null,A.h6,null,null,null,null,null,null,null,null,null)
D.hx1=new B.bf("history",x.W)
D.hxo=new B.bf("ngmy_local_home",x.W)
D.hxp=new B.bf("ngmy_local_invest",x.W)
D.hxq=new B.bf("ngmy_local_wallet",x.W)
D.hAX=new C.a_F(null)
D.b1M=new C.aDz(0,"grid")
D.b1N=new C.aDz(1,"questions")
D.hBV=new C.aDz(2,"answer")
D.hEr=new C.a0y(null)})();(function staticFields(){$.haQ=B.aR(x.N)
$.hC8=B.T(x.N,x.k)
$.hgJ=null
$.hgw=B.T(x.N,B.at("Gi"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iBG","bHs",()=>C.ije())
w($,"iBs","hL9",()=>{var v=null,u=B.fE(v,A.cx,v,v,v,D.fsC,A.a7,A.c1,v,A.dJ,A.c2)
u.eo()
return u})})()};
(a=>{a["jSgfOiqhYjq2sekyncXJxiEhyq8="]=a.current})($__dart_deferred_initializers__);