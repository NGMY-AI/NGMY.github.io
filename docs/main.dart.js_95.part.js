((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,L,E,I,R,M,S,T,N,O,U,P,V,W,X,F,Q,Y,C={
hzr(d,e,f){var w=null,v=f.k("H5<0>"),u=new B.H5(w,w,w,w,v)
$.w4()
u.d=new C.cCI(new B.vz(),e,u,f,d)
return new B.ia(u,v.k("ia<1>"))},
cCI:function cCI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCJ:function cCJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCF:function cCF(d){this.a=d},
cCG:function cCG(d,e){this.a=d
this.b=e},
cCH:function cCH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCE:function cCE(d,e,f){this.a=d
this.b=e
this.c=f},
bvk:function bvk(d){this.a=d},
hzq(d,e,f,g){return new C.aye(d,e,f,null,g.k("aye<0>"))},
Gi:function Gi(){},
aKW:function aKW(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fh2:function fh2(d){this.a=d},
fh1:function fh1(d,e){this.a=d
this.b=e},
fh4:function fh4(d){this.a=d},
fh_:function fh_(d,e,f){this.a=d
this.b=e
this.c=f},
fh3:function fh3(d){this.a=d},
fh0:function fh0(d){this.a=d},
aye:function aye(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
irk(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aY(w,1))
return w},
hKs(d){var w=C.irk(d)
if(w.length===0)return""
return"$"+w},
fQS(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fQS=B.e(function(f,g){if(f===1)return B.f(g,v)
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
break}if(q.d!==A.hf){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cV(m,"game payout:",0))if(!B.cV(m,"game partial:",0)){if(!B.cV(m,"multiplayer payout:",0))o=B.cV(m,"dice",0)&&q.e===A.fE
else o=l
l=o}if(!l){w=4
break}if(B.cV(m,"game payout:",0))k=A.a.i(A.a.aY(n,A.a.cd(m,"game payout:")+12))
else if(B.cV(m,"game partial:",0)){k=A.a.i(A.a.aY(n,A.a.cd(m,"game partial:")+13))
j=A.a.cd(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else if(B.cV(m,"multiplayer payout:",0)){k=A.a.i(A.a.aY(n,A.a.cd(m,"multiplayer payout:")+19))
j=A.a.cd(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else k=B.cV(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vi(q.c,p,n,d,o,null,q.a,!0),$async$fQS)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fQS,v)},
iwi(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ism(d,e,f){return A.d.aS(e,new C.fUB(f,A.a.i(d.toLowerCase())))},
fUs(d){var w
C.hvy(d)
w=d.c7
return B.bs(new B.N(w,new C.fUt(),B.T(w).k("N<1,@>")),!0,x.N)},
ihV(d,e,f){var w,v,u,t,s,r,q=null,p=A.bZ,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ej().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a4(u).k("b8<2>")).gH(0)
u=$.la()
s=u.d
t=s==null?u.gho():s}w=A.i.cD(f*t)
v=new C.fAH(f)
if(J.d3(n,"data:image"))try{u=B.fY(A.cE.aK(A.d.gal(J.lP(n,","))),A.z,w,new C.fAE(v),A.hb,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d3(n,"supabase://"))return new B.le(B.a3l(n),new C.fAF(f,e,p,w,v),q,q,x.gh)
return B.kJ(n,A.z,w,new C.fAG(v),A.hb,p,!0,e,q,q,f)},
hjr(d,e){return new B.a5(e,e,B.i6(C.ihV(d,e,e),A.aq),null)},
i9X(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dxL,x.gm)
for(w=0;w<36;++w){v=A.Ed[w]
s.push(new C.ri(v.a,v.b,v.c,v.e,v.f))}return new C.aD_(u,B.S(t,t),s)},
fUB:function fUB(d,e){this.a=d
this.b=e},
fUt:function fUt(){},
fAH:function fAH(d){this.a=d},
fAE:function fAE(d){this.a=d},
fAF:function fAF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAD:function fAD(d){this.a=d},
fAG:function fAG(d){this.a=d},
anm:function anm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ri:function ri(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aD_:function aD_(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dmS:function dmS(d,e){this.a=d
this.b=e},
dn2:function dn2(d,e){this.a=d
this.b=e},
dnk:function dnk(){},
dnl:function dnl(d){this.a=d},
dna:function dna(d,e){this.a=d
this.b=e},
dn9:function dn9(){},
dnb:function dnb(d){this.a=d},
dn8:function dn8(){},
dnd:function dnd(d){this.a=d},
dnc:function dnc(){},
dn5:function dn5(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn4:function dn4(d){this.a=d},
dn6:function dn6(d){this.a=d},
dn7:function dn7(d){this.a=d},
dmY:function dmY(d,e){this.a=d
this.b=e},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dmW:function dmW(d){this.a=d},
dmX:function dmX(d){this.a=d},
dn_:function dn_(d){this.a=d},
dn0:function dn0(d){this.a=d},
dn1:function dn1(d,e,f){this.a=d
this.b=e
this.c=f},
dmV:function dmV(d,e){this.a=d
this.b=e},
dmU:function dmU(d,e){this.a=d
this.b=e},
dmT:function dmT(d,e){this.a=d
this.b=e},
dnj:function dnj(d){this.a=d},
dnh:function dnh(d,e,f){this.a=d
this.b=e
this.c=f},
dng:function dng(d,e,f){this.a=d
this.b=e
this.c=f},
dnf:function dnf(d,e){this.a=d
this.b=e},
dne:function dne(){},
dni:function dni(d){this.a=d},
aFR:function aFR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bn5:function bn5(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e0w:function e0w(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0u:function e0u(){},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0z:function e0z(d){this.a=d},
anl:function anl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCZ:function aCZ(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dmM:function dmM(d){this.a=d},
dmP:function dmP(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmO:function dmO(d,e){this.a=d
this.b=e},
dmN:function dmN(d,e){this.a=d
this.b=e},
ann:function ann(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD0:function aD0(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bG=_.bi=_.b0=_.b3=null
_.aZ=!1
_.bw=_.bn=null
_.c7=!1
_.bT=_.cT=""
_.c=_.a=_.bH=null},
doE:function doE(d,e){this.a=d
this.b=e},
doH:function doH(d){this.a=d},
doI:function doI(d){this.a=d},
doJ:function doJ(d){this.a=d},
doK:function doK(d){this.a=d},
doL:function doL(d){this.a=d},
doF:function doF(d){this.a=d},
doG:function doG(d){this.a=d},
dnU:function dnU(d,e){this.a=d
this.b=e},
dnV:function dnV(d,e){this.a=d
this.b=e},
don:function don(d){this.a=d},
doo:function doo(){},
do9:function do9(d,e,f){this.a=d
this.b=e
this.c=f},
doa:function doa(d){this.a=d},
dob:function dob(d,e,f){this.a=d
this.b=e
this.c=f},
doc:function doc(d,e){this.a=d
this.b=e},
dod:function dod(){},
dnm:function dnm(d){this.a=d},
dnT:function dnT(d,e){this.a=d
this.b=e},
dop:function dop(){},
doy:function doy(){},
dom:function dom(d){this.a=d},
dol:function dol(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnS:function dnS(){},
dot:function dot(){},
dou:function dou(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dov:function dov(d,e,f){this.a=d
this.b=e
this.c=f},
dnn:function dnn(){},
dno:function dno(d){this.a=d},
dnp:function dnp(){},
do2:function do2(d,e){this.a=d
this.b=e},
do3:function do3(d,e,f){this.a=d
this.b=e
this.c=f},
do4:function do4(d){this.a=d},
do1:function do1(d){this.a=d},
doe:function doe(d){this.a=d},
dof:function dof(){},
dog:function dog(d){this.a=d},
doh:function doh(){},
doi:function doi(d){this.a=d},
doj:function doj(){},
dos:function dos(d,e,f){this.a=d
this.b=e
this.c=f},
do5:function do5(d){this.a=d},
do6:function do6(d,e){this.a=d
this.b=e},
do7:function do7(d){this.a=d},
do8:function do8(d){this.a=d},
dow:function dow(d){this.a=d},
dox:function dox(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d,e){this.a=d
this.b=e},
dns:function dns(d){this.a=d},
dnt:function dnt(d){this.a=d},
doq:function doq(d,e){this.a=d
this.b=e},
dor:function dor(d){this.a=d},
do0:function do0(d,e){this.a=d
this.b=e},
dok:function dok(d,e,f){this.a=d
this.b=e
this.c=f},
dnZ:function dnZ(d,e,f){this.a=d
this.b=e
this.c=f},
do_:function do_(){},
doz:function doz(d){this.a=d},
doA:function doA(d){this.a=d},
doB:function doB(d){this.a=d},
doD:function doD(d){this.a=d},
doC:function doC(){},
dnY:function dnY(d,e,f){this.a=d
this.b=e
this.c=f},
dnX:function dnX(d,e){this.a=d
this.b=e},
dnW:function dnW(d,e){this.a=d
this.b=e},
dnG:function dnG(d){this.a=d},
dnF:function dnF(d,e){this.a=d
this.b=e},
dnH:function dnH(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnI:function dnI(d){this.a=d},
dnD:function dnD(){},
dnJ:function dnJ(d){this.a=d},
dnB:function dnB(){},
dnC:function dnC(d){this.a=d},
dnK:function dnK(d){this.a=d},
dnA:function dnA(d,e){this.a=d
this.b=e},
dnL:function dnL(d){this.a=d},
dnz:function dnz(d,e){this.a=d
this.b=e},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnM:function dnM(d){this.a=d},
dny:function dny(d,e){this.a=d
this.b=e},
dnN:function dnN(d){this.a=d},
dnx:function dnx(d){this.a=d},
dnu:function dnu(d,e){this.a=d
this.b=e},
dnO:function dnO(d,e,f){this.a=d
this.b=e
this.c=f},
dnP:function dnP(d){this.a=d},
dnw:function dnw(){},
dnQ:function dnQ(d){this.a=d},
ao9:function ao9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bk8:function bk8(){this.c=this.a=null},
dsd:function dsd(d,e){this.a=d
this.b=e},
dsc:function dsc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
akc:function akc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
aA2:function aA2(d,e,f,g,h,i,j,k,l,m){var _=this
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
cOJ:function cOJ(d){this.a=d},
cO3:function cO3(d,e){this.a=d
this.b=e},
cNU:function cNU(d){this.a=d},
cNV:function cNV(d){this.a=d},
cOd:function cOd(d){this.a=d},
cOa:function cOa(d){this.a=d},
cOb:function cOb(d){this.a=d},
cOc:function cOc(d,e,f){this.a=d
this.b=e
this.c=f},
cO5:function cO5(d){this.a=d},
cO4:function cO4(d){this.a=d},
cNW:function cNW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cO8:function cO8(d){this.a=d},
cO7:function cO7(d){this.a=d},
cO6:function cO6(d,e){this.a=d
this.b=e},
cOw:function cOw(d){this.a=d},
cOq:function cOq(d){this.a=d},
cOt:function cOt(d){this.a=d},
cOs:function cOs(){},
cOp:function cOp(d){this.a=d},
cOr:function cOr(d,e){this.a=d
this.b=e},
cOo:function cOo(){},
cO0:function cO0(){},
cO1:function cO1(d,e){this.a=d
this.b=e},
cO2:function cO2(d){this.a=d},
cNZ:function cNZ(d,e){this.a=d
this.b=e},
cO_:function cO_(d,e){this.a=d
this.b=e},
cOg:function cOg(d,e){this.a=d
this.b=e},
cO9:function cO9(d){this.a=d},
cOh:function cOh(d){this.a=d},
cOi:function cOi(d,e){this.a=d
this.b=e},
cOj:function cOj(d,e){this.a=d
this.b=e},
cOk:function cOk(d,e){this.a=d
this.b=e},
cOl:function cOl(d,e,f){this.a=d
this.b=e
this.c=f},
cOm:function cOm(d){this.a=d},
cOn:function cOn(d){this.a=d},
cOe:function cOe(d,e){this.a=d
this.b=e},
cOv:function cOv(d){this.a=d},
cOf:function cOf(d,e){this.a=d
this.b=e},
cOI:function cOI(d){this.a=d},
cOB:function cOB(d){this.a=d},
cOE:function cOE(d){this.a=d},
cOy:function cOy(d,e){this.a=d
this.b=e},
cOC:function cOC(){},
cOD:function cOD(d,e){this.a=d
this.b=e},
cOz:function cOz(d){this.a=d},
cOA:function cOA(d){this.a=d},
cOG:function cOG(){},
cOF:function cOF(d){this.a=d},
cOx:function cOx(d,e){this.a=d
this.b=e},
cOH:function cOH(d){this.a=d},
cNX:function cNX(d){this.a=d},
cOu:function cOu(d,e){this.a=d
this.b=e},
cNY:function cNY(d,e,f){this.a=d
this.b=e
this.c=f},
aNr:function aNr(){},
aNs:function aNs(){},
aNt:function aNt(){},
aOq:function aOq(){},
c5e(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c5f(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hYe(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b0_(d,e){return C.hYf(d,e)},
hYf(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b0_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3P(d),$async$b0_)
case 3:p=g
if(p!=null){try{t=A.X.aP(0,p.c,null)
if(x.f.b(t)){s=C.htT(B.a1(t,x.N,x.z))
if(s==null){u=new B.H0(D.a9K,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5e(s,e,p.b)){u=new B.H0(D.aN7,null)
w=1
break}r=p.a?D.enX:D.aN6
u=new B.H0(r,s)
w=1
break}}catch(o){}u=new B.H0(D.a9K,null)
w=1
break}s=C.htU(d)
if(s==null){u=new B.H0(D.a9K,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5e(s,e,null)){u=new B.H0(D.aN7,null)
w=1
break}u=new B.H0(D.aN6,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0_,v)},
htU(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d3(w,"\ufeff"))w=J.n2(w,1)
v=!1
if(J.d3(w,"NGMYSNAP1|")){v=!0
w=A.cc.cE(0,A.cE.aK(J.n2(w,10)))}u=A.X.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hYd(t):C.htT(t)
return s}catch(r){return null}},
hYd(d){var w,v,u,t,s,r,q,p,o,n=new C.c5b(),m=new C.c5a(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w8(v,u,t,s,r,A.i.M(q==null?0:q))}else p=null
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
return new B.a7D("","",v,u,t,s,r,q,n,m,o,p,A.iM,new B.V(Date.now(),0,!1),-1)},
htT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c5d()
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
n=new B.w8(t,s,r,q,p,A.i.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.B(new B.ee(J.ba(m,new C.c5c(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7D(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hdC(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hdC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c59(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hw(B.L3(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hdC,v)},
XK:function XK(d,e){this.a=d
this.b=e},
c5b:function c5b(){},
c5a:function c5a(){},
c5d:function c5d(){},
c5c:function c5c(d){this.a=d},
il3(d){return B.cg(null,A.b6,!0,null,new C.fFl(),d,null,!0,!0,x.N)},
ilg(d,e,f,g){return B.cg(null,A.b6,!0,null,new C.fGy(g,f,e),d,null,!0,!0,x.y)},
apI:function apI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF6:function aF6(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dIQ:function dIQ(d,e){this.a=d
this.b=e},
dIR:function dIR(d){this.a=d},
dIH:function dIH(d,e){this.a=d
this.b=e},
dIF:function dIF(d){this.a=d},
dIP:function dIP(d){this.a=d},
dIO:function dIO(d,e){this.a=d
this.b=e},
dIE:function dIE(d,e){this.a=d
this.b=e},
dID:function dID(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIG:function dIG(d){this.a=d},
dIN:function dIN(){},
dIL:function dIL(d){this.a=d},
dIM:function dIM(d,e){this.a=d
this.b=e},
dII:function dII(){},
dIJ:function dIJ(d,e){this.a=d
this.b=e},
dIK:function dIK(d,e){this.a=d
this.b=e},
dIS:function dIS(d){this.a=d},
a2e:function a2e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvR:function bvR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0R:function a0R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmB:function bmB(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dIW:function dIW(d){this.a=d},
dIT:function dIT(d,e){this.a=d
this.b=e},
dIU:function dIU(d,e){this.a=d
this.b=e},
dIV:function dIV(d){this.a=d},
a0S:function a0S(d){this.a=d},
bmC:function bmC(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dIX:function dIX(d,e){this.a=d
this.b=e},
fFl:function fFl(){},
fGy:function fGy(d,e,f){this.a=d
this.b=e
this.c=f},
agf:function agf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fas:function fas(d){this.a=d},
fat:function fat(d){this.a=d},
Rp:function Rp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_Y:function a_Y(d){this.a=d},
aCi:function aCi(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhF:function dhF(d){this.a=d},
dhC:function dhC(){},
dhD:function dhD(d){this.a=d},
dhE:function dhE(d){this.a=d},
VP(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O8(s),$async$VP)
case 3:t=h
J.c6(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apZ(s,t),$async$VP)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VP,v)},
hYx(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5Y(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fC(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a6(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.v(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5Y:function c5Y(){},
iqI(d){return A.d.dA(A.Ed,new C.fQM(d),new C.fQN()).r},
fQM:function fQM(d){this.a=d},
fQN:function fQN(){},
aqe:function aqe(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmJ:function bmJ(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dPj:function dPj(d){this.a=d},
dPi:function dPi(d){this.a=d},
dPa:function dPa(d,e,f){this.a=d
this.b=e
this.c=f},
dPf:function dPf(d){this.a=d},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d){this.a=d},
dPb:function dPb(d){this.a=d},
dPh:function dPh(d){this.a=d},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d){this.a=d},
hvy(d){var w=B.ce9(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
hvA(d){return B.cg(null,A.v.j(0.82),!0,null,new C.cee(),d,null,!0,!0,x.H)},
a8i:function a8i(d){this.a=d},
cee:function cee(){},
ced:function ced(d){this.a=d},
hJz(){var w=new B.V(Date.now(),0,!1),v=w.bQ(B.du(4-B.lE(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.i.be(A.o.ar(v.bz(B.c0(B.bD(u),B.bL(u),B.bW(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fvr(d,e){var w,v,u,t,s,r,q=B.Hc(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.az(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
ifv(d,e){var w,v,u,t,s,r,q,p=B.Hc(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.i.M(w)
return w==null?0:w}}return 0},
iAm(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.Hc(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ilW(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.Hc(b5),b2=B.cfv(),b3=C.hJz()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a6(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
q=B.aI(r.h(s,a4))
o=q==null?a1:A.i.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.t(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a6(u)
v=B.aI(w.h(u,a4))
v=v==null?a1:A.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aI(w.h(u,"outcome"))
w=w==null?a1:A.i.M(w)
return w==null?1:w}n=new C.fHn()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.t(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fvr(b4,b5)
w=J.a6(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.S(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cd(w,B.a4(w).k("cd<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a6(h)
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
hFQ(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hjN(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ilX(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.Hc(a3),a1=new C.fHo()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a6(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,"+local.ngmy")?A.a.az(p,0,p.length-11):p)!==a0)continue
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
w=J.a6(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fHp(v+r+q>1,l)
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
return C.hjN(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ilV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.i.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hJz():B.cfv()
t=v+"|"+u
s=C.fvr(d,e)
h=J.a6(s)
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
iux(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bmm()
w=C.ilX(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahM(d,a0,w)
return w}v=C.ilW(d,a0)
if(v!=null){if(v===3)++d.f
C.ahM(d,a0,v)
return v}u=C.ilV(d,a0,a1)
if(u!=null)return new C.fY5(d,a1,a0).$1(u)
t=C.fvr(d,a0)
s=J.a6(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.i.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.i.M(s)
if(p==null)p=0
o=new C.fY7(d,a1)
if(C.ifv(d,a0)>0){n=o.$0()
C.iAm(d,a0)
C.ahM(d,a0,n)
return n}if(q>=d.c){n=new C.fY6(d,a1).$0()
C.ahM(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahM(d,a0,n)
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
C.ahM(d,a0,e)
return e},
cfn(d){var w=0,v=B.j(x.y),u
var $async$cfn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cfm(d),$async$cfn)
case 3:if(f){u=!0
w=1
break}u=B.cfm(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfn,v)},
ahM(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fvr(d,e),s=J.a6(t),r=B.aI(s.h(t,v)),q=r==null?null:A.i.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fHn:function fHn(){},
fHo:function fHo(){},
fHp:function fHp(d,e){this.a=d
this.b=e},
fY5:function fY5(d,e,f){this.a=d
this.b=e
this.c=f},
fY7:function fY7(d,e){this.a=d
this.b=e},
fY6:function fY6(d,e){this.a=d
this.b=e},
apH:function apH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmz:function bmz(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dIs:function dIs(d){this.a=d},
dIr:function dIr(d){this.a=d},
dIt:function dIt(d){this.a=d},
dIq:function dIq(d,e){this.a=d
this.b=e},
aNZ:function aNZ(){},
Oz:function Oz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgF:function cgF(){},
cgE:function cgE(){},
as1:function as1(d,e,f){this.c=d
this.d=e
this.a=f},
heC(d,e,f){return B.cg(null,A.v.j(0.88),!0,null,new C.ch6(f,e),d,null,!0,!0,x.H)},
i1k(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iK[u-1]:v)+" "+B.v(t)+", "+B.v(w)}return s},
OH:function OH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ch6:function ch6(d,e){this.a=d
this.b=e},
bnj:function bnj(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
e86:function e86(d,e){this.a=d
this.b=e},
e82:function e82(){},
e83:function e83(){},
e84:function e84(d,e){this.a=d
this.b=e},
e85:function e85(d,e){this.a=d
this.b=e},
aOA:function aOA(){},
hJv(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blU(new C.fT9(w))
w=w.a
return w==null?null:w.c.a},
hJn(d){$.aU.x1$.push(new C.fSX(d))},
hJI(d){var w=$.tt().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hJv(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.e7()},
hJH(d){C.hFY(d,0)},
hFY(d,e){var w,v
if(e>4)return
w=d==null?$.tt().gbl():d
if(w==null||w.c==null)return
v=C.hJv(w)
if(v==="GameCenterScreen")return
if(D.fng.q(0,v)&&w.q8()){w.e7()
$.aU.x1$.push(new C.fDD(w,e))}},
aSB(d,e,f){return B.ec(B.ce(new C.fUw(e,d,f)),e,!0)},
fT9:function fT9(d){this.a=d},
fSX:function fSX(d){this.a=d},
fSW:function fSW(d){this.a=d},
fDD:function fDD(d,e){this.a=d
this.b=e},
fUw:function fUw(d,e,f){this.a=d
this.b=e
this.c=f},
as5(d,e){var w=0,v=B.j(x.H),u
var $async$as5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WU(e)
w=2
return B.b(B.as4(d,u),$async$as5)
case 2:B.a8V(d,u)
return B.h(null,v)}})
return B.i($async$as5,v)},
vi(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vi=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z6(g)
if(o.length===0){w=1
break}t=e==null?B.Me(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OI(o),$async$vi)
case 3:q=m
if(j!=null&&j.length!==0&&J.rs(q,new C.chk(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.n0(q,0,new B.ju(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.as5(o,q),$async$vi)
case 4:if(i==null||r==null||s)C.a8X(o).bF(new C.chl(),x.S).eG(new C.chm())
case 1:return B.h(u,v)}})
return B.i($async$vi,v)},
a8X(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hKK
m=B.z6(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OI(m),$async$a8X)
case 3:t=f
s=J.cG(t)
if(!s.aS(t,new C.chj())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8X)
case 4:r=f
q=J.a6(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.X.av(s.h(t,o).ak(),null)!==A.X.av(q.h(r,o).ak(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.as5(m,r),$async$a8X)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8X,v)},
b2s(d){var w=0,v=B.j(x.S),u,t
var $async$b2s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.heF(d,!1),$async$b2s)
case 3:t=J
w=4
return B.b(C.as6(d,!1),$async$b2s)
case 4:u=t.dI(f,new C.chi(new B.V(Date.now(),0,!1).bQ(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2s,v)},
as6(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$as6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z6(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OI(r),$async$as6)
case 3:t=g
s=B.WU(t)
if(s.length!==J.ad(t))C.as5(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as6,v)},
isg(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bz(d).a,r=A.o.ar(s,6e7)
if(r<1)return"Just now"
w=A.o.ar(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ar(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.d1(d),12)===0?12:A.o.F(B.d1(d),12)
s=A.iK[B.bL(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fD(d)),2,"0")
u=B.d1(d)<12?"AM":"PM"
return s+" "+B.bW(d)+r+" \xb7 "+v+":"+w+" "+u},
bE_(d){var w=A.i.ab(Math.abs(d),2).split(".")
return"$"+B.nT(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fAm(),null)+"."+w[1]},
bHM(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as6(e,!1),$async$bHM)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.heF(e,!0).bF(new C.h6i(e),t).bF(new C.h6j(),t).eG(new C.h6k())
w=4
return B.b(B.bU(A.L,null,new C.h6l(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHM,v)},
hhG(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bC,new B.dk(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.hI,w,w,w),1)},
e87(d,e,f){var w=null,v=A.v.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dk(A.dv,A.a5,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.B,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.Pd,w,w,w),1)},
chk:function chk(d){this.a=d},
chl:function chl(){},
chm:function chm(){},
chj:function chj(){},
chi:function chi(d){this.a=d},
fAm:function fAm(){},
h6i:function h6i(d){this.a=d},
h6j:function h6j(){},
h6k:function h6k(){},
h6l:function h6l(d,e){this.a=d
this.b=e},
h6h:function h6h(d,e){this.a=d
this.b=e},
h6g:function h6g(d){this.a=d},
af6:function af6(d,e){this.c=d
this.a=e},
e89:function e89(){},
e8a:function e8a(){},
e8b:function e8b(){},
e8c:function e8c(d){this.a=d},
e8e:function e8e(){},
e8d:function e8d(d){this.a=d},
af5:function af5(d,e){this.c=d
this.a=e},
e88:function e88(){},
bHN(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hU(A.b6,!1,w,d,new C.h6o(j,i,h,g,e,f),null,A.eV,!1,x.H)},
h6o:function h6o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6m:function h6m(d,e){this.a=d
this.b=e},
h6n:function h6n(d,e){this.a=d
this.b=e},
aD1:function aD1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biO:function biO(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bu$=e
_.a9$=f
_.c=_.a=null},
doN:function doN(d,e){this.a=d
this.b=e},
doM:function doM(){},
afu:function afu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNu:function aNu(){},
asR(d,e,f){return new C.b3i(f,d,e,null)},
i2_(d){var w=B.a(A.i.ab(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nT(w[0],v,new C.cj4(),null)
return A.d.aM(w,".")},
b2v(){var w=$.tX
if((w>0?$.tX=w-1:w)<=0)$.tX=0},
aiT(d,e){var w=0,v=B.j(x.H),u
var $async$aiT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hmM
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiT)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiT,v)},
b3i:function b3i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cj5:function cj5(d){this.a=d},
cj4:function cj4(){},
Ob:function Ob(){},
c6u:function c6u(){},
hm5(d){if(d>0)return"+"+d
return""+d},
hlk(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fUx(d,e){var w=J.t(e,d)
if(w==null)w=B.fTj().h(0,d)
return w==null?90:w},
fzg(d,e){var w,v,u=B.aQ(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.kd(u,new C.fzh(),u.$ti.k("kd<ci.E,q>")))
A.d.e0(v,e)
return v},
hEQ(d,e,f){var w,v,u,t,s=B.aQ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pP(s,3,s.$ti.k("ci.E")))
A.d.e0(t,e)
return t},
inm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JK("Simplify \u221a("+t*s+"x^"+q+")",m,C.hEQ(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.v(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JK("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fzg(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JK("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fzg(g,b2)))}else b1.push(new C.JK("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fzg(k,b2)))}else if(u===3){e=b2.aw(11)-5
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
b1.push(new C.JK("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fzg(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JK("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hEQ(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
iyq(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dv(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.e0(t,A.cU)
v=A.d.hh(t)
if(v!==d)return v}return new B.dv(t,x.bJ).hh(0)},
JK:function JK(d,e,f){this.a=d
this.b=e
this.c=f},
fzh:function fzh(){},
arp:function arp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFS:function aFS(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e0C:function e0C(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
as7:function as7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG7:function aG7(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e8k:function e8k(d,e,f){this.a=d
this.b=e
this.c=f},
e8l:function e8l(d){this.a=d},
e8g:function e8g(d){this.a=d},
e8i:function e8i(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8j:function e8j(d,e){this.a=d
this.b=e},
e8f:function e8f(d){this.a=d},
hZb(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bQ(36e8)
try{w=d.h(0,"start")
p=B.n7(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n7(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rV(w,u,t,s,r,q==null?null:J.k(q))},
a94(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a94=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a94)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d4(s,x.f)
p=B.cF(p,new C.chT(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b_(p,new C.chU())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[calendar-memory] load: "+B.v(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a94,v)},
asn(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$asn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a94(d),$async$asn)
case 2:r=g
q=J.cG(r)
q.bq(r,new C.chQ(e))
q.I(r,e)
q.b_(r,new C.chR())
w=3
return B.b(B.az(),$async$asn)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,aa<q,@>>")
q=B.B(new B.N(q,new C.chS(),s),s.k("ak.E"))
w=4
return B.b(u.aF("String","ngmy_helper_calendar_v1_"+t,A.X.av(q,null)),$async$asn)
case 4:return B.h(null,v)}})
return B.i($async$asn,v)},
i1x(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dI(d,new C.chV(v,v.bQ(B.du(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
hwa(d){var w,v,u,t,s,r,q,p,o,n,m=C.i1x(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cU(m,0,B.dy(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.d1(s),12)===0?12:A.o.F(B.d1(s),12)
q=B.d1(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fD(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bL(s)+"/"+B.bW(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rV:function rV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chT:function chT(){},
chU:function chU(){},
chQ:function chQ(d){this.a=d},
chR:function chR(){},
chS:function chS(){},
chV:function chV(d,e){this.a=d
this.b=e},
hZc(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n7(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
hus(d){var w=A.o.F(B.d1(d),12)===0?12:A.o.F(B.d1(d),12),v=B.d1(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bW(d)+" "+w+":"+A.a.b1(A.o.v(B.fD(d)),2,"0")+" "+v},
W2(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$W2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$W2)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d4(s,x.f)
p=B.cF(p,new C.c9C(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b_(p,new C.c9D())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[call-memory] load: "+B.v(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$W2,v)},
b0N(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0N=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0N)
case 2:u=g
t=B.cU(e,0,B.dy(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,aa<q,@>>")
r=B.B(new B.N(t,new C.c9A(),r),r.k("ak.E"))
w=3
return B.b(u.aF("String","ngmy_call_memory_v1_"+s,A.X.av(r,null)),$async$b0N)
case 3:return B.h(null,v)}})
return B.i($async$b0N,v)},
b0O(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0O=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.W2(d),$async$b0O)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b_(q,new C.c9B())
w=5
return B.b(C.b0N(d,q),$async$b0O)
case 5:return B.h(null,v)}})
return B.i($async$b0O,v)},
c9E(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9E=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.W2(d),$async$c9E)
case 3:t=s.dI(g,new C.c9F(e.bQ(-72e8),e.bQ(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9E,v)},
hut(d,e){var w,v,u,t,s,r=J.a6(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWP()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.az(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
iuh(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bL(p),B.bW(p),0,0,0,0,0)
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
return B.c0(B.bD(n),B.bL(n),B.bW(n),u,t,0,0,0)},
hLf(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rW:function rW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9C:function c9C(){},
c9D:function c9D(){},
c9A:function c9A(){},
c9B:function c9B(){},
c9F:function c9F(d,e){this.a=d
this.b=e},
hwd(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lZ(t,w,v,u==null?null:J.k(u))},
i1D(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.ba(v,new C.ci2(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.drw
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iE(r,w,v,u,t,typeof d.h(0,s)=="number"?A.i.M(B.dF(d.h(0,s))):0)},
i1C(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ifJ(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.i.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.i.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.ba(s,new C.ci0(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.is(p,w,v,u,s==null?D.aDQ:s,t)},
ifK(d){var w,v,u,t=B.J([F.xk,"investments",A.o3,"games",A.jz,"loans",A.hM,"withdrawals",A.jU,"deposits",A.l8,"civic",A.kl,"store",A.rc,"jobs",A.o2,"refunds",A.f1,"account",A.lw,"music",A.zU,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a4(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ifJ(d){switch(d){case"investments":return F.xk
case"games":return A.o3
case"loans":return A.jz
case"withdrawals":return A.hM
case"deposits":return A.jU
case"civic":return A.l8
case"store":return A.kl
case"jobs":return A.rc
case"refunds":return A.o2
case"account":return A.f1
case"music":return A.lw
default:return A.zU}},
nn(d){var w=B.a([new C.lZ("text",d,null,null)],x.a)
return w},
aiP(){var w=null,v=x.v
return B.a([new C.is("investments","Investments",F.xk,4280468830,B.a([new C.iE("inv1","How do I buy an investment plan?",C.nn("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iE("inv2","When do I get paid from my plan?",C.nn("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iE("inv3","Can I have more than one plan?",C.nn("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.is("games","Games",A.o3,4287323382,B.a([new C.iE("gam1","How do NGMY games work?",C.nn("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iE("gam2","Why did my game payout change?",C.nn("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.is("loans","Loans",A.jz,4294538006,B.a([new C.iE("loan1","How do I apply for a loan?",C.nn("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iE("loan2","What is the repayment period?",C.nn("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.is("withdrawals","Withdrawals",A.hM,4282090230,B.a([new C.iE("wd1","How do I withdraw money?",C.nn("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iE("wd2","Why is my withdrawal pending?",C.nn("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.is("deposits","Deposits",A.jU,4279548070,B.a([new C.iE("dep1","How do I deposit funds?",C.nn("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iE("dep2","How long until my deposit posts?",C.nn("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.is("civic","Civic Registry",A.l8,4289170426,B.a([new C.iE("civ1","What is Civic Registry?",C.nn("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iE("civ2","What does \u201cmissed\u201d mean on my profile?",C.nn("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.is("store","NGMY Store",A.kl,4293675161,B.a([new C.iE("sto1","How do I buy from NGMY Store?",C.nn("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iE("sto2","How do I sell in the store?",C.nn("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.is("jobs","Jobs & Creator",A.rc,4293548044,B.a([new C.iE("job1","How do I find jobs?",C.nn("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iE("job2","How do I post a job?",C.nn("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.is("refunds","Refunds",A.o2,4293870660,B.a([new C.iE("ref1","Can I get a refund?",C.nn("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iE("ref2","How long do refunds take?",C.nn("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.is("account","Account",A.f1,4281908728,B.a([new C.iE("acc1","How do I update my profile?",C.nn("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iE("acc2","I forgot my password \u2014 what now?",C.nn("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.is("music","Music Charts",A.lw,4290807036,B.a([new C.iE("mus1","What are Music Charts?",C.nn("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iE("mus2","How do I upload music?",C.nn("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.is("help","Help Center",A.zU,4279080072,B.a([new C.iE("hlp1","Where can I get live help?",C.nn("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iE("hlp2","How do daily Helper limits work?",C.nn("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hwe(d){var w,v=J.a6(d),u=v.gau(d)
if(u)return C.aiP()
v=v.dP(d,new C.ci5(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b_(w,new C.ci6())
return w.length===0?C.aiP():w},
hwf(d){var w=J.ba(d,new C.ci7(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
asp(d){return C.i1E(d)},
i1E(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$asp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$asp)
case 6:s=f
w=7
return B.b(s.aF("String","ngmy_helper_kb_v1",A.X.av(C.hwf(d),null)),$async$asp)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.ac(p)
$.am.$1("[helper kb] local save: "+B.v(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$asp,v)},
ci4(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ci4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ci4)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiP()
u=l
w=1
break}p=A.X.aP(0,q,null)
if(!x.f.b(p)){l=C.aiP()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiP()
u=l
w=1
break}n=C.hwe(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.ac(j)
$.am.$1("[helper kb] local load: "+B.v(m))
l=C.aiP()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ci4,v)},
b2R(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2R=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2R)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2R)
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
return B.i($async$b2R,v)},
b2S(d){return C.i1F(d)},
i1F(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2S=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2S)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hT("ngmy_helper_kb",d,!1,!1,A.cS,null),$async$b2S)
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
return B.i($async$b2S,v)},
asq(){var w=0,v=B.j(x.I),u,t,s,r
var $async$asq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ci4(),$async$asq)
case 3:s=e
w=4
return B.b(C.b2R(),$async$asq)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hwe(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.asp(t),$async$asq)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asq,v)},
ci8(d){var w=0,v=B.j(x.y),u
var $async$ci8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asp(d),$async$ci8)
case 3:u=C.b2S(C.hwf(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ci8,v)},
lZ:function lZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iE:function iE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ci3:function ci3(){},
ci2:function ci2(){},
is:function is(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ci1:function ci1(){},
ci0:function ci0(){},
ci5:function ci5(){},
ci6:function ci6(){},
ci7:function ci7(){},
bce:function bce(d){this.a=d},
X1:function X1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGj:function aGj(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ecq:function ecq(){},
ecr:function ecr(){},
eck:function eck(d){this.a=d},
ecl:function ecl(d){this.a=d},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec4:function ec4(d){this.a=d},
ec5:function ec5(d,e,f){this.a=d
this.b=e
this.c=f},
ec2:function ec2(d){this.a=d},
ech:function ech(d,e){this.a=d
this.b=e},
eci:function eci(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ecb:function ecb(d){this.a=d},
ecc:function ecc(d,e,f){this.a=d
this.b=e
this.c=f},
eca:function eca(d,e){this.a=d
this.b=e},
ecg:function ecg(d,e,f){this.a=d
this.b=e
this.c=f},
ecf:function ecf(d,e){this.a=d
this.b=e},
ece:function ece(d,e){this.a=d
this.b=e},
ecd:function ecd(d,e,f){this.a=d
this.b=e
this.c=f},
ec7:function ec7(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec8:function ec8(d,e){this.a=d
this.b=e},
ec9:function ec9(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
eco:function eco(d,e){this.a=d
this.b=e},
ecn:function ecn(){},
ecm:function ecm(d,e){this.a=d
this.b=e},
QN:function QN(d,e){this.c=d
this.a=e},
bec:function bec(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cXG:function cXG(d){this.a=d},
cXF:function cXF(d,e){this.a=d
this.b=e},
cXD:function cXD(d,e){this.a=d
this.b=e},
cXH:function cXH(d){this.a=d},
cXE:function cXE(d,e){this.a=d
this.b=e},
cXC:function cXC(d,e){this.a=d
this.b=e},
cXI:function cXI(d){this.a=d},
cXJ:function cXJ(d,e){this.a=d
this.b=e},
a1E:function a1E(d,e,f){this.c=d
this.d=e
this.a=f},
aIn:function aIn(){this.d=$
this.c=this.a=null},
f5m:function f5m(d,e){this.a=d
this.b=e},
f5n:function f5n(d){this.a=d},
f5t:function f5t(){},
f5s:function f5s(d,e){this.a=d
this.b=e},
f5r:function f5r(d,e){this.a=d
this.b=e},
f5o:function f5o(d,e){this.a=d
this.b=e},
f5q:function f5q(d,e,f){this.a=d
this.b=e
this.c=f},
f5p:function f5p(d,e,f){this.a=d
this.b=e
this.c=f},
a1D:function a1D(d,e){this.c=d
this.a=e},
aIm:function aIm(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f5i:function f5i(d,e){this.a=d
this.b=e},
f5g:function f5g(d){this.a=d},
f5h:function f5h(d,e){this.a=d
this.b=e},
f5k:function f5k(d,e){this.a=d
this.b=e},
f5l:function f5l(d){this.a=d},
f5j:function f5j(d,e){this.a=d
this.b=e},
i1A(d){var w=new B.N(d,new C.chY(),B.T(d).k("N<1,q>")).aM(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chZ(d,e,f){return C.i1B(d,e,f)},
i1B(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chZ=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Li([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.ro(B.nq(b3),C.i1A(b6)+"\n\nAdmin instruction:\n"+b4,A.ib,null,null),$async$chZ)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Li([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d3(s,"```"))s=A.a.el(J.hpN(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.X.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Li([a3,"AI response was not valid JSON.",null,null])
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
if(!a6.b(n)||J.cu(n)){a3=B.a([],x.Y)
u=new B.Li([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=B.a1(a3.a(J.t(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.v(k)
h=J.t(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=B.a1(a3.a(J.t(h,f)),a4,a5)
d=J.t(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aT(d);a9.C();){a1=a9.gP(a9)
J.c6(a0,C.hwd(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c6(a0,new C.lZ("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.v(f)
b1=J.t(e,"question")
J.c6(g,new C.iE("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i1z(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.i.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c6(m,new C.is(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Li([m,null,p,a3])
w=1
break}catch(b7){a2=B.ac(b7)
a3=B.v(a2)
a4=B.a([],x.Y)
u=new B.Li([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chZ,v)},
i1z(d){switch(d){case"investments":return F.xk
case"games":return A.o3
case"loans":return A.jz
case"withdrawals":return A.hM
case"deposits":return A.jU
case"civic":return A.l8
case"store":return A.kl
case"jobs":return A.rc
case"refunds":return A.o2
case"account":return A.f1
case"music":return A.lw
default:return A.zU}},
isF(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fV5(f))
if(w>=0){t[w]=J.fl(e).cRq(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bgp(u)
return t},
chY:function chY(){},
fV5:function fV5(d){this.a=d},
deA:function deA(d){this.a=d},
X2:function X2(d,e,f){this.c=d
this.d=e
this.a=f},
aGl:function aGl(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ed0:function ed0(){},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecI:function ecI(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecL:function ecL(d,e,f){this.a=d
this.b=e
this.c=f},
ecD:function ecD(){},
ecE:function ecE(){},
ecF:function ecF(){},
ecG:function ecG(){},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecS:function ecS(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecX:function ecX(){},
ecY:function ecY(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ecP:function ecP(d){this.a=d},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
i9B(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.GE(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.az(d,t,q)
o=u?A.cA:A.aM
m.push(new B.es(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aM
m.push(new B.es(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.F,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aM
m.push(new B.es(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cL,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aM
m.push(new B.es(p,n,n,A.cN,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.no,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aY(d,t)
m.push(B.cR(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cA:A.aM,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u9(A.cw,n,n,n,A.eZ,n,n,!0,n,B.cR(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.bX)},
dt5:function dt5(d){this.a=d},
aDW:function aDW(d,e){this.a=d
this.b=e},
aso:function aso(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGk:function aGk(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecs:function ecs(d){this.a=d},
ect:function ect(d){this.a=d},
ecC:function ecC(){},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecx:function ecx(){},
ecz:function ecz(){},
ecy:function ecy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecw:function ecw(d,e){this.a=d
this.b=e},
aDU:function aDU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adB:function adB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2Q:function b2Q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ci_:function ci_(d){this.a=d},
adr:function adr(d,e,f){this.c=d
this.d=e
this.a=f},
cQY:function cQY(d){this.a=d},
cQZ:function cQZ(){},
cR_:function cR_(d){this.a=d},
aDV:function aDV(d,e,f){this.c=d
this.d=e
this.a=f},
bkm:function bkm(){this.c=this.a=this.d=null},
dt6:function dt6(d,e){this.a=d
this.b=e},
dt8:function dt8(d,e){this.a=d
this.b=e},
dt7:function dt7(d){this.a=d},
i37(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i38(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i36(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hEL(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fyZ(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
itV(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i36(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
ate:function ate(d,e){this.a=d
this.b=e},
JP:function JP(d,e){this.a=d
this.b=e},
t0:function t0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyZ:function fyZ(){},
asr:function asr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGm:function aGm(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bu$=i
_.a9$=j
_.c=_.a=null},
ede:function ede(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
ed7:function ed7(){},
ed8:function ed8(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
eda:function eda(){},
edb:function edb(d,e){this.a=d
this.b=e},
edc:function edc(d){this.a=d},
edd:function edd(d){this.a=d},
ed6:function ed6(d,e){this.a=d
this.b=e},
edl:function edl(d,e){this.a=d
this.b=e},
edi:function edi(){},
edj:function edj(d,e){this.a=d
this.b=e},
edk:function edk(d,e){this.a=d
this.b=e},
edh:function edh(d,e){this.a=d
this.b=e},
edg:function edg(d,e){this.a=d
this.b=e},
edn:function edn(d){this.a=d},
edm:function edm(d){this.a=d},
ed4:function ed4(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e){this.a=d
this.b=e},
edo:function edo(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
ed1:function ed1(d){this.a=d},
ed2:function ed2(d){this.a=d},
aOI:function aOI(){},
cia(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$cia=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.UB
w=1
break}w=3
return B.b(B.az(),$async$cia)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.UB
w=1
break}try{q=B.a1(x.f.a(A.X.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.X3(p,o,n,q)
w=1
break}catch(l){s=B.ac(l)
$.am.$1("[helper-perms] load: "+B.v(s))
u=D.UB
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$cia,v)},
ass(d,e){var w=0,v=B.j(x.H),u
var $async$ass=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$ass)
case 4:w=3
return B.b(g.aF("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.X.av(e.ak(),null)),$async$ass)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ass,v)},
ci9(d){var w=0,v=B.j(x.gp),u,t
var $async$ci9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.X3(!0,!0,!0,!0)
w=3
return B.b(C.ass(d,t),$async$ci9)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ci9,v)},
hLg(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hLe(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
X3:function X3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHR(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHR=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2L(h),$async$bHR)
case 3:if(j){w=1
break}w=4
return B.b(C.ask(h),$async$bHR)
case 4:if(d.e==null){w=1
break}t=B.r_(d,!0)
t.toString
s=B.dm()
s.b=B.pI(new C.h7f(g,e,f,s),!1,!1)
t.mf(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHR,v)},
h7f:function h7f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h7e:function h7e(d){this.a=d},
a0m:function a0m(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDk:function aDk(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dqr:function dqr(d){this.a=d},
dqs:function dqs(d,e,f){this.a=d
this.b=e
this.c=f},
dqx:function dqx(){},
dqw:function dqw(d){this.a=d},
dqt:function dqt(d){this.a=d},
dqu:function dqu(){},
dqv:function dqv(d){this.a=d},
aNz:function aNz(){},
i2B(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i2A(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
at_(d){return C.i2y(d)},
i2y(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$at_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$at_)
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
return B.i($async$at_,v)},
b3G(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3G=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i2B(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3G)
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
return B.i($async$b3G,v)},
hwG(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aY(v,14))
return w.length===0?null:w}return null},
i2z(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.cjZ(A.a.i(d.toLowerCase()),w))},
hwH(d,e,f,g,h){var w,v,u=J.a6(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qm(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qm(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qm(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qm(!1,0,"Verification code does not match this deposit.")
if(!C.i2z(e,d,w))return new C.qm(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
heV(d,e){var w,v,u="amount",t=J.a6(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e0U
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OY(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OY(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OY(!0,!1,!1,!1)},
ck4(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$ck4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hwG(d)
if(s==null){u=D.UD
w=1
break}w=3
return B.b(C.at_(s),$async$ck4)
case 3:t=g
if(t==null){u=D.UD
w=1
break}u=C.heV(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ck4,v)},
b3I(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3G(d),$async$b3I)
case 3:s=g
if(s==null||s.length===0){u=D.UD
w=1
break}w=4
return B.b(C.at_(s),$async$b3I)
case 4:t=g
if(t==null){u=D.UD
w=1
break}u=C.heV(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3I,v)},
ck5(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$ck5=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3G(d),$async$ck5)
case 3:t=j
if(t==null||t.length===0){u=new C.qm(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xm(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ck5,v)},
Xm(d,e,f,g,h){return C.i2C(d,e,f,g,h)},
i2C(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xm=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hwG(a4)
if(a0==null){u=new C.qm(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.at_(a0),$async$Xm)
case 3:k=a8
if(k==null){u=new C.qm(!1,0,y.m)
w=1
break}j=C.heV(k,a5)
if(j.b){u=new C.qm(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qm(!1,0,y.u)
w=1
break}if(j.c){u=new C.qm(!1,0,y.j)
w=1
break}i=C.hwH(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qm(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xm)
case 8:p=a8
if(p==null){u=new C.qm(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qm(!1,0,"This deposit code was already used.")
w=1
break}o=C.hwH(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dH(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hT("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cS,null),$async$Xm)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hT("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cS,null),$async$Xm)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.ac(a1)
$.am.$1("[local deposit qr] redeem: "+B.v(l))
u=new C.qm(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.qm(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xm,v)},
OY:function OY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qm:function qm(d,e,f){this.a=d
this.b=e
this.c=f},
cjZ:function cjZ(d,e){this.a=d
this.b=e},
ckc(d,e){var w
B.hlH(d,e,!1)
B.rn(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.BA(!0,!1,d.d,w)},
a9r(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bL(d)===e.gcg()&&B.bW(d)===e.gcv()},
i2K(d){var w=B.d1(d)*60+B.fD(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hwO(d){if(B.d1(d)>=12)return!1
if(B.lE(d)===6||B.lE(d)===7)return!1
return!0},
ckg(d){var w=d.c?d.bU():d
return w.cZ(B.c0(B.bD(w),B.bL(w),B.bW(w),12,0,0,0,0))},
heZ(d,e){var w,v,u,t=d.gDc()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9r(d.fx,e)&&d.fy>0.0001)return A.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.ckg(w))return 0
v=B.c0(e.gck(),e.gcg(),e.gcv(),12,0,0,0,0)
if(!e.cZ(v))return t
if(!e.cc(w))return 0
u=A.o.ar(v.bz(w).a,1000)
if(u<=0)return t
return A.i.D(t*(A.o.D(A.o.ar(e.bz(w).a,1000),0,u)/u),0,t)},
heY(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9r(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.ckb(s))&&C.ckg(t)){r=d.gDc()
v=r>0
if(v){q=new B.db(s,d.a,r,A.hf,A.fE,"Clock-in daily earnings (local)",null,null,A.cx,p)
C.ckc(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9r(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9r(o,p)&&!C.ckg(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
ckb:function ckb(d){this.a=d},
ihU(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
izi(d,e,f,g,h,i){return B.hG(d,new C.at0(f,e,i,g,h,null),!0,null,x.H)},
hB3(d){var w,v,u=d.c?d.bU():d,t=B.d1(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bW(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fD(u)),2,"0")+" "+v},
hJ_(d){var w=d.x
if(w===A.dJ)return"Processing"
if(w===A.kP)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
iqd(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.h1)return"Deposit"
if(w===A.f8)return"Withdrawal"
return v.length!==0?v:w.b},
ihy(d){var w=d.d,v=w===A.h1||w===A.pl||w===A.hf||w===A.kQ,u=d.x
if(u===A.dJ)return w===A.f8?-d.c:0
if(u!==A.cx)return 0
w=d.c
return v?w:-w},
iqM(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b_(q,new C.fQT())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.ihy(s)
if(r<0)r=0
w.n(0,s.a,new B.brW(v,r))}return w},
at0:function at0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGJ:function aGJ(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
erG:function erG(d){this.a=d},
esm:function esm(d){this.a=d},
esn:function esn(d){this.a=d},
eso:function eso(d){this.a=d},
es4:function es4(d,e){this.a=d
this.b=e},
es5:function es5(){},
es6:function es6(d){this.a=d},
es7:function es7(){},
es8:function es8(d){this.a=d},
es9:function es9(d,e,f){this.a=d
this.b=e
this.c=f},
esa:function esa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es_:function es_(d,e){this.a=d
this.b=e},
erH:function erH(d,e,f){this.a=d
this.b=e
this.c=f},
es0:function es0(){},
es1:function es1(){},
es2:function es2(d){this.a=d},
es3:function es3(){},
erL:function erL(d,e){this.a=d
this.b=e},
erM:function erM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erU:function erU(){},
erR:function erR(d){this.a=d},
erS:function erS(d,e){this.a=d
this.b=e},
erT:function erT(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
erW:function erW(d,e,f){this.a=d
this.b=e
this.c=f},
erX:function erX(d){this.a=d},
erZ:function erZ(d){this.a=d},
erY:function erY(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d,e,f){this.a=d
this.b=e
this.c=f},
ese:function ese(){},
esf:function esf(){},
esj:function esj(d){this.a=d},
esc:function esc(d){this.a=d},
esk:function esk(d){this.a=d},
esb:function esb(d){this.a=d},
esl:function esl(d){this.a=d},
esg:function esg(d){this.a=d},
esh:function esh(d){this.a=d},
esi:function esi(d){this.a=d},
esd:function esd(d){this.a=d},
erK:function erK(d){this.a=d},
erJ:function erJ(d){this.a=d},
erI:function erI(d){this.a=d},
erQ:function erQ(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
aE7:function aE7(d,e,f,g,h,i,j,k,l,m){var _=this
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
duX:function duX(){},
duY:function duY(){},
duZ:function duZ(d,e,f){this.a=d
this.b=e
this.c=f},
duW:function duW(d){this.a=d},
dv_:function dv_(d,e){this.a=d
this.b=e},
duV:function duV(d){this.a=d},
aE6:function aE6(d,e,f,g,h,i,j,k,l,m){var _=this
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
bl6:function bl6(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
duQ:function duQ(d){this.a=d},
duR:function duR(d){this.a=d},
duS:function duS(d){this.a=d},
duT:function duT(){},
duU:function duU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
duP:function duP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
duO:function duO(d){this.a=d},
beG:function beG(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
beF:function beF(d,e,f){this.b=d
this.d=e
this.a=f},
beE:function beE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aE8:function aE8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aE9:function aE9(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dvg:function dvg(){},
dvh:function dvh(){},
dvi:function dvi(){},
dv2:function dv2(d){this.a=d},
dv1:function dv1(d,e){this.a=d
this.b=e},
dv0:function dv0(d,e){this.a=d
this.b=e},
dvd:function dvd(d,e){this.a=d
this.b=e},
dvf:function dvf(d,e){this.a=d
this.b=e},
dve:function dve(d,e){this.a=d
this.b=e},
dvc:function dvc(){},
dvb:function dvb(d){this.a=d},
dva:function dva(){},
dv5:function dv5(d){this.a=d},
dv6:function dv6(){},
dv7:function dv7(d){this.a=d},
dv8:function dv8(d){this.a=d},
dv4:function dv4(){},
dv9:function dv9(d){this.a=d},
dv3:function dv3(d){this.a=d},
be5:function be5(d){this.a=d},
fQT:function fQT(){},
bzi:function bzi(d,e){this.b=d
this.a=e},
aNP:function aNP(){},
bBh:function bBh(){},
imQ(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fIA(v,g))
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
aS2(d){var w,v=J.a6(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.i.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.i.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
ixX(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.h1g(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aj3(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aS2(u)<=0){t=J.cG(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ipw(d,e){var w,v,u,t=J.a6(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aS2(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aS2(d)>0},
ipv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a6(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.i.M(h)
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
imP(d,e){var w
C.aj3(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fIz(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uD(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ijj(d,e,f){var w,v,u,t="fromName",s=J.a6(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hlg(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a6(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ijj(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGF(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGF)
case 7:r=e
q=B.aW(J.t(r.a,"all_users"))
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
return B.i($async$bGF,v)},
bFH(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGF(),$async$bFH)
case 3:u=t.hlg(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFH,v)},
M4(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$M4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hG9.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bz(p)
t=t.a>B.du(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hG9.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.Sb(A.cj,q),$async$M4)
case 5:case 4:s=$.hG8.h(0,q)
if(s==null){u=C.uD(e,q)
w=1
break}r=C.uD(B.bFO(e,B.a([s],x._)),q)
if(r!=null)B.ho1(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$M4,v)},
iyb(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ifQ(d,e){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=B.iD(8,new C.fwA(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
imO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ifQ(u,f)
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
iy9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a6(u)
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
ho0(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
h_G(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$h_G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aj3(d)
t=$.hkw
if(t==null)s=$.hkw=B.Sb(A.cj,null).fw(new C.h_H())
else s=t
w=3
return B.b(s,$async$h_G)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.h_I(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFO(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_G,v)},
aj4(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aj4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aj3(d)
t=B.T(d).k("N<1,aa<q,@>>")
t=B.B(new B.N(d,new C.fYi(),t),t.k("ak.E"))
w=3
return B.b(B.Sb(t,null),$async$aj4)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFO(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aj4,v)},
aT_(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aT_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.ho0(d,e,f)
t=C.uD(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.Sb(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aT_)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uD(s,e)
if(r!=null)B.ho1(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aT_,v)},
iuF(d,e,f){var w
C.ho0(d,e,f)
w=$.hkk.h(0,e)
if(w!=null)w.a1(0)
$.hkk.n(0,e,B.cy(A.lU,new C.fYj(e,d)))},
heG(d,e){return new C.b2t(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fIA:function fIA(d,e){this.a=d
this.b=e},
h1g:function h1g(d){this.a=d},
fIz:function fIz(d){this.a=d},
fwA:function fwA(d){this.a=d},
h_H:function h_H(){},
h_I:function h_I(){},
fYi:function fYi(){},
fYj:function fYj(d,e){this.a=d
this.b=e},
b2t:function b2t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
iyF(d,e,f){return B.bU(A.L,null,new C.h2s(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h2s:function h2s(d,e){this.a=d
this.b=e},
a1a:function a1a(d,e,f){this.c=d
this.d=e
this.a=f},
aGx:function aGx(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
emj:function emj(d){this.a=d},
emm:function emm(d){this.a=d},
emn:function emn(d){this.a=d},
eml:function eml(d){this.a=d},
emo:function emo(d){this.a=d},
emp:function emp(d,e){this.a=d
this.b=e},
emk:function emk(d,e){this.a=d
this.b=e},
it2(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.j4
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.j4
v=Date.now()
u=C.iiC(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kM("calendar",B.J(["title",C.iiB(t,w),"start",u.ag(),"end",u.bQ(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
iiB(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hGZ(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hGZ(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hGZ(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fHx(),B.T(w).k("N<1,q>")).aM(0," ")},
iiC(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bL(e),B.bW(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bQ(864e8)
else if(!A.a.q(d,"today"))for(w=D.aL1.gdM(D.aL1),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cV(d,u,0)){t=C.ihx(o,v.b)
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
q=0}return B.c0(B.bD(o),B.bL(o),B.bW(o),r,q,0,0,0)},
ihx(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.lE(w)===e){u=!0
if(v<=0){t=d.bQ(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bQ(r)}return d.bQ(r)},
fHx:function fHx(){},
it3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.j4
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
q=C.ieE(w,j)
if(q==null||q.length===0)return A.j4
t=B.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kM("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kM(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kM("call",B.J(["name",q],t,t))],x.Z)}return A.j4},
ieE(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.im2(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
im2(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fHw(),B.T(w).k("N<1,q>")).aM(0," ")},
fHw:function fHw(){},
hLn(d){var w=new B.N(d,new C.h_Z(),B.T(d).k("N<1,aa<q,@>>")).c0(0,new C.h0_())
w=B.B(w,w.$ti.k("M.E"))
return w},
h_Z:function h_Z(){},
h0_:function h0_(){},
it6(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.j4
w=A.a.i(d)
if(w.length===0)return A.j4
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.j4
u=B.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return A.j4
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
return B.a([new B.kM("send_email",t)],x.Z)},
isc(d,e){var w
if(e)return d
w=J.dI(d,new C.fUh())
w=B.B(w,w.$ti.k("M.E"))
return w},
fUh:function fUh(){},
iuC(d){switch(d){case"blackjack_vegas":return D.e59
case"roulette_euro":return D.e4U
case"slots_jackpot":return D.e50
case"poker_texas":return D.e53
case"chess_royale":return D.e4V
case"connect_four_pro":return D.e4W
case"domino_block":return D.e4Y
case"plinko_prizes":return D.e55
case"spin_wheel":return D.e52
case"baccarat_punto":return D.e4X
case"craps_table":return D.e54
case"casino_war":return D.e4Z
case"bingo_live":return D.e51
case"solitaire_klondike":return D.e58
case"backgammon_pro":return D.e4T
case"billiards_snooker":return D.e56
case"profit_solve":return D.e57
default:return D.e5_}},
fY9(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.H,A.v.j(0.35),A.ez,6)],x.V)
return B.o(p,B.as(B.W(A.nZ,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cch,A.m),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bE:A.a_
w=B.m(8)
v=B.K(A.bn,A.r,1)
u=B.a([new B.ab(0,A.H,A.v.j(0.28),A.ez,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bKy,B.c(D.cL6[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.aY,B.as(B.c(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.aY],x.p),A.B,p,A.e,A.h,0,A.p),A.f,p,p,new B.n(A.hY,p,v,w,u,p,A.m),p,74,p,p,p,p,p,52)},
ivS(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.H,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.h_p(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fTQ,A.af,B.A(r,A.l,v,A.b9,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.ccB,A.m),v,v,v,v,H.anY,v,v,v),A.aA,B.d8(A.au8,v,D.fUt,d,B.bn(A.aQ,v,v,v,A.dx,v,A.a28,v,v,v,v,v))],w),A.l,v,A.e,A.h,0,A.p)},
pF:function pF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bu5:function bu5(d,e){this.b=d
this.a=e},
h_p:function h_p(){},
i3j(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.atr(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.ax()))},
ino(d,e,f,g,h){var w=new C.fKl(f,h)
switch(d){case"checkers_deluxe":return C.idc(h,g,e,w)
case"tic_tac_go":return C.img(h,g,e,w)
case"blackjack_vegas":return C.icv(h,g,e,new C.fKf(w))
case"roulette_euro":return C.ikv(h,g,e,new C.fKg(w))
case"slots_jackpot":return C.ill(h,g,e,new C.fKh(w))
case"billiards_snooker":return C.ijm(h,g,e,new C.fKi(w))
case"connect_four_pro":return C.idz(h,g,e,w)
case"profit_solve":return C.ijp(h,g,e,new C.fKj(w))
default:return C.id8(d,h,g,e,new C.fKk(w))}},
idc(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),u=B.m(12),t=B.K(D.a_t,A.r,8),s=B.a([new B.ab(0,A.H,A.v.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eJ,v,w),B.E(B.as(new B.fH(1,B.o(w,B.bv(B.m(6),B.iC(!0,w,w,A.y,D.fsa,new C.ftC(d,e,f,g),64,w,A.e2,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.m),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
img(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eJ,B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),w),B.E(B.as(new B.fH(1,B.ce(new C.fHT(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
icv(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.y_,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.fsU(),B.T(q).k("N<1,w>")))
else A.d.u(s,B.a([C.fY9(q[0],!1),A.bk,C.fY9(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.h,0,v,v)
r=B.c("Total: "+d.a52(d.ay),v,v,v,v,v,v,D.fOD,v,v,v)
q=d.ay
w=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.fsV(),w),w.k("ak.E"))
q=B.bZ(A.fQ,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eJ,u,v),D.h02,A.al,s,A.aA,D.h7P,r,A.al,q,A.aY,B.A(B.a([B.E(B.bJ(D.fUX,v,d.CW?v:new C.fsW(d,e,f,g),v),1),A.aa,B.E(B.bJ(D.haj,v,new C.fsX(d,e,f,g),v),1)],t),A.l,v,A.e,A.h,0,v,v)],t),A.l,v,A.e,A.h,0,A.p)},
ikv(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.H,A.v.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eJ,v,w),B.o(w,B.b4(w,w,w,new C.bu5(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jg,B.c("Result: "+B.v(v),w,w,w,w,w,w,D.fBw,w,w,w),w))
t.push(A.af)
t.push(B.bZ(A.fQ,B.iD(6,new C.fEM(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
ill(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fGJ(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eJ,v,w),C.ivS(new C.fGK(d,e,f,g),u)],x.p),A.l,w,A.e,A.h,0,A.p)},
ijm(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),u=B.m(20),t=B.K(A.iT,A.r,12),s=x.V,r=B.a([new B.ab(0,A.H,A.v.j(0.45),A.dm,18)],s),q=x.p
return B.x(B.a([new B.D(A.eJ,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b97,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.agi,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ab(0,A.H,A.v.j(0.3),A.J,4)],s),w,A.m),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eHF,A.m),w,w,w,A.fc,w,w,w,w),1),B.l3(A.bh,w,w,1,0,new C.fDz(d,f),d.dy),B.bJ(D.h_2,w,new C.fDA(d,e,g,f),w)],q),A.l,w,A.e,A.h,0,A.p)},
idz(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.y_,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bx(1,A.ba,B.ay(v,B.x(B.iD(6,new C.fu3(d,w),!0,t),A.l,v,A.mA,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fu4(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eJ,u,v),B.E(B.as(new B.fH(1.1666666666666667,B.A(s,A.dG,v,A.e,A.h,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
ijp(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eJ,B.c(d.c,w,w,w,w,w,w,D.y_,A.K,w,w),w),B.c(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iP,w,w,w),B.c(d.fy,w,w,w,w,w,w,K.acY,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c7R,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e9,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fDL(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,A.dl,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fYA,w,new C.fDM(d,e,g,f),w)],x.p),A.l,w,A.e,A.h,0,A.p)},
id8(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.iuC(d)
v=D.aKR.h(0,d)
if(v==null)v=d
m=B.c(m,n,n,n,n,n,n,A.kO,A.K,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.H,w.c.j(0.35),A.eS,24)],x.V)
p=B.c(w.e,n,n,n,n,n,n,A.Lt,n,n,n)
o=B.c(v,n,n,n,n,n,n,A.m6,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.v(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.S,o,A.P,B.c(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.dc,B.W(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aX,A.b1,A.x,t,n,n),A.m),n,n,n,A.fc,A.ae,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h9p,n,new C.ftp(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.v:A.c,n,A.cm,n,n,n,n,n)),n)],k),A.l,n,A.e,A.h,0,A.p)},
FG:function FG(d,e){this.a=d
this.b=e},
atr:function atr(d,e,f,g,h,i,j,k){var _=this
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
clS:function clS(){},
clT:function clT(){},
clR:function clR(){},
clU:function clU(){},
clQ:function clQ(){},
clW:function clW(){},
clX:function clX(){},
clP:function clP(d){this.a=d},
clV:function clV(){},
clO:function clO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKl:function fKl(d,e){this.a=d
this.b=e},
fKf:function fKf(d){this.a=d},
fKg:function fKg(d){this.a=d},
fKh:function fKh(d){this.a=d},
fKi:function fKi(d){this.a=d},
fKj:function fKj(d){this.a=d},
fKk:function fKk(d){this.a=d},
ftC:function ftC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftB:function ftB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHT:function fHT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHS:function fHS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fHR:function fHR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsU:function fsU(){},
fsV:function fsV(){},
fsW:function fsW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsX:function fsX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEM:function fEM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEL:function fEL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fGJ:function fGJ(){},
fGK:function fGK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDz:function fDz(d,e){this.a=d
this.b=e},
fDA:function fDA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu4:function fu4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fu3:function fu3(d,e){this.a=d
this.b=e},
fDL:function fDL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDM:function fDM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftp:function ftp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iqf(d){var w,v=B.T(d).k("Y<1>")
v=B.pP(new B.Y(d,new C.fPW(),v),120,v.k("M.E"))
w=B.cF(v,new C.fPX(),B.a4(v).k("M.E"),x.N).aM(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fPW:function fPW(){},
fPX:function fPX(){},
ajf(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aum:function aum(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aHn:function aHn(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
eV5:function eV5(){},
aPk:function aPk(){},
i1h(){var w=$.JC
if(w<=0)return;--w
$.JC=w
if(w===0){w=$.hw_
if(w!=null)w.$0()}},
ch5(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
as0(d){var w=0,v=B.j(x.H),u,t
var $async$as0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.heB.I(0,t)
w=4
return B.b(B.az(),$async$as0)
case 4:w=3
return B.b(f.aF("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$as0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$as0,v)},
as_(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$as_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.ch5(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.heB.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$as_)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k7(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as_,v)},
X0(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$X0)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_ai_usage_v1"))
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
return B.i($async$X0,v)},
b2K(d){return C.i1u(d)},
i1u(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2K=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2K)
case 6:s=f
w=7
return B.b(s.aF("String","ngmy_helper_ai_usage_v1",A.X.av(d,null)),$async$b2K)
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
return B.i($async$b2K,v)},
b2I(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afN(0,new B.V(Date.now(),0,!1))
w=J.a6(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bh(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afN(typeof v=="number"?A.o.D(A.i.M(v),0,999999):0,t)},
b2J(d,e){if(A.o.ar(e.bz(d.b).a,36e8)>=24)return new B.afN(0,e)
return d},
chJ(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$chJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.X0(),$async$chJ)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2J(C.b2I(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chJ,v)},
chK(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$chK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.X0(),$async$chK)
case 3:t=g
s=Date.now()
r=C.b2J(C.b2I(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bQ(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chK,v)},
i1v(d){var w,v,u,t=d.a,s=A.o.ar(t,1e6)
if(s<=0)return"0s"
w=A.o.ar(t,36e8)
v=A.o.ar(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2L(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.X0(),$async$b2L)
case 3:t=p.b2J(o.b2I(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2L)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k7(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2L,v)},
ask(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$ask=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.X0(),$async$ask)
case 3:t=s.b2J(r.b2I(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$ask)
case 5:w=4
return B.b(f.aF("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$ask)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ask,v)},
asl(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$asl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.X0(),$async$asl)
case 3:s=g
r=Date.now()
q=C.b2J(C.b2I(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2K(s),$async$asl)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asl,v)},
aiQ(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiQ=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hLf(a0))if(!C.hLe(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hLf(a0)?3:4
break
case 3:o=C.iuh(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9E(e,o),$async$aiQ)
case 7:n=a2
p=J.a6(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hus(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWP()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.N_("text/plain"),$async$aiQ)
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
case 13:case 9:w=C.hLe(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a94(e),$async$aiQ)
case 17:m=f.hwa(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.W2(e),$async$aiQ)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cK(i)){p=h
m=C.hut(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiQ,v)},
i2S(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ckl(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ckl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hwT(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ckl)
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
return B.i($async$ckl,v)},
at3(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$at3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$at3)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cc.cE(0,A.cE.aK(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIR(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.ac(j)
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
return B.i($async$at3,v)},
b3P(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i2S(q)?3:4
break
case 3:w=5
return B.b(C.ckl(q),$async$b3P)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.at3(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.at3(A.a.i(A.a.aY(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.at3(A.a.i(A.a.aY(q,15))),$async$b3P)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIR(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3P,v)},
hx8(d){var w=d.bK
if(w>=0)return w
return 1},
aj2(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aj2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aTb(d,e),$async$aj2)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HL(d,null,null,!1,!0,""),$async$aj2)
case 5:w=4
return B.b(t.$1(h),$async$aj2)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aj2,v)},
it1(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.j4
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.j4
s=new B.V(Date.now(),0,!1)
r=B.dm()
q=B.dm()
p=C.iiA(w)
if(p!=null){v=p.a
r.b=s.bQ(v)
q.b=C.hFK(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ar(v,e)<=180)q.b="Reminder \u2014 "+A.o.ar(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hFL(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bL(s),B.bW(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bQ(a0)
r.b=B.c0(B.bD(l),B.bL(l),B.bW(l),n,m,0,0,0).bQ(-36e8)
if(r.bm().cZ(s.bQ(e)))r.b=J.c6(r.bm(),A.oL)
v=C.imM(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bL(s),B.bW(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bQ(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hFL(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bL(l),B.bW(l),h,g,0,0,0)
r.b=f.cZ(s.bQ(3e7))&&!v?f.bQ(a0):f
q.b=C.hFK(a1,w)}}v=x.N
return B.a([new B.kM("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
iiA(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
imM(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hFL(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hFK(d,e){var w,v,u,t
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
i3c(d){var w,v,u,t,s=J.a6(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,Z,H,K,A_
J=c[1]
B=c[0]
A=c[2]
L=c[23]
E=c[80]
I=c[83]
R=c[85]
M=c[79]
S=c[88]
T=c[86]
N=c[44]
O=c[66]
U=c[87]
P=c[41]
V=c[84]
W=c[82]
X=c[57]
F=c[90]
Q=c[75]
Y=c[58]
C=a.updateHolder(c[3],C)
D=c[78]
G=c[22]
Z=c[37]
H=c[81]
K=c[54]
A_=c[89]
C.bvk.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Gi.prototype={
S(){return new C.aKW(this.$ti.k("aKW<Gi.T,Gi.S>"))}}
C.aKW.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new B.hy(A.Hh,v,null,null,w.$ti.k("hy<1>"))
u.e=w
u.Xo()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQT()
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hy(A.Hh,w.b,w.c,w.d,w.$ti)}v.Xo()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.d()
return v.my(d,w)},
t(){this.aQT()
this.a3()},
Xo(){var w,v=this
v.d=v.a.c.lQ(new C.fh2(v),new C.fh3(v),new C.fh4(v))
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hy(A.a0D,w.b,w.c,w.d,w.$ti)},
aQT(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.aye.prototype={
my(d,e){return this.e.$2(d,e)}}
C.anm.prototype={
S(){return C.i9X()},
bv(){return this.r.$0()}}
C.ri.prototype={}
C.aD_.prototype={
aeP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hvy(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hvA(s),$async$aeP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeP,v)},
YR(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at1(t.a.c),$async$YR)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.ch5(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.as_(t.a.c),$async$YR)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.l(new C.dmS(t,s))
if(!s)t.aeP()
case 1:return B.h(u,v)}})
return B.i($async$YR,v)},
aep(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aep=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGF(),$async$aep)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dn2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
Z(){var w,v,u=this
u.bzv()
$.tX=$.tX+1
w=u.a
$.bGK=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,aa<q,@>>")
w=B.B(new B.N(w,new C.dnk(),v),v.k("ak.E"))
u.f=w
u.aep()
u.KA()
u.YR()
u.e=B.de(A.oJ,new C.dnl(u))},
KA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$KA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aj3(t.a.d.bd)
w=3
return B.b(C.h_G(t.a.d.bd),$async$KA)
case 3:s=e
if(t.c==null){w=1
break}C.aj3(t.a.d.bd)
if(s!=null)t.l(new C.dna(t,s))
else t.l(new C.dnb(t))
case 1:return B.h(u,v)}})
return B.i($async$KA,v)},
t(){C.b2v()
var w=this.e
if(w!=null)w.a1(0)
this.bzu()},
ajH(d,e,f){return this.cAd(d,e,f)},
cAd(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.imQ(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aj4(t.a.d.bd),$async$ajH)
case 3:if(t.c==null){w=1
break}t.l(new C.dnd(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.c("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajH,v)},
Jj(d,e){return this.cl_(d,e)},
c7G(d){return this.Jj(d,null)},
cl_(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uD(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aS2(s)<=0){t.c.L(x.q).f.U(D.aWb)
w=1
break}}w=5
return B.b(C.as_(t.a.c),$async$Jj)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.heC(r,C.fUs(q.c),p),$async$Jj)
case 6:w=1
break
case 4:o=new C.dn5(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hG(r,new C.aFR(p,q.d,q.f,q.r,new C.dn6(o),q.w,C.fUs(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hG(q,new C.anl(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dn7(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
c4J(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aj3(i.a.d.bd)
C.aj3(i.f)
w=C.ixX(i.a.c.a,i.f)
v=C.imP(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bL
if(!u){t=A.d.gH(w)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=J.a6(t)
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
return B.o(h,B.x(B.a([D.h3p,B.c(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.nr,h,h,h),A.P,B.A(B.a([B.E(B.dU(A.LJ,new C.dmY(i,t),h),1),A.aa,B.E(B.bJ(D.hcQ,h,new C.dmZ(i,t),h),1)],n),A.l,h,A.e,A.h,0,h,h)],n),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.m),h,h,h,A.eb,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dA(i.y,new C.dn_(m),new C.dn0(i))
k=C.hlg(m,i.a.c.a,i.r)
j=C.aS2(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fW7,B.c(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.nr,h,h,h),A.au,B.c(C.ipv(m,i.a.c.a),h,h,h,h,h,h,A.WH,h,h,h),A.P,B.bJ(D.h2G,h,new C.dn1(i,l,m),h)],x.p),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.m),h,h,h,A.eb,A.bl,h,h,1/0)},
bWo(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fnG.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.ET(w[v])
t=A.i.D(u.d*0.58,0.12,0.3)
l.push(new B.rF(u.a,u.b,A.i.D(u.c*0.92,0,0.9),t).jd())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.H,B.a0(89,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.hP,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.W(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iZ,B.x(B.a([B.A(B.a([B.E(B.c(d.b,n,n,n,n,n,n,A.jY,n,n,n),1)],o),A.l,n,A.e,A.h,0,n,n),A.au,B.c(d.c,n,2,A.a2,n,n,n,A.q9,n,n,n)],o),A.B,n,A.b9,A.h,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c5k,n,n,n,new C.dmU(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a1p,B.o(n,D.c3h,A.f,n,n,new B.n(B.a0(71,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),n,B.K(B.a0(A.i.T(229.5),s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1.6),n,B.a([new B.ab(0,A.H,B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.m),n,92,n,A.eb,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dmV(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nL:A.qD,k=m?A.iR.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iR:A.c,h=m?A.c.j(0.08):A.bn,g=m?A.c:A.a_,f=m?A.bs:A.ci
if(!o.x)return C.aSB(n,l,B.as(B.n4(n,m?A.c:A.bh,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fUs(o.a.c)
return new C.OH(o.a.w,w,!0,o.gaVY(),n)}w=B.aE(d,A.dF,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.H,A.v.j(0.04),A.cO,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.c("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wt(new C.dnh(o,f,g),n,$.aU5(),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.m),n,n,n,n,A.a1E,n,n,1/0),A.S,o.c4J()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbWn(),B.T(v).k("N<1,w>")))
w=B.cc(B.x(s,A.l,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ab(0,A.H,A.v.j(m?0.28:0.08),A.hP,15)],t)
u=B.K(m?A.c.j(0.1):A.bn,A.r,1)
t=B.aH(n,n,n,n,B.W(A.eG,j,n,n,n,18),n,n,n,o.gaVY(),n,n,n,n,n,n)
q=B.E(B.as(B.c("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oV(!0,C.aSB(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OY,B.o(n,B.A(B.a([t,q,new B.D(A.iZ,B.o(n,B.A(B.a([D.c0l,A.e5,C.asR(new C.dni(o),A.kO,o.a.c.a)],r),A.l,n,A.e,A.M,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.m),n,n,n,n,A.hk,n,n,n),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.m),n,60,n,n,A.nb,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dnj(o),x.K)},
aVZ(){var w,v
this.a.bv()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j5(w,v)}}
C.aFR.prototype={
S(){return new C.bn5()},
hK(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aKc(){return this.r.$0()}}
C.bn5.prototype={
Z(){this.bAw()
this.d=B.Wr(this.a.d.bh)
$.tX=$.tX+1},
t(){C.b2v()
this.bAv()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.d()
return new C.arp(v,new C.e0w(w),u,new C.e0x(w),new C.e0y(w,d),new C.e0z(w),null)}}
C.anl.prototype={
S(){return new C.aCZ(new B.at(A.ax,$.ax()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aKc(){return this.z.$0()}}
C.aCZ.prototype={
Z(){this.bzt()
this.a.toString
$.tX=$.tX+1},
t(){C.b2v()
var w=this.d
w.V$=$.ax()
w.R$=0
this.bzs()},
a3R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OR()
w=5
return B.b(C.as_(t.a.c),$async$a3R)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.heC(s,C.fUs(r.c),q),$async$a3R)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uD(s.d.bd,A.a.i(r))
if(p!=null&&C.aS2(p)<=0){t.c.L(x.q).f.U(D.aWb)
w=1
break}}o=B.cA(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.U(D.fvk)
w=1
break}m=B.Me(t.a.c.a,new C.dmM(t))
if(m+0.001<n){t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.c("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aKc()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.db(r,q.c.a,n,A.kx,A.fE,"Game bet: "+q.f,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.fns.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hG(s,new C.aqe(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hG(s,new C.ann(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3R,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.IG,o,o,o,new C.dmP(d),o,o,o,o,o,o),k=p.a,j=B.c(k.f,o,o,o,o,o,o,A.cH,o,o,o),i=B.m(12),h=x.p
j=B.eR(B.a([B.o(o,B.as(C.asR(new C.dmQ(p),A.iP,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.m),o,o,o,D.bED,A.f6,o,o,o)],h),o,o,!0,!0,D.a0y,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.W(D.bRX,D.byg,o,o,o,28)
w=p.a
v=B.c(w.f,o,o,o,o,o,o,A.m6,o,o,o)
w=B.c(w.r,o,o,o,o,o,o,A.nr,o,o,o)
u=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dmR(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.h,0,o,o)
r=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.o(o,B.x(B.a([D.hew,A.S,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m7,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e9,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a8x.m()>>>16&255,A.a8x.m()>>>8&255,A.a8x.m()&255),A.r,1)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fVu,B.c("+ $"+A.i.ab(n*0.46,2),o,o,o,o,o,o,D.fL6,o,o,o),B.c("(46% return on $"+A.i.ab(p.e,2)+" bet)",o,o,o,o,o,o,A.q9,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h3H,A.P,q,A.P,B.o(o,B.x(B.a([D.fQd,B.c("$"+A.i.ab(m,2),o,o,o,o,o,o,D.fzI,o,o,o),B.c("8 pairs \xd7 $"+A.i.ab(m,2)+" each",o,o,o,o,o,o,A.q9,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(D.bty,o,r,u,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
r=B.fv(o,o,A.bh,o,o,o,o,o,o,A.c,o,A.hp,o,o,o,o,o,o,o,o)
return C.aSB(j,D.a0y,B.cc(B.o(o,B.x(B.a([k,A.au,v,A.bC,w,A.S,t,A.P,u,A.S,new B.a5(1/0,o,B.iB(B.c("Start Game ($"+A.i.ab(p.e,2)+")",o,o,o,o,o,o,A.cb,o,o,o),p.gcEd(),r),o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.cbB,A.m),o,o,o,o,A.eW,o,o,1/0),A.t,o,A.y,o,o,A.a1H,o,o,A.ah))}}
C.ann.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aD0(A.cU,new B.at(A.ax,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aQ(u),B.aQ(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aD0.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rY(d){return this.bUw(d)},
bUw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AT()
r=t.PD()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acO(d),$async$rY)
case 5:w=1
break
case 4:q=A.i.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.uC(d),$async$rY)
case 9:w=7
break
case 8:w=10
return B.b(t.Fh(q,s,r),$async$rY)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rY,v)},
FU(d,e,f,g){return this.cBU(d,e,f,g)},
cBU(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHN(s,C.bHt(),C.hnq(),d,e,f,g),$async$FU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FU,v)},
AT(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6p(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.d()
return u+C.ajf(t,s.e.a.a)
case"memory":return s.ghR()&&D.nm.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aBd()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aBd(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
PD(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.d()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hlk()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fUx(w.e,w.d.y2)
if(v!==C.fUx(d.e,d.d.y2)&&u.c!=null)u.l(new C.doE(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzx()
w=i.a
w.toString
$.tX=$.tX+1
i.Q=C.fUx(w.e,w.d.y2)
i.b9i()
i.ae8()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.Q0()
i.adM()
i.bn=B.de(A.h9,new C.doH(i))}if(A.d.q(D.Th,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uD(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a6(u)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2t(!1,w,k.length===0||A.a.q(k,"@")?C.hlg(u,v,null):k,p,l,s)}else{w=w.c
w=C.heG(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.heG(w.c,w.a)}v=C.i3j()
v.btb(i.a.e,i.d,w)
i.b0=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uD(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b0
w.toString
w.beK(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.UM
else j=w.f===!0?D.rl:D.JZ
i.AV(j)}}}i.b3=B.de(A.n9,new C.doI(i))
if(i.ghR())i.bi=B.de(A.n8,new C.doJ(i))}if(i.ghR()&&!A.d.q(D.Th,i.a.e))i.bi=B.de(A.n8,new C.doK(i))
i.as=B.de(A.fU,new C.doL(i))},
Q0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uD(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFH(p,t.a.c.a),$async$Q0)
case 5:o=e
if(t.c!=null)t.l(new C.dnU(t,o))
w=1
break
case 4:w=6
return B.b(C.M4(q,t.a.d.bd,!1),$async$Q0)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFH(n,t.a.c.a),$async$Q0)
case 7:o=e
if(t.c!=null)t.l(new C.dnV(t,o))
case 1:return B.h(u,v)}})
return B.i($async$Q0,v)},
akN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M4(r,s.d.bd,!1),$async$akN)
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
t.aQE(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.i.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.don(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.l(new C.doo())}case 1:return B.h(u,v)}})
return B.i($async$akN,v)},
adM(){var w=0,v=B.j(x.H),u=this
var $async$adM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a28(!0),$async$adM)
case 2:return B.h(null,v)}})
return B.i($async$adM,v)},
a28(d){return this.cr0(d)},
cr_(){return this.a28(!1)},
cr0(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a28=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.M4(q,s.d.bd,b3),$async$a28)
case 3:o=b5
if(o==null)o=C.uD(t.a.d.bd,q)
if(o==null){w=1
break}s=J.a6(o)
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
if(a3.length!==0){s=B.bh(a3)
a4=s==null?null:s.bU()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bh(J.k(r==null?"":r))
a6=r==null?null:r.bU()}else a6=null
if(f){r=a1.h(0,g)
r=B.bh(J.k(r==null?"":r))
a7=r==null?null:r.bU()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cc(a7)?a6:a7).bQ(5e5)
if(!new B.V(Date.now(),0,!1).cZ(a8)){a4=b2.a=a8.bQ(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.iuF(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.l(new C.do9(b2,t,b0))
w=1
break}if(s==null){t.l(new C.doa(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.cZ(s)){s=s.bz(b1).a
r=A.o.ar(s,1e6)
t.l(new C.dob(b2,t,r+(A.o.F(A.o.ar(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.l(new C.doc(b2,t))
b2=t.a.e
if(b2==="pattern")t.aaB()
else if(b2==="memory"){t.b9h()
if(t.c!=null)t.l(new C.dod())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a28,v)},
aRB(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRA(){return this.aRB(null)},
aaB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cos()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.M4(q,s.d.bd,!1),$async$aaB)
case 5:r=t.b5a(e)
case 4:if(t.c==null){w=1
break}t.aRB(r)
t.l(new C.dnm(t))
t.Ev()
case 1:return B.h(u,v)}})
return B.i($async$aaB,v)},
b5a(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.i.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
cos(){var w=this.a,v=w.Q
if(v==null)return null
return this.b5a(C.uD(w.d.bd,v))},
ae8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ae8)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.l(new C.dnT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae8,v)},
pD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pD)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bIf().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aF("Int","ngmy_game_"+n+"_"+o,r),$async$pD)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pD,v)},
a48(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a48=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.b0==null||t.f||t.aZ){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M4(r,s.d.bd,!1),$async$a48)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uD(r,s)
s=p==null
if(!s){r=J.cG(p)
r.a8(p)
r.u(p,q)}r=J.a6(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bh(J.k(r==null?"":r))
s=s?null:J.t(p,"sessionUpdatedAt")
l=B.bh(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cc(l)){w=1
break}s=t.b0
s.toString
r=t.a
s.beK(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.UM
else k=r.f===!0?D.rl:D.JZ
w=7
return B.b(t.AV(k),$async$a48)
case 7:w=5
break
case 6:if(t.c!=null)t.l(new C.dop())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a48,v)},
aiF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aiF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b0==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b0
o.toString
p=o.cUx(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aT_(n,o,p),$async$aiF)
case 6:q.a.bv()
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
return B.i($async$aiF,v)},
AV(d){return this.c0S(d)},
c0S(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$AV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.b0==null){w=1
break}s=t.b0.w
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
return B.b(t.K9(s,s),$async$AV)
case 9:w=4
break
case 6:w=10
return B.b(t.Zc(s,s),$async$AV)
case 10:w=4
break
case 7:w=11
return B.b(t.acN(s,s),$async$AV)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghR()?12:13
break
case 12:w=14
return B.b(t.Iz(),$async$AV)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$AV,v)},
a16(d,e){return this.ciJ(d,e)},
ciJ(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a16=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aiF(),$async$a16)
case 6:if(d===D.rk){w=1
break}w=4
break
case 5:if(d===D.rk){w=1
break}case 4:w=7
return B.b(t.AV(d),$async$a16)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a16,v)},
ae1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ae1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uD(s.d.bd,q)
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
return B.b(C.aT_(t.a.d.bd,q,l),$async$ae1)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$ae1,v)},
Iz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uD(s.d.bd,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.S(s,r)
n.n(0,"gameOver",!0)
C.ho0(t.a.d.bd,q,n)
C.iy9(t.a.d.bd,q)
w=3
return B.b(C.aj4(t.a.d.bd),$async$Iz)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iz,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.ae1()
else if(!v.f)v.c7H()
C.b2v();++v.RG
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
v.bzw()},
cHw(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.d()
v=v<=0||w.b0==null}if(v)return
if(w.c7)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.uC("Goal completed!")
return}v=++w.rx
if(v%5===0)w.l(new C.doy())},
b9i(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b9h()
break
case"scramble":r.bh=0
r.b9j()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dAQ[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bN(0,A.ch)
break
case"math":r.y2=0
r.b9g()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b9k()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.ctt()){w=J.e4(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RQ()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRA()
w=B.v(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Ev()}break
case"color":r.bd=0
r.b9b()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.bax()
break
default:if(A.d.q(D.Th,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6p(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ctt(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b9k(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
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
b9g(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bIf().length-6)u.at=0
w=$.bIf()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b9j(){var w=this,v=w.w=D.dbr[A.o.F(w.at+w.bh,105)]
w.ax=C.iyq(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bN(0,A.ch)},
bax(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.du(0,0,0,120+w.d.aw(280),0,0),new C.dom(w))},
c0V(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rY("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ar(new B.V(v,0,!1).bz(u).a,1000)}if(w<520){t.l(new C.dnR(t))
v=t.a0
if(v>=5){t.pD()
t.uC("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.bax()
t.l(new C.dnS())}}else t.rY("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cGK(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dot())
if(u<0)return
t.l(new C.dou(t,u,v,d))},
cGL(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.l(new C.dov(u,d,v))},
bLj(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dnn())){u.c.L(x.q).f.U(D.fve)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.d()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.l(new C.dno(u))
if(u.ghR()&&D.nm.q(0,u.a.e))u.a2n()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nm.q(0,u.a.e))u.nm(!0)
else u.uC("All 5 words unscrambled!")}else{u.b9j()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.l(new C.dnp())}}else u.rY("Wrong word \u2014 paid for "+u.bh+"/5.")},
b9b(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dS,A.dP,A.iw,A.tP][u]
w.w=t},
aQE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aQ(x.S)
for(s=J.ic(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.ck),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.i.M(m):B.cb(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.i.be(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.t(j,g))
i=f==null?null:A.i.M(f)
if(i!=null)h.fx=i}},
b9h(){var w,v,u,t,s,r,q,p=this
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
u=C.uD(v,w)
t=u==null?null:J.t(u,"sessionState")
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
p.aQE(s)}else A.d.e0(p.fr,p.d)},
cqk(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.l(new C.do2(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.l(new C.do3(t,v,u))
if(t.ghR()&&D.nm.q(0,t.a.e))t.a2n()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nm.q(0,t.a.e))t.nm(!0)
else t.aBg()}return}t.k1=!0
B.bN(D.bDA,new C.do4(t),x.c)},
b8F(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.d()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.l(new C.doe(u))
if(u.y1>=5){u.pD()
u.uC("All 5 questions correct!")}else{u.b9k()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.l(new C.dof())}}else u.rY(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.l(new C.dog(u))
if(u.y2>=6){u.pD()
u.uC("All 6 math questions correct!")}else{u.b9g()
u.r="Question "+(u.y2+1)+" of 6"
u.l(new C.doh())}}else{u.X9(u.y2+1)
u.rY(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.l(new C.doi(u))
if(u.bd>=5){u.pD()
u.uC("All 5 color rounds correct!")}else{u.b9b()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.l(new C.doj())}}else u.rY("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aBg()}else u.c.L(x.q).f.U(D.fvZ)},
cGJ(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cd(q.k4,0)
v=A.o.ar(d,3)
u=A.o.F(d,3)
t=A.o.ar(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.l(new C.dos(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aBg()}}},
RQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.l(new C.do5(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.do6(t,q).$0()
t.c.er()
w=6
return B.b(B.bN(A.l0,null,r),$async$RQ)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.do7(t).$0()
t.c.er()
w=7
return B.b(B.bN(A.kb,null,r),$async$RQ)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.l(new C.do8(t))
case 1:return B.h(u,v)}})
return B.i($async$RQ,v)},
cGM(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rY("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.l(new C.dow(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uC("Perfect Simon run!")
return}u.l(new C.dox(u))
u.RQ()}},
Ev(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ev=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.l(new C.dnq(t))
s=x.H
w=3
return B.b(B.bN(A.jx,null,s),$async$Ev)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dnr(t,o).$0()
t.c.er()
w=7
return B.b(B.bN(A.a1g,null,s),$async$Ev)
case 7:if(t.c==null){w=1
break}new C.dns(t).$0()
t.c.er()
w=8
return B.b(B.bN(A.iX,null,s),$async$Ev)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.l(new C.dnt(t))
case 1:return B.h(u,v)}})
return B.i($async$Ev,v)},
X9(d){return this.bFP(d)},
bFP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X9)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bIf().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aF("Int","ngmy_game_"+q+"_"+r,o),$async$X9)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X9,v)},
cGG(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rY("Wrong tile \u2014 paid for "+v.aBd()+"/"+C.hlk()+" moves.")
return}v.l(new C.doq(v,w))
if(v.ghR()&&D.nm.q(0,v.a.e))v.a2n()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nm.q(0,v.a.e))v.nm(!0)
else v.uC("All 7 pattern rounds correct!")}else{v.l(new C.dor(v))
v.Ev()}},
K9(d,e){return this.coI(d,e)},
uC(d){return this.K9(null,d)},
aBg(){return this.K9(null,null)},
coI(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.l(new C.do0(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.db(q,s.c.a,r,A.hf,A.fE,"Game payout: "+s.f,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj0(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.i.ab(r,2)+" added to your balance!":e
s=t.a
C.vi(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FU(d,o,"YOU WIN!",!0),$async$K9)
case 3:w=4
return B.b(C.aiT(t.a.f,o),$async$K9)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K9,v)},
FS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nm.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cAY(),$async$FS)
case 5:w=1
break
case 4:s=t.AT()
r=t.PD()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acO("Time's up \u2014 no progress to pay."),$async$FS)
case 8:w=1
break
case 7:q=A.i.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uC("Complete! Max payout earned."),$async$FS)
case 12:w=10
break
case 11:w=13
return B.b(t.Fh(q,s,r),$async$FS)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FS,v)},
RX(d){return this.ct7(d)},
a2n(){return this.RX(!1)},
ct7(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RX=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nm.q(0,r.a.e))||r.a.Q==null){w=1
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
a4=C.uD(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.M4(q,r.a.d.bd,!1),$async$RX)
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
J.aJ(k,p,r.AT())
J.aJ(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
i=a2.b(j)?B.a1(j,a3,a5):B.S(a3,a5)
a6=r.id
a6=B.B(a6,B.a4(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aQ(x.S)
for(a6=i,a6=new B.dq(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.i.M(f):B.cb(J.k(f),null)
if(e!=null)J.c6(h,e)}}a6=h
a6=B.B(a6,B.a4(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aT_(r.a.d.bd,q,m),$async$RX)
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
return B.i($async$RX,v)},
nm(d){return this.cAZ(d)},
cAY(){return this.nm(!1)},
cAZ(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FS(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RX(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.M4(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PD()
w=o==null?8:9
break
case 8:m=A.i.D(t.AT()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acO("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uC("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Fh(m,t.AT(),n),$async$nm)
case 18:case 15:case 11:w=19
return B.b(t.Iz(),$async$nm)
case 19:w=1
break
case 9:s=J.a6(o)
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
if(a0==null)a0=t.AT()
d=B.aI(e.h(0,j))
a1=d==null?null:A.i.M(d)
if(a1==null)a1=0
a2=A.i.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.acO("Time's up \u2014 no progress to pay."),$async$nm)
case 22:w=23
return B.b(t.Iz(),$async$nm)
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
t.l(new C.dok(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.i.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.db(h,b0,a9,A.hf,A.fE,d,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.i.ab(a9,2)+" (includes opponent bonus $"+A.i.ab(a7,2)+")":"+$"+A.i.ab(a8,2)+" (your progress payout)"
s=t.a
C.vi(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FU(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Iz(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fh(d,e,f){return this.coG(d,e,f)},
coG(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.l(new C.dnZ(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.db(s,q.c.a,r,A.hf,A.fE,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj0(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.i.T(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.d()
m=q+C.ajf(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.do_()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.i.ab(r,2)+" ("+n+"% \u2014 "+B.v(k)+" mistakes/missed)":"+$"+A.i.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vi(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FU(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fh)
case 3:w=4
return B.b(C.aiT(t.a.f,j),$async$Fh)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fh,v)},
c7H(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AT()
v=o.PD()}catch(u){return}if(v<=0||w<=0)return
t=A.i.D(w/v,0,1)
s=B.ov(A.i.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.db(q,p.c.a,s,A.hf,A.fE,"Game partial: "+p.f+" ("+B.v(w)+"/"+B.v(v)+", left early)",n,n,A.cx,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vi(s,n,"Left early \xb7 +$"+A.i.ab(s,2)+" ("+B.v(w)+"/"+B.v(v)+")",q,r,p,n,!0)},
acN(d,e){return this.bWi(d,e)},
bWi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acN=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.db(r,q,p,A.hf,A.fE,"Game payout: "+s+" (draw, stake returned)",null,null,A.cx,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vi(o,null,"Draw. Your $"+A.i.ab(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FU(d,"Nobody won, so your $"+A.i.ab(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acN,v)},
Zc(d,e){return this.bWj(d,e)},
acO(d){return this.Zc(null,d)},
bWj(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Zc=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.vi(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FU(d,e,"YOU LOSE",!1),$async$Zc)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Zc,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.d()
w=A.o.ar(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.atv,n,n,n,new C.doz(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.c(u?t.f+" vs "+B.v(o.bH):t.f,n,2,A.a2,n,n,n,A.fM,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asR(new C.doA(o),A.np,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.m),n,n,n,n,A.fW,n,n,n)],q),A.l,n,A.e,A.h,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.c("Win $"+A.i.ab(t.x*1.46,2)+" \xb7 stake $"+A.i.ab(o.a.x,2)+" \u2022 Progress "+o.AT()+"/"+o.PD(),n,n,n,n,n,n,D.fFh,n,n,n),1),new C.as1(o.a.c.a,new C.doB(o),n),A.aa,D.bWJ,A.db,B.c(""+w+":"+m,n,n,n,n,n,n,A.ok,n,n,n)],q),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.m),n,n,n,n,A.hj,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.doC(),m),m.k("ak.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSB(n,D.bhs,B.bm(!0,new B.D(A.Hx,B.x(B.a([r,s,A.P,new B.fh(new C.doD(o),n),A.al,B.E(B.o(n,o.bWh(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.m),n,n,n,n,A.cr,n,n,n),1)],q),A.am,n,A.e,A.h,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255)
w=B.a0(242,A.iV.m()>>>16&255,A.iV.m()>>>8&255,A.iV.m()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.dp(!1,B.o(n,B.x(B.a([D.frh,A.af,B.c(o.cT,n,n,n,n,n,n,D.fGR,A.K,n,n),A.al,B.c(o.bT,n,n,n,n,n,n,D.fEY,A.K,n,n)],q),A.l,n,A.e,A.M,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.m),n,n,n,A.tm,A.zq,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8I(){var w=this.k3
return B.ce(new C.dnY(this,w,A.i.cD(this.fr.length/w)))},
bWh(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8I()
if(m==="scramble"){m=o.r
m===$&&B.d()
w=x.l
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q9,n,n,n),B.c("Words "+o.bh+"/5",n,n,n,n,n,n,A.FA,n,n,n),A.af,B.c("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.S,B.bZ(A.fQ,B.iD(o.ay.length,new C.dnG(o),!0,w),A.br,n,6,6),A.aO,B.bZ(A.fQ,B.iD(o.ch.length,new C.dnH(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iB(D.h7n,o.gbLi(),B.fv(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cm,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.d()
return new C.aum(m,o.e,new C.dnI(o),new C.dnJ(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.d()
m=B.a([B.c(m,n,n,n,n,n,n,A.q9,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.c(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.FA,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.d()
w+=", ?"}else w=o.CW
m.push(new B.dk(A.dC,A.z,A.f,B.c(w,n,n,n,n,n,n,A.m6,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dnK(o),B.T(w).k("N<1,w>")))
return B.x(m,A.l,n,A.e,A.h,0,A.p)}if(m==="puzzle")return B.ce(new C.dnL(o))
if(m==="simon"){m=o.r
m===$&&B.d()
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q9,n,n,n),B.c("Progress "+o.p3+"/21",n,n,n,n,n,n,A.FA,n,n,n),A.P,B.E(B.l2(1,B.iD(4,new C.dnM(o),!0,x.l),2,10,10,n,A.e2,!1),1)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="pattern")return B.ce(new C.dnN(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dS,A.dP,A.iw,A.tP]
m=o.r
m===$&&B.d()
m=B.c(m,n,n,n,n,n,n,A.q9,n,n,n)
w=B.c("Round "+o.bd+"/5",n,n,n,n,n,n,A.FA,n,n,n)
v=o.aL
v===$&&B.d()
s=o.aR
s===$&&B.d()
s=B.a([m,w,A.af,B.c(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fv(n,n,B.a0(217,m.m()>>>16&255,m.m()>>>8&255,m.m()&255),n,n,n,n,n,n,A.c,n,n,A.fa,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a5(1/0,n,B.iB(B.c(u[q],n,n,n,n,n,n,A.cH,n,n,n),new C.dnO(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.h,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bh:A.c9
w=o.r
w===$&&B.d()
w=B.c(w,n,n,n,n,n,n,A.acM,A.K,n,n)
v=B.c("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fC9,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.c(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aE(s,A.bY,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qu(B.ay(A.c1,B.cT(n,B.x(B.a([w,A.P,v,A.aY,s,A.aY,new B.D(A.Ht,B.c(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.h,0,A.p),p,n,A.b_,n,M.CS,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0U(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.Th,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.ino(m,new C.dnP(o),new C.dnQ(o),o.d,w)}m=o.r
m===$&&B.d()
return B.as(B.c(m,n,n,n,n,n,n,A.dl,n,n,n),n,n,n)}}
C.ao9.prototype={
S(){return new C.bk8()},
d_o(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bk8.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aE(a3,A.dF,a0).w
a0=B.aE(a3,A.dF,a0).w
v=x.p
u=B.a([B.bUY(!1,e.a.r,"INVESTMENT PLANS",d),A.dc],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bL(s)),2,"0")
q=A.a.aY(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.CB,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.H,B.a0(89,A.rT.m()>>>16&255,A.rT.m()>>>8&255,A.rT.m()&255),A.eS,20),new B.ab(0,A.H,B.a0(102,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.dm,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.CB,A.r,3.4)
n=B.a([new B.ab(0,A.H,B.a0(166,A.rT.m()>>>16&255,A.rT.m()>>>8&255,A.rT.m()&255),A.dQ,10),new B.ab(0,A.H,B.a0(89,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.cO,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dnw,D.cXF,d),A.m),d,42,d,d,d,d,d,56),A.aY,e.bbs(a3,!0)],v),A.l,d,A.e,A.h,0,d,d)
k=B.Es(t.a,1,A.a2,D.fKg)
j=t.b
i=t.c
h=B.Es("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fKv)
g=B.Es(e.b6b(j),1,A.a2,D.fD1)
q=B.A(B.a([B.E(B.x(B.a([D.h09,B.Es(a1.c,1,A.a2,D.aYd)],v),A.B,d,A.e,A.h,0,A.p),1),B.x(B.a([D.h_V,B.c(r+"/"+q,d,d,d,d,d,d,D.aYd,d,d,d)],v),A.dG,d,A.e,A.h,0,A.p)],v),A.l,d,A.e,A.h,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yP.m()>>>16&255,D.yP.m()>>>8&255,D.yP.m()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.au0("INVESTED","$"+B.dG(j),!0),e.au0("DAILY ROI",A.i.ab(i*100,2)+"%",!0),e.au0("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j6,A.h,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h6U,A.rv,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fZw,A.bC,k,A.au,h,A.au,g,A.P,q,A.al,r,A.al,i,A.au,B.Es("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fJC)],v),A.B,d,A.e,A.M,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cct,A.m),d,d,d,d,A.bH,d,d,1/0),A.ac4],v))}u.push(D.fR_)
u.push(A.rv)
A.d.u(u,new B.N(a2,new C.dsd(e,a3),B.T(a2).k("N<1,w>")))
return B.c5(d,A.L,B.bm(!1,B.cc(B.x(u,A.B,d,A.e,A.h,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbs(d,e){var w=null,v=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(8),t=B.K(A.k7,A.r,1)
return B.o(w,B.A(B.a([B.W(A.a40,A.c,w,w,w,16),A.db,B.c("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.eX,w,w,w)},
b6b(d){var w=A.a.b1(A.o.v(A.i.T(d*100)),4,"0")
return"****  ****  ****  "+A.a.aY(w,w.length-4)},
au0(d,e,f){var w=null,v=B.a0(217,D.yP.m()>>>16&255,D.yP.m()>>>8&255,D.yP.m()&255)
v=B.c(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bC,B.Es(e,w,w,B.l(w,w,A.Cy,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.B,w,A.e,A.h,0,A.p)},
cqP(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd4f(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ab(0,A.H,B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.V6,16),new B.ab(0,A.H,B.a0(115,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),A.dm,14),new B.ab(0,A.H,B.a0(51,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.cO,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),B.a0(0,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.m()>>>16&255,k.m()>>>8&255,k.m()&255)
j=B.a0(A.i.T(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ab(0.5,A.H,k,A.J,14),new B.ab(0,A.H,j,A.J,6),new B.ab(0,A.H,B.a0(140,i.m()>>>16&255,i.m()>>>8&255,i.m()&255),new B.r(0,2),4)],p),D.cb0,A.m),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eH1],h),d),d),A.aY,e.bbs(b2,!0)],h),A.l,d,A.e,A.h,0,d,d)
a6=B.Es(a6,1,A.a2,D.fzp)
i=B.Es(e.b6b(a3),1,A.a2,D.fPb)
j=B.A(B.a([e.b5C(A.i.ab(2.86,2)+"%"),A.e5,e.b5C("261d")],h),A.l,d,A.e,A.h,0,d,d)
k=B.E(B.x(B.a([D.fSm,B.Es("$"+B.dG(a3),1,A.a2,D.fNV)],h),A.B,d,A.e,A.h,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.c(m,d,d,d,d,d,d,D.fAf,d,d,d)],h),A.dG,d,A.e,A.h,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.m()>>>16&255,A.bz.m()>>>8&255,A.bz.m()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBv("Daily","$"+B.dG(a4)),1),A.e5,B.E(e.aBv("Total","$"+B.dG(a4*261)),1),A.e5,B.E(e.aBv("Days","261"),1)],h),A.l,d,A.e,A.h,0,d,d)
g=q?d:new C.dsc(e,b3,a3,t)
f=A.i.T(127.5)
f=B.fv(d,d,A.bs,B.a0(f,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),B.a0(f,A.bn.m()>>>16&255,A.bn.m()>>>8&255,A.bn.m()&255),d,3,d,d,A.aS,d,d,d,d,new B.b9(B.m(10),D.b7k),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bC,D.h0U,A.bC,a6,A.cT,i,A.fK,j,A.fK,m,A.fK,k,A.fK,l,A.P,new B.a5(1/0,40,B.iB(new B.dk(A.dv,A.z,A.f,B.c(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fAM,d,d,d),d),g,f),d)],h),A.B,d,A.e,A.M,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.cd4,A.m),d,d,d,A.kG,D.bFm,d,d,1/0)},
b5C(d){var w=null,v=B.a0(115,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.c(d,w,w,w,w,w,w,D.fzO,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.zu,w,w,w)},
aBv(d,e){var w=null,v=B.a0(97,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(7),t=B.K(A.bn,A.r,1)
return B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,D.fJY,w,w,w),A.rw,new B.dk(A.dC,A.a5,A.f,B.c(e,w,w,w,w,w,w,D.fMU,w,w,w),w)],x.p),A.B,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.lY,w,w,w)}}
C.akc.prototype={
S(){var w=null,v=B.a([],x._),u=$.ax()
return new C.aA2(v,new B.at(A.ax,u),new B.at(A.ax,u),B.mt(0,w,w),new B.i8(),D.UB,C.aiP(),B.a([],x.fw),B.aQ(x.N),B.mt(0,w,w))}}
C.aA2.prototype={
Z(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=B.Ao(0,1)
r.e!==$&&B.aR()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.aed()
r.Q_()
r.atC()
r.cE_()
r.cEf()
$.aU.x1$.push(new C.cOJ(r))
r.a.toString},
Q_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asq(),$async$Q_)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.cO3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q_,v)},
gaD8(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPU())return!0
return!1},
gPU(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYW(){var w,v=this.CW
if(v==null)return A.bF
w=v.bz(new B.V(Date.now(),0,!1))
return w.a<0?A.bF:w},
bGC(){var w=this
if(w.a.c.w)return
if(w.gPU()){if(!w.cx)w.l(new C.cNU(w))}else if(w.cx)w.l(new C.cNV(w))},
cx7(){this.l(new C.cOd(this))},
uL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.l(new C.cOa(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.l(new C.cOb(t))
w=1
break}w=3
return B.b(C.chJ(o.a,s),$async$uL)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.chK(t.a.c.a,s),$async$uL)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.l(new C.cOc(t,r,q))
t.cG8()
t.bGC()
if(r===3)t.a_j(r)}case 1:return B.h(u,v)}})
return B.i($async$uL,v)},
a_j(d){return this.c8A(d)},
c8A(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHR(q,r,new C.cO5(t),d,s.c.a),$async$a_j)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_j,v)},
yg(d){return this.bIb(d)},
atC(){return this.yg(!1)},
bIb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9I(k,C.hLn(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.cia(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.ati(k),$async$yg)
case 5:r=f
w=!s.a&&J.cK(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.X3(!0,l,q,p)
m.a=s
w=8
return B.b(C.ass(k,s),$async$yg)
case 8:case 7:w=9
return B.b(C.W2(k),$async$yg)
case 9:o=f
w=10
return B.b(C.a94(k),$async$yg)
case 10:n=f
if(t.c==null){w=1
break}t.l(new C.cNW(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Rs(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Rs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Q_(),$async$Rs)
case 3:s=t.c
if(s==null){w=1
break}r=B.e9(new C.cO8(t),!1,null,x.H)
w=4
return B.b(B.a8(s,!1).cb(r),$async$Rs)
case 4:w=5
return B.b(t.Q_(),$async$Rs)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Rs,v)},
cIo(){this.l(new C.cOw(this))},
cEf(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.de(A.nR,new C.cOq(w))},
cG8(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPU()||w.CW==null)return
w.id=B.de(A.fU,new C.cOt(w))},
cE_(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.de(A.jP,new C.cOp(w))
w.G_()},
G_(){return this.cG7()},
cG7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$G_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$G_)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.X.aP(0,p,null)
if(x.f.b(o)){m=B.E9(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Mh(),$async$G_)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSA(),$async$G_)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aF("String","app_config",A.X.av(k.ak(),null)),$async$G_)
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
break}if(i.a!==r.ay)r.l(new C.cOr(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$G_,v)},
ba9(){A.d.b_(this.f,new C.cOo())},
aed(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aed=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O8(t.a.c.a),$async$aed)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cK(q)){A.d.u(s,q)
A.d.b_(s,new C.cO0())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.l(new C.cO1(t,s))
t.a3k(!0)
B.bN(A.jx,new C.cO2(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
ai2(){var w=0,v=B.j(x.H),u=this
var $async$ai2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apZ(u.a.c.a,u.f),$async$ai2)
case 2:return B.h(null,v)}})
return B.i($async$ai2,v)},
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
ada(d){var w,v=this
v.l(new C.cNZ(v,d))
w=v.e
w===$&&B.d()
if(w.f.length!==0)w.C_(d,A.cn,A.l0)
else $.aU.x1$.push(new C.cO_(v,d))
if(d===0)v.a3k(!0)
if(d===1)v.czd(!0)},
a3k(d){$.aU.x1$.push(new C.cOg(this,d))},
aCM(){return this.a3k(!1)},
a2D(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2Z(),$async$a2D)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.l(new C.cO9(t))
case 1:return B.h(u,v)}})
return B.i($async$a2D,v)},
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
return B.b(C.asl(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uL(),$async$nl)
case 10:q.l(new C.cOh(q))
w=1
break
case 8:w=11
return B.b(q.uL(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_j(3)
case 6:case 4:q.l(new C.cOi(q,c5))
C.VP(q.a.c.a,"user",c5)
q.aCM()
t=13
a8={}
w=16
return B.b(q.a2D(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2Z(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.l(new C.cOj(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFV("",null)
q.l(new C.cOk(q,p))
C.VP(q.a.c.a,"ai",p)
q.aCM()
r=[1]
w=14
break}o=B.nq(a9)
a9=q.a
n=""
m=C.hLn(a9.d)
w=C.hLg(c5)?20:21
break
case 20:w=22
return B.b(C.ci9(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9I(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i3c(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bL(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bW(b3)),2,"0")
b5=A.a.b1(A.o.v(B.d1(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fD(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.W2(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hut(i,25)
w=26
return B.b(C.a94(q.a.c.a),$async$nl)
case 26:g=c9
f=C.hwa(g)
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
return B.b(C.aiQ(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hLg(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.v(d)
b4=B.v(j)
b5=q.a.c.w?"\n"+C.iqf(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.v(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.v(a0)+"\n":""
c0=B.v(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hYx(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.v(c5)
w=28
return B.b(B.ro(o,a2,A.ib,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFV(a8.a,a3.a)
a4=c2
a5=B.hKx(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.it1(c5),x.an)
a6=a9
J.h2(a6,C.it2(c5))
J.h2(a6,C.it3(c5))
J.h2(a6,B.hJY(c5))
J.h2(a6,C.it6(c5,q.a.c.w))
a8.b=a6}c3=C.isc(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aj7(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.l(new C.cOl(a8,q,a7))
C.VP(q.a.c.a,"ai",a7)
if(J.cK(a8.b)&&q.c!=null)q.KQ(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.l(new C.cOm(q))
C.VP(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.l(new C.cOn(q))
q.aCM()
q.ai2()
if(!q.a.c.w)q.uL()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpJ(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpK(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.j4
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.cli(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KQ(d){return this.cxG(d)},
cxG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aj2(p,o,new C.cOe(t,p)),$async$KQ)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HL(p,null,o,!1,!0,t.a.c.a),$async$KQ)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lV,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HL(p,l.f,o,k,n,j),$async$KQ)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a6(p)
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
return B.b(C.b0O(p,B.a([new C.rW("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KQ)
case 14:t.atC()
case 13:p=t.c.L(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dr,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KQ,v)},
Tc(d){return this.cGA(d)},
cGA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Tc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aj2(d,n,new C.cOv(t)),$async$Tc)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HL(d,null,n,!1,!0,t.a.c.a),$async$Tc)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b3(null,null,null,A.c9,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.lV,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HL(d,q.f,r,p,n,o),$async$Tc)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b3(null,null,null,A.dr,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Tc,v)},
czd(d){$.aU.x1$.push(new C.cOf(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bB:A.CH,i=m.d
i===$&&B.d()
w=x.O
w=k?B.a([A.alA,D.boI],w):B.a([A.aN,A.yK],w)
v=B.m(22)
u=B.a([new B.ab(0,A.H,B.a0(71,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gclf():l
s=B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hjr(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.c("NGMY Helper",l,1,A.a2,l,l,l,A.dn,l,l,l)
s=B.o(l,l,A.f,l,l,D.b9q,l,8,l,l,l,l,l,8)
if(m.gaD8()&&m.d===0)q=m.gPU()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bb,B.E(B.x(B.a([r,A.bC,B.A(B.a([s,A.bk,B.E(B.c(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.i.T(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),l,l,l,l,l,l,l,l,11,l,l,A.cF,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.h,0,l,l)],p),A.B,l,A.e,A.h,0,A.p),1),B.aH(l,l,l,l,A.o5,l,l,l,new C.cOB(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.m),l,l,l,E.anx,D.bGa,l,l,l)
v=k?D.uC:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dR,A.r,1)
u=B.o(l,B.A(B.a([m.bL3(),m.cGk(1,A.lw,"Music")],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.m),l,l,l,l,A.ey,l,l,l)
t=m.e
t===$&&B.d()
if(m.gaD8()){v=B.a([],p)
if(m.gPU()){s=B.a0(38,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255),A.r,1)
v.push(new B.D(A.OW,B.o(l,B.c(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i1v(m.gaYW())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fMk,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.m),l,l,l,l,A.ex,l,l,1/0),l))}if(m.cy&&!m.gPU()){s=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
r=B.m(12)
q=B.m(12)
o=B.W(A.ki,k?A.iH:A.hW,l,l,l,16)
v.push(new B.D(A.OW,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ex,B.A(B.a([o,A.bk,B.c("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iH:A.hW,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.h,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcx6(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcIn():l
v.push(B.E(new C.aso(s,q,new C.cOC(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.h,0,A.p)}else v=m.bL4(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hx8(r)
t=B.a([w,A.af,new B.D(A.i8,u,l),A.P,B.E(B.hy6(B.a([v,new C.asr(q,o,n,new C.cOD(m,d),s,l)],p),A.t,t,A.y,new C.cOE(m),l),1)],p)
if(m.d===0&&!m.gaD8()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a77:D.a6o
w.push(new B.a5(l,36,B.hN(A.t,l,new C.cOF(m),v.length,l,l,A.aL,new C.cOG(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.e0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.v:A.c
r=B.a0(64,r.m()>>>16&255,r.m()>>>8&255,r.m()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.fy
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.zo,l,l,l,l,!0,new B.b6(4,o,new B.av(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOH(m),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.acn,l,l),1)
s=m.at
r=s?l:m.gcAe()
w.push(B.A(B.a([u,new B.JY(v,A.aN,l),A.bk,B.aF(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.ezQ:O.atn,l),A.cK,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cK,l,l,A.ai)],p),A.dG,l,A.e,A.h,0,l,l))
w=B.x(w,A.l,l,A.e,A.M,0,A.p)
v=k?A.lP:A.c
t.push(B.uE(A.ur,B.o(l,new B.D(A.CV,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(18,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.r,1),A.ur,l,l,A.m),l,l,l,l,l,l,l,l),14,!1))}return new B.XV(i,new C.cOI(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bL3(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.d()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.i.T(255*(v?0.25:0.12)),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.i.T(127.5),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.r,1):q
s=B.W(A.vc,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.aw
else r=A.cC
return B.E(B.ay(q,B.cT(q,B.A(B.a([s,A.bk,B.c("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eI,q,q,q,q,A.qU,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNX(this),q,q,q,q,q,q,!1,A.a4),1)},
cGk(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.d()
w=p===d
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.i.T(255*(v?0.25:0.12)),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.i.T(127.5),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.r,1):q
s=B.W(e,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.aw
else r=A.cC
r=B.a([s,A.bk,B.c(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cT(q,B.A(r,A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eI,q,q,q,q,A.qU,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOu(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bL4(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bvg:B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
w=B.m(18)
v=B.K(d?A.dq:A.bn,A.r,1)
u=q===0?1:q
return B.o(s,B.kw(!0,s,t.ok,new C.cNY(t,e,d),u,s,A.bR,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.m),s,s,s,A.i8,s,s,s,s)},
aSe(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a6(d),m=J.z(n.h(d,"role"),"user"),l=m?A.j4:this.cpK(d),k=m?A.mA:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hjr(this.a.f.Q,28),o),A.aa],j))
w=m?A.dG:A.B
j=B.a([],j)
if(h)j.push(D.eA6)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a0d:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bn,A.r,1)
q=B.a([new B.ab(0,A.H,B.a0(10,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.dQ,6)],x.V)
if(f)n=B.c("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.e0,o,o,o,o,o,o,o,o,12,A.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ac:A.bs
p=B.c(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hf9(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.bc(A.jX,A.jX,new B.aP(t,t),new B.aP(s,s)),q,o,A.m),o,o,o,o,Y.wV,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hKC(l,e,this.gcGz()))
i.push(new B.d6(1,A.cg,B.x(j,w,o,A.e,A.h,0,A.p),o))
if(m)i.push(A.db)
return new B.D(A.d4,B.A(i,A.dG,o,k,A.h,0,o,o),o)},
bL2(d,e){return this.aSe(d,e,!1)}}
C.aNr.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFb())},
t(){$.zo().a6(0,this.gFb())
this.a3()}}
C.aNs.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFb())},
t(){$.zo().a6(0,this.gFb())
this.a3()}}
C.aNt.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFb())},
t(){$.zo().a6(0,this.gFb())
this.a3()}}
C.aOq.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFb())},
t(){$.zo().a6(0,this.gFb())
this.a3()}}
C.XK.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apI.prototype={
S(){return new C.aF6()}}
C.aF6.prototype={
Z(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B5(d,e){return this.cM9(d,e)},
cM9(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B5=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.dIQ(q,e))
t=3
w=6
return B.b(d.$0(),$async$B5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.l(new C.dIR(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B5,v)},
Bz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Bz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.d()
w=3
return B.b(B.vm(r,q),$async$Bz)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dIH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Bz,v)},
abD(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$abD)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.d()
q=t.e
q===$&&B.d()
p=t.f
p===$&&B.d()
u=B.OZ(s,B.L3(B.c59(r,q,s,p).f1(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abD,v)},
YW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pH(s,t.a.c,!1),$async$YW)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B5(new C.dIF(t),"Preparing download\u2026"),$async$YW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YW,v)},
a_w(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pH(s,t.a.c,!1),$async$a_w)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B5(new C.dIP(t),"Creating QR code\u2026"),$async$a_w)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
a_v(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.il3(r),$async$a_v)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B5(new C.dIE(t,s),"Looking up code\u2026"),$async$a_v)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_v,v)},
af7(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$af7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xX.cq().N5(A.TA,A.v7,!0),$async$af7)
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
p=B.jN(p,0,null)
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
case 6:u=B.HI()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af7,v)},
AJ(d,e,f){return this.bNm(d,e,f)},
aTz(d,e){return this.AJ(d,!1,e)},
bNl(d){return this.AJ(d,!1,!1)},
bNm(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$AJ)
case 3:if(t.c==null){w=1
break}if(!C.c5e(d,t.a.c,null)){t.lg(C.c5f(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.d()
s=!C.hYe(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.cu(r)
s=t.c
s.toString
w=4
return B.b(C.ilg(s,q,t.a.c,d),$async$AJ)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m5(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.d()
r=o}w=5
return B.b(B.t_(s,p,r,!1,null,null,d.ax),$async$AJ)
case 5:if(t.c==null){w=1
break}t.l(new C.dID(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AJ,v)},
af6(){var w=0,v=B.j(x.H),u=this
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B5(new C.dIG(u),"Reading file\u2026"),$async$af6)
case 2:return B.h(null,v)}})
return B.i($async$af6,v)},
Yd(d){return this.bOG(d)},
bOG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Yd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.d()
s=new B.db("local_qr_dep_"+1000*r,q.a,d,A.h1,A.fE,"Admin deposit ($"+B.dG(d)+")",null,null,A.cx,new B.V(Date.now(),0,!1))
C.ckc(t.d,s)
q=t.e
q===$&&B.d()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.t_(t.a.c,t.d,r,!0,null,null,null),$async$Yd)
case 3:w=4
return B.b(t.Bz(),$async$Yd)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Yd,v)},
b9x(d){var w=null
return B.cg(w,w,!0,w,new C.dIN(),d,w,!0,!0,x.N)},
Xg(d){return this.bGw(d)},
bGw(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$Xg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Yd(d.b),$async$Xg)
case 5:w=1
break
case 4:s=d.c
t.lg(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$Xg,v)},
Fw(d){return this.cuI(d)},
cuI(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$Fw)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3I(d,t.a.c),$async$Fw)
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
return B.b(t.b9x(r),$async$Fw)
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
return B.b(C.ck5(d,o,n.a,r,p),$async$Fw)
case 7:w=6
return B.b(t.Xg(f),$async$Fw)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fw,v)},
Fx(d){return this.cuJ(d)},
cuJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$Fx)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.ck4(d,t.a.c),$async$Fx)
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
return B.b(t.b9x(r),$async$Fx)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.d()
n=t.d
n===$&&B.d()
w=7
return B.b(C.Xm(o,n.a,d,r,p),$async$Fx)
case 7:w=6
return B.b(t.Xg(f),$async$Fx)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fx,v)},
Qe(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DQ()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a8(s,!1).cb(B.e9(new C.dII(),!0,null,x.N)),$async$Qe)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B5(new C.dIJ(t,r),"Applying deposit\u2026"),$async$Qe)
case 6:w=1
break
case 5:w=7
return B.b(t.B5(new C.dIK(t,r),"Loading\u2026"),$async$Qe)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qe,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nL:A.qD,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aE(d,A.dF,x.w).w,i=n?A.bw:A.v.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.W(A.eG,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cK,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dIS(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.h,0,o,o)
w=B.c("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.c("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cF,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a2e(D.bU3,"Download",A.a7m,u?o:p.gbUj(),o),1)
t=B.A(B.a([t,A.er,B.E(new C.a2e(A.jB,"Show QR",D.dEC,u?o:p.gcaj(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r
s=B.E(new C.a2e(D.bU4,"Upload",A.a6J,u?o:p.gcah(),o),1)
s=B.A(B.a([s,A.er,B.E(new C.a2e(A.jC,"Scan QR",D.dbH,u?o:p.gcai(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r?o:p.gcag()
r=n?A.c.j(0.06):A.aU.j(0.08)
q=B.m(16)
j=B.a([B.cn(B.a([i,A.aA,w,A.P,v,A.lh,t,A.aA,s,A.aA,new C.bvR(A.tC,"Enter Code",A.a64,u,o),A.lh,B.o(o,B.A(B.a([B.W(A.hx,A.aU,o,o,o,18),A.ar,B.E(B.c("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.B,o,A.e,A.h,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.m),o,o,o,o,A.jy,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iR:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aF(!1,A.a3,!0,o,new B.D(A.D2,B.A(B.a([H.aVX,A.bb,B.E(B.c(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.h,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a2e.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.W(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.c(w.d,v,v,v,v,v,v,A.uj,v,v,v)],x.p),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,140,v,v,A.bR,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvR.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.W(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.er,B.c(w.d,v,v,v,v,v,v,A.uj,v,v,v)],x.p),A.l,v,A.b9,A.h,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,v,v,v,D.bIq,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0R.prototype={
S(){return new C.bmB()}}
C.bmB.prototype={
gazd(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a4()
w.S8()
w.f=B.de(A.oJ,new C.dIW(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a3()},
S8(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vm(q.e,q.f),$async$S8)
case 3:q=e.a
s=B.c59(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OZ(t.a.e,B.L3(s.f1(),null,"  ")),$async$S8)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.l(new C.dIT(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S8,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nL:A.qD,s=u?A.iR:A.c,r=u?A.c:A.bq,q=B.eR(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aZ6,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aU.j(0.35),A.r,1),n=w.d,m=B.qk(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.c("Code: "+w.gazd(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aU.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.W(A.fX,A.aU,v,v,v,14),A.bk,B.c("Copy code",v,v,v,v,v,v,B.l(v,v,A.aU,v,v,v,v,v,v,v,v,12,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.M,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.m),v,v,v,v,A.lW,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dIU(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ae,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aA,B.c("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.m),v,v,v,v,A.ae,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bv,v,new C.dIV(d),B.bn(A.aU,v,v,v,v,A.hp,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.h,0,A.p),v),v,!1,!1,v,v)}}
C.a0S.prototype={
S(){return new C.bmC(B.A2(A.z8,A.os,A.vy))}}
C.bmC.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,A.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h7i,w,w,w,1,w,!0),A.v,B.A1(this.d,A.bZ,new C.dIX(this,d)),w,!1,!1,w,w)}}
C.agf.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iR:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dR,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aU.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.H,A.aU.j(0.16),A.kL,36)],x.V)
u=B.o(m,D.c_i,A.f,m,m,new B.n(m,m,m,B.m(18),A.a7l,D.caj,A.m),m,58,m,m,m,m,m,58)
t=B.c("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.c("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nL:A.qD
q=B.m(18)
p=B.K(A.aU.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rp("Account",A.a.i(this.d),i,j,m),A.S,new C.Rp("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.S,new C.Rp("Investment",d,i,j,m)],o))
g.push(A.S)
g.push(new C.Rp("Saved on",""+B.bL(f)+"/"+B.bW(f)+"/"+B.bD(f),i,j,m))
g.push(A.S)
g.push(new C.Rp("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.bR,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.W(A.tz,l?A.aQ:A.d7,m,m,m,16)
return B.eI(m,A.L,new B.cO(A.YL,new B.bP(new B.n(k,m,w,e,v,m,A.m),A.bm,new B.D(A.x_,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aA,B.o(m,B.A(B.a([n,A.aa,B.E(B.c("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bM:A.il,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.B,m,A.e,A.h,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.ex,m,m,1/0),A.dc,B.A(B.a([B.E(B.dU(A.ol,new C.fas(a0),B.dg(m,m,m,m,m,m,m,m,m,j,m,m,A.cm,m,new B.b9(B.m(14),A.a1),new B.av(h,1,A.r,-1),m,m,m,m)),1),A.ar,B.E(B.bJ(D.fQf,m,new C.fat(a0),B.bn(A.aU,m,m,m,m,m,A.cm,m,new B.b9(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.h,0,m,m)],o),A.l,m,A.e,A.M,0,A.p),m),m),m),m,m,m,A.eF,m,A.d8,m,m,m)}}
C.Rp.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.c(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.c(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.F,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.B,v,A.e,A.h,0,v,v)}}
C.a_Y.prototype={
S(){return new C.aCi(new B.at(A.ax,$.ax()),B.kf(!0,null,!0,!0,null,null,!1))}}
C.aCi.prototype={
Z(){this.a4()
$.aU.x1$.push(new C.dhF(this))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a3()},
cal(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a8(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nL:A.qD,p=u?A.aT:A.dR,o=B.m(24),n=B.K(A.aU.j(0.35),A.r,1),m=B.a([new B.ab(0,A.H,A.aU.j(0.18),A.fZ,32)],x.V),l=B.o(v,W.au6,A.f,v,v,new B.n(v,v,v,B.m(18),A.a7l,D.cde,A.m),v,56,v,v,v,v,v,56),k=B.c("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.c("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.F,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.v0(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bvk(new C.dhC())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cO(A.MJ,new B.bP(new B.n(t,v,n,o,m,v,A.m),A.bm,new B.D(A.x_,B.x(B.a([l,A.aO,k,A.P,j,A.e8,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.D1,v,v,"",v,!0,new B.b6(4,B.m(16),new B.av(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b7i),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dhD(w),v,!1,v,v,!1,v,!0,v,A.ae,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mH,v,v,v,v),A.e8,B.A(B.a([B.E(B.dU(A.ol,new C.dhE(d),B.dg(v,v,v,v,v,v,v,v,v,s,v,v,A.cm,v,new B.b9(B.m(14),A.a1),new B.av(p,1,A.r,-1),v,v,v,v)),1),A.ar,B.E(B.bJ(D.fU8,v,w.gcak(),B.bn(A.aU,v,v,v,v,v,A.cm,v,new B.b9(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.h,0,v,v)],f),A.l,v,A.e,A.M,0,A.p),v),v),v),v,v,v,A.Pc,v,A.d8,v,v,v)}}
C.aqe.prototype={
S(){return new C.bmJ(A.cU)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bmJ.prototype={
Z(){var w,v=this
v.a4()
w=v.a
w.toString
$.tX=$.tX+1
v.r=A.o.M(A.o.D(C.fUx(w.e,w.d.y2),1,600))
w=v.a
if(!J.lr(w.d.y2,w.e))v.r=C.iqI(v.a.e)
v.w=B.de(A.fU,new C.dPj(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.coA()
C.b2v()
this.a3()},
coA(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.i.D(r.e/w,0,1)
if(v<=0)return
u=B.ov(A.i.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.db(t,s.c.a,u,A.hf,A.fE,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cx,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vi(u,q,"Left early \xb7 +$"+A.i.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
L_(d,e){return this.cAU(d,e)},
b9a(d){return this.L_(!1,d)},
cAT(d){return this.L_(d,"")},
cAU(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$L_=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.vi(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bHN(s,C.bHt(),C.hnq(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$L_)
case 5:w=1
break
case 4:n=B.ov(A.i.ab(t.a.w*1.46*r,2))
m=r>=1
t.l(new C.dPa(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.db(s,p,n,A.hf,A.fE,q,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj0(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.i.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.i.ab(n,2)+" ("+A.i.T(r*100)+"% of the prize)"}q=t.a
C.vi(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHN(s,C.bHt(),C.hnq(),""+t.e+"/"+t.f,k,q,!0),$async$L_)
case 6:w=7
return B.b(C.aiT(t.a.f,k),$async$L_)
case 7:case 1:return B.h(u,v)}})
return B.i($async$L_,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.d()
w=A.o.ar(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.QX,o,o,o,new C.dPd(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.c(t.f,o,1,A.a2,o,o,o,A.jY,o,o,o),B.c("Win $"+A.i.ab(t.w*1.46,2)+" \xb7 stake $"+A.i.ab(p.a.w,2),o,o,o,o,o,o,D.fEC,o,o,o)],s),A.B,o,A.e,A.h,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aB:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.as1(r,new C.dPe(p),o),A.bk,B.cT(o,B.A(B.a([D.c4c,A.db,B.c(""+w+":"+v,o,o,o,o,o,o,A.iP,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o,o,A.b_,new B.n(n,o,o,q,o,o,A.m),A.a3,o,o,o,o,A.nT,o,o,o)],s),A.l,o,A.e,A.h,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSB(o,D.bwq,B.bm(!0,B.x(B.a([new B.D(D.bKE,q,o),new C.Oz(w*r,w,v,o),new B.D(E.ao0,B.A(B.a([B.E(B.bv(B.m(99),B.jE(A.bw,o,o,9,o,r,new B.ls(A.d.gH(n.r),x.dw)),A.aq),1),A.ar,B.c(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fOl,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o),B.E(new B.D(A.zg,B.bv(B.m(22),new B.bP(new B.n(o,o,o,o,o,new B.a7(A.aX,A.b1,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.als],x.O),o,o),A.m),A.bm,new B.dp(p.x,L.hJ6(p.a.e,new L.A9(new C.dPf(p),new C.dPg(p),new C.dPh(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a8i.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ab(0,A.H,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bYs,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aA,D.h32,A.P,B.c("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.c("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fR1,w,new C.ced(d),B.bn(A.at,w,w,w,A.v,A.hp,w,w,new B.b9(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.caZ,A.m),w,w,w,w,D.bIR,w,w,w),w,w,w,A.a25,w,A.d8,w,w,w)}}
C.apH.prototype={
S(){return new C.bmz(null,null)},
ga_(d){return this.e}}
C.bmz.prototype={
Z(){var w,v=this,u=null
v.a4()
w=v.d=B.bp(u,A.CR,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dIs(v))
w=B.bp(u,A.mm,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.OE,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dIt(v))
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
w.bA3()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.TB[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.TB[A.o.F(a9.w,5)]:b0
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
b3=B.a([B.e1(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ab(6+e,A.H,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.H,A.bc.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bj,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.H,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iY(B.x_(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(b2*0.5),B.a([new B.ab(b2*0.02,A.H,A.v.j(0.4+b1),A.J,b2*0.14)],e),b0,A.m),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.dt()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fF(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.dhS
else{a2=B.ap(A.c,A.kU,q*0.45)
a2.toString
a2=B.a([a2,A.ci,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.H,A.v.j(0.3),D.ewm,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.H,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.H,A.c.j(0.9),A.V6,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bP(new B.n(b0,b0,b0,B.m(d),b0,new B.a7(new B.df(-1+Math.cos(j)*0.8,-1),new B.df(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.m),A.bm,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.m),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.da(A.v.j(0.18),A.dQ,5)],x.C)
if(!a9.a.c)d.push(new B.da(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uP(B.c(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b_,A.jx,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.m),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNZ.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.Oz.prototype={
B(d){var w=null,v=new C.cgF(),u=v.$3("STAKE","$"+A.i.ab(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.H,A.aU.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OW,B.A(B.a([u,B.o(w,B.x(B.a([D.h1G,B.lH(new C.cgE(),w,A.b_,A.n7,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.auZ,A.m),w,w,w,w,A.P8,w,w,w),v.$3("FULL WIN","$"+A.i.ab(this.d,2),A.bM)],q),A.l,w,A.e,A.h,0,w,w),w)}}
C.as1.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.k4.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bWR,A.db,C.asR(this.d,A.ok,this.c)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.auZ,A.m),w,w,w,w,A.Pj,w,w,w)},
ge3(){return this.c}}
C.OH.prototype={
S(){return new C.bnj(null,null)}}
C.bnj.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.mm,null,1,null,v)
v.d!==$&&B.aR()
v.d=w},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bAG()},
b2p(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.ix5(),v),v.k("ak.E"))
w=this.d
w===$&&B.d()
return B.c7(w,new C.e86(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akL,B.bm(!0,this.b2p(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.b2p(0,d)},
aA2(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.W(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,32,w,w,w,w,w,32),A.ar,B.E(B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w)}}
C.aOA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.af6.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aE(d,A.dF,o).w.r.d,m=this.c,l=J.cG(m),k=l.eO(m,new C.e89()).gJ(0),j=new B.ee(l.dP(m,new C.e8a(),x.cD),x.bG).cC(0,0,new C.e8b())
o=B.aE(d,A.bY,o).w
w=x.p
v=B.a([A.S,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.m),p,4,p,p,p,p,p,42),new B.D(A.aok,B.A(B.a([B.o(p,D.c6K,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ab(0,A.H,A.fj.j(0.45),A.J,14)],x.V),D.auS,A.m),p,44,p,p,p,p,p,44),A.bb,D.bN2,B.aH(p,p,p,p,A.ly,p,p,p,new C.e8c(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.h,0,p,p),p)],w)
if(l.gcn(m)){u=C.hhG("GAMES",""+l.gJ(m),A.eE)
t=C.hhG("WON",""+k,A.k4)
s=j>=0
r=s?"+":"-"
q=C.bE_(j)
s=s?A.k4:A.f0
v.push(new B.D(D.bGY,B.A(B.a([u,A.aa,t,A.aa,C.hhG("NET",r+q,s)],w),A.l,p,A.e,A.h,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.W(D.bSO,A.c.j(0.35),p,p,p,52),A.af,B.c("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.al,B.c("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.h,0,A.p),p))
else v.push(new B.d6(1,A.cg,B.hN(A.t,p,new C.e8d(this),l.gJ(m),new B.P(14,2,14,16+n),p,A.ah,new C.e8e(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.M,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.ba7,p,p,p,p,p,p,p,p)}}
C.af5.prototype={
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
r=w}q=h.gbl0()
w=new C.e88()
s=B.m(14)
p=B.a([r.j(0.13),D.bv9],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.W(g?A.m_:A.cB,r,i,i,i,16)
m=B.E(B.c(h.b,i,1,A.a2,i,i,i,A.ui,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.c(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.m),i,i,i,i,D.bKw,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bE_(q)}else{l=g?"+":"-"
l+=C.bE_(h.d)}j=x.p
l=B.A(B.a([n,A.bk,m,k,A.bk,B.c(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.h,0,i,i)
k=C.e87("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.db,C.e87("PAID",C.bE_(g?h.d:0),r),A.db,C.e87("BEFORE",w.$1(h.x),A.eE),A.db,C.e87("AFTER",w.$1(h.y),A.dA)],j),A.l,i,A.e,A.h,0,i,i)
n=C.isg(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.al,w,A.au,B.c(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.am,i,A.e,A.h,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.m),i,i,i,i,A.ke,i,i,i)}}
C.aD1.prototype={
S(){return new C.biO(A.cU,null,null)}}
C.biO.prototype={
Z(){var w,v,u,t=this
t.a4()
w=B.bp(null,A.n6,null,1,null,t)
w.cK(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afu(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a8y,A.tP,A.d3,A.c][w.aw(4)],[A.ia,A.kj,A.ee,A.tr][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bzy()},
B(d){var w=null,v=this.d
v===$&&B.d()
return B.as(B.aF(!1,A.a3,!0,w,B.c7(v,new C.doN(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.afu.prototype={
ga_(d){return this.f}}
C.aNu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.b3i.prototype={
B(d){return new B.wt(new C.cj5(this),null,new B.he(B.a([$.zo(),$.a4B()],x.U)),null)},
ge3(){return this.c}}
C.Ob.prototype={
cip(){if(this.c!=null)this.l(new C.c6u())}}
C.JK.prototype={}
C.arp.prototype={
S(){return new C.aFS(A.cU,new B.at(A.ax,$.ax()))},
cNV(){return this.d.$0()},
cZV(){return this.f.$0()},
cZJ(d,e){return this.r.$2(d,e)},
d_w(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFS.prototype={
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
avJ(){var w=B.cA(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avJ()
if(s<2){t.aA3("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cNV()<s){t.aA3("Insufficient balance.")
w=1
break}if(!t.a.cZJ(s,"Dice Roll bet")){t.aA3("Could not place bet.")
w=1
break}t.a.toString
t.l(new C.e0C(t))}w=3
return B.b(C.cfn(t.a.e),$async$BC)
case 3:r=t.a
q=C.iux(r.e,r.c,t.d)
t.a.cZV()
B.b1T(t.a.e)
t.l(new C.e0D(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bN(new B.bf(1000*(40+p*6)),null,r),$async$BC)
case 7:if(t.c==null){w=1
break}new C.e0E(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bN(A.kb,null,r),$async$BC)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hm5(q)
t.l(new C.e0F(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.d_w(m,"Dice Roll "+n,o)
t.l(new C.e0G(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.i.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ab(m,2)+" added to your balance"
w=12
return B.b(C.bHN(r,C.bHt(),new C.e0H(t),n,k,"YOU WIN!",!0),$async$BC)
case 12:w=13
return B.b(C.aiT("Dice Roll",l?"+$"+A.i.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ab(m,2)+" added to your balance"),$async$BC)
case 13:w=10
break
case 11:w=14
return B.b(C.bHN(r,C.bHt(),new C.e0I(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BC)
case 14:C.vi(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BC,v)},
aA3(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avJ(),d=x.w,a0=B.aE(a2,A.dF,d).w,a1=Math.min(B.aE(a2,A.bY,d).w.a.a*0.44,200)
d=B.hq(A.ati,D.h9h,new C.e0L(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.aY,B.o(f,B.A(B.a([A.atd,A.bk,C.asR(v.d,A.ja,u)],t),A.l,f,A.e,A.M,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.m),f,f,f,f,A.lX,f,f,f)],t),A.l,f,A.e,A.h,0,f,f)
u=g.z
v=B.a0(140,D.a0k.m()>>>16&255,D.a0k.m()>>>8&255,D.a0k.m()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apH(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.m),f,f,f,f,f,f,f,1/0),1)
v=B.c("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.TB[q]
o=C.hm5(p)
n=p>0?A.bh:A.aB
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.av(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.H,n.j(0.65),A.J,14)],r):A.To
m=m?18:15
s.push(new B.bx(1,A.ba,new B.D(A.jh,B.o(A.z,B.c(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bE(h,h,h,h),new B.bc(j,j,j,j),n,f,A.m),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.al,B.A(s,A.l,f,A.e,A.h,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hm5(v)
s=g.r
s.toString
d.push(new B.D(A.jg,B.c("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.be:A.c_,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.S)
d.push(new B.bK(A.a5,f,f,B.c("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),f,f,f,f,f,f,f,f,12,f,f,A.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.al)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e0M(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v.push(B.E(new B.D(A.a2b,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.m(10),A.a1),f,A.jQ,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.m7,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e9,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.he,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.h,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.c("Perfect Score Profit: +$"+A.i.ab(g.avJ()*0.46,2),f,f,f,f,f,f,K.aXP,f,f,f),f))
d.push(A.S)
d=B.E(new B.D(A.i8,B.x(d,A.am,f,A.e,A.h,0,A.p),f),1)
v=g.x?f:g.gcxo()
s=B.fv(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.b9(B.m(14),A.a1),f,f,f,f,f)
return C.aSB(f,D.a0y,B.bm(!0,B.x(B.a([new B.D(D.bKZ,w,f),new C.Oz(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iB(B.c("\ud83c\udfb2 ROLL ($"+A.i.ab(e,2)+")",f,f,f,f,f,f,A.lF,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.h,0,A.p),1)],t),A.l,f,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.as7.prototype={
S(){return new C.aG7(A.ld,new B.at(A.ax,$.ax()))},
cZA(d){return this.e.$1(d)}}
C.aG7.prototype={
gauv(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cU.aw(89999))
this.r!==$&&B.bF()
this.r=w
v=w}return v},
gRz(){var w=this.d,v=this.a
return w===A.ld?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaU(){var w=this.gRz(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
JP(d,e){return this.bNP(d,e)},
bNP(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fI(new B.fy(d)),$async$JP)
case 2:B.eY()
t=u.c
if(t!=null)t.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.c(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JP,v)},
Ru(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ru=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRz().length===0){r.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.c("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jr()
o=A.i.ab(r.a.d,2)
q=r.d===A.ld?B.cE("https://cash.app/"+r.gaaU()+"/"+o,0,null):B.cE("bitcoin:"+r.gRz(),0,null)
t=4
w=7
return B.b(B.iS(q,A.fu,null),$async$Ru)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.ld?r.gaaU():r.gRz()
w=10
return B.b(r.JP(n,r.d===A.ld?"Cash App tag":"Bitcoin address"),$async$Ru)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.ld?r.gaaU():r.gRz()
w=11
return B.b(r.JP(n,r.d===A.ld?"Cash App tag":"Bitcoin address"),$async$Ru)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ru,v)},
a22(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a22=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i8().blN(A.eY),$async$a22)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a22)
case 4:s=e
t.l(new C.e8k(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a22,v)},
cez(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.ld?C.hKs(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.ld?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.U(B.b3(u,u,u,u,u,A.t,u,B.c(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.U(B.b3(u,u,u,u,u,A.t,u,B.c("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cZA(new B.db(s,w.c.a,w.d,A.h1,v.d,r,v.f,v.gauv(),A.dJ,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j5(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eR(o,o,o,!0,!0,A.Cj,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.IG,o,o,o,new C.e8l(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fSM,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f4.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.H,A.b5.j(0.25),A.eS,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.c("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.F,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.al,new B.dk(A.dC,A.z,A.f,B.c("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fAB,o,o,o),o),A.al,B.c("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f4.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.ce3,A.m),o,o,o,o,A.aox,o,o,o)
m=p.c9_()
l=p.aDO(1,"Send the money to NGMY Pay",p.cex())
w=p.aDO(2,"Put this code in the payment note",p.bMp())
v=p.d===A.ld
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDO(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.av(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uS,!0,o,o,o,o,new B.b6(4,B.m(18),D.b7d),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fC7,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.uj,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f4:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bv(B.m(14),new B.cO(D.b8C,new B.FF(p.f,o),o),A.aq),A.P,D.fl_,A.au],i),A.l,o,A.e,A.h,0,A.p):B.x(B.a([B.o(o,D.c5U,A.f,o,o,new B.n(D.f4.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.S,D.fYk,A.cT,B.c("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p)
return B.c5(n,A.Cj,B.as(new B.cO(A.ag3,B.cn(B.a([j,A.bx,m,A.bx,l,w,t,p.baL(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uS,o,s,u,o,o,A.m),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcqt(),o,o,o,o,o,o,!1,A.a4),!0),A.al,B.c(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bP(new B.n(o,o,o,B.m(18),B.a([new B.ab(0,A.H,A.b5.j(0.45),A.dm,18)],k),D.ccA,A.m),A.bm,B.lU(A.atV,D.h8s,p.gcey(),B.fv(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.b9(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHZ,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c9_(){var w=null,v=new C.e8g(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.ld,A.hL,"Cash App"),A.e5,v.$3(A.aak,D.asR,"Bitcoin")],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.n(A.uS,w,t,u,w,w,A.m),w,w,w,w,A.lY,w,w,w)},
baL(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.c(""+d,v,v,v,v,v,v,D.fHG,v,v,v),A.f,v,v,D.b9l,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f4.j(0.18),v,v,v,v,v,A.wQ,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.h,0,A.p)
w=g?12:20
return new B.F2(B.A(B.a([new B.a5(34,v,t,v),A.ar,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a1t,B.c(e,v,v,v,v,v,v,A.Lv,v,v,v),v),f],u),A.am,v,A.e,A.h,0,A.p),v),1)],u),A.am,v,A.e,A.h,0,v,v),v)},
aDO(d,e,f){return this.baL(d,e,f,!1)},
cex(){var w,v,u,t,s=this,r=null,q=s.d===A.ld?s.gaaU():s.gRz(),p=B.m(20),o=B.m(20),n=s.d===A.ld,m=n?D.cbt:D.cdo,l=B.a([new B.ab(0,A.H,(n?A.a_U:I.wy).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.ld
w=n?A.hL:D.asR
k=B.o(r,B.W(w,n?A.a_U:I.wy,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.m),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.c(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.ld
t=u?22:13
v=B.c(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bC,v,A.au,B.A(B.a([D.c12,A.db,B.c(s.d===A.ld?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rz,r,r,r)],u),A.l,r,A.e,A.h,0,r,r)],u),A.B,r,A.e,A.h,0,A.p),1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bb,v,B.aH(r,r,r,r,D.c0_,r,r,r,w?r:new C.e8j(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.h,0,r,r),r,new B.n(r,r,r,o,l,m,A.m),r,A.anV,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gclB(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bMp(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b2.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gauv().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b2.j(0.28),A.b2.j(0.08)],u)
p=new B.av(A.eE.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.c(s,o,o,o,o,o,o,A.qe,o,o,o),A.f,o,o,new B.n(o,o,new B.bE(p,p,p,p),new B.bc(r,r,r,r),o,new B.a7(A.aX,A.b1,A.x,q,o,o),A.m),o,52,o,A.jh,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.h,0,o,o),A.af,B.A(B.a([B.E(B.c('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.aa,B.hq(A.a55,D.has,new C.e8f(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.eE,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.h,0,o,o)],l),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(A.uS,o,m,n,o,o,A.m),o,o,o,o,A.bH,o,o,o)}}
C.rV.prototype={
ak(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rW.prototype={
ak(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWP(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hus(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aM(v," \xb7 ")},
giK(d){return this.c}}
C.lZ.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iE.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.ba(v.c,new C.ci3(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.is.prototype={
an5(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.is(v,u,t,s,r,h==null?w.f:h)},
bgp(d){var w=null
return this.an5(w,w,w,w,d,w)},
cRM(d,e,f){return this.an5(d,e,null,null,null,f)},
bgo(d){var w=null
return this.an5(w,w,w,d,w,w)},
cRq(d,e){var w=null
return this.an5(w,w,d,w,e,w)},
ak(){var w=this,v=C.ifK(w.c),u=w.e,t=B.T(u).k("N<1,aa<q,@>>")
u=B.B(new B.N(u,new C.ci1(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bce.prototype={}
C.X1.prototype={
S(){return new C.aGj(new B.at(A.ax,$.ax()),B.mt(0,null,null),B.a([],x.m))},
Vl(d){return this.d.$1(d)}}
C.aGj.prototype={
Z(){var w,v=this
v.a4()
w=J.ba(v.a.c,new C.ecq(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b_(w,new C.ecr())
v.d=w
v.K_()},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.x.t()
this.a3()},
agb(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$agb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.K_()
u.l(new C.eck(u))
t=u.a
t.toString
s=u.d
s===$&&B.d()
w=2
return B.b(t.Vl(s),$async$agb)
case 2:r=e
if(u.c!=null){u.l(new C.ecl(u))
t=u.c.L(x.q).f
s=B.c(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b3(null,null,null,r?A.dr:A.aB,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$agb,v)},
aa6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.d()
s=new C.is(q,"New Category",A.Ih,4284773515,D.aDQ,p.length)
t.l(new C.ec3(t,s))
t.K_()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.ec4(s),p,null,!0,!0,x.i),$async$aa6)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ec5(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa6,v)},
a2Z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.l(new C.ech(t,p))
q.bN(0,A.ch)
q=t.a.e
s=t.d
s===$&&B.d()
w=3
return B.b(C.chZ(p,q,s),$async$a2Z)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.eci(t,r))
$.aU.x1$.push(new C.ecj(t))
case 1:return B.h(u,v)}})
return B.i($async$a2Z,v)},
ac8(d){return this.bSF(d)},
bSF(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.d()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ecb(t),r,null,!0,!0,x.i),$async$ac8)
case 2:s=f
if(s!=null)u.l(new C.ecc(u,d,s))
return B.h(null,v)}})
return B.i($async$ac8,v)},
bQj(d){this.l(new C.eca(this,d))
this.K_()},
K_(){var w,v,u=this.d
u===$&&B.d()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bgp(v)},
ciV(d,e){var w={}
w.a=e
this.l(new C.ecg(w,this,d))},
a_a(d){return this.c7U(d)},
c7U(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.e9(new C.ecf(u,d),!1,null,x.H)
w=2
return B.b(B.a8(s,!1).cb(t),$async$a_a)
case 2:return B.h(null,v)}})
return B.i($async$a_a,v)},
bIw(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.h5,A.bs],l):B.a([A.pt,A.eU],l)
w=B.m(16)
v=B.K(m?A.da.j(0.35):A.dA,A.r,1)
u=B.W(A.ee,m?A.dA:A.dZ,n,n,n,n)
t=B.E(B.c("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a3m:V.PL
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.aa,t,B.W(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.h,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ec7(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.S],r)
t=o.y
if(t.length!==0){q=(m?D.uC:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.kw(!0,n,o.x,new C.ec8(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afZ,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.cr,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.m(14),A.a1),n,A.eW,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ec9(o),n,!1,n,n,!1,n,!0,n,A.ae,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcxF()
p=B.bn(A.bp,n,n,n,n,n,A.jy,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JY(t,A.bp,n),A.db,B.bJ(o.f?A.ru:D.at4,n,m,p)],r),A.dG,n,A.e,A.h,0,n,n))
A.d.u(s,u)}return B.cT(n,B.x(s,A.am,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.m),A.iX,n,n,n,A.HA,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bce(t),r=t?A.bB:A.ci,q=t?A.bB:u,p=t?A.aS:A.a_,o=B.c("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gceD()
if(n)n=A.L8
else n=B.W(A.zS,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eR(B.a([B.hq(n,B.c("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXP(A.aN,u,A.YZ,A.p0,D.h6E,v.gbEK())
q=v.bIw(s)
n=B.c("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.d()
return B.c5(o,r,B.x(B.a([q,new B.D(A.HA,n,u),B.E(G.hyZ(!1,new C.ecp(v,s),m.length,v.gciU(),D.bGK,u,!1),1)],w),A.am,u,A.e,A.h,0,A.p),u,!1,!1,p,u)}}
C.QN.prototype={
S(){return new C.bec()}}
C.bec.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bd(w.b,A.b8,A.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.uC:A.c,p=B.c("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.d()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c7G,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ae,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cex,new C.cXG(t),w),w.k("ak.E"))
w=B.bZ(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.dez,new C.cXH(t),v),v.k("ak.E"))
u=x.p
v=B.cc(B.x(B.a([o,A.af,w,A.af,B.bZ(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.M,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bO(!1,A.dp,s,s,!0,s,s,s,new C.cXI(d),s,s),B.bJ(A.rA,s,new C.cXJ(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1E.prototype={
S(){return new C.aIn()},
pp(d){return this.d.$1(d)}}
C.aIn.prototype={
Z(){this.a4()
this.d=B.bs(this.a.c.e,!0,x.u)},
aA5(){var w=this.a,v=w.c,u=this.d
u===$&&B.d()
return w.pp(v.bgo(u))},
aa8(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aa8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.d()
w=2
return B.b(u.b4p(new C.iE("q_"+1000*s,"",D.dd_,null,!1,r.length)),$async$aa8)
case 2:t=e
if(t!=null){u.l(new C.f5m(u,t))
u.aA5()}return B.h(null,v)}})
return B.i($async$aa8,v)},
b4p(d){var w,v=this.c
v.toString
w=B.e9(new C.f5n(d),!1,null,x.u)
return B.a8(v,!1).cb(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bB:A.ci,s=u?A.bB:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eR(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.c(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXP(A.aN,v,A.YZ,A.p0,D.hcB,w.gbFb())
q=w.d
q===$&&B.d()
q=q.length
if(q===0){q=B.as(B.c("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hN(A.t,v,new C.f5s(w,new C.bce(u)),q,D.bGT,v,A.ah,new C.f5t(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1D.prototype={
S(){return new C.aIm()}}
C.aIm.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bd(w.b,A.b8,A.aP),$.ax())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c6(v.e,D.a9t)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a3()},
aga(){var w=0,v=B.j(x.H),u=this,t
var $async$aga=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DT(78,1920),$async$aga)
case 2:t=e
if(t!=null)u.l(new C.f5i(u,t))
return B.h(null,v)}})
return B.i($async$aga,v)},
ahj(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.e9(new C.f5g(u),!1,null,x.dZ)
w=2
return B.b(B.a8(r,!1).cb(t),$async$ahj)
case 2:s=e
if(s!=null)u.l(new C.f5h(u,s))
return B.h(null,v)}})
return B.i($async$ahj,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bB:A.ci,f=h?A.bB:i,e=h?A.aS:A.a_,d=B.c("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eR(B.a([B.d8(N.QU,i,A.rA,new C.f5k(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.ar],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.c("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bv(e,B.aSG(B.m(14),A.bZ,140,A.Dj,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gceC(),i,i,i,i,i,i,!1,A.a4)
e=B.c("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aM:A.bn,A.r,1)
s=j.d
s===$&&B.d()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eT,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cF,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ae,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JY(j.d,i,i)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.m),i,i,i,i,A.ey,i,i,i)
u=B.c("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iX(A.aN,i,i,A.ag,i,new C.f5l(j),i,B.c("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.c("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.c("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uC:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bZD,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.m),i,i,i,i,A.bl,i,i,i)
l=B.c("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.d()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.au,B.c(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.B,i,A.e,A.h,0,A.p),1)
return B.c5(d,g,B.cn(B.a([f,A.P,w,A.dc,e,A.P,v,A.aO,u,A.P,t,A.au,s,A.af,B.aF(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.er,l,B.W(A.zO,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.m),i,i,i,i,A.fb,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gckw(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bR,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.deA.prototype={}
C.X2.prototype={
S(){return new C.aGl(B.kf(!0,null,!0,!0,null,null,!1))}}
C.aGl.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dI(q.a.c,new C.ed0())
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
q.d=new B.at(new B.bd(w,A.b8,A.aP),$.ax())},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.f.t()
this.a3()},
aA6(d,e){var w,v,u,t,s,r=this.d
r===$&&B.d()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.az(v,r,u)+e
s=A.a.ol(v,r,u,t)
this.d.bN(0,new B.bd(s,B.hr(A.bD,r+t.length),A.aP))},
b2r(d){var w,v,u,t,s=this.d
s===$&&B.d()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.ol(w,v,v,u)
this.d.bN(0,new B.bd(t,B.hr(A.bD,v+u.length),A.aP))},
adR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DT(78,1920),$async$adR)
case 3:s=e
if(s==null){w=1
break}t.l(new C.ecH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
ZB(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i8().a7s(A.eY),$async$ZB)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fs(),$async$ZB)
case 4:t.l(new r.ecM(t,e))
case 1:return B.h(u,v)}})
return B.i($async$ZB,v)},
adS(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.at(A.ax,t)
r=new B.at(new B.bd("https://",A.b8,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ecK(s,r),q,null,!0,!0,x.y),$async$adS)
case 2:if(e===!0)u.l(new C.ecL(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adS,v)},
bJt(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.d()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ecD(),B.T(p).k("N<1,q>")).c0(0,new C.ecE())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.lZ("heading",A.a.i(A.a.aY(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.lZ("bullets",new B.N(B.a(s.split("\n"),u),new C.ecF(),t).c0(0,new C.ecG()).aM(0,"\n"),r,r))
else q.push(new C.lZ("text",s,r,r))}p=this.e
p===$&&B.d()
A.d.u(q,p)
if(q.length===0)q.push(D.a9t)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.deA(n),l=n?A.aw:A.ht,k=B.c(p.a.d,o,o,o,o,o,o,A.cH,o,o,o),j=x.p
k=B.eR(B.a([B.d8(N.QU,o,A.adg,new C.ecR(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hV
v=B.bZ(A.bI,B.a([p.wm(A.PM,"Bold",new C.ecS(p),m),p.wm(A.a3o,"Italic",new C.ecT(p),m),p.wm(A.aqs,"Underline",new C.ecU(p),m),p.wm(Z.a3v,"Heading",new C.ecV(p),m),p.wm(A.PN,"Bullets",new C.ecW(p),m),p.wm(A.aqr,"Align",new C.ecX(),m),p.wm(A.HY,"Link",p.gc4z(),m),p.wm(A.r_,"Image",p.gc4y(),m),p.wm(P.a3J,"Video",p.gc4A(),m),p.wm(A.a4T,"Signature",new C.ecY(p),m),p.wm(P.PO,"Divider",new C.ecZ(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.al,B.c("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bi,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.am,o,A.e,A.h,0,A.p),A.f,w,o,o,o,o,o,o,A.ap4,o,o,o)
v=n?A.bB:A.c
u=B.m(12)
t=B.K(n?A.cQ:A.dR,A.r,1)
s=B.a([new B.ab(0,A.H,A.v.j(n?0.35:0.08),A.cO,16)],x.V)
r=p.d
r===$&&B.d()
q=B.l(o,o,n?A.iG:A.aw,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bR,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eT,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bi,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.m),o,o,o,o,R.D5,o,o,o),o),1)],j)
n=p.e
n===$&&B.d()
if(n.length!==0){n=new B.i_(n,B.T(n).k("i_<1>"))
j.push(B.o(o,B.bZ(A.bI,n.gdM(n).dP(0,new C.ed_(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OZ,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.h,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bB:A.c,t=B.m(8),s=B.m(8)
return B.hd(B.aF(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cr,B.W(d,v?A.iG:A.aw,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.dt5.prototype={}
C.aDW.prototype={
a7(){return"_KbView."+this.b}}
C.aso.prototype={
S(){return new C.aGk(D.b2D)},
cYM(d,e){return this.e.$2$size(d,e)}}
C.aGk.prototype={
gaCZ(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gczW(){var w,v,u,t,s,r=this.gaCZ()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ceE(d){this.l(new C.ecA(this,d))},
clK(d){this.l(new C.ecB(this,d))},
bHA(){this.l(new C.ecs(this))},
bHC(){this.l(new C.ect(this))},
gbaa(){var w=B.bs(this.a.c,!0,x.i)
A.d.b_(w,new C.ecC())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dt5(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eU.j(0.55),A.nH.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aM:A.fA).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIJ(f)
break
case 1:g=i.gaCZ()
g.toString
g=i.bJr(f,g)
break
case 2:u=i.gaCZ()
u.toString
t=i.gczW()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.c(t.b,h,h,h,h,h,h,D.fGG,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.m),h,h,h,h,A.bH,h,h,1/0)
q=g?A.aw:A.c
p=B.m(16)
o=B.K(g?A.aM:A.bn,A.r,1)
n=B.a([new B.ab(0,A.H,A.v.j(g?0.28:0.06),A.ez,10)],x.V)
m=g?A.h5:A.pt
l=B.m(8)
k=B.W(A.o_,g?A.dA:A.dZ,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDU(f,i.gbHB(),u.c,s,"Answer",h),B.E(B.cn(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e5,B.c("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dA:A.dZ,h,h,h,h,h,h,h,h,11,h,h,A.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.M,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.m),h,h,h,A.eb,A.hj,h,h,h),new C.b2Q(t.c,t.e,f,h)],j),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.m),h,h,h,h,A.bR,h,h,1/0)],j),h,h,A.anO,h,h,A.ah,!1),1)],j),A.am,h,A.e,A.h,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aX,A.b1,A.x,e,h,h),A.m),h,h,h,A.i8,h,h,h,h)},
b_u(d){var w,v,u,t=null,s=d.a,r=s?D.uC:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.H,q,A.J,14),new B.ab(0,A.H,A.v.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aM:A.fA,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i6(v.cYM(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.al,B.c("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dr,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.h,0,A.p)},
bIJ(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_u(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_u(d),t,t,t)
w=d.a
v=B.c("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cn(B.a([s,A.aA,v,A.al,B.c("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iC(!0,t,t,A.y,E.aW2,new C.ecv(u,d),u.gbaa().length,t,A.e2,A.ah,!0)],x.p),t,t,D.bGU,t,t,A.ah,!1)},
bJr(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b_(r,new C.ecx())
w=B.b1(e.d)
v=d.a
u=B.c("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.c("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hN(A.t,s,new C.ecy(this,r,d,e),t,A.wU,s,A.ah,new C.ecz(),!1)
return B.x(B.a([new C.aDU(d,this.gbHz(),e.c,w,e.b,s),new B.D(A.wW,u,s),B.E(v,1)],x.p),A.am,s,A.e,A.h,0,A.p)}}
C.aDU.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.W(A.eG,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.W(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.m),v,v,v,v,A.cr,v,v,v)
return new B.D(D.bKh,B.A(B.a([t,q,A.ar,B.E(B.c(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v),v)}}
C.adB.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uC:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aM:A.bn,A.r,1),n=B.a([new B.ab(0,A.H,A.v.j(t?0.28:0.06),A.dQ,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.W(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.m),w,40,w,w,w,w,w,40)
return new B.fH(1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.al,B.c(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.F,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.h,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.m),w,w,w,w,A.cr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2Q.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.h5:A.pt
u=B.m(8)
t=B.W(A.vn,w?A.dA:A.dZ,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.db,B.c("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dA:A.dZ,s,s,s,s,s,s,s,s,10,s,s,A.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.M,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.m),s,s,s,A.cy,A.eX,s,s,s))}A.d.u(p,J.ba(this.c,new C.ci_(r),x.l))
return B.x(p,A.B,s,A.e,A.h,0,A.p)}}
C.adr.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bEz,B.c(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hI,B.bv(B.m(12),B.aSG(r,A.bZ,160,A.r_,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hI,new C.aDV(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wQ,B.aM(!1,r,!0,B.c(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.ct:A.bp,r,A.no,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQY(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iT(v?A.aM:A.bn,r,r,r,r,r)
q=B.c(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cA:A.aM,r,r,r,r,r,r,r,r,r,A.cL,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.ze,B.x(B.a([u,q,A.aO,t,A.au,B.c("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.B,r,A.e,A.h,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cL(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQZ(),x.cc),new C.cR_(s),v),v.k("M.E"))
return new B.D(A.kd,B.x(q,A.B,r,A.e,A.h,0,A.p),r)
case"divider":return new B.D(A.hI,B.iT(s.d.a?A.aM:A.bn,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bL
return new B.D(A.eJ,C.i9B(q,s.d),r)}}}
C.aDV.prototype={
S(){return new C.bkm()}}
C.bkm.prototype={
Z(){this.a4()
this.agc()},
agc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$agc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d3(n,"http")&&!J.d3(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZZ(B.cE(n,0,null),null)
w=7
return B.b(J.a4E(q),$async$agc)
case 7:if(r.c==null){w=1
break}r.l(new C.dt6(r,q))
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
return B.i($async$agc,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fy
u=B.m(12)
return B.o(A.z,B.W(A.rb,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.m),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajP(v)
return B.bv(w,new B.fH(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AS(s,t),B.aH(t,t,t,t,B.W(v.f?A.aqz:A.PP,A.c,t,t,t,44),t,t,t,new C.dt8(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.ate.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JP.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.t0.prototype={}
C.asr.prototype={
S(){var w=null
return new C.aGm(new B.at(A.ax,$.ax()),B.mt(0,w,w),B.a([],x.m),D.EH,D.aMT,w,w)},
ge3(){return this.d}}
C.aGm.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.nQ,null,1,null,v)
w.eU(0,!0)
v.as!==$&&B.aR()
v.as=w
v.z=A.d.gH(D.a7S).a},
t(){var w=this,v=w.as
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.e.t()
w.bAP()},
gat1(){var w,v,u,t,s=this.x
if(s===D.EI)return null
s=s===D.EH
w=s?D.a7S:D.a6W
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cAJ(d){return this.l(new C.ede(this,d))},
aCL(){$.aU.x1$.push(new C.ed5(this))},
JQ(d){return this.cA9(d)},
b2s(){return this.JQ(null)},
cA9(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JQ=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JQ)
case 3:e=b2
if(!e){w=1
break}B.k0()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aS(a0,new C.ed7())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hEL(a8)&&a1
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
l=C.hEL(a8)&&!p
q.l(new C.ed8(q,a8))
q.aCL()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.l(new C.ed9(q))
q.aCL()
w=1
break}t=5
j=B.nq(k)
i=new B.N(a0,new C.eda(),B.T(a0).k("N<1,q>")).aM(0,"\n\n")
a0=C.itV(m,p,o,q.x,n,q.y,q.gat1(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.v(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.v(a8)
w=8
return B.b(B.ro(j,h,A.ib,null,null),$async$JQ)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFV(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.l(new C.edb(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.l(new C.edc(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.l(new C.edd(q))
q.aCL()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JQ,v)},
bNx(){return this.JQ("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.H5:D.btp,o=x.p
o=B.a([B.x(B.a([B.E(s.czo(q),1),s.bMK(q)],o),A.l,r,A.e,A.h,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNw()
u=B.m(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.eAa,r,new B.n(r,r,r,u,B.a([new B.ab(0,A.H,A.aQ.j(0.45),A.cO,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r),A.og,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.og,r,r,A.ai),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
czo(d){var w,v,u,t=this,s=null
if(t.x===D.EI)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hgE(s,!1,A.L,0,0,w,B.hcU(t.cFi(d),A.Zi,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.W(A.asT,A.aD.j(0.5),s,s,s,52)
w.push(B.b9p(new B.D(A.eF,B.x(B.a([u,A.aA,B.c("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.e0,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aA,B.bZ(A.fQ,B.a([t.akx("Full bongo love song ABAB",d),t.akx("Mix: group vs private jet \u2014 which flies?",d),t.akx("Song from John 3:16 + matching verses",d),t.akx("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.h,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nI(D.bFf,B.Zn(new B.oY(new C.ed6(t,d),u+v,!0,!0,!0,0,B.tr(),s)),s))}return B.we(0,s,A.t,t.e,A.y,s,s,T.afU,s,s,!1,s,A.ah,!1,w)},
cFi(d){var w=this.as
w===$&&B.d()
return B.c7(w,new C.edl(this,d),null)},
cFk(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.edn(v),r=A.v.j(d?0.35:0.06),q=B.m(14),p=B.K(A.bc.j(0.35),A.r,1),o=v.gat1()
o=o==null?u:o.c
o=B.c(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fs,u,u,u)
w=v.gat1()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.c(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.aa,w,B.W(v.w?A.Qg:A.tw,A.bc,u,u,u,20)],x.p),A.l,u,A.e,A.h,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.m),u,u,u,u,A.nU,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
aye(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b5,A.aU],x.O)
break
case 1:w=B.a([A.bp,A.ct],x.O)
break
case 2:w=B.a([A.bA,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.ed4(this,d)
r=B.m(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.v.j(g?0.3:0.05)
p=B.c(f,n,n,n,n,n,n,A.Fs,n,n,n)
if(m)o=A.c
else o=g?A.ac:A.bq
return B.E(B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cT(n,B.x(B.a([p,B.c(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(q,n,n,r,n,w,A.m),A.a3,n,n,n,n,A.jQ,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cFl(d,e){var w,v,u,t=this,s=null,r=t.x===D.EH?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bc.j(e?0.25:0.15)
else r=A.v.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.edo(t,d)
u=B.c(d.c,s,s,s,s,s,s,A.Wq,s,s,s)
return B.aF(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.fW,B.A(B.a([u,A.db,B.c(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.M,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
akx(d,e){var w=null,v=B.c(d,w,w,w,w,w,w,A.ad9,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mE(w,u,v,w,this.r?w:new C.edf(this,d),w,w,w,w)},
bMK(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aoP,B.c("$"+A.i.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.EI?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eT,r,A.hk,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.hZ,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ed1(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ed2(s)
l.push(B.A(B.a([v,new B.JY(w,A.aD,r),B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.eAr:D.c1b,r,D.bad,42,r,42),A.cK,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cK,r,r,A.ai)],m),A.dG,r,A.e,A.h,0,r,r))
return B.o(r,B.x(l,A.am,r,A.e,A.M,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.m),r,r,r,A.tk,A.a1y,r,r,r)}}
C.aOI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.X3.prototype={
ak(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0m.prototype={
S(){return new C.aDk(null,null)},
bli(){return this.f.$0()}}
C.aDk.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,D.bDE,u,1,u,v)
w.cs(0)
v.d!==$&&B.aR()
v.d=w
w=B.bp(u,A.nP,u,1,u,v)
w.eU(0,!0)
v.e!==$&&B.aR()
v.e=w
w=B.bp(u,A.lV,u,1,u,v)
w.cK(0)
v.f!==$&&B.aR()
v.f=w
w=B.bp(u,A.za,u,1,u,v)
w.cs(0)
v.r!==$&&B.aR()
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
w.bzD()},
ceG(){var w=this.d
w===$&&B.d()
w.eJ(0).bF(new C.dqr(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aE(d,A.bY,x.w).w.a.a-32,360),h=A.v.j(0.82),g=k.gceF(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.d()
e[v]=new B.E7(new C.dqs(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.d()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.H,A.at.j(0.35),A.J,40),new B.ab(0,A.H,A.aN.j(0.25),A.fZ,28)],x.V)
r=k.e
r===$&&B.d()
q=k.r
q===$&&B.d()
q=B.c7(new B.he(B.a([r,q],x.U)),new C.dqt(k),j)
r=B.ol(A.k1,D.h9M,new C.dqu())
p=B.c("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cF,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2t(A.jT,"Resets in 24h"),A.aa,k.b2t(A.o_,"Help Topics ready")],o),A.l,j,A.b9,A.h,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dU(D.h3S,new C.dqv(k),B.dg(j,j,j,j,j,j,j,j,j,A.ac,j,j,A.kH,j,new B.b9(B.m(14),A.a1),new B.av(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.ar)
k.a.toString
l=B.m(14)
m.push(B.E(B.bJ(D.h9C,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kH,A.aN.j(0.5),new B.b9(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c7(w,new C.dqw(k),B.o(j,B.x(B.a([q,A.aA,r,A.S,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.h,0,j,j)],o),A.l,j,A.e,A.M,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.cax,A.m),j,j,j,j,U.aoF,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dqx(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aF(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b2t(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.W(d,A.at,w,w,w,13),A.e5,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.fW,w,w,w)}}
C.aNz.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.OY.prototype={}
C.qm.prototype={}
C.at0.prototype={
S(){return new C.aGJ(B.a([],x.E),B.a([],x.s))}}
C.aGJ.prototype={
gatq(){return A.i.D(B.Me(this.a.c.a,new C.erG(this)),0,1/0)},
aae(){var w,v=this,u=v.d,t=v.gatq()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rn(u.a,t,!0,!1)},
Km(d,e){var w,v,u,t=this,s=t.gatq(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gatq()
if(w<v-0.005)B.hKu(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rn(u.a,w,!0,!1)
B.rn(t.a.c.a,w,!0,!1)
B.BA(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aU.bZ$.push(o)
w=$.JC+1
$.JC=w
if(w===1){w=$.hvX
if(w!=null)w.$0()}v=$.heW.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m5(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aSj(u,A.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w8(w,u,r,q,s.e,p)}o.d=t}o.Qa()
o.aae()
$.aU.x1$.push(new C.esm(o))
o.Q=B.de(A.oK,new C.esn(o))
o.as=B.de(A.fV,new C.eso(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i1h()
w.a3()},
cHv(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9r(v,w)){if(C.heY(p,q.e)){q.l(new C.es4(q,p))
q.yI(!1,!0,!0)}else if(q.c!=null)q.l(new C.es5())
return}if(!C.ckg(v.c?v.bU():v)){q.l(new C.es6(p))
q.b2C(!1)
return}u=p.gDc()
if(u<=0)return
t=w.cZ(B.c0(B.bD(w),B.bL(w),B.bW(w),12,0,0,0,0))
s=C.heZ(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.l(new C.es7())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.es8(r))){q.l(new C.es9(p,w,u))
return}q.l(new C.esa(q,p,u,w))
q.aAM(new B.db(r,p.a,u,A.hf,A.fE,"Clock-in daily earnings (local)",null,null,A.cx,w))},
jn(d){if(d===A.h3)this.Fr()},
Qa(){var w,v,u,t,s,r,q,p=this.d
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
q=new B.w8(u,t,s,r,v.e,q)
u=q}w.x=u},
T5(d){return this.cG5(d)},
cG5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$T5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Qa()
t.Km(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$T5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$T5,v)},
Fr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fr=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(G.Aj(q.w,k,l,j,m,!1,n),$async$Fr)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.l(new C.es_(q,p))
q.T5(!1)}w=8
return B.b(q.Ky(),$async$Fr)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ac(h)
$.am.$1("[growth income] pull wallet: "+B.v(o))
w=9
return B.b(q.Ky(),$async$Fr)
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
return B.i($async$Fr,v)},
Ox(d){return this.bGK(d)},
bGJ(){return this.Ox(null)},
bGK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Ox=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Ox)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.cY(t.w,x.N)
r=s.qI("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.js(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.h1&&l.x===A.cx&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.l(new C.erH(j,t,i))
q.u(0,p)
r=B.B(q,B.a4(q).k("ci.E"))
t.w=r
w=4
return B.b(B.at2(t.a.c.a,r),$async$Ox)
case 4:t.aAe(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.c("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ox,v)},
Ky(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ky=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.es0(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.es1(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lM("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Ky)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gP(a2)
m=n
a3=J.t(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aI(J.t(m,"status"))
d=a3==null?null:A.i.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bk(r.e,new C.es2(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cx
else a0=J.z(k,2)?A.kP:A.dJ
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dJ&&h===A.cx&&a3[j].d===A.h1)J.c6(a6,l)
if(i===A.dJ&&h===A.kP&&r.e[j].d===A.f8){g=r.d
if(g!=null){r.Km(g.d+r.e[j].c,!1)
r.aAe(!1,!0)}}}}if(o&&r.c!=null)r.l(new C.es3())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.ac(a7)
$.am.$1("[growth income] refresh deposit status: "+B.v(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return B.b(r.Ox(a6),$async$Ky)
case 13:w=11
break
case 12:w=14
return B.b(r.bGJ(),$async$Ky)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ky,v)},
QY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vm(i.a,i),$async$QY)
case 3:h=e
if(t.c==null){w=1
break}t.l(new C.erL(t,h))
t.Qa()
t.aae()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Aj(s[0],p,q,o,r,!0,i),$async$QY)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Qa()
t.aae()
k=C.heY(n,m)
if(k)t.Km(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hwN(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Qa()
if(t.c==null){w=1
break}t.l(new C.erM(t,n,m,l))
if(i){t.yI(!1,!0,!0)
if(j==="reset"){B.hvw(t.a.c.a)
i=t.c
if(i!=null)B.hvz(i,null)}else if(j==="warn2"){B.hvx(t.a.c.a)
i=t.c
if(i!=null)C.hvA(i)}}else if(k)t.yI(!1,!0,!0)
else t.T5(!1)
case 1:return B.h(u,v)}})
return B.i($async$QY,v)},
yI(d,e,f){return this.cpq(d,e,f)},
aAe(d,e){return this.yI(d,!1,e)},
b2C(d){return this.yI(!1,d,!1)},
cpq(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.t_(r,o,q,!1,t.w,s,p),$async$yI)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JI(t.w,p,q,s,o,r)
if(f)t.T5(d)
case 1:return B.h(u,v)}})
return B.i($async$yI,v)},
ceX(){this.l(new C.erU())
this.aAe(!1,!0)},
agX(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cx&&B.tp(d)){w=r.a
w.f.$1(new B.db(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.ckc(q,d)
v=q.d=B.Me(r.a.c.a,new C.erR(r))
r.at=r.a.c.d=v
B.rn(q.a,v,!0,!1)
if(r.c!=null)r.l(new C.erS(r,d))
r.yI(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.db(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dJ
if(w&&d.d===A.h1)s=!1
else if(w&&d.d===A.f8){r.Km(q.d-d.c,!0)
s=!0}else{C.ckc(q,d)
w=d.d
s=w===A.f8||w===A.kx
r.Km(q.d,s)}r.l(new C.erT(r,d))
w=d.d
r.yI(s,e,w===A.f8||w===A.kx||d.x===A.cx||w===A.hf)},
aAM(d){return this.agX(d,!0,!1)},
b3J(d,e){return this.agX(d,!0,e)},
b3I(d,e){return this.agX(d,e,!1)},
ci8(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iwi(u,e,d)){v.mu("This plan is already active.")
return}w=B.hJZ(u.a,d,e)
if(C.ism(u.a,v.e,w)){v.mu("You already own this plan.")
return}if(u.d<g){v.mu("Insufficient balance. Add funds in the Wallet tab first.")
return}v.l(new C.erV(v))
v.l(new C.erW(v,u,new B.w8(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAM(new B.db(w,u.a,g,A.kx,A.fE,"Direct investment buy: "+d,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.l(new C.erX(v))
v.mu("Plan purchased: "+d)},
mu(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a1d(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hG(s,new C.apI(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a1d)
case 3:w=4
return B.b(t.QY(),$async$a1d)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a1d,v)},
ahq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hG(s,new C.akc(r,B.a([r],x.d9),A.Tp,t.a.d,t.gb3H(),t.gb2B(),null),!1,null,x.X),$async$ahq)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahq,v)},
aho(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aho=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hG(s,new C.anm(r,t.a.d,t.e,t.gb3H(),t.gb2B(),new C.erZ(t),null),!1,"LocalGrowthGameCenter",x.X),$async$aho)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aho,v)},
aeD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aeD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.heY(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2C(!0),$async$aeD)
case 5:case 4:if(j.x==null){t.mu("Choose an investment plan first, then come back to clock in.")
t.l(new C.erN(t))
w=1
break}if(B.lE(r)===6||B.lE(r)===7){t.mu("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hwO(r)){t.mu("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9r(q,r)&&j.fy>0){t.mu("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aT4(q,r))if(!B.aT4(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIJ(m.y,l,m.a))}}q=B.hJm(q,r)}else q=p
else q=p}else q=!1
if(q){t.mu("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mu("You are already clocked in for today.")
w=1
break}k=C.i2K(r)
q=j.a
t.l(new C.erO(j,r,k))
t.b3I(new B.db("local_clockin_manual_"+q+"_"+s,j.a,0,A.hf,A.fE,"Clock-in session started (local)",null,null,A.cx,r),!1)
t.mu("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aeD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nL:A.qD
if(l.d==null)return B.ec(A.lg,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fQD
u=u==null?k:u.$0()
u=J.aT(u==null?A.iM:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.an(0,q)||B.tp(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cV(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.ese(),B.T(v).k("Y<1>")))
A.d.b_(w,new C.esf())
v=l.d
v.toString
u=C.ihU(l.a.c)
t=l.d
t.toString
t=B.ec(new C.ao9(t,l.a.e,l.z,l.gci7(),l.aXL(),D.hEj),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ec(new C.aE8(l.aXL(),q,n,o,w,new C.esg(l),l.gcke(),new C.esh(l),D.hEk),j,!0)
m=B.aE(d,k,x.w).w
n=l.y
return new B.XV(n,new C.esi(l),B.aF(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.ec(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aE7(v,u,w,l.gc7W(),new C.esj(l),new C.esk(l),new C.esl(d),l.gcl6(),l.gcl1(),D.hEi),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bJa(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXL(){var w=null,v=B.a([D.f4.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.z,D.c63,A.f,w,w,new B.n(w,w,B.K(D.f4.j(0.38),A.r,1),w,B.a([new B.ab(0,A.H,D.f4.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erK(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bJa(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ab(0,A.H,A.v.j(0.5),A.eS,24),new B.ab(-2,A.H,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.OZ,B.bm(!0,B.as(new B.cO(I.afY,B.o(w,B.ce(new C.erI(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c9X,A.m),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9D(d){var w=null,v=this.y===d,u=D.dhi[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dx(w,!0,w,B.ay(A.c1,B.qu(B.oF(v?B.W(s,D.ahh,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.W(s,A.c.j(0.62),w,w,w,19),A.bC,B.c(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.h,0,A.p),A.iX,B.pZ(),A.b_,A.b_,B.LV())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erQ(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.ce,w),1)}}
C.aE7.prototype={
c6w(d){return C.heZ(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pP(new B.Y(v,new C.duX(),u),3,u.k("M.E"))
t=B.B(u,B.a4(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9r(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hwO(r)
m=v.gDc()
l=B.a([D.f4.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f4.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.H,D.f4.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.W(A.hL,D.f4,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cK,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ab(0,A.H,A.b2.j(0.45),A.cO,16)],j)
h=B.m(12)
g=x.p
j=B.bUY(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bYZ,A.f,e,e,new B.n(A.iV.j(0.78),e,e,h,e,e,A.m),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.cbz,A.m),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c52,A.f,e,e,new B.n(A.bt,e,B.K(D.akg,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hzr(A.fU,new C.duY(),k)
k=B.A(B.a([B.E(C.hzq(new C.duZ(f,A.rS,n),new B.V(Date.now(),0,!1),h,k),1),A.pg,B.E(new B.wt(new C.dv_(f,A.rS),e,new B.he(B.a([$.zo(),$.a4B()],x.U)),e),1)],g),A.l,e,A.e,A.h,0,e,e)
h=f.c9Q(A.rS,D.f4)
v=B.E(f.cDz("Total Profit","$"+B.dG(v.e),A.rS),1)
u=u?e:s.b
return B.ec(B.cc(B.x(B.a([j,A.S,k,A.af,new C.aE6(f.d,m,q,p,n,o,D.f4,f.gc6v(),f.f,e),A.af,h,A.S,B.A(B.a([v,A.pg,B.E(f.ba5("Total Investment","$"+B.dG(u==null?0:u),A.rS,f.r),1)],g),A.l,e,A.e,A.h,0,e,e),A.S,f.c6r(d,t,D.f4,w)],g),A.am,e,A.e,A.h,0,A.p),A.t,e,A.y,e,e,A.a24,e,e,A.ah),D.akg,!0)},
aAd(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.H,A.v.j(0.4),A.dm,18)],x.V)
return B.o(w,B.bv(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bP(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.m),A.bm,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.car,A.m),w,w,w,w,w,w,w,w)},
b2A(d,e,f,g){return this.aAd(d,e,f,A.ag,g)},
bcf(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2A(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFO,B.x(B.a([B.o(w,B.A(B.a([B.W(e,f,w,w,w,15),A.e5,B.c(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.m),w,w,w,w,A.aoU,w,w,w),A.aY,new B.dk(A.dv,A.a5,A.f,B.c(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.B,w,A.e,A.h,0,A.p),w)],r),w),w),f,A.lH,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9Q(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.bc(v,v,v,v),s,s,A.m),s,D.d0D[w],s,D.bJv,s,s,s,5))}r=B.o(s,B.A(o,A.dG,s,A.b9,A.h,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h5F,A.bC,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ab(0,A.H,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bk,new B.d6(1,A.cg,B.c("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.h,0,s,s)],p),A.B,s,A.e,A.h,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.v.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aAd(B.A(B.a([r,D.fr5,q,A.aa,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.W(A.o3,e.j(0.95),s,s,s,21),A.rw,B.c("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.F,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.h,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.m),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.h,0,s,s),e,A.a5,A.a1C,26)},
ba5(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b6G,v,v,A.m),v,v,v,A.nS,v,v,v,5),r=x.p
r=B.a([s,A.bb,B.E(B.x(B.a([B.A(B.a([B.W(u?A.tA:A.A2,t,v,v,v,14),A.e5,new B.d6(1,A.cg,B.c(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.h,0,v,v),A.al,new B.dk(A.dv,A.a5,A.f,B.c(e,v,1,v,v,v,v,D.fAs,v,v,v),v)],r),A.B,v,A.b9,A.h,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(X.OO,B.W(A.eL,A.c.j(0.35),v,v,v,v),v))
w=this.b2A(new B.a5(v,66,B.A(r,A.l,v,A.e,A.h,0,v,v),v),t,A.lI,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cDz(d,e,f){return this.ba5(d,e,f,null)},
c6r(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ab(0,A.H,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.c("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.W7,k,A.aY,B.o(m,B.c(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.m),m,m,m,m,A.a2h,m,m,m)],h),A.l,m,A.e,A.h,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a1q,B.x(B.a([B.W(A.hx,g,m,m,m,30),A.al,B.c("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bC,B.c("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.h,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mI(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f8||v===A.kx
t=u?A.hX:D.f4
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.av(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.W(u?A.tA:A.vq,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bE(r,r,r,r),new B.bc(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.m),m,38,m,m,m,m,m,38)
s=B.c(C.iqd(j),m,1,A.a2,m,m,m,A.kO,m,m,m)
q=C.hB3(j.y)
s=B.x(B.a([s,A.bC,B.c(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.B,m,A.e,A.h,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.c(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.bc(p,p,p,p),m,m,A.m),m,m,m,m,A.nY,m,m,m)
j=C.hJ_(j)
k.push(new B.D(A.Hv,new B.c3(A.aL,A.e,A.h,A.l,m,A.p,m,0,B.a([v,A.bb,new B.bx(1,A.ba,s,m),B.x(B.a([q,A.cT,B.c(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dG,m,A.e,A.h,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aAd(B.x(i,A.l,m,A.e,A.h,0,A.p),f,A.aX,D.bFZ,26)}}
C.aE6.prototype={
S(){return new C.bl6(null,null)},
cYr(d){return this.z.$1(d)},
cZM(){return this.Q.$0()}}
C.bl6.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,A.qQ,u,1,u,v)
w.cK(0)
v.d!==$&&B.aR()
v.d=w
w=B.bp(u,D.bDu,u,1,u,v)
w.cK(0)
v.e!==$&&B.aR()
v.e=w
w=B.bp(u,A.qT,u,1,u,v)
v.f!==$&&B.aR()
v.f=w
v.bbf()},
gbdZ(){var w=new B.V(Date.now(),0,!1)
if(B.lE(w)===6||B.lE(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bbf(){var w=this,v=w.a,u=v.e||v.f||w.gbdZ()
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
this.bbf()},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
w.bzU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdZ()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.duQ(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dAb:D.dA9
q=B.K((f?D.pw:A.b3).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.H,(f?A.aE:A.bc).j(0.16),A.fZ,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ad7(D.pw,130),h,h,h,-24,-30,h),B.ao(-36,i.ad7(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ad7(A.bc,120),h,h,h,-30,-36,h),B.ao(-40,i.ad7(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bv(l,new B.e6(B.c7(k,new C.duR(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bv(l,new B.e6(B.c7(k,new C.duS(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cO(D.b8B,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ab(0,A.H,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.aa,new B.d6(1,A.cg,B.c(u,h,1,A.a2,h,h,h,D.fGq,h,h,h),h)],n),A.l,h,A.e,A.M,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.m),h,h,h,h,A.hk,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hzr(A.fU,new C.duT(),l)
m.push(C.hzq(new C.duU(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cT(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b_,new B.n(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.m),A.CQ,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ad7(d,e){var w=null
return new B.dp(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beG.prototype={
b2D(d,e,f,g){var w=new B.aG($.R().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.ch(v,u,v+f,u))
w.E(new B.ch(v,u,v,u+f))
w.E(new B.ch(v,u,v-f,u))
w.E(new B.ch(v,u,v,t))
w.E(new B.by())
d.af(w,g)},
a2(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.i.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.i.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.T,A.Q,A.V,A.W,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2D(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.i.F(a7+p/3,1)
$.R()
n=new B.ar(A.T,A.Q,A.V,A.W,A.U)
n.b=A.ab
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
e=new B.ar(A.T,A.Q,A.V,A.W,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.T,A.Q,A.V,A.W,A.U)
i.b=A.ab
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hPa()
h=i.b
d=h.c
h=h.a.c
i.a2(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.T,A.Q,A.V,A.W,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2D(b2,o,3+g*3,i)
break
case 2:$.R()
i=new B.ar(A.T,A.Q,A.V,A.W,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.R()
a2=new B.ar(A.T,A.Q,A.V,A.W,A.U)
a2.c=1.8
a2.d=A.bG
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.R()
i=new B.ar(A.T,A.Q,A.V,A.W,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.R()
i=new B.ar(A.T,A.Q,A.V,A.W,A.U)
i.r=a7.j(0.28).gp(0)
i.y=A.oN
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.beF.prototype={
a2(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=B.a([],u)
q=new B.aG(a3,A.aj,e,e,r)
p=s-0.14361566416410484
r.push(new B.aZ(a0+Math.cos(p)*130,a2+Math.sin(p)*130))
q.ac()
p=new B.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(p)
o=q.f
if(o!=null)p.aj(o)
q.ac()
p=s+0.14361566416410484
o=new B.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(o)
n=q.f
if(n!=null)o.aj(n)
q.ac()
p=new B.aq(a0+Math.cos(p)*130,a2+Math.sin(p)*130)
r.push(p)
o=q.f
if(o!=null)p.aj(o)
q.ac()
p=new B.by()
r.push(p)
r=q.f
if(r!=null)p.aj(r)
q.ac()
a5.af(q,a4)}a0=w*2
a2=A.i.F(a0,1)
a3=a5.c
J.br(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.sam(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.fjy))
a5.aE(new B.a2(-18,a2,18,a2+a1*3),v)
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
v=B.bu(D.fk5,A.Fb)
u=new B.ar(A.T,A.Q,A.V,A.W,A.U)
u.r=D.aF0[A.o.F(t,6)].j(k*0.9).gp(0)
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
f=D.aF0[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.R()
r=new B.ar(A.T,A.Q,A.V,A.W,A.U)
r.c=2
r.d=A.bG
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.T,A.Q,A.V,A.W,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.R()
a2=new B.ar(A.T,A.Q,A.V,A.W,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aD(d){return d.b!==this.b}}
C.beE.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
w=B.L()
w.b=A.ab
w.c=14
v=f.d
w.r=(v?f.r:A.b3).j(0.22).gp(0)
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
p=new B.aG(t,A.aj,e,e,B.a([],q))
p.E(new B.jx(B.bX(a1,a3)))
a4.mz(0,p)
p=B.bX(a1,a3)
o=B.L()
o.sam(D.eHN.aA(0,B.bX(a1,a3)))
a4.aE(p,o)
n=A.i.D(f.b,0,1)
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
if(g!=null)h.aj(g)
k.ac()}k.E(new B.aq(t,a0))
k.E(new B.by())
$.R()
d=B.L()
a0=x.O
t=f.e
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f4.j(0.34),A.cX.j(0.62)],a0)
d.sam(new B.a7(A.aX,A.b1,A.x,a0,e,e).aA(0,B.bX(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.ab
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aE8.prototype={
S(){var w=$.ax()
return new C.aE9(new B.at(A.ax,w),new B.at(A.ax,w))},
blb(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aE9.prototype={
t(){var w=this.d,v=$.ax()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a3()},
mu(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cFu(d){this.a.blb(d,!0)
this.mu("Deposit submitted. Admin will review your payment proof.")
this.l(new C.dvg())},
cE4(){var w,v,u=this,t=B.cA(u.d.a.a)
if(t==null||t<=0){u.mu("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hG(w,new C.as7(v.d,t,u.gcFt(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cMe(){var w,v,u,t,s=this,r=s.d,q=B.cA(r.a.a)
if(q==null||q<=0){s.mu("Enter an amount to withdraw.")
return}if(q<10){s.mu("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mu("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hKs(w.a.a)
if(v.length===0){s.mu("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.blb(new B.db("wd_"+1000*Date.now(),s.a.d.a,q,A.f8,A.ld,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dJ,new B.V(Date.now(),0,!1)),!0)
s.mu("Withdrawal submitted \u2014 waiting for admin approval.")
r.bN(0,A.ch)
w.bN(0,A.ch)
s.l(new C.dvh())},
cIP(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cx||!this.aZI(r)||B.hni(r))continue
q=r.d
p=q===A.f8||q===A.kx||q===A.eN
q=r.c
if(p)t+=q
else u+=q}return new B.bsf(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cIP(),p=s.a.r,o=new B.Y(p,new C.dvi(),B.T(p).k("Y<1>")).gJ(0)
p=B.aE(d,A.dF,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f4.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f4.j(0.38),A.r,1)
w=B.bUY(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.z,B.W(Q.as8,D.f4,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cK,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bHG(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asZ(A.vq,"Deposit",0),s.asZ(A.tA,"Withdraw",1),s.asZ(A.fY,"History",2)],t),A.l,r,A.rh,A.h,0,r,r)
return B.ec(B.bm(!1,B.cc(B.x(B.a([w,A.bx,u,A.dc,v,A.dc,B.oF(s.f===2?s.c3h():s.c9h(),A.iq,B.pZ(),A.b_,A.b_,B.LV())],t),A.am,r,A.e,A.h,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.Cj,!0)},
bHG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cd(g,"@")
v=A.a.az(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aY(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCw(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCw(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCw(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bP(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.m),A.bm,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b4(h,h,h,new C.be5(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.ccG,A.m),h,28,h,h,h,h,h,38),A.aY,D.hev],p),A.l,h,A.e,A.h,0,h,h)
o=B.c("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asR(new C.dv2(i),D.fMd,i.a.d.a)
m=B.a([B.E(i.aS4(A.r0,"In",d),1),B.E(i.aS4(A.r1,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.jk.j(0.6),A.r,1)
m.push(B.o(h,B.c(""+f+" pending",h,h,h,h,h,h,D.fHo,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.m),h,h,h,h,A.nY,h,h,h))}return new B.fH(1.62,B.bv(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eGY,u,t,s,r,new B.D(S.tn,B.x(B.a([q,A.aY,o,A.bC,new B.dk(A.dv,A.a5,A.f,n,h),A.aY,B.A(m,A.l,h,A.e,A.h,0,h,h),A.al,B.c(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.B,h,A.e,A.h,0,A.p),h)],p),h),A.aq),h)},
aCw(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aS4(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.W(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bk,new B.d6(1,A.cg,new B.dk(A.dv,A.a5,A.f,B.c(e+"  $"+B.dG(f),w,w,w,w,w,w,A.np,w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w)},
asZ(d,e,f){var w=null,v=this.f===f,u=v?D.ce5:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f4.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.H,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cT(w,B.W(d,v?D.ahh:D.f4,w,w,w,26),w,w,A.cn,new B.n(w,w,t,w,s,u,A.a6),A.Hp,w,62,w,w,w,w,w,62)
return B.ay(A.c1,new B.a5(92,w,B.x(B.a([u,A.aW0,B.c(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dv1(this,f),w,w,w,w,w,w,!1,A.a4)},
c9h(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cA(a1.a.a)
if(a2==null)a2=0
w=a0?D.f4:A.ct
v=a2>0
u=new C.dvd(e,w)
t=new C.dvc()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.uS,A.uS],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.H,A.v.j(0.35),A.eS,22)],n)
l=w.j(0.15)
l=B.o(d,B.W(a0?A.vq:A.tA,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.c(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fM,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.ar,k,B.o(d,B.A(B.a([B.W(A.hL,w,d,d,d,14),B.c("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.F,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.M,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.m),d,d,d,d,A.lu,d,d,d)],h),A.l,d,A.e,A.h,0,d,d)
l=B.c("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.v0(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.hv,l,d),A.db,B.aZw(new B.cO(D.b8U,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eT,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.ef,d,d,d,1,d,d,!1,"\u2022",d,new C.dvb(e),d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,D.fP7,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.B,d,A.b9,A.h,0,d,d)
a1=v?120:60
a1=B.as(B.cT(d,d,d,d,A.b_,new B.n(d,d,d,B.m(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.m),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.c(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.ci3:D.cwT
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.al,a1,A.P,q,A.aA,B.A(l,A.l,d,A.e,A.h,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.W(A.hL,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aA,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bA(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.m(16),new B.av(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.m(16),new B.av(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,A.ns,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.f0),B.iT(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f4)],h),A.l,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.m),d,d,d,d,A.hw,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.TP:A.a5P
n=B.a([new B.ab(0,A.H,(a0?A.b5:A.dZ).j(0.45),A.dm,18)],n)
k=a0?e.gcE3():e.gcMd()
j=B.W(a0?A.a3M:A.m2,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bP(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.m),A.bm,B.lU(j,B.c(i,d,d,d,d,d,d,A.m8,d,d,d),k,B.fv(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.b9(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.am,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aX,A.b1,A.x,p,A.xy,d),A.m),d,d,new B.bl("form"+s,x.W),d,A.wX,d,d,d)},
c3h(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.dv5(a0),a3),a3.k("M.E"))
A.d.b_(a4,new C.dv6())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fQD
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iM:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.iqM(a2,B.Me(a0.a.e,new C.dv7(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bN_,B.aM(!1,v,!0,B.o(a1,D.fl1,A.f,a1,a1,new B.n(a1,a1,B.K(D.f4.j(0.4),A.r,1),u,a1,a1,A.m),a1,a1,a1,a1,A.lW,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dv8(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.h,0,a1,a1),A.S],q)
if(a4.length===0)u.push(new B.D(D.bEr,B.x(B.a([B.W(A.I_,A.c.j(0.25),a1,a1,a1,40),A.S,D.hb0],q),A.l,a1,A.e,A.h,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cU(a4,0,B.dy(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gJ(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f8||k===A.kx||k===A.eN
if(l===A.cx)i=j?A.c_:D.f4
else i=l===A.dJ?A.jk:A.fn
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.av(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.W(j?A.tA:A.vq,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bE(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.c(a0.bYf(n),a1,a1,a1,a1,a1,a1,A.ja,a1,a1,a1)
e=C.hB3(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bC,B.c(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.c(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kP)f.push(new B.D(A.a1u,new B.Dc(A.bI,5,4,A.br,B.a([a0.aQZ("Before",m.b),a0.aQZ("After",m.a)],q),a1),a1))
m=B.x(f,A.B,a1,A.e,A.h,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.c(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hJ_(n)
v.push(B.o(a1,new B.c3(A.aL,A.e,A.h,A.l,a1,A.p,a1,0,B.a([k,A.bb,new B.bx(1,A.ba,m,a1),A.aa,B.x(B.a([f,A.au,B.o(a1,B.c(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.F,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.bc(d,d,d,d),a1,a1,A.m),a1,a1,a1,a1,A.zt,a1,a1,a1)],q),A.dG,a1,A.e,A.h,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bE(A.a1,A.a1,new B.av(l,1,A.r,-1),A.a1),a1,a1,a1,A.m),a1,a1,a1,a1,A.qU,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hq(D.c35,B.c("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cb,a1,a1,a1),new C.dv9(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.am,a1,A.e,A.h,0,A.p),A.f,a1,a1,new B.n(A.uS,a1,a3,a2,a1,a1,A.m),a1,a1,D.hDW,a1,D.bGP,a1,a1,a1)},
aQZ(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zx(B.cR(B.a([s,B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fMo,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.nc,w,w,w)},
aZI(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eN)return d.c>0
if(B.tp(d))return!1
if(v===A.h1||v===A.f8)return!0
if(v===A.pl||v===A.kx)return!0
if(v===A.kQ)return!0
if(v===A.hf)return A.a.q(w,"clock-in")||d.c>0
return!1},
bYf(d){var w,v=d.f
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
C.be5.prototype={
a2(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bkw.j(0.55).gp(0)
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
C.bzi.prototype={
a2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a2(0,p,s,p+80)
n=[A.bc,A.hg,A.bv][q]
$.R()
p=new B.ar(A.T,A.Q,A.V,A.W,A.U)
p.sam(new B.a7(A.aX,A.b1,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aA(0,o))
a1.aE(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.R()
r=new B.ar(A.T,A.Q,A.V,A.W,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.T,A.Q,A.V,A.W,A.U)
h.r=A.pB.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.i.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.R()
e=new B.ar(A.T,A.Q,A.V,A.W,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bG
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.i.F(v+m*0.25,1)
t=A.pB.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jQ(new B.es("z",a0,a0,A.cN,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.bW,new B.jk(1),a0,a0,a0,a0,A.bX,a0,A.cw)
d.e5()
d.a2(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aNP.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.bBh.prototype={}
C.b2t.prototype={}
C.a1a.prototype={
S(){return new C.aGx(new B.at(A.ax,$.ax()))},
d_X(d,e){return this.d.$2(d,e)}}
C.aGx.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
b2I(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.l(new C.emj(w))
return}u=w.c
u.toString
B.a8(u,!1).N(null)
w.a.d_X(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aE(a0,A.f_,e).w
e=B.aE(a0,A.dF,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.m),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c2q,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ab(0,A.H,A.fj.j(0.5),A.J,18)],v),D.auT,A.a6),f,52,f,f,f,f,f,52),A.er,B.E(B.x(B.a([D.fZ1,A.bC,B.c(g.a.c,f,1,A.a2,f,f,f,A.m6,f,f,f)],u),A.B,f,A.e,A.h,0,A.p),1),B.aH(f,f,f,f,D.c3k,f,f,f,new C.emm(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.h,0,f,f)
s=g.b9O(A.f1,"You",A.ct)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.l1,B.o(f,D.h2f,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.m),f,f,f,f,A.fW,f,f,f),f),g.b9O(A.xg,"Your friend",A.c4)],u),A.l,f,A.e,A.h,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.av(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b7G),f,f,f,f,f,f,f,f,A.Fx,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c5Z,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mI,f,f,f,1,f,f,!1,"\u2022",f,new C.emn(g),f,new C.emo(g),f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.jI,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.crS[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.auS:f
p=p?f:A.c.j(0.06)
k=new B.av(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.c(j,f,f,f,f,f,f,A.dn,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bx(1,A.ba,B.ay(f,B.cT(f,B.x(B.a([i,B.c(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.h,0,A.p),f,f,A.b_,new B.n(p,f,new B.bE(k,k,k,k),new B.bc(s,s,s,s),f,n,A.m),A.eI,f,f,f,f,A.fa,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.emp(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.aa)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.h,0,f,f)
r=B.A(B.a([B.W(A.l4,A.c.j(0.5),f,f,f,15),A.bk,B.E(B.c("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.h,0,f,f)
p=B.m(18)
v=B.a([new B.ab(0,A.H,A.bA.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h6i,A.al,o,A.aO,D.haP,A.P,s,A.aA,r,A.aO,new B.a5(f,54,new B.bP(new B.n(f,f,f,p,v,D.ccV,A.m),A.bm,B.hq(D.at4,B.c("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fM,f,f,f),g.gcfi(),f),f),f)],u),A.am,f,A.e,A.M,0,A.p),A.f,f,f,D.b9H,f,f,f,f,D.bIb,f,f,f),f)},
b9O(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.W(d,f,w,w,w,24),A.au,B.c(e,w,w,w,w,w,w,A.Fz,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.fa,w,w,w),1)}}
C.pF.prototype={}
C.bu5.prototype={
a2(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.T,A.Q,A.V,A.W,A.U)
if(w===0)r=A.bh
else r=(w&1)===0?A.bE:A.a_
v.r=r.gp(0)
d.cQ(B.bX(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iT.gp(0)
r.b=A.ab
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fs(s,A.cw,s,s,s,B.cR(s,s,s,s,s,s,s,s,s,A.aYz,B.v(r)),A.a7,A.bW,s,A.dD,A.bX)
u.e5()
r=u.b
t=r.c
r=r.a.c
u.a2(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aD(d){return d.b!=this.b}}
C.FG.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.atr.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
btb(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.heG("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c47()
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
s.b0N(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKR.h(0,d)
s.c=w==null?"Play to earn":w}},
beK(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.ba(w,new C.clS(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cJt(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atv(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.ba(t,new C.clT(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.iZ(e.h(0,q)))o=B.dR(e.h(0,q))
else{o=B.cb(B.v(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bK2(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atv(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.ba(t,new C.clU(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iZ(e.h(0,p)))o=B.dR(e.h(0,p))
else{o=B.cb(B.v(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bLo(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atv(e,f)
break}},
cUx(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEG())
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
q=B.B(new B.N(q,new C.clW(),p),p.k("ak.E"))
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
q=B.B(new B.N(q,new C.clX(),p),p.k("ak.E"))
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
default:q=B.dH(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aEG(){var w,v,u,t=this
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
atv(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cJt(d,e){var w,v,u,t,s,r="playerXEmail"
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
bK2(d,e){var w,v,u,t,s
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
bLo(d,e){var w,v,u,t,s,r,q
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
V2(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gks())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEG():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c47(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iD(8,new C.clP(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0N(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bN(0,A.ch)},
d3J(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gks())w=1
else{v=r.d
v=v==null?null:v.d
w=r.V2(q,v==null?"":v)?r.z:-1}if(!r.gks()){v=r.d
v=v==null?null:v.d
v=!r.V2(q,v==null?"":v)}else v=!1
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
if(r.aaY(2)){r.acy(1)
return!0}if(r.aaY(1)){r.acy(2)
return!0}if(r.gks()&&r.z===2){r.bFU(f)
if(r.aaY(2)){r.acy(1)
return!0}if(r.aaY(1)){r.acy(2)
return!0}}}return!1},
acy(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bFU(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
aaY(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d3L(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.rk
if(!s.gks()){w=s.d
w=w!=null&&!s.V2("tic_tac_go",w.d)}else w=!1
if(w)return D.rk
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ald(v))return s.aWm(v,!0)
if(!A.d.q(s.at,""))return s.aWn()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEG())
s.c=s.b0g()
return D.rk}if(s.gks()){t=s.cqE(e)
if(t>=0){s.at[t]="O"
if(s.ald("O"))return s.aWm("O",!1)
if(!A.d.q(s.at,""))return s.aWn()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b0g()
return D.rk},
b0g(){var w=this.d
if(w==null)return"Take your turn"
return this.V2("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aWm(d,e){var w,v,u=this
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
return e?D.rl:D.JZ},
aWn(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.UM},
cqE(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ald("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ald("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dhK[u]
if(v[w].length===0)return w}return-1},
ald(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dq6[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a52(d){return A.d.cC(d,0,new C.clV())},
cO2(d){this.ay.push(1+d.aw(10))
if(this.a52(this.ay)>21)return!0
return!1},
cO3(d){var w,v,u,t=this
while(t.a52(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a52(t.ay)
v=t.a52(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cTT(d,e){var w,v,u,t=this
if(t.e)return D.rk
if(!t.gks()){w=t.d
w=w!=null&&!t.V2("connect_four_pro",w.d)}else w=!1
if(w)return D.rk
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.rk
if(!t.aij(d,w))return D.rk
if(t.aaM(t.fx))return t.aWk(t.fx,!0)
if(t.aRO())return t.aWl()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cq0(e)
if(u>=0){t.aij(u,2)
if(t.aaM(2))return t.aWk(2,!1)
if(t.aRO())return t.aWl()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bK1()
return D.rk},
bK1(){var w=this.d
if(w==null)return"Drop a disc"
return this.V2("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aij(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRO(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aWk(d,e){var w,v,u,t=this
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
return e?D.rl:D.JZ},
aWl(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.UM},
cq0(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aij(w,2)
v=r.aaM(2)
r.bcs(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aij(w,1)
u=r.aaM(1)
r.bcs(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bcs(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaM(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bK3(w,v,d))return!0}return!1},
bK3(d,e,f){var w,v,u,t,s=new C.clO(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfI(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0N(d)}return w.a>=w.b}}
C.aum.prototype={
S(){return new C.aHn(null,null)},
cZQ(d){return this.e.$1(d)}}
C.aHn.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,D.bDx,null,1,null,v)
w.eU(0,!0)
v.d=w
v.a.d.aV(0,v.gb3d())
v.aAy()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bN(0,A.ch)
this.aAy()}},
aAy(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ajf(t,u)
C.ajf(t,u)
w.a.cZQ(s)
w.a.toString
w.l(new C.eV5())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb3d())
w=v.d
w===$&&B.d()
w.t()
v.bBr()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ajf(j,i),g=C.ajf(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.d()
u=new B.aP(1,1)
d.push(new B.x2(new B.d5(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.bc(u,u,u,u),B.a([new B.ab(0,A.H,A.aQ.j(0.6),A.J,6)],k),l,A.m),l,22,l,A.a1Z,l,l,l,3),l),A.Vk,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.es(v,l,l,A.cN,l,l,l,l,l,l,D.fJc))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cF}else if(s===t){r=A.be
q=A.O}else{r=A.aB
q=A.F}d.push(new B.es(t,l,l,A.cN,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.d()
d.push(new B.x2(new B.d5(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.Vk,l,l))}p=f===0?0:A.i.T(h/f*100)
k=A.v.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b3c("Correct",""+h,A.bh),A.aa,m.b3c("Wrong / missed",""+(f-g),A.aB),A.aY,B.c(""+p+"% accuracy",l,l,l,l,l,l,D.fAK,l,l,l)],o),A.l,l,A.e,A.h,0,l,l),A.al,D.h3o],o),A.B,l,A.e,A.h,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.m),l,l,l,l,A.bl,l,l,l)
u=B.E(B.cc(new B.abz(l,B.cR(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.v.j(0.35)
return B.x(B.a([v,A.af,u,A.S,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b7z),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,K.acY,!0,A.a7,l,A.ao,l,l,l,l)],o),A.am,l,A.e,A.h,0,A.p)},
b3c(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.c(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,w,w,w,A.fW,w,w,w)}}
C.aPk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","H(is,is)","~([ya?])","Q(ri)","ri()","H(rV,rV)","Q(rV)","H(rW,rW)","QN(Z)","Q(is)","cM(afu)","a0S(Z)","a_Y(Z)","agf(Z)","a8i(Z)","OH(Z)","af6(Z,hy<ai<ju>>)","af5(Z,H)","w(ri)","rV(aa<@,@>)","~(FG,atr)","Oz(Z)","aa<q,@>(rV)","rW(aa<@,@>)","aa<q,@>(kM)","aa<q,@>(rW)","Q(rW)","aa<q,@>(lZ)","lZ(@)","aa<q,@>(iE)","iE(@)","is(@)","aA<~>(kM)","aa<q,@>(is)","~(H,H)","is(is)","X1(Z)","aA<Q>(ai<is>)","a0R(Z)","~(is)","a1D(Z)","X2(Z)","q(is)","Q(lZ)","xP(bB<H,lZ>)","adB(Z,H)","H(iE,iE)","adr(lZ)","w(t0)","bx(JP)","a0m(Z)","~(db{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(db)","a1a(Z)","~(FG)","q(q)","a1E(Z)"])
C.cCI.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCJ(r,w,s.b,v,s.d)
t=s.e
r.b=B.de(t,u)
v.r=new C.cCF(r)
v.e=new C.cCG(r,w)
v.f=new C.cCH(r,w,t,u)},
$S:0}
C.cCJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ac(r)
u=B.ct(r)
s=v
q=u
p=B.Hg(s,q)
if(p==null)p=new B.jY(s,q==null?B.I3(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:42}
C.cCF.prototype={
$0(){this.a.b.a1(0)
return $.HS()},
$S:2086}
C.cCG.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaT.$0()
this.a.b.a1(0)},
$S:0}
C.cCH.prototype={
$0(){var w,v=this,u=v.b,t=B.du(0,0,u.gbhT(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cCE(w,u,v.d))},
$S:0}
C.cCE.prototype={
$0(){var w=this.c
this.a.b=B.de(this.b,w)
w.$1(null)},
$S:0}
C.fh2.prototype={
$1(d){var w=this.a
w.l(new C.fh1(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fh1.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hy(D.amm,this.b,null,null,v.$ti.k("hy<1>"))},
$S:0}
C.fh4.prototype={
$2(d,e){var w=this.a
w.l(new C.fh_(w,d,e))},
$S:61}
C.fh_.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hy(D.amm,null,this.b,this.c,v.$ti.k("hy<1>"))},
$S:0}
C.fh3.prototype={
$0(){var w=this.a
w.l(new C.fh0(w))},
$S:0}
C.fh0.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hy(A.z4,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fUB.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cx},
$S:15}
C.fUt.prototype={
$1(d){return d},
$S:13}
C.fAH.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.c("NGMY",w,1,A.eZ,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.agd,w,v,w,w,w,w,w,v)},
$S:150}
C.fAE.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.fAF.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kJ(w,A.z,v.d,new C.fAD(v.e),A.hb,v.c,!0,v.b,null,null,v.a)},
$S:2087}
C.fAD.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.fAG.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.dmS.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dn2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dnk.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnl.prototype={
$1(d){return this.a.KA()},
$S:12}
C.dna.prototype={
$0(){var w=J.ba(this.b,new C.dn9(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dn9.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnb.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,aa<q,@>>")
v=B.B(new B.N(v,new C.dn8(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dn8.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnd.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,aa<q,@>>")
v=B.B(new B.N(v,new C.dnc(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dnc.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dn5.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.ch5(t.a.c)?2:3
break
case 2:w=4
return B.b(C.as0(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.l(new C.dn3(t))
case 3:if(t.c!=null)t.l(new C.dn4(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:46}
C.dn3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dn4.prototype={
$0(){return this.a.d++},
$S:0}
C.dn6.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dn7.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmY.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.iyb(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aj4(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.KA(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a6(s)
C.imO(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aj4(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.KA(),$async$$0)
case 3:t.Jj(A.d.dA(t.y,new C.dmW(s),new C.dmX(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmW.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmX.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dn_.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dn0.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dn1.prototype={
$0(){return this.a.Jj(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dmV.prototype={
$0(){return this.a.c7G(this.b)},
$S:0}
C.dmU.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.iyF(u,w.b,new C.dmT(v,w))},
$S:0}
C.dmT.prototype={
$2(d,e){return this.a.ajH(this.b,d,e)},
$S:735}
C.dnj.prototype={
$2(d,e){if(d)return
this.a.aVZ()},
$S:131}
C.dnh.prototype={
$2(d,e){var w=this.a
return new B.le(C.b2s(w.a.c.a),new C.dng(w,this.b,this.c),null,null,x.gH)},
$S:2089}
C.dng.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.c(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aF(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.ke,B.bKv(A.d3,B.W(A.fY,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dnf(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:2090}
C.dnf.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fQS(s.c.a,s.e).eG(new C.dne())
w=2
return B.b(C.bHM(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dne.prototype={
$1(d){},
$S:33}
C.dni.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0w.prototype={
$0(){var w=this.a
return B.Me(w.a.c.a,new C.e0v(w))},
$S:85}
C.e0v.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0x.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.d()
u.bh=t.ak()
v.bv()
w.l(new C.e0u())},
$S:0}
C.e0u.prototype={
$0(){},
$S:0}
C.e0y.prototype={
$2(d,e){var w,v=this.a
if(!C.ch5(v.a.c)){if($.heB.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.heC(this.b,v.x,w)
return!1}C.as0(v.a.c.a)}if(B.Me(v.a.c.a,new C.e0t(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aKc()
w=v.a
w.toString
w.hK(new B.db(A.o.v(1000*Date.now()),v.a.c.a,d,A.kx,A.fE,e,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:2091}
C.e0t.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.e0z.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.db(u,s.c.a,d,A.hf,A.fE,e,v,v,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.i.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vi(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2092}
C.dmM.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.dmP.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.dmQ.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.dmR.prototype={
$1(d){var w=null,v=this.a,u=B.fv(w,w,v.e===d?A.bh:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.fc,B.iB(B.c("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dmO(v,d),u),w),1)},
$S:244}
C.dmO.prototype={
$0(){var w=this.a
return w.l(new C.dmN(w,this.b))},
$S:0}
C.dmN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.doE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.doH.prototype={
$1(d){this.a.cr_()
return null},
$S:12}
C.doI.prototype={
$1(d){return this.a.cHw()},
$S:12}
C.doJ.prototype={
$1(d){this.a.a48()
return null},
$S:12}
C.doK.prototype={
$1(d){this.a.akN()
return null},
$S:12}
C.doL.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.d()
if(w<=0){v.l(new C.doF(v))
w=v.as
if(w!=null)w.a1(0)
v.FS()
return}v.l(new C.doG(v))},
$S:12}
C.doF.prototype={
$0(){return this.a.Q=0},
$S:0}
C.doG.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.d()
w.Q=v-1
return v},
$S:0}
C.dnU.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnV.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.don.prototype={
$1(d){return this.a.go.q(0,d)},
$S:31}
C.doo.prototype={
$0(){},
$S:0}
C.do9.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.doa.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dob.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.doc.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dod.prototype={
$0(){},
$S:0}
C.dnm.prototype={
$0(){var w=this.a,v=w.x2,u=B.v(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dnT.prototype={
$0(){var w=this.a
w.at=this.b
w.b9i()},
$S:0}
C.dop.prototype={
$0(){},
$S:0}
C.doy.prototype={
$0(){},
$S:0}
C.dom.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.dol(w))},
$S:0}
C.dol.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dnR.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dnS.prototype={
$0(){},
$S:0}
C.dot.prototype={
$1(d){return d==null},
$S:242}
C.dou.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.dov.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dnn.prototype={
$1(d){return d==null},
$S:242}
C.dno.prototype={
$0(){return this.a.bh++},
$S:0}
C.dnp.prototype={
$0(){},
$S:0}
C.do2.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.do3.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nm.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.do4.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.do1(w))},
$S:11}
C.do1.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.doe.prototype={
$0(){return this.a.y1++},
$S:0}
C.dof.prototype={
$0(){},
$S:0}
C.dog.prototype={
$0(){return this.a.y2++},
$S:0}
C.doh.prototype={
$0(){},
$S:0}
C.doi.prototype={
$0(){return this.a.bd++},
$S:0}
C.doj.prototype={
$0(){},
$S:0}
C.dos.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.do5.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.do6.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.do7.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.do8.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dow.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dox.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dnq.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnr.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dns.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnt.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.doq.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dor.prototype={
$0(){var w,v=this.a;++v.x2
v.aRA()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.v(Math.min(w+2,7))+" tiles"},
$S:0}
C.do0.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dok.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnZ.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.do_.prototype={
$2(d,e){return d+e.length},
$S:191}
C.doz.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.doA.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.doB.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.doD.prototype={
$1(d){var w=this.a,v=w.PD(),u=v<=0?0:A.i.D(w.AT()/v,0,1),t=w.a.x,s=t*1.46
return new C.Oz(w.f?s:s*u,s,t,null)},
$S:z+22}
C.doC.prototype={
$1(d){return d.bW(0.85)},
$S:182}
C.dnY.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nm.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.c(p,w,w,w,w,w,w,A.ja,A.K,w,w),A.al,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iC(!0,w,w,A.y,new B.hQ(v,6,6,1,r),new C.dnX(q,r),q.fr.length,w,A.e2,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
$S:159}
C.dnX.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nm.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nm.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.av_:D.caA,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.av_:D.auT
v=o?B.K(A.dA,A.r,2):s
u=B.a([new B.ab(0,A.H,B.a0(51,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cT(s,B.as(n?B.W(D.cFE[r.fr[e]],A.c,s,s,s,t):B.c("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b_,new B.n(s,s,v,k,u,w,A.m),A.eI,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dnW(r,e),s,s,s,s,s,s,s)},
$S:205}
C.dnW.prototype={
$0(){return this.a.cqk(this.b)},
$S:0}
C.dnG.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(89,A.bh.m()>>>16&255,A.bh.m()>>>8&255,A.bh.m()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.c(t?"":u,w,w,w,w,w,w,D.aXw,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.m),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnF(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:716}
C.dnF.prototype={
$0(){return this.a.cGL(this.b)},
$S:0}
C.dnH.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
return B.aF(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.z,B.c(u,w,w,w,w,w,w,D.aXw,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnE(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:716}
C.dnE.prototype={
$0(){return this.a.cGK(this.b)},
$S:0}
C.dnI.prototype={
$1(d){return this.a.l(new C.dnD())},
$S:25}
C.dnD.prototype={
$0(){},
$S:0}
C.dnJ.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.d()
w=C.ajf(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nm.q(0,u.a.e)){u.a2n()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dnB())
t=u.dx
if(t>=v)u.uC("All 5 sentences perfect \u2014 full payout!")
else u.Fh(t/v,t,v)}}else{if(u.ghR()&&D.nm.q(0,u.a.e))u.a2n()
u.l(new C.dnC(u))}},
$S:0}
C.dnB.prototype={
$2(d,e){return d+e.length},
$S:191}
C.dnC.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bN(0,A.ch)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnK.prototype={
$1(d){var w=null,v=B.fv(w,w,B.a0(38,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,A.cm,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a5(1/0,w,B.iB(B.c(d,w,w,w,w,w,w,Q.aXp,w,w,w),new C.dnA(this.a,d),v),w),w)},
$S:153}
C.dnA.prototype={
$0(){return this.a.b8F(this.b)},
$S:0}
C.dnL.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.d()
w=u*3+8
return B.x(B.a([B.c(s,v,v,v,v,v,v,A.q9,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iC(!0,v,v,A.y,new B.hQ(3,4,4,1,u),new C.dnz(t,u),9,v,A.e2,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
$S:159}
C.dnz.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6p(e),p=r===0
if(p)w=A.L
else w=q?A.bh:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v=B.m(10)
s=p?t:new C.dnv(s,e)
u=B.m(10)
p=p?"":""+r
return B.aF(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.c(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:84}
C.dnv.prototype={
$0(){return this.a.cGJ(this.b)},
$S:0}
C.dnM.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dny(q,d)
p=B.m(16)
if(o)w=D.a70[d]
else{w=D.a70[d]
w=B.a0(31,w.m()>>>16&255,w.m()>>>8&255,w.m()&255)}v=B.m(16)
u=o?B.a0(A.i.T(127.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a70[d]
t=B.a([new B.ab(0,A.H,B.a0(217,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cT(r,r,r,r,A.b_,new B.n(w,r,u,v,t,r,A.m),M.CS,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2095}
C.dny.prototype={
$0(){return this.a.cGM(this.b)},
$S:0}
C.dnN.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.d()
q=B.c(q,t,t,t,t,t,t,A.q9,t,t,t)
w=B.c("Move "+r.aBd()+"/"+C.hlk(),t,t,t,t,t,t,A.FA,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.c("Round "+v+"/7 \xb7 "+B.v(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iC(!0,t,t,A.y,new B.hQ(3,6,6,1,s),new C.dnx(r),9,t,A.e2,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:159}
C.dnx.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bh:D.bmU,q=u?A.eC:D.bxB
return B.aF(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.m),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dnu(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:84}
C.dnu.prototype={
$0(){return this.a.cGG(this.b)},
$S:0}
C.dnO.prototype={
$0(){return this.a.b8F(this.b[this.c])},
$S:0}
C.dnP.prototype={
$0(){return this.a.l(new C.dnw())},
$S:0}
C.dnw.prototype={
$0(){},
$S:0}
C.dnQ.prototype={
$2(d,e){this.a.a16(d,e)
return null},
$S:z+21}
C.dsd.prototype={
$1(d){return this.a.cqP(this.b,d)},
$S:2096}
C.dsc.prototype={
$0(){var w=this
return w.a.a.d_o(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOJ.prototype={
$1(d){var w=this.a
w.a2D()
w.uL()},
$S:7}
C.cO3.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNU.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNV.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cOd.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cOa.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cOb.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cOc.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cO5.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.cO4(w))},
$S:0}
C.cO4.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNW.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cO8.prototype={
$1(d){var w=this.a
return new C.X1(w.fx,new C.cO7(w),w.a.f.r,null)},
$S:z+37}
C.cO7.prototype={
$1(d){return this.boq(d)},
boq(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ci8(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.l(new C.cO6(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cO6.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOw.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cOq.prototype={
$1(d){this.a.uL()
return null},
$S:12}
C.cOt.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ar(v.gaYW().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uL()
return}v.l(new C.cOs())},
$S:12}
C.cOs.prototype={
$0(){},
$S:0}
C.cOp.prototype={
$1(d){this.a.G_()
return null},
$S:12}
C.cOr.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cOo.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bh(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bh(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:40}
C.cO0.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bh(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bh(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:40}
C.cO1.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cO2.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3k(!0)},
$S:11}
C.cNZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cO_.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
if(w.f.length!==0)w.V6(this.b)},
$S:7}
C.cOg.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd3(v).Q
v.toString
if(this.b)w.iv(v)
else w.m6(v,A.e6,A.l0)},
$S:7}
C.cO9.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cOh.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOi.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.ba9()
w.r.bN(0,A.ch)
w.at=!0},
$S:0}
C.cOj.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cOk.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cOl.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cK(w.b)){w=J.ba(w.b,v.gcpI(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.ba9()},
$S:0}
C.cOm.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cOn.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cOe.prototype={
$1(d){return this.bor(d)},
bor(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a6(s)
q=r.h(s,"start")
p=B.bh(q==null?"":q)
q=r.h(s,"end")
o=B.bh(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bU()
w=5
return B.b(C.asn(q,new C.rV("cal_"+1000*n,m,l,(o==null?p.bQ(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atC()
case 4:k.c.L(x.q).f.U(B.b3(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:385}
C.cOv.prototype={
$1(d){return this.bos(d)},
bos(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:385}
C.cOf.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd3(v).Q
v.toString
w.iv(v)},
$S:7}
C.cOI.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.d()
if(v>0)w.ada(v-1)},
$S:0}
C.cOB.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.cOE.prototype={
$1(d){var w=this.a
w.l(new C.cOy(w,d))
if(d===0)w.a3k(!0)},
$S:25}
C.cOy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOC.prototype={
$2$size(d,e){return C.hjr(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2097}
C.cOD.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hx8(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.atf(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOz(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.asl(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uL(),$async$$0)
case 15:p.l(new C.cOA(p))
p.ada(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.uL(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.cOz.prototype={
$2(d,e){return this.bot(d,e)},
bot(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3S(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:137}
C.cOA.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOG.prototype={
$2(d,e){return A.aa},
$S:38}
C.cOF.prototype={
$2(d,e){var w=null,v=this.a,u=B.c((v.a.c.w?D.a77:D.a6o)[e],w,w,w,w,w,w,A.qc,w,w,w),t=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),s=B.a0(89,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
v=v.at?w:new C.cOx(v,e)
return B.mE(w,t,u,w,v,w,w,new B.av(s,1,A.r,-1),w)},
$S:646}
C.cOx.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a77:D.a6o
w.r.sb2(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOH.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNX.prototype={
$0(){return this.a.ada(0)},
$S:0}
C.cOu.prototype={
$0(){return this.a.ada(this.b)},
$S:0}
C.cNY.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c45,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.c("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aw,v,v,v,v,v,v,v,v,16,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a1r,B.x(B.a([u,A.af,s,A.al,B.c("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b6,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),v,v,v)}if(e<s)return u.bL2(t[e],w.c)
return u.aSe(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:43}
C.c5b.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.i.M(d)
return new B.V(B.h3(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bh(J.k(d))
return v==null?null:v.bU()},
$S:371}
C.c5a.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:852}
C.c5d.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bh(J.k(d))
w=w==null?null:w.bU()}return w},
$S:371}
C.c5c.prototype={
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
s=B.a6d(A.a7X,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a6d(A.a6m,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a6d(A.J8,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.db(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:642}
C.dIQ.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dIR.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dIH.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dIF.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.Bz(),$async$$0)
case 2:t=o.d
t===$&&B.d()
s=o.e
s===$&&B.d()
r=o.a.c
q=o.f
q===$&&B.d()
w=3
return B.b(C.hdC(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pG(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abD(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a8(s,!1).cb(B.e9(new C.dIO(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pG(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIO.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.d()
return new C.a0R(w.b,w.a,u,v,null)},
$S:z+39}
C.dIE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i2A(q)?3:4
break
case 3:w=5
return B.b(t.a.Fw(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b0_(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c5f(s.a.c))
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
return B.b(s.AJ(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aTz(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dID.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dIG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.af7(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.htU(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c5e(s,r.a.c,null)){r.lg(C.c5f(r.a.c))
w=1
break}w=4
return B.b(r.bNl(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIN.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.ax()),u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=x.p,r=B.x(B.a([B.c("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ac:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aA,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.m(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e9,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.B,w,A.e,A.M,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.dIL(d),w,w),B.bJ(D.fSp,w,new C.dIM(d,v),B.bn(A.aU,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h6D,w)},
$S:18}
C.dIL.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dIM.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a8(this.a,!1).N(w)
return null},
$S:0}
C.dII.prototype={
$1(d){return D.hLL},
$S:z+12}
C.dIJ.prototype={
$0(){return this.a.Fx(A.a.i(this.b))},
$S:1}
C.dIK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b0_(t.b,r.a.c),$async$$0)
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
return B.b(r.AJ(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.lg(C.c5f(r.a.c))
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
return B.b(r.aTz(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIS.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dIW.prototype={
$1(d){this.a.S8()
return null},
$S:12}
C.dIT.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dIU.prototype={
$0(){var w=null,v=this.a
B.fI(new B.fy(v.gazd()))
this.b.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.c("Code "+v.gazd()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dIV.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dIX.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.X(s,"NGMYSNAP1|")||A.a.X(s,"NGMYLOCALSYNC1|")||A.a.X(s,"NGMYLOCALLIVE1|")||A.a.X(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a8(this.b,!1).N(s)
return}},
$S:161}
C.fFl.prototype={
$1(d){return D.hHR},
$S:z+13}
C.fGy.prototype={
$1(d){return new C.agf(this.a,this.b,this.c,null)},
$S:z+14}
C.fas.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.fat.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dhF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dhC.prototype={
$2(d,e){return e.an1(e.a.toUpperCase())},
$S:2098}
C.dhD.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a8(v,!1).N(w)
return null},
$S:2}
C.dhE.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.c5Y.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dzi,A.a.gjP(v))},
$S:4}
C.fQM.prototype={
$1(d){return d.a===this.a},
$S:2099}
C.fQN.prototype={
$0(){return A.d.gH(A.Ed)},
$S:2100}
C.dPj.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.l(new C.dPi(v))
w=v.r
w===$&&B.d()
if(w<=0)v.b9a("Time's up")},
$S:12}
C.dPi.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.d()
w.r=v-1
return v},
$S:0}
C.dPa.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dPf.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.l(new C.dPc(w,d,e))},
$S:249}
C.dPc.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dPg.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.dPb(w))
w.cAT(!0)},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dPh.prototype={
$1(d){this.a.b9a(d)
return null},
$S:2}
C.dPd.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.dPe.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.cee.prototype={
$1(d){return D.dXc},
$S:z+15}
C.ced.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.fHn.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a6(d),t=B.aI(u.h(d,e)),s=t==null?v:A.i.M(t)
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
C.fHo.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.i.M(w)
return w==null?0:w},
$S:840}
C.fHp.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:191}
C.fY5.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hFQ(w,v):C.hjN(w,v)
if(u===3)++w.f
C.ahM(w,this.c,u)
return u},
$S:2102}
C.fY7.prototype={
$0(){return C.hFQ(this.a,this.b)},
$S:98}
C.fY6.prototype={
$0(){return C.hjN(this.a,this.b)},
$S:98}
C.dIs.prototype={
$0(){var w=this.a
if(w.a.c)w.l(new C.dIr(w))},
$S:0}
C.dIr.prototype={
$0(){this.a.r=1+A.o.F(B.G0(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dIt.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.d()
u=u.x
u===$&&B.d()
w=A.i.be(u*10)
if(w!==v.w)v.l(new C.dIq(v,w))}},
$S:0}
C.dIq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgF.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.F,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bC,new B.dk(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),1)},
$S:2103}
C.cgE.prototype={
$3(d,e,f){var w=null
return B.c("$"+A.i.ab(e,2),w,w,w,w,w,w,A.m6,w,w,w)},
$S:487}
C.ch6.prototype={
$1(d){return new C.OH(this.a,this.b,!1,null,null)},
$S:z+16}
C.e86.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.K(A.b2.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ab(2,A.H,A.b2.j(0.35),A.J,36),new B.ab(0,A.H,A.bA.j(0.175),A.J,24)],x.V)
v=B.m(f.a.e?0:30)
u=x.O
t=B.ao(g,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bc.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ao(-50,B.o(g,g,A.f,g,g,new B.n(g,g,g,g,g,new B.bT(A.z,0.5,A.x,g,0,B.a([A.bA.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.h:A.M
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.o(g,D.c_8,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.H,A.b2.j(0.55),A.cz,18)],n),A.tJ,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.ol(A.k1,D.h48,new C.e82()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.c(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cF,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c_.j(0.12)
k=B.m(18)
j=B.K(A.c_.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.W(D.bTZ,A.c_.j(0.95),g,g,g,20),A.aa,B.c("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c_.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.h,0,g,g),A.S,B.c("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.S],p)
A.d.u(i,new B.N(m,new C.e83(),B.T(m).k("N<1,w>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.B,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.m),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.v.j(0.35)
l=B.m(18)
k=B.K(A.b2.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.aA2(A.hx,"Unlimited games with an active plan",A.bc),A.P,f.aA2(A.jT,"Weekday check-ins grow your balance",A.b2),A.P,f.aA2(A.m_,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.m),g,g,g,g,A.bH,g,g,1/0))
o.push(A.dc)
o.push(new B.a5(1/0,g,new B.bP(new B.n(g,g,g,B.m(16),B.a([new B.ab(0,A.H,A.bA.j(0.45),A.cz,16)],n),A.tJ,A.m),A.bm,B.d8(D.c2H,g,D.h_t,new C.e84(f,a0),B.bn(A.L,g,g,g,A.c,A.L6,g,A.L,new B.b9(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bO(!1,B.c(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e85(f,a0),g,g))
if(f.a.e)o.push(A.aY)
h=B.o(g,B.bv(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.cdx,A.m),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,A_.a1W,g,A.d8,g,g,g)},
$S:555}
C.e82.prototype={
$1(d){return D.ccr.aA(0,d)},
$S:76}
C.e83.prototype={
$1(d){var w=null
return new B.D(A.eJ,B.A(B.a([B.W(A.a3W,A.c_.j(0.85),w,w,w,14),A.aa,B.E(B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$S:153}
C.e84.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a8(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e85.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a8(this.b,!1).N(null)},
$S:0}
C.fT9.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:707}
C.fSX.prototype={
$1(d){$.aU.x1$.push(new C.fSW(this.a))},
$S:7}
C.fSW.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fDD.prototype={
$1(d){return C.hFY(this.a,this.b+1)},
$S:7}
C.fUw.prototype={
$2(d,e){var w=B.aE(d,A.bY,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:127}
C.chk.prototype={
$1(d){return d.r===this.a},
$S:273}
C.chl.prototype={
$1(d){var w=$.aU5(),v=w.a
w.sp(0,v+1)
return v},
$S:2104}
C.chm.prototype={
$1(d){},
$S:33}
C.chj.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:273}
C.chi.prototype={
$1(d){return d.f.cc(this.a)},
$S:273}
C.fAm.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:63}
C.h6i.prototype={
$1(d){return C.a8X(this.a)},
$S:113}
C.h6j.prototype={
$1(d){var w=$.aU5()
w.sp(0,w.a+1)},
$S:30}
C.h6k.prototype={
$1(d){},
$S:33}
C.h6l.prototype={
$1(d){return new B.km($.aU5(),new C.h6h(this.a,this.b),null,null,x.am)},
$S:2105}
C.h6h.prototype={
$3(d,e,f){var w=this.b
return new B.le(C.as6(this.a,!1),new C.h6g(w),w,null,x.gv)},
$S:2106}
C.h6g.prototype={
$2(d,e){var w=e.b
return new C.af6(w==null?this.a:w,null)},
$S:z+17}
C.e89.prototype={
$1(d){return d.c},
$S:273}
C.e8a.prototype={
$1(d){return d.gbl0()},
$S:2107}
C.e8b.prototype={
$2(d,e){return d+e},
$S:90}
C.e8c.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8e.prototype={
$2(d,e){return A.P},
$S:38}
C.e8d.prototype={
$2(d,e){return new C.af5(J.t(this.a.c,e),null)},
$S:z+18}
C.e88.prototype={
$1(d){return d==null?"\u2026":C.bE_(d)},
$S:2108}
C.h6o.prototype={
$3(d,e,f){var w=this
return B.qu(new C.aD1(w.a,w.b,w.c,w.d,new C.h6m(d,w.e),new C.h6n(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.h6m.prototype={
$0(){B.a8(this.a,!1).N(null)
C.hJn(this.b)},
$S:0}
C.h6n.prototype={
$0(){B.a8(this.a,!1).N(null)
C.hJn(this.b)},
$S:0}
C.doN.prototype={
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
A.d.u(w,new B.N(t,new C.doM(),B.T(t).k("N<1,w>")))}t=h.d
t===$&&B.d()
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aE(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bh,A.et,A.eg],r):B.a([A.aB,A.ev,A.eu],r)
p=B.m(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.H,(h.a.c?A.dP:A.dS).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dt()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.akr,A.uF],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.o(i,D.bg_,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ab(4,A.H,A.d3.j(0.6),A.J,24),new B.ab(0,A.H,A.v.j(0.3),A.dm,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c6d)
l.push(A.aA)
l.push(B.c(h.a.d,i,i,i,i,i,i,A.WW,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.et,A.r,4)
A.d.u(l,B.a([A.aA,D.fUc,A.P,B.o(i,B.c(r,i,i,i,i,i,i,D.fJX,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.m),i,i,i,i,A.OR,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.c(h.a.e,i,i,i,i,i,i,D.fMY,A.K,i,i)],g))
l.push(A.e8)
r=B.E(B.dU(D.fRC,h.a.r,B.dg(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cm,i,i,D.b7f,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.ar,B.E(B.bJ(E.aYT,i,n,B.bn(A.c,i,i,i,h.c?A.et:A.ev,i,A.cm,i,i,i,i,i)),1)],g),A.l,i,A.e,A.h,0,i,i))
w.push(B.e1(A.z,B.o(i,B.x(l,A.l,i,A.e,A.M,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.m),i,i,i,A.ae,A.aoE,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:126}
C.doM.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.z,d.d,B.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cj5.prototype={
$2(d,e){var w=null,v=this.a,u=C.i2_(B.Me(v.c,v.d))
return B.c("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2109}
C.cj4.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:63}
C.c6u.prototype={
$0(){},
$S:0}
C.fzh.prototype={
$1(d){return A.o.v(d)},
$S:80}
C.e0C.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e0D.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e0E.prototype={
$0(){var w=this.a
return w.w=D.TB[w.d.aw(5)]},
$S:0}
C.e0F.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e0G.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e0H.prototype={
$0(){var w=this.a
return w.l(new C.e0B(w))},
$S:0}
C.e0B.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0I.prototype={
$0(){var w=this.a
return w.l(new C.e0A(w))},
$S:0}
C.e0A.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0L.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.e0M.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bh:B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),r=B.m(10)
t=t.y?u:new C.e0K(t,d)
w=B.m(10)
v=A.i.ab(d,0)
return B.E(new B.D(A.jh,B.aF(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.c("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:2110}
C.e0K.prototype={
$0(){var w=this.a
return w.l(new C.e0J(w,this.b))},
$S:0}
C.e0J.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bN(0,A.ch)},
$S:0}
C.e8k.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cM.gco().aK(this.c)},
$S:0}
C.e8l.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.e8g.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f4.j(0.5):A.L,A.r,1),q=B.W(e,u?D.f4:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cT(w,B.A(B.a([q,A.bk,B.c(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.h,0,w,w),w,w,A.b_,new B.n(s,w,r,t,w,w,A.m),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e8i(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2111}
C.e8i.prototype={
$0(){var w=this.a
return w.l(new C.e8h(w,this.b))},
$S:0}
C.e8h.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8j.prototype={
$0(){var w=this.a,v=w.d===A.ld?"Cash App tag":"Bitcoin address"
return w.JP(this.b,v)},
$S:0}
C.e8f.prototype={
$0(){var w=this.a
return w.JP(w.gauv(),"Code")},
$S:0}
C.chT.prototype={
$1(d){return C.hZb(B.a1(d,x.N,x.z))},
$S:z+20}
C.chU.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chR.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chS.prototype={
$1(d){return d.ak()},
$S:z+23}
C.chV.prototype={
$1(d){var w=d.c
return!w.cZ(this.a.bQ(-36e8))&&!w.cc(this.b)},
$S:z+7}
C.c9C.prototype={
$1(d){return C.hZc(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9D.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9A.prototype={
$1(d){return d.ak()},
$S:z+26}
C.c9B.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9F.prototype={
$1(d){var w=d.b
return!w.cZ(this.a)&&!w.cc(this.b)},
$S:z+27}
C.ci3.prototype={
$1(d){return d.ak()},
$S:z+28}
C.ci2.prototype={
$1(d){return C.hwd(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.ci1.prototype={
$1(d){return d.ak()},
$S:z+30}
C.ci0.prototype={
$1(d){return C.i1D(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.ci5.prototype={
$1(d){return C.i1C(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.ci6.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ci7.prototype={
$1(d){return d.ak()},
$S:z+34}
C.ecq.prototype={
$1(d){return d.bgo(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ecr.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.eck.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ecl.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ec3.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.I(w,this.b)},
$S:0}
C.ec4.prototype={
$1(d){return new C.QN(this.a,null)},
$S:z+9}
C.ec5.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.d()
w=A.d.bk(t,new C.ec2(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.K_()}},
$S:0}
C.ec2.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ech.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.eci.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.d()
t.d=C.isF(v,w[0],w[3])
t.K_()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ecj.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ecb.prototype={
$1(d){return new C.QN(this.a,null)},
$S:z+9}
C.ecc.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eca.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.ecg.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.d()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.K_()},
$S:0}
C.ecf.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.d()
w=this.b
return new C.a1E(u[w],new C.ece(v,w),null)},
$S:z+59}
C.ece.prototype={
$1(d){var w=this.a
return w.l(new C.ecd(w,this.b,d))},
$S:z+40}
C.ecd.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ec7.prototype={
$0(){var w=this.a
return w.l(new C.ec6(w))},
$S:0}
C.ec6.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ec8.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aM
return new B.D(A.eJ,B.c(t+": "+B.v(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cF,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:122}
C.ec9.prototype={
$1(d){return this.a.a2Z()},
$S:2}
C.ecp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uC:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aM:A.bn
r=w.d
q=B.b1(r).j(0.15)
p=B.m(12)
q=B.o(n,B.W(A.arr,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.bT,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.W(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.m),n,n,n,n,A.hK,n,n,n)
r=B.A(B.a([o,A.ar,B.E(B.c(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.h,0,n,n)
p=w.e.length
return new B.D(A.d4,B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awW(q,e,!0,n),n,n,n,n,new C.ecm(m,e),!1,n,n,new B.b9(t,new B.av(s,1,A.r,-1)),n,n,B.c("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CP(n,n,n,n,n,new C.ecn(),A.J,new C.eco(m,e),A.cr,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bl(w.a,x.W))},
$S:122}
C.eco.prototype={
$1(d){var w=this
if(d==="edit")w.a.ac8(w.b)
if(d==="questions")w.a.a_a(w.b)
if(d==="delete")w.a.bQj(w.b)},
$S:2}
C.ecn.prototype={
$1(d){return D.d6y},
$S:155}
C.ecm.prototype={
$0(){return this.a.a_a(this.b)},
$S:0}
C.cXG.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.W(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.m),s,s,s,s,A.cr,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cXF(r,d),s,s,s,s,s,s,s)},
$S:2112}
C.cXF.prototype={
$0(){var w=this.a
return w.l(new C.cXD(w,this.b))},
$S:0}
C.cXD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXH.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.d()
return B.ay(w,B.hh(u,w,t===d?D.c3u:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cXE(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:461}
C.cXE.prototype={
$0(){var w=this.a
return w.l(new C.cXC(w,this.b))},
$S:0}
C.cXC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXI.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.cXJ.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.d()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.d()
v=v.f
v===$&&B.d()
t=u.cRM(v,w,t)
B.a8(this.b,!1).N(t)
return null},
$S:0}
C.f5m.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return w.push(this.b)},
$S:0}
C.f5n.prototype={
$1(d){return new C.a1D(this.a,null)},
$S:z+41}
C.f5t.prototype={
$2(d,e){return A.P},
$S:38}
C.f5s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uC:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aM:A.bn
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bv(q,B.aSG(n,A.bZ,36,A.r_,l?A.bP:A.an,r,48),A.aq)}else r=B.W(D.a3E,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.c(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f5q(m,w,e),!1,n,n,new B.b9(t,new B.av(s,1,A.r,-1)),n,n,B.c(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c1K,n,n,n,new C.f5r(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:84}
C.f5r.prototype={
$0(){var w=this.a
w.l(new C.f5o(w,this.b))
w.aA5()},
$S:0}
C.f5o.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.f5q.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4p(u.b),$async$$0)
case 2:s=e
if(s!=null){t.l(new C.f5p(t,u.c,s))
t.aA5()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f5p.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f5i.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f5g.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
return new C.X2(w,"Answer Document",null)},
$S:z+42}
C.f5h.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f5k.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.d()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.d()
v=u.f
u=u.r
if(v==null)v=t.d
B.a8(this.b,!1).N(new C.iE(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f5l.prototype={
$1(d){var w=this.a
return w.l(new C.f5j(w,d))},
$S:9}
C.f5j.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chY.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fV5.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ed0.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ecH.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lZ("image","",this.b,null))},
$S:0}
C.ecM.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lZ("video","","data:video/mp4;base64,"+A.cM.gco().aK(this.b),null))},
$S:0}
C.ecK.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c86,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c85,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.M,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.ecI(d),w,w),B.bJ(D.h3B,w,new C.ecJ(d),w)],v),w,w,w,u,w,w,w,w,D.fQP,w)},
$S:18}
C.ecI.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.ecJ.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.ecL.prototype={
$0(){var w,v=this.a.e
v===$&&B.d()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lZ("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ecD.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ecE.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecF.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ecG.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecR.prototype={
$0(){var w=this.a.bJt()
B.a8(this.b,!1).N(w)
return null},
$S:0}
C.ecS.prototype={
$0(){return this.a.aA6("**","**")},
$S:0}
C.ecT.prototype={
$0(){return this.a.aA6("*","*")},
$S:0}
C.ecU.prototype={
$0(){return this.a.aA6("__","__")},
$S:0}
C.ecV.prototype={
$0(){return this.a.b2r("## Section title")},
$S:0}
C.ecW.prototype={
$0(){return this.a.b2r("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ecX.prototype={
$0(){},
$S:0}
C.ecY.prototype={
$0(){var w=this.a
w.l(new C.ecQ(w))},
$S:0}
C.ecQ.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.e_L)},
$S:0}
C.ecZ.prototype={
$0(){var w=this.a
w.l(new C.ecP(w))},
$S:0}
C.ecP.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.e_M)},
$S:0}
C.ed_.prototype={
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
t=B.c(t,v,v,v,v,v,v,B.l(v,v,w?A.iG:A.aw,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?A.cu:A.hV
return B.Ek(v,w,A.atM,t,v,new C.ecO(this.a,d),v)},
$S:z+45}
C.ecO.prototype={
$0(){var w=this.a
return w.l(new C.ecN(w,this.b))},
$S:0}
C.ecN.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.cH(w,this.b.a)},
$S:0}
C.ecA.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2E},
$S:0}
C.ecB.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hIV},
$S:0}
C.ecs.prototype={
$0(){var w=this.a
w.d=D.b2D
w.f=w.e=null},
$S:0}
C.ect.prototype={
$0(){var w=this.a
w.d=D.b2E
w.f=null},
$S:0}
C.ecC.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ecv.prototype={
$2(d,e){var w=this.a,v=w.gbaa()[e]
return new C.adB(v,this.b,new C.ecu(w,v),null)},
$S:z+46}
C.ecu.prototype={
$0(){return this.a.ceE(this.b.a)},
$S:0}
C.ecx.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ecz.prototype={
$2(d,e){return A.S},
$S:38}
C.ecy.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uC:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aM:A.bn,A.r,1),l=B.a([new B.ab(0,A.H,A.v.j(r?0.28:0.06),A.dQ,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bv(w,B.aSG(v,A.bZ,52,D.a3E,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.W(D.a3E,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.m),t,52,t,t,t,t,t,52))}k.push(A.bb)
k.push(B.E(B.c(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.W(A.eL,r?A.bP:A.an,t,t,t,22))
return B.aF(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.m),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ecw(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:84}
C.ecw.prototype={
$0(){return this.a.clK(this.b)},
$S:0}
C.ci_.prototype={
$1(d){return new C.adr(d,this.a,null)},
$S:z+48}
C.cQY.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oo(v==null?w.b:v)
if(u!=null)B.iS(u,A.fu,null)},
$S:0}
C.cQZ.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cR_.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.c("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aM,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.na,B.A(B.a([u,B.E(B.c(t,w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aM,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.B,w,A.e,A.h,0,w,w),w)},
$S:153}
C.dt6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dt8.prototype={
$0(){return this.a.l(new C.dt7(this.b))},
$S:0}
C.dt7.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fyZ.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ede.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.EH)w.z=v
else w.Q=v},
$S:0}
C.ed5.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd3(v).Q
v.toString
w.m6(v,A.cn,A.eV)},
$S:7}
C.ed7.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:103}
C.ed8.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bN(0,A.ch)
w.r=!0},
$S:0}
C.ed9.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.eda.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.v(w.h(d,"text"))},
$S:166}
C.edb.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.edc.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.edd.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ed6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n4(l,A.bA.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bR,B.A(B.a([new B.a5(22,22,k,l),A.ar,B.c("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.e0,l,l,l,l,l,l,l,l,12,A.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.h,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aE(k,A.bY,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a5,A.a9,A.x,B.a([A.aD,A.bA.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ab(0,A.H,(u?A.bA:A.aD).j(0.22),A.hP,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bn:A.bq
n=u?13.5:15
m=u?A.bo:A.cL
return new B.bK(t,l,l,B.o(l,B.c(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cF,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.bc(A.i4,A.i4,new B.aP(s,s),new B.aP(r,r)),p,q,A.m),l,l,l,A.kG,A.jy,l,l,l),l)},
$S:43}
C.edl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.d()
w=m.x
w===$&&B.d()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.aiD,A.a_,A.oz],t):B.a([A.qw,A.qt,A.qu],t)
w=B.a([new B.ab(-4,A.H,A.aD.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dt()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.d()
q.fF(m*0.08)
q=B.fA(A.z,B.o(o,D.bZ8,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eIb,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.ol(A.k1,D.h8p,new C.edi())
p=x.p
m=B.a([B.A(B.a([q,A.bb,B.E(B.x(B.a([m,B.c("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b6,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.B,o,A.e,A.h,0,A.p),1)],p),A.l,o,A.e,A.h,0,o,o),A.af,B.A(B.a([n.aye(D.EH,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.aa,n.aye(D.aMS,"English","\ud83c\uddec\ud83c\udde7",u),A.aa,n.aye(D.EI,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.h,0,o,o)],p)
if(n.x!==D.EI){t=B.a([A.P,n.cFk(u)],p)
if(n.w){q=n.x===D.EH?D.a7S:D.a6W
p=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.edj(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jg,B.bZ(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bA.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bA.j(0.45),A.r,1)
m.push(new B.D(A.jg,B.o(o,B.c('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iE:A.k3,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.m),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dre,new C.edk(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.h,0,o,o))
return B.o(o,B.x(m,A.am,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.m),o,o,o,H.ant,H.anE,o,o,o)},
$S:88}
C.edi.prototype={
$1(d){return D.ccX.aA(0,d)},
$S:76}
C.edj.prototype={
$1(d){return this.a.cFl(d,this.b)},
$S:z+49}
C.edk.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMU?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.v.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.edh(p,d)
s=C.i37(d)
if(o)r=A.c
else r=v?A.ac:A.bq
r=B.c(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i38(d)
if(o)v=A.ac
else v=v?A.bV:A.e0
return B.E(new B.D(new B.P(0,0,n,0),B.aF(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.Hv,B.x(B.a([r,B.c(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.edh.prototype={
$0(){var w=this.a
return w.l(new C.edg(w,this.b))},
$S:0}
C.edg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.edn.prototype={
$0(){var w=this.a
return w.l(new C.edm(w))},
$S:0}
C.edm.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ed4.prototype={
$0(){var w=this.a
return w.l(new C.ed3(w,this.b))},
$S:0}
C.ed3.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.EI
if(v===D.aMS&&w.Q==null)w.Q=A.d.gH(D.a6W).a},
$S:0}
C.edo.prototype={
$0(){return this.a.cAJ(this.b.a)},
$S:0}
C.edf.prototype={
$0(){return this.a.JQ(this.b)},
$S:0}
C.ed1.prototype={
$1(d){return this.a.b2s()},
$S:2}
C.ed2.prototype={
$0(){return this.a.b2s()},
$S:0}
C.h7f.prototype={
$1(d){var w=this
return new C.a0m(w.a,w.b,w.c,new C.h7e(w.d),null)},
$S:z+51}
C.h7e.prototype={
$0(){return J.lO(this.a.bm())},
$S:0}
C.dqr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bli()},
$S:30}
C.dqs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.d()
m=m.x
m===$&&B.d()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aE(m,A.bY,u).w
s=Math.cos(v)
u=B.aE(m,A.bY,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.ee:A.hx
o=A.o.F(w,4)
q=q?A.at:A.aN
return B.ao(n,B.d0(B.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:329}
C.dqx.prototype={
$0(){},
$S:0}
C.dqw.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.d()
w=t.x
w===$&&B.d()
v=A.nx.aB(0,A.i.D(w,0,1))
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793)
w=B.dt()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fF(t*0.08)
w.k5(0.12)
return B.e1(A.z,B.fA(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dqt.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ab(6,A.H,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n4(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.c(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.da(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:126}
C.dqu.prototype={
$1(d){return D.cd0.aA(0,d)},
$S:76}
C.dqv.prototype={
$0(){var w=this.a
w.a.bli()
w.a.e.$0()},
$S:0}
C.cjZ.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.h1)if(d.x===A.dJ){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.ckb.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erG.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.esm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QY()},
$S:7}
C.esn.prototype={
$1(d){var w=$.aU.p2$
if(w===A.up||w===A.uq)return
this.a.Fr()},
$S:12}
C.eso.prototype={
$1(d){this.a.cHv()},
$S:12}
C.es4.prototype={
$0(){this.a.Km(this.b.d,!1)},
$S:0}
C.es5.prototype={
$0(){},
$S:0}
C.es6.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.es7.prototype={
$0(){},
$S:0}
C.es8.prototype={
$1(d){return d.a===this.a},
$S:15}
C.es9.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.esa.prototype={
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
C.es_.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Qa()
w.aae()},
$S:0}
C.erH.prototype={
$0(){this.b.Km(this.c.d+this.a.a,!1)},
$S:0}
C.es0.prototype={
$1(d){var w=d.d
return(w===A.h1||w===A.f8)&&d.x===A.dJ},
$S:15}
C.es1.prototype={
$1(d){return d.a},
$S:177}
C.es2.prototype={
$1(d){return d.a===this.a},
$S:15}
C.es3.prototype={
$0(){},
$S:0}
C.erL.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.erM.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.erU.prototype={
$0(){},
$S:0}
C.erR.prototype={
$0(){return this.a.a.c.d},
$S:85}
C.erS.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erT.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erV.prototype={
$0(){return this.a.z=!0},
$S:0}
C.erW.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w8(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.erX.prototype={
$0(){return this.a.z=!1},
$S:0}
C.erZ.prototype={
$0(){var w=this.a
return w.l(new C.erY(w))},
$S:0}
C.erY.prototype={
$0(){return this.a.y=1},
$S:0}
C.erN.prototype={
$0(){return this.a.y=1},
$S:0}
C.erO.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.ese.prototype={
$1(d){return d.a.length===0},
$S:15}
C.esf.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.esj.prototype={
$0(){var w=this.a
return w.l(new C.esc(w))},
$S:0}
C.esc.prototype={
$0(){return this.a.y=1},
$S:0}
C.esk.prototype={
$0(){var w=this.a
return w.l(new C.esb(w))},
$S:0}
C.esb.prototype={
$0(){return this.a.y=2},
$S:0}
C.esl.prototype={
$0(){return B.j5(this.a,null)},
$S:0}
C.esg.prototype={
$2$cloudRequest(d,e){return this.a.b3J(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2113}
C.esh.prototype={
$0(){return this.a.Fr()},
$S:1}
C.esi.prototype={
$0(){var w=this.a
return w.l(new C.esd(w))},
$S:0}
C.esd.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.erK.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.erJ(w))},
$S:0}
C.erJ.prototype={
$0(){return this.a.y=0},
$S:0}
C.erI.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bJ3(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.H,A.aE.j(0.55),A.J,18)],x.V),D.caU,A.a6),t,t,t,t,t,t,t,t),A.eh,A.th,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9D(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.h,0,t,t)],w),t)},
$S:68}
C.erQ.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.l(new C.erP(w,v))},
$S:0}
C.erP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.duX.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.h1||v===A.f8)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.duY.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:692}
C.duZ.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.heZ(v.c,u))
w=this.c?new C.duW(v):null
return v.bcf(this.b,A.nf,D.f4,w,"Today","$"+u,D.f4)},
$S:2115}
C.duW.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dv_.prototype={
$2(d,e){var w=this.a
return w.bcf(this.b,A.kh,A.cd,w.w,"Balance","$"+B.dG(B.Me(w.c.a,new C.duV(w))),A.ct)},
$S:71}
C.duV.prototype={
$0(){return this.a.c.d},
$S:85}
C.duQ.prototype={
$0(){this.a.a.cZM()
return null},
$S:0}
C.duR.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.d()
v=v.x
v===$&&B.d()
return B.b4(w,w,w,new C.bzi(v,w),A.az)},
$S:59}
C.duS.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.beG(v,!0,A.aE,D.pw,w)}else{v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.beF(v,D.pw,w)}return B.b4(w,w,w,v,A.az)},
$S:59}
C.duT.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:692}
C.duU.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cYr(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.i.D(v/u,0,1)}u=w.d
u===$&&B.d()
s=w.e
s===$&&B.d()
return B.c7(new B.he(B.a([u,s],x.U)),new C.duP(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2116}
C.duP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iD(7,new C.duO(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.d()
v=v.x
v===$&&B.d()
u=o.d
l.push(B.b4(n,n,n,new C.beE(o.c,v,k,u,D.pw,D.bza,n),D.fqn))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.vk
else t=o.e?A.x8:D.bUa
t=B.W(t,k?D.pw:A.b3,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.c(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.F,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pw:A.c
w=B.c(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.al,s,A.au,w,A.P,B.o(n,B.c(o.r,n,n,n,n,n,n,B.l(n,n,k?D.pw:A.pB,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.m),n,n,n,n,A.lu,n,n,n)],m),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:227}
C.duO.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=A.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dp(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.pw.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.m),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:233}
C.dvg.prototype={
$0(){},
$S:0}
C.dvh.prototype={
$0(){},
$S:0}
C.dvi.prototype={
$1(d){return d.x===A.dJ},
$S:15}
C.dv2.prototype={
$0(){return this.a.a.d.d},
$S:85}
C.dv1.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.l(new C.dv0(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.dv0.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dvd.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jh,B.ay(v,B.cT(A.z,B.c("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ac,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b_,new B.n(q,v,p,r,v,v,A.m),A.hi,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dvf(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2118}
C.dvf.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.dve(w,this.b))},
$S:0}
C.dve.prototype={
$0(){var w=""+this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dvc.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.v_,B.A(B.a([v,A.aY,B.c(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2119}
C.dvb.prototype={
$1(d){return this.a.l(new C.dva())},
$S:2}
C.dva.prototype={
$0(){},
$S:0}
C.dv5.prototype={
$1(d){return this.a.aZI(d)&&!B.hni(d)},
$S:15}
C.dv6.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.dv7.prototype={
$0(){return this.a.a.d.d},
$S:85}
C.dv8.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.l(new C.dv4())
t.mu("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dv4.prototype={
$0(){},
$S:0}
C.dv9.prototype={
$0(){var w=this.a
return w.l(new C.dv3(w))},
$S:0}
C.dv3.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fQT.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:82}
C.fIA.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h1g.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fIz.prototype={
$1(d){var w,v,u
if(!C.ipw(d,this.a))return!1
w=J.a6(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bh(J.k(w==null?"":w))}if(u!=null&&A.o.ar(new B.V(Date.now(),0,!1).bz(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fwA.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.h_H.prototype={
$0(){return $.hkw=null},
$S:11}
C.h_I.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fYi.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fYj.prototype={
$0(){var w,v=this.a
$.hkk.W(0,v)
w=C.uD(this.b,v)
if(w!=null)B.Sb(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h2s.prototype={
$1(d){return new C.a1a(this.a,this.b,null)},
$S:z+56}
C.emj.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.emm.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.emn.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.l(new C.eml(w))},
$S:2}
C.eml.prototype={
$0(){return this.a.f=""},
$S:0}
C.emo.prototype={
$1(d){return this.a.b2I()},
$S:2}
C.emp.prototype={
$0(){var w=this.a
return w.l(new C.emk(w,this.b))},
$S:0}
C.emk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fHx.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fHw.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.h_Z.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.ak()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.h0_.prototype={
$1(d){return J.cK(d)},
$S:4}
C.fUh.prototype={
$1(d){return d.a!=="send_email"},
$S:372}
C.h_p.prototype={
$1(d){var w=null,v=A.v.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.c(d,w,w,w,w,w,w,A.hq,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,86,w,A.fc,w,w,w,72)},
$S:680}
C.clS.prototype={
$1(d){return J.k(d)},
$S:16}
C.clT.prototype={
$1(d){var w
if(x.j.b(d)){w=J.ba(d,new C.clR(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:679}
C.clR.prototype={
$1(d){var w
if(B.iZ(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:393}
C.clU.prototype={
$1(d){var w
if(x.j.b(d)){w=J.ba(d,new C.clQ(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:679}
C.clQ.prototype={
$1(d){var w
if(B.iZ(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:393}
C.clW.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:677}
C.clX.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:677}
C.clP.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.clV.prototype={
$2(d,e){return d+e},
$S:70}
C.clO.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:70}
C.fKl.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fKf.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.fKg.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.fKh.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.fKi.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.fKj.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.fKk.prototype={
$0(){return this.a.$1(D.rl)},
$S:0}
C.ftC.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ar(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_t:D.bks
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bn],w):B.a([A.bs,A.v],w)
v=n?A.aQ:A.dE
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.H,A.v.j(0.35),A.dQ,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ftB(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:83}
C.ftB.prototype={
$0(){var w=this,v=w.a,u=v.d3J(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.rl:D.JZ
w.f.$1(v)}},
$S:0}
C.fHT.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iC(!0,v,v,A.y,A.aW1,new C.fHS(w.a,w.b,w.c,w.d,u),9,v,A.e2,A.ah,!1),v)},
$S:127}
C.fHS.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aB
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.c(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fHR(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.h5,0,v,v,v,v,v,A.ai)},
$S:84}
C.fHR.prototype={
$0(){var w=this,v=w.a.d3L(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fsU.prototype={
$1(d){return new B.D(A.jh,C.fY9(d,!1),null)},
$S:308}
C.fsV.prototype={
$1(d){return C.fY9(d,!1)},
$S:2123}
C.fsW.prototype={
$0(){var w=this,v=w.a
v.cO2(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fsX.prototype={
$0(){var w=this
w.a.cO3(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fEM.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mE(v,A.bs,B.c(""+u,v,v,v,v,v,v,A.cb,v,v,v),A.dl,new C.fEL(w.a,w.b,u,w.c,w.d),v,v,new B.av(A.c.j(0.2),1,A.r,-1),v)},
$S:2124}
C.fEL.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fGJ.prototype={
$1(d){return D.dvE[d]},
$S:80}
C.fGK.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fDz.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fDA.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fu4.prototype={
$0(){var w=this,v=w.a.cTT(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fu3.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.lR
else w=u===1?A.dS:A.tP
return new B.fH(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nW,v,v,v,v),v)},
$S:2125}
C.fDL.prototype={
$1(d){var w=this
if(w.a.bfI(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fDM.prototype={
$0(){var w=this
if(w.a.bfI(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.ftp.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fPW.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fPX.prototype={
$1(d){var w,v=J.a6(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:54}
C.eV5.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNr.prototype
w.bzt=w.Z
w.bzs=w.t
w=C.aNs.prototype
w.bzv=w.Z
w.bzu=w.t
w=C.aNt.prototype
w.bzx=w.Z
w.bzw=w.t
w=C.aOq.prototype
w.bAw=w.Z
w.bAv=w.t
w=C.aNZ.prototype
w.bA3=w.t
w=C.aOA.prototype
w.bAG=w.t
w=C.aNu.prototype
w.bzy=w.t
w=C.aOI.prototype
w.bAP=w.t
w=C.aNz.prototype
w.bzD=w.t
w=C.aNP.prototype
w.bzU=w.t
w=C.aPk.prototype
w.bBr=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aD_.prototype,"gbWn","bWo",19)
v(q,"gaVY","aVZ",1)
v(C.aCZ.prototype,"gcEd","a3R",1)
v(q=C.aD0.prototype,"gc0U","c0V",1)
v(q,"gbLi","bLj",1)
v(q=C.aA2.prototype,"gcx6","cx7",1)
v(q,"gclf","Rs",0)
v(q,"gcIn","cIo",1)
v(q,"gcAe","nl",0)
w(q,"gcpI","cpJ",25)
w(q,"gcGz","Tc",33)
v(q=C.aF6.prototype,"gbUj","YW",0)
v(q,"gcaj","a_w",0)
v(q,"gcag","a_v",0)
v(q,"gcah","af6",0)
v(q,"gcai","Qe",0)
v(C.aCi.prototype,"gcak","cal",1)
u(C,"ix5","i1k",58)
t(C,"hnq",0,null,["$1","$0"],["hJI",function(){return C.hJI(null)}],3,0)
t(C,"bHt",0,null,["$1","$0"],["hJH",function(){return C.hJH(null)}],3,0)
v(C.Ob.prototype,"gFb","cip",1)
v(C.aFS.prototype,"gcxo","BC",0)
v(q=C.aG7.prototype,"gclB","Ru",0)
v(q,"gcqt","a22",0)
v(q,"gcey","cez",1)
v(q=C.aGj.prototype,"gceD","agb",0)
v(q,"gbEK","aa6",0)
v(q,"gcxF","a2Z",0)
s(q,"gciU","ciV",35)
v(C.aIn.prototype,"gbFb","aa8",1)
v(q=C.aIm.prototype,"gceC","aga",0)
v(q,"gckw","ahj",0)
v(q=C.aGl.prototype,"gc4y","adR",0)
v(q,"gc4A","ZB",0)
v(q,"gc4z","adS",0)
v(q=C.aGk.prototype,"gbHz","bHA",1)
v(q,"gbHB","bHC",1)
v(C.aGm.prototype,"gbNw","bNx",1)
v(C.aDk.prototype,"gceF","ceG",1)
v(q=C.aGJ.prototype,"gb2B","ceX",1)
r(q,"gb3H",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agX","aAM","b3J","b3I"],52,0,0)
r(q,"gci7",0,4,null,["$4"],["ci8"],53,0,0)
v(q,"gcke","a1d",0)
v(q,"gcl6","ahq",0)
v(q,"gcl1","aho",0)
v(q,"gc7W","aeD",0)
w(C.aE7.prototype,"gc6v","c6w",54)
w(q=C.aE9.prototype,"gcFt","cFu",55)
v(q,"gcE3","cE4",1)
v(q,"gcMd","cMe",1)
v(C.aGx.prototype,"gcfi","b2I",1)
v(C.aHn.prototype,"gb3d","aAy",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.mG,[C.cCI,C.cCF,C.cCG,C.cCH,C.cCE,C.fh1,C.fh_,C.fh3,C.fh0,C.fAH,C.dmS,C.dn2,C.dna,C.dnb,C.dnd,C.dn5,C.dn3,C.dn4,C.dn6,C.dn7,C.dmY,C.dmZ,C.dmX,C.dn0,C.dn1,C.dmV,C.dmU,C.dnf,C.dni,C.e0w,C.e0v,C.e0x,C.e0u,C.e0t,C.dmM,C.dmP,C.dmQ,C.dmO,C.dmN,C.doE,C.doF,C.doG,C.dnU,C.dnV,C.doo,C.do9,C.doa,C.dob,C.doc,C.dod,C.dnm,C.dnT,C.dop,C.doy,C.dom,C.dol,C.dnR,C.dnS,C.dou,C.dov,C.dno,C.dnp,C.do2,C.do3,C.do4,C.do1,C.doe,C.dof,C.dog,C.doh,C.doi,C.doj,C.dos,C.do5,C.do6,C.do7,C.do8,C.dow,C.dox,C.dnq,C.dnr,C.dns,C.dnt,C.doq,C.dor,C.do0,C.dok,C.dnZ,C.doz,C.doA,C.doB,C.dnW,C.dnF,C.dnE,C.dnD,C.dnJ,C.dnC,C.dnA,C.dnv,C.dny,C.dnu,C.dnO,C.dnP,C.dnw,C.dsc,C.cO3,C.cNU,C.cNV,C.cOd,C.cOa,C.cOb,C.cOc,C.cO5,C.cO4,C.cNW,C.cO6,C.cOw,C.cOs,C.cOr,C.cO1,C.cO2,C.cNZ,C.cO9,C.cOh,C.cOi,C.cOj,C.cOk,C.cOl,C.cOm,C.cOn,C.cOI,C.cOB,C.cOy,C.cOD,C.cOA,C.cOx,C.cNX,C.cOu,C.dIQ,C.dIR,C.dIH,C.dIF,C.dIP,C.dIE,C.dID,C.dIG,C.dIL,C.dIM,C.dIJ,C.dIK,C.dIS,C.dIT,C.dIU,C.dIV,C.fas,C.fat,C.dhE,C.fQN,C.dPi,C.dPa,C.dPc,C.dPg,C.dPb,C.dPd,C.dPe,C.ced,C.fY7,C.fY6,C.dIs,C.dIr,C.dIt,C.dIq,C.e84,C.e85,C.e8c,C.h6m,C.h6n,C.c6u,C.e0C,C.e0D,C.e0E,C.e0F,C.e0G,C.e0H,C.e0B,C.e0I,C.e0A,C.e0L,C.e0K,C.e0J,C.e8k,C.e8l,C.e8i,C.e8h,C.e8j,C.e8f,C.eck,C.ecl,C.ec3,C.ec5,C.ech,C.eci,C.ecc,C.eca,C.ecg,C.ecd,C.ec7,C.ec6,C.ecm,C.cXF,C.cXD,C.cXE,C.cXC,C.cXI,C.cXJ,C.f5m,C.f5r,C.f5o,C.f5q,C.f5p,C.f5i,C.f5h,C.f5k,C.f5j,C.ecH,C.ecM,C.ecI,C.ecJ,C.ecL,C.ecR,C.ecS,C.ecT,C.ecU,C.ecV,C.ecW,C.ecX,C.ecY,C.ecQ,C.ecZ,C.ecP,C.ecO,C.ecN,C.ecA,C.ecB,C.ecs,C.ect,C.ecu,C.ecw,C.cQY,C.dt6,C.dt8,C.dt7,C.ede,C.ed8,C.ed9,C.edb,C.edc,C.edd,C.edh,C.edg,C.edn,C.edm,C.ed4,C.ed3,C.edo,C.edf,C.ed2,C.h7e,C.dqx,C.dqv,C.erG,C.es4,C.es5,C.es6,C.es7,C.es9,C.esa,C.es_,C.erH,C.es3,C.erL,C.erM,C.erU,C.erR,C.erS,C.erT,C.erV,C.erW,C.erX,C.erZ,C.erY,C.erN,C.erO,C.esj,C.esc,C.esk,C.esb,C.esl,C.esh,C.esi,C.esd,C.erK,C.erJ,C.erQ,C.erP,C.duW,C.duV,C.duQ,C.dvg,C.dvh,C.dv2,C.dv1,C.dv0,C.dvf,C.dve,C.dva,C.dv7,C.dv8,C.dv4,C.dv9,C.dv3,C.h_H,C.fYj,C.emj,C.emm,C.eml,C.emp,C.emk,C.fKf,C.fKg,C.fKh,C.fKi,C.fKj,C.fKk,C.ftB,C.fHR,C.fsW,C.fsX,C.fEL,C.fGK,C.fDA,C.fu4,C.fDM,C.ftp,C.eV5])
u(B.ks,[C.cCJ,C.fh2,C.fUB,C.fUt,C.fAE,C.fAD,C.fAG,C.dnk,C.dnl,C.dn9,C.dn8,C.dnc,C.dmW,C.dn_,C.dne,C.e0z,C.dmR,C.doH,C.doI,C.doJ,C.doK,C.doL,C.don,C.dot,C.dnn,C.doD,C.doC,C.dnG,C.dnH,C.dnI,C.dnK,C.dnM,C.dsd,C.cOJ,C.cO8,C.cO7,C.cOq,C.cOt,C.cOp,C.cO_,C.cOg,C.cOe,C.cOv,C.cOf,C.cOE,C.cOC,C.cOH,C.c5b,C.c5a,C.c5d,C.c5c,C.dIO,C.dIN,C.dII,C.dIW,C.dIX,C.fFl,C.fGy,C.dhF,C.dhD,C.c5Y,C.fQM,C.dPj,C.dPh,C.cee,C.fHn,C.fY5,C.cgF,C.cgE,C.ch6,C.e82,C.e83,C.fT9,C.fSX,C.fSW,C.fDD,C.chk,C.chl,C.chm,C.chj,C.chi,C.fAm,C.h6i,C.h6j,C.h6k,C.h6l,C.h6h,C.e89,C.e8a,C.e88,C.h6o,C.doM,C.cj4,C.fzh,C.e0M,C.e8g,C.chT,C.chQ,C.chS,C.chV,C.c9C,C.c9A,C.c9F,C.ci3,C.ci2,C.ci1,C.ci0,C.ci5,C.ci7,C.ecq,C.ec4,C.ec2,C.ecj,C.ecb,C.ecf,C.ece,C.ec9,C.eco,C.ecn,C.cXG,C.cXH,C.f5n,C.f5g,C.f5l,C.chY,C.fV5,C.ed0,C.ecK,C.ecD,C.ecE,C.ecF,C.ecG,C.ed_,C.ci_,C.cQZ,C.cR_,C.fyZ,C.ed5,C.ed7,C.eda,C.edi,C.edj,C.edk,C.ed1,C.h7f,C.dqr,C.dqu,C.cjZ,C.ckb,C.esm,C.esn,C.eso,C.es8,C.es0,C.es1,C.es2,C.ese,C.esg,C.duX,C.duY,C.duT,C.duO,C.dvi,C.dvd,C.dvc,C.dvb,C.dv5,C.fIA,C.h1g,C.fIz,C.fwA,C.h_I,C.fYi,C.h2s,C.emn,C.emo,C.fHx,C.fHw,C.h_Z,C.h0_,C.fUh,C.h_p,C.clS,C.clT,C.clR,C.clU,C.clQ,C.clW,C.clX,C.clP,C.fKl,C.fsU,C.fsV,C.fEM,C.fGJ,C.fDz,C.fu3,C.fDL,C.fPW,C.fPX])
t(C.bvk,B.jP)
u(B.ag,[C.Gi,C.anm,C.aFR,C.anl,C.ann,C.ao9,C.akc,C.apI,C.a0R,C.a0S,C.a_Y,C.aqe,C.apH,C.OH,C.aD1,C.arp,C.as7,C.X1,C.QN,C.a1E,C.a1D,C.X2,C.aso,C.aDV,C.asr,C.a0m,C.at0,C.aE6,C.aE8,C.a1a,C.aum])
u(B.ah,[C.aKW,C.aNs,C.aOq,C.aNr,C.aNt,C.bk8,C.aA2,C.aF6,C.bmB,C.bmC,C.aCi,C.bmJ,C.aNZ,C.aOA,C.aNu,C.aFS,C.aG7,C.aGj,C.bec,C.aIn,C.aIm,C.aGl,C.aGk,C.bkm,C.aOI,C.aNz,C.bBh,C.aNP,C.aE9,C.aGx,C.aPk])
u(B.ml,[C.fh4,C.fAF,C.dmT,C.dnj,C.dnh,C.dng,C.e0y,C.do_,C.dnY,C.dnX,C.dnB,C.dnL,C.dnz,C.dnN,C.dnx,C.dnQ,C.cOo,C.cO0,C.cOz,C.cOG,C.cOF,C.cNY,C.dhC,C.dPf,C.fHo,C.fHp,C.e86,C.fUw,C.h6g,C.e8b,C.e8e,C.e8d,C.doN,C.cj5,C.chU,C.chR,C.c9D,C.c9B,C.ci6,C.ecr,C.ec8,C.ecp,C.f5t,C.f5s,C.ecC,C.ecv,C.ecx,C.ecz,C.ecy,C.ed6,C.edl,C.dqs,C.dqw,C.dqt,C.esf,C.erI,C.duZ,C.dv_,C.duR,C.duS,C.duU,C.duP,C.dv6,C.fQT,C.clV,C.clO,C.ftC,C.fHT,C.fHS])
t(C.aye,C.Gi)
u(B.aK,[C.ri,C.afu,C.Ob,C.JK,C.rV,C.rW,C.lZ,C.iE,C.is,C.bce,C.deA,C.dt5,C.t0,C.X3,C.OY,C.qm,C.b2t,C.pF,C.atr])
t(C.aD_,C.aNs)
t(C.bn5,C.aOq)
t(C.aCZ,C.aNr)
t(C.aD0,C.aNt)
u(B.qB,[C.XK,C.aDW,C.ate,C.JP,C.FG])
u(B.aw,[C.a2e,C.bvR,C.agf,C.Rp,C.a8i,C.Oz,C.as1,C.af6,C.af5,C.b3i,C.aDU,C.adB,C.b2Q,C.adr,C.aE7])
t(C.bmz,C.aNZ)
t(C.bnj,C.aOA)
t(C.biO,C.aNu)
t(C.aGm,C.aOI)
t(C.aDk,C.aNz)
t(C.aGJ,C.bBh)
t(C.bl6,C.aNP)
u(B.qc,[C.beG,C.beF,C.beE,C.be5,C.bzi,C.bu5])
t(C.aHn,C.aPk)
w(C.aNr,C.Ob)
w(C.aNs,C.Ob)
w(C.aNt,C.Ob)
w(C.aOq,C.Ob)
w(C.aNZ,B.eO)
w(C.aOA,B.cf)
w(C.aNu,B.cf)
w(C.aOI,B.cf)
w(C.aNz,B.eO)
w(C.aNP,B.eO)
v(C.bBh,B.eG)
w(C.aPk,B.cf)})()
B.nN(b.typeUniverse,JSON.parse('{"bvk":{"jP":[]},"Gi":{"ag":[],"w":[]},"aKW":{"ah":["Gi<1,2>"]},"aye":{"Gi":["1","hy<1>"],"ag":[],"w":[],"Gi.T":"1","Gi.S":"hy<1>"},"anm":{"ag":[],"w":[]},"aFR":{"ag":[],"w":[]},"anl":{"ag":[],"w":[]},"ann":{"ag":[],"w":[]},"ao9":{"ag":[],"w":[]},"akc":{"ag":[],"w":[]},"aD_":{"ah":["anm"]},"bn5":{"ah":["aFR"]},"aCZ":{"ah":["anl"]},"aD0":{"ah":["ann"]},"bk8":{"ah":["ao9"]},"aA2":{"ah":["akc"]},"apI":{"ag":[],"w":[]},"a0R":{"ag":[],"w":[]},"a0S":{"ag":[],"w":[]},"agf":{"aw":[],"w":[]},"a_Y":{"ag":[],"w":[]},"aF6":{"ah":["apI"]},"a2e":{"aw":[],"w":[]},"bvR":{"aw":[],"w":[]},"bmB":{"ah":["a0R"]},"bmC":{"ah":["a0S"]},"Rp":{"aw":[],"w":[]},"aCi":{"ah":["a_Y"]},"aqe":{"ag":[],"w":[]},"bmJ":{"ah":["aqe"]},"a8i":{"aw":[],"w":[]},"apH":{"ag":[],"w":[]},"bmz":{"ah":["apH"]},"Oz":{"aw":[],"w":[]},"as1":{"aw":[],"w":[]},"OH":{"ag":[],"w":[]},"bnj":{"ah":["OH"]},"af6":{"aw":[],"w":[]},"af5":{"aw":[],"w":[]},"aD1":{"ag":[],"w":[]},"biO":{"ah":["aD1"]},"b3i":{"aw":[],"w":[]},"arp":{"ag":[],"w":[]},"aFS":{"ah":["arp"]},"as7":{"ag":[],"w":[]},"aG7":{"ah":["as7"]},"X1":{"ag":[],"w":[]},"QN":{"ag":[],"w":[]},"a1E":{"ag":[],"w":[]},"a1D":{"ag":[],"w":[]},"aGj":{"ah":["X1"]},"bec":{"ah":["QN"]},"aIn":{"ah":["a1E"]},"aIm":{"ah":["a1D"]},"X2":{"ag":[],"w":[]},"aGl":{"ah":["X2"]},"aso":{"ag":[],"w":[]},"adB":{"aw":[],"w":[]},"adr":{"aw":[],"w":[]},"aDV":{"ag":[],"w":[]},"aGk":{"ah":["aso"]},"aDU":{"aw":[],"w":[]},"b2Q":{"aw":[],"w":[]},"bkm":{"ah":["aDV"]},"asr":{"ag":[],"w":[]},"aGm":{"ah":["asr"]},"a0m":{"ag":[],"w":[]},"aDk":{"ah":["a0m"]},"at0":{"ag":[],"w":[]},"aE6":{"ag":[],"w":[]},"aE8":{"ag":[],"w":[]},"aGJ":{"ah":["at0"],"eG":[]},"aE7":{"aw":[],"w":[]},"bl6":{"ah":["aE6"]},"beG":{"aB":[]},"beF":{"aB":[]},"beE":{"aB":[]},"aE9":{"ah":["aE8"]},"be5":{"aB":[]},"bzi":{"aB":[]},"a1a":{"ag":[],"w":[]},"aGx":{"ah":["a1a"]},"bu5":{"aB":[]},"aum":{"ag":[],"w":[]},"aHn":{"ah":["aum"]}}'))
B.a2E(b.typeUniverse,JSON.parse('{"Ob":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aD
return{dw:w("ls<u?>"),gS:w("oG"),o:w("db"),g5:w("xP"),M:w("dj<q>"),k:w("V"),gv:w("le<ai<ju>>"),gh:w("le<q>"),gH:w("le<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oG>"),E:w("U<db>"),V:w("U<ab>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o6>"),B:w("U<ai<H>>"),m:w("U<aa<q,q>>"),_:w("U<aa<q,@>>"),b:w("U<rV>"),x:w("U<rW>"),gi:w("U<ju>"),a:w("U<lZ>"),Y:w("U<is>"),v:w("U<iE>"),dA:w("U<JK>"),F:w("U<t0>"),Z:w("U<kM>"),g:w("U<hP>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<da>"),s:w("U<q>"),G:w("U<jP>"),eO:w("U<es>"),d9:w("U<eZ>"),p:w("U<w>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aB?>"),d4:w("U<q?>"),ck:w("ai<rV>"),e:w("ai<rW>"),ac:w("ai<ju>"),dZ:w("ai<lZ>"),I:w("ai<is>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("aa<q,q>"),P:w("aa<q,@>"),f:w("aa<@,@>"),cl:w("cL<q,D>"),aS:w("N<a_,tN>"),dc:w("N<JP,bx>"),dv:w("N<q,q>"),bL:w("N<G,bx>"),a3:w("N<H,bx>"),gN:w("N<H,qe>"),w:w("kK"),b1:w("rV"),Q:w("rW"),bP:w("lZ"),i:w("is"),u:w("iE"),gp:w("X3"),J:w("OY"),D:w("qm"),an:w("kM"),c:w("cw"),K:w("aK"),d:w("jJ<q>"),di:w("+outcome,snapshot(XK,a7D?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<is>,q?,q?,q?)"),cz:w("Ki"),bJ:w("dv<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("km<H>"),cc:w("Y<q>"),aM:w("ee<db>"),bG:w("ee<G>"),l:w("w"),gm:w("ri"),ec:w("afu"),q:w("p9"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("db?"),cJ:w("V?"),gw:w("ai<aa<q,@>>?"),bM:w("ai<@>?"),h:w("aa<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6G=new B.bc(A.bJ,A.jE,A.bJ,A.jE)
D.f4=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b7d=new B.av(D.f4,1,A.r,-1)
D.b7f=new B.av(A.ac,2,A.r,-1)
D.b7i=new B.av(A.aU,2,A.r,-1)
D.b7k=new B.av(A.cA,0.8,A.r,-1)
D.b7z=new B.av(A.aQ,2,A.r,-1)
D.b7G=new B.av(A.fj,1.6,A.r,-1)
D.b8B=new B.aY(0,176,0,1/0)
D.b8C=new B.aY(0,1/0,0,260)
D.b8U=new B.aY(90,1/0,0,1/0)
D.bbT=new B.ab(0,A.H,A.dE,A.J,4)
D.daV=w([D.bbT],x.V)
D.b97=new B.n(A.c,null,null,null,D.daV,null,A.a6)
D.d45=w([D.f4,A.b5],x.O)
D.ce1=new B.a7(A.a5,A.a9,A.x,D.d45,null,null)
D.b9l=new B.n(null,null,null,null,null,D.ce1,A.a6)
D.b9q=new B.n(A.be,null,null,null,null,null,A.a6)
D.bnj=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.ds9=w([O.aid,D.bnj],x.O)
D.cd5=new B.a7(A.aX,A.b1,A.x,D.ds9,null,null)
D.b9H=new B.n(null,null,null,A.mP,null,D.cd5,A.m)
D.bvI=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dFe=w([D.bvI,A.akH],x.O)
D.ccf=new B.a7(A.aX,A.b1,A.x,D.dFe,null,null)
D.ba7=new B.n(null,null,null,A.ur,null,D.ccf,A.m)
D.dnH=w([A.aD,A.bA],x.O)
D.ccP=new B.a7(A.a5,A.a9,A.x,D.dnH,null,null)
D.bad=new B.n(null,null,null,null,null,D.ccP,A.a6)
D.fFb=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new B.C("\ud83c\udf89",null,D.fFb,null,null,null,null,null,null,null,null,null)
D.bg_=new B.cl(A.z,null,null,D.h_7,null)
D.bhs=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.ahh=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bks=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bkw=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pw=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uC=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.aiD=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmU=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.yP=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.boI=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_t=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.akg=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.btp=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bty=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akL=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.bv9=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bvg=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bwq=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a0k=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bxB=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.byg=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0y=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bza=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.amm=new B.a5w(2,"active")
D.bDu=new B.bf(42e5)
D.bDx=new B.bf(53e4)
D.bDA=new B.bf(58e4)
D.bDE=new B.bf(82e4)
D.bEr=new B.P(0,30,0,30)
D.bEz=new B.P(0,4,0,8)
D.bED=new B.P(0,8,12,8)
D.bFf=new B.P(12,0,12,88)
D.bFm=new B.P(12,11,12,10)
D.bFO=new B.P(13,10,12,10)
D.bFZ=new B.P(14,10,14,2)
D.bGa=new B.P(14,14,10,14)
D.bGK=new B.P(16,12,16,96)
D.bGP=new B.P(16,14,16,8)
D.bGT=new B.P(16,16,16,96)
D.bGU=new B.P(16,18,16,16)
D.bGY=new B.P(16,4,16,10)
D.bHZ=new B.P(18,6,18,40)
D.bIb=new B.P(20,10,20,20)
D.bIq=new B.P(20,18,20,18)
D.bIR=new B.P(22,22,22,16)
D.bJv=new B.P(2,0,2,10)
D.bKh=new B.P(4,8,12,4)
D.bKw=new B.P(6,1,6,1)
D.bKy=new B.P(6,4,0,0)
D.bKE=new B.P(6,6,12,4)
D.bKZ=new B.P(8,4,12,8)
D.h2M=new B.C("Activity",null,A.fM,null,null,null,null,null,null,null,null,null)
D.bN_=new B.bx(1,A.ba,D.h2M,null)
D.hbt=new B.C("Game Receipts",null,A.ud,null,null,null,null,null,null,null,null,null)
D.fUY=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.WE,null,null,null,null,null,null,null,null,null)
D.d0t=w([D.hbt,D.fUY],x.p)
D.bAg=new B.fo(A.ah,A.e,A.h,A.B,null,A.p,null,0,D.d0t,null)
D.bN2=new B.bx(1,A.ba,D.bAg,null)
D.bRX=new B.a_(58607,"MaterialIcons",!1)
D.a3E=new B.a_(62178,"MaterialIcons",!1)
D.bSO=new B.a_(62410,"MaterialIcons",!1)
D.bTZ=new B.a_(63258,"MaterialIcons",!1)
D.bU3=new B.a_(63304,"MaterialIcons",!1)
D.bU4=new B.a_(63306,"MaterialIcons",!1)
D.bUa=new B.a_(63330,"MaterialIcons",!1)
D.asR=new B.a_(984777,"MaterialIcons",!1)
D.bWJ=new B.ae(A.Do,13,A.ac,null,null,null)
D.bWR=new B.ae(A.jz,13,A.qH,null,null,null)
D.at4=new B.ae(A.m2,null,A.c,null,null,null)
D.bYs=new B.ae(A.DE,34,A.at,null,null,null)
D.bYZ=new B.ae(A.Dr,19,A.c,null,null,null)
D.bZ8=new B.ae(A.arb,24,A.aQ,null,null,null)
D.bZD=new B.ae(A.Dk,28,A.bp,null,null,null)
D.c_8=new B.ae(A.asu,42,A.c,null,null,null)
D.c_i=new B.ae(A.a4D,30,A.c,null,null,null)
D.c0_=new B.ae(A.fX,null,A.c,null,null,null)
D.c0l=new B.ae(A.jz,16,A.c,null,null,null)
D.c12=new B.ae(A.tB,13,A.c,null,null,null)
D.c1b=new B.ae(A.m2,18,A.c,null,null,null)
D.c1K=new B.ae(A.x7,null,A.dS,null,null,null)
D.c2q=new B.ae(A.o3,28,A.c,null,null,null)
D.c2H=new B.ae(A.p_,22,null,null,null,null)
D.c35=new B.ae(A.tw,null,null,null,null,null)
D.c3h=new B.ae(A.hc,28,A.c,null,null,null)
D.c3k=new B.ae(A.cB,null,A.aR,null,null,null)
D.c3u=new B.ae(A.a3k,14,A.c,null,null,null)
D.c45=new B.ae(A.xd,36,A.aN,null,null,null)
D.c4c=new B.ae(A.oW,16,A.c,null,null,null)
D.bnO=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c52=new B.ae(A.ee,9,D.bnO,null,null,null)
D.bV3=new B.a_(983146,"MaterialIcons",!1)
D.c5k=new B.ae(D.bV3,null,A.aQ,null,null,null)
D.c5U=new B.ae(A.va,28,D.f4,null,null,null)
D.c5Z=new B.ae(A.ts,null,A.fj,null,null,null)
D.c63=new B.ae(A.hL,20,D.f4,null,null,null)
D.bVr=new B.a_(983377,"MaterialIcons",!1)
D.c6d=new B.ae(D.bVr,64,A.c,null,null,null)
D.c6K=new B.ae(A.fY,24,A.c,null,null,null)
D.c7G=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7R=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c85=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c86=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bll=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bp6=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.boJ=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dst=w([D.bll,D.bp6,D.boJ],x.O)
D.c9X=new B.a7(A.ay,A.aC,A.x,D.dst,null,null)
D.dye=w([A.bh,A.b5],x.O)
D.caj=new B.a7(A.ay,A.aC,A.x,D.dye,null,null)
D.bnb=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.bud=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.dbx=w([D.bnb,D.bud],x.O)
D.car=new B.a7(A.ay,A.aC,A.x,D.dbx,null,null)
D.duc=w([A.bs,A.a_,A.eg],x.O)
D.cax=new B.a7(A.ay,A.aC,A.x,D.duc,null,null)
D.caA=new B.a7(A.a5,A.a9,A.x,E.aAq,null,null)
D.daJ=w([A.fj,A.cd],x.O)
D.auS=new B.a7(A.a5,A.a9,A.x,D.daJ,null,null)
D.dbd=w([A.fj,A.bA],x.O)
D.auT=new B.a7(A.a5,A.a9,A.x,D.dbd,null,null)
D.aED=w([D.pw,A.aE,A.c3],x.O)
D.caU=new B.a7(A.ay,A.aC,A.x,D.aED,null,null)
D.br4=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d8u=w([D.br4,A.ahy,A.a_],x.O)
D.caZ=new B.a7(A.ay,A.aC,A.x,D.d8u,null,null)
D.b4E=new B.df(-0.8,-1)
D.b4G=new B.df(1.2,1)
D.d7z=w([A.c,A.eU,A.hh,A.c,A.fA,A.aH,A.oy],x.O)
D.dtw=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.cb0=new B.a7(D.b4E,D.b4G,A.x,D.d7z,D.dtw,null)
D.bu3=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.brm=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dss=w([D.bu3,D.brm],x.O)
D.cbt=new B.a7(A.a5,A.a9,A.x,D.dss,null,null)
D.cbz=new B.a7(A.ay,A.aC,A.x,A.T7,null,null)
D.dmB=w([A.a0o,A.yR],x.O)
D.cbB=new B.a7(A.a5,A.a9,A.x,D.dmB,null,null)
D.dr9=w([A.hu,A.h4],x.O)
D.auZ=new B.a7(A.a5,A.a9,A.x,D.dr9,null,null)
D.dxM=w([A.be,A.bQ],x.O)
D.av_=new B.a7(A.a5,A.a9,A.x,D.dxM,null,null)
D.cSu=w([A.di,A.fw],x.O)
D.cch=new B.a7(A.ay,A.aC,A.x,D.cSu,null,null)
D.d6t=w([A.c,A.bc],x.O)
D.ccr=new B.a7(A.a5,A.a9,A.x,D.d6t,null,null)
D.ajJ=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bkc=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dj1=w([D.ajJ,A.jO,A.rT,A.aE,D.bkc],x.O)
D.cf7=w([0,0.28,0.55,0.82,1],x.n)
D.cct=new B.a7(A.ay,A.aC,A.x,D.dj1,D.cf7,null)
D.ccA=new B.a7(A.a5,A.a9,A.x,A.TP,null,null)
D.ccB=new B.a7(A.a5,A.a9,A.x,E.aCZ,null,null)
D.ccG=new B.a7(A.a5,A.a9,A.x,D.aED,null,null)
D.dcO=w([A.bA,A.fj],x.O)
D.ccV=new B.a7(A.a5,A.a9,A.x,D.dcO,null,null)
D.dCi=w([A.aD,A.bA,A.bc],x.O)
D.ccX=new B.a7(A.a5,A.a9,A.x,D.dCi,null,null)
D.dmM=w([A.at,A.bM,A.fT],x.O)
D.cd0=new B.a7(A.a5,A.a9,A.x,D.dmM,null,null)
D.dC0=w([A.bs,A.aM,A.bP,A.bn,A.aS,A.cA,A.an],x.O)
D.dh1=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cd4=new B.a7(A.ay,A.aC,A.x,D.dC0,D.dh1,null)
D.cde=new B.a7(A.ay,A.aC,A.x,A.a64,null,null)
D.dno=w([I.wy,A.ea],x.O)
D.cdo=new B.a7(A.a5,A.a9,A.x,D.dno,null,null)
D.dvN=w([D.akL,D.aiD,A.a_],x.O)
D.cdx=new B.a7(A.ay,A.aC,A.x,D.dvN,null,null)
D.bwW=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d73=w([A.fk,A.hu,D.bwW],x.O)
D.ce3=new B.a7(A.ay,A.aC,A.x,D.d73,null,null)
D.ddo=w([D.pw,A.aE],x.O)
D.ce5=new B.a7(A.ay,A.aC,A.x,D.ddo,null,null)
D.cex=w([F.xk,A.o3,A.jz,A.hM,A.jU,A.l8,A.kl,A.rc,A.o2,A.f1,A.lw,A.zU,A.Ih],x.A)
D.ci3=w([10,50,100,200],x.t)
D.crS=w([1,3,5,7],x.t)
D.cwT=w([25,50,100,250],x.t)
D.bUY=new B.a_(983104,"MaterialIcons",!1)
D.cFE=w([A.o3,A.mu,A.p_,A.m0,A.hx,A.vk,D.bUY,A.a4y],x.A)
D.cL6=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cXF=w([0,0.22,0.5,0.78,1],x.n)
D.d0D=w([8,13,19],x.n)
D.a6o=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h1L=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eGv=new B.jJ("questions",!0,48,null,D.h1L,null,x.d)
D.fS1=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eGC=new B.jJ("edit",!0,48,null,D.fS1,null,x.d)
D.ha_=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eGu=new B.jJ("delete",!0,48,null,D.ha_,null,x.d)
D.d6y=w([D.eGv,D.eGC,D.eGu],B.aD("U<t4<q>>"))
D.dbr=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.dbH=w([A.bU,A.ft],x.O)
D.a9t=new C.lZ("text","",null,null)
D.dd_=w([D.a9t],x.a)
D.dez=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f1e=new B.afR(A.kI,"Home")
D.eSw=new B.afR(A.nf,"Growth")
D.eXr=new B.afR(A.jz,"Wallet")
D.dhi=w([D.f1e,D.eSw,D.eXr],B.aD("U<+icon,label(a_,q)>"))
D.dhK=w([4,0,2,6,8,1,3,5,7],x.t)
D.dhS=w([A.c,A.ci,A.cA],x.O)
D.e3N=new C.t0("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e3Q=new C.t0("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e3O=new C.t0("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e3I=new C.t0("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e3J=new C.t0("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e3R=new C.t0("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6W=w([D.e3N,D.e3Q,D.e3O,D.e3I,D.e3J,D.e3R],x.F)
D.a70=w([A.aB,A.bh,A.da,A.at],x.O)
D.bo2=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dnw=w([A.Zx,D.bo2,A.rT,A.iF,A.jO],x.O)
D.a77=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Th=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cFT=w([3,4,5],x.t)
D.cT8=w([6,7,8],x.t)
D.ceE=w([0,3,6],x.t)
D.crX=w([1,4,7],x.t)
D.czp=w([2,5,8],x.t)
D.ceJ=w([0,4,8],x.t)
D.czm=w([2,4,6],x.t)
D.dq6=w([K.avq,D.cFT,D.cT8,D.ceE,D.crX,D.czp,D.ceJ,D.czm],x.B)
D.aMT=new C.JP(0,"abab")
D.e3G=new C.JP(1,"aaaBbb")
D.aMU=new C.JP(2,"aabb")
D.dre=w([D.aMT,D.e3G,D.aMU],B.aD("U<JP>"))
D.drw=w([],x.a)
D.aDQ=w([],x.v)
D.dvE=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.TB=w([1,2,3,-1,-2],x.t)
D.dEZ=w([A.im,A.aD],x.O)
D.hIe=new C.ri("dice","Dice Roll","Roll for cash & prizes!",A.nZ,D.dEZ)
D.hIb=new C.ri("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.vh,A.aCs)
D.dyE=w([A.dr,A.bp],x.O)
D.hI9=new C.ri("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a4k,D.dyE)
D.dEo=w([A.dU,A.nF],x.O)
D.hIf=new C.ri("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a4y,D.dEo)
D.crC=w([A.jM,A.t5],x.O)
D.hIc=new C.ri("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Qh,D.crC)
D.dvD=w([A.lQ,D.a_t],x.O)
D.hIa=new C.ri("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ik,D.dvD)
D.hId=new C.ri("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.o7)
D.dxL=w([D.hIe,D.hIb,D.hI9,D.hIf,D.hIc,D.hIa,D.hId],B.aD("U<ri>"))
D.dzi=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bt8=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bt_=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.alC=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dA9=w([D.bt8,D.bt_,D.alC],x.O)
D.bvB=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dAb=w([A.ahx,D.bvB,D.alC],x.O)
D.dAQ=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aF0=w([D.pw,A.c,D.f4,A.c4,A.b3,A.aE],x.O)
D.e3L=new C.t0("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e3K=new C.t0("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e3H=new C.t0("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e3P=new C.t0("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e3S=new C.t0("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e3M=new C.t0("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7S=w([D.e3L,D.e3K,D.e3H,D.e3P,D.e3S,D.e3M],x.F)
D.dEC=w([A.cd,A.t5],x.O)
D.esV={checkers_deluxe:0,tic_tac_go:1}
D.aKR=new B.bq(D.esV,["Checkers Deluxe","Tic Tac Go"],B.aD("bq<q,q>"))
D.erY={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aL1=new B.bq(D.erY,[1,2,3,4,5,6,7],B.aD("bq<q,H>"))
D.dXc=new C.a8i(null)
D.e_L=new C.lZ("signature","NGMY Support Team",null,null)
D.e_M=new C.lZ("divider","",null,null)
D.UB=new C.X3(!1,!1,!1,!1)
D.UD=new C.OY(!1,!1,!1,!1)
D.e0U=new C.OY(!0,!0,!1,!1)
D.EH=new C.ate(0,"swahili")
D.aMS=new C.ate(1,"english")
D.EI=new C.ate(2,"mix")
D.dpu=w([A.iT,A.il,A.d7],x.O)
D.bTJ=new B.a_(63118,"MaterialIcons",!1)
D.e4T=new C.pF(D.dpu,A.h6,A.at,"BACKGAMMON","\ud83c\udfb2",D.bTJ)
D.bVP=new B.a_(983637,"MaterialIcons",!1)
D.e4U=new C.pF(A.aFg,A.bh,A.ev,"EURO WHEEL","\ud83c\udfa1",D.bVP)
D.dzD=w([A.a_,A.aM,A.bz],x.O)
D.e4V=new C.pF(D.dzD,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.Qh)
D.daQ=w([A.di,A.bp,A.dZ],x.O)
D.e4W=new C.pF(D.daQ,A.aB,A.da,"CONNECT 4","\ud83d\udd34",A.a4N)
D.dtR=w([A.dx,A.fw,A.t5],x.O)
D.e4X=new C.pF(D.dtR,A.wB,A.cd,"PUNTO BANCO","\ud83d\udc8e",A.mu)
D.cSw=w([A.ox,A.iD,A.mi],x.O)
D.e4Y=new C.pF(D.cSw,A.jK,A.kD,"DOMINOES","\ud83c\udc53",A.asv)
D.dAo=w([A.yZ,A.uG,A.hU],x.O)
D.e4Z=new C.pF(D.dAo,A.CF,A.hE,"WAR","\u2694\ufe0f",A.a3Z)
D.e5_=new C.pF(A.aF9,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nZ)
D.dcP=w([A.kB,A.aD,A.dU],x.O)
D.e50=new C.pF(D.dcP,A.eD,A.fj,"JACKPOT","\ud83c\udfb0",A.nZ)
D.dsN=w([A.k3,A.lL,A.bA],x.O)
D.e51=new C.pF(D.dsN,A.qt,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zN)
D.d43=w([A.il,A.ea,A.at],x.O)
D.bTa=new B.a_(62865,"MaterialIcons",!1)
D.e52=new C.pF(D.d43,A.uM,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bTa)
D.e53=new C.pF(A.a7P,A.bn,A.bh,"HOLD'EM","\u2660\ufe0f",A.jz)
D.dAP=w([A.fk,A.h4,A.b5],x.O)
D.bSi=new B.a_(61234,"MaterialIcons",!1)
D.e54=new C.pF(D.dAP,A.mj,A.aU,"CRAPS","\ud83c\udfb2",D.bSi)
D.da0=w([A.ft,A.js,A.bU],x.O)
D.e55=new C.pF(D.da0,A.bM,A.bc,"PLINKO","\ud83d\udc8e",A.Qq)
D.bVA=new B.a_(983492,"MaterialIcons",!1)
D.e56=new C.pF(A.a7P,A.eC,A.bh,"SNOOKER","\ud83c\udfb1",D.bVA)
D.dy8=w([A.fk,A.h4,A.aU],x.O)
D.e57=new C.pF(D.dy8,A.uH,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hL)
D.dyw=w([A.eg,A.et,A.bh],x.O)
D.bU9=new B.a_(63324,"MaterialIcons",!1)
D.e58=new C.pF(D.dyw,A.wE,A.be,"KLONDIKE","\ud83c\udccf",D.bU9)
D.dqe=w([A.bB,A.bs,A.a_],x.O)
D.e59=new C.pF(D.dqe,A.aQ,A.aM,"VEGAS TABLE","\ud83c\udccf",A.Iz)
D.rk=new C.FG(0,"continueGame")
D.rl=new C.FG(1,"youWin")
D.JZ=new C.FG(2,"youLose")
D.UM=new C.FG(3,"draw")
D.aN6=new C.XK(0,"found")
D.enX=new C.XK(1,"foundLive")
D.a9K=new C.XK(2,"notFound")
D.aN7=new C.XK(3,"wrongAccount")
D.ewm=new B.r(4,12)
D.ezQ=new B.D(A.zi,A.uv,null)
D.bJU=new B.P(4,0,0,3)
D.fCj=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heE=new B.C("NGMY Helper",null,D.fCj,null,null,null,null,null,null,null,null,null)
D.eA6=new B.D(D.bJU,D.heE,null)
D.bU2=new B.a_(63284,"MaterialIcons",!1)
D.bZp=new B.ae(D.bU2,18,A.pz,null,null,null)
D.fHg=new B.F(!0,A.pz,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW9=new B.C("Continue",null,D.fHg,null,null,null,null,null,null,null,null,null)
D.ds3=w([D.bZp,A.bk,D.fW9],x.p)
D.flF=new B.c3(A.aL,A.e,A.M,A.l,null,A.p,null,0,D.ds3,null)
D.eAa=new B.D(A.hw,D.flF,null)
D.eAr=new B.D(A.bT,A.uv,null)
D.bsK=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dob=w([A.hu,A.h4,A.cX,D.bsK],x.O)
D.cd7=new B.a7(A.ay,A.aC,A.x,D.dob,A.E3,null)
D.bag=new B.n(null,null,null,null,null,D.cd7,A.m)
D.bBw=new B.bP(D.bag,A.bm,null,null)
D.eGY=new B.cM(0,0,0,0,null,null,D.bBw,null)
D.c0h=new B.ae(A.x6,11,A.c,null,null,null)
D.eH1=new B.cM(10,12,null,null,null,null,D.c0h,null)
D.cXu=w([A.hW,A.eg,A.lr],x.O)
D.eHF=new B.bT(A.BO,1.1,A.x,null,0,D.cXu,null,null)
D.bur=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bnv=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bpK=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dlB=w([D.bur,D.bnv,D.bpK],x.O)
D.eHN=new B.bT(A.af3,1.05,A.x,null,0,D.dlB,null,null)
D.eIb=new B.bT(A.z,0.5,A.x,null,0,E.aC1,null,null)
D.fjy=new B.a2(-18,0,18,1)
D.fk5=new B.a2(-3,-5,3,5)
D.bZS=new B.ae(A.e7,16,D.f4,null,null,null)
D.aYN=new B.F(!0,D.f4,null,null,null,null,12,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc7=new B.C("Screenshot added \xb7 tap to change",null,D.aYN,null,null,null,null,null,null,null,null,null)
D.d7C=w([D.bZS,A.bk,D.hc7],x.p)
D.fl_=new B.c3(A.aL,A.b9,A.h,A.l,null,A.p,null,0,D.d7C,null)
D.c31=new B.ae(A.o1,15,D.f4,null,null,null)
D.h9U=new B.C("Refresh",null,D.aYN,null,null,null,null,null,null,null,null,null)
D.dab=w([D.c31,A.db,D.h9U],x.p)
D.fl1=new B.c3(A.aL,A.e,A.M,A.l,null,A.p,null,0,D.dab,null)
D.esh={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fng=new B.dj(D.esh,3,x.M)
D.es5={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fns=new B.dj(D.es5,36,x.M)
D.es8={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fnG=new B.dj(D.es8,6,x.M)
D.etH={memory:0,typing:1,scramble:2,pattern:3}
D.nm=new B.dj(D.etH,4,x.M)
D.fqn=new B.au(276,276)
D.fr5=new B.a5(13,null,null,null)
D.bgI=new B.fm(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.frh=new B.a5(26,26,D.bgI,null)
D.fsa=new B.hQ(8,0,0,1,null)
D.hdk=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aWb=new B.b0(D.hdk,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fR3=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fve=new B.b0(D.fR3,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fSe=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fvk=new B.b0(D.fSe,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.ha4=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.b0(D.ha4,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.btA=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fG8=new B.F(!0,D.btA,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz9=new B.es("$",null,null,A.cN,null,null,null,null,null,null,D.fG8)
D.fzp=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzI=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new B.F(!0,A.bs,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAf=new B.F(!0,A.a_,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAB=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAK=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAM=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC7=new B.F(!0,D.f4,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.F(!0,A.bM,null,null,null,null,14,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD1=new B.F(!0,A.Cy,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXw=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new B.F(!0,A.bM,null,null,null,null,11.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEY=new B.F(!0,A.ac,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fFh=new B.F(!0,A.ac,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGR=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fHo=new B.F(!0,A.jk,null,null,null,null,10.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blL=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fHG=new B.F(!0,D.blL,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new B.F(!0,A.aB,null,null,null,null,17,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJC=new B.F(!0,D.ajJ,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYd=new B.F(!0,A.Cy,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJX=new B.F(!0,A.et,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKg=new B.F(!0,A.Cy,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.y_=new B.F(!0,A.c,null,null,null,null,13,A.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqO=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fKv=new B.F(!0,D.bqO,null,null,null,null,12,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL6=new B.F(!0,A.Uf,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMd=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMk=new B.F(!0,A.iH,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMo=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMU=new B.F(!0,A.a_,null,null,null,null,10,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMY=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOl=new B.F(!0,A.ac,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOD=new B.F(!0,A.be,null,null,null,null,14,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP7=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPb=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQd=new B.C("Value per pair",null,A.hC,null,null,null,null,null,null,null,null,null)
D.fQf=new B.C("Restore now",null,A.cb,null,null,null,null,null,null,null,null,null)
D.fQP=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXY=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR_=new B.C("AVAILABLE PLANS",null,D.aXY,null,null,null,null,null,null,null,null,null)
D.fR1=new B.C("I understand",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fRC=new B.C("Go Back",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fCR=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSm=new B.C("PLAN VALUE",null,D.fCR,null,null,null,null,null,null,null,null,null)
D.fSp=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fSM=new B.C("Deposit",null,A.WZ,null,null,null,null,null,null,null,null,null)
D.fNf=new B.F(!0,A.eD,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.C("JACKPOT SLOTS",null,D.fNf,null,null,null,null,null,null,null,null,null)
D.fU8=new B.C("Restore",null,A.cb,null,null,null,null,null,null,null,null,null)
D.fCX=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUc=new B.C("YOUR NUMBER",null,D.fCX,null,null,null,null,null,null,null,null,null)
D.fUt=new B.C("SPIN REELS",null,E.acH,null,null,null,null,null,null,null,null,null)
D.fUX=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fVu=new B.C("Perfect Score Profit",null,A.hC,null,null,null,null,null,null,null,null,null)
D.fW7=new B.C("Join room",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fYk=new B.C("Add payment screenshot",null,A.ja,null,null,null,null,null,null,null,null,null)
D.fYA=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new B.C("INVITE A PLAYER",null,D.fMs,null,null,null,null,null,null,null,null,null)
D.fLv=new B.F(!0,A.Zx,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZw=new B.C("NGMY GOLD LEADER",null,D.fLv,null,null,null,null,null,null,null,null,null)
D.h_2=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.h_t=new B.C("Invest & Play",null,A.m8,null,null,null,null,null,null,null,null,null)
D.aXT=new B.F(!0,D.yP,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_V=new B.C("VALID THRU",null,D.aXT,null,null,null,null,null,null,null,null,null)
D.aYA=new B.F(!0,A.aF,null,null,null,null,11,A.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h02=new B.C("DEALER",null,D.aYA,null,null,null,null,null,null,null,null,null)
D.h09=new B.C("CARDHOLDER",null,D.aXT,null,null,null,null,null,null,null,null,null)
D.fKX=new B.F(!0,A.bn,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0U=new B.C("NGMY PLATINUM",null,D.fKX,null,null,null,null,null,null,null,null,null)
D.fOs=new B.F(!0,A.qH,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1G=new B.C("EARNED SO FAR",null,D.fOs,null,null,null,null,null,null,null,null,null)
D.h2f=new B.C("VS",null,A.acI,null,null,null,null,null,null,null,null,null)
D.h2G=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h32=new B.C("One day left",null,A.acx,null,A.K,null,null,null,null,null,null,null)
D.h3o=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.Fn,null,null,null,null,null,null,null,null,null)
D.h3p=new B.C("Multiplayer invite",null,A.iP,null,null,null,null,null,null,null,null,null)
D.h3B=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new B.F(!0,A.Uf,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3H=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fBi,null,null,null,null,null,null,null,null,null)
D.h3S=new B.C("Browse Topics",null,A.fg,null,null,null,null,null,null,null,null,null)
D.fAb=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h48=new B.C("Investment Required",null,D.fAb,null,A.K,null,null,null,null,null,null,null)
D.h5F=new B.C("Network Status",null,A.aX9,null,null,null,null,null,null,null,null,null)
D.aXg=new B.F(!0,A.ac,null,null,null,null,12.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6i=new B.C("Their account email",null,D.aXg,null,null,null,null,null,null,null,null,null)
D.h6D=new B.C("Verification code",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h6E=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h6U=new B.C("ACTIVE ASSET",null,D.aXY,null,null,null,null,null,null,null,null,null)
D.h7i=new B.C("Scan QR",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h7n=new B.C("Check word",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h7P=new B.C("YOUR HAND",null,D.aYA,null,null,null,null,null,null,null,null,null)
D.h8p=new B.C("NGMY Music Studio",null,A.jY,null,null,null,null,null,null,null,null,null)
D.h8s=new B.C("I sent it \u2014 submit deposit",null,A.m8,null,null,null,null,null,null,null,null,null)
D.h9h=new B.C("Back",null,A.Bm,null,null,null,null,null,null,null,null,null)
D.fPp=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9p=new B.C("DEAL / PLAY ROUND",null,D.fPp,null,null,null,null,null,null,null,null,null)
D.h9C=new B.C("Got it \u2014 keep chatting",null,A.cb,null,null,null,null,null,null,null,null,null)
D.h9M=new B.C("3 Messages Left",null,A.aYq,null,null,null,null,null,null,null,null,null)
D.haj=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.has=new B.C("Copy",null,A.cH,null,null,null,null,null,null,null,null,null)
D.haP=new B.C("How many games?",null,D.aXg,null,null,null,null,null,null,null,null,null)
D.fKo=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hb0=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fKo,null,A.K,null,null,null,null,null,null,null)
D.hcB=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hcQ=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fPR=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hev=new B.C("NGMY  WALLET",null,D.fPR,null,null,null,null,null,null,null,null,null)
D.hew=new B.C("Select Your Bet",null,A.he,null,null,null,null,null,null,null,null,null)
D.hDW=new B.bl("history",x.W)
D.hEi=new B.bl("ngmy_local_home",x.W)
D.hEj=new B.bl("ngmy_local_invest",x.W)
D.hEk=new B.bl("ngmy_local_wallet",x.W)
D.hHR=new C.a_Y(null)
D.b2D=new C.aDW(0,"grid")
D.b2E=new C.aDW(1,"questions")
D.hIV=new C.aDW(2,"answer")
D.hLL=new C.a0S(null)})();(function staticFields(){$.heB=B.aQ(x.N)
$.hG9=B.S(x.N,x.k)
$.hkw=null
$.hkk=B.S(x.N,B.aD("KG"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iG0","bIf",()=>C.inm())
w($,"iFN","hPa",()=>{var v=null,u=B.fs(v,A.cw,v,v,v,D.fz9,A.a7,A.bW,v,A.dD,A.bX)
u.e5()
return u})})()};
(a=>{a["OEwBcHIxx2BOu3RU3JXz36SpRVM="]=a.current})($__dart_deferred_initializers__);