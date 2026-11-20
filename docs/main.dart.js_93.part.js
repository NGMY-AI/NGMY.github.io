((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,K,R,L,S,T,M,N,U,O,V,W,X,F,P,Y,C={
hyg(d,e,f){var w=null,v=f.k("H1<0>"),u=new B.H1(w,w,w,w,v)
$.w1()
u.d=new C.cCr(new B.vw(),e,u,f,d)
return new B.i8(u,v.k("i8<1>"))},
cCr:function cCr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCs:function cCs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCo:function cCo(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCq:function cCq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCn:function cCn(d,e,f){this.a=d
this.b=e
this.c=f},
bv6:function bv6(d){this.a=d},
hyf(d,e,f,g){return new C.ay3(d,e,f,null,g.k("ay3<0>"))},
Ge:function Ge(){},
aKL:function aKL(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
ffV:function ffV(d){this.a=d},
ffU:function ffU(d,e){this.a=d
this.b=e},
ffX:function ffX(d){this.a=d},
ffS:function ffS(d,e,f){this.a=d
this.b=e
this.c=f},
ffW:function ffW(d){this.a=d},
ffT:function ffT(d){this.a=d},
ay3:function ay3(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
iq7(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aX(w,1))
return w},
hJg(d){var w=C.iq7(d)
if(w.length===0)return""
return"$"+w},
fPH(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fPH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.V(Date.now(),0,!1).bQ(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbt())o=o===t.gbt()&&p.b<t.gcG()
else o=!0
if(o){w=4
break}if(q.x!==A.cx){w=4
break}if(q.d!==A.hc){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cT(m,"game payout:",0))if(!B.cT(m,"game partial:",0)){if(!B.cT(m,"multiplayer payout:",0))o=B.cT(m,"dice",0)&&q.e===A.fz
else o=l
l=o}if(!l){w=4
break}if(B.cT(m,"game payout:",0))k=A.a.i(A.a.aX(n,A.a.ce(m,"game payout:")+12))
else if(B.cT(m,"game partial:",0)){k=A.a.i(A.a.aX(n,A.a.ce(m,"game partial:")+13))
j=A.a.ce(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else if(B.cT(m,"multiplayer payout:",0)){k=A.a.i(A.a.aX(n,A.a.ce(m,"multiplayer payout:")+19))
j=A.a.ce(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else k=B.cT(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vf(q.c,p,n,d,o,null,q.a,!0),$async$fPH)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fPH,v)},
iv5(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ir9(d,e,f){return A.d.aS(e,new C.fTq(f,A.a.i(d.toLowerCase())))},
fTh(d){var w
C.hun(d)
w=d.c7
return B.bs(new B.N(w,new C.fTi(),B.T(w).k("N<1,@>")),!0,x.N)},
igI(d,e,f){var w,v,u,t,s,r,q=null,p=A.bZ,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ej().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a4(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.gho():s}w=A.i.cD(f*t)
v=new C.fzy(f)
if(J.d2(n,"data:image"))try{u=B.fY(A.cD.aK(A.d.gal(J.lK(n,","))),A.z,w,new C.fzv(v),A.h7,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d2(n,"supabase://"))return new B.lb(B.a3c(n),new C.fzw(f,e,p,w,v),q,q,x.gh)
return B.kG(n,A.z,w,new C.fzx(v),A.h7,p,!0,e,q,q,f)},
hif(d,e){return new B.a5(e,e,B.i4(C.igI(d,e,e),A.aq),null)},
i8L(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dwR,x.gm)
for(w=0;w<36;++w){v=A.E6[w]
s.push(new C.rg(v.a,v.b,v.c,v.e,v.f))}return new C.aCR(u,B.S(t,t),s)},
fTq:function fTq(d,e){this.a=d
this.b=e},
fTi:function fTi(){},
fzy:function fzy(d){this.a=d},
fzv:function fzv(d){this.a=d},
fzw:function fzw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzu:function fzu(d){this.a=d},
fzx:function fzx(d){this.a=d},
anb:function anb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aCR:function aCR(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dmC:function dmC(d,e){this.a=d
this.b=e},
dmN:function dmN(d,e){this.a=d
this.b=e},
dn4:function dn4(){},
dn5:function dn5(d){this.a=d},
dmV:function dmV(d,e){this.a=d
this.b=e},
dmU:function dmU(){},
dmW:function dmW(d){this.a=d},
dmT:function dmT(){},
dmY:function dmY(d){this.a=d},
dmX:function dmX(){},
dmQ:function dmQ(d){this.a=d},
dmO:function dmO(d){this.a=d},
dmP:function dmP(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmS:function dmS(d){this.a=d},
dmI:function dmI(d,e){this.a=d
this.b=e},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
dmG:function dmG(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmK:function dmK(d){this.a=d},
dmL:function dmL(d){this.a=d},
dmM:function dmM(d,e,f){this.a=d
this.b=e
this.c=f},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmE:function dmE(d,e){this.a=d
this.b=e},
dmD:function dmD(d,e){this.a=d
this.b=e},
dn3:function dn3(d){this.a=d},
dn1:function dn1(d,e,f){this.a=d
this.b=e
this.c=f},
dn0:function dn0(d,e,f){this.a=d
this.b=e
this.c=f},
dn_:function dn_(d,e){this.a=d
this.b=e},
dmZ:function dmZ(){},
dn2:function dn2(d){this.a=d},
aFI:function aFI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmS:function bmS(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e0a:function e0a(d){this.a=d},
e09:function e09(d){this.a=d},
e0b:function e0b(d){this.a=d},
e08:function e08(){},
e0c:function e0c(d,e){this.a=d
this.b=e},
e07:function e07(d){this.a=d},
e0d:function e0d(d){this.a=d},
ana:function ana(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCQ:function aCQ(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dmw:function dmw(d){this.a=d},
dmz:function dmz(d){this.a=d},
dmA:function dmA(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmy:function dmy(d,e){this.a=d
this.b=e},
dmx:function dmx(d,e){this.a=d
this.b=e},
anc:function anc(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCS:function aCS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bG=_.bi=_.b_=_.b3=null
_.aZ=!1
_.bw=_.bn=null
_.c7=!1
_.bT=_.cT=""
_.c=_.a=_.bH=null},
doo:function doo(d,e){this.a=d
this.b=e},
dor:function dor(d){this.a=d},
dos:function dos(d){this.a=d},
dot:function dot(d){this.a=d},
dou:function dou(d){this.a=d},
dov:function dov(d){this.a=d},
dop:function dop(d){this.a=d},
doq:function doq(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnF:function dnF(d,e){this.a=d
this.b=e},
do7:function do7(d){this.a=d},
do8:function do8(){},
dnU:function dnU(d,e,f){this.a=d
this.b=e
this.c=f},
dnV:function dnV(d){this.a=d},
dnW:function dnW(d,e,f){this.a=d
this.b=e
this.c=f},
dnX:function dnX(d,e){this.a=d
this.b=e},
dnY:function dnY(){},
dn6:function dn6(d){this.a=d},
dnD:function dnD(d,e){this.a=d
this.b=e},
do9:function do9(){},
doi:function doi(){},
do6:function do6(d){this.a=d},
do5:function do5(d){this.a=d},
dnB:function dnB(d){this.a=d},
dnC:function dnC(){},
dod:function dod(){},
doe:function doe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dof:function dof(d,e,f){this.a=d
this.b=e
this.c=f},
dn7:function dn7(){},
dn8:function dn8(d){this.a=d},
dn9:function dn9(){},
dnN:function dnN(d,e){this.a=d
this.b=e},
dnO:function dnO(d,e,f){this.a=d
this.b=e
this.c=f},
dnP:function dnP(d){this.a=d},
dnM:function dnM(d){this.a=d},
dnZ:function dnZ(d){this.a=d},
do_:function do_(){},
do0:function do0(d){this.a=d},
do1:function do1(){},
do2:function do2(d){this.a=d},
do3:function do3(){},
doc:function doc(d,e,f){this.a=d
this.b=e
this.c=f},
dnQ:function dnQ(d){this.a=d},
dnR:function dnR(d,e){this.a=d
this.b=e},
dnS:function dnS(d){this.a=d},
dnT:function dnT(d){this.a=d},
dog:function dog(d){this.a=d},
doh:function doh(d){this.a=d},
dna:function dna(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
dnc:function dnc(d){this.a=d},
dnd:function dnd(d){this.a=d},
doa:function doa(d,e){this.a=d
this.b=e},
dob:function dob(d){this.a=d},
dnL:function dnL(d,e){this.a=d
this.b=e},
do4:function do4(d,e,f){this.a=d
this.b=e
this.c=f},
dnJ:function dnJ(d,e,f){this.a=d
this.b=e
this.c=f},
dnK:function dnK(){},
doj:function doj(d){this.a=d},
dok:function dok(d){this.a=d},
dol:function dol(d){this.a=d},
don:function don(d){this.a=d},
dom:function dom(){},
dnI:function dnI(d,e,f){this.a=d
this.b=e
this.c=f},
dnH:function dnH(d,e){this.a=d
this.b=e},
dnG:function dnG(d,e){this.a=d
this.b=e},
dnq:function dnq(d){this.a=d},
dnp:function dnp(d,e){this.a=d
this.b=e},
dnr:function dnr(d){this.a=d},
dno:function dno(d,e){this.a=d
this.b=e},
dns:function dns(d){this.a=d},
dnn:function dnn(){},
dnt:function dnt(d){this.a=d},
dnl:function dnl(){},
dnm:function dnm(d){this.a=d},
dnu:function dnu(d){this.a=d},
dnk:function dnk(d,e){this.a=d
this.b=e},
dnv:function dnv(d){this.a=d},
dnj:function dnj(d,e){this.a=d
this.b=e},
dnf:function dnf(d,e){this.a=d
this.b=e},
dnw:function dnw(d){this.a=d},
dni:function dni(d,e){this.a=d
this.b=e},
dnx:function dnx(d){this.a=d},
dnh:function dnh(d){this.a=d},
dne:function dne(d,e){this.a=d
this.b=e},
dny:function dny(d,e,f){this.a=d
this.b=e
this.c=f},
dnz:function dnz(d){this.a=d},
dng:function dng(){},
dnA:function dnA(d){this.a=d},
anZ:function anZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjW:function bjW(){this.c=this.a=null},
drY:function drY(d,e){this.a=d
this.b=e},
drX:function drX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ak1:function ak1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azT:function azT(d,e,f,g,h,i,j,k,l,m){var _=this
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
cOt:function cOt(d){this.a=d},
cNO:function cNO(d,e){this.a=d
this.b=e},
cNE:function cNE(d){this.a=d},
cNF:function cNF(d){this.a=d},
cNY:function cNY(d){this.a=d},
cNV:function cNV(d){this.a=d},
cNW:function cNW(d){this.a=d},
cNX:function cNX(d,e,f){this.a=d
this.b=e
this.c=f},
cNQ:function cNQ(d){this.a=d},
cNP:function cNP(d){this.a=d},
cNG:function cNG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNT:function cNT(d){this.a=d},
cNS:function cNS(d){this.a=d},
cNR:function cNR(d,e){this.a=d
this.b=e},
cOg:function cOg(d){this.a=d},
cOa:function cOa(d){this.a=d},
cOd:function cOd(d){this.a=d},
cOc:function cOc(){},
cO9:function cO9(d){this.a=d},
cOb:function cOb(d,e){this.a=d
this.b=e},
cO8:function cO8(){},
cNL:function cNL(){},
cNM:function cNM(d,e){this.a=d
this.b=e},
cNN:function cNN(d){this.a=d},
cNJ:function cNJ(d,e){this.a=d
this.b=e},
cNK:function cNK(d,e){this.a=d
this.b=e},
cO0:function cO0(d,e){this.a=d
this.b=e},
cNU:function cNU(d){this.a=d},
cO1:function cO1(d){this.a=d},
cO2:function cO2(d,e){this.a=d
this.b=e},
cO3:function cO3(d,e){this.a=d
this.b=e},
cO4:function cO4(d,e){this.a=d
this.b=e},
cO5:function cO5(d,e,f){this.a=d
this.b=e
this.c=f},
cO6:function cO6(d){this.a=d},
cO7:function cO7(d){this.a=d},
cNZ:function cNZ(d,e){this.a=d
this.b=e},
cOf:function cOf(d){this.a=d},
cO_:function cO_(d,e){this.a=d
this.b=e},
cOs:function cOs(d){this.a=d},
cOl:function cOl(d){this.a=d},
cOo:function cOo(d){this.a=d},
cOi:function cOi(d,e){this.a=d
this.b=e},
cOm:function cOm(){},
cOn:function cOn(d,e){this.a=d
this.b=e},
cOj:function cOj(d){this.a=d},
cOk:function cOk(d){this.a=d},
cOq:function cOq(){},
cOp:function cOp(d){this.a=d},
cOh:function cOh(d,e){this.a=d
this.b=e},
cOr:function cOr(d){this.a=d},
cNH:function cNH(d){this.a=d},
cOe:function cOe(d,e){this.a=d
this.b=e},
cNI:function cNI(d,e,f){this.a=d
this.b=e
this.c=f},
aNg:function aNg(){},
aNh:function aNh(){},
aNi:function aNi(){},
aOf:function aOf(){},
c4Y(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4Z(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hX2(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_O(d,e){return C.hX3(d,e)},
hX3(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_O=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3D(d),$async$b_O)
case 3:p=g
if(p!=null){try{t=A.X.aP(0,p.c,null)
if(x.f.b(t)){s=C.hsI(B.a1(t,x.N,x.z))
if(s==null){u=new B.GX(D.a9x,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4Y(s,e,p.b)){u=new B.GX(D.aMR,null)
w=1
break}r=p.a?D.emV:D.aMQ
u=new B.GX(r,s)
w=1
break}}catch(o){}u=new B.GX(D.a9x,null)
w=1
break}s=C.hsJ(d)
if(s==null){u=new B.GX(D.a9x,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4Y(s,e,null)){u=new B.GX(D.aMR,null)
w=1
break}u=new B.GX(D.aMQ,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_O,v)},
hsJ(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d2(w,"\ufeff"))w=J.mZ(w,1)
v=!1
if(J.d2(w,"NGMYSNAP1|")){v=!0
w=A.cb.cE(0,A.cD.aK(J.mZ(w,10)))}u=A.X.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hX1(t):C.hsI(t)
return s}catch(r){return null}},
hX1(d){var w,v,u,t,s,r,q,p,o,n=new C.c4V(),m=new C.c4U(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w5(v,u,t,s,r,A.i.M(q==null?0:q))}else p=null
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
return new B.a7u("","",v,u,t,s,r,q,n,m,o,p,A.iJ,new B.V(Date.now(),0,!1),-1)},
hsI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4X()
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
n=new B.w5(t,s,r,q,p,A.i.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.B(new B.ee(J.b9(m,new C.c4W(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
f=f==null?null:A.i.M(f)
return new B.a7u(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hcr(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hcr=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4T(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hs(B.L_(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hcr,v)},
XD:function XD(d,e){this.a=d
this.b=e},
c4V:function c4V(){},
c4U:function c4U(){},
c4X:function c4X(){},
c4W:function c4W(d){this.a=d},
ijR(d){return B.ce(null,A.b6,!0,null,new C.fEa(),d,null,!0,!0,x.N)},
ik3(d,e,f,g){return B.ce(null,A.b6,!0,null,new C.fFn(g,f,e),d,null,!0,!0,x.y)},
apx:function apx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEY:function aEY(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dIu:function dIu(d,e){this.a=d
this.b=e},
dIv:function dIv(d){this.a=d},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIj:function dIj(d){this.a=d},
dIt:function dIt(d){this.a=d},
dIs:function dIs(d,e){this.a=d
this.b=e},
dIi:function dIi(d,e){this.a=d
this.b=e},
dIh:function dIh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIk:function dIk(d){this.a=d},
dIr:function dIr(){},
dIp:function dIp(d){this.a=d},
dIq:function dIq(d,e){this.a=d
this.b=e},
dIm:function dIm(){},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIo:function dIo(d,e){this.a=d
this.b=e},
dIw:function dIw(d){this.a=d},
a25:function a25(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvD:function bvD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0J:function a0J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmn:function bmn(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dIA:function dIA(d){this.a=d},
dIx:function dIx(d,e){this.a=d
this.b=e},
dIy:function dIy(d,e){this.a=d
this.b=e},
dIz:function dIz(d){this.a=d},
a0K:function a0K(d){this.a=d},
bmo:function bmo(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dIB:function dIB(d,e){this.a=d
this.b=e},
fEa:function fEa(){},
fFn:function fFn(d,e,f){this.a=d
this.b=e
this.c=f},
ag4:function ag4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9l:function f9l(d){this.a=d},
f9m:function f9m(d){this.a=d},
Rk:function Rk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_R:function a_R(d){this.a=d},
aC9:function aC9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhp:function dhp(d){this.a=d},
dhm:function dhm(){},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
VJ(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O4(s),$async$VJ)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apO(s,t),$async$VJ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VJ,v)},
hXl(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5H(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fK(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.v(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5H:function c5H(){},
ipv(d){return A.d.dM(A.E6,new C.fPB(d),new C.fPC()).r},
fPB:function fPB(d){this.a=d},
fPC:function fPC(){},
aq3:function aq3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmv:function bmv(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dOY:function dOY(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOP:function dOP(d,e,f){this.a=d
this.b=e
this.c=f},
dOU:function dOU(d){this.a=d},
dOR:function dOR(d,e,f){this.a=d
this.b=e
this.c=f},
dOV:function dOV(d){this.a=d},
dOQ:function dOQ(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOS:function dOS(d){this.a=d},
dOT:function dOT(d){this.a=d},
hun(d){var w=B.cdT(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
hup(d){return B.ce(null,A.w.j(0.82),!0,null,new C.cdY(),d,null,!0,!0,x.H)},
a89:function a89(d){this.a=d},
cdY:function cdY(){},
cdX:function cdX(d){this.a=d},
hIn(){var w=new B.V(Date.now(),0,!1),v=w.bQ(B.dv(4-B.lA(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.i.be(A.o.ar(v.bA(B.c0(B.bD(u),B.bL(u),B.bX(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fuk(d,e){var w,v,u,t,s,r,q=B.H8(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.u(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.az(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
iei(d,e){var w,v,u,t,s,r,q,p=B.H8(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.i.M(w)
return w==null?0:w}}return 0},
iz9(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H8(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ikJ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H8(b5),b2=B.cfe(),b3=C.hIn()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
q=B.aI(r.h(s,a4))
o=q==null?a1:A.i.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.u(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a8(u)
v=B.aI(w.h(u,a4))
v=v==null?a1:A.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aI(w.h(u,"outcome"))
w=w==null?a1:A.i.M(w)
return w==null?1:w}n=new C.fGc()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.u(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.u(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fuk(b4,b5)
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
a0=g==null?a1:A.i.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.cb(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aI(d.h(0,a8))
a0=g==null?a1:A.i.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.cb(h,a1)}}}return a1},
hEE(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hiB(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ikK(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H8(a3),a1=new C.fGd()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,"+local.ngmy")?A.a.az(p,0,p.length-11):p)!==a0)continue
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
q=new C.fGe(v+r+q>1,l)
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
return C.hiB(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ikI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.i.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hIn():B.cfe()
t=v+"|"+u
s=C.fuk(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=B.aI(h.h(s,k))
q=r==null?m:A.i.M(r)
if(q==null)q=0
r=B.aI(h.h(s,j))
p=r==null?m:A.i.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aw(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
itk(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bmd()
w=C.ikK(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahB(d,a0,w)
return w}v=C.ikJ(d,a0)
if(v!=null){if(v===3)++d.f
C.ahB(d,a0,v)
return v}u=C.ikI(d,a0,a1)
if(u!=null)return new C.fWV(d,a1,a0).$1(u)
t=C.fuk(d,a0)
s=J.a8(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.i.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.i.M(s)
if(p==null)p=0
o=new C.fWX(d,a1)
if(C.iei(d,a0)>0){n=o.$0()
C.iz9(d,a0)
C.ahB(d,a0,n)
return n}if(q>=d.c){n=new C.fWW(d,a1).$0()
C.ahB(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahB(d,a0,n)
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
C.ahB(d,a0,e)
return e},
cf6(d){var w=0,v=B.j(x.y),u
var $async$cf6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cf5(d),$async$cf6)
case 3:if(f){u=!0
w=1
break}u=B.cf5(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf6,v)},
ahB(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fuk(d,e),s=J.a8(t),r=B.aI(s.h(t,v)),q=r==null?null:A.i.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fGc:function fGc(){},
fGd:function fGd(){},
fGe:function fGe(d,e){this.a=d
this.b=e},
fWV:function fWV(d,e,f){this.a=d
this.b=e
this.c=f},
fWX:function fWX(d,e){this.a=d
this.b=e},
fWW:function fWW(d,e){this.a=d
this.b=e},
apw:function apw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bml:function bml(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dI6:function dI6(d){this.a=d},
dI5:function dI5(d){this.a=d},
dI7:function dI7(d){this.a=d},
dI4:function dI4(d,e){this.a=d
this.b=e},
aNO:function aNO(){},
Ov:function Ov(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgo:function cgo(){},
cgn:function cgn(){},
arR:function arR(d,e,f){this.c=d
this.d=e
this.a=f},
hdr(d,e,f){return B.ce(null,A.w.j(0.88),!0,null,new C.cgQ(f,e),d,null,!0,!0,x.H)},
i08(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iH[u-1]:v)+" "+B.v(t)+", "+B.v(w)}return s},
OD:function OD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgQ:function cgQ(d,e){this.a=d
this.b=e},
bn5:function bn5(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7H:function e7H(){},
e7I:function e7I(){},
e7J:function e7J(d,e){this.a=d
this.b=e},
e7K:function e7K(d,e){this.a=d
this.b=e},
aOp:function aOp(){},
hIj(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blL(new C.fRZ(w))
w=w.a
return w==null?null:w.c.a},
hIb(d){$.aU.x1$.push(new C.fRM(d))},
hIw(d){var w=$.tr().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hIj(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.ec()},
hIv(d){C.hEN(d,0)},
hEN(d,e){var w,v
if(e>4)return
w=d==null?$.tr().gbl():d
if(w==null||w.c==null)return
v=C.hIj(w)
if(v==="GameCenterScreen")return
if(D.flx.q(0,v)&&w.q8()){w.ec()
$.aU.x1$.push(new C.fCu(w,e))}},
aSo(d,e,f){return B.eb(B.cf(new C.fTl(e,d,f)),e,!0)},
fRZ:function fRZ(d){this.a=d},
fRM:function fRM(d){this.a=d},
fRL:function fRL(d){this.a=d},
fCu:function fCu(d,e){this.a=d
this.b=e},
fTl:function fTl(d,e,f){this.a=d
this.b=e
this.c=f},
arV(d,e){var w=0,v=B.j(x.H),u
var $async$arV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WO(e)
w=2
return B.b(B.arU(d,u),$async$arV)
case 2:B.a8M(d,u)
return B.h(null,v)}})
return B.i($async$arV,v)},
vf(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vf=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z2(g)
if(o.length===0){w=1
break}t=e==null?B.Ma(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OE(o),$async$vf)
case 3:q=m
if(j!=null&&j.length!==0&&J.rq(q,new C.ch3(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mX(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arV(o,q),$async$vf)
case 4:if(i==null||r==null||s)C.a8O(o).bF(new C.ch4(),x.S).eF(new C.ch5())
case 1:return B.h(u,v)}})
return B.i($async$vf,v)},
a8O(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hJy
m=B.z2(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OE(m),$async$a8O)
case 3:t=f
s=J.cE(t)
if(!s.aS(t,new C.ch2())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8O)
case 4:r=f
q=J.a8(r)
if(q.gL(r)!==s.gL(t)){w=1
break}for(p=!1,o=0;o<s.gL(t);++o)if(A.X.av(s.h(t,o).aj(),null)!==A.X.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arV(m,r),$async$a8O)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8O,v)},
b2g(d){var w=0,v=B.j(x.S),u,t
var $async$b2g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hdu(d,!1),$async$b2g)
case 3:t=J
w=4
return B.b(C.arW(d,!1),$async$b2g)
case 4:u=t.dH(f,new C.ch1(new B.V(Date.now(),0,!1).bQ(-864e8))).gL(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2g,v)},
arW(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z2(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OE(r),$async$arW)
case 3:t=g
s=B.WO(t)
if(s.length!==J.ad(t))C.arV(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arW,v)},
ir3(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bA(d).a,r=A.o.ar(s,6e7)
if(r<1)return"Just now"
w=A.o.ar(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ar(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.d4(d),12)===0?12:A.o.F(B.d4(d),12)
s=A.iH[B.bL(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fM(d)),2,"0")
u=B.d4(d)<12?"AM":"PM"
return s+" "+B.bX(d)+r+" \xb7 "+v+":"+w+" "+u},
bDL(d){var w=A.i.ac(Math.abs(d),2).split(".")
return"$"+B.nR(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fzd(),null)+"."+w[1]},
bHv(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arW(e,!1),$async$bHv)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hdu(e,!0).bF(new C.h57(e),t).bF(new C.h58(),t).eF(new C.h59())
w=4
return B.b(B.bU(A.L,null,new C.h5a(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHv)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHv,v)},
hgv(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bB,new B.dl(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.hD,w,w,w),1)},
e7M(d,e,f){var w=null,v=A.w.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dl(A.dw,A.a5,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.D,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.P5,w,w,w),1)},
ch3:function ch3(d){this.a=d},
ch4:function ch4(){},
ch5:function ch5(){},
ch2:function ch2(){},
ch1:function ch1(d){this.a=d},
fzd:function fzd(){},
h57:function h57(d){this.a=d},
h58:function h58(){},
h59:function h59(){},
h5a:function h5a(d,e){this.a=d
this.b=e},
h56:function h56(d,e){this.a=d
this.b=e},
h55:function h55(d){this.a=d},
aeW:function aeW(d,e){this.c=d
this.a=e},
e7O:function e7O(){},
e7P:function e7P(){},
e7Q:function e7Q(){},
e7R:function e7R(d){this.a=d},
e7T:function e7T(){},
e7S:function e7S(d){this.a=d},
aeV:function aeV(d,e){this.c=d
this.a=e},
e7N:function e7N(){},
bHw(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hS(A.b6,!1,w,d,new C.h5d(j,i,h,g,e,f),null,A.eX,!1,x.H)},
h5d:function h5d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h5b:function h5b(d,e){this.a=d
this.b=e},
h5c:function h5c(d,e){this.a=d
this.b=e},
aCT:function aCT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biB:function biB(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bv$=e
_.a9$=f
_.c=_.a=null},
dox:function dox(d,e){this.a=d
this.b=e},
dow:function dow(){},
afj:function afj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNj:function aNj(){},
asG(d,e,f){return new C.b36(f,d,e,null)},
i0O(d){var w=B.a(A.i.ac(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nR(w[0],v,new C.ciO(),null)
return A.d.aN(w,".")},
b2j(){var w=$.tV
if((w>0?$.tV=w-1:w)<=0)$.tV=0},
aiI(d,e){var w=0,v=B.j(x.H),u
var $async$aiI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hlB
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiI)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiI,v)},
b36:function b36(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciP:function ciP(d){this.a=d},
ciO:function ciO(){},
O7:function O7(){},
c6d:function c6d(){},
hkV(d){if(d>0)return"+"+d
return""+d},
hk9(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fTm(d,e){var w=J.u(e,d)
if(w==null)w=B.fS8().h(0,d)
return w==null?90:w},
fy7(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.k9(u,new C.fy8(),u.$ti.k("k9<cj.E,q>")))
A.d.e0(v,e)
return v},
hDF(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pN(s,3,s.$ti.k("cj.E")))
A.d.e0(t,e)
return t},
im9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JG("Simplify \u221a("+t*s+"x^"+q+")",m,C.hDF(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.v(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JG("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fy7(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JG("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fy7(g,b2)))}else b1.push(new C.JG("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fy7(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h5()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.i.fM(a4)?""+A.i.M(a4):"\u221a"+a3
b1.push(new C.JG("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fy7(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JG("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hDF(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
ixd(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.du(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.e0(t,A.cU)
v=A.d.hh(t)
if(v!==d)return v}return new B.du(t,x.bJ).hh(0)},
JG:function JG(d,e,f){this.a=d
this.b=e
this.c=f},
fy8:function fy8(){},
are:function are(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFJ:function aFJ(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e0g:function e0g(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0l:function e0l(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0n:function e0n(d,e){this.a=d
this.b=e},
arX:function arX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFZ:function aFZ(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e7Z:function e7Z(d,e,f){this.a=d
this.b=e
this.c=f},
e8_:function e8_(d){this.a=d},
e7V:function e7V(d){this.a=d},
e7X:function e7X(d,e){this.a=d
this.b=e},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7Y:function e7Y(d,e){this.a=d
this.b=e},
e7U:function e7U(d){this.a=d},
hY_(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bQ(36e8)
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
return new C.rT(w,u,t,s,r,q==null?null:J.k(q))},
a8W(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8W)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.u(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d6(s,x.f)
p=B.cF(p,new C.chC(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.chD())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[calendar-memory] load: "+B.v(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8W,v)},
asc(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$asc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8W(d),$async$asc)
case 2:r=g
q=J.cE(r)
q.bq(r,new C.chz(e))
q.I(r,e)
q.b0(r,new C.chA())
w=3
return B.b(B.az(),$async$asc)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,ac<q,@>>")
q=B.B(new B.N(q,new C.chB(),s),s.k("ak.E"))
w=4
return B.b(u.aG("String","ngmy_helper_calendar_v1_"+t,A.X.av(q,null)),$async$asc)
case 4:return B.h(null,v)}})
return B.i($async$asc,v)},
i0l(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dH(d,new C.chE(v,v.bQ(B.dv(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
hv_(d){var w,v,u,t,s,r,q,p,o,n,m=C.i0l(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cU(m,0,B.dy(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.d4(s),12)===0?12:A.o.F(B.d4(s),12)
q=B.d4(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fM(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bL(s)+"/"+B.bX(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rT:function rT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chC:function chC(){},
chD:function chD(){},
chz:function chz(d){this.a=d},
chA:function chA(){},
chB:function chB(){},
chE:function chE(d,e){this.a=d
this.b=e},
hY0(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
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
return new C.rU(w,u,t,s,r,q,J.k(p==null?"user":p))},
hth(d){var w=A.o.F(B.d4(d),12)===0?12:A.o.F(B.d4(d),12),v=B.d4(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bX(d)+" "+w+":"+A.a.b1(A.o.v(B.fM(d)),2,"0")+" "+v},
VX(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VX)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.u(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d6(s,x.f)
p=B.cF(p,new C.c9l(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.c9m())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[call-memory] load: "+B.v(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VX,v)},
b0B(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0B=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0B)
case 2:u=g
t=B.cU(e,0,B.dy(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,ac<q,@>>")
r=B.B(new B.N(t,new C.c9j(),r),r.k("ak.E"))
w=3
return B.b(u.aG("String","ngmy_call_memory_v1_"+s,A.X.av(r,null)),$async$b0B)
case 3:return B.h(null,v)}})
return B.i($async$b0B,v)},
b0C(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0C=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.VX(d),$async$b0C)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c9k())
w=5
return B.b(C.b0B(d,q),$async$b0C)
case 5:return B.h(null,v)}})
return B.i($async$b0C,v)},
c9n(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9n=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VX(d),$async$c9n)
case 3:t=s.dH(g,new C.c9o(e.bQ(-72e8),e.bQ(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9n,v)},
hti(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWL()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.az(s,0,177)+"\u2026":s)+"\n"}}r=r.gL(d)>e?u+("\u2026 and "+(r.gL(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
it4(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bL(p),B.bX(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bQ(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bQ(r)
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
return B.c0(B.bD(n),B.bL(n),B.bX(n),u,t,0,0,0)},
hK3(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rU:function rU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9l:function c9l(){},
c9m:function c9m(){},
c9j:function c9j(){},
c9k:function c9k(){},
c9o:function c9o(d,e){this.a=d
this.b=e},
hv2(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lU(t,w,v,u==null?null:J.k(u))},
i0r(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.chM(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqK
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iC(r,w,v,u,t,typeof d.h(0,s)=="number"?A.i.M(B.dF(d.h(0,s))):0)},
i0q(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.iew(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.i.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.i.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chK(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.iq(p,w,v,u,s==null?D.aDz:s,t)},
iex(d){var w,v,u,t=B.J([F.zU,"investments",A.nV,"games",A.jz,"loans",A.hH,"withdrawals",A.jT,"deposits",A.l7,"civic",A.kl,"store",A.r7,"jobs",A.nU,"refunds",A.eY,"account",A.lw,"music",A.zK,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a4(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
iew(d){switch(d){case"investments":return F.zU
case"games":return A.nV
case"loans":return A.jz
case"withdrawals":return A.hH
case"deposits":return A.jT
case"civic":return A.l7
case"store":return A.kl
case"jobs":return A.r7
case"refunds":return A.nU
case"account":return A.eY
case"music":return A.lw
default:return A.zK}},
ni(d){var w=B.a([new C.lU("text",d,null,null)],x.a)
return w},
aiE(){var w=null,v=x.v
return B.a([new C.iq("investments","Investments",F.zU,4280468830,B.a([new C.iC("inv1","How do I buy an investment plan?",C.ni("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iC("inv2","When do I get paid from my plan?",C.ni("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iC("inv3","Can I have more than one plan?",C.ni("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iq("games","Games",A.nV,4287323382,B.a([new C.iC("gam1","How do NGMY games work?",C.ni("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iC("gam2","Why did my game payout change?",C.ni("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iq("loans","Loans",A.jz,4294538006,B.a([new C.iC("loan1","How do I apply for a loan?",C.ni("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iC("loan2","What is the repayment period?",C.ni("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iq("withdrawals","Withdrawals",A.hH,4282090230,B.a([new C.iC("wd1","How do I withdraw money?",C.ni("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iC("wd2","Why is my withdrawal pending?",C.ni("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iq("deposits","Deposits",A.jT,4279548070,B.a([new C.iC("dep1","How do I deposit funds?",C.ni("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iC("dep2","How long until my deposit posts?",C.ni("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iq("civic","Civic Registry",A.l7,4289170426,B.a([new C.iC("civ1","What is Civic Registry?",C.ni("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iC("civ2","What does \u201cmissed\u201d mean on my profile?",C.ni("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iq("store","NGMY Store",A.kl,4293675161,B.a([new C.iC("sto1","How do I buy from NGMY Store?",C.ni("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iC("sto2","How do I sell in the store?",C.ni("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iq("jobs","Jobs & Creator",A.r7,4293548044,B.a([new C.iC("job1","How do I find jobs?",C.ni("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iC("job2","How do I post a job?",C.ni("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iq("refunds","Refunds",A.nU,4293870660,B.a([new C.iC("ref1","Can I get a refund?",C.ni("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iC("ref2","How long do refunds take?",C.ni("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iq("account","Account",A.eY,4281908728,B.a([new C.iC("acc1","How do I update my profile?",C.ni("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iC("acc2","I forgot my password \u2014 what now?",C.ni("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iq("music","Music Charts",A.lw,4290807036,B.a([new C.iC("mus1","What are Music Charts?",C.ni("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iC("mus2","How do I upload music?",C.ni("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iq("help","Help Center",A.zK,4279080072,B.a([new C.iC("hlp1","Where can I get live help?",C.ni("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iC("hlp2","How do daily Helper limits work?",C.ni("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hv3(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiE()
v=v.dO(d,new C.chP(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chQ())
return w.length===0?C.aiE():w},
hv4(d){var w=J.b9(d,new C.chR(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
ase(d){return C.i0s(d)},
i0s(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$ase=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ase)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_kb_v1",A.X.av(C.hv4(d),null)),$async$ase)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.aa(p)
$.am.$1("[helper kb] local save: "+B.v(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ase,v)},
chO(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chO)
case 7:r=e
q=B.aW(J.u(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiE()
u=l
w=1
break}p=A.X.aP(0,q,null)
if(!x.f.b(p)){l=C.aiE()
u=l
w=1
break}o=J.u(p,"categories")
if(!x.j.b(o)){l=C.aiE()
u=l
w=1
break}n=C.hv3(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.aa(j)
$.am.$1("[helper kb] local load: "+B.v(m))
l=C.aiE()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chO,v)},
b2F(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2F)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2F)
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
$.am.$1("[helper kb] cloud fetch: "+B.v(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b2F,v)},
b2G(d){return C.i0t(d)},
i0t(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2G=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2G)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hR("ngmy_helper_kb",d,!1,!1,A.cS,null),$async$b2G)
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
$.am.$1("[helper kb] cloud upsert: "+B.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b2G,v)},
asf(){var w=0,v=B.j(x.I),u,t,s,r
var $async$asf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chO(),$async$asf)
case 3:s=e
w=4
return B.b(C.b2F(),$async$asf)
case 4:r=e
w=r!=null&&x.j.b(J.u(r,"categories"))?5:6
break
case 5:t=C.hv3(x.j.a(J.u(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.ase(t),$async$asf)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asf,v)},
chS(d){var w=0,v=B.j(x.y),u
var $async$chS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ase(d),$async$chS)
case 3:u=C.b2G(C.hv4(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chS,v)},
lU:function lU(d,e,f,g){var _=this
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
chN:function chN(){},
chM:function chM(){},
iq:function iq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chL:function chL(){},
chK:function chK(){},
chP:function chP(){},
chQ:function chQ(){},
chR:function chR(){},
bc1:function bc1(d){this.a=d},
WW:function WW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGa:function aGa(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ec4:function ec4(){},
ec5:function ec5(){},
ebZ:function ebZ(d){this.a=d},
ec_:function ec_(d){this.a=d},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebJ:function ebJ(d){this.a=d},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebH:function ebH(d){this.a=d},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebY:function ebY(d){this.a=d},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(d,e,f){this.a=d
this.b=e
this.c=f},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e,f){this.a=d
this.b=e
this.c=f},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebS:function ebS(d,e,f){this.a=d
this.b=e
this.c=f},
ebM:function ebM(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ec1:function ec1(){},
ec0:function ec0(d,e){this.a=d
this.b=e},
QI:function QI(d,e){this.c=d
this.a=e},
be_:function be_(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cXq:function cXq(d){this.a=d},
cXp:function cXp(d,e){this.a=d
this.b=e},
cXn:function cXn(d,e){this.a=d
this.b=e},
cXr:function cXr(d){this.a=d},
cXo:function cXo(d,e){this.a=d
this.b=e},
cXm:function cXm(d,e){this.a=d
this.b=e},
cXs:function cXs(d){this.a=d},
cXt:function cXt(d,e){this.a=d
this.b=e},
a1v:function a1v(d,e,f){this.c=d
this.d=e
this.a=f},
aIc:function aIc(){this.d=$
this.c=this.a=null},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4g:function f4g(d){this.a=d},
f4m:function f4m(){},
f4l:function f4l(d,e){this.a=d
this.b=e},
f4k:function f4k(d,e){this.a=d
this.b=e},
f4h:function f4h(d,e){this.a=d
this.b=e},
f4j:function f4j(d,e,f){this.a=d
this.b=e
this.c=f},
f4i:function f4i(d,e,f){this.a=d
this.b=e
this.c=f},
a1u:function a1u(d,e){this.c=d
this.a=e},
aIb:function aIb(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f4b:function f4b(d,e){this.a=d
this.b=e},
f49:function f49(d){this.a=d},
f4a:function f4a(d,e){this.a=d
this.b=e},
f4d:function f4d(d,e){this.a=d
this.b=e},
f4e:function f4e(d){this.a=d},
f4c:function f4c(d,e){this.a=d
this.b=e},
i0o(d){var w=new B.N(d,new C.chH(),B.T(d).k("N<1,q>")).aN(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chI(d,e,f){return C.i0p(d,e,f)},
i0p(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chI=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Le([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rm(B.nm(b3),C.i0o(b6)+"\n\nAdmin instruction:\n"+b4,A.i6,null,null),$async$chI)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Le([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d2(s,"```"))s=A.a.el(J.hoC(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.X.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Le([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Le([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=B.a1(a3.a(J.u(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.v(k)
h=J.u(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=B.a1(a3.a(J.u(h,f)),a4,a5)
d=J.u(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aT(d);a9.C();){a1=a9.gP(a9)
J.c4(a0,C.hv2(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.u(e,"answer")
J.c4(a0,new C.lU("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.v(f)
b1=J.u(e,"question")
J.c4(g,new C.iC("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.u(e,"printable"),!0),f))}a9=J.u(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.u(j,"iconKey")
b0=C.i0n(J.k(b0==null?"help":b0))
b1=typeof J.u(j,"colorValue")=="number"?A.i.M(B.dF(J.u(j,"colorValue"))):4284773515
J.c4(m,new C.iq(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Le([m,null,p,a3])
w=1
break}catch(b7){a2=B.aa(b7)
a3=B.v(a2)
a4=B.a([],x.Y)
u=new B.Le([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chI,v)},
i0n(d){switch(d){case"investments":return F.zU
case"games":return A.nV
case"loans":return A.jz
case"withdrawals":return A.hH
case"deposits":return A.jT
case"civic":return A.l7
case"store":return A.kl
case"jobs":return A.r7
case"refunds":return A.nU
case"account":return A.eY
case"music":return A.lw
default:return A.zK}},
irs(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fTV(f))
if(w>=0){t[w]=J.fl(e).cQY(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bgg(u)
return t},
chH:function chH(){},
fTV:function fTV(d){this.a=d},
dek:function dek(d){this.a=d},
WX:function WX(d,e,f){this.c=d
this.d=e
this.a=f},
aGc:function aGc(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ecF:function ecF(){},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
eco:function eco(d,e){this.a=d
this.b=e},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecp:function ecp(d,e,f){this.a=d
this.b=e
this.c=f},
ech:function ech(){},
eci:function eci(){},
ecj:function ecj(){},
eck:function eck(){},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecB:function ecB(){},
ecC:function ecC(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecD:function ecD(d){this.a=d},
ect:function ect(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
i8p(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.GA(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.az(d,t,q)
o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.G,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cK,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.nj,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aX(d,t)
m.push(B.cR(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u7(A.cw,n,n,n,A.eU,n,n,!0,n,B.cR(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.bX)},
dsQ:function dsQ(d){this.a=d},
aDN:function aDN(d,e){this.a=d
this.b=e},
asd:function asd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGb:function aGb(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ece:function ece(d,e){this.a=d
this.b=e},
ecf:function ecf(d,e){this.a=d
this.b=e},
ec6:function ec6(d){this.a=d},
ec7:function ec7(d){this.a=d},
ecg:function ecg(){},
ec9:function ec9(d,e){this.a=d
this.b=e},
ec8:function ec8(d,e){this.a=d
this.b=e},
ecb:function ecb(){},
ecd:function ecd(){},
ecc:function ecc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eca:function eca(d,e){this.a=d
this.b=e},
aDL:function aDL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adq:function adq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2E:function b2E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chJ:function chJ(d){this.a=d},
adh:function adh(d,e,f){this.c=d
this.d=e
this.a=f},
cQI:function cQI(d){this.a=d},
cQJ:function cQJ(){},
cQK:function cQK(d){this.a=d},
aDM:function aDM(d,e,f){this.c=d
this.d=e
this.a=f},
bk9:function bk9(){this.c=this.a=this.d=null},
dsR:function dsR(d,e){this.a=d
this.b=e},
dsT:function dsT(d,e){this.a=d
this.b=e},
dsS:function dsS(d){this.a=d},
i1W(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i1X(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i1V(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hDA(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fxR(),x.cc).gL(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
isI(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i1V(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
at3:function at3(d,e){this.a=d
this.b=e},
JL:function JL(d,e){this.a=d
this.b=e},
rZ:function rZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxR:function fxR(){},
asg:function asg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGd:function aGd(d,e,f,g,h,i,j){var _=this
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
ecT:function ecT(d,e){this.a=d
this.b=e},
ecK:function ecK(d){this.a=d},
ecM:function ecM(){},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecO:function ecO(d){this.a=d},
ecP:function ecP(){},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecR:function ecR(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecL:function ecL(d,e){this.a=d
this.b=e},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecX:function ecX(){},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e){this.a=d
this.b=e},
ed1:function ed1(d){this.a=d},
ed0:function ed0(d){this.a=d},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ed2:function ed2(d,e){this.a=d
this.b=e},
ecU:function ecU(d,e){this.a=d
this.b=e},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d){this.a=d},
aOx:function aOx(){},
chU(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.Ur
w=1
break}w=3
return B.b(B.az(),$async$chU)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.u(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Ur
w=1
break}try{q=B.a1(x.f.a(A.X.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WY(p,o,n,q)
w=1
break}catch(l){s=B.aa(l)
$.am.$1("[helper-perms] load: "+B.v(s))
u=D.Ur
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chU,v)},
ash(d,e){var w=0,v=B.j(x.H),u
var $async$ash=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$ash)
case 4:w=3
return B.b(g.aG("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.X.av(e.aj(),null)),$async$ash)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ash,v)},
chT(d){var w=0,v=B.j(x.gp),u,t
var $async$chT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WY(!0,!0,!0,!0)
w=3
return B.b(C.ash(d,t),$async$chT)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chT,v)},
hK4(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hK2(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WY:function WY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHA(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHA=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2z(h),$async$bHA)
case 3:if(j){w=1
break}w=4
return B.b(C.as9(h),$async$bHA)
case 4:if(d.e==null){w=1
break}t=B.qY(d,!0)
t.toString
s=B.dm()
s.b=B.pG(new C.h64(g,e,f,s),!1,!1)
t.me(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHA,v)},
h64:function h64(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h63:function h63(d){this.a=d},
a0f:function a0f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDb:function aDb(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dqb:function dqb(d){this.a=d},
dqc:function dqc(d,e,f){this.a=d
this.b=e
this.c=f},
dqh:function dqh(){},
dqg:function dqg(d){this.a=d},
dqd:function dqd(d){this.a=d},
dqe:function dqe(){},
dqf:function dqf(d){this.a=d},
aNo:function aNo(){},
i1p(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i1o(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asP(d){return C.i1m(d)},
i1m(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asP)
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
$.am.$1("[local deposit qr] load: "+B.v(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asP,v)},
b3u(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3u=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i1p(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3u)
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
q=B.aa(m)
$.am.$1("[local deposit qr] code lookup: "+B.v(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b3u,v)},
hvv(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aX(v,14))
return w.length===0?null:w}return null},
i1n(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.cjI(A.a.i(d.toLowerCase()),w))},
hvw(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qk(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qk(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qk(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qk(!1,0,"Verification code does not match this deposit.")
if(!C.i1n(e,d,w))return new C.qk(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hdK(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_S
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OU(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OU(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OU(!0,!1,!1,!1)},
cjO(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hvv(d)
if(s==null){u=D.Ut
w=1
break}w=3
return B.b(C.asP(s),$async$cjO)
case 3:t=g
if(t==null){u=D.Ut
w=1
break}u=C.hdK(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjO,v)},
b3w(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3w=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3u(d),$async$b3w)
case 3:s=g
if(s==null||s.length===0){u=D.Ut
w=1
break}w=4
return B.b(C.asP(s),$async$b3w)
case 4:t=g
if(t==null){u=D.Ut
w=1
break}u=C.hdK(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3w,v)},
cjP(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjP=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3u(d),$async$cjP)
case 3:t=j
if(t==null||t.length===0){u=new C.qk(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xg(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjP,v)},
Xg(d,e,f,g,h){return C.i1q(d,e,f,g,h)},
i1q(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xg=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hvv(a4)
if(a0==null){u=new C.qk(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asP(a0),$async$Xg)
case 3:k=a8
if(k==null){u=new C.qk(!1,0,y.m)
w=1
break}j=C.hdK(k,a5)
if(j.b){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qk(!1,0,y.u)
w=1
break}if(j.c){u=new C.qk(!1,0,y.j)
w=1
break}i=C.hvw(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.u(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qk(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xg)
case 8:p=a8
if(p==null){u=new C.qk(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.u(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}o=C.hvw(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dI(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hR("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cS,null),$async$Xg)
case 9:n=J.u(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hR("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cS,null),$async$Xg)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.aa(a1)
$.am.$1("[local deposit qr] redeem: "+B.v(l))
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
return B.i($async$Xg,v)},
OU:function OU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qk:function qk(d,e,f){this.a=d
this.b=e
this.c=f},
cjI:function cjI(d,e){this.a=d
this.b=e},
cjW(d,e){var w
B.hkw(d,e,!1)
B.rl(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bv(!0,!1,d.d,w)},
a9i(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bL(d)===e.gcg()&&B.bX(d)===e.gcv()},
i1y(d){var w=B.d4(d)*60+B.fM(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hvD(d){if(B.d4(d)>=12)return!1
if(B.lA(d)===6||B.lA(d)===7)return!1
return!0},
ck_(d){var w=d.c?d.bU():d
return w.cZ(B.c0(B.bD(w),B.bL(w),B.bX(w),12,0,0,0,0))},
hdO(d,e){var w,v,u,t=d.gDb()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9i(d.fx,e)&&d.fy>0.0001)return A.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.ck_(w))return 0
v=B.c0(e.gck(),e.gcg(),e.gcv(),12,0,0,0,0)
if(!e.cZ(v))return t
if(!e.cb(w))return 0
u=A.o.ar(v.bA(w).a,1000)
if(u<=0)return t
return A.i.D(t*(A.o.D(A.o.ar(e.bA(w).a,1000),0,u)/u),0,t)},
hdN(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9i(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.cjV(s))&&C.ck_(t)){r=d.gDb()
v=r>0
if(v){q=new B.d9(s,d.a,r,A.hc,A.fz,"Clock-in daily earnings (local)",null,null,A.cx,p)
C.cjW(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9i(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9i(o,p)&&!C.ck_(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjV:function cjV(d){this.a=d},
igH(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iy5(d,e,f,g,h,i){return B.hF(d,new C.asQ(f,e,i,g,h,null),!0,null,x.H)},
hzT(d){var w,v,u=d.c?d.bU():d,t=B.d4(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bX(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fM(u)),2,"0")+" "+v},
hHO(d){var w=d.x
if(w===A.dI)return"Processing"
if(w===A.kP)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ip0(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fX)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
igl(d){var w=d.d,v=w===A.fX||w===A.pg||w===A.hc||w===A.kQ,u=d.x
if(u===A.dI)return w===A.f4?-d.c:0
if(u!==A.cx)return 0
w=d.c
return v?w:-w},
ipz(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b0(q,new C.fPI())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.igl(s)
if(r<0)r=0
w.n(0,s.a,new B.brI(v,r))}return w},
asQ:function asQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGA:function aGA(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
erk:function erk(d){this.a=d},
es0:function es0(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
erJ:function erJ(d,e){this.a=d
this.b=e},
erK:function erK(){},
erL:function erL(d){this.a=d},
erM:function erM(){},
erN:function erN(d){this.a=d},
erO:function erO(d,e,f){this.a=d
this.b=e
this.c=f},
erP:function erP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erE:function erE(d,e){this.a=d
this.b=e},
erl:function erl(d,e,f){this.a=d
this.b=e
this.c=f},
erF:function erF(){},
erG:function erG(){},
erH:function erH(d){this.a=d},
erI:function erI(){},
erp:function erp(d,e){this.a=d
this.b=e},
erq:function erq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ery:function ery(){},
erv:function erv(d){this.a=d},
erw:function erw(d,e){this.a=d
this.b=e},
erx:function erx(d,e){this.a=d
this.b=e},
erz:function erz(d){this.a=d},
erA:function erA(d,e,f){this.a=d
this.b=e
this.c=f},
erB:function erB(d){this.a=d},
erD:function erD(d){this.a=d},
erC:function erC(d){this.a=d},
err:function err(d){this.a=d},
ers:function ers(d,e,f){this.a=d
this.b=e
this.c=f},
erT:function erT(){},
erU:function erU(){},
erY:function erY(d){this.a=d},
erR:function erR(d){this.a=d},
erZ:function erZ(d){this.a=d},
erQ:function erQ(d){this.a=d},
es_:function es_(d){this.a=d},
erV:function erV(d){this.a=d},
erW:function erW(d){this.a=d},
erX:function erX(d){this.a=d},
erS:function erS(d){this.a=d},
ero:function ero(d){this.a=d},
ern:function ern(d){this.a=d},
erm:function erm(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
aDZ:function aDZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
duB:function duB(){},
duC:function duC(){},
duD:function duD(d,e,f){this.a=d
this.b=e
this.c=f},
duA:function duA(d){this.a=d},
duE:function duE(d,e){this.a=d
this.b=e},
duz:function duz(d){this.a=d},
aDY:function aDY(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkT:function bkT(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
duu:function duu(d){this.a=d},
duv:function duv(d){this.a=d},
duw:function duw(d){this.a=d},
dux:function dux(){},
duy:function duy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dut:function dut(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dus:function dus(d){this.a=d},
bet:function bet(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bes:function bes(d,e,f){this.b=d
this.d=e
this.a=f},
ber:function ber(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aE_:function aE_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aE0:function aE0(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
duV:function duV(){},
duW:function duW(){},
duX:function duX(){},
duH:function duH(d){this.a=d},
duG:function duG(d,e){this.a=d
this.b=e},
duF:function duF(d,e){this.a=d
this.b=e},
duS:function duS(d,e){this.a=d
this.b=e},
duU:function duU(d,e){this.a=d
this.b=e},
duT:function duT(d,e){this.a=d
this.b=e},
duR:function duR(){},
duQ:function duQ(d){this.a=d},
duP:function duP(){},
duK:function duK(d){this.a=d},
duL:function duL(){},
duM:function duM(d){this.a=d},
duN:function duN(d){this.a=d},
duJ:function duJ(){},
duO:function duO(d){this.a=d},
duI:function duI(d){this.a=d},
bdT:function bdT(d){this.a=d},
fPI:function fPI(){},
bz3:function bz3(d,e){this.b=d
this.a=e},
aNE:function aNE(){},
bB2:function bB2(){},
ilD(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fHp(v,g))
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
aRQ(d){var w,v=J.a8(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.i.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.i.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
iwK(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.h05(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiT(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRQ(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ioj(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRQ(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRQ(d)>0},
ioi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.i.M(h)
if(g==null)g=1
h=B.aI(i.h(d,"matchesPlayed"))
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
ilC(d,e){var w
C.aiT(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fHo(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uA(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.u(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ii6(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hk5(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ii6(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.u(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGo(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGo)
case 7:r=e
q=B.aW(J.u(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.S(k,k)
w=1
break}p=A.X.aP(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.S(k,k)
w=1
break}k=x.N
o=B.S(k,k)
for(k=J.aT(p),j=x.f;k.C();){n=k.gP(k)
if(!j.b(n))continue
i=J.u(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.u(n,"username")
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
return B.i($async$bGo,v)},
bFq(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGo(),$async$bFq)
case 3:u=t.hk5(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFq,v)},
M0(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$M0=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hEY.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bA(p)
t=t.a>B.dv(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hEY.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S6(A.ch,q),$async$M0)
case 5:case 4:s=$.hEX.h(0,q)
if(s==null){u=C.uA(e,q)
w=1
break}r=C.uA(B.bFx(e,B.a([s],x._)),q)
if(r!=null)B.hmR(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$M0,v)},
iwZ(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ieD(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.fvt(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ilB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ieD(u,f)
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
iwX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aI(t.h(u,i))
w=w==null?null:A.i.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=B.aI(t.h(u,"matchesTotal"))
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
hmQ(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fZv(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fZv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiT(d)
t=$.hjk
if(t==null)s=$.hjk=B.S6(A.ch,null).fw(new C.fZw())
else s=t
w=3
return B.b(s,$async$fZv)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.fZx(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFx(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZv,v)},
aiU(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiT(d)
t=B.T(d).k("N<1,ac<q,@>>")
t=B.B(new B.N(d,new C.fX7(),t),t.k("ak.E"))
w=3
return B.b(B.S6(t,null),$async$aiU)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFx(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiU,v)},
aSN(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hmQ(d,e,f)
t=C.uA(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S6(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSN)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uA(s,e)
if(r!=null)B.hmR(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSN,v)},
its(d,e,f){var w
C.hmQ(d,e,f)
w=$.hj8.h(0,e)
if(w!=null)w.a1(0)
$.hj8.n(0,e,B.cy(A.lT,new C.fX8(e,d)))},
hdv(d,e){return new C.b2h(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fHp:function fHp(d,e){this.a=d
this.b=e},
h05:function h05(d){this.a=d},
fHo:function fHo(d){this.a=d},
fvt:function fvt(d){this.a=d},
fZw:function fZw(){},
fZx:function fZx(){},
fX7:function fX7(){},
fX8:function fX8(d,e){this.a=d
this.b=e},
b2h:function b2h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
ixs(d,e,f){return B.bU(A.L,null,new C.h1h(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h1h:function h1h(d,e){this.a=d
this.b=e},
a12:function a12(d,e,f){this.c=d
this.d=e
this.a=f},
aGo:function aGo(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
elY:function elY(d){this.a=d},
em0:function em0(d){this.a=d},
em1:function em1(d){this.a=d},
em_:function em_(d){this.a=d},
em2:function em2(d){this.a=d},
em3:function em3(d,e){this.a=d
this.b=e},
elZ:function elZ(d,e){this.a=d
this.b=e},
irQ(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.j1
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.j1
v=Date.now()
u=C.ihp(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kJ("calendar",B.J(["title",C.iho(t,w),"start",u.ag(),"end",u.bQ(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
iho(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFN(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFN(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hFN(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fGm(),B.T(w).k("N<1,q>")).aN(0," ")},
ihp(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bL(e),B.bX(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bQ(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKL.gdQ(D.aKL),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cT(d,u,0)){t=C.igk(o,v.b)
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
q=0}return B.c0(B.bD(o),B.bL(o),B.bX(o),r,q,0,0,0)},
igk(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.lA(w)===e){u=!0
if(v<=0){t=d.bQ(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bQ(r)}return d.bQ(r)},
fGm:function fGm(){},
irR(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.j1
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
q=C.idr(w,j)
if(q==null||q.length===0)return A.j1
t=B.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kJ("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kJ(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kJ("call",B.J(["name",q],t,t))],x.Z)}return A.j1},
idr(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.ikQ(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
ikQ(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fGl(),B.T(w).k("N<1,q>")).aN(0," ")},
fGl:function fGl(){},
hKb(d){var w=new B.N(d,new C.fZO(),B.T(d).k("N<1,ac<q,@>>")).c0(0,new C.fZP())
w=B.B(w,w.$ti.k("M.E"))
return w},
fZO:function fZO(){},
fZP:function fZP(){},
irU(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.j1
w=A.a.i(d)
if(w.length===0)return A.j1
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.j1
u=B.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return A.j1
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
return B.a([new B.kJ("send_email",t)],x.Z)},
ir_(d,e){var w
if(e)return d
w=J.dH(d,new C.fT6())
w=B.B(w,w.$ti.k("M.E"))
return w},
fT6:function fT6(){},
itp(d){switch(d){case"blackjack_vegas":return D.e47
case"roulette_euro":return D.e3S
case"slots_jackpot":return D.e3Z
case"poker_texas":return D.e41
case"chess_royale":return D.e3T
case"connect_four_pro":return D.e3U
case"domino_block":return D.e3W
case"plinko_prizes":return D.e43
case"spin_wheel":return D.e40
case"baccarat_punto":return D.e3V
case"craps_table":return D.e42
case"casino_war":return D.e3X
case"bingo_live":return D.e4_
case"solitaire_klondike":return D.e46
case"backgammon_pro":return D.e3R
case"billiards_snooker":return D.e44
case"profit_solve":return D.e45
default:return D.e3Y}},
fWZ(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.H,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.W(A.nR,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbV,A.m),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bE:A.a_
w=B.m(8)
v=B.K(A.bn,A.r,1)
u=B.a([new B.ab(0,A.H,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bKj,B.c(D.cKH[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b1,B.as(B.c(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b1],x.p),A.D,p,A.e,A.h,0,A.p),A.f,p,p,new B.n(A.hS,p,v,w,u,p,A.m),p,74,p,p,p,p,p,52)},
iuF(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.H,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.fZe(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fS3,A.af,B.A(r,A.l,v,A.b9,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cce,A.m),v,v,v,v,H.anK,v,v,v),A.aB,B.db(A.atS,v,D.fSH,d,B.bn(A.aQ,v,v,v,A.dz,v,A.a1Y,v,v,v,v,v))],w),A.l,v,A.e,A.h,0,A.p)},
pD:function pD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btS:function btS(d,e){this.b=d
this.a=e},
fZe:function fZe(){},
i27(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.atg(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.ax()))},
imb(d,e,f,g,h){var w=new C.fJa(f,h)
switch(d){case"checkers_deluxe":return C.ic_(h,g,e,w)
case"tic_tac_go":return C.il3(h,g,e,w)
case"blackjack_vegas":return C.ibi(h,g,e,new C.fJ4(w))
case"roulette_euro":return C.iji(h,g,e,new C.fJ5(w))
case"slots_jackpot":return C.ik8(h,g,e,new C.fJ6(w))
case"billiards_snooker":return C.ii9(h,g,e,new C.fJ7(w))
case"connect_four_pro":return C.icm(h,g,e,w)
case"profit_solve":return C.iic(h,g,e,new C.fJ8(w))
default:return C.ibW(d,h,g,e,new C.fJ9(w))}},
ic_(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),u=B.m(12),t=B.K(D.a_l,A.r,8),s=B.a([new B.ab(0,A.H,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eL,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bw(B.m(6),B.iA(!0,w,w,A.y,D.fqr,new C.fsu(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.m),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
il3(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eL,B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),w),B.E(B.as(new B.fG(1,B.cf(new C.fGI(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
ibi(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.xR,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.frM(),B.T(q).k("N<1,w>")))
else A.d.u(s,B.a([C.fWZ(q[0],!1),A.bm,C.fWZ(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.h,0,v,v)
r=B.c("Total: "+d.a4X(d.ay),v,v,v,v,v,v,D.fMT,v,v,v)
q=d.ay
w=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.frN(),w),w.k("ak.E"))
q=B.c_(A.fK,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eL,u,v),D.fZf,A.am,s,A.aB,D.h60,r,A.am,q,A.b1,B.A(B.a([B.E(B.bJ(D.fTa,v,d.CW?v:new C.frO(d,e,f,g),v),1),A.ab,B.E(B.bJ(D.h8v,v,new C.frP(d,e,f,g),v),1)],t),A.l,v,A.e,A.h,0,v,v)],t),A.l,v,A.e,A.h,0,A.p)},
iji(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.H,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eL,v,w),B.o(w,B.b4(w,w,w,new C.btS(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jx,B.c("Result: "+B.v(v),w,w,w,w,w,w,D.fzN,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fK,B.iB(6,new C.fDB(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
ik8(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fFy(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eL,v,w),C.iuF(new C.fFz(d,e,f,g),u)],x.p),A.l,w,A.e,A.h,0,A.p)},
ii9(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),u=B.m(20),t=B.K(A.iQ,A.r,12),s=x.V,r=B.a([new B.ab(0,A.H,A.w.j(0.45),A.dm,18)],s),q=x.p
return B.x(B.a([new B.D(A.eL,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8V,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.ag0,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ab(0,A.H,A.w.j(0.3),A.J,4)],s),w,A.m),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eGD,A.m),w,w,w,A.f7,w,w,w,w),1),B.l0(A.bj,w,w,1,0,new C.fCq(d,f),d.dy),B.bJ(D.fYg,w,new C.fCr(d,e,g,f),w)],q),A.l,w,A.e,A.h,0,A.p)},
icm(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.xR,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.bd,B.ay(v,B.x(B.iB(6,new C.fsX(d,w),!0,t),A.l,v,A.my,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fsY(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eL,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dK,v,A.e,A.h,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
iic(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eL,B.c(d.c,w,w,w,w,w,w,D.xR,A.K,w,w),w),B.c(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iM,w,w,w),B.c(d.fy,w,w,w,w,w,w,I.acI,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c7v,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fCC(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fWO,w,new C.fCD(d,e,g,f),w)],x.p),A.l,w,A.e,A.h,0,A.p)},
ibW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.itp(d)
v=D.aKA.h(0,d)
if(v==null)v=d
m=B.c(m,n,n,n,n,n,n,A.kO,A.K,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.H,w.c.j(0.35),A.eO,24)],x.V)
p=B.c(w.e,n,n,n,n,n,n,A.Lk,n,n,n)
o=B.c(v,n,n,n,n,n,n,A.mH,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.v(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.T,o,A.P,B.c(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.dc,B.W(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aY,A.b4,A.x,t,n,n),A.m),n,n,n,A.f7,A.ae,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h7B,n,new C.fsh(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.cm,n,n,n,n,n)),n)],k),A.l,n,A.e,A.h,0,A.p)},
FC:function FC(d,e){this.a=d
this.b=e},
atg:function atg(d,e,f,g,h,i,j,k){var _=this
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
clB:function clB(){},
clC:function clC(){},
clA:function clA(){},
clD:function clD(){},
clz:function clz(){},
clF:function clF(){},
clG:function clG(){},
cly:function cly(d){this.a=d},
clE:function clE(){},
clx:function clx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJa:function fJa(d,e){this.a=d
this.b=e},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(d){this.a=d},
fJ6:function fJ6(d){this.a=d},
fJ7:function fJ7(d){this.a=d},
fJ8:function fJ8(d){this.a=d},
fJ9:function fJ9(d){this.a=d},
fsu:function fsu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fst:function fst(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGI:function fGI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGH:function fGH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fGG:function fGG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frM:function frM(){},
frN:function frN(){},
frO:function frO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frP:function frP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDB:function fDB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDA:function fDA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFy:function fFy(){},
fFz:function fFz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCq:function fCq(d,e){this.a=d
this.b=e},
fCr:function fCr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsY:function fsY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsX:function fsX(d,e){this.a=d
this.b=e},
fCC:function fCC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCD:function fCD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsh:function fsh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ip2(d){var w,v=B.T(d).k("Y<1>")
v=B.pN(new B.Y(d,new C.fOL(),v),120,v.k("M.E"))
w=B.cF(v,new C.fOM(),B.a4(v).k("M.E"),x.N).aN(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fOL:function fOL(){},
fOM:function fOM(){},
aj4(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aub:function aub(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aHc:function aHc(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
eTY:function eTY(){},
aP8:function aP8(){},
i05(){var w=$.Jy
if(w<=0)return;--w
$.Jy=w
if(w===0){w=$.huP
if(w!=null)w.$0()}},
cgP(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arQ(d){var w=0,v=B.j(x.H),u,t
var $async$arQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hdq.I(0,t)
w=4
return B.b(B.az(),$async$arQ)
case 4:w=3
return B.b(f.aG("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arQ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arQ,v)},
arP(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgP(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hdq.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arP)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.u(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arP,v)},
WV(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$WV)
case 7:r=e
q=B.aW(J.u(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.S(x.N,x.z)
w=1
break}p=A.X.aP(0,q,null)
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
return B.i($async$WV,v)},
b2y(d){return C.i0i(d)},
i0i(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2y=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2y)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_ai_usage_v1",A.X.av(d,null)),$async$b2y)
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
return B.i($async$b2y,v)},
b2w(d,e){var w,v,u,t,s=J.u(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afC(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bi(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afC(typeof v=="number"?A.o.D(A.i.M(v),0,999999):0,t)},
b2x(d,e){if(A.o.ar(e.bA(d.b).a,36e8)>=24)return new B.afC(0,e)
return d},
chs(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$chs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WV(),$async$chs)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2x(C.b2w(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chs,v)},
cht(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$cht=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WV(),$async$cht)
case 3:t=g
s=Date.now()
r=C.b2x(C.b2w(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bQ(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cht,v)},
i0j(d){var w,v,u,t=d.a,s=A.o.ar(t,1e6)
if(s<=0)return"0s"
w=A.o.ar(t,36e8)
v=A.o.ar(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2z(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WV(),$async$b2z)
case 3:t=p.b2x(o.b2w(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2z)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.u(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2z,v)},
as9(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WV(),$async$as9)
case 3:t=s.b2x(r.b2w(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$as9)
case 5:w=4
return B.b(f.aG("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$as9)
case 4:case 1:return B.h(u,v)}})
return B.i($async$as9,v)},
asa(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$asa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WV(),$async$asa)
case 3:s=g
r=Date.now()
q=C.b2x(C.b2w(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2y(s),$async$asa)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asa,v)},
aiF(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiF=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hK3(a0))if(!C.hK2(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hK3(a0)?3:4
break
case 3:o=C.it4(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9n(e,o),$async$aiF)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hth(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWL()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.MW("text/plain"),$async$aiF)
case 14:r=a2
p=r
if(p==null)p=null
else p=A.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+B.v(q)+"\n\n"
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
case 13:case 9:w=C.hK2(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8W(e),$async$aiF)
case 17:m=f.hv_(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VX(e),$async$aiF)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cK(i)){p=h
m=C.hti(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiF,v)},
i1G(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ck4(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ck4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hvI(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ck4)
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
q=B.aa(m)
$.am.$1("[local growth income stash] code lookup: "+B.v(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ck4,v)},
asT(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asT)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.u(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.u(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cE(0,A.cD.aK(q))
m=J.z(J.u(r,"live"),!0)
u=new B.aIG(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.aa(j)
$.am.$1("[local growth income stash] consume: "+B.v(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asT,v)},
b3D(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i1G(q)?3:4
break
case 3:w=5
return B.b(C.ck4(q),$async$b3D)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asT(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.asT(A.a.i(A.a.aX(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asT(A.a.i(A.a.aX(q,15))),$async$b3D)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIG(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3D,v)},
hvY(d){var w=d.bK
if(w>=0)return w
return 1},
aiS(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSZ(d,e),$async$aiS)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HH(d,null,null,!1,!0,""),$async$aiS)
case 5:w=4
return B.b(t.$1(h),$async$aiS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiS,v)},
irP(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.j1
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.j1
s=new B.V(Date.now(),0,!1)
r=B.dm()
q=B.dm()
p=C.ihn(w)
if(p!=null){v=p.a
r.b=s.bQ(v)
q.b=C.hEy(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ar(v,e)<=180)q.b="Reminder \u2014 "+A.o.ar(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hEz(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bL(s),B.bX(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bQ(a0)
r.b=B.c0(B.bD(l),B.bL(l),B.bX(l),n,m,0,0,0).bQ(-36e8)
if(r.bm().cZ(s.bQ(e)))r.b=J.c4(r.bm(),A.oD)
v=C.ilz(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bL(s),B.bX(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bQ(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hEz(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bL(l),B.bX(l),h,g,0,0,0)
r.b=f.cZ(s.bQ(3e7))&&!v?f.bQ(a0):f
q.b=C.hEy(a1,w)}}v=x.N
return B.a([new B.kJ("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ihn(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
ilz(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hEz(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hEy(d,e){var w,v,u,t
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
i20(d){var w,v,u,t,s=J.a8(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gL(d)>80?u+("\u2026 and "+(s.gL(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,Z,H,I,A_,Q,E
J=c[1]
B=c[0]
A=c[2]
K=c[83]
R=c[85]
L=c[79]
S=c[88]
T=c[86]
M=c[44]
N=c[66]
U=c[87]
O=c[41]
V=c[84]
W=c[82]
X=c[57]
F=c[90]
P=c[75]
Y=c[58]
C=a.updateHolder(c[3],C)
D=c[78]
G=c[22]
Z=c[37]
H=c[81]
I=c[54]
A_=c[89]
Q=c[23]
E=c[80]
C.bv6.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Ge.prototype={
T(){return new C.aKL(this.$ti.k("aKL<Ge.T,Ge.S>"))}}
C.aKL.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new B.hx(A.H9,v,null,null,w.$ti.k("hx<1>"))
u.e=w
u.Xk()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQJ()
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.H9,w.b,w.c,w.d,w.$ti)}v.Xk()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.d()
return v.my(d,w)},
t(){this.aQJ()
this.a3()},
Xk(){var w,v=this
v.d=v.a.c.lQ(new C.ffV(v),new C.ffW(v),new C.ffX(v))
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.a0s,w.b,w.c,w.d,w.$ti)},
aQJ(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.ay3.prototype={
my(d,e){return this.e.$2(d,e)}}
C.anb.prototype={
T(){return C.i8L()},
bu(){return this.r.$0()}}
C.rg.prototype={}
C.aCR.prototype={
aeH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hun(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hup(s),$async$aeH)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeH,v)},
YO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asR(t.a.c),$async$YO)
case 3:if(e!=null&&t.c!=null)t.a.bu()
r=!C.cgP(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arP(t.a.c),$async$YO)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.l(new C.dmC(t,s))
if(!s)t.aeH()
case 1:return B.h(u,v)}})
return B.i($async$YO,v)},
aeh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGo(),$async$aeh)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dmN(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aeh,v)},
Z(){var w,v,u=this
u.bzm()
$.tV=$.tV+1
w=u.a
$.bGt=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,ac<q,@>>")
w=B.B(new B.N(w,new C.dn4(),v),v.k("ak.E"))
u.f=w
u.aeh()
u.Kx()
u.YO()
u.e=B.dg(A.oB,new C.dn5(u))},
Kx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiT(t.a.d.bd)
w=3
return B.b(C.fZv(t.a.d.bd),$async$Kx)
case 3:s=e
if(t.c==null){w=1
break}C.aiT(t.a.d.bd)
if(s!=null)t.l(new C.dmV(t,s))
else t.l(new C.dmW(t))
case 1:return B.h(u,v)}})
return B.i($async$Kx,v)},
t(){C.b2j()
var w=this.e
if(w!=null)w.a1(0)
this.bzl()},
ajz(d,e,f){return this.czM(d,e,f)},
czM(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajz=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.u(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ilD(n,o.a,o.c,d.a,s,f,e,p)
t.a.bu()
w=3
return B.b(C.aiU(t.a.d.bd),$async$ajz)
case 3:if(t.c==null){w=1
break}t.l(new C.dmY(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajz,v)},
Jh(d,e){return this.ckD(d,e)},
c7q(d){return this.Jh(d,null)},
ckD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uA(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRQ(s)<=0){t.c.K(x.q).f.U(D.aVV)
w=1
break}}w=5
return B.b(C.arP(t.a.c),$async$Jh)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hdr(r,C.fTh(q.c),p),$async$Jh)
case 6:w=1
break
case 4:o=new C.dmQ(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hF(r,new C.aFI(p,q.d,q.f,q.r,new C.dmR(o),q.w,C.fTh(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hF(q,new C.ana(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dmS(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
c4x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiT(i.a.d.bd)
C.aiT(i.f)
w=C.iwK(i.a.c.a,i.f)
v=C.ilC(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bM
if(!u){t=A.d.gH(w)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=B.v(q==null?r.h(t,"fromEmail"):q)
p=B.v(r.h(t,"gameTitle"))
o=B.aI(r.h(t,g))
o=o==null?h:A.i.M(o)
if(o==null)o=1
r=B.aI(r.h(t,g))
r=r==null?h:A.i.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.o(h,B.x(B.a([D.h1C,B.c(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.od,h,h,h),A.P,B.A(B.a([B.E(B.dU(A.LB,new C.dmI(i,t),h),1),A.ab,B.E(B.bJ(D.hb1,h,new C.dmJ(i,t),h),1)],n),A.l,h,A.e,A.h,0,h,h)],n),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.m),h,h,h,A.e8,A.bk,h,h,1/0)}m=A.d.gH(v)
l=A.d.dM(i.y,new C.dmK(m),new C.dmL(i))
k=C.hk5(m,i.a.c.a,i.r)
j=C.aRQ(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fUl,B.c(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.od,h,h,h),A.aw,B.c(C.ioi(m,i.a.c.a),h,h,h,h,h,h,A.Wx,h,h,h),A.P,B.bJ(D.h0T,h,new C.dmM(i,l,m),h)],x.p),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.m),h,h,h,A.e8,A.bk,h,h,1/0)},
bWc(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.flX.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EP(w[v])
t=A.i.D(u.d*0.58,0.12,0.3)
l.push(new B.rD(u.a,u.b,A.i.D(u.c*0.92,0,0.9),t).jd())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.H,B.a0(89,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.i9,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.W(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iW,B.x(B.a([B.A(B.a([B.E(B.c(d.b,n,n,n,n,n,n,A.jX,n,n,n),1)],o),A.l,n,A.e,A.h,0,n,n),A.aw,B.c(d.c,n,2,A.a2,n,n,n,A.q6,n,n,n)],o),A.D,n,A.b9,A.h,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c4Z,n,n,n,new C.dmE(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a1e,B.o(n,D.c2W,A.f,n,n,new B.n(B.a0(71,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),n,B.K(B.a0(A.i.S(229.5),s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1.6),n,B.a([new B.ab(0,A.H,B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.m),n,92,n,A.e8,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dmF(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nE:A.qB,k=m?A.iO.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iO:A.c,h=m?A.c.j(0.08):A.bn,g=m?A.c:A.a_,f=m?A.bs:A.cg
if(!o.x)return C.aSo(n,l,B.as(B.n1(n,m?A.c:A.bj,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fTh(o.a.c)
return new C.OD(o.a.w,w,!0,o.gaVP(),n)}w=B.aD(d,A.dF,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.H,A.w.j(0.04),A.cN,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.c("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wq(new C.dn1(o,f,g),n,$.aTT(),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.m),n,n,n,n,A.a1t,n,n,1/0),A.T,o.c4x()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbWb(),B.T(v).k("N<1,w>")))
w=B.cc(B.x(s,A.l,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ab(0,A.H,A.w.j(m?0.28:0.08),A.i9,15)],t)
u=B.K(m?A.c.j(0.1):A.bn,A.r,1)
t=B.aH(n,n,n,n,B.W(A.eI,j,n,n,n,18),n,n,n,o.gaVP(),n,n,n,n,n,n)
q=B.E(B.as(B.c("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oS(!0,C.aSo(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OQ,B.o(n,B.A(B.a([t,q,new B.D(A.iW,B.o(n,B.A(B.a([D.c01,A.e3,C.asG(new C.dn2(o),A.kO,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.m),n,n,n,n,A.hg,n,n,n),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.m),n,60,n,n,A.n7,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dn3(o),x.K)},
aVQ(){var w,v
this.a.bu()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j3(w,v)}}
C.aFI.prototype={
T(){return new C.bmS()},
hK(d){return this.e.$1(d)},
bu(){return this.f.$0()},
aK3(){return this.r.$0()}}
C.bmS.prototype={
Z(){this.bAn()
this.d=B.Wl(this.a.d.bh)
$.tV=$.tV+1},
t(){C.b2j()
this.bAm()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.d()
return new C.are(v,new C.e0a(w),u,new C.e0b(w),new C.e0c(w,d),new C.e0d(w),null)}}
C.ana.prototype={
T(){return new C.aCQ(new B.at(A.ax,$.ax()))},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()},
aK3(){return this.z.$0()}}
C.aCQ.prototype={
Z(){this.bzk()
this.a.toString
$.tV=$.tV+1},
t(){C.b2j()
var w=this.d
w.V$=$.ax()
w.R$=0
this.bzj()},
a3L(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.ON()
w=5
return B.b(C.arP(t.a.c),$async$a3L)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hdr(s,C.fTh(r.c),q),$async$a3L)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uA(s.d.bd,A.a.i(r))
if(p!=null&&C.aRQ(p)<=0){t.c.K(x.q).f.U(D.aVV)
w=1
break}}o=B.cG(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.U(D.ftB)
w=1
break}m=B.Ma(t.a.c.a,new C.dmw(t))
if(m+0.001<n){t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aK3()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d9(r,q.c.a,n,A.kx,A.fz,"Game bet: "+q.f,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
if(D.flJ.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hF(s,new C.aq3(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hF(s,new C.anc(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3L,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.Ix,o,o,o,new C.dmz(d),o,o,o,o,o,o),k=p.a,j=B.c(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.m(12),h=x.p
j=B.eR(B.a([B.o(o,B.as(C.asG(new C.dmA(p),A.iM,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.m),o,o,o,D.bEs,A.f2,o,o,o)],h),o,o,!0,!0,D.a0n,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.W(D.bRI,D.by5,o,o,o,28)
w=p.a
v=B.c(w.f,o,o,o,o,o,o,A.mH,o,o,o)
w=B.c(w.r,o,o,o,o,o,o,A.od,o,o,o)
u=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dmB(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.h,0,o,o)
r=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.o(o,B.x(B.a([D.hcI,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m4,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a8k.m()>>>16&255,A.a8k.m()>>>8&255,A.a8k.m()&255),A.r,1)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fTI,B.c("+ $"+A.i.ac(n*0.46,2),o,o,o,o,o,o,D.fJm,o,o,o),B.c("(46% return on $"+A.i.ac(p.e,2)+" bet)",o,o,o,o,o,o,A.q6,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h1U,A.P,q,A.P,B.o(o,B.x(B.a([D.fOt,B.c("$"+A.i.ac(m,2),o,o,o,o,o,o,D.fxZ,o,o,o),B.c("8 pairs \xd7 $"+A.i.ac(m,2)+" each",o,o,o,o,o,o,A.q6,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(D.btn,o,r,u,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
r=B.fv(o,o,A.bj,o,o,o,o,o,o,A.c,o,A.hl,o,o,o,o,o,o,o,o)
return C.aSo(j,D.a0n,B.cc(B.o(o,B.x(B.a([k,A.aw,v,A.bB,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iz(B.c("Start Game ($"+A.i.ac(p.e,2)+")",o,o,o,o,o,o,A.cd,o,o,o),p.gcDK(),r),o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.cbe,A.m),o,o,o,o,A.eR,o,o,1/0),A.t,o,A.y,o,o,A.a1w,o,o,A.ah))}}
C.anc.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.aCS(A.cU,new B.at(A.ax,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bu(){return this.z.$0()}}
C.aCS.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rX(d){return this.bUk(d)},
bUk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AS()
r=t.PA()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acH(d),$async$rX)
case 5:w=1
break
case 4:q=A.i.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uB(d),$async$rX)
case 9:w=7
break
case 8:w=10
return B.b(t.Fg(q,s,r),$async$rX)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rX,v)},
FT(d,e,f,g){return this.cBs(d,e,f,g)},
cBs(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHw(s,C.bHc(),C.hmf(),d,e,f,g),$async$FT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FT,v)},
AS(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6h(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.d()
return u+C.aj4(t,s.e.a.a)
case"memory":return s.ghR()&&D.nh.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aB3()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.b_
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aB3(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
PA(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.d()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hk9()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b_
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fTm(w.e,w.d.y2)
if(v!==C.fTm(d.e,d.d.y2)&&u.c!=null)u.l(new C.doo(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzo()
w=i.a
w.toString
$.tV=$.tV+1
i.Q=C.fTm(w.e,w.d.y2)
i.b99()
i.ae1()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PY()
i.adF()
i.bn=B.dg(A.h4,new C.dor(i))}if(A.d.q(D.T7,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uA(w,v)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2h(!1,w,k.length===0||A.a.q(k,"@")?C.hk5(u,v,null):k,p,l,s)}else{w=w.c
w=C.hdv(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.hdv(w.c,w.a)}v=C.i27()
v.bt2(i.a.e,i.d,w)
i.b_=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uA(v,w)
m=u==null?null:J.u(u,h)
if(x.f.b(m)){w=i.b_
w.toString
w.beB(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b_
i.r=w.c
if(w.e){if(w.r)j=D.UC
else j=w.f===!0?D.rg:D.JQ
i.AU(j)}}}i.b3=B.dg(A.n6,new C.dos(i))
if(i.ghR())i.bi=B.dg(A.n5,new C.dot(i))}if(i.ghR()&&!A.d.q(D.T7,i.a.e))i.bi=B.dg(A.n5,new C.dou(i))
i.as=B.dg(A.fQ,new C.dov(i))},
PY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uA(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFq(p,t.a.c.a),$async$PY)
case 5:o=e
if(t.c!=null)t.l(new C.dnE(t,o))
w=1
break
case 4:w=6
return B.b(C.M0(q,t.a.d.bd,!1),$async$PY)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFq(n,t.a.c.a),$async$PY)
case 7:o=e
if(t.c!=null)t.l(new C.dnF(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
akF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M0(r,s.d.bd,!1),$async$akF)
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
t.aQv(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.i.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.do7(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.l(new C.do8())}case 1:return B.h(u,v)}})
return B.i($async$akF,v)},
adF(){var w=0,v=B.j(x.H),u=this
var $async$adF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a23(!0),$async$adF)
case 2:return B.h(null,v)}})
return B.i($async$adF,v)},
a23(d){return this.cqC(d)},
cqB(){return this.a23(!1)},
cqC(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
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
return B.b(C.M0(q,s.d.bd,b3),$async$a23)
case 3:o=b5
if(o==null)o=C.uA(t.a.d.bd,q)
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
if(a3.length!==0){s=B.bi(a3)
a4=s==null?null:s.bU()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bi(J.k(r==null?"":r))
a6=r==null?null:r.bU()}else a6=null
if(f){r=a1.h(0,g)
r=B.bi(J.k(r==null?"":r))
a7=r==null?null:r.bU()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cb(a7)?a6:a7).bQ(5e5)
if(!new B.V(Date.now(),0,!1).cZ(a8)){a4=b2.a=a8.bQ(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.its(t.a.d.bd,q,j)
t.a.bu()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.l(new C.dnU(b2,t,b0))
w=1
break}if(s==null){t.l(new C.dnV(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.cZ(s)){s=s.bA(b1).a
r=A.o.ar(s,1e6)
t.l(new C.dnW(b2,t,r+(A.o.F(A.o.ar(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.l(new C.dnX(b2,t))
b2=t.a.e
if(b2==="pattern")t.aau()
else if(b2==="memory"){t.b98()
if(t.c!=null)t.l(new C.dnY())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a23,v)},
aRs(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRr(){return this.aRs(null)},
aau(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aau=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.co3()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.M0(q,s.d.bd,!1),$async$aau)
case 5:r=t.b52(e)
case 4:if(t.c==null){w=1
break}t.aRs(r)
t.l(new C.dn6(t))
t.Eu()
case 1:return B.h(u,v)}})
return B.i($async$aau,v)},
b52(d){var w,v,u,t=null
if(d==null)return t
w=J.u(d,"sessionState")
if(!x.f.b(w))return t
v=J.u(w,"patternSeed")
if(typeof v=="number")return A.i.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
co3(){var w=this.a,v=w.Q
if(v==null)return null
return this.b52(C.uA(w.d.bd,v))},
ae1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ae1)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.u(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.l(new C.dnD(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae1,v)},
pD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pD)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bHZ().length
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
return B.b(C.M0(r,s.d.bd,!1),$async$a42)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uA(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a8(p)
r.u(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bi(J.k(r==null?"":r))
s=s?null:J.u(p,"sessionUpdatedAt")
l=B.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cb(l)){w=1
break}s=t.b_
s.toString
r=t.a
s.beB(r.e,n,r.c.a)
r=t.b_
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.UC
else k=r.f===!0?D.rg:D.JQ
w=7
return B.b(t.AU(k),$async$a42)
case 7:w=5
break
case 6:if(t.c!=null)t.l(new C.do9())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a42,v)},
aix(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aix=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b_==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b_
o.toString
p=o.cU4(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSN(n,o,p),$async$aix)
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
return B.i($async$aix,v)},
AU(d){return this.c0G(d)},
c0G(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.K6(s,s),$async$AU)
case 9:w=4
break
case 6:w=10
return B.b(t.Z9(s,s),$async$AU)
case 10:w=4
break
case 7:w=11
return B.b(t.acG(s,s),$async$AU)
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
a11(d,e){return this.cim(d,e)},
cim(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a11=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aix(),$async$a11)
case 6:if(d===D.rf){w=1
break}w=4
break
case 5:if(d===D.rf){w=1
break}case 4:w=7
return B.b(t.AU(d),$async$a11)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a11,v)},
adV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uA(s.d.bd,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.u(p,"sessionState")
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
return B.b(C.aSN(t.a.d.bd,q,l),$async$adV)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$adV,v)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uA(s.d.bd,q)
if(p==null){w=1
break}o=J.u(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.S(s,r)
n.n(0,"gameOver",!0)
C.hmQ(t.a.d.bd,q,n)
C.iwX(t.a.d.bd,q)
w=3
return B.b(C.aiU(t.a.d.bd),$async$Ix)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adV()
else if(!v.f)v.c7r()
C.b2j();++v.RG
w=v.as
if(w!=null)w.a1(0)
w=v.b3
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
v.bzn()},
cH3(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.d()
v=v<=0||w.b_==null}if(v)return
if(w.c7)return
v=w.b_
v.toString
w.a.toString
if(v.a>=v.b){w.uB("Goal completed!")
return}v=++w.rx
if(v%5===0)w.l(new C.doi())},
b99(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b98()
break
case"scramble":r.bh=0
r.b9a()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzV[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.ci)
break
case"math":r.y2=0
r.b97()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b9b()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.ct3()){w=J.e4(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RM()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRr()
w=B.v(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Eu()}break
case"color":r.bd=0
r.b92()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.bao()
break
default:if(A.d.q(D.T7,w)){w=r.b_
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6h(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ct3(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b9b(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.i.M(Math.pow(p,v))}u=A.i.M(Math.pow(p,o))
r.w=A.o.v(u)
r.aH=A.d.aN(n,", ")
q=r.w
t=x.s
s=B.a([A.o.v(u+p),A.o.v(u-p),A.o.v(u+p*2)],t)
t=B.a([q],t)
A.d.u(t,s)
A.d.e0(t,r.d)
r.x=t},
b97(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHZ().length-6)u.at=0
w=$.bHZ()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b9a(){var w=this,v=w.w=D.daN[A.o.F(w.at+w.bh,105)]
w.ax=C.ixd(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.ci)},
bao(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.dv(0,0,0,120+w.d.aw(280),0,0),new C.do6(w))},
c0J(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rX("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ar(new B.V(v,0,!1).bA(u).a,1000)}if(w<520){t.l(new C.dnB(t))
v=t.a0
if(v>=5){t.pD()
t.uB("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.bao()
t.l(new C.dnC())}}else t.rX("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cGh(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dod())
if(u<0)return
t.l(new C.doe(t,u,v,d))},
cGi(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.l(new C.dof(u,d,v))},
bL7(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dn7())){u.c.K(x.q).f.U(D.ftv)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.d()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.l(new C.dn8(u))
if(u.ghR()&&D.nh.q(0,u.a.e))u.a2i()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nh.q(0,u.a.e))u.nm(!0)
else u.uB("All 5 words unscrambled!")}else{u.b9a()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.l(new C.dn9())}}else u.rX("Wrong word \u2014 paid for "+u.bh+"/5.")},
b92(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dQ,A.dM,A.ir,A.tL][u]
w.w=t},
aQv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.ia(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cn),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.i.be(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.u(j,g))
i=f==null?null:A.i.M(f)
if(i!=null)h.fx=i}},
b98(){var w,v,u,t,s,r,q,p=this
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
u=C.uA(v,w)
t=u==null?null:J.u(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a1(t,w,v):B.S(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.i.M(r)
else{w=r==null?null:J.k(r)
q=B.cb(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e_()
v.cU(q)
A.d.e0(w,v)}else A.d.e0(w,p.d)
p.aQv(s)}else A.d.e0(p.fr,p.d)},
cpW(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.l(new C.dnN(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.l(new C.dnO(t,v,u))
if(t.ghR()&&D.nh.q(0,t.a.e))t.a2i()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nh.q(0,t.a.e))t.nm(!0)
else t.aB6()}return}t.k1=!0
B.bN(D.bDp,new C.dnP(t),x.c)},
b8w(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.d()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.l(new C.dnZ(u))
if(u.y1>=5){u.pD()
u.uB("All 5 questions correct!")}else{u.b9b()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.l(new C.do_())}}else u.rX(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.l(new C.do0(u))
if(u.y2>=6){u.pD()
u.uB("All 6 math questions correct!")}else{u.b97()
u.r="Question "+(u.y2+1)+" of 6"
u.l(new C.do1())}}else{u.X5(u.y2+1)
u.rX(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.l(new C.do2(u))
if(u.bd>=5){u.pD()
u.uB("All 5 color rounds correct!")}else{u.b92()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.l(new C.do3())}}else u.rX("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aB6()}else u.c.K(x.q).f.U(D.fuf)},
cGg(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.ce(q.k4,0)
v=A.o.ar(d,3)
u=A.o.F(d,3)
t=A.o.ar(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.l(new C.doc(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aB6()}}},
RM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.l(new C.dnQ(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnR(t,q).$0()
t.c.er()
w=6
return B.b(B.bN(A.l0,null,r),$async$RM)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dnS(t).$0()
t.c.er()
w=7
return B.b(B.bN(A.ka,null,r),$async$RM)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.l(new C.dnT(t))
case 1:return B.h(u,v)}})
return B.i($async$RM,v)},
cGj(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rX("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.l(new C.dog(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uB("Perfect Simon run!")
return}u.l(new C.doh(u))
u.RM()}},
Eu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Eu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.l(new C.dna(t))
s=x.H
w=3
return B.b(B.bN(A.jw,null,s),$async$Eu)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dnb(t,o).$0()
t.c.er()
w=7
return B.b(B.bN(A.a15,null,s),$async$Eu)
case 7:if(t.c==null){w=1
break}new C.dnc(t).$0()
t.c.er()
w=8
return B.b(B.bN(A.iU,null,s),$async$Eu)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.l(new C.dnd(t))
case 1:return B.h(u,v)}})
return B.i($async$Eu,v)},
X5(d){return this.bFF(d)},
bFF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X5)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHZ().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aG("Int","ngmy_game_"+q+"_"+r,o),$async$X5)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X5,v)},
cGd(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rX("Wrong tile \u2014 paid for "+v.aB3()+"/"+C.hk9()+" moves.")
return}v.l(new C.doa(v,w))
if(v.ghR()&&D.nh.q(0,v.a.e))v.a2i()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nh.q(0,v.a.e))v.nm(!0)
else v.uB("All 7 pattern rounds correct!")}else{v.l(new C.dob(v))
v.Eu()}},
K6(d,e){return this.coj(d,e)},
uB(d){return this.K6(null,d)},
aB6(){return this.K6(null,null)},
coj(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.l(new C.dnL(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d9(q,s.c.a,r,A.hc,A.fz,"Game payout: "+s.f,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(p,!0)
t.a.hK(p)
t.a.bu()
o=e==null?"+$"+A.i.ac(r,2)+" added to your balance!":e
s=t.a
C.vf(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,o,"YOU WIN!",!0),$async$K6)
case 3:w=4
return B.b(C.aiI(t.a.f,o),$async$K6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K6,v)},
FR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nh.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cAw(),$async$FR)
case 5:w=1
break
case 4:s=t.AS()
r=t.PA()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acH("Time's up \u2014 no progress to pay."),$async$FR)
case 8:w=1
break
case 7:q=A.i.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uB("Complete! Max payout earned."),$async$FR)
case 12:w=10
break
case 11:w=13
return B.b(t.Fg(q,s,r),$async$FR)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FR,v)},
RT(d){return this.csJ(d)},
a2i(){return this.RT(!1)},
csJ(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RT=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nh.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.V(Date.now(),0,!1)
a2=r.bw
if(a2!=null&&a1.bA(a2).a<3e6){w=1
break}r.bw=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.uA(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.M0(q,r.a.d.bd,!1),$async$RT)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.u(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.a1(n,a3,a5):B.S(a3,a5)
l=J.u(m,"scores")
k=a2.b(l)?B.a1(l,a3,a5):B.S(a3,a5)
J.aJ(k,p,r.AS())
J.aJ(m,"scores",k)
if(r.a.e==="memory"){j=J.u(m,"memoryMatchedBy")
i=a2.b(j)?B.a1(j,a3,a5):B.S(a3,a5)
a6=r.id
a6=B.B(a6,B.a4(a6).k("cj.E"))
A.d.ff(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aR(x.S)
for(a6=i,a6=new B.dq(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.i.M(f):B.cb(J.k(f),null)
if(e!=null)J.c4(h,e)}}a6=h
a6=B.B(a6,B.a4(a6).k("cj.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.u(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aSN(r.a.d.bd,q,m),$async$RT)
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
return B.i($async$RT,v)},
nm(d){return this.cAx(d)},
cAw(){return this.nm(!1)},
cAx(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FR(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RT(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.M0(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PA()
w=o==null?8:9
break
case 8:m=A.i.D(t.AS()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acH("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uB("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Fg(m,t.AS(),n),$async$nm)
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
a0=d==null?null:A.i.M(d)
if(a0==null)a0=t.AS()
d=B.aI(e.h(0,j))
a1=d==null?null:A.i.M(d)
if(a1==null)a1=0
a2=A.i.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.acH("Time's up \u2014 no progress to pay."),$async$nm)
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
r=t.b3
if(r!=null)r.a1(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.l(new C.do4(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.i.ac(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d9(h,b0,a9,A.hc,A.fz,d,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.i.ac(a9,2)+" (includes opponent bonus $"+A.i.ac(a7,2)+")":"+$"+A.i.ac(a8,2)+" (your progress payout)"
s=t.a
C.vf(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FT(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Ix(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fg(d,e,f){return this.coh(d,e,f)},
coh(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.l(new C.dnJ(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d9(s,q.c.a,r,A.hc,A.fz,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(p,!0)
t.a.hK(p)
t.a.bu()
if(t.c==null){w=1
break}o=A.i.S(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.d()
m=q+C.aj4(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.dnK()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.i.ac(r,2)+" ("+n+"% \u2014 "+B.v(k)+" mistakes/missed)":"+$"+A.i.ac(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vf(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FT(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fg)
case 3:w=4
return B.b(C.aiI(t.a.f,j),$async$Fg)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fg,v)},
c7r(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AS()
v=o.PA()}catch(u){return}if(v<=0||w<=0)return
t=A.i.D(w/v,0,1)
s=B.ot(A.i.ac(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d9(q,p.c.a,s,A.hc,A.fz,"Game partial: "+p.f+" ("+B.v(w)+"/"+B.v(v)+", left early)",n,n,A.cx,new B.V(Date.now(),0,!1)))
o.a.bu()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vf(s,n,"Left early \xb7 +$"+A.i.ac(s,2)+" ("+B.v(w)+"/"+B.v(v)+")",q,r,p,n,!0)},
acG(d,e){return this.bW6(d,e)},
bW6(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=A.o.v(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hK(new B.d9(r,q,p,A.hc,A.fz,"Game payout: "+s+" (draw, stake returned)",null,null,A.cx,new B.V(o,0,!1)))
t.a.bu()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vf(o,null,"Draw. Your $"+A.i.ac(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,"Nobody won, so your $"+A.i.ac(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acG,v)},
Z9(d,e){return this.bW7(d,e)},
acH(d){return this.Z9(null,d)},
bW7(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Z9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.vf(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,e,"YOU LOSE",!1),$async$Z9)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Z9,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.d()
w=A.o.ar(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.ate,n,n,n,new C.doj(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.c(u?t.f+" vs "+B.v(o.bH):t.f,n,2,A.a2,n,n,n,A.fG,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asG(new C.dok(o),A.ob,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.m),n,n,n,n,A.h5,n,n,n)],q),A.l,n,A.e,A.h,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.c("Win $"+A.i.ac(t.x*1.46,2)+" \xb7 stake $"+A.i.ac(o.a.x,2)+" \u2022 Progress "+o.AS()+"/"+o.PA(),n,n,n,n,n,n,D.fDy,n,n,n),1),new C.arR(o.a.c.a,new C.dol(o),n),A.ab,D.bWt,A.db,B.c(""+w+":"+m,n,n,n,n,n,n,A.oc,n,n,n)],q),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.m),n,n,n,n,A.hr,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,t>")
m=B.B(new B.N(v,new C.dom(),m),m.k("ak.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSo(n,D.bhg,B.bm(!0,new B.D(A.ON,B.x(B.a([r,s,A.P,new B.fh(new C.don(o),n),A.am,B.E(B.o(n,o.bW5(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.m),n,n,n,n,A.cr,n,n,n),1)],q),A.al,n,A.e,A.h,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255)
w=B.a0(242,A.iS.m()>>>16&255,A.iS.m()>>>8&255,A.iS.m()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.dp(!1,B.o(n,B.x(B.a([D.fpy,A.af,B.c(o.cT,n,n,n,n,n,n,D.fF7,A.K,n,n),A.am,B.c(o.bT,n,n,n,n,n,n,D.fDe,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.m),n,n,n,A.ti,A.zg,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8q(){var w=this.k3
return B.cf(new C.dnI(this,w,A.i.cD(this.fr.length/w)))},
bW5(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8q()
if(m==="scramble"){m=o.r
m===$&&B.d()
w=x.l
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q6,n,n,n),B.c("Words "+o.bh+"/5",n,n,n,n,n,n,A.Fs,n,n,n),A.af,B.c("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fK,B.iB(o.ay.length,new C.dnq(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fK,B.iB(o.ch.length,new C.dnr(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iz(D.h5A,o.gbL6(),B.fv(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cm,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.d()
return new C.aub(m,o.e,new C.dns(o),new C.dnt(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.d()
m=B.a([B.c(m,n,n,n,n,n,n,A.q6,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.c(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fs,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.d()
w+=", ?"}else w=o.CW
m.push(new B.dl(A.dC,A.z,A.f,B.c(w,n,n,n,n,n,n,A.mH,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dnu(o),B.T(w).k("N<1,w>")))
return B.x(m,A.l,n,A.e,A.h,0,A.p)}if(m==="puzzle")return B.cf(new C.dnv(o))
if(m==="simon"){m=o.r
m===$&&B.d()
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q6,n,n,n),B.c("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fs,n,n,n),A.P,B.E(B.l_(1,B.iB(4,new C.dnw(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="pattern")return B.cf(new C.dnx(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dQ,A.dM,A.ir,A.tL]
m=o.r
m===$&&B.d()
m=B.c(m,n,n,n,n,n,n,A.q6,n,n,n)
w=B.c("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fs,n,n,n)
v=o.aL
v===$&&B.d()
s=o.aR
s===$&&B.d()
s=B.a([m,w,A.af,B.c(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fv(n,n,B.a0(217,m.m()>>>16&255,m.m()>>>8&255,m.m()&255),n,n,n,n,n,n,A.c,n,n,A.f6,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a5(1/0,n,B.iz(B.c(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dny(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.h,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bj:A.c9
w=o.r
w===$&&B.d()
w=B.c(w,n,n,n,n,n,n,A.acw,A.K,n,n)
v=B.c("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fAq,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.c(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aD(s,A.bY,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qs(B.ay(A.c1,B.cV(n,B.x(B.a([w,A.P,v,A.b1,s,A.b1,new B.D(A.Hk,B.c(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.h,0,A.p),p,n,A.b_,n,L.CK,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0I(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.T7,m)&&o.b_!=null){m=o.a.e
w=o.b_
w.toString
return C.imb(m,new C.dnz(o),new C.dnA(o),o.d,w)}m=o.r
m===$&&B.d()
return B.as(B.c(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anZ.prototype={
T(){return new C.bjW()},
cZU(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjW.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aD(a3,A.dF,a0).w
a0=B.aD(a3,A.dF,a0).w
v=x.p
u=B.a([B.bUH(!1,e.a.r,"INVESTMENT PLANS",d),A.dc],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bL(s)),2,"0")
q=A.a.aX(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.Ct,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.H,B.a0(89,A.rO.m()>>>16&255,A.rO.m()>>>8&255,A.rO.m()&255),A.eO,20),new B.ab(0,A.H,B.a0(102,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.dm,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.Ct,A.r,3.4)
n=B.a([new B.ab(0,A.H,B.a0(166,A.rO.m()>>>16&255,A.rO.m()>>>8&255,A.rO.m()&255),A.dN,10),new B.ab(0,A.H,B.a0(89,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.cN,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dmM,D.cXd,d),A.m),d,42,d,d,d,d,d,56),A.b1,e.bbj(a3,!0)],v),A.l,d,A.e,A.h,0,d,d)
k=B.Eo(t.a,1,A.a2,D.fIw)
j=t.b
i=t.c
h=B.Eo("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fIL)
g=B.Eo(e.b63(j),1,A.a2,D.fBi)
q=B.A(B.a([B.E(B.x(B.a([D.fZm,B.Eo(a1.c,1,A.a2,D.aXZ)],v),A.D,d,A.e,A.h,0,A.p),1),B.x(B.a([D.fZ7,B.c(r+"/"+q,d,d,d,d,d,d,D.aXZ,d,d,d)],v),A.dK,d,A.e,A.h,0,A.p)],v),A.l,d,A.e,A.h,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yF.m()>>>16&255,D.yF.m()>>>8&255,D.yF.m()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atT("INVESTED","$"+B.dG(j),!0),e.atT("DAILY ROI",A.i.ac(i*100,2)+"%",!0),e.atT("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j3,A.h,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h56,A.rq,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fXK,A.bB,k,A.aw,h,A.aw,g,A.P,q,A.am,r,A.am,i,A.aw,B.Eo("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHS)],v),A.D,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cc6,A.m),d,d,d,d,A.bH,d,d,1/0),A.abR],v))}u.push(D.fPf)
u.push(A.rq)
A.d.u(u,new B.N(a2,new C.drY(e,a3),B.T(a2).k("N<1,w>")))
return B.c5(d,A.L,B.bm(!1,B.cc(B.x(u,A.D,d,A.e,A.h,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbj(d,e){var w=null,v=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(8),t=B.K(A.k6,A.r,1)
return B.o(w,B.A(B.a([B.W(A.a3Q,A.c,w,w,w,16),A.db,B.c("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.eS,w,w,w)},
b63(d){var w=A.a.b1(A.o.v(A.i.S(d*100)),4,"0")
return"****  ****  ****  "+A.a.aX(w,w.length-4)},
atT(d,e,f){var w=null,v=B.a0(217,D.yF.m()>>>16&255,D.yF.m()>>>8&255,D.yF.m()&255)
v=B.c(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bB,B.Eo(e,w,w,B.l(w,w,A.Cq,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.D,w,A.e,A.h,0,A.p)},
cqq(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd3L(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ab(0,A.H,B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.UX,16),new B.ab(0,A.H,B.a0(115,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),A.dm,14),new B.ab(0,A.H,B.a0(51,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.cN,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),B.a0(0,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.m()>>>16&255,k.m()>>>8&255,k.m()&255)
j=B.a0(A.i.S(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ab(0.5,A.H,k,A.J,14),new B.ab(0,A.H,j,A.J,6),new B.ab(0,A.H,B.a0(140,i.m()>>>16&255,i.m()>>>8&255,i.m()&255),new B.r(0,2),4)],p),D.caE,A.m),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eG_],h),d),d),A.b1,e.bbj(b2,!0)],h),A.l,d,A.e,A.h,0,d,d)
a6=B.Eo(a6,1,A.a2,D.fxG)
i=B.Eo(e.b63(a3),1,A.a2,D.fNr)
j=B.A(B.a([e.b5u(A.i.ac(2.86,2)+"%"),A.e3,e.b5u("261d")],h),A.l,d,A.e,A.h,0,d,d)
k=B.E(B.x(B.a([D.fQB,B.Eo("$"+B.dG(a3),1,A.a2,D.fMa)],h),A.D,d,A.e,A.h,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.c(m,d,d,d,d,d,d,D.fyw,d,d,d)],h),A.dK,d,A.e,A.h,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.m()>>>16&255,A.bz.m()>>>8&255,A.bz.m()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBl("Daily","$"+B.dG(a4)),1),A.e3,B.E(e.aBl("Total","$"+B.dG(a4*261)),1),A.e3,B.E(e.aBl("Days","261"),1)],h),A.l,d,A.e,A.h,0,d,d)
g=q?d:new C.drX(e,b3,a3,t)
f=A.i.S(127.5)
f=B.fv(d,d,A.bs,B.a0(f,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),B.a0(f,A.bn.m()>>>16&255,A.bn.m()>>>8&255,A.bn.m()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.m(10),D.b76),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bB,D.h_6,A.bB,a6,A.cT,i,A.fF,j,A.fF,m,A.fF,k,A.fF,l,A.P,new B.a5(1/0,40,B.iz(new B.dl(A.dw,A.z,A.f,B.c(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fz2,d,d,d),d),g,f),d)],h),A.D,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.ccI,A.m),d,d,d,A.kG,D.bFc,d,d,1/0)},
b5u(d){var w=null,v=B.a0(115,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.c(d,w,w,w,w,w,w,D.fy4,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.zk,w,w,w)},
aBl(d,e){var w=null,v=B.a0(97,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(7),t=B.K(A.bn,A.r,1)
return B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,D.fId,w,w,w),A.rr,new B.dl(A.dC,A.a5,A.f,B.c(e,w,w,w,w,w,w,D.fL9,w,w,w),w)],x.p),A.D,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.lX,w,w,w)}}
C.ak1.prototype={
T(){var w=null,v=B.a([],x._),u=$.ax()
return new C.azT(v,new B.at(A.ax,u),new B.at(A.ax,u),B.mR(0,w,w),new B.i6(),D.Ur,C.aiE(),B.a([],x.fw),B.aR(x.N),B.mR(0,w,w))}}
C.azT.prototype={
Z(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=B.Ak(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.ae6()
r.PX()
r.atu()
r.cDw()
r.cDM()
$.aU.x1$.push(new C.cOt(r))
r.a.toString},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asf(),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.cNO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
gaCZ(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPR())return!0
return!1},
gPR(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYN(){var w,v=this.CW
if(v==null)return A.bF
w=v.bA(new B.V(Date.now(),0,!1))
return w.a<0?A.bF:w},
bGs(){var w=this
if(w.a.c.w)return
if(w.gPR()){if(!w.cx)w.l(new C.cNE(w))}else if(w.cx)w.l(new C.cNF(w))},
cwI(){this.l(new C.cNY(this))},
uK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.l(new C.cNV(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.l(new C.cNW(t))
w=1
break}w=3
return B.b(C.chs(o.a,s),$async$uK)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.cht(t.a.c.a,s),$async$uK)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.l(new C.cNX(t,r,q))
t.cFF()
t.bGs()
if(r===3)t.a_f(r)}case 1:return B.h(u,v)}})
return B.i($async$uK,v)},
a_f(d){return this.c8i(d)},
c8i(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHA(q,r,new C.cNQ(t),d,s.c.a),$async$a_f)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_f,v)},
yg(d){return this.bHZ(d)},
atu(){return this.yg(!1)},
bHZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9z(k,C.hKb(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.chU(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.at7(k),$async$yg)
case 5:r=f
w=!s.a&&J.cK(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WY(!0,l,q,p)
m.a=s
w=8
return B.b(C.ash(k,s),$async$yg)
case 8:case 7:w=9
return B.b(C.VX(k),$async$yg)
case 9:o=f
w=10
return B.b(C.a8W(k),$async$yg)
case 10:n=f
if(t.c==null){w=1
break}t.l(new C.cNG(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Ro(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ro=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PX(),$async$Ro)
case 3:s=t.c
if(s==null){w=1
break}r=B.ed(new C.cNT(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).cc(r),$async$Ro)
case 4:w=5
return B.b(t.PX(),$async$Ro)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ro,v)},
cHW(){this.l(new C.cOg(this))},
cDM(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dg(A.pC,new C.cOa(w))},
cFF(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPR()||w.CW==null)return
w.id=B.dg(A.fQ,new C.cOd(w))},
cDw(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dg(A.jP,new C.cO9(w))
w.FZ()},
FZ(){return this.cFE()},
cFE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$FZ)
case 7:q=e
p=B.aW(J.u(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.X.aP(0,p,null)
if(x.f.b(o)){m=B.E5(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Md(),$async$FZ)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSn(),$async$FZ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aG("String","app_config",A.X.av(k.aj(),null)),$async$FZ)
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
break}if(i.a!==r.ay)r.l(new C.cOb(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FZ,v)},
ba0(){A.d.b0(this.f,new C.cO8())},
ae6(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ae6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O4(t.a.c.a),$async$ae6)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cK(q)){A.d.u(s,q)
A.d.b0(s,new C.cNL())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.l(new C.cNM(t,s))
t.a3e(!0)
B.bN(A.jw,new C.cNN(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$ae6,v)},
ahV(){var w=0,v=B.j(x.H),u=this
var $async$ahV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apO(u.a.c.a,u.f),$async$ahV)
case 2:return B.h(null,v)}})
return B.i($async$ahV,v)},
by(d){this.bJ(d)},
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
u===$&&B.d()
u.t()
v.a3()},
ad3(d){var w,v=this
v.l(new C.cNJ(v,d))
w=v.e
w===$&&B.d()
if(w.f.length!==0)w.BZ(d,A.ck,A.l0)
else $.aU.x1$.push(new C.cNK(v,d))
if(d===0)v.a3e(!0)
if(d===1)v.cyM(!0)},
a3e(d){$.aU.x1$.push(new C.cO0(this,d))},
aCC(){return this.a3e(!1)},
a2y(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2Q(),$async$a2y)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.l(new C.cNU(t))
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
return B.b(C.asa(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uK(),$async$nl)
case 10:q.l(new C.cO1(q))
w=1
break
case 8:w=11
return B.b(q.uK(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_f(3)
case 6:case 4:q.l(new C.cO2(q,c5))
C.VJ(q.a.c.a,"user",c5)
q.aCC()
t=13
a8={}
w=16
return B.b(q.a2y(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2Q(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.l(new C.cO3(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFE("",null)
q.l(new C.cO4(q,p))
C.VJ(q.a.c.a,"ai",p)
q.aCC()
r=[1]
w=14
break}o=B.nm(a9)
a9=q.a
n=""
m=C.hKb(a9.d)
w=C.hK4(c5)?20:21
break
case 20:w=22
return B.b(C.chT(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9z(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i20(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bL(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bX(b3)),2,"0")
b5=A.a.b1(A.o.v(B.d4(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fM(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VX(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hti(i,25)
w=26
return B.b(C.a8W(q.a.c.a),$async$nl)
case 26:g=c9
f=C.hv_(g)
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
return B.b(C.aiF(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hK4(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.v(d)
b4=B.v(j)
b5=q.a.c.w?"\n"+C.ip2(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.v(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.v(a0)+"\n":""
c0=B.v(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hXl(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.v(c5)
w=28
return B.b(B.rm(o,a2,A.i6,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFE(a8.a,a3.a)
a4=c2
a5=B.hJl(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.irP(c5),x.an)
a6=a9
J.h2(a6,C.irQ(c5))
J.h2(a6,C.irR(c5))
J.h2(a6,B.hIM(c5))
J.h2(a6,C.irU(c5,q.a.c.w))
a8.b=a6}c3=C.ir_(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiX(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.l(new C.cO5(a8,q,a7))
C.VJ(q.a.c.a,"ai",a7)
if(J.cK(a8.b)&&q.c!=null)q.KN(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.l(new C.cO6(q))
C.VJ(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.l(new C.cO7(q))
q.aCC()
q.ahV()
if(!q.a.c.w)q.uK()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpk(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpl(d){var w,v,u,t,s,r,q,p=J.u(d,"phoneActions")
if(!x.j.b(p))return A.j1
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.cl1(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KN(d){return this.cxg(d)},
cxg(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiS(p,o,new C.cNZ(t,p)),$async$KN)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HH(p,null,o,!1,!0,t.a.c.a),$async$KN)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.K(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lU,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HH(p,l.f,o,k,n,j),$async$KN)
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
return B.b(C.b0C(p,B.a([new C.rU("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KN)
case 14:t.atu()
case 13:p=t.c.K(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dr,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KN,v)},
T7(d){return this.cG7(d)},
cG7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiS(d,n,new C.cOf(t)),$async$T7)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HH(d,null,n,!1,!0,t.a.c.a),$async$T7)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(B.b2(null,null,null,A.c9,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.lU,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HH(d,q.f,r,p,n,o),$async$T7)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T7,v)},
cyM(d){$.aU.x1$.push(new C.cO_(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cz,i=m.d
i===$&&B.d()
w=x.O
w=k?B.a([A.alm,D.bov],w):B.a([A.aN,A.yz],w)
v=B.m(22)
u=B.a([new B.ab(0,A.H,B.a0(71,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckT():l
s=B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hif(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.c("NGMY Helper",l,1,A.a2,l,l,l,A.dn,l,l,l)
s=B.o(l,l,A.f,l,l,D.b9d,l,8,l,l,l,l,l,8)
if(m.gaCZ()&&m.d===0)q=m.gPR()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.ba,B.E(B.x(B.a([r,A.bB,B.A(B.a([s,A.bm,B.E(B.c(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.i.S(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),l,l,l,l,l,l,l,l,11,l,l,A.cE,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.h,0,l,l)],p),A.D,l,A.e,A.h,0,A.p),1),B.aH(l,l,l,l,A.nX,l,l,l,new C.cOl(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.m),l,l,l,E.anj,D.bG_,l,l,l)
v=k?D.uy:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dP,A.r,1)
u=B.o(l,B.A(B.a([m.bKR(),m.cFR(1,A.lw,"Music")],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.m),l,l,l,l,A.eB,l,l,l)
t=m.e
t===$&&B.d()
if(m.gaCZ()){v=B.a([],p)
if(m.gPR()){s=B.a0(38,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255),A.r,1)
v.push(new B.D(A.OO,B.o(l,B.c(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i0j(m.gaYN())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fKA,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.m),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPR()){s=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
r=B.m(12)
q=B.m(12)
o=B.W(A.kh,k?A.iE:A.hQ,l,l,l,16)
v.push(new B.D(A.OO,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bm,B.c("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iE:A.hQ,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.h,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcwH(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHV():l
v.push(B.E(new C.asd(s,q,new C.cOm(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.h,0,A.p)}else v=m.bKS(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hvY(r)
t=B.a([w,A.af,new B.D(A.i3,u,l),A.P,B.E(B.hwW(B.a([v,new C.asg(q,o,n,new C.cOn(m,d),s,l)],p),A.t,t,A.y,new C.cOo(m),l),1)],p)
if(m.d===0&&!m.gaCZ()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6V:D.a6d
w.push(new B.a5(l,36,B.hY(l,new C.cOp(m),v.length,l,l,A.aM,new C.cOq(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.m()>>>16&255,r.m()>>>8&255,r.m()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.ft
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CS,l,l,l,l,!0,new B.b6(4,o,new B.aw(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOr(m),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWK,l,l),1)
s=m.at
r=s?l:m.gczN()
w.push(B.A(B.a([u,new B.JU(v,A.aN,l),A.bm,B.aF(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyO:N.at6,l),A.cP,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cP,l,l,A.aj)],p),A.dK,l,A.e,A.h,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lO:A.c
t.push(B.uB(A.un,B.o(l,new B.D(A.CN,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(18,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.r,1),A.un,l,l,A.m),l,l,l,l,l,l,l,l),14,!1))}return new B.XO(i,new C.cOs(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKR(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.d()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.i.S(255*(v?0.25:0.12)),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.i.S(127.5),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.r,1):q
s=B.W(A.v7,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
return B.E(B.ay(q,B.cV(q,B.A(B.a([s,A.bm,B.c("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eD,q,q,q,q,A.qS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNH(this),q,q,q,q,q,q,!1,A.a4),1)},
cFR(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.d()
w=p===d
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.i.S(255*(v?0.25:0.12)),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.i.S(127.5),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.r,1):q
s=B.W(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.av
else r=A.cC
r=B.a([s,A.bm,B.c(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cV(q,B.A(r,A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eD,q,q,q,q,A.qS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOe(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKS(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bv5:B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
w=B.m(18)
v=B.K(d?A.dq:A.bn,A.r,1)
u=q===0?1:q
return B.o(s,B.kt(!0,s,t.ok,new C.cNI(t,e,d),u,s,A.bS,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.m),s,s,s,A.i3,s,s,s,s)},
aS5(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.j1:this.cpl(d),k=m?A.my:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hif(this.a.f.Q,28),o),A.ab],j))
w=m?A.dK:A.D
j=B.a([],j)
if(h)j.push(D.ez4)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a02:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bn,A.r,1)
q=B.a([new B.ab(0,A.H,B.a0(10,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.dN,6)],x.V)
if(f)n=B.c("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.dZ,o,o,o,o,o,o,o,o,12,A.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ac:A.bs
p=B.c(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hdZ(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jW,A.jW,new B.aP(t,t),new B.aP(s,s)),q,o,A.m),o,o,o,o,Y.wO,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hJq(l,e,this.gcG6()))
i.push(new B.de(1,A.cl,B.x(j,w,o,A.e,A.h,0,A.p),o))
if(m)i.push(A.db)
return new B.D(A.da,B.A(i,A.dK,o,k,A.h,0,o,o),o)},
bKQ(d,e){return this.aS5(d,e,!1)}}
C.aNg.prototype={
Z(){this.a4()
$.zl().aV(0,this.gFa())},
t(){$.zl().a6(0,this.gFa())
this.a3()}}
C.aNh.prototype={
Z(){this.a4()
$.zl().aV(0,this.gFa())},
t(){$.zl().a6(0,this.gFa())
this.a3()}}
C.aNi.prototype={
Z(){this.a4()
$.zl().aV(0,this.gFa())},
t(){$.zl().a6(0,this.gFa())
this.a3()}}
C.aOf.prototype={
Z(){this.a4()
$.zl().aV(0,this.gFa())},
t(){$.zl().a6(0,this.gFa())
this.a3()}}
C.XD.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apx.prototype={
T(){return new C.aEY()}}
C.aEY.prototype={
Z(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B4(d,e){return this.cLH(d,e)},
cLH(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.dIu(q,e))
t=3
w=6
return B.b(d.$0(),$async$B4)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.l(new C.dIv(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B4,v)},
By(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$By=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.d()
w=3
return B.b(B.vj(r,q),$async$By)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dIl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$By,v)},
abw(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$abw)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.d()
q=t.e
q===$&&B.d()
p=t.f
p===$&&B.d()
u=B.OV(s,B.L_(B.c4T(r,q,s,p).f1(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abw,v)},
YT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pF(s,t.a.c,!1),$async$YT)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B4(new C.dIj(t),"Preparing download\u2026"),$async$YT)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YT,v)},
a_s(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pF(s,t.a.c,!1),$async$a_s)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B4(new C.dIt(t),"Creating QR code\u2026"),$async$a_s)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_s,v)},
a_r(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ijR(r),$async$a_r)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B4(new C.dIi(t,s),"Looking up code\u2026"),$async$a_r)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_r,v)},
af_(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$af_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xU.cq().N2(A.Tq,A.v2,!0),$async$af_)
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
case 6:u=B.HE()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af_,v)},
AI(d,e,f){return this.bNa(d,e,f)},
aTq(d,e){return this.AI(d,!1,e)},
bN9(d){return this.AI(d,!1,!1)},
bNa(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$AI)
case 3:if(t.c==null){w=1
break}if(!C.c4Y(d,t.a.c,null)){t.lg(C.c4Z(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.d()
s=!C.hX2(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ik3(s,q,t.a.c,d),$async$AI)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m0(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.d()
r=o}w=5
return B.b(B.rY(s,p,r,!1,null,null,d.ax),$async$AI)
case 5:if(t.c==null){w=1
break}t.l(new C.dIh(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AI,v)},
aeZ(){var w=0,v=B.j(x.H),u=this
var $async$aeZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B4(new C.dIk(u),"Reading file\u2026"),$async$aeZ)
case 2:return B.h(null,v)}})
return B.i($async$aeZ,v)},
Ya(d){return this.bOu(d)},
bOu(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ya=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.d()
s=new B.d9("local_qr_dep_"+1000*r,q.a,d,A.fX,A.fz,"Admin deposit ($"+B.dG(d)+")",null,null,A.cx,new B.V(Date.now(),0,!1))
C.cjW(t.d,s)
q=t.e
q===$&&B.d()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.rY(t.a.c,t.d,r,!0,null,null,null),$async$Ya)
case 3:w=4
return B.b(t.By(),$async$Ya)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Ya,v)},
b9o(d){var w=null
return B.ce(w,w,!0,w,new C.dIr(),d,w,!0,!0,x.N)},
Xc(d){return this.bGm(d)},
bGm(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$Xc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Ya(d.b),$async$Xc)
case 5:w=1
break
case 4:s=d.c
t.lg(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$Xc,v)},
Fv(d){return this.cui(d)},
cui(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$Fv)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3w(d,t.a.c),$async$Fv)
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
return B.b(t.b9o(r),$async$Fv)
case 5:q=f
if(q==null||A.a.i(q).length===0){u=!0
w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.d()
n=t.d
n===$&&B.d()
w=7
return B.b(C.cjP(d,o,n.a,r,p),$async$Fv)
case 7:w=6
return B.b(t.Xc(f),$async$Fv)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fv,v)},
Fw(d){return this.cuj(d)},
cuj(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$Fw)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjO(d,t.a.c),$async$Fw)
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
return B.b(t.b9o(r),$async$Fw)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.d()
n=t.d
n===$&&B.d()
w=7
return B.b(C.Xg(o,n.a,d,r,p),$async$Fw)
case 7:w=6
return B.b(t.Xc(f),$async$Fw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fw,v)},
Qb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DM()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).cc(B.ed(new C.dIm(),!0,null,x.N)),$async$Qb)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B4(new C.dIn(t,r),"Applying deposit\u2026"),$async$Qb)
case 6:w=1
break
case 5:w=7
return B.b(t.B4(new C.dIo(t,r),"Loading\u2026"),$async$Qb)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qb,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nE:A.qB,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aD(d,A.dF,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.W(A.eI,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cP,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dIw(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.h,0,o,o)
w=B.c("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.c("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cE,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a25(D.bTQ,"Download",A.a79,u?o:p.gbU7(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a25(A.jB,"Show QR",D.dDF,u?o:p.gca1(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r
s=B.E(new C.a25(D.bTR,"Upload",A.a6x,u?o:p.gca_(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a25(A.jC,"Scan QR",D.db2,u?o:p.gca0(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r?o:p.gc9Z()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.m(16)
j=B.a([B.cu(B.a([i,A.aB,w,A.P,v,A.lg,t,A.aB,s,A.aB,new C.bvD(A.ty,"Enter Code",A.a5U,u,o),A.lg,B.o(o,B.A(B.a([B.W(A.hs,A.aV,o,o,o,18),A.as,B.E(B.c("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.D,o,A.e,A.h,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.m),o,o,o,o,A.jy,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iO:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aF(!1,A.a3,!0,o,new B.D(A.CW,B.A(B.a([H.aVG,A.ba,B.E(B.c(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.h,0,o,o),o),A.f,i,8,o,o,o,o,o,A.aj),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a25.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.W(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.c(w.d,v,v,v,v,v,v,A.uf,v,v,v)],x.p),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,140,v,v,A.bS,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.bvD.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.W(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.c(w.d,v,v,v,v,v,v,A.uf,v,v,v)],x.p),A.l,v,A.b9,A.h,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,v,v,v,D.bId,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.a0J.prototype={
T(){return new C.bmn()}}
C.bmn.prototype={
gaz4(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a4()
w.S4()
w.f=B.dg(A.oB,new C.dIA(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a3()},
S4(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vj(q.e,q.f),$async$S4)
case 3:q=e.a
s=B.c4T(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OV(t.a.e,B.L_(s.f1(),null,"  ")),$async$S4)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.l(new C.dIx(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S4,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nE:A.qB,s=u?A.iO:A.c,r=u?A.c:A.bq,q=B.eR(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYS,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qi(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.c("Code: "+w.gaz4(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aV.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.W(A.fS,A.aV,v,v,v,14),A.bm,B.c("Copy code",v,v,v,v,v,v,B.l(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.m),v,v,v,v,A.lV,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dIy(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ae,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.c("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.m),v,v,v,v,A.ae,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bn,v,new C.dIz(d),B.bn(A.aV,v,v,v,v,A.hl,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.h,0,A.p),v),v,!1,!1,v,v)}}
C.a0K.prototype={
T(){return new C.bmo(B.zZ(A.yZ,A.ok,A.vv))}}
C.bmo.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h5v,w,w,w,1,w,!0),A.w,B.zY(this.d,A.bZ,new C.dIB(this,d)),w,!1,!1,w,w)}}
C.ag4.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iO:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dP,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.H,A.aV.j(0.16),A.kL,36)],x.V)
u=B.o(m,D.bZZ,A.f,m,m,new B.n(m,m,m,B.m(18),A.a78,D.c9X,A.m),m,58,m,m,m,m,m,58)
t=B.c("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.c("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nE:A.qB
q=B.m(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rk("Account",A.a.i(this.d),i,j,m),A.T,new C.Rk("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Rk("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Rk("Saved on",""+B.bL(f)+"/"+B.bX(f)+"/"+B.bD(f),i,j,m))
g.push(A.T)
g.push(new C.Rk("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.D,m,A.e,A.h,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.bS,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.W(A.tv,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cO(A.YB,new B.bP(new B.n(k,m,w,e,v,m,A.m),A.bl,new B.D(A.wT,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ab,B.E(B.c("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bL:A.ih,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.D,m,A.e,A.h,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.ez,m,m,1/0),A.dc,B.A(B.a([B.E(B.dU(A.oe,new C.f9l(a0),B.di(m,m,m,m,m,m,m,m,m,j,m,m,A.cm,m,new B.ba(B.m(14),A.a1),new B.aw(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fOv,m,new C.f9m(a0),B.bn(A.aV,m,m,m,m,m,A.cm,m,new B.ba(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.h,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rk.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.c(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.c(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.G,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.D,v,A.e,A.h,0,v,v)}}
C.a_R.prototype={
T(){return new C.aC9(new B.at(A.ax,$.ax()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aC9.prototype={
Z(){this.a4()
$.aU.x1$.push(new C.dhp(this))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a3()},
ca3(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iO:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nE:A.qB,p=u?A.aT:A.dP,o=B.m(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ab(0,A.H,A.aV.j(0.18),A.fU,32)],x.V),l=B.o(v,W.atQ,A.f,v,v,new B.n(v,v,v,B.m(18),A.a78,D.ccS,A.m),v,56,v,v,v,v,v,56),k=B.c("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.c("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.G,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uY(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bv6(new C.dhm())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cO(A.MB,new B.bP(new B.n(t,v,n,o,m,v,A.m),A.bl,new B.D(A.wT,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CV,v,v,"",v,!0,new B.b6(4,B.m(16),new B.aw(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b74),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dhn(w),v,!1,v,v,!1,v,!0,v,A.ae,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mF,v,v,v,v),A.e4,B.A(B.a([B.E(B.dU(A.oe,new C.dho(d),B.di(v,v,v,v,v,v,v,v,v,s,v,v,A.cm,v,new B.ba(B.m(14),A.a1),new B.aw(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fSm,v,w.gca2(),B.bn(A.aV,v,v,v,v,v,A.cm,v,new B.ba(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.h,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.P4,v,A.d7,v,v,v)}}
C.aq3.prototype={
T(){return new C.bmv(A.cU)},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()}}
C.bmv.prototype={
Z(){var w,v=this
v.a4()
w=v.a
w.toString
$.tV=$.tV+1
v.r=A.o.M(A.o.D(C.fTm(w.e,w.d.y2),1,600))
w=v.a
if(!J.lo(w.d.y2,w.e))v.r=C.ipv(v.a.e)
v.w=B.dg(A.fQ,new C.dOY(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cob()
C.b2j()
this.a3()},
cob(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.i.D(r.e/w,0,1)
if(v<=0)return
u=B.ot(A.i.ac(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d9(t,s.c.a,u,A.hc,A.fz,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cx,new B.V(Date.now(),0,!1)))
r.a.bu()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vf(u,q,"Left early \xb7 +$"+A.i.ac(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KX(d,e){return this.cAs(d,e)},
b91(d){return this.KX(!1,d)},
cAr(d){return this.KX(d,"")},
cAs(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KX=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.vf(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bHw(s,C.bHc(),C.hmf(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KX)
case 5:w=1
break
case 4:n=B.ot(A.i.ac(t.a.w*1.46*r,2))
m=r>=1
t.l(new C.dOP(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d9(s,p,n,A.hc,A.fz,q,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(l,!0)
t.a.hK(l)
t.a.bu()
if(m)k="+$"+A.i.ac(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.i.ac(n,2)+" ("+A.i.S(r*100)+"% of the prize)"}q=t.a
C.vf(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHw(s,C.bHc(),C.hmf(),""+t.e+"/"+t.f,k,q,!0),$async$KX)
case 6:w=7
return B.b(C.aiI(t.a.f,k),$async$KX)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KX,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.d()
w=A.o.ar(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.QN,o,o,o,new C.dOS(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.c(t.f,o,1,A.a2,o,o,o,A.jX,o,o,o),B.c("Win $"+A.i.ac(t.w*1.46,2)+" \xb7 stake $"+A.i.ac(p.a.w,2),o,o,o,o,o,o,D.fCT,o,o,o)],s),A.D,o,A.e,A.h,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.arR(r,new C.dOT(p),o),A.bm,B.cV(o,B.A(B.a([D.c3R,A.db,B.c(""+w+":"+v,o,o,o,o,o,o,A.iM,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o,o,A.b_,new B.n(n,o,o,q,o,o,A.m),A.a3,o,o,o,o,A.nM,o,o,o)],s),A.l,o,A.e,A.h,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSo(o,D.bwf,B.bm(!0,B.x(B.a([new B.D(D.bKp,q,o),new C.Ov(w*r,w,v,o),new B.D(E.anN,B.A(B.a([B.E(B.bw(B.m(99),B.kc(A.bw,o,o,9,o,r,new B.mf(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.c(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fMB,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o),B.E(new B.D(A.z7,B.bw(B.m(22),new B.bP(new B.n(o,o,o,o,o,new B.a7(A.aY,A.b4,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.ald],x.O),o,o),A.m),A.bl,new B.dp(p.x,Q.hHV(p.a.e,new Q.A5(new C.dOU(p),new C.dOV(p),new C.dOW(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a89.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ab(0,A.H,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bYa,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h1f,A.P,B.c("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.c("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fPh,w,new C.cdX(d),B.bn(A.at,w,w,w,A.w,A.hl,w,w,new B.ba(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.caC,A.m),w,w,w,w,D.bIE,w,w,w),w,w,w,A.a1V,w,A.d7,w,w,w)}}
C.apw.prototype={
T(){return new C.bml(null,null)},
ga_(d){return this.e}}
C.bml.prototype={
Z(){var w,v=this,u=null
v.a4()
w=v.d=B.bp(u,A.CJ,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dI6(v))
w=B.bp(u,A.mj,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.Ou,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dI7(v))
if(v.a.c){v.d.cK(0)
v.e.bR(0)
v.f.bR(0)}},
by(d){var w,v,u=this
u.bJ(d)
w=u.a.c
if(w){v=u.d
v===$&&B.d()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&B.d()
w.cK(0)
w=u.e
w===$&&B.d()
w.bR(0)
w=u.f
w===$&&B.d()
w.bR(0)}else if(!w&&d.c){w=u.d
w===$&&B.d()
w.bR(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&B.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.f
w===$&&B.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)}},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
w.bzV()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Tr[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Tr[A.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.v(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.v(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dr:A.bE
else if(w!=null){b1=(w>0?A.dr:A.bE).j(0.45)
u=b1}else u=A.c
b1=a9.a.c
if(b1){b3=a9.d
b3===$&&B.d()
b3=b3.x
b3===$&&B.d()
t=b3*3.141592653589793*2}else t=0
b3=a9.e
b3===$&&B.d()
b3=b3.x
b3===$&&B.d()
s=b3*3.141592653589793*2
b3=a9.f
b3===$&&B.d()
b3=b3.x
b3===$&&B.d()
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
b3=B.a([B.e1(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ab(6+e,A.H,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.H,A.bb.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bi,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.H,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wX(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(b2*0.5),B.a([new B.ab(b2*0.02,A.H,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.m),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.dt()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fE(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.dhb
else{a2=B.ap(A.c,A.kU,q*0.45)
a2.toString
a2=B.a([a2,A.cg,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.H,A.w.j(0.3),D.evk,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.H,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.H,A.c.j(0.9),A.UX,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bP(new B.n(b0,b0,b0,B.m(d),b0,new B.a7(new B.dd(-1+Math.cos(j)*0.8,-1),new B.dd(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.m),A.bl,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.m),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.d8(A.w.j(0.18),A.dN,5)],x.C)
if(!a9.a.c)d.push(new B.d8(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uM(B.c(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b_,A.jw,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.m),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNO.prototype={
aY(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a3()}}
C.Ov.prototype={
B(d){var w=null,v=new C.cgo(),u=v.$3("STAKE","$"+A.i.ac(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.H,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OO,B.A(B.a([u,B.o(w,B.x(B.a([D.h_T,B.lC(new C.cgn(),w,A.b_,A.n4,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.auI,A.m),w,w,w,w,A.P0,w,w,w),v.$3("FULL WIN","$"+A.i.ac(this.d,2),A.bL)],q),A.l,w,A.e,A.h,0,w,w),w)}}
C.arR.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.k3.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bWB,A.db,C.asG(this.d,A.oc,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.auI,A.m),w,w,w,w,A.Pb,w,w,w)},
ge3(){return this.c}}
C.OD.prototype={
T(){return new C.bn5(null,null)}}
C.bn5.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.mj,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bAx()},
aQW(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.ivT(),v),v.k("ak.E"))
w=this.d
w===$&&B.d()
return B.c7(w,new C.e7L(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akv,B.bm(!0,this.aQW(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aQW(0,d)},
azT(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.W(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,32,w,w,w,w,w,32),A.as,B.E(B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w)}}
C.aOp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.aeW.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aD(d,A.dF,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e7O()).gL(0),j=new B.ee(l.dO(m,new C.e7P(),x.cD),x.bG).cC(0,0,new C.e7Q())
o=B.aD(d,A.bY,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.m),p,4,p,p,p,p,p,42),new B.D(A.ao4,B.A(B.a([B.o(p,D.c6o,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ab(0,A.H,A.fe.j(0.45),A.J,14)],x.V),D.auB,A.m),p,44,p,p,p,p,p,44),A.ba,D.bMO,B.aH(p,p,p,p,A.ly,p,p,p,new C.e7R(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.h,0,p,p),p)],w)
if(l.gcn(m)){u=C.hgv("GAMES",""+l.gL(m),A.ey)
t=C.hgv("WON",""+k,A.k3)
s=j>=0
r=s?"+":"-"
q=C.bDL(j)
s=s?A.k3:A.eW
v.push(new B.D(D.bGM,B.A(B.a([u,A.ab,t,A.ab,C.hgv("NET",r+q,s)],w),A.l,p,A.e,A.h,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.W(D.bSz,A.c.j(0.35),p,p,p,52),A.af,B.c("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.G,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.c("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.h,0,A.p),p))
else v.push(new B.de(1,A.cl,B.hY(p,new C.e7S(this),l.gL(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7T(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9V,p,p,p,p,p,p,p,p)}}
C.aeV.prototype={
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
t=s}if(w)r=A.c_
else if(u)r=A.dA
else{w=v?A.aQ:A.bv
r=w}q=h.gbkS()
w=new C.e7N()
s=B.m(14)
p=B.a([r.j(0.13),D.buZ],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.W(g?A.mp:A.cB,r,i,i,i,16)
m=B.E(B.c(h.b,i,1,A.a2,i,i,i,A.ue,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.c(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.m),i,i,i,i,D.bKh,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDL(q)}else{l=g?"+":"-"
l+=C.bDL(h.d)}j=x.p
l=B.A(B.a([n,A.bm,m,k,A.bm,B.c(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.h,0,i,i)
k=C.e7M("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.db,C.e7M("PAID",C.bDL(g?h.d:0),r),A.db,C.e7M("BEFORE",w.$1(h.x),A.ey),A.db,C.e7M("AFTER",w.$1(h.y),A.dA)],j),A.l,i,A.e,A.h,0,i,i)
n=C.ir3(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.am,w,A.aw,B.c(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.h,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.m),i,i,i,i,A.kd,i,i,i)}}
C.aCT.prototype={
T(){return new C.biB(A.cU,null,null)}}
C.biB.prototype={
Z(){var w,v,u,t=this
t.a4()
w=B.bp(null,A.n3,null,1,null,t)
w.cK(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afj(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a8l,A.tL,A.d3,A.c][w.aw(4)],[A.i5,A.ki,A.ea,A.x0][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bzp()},
B(d){var w=null,v=this.d
v===$&&B.d()
return B.as(B.aF(!1,A.a3,!0,w,B.c7(v,new C.dox(this,d),w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)}}
C.afj.prototype={
ga_(d){return this.f}}
C.aNj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.b36.prototype={
B(d){return new B.wq(new C.ciP(this),null,new B.he(B.a([$.zl(),$.a4s()],x.U)),null)},
ge3(){return this.c}}
C.O7.prototype={
ci2(){if(this.c!=null)this.l(new C.c6d())}}
C.JG.prototype={}
C.are.prototype={
T(){return new C.aFJ(A.cU,new B.at(A.ax,$.ax()))},
cNs(){return this.d.$0()},
cZq(){return this.f.$0()},
cZe(d,e){return this.r.$2(d,e)},
d_1(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFJ.prototype={
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
avA(){var w=B.cG(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avA()
if(s<2){t.azU("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cNs()<s){t.azU("Insufficient balance.")
w=1
break}if(!t.a.cZe(s,"Dice Roll bet")){t.azU("Could not place bet.")
w=1
break}t.a.toString
t.l(new C.e0g(t))}w=3
return B.b(C.cf6(t.a.e),$async$BB)
case 3:r=t.a
q=C.itk(r.e,r.c,t.d)
t.a.cZq()
B.b1H(t.a.e)
t.l(new C.e0h(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bN(new B.bf(1000*(40+p*6)),null,r),$async$BB)
case 7:if(t.c==null){w=1
break}new C.e0i(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bN(A.ka,null,r),$async$BB)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hkV(q)
t.l(new C.e0j(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.d_1(m,"Dice Roll "+n,o)
t.l(new C.e0k(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.i.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(m,2)+" added to your balance"
w=12
return B.b(C.bHw(r,C.bHc(),new C.e0l(t),n,k,"YOU WIN!",!0),$async$BB)
case 12:w=13
return B.b(C.aiI("Dice Roll",l?"+$"+A.i.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(m,2)+" added to your balance"),$async$BB)
case 13:w=10
break
case 11:w=14
return B.b(C.bHw(r,C.bHc(),new C.e0m(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BB)
case 14:C.vf(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BB,v)},
azU(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avA(),d=x.w,a0=B.aD(a2,A.dF,d).w,a1=Math.min(B.aD(a2,A.bY,d).w.a.a*0.44,200)
d=B.hu(A.at1,D.h7t,new C.e0p(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b1,B.o(f,B.A(B.a([A.asX,A.bm,C.asG(v.d,A.j7,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.m),f,f,f,f,A.lW,f,f,f)],t),A.l,f,A.e,A.h,0,f,f)
u=g.z
v=B.a0(140,D.a09.m()>>>16&255,D.a09.m()>>>8&255,D.a09.m()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apw(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.m),f,f,f,f,f,f,f,1/0),1)
v=B.c("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Tr[q]
o=C.hkV(p)
n=p>0?A.bj:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.aw(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.H,n.j(0.65),A.J,14)],r):A.Te
m=m?18:15
s.push(new B.bz(1,A.bd,new B.D(A.jg,B.o(A.z,B.c(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bF(h,h,h,h),new B.be(j,j,j,j),n,f,A.m),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.h,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hkV(v)
s=g.r
s.toString
d.push(new B.D(A.jx,B.c("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.be:A.c_,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.c("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),f,f,f,f,f,f,f,f,12,f,f,A.G,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e0q(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v.push(B.E(new B.D(A.a20,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.m(10),A.a1),f,A.jQ,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.m4,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.hb,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.h,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.c("Perfect Score Profit: +$"+A.i.ac(g.avA()*0.46,2),f,f,f,f,f,f,I.aXA,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.i3,B.x(d,A.al,f,A.e,A.h,0,A.p),f),1)
v=g.x?f:g.gcwZ()
s=B.fv(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.m(14),A.a1),f,f,f,f,f)
return C.aSo(f,D.a0n,B.bm(!0,B.x(B.a([new B.D(D.bKK,w,f),new C.Ov(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iz(B.c("\ud83c\udfb2 ROLL ($"+A.i.ac(e,2)+")",f,f,f,f,f,f,A.lF,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.h,0,A.p),1)],t),A.l,f,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arX.prototype={
T(){return new C.aFZ(A.lc,new B.at(A.ax,$.ax()))},
cZ6(d){return this.e.$1(d)}}
C.aFZ.prototype={
gaun(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cU.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRv(){var w=this.d,v=this.a
return w===A.lc?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaN(){var w=this.gRv(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
JN(d,e){return this.bND(d,e)},
bND(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fH(new B.fy(d)),$async$JN)
case 2:B.eY()
t=u.c
if(t!=null)t.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JN,v)},
Rq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRv().length===0){r.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jo()
o=A.i.ac(r.a.d,2)
q=r.d===A.lc?B.cD("https://cash.app/"+r.gaaN()+"/"+o,0,null):B.cD("bitcoin:"+r.gRv(),0,null)
t=4
w=7
return B.b(B.iQ(q,A.fp,null),$async$Rq)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.lc?r.gaaN():r.gRv()
w=10
return B.b(r.JN(n,r.d===A.lc?"Cash App tag":"Bitcoin address"),$async$Rq)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.lc?r.gaaN():r.gRv()
w=11
return B.b(r.JN(n,r.d===A.lc?"Cash App tag":"Bitcoin address"),$async$Rq)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rq,v)},
a1Y(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().blE(A.eT),$async$a1Y)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a1Y)
case 4:s=e
t.l(new C.e7Z(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1Y,v)},
cef(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.lc?C.hJg(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.lc?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cZ6(new B.d9(s,w.c.a,w.d,A.fX,v.d,r,v.f,v.gaun(),A.dI,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eR(o,o,o,!0,!0,A.Cb,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.Ix,o,o,o,new C.e8_(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fR0,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f0.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.H,A.b5.j(0.25),A.eO,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.c("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.G,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dl(A.dC,A.z,A.f,B.c("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fyS,o,o,o),o),A.am,B.c("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f0.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cdG,A.m),o,o,o,o,A.aoh,o,o,o)
m=p.c8I()
l=p.aDF(1,"Send the money to NGMY Pay",p.ced())
w=p.aDF(2,"Put this code in the payment note",p.bMd())
v=p.d===A.lc
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDF(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.aw(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uN,!0,o,o,o,o,new B.b6(4,B.m(18),D.b7_),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fAo,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.uf,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f0:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bw(B.m(14),new B.cO(D.b8p,new B.FB(p.f,o),o),A.aq),A.P,D.fji,A.aw],i),A.l,o,A.e,A.h,0,A.p):B.x(B.a([B.o(o,D.c5y,A.f,o,o,new B.n(D.f0.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fWy,A.cT,B.c("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p)
return B.c5(n,A.Cb,B.as(new B.cO(A.afM,B.cu(B.a([j,A.bx,m,A.bx,l,w,t,p.baC(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uN,o,s,u,o,o,A.m),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcq4(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.c(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bP(new B.n(o,o,o,B.m(18),B.a([new B.ab(0,A.H,A.b5.j(0.45),A.dm,18)],k),D.ccd,A.m),A.bl,B.lP(A.atE,D.h6E,p.gcee(),B.fv(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHM,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c8I(){var w=null,v=new C.e7V(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.lc,A.hG,"Cash App"),A.e3,v.$3(A.aa7,D.asA,"Bitcoin")],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.n(A.uN,w,t,u,w,w,A.m),w,w,w,w,A.lX,w,w,w)},
baC(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.c(""+d,v,v,v,v,v,v,D.fFX,v,v,v),A.f,v,v,D.b98,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f0.j(0.18),v,v,v,v,v,A.wK,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.h,0,A.p)
w=g?12:20
return new B.EZ(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a1i,B.c(e,v,v,v,v,v,v,A.Lm,v,v,v),v),f],u),A.al,v,A.e,A.h,0,A.p),v),1)],u),A.al,v,A.e,A.h,0,v,v),v)},
aDF(d,e,f){return this.baC(d,e,f,!1)},
ced(){var w,v,u,t,s=this,r=null,q=s.d===A.lc?s.gaaN():s.gRv(),p=B.m(20),o=B.m(20),n=s.d===A.lc,m=n?D.cb6:D.cd1,l=B.a([new B.ab(0,A.H,(n?A.a_L:K.yE).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.lc
w=n?A.hG:D.asA
k=B.o(r,B.W(w,n?A.a_L:K.yE,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.m),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.c(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.lc
t=u?22:13
v=B.c(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bB,v,A.aw,B.A(B.a([D.c0I,A.db,B.c(s.d===A.lc?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.ru,r,r,r)],u),A.l,r,A.e,A.h,0,r,r)],u),A.D,r,A.e,A.h,0,A.p),1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.ba,v,B.aH(r,r,r,r,D.c_G,r,r,r,w?r:new C.e7Y(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.h,0,r,r),r,new B.n(r,r,r,o,l,m,A.m),r,A.anH,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gclc(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)},
bMd(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b3.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaun().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b3.j(0.28),A.b3.j(0.08)],u)
p=new B.aw(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.c(s,o,o,o,o,o,o,A.qb,o,o,o),A.f,o,o,new B.n(o,o,new B.bF(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b4,A.x,q,o,o),A.m),o,52,o,A.jg,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.h,0,o,o),A.af,B.A(B.a([B.E(B.c('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ab,B.hu(A.a4U,D.h8E,new C.e7U(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.h,0,o,o)],l),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(A.uN,o,m,n,o,o,A.m),o,o,o,o,A.bH,o,o,o)}}
C.rT.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rU.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWL(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hth(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aN(v," \xb7 ")},
giK(d){return this.c}}
C.lU.prototype={
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
w=J.b9(v.c,new C.chN(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.iq.prototype={
amY(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.iq(v,u,t,s,r,h==null?w.f:h)},
bgg(d){var w=null
return this.amY(w,w,w,w,d,w)},
cRj(d,e,f){return this.amY(d,e,null,null,null,f)},
bgf(d){var w=null
return this.amY(w,w,w,d,w,w)},
cQY(d,e){var w=null
return this.amY(w,w,d,w,e,w)},
aj(){var w=this,v=C.iex(w.c),u=w.e,t=B.T(u).k("N<1,ac<q,@>>")
u=B.B(new B.N(u,new C.chL(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bc1.prototype={}
C.WW.prototype={
T(){return new C.aGa(new B.at(A.ax,$.ax()),B.mR(0,null,null),B.a([],x.m))},
Vh(d){return this.d.$1(d)}}
C.aGa.prototype={
Z(){var w,v=this
v.a4()
w=J.b9(v.a.c,new C.ec4(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ec5())
v.d=w
v.JX()},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.x.t()
this.a3()},
ag3(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JX()
u.l(new C.ebZ(u))
t=u.a
t.toString
s=u.d
s===$&&B.d()
w=2
return B.b(t.Vh(s),$async$ag3)
case 2:r=e
if(u.c!=null){u.l(new C.ec_(u))
t=u.c.K(x.q).f
s=B.c(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dr:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ag3,v)},
aa_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.d()
s=new C.iq(q,"New Category",A.I7,4284773515,D.aDz,p.length)
t.l(new C.ebI(t,s))
t.JX()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ce(null,null,!0,null,new C.ebJ(s),p,null,!0,!0,x.i),$async$aa_)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ebK(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
a2U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.l(new C.ebW(t,p))
q.bP(0,A.ci)
q=t.a.e
s=t.d
s===$&&B.d()
w=3
return B.b(C.chI(p,q,s),$async$a2U)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ebX(t,r))
$.aU.x1$.push(new C.ebY(t))
case 1:return B.h(u,v)}})
return B.i($async$a2U,v)},
ac1(d){return this.bSt(d)},
bSt(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.d()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ebQ(t),r,null,!0,!0,x.i),$async$ac1)
case 2:s=f
if(s!=null)u.l(new C.ebR(u,d,s))
return B.h(null,v)}})
return B.i($async$ac1,v)},
bQ7(d){this.l(new C.ebP(this,d))
this.JX()},
JX(){var w,v,u=this.d
u===$&&B.d()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bgg(v)},
ciy(d,e){var w={}
w.a=e
this.l(new C.ebV(w,this,d))},
a_7(d){return this.c7E(d)},
c7E(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ed(new C.ebU(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).cc(t),$async$a_7)
case 2:return B.h(null,v)}})
return B.i($async$a_7,v)},
bIj(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.h0,A.bs],l):B.a([A.po,A.eQ],l)
w=B.m(16)
v=B.K(m?A.d9.j(0.35):A.dA,A.r,1)
u=B.W(A.ea,m?A.dA:A.dX,n,n,n,n)
t=B.E(B.c("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a3b:V.PD
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ab,t,B.W(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.h,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ebM(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.uy:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.kt(!0,n,o.x,new C.ebN(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afH,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.cr,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.m(14),A.a1),n,A.eR,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebO(o),n,!1,n,n,!1,n,!0,n,A.ae,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcxf()
p=B.bn(A.bp,n,n,n,n,n,A.jy,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JU(t,A.bp,n),A.db,B.bJ(o.f?A.rp:D.asO,n,m,p)],r),A.dK,n,A.e,A.h,0,n,n))
A.d.u(s,u)}return B.cV(n,B.x(s,A.al,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.m),A.iU,n,n,n,A.Hq,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bc1(t),r=t?A.bA:A.cg,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.c("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcej()
if(n)n=A.L_
else n=B.W(A.zI,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eR(B.a([B.hu(n,B.c("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXC(A.aN,u,A.YP,A.oW,D.h4R,v.gbEA())
q=v.bIj(s)
n=B.c("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.d()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hq,n,u),B.E(G.hxO(!1,new C.ec3(v,s),m.length,v.gcix(),D.bGy,u,!1),1)],w),A.al,u,A.e,A.h,0,A.p),u,!1,!1,p,u)}}
C.QI.prototype={
T(){return new C.be_()}}
C.be_.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bc(w.b,A.b8,A.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.uy:A.c,p=B.c("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.d()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c7k,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ae,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.ce9,new C.cXq(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.ddV,new C.cXr(t),v),v.k("ak.E"))
u=x.p
v=B.cc(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bO(!1,A.dp,s,s,!0,s,s,s,new C.cXs(d),s,s),B.bJ(A.rv,s,new C.cXt(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1v.prototype={
T(){return new C.aIc()},
pp(d){return this.d.$1(d)}}
C.aIc.prototype={
Z(){this.a4()
this.d=B.bs(this.a.c.e,!0,x.u)},
azW(){var w=this.a,v=w.c,u=this.d
u===$&&B.d()
return w.pp(v.bgf(u))},
aa1(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aa1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.d()
w=2
return B.b(u.b4h(new C.iC("q_"+1000*s,"",D.dcl,null,!1,r.length)),$async$aa1)
case 2:t=e
if(t!=null){u.l(new C.f4f(u,t))
u.azW()}return B.h(null,v)}})
return B.i($async$aa1,v)},
b4h(d){var w,v=this.c
v.toString
w=B.ed(new C.f4g(d),!1,null,x.u)
return B.a6(v,!1).cc(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.cg,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eR(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.c(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXC(A.aN,v,A.YP,A.oW,D.haN,w.gbF1())
q=w.d
q===$&&B.d()
q=q.length
if(q===0){q=B.as(B.c("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hY(v,new C.f4l(w,new C.bc1(u)),q,D.bGH,v,A.ah,new C.f4m(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1u.prototype={
T(){return new C.aIb()}}
C.aIb.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bc(w.b,A.b8,A.aP),$.ax())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c4(v.e,D.a9g)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a3()},
ag2(){var w=0,v=B.j(x.H),u=this,t
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DP(78,1920),$async$ag2)
case 2:t=e
if(t!=null)u.l(new C.f4b(u,t))
return B.h(null,v)}})
return B.i($async$ag2,v)},
ahb(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ed(new C.f49(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).cc(t),$async$ahb)
case 2:s=e
if(s!=null)u.l(new C.f4a(u,s))
return B.h(null,v)}})
return B.i($async$ahb,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.cg,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.c("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eR(B.a([B.db(M.a52,i,A.rv,new C.f4d(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.c("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.G,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bw(e,B.aSt(B.m(14),A.bZ,140,A.Dc,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcei(),i,i,i,i,i,i,!1,A.a4)
e=B.c("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.G,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aL:A.bn,A.r,1)
s=j.d
s===$&&B.d()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eP,i,A.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cE,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ae,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JU(j.d,i,i)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.m),i,i,i,i,A.eB,i,i,i)
u=B.c("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f4e(j),i,B.c("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.c("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.c("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uy:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bZj,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.m),i,i,i,i,A.bk,i,i,i)
l=B.c("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.d()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.aw,B.c(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.D,i,A.e,A.h,0,A.p),1)
return B.c5(d,g,B.cu(B.a([f,A.P,w,A.dc,e,A.P,v,A.aO,u,A.P,t,A.aw,s,A.af,B.aF(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.W(A.zE,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.m),i,i,i,i,A.fo,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gck9(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.aj)],a0),i,i,A.bS,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.dek.prototype={}
C.WX.prototype={
T(){return new C.aGc(B.kb(!0,null,!0,!0,null,null,!1))}}
C.aGc.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dH(q.a.c,new C.ecF())
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
q.d=new B.at(new B.bc(w,A.b8,A.aP),$.ax())},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.f.t()
this.a3()},
azX(d,e){var w,v,u,t,s,r=this.d
r===$&&B.d()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.az(v,r,u)+e
s=A.a.ol(v,r,u,t)
this.d.bP(0,new B.bc(s,B.ho(A.bC,r+t.length),A.aP))},
b2h(d){var w,v,u,t,s=this.d
s===$&&B.d()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.ol(w,v,v,u)
this.d.bP(0,new B.bc(t,B.ho(A.bC,v+u.length),A.aP))},
adK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DP(78,1920),$async$adK)
case 3:s=e
if(s==null){w=1
break}t.l(new C.ecl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adK,v)},
Zy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().a7m(A.eT),$async$Zy)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fs(),$async$Zy)
case 4:t.l(new r.ecq(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zy,v)},
adL(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.at(A.ax,t)
r=new B.at(new B.bc("https://",A.b8,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.eco(s,r),q,null,!0,!0,x.y),$async$adL)
case 2:if(e===!0)u.l(new C.ecp(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adL,v)},
bJg(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.d()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ech(),B.T(p).k("N<1,q>")).c0(0,new C.eci())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.lU("heading",A.a.i(A.a.aX(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.lU("bullets",new B.N(B.a(s.split("\n"),u),new C.ecj(),t).c0(0,new C.eck()).aN(0,"\n"),r,r))
else q.push(new C.lU("text",s,r,r))}p=this.e
p===$&&B.d()
A.d.u(q,p)
if(q.length===0)q.push(D.a9g)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.dek(n),l=n?A.av:A.hp,k=B.c(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eR(B.a([B.db(M.a52,o,A.ad0,new C.ecv(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hP
v=B.c_(A.bI,B.a([p.wm(A.PE,"Bold",new C.ecw(p),m),p.wm(A.a3d,"Italic",new C.ecx(p),m),p.wm(A.aqc,"Underline",new C.ecy(p),m),p.wm(Z.a3k,"Heading",new C.ecz(p),m),p.wm(A.PF,"Bullets",new C.ecA(p),m),p.wm(A.aqb,"Align",new C.ecB(),m),p.wm(A.HO,"Link",p.gc4n(),m),p.wm(A.qY,"Image",p.gc4m(),m),p.wm(O.a3y,"Video",p.gc4o(),m),p.wm(A.a4H,"Signature",new C.ecC(p),m),p.wm(O.PG,"Divider",new C.ecD(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.am,B.c("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bh,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.h,0,A.p),A.f,w,o,o,o,o,o,o,A.aoP,o,o,o)
v=n?A.bA:A.c
u=B.m(12)
t=B.K(n?A.cR:A.dP,A.r,1)
s=B.a([new B.ab(0,A.H,A.w.j(n?0.35:0.08),A.cN,16)],x.V)
r=p.d
r===$&&B.d()
q=B.l(o,o,n?A.iC:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bS,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eP,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.m),o,o,o,o,R.CZ,o,o,o),o),1)],j)
n=p.e
n===$&&B.d()
if(n.length!==0){n=new B.id(n,B.T(n).k("id<1>"))
j.push(B.o(o,B.c_(A.bI,n.gdQ(n).dO(0,new C.ecE(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OR,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.h,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.m(8),s=B.m(8)
return B.hd(B.aF(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cr,B.W(d,v?A.iC:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.aj),w,e,w,w)}}
C.dsQ.prototype={}
C.aDN.prototype={
a7(){return"_KbView."+this.b}}
C.asd.prototype={
T(){return new C.aGb(D.b2o)},
cYi(d,e){return this.e.$2$size(d,e)}}
C.aGb.prototype={
gaCP(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gczu(){var w,v,u,t,s,r=this.gaCP()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cek(d){this.l(new C.ece(this,d))},
cll(d){this.l(new C.ecf(this,d))},
bHo(){this.l(new C.ec6(this))},
bHq(){this.l(new C.ec7(this))},
gba1(){var w=B.bs(this.a.c,!0,x.i)
A.d.b0(w,new C.ecg())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsQ(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eQ.j(0.55),A.nA.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aL:A.fv).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIw(f)
break
case 1:g=i.gaCP()
g.toString
g=i.bJe(f,g)
break
case 2:u=i.gaCP()
u.toString
t=i.gczu()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.c(t.b,h,h,h,h,h,h,D.fEX,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.m),h,h,h,h,A.bH,h,h,1/0)
q=g?A.av:A.c
p=B.m(16)
o=B.K(g?A.aL:A.bn,A.r,1)
n=B.a([new B.ab(0,A.H,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.h0:A.po
l=B.m(8)
k=B.W(A.oN,g?A.dA:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDL(f,i.gbHp(),u.c,s,"Answer",h),B.E(B.cu(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e3,B.c("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dA:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.G,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.m),h,h,h,A.e8,A.hr,h,h,h),new C.b2E(t.c,t.e,f,h)],j),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.m),h,h,h,h,A.bS,h,h,1/0)],j),h,h,A.anA,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.h,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aY,A.b4,A.x,e,h,h),A.m),h,h,h,A.i3,h,h,h,h)},
b_l(d){var w,v,u,t=null,s=d.a,r=s?D.uy:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.H,q,A.J,14),new B.ab(0,A.H,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.fv,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i4(v.cYi(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.c("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dr,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.h,0,A.p)},
bIw(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_l(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_l(d),t,t,t)
w=d.a
v=B.c("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cu(B.a([s,A.aB,v,A.am,B.c("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,E.aVM,new C.ec9(u,d),u.gba1().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGI,t,t,A.ah,!1)},
bJe(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b0(r,new C.ecb())
w=B.b1(e.d)
v=d.a
u=B.c("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.c("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hY(s,new C.ecc(this,r,d,e),t,A.wN,s,A.ah,new C.ecd(),!1)
return B.x(B.a([new C.aDL(d,this.gbHn(),e.c,w,e.b,s),new B.D(A.wP,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.h,0,A.p)}}
C.aDL.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.W(A.eI,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.W(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.m),v,v,v,v,A.cr,v,v,v)
return new B.D(D.bK3,B.A(B.a([t,q,A.as,B.E(B.c(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v),v)}}
C.adq.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uy:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aL:A.bn,A.r,1),n=B.a([new B.ab(0,A.H,A.w.j(t?0.28:0.06),A.dN,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.W(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.m),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.am,B.c(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.G,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.h,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.m),w,w,w,w,A.cr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj),w)}}
C.b2E.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.h0:A.po
u=B.m(8)
t=B.W(A.vi,w?A.dA:A.dX,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.db,B.c("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dA:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.m),s,s,s,A.cy,A.eS,s,s,s))}A.d.u(p,J.b9(this.c,new C.chJ(r),x.l))
return B.x(p,A.D,s,A.e,A.h,0,A.p)}}
C.adh.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bEo,B.c(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hD,B.bw(B.m(12),B.aSt(r,A.bZ,160,A.qY,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hD,new C.aDM(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wK,B.aM(!1,r,!0,B.c(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.ct:A.bp,r,A.nj,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQI(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iR(v?A.aL:A.bn,r,r,r,r,r)
q=B.c(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cK,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.z4,B.x(B.a([u,q,A.aO,t,A.aw,B.c("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.D,r,A.e,A.h,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cN(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQJ(),x.cc),new C.cQK(s),v),v.k("M.E"))
return new B.D(A.kc,B.x(q,A.D,r,A.e,A.h,0,A.p),r)
case"divider":return new B.D(A.hD,B.iR(s.d.a?A.aL:A.bn,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eL,C.i8p(q,s.d),r)}}}
C.aDM.prototype={
T(){return new C.bk9()}}
C.bk9.prototype={
Z(){this.a4()
this.ag4()},
ag4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ag4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d2(n,"http")&&!J.d2(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZT(B.cD(n,0,null),null)
w=7
return B.b(J.a4v(q),$async$ag4)
case 7:if(r.c==null){w=1
break}r.l(new C.dsR(r,q))
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
return B.i($async$ag4,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.ft
u=B.m(12)
return B.o(A.z,B.W(A.r6,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.m),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajE(v)
return B.bw(w,new B.fG(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AN(s,t),B.aH(t,t,t,t,B.W(v.f?A.aqj:A.PH,A.c,t,t,t,44),t,t,t,new C.dsT(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.at3.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JL.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rZ.prototype={}
C.asg.prototype={
T(){var w=null
return new C.aGd(new B.at(A.ax,$.ax()),B.mR(0,w,w),B.a([],x.m),D.EA,D.aMC,w,w)},
ge3(){return this.d}}
C.aGd.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.nJ,null,1,null,v)
w.eU(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7F).a},
t(){var w=this,v=w.as
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.e.t()
w.bAG()},
gasU(){var w,v,u,t,s=this.x
if(s===D.EB)return null
s=s===D.EA
w=s?D.a7F:D.a6K
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cAh(d){return this.l(new C.ecT(this,d))},
aCB(){$.aU.x1$.push(new C.ecK(this))},
JO(d){return this.czI(d)},
b2i(){return this.JO(null)},
czI(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a1=A.d.aS(a0,new C.ecM())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hDA(a8)&&a1
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
l=C.hDA(a8)&&!p
q.l(new C.ecN(q,a8))
q.aCB()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.l(new C.ecO(q))
q.aCB()
w=1
break}t=5
j=B.nm(k)
i=new B.N(a0,new C.ecP(),B.T(a0).k("N<1,q>")).aN(0,"\n\n")
a0=C.isI(m,p,o,q.x,n,q.y,q.gasU(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.v(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.v(a8)
w=8
return B.b(B.rm(j,h,A.i6,null,null),$async$JO)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFE(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.l(new C.ecQ(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.l(new C.ecR(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.l(new C.ecS(q))
q.aCB()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JO,v)},
bNl(){return this.JO("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GY:D.bte,o=x.p
o=B.a([B.x(B.a([B.E(s.cyX(q),1),s.bMy(q)],o),A.l,r,A.e,A.h,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNk()
u=B.m(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.ez8,r,new B.n(r,r,r,u,B.a([new B.ab(0,A.H,A.aQ.j(0.45),A.cN,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r),A.o7,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o7,r,r,A.aj),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cyX(d){var w,v,u,t=this,s=null
if(t.x===D.EB)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hft(s,!1,A.L,0,0,w,B.hbJ(t.cEP(d),A.Z8,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.W(A.asC,A.aD.j(0.5),s,s,s,52)
w.push(B.b9d(new B.D(A.eA,B.x(B.a([u,A.aB,B.c("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fK,B.a([t.akp("Full bongo love song ABAB",d),t.akp("Mix: group vs private jet \u2014 which flies?",d),t.akp("Song from John 3:16 + matching verses",d),t.akp("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.h,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nF(D.bF4,B.Zh(new B.oV(new C.ecL(t,d),u+v,!0,!0,!0,0,B.tp(),s)),s))}return B.wb(0,s,A.t,t.e,A.y,s,s,T.afD,s,s,!1,s,A.ah,!1,w)},
cEP(d){var w=this.as
w===$&&B.d()
return B.c7(w,new C.ed_(this,d),null)},
cER(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.ed1(v),r=A.w.j(d?0.35:0.06),q=B.m(14),p=B.K(A.bb.j(0.35),A.r,1),o=v.gasU()
o=o==null?u:o.c
o=B.c(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fl,u,u,u)
w=v.gasU()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.c(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ab,w,B.W(v.w?A.Q7:A.ts,A.bb,u,u,u,20)],x.p),A.l,u,A.e,A.h,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.m),u,u,u,u,A.nN,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)},
ay5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b5,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.ct],x.O)
break
case 2:w=B.a([A.bD,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.ecJ(this,d)
r=B.m(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.c(f,n,n,n,n,n,n,A.Fl,n,n,n)
if(m)o=A.c
else o=g?A.ac:A.bq
return B.E(B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cV(n,B.x(B.a([p,B.c(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(q,n,n,r,n,w,A.m),A.a3,n,n,n,n,A.jQ,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.aj),1)},
cES(d,e){var w,v,u,t=this,s=null,r=t.x===D.EA?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bb.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.ed2(t,d)
u=B.c(d.c,s,s,s,s,s,s,A.Wg,s,s,s)
return B.aF(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.h5,B.A(B.a([u,A.db,B.c(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.aj)},
akp(d,e){var w=null,v=B.c(d,w,w,w,w,w,w,A.acU,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.n_(w,u,v,w,this.r?w:new C.ecU(this,d),w,w,w,w)},
bMy(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aoz,B.c("$"+A.i.ac(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.EB?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eP,r,A.hg,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.hT,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ecG(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ecH(s)
l.push(B.A(B.a([v,new B.JU(w,A.aD,r),B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.ezp:D.c0R,r,D.ba0,42,r,42),A.cP,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cP,r,r,A.aj)],m),A.dK,r,A.e,A.h,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.m),r,r,r,A.tg,A.a1n,r,r,r)}}
C.aOx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.WY.prototype={
aj(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0f.prototype={
T(){return new C.aDb(null,null)},
bl9(){return this.f.$0()}}
C.aDb.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,D.bDt,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,A.nI,u,1,u,v)
w.eU(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.lU,u,1,u,v)
w.cK(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bp(u,A.z0,u,1,u,v)
w.cs(0)
v.r!==$&&B.aQ()
v.r=w},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
v=w.r
v===$&&B.d()
v.t()
w.bzu()},
cem(){var w=this.d
w===$&&B.d()
w.eI(0).bF(new C.dqb(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aD(d,A.bY,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcel(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.d()
e[v]=new B.E3(new C.dqc(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.d()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.H,A.at.j(0.35),A.J,40),new B.ab(0,A.H,A.aN.j(0.25),A.fU,28)],x.V)
r=k.e
r===$&&B.d()
q=k.r
q===$&&B.d()
q=B.c7(new B.he(B.a([r,q],x.U)),new C.dqd(k),j)
r=B.oj(A.k0,D.h7Y,new C.dqe())
p=B.c("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cE,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2j(A.kk,"Resets in 24h"),A.ab,k.b2j(A.oN,"Help Topics ready")],o),A.l,j,A.b9,A.h,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dU(D.h24,new C.dqf(k),B.di(j,j,j,j,j,j,j,j,j,A.ac,j,j,A.kH,j,new B.ba(B.m(14),A.a1),new B.aw(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.m(14)
m.push(B.E(B.bJ(D.h7O,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kH,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c7(w,new C.dqg(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.h,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.caa,A.m),j,j,j,j,U.aop,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dqh(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aF(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.aj)},
b2j(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.W(d,A.at,w,w,w,13),A.e3,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.h5,w,w,w)}}
C.aNo.prototype={
aY(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a3()}}
C.OU.prototype={}
C.qk.prototype={}
C.asQ.prototype={
T(){return new C.aGA(B.a([],x.E),B.a([],x.s))}}
C.aGA.prototype={
gati(){return A.i.D(B.Ma(this.a.c.a,new C.erk(this)),0,1/0)},
aa7(){var w,v=this,u=v.d,t=v.gati()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rl(u.a,t,!0,!1)},
Kj(d,e){var w,v,u,t=this,s=t.gati(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gati()
if(w<v-0.005)B.hJi(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rl(u.a,w,!0,!1)
B.rl(t.a.c.a,w,!0,!1)
B.Bv(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aU.bZ$.push(o)
w=$.Jy+1
$.Jy=w
if(w===1){w=$.huM
if(w!=null)w.$0()}v=$.hdL.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m0(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aS6(u,A.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w5(w,u,r,q,s.e,p)}o.d=t}o.Q7()
o.aa7()
$.aU.x1$.push(new C.es0(o))
o.Q=B.dg(A.oC,new C.es1(o))
o.as=B.dg(A.fR,new C.es2(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i05()
w.a3()},
cH2(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9i(v,w)){if(C.hdN(p,q.e)){q.l(new C.erJ(q,p))
q.yI(!1,!0,!0)}else if(q.c!=null)q.l(new C.erK())
return}if(!C.ck_(v.c?v.bU():v)){q.l(new C.erL(p))
q.b2s(!1)
return}u=p.gDb()
if(u<=0)return
t=w.cZ(B.c0(B.bD(w),B.bL(w),B.bX(w),12,0,0,0,0))
s=C.hdO(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.l(new C.erM())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.erN(r))){q.l(new C.erO(p,w,u))
return}q.l(new C.erP(q,p,u,w))
q.aAC(new B.d9(r,p.a,u,A.hc,A.fz,"Clock-in daily earnings (local)",null,null,A.cx,w))},
jn(d){if(d===A.fZ)this.Fq()},
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
q=new B.w5(u,t,s,r,v.e,q)
u=q}w.x=u},
T1(d){return this.cFC(d)},
cFC(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$T1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Q7()
t.Kj(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$T1)
case 3:case 1:return B.h(u,v)}})
return B.i($async$T1,v)},
Fq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fq=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(G.Af(q.w,k,l,j,m,!1,n),$async$Fq)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.l(new C.erE(q,p))
q.T1(!1)}w=8
return B.b(q.Kv(),$async$Fq)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.aa(h)
$.am.$1("[growth income] pull wallet: "+B.v(o))
w=9
return B.b(q.Kv(),$async$Fq)
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
return B.i($async$Fq,v)},
Ou(d){return this.bGA(d)},
bGz(){return this.Ou(null)},
bGA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Ou=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Ou)
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
if(l.d===A.fX&&l.x===A.cx&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.l(new C.erl(j,t,i))
q.u(0,p)
r=B.B(q,B.a4(q).k("cj.E"))
t.w=r
w=4
return B.b(B.asS(t.a.c.a,r),$async$Ou)
case 4:t.aA4(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ou,v)},
Kv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kv=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.erF(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.erG(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lH("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kv)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gP(a2)
m=n
a3=J.u(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aI(J.u(m,"status"))
d=a3==null?null:A.i.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bk(r.e,new C.erH(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cx
else a0=J.z(k,2)?A.kP:A.dI
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dI&&h===A.cx&&a3[j].d===A.fX)J.c4(a6,l)
if(i===A.dI&&h===A.kP&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.Kj(g.d+r.e[j].c,!1)
r.aA4(!1,!0)}}}}if(o&&r.c!=null)r.l(new C.erI())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.aa(a7)
$.am.$1("[growth income] refresh deposit status: "+B.v(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return B.b(r.Ou(a6),$async$Kv)
case 13:w=11
break
case 12:w=14
return B.b(r.bGz(),$async$Kv)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kv,v)},
QV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vj(i.a,i),$async$QV)
case 3:h=e
if(t.c==null){w=1
break}t.l(new C.erp(t,h))
t.Q7()
t.aa7()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Af(s[0],p,q,o,r,!0,i),$async$QV)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q7()
t.aa7()
k=C.hdN(n,m)
if(k)t.Kj(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hvC(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q7()
if(t.c==null){w=1
break}t.l(new C.erq(t,n,m,l))
if(i){t.yI(!1,!0,!0)
if(j==="reset"){B.hul(t.a.c.a)
i=t.c
if(i!=null)B.huo(i,null)}else if(j==="warn2"){B.hum(t.a.c.a)
i=t.c
if(i!=null)C.hup(i)}}else if(k)t.yI(!1,!0,!0)
else t.T1(!1)
case 1:return B.h(u,v)}})
return B.i($async$QV,v)},
yI(d,e,f){return this.cp1(d,e,f)},
aA4(d,e){return this.yI(d,!1,e)},
b2s(d){return this.yI(!1,d,!1)},
cp1(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rY(r,o,q,!1,t.w,s,p),$async$yI)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JE(t.w,p,q,s,o,r)
if(f)t.T1(d)
case 1:return B.h(u,v)}})
return B.i($async$yI,v)},
ceD(){this.l(new C.ery())
this.aA4(!1,!0)},
agP(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cx&&B.tn(d)){w=r.a
w.f.$1(new B.d9(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjW(q,d)
v=q.d=B.Ma(r.a.c.a,new C.erv(r))
r.at=r.a.c.d=v
B.rl(q.a,v,!0,!1)
if(r.c!=null)r.l(new C.erw(r,d))
r.yI(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d9(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dI
if(w&&d.d===A.fX)s=!1
else if(w&&d.d===A.f4){r.Kj(q.d-d.c,!0)
s=!0}else{C.cjW(q,d)
w=d.d
s=w===A.f4||w===A.kx
r.Kj(q.d,s)}r.l(new C.erx(r,d))
w=d.d
r.yI(s,e,w===A.f4||w===A.kx||d.x===A.cx||w===A.hc)},
aAC(d){return this.agP(d,!0,!1)},
b3B(d,e){return this.agP(d,!0,e)},
b3A(d,e){return this.agP(d,e,!1)},
chM(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iv5(u,e,d)){v.mt("This plan is already active.")
return}w=B.hIN(u.a,d,e)
if(C.ir9(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.l(new C.erz(v))
v.l(new C.erA(v,u,new B.w5(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAC(new B.d9(w,u.a,g,A.kx,A.fz,"Direct investment buy: "+d,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.l(new C.erB(v))
v.mt("Plan purchased: "+d)},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a18(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a18=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.apx(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a18)
case 3:w=4
return B.b(t.QV(),$async$a18)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a18,v)},
ahi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.ak1(r,B.a([r],x.d9),A.Tf,t.a.d,t.gb3z(),t.gb2r(),null),!1,null,x.X),$async$ahi)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahi,v)},
ahg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.anb(r,t.a.d,t.e,t.gb3z(),t.gb2r(),new C.erD(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ahg)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahg,v)},
aev(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aev=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hdN(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2s(!0),$async$aev)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.l(new C.err(t))
w=1
break}if(B.lA(r)===6||B.lA(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hvD(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9i(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSS(q,r))if(!B.aSS(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIy(m.y,l,m.a))}}q=B.hIa(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i1y(r)
q=j.a
t.l(new C.ers(j,r,k))
t.b3A(new B.d9("local_clockin_manual_"+q+"_"+s,j.a,0,A.hc,A.fz,"Clock-in session started (local)",null,null,A.cx,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aev,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nE:A.qB
if(l.d==null)return B.eb(A.lf,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fPs
u=u==null?k:u.$0()
u=J.aT(u==null?A.iJ:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.an(0,q)||B.tn(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cT(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erT(),B.T(v).k("Y<1>")))
A.d.b0(w,new C.erU())
v=l.d
v.toString
u=C.igH(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anZ(t,l.a.e,l.z,l.gchL(),l.aXC(),D.hCu),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aE_(l.aXC(),q,n,o,w,new C.erV(l),l.gcjS(),new C.erW(l),D.hCv),j,!0)
m=B.aD(d,k,x.w).w
n=l.y
return new B.XO(n,new C.erX(l),B.aF(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDZ(v,u,w,l.gc7G(),new C.erY(l),new C.erZ(l),new C.es_(d),l.gckK(),l.gckF(),D.hCt),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIY(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.aj),k)},
aXC(){var w=null,v=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.z,D.c5I,A.f,w,w,new B.n(w,w,B.K(D.f0.j(0.38),A.r,1),w,B.a([new B.ab(0,A.H,D.f0.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cP,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ero(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIY(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ab(0,A.H,A.w.j(0.5),A.eO,24),new B.ab(-2,A.H,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.OR,B.bm(!0,B.as(new B.cO(D.b8h,B.o(w,B.cf(new C.erm(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c9B,A.m),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9l(d){var w=null,v=this.y===d,u=D.dgC[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dx(w,!0,w,B.ay(A.c1,B.qs(B.oD(v?B.W(s,D.agZ,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.W(s,A.c.j(0.62),w,w,w,19),A.bB,B.c(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.h,0,A.p),A.iU,B.pX(),A.b_,A.b_,B.LR())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eru(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDZ.prototype={
c6h(d){return C.hdO(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pN(new B.Y(v,new C.duB(),u),3,u.k("M.E"))
t=B.B(u,B.a4(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9i(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hvD(r)
m=v.gDb()
l=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f0.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.H,D.f0.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.W(A.hG,D.f0,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cP,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ab(0,A.H,A.b3.j(0.45),A.cN,16)],j)
h=B.m(12)
g=x.p
j=B.bUH(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bYH,A.f,e,e,new B.n(A.iS.j(0.78),e,e,h,e,e,A.m),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.cbc,A.m),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c4H,A.f,e,e,new B.n(A.bt,e,B.K(D.ak_,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hyg(A.fQ,new C.duC(),k)
k=B.A(B.a([B.E(C.hyf(new C.duD(f,A.rN,n),new B.V(Date.now(),0,!1),h,k),1),A.pb,B.E(new B.wq(new C.duE(f,A.rN),e,new B.he(B.a([$.zl(),$.a4s()],x.U)),e),1)],g),A.l,e,A.e,A.h,0,e,e)
h=f.c9y(A.rN,D.f0)
v=B.E(f.cD6("Total Profit","$"+B.dG(v.e),A.rN),1)
u=u?e:s.b
return B.eb(B.cc(B.x(B.a([j,A.T,k,A.af,new C.aDY(f.d,m,q,p,n,o,D.f0,f.gc6g(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.pb,B.E(f.b9X("Total Investment","$"+B.dG(u==null?0:u),A.rN,f.r),1)],g),A.l,e,A.e,A.h,0,e,e),A.T,f.c6d(d,t,D.f0,w)],g),A.al,e,A.e,A.h,0,A.p),A.t,e,A.y,e,e,A.a1U,e,e,A.ah),D.ak_,!0)},
aA3(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.H,A.w.j(0.4),A.dm,18)],x.V)
return B.o(w,B.bw(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bP(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.m),A.bl,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.ca4,A.m),w,w,w,w,w,w,w,w)},
b2q(d,e,f,g){return this.aA3(d,e,f,A.ag,g)},
bc6(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2q(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFD,B.x(B.a([B.o(w,B.A(B.a([B.W(e,f,w,w,w,15),A.e3,B.c(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.m),w,w,w,w,A.aoE,w,w,w),A.b1,new B.dl(A.dw,A.a5,A.f,B.c(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.D,w,A.e,A.h,0,A.p),w)],r),w),w),f,A.lH,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9y(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.m),s,D.d0a[w],s,D.bJi,s,s,s,5))}r=B.o(s,B.A(o,A.dK,s,A.b9,A.h,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h3S,A.bB,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ab(0,A.H,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bm,new B.de(1,A.cl,B.c("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.h,0,s,s)],p),A.D,s,A.e,A.h,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aA3(B.A(B.a([r,D.fpm,q,A.ab,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.W(A.nV,e.j(0.95),s,s,s,21),A.rr,B.c("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.G,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.h,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.m),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.h,0,s,s),e,A.a5,A.a1r,26)},
b9X(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b6s,v,v,A.m),v,v,v,A.nL,v,v,v,5),r=x.p
r=B.a([s,A.ba,B.E(B.x(B.a([B.A(B.a([B.W(u?A.tw:A.zT,t,v,v,v,14),A.e3,new B.de(1,A.cl,B.c(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.h,0,v,v),A.am,new B.dl(A.dw,A.a5,A.f,B.c(e,v,1,v,v,v,v,D.fyJ,v,v,v),v)],r),A.D,v,A.b9,A.h,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(X.OF,B.W(A.eJ,A.c.j(0.35),v,v,v,v),v))
w=this.b2q(new B.a5(v,66,B.A(r,A.l,v,A.e,A.h,0,v,v),v),t,A.lI,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cD6(d,e,f){return this.b9X(d,e,f,null)},
c6d(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ab(0,A.H,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.c("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.VY,k,A.b1,B.o(m,B.c(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.m),m,m,m,m,A.a26,m,m,m)],h),A.l,m,A.e,A.h,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a1f,B.x(B.a([B.W(A.hs,g,m,m,m,30),A.am,B.c("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bB,B.c("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.h,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mD(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.kx
t=u?A.hR:D.f0
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.aw(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.W(u?A.tw:A.vm,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bF(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.m),m,38,m,m,m,m,m,38)
s=B.c(C.ip0(j),m,1,A.a2,m,m,m,A.kO,m,m,m)
q=C.hzT(j.y)
s=B.x(B.a([s,A.bB,B.c(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.D,m,A.e,A.h,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.c(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.m),m,m,m,m,A.oF,m,m,m)
j=C.hHO(j)
k.push(new B.D(A.Hm,new B.c6(A.aM,A.e,A.h,A.l,m,A.p,m,0,B.a([v,A.ba,new B.bz(1,A.bd,s,m),B.x(B.a([q,A.cT,B.c(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dK,m,A.e,A.h,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aA3(B.x(i,A.l,m,A.e,A.h,0,A.p),f,A.aY,D.bFO,26)}}
C.aDY.prototype={
T(){return new C.bkT(null,null)},
cXY(d){return this.z.$1(d)},
cZh(){return this.Q.$0()}}
C.bkT.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,A.qO,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,D.bDj,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.qR,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.bb6()},
gbdQ(){var w=new B.V(Date.now(),0,!1)
if(B.lA(w)===6||B.lA(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bb6(){var w=this,v=w.a,u=v.e||v.f||w.gbdQ()
if(u){v=w.f
v===$&&B.d()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&B.d()
v.cK(0)}else{if(!u){v=w.f
v===$&&B.d()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&B.d()
v.bR(0)}}},
by(d){this.bJ(d)
this.bb6()},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
w.bzL()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdQ()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.duu(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dzg:D.dze
q=B.K((f?D.pr:A.b0).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.H,(f?A.aE:A.bb).j(0.16),A.fU,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ad0(D.pr,130),h,h,h,-24,-30,h),B.ao(-36,i.ad0(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ad0(A.bb,120),h,h,h,-30,-36,h),B.ao(-40,i.ad0(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bw(l,new B.e6(B.c7(k,new C.duv(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bw(l,new B.e6(B.c7(k,new C.duw(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cO(D.b8o,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ab(0,A.H,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ab,new B.de(1,A.cl,B.c(u,h,1,A.a2,h,h,h,D.fEH,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.m),h,h,h,h,A.hg,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hyg(A.fQ,new C.dux(),l)
m.push(C.hyf(new C.duy(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cV(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b_,new B.n(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.m),A.CI,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ad0(d,e){var w=null
return new B.dp(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.bet.prototype={
b2t(d,e,f,g){var w=new B.aG($.R().r,A.ai,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.cg(v,u,v+f,u))
w.E(new B.cg(v,u,v,u+f))
w.E(new B.cg(v,u,v-f,u))
w.E(new B.cg(v,u,v,t))
w.E(new B.bx())
d.af(w,g)},
a2(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.i.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.i.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.S,A.Q,A.V,A.W,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2t(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.i.F(a7+p/3,1)
$.R()
n=new B.ar(A.S,A.Q,A.V,A.W,A.U)
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
$.R()
e=new B.ar(A.S,A.Q,A.V,A.W,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.b=A.aa
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hNZ()
h=i.b
d=h.c
h=h.a.c
i.a2(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2t(b2,o,3+g*3,i)
break
case 2:$.R()
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.R()
a2=new B.ar(A.S,A.Q,A.V,A.W,A.U)
a2.c=1.8
a2.d=A.bG
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.R()
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.R()
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.r=a7.j(0.28).gp(0)
i.y=A.oG
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aE(d){return d.b!==this.b}}
C.bes.prototype={
a2(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
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
a2=A.i.F(a0,1)
a3=a5.c
J.br(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.sam(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.fhQ))
a5.aD(new B.a3(-18,a2,18,a2+a1*3),v)
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
v=B.bu(D.fin,A.F4)
u=new B.ar(A.S,A.Q,A.V,A.W,A.U)
u.r=D.aEK[A.o.F(t,6)].j(k*0.9).gp(0)
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
f=D.aEK[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.R()
r=new B.ar(A.S,A.Q,A.V,A.W,A.U)
r.c=2
r.d=A.bG
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.S,A.Q,A.V,A.W,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.R()
a2=new B.ar(A.S,A.Q,A.V,A.W,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aE(d){return d.b!==this.b}}
C.ber.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
w=B.L()
w.b=A.aa
w.c=14
v=f.d
w.r=(v?f.r:A.b0).j(0.22).gp(0)
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
p=new B.aG(t,A.ai,e,e,B.a([],q))
p.E(new B.jt(B.bW(a1,a3)))
a4.mz(0,p)
p=B.bW(a1,a3)
o=B.L()
o.sam(D.eGL.aA(0,B.bW(a1,a3)))
a4.aD(p,o)
n=A.i.D(f.b,0,1)
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
d.sam(new B.a7(A.aY,A.b4,A.x,a0,e,e).aA(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aE_.prototype={
T(){var w=$.ax()
return new C.aE0(new B.at(A.ax,w),new B.at(A.ax,w))},
bl2(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aE0.prototype={
t(){var w=this.d,v=$.ax()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a3()},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cF0(d){this.a.bl2(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.l(new C.duV())},
cDB(){var w,v,u=this,t=B.cG(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hF(w,new C.arX(v.d,t,u.gcF_(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cLM(){var w,v,u,t,s=this,r=s.d,q=B.cG(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hJg(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bl2(new B.d9("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.lc,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dI,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.ci)
w.bP(0,A.ci)
s.l(new C.duW())},
cIm(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cx||!this.aZz(r)||B.hm7(r))continue
q=r.d
p=q===A.f4||q===A.kx||q===A.eG
q=r.c
if(p)t+=q
else u+=q}return new B.bs1(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cIm(),p=s.a.r,o=new B.Y(p,new C.duX(),B.T(p).k("Y<1>")).gL(0)
p=B.aD(d,A.dF,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f0.j(0.38),A.r,1)
w=B.bUH(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.z,B.W(P.arT,D.f0,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cP,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bHu(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asR(A.vm,"Deposit",0),s.asR(A.tw,"Withdraw",1),s.asR(A.fT,"History",2)],t),A.l,r,A.rc,A.h,0,r,r)
return B.eb(B.bm(!1,B.cc(B.x(B.a([w,A.bx,u,A.dc,v,A.dc,B.oD(s.f===2?s.c35():s.c9_(),A.ik,B.pX(),A.b_,A.b_,B.LR())],t),A.al,r,A.e,A.h,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.Cb,!0)},
bHu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.ce(g,"@")
v=A.a.az(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aX(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCm(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCm(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCm(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bP(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.m),A.bl,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b4(h,h,h,new C.bdT(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.ccj,A.m),h,28,h,h,h,h,h,38),A.b1,D.hcH],p),A.l,h,A.e,A.h,0,h,h)
o=B.c("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asG(new C.duH(i),D.fKt,i.a.d.a)
m=B.a([B.E(i.aRW(A.qZ,"In",d),1),B.E(i.aRW(A.to,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.jj.j(0.6),A.r,1)
m.push(B.o(h,B.c(""+f+" pending",h,h,h,h,h,h,D.fFF,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.m),h,h,h,h,A.oF,h,h,h))}return new B.fG(1.62,B.bw(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFW,u,t,s,r,new B.D(S.tj,B.x(B.a([q,A.b1,o,A.bB,new B.dl(A.dw,A.a5,A.f,n,h),A.b1,B.A(m,A.l,h,A.e,A.h,0,h,h),A.am,B.c(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.D,h,A.e,A.h,0,A.p),h)],p),h),A.aq),h)},
aCm(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRW(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.W(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bm,new B.de(1,A.cl,new B.dl(A.dw,A.a5,A.f,B.c(e+"  $"+B.dG(f),w,w,w,w,w,w,A.ob,w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w)},
asR(d,e,f){var w=null,v=this.f===f,u=v?D.cdI:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f0.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.H,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cV(w,B.W(d,v?D.agZ:D.f0,w,w,w,26),w,w,A.ck,new B.n(w,w,t,w,s,u,A.a6),A.Hh,w,62,w,w,w,w,w,62)
return B.ay(A.c1,new B.a5(92,w,B.x(B.a([u,A.aVK,B.c(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.duG(this,f),w,w,w,w,w,w,!1,A.a4)},
c9_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cG(a1.a.a)
if(a2==null)a2=0
w=a0?D.f0:A.ct
v=a2>0
u=new C.duS(e,w)
t=new C.duR()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.uN,A.uN],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.H,A.w.j(0.35),A.eO,22)],n)
l=w.j(0.15)
l=B.o(d,B.W(a0?A.vm:A.tw,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.c(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fG,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.o(d,B.A(B.a([B.W(A.hG,w,d,d,d,14),B.c("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.G,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.m),d,d,d,d,A.lt,d,d,d)],h),A.l,d,A.e,A.h,0,d,d)
l=B.c("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uY(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.hV,l,d),A.db,B.aZj(new B.cO(D.b8H,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eP,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.ec,d,d,d,1,d,d,!1,"\u2022",d,new C.duQ(e),d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,D.fNn,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.D,d,A.b9,A.h,0,d,d)
a1=v?120:60
a1=B.as(B.cV(d,d,d,d,A.b_,new B.n(d,d,d,B.m(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.m),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.c(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.chF:D.cwu
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.h,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.W(A.hG,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bA(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.m(16),new B.aw(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.m(16),new B.aw(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,A.nl,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.eW),B.iR(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f0)],h),A.l,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.m),d,d,d,d,A.hW,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.TF:A.a5E
n=B.a([new B.ab(0,A.H,(a0?A.b5:A.dX).j(0.45),A.dm,18)],n)
k=a0?e.gcDA():e.gcLL()
j=B.W(a0?A.a3B:A.m0,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bP(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.m),A.bl,B.lP(j,B.c(i,d,d,d,d,d,d,A.m5,d,d,d),k,B.fv(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aY,A.b4,A.x,p,A.xq,d),A.m),d,d,new B.bl("form"+s,x.W),d,A.wQ,d,d,d)},
c35(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.duK(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.duL())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fPs
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iJ:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.ipz(a2,B.Ma(a0.a.e,new C.duM(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bML,B.aM(!1,v,!0,B.o(a1,D.fjk,A.f,a1,a1,new B.n(a1,a1,B.K(D.f0.j(0.4),A.r,1),u,a1,a1,A.m),a1,a1,a1,a1,A.lV,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.duN(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.h,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bEg,B.x(B.a([B.W(A.HQ,A.c.j(0.25),a1,a1,a1,40),A.T,D.h9c],q),A.l,a1,A.e,A.h,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cU(a4,0,B.dy(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gL(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f4||k===A.kx||k===A.eG
if(l===A.cx)i=j?A.c_:D.f0
else i=l===A.dI?A.jj:A.fi
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.aw(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.W(j?A.tw:A.vm,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bF(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.c(a0.bY3(n),a1,a1,a1,a1,a1,a1,A.j7,a1,a1,a1)
e=C.hzT(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bB,B.c(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.c(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kP)f.push(new B.D(A.a1j,new B.D9(A.bI,5,4,A.br,B.a([a0.aQP("Before",m.b),a0.aQP("After",m.a)],q),a1),a1))
m=B.x(f,A.D,a1,A.e,A.h,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.c(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hHO(n)
v.push(B.o(a1,new B.c6(A.aM,A.e,A.h,A.l,a1,A.p,a1,0,B.a([k,A.ba,new B.bz(1,A.bd,m,a1),A.ab,B.x(B.a([f,A.aw,B.o(a1,B.c(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.G,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.m),a1,a1,a1,a1,A.zj,a1,a1,a1)],q),A.dK,a1,A.e,A.h,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bF(A.a1,A.a1,new B.aw(l,1,A.r,-1),A.a1),a1,a1,a1,A.m),a1,a1,a1,a1,A.qS,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hu(D.c2K,B.c("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cd,a1,a1,a1),new C.duO(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.h,0,A.p),A.f,a1,a1,new B.n(A.uN,a1,a3,a2,a1,a1,A.m),a1,a1,D.hC6,a1,D.bGD,a1,a1,a1)},
aQP(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zr(B.cR(B.a([s,B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fKE,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.n8,w,w,w)},
aZz(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eG)return d.c>0
if(B.tn(d))return!1
if(v===A.fX||v===A.f4)return!0
if(v===A.pg||v===A.kx)return!0
if(v===A.kQ)return!0
if(v===A.hc)return A.a.q(w,"clock-in")||d.c>0
return!1},
bY3(d){var w,v=d.f
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
C.bdT.prototype={
a2(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bkk.j(0.55).gp(0)
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
C.bz3.prototype={
a2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a3(0,p,s,p+80)
n=[A.bb,A.hd,A.bv][q]
$.R()
p=new B.ar(A.S,A.Q,A.V,A.W,A.U)
p.sam(new B.a7(A.aY,A.b4,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aA(0,o))
a1.aD(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.R()
r=new B.ar(A.S,A.Q,A.V,A.W,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.S,A.Q,A.V,A.W,A.U)
h.r=A.px.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.i.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.R()
e=new B.ar(A.S,A.Q,A.V,A.W,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.i.F(v+m*0.25,1)
t=A.px.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jM(new B.es("z",a0,a0,A.cM,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.bW,new B.ji(1),a0,a0,a0,a0,A.bX,a0,A.cw)
d.e5()
d.a2(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aNE.prototype={
aY(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a3()}}
C.bB2.prototype={}
C.b2h.prototype={}
C.a12.prototype={
T(){return new C.aGo(new B.at(A.ax,$.ax()))},
d_s(d,e){return this.d.$2(d,e)}}
C.aGo.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
b2y(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.l(new C.elY(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.d_s(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aD(a0,A.eV,e).w
e=B.aD(a0,A.dF,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.m),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c25,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ab(0,A.H,A.fe.j(0.5),A.J,18)],v),D.auC,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fXf,A.bB,B.c(g.a.c,f,1,A.a2,f,f,f,A.mH,f,f,f)],u),A.D,f,A.e,A.h,0,A.p),1),B.aH(f,f,f,f,D.c2Z,f,f,f,new C.em0(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.h,0,f,f)
s=g.b9F(A.eY,"You",A.ct)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.l1,B.o(f,D.h0s,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.m),f,f,f,f,A.h5,f,f,f),f),g.b9F(A.x9,"Your friend",A.c4)],u),A.l,f,A.e,A.h,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.aw(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b7s),f,f,f,f,f,f,f,f,A.Fq,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c5D,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mG,f,f,f,1,f,f,!1,"\u2022",f,new C.em1(g),f,new C.em2(g),f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.jI,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.crt[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.auB:f
p=p?f:A.c.j(0.06)
k=new B.aw(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.c(j,f,f,f,f,f,f,A.dn,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.bd,B.ay(f,B.cV(f,B.x(B.a([i,B.c(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.h,0,A.p),f,f,A.b_,new B.n(p,f,new B.bF(k,k,k,k),new B.be(s,s,s,s),f,n,A.m),A.eD,f,f,f,f,A.f6,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.em3(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ab)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.h,0,f,f)
r=B.A(B.a([B.W(A.l4,A.c.j(0.5),f,f,f,15),A.bm,B.E(B.c("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.h,0,f,f)
p=B.m(18)
v=B.a([new B.ab(0,A.H,A.bD.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h4v,A.am,o,A.aO,D.h90,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bP(new B.n(f,f,f,p,v,D.ccy,A.m),A.bl,B.hu(D.asO,B.c("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fG,f,f,f),g.gceZ(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b9u,f,f,f,f,D.bHZ,f,f,f),f)},
b9F(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.W(d,f,w,w,w,24),A.aw,B.c(e,w,w,w,w,w,w,A.Fr,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.f6,w,w,w),1)}}
C.pD.prototype={}
C.btS.prototype={
a2(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.S,A.Q,A.V,A.W,A.U)
if(w===0)r=A.bj
else r=(w&1)===0?A.bE:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iQ.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fs(s,A.cw,s,s,s,B.cR(s,s,s,s,s,s,s,s,s,A.aYk,B.v(r)),A.a7,A.bW,s,A.dD,A.bX)
u.e5()
r=u.b
t=r.c
r=r.a.c
u.a2(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aE(d){return d.b!=this.b}}
C.FC.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.atg.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bt2(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hdv("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3W()
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
s.b0E(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKA.h(0,d)
s.c=w==null?"Play to earn":w}},
beB(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.clB(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cJ0(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atn(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.clC(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dR(e.h(0,q))
else{o=B.cb(B.v(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJQ(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atn(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clD(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dR(e.h(0,p))
else{o=B.cb(B.v(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bLc(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atn(e,f)
break}},
cU4(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEx())
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
q=B.B(new B.N(q,new C.clF(),p),p.k("ak.E"))
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
q=B.B(new B.N(q,new C.clG(),p),p.k("ak.E"))
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
aEx(){var w,v,u,t=this
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
atn(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cJ0(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJQ(d,e){var w,v,u,t,s
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
bLc(d,e){var w,v,u,t,s,r,q
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
UZ(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gks())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEx():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3W(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.cly(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0E(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.ci)},
d3e(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gks())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UZ(q,v==null?"":v)?r.z:-1}if(!r.gks()){v=r.d
v=v==null?null:v.d
v=!r.UZ(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gks()?r.z:w
if(!r.gks()&&u!==r.z)return!1
t=J.u(r.y[d],e)
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
if(r.aaR(2)){r.acr(1)
return!0}if(r.aaR(1)){r.acr(2)
return!0}if(r.gks()&&r.z===2){r.bFK(f)
if(r.aaR(2)){r.acr(1)
return!0}if(r.aaR(1)){r.acr(2)
return!0}}}return!1},
acr(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bFK(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.u(m.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.u(m.y[p],o)===0&&A.o.F(p+o,2)===1)l.push(B.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.aw(w)]
J.aJ(m.y[n[2]],n[3],2)
J.aJ(m.y[n[0]],n[1],0)
m.z=1},
aaR(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d3g(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.rf
if(!s.gks()){w=s.d
w=w!=null&&!s.UZ("tic_tac_go",w.d)}else w=!1
if(w)return D.rf
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.al5(v))return s.aWd(v,!0)
if(!A.d.q(s.at,""))return s.aWe()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEx())
s.c=s.b07()
return D.rf}if(s.gks()){t=s.cqf(e)
if(t>=0){s.at[t]="O"
if(s.al5("O"))return s.aWd("O",!1)
if(!A.d.q(s.at,""))return s.aWe()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b07()
return D.rf},
b07(){var w=this.d
if(w==null)return"Take your turn"
return this.UZ("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aWd(d,e){var w,v,u=this
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
return e?D.rg:D.JQ},
aWe(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.UC},
cqf(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.al5("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.al5("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dh3[u]
if(v[w].length===0)return w}return-1},
al5(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dpl[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4X(d){return A.d.cC(d,0,new C.clE())},
cNA(d){this.ay.push(1+d.aw(10))
if(this.a4X(this.ay)>21)return!0
return!1},
cNB(d){var w,v,u,t=this
while(t.a4X(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4X(t.ay)
v=t.a4X(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cTq(d,e){var w,v,u,t=this
if(t.e)return D.rf
if(!t.gks()){w=t.d
w=w!=null&&!t.UZ("connect_four_pro",w.d)}else w=!1
if(w)return D.rf
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.rf
if(!t.aib(d,w))return D.rf
if(t.aaF(t.fx))return t.aWb(t.fx,!0)
if(t.aRF())return t.aWc()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cpC(e)
if(u>=0){t.aib(u,2)
if(t.aaF(2))return t.aWb(2,!1)
if(t.aRF())return t.aWc()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bJP()
return D.rf},
bJP(){var w=this.d
if(w==null)return"Drop a disc"
return this.UZ("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aib(d,e){var w
for(w=5;w>=0;--w)if(J.u(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRF(){for(var w=0;w<7;++w)if(J.u(this.fr[0],w)===0)return!1
return!0},
aWb(d,e){var w,v,u,t=this
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
return e?D.rg:D.JQ},
aWc(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.UC},
cpC(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.u(r.fr[0],w)!==0)continue
r.aib(w,2)
v=r.aaF(2)
r.bcj(w)
if(v)return w}for(w=0;w<7;++w){if(J.u(r.fr[0],w)!==0)continue
r.aib(w,1)
u=r.aaF(1)
r.bcj(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.u(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bcj(d){var w
for(w=0;w<6;++w)if(J.u(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaF(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.u(this.fr[w],v)!==d)continue
if(this.bJR(w,v,d))return!0}return!1},
bJR(d,e,f){var w,v,u,t,s=new C.clx(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfz(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0E(d)}return w.a>=w.b}}
C.aub.prototype={
T(){return new C.aHc(null,null)},
cZl(d){return this.e.$1(d)}}
C.aHc.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,D.bDm,null,1,null,v)
w.eU(0,!0)
v.d=w
v.a.d.aV(0,v.gb35())
v.aAo()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.ci)
this.aAo()}},
aAo(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aj4(t,u)
C.aj4(t,u)
w.a.cZl(s)
w.a.toString
w.l(new C.eTY())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb35())
w=v.d
w===$&&B.d()
w.t()
v.bBh()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aj4(j,i),g=C.aj4(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.d()
u=new B.aP(1,1)
d.push(new B.x_(new B.d3(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ab(0,A.H,A.aQ.j(0.6),A.J,6)],k),l,A.m),l,22,l,A.a1O,l,l,l,3),l),A.Va,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.es(v,l,l,A.cM,l,l,l,l,l,l,D.fHs))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cE}else if(s===t){r=A.be
q=A.O}else{r=A.aA
q=A.G}d.push(new B.es(t,l,l,A.cM,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.d()
d.push(new B.x_(new B.d3(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.Va,l,l))}p=f===0?0:A.i.S(h/f*100)
k=A.w.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b34("Correct",""+h,A.bj),A.ab,m.b34("Wrong / missed",""+(f-g),A.aA),A.b1,B.c(""+p+"% accuracy",l,l,l,l,l,l,D.fz0,l,l,l)],o),A.l,l,A.e,A.h,0,l,l),A.am,D.h1B],o),A.D,l,A.e,A.h,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.m),l,l,l,l,A.bk,l,l,l)
u=B.E(B.cc(new B.abq(l,B.cR(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b7l),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,I.acI,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.h,0,A.p)},
b34(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.c(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,w,w,w,A.h5,w,w,w)}}
C.aP8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","H(iq,iq)","~([y7?])","Q(rg)","rg()","H(rT,rT)","Q(rT)","H(rU,rU)","QI(Z)","Q(iq)","cL(afj)","a0K(Z)","a_R(Z)","ag4(Z)","a89(Z)","OD(Z)","aeW(Z,hx<ai<jq>>)","aeV(Z,H)","w(rg)","rT(ac<@,@>)","~(FC,atg)","Ov(Z)","ac<q,@>(rT)","rU(ac<@,@>)","ac<q,@>(kJ)","ac<q,@>(rU)","Q(rU)","ac<q,@>(lU)","lU(@)","ac<q,@>(iC)","iC(@)","iq(@)","aA<~>(kJ)","ac<q,@>(iq)","~(H,H)","iq(iq)","WW(Z)","aA<Q>(ai<iq>)","a0J(Z)","~(iq)","a1u(Z)","WX(Z)","q(iq)","Q(lU)","xM(bC<H,lU>)","adq(Z,H)","H(iC,iC)","adh(lU)","w(rZ)","bz(JL)","a0f(Z)","~(d9{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(d9)","a12(Z)","~(FC)","q(q)","a1v(Z)"])
C.cCr.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCs(r,w,s.b,v,s.d)
t=s.e
r.b=B.dg(t,u)
v.r=new C.cCo(r)
v.e=new C.cCp(r,w)
v.f=new C.cCq(r,w,t,u)},
$S:0}
C.cCs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.aa(r)
u=B.cs(r)
s=v
q=u
p=B.Hc(s,q)
if(p==null)p=new B.jU(s,q==null?B.I_(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:42}
C.cCo.prototype={
$0(){this.a.b.a1(0)
return $.HO()},
$S:2086}
C.cCp.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaK.$0()
this.a.b.a1(0)},
$S:0}
C.cCq.prototype={
$0(){var w,v=this,u=v.b,t=B.dv(0,0,u.gbhK(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cCn(w,u,v.d))},
$S:0}
C.cCn.prototype={
$0(){var w=this.c
this.a.b=B.dg(this.b,w)
w.$1(null)},
$S:0}
C.ffV.prototype={
$1(d){var w=this.a
w.l(new C.ffU(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.ffU.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hx(D.am9,this.b,null,null,v.$ti.k("hx<1>"))},
$S:0}
C.ffX.prototype={
$2(d,e){var w=this.a
w.l(new C.ffS(w,d,e))},
$S:61}
C.ffS.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hx(D.am9,null,this.b,this.c,v.$ti.k("hx<1>"))},
$S:0}
C.ffW.prototype={
$0(){var w=this.a
w.l(new C.ffT(w))},
$S:0}
C.ffT.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.yV,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fTq.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cx},
$S:15}
C.fTi.prototype={
$1(d){return d},
$S:13}
C.fzy.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.c("NGMY",w,1,A.eU,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afW,w,v,w,w,w,w,w,v)},
$S:167}
C.fzv.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.fzw.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kG(w,A.z,v.d,new C.fzu(v.e),A.h7,v.c,!0,v.b,null,null,v.a)},
$S:2087}
C.fzu.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.fzx.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.dmC.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dmN.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dn4.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dn5.prototype={
$1(d){return this.a.Kx()},
$S:12}
C.dmV.prototype={
$0(){var w=J.b9(this.b,new C.dmU(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmU.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmW.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ac<q,@>>")
v=B.B(new B.N(v,new C.dmT(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmT.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmY.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ac<q,@>>")
v=B.B(new B.N(v,new C.dmX(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmX.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmQ.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgP(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arQ(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.l(new C.dmO(t))
case 3:if(t.c!=null)t.l(new C.dmP(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:47}
C.dmO.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmP.prototype={
$0(){return this.a.d++},
$S:0}
C.dmR.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmS.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmI.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.iwZ(t.a.d.bd,J.k(J.u(u.b,"id")),"rejected")
t.a.bu()
w=2
return B.b(C.aiU(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kx(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.ilB(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bu()
w=2
return B.b(C.aiU(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kx(),$async$$0)
case 3:t.Jh(A.d.dM(t.y,new C.dmG(s),new C.dmH(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmG.prototype={
$1(d){return d.a===J.u(this.a,"gameId")},
$S:z+4}
C.dmH.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmK.prototype={
$1(d){return d.a===J.u(this.a,"gameId")},
$S:z+4}
C.dmL.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmM.prototype={
$0(){return this.a.Jh(this.b,J.k(J.u(this.c,"id")))},
$S:0}
C.dmF.prototype={
$0(){return this.a.c7q(this.b)},
$S:0}
C.dmE.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.ixs(u,w.b,new C.dmD(v,w))},
$S:0}
C.dmD.prototype={
$2(d,e){return this.a.ajz(this.b,d,e)},
$S:784}
C.dn3.prototype={
$2(d,e){if(d)return
this.a.aVQ()},
$S:131}
C.dn1.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b2g(w.a.c.a),new C.dn0(w,this.b,this.c),null,null,x.gH)},
$S:2089}
C.dn0.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.c(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aF(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.kd,B.bKe(A.d3,B.W(A.fT,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dn_(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.aj)},
$S:2090}
C.dn_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fPH(s.c.a,s.e).eF(new C.dmZ())
w=2
return B.b(C.bHv(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmZ.prototype={
$1(d){},
$S:32}
C.dn2.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0a.prototype={
$0(){var w=this.a
return B.Ma(w.a.c.a,new C.e09(w))},
$S:85}
C.e09.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0b.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.d()
u.bh=t.aj()
v.bu()
w.l(new C.e08())},
$S:0}
C.e08.prototype={
$0(){},
$S:0}
C.e0c.prototype={
$2(d,e){var w,v=this.a
if(!C.cgP(v.a.c)){if($.hdq.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hdr(this.b,v.x,w)
return!1}C.arQ(v.a.c.a)}if(B.Ma(v.a.c.a,new C.e07(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aK3()
w=v.a
w.toString
w.hK(new B.d9(A.o.v(1000*Date.now()),v.a.c.a,d,A.kx,A.fz,e,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.a.bu()
return!0},
$S:2091}
C.e07.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0d.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d9(u,s.c.a,d,A.hc,A.fz,e,v,v,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
w=f>0?"+$"+A.i.ac(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vf(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2092}
C.dmw.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.dmz.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dmA.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.dmB.prototype={
$1(d){var w=null,v=this.a,u=B.fv(w,w,v.e===d?A.bj:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f7,B.iz(B.c("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dmy(v,d),u),w),1)},
$S:215}
C.dmy.prototype={
$0(){var w=this.a
return w.l(new C.dmx(w,this.b))},
$S:0}
C.dmx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.doo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dor.prototype={
$1(d){this.a.cqB()
return null},
$S:12}
C.dos.prototype={
$1(d){return this.a.cH3()},
$S:12}
C.dot.prototype={
$1(d){this.a.a42()
return null},
$S:12}
C.dou.prototype={
$1(d){this.a.akF()
return null},
$S:12}
C.dov.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.d()
if(w<=0){v.l(new C.dop(v))
w=v.as
if(w!=null)w.a1(0)
v.FR()
return}v.l(new C.doq(v))},
$S:12}
C.dop.prototype={
$0(){return this.a.Q=0},
$S:0}
C.doq.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.d()
w.Q=v-1
return v},
$S:0}
C.dnE.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnF.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.do7.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.do8.prototype={
$0(){},
$S:0}
C.dnU.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnV.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dnW.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnX.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dnY.prototype={
$0(){},
$S:0}
C.dn6.prototype={
$0(){var w=this.a,v=w.x2,u=B.v(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dnD.prototype={
$0(){var w=this.a
w.at=this.b
w.b99()},
$S:0}
C.do9.prototype={
$0(){},
$S:0}
C.doi.prototype={
$0(){},
$S:0}
C.do6.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.do5(w))},
$S:0}
C.do5.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dnB.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dnC.prototype={
$0(){},
$S:0}
C.dod.prototype={
$1(d){return d==null},
$S:247}
C.doe.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dof.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dn7.prototype={
$1(d){return d==null},
$S:247}
C.dn8.prototype={
$0(){return this.a.bh++},
$S:0}
C.dn9.prototype={
$0(){},
$S:0}
C.dnN.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dnO.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nh.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dnP.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.dnM(w))},
$S:11}
C.dnM.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dnZ.prototype={
$0(){return this.a.y1++},
$S:0}
C.do_.prototype={
$0(){},
$S:0}
C.do0.prototype={
$0(){return this.a.y2++},
$S:0}
C.do1.prototype={
$0(){},
$S:0}
C.do2.prototype={
$0(){return this.a.bd++},
$S:0}
C.do3.prototype={
$0(){},
$S:0}
C.doc.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnQ.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnR.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dnS.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnT.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dog.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.doh.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dna.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnb.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dnc.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnd.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.doa.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dob.prototype={
$0(){var w,v=this.a;++v.x2
v.aRr()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.v(Math.min(w+2,7))+" tiles"},
$S:0}
C.dnL.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.do4.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnJ.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnK.prototype={
$2(d,e){return d+e.length},
$S:204}
C.doj.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dok.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.dol.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.don.prototype={
$1(d){var w=this.a,v=w.PA(),u=v<=0?0:A.i.D(w.AS()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ov(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dom.prototype={
$1(d){return d.bW(0.85)},
$S:171}
C.dnI.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nh.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.c(p,w,w,w,w,w,w,A.j7,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hO(v,6,6,1,r),new C.dnH(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
$S:161}
C.dnH.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nh.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nh.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.auJ:D.cad,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.auJ:D.auC
v=o?B.K(A.dA,A.r,2):s
u=B.a([new B.ab(0,A.H,B.a0(51,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cV(s,B.as(n?B.W(D.cFf[r.fr[e]],A.c,s,s,s,t):B.c("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b_,new B.n(s,s,v,k,u,w,A.m),A.eD,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dnG(r,e),s,s,s,s,s,s,s)},
$S:200}
C.dnG.prototype={
$0(){return this.a.cpW(this.b)},
$S:0}
C.dnq.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(89,A.bj.m()>>>16&255,A.bj.m()>>>8&255,A.bj.m()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.c(t?"":u,w,w,w,w,w,w,D.aXg,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.m),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnp(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj)},
$S:786}
C.dnp.prototype={
$0(){return this.a.cGi(this.b)},
$S:0}
C.dnr.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
return B.aF(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.z,B.c(u,w,w,w,w,w,w,D.aXg,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dno(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
$S:786}
C.dno.prototype={
$0(){return this.a.cGh(this.b)},
$S:0}
C.dns.prototype={
$1(d){return this.a.l(new C.dnn())},
$S:25}
C.dnn.prototype={
$0(){},
$S:0}
C.dnt.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.d()
w=C.aj4(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nh.q(0,u.a.e)){u.a2i()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dnl())
t=u.dx
if(t>=v)u.uB("All 5 sentences perfect \u2014 full payout!")
else u.Fg(t/v,t,v)}}else{if(u.ghR()&&D.nh.q(0,u.a.e))u.a2i()
u.l(new C.dnm(u))}},
$S:0}
C.dnl.prototype={
$2(d,e){return d+e.length},
$S:204}
C.dnm.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.ci)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnu.prototype={
$1(d){var w=null,v=B.fv(w,w,B.a0(38,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,A.cm,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a5(1/0,w,B.iz(B.c(d,w,w,w,w,w,w,P.aX9,w,w,w),new C.dnk(this.a,d),v),w),w)},
$S:151}
C.dnk.prototype={
$0(){return this.a.b8w(this.b)},
$S:0}
C.dnv.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.d()
w=u*3+8
return B.x(B.a([B.c(s,v,v,v,v,v,v,A.q6,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hO(3,4,4,1,u),new C.dnj(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
$S:161}
C.dnj.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6h(e),p=r===0
if(p)w=A.L
else w=q?A.bj:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v=B.m(10)
s=p?t:new C.dnf(s,e)
u=B.m(10)
p=p?"":""+r
return B.aF(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.c(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.aj)},
$S:84}
C.dnf.prototype={
$0(){return this.a.cGg(this.b)},
$S:0}
C.dnw.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dni(q,d)
p=B.m(16)
if(o)w=D.a6O[d]
else{w=D.a6O[d]
w=B.a0(31,w.m()>>>16&255,w.m()>>>8&255,w.m()&255)}v=B.m(16)
u=o?B.a0(A.i.S(127.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6O[d]
t=B.a([new B.ab(0,A.H,B.a0(217,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cV(r,r,r,r,A.b_,new B.n(w,r,u,v,t,r,A.m),L.CK,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2095}
C.dni.prototype={
$0(){return this.a.cGj(this.b)},
$S:0}
C.dnx.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.d()
q=B.c(q,t,t,t,t,t,t,A.q6,t,t,t)
w=B.c("Move "+r.aB3()+"/"+C.hk9(),t,t,t,t,t,t,A.Fs,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.c("Round "+v+"/7 \xb7 "+B.v(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hO(3,6,6,1,s),new C.dnh(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:161}
C.dnh.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bj:D.bmI,q=u?A.ew:D.bxq
return B.aF(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.m),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dne(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:84}
C.dne.prototype={
$0(){return this.a.cGd(this.b)},
$S:0}
C.dny.prototype={
$0(){return this.a.b8w(this.b[this.c])},
$S:0}
C.dnz.prototype={
$0(){return this.a.l(new C.dng())},
$S:0}
C.dng.prototype={
$0(){},
$S:0}
C.dnA.prototype={
$2(d,e){this.a.a11(d,e)
return null},
$S:z+21}
C.drY.prototype={
$1(d){return this.a.cqq(this.b,d)},
$S:2096}
C.drX.prototype={
$0(){var w=this
return w.a.a.cZU(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOt.prototype={
$1(d){var w=this.a
w.a2y()
w.uK()},
$S:7}
C.cNO.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNE.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNF.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNY.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNV.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNW.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNX.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNQ.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.cNP(w))},
$S:0}
C.cNP.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNG.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNT.prototype={
$1(d){var w=this.a
return new C.WW(w.fx,new C.cNS(w),w.a.f.r,null)},
$S:z+37}
C.cNS.prototype={
$1(d){return this.boh(d)},
boh(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chS(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.l(new C.cNR(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNR.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOg.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cOa.prototype={
$1(d){this.a.uK()
return null},
$S:12}
C.cOd.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ar(v.gaYN().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uK()
return}v.l(new C.cOc())},
$S:12}
C.cOc.prototype={
$0(){},
$S:0}
C.cO9.prototype={
$1(d){this.a.FZ()
return null},
$S:12}
C.cOb.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cO8.prototype={
$2(d,e){var w,v=J.u(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.u(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:41}
C.cNL.prototype={
$2(d,e){var w,v=J.u(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.u(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:41}
C.cNM.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNN.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3e(!0)},
$S:11}
C.cNJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNK.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
if(w.f.length!==0)w.V2(this.b)},
$S:7}
C.cO0.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e7,A.l0)},
$S:7}
C.cNU.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cO1.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO2.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.ba0()
w.r.bP(0,A.ci)
w.at=!0},
$S:0}
C.cO3.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cO4.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cO5.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cK(w.b)){w=J.b9(w.b,v.gcpj(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.ba0()},
$S:0}
C.cO6.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cO7.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNZ.prototype={
$1(d){return this.boi(d)},
boi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a8(s)
q=r.h(s,"start")
p=B.bi(q==null?"":q)
q=r.h(s,"end")
o=B.bi(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bU()
w=5
return B.b(C.asc(q,new C.rT("cal_"+1000*n,m,l,(o==null?p.bQ(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atu()
case 4:k.c.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:448}
C.cOf.prototype={
$1(d){return this.boj(d)},
boj(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:448}
C.cO_.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cOs.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.d()
if(v>0)w.ad3(v-1)},
$S:0}
C.cOl.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cOo.prototype={
$1(d){var w=this.a
w.l(new C.cOi(w,d))
if(d===0)w.a3e(!0)},
$S:25}
C.cOi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOm.prototype={
$2$size(d,e){return C.hif(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2097}
C.cOn.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hvY(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.at4(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOj(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.asa(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uK(),$async$$0)
case 15:p.l(new C.cOk(p))
p.ad3(0)
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
$S:53}
C.cOj.prototype={
$2(d,e){return this.bok(d,e)},
bok(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3J(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:129}
C.cOk.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOq.prototype={
$2(d,e){return A.ab},
$S:38}
C.cOp.prototype={
$2(d,e){var w=null,v=this.a,u=B.c((v.a.c.w?D.a6V:D.a6d)[e],w,w,w,w,w,w,A.q9,w,w,w),t=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),s=B.a0(89,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
v=v.at?w:new C.cOh(v,e)
return B.n_(w,t,u,w,v,w,w,new B.aw(s,1,A.r,-1),w)},
$S:533}
C.cOh.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6V:D.a6d
w.r.sb2(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOr.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNH.prototype={
$0(){return this.a.ad3(0)},
$S:0}
C.cOe.prototype={
$0(){return this.a.ad3(this.b)},
$S:0}
C.cNI.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3K,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.c("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a1g,B.x(B.a([u,A.af,s,A.am,B.c("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b6,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),v,v,v)}if(e<s)return u.bKQ(t[e],w.c)
return u.aS5(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:43}
C.c4V.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.i.M(d)
return new B.V(B.h3(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bi(J.k(d))
return v==null?null:v.bU()},
$S:319}
C.c4U.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:832}
C.c4X.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bi(J.k(d))
w=w==null?null:w.bU()}return w},
$S:319}
C.c4W.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.a1(d,x.N,x.z)
try{v=J.u(w,"id")
v=J.k(v==null?"":v)
u=J.u(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aI(J.u(w,"amount"))
if(t==null)t=0
s=J.u(w,"type")
s=B.a64(A.a7K,J.k(s==null?"reimbursement":s))
r=J.u(w,"method")
r=B.a64(A.a6b,J.k(r==null?"system":r))
q=B.aW(J.u(w,"sourceDetails"))
p=J.u(w,"status")
p=B.a64(A.J_,J.k(p==null?"approved":p))
o=this.a.$1(J.u(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d9(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:681}
C.dIu.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dIv.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dIl.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dIj.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.By(),$async$$0)
case 2:t=o.d
t===$&&B.d()
s=o.e
s===$&&B.d()
r=o.a.c
q=o.f
q===$&&B.d()
w=3
return B.b(C.hcr(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pE(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abw(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).cc(B.ed(new C.dIs(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pE(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIs.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.d()
return new C.a0J(w.b,w.a,u,v,null)},
$S:z+39}
C.dIi.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i1o(q)?3:4
break
case 3:w=5
return B.b(t.a.Fv(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_O(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c4Z(s.a.c))
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
return B.b(s.aTq(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIh.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dIk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.af_(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hsJ(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c4Y(s,r.a.c,null)){r.lg(C.c4Z(r.a.c))
w=1
break}w=4
return B.b(r.bN9(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIr.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.ax()),u=B.O(d).ax.a===A.I,t=u?A.iO:A.c,s=x.p,r=B.x(B.a([B.c("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ac:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.m(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.D,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.dIp(d),w,w),B.bJ(D.fQE,w,new C.dIq(d,v),B.bn(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h4Q,w)},
$S:18}
C.dIp.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIq.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dIm.prototype={
$1(d){return D.hJC},
$S:z+12}
C.dIn.prototype={
$0(){return this.a.Fw(A.a.i(this.b))},
$S:1}
C.dIo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_O(t.b,r.a.c),$async$$0)
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
case 7:r.lg(C.c4Z(r.a.c))
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
return B.b(r.aTq(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIw.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIA.prototype={
$1(d){this.a.S4()
return null},
$S:12}
C.dIx.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dIy.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fy(v.gaz4()))
this.b.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c("Code "+v.gaz4()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dIz.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIB.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.X(s,"NGMYSNAP1|")||A.a.X(s,"NGMYLOCALSYNC1|")||A.a.X(s,"NGMYLOCALLIVE1|")||A.a.X(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:157}
C.fEa.prototype={
$1(d){return D.hG1},
$S:z+13}
C.fFn.prototype={
$1(d){return new C.ag4(this.a,this.b,this.c,null)},
$S:z+14}
C.f9l.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f9m.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dhm.prototype={
$2(d,e){return e.amU(e.a.toUpperCase())},
$S:2098}
C.dhn.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dho.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5H.prototype={
$1(d){var w=J.u(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dyo,A.a.gjP(v))},
$S:4}
C.fPB.prototype={
$1(d){return d.a===this.a},
$S:2099}
C.fPC.prototype={
$0(){return A.d.gH(A.E6)},
$S:2100}
C.dOY.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.l(new C.dOX(v))
w=v.r
w===$&&B.d()
if(w<=0)v.b91("Time's up")},
$S:12}
C.dOX.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.d()
w.r=v-1
return v},
$S:0}
C.dOP.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOU.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.l(new C.dOR(w,d,e))},
$S:222}
C.dOR.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOV.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.dOQ(w))
w.cAr(!0)},
$S:0}
C.dOQ.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOW.prototype={
$1(d){this.a.b91(d)
return null},
$S:2}
C.dOS.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOT.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.cdY.prototype={
$1(d){return D.dWa},
$S:z+15}
C.cdX.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fGc.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=B.aI(u.h(d,e)),s=t==null?v:A.i.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=B.aI(u.h(d,f))
w=t==null?v:A.i.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=B.aI(u.h(d,"outcome"))
return u==null?v:A.i.M(u)},
$S:2101}
C.fGd.prototype={
$2(d,e){var w=B.aI(J.u(d,e))
w=w==null?null:A.i.M(w)
return w==null?0:w},
$S:516}
C.fGe.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:204}
C.fWV.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hEE(w,v):C.hiB(w,v)
if(u===3)++w.f
C.ahB(w,this.c,u)
return u},
$S:2102}
C.fWX.prototype={
$0(){return C.hEE(this.a,this.b)},
$S:98}
C.fWW.prototype={
$0(){return C.hiB(this.a,this.b)},
$S:98}
C.dI6.prototype={
$0(){var w=this.a
if(w.a.c)w.l(new C.dI5(w))},
$S:0}
C.dI5.prototype={
$0(){this.a.r=1+A.o.F(B.FX(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dI7.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.d()
u=u.x
u===$&&B.d()
w=A.i.be(u*10)
if(w!==v.w)v.l(new C.dI4(v,w))}},
$S:0}
C.dI4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgo.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.G,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bB,new B.dl(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),1)},
$S:2103}
C.cgn.prototype={
$3(d,e,f){var w=null
return B.c("$"+A.i.ac(e,2),w,w,w,w,w,w,A.mH,w,w,w)},
$S:403}
C.cgQ.prototype={
$1(d){return new C.OD(this.a,this.b,!1,null,null)},
$S:z+16}
C.e7L.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.K(A.b3.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ab(2,A.H,A.b3.j(0.35),A.J,36),new B.ab(0,A.H,A.bD.j(0.175),A.J,24)],x.V)
v=B.m(f.a.e?0:30)
u=x.O
t=B.ao(g,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bb.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bD.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.h:A.N
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.o(g,D.bZP,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.H,A.b3.j(0.55),A.cz,18)],n),A.vq,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.oj(A.k0,D.h2l,new C.e7H()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.c(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cE,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c_.j(0.12)
k=B.m(18)
j=B.K(A.c_.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.W(D.bTL,A.c_.j(0.95),g,g,g,20),A.ab,B.c("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c_.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.h,0,g,g),A.T,B.c("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e7I(),B.T(m).k("N<1,w>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.D,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.m),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.m(18)
k=B.K(A.b3.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azT(A.hs,"Unlimited games with an active plan",A.bb),A.P,f.azT(A.kk,"Weekday check-ins grow your balance",A.b3),A.P,f.azT(A.mp,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.m),g,g,g,g,A.bH,g,g,1/0))
o.push(A.dc)
o.push(new B.a5(1/0,g,new B.bP(new B.n(g,g,g,B.m(16),B.a([new B.ab(0,A.H,A.bD.j(0.45),A.cz,16)],n),A.vq,A.m),A.bl,B.db(D.c2l,g,D.fYG,new C.e7J(f,a0),B.bn(A.L,g,g,g,A.c,A.KY,g,A.L,new B.ba(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bO(!1,B.c(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e7K(f,a0),g,g))
if(f.a.e)o.push(A.b1)
h=B.o(g,B.bw(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.cda,A.m),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,A_.a1L,g,A.d7,g,g,g)},
$S:741}
C.e7H.prototype={
$1(d){return D.cc4.aA(0,d)},
$S:77}
C.e7I.prototype={
$1(d){var w=null
return new B.D(A.eL,B.A(B.a([B.W(A.a3K,A.c_.j(0.85),w,w,w,14),A.ab,B.E(B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$S:151}
C.e7J.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e7K.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fRZ.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:530}
C.fRM.prototype={
$1(d){$.aU.x1$.push(new C.fRL(this.a))},
$S:7}
C.fRL.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fCu.prototype={
$1(d){return C.hEN(this.a,this.b+1)},
$S:7}
C.fTl.prototype={
$2(d,e){var w=B.aD(d,A.bY,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:130}
C.ch3.prototype={
$1(d){return d.r===this.a},
$S:271}
C.ch4.prototype={
$1(d){var w=$.aTT(),v=w.a
w.sp(0,v+1)
return v},
$S:2104}
C.ch5.prototype={
$1(d){},
$S:32}
C.ch2.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:271}
C.ch1.prototype={
$1(d){return d.f.cb(this.a)},
$S:271}
C.fzd.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:62}
C.h57.prototype={
$1(d){return C.a8O(this.a)},
$S:111}
C.h58.prototype={
$1(d){var w=$.aTT()
w.sp(0,w.a+1)},
$S:30}
C.h59.prototype={
$1(d){},
$S:32}
C.h5a.prototype={
$1(d){return new B.kj($.aTT(),new C.h56(this.a,this.b),null,null,x.am)},
$S:2105}
C.h56.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arW(this.a,!1),new C.h55(w),w,null,x.gv)},
$S:2106}
C.h55.prototype={
$2(d,e){var w=e.b
return new C.aeW(w==null?this.a:w,null)},
$S:z+17}
C.e7O.prototype={
$1(d){return d.c},
$S:271}
C.e7P.prototype={
$1(d){return d.gbkS()},
$S:2107}
C.e7Q.prototype={
$2(d,e){return d+e},
$S:86}
C.e7R.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7T.prototype={
$2(d,e){return A.P},
$S:38}
C.e7S.prototype={
$2(d,e){return new C.aeV(J.u(this.a.c,e),null)},
$S:z+18}
C.e7N.prototype={
$1(d){return d==null?"\u2026":C.bDL(d)},
$S:2108}
C.h5d.prototype={
$3(d,e,f){var w=this
return B.qs(new C.aCT(w.a,w.b,w.c,w.d,new C.h5b(d,w.e),new C.h5c(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.h5b.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hIb(this.b)},
$S:0}
C.h5c.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hIb(this.b)},
$S:0}
C.dox.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&B.d()
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
A.d.u(w,new B.N(t,new C.dow(),B.T(t).k("N<1,w>")))}t=h.d
t===$&&B.d()
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aD(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bj,A.ep,A.ed],r):B.a([A.aA,A.er,A.eq],r)
p=B.m(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.H,(h.a.c?A.dM:A.dQ).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dt()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.aka,A.uB],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.o(i,D.bfO,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ab(4,A.H,A.d3.j(0.6),A.J,24),new B.ab(0,A.H,A.w.j(0.3),A.dm,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5S)
l.push(A.aB)
l.push(B.c(h.a.d,i,i,i,i,i,i,A.WM,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fSq,A.P,B.o(i,B.c(r,i,i,i,i,i,i,D.fIc,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.m),i,i,i,i,A.OI,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.c(h.a.e,i,i,i,i,i,i,D.fLd,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dU(D.fPS,h.a.r,B.di(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cm,i,i,D.b71,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(E.aYE,i,n,B.bn(A.c,i,i,i,h.c?A.ep:A.er,i,A.cm,i,i,i,i,i)),1)],g),A.l,i,A.e,A.h,0,i,i))
w.push(B.e1(A.z,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.m),i,i,i,A.ae,A.aoo,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:121}
C.dow.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.z,d.d,B.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.ciP.prototype={
$2(d,e){var w=null,v=this.a,u=C.i0O(B.Ma(v.c,v.d))
return B.c("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2109}
C.ciO.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:62}
C.c6d.prototype={
$0(){},
$S:0}
C.fy8.prototype={
$1(d){return A.o.v(d)},
$S:81}
C.e0g.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e0h.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e0i.prototype={
$0(){var w=this.a
return w.w=D.Tr[w.d.aw(5)]},
$S:0}
C.e0j.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e0k.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e0l.prototype={
$0(){var w=this.a
return w.l(new C.e0f(w))},
$S:0}
C.e0f.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0m.prototype={
$0(){var w=this.a
return w.l(new C.e0e(w))},
$S:0}
C.e0e.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0p.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e0q.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bj:B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),r=B.m(10)
t=t.y?u:new C.e0o(t,d)
w=B.m(10)
v=A.i.ac(d,0)
return B.E(new B.D(A.jg,B.aF(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.c("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.aj),u),1)},
$S:2110}
C.e0o.prototype={
$0(){var w=this.a
return w.l(new C.e0n(w,this.b))},
$S:0}
C.e0n.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.ci)},
$S:0}
C.e7Z.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cL.gco().aK(this.c)},
$S:0}
C.e8_.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7V.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f0.j(0.5):A.L,A.r,1),q=B.W(e,u?D.f0:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cV(w,B.A(B.a([q,A.bm,B.c(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.h,0,w,w),w,w,A.b_,new B.n(s,w,r,t,w,w,A.m),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7X(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2111}
C.e7X.prototype={
$0(){var w=this.a
return w.l(new C.e7W(w,this.b))},
$S:0}
C.e7W.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7Y.prototype={
$0(){var w=this.a,v=w.d===A.lc?"Cash App tag":"Bitcoin address"
return w.JN(this.b,v)},
$S:0}
C.e7U.prototype={
$0(){var w=this.a
return w.JN(w.gaun(),"Code")},
$S:0}
C.chC.prototype={
$1(d){return C.hY_(B.a1(d,x.N,x.z))},
$S:z+20}
C.chD.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chz.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chA.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chB.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chE.prototype={
$1(d){var w=d.c
return!w.cZ(this.a.bQ(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c9l.prototype={
$1(d){return C.hY0(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9m.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9j.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c9k.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9o.prototype={
$1(d){var w=d.b
return!w.cZ(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chN.prototype={
$1(d){return d.aj()},
$S:z+28}
C.chM.prototype={
$1(d){return C.hv2(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chL.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chK.prototype={
$1(d){return C.i0r(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chP.prototype={
$1(d){return C.i0q(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chQ.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chR.prototype={
$1(d){return d.aj()},
$S:z+34}
C.ec4.prototype={
$1(d){return d.bgf(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ec5.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ec_.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ebI.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.I(w,this.b)},
$S:0}
C.ebJ.prototype={
$1(d){return new C.QI(this.a,null)},
$S:z+9}
C.ebK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.d()
w=A.d.bk(t,new C.ebH(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JX()}},
$S:0}
C.ebH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebW.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebX.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.d()
t.d=C.irs(v,w[0],w[3])
t.JX()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ebY.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebQ.prototype={
$1(d){return new C.QI(this.a,null)},
$S:z+9}
C.ebR.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebP.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.ebV.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.d()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JX()},
$S:0}
C.ebU.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.d()
w=this.b
return new C.a1v(u[w],new C.ebT(v,w),null)},
$S:z+59}
C.ebT.prototype={
$1(d){var w=this.a
return w.l(new C.ebS(w,this.b,d))},
$S:z+40}
C.ebS.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebM.prototype={
$0(){var w=this.a
return w.l(new C.ebL(w))},
$S:0}
C.ebL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ebN.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eL,B.c(t+": "+B.v(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cE,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:128}
C.ebO.prototype={
$1(d){return this.a.a2U()},
$S:2}
C.ec3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uy:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aL:A.bn
r=w.d
q=B.b1(r).j(0.15)
p=B.m(12)
q=B.o(n,B.W(A.arb,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.bT,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.W(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.m),n,n,n,n,A.hF,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.c(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.G,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.h,0,n,n)
p=w.e.length
return new B.D(A.da,B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awL(q,e,!0,n),n,n,n,n,new C.ec0(m,e),!1,n,n,new B.ba(t,new B.aw(s,1,A.r,-1)),n,n,B.c("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CL(n,n,n,n,n,new C.ec1(),A.J,new C.ec2(m,e),A.cr,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.aj),new B.bl(w.a,x.W))},
$S:128}
C.ec2.prototype={
$1(d){var w=this
if(d==="edit")w.a.ac1(w.b)
if(d==="questions")w.a.a_7(w.b)
if(d==="delete")w.a.bQ7(w.b)},
$S:2}
C.ec1.prototype={
$1(d){return D.d60},
$S:145}
C.ec0.prototype={
$0(){return this.a.a_7(this.b)},
$S:0}
C.cXq.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.d()
w=d.a===q.a
if(w){q=r.f
q===$&&B.d()
q=B.b1(q).j(0.2)}else q=A.cC.j(0.1)
v=B.m(10)
if(w){u=r.f
u===$&&B.d()
u=B.b1(u)}else u=A.L
u=B.K(u,A.r,1)
t=r.f
t===$&&B.d()
return B.aM(!1,s,!0,B.o(s,B.W(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.m),s,s,s,s,A.cr,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cXp(r,d),s,s,s,s,s,s,s)},
$S:2112}
C.cXp.prototype={
$0(){var w=this.a
return w.l(new C.cXn(w,this.b))},
$S:0}
C.cXn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXr.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.d()
return B.ay(w,B.hg(u,w,t===d?D.c38:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cXo(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:421}
C.cXo.prototype={
$0(){var w=this.a
return w.l(new C.cXm(w,this.b))},
$S:0}
C.cXm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXs.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cXt.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.d()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.d()
v=v.f
v===$&&B.d()
t=u.cRj(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f4f.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return w.push(this.b)},
$S:0}
C.f4g.prototype={
$1(d){return new C.a1u(this.a,null)},
$S:z+41}
C.f4m.prototype={
$2(d,e){return A.P},
$S:38}
C.f4l.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uy:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aL:A.bn
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bw(q,B.aSt(n,A.bZ,36,A.qY,l?A.bP:A.an,r,48),A.aq)}else r=B.W(D.a3t,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.c(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f4j(m,w,e),!1,n,n,new B.ba(t,new B.aw(s,1,A.r,-1)),n,n,B.c(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c1p,n,n,n,new C.f4k(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.aj)},
$S:84}
C.f4k.prototype={
$0(){var w=this.a
w.l(new C.f4h(w,this.b))
w.azW()},
$S:0}
C.f4h.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.f4j.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4h(u.b),$async$$0)
case 2:s=e
if(s!=null){t.l(new C.f4i(t,u.c,s))
t.azW()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f4i.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f4b.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f49.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
return new C.WX(w,"Answer Document",null)},
$S:z+42}
C.f4a.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f4d.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.d()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.d()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).N(new C.iC(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f4e.prototype={
$1(d){var w=this.a
return w.l(new C.f4c(w,d))},
$S:9}
C.f4c.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chH.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fTV.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ecF.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ecl.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lU("image","",this.b,null))},
$S:0}
C.ecq.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lU("video","","data:video/mp4;base64,"+A.cL.gco().aK(this.b),null))},
$S:0}
C.eco.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7L,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7K,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.ecm(d),w,w),B.bJ(D.h1O,w,new C.ecn(d),w)],v),w,w,w,u,w,w,w,w,D.fP4,w)},
$S:18}
C.ecm.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ecn.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ecp.prototype={
$0(){var w,v=this.a.e
v===$&&B.d()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lU("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ech.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eci.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecj.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.eck.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecv.prototype={
$0(){var w=this.a.bJg()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ecw.prototype={
$0(){return this.a.azX("**","**")},
$S:0}
C.ecx.prototype={
$0(){return this.a.azX("*","*")},
$S:0}
C.ecy.prototype={
$0(){return this.a.azX("__","__")},
$S:0}
C.ecz.prototype={
$0(){return this.a.b2h("## Section title")},
$S:0}
C.ecA.prototype={
$0(){return this.a.b2h("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ecB.prototype={
$0(){},
$S:0}
C.ecC.prototype={
$0(){var w=this.a
w.l(new C.ecu(w))},
$S:0}
C.ecu.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.dZJ)},
$S:0}
C.ecD.prototype={
$0(){var w=this.a
w.l(new C.ect(w))},
$S:0}
C.ect.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.dZK)},
$S:0}
C.ecE.prototype={
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
t=B.c(t,v,v,v,v,v,v,B.l(v,v,w?A.iC:A.av,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?A.cu:A.hP
return B.Eg(v,w,A.atv,t,v,new C.ecs(this.a,d),v)},
$S:z+45}
C.ecs.prototype={
$0(){var w=this.a
return w.l(new C.ecr(w,this.b))},
$S:0}
C.ecr.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.cH(w,this.b.a)},
$S:0}
C.ece.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2p},
$S:0}
C.ecf.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hH5},
$S:0}
C.ec6.prototype={
$0(){var w=this.a
w.d=D.b2o
w.f=w.e=null},
$S:0}
C.ec7.prototype={
$0(){var w=this.a
w.d=D.b2p
w.f=null},
$S:0}
C.ecg.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ec9.prototype={
$2(d,e){var w=this.a,v=w.gba1()[e]
return new C.adq(v,this.b,new C.ec8(w,v),null)},
$S:z+46}
C.ec8.prototype={
$0(){return this.a.cek(this.b.a)},
$S:0}
C.ecb.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ecd.prototype={
$2(d,e){return A.T},
$S:38}
C.ecc.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uy:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aL:A.bn,A.r,1),l=B.a([new B.ab(0,A.H,A.w.j(r?0.28:0.06),A.dN,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bw(w,B.aSt(v,A.bZ,52,D.a3t,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.W(D.a3t,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.m),t,52,t,t,t,t,t,52))}k.push(A.ba)
k.push(B.E(B.c(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.W(A.eJ,r?A.bP:A.an,t,t,t,22))
return B.aF(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.m),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.eca(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.aj)},
$S:84}
C.eca.prototype={
$0(){return this.a.cll(this.b)},
$S:0}
C.chJ.prototype={
$1(d){return new C.adh(d,this.a,null)},
$S:z+48}
C.cQI.prototype={
$0(){var w=this.a.c,v=w.c,u=B.om(v==null?w.b:v)
if(u!=null)B.iQ(u,A.fp,null)},
$S:0}
C.cQJ.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQK.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.c("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nK,B.A(B.a([u,B.E(B.c(t,w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.D,w,A.e,A.h,0,w,w),w)},
$S:151}
C.dsR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsT.prototype={
$0(){return this.a.l(new C.dsS(this.b))},
$S:0}
C.dsS.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fxR.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecT.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.EA)w.z=v
else w.Q=v},
$S:0}
C.ecK.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.ck,A.eX)},
$S:7}
C.ecM.prototype={
$1(d){return J.u(d,"role")==="ai"},
$S:105}
C.ecN.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.ci)
w.r=!0},
$S:0}
C.ecO.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecP.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.v(w.h(d,"text"))},
$S:159}
C.ecQ.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ecR.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ecS.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ecL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n1(l,A.bD.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bS,B.A(B.a([new B.a5(22,22,k,l),A.as,B.c("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.dZ,l,l,l,l,l,l,l,l,12,A.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.h,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aD(k,A.bY,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bD.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ab(0,A.H,(u?A.bD:A.aD).j(0.22),A.i9,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bn:A.bq
n=u?13.5:15
m=u?A.bo:A.cK
return new B.bK(t,l,l,B.o(l,B.c(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cE,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.be(A.it,A.it,new B.aP(s,s),new B.aP(r,r)),p,q,A.m),l,l,l,A.kG,A.jy,l,l,l),l)},
$S:43}
C.ed_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.d()
w=m.x
w===$&&B.d()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.aim,A.a_,A.or],t):B.a([A.qu,A.qr,A.qs],t)
w=B.a([new B.ab(-4,A.H,A.aD.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dt()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.d()
q.fE(m*0.08)
q=B.fA(A.z,B.o(o,D.bYR,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eH9,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.oj(A.k0,D.h6B,new C.ecX())
p=x.p
m=B.a([B.A(B.a([q,A.ba,B.E(B.x(B.a([m,B.c("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b6,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.D,o,A.e,A.h,0,A.p),1)],p),A.l,o,A.e,A.h,0,o,o),A.af,B.A(B.a([n.ay5(D.EA,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ab,n.ay5(D.aMB,"English","\ud83c\uddec\ud83c\udde7",u),A.ab,n.ay5(D.EB,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.h,0,o,o)],p)
if(n.x!==D.EB){t=B.a([A.P,n.cER(u)],p)
if(n.w){q=n.x===D.EA?D.a7F:D.a6K
p=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.ecY(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jx,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bD.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bD.j(0.45),A.r,1)
m.push(new B.D(A.jx,B.o(o,B.c('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iA:A.k2,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.m),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dqs,new C.ecZ(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.h,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.m),o,o,o,H.anf,H.anq,o,o,o)},
$S:88}
C.ecX.prototype={
$1(d){return D.ccA.aA(0,d)},
$S:77}
C.ecY.prototype={
$1(d){return this.a.cES(d,this.b)},
$S:z+49}
C.ecZ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMD?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.ecW(p,d)
s=C.i1W(d)
if(o)r=A.c
else r=v?A.ac:A.bq
r=B.c(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i1X(d)
if(o)v=A.ac
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aF(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.Hm,B.x(B.a([r,B.c(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.aj),q),1)},
$S:z+50}
C.ecW.prototype={
$0(){var w=this.a
return w.l(new C.ecV(w,this.b))},
$S:0}
C.ecV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ed1.prototype={
$0(){var w=this.a
return w.l(new C.ed0(w))},
$S:0}
C.ed0.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ecJ.prototype={
$0(){var w=this.a
return w.l(new C.ecI(w,this.b))},
$S:0}
C.ecI.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.EB
if(v===D.aMB&&w.Q==null)w.Q=A.d.gH(D.a6K).a},
$S:0}
C.ed2.prototype={
$0(){return this.a.cAh(this.b.a)},
$S:0}
C.ecU.prototype={
$0(){return this.a.JO(this.b)},
$S:0}
C.ecG.prototype={
$1(d){return this.a.b2i()},
$S:2}
C.ecH.prototype={
$0(){return this.a.b2i()},
$S:0}
C.h64.prototype={
$1(d){var w=this
return new C.a0f(w.a,w.b,w.c,new C.h63(w.d),null)},
$S:z+51}
C.h63.prototype={
$0(){return J.lJ(this.a.bm())},
$S:0}
C.dqb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bl9()},
$S:30}
C.dqc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.d()
m=m.x
m===$&&B.d()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aD(m,A.bY,u).w
s=Math.cos(v)
u=B.aD(m,A.bY,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.ea:A.hs
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d0(B.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:370}
C.dqh.prototype={
$0(){},
$S:0}
C.dqg.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.d()
w=t.x
w===$&&B.d()
v=A.nq.aB(0,A.i.D(w,0,1))
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793)
w=B.dt()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fE(t*0.08)
w.k5(0.12)
return B.e1(A.z,B.fA(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dqd.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ab(6,A.H,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n1(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.c(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.d8(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:121}
C.dqe.prototype={
$1(d){return D.ccE.aA(0,d)},
$S:77}
C.dqf.prototype={
$0(){var w=this.a
w.a.bl9()
w.a.e.$0()},
$S:0}
C.cjI.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fX)if(d.x===A.dI){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjV.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erk.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.es0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QV()},
$S:7}
C.es1.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ul||w===A.um)return
this.a.Fq()},
$S:12}
C.es2.prototype={
$1(d){this.a.cH2()},
$S:12}
C.erJ.prototype={
$0(){this.a.Kj(this.b.d,!1)},
$S:0}
C.erK.prototype={
$0(){},
$S:0}
C.erL.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.erM.prototype={
$0(){},
$S:0}
C.erN.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erO.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.erP.prototype={
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
C.erE.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Q7()
w.aa7()},
$S:0}
C.erl.prototype={
$0(){this.b.Kj(this.c.d+this.a.a,!1)},
$S:0}
C.erF.prototype={
$1(d){var w=d.d
return(w===A.fX||w===A.f4)&&d.x===A.dI},
$S:15}
C.erG.prototype={
$1(d){return d.a},
$S:178}
C.erH.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erI.prototype={
$0(){},
$S:0}
C.erp.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.erq.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.ery.prototype={
$0(){},
$S:0}
C.erv.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.erw.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erx.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erz.prototype={
$0(){return this.a.z=!0},
$S:0}
C.erA.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w5(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.erB.prototype={
$0(){return this.a.z=!1},
$S:0}
C.erD.prototype={
$0(){var w=this.a
return w.l(new C.erC(w))},
$S:0}
C.erC.prototype={
$0(){return this.a.y=1},
$S:0}
C.err.prototype={
$0(){return this.a.y=1},
$S:0}
C.ers.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erT.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erU.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.erY.prototype={
$0(){var w=this.a
return w.l(new C.erR(w))},
$S:0}
C.erR.prototype={
$0(){return this.a.y=1},
$S:0}
C.erZ.prototype={
$0(){var w=this.a
return w.l(new C.erQ(w))},
$S:0}
C.erQ.prototype={
$0(){return this.a.y=2},
$S:0}
C.es_.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.erV.prototype={
$2$cloudRequest(d,e){return this.a.b3B(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2113}
C.erW.prototype={
$0(){return this.a.Fq()},
$S:1}
C.erX.prototype={
$0(){var w=this.a
return w.l(new C.erS(w))},
$S:0}
C.erS.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.ero.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.ern(w))},
$S:0}
C.ern.prototype={
$0(){return this.a.y=0},
$S:0}
C.erm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIN(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.H,A.aE.j(0.55),A.J,18)],x.V),D.cax,A.a6),t,t,t,t,t,t,t,t),A.ee,A.td,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9l(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.h,0,t,t)],w),t)},
$S:70}
C.eru.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.l(new C.ert(w,v))},
$S:0}
C.ert.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.duB.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fX||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.duC.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.duD.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hdO(v.c,u))
w=this.c?new C.duA(v):null
return v.bc6(this.b,A.oT,D.f0,w,"Today","$"+u,D.f0)},
$S:2115}
C.duA.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.duE.prototype={
$2(d,e){var w=this.a
return w.bc6(this.b,A.kg,A.ce,w.w,"Balance","$"+B.dG(B.Ma(w.c.a,new C.duz(w))),A.ct)},
$S:74}
C.duz.prototype={
$0(){return this.a.c.d},
$S:85}
C.duu.prototype={
$0(){this.a.a.cZh()
return null},
$S:0}
C.duv.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.d()
v=v.x
v===$&&B.d()
return B.b4(w,w,w,new C.bz3(v,w),A.az)},
$S:60}
C.duw.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.bet(v,!0,A.aE,D.pr,w)}else{v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.bes(v,D.pr,w)}return B.b4(w,w,w,v,A.az)},
$S:60}
C.dux.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.duy.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cXY(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.i.D(v/u,0,1)}u=w.d
u===$&&B.d()
s=w.e
s===$&&B.d()
return B.c7(new B.he(B.a([u,s],x.U)),new C.dut(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2116}
C.dut.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.dus(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.d()
v=v.x
v===$&&B.d()
u=o.d
l.push(B.b4(n,n,n,new C.ber(o.c,v,k,u,D.pr,D.bz_,n),D.foE))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.vf
else t=o.e?A.x2:D.bTX
t=B.W(t,k?D.pr:A.b0,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.c(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.G,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pr:A.c
w=B.c(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.am,s,A.aw,w,A.P,B.o(n,B.c(o.r,n,n,n,n,n,n,B.l(n,n,k?D.pr:A.px,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.m),n,n,n,n,A.lt,n,n,n)],m),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:250}
C.dus.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=A.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dp(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.pr.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.m),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:227}
C.duV.prototype={
$0(){},
$S:0}
C.duW.prototype={
$0(){},
$S:0}
C.duX.prototype={
$1(d){return d.x===A.dI},
$S:15}
C.duH.prototype={
$0(){return this.a.a.d.d},
$S:85}
C.duG.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.l(new C.duF(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.duF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.duS.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jg,B.ay(v,B.cV(A.z,B.c("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ac,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b_,new B.n(q,v,p,r,v,v,A.m),A.hf,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.duU(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2118}
C.duU.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.duT(w,this.b))},
$S:0}
C.duT.prototype={
$0(){var w=""+this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.duR.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uV,B.A(B.a([v,A.b1,B.c(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2119}
C.duQ.prototype={
$1(d){return this.a.l(new C.duP())},
$S:2}
C.duP.prototype={
$0(){},
$S:0}
C.duK.prototype={
$1(d){return this.a.aZz(d)&&!B.hm7(d)},
$S:15}
C.duL.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.duM.prototype={
$0(){return this.a.a.d.d},
$S:85}
C.duN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.l(new C.duJ())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.duJ.prototype={
$0(){},
$S:0}
C.duO.prototype={
$0(){var w=this.a
return w.l(new C.duI(w))},
$S:0}
C.duI.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fPI.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.fHp.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h05.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fHo.prototype={
$1(d){var w,v,u
if(!C.ioj(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bi(J.k(w==null?"":w))}if(u!=null&&A.o.ar(new B.V(Date.now(),0,!1).bA(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fvt.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.fZw.prototype={
$0(){return $.hjk=null},
$S:11}
C.fZx.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fX7.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fX8.prototype={
$0(){var w,v=this.a
$.hj8.W(0,v)
w=C.uA(this.b,v)
if(w!=null)B.S6(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h1h.prototype={
$1(d){return new C.a12(this.a,this.b,null)},
$S:z+56}
C.elY.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.em0.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.em1.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.l(new C.em_(w))},
$S:2}
C.em_.prototype={
$0(){return this.a.f=""},
$S:0}
C.em2.prototype={
$1(d){return this.a.b2y()},
$S:2}
C.em3.prototype={
$0(){var w=this.a
return w.l(new C.elZ(w,this.b))},
$S:0}
C.elZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fGm.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aX(d,1)},
$S:13}
C.fGl.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aX(d,1)},
$S:13}
C.fZO.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.fZP.prototype={
$1(d){return J.cK(d)},
$S:4}
C.fT6.prototype={
$1(d){return d.a!=="send_email"},
$S:357}
C.fZe.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.c(d,w,w,w,w,w,w,A.hm,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,86,w,A.f7,w,w,w,72)},
$S:789}
C.clB.prototype={
$1(d){return J.k(d)},
$S:16}
C.clC.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clA(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:790}
C.clA.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:381}
C.clD.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clz(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:790}
C.clz.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:381}
C.clF.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.clG.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.cly.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.clE.prototype={
$2(d,e){return d+e},
$S:67}
C.clx.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.u(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:67}
C.fJa.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fJ4.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJ5.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJ6.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJ7.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJ8.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJ9.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fsu.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ar(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.u(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_l:D.bkg
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bn],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dE
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.H,A.w.j(0.35),A.dN,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fst(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:89}
C.fst.prototype={
$0(){var w=this,v=w.a,u=v.d3e(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.rg:D.JQ
w.f.$1(v)}},
$S:0}
C.fGI.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,A.aVL,new C.fGH(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:130}
C.fGH.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aA
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.c(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fGG(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.h0,0,v,v,v,v,v,A.aj)},
$S:84}
C.fGG.prototype={
$0(){var w=this,v=w.a.d3g(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frM.prototype={
$1(d){return new B.D(A.jg,C.fWZ(d,!1),null)},
$S:371}
C.frN.prototype={
$1(d){return C.fWZ(d,!1)},
$S:2123}
C.frO.prototype={
$0(){var w=this,v=w.a
v.cNA(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.frP.prototype={
$0(){var w=this
w.a.cNB(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fDB.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n_(v,A.bs,B.c(""+u,v,v,v,v,v,v,A.cd,v,v,v),A.dk,new C.fDA(w.a,w.b,u,w.c,w.d),v,v,new B.aw(A.c.j(0.2),1,A.r,-1),v)},
$S:2124}
C.fDA.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fFy.prototype={
$1(d){return D.duO[d]},
$S:81}
C.fFz.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fCq.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fCr.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fsY.prototype={
$0(){var w=this,v=w.a.cTq(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fsX.prototype={
$1(d){var w,v=null,u=J.u(this.a.fr[5-d],this.b)
if(u===0)w=A.lQ
else w=u===1?A.dQ:A.tL
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nP,v,v,v,v),v)},
$S:2125}
C.fCC.prototype={
$1(d){var w=this
if(w.a.bfz(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fCD.prototype={
$0(){var w=this
if(w.a.bfz(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fsh.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fOL.prototype={
$1(d){var w=J.u(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fOM.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:55}
C.eTY.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNg.prototype
w.bzk=w.Z
w.bzj=w.t
w=C.aNh.prototype
w.bzm=w.Z
w.bzl=w.t
w=C.aNi.prototype
w.bzo=w.Z
w.bzn=w.t
w=C.aOf.prototype
w.bAn=w.Z
w.bAm=w.t
w=C.aNO.prototype
w.bzV=w.t
w=C.aOp.prototype
w.bAx=w.t
w=C.aNj.prototype
w.bzp=w.t
w=C.aOx.prototype
w.bAG=w.t
w=C.aNo.prototype
w.bzu=w.t
w=C.aNE.prototype
w.bzL=w.t
w=C.aP8.prototype
w.bBh=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCR.prototype,"gbWb","bWc",19)
v(q,"gaVP","aVQ",1)
v(C.aCQ.prototype,"gcDK","a3L",1)
v(q=C.aCS.prototype,"gc0I","c0J",1)
v(q,"gbL6","bL7",1)
v(q=C.azT.prototype,"gcwH","cwI",1)
v(q,"gckT","Ro",0)
v(q,"gcHV","cHW",1)
v(q,"gczN","nl",0)
w(q,"gcpj","cpk",25)
w(q,"gcG6","T7",33)
v(q=C.aEY.prototype,"gbU7","YT",0)
v(q,"gca1","a_s",0)
v(q,"gc9Z","a_r",0)
v(q,"gca_","aeZ",0)
v(q,"gca0","Qb",0)
v(C.aC9.prototype,"gca2","ca3",1)
u(C,"ivT","i08",58)
t(C,"hmf",0,null,["$1","$0"],["hIw",function(){return C.hIw(null)}],3,0)
t(C,"bHc",0,null,["$1","$0"],["hIv",function(){return C.hIv(null)}],3,0)
v(C.O7.prototype,"gFa","ci2",1)
v(C.aFJ.prototype,"gcwZ","BB",0)
v(q=C.aFZ.prototype,"gclc","Rq",0)
v(q,"gcq4","a1Y",0)
v(q,"gcee","cef",1)
v(q=C.aGa.prototype,"gcej","ag3",0)
v(q,"gbEA","aa_",0)
v(q,"gcxf","a2U",0)
s(q,"gcix","ciy",35)
v(C.aIc.prototype,"gbF1","aa1",1)
v(q=C.aIb.prototype,"gcei","ag2",0)
v(q,"gck9","ahb",0)
v(q=C.aGc.prototype,"gc4m","adK",0)
v(q,"gc4o","Zy",0)
v(q,"gc4n","adL",0)
v(q=C.aGb.prototype,"gbHn","bHo",1)
v(q,"gbHp","bHq",1)
v(C.aGd.prototype,"gbNk","bNl",1)
v(C.aDb.prototype,"gcel","cem",1)
v(q=C.aGA.prototype,"gb2r","ceD",1)
r(q,"gb3z",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agP","aAC","b3B","b3A"],52,0,0)
r(q,"gchL",0,4,null,["$4"],["chM"],53,0,0)
v(q,"gcjS","a18",0)
v(q,"gckK","ahi",0)
v(q,"gckF","ahg",0)
v(q,"gc7G","aev",0)
w(C.aDZ.prototype,"gc6g","c6h",54)
w(q=C.aE0.prototype,"gcF_","cF0",55)
v(q,"gcDA","cDB",1)
v(q,"gcLL","cLM",1)
v(C.aGo.prototype,"gceZ","b2y",1)
v(C.aHc.prototype,"gb35","aAo",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.mB,[C.cCr,C.cCo,C.cCp,C.cCq,C.cCn,C.ffU,C.ffS,C.ffW,C.ffT,C.fzy,C.dmC,C.dmN,C.dmV,C.dmW,C.dmY,C.dmQ,C.dmO,C.dmP,C.dmR,C.dmS,C.dmI,C.dmJ,C.dmH,C.dmL,C.dmM,C.dmF,C.dmE,C.dn_,C.dn2,C.e0a,C.e09,C.e0b,C.e08,C.e07,C.dmw,C.dmz,C.dmA,C.dmy,C.dmx,C.doo,C.dop,C.doq,C.dnE,C.dnF,C.do8,C.dnU,C.dnV,C.dnW,C.dnX,C.dnY,C.dn6,C.dnD,C.do9,C.doi,C.do6,C.do5,C.dnB,C.dnC,C.doe,C.dof,C.dn8,C.dn9,C.dnN,C.dnO,C.dnP,C.dnM,C.dnZ,C.do_,C.do0,C.do1,C.do2,C.do3,C.doc,C.dnQ,C.dnR,C.dnS,C.dnT,C.dog,C.doh,C.dna,C.dnb,C.dnc,C.dnd,C.doa,C.dob,C.dnL,C.do4,C.dnJ,C.doj,C.dok,C.dol,C.dnG,C.dnp,C.dno,C.dnn,C.dnt,C.dnm,C.dnk,C.dnf,C.dni,C.dne,C.dny,C.dnz,C.dng,C.drX,C.cNO,C.cNE,C.cNF,C.cNY,C.cNV,C.cNW,C.cNX,C.cNQ,C.cNP,C.cNG,C.cNR,C.cOg,C.cOc,C.cOb,C.cNM,C.cNN,C.cNJ,C.cNU,C.cO1,C.cO2,C.cO3,C.cO4,C.cO5,C.cO6,C.cO7,C.cOs,C.cOl,C.cOi,C.cOn,C.cOk,C.cOh,C.cNH,C.cOe,C.dIu,C.dIv,C.dIl,C.dIj,C.dIt,C.dIi,C.dIh,C.dIk,C.dIp,C.dIq,C.dIn,C.dIo,C.dIw,C.dIx,C.dIy,C.dIz,C.f9l,C.f9m,C.dho,C.fPC,C.dOX,C.dOP,C.dOR,C.dOV,C.dOQ,C.dOS,C.dOT,C.cdX,C.fWX,C.fWW,C.dI6,C.dI5,C.dI7,C.dI4,C.e7J,C.e7K,C.e7R,C.h5b,C.h5c,C.c6d,C.e0g,C.e0h,C.e0i,C.e0j,C.e0k,C.e0l,C.e0f,C.e0m,C.e0e,C.e0p,C.e0o,C.e0n,C.e7Z,C.e8_,C.e7X,C.e7W,C.e7Y,C.e7U,C.ebZ,C.ec_,C.ebI,C.ebK,C.ebW,C.ebX,C.ebR,C.ebP,C.ebV,C.ebS,C.ebM,C.ebL,C.ec0,C.cXp,C.cXn,C.cXo,C.cXm,C.cXs,C.cXt,C.f4f,C.f4k,C.f4h,C.f4j,C.f4i,C.f4b,C.f4a,C.f4d,C.f4c,C.ecl,C.ecq,C.ecm,C.ecn,C.ecp,C.ecv,C.ecw,C.ecx,C.ecy,C.ecz,C.ecA,C.ecB,C.ecC,C.ecu,C.ecD,C.ect,C.ecs,C.ecr,C.ece,C.ecf,C.ec6,C.ec7,C.ec8,C.eca,C.cQI,C.dsR,C.dsT,C.dsS,C.ecT,C.ecN,C.ecO,C.ecQ,C.ecR,C.ecS,C.ecW,C.ecV,C.ed1,C.ed0,C.ecJ,C.ecI,C.ed2,C.ecU,C.ecH,C.h63,C.dqh,C.dqf,C.erk,C.erJ,C.erK,C.erL,C.erM,C.erO,C.erP,C.erE,C.erl,C.erI,C.erp,C.erq,C.ery,C.erv,C.erw,C.erx,C.erz,C.erA,C.erB,C.erD,C.erC,C.err,C.ers,C.erY,C.erR,C.erZ,C.erQ,C.es_,C.erW,C.erX,C.erS,C.ero,C.ern,C.eru,C.ert,C.duA,C.duz,C.duu,C.duV,C.duW,C.duH,C.duG,C.duF,C.duU,C.duT,C.duP,C.duM,C.duN,C.duJ,C.duO,C.duI,C.fZw,C.fX8,C.elY,C.em0,C.em_,C.em3,C.elZ,C.fJ4,C.fJ5,C.fJ6,C.fJ7,C.fJ8,C.fJ9,C.fst,C.fGG,C.frO,C.frP,C.fDA,C.fFz,C.fCr,C.fsY,C.fCD,C.fsh,C.eTY])
u(B.kp,[C.cCs,C.ffV,C.fTq,C.fTi,C.fzv,C.fzu,C.fzx,C.dn4,C.dn5,C.dmU,C.dmT,C.dmX,C.dmG,C.dmK,C.dmZ,C.e0d,C.dmB,C.dor,C.dos,C.dot,C.dou,C.dov,C.do7,C.dod,C.dn7,C.don,C.dom,C.dnq,C.dnr,C.dns,C.dnu,C.dnw,C.drY,C.cOt,C.cNT,C.cNS,C.cOa,C.cOd,C.cO9,C.cNK,C.cO0,C.cNZ,C.cOf,C.cO_,C.cOo,C.cOm,C.cOr,C.c4V,C.c4U,C.c4X,C.c4W,C.dIs,C.dIr,C.dIm,C.dIA,C.dIB,C.fEa,C.fFn,C.dhp,C.dhn,C.c5H,C.fPB,C.dOY,C.dOW,C.cdY,C.fGc,C.fWV,C.cgo,C.cgn,C.cgQ,C.e7H,C.e7I,C.fRZ,C.fRM,C.fRL,C.fCu,C.ch3,C.ch4,C.ch5,C.ch2,C.ch1,C.fzd,C.h57,C.h58,C.h59,C.h5a,C.h56,C.e7O,C.e7P,C.e7N,C.h5d,C.dow,C.ciO,C.fy8,C.e0q,C.e7V,C.chC,C.chz,C.chB,C.chE,C.c9l,C.c9j,C.c9o,C.chN,C.chM,C.chL,C.chK,C.chP,C.chR,C.ec4,C.ebJ,C.ebH,C.ebY,C.ebQ,C.ebU,C.ebT,C.ebO,C.ec2,C.ec1,C.cXq,C.cXr,C.f4g,C.f49,C.f4e,C.chH,C.fTV,C.ecF,C.eco,C.ech,C.eci,C.ecj,C.eck,C.ecE,C.chJ,C.cQJ,C.cQK,C.fxR,C.ecK,C.ecM,C.ecP,C.ecX,C.ecY,C.ecZ,C.ecG,C.h64,C.dqb,C.dqe,C.cjI,C.cjV,C.es0,C.es1,C.es2,C.erN,C.erF,C.erG,C.erH,C.erT,C.erV,C.duB,C.duC,C.dux,C.dus,C.duX,C.duS,C.duR,C.duQ,C.duK,C.fHp,C.h05,C.fHo,C.fvt,C.fZx,C.fX7,C.h1h,C.em1,C.em2,C.fGm,C.fGl,C.fZO,C.fZP,C.fT6,C.fZe,C.clB,C.clC,C.clA,C.clD,C.clz,C.clF,C.clG,C.cly,C.fJa,C.frM,C.frN,C.fDB,C.fFy,C.fCq,C.fsX,C.fCC,C.fOL,C.fOM])
t(C.bv6,B.jL)
u(B.ag,[C.Ge,C.anb,C.aFI,C.ana,C.anc,C.anZ,C.ak1,C.apx,C.a0J,C.a0K,C.a_R,C.aq3,C.apw,C.OD,C.aCT,C.are,C.arX,C.WW,C.QI,C.a1v,C.a1u,C.WX,C.asd,C.aDM,C.asg,C.a0f,C.asQ,C.aDY,C.aE_,C.a12,C.aub])
u(B.ah,[C.aKL,C.aNh,C.aOf,C.aNg,C.aNi,C.bjW,C.azT,C.aEY,C.bmn,C.bmo,C.aC9,C.bmv,C.aNO,C.aOp,C.aNj,C.aFJ,C.aFZ,C.aGa,C.be_,C.aIc,C.aIb,C.aGc,C.aGb,C.bk9,C.aOx,C.aNo,C.bB2,C.aNE,C.aE0,C.aGo,C.aP8])
u(B.mh,[C.ffX,C.fzw,C.dmD,C.dn3,C.dn1,C.dn0,C.e0c,C.dnK,C.dnI,C.dnH,C.dnl,C.dnv,C.dnj,C.dnx,C.dnh,C.dnA,C.cO8,C.cNL,C.cOj,C.cOq,C.cOp,C.cNI,C.dhm,C.dOU,C.fGd,C.fGe,C.e7L,C.fTl,C.h55,C.e7Q,C.e7T,C.e7S,C.dox,C.ciP,C.chD,C.chA,C.c9m,C.c9k,C.chQ,C.ec5,C.ebN,C.ec3,C.f4m,C.f4l,C.ecg,C.ec9,C.ecb,C.ecd,C.ecc,C.ecL,C.ed_,C.dqc,C.dqg,C.dqd,C.erU,C.erm,C.duD,C.duE,C.duv,C.duw,C.duy,C.dut,C.duL,C.fPI,C.clE,C.clx,C.fsu,C.fGI,C.fGH])
t(C.ay3,C.Ge)
u(B.aK,[C.rg,C.afj,C.O7,C.JG,C.rT,C.rU,C.lU,C.iC,C.iq,C.bc1,C.dek,C.dsQ,C.rZ,C.WY,C.OU,C.qk,C.b2h,C.pD,C.atg])
t(C.aCR,C.aNh)
t(C.bmS,C.aOf)
t(C.aCQ,C.aNg)
t(C.aCS,C.aNi)
u(B.qz,[C.XD,C.aDN,C.at3,C.JL,C.FC])
u(B.av,[C.a25,C.bvD,C.ag4,C.Rk,C.a89,C.Ov,C.arR,C.aeW,C.aeV,C.b36,C.aDL,C.adq,C.b2E,C.adh,C.aDZ])
t(C.bml,C.aNO)
t(C.bn5,C.aOp)
t(C.biB,C.aNj)
t(C.aGd,C.aOx)
t(C.aDb,C.aNo)
t(C.aGA,C.bB2)
t(C.bkT,C.aNE)
u(B.qa,[C.bet,C.bes,C.ber,C.bdT,C.bz3,C.btS])
t(C.aHc,C.aP8)
w(C.aNg,C.O7)
w(C.aNh,C.O7)
w(C.aNi,C.O7)
w(C.aOf,C.O7)
w(C.aNO,B.eO)
w(C.aOp,B.ch)
w(C.aNj,B.ch)
w(C.aOx,B.ch)
w(C.aNo,B.eO)
w(C.aNE,B.eO)
v(C.bB2,B.eG)
w(C.aP8,B.ch)})()
B.nK(b.typeUniverse,JSON.parse('{"bv6":{"jL":[]},"Ge":{"ag":[],"w":[]},"aKL":{"ah":["Ge<1,2>"]},"ay3":{"Ge":["1","hx<1>"],"ag":[],"w":[],"Ge.T":"1","Ge.S":"hx<1>"},"anb":{"ag":[],"w":[]},"aFI":{"ag":[],"w":[]},"ana":{"ag":[],"w":[]},"anc":{"ag":[],"w":[]},"anZ":{"ag":[],"w":[]},"ak1":{"ag":[],"w":[]},"aCR":{"ah":["anb"]},"bmS":{"ah":["aFI"]},"aCQ":{"ah":["ana"]},"aCS":{"ah":["anc"]},"bjW":{"ah":["anZ"]},"azT":{"ah":["ak1"]},"apx":{"ag":[],"w":[]},"a0J":{"ag":[],"w":[]},"a0K":{"ag":[],"w":[]},"ag4":{"av":[],"w":[]},"a_R":{"ag":[],"w":[]},"aEY":{"ah":["apx"]},"a25":{"av":[],"w":[]},"bvD":{"av":[],"w":[]},"bmn":{"ah":["a0J"]},"bmo":{"ah":["a0K"]},"Rk":{"av":[],"w":[]},"aC9":{"ah":["a_R"]},"aq3":{"ag":[],"w":[]},"bmv":{"ah":["aq3"]},"a89":{"av":[],"w":[]},"apw":{"ag":[],"w":[]},"bml":{"ah":["apw"]},"Ov":{"av":[],"w":[]},"arR":{"av":[],"w":[]},"OD":{"ag":[],"w":[]},"bn5":{"ah":["OD"]},"aeW":{"av":[],"w":[]},"aeV":{"av":[],"w":[]},"aCT":{"ag":[],"w":[]},"biB":{"ah":["aCT"]},"b36":{"av":[],"w":[]},"are":{"ag":[],"w":[]},"aFJ":{"ah":["are"]},"arX":{"ag":[],"w":[]},"aFZ":{"ah":["arX"]},"WW":{"ag":[],"w":[]},"QI":{"ag":[],"w":[]},"a1v":{"ag":[],"w":[]},"a1u":{"ag":[],"w":[]},"aGa":{"ah":["WW"]},"be_":{"ah":["QI"]},"aIc":{"ah":["a1v"]},"aIb":{"ah":["a1u"]},"WX":{"ag":[],"w":[]},"aGc":{"ah":["WX"]},"asd":{"ag":[],"w":[]},"adq":{"av":[],"w":[]},"adh":{"av":[],"w":[]},"aDM":{"ag":[],"w":[]},"aGb":{"ah":["asd"]},"aDL":{"av":[],"w":[]},"b2E":{"av":[],"w":[]},"bk9":{"ah":["aDM"]},"asg":{"ag":[],"w":[]},"aGd":{"ah":["asg"]},"a0f":{"ag":[],"w":[]},"aDb":{"ah":["a0f"]},"asQ":{"ag":[],"w":[]},"aDY":{"ag":[],"w":[]},"aE_":{"ag":[],"w":[]},"aGA":{"ah":["asQ"],"eG":[]},"aDZ":{"av":[],"w":[]},"bkT":{"ah":["aDY"]},"bet":{"aB":[]},"bes":{"aB":[]},"ber":{"aB":[]},"aE0":{"ah":["aE_"]},"bdT":{"aB":[]},"bz3":{"aB":[]},"a12":{"ag":[],"w":[]},"aGo":{"ah":["a12"]},"btS":{"aB":[]},"aub":{"ag":[],"w":[]},"aHc":{"ah":["aub"]}}'))
B.a2v(b.typeUniverse,JSON.parse('{"O7":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aE
return{dw:w("mf<t?>"),gS:w("oE"),o:w("d9"),g5:w("xM"),M:w("dj<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oE>"),E:w("U<d9>"),V:w("U<ab>"),O:w("U<t>"),A:w("U<a_>"),R:w("U<o4>"),B:w("U<ai<H>>"),m:w("U<ac<q,q>>"),_:w("U<ac<q,@>>"),b:w("U<rT>"),x:w("U<rU>"),gi:w("U<jq>"),a:w("U<lU>"),Y:w("U<iq>"),v:w("U<iC>"),dA:w("U<JG>"),F:w("U<rZ>"),Z:w("U<kJ>"),g:w("U<hN>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<d8>"),s:w("U<q>"),G:w("U<jL>"),eO:w("U<es>"),d9:w("U<eZ>"),p:w("U<w>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aB?>"),d4:w("U<q?>"),ck:w("ai<rT>"),e:w("ai<rU>"),ac:w("ai<jq>"),dZ:w("ai<lU>"),I:w("ai<iq>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("ac<q,q>"),P:w("ac<q,@>"),f:w("ac<@,@>"),cl:w("cN<q,D>"),aS:w("N<a_,tL>"),dc:w("N<JL,bz>"),dv:w("N<q,q>"),bL:w("N<G,bz>"),a3:w("N<H,bz>"),gN:w("N<H,qc>"),w:w("kH"),b1:w("rT"),Q:w("rU"),bP:w("lU"),i:w("iq"),u:w("iC"),gp:w("WY"),J:w("OU"),D:w("qk"),an:w("kJ"),c:w("cw"),K:w("aK"),d:w("jF<q>"),di:w("+outcome,snapshot(XD,a7u?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<iq>,q?,q?,q?)"),cz:w("Ke"),bJ:w("du<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("kj<H>"),cc:w("Y<q>"),aM:w("ee<d9>"),bG:w("ee<G>"),l:w("w"),gm:w("rg"),ec:w("afj"),q:w("p6"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("d9?"),cJ:w("V?"),gw:w("ai<ac<q,@>>?"),bM:w("ai<@>?"),h:w("ac<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6s=new B.be(A.bJ,A.jE,A.bJ,A.jE)
D.f0=new B.t(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b7_=new B.aw(D.f0,1,A.r,-1)
D.b71=new B.aw(A.ac,2,A.r,-1)
D.b74=new B.aw(A.aV,2,A.r,-1)
D.b76=new B.aw(A.cA,0.8,A.r,-1)
D.b7l=new B.aw(A.aQ,2,A.r,-1)
D.b7s=new B.aw(A.fe,1.6,A.r,-1)
D.b8h=new B.aY(0,330,0,1/0)
D.b8o=new B.aY(0,176,0,1/0)
D.b8p=new B.aY(0,1/0,0,260)
D.b8H=new B.aY(90,1/0,0,1/0)
D.bbH=new B.ab(0,A.H,A.dE,A.J,4)
D.dah=w([D.bbH],x.V)
D.b8V=new B.n(A.c,null,null,null,D.dah,null,A.a6)
D.d3D=w([D.f0,A.b5],x.O)
D.cdE=new B.a7(A.a5,A.a9,A.x,D.d3D,null,null)
D.b98=new B.n(null,null,null,null,null,D.cdE,A.a6)
D.b9d=new B.n(A.be,null,null,null,null,null,A.a6)
D.bn7=new B.t(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.drm=w([N.ahX,D.bn7],x.O)
D.ccJ=new B.a7(A.aY,A.b4,A.x,D.drm,null,null)
D.b9u=new B.n(null,null,null,A.mO,null,D.ccJ,A.m)
D.bvx=new B.t(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dEf=w([D.bvx,A.akq],x.O)
D.cbT=new B.a7(A.aY,A.b4,A.x,D.dEf,null,null)
D.b9V=new B.n(null,null,null,A.un,null,D.cbT,A.m)
D.dmX=w([A.aD,A.bD],x.O)
D.ccs=new B.a7(A.a5,A.a9,A.x,D.dmX,null,null)
D.ba0=new B.n(null,null,null,null,null,D.ccs,A.a6)
D.fDs=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYl=new B.C("\ud83c\udf89",null,D.fDs,null,null,null,null,null,null,null,null,null)
D.bfO=new B.cl(A.z,null,null,D.fYl,null)
D.bhg=new B.t(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agZ=new B.t(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bkg=new B.t(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bkk=new B.t(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pr=new B.t(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uy=new B.t(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.aim=new B.t(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmI=new B.t(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.yF=new B.t(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bov=new B.t(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_l=new B.t(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ak_=new B.t(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bte=new B.t(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.btn=new B.t(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akv=new B.t(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buZ=new B.t(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bv5=new B.t(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bwf=new B.t(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a09=new B.t(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bxq=new B.t(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.by5=new B.t(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0n=new B.t(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bz_=new B.t(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.am9=new B.a5n(2,"active")
D.bDj=new B.bf(42e5)
D.bDm=new B.bf(53e4)
D.bDp=new B.bf(58e4)
D.bDt=new B.bf(82e4)
D.bEg=new B.P(0,30,0,30)
D.bEo=new B.P(0,4,0,8)
D.bEs=new B.P(0,8,12,8)
D.bF4=new B.P(12,0,12,88)
D.bFc=new B.P(12,11,12,10)
D.bFD=new B.P(13,10,12,10)
D.bFO=new B.P(14,10,14,2)
D.bG_=new B.P(14,14,10,14)
D.bGy=new B.P(16,12,16,96)
D.bGD=new B.P(16,14,16,8)
D.bGH=new B.P(16,16,16,96)
D.bGI=new B.P(16,18,16,16)
D.bGM=new B.P(16,4,16,10)
D.bHM=new B.P(18,6,18,40)
D.bHZ=new B.P(20,10,20,20)
D.bId=new B.P(20,18,20,18)
D.bIE=new B.P(22,22,22,16)
D.bJi=new B.P(2,0,2,10)
D.bK3=new B.P(4,8,12,4)
D.bKh=new B.P(6,1,6,1)
D.bKj=new B.P(6,4,0,0)
D.bKp=new B.P(6,6,12,4)
D.bKK=new B.P(8,4,12,8)
D.h0Z=new B.C("Activity",null,A.fG,null,null,null,null,null,null,null,null,null)
D.bML=new B.bz(1,A.bd,D.h0Z,null)
D.h9G=new B.C("Game Receipts",null,A.u9,null,null,null,null,null,null,null,null,null)
D.fTb=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.Wu,null,null,null,null,null,null,null,null,null)
D.d00=w([D.h9G,D.fTb],x.p)
D.bA5=new B.fo(A.ah,A.e,A.h,A.D,null,A.p,null,0,D.d00,null)
D.bMO=new B.bz(1,A.bd,D.bA5,null)
D.bRI=new B.a_(58607,"MaterialIcons",!1)
D.a3t=new B.a_(62178,"MaterialIcons",!1)
D.bSz=new B.a_(62410,"MaterialIcons",!1)
D.bTL=new B.a_(63258,"MaterialIcons",!1)
D.bTQ=new B.a_(63304,"MaterialIcons",!1)
D.bTR=new B.a_(63306,"MaterialIcons",!1)
D.bTX=new B.a_(63330,"MaterialIcons",!1)
D.asA=new B.a_(984777,"MaterialIcons",!1)
D.bWt=new B.ae(A.Dh,13,A.ac,null,null,null)
D.bWB=new B.ae(A.jz,13,A.qF,null,null,null)
D.asO=new B.ae(A.m0,null,A.c,null,null,null)
D.bYa=new B.ae(A.Dx,34,A.at,null,null,null)
D.bYH=new B.ae(A.Dk,19,A.c,null,null,null)
D.bYR=new B.ae(A.aqW,24,A.aQ,null,null,null)
D.bZj=new B.ae(A.Dd,28,A.bp,null,null,null)
D.bZP=new B.ae(A.asd,42,A.c,null,null,null)
D.bZZ=new B.ae(A.a4s,30,A.c,null,null,null)
D.c_G=new B.ae(A.fS,null,A.c,null,null,null)
D.c01=new B.ae(A.jz,16,A.c,null,null,null)
D.c0I=new B.ae(A.tx,13,A.c,null,null,null)
D.c0R=new B.ae(A.m0,18,A.c,null,null,null)
D.c1p=new B.ae(A.x1,null,A.dQ,null,null,null)
D.c25=new B.ae(A.nV,28,A.c,null,null,null)
D.c2l=new B.ae(A.oV,22,null,null,null,null)
D.c2K=new B.ae(A.ts,null,null,null,null,null)
D.c2W=new B.ae(A.h8,28,A.c,null,null,null)
D.c2Z=new B.ae(A.cB,null,A.aR,null,null,null)
D.c38=new B.ae(A.a39,14,A.c,null,null,null)
D.c3K=new B.ae(A.I8,36,A.aN,null,null,null)
D.c3R=new B.ae(A.oQ,16,A.c,null,null,null)
D.bnB=new B.t(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c4H=new B.ae(A.ea,9,D.bnB,null,null,null)
D.bUQ=new B.a_(983146,"MaterialIcons",!1)
D.c4Z=new B.ae(D.bUQ,null,A.aQ,null,null,null)
D.c5y=new B.ae(A.v5,28,D.f0,null,null,null)
D.c5D=new B.ae(A.tn,null,A.fe,null,null,null)
D.c5I=new B.ae(A.hG,20,D.f0,null,null,null)
D.bVd=new B.a_(983377,"MaterialIcons",!1)
D.c5S=new B.ae(D.bVd,64,A.c,null,null,null)
D.c6o=new B.ae(A.fT,24,A.c,null,null,null)
D.c7k=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7v=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7K=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7L=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bl9=new B.t(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.boU=new B.t(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bow=new B.t(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.drG=w([D.bl9,D.boU,D.bow],x.O)
D.c9B=new B.a7(A.ay,A.aC,A.x,D.drG,null,null)
D.dxk=w([A.bj,A.b5],x.O)
D.c9X=new B.a7(A.ay,A.aC,A.x,D.dxk,null,null)
D.bn_=new B.t(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.bu2=new B.t(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.daT=w([D.bn_,D.bu2],x.O)
D.ca4=new B.a7(A.ay,A.aC,A.x,D.daT,null,null)
D.dto=w([A.bs,A.a_,A.ed],x.O)
D.caa=new B.a7(A.ay,A.aC,A.x,D.dto,null,null)
D.cad=new B.a7(A.a5,A.a9,A.x,E.aA9,null,null)
D.da5=w([A.fe,A.ce],x.O)
D.auB=new B.a7(A.a5,A.a9,A.x,D.da5,null,null)
D.daA=w([A.fe,A.bD],x.O)
D.auC=new B.a7(A.a5,A.a9,A.x,D.daA,null,null)
D.aEm=w([D.pr,A.aE,A.c3],x.O)
D.cax=new B.a7(A.ay,A.aC,A.x,D.aEm,null,null)
D.bqT=new B.t(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7V=w([D.bqT,A.ahf,A.a_],x.O)
D.caC=new B.a7(A.ay,A.aC,A.x,D.d7V,null,null)
D.b4p=new B.dd(-0.8,-1)
D.b4r=new B.dd(1.2,1)
D.d71=w([A.c,A.eQ,A.he,A.c,A.fv,A.aH,A.oq],x.O)
D.dsH=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.caE=new B.a7(D.b4p,D.b4r,A.x,D.d71,D.dsH,null)
D.btT=new B.t(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bra=new B.t(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.drF=w([D.btT,D.bra],x.O)
D.cb6=new B.a7(A.a5,A.a9,A.x,D.drF,null,null)
D.cbc=new B.a7(A.ay,A.aC,A.x,A.SY,null,null)
D.dlS=w([A.a0d,A.yH],x.O)
D.cbe=new B.a7(A.a5,A.a9,A.x,D.dlS,null,null)
D.dqn=w([A.hq,A.h_],x.O)
D.auI=new B.a7(A.a5,A.a9,A.x,D.dqn,null,null)
D.dwS=w([A.be,A.bQ],x.O)
D.auJ=new B.a7(A.a5,A.a9,A.x,D.dwS,null,null)
D.cS4=w([A.dh,A.fr],x.O)
D.cbV=new B.a7(A.ay,A.aC,A.x,D.cS4,null,null)
D.d5W=w([A.c,A.bb],x.O)
D.cc4=new B.a7(A.a5,A.a9,A.x,D.d5W,null,null)
D.ajr=new B.t(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bk0=new B.t(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dik=w([D.ajr,A.jO,A.rO,A.aE,D.bk0],x.O)
D.ceK=w([0,0.28,0.55,0.82,1],x.n)
D.cc6=new B.a7(A.ay,A.aC,A.x,D.dik,D.ceK,null)
D.ccd=new B.a7(A.a5,A.a9,A.x,A.TF,null,null)
D.cce=new B.a7(A.a5,A.a9,A.x,E.aCH,null,null)
D.ccj=new B.a7(A.a5,A.a9,A.x,D.aEm,null,null)
D.dc9=w([A.bD,A.fe],x.O)
D.ccy=new B.a7(A.a5,A.a9,A.x,D.dc9,null,null)
D.dBl=w([A.aD,A.bD,A.bb],x.O)
D.ccA=new B.a7(A.a5,A.a9,A.x,D.dBl,null,null)
D.dm2=w([A.at,A.bL,A.fP],x.O)
D.ccE=new B.a7(A.a5,A.a9,A.x,D.dm2,null,null)
D.dB4=w([A.bs,A.aL,A.bP,A.bn,A.aS,A.cA,A.an],x.O)
D.dgl=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.ccI=new B.a7(A.ay,A.aC,A.x,D.dB4,D.dgl,null)
D.ccS=new B.a7(A.ay,A.aC,A.x,A.a5U,null,null)
D.dmF=w([K.yE,A.e6],x.O)
D.cd1=new B.a7(A.a5,A.a9,A.x,D.dmF,null,null)
D.duW=w([D.akv,D.aim,A.a_],x.O)
D.cda=new B.a7(A.ay,A.aC,A.x,D.duW,null,null)
D.bwL=new B.t(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d6w=w([A.ff,A.hq,D.bwL],x.O)
D.cdG=new B.a7(A.ay,A.aC,A.x,D.d6w,null,null)
D.dcK=w([D.pr,A.aE],x.O)
D.cdI=new B.a7(A.ay,A.aC,A.x,D.dcK,null,null)
D.ce9=w([F.zU,A.nV,A.jz,A.hH,A.jT,A.l7,A.kl,A.r7,A.nU,A.eY,A.lw,A.zK,A.I7],x.A)
D.chF=w([10,50,100,200],x.t)
D.crt=w([1,3,5,7],x.t)
D.cwu=w([25,50,100,250],x.t)
D.bUK=new B.a_(983104,"MaterialIcons",!1)
D.cFf=w([A.nV,A.ms,A.oV,A.lZ,A.hs,A.vf,D.bUK,A.a4n],x.A)
D.cKH=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cXd=w([0,0.22,0.5,0.78,1],x.n)
D.d0a=w([8,13,19],x.n)
D.a6d=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h_Y=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eFt=new B.jF("questions",!0,48,null,D.h_Y,null,x.d)
D.fQh=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eFA=new B.jF("edit",!0,48,null,D.fQh,null,x.d)
D.h8b=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eFs=new B.jF("delete",!0,48,null,D.h8b,null,x.d)
D.d60=w([D.eFt,D.eFA,D.eFs],B.aE("U<t2<q>>"))
D.daN=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.db2=w([A.bU,A.fn],x.O)
D.a9g=new C.lU("text","",null,null)
D.dcl=w([D.a9g],x.a)
D.ddV=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_M=new B.afG(A.kI,"Home")
D.eRj=new B.afG(A.oT,"Growth")
D.eW7=new B.afG(A.jz,"Wallet")
D.dgC=w([D.f_M,D.eRj,D.eW7],B.aE("U<+icon,label(a_,q)>"))
D.dh3=w([4,0,2,6,8,1,3,5,7],x.t)
D.dhb=w([A.c,A.cg,A.cA],x.O)
D.e2L=new C.rZ("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2O=new C.rZ("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2M=new C.rZ("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e2G=new C.rZ("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e2H=new C.rZ("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2P=new C.rZ("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6K=w([D.e2L,D.e2O,D.e2M,D.e2G,D.e2H,D.e2P],x.F)
D.a6O=w([A.aA,A.bj,A.d9,A.at],x.O)
D.bnQ=new B.t(1,1,0.8980392156862745,0.4,A.q)
D.dmM=w([A.Zn,D.bnQ,A.rO,A.iB,A.jO],x.O)
D.a6V=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.T7=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cFu=w([3,4,5],x.t)
D.cSI=w([6,7,8],x.t)
D.ceg=w([0,3,6],x.t)
D.cry=w([1,4,7],x.t)
D.cz0=w([2,5,8],x.t)
D.cel=w([0,4,8],x.t)
D.cyY=w([2,4,6],x.t)
D.dpl=w([I.av9,D.cFu,D.cSI,D.ceg,D.cry,D.cz0,D.cel,D.cyY],x.B)
D.aMC=new C.JL(0,"abab")
D.e2E=new C.JL(1,"aaaBbb")
D.aMD=new C.JL(2,"aabb")
D.dqs=w([D.aMC,D.e2E,D.aMD],B.aE("U<JL>"))
D.dqK=w([],x.a)
D.aDz=w([],x.v)
D.duO=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Tr=w([1,2,3,-1,-2],x.t)
D.dE0=w([A.iD,A.aD],x.O)
D.hGp=new C.rg("dice","Dice Roll","Roll for cash & prizes!",A.nR,D.dE0)
D.hGm=new C.rg("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.vc,A.aCb)
D.dxK=w([A.dr,A.bp],x.O)
D.hGk=new C.rg("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a49,D.dxK)
D.dDr=w([A.dS,A.ny],x.O)
D.hGq=new C.rg("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a4n,D.dDr)
D.crd=w([A.jM,A.t1],x.O)
D.hGn=new C.rg("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Q8,D.crd)
D.duN=w([A.lP,D.a_l],x.O)
D.hGl=new C.rg("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ib,D.duN)
D.hGo=new C.rg("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nZ)
D.dwR=w([D.hGp,D.hGm,D.hGk,D.hGq,D.hGn,D.hGl,D.hGo],B.aE("U<rg>"))
D.dyo=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsY=new B.t(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bsP=new B.t(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.alp=new B.t(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dze=w([D.bsY,D.bsP,D.alp],x.O)
D.bvq=new B.t(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dzg=w([A.ahe,D.bvq,D.alp],x.O)
D.dzV=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEK=w([D.pr,A.c,D.f0,A.c4,A.b0,A.aE],x.O)
D.e2J=new C.rZ("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2I=new C.rZ("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e2F=new C.rZ("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2N=new C.rZ("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2Q=new C.rZ("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2K=new C.rZ("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7F=w([D.e2J,D.e2I,D.e2F,D.e2N,D.e2Q,D.e2K],x.F)
D.dDF=w([A.ce,A.t1],x.O)
D.erT={checkers_deluxe:0,tic_tac_go:1}
D.aKA=new B.bq(D.erT,["Checkers Deluxe","Tic Tac Go"],B.aE("bq<q,q>"))
D.eqW={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKL=new B.bq(D.eqW,[1,2,3,4,5,6,7],B.aE("bq<q,H>"))
D.dWa=new C.a89(null)
D.dZJ=new C.lU("signature","NGMY Support Team",null,null)
D.dZK=new C.lU("divider","",null,null)
D.Ur=new C.WY(!1,!1,!1,!1)
D.Ut=new C.OU(!1,!1,!1,!1)
D.e_S=new C.OU(!0,!0,!1,!1)
D.EA=new C.at3(0,"swahili")
D.aMB=new C.at3(1,"english")
D.EB=new C.at3(2,"mix")
D.doJ=w([A.iQ,A.ih,A.d6],x.O)
D.bTv=new B.a_(63118,"MaterialIcons",!1)
D.e3R=new C.pD(D.doJ,A.h1,A.at,"BACKGAMMON","\ud83c\udfb2",D.bTv)
D.bVB=new B.a_(983637,"MaterialIcons",!1)
D.e3S=new C.pD(A.aF_,A.bj,A.er,"EURO WHEEL","\ud83c\udfa1",D.bVB)
D.dyJ=w([A.a_,A.aL,A.bz],x.O)
D.e3T=new C.pD(D.dyJ,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.Q8)
D.dac=w([A.dh,A.bp,A.dX],x.O)
D.e3U=new C.pD(D.dac,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a4B)
D.dt2=w([A.dz,A.fr,A.t1],x.O)
D.e3V=new C.pD(D.dt2,A.ww,A.ce,"PUNTO BANCO","\ud83d\udc8e",A.ms)
D.cS6=w([A.op,A.iz,A.mf],x.O)
D.e3W=new C.pD(D.cS6,A.jK,A.kD,"DOMINOES","\ud83c\udc53",A.ase)
D.dzt=w([A.yP,A.uC,A.hO],x.O)
D.e3X=new C.pD(D.dzt,A.Cx,A.hz,"WAR","\u2694\ufe0f",A.a3O)
D.e3Y=new C.pD(A.aET,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nR)
D.dca=w([A.kB,A.aD,A.dS],x.O)
D.e3Z=new C.pD(D.dca,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nR)
D.drZ=w([A.k2,A.lL,A.bD],x.O)
D.e4_=new C.pD(D.drZ,A.qr,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zD)
D.d3B=w([A.ih,A.e6,A.at],x.O)
D.bSW=new B.a_(62865,"MaterialIcons",!1)
D.e40=new C.pD(D.d3B,A.uI,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSW)
D.e41=new C.pD(A.a7C,A.bn,A.bj,"HOLD'EM","\u2660\ufe0f",A.jz)
D.dzU=w([A.ff,A.h_,A.b5],x.O)
D.bS3=new B.a_(61234,"MaterialIcons",!1)
D.e42=new C.pD(D.dzU,A.mg,A.aV,"CRAPS","\ud83c\udfb2",D.bS3)
D.d9n=w([A.fn,A.jr,A.bU],x.O)
D.e43=new C.pD(D.d9n,A.bL,A.bb,"PLINKO","\ud83d\udc8e",A.Qh)
D.bVl=new B.a_(983492,"MaterialIcons",!1)
D.e44=new C.pD(A.a7C,A.ew,A.bj,"SNOOKER","\ud83c\udfb1",D.bVl)
D.dxe=w([A.ff,A.h_,A.aV],x.O)
D.e45=new C.pD(D.dxe,A.uD,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hG)
D.dxC=w([A.ed,A.ep,A.bj],x.O)
D.bTW=new B.a_(63324,"MaterialIcons",!1)
D.e46=new C.pD(D.dxC,A.wy,A.be,"KLONDIKE","\ud83c\udccf",D.bTW)
D.dpt=w([A.bA,A.bs,A.a_],x.O)
D.e47=new C.pD(D.dpt,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Iq)
D.rf=new C.FC(0,"continueGame")
D.rg=new C.FC(1,"youWin")
D.JQ=new C.FC(2,"youLose")
D.UC=new C.FC(3,"draw")
D.aMQ=new C.XD(0,"found")
D.emV=new C.XD(1,"foundLive")
D.a9x=new C.XD(2,"notFound")
D.aMR=new C.XD(3,"wrongAccount")
D.evk=new B.r(4,12)
D.eyO=new B.D(A.z9,A.ur,null)
D.bJH=new B.P(4,0,0,3)
D.fAA=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcP=new B.C("NGMY Helper",null,D.fAA,null,null,null,null,null,null,null,null,null)
D.ez4=new B.D(D.bJH,D.hcP,null)
D.bTP=new B.a_(63284,"MaterialIcons",!1)
D.bZ6=new B.ae(D.bTP,18,A.pu,null,null,null)
D.fFx=new B.F(!0,A.pu,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUn=new B.C("Continue",null,D.fFx,null,null,null,null,null,null,null,null,null)
D.drg=w([D.bZ6,A.bm,D.fUn],x.p)
D.fjW=new B.c6(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.drg,null)
D.ez8=new B.D(A.hW,D.fjW,null)
D.ezp=new B.D(A.bT,A.ur,null)
D.bsz=new B.t(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dnr=w([A.hq,A.h_,A.cX,D.bsz],x.O)
D.ccL=new B.a7(A.ay,A.aC,A.x,D.dnr,A.DX,null)
D.ba3=new B.n(null,null,null,null,null,D.ccL,A.m)
D.bBl=new B.bP(D.ba3,A.bl,null,null)
D.eFW=new B.cL(0,0,0,0,null,null,D.bBl,null)
D.c_Y=new B.ae(A.x_,11,A.c,null,null,null)
D.eG_=new B.cL(10,12,null,null,null,null,D.c_Y,null)
D.cX3=w([A.hQ,A.ed,A.lq],x.O)
D.eGD=new B.bT(A.BG,1.1,A.x,null,0,D.cX3,null,null)
D.bug=new B.t(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bnj=new B.t(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bpx=new B.t(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkU=w([D.bug,D.bnj,D.bpx],x.O)
D.eGL=new B.bT(A.aeO,1.05,A.x,null,0,D.dkU,null,null)
D.eH9=new B.bT(A.z,0.5,A.x,null,0,E.aBL,null,null)
D.fhQ=new B.a3(-18,0,18,1)
D.fin=new B.a3(-3,-5,3,5)
D.bZy=new B.ae(A.eb,16,D.f0,null,null,null)
D.aYy=new B.F(!0,D.f0,null,null,null,null,12,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haj=new B.C("Screenshot added \xb7 tap to change",null,D.aYy,null,null,null,null,null,null,null,null,null)
D.d74=w([D.bZy,A.bm,D.haj],x.p)
D.fji=new B.c6(A.aM,A.b9,A.h,A.l,null,A.p,null,0,D.d74,null)
D.c2G=new B.ae(A.nT,15,D.f0,null,null,null)
D.h85=new B.C("Refresh",null,D.aYy,null,null,null,null,null,null,null,null,null)
D.d9y=w([D.c2G,A.db,D.h85],x.p)
D.fjk=new B.c6(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d9y,null)
D.erf={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.flx=new B.dj(D.erf,3,x.M)
D.er3={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.flJ=new B.dj(D.er3,36,x.M)
D.er6={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.flX=new B.dj(D.er6,6,x.M)
D.esF={memory:0,typing:1,scramble:2,pattern:3}
D.nh=new B.dj(D.esF,4,x.M)
D.foE=new B.au(276,276)
D.fpm=new B.a5(13,null,null,null)
D.bgw=new B.fm(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fpy=new B.a5(26,26,D.bgw,null)
D.fqr=new B.hO(8,0,0,1,null)
D.hbw=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new B.b0(D.hbw,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPj=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ftv=new B.b0(D.fPj,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fQt=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ftB=new B.b0(D.fQt,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h8g=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fuf=new B.b0(D.h8g,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.btp=new B.t(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fEp=new B.F(!0,D.btp,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new B.es("$",null,null,A.cM,null,null,null,null,null,null,D.fEp)
D.fxG=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.F(!0,A.bs,null,null,null,null,9,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new B.F(!0,A.a_,null,null,null,null,9,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyJ=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyS=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz0=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new B.F(!0,D.f0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new B.F(!0,A.bL,null,null,null,null,14,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new B.F(!0,A.Cq,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXg=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.F(!0,A.bL,null,null,null,null,11.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDe=new B.F(!0,A.ac,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fDy=new B.F(!0,A.ac,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fFF=new B.F(!0,A.jj,null,null,null,null,10.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blz=new B.t(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fFX=new B.F(!0,D.blz,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new B.F(!0,A.aA,null,null,null,null,17,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHS=new B.F(!0,D.ajr,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXZ=new B.F(!0,A.Cq,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIc=new B.F(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fId=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIw=new B.F(!0,A.Cq,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xR=new B.F(!0,A.c,null,null,null,null,13,A.G,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqC=new B.t(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fIL=new B.F(!0,D.bqC,null,null,null,null,12,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJm=new B.F(!0,A.U5,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKt=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKA=new B.F(!0,A.iE,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKE=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL9=new B.F(!0,A.a_,null,null,null,null,10,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLd=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMa=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMB=new B.F(!0,A.ac,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMT=new B.F(!0,A.be,null,null,null,null,14,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNn=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNr=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOt=new B.C("Value per pair",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fOv=new B.C("Restore now",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fP4=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPf=new B.C("AVAILABLE PLANS",null,D.aXJ,null,null,null,null,null,null,null,null,null)
D.fPh=new B.C("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fPS=new B.C("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fB7=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQB=new B.C("PLAN VALUE",null,D.fB7,null,null,null,null,null,null,null,null,null)
D.fQE=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fR0=new B.C("Deposit",null,A.WP,null,null,null,null,null,null,null,null,null)
D.fLv=new B.F(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS3=new B.C("JACKPOT SLOTS",null,D.fLv,null,null,null,null,null,null,null,null,null)
D.fSm=new B.C("Restore",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fBd=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSq=new B.C("YOUR NUMBER",null,D.fBd,null,null,null,null,null,null,null,null,null)
D.fSH=new B.C("SPIN REELS",null,E.acr,null,null,null,null,null,null,null,null,null)
D.fTa=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fTI=new B.C("Perfect Score Profit",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fUl=new B.C("Join room",null,A.iM,null,null,null,null,null,null,null,null,null)
D.fWy=new B.C("Add payment screenshot",null,A.j7,null,null,null,null,null,null,null,null,null)
D.fWO=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXf=new B.C("INVITE A PLAYER",null,D.fKI,null,null,null,null,null,null,null,null,null)
D.fJL=new B.F(!0,A.Zn,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXK=new B.C("NGMY GOLD LEADER",null,D.fJL,null,null,null,null,null,null,null,null,null)
D.fYg=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fYG=new B.C("Invest & Play",null,A.m5,null,null,null,null,null,null,null,null,null)
D.aXE=new B.F(!0,D.yF,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ7=new B.C("VALID THRU",null,D.aXE,null,null,null,null,null,null,null,null,null)
D.aYl=new B.F(!0,A.aF,null,null,null,null,11,A.G,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZf=new B.C("DEALER",null,D.aYl,null,null,null,null,null,null,null,null,null)
D.fZm=new B.C("CARDHOLDER",null,D.aXE,null,null,null,null,null,null,null,null,null)
D.fJc=new B.F(!0,A.bn,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_6=new B.C("NGMY PLATINUM",null,D.fJc,null,null,null,null,null,null,null,null,null)
D.fMI=new B.F(!0,A.qF,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_T=new B.C("EARNED SO FAR",null,D.fMI,null,null,null,null,null,null,null,null,null)
D.h0s=new B.C("VS",null,A.acs,null,null,null,null,null,null,null,null,null)
D.h0T=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h1f=new B.C("One day left",null,A.aci,null,A.K,null,null,null,null,null,null,null)
D.h1B=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.Fg,null,null,null,null,null,null,null,null,null)
D.h1C=new B.C("Multiplayer invite",null,A.iM,null,null,null,null,null,null,null,null,null)
D.h1O=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fzz=new B.F(!0,A.U5,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1U=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fzz,null,null,null,null,null,null,null,null,null)
D.h24=new B.C("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.fys=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2l=new B.C("Investment Required",null,D.fys,null,A.K,null,null,null,null,null,null,null)
D.h3S=new B.C("Network Status",null,A.aWU,null,null,null,null,null,null,null,null,null)
D.aX0=new B.F(!0,A.ac,null,null,null,null,12.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4v=new B.C("Their account email",null,D.aX0,null,null,null,null,null,null,null,null,null)
D.h4Q=new B.C("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4R=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h56=new B.C("ACTIVE ASSET",null,D.aXJ,null,null,null,null,null,null,null,null,null)
D.h5v=new B.C("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5A=new B.C("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h60=new B.C("YOUR HAND",null,D.aYl,null,null,null,null,null,null,null,null,null)
D.h6B=new B.C("NGMY Music Studio",null,A.jX,null,null,null,null,null,null,null,null,null)
D.h6E=new B.C("I sent it \u2014 submit deposit",null,A.m5,null,null,null,null,null,null,null,null,null)
D.h7t=new B.C("Back",null,A.Be,null,null,null,null,null,null,null,null,null)
D.fNF=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7B=new B.C("DEAL / PLAY ROUND",null,D.fNF,null,null,null,null,null,null,null,null,null)
D.h7O=new B.C("Got it \u2014 keep chatting",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h7Y=new B.C("3 Messages Left",null,A.aYb,null,null,null,null,null,null,null,null,null)
D.h8v=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h8E=new B.C("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h90=new B.C("How many games?",null,D.aX0,null,null,null,null,null,null,null,null,null)
D.fIE=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9c=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fIE,null,A.K,null,null,null,null,null,null,null)
D.haN=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hb1=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fO6=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcH=new B.C("NGMY  WALLET",null,D.fO6,null,null,null,null,null,null,null,null,null)
D.hcI=new B.C("Select Your Bet",null,A.hb,null,null,null,null,null,null,null,null,null)
D.hC6=new B.bl("history",x.W)
D.hCt=new B.bl("ngmy_local_home",x.W)
D.hCu=new B.bl("ngmy_local_invest",x.W)
D.hCv=new B.bl("ngmy_local_wallet",x.W)
D.hG1=new C.a_R(null)
D.b2o=new C.aDN(0,"grid")
D.b2p=new C.aDN(1,"questions")
D.hH5=new C.aDN(2,"answer")
D.hJC=new C.a0K(null)})();(function staticFields(){$.hdq=B.aR(x.N)
$.hEY=B.S(x.N,x.k)
$.hjk=null
$.hj8=B.S(x.N,B.aE("KC"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iEO","bHZ",()=>C.im9())
w($,"iEA","hNZ",()=>{var v=null,u=B.fs(v,A.cw,v,v,v,D.fxq,A.a7,A.bW,v,A.dD,A.bX)
u.e5()
return u})})()};
(a=>{a["xnCJq79qaSO4H7m8lE87VG8ZNVA="]=a.current})($__dart_deferred_initializers__);