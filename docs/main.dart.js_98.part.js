((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,H,I,R,L,E,S,K,T,M,U,V,N,O,W,P,X,Y,Z,F,Q,A_,C={
hAC(d,e,f){var w=null,v=f.k("H5<0>"),u=new B.H5(w,w,w,w,v)
$.w4()
u.d=new C.cCU(new B.vz(),e,u,f,d)
return new B.ib(u,v.k("ib<1>"))},
cCU:function cCU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCV:function cCV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCR:function cCR(d){this.a=d},
cCS:function cCS(d,e){this.a=d
this.b=e},
cCT:function cCT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCQ:function cCQ(d,e,f){this.a=d
this.b=e
this.c=f},
bvs:function bvs(d){this.a=d},
hAB(d,e,f,g){return new C.ayh(d,e,f,null,g.k("ayh<0>"))},
Gi:function Gi(){},
aL0:function aL0(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fi3:function fi3(d){this.a=d},
fi2:function fi2(d,e){this.a=d
this.b=e},
fi5:function fi5(d){this.a=d},
fi0:function fi0(d,e,f){this.a=d
this.b=e
this.c=f},
fi4:function fi4(d){this.a=d},
fi1:function fi1(d){this.a=d},
ayh:function ayh(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
isD(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aY(w,1))
return w},
hLH(d){var w=C.isD(d)
if(w.length===0)return""
return"$"+w},
fRY(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fRY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.V(Date.now(),0,!1).bN(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbr())o=o===t.gbr()&&p.b<t.gcD()
else o=!0
if(o){w=4
break}if(q.x!==A.cx){w=4
break}if(q.d!==A.hh){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cW(m,"game payout:",0))if(!B.cW(m,"game partial:",0)){if(!B.cW(m,"multiplayer payout:",0))o=B.cW(m,"dice",0)&&q.e===A.fF
else o=l
l=o}if(!l){w=4
break}if(B.cW(m,"game payout:",0))k=A.a.i(A.a.aY(n,A.a.cd(m,"game payout:")+12))
else if(B.cW(m,"game partial:",0)){k=A.a.i(A.a.aY(n,A.a.cd(m,"game partial:")+13))
j=A.a.cd(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else if(B.cW(m,"multiplayer payout:",0)){k=A.a.i(A.a.aY(n,A.a.cd(m,"multiplayer payout:")+19))
j=A.a.cd(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else k=B.cW(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.vi(q.c,p,n,d,o,null,q.a,!0),$async$fRY)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fRY,v)},
ixB(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
itF(d,e,f){return A.d.aS(e,new C.fVH(f,A.a.i(d.toLowerCase())))},
fVy(d){var w
C.hwG(d)
w=d.c7
return B.bs(new B.N(w,new C.fVz(),B.T(w).k("N<1,@>")),!0,x.N)},
ijd(d,e,f){var w,v,u,t,s,r,q=null,p=A.bZ,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.el().gic().b
if(u.a===0)t=1
else{new B.b9(u,B.a5(u).k("b9<2>")).gH(0)
u=$.lb()
s=u.d
t=s==null?u.gho():s}w=A.i.cE(f*t)
v=new C.fBN(f)
if(J.d7(n,"data:image"))try{u=B.h1(A.cE.aK(A.d.gal(J.lR(n,","))),A.z,w,new C.fBK(v),A.hd,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d7(n,"supabase://"))return new B.lg(B.a3n(n),new C.fBL(f,e,p,w,v),q,q,x.gh)
return B.kK(n,A.z,w,new C.fBM(v),A.hd,p,!0,e,q,q,f)},
hkA(d,e){return new B.a6(e,e,B.i7(C.ijd(d,e,e),A.aq),null)},
ibe(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dA0,x.gm)
for(w=0;w<36;++w){v=A.Eg[w]
s.push(new C.ri(v.a,v.b,v.c,v.e,v.f))}return new C.aD3(u,B.S(t,t),s)},
fVH:function fVH(d,e){this.a=d
this.b=e},
fVz:function fVz(){},
fBN:function fBN(d){this.a=d},
fBK:function fBK(d){this.a=d},
fBL:function fBL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBJ:function fBJ(d){this.a=d},
fBM:function fBM(d){this.a=d},
ano:function ano(d,e,f,g,h,i,j){var _=this
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
aD3:function aD3(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dn5:function dn5(d,e){this.a=d
this.b=e},
dng:function dng(d,e){this.a=d
this.b=e},
dny:function dny(){},
dnz:function dnz(d){this.a=d},
dno:function dno(d,e){this.a=d
this.b=e},
dnn:function dnn(){},
dnp:function dnp(d){this.a=d},
dnm:function dnm(){},
dnr:function dnr(d){this.a=d},
dnq:function dnq(){},
dnj:function dnj(d){this.a=d},
dnh:function dnh(d){this.a=d},
dni:function dni(d){this.a=d},
dnk:function dnk(d){this.a=d},
dnl:function dnl(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
dnc:function dnc(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dna:function dna(d){this.a=d},
dnd:function dnd(d){this.a=d},
dne:function dne(d){this.a=d},
dnf:function dnf(d,e,f){this.a=d
this.b=e
this.c=f},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn7:function dn7(d,e){this.a=d
this.b=e},
dn6:function dn6(d,e){this.a=d
this.b=e},
dnx:function dnx(d){this.a=d},
dnv:function dnv(d,e,f){this.a=d
this.b=e
this.c=f},
dnu:function dnu(d,e,f){this.a=d
this.b=e
this.c=f},
dnt:function dnt(d,e){this.a=d
this.b=e},
dns:function dns(){},
dnw:function dnw(d){this.a=d},
aFV:function aFV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bnc:function bnc(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e0U:function e0U(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0V:function e0V(d){this.a=d},
e0S:function e0S(){},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0R:function e0R(d){this.a=d},
e0X:function e0X(d){this.a=d},
ann:function ann(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aD2:function aD2(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dn_:function dn_(d){this.a=d},
dn2:function dn2(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn4:function dn4(d){this.a=d},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn0:function dn0(d,e){this.a=d
this.b=e},
anp:function anp(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD4:function aD4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bT=_.cU=""
_.c=_.a=_.bH=null},
doS:function doS(d,e){this.a=d
this.b=e},
doV:function doV(d){this.a=d},
doW:function doW(d){this.a=d},
doX:function doX(d){this.a=d},
doY:function doY(d){this.a=d},
doZ:function doZ(d){this.a=d},
doT:function doT(d){this.a=d},
doU:function doU(d){this.a=d},
do7:function do7(d,e){this.a=d
this.b=e},
do8:function do8(d,e){this.a=d
this.b=e},
doB:function doB(d){this.a=d},
doC:function doC(){},
don:function don(d,e,f){this.a=d
this.b=e
this.c=f},
doo:function doo(d){this.a=d},
dop:function dop(d,e,f){this.a=d
this.b=e
this.c=f},
doq:function doq(d,e){this.a=d
this.b=e},
dor:function dor(){},
dnA:function dnA(d){this.a=d},
do6:function do6(d,e){this.a=d
this.b=e},
doD:function doD(){},
doM:function doM(){},
doA:function doA(d){this.a=d},
doz:function doz(d){this.a=d},
do4:function do4(d){this.a=d},
do5:function do5(){},
doH:function doH(){},
doI:function doI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doJ:function doJ(d,e,f){this.a=d
this.b=e
this.c=f},
dnB:function dnB(){},
dnC:function dnC(d){this.a=d},
dnD:function dnD(){},
dog:function dog(d,e){this.a=d
this.b=e},
doh:function doh(d,e,f){this.a=d
this.b=e
this.c=f},
doi:function doi(d){this.a=d},
dof:function dof(d){this.a=d},
dos:function dos(d){this.a=d},
dot:function dot(){},
dou:function dou(d){this.a=d},
dov:function dov(){},
dow:function dow(d){this.a=d},
dox:function dox(){},
doG:function doG(d,e,f){this.a=d
this.b=e
this.c=f},
doj:function doj(d){this.a=d},
dok:function dok(d,e){this.a=d
this.b=e},
dol:function dol(d){this.a=d},
dom:function dom(d){this.a=d},
doK:function doK(d){this.a=d},
doL:function doL(d){this.a=d},
dnE:function dnE(d){this.a=d},
dnF:function dnF(d,e){this.a=d
this.b=e},
dnG:function dnG(d){this.a=d},
dnH:function dnH(d){this.a=d},
doE:function doE(d,e){this.a=d
this.b=e},
doF:function doF(d){this.a=d},
doe:function doe(d,e){this.a=d
this.b=e},
doy:function doy(d,e,f){this.a=d
this.b=e
this.c=f},
doc:function doc(d,e,f){this.a=d
this.b=e
this.c=f},
dod:function dod(){},
doN:function doN(d){this.a=d},
doO:function doO(d){this.a=d},
doP:function doP(d){this.a=d},
doR:function doR(d){this.a=d},
doQ:function doQ(){},
dob:function dob(d,e,f){this.a=d
this.b=e
this.c=f},
doa:function doa(d,e){this.a=d
this.b=e},
do9:function do9(d,e){this.a=d
this.b=e},
dnU:function dnU(d){this.a=d},
dnT:function dnT(d,e){this.a=d
this.b=e},
dnV:function dnV(d){this.a=d},
dnS:function dnS(d,e){this.a=d
this.b=e},
dnW:function dnW(d){this.a=d},
dnR:function dnR(){},
dnX:function dnX(d){this.a=d},
dnP:function dnP(){},
dnQ:function dnQ(d){this.a=d},
dnY:function dnY(d){this.a=d},
dnO:function dnO(d,e){this.a=d
this.b=e},
dnZ:function dnZ(d){this.a=d},
dnN:function dnN(d,e){this.a=d
this.b=e},
dnJ:function dnJ(d,e){this.a=d
this.b=e},
do_:function do_(d){this.a=d},
dnM:function dnM(d,e){this.a=d
this.b=e},
do0:function do0(d){this.a=d},
dnL:function dnL(d){this.a=d},
dnI:function dnI(d,e){this.a=d
this.b=e},
do1:function do1(d,e,f){this.a=d
this.b=e
this.c=f},
do2:function do2(d){this.a=d},
dnK:function dnK(){},
do3:function do3(d){this.a=d},
aob:function aob(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bkf:function bkf(){this.c=this.a=null},
dsr:function dsr(d,e){this.a=d
this.b=e},
dsq:function dsq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ake:function ake(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
aA5:function aA5(d,e,f,g,h,i,j,k,l,m){var _=this
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
cOV:function cOV(d){this.a=d},
cOf:function cOf(d,e){this.a=d
this.b=e},
cO5:function cO5(d){this.a=d},
cO6:function cO6(d){this.a=d},
cOp:function cOp(d){this.a=d},
cOm:function cOm(d){this.a=d},
cOn:function cOn(d){this.a=d},
cOo:function cOo(d,e,f){this.a=d
this.b=e
this.c=f},
cOh:function cOh(d){this.a=d},
cOg:function cOg(d){this.a=d},
cO7:function cO7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cOk:function cOk(d){this.a=d},
cOj:function cOj(d){this.a=d},
cOi:function cOi(d,e){this.a=d
this.b=e},
cOI:function cOI(d){this.a=d},
cOC:function cOC(d){this.a=d},
cOF:function cOF(d){this.a=d},
cOE:function cOE(){},
cOB:function cOB(d){this.a=d},
cOD:function cOD(d,e){this.a=d
this.b=e},
cOA:function cOA(){},
cOc:function cOc(){},
cOd:function cOd(d,e){this.a=d
this.b=e},
cOe:function cOe(d){this.a=d},
cOa:function cOa(d,e){this.a=d
this.b=e},
cOb:function cOb(d,e){this.a=d
this.b=e},
cOs:function cOs(d,e){this.a=d
this.b=e},
cOl:function cOl(d){this.a=d},
cOt:function cOt(d){this.a=d},
cOu:function cOu(d,e){this.a=d
this.b=e},
cOv:function cOv(d,e){this.a=d
this.b=e},
cOw:function cOw(d,e){this.a=d
this.b=e},
cOx:function cOx(d,e,f){this.a=d
this.b=e
this.c=f},
cOy:function cOy(d){this.a=d},
cOz:function cOz(d){this.a=d},
cOq:function cOq(d,e){this.a=d
this.b=e},
cOH:function cOH(d){this.a=d},
cOr:function cOr(d,e){this.a=d
this.b=e},
cOU:function cOU(d){this.a=d},
cON:function cON(d){this.a=d},
cOQ:function cOQ(d){this.a=d},
cOK:function cOK(d,e){this.a=d
this.b=e},
cOO:function cOO(){},
cOP:function cOP(d,e){this.a=d
this.b=e},
cOL:function cOL(d){this.a=d},
cOM:function cOM(d){this.a=d},
cOS:function cOS(){},
cOR:function cOR(d){this.a=d},
cOJ:function cOJ(d,e){this.a=d
this.b=e},
cOT:function cOT(d){this.a=d},
cO8:function cO8(d){this.a=d},
cOG:function cOG(d,e){this.a=d
this.b=e},
cO9:function cO9(d,e,f){this.a=d
this.b=e
this.c=f},
aNx:function aNx(){},
aNy:function aNy(){},
aNz:function aNz(){},
aOw:function aOw(){},
c5k(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c5l(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hZv(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b05(d,e){return C.hZw(d,e)},
hZw(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b05=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3V(d),$async$b05)
case 3:p=g
if(p!=null){try{t=A.V.aP(0,p.c,null)
if(x.f.b(t)){s=C.hv0(B.a1(t,x.N,x.z))
if(s==null){u=new B.H0(D.a9M,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5k(s,e,p.b)){u=new B.H0(D.aNd,null)
w=1
break}r=p.a?D.eqx:D.aNc
u=new B.H0(r,s)
w=1
break}}catch(o){}u=new B.H0(D.a9M,null)
w=1
break}s=C.hv1(d)
if(s==null){u=new B.H0(D.a9M,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5k(s,e,null)){u=new B.H0(D.aNd,null)
w=1
break}u=new B.H0(D.aNc,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b05,v)},
hv1(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d7(w,"\ufeff"))w=J.n3(w,1)
v=!1
if(J.d7(w,"NGMYSNAP1|")){v=!0
w=A.cd.cF(0,A.cE.aK(J.n3(w,10)))}u=A.V.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hZu(t):C.hv0(t)
return s}catch(r){return null}},
hZu(d){var w,v,u,t,s,r,q,p,o,n=new C.c5h(),m=new C.c5g(),l=d.h(0,"qi")
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
return new B.a7E("","",v,u,t,s,r,q,n,m,o,p,A.iM,new B.V(Date.now(),0,!1),-1)},
hv0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c5j()
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
l=B.B(new B.ef(J.b8(m,new C.c5i(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7E(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
heJ(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$heJ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c5f(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hw(B.L4(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heJ,v)},
XM:function XM(d,e){this.a=d
this.b=e},
c5h:function c5h(){},
c5g:function c5g(){},
c5j:function c5j(){},
c5i:function c5i(d){this.a=d},
imm(d){return B.ce(null,A.b7,!0,null,new C.fGr(),d,null,!0,!0,x.N)},
imz(d,e,f,g){return B.ce(null,A.b7,!0,null,new C.fHE(g,f,e),d,null,!0,!0,x.y)},
apK:function apK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFa:function aFa(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJe:function dJe(d){this.a=d},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ2:function dJ2(d){this.a=d},
dJc:function dJc(d){this.a=d},
dJb:function dJb(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ0:function dJ0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ3:function dJ3(d){this.a=d},
dJa:function dJa(){},
dJ8:function dJ8(d){this.a=d},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJ5:function dJ5(){},
dJ6:function dJ6(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJf:function dJf(d){this.a=d},
a2g:function a2g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvZ:function bvZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0T:function a0T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmI:function bmI(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dJj:function dJj(d){this.a=d},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJi:function dJi(d){this.a=d},
a0U:function a0U(d){this.a=d},
bmJ:function bmJ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dJk:function dJk(d,e){this.a=d
this.b=e},
fGr:function fGr(){},
fHE:function fHE(d,e,f){this.a=d
this.b=e
this.c=f},
agg:function agg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fbt:function fbt(d){this.a=d},
fbu:function fbu(d){this.a=d},
Rq:function Rq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0_:function a0_(d){this.a=d},
aCl:function aCl(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhR:function dhR(d){this.a=d},
dhO:function dhO(){},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
VR(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O9(s),$async$VR)
case 3:t=h
J.c6(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z))
w=4
return B.b(B.aq0(s,t),$async$VR)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VR,v)},
hZO(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("X<1>")
v=B.B(new B.X(d,new C.c63(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fD(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a2(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.v(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c63:function c63(){},
is0(d){return A.d.dz(A.Eg,new C.fRS(d),new C.fRT()).r},
fRS:function fRS(d){this.a=d},
fRT:function fRT(){},
aqg:function aqg(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmQ:function bmQ(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dPH:function dPH(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPy:function dPy(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d){this.a=d},
dPA:function dPA(d,e,f){this.a=d
this.b=e
this.c=f},
dPE:function dPE(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
hwG(d){var w=B.cef(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
hwI(d){return B.ce(null,A.v.j(0.82),!0,null,new C.cek(),d,null,!0,!0,x.H)},
a8j:function a8j(d){this.a=d},
cek:function cek(){},
cej:function cej(d){this.a=d},
hKO(){var w=new B.V(Date.now(),0,!1),v=w.bN(B.du(4-B.lF(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.i.be(A.o.ap(v.bz(B.c0(B.bD(u),B.bL(u),B.bW(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fww(d,e){var w,v,u,t,s,r,q=B.Hc(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.az(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
igO(d,e){var w,v,u,t,s,r,q,p=B.Hc(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a2(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.i.M(w)
return w==null?0:w}}return 0},
iBF(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.Hc(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a2(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ine(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.Hc(b5),b2=B.cfB(),b3=C.hKO()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a2(s)
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
if(r)u=s}if(u!=null){w=J.a2(u)
v=B.aI(w.h(u,a4))
v=v==null?a1:A.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aI(w.h(u,"outcome"))
w=w==null?a1:A.i.M(w)
return w==null?1:w}n=new C.fIt()
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
if(l!=null)return l}k=C.fww(b4,b5)
w=J.a2(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.S(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cd(w,B.a5(w).k("cd<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a2(h)
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
return B.c8(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aI(d.h(0,a8))
a0=g==null?a1:A.i.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.c8(h,a1)}}}return a1},
hH3(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hkW(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
inf(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.Hc(a3),a1=new C.fIu()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a2(s)
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
w=J.a2(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fIv(v+r+q>1,l)
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
return C.hkW(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ind(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.i.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hKO():B.cfB()
t=v+"|"+u
s=C.fww(d,e)
h=J.a2(s)
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
ivQ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bmu()
w=C.inf(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahO(d,a0,w)
return w}v=C.ine(d,a0)
if(v!=null){if(v===3)++d.f
C.ahO(d,a0,v)
return v}u=C.ind(d,a0,a1)
if(u!=null)return new C.fZb(d,a1,a0).$1(u)
t=C.fww(d,a0)
s=J.a2(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.i.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.i.M(s)
if(p==null)p=0
o=new C.fZd(d,a1)
if(C.igO(d,a0)>0){n=o.$0()
C.iBF(d,a0)
C.ahO(d,a0,n)
return n}if(q>=d.c){n=new C.fZc(d,a1).$0()
C.ahO(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahO(d,a0,n)
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
C.ahO(d,a0,e)
return e},
cft(d){var w=0,v=B.j(x.y),u
var $async$cft=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cfs(d),$async$cft)
case 3:if(f){u=!0
w=1
break}u=B.cfs(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cft,v)},
ahO(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fww(d,e),s=J.a2(t),r=B.aI(s.h(t,v)),q=r==null?null:A.i.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fIt:function fIt(){},
fIu:function fIu(){},
fIv:function fIv(d,e){this.a=d
this.b=e},
fZb:function fZb(d,e,f){this.a=d
this.b=e
this.c=f},
fZd:function fZd(d,e){this.a=d
this.b=e},
fZc:function fZc(d,e){this.a=d
this.b=e},
apJ:function apJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmG:function bmG(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dIQ:function dIQ(d){this.a=d},
dIP:function dIP(d){this.a=d},
dIR:function dIR(d){this.a=d},
dIO:function dIO(d,e){this.a=d
this.b=e},
aO4:function aO4(){},
OA:function OA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgL:function cgL(){},
cgK:function cgK(){},
as3:function as3(d,e,f){this.c=d
this.d=e
this.a=f},
hfJ(d,e,f){return B.ce(null,A.v.j(0.88),!0,null,new C.chc(f,e),d,null,!0,!0,x.H)},
i2B(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.c8(r[0],null)
v=r[1]
u=B.c8(v,null)
t=B.c8(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iK[u-1]:v)+" "+B.v(t)+", "+B.v(w)}return s},
OI:function OI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
chc:function chc(d,e){this.a=d
this.b=e},
bnq:function bnq(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
e8u:function e8u(d,e){this.a=d
this.b=e},
e8q:function e8q(){},
e8r:function e8r(){},
e8s:function e8s(d,e){this.a=d
this.b=e},
e8t:function e8t(d,e){this.a=d
this.b=e},
aOG:function aOG(){},
hKK(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bm1(new C.fUf(w))
w=w.a
return w==null?null:w.c.a},
hKC(d){$.aU.x1$.push(new C.fU2(d))},
hKX(d){var w=$.tt().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hKK(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.e2()},
hKW(d){C.hHb(d,0)},
hHb(d,e){var w,v
if(e>4)return
w=d==null?$.tt().gbl():d
if(w==null||w.c==null)return
v=C.hKK(w)
if(v==="GameCenterScreen")return
if(D.fq6.q(0,v)&&w.q8()){w.e2()
$.aU.x1$.push(new C.fEJ(w,e))}},
aSI(d,e,f){return B.ed(B.cf(new C.fVC(e,d,f)),e,!0)},
fUf:function fUf(d){this.a=d},
fU2:function fU2(d){this.a=d},
fU1:function fU1(d){this.a=d},
fEJ:function fEJ(d,e){this.a=d
this.b=e},
fVC:function fVC(d,e,f){this.a=d
this.b=e
this.c=f},
as7(d,e){var w=0,v=B.j(x.H),u
var $async$as7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WW(e)
w=2
return B.b(B.as6(d,u),$async$as7)
case 2:B.a8W(d,u)
return B.h(null,v)}})
return B.i($async$as7,v)},
vi(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vi=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z6(g)
if(o.length===0){w=1
break}t=e==null?B.Mf(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OJ(o),$async$vi)
case 3:q=m
if(j!=null&&j.length!==0&&J.rs(q,new C.chq(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.n1(q,0,new B.jw(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.as7(o,q),$async$vi)
case 4:if(i==null||r==null||s)C.a8Y(o).bE(new C.chr(),x.S).eG(new C.chs())
case 1:return B.h(u,v)}})
return B.i($async$vi,v)},
a8Y(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hLZ
m=B.z6(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OJ(m),$async$a8Y)
case 3:t=f
s=J.cH(t)
if(!s.aS(t,new C.chp())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8Y)
case 4:r=f
q=J.a2(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(A.V.av(s.h(t,o).ak(),null)!==A.V.av(q.h(r,o).ak(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.as7(m,r),$async$a8Y)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8Y,v)},
b2y(d){var w=0,v=B.j(x.S),u,t
var $async$b2y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hfM(d,!1),$async$b2y)
case 3:t=J
w=4
return B.b(C.as8(d,!1),$async$b2y)
case 4:u=t.dJ(f,new C.cho(new B.V(Date.now(),0,!1).bN(-864e8))).gJ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2y,v)},
as8(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$as8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z6(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OJ(r),$async$as8)
case 3:t=g
s=B.WW(t)
if(s.length!==J.ad(t))C.as7(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as8,v)},
itz(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bz(d).a,r=A.o.ap(s,6e7)
if(r<1)return"Just now"
w=A.o.ap(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ap(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.d4(d),12)===0?12:A.o.F(B.d4(d),12)
s=A.iK[B.bL(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fF(d)),2,"0")
u=B.d4(d)<12?"AM":"PM"
return s+" "+B.bW(d)+r+" \xb7 "+v+":"+w+" "+u},
bE6(d){var w=A.i.aa(Math.abs(d),2).split(".")
return"$"+B.nT(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fBs(),null)+"."+w[1]},
bHS(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.as8(e,!1),$async$bHS)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hfM(e,!0).bE(new C.h7o(e),t).bE(new C.h7p(),t).eG(new C.h7q())
w=4
return B.b(B.bU(A.L,null,new C.h7r(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHS,v)},
hiO(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bC,new B.dl(A.dF,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.hK,w,w,w),1)},
e8v(d,e,f){var w=null,v=A.v.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dl(A.dx,A.a5,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.B,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.Pi,w,w,w),1)},
chq:function chq(d){this.a=d},
chr:function chr(){},
chs:function chs(){},
chp:function chp(){},
cho:function cho(d){this.a=d},
fBs:function fBs(){},
h7o:function h7o(d){this.a=d},
h7p:function h7p(){},
h7q:function h7q(){},
h7r:function h7r(d,e){this.a=d
this.b=e},
h7n:function h7n(d,e){this.a=d
this.b=e},
h7m:function h7m(d){this.a=d},
af7:function af7(d,e){this.c=d
this.a=e},
e8x:function e8x(){},
e8y:function e8y(){},
e8z:function e8z(){},
e8A:function e8A(d){this.a=d},
e8C:function e8C(){},
e8B:function e8B(d){this.a=d},
af6:function af6(d,e){this.c=d
this.a=e},
e8w:function e8w(){},
bHT(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hW(A.b7,!1,w,d,new C.h7u(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h7u:function h7u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7s:function h7s(d,e){this.a=d
this.b=e},
h7t:function h7t(d,e){this.a=d
this.b=e},
aD5:function aD5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biV:function biV(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bu$=e
_.a9$=f
_.c=_.a=null},
dp0:function dp0(d,e){this.a=d
this.b=e},
dp_:function dp_(){},
afv:function afv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNA:function aNA(){},
asT(d,e,f){return new C.b3o(f,d,e,null)},
i3g(d){var w=B.a(A.i.aa(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nT(w[0],v,new C.cja(),null)
return A.d.aM(w,".")},
b2B(){var w=$.tX
if((w>0?$.tX=w-1:w)<=0)$.tX=0},
aiV(d,e){var w=0,v=B.j(x.H),u
var $async$aiV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hnV
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiV)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiV,v)},
b3o:function b3o(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cjb:function cjb(d){this.a=d},
cja:function cja(){},
Oc:function Oc(){},
c6A:function c6A(){},
hne(d){if(d>0)return"+"+d
return""+d},
hmt(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fVD(d,e){var w=J.t(e,d)
if(w==null)w=B.fUp().h(0,d)
return w==null?90:w},
fAm(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.ke(u,new C.fAn(),u.$ti.k("ke<ci.E,p>")))
A.d.dU(v,e)
return v},
hG3(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pP(s,3,s.$ti.k("ci.E")))
A.d.dU(t,e)
return t},
ioF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
b2.cS(42)
for(w=x.s,v=0;v<200;++v){u=A.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aw(12)]
s=[2,3,5,6,7,10,11,13][b2.aw(8)]
r=A.i.M(Math.sqrt(t))
q=2+b2.aw(4)
p=A.o.ap(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.JL("Simplify \u221a("+t*s+"x^"+q+")",m,C.hG3(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.v(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JL("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fAm(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JL("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fAm(g,b2)))}else b1.push(new C.JL("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fAm(k,b2)))}else if(u===3){e=b2.aw(11)-5
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
b1.push(new C.JL("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fAm(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JL("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hG3(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
izJ(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dw(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.dU(t,A.cS)
v=A.d.hh(t)
if(v!==d)return v}return new B.dw(t,x.bJ).hh(0)},
JL:function JL(d,e,f){this.a=d
this.b=e
this.c=f},
fAn:function fAn(){},
arr:function arr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFW:function aFW(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e1_:function e1_(d){this.a=d},
e10:function e10(d){this.a=d},
e11:function e11(d){this.a=d},
e12:function e12(d,e){this.a=d
this.b=e},
e13:function e13(d,e){this.a=d
this.b=e},
e14:function e14(d){this.a=d},
e0Z:function e0Z(d){this.a=d},
e15:function e15(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e18:function e18(d){this.a=d},
e19:function e19(d){this.a=d},
e17:function e17(d,e){this.a=d
this.b=e},
e16:function e16(d,e){this.a=d
this.b=e},
as9:function as9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGb:function aGb(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e8I:function e8I(d,e,f){this.a=d
this.b=e
this.c=f},
e8J:function e8J(d){this.a=d},
e8E:function e8E(d){this.a=d},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8F:function e8F(d,e){this.a=d
this.b=e},
e8H:function e8H(d,e){this.a=d
this.b=e},
e8D:function e8D(d){this.a=d},
i_s(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=B.n8(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n8(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rV(w,u,t,s,r,q==null?null:J.k(q))},
a95(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a95=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a95)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.V.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.cZ(s,x.f)
p=B.cE(p,new C.chZ(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a5(p).k("M.E"))
A.d.b_(p,new C.ci_())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[calendar-memory] load: "+B.v(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a95,v)},
asp(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$asp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a95(d),$async$asp)
case 2:r=g
q=J.cH(r)
q.bq(r,new C.chW(e))
q.I(r,e)
q.b_(r,new C.chX())
w=3
return B.b(B.az(),$async$asp)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<aj.E,aa<p,@>>")
q=B.B(new B.N(q,new C.chY(),s),s.k("aj.E"))
w=4
return B.b(u.aF("String","ngmy_helper_calendar_v1_"+t,A.V.av(q,null)),$async$asp)
case 4:return B.h(null,v)}})
return B.i($async$asp,v)},
i2O(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dJ(d,new C.ci0(v,v.bN(B.du(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
hxi(d){var w,v,u,t,s,r,q,p,o,n,m=C.i2O(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cS(m,0,B.dy(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.d4(s),12)===0?12:A.o.F(B.d4(s),12)
q=B.d4(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fF(s)),2,"0")
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
chZ:function chZ(){},
ci_:function ci_(){},
chW:function chW(d){this.a=d},
chX:function chX(){},
chY:function chY(){},
ci0:function ci0(d,e){this.a=d
this.b=e},
i_t(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n8(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
hvA(d){var w=A.o.F(B.d4(d),12)===0?12:A.o.F(B.d4(d),12),v=B.d4(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bW(d)+" "+w+":"+A.a.b1(A.o.v(B.fF(d)),2,"0")+" "+v},
W4(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$W4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$W4)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.V.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.cZ(s,x.f)
p=B.cE(p,new C.c9I(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a5(p).k("M.E"))
A.d.b_(p,new C.c9J())
u=p
w=1
break}catch(n){r=B.ac(n)
$.am.$1("[call-memory] load: "+B.v(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$W4,v)},
b0T(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0T)
case 2:u=g
t=B.cS(e,0,B.dy(120,"count",x.S),B.T(e).c).dm(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,aa<p,@>>")
r=B.B(new B.N(t,new C.c9G(),r),r.k("aj.E"))
w=3
return B.b(u.aF("String","ngmy_call_memory_v1_"+s,A.V.av(r,null)),$async$b0T)
case 3:return B.h(null,v)}})
return B.i($async$b0T,v)},
b0U(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0U=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.W4(d),$async$b0U)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b9<2>")
q=B.B(new B.b9(p,u),u.k("M.E"))
A.d.b_(q,new C.c9H())
w=5
return B.b(C.b0T(d,q),$async$b0U)
case 5:return B.h(null,v)}})
return B.i($async$b0U,v)},
c9K(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9K=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.W4(d),$async$c9K)
case 3:t=s.dJ(g,new C.c9L(e.bN(-72e8),e.bN(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9K,v)},
hvB(d,e){var w,v,u,t,s,r=J.a2(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWQ()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.az(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
ivA(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bL(p),B.bW(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bN(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bN(r)
w=B.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cG(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.c8(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.c8(v==null?"":v,null)
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
hMu(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rW:function rW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9I:function c9I(){},
c9J:function c9J(){},
c9G:function c9G(){},
c9H:function c9H(){},
c9L:function c9L(d,e){this.a=d
this.b=e},
hxl(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.m0(t,w,v,u==null?null:J.k(u))},
i2U(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b8(v,new C.ci8(),x.bP)
v=B.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.dtz
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iG(r,w,v,u,t,typeof d.h(0,s)=="number"?A.i.M(B.dH(d.h(0,s))):0)},
i2T(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ih1(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.i.M(B.dH(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.i.M(B.dH(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b8(s,new C.ci6(),x.u)
s=B.B(s,s.$ti.k("aj.E"))}return new C.iv(p,w,v,u,s==null?D.aDW:s,t)},
ih2(d){var w,v,u,t=B.J([F.xm,"investments",A.o5,"games",A.jA,"loans",A.hO,"withdrawals",A.jY,"deposits",A.lb,"civic",A.km,"store",A.rg,"jobs",A.o4,"refunds",A.f3,"account",A.lA,"music",A.zW,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a5(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ih1(d){switch(d){case"investments":return F.xm
case"games":return A.o5
case"loans":return A.jA
case"withdrawals":return A.hO
case"deposits":return A.jY
case"civic":return A.lb
case"store":return A.km
case"jobs":return A.rg
case"refunds":return A.o4
case"account":return A.f3
case"music":return A.lA
default:return A.zW}},
nn(d){var w=B.a([new C.m0("text",d,null,null)],x.a)
return w},
aiR(){var w=null,v=x.v
return B.a([new C.iv("investments","Investments",F.xm,4280468830,B.a([new C.iG("inv1","How do I buy an investment plan?",C.nn("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iG("inv2","When do I get paid from my plan?",C.nn("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iG("inv3","Can I have more than one plan?",C.nn("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iv("games","Games",A.o5,4287323382,B.a([new C.iG("gam1","How do NGMY games work?",C.nn("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iG("gam2","Why did my game payout change?",C.nn("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iv("loans","Loans",A.jA,4294538006,B.a([new C.iG("loan1","How do I apply for a loan?",C.nn("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iG("loan2","What is the repayment period?",C.nn("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iv("withdrawals","Withdrawals",A.hO,4282090230,B.a([new C.iG("wd1","How do I withdraw money?",C.nn("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iG("wd2","Why is my withdrawal pending?",C.nn("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iv("deposits","Deposits",A.jY,4279548070,B.a([new C.iG("dep1","How do I deposit funds?",C.nn("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iG("dep2","How long until my deposit posts?",C.nn("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iv("civic","Civic Registry",A.lb,4289170426,B.a([new C.iG("civ1","What is Civic Registry?",C.nn("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iG("civ2","What does \u201cmissed\u201d mean on my profile?",C.nn("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iv("store","NGMY Store",A.km,4293675161,B.a([new C.iG("sto1","How do I buy from NGMY Store?",C.nn("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iG("sto2","How do I sell in the store?",C.nn("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iv("jobs","Jobs & Creator",A.rg,4293548044,B.a([new C.iG("job1","How do I find jobs?",C.nn("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iG("job2","How do I post a job?",C.nn("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iv("refunds","Refunds",A.o4,4293870660,B.a([new C.iG("ref1","Can I get a refund?",C.nn("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iG("ref2","How long do refunds take?",C.nn("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iv("account","Account",A.f3,4281908728,B.a([new C.iG("acc1","How do I update my profile?",C.nn("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iG("acc2","I forgot my password \u2014 what now?",C.nn("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iv("music","Music Charts",A.lA,4290807036,B.a([new C.iG("mus1","What are Music Charts?",C.nn("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iG("mus2","How do I upload music?",C.nn("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iv("help","Help Center",A.zW,4279080072,B.a([new C.iG("hlp1","Where can I get live help?",C.nn("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iG("hlp2","How do daily Helper limits work?",C.nn("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hxm(d){var w,v=J.a2(d),u=v.gau(d)
if(u)return C.aiR()
v=v.dO(d,new C.cib(),x.i)
w=B.B(v,v.$ti.k("aj.E"))
A.d.b_(w,new C.cic())
return w.length===0?C.aiR():w},
hxn(d){var w=J.b8(d,new C.cid(),x.P)
w=B.B(w,w.$ti.k("aj.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z)},
asr(d){return C.i2V(d)},
i2V(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$asr=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$asr)
case 6:s=f
w=7
return B.b(s.aF("String","ngmy_helper_kb_v1",A.V.av(C.hxn(d),null)),$async$asr)
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
return B.i($async$asr,v)},
cia(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cia=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cia)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiR()
u=l
w=1
break}p=A.V.aP(0,q,null)
if(!x.f.b(p)){l=C.aiR()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiR()
u=l
w=1
break}n=C.hxm(o)
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
l=C.aiR()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cia,v)},
b2X(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2X=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.cc(),$async$b2X)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f6("ngmy_helper_kb",null,!1,A.bN),$async$b2X)
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
return B.i($async$b2X,v)},
b2Y(d){return C.i2W(d)},
i2W(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2Y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.cc(),$async$b2Y)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hV("ngmy_helper_kb",d,!1,!1,A.cU,null),$async$b2Y)
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
return B.i($async$b2Y,v)},
ass(){var w=0,v=B.j(x.I),u,t,s,r
var $async$ass=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.cia(),$async$ass)
case 3:s=e
w=4
return B.b(C.b2X(),$async$ass)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hxm(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.asr(t),$async$ass)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ass,v)},
cie(d){var w=0,v=B.j(x.y),u
var $async$cie=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asr(d),$async$cie)
case 3:u=C.b2Y(C.hxn(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cie,v)},
m0:function m0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iG:function iG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ci9:function ci9(){},
ci8:function ci8(){},
iv:function iv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ci7:function ci7(){},
ci6:function ci6(){},
cib:function cib(){},
cic:function cic(){},
cid:function cid(){},
bck:function bck(d){this.a=d},
X3:function X3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGn:function aGn(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ecO:function ecO(){},
ecP:function ecP(){},
ecI:function ecI(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecs:function ecs(d){this.a=d},
ect:function ect(d,e,f){this.a=d
this.b=e
this.c=f},
ecq:function ecq(d){this.a=d},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecH:function ecH(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecA:function ecA(d,e,f){this.a=d
this.b=e
this.c=f},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e,f){this.a=d
this.b=e
this.c=f},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e,f){this.a=d
this.b=e
this.c=f},
ecv:function ecv(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecx:function ecx(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecL:function ecL(){},
ecK:function ecK(d,e){this.a=d
this.b=e},
QO:function QO(d,e){this.c=d
this.a=e},
bei:function bei(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cXS:function cXS(d){this.a=d},
cXR:function cXR(d,e){this.a=d
this.b=e},
cXP:function cXP(d,e){this.a=d
this.b=e},
cXT:function cXT(d){this.a=d},
cXQ:function cXQ(d,e){this.a=d
this.b=e},
cXO:function cXO(d,e){this.a=d
this.b=e},
cXU:function cXU(d){this.a=d},
cXV:function cXV(d,e){this.a=d
this.b=e},
a1G:function a1G(d,e,f){this.c=d
this.d=e
this.a=f},
aIr:function aIr(){this.d=$
this.c=this.a=null},
f6n:function f6n(d,e){this.a=d
this.b=e},
f6o:function f6o(d){this.a=d},
f6u:function f6u(){},
f6t:function f6t(d,e){this.a=d
this.b=e},
f6s:function f6s(d,e){this.a=d
this.b=e},
f6p:function f6p(d,e){this.a=d
this.b=e},
f6r:function f6r(d,e,f){this.a=d
this.b=e
this.c=f},
f6q:function f6q(d,e,f){this.a=d
this.b=e
this.c=f},
a1F:function a1F(d,e){this.c=d
this.a=e},
aIq:function aIq(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f6j:function f6j(d,e){this.a=d
this.b=e},
f6h:function f6h(d){this.a=d},
f6i:function f6i(d,e){this.a=d
this.b=e},
f6l:function f6l(d,e){this.a=d
this.b=e},
f6m:function f6m(d){this.a=d},
f6k:function f6k(d,e){this.a=d
this.b=e},
i2R(d){var w=new B.N(d,new C.ci3(),B.T(d).k("N<1,p>")).aM(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
ci4(d,e,f){return C.i2S(d,e,f)},
i2S(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ci4=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Lj([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.ro(B.nq(b3),C.i2R(b6)+"\n\nAdmin instruction:\n"+b4,A.id,null,null),$async$ci4)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Lj([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d7(s,"```"))s=A.a.el(J.hqW(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.V.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Lj([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Lj([a3,"AI did not return any categories.",p,o])
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
J.c6(a0,C.hxl(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c6(a0,new C.m0("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.v(f)
b1=J.t(e,"question")
J.c6(g,new C.iG("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i2Q(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.i.M(B.dH(J.t(j,"colorValue"))):4284773515
J.c6(m,new C.iv(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Lj([m,null,p,a3])
w=1
break}catch(b7){a2=B.ac(b7)
a3=B.v(a2)
a4=B.a([],x.Y)
u=new B.Lj([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$ci4,v)},
i2Q(d){switch(d){case"investments":return F.xm
case"games":return A.o5
case"loans":return A.jA
case"withdrawals":return A.hO
case"deposits":return A.jY
case"civic":return A.lb
case"store":return A.km
case"jobs":return A.rg
case"refunds":return A.o4
case"account":return A.f3
case"music":return A.lA
default:return A.zW}},
itY(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fWb(f))
if(w>=0){t[w]=J.fn(e).cRI(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bgx(u)
return t},
ci3:function ci3(){},
fWb:function fWb(d){this.a=d},
deM:function deM(d){this.a=d},
X4:function X4(d,e,f){this.c=d
this.d=e
this.a=f},
aGp:function aGp(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
edo:function edo(){},
ed4:function ed4(d,e){this.a=d
this.b=e},
ed9:function ed9(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed8:function ed8(d,e,f){this.a=d
this.b=e
this.c=f},
ed0:function ed0(){},
ed1:function ed1(){},
ed2:function ed2(){},
ed3:function ed3(){},
ede:function ede(d,e){this.a=d
this.b=e},
edf:function edf(d){this.a=d},
edg:function edg(d){this.a=d},
edh:function edh(d){this.a=d},
edi:function edi(d){this.a=d},
edj:function edj(d){this.a=d},
edk:function edk(){},
edl:function edl(d){this.a=d},
edd:function edd(d){this.a=d},
edm:function edm(d){this.a=d},
edc:function edc(d){this.a=d},
edn:function edn(d,e){this.a=d
this.b=e},
edb:function edb(d,e){this.a=d
this.b=e},
eda:function eda(d,e){this.a=d
this.b=e},
iaT(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.GE(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.az(d,t,q)
o=u?A.cB:A.aM
m.push(new B.et(p,n,n,A.cO,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cB:A.aM
m.push(new B.et(p,n,n,A.cO,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.F,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cB:A.aM
m.push(new B.et(p,n,n,A.cO,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cL,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cB:A.aM
m.push(new B.et(p,n,n,A.cO,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.nq,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aY(d,t)
m.push(B.cT(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cB:A.aM,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u9(A.cw,n,n,n,A.f_,n,n,!0,n,B.cT(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dv,A.bX)},
dtj:function dtj(d){this.a=d},
aE_:function aE_(d,e){this.a=d
this.b=e},
asq:function asq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGo:function aGo(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecR:function ecR(d){this.a=d},
ed_:function ed_(){},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecV:function ecV(){},
ecX:function ecX(){},
ecW:function ecW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecU:function ecU(d,e){this.a=d
this.b=e},
aDY:function aDY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adC:function adC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2W:function b2W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ci5:function ci5(d){this.a=d},
ads:function ads(d,e,f){this.c=d
this.d=e
this.a=f},
cR9:function cR9(d){this.a=d},
cRa:function cRa(){},
cRb:function cRb(d){this.a=d},
aDZ:function aDZ(d,e,f){this.c=d
this.d=e
this.a=f},
bkt:function bkt(){this.c=this.a=this.d=null},
dtk:function dtk(d,e){this.a=d
this.b=e},
dtm:function dtm(d,e){this.a=d
this.b=e},
dtl:function dtl(d){this.a=d},
i4o(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i4p(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i4n(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hFZ(d){var w
if(new B.X(B.a(d.split("\n"),x.s),new C.fA3(),x.cc).gJ(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
ivd(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i4n(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
atg:function atg(d,e){this.a=d
this.b=e},
JQ:function JQ(d,e){this.a=d
this.b=e},
t0:function t0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA3:function fA3(){},
ast:function ast(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGq:function aGq(d,e,f,g,h,i,j){var _=this
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
edC:function edC(d,e){this.a=d
this.b=e},
edt:function edt(d){this.a=d},
edv:function edv(){},
edw:function edw(d,e){this.a=d
this.b=e},
edx:function edx(d){this.a=d},
edy:function edy(){},
edz:function edz(d,e){this.a=d
this.b=e},
edA:function edA(d){this.a=d},
edB:function edB(d){this.a=d},
edu:function edu(d,e){this.a=d
this.b=e},
edJ:function edJ(d,e){this.a=d
this.b=e},
edG:function edG(){},
edH:function edH(d,e){this.a=d
this.b=e},
edI:function edI(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edE:function edE(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
edK:function edK(d){this.a=d},
eds:function eds(d,e){this.a=d
this.b=e},
edr:function edr(d,e){this.a=d
this.b=e},
edM:function edM(d,e){this.a=d
this.b=e},
edD:function edD(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
edq:function edq(d){this.a=d},
aOO:function aOO(){},
cig(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$cig=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.UH
w=1
break}w=3
return B.b(B.az(),$async$cig)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.UH
w=1
break}try{q=B.a1(x.f.a(A.V.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.X5(p,o,n,q)
w=1
break}catch(l){s=B.ac(l)
$.am.$1("[helper-perms] load: "+B.v(s))
u=D.UH
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$cig,v)},
asu(d,e){var w=0,v=B.j(x.H),u
var $async$asu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$asu)
case 4:w=3
return B.b(g.aF("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.V.av(e.ak(),null)),$async$asu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$asu,v)},
cif(d){var w=0,v=B.j(x.gp),u,t
var $async$cif=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.X5(!0,!0,!0,!0)
w=3
return B.b(C.asu(d,t),$async$cif)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cif,v)},
hMv(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hMt(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
X5:function X5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHX(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHX=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2R(h),$async$bHX)
case 3:if(j){w=1
break}w=4
return B.b(C.asm(h),$async$bHX)
case 4:if(d.e==null){w=1
break}t=B.r_(d,!0)
t.toString
s=B.dn()
s.b=B.pI(new C.h8l(g,e,f,s),!1,!1)
t.mf(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHX,v)},
h8l:function h8l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h8k:function h8k(d){this.a=d},
a0o:function a0o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDo:function aDo(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dqF:function dqF(d){this.a=d},
dqG:function dqG(d,e,f){this.a=d
this.b=e
this.c=f},
dqL:function dqL(){},
dqK:function dqK(d){this.a=d},
dqH:function dqH(d){this.a=d},
dqI:function dqI(){},
dqJ:function dqJ(d){this.a=d},
aNF:function aNF(){},
i3S(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i3R(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
at1(d){return C.i3P(d)},
i3P(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$at1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f6("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$at1)
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
return B.i($async$at1,v)},
b3M(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3M=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i3S(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f6("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3M)
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
return B.i($async$b3M,v)},
hxO(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aY(v,14))
return w.length===0?null:w}return null},
i3Q(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.ck4(A.a.i(d.toLowerCase()),w))},
hxP(d,e,f,g,h){var w,v,u=J.a2(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qm(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qm(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qm(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qm(!1,0,"Verification code does not match this deposit.")
if(!C.i3Q(e,d,w))return new C.qm(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hg1(d,e){var w,v,u="amount",t=J.a2(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e3u
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OZ(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OZ(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OZ(!0,!1,!1,!1)},
cka(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cka=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hxO(d)
if(s==null){u=D.UJ
w=1
break}w=3
return B.b(C.at1(s),$async$cka)
case 3:t=g
if(t==null){u=D.UJ
w=1
break}u=C.hg1(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cka,v)},
b3O(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3O=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3M(d),$async$b3O)
case 3:s=g
if(s==null||s.length===0){u=D.UJ
w=1
break}w=4
return B.b(C.at1(s),$async$b3O)
case 4:t=g
if(t==null){u=D.UJ
w=1
break}u=C.hg1(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3O,v)},
ckb(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$ckb=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3M(d),$async$ckb)
case 3:t=j
if(t==null||t.length===0){u=new C.qm(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xo(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckb,v)},
Xo(d,e,f,g,h){return C.i3T(d,e,f,g,h)},
i3T(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xo=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hxO(a4)
if(a0==null){u=new C.qm(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.at1(a0),$async$Xo)
case 3:k=a8
if(k==null){u=new C.qm(!1,0,y.m)
w=1
break}j=C.hg1(k,a5)
if(j.b){u=new C.qm(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qm(!1,0,y.u)
w=1
break}if(j.c){u=new C.qm(!1,0,y.j)
w=1
break}i=C.hxP(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qm(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).ab().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f6("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xo)
case 8:p=a8
if(p==null){u=new C.qm(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qm(!1,0,"This deposit code was already used.")
w=1
break}o=C.hxP(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dG(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hV("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cU,null),$async$Xo)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hV("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cU,null),$async$Xo)
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
return B.i($async$Xo,v)},
OZ:function OZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qm:function qm(d,e,f){this.a=d
this.b=e
this.c=f},
ck4:function ck4(d,e){this.a=d
this.b=e},
cki(d,e){var w
B.hmQ(d,e,!1)
B.rn(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.BA(!0,!1,d.d,w)},
a9s(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bL(d)===e.gcg()&&B.bW(d)===e.gcw()},
i40(d){var w=B.d4(d)*60+B.fF(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hxW(d){if(B.d4(d)>=12)return!1
if(B.lF(d)===6||B.lF(d)===7)return!1
return!0},
ckm(d){var w=d.c?d.bU():d
return w.cV(B.c0(B.bD(w),B.bL(w),B.bW(w),12,0,0,0,0))},
hg5(d,e){var w,v,u,t=d.gDd()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9s(d.fx,e)&&d.fy>0.0001)return A.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.ckm(w))return 0
v=B.c0(e.gck(),e.gcg(),e.gcw(),12,0,0,0,0)
if(!e.cV(v))return t
if(!e.cc(w))return 0
u=A.o.ap(v.bz(w).a,1000)
if(u<=0)return t
return A.i.D(t*(A.o.D(A.o.ap(e.bz(w).a,1000),0,u)/u),0,t)},
hg4(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9s(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.ckh(s))&&C.ckm(t)){r=d.gDd()
v=r>0
if(v){q=new B.dd(s,d.a,r,A.hh,A.fF,"Clock-in daily earnings (local)",null,null,A.cx,p)
C.cki(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9s(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9s(o,p)&&!C.ckm(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
ckh:function ckh(d){this.a=d},
ijc(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iAB(d,e,f,g,h,i){return B.hI(d,new C.at2(f,e,i,g,h,null),!0,null,x.H)},
hCe(d){var w,v,u=d.c?d.bU():d,t=B.d4(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bW(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fF(u)),2,"0")+" "+v},
hKe(d){var w=d.x
if(w===A.dM)return"Processing"
if(w===A.kR)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
irw(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.h3)return"Deposit"
if(w===A.fa)return"Withdrawal"
return v.length!==0?v:w.b},
iiR(d){var w=d.d,v=w===A.h3||w===A.pm||w===A.hh||w===A.kS,u=d.x
if(u===A.dM)return w===A.fa?-d.c:0
if(u!==A.cx)return 0
w=d.c
return v?w:-w},
is4(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b_(q,new C.fRZ())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.iiR(s)
if(r<0)r=0
w.n(0,s.a,new B.bs2(v,r))}return w},
at2:function at2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGN:function aGN(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
es3:function es3(d){this.a=d},
esK:function esK(d){this.a=d},
esL:function esL(d){this.a=d},
esM:function esM(d){this.a=d},
ess:function ess(d,e){this.a=d
this.b=e},
est:function est(){},
esu:function esu(d){this.a=d},
esv:function esv(){},
esw:function esw(d){this.a=d},
esx:function esx(d,e,f){this.a=d
this.b=e
this.c=f},
esy:function esy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esn:function esn(d,e){this.a=d
this.b=e},
es4:function es4(d,e,f){this.a=d
this.b=e
this.c=f},
eso:function eso(){},
esp:function esp(){},
esq:function esq(d){this.a=d},
esr:function esr(){},
es8:function es8(d,e){this.a=d
this.b=e},
es9:function es9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esh:function esh(){},
ese:function ese(d){this.a=d},
esf:function esf(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esi:function esi(d){this.a=d},
esj:function esj(d,e,f){this.a=d
this.b=e
this.c=f},
esk:function esk(d){this.a=d},
esm:function esm(d){this.a=d},
esl:function esl(d){this.a=d},
esa:function esa(d){this.a=d},
esb:function esb(d,e,f){this.a=d
this.b=e
this.c=f},
esC:function esC(){},
esD:function esD(){},
esH:function esH(d){this.a=d},
esA:function esA(d){this.a=d},
esI:function esI(d){this.a=d},
esz:function esz(d){this.a=d},
esJ:function esJ(d){this.a=d},
esE:function esE(d){this.a=d},
esF:function esF(d){this.a=d},
esG:function esG(d){this.a=d},
esB:function esB(d){this.a=d},
es7:function es7(d){this.a=d},
es6:function es6(d){this.a=d},
es5:function es5(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
esc:function esc(d,e){this.a=d
this.b=e},
aEb:function aEb(d,e,f,g,h,i,j,k,l,m){var _=this
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
dvk:function dvk(){},
dvl:function dvl(){},
dvm:function dvm(d,e,f){this.a=d
this.b=e
this.c=f},
dvj:function dvj(d){this.a=d},
dvn:function dvn(d,e){this.a=d
this.b=e},
dvi:function dvi(d){this.a=d},
aEa:function aEa(d,e,f,g,h,i,j,k,l,m){var _=this
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
bld:function bld(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dvd:function dvd(d){this.a=d},
dve:function dve(d){this.a=d},
dvf:function dvf(d){this.a=d},
dvg:function dvg(){},
dvh:function dvh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dvc:function dvc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dvb:function dvb(d){this.a=d},
beM:function beM(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
beL:function beL(d,e,f){this.b=d
this.d=e
this.a=f},
beK:function beK(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aEc:function aEc(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEd:function aEd(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dvE:function dvE(){},
dvF:function dvF(){},
dvG:function dvG(){},
dvq:function dvq(d){this.a=d},
dvp:function dvp(d,e){this.a=d
this.b=e},
dvo:function dvo(d,e){this.a=d
this.b=e},
dvB:function dvB(d,e){this.a=d
this.b=e},
dvD:function dvD(d,e){this.a=d
this.b=e},
dvC:function dvC(d,e){this.a=d
this.b=e},
dvA:function dvA(){},
dvz:function dvz(d){this.a=d},
dvy:function dvy(){},
dvt:function dvt(d){this.a=d},
dvu:function dvu(){},
dvv:function dvv(d){this.a=d},
dvw:function dvw(d){this.a=d},
dvs:function dvs(){},
dvx:function dvx(d){this.a=d},
dvr:function dvr(d){this.a=d},
beb:function beb(d){this.a=d},
fRZ:function fRZ(){},
bzp:function bzp(d,e){this.b=d
this.a=e},
aNV:function aNV(){},
bBo:function bBo(){},
io8(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fJG(v,g))
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
aS9(d){var w,v=J.a2(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.i.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.i.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
izf(d,e){var w=B.T(e).k("X<1>")
w=B.B(new B.X(e,new C.h2m(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aj5(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aS9(u)<=0){t=J.cH(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
iqP(d,e){var w,v,u,t=J.a2(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aS9(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aS9(d)>0},
iqO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a2(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.i.M(h)
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
io7(d,e){var w
C.aj5(e)
w=B.T(e).k("X<1>")
w=B.B(new B.X(e,new C.fJF(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uD(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ikC(d,e,f){var w,v,u,t="fromName",s=J.a2(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hmp(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a2(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ikC(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGL(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGL)
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
return B.i($async$bGL,v)},
bFN(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGL(),$async$bFN)
case 3:u=t.hmp(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFN,v)},
M5(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$M5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hHo.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bz(p)
t=t.a>B.du(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hHo.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.Sc(A.ck,q),$async$M5)
case 5:case 4:s=$.hHn.h(0,q)
if(s==null){u=C.uD(e,q)
w=1
break}r=C.uD(B.bFU(e,B.a([s],x._)),q)
if(r!=null)B.hpa(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$M5,v)},
izu(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a2(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ih8(d,e){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.J(["ttt",B.c1(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.c1(7,0,!1,q)
return B.J(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.iF(8,new C.fxF(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
io6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a2(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ih8(u,f)
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
izs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a2(u)
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
hp9(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a2(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
h0M(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$h0M=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aj5(d)
t=$.hlF
if(t==null)s=$.hlF=B.Sc(A.ck,null).fw(new C.h0N())
else s=t
w=3
return B.b(s,$async$h0M)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.h0O(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFU(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0M,v)},
aj6(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aj6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aj5(d)
t=B.T(d).k("N<1,aa<p,@>>")
t=B.B(new B.N(d,new C.fZo(),t),t.k("aj.E"))
w=3
return B.b(B.Sc(t,null),$async$aj6)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFU(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aj6,v)},
aT6(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aT6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hp9(d,e,f)
t=C.uD(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.Sc(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aT6)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uD(s,e)
if(r!=null)B.hpa(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aT6,v)},
ivY(d,e,f){var w
C.hp9(d,e,f)
w=$.hlt.h(0,e)
if(w!=null)w.a1(0)
$.hlt.n(0,e,B.cx(A.lX,new C.fZp(e,d)))},
hfN(d,e){return new C.b2z(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fJG:function fJG(d,e){this.a=d
this.b=e},
h2m:function h2m(d){this.a=d},
fJF:function fJF(d){this.a=d},
fxF:function fxF(d){this.a=d},
h0N:function h0N(){},
h0O:function h0O(){},
fZo:function fZo(){},
fZp:function fZp(d,e){this.a=d
this.b=e},
b2z:function b2z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
izY(d,e,f){return B.bU(A.L,null,new C.h3y(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h3y:function h3y(d,e){this.a=d
this.b=e},
a1c:function a1c(d,e,f){this.c=d
this.d=e
this.a=f},
aGB:function aGB(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
emH:function emH(d){this.a=d},
emK:function emK(d){this.a=d},
emL:function emL(d){this.a=d},
emJ:function emJ(d){this.a=d},
emM:function emM(d){this.a=d},
emN:function emN(d,e){this.a=d
this.b=e},
emI:function emI(d,e){this.a=d
this.b=e},
iul(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.j4
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.j4
v=Date.now()
u=C.ijV(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kN("calendar",B.J(["title",C.ijU(t,w),"start",u.ag(),"end",u.bN(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ijU(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cG(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hId(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cG(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hId(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hId(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fID(),B.T(w).k("N<1,p>")).aM(0," ")},
ijV(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bL(e),B.bW(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bN(864e8)
else if(!A.a.q(d,"today"))for(w=D.aL7.gdQ(D.aL7),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cW(d,u,0)){t=C.iiQ(o,v.b)
o=t
break}}s=B.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(d)
if(s!=null){w=s.b
v=w[1]
r=B.c8(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.c8(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.c0(B.bD(o),B.bL(o),B.bW(o),r,q,0,0,0)},
iiQ(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.lF(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbr())u=s===t.gbr()&&w.b<t.gcD()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fID:function fID(){},
ium(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.j4
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cG(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.ifX(w,j)
if(q==null||q.length===0)return A.j4
t=B.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kN("call",B.J(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.J(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kN(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kN("call",B.J(["name",q],t,t))],x.Z)}return A.j4},
ifX(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cG(d)
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
if(u)return C.inl(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
inl(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fIC(),B.T(w).k("N<1,p>")).aM(0," ")},
fIC:function fIC(){},
hMC(d){var w=new B.N(d,new C.h14(),B.T(d).k("N<1,aa<p,@>>")).c0(0,new C.h15())
w=B.B(w,w.$ti.k("M.E"))
return w},
h14:function h14(){},
h15:function h15(){},
iup(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.j4
w=A.a.i(d)
if(w.length===0)return A.j4
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.j4
u=B.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cG(w)
if(u==null)return A.j4
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cG(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cG(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.S(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kN("send_email",t)],x.Z)},
itv(d,e){var w
if(e)return d
w=J.dJ(d,new C.fVn())
w=B.B(w,w.$ti.k("M.E"))
return w},
fVn:function fVn(){},
ivV(d){switch(d){case"blackjack_vegas":return D.e7K
case"roulette_euro":return D.e7u
case"slots_jackpot":return D.e7B
case"poker_texas":return D.e7E
case"chess_royale":return D.e7v
case"connect_four_pro":return D.e7w
case"domino_block":return D.e7y
case"plinko_prizes":return D.e7G
case"spin_wheel":return D.e7D
case"baccarat_punto":return D.e7x
case"craps_table":return D.e7F
case"casino_war":return D.e7z
case"bingo_live":return D.e7C
case"solitaire_klondike":return D.e7J
case"backgammon_pro":return D.e7t
case"billiards_snooker":return D.e7H
case"profit_solve":return D.e7I
default:return D.e7A}},
fZf(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ab(0,A.H,A.v.j(0.35),A.eA,6)],x.V)
return B.o(p,B.as(B.W(A.o0,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.ccL,A.m),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bE:A.a_
w=B.m(8)
v=B.K(A.bn,A.r,1)
u=B.a([new B.ab(0,A.H,A.v.j(0.28),A.eA,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bL_,B.c(D.cLJ[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.aY,B.as(B.c(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.aY],x.p),A.B,p,A.e,A.h,0,A.p),A.f,p,p,new B.n(A.hZ,p,v,w,u,p,A.m),p,74,p,p,p,p,p,52)},
ixa(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ab(0,A.H,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,hc>")
r=B.B(new B.N(e,new C.h0v(),r),r.k("aj.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fWL,A.af,B.A(r,A.l,v,A.b9,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cd4,A.m),v,v,v,v,H.ao0,v,v,v),A.aA,B.da(A.aue,v,D.fXo,d,B.bn(A.aQ,v,v,v,A.dz,v,A.a2b,v,v,v,v,v))],w),A.l,v,A.e,A.h,0,A.p)},
pF:function pF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bud:function bud(d,e){this.b=d
this.a=e},
h0v:function h0v(){},
i4A(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.att(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.ax()))},
ioH(d,e,f,g,h){var w=new C.fLr(f,h)
switch(d){case"checkers_deluxe":return C.ieu(h,g,e,w)
case"tic_tac_go":return C.inz(h,g,e,w)
case"blackjack_vegas":return C.idN(h,g,e,new C.fLl(w))
case"roulette_euro":return C.ilO(h,g,e,new C.fLm(w))
case"slots_jackpot":return C.imE(h,g,e,new C.fLn(w))
case"billiards_snooker":return C.ikF(h,g,e,new C.fLo(w))
case"connect_four_pro":return C.ieR(h,g,e,w)
case"profit_solve":return C.ikI(h,g,e,new C.fLp(w))
default:return C.ieq(d,h,g,e,new C.fLq(w))}},
ieu(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),u=B.m(12),t=B.K(D.a_x,A.r,8),s=B.a([new B.ab(0,A.H,A.v.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eK,v,w),B.E(B.as(new B.fJ(1,B.o(w,B.bu(B.m(6),B.iE(!0,w,w,A.y,D.fv_,new C.fuE(d,e,f,g),64,w,A.e4,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.m),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
inz(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eK,B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),w),B.E(B.as(new B.fJ(1,B.cf(new C.fIZ(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
idN(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.y1,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.ftW(),B.T(q).k("N<1,w>")))
else A.d.u(s,B.a([C.fZf(q[0],!1),A.bf,C.fZf(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.h,0,v,v)
r=B.c("Total: "+d.a54(d.ay),v,v,v,v,v,v,D.fRw,v,v,v)
q=d.ay
w=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.ftX(),w),w.k("aj.E"))
q=B.bZ(A.fT,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eK,u,v),D.h2Y,A.ak,s,A.aA,D.haL,r,A.ak,q,A.aY,B.A(B.a([B.E(B.bI(D.fXT,v,d.CW?v:new C.ftY(d,e,f,g),v),1),A.aa,B.E(B.bI(D.hdg,v,new C.ftZ(d,e,f,g),v),1)],t),A.l,v,A.e,A.h,0,v,v)],t),A.l,v,A.e,A.h,0,A.p)},
ilO(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),u=d.cx,t=B.a([new B.ab(0,A.H,A.v.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eK,v,w),B.o(w,B.b4(w,w,w,new C.bud(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jg,B.c("Result: "+B.v(v),w,w,w,w,w,w,D.fEl,w,w,w),w))
t.push(A.af)
t.push(B.bZ(A.fT,B.iF(6,new C.fFS(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
imE(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),u=d.db,t=B.T(u).k("N<1,p>")
u=B.B(new B.N(u,new C.fHP(),t),t.k("aj.E"))
return B.x(B.a([new B.D(A.eK,v,w),C.ixa(new C.fHQ(d,e,f,g),u)],x.p),A.l,w,A.e,A.h,0,A.p)},
ikF(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),u=B.m(20),t=B.K(A.iT,A.r,12),s=x.V,r=B.a([new B.ab(0,A.H,A.v.j(0.45),A.dp,18)],s),q=x.p
return B.x(B.a([new B.D(A.eK,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b9y,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.agm,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eM(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ab(0,A.H,A.v.j(0.3),A.J,4)],s),w,A.m),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eKh,A.m),w,w,w,A.fd,w,w,w,w),1),B.l4(A.bi,w,w,1,0,new C.fEF(d,f),d.dy),B.bI(D.h1Z,w,new C.fEG(d,e,g,f),w)],q),A.l,w,A.e,A.h,0,A.p)},
ieR(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.y1,A.K,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new B.bx(1,A.ba,B.ay(v,B.x(B.iF(6,new C.fv7(d,w),!0,t),A.l,v,A.mD,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fv8(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eK,u,v),B.E(B.as(new B.fJ(1.1666666666666667,B.A(s,A.dJ,v,A.e,A.h,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
ikI(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eK,B.c(d.c,w,w,w,w,w,w,D.y1,A.K,w,w),w),B.c(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iP,w,w,w),B.c(d.fy,w,w,w,w,w,w,I.ad1,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c8k,A.y,!0,w,!0,w,!1,w,A.al,w,w,w,w,w,A.ec,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fER(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,A.dn,!0,A.a7,w,A.ao,w,w,w,w),B.bI(D.h0w,w,new C.fES(d,e,g,f),w)],x.p),A.l,w,A.e,A.h,0,A.p)},
ieq(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.ivV(d)
v=D.aKX.h(0,d)
if(v==null)v=d
m=B.c(m,n,n,n,n,n,n,A.kQ,A.K,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ab(0,A.H,w.c.j(0.35),A.eT,24)],x.V)
p=B.c(w.e,n,n,n,n,n,n,A.LB,n,n,n)
o=B.c(v,n,n,n,n,n,n,A.m9,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.v(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.S,o,A.P,B.c(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.dc,B.W(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a7(A.aX,A.b1,A.x,t,n,n),A.m),n,n,n,A.fd,A.ae,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a6(1/0,n,B.bI(D.hcm,n,new C.fur(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.v:A.c,n,A.cm,n,n,n,n,n)),n)],k),A.l,n,A.e,A.h,0,A.p)},
FG:function FG(d,e){this.a=d
this.b=e},
att:function att(d,e,f,g,h,i,j,k){var _=this
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
clY:function clY(){},
clZ:function clZ(){},
clX:function clX(){},
cm_:function cm_(){},
clW:function clW(){},
cm1:function cm1(){},
cm2:function cm2(){},
clV:function clV(d){this.a=d},
cm0:function cm0(){},
clU:function clU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLr:function fLr(d,e){this.a=d
this.b=e},
fLl:function fLl(d){this.a=d},
fLm:function fLm(d){this.a=d},
fLn:function fLn(d){this.a=d},
fLo:function fLo(d){this.a=d},
fLp:function fLp(d){this.a=d},
fLq:function fLq(d){this.a=d},
fuE:function fuE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuD:function fuD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIZ:function fIZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIY:function fIY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fIX:function fIX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftW:function ftW(){},
ftX:function ftX(){},
ftY:function ftY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftZ:function ftZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFS:function fFS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFR:function fFR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fHP:function fHP(){},
fHQ:function fHQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEF:function fEF(d,e){this.a=d
this.b=e},
fEG:function fEG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fv8:function fv8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fv7:function fv7(d,e){this.a=d
this.b=e},
fER:function fER(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fES:function fES(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fur:function fur(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iry(d){var w,v=B.T(d).k("X<1>")
v=B.pP(new B.X(d,new C.fR1(),v),120,v.k("M.E"))
w=B.cE(v,new C.fR2(),B.a5(v).k("M.E"),x.N).aM(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fR1:function fR1(){},
fR2:function fR2(){},
ajh(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aup:function aup(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aHr:function aHr(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
eW6:function eW6(){},
aPq:function aPq(){},
i2y(){var w=$.JD
if(w<=0)return;--w
$.JD=w
if(w===0){w=$.hx7
if(w!=null)w.$0()}},
chb(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
as2(d){var w=0,v=B.j(x.H),u,t
var $async$as2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hfI.I(0,t)
w=4
return B.b(B.az(),$async$as2)
case 4:w=3
return B.b(f.aF("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$as2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$as2,v)},
as1(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$as1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.chb(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hfI.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$as1)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k8(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as1,v)},
X2(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$X2)
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
return B.i($async$X2,v)},
b2Q(d){return C.i2L(d)},
i2L(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2Q=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2Q)
case 6:s=f
w=7
return B.b(s.aF("String","ngmy_helper_ai_usage_v1",A.V.av(d,null)),$async$b2Q)
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
return B.i($async$b2Q,v)},
b2O(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afO(0,new B.V(Date.now(),0,!1))
w=J.a2(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bh(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afO(typeof v=="number"?A.o.D(A.i.M(v),0,999999):0,t)},
b2P(d,e){if(A.o.ap(e.bz(d.b).a,36e8)>=24)return new B.afO(0,e)
return d},
chP(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$chP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.X2(),$async$chP)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2P(C.b2O(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chP,v)},
chQ(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$chQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.X2(),$async$chQ)
case 3:t=g
s=Date.now()
r=C.b2P(C.b2O(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chQ,v)},
i2M(d){var w,v,u,t=d.a,s=A.o.ap(t,1e6)
if(s<=0)return"0s"
w=A.o.ap(t,36e8)
v=A.o.ap(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2R(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.X2(),$async$b2R)
case 3:t=p.b2P(o.b2O(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2R)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.ab().ag()
u=B.k8(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2R,v)},
asm(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$asm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.X2(),$async$asm)
case 3:t=s.b2P(r.b2O(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$asm)
case 5:w=4
return B.b(f.aF("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.ab().ag(),!0),$async$asm)
case 4:case 1:return B.h(u,v)}})
return B.i($async$asm,v)},
asn(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$asn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.X2(),$async$asn)
case 3:s=g
r=Date.now()
q=C.b2P(C.b2O(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.ab().ag()],x.N,x.K))
w=4
return B.b(C.b2Q(s),$async$asn)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asn,v)},
aiS(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiS=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fi("")
if(!d.d){p=!0
if(!C.hMu(a0))if(!C.hMt(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hMu(a0)?3:4
break
case 3:o=C.ivA(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9K(e,o),$async$aiS)
case 7:n=a2
p=J.a2(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hvA(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gP(p)
l=h
k="- "+m.gWQ()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.N0("text/plain"),$async$aiS)
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
case 13:case 9:w=C.hMt(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a95(e),$async$aiS)
case 17:m=f.hxi(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.W4(e),$async$aiS)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cL(i)){p=h
m=C.hvB(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiS,v)},
i48(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ckr(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ckr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hy0(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f6("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ckr)
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
return B.i($async$ckr,v)},
at5(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$at5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f6("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$at5)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cd.cF(0,A.cE.aK(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIV(m,p,n)
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
return B.i($async$at5,v)},
b3V(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i48(q)?3:4
break
case 3:w=5
return B.b(C.ckr(q),$async$b3V)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.at5(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.at5(A.a.i(A.a.aY(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.at5(A.a.i(A.a.aY(q,15))),$async$b3V)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIV(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3V,v)},
hyg(d){var w=d.bK
if(w>=0)return w
return 1},
aj4(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aj4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aTh(d,e),$async$aj4)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HL(d,null,null,!1,!0,""),$async$aj4)
case 5:w=4
return B.b(t.$1(h),$async$aj4)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aj4,v)},
iuk(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.j4
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(w)
if(!u&&t==null)return A.j4
s=new B.V(Date.now(),0,!1)
r=B.dn()
q=B.dn()
p=C.ijT(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.hGY(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ap(v,e)<=180)q.b="Reminder \u2014 "+A.o.ap(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hGZ(v[2],v[4],v[3])
o=v[3]
m=B.c8(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bL(s),B.bW(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bN(a0)
r.b=B.c0(B.bD(l),B.bL(l),B.bW(l),n,m,0,0,0).bN(-36e8)
if(r.bm().cV(s.bN(e)))r.b=J.c6(r.bm(),A.oM)
v=C.io4(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bL(s),B.bW(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bN(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(w)
if(i!=null){o=i.b
h=C.hGZ(o[1],o[3],o[2])
o=o[2]
g=B.c8(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bL(l),B.bW(l),h,g,0,0,0)
r.b=f.cV(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.hGY(a1,w)}}v=x.N
return B.a([new B.kN("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ijT(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cG(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.c8(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.X(r,"sec"))return new B.bf(1e6*A.o.D(s,5,86400))
if(A.a.X(r,"hour")||A.a.X(r,"hr"))return new B.bf(36e8*A.o.D(s,1,168))
return new B.bf(6e7*A.o.D(s,1,10080))}return null},
io4(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hGZ(d,e,f){var w,v=B.c8(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hGY(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
i4t(d){var w,v,u,t,s=J.a2(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,G,A0
J=c[1]
B=c[0]
A=c[2]
H=c[82]
I=c[54]
R=c[90]
L=c[23]
E=c[81]
S=c[91]
K=c[84]
T=c[86]
M=c[80]
U=c[89]
V=c[87]
N=c[44]
O=c[67]
W=c[88]
P=c[41]
X=c[85]
Y=c[83]
Z=c[58]
F=c[92]
Q=c[76]
A_=c[59]
C=a.updateHolder(c[3],C)
D=c[79]
G=c[22]
A0=c[37]
C.bvs.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Gi.prototype={
S(){return new C.aL0(this.$ti.k("aL0<Gi.T,Gi.S>"))}}
C.aL0.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new B.hA(A.Ho,v,null,null,w.$ti.k("hA<1>"))
u.e=w
u.Xp()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQZ()
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hA(A.Ho,w.b,w.c,w.d,w.$ti)}v.Xp()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.d()
return v.my(d,w)},
t(){this.aQZ()
this.a2()},
Xp(){var w,v=this
v.d=v.a.c.lQ(new C.fi3(v),new C.fi4(v),new C.fi5(v))
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hA(A.a0F,w.b,w.c,w.d,w.$ti)},
aQZ(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.ayh.prototype={
my(d,e){return this.e.$2(d,e)}}
C.ano.prototype={
S(){return C.ibe()},
bv(){return this.r.$0()}}
C.ri.prototype={}
C.aD3.prototype={
aeT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hwG(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hwI(s),$async$aeT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeT,v)},
YS(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at3(t.a.c),$async$YS)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.chb(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.as1(t.a.c),$async$YS)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.l(new C.dn5(t,s))
if(!s)t.aeT()
case 1:return B.h(u,v)}})
return B.i($async$YS,v)},
aet(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aet=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGL(),$async$aet)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dng(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aet,v)},
Z(){var w,v,u=this
u.bzD()
$.tX=$.tX+1
w=u.a
$.bGQ=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,aa<p,@>>")
w=B.B(new B.N(w,new C.dny(),v),v.k("aj.E"))
u.f=w
u.aet()
u.KB()
u.YS()
u.e=B.d5(A.oK,new C.dnz(u))},
KB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$KB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aj5(t.a.d.bd)
w=3
return B.b(C.h0M(t.a.d.bd),$async$KB)
case 3:s=e
if(t.c==null){w=1
break}C.aj5(t.a.d.bd)
if(s!=null)t.l(new C.dno(t,s))
else t.l(new C.dnp(t))
case 1:return B.h(u,v)}})
return B.i($async$KB,v)},
t(){C.b2B()
var w=this.e
if(w!=null)w.a1(0)
this.bzC()},
ajL(d,e,f){return this.cAt(d,e,f)},
cAt(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajL=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.io8(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.aj6(t.a.d.bd),$async$ajL)
case 3:if(t.c==null){w=1
break}t.l(new C.dnr(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajL,v)},
Jj(d,e){return this.clc(d,e)},
c7R(d){return this.Jj(d,null)},
clc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uD(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aS9(s)<=0){t.c.L(x.q).f.U(D.aWh)
w=1
break}}w=5
return B.b(C.as1(t.a.c),$async$Jj)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hfJ(r,C.fVy(q.c),p),$async$Jj)
case 6:w=1
break
case 4:o=new C.dnj(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hI(r,new C.aFV(p,q.d,q.f,q.r,new C.dnk(o),q.w,C.fVy(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hI(q,new C.ann(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dnl(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
c4S(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aj5(i.a.d.bd)
C.aj5(i.f)
w=C.izf(i.a.c.a,i.f)
v=C.io7(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bL
if(!u){t=A.d.gH(w)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=J.a2(t)
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
return B.o(h,B.x(B.a([D.h6k,B.c(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.nt,h,h,h),A.P,B.A(B.a([B.E(B.dV(A.LS,new C.dnb(i,t),h),1),A.aa,B.E(B.bI(D.hfO,h,new C.dnc(i,t),h),1)],n),A.l,h,A.e,A.h,0,h,h)],n),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.m),h,h,h,A.e9,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dz(i.y,new C.dnd(m),new C.dne(i))
k=C.hmp(m,i.a.c.a,i.r)
j=C.aS9(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fZ3,B.c(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.nt,h,h,h),A.at,B.c(C.iqO(m,i.a.c.a),h,h,h,h,h,h,A.LF,h,h,h),A.P,B.bI(D.h5B,h,new C.dnf(i,l,m),h)],x.p),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.m),h,h,h,A.e9,A.bl,h,h,1/0)},
bWx(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fqw.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.ET(w[v])
t=A.i.D(u.d*0.58,0.12,0.3)
l.push(new B.rF(u.a,u.b,A.i.D(u.c*0.92,0,0.9),t).je())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1)
q=x.V
p=B.a([new B.ab(0,A.H,B.a0(89,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.hR,12)],q)
o=x.p
o=B.a([new B.a6(100,n,B.as(B.W(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iZ,B.x(B.a([B.A(B.a([B.E(B.c(d.b,n,n,n,n,n,n,A.jn,n,n,n),1)],o),A.l,n,A.e,A.h,0,n,n),A.at,B.c(d.c,n,2,A.a2,n,n,n,A.qc,n,n,n)],o),A.B,n,A.b9,A.h,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c5N,n,n,n,new C.dn7(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a1r,B.o(n,D.c3J,A.f,n,n,new B.n(B.a0(71,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),n,B.K(B.a0(A.i.T(229.5),s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1.6),n,B.a([new B.ab(0,A.H,B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.ay,A.aC,A.x,l,n,n),A.m),n,92,n,A.e9,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dn8(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nN:A.qI,k=m?A.iR.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iR:A.c,h=m?A.c.j(0.08):A.bn,g=m?A.c:A.a_,f=m?A.bs:A.cj
if(!o.x)return C.aSI(n,l,B.as(B.n5(n,m?A.c:A.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fVy(o.a.c)
return new C.OI(o.a.w,w,!0,o.gaW3(),n)}w=B.aE(d,A.dI,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ab(0,A.H,A.v.j(0.04),A.cP,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.c("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wt(new C.dnv(o,f,g),n,$.aUb(),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.m),n,n,n,n,A.a1G,n,n,1/0),A.S,o.c4S()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbWw(),B.T(v).k("N<1,w>")))
w=B.ca(B.x(s,A.l,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ab(0,A.H,A.v.j(m?0.28:0.08),A.hR,15)],t)
u=B.K(m?A.c.j(0.1):A.bn,A.r,1)
t=B.aH(n,n,n,n,B.W(A.eH,j,n,n,n,18),n,n,n,o.gaW3(),n,n,n,n,n,n)
q=B.E(B.as(B.c("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oW(!0,C.aSI(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.P3,B.o(n,B.A(B.a([t,q,new B.D(A.iZ,B.o(n,B.A(B.a([D.c0M,A.e5,C.asT(new C.dnw(o),A.kQ,o.a.c.a)],r),A.l,n,A.e,A.M,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.m),n,n,n,n,A.hm,n,n,n),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.m),n,60,n,n,A.nb,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dnx(o),x.K)},
aW4(){var w,v
this.a.bv()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j7(w,v)}}
C.aFV.prototype={
S(){return new C.bnc()},
hK(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aKi(){return this.r.$0()}}
C.bnc.prototype={
Z(){this.bAE()
this.d=B.Wt(this.a.d.bh)
$.tX=$.tX+1},
t(){C.b2B()
this.bAD()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.d()
return new C.arr(v,new C.e0U(w),u,new C.e0V(w),new C.e0W(w,d),new C.e0X(w),null)}}
C.ann.prototype={
S(){return new C.aD2(new B.at(A.ax,$.ax()))},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aKi(){return this.z.$0()}}
C.aD2.prototype={
Z(){this.bzB()
this.a.toString
$.tX=$.tX+1},
t(){C.b2B()
var w=this.d
w.V$=$.ax()
w.R$=0
this.bzA()},
a3T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OS()
w=5
return B.b(C.as1(t.a.c),$async$a3T)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hfJ(s,C.fVy(r.c),q),$async$a3T)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uD(s.d.bd,A.a.i(r))
if(p!=null&&C.aS9(p)<=0){t.c.L(x.q).f.U(D.aWh)
w=1
break}}o=B.cG(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.U(D.fy9)
w=1
break}m=B.Mf(t.a.c.a,new C.dn_(t))
if(m+0.001<n){t.c.L(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Not enough balance for this bet \u2014 you have $"+B.dI(m)+", the bet is $"+B.dI(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aKi()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.dd(r,q.c.a,n,A.ky,A.fF,"Game bet: "+q.f,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.fqi.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hI(s,new C.aqg(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hI(s,new C.anp(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3T,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.IN,o,o,o,new C.dn2(d),o,o,o,o,o,o),k=p.a,j=B.c(k.f,o,o,o,o,o,o,A.cH,o,o,o),i=B.m(12),h=x.p
j=B.eS(B.a([B.o(o,B.as(C.asT(new C.dn3(p),A.iP,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.m),o,o,o,D.bF3,A.f2,o,o,o)],h),o,o,!0,!0,D.a0A,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.W(D.bSo,D.byH,o,o,o,28)
w=p.a
v=B.c(w.f,o,o,o,o,o,o,A.m9,o,o,o)
w=B.c(w.r,o,o,o,o,o,o,A.nt,o,o,o)
u=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dn4(p),s),s.k("aj.E"))
s=B.A(s,A.l,o,A.e,A.h,0,o,o)
r=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.o(o,B.x(B.a([D.hhu,A.S,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bB(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ma,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.al,o,o,o,o,o,A.ec,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.dn,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a8z.m()>>>16&255,A.a8z.m()>>>8&255,A.a8z.m()&255),A.r,1)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fYq,B.c("+ $"+A.i.aa(n*0.46,2),o,o,o,o,o,o,D.fNY,o,o,o),B.c("(46% return on $"+A.i.aa(p.e,2)+" bet)",o,o,o,o,o,o,A.qc,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h6C,A.P,q,A.P,B.o(o,B.x(B.a([D.fT6,B.c("$"+A.i.aa(m,2),o,o,o,o,o,o,D.fCx,o,o,o),B.c("8 pairs \xd7 $"+A.i.aa(m,2)+" each",o,o,o,o,o,o,A.qc,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(D.btZ,o,r,u,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
r=B.fx(o,o,A.bi,o,o,o,o,o,o,A.c,o,A.hr,o,o,o,o,o,o,o,o)
return C.aSI(j,D.a0A,B.ca(B.o(o,B.x(B.a([k,A.at,v,A.bC,w,A.S,t,A.P,u,A.S,new B.a6(1/0,o,B.iD(B.c("Start Game ($"+A.i.aa(p.e,2)+")",o,o,o,o,o,o,A.cc,o,o,o),p.gcEu(),r),o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.cc4,A.m),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A.a1J,o,o,A.ah))}}
C.anp.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aD4(A.cS,new B.at(A.ax,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aD4.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rY(d){return this.bUF(d)},
bUF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AT()
r=t.PF()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acR(d),$async$rY)
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
return B.b(t.Fi(q,s,r),$async$rY)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rY,v)},
FV(d,e,f,g){return this.cC9(d,e,f,g)},
cC9(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FV=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHT(s,C.bHz(),C.hoz(),d,e,f,g),$async$FV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FV,v)},
AT(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6x(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.d()
return u+C.ajh(t,s.e.a.a)
case"memory":return s.ghR()&&D.nn.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aBh()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aBh(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
PF(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.d()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hmt()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fVD(w.e,w.d.y2)
if(v!==C.fVD(d.e,d.d.y2)&&u.c!=null)u.l(new C.doS(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzF()
w=i.a
w.toString
$.tX=$.tX+1
i.Q=C.fVD(w.e,w.d.y2)
i.b9p()
i.aec()
if(i.ghR()){i.c7=!0
i.cU="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.Q2()
i.adP()
i.bn=B.d5(A.ha,new C.doV(i))}if(A.d.q(D.Tn,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uD(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a2(u)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2z(!1,w,k.length===0||A.a.q(k,"@")?C.hmp(u,v,null):k,p,l,s)}else{w=w.c
w=C.hfN(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.hfN(w.c,w.a)}v=C.i4A()
v.btj(i.a.e,i.d,w)
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
w.beS(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.US
else j=w.f===!0?D.rp:D.K6
i.AV(j)}}}i.b3=B.d5(A.n9,new C.doW(i))
if(i.ghR())i.bi=B.d5(A.n8,new C.doX(i))}if(i.ghR()&&!A.d.q(D.Tn,i.a.e))i.bi=B.d5(A.n8,new C.doY(i))
i.as=B.d5(A.fB,new C.doZ(i))},
Q2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uD(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFN(p,t.a.c.a),$async$Q2)
case 5:o=e
if(t.c!=null)t.l(new C.do7(t,o))
w=1
break
case 4:w=6
return B.b(C.M5(q,t.a.d.bd,!1),$async$Q2)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFN(n,t.a.c.a),$async$Q2)
case 7:o=e
if(t.c!=null)t.l(new C.do8(t,o))
case 1:return B.h(u,v)}})
return B.i($async$Q2,v)},
akR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M5(r,s.d.bd,!1),$async$akR)
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
t.aQK(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.i.M(j)
else{h=j==null?null:J.k(j)
i=B.c8(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.doB(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cS(i)
A.d.dU(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.l(new C.doC())}case 1:return B.h(u,v)}})
return B.i($async$akR,v)},
adP(){var w=0,v=B.j(x.H),u=this
var $async$adP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a2a(!0),$async$adP)
case 2:return B.h(null,v)}})
return B.i($async$adP,v)},
a2a(d){return this.crg(d)},
crf(){return this.a2a(!1)},
crg(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a2a=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.M5(q,s.d.bd,b3),$async$a2a)
case 3:o=b5
if(o==null)o=C.uD(t.a.d.bd,q)
if(o==null){w=1
break}s=J.a2(o)
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
a2=new B.V(Date.now(),0,!1).ab()
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
if(a6!=null&&a7!=null){a8=(a6.cc(a7)?a6:a7).bN(5e5)
if(!new B.V(Date.now(),0,!1).cV(a8)){a4=b2.a=a8.bN(4e6)
j.n(0,"startAt",a4.ab().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.ivY(t.a.d.bd,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.l(new C.don(b2,t,b0))
w=1
break}if(s==null){t.l(new C.doo(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.cV(s)){s=s.bz(b1).a
r=A.o.ap(s,1e6)
t.l(new C.dop(b2,t,r+(A.o.F(A.o.ap(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.l(new C.doq(b2,t))
b2=t.a.e
if(b2==="pattern")t.aaE()
else if(b2==="memory"){t.b9o()
if(t.c!=null)t.l(new C.dor())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a2a,v)},
aRH(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cS(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRG(){return this.aRH(null)},
aaE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.coG()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.M5(q,s.d.bd,!1),$async$aaE)
case 5:r=t.b5i(e)
case 4:if(t.c==null){w=1
break}t.aRH(r)
t.l(new C.dnA(t))
t.Ew()
case 1:return B.h(u,v)}})
return B.i($async$aaE,v)},
b5i(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.i.M(v)
u=v==null?t:J.k(v)
return B.c8(u==null?"":u,t)},
coG(){var w=this.a,v=w.Q
if(v==null)return null
return this.b5i(C.uD(w.d.bd,v))},
aec(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aec=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$aec)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.er(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.l(new C.do6(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aec,v)},
pD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pD)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bIl().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aF("Int","ngmy_game_"+n+"_"+o,r),$async$pD)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pD,v)},
a4a(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a4a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.b0==null||t.f||t.aZ){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M5(r,s.d.bd,!1),$async$a4a)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uD(r,s)
s=p==null
if(!s){r=J.cH(p)
r.a8(p)
r.u(p,q)}r=J.a2(q)
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
s.beS(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.US
else k=r.f===!0?D.rp:D.K6
w=7
return B.b(t.AV(k),$async$a4a)
case 7:w=5
break
case 6:if(t.c!=null)t.l(new C.doD())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a4a,v)},
aiJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aiJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b0==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b0
o.toString
p=o.cUP(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aT6(n,o,p),$async$aiJ)
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
return B.i($async$aiJ,v)},
AV(d){return this.c10(d)},
c10(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.Ka(s,s),$async$AV)
case 9:w=4
break
case 6:w=10
return B.b(t.Zd(s,s),$async$AV)
case 10:w=4
break
case 7:w=11
return B.b(t.acQ(s,s),$async$AV)
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
a17(d,e){return this.ciW(d,e)},
ciW(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a17=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aiJ(),$async$a17)
case 6:if(d===D.ro){w=1
break}w=4
break
case 5:if(d===D.ro){w=1
break}case 4:w=7
return B.b(t.AV(d),$async$a17)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a17,v)},
ae4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.aT6(t.a.d.bd,q,l),$async$ae4)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
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
C.hp9(t.a.d.bd,q,n)
C.izs(t.a.d.bd,q)
w=3
return B.b(C.aj6(t.a.d.bd),$async$Iz)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$Iz,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.ae4()
else if(!v.f)v.c7S()
C.b2B();++v.RG
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
v.bzE()},
cHO(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.d()
v=v<=0||w.b0==null}if(v)return
if(w.c7)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.uC("Goal completed!")
return}v=++w.rx
if(v%5===0)w.l(new C.doM())},
b9p(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b9o()
break
case"scramble":r.bh=0
r.b9q()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.dDc[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bO(0,A.ci)
break
case"math":r.y2=0
r.b9n()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b9r()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.dU(v,s)
if(!r.ctJ()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.dU(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.RS()
break
case"pattern":if(r.ghR()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aRG()
w=B.v(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Ew()}break
case"color":r.bd=0
r.b9i()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.baE()
break
default:if(A.d.q(D.Tn,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6x(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ctJ(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b9r(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.i.M(Math.pow(p,v))}u=A.i.M(Math.pow(p,o))
r.w=A.o.v(u)
r.aH=A.d.aM(n,", ")
q=r.w
t=x.s
s=B.a([A.o.v(u+p),A.o.v(u-p),A.o.v(u+p*2)],t)
t=B.a([q],t)
A.d.u(t,s)
A.d.dU(t,r.d)
r.x=t},
b9n(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bIl().length-6)u.at=0
w=$.bIl()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b9q(){var w=this,v=w.w=D.dcF[A.o.F(w.at+w.bh,105)]
w.ax=C.izJ(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bO(0,A.ci)},
baE(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cx(B.du(0,0,0,120+w.d.aw(280),0,0),new C.doA(w))},
c13(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rY("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ap(new B.V(v,0,!1).bz(u).a,1000)}if(w<520){t.l(new C.do4(t))
v=t.a0
if(v>=5){t.pD()
t.uC("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.baE()
t.l(new C.do5())}}else t.rY("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cH1(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.doH())
if(u<0)return
t.l(new C.doI(t,u,v,d))},
cH2(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.l(new C.doJ(u,d,v))},
bLs(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dnB())){u.c.L(x.q).f.U(D.fy3)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.d()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.l(new C.dnC(u))
if(u.ghR()&&D.nn.q(0,u.a.e))u.a2p()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nn.q(0,u.a.e))u.nm(!0)
else u.uC("All 5 words unscrambled!")}else{u.b9q()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.l(new C.dnD())}}else u.rY("Wrong word \u2014 paid for "+u.bh+"/5.")},
b9i(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dU,A.dQ,A.iw,A.tR][u]
w.w=t},
aQK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.ie(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cb),n=p===g;q.C();){m=q.gP(q)
l=typeof m=="number"?A.i.M(m):B.c8(J.k(m),null)
if(l==null)continue
t.I(0,l)
if(n)w.I(0,l)}}f.u(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gP(w)
l=typeof m=="number"?A.i.M(m):B.c8(J.k(m),null)
if(l!=null)f.I(0,l)}}h.k2=A.i.be(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aI(J.t(j,g))
i=f==null?null:A.i.M(f)
if(i!=null)h.fx=i}},
b9o(){var w,v,u,t,s,r,q,p=this
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
q=B.c8(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e_()
v.cS(q)
A.d.dU(w,v)}else A.d.dU(w,p.d)
p.aQK(s)}else A.d.dU(p.fr,p.d)},
cqz(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.l(new C.dog(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.l(new C.doh(t,v,u))
if(t.ghR()&&D.nn.q(0,t.a.e))t.a2p()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nn.q(0,t.a.e))t.nm(!0)
else t.aBk()}return}t.k1=!0
B.bM(D.bE0,new C.doi(t),x.c)},
b8M(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.d()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.l(new C.dos(u))
if(u.y1>=5){u.pD()
u.uC("All 5 questions correct!")}else{u.b9r()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.l(new C.dot())}}else u.rY(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.l(new C.dou(u))
if(u.y2>=6){u.pD()
u.uC("All 6 math questions correct!")}else{u.b9n()
u.r="Question "+(u.y2+1)+" of 6"
u.l(new C.dov())}}else{u.Xa(u.y2+1)
u.rY(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.l(new C.dow(u))
if(u.bd>=5){u.pD()
u.uC("All 5 color rounds correct!")}else{u.b9i()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.l(new C.dox())}}else u.rY("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aBk()}else u.c.L(x.q).f.U(D.fyO)},
cH0(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cd(q.k4,0)
v=A.o.ap(d,3)
u=A.o.F(d,3)
t=A.o.ap(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.l(new C.doG(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aBk()}}},
RS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.l(new C.doj(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dok(t,q).$0()
t.c.er()
w=6
return B.b(B.bM(A.l4,null,r),$async$RS)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dol(t).$0()
t.c.er()
w=7
return B.b(B.bM(A.kd,null,r),$async$RS)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.l(new C.dom(t))
case 1:return B.h(u,v)}})
return B.i($async$RS,v)},
cH3(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rY("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.l(new C.doK(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uC("Perfect Simon run!")
return}u.l(new C.doL(u))
u.RS()}},
Ew(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.l(new C.dnE(t))
s=x.H
w=3
return B.b(B.bM(A.jy,null,s),$async$Ew)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dnF(t,o).$0()
t.c.er()
w=7
return B.b(B.bM(A.a1i,null,s),$async$Ew)
case 7:if(t.c==null){w=1
break}new C.dnG(t).$0()
t.c.er()
w=8
return B.b(B.bM(A.iX,null,s),$async$Ew)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.l(new C.dnH(t))
case 1:return B.h(u,v)}})
return B.i($async$Ew,v)},
Xa(d){return this.bFX(d)},
bFX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Xa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$Xa)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bIl().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aF("Int","ngmy_game_"+q+"_"+r,o),$async$Xa)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$Xa,v)},
cGY(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rY("Wrong tile \u2014 paid for "+v.aBh()+"/"+C.hmt()+" moves.")
return}v.l(new C.doE(v,w))
if(v.ghR()&&D.nn.q(0,v.a.e))v.a2p()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nn.q(0,v.a.e))v.nm(!0)
else v.uC("All 7 pattern rounds correct!")}else{v.l(new C.doF(v))
v.Ew()}},
Ka(d,e){return this.coW(d,e)},
uC(d){return this.Ka(null,d)},
aBk(){return this.Ka(null,null)},
coW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ka=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.l(new C.doe(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.dd(q,s.c.a,r,A.hh,A.fF,"Game payout: "+s.f,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj2(p,!0)
t.a.hK(p)
t.a.bv()
o=e==null?"+$"+A.i.aa(r,2)+" added to your balance!":e
s=t.a
C.vi(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FV(d,o,"YOU WIN!",!0),$async$Ka)
case 3:w=4
return B.b(C.aiV(t.a.f,o),$async$Ka)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ka,v)},
FT(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nn.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cBd(),$async$FT)
case 5:w=1
break
case 4:s=t.AT()
r=t.PF()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acR("Time's up \u2014 no progress to pay."),$async$FT)
case 8:w=1
break
case 7:q=A.i.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.uC("Complete! Max payout earned."),$async$FT)
case 12:w=10
break
case 11:w=13
return B.b(t.Fi(q,s,r),$async$FT)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$FT,v)},
RZ(d){return this.ctn(d)},
a2p(){return this.RZ(!1)},
ctn(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RZ=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nn.q(0,r.a.e))||r.a.Q==null){w=1
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
return B.b(C.M5(q,r.a.d.bd,!1),$async$RZ)
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
a6=B.B(a6,B.a5(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aR(x.S)
for(a6=i,a6=new B.dr(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.i.M(f):B.c8(J.k(f),null)
if(e!=null)J.c6(h,e)}}a6=h
a6=B.B(a6,B.a5(a6).k("ci.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aT6(r.a.d.bd,q,m),$async$RZ)
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
return B.i($async$RZ,v)},
nm(d){return this.cBe(d)},
cBd(){return this.nm(!1)},
cBe(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FT(),$async$nm)
case 5:w=1
break
case 4:w=6
return B.b(t.RZ(!0),$async$nm)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.M5(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PF()
w=o==null?8:9
break
case 8:m=A.i.D(t.AT()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acR("Time's up \u2014 no progress to pay."),$async$nm)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.uC("Complete! Max payout earned."),$async$nm)
case 17:w=15
break
case 16:w=18
return B.b(t.Fi(m,t.AT(),n),$async$nm)
case 18:case 15:case 11:w=19
return B.b(t.Iz(),$async$nm)
case 19:w=1
break
case 9:s=J.a2(o)
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
return B.b(t.acR("Time's up \u2014 no progress to pay."),$async$nm)
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
t.l(new C.doy(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.i.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.dd(h,b0,a9,A.hh,A.fF,d,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.i.aa(a9,2)+" (includes opponent bonus $"+A.i.aa(a7,2)+")":"+$"+A.i.aa(a8,2)+" (your progress payout)"
s=t.a
C.vi(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FV(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Iz(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fi(d,e,f){return this.coU(d,e,f)},
coU(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.l(new C.doc(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.dd(s,q.c.a,r,A.hh,A.fF,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj2(p,!0)
t.a.hK(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.i.T(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.d()
m=q+C.ajh(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.dod()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.i.aa(r,2)+" ("+n+"% \u2014 "+B.v(k)+" mistakes/missed)":"+$"+A.i.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vi(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FV(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fi)
case 3:w=4
return B.b(C.aiV(t.a.f,j),$async$Fi)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fi,v)},
c7S(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AT()
v=o.PF()}catch(u){return}if(v<=0||w<=0)return
t=A.i.D(w/v,0,1)
s=B.ov(A.i.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.dd(q,p.c.a,s,A.hh,A.fF,"Game partial: "+p.f+" ("+B.v(w)+"/"+B.v(v)+", left early)",n,n,A.cx,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.vi(s,n,"Left early \xb7 +$"+A.i.aa(s,2)+" ("+B.v(w)+"/"+B.v(v)+")",q,r,p,n,!0)},
acQ(d,e){return this.bWr(d,e)},
bWr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acQ=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.dd(r,q,p,A.hh,A.fF,"Game payout: "+s+" (draw, stake returned)",null,null,A.cx,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.vi(o,null,"Draw. Your $"+A.i.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FV(d,"Nobody won, so your $"+A.i.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acQ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acQ,v)},
Zd(d,e){return this.bWs(d,e)},
acR(d){return this.Zd(null,d)},
bWs(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Zd=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(t.FV(d,e,"YOU LOSE",!1),$async$Zd)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Zd,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.d()
w=A.o.ap(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.atB,n,n,n,new C.doN(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.c(u?t.f+" vs "+B.v(o.bH):t.f,n,2,A.a2,n,n,n,A.fP,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asT(new C.doO(o),A.nr,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.m),n,n,n,n,A.fM,n,n,n)],q),A.l,n,A.e,A.h,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.c("Win $"+A.i.aa(t.x*1.46,2)+" \xb7 stake $"+A.i.aa(o.a.x,2)+" \u2022 Progress "+o.AT()+"/"+o.PF(),n,n,n,n,n,n,D.fI8,n,n,n),1),new C.as3(o.a.c.a,new C.doP(o),n),A.aa,D.bX7,A.d8,B.c(""+w+":"+m,n,n,n,n,n,n,A.ol,n,n,n)],q),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.m),n,n,n,n,A.hl,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.doQ(),m),m.k("aj.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSI(n,D.bhT,B.bm(!0,new B.D(A.HD,B.x(B.a([r,s,A.P,new B.fj(new C.doR(o),n),A.ak,B.E(B.o(n,o.bWq(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.m),n,n,n,n,A.cr,n,n,n),1)],q),A.am,n,A.e,A.h,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255)
w=B.a0(242,A.iV.m()>>>16&255,A.iV.m()>>>8&255,A.iV.m()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.dq(!1,B.o(n,B.x(B.a([D.fu6,A.af,B.c(o.cU,n,n,n,n,n,n,D.fJI,A.K,n,n),A.ak,B.c(o.bT,n,n,n,n,n,n,D.fHP,A.K,n,n)],q),A.l,n,A.e,A.M,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.m),n,n,n,A.r0,A.zr,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8S(){var w=this.k3
return B.cf(new C.dob(this,w,A.i.cE(this.fr.length/w)))},
bWq(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8S()
if(m==="scramble"){m=o.r
m===$&&B.d()
w=x.l
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.qc,n,n,n),B.c("Words "+o.bh+"/5",n,n,n,n,n,n,A.FD,n,n,n),A.af,B.c("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.S,B.bZ(A.fT,B.iF(o.ay.length,new C.dnU(o),!0,w),A.br,n,6,6),A.aO,B.bZ(A.fT,B.iF(o.ch.length,new C.dnV(o),!0,w),A.br,n,8,8),A.aO,new B.a6(1/0,n,B.iD(D.haj,o.gbLr(),B.fx(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cm,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.d()
return new C.aup(m,o.e,new C.dnW(o),new C.dnX(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.d()
m=B.a([B.c(m,n,n,n,n,n,n,A.qc,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.c(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.FD,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.d()
w+=", ?"}else w=o.CW
m.push(new B.dl(A.dF,A.z,A.f,B.c(w,n,n,n,n,n,n,A.m9,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dnY(o),B.T(w).k("N<1,w>")))
return B.x(m,A.l,n,A.e,A.h,0,A.p)}if(m==="puzzle")return B.cf(new C.dnZ(o))
if(m==="simon"){m=o.r
m===$&&B.d()
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.qc,n,n,n),B.c("Progress "+o.p3+"/21",n,n,n,n,n,n,A.FD,n,n,n),A.P,B.E(B.l3(1,B.iF(4,new C.do_(o),!0,x.l),2,10,10,n,A.e4,!1),1)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="pattern")return B.cf(new C.do0(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dU,A.dQ,A.iw,A.tR]
m=o.r
m===$&&B.d()
m=B.c(m,n,n,n,n,n,n,A.qc,n,n,n)
w=B.c("Round "+o.bd+"/5",n,n,n,n,n,n,A.FD,n,n,n)
v=o.aL
v===$&&B.d()
s=o.aR
s===$&&B.d()
s=B.a([m,w,A.af,B.c(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fx(n,n,B.a0(217,m.m()>>>16&255,m.m()>>>8&255,m.m()&255),n,n,n,n,n,n,A.c,n,n,A.f8,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a6(1/0,n,B.iD(B.c(u[q],n,n,n,n,n,n,A.cH,n,n,n),new C.do1(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.h,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bi:A.c9
w=o.r
w===$&&B.d()
w=B.c(w,n,n,n,n,n,n,A.acP,A.K,n,n)
v=B.c("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fEZ,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.c(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aE(s,A.bY,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qu(B.ay(A.c1,B.cU(n,B.x(B.a([w,A.P,v,A.aY,s,A.aY,new B.D(A.Hy,B.c(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.h,0,A.p),p,n,A.b_,n,M.CV,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc12(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.Tn,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.ioH(m,new C.do2(o),new C.do3(o),o.d,w)}m=o.r
m===$&&B.d()
return B.as(B.c(m,n,n,n,n,n,n,A.dn,n,n,n),n,n,n)}}
C.aob.prototype={
S(){return new C.bkf()},
d_G(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bkf.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aE(a3,A.dI,a0).w
a0=B.aE(a3,A.dI,a0).w
v=x.p
u=B.a([B.bV3(!1,e.a.r,"INVESTMENT PLANS",d),A.dc],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bL(s)),2,"0")
q=A.a.aY(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.CD,A.r,2.2)
n=x.V
m=B.a([new B.ab(0,A.H,B.a0(89,A.rX.m()>>>16&255,A.rX.m()>>>8&255,A.rX.m()&255),A.eT,20),new B.ab(0,A.H,B.a0(102,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.dp,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.CD,A.r,3.4)
n=B.a([new B.ab(0,A.H,B.a0(166,A.rX.m()>>>16&255,A.rX.m()>>>8&255,A.rX.m()&255),A.dR,10),new B.ab(0,A.H,B.a0(89,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.cP,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.ay,A.aC,A.x,D.dpn,D.cYr,d),A.m),d,42,d,d,d,d,d,56),A.aY,e.bbA(a3,!0)],v),A.l,d,A.e,A.h,0,d,d)
k=B.Es(t.a,1,A.a2,D.fN7)
j=t.b
i=t.c
h=B.Es("Making $"+B.dI(j*i)+" Daily",1,A.a2,D.fNm)
g=B.Es(e.b6j(j),1,A.a2,D.fFR)
q=B.A(B.a([B.E(B.x(B.a([D.h34,B.Es(a1.c,1,A.a2,D.aYk)],v),A.B,d,A.e,A.h,0,A.p),1),B.x(B.a([D.h2Q,B.c(r+"/"+q,d,d,d,d,d,d,D.aYk,d,d,d)],v),A.dJ,d,A.e,A.h,0,A.p)],v),A.l,d,A.e,A.h,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yR.m()>>>16&255,D.yR.m()>>>8&255,D.yR.m()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.au4("INVESTED","$"+B.dI(j),!0),e.au4("DAILY ROI",A.i.aa(i*100,2)+"%",!0),e.au4("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j6,A.h,0,d,d)
j=B.dI(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h9Q,A.rz,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.h1s,A.bC,k,A.at,h,A.at,g,A.P,q,A.ak,r,A.ak,i,A.at,B.Es("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fMt)],v),A.B,d,A.e,A.M,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.ccX,A.m),d,d,d,d,A.bG,d,d,1/0),A.ac6],v))}u.push(D.fTT)
u.push(A.rz)
A.d.u(u,new B.N(a2,new C.dsr(e,a3),B.T(a2).k("N<1,w>")))
return B.c5(d,A.L,B.bm(!1,B.ca(B.x(u,A.B,d,A.e,A.h,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbA(d,e){var w=null,v=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(8),t=B.K(A.jS,A.r,1)
return B.o(w,B.A(B.a([B.W(A.a42,A.c,w,w,w,16),A.d8,B.c("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.eY,w,w,w)},
b6j(d){var w=A.a.b1(A.o.v(A.i.T(d*100)),4,"0")
return"****  ****  ****  "+A.a.aY(w,w.length-4)},
au4(d,e,f){var w=null,v=B.a0(217,D.yR.m()>>>16&255,D.yR.m()>>>8&255,D.yR.m()&255)
v=B.c(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bC,B.Es(e,w,w,B.l(w,w,A.CA,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.B,w,A.e,A.h,0,A.p)},
cr4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd4y(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ab(0,A.H,B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.Vc,16),new B.ab(0,A.H,B.a0(115,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),A.dp,14),new B.ab(0,A.H,B.a0(51,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.cP,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),B.a0(0,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.m()>>>16&255,k.m()>>>8&255,k.m()&255)
j=B.a0(A.i.T(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a6(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eM(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ab(0.5,A.H,k,A.J,14),new B.ab(0,A.H,j,A.J,6),new B.ab(0,A.H,B.a0(140,i.m()>>>16&255,i.m()>>>8&255,i.m()&255),new B.r(0,2),4)],p),D.cbu,A.m),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eJE],h),d),d),A.aY,e.bbA(b2,!0)],h),A.l,d,A.e,A.h,0,d,d)
a6=B.Es(a6,1,A.a2,D.fCe)
i=B.Es(e.b6j(a3),1,A.a2,D.fS4)
j=B.A(B.a([e.b5K(A.i.aa(2.86,2)+"%"),A.e5,e.b5K("261d")],h),A.l,d,A.e,A.h,0,d,d)
k=B.E(B.x(B.a([D.fVg,B.Es("$"+B.dI(a3),1,A.a2,D.fQO)],h),A.B,d,A.e,A.h,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.c(m,d,d,d,d,d,d,D.fD4,d,d,d)],h),A.dJ,d,A.e,A.h,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.m()>>>16&255,A.bz.m()>>>8&255,A.bz.m()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBz("Daily","$"+B.dI(a4)),1),A.e5,B.E(e.aBz("Total","$"+B.dI(a4*261)),1),A.e5,B.E(e.aBz("Days","261"),1)],h),A.l,d,A.e,A.h,0,d,d)
g=q?d:new C.dsq(e,b3,a3,t)
f=A.i.T(127.5)
f=B.fx(d,d,A.bs,B.a0(f,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),B.a0(f,A.bn.m()>>>16&255,A.bn.m()>>>8&255,A.bn.m()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.m(10),D.b7L),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bC,D.h3P,A.bC,a6,A.cM,i,A.fN,j,A.fN,m,A.fN,k,A.fN,l,A.P,new B.a6(1/0,40,B.iD(new B.dl(A.dx,A.z,A.f,B.c(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fDB,d,d,d),d),g,f),d)],h),A.B,d,A.e,A.M,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.cdy,A.m),d,d,d,A.kH,D.bFN,d,d,1/0)},
b5K(d){var w=null,v=B.a0(115,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(5),t=B.K(A.cB,A.r,1)
return B.o(w,B.c(d,w,w,w,w,w,w,D.fCD,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.zw,w,w,w)},
aBz(d,e){var w=null,v=B.a0(97,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(7),t=B.K(A.bn,A.r,1)
return B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,D.fMP,w,w,w),A.rA,new B.dl(A.dF,A.a5,A.f,B.c(e,w,w,w,w,w,w,D.fPM,w,w,w),w)],x.p),A.B,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.m0,w,w,w)}}
C.ake.prototype={
S(){var w=null,v=B.a([],x._),u=$.ax()
return new C.aA5(v,new B.at(A.ax,u),new B.at(A.ax,u),B.m5(0,w,w),new B.i9(),D.UH,C.aiR(),B.a([],x.fw),B.aR(x.N),B.m5(0,w,w))}}
C.aA5.prototype={
Z(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=B.Ao(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.aeh()
r.Q1()
r.atG()
r.cEg()
r.cEw()
$.aU.x1$.push(new C.cOV(r))
r.a.toString},
Q1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ass(),$async$Q1)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.cOf(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q1,v)},
gaDe(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPW())return!0
return!1},
gPW(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaZ1(){var w,v=this.CW
if(v==null)return A.bF
w=v.bz(new B.V(Date.now(),0,!1))
return w.a<0?A.bF:w},
bGL(){var w=this
if(w.a.c.w)return
if(w.gPW()){if(!w.cx)w.l(new C.cO5(w))}else if(w.cx)w.l(new C.cO6(w))},
cxn(){this.l(new C.cOp(this))},
uL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.l(new C.cOm(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.l(new C.cOn(t))
w=1
break}w=3
return B.b(C.chP(o.a,s),$async$uL)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.chQ(t.a.c.a,s),$async$uL)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.l(new C.cOo(t,r,q))
t.cGq()
t.bGL()
if(r===3)t.a_j(r)}case 1:return B.h(u,v)}})
return B.i($async$uL,v)},
a_j(d){return this.c8K(d)},
c8K(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHX(q,r,new C.cOh(t),d,s.c.a),$async$a_j)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_j,v)},
yg(d){return this.bIk(d)},
atG(){return this.yg(!1)},
bIk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9J(k,C.hMC(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.cig(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.atk(k),$async$yg)
case 5:r=f
w=!s.a&&J.cL(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.X5(!0,l,q,p)
m.a=s
w=8
return B.b(C.asu(k,s),$async$yg)
case 8:case 7:w=9
return B.b(C.W4(k),$async$yg)
case 9:o=f
w=10
return B.b(C.a95(k),$async$yg)
case 10:n=f
if(t.c==null){w=1
break}t.l(new C.cO7(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Ru(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ru=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Q1(),$async$Ru)
case 3:s=t.c
if(s==null){w=1
break}r=B.ea(new C.cOk(t),!1,null,x.H)
w=4
return B.b(B.a8(s,!1).cb(r),$async$Ru)
case 4:w=5
return B.b(t.Q1(),$async$Ru)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ru,v)},
cIG(){this.l(new C.cOI(this))},
cEw(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.d5(A.nT,new C.cOC(w))},
cGq(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPW()||w.CW==null)return
w.id=B.d5(A.fB,new C.cOF(w))},
cEg(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.d5(A.jT,new C.cOB(w))
w.G0()},
G0(){return this.cGp()},
cGp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$G0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$G0)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.V.aP(0,p,null)
if(x.f.b(o)){m=B.E9(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Mi(),$async$G0)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSH(),$async$G0)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aF("String","app_config",A.V.av(k.ak(),null)),$async$G0)
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
break}if(i.a!==r.ay)r.l(new C.cOD(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$G0,v)},
bag(){A.d.b_(this.f,new C.cOA())},
aeh(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aeh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O9(t.a.c.a),$async$aeh)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cL(q)){A.d.u(s,q)
A.d.b_(s,new C.cOc())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z))}t.l(new C.cOd(t,s))
t.a3m(!0)
B.bM(A.jy,new C.cOe(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$aeh,v)},
ai6(){var w=0,v=B.j(x.H),u=this
var $async$ai6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aq0(u.a.c.a,u.f),$async$ai6)
case 2:return B.h(null,v)}})
return B.i($async$ai6,v)},
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
v.a2()},
ade(d){var w,v=this
v.l(new C.cOa(v,d))
w=v.e
w===$&&B.d()
if(w.f.length!==0)w.C0(d,A.cn,A.l4)
else $.aU.x1$.push(new C.cOb(v,d))
if(d===0)v.a3m(!0)
if(d===1)v.czt(!0)},
a3m(d){$.aU.x1$.push(new C.cOs(this,d))},
aCS(){return this.a3m(!1)},
a2F(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a30(),$async$a2F)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.l(new C.cOl(t))
case 1:return B.h(u,v)}})
return B.i($async$a2F,v)},
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
return B.b(C.asn(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uL(),$async$nl)
case 10:q.l(new C.cOt(q))
w=1
break
case 8:w=11
return B.b(q.uL(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_j(3)
case 6:case 4:q.l(new C.cOu(q,c5))
C.VR(q.a.c.a,"user",c5)
q.aCS()
t=13
a8={}
w=16
return B.b(q.a2F(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a30(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.l(new C.cOv(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bG0("",null)
q.l(new C.cOw(q,p))
C.VR(q.a.c.a,"ai",p)
q.aCS()
r=[1]
w=14
break}o=B.nq(a9)
a9=q.a
n=""
m=C.hMC(a9.d)
w=C.hMv(c5)?20:21
break
case 20:w=22
return B.b(C.cif(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9J(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i4t(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bL(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bW(b3)),2,"0")
b5=A.a.b1(A.o.v(B.d4(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fF(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.W4(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hvB(i,25)
w=26
return B.b(C.a95(q.a.c.a),$async$nl)
case 26:g=c9
f=C.hxi(g)
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
return B.b(C.aiS(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hMv(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.v(d)
b4=B.v(j)
b5=q.a.c.w?"\n"+C.iry(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.v(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.v(a0)+"\n":""
c0=B.v(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hZO(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.v(c5)
w=28
return B.b(B.ro(o,a2,A.id,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bG0(a8.a,a3.a)
a4=c2
a5=B.hLM(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.iuk(c5),x.an)
a6=a9
J.h7(a6,C.iul(c5))
J.h7(a6,C.ium(c5))
J.h7(a6,B.hLc(c5))
J.h7(a6,C.iup(c5,q.a.c.w))
a8.b=a6}c3=C.itv(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aj9(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.l(new C.cOx(a8,q,a7))
C.VR(q.a.c.a,"ai",a7)
if(J.cL(a8.b)&&q.c!=null)q.KR(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.l(new C.cOy(q))
C.VR(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.l(new C.cOz(q))
q.aCS()
q.ai6()
if(!q.a.c.w)q.uL()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpX(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpY(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.j4
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.clo(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KR(d){return this.cxW(d)},
cxW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aj4(p,o,new C.cOq(t,p)),$async$KR)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HL(p,null,o,!1,!0,t.a.c.a),$async$KR)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.c9,null,null,null,null,null,null,null,null,null,null,null,A.lY,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.HL(p,l.f,o,k,n,j),$async$KR)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a2(p)
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
return B.b(C.b0U(p,B.a([new C.rW("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KR)
case 14:t.atG()
case 13:p=t.c.L(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dt,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KR,v)},
Td(d){return this.cGS(d)},
cGS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Td=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aj4(d,n,new C.cOH(t)),$async$Td)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HL(d,null,n,!1,!0,t.a.c.a),$async$Td)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b2(null,null,null,A.c9,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.lY,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.HL(d,q.f,r,p,n,o),$async$Td)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b2(null,null,null,A.dt,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Td,v)},
czt(d){$.aU.x1$.push(new C.cOr(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bB:A.CJ,i=m.d
i===$&&B.d()
w=x.O
w=k?B.a([A.alE,D.bp8],w):B.a([A.aN,A.yM],w)
v=B.m(22)
u=B.a([new B.ab(0,A.H,B.a0(71,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gcls():l
s=B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hkA(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.c("NGMY Helper",l,1,A.a2,l,l,l,A.dq,l,l,l)
s=B.o(l,l,A.f,l,l,D.b9R,l,8,l,l,l,l,l,8)
if(m.gaDe()&&m.d===0)q=m.gPW()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bb,B.E(B.x(B.a([r,A.bC,B.A(B.a([s,A.bf,B.E(B.c(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.i.T(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),l,l,l,l,l,l,l,l,11,l,l,A.cF,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.h,0,l,l)],p),A.B,l,A.e,A.h,0,A.p),1),B.aH(l,l,l,l,A.o7,l,l,l,new C.cON(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.ay,A.aC,A.x,w,l,l),A.m),l,l,l,E.anB,D.bGC,l,l,l)
v=k?D.uE:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dT,A.r,1)
u=B.o(l,B.A(B.a([m.bLc(),m.cGC(1,A.lA,"Music")],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.m),l,l,l,l,A.es,l,l,l)
t=m.e
t===$&&B.d()
if(m.gaDe()){v=B.a([],p)
if(m.gPW()){s=B.a0(38,A.dt.m()>>>16&255,A.dt.m()>>>8&255,A.dt.m()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dt.m()>>>16&255,A.dt.m()>>>8&255,A.dt.m()&255),A.r,1)
v.push(new B.D(A.P1,B.o(l,B.c(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i2M(m.gaZ1())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fPc,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.m),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPW()){s=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
r=B.m(12)
q=B.m(12)
o=B.W(A.kj,k?A.iH:A.hX,l,l,l,16)
v.push(new B.D(A.P1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bf,B.c("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iH:A.hX,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.h,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcxm(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcIF():l
v.push(B.E(new C.asq(s,q,new C.cOO(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.h,0,A.p)}else v=m.bLd(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hyg(r)
t=B.a([w,A.af,new B.D(A.ia,u,l),A.P,B.E(B.hzh(B.a([v,new C.ast(q,o,n,new C.cOP(m,d),s,l)],p),A.t,t,A.y,new C.cOQ(m),l),1)],p)
if(m.d===0&&!m.gaDe()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a78:D.a6q
w.push(new B.a6(l,36,B.hP(A.t,l,new C.cOR(m),v.length,l,l,A.aL,new C.cOS(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.e2,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.v:A.c
r=B.a0(64,r.m()>>>16&255,r.m()>>>8&255,r.m()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.fy
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bB(l,new B.b6(4,q,A.a1),l,A.zp,l,l,l,l,!0,new B.b6(4,o,new B.av(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.al,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOT(m),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.acp,l,l),1)
s=m.at
r=s?l:m.gcAu()
w.push(B.A(B.a([u,new B.JZ(v,A.aN,l),A.bf,B.aF(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a6(44,44,s?D.eCs:O.att,l),A.cK,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cK,l,l,A.ai)],p),A.dJ,l,A.e,A.h,0,l,l))
w=B.x(w,A.l,l,A.e,A.M,0,A.p)
v=k?A.lT:A.c
t.push(B.uE(A.ut,B.o(l,new B.D(A.CZ,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(18,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.r,1),A.ut,l,l,A.m),l,l,l,l,l,l,l,l),14,!1))}return new B.XX(i,new C.cOU(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bLc(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.d()
w=p===0
p=this.c
p.toString
v=B.O(p).ax.a===A.I
if(w)p=B.a0(A.i.T(255*(v?0.25:0.12)),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
else p=A.L
u=B.m(11)
t=w?B.K(B.a0(A.i.T(127.5),A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.r,1):q
s=B.W(A.vg,w?A.aN:A.cC,q,q,q,17)
if(w)r=v?A.c:A.aw
else r=A.cC
return B.E(B.ay(q,B.cU(q,B.A(B.a([s,A.bf,B.c("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eJ,q,q,q,q,A.qZ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cO8(this),q,q,q,q,q,q,!1,A.a4),1)},
cGC(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
r=B.a([s,A.bf,B.c(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cU(q,B.A(r,A.l,q,A.b9,A.h,0,q,q),q,q,A.b_,new B.n(p,q,t,u,q,q,A.m),A.eJ,q,q,q,q,A.qZ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOG(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bLd(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bvH:B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
w=B.m(18)
v=B.K(d?A.ds:A.bn,A.r,1)
u=q===0?1:q
return B.o(s,B.kx(!0,s,t.ok,new C.cO9(t,e,d),u,s,A.bQ,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.m),s,s,s,A.ia,s,s,s,s)},
aSk(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a2(d),m=J.z(n.h(d,"role"),"user"),l=m?A.j4:this.cpY(d),k=m?A.mD:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a6(28,28,C.hkA(this.a.f.Q,28),o),A.aa],j))
w=m?A.dJ:A.B
j=B.a([],j)
if(h)j.push(D.eCJ)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a0f:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bn,A.r,1)
q=B.a([new B.ab(0,A.H,B.a0(10,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.dR,6)],x.V)
if(f)n=B.c("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.e2,o,o,o,o,o,o,o,o,12,A.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.c(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hgg(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.bb(A.k0,A.k0,new B.aP(t,t),new B.aP(s,s)),q,o,A.m),o,o,o,o,A_.wX,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hLR(l,e,this.gcGR()))
i.push(new B.d2(1,A.cg,B.x(j,w,o,A.e,A.h,0,A.p),o))
if(m)i.push(A.d8)
return new B.D(A.d4,B.A(i,A.dJ,o,k,A.h,0,o,o),o)},
bLb(d,e){return this.aSk(d,e,!1)}}
C.aNx.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFc())},
t(){$.zo().a6(0,this.gFc())
this.a2()}}
C.aNy.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFc())},
t(){$.zo().a6(0,this.gFc())
this.a2()}}
C.aNz.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFc())},
t(){$.zo().a6(0,this.gFc())
this.a2()}}
C.aOw.prototype={
Z(){this.a4()
$.zo().aV(0,this.gFc())},
t(){$.zo().a6(0,this.gFc())
this.a2()}}
C.XM.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apK.prototype={
S(){return new C.aFa()}}
C.aFa.prototype={
Z(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B5(d,e){return this.cMr(d,e)},
cMr(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B5=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.dJd(q,e))
t=3
w=6
return B.b(d.$0(),$async$B5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.l(new C.dJe(q))
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
break}t.l(new C.dJ4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Bz,v)},
abG(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$abG)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.d()
q=t.e
q===$&&B.d()
p=t.f
p===$&&B.d()
u=B.P_(s,B.L4(B.c5f(r,q,s,p).f1(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abG,v)},
YX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pH(s,t.a.c,!1),$async$YX)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B5(new C.dJ2(t),"Preparing download\u2026"),$async$YX)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YX,v)},
a_w(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pH(s,t.a.c,!1),$async$a_w)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B5(new C.dJc(t),"Creating QR code\u2026"),$async$a_w)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
a_v(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.imm(r),$async$a_v)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B5(new C.dJ1(t,s),"Looking up code\u2026"),$async$a_v)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_v,v)},
afb(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$afb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xX.cq().N7(A.TG,A.va,!0),$async$afb)
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
p=B.jO(p,0,null)
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
return B.i($async$afb,v)},
AJ(d,e,f){return this.bNv(d,e,f)},
aTF(d,e){return this.AJ(d,!1,e)},
bNu(d){return this.AJ(d,!1,!1)},
bNv(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$AJ)
case 3:if(t.c==null){w=1
break}if(!C.c5k(d,t.a.c,null)){t.lg(C.c5l(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.d()
s=!C.hZv(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.cu(r)
s=t.c
s.toString
w=4
return B.b(C.imz(s,q,t.a.c,d),$async$AJ)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m8(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.d()
r=o}w=5
return B.b(B.t_(s,p,r,!1,null,null,d.ax),$async$AJ)
case 5:if(t.c==null){w=1
break}t.l(new C.dJ0(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AJ,v)},
afa(){var w=0,v=B.j(x.H),u=this
var $async$afa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B5(new C.dJ3(u),"Reading file\u2026"),$async$afa)
case 2:return B.h(null,v)}})
return B.i($async$afa,v)},
Ye(d){return this.bOP(d)},
bOP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ye=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.d()
s=new B.dd("local_qr_dep_"+1000*r,q.a,d,A.h3,A.fF,"Admin deposit ($"+B.dI(d)+")",null,null,A.cx,new B.V(Date.now(),0,!1))
C.cki(t.d,s)
q=t.e
q===$&&B.d()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.t_(t.a.c,t.d,r,!0,null,null,null),$async$Ye)
case 3:w=4
return B.b(t.Bz(),$async$Ye)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+B.dI(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Ye,v)},
b9E(d){var w=null
return B.ce(w,w,!0,w,new C.dJa(),d,w,!0,!0,x.N)},
Xh(d){return this.bGF(d)},
bGF(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$Xh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Ye(d.b),$async$Xh)
case 5:w=1
break
case 4:s=d.c
t.lg(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$Xh,v)},
Fx(d){return this.cuY(d)},
cuY(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$Fx)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3O(d,t.a.c),$async$Fx)
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
return B.b(t.b9E(r),$async$Fx)
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
return B.b(C.ckb(d,o,n.a,r,p),$async$Fx)
case 7:w=6
return B.b(t.Xh(f),$async$Fx)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fx,v)},
Fy(d){return this.cuZ(d)},
cuZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bz(),$async$Fy)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cka(d,t.a.c),$async$Fy)
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
return B.b(t.b9E(r),$async$Fy)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.d()
n=t.d
n===$&&B.d()
w=7
return B.b(C.Xo(o,n.a,d,r,p),$async$Fy)
case 7:w=6
return B.b(t.Xh(f),$async$Fy)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fy,v)},
Qg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DQ()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a8(s,!1).cb(B.ea(new C.dJ5(),!0,null,x.N)),$async$Qg)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B5(new C.dJ6(t,r),"Applying deposit\u2026"),$async$Qg)
case 6:w=1
break
case 5:w=7
return B.b(t.B5(new C.dJ7(t,r),"Loading\u2026"),$async$Qg)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qg,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nN:A.qI,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aE(d,A.dI,x.w).w,i=n?A.bw:A.v.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.W(A.eH,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cK,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dJf(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.h,0,o,o)
w=B.c("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.c("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cF,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a2g(D.bUu,"Download",A.a7n,u?o:p.gbUs(),o),1)
t=B.A(B.a([t,A.ev,B.E(new C.a2g(A.jD,"Show QR",D.dH5,u?o:p.gcat(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r
s=B.E(new C.a2g(D.bUv,"Upload",A.a6K,u?o:p.gcar(),o),1)
s=B.A(B.a([s,A.ev,B.E(new C.a2g(A.jE,"Scan QR",D.dcV,u?o:p.gcas(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r?o:p.gcaq()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.m(16)
j=B.a([B.cn(B.a([i,A.aA,w,A.P,v,A.lk,t,A.aA,s,A.aA,new C.bvZ(A.tE,"Enter Code",A.a66,u,o),A.lk,B.o(o,B.A(B.a([B.W(A.he,A.aV,o,o,o,18),A.ar,B.E(B.c("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.B,o,A.e,A.h,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.m),o,o,o,o,A.jz,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iR:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aF(!1,A.a3,!0,o,new B.D(A.D6,B.A(B.a([H.aW2,A.bb,B.E(B.c(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.h,0,o,o),o),A.f,i,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a2g.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.W(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.c(w.d,v,v,v,v,v,v,A.ul,v,v,v)],x.p),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,140,v,v,A.bQ,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bvZ.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ab(0,A.H,A.d.gal(s).j(0.35),A.dp,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.W(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.ev,B.c(w.d,v,v,v,v,v,v,A.ul,v,v,v)],x.p),A.l,v,A.b9,A.h,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.ay,A.aC,A.x,s,v,v),A.m),v,v,v,v,D.bIS,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a0T.prototype={
S(){return new C.bmI()}}
C.bmI.prototype={
gazh(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a4()
w.Sa()
w.f=B.d5(A.oK,new C.dJj(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
Sa(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Sa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vm(q.e,q.f),$async$Sa)
case 3:q=e.a
s=B.c5f(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.P_(t.a.e,B.L4(s.f1(),null,"  ")),$async$Sa)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.l(new C.dJg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Sa,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nN:A.qI,s=u?A.iR:A.c,r=u?A.c:A.bq,q=B.eS(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aZd,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qk(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.c("Code: "+w.gazh(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aV.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.W(A.fY,A.aV,v,v,v,14),A.bf,B.c("Copy code",v,v,v,v,v,v,B.l(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.M,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.m),v,v,v,v,A.lZ,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dJh(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ae,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aA,B.c("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.m),v,v,v,v,A.ae,v,v,1/0),1),A.aO,new B.a6(1/0,v,B.bI(A.Bx,v,new C.dJi(d),B.bn(A.aV,v,v,v,v,A.hr,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.h,0,A.p),v),v,!1,!1,v,v)}}
C.a0U.prototype={
S(){return new C.bmJ(B.A2(A.z9,A.ot,A.vC))}}
C.bmJ.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c5(B.eS(w,w,w,!0,!0,A.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.hae,w,w,w,1,w,!0),A.v,B.A1(this.d,A.bZ,new C.dJk(this,d)),w,!1,!1,w,w)}}
C.agg.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iR:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dT,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ab(0,A.H,A.aV.j(0.16),A.kN,36)],x.V)
u=B.o(m,D.c_H,A.f,m,m,new B.n(m,m,m,B.m(18),A.a7m,D.caN,A.m),m,58,m,m,m,m,m,58)
t=B.c("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.c("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nN:A.qI
q=B.m(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rq("Account",A.a.i(this.d),i,j,m),A.S,new C.Rq("Balance","$"+B.dI(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.S,new C.Rq("Investment",d,i,j,m)],o))
g.push(A.S)
g.push(new C.Rq("Saved on",""+B.bL(f)+"/"+B.bW(f)+"/"+B.bD(f),i,j,m))
g.push(A.S)
g.push(new C.Rq("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.bQ,m,m,1/0)
r=A.au.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.au.j(0.35),A.r,1)
n=B.W(A.tB,l?A.aQ:A.d9,m,m,m,16)
return B.eE(m,A.L,new B.cP(A.YP,new B.bP(new B.n(k,m,w,e,v,m,A.m),A.bm,new B.D(A.x1,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aA,B.o(m,B.A(B.a([n,A.aa,B.E(B.c("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bM:A.io,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.B,m,A.e,A.h,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.ez,m,m,1/0),A.dc,B.A(B.a([B.E(B.dV(A.om,new C.fbt(a0),B.dh(m,m,m,m,m,m,m,m,m,j,m,m,A.cm,m,new B.ba(B.m(14),A.a1),new B.av(h,1,A.r,-1),m,m,m,m)),1),A.ar,B.E(B.bI(D.fT8,m,new C.fbu(a0),B.bn(A.aV,m,m,m,m,m,A.cm,m,new B.ba(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.h,0,m,m)],o),A.l,m,A.e,A.M,0,A.p),m),m),m),m,m,m,A.eG,m,A.d7,m,m,m)}}
C.Rq.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a6(92,v,B.c(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.c(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.F,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.B,v,A.e,A.h,0,v,v)}}
C.a0_.prototype={
S(){return new C.aCl(new B.at(A.ax,$.ax()),B.kg(!0,null,!0,!0,null,null,!1))}}
C.aCl.prototype={
Z(){this.a4()
$.aU.x1$.push(new C.dhR(this))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a2()},
cav(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a8(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nN:A.qI,p=u?A.aT:A.dT,o=B.m(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ab(0,A.H,A.aV.j(0.18),A.h0,32)],x.V),l=B.o(v,Y.auc,A.f,v,v,new B.n(v,v,v,B.m(18),A.a7m,D.cdI,A.m),v,56,v,v,v,v,v,56),k=B.c("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.c("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.F,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.v0(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bvs(new C.dhO())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eE(v,A.L,new B.cP(A.MS,new B.bP(new B.n(t,v,n,o,m,v,A.m),A.bm,new B.D(A.x1,B.x(B.a([l,A.aO,k,A.P,j,A.eb,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bB(v,v,v,A.D5,v,v,"",v,!0,new B.b6(4,B.m(16),new B.av(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b7J),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.al,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dhP(w),v,!1,v,v,!1,v,!0,v,A.ae,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mJ,v,v,v,v),A.eb,B.A(B.a([B.E(B.dV(A.om,new C.dhQ(d),B.dh(v,v,v,v,v,v,v,v,v,s,v,v,A.cm,v,new B.ba(B.m(14),A.a1),new B.av(p,1,A.r,-1),v,v,v,v)),1),A.ar,B.E(B.bI(D.fX3,v,w.gcau(),B.bn(A.aV,v,v,v,v,v,A.cm,v,new B.ba(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.h,0,v,v)],f),A.l,v,A.e,A.M,0,A.p),v),v),v),v,v,v,A.Ph,v,A.d7,v,v,v)}}
C.aqg.prototype={
S(){return new C.bmQ(A.cS)},
hK(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bmQ.prototype={
Z(){var w,v=this
v.a4()
w=v.a
w.toString
$.tX=$.tX+1
v.r=A.o.M(A.o.D(C.fVD(w.e,w.d.y2),1,600))
w=v.a
if(!J.lt(w.d.y2,w.e))v.r=C.is0(v.a.e)
v.w=B.d5(A.fB,new C.dPH(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.coO()
C.b2B()
this.a2()},
coO(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.i.D(r.e/w,0,1)
if(v<=0)return
u=B.ov(A.i.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.dd(t,s.c.a,u,A.hh,A.fF,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cx,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.vi(u,q,"Left early \xb7 +$"+A.i.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
L0(d,e){return this.cB9(d,e)},
b9h(d){return this.L0(!1,d)},
cB8(d){return this.L0(d,"")},
cB9(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$L0=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.bHT(s,C.bHz(),C.hoz(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$L0)
case 5:w=1
break
case 4:n=B.ov(A.i.aa(t.a.w*1.46*r,2))
m=r>=1
t.l(new C.dPy(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.dd(s,p,n,A.hh,A.fF,q,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aj2(l,!0)
t.a.hK(l)
t.a.bv()
if(m)k="+$"+A.i.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.i.aa(n,2)+" ("+A.i.T(r*100)+"% of the prize)"}q=t.a
C.vi(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHT(s,C.bHz(),C.hoz(),""+t.e+"/"+t.f,k,q,!0),$async$L0)
case 6:w=7
return B.b(C.aiV(t.a.f,k),$async$L0)
case 7:case 1:return B.h(u,v)}})
return B.i($async$L0,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.d()
w=A.o.ap(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.R2,o,o,o,new C.dPB(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.c(t.f,o,1,A.a2,o,o,o,A.jn,o,o,o),B.c("Win $"+A.i.aa(t.w*1.46,2)+" \xb7 stake $"+A.i.aa(p.a.w,2),o,o,o,o,o,o,D.fHs,o,o,o)],s),A.B,o,A.e,A.h,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aB:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.as3(r,new C.dPC(p),o),A.bf,B.cU(o,B.A(B.a([D.c4E,A.d8,B.c(""+w+":"+v,o,o,o,o,o,o,A.iP,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o,o,A.b_,new B.n(n,o,o,q,o,o,A.m),A.a3,o,o,o,o,A.nV,o,o,o)],s),A.l,o,A.e,A.h,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSI(o,D.bwR,B.bm(!0,B.x(B.a([new B.D(D.bL5,q,o),new C.OA(w*r,w,v,o),new B.D(E.ao3,B.A(B.a([B.E(B.bu(B.m(99),B.jt(A.bw,o,o,9,o,r,new B.lc(A.d.gH(n.r),x.dw)),A.aq),1),A.ar,B.c(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fRe,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o),B.E(new B.D(A.zh,B.bu(B.m(22),new B.bP(new B.n(o,o,o,o,o,new B.a7(A.aX,A.b1,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.alw],x.O),o,o),A.m),A.bm,new B.dq(p.x,L.hKl(p.a.e,new L.A9(new C.dPD(p),new C.dPE(p),new C.dPF(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a8j.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.au.j(0.5),A.r,1),t=B.a([new B.ab(0,A.H,A.au.j(0.22),A.J,26)],x.V)
return B.eE(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bYR,A.f,w,w,new B.n(A.au.j(0.16),w,B.K(A.au,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aA,D.h5Y,A.P,B.c("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.c("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a6(1/0,w,B.bI(D.fTV,w,new C.cej(d),B.bn(A.au,w,w,w,A.v,A.hr,w,w,new B.ba(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.cbs,A.m),w,w,w,w,D.bJi,w,w,w),w,w,w,A.a28,w,A.d7,w,w,w)}}
C.apJ.prototype={
S(){return new C.bmG(null,null)},
ga_(d){return this.e}}
C.bmG.prototype={
Z(){var w,v=this,u=null
v.a4()
w=v.d=B.bp(u,A.CU,u,1,u,v)
w.dn()
w.dW$.I(0,new C.dIQ(v))
w=B.bp(u,A.mp,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.OL,u,1,u,v)
w.cK(0)
v.f=w
w.dn()
w.dW$.I(0,new C.dIR(v))
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
w.bAb()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.TH[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.TH[A.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.v(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.v(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dt:A.bE
else if(w!=null){b1=(w>0?A.dt:A.bE).j(0.45)
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
b3=B.a([B.e3(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ab(6+e,A.H,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ab(3,A.H,A.bc.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bk,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ab(0,A.H,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dP(new B.j_(B.x_(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dP(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(b2*0.5),B.a([new B.ab(b2*0.02,A.H,A.v.j(0.4+b1),A.J,b2*0.14)],e),b0,A.m),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
b1=B.dv()
d=b1.a
d.$flags&2&&B.ak(d)
d[11]=0.0025
b1.n6(o)
b1.k7(k,k,k,1)
b1.k5(l)
b1.fG(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.djr
else{a2=B.ap(A.c,A.kW,q*0.45)
a2.toString
a2=B.a([a2,A.cj,A.cB],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ab(0,A.H,A.v.j(0.3),D.eyZ,16)],e)
if(!a9.a.c)e.push(new B.ab(p*3,A.H,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ab(0,A.H,A.c.j(0.9),A.Vc,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bP(new B.n(b0,b0,b0,B.m(d),b0,new B.a7(new B.dg(-1+Math.cos(j)*0.8,-1),new B.dg(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.m),A.bm,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.m),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.dc(A.v.j(0.18),A.dR,5)],x.C)
if(!a9.a.c)d.push(new B.dc(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uP(B.c(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b_,A.jy,b3),b0,b0,b0))
f.push(B.dP(B.fC(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.ay,A.aC,A.x,a2,b0,b0),A.m),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a6(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aO4.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.OA.prototype={
B(d){var w=null,v=new C.cgL(),u=v.$3("STAKE","$"+A.i.aa(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ab(0,A.H,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.P1,B.A(B.a([u,B.o(w,B.x(B.a([D.h4B,B.lI(new C.cgK(),w,A.b_,A.n7,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.av4,A.m),w,w,w,w,A.HO,w,w,w),v.$3("FULL WIN","$"+A.i.aa(this.d,2),A.bM)],q),A.l,w,A.e,A.h,0,w,w),w)}}
C.as3.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.k7.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bXf,A.d8,C.asT(this.d,A.ol,this.c)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.av4,A.m),w,w,w,w,A.Po,w,w,w)},
ge4(){return this.c}}
C.OI.prototype={
S(){return new C.bnq(null,null)}}
C.bnq.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.mp,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bAO()},
b2v(d,e){var w=this.a.d,v=B.T(w).k("N<1,p>"),u=B.B(new B.N(w,C.iyo(),v),v.k("aj.E"))
w=this.d
w===$&&B.d()
return B.c7(w,new C.e8u(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akP,B.bm(!0,this.b2v(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.b2v(0,d)},
aA6(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.W(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,32,w,w,w,w,w,32),A.ar,B.E(B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w)}}
C.aOG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.af7.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aE(d,A.dI,o).w.r.d,m=this.c,l=J.cH(m),k=l.eO(m,new C.e8x()).gJ(0),j=new B.ef(l.dO(m,new C.e8y(),x.cD),x.bG).cC(0,0,new C.e8z())
o=B.aE(d,A.bY,o).w
w=x.p
v=B.a([A.S,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.m),p,4,p,p,p,p,p,42),new B.D(A.aon,B.A(B.a([B.o(p,D.c7d,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ab(0,A.H,A.fk.j(0.45),A.J,14)],x.V),D.auY,A.m),p,44,p,p,p,p,p,44),A.bb,D.bNu,B.aH(p,p,p,p,A.lC,p,p,p,new C.e8A(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.h,0,p,p),p)],w)
if(l.gcn(m)){u=C.hiO("GAMES",""+l.gJ(m),A.eE)
t=C.hiO("WON",""+k,A.k7)
s=j>=0
r=s?"+":"-"
q=C.bE6(j)
s=s?A.k7:A.f1
v.push(new B.D(D.bHp,B.A(B.a([u,A.aa,t,A.aa,C.hiO("NET",r+q,s)],w),A.l,p,A.e,A.h,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.W(D.bTf,A.c.j(0.35),p,p,p,52),A.af,B.c("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.ak,B.c("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.h,0,A.p),p))
else v.push(new B.d2(1,A.cg,B.hP(A.t,p,new C.e8B(this),l.gJ(m),new B.P(14,2,14,16+n),p,A.ah,new C.e8C(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.M,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.bay,p,p,p,p,p,p,p,p)}}
C.af6.prototype={
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
else if(u)r=A.dC
else{w=v?A.aQ:A.bv
r=w}q=h.gbl8()
w=new C.e8w()
s=B.m(14)
p=B.a([r.j(0.13),D.bvA],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.W(g?A.m2:A.cA,r,i,i,i,16)
m=B.E(B.c(h.b,i,1,A.a2,i,i,i,A.uk,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.c(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.m),i,i,i,i,D.bKY,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bE6(q)}else{l=g?"+":"-"
l+=C.bE6(h.d)}j=x.p
l=B.A(B.a([n,A.bf,m,k,A.bf,B.c(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.h,0,i,i)
k=C.e8v("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.d8,C.e8v("PAID",C.bE6(g?h.d:0),r),A.d8,C.e8v("BEFORE",w.$1(h.x),A.eE),A.d8,C.e8v("AFTER",w.$1(h.y),A.dC)],j),A.l,i,A.e,A.h,0,i,i)
n=C.itz(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.ak,w,A.at,B.c(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.am,i,A.e,A.h,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.ay,A.aC,A.x,p,i,i),A.m),i,i,i,i,A.jV,i,i,i)}}
C.aD5.prototype={
S(){return new C.biV(A.cS,null,null)}}
C.biV.prototype={
Z(){var w,v,u,t=this
t.a4()
w=B.bp(null,A.n6,null,1,null,t)
w.cK(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afv(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a8A,A.tR,A.d3,A.c][w.aw(4)],[A.ic,A.kk,A.ef,A.r4][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bzG()},
B(d){var w=null,v=this.d
v===$&&B.d()
return B.as(B.aF(!1,A.a3,!0,w,B.c7(v,new C.dp0(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.afv.prototype={
ga_(d){return this.f}}
C.aNA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.b3o.prototype={
B(d){return new B.wt(new C.cjb(this),null,new B.hi(B.a([$.zo(),$.a4C()],x.U)),null)},
ge4(){return this.c}}
C.Oc.prototype={
ciC(){if(this.c!=null)this.l(new C.c6A())}}
C.JL.prototype={}
C.arr.prototype={
S(){return new C.aFW(A.cS,new B.at(A.ax,$.ax()))},
cOc(){return this.d.$0()},
d_c(){return this.f.$0()},
d_0(d,e){return this.r.$2(d,e)},
d_O(d,e,f){return this.w.$3$bonus(d,e,f)},
ge4(){return this.c}}
C.aFW.prototype={
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a2()},
avN(){var w=B.cG(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avN()
if(s<2){t.aA7("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cOc()<s){t.aA7("Insufficient balance.")
w=1
break}if(!t.a.d_0(s,"Dice Roll bet")){t.aA7("Could not place bet.")
w=1
break}t.a.toString
t.l(new C.e1_(t))}w=3
return B.b(C.cft(t.a.e),$async$BC)
case 3:r=t.a
q=C.ivQ(r.e,r.c,t.d)
t.a.d_c()
B.b1Z(t.a.e)
t.l(new C.e10(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bM(new B.bf(1000*(40+p*6)),null,r),$async$BC)
case 7:if(t.c==null){w=1
break}new C.e11(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bM(A.kd,null,r),$async$BC)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hne(q)
t.l(new C.e12(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.d_O(m,"Dice Roll "+n,o)
t.l(new C.e13(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.i.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.aa(m,2)+" added to your balance"
w=12
return B.b(C.bHT(r,C.bHz(),new C.e14(t),n,k,"YOU WIN!",!0),$async$BC)
case 12:w=13
return B.b(C.aiV("Dice Roll",l?"+$"+A.i.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.aa(m,2)+" added to your balance"),$async$BC)
case 13:w=10
break
case 11:w=14
return B.b(C.bHT(r,C.bHz(),new C.e15(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BC)
case 14:C.vi(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BC,v)},
aA7(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avN(),d=x.w,a0=B.aE(a2,A.dI,d).w,a1=Math.min(B.aE(a2,A.bY,d).w.a.a*0.44,200)
d=B.hs(A.ato,D.hce,new C.e18(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.aY,B.o(f,B.A(B.a([A.atj,A.bf,C.asT(v.d,A.ja,u)],t),A.l,f,A.e,A.M,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.m),f,f,f,f,A.m_,f,f,f)],t),A.l,f,A.e,A.h,0,f,f)
u=g.z
v=B.a0(140,D.a0m.m()>>>16&255,D.a0m.m()>>>8&255,D.a0m.m()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apJ(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.m),f,f,f,f,f,f,f,1/0),1)
v=B.c("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.TH[q]
o=C.hne(p)
n=p>0?A.bi:A.aB
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.av(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ab(1,A.H,n.j(0.65),A.J,14)],r):A.Tu
m=m?18:15
s.push(new B.bx(1,A.ba,new B.D(A.jh,B.o(A.z,B.c(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bE(h,h,h,h),new B.bb(j,j,j,j),n,f,A.m),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.ak,B.A(s,A.l,f,A.e,A.h,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hne(v)
s=g.r
s.toString
d.push(new B.D(A.jg,B.c("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.be:A.c_,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.S)
d.push(new B.bK(A.a5,f,f,B.c("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),f,f,f,f,f,f,f,f,12,f,f,A.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.ak)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e19(g),v),v.k("aj.E"))
s=g.y
r=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v.push(B.E(new B.D(A.a2e,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bB(f,new B.b6(4,B.m(10),A.a1),f,A.jU,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.ma,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.al,f,f,f,f,f,A.ec,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.hg,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.h,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.c("Perfect Score Profit: +$"+A.i.aa(g.avN()*0.46,2),f,f,f,f,f,f,I.aXW,f,f,f),f))
d.push(A.S)
d=B.E(new B.D(A.ia,B.x(d,A.am,f,A.e,A.h,0,A.p),f),1)
v=g.x?f:g.gcxE()
s=B.fx(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.m(14),A.a1),f,f,f,f,f)
return C.aSI(f,D.a0A,B.bm(!0,B.x(B.a([new B.D(D.bLq,w,f),new C.OA(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a6(1/0,52,B.iD(B.c("\ud83c\udfb2 ROLL ($"+A.i.aa(e,2)+")",f,f,f,f,f,f,A.lK,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.h,0,A.p),1)],t),A.l,f,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.as9.prototype={
S(){return new C.aGb(A.lg,new B.at(A.ax,$.ax()))},
cZS(d){return this.e.$1(d)}}
C.aGb.prototype={
gauz(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cS.aw(89999))
this.r!==$&&B.bF()
this.r=w
v=w}return v},
gRB(){var w=this.d,v=this.a
return w===A.lg?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaX(){var w=this.gRB(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a2()},
JP(d,e){return this.bNY(d,e)},
bNY(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fK(new B.fA(d)),$async$JP)
case 2:B.eZ()
t=u.c
if(t!=null)t.L(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JP,v)},
Rw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRB().length===0){r.c.L(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.js()
o=A.i.aa(r.a.d,2)
q=r.d===A.lg?B.cF("https://cash.app/"+r.gaaX()+"/"+o,0,null):B.cF("bitcoin:"+r.gRB(),0,null)
t=4
w=7
return B.b(B.iU(q,A.fu,null),$async$Rw)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.lg?r.gaaX():r.gRB()
w=10
return B.b(r.JP(n,r.d===A.lg?"Cash App tag":"Bitcoin address"),$async$Rw)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.lg?r.gaaX():r.gRB()
w=11
return B.b(r.JP(n,r.d===A.lg?"Cash App tag":"Bitcoin address"),$async$Rw)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rw,v)},
a24(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a24=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i9().blV(A.eZ),$async$a24)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a24)
case 4:s=e
t.l(new C.e8I(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a24,v)},
ceJ(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.lg?C.hLH(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.lg?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cZS(new B.dd(s,w.c.a,w.d,A.h3,v.d,r,v.f,v.gauz(),A.dM,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j7(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eS(o,o,o,!0,!0,A.Cl,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.IN,o,o,o,new C.e8J(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fVG,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f6.j(0.25),A.r,1),k=x.V,j=B.a([new B.ab(0,A.H,A.b5.j(0.25),A.eT,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.c("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.F,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.ak,new B.dl(A.dF,A.z,A.f,B.c("$"+B.dI(p.a.d),o,o,o,o,o,o,D.fDq,o,o,o),o),A.ak,B.c("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f6.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cex,A.m),o,o,o,o,A.aoA,o,o,o)
m=p.c99()
l=p.aDU(1,"Send the money to NGMY Pay",p.ceH())
w=p.aDU(2,"Put this code in the payment note",p.bMy())
v=p.d===A.lg
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDU(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bB(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.av(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uV,!0,o,o,o,o,new B.b6(4,B.m(18),D.b7E),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fEX,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.ul,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f6:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bu(B.m(14),new B.cP(D.b92,new B.FF(p.f,o),o),A.aq),A.P,D.fnP,A.at],i),A.l,o,A.e,A.h,0,A.p):B.x(B.a([B.o(o,D.c6m,A.f,o,o,new B.n(D.f6.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.S,D.h0g,A.cM,B.c("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p)
return B.c5(n,A.Cl,B.as(new B.cP(A.ag7,B.cn(B.a([j,A.bx,m,A.bx,l,w,t,p.baS(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uV,o,s,u,o,o,A.m),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcqI(),o,o,o,o,o,o,!1,A.a4),!0),A.ak,B.c(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a6(o,56,new B.bP(new B.n(o,o,o,B.m(18),B.a([new B.ab(0,A.H,A.b5.j(0.45),A.dp,18)],k),D.cd3,A.m),A.bm,B.lW(A.au0,D.hbp,p.gceI(),B.fx(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bIq,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c99(){var w=null,v=new C.e8E(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.lg,A.hN,"Cash App"),A.e5,v.$3(A.aam,D.asX,"Bitcoin")],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.n(A.uV,w,t,u,w,w,A.m),w,w,w,w,A.m0,w,w,w)},
baS(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.c(""+d,v,v,v,v,v,v,D.fKx,v,v,v),A.f,v,v,D.b9M,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f6.j(0.18),v,v,v,v,v,A.wS,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.h,0,A.p)
w=g?12:20
return new B.F2(B.A(B.a([new B.a6(34,v,t,v),A.ar,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a1v,B.c(e,v,v,v,v,v,v,A.LD,v,v,v),v),f],u),A.am,v,A.e,A.h,0,A.p),v),1)],u),A.am,v,A.e,A.h,0,v,v),v)},
aDU(d,e,f){return this.baS(d,e,f,!1)},
ceH(){var w,v,u,t,s=this,r=null,q=s.d===A.lg?s.gaaX():s.gRB(),p=B.m(20),o=B.m(20),n=s.d===A.lg,m=n?D.cbX:D.cdS,l=B.a([new B.ab(0,A.H,(n?A.a_Y:K.uF).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.lg
w=n?A.hN:D.asX
k=B.o(r,B.W(w,n?A.a_Y:K.uF,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.m),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.c(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.lg
t=u?22:13
v=B.c(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bC,v,A.at,B.A(B.a([D.c1t,A.d8,B.c(s.d===A.lg?"Tap to pay $"+B.dI(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.rD,r,r,r)],u),A.l,r,A.e,A.h,0,r,r)],u),A.B,r,A.e,A.h,0,A.p),1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eG(B.A(B.a([k,A.bb,v,B.aH(r,r,r,r,D.c0p,r,r,r,w?r:new C.e8H(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.h,0,r,r),r,new B.n(r,r,r,o,l,m,A.m),r,A.anY,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gclO(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bMy(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b2.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gauz().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b2.j(0.28),A.b2.j(0.08)],u)
p=new B.av(A.eE.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.c(s,o,o,o,o,o,o,A.qh,o,o,o),A.f,o,o,new B.n(o,o,new B.bE(p,p,p,p),new B.bb(r,r,r,r),o,new B.a7(A.aX,A.b1,A.x,q,o,o),A.m),o,52,o,A.jh,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.h,0,o,o),A.af,B.A(B.a([B.E(B.c('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.aa,B.hs(A.a57,D.hdp,new C.e8D(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.eE,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.h,0,o,o)],l),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(A.uV,o,m,n,o,o,A.m),o,o,o,o,A.bG,o,o,o)}}
C.rV.prototype={
ak(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rW.prototype={
ak(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWQ(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hvA(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aM(v," \xb7 ")},
giK(d){return this.c}}
C.m0.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iG.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b8(v.c,new C.ci9(),x.P)
w=B.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.iv.prototype={
an9(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.iv(v,u,t,s,r,h==null?w.f:h)},
bgx(d){var w=null
return this.an9(w,w,w,w,d,w)},
cS3(d,e,f){return this.an9(d,e,null,null,null,f)},
bgw(d){var w=null
return this.an9(w,w,w,d,w,w)},
cRI(d,e){var w=null
return this.an9(w,w,d,w,e,w)},
ak(){var w=this,v=C.ih2(w.c),u=w.e,t=B.T(u).k("N<1,aa<p,@>>")
u=B.B(new B.N(u,new C.ci7(),t),t.k("aj.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bck.prototype={}
C.X3.prototype={
S(){return new C.aGn(new B.at(A.ax,$.ax()),B.m5(0,null,null),B.a([],x.m))},
Vm(d){return this.d.$1(d)}}
C.aGn.prototype={
Z(){var w,v=this
v.a4()
w=J.b8(v.a.c,new C.ecO(),x.i)
w=B.B(w,w.$ti.k("aj.E"))
A.d.b_(w,new C.ecP())
v.d=w
v.K0()},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.x.t()
this.a2()},
agf(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$agf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.K0()
u.l(new C.ecI(u))
t=u.a
t.toString
s=u.d
s===$&&B.d()
w=2
return B.b(t.Vm(s),$async$agf)
case 2:r=e
if(u.c!=null){u.l(new C.ecJ(u))
t=u.c.L(x.q).f
s=B.c(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dt:A.aB,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$agf,v)},
aa8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.d()
s=new C.iv(q,"New Category",A.Io,4284773515,D.aDW,p.length)
t.l(new C.ecr(t,s))
t.K0()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ce(null,null,!0,null,new C.ecs(s),p,null,!0,!0,x.i),$async$aa8)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ect(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa8,v)},
a30(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a30=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.l(new C.ecF(t,p))
q.bO(0,A.ci)
q=t.a.e
s=t.d
s===$&&B.d()
w=3
return B.b(C.ci4(p,q,s),$async$a30)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ecG(t,r))
$.aU.x1$.push(new C.ecH(t))
case 1:return B.h(u,v)}})
return B.i($async$a30,v)},
acb(d){return this.bSO(d)},
bSO(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$acb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.d()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ecz(t),r,null,!0,!0,x.i),$async$acb)
case 2:s=f
if(s!=null)u.l(new C.ecA(u,d,s))
return B.h(null,v)}})
return B.i($async$acb,v)},
bQs(d){this.l(new C.ecy(this,d))
this.K0()},
K0(){var w,v,u=this.d
u===$&&B.d()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bgx(v)},
cj7(d,e){var w={}
w.a=e
this.l(new C.ecE(w,this,d))},
a_b(d){return this.c84(d)},
c84(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_b=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ea(new C.ecD(u,d),!1,null,x.H)
w=2
return B.b(B.a8(s,!1).cb(t),$async$a_b)
case 2:return B.h(null,v)}})
return B.i($async$a_b,v)},
bIF(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.h7,A.bs],l):B.a([A.pu,A.eV],l)
w=B.m(16)
v=B.K(m?A.db.j(0.35):A.dC,A.r,1)
u=B.W(A.ef,m?A.dC:A.dV,n,n,n,n)
t=B.E(B.c("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a3p:X.PQ
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.aa,t,B.W(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.h,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ecv(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.S],r)
t=o.y
if(t.length!==0){q=(m?D.uE:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.kx(!0,n,o.x,new C.ecw(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.ag2,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.cr,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bB(n,new B.b6(4,B.m(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.al,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ecx(o),n,!1,n,n,!1,n,!0,n,A.ae,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcxV()
p=B.bn(A.bp,n,n,n,n,n,A.jz,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JZ(t,A.bp,n),A.d8,B.bI(o.f?A.ry:D.ata,n,m,p)],r),A.dJ,n,A.e,A.h,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.am,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.m),A.iX,n,n,n,A.HG,A.bG,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bck(t),r=t?A.bB:A.cj,q=t?A.bB:u,p=t?A.aS:A.a_,o=B.c("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gceN()
if(n)n=A.Lg
else n=B.W(A.zU,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eS(B.a([B.hs(n,B.c("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXV(A.aN,u,A.Z2,A.p0,D.h9A,v.gbES())
q=v.bIF(s)
n=B.c("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.d()
return B.c5(o,r,B.x(B.a([q,new B.D(A.HG,n,u),B.E(G.hA9(!1,new C.ecN(v,s),m.length,v.gcj6(),D.bHb,u,!1),1)],w),A.am,u,A.e,A.h,0,A.p),u,!1,!1,p,u)}}
C.QO.prototype={
S(){return new C.bei()}}
C.bei.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bd(w.b,A.b6,A.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.O(d).ax.a===A.I,q=r?D.uE:A.c,p=B.c("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.d()
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c89,A.y,!0,s,!0,s,!1,s,A.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ae,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cf4,new C.cXS(t),w),w.k("aj.E"))
w=B.bZ(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.dg_,new C.cXT(t),v),v.k("aj.E"))
u=x.p
v=B.ca(B.x(B.a([o,A.af,w,A.af,B.bZ(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.M,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.eh(B.a([B.bO(!1,A.dr,s,s,!0,s,s,s,new C.cXU(d),s,s),B.bI(A.rE,s,new C.cXV(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1G.prototype={
S(){return new C.aIr()},
pp(d){return this.d.$1(d)}}
C.aIr.prototype={
Z(){this.a4()
this.d=B.bs(this.a.c.e,!0,x.u)},
aA9(){var w=this.a,v=w.c,u=this.d
u===$&&B.d()
return w.pp(v.bgw(u))},
aaa(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aaa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.d()
w=2
return B.b(u.b4x(new C.iG("q_"+1000*s,"",D.dek,null,!1,r.length)),$async$aaa)
case 2:t=e
if(t!=null){u.l(new C.f6n(u,t))
u.aA9()}return B.h(null,v)}})
return B.i($async$aaa,v)},
b4x(d){var w,v=this.c
v.toString
w=B.ea(new C.f6o(d),!1,null,x.u)
return B.a8(v,!1).cb(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bB:A.cj,s=u?A.bB:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eS(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.c(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXV(A.aN,v,A.Z2,A.p0,D.hfz,w.gbFj())
q=w.d
q===$&&B.d()
q=q.length
if(q===0){q=B.as(B.c("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hP(A.t,v,new C.f6t(w,new C.bck(u)),q,D.bHk,v,A.ah,new C.f6u(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1F.prototype={
S(){return new C.aIq()}}
C.aIq.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bd(w.b,A.b6,A.aP),$.ax())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c6(v.e,D.a9v)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a2()},
age(){var w=0,v=B.j(x.H),u=this,t
var $async$age=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DT(78,1920),$async$age)
case 2:t=e
if(t!=null)u.l(new C.f6j(u,t))
return B.h(null,v)}})
return B.i($async$age,v)},
ahn(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ea(new C.f6h(u),!1,null,x.dZ)
w=2
return B.b(B.a8(r,!1).cb(t),$async$ahn)
case 2:s=e
if(s!=null)u.l(new C.f6i(u,s))
return B.h(null,v)}})
return B.i($async$ahn,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bB:A.cj,f=h?A.bB:i,e=h?A.aS:A.a_,d=B.c("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eS(B.a([B.da(N.R_,i,A.rE,new C.f6l(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.ar],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.c("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bu(e,B.aSN(B.m(14),A.bZ,140,A.Dm,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gceM(),i,i,i,i,i,i,!1,A.a4)
e=B.c("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aM:A.bn,A.r,1)
s=j.d
s===$&&B.d()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bB(i,A.eU,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cF,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.al,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ae,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JZ(j.d,i,i)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.m),i,i,i,i,A.es,i,i,i)
u=B.c("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iZ(A.aN,i,i,A.ag,i,new C.f6m(j),i,B.c("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.c("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.c("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uE:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.c_1,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.m),i,i,i,i,A.bl,i,i,i)
l=B.c("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.d()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.at,B.c(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.B,i,A.e,A.h,0,A.p),1)
return B.c5(d,g,B.cn(B.a([f,A.P,w,A.dc,e,A.P,v,A.aO,u,A.P,t,A.at,s,A.af,B.aF(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.ev,l,B.W(A.zQ,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.m),i,i,i,i,A.fc,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gckJ(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bQ,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.deM.prototype={}
C.X4.prototype={
S(){return new C.aGp(B.kg(!0,null,!0,!0,null,null,!1))}}
C.aGp.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dJ(q.a.c,new C.edo())
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
q.d=new B.at(new B.bd(w,A.b6,A.aP),$.ax())},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.f.t()
this.a2()},
aAa(d,e){var w,v,u,t,s,r=this.d
r===$&&B.d()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.az(v,r,u)+e
s=A.a.ol(v,r,u,t)
this.d.bO(0,new B.bd(s,B.ht(A.bD,r+t.length),A.aP))},
b2x(d){var w,v,u,t,s=this.d
s===$&&B.d()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.ol(w,v,v,u)
this.d.bO(0,new B.bd(t,B.ht(A.bD,v+u.length),A.aP))},
adU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DT(78,1920),$async$adU)
case 3:s=e
if(s==null){w=1
break}t.l(new C.ed4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
ZC(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i9().a7u(A.eZ),$async$ZC)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fs(),$async$ZC)
case 4:t.l(new r.ed9(t,e))
case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
adV(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.at(A.ax,t)
r=new B.at(new B.bd("https://",A.b6,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ed7(s,r),q,null,!0,!0,x.y),$async$adV)
case 2:if(e===!0)u.l(new C.ed8(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adV,v)},
bJC(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.d()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ed0(),B.T(p).k("N<1,p>")).c0(0,new C.ed1())
for(p=J.aT(w.a),v=new B.eI(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.m0("heading",A.a.i(A.a.aY(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.m0("bullets",new B.N(B.a(s.split("\n"),u),new C.ed2(),t).c0(0,new C.ed3()).aM(0,"\n"),r,r))
else q.push(new C.m0("text",s,r,r))}p=this.e
p===$&&B.d()
A.d.u(q,p)
if(q.length===0)q.push(D.a9v)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.deM(n),l=n?A.aw:A.hv,k=B.c(p.a.d,o,o,o,o,o,o,A.cH,o,o,o),j=x.p
k=B.eS(B.a([B.da(N.R_,o,A.adk,new C.ede(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hW
v=B.bZ(A.bI,B.a([p.wm(A.PR,"Bold",new C.edf(p),m),p.wm(A.a3r,"Italic",new C.edg(p),m),p.wm(A.aqv,"Underline",new C.edh(p),m),p.wm(A0.a3y,"Heading",new C.edi(p),m),p.wm(A.PS,"Bullets",new C.edj(p),m),p.wm(A.aqu,"Align",new C.edk(),m),p.wm(A.I4,"Link",p.gc4I(),m),p.wm(A.r6,"Image",p.gc4H(),m),p.wm(P.a3M,"Video",p.gc4J(),m),p.wm(A.a4V,"Signature",new C.edl(p),m),p.wm(P.PT,"Divider",new C.edm(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.ak,B.c("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cX:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.am,o,A.e,A.h,0,A.p),A.f,w,o,o,o,o,o,o,A.ap7,o,o,o)
v=n?A.bB:A.c
u=B.m(12)
t=B.K(n?A.cR:A.dT,A.r,1)
s=B.a([new B.ab(0,A.H,A.v.j(n?0.35:0.08),A.cP,16)],x.V)
r=p.d
r===$&&B.d()
q=B.l(o,o,n?A.iG:A.aw,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bQ,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bB(o,A.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cX:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.m),o,o,o,o,T.D9,o,o,o),o),1)],j)
n=p.e
n===$&&B.d()
if(n.length!==0){n=new B.ii(n,B.T(n).k("ii<1>"))
j.push(B.o(o,B.bZ(A.bI,n.gdQ(n).dO(0,new C.edn(p,m),x.g5).dm(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.P4,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.h,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bB:A.c,t=B.m(8),s=B.m(8)
return B.hh(B.aF(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cr,B.W(d,v?A.iG:A.aw,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.dtj.prototype={}
C.aE_.prototype={
a7(){return"_KbView."+this.b}}
C.asq.prototype={
S(){return new C.aGo(D.b2K)},
cZ3(d,e){return this.e.$2$size(d,e)}}
C.aGo.prototype={
gaD4(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gcAb(){var w,v,u,t,s,r=this.gaD4()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ceO(d){this.l(new C.ecY(this,d))},
clX(d){this.l(new C.ecZ(this,d))},
bHJ(){this.l(new C.ecQ(this))},
bHL(){this.l(new C.ecR(this))},
gbah(){var w=B.bs(this.a.c,!0,x.i)
A.d.b_(w,new C.ed_())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dtj(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eV.j(0.55),A.nJ.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aM:A.fA).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIS(f)
break
case 1:g=i.gaD4()
g.toString
g=i.bJA(f,g)
break
case 2:u=i.gaD4()
u.toString
t=i.gcAb()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.c(t.b,h,h,h,h,h,h,D.fJx,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.m),h,h,h,h,A.bG,h,h,1/0)
q=g?A.aw:A.c
p=B.m(16)
o=B.K(g?A.aM:A.bn,A.r,1)
n=B.a([new B.ab(0,A.H,A.v.j(g?0.28:0.06),A.eA,10)],x.V)
m=g?A.h7:A.pu
l=B.m(8)
k=B.W(A.o1,g?A.dC:A.dV,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDY(f,i.gbHK(),u.c,s,"Answer",h),B.E(B.cn(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e5,B.c("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dC:A.dV,h,h,h,h,h,h,h,h,11,h,h,A.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.M,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.m),h,h,h,A.e9,A.hl,h,h,h),new C.b2W(t.c,t.e,f,h)],j),A.B,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.m),h,h,h,h,A.bQ,h,h,1/0)],j),h,h,A.anR,h,h,A.ah,!1),1)],j),A.am,h,A.e,A.h,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aX,A.b1,A.x,e,h,h),A.m),h,h,h,A.ia,h,h,h,h)},
b_A(d){var w,v,u,t=null,s=d.a,r=s?D.uE:A.c,q=A.aD.j(0.22)
q=B.a([new B.ab(0,A.H,q,A.J,14),new B.ab(0,A.H,A.v.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aM:A.fA,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i7(v.cZ3(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.ak,B.c("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dt,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.h,0,A.p)},
bIS(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_A(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_A(d),t,t,t)
w=d.a
v=B.c("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cn(B.a([s,A.aA,v,A.ak,B.c("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iE(!0,t,t,A.y,E.aW8,new C.ecT(u,d),u.gbah().length,t,A.e4,A.ah,!0)],x.p),t,t,D.bHl,t,t,A.ah,!1)},
bJA(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b_(r,new C.ecV())
w=B.b1(e.d)
v=d.a
u=B.c("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.c("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hP(A.t,s,new C.ecW(this,r,d,e),t,A.wW,s,A.ah,new C.ecX(),!1)
return B.x(B.a([new C.aDY(d,this.gbHI(),e.c,w,e.b,s),new B.D(A.wY,u,s),B.E(v,1)],x.p),A.am,s,A.e,A.h,0,A.p)}}
C.aDY.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.W(A.eH,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.W(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.m),v,v,v,v,A.cr,v,v,v)
return new B.D(D.bKJ,B.A(B.a([t,q,A.ar,B.E(B.c(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v),v)}}
C.adC.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uE:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aM:A.bn,A.r,1),n=B.a([new B.ab(0,A.H,A.v.j(t?0.28:0.06),A.dR,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.W(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.m),w,40,w,w,w,w,w,40)
return new B.fJ(1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.ak,B.c(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.F,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.h,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.m),w,w,w,w,A.cr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b2W.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.h7:A.pu
u=B.m(8)
t=B.W(A.vr,w?A.dC:A.dV,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.d8,B.c("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dC:A.dV,s,s,s,s,s,s,s,s,10,s,s,A.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.M,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.m),s,s,s,A.cy,A.eY,s,s,s))}A.d.u(p,J.b8(this.c,new C.ci5(r),x.l))
return B.x(p,A.B,s,A.e,A.h,0,A.p)}}
C.ads.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bF_,B.c(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hK,B.bu(B.m(12),B.aSN(r,A.bZ,160,A.r6,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hK,new C.aDZ(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wS,B.aM(!1,r,!0,B.c(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.ct:A.bp,r,A.nq,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cR9(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iV(v?A.aM:A.bn,r,r,r,r,r)
q=B.c(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cB:A.aM,r,r,r,r,r,r,r,r,r,A.cL,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.zf,B.x(B.a([u,q,A.aO,t,A.at,B.c("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.B,r,A.e,A.h,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cM(new B.X(B.a(q.b.split("\n"),x.s),new C.cRa(),x.cc),new C.cRb(s),v),v.k("M.E"))
return new B.D(A.kf,B.x(q,A.B,r,A.e,A.h,0,A.p),r)
case"divider":return new B.D(A.hK,B.iV(s.d.a?A.aM:A.bn,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bL
return new B.D(A.eK,C.iaT(q,s.d),r)}}}
C.aDZ.prototype={
S(){return new C.bkt()}}
C.bkt.prototype={
Z(){this.a4()
this.agg()},
agg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$agg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d7(n,"http")&&!J.d7(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.a_0(B.cF(n,0,null),null)
w=7
return B.b(J.a4F(q),$async$agg)
case 7:if(r.c==null){w=1
break}r.l(new C.dtk(r,q))
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
return B.i($async$agg,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fy
u=B.m(12)
return B.o(A.z,B.W(A.rf,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.m),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajR(v)
return B.bu(w,new B.fJ(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AS(s,t),B.aH(t,t,t,t,B.W(v.f?A.aqC:A.PU,A.c,t,t,t,44),t,t,t,new C.dtm(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.atg.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JQ.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.t0.prototype={}
C.ast.prototype={
S(){var w=null
return new C.aGq(new B.at(A.ax,$.ax()),B.m5(0,w,w),B.a([],x.m),D.EK,D.aMZ,w,w)},
ge4(){return this.d}}
C.aGq.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.nS,null,1,null,v)
w.eU(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7T).a},
t(){var w=this,v=w.as
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.e.t()
w.bAX()},
gat5(){var w,v,u,t,s=this.x
if(s===D.EL)return null
s=s===D.EK
w=s?D.a7T:D.a6X
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cAZ(d){return this.l(new C.edC(this,d))},
aCQ(){$.aU.x1$.push(new C.edt(this))},
JQ(d){return this.cAp(d)},
b2y(){return this.JQ(null)},
cAp(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JQ=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JQ)
case 3:e=b2
if(!e){w=1
break}B.k1()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aS(a0,new C.edv())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hFZ(a8)&&a1
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
l=C.hFZ(a8)&&!p
q.l(new C.edw(q,a8))
q.aCQ()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.l(new C.edx(q))
q.aCQ()
w=1
break}t=5
j=B.nq(k)
i=new B.N(a0,new C.edy(),B.T(a0).k("N<1,p>")).aM(0,"\n\n")
a0=C.ivd(m,p,o,q.x,n,q.y,q.gat5(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.v(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.v(a8)
w=8
return B.b(B.ro(j,h,A.id,null,null),$async$JQ)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bG0(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.l(new C.edz(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.l(new C.edA(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.l(new C.edB(q))
q.aCQ()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JQ,v)},
bNG(){return this.JQ("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.Ha:D.btQ,o=x.p
o=B.a([B.x(B.a([B.E(s.czE(q),1),s.bMT(q)],o),A.l,r,A.e,A.h,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNF()
u=B.m(28)
t=B.a([A.aQ,A.au],x.O)
o.push(B.ao(78,B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eG(D.eCN,r,new B.n(r,r,r,u,B.a([new B.ab(0,A.H,A.aQ.j(0.45),A.cP,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r),A.np,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.np,r,r,A.ai),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
czE(d){var w,v,u,t=this,s=null
if(t.x===D.EL)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hhM(s,!1,A.L,0,0,w,B.he_(t.cFz(d),A.Zm,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.W(A.asZ,A.aD.j(0.5),s,s,s,52)
w.push(B.b9v(new B.D(A.eG,B.x(B.a([u,A.aA,B.c("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.e2,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aA,B.bZ(A.fT,B.a([t.akB("Full bongo love song ABAB",d),t.akB("Mix: group vs private jet \u2014 which flies?",d),t.akB("Song from John 3:16 + matching verses",d),t.akB("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.h,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nI(D.bFG,B.Zp(new B.oZ(new C.edu(t,d),u+v,!0,!0,!0,0,B.tr(),s)),s))}return B.we(0,s,A.t,t.e,A.y,s,s,V.afY,s,s,!1,s,A.ah,!1,w)},
cFz(d){var w=this.as
w===$&&B.d()
return B.c7(w,new C.edJ(this,d),null)},
cFB(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.edL(v),r=A.v.j(d?0.35:0.06),q=B.m(14),p=B.K(A.bc.j(0.35),A.r,1),o=v.gat5()
o=o==null?u:o.c
o=B.c(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fv,u,u,u)
w=v.gat5()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.c(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.aa,w,B.W(v.w?A.Qm:A.ty,A.bc,u,u,u,20)],x.p),A.l,u,A.e,A.h,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.m),u,u,u,u,A.nW,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
ayi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b5,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.ct],x.O)
break
case 2:w=B.a([A.bA,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.eds(this,d)
r=B.m(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.v.j(g?0.3:0.05)
p=B.c(f,n,n,n,n,n,n,A.Fv,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bq
return B.E(B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.c(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.h,0,A.p),n,n,A.b_,new B.n(q,n,n,r,n,w,A.m),A.a3,n,n,n,n,A.jU,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cFC(d,e){var w,v,u,t=this,s=null,r=t.x===D.EK?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bc.j(e?0.25:0.15)
else r=A.v.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.edM(t,d)
u=B.c(d.c,s,s,s,s,s,s,A.Ww,s,s,s)
return B.aF(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.fM,B.A(B.a([u,A.d8,B.c(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.M,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
akB(d,e){var w=null,v=B.c(d,w,w,w,w,w,w,A.add,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mF(w,u,v,w,this.r?w:new C.edD(this,d),w,w,w,w)},
bMT(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aoS,B.c("$"+A.i.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.EL?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bB(r,A.eU,r,A.hm,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.i_,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.al,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.edp(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.edq(s)
l.push(B.A(B.a([v,new B.JZ(w,A.aD,r),B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eG(u?D.eD3:D.c1C,r,D.baE,42,r,42),A.cK,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cK,r,r,A.ai)],m),A.dJ,r,A.e,A.h,0,r,r))
return B.o(r,B.x(l,A.am,r,A.e,A.M,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.m),r,r,r,A.to,A.a1A,r,r,r)}}
C.aOO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
C.X5.prototype={
ak(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0o.prototype={
S(){return new C.aDo(null,null)},
blq(){return this.f.$0()}}
C.aDo.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,D.bE4,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,A.nR,u,1,u,v)
w.eU(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.lY,u,1,u,v)
w.cK(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bp(u,A.zb,u,1,u,v)
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
w.bzL()},
ceQ(){var w=this.d
w===$&&B.d()
w.eJ(0).bE(new C.dqF(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aE(d,A.bY,x.w).w.a.a-32,360),h=A.v.j(0.82),g=k.gceP(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.d()
e[v]=new B.E7(new C.dqG(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.d()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ab(2,A.H,A.au.j(0.35),A.J,40),new B.ab(0,A.H,A.aN.j(0.25),A.h0,28)],x.V)
r=k.e
r===$&&B.d()
q=k.r
q===$&&B.d()
q=B.c7(new B.hi(B.a([r,q],x.U)),new C.dqH(k),j)
r=B.ol(A.k4,D.hcJ,new C.dqI())
p=B.c("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cF,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2z(A.jX,"Resets in 24h"),A.aa,k.b2z(A.o1,"Help Topics ready")],o),A.l,j,A.b9,A.h,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dV(D.h6N,new C.dqJ(k),B.dh(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kI,j,new B.ba(B.m(14),A.a1),new B.av(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.ar)
k.a.toString
l=B.m(14)
m.push(B.E(B.bI(D.hcz,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kI,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c7(w,new C.dqK(k),B.o(j,B.x(B.a([q,A.aA,r,A.S,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.h,0,j,j)],o),A.l,j,A.e,A.M,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.cb0,A.m),j,j,j,j,W.aoI,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dqL(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aF(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.ai)},
b2z(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.W(d,A.au,w,w,w,13),A.e5,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.fM,w,w,w)}}
C.aNF.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.OZ.prototype={}
C.qm.prototype={}
C.at2.prototype={
S(){return new C.aGN(B.a([],x.E),B.a([],x.s))}}
C.aGN.prototype={
gatu(){return A.i.D(B.Mf(this.a.c.a,new C.es3(this)),0,1/0)},
aag(){var w,v=this,u=v.d,t=v.gatu()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rn(u.a,t,!0,!1)},
Kn(d,e){var w,v,u,t=this,s=t.gatu(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gatu()
if(w<v-0.005)B.hLJ(t.a.c.a,v-w)
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
w=$.JD+1
$.JD=w
if(w===1){w=$.hx4
if(w!=null)w.$0()}v=$.hg2.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m8(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aSq(u,A.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w8(w,u,r,q,s.e,p)}o.d=t}o.Qc()
o.aag()
$.aU.x1$.push(new C.esK(o))
o.Q=B.d5(A.oL,new C.esL(o))
o.as=B.d5(A.fX,new C.esM(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i2y()
w.a2()},
cHN(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9s(v,w)){if(C.hg4(p,q.e)){q.l(new C.ess(q,p))
q.yJ(!1,!0,!0)}else if(q.c!=null)q.l(new C.est())
return}if(!C.ckm(v.c?v.bU():v)){q.l(new C.esu(p))
q.b2I(!1)
return}u=p.gDd()
if(u<=0)return
t=w.cV(B.c0(B.bD(w),B.bL(w),B.bW(w),12,0,0,0,0))
s=C.hg5(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.l(new C.esv())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.esw(r))){q.l(new C.esx(p,w,u))
return}q.l(new C.esy(q,p,u,w))
q.aAQ(new B.dd(r,p.a,u,A.hh,A.fF,"Clock-in daily earnings (local)",null,null,A.cx,w))},
jo(d){if(d===A.h5)this.Fs()},
Qc(){var w,v,u,t,s,r,q,p=this.d
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
T7(d){return this.cGn(d)},
cGn(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$T7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Qc()
t.Kn(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dM(s,x.H),$async$T7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$T7,v)},
Fs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fs=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(G.Aj(q.w,k,l,j,m,!1,n),$async$Fs)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.l(new C.esn(q,p))
q.T7(!1)}w=8
return B.b(q.Kz(),$async$Fs)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ac(h)
$.am.$1("[growth income] pull wallet: "+B.v(o))
w=9
return B.b(q.Kz(),$async$Fs)
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
return B.i($async$Fs,v)},
Oz(d){return this.bGT(d)},
bGS(){return this.Oz(null)},
bGT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Oz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Oz)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d_(t.w,x.N)
r=s.qI("ngmy_gi_credited_txn_ids_"+r)
q.u(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.ju(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.I)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.h3&&l.x===A.cx&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.l(new C.es4(j,t,i))
q.u(0,p)
r=B.B(q,B.a5(q).k("ci.E"))
t.w=r
w=4
return B.b(B.at4(t.a.c.a,r),$async$Oz)
case 4:t.aAi(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Balance updated: +$"+B.dI(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Oz,v)},
Kz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kz=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("X<1>")
a4=B.B(new B.X(a2,new C.eso(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,p>")
e=B.B(new B.N(a2,new C.esp(),a3),a3.k("aj.E"))
q=e
w=9
return B.b(B.lO("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kz)
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
j=A.d.bk(r.e,new C.esq(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cx
else a0=J.z(k,2)?A.kR:A.dM
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dM&&h===A.cx&&a3[j].d===A.h3)J.c6(a6,l)
if(i===A.dM&&h===A.kR&&r.e[j].d===A.fa){g=r.d
if(g!=null){r.Kn(g.d+r.e[j].c,!1)
r.aAi(!1,!0)}}}}if(o&&r.c!=null)r.l(new C.esr())
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
return B.b(r.Oz(a6),$async$Kz)
case 13:w=11
break
case 12:w=14
return B.b(r.bGS(),$async$Kz)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kz,v)},
R_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$R_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vm(i.a,i),$async$R_)
case 3:h=e
if(t.c==null){w=1
break}t.l(new C.es8(t,h))
t.Qc()
t.aag()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Aj(s[0],p,q,o,r,!0,i),$async$R_)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Qc()
t.aag()
k=C.hg4(n,m)
if(k)t.Kn(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hxV(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Qc()
if(t.c==null){w=1
break}t.l(new C.es9(t,n,m,l))
if(i){t.yJ(!1,!0,!0)
if(j==="reset"){B.hwE(t.a.c.a)
i=t.c
if(i!=null)B.hwH(i,null)}else if(j==="warn2"){B.hwF(t.a.c.a)
i=t.c
if(i!=null)C.hwI(i)}}else if(k)t.yJ(!1,!0,!0)
else t.T7(!1)
case 1:return B.h(u,v)}})
return B.i($async$R_,v)},
yJ(d,e,f){return this.cpE(d,e,f)},
aAi(d,e){return this.yJ(d,!1,e)},
b2I(d){return this.yJ(!1,d,!1)},
cpE(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).ab()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.t_(r,o,q,!1,t.w,s,p),$async$yJ)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JJ(t.w,p,q,s,o,r)
if(f)t.T7(d)
case 1:return B.h(u,v)}})
return B.i($async$yJ,v)},
cf7(){this.l(new C.esh())
this.aAi(!1,!0)},
ah0(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cx&&B.tp(d)){w=r.a
w.f.$1(new B.dd(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cki(q,d)
v=q.d=B.Mf(r.a.c.a,new C.ese(r))
r.at=r.a.c.d=v
B.rn(q.a,v,!0,!1)
if(r.c!=null)r.l(new C.esf(r,d))
r.yJ(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.dd(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dM
if(w&&d.d===A.h3)s=!1
else if(w&&d.d===A.fa){r.Kn(q.d-d.c,!0)
s=!0}else{C.cki(q,d)
w=d.d
s=w===A.fa||w===A.ky
r.Kn(q.d,s)}r.l(new C.esg(r,d))
w=d.d
r.yJ(s,e,w===A.fa||w===A.ky||d.x===A.cx||w===A.hh)},
aAQ(d){return this.ah0(d,!0,!1)},
b3R(d,e){return this.ah0(d,!0,e)},
b3Q(d,e){return this.ah0(d,e,!1)},
cil(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.ixB(u,e,d)){v.mu("This plan is already active.")
return}w=B.hLd(u.a,d,e)
if(C.itF(u.a,v.e,w)){v.mu("You already own this plan.")
return}if(u.d<g){v.mu("Insufficient balance. Add funds in the Wallet tab first.")
return}v.l(new C.esi(v))
v.l(new C.esj(v,u,new B.w8(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAQ(new B.dd(w,u.a,g,A.ky,A.fF,"Direct investment buy: "+d,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.l(new C.esk(v))
v.mu("Plan purchased: "+d)},
mu(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a1e(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.apK(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a1e)
case 3:w=4
return B.b(t.R_(),$async$a1e)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a1e,v)},
ahu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.ake(r,B.a([r],x.d9),A.Tv,t.a.d,t.gb3P(),t.gb2H(),null),!1,null,x.X),$async$ahu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahu,v)},
ahs(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.ano(r,t.a.d,t.e,t.gb3P(),t.gb2H(),new C.esm(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ahs)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahs,v)},
aeH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hg4(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2I(!0),$async$aeH)
case 5:case 4:if(j.x==null){t.mu("Choose an investment plan first, then come back to clock in.")
t.l(new C.esa(t))
w=1
break}if(B.lF(r)===6||B.lF(r)===7){t.mu("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hxW(r)){t.mu("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9s(q,r)&&j.fy>0){t.mu("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aTa(q,r))if(!B.aTa(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIN(m.y,l,m.a))}}q=B.hKB(q,r)}else q=p
else q=p}else q=!1
if(q){t.mu("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mu("You are already clocked in for today.")
w=1
break}k=C.i40(r)
q=j.a
t.l(new C.esb(j,r,k))
t.b3Q(new B.dd("local_clockin_manual_"+q+"_"+s,j.a,0,A.hh,A.fF,"Clock-in session started (local)",null,null,A.cx,r),!1)
t.mu("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aeH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nN:A.qI
if(l.d==null)return B.ed(A.lj,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fRJ
u=u==null?k:u.$0()
u=J.aT(u==null?A.iM:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.am(0,q)||B.tp(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cW(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b9(v,v.$ti.k("b9<2>")),w)
v=l.e
A.d.u(w,new B.X(v,new C.esC(),B.T(v).k("X<1>")))
A.d.b_(w,new C.esD())
v=l.d
v.toString
u=C.ijc(l.a.c)
t=l.d
t.toString
t=B.ed(new C.aob(t,l.a.e,l.z,l.gcik(),l.aXR(),D.hHh),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ed(new C.aEc(l.aXR(),q,n,o,w,new C.esE(l),l.gckr(),new C.esF(l),D.hHi),j,!0)
m=B.aE(d,k,x.w).w
n=l.y
return new B.XX(n,new C.esG(l),B.aF(!1,A.a3,!0,k,new B.a6(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.ed(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aEb(v,u,w,l.gc86(),new C.esH(l),new C.esI(l),new C.esJ(d),l.gclj(),l.gcle(),D.hHg),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bJj(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aXR(){var w=null,v=B.a([D.f6.j(0.24),A.a_.j(0.72)],x.O)
return B.hh(B.aM(!1,w,!0,B.o(A.z,D.c6w,A.f,w,w,new B.n(w,w,B.K(D.f6.j(0.38),A.r,1),w,B.a([new B.ab(0,A.H,D.f6.j(0.18),A.J,16)],x.V),new B.a7(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,new C.es7(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bJj(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ab(0,A.H,A.v.j(0.5),A.eT,24),new B.ab(-2,A.H,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.P4,B.bm(!0,B.as(new B.cP(K.ag1,B.o(w,B.cf(new C.es5(this)),A.f,w,w,new B.n(w,w,u,v,t,D.caq,A.m),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9N(d){var w=null,v=this.y===d,u=D.diQ[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dz(w,!0,w,B.ay(A.c1,B.qu(B.oG(v?B.W(s,D.ahl,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.W(s,A.c.j(0.62),w,w,w,19),A.bC,B.c(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.h,0,A.p),A.iX,B.pZ(),A.b_,A.b_,B.LW())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esd(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cf,w),1)}}
C.aEb.prototype={
c6G(d){return C.hg5(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("X<1>")
u=B.pP(new B.X(v,new C.dvk(),u),3,u.k("M.E"))
t=B.B(u,B.a5(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9s(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hxW(r)
m=v.gDd()
l=B.a([D.f6.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f6.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ab(0,A.H,D.f6.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.W(A.hN,D.f6,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cK,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ab(0,A.H,A.b2.j(0.45),A.cP,16)],j)
h=B.m(12)
g=x.p
j=B.bV3(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a6(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bZn,A.f,e,e,new B.n(A.iV.j(0.78),e,e,h,e,e,A.m),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.cc2,A.m),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c5v,A.f,e,e,new B.n(A.bt,e,B.K(D.akk,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hAC(A.fB,new C.dvl(),k)
k=B.A(B.a([B.E(C.hAB(new C.dvm(f,A.rW,n),new B.V(Date.now(),0,!1),h,k),1),A.pg,B.E(new B.wt(new C.dvn(f,A.rW),e,new B.hi(B.a([$.zo(),$.a4C()],x.U)),e),1)],g),A.l,e,A.e,A.h,0,e,e)
h=f.ca_(A.rW,D.f6)
v=B.E(f.cDQ("Total Profit","$"+B.dI(v.e),A.rW),1)
u=u?e:s.b
return B.ed(B.ca(B.x(B.a([j,A.S,k,A.af,new C.aEa(f.d,m,q,p,n,o,D.f6,f.gc6F(),f.f,e),A.af,h,A.S,B.A(B.a([v,A.pg,B.E(f.bac("Total Investment","$"+B.dI(u==null?0:u),A.rW,f.r),1)],g),A.l,e,A.e,A.h,0,e,e),A.S,f.c6B(d,t,D.f6,w)],g),A.am,e,A.e,A.h,0,A.p),A.t,e,A.y,e,e,A.a27,e,e,A.ah),D.akk,!0)},
aAh(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ab(0,A.H,A.v.j(0.4),A.dp,18)],x.V)
return B.o(w,B.bu(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bP(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.m),A.bm,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.caV,A.m),w,w,w,w,w,w,w,w)},
b2G(d,e,f,g){return this.aAh(d,e,f,A.ag,g)},
bcn(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2G(new B.a6(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bGe,B.x(B.a([B.o(w,B.A(B.a([B.W(e,f,w,w,w,15),A.e5,B.c(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.M,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.m),w,w,w,w,A.aoX,w,w,w),A.aY,new B.dl(A.dx,A.a5,A.f,B.c(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.B,w,A.e,A.h,0,A.p),w)],r),w),w),f,A.lM,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
ca_(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.bb(v,v,v,v),s,s,A.m),s,D.d1p[w],s,D.bJX,s,s,s,5))}r=B.o(s,B.A(o,A.dJ,s,A.b9,A.h,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h8B,A.bC,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ab(0,A.H,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bf,new B.d2(1,A.cg,B.c("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.h,0,s,s)],p),A.B,s,A.e,A.h,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.v.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aAh(B.A(B.a([r,D.ftV,q,A.aa,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.W(A.o5,e.j(0.95),s,s,s,21),A.rA,B.c("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.F,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.h,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.m),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.h,0,s,s),e,A.a5,A.a1E,26)},
bac(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b76,v,v,A.m),v,v,v,A.nU,v,v,v,5),r=x.p
r=B.a([s,A.bb,B.E(B.x(B.a([B.A(B.a([B.W(u?A.tC:A.A4,t,v,v,v,14),A.e5,new B.d2(1,A.cg,B.c(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.h,0,v,v),A.ak,new B.dl(A.dx,A.a5,A.f,B.c(e,v,1,v,v,v,v,D.fDh,v,v,v),v)],r),A.B,v,A.b9,A.h,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(Z.OU,B.W(A.eM,A.c.j(0.35),v,v,v,v),v))
w=this.b2G(new B.a6(v,66,B.A(r,A.l,v,A.e,A.h,0,v,v),v),t,A.lN,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cDQ(d,e,f){return this.bac(d,e,f,null)},
c6B(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ab(0,A.H,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.c("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.Wd,k,A.aY,B.o(m,B.c(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.m),m,m,m,m,A.a2k,m,m,m)],h),A.l,m,A.e,A.h,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a1s,B.x(B.a([B.W(A.he,g,m,m,m,30),A.ak,B.c("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bC,B.c("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.h,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mJ(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.fa||v===A.ky
t=u?A.hY:D.f6
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.av(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.W(u?A.tC:A.vu,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bE(r,r,r,r),new B.bb(v,v,v,v),m,new B.a7(A.ay,A.aC,A.x,s,m,m),A.m),m,38,m,m,m,m,m,38)
s=B.c(C.irw(j),m,1,A.a2,m,m,m,A.kQ,m,m,m)
q=C.hCe(j.y)
s=B.x(B.a([s,A.bC,B.c(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.B,m,A.e,A.h,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dI(j.c)
q=B.o(m,B.c(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.bb(p,p,p,p),m,m,A.m),m,m,m,m,A.o_,m,m,m)
j=C.hKe(j)
k.push(new B.D(A.HB,new B.c3(A.aL,A.e,A.h,A.l,m,A.p,m,0,B.a([v,A.bb,new B.bx(1,A.ba,s,m),B.x(B.a([q,A.cM,B.c(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dJ,m,A.e,A.h,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aAh(B.x(i,A.l,m,A.e,A.h,0,A.p),f,A.aX,D.bGq,26)}}
C.aEa.prototype={
S(){return new C.bld(null,null)},
cYJ(d){return this.z.$1(d)},
d_3(){return this.Q.$0()}}
C.bld.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,A.qV,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,D.bDV,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.qY,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.bbn()},
gbe6(){var w=new B.V(Date.now(),0,!1)
if(B.lF(w)===6||B.lF(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bbn(){var w=this,v=w.a,u=v.e||v.f||w.gbe6()
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
this.bbn()},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
w.bA1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbe6()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.dvd(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dCx:D.dCv
q=B.K((f?D.px:A.b3).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ab(0,A.H,(f?A.aE:A.bc).j(0.16),A.h0,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ada(D.px,130),h,h,h,-24,-30,h),B.ao(-36,i.ada(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ada(A.bc,120),h,h,h,-30,-36,h),B.ao(-40,i.ada(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dq(!0,B.bu(l,new B.e7(B.c7(k,new C.dve(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dq(!0,B.bu(l,new B.e7(B.c7(k,new C.dvf(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cP(D.b91,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ab(0,A.H,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.aa,new B.d2(1,A.cg,B.c(u,h,1,A.a2,h,h,h,D.fJg,h,h,h),h)],n),A.l,h,A.e,A.M,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.m),h,h,h,h,A.hm,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hAC(A.fB,new C.dvg(),l)
m.push(C.hAB(new C.dvh(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b_,new B.n(h,h,q,s,o,new B.a7(A.ay,A.aC,A.x,r,h,h),A.m),A.CT,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ada(d,e){var w=null
return new B.dq(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beM.prototype={
b2J(d,e,f,g){var w=new B.aG($.R().r,A.aj,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.ch(v,u,v+f,u))
w.E(new B.ch(v,u,v,u+f))
w.E(new B.ch(v,u,v-f,u))
w.E(new B.ch(v,u,v,t))
w.E(new B.by())
d.af(w,g)},
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.i.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.i.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2J(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.i.F(a7+p/3,1)
$.R()
n=new B.ar(A.T,A.Q,A.W,A.X,A.U)
n.b=A.ac
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
e=new B.ar(A.T,A.Q,A.W,A.X,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.b=A.ac
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hQq()
h=i.b
d=h.c
h=h.a.c
i.a3(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2J(b2,o,3+g*3,i)
break
case 2:$.R()
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=A.c.j(g*0.8).gp(0)
b2.O(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.R()
a2=new B.ar(A.T,A.Q,A.W,A.X,A.U)
a2.c=1.8
a2.d=A.bH
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new B.r(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.R()
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=a9.j(p*0.85).gp(0)
b2.O(new B.r(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.R()
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=a7.j(0.28).gp(0)
i.y=A.oO
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.beL.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
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
v.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.fmn))
a5.aE(new B.a3(-18,a2,18,a2+a1*3),v)
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
v=B.bv(D.fmV,A.Fe)
u=new B.ar(A.T,A.Q,A.W,A.X,A.U)
u.r=D.aF6[A.o.F(t,6)].j(k*0.9).gp(0)
a5.ar(v,u)
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
f=D.aF6[A.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.R()
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.c=2
r.d=A.bH
r.r=f.gp(0)
a5.ah(new B.r(u+a3*a1,v+w*a1),new B.r(u+a3*g,v+w*g),r)
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.r=f.gp(0)
a5.O(new B.r(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.R()
a2=new B.ar(A.T,A.Q,A.W,A.X,A.U)
a2.r=A.c.j(k).gp(0)
a5.O(a1,5*d,a2)}},
aD(d){return d.b!==this.b}}
C.beK.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
w=B.L()
w.b=A.ac
w.c=14
v=f.d
w.r=(v?f.r:A.b3).j(0.22).gp(0)
a4.O(a1,a2-7,w)
w=B.L()
w.b=A.ac
w.c=1.7
w.r=(v?f.f:A.c).j(0.28).gp(0)
a4.O(a1,a2-1,w)
w=B.L()
w.b=A.ac
w.c=1.6
w.r=A.c.j(0.16).gp(0)
a4.O(a1,a3+8,w)
u=B.L()
u.c=1.5
u.d=A.bH
u.r=(v?f.f:A.c).j(0.22).gp(0)
for(w=a2-3,t=a2+2,s=0;s<12;++s){r=s/12*3.141592653589793*2-1.5707963267948966
a4.ah(new B.r(d+Math.cos(r)*w,a0+Math.sin(r)*w),new B.r(d+Math.cos(r)*t,a0+Math.sin(r)*t),u)}w=a4.c
J.br(w.save())
t=$.R().r
q=x.g
p=new B.aG(t,A.aj,e,e,B.a([],q))
p.E(new B.jz(B.bX(a1,a3)))
a4.mz(0,p)
p=B.bX(a1,a3)
o=B.L()
o.san(D.eKp.aA(0,B.bX(a1,a3)))
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
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f6.j(0.34),A.cV.j(0.62)],a0)
d.san(new B.a7(A.aX,A.b1,A.x,a0,e,e).aA(0,B.bX(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.ac
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aEc.prototype={
S(){var w=$.ax()
return new C.aEd(new B.at(A.ax,w),new B.at(A.ax,w))},
blj(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aEd.prototype={
t(){var w=this.d,v=$.ax()
w.V$=v
w.R$=0
w=this.e
w.V$=v
w.R$=0
this.a2()},
mu(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
cFL(d){this.a.blj(d,!0)
this.mu("Deposit submitted. Admin will review your payment proof.")
this.l(new C.dvE())},
cEl(){var w,v,u=this,t=B.cG(u.d.a.a)
if(t==null||t<=0){u.mu("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hI(w,new C.as9(v.d,t,u.gcFK(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cMw(){var w,v,u,t,s=this,r=s.d,q=B.cG(r.a.a)
if(q==null||q<=0){s.mu("Enter an amount to withdraw.")
return}if(q<10){s.mu("Minimum withdrawal is $"+B.dI(10)+".")
return}w=s.a.d.d
if(q>w){s.mu("Insufficient balance. You have $"+B.dI(w)+".")
return}w=s.e
v=C.hLH(w.a.a)
if(v.length===0){s.mu("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.blj(new B.dd("wd_"+1000*Date.now(),s.a.d.a,q,A.fa,A.lg,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dI(u)+" \u2014 You receive: $"+B.dI(q-u),null,null,A.dM,new B.V(Date.now(),0,!1)),!0)
s.mu("Withdrawal submitted \u2014 waiting for admin approval.")
r.bO(0,A.ci)
w.bO(0,A.ci)
s.l(new C.dvF())},
cJ6(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cx||!this.aZO(r)||B.hor(r))continue
q=r.d
p=q===A.fa||q===A.ky||q===A.eP
q=r.c
if(p)t+=q
else u+=q}return new B.bsm(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cJ6(),p=s.a.r,o=new B.X(p,new C.dvG(),B.T(p).k("X<1>")).gJ(0)
p=B.aE(d,A.dI,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f6.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f6.j(0.38),A.r,1)
w=B.bV3(!1,v,"WALLET",B.hh(B.aM(!1,r,!0,B.o(A.z,B.W(Q.asd,D.f6,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cK,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.cf6(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.at2(A.vu,"Deposit",0),s.at2(A.tC,"Withdraw",1),s.at2(A.h_,"History",2)],t),A.l,r,A.rl,A.h,0,r,r)
return B.ed(B.bm(!1,B.ca(B.x(B.a([w,A.bx,u,A.dc,v,A.dc,B.oG(s.f===2?s.c3q():s.c9r(),A.i9,B.pZ(),A.b_,A.b_,B.LW())],t),A.am,r,A.e,A.h,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.Cl,!0)},
cf6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cd(g,"@")
v=A.a.az(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aY(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCA(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCA(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCA(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bP(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.m),A.bm,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b4(h,h,h,new C.beb(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.cd9,A.m),h,28,h,h,h,h,h,38),A.aY,D.hht],p),A.l,h,A.e,A.h,0,h,h)
o=B.c("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asT(new C.dvq(i),D.fP5,i.a.d.a)
m=B.a([B.E(i.aSa(A.pN,"In",d),1),B.E(i.aSa(A.pO,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.jk.j(0.6),A.r,1)
m.push(B.o(h,B.c(""+f+" pending",h,h,h,h,h,h,D.fKf,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.m),h,h,h,h,A.o_,h,h,h))}return new B.fJ(1.62,B.bu(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eJA,u,t,s,r,new B.D(U.tq,B.x(B.a([q,A.aY,o,A.bC,new B.dl(A.dx,A.a5,A.f,n,h),A.aY,B.A(m,A.l,h,A.e,A.h,0,h,h),A.ak,B.c(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.B,h,A.e,A.h,0,A.p),h)],p),h),A.aq),h)},
aCA(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aSa(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.W(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bf,new B.d2(1,A.cg,new B.dl(A.dx,A.a5,A.f,B.c(e+"  $"+B.dI(f),w,w,w,w,w,w,A.nr,w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w)},
at2(d,e,f){var w=null,v=this.f===f,u=v?D.cez:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f6.j(0.25),A.r,1),s=v?B.a([new B.ab(0,A.H,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.W(d,v?D.ahl:D.f6,w,w,w,26),w,w,A.cn,new B.n(w,w,t,w,s,u,A.a6),A.Hw,w,62,w,w,w,w,w,62)
return B.ay(A.c1,new B.a6(92,w,B.x(B.a([u,A.aW6,B.c(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dvp(this,f),w,w,w,w,w,w,!1,A.a4)},
c9r(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cG(a1.a.a)
if(a2==null)a2=0
w=a0?D.f6:A.ct
v=a2>0
u=new C.dvB(e,w)
t=new C.dvA()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.uV,A.uV],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ab(0,A.H,A.v.j(0.35),A.eT,22)],n)
l=w.j(0.15)
l=B.o(d,B.W(a0?A.vu:A.tC,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.c(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fP,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.ar,k,B.o(d,B.A(B.a([B.W(A.hN,w,d,d,d,14),B.c("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.F,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.M,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.m),d,d,d,d,A.ly,d,d,d)],h),A.l,d,A.e,A.h,0,d,d)
l=B.c("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.v0(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.hx,l,d),A.d8,B.aZC(new B.cP(D.b9k,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bB(d,A.eU,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.al,d,d,k,d,d,A.eg,d,d,d,1,d,d,!1,"\u2022",d,new C.dvz(e),d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,D.fS0,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.B,d,A.b9,A.h,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b_,new B.n(d,d,d,B.m(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.m),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dI(10)+" \xb7 admin sends it to your Cash App."
q=B.c(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.ciB:D.cxv
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.ak,a1,A.P,q,A.aA,B.A(l,A.l,d,A.e,A.h,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.W(A.hN,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aA,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bB(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.m(16),new B.av(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.m(16),new B.av(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.al,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,A.nu,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dI(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dI(a2*0.15),A.f1),B.iV(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dI(a2*0.85),!0,D.f6)],h),A.l,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.m),d,d,d,d,A.hy,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.TV:A.a5R
n=B.a([new B.ab(0,A.H,(a0?A.b5:A.dV).j(0.45),A.dp,18)],n)
k=a0?e.gcEk():e.gcMv()
j=B.W(a0?A.a3P:A.m5,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dI(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dI(a2):"Request withdrawal"
a1.push(new B.a6(d,54,new B.bP(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.m),A.bm,B.lW(j,B.c(i,d,d,d,d,d,d,A.mb,d,d,d),k,B.fx(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.am,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aX,A.b1,A.x,p,A.xA,d),A.m),d,d,new B.bl("form"+s,x.W),d,A.wZ,d,d,d)},
c3q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("X<1>"),a4=B.B(new B.X(a2,new C.dvt(a0),a3),a3.k("M.E"))
A.d.b_(a4,new C.dvu())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fRJ
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iM:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b9<2>")
a2=B.B(new B.b9(a2,a3),a3.k("M.E"))
r=C.is4(a2,B.Mf(a0.a.e,new C.dvv(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bNr,B.aM(!1,v,!0,B.o(a1,D.fnR,A.f,a1,a1,new B.n(a1,a1,B.K(D.f6.j(0.4),A.r,1),u,a1,a1,A.m),a1,a1,a1,a1,A.lZ,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dvw(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.h,0,a1,a1),A.S],q)
if(a4.length===0)u.push(new B.D(D.bES,B.x(B.a([B.W(A.I6,A.c.j(0.25),a1,a1,a1,40),A.S,D.hdY],q),A.l,a1,A.e,A.h,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cS(a4,0,B.dy(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bQ(p,p.gJ(0),o.k("bQ<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.fa||k===A.ky||k===A.eP
if(l===A.cx)i=j?A.c_:D.f6
else i=l===A.dM?A.jk:A.fo
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.av(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.W(j?A.tC:A.vu,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bE(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.c(a0.bYo(n),a1,a1,a1,a1,a1,a1,A.ja,a1,a1,a1)
e=C.hCe(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bC,B.c(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.c(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kR)f.push(new B.D(A.a1w,new B.Dc(A.bI,5,4,A.br,B.a([a0.aR4("Before",m.b),a0.aR4("After",m.a)],q),a1),a1))
m=B.x(f,A.B,a1,A.e,A.h,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dI(f)
f=B.c(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hKe(n)
v.push(B.o(a1,new B.c3(A.aL,A.e,A.h,A.l,a1,A.p,a1,0,B.a([k,A.bb,new B.bx(1,A.ba,m,a1),A.aa,B.x(B.a([f,A.at,B.o(a1,B.c(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.F,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.bb(d,d,d,d),a1,a1,A.m),a1,a1,a1,a1,A.zv,a1,a1,a1)],q),A.dJ,a1,A.e,A.h,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bE(A.a1,A.a1,new B.av(l,1,A.r,-1),A.a1),a1,a1,a1,A.m),a1,a1,a1,a1,A.qZ,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hs(D.c3x,B.c("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cc,a1,a1,a1),new C.dvx(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f6,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.am,a1,A.e,A.h,0,A.p),A.f,a1,a1,new B.n(A.uV,a1,a3,a2,a1,a1,A.m),a1,a1,D.hGU,a1,D.bHg,a1,a1,a1)},
aR4(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dI(e)
return B.o(w,B.Zz(B.cT(B.a([s,B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fPg,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.nc,w,w,w)},
aZO(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eP)return d.c>0
if(B.tp(d))return!1
if(v===A.h3||v===A.fa)return!0
if(v===A.pm||v===A.ky)return!0
if(v===A.kS)return!0
if(v===A.hh)return A.a.q(w,"clock-in")||d.c>0
return!1},
bYo(d){var w,v=d.f
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
C.beb.prototype={
a3(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bkX.j(0.55).gp(0)
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
C.bzp.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a3(0,p,s,p+80)
n=[A.bc,A.hi,A.bv][q]
$.R()
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.san(new B.a7(A.aX,A.b1,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aA(0,o))
a1.aE(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.R()
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.r=A.c.j(0.55*i).gp(0)
a1.O(new B.r(l,j),0.7+(k-s)*1.5,r)
if(A.o.F(m,9)===0){h=new B.ar(A.T,A.Q,A.W,A.X,A.U)
h.r=A.pC.j(0.35*i).gp(0)
h.c=1
a1.ah(new B.r(l-4,j),new B.r(l+4,j),h)
a1.ah(new B.r(l,j-4),new B.r(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=A.i.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.R()
e=new B.ar(A.T,A.Q,A.W,A.X,A.U)
e.r=A.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=A.bH
a1.ah(new B.r(g+r,f+p),new B.r(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=A.i.F(v+m*0.25,1)
t=A.pC.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jR(new B.et("z",a0,a0,A.cO,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.bW,new B.jm(1),a0,a0,a0,a0,A.bX,a0,A.cw)
d.e6()
d.a3(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aNV.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a2()}}
C.bBo.prototype={}
C.b2z.prototype={}
C.a1c.prototype={
S(){return new C.aGB(new B.at(A.ax,$.ax()))},
d0e(d,e){return this.d.$2(d,e)}}
C.aGB.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
b2O(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.l(new C.emH(w))
return}u=w.c
u.toString
B.a8(u,!1).N(null)
w.a.d0e(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aE(a0,A.f0,e).w
e=B.aE(a0,A.dI,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.m),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c2S,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ab(0,A.H,A.fk.j(0.5),A.J,18)],v),D.auZ,A.a6),f,52,f,f,f,f,f,52),A.ev,B.E(B.x(B.a([D.h0Y,A.bC,B.c(g.a.c,f,1,A.a2,f,f,f,A.m9,f,f,f)],u),A.B,f,A.e,A.h,0,A.p),1),B.aH(f,f,f,f,D.c3M,f,f,f,new C.emK(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.h,0,f,f)
s=g.b9V(A.f3,"You",A.ct)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.l5,B.o(f,D.h5a,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.m),f,f,f,f,A.fM,f,f,f),f),g.b9V(A.xi,"Your friend",A.c4)],u),A.l,f,A.e,A.h,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bB(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.av(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b86),f,f,f,f,f,f,f,f,A.FA,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c6r,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.al,f,f,f,f,f,A.mK,f,f,f,1,f,f,!1,"\u2022",f,new C.emL(g),f,new C.emM(g),f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.jK,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.csr[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.auY:f
p=p?f:A.c.j(0.06)
k=new B.av(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.c(j,f,f,f,f,f,f,A.dq,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bx(1,A.ba,B.ay(f,B.cU(f,B.x(B.a([i,B.c(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.h,0,A.p),f,f,A.b_,new B.n(p,f,new B.bE(k,k,k,k),new B.bb(s,s,s,s),f,n,A.m),A.eJ,f,f,f,f,A.f8,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.emN(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.aa)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.h,0,f,f)
r=B.A(B.a([B.W(A.kK,A.c.j(0.5),f,f,f,15),A.bf,B.E(B.c("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.h,0,f,f)
p=B.m(18)
v=B.a([new B.ab(0,A.H,A.bA.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h9e,A.ak,o,A.aO,D.hdM,A.P,s,A.aA,r,A.aO,new B.a6(f,54,new B.bP(new B.n(f,f,f,p,v,D.cdo,A.m),A.bm,B.hs(D.ata,B.c("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fP,f,f,f),g.gcft(),f),f),f)],u),A.am,f,A.e,A.M,0,A.p),A.f,f,f,D.ba7,f,f,f,f,D.bID,f,f,f),f)},
b9V(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.W(d,f,w,w,w,24),A.at,B.c(e,w,w,w,w,w,w,A.FC,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.f8,w,w,w),1)}}
C.pF.prototype={}
C.bud.prototype={
a3(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.T,A.Q,A.W,A.X,A.U)
if(w===0)r=A.bi
else r=(w&1)===0?A.bE:A.a_
v.r=r.gp(0)
d.cQ(B.bX(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iT.gp(0)
r.b=A.ac
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fu(s,A.cw,s,s,s,B.cT(s,s,s,s,s,s,s,s,s,A.aYG,B.v(r)),A.a7,A.bW,s,A.dG,A.bX)
u.e6()
r=u.b
t=r.c
r=r.a.c
u.a3(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aD(d){return d.b!=this.b}}
C.FG.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.att.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
btj(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hfN("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c4g()
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
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.c1(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gks())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b0T(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKX.h(0,d)
s.c=w==null?"Play to earn":w}},
beS(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b8(w,new C.clY(),o)
v=B.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cJL(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atz(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b8(t,new C.clZ(),x.L)
o=B.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.j0(e.h(0,q)))o=B.dS(e.h(0,q))
else{o=B.c8(B.v(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bKb(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atz(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b8(t,new C.cm_(),x.L)
o=B.B(o,o.$ti.k("aj.E"))
s.y=o}if(B.j0(e.h(0,p)))o=B.dS(e.h(0,p))
else{o=B.c8(B.v(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bLx(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atz(e,f)
break}},
cUP(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEM())
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
p=B.T(q).k("N<1,ai<G>>")
q=B.B(new B.N(q,new C.cm1(),p),p.k("aj.E"))
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
p=B.T(q).k("N<1,ai<G>>")
q=B.B(new B.N(q,new C.cm2(),p),p.k("aj.E"))
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
default:q=B.dG(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aEM(){var w,v,u,t=this
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
atz(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cJL(d,e){var w,v,u,t,s,r="playerXEmail"
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
bKb(d,e){var w,v,u,t,s
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
bLx(d,e){var w,v,u,t,s,r,q
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
V3(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gks())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aEM():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c4g(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iF(8,new C.clV(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0T(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bO(0,A.ci)},
d41(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gks())w=1
else{v=r.d
v=v==null?null:v.d
w=r.V3(q,v==null?"":v)?r.z:-1}if(!r.gks()){v=r.d
v=v==null?null:v.d
v=!r.V3(q,v==null?"":v)}else v=!1
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
if(r.ab0(2)){r.acB(1)
return!0}if(r.ab0(1)){r.acB(2)
return!0}if(r.gks()&&r.z===2){r.bG1(f)
if(r.ab0(2)){r.acB(1)
return!0}if(r.ab0(1)){r.acB(2)
return!0}}}return!1},
acB(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bG1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
ab0(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d43(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.ro
if(!s.gks()){w=s.d
w=w!=null&&!s.V3("tic_tac_go",w.d)}else w=!1
if(w)return D.ro
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.alh(v))return s.aWs(v,!0)
if(!A.d.q(s.at,""))return s.aWt()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEM())
s.c=s.b0m()
return D.ro}if(s.gks()){t=s.cqT(e)
if(t>=0){s.at[t]="O"
if(s.alh("O"))return s.aWs("O",!1)
if(!A.d.q(s.at,""))return s.aWt()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b0m()
return D.ro},
b0m(){var w=this.d
if(w==null)return"Take your turn"
return this.V3("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aWs(d,e){var w,v,u=this
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
return e?D.rp:D.K6},
aWt(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.US},
cqT(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.alh("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.alh("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.djj[u]
if(v[w].length===0)return w}return-1},
alh(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.ds5[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a54(d){return A.d.cC(d,0,new C.cm0())},
cOk(d){this.ay.push(1+d.aw(10))
if(this.a54(this.ay)>21)return!0
return!1},
cOl(d){var w,v,u,t=this
while(t.a54(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a54(t.ay)
v=t.a54(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cUa(d,e){var w,v,u,t=this
if(t.e)return D.ro
if(!t.gks()){w=t.d
w=w!=null&&!t.V3("connect_four_pro",w.d)}else w=!1
if(w)return D.ro
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.ro
if(!t.aio(d,w))return D.ro
if(t.aaP(t.fx))return t.aWq(t.fx,!0)
if(t.aRU())return t.aWr()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cqe(e)
if(u>=0){t.aio(u,2)
if(t.aaP(2))return t.aWq(2,!1)
if(t.aRU())return t.aWr()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bKa()
return D.ro},
bKa(){var w=this.d
if(w==null)return"Drop a disc"
return this.V3("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aio(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRU(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aWq(d,e){var w,v,u,t=this
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
return e?D.rp:D.K6},
aWr(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.US},
cqe(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aio(w,2)
v=r.aaP(2)
r.bcA(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aio(w,1)
u=r.aaP(1)
r.bcA(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bcA(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaP(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bKc(w,v,d))return!0}return!1},
bKc(d,e,f){var w,v,u,t,s=new C.clU(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfQ(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0T(d)}return w.a>=w.b}}
C.aup.prototype={
S(){return new C.aHr(null,null)},
d_7(d){return this.e.$1(d)}}
C.aHr.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,D.bDY,null,1,null,v)
w.eU(0,!0)
v.d=w
v.a.d.aV(0,v.gb3l())
v.aAC()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bO(0,A.ci)
this.aAC()}},
aAC(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ajh(t,u)
C.ajh(t,u)
w.a.d_7(s)
w.a.toString
w.l(new C.eW6())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb3l())
w=v.d
w===$&&B.d()
w.t()
v.bBz()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ajh(j,i),g=C.ajh(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.d()
u=new B.aP(1,1)
d.push(new B.x2(new B.d8(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.bb(u,u,u,u),B.a([new B.ab(0,A.H,A.aQ.j(0.6),A.J,6)],k),l,A.m),l,22,l,A.a21,l,l,l,3),l),A.Vq,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.et(v,l,l,A.cO,l,l,l,l,l,l,D.fM3))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cF}else if(s===t){r=A.be
q=A.O}else{r=A.aB
q=A.F}d.push(new B.et(t,l,l,A.cO,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.d()
d.push(new B.x2(new B.d8(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.Vq,l,l))}p=f===0?0:A.i.T(h/f*100)
k=A.v.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b3k("Correct",""+h,A.bi),A.aa,m.b3k("Wrong / missed",""+(f-g),A.aB),A.aY,B.c(""+p+"% accuracy",l,l,l,l,l,l,D.fDz,l,l,l)],o),A.l,l,A.e,A.h,0,l,l),A.ak,D.h6j],o),A.B,l,A.e,A.h,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.m),l,l,l,l,A.bl,l,l,l)
u=B.E(B.ca(new B.abA(l,B.cT(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.v.j(0.35)
return B.x(B.a([v,A.af,u,A.S,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bB(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b8_),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.al,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,I.ad1,!0,A.a7,l,A.ao,l,l,l,l)],o),A.am,l,A.e,A.h,0,A.p)},
b3k(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.c(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,w,w,w,A.fM,w,w,w)}}
C.aPq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","G(iv,iv)","~([ya?])","Q(ri)","ri()","G(rV,rV)","Q(rV)","G(rW,rW)","QO(Z)","Q(iv)","cN(afv)","a0U(Z)","a0_(Z)","agg(Z)","a8j(Z)","OI(Z)","af7(Z,hA<ai<jw>>)","af6(Z,G)","w(ri)","rV(aa<@,@>)","~(FG,att)","OA(Z)","aa<p,@>(rV)","rW(aa<@,@>)","aa<p,@>(kN)","aa<p,@>(rW)","Q(rW)","aa<p,@>(m0)","m0(@)","aa<p,@>(iG)","iG(@)","iv(@)","aA<~>(kN)","aa<p,@>(iv)","~(G,G)","iv(iv)","X3(Z)","aA<Q>(ai<iv>)","a0T(Z)","~(iv)","a1F(Z)","X4(Z)","p(iv)","Q(m0)","xP(bz<G,m0>)","adC(Z,G)","G(iG,iG)","ads(m0)","w(t0)","bx(JQ)","a0o(Z)","~(dd{bumpWalletRevision:Q,cloudRequest:Q})","~(p,H,H,H)","H(V)","~(dd)","a1c(Z)","~(FG)","p(p)","a1G(Z)"])
C.cCU.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCV(r,w,s.b,v,s.d)
t=s.e
r.b=B.d5(t,u)
v.r=new C.cCR(r)
v.e=new C.cCS(r,w)
v.f=new C.cCT(r,w,t,u)},
$S:0}
C.cCV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ac(r)
u=B.ct(r)
s=v
q=u
p=B.Hg(s,q)
if(p==null)p=new B.jZ(s,q==null?B.I4(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:43}
C.cCR.prototype={
$0(){this.a.b.a1(0)
return $.HS()},
$S:2087}
C.cCS.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaU.$0()
this.a.b.a1(0)},
$S:0}
C.cCT.prototype={
$0(){var w,v=this,u=v.b,t=B.du(0,0,u.gbi0(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cx(new B.bf(u.a-t.a),new C.cCQ(w,u,v.d))},
$S:0}
C.cCQ.prototype={
$0(){var w=this.c
this.a.b=B.d5(this.b,w)
w.$1(null)},
$S:0}
C.fi3.prototype={
$1(d){var w=this.a
w.l(new C.fi2(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fi2.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hA(D.amq,this.b,null,null,v.$ti.k("hA<1>"))},
$S:0}
C.fi5.prototype={
$2(d,e){var w=this.a
w.l(new C.fi0(w,d,e))},
$S:59}
C.fi0.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hA(D.amq,null,this.b,this.c,v.$ti.k("hA<1>"))},
$S:0}
C.fi4.prototype={
$0(){var w=this.a
w.l(new C.fi1(w))},
$S:0}
C.fi1.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hA(A.z5,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fVH.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cx},
$S:16}
C.fVz.prototype={
$1(d){return d},
$S:13}
C.fBN.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.c("NGMY",w,1,A.f_,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.agh,w,v,w,w,w,w,w,v)},
$S:150}
C.fBK.prototype={
$3(d,e,f){return this.a.$0()},
$S:142}
C.fBL.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kK(w,A.z,v.d,new C.fBJ(v.e),A.hd,v.c,!0,v.b,null,null,v.a)},
$S:2088}
C.fBJ.prototype={
$3(d,e,f){return this.a.$0()},
$S:142}
C.fBM.prototype={
$3(d,e,f){return this.a.$0()},
$S:142}
C.dn5.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dng.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dny.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnz.prototype={
$1(d){return this.a.KB()},
$S:11}
C.dno.prototype={
$0(){var w=J.b8(this.b,new C.dnn(),x.P)
w=B.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.dnn.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnp.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,aa<p,@>>")
v=B.B(new B.N(v,new C.dnm(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.dnm.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnr.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,aa<p,@>>")
v=B.B(new B.N(v,new C.dnq(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.dnq.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dnj.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.chb(t.a.c)?2:3
break
case 2:w=4
return B.b(C.as2(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.l(new C.dnh(t))
case 3:if(t.c!=null)t.l(new C.dni(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:48}
C.dnh.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dni.prototype={
$0(){return this.a.d++},
$S:0}
C.dnk.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dnl.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dnb.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.izu(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.aj6(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.KB(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnc.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a2(s)
C.io6(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.aj6(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.KB(),$async$$0)
case 3:t.Jj(A.d.dz(t.y,new C.dn9(s),new C.dna(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn9.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dna.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dnd.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dne.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dnf.prototype={
$0(){return this.a.Jj(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dn8.prototype={
$0(){return this.a.c7R(this.b)},
$S:0}
C.dn7.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.izY(u,w.b,new C.dn6(v,w))},
$S:0}
C.dn6.prototype={
$2(d,e){return this.a.ajL(this.b,d,e)},
$S:641}
C.dnx.prototype={
$2(d,e){if(d)return
this.a.aW4()},
$S:134}
C.dnv.prototype={
$2(d,e){var w=this.a
return new B.lg(C.b2y(w.a.c.a),new C.dnu(w,this.b,this.c),null,null,x.gH)},
$S:2090}
C.dnu.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.c(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aF(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.jV,B.bKB(A.d3,B.W(A.h_,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dnt(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:2091}
C.dnt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fRY(s.c.a,s.e).eG(new C.dns())
w=2
return B.b(C.bHS(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dns.prototype={
$1(d){},
$S:33}
C.dnw.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0U.prototype={
$0(){var w=this.a
return B.Mf(w.a.c.a,new C.e0T(w))},
$S:83}
C.e0T.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0V.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.d()
u.bh=t.ak()
v.bv()
w.l(new C.e0S())},
$S:0}
C.e0S.prototype={
$0(){},
$S:0}
C.e0W.prototype={
$2(d,e){var w,v=this.a
if(!C.chb(v.a.c)){if($.hfI.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hfJ(this.b,v.x,w)
return!1}C.as2(v.a.c.a)}if(B.Mf(v.a.c.a,new C.e0R(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aKi()
w=v.a
w.toString
w.hK(new B.dd(A.o.v(1000*Date.now()),v.a.c.a,d,A.ky,A.fF,e,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:2092}
C.e0R.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0X.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.dd(u,s.c.a,d,A.hh,A.fF,e,v,v,A.cx,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.i.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vi(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2093}
C.dn_.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dn2.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.dn3.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dn4.prototype={
$1(d){var w=null,v=this.a,u=B.fx(w,w,v.e===d?A.bi:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.fd,B.iD(B.c("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dn1(v,d),u),w),1)},
$S:228}
C.dn1.prototype={
$0(){var w=this.a
return w.l(new C.dn0(w,this.b))},
$S:0}
C.dn0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.doS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.doV.prototype={
$1(d){this.a.crf()
return null},
$S:11}
C.doW.prototype={
$1(d){return this.a.cHO()},
$S:11}
C.doX.prototype={
$1(d){this.a.a4a()
return null},
$S:11}
C.doY.prototype={
$1(d){this.a.akR()
return null},
$S:11}
C.doZ.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.d()
if(w<=0){v.l(new C.doT(v))
w=v.as
if(w!=null)w.a1(0)
v.FT()
return}v.l(new C.doU(v))},
$S:11}
C.doT.prototype={
$0(){return this.a.Q=0},
$S:0}
C.doU.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.d()
w.Q=v-1
return v},
$S:0}
C.do7.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.do8.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.doB.prototype={
$1(d){return this.a.go.q(0,d)},
$S:29}
C.doC.prototype={
$0(){},
$S:0}
C.don.prototype={
$0(){var w=this.b
w.c7=!0
w.cU="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.doo.prototype={
$0(){var w=this.a
w.c7=!0
w.cU="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dop.prototype={
$0(){var w=this.b
w.c7=!0
w.cU="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.doq.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dor.prototype={
$0(){},
$S:0}
C.dnA.prototype={
$0(){var w=this.a,v=w.x2,u=B.v(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.do6.prototype={
$0(){var w=this.a
w.at=this.b
w.b9p()},
$S:0}
C.doD.prototype={
$0(){},
$S:0}
C.doM.prototype={
$0(){},
$S:0}
C.doA.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.doz(w))},
$S:0}
C.doz.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.do4.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.do5.prototype={
$0(){},
$S:0}
C.doH.prototype={
$1(d){return d==null},
$S:222}
C.doI.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.doJ.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dnB.prototype={
$1(d){return d==null},
$S:222}
C.dnC.prototype={
$0(){return this.a.bh++},
$S:0}
C.dnD.prototype={
$0(){},
$S:0}
C.dog.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.doh.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nn.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.doi.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.dof(w))},
$S:12}
C.dof.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dos.prototype={
$0(){return this.a.y1++},
$S:0}
C.dot.prototype={
$0(){},
$S:0}
C.dou.prototype={
$0(){return this.a.y2++},
$S:0}
C.dov.prototype={
$0(){},
$S:0}
C.dow.prototype={
$0(){return this.a.bd++},
$S:0}
C.dox.prototype={
$0(){},
$S:0}
C.doG.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.doj.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dok.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dol.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dom.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.doK.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.doL.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dnE.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnF.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dnG.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnH.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.doE.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.doF.prototype={
$0(){var w,v=this.a;++v.x2
v.aRG()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.v(Math.min(w+2,7))+" tiles"},
$S:0}
C.doe.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.doy.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.doc.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dod.prototype={
$2(d,e){return d+e.length},
$S:193}
C.doN.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.doO.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.doP.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.doR.prototype={
$1(d){var w=this.a,v=w.PF(),u=v<=0?0:A.i.D(w.AT()/v,0,1),t=w.a.x,s=t*1.46
return new C.OA(w.f?s:s*u,s,t,null)},
$S:z+22}
C.doQ.prototype={
$1(d){return d.bW(0.85)},
$S:177}
C.dob.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nn.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.c(p,w,w,w,w,w,w,A.ja,A.K,w,w),A.ak,B.E(B.as(new B.a6(r*v+u,r*t+s,B.iE(!0,w,w,A.y,new B.hS(v,6,6,1,r),new C.doa(q,r),q.fr.length,w,A.e4,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
$S:167}
C.doa.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nn.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nn.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.av5:D.cb3,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.av5:D.auZ
v=o?B.K(A.dC,A.r,2):s
u=B.a([new B.ab(0,A.H,B.a0(51,A.v.m()>>>16&255,A.v.m()>>>8&255,A.v.m()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.W(D.cGg[r.fr[e]],A.c,s,s,s,t):B.c("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b_,new B.n(s,s,v,k,u,w,A.m),A.eJ,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.do9(r,e),s,s,s,s,s,s,s)},
$S:198}
C.do9.prototype={
$0(){return this.a.cqz(this.b)},
$S:0}
C.dnU.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(89,A.bi.m()>>>16&255,A.bi.m()>>>8&255,A.bi.m()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.c(t?"":u,w,w,w,w,w,w,D.aXD,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.m),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnT(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:639}
C.dnT.prototype={
$0(){return this.a.cH2(this.b)},
$S:0}
C.dnV.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
return B.aF(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.z,B.c(u,w,w,w,w,w,w,D.aXD,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnS(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:639}
C.dnS.prototype={
$0(){return this.a.cH1(this.b)},
$S:0}
C.dnW.prototype={
$1(d){return this.a.l(new C.dnR())},
$S:26}
C.dnR.prototype={
$0(){},
$S:0}
C.dnX.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.d()
w=C.ajh(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nn.q(0,u.a.e)){u.a2p()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dnP())
t=u.dx
if(t>=v)u.uC("All 5 sentences perfect \u2014 full payout!")
else u.Fi(t/v,t,v)}}else{if(u.ghR()&&D.nn.q(0,u.a.e))u.a2p()
u.l(new C.dnQ(u))}},
$S:0}
C.dnP.prototype={
$2(d,e){return d+e.length},
$S:193}
C.dnQ.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bO(0,A.ci)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnY.prototype={
$1(d){var w=null,v=B.fx(w,w,B.a0(38,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,A.cm,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a6(1/0,w,B.iD(B.c(d,w,w,w,w,w,w,Q.aXv,w,w,w),new C.dnO(this.a,d),v),w),w)},
$S:153}
C.dnO.prototype={
$0(){return this.a.b8M(this.b)},
$S:0}
C.dnZ.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.d()
w=u*3+8
return B.x(B.a([B.c(s,v,v,v,v,v,v,A.qc,v,v,v),A.P,B.E(B.as(new B.a6(w,w,B.iE(!0,v,v,A.y,new B.hS(3,4,4,1,u),new C.dnN(t,u),9,v,A.e4,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
$S:167}
C.dnN.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6x(e),p=r===0
if(p)w=A.L
else w=q?A.bi:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v=B.m(10)
s=p?t:new C.dnJ(s,e)
u=B.m(10)
p=p?"":""+r
return B.aF(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.c(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:86}
C.dnJ.prototype={
$0(){return this.a.cH0(this.b)},
$S:0}
C.do_.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dnM(q,d)
p=B.m(16)
if(o)w=D.a70[d]
else{w=D.a70[d]
w=B.a0(31,w.m()>>>16&255,w.m()>>>8&255,w.m()&255)}v=B.m(16)
u=o?B.a0(A.i.T(127.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a70[d]
t=B.a([new B.ab(0,A.H,B.a0(217,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b_,new B.n(w,r,u,v,t,r,A.m),M.CV,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2096}
C.dnM.prototype={
$0(){return this.a.cH3(this.b)},
$S:0}
C.do0.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.d()
q=B.c(q,t,t,t,t,t,t,A.qc,t,t,t)
w=B.c("Move "+r.aBh()+"/"+C.hmt(),t,t,t,t,t,t,A.FD,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.c("Round "+v+"/7 \xb7 "+B.v(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a6(u,u,B.iE(!0,t,t,A.y,new B.hS(3,6,6,1,s),new C.dnL(r),9,t,A.e4,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:167}
C.dnL.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bi:D.bnk,q=u?A.eC:D.by1
return B.aF(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.m),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dnI(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:86}
C.dnI.prototype={
$0(){return this.a.cGY(this.b)},
$S:0}
C.do1.prototype={
$0(){return this.a.b8M(this.b[this.c])},
$S:0}
C.do2.prototype={
$0(){return this.a.l(new C.dnK())},
$S:0}
C.dnK.prototype={
$0(){},
$S:0}
C.do3.prototype={
$2(d,e){this.a.a17(d,e)
return null},
$S:z+21}
C.dsr.prototype={
$1(d){return this.a.cr4(this.b,d)},
$S:2097}
C.dsq.prototype={
$0(){var w=this
return w.a.a.d_G(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOV.prototype={
$1(d){var w=this.a
w.a2F()
w.uL()},
$S:7}
C.cOf.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cO5.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO6.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cOp.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cOm.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cOn.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cOo.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cOh.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.cOg(w))},
$S:0}
C.cOg.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cO7.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cOk.prototype={
$1(d){var w=this.a
return new C.X3(w.fx,new C.cOj(w),w.a.f.r,null)},
$S:z+37}
C.cOj.prototype={
$1(d){return this.boy(d)},
boy(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.cie(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.l(new C.cOi(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cOi.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOI.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cOC.prototype={
$1(d){this.a.uL()
return null},
$S:11}
C.cOF.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ap(v.gaZ1().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uL()
return}v.l(new C.cOE())},
$S:11}
C.cOE.prototype={
$0(){},
$S:0}
C.cOB.prototype={
$1(d){this.a.G0()
return null},
$S:11}
C.cOD.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cOA.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bh(J.k(v==null?"":v))
if(u==null)u=new B.V(B.fX(0,0),0,!1)
v=J.t(e,"at")
w=B.bh(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.fX(0,0),0,!1):w)},
$S:40}
C.cOc.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bh(J.k(v==null?"":v))
if(u==null)u=new B.V(B.fX(0,0),0,!1)
v=J.t(e,"at")
w=B.bh(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.fX(0,0),0,!1):w)},
$S:40}
C.cOd.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cOe.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3m(!0)},
$S:12}
C.cOa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOb.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
if(w.f.length!==0)w.V7(this.b)},
$S:7}
C.cOs.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd1(v).Q
v.toString
if(this.b)w.i9(v)
else w.m6(v,A.e8,A.l4)},
$S:7}
C.cOl.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cOt.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOu.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z))
w.bag()
w.r.bO(0,A.ci)
w.at=!0},
$S:0}
C.cOv.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cOw.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cOx.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).ab().ag())
w=this.a
if(J.cL(w.b)){w=J.b8(w.b,v.gcpW(),x.P)
w=B.B(w,w.$ti.k("aj.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.bag()},
$S:0}
C.cOy.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z))},
$S:0}
C.cOz.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cOq.prototype={
$1(d){return this.boz(d)},
boz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a2(s)
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
return B.b(C.asp(q,new C.rV("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atG()
case 4:k.c.L(x.q).f.U(B.b2(null,null,null,A.dt,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:465}
C.cOH.prototype={
$1(d){return this.boA(d)},
boA(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.U(B.b2(null,null,null,A.dt,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:465}
C.cOr.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd1(v).Q
v.toString
w.i9(v)},
$S:7}
C.cOU.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.d()
if(v>0)w.ade(v-1)},
$S:0}
C.cON.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.cOQ.prototype={
$1(d){var w=this.a
w.l(new C.cOK(w,d))
if(d===0)w.a3m(!0)},
$S:26}
C.cOK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOO.prototype={
$2$size(d,e){return C.hkA(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2098}
C.cOP.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hyg(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.ath(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOL(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.asn(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uL(),$async$$0)
case 15:p.l(new C.cOM(p))
p.ade(0)
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
$S:53}
C.cOL.prototype={
$2(d,e){return this.boB(d,e)},
boB(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3U(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:132}
C.cOM.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOS.prototype={
$2(d,e){return A.aa},
$S:38}
C.cOR.prototype={
$2(d,e){var w=null,v=this.a,u=B.c((v.a.c.w?D.a78:D.a6q)[e],w,w,w,w,w,w,A.qf,w,w,w),t=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),s=B.a0(89,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
v=v.at?w:new C.cOJ(v,e)
return B.mF(w,t,u,w,v,w,w,new B.av(s,1,A.r,-1),w)},
$S:728}
C.cOJ.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a78:D.a6q
w.r.sb2(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOT.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cO8.prototype={
$0(){return this.a.ade(0)},
$S:0}
C.cOG.prototype={
$0(){return this.a.ade(this.b)},
$S:0}
C.cO9.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c4x,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.c("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aw,v,v,v,v,v,v,v,v,16,v,v,A.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a1t,B.x(B.a([u,A.af,s,A.ak,B.c("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b7,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),v,v,v)}if(e<s)return u.bLb(t[e],w.c)
return u.aSk(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c5h.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.i.M(d)
return new B.V(B.fX(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bh(J.k(d))
return v==null?null:v.bU()},
$S:311}
C.c5g.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:766}
C.c5j.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bh(J.k(d))
w=w==null?null:w.bU()}return w},
$S:311}
C.c5i.prototype={
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
s=B.a6e(A.a7Y,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a6e(A.a6o,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a6e(A.Jf,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.dd(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:587}
C.dJd.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dJe.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dJ4.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dJ2.prototype={
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
return B.b(C.heJ(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pG(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dJc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abG(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a8(s,!1).cb(B.ea(new C.dJb(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pG(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dJb.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.d()
return new C.a0T(w.b,w.a,u,v,null)},
$S:z+39}
C.dJ1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i3R(q)?3:4
break
case 3:w=5
return B.b(t.a.Fx(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b05(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c5l(s.a.c))
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
return B.b(s.aTF(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dJ0.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dJ3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.afb(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hv1(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c5k(s,r.a.c,null)){r.lg(C.c5l(r.a.c))
w=1
break}w=4
return B.b(r.bNu(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dJa.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.ax()),u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=x.p,r=B.x(B.a([B.c("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ab:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aA,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bB(w,new B.b6(4,B.m(14),A.dw),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.al,w,w,w,w,w,A.ec,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.B,w,A.e,A.M,0,A.p)
return B.eh(B.a([B.bO(!1,A.dr,w,w,!0,w,w,w,new C.dJ8(d),w,w),B.bI(D.fVj,w,new C.dJ9(d,v),B.bn(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h9z,w)},
$S:18}
C.dJ8.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dJ9.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a8(this.a,!1).N(w)
return null},
$S:0}
C.dJ5.prototype={
$1(d){return D.hOJ},
$S:z+12}
C.dJ6.prototype={
$0(){return this.a.Fy(A.a.i(this.b))},
$S:1}
C.dJ7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b05(t.b,r.a.c),$async$$0)
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
case 7:r.lg(C.c5l(r.a.c))
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
return B.b(r.aTF(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dJf.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dJj.prototype={
$1(d){this.a.Sa()
return null},
$S:11}
C.dJg.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dJh.prototype={
$0(){var w=null,v=this.a
B.fK(new B.fA(v.gazh()))
this.b.L(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c("Code "+v.gazh()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dJi.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.dJk.prototype={
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
C.fGr.prototype={
$1(d){return D.hKP},
$S:z+13}
C.fHE.prototype={
$1(d){return new C.agg(this.a,this.b,this.c,null)},
$S:z+14}
C.fbt.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.fbu.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dhR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dhO.prototype={
$2(d,e){return e.an5(e.a.toUpperCase())},
$S:2099}
C.dhP.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a8(v,!1).N(w)
return null},
$S:2}
C.dhQ.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.c63.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dBE,A.a.gjB(v))},
$S:4}
C.fRS.prototype={
$1(d){return d.a===this.a},
$S:2100}
C.fRT.prototype={
$0(){return A.d.gH(A.Eg)},
$S:2101}
C.dPH.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.l(new C.dPG(v))
w=v.r
w===$&&B.d()
if(w<=0)v.b9h("Time's up")},
$S:11}
C.dPG.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.d()
w.r=v-1
return v},
$S:0}
C.dPy.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dPD.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.l(new C.dPA(w,d,e))},
$S:250}
C.dPA.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dPE.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.dPz(w))
w.cB8(!0)},
$S:0}
C.dPz.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dPF.prototype={
$1(d){this.a.b9h(d)
return null},
$S:2}
C.dPB.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.dPC.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.cek.prototype={
$1(d){return D.dZN},
$S:z+15}
C.cej.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.fIt.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a2(d),t=B.aI(u.h(d,e)),s=t==null?v:A.i.M(t)
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
$S:2102}
C.fIu.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.i.M(w)
return w==null?0:w},
$S:644}
C.fIv.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:193}
C.fZb.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hH3(w,v):C.hkW(w,v)
if(u===3)++w.f
C.ahO(w,this.c,u)
return u},
$S:2103}
C.fZd.prototype={
$0(){return C.hH3(this.a,this.b)},
$S:98}
C.fZc.prototype={
$0(){return C.hkW(this.a,this.b)},
$S:98}
C.dIQ.prototype={
$0(){var w=this.a
if(w.a.c)w.l(new C.dIP(w))},
$S:0}
C.dIP.prototype={
$0(){this.a.r=1+A.o.F(B.G0(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dIR.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.d()
u=u.x
u===$&&B.d()
w=A.i.be(u*10)
if(w!==v.w)v.l(new C.dIO(v,w))}},
$S:0}
C.dIO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgL.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.F,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bC,new B.dl(A.dF,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),1)},
$S:2104}
C.cgK.prototype={
$3(d,e,f){var w=null
return B.c("$"+A.i.aa(e,2),w,w,w,w,w,w,A.m9,w,w,w)},
$S:510}
C.chc.prototype={
$1(d){return new C.OI(this.a,this.b,!1,null,null)},
$S:z+16}
C.e8u.prototype={
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
o.push(B.o(g,D.c_x,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ab(0,A.H,A.b2.j(0.55),A.cz,18)],n),A.tL,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.ol(A.k4,D.h73,new C.e8q()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.c(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cF,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c_.j(0.12)
k=B.m(18)
j=B.K(A.c_.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.W(D.bUp,A.c_.j(0.95),g,g,g,20),A.aa,B.c("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c_.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.h,0,g,g),A.S,B.c("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.S],p)
A.d.u(i,new B.N(m,new C.e8r(),B.T(m).k("N<1,w>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.B,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.m),g,g,g,g,A.bG,g,g,1/0)],p))}o.push(A.bx)
m=A.v.j(0.35)
l=B.m(18)
k=B.K(A.b2.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.aA6(A.he,"Unlimited games with an active plan",A.bc),A.P,f.aA6(A.jX,"Weekday check-ins grow your balance",A.b2),A.P,f.aA6(A.m2,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.m),g,g,g,g,A.bG,g,g,1/0))
o.push(A.dc)
o.push(new B.a6(1/0,g,new B.bP(new B.n(g,g,g,B.m(16),B.a([new B.ab(0,A.H,A.bA.j(0.45),A.cz,16)],n),A.tL,A.m),A.bm,B.da(D.c38,g,D.h2o,new C.e8s(f,a0),B.bn(A.L,g,g,g,A.c,A.Le,g,A.L,new B.ba(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bO(!1,B.c(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e8t(f,a0),g,g))
if(f.a.e)o.push(A.aY)
h=B.o(g,B.bu(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.ce0,A.m),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eE(g,A.L,h,g,g,g,R.a1Z,g,A.d7,g,g,g)},
$S:520}
C.e8q.prototype={
$1(d){return D.ccV.aA(0,d)},
$S:77}
C.e8r.prototype={
$1(d){var w=null
return new B.D(A.eK,B.A(B.a([B.W(A.a3Y,A.c_.j(0.85),w,w,w,14),A.aa,B.E(B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$S:153}
C.e8s.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a8(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e8t.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a8(this.b,!1).N(null)},
$S:0}
C.fUf.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:776}
C.fU2.prototype={
$1(d){$.aU.x1$.push(new C.fU1(this.a))},
$S:7}
C.fU1.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fEJ.prototype={
$1(d){return C.hHb(this.a,this.b+1)},
$S:7}
C.fVC.prototype={
$2(d,e){var w=B.aE(d,A.bY,x.w).w.a
return new B.a6(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:128}
C.chq.prototype={
$1(d){return d.r===this.a},
$S:294}
C.chr.prototype={
$1(d){var w=$.aUb(),v=w.a
w.sp(0,v+1)
return v},
$S:2105}
C.chs.prototype={
$1(d){},
$S:33}
C.chp.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:294}
C.cho.prototype={
$1(d){return d.f.cc(this.a)},
$S:294}
C.fBs.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:60}
C.h7o.prototype={
$1(d){return C.a8Y(this.a)},
$S:112}
C.h7p.prototype={
$1(d){var w=$.aUb()
w.sp(0,w.a+1)},
$S:31}
C.h7q.prototype={
$1(d){},
$S:33}
C.h7r.prototype={
$1(d){return new B.kn($.aUb(),new C.h7n(this.a,this.b),null,null,x.am)},
$S:2106}
C.h7n.prototype={
$3(d,e,f){var w=this.b
return new B.lg(C.as8(this.a,!1),new C.h7m(w),w,null,x.gv)},
$S:2107}
C.h7m.prototype={
$2(d,e){var w=e.b
return new C.af7(w==null?this.a:w,null)},
$S:z+17}
C.e8x.prototype={
$1(d){return d.c},
$S:294}
C.e8y.prototype={
$1(d){return d.gbl8()},
$S:2108}
C.e8z.prototype={
$2(d,e){return d+e},
$S:88}
C.e8A.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8C.prototype={
$2(d,e){return A.P},
$S:38}
C.e8B.prototype={
$2(d,e){return new C.af6(J.t(this.a.c,e),null)},
$S:z+18}
C.e8w.prototype={
$1(d){return d==null?"\u2026":C.bE6(d)},
$S:2109}
C.h7u.prototype={
$3(d,e,f){var w=this
return B.qu(new C.aD5(w.a,w.b,w.c,w.d,new C.h7s(d,w.e),new C.h7t(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.h7s.prototype={
$0(){B.a8(this.a,!1).N(null)
C.hKC(this.b)},
$S:0}
C.h7t.prototype={
$0(){B.a8(this.a,!1).N(null)
C.hKC(this.b)},
$S:0}
C.dp0.prototype={
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
A.d.u(w,new B.N(t,new C.dp_(),B.T(t).k("N<1,w>")))}t=h.d
t===$&&B.d()
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aE(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bi,A.eq,A.eh],r):B.a([A.aB,A.er,A.ex],r)
p=B.m(26)
o=B.K(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ab(6,A.H,(h.a.c?A.dQ:A.dU).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dv()
j=k.a
j.$flags&2&&B.ak(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.akv,A.uI],r)
l.push(new B.a6(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fC(A.z,B.o(i,D.bgq,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ab(4,A.H,A.d3.j(0.6),A.J,24),new B.ab(0,A.H,A.v.j(0.3),A.dp,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c6H)
l.push(A.aA)
l.push(B.c(h.a.d,i,i,i,i,i,i,A.X_,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.eq,A.r,4)
A.d.u(l,B.a([A.aA,D.fX7,A.P,B.o(i,B.c(r,i,i,i,i,i,i,D.fMO,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.m),i,i,i,i,A.OX,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.c(h.a.e,i,i,i,i,i,i,D.fPQ,A.K,i,i)],g))
l.push(A.eb)
r=B.E(B.dV(D.fUv,h.a.r,B.dh(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cm,i,i,D.b7G,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.ar,B.E(B.bI(E.aZ_,i,n,B.bn(A.c,i,i,i,h.c?A.eq:A.er,i,A.cm,i,i,i,i,i)),1)],g),A.l,i,A.e,A.h,0,i,i))
w.push(B.e3(A.z,B.o(i,B.x(l,A.l,i,A.e,A.M,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.ay,A.aC,A.x,q,i,i),A.m),i,i,i,A.ae,A.aoH,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:123}
C.dp_.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d3(B.eM(A.z,d.d,B.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cjb.prototype={
$2(d,e){var w=null,v=this.a,u=C.i3g(B.Mf(v.c,v.d))
return B.c("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2110}
C.cja.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:60}
C.c6A.prototype={
$0(){},
$S:0}
C.fAn.prototype={
$1(d){return A.o.v(d)},
$S:81}
C.e1_.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e10.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e11.prototype={
$0(){var w=this.a
return w.w=D.TH[w.d.aw(5)]},
$S:0}
C.e12.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e13.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e14.prototype={
$0(){var w=this.a
return w.l(new C.e0Z(w))},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e15.prototype={
$0(){var w=this.a
return w.l(new C.e0Y(w))},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e18.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.e19.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bi:B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),r=B.m(10)
t=t.y?u:new C.e17(t,d)
w=B.m(10)
v=A.i.aa(d,0)
return B.E(new B.D(A.jh,B.aF(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a6(u,38,B.as(B.c("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:2111}
C.e17.prototype={
$0(){var w=this.a
return w.l(new C.e16(w,this.b))},
$S:0}
C.e16.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bO(0,A.ci)},
$S:0}
C.e8I.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cN.gco().aK(this.c)},
$S:0}
C.e8J.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.e8E.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f6.j(0.5):A.L,A.r,1),q=B.W(e,u?D.f6:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cU(w,B.A(B.a([q,A.bf,B.c(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.h,0,w,w),w,w,A.b_,new B.n(s,w,r,t,w,w,A.m),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e8G(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2112}
C.e8G.prototype={
$0(){var w=this.a
return w.l(new C.e8F(w,this.b))},
$S:0}
C.e8F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8H.prototype={
$0(){var w=this.a,v=w.d===A.lg?"Cash App tag":"Bitcoin address"
return w.JP(this.b,v)},
$S:0}
C.e8D.prototype={
$0(){var w=this.a
return w.JP(w.gauz(),"Code")},
$S:0}
C.chZ.prototype={
$1(d){return C.i_s(B.a1(d,x.N,x.z))},
$S:z+20}
C.ci_.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chW.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chX.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chY.prototype={
$1(d){return d.ak()},
$S:z+23}
C.ci0.prototype={
$1(d){var w=d.c
return!w.cV(this.a.bN(-36e8))&&!w.cc(this.b)},
$S:z+7}
C.c9I.prototype={
$1(d){return C.i_t(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9J.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9G.prototype={
$1(d){return d.ak()},
$S:z+26}
C.c9H.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9L.prototype={
$1(d){var w=d.b
return!w.cV(this.a)&&!w.cc(this.b)},
$S:z+27}
C.ci9.prototype={
$1(d){return d.ak()},
$S:z+28}
C.ci8.prototype={
$1(d){return C.hxl(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.ci7.prototype={
$1(d){return d.ak()},
$S:z+30}
C.ci6.prototype={
$1(d){return C.i2U(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.cib.prototype={
$1(d){return C.i2T(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.cic.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.cid.prototype={
$1(d){return d.ak()},
$S:z+34}
C.ecO.prototype={
$1(d){return d.bgw(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ecP.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ecI.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ecJ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ecr.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.I(w,this.b)},
$S:0}
C.ecs.prototype={
$1(d){return new C.QO(this.a,null)},
$S:z+9}
C.ect.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.d()
w=A.d.bk(t,new C.ecq(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.K0()}},
$S:0}
C.ecq.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ecF.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ecG.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.d()
t.d=C.itY(v,w[0],w[3])
t.K0()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ecH.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.i9(v)}},
$S:7}
C.ecz.prototype={
$1(d){return new C.QO(this.a,null)},
$S:z+9}
C.ecA.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ecy.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.ecE.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.d()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.K0()},
$S:0}
C.ecD.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.d()
w=this.b
return new C.a1G(u[w],new C.ecC(v,w),null)},
$S:z+59}
C.ecC.prototype={
$1(d){var w=this.a
return w.l(new C.ecB(w,this.b,d))},
$S:z+40}
C.ecB.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ecv.prototype={
$0(){var w=this.a
return w.l(new C.ecu(w))},
$S:0}
C.ecu.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ecw.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cB:A.aM
return new B.D(A.eK,B.c(t+": "+B.v(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cF,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:127}
C.ecx.prototype={
$1(d){return this.a.a30()},
$S:2}
C.ecN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uE:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aM:A.bn
r=w.d
q=B.b1(r).j(0.15)
p=B.m(12)
q=B.o(n,B.W(A.arv,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.bT,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.W(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.m),n,n,n,n,A.hM,n,n,n)
r=B.A(B.a([o,A.ar,B.E(B.c(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.h,0,n,n)
p=w.e.length
return new B.D(A.d4,B.aF(!1,A.a3,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awZ(q,e,!0,n),n,n,n,n,new C.ecK(m,e),!1,n,n,new B.ba(t,new B.av(s,1,A.r,-1)),n,n,B.c("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CP(n,n,n,n,n,new C.ecL(),A.J,new C.ecM(m,e),A.cr,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bl(w.a,x.W))},
$S:127}
C.ecM.prototype={
$1(d){var w=this
if(d==="edit")w.a.acb(w.b)
if(d==="questions")w.a.a_b(w.b)
if(d==="delete")w.a.bQs(w.b)},
$S:2}
C.ecL.prototype={
$1(d){return D.d7z},
$S:144}
C.ecK.prototype={
$0(){return this.a.a_b(this.b)},
$S:0}
C.cXS.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.W(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.m),s,s,s,s,A.cr,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cXR(r,d),s,s,s,s,s,s,s)},
$S:2113}
C.cXR.prototype={
$0(){var w=this.a
return w.l(new C.cXP(w,this.b))},
$S:0}
C.cXP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXT.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.d()
return B.ay(w,B.hk(u,w,t===d?D.c3W:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cXQ(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:438}
C.cXQ.prototype={
$0(){var w=this.a
return w.l(new C.cXO(w,this.b))},
$S:0}
C.cXO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXU.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.cXV.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.d()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.d()
v=v.f
v===$&&B.d()
t=u.cS3(v,w,t)
B.a8(this.b,!1).N(t)
return null},
$S:0}
C.f6n.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return w.push(this.b)},
$S:0}
C.f6o.prototype={
$1(d){return new C.a1F(this.a,null)},
$S:z+41}
C.f6u.prototype={
$2(d,e){return A.P},
$S:38}
C.f6t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.d()
w=l[e]
l=this.b.a
v=l?D.uE:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aM:A.bn
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bu(q,B.aSN(n,A.bZ,36,A.r6,l?A.bP:A.an,r,48),A.aq)}else r=B.W(D.a3H,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.c(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aF(!1,A.a3,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f6r(m,w,e),!1,n,n,new B.ba(t,new B.av(s,1,A.r,-1)),n,n,B.c(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c2b,n,n,n,new C.f6s(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:86}
C.f6s.prototype={
$0(){var w=this.a
w.l(new C.f6p(w,this.b))
w.aA9()},
$S:0}
C.f6p.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.f6r.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4x(u.b),$async$$0)
case 2:s=e
if(s!=null){t.l(new C.f6q(t,u.c,s))
t.aA9()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f6q.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f6j.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f6h.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
return new C.X4(w,"Answer Document",null)},
$S:z+42}
C.f6i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f6l.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.d()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.d()
v=u.f
u=u.r
if(v==null)v=t.d
B.a8(this.b,!1).N(new C.iG(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f6m.prototype={
$1(d){var w=this.a
return w.l(new C.f6k(w,d))},
$S:9}
C.f6k.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ci3.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fWb.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.edo.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ed4.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.m0("image","",this.b,null))},
$S:0}
C.ed9.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.m0("video","","data:video/mp4;base64,"+A.cN.gco().aK(this.b),null))},
$S:0}
C.ed7.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c8A,A.y,!0,w,!0,w,!1,w,A.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c8z,A.y,!0,w,!0,w,!1,w,A.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.M,0,A.p)
return B.eh(B.a([B.bO(!1,A.dr,w,w,!0,w,w,w,new C.ed5(d),w,w),B.bI(D.h6w,w,new C.ed6(d),w)],v),w,w,w,u,w,w,w,w,D.fTI,w)},
$S:18}
C.ed5.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.ed6.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.ed8.prototype={
$0(){var w,v=this.a.e
v===$&&B.d()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.m0("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ed0.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ed1.prototype={
$1(d){return d.length!==0},
$S:3}
C.ed2.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ed3.prototype={
$1(d){return d.length!==0},
$S:3}
C.ede.prototype={
$0(){var w=this.a.bJC()
B.a8(this.b,!1).N(w)
return null},
$S:0}
C.edf.prototype={
$0(){return this.a.aAa("**","**")},
$S:0}
C.edg.prototype={
$0(){return this.a.aAa("*","*")},
$S:0}
C.edh.prototype={
$0(){return this.a.aAa("__","__")},
$S:0}
C.edi.prototype={
$0(){return this.a.b2x("## Section title")},
$S:0}
C.edj.prototype={
$0(){return this.a.b2x("\u2022 First point\n\u2022 Second point")},
$S:0}
C.edk.prototype={
$0(){},
$S:0}
C.edl.prototype={
$0(){var w=this.a
w.l(new C.edd(w))},
$S:0}
C.edd.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.e2l)},
$S:0}
C.edm.prototype={
$0(){var w=this.a
w.l(new C.edc(w))},
$S:0}
C.edc.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.e2m)},
$S:0}
C.edn.prototype={
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
w=w?A.cu:A.hW
return B.Ek(v,w,A.atS,t,v,new C.edb(this.a,d),v)},
$S:z+45}
C.edb.prototype={
$0(){var w=this.a
return w.l(new C.eda(w,this.b))},
$S:0}
C.eda.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.cH(w,this.b.a)},
$S:0}
C.ecY.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2L},
$S:0}
C.ecZ.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hLT},
$S:0}
C.ecQ.prototype={
$0(){var w=this.a
w.d=D.b2K
w.f=w.e=null},
$S:0}
C.ecR.prototype={
$0(){var w=this.a
w.d=D.b2L
w.f=null},
$S:0}
C.ed_.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ecT.prototype={
$2(d,e){var w=this.a,v=w.gbah()[e]
return new C.adC(v,this.b,new C.ecS(w,v),null)},
$S:z+46}
C.ecS.prototype={
$0(){return this.a.ceO(this.b.a)},
$S:0}
C.ecV.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ecX.prototype={
$2(d,e){return A.S},
$S:38}
C.ecW.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uE:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aM:A.bn,A.r,1),l=B.a([new B.ab(0,A.H,A.v.j(r?0.28:0.06),A.dR,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bu(w,B.aSN(v,A.bZ,52,D.a3H,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.W(D.a3H,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.m),t,52,t,t,t,t,t,52))}k.push(A.bb)
k.push(B.E(B.c(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.W(A.eM,r?A.bP:A.an,t,t,t,22))
return B.aF(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.m),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ecU(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:86}
C.ecU.prototype={
$0(){return this.a.clX(this.b)},
$S:0}
C.ci5.prototype={
$1(d){return new C.ads(d,this.a,null)},
$S:z+48}
C.cR9.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oo(v==null?w.b:v)
if(u!=null)B.iU(u,A.fu,null)},
$S:0}
C.cRa.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cRb.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.c("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cB:A.aM,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.na,B.A(B.a([u,B.E(B.c(t,w,w,w,w,w,w,B.l(w,w,v?A.cB:A.aM,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.B,w,A.e,A.h,0,w,w),w)},
$S:153}
C.dtk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dtm.prototype={
$0(){return this.a.l(new C.dtl(this.b))},
$S:0}
C.dtl.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fA3.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.edC.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.EK)w.z=v
else w.Q=v},
$S:0}
C.edt.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd1(v).Q
v.toString
w.m6(v,A.cn,A.eW)},
$S:7}
C.edv.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:104}
C.edw.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bO(0,A.ci)
w.r=!0},
$S:0}
C.edx.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.edy.prototype={
$1(d){var w=J.a2(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.v(w.h(d,"text"))},
$S:164}
C.edz.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.edA.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.edB.prototype={
$0(){return this.a.r=!1},
$S:0}
C.edu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n5(l,A.bA.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bQ,B.A(B.a([new B.a6(22,22,k,l),A.ar,B.c("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.e2,l,l,l,l,l,l,l,l,12,A.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.h,0,l,l),l)}w=k.f[e]
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
q=new B.a7(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ab(0,A.H,(u?A.bA:A.aD).j(0.22),A.hR,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bn:A.bq
n=u?13.5:15
m=u?A.bo:A.cL
return new B.bK(t,l,l,B.o(l,B.c(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cF,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.bb(A.i5,A.i5,new B.aP(s,s),new B.aP(r,r)),p,q,A.m),l,l,l,A.kH,A.jz,l,l,l),l)},
$S:42}
C.edJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.d()
w=m.x
w===$&&B.d()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.aiH,A.a_,A.oA],t):B.a([A.qA,A.qw,A.qx],t)
w=B.a([new B.ab(-4,A.H,A.aD.j(0.35+w*0.25),A.dp,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dv()
p=q.a
p.$flags&2&&B.ak(p)
p[11]=0.001
m=m.x
m===$&&B.d()
q.fG(m*0.08)
q=B.fC(A.z,B.o(o,D.bZx,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eKO,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.ol(A.k4,D.hbm,new C.edG())
p=x.p
m=B.a([B.A(B.a([q,A.bb,B.E(B.x(B.a([m,B.c("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b7,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.B,o,A.e,A.h,0,A.p),1)],p),A.l,o,A.e,A.h,0,o,o),A.af,B.A(B.a([n.ayi(D.EK,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.aa,n.ayi(D.aMY,"English","\ud83c\uddec\ud83c\udde7",u),A.aa,n.ayi(D.EL,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.h,0,o,o)],p)
if(n.x!==D.EL){t=B.a([A.P,n.cFB(u)],p)
if(n.w){q=n.x===D.EK?D.a7T:D.a6X
p=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.edH(n,u),p),p.k("aj.E"))
t.push(new B.D(A.jg,B.bZ(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bA.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bA.j(0.45),A.r,1)
m.push(new B.D(A.jg,B.o(o,B.c('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iE:A.k6,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.m),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dth,new C.edI(n,u),t),t.k("aj.E"))
m.push(B.A(n,A.l,o,A.e,A.h,0,o,o))
return B.o(o,B.x(m,A.am,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.ay,A.aC,A.x,s,o,o),A.m),o,o,o,H.anx,S.a1M,o,o,o)},
$S:87}
C.edG.prototype={
$1(d){return D.cdq.aA(0,d)},
$S:77}
C.edH.prototype={
$1(d){return this.a.cFC(d,this.b)},
$S:z+49}
C.edI.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aN_?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.v.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.edF(p,d)
s=C.i4o(d)
if(o)r=A.c
else r=v?A.ab:A.bq
r=B.c(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i4p(d)
if(o)v=A.ab
else v=v?A.bV:A.e2
return B.E(new B.D(new B.P(0,0,n,0),B.aF(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.HB,B.x(B.a([r,B.c(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.edF.prototype={
$0(){var w=this.a
return w.l(new C.edE(w,this.b))},
$S:0}
C.edE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.edL.prototype={
$0(){var w=this.a
return w.l(new C.edK(w))},
$S:0}
C.edK.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.eds.prototype={
$0(){var w=this.a
return w.l(new C.edr(w,this.b))},
$S:0}
C.edr.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.EL
if(v===D.aMY&&w.Q==null)w.Q=A.d.gH(D.a6X).a},
$S:0}
C.edM.prototype={
$0(){return this.a.cAZ(this.b.a)},
$S:0}
C.edD.prototype={
$0(){return this.a.JQ(this.b)},
$S:0}
C.edp.prototype={
$1(d){return this.a.b2y()},
$S:2}
C.edq.prototype={
$0(){return this.a.b2y()},
$S:0}
C.h8l.prototype={
$1(d){var w=this
return new C.a0o(w.a,w.b,w.c,new C.h8k(w.d),null)},
$S:z+51}
C.h8k.prototype={
$0(){return J.lQ(this.a.bm())},
$S:0}
C.dqF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.blq()},
$S:31}
C.dqG.prototype={
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
p=q?A.ef:A.he
o=A.o.F(w,4)
q=q?A.au:A.aN
return B.ao(n,B.d3(B.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:340}
C.dqL.prototype={
$0(){},
$S:0}
C.dqK.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.d()
w=t.x
w===$&&B.d()
v=A.nz.aB(0,A.i.D(w,0,1))
t=t.x
t===$&&B.d()
t=Math.sin(t*3.141592653589793)
w=B.dv()
u=w.a
u.$flags&2&&B.ak(u)
u[11]=0.0028
w.fG(t*0.08)
w.k5(0.12)
return B.e3(A.z,B.fC(A.z,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dqH.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ab(6,A.H,A.au.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a6(96,96,B.n5(A.c.j(0.08),A.au,t,t,t,t,t,6,u/v,t),t),B.c(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.dc(A.au.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:123}
C.dqI.prototype={
$1(d){return D.cdu.aA(0,d)},
$S:77}
C.dqJ.prototype={
$0(){var w=this.a
w.a.blq()
w.a.e.$0()},
$S:0}
C.ck4.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.h3)if(d.x===A.dM){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.ckh.prototype={
$1(d){return d.a===this.a},
$S:16}
C.es3.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.esK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.R_()},
$S:7}
C.esL.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ur||w===A.us)return
this.a.Fs()},
$S:11}
C.esM.prototype={
$1(d){this.a.cHN()},
$S:11}
C.ess.prototype={
$0(){this.a.Kn(this.b.d,!1)},
$S:0}
C.est.prototype={
$0(){},
$S:0}
C.esu.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.esv.prototype={
$0(){},
$S:0}
C.esw.prototype={
$1(d){return d.a===this.a},
$S:16}
C.esx.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.esy.prototype={
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
C.esn.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Qc()
w.aag()},
$S:0}
C.es4.prototype={
$0(){this.b.Kn(this.c.d+this.a.a,!1)},
$S:0}
C.eso.prototype={
$1(d){var w=d.d
return(w===A.h3||w===A.fa)&&d.x===A.dM},
$S:16}
C.esp.prototype={
$1(d){return d.a},
$S:181}
C.esq.prototype={
$1(d){return d.a===this.a},
$S:16}
C.esr.prototype={
$0(){},
$S:0}
C.es8.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.es9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.esh.prototype={
$0(){},
$S:0}
C.ese.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.esf.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.esg.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.esi.prototype={
$0(){return this.a.z=!0},
$S:0}
C.esj.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w8(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.esk.prototype={
$0(){return this.a.z=!1},
$S:0}
C.esm.prototype={
$0(){var w=this.a
return w.l(new C.esl(w))},
$S:0}
C.esl.prototype={
$0(){return this.a.y=1},
$S:0}
C.esa.prototype={
$0(){return this.a.y=1},
$S:0}
C.esb.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.esC.prototype={
$1(d){return d.a.length===0},
$S:16}
C.esD.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.esH.prototype={
$0(){var w=this.a
return w.l(new C.esA(w))},
$S:0}
C.esA.prototype={
$0(){return this.a.y=1},
$S:0}
C.esI.prototype={
$0(){var w=this.a
return w.l(new C.esz(w))},
$S:0}
C.esz.prototype={
$0(){return this.a.y=2},
$S:0}
C.esJ.prototype={
$0(){return B.j7(this.a,null)},
$S:0}
C.esE.prototype={
$2$cloudRequest(d,e){return this.a.b3R(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2114}
C.esF.prototype={
$0(){return this.a.Fs()},
$S:1}
C.esG.prototype={
$0(){var w=this.a
return w.l(new C.esB(w))},
$S:0}
C.esB.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.es7.prototype={
$0(){B.eZ()
var w=this.a
w.l(new C.es6(w))},
$S:0}
C.es6.prototype={
$0(){return this.a.y=0},
$S:0}
C.es5.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bJ9(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ab(1,A.H,A.aE.j(0.55),A.J,18)],x.V),D.cbn,A.a6),t,t,t,t,t,t,t,t),A.ei,A.tl,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9N(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.h,0,t,t)],w),t)},
$S:67}
C.esd.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eZ()
w.l(new C.esc(w,v))},
$S:0}
C.esc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dvk.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.h3||v===A.fa)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dvl.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:637}
C.dvm.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dI(C.hg5(v.c,u))
w=this.c?new C.dvj(v):null
return v.bcn(this.b,A.ng,D.f6,w,"Today","$"+u,D.f6)},
$S:2116}
C.dvj.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dvn.prototype={
$2(d,e){var w=this.a
return w.bcn(this.b,A.ki,A.ce,w.w,"Balance","$"+B.dI(B.Mf(w.c.a,new C.dvi(w))),A.ct)},
$S:75}
C.dvi.prototype={
$0(){return this.a.c.d},
$S:83}
C.dvd.prototype={
$0(){this.a.a.d_3()
return null},
$S:0}
C.dve.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.d()
v=v.x
v===$&&B.d()
return B.b4(w,w,w,new C.bzp(v,w),A.az)},
$S:63}
C.dvf.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.beM(v,!0,A.aE,D.px,w)}else{v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.beL(v,D.px,w)}return B.b4(w,w,w,v,A.az)},
$S:63}
C.dvg.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:637}
C.dvh.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cYJ(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.i.D(v/u,0,1)}u=w.d
u===$&&B.d()
s=w.e
s===$&&B.d()
return B.c7(new B.hi(B.a([u,s],x.U)),new C.dvc(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2117}
C.dvc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iF(7,new C.dvb(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.d()
v=v.x
v===$&&B.d()
u=o.d
l.push(B.b4(n,n,n,new C.beK(o.c,v,k,u,D.px,D.bzB,n),D.ftc))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.vo
else t=o.e?A.vc:D.bUB
t=B.W(t,k?D.px:A.b3,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.c(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.F,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dI(w.f&&w.d>0?w.d:o.f)}q=k?D.px:A.c
w=B.c(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.ak,s,A.at,w,A.P,B.o(n,B.c(o.r,n,n,n,n,n,n,B.l(n,n,k?D.px:A.pC,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.m),n,n,n,n,A.ly,n,n,n)],m),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a6(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:233}
C.dvb.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=A.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dq(!0,B.d3(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.px.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.m),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:238}
C.dvE.prototype={
$0(){},
$S:0}
C.dvF.prototype={
$0(){},
$S:0}
C.dvG.prototype={
$1(d){return d.x===A.dM},
$S:16}
C.dvq.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.dvp.prototype={
$0(){var w,v
B.eZ()
w=this.a
v=this.b
w.l(new C.dvo(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f5(null,x.H)}},
$S:0}
C.dvo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dvB.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jh,B.ay(v,B.cU(A.z,B.c("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b_,new B.n(q,v,p,r,v,v,A.m),A.hk,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dvD(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2119}
C.dvD.prototype={
$0(){B.eZ()
var w=this.a
w.l(new C.dvC(w,this.b))},
$S:0}
C.dvC.prototype={
$0(){var w=""+this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dvA.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.v2,B.A(B.a([v,A.aY,B.c(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2120}
C.dvz.prototype={
$1(d){return this.a.l(new C.dvy())},
$S:2}
C.dvy.prototype={
$0(){},
$S:0}
C.dvt.prototype={
$1(d){return this.a.aZO(d)&&!B.hor(d)},
$S:16}
C.dvu.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.dvv.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.dvw.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dM(s,x.H),$async$$0)
case 2:if(t.c!=null)t.l(new C.dvs())
t.mu("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dvs.prototype={
$0(){},
$S:0}
C.dvx.prototype={
$0(){var w=this.a
return w.l(new C.dvr(w))},
$S:0}
C.dvr.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fRZ.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.fJG.prototype={
$1(d){var w=J.a2(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h2m.prototype={
$1(d){var w=J.a2(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fJF.prototype={
$1(d){var w,v,u
if(!C.iqP(d,this.a))return!1
w=J.a2(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bh(J.k(w==null?"":w))}if(u!=null&&A.o.ap(new B.V(Date.now(),0,!1).bz(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fxF.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.h0N.prototype={
$0(){return $.hlF=null},
$S:12}
C.h0O.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fZo.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fZp.prototype={
$0(){var w,v=this.a
$.hlt.W(0,v)
w=C.uD(this.b,v)
if(w!=null)B.Sc(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h3y.prototype={
$1(d){return new C.a1c(this.a,this.b,null)},
$S:z+56}
C.emH.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.emK.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.emL.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.l(new C.emJ(w))},
$S:2}
C.emJ.prototype={
$0(){return this.a.f=""},
$S:0}
C.emM.prototype={
$1(d){return this.a.b2O()},
$S:2}
C.emN.prototype={
$0(){var w=this.a
return w.l(new C.emI(w,this.b))},
$S:0}
C.emI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fID.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fIC.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.h14.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.ak()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.h15.prototype={
$1(d){return J.cL(d)},
$S:4}
C.fVn.prototype={
$1(d){return d.a!=="send_email"},
$S:314}
C.h0v.prototype={
$1(d){var w=null,v=A.v.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.c(d,w,w,w,w,w,w,A.hs,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,86,w,A.fd,w,w,w,72)},
$S:621}
C.clY.prototype={
$1(d){return J.k(d)},
$S:15}
C.clZ.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.clX(),x.S)
w=B.B(w,w.$ti.k("aj.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:422}
C.clX.prototype={
$1(d){var w
if(B.j0(d))w=d
else{w=B.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:300}
C.cm_.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.clW(),x.S)
w=B.B(w,w.$ti.k("aj.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:422}
C.clW.prototype={
$1(d){var w
if(B.j0(d))w=d
else{w=B.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:300}
C.cm1.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:612}
C.cm2.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:612}
C.clV.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.cm0.prototype={
$2(d,e){return d+e},
$S:70}
C.clU.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:70}
C.fLr.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fLl.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fLm.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fLn.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fLo.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fLp.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fLq.prototype={
$0(){return this.a.$1(D.rp)},
$S:0}
C.fuE.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ap(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_x:D.bkT
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bn],w):B.a([A.bs,A.v],w)
v=n?A.aQ:A.dH
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ab(0,A.H,A.v.j(0.35),A.dR,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fuD(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:85}
C.fuD.prototype={
$0(){var w=this,v=w.a,u=v.d41(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.rp:D.K6
w.f.$1(v)}},
$S:0}
C.fIZ.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a6(u,u,B.iE(!0,v,v,A.y,A.aW7,new C.fIY(w.a,w.b,w.c,w.d,u),9,v,A.e4,A.ah,!1),v)},
$S:128}
C.fIY.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aB
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.c(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fIX(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.h7,0,v,v,v,v,v,A.ai)},
$S:86}
C.fIX.prototype={
$0(){var w=this,v=w.a.d43(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.ftW.prototype={
$1(d){return new B.D(A.jh,C.fZf(d,!1),null)},
$S:339}
C.ftX.prototype={
$1(d){return C.fZf(d,!1)},
$S:2124}
C.ftY.prototype={
$0(){var w=this,v=w.a
v.cOk(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.ftZ.prototype={
$0(){var w=this
w.a.cOl(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fFS.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mF(v,A.bs,B.c(""+u,v,v,v,v,v,v,A.cc,v,v,v),A.dn,new C.fFR(w.a,w.b,u,w.c,w.d),v,v,new B.av(A.c.j(0.2),1,A.r,-1),v)},
$S:2125}
C.fFR.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fHP.prototype={
$1(d){return D.dxP[d]},
$S:81}
C.fHQ.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fEF.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fEG.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fv8.prototype={
$0(){var w=this,v=w.a.cUa(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fv7.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.lV
else w=u===1?A.dU:A.tR
return new B.fJ(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nY,v,v,v,v),v)},
$S:2126}
C.fER.prototype={
$1(d){var w=this
if(w.a.bfQ(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fES.prototype={
$0(){var w=this
if(w.a.bfQ(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fur.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fR1.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fR2.prototype={
$1(d){var w,v=J.a2(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:52}
C.eW6.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNx.prototype
w.bzB=w.Z
w.bzA=w.t
w=C.aNy.prototype
w.bzD=w.Z
w.bzC=w.t
w=C.aNz.prototype
w.bzF=w.Z
w.bzE=w.t
w=C.aOw.prototype
w.bAE=w.Z
w.bAD=w.t
w=C.aO4.prototype
w.bAb=w.t
w=C.aOG.prototype
w.bAO=w.t
w=C.aNA.prototype
w.bzG=w.t
w=C.aOO.prototype
w.bAX=w.t
w=C.aNF.prototype
w.bzL=w.t
w=C.aNV.prototype
w.bA1=w.t
w=C.aPq.prototype
w.bBz=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aD3.prototype,"gbWw","bWx",19)
v(q,"gaW3","aW4",1)
v(C.aD2.prototype,"gcEu","a3T",1)
v(q=C.aD4.prototype,"gc12","c13",1)
v(q,"gbLr","bLs",1)
v(q=C.aA5.prototype,"gcxm","cxn",1)
v(q,"gcls","Ru",0)
v(q,"gcIF","cIG",1)
v(q,"gcAu","nl",0)
w(q,"gcpW","cpX",25)
w(q,"gcGR","Td",33)
v(q=C.aFa.prototype,"gbUs","YX",0)
v(q,"gcat","a_w",0)
v(q,"gcaq","a_v",0)
v(q,"gcar","afa",0)
v(q,"gcas","Qg",0)
v(C.aCl.prototype,"gcau","cav",1)
u(C,"iyo","i2B",58)
t(C,"hoz",0,null,["$1","$0"],["hKX",function(){return C.hKX(null)}],3,0)
t(C,"bHz",0,null,["$1","$0"],["hKW",function(){return C.hKW(null)}],3,0)
v(C.Oc.prototype,"gFc","ciC",1)
v(C.aFW.prototype,"gcxE","BC",0)
v(q=C.aGb.prototype,"gclO","Rw",0)
v(q,"gcqI","a24",0)
v(q,"gceI","ceJ",1)
v(q=C.aGn.prototype,"gceN","agf",0)
v(q,"gbES","aa8",0)
v(q,"gcxV","a30",0)
s(q,"gcj6","cj7",35)
v(C.aIr.prototype,"gbFj","aaa",1)
v(q=C.aIq.prototype,"gceM","age",0)
v(q,"gckJ","ahn",0)
v(q=C.aGp.prototype,"gc4H","adU",0)
v(q,"gc4J","ZC",0)
v(q,"gc4I","adV",0)
v(q=C.aGo.prototype,"gbHI","bHJ",1)
v(q,"gbHK","bHL",1)
v(C.aGq.prototype,"gbNF","bNG",1)
v(C.aDo.prototype,"gceP","ceQ",1)
v(q=C.aGN.prototype,"gb2H","cf7",1)
r(q,"gb3P",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ah0","aAQ","b3R","b3Q"],52,0,0)
r(q,"gcik",0,4,null,["$4"],["cil"],53,0,0)
v(q,"gckr","a1e",0)
v(q,"gclj","ahu",0)
v(q,"gcle","ahs",0)
v(q,"gc86","aeH",0)
w(C.aEb.prototype,"gc6F","c6G",54)
w(q=C.aEd.prototype,"gcFK","cFL",55)
v(q,"gcEk","cEl",1)
v(q,"gcMv","cMw",1)
v(C.aGB.prototype,"gcft","b2O",1)
v(C.aHr.prototype,"gb3l","aAC",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.mH,[C.cCU,C.cCR,C.cCS,C.cCT,C.cCQ,C.fi2,C.fi0,C.fi4,C.fi1,C.fBN,C.dn5,C.dng,C.dno,C.dnp,C.dnr,C.dnj,C.dnh,C.dni,C.dnk,C.dnl,C.dnb,C.dnc,C.dna,C.dne,C.dnf,C.dn8,C.dn7,C.dnt,C.dnw,C.e0U,C.e0T,C.e0V,C.e0S,C.e0R,C.dn_,C.dn2,C.dn3,C.dn1,C.dn0,C.doS,C.doT,C.doU,C.do7,C.do8,C.doC,C.don,C.doo,C.dop,C.doq,C.dor,C.dnA,C.do6,C.doD,C.doM,C.doA,C.doz,C.do4,C.do5,C.doI,C.doJ,C.dnC,C.dnD,C.dog,C.doh,C.doi,C.dof,C.dos,C.dot,C.dou,C.dov,C.dow,C.dox,C.doG,C.doj,C.dok,C.dol,C.dom,C.doK,C.doL,C.dnE,C.dnF,C.dnG,C.dnH,C.doE,C.doF,C.doe,C.doy,C.doc,C.doN,C.doO,C.doP,C.do9,C.dnT,C.dnS,C.dnR,C.dnX,C.dnQ,C.dnO,C.dnJ,C.dnM,C.dnI,C.do1,C.do2,C.dnK,C.dsq,C.cOf,C.cO5,C.cO6,C.cOp,C.cOm,C.cOn,C.cOo,C.cOh,C.cOg,C.cO7,C.cOi,C.cOI,C.cOE,C.cOD,C.cOd,C.cOe,C.cOa,C.cOl,C.cOt,C.cOu,C.cOv,C.cOw,C.cOx,C.cOy,C.cOz,C.cOU,C.cON,C.cOK,C.cOP,C.cOM,C.cOJ,C.cO8,C.cOG,C.dJd,C.dJe,C.dJ4,C.dJ2,C.dJc,C.dJ1,C.dJ0,C.dJ3,C.dJ8,C.dJ9,C.dJ6,C.dJ7,C.dJf,C.dJg,C.dJh,C.dJi,C.fbt,C.fbu,C.dhQ,C.fRT,C.dPG,C.dPy,C.dPA,C.dPE,C.dPz,C.dPB,C.dPC,C.cej,C.fZd,C.fZc,C.dIQ,C.dIP,C.dIR,C.dIO,C.e8s,C.e8t,C.e8A,C.h7s,C.h7t,C.c6A,C.e1_,C.e10,C.e11,C.e12,C.e13,C.e14,C.e0Z,C.e15,C.e0Y,C.e18,C.e17,C.e16,C.e8I,C.e8J,C.e8G,C.e8F,C.e8H,C.e8D,C.ecI,C.ecJ,C.ecr,C.ect,C.ecF,C.ecG,C.ecA,C.ecy,C.ecE,C.ecB,C.ecv,C.ecu,C.ecK,C.cXR,C.cXP,C.cXQ,C.cXO,C.cXU,C.cXV,C.f6n,C.f6s,C.f6p,C.f6r,C.f6q,C.f6j,C.f6i,C.f6l,C.f6k,C.ed4,C.ed9,C.ed5,C.ed6,C.ed8,C.ede,C.edf,C.edg,C.edh,C.edi,C.edj,C.edk,C.edl,C.edd,C.edm,C.edc,C.edb,C.eda,C.ecY,C.ecZ,C.ecQ,C.ecR,C.ecS,C.ecU,C.cR9,C.dtk,C.dtm,C.dtl,C.edC,C.edw,C.edx,C.edz,C.edA,C.edB,C.edF,C.edE,C.edL,C.edK,C.eds,C.edr,C.edM,C.edD,C.edq,C.h8k,C.dqL,C.dqJ,C.es3,C.ess,C.est,C.esu,C.esv,C.esx,C.esy,C.esn,C.es4,C.esr,C.es8,C.es9,C.esh,C.ese,C.esf,C.esg,C.esi,C.esj,C.esk,C.esm,C.esl,C.esa,C.esb,C.esH,C.esA,C.esI,C.esz,C.esJ,C.esF,C.esG,C.esB,C.es7,C.es6,C.esd,C.esc,C.dvj,C.dvi,C.dvd,C.dvE,C.dvF,C.dvq,C.dvp,C.dvo,C.dvD,C.dvC,C.dvy,C.dvv,C.dvw,C.dvs,C.dvx,C.dvr,C.h0N,C.fZp,C.emH,C.emK,C.emJ,C.emN,C.emI,C.fLl,C.fLm,C.fLn,C.fLo,C.fLp,C.fLq,C.fuD,C.fIX,C.ftY,C.ftZ,C.fFR,C.fHQ,C.fEG,C.fv8,C.fES,C.fur,C.eW6])
u(B.kt,[C.cCV,C.fi3,C.fVH,C.fVz,C.fBK,C.fBJ,C.fBM,C.dny,C.dnz,C.dnn,C.dnm,C.dnq,C.dn9,C.dnd,C.dns,C.e0X,C.dn4,C.doV,C.doW,C.doX,C.doY,C.doZ,C.doB,C.doH,C.dnB,C.doR,C.doQ,C.dnU,C.dnV,C.dnW,C.dnY,C.do_,C.dsr,C.cOV,C.cOk,C.cOj,C.cOC,C.cOF,C.cOB,C.cOb,C.cOs,C.cOq,C.cOH,C.cOr,C.cOQ,C.cOO,C.cOT,C.c5h,C.c5g,C.c5j,C.c5i,C.dJb,C.dJa,C.dJ5,C.dJj,C.dJk,C.fGr,C.fHE,C.dhR,C.dhP,C.c63,C.fRS,C.dPH,C.dPF,C.cek,C.fIt,C.fZb,C.cgL,C.cgK,C.chc,C.e8q,C.e8r,C.fUf,C.fU2,C.fU1,C.fEJ,C.chq,C.chr,C.chs,C.chp,C.cho,C.fBs,C.h7o,C.h7p,C.h7q,C.h7r,C.h7n,C.e8x,C.e8y,C.e8w,C.h7u,C.dp_,C.cja,C.fAn,C.e19,C.e8E,C.chZ,C.chW,C.chY,C.ci0,C.c9I,C.c9G,C.c9L,C.ci9,C.ci8,C.ci7,C.ci6,C.cib,C.cid,C.ecO,C.ecs,C.ecq,C.ecH,C.ecz,C.ecD,C.ecC,C.ecx,C.ecM,C.ecL,C.cXS,C.cXT,C.f6o,C.f6h,C.f6m,C.ci3,C.fWb,C.edo,C.ed7,C.ed0,C.ed1,C.ed2,C.ed3,C.edn,C.ci5,C.cRa,C.cRb,C.fA3,C.edt,C.edv,C.edy,C.edG,C.edH,C.edI,C.edp,C.h8l,C.dqF,C.dqI,C.ck4,C.ckh,C.esK,C.esL,C.esM,C.esw,C.eso,C.esp,C.esq,C.esC,C.esE,C.dvk,C.dvl,C.dvg,C.dvb,C.dvG,C.dvB,C.dvA,C.dvz,C.dvt,C.fJG,C.h2m,C.fJF,C.fxF,C.h0O,C.fZo,C.h3y,C.emL,C.emM,C.fID,C.fIC,C.h14,C.h15,C.fVn,C.h0v,C.clY,C.clZ,C.clX,C.cm_,C.clW,C.cm1,C.cm2,C.clV,C.fLr,C.ftW,C.ftX,C.fFS,C.fHP,C.fEF,C.fv7,C.fER,C.fR1,C.fR2])
t(C.bvs,B.jQ)
u(B.ag,[C.Gi,C.ano,C.aFV,C.ann,C.anp,C.aob,C.ake,C.apK,C.a0T,C.a0U,C.a0_,C.aqg,C.apJ,C.OI,C.aD5,C.arr,C.as9,C.X3,C.QO,C.a1G,C.a1F,C.X4,C.asq,C.aDZ,C.ast,C.a0o,C.at2,C.aEa,C.aEc,C.a1c,C.aup])
u(B.ah,[C.aL0,C.aNy,C.aOw,C.aNx,C.aNz,C.bkf,C.aA5,C.aFa,C.bmI,C.bmJ,C.aCl,C.bmQ,C.aO4,C.aOG,C.aNA,C.aFW,C.aGb,C.aGn,C.bei,C.aIr,C.aIq,C.aGp,C.aGo,C.bkt,C.aOO,C.aNF,C.bBo,C.aNV,C.aEd,C.aGB,C.aPq])
u(B.mn,[C.fi5,C.fBL,C.dn6,C.dnx,C.dnv,C.dnu,C.e0W,C.dod,C.dob,C.doa,C.dnP,C.dnZ,C.dnN,C.do0,C.dnL,C.do3,C.cOA,C.cOc,C.cOL,C.cOS,C.cOR,C.cO9,C.dhO,C.dPD,C.fIu,C.fIv,C.e8u,C.fVC,C.h7m,C.e8z,C.e8C,C.e8B,C.dp0,C.cjb,C.ci_,C.chX,C.c9J,C.c9H,C.cic,C.ecP,C.ecw,C.ecN,C.f6u,C.f6t,C.ed_,C.ecT,C.ecV,C.ecX,C.ecW,C.edu,C.edJ,C.dqG,C.dqK,C.dqH,C.esD,C.es5,C.dvm,C.dvn,C.dve,C.dvf,C.dvh,C.dvc,C.dvu,C.fRZ,C.cm0,C.clU,C.fuE,C.fIZ,C.fIY])
t(C.ayh,C.Gi)
u(B.aK,[C.ri,C.afv,C.Oc,C.JL,C.rV,C.rW,C.m0,C.iG,C.iv,C.bck,C.deM,C.dtj,C.t0,C.X5,C.OZ,C.qm,C.b2z,C.pF,C.att])
t(C.aD3,C.aNy)
t(C.bnc,C.aOw)
t(C.aD2,C.aNx)
t(C.aD4,C.aNz)
u(B.qB,[C.XM,C.aE_,C.atg,C.JQ,C.FG])
u(B.aw,[C.a2g,C.bvZ,C.agg,C.Rq,C.a8j,C.OA,C.as3,C.af7,C.af6,C.b3o,C.aDY,C.adC,C.b2W,C.ads,C.aEb])
t(C.bmG,C.aO4)
t(C.bnq,C.aOG)
t(C.biV,C.aNA)
t(C.aGq,C.aOO)
t(C.aDo,C.aNF)
t(C.aGN,C.bBo)
t(C.bld,C.aNV)
u(B.qc,[C.beM,C.beL,C.beK,C.beb,C.bzp,C.bud])
t(C.aHr,C.aPq)
w(C.aNx,C.Oc)
w(C.aNy,C.Oc)
w(C.aNz,C.Oc)
w(C.aOw,C.Oc)
w(C.aO4,B.eP)
w(C.aOG,B.cg)
w(C.aNA,B.cg)
w(C.aOO,B.cg)
w(C.aNF,B.eP)
w(C.aNV,B.eP)
v(C.bBo,B.eJ)
w(C.aPq,B.cg)})()
B.nN(b.typeUniverse,JSON.parse('{"bvs":{"jQ":[]},"Gi":{"ag":[],"w":[]},"aL0":{"ah":["Gi<1,2>"]},"ayh":{"Gi":["1","hA<1>"],"ag":[],"w":[],"Gi.T":"1","Gi.S":"hA<1>"},"ano":{"ag":[],"w":[]},"aFV":{"ag":[],"w":[]},"ann":{"ag":[],"w":[]},"anp":{"ag":[],"w":[]},"aob":{"ag":[],"w":[]},"ake":{"ag":[],"w":[]},"aD3":{"ah":["ano"]},"bnc":{"ah":["aFV"]},"aD2":{"ah":["ann"]},"aD4":{"ah":["anp"]},"bkf":{"ah":["aob"]},"aA5":{"ah":["ake"]},"apK":{"ag":[],"w":[]},"a0T":{"ag":[],"w":[]},"a0U":{"ag":[],"w":[]},"agg":{"aw":[],"w":[]},"a0_":{"ag":[],"w":[]},"aFa":{"ah":["apK"]},"a2g":{"aw":[],"w":[]},"bvZ":{"aw":[],"w":[]},"bmI":{"ah":["a0T"]},"bmJ":{"ah":["a0U"]},"Rq":{"aw":[],"w":[]},"aCl":{"ah":["a0_"]},"aqg":{"ag":[],"w":[]},"bmQ":{"ah":["aqg"]},"a8j":{"aw":[],"w":[]},"apJ":{"ag":[],"w":[]},"bmG":{"ah":["apJ"]},"OA":{"aw":[],"w":[]},"as3":{"aw":[],"w":[]},"OI":{"ag":[],"w":[]},"bnq":{"ah":["OI"]},"af7":{"aw":[],"w":[]},"af6":{"aw":[],"w":[]},"aD5":{"ag":[],"w":[]},"biV":{"ah":["aD5"]},"b3o":{"aw":[],"w":[]},"arr":{"ag":[],"w":[]},"aFW":{"ah":["arr"]},"as9":{"ag":[],"w":[]},"aGb":{"ah":["as9"]},"X3":{"ag":[],"w":[]},"QO":{"ag":[],"w":[]},"a1G":{"ag":[],"w":[]},"a1F":{"ag":[],"w":[]},"aGn":{"ah":["X3"]},"bei":{"ah":["QO"]},"aIr":{"ah":["a1G"]},"aIq":{"ah":["a1F"]},"X4":{"ag":[],"w":[]},"aGp":{"ah":["X4"]},"asq":{"ag":[],"w":[]},"adC":{"aw":[],"w":[]},"ads":{"aw":[],"w":[]},"aDZ":{"ag":[],"w":[]},"aGo":{"ah":["asq"]},"aDY":{"aw":[],"w":[]},"b2W":{"aw":[],"w":[]},"bkt":{"ah":["aDZ"]},"ast":{"ag":[],"w":[]},"aGq":{"ah":["ast"]},"a0o":{"ag":[],"w":[]},"aDo":{"ah":["a0o"]},"at2":{"ag":[],"w":[]},"aEa":{"ag":[],"w":[]},"aEc":{"ag":[],"w":[]},"aGN":{"ah":["at2"],"eJ":[]},"aEb":{"aw":[],"w":[]},"bld":{"ah":["aEa"]},"beM":{"aB":[]},"beL":{"aB":[]},"beK":{"aB":[]},"aEd":{"ah":["aEc"]},"beb":{"aB":[]},"bzp":{"aB":[]},"a1c":{"ag":[],"w":[]},"aGB":{"ah":["a1c"]},"bud":{"aB":[]},"aup":{"ag":[],"w":[]},"aHr":{"ah":["aup"]}}'))
B.a2G(b.typeUniverse,JSON.parse('{"Oc":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aD
return{dw:w("lc<u?>"),gS:w("oH"),o:w("dd"),g5:w("xP"),M:w("dk<p>"),k:w("V"),gv:w("lg<ai<jw>>"),gh:w("lg<p>"),gH:w("lg<G>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oH>"),E:w("U<dd>"),V:w("U<ab>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o6>"),B:w("U<ai<G>>"),m:w("U<aa<p,p>>"),_:w("U<aa<p,@>>"),b:w("U<rV>"),x:w("U<rW>"),gi:w("U<jw>"),a:w("U<m0>"),Y:w("U<iv>"),v:w("U<iG>"),dA:w("U<JL>"),F:w("U<t0>"),Z:w("U<kN>"),g:w("U<hR>"),gK:w("U<+at,details,id(V,p,p)>"),C:w("U<dc>"),s:w("U<p>"),G:w("U<jQ>"),eO:w("U<et>"),d9:w("U<f_>"),p:w("U<w>"),n:w("U<H>"),t:w("U<G>"),U:w("U<aB?>"),d4:w("U<p?>"),ck:w("ai<rV>"),e:w("ai<rW>"),ac:w("ai<jw>"),dZ:w("ai<m0>"),I:w("ai<iv>"),j:w("ai<@>"),L:w("ai<G>"),eq:w("aa<p,p>"),P:w("aa<p,@>"),f:w("aa<@,@>"),cl:w("cM<p,D>"),aS:w("N<a_,tN>"),dc:w("N<JQ,bx>"),dv:w("N<p,p>"),bL:w("N<H,bx>"),a3:w("N<G,bx>"),gN:w("N<G,qe>"),w:w("kL"),b1:w("rV"),Q:w("rW"),bP:w("m0"),i:w("iv"),u:w("iG"),gp:w("X5"),J:w("OZ"),D:w("qm"),an:w("kN"),c:w("cw"),K:w("aK"),d:w("jK<p>"),di:w("+outcome,snapshot(XM,a7E?)"),ee:w("+after,before(H,H)"),et:w("+categories,error,message,replaceId(ai<iv>,p?,p?,p?)"),cz:w("Kj"),bJ:w("dw<p>"),N:w("p"),e7:w("bt<H>"),W:w("bl<p>"),am:w("kn<G>"),cc:w("X<p>"),aM:w("ef<dd>"),bG:w("ef<H>"),l:w("w"),gm:w("ri"),ec:w("afv"),q:w("pa"),y:w("Q"),gR:w("H"),z:w("@"),S:w("G"),eG:w("dd?"),cJ:w("V?"),gw:w("ai<aa<p,@>>?"),bM:w("ai<@>?"),h:w("aa<p,@>?"),X:w("aK?"),gE:w("+code,qrPayload(p,p)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,p,p)?"),T:w("p?"),cD:w("H?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b76=new B.bb(A.bJ,A.jG,A.bJ,A.jG)
D.f6=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b7E=new B.av(D.f6,1,A.r,-1)
D.b7G=new B.av(A.ab,2,A.r,-1)
D.b7J=new B.av(A.aV,2,A.r,-1)
D.b7L=new B.av(A.cB,0.8,A.r,-1)
D.b8_=new B.av(A.aQ,2,A.r,-1)
D.b86=new B.av(A.fk,1.6,A.r,-1)
D.b91=new B.aY(0,176,0,1/0)
D.b92=new B.aY(0,1/0,0,260)
D.b9k=new B.aY(90,1/0,0,1/0)
D.bcj=new B.ab(0,A.H,A.dH,A.J,4)
D.dc7=w([D.bcj],x.V)
D.b9y=new B.n(A.c,null,null,null,D.dc7,null,A.a6)
D.d4V=w([D.f6,A.b5],x.O)
D.cev=new B.a7(A.a5,A.a9,A.x,D.d4V,null,null)
D.b9M=new B.n(null,null,null,null,null,D.cev,A.a6)
D.b9R=new B.n(A.be,null,null,null,null,null,A.a6)
D.bnK=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dud=w([O.aih,D.bnK],x.O)
D.cdz=new B.a7(A.aX,A.b1,A.x,D.dud,null,null)
D.ba7=new B.n(null,null,null,A.mR,null,D.cdz,A.m)
D.bw8=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dHK=w([D.bw8,A.akL],x.O)
D.ccJ=new B.a7(A.aX,A.b1,A.x,D.dHK,null,null)
D.bay=new B.n(null,null,null,A.ut,null,D.ccJ,A.m)
D.dpz=w([A.aD,A.bA],x.O)
D.cdi=new B.a7(A.a5,A.a9,A.x,D.dpz,null,null)
D.baE=new B.n(null,null,null,null,null,D.cdi,A.a6)
D.fI2=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h23=new B.C("\ud83c\udf89",null,D.fI2,null,null,null,null,null,null,null,null,null)
D.bgq=new B.cl(A.z,null,null,D.h23,null)
D.bhT=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.ahl=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bkT=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bkX=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.px=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uE=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.aiH=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bnk=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.yR=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bp8=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_x=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.akk=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.btQ=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.btZ=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akP=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.bvA=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bvH=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bwR=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a0m=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.by1=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.byH=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0A=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bzB=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.amq=new B.a5x(2,"active")
D.bDV=new B.bf(42e5)
D.bDY=new B.bf(53e4)
D.bE0=new B.bf(58e4)
D.bE4=new B.bf(82e4)
D.bES=new B.P(0,30,0,30)
D.bF_=new B.P(0,4,0,8)
D.bF3=new B.P(0,8,12,8)
D.bFG=new B.P(12,0,12,88)
D.bFN=new B.P(12,11,12,10)
D.bGe=new B.P(13,10,12,10)
D.bGq=new B.P(14,10,14,2)
D.bGC=new B.P(14,14,10,14)
D.bHb=new B.P(16,12,16,96)
D.bHg=new B.P(16,14,16,8)
D.bHk=new B.P(16,16,16,96)
D.bHl=new B.P(16,18,16,16)
D.bHp=new B.P(16,4,16,10)
D.bIq=new B.P(18,6,18,40)
D.bID=new B.P(20,10,20,20)
D.bIS=new B.P(20,18,20,18)
D.bJi=new B.P(22,22,22,16)
D.bJX=new B.P(2,0,2,10)
D.bKJ=new B.P(4,8,12,4)
D.bKY=new B.P(6,1,6,1)
D.bL_=new B.P(6,4,0,0)
D.bL5=new B.P(6,6,12,4)
D.bLq=new B.P(8,4,12,8)
D.h5H=new B.C("Activity",null,A.fP,null,null,null,null,null,null,null,null,null)
D.bNr=new B.bx(1,A.ba,D.h5H,null)
D.her=new B.C("Game Receipts",null,A.uf,null,null,null,null,null,null,null,null,null)
D.fXU=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.acQ,null,null,null,null,null,null,null,null,null)
D.d1f=w([D.her,D.fXU],x.p)
D.bAH=new B.fq(A.ah,A.e,A.h,A.B,null,A.p,null,0,D.d1f,null)
D.bNu=new B.bx(1,A.ba,D.bAH,null)
D.bSo=new B.a_(58607,"MaterialIcons",!1)
D.a3H=new B.a_(62178,"MaterialIcons",!1)
D.bTf=new B.a_(62410,"MaterialIcons",!1)
D.bUp=new B.a_(63258,"MaterialIcons",!1)
D.bUu=new B.a_(63304,"MaterialIcons",!1)
D.bUv=new B.a_(63306,"MaterialIcons",!1)
D.bUB=new B.a_(63330,"MaterialIcons",!1)
D.asX=new B.a_(984777,"MaterialIcons",!1)
D.bX7=new B.ae(A.Dr,13,A.ab,null,null,null)
D.bXf=new B.ae(A.jA,13,A.qM,null,null,null)
D.ata=new B.ae(A.m5,null,A.c,null,null,null)
D.bYR=new B.ae(A.zZ,34,A.au,null,null,null)
D.bZn=new B.ae(A.Du,19,A.c,null,null,null)
D.bZx=new B.ae(A.are,24,A.aQ,null,null,null)
D.c_1=new B.ae(A.Dn,28,A.bp,null,null,null)
D.c_x=new B.ae(A.asA,42,A.c,null,null,null)
D.c_H=new B.ae(A.a4F,30,A.c,null,null,null)
D.c0p=new B.ae(A.fY,null,A.c,null,null,null)
D.c0M=new B.ae(A.jA,16,A.c,null,null,null)
D.c1t=new B.ae(A.tD,13,A.c,null,null,null)
D.c1C=new B.ae(A.m5,18,A.c,null,null,null)
D.c2b=new B.ae(A.x9,null,A.dU,null,null,null)
D.c2S=new B.ae(A.o5,28,A.c,null,null,null)
D.c38=new B.ae(A.p_,22,null,null,null,null)
D.c3x=new B.ae(A.ty,null,null,null,null,null)
D.c3J=new B.ae(A.fZ,28,A.c,null,null,null)
D.c3M=new B.ae(A.cA,null,A.aR,null,null,null)
D.c3W=new B.ae(A.a3n,14,A.c,null,null,null)
D.c4x=new B.ae(A.xe,36,A.aN,null,null,null)
D.c4E=new B.ae(A.nf,16,A.c,null,null,null)
D.boe=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c5v=new B.ae(A.ef,9,D.boe,null,null,null)
D.bVt=new B.a_(983146,"MaterialIcons",!1)
D.c5N=new B.ae(D.bVt,null,A.aQ,null,null,null)
D.c6m=new B.ae(A.ve,28,D.f6,null,null,null)
D.c6r=new B.ae(A.tu,null,A.fk,null,null,null)
D.c6w=new B.ae(A.hN,20,D.f6,null,null,null)
D.bVR=new B.a_(983377,"MaterialIcons",!1)
D.c6H=new B.ae(D.bVR,64,A.c,null,null,null)
D.c7d=new B.ae(A.h_,24,A.c,null,null,null)
D.c89=new B.e9(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c8k=new B.e9(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c8z=new B.e9(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c8A=new B.e9(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.blM=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bpx=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bp9=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.duy=w([D.blM,D.bpx,D.bp9],x.O)
D.caq=new B.a7(A.ay,A.aC,A.x,D.duy,null,null)
D.dAu=w([A.bi,A.b5],x.O)
D.caN=new B.a7(A.ay,A.aC,A.x,D.dAu,null,null)
D.bnC=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.buE=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.dcL=w([D.bnC,D.buE],x.O)
D.caV=new B.a7(A.ay,A.aC,A.x,D.dcL,null,null)
D.dwl=w([A.bs,A.a_,A.eh],x.O)
D.cb0=new B.a7(A.ay,A.aC,A.x,D.dwl,null,null)
D.cb3=new B.a7(A.a5,A.a9,A.x,E.aAw,null,null)
D.dbW=w([A.fk,A.ce],x.O)
D.auY=new B.a7(A.a5,A.a9,A.x,D.dbW,null,null)
D.dcr=w([A.fk,A.bA],x.O)
D.auZ=new B.a7(A.a5,A.a9,A.x,D.dcr,null,null)
D.aEJ=w([D.px,A.aE,A.c3],x.O)
D.cbn=new B.a7(A.ay,A.aC,A.x,D.aEJ,null,null)
D.brv=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d9B=w([D.brv,A.ahC,A.a_],x.O)
D.cbs=new B.a7(A.ay,A.aC,A.x,D.d9B,null,null)
D.b53=new B.dg(-0.8,-1)
D.b55=new B.dg(1.2,1)
D.d8A=w([A.c,A.eV,A.hj,A.c,A.fA,A.aH,A.oz],x.O)
D.dvF=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.cbu=new B.a7(D.b53,D.b55,A.x,D.d8A,D.dvF,null)
D.buu=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.brN=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dux=w([D.buu,D.brN],x.O)
D.cbX=new B.a7(A.a5,A.a9,A.x,D.dux,null,null)
D.cc2=new B.a7(A.ay,A.aC,A.x,A.Td,null,null)
D.doq=w([A.a0q,A.wE],x.O)
D.cc4=new B.a7(A.a5,A.a9,A.x,D.doq,null,null)
D.dtc=w([A.hw,A.h6],x.O)
D.av4=new B.a7(A.a5,A.a9,A.x,D.dtc,null,null)
D.dA1=w([A.be,A.bR],x.O)
D.av5=new B.a7(A.a5,A.a9,A.x,D.dA1,null,null)
D.cTc=w([A.dg,A.fw],x.O)
D.ccL=new B.a7(A.ay,A.aC,A.x,D.cTc,null,null)
D.d7u=w([A.c,A.bc],x.O)
D.ccV=new B.a7(A.a5,A.a9,A.x,D.d7u,null,null)
D.ajN=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bkD=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dkD=w([D.ajN,A.jR,A.rX,A.aE,D.bkD],x.O)
D.cfF=w([0,0.28,0.55,0.82,1],x.n)
D.ccX=new B.a7(A.ay,A.aC,A.x,D.dkD,D.cfF,null)
D.cd3=new B.a7(A.a5,A.a9,A.x,A.TV,null,null)
D.cd4=new B.a7(A.a5,A.a9,A.x,E.aD5,null,null)
D.cd9=new B.a7(A.a5,A.a9,A.x,D.aEJ,null,null)
D.de6=w([A.bA,A.fk],x.O)
D.cdo=new B.a7(A.a5,A.a9,A.x,D.de6,null,null)
D.dEH=w([A.aD,A.bA,A.bc],x.O)
D.cdq=new B.a7(A.a5,A.a9,A.x,D.dEH,null,null)
D.doB=w([A.au,A.bM,A.fK],x.O)
D.cdu=new B.a7(A.a5,A.a9,A.x,D.doB,null,null)
D.dEp=w([A.bs,A.aM,A.bP,A.bn,A.aS,A.cB,A.an],x.O)
D.diz=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cdy=new B.a7(A.ay,A.aC,A.x,D.dEp,D.diz,null)
D.cdI=new B.a7(A.ay,A.aC,A.x,A.a66,null,null)
D.dpf=w([K.uF,A.ed],x.O)
D.cdS=new B.a7(A.a5,A.a9,A.x,D.dpf,null,null)
D.dxY=w([D.akP,D.aiH,A.a_],x.O)
D.ce0=new B.a7(A.ay,A.aC,A.x,D.dxY,null,null)
D.bxm=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d84=w([A.fl,A.hw,D.bxm],x.O)
D.cex=new B.a7(A.ay,A.aC,A.x,D.d84,null,null)
D.deL=w([D.px,A.aE],x.O)
D.cez=new B.a7(A.ay,A.aC,A.x,D.deL,null,null)
D.cf4=w([F.xm,A.o5,A.jA,A.hO,A.jY,A.lb,A.km,A.rg,A.o4,A.f3,A.lA,A.zW,A.Io],x.A)
D.ciB=w([10,50,100,200],x.t)
D.csr=w([1,3,5,7],x.t)
D.cxv=w([25,50,100,250],x.t)
D.bVn=new B.a_(983104,"MaterialIcons",!1)
D.cGg=w([A.o5,A.mx,A.p_,A.m3,A.he,A.vo,D.bVn,A.a4A],x.A)
D.cLJ=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cYr=w([0,0.22,0.5,0.78,1],x.n)
D.d1p=w([8,13,19],x.n)
D.a6q=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h4G=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eJ7=new B.jK("questions",!0,48,null,D.h4G,null,x.d)
D.fUV=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eJe=new B.jK("edit",!0,48,null,D.fUV,null,x.d)
D.hcX=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eJ6=new B.jK("delete",!0,48,null,D.hcX,null,x.d)
D.d7z=w([D.eJ7,D.eJe,D.eJ6],B.aD("U<t4<p>>"))
D.dcF=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.dcV=w([A.bU,A.ft],x.O)
D.a9v=new C.m0("text","",null,null)
D.dek=w([D.a9v],x.a)
D.dg_=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f3Y=new B.afS(A.kJ,"Home")
D.eVb=new B.afS(A.ng,"Growth")
D.f_8=new B.afS(A.jA,"Wallet")
D.diQ=w([D.f3Y,D.eVb,D.f_8],B.aD("U<+icon,label(a_,p)>"))
D.djj=w([4,0,2,6,8,1,3,5,7],x.t)
D.djr=w([A.c,A.cj,A.cB],x.O)
D.e6n=new C.t0("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e6q=new C.t0("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e6o=new C.t0("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e6i=new C.t0("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e6j=new C.t0("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e6r=new C.t0("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6X=w([D.e6n,D.e6q,D.e6o,D.e6i,D.e6j,D.e6r],x.F)
D.a70=w([A.aB,A.bi,A.db,A.au],x.O)
D.bot=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dpn=w([A.ZB,D.bot,A.rX,A.iF,A.jR],x.O)
D.a78=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Tn=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cGv=w([3,4,5],x.t)
D.cTR=w([6,7,8],x.t)
D.cfb=w([0,3,6],x.t)
D.csw=w([1,4,7],x.t)
D.cA1=w([2,5,8],x.t)
D.cfg=w([0,4,8],x.t)
D.czZ=w([2,4,6],x.t)
D.ds5=w([I.avw,D.cGv,D.cTR,D.cfb,D.csw,D.cA1,D.cfg,D.czZ],x.B)
D.aMZ=new C.JQ(0,"abab")
D.e6g=new C.JQ(1,"aaaBbb")
D.aN_=new C.JQ(2,"aabb")
D.dth=w([D.aMZ,D.e6g,D.aN_],B.aD("U<JQ>"))
D.dtz=w([],x.a)
D.aDW=w([],x.v)
D.dxP=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.TH=w([1,2,3,-1,-2],x.t)
D.dHu=w([A.i0,A.aD],x.O)
D.hLc=new C.ri("dice","Dice Roll","Roll for cash & prizes!",A.o0,D.dHu)
D.hL9=new C.ri("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.vl,A.aCz)
D.dAX=w([A.dt,A.bp],x.O)
D.hL7=new C.ri("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a4m,D.dAX)
D.dGR=w([A.dX,A.nH],x.O)
D.hLd=new C.ri("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a4A,D.dGR)
D.csa=w([A.jO,A.t9],x.O)
D.hLa=new C.ri("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Qn,D.csa)
D.dxO=w([A.lU,D.a_x],x.O)
D.hL8=new C.ri("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ir,D.dxO)
D.hLb=new C.ri("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cA,A.o9)
D.dA0=w([D.hLc,D.hL9,D.hL7,D.hLd,D.hLa,D.hL8,D.hLb],B.aD("U<ri>"))
D.dBE=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.btz=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.btq=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.alG=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dCv=w([D.btz,D.btq,D.alG],x.O)
D.bw1=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dCx=w([A.ahB,D.bw1,D.alG],x.O)
D.dDc=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aF6=w([D.px,A.c,D.f6,A.c4,A.b3,A.aE],x.O)
D.e6l=new C.t0("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e6k=new C.t0("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e6h=new C.t0("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e6p=new C.t0("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e6s=new C.t0("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e6m=new C.t0("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7T=w([D.e6l,D.e6k,D.e6h,D.e6p,D.e6s,D.e6m],x.F)
D.dH5=w([A.ce,A.t9],x.O)
D.evw={checkers_deluxe:0,tic_tac_go:1}
D.aKX=new B.bq(D.evw,["Checkers Deluxe","Tic Tac Go"],B.aD("bq<p,p>"))
D.euz={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aL7=new B.bq(D.euz,[1,2,3,4,5,6,7],B.aD("bq<p,G>"))
D.dZN=new C.a8j(null)
D.e2l=new C.m0("signature","NGMY Support Team",null,null)
D.e2m=new C.m0("divider","",null,null)
D.UH=new C.X5(!1,!1,!1,!1)
D.UJ=new C.OZ(!1,!1,!1,!1)
D.e3u=new C.OZ(!0,!0,!1,!1)
D.EK=new C.atg(0,"swahili")
D.aMY=new C.atg(1,"english")
D.EL=new C.atg(2,"mix")
D.drt=w([A.iT,A.io,A.d9],x.O)
D.bU9=new B.a_(63118,"MaterialIcons",!1)
D.e7t=new C.pF(D.drt,A.h8,A.au,"BACKGAMMON","\ud83c\udfb2",D.bU9)
D.bWd=new B.a_(983637,"MaterialIcons",!1)
D.e7u=new C.pF(A.aFm,A.bi,A.er,"EURO WHEEL","\ud83c\udfa1",D.bWd)
D.dBZ=w([A.a_,A.aM,A.bz],x.O)
D.e7v=new C.pF(D.dBZ,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.Qn)
D.dc2=w([A.dg,A.bp,A.dV],x.O)
D.e7w=new C.pF(D.dc2,A.aB,A.db,"CONNECT 4","\ud83d\udd34",A.a4P)
D.dw_=w([A.dz,A.fw,A.t9],x.O)
D.e7x=new C.pF(D.dw_,A.wD,A.ce,"PUNTO BANCO","\ud83d\udc8e",A.mx)
D.cTe=w([A.oy,A.iD,A.ml],x.O)
D.e7y=new C.pF(D.cTe,A.jM,A.kE,"DOMINOES","\ud83c\udc53",A.asB)
D.dCK=w([A.z_,A.uJ,A.hG],x.O)
D.e7z=new C.pF(D.dCK,A.CH,A.hF,"WAR","\u2694\ufe0f",A.a40)
D.e7A=new C.pF(A.aFf,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.o0)
D.de7=w([A.kC,A.aD,A.dX],x.O)
D.e7B=new C.pF(D.de7,A.eD,A.fk,"JACKPOT","\ud83c\udfb0",A.o0)
D.duU=w([A.k6,A.lQ,A.bA],x.O)
D.e7C=new C.pF(D.duU,A.qw,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zP)
D.d4T=w([A.io,A.ed,A.au],x.O)
D.bTB=new B.a_(62865,"MaterialIcons",!1)
D.e7D=new C.pF(D.d4T,A.uP,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bTB)
D.e7E=new C.pF(A.a7Q,A.bn,A.bi,"HOLD'EM","\u2660\ufe0f",A.jA)
D.dDb=w([A.fl,A.h6,A.b5],x.O)
D.bSK=new B.a_(61234,"MaterialIcons",!1)
D.e7F=new C.pF(D.dDb,A.mm,A.aV,"CRAPS","\ud83c\udfb2",D.bSK)
D.dbb=w([A.ft,A.jt,A.bU],x.O)
D.e7G=new C.pF(D.dbb,A.bM,A.bc,"PLINKO","\ud83d\udc8e",A.Qw)
D.bW_=new B.a_(983492,"MaterialIcons",!1)
D.e7H=new C.pF(A.a7Q,A.eC,A.bi,"SNOOKER","\ud83c\udfb1",D.bW_)
D.dAo=w([A.fl,A.h6,A.aV],x.O)
D.e7I=new C.pF(D.dAo,A.uK,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hN)
D.dAM=w([A.eh,A.eq,A.bi],x.O)
D.bUA=new B.a_(63324,"MaterialIcons",!1)
D.e7J=new C.pF(D.dAM,A.wG,A.be,"KLONDIKE","\ud83c\udccf",D.bUA)
D.dsd=w([A.bB,A.bs,A.a_],x.O)
D.e7K=new C.pF(D.dsd,A.aQ,A.aM,"VEGAS TABLE","\ud83c\udccf",A.IG)
D.ro=new C.FG(0,"continueGame")
D.rp=new C.FG(1,"youWin")
D.K6=new C.FG(2,"youLose")
D.US=new C.FG(3,"draw")
D.aNc=new C.XM(0,"found")
D.eqx=new C.XM(1,"foundLive")
D.a9M=new C.XM(2,"notFound")
D.aNd=new C.XM(3,"wrongAccount")
D.eyZ=new B.r(4,12)
D.eCs=new B.D(A.zj,A.ux,null)
D.bKl=new B.P(4,0,0,3)
D.fF8=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhC=new B.C("NGMY Helper",null,D.fF8,null,null,null,null,null,null,null,null,null)
D.eCJ=new B.D(D.bKl,D.hhC,null)
D.bUt=new B.a_(63284,"MaterialIcons",!1)
D.bZO=new B.ae(D.bUt,18,A.pA,null,null,null)
D.fK7=new B.F(!0,A.pA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ5=new B.C("Continue",null,D.fK7,null,null,null,null,null,null,null,null,null)
D.du7=w([D.bZO,A.bf,D.fZ5],x.p)
D.fov=new B.c3(A.aL,A.e,A.M,A.l,null,A.p,null,0,D.du7,null)
D.eCN=new B.D(A.hy,D.fov,null)
D.eD3=new B.D(A.bT,A.ux,null)
D.bta=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dq4=w([A.hw,A.h6,A.cV,D.bta],x.O)
D.cdB=new B.a7(A.ay,A.aC,A.x,D.dq4,A.E5,null)
D.baH=new B.n(null,null,null,null,null,D.cdB,A.m)
D.bBX=new B.bP(D.baH,A.bm,null,null)
D.eJA=new B.cN(0,0,0,0,null,null,D.bBX,null)
D.c0I=new B.ae(A.x8,11,A.c,null,null,null)
D.eJE=new B.cN(10,12,null,null,null,null,D.c0I,null)
D.cYf=w([A.hX,A.eh,A.lu],x.O)
D.eKh=new B.bT(A.BQ,1.1,A.x,null,0,D.cYf,null,null)
D.buS=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bnW=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bqa=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dno=w([D.buS,D.bnW,D.bqa],x.O)
D.eKp=new B.bT(A.af7,1.05,A.x,null,0,D.dno,null,null)
D.eKO=new B.bT(A.z,0.5,A.x,null,0,E.aC7,null,null)
D.fmn=new B.a3(-18,0,18,1)
D.fmV=new B.a3(-3,-5,3,5)
D.c_g=new B.ae(A.ea,16,D.f6,null,null,null)
D.aYU=new B.F(!0,D.f6,null,null,null,null,12,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hf5=new B.C("Screenshot added \xb7 tap to change",null,D.aYU,null,null,null,null,null,null,null,null,null)
D.d8D=w([D.c_g,A.bf,D.hf5],x.p)
D.fnP=new B.c3(A.aL,A.b9,A.h,A.l,null,A.p,null,0,D.d8D,null)
D.c3t=new B.ae(A.o3,15,D.f6,null,null,null)
D.hcR=new B.C("Refresh",null,D.aYU,null,null,null,null,null,null,null,null,null)
D.dbm=w([D.c3t,A.d8,D.hcR],x.p)
D.fnR=new B.c3(A.aL,A.e,A.M,A.l,null,A.p,null,0,D.dbm,null)
D.euT={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fq6=new B.dk(D.euT,3,x.M)
D.euH={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fqi=new B.dk(D.euH,36,x.M)
D.euK={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fqw=new B.dk(D.euK,6,x.M)
D.ewj={memory:0,typing:1,scramble:2,pattern:3}
D.nn=new B.dk(D.ewj,4,x.M)
D.ftc=new B.au(276,276)
D.ftV=new B.a6(13,null,null,null)
D.bh8=new B.fo(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fu6=new B.a6(26,26,D.bh8,null)
D.fv_=new B.hS(8,0,0,1,null)
D.hgi=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aWh=new B.b0(D.hgi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fTX=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.b0(D.fTX,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fV7=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new B.b0(D.fV7,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.hd1=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new B.b0(D.hd1,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bu0=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fIZ=new B.F(!0,D.bu0,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBZ=new B.et("$",null,null,A.cO,null,null,null,null,null,null,D.fIZ)
D.fCe=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCD=new B.F(!0,A.bs,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD4=new B.F(!0,A.a_,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDB=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new B.F(!0,D.f6,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new B.F(!0,A.bM,null,null,null,null,14,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new B.F(!0,A.CA,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXD=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new B.F(!0,A.bM,null,null,null,null,11.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new B.F(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fI8=new B.F(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJx=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fKf=new B.F(!0,A.jk,null,null,null,null,10.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmb=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fKx=new B.F(!0,D.bmb,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new B.F(!0,A.aB,null,null,null,null,17,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMt=new B.F(!0,D.ajN,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYk=new B.F(!0,A.CA,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new B.F(!0,A.eq,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMP=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN7=new B.F(!0,A.CA,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.y1=new B.F(!0,A.c,null,null,null,null,13,A.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bre=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fNm=new B.F(!0,D.bre,null,null,null,null,12,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNY=new B.F(!0,A.Ul,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP5=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPc=new B.F(!0,A.iH,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPg=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new B.F(!0,A.a_,null,null,null,null,10,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPQ=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQO=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRe=new B.F(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRw=new B.F(!0,A.be,null,null,null,null,14,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS0=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS4=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT6=new B.C("Value per pair",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fT8=new B.C("Restore now",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fTI=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aY4=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTT=new B.C("AVAILABLE PLANS",null,D.aY4,null,null,null,null,null,null,null,null,null)
D.fTV=new B.C("I understand",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fUv=new B.C("Go Back",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fFG=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVg=new B.C("PLAN VALUE",null,D.fFG,null,null,null,null,null,null,null,null,null)
D.fVj=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fVG=new B.C("Deposit",null,A.X2,null,null,null,null,null,null,null,null,null)
D.fQ8=new B.F(!0,A.eD,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWL=new B.C("JACKPOT SLOTS",null,D.fQ8,null,null,null,null,null,null,null,null,null)
D.fX3=new B.C("Restore",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fFM=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX7=new B.C("YOUR NUMBER",null,D.fFM,null,null,null,null,null,null,null,null,null)
D.fXo=new B.C("SPIN REELS",null,E.acK,null,null,null,null,null,null,null,null,null)
D.fXT=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fYq=new B.C("Perfect Score Profit",null,A.hD,null,null,null,null,null,null,null,null,null)
D.fZ3=new B.C("Join room",null,A.iP,null,null,null,null,null,null,null,null,null)
D.h0g=new B.C("Add payment screenshot",null,A.ja,null,null,null,null,null,null,null,null,null)
D.h0w=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fPk=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0Y=new B.C("INVITE A PLAYER",null,D.fPk,null,null,null,null,null,null,null,null,null)
D.fOm=new B.F(!0,A.ZB,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1s=new B.C("NGMY GOLD LEADER",null,D.fOm,null,null,null,null,null,null,null,null,null)
D.h1Z=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.h2o=new B.C("Invest & Play",null,A.mb,null,null,null,null,null,null,null,null,null)
D.aY_=new B.F(!0,D.yR,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2Q=new B.C("VALID THRU",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.aYH=new B.F(!0,A.aF,null,null,null,null,11,A.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2Y=new B.C("DEALER",null,D.aYH,null,null,null,null,null,null,null,null,null)
D.h34=new B.C("CARDHOLDER",null,D.aY_,null,null,null,null,null,null,null,null,null)
D.fNO=new B.F(!0,A.bn,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3P=new B.C("NGMY PLATINUM",null,D.fNO,null,null,null,null,null,null,null,null,null)
D.fRl=new B.F(!0,A.qM,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4B=new B.C("EARNED SO FAR",null,D.fRl,null,null,null,null,null,null,null,null,null)
D.h5a=new B.C("VS",null,A.acL,null,null,null,null,null,null,null,null,null)
D.h5B=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h5Y=new B.C("One day left",null,A.acz,null,A.K,null,null,null,null,null,null,null)
D.h6j=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.Fq,null,null,null,null,null,null,null,null,null)
D.h6k=new B.C("Multiplayer invite",null,A.iP,null,null,null,null,null,null,null,null,null)
D.h6w=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new B.F(!0,A.Ul,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6C=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fE7,null,null,null,null,null,null,null,null,null)
D.h6N=new B.C("Browse Topics",null,A.fh,null,null,null,null,null,null,null,null,null)
D.fD0=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h73=new B.C("Investment Required",null,D.fD0,null,A.K,null,null,null,null,null,null,null)
D.h8B=new B.C("Network Status",null,A.aXf,null,null,null,null,null,null,null,null,null)
D.aXm=new B.F(!0,A.ab,null,null,null,null,12.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9e=new B.C("Their account email",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.h9z=new B.C("Verification code",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h9A=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h9Q=new B.C("ACTIVE ASSET",null,D.aY4,null,null,null,null,null,null,null,null,null)
D.hae=new B.C("Scan QR",null,A.cH,null,null,null,null,null,null,null,null,null)
D.haj=new B.C("Check word",null,A.cH,null,null,null,null,null,null,null,null,null)
D.haL=new B.C("YOUR HAND",null,D.aYH,null,null,null,null,null,null,null,null,null)
D.hbm=new B.C("NGMY Music Studio",null,A.jn,null,null,null,null,null,null,null,null,null)
D.hbp=new B.C("I sent it \u2014 submit deposit",null,A.mb,null,null,null,null,null,null,null,null,null)
D.hce=new B.C("Back",null,A.Bo,null,null,null,null,null,null,null,null,null)
D.fSi=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcm=new B.C("DEAL / PLAY ROUND",null,D.fSi,null,null,null,null,null,null,null,null,null)
D.hcz=new B.C("Got it \u2014 keep chatting",null,A.cc,null,null,null,null,null,null,null,null,null)
D.hcJ=new B.C("3 Messages Left",null,A.aYx,null,null,null,null,null,null,null,null,null)
D.hdg=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.hdp=new B.C("Copy",null,A.cH,null,null,null,null,null,null,null,null,null)
D.hdM=new B.C("How many games?",null,D.aXm,null,null,null,null,null,null,null,null,null)
D.fNf=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdY=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fNf,null,A.K,null,null,null,null,null,null,null)
D.hfz=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hfO=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fSK=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hht=new B.C("NGMY  WALLET",null,D.fSK,null,null,null,null,null,null,null,null,null)
D.hhu=new B.C("Select Your Bet",null,A.hg,null,null,null,null,null,null,null,null,null)
D.hGU=new B.bl("history",x.W)
D.hHg=new B.bl("ngmy_local_home",x.W)
D.hHh=new B.bl("ngmy_local_invest",x.W)
D.hHi=new B.bl("ngmy_local_wallet",x.W)
D.hKP=new C.a0_(null)
D.b2K=new C.aE_(0,"grid")
D.b2L=new C.aE_(1,"questions")
D.hLT=new C.aE_(2,"answer")
D.hOJ=new C.a0U(null)})();(function staticFields(){$.hfI=B.aR(x.N)
$.hHo=B.S(x.N,x.k)
$.hlF=null
$.hlt=B.S(x.N,B.aD("KH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iHj","bIl",()=>C.ioF())
w($,"iH5","hQq",()=>{var v=null,u=B.fu(v,A.cw,v,v,v,D.fBZ,A.a7,A.bW,v,A.dG,A.bX)
u.e6()
return u})})()};
(a=>{a["DciIZ6AUzpxOx7I3U2OkxxjFTUM="]=a.current})($__dart_deferred_initializers__);