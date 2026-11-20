((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Q,K,R,S,L,M,T,N,U,V,W,F,O,X,C={
hxW(d,e,f){var w=null,v=f.k("GZ<0>"),u=new B.GZ(w,w,w,w,v)
$.w0()
u.d=new C.cCo(new B.vv(),e,u,f,d)
return new B.i8(u,v.k("i8<1>"))},
cCo:function cCo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCp:function cCp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCl:function cCl(d){this.a=d},
cCm:function cCm(d,e){this.a=d
this.b=e},
cCn:function cCn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCk:function cCk(d,e,f){this.a=d
this.b=e
this.c=f},
bv3:function bv3(d){this.a=d},
hxV(d,e,f,g){return new C.ay3(d,e,f,null,g.k("ay3<0>"))},
Gb:function Gb(){},
aKK:function aKK(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
ffE:function ffE(d){this.a=d},
ffD:function ffD(d,e){this.a=d
this.b=e},
ffG:function ffG(d){this.a=d},
ffB:function ffB(d,e,f){this.a=d
this.b=e
this.c=f},
ffF:function ffF(d){this.a=d},
ffC:function ffC(d){this.a=d},
ay3:function ay3(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
ipK(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aY(w,1))
return w},
hIU(d){var w=C.ipK(d)
if(w.length===0)return""
return"$"+w},
fPn(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fPn=B.e(function(f,g){if(f===1)return B.f(g,v)
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
break}if(q.x!==A.cx){w=4
break}if(q.d!==A.h8){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cT(m,"game payout:",0))if(!B.cT(m,"game partial:",0)){if(!B.cT(m,"multiplayer payout:",0))o=B.cT(m,"dice",0)&&q.e===A.fx
else o=l
l=o}if(!l){w=4
break}if(B.cT(m,"game payout:",0))k=A.a.i(A.a.aY(n,A.a.cj(m,"game payout:")+12))
else if(B.cT(m,"game partial:",0)){k=A.a.i(A.a.aY(n,A.a.cj(m,"game partial:")+13))
j=A.a.cj(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else if(B.cT(m,"multiplayer payout:",0)){k=A.a.i(A.a.aY(n,A.a.cj(m,"multiplayer payout:")+19))
j=A.a.cj(k,"(")
if(j>0)k=A.a.i(A.a.az(k,0,j))}else k=B.cT(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.ve(q.c,p,n,d,o,null,q.a,!0),$async$fPn)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fPn,v)},
iuI(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
iqM(d,e,f){return A.d.aS(e,new C.fT6(f,A.a.i(d.toLowerCase())))},
fSY(d){var w
C.hu2(d)
w=d.c7
return B.bs(new B.N(w,new C.fSZ(),B.T(w).k("N<1,@>")),!0,x.N)},
igl(d,e,f){var w,v,u,t,s,r,q=null,p=A.bZ,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ej().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a4(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.gho():s}w=A.h.cD(f*t)
v=new C.fzf(f)
if(J.d2(n,"data:image"))try{u=B.fY(A.cD.aK(A.d.gal(J.lJ(n,","))),A.A,w,new C.fzc(v),A.h2,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d2(n,"supabase://"))return new B.lb(B.a3c(n),new C.fzd(f,e,p,w,v),q,q,x.gh)
return B.kF(n,A.A,w,new C.fze(v),A.h2,p,!0,e,q,q,f)},
hhX(d,e){return new B.a5(e,e,B.i4(C.igl(d,e,e),A.aq),null)},
i8o(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dwt,x.gm)
for(w=0;w<36;++w){v=A.E_[w]
s.push(new C.re(v.a,v.b,v.c,v.e,v.f))}return new C.aCQ(u,B.S(t,t),s)},
fT6:function fT6(d,e){this.a=d
this.b=e},
fSZ:function fSZ(){},
fzf:function fzf(d){this.a=d},
fzc:function fzc(d){this.a=d},
fzd:function fzd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzb:function fzb(d){this.a=d},
fze:function fze(d){this.a=d},
anb:function anb(d,e,f,g,h,i,j){var _=this
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
aCQ:function aCQ(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dmr:function dmr(d,e){this.a=d
this.b=e},
dmC:function dmC(d,e){this.a=d
this.b=e},
dmU:function dmU(){},
dmV:function dmV(d){this.a=d},
dmK:function dmK(d,e){this.a=d
this.b=e},
dmJ:function dmJ(){},
dmL:function dmL(d){this.a=d},
dmI:function dmI(){},
dmN:function dmN(d){this.a=d},
dmM:function dmM(){},
dmF:function dmF(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmG:function dmG(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmx:function dmx(d,e){this.a=d
this.b=e},
dmy:function dmy(d,e){this.a=d
this.b=e},
dmv:function dmv(d){this.a=d},
dmw:function dmw(d){this.a=d},
dmz:function dmz(d){this.a=d},
dmA:function dmA(d){this.a=d},
dmB:function dmB(d,e,f){this.a=d
this.b=e
this.c=f},
dmu:function dmu(d,e){this.a=d
this.b=e},
dmt:function dmt(d,e){this.a=d
this.b=e},
dms:function dms(d,e){this.a=d
this.b=e},
dmT:function dmT(d){this.a=d},
dmR:function dmR(d,e,f){this.a=d
this.b=e
this.c=f},
dmQ:function dmQ(d,e,f){this.a=d
this.b=e
this.c=f},
dmP:function dmP(d,e){this.a=d
this.b=e},
dmO:function dmO(){},
dmS:function dmS(d){this.a=d},
aFH:function aFH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmP:function bmP(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e0_:function e0_(d){this.a=d},
e_Z:function e_Z(d){this.a=d},
e00:function e00(d){this.a=d},
e_Y:function e_Y(){},
e01:function e01(d,e){this.a=d
this.b=e},
e_X:function e_X(d){this.a=d},
e02:function e02(d){this.a=d},
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
aCP:function aCP(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dml:function dml(d){this.a=d},
dmo:function dmo(d){this.a=d},
dmp:function dmp(d){this.a=d},
dmq:function dmq(d){this.a=d},
dmn:function dmn(d,e){this.a=d
this.b=e},
dmm:function dmm(d,e){this.a=d
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
aCR:function aCR(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
dod:function dod(d,e){this.a=d
this.b=e},
dog:function dog(d){this.a=d},
doh:function doh(d){this.a=d},
doi:function doi(d){this.a=d},
doj:function doj(d){this.a=d},
dok:function dok(d){this.a=d},
doe:function doe(d){this.a=d},
dof:function dof(d){this.a=d},
dnt:function dnt(d,e){this.a=d
this.b=e},
dnu:function dnu(d,e){this.a=d
this.b=e},
dnX:function dnX(d){this.a=d},
dnY:function dnY(){},
dnJ:function dnJ(d,e,f){this.a=d
this.b=e
this.c=f},
dnK:function dnK(d){this.a=d},
dnL:function dnL(d,e,f){this.a=d
this.b=e
this.c=f},
dnM:function dnM(d,e){this.a=d
this.b=e},
dnN:function dnN(){},
dmW:function dmW(d){this.a=d},
dns:function dns(d,e){this.a=d
this.b=e},
dnZ:function dnZ(){},
do7:function do7(){},
dnW:function dnW(d){this.a=d},
dnV:function dnV(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnr:function dnr(){},
do2:function do2(){},
do3:function do3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
do4:function do4(d,e,f){this.a=d
this.b=e
this.c=f},
dmX:function dmX(){},
dmY:function dmY(d){this.a=d},
dmZ:function dmZ(){},
dnC:function dnC(d,e){this.a=d
this.b=e},
dnD:function dnD(d,e,f){this.a=d
this.b=e
this.c=f},
dnE:function dnE(d){this.a=d},
dnB:function dnB(d){this.a=d},
dnO:function dnO(d){this.a=d},
dnP:function dnP(){},
dnQ:function dnQ(d){this.a=d},
dnR:function dnR(){},
dnS:function dnS(d){this.a=d},
dnT:function dnT(){},
do1:function do1(d,e,f){this.a=d
this.b=e
this.c=f},
dnF:function dnF(d){this.a=d},
dnG:function dnG(d,e){this.a=d
this.b=e},
dnH:function dnH(d){this.a=d},
dnI:function dnI(d){this.a=d},
do5:function do5(d){this.a=d},
do6:function do6(d){this.a=d},
dn_:function dn_(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
dn1:function dn1(d){this.a=d},
dn2:function dn2(d){this.a=d},
do_:function do_(d,e){this.a=d
this.b=e},
do0:function do0(d){this.a=d},
dnA:function dnA(d,e){this.a=d
this.b=e},
dnU:function dnU(d,e,f){this.a=d
this.b=e
this.c=f},
dny:function dny(d,e,f){this.a=d
this.b=e
this.c=f},
dnz:function dnz(){},
do8:function do8(d){this.a=d},
do9:function do9(d){this.a=d},
doa:function doa(d){this.a=d},
doc:function doc(d){this.a=d},
dob:function dob(){},
dnx:function dnx(d,e,f){this.a=d
this.b=e
this.c=f},
dnw:function dnw(d,e){this.a=d
this.b=e},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnf:function dnf(d){this.a=d},
dne:function dne(d,e){this.a=d
this.b=e},
dng:function dng(d){this.a=d},
dnd:function dnd(d,e){this.a=d
this.b=e},
dnh:function dnh(d){this.a=d},
dnc:function dnc(){},
dni:function dni(d){this.a=d},
dna:function dna(){},
dnb:function dnb(d){this.a=d},
dnj:function dnj(d){this.a=d},
dn9:function dn9(d,e){this.a=d
this.b=e},
dnk:function dnk(d){this.a=d},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn4:function dn4(d,e){this.a=d
this.b=e},
dnl:function dnl(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dnm:function dnm(d){this.a=d},
dn6:function dn6(d){this.a=d},
dn3:function dn3(d,e){this.a=d
this.b=e},
dnn:function dnn(d,e,f){this.a=d
this.b=e
this.c=f},
dno:function dno(d){this.a=d},
dn5:function dn5(){},
dnp:function dnp(d){this.a=d},
anZ:function anZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjT:function bjT(){this.c=this.a=null},
drN:function drN(d,e){this.a=d
this.b=e},
drM:function drM(d,e,f,g){var _=this
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
cOq:function cOq(d){this.a=d},
cNL:function cNL(d,e){this.a=d
this.b=e},
cNB:function cNB(d){this.a=d},
cNC:function cNC(d){this.a=d},
cNV:function cNV(d){this.a=d},
cNS:function cNS(d){this.a=d},
cNT:function cNT(d){this.a=d},
cNU:function cNU(d,e,f){this.a=d
this.b=e
this.c=f},
cNN:function cNN(d){this.a=d},
cNM:function cNM(d){this.a=d},
cND:function cND(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNQ:function cNQ(d){this.a=d},
cNP:function cNP(d){this.a=d},
cNO:function cNO(d,e){this.a=d
this.b=e},
cOd:function cOd(d){this.a=d},
cO7:function cO7(d){this.a=d},
cOa:function cOa(d){this.a=d},
cO9:function cO9(){},
cO6:function cO6(d){this.a=d},
cO8:function cO8(d,e){this.a=d
this.b=e},
cO5:function cO5(){},
cNI:function cNI(){},
cNJ:function cNJ(d,e){this.a=d
this.b=e},
cNK:function cNK(d){this.a=d},
cNG:function cNG(d,e){this.a=d
this.b=e},
cNH:function cNH(d,e){this.a=d
this.b=e},
cNY:function cNY(d,e){this.a=d
this.b=e},
cNR:function cNR(d){this.a=d},
cNZ:function cNZ(d){this.a=d},
cO_:function cO_(d,e){this.a=d
this.b=e},
cO0:function cO0(d,e){this.a=d
this.b=e},
cO1:function cO1(d,e){this.a=d
this.b=e},
cO2:function cO2(d,e,f){this.a=d
this.b=e
this.c=f},
cO3:function cO3(d){this.a=d},
cO4:function cO4(d){this.a=d},
cNW:function cNW(d,e){this.a=d
this.b=e},
cOc:function cOc(d){this.a=d},
cNX:function cNX(d,e){this.a=d
this.b=e},
cOp:function cOp(d){this.a=d},
cOi:function cOi(d){this.a=d},
cOl:function cOl(d){this.a=d},
cOf:function cOf(d,e){this.a=d
this.b=e},
cOj:function cOj(){},
cOk:function cOk(d,e){this.a=d
this.b=e},
cOg:function cOg(d){this.a=d},
cOh:function cOh(d){this.a=d},
cOn:function cOn(){},
cOm:function cOm(d){this.a=d},
cOe:function cOe(d,e){this.a=d
this.b=e},
cOo:function cOo(d){this.a=d},
cNE:function cNE(d){this.a=d},
cOb:function cOb(d,e){this.a=d
this.b=e},
cNF:function cNF(d,e,f){this.a=d
this.b=e
this.c=f},
aNf:function aNf(){},
aNg:function aNg(){},
aNh:function aNh(){},
aOe:function aOe(){},
c4V(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c4W(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hWG(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_M(d,e){return C.hWH(d,e)},
hWH(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_M=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3B(d),$async$b_M)
case 3:p=g
if(p!=null){try{t=A.W.aP(0,p.c,null)
if(x.f.b(t)){s=C.hsn(B.a1(t,x.N,x.z))
if(s==null){u=new B.GU(D.a9j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4V(s,e,p.b)){u=new B.GU(D.aMC,null)
w=1
break}r=p.a?D.emx:D.aMB
u=new B.GU(r,s)
w=1
break}}catch(o){}u=new B.GU(D.a9j,null)
w=1
break}s=C.hso(d)
if(s==null){u=new B.GU(D.a9j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c4V(s,e,null)){u=new B.GU(D.aMC,null)
w=1
break}u=new B.GU(D.aMB,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_M,v)},
hso(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d2(w,"\ufeff"))w=J.mY(w,1)
v=!1
if(J.d2(w,"NGMYSNAP1|")){v=!0
w=A.cb.cE(0,A.cD.aK(J.mY(w,10)))}u=A.W.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hWF(t):C.hsn(t)
return s}catch(r){return null}},
hWF(d){var w,v,u,t,s,r,q,p,o,n=new C.c4S(),m=new C.c4R(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aI(w.h(0,"d"))
p=new B.w4(v,u,t,s,r,A.h.M(q==null?0:q))}else p=null
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
return new B.a7u("","",v,u,t,s,r,q,n,m,o,p,A.iF,new B.V(Date.now(),0,!1),-1)},
hsn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4U()
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
n=new B.w4(t,s,r,q,p,A.h.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.B(new B.ee(J.b9(m,new C.c4T(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7u(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hc8(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hc8=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4Q(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Hq(B.KZ(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hc8,v)},
XD:function XD(d,e){this.a=d
this.b=e},
c4S:function c4S(){},
c4R:function c4R(){},
c4U:function c4U(){},
c4T:function c4T(d){this.a=d},
ijt(d){return B.ce(null,A.b5,!0,null,new C.fDR(),d,null,!0,!0,x.N)},
ijG(d,e,f,g){return B.ce(null,A.b5,!0,null,new C.fF3(g,f,e),d,null,!0,!0,x.y)},
apx:function apx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEX:function aEX(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIk:function dIk(d){this.a=d},
dIa:function dIa(d,e){this.a=d
this.b=e},
dI8:function dI8(d){this.a=d},
dIi:function dIi(d){this.a=d},
dIh:function dIh(d,e){this.a=d
this.b=e},
dI7:function dI7(d,e){this.a=d
this.b=e},
dI6:function dI6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dI9:function dI9(d){this.a=d},
dIg:function dIg(){},
dIe:function dIe(d){this.a=d},
dIf:function dIf(d,e){this.a=d
this.b=e},
dIb:function dIb(){},
dIc:function dIc(d,e){this.a=d
this.b=e},
dId:function dId(d,e){this.a=d
this.b=e},
dIl:function dIl(d){this.a=d},
a25:function a25(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvA:function bvA(d,e,f,g,h){var _=this
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
bmk:function bmk(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dIp:function dIp(d){this.a=d},
dIm:function dIm(d,e){this.a=d
this.b=e},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIo:function dIo(d){this.a=d},
a0K:function a0K(d){this.a=d},
bml:function bml(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dIq:function dIq(d,e){this.a=d
this.b=e},
fDR:function fDR(){},
fF3:function fF3(d,e,f){this.a=d
this.b=e
this.c=f},
ag4:function ag4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f94:function f94(d){this.a=d},
f95:function f95(d){this.a=d},
Rj:function Rj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_R:function a_R(d){this.a=d},
aC8:function aC8(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhe:function dhe(d){this.a=d},
dhb:function dhb(){},
dhc:function dhc(d){this.a=d},
dhd:function dhd(d){this.a=d},
VJ(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O3(s),$async$VJ)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apO(s,t),$async$VJ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VJ,v)},
hWZ(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5E(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5E:function c5E(){},
ip7(d){return A.d.dM(A.E_,new C.fPh(d),new C.fPi()).r},
fPh:function fPh(d){this.a=d},
fPi:function fPi(){},
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
bms:function bms(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dON:function dON(d){this.a=d},
dOM:function dOM(d){this.a=d},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dOJ:function dOJ(d){this.a=d},
dOG:function dOG(d,e,f){this.a=d
this.b=e
this.c=f},
dOK:function dOK(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOL:function dOL(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOI:function dOI(d){this.a=d},
hu2(d){var w=B.cdQ(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
hu4(d){return B.ce(null,A.w.j(0.82),!0,null,new C.cdV(),d,null,!0,!0,x.H)},
a89:function a89(d){this.a=d},
cdV:function cdV(){},
cdU:function cdU(d){this.a=d},
hI0(){var w=new B.V(Date.now(),0,!1),v=w.bR(B.dx(4-B.lX(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.h.bf(A.o.aq(v.bz(B.c0(B.bD(u),B.bM(u),B.bY(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fu2(d,e){var w,v,u,t,s,r,q=B.H6(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.az(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
idW(d,e){var w,v,u,t,s,r,q,p=B.H6(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.h.M(w)
return w==null?0:w}}return 0},
iyM(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H6(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.h.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ikl(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H6(b5),b2=B.cfb(),b3=C.hI0()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c6(p,a3)?A.a.az(p,0,p.length-11):p)!==b1)continue
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
return w==null?1:w}n=new C.fFT()
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
if(l!=null)return l}k=C.fu2(b4,b5)
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
hEi(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hii(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ikm(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H6(a3),a1=new C.fFU()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a8(s)
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
w=J.a8(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fFV(v+r+q>1,l)
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
return C.hii(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ikk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.h.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.h.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hI0():B.cfb()
t=v+"|"+u
s=C.fu2(d,e)
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
isX(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bm7()
w=C.ikm(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahB(d,a0,w)
return w}v=C.ikl(d,a0)
if(v!=null){if(v===3)++d.f
C.ahB(d,a0,v)
return v}u=C.ikk(d,a0,a1)
if(u!=null)return new C.fWB(d,a1,a0).$1(u)
t=C.fu2(d,a0)
s=J.a8(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.h.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.h.M(s)
if(p==null)p=0
o=new C.fWD(d,a1)
if(C.idW(d,a0)>0){n=o.$0()
C.iyM(d,a0)
C.ahB(d,a0,n)
return n}if(q>=d.c){n=new C.fWC(d,a1).$0()
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
cf3(d){var w=0,v=B.j(x.y),u
var $async$cf3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cf2(d),$async$cf3)
case 3:if(f){u=!0
w=1
break}u=B.cf2(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf3,v)},
ahB(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fu2(d,e),s=J.a8(t),r=B.aI(s.h(t,v)),q=r==null?null:A.h.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.h.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fFT:function fFT(){},
fFU:function fFU(){},
fFV:function fFV(d,e){this.a=d
this.b=e},
fWB:function fWB(d,e,f){this.a=d
this.b=e
this.c=f},
fWD:function fWD(d,e){this.a=d
this.b=e},
fWC:function fWC(d,e){this.a=d
this.b=e},
apw:function apw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmi:function bmi(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dHW:function dHW(d){this.a=d},
dHV:function dHV(d){this.a=d},
dHX:function dHX(d){this.a=d},
dHU:function dHU(d,e){this.a=d
this.b=e},
aNN:function aNN(){},
Ou:function Ou(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgl:function cgl(){},
cgk:function cgk(){},
arR:function arR(d,e,f){this.c=d
this.d=e
this.a=f},
hd8(d,e,f){return B.ce(null,A.w.j(0.88),!0,null,new C.cgN(f,e),d,null,!0,!0,x.H)},
i_M(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iX[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
OC:function OC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgN:function cgN(d,e){this.a=d
this.b=e},
bn2:function bn2(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7w:function e7w(){},
e7x:function e7x(){},
e7y:function e7y(d,e){this.a=d
this.b=e},
e7z:function e7z(d,e){this.a=d
this.b=e},
aOo:function aOo(){},
hHX(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blF(new C.fRF(w))
w=w.a
return w==null?null:w.c.a},
hHP(d){$.aU.x1$.push(new C.fRs(d))},
hI9(d){var w=$.tq().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hHX(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.eb()},
hI8(d){C.hEq(d,0)},
hEq(d,e){var w,v
if(e>4)return
w=d==null?$.tq().gbl():d
if(w==null||w.c==null)return
v=C.hHX(w)
if(v==="GameCenterScreen")return
if(D.fl4.q(0,v)&&w.q8()){w.eb()
$.aU.x1$.push(new C.fCa(w,e))}},
aSn(d,e,f){return B.eb(B.ci(new C.fT1(e,d,f)),e,!0)},
fRF:function fRF(d){this.a=d},
fRs:function fRs(d){this.a=d},
fRr:function fRr(d){this.a=d},
fCa:function fCa(d,e){this.a=d
this.b=e},
fT1:function fT1(d,e,f){this.a=d
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
ve(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$ve=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z1(g)
if(o.length===0){w=1
break}t=e==null?B.M9(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OD(o),$async$ve)
case 3:q=m
if(j!=null&&j.length!==0&&J.rp(q,new C.ch0(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mW(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arV(o,q),$async$ve)
case 4:if(i==null||r==null||s)C.a8O(o).bF(new C.ch1(),x.S).eF(new C.ch2())
case 1:return B.h(u,v)}})
return B.i($async$ve,v)},
a8O(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hJb
m=B.z1(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OD(m),$async$a8O)
case 3:t=f
s=J.cE(t)
if(!s.aS(t,new C.ch_())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8O)
case 4:r=f
q=J.a8(r)
if(q.gK(r)!==s.gK(t)){w=1
break}for(p=!1,o=0;o<s.gK(t);++o)if(A.W.av(s.h(t,o).aj(),null)!==A.W.av(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arV(m,r),$async$a8O)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8O,v)},
b2e(d){var w=0,v=B.j(x.S),u,t
var $async$b2e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hdb(d,!1),$async$b2e)
case 3:t=J
w=4
return B.b(C.arW(d,!1),$async$b2e)
case 4:u=t.dH(f,new C.cgZ(new B.V(Date.now(),0,!1).bR(-864e8))).gK(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2e,v)},
arW(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z1(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OD(r),$async$arW)
case 3:t=g
s=B.WO(t)
if(s.length!==J.ad(t))C.arV(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arW,v)},
iqG(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bz(d).a,r=A.o.aq(s,6e7)
if(r<1)return"Just now"
w=A.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.aq(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.d7(d),12)===0?12:A.o.F(B.d7(d),12)
s=A.iX[B.bM(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fS(d)),2,"0")
u=B.d7(d)<12?"AM":"PM"
return s+" "+B.bY(d)+r+" \xb7 "+v+":"+w+" "+u},
bDI(d){var w=A.h.ac(Math.abs(d),2).split(".")
return"$"+B.nO(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fyV(),null)+"."+w[1]},
bHs(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arW(e,!1),$async$bHs)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hdb(e,!0).bF(new C.h4O(e),t).bF(new C.h4P(),t).eF(new C.h4Q())
w=4
return B.b(B.bU(A.L,null,new C.h4R(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHs)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHs,v)},
hgc(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,new B.du(A.dB,A.A,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.hA,w,w,w),1)},
e7B(d,e,f){var w=null,v=A.w.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.du(A.dJ,A.a5,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.OY,w,w,w),1)},
ch0:function ch0(d){this.a=d},
ch1:function ch1(){},
ch2:function ch2(){},
ch_:function ch_(){},
cgZ:function cgZ(d){this.a=d},
fyV:function fyV(){},
h4O:function h4O(d){this.a=d},
h4P:function h4P(){},
h4Q:function h4Q(){},
h4R:function h4R(d,e){this.a=d
this.b=e},
h4N:function h4N(d,e){this.a=d
this.b=e},
h4M:function h4M(d){this.a=d},
aeW:function aeW(d,e){this.c=d
this.a=e},
e7D:function e7D(){},
e7E:function e7E(){},
e7F:function e7F(){},
e7G:function e7G(d){this.a=d},
e7I:function e7I(){},
e7H:function e7H(d){this.a=d},
aeV:function aeV(d,e){this.c=d
this.a=e},
e7C:function e7C(){},
bHt(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hS(A.b5,!1,w,d,new C.h4U(j,i,h,g,e,f),null,A.eW,!1,x.H)},
h4U:function h4U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h4S:function h4S(d,e){this.a=d
this.b=e},
h4T:function h4T(d,e){this.a=d
this.b=e},
aCS:function aCS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biy:function biy(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bv$=e
_.a9$=f
_.c=_.a=null},
dom:function dom(d,e){this.a=d
this.b=e},
dol:function dol(){},
afj:function afj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNi:function aNi(){},
asG(d,e,f){return new C.b34(f,d,e,null)},
i0r(d){var w=B.a(A.h.ac(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nO(w[0],v,new C.ciL(),null)
return A.d.aM(w,".")},
b2h(){var w=$.tU
if((w>0?$.tU=w-1:w)<=0)$.tU=0},
aiI(d,e){var w=0,v=B.j(x.H),u
var $async$aiI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hlh
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiI)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiI,v)},
b34:function b34(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciM:function ciM(d){this.a=d},
ciL:function ciL(){},
O6:function O6(){},
c6a:function c6a(){},
hkB(d){if(d>0)return"+"+d
return""+d},
hjQ(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fT2(d,e){var w=J.t(e,d)
if(w==null)w=B.fRP().h(0,d)
return w==null?90:w},
fxQ(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.k9(u,new C.fxR(),u.$ti.k("k9<cj.E,q>")))
A.d.e0(v,e)
return v},
hDj(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pK(s,3,s.$ti.k("cj.E")))
A.d.e0(t,e)
return t},
ilM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JF("Simplify \u221a("+t*s+"x^"+q+")",m,C.hDj(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JF("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fxQ(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JF("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fxQ(g,b2)))}else b1.push(new C.JF("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fxQ(k,b2)))}else if(u===3){e=b2.aw(11)-5
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
b1.push(new C.JF("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fxQ(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JF("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hDj(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
iwQ(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dt(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.e0(t,A.cT)
v=A.d.hh(t)
if(v!==d)return v}return new B.dt(t,x.bJ).hh(0)},
JF:function JF(d,e,f){this.a=d
this.b=e
this.c=f},
fxR:function fxR(){},
are:function are(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFI:function aFI(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e05:function e05(d){this.a=d},
e06:function e06(d){this.a=d},
e07:function e07(d){this.a=d},
e08:function e08(d,e){this.a=d
this.b=e},
e09:function e09(d,e){this.a=d
this.b=e},
e0a:function e0a(d){this.a=d},
e04:function e04(d){this.a=d},
e0b:function e0b(d){this.a=d},
e03:function e03(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0c:function e0c(d,e){this.a=d
this.b=e},
arX:function arX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFY:function aFY(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e7O:function e7O(d,e,f){this.a=d
this.b=e
this.c=f},
e7P:function e7P(d){this.a=d},
e7K:function e7K(d){this.a=d},
e7M:function e7M(d,e){this.a=d
this.b=e},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7J:function e7J(d){this.a=d},
hXD(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bR(36e8)
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
return new C.rS(w,u,t,s,r,q==null?null:J.k(q))},
a8W(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8W)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d5(s,x.f)
p=B.cF(p,new C.chz(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.chA())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
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
q.bq(r,new C.chw(e))
q.I(r,e)
q.b0(r,new C.chx())
w=3
return B.b(B.az(),$async$asc)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,ab<q,@>>")
q=B.B(new B.N(q,new C.chy(),s),s.k("ak.E"))
w=4
return B.b(u.aG("String","ngmy_helper_calendar_v1_"+t,A.W.av(q,null)),$async$asc)
case 4:return B.h(null,v)}})
return B.i($async$asc,v)},
i_Z(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dH(d,new C.chB(v,v.bR(B.dx(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
huF(d){var w,v,u,t,s,r,q,p,o,n,m=C.i_Z(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cU(m,0,B.dA(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gK(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.d7(s),12)===0?12:A.o.F(B.d7(s),12)
q=B.d7(s)>=12?"PM":"AM"
p=A.a.b1(A.o.v(B.fS(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bM(s)+"/"+B.bY(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rS:function rS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chz:function chz(){},
chA:function chA(){},
chw:function chw(d){this.a=d},
chx:function chx(){},
chy:function chy(){},
chB:function chB(d,e){this.a=d
this.b=e},
hXE(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
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
return new C.rT(w,u,t,s,r,q,J.k(p==null?"user":p))},
hsX(d){var w=A.o.F(B.d7(d),12)===0?12:A.o.F(B.d7(d),12),v=B.d7(d)>=12?"PM":"AM"
return""+B.bM(d)+"/"+B.bY(d)+" "+w+":"+A.a.b1(A.o.v(B.fS(d)),2,"0")+" "+v},
VX(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VX)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.W.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d5(s,x.f)
p=B.cF(p,new C.c9i(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.c9j())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VX,v)},
b0z(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0z)
case 2:u=g
t=B.cU(e,0,B.dA(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,ab<q,@>>")
r=B.B(new B.N(t,new C.c9g(),r),r.k("ak.E"))
w=3
return B.b(u.aG("String","ngmy_call_memory_v1_"+s,A.W.av(r,null)),$async$b0z)
case 3:return B.h(null,v)}})
return B.i($async$b0z,v)},
b0A(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0A=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.VX(d),$async$b0A)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c9h())
w=5
return B.b(C.b0z(d,q),$async$b0A)
case 5:return B.h(null,v)}})
return B.i($async$b0A,v)},
c9k(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9k=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VX(d),$async$c9k)
case 3:t=s.dH(g,new C.c9l(e.bR(-72e8),e.bR(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9k,v)},
hsY(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bR(w,w.gK(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWM()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.az(s,0,177)+"\u2026":s)+"\n"}}r=r.gK(d)>e?u+("\u2026 and "+(r.gK(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
isH(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bM(p),B.bY(p),0,0,0,0,0)
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
hJH(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rT:function rT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9i:function c9i(){},
c9j:function c9j(){},
c9g:function c9g(){},
c9h:function c9h(){},
c9l:function c9l(d,e){this.a=d
this.b=e},
huI(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lT(t,w,v,u==null?null:J.k(u))},
i04(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.chJ(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqm
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iC(r,w,v,u,t,typeof d.h(0,s)=="number"?A.h.M(B.dF(d.h(0,s))):0)},
i03(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ie9(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.h.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.h.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chH(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.iq(p,w,v,u,s==null?D.aDk:s,t)},
iea(d){var w,v,u,t=B.J([F.Du,"investments",A.nP,"games",A.jt,"loans",A.hE,"withdrawals",A.jN,"deposits",A.l2,"civic",A.kg,"store",A.r0,"jobs",A.nO,"refunds",A.eY,"account",A.lr,"music",A.zC,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a4(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ie9(d){switch(d){case"investments":return F.Du
case"games":return A.nP
case"loans":return A.jt
case"withdrawals":return A.hE
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kg
case"jobs":return A.r0
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zC}},
ni(d){var w=B.a([new C.lT("text",d,null,null)],x.a)
return w},
aiE(){var w=null,v=x.v
return B.a([new C.iq("investments","Investments",F.Du,4280468830,B.a([new C.iC("inv1","How do I buy an investment plan?",C.ni("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iC("inv2","When do I get paid from my plan?",C.ni("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iC("inv3","Can I have more than one plan?",C.ni("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iq("games","Games",A.nP,4287323382,B.a([new C.iC("gam1","How do NGMY games work?",C.ni("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iC("gam2","Why did my game payout change?",C.ni("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iq("loans","Loans",A.jt,4294538006,B.a([new C.iC("loan1","How do I apply for a loan?",C.ni("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iC("loan2","What is the repayment period?",C.ni("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iq("withdrawals","Withdrawals",A.hE,4282090230,B.a([new C.iC("wd1","How do I withdraw money?",C.ni("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iC("wd2","Why is my withdrawal pending?",C.ni("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iq("deposits","Deposits",A.jN,4279548070,B.a([new C.iC("dep1","How do I deposit funds?",C.ni("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iC("dep2","How long until my deposit posts?",C.ni("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iq("civic","Civic Registry",A.l2,4289170426,B.a([new C.iC("civ1","What is Civic Registry?",C.ni("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iC("civ2","What does \u201cmissed\u201d mean on my profile?",C.ni("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iq("store","NGMY Store",A.kg,4293675161,B.a([new C.iC("sto1","How do I buy from NGMY Store?",C.ni("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iC("sto2","How do I sell in the store?",C.ni("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iq("jobs","Jobs & Creator",A.r0,4293548044,B.a([new C.iC("job1","How do I find jobs?",C.ni("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iC("job2","How do I post a job?",C.ni("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iq("refunds","Refunds",A.nO,4293870660,B.a([new C.iC("ref1","Can I get a refund?",C.ni("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iC("ref2","How long do refunds take?",C.ni("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iq("account","Account",A.eY,4281908728,B.a([new C.iC("acc1","How do I update my profile?",C.ni("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iC("acc2","I forgot my password \u2014 what now?",C.ni("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iq("music","Music Charts",A.lr,4290807036,B.a([new C.iC("mus1","What are Music Charts?",C.ni("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iC("mus2","How do I upload music?",C.ni("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iq("help","Help Center",A.zC,4279080072,B.a([new C.iC("hlp1","Where can I get live help?",C.ni("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iC("hlp2","How do daily Helper limits work?",C.ni("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
huJ(d){var w,v=J.a8(d),u=v.gau(d)
if(u)return C.aiE()
v=v.dO(d,new C.chM(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chN())
return w.length===0?C.aiE():w},
huK(d){var w=J.b9(d,new C.chO(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
ase(d){return C.i05(d)},
i05(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$ase=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ase)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_kb_v1",A.W.av(C.huK(d),null)),$async$ase)
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
return B.i($async$ase,v)},
chL(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chL)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiE()
u=l
w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){l=C.aiE()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiE()
u=l
w=1
break}n=C.huJ(o)
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
return B.i($async$chL,v)},
b2D(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2D=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2D)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2D)
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
return B.i($async$b2D,v)},
b2E(d){return C.i06(d)},
i06(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2E)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hR("ngmy_helper_kb",d,!1,!1,A.cR,null),$async$b2E)
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
return B.i($async$b2E,v)},
asf(){var w=0,v=B.j(x.I),u,t,s,r
var $async$asf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chL(),$async$asf)
case 3:s=e
w=4
return B.b(C.b2D(),$async$asf)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.huJ(x.j.a(J.t(r,"categories")))
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
chP(d){var w=0,v=B.j(x.y),u
var $async$chP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ase(d),$async$chP)
case 3:u=C.b2E(C.huK(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chP,v)},
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
chK:function chK(){},
chJ:function chJ(){},
iq:function iq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chI:function chI(){},
chH:function chH(){},
chM:function chM(){},
chN:function chN(){},
chO:function chO(){},
bc_:function bc_(d){this.a=d},
WW:function WW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG9:function aG9(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ebU:function ebU(){},
ebV:function ebV(){},
ebO:function ebO(d){this.a=d},
ebP:function ebP(d){this.a=d},
ebx:function ebx(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebz:function ebz(d,e,f){this.a=d
this.b=e
this.c=f},
ebw:function ebw(d){this.a=d},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebN:function ebN(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebG:function ebG(d,e,f){this.a=d
this.b=e
this.c=f},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebH:function ebH(d,e,f){this.a=d
this.b=e
this.c=f},
ebB:function ebB(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebD:function ebD(d){this.a=d},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebR:function ebR(){},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
QH:function QH(d,e){this.c=d
this.a=e},
bdW:function bdW(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cXa:function cXa(d){this.a=d},
cX9:function cX9(d,e){this.a=d
this.b=e},
cX7:function cX7(d,e){this.a=d
this.b=e},
cXb:function cXb(d){this.a=d},
cX8:function cX8(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
cXc:function cXc(d){this.a=d},
cXd:function cXd(d,e){this.a=d
this.b=e},
a1v:function a1v(d,e,f){this.c=d
this.d=e
this.a=f},
aIb:function aIb(){this.d=$
this.c=this.a=null},
f3Z:function f3Z(d,e){this.a=d
this.b=e},
f4_:function f4_(d){this.a=d},
f45:function f45(){},
f44:function f44(d,e){this.a=d
this.b=e},
f43:function f43(d,e){this.a=d
this.b=e},
f40:function f40(d,e){this.a=d
this.b=e},
f42:function f42(d,e,f){this.a=d
this.b=e
this.c=f},
f41:function f41(d,e,f){this.a=d
this.b=e
this.c=f},
a1u:function a1u(d,e){this.c=d
this.a=e},
aIa:function aIa(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f3V:function f3V(d,e){this.a=d
this.b=e},
f3T:function f3T(d){this.a=d},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3X:function f3X(d,e){this.a=d
this.b=e},
f3Y:function f3Y(d){this.a=d},
f3W:function f3W(d,e){this.a=d
this.b=e},
i01(d){var w=new B.N(d,new C.chE(),B.T(d).k("N<1,q>")).aM(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chF(d,e,f){return C.i02(d,e,f)},
i02(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chF=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Ld([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rl(B.nl(b3),C.i01(b6)+"\n\nAdmin instruction:\n"+b4,A.i3,null,null),$async$chF)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Ld([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d2(s,"```"))s=A.a.el(J.hoi(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.W.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Ld([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Ld([a3,"AI did not return any categories.",p,o])
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
J.c4(a0,C.huI(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c4(a0,new C.lT("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.t(e,"question")
J.c4(g,new C.iC("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i00(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.h.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c4(m,new C.iq(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Ld([m,null,p,a3])
w=1
break}catch(b7){a2=B.aa(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.Ld([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chF,v)},
i00(d){switch(d){case"investments":return F.Du
case"games":return A.nP
case"loans":return A.jt
case"withdrawals":return A.hE
case"deposits":return A.jN
case"civic":return A.l2
case"store":return A.kg
case"jobs":return A.r0
case"refunds":return A.nO
case"account":return A.eY
case"music":return A.lr
default:return A.zC}},
ir4(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fTB(f))
if(w>=0){t[w]=J.fl(e).cQL(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bga(u)
return t},
chE:function chE(){},
fTB:function fTB(d){this.a=d},
de9:function de9(d){this.a=d},
WX:function WX(d,e,f){this.c=d
this.d=e
this.a=f},
aGb:function aGb(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ecu:function ecu(){},
eca:function eca(d,e){this.a=d
this.b=e},
ecf:function ecf(d,e){this.a=d
this.b=e},
ecd:function ecd(d,e){this.a=d
this.b=e},
ecb:function ecb(d){this.a=d},
ecc:function ecc(d){this.a=d},
ece:function ece(d,e,f){this.a=d
this.b=e
this.c=f},
ec6:function ec6(){},
ec7:function ec7(){},
ec8:function ec8(){},
ec9:function ec9(){},
eck:function eck(d,e){this.a=d
this.b=e},
ecl:function ecl(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
eco:function eco(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecq:function ecq(){},
ecr:function ecr(d){this.a=d},
ecj:function ecj(d){this.a=d},
ecs:function ecs(d){this.a=d},
eci:function eci(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
ech:function ech(d,e){this.a=d
this.b=e},
ecg:function ecg(d,e){this.a=d
this.b=e},
i82(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.Gx(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.az(d,t,q)
o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cK,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cA:A.aL
m.push(new B.es(p,n,n,A.cM,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.nf,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aY(d,t)
m.push(B.cS(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cA:A.aL,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.u6(A.cw,n,n,n,A.eT,n,n,!0,n,B.cS(m,n,n,n,n,n,n,n,n,n,n),A.a7,n,n,A.dt,A.bY)},
dsF:function dsF(d){this.a=d},
aDM:function aDM(d,e){this.a=d
this.b=e},
asd:function asd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGa:function aGa(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ebW:function ebW(d){this.a=d},
ebX:function ebX(d){this.a=d},
ec5:function ec5(){},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ec0:function ec0(){},
ec2:function ec2(){},
ec1:function ec1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec_:function ec_(d,e){this.a=d
this.b=e},
aDK:function aDK(d,e,f,g,h,i){var _=this
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
b2C:function b2C(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chG:function chG(d){this.a=d},
adh:function adh(d,e,f){this.c=d
this.d=e
this.a=f},
cQF:function cQF(d){this.a=d},
cQG:function cQG(){},
cQH:function cQH(d){this.a=d},
aDL:function aDL(d,e,f){this.c=d
this.d=e
this.a=f},
bk6:function bk6(){this.c=this.a=this.d=null},
dsG:function dsG(d,e){this.a=d
this.b=e},
dsI:function dsI(d,e){this.a=d
this.b=e},
dsH:function dsH(d){this.a=d},
i1z(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i1A(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i1y(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hDe(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fxz(),x.cc).gK(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
isk(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i1y(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
at3:function at3(d,e){this.a=d
this.b=e},
JK:function JK(d,e){this.a=d
this.b=e},
rY:function rY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxz:function fxz(){},
asg:function asg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGc:function aGc(d,e,f,g,h,i,j){var _=this
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
ecI:function ecI(d,e){this.a=d
this.b=e},
ecz:function ecz(d){this.a=d},
ecB:function ecB(){},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecE:function ecE(){},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecM:function ecM(){},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecR:function ecR(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecv:function ecv(d){this.a=d},
ecw:function ecw(d){this.a=d},
aOw:function aOw(){},
chR(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.Ui
w=1
break}w=3
return B.b(B.az(),$async$chR)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Ui
w=1
break}try{q=B.a1(x.f.a(A.W.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WY(p,o,n,q)
w=1
break}catch(l){s=B.aa(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.Ui
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chR,v)},
ash(d,e){var w=0,v=B.j(x.H),u
var $async$ash=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$ash)
case 4:w=3
return B.b(g.aG("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.W.av(e.aj(),null)),$async$ash)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ash,v)},
chQ(d){var w=0,v=B.j(x.gp),u,t
var $async$chQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WY(!0,!0,!0,!0)
w=3
return B.b(C.ash(d,t),$async$chQ)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chQ,v)},
hJI(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hJG(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WY:function WY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHx(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHx=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2x(h),$async$bHx)
case 3:if(j){w=1
break}w=4
return B.b(C.as9(h),$async$bHx)
case 4:if(d.e==null){w=1
break}t=B.qW(d,!0)
t.toString
s=B.dl()
s.b=B.pD(new C.h5L(g,e,f,s),!1,!1)
t.me(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHx,v)},
h5L:function h5L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5K:function h5K(d){this.a=d},
a0f:function a0f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDa:function aDa(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dq0:function dq0(d){this.a=d},
dq1:function dq1(d,e,f){this.a=d
this.b=e
this.c=f},
dq6:function dq6(){},
dq5:function dq5(d){this.a=d},
dq2:function dq2(d){this.a=d},
dq3:function dq3(){},
dq4:function dq4(d){this.a=d},
aNn:function aNn(){},
i12(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i11(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asP(d){return C.i1_(d)},
i1_(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
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
return B.i($async$asP,v)},
b3s(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3s=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i12(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3s)
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
return B.i($async$b3s,v)},
hva(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aY(v,14))
return w.length===0?null:w}return null},
i10(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.cjF(A.a.i(d.toLowerCase()),w))},
hvb(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qi(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qi(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qi(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qi(!1,0,"Verification code does not match this deposit.")
if(!C.i10(e,d,w))return new C.qi(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hdr(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_u
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OT(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OT(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OT(!0,!1,!1,!1)},
cjL(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hva(d)
if(s==null){u=D.Uk
w=1
break}w=3
return B.b(C.asP(s),$async$cjL)
case 3:t=g
if(t==null){u=D.Uk
w=1
break}u=C.hdr(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjL,v)},
b3u(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3u=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3s(d),$async$b3u)
case 3:s=g
if(s==null||s.length===0){u=D.Uk
w=1
break}w=4
return B.b(C.asP(s),$async$b3u)
case 4:t=g
if(t==null){u=D.Uk
w=1
break}u=C.hdr(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3u,v)},
cjM(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjM=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3s(d),$async$cjM)
case 3:t=j
if(t==null||t.length===0){u=new C.qi(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xg(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjM,v)},
Xg(d,e,f,g,h){return C.i13(d,e,f,g,h)},
i13(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xg=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hva(a4)
if(a0==null){u=new C.qi(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asP(a0),$async$Xg)
case 3:k=a8
if(k==null){u=new C.qi(!1,0,y.m)
w=1
break}j=C.hdr(k,a5)
if(j.b){u=new C.qi(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qi(!1,0,y.u)
w=1
break}if(j.c){u=new C.qi(!1,0,y.j)
w=1
break}i=C.hvb(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aI(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qi(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).aa().ag()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xg)
case 8:p=a8
if(p==null){u=new C.qi(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qi(!1,0,"This deposit code was already used.")
w=1
break}o=C.hvb(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dI(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hR("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cR,null),$async$Xg)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hR("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cR,null),$async$Xg)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.aa(a1)
$.am.$1("[local deposit qr] redeem: "+B.w(l))
u=new C.qi(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.qi(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xg,v)},
OT:function OT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qi:function qi(d,e,f){this.a=d
this.b=e
this.c=f},
cjF:function cjF(d,e){this.a=d
this.b=e},
cjT(d,e){var w
B.hkc(d,e,!1)
B.rj(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bt(!0,!1,d.d,w)},
a9i(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bM(d)===e.gcf()&&B.bY(d)===e.gcv()},
i1b(d){var w=B.d7(d)*60+B.fS(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hvi(d){if(B.d7(d)>=12)return!1
if(B.lX(d)===6||B.lX(d)===7)return!1
return!0},
cjX(d){var w=d.c?d.bU():d
return w.d2(B.c0(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))},
hdv(d,e){var w,v,u,t=d.gD9()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9i(d.fx,e)&&d.fy>0.0001)return A.h.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cjX(w))return 0
v=B.c0(e.gck(),e.gcf(),e.gcv(),12,0,0,0,0)
if(!e.d2(v))return t
if(!e.cb(w))return 0
u=A.o.aq(v.bz(w).a,1000)
if(u<=0)return t
return A.h.D(t*(A.o.D(A.o.aq(e.bz(w).a,1000),0,u)/u),0,t)},
hdu(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9i(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.cjS(s))&&C.cjX(t)){r=d.gD9()
v=r>0
if(v){q=new B.d9(s,d.a,r,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cx,p)
C.cjT(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9i(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9i(o,p)&&!C.cjX(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjS:function cjS(d){this.a=d},
igk(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
ixI(d,e,f,g,h,i){return B.hF(d,new C.asQ(f,e,i,g,h,null),!0,null,x.H)},
hzy(d){var w,v,u=d.c?d.bU():d,t=B.d7(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bM(u)+"/"+B.bY(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fS(u)),2,"0")+" "+v},
hHr(d){var w=d.x
if(w===A.dH)return"Processing"
if(w===A.kK)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ioD(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fS)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
ifZ(d){var w=d.d,v=w===A.fS||w===A.pb||w===A.h8||w===A.kL,u=d.x
if(u===A.dH)return w===A.f4?-d.c:0
if(u!==A.cx)return 0
w=d.c
return v?w:-w},
ipb(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b0(q,new C.fPo())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.ifZ(s)
if(r<0)r=0
w.n(0,s.a,new B.brF(v,r))}return w},
asQ:function asQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGz:function aGz(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
er9:function er9(d){this.a=d},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
ery:function ery(d,e){this.a=d
this.b=e},
erz:function erz(){},
erA:function erA(d){this.a=d},
erB:function erB(){},
erC:function erC(d){this.a=d},
erD:function erD(d,e,f){this.a=d
this.b=e
this.c=f},
erE:function erE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ert:function ert(d,e){this.a=d
this.b=e},
era:function era(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(){},
erv:function erv(){},
erw:function erw(d){this.a=d},
erx:function erx(){},
ere:function ere(d,e){this.a=d
this.b=e},
erf:function erf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ern:function ern(){},
erk:function erk(d){this.a=d},
erl:function erl(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
erp:function erp(d,e,f){this.a=d
this.b=e
this.c=f},
erq:function erq(d){this.a=d},
ers:function ers(d){this.a=d},
err:function err(d){this.a=d},
erg:function erg(d){this.a=d},
erh:function erh(d,e,f){this.a=d
this.b=e
this.c=f},
erI:function erI(){},
erJ:function erJ(){},
erN:function erN(d){this.a=d},
erG:function erG(d){this.a=d},
erO:function erO(d){this.a=d},
erF:function erF(d){this.a=d},
erP:function erP(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erM:function erM(d){this.a=d},
erH:function erH(d){this.a=d},
erd:function erd(d){this.a=d},
erc:function erc(d){this.a=d},
erb:function erb(d){this.a=d},
erj:function erj(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
aDY:function aDY(d,e,f,g,h,i,j,k,l,m){var _=this
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
duq:function duq(){},
dur:function dur(){},
dus:function dus(d,e,f){this.a=d
this.b=e
this.c=f},
dup:function dup(d){this.a=d},
dut:function dut(d,e){this.a=d
this.b=e},
duo:function duo(d){this.a=d},
aDX:function aDX(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkQ:function bkQ(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
duj:function duj(d){this.a=d},
duk:function duk(d){this.a=d},
dul:function dul(d){this.a=d},
dum:function dum(){},
dun:function dun(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dui:function dui(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
duh:function duh(d){this.a=d},
beq:function beq(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bep:function bep(d,e,f){this.b=d
this.d=e
this.a=f},
beo:function beo(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDZ:function aDZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aE_:function aE_(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
duK:function duK(){},
duL:function duL(){},
duM:function duM(){},
duw:function duw(d){this.a=d},
duv:function duv(d,e){this.a=d
this.b=e},
duu:function duu(d,e){this.a=d
this.b=e},
duH:function duH(d,e){this.a=d
this.b=e},
duJ:function duJ(d,e){this.a=d
this.b=e},
duI:function duI(d,e){this.a=d
this.b=e},
duG:function duG(){},
duF:function duF(d){this.a=d},
duE:function duE(){},
duz:function duz(d){this.a=d},
duA:function duA(){},
duB:function duB(d){this.a=d},
duC:function duC(d){this.a=d},
duy:function duy(){},
duD:function duD(d){this.a=d},
dux:function dux(d){this.a=d},
bdP:function bdP(d){this.a=d},
fPo:function fPo(){},
bz0:function bz0(d,e){this.b=d
this.a=e},
aND:function aND(){},
bB_:function bB_(){},
ilf(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fH5(v,g))
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
aRP(d){var w,v=J.a8(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.h.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.h.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
iwm(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.h_M(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiT(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRP(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
inW(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRP(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRP(d)>0},
inV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.h.M(h)
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
ile(d,e){var w
C.aiT(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fH4(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uz(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ihK(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hjM(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ihK(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGl(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGl)
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
return B.i($async$bGl,v)},
bFn(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGl(),$async$bFn)
case 3:u=t.hjM(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFn,v)},
M_(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$M_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hEB.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bz(p)
t=t.a>B.dx(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hEB.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S6(A.cg,q),$async$M_)
case 5:case 4:s=$.hEA.h(0,q)
if(s==null){u=C.uz(e,q)
w=1
break}r=C.uz(B.bFu(e,B.a([s],x._)),q)
if(r!=null)B.hmx(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$M_,v)},
iwB(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ieg(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.fvb(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ild(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ieg(u,f)
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
iwz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
hmw(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fZb(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fZb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiT(d)
t=$.hj1
if(t==null)s=$.hj1=B.S6(A.cg,null).fw(new C.fZc())
else s=t
w=3
return B.b(s,$async$fZb)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.fZd(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFu(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZb,v)},
aiU(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiT(d)
t=B.T(d).k("N<1,ab<q,@>>")
t=B.B(new B.N(d,new C.fWO(),t),t.k("ak.E"))
w=3
return B.b(B.S6(t,null),$async$aiU)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFu(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiU,v)},
aSM(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hmw(d,e,f)
t=C.uz(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S6(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSM)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uz(s,e)
if(r!=null)B.hmx(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSM,v)},
it4(d,e,f){var w
C.hmw(d,e,f)
w=$.hiQ.h(0,e)
if(w!=null)w.a1(0)
$.hiQ.n(0,e,B.cy(A.lP,new C.fWP(e,d)))},
hdc(d,e){return new C.b2f(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fH5:function fH5(d,e){this.a=d
this.b=e},
h_M:function h_M(d){this.a=d},
fH4:function fH4(d){this.a=d},
fvb:function fvb(d){this.a=d},
fZc:function fZc(){},
fZd:function fZd(){},
fWO:function fWO(){},
fWP:function fWP(d,e){this.a=d
this.b=e},
b2f:function b2f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
ix4(d,e,f){return B.bU(A.L,null,new C.h0Y(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h0Y:function h0Y(d,e){this.a=d
this.b=e},
a12:function a12(d,e,f){this.c=d
this.d=e
this.a=f},
aGn:function aGn(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
elN:function elN(d){this.a=d},
elQ:function elQ(d){this.a=d},
elR:function elR(d){this.a=d},
elP:function elP(d){this.a=d},
elS:function elS(d){this.a=d},
elT:function elT(d,e){this.a=d
this.b=e},
elO:function elO(d,e){this.a=d
this.b=e},
irs(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iZ
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iZ
v=Date.now()
u=C.ih2(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kI("calendar",B.J(["title",C.ih1(t,w),"start",u.ag(),"end",u.bR(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ih1(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFq(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hFq(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hFq(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fG2(),B.T(w).k("N<1,q>")).aM(0," ")},
ih2(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bM(e),B.bY(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bR(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKw.gdQ(D.aKw),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cT(d,u,0)){t=C.ifY(o,v.b)
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
ifY(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.lX(w)===e){u=!0
if(v<=0){t=d.bR(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bR(r)}return d.bR(r)},
fG2:function fG2(){},
irt(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
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
q=C.id4(w,j)
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
id4(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.iks(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
iks(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fG1(),B.T(w).k("N<1,q>")).aM(0," ")},
fG1:function fG1(){},
hJP(d){var w=new B.N(d,new C.fZu(),B.T(d).k("N<1,ab<q,@>>")).c0(0,new C.fZv())
w=B.B(w,w.$ti.k("M.E"))
return w},
fZu:function fZu(){},
fZv:function fZv(){},
irw(d,e){var w,v,u,t,s,r,q,p,o
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
iqC(d,e){var w
if(e)return d
w=J.dH(d,new C.fSN())
w=B.B(w,w.$ti.k("M.E"))
return w},
fSN:function fSN(){},
it1(d){switch(d){case"blackjack_vegas":return D.e3K
case"roulette_euro":return D.e3u
case"slots_jackpot":return D.e3B
case"poker_texas":return D.e3E
case"chess_royale":return D.e3v
case"connect_four_pro":return D.e3w
case"domino_block":return D.e3y
case"plinko_prizes":return D.e3G
case"spin_wheel":return D.e3D
case"baccarat_punto":return D.e3x
case"craps_table":return D.e3F
case"casino_war":return D.e3z
case"bingo_live":return D.e3C
case"solitaire_klondike":return D.e3J
case"backgammon_pro":return D.e3t
case"billiards_snooker":return D.e3H
case"profit_solve":return D.e3I
default:return D.e3A}},
fWF(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ac(0,A.G,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.X(A.nM,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbB,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bD:A.a_
w=B.m(8)
v=B.K(A.bm,A.r,1)
u=B.a([new B.ac(0,A.G,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bK4,B.d(D.cKm[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b4,B.as(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b4],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.n(A.hP,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
iuh(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ac(0,A.G,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.fYV(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fRx,A.af,B.A(r,A.l,v,A.b9,A.i,0,v,v)],w),A.l,v,A.e,A.i,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cbV,A.n),v,v,v,v,H.anu,v,v,v),A.aB,B.db(A.atD,v,D.fSb,d,B.bn(A.aQ,v,v,v,A.dA,v,A.a1L,v,v,v,v,v))],w),A.l,v,A.e,A.i,0,A.p)},
pA:function pA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btP:function btP(d,e){this.b=d
this.a=e},
fYV:function fYV(){},
i1L(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.atg(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.aw()))},
ilO(d,e,f,g,h){var w=new C.fIR(f,h)
switch(d){case"checkers_deluxe":return C.ibE(h,g,e,w)
case"tic_tac_go":return C.ikG(h,g,e,w)
case"blackjack_vegas":return C.iaX(h,g,e,new C.fIL(w))
case"roulette_euro":return C.iiW(h,g,e,new C.fIM(w))
case"slots_jackpot":return C.ijL(h,g,e,new C.fIN(w))
case"billiards_snooker":return C.ihN(h,g,e,new C.fIO(w))
case"connect_four_pro":return C.ic0(h,g,e,w)
case"profit_solve":return C.ihQ(h,g,e,new C.fIP(w))
default:return C.ibA(d,h,g,e,new C.fIQ(w))}},
ibE(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=B.m(12),t=B.K(D.a_9,A.r,8),s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bv(B.m(6),B.iA(!0,w,w,A.y,D.fpZ,new C.fsd(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
ikG(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),w),B.E(B.as(new B.fG(1,B.ci(new C.fGn(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
iaX(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xK,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.frv(),B.T(q).k("N<1,v>")))
else A.d.u(s,B.a([C.fWF(q[0],!1),A.bn,C.fWF(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4X(d.ay),v,v,v,v,v,v,D.fMn,v,v,v)
q=d.ay
w=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.frw(),w),w.k("ak.E"))
q=B.bZ(A.fT,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eI,u,v),D.fYK,A.an,s,A.aB,D.h5t,r,A.an,q,A.b4,B.A(B.a([B.E(B.bJ(D.fSF,v,d.CW?v:new C.frx(d,e,f,g),v),1),A.ae,B.E(B.bJ(D.h7Z,v,new C.fry(d,e,f,g),v),1)],t),A.l,v,A.e,A.i,0,v,v)],t),A.l,v,A.e,A.i,0,A.p)},
iiW(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=d.cx,t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eI,v,w),B.o(w,B.b4(w,w,w,new C.btP(u,w),A.aA),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jK,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.fzk,w,w,w),w))
t.push(A.af)
t.push(B.bZ(A.fT,B.iB(6,new C.fDh(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.i,0,A.p)},
ijL(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fFe(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eI,v,w),C.iuh(new C.fFf(d,e,f,g),u)],x.p),A.l,w,A.e,A.i,0,A.p)},
ihN(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),u=B.m(20),t=B.K(A.iM,A.r,12),s=x.V,r=B.a([new B.ac(0,A.G,A.w.j(0.45),A.dn,18)],s),q=x.p
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8G,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.afQ,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.A,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ac(0,A.G,A.w.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eGe,A.n),w,w,w,A.f6,w,w,w,w),1),B.l0(A.bf,w,w,1,0,new C.fC6(d,f),d.dy),B.bJ(D.fXL,w,new C.fC7(d,e,g,f),w)],q),A.l,w,A.e,A.i,0,A.p)},
ic0(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.xK,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.be,B.ay(v,B.x(B.iB(6,new C.fsF(d,w),!0,t),A.l,v,A.mu,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fsG(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eI,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dP,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
ihQ(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.xK,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iI,w,w,w),B.d(d.fy,w,w,w,w,w,w,I.acw,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c7d,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fCi(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fWi,w,new C.fCj(d,e,g,f),w)],x.p),A.l,w,A.e,A.i,0,A.p)},
ibA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.it1(d)
v=D.aKl.h(0,d)
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
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h74,n,new C.fs0(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.cp,n,n,n,n,n)),n)],k),A.l,n,A.e,A.i,0,A.p)},
Fz:function Fz(d,e){this.a=d
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
cly:function cly(){},
clz:function clz(){},
clx:function clx(){},
clA:function clA(){},
clw:function clw(){},
clC:function clC(){},
clD:function clD(){},
clv:function clv(d){this.a=d},
clB:function clB(){},
clu:function clu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIR:function fIR(d,e){this.a=d
this.b=e},
fIL:function fIL(d){this.a=d},
fIM:function fIM(d){this.a=d},
fIN:function fIN(d){this.a=d},
fIO:function fIO(d){this.a=d},
fIP:function fIP(d){this.a=d},
fIQ:function fIQ(d){this.a=d},
fsd:function fsd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsc:function fsc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGn:function fGn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGm:function fGm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fGl:function fGl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frv:function frv(){},
frw:function frw(){},
frx:function frx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fry:function fry(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDh:function fDh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDg:function fDg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFe:function fFe(){},
fFf:function fFf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fC6:function fC6(d,e){this.a=d
this.b=e},
fC7:function fC7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsG:function fsG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsF:function fsF(d,e){this.a=d
this.b=e},
fCi:function fCi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCj:function fCj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs0:function fs0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ioF(d){var w,v=B.T(d).k("Y<1>")
v=B.pK(new B.Y(d,new C.fOr(),v),120,v.k("M.E"))
w=B.cF(v,new C.fOs(),B.a4(v).k("M.E"),x.N).aM(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fOr:function fOr(){},
fOs:function fOs(){},
aj4(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aub:function aub(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aHb:function aHb(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
eTH:function eTH(){},
aP7:function aP7(){},
i_J(){var w=$.Jx
if(w<=0)return;--w
$.Jx=w
if(w===0){w=$.huu
if(w!=null)w.$0()}},
cgM(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arQ(d){var w=0,v=B.j(x.H),u,t
var $async$arQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hd7.I(0,t)
w=4
return B.b(B.az(),$async$arQ)
case 4:w=3
return B.b(f.aG("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arQ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arQ,v)},
arP(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgM(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hd7.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arP)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.t(s.a,"ngmy_game_free_play_used_"+r))
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
return B.i($async$WV,v)},
b2w(d){return C.i_W(d)},
i_W(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2w=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2w)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_ai_usage_v1",A.W.av(d,null)),$async$b2w)
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
return B.i($async$b2w,v)},
b2u(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afC(0,new B.V(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bi(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afC(typeof v=="number"?A.o.D(A.h.M(v),0,999999):0,t)},
b2v(d,e){if(A.o.aq(e.bz(d.b).a,36e8)>=24)return new B.afC(0,e)
return d},
chp(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$chp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WV(),$async$chp)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2v(C.b2u(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chp,v)},
chq(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$chq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WV(),$async$chq)
case 3:t=g
s=Date.now()
r=C.b2v(C.b2u(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bR(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chq,v)},
i_X(d){var w,v,u,t=d.a,s=A.o.aq(t,1e6)
if(s<=0)return"0s"
w=A.o.aq(t,36e8)
v=A.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2x(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WV(),$async$b2x)
case 3:t=p.b2v(o.b2u(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2x)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2x,v)},
as9(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$as9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WV(),$async$as9)
case 3:t=s.b2v(r.b2u(f,d),new B.V(Date.now(),0,!1))
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
q=C.b2v(C.b2u(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2w(s),$async$asa)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asa,v)},
aiF(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiF=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hJH(a0))if(!C.hJG(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hJH(a0)?3:4
break
case 3:o=C.isH(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9k(e,o),$async$aiF)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hsX(o)+":\n"
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
return B.b(B.MV("text/plain"),$async$aiF)
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
case 13:case 9:w=C.hJG(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8W(e),$async$aiF)
case 17:m=f.huF(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VX(e),$async$aiF)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hsY(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiF,v)},
i1j(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ck1(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ck1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hvn(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ck1)
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
return B.i($async$ck1,v)},
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
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.cb.cE(0,A.cD.aK(q))
m=J.z(J.t(r,"live"),!0)
u=new B.aIF(m,p,n)
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
return B.i($async$asT,v)},
b3B(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i1j(q)?3:4
break
case 3:w=5
return B.b(C.ck1(q),$async$b3B)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asT(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.asT(A.a.i(A.a.aY(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asT(A.a.i(A.a.aY(q,15))),$async$b3B)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIF(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3B,v)},
hvD(d){var w=d.bK
if(w>=0)return w
return 1},
aiS(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aSY(d,e),$async$aiS)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HF(d,null,null,!1,!0,""),$async$aiS)
case 5:w=4
return B.b(t.$1(h),$async$aiS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiS,v)},
irr(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iZ
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.iZ
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.ih0(w)
if(p!=null){v=p.a
r.b=s.bR(v)
q.b=C.hEc(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.aq(v,e)<=180)q.b="Reminder \u2014 "+A.o.aq(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hEd(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bR(a0)
r.b=B.c0(B.bD(l),B.bM(l),B.bY(l),n,m,0,0,0).bR(-36e8)
if(r.bm().d2(s.bR(e)))r.b=J.c4(r.bm(),A.oy)
v=C.ilb(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bM(s),B.bY(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bR(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hEd(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bM(l),B.bY(l),h,g,0,0,0)
r.b=f.d2(s.bR(3e7))&&!v?f.bR(a0):f
q.b=C.hEc(a1,w)}}v=x.N
return B.a([new B.kI("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ih0(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
ilb(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hEd(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hEc(d,e){var w,v,u,t
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
i1E(d){var w,v,u,t,s=J.a8(d)
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
C.bv3.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Gb.prototype={
T(){return new C.aKK(this.$ti.k("aKK<Gb.T,Gb.S>"))}}
C.aKK.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new B.hx(A.H2,v,null,null,w.$ti.k("hx<1>"))
u.e=w
u.Xl()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQI()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.H2,w.b,w.c,w.d,w.$ti)}v.Xl()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.my(d,w)},
t(){this.aQI()
this.a2()},
Xl(){var w,v=this
v.d=v.a.c.lQ(new C.ffE(v),new C.ffF(v),new C.ffG(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.a0g,w.b,w.c,w.d,w.$ti)},
aQI(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.ay3.prototype={
my(d,e){return this.e.$2(d,e)}}
C.anb.prototype={
T(){return C.i8o()},
bu(){return this.r.$0()}}
C.re.prototype={}
C.aCQ.prototype={
aeH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hu2(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hu4(s),$async$aeH)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeH,v)},
YP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asR(t.a.c),$async$YP)
case 3:if(e!=null&&t.c!=null)t.a.bu()
r=!C.cgM(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arP(t.a.c),$async$YP)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dmr(t,s))
if(!s)t.aeH()
case 1:return B.h(u,v)}})
return B.i($async$YP,v)},
aeh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGl(),$async$aeh)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dmC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aeh,v)},
Z(){var w,v,u=this
u.bzg()
$.tU=$.tU+1
w=u.a
$.bGq=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,ab<q,@>>")
w=B.B(new B.N(w,new C.dmU(),v),v.k("ak.E"))
u.f=w
u.aeh()
u.Kz()
u.YP()
u.e=B.dg(A.ow,new C.dmV(u))},
Kz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiT(t.a.d.bd)
w=3
return B.b(C.fZb(t.a.d.bd),$async$Kz)
case 3:s=e
if(t.c==null){w=1
break}C.aiT(t.a.d.bd)
if(s!=null)t.m(new C.dmK(t,s))
else t.m(new C.dmL(t))
case 1:return B.h(u,v)}})
return B.i($async$Kz,v)},
t(){C.b2h()
var w=this.e
if(w!=null)w.a1(0)
this.bzf()},
ajB(d,e,f){return this.czC(d,e,f)},
czC(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajB=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ilf(n,o.a,o.c,d.a,s,f,e,p)
t.a.bu()
w=3
return B.b(C.aiU(t.a.d.bd),$async$ajB)
case 3:if(t.c==null){w=1
break}t.m(new C.dmN(t))
r=f===1?"1 game":""+f+" games"
t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajB,v)},
Ji(d,e){return this.ckv(d,e)},
c7j(d){return this.Ji(d,null)},
ckv(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ji=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uz(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRP(s)<=0){t.c.J(x.q).f.U(D.aVG)
w=1
break}}w=5
return B.b(C.arP(t.a.c),$async$Ji)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hd8(r,C.fSY(q.c),p),$async$Ji)
case 6:w=1
break
case 4:o=new C.dmF(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hF(r,new C.aFH(p,q.d,q.f,q.r,new C.dmG(o),q.w,C.fSY(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hF(q,new C.ana(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dmH(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Ji,v)},
c4q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiT(i.a.d.bd)
C.aiT(i.f)
w=C.iwm(i.a.c.a,i.f)
v=C.ile(i.a.c.a,i.f)
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
return B.o(h,B.x(B.a([D.h14,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.o8,h,h,h),A.P,B.A(B.a([B.E(B.dU(A.Lt,new C.dmx(i,t),h),1),A.ae,B.E(B.bJ(D.hav,h,new C.dmy(i,t),h),1)],n),A.l,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.n),h,h,h,A.eg,A.bl,h,h,1/0)}m=A.d.gH(v)
l=A.d.dM(i.y,new C.dmz(m),new C.dmA(i))
k=C.hjM(m,i.a.c.a,i.r)
j=C.aRP(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fTQ,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.o8,h,h,h),A.aw,B.d(C.inV(m,i.a.c.a),h,h,h,h,h,h,A.Wn,h,h,h),A.P,B.bJ(D.h0l,h,new C.dmB(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.n),h,h,h,A.eg,A.bl,h,h,1/0)},
bW5(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.flu.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EM(w[v])
t=A.h.D(u.d*0.58,0.12,0.3)
l.push(new B.rC(u.a,u.b,A.h.D(u.c*0.92,0,0.9),t).jd())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.i5,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iS,B.x(B.a([B.A(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.jR,n,n,n),1)],o),A.l,n,A.e,A.i,0,n,n),A.aw,B.d(d.c,n,2,A.a2,n,n,n,A.q_,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c4H,n,n,n,new C.dmt(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a12,B.o(n,D.c2F,A.f,n,n,new B.n(B.a0(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.K(B.a0(A.h.S(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ac(0,A.G,B.a0(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a7(A.az,A.aC,A.x,l,n,n),A.n),n,92,n,A.eg,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dmu(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nz:A.qu,k=m?A.iK.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iK:A.c,h=m?A.c.j(0.08):A.bm,g=m?A.c:A.a_,f=m?A.bs:A.cf
if(!o.x)return C.aSn(n,l,B.as(B.n0(n,m?A.c:A.bf,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fSY(o.a.c)
return new C.OC(o.a.w,w,!0,o.gaVM(),n)}w=B.aD(d,A.dD,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ac(0,A.G,A.w.j(0.04),A.cN,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wp(new C.dmR(o,f,g),n,$.aTS(),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.n),n,n,n,n,A.a1f,n,n,1/0),A.T,o.c4q()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbW4(),B.T(v).k("N<1,v>")))
w=B.cc(B.x(s,A.l,n,A.e,A.i,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ac(0,A.G,A.w.j(m?0.28:0.08),A.i5,15)],t)
u=B.K(m?A.c.j(0.1):A.bm,A.r,1)
t=B.aH(n,n,n,n,B.X(A.eL,j,n,n,n,18),n,n,n,o.gaVM(),n,n,n,n,n,n)
q=B.E(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oQ(!0,C.aSn(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OI,B.o(n,B.A(B.a([t,q,new B.D(A.iS,B.o(n,B.A(B.a([D.c_K,A.e3,C.asG(new C.dmS(o),A.kJ,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.n),n,n,n,n,A.hp,n,n,n),n)],r),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.n),n,60,n,n,A.n3,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dmT(o),x.K)},
aVN(){var w,v
this.a.bu()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j3(w,v)}}
C.aFH.prototype={
T(){return new C.bmP()},
hK(d){return this.e.$1(d)},
bu(){return this.f.$0()},
aK2(){return this.r.$0()}}
C.bmP.prototype={
Z(){this.bAh()
this.d=B.Wl(this.a.d.bh)
$.tU=$.tU+1},
t(){C.b2h()
this.bAg()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.are(v,new C.e0_(w),u,new C.e00(w),new C.e01(w,d),new C.e02(w),null)}}
C.ana.prototype={
T(){return new C.aCP(new B.at(A.ax,$.aw()))},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()},
aK2(){return this.z.$0()}}
C.aCP.prototype={
Z(){this.bze()
this.a.toString
$.tU=$.tU+1},
t(){C.b2h()
var w=this.d
w.V$=$.aw()
w.R$=0
this.bzd()},
a3L(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OM()
w=5
return B.b(C.arP(t.a.c),$async$a3L)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hd8(s,C.fSY(r.c),q),$async$a3L)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uz(s.d.bd,A.a.i(r))
if(p!=null&&C.aRP(p)<=0){t.c.J(x.q).f.U(D.aVG)
w=1
break}}o=B.cR(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.J(x.q).f.U(D.ft8)
w=1
break}m=B.M9(t.a.c.a,new C.dml(t))
if(m+0.001<n){t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aK2()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d9(r,q.c.a,n,A.ks,A.fx,"Game bet: "+q.f,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
if(D.flg.q(0,t.a.e)){s=t.c
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
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.Iq,o,o,o,new C.dmo(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cG,o,o,o),i=B.m(12),h=x.p
j=B.eM(B.a([B.o(o,B.as(C.asG(new C.dmp(p),A.iI,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.n),o,o,o,D.bEd,A.f2,o,o,o)],h),o,o,!0,!0,D.a0b,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.X(D.bRt,D.bxR,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.mD,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.o8,o,o,o)
u=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dmq(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.i,0,o,o)
r=B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.o(o,B.x(B.a([D.hcb,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m0,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a86.l()>>>16&255,A.a86.l()>>>8&255,A.a86.l()&255),A.r,1)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fTc,B.d("+ $"+A.h.ac(n*0.46,2),o,o,o,o,o,o,D.fIR,o,o,o),B.d("(46% return on $"+A.h.ac(p.e,2)+" bet)",o,o,o,o,o,o,A.q_,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)
s=B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h1m,A.P,q,A.P,B.o(o,B.x(B.a([D.fNX,B.d("$"+A.h.ac(m,2),o,o,o,o,o,o,D.fxw,o,o,o),B.d("8 pairs \xd7 $"+A.h.ac(m,2)+" each",o,o,o,o,o,o,A.q_,o,o,o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.n),o,o,o,o,A.cq,o,o,1/0)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(D.bt8,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fu(o,o,A.bf,o,o,o,o,o,o,A.c,o,A.hh,o,o,o,o,o,o,o,o)
return C.aSn(j,D.a0b,B.cc(B.o(o,B.x(B.a([k,A.aw,v,A.bF,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iz(B.d("Start Game ($"+A.h.ac(p.e,2)+")",o,o,o,o,o,o,A.cd,o,o,o),p.gcDA(),r),o)],h),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.caW,A.n),o,o,o,o,A.eX,o,o,1/0),A.t,o,A.y,o,o,A.a1i,o,o,A.ah))}}
C.anc.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.aCR(A.cT,new B.at(A.ax,$.aw()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bu(){return this.z.$0()}}
C.aCR.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rX(d){return this.bUd(d)},
bUd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AS()
r=t.PB()
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
return B.b(t.Fg(q,s,r),$async$rX)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rX,v)},
FT(d,e,f,g){return this.cBi(d,e,f,g)},
cBi(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHt(s,C.bH9(),C.hlW(),d,e,f,g),$async$FT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FT,v)},
AS(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6e(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aj4(t,s.e.a.a)
case"memory":return s.ghR()&&D.nd.q(0,s.a.e)?s.fx:s.k2
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
PB(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hjQ()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b_
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fT2(w.e,w.d.y2)
if(v!==C.fT2(d.e,d.d.y2)&&u.c!=null)u.m(new C.dod(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzi()
w=i.a
w.toString
$.tU=$.tU+1
i.Q=C.fT2(w.e,w.d.y2)
i.b95()
i.ae1()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PZ()
i.adE()
i.bn=B.dg(A.h0,new C.dog(i))}if(A.d.q(D.SZ,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uz(w,v)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2f(!1,w,k.length===0||A.a.q(k,"@")?C.hjM(u,v,null):k,p,l,s)}else{w=w.c
w=C.hdc(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.hdc(w.c,w.a)}v=C.i1L()
v.bsX(i.a.e,i.d,w)
i.b_=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uz(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b_
w.toString
w.bew(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b_
i.r=w.c
if(w.e){if(w.r)j=D.Ut
else j=w.f===!0?D.r9:D.JJ
i.AU(j)}}}i.b3=B.dg(A.n2,new C.doh(i))
if(i.ghR())i.bi=B.dg(A.n1,new C.doi(i))}if(i.ghR()&&!A.d.q(D.SZ,i.a.e))i.bi=B.dg(A.n1,new C.doj(i))
i.as=B.dg(A.fN,new C.dok(i))},
PZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uz(s.d.bd,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bFn(p,t.a.c.a),$async$PZ)
case 5:o=e
if(t.c!=null)t.m(new C.dnt(t,o))
w=1
break
case 4:w=6
return B.b(C.M_(q,t.a.d.bd,!1),$async$PZ)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFn(n,t.a.c.a),$async$PZ)
case 7:o=e
if(t.c!=null)t.m(new C.dnu(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PZ,v)},
akH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M_(r,s.d.bd,!1),$async$akH)
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
t.aQu(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.h.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.dnX(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dnY())}case 1:return B.h(u,v)}})
return B.i($async$akH,v)},
adE(){var w=0,v=B.j(x.H),u=this
var $async$adE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a23(!0),$async$adE)
case 2:return B.h(null,v)}})
return B.i($async$adE,v)},
a23(d){return this.cqv(d)},
cqu(){return this.a23(!1)},
cqv(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
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
return B.b(C.M_(q,s.d.bd,b3),$async$a23)
case 3:o=b5
if(o==null)o=C.uz(t.a.d.bd,q)
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
if(a6!=null&&a7!=null){a8=(a6.cb(a7)?a6:a7).bR(5e5)
if(!new B.V(Date.now(),0,!1).d2(a8)){a4=b2.a=a8.bR(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.it4(t.a.d.bd,q,j)
t.a.bu()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dnJ(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dnK(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d2(s)){s=s.bz(b1).a
r=A.o.aq(s,1e6)
t.m(new C.dnL(b2,t,r+(A.o.F(A.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.m(new C.dnM(b2,t))
b2=t.a.e
if(b2==="pattern")t.aat()
else if(b2==="memory"){t.b94()
if(t.c!=null)t.m(new C.dnN())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a23,v)},
aRq(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRp(){return this.aRq(null)},
aat(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aat=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cnW()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.M_(q,s.d.bd,!1),$async$aat)
case 5:r=t.b4Z(e)
case 4:if(t.c==null){w=1
break}t.aRq(r)
t.m(new C.dmW(t))
t.Es()
case 1:return B.h(u,v)}})
return B.i($async$aat,v)},
b4Z(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.h.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
cnW(){var w=this.a,v=w.Q
if(v==null)return null
return this.b4Z(C.uz(w.d.bd,v))},
ae1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ae1)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dns(t,s))
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
if(t)s=$.bHW().length
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
return B.b(C.M_(r,s.d.bd,!1),$async$a42)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uz(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a8(p)
r.u(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bi(J.k(r==null?"":r))
s=s?null:J.t(p,"sessionUpdatedAt")
l=B.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cb(l)){w=1
break}s=t.b_
s.toString
r=t.a
s.bew(r.e,n,r.c.a)
r=t.b_
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Ut
else k=r.f===!0?D.r9:D.JJ
w=7
return B.b(t.AU(k),$async$a42)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dnZ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a42,v)},
aiz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aiz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b_==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b_
o.toString
p=o.cTS(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSM(n,o,p),$async$aiz)
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
return B.i($async$aiz,v)},
AU(d){return this.c0z(d)},
c0z(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.K8(s,s),$async$AU)
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
return B.b(t.Iy(),$async$AU)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$AU,v)},
a11(d,e){return this.cie(d,e)},
cie(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a11=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aiz(),$async$a11)
case 6:if(d===D.r8){w=1
break}w=4
break
case 5:if(d===D.r8){w=1
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
p=C.uz(s.d.bd,q)
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
return B.b(C.aSM(t.a.d.bd,q,l),$async$adU)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
Iy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Iy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uz(s.d.bd,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.S(s,r)
n.n(0,"gameOver",!0)
C.hmw(t.a.d.bd,q,n)
C.iwz(t.a.d.bd,q)
w=3
return B.b(C.aiU(t.a.d.bd),$async$Iy)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adU()
else if(!v.f)v.c7k()
C.b2h();++v.RG
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
w.V$=$.aw()
w.R$=0
v.bzh()},
cGU(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.b_==null}if(v)return
if(w.c7)return
v=w.b_
v.toString
w.a.toString
if(v.a>=v.b){w.uB("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.do7())},
b95(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b94()
break
case"scramble":r.bh=0
r.b96()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzx[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.ch)
break
case"math":r.y2=0
r.b93()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b97()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.csW()){w=J.e4(9,w)
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
r.aRp()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Es()}break
case"color":r.bd=0
r.b8Z()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.bak()
break
default:if(A.d.q(D.SZ,w)){w=r.b_
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6e(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
csW(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b97(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
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
b93(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bHW().length-6)u.at=0
w=$.bHW()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b96(){var w=this,v=w.w=D.dar[A.o.F(w.at+w.bh,105)]
w.ax=C.iwQ(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.ch)},
bak(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.dx(0,0,0,120+w.d.aw(280),0,0),new C.dnW(w))},
c0C(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rX("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.aq(new B.V(v,0,!1).bz(u).a,1000)}if(w<520){t.m(new C.dnq(t))
v=t.a0
if(v>=5){t.pD()
t.uB("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.bak()
t.m(new C.dnr())}}else t.rX("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cG7(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.do2())
if(u<0)return
t.m(new C.do3(t,u,v,d))},
cG8(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.do4(u,d,v))},
bL1(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dmX())){u.c.J(x.q).f.U(D.ft2)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dmY(u))
if(u.ghR()&&D.nd.q(0,u.a.e))u.a2i()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nd.q(0,u.a.e))u.nm(!0)
else u.uB("All 5 words unscrambled!")}else{u.b96()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.m(new C.dmZ())}}else u.rX("Wrong word \u2014 paid for "+u.bh+"/5.")},
b8Z(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dQ,A.dL,A.io,A.tF][u]
w.w=t},
aQu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aR(x.S)
for(s=J.ia(v),s=s.gae(s),r=x.j;s.C();){q=s.gP(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:A.cm),n=p===g;q.C();){m=q.gP(q)
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
b94(){var w,v,u,t,s,r,q,p=this
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
u=C.uz(v,w)
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
p.aQu(s)}else A.d.e0(p.fr,p.d)},
cpO(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.dnC(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dnD(t,v,u))
if(t.ghR()&&D.nd.q(0,t.a.e))t.a2i()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nd.q(0,t.a.e))t.nm(!0)
else t.aB6()}return}t.k1=!0
B.bP(D.bDa,new C.dnE(t),x.c)},
b8s(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dnO(u))
if(u.y1>=5){u.pD()
u.uB("All 5 questions correct!")}else{u.b97()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dnP())}}else u.rX(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dnQ(u))
if(u.y2>=6){u.pD()
u.uB("All 6 math questions correct!")}else{u.b93()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dnR())}}else{u.X6(u.y2+1)
u.rX(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dnS(u))
if(u.bd>=5){u.pD()
u.uB("All 5 color rounds correct!")}else{u.b8Z()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dnT())}}else u.rX("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aB6()}else u.c.J(x.q).f.U(D.ftN)},
cG6(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cj(q.k4,0)
v=A.o.aq(d,3)
u=A.o.F(d,3)
t=A.o.aq(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.do1(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aB6()}}},
RN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dnF(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnG(t,q).$0()
t.c.er()
w=6
return B.b(B.bP(A.kW,null,r),$async$RN)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dnH(t).$0()
t.c.er()
w=7
return B.b(B.bP(A.k4,null,r),$async$RN)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dnI(t))
case 1:return B.h(u,v)}})
return B.i($async$RN,v)},
cG9(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rX("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.do5(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uB("Perfect Simon run!")
return}u.m(new C.do6(u))
u.RN()}},
Es(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Es=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dn_(t))
s=x.H
w=3
return B.b(B.bP(A.jr,null,s),$async$Es)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dn0(t,o).$0()
t.c.er()
w=7
return B.b(B.bP(A.a0U,null,s),$async$Es)
case 7:if(t.c==null){w=1
break}new C.dn1(t).$0()
t.c.er()
w=8
return B.b(B.bP(A.iQ,null,s),$async$Es)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dn2(t))
case 1:return B.h(u,v)}})
return B.i($async$Es,v)},
X6(d){return this.bFy(d)},
bFy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X6)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bHW().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aG("Int","ngmy_game_"+q+"_"+r,o),$async$X6)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X6,v)},
cG3(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rX("Wrong tile \u2014 paid for "+v.aB3()+"/"+C.hjQ()+" moves.")
return}v.m(new C.do_(v,w))
if(v.ghR()&&D.nd.q(0,v.a.e))v.a2i()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nd.q(0,v.a.e))v.nm(!0)
else v.uB("All 7 pattern rounds correct!")}else{v.m(new C.do0(v))
v.Es()}},
K8(d,e){return this.cob(d,e)},
uB(d){return this.K8(null,d)},
aB6(){return this.K8(null,null)},
cob(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dnA(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d9(q,s.c.a,r,A.h8,A.fx,"Game payout: "+s.f,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(p,!0)
t.a.hK(p)
t.a.bu()
o=e==null?"+$"+A.h.ac(r,2)+" added to your balance!":e
s=t.a
C.ve(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,o,"YOU WIN!",!0),$async$K8)
case 3:w=4
return B.b(C.aiI(t.a.f,o),$async$K8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K8,v)},
FR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nd.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cAm(),$async$FR)
case 5:w=1
break
case 4:s=t.AS()
r=t.PB()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acG("Time's up \u2014 no progress to pay."),$async$FR)
case 8:w=1
break
case 7:q=A.h.D(s/r,0,1)
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
RU(d){return this.csB(d)},
a2i(){return this.RU(!1)},
csB(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$RU=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghR()&&D.nd.q(0,r.a.e))||r.a.Q==null){w=1
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
a4=C.uz(a2.d.bd,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.M_(q,r.a.d.bd,!1),$async$RU)
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
return B.b(C.aSM(r.a.d.bd,q,m),$async$RU)
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
nm(d){return this.cAn(d)},
cAm(){return this.nm(!1)},
cAn(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nm=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghR()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.FR(),$async$nm)
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
return B.b(C.M_(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PB()
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
return B.b(t.Fg(m,t.AS(),n),$async$nm)
case 18:case 15:case 11:w=19
return B.b(t.Iy(),$async$nm)
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
return B.b(t.Iy(),$async$nm)
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
t.m(new C.dnU(t,a8,a2))
r=t.a
r.toString
h=A.o.v(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.h.ac(a7,2):d+" ("+b1+"/"+b2+")"
r.hK(new B.d9(h,b0,a9,A.h8,A.fx,d,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.h.ac(a9,2)+" (includes opponent bonus $"+A.h.ac(a7,2)+")":"+$"+A.h.ac(a8,2)+" (your progress payout)"
s=t.a
C.ve(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.FT(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nm)
case 24:w=25
return B.b(t.Iy(),$async$nm)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nm,v)},
Fg(d,e,f){return this.co9(d,e,f)},
co9(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dny(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d9(s,q.c.a,r,A.h8,A.fx,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(p,!0)
t.a.hK(p)
t.a.bu()
if(t.c==null){w=1
break}o=A.h.S(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aj4(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.dnz()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.h.ac(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.h.ac(r,2)+" ("+n+"% of full prize)"
q=t.a
C.ve(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FT(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fg)
case 3:w=4
return B.b(C.aiI(t.a.f,j),$async$Fg)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fg,v)},
c7k(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AS()
v=o.PB()}catch(u){return}if(v<=0||w<=0)return
t=A.h.D(w/v,0,1)
s=B.or(A.h.ac(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.v(1000*Date.now())
p=o.a
r.hK(new B.d9(q,p.c.a,s,A.h8,A.fx,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cx,new B.V(Date.now(),0,!1)))
o.a.bu()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ve(s,n,"Left early \xb7 +$"+A.h.ac(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
acF(d,e){return this.bW_(d,e)},
bW_(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acF=B.e(function(f,g){if(f===1)return B.f(g,v)
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
t.a.hK(new B.d9(r,q,p,A.h8,A.fx,"Game payout: "+s+" (draw, stake returned)",null,null,A.cx,new B.V(o,0,!1)))
t.a.bu()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ve(o,null,"Draw. Your $"+A.h.ac(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,"Nobody won, so your $"+A.h.ac(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acF,v)},
Za(d,e){return this.bW0(d,e)},
acG(d){return this.Za(null,d)},
bW0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Za=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.ve(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,e,"YOU LOSE",!1),$async$Za)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Za,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.aq(m,60)
m=A.a.b1(A.o.v(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.at_,n,n,n,new C.do8(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bH):t.f,n,2,A.a2,n,n,n,A.fG,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asG(new C.do9(o),A.o5,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.n),n,n,n,n,A.ho,n,n,n)],q),A.l,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.d("Win $"+A.h.ac(t.x*1.46,2)+" \xb7 stake $"+A.h.ac(o.a.x,2)+" \u2022 Progress "+o.AS()+"/"+o.PB(),n,n,n,n,n,n,D.fD4,n,n,n),1),new C.arR(o.a.c.a,new C.doa(o),n),A.ae,D.bWc,A.df,B.d(""+w+":"+m,n,n,n,n,n,n,A.o7,n,n,n)],q),A.l,n,A.e,A.i,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a7(A.a5,A.a9,A.x,s,n,n),A.n),n,n,n,n,A.hn,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.dob(),m),m.k("ak.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSn(n,D.bh1,B.bm(!0,new B.D(A.OF,B.x(B.a([r,s,A.P,new B.fh(new C.doc(o),n),A.an,B.E(B.o(n,o.bVZ(),A.f,n,n,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,m,n,n),A.n),n,n,n,n,A.cq,n,n,n),1)],q),A.al,n,A.e,A.i,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a0(242,A.iO.l()>>>16&255,A.iO.l()>>>8&255,A.iO.l()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.A,new B.dn(!1,B.o(n,B.x(B.a([D.fp5,A.af,B.d(o.cT,n,n,n,n,n,n,D.fED,A.K,n,n),A.an,B.d(o.bT,n,n,n,n,n,n,D.fCL,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.n),n,n,n,A.tc,A.z8,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8j(){var w=this.k3
return B.ci(new C.dnx(this,w,A.h.cD(this.fr.length/w)))},
bVZ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8j()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.q_,n,n,n),B.d("Words "+o.bh+"/5",n,n,n,n,n,n,A.Fl,n,n,n),A.af,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.bZ(A.fT,B.iB(o.ay.length,new C.dnf(o),!0,w),A.br,n,6,6),A.aO,B.bZ(A.fT,B.iB(o.ch.length,new C.dng(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iz(D.h52,o.gbL0(),B.fu(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cp,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.aub(m,o.e,new C.dnh(o),new C.dni(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.q_,n,n,n)],x.p)
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
A.d.u(m,new B.N(w,new C.dnj(o),B.T(w).k("N<1,v>")))
return B.x(m,A.l,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.ci(new C.dnk(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.q_,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fl,n,n,n),A.P,B.E(B.l_(1,B.iB(4,new C.dnl(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.ci(new C.dnm(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dQ,A.dL,A.io,A.tF]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.q_,n,n,n)
w=B.d("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fl,n,n,n)
v=o.aL
v===$&&B.c()
s=o.aR
s===$&&B.c()
s=B.a([m,w,A.af,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fu(n,n,B.a0(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fh,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a5(1/0,n,B.iz(B.d(u[q],n,n,n,n,n,n,A.cG,n,n,n),new C.dnn(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bf:A.c9
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.aci,A.K,n,n)
v=B.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fzY,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aD(s,A.bW,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qq(B.ay(A.c1,B.cV(n,B.x(B.a([w,A.P,v,A.b4,s,A.b4,new B.D(A.He,B.d(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.i,0,A.p),p,n,A.b0,n,K.CB,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0B(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.SZ,m)&&o.b_!=null){m=o.a.e
w=o.b_
w.toString
return C.ilO(m,new C.dno(o),new C.dnp(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.anZ.prototype={
T(){return new C.bjT()},
cZH(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjT.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aD(a3,A.dD,a0).w
a0=B.aD(a3,A.dD,a0).w
v=x.p
u=B.a([B.bUD(!1,e.a.r,"INVESTMENT PLANS",d),A.db],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bM(s)),2,"0")
q=A.a.aY(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.Cl,A.r,2.2)
n=x.V
m=B.a([new B.ac(0,A.G,B.a0(89,A.rJ.l()>>>16&255,A.rJ.l()>>>8&255,A.rJ.l()&255),A.eS,20),new B.ac(0,A.G,B.a0(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dn,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.Cl,A.r,3.4)
n=B.a([new B.ac(0,A.G,B.a0(166,A.rJ.l()>>>16&255,A.rJ.l()>>>8&255,A.rJ.l()&255),A.dM,10),new B.ac(0,A.G,B.a0(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cN,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a7(A.az,A.aC,A.x,D.dmp,D.cWS,d),A.n),d,42,d,d,d,d,d,56),A.b4,e.bbf(a3,!0)],v),A.l,d,A.e,A.i,0,d,d)
k=B.Em(t.a,1,A.a2,D.fI0)
j=t.b
i=t.c
h=B.Em("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fIf)
g=B.Em(e.b60(j),1,A.a2,D.fAP)
q=B.A(B.a([B.E(B.x(B.a([D.fYR,B.Em(a1.c,1,A.a2,D.aXK)],v),A.E,d,A.e,A.i,0,A.p),1),B.x(B.a([D.fYC,B.d(r+"/"+q,d,d,d,d,d,d,D.aXK,d,d,d)],v),A.dP,d,A.e,A.i,0,A.p)],v),A.l,d,A.e,A.i,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yx.l()>>>16&255,D.yx.l()>>>8&255,D.yx.l()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atV("INVESTED","$"+B.dG(j),!0),e.atV("DAILY ROI",A.h.ac(i*100,2)+"%",!0),e.atV("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j0,A.i,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h4z,A.rk,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fXe,A.bF,k,A.aw,h,A.aw,g,A.P,q,A.an,r,A.an,i,A.aw,B.Em("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHm)],v),A.E,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cbN,A.n),d,d,d,d,A.bI,d,d,1/0),A.abD],v))}u.push(D.fOJ)
u.push(A.rk)
A.d.u(u,new B.N(a2,new C.drN(e,a3),B.T(a2).k("N<1,v>")))
return B.c5(d,A.L,B.bm(!1,B.cc(B.x(u,A.E,d,A.e,A.i,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbf(d,e){var w=null,v=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.K(A.k0,A.r,1)
return B.o(w,B.A(B.a([B.X(A.a3C,A.c,w,w,w,16),A.df,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.eQ,w,w,w)},
b60(d){var w=A.a.b1(A.o.v(A.h.S(d*100)),4,"0")
return"****  ****  ****  "+A.a.aY(w,w.length-4)},
atV(d,e,f){var w=null,v=B.a0(217,D.yx.l()>>>16&255,D.yx.l()>>>8&255,D.yx.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.Em(e,w,w,B.l(w,w,A.Ci,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cqj(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd3y(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ac(0,A.G,B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.UO,16),new B.ac(0,A.G,B.a0(115,A.am.l()>>>16&255,A.am.l()>>>8&255,A.am.l()&255),A.dn,14),new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cN,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.A,0.5,A.x,d,0,B.a([B.a0(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a0(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a0(A.h.S(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.A,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ac(0.5,A.G,k,A.J,14),new B.ac(0,A.G,j,A.J,6),new B.ac(0,A.G,B.a0(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.r(0,2),4)],p),D.cal,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eFB],h),d),d),A.b4,e.bbf(b2,!0)],h),A.l,d,A.e,A.i,0,d,d)
a6=B.Em(a6,1,A.a2,D.fxd)
i=B.Em(e.b60(a3),1,A.a2,D.fMW)
j=B.A(B.a([e.b5q(A.h.ac(2.86,2)+"%"),A.e3,e.b5q("261d")],h),A.l,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fQ4,B.Em("$"+B.dG(a3),1,A.a2,D.fLF)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.fy3,d,d,d)],h),A.dP,d,A.e,A.i,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.l()>>>16&255,A.bz.l()>>>8&255,A.bz.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBl("Daily","$"+B.dG(a4)),1),A.e3,B.E(e.aBl("Total","$"+B.dG(a4*261)),1),A.e3,B.E(e.aBl("Days","261"),1)],h),A.l,d,A.e,A.i,0,d,d)
g=q?d:new C.drM(e,b3,a3,t)
f=A.h.S(127.5)
f=B.fu(d,d,A.bs,B.a0(f,A.am.l()>>>16&255,A.am.l()>>>8&255,A.am.l()&255),B.a0(f,A.bm.l()>>>16&255,A.bm.l()>>>8&255,A.bm.l()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.m(10),D.b6S),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bF,D.fZA,A.bF,a6,A.cS,i,A.fF,j,A.fF,m,A.fF,k,A.fF,l,A.P,new B.a5(1/0,40,B.iz(new B.du(A.dJ,A.A,A.f,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fyA,d,d,d),d),g,f),d)],h),A.E,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.cco,A.n),d,d,d,A.kB,D.bEZ,d,d,1/0)},
b5q(d){var w=null,v=B.a0(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.d(d,w,w,w,w,w,w,D.fxC,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.zc,w,w,w)},
aBl(d,e){var w=null,v=B.a0(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.K(A.bm,A.r,1)
return B.o(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fHI,w,w,w),A.rl,new B.du(A.dB,A.a5,A.f,B.d(e,w,w,w,w,w,w,D.fKE,w,w,w),w)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.lT,w,w,w)}}
C.ak1.prototype={
T(){var w=null,v=B.a([],x._),u=$.aw()
return new C.azT(v,new B.at(A.ax,u),new B.at(A.ax,u),B.mQ(0,w,w),new B.i6(),D.Ui,C.aiE(),B.a([],x.fw),B.aR(x.N),B.mQ(0,w,w))}}
C.azT.prototype={
Z(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=B.Ai(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.ae6()
r.PY()
r.atw()
r.cDm()
r.cDC()
$.aU.x1$.push(new C.cOq(r))
r.a.toString},
PY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asf(),$async$PY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cNL(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
gaCZ(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPS())return!0
return!1},
gPS(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYK(){var w,v=this.CW
if(v==null)return A.bE
w=v.bz(new B.V(Date.now(),0,!1))
return w.a<0?A.bE:w},
bGl(){var w=this
if(w.a.c.w)return
if(w.gPS()){if(!w.cx)w.m(new C.cNB(w))}else if(w.cx)w.m(new C.cNC(w))},
cwA(){this.m(new C.cNV(this))},
uK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cNS(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cNT(t))
w=1
break}w=3
return B.b(C.chp(o.a,s),$async$uK)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.chq(t.a.c.a,s),$async$uK)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cNU(t,r,q))
t.cFv()
t.bGl()
if(r===3)t.a_g(r)}case 1:return B.h(u,v)}})
return B.i($async$uK,v)},
a_g(d){return this.c8b(d)},
c8b(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHx(q,r,new C.cNN(t),d,s.c.a),$async$a_g)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_g,v)},
yg(d){return this.bHT(d)},
atw(){return this.yg(!1)},
bHT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9z(k,C.hJP(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.chR(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.at7(k),$async$yg)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
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
break}t.m(new C.cND(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Rp(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Rp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PY(),$async$Rp)
case 3:s=t.c
if(s==null){w=1
break}r=B.ed(new C.cNQ(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).cc(r),$async$Rp)
case 4:w=5
return B.b(t.PY(),$async$Rp)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Rp,v)},
cHK(){this.m(new C.cOd(this))},
cDC(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dg(A.pv,new C.cO7(w))},
cFv(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPS()||w.CW==null)return
w.id=B.dg(A.fN,new C.cOa(w))},
cDm(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dg(A.jJ,new C.cO6(w))
w.FZ()},
FZ(){return this.cFu()},
cFu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$FZ)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.W.aP(0,p,null)
if(x.f.b(o)){m=B.E3(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Mc(),$async$FZ)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSm(),$async$FZ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aG("String","app_config",A.W.av(k.aj(),null)),$async$FZ)
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
break}if(i.a!==r.ay)r.m(new C.cO8(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FZ,v)},
b9X(){A.d.b0(this.f,new C.cO5())},
ae6(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ae6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O3(t.a.c.a),$async$ae6)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cJ(q)){A.d.u(s,q)
A.d.b0(s,new C.cNI())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cNJ(t,s))
t.a3e(!0)
B.bP(A.jr,new C.cNK(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$ae6,v)},
ahX(){var w=0,v=B.j(x.H),u=this
var $async$ahX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apO(u.a.c.a,u.f),$async$ahX)
case 2:return B.h(null,v)}})
return B.i($async$ahX,v)},
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
v.m(new C.cNG(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.BY(d,A.ck,A.kW)
else $.aU.x1$.push(new C.cNH(v,d))
if(d===0)v.a3e(!0)
if(d===1)v.cyD(!0)},
a3e(d){$.aU.x1$.push(new C.cNY(this,d))},
aCC(){return this.a3e(!1)},
a2y(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2Q(),$async$a2y)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cNR(t))
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
case 10:q.m(new C.cNZ(q))
w=1
break
case 8:w=11
return B.b(q.uK(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_g(3)
case 6:case 4:q.m(new C.cO_(q,c5))
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
if(b1.length!==0&&q.c!=null)q.m(new C.cO0(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFB("",null)
q.m(new C.cO1(q,p))
C.VJ(q.a.c.a,"ai",p)
q.aCC()
r=[1]
w=14
break}o=B.nl(a9)
a9=q.a
n=""
m=C.hJP(a9.d)
w=C.hJI(c5)?20:21
break
case 20:w=22
return B.b(C.chQ(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9z(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i1E(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bM(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bY(b3)),2,"0")
b5=A.a.b1(A.o.v(B.d7(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fS(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VX(q.a.c.a),$async$nl)
case 25:i=c9
h=C.hsY(i,25)
w=26
return B.b(C.a8W(q.a.c.a),$async$nl)
case 26:g=c9
f=C.huF(g)
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
if(C.hJI(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.ioF(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hWZ(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.rl(o,a2,A.i3,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFB(a8.a,a3.a)
a4=c2
a5=B.hIZ(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.irr(c5),x.an)
a6=a9
J.h2(a6,C.irs(c5))
J.h2(a6,C.irt(c5))
J.h2(a6,B.hIp(c5))
J.h2(a6,C.irw(c5,q.a.c.w))
a8.b=a6}c3=C.iqC(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiX(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cO2(a8,q,a7))
C.VJ(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.KP(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cO3(q))
C.VJ(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cO4(q))
q.aCC()
q.ahX()
if(!q.a.c.w)q.uK()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpc(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpd(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.iZ
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.ckZ(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KP(d){return this.cx7(d)},
cx7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$KP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gP(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aiS(p,o,new C.cNW(t,p)),$async$KP)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HF(p,null,o,!1,!0,t.a.c.a),$async$KP)
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
return B.b(B.HF(p,l.f,o,k,n,j),$async$KP)
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
return B.b(C.b0A(p,B.a([new C.rT("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KP)
case 14:t.atw()
case 13:p=t.c.J(r).f
o=B.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dr,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KP,v)},
T8(d){return this.cFY(d)},
cFY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiS(d,n,new C.cOc(t)),$async$T8)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HF(d,null,n,!1,!0,t.a.c.a),$async$T8)
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
return B.b(B.HF(d,q.f,r,p,n,o),$async$T8)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T8,v)},
cyD(d){$.aU.x1$.push(new C.cNX(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cr,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.al7,D.boh],w):B.a([A.aN,A.ys],w)
v=B.m(22)
u=B.a([new B.ac(0,A.G,B.a0(71,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckL():l
s=B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hhX(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.d("NGMY Helper",l,1,A.a2,l,l,l,A.dm,l,l,l)
s=B.o(l,l,A.f,l,l,D.b8Z,l,8,l,l,l,l,l,8)
if(m.gaCZ()&&m.d===0)q=m.gPS()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.bb,B.E(B.x(B.a([r,A.bF,B.A(B.a([s,A.bn,B.E(B.d(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.h.S(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cE,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aH(l,l,l,l,A.nR,l,l,l,new C.cOi(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a7(A.az,A.aC,A.x,w,l,l),A.n),l,l,l,E.an4,D.bFM,l,l,l)
v=k?D.us:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dO,A.r,1)
u=B.o(l,B.A(B.a([m.bKL(),m.cFH(1,A.lr,"Music")],p),A.l,l,A.e,A.i,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.n),l,l,l,l,A.eC,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaCZ()){v=B.a([],p)
if(m.gPS()){s=B.a0(38,A.dr.l()>>>16&255,A.dr.l()>>>8&255,A.dr.l()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dr.l()>>>16&255,A.dr.l()>>>8&255,A.dr.l()&255),A.r,1)
v.push(new B.D(A.OG,B.o(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i_X(m.gaYK())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fK4,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.n),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPS()){s=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
r=B.m(12)
q=B.m(12)
o=B.X(A.kc,k?A.iB:A.hN,l,l,l,16)
v.push(new B.D(A.OG,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bn,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iB:A.hN,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcwz(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHJ():l
v.push(B.E(new C.asd(s,q,new C.cOj(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.i,0,A.p)}else v=m.bKM(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hvD(r)
t=B.a([w,A.af,new B.D(A.i0,u,l),A.P,B.E(B.hwB(B.a([v,new C.asg(q,o,n,new C.cOk(m,d),s,l)],p),A.t,t,A.y,new C.cOl(m),l),1)],p)
if(m.d===0&&!m.gaCZ()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6H:D.a5Y
w.push(new B.a5(l,36,B.hY(l,new C.cOm(m),v.length,l,l,A.aM,new C.cOn(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.fr
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CK,l,l,l,l,!0,new B.b6(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOo(m),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWv,l,l),1)
s=m.at
r=s?l:m.gczD()
w.push(B.A(B.a([u,new B.JT(v,A.aN,l),A.bn,B.aE(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyq:M.asS,l),A.cU,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cU,l,l,A.aj)],p),A.dP,l,A.e,A.i,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lJ:A.c
t.push(B.uA(A.uh,B.o(l,new B.D(A.CF,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.uh,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.XO(i,new C.cOp(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKL(){var w,v,u,t,s,r,q=null,p=this.d
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
return B.E(B.ay(q,B.cV(q,B.A(B.a([s,A.bn,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNE(this),q,q,q,q,q,q,!1,A.a4),1)},
cFH(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
return B.E(B.ay(q,B.cV(q,B.A(r,A.l,q,A.b9,A.i,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.qL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOb(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKM(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.buR:B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.K(d?A.dq:A.bm,A.r,1)
u=q===0?1:q
return B.o(s,B.ks(!0,s,t.ok,new C.cNF(t,e,d),u,s,A.bT,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.n),s,s,s,A.i0,s,s,s,s)},
aS3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?A.iZ:this.cpd(d),k=m?A.mu:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hhX(this.a.f.Q,28),o),A.ae],j))
w=m?A.dP:A.E
j=B.a([],j)
if(h)j.push(D.eyH)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a_R:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bm,A.r,1)
q=B.a([new B.ac(0,A.G,B.a0(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dM,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.dZ,o,o,o,o,o,o,o,o,12,A.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ab:A.bs
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hdG(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jQ,A.jQ,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,X.wH,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hJ3(l,e,this.gcFX()))
i.push(new B.de(1,A.cl,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.df)
return new B.D(A.da,B.A(i,A.dP,o,k,A.i,0,o,o),o)},
bKK(d,e){return this.aS3(d,e,!1)}}
C.aNf.prototype={
Z(){this.a4()
$.zj().aV(0,this.gFa())},
t(){$.zj().a6(0,this.gFa())
this.a2()}}
C.aNg.prototype={
Z(){this.a4()
$.zj().aV(0,this.gFa())},
t(){$.zj().a6(0,this.gFa())
this.a2()}}
C.aNh.prototype={
Z(){this.a4()
$.zj().aV(0,this.gFa())},
t(){$.zj().a6(0,this.gFa())
this.a2()}}
C.aOe.prototype={
Z(){this.a4()
$.zj().aV(0,this.gFa())},
t(){$.zj().a6(0,this.gFa())
this.a2()}}
C.XD.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apx.prototype={
T(){return new C.aEX()}}
C.aEX.prototype={
Z(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B4(d,e){return this.cLt(d,e)},
cLt(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dIj(q,e))
t=3
w=6
return B.b(d.$0(),$async$B4)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dIk(q))
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
return B.b(B.vi(r,q),$async$Bx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dIa(t,s))
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
u=B.OU(s,B.KZ(B.c4Q(r,q,s,p).f1(),null,"  "))
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
return B.b(t.B4(new C.dI8(t),"Preparing download\u2026"),$async$YU)
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
return B.b(t.B4(new C.dIi(t),"Creating QR code\u2026"),$async$a_t)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_t,v)},
a_s(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ijt(r),$async$a_s)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B4(new C.dI7(t,s),"Looking up code\u2026"),$async$a_s)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_s,v)},
af_(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$af_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xT.cq().N4(A.Th,A.uY,!0),$async$af_)
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
case 6:u=B.HC()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af_,v)},
AI(d,e,f){return this.bN4(d,e,f)},
aTo(d,e){return this.AI(d,!1,e)},
bN3(d){return this.AI(d,!1,!1)},
bN4(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$AI)
case 3:if(t.c==null){w=1
break}if(!C.c4V(d,t.a.c,null)){t.lg(C.c4W(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hWG(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ijG(s,q,t.a.c,d),$async$AI)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m0(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rX(s,p,r,!1,null,null,d.ax),$async$AI)
case 5:if(t.c==null){w=1
break}t.m(new C.dI6(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AI,v)},
aeZ(){var w=0,v=B.j(x.H),u=this
var $async$aeZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B4(new C.dI9(u),"Reading file\u2026"),$async$aeZ)
case 2:return B.h(null,v)}})
return B.i($async$aeZ,v)},
Yb(d){return this.bOo(d)},
bOo(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Yb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d9("local_qr_dep_"+1000*r,q.a,d,A.fS,A.fx,"Admin deposit ($"+B.dG(d)+")",null,null,A.cx,new B.V(Date.now(),0,!1))
C.cjT(t.d,s)
q=t.e
q===$&&B.c()
r=B.B(q,x.o)
r.push(s)
w=3
return B.b(B.rX(t.a.c,t.d,r,!0,null,null,null),$async$Yb)
case 3:w=4
return B.b(t.Bx(),$async$Yb)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+B.dG(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Yb,v)},
b9k(d){var w=null
return B.ce(w,w,!0,w,new C.dIg(),d,w,!0,!0,x.N)},
Xd(d){return this.bGf(d)},
bGf(d){var w=0,v=B.j(x.H),u,t=this,s
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
Fv(d){return this.cua(d)},
cua(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$Fv)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3u(d,t.a.c),$async$Fv)
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
return B.b(t.b9k(r),$async$Fv)
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
return B.b(C.cjM(d,o,n.a,r,p),$async$Fv)
case 7:w=6
return B.b(t.Xd(f),$async$Fv)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fv,v)},
Fw(d){return this.cub(d)},
cub(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bx(),$async$Fw)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjL(d,t.a.c),$async$Fw)
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
return B.b(t.b9k(r),$async$Fw)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Xg(o,n.a,d,r,p),$async$Fw)
case 7:w=6
return B.b(t.Xd(f),$async$Fw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fw,v)},
Qc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DK()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).cc(B.ed(new C.dIb(),!0,null,x.N)),$async$Qc)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B4(new C.dIc(t,r),"Applying deposit\u2026"),$async$Qc)
case 6:w=1
break
case 5:w=7
return B.b(t.B4(new C.dId(t,r),"Loading\u2026"),$async$Qc)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qc,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nz:A.qu,l=n?A.c:A.a_,k=n?A.aR:A.am,j=B.aD(d,A.dD,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.A,B.X(A.eL,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cU,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dIl(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cE,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a25(D.bTA,"Download",A.a6W,u?o:p.gbU0(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a25(A.jv,"Show QR",D.dDh,u?o:p.gc9V(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a25(D.bTB,"Upload",A.a6i,u?o:p.gc9T(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a25(A.jw,"Scan QR",D.daH,u?o:p.gc9U(),o),1)],h),A.l,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc9S()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.m(16)
j=B.a([B.cu(B.a([i,A.aB,w,A.P,v,A.lb,t,A.aB,s,A.aB,new C.bvA(A.tr,"Enter Code",A.a5E,u,o),A.lb,B.o(o,B.A(B.a([B.X(A.hq,A.aV,o,o,o,18),A.at,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.n),o,o,o,o,A.js,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iK:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aE(!1,A.a3,!0,o,new B.D(A.CO,B.A(B.a([H.aVr,A.bb,B.E(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.i,0,o,o),o),A.f,i,8,o,o,o,o,o,A.aj),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a25.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.d(w.d,v,v,v,v,v,v,A.u9,v,v,v)],x.p),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.az,A.aC,A.x,s,v,v),A.n),v,140,v,v,A.bT,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.bvA.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.G,A.d.gal(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.d(w.d,v,v,v,v,v,v,A.u9,v,v,v)],x.p),A.l,v,A.b9,A.i,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a7(A.az,A.aC,A.x,s,v,v),A.n),v,v,v,v,D.bI_,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.a0J.prototype={
T(){return new C.bmk()}}
C.bmk.prototype={
gaz5(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a4()
w.S5()
w.f=B.dg(A.ow,new C.dIp(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a2()},
S5(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vi(q.e,q.f),$async$S5)
case 3:q=e.a
s=B.c4Q(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OU(t.a.e,B.KZ(s.f1(),null,"  ")),$async$S5)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dIm(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S5,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nz:A.qu,s=u?A.iK:A.c,r=u?A.c:A.bq,q=B.eM(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYD,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qg(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gaz5(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aV.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.X(A.fO,A.aV,v,v,v,14),A.bn,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.n),v,v,v,v,A.lR,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dIn(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ac,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.am,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.n),v,v,v,v,A.ac,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bf,v,new C.dIo(d),B.bn(A.aV,v,v,v,v,A.hh,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a0K.prototype={
T(){return new C.bml(B.zX(A.yR,A.of,A.vp))}}
C.bml.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return B.c5(B.eM(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4Y,w,w,w,1,w,!0),A.w,B.zW(this.d,A.bZ,new C.dIq(this,d)),w,!1,!1,w,w)}}
C.ag4.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iK:A.c,j=l?A.c:A.a_,i=l?A.aR:A.am,h=l?A.aT:A.dO,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ac(0,A.G,A.aV.j(0.16),A.kG,36)],x.V)
u=B.o(m,D.bZI,A.f,m,m,new B.n(m,m,m,B.m(18),A.a6V,D.c9E,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nz:A.qu
q=B.m(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rj("Account",A.a.i(this.d),i,j,m),A.T,new C.Rj("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Rj("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Rj("Saved on",""+B.bM(f)+"/"+B.bY(f)+"/"+B.bD(f),i,j,m))
g.push(A.T)
g.push(new C.Rj("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.bT,m,m,1/0)
r=A.as.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.as.j(0.35),A.r,1)
n=B.X(A.tp,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cN(A.Yq,new B.bO(new B.n(k,m,w,e,v,m,A.n),A.bk,new B.D(A.wM,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ae,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bL:A.ic,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.n),m,m,m,m,A.ez,m,m,1/0),A.db,B.A(B.a([B.E(B.dU(A.o9,new C.f94(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.cp,m,new B.ba(B.m(14),A.a1),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.at,B.E(B.bJ(D.fNZ,m,new C.f95(a0),B.bn(A.aV,m,m,m,m,m,A.cp,m,new B.ba(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.i,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rj.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.a_R.prototype={
T(){return new C.aC8(new B.at(A.ax,$.aw()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aC8.prototype={
Z(){this.a4()
$.aU.x1$.push(new C.dhe(this))},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.e.t()
this.a2()},
c9X(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iK:A.c,s=u?A.c:A.a_,r=u?A.aR:A.am,q=u?A.nz:A.qu,p=u?A.aT:A.dO,o=B.m(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ac(0,A.G,A.aV.j(0.18),A.fP,32)],x.V),l=B.o(v,V.atB,A.f,v,v,new B.n(v,v,v,B.m(18),A.a6V,D.ccy,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uX(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bv3(new C.dhb())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cN(A.Mt,new B.bO(new B.n(t,v,n,o,m,v,A.n),A.bk,new B.D(A.wM,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CN,v,v,"",v,!0,new B.b6(4,B.m(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b6Q),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dhc(w),v,!1,v,v,!1,v,!0,v,A.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mB,v,v,v,v),A.e4,B.A(B.a([B.E(B.dU(A.o9,new C.dhd(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.cp,v,new B.ba(B.m(14),A.a1),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.at,B.E(B.bJ(D.fRQ,v,w.gc9W(),B.bn(A.aV,v,v,v,v,v,A.cp,v,new B.ba(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.i,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.OX,v,A.d7,v,v,v)}}
C.aq3.prototype={
T(){return new C.bms(A.cT)},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()}}
C.bms.prototype={
Z(){var w,v=this
v.a4()
w=v.a
w.toString
$.tU=$.tU+1
v.r=A.o.M(A.o.D(C.fT2(w.e,w.d.y2),1,600))
w=v.a
if(!J.lo(w.d.y2,w.e))v.r=C.ip7(v.a.e)
v.w=B.dg(A.fN,new C.dON(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.co3()
C.b2h()
this.a2()},
co3(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.h.D(r.e/w,0,1)
if(v<=0)return
u=B.or(A.h.ac(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.v(1000*Date.now())
s=r.a
w.hK(new B.d9(t,s.c.a,u,A.h8,A.fx,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cx,new B.V(Date.now(),0,!1)))
r.a.bu()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ve(u,q,"Left early \xb7 +$"+A.h.ac(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KZ(d,e){return this.cAi(d,e)},
b8Y(d){return this.KZ(!1,d)},
cAh(d){return this.KZ(d,"")},
cAi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KZ=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.bHt(s,C.bH9(),C.hlW(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KZ)
case 5:w=1
break
case 4:n=B.or(A.h.ac(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dOE(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d9(s,p,n,A.h8,A.fx,q,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiQ(l,!0)
t.a.hK(l)
t.a.bu()
if(m)k="+$"+A.h.ac(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.h.ac(n,2)+" ("+A.h.S(r*100)+"% of the prize)"}q=t.a
C.ve(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bHt(s,C.bH9(),C.hlW(),""+t.e+"/"+t.f,k,q,!0),$async$KZ)
case 6:w=7
return B.b(C.aiI(t.a.f,k),$async$KZ)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KZ,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.c()
w=A.o.aq(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.QG,o,o,o,new C.dOH(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,o,1,A.a2,o,o,o,A.jR,o,o,o),B.d("Win $"+A.h.ac(t.w*1.46,2)+" \xb7 stake $"+A.h.ac(p.a.w,2),o,o,o,o,o,o,D.fCp,o,o,o)],s),A.E,o,A.e,A.i,0,A.p),1)
r=p.a.c.a
n=n<=10?A.ay:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.arR(r,new C.dOI(p),o),A.bn,B.cV(o,B.A(B.a([D.c3A,A.df,B.d(""+w+":"+v,o,o,o,o,o,o,A.iI,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o,o,A.b0,new B.n(n,o,o,q,o,o,A.n),A.a3,o,o,o,o,A.nH,o,o,o)],s),A.l,o,A.e,A.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSn(o,D.bw0,B.bm(!0,B.x(B.a([new B.D(D.bKa,q,o),new C.Ou(w*r,w,v,o),new B.D(E.anx,B.A(B.a([B.E(B.bv(B.m(99),B.kc(A.bw,o,o,9,o,r,new B.mf(A.d.gH(n.r),x.dw)),A.aq),1),A.at,B.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fM5,o,o,o)],s),A.l,o,A.e,A.i,0,o,o),o),B.E(new B.D(A.yZ,B.bv(B.m(22),new B.bO(new B.n(o,o,o,o,o,new B.a7(A.aY,A.b2,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.al_],x.O),o,o),A.n),A.bk,new B.dn(p.x,P.hHy(p.a.e,new P.A3(new C.dOJ(p),new C.dOK(p),new C.dOL(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a89.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.as.j(0.5),A.r,1),t=B.a([new B.ac(0,A.G,A.as.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bXU,A.f,w,w,new B.n(A.as.j(0.16),w,B.K(A.as,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h0I,A.P,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fOL,w,new C.cdU(d),B.bn(A.as,w,w,w,A.w,A.hh,w,w,new B.ba(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.caj,A.n),w,w,w,w,D.bIq,w,w,w),w,w,w,A.a1I,w,A.d7,w,w,w)}}
C.apw.prototype={
T(){return new C.bmi(null,null)},
ga_(d){return this.e}}
C.bmi.prototype={
Z(){var w,v=this,u=null
v.a4()
w=v.d=B.bp(u,A.CA,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dHW(v))
w=B.bp(u,A.mf,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.Ol,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dHX(v))
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
w.bzP()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Ti[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Ti[A.o.F(a9.w,5)]:b0
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
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bd,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ac(0,A.G,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wW(a4+a3),b0,A.A,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
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
if(a9.a.c)a2=D.dgP
else{a2=B.ap(A.c,A.kP,q*0.45)
a2.toString
a2=B.a([a2,A.cf,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ac(0,A.G,A.w.j(0.3),D.euX,16)],e)
if(!a9.a.c)e.push(new B.ac(p*3,A.G,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ac(0,A.G,A.c.j(0.9),A.UO,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bO(new B.n(b0,b0,b0,B.m(d),b0,new B.a7(new B.dd(-1+Math.cos(j)*0.8,-1),new B.dd(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bk,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.d8(A.w.j(0.18),A.dM,5)],x.C)
if(!a9.a.c)d.push(new B.d8(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uL(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jr,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.A,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a7(A.az,A.aC,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.A,b0,A.ad,A.f,f,b0),b0)}}
C.aNN.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.Ou.prototype={
B(d){var w=null,v=new C.cgl(),u=v.$3("STAKE","$"+A.h.ac(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ac(0,A.G,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OG,B.A(B.a([u,B.o(w,B.x(B.a([D.h_l,B.lB(new C.cgk(),w,A.b0,A.n0,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.aut,A.n),w,w,w,w,A.OT,w,w,w),v.$3("FULL WIN","$"+A.h.ac(this.d,2),A.bL)],q),A.l,w,A.e,A.i,0,w,w),w)}}
C.arR.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.jY.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bWk,A.df,C.asG(this.d,A.o7,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.aut,A.n),w,w,w,w,A.P3,w,w,w)},
ge3(){return this.c}}
C.OC.prototype={
T(){return new C.bn2(null,null)}}
C.bn2.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.mf,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAr()},
b2d(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.ivv(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.c6(w,new C.e7A(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akh,B.bm(!0,this.b2d(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.b2d(0,d)},
azU(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.at,B.E(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w)}}
C.aOo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.aeW.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aD(d,A.dD,o).w.r.d,m=this.c,l=J.cE(m),k=l.eO(m,new C.e7D()).gK(0),j=new B.ee(l.dO(m,new C.e7E(),x.cD),x.bG).cC(0,0,new C.e7F())
o=B.aD(d,A.bW,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.anO,B.A(B.a([B.o(p,D.c66,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ac(0,A.G,A.fd.j(0.45),A.J,14)],x.V),D.aum,A.n),p,44,p,p,p,p,p,44),A.bb,D.bMz,B.aH(p,p,p,p,A.lt,p,p,p,new C.e7G(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.i,0,p,p),p)],w)
if(l.gcn(m)){u=C.hgc("GAMES",""+l.gK(m),A.ey)
t=C.hgc("WON",""+k,A.jY)
s=j>=0
r=s?"+":"-"
q=C.bDI(j)
s=s?A.jY:A.eV
v.push(new B.D(D.bGz,B.A(B.a([u,A.ae,t,A.ae,C.hgc("NET",r+q,s)],w),A.l,p,A.e,A.i,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.X(D.bSk,A.c.j(0.35),p,p,p,52),A.af,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.an,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.i,0,A.p),p))
else v.push(new B.de(1,A.cl,B.hY(p,new C.e7H(this),l.gK(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7I(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9G,p,p,p,p,p,p,p,p)}}
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
else if(u)r=A.dy
else{w=v?A.aQ:A.bv
r=w}q=h.gbkM()
w=new C.e7C()
s=B.m(14)
p=B.a([r.j(0.13),D.buK],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.X(g?A.ml:A.cB,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a2,i,i,i,A.u8,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.d(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.n),i,i,i,i,D.bK2,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDI(q)}else{l=g?"+":"-"
l+=C.bDI(h.d)}j=x.p
l=B.A(B.a([n,A.bn,m,k,A.bn,B.d(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.i,0,i,i)
k=C.e7B("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.df,C.e7B("PAID",C.bDI(g?h.d:0),r),A.df,C.e7B("BEFORE",w.$1(h.x),A.ey),A.df,C.e7B("AFTER",w.$1(h.y),A.dy)],j),A.l,i,A.e,A.i,0,i,i)
n=C.iqG(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.an,w,A.aw,B.d(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.i,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a7(A.az,A.aC,A.x,p,i,i),A.n),i,i,i,i,A.k8,i,i,i)}}
C.aCS.prototype={
T(){return new C.biy(A.cT,null,null)}}
C.biy.prototype={
Z(){var w,v,u,t=this
t.a4()
w=B.bp(null,A.n_,null,1,null,t)
w.cK(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afj(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a87,A.tF,A.d3,A.c][w.aw(4)],[A.i2,A.kd,A.e9,A.D4][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzj()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aE(!1,A.a3,!0,w,B.c6(v,new C.dom(this,d),w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)}}
C.afj.prototype={
ga_(d){return this.f}}
C.aNi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.b34.prototype={
B(d){return new B.wp(new C.ciM(this),null,new B.he(B.a([$.zj(),$.a4s()],x.U)),null)},
ge3(){return this.c}}
C.O6.prototype={
chV(){if(this.c!=null)this.m(new C.c6a())}}
C.JF.prototype={}
C.are.prototype={
T(){return new C.aFI(A.cT,new B.at(A.ax,$.aw()))},
cNe(){return this.d.$0()},
cZd(){return this.f.$0()},
cZ1(d,e){return this.r.$2(d,e)},
cZP(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFI.prototype={
t(){var w=this.e
w.V$=$.aw()
w.R$=0
this.a2()},
avC(){var w=B.cR(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avC()
if(s<2){t.azV("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cNe()<s){t.azV("Insufficient balance.")
w=1
break}if(!t.a.cZ1(s,"Dice Roll bet")){t.azV("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.e05(t))}w=3
return B.b(C.cf3(t.a.e),$async$BA)
case 3:r=t.a
q=C.isX(r.e,r.c,t.d)
t.a.cZd()
B.b1F(t.a.e)
t.m(new C.e06(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bP(new B.bf(1000*(40+p*6)),null,r),$async$BA)
case 7:if(t.c==null){w=1
break}new C.e07(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bP(A.k4,null,r),$async$BA)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hkB(q)
t.m(new C.e08(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cZP(m,"Dice Roll "+n,o)
t.m(new C.e09(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.h.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ac(m,2)+" added to your balance"
w=12
return B.b(C.bHt(r,C.bH9(),new C.e0a(t),n,k,"YOU WIN!",!0),$async$BA)
case 12:w=13
return B.b(C.aiI("Dice Roll",l?"+$"+A.h.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ac(m,2)+" added to your balance"),$async$BA)
case 13:w=10
break
case 11:w=14
return B.b(C.bHt(r,C.bH9(),new C.e0b(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BA)
case 14:C.ve(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BA,v)},
azV(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avC(),d=x.w,a0=B.aD(a2,A.dD,d).w,a1=Math.min(B.aD(a2,A.bW,d).w.a.a*0.44,200)
d=B.hu(A.asN,D.h6X,new C.e0e(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b4,B.o(f,B.A(B.a([A.asI,A.bn,C.asG(v.d,A.j4,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.n),f,f,f,f,A.lS,f,f,f)],t),A.l,f,A.e,A.i,0,f,f)
u=g.z
v=B.a0(140,D.a_Y.l()>>>16&255,D.a_Y.l()>>>8&255,D.a_Y.l()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apw(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Ti[q]
o=C.hkB(p)
n=p>0?A.bf:A.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ac(1,A.G,n.j(0.65),A.J,14)],r):A.T5
m=m?18:15
s.push(new B.bz(1,A.be,new B.D(A.jb,B.o(A.A,B.d(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bF(h,h,h,h),new B.be(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.an,B.A(s,A.l,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hkB(v)
s=g.r
s.toString
d.push(new B.D(A.jK,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.bg:A.c_,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.an)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e0f(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a1O,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.m(10),A.a1),f,A.k6,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.m0,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.i,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.d("Perfect Score Profit: +$"+A.h.ac(g.avC()*0.46,2),f,f,f,f,f,f,I.aXl,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.i0,B.x(d,A.al,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gcwR()
s=B.fu(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.m(14),A.a1),f,f,f,f,f)
return C.aSn(f,D.a0b,B.bm(!0,B.x(B.a([new B.D(D.bKv,w,f),new C.Ou(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iz(B.d("\ud83c\udfb2 ROLL ($"+A.h.ac(e,2)+")",f,f,f,f,f,f,A.lA,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.i,0,A.p),1)],t),A.l,f,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arX.prototype={
T(){return new C.aFY(A.l7,new B.at(A.ax,$.aw()))},
cYU(d){return this.e.$1(d)}}
C.aFY.prototype={
gaup(){var w,v=this.r
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
JO(d,e){return this.bNx(d,e)},
bNx(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$JO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fH(new B.fy(d)),$async$JO)
case 2:B.eY()
t=u.c
if(t!=null)t.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$JO,v)},
Rr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gRw().length===0){r.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jo()
o=A.h.ac(r.a.d,2)
q=r.d===A.l7?B.cD("https://cash.app/"+r.gaaM()+"/"+o,0,null):B.cD("bitcoin:"+r.gRw(),0,null)
t=4
w=7
return B.b(B.iQ(q,A.fo,null),$async$Rr)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.l7?r.gaaM():r.gRw()
w=10
return B.b(r.JO(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rr)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.l7?r.gaaM():r.gRw()
w=11
return B.b(r.JO(n,r.d===A.l7?"Cash App tag":"Bitcoin address"),$async$Rr)
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
return B.b(new B.i6().bly(A.eR),$async$a1Y)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a1Y)
case 4:s=e
t.m(new C.e7O(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1Y,v)},
ce8(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.l7?C.hIU(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.l7?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.J(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.J(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cYU(new B.d9(s,w.c.a,w.d,A.fS,v.d,r,v.f,v.gaup(),A.dH,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eM(o,o,o,!0,!0,A.C3,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.Iq,o,o,o,new C.e7P(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fQu,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f0.j(0.25),A.r,1),k=x.V,j=B.a([new B.ac(0,A.G,A.b3.j(0.25),A.eS,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.an,new B.du(A.dB,A.A,A.f,B.d("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fyp,o,o,o),o),A.an,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f0.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cdm,A.n),o,o,o,o,A.ao0,o,o,o)
m=p.c8B()
l=p.aDF(1,"Send the money to NGMY Pay",p.ce6())
w=p.aDF(2,"Put this code in the payment note",p.bM7())
v=p.d===A.l7
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDF(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uI,!0,o,o,o,o,new B.b6(4,B.m(18),D.b6L),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fzW,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.u9,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f0:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bv(B.m(14),new B.cN(D.b8a,new B.Fy(p.f,o),o),A.aq),A.P,D.fiQ,A.aw],i),A.l,o,A.e,A.i,0,A.p):B.x(B.a([B.o(o,D.c5g,A.f,o,o,new B.n(D.f0.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fW2,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.i,0,A.p)
return B.c5(n,A.C3,B.as(new B.cN(A.afB,B.cu(B.a([j,A.bx,m,A.bx,l,w,t,p.bay(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uI,o,s,u,o,o,A.n),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcpX(),o,o,o,o,o,o,!1,A.a4),!0),A.an,B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bO(new B.n(o,o,o,B.m(18),B.a([new B.ac(0,A.G,A.b3.j(0.45),A.dn,18)],k),D.cbU,A.n),A.bk,B.lO(A.atp,D.h67,p.gce7(),B.fu(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHy,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c8B(){var w=null,v=new C.e7K(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.l7,A.hD,"Cash App"),A.e3,v.$3(A.a9U,D.asl,"Bitcoin")],x.p),A.l,w,A.e,A.i,0,w,w),A.f,w,w,new B.n(A.uI,w,t,u,w,w,A.n),w,w,w,w,A.lT,w,w,w)},
bay(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.A,B.d(""+d,v,v,v,v,v,v,D.fFs,v,v,v),A.f,v,v,D.b8U,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f0.j(0.18),v,v,v,v,v,A.wE,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.EW(B.A(B.a([new B.a5(34,v,t,v),A.at,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a16,B.d(e,v,v,v,v,v,v,A.Le,v,v,v),v),f],u),A.al,v,A.e,A.i,0,A.p),v),1)],u),A.al,v,A.e,A.i,0,v,v),v)},
aDF(d,e,f){return this.bay(d,e,f,!1)},
ce6(){var w,v,u,t,s=this,r=null,q=s.d===A.l7?s.gaaM():s.gRw(),p=B.m(20),o=B.m(20),n=s.d===A.l7,m=n?D.caO:D.ccI,l=B.a([new B.ac(0,A.G,(n?A.a_z:D.ZH).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.l7
w=n?A.hD:D.asl
k=B.o(r,B.X(w,n?A.a_z:D.ZH,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.l7
t=u?22:13
v=B.d(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.aw,B.A(B.a([D.c0q,A.df,B.d(s.d===A.l7?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.ro,r,r,r)],u),A.l,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.bb,v,B.aH(r,r,r,r,D.c_o,r,r,r,w?r:new C.e7N(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.i,0,r,r),r,new B.n(r,r,r,o,l,m,A.n),r,A.anr,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcl4(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)},
bM7(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b8.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaup().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b8.j(0.28),A.b8.j(0.08)],u)
p=new B.ax(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.A,B.d(s,o,o,o,o,o,o,A.q4,o,o,o),A.f,o,o,new B.n(o,o,new B.bF(p,p,p,p),new B.be(r,r,r,r),o,new B.a7(A.aY,A.b2,A.x,q,o,o),A.n),o,52,o,A.jb,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.i,0,o,o),A.af,B.A(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ae,B.hu(A.a4E,D.h87,new C.e7J(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.i,0,o,o)],l),A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(A.uI,o,m,n,o,o,A.n),o,o,o,o,A.bI,o,o,o)}}
C.rS.prototype={
aj(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rT.prototype={
aj(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWM(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hsX(w.b))
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
w=J.b9(v.c,new C.chK(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.iq.prototype={
an_(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.iq(v,u,t,s,r,h==null?w.f:h)},
bga(d){var w=null
return this.an_(w,w,w,w,d,w)},
cR6(d,e,f){return this.an_(d,e,null,null,null,f)},
bg9(d){var w=null
return this.an_(w,w,w,d,w,w)},
cQL(d,e){var w=null
return this.an_(w,w,d,w,e,w)},
aj(){var w=this,v=C.iea(w.c),u=w.e,t=B.T(u).k("N<1,ab<q,@>>")
u=B.B(new B.N(u,new C.chI(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bc_.prototype={}
C.WW.prototype={
T(){return new C.aG9(new B.at(A.ax,$.aw()),B.mQ(0,null,null),B.a([],x.m))},
Vi(d){return this.d.$1(d)}}
C.aG9.prototype={
Z(){var w,v=this
v.a4()
w=J.b9(v.a.c,new C.ebU(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ebV())
v.d=w
v.JZ()},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.x.t()
this.a2()},
ag3(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JZ()
u.m(new C.ebO(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.Vi(s),$async$ag3)
case 2:r=e
if(u.c!=null){u.m(new C.ebP(u))
t=u.c.J(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dr:A.ay,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ag3,v)},
aa_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.iq(q,"New Category",A.I0,4284773515,D.aDk,p.length)
t.m(new C.ebx(t,s))
t.JZ()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ce(null,null,!0,null,new C.eby(s),p,null,!0,!0,x.i),$async$aa_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebz(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
a2U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.ebL(t,p))
q.bP(0,A.ch)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.chF(p,q,s),$async$a2U)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.ebM(t,r))
$.aU.x1$.push(new C.ebN(t))
case 1:return B.h(u,v)}})
return B.i($async$a2U,v)},
ac0(d){return this.bSm(d)},
bSm(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ebF(t),r,null,!0,!0,x.i),$async$ac0)
case 2:s=f
if(s!=null)u.m(new C.ebG(u,d,s))
return B.h(null,v)}})
return B.i($async$ac0,v)},
bQ0(d){this.m(new C.ebE(this,d))
this.JZ()},
JZ(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bga(v)},
ciq(d,e){var w={}
w.a=e
this.m(new C.ebK(w,this,d))},
a_8(d){return this.c7x(d)},
c7x(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ed(new C.ebJ(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).cc(t),$async$a_8)
case 2:return B.h(null,v)}})
return B.i($async$a_8,v)},
bId(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fX,A.bs],l):B.a([A.pi,A.eP],l)
w=B.m(16)
v=B.K(m?A.d9.j(0.35):A.dy,A.r,1)
u=B.X(A.e9,m?A.dy:A.dX,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a2Z:U.Pv
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ae,t,B.X(s,m?A.bP:A.am,n,n,n,n)],r),A.l,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ebB(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.us:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.ks(!0,n,o.x,new C.ebC(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afw,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.cq,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.am,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.m(14),A.a1),n,A.eX,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebD(o),n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcx6()
p=B.bn(A.bp,n,n,n,n,n,A.js,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JT(t,A.bp,n),A.df,B.bJ(o.f?A.rj:D.asz,n,m,p)],r),A.dP,n,A.e,A.i,0,n,n))
A.d.u(s,u)}return B.cV(n,B.x(s,A.al,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(n,n,v,w,n,new B.a7(A.a5,A.a9,A.x,l,n,n),A.n),A.iQ,n,n,n,A.Hj,A.bI,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bc_(t),r=t?A.bA:A.cf,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcec()
if(n)n=A.VQ
else n=B.X(A.zA,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eM(B.a([B.hu(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXB(A.aN,u,A.YE,A.oR,D.h4j,v.gbEt())
q=v.bId(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.am,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hj,n,u),B.E(G.hxt(!1,new C.ebT(v,s),m.length,v.gcip(),D.bGl,u,!1),1)],w),A.al,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
C.QH.prototype={
T(){return new C.bdW()}}
C.bdW.prototype={
Z(){var w,v=this
v.a4()
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
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c72,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ac,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cdQ,new C.cXa(t),w),w.k("ak.E"))
w=B.bZ(A.bH,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.ddy,new C.cXb(t),v),v.k("ak.E"))
u=x.p
v=B.cc(B.x(B.a([o,A.af,w,A.af,B.bZ(A.bH,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bN(!1,A.dp,s,s,!0,s,s,s,new C.cXc(d),s,s),B.bJ(A.rp,s,new C.cXd(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1v.prototype={
T(){return new C.aIb()},
pp(d){return this.d.$1(d)}}
C.aIb.prototype={
Z(){this.a4()
this.d=B.bs(this.a.c.e,!0,x.u)},
azX(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.pp(v.bg9(u))},
aa1(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aa1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b4d(new C.iC("q_"+1000*s,"",D.dc_,null,!1,r.length)),$async$aa1)
case 2:t=e
if(t!=null){u.m(new C.f3Z(u,t))
u.azX()}return B.h(null,v)}})
return B.i($async$aa1,v)},
b4d(d){var w,v=this.c
v.toString
w=B.ed(new C.f4_(d),!1,null,x.u)
return B.a6(v,!1).cc(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.cf,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eM(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXB(A.aN,v,A.YE,A.oR,D.hag,w.gbEV())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.am,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hY(v,new C.f44(w,new C.bc_(u)),q,D.bGu,v,A.ah,new C.f45(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1u.prototype={
T(){return new C.aIa()}}
C.aIa.prototype={
Z(){var w,v=this
v.a4()
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
ag2(){var w=0,v=B.j(x.H),u=this,t
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DN(78,1920),$async$ag2)
case 2:t=e
if(t!=null)u.m(new C.f3V(u,t))
return B.h(null,v)}})
return B.i($async$ag2,v)},
ahd(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ed(new C.f3T(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).cc(t),$async$ahd)
case 2:s=e
if(s!=null)u.m(new C.f3U(u,s))
return B.h(null,v)}})
return B.i($async$ahd,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.cf,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eM(B.a([B.db(L.a4N,i,A.rp,new C.f3X(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.at],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.am
w=B.ay(i,B.bv(e,B.aSs(B.m(14),A.bZ,140,A.D5,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gceb(),i,i,i,i,i,i,!1,A.a4)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aL:A.bm,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eO,i,A.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.am,i,i,i,i,i,i,i,i,i,i,i,A.cE,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JT(j.d,i,i)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.n),i,i,i,i,A.eC,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f3Y(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.us:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bZ2,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.n),i,i,i,i,A.bl,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.aw,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.i,0,A.p),1)
return B.c5(d,g,B.cu(B.a([f,A.P,w,A.db,e,A.P,v,A.aO,u,A.P,t,A.aw,s,A.af,B.aE(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.X(A.zw,h?A.bP:A.am,i,i,i,16)],a0),A.l,i,A.e,A.i,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.n),i,i,i,i,A.fu,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gck1(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.aj)],a0),i,i,A.bT,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.de9.prototype={}
C.WX.prototype={
T(){return new C.aGb(B.kb(!0,null,!0,!0,null,null,!1))}}
C.aGb.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dH(q.a.c,new C.ecu())
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
azY(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+A.a.az(v,r,u)+e
s=A.a.ol(v,r,u,t)
this.d.bP(0,new B.bc(s,B.ho(A.bB,r+t.length),A.aP))},
b2f(d){var w,v,u,t,s=this.d
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
break}t.m(new C.eca(t,s))
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
case 4:t.m(new r.ecf(t,e))
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
return B.b(B.ce(null,null,!0,null,new C.ecd(s,r),q,null,!0,!0,x.y),$async$adK)
case 2:if(e===!0)u.m(new C.ece(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adK,v)},
bJa(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ec6(),B.T(p).k("N<1,q>")).c0(0,new C.ec7())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.lT("heading",A.a.i(A.a.aY(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.lT("bullets",new B.N(B.a(s.split("\n"),u),new C.ec8(),t).c0(0,new C.ec9()).aM(0,"\n"),r,r))
else q.push(new C.lT("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.u(q,p)
if(q.length===0)q.push(D.a92)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.de9(n),l=n?A.av:A.hl,k=B.d(p.a.d,o,o,o,o,o,o,A.cG,o,o,o),j=x.p
k=B.eM(B.a([B.db(L.a4N,o,A.acQ,new C.eck(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hM
v=B.bZ(A.bH,B.a([p.wm(A.Pw,"Bold",new C.ecl(p),m),p.wm(A.a30,"Italic",new C.ecm(p),m),p.wm(A.apW,"Underline",new C.ecn(p),m),p.wm(Y.a37,"Heading",new C.eco(p),m),p.wm(A.Px,"Bullets",new C.ecp(p),m),p.wm(A.apV,"Align",new C.ecq(),m),p.wm(A.HH,"Link",p.gc4g(),m),p.wm(A.qR,"Image",p.gc4f(),m),p.wm(N.a3l,"Video",p.gc4h(),m),p.wm(A.a4r,"Signature",new C.ecr(p),m),p.wm(N.Py,"Divider",new C.ecs(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.an,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bj,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,A.aoy,o,o,o)
v=n?A.bA:A.c
u=B.m(12)
t=B.K(n?A.cQ:A.dO,A.r,1)
s=B.a([new B.ac(0,A.G,A.w.j(n?0.35:0.08),A.cN,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iA:A.av,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bT,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eO,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.n),o,o,o,o,Q.CR,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.id(n,B.T(n).k("id<1>"))
j.push(B.o(o,B.bZ(A.bH,n.gdQ(n).dO(0,new C.ect(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OJ,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.m(8),s=B.m(8)
return B.hd(B.aE(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cq,B.X(d,v?A.iA:A.av,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.aj),w,e,w,w)}}
C.dsF.prototype={}
C.aDM.prototype={
a7(){return"_KbView."+this.b}}
C.asd.prototype={
T(){return new C.aGa(D.b29)},
cY5(d,e){return this.e.$2$size(d,e)}}
C.aGa.prototype={
gaCP(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gczk(){var w,v,u,t,s,r=this.gaCP()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ced(d){this.m(new C.ec3(this,d))},
cld(d){this.m(new C.ec4(this,d))},
bHh(){this.m(new C.ebW(this))},
bHj(){this.m(new C.ebX(this))},
gb9Y(){var w=B.bs(this.a.c,!0,x.i)
A.d.b0(w,new C.ec5())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsF(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eP.j(0.55),A.nv.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aL:A.ft).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIq(f)
break
case 1:g=i.gaCP()
g.toString
g=i.bJ8(f,g)
break
case 2:u=i.gaCP()
u.toString
t=i.gczk()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.d(t.b,h,h,h,h,h,h,D.fEs,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.n),h,h,h,h,A.bI,h,h,1/0)
q=g?A.av:A.c
p=B.m(16)
o=B.K(g?A.aL:A.bm,A.r,1)
n=B.a([new B.ac(0,A.G,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.fX:A.pi
l=B.m(8)
k=B.X(A.oH,g?A.dy:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDK(f,i.gbHi(),u.c,s,"Answer",h),B.E(B.cu(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e3,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dy:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.n),h,h,h,A.eg,A.hn,h,h,h),new C.b2C(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.n),h,h,h,h,A.bT,h,h,1/0)],j),h,h,A.ank,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a7(A.aY,A.b2,A.x,e,h,h),A.n),h,h,h,A.i0,h,h,h,h)},
b_i(d){var w,v,u,t=null,s=d.a,r=s?D.us:A.c,q=A.aD.j(0.22)
q=B.a([new B.ac(0,A.G,q,A.J,14),new B.ac(0,A.G,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.ft,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i4(v.cY5(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.an,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dr,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.i,0,A.p)},
bIq(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_i(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_i(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cu(B.a([s,A.aB,v,A.an,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,E.aVx,new C.ebZ(u,d),u.gb9Y().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGv,t,t,A.ah,!1)},
bJ8(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b0(r,new C.ec0())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.am,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.am,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hY(s,new C.ec1(this,r,d,e),t,A.wG,s,A.ah,new C.ec2(),!1)
return B.x(B.a([new C.aDK(d,this.gbHg(),e.c,w,e.b,s),new B.D(A.wI,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.i,0,A.p)}}
C.aDK.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.X(A.eL,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.n),v,v,v,v,A.cq,v,v,v)
return new B.D(D.bJP,B.A(B.a([t,q,A.at,B.E(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,v,v),v)}}
C.adq.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.us:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aL:A.bm,A.r,1),n=B.a([new B.ac(0,A.G,A.w.j(t?0.28:0.06),A.dM,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.an,B.d(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.i,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.n),w,w,w,w,A.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj),w)}}
C.b2C.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fX:A.pi
u=B.m(8)
t=B.X(A.ve,w?A.dy:A.dX,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.df,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dy:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.n),s,s,s,A.cy,A.eQ,s,s,s))}A.d.u(p,J.b9(this.c,new C.chG(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.adh.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bE9,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hA,B.bv(B.m(12),B.aSs(r,A.bZ,160,A.qR,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hA,new C.aDL(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wE,B.aM(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cr:A.bp,r,A.nf,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQF(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iR(v?A.aL:A.bm,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cK,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.am,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.yX,B.x(B.a([u,q,A.aO,t,A.aw,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.am,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cM(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQG(),x.cc),new C.cQH(s),v),v.k("M.E"))
return new B.D(A.k7,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hA,B.iR(s.d.a?A.aL:A.bm,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eI,C.i82(q,s.d),r)}}}
C.aDL.prototype={
T(){return new C.bk6()}}
C.bk6.prototype={
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
break}r.m(new C.dsG(r,q))
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
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.fr
u=B.m(12)
return B.o(A.A,B.X(A.r_,w?A.bP:A.am,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajE(v)
return B.bv(w,new B.fG(u,new B.an(A.A,t,A.ad,A.t,B.a([new B.AL(s,t),B.aH(t,t,t,t,B.X(v.f?A.aq2:A.Pz,A.c,t,t,t,44),t,t,t,new C.dsI(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.at3.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JK.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rY.prototype={}
C.asg.prototype={
T(){var w=null
return new C.aGc(new B.at(A.ax,$.aw()),B.mQ(0,w,w),B.a([],x.m),D.Et,D.aMn,w,w)},
ge3(){return this.d}}
C.aGc.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.nE,null,1,null,v)
w.eU(0,!0)
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
w.bAA()},
gasW(){var w,v,u,t,s=this.x
if(s===D.Eu)return null
s=s===D.Et
w=s?D.a7r:D.a6v
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cA7(d){return this.m(new C.ecI(this,d))},
aCB(){$.aU.x1$.push(new C.ecz(this))},
JP(d){return this.czy(d)},
b2g(){return this.JP(null)},
czy(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$JP=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$JP)
case 3:e=b2
if(!e){w=1
break}B.jX()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.aS(a0,new C.ecB())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hDe(a8)&&a1
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
l=C.hDe(a8)&&!p
q.m(new C.ecC(q,a8))
q.aCB()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.ecD(q))
q.aCB()
w=1
break}t=5
j=B.nl(k)
i=new B.N(a0,new C.ecE(),B.T(a0).k("N<1,q>")).aM(0,"\n\n")
a0=C.isk(m,p,o,q.x,n,q.y,q.gasW(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.rl(j,h,A.i3,null,null),$async$JP)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFB(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.ecF(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.ecG(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.ecH(q))
q.aCB()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JP,v)},
bNf(){return this.JP("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GR:D.bt_,o=x.p
o=B.a([B.x(B.a([B.E(s.cyO(q),1),s.bMs(q)],o),A.l,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNe()
u=B.m(28)
t=B.a([A.aQ,A.as],x.O)
o.push(B.ao(78,B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.eyL,r,new B.n(r,r,r,u,B.a([new B.ac(0,A.G,A.aQ.j(0.45),A.cN,16)],x.V),new B.a7(A.a5,A.a9,A.x,t,r,r),A.n),r,r,r),A.o1,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o1,r,r,A.aj),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cyO(d){var w,v,u,t=this,s=null
if(t.x===D.Eu)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hfa(s,!1,A.L,0,0,w,B.hbq(t.cEF(d),A.YY,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.asn,A.aD.j(0.5),s,s,s,52)
w.push(B.b9b(new B.D(A.eA,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.bZ(A.fT,B.a([t.akr("Full bongo love song ABAB",d),t.akr("Mix: group vs private jet \u2014 which flies?",d),t.akr("Song from John 3:16 + matching verses",d),t.akr("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nE(D.bER,B.Zh(new B.oT(new C.ecA(t,d),u+v,!0,!0,!0,0,B.to(),s)),s))}return B.wa(0,s,A.t,t.e,A.y,s,s,S.afs,s,s,!1,s,A.ah,!1,w)},
cEF(d){var w=this.as
w===$&&B.c()
return B.c6(w,new C.ecP(this,d),null)},
cEH(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.ecR(v),r=A.w.j(d?0.35:0.06),q=B.m(14),p=B.K(A.ba.j(0.35),A.r,1),o=v.gasW()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fe,u,u,u)
w=v.gasW()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ae,w,B.X(v.w?A.Q_:A.tm,A.ba,u,u,u,20)],x.p),A.l,u,A.e,A.i,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.n),u,u,u,u,A.nI,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)},
ay7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b3,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.cr],x.O)
break
case 2:w=B.a([A.bC,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.ecy(this,d)
r=B.m(14)
w=m?new B.a7(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Fe,n,n,n)
if(m)o=A.c
else o=g?A.ab:A.bq
return B.E(B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cV(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.i,0,A.p),n,n,A.b0,new B.n(q,n,n,r,n,w,A.n),A.a3,n,n,n,n,A.k6,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.aj),1)},
cEI(d,e){var w,v,u,t=this,s=null,r=t.x===D.Et?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.ba.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.ecS(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.W8,s,s,s)
return B.aE(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.ho,B.A(B.a([u,A.df,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.aj)},
akr(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,A.acI,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.mZ(w,u,v,w,this.r?w:new C.ecJ(this,d),w,w,w,w)},
bMs(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aoi,B.d("$"+A.h.ac(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Eu?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eO,r,A.hp,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.hQ,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ecv(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ecw(s)
l.push(B.A(B.a([v,new B.JT(w,A.aD,r),B.aE(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.ez0:D.c0z,r,D.b9M,42,r,42),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cU,r,r,A.aj)],m),A.dP,r,A.e,A.i,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.n),r,r,r,A.ta,A.a1a,r,r,r)}}
C.aOw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
C.WY.prototype={
aj(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0f.prototype={
T(){return new C.aDa(null,null)},
bl3(){return this.f.$0()}}
C.aDa.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,D.bDe,u,1,u,v)
w.cs(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,A.nD,u,1,u,v)
w.eU(0,!0)
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
w.bzo()},
cef(){var w=this.d
w===$&&B.c()
w.eI(0).bF(new C.dq0(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aD(d,A.bW,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcee(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.E1(new C.dq1(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ac(2,A.G,A.as.j(0.35),A.J,40),new B.ac(0,A.G,A.aN.j(0.25),A.fP,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c6(new B.he(B.a([r,q],x.U)),new C.dq2(k),j)
r=B.og(A.jV,D.h7r,new C.dq3())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cE,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2h(A.kf,"Resets in 24h"),A.ae,k.b2h(A.oH,"Help Topics ready")],o),A.l,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dU(D.h1x,new C.dq4(k),B.dj(j,j,j,j,j,j,j,j,j,A.ab,j,j,A.kC,j,new B.ba(B.m(14),A.a1),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.at)
k.a.toString
l=B.m(14)
m.push(B.E(B.bJ(D.h7h,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kC,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c6(w,new C.dq5(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.i,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.c9S,A.n),j,j,j,j,T.ao8,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dq6(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aE(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.aj)},
b2h(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.X(d,A.as,w,w,w,13),A.e3,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.ho,w,w,w)}}
C.aNn.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.OT.prototype={}
C.qi.prototype={}
C.asQ.prototype={
T(){return new C.aGz(B.a([],x.E),B.a([],x.s))}}
C.aGz.prototype={
gatk(){return A.h.D(B.M9(this.a.c.a,new C.er9(this)),0,1/0)},
aa7(){var w,v=this,u=v.d,t=v.gatk()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rj(u.a,t,!0,!1)},
Kl(d,e){var w,v,u,t=this,s=t.gatk(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gatk()
if(w<v-0.005)B.hIW(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rj(u.a,w,!0,!1)
B.rj(t.a.c.a,w,!0,!1)
B.Bt(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aU.bZ$.push(o)
w=$.Jx+1
$.Jx=w
if(w===1){w=$.hur
if(w!=null)w.$0()}v=$.hds.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m0(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aS5(u,A.h.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w4(w,u,r,q,s.e,p)}o.d=t}o.Q8()
o.aa7()
$.aU.x1$.push(new C.erQ(o))
o.Q=B.dg(A.ox,new C.erR(o))
o.as=B.dg(A.h1,new C.erS(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i_J()
w.a2()},
cGT(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9i(v,w)){if(C.hdu(p,q.e)){q.m(new C.ery(q,p))
q.yI(!1,!0,!0)}else if(q.c!=null)q.m(new C.erz())
return}if(!C.cjX(v.c?v.bU():v)){q.m(new C.erA(p))
q.b2q(!1)
return}u=p.gD9()
if(u<=0)return
t=w.d2(B.c0(B.bD(w),B.bM(w),B.bY(w),12,0,0,0,0))
s=C.hdv(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.erB())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.erC(r))){q.m(new C.erD(p,w,u))
return}q.m(new C.erE(q,p,u,w))
q.aAC(new B.d9(r,p.a,u,A.h8,A.fx,"Clock-in daily earnings (local)",null,null,A.cx,w))},
jn(d){if(d===A.fV)this.Fq()},
Q8(){var w,v,u,t,s,r,q,p=this.d
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
q=new B.w4(u,t,s,r,v.e,q)
u=q}w.x=u},
T2(d){return this.cFs(d)},
cFs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$T2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Q8()
t.Kl(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$T2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$T2,v)},
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
return B.b(G.Ad(q.w,k,l,j,m,!1,n),$async$Fq)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.ert(q,p))
q.T2(!1)}w=8
return B.b(q.Kx(),$async$Fq)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.aa(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.Kx(),$async$Fq)
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
Ow(d){return this.bGt(d)},
bGs(){return this.Ow(null)},
bGt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Ow=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$Ow)
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
if(l.d===A.fS&&l.x===A.cx&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.era(j,t,i))
q.u(0,p)
r=B.B(q,B.a4(q).k("cj.E"))
t.w=r
w=4
return B.b(B.asS(t.a.c.a,r),$async$Ow)
case 4:t.aA5(!1,!0)
r=t.c
if(r!=null)r.J(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ow,v)},
Kx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kx=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.eru(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.erv(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lG("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kx)
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
j=A.d.bk(r.e,new C.erw(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cx
else a0=J.z(k,2)?A.kK:A.dH
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dH&&h===A.cx&&a3[j].d===A.fS)J.c4(a6,l)
if(i===A.dH&&h===A.kK&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.Kl(g.d+r.e[j].c,!1)
r.aA5(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.erx())
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
return B.b(r.Ow(a6),$async$Kx)
case 13:w=11
break
case 12:w=14
return B.b(r.bGs(),$async$Kx)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Kx,v)},
QW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$QW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.vi(i.a,i),$async$QW)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.ere(t,h))
t.Q8()
t.aa7()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Ad(s[0],p,q,o,r,!0,i),$async$QW)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q8()
t.aa7()
k=C.hdu(n,m)
if(k)t.Kl(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hvh(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q8()
if(t.c==null){w=1
break}t.m(new C.erf(t,n,m,l))
if(i){t.yI(!1,!0,!0)
if(j==="reset"){B.hu0(t.a.c.a)
i=t.c
if(i!=null)B.hu3(i,null)}else if(j==="warn2"){B.hu1(t.a.c.a)
i=t.c
if(i!=null)C.hu4(i)}}else if(k)t.yI(!1,!0,!0)
else t.T2(!1)
case 1:return B.h(u,v)}})
return B.i($async$QW,v)},
yI(d,e,f){return this.coU(d,e,f)},
aA5(d,e){return this.yI(d,!1,e)},
b2q(d){return this.yI(!1,d,!1)},
coU(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rX(r,o,q,!1,t.w,s,p),$async$yI)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.JD(t.w,p,q,s,o,r)
if(f)t.T2(d)
case 1:return B.h(u,v)}})
return B.i($async$yI,v)},
cew(){this.m(new C.ern())
this.aA5(!1,!0)},
agR(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cx&&B.tm(d)){w=r.a
w.f.$1(new B.d9(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjT(q,d)
v=q.d=B.M9(r.a.c.a,new C.erk(r))
r.at=r.a.c.d=v
B.rj(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.erl(r,d))
r.yI(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d9(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dH
if(w&&d.d===A.fS)s=!1
else if(w&&d.d===A.f4){r.Kl(q.d-d.c,!0)
s=!0}else{C.cjT(q,d)
w=d.d
s=w===A.f4||w===A.ks
r.Kl(q.d,s)}r.m(new C.erm(r,d))
w=d.d
r.yI(s,e,w===A.f4||w===A.ks||d.x===A.cx||w===A.h8)},
aAC(d){return this.agR(d,!0,!1)},
b3x(d,e){return this.agR(d,!0,e)},
b3w(d,e){return this.agR(d,e,!1)},
chE(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iuI(u,e,d)){v.mt("This plan is already active.")
return}w=B.hIq(u.a,d,e)
if(C.iqM(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.ero(v))
v.m(new C.erp(v,u,new B.w4(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAC(new B.d9(w,u.a,g,A.ks,A.fx,"Direct investment buy: "+d,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.m(new C.erq(v))
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
return B.b(B.hF(s,new C.apx(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a18)
case 3:w=4
return B.b(t.QW(),$async$a18)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a18,v)},
ahk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.ak1(r,B.a([r],x.d9),A.T6,t.a.d,t.gb3v(),t.gb2p(),null),!1,null,x.X),$async$ahk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahk,v)},
ahi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.anb(r,t.a.d,t.e,t.gb3v(),t.gb2p(),new C.ers(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ahi)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahi,v)},
aev(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aev=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.hdu(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2q(!0),$async$aev)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.m(new C.erg(t))
w=1
break}if(B.lX(r)===6||B.lX(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hvi(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9i(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aSR(q,r))if(!B.aSR(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIx(m.y,l,m.a))}}q=B.hHO(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i1b(r)
q=j.a
t.m(new C.erh(j,r,k))
t.b3w(new B.d9("local_clockin_manual_"+q+"_"+s,j.a,0,A.h8,A.fx,"Clock-in session started (local)",null,null,A.cx,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aev,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nz:A.qu
if(l.d==null)return B.eb(A.la,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fP8
u=u==null?k:u.$0()
u=J.aT(u==null?A.iF:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.an(0,q)||B.tm(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cT(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erI(),B.T(v).k("Y<1>")))
A.d.b0(w,new C.erJ())
v=l.d
v.toString
u=C.igk(l.a.c)
t=l.d
t.toString
t=B.eb(new C.anZ(t,l.a.e,l.z,l.gchD(),l.aXz(),D.hBY),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aDZ(l.aXz(),q,n,o,w,new C.erK(l),l.gcjK(),new C.erL(l),D.hBZ),j,!0)
m=B.aD(d,k,x.w).w
n=l.y
return new B.XO(n,new C.erM(l),B.aE(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aDY(v,u,w,l.gc7z(),new C.erN(l),new C.erO(l),new C.erP(d),l.gckC(),l.gckx(),D.hBX),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bIS(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.aj),k)},
aXz(){var w=null,v=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.A,D.c5q,A.f,w,w,new B.n(w,w,B.K(D.f0.j(0.38),A.r,1),w,B.a([new B.ac(0,A.G,D.f0.j(0.18),A.J,16)],x.V),new B.a7(A.az,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erd(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bIS(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.5),A.eS,24),new B.ac(-2,A.G,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.OJ,B.bm(!0,B.as(new B.cN(D.b82,B.o(w,B.ci(new C.erb(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c9j,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9e(d){var w=null,v=this.y===d,u=D.dgf[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dw(w,!0,w,B.ay(A.c1,B.qq(B.oB(v?B.X(s,D.agO,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.i,0,A.p),A.iQ,B.pV(),A.b0,A.b0,B.LQ())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erj(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aDY.prototype={
c6a(d){return C.hdv(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pK(new B.Y(v,new C.duq(),u),3,u.k("M.E"))
t=B.B(u,B.a4(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9i(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hvi(r)
m=v.gD9()
l=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f0.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ac(0,A.G,D.f0.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.A,B.X(A.hD,D.f0,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a7(A.az,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cU,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.cN,16)],j)
h=B.m(12)
g=x.p
j=B.bUD(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.A,B.o(A.A,D.bYq,A.f,e,e,new B.n(A.iO.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.caU,A.n),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.A,D.c4p,A.f,e,e,new B.n(A.bt,e,B.K(D.ajN,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hxW(A.fN,new C.dur(),k)
k=B.A(B.a([B.E(C.hxV(new C.dus(f,A.rI,n),new B.V(Date.now(),0,!1),h,k),1),A.p6,B.E(new B.wp(new C.dut(f,A.rI),e,new B.he(B.a([$.zj(),$.a4s()],x.U)),e),1)],g),A.l,e,A.e,A.i,0,e,e)
h=f.c9r(A.rI,D.f0)
v=B.E(f.cCX("Total Profit","$"+B.dG(v.e),A.rI),1)
u=u?e:s.b
return B.eb(B.cc(B.x(B.a([j,A.T,k,A.af,new C.aDX(f.d,m,q,p,n,o,D.f0,f.gc69(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.p6,B.E(f.b9T("Total Investment","$"+B.dG(u==null?0:u),A.rI,f.r),1)],g),A.l,e,A.e,A.i,0,e,e),A.T,f.c66(d,t,D.f0,w)],g),A.al,e,A.e,A.i,0,A.p),A.t,e,A.y,e,e,A.a1H,e,e,A.ah),D.ajN,!0)},
aA4(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.dn,18)],x.V)
return B.o(w,B.bv(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bO(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bk,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.c9M,A.n),w,w,w,w,w,w,w,w)},
b2o(d,e,f,g){return this.aA4(d,e,f,A.ag,g)},
bc1(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2o(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFp,B.x(B.a([B.o(w,B.A(B.a([B.X(e,f,w,w,w,15),A.e3,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.n),w,w,w,w,A.aon,w,w,w),A.b4,new B.du(A.dJ,A.a5,A.f,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lC,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9r(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.n),s,D.d_P[w],s,D.bJ4,s,s,s,5))}r=B.o(s,B.A(o,A.dP,s,A.b9,A.i,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h3k,A.bF,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ac(0,A.G,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bn,new B.de(1,A.cl,B.d("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aA4(B.A(B.a([r,D.foU,q,A.ae,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.X(A.nP,e.j(0.95),s,s,s,21),A.rl,B.d("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.i,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.i,0,s,s),e,A.a5,A.a1d,26)},
b9T(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b6d,v,v,A.n),v,v,v,A.nG,v,v,v,5),r=x.p
r=B.a([s,A.bb,B.E(B.x(B.a([B.A(B.a([B.X(u?A.vc:A.zL,t,v,v,v,14),A.e3,new B.de(1,A.cl,B.d(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.i,0,v,v),A.an,new B.du(A.dJ,A.a5,A.f,B.d(e,v,1,v,v,v,v,D.fyg,v,v,v),v)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(W.Ow,B.X(A.eJ,A.c.j(0.35),v,v,v,v),v))
w=this.b2o(new B.a5(v,66,B.A(r,A.l,v,A.e,A.i,0,v,v),v),t,A.lD,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cCX(d,e,f){return this.b9T(d,e,f,null)},
c66(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ac(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.VP,k,A.b4,B.o(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.n),m,m,m,m,A.a1U,m,m,m)],h),A.l,m,A.e,A.i,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a13,B.x(B.a([B.X(A.hq,g,m,m,m,30),A.an,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mC(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.ks
t=u?A.hO:D.f0
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.o(A.A,B.X(u?A.vc:A.x5,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bF(r,r,r,r),new B.be(v,v,v,v),m,new B.a7(A.az,A.aC,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=B.d(C.ioD(j),m,1,A.a2,m,m,m,A.kJ,m,m,m)
q=C.hzy(j.y)
s=B.x(B.a([s,A.bF,B.d(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.d(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.n),m,m,m,m,A.oA,m,m,m)
j=C.hHr(j)
k.push(new B.D(A.OA,new B.c7(A.aM,A.e,A.i,A.l,m,A.p,m,0,B.a([v,A.bb,new B.bz(1,A.be,s,m),B.x(B.a([q,A.cS,B.d(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dP,m,A.e,A.i,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aA4(B.x(i,A.l,m,A.e,A.i,0,A.p),f,A.aY,D.bFA,26)}}
C.aDX.prototype={
T(){return new C.bkQ(null,null)},
cXL(d){return this.z.$1(d)},
cZ4(){return this.Q.$0()}}
C.bkQ.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,A.qH,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,D.bD4,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.qK,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.bb2()},
gbdL(){var w=new B.V(Date.now(),0,!1)
if(B.lX(w)===6||B.lX(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bb2(){var w=this,v=w.a,u=v.e||v.f||w.gbdL()
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
this.bb2()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bzF()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdL()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.duj(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dyT:D.dyR
q=B.K((f?D.pl:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ac(0,A.G,(f?A.aE:A.ba).j(0.16),A.fP,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ad_(D.pl,130),h,h,h,-24,-30,h),B.ao(-36,i.ad_(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ad_(A.ba,120),h,h,h,-30,-36,h),B.ao(-40,i.ad_(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dn(!0,B.bv(l,new B.e6(B.c6(k,new C.duk(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bS(0,new B.dn(!0,B.bv(l,new B.e6(B.c6(k,new C.dul(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cN(D.b89,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ac(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ae,new B.de(1,A.cl,B.d(u,h,1,A.a2,h,h,h,D.fEd,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.n),h,h,h,h,A.hp,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hxW(A.fN,new C.dum(),l)
m.push(C.hxV(new C.dun(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cV(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.n(h,h,q,s,o,new B.a7(A.az,A.aC,A.x,r,h,h),A.n),A.Cz,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ad_(d,e){var w=null
return new B.dn(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.A,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beq.prototype={
b2r(d,e,f,g){var w=new B.aG($.R().r,A.ai,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new B.aZ(v,t))
w.E(new B.cf(v,u,v+f,u))
w.E(new B.cf(v,u,v,u+f))
w.E(new B.cf(v,u,v-f,u))
w.E(new B.cf(v,u,v,t))
w.E(new B.bx())
d.af(w,g)},
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new B.r(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.h.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.h.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.R()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.1+r*0.5).gp(0)
a6.b2r(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.h.F(a7+p/3,1)
$.R()
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
$.R()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=a7.j(g).gp(0)
b2.O(A.J,6.5,e)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.b=A.aa
i.c=1.2
i.r=a9.j(g).gp(0)
b2.O(A.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hNC()
h=i.b
d=h.c
h=h.a.c
i.a3(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2r(b2,o,3+g*3,i)
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
i.y=A.oB
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aE(d){return d.b!==this.b}}
C.bep.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.R(),a4=B.L()
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
v.sam(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.fhn))
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
v=B.bw(D.fhV,A.EY)
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.r=D.aEv[A.o.F(t,6)].j(k*0.9).gp(0)
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
f=D.aEv[A.o.F(t+i,6)].j(k)
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
C.beo.prototype={
a3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
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
p=new B.aG(t,A.ai,e,e,B.a([],q))
p.E(new B.jt(B.bW(a1,a3)))
a4.mz(0,p)
p=B.bW(a1,a3)
o=B.L()
o.sam(D.eGm.aA(0,B.bW(a1,a3)))
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
d.sam(new B.a7(A.aY,A.b2,A.x,a0,e,e).aA(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDZ.prototype={
T(){var w=$.aw()
return new C.aE_(new B.at(A.ax,w),new B.at(A.ax,w))},
bkX(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aE_.prototype={
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
cER(d){this.a.bkX(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.m(new C.duK())},
cDr(){var w,v,u=this,t=B.cR(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hF(w,new C.arX(v.d,t,u.gcEQ(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cLy(){var w,v,u,t,s=this,r=s.d,q=B.cR(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hIU(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bkX(new B.d9("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.l7,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dH,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.ch)
w.bP(0,A.ch)
s.m(new C.duL())},
cIa(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cx||!this.aZw(r)||B.hlO(r))continue
q=r.d
p=q===A.f4||q===A.ks||q===A.eF
q=r.c
if(p)t+=q
else u+=q}return new B.brZ(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cIa(),p=s.a.r,o=new B.Y(p,new C.duM(),B.T(p).k("Y<1>")).gK(0)
p=B.aD(d,A.dD,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f0.j(0.38),A.r,1)
w=B.bUD(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.A,B.X(O.arE,D.f0,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a7(A.az,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bHn(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asT(A.x5,"Deposit",0),s.asT(A.vc,"Withdraw",1),s.asT(A.h4,"History",2)],t),A.l,r,A.r5,A.i,0,r,r)
return B.eb(B.bm(!1,B.cc(B.x(B.a([w,A.bx,u,A.db,v,A.db,B.oB(s.f===2?s.c2Z():s.c8T(),A.ig,B.pV(),A.b0,A.b0,B.LQ())],t),A.al,r,A.e,A.i,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.C3,!0)},
bHn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cj(g,"@")
v=A.a.az(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aY(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCm(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCm(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCm(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bO(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bk,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b4(h,h,h,new C.bdP(h),A.aA),A.f,h,h,new B.n(h,h,h,q,h,D.cc_,A.n),h,28,h,h,h,h,h,38),A.b4,D.hca],p),A.l,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asG(new C.duw(i),D.fJY,i.a.d.a)
m=B.a([B.E(i.aRU(A.qS,"In",d),1),B.E(i.aRU(A.ti,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.je.j(0.6),A.r,1)
m.push(B.o(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fFa,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.n),h,h,h,h,A.oA,h,h,h))}return new B.fG(1.62,B.bv(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFx,u,t,s,r,new B.D(R.td,B.x(B.a([q,A.b4,o,A.bF,new B.du(A.dJ,A.a5,A.f,n,h),A.b4,B.A(m,A.l,h,A.e,A.i,0,h,h),A.an,B.d(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.aq),h)},
aCm(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRU(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bn,new B.de(1,A.cl,new B.du(A.dJ,A.a5,A.f,B.d(e+"  $"+B.dG(f),w,w,w,w,w,w,A.o5,w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w)},
asT(d,e,f){var w=null,v=this.f===f,u=v?D.cdo:new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f0.j(0.25),A.r,1),s=v?B.a([new B.ac(0,A.G,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cV(w,B.X(d,v?D.agO:D.f0,w,w,w,26),w,w,A.ck,new B.n(w,w,t,w,s,u,A.a6),A.Hb,w,62,w,w,w,w,w,62)
return B.ay(A.c1,new B.a5(92,w,B.x(B.a([u,A.aVv,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.duv(this,f),w,w,w,w,w,w,!1,A.a4)},
c8T(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cR(a1.a.a)
if(a2==null)a2=0
w=a0?D.f0:A.cr
v=a2>0
u=new C.duH(e,w)
t=new C.duG()
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
i=B.A(B.a([l,A.at,k,B.o(d,B.A(B.a([B.X(A.hD,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.n),d,d,d,d,A.lo,d,d,d)],h),A.l,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uX(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.ih,l,d),A.df,B.aZi(new B.cN(D.b8s,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eO,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.eb,d,d,d,1,d,d,!1,"\u2022",d,new C.duF(e),d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,D.fMS,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.as(B.cV(d,d,d,d,A.b0,new B.n(d,d,d,B.m(99),d,new B.a7(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.chl:D.cw9
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.an,a1,A.P,q,A.aB,B.A(l,A.l,d,A.e,A.i,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.X(A.hD,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),e.e,d,d,d,d,d,2,B.bA(d,d,d,d,d,d,d,d,!0,new B.b6(4,B.m(16),new B.ax(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b6(4,B.m(16),new B.ax(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ac,d,d,d,d,d,d,d,d,d,d,d,A.ng,!0,A.a7,d,A.ao,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.u(l,B.a([A.af,B.o(d,B.x(B.a([t.$2("Amount","$"+B.dG(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dG(a2*0.15),A.eV),B.iR(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dG(a2*0.85),!0,D.f0)],h),A.l,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(q,d,d,k,d,d,A.n),d,d,d,d,A.hS,d,d,d)],h))}A.d.u(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.Tw:A.a5o
n=B.a([new B.ac(0,A.G,(a0?A.b3:A.dX).j(0.45),A.dn,18)],n)
k=a0?e.gcDq():e.gcLx()
j=B.X(a0?A.a3o:A.lX,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bO(new B.n(d,d,d,q,n,new B.a7(A.a5,A.a9,A.x,l,d,d),A.n),A.bk,B.lO(j,B.d(i,d,d,d,d,d,d,A.m1,d,d,d),k,B.fu(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.i,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a7(A.aY,A.b2,A.x,p,A.xj,d),A.n),d,d,new B.bl("form"+s,x.W),d,A.wJ,d,d,d)},
c2Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.duz(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.duA())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fP8
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iF:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.ipb(a2,B.M9(a0.a.e,new C.duB(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bMw,B.aM(!1,v,!0,B.o(a1,D.fiS,A.f,a1,a1,new B.n(a1,a1,B.K(D.f0.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.lR,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.duC(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.i,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bE1,B.x(B.a([B.X(A.HJ,A.c.j(0.25),a1,a1,a1,40),A.T,D.h8G],q),A.l,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cU(a4,0,B.dA(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gK(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.f4||k===A.ks||k===A.eF
if(l===A.cx)i=j?A.c_:D.f0
else i=l===A.dH?A.je:A.fi
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.o(a1,B.X(j?A.vc:A.x5,i,a1,a1,a1,19),A.f,a1,a1,new B.n(k,a1,new B.bF(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=B.d(a0.bXX(n),a1,a1,a1,a1,a1,a1,A.j4,a1,a1,a1)
e=C.hzy(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bF,B.d(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.d(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kK)f.push(new B.D(A.amK,new B.D7(A.bH,5,4,A.br,B.a([a0.aQO("Before",m.b),a0.aQO("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.d(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hHr(n)
v.push(B.o(a1,new B.c7(A.aM,A.e,A.i,A.l,a1,A.p,a1,0,B.a([k,A.bb,new B.bz(1,A.be,m,a1),A.ae,B.x(B.a([f,A.aw,B.o(a1,B.d(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.zb,a1,a1,a1)],q),A.dP,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bF(A.a1,A.a1,new B.ax(l,1,A.r,-1),A.a1),a1,a1,a1,A.n),a1,a1,a1,a1,A.qL,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hu(D.c2t,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cd,a1,a1,a1),new C.duD(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.n(A.uI,a1,a3,a2,a1,a1,A.n),a1,a1,D.hBA,a1,D.bGq,a1,a1,a1)},
aQO(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zr(B.cS(B.a([s,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fK8,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.n4,w,w,w)},
aZw(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eF)return d.c>0
if(B.tm(d))return!1
if(v===A.fS||v===A.f4)return!0
if(v===A.pb||v===A.ks)return!0
if(v===A.kL)return!0
if(v===A.h8)return A.a.q(w,"clock-in")||d.c>0
return!1},
bXX(d){var w,v=d.f
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
C.bdP.prototype={
a3(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bk6.j(0.55).gp(0)
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
C.bz0.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a3(0,p,s,p+80)
n=[A.ba,A.h9,A.bv][q]
$.R()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.sam(new B.a7(A.aY,A.b2,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aA(0,o))
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
h.r=A.pq.j(0.35*i).gp(0)
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
t=A.pq.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jM(new B.es("z",a0,a0,A.cM,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.bX,new B.ji(1),a0,a0,a0,a0,A.bY,a0,A.cw)
d.ek()
d.a3(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aE(d){return d.b!==this.b}}
C.aND.prototype={
aX(){this.b8()
this.b5()
this.dJ()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdC())
w.ba$=null
w.a2()}}
C.bB_.prototype={}
C.b2f.prototype={}
C.a12.prototype={
T(){return new C.aGn(new B.at(A.ax,$.aw()))},
d_f(d,e){return this.d.$2(d,e)}}
C.aGn.prototype={
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
b2w(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.elN(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.d_f(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aD(a0,A.eU,e).w
e=B.aD(a0,A.dD,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c1P,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ac(0,A.G,A.fd.j(0.5),A.J,18)],v),D.aun,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fWK,A.bF,B.d(g.a.c,f,1,A.a2,f,f,f,A.mD,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aH(f,f,f,f,D.c2I,f,f,f,new C.elQ(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.i,0,f,f)
s=g.b9B(A.eY,"You",A.cr)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.kX,B.o(f,D.h_V,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.ho,f,f,f),f),g.b9B(A.x1,"Your friend",A.c4)],u),A.l,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b7d),f,f,f,f,f,f,f,f,A.Fj,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c5l,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mC,f,f,f,1,f,f,!1,"\u2022",f,new C.elR(g),f,new C.elS(g),f,!1,f,f,!1,f,!0,f,A.ac,f,f,f,f,f,f,f,f,f,f,f,A.jC,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.cr8[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.aum:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.d(j,f,f,f,f,f,f,A.dm,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.be,B.ay(f,B.cV(f,B.x(B.a([i,B.d(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.i,0,A.p),f,f,A.b0,new B.n(p,f,new B.bF(k,k,k,k),new B.be(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fh,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.elT(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ae)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.i,0,f,f)
r=B.A(B.a([B.X(A.l_,A.c.j(0.5),f,f,f,15),A.bn,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.i,0,f,f)
p=B.m(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h3Y,A.an,o,A.aO,D.h8u,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bO(new B.n(f,f,f,p,v,D.cce,A.n),A.bk,B.hu(D.asz,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fG,f,f,f),g.gceS(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b9f,f,f,f,f,D.bHL,f,f,f),f)},
b9B(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.X(d,f,w,w,w,24),A.aw,B.d(e,w,w,w,w,w,w,A.Fk,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,w,w,w,A.fh,w,w,w),1)}}
C.pA.prototype={}
C.btP.prototype={
a3(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(w===0)r=A.bf
else r=(w&1)===0?A.bD:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iM.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fw(s,A.cw,s,s,s,B.cS(s,s,s,s,s,s,s,s,s,A.aY5,B.w(r)),A.a7,A.bX,s,A.dE,A.bY)
u.ek()
r=u.b
t=r.c
r=r.a.c
u.a3(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aE(d){return d.b!=this.b}}
C.Fz.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.atg.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bsX(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hdc("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3P()
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
s.b0B(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKl.h(0,d)
s.c=w==null?"Play to earn":w}},
bew(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.cly(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cIN(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atp(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.clz(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dR(e.h(0,q))
else{o=B.cb(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJK(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atp(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clA(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dR(e.h(0,p))
else{o=B.cb(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bL6(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.atp(e,f)
break}},
cTS(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEw())
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
q=B.B(new B.N(q,new C.clC(),p),p.k("ak.E"))
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
q=B.B(new B.N(q,new C.clD(),p),p.k("ak.E"))
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
aEw(){var w,v,u,t=this
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
atp(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cIN(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJK(d,e){var w,v,u,t,s
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
bL6(d,e){var w,v,u,t,s,r,q
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
return A.a.i(J.k(s==null?u.aEw():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3P(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.clv(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0B(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.ch)},
d31(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
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
return!0}if(r.gks()&&r.z===2){r.bFD(f)
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
bFD(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
d33(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.r8
if(!s.gks()){w=s.d
w=w!=null&&!s.V_("tic_tac_go",w.d)}else w=!1
if(w)return D.r8
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.al7(v))return s.aWa(v,!0)
if(!A.d.q(s.at,""))return s.aWb()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEw())
s.c=s.b04()
return D.r8}if(s.gks()){t=s.cq7(e)
if(t>=0){s.at[t]="O"
if(s.al7("O"))return s.aWa("O",!1)
if(!A.d.q(s.at,""))return s.aWb()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b04()
return D.r8},
b04(){var w=this.d
if(w==null)return"Take your turn"
return this.V_("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aWa(d,e){var w,v,u=this
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
return e?D.r9:D.JJ},
aWb(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Ut},
cq7(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.al7("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.al7("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dgH[u]
if(v[w].length===0)return w}return-1},
al7(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.doZ[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4X(d){return A.d.cC(d,0,new C.clB())},
cNm(d){this.ay.push(1+d.aw(10))
if(this.a4X(this.ay)>21)return!0
return!1},
cNn(d){var w,v,u,t=this
while(t.a4X(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4X(t.ay)
v=t.a4X(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cTd(d,e){var w,v,u,t=this
if(t.e)return D.r8
if(!t.gks()){w=t.d
w=w!=null&&!t.V_("connect_four_pro",w.d)}else w=!1
if(w)return D.r8
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.r8
if(!t.aid(d,w))return D.r8
if(t.aaE(t.fx))return t.aW8(t.fx,!0)
if(t.aRD())return t.aW9()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cpu(e)
if(u>=0){t.aid(u,2)
if(t.aaE(2))return t.aW8(2,!1)
if(t.aRD())return t.aW9()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bJJ()
return D.r8},
bJJ(){var w=this.d
if(w==null)return"Drop a disc"
return this.V_("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aid(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRD(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aW8(d,e){var w,v,u,t=this
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
return e?D.r9:D.JJ},
aW9(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Ut},
cpu(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aid(w,2)
v=r.aaE(2)
r.bce(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aid(w,1)
u=r.aaE(1)
r.bce(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bce(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaE(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJL(w,v,d))return!0}return!1},
bJL(d,e,f){var w,v,u,t,s=new C.clu(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfu(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0B(d)}return w.a>=w.b}}
C.aub.prototype={
T(){return new C.aHb(null,null)},
cZ8(d){return this.e.$1(d)}}
C.aHb.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,D.bD7,null,1,null,v)
w.eU(0,!0)
v.d=w
v.a.d.aV(0,v.gb31())
v.aAo()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.ch)
this.aAo()}},
aAo(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aj4(t,u)
C.aj4(t,u)
w.a.cZ8(s)
w.a.toString
w.m(new C.eTH())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb31())
w=v.d
w===$&&B.c()
w.t()
v.bBb()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aj4(j,i),g=C.aj4(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wZ(new B.d3(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ac(0,A.G,A.aQ.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.a1B,l,l,l,3),l),A.V1,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.es(v,l,l,A.cM,l,l,l,l,l,l,D.fGX))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cE}else if(s===t){r=A.bg
q=A.O}else{r=A.ay
q=A.H}d.push(new B.es(t,l,l,A.cM,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wZ(new B.d3(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.V1,l,l))}p=f===0?0:A.h.S(h/f*100)
k=A.w.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b30("Correct",""+h,A.bf),A.ae,m.b30("Wrong / missed",""+(f-g),A.ay),A.b4,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fyy,l,l,l)],o),A.l,l,A.e,A.i,0,l,l),A.an,D.h13],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.n),l,l,l,l,A.bl,l,l,l)
u=B.E(B.cc(new B.abq(l,B.cS(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b76),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,I.acw,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.i,0,A.p)},
b30(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.n),w,w,w,w,A.ho,w,w,w)}}
C.aP7.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","H(iq,iq)","~([y6?])","Q(re)","re()","H(rS,rS)","Q(rS)","H(rT,rT)","QH(Z)","Q(iq)","cK(afj)","a0K(Z)","a_R(Z)","ag4(Z)","a89(Z)","OC(Z)","aeW(Z,hx<ai<jq>>)","aeV(Z,H)","v(re)","rS(ab<@,@>)","~(Fz,atg)","Ou(Z)","ab<q,@>(rS)","rT(ab<@,@>)","ab<q,@>(kI)","ab<q,@>(rT)","Q(rT)","ab<q,@>(lT)","lT(@)","ab<q,@>(iC)","iC(@)","iq(@)","aA<~>(kI)","ab<q,@>(iq)","~(H,H)","iq(iq)","WW(Z)","aA<Q>(ai<iq>)","a0J(Z)","~(iq)","a1u(Z)","WX(Z)","q(iq)","Q(lT)","xL(bC<H,lT>)","adq(Z,H)","H(iC,iC)","adh(lT)","v(rY)","bz(JK)","a0f(Z)","~(d9{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(d9)","a12(Z)","~(Fz)","q(q)","a1v(Z)"])
C.cCo.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCp(r,w,s.b,v,s.d)
t=s.e
r.b=B.dg(t,u)
v.r=new C.cCl(r)
v.e=new C.cCm(r,w)
v.f=new C.cCn(r,w,t,u)},
$S:0}
C.cCp.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.aa(r)
u=B.cs(r)
s=v
q=u
p=B.Ha(s,q)
if(p==null)p=new B.jU(s,q==null?B.HY(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:42}
C.cCl.prototype={
$0(){this.a.b.a1(0)
return $.HM()},
$S:2086}
C.cCm.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaK.$0()
this.a.b.a1(0)},
$S:0}
C.cCn.prototype={
$0(){var w,v=this,u=v.b,t=B.dx(0,0,u.gbhE(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cCk(w,u,v.d))},
$S:0}
C.cCk.prototype={
$0(){var w=this.c
this.a.b=B.dg(this.b,w)
w.$1(null)},
$S:0}
C.ffE.prototype={
$1(d){var w=this.a
w.m(new C.ffD(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.ffD.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alU,this.b,null,null,v.$ti.k("hx<1>"))},
$S:0}
C.ffG.prototype={
$2(d,e){var w=this.a
w.m(new C.ffB(w,d,e))},
$S:59}
C.ffB.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hx(D.alU,null,this.b,this.c,v.$ti.k("hx<1>"))},
$S:0}
C.ffF.prototype={
$0(){var w=this.a
w.m(new C.ffC(w))},
$S:0}
C.ffC.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hx(A.yN,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fT6.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cx},
$S:15}
C.fSZ.prototype={
$1(d){return d},
$S:13}
C.fzf.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.A,new B.D(new B.P(u,0,u,0),B.d("NGMY",w,1,A.eT,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afL,w,v,w,w,w,w,w,v)},
$S:166}
C.fzc.prototype={
$3(d,e,f){return this.a.$0()},
$S:138}
C.fzd.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kF(w,A.A,v.d,new C.fzb(v.e),A.h2,v.c,!0,v.b,null,null,v.a)},
$S:2087}
C.fzb.prototype={
$3(d,e,f){return this.a.$0()},
$S:138}
C.fze.prototype={
$3(d,e,f){return this.a.$0()},
$S:138}
C.dmr.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dmC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dmU.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmV.prototype={
$1(d){return this.a.Kz()},
$S:12}
C.dmK.prototype={
$0(){var w=J.b9(this.b,new C.dmJ(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmJ.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmL.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmI(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmI.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmN.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmM(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmM.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmF.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgM(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arQ(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dmD(t))
case 3:if(t.c!=null)t.m(new C.dmE(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:46}
C.dmD.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmE.prototype={
$0(){return this.a.d++},
$S:0}
C.dmG.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmH.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmx.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.iwB(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bu()
w=2
return B.b(C.aiU(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kz(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmy.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.ild(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bu()
w=2
return B.b(C.aiU(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kz(),$async$$0)
case 3:t.Ji(A.d.dM(t.y,new C.dmv(s),new C.dmw(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmv.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmw.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmz.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmA.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmB.prototype={
$0(){return this.a.Ji(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dmu.prototype={
$0(){return this.a.c7j(this.b)},
$S:0}
C.dmt.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.ix4(u,w.b,new C.dms(v,w))},
$S:0}
C.dms.prototype={
$2(d,e){return this.a.ajB(this.b,d,e)},
$S:784}
C.dmT.prototype={
$2(d,e){if(d)return
this.a.aVN()},
$S:130}
C.dmR.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b2e(w.a.c.a),new C.dmQ(w,this.b,this.c),null,null,x.gH)},
$S:2089}
C.dmQ.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aE(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.k8,B.bKb(A.d3,B.X(A.h4,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dmP(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.aj)},
$S:2090}
C.dmP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fPn(s.c.a,s.e).eF(new C.dmO())
w=2
return B.b(C.bHs(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmO.prototype={
$1(d){},
$S:32}
C.dmS.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.e0_.prototype={
$0(){var w=this.a
return B.M9(w.a.c.a,new C.e_Z(w))},
$S:86}
C.e_Z.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.e00.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bh=t.aj()
v.bu()
w.m(new C.e_Y())},
$S:0}
C.e_Y.prototype={
$0(){},
$S:0}
C.e01.prototype={
$2(d,e){var w,v=this.a
if(!C.cgM(v.a.c)){if($.hd7.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hd8(this.b,v.x,w)
return!1}C.arQ(v.a.c.a)}if(B.M9(v.a.c.a,new C.e_X(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aK2()
w=v.a
w.toString
w.hK(new B.d9(A.o.v(1000*Date.now()),v.a.c.a,d,A.ks,A.fx,e,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.a.bu()
return!0},
$S:2091}
C.e_X.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.e02.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d9(u,s.c.a,d,A.h8,A.fx,e,v,v,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
w=f>0?"+$"+A.h.ac(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.h.ac(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ve(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2092}
C.dml.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.dmo.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dmp.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.dmq.prototype={
$1(d){var w=null,v=this.a,u=B.fu(w,w,v.e===d?A.bf:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f6,B.iz(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dmn(v,d),u),w),1)},
$S:215}
C.dmn.prototype={
$0(){var w=this.a
return w.m(new C.dmm(w,this.b))},
$S:0}
C.dmm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dod.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dog.prototype={
$1(d){this.a.cqu()
return null},
$S:12}
C.doh.prototype={
$1(d){return this.a.cGU()},
$S:12}
C.doi.prototype={
$1(d){this.a.a42()
return null},
$S:12}
C.doj.prototype={
$1(d){this.a.akH()
return null},
$S:12}
C.dok.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.doe(v))
w=v.as
if(w!=null)w.a1(0)
v.FR()
return}v.m(new C.dof(v))},
$S:12}
C.doe.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dof.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.dnt.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnu.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnX.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dnY.prototype={
$0(){},
$S:0}
C.dnJ.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnK.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dnL.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnM.prototype={
$0(){this.b.c7=!1},
$S:0}
C.dnN.prototype={
$0(){},
$S:0}
C.dmW.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dns.prototype={
$0(){var w=this.a
w.at=this.b
w.b95()},
$S:0}
C.dnZ.prototype={
$0(){},
$S:0}
C.do7.prototype={
$0(){},
$S:0}
C.dnW.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dnV(w))},
$S:0}
C.dnV.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dnq.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dnr.prototype={
$0(){},
$S:0}
C.do2.prototype={
$1(d){return d==null},
$S:247}
C.do3.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.do4.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dmX.prototype={
$1(d){return d==null},
$S:247}
C.dmY.prototype={
$0(){return this.a.bh++},
$S:0}
C.dmZ.prototype={
$0(){},
$S:0}
C.dnC.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dnD.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nd.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dnE.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dnB(w))},
$S:11}
C.dnB.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.dnO.prototype={
$0(){return this.a.y1++},
$S:0}
C.dnP.prototype={
$0(){},
$S:0}
C.dnQ.prototype={
$0(){return this.a.y2++},
$S:0}
C.dnR.prototype={
$0(){},
$S:0}
C.dnS.prototype={
$0(){return this.a.bd++},
$S:0}
C.dnT.prototype={
$0(){},
$S:0}
C.do1.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnF.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnG.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dnH.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnI.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.do5.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.do6.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dn_.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dn0.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dn1.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dn2.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.do_.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.do0.prototype={
$0(){var w,v=this.a;++v.x2
v.aRp()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dnA.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dnU.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dny.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnz.prototype={
$2(d,e){return d+e.length},
$S:204}
C.do8.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.do9.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.doa.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.doc.prototype={
$1(d){var w=this.a,v=w.PB(),u=v<=0?0:A.h.D(w.AS()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ou(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dob.prototype={
$1(d){return d.bW(0.85)},
$S:173}
C.dnx.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nd.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j4,A.K,w,w),A.an,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hO(v,6,6,1,r),new C.dnw(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,A.p)},
$S:167}
C.dnw.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nd.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nd.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.auu:D.c9V,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.auu:D.aun
v=o?B.K(A.dy,A.r,2):s
u=B.a([new B.ac(0,A.G,B.a0(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cV(s,B.as(n?B.X(D.cEV[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.n(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dnv(r,e),s,s,s,s,s,s,s)},
$S:200}
C.dnv.prototype={
$0(){return this.a.cpO(this.b)},
$S:0}
C.dnf.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(89,A.bf.l()>>>16&255,A.bf.l()>>>8&255,A.bf.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aE(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.A,B.d(t?"":u,w,w,w,w,w,w,D.aX1,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dne(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj)},
$S:786}
C.dne.prototype={
$0(){return this.a.cG8(this.b)},
$S:0}
C.dng.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aE(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.A,B.d(u,w,w,w,w,w,w,D.aX1,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnd(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
$S:786}
C.dnd.prototype={
$0(){return this.a.cG7(this.b)},
$S:0}
C.dnh.prototype={
$1(d){return this.a.m(new C.dnc())},
$S:25}
C.dnc.prototype={
$0(){},
$S:0}
C.dni.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aj4(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nd.q(0,u.a.e)){u.a2i()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dna())
t=u.dx
if(t>=v)u.uB("All 5 sentences perfect \u2014 full payout!")
else u.Fg(t/v,t,v)}}else{if(u.ghR()&&D.nd.q(0,u.a.e))u.a2i()
u.m(new C.dnb(u))}},
$S:0}
C.dna.prototype={
$2(d,e){return d+e.length},
$S:204}
C.dnb.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.ch)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnj.prototype={
$1(d){var w=null,v=B.fu(w,w,B.a0(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.cp,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a5(1/0,w,B.iz(B.d(d,w,w,w,w,w,w,O.aWV,w,w,w),new C.dn9(this.a,d),v),w),w)},
$S:154}
C.dn9.prototype={
$0(){return this.a.b8s(this.b)},
$S:0}
C.dnk.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.q_,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hO(3,4,4,1,u),new C.dn8(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.i,0,A.p)},
$S:167}
C.dn8.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6e(e),p=r===0
if(p)w=A.L
else w=q?A.bf:B.a0(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.dn4(s,e)
u=B.m(10)
p=p?"":""+r
return B.aE(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.aj)},
$S:85}
C.dn4.prototype={
$0(){return this.a.cG6(this.b)},
$S:0}
C.dnl.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dn7(q,d)
p=B.m(16)
if(o)w=D.a6A[d]
else{w=D.a6A[d]
w=B.a0(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.a0(A.h.S(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a0(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6A[d]
t=B.a([new B.ac(0,A.G,B.a0(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cV(r,r,r,r,A.b0,new B.n(w,r,u,v,t,r,A.n),K.CB,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2095}
C.dn7.prototype={
$0(){return this.a.cG9(this.b)},
$S:0}
C.dnm.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.q_,t,t,t)
w=B.d("Move "+r.aB3()+"/"+C.hjQ(),t,t,t,t,t,t,A.Fl,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hO(3,6,6,1,s),new C.dn6(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.i,0,A.p)},
$S:167}
C.dn6.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bf:D.bmu,q=u?A.ew:D.bxb
return B.aE(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dn3(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:85}
C.dn3.prototype={
$0(){return this.a.cG3(this.b)},
$S:0}
C.dnn.prototype={
$0(){return this.a.b8s(this.b[this.c])},
$S:0}
C.dno.prototype={
$0(){return this.a.m(new C.dn5())},
$S:0}
C.dn5.prototype={
$0(){},
$S:0}
C.dnp.prototype={
$2(d,e){this.a.a11(d,e)
return null},
$S:z+21}
C.drN.prototype={
$1(d){return this.a.cqj(this.b,d)},
$S:2096}
C.drM.prototype={
$0(){var w=this
return w.a.a.cZH(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOq.prototype={
$1(d){var w=this.a
w.a2y()
w.uK()},
$S:7}
C.cNL.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNB.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNC.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cNV.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNS.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNT.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNU.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNN.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cNM(w))},
$S:0}
C.cNM.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cND.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNQ.prototype={
$1(d){var w=this.a
return new C.WW(w.fx,new C.cNP(w),w.a.f.r,null)},
$S:z+37}
C.cNP.prototype={
$1(d){return this.bob(d)},
bob(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chP(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cNO(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNO.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOd.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cO7.prototype={
$1(d){this.a.uK()
return null},
$S:12}
C.cOa.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.aq(v.gaYK().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uK()
return}v.m(new C.cO9())},
$S:12}
C.cO9.prototype={
$0(){},
$S:0}
C.cO6.prototype={
$1(d){this.a.FZ()
return null},
$S:12}
C.cO8.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cO5.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:41}
C.cNI.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:41}
C.cNJ.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNK.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3e(!0)},
$S:11}
C.cNG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNH.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.V3(this.b)},
$S:7}
C.cNY.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e7,A.kW)},
$S:7}
C.cNR.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cNZ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO_.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b9X()
w.r.bP(0,A.ch)
w.at=!0},
$S:0}
C.cO0.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cO1.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cO2.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b9(w.b,v.gcpb(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.b9X()},
$S:0}
C.cO3.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cO4.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cNW.prototype={
$1(d){return this.boc(d)},
boc(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.asc(q,new C.rS("cal_"+1000*n,m,l,(o==null?p.bR(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atw()
case 4:k.c.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:448}
C.cOc.prototype={
$1(d){return this.bod(d)},
bod(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.J(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:448}
C.cNX.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cOp.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.ad2(v-1)},
$S:0}
C.cOi.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cOl.prototype={
$1(d){var w=this.a
w.m(new C.cOf(w,d))
if(d===0)w.a3e(!0)},
$S:25}
C.cOf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOj.prototype={
$2$size(d,e){return C.hhX(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2097}
C.cOk.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hvD(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.at4(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOg(p),"NGMY Music Studio",r),$async$$0)
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
case 15:p.m(new C.cOh(p))
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
$S:53}
C.cOg.prototype={
$2(d,e){return this.boe(d,e)},
boe(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
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
C.cOh.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOn.prototype={
$2(d,e){return A.ae},
$S:38}
C.cOm.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a6H:D.a5Y)[e],w,w,w,w,w,w,A.q2,w,w,w),t=B.a0(31,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),s=B.a0(89,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255)
v=v.at?w:new C.cOe(v,e)
return B.mZ(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:533}
C.cOe.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6H:D.a5Y
w.r.sb2(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOo.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNE.prototype={
$0(){return this.a.ad2(0)},
$S:0}
C.cOb.prototype={
$0(){return this.a.ad2(this.b)},
$S:0}
C.cNF.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3t,A.f,v,v,new B.n(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.av,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a14,B.x(B.a([u,A.af,s,A.an,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b5,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bKK(t[e],w.c)
return u.aS3(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:43}
C.c4S.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.h.M(d)
return new B.V(B.h3(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bi(J.k(d))
return v==null?null:v.bU()},
$S:319}
C.c4R.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:832}
C.c4U.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bi(J.k(d))
w=w==null?null:w.bU()}return w},
$S:319}
C.c4T.prototype={
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
s=B.a64(A.a7w,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a64(A.a5W,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a64(A.IT,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d9(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:681}
C.dIj.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dIk.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dIa.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dI8.prototype={
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
return B.b(C.hc8(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pB(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIi.prototype={
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
return B.b(B.a6(s,!1).cc(B.ed(new C.dIh(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pB(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIh.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a0J(w.b,w.a,u,v,null)},
$S:z+39}
C.dI7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i11(q)?3:4
break
case 3:w=5
return B.b(t.a.Fv(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_M(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c4W(s.a.c))
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
return B.b(s.aTo(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dI6.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dI9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.af_(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hso(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c4V(s,r.a.c,null)){r.lg(C.c4W(r.a.c))
w=1
break}w=4
return B.b(r.bN3(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIg.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.aw()),u=B.O(d).ax.a===A.I,t=u?A.iK:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ab:A.am,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.m(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.E,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bN(!1,A.dp,w,w,!0,w,w,w,new C.dIe(d),w,w),B.bJ(D.fQ7,w,new C.dIf(d,v),B.bn(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h4i,w)},
$S:18}
C.dIe.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIf.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dIb.prototype={
$1(d){return D.hJ5},
$S:z+12}
C.dIc.prototype={
$0(){return this.a.Fw(A.a.i(this.b))},
$S:1}
C.dId.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_M(t.b,r.a.c),$async$$0)
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
case 7:r.lg(C.c4W(r.a.c))
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
return B.b(r.aTo(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIl.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIp.prototype={
$1(d){this.a.S5()
return null},
$S:12}
C.dIm.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dIn.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fy(v.gaz5()))
this.b.J(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.d("Code "+v.gaz5()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dIo.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIq.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.X(s,"NGMYSNAP1|")||A.a.X(s,"NGMYLOCALSYNC1|")||A.a.X(s,"NGMYLOCALLIVE1|")||A.a.X(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:162}
C.fDR.prototype={
$1(d){return D.hFv},
$S:z+13}
C.fF3.prototype={
$1(d){return new C.ag4(this.a,this.b,this.c,null)},
$S:z+14}
C.f94.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f95.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dhb.prototype={
$2(d,e){return e.amW(e.a.toUpperCase())},
$S:2098}
C.dhc.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dhd.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5E.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dy0,A.a.gjP(v))},
$S:4}
C.fPh.prototype={
$1(d){return d.a===this.a},
$S:2099}
C.fPi.prototype={
$0(){return A.d.gH(A.E_)},
$S:2100}
C.dON.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dOM(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b8Y("Time's up")},
$S:12}
C.dOM.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dOE.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOJ.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dOG(w,d,e))},
$S:222}
C.dOG.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOK.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dOF(w))
w.cAh(!0)},
$S:0}
C.dOF.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOL.prototype={
$1(d){this.a.b8Y(d)
return null},
$S:2}
C.dOH.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOI.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.cdV.prototype={
$1(d){return D.dVN},
$S:z+15}
C.cdU.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fFT.prototype={
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
C.fFU.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.h.M(w)
return w==null?0:w},
$S:516}
C.fFV.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:204}
C.fWB.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hEi(w,v):C.hii(w,v)
if(u===3)++w.f
C.ahB(w,this.c,u)
return u},
$S:2102}
C.fWD.prototype={
$0(){return C.hEi(this.a,this.b)},
$S:98}
C.fWC.prototype={
$0(){return C.hii(this.a,this.b)},
$S:98}
C.dHW.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dHV(w))},
$S:0}
C.dHV.prototype={
$0(){this.a.r=1+A.o.F(B.FU(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dHX.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.h.bf(u*10)
if(w!==v.w)v.m(new C.dHU(v,w))}},
$S:0}
C.dHU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgl.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,new B.du(A.dB,A.A,A.f,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.i,0,A.p),1)},
$S:2103}
C.cgk.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.h.ac(e,2),w,w,w,w,w,w,A.mD,w,w,w)},
$S:403}
C.cgN.prototype={
$1(d){return new C.OC(this.a,this.b,!1,null,null)},
$S:z+16}
C.e7A.prototype={
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
o.push(B.o(g,D.bZy,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ac(0,A.G,A.b8.j(0.55),A.cz,18)],n),A.vk,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.og(A.jV,D.h1O,new C.e7w()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cE,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c_.j(0.12)
k=B.m(18)
j=B.K(A.c_.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.X(D.bTv,A.c_.j(0.95),g,g,g,20),A.ae,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c_.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.i,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e7x(),B.T(m).k("N<1,v>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.n),g,g,g,g,A.bI,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.m(18)
k=B.K(A.b8.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azU(A.hq,"Unlimited games with an active plan",A.ba),A.P,f.azU(A.kf,"Weekday check-ins grow your balance",A.b8),A.P,f.azU(A.ml,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.i,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.n),g,g,g,g,A.bI,g,g,1/0))
o.push(A.db)
o.push(new B.a5(1/0,g,new B.bO(new B.n(g,g,g,B.m(16),B.a([new B.ac(0,A.G,A.bC.j(0.45),A.cz,16)],n),A.vk,A.n),A.bk,B.db(D.c24,g,D.fYa,new C.e7y(f,a0),B.bn(A.L,g,g,g,A.c,A.KR,g,A.L,new B.ba(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bN(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e7z(f,a0),g,g))
if(f.a.e)o.push(A.b4)
h=B.o(g,B.bv(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.ccR,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,Z.a1y,g,A.d7,g,g,g)},
$S:741}
C.e7w.prototype={
$1(d){return D.cbL.aA(0,d)},
$S:77}
C.e7x.prototype={
$1(d){var w=null
return new B.D(A.eI,B.A(B.a([B.X(A.a3w,A.c_.j(0.85),w,w,w,14),A.ae,B.E(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$S:154}
C.e7y.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e7z.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fRF.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:530}
C.fRs.prototype={
$1(d){$.aU.x1$.push(new C.fRr(this.a))},
$S:7}
C.fRr.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fCa.prototype={
$1(d){return C.hEq(this.a,this.b+1)},
$S:7}
C.fT1.prototype={
$2(d,e){var w=B.aD(d,A.bW,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:146}
C.ch0.prototype={
$1(d){return d.r===this.a},
$S:271}
C.ch1.prototype={
$1(d){var w=$.aTS(),v=w.a
w.sp(0,v+1)
return v},
$S:2104}
C.ch2.prototype={
$1(d){},
$S:32}
C.ch_.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:271}
C.cgZ.prototype={
$1(d){return d.f.cb(this.a)},
$S:271}
C.fyV.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.h4O.prototype={
$1(d){return C.a8O(this.a)},
$S:111}
C.h4P.prototype={
$1(d){var w=$.aTS()
w.sp(0,w.a+1)},
$S:29}
C.h4Q.prototype={
$1(d){},
$S:32}
C.h4R.prototype={
$1(d){return new B.kj($.aTS(),new C.h4N(this.a,this.b),null,null,x.am)},
$S:2105}
C.h4N.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arW(this.a,!1),new C.h4M(w),w,null,x.gv)},
$S:2106}
C.h4M.prototype={
$2(d,e){var w=e.b
return new C.aeW(w==null?this.a:w,null)},
$S:z+17}
C.e7D.prototype={
$1(d){return d.c},
$S:271}
C.e7E.prototype={
$1(d){return d.gbkM()},
$S:2107}
C.e7F.prototype={
$2(d,e){return d+e},
$S:81}
C.e7G.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7I.prototype={
$2(d,e){return A.P},
$S:38}
C.e7H.prototype={
$2(d,e){return new C.aeV(J.t(this.a.c,e),null)},
$S:z+18}
C.e7C.prototype={
$1(d){return d==null?"\u2026":C.bDI(d)},
$S:2108}
C.h4U.prototype={
$3(d,e,f){var w=this
return B.qq(new C.aCS(w.a,w.b,w.c,w.d,new C.h4S(d,w.e),new C.h4T(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.h4S.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hHP(this.b)},
$S:0}
C.h4T.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hHP(this.b)},
$S:0}
C.dom.prototype={
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
A.d.u(w,new B.N(t,new C.dol(),B.T(t).k("N<1,v>")))}t=h.d
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
m=B.a([new B.ac(6,A.G,(h.a.c?A.dL:A.dQ).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.ds()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.ajY,A.uv],r)
l.push(new B.a5(i,100,new B.an(A.A,i,A.ad,A.f,B.a([B.fA(A.A,B.o(i,D.bfz,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ac(4,A.G,A.d3.j(0.6),A.J,24),new B.ac(0,A.G,A.w.j(0.3),A.dn,12)],n),new B.bT(A.A,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5A)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.WC,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fRV,A.P,B.o(i,B.d(r,i,i,i,i,i,i,D.fHH,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.n),i,i,i,i,A.Oz,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.d(h.a.e,i,i,i,i,i,i,D.fKI,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dU(D.fPl,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cp,i,i,D.b6N,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.at,B.E(B.bJ(E.aYp,i,n,B.bn(A.c,i,i,i,h.c?A.ep:A.er,i,A.cp,i,i,i,i,i)),1)],g),A.l,i,A.e,A.i,0,i,i))
w.push(B.e1(A.A,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a7(A.az,A.aC,A.x,q,i,i),A.n),i,i,i,A.ac,A.ao7,i,i,s),1+t*0.02,i,i))
return new B.an(A.A,i,A.ad,A.f,w,i)},
$S:121}
C.dol.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.A,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.ciM.prototype={
$2(d,e){var w=null,v=this.a,u=C.i0r(B.M9(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2109}
C.ciL.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.c6a.prototype={
$0(){},
$S:0}
C.fxR.prototype={
$1(d){return A.o.v(d)},
$S:82}
C.e05.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e06.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e07.prototype={
$0(){var w=this.a
return w.w=D.Ti[w.d.aw(5)]},
$S:0}
C.e08.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e09.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e0a.prototype={
$0(){var w=this.a
return w.m(new C.e04(w))},
$S:0}
C.e04.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0b.prototype={
$0(){var w=this.a
return w.m(new C.e03(w))},
$S:0}
C.e03.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0e.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e0f.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bf:B.a0(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.e0d(t,d)
w=B.m(10)
v=A.h.ac(d,0)
return B.E(new B.D(A.jb,B.aE(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.aj),u),1)},
$S:2110}
C.e0d.prototype={
$0(){var w=this.a
return w.m(new C.e0c(w,this.b))},
$S:0}
C.e0c.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.ch)},
$S:0}
C.e7O.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cL.gco().aK(this.c)},
$S:0}
C.e7P.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7K.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f0.j(0.5):A.L,A.r,1),q=B.X(e,u?D.f0:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cV(w,B.A(B.a([q,A.bn,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.i,0,w,w),w,w,A.b0,new B.n(s,w,r,t,w,w,A.n),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7M(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2111}
C.e7M.prototype={
$0(){var w=this.a
return w.m(new C.e7L(w,this.b))},
$S:0}
C.e7L.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7N.prototype={
$0(){var w=this.a,v=w.d===A.l7?"Cash App tag":"Bitcoin address"
return w.JO(this.b,v)},
$S:0}
C.e7J.prototype={
$0(){var w=this.a
return w.JO(w.gaup(),"Code")},
$S:0}
C.chz.prototype={
$1(d){return C.hXD(B.a1(d,x.N,x.z))},
$S:z+20}
C.chA.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chw.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chx.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chy.prototype={
$1(d){return d.aj()},
$S:z+23}
C.chB.prototype={
$1(d){var w=d.c
return!w.d2(this.a.bR(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c9i.prototype={
$1(d){return C.hXE(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9j.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9g.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c9h.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9l.prototype={
$1(d){var w=d.b
return!w.d2(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chK.prototype={
$1(d){return d.aj()},
$S:z+28}
C.chJ.prototype={
$1(d){return C.huI(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chI.prototype={
$1(d){return d.aj()},
$S:z+30}
C.chH.prototype={
$1(d){return C.i04(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chM.prototype={
$1(d){return C.i03(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chN.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chO.prototype={
$1(d){return d.aj()},
$S:z+34}
C.ebU.prototype={
$1(d){return d.bg9(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ebV.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ebP.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ebx.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.I(w,this.b)},
$S:0}
C.eby.prototype={
$1(d){return new C.QH(this.a,null)},
$S:z+9}
C.ebz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bk(t,new C.ebw(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JZ()}},
$S:0}
C.ebw.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebL.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebM.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.ir4(v,w[0],w[3])
t.JZ()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ebN.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebF.prototype={
$1(d){return new C.QH(this.a,null)},
$S:z+9}
C.ebG.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebE.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.ebK.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JZ()},
$S:0}
C.ebJ.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a1v(u[w],new C.ebI(v,w),null)},
$S:z+59}
C.ebI.prototype={
$1(d){var w=this.a
return w.m(new C.ebH(w,this.b,d))},
$S:z+40}
C.ebH.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebB.prototype={
$0(){var w=this.a
return w.m(new C.ebA(w))},
$S:0}
C.ebA.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ebC.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eI,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cE,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:127}
C.ebD.prototype={
$1(d){return this.a.a2U()},
$S:2}
C.ebT.prototype={
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
q=B.o(n,B.X(A.aqW,l?A.bP:A.am,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.n),n,n,n,n,A.hC,n,n,n)
r=B.A(B.a([o,A.at,B.E(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.da,B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awL(q,e,!0,n),n,n,n,n,new C.ebQ(m,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.am,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CJ(n,n,n,n,n,new C.ebR(),A.J,new C.ebS(m,e),A.cq,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.aj),new B.bl(w.a,x.W))},
$S:127}
C.ebS.prototype={
$1(d){var w=this
if(d==="edit")w.a.ac0(w.b)
if(d==="questions")w.a.a_8(w.b)
if(d==="delete")w.a.bQ0(w.b)},
$S:2}
C.ebR.prototype={
$1(d){return D.d5F},
$S:141}
C.ebQ.prototype={
$0(){return this.a.a_8(this.b)},
$S:0}
C.cXa.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.n),s,s,s,s,A.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cX9(r,d),s,s,s,s,s,s,s)},
$S:2112}
C.cX9.prototype={
$0(){var w=this.a
return w.m(new C.cX7(w,this.b))},
$S:0}
C.cX7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXb.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.ay(w,B.hg(u,w,t===d?D.c2S:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cX8(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:421}
C.cX8.prototype={
$0(){var w=this.a
return w.m(new C.cX6(w,this.b))},
$S:0}
C.cX6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXc.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cXd.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cR6(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f3Z.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.f4_.prototype={
$1(d){return new C.a1u(this.a,null)},
$S:z+41}
C.f45.prototype={
$2(d,e){return A.P},
$S:38}
C.f44.prototype={
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
r=B.bv(q,B.aSs(n,A.bZ,36,A.qR,l?A.bP:A.am,r,48),A.aq)}else r=B.X(D.a3g,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aE(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f42(m,w,e),!1,n,n,new B.ba(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.am,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c17,n,n,n,new C.f43(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.aj)},
$S:85}
C.f43.prototype={
$0(){var w=this.a
w.m(new C.f40(w,this.b))
w.azX()},
$S:0}
C.f40.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cH(w,this.b)},
$S:0}
C.f42.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4d(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f41(t,u.c,s))
t.azX()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f41.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f3V.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f3T.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.WX(w,"Answer Document",null)},
$S:z+42}
C.f3U.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f3X.prototype={
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
C.f3Y.prototype={
$1(d){var w=this.a
return w.m(new C.f3W(w,d))},
$S:9}
C.f3W.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chE.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fTB.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ecu.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.eca.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lT("image","",this.b,null))},
$S:0}
C.ecf.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,new C.lT("video","","data:video/mp4;base64,"+A.cL.gco().aK(this.b),null))},
$S:0}
C.ecd.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7t,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7s,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bN(!1,A.dp,w,w,!0,w,w,w,new C.ecb(d),w,w),B.bJ(D.h1g,w,new C.ecc(d),w)],v),w,w,w,u,w,w,w,w,D.fOy,w)},
$S:18}
C.ecb.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ecc.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ece.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lT("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ec6.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ec7.prototype={
$1(d){return d.length!==0},
$S:3}
C.ec8.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ec9.prototype={
$1(d){return d.length!==0},
$S:3}
C.eck.prototype={
$0(){var w=this.a.bJa()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ecl.prototype={
$0(){return this.a.azY("**","**")},
$S:0}
C.ecm.prototype={
$0(){return this.a.azY("*","*")},
$S:0}
C.ecn.prototype={
$0(){return this.a.azY("__","__")},
$S:0}
C.eco.prototype={
$0(){return this.a.b2f("## Section title")},
$S:0}
C.ecp.prototype={
$0(){return this.a.b2f("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ecq.prototype={
$0(){},
$S:0}
C.ecr.prototype={
$0(){var w=this.a
w.m(new C.ecj(w))},
$S:0}
C.ecj.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZl)},
$S:0}
C.ecs.prototype={
$0(){var w=this.a
w.m(new C.eci(w))},
$S:0}
C.eci.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.I(w,D.dZm)},
$S:0}
C.ect.prototype={
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
return B.Ee(v,w,A.atg,t,v,new C.ech(this.a,d),v)},
$S:z+45}
C.ech.prototype={
$0(){var w=this.a
return w.m(new C.ecg(w,this.b))},
$S:0}
C.ecg.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cH(w,this.b.a)},
$S:0}
C.ec3.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2a},
$S:0}
C.ec4.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hGz},
$S:0}
C.ebW.prototype={
$0(){var w=this.a
w.d=D.b29
w.f=w.e=null},
$S:0}
C.ebX.prototype={
$0(){var w=this.a
w.d=D.b2a
w.f=null},
$S:0}
C.ec5.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ebZ.prototype={
$2(d,e){var w=this.a,v=w.gb9Y()[e]
return new C.adq(v,this.b,new C.ebY(w,v),null)},
$S:z+46}
C.ebY.prototype={
$0(){return this.a.ced(this.b.a)},
$S:0}
C.ec0.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ec2.prototype={
$2(d,e){return A.T},
$S:38}
C.ec1.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.us:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aL:A.bm,A.r,1),l=B.a([new B.ac(0,A.G,A.w.j(r?0.28:0.06),A.dM,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bv(w,B.aSs(v,A.bZ,52,D.a3g,r?A.bP:A.am,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.X(D.a3g,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bb)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eJ,r?A.bP:A.am,t,t,t,22))
return B.aE(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ec_(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.aj)},
$S:85}
C.ec_.prototype={
$0(){return this.a.cld(this.b)},
$S:0}
C.chG.prototype={
$1(d){return new C.adh(d,this.a,null)},
$S:z+48}
C.cQF.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oj(v==null?w.b:v)
if(u!=null)B.iQ(u,A.fo,null)},
$S:0}
C.cQG.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQH.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nF,B.A(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:154}
C.dsG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsI.prototype={
$0(){return this.a.m(new C.dsH(this.b))},
$S:0}
C.dsH.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fxz.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecI.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Et)w.z=v
else w.Q=v},
$S:0}
C.ecz.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.ck,A.eW)},
$S:7}
C.ecB.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:105}
C.ecC.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.ch)
w.r=!0},
$S:0}
C.ecD.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecE.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:158}
C.ecF.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ecG.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ecH.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ecA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n0(l,A.bC.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bT,B.A(B.a([new B.a5(22,22,k,l),A.at,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.dZ,l,l,l,l,l,l,l,l,12,A.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.i,0,l,l),l)}w=k.f[e]
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
$S:43}
C.ecP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.ai9,A.a_,A.om],t):B.a([A.qn,A.qk,A.ql],t)
w=B.a([new B.ac(-4,A.G,A.aD.j(0.35+w*0.25),A.dn,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.ds()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fE(m*0.08)
q=B.fA(A.A,B.o(o,D.bYA,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eGL,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.og(A.jV,D.h64,new C.ecM())
p=x.p
m=B.a([B.A(B.a([q,A.bb,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b5,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.l,o,A.e,A.i,0,o,o),A.af,B.A(B.a([n.ay7(D.Et,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ae,n.ay7(D.aMm,"English","\ud83c\uddec\ud83c\udde7",u),A.ae,n.ay7(D.Eu,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.Eu){t=B.a([A.P,n.cEH(u)],p)
if(n.w){q=n.x===D.Et?D.a7r:D.a6v
p=B.T(q).k("N<1,v>")
q=B.B(new B.N(q,new C.ecN(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jK,B.bZ(A.bH,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bC.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bC.j(0.45),A.r,1)
m.push(new B.D(A.jK,B.o(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iy:A.jX,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a7(A.a5,A.a9,A.x,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dq4,new C.ecO(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.i,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.i,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a7(A.az,A.aC,A.x,s,o,o),A.n),o,o,o,H.an0,H.anb,o,o,o)},
$S:88}
C.ecM.prototype={
$1(d){return D.ccg.aA(0,d)},
$S:77}
C.ecN.prototype={
$1(d){return this.a.cEI(d,this.b)},
$S:z+49}
C.ecO.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aMo?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.ecL(p,d)
s=C.i1z(d)
if(o)r=A.c
else r=v?A.ab:A.bq
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i1A(d)
if(o)v=A.ab
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aE(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.OA,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.aj),q),1)},
$S:z+50}
C.ecL.prototype={
$0(){var w=this.a
return w.m(new C.ecK(w,this.b))},
$S:0}
C.ecK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ecR.prototype={
$0(){var w=this.a
return w.m(new C.ecQ(w))},
$S:0}
C.ecQ.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ecy.prototype={
$0(){var w=this.a
return w.m(new C.ecx(w,this.b))},
$S:0}
C.ecx.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Eu
if(v===D.aMm&&w.Q==null)w.Q=A.d.gH(D.a6v).a},
$S:0}
C.ecS.prototype={
$0(){return this.a.cA7(this.b.a)},
$S:0}
C.ecJ.prototype={
$0(){return this.a.JP(this.b)},
$S:0}
C.ecv.prototype={
$1(d){return this.a.b2g()},
$S:2}
C.ecw.prototype={
$0(){return this.a.b2g()},
$S:0}
C.h5L.prototype={
$1(d){var w=this
return new C.a0f(w.a,w.b,w.c,new C.h5K(w.d),null)},
$S:z+51}
C.h5K.prototype={
$0(){return J.lI(this.a.bm())},
$S:0}
C.dq0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bl3()},
$S:29}
C.dq1.prototype={
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
q=q?A.as:A.aN
return B.ao(n,B.d0(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:370}
C.dq6.prototype={
$0(){},
$S:0}
C.dq5.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.nl.aB(0,A.h.D(w,0,1))
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
$S:45}
C.dq2.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ac(6,A.G,A.as.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.A,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n0(A.c.j(0.08),A.as,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.d8(A.as.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:121}
C.dq3.prototype={
$1(d){return D.cck.aA(0,d)},
$S:77}
C.dq4.prototype={
$0(){var w=this.a
w.a.bl3()
w.a.e.$0()},
$S:0}
C.cjF.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fS)if(d.x===A.dH){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjS.prototype={
$1(d){return d.a===this.a},
$S:15}
C.er9.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.erQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QW()},
$S:7}
C.erR.prototype={
$1(d){var w=$.aU.p2$
if(w===A.uf||w===A.ug)return
this.a.Fq()},
$S:12}
C.erS.prototype={
$1(d){this.a.cGT()},
$S:12}
C.ery.prototype={
$0(){this.a.Kl(this.b.d,!1)},
$S:0}
C.erz.prototype={
$0(){},
$S:0}
C.erA.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.erB.prototype={
$0(){},
$S:0}
C.erC.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erD.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.erE.prototype={
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
C.ert.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Q8()
w.aa7()},
$S:0}
C.era.prototype={
$0(){this.b.Kl(this.c.d+this.a.a,!1)},
$S:0}
C.eru.prototype={
$1(d){var w=d.d
return(w===A.fS||w===A.f4)&&d.x===A.dH},
$S:15}
C.erv.prototype={
$1(d){return d.a},
$S:170}
C.erw.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erx.prototype={
$0(){},
$S:0}
C.ere.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.erf.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.ern.prototype={
$0(){},
$S:0}
C.erk.prototype={
$0(){return this.a.a.c.d},
$S:86}
C.erl.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erm.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.ero.prototype={
$0(){return this.a.z=!0},
$S:0}
C.erp.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w4(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.erq.prototype={
$0(){return this.a.z=!1},
$S:0}
C.ers.prototype={
$0(){var w=this.a
return w.m(new C.err(w))},
$S:0}
C.err.prototype={
$0(){return this.a.y=1},
$S:0}
C.erg.prototype={
$0(){return this.a.y=1},
$S:0}
C.erh.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erI.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erJ.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.erN.prototype={
$0(){var w=this.a
return w.m(new C.erG(w))},
$S:0}
C.erG.prototype={
$0(){return this.a.y=1},
$S:0}
C.erO.prototype={
$0(){var w=this.a
return w.m(new C.erF(w))},
$S:0}
C.erF.prototype={
$0(){return this.a.y=2},
$S:0}
C.erP.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.erK.prototype={
$2$cloudRequest(d,e){return this.a.b3x(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2113}
C.erL.prototype={
$0(){return this.a.Fq()},
$S:1}
C.erM.prototype={
$0(){var w=this.a
return w.m(new C.erH(w))},
$S:0}
C.erH.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.erd.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.erc(w))},
$S:0}
C.erc.prototype={
$0(){return this.a.y=0},
$S:0}
C.erb.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIK(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ac(1,A.G,A.aE.j(0.55),A.J,18)],x.V),D.cae,A.a6),t,t,t,t,t,t,t,t),A.ed,A.t7,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9e(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.i,0,t,t)],w),t)},
$S:70}
C.erj.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.m(new C.eri(w,v))},
$S:0}
C.eri.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.duq.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fS||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dur.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.dus.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.hdv(v.c,u))
w=this.c?new C.dup(v):null
return v.bc1(this.b,A.oO,D.f0,w,"Today","$"+u,D.f0)},
$S:2115}
C.dup.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dut.prototype={
$2(d,e){var w=this.a
return w.bc1(this.b,A.kb,A.cj,w.w,"Balance","$"+B.dG(B.M9(w.c.a,new C.duo(w))),A.cr)},
$S:75}
C.duo.prototype={
$0(){return this.a.c.d},
$S:86}
C.duj.prototype={
$0(){this.a.a.cZ4()
return null},
$S:0}
C.duk.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b4(w,w,w,new C.bz0(v,w),A.aA)},
$S:62}
C.dul.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.beq(v,!0,A.aE,D.pl,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.bep(v,D.pl,w)}return B.b4(w,w,w,v,A.aA)},
$S:62}
C.dum.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:787}
C.dun.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cXL(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.h.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c6(new B.he(B.a([u,s],x.U)),new C.dui(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2116}
C.dui.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.duh(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b4(n,n,n,new C.beo(o.c,v,k,u,D.pl,D.byL,n),D.foa))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.va
else t=o.e?A.wV:D.bTH
t=B.X(t,k?D.pl:A.b_,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.pl:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.an,s,A.aw,w,A.P,B.o(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.pl:A.pq,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.n),n,n,n,n,A.lo,n,n,n)],m),A.l,n,A.b9,A.i,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.A,n,A.ad,A.f,l,n),n),n,n,n)},
$S:250}
C.duh.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.h.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dn(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.A,0.5,A.x,s,0,B.a([D.pl.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:227}
C.duK.prototype={
$0(){},
$S:0}
C.duL.prototype={
$0(){},
$S:0}
C.duM.prototype={
$1(d){return d.x===A.dH},
$S:15}
C.duw.prototype={
$0(){return this.a.a.d.d},
$S:86}
C.duv.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.m(new C.duu(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.duu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.duH.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jb,B.ay(v,B.cV(A.A,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ab,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.n(q,v,p,r,v,v,A.n),A.hb,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.duJ(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2118}
C.duJ.prototype={
$0(){B.eY()
var w=this.a
w.m(new C.duI(w,this.b))},
$S:0}
C.duI.prototype={
$0(){var w=""+this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.duG.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uQ,B.A(B.a([v,A.b4,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2119}
C.duF.prototype={
$1(d){return this.a.m(new C.duE())},
$S:2}
C.duE.prototype={
$0(){},
$S:0}
C.duz.prototype={
$1(d){return this.a.aZw(d)&&!B.hlO(d)},
$S:15}
C.duA.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.duB.prototype={
$0(){return this.a.a.d.d},
$S:86}
C.duC.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.duy())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.duy.prototype={
$0(){},
$S:0}
C.duD.prototype={
$0(){var w=this.a
return w.m(new C.dux(w))},
$S:0}
C.dux.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fPo.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.fH5.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h_M.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fH4.prototype={
$1(d){var w,v,u
if(!C.inW(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bi(J.k(w==null?"":w))}if(u!=null&&A.o.aq(new B.V(Date.now(),0,!1).bz(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fvb.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.fZc.prototype={
$0(){return $.hj1=null},
$S:11}
C.fZd.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fWO.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fWP.prototype={
$0(){var w,v=this.a
$.hiQ.W(0,v)
w=C.uz(this.b,v)
if(w!=null)B.S6(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h0Y.prototype={
$1(d){return new C.a12(this.a,this.b,null)},
$S:z+56}
C.elN.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.elQ.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.elR.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.elP(w))},
$S:2}
C.elP.prototype={
$0(){return this.a.f=""},
$S:0}
C.elS.prototype={
$1(d){return this.a.b2w()},
$S:2}
C.elT.prototype={
$0(){var w=this.a
return w.m(new C.elO(w,this.b))},
$S:0}
C.elO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fG2.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fG1.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aY(d,1)},
$S:13}
C.fZu.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.aj()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.fZv.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fSN.prototype={
$1(d){return d.a!=="send_email"},
$S:357}
C.fYV.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.A,B.d(d,w,w,w,w,w,w,A.hi,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.n),w,86,w,A.f6,w,w,w,72)},
$S:789}
C.cly.prototype={
$1(d){return J.k(d)},
$S:16}
C.clz.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clx(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:790}
C.clx.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:381}
C.clA.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clw(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:790}
C.clw.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:381}
C.clC.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.clD.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:791}
C.clv.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:71}
C.clB.prototype={
$2(d,e){return d+e},
$S:66}
C.clu.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:66}
C.fIR.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fIL.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fIM.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fIN.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fIO.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fIP.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fIQ.prototype={
$0(){return this.a.$1(D.r9)},
$S:0}
C.fsd.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.aq(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_9:D.bk2
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bm],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dC
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ac(0,A.G,A.w.j(0.35),A.dM,4)],x.V),new B.bT(A.A,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fsc(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:89}
C.fsc.prototype={
$0(){var w=this,v=w.a,u=v.d31(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r9:D.JJ
w.f.$1(v)}},
$S:0}
C.fGn.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,A.aVw,new C.fGm(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:146}
C.fGm.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.ay
return B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fGl(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fX,0,v,v,v,v,v,A.aj)},
$S:85}
C.fGl.prototype={
$0(){var w=this,v=w.a.d33(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frv.prototype={
$1(d){return new B.D(A.jb,C.fWF(d,!1),null)},
$S:371}
C.frw.prototype={
$1(d){return C.fWF(d,!1)},
$S:2123}
C.frx.prototype={
$0(){var w=this,v=w.a
v.cNm(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fry.prototype={
$0(){var w=this
w.a.cNn(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fDh.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mZ(v,A.bs,B.d(""+u,v,v,v,v,v,v,A.cd,v,v,v),A.dk,new C.fDg(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:2124}
C.fDg.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fFe.prototype={
$1(d){return D.dup[d]},
$S:82}
C.fFf.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fC6.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fC7.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fsG.prototype={
$0(){var w=this,v=w.a.cTd(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fsF.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.lM
else w=u===1?A.dQ:A.tF
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nK,v,v,v,v),v)},
$S:2125}
C.fCi.prototype={
$1(d){var w=this
if(w.a.bfu(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fCj.prototype={
$0(){var w=this
if(w.a.bfu(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fs0.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fOr.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fOs.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:54}
C.eTH.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNf.prototype
w.bze=w.Z
w.bzd=w.t
w=C.aNg.prototype
w.bzg=w.Z
w.bzf=w.t
w=C.aNh.prototype
w.bzi=w.Z
w.bzh=w.t
w=C.aOe.prototype
w.bAh=w.Z
w.bAg=w.t
w=C.aNN.prototype
w.bzP=w.t
w=C.aOo.prototype
w.bAr=w.t
w=C.aNi.prototype
w.bzj=w.t
w=C.aOw.prototype
w.bAA=w.t
w=C.aNn.prototype
w.bzo=w.t
w=C.aND.prototype
w.bzF=w.t
w=C.aP7.prototype
w.bBb=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCQ.prototype,"gbW4","bW5",19)
v(q,"gaVM","aVN",1)
v(C.aCP.prototype,"gcDA","a3L",1)
v(q=C.aCR.prototype,"gc0B","c0C",1)
v(q,"gbL0","bL1",1)
v(q=C.azT.prototype,"gcwz","cwA",1)
v(q,"gckL","Rp",0)
v(q,"gcHJ","cHK",1)
v(q,"gczD","nl",0)
w(q,"gcpb","cpc",25)
w(q,"gcFX","T8",33)
v(q=C.aEX.prototype,"gbU0","YU",0)
v(q,"gc9V","a_t",0)
v(q,"gc9S","a_s",0)
v(q,"gc9T","aeZ",0)
v(q,"gc9U","Qc",0)
v(C.aC8.prototype,"gc9W","c9X",1)
u(C,"ivv","i_M",58)
t(C,"hlW",0,null,["$1","$0"],["hI9",function(){return C.hI9(null)}],3,0)
t(C,"bH9",0,null,["$1","$0"],["hI8",function(){return C.hI8(null)}],3,0)
v(C.O6.prototype,"gFa","chV",1)
v(C.aFI.prototype,"gcwR","BA",0)
v(q=C.aFY.prototype,"gcl4","Rr",0)
v(q,"gcpX","a1Y",0)
v(q,"gce7","ce8",1)
v(q=C.aG9.prototype,"gcec","ag3",0)
v(q,"gbEt","aa_",0)
v(q,"gcx6","a2U",0)
s(q,"gcip","ciq",35)
v(C.aIb.prototype,"gbEV","aa1",1)
v(q=C.aIa.prototype,"gceb","ag2",0)
v(q,"gck1","ahd",0)
v(q=C.aGb.prototype,"gc4f","adJ",0)
v(q,"gc4h","Zz",0)
v(q,"gc4g","adK",0)
v(q=C.aGa.prototype,"gbHg","bHh",1)
v(q,"gbHi","bHj",1)
v(C.aGc.prototype,"gbNe","bNf",1)
v(C.aDa.prototype,"gcee","cef",1)
v(q=C.aGz.prototype,"gb2p","cew",1)
r(q,"gb3v",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agR","aAC","b3x","b3w"],52,0,0)
r(q,"gchD",0,4,null,["$4"],["chE"],53,0,0)
v(q,"gcjK","a18",0)
v(q,"gckC","ahk",0)
v(q,"gckx","ahi",0)
v(q,"gc7z","aev",0)
w(C.aDY.prototype,"gc69","c6a",54)
w(q=C.aE_.prototype,"gcEQ","cER",55)
v(q,"gcDq","cDr",1)
v(q,"gcLx","cLy",1)
v(C.aGn.prototype,"gceS","b2w",1)
v(C.aHb.prototype,"gb31","aAo",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.n1,[C.cCo,C.cCl,C.cCm,C.cCn,C.cCk,C.ffD,C.ffB,C.ffF,C.ffC,C.fzf,C.dmr,C.dmC,C.dmK,C.dmL,C.dmN,C.dmF,C.dmD,C.dmE,C.dmG,C.dmH,C.dmx,C.dmy,C.dmw,C.dmA,C.dmB,C.dmu,C.dmt,C.dmP,C.dmS,C.e0_,C.e_Z,C.e00,C.e_Y,C.e_X,C.dml,C.dmo,C.dmp,C.dmn,C.dmm,C.dod,C.doe,C.dof,C.dnt,C.dnu,C.dnY,C.dnJ,C.dnK,C.dnL,C.dnM,C.dnN,C.dmW,C.dns,C.dnZ,C.do7,C.dnW,C.dnV,C.dnq,C.dnr,C.do3,C.do4,C.dmY,C.dmZ,C.dnC,C.dnD,C.dnE,C.dnB,C.dnO,C.dnP,C.dnQ,C.dnR,C.dnS,C.dnT,C.do1,C.dnF,C.dnG,C.dnH,C.dnI,C.do5,C.do6,C.dn_,C.dn0,C.dn1,C.dn2,C.do_,C.do0,C.dnA,C.dnU,C.dny,C.do8,C.do9,C.doa,C.dnv,C.dne,C.dnd,C.dnc,C.dni,C.dnb,C.dn9,C.dn4,C.dn7,C.dn3,C.dnn,C.dno,C.dn5,C.drM,C.cNL,C.cNB,C.cNC,C.cNV,C.cNS,C.cNT,C.cNU,C.cNN,C.cNM,C.cND,C.cNO,C.cOd,C.cO9,C.cO8,C.cNJ,C.cNK,C.cNG,C.cNR,C.cNZ,C.cO_,C.cO0,C.cO1,C.cO2,C.cO3,C.cO4,C.cOp,C.cOi,C.cOf,C.cOk,C.cOh,C.cOe,C.cNE,C.cOb,C.dIj,C.dIk,C.dIa,C.dI8,C.dIi,C.dI7,C.dI6,C.dI9,C.dIe,C.dIf,C.dIc,C.dId,C.dIl,C.dIm,C.dIn,C.dIo,C.f94,C.f95,C.dhd,C.fPi,C.dOM,C.dOE,C.dOG,C.dOK,C.dOF,C.dOH,C.dOI,C.cdU,C.fWD,C.fWC,C.dHW,C.dHV,C.dHX,C.dHU,C.e7y,C.e7z,C.e7G,C.h4S,C.h4T,C.c6a,C.e05,C.e06,C.e07,C.e08,C.e09,C.e0a,C.e04,C.e0b,C.e03,C.e0e,C.e0d,C.e0c,C.e7O,C.e7P,C.e7M,C.e7L,C.e7N,C.e7J,C.ebO,C.ebP,C.ebx,C.ebz,C.ebL,C.ebM,C.ebG,C.ebE,C.ebK,C.ebH,C.ebB,C.ebA,C.ebQ,C.cX9,C.cX7,C.cX8,C.cX6,C.cXc,C.cXd,C.f3Z,C.f43,C.f40,C.f42,C.f41,C.f3V,C.f3U,C.f3X,C.f3W,C.eca,C.ecf,C.ecb,C.ecc,C.ece,C.eck,C.ecl,C.ecm,C.ecn,C.eco,C.ecp,C.ecq,C.ecr,C.ecj,C.ecs,C.eci,C.ech,C.ecg,C.ec3,C.ec4,C.ebW,C.ebX,C.ebY,C.ec_,C.cQF,C.dsG,C.dsI,C.dsH,C.ecI,C.ecC,C.ecD,C.ecF,C.ecG,C.ecH,C.ecL,C.ecK,C.ecR,C.ecQ,C.ecy,C.ecx,C.ecS,C.ecJ,C.ecw,C.h5K,C.dq6,C.dq4,C.er9,C.ery,C.erz,C.erA,C.erB,C.erD,C.erE,C.ert,C.era,C.erx,C.ere,C.erf,C.ern,C.erk,C.erl,C.erm,C.ero,C.erp,C.erq,C.ers,C.err,C.erg,C.erh,C.erN,C.erG,C.erO,C.erF,C.erP,C.erL,C.erM,C.erH,C.erd,C.erc,C.erj,C.eri,C.dup,C.duo,C.duj,C.duK,C.duL,C.duw,C.duv,C.duu,C.duJ,C.duI,C.duE,C.duB,C.duC,C.duy,C.duD,C.dux,C.fZc,C.fWP,C.elN,C.elQ,C.elP,C.elT,C.elO,C.fIL,C.fIM,C.fIN,C.fIO,C.fIP,C.fIQ,C.fsc,C.fGl,C.frx,C.fry,C.fDg,C.fFf,C.fC7,C.fsG,C.fCj,C.fs0,C.eTH])
u(B.kB,[C.cCp,C.ffE,C.fT6,C.fSZ,C.fzc,C.fzb,C.fze,C.dmU,C.dmV,C.dmJ,C.dmI,C.dmM,C.dmv,C.dmz,C.dmO,C.e02,C.dmq,C.dog,C.doh,C.doi,C.doj,C.dok,C.dnX,C.do2,C.dmX,C.doc,C.dob,C.dnf,C.dng,C.dnh,C.dnj,C.dnl,C.drN,C.cOq,C.cNQ,C.cNP,C.cO7,C.cOa,C.cO6,C.cNH,C.cNY,C.cNW,C.cOc,C.cNX,C.cOl,C.cOj,C.cOo,C.c4S,C.c4R,C.c4U,C.c4T,C.dIh,C.dIg,C.dIb,C.dIp,C.dIq,C.fDR,C.fF3,C.dhe,C.dhc,C.c5E,C.fPh,C.dON,C.dOL,C.cdV,C.fFT,C.fWB,C.cgl,C.cgk,C.cgN,C.e7w,C.e7x,C.fRF,C.fRs,C.fRr,C.fCa,C.ch0,C.ch1,C.ch2,C.ch_,C.cgZ,C.fyV,C.h4O,C.h4P,C.h4Q,C.h4R,C.h4N,C.e7D,C.e7E,C.e7C,C.h4U,C.dol,C.ciL,C.fxR,C.e0f,C.e7K,C.chz,C.chw,C.chy,C.chB,C.c9i,C.c9g,C.c9l,C.chK,C.chJ,C.chI,C.chH,C.chM,C.chO,C.ebU,C.eby,C.ebw,C.ebN,C.ebF,C.ebJ,C.ebI,C.ebD,C.ebS,C.ebR,C.cXa,C.cXb,C.f4_,C.f3T,C.f3Y,C.chE,C.fTB,C.ecu,C.ecd,C.ec6,C.ec7,C.ec8,C.ec9,C.ect,C.chG,C.cQG,C.cQH,C.fxz,C.ecz,C.ecB,C.ecE,C.ecM,C.ecN,C.ecO,C.ecv,C.h5L,C.dq0,C.dq3,C.cjF,C.cjS,C.erQ,C.erR,C.erS,C.erC,C.eru,C.erv,C.erw,C.erI,C.erK,C.duq,C.dur,C.dum,C.duh,C.duM,C.duH,C.duG,C.duF,C.duz,C.fH5,C.h_M,C.fH4,C.fvb,C.fZd,C.fWO,C.h0Y,C.elR,C.elS,C.fG2,C.fG1,C.fZu,C.fZv,C.fSN,C.fYV,C.cly,C.clz,C.clx,C.clA,C.clw,C.clC,C.clD,C.clv,C.fIR,C.frv,C.frw,C.fDh,C.fFe,C.fC6,C.fsF,C.fCi,C.fOr,C.fOs])
t(C.bv3,B.jL)
u(B.ag,[C.Gb,C.anb,C.aFH,C.ana,C.anc,C.anZ,C.ak1,C.apx,C.a0J,C.a0K,C.a_R,C.aq3,C.apw,C.OC,C.aCS,C.are,C.arX,C.WW,C.QH,C.a1v,C.a1u,C.WX,C.asd,C.aDL,C.asg,C.a0f,C.asQ,C.aDX,C.aDZ,C.a12,C.aub])
u(B.ah,[C.aKK,C.aNg,C.aOe,C.aNf,C.aNh,C.bjT,C.azT,C.aEX,C.bmk,C.bml,C.aC8,C.bms,C.aNN,C.aOo,C.aNi,C.aFI,C.aFY,C.aG9,C.bdW,C.aIb,C.aIa,C.aGb,C.aGa,C.bk6,C.aOw,C.aNn,C.bB_,C.aND,C.aE_,C.aGn,C.aP7])
u(B.mA,[C.ffG,C.fzd,C.dms,C.dmT,C.dmR,C.dmQ,C.e01,C.dnz,C.dnx,C.dnw,C.dna,C.dnk,C.dn8,C.dnm,C.dn6,C.dnp,C.cO5,C.cNI,C.cOg,C.cOn,C.cOm,C.cNF,C.dhb,C.dOJ,C.fFU,C.fFV,C.e7A,C.fT1,C.h4M,C.e7F,C.e7I,C.e7H,C.dom,C.ciM,C.chA,C.chx,C.c9j,C.c9h,C.chN,C.ebV,C.ebC,C.ebT,C.f45,C.f44,C.ec5,C.ebZ,C.ec0,C.ec2,C.ec1,C.ecA,C.ecP,C.dq1,C.dq5,C.dq2,C.erJ,C.erb,C.dus,C.dut,C.duk,C.dul,C.dun,C.dui,C.duA,C.fPo,C.clB,C.clu,C.fsd,C.fGn,C.fGm])
t(C.ay3,C.Gb)
u(B.aK,[C.re,C.afj,C.O6,C.JF,C.rS,C.rT,C.lT,C.iC,C.iq,C.bc_,C.de9,C.dsF,C.rY,C.WY,C.OT,C.qi,C.b2f,C.pA,C.atg])
t(C.aCQ,C.aNg)
t(C.bmP,C.aOe)
t(C.aCP,C.aNf)
t(C.aCR,C.aNh)
u(B.qx,[C.XD,C.aDM,C.at3,C.JK,C.Fz])
u(B.av,[C.a25,C.bvA,C.ag4,C.Rj,C.a89,C.Ou,C.arR,C.aeW,C.aeV,C.b34,C.aDK,C.adq,C.b2C,C.adh,C.aDY])
t(C.bmi,C.aNN)
t(C.bn2,C.aOo)
t(C.biy,C.aNi)
t(C.aGc,C.aOw)
t(C.aDa,C.aNn)
t(C.aGz,C.bB_)
t(C.bkQ,C.aND)
u(B.q8,[C.beq,C.bep,C.beo,C.bdP,C.bz0,C.btP])
t(C.aHb,C.aP7)
w(C.aNf,C.O6)
w(C.aNg,C.O6)
w(C.aNh,C.O6)
w(C.aOe,C.O6)
w(C.aNN,B.eP)
w(C.aOo,B.cg)
w(C.aNi,B.cg)
w(C.aOw,B.cg)
w(C.aNn,B.eP)
w(C.aND,B.eP)
v(C.bB_,B.eG)
w(C.aP7,B.cg)})()
B.on(b.typeUniverse,JSON.parse('{"bv3":{"jL":[]},"Gb":{"ag":[],"v":[]},"aKK":{"ah":["Gb<1,2>"]},"ay3":{"Gb":["1","hx<1>"],"ag":[],"v":[],"Gb.T":"1","Gb.S":"hx<1>"},"anb":{"ag":[],"v":[]},"aFH":{"ag":[],"v":[]},"ana":{"ag":[],"v":[]},"anc":{"ag":[],"v":[]},"anZ":{"ag":[],"v":[]},"ak1":{"ag":[],"v":[]},"aCQ":{"ah":["anb"]},"bmP":{"ah":["aFH"]},"aCP":{"ah":["ana"]},"aCR":{"ah":["anc"]},"bjT":{"ah":["anZ"]},"azT":{"ah":["ak1"]},"apx":{"ag":[],"v":[]},"a0J":{"ag":[],"v":[]},"a0K":{"ag":[],"v":[]},"ag4":{"av":[],"v":[]},"a_R":{"ag":[],"v":[]},"aEX":{"ah":["apx"]},"a25":{"av":[],"v":[]},"bvA":{"av":[],"v":[]},"bmk":{"ah":["a0J"]},"bml":{"ah":["a0K"]},"Rj":{"av":[],"v":[]},"aC8":{"ah":["a_R"]},"aq3":{"ag":[],"v":[]},"bms":{"ah":["aq3"]},"a89":{"av":[],"v":[]},"apw":{"ag":[],"v":[]},"bmi":{"ah":["apw"]},"Ou":{"av":[],"v":[]},"arR":{"av":[],"v":[]},"OC":{"ag":[],"v":[]},"bn2":{"ah":["OC"]},"aeW":{"av":[],"v":[]},"aeV":{"av":[],"v":[]},"aCS":{"ag":[],"v":[]},"biy":{"ah":["aCS"]},"b34":{"av":[],"v":[]},"are":{"ag":[],"v":[]},"aFI":{"ah":["are"]},"arX":{"ag":[],"v":[]},"aFY":{"ah":["arX"]},"WW":{"ag":[],"v":[]},"QH":{"ag":[],"v":[]},"a1v":{"ag":[],"v":[]},"a1u":{"ag":[],"v":[]},"aG9":{"ah":["WW"]},"bdW":{"ah":["QH"]},"aIb":{"ah":["a1v"]},"aIa":{"ah":["a1u"]},"WX":{"ag":[],"v":[]},"aGb":{"ah":["WX"]},"asd":{"ag":[],"v":[]},"adq":{"av":[],"v":[]},"adh":{"av":[],"v":[]},"aDL":{"ag":[],"v":[]},"aGa":{"ah":["asd"]},"aDK":{"av":[],"v":[]},"b2C":{"av":[],"v":[]},"bk6":{"ah":["aDL"]},"asg":{"ag":[],"v":[]},"aGc":{"ah":["asg"]},"a0f":{"ag":[],"v":[]},"aDa":{"ah":["a0f"]},"asQ":{"ag":[],"v":[]},"aDX":{"ag":[],"v":[]},"aDZ":{"ag":[],"v":[]},"aGz":{"ah":["asQ"],"eG":[]},"aDY":{"av":[],"v":[]},"bkQ":{"ah":["aDX"]},"beq":{"aB":[]},"bep":{"aB":[]},"beo":{"aB":[]},"aE_":{"ah":["aDZ"]},"bdP":{"aB":[]},"bz0":{"aB":[]},"a12":{"ag":[],"v":[]},"aGn":{"ah":["a12"]},"btP":{"aB":[]},"aub":{"ag":[],"v":[]},"aHb":{"ah":["aub"]}}'))
B.a2v(b.typeUniverse,JSON.parse('{"O6":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aF
return{dw:w("mf<u?>"),gS:w("oC"),o:w("d9"),g5:w("xL"),M:w("di<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oC>"),E:w("U<d9>"),V:w("U<ac>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o1>"),B:w("U<ai<H>>"),m:w("U<ab<q,q>>"),_:w("U<ab<q,@>>"),b:w("U<rS>"),x:w("U<rT>"),gi:w("U<jq>"),a:w("U<lT>"),Y:w("U<iq>"),v:w("U<iC>"),dA:w("U<JF>"),F:w("U<rY>"),Z:w("U<kI>"),g:w("U<hN>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<d8>"),s:w("U<q>"),G:w("U<jL>"),eO:w("U<es>"),d9:w("U<eZ>"),p:w("U<v>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aB?>"),d4:w("U<q?>"),ck:w("ai<rS>"),e:w("ai<rT>"),ac:w("ai<jq>"),dZ:w("ai<lT>"),I:w("ai<iq>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("ab<q,q>"),P:w("ab<q,@>"),f:w("ab<@,@>"),cl:w("cM<q,D>"),aS:w("N<a_,tK>"),dc:w("N<JK,bz>"),dv:w("N<q,q>"),bL:w("N<G,bz>"),a3:w("N<H,bz>"),gN:w("N<H,qa>"),w:w("kG"),b1:w("rS"),Q:w("rT"),bP:w("lT"),i:w("iq"),u:w("iC"),gp:w("WY"),J:w("OT"),D:w("qi"),an:w("kI"),c:w("cw"),K:w("aK"),d:w("jF<q>"),di:w("+outcome,snapshot(XD,a7u?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<iq>,q?,q?,q?)"),cz:w("Kd"),bJ:w("dt<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("kj<H>"),cc:w("Y<q>"),aM:w("ee<d9>"),bG:w("ee<G>"),l:w("v"),gm:w("re"),ec:w("afj"),q:w("p3"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("d9?"),cJ:w("V?"),gw:w("ai<ab<q,@>>?"),bM:w("ai<@>?"),h:w("ab<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6d=new B.be(A.bJ,A.jy,A.bJ,A.jy)
D.f0=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b6L=new B.ax(D.f0,1,A.r,-1)
D.b6N=new B.ax(A.ab,2,A.r,-1)
D.b6Q=new B.ax(A.aV,2,A.r,-1)
D.b6S=new B.ax(A.cA,0.8,A.r,-1)
D.b76=new B.ax(A.aQ,2,A.r,-1)
D.b7d=new B.ax(A.fd,1.6,A.r,-1)
D.b82=new B.aY(0,330,0,1/0)
D.b89=new B.aY(0,176,0,1/0)
D.b8a=new B.aY(0,1/0,0,260)
D.b8s=new B.aY(90,1/0,0,1/0)
D.bbs=new B.ac(0,A.G,A.dC,A.J,4)
D.d9W=w([D.bbs],x.V)
D.b8G=new B.n(A.c,null,null,null,D.d9W,null,A.a6)
D.d3h=w([D.f0,A.b3],x.O)
D.cdk=new B.a7(A.a5,A.a9,A.x,D.d3h,null,null)
D.b8U=new B.n(null,null,null,null,null,D.cdk,A.a6)
D.b8Z=new B.n(A.bg,null,null,null,null,null,A.a6)
D.bmU=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.dqZ=w([M.ahK,D.bmU],x.O)
D.ccp=new B.a7(A.aY,A.b2,A.x,D.dqZ,null,null)
D.b9f=new B.n(null,null,null,A.mK,null,D.ccp,A.n)
D.bvi=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dDS=w([D.bvi,A.akd],x.O)
D.cbz=new B.a7(A.aY,A.b2,A.x,D.dDS,null,null)
D.b9G=new B.n(null,null,null,A.uh,null,D.cbz,A.n)
D.dmA=w([A.aD,A.bC],x.O)
D.cc8=new B.a7(A.a5,A.a9,A.x,D.dmA,null,null)
D.b9M=new B.n(null,null,null,null,null,D.cc8,A.a6)
D.fCZ=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new B.C("\ud83c\udf89",null,D.fCZ,null,null,null,null,null,null,null,null,null)
D.bfz=new B.cl(A.A,null,null,D.fXQ,null)
D.bh1=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.agO=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bk2=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bk6=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.pl=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.us=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ai9=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmu=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.ZH=new B.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.yx=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.boh=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_9=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ajN=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bt_=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.bt8=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akh=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.buK=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.buR=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bw0=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a_Y=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bxb=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.bxR=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0b=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.byL=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.alU=new B.a5n(2,"active")
D.bD4=new B.bf(42e5)
D.bD7=new B.bf(53e4)
D.bDa=new B.bf(58e4)
D.bDe=new B.bf(82e4)
D.bE1=new B.P(0,30,0,30)
D.bE9=new B.P(0,4,0,8)
D.bEd=new B.P(0,8,12,8)
D.bER=new B.P(12,0,12,88)
D.bEZ=new B.P(12,11,12,10)
D.bFp=new B.P(13,10,12,10)
D.bFA=new B.P(14,10,14,2)
D.bFM=new B.P(14,14,10,14)
D.bGl=new B.P(16,12,16,96)
D.bGq=new B.P(16,14,16,8)
D.bGu=new B.P(16,16,16,96)
D.bGv=new B.P(16,18,16,16)
D.bGz=new B.P(16,4,16,10)
D.bHy=new B.P(18,6,18,40)
D.bHL=new B.P(20,10,20,20)
D.bI_=new B.P(20,18,20,18)
D.bIq=new B.P(22,22,22,16)
D.bJ4=new B.P(2,0,2,10)
D.bJP=new B.P(4,8,12,4)
D.bK2=new B.P(6,1,6,1)
D.bK4=new B.P(6,4,0,0)
D.bKa=new B.P(6,6,12,4)
D.bKv=new B.P(8,4,12,8)
D.h0r=new B.C("Activity",null,A.fG,null,null,null,null,null,null,null,null,null)
D.bMw=new B.bz(1,A.be,D.h0r,null)
D.h99=new B.C("Game Receipts",null,A.u3,null,null,null,null,null,null,null,null,null)
D.fSG=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.acj,null,null,null,null,null,null,null,null,null)
D.d_F=w([D.h99,D.fSG],x.p)
D.bzR=new B.fo(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.d_F,null)
D.bMz=new B.bz(1,A.be,D.bzR,null)
D.bRt=new B.a_(58607,"MaterialIcons",!1)
D.a3g=new B.a_(62178,"MaterialIcons",!1)
D.bSk=new B.a_(62410,"MaterialIcons",!1)
D.bTv=new B.a_(63258,"MaterialIcons",!1)
D.bTA=new B.a_(63304,"MaterialIcons",!1)
D.bTB=new B.a_(63306,"MaterialIcons",!1)
D.bTH=new B.a_(63330,"MaterialIcons",!1)
D.asl=new B.a_(984777,"MaterialIcons",!1)
D.bWc=new B.ae(A.Da,13,A.ab,null,null,null)
D.bWk=new B.ae(A.jt,13,A.qy,null,null,null)
D.asz=new B.ae(A.lX,null,A.c,null,null,null)
D.bXU=new B.ae(A.Dq,34,A.as,null,null,null)
D.bYq=new B.ae(A.Dd,19,A.c,null,null,null)
D.bYA=new B.ae(A.aqF,24,A.aQ,null,null,null)
D.bZ2=new B.ae(A.D6,28,A.bp,null,null,null)
D.bZy=new B.ae(A.arZ,42,A.c,null,null,null)
D.bZI=new B.ae(A.a4c,30,A.c,null,null,null)
D.c_o=new B.ae(A.fO,null,A.c,null,null,null)
D.c_K=new B.ae(A.jt,16,A.c,null,null,null)
D.c0q=new B.ae(A.tq,13,A.c,null,null,null)
D.c0z=new B.ae(A.lX,18,A.c,null,null,null)
D.c17=new B.ae(A.wU,null,A.dQ,null,null,null)
D.c1P=new B.ae(A.nP,28,A.c,null,null,null)
D.c24=new B.ae(A.oQ,22,null,null,null,null)
D.c2t=new B.ae(A.tm,null,null,null,null,null)
D.c2F=new B.ae(A.h3,28,A.c,null,null,null)
D.c2I=new B.ae(A.cB,null,A.aR,null,null,null)
D.c2S=new B.ae(A.a2X,14,A.c,null,null,null)
D.c3t=new B.ae(A.I1,36,A.aN,null,null,null)
D.c3A=new B.ae(A.oL,16,A.c,null,null,null)
D.bnn=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c4p=new B.ae(A.e9,9,D.bnn,null,null,null)
D.bUA=new B.a_(983146,"MaterialIcons",!1)
D.c4H=new B.ae(D.bUA,null,A.aQ,null,null,null)
D.c5g=new B.ae(A.v0,28,D.f0,null,null,null)
D.c5l=new B.ae(A.th,null,A.fd,null,null,null)
D.c5q=new B.ae(A.hD,20,D.f0,null,null,null)
D.bUX=new B.a_(983377,"MaterialIcons",!1)
D.c5A=new B.ae(D.bUX,64,A.c,null,null,null)
D.c66=new B.ae(A.h4,24,A.c,null,null,null)
D.c72=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7d=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7s=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7t=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bkW=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.boG=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.boi=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dri=w([D.bkW,D.boG,D.boi],x.O)
D.c9j=new B.a7(A.az,A.aC,A.x,D.dri,null,null)
D.dwX=w([A.bf,A.b3],x.O)
D.c9E=new B.a7(A.az,A.aC,A.x,D.dwX,null,null)
D.bmM=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.btO=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.dax=w([D.bmM,D.btO],x.O)
D.c9M=new B.a7(A.az,A.aC,A.x,D.dax,null,null)
D.dt_=w([A.bs,A.a_,A.ec],x.O)
D.c9S=new B.a7(A.az,A.aC,A.x,D.dt_,null,null)
D.c9V=new B.a7(A.a5,A.a9,A.x,E.azV,null,null)
D.d9K=w([A.fd,A.cj],x.O)
D.aum=new B.a7(A.a5,A.a9,A.x,D.d9K,null,null)
D.dae=w([A.fd,A.bC],x.O)
D.aun=new B.a7(A.a5,A.a9,A.x,D.dae,null,null)
D.aE7=w([D.pl,A.aE,A.c3],x.O)
D.cae=new B.a7(A.az,A.aC,A.x,D.aE7,null,null)
D.bqF=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7z=w([D.bqF,A.ah4,A.a_],x.O)
D.caj=new B.a7(A.az,A.aC,A.x,D.d7z,null,null)
D.b4a=new B.dd(-0.8,-1)
D.b4c=new B.dd(1.2,1)
D.d6G=w([A.c,A.eP,A.ha,A.c,A.ft,A.aH,A.ol],x.O)
D.dsj=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.cal=new B.a7(D.b4a,D.b4c,A.x,D.d6G,D.dsj,null)
D.btE=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bqX=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.drh=w([D.btE,D.bqX],x.O)
D.caO=new B.a7(A.a5,A.a9,A.x,D.drh,null,null)
D.caU=new B.a7(A.az,A.aC,A.x,A.SP,null,null)
D.dlv=w([A.a01,A.yz],x.O)
D.caW=new B.a7(A.a5,A.a9,A.x,D.dlv,null,null)
D.dq_=w([A.hm,A.fW],x.O)
D.aut=new B.a7(A.a5,A.a9,A.x,D.dq_,null,null)
D.dwu=w([A.bg,A.bQ],x.O)
D.auu=new B.a7(A.a5,A.a9,A.x,D.dwu,null,null)
D.cRJ=w([A.dh,A.fB],x.O)
D.cbB=new B.a7(A.az,A.aC,A.x,D.cRJ,null,null)
D.d5A=w([A.c,A.ba],x.O)
D.cbL=new B.a7(A.a5,A.a9,A.x,D.d5A,null,null)
D.ajf=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bjN=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dhY=w([D.ajf,A.jI,A.rJ,A.aE,D.bjN],x.O)
D.ceq=w([0,0.28,0.55,0.82,1],x.n)
D.cbN=new B.a7(A.az,A.aC,A.x,D.dhY,D.ceq,null)
D.cbU=new B.a7(A.a5,A.a9,A.x,A.Tw,null,null)
D.cbV=new B.a7(A.a5,A.a9,A.x,E.aCs,null,null)
D.cc_=new B.a7(A.a5,A.a9,A.x,D.aE7,null,null)
D.dbO=w([A.bC,A.fd],x.O)
D.cce=new B.a7(A.a5,A.a9,A.x,D.dbO,null,null)
D.dAY=w([A.aD,A.bC,A.ba],x.O)
D.ccg=new B.a7(A.a5,A.a9,A.x,D.dAY,null,null)
D.dlG=w([A.as,A.bL,A.fM],x.O)
D.cck=new B.a7(A.a5,A.a9,A.x,D.dlG,null,null)
D.dAH=w([A.bs,A.aL,A.bP,A.bm,A.aS,A.cA,A.am],x.O)
D.dfZ=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.cco=new B.a7(A.az,A.aC,A.x,D.dAH,D.dfZ,null)
D.ccy=new B.a7(A.az,A.aC,A.x,A.a5E,null,null)
D.dmi=w([D.ZH,A.e6],x.O)
D.ccI=new B.a7(A.a5,A.a9,A.x,D.dmi,null,null)
D.dux=w([D.akh,D.ai9,A.a_],x.O)
D.ccR=new B.a7(A.az,A.aC,A.x,D.dux,null,null)
D.bww=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d6a=w([A.fe,A.hm,D.bww],x.O)
D.cdm=new B.a7(A.az,A.aC,A.x,D.d6a,null,null)
D.dco=w([D.pl,A.aE],x.O)
D.cdo=new B.a7(A.az,A.aC,A.x,D.dco,null,null)
D.cdQ=w([F.Du,A.nP,A.jt,A.hE,A.jN,A.l2,A.kg,A.r0,A.nO,A.eY,A.lr,A.zC,A.I0],x.A)
D.chl=w([10,50,100,200],x.t)
D.cr8=w([1,3,5,7],x.t)
D.cw9=w([25,50,100,250],x.t)
D.bUu=new B.a_(983104,"MaterialIcons",!1)
D.cEV=w([A.nP,A.mo,A.oQ,A.lV,A.hq,A.va,D.bUu,A.a47],x.A)
D.cKm=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cWS=w([0,0.22,0.5,0.78,1],x.n)
D.d_P=w([8,13,19],x.n)
D.a5Y=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h_q=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eF4=new B.jF("questions",!0,48,null,D.h_q,null,x.d)
D.fPL=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eFb=new B.jF("edit",!0,48,null,D.fPL,null,x.d)
D.h7F=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eF3=new B.jF("delete",!0,48,null,D.h7F,null,x.d)
D.d5F=w([D.eF4,D.eFb,D.eF3],B.aF("U<t1<q>>"))
D.dar=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.daH=w([A.bU,A.fn],x.O)
D.a92=new C.lT("text","",null,null)
D.dc_=w([D.a92],x.a)
D.ddy=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_n=new B.afG(A.kD,"Home")
D.eQV=new B.afG(A.oO,"Growth")
D.eVJ=new B.afG(A.jt,"Wallet")
D.dgf=w([D.f_n,D.eQV,D.eVJ],B.aF("U<+icon,label(a_,q)>"))
D.dgH=w([4,0,2,6,8,1,3,5,7],x.t)
D.dgP=w([A.c,A.cf,A.cA],x.O)
D.e2n=new C.rY("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2q=new C.rY("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2o=new C.rY("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e2i=new C.rY("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e2j=new C.rY("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2r=new C.rY("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6v=w([D.e2n,D.e2q,D.e2o,D.e2i,D.e2j,D.e2r],x.F)
D.a6A=w([A.ay,A.bf,A.d9,A.as],x.O)
D.bnC=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dmp=w([A.Zc,D.bnC,A.rJ,A.iz,A.jI],x.O)
D.a6H=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.SZ=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cF9=w([3,4,5],x.t)
D.cSm=w([6,7,8],x.t)
D.cdX=w([0,3,6],x.t)
D.crd=w([1,4,7],x.t)
D.cyG=w([2,5,8],x.t)
D.ce1=w([0,4,8],x.t)
D.cyD=w([2,4,6],x.t)
D.doZ=w([I.auV,D.cF9,D.cSm,D.cdX,D.crd,D.cyG,D.ce1,D.cyD],x.B)
D.aMn=new C.JK(0,"abab")
D.e2g=new C.JK(1,"aaaBbb")
D.aMo=new C.JK(2,"aabb")
D.dq4=w([D.aMn,D.e2g,D.aMo],B.aF("U<JK>"))
D.dqm=w([],x.a)
D.aDk=w([],x.v)
D.dup=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Ti=w([1,2,3,-1,-2],x.t)
D.dDD=w([A.j9,A.aD],x.O)
D.hFT=new C.re("dice","Dice Roll","Roll for cash & prizes!",A.nM,D.dDD)
D.hFQ=new C.re("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.v7,A.aBX)
D.dxm=w([A.dr,A.bp],x.O)
D.hFO=new C.re("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a3U,D.dxm)
D.dD3=w([A.dS,A.nt],x.O)
D.hFU=new C.re("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a47,D.dD3)
D.cqT=w([A.jG,A.rW],x.O)
D.hFR=new C.re("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Q0,D.cqT)
D.duo=w([A.lK,D.a_9],x.O)
D.hFP=new C.re("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.I4,D.duo)
D.hFS=new C.re("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nT)
D.dwt=w([D.hFT,D.hFQ,D.hFO,D.hFU,D.hFR,D.hFP,D.hFS],B.aF("U<re>"))
D.dy0=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bsJ=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bsA=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.al9=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dyR=w([D.bsJ,D.bsA,D.al9],x.O)
D.bvb=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dyT=w([A.ah3,D.bvb,D.al9],x.O)
D.dzx=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEv=w([D.pl,A.c,D.f0,A.c4,A.b_,A.aE],x.O)
D.e2l=new C.rY("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2k=new C.rY("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e2h=new C.rY("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2p=new C.rY("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2s=new C.rY("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2m=new C.rY("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7r=w([D.e2l,D.e2k,D.e2h,D.e2p,D.e2s,D.e2m],x.F)
D.dDh=w([A.cj,A.rW],x.O)
D.erv={checkers_deluxe:0,tic_tac_go:1}
D.aKl=new B.bq(D.erv,["Checkers Deluxe","Tic Tac Go"],B.aF("bq<q,q>"))
D.eqy={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKw=new B.bq(D.eqy,[1,2,3,4,5,6,7],B.aF("bq<q,H>"))
D.dVN=new C.a89(null)
D.dZl=new C.lT("signature","NGMY Support Team",null,null)
D.dZm=new C.lT("divider","",null,null)
D.Ui=new C.WY(!1,!1,!1,!1)
D.Uk=new C.OT(!1,!1,!1,!1)
D.e_u=new C.OT(!0,!0,!1,!1)
D.Et=new C.at3(0,"swahili")
D.aMm=new C.at3(1,"english")
D.Eu=new C.at3(2,"mix")
D.dom=w([A.iM,A.ic,A.d6],x.O)
D.bTf=new B.a_(63118,"MaterialIcons",!1)
D.e3t=new C.pA(D.dom,A.fY,A.as,"BACKGAMMON","\ud83c\udfb2",D.bTf)
D.bVk=new B.a_(983637,"MaterialIcons",!1)
D.e3u=new C.pA(A.aEL,A.bf,A.er,"EURO WHEEL","\ud83c\udfa1",D.bVk)
D.dyl=w([A.a_,A.aL,A.bz],x.O)
D.e3v=new C.pA(D.dyl,A.aS,A.am,"ROYALE","\u265f\ufe0f",A.Q0)
D.d9R=w([A.dh,A.bp,A.dX],x.O)
D.e3w=new C.pA(D.d9R,A.ay,A.d9,"CONNECT 4","\ud83d\udd34",A.a4l)
D.dsE=w([A.dA,A.fB,A.rW],x.O)
D.e3x=new C.pA(D.dsE,A.wq,A.cj,"PUNTO BANCO","\ud83d\udc8e",A.mo)
D.cRL=w([A.ok,A.ix,A.mb],x.O)
D.e3y=new C.pA(D.cRL,A.jE,A.ky,"DOMINOES","\ud83c\udc53",A.as_)
D.dz5=w([A.yH,A.uw,A.hL],x.O)
D.e3z=new C.pA(D.dz5,A.Cp,A.hw,"WAR","\u2694\ufe0f",A.a3A)
D.e3A=new C.pA(A.aEE,A.aQ,A.am,"PREMIUM","\ud83c\udfae",A.nM)
D.dbP=w([A.kw,A.aD,A.dS],x.O)
D.e3B=new C.pA(D.dbP,A.ex,A.fd,"JACKPOT","\ud83c\udfb0",A.nM)
D.drB=w([A.jX,A.lG,A.bC],x.O)
D.e3C=new C.pA(D.drB,A.qk,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zv)
D.d3f=w([A.ic,A.e6,A.as],x.O)
D.bSG=new B.a_(62865,"MaterialIcons",!1)
D.e3D=new C.pA(D.d3f,A.uC,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSG)
D.e3E=new C.pA(A.a7o,A.bm,A.bf,"HOLD'EM","\u2660\ufe0f",A.jt)
D.dzw=w([A.fe,A.fW,A.b3],x.O)
D.bRP=new B.a_(61234,"MaterialIcons",!1)
D.e3F=new C.pA(D.dzw,A.mc,A.aV,"CRAPS","\ud83c\udfb2",D.bRP)
D.d91=w([A.fn,A.jm,A.bU],x.O)
D.e3G=new C.pA(D.d91,A.bL,A.ba,"PLINKO","\ud83d\udc8e",A.Q9)
D.bV4=new B.a_(983492,"MaterialIcons",!1)
D.e3H=new C.pA(A.a7o,A.ew,A.bf,"SNOOKER","\ud83c\udfb1",D.bV4)
D.dwR=w([A.fe,A.fW,A.aV],x.O)
D.e3I=new C.pA(D.dwR,A.ux,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hD)
D.dxe=w([A.ec,A.ep,A.bf],x.O)
D.bTG=new B.a_(63324,"MaterialIcons",!1)
D.e3J=new C.pA(D.dxe,A.ws,A.bg,"KLONDIKE","\ud83c\udccf",D.bTG)
D.dp6=w([A.bA,A.bs,A.a_],x.O)
D.e3K=new C.pA(D.dp6,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Ij)
D.r8=new C.Fz(0,"continueGame")
D.r9=new C.Fz(1,"youWin")
D.JJ=new C.Fz(2,"youLose")
D.Ut=new C.Fz(3,"draw")
D.aMB=new C.XD(0,"found")
D.emx=new C.XD(1,"foundLive")
D.a9j=new C.XD(2,"notFound")
D.aMC=new C.XD(3,"wrongAccount")
D.euX=new B.r(4,12)
D.eyq=new B.D(A.z0,A.ul,null)
D.bJt=new B.P(4,0,0,3)
D.fA6=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hci=new B.C("NGMY Helper",null,D.fA6,null,null,null,null,null,null,null,null,null)
D.eyH=new B.D(D.bJt,D.hci,null)
D.bTz=new B.a_(63284,"MaterialIcons",!1)
D.bYQ=new B.ae(D.bTz,18,A.po,null,null,null)
D.fF2=new B.F(!0,A.po,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTS=new B.C("Continue",null,D.fF2,null,null,null,null,null,null,null,null,null)
D.dqT=w([D.bYQ,A.bn,D.fTS],x.p)
D.fjt=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dqT,null)
D.eyL=new B.D(A.hS,D.fjt,null)
D.ez0=new B.D(A.bS,A.ul,null)
D.bsk=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dn4=w([A.hm,A.fW,A.cX,D.bsk],x.O)
D.ccr=new B.a7(A.az,A.aC,A.x,D.dn4,A.DR,null)
D.b9P=new B.n(null,null,null,null,null,D.ccr,A.n)
D.bB6=new B.bO(D.b9P,A.bk,null,null)
D.eFx=new B.cK(0,0,0,0,null,null,D.bB6,null)
D.c_G=new B.ae(A.wT,11,A.c,null,null,null)
D.eFB=new B.cK(10,12,null,null,null,null,D.c_G,null)
D.cWI=w([A.hN,A.ec,A.ll],x.O)
D.eGe=new B.bT(A.By,1.1,A.x,null,0,D.cWI,null,null)
D.bu1=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bn5=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bpj=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkx=w([D.bu1,D.bn5,D.bpj],x.O)
D.eGm=new B.bT(A.aeD,1.05,A.x,null,0,D.dkx,null,null)
D.eGL=new B.bT(A.A,0.5,A.x,null,0,E.aBw,null,null)
D.fhn=new B.a3(-18,0,18,1)
D.fhV=new B.a3(-3,-5,3,5)
D.bZh=new B.ae(A.ea,16,D.f0,null,null,null)
D.aYj=new B.F(!0,D.f0,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9N=new B.C("Screenshot added \xb7 tap to change",null,D.aYj,null,null,null,null,null,null,null,null,null)
D.d6J=w([D.bZh,A.bn,D.h9N],x.p)
D.fiQ=new B.c7(A.aM,A.b9,A.i,A.l,null,A.p,null,0,D.d6J,null)
D.c2p=new B.ae(A.oK,15,D.f0,null,null,null)
D.h7z=new B.C("Refresh",null,D.aYj,null,null,null,null,null,null,null,null,null)
D.d9c=w([D.c2p,A.df,D.h7z],x.p)
D.fiS=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d9c,null)
D.eqS={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fl4=new B.di(D.eqS,3,x.M)
D.eqG={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.flg=new B.di(D.eqG,36,x.M)
D.eqJ={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.flu=new B.di(D.eqJ,6,x.M)
D.esh={memory:0,typing:1,scramble:2,pattern:3}
D.nd=new B.di(D.esh,4,x.M)
D.foa=new B.au(276,276)
D.foU=new B.a5(13,null,null,null)
D.bgh=new B.fm(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fp5=new B.a5(26,26,D.bgh,null)
D.fpZ=new B.hO(8,0,0,1,null)
D.hb_=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVG=new B.b0(D.hb_,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fON=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new B.b0(D.fON,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPX=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ft8=new B.b0(D.fPX,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h7K=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ftN=new B.b0(D.h7K,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bta=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fDW=new B.F(!0,D.bta,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwY=new B.es("$",null,null,A.cM,null,null,null,null,null,null,D.fDW)
D.fxd=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxC=new B.F(!0,A.bs,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.F(!0,A.a_,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyA=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzk=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new B.F(!0,D.f0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzY=new B.F(!0,A.bL,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new B.F(!0,A.Ci,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX1=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCp=new B.F(!0,A.bL,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCL=new B.F(!0,A.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fD4=new B.F(!0,A.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fED=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fFa=new B.F(!0,A.je,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bll=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fFs=new B.F(!0,D.bll,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGX=new B.F(!0,A.ay,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new B.F(!0,D.ajf,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXK=new B.F(!0,A.Ci,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.F(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHI=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI0=new B.F(!0,A.Ci,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xK=new B.F(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqn=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fIf=new B.F(!0,D.bqn,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new B.F(!0,A.TX,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK4=new B.F(!0,A.iB,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK8=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKE=new B.F(!0,A.a_,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLF=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM5=new B.F(!0,A.ab,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMn=new B.F(!0,A.bg,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMS=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMW=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new B.C("Value per pair",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fNZ=new B.C("Restore now",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fOy=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXu=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOJ=new B.C("AVAILABLE PLANS",null,D.aXu,null,null,null,null,null,null,null,null,null)
D.fOL=new B.C("I understand",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fPl=new B.C("Go Back",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fAE=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ4=new B.C("PLAN VALUE",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.fQ7=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fQu=new B.C("Deposit",null,A.WF,null,null,null,null,null,null,null,null,null)
D.fL_=new B.F(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRx=new B.C("JACKPOT SLOTS",null,D.fL_,null,null,null,null,null,null,null,null,null)
D.fRQ=new B.C("Restore",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fAK=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRV=new B.C("YOUR NUMBER",null,D.fAK,null,null,null,null,null,null,null,null,null)
D.fSb=new B.C("SPIN REELS",null,E.acd,null,null,null,null,null,null,null,null,null)
D.fSF=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fTc=new B.C("Perfect Score Profit",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.C("Join room",null,A.iI,null,null,null,null,null,null,null,null,null)
D.fW2=new B.C("Add payment screenshot",null,A.j4,null,null,null,null,null,null,null,null,null)
D.fWi=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fKc=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWK=new B.C("INVITE A PLAYER",null,D.fKc,null,null,null,null,null,null,null,null,null)
D.fJf=new B.F(!0,A.Zc,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXe=new B.C("NGMY GOLD LEADER",null,D.fJf,null,null,null,null,null,null,null,null,null)
D.fXL=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fYa=new B.C("Invest & Play",null,A.m1,null,null,null,null,null,null,null,null,null)
D.aXp=new B.F(!0,D.yx,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYC=new B.C("VALID THRU",null,D.aXp,null,null,null,null,null,null,null,null,null)
D.aY6=new B.F(!0,A.aF,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYK=new B.C("DEALER",null,D.aY6,null,null,null,null,null,null,null,null,null)
D.fYR=new B.C("CARDHOLDER",null,D.aXp,null,null,null,null,null,null,null,null,null)
D.fIH=new B.F(!0,A.bm,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZA=new B.C("NGMY PLATINUM",null,D.fIH,null,null,null,null,null,null,null,null,null)
D.fMc=new B.F(!0,A.qy,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_l=new B.C("EARNED SO FAR",null,D.fMc,null,null,null,null,null,null,null,null,null)
D.h_V=new B.C("VS",null,A.ace,null,null,null,null,null,null,null,null,null)
D.h0l=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h0I=new B.C("One day left",null,A.ac4,null,A.K,null,null,null,null,null,null,null)
D.h13=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.F9,null,null,null,null,null,null,null,null,null)
D.h14=new B.C("Multiplayer invite",null,A.iI,null,null,null,null,null,null,null,null,null)
D.h1g=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new B.F(!0,A.TX,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1m=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fz6,null,null,null,null,null,null,null,null,null)
D.h1x=new B.C("Browse Topics",null,A.fa,null,null,null,null,null,null,null,null,null)
D.fy_=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1O=new B.C("Investment Required",null,D.fy_,null,A.K,null,null,null,null,null,null,null)
D.h3k=new B.C("Network Status",null,A.aWF,null,null,null,null,null,null,null,null,null)
D.aWM=new B.F(!0,A.ab,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3Y=new B.C("Their account email",null,D.aWM,null,null,null,null,null,null,null,null,null)
D.h4i=new B.C("Verification code",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h4j=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h4z=new B.C("ACTIVE ASSET",null,D.aXu,null,null,null,null,null,null,null,null,null)
D.h4Y=new B.C("Scan QR",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h52=new B.C("Check word",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h5t=new B.C("YOUR HAND",null,D.aY6,null,null,null,null,null,null,null,null,null)
D.h64=new B.C("NGMY Music Studio",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h67=new B.C("I sent it \u2014 submit deposit",null,A.m1,null,null,null,null,null,null,null,null,null)
D.h6X=new B.C("Back",null,A.B6,null,null,null,null,null,null,null,null,null)
D.fN8=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h74=new B.C("DEAL / PLAY ROUND",null,D.fN8,null,null,null,null,null,null,null,null,null)
D.h7h=new B.C("Got it \u2014 keep chatting",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h7r=new B.C("3 Messages Left",null,A.aXX,null,null,null,null,null,null,null,null,null)
D.h7Z=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h87=new B.C("Copy",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h8u=new B.C("How many games?",null,D.aWM,null,null,null,null,null,null,null,null,null)
D.fI8=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8G=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fI8,null,A.K,null,null,null,null,null,null,null)
D.hag=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hav=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fNA=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hca=new B.C("NGMY  WALLET",null,D.fNA,null,null,null,null,null,null,null,null,null)
D.hcb=new B.C("Select Your Bet",null,A.h7,null,null,null,null,null,null,null,null,null)
D.hBA=new B.bl("history",x.W)
D.hBX=new B.bl("ngmy_local_home",x.W)
D.hBY=new B.bl("ngmy_local_invest",x.W)
D.hBZ=new B.bl("ngmy_local_wallet",x.W)
D.hFv=new C.a_R(null)
D.b29=new C.aDM(0,"grid")
D.b2a=new C.aDM(1,"questions")
D.hGz=new C.aDM(2,"answer")
D.hJ5=new C.a0K(null)})();(function staticFields(){$.hd7=B.aR(x.N)
$.hEB=B.S(x.N,x.k)
$.hj1=null
$.hiQ=B.S(x.N,B.aF("KB"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iEq","bHW",()=>C.ilM())
w($,"iEc","hNC",()=>{var v=null,u=B.fw(v,A.cw,v,v,v,D.fwY,A.a7,A.bX,v,A.dE,A.bY)
u.ek()
return u})})()};
(a=>{a["sLqVqeu0MRy9/nnB0NDbKUiPm84="]=a.current})($__dart_deferred_initializers__);