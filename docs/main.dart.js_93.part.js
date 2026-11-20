((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,K,R,L,S,T,M,N,U,O,V,W,X,F,P,Y,C={
hyv(d,e,f){var w=null,v=f.k("H2<0>"),u=new B.H2(w,w,w,w,v)
$.w1()
u.d=new C.cCt(new B.vw(),e,u,f,d)
return new B.i8(u,v.k("i8<1>"))},
cCt:function cCt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCu:function cCu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCq:function cCq(d){this.a=d},
cCr:function cCr(d,e){this.a=d
this.b=e},
cCs:function cCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCp:function cCp(d,e,f){this.a=d
this.b=e
this.c=f},
bv7:function bv7(d){this.a=d},
hyu(d,e,f,g){return new C.ay4(d,e,f,null,g.k("ay4<0>"))},
Gf:function Gf(){},
aKM:function aKM(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fg6:function fg6(d){this.a=d},
fg5:function fg5(d,e){this.a=d
this.b=e},
fg8:function fg8(d){this.a=d},
fg3:function fg3(d,e,f){this.a=d
this.b=e
this.c=f},
fg7:function fg7(d){this.a=d},
fg4:function fg4(d){this.a=d},
ay4:function ay4(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
iqn(d){var w=A.a.i(d)
while(A.a.X(w,"$"))w=A.a.i(A.a.aX(w,1))
return w},
hJv(d){var w=C.iqn(d)
if(w.length===0)return""
return"$"+w},
fPV(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fPV=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.vf(q.c,p,n,d,o,null,q.a,!0),$async$fPV)
case 6:case 4:e.length===s||(0,B.I)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fPV,v)},
ivl(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
irp(d,e,f){return A.d.aS(e,new C.fTE(f,A.a.i(d.toLowerCase())))},
fTv(d){var w
C.huC(d)
w=d.c7
return B.bs(new B.N(w,new C.fTw(),B.T(w).k("N<1,@>")),!0,x.N)},
igY(d,e,f){var w,v,u,t,s,r,q=null,p=A.bZ,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ej().gib().b
if(u.a===0)t=1
else{new B.b8(u,B.a4(u).k("b8<2>")).gH(0)
u=$.l7()
s=u.d
t=s==null?u.gho():s}w=A.i.cD(f*t)
v=new C.fzM(f)
if(J.d2(n,"data:image"))try{u=B.fY(A.cD.aK(A.d.gal(J.lK(n,","))),A.z,w,new C.fzJ(v),A.h8,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d2(n,"supabase://"))return new B.lb(B.a3d(n),new C.fzK(f,e,p,w,v),q,q,x.gh)
return B.kG(n,A.z,w,new C.fzL(v),A.h8,p,!0,e,q,q,f)},
hit(d,e){return new B.a5(e,e,B.i4(C.igY(d,e,e),A.aq),null)},
i9_(){var w,v,u=B.a([],x._),t=x.N,s=B.B(D.dwU,x.gm)
for(w=0;w<36;++w){v=A.E6[w]
s.push(new C.rg(v.a,v.b,v.c,v.e,v.f))}return new C.aCS(u,B.S(t,t),s)},
fTE:function fTE(d,e){this.a=d
this.b=e},
fTw:function fTw(){},
fzM:function fzM(d){this.a=d},
fzJ:function fzJ(d){this.a=d},
fzK:function fzK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzI:function fzI(d){this.a=d},
fzL:function fzL(d){this.a=d},
anc:function anc(d,e,f,g,h,i,j){var _=this
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
aCS:function aCS(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dmE:function dmE(d,e){this.a=d
this.b=e},
dmP:function dmP(d,e){this.a=d
this.b=e},
dn6:function dn6(){},
dn7:function dn7(d){this.a=d},
dmX:function dmX(d,e){this.a=d
this.b=e},
dmW:function dmW(){},
dmY:function dmY(d){this.a=d},
dmV:function dmV(){},
dn_:function dn_(d){this.a=d},
dmZ:function dmZ(){},
dmS:function dmS(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmT:function dmT(d){this.a=d},
dmU:function dmU(d){this.a=d},
dmK:function dmK(d,e){this.a=d
this.b=e},
dmL:function dmL(d,e){this.a=d
this.b=e},
dmI:function dmI(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmM:function dmM(d){this.a=d},
dmN:function dmN(d){this.a=d},
dmO:function dmO(d,e,f){this.a=d
this.b=e
this.c=f},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmF:function dmF(d,e){this.a=d
this.b=e},
dn5:function dn5(d){this.a=d},
dn3:function dn3(d,e,f){this.a=d
this.b=e
this.c=f},
dn2:function dn2(d,e,f){this.a=d
this.b=e
this.c=f},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn0:function dn0(){},
dn4:function dn4(d){this.a=d},
aFJ:function aFJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bmT:function bmT(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
e0c:function e0c(d){this.a=d},
e0b:function e0b(d){this.a=d},
e0d:function e0d(d){this.a=d},
e0a:function e0a(){},
e0e:function e0e(d,e){this.a=d
this.b=e},
e09:function e09(d){this.a=d},
e0f:function e0f(d){this.a=d},
anb:function anb(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCR:function aCR(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dmy:function dmy(d){this.a=d},
dmB:function dmB(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmA:function dmA(d,e){this.a=d
this.b=e},
dmz:function dmz(d,e){this.a=d
this.b=e},
and:function and(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCT:function aCT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
doq:function doq(d,e){this.a=d
this.b=e},
dot:function dot(d){this.a=d},
dou:function dou(d){this.a=d},
dov:function dov(d){this.a=d},
dow:function dow(d){this.a=d},
dox:function dox(d){this.a=d},
dor:function dor(d){this.a=d},
dos:function dos(d){this.a=d},
dnG:function dnG(d,e){this.a=d
this.b=e},
dnH:function dnH(d,e){this.a=d
this.b=e},
do9:function do9(d){this.a=d},
doa:function doa(){},
dnW:function dnW(d,e,f){this.a=d
this.b=e
this.c=f},
dnX:function dnX(d){this.a=d},
dnY:function dnY(d,e,f){this.a=d
this.b=e
this.c=f},
dnZ:function dnZ(d,e){this.a=d
this.b=e},
do_:function do_(){},
dn8:function dn8(d){this.a=d},
dnF:function dnF(d,e){this.a=d
this.b=e},
dob:function dob(){},
dok:function dok(){},
do8:function do8(d){this.a=d},
do7:function do7(d){this.a=d},
dnD:function dnD(d){this.a=d},
dnE:function dnE(){},
dof:function dof(){},
dog:function dog(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doh:function doh(d,e,f){this.a=d
this.b=e
this.c=f},
dn9:function dn9(){},
dna:function dna(d){this.a=d},
dnb:function dnb(){},
dnP:function dnP(d,e){this.a=d
this.b=e},
dnQ:function dnQ(d,e,f){this.a=d
this.b=e
this.c=f},
dnR:function dnR(d){this.a=d},
dnO:function dnO(d){this.a=d},
do0:function do0(d){this.a=d},
do1:function do1(){},
do2:function do2(d){this.a=d},
do3:function do3(){},
do4:function do4(d){this.a=d},
do5:function do5(){},
doe:function doe(d,e,f){this.a=d
this.b=e
this.c=f},
dnS:function dnS(d){this.a=d},
dnT:function dnT(d,e){this.a=d
this.b=e},
dnU:function dnU(d){this.a=d},
dnV:function dnV(d){this.a=d},
doi:function doi(d){this.a=d},
doj:function doj(d){this.a=d},
dnc:function dnc(d){this.a=d},
dnd:function dnd(d,e){this.a=d
this.b=e},
dne:function dne(d){this.a=d},
dnf:function dnf(d){this.a=d},
doc:function doc(d,e){this.a=d
this.b=e},
dod:function dod(d){this.a=d},
dnN:function dnN(d,e){this.a=d
this.b=e},
do6:function do6(d,e,f){this.a=d
this.b=e
this.c=f},
dnL:function dnL(d,e,f){this.a=d
this.b=e
this.c=f},
dnM:function dnM(){},
dol:function dol(d){this.a=d},
dom:function dom(d){this.a=d},
don:function don(d){this.a=d},
dop:function dop(d){this.a=d},
doo:function doo(){},
dnK:function dnK(d,e,f){this.a=d
this.b=e
this.c=f},
dnJ:function dnJ(d,e){this.a=d
this.b=e},
dnI:function dnI(d,e){this.a=d
this.b=e},
dns:function dns(d){this.a=d},
dnr:function dnr(d,e){this.a=d
this.b=e},
dnt:function dnt(d){this.a=d},
dnq:function dnq(d,e){this.a=d
this.b=e},
dnu:function dnu(d){this.a=d},
dnp:function dnp(){},
dnv:function dnv(d){this.a=d},
dnn:function dnn(){},
dno:function dno(d){this.a=d},
dnw:function dnw(d){this.a=d},
dnm:function dnm(d,e){this.a=d
this.b=e},
dnx:function dnx(d){this.a=d},
dnl:function dnl(d,e){this.a=d
this.b=e},
dnh:function dnh(d,e){this.a=d
this.b=e},
dny:function dny(d){this.a=d},
dnk:function dnk(d,e){this.a=d
this.b=e},
dnz:function dnz(d){this.a=d},
dnj:function dnj(d){this.a=d},
dng:function dng(d,e){this.a=d
this.b=e},
dnA:function dnA(d,e,f){this.a=d
this.b=e
this.c=f},
dnB:function dnB(d){this.a=d},
dni:function dni(){},
dnC:function dnC(d){this.a=d},
ao_:function ao_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bjX:function bjX(){this.c=this.a=null},
ds_:function ds_(d,e){this.a=d
this.b=e},
drZ:function drZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ak2:function ak2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azU:function azU(d,e,f,g,h,i,j,k,l,m){var _=this
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
cOv:function cOv(d){this.a=d},
cNQ:function cNQ(d,e){this.a=d
this.b=e},
cNG:function cNG(d){this.a=d},
cNH:function cNH(d){this.a=d},
cO_:function cO_(d){this.a=d},
cNX:function cNX(d){this.a=d},
cNY:function cNY(d){this.a=d},
cNZ:function cNZ(d,e,f){this.a=d
this.b=e
this.c=f},
cNS:function cNS(d){this.a=d},
cNR:function cNR(d){this.a=d},
cNI:function cNI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cNV:function cNV(d){this.a=d},
cNU:function cNU(d){this.a=d},
cNT:function cNT(d,e){this.a=d
this.b=e},
cOi:function cOi(d){this.a=d},
cOc:function cOc(d){this.a=d},
cOf:function cOf(d){this.a=d},
cOe:function cOe(){},
cOb:function cOb(d){this.a=d},
cOd:function cOd(d,e){this.a=d
this.b=e},
cOa:function cOa(){},
cNN:function cNN(){},
cNO:function cNO(d,e){this.a=d
this.b=e},
cNP:function cNP(d){this.a=d},
cNL:function cNL(d,e){this.a=d
this.b=e},
cNM:function cNM(d,e){this.a=d
this.b=e},
cO2:function cO2(d,e){this.a=d
this.b=e},
cNW:function cNW(d){this.a=d},
cO3:function cO3(d){this.a=d},
cO4:function cO4(d,e){this.a=d
this.b=e},
cO5:function cO5(d,e){this.a=d
this.b=e},
cO6:function cO6(d,e){this.a=d
this.b=e},
cO7:function cO7(d,e,f){this.a=d
this.b=e
this.c=f},
cO8:function cO8(d){this.a=d},
cO9:function cO9(d){this.a=d},
cO0:function cO0(d,e){this.a=d
this.b=e},
cOh:function cOh(d){this.a=d},
cO1:function cO1(d,e){this.a=d
this.b=e},
cOu:function cOu(d){this.a=d},
cOn:function cOn(d){this.a=d},
cOq:function cOq(d){this.a=d},
cOk:function cOk(d,e){this.a=d
this.b=e},
cOo:function cOo(){},
cOp:function cOp(d,e){this.a=d
this.b=e},
cOl:function cOl(d){this.a=d},
cOm:function cOm(d){this.a=d},
cOs:function cOs(){},
cOr:function cOr(d){this.a=d},
cOj:function cOj(d,e){this.a=d
this.b=e},
cOt:function cOt(d){this.a=d},
cNJ:function cNJ(d){this.a=d},
cOg:function cOg(d,e){this.a=d
this.b=e},
cNK:function cNK(d,e,f){this.a=d
this.b=e
this.c=f},
aNh:function aNh(){},
aNi:function aNi(){},
aNj:function aNj(){},
aOg:function aOg(){},
c5_(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c50(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hXh(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_P(d,e){return C.hXi(d,e)},
hXi(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$b_P=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3E(d),$async$b_P)
case 3:p=g
if(p!=null){try{t=A.X.aP(0,p.c,null)
if(x.f.b(t)){s=C.hsX(B.a1(t,x.N,x.z))
if(s==null){u=new B.GY(D.a9y,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5_(s,e,p.b)){u=new B.GY(D.aMS,null)
w=1
break}r=p.a?D.emY:D.aMR
u=new B.GY(r,s)
w=1
break}}catch(o){}u=new B.GY(D.a9y,null)
w=1
break}s=C.hsY(d)
if(s==null){u=new B.GY(D.a9y,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c5_(s,e,null)){u=new B.GY(D.aMS,null)
w=1
break}u=new B.GY(D.aMR,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_P,v)},
hsY(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d2(w,"\ufeff"))w=J.n0(w,1)
v=!1
if(J.d2(w,"NGMYSNAP1|")){v=!0
w=A.cb.cE(0,A.cD.aK(J.n0(w,10)))}u=A.X.aP(0,w,null)
if(!x.f.b(u))return null
t=B.a1(u,x.N,x.z)
s=v?C.hXg(t):C.hsX(t)
return s}catch(r){return null}},
hXg(d){var w,v,u,t,s,r,q,p,o,n=new C.c4X(),m=new C.c4W(),l=d.h(0,"qi")
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
return new B.a7v("","",v,u,t,s,r,q,n,m,o,p,A.iM,new B.V(Date.now(),0,!1),-1)},
hsX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c4Z()
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
l=B.B(new B.ee(J.b9(m,new C.c4Y(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
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
return new B.a7v(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
hcF(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$hcF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c4V(d,e,f,g)
s=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.Ht(B.L0(t.f1(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hcF,v)},
XE:function XE(d,e){this.a=d
this.b=e},
c4X:function c4X(){},
c4W:function c4W(){},
c4Z:function c4Z(){},
c4Y:function c4Y(d){this.a=d},
ik6(d){return B.ce(null,A.b6,!0,null,new C.fEo(),d,null,!0,!0,x.N)},
ikj(d,e,f,g){return B.ce(null,A.b6,!0,null,new C.fFB(g,f,e),d,null,!0,!0,x.y)},
apy:function apy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEZ:function aEZ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dIw:function dIw(d,e){this.a=d
this.b=e},
dIx:function dIx(d){this.a=d},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIl:function dIl(d){this.a=d},
dIv:function dIv(d){this.a=d},
dIu:function dIu(d,e){this.a=d
this.b=e},
dIk:function dIk(d,e){this.a=d
this.b=e},
dIj:function dIj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIm:function dIm(d){this.a=d},
dIt:function dIt(){},
dIr:function dIr(d){this.a=d},
dIs:function dIs(d,e){this.a=d
this.b=e},
dIo:function dIo(){},
dIp:function dIp(d,e){this.a=d
this.b=e},
dIq:function dIq(d,e){this.a=d
this.b=e},
dIy:function dIy(d){this.a=d},
a26:function a26(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvE:function bvE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0K:function a0K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmo:function bmo(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dIC:function dIC(d){this.a=d},
dIz:function dIz(d,e){this.a=d
this.b=e},
dIA:function dIA(d,e){this.a=d
this.b=e},
dIB:function dIB(d){this.a=d},
a0L:function a0L(d){this.a=d},
bmp:function bmp(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dID:function dID(d,e){this.a=d
this.b=e},
fEo:function fEo(){},
fFB:function fFB(d,e,f){this.a=d
this.b=e
this.c=f},
ag5:function ag5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9w:function f9w(d){this.a=d},
f9x:function f9x(d){this.a=d},
Rl:function Rl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_S:function a_S(d){this.a=d},
aCa:function aCa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhr:function dhr(d){this.a=d},
dho:function dho(){},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
VK(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$VK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.O5(s),$async$VK)
case 3:t=h
J.c4(t,B.J(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return B.b(B.apP(s,t),$async$VK)
case 4:case 1:return B.h(u,v)}})
return B.i($async$VK,v)},
hXA(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.B(new B.Y(d,new C.c5J(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fK(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.I)(u),++s){r=u[s]
q=J.a7(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.v(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c5J:function c5J(){},
ipL(d){return A.d.dB(A.E6,new C.fPP(d),new C.fPQ()).r},
fPP:function fPP(d){this.a=d},
fPQ:function fPQ(){},
aq4:function aq4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bmw:function bmw(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dP_:function dP_(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOR:function dOR(d,e,f){this.a=d
this.b=e
this.c=f},
dOW:function dOW(d){this.a=d},
dOT:function dOT(d,e,f){this.a=d
this.b=e
this.c=f},
dOX:function dOX(d){this.a=d},
dOS:function dOS(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOU:function dOU(d){this.a=d},
dOV:function dOV(d){this.a=d},
huC(d){var w=B.cdV(new B.V(Date.now(),0,!1)),v=d.bn
if(v===w)return
d.bn=w
d.bw=0
d.c7=B.a([],x.s)},
huE(d){return B.ce(null,A.w.j(0.82),!0,null,new C.ce_(),d,null,!0,!0,x.H)},
a8a:function a8a(d){this.a=d},
ce_:function ce_(){},
cdZ:function cdZ(d){this.a=d},
hIC(){var w=new B.V(Date.now(),0,!1),v=w.bQ(B.dv(4-B.lA(w),0,0,0,0,0).a),u=B.c0(B.bD(v),1,4,0,0,0,0,0)
return""+B.bD(v)+"-W"+A.a.b1(A.o.v(1+A.i.be(A.o.ar(v.bA(B.c0(B.bD(u),B.bL(u),B.bX(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fuw(d,e){var w,v,u,t,s,r,q=B.H9(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.t(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c6(r,"+local.ngmy")?A.a.az(r,0,r.length-11):r)===q)return t}t=B.J(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
iex(d,e){var w,v,u,t,s,r,q,p=B.H9(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===p){w=B.aI(s.h(t,"winsLeft"))
w=w==null?null:A.i.M(w)
return w==null?0:w}}return 0},
izp(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.H9(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c6(q,"+local.ngmy")?A.a.az(q,0,q.length-11):q)===n){w=B.aI(s.h(t,o))
w=w==null?null:A.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ikZ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.H9(b5),b2=B.cfg(),b3=C.hIC()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a7(s)
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
if(r)u=s}if(u!=null){w=J.a7(u)
v=B.aI(w.h(u,a4))
v=v==null?a1:A.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aI(w.h(u,"outcome"))
w=w==null?a1:A.i.M(w)
return w==null?1:w}n=new C.fGq()
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
if(l!=null)return l}k=C.fuw(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a1(v.a(w.h(k,b0)),r,q):B.S(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cd(w,B.a4(w).k("cd<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
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
hEU(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h5()?1:2
return s},
hiP(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
il_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.H9(a3),a1=new C.fGr()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=J.a7(s)
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
w=J.a7(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fGs(v+r+q>1,l)
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
return C.hiP(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ikY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aI(i.h(0,"wins")),g=h==null?m:A.i.M(h)
if(g==null)g=0
h=B.aI(i.h(0,"loses"))
w=h==null?m:A.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hIC():B.cfg()
t=v+"|"+u
s=C.fuw(d,e)
h=J.a7(s)
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
itA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bme()
w=C.il_(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahC(d,a0,w)
return w}v=C.ikZ(d,a0)
if(v!=null){if(v===3)++d.f
C.ahC(d,a0,v)
return v}u=C.ikY(d,a0,a1)
if(u!=null)return new C.fX8(d,a1,a0).$1(u)
t=C.fuw(d,a0)
s=J.a7(t)
r=B.aI(s.h(t,"winStreak"))
q=r==null?null:A.i.M(r)
if(q==null)q=0
s=B.aI(s.h(t,"loseStreak"))
p=s==null?null:A.i.M(s)
if(p==null)p=0
o=new C.fXa(d,a1)
if(C.iex(d,a0)>0){n=o.$0()
C.izp(d,a0)
C.ahC(d,a0,n)
return n}if(q>=d.c){n=new C.fX9(d,a1).$0()
C.ahC(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahC(d,a0,n)
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
C.ahC(d,a0,e)
return e},
cf8(d){var w=0,v=B.j(x.y),u
var $async$cf8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.cf7(d),$async$cf8)
case 3:if(f){u=!0
w=1
break}u=B.cf7(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf8,v)},
ahC(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fuw(d,e),s=J.a7(t),r=B.aI(s.h(t,v)),q=r==null?null:A.i.M(r)
if(q==null)q=0
r=B.aI(s.h(t,u))
w=r==null?null:A.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fGq:function fGq(){},
fGr:function fGr(){},
fGs:function fGs(d,e){this.a=d
this.b=e},
fX8:function fX8(d,e,f){this.a=d
this.b=e
this.c=f},
fXa:function fXa(d,e){this.a=d
this.b=e},
fX9:function fX9(d,e){this.a=d
this.b=e},
apx:function apx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmm:function bmm(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.ba$=e
_.c=_.a=null},
dI8:function dI8(d){this.a=d},
dI7:function dI7(d){this.a=d},
dI9:function dI9(d){this.a=d},
dI6:function dI6(d,e){this.a=d
this.b=e},
aNP:function aNP(){},
Ow:function Ow(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgq:function cgq(){},
cgp:function cgp(){},
arS:function arS(d,e,f){this.c=d
this.d=e
this.a=f},
hdF(d,e,f){return B.ce(null,A.w.j(0.88),!0,null,new C.cgS(f,e),d,null,!0,!0,x.H)},
i0n(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.cb(r[0],null)
v=r[1]
u=B.cb(v,null)
t=B.cb(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iK[u-1]:v)+" "+B.v(t)+", "+B.v(w)}return s},
OE:function OE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cgS:function cgS(d,e){this.a=d
this.b=e},
bn6:function bn6(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7J:function e7J(){},
e7K:function e7K(){},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7M:function e7M(d,e){this.a=d
this.b=e},
aOq:function aOq(){},
hIy(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.blM(new C.fSc(w))
w=w.a
return w==null?null:w.c.a},
hIq(d){$.aU.x1$.push(new C.fS_(d))},
hIL(d){var w=$.tr().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hIy(w)==="GamePlayScreen")if(v&&w.c!=null&&w.q8())w.ec()},
hIK(d){C.hF1(d,0)},
hF1(d,e){var w,v
if(e>4)return
w=d==null?$.tr().gbl():d
if(w==null||w.c==null)return
v=C.hIy(w)
if(v==="GameCenterScreen")return
if(D.flA.q(0,v)&&w.q8()){w.ec()
$.aU.x1$.push(new C.fCI(w,e))}},
aSp(d,e,f){return B.eb(B.cf(new C.fTz(e,d,f)),e,!0)},
fSc:function fSc(d){this.a=d},
fS_:function fS_(d){this.a=d},
fRZ:function fRZ(d){this.a=d},
fCI:function fCI(d,e){this.a=d
this.b=e},
fTz:function fTz(d,e,f){this.a=d
this.b=e
this.c=f},
arW(d,e){var w=0,v=B.j(x.H),u
var $async$arW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.WP(e)
w=2
return B.b(B.arV(d,u),$async$arW)
case 2:B.a8N(d,u)
return B.h(null,v)}})
return B.i($async$arW,v)},
vf(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$vf=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.z4(g)
if(o.length===0){w=1
break}t=e==null?B.Mb(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.OF(o),$async$vf)
case 3:q=m
if(j!=null&&j.length!==0&&J.rq(q,new C.ch5(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.mZ(q,0,new B.jq(A.o.v(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.arW(o,q),$async$vf)
case 4:if(i==null||r==null||s)C.a8P(o).bF(new C.ch6(),x.S).eG(new C.ch7())
case 1:return B.h(u,v)}})
return B.i($async$vf,v)},
a8P(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hJN
m=B.z4(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.OF(m),$async$a8P)
case 3:t=f
s=J.cF(t)
if(!s.aS(t,new C.ch4())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a8P)
case 4:r=f
q=J.a7(r)
if(q.gL(r)!==s.gL(t)){w=1
break}for(p=!1,o=0;o<s.gL(t);++o)if(A.X.av(s.h(t,o).ak(),null)!==A.X.av(q.h(r,o).ak(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.arW(m,r),$async$a8P)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a8P,v)},
b2h(d){var w=0,v=B.j(x.S),u,t
var $async$b2h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hdI(d,!1),$async$b2h)
case 3:t=J
w=4
return B.b(C.arX(d,!1),$async$b2h)
case 4:u=t.dI(f,new C.ch3(new B.V(Date.now(),0,!1).bQ(-864e8))).gL(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2h,v)},
arX(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$arX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.z4(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.OF(r),$async$arX)
case 3:t=g
s=B.WP(t)
if(s.length!==J.ad(t))C.arW(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arX,v)},
irj(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bA(d).a,r=A.o.ar(s,6e7)
if(r<1)return"Just now"
w=A.o.ar(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ar(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.d5(d),12)===0?12:A.o.F(B.d5(d),12)
s=A.iK[B.bL(d)-1]
r=B.bD(d)===B.bD(t)?"":", "+B.bD(d)
w=A.a.b1(A.o.v(B.fM(d)),2,"0")
u=B.d5(d)<12?"AM":"PM"
return s+" "+B.bX(d)+r+" \xb7 "+v+":"+w+" "+u},
bDN(d){var w=A.i.ac(Math.abs(d),2).split(".")
return"$"+B.nR(w[0],B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fzr(),null)+"."+w[1]},
bHx(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bHx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.arX(e,!1),$async$bHx)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.hdI(e,!0).bF(new C.h5l(e),t).bF(new C.h5m(),t).eG(new C.h5n())
w=4
return B.b(B.bU(A.L,null,new C.h5o(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bHx)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bHx,v)},
hgJ(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.K(f.j(0.35),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bB,new B.dk(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.hD,w,w,w),1)},
e7O(d,e,f){var w=null,v=A.w.j(0.22),u=B.m(8),t=B.K(f.j(0.28),A.r,1)
return B.E(B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),new B.dk(A.dv,A.a5,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.D,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.P6,w,w,w),1)},
ch5:function ch5(d){this.a=d},
ch6:function ch6(){},
ch7:function ch7(){},
ch4:function ch4(){},
ch3:function ch3(d){this.a=d},
fzr:function fzr(){},
h5l:function h5l(d){this.a=d},
h5m:function h5m(){},
h5n:function h5n(){},
h5o:function h5o(d,e){this.a=d
this.b=e},
h5k:function h5k(d,e){this.a=d
this.b=e},
h5j:function h5j(d){this.a=d},
aeX:function aeX(d,e){this.c=d
this.a=e},
e7Q:function e7Q(){},
e7R:function e7R(){},
e7S:function e7S(){},
e7T:function e7T(d){this.a=d},
e7V:function e7V(){},
e7U:function e7U(d){this.a=d},
aeW:function aeW(d,e){this.c=d
this.a=e},
e7P:function e7P(){},
bHy(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hT(A.b6,!1,w,d,new C.h5r(j,i,h,g,e,f),null,A.eX,!1,x.H)},
h5r:function h5r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h5p:function h5p(d,e){this.a=d
this.b=e},
h5q:function h5q(d,e){this.a=d
this.b=e},
aCU:function aCU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
biC:function biC(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bv$=e
_.a9$=f
_.c=_.a=null},
doz:function doz(d,e){this.a=d
this.b=e},
doy:function doy(){},
afk:function afk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aNk:function aNk(){},
asH(d,e,f){return new C.b37(f,d,e,null)},
i12(d){var w=B.a(A.i.ac(d,2).split("."),x.s),v=B.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.nR(w[0],v,new C.ciQ(),null)
return A.d.aN(w,".")},
b2k(){var w=$.tV
if((w>0?$.tV=w-1:w)<=0)$.tV=0},
aiJ(d,e){var w=0,v=B.j(x.H),u
var $async$aiJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hlQ
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aiJ)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aiJ,v)},
b37:function b37(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciR:function ciR(d){this.a=d},
ciQ:function ciQ(){},
O8:function O8(){},
c6f:function c6f(){},
hl9(d){if(d>0)return"+"+d
return""+d},
hko(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fTA(d,e){var w=J.t(e,d)
if(w==null)w=B.fSm().h(0,d)
return w==null?90:w},
fyl(d,e){var w,v,u=B.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.I(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.I(0,d+v*7+3)
v=B.a([A.o.v(d)],x.s)
A.d.u(v,new B.k9(u,new C.fym(),u.$ti.k("k9<cj.E,q>")))
A.d.e0(v,e)
return v},
hDV(d,e,f){var w,v,u,t,s=B.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.I(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.I(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.u(t,B.pN(s,3,s.$ti.k("cj.E")))
A.d.e0(t,e)
return t},
imp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e_()
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
b1.push(new C.JH("Simplify \u221a("+t*s+"x^"+q+")",m,C.hDV(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.v(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JH("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fyl(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.JH("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fyl(g,b2)))}else b1.push(new C.JH("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fyl(k,b2)))}else if(u===3){e=b2.aw(11)-5
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
b1.push(new C.JH("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fyl(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JH("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hDV(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
ixt(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.du(B.a(d.split(""),u),x.bJ).hh(0)
for(w=0;w<12;++w){A.d.e0(t,A.cU)
v=A.d.hh(t)
if(v!==d)return v}return new B.du(t,x.bJ).hh(0)},
JH:function JH(d,e,f){this.a=d
this.b=e
this.c=f},
fym:function fym(){},
arf:function arf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFK:function aFK(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
e0i:function e0i(d){this.a=d},
e0j:function e0j(d){this.a=d},
e0k:function e0k(d){this.a=d},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0n:function e0n(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0p:function e0p(d,e){this.a=d
this.b=e},
arY:function arY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG_:function aG_(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e80:function e80(d,e,f){this.a=d
this.b=e
this.c=f},
e81:function e81(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7Z:function e7Z(d,e){this.a=d
this.b=e},
e7Y:function e7Y(d,e){this.a=d
this.b=e},
e8_:function e8_(d,e){this.a=d
this.b=e},
e7W:function e7W(d){this.a=d},
hYe(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bQ(36e8)
try{w=d.h(0,"start")
p=B.n5(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n5(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rT(w,u,t,s,r,q==null?null:J.k(q))},
a8X(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a8X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a8X)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d3(s,x.f)
p=B.cE(p,new C.chE(),p.$ti.k("M.E"),x.b1)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.chF())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[calendar-memory] load: "+B.v(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a8X,v)},
asd(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$asd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a8X(d),$async$asd)
case 2:r=g
q=J.cF(r)
q.bq(r,new C.chB(e))
q.I(r,e)
q.b0(r,new C.chC())
w=3
return B.b(B.az(),$async$asd)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("N<ak.E,ab<q,@>>")
q=B.B(new B.N(q,new C.chD(),s),s.k("ak.E"))
w=4
return B.b(u.aG("String","ngmy_helper_calendar_v1_"+t,A.X.av(q,null)),$async$asd)
case 4:return B.h(null,v)}})
return B.i($async$asd,v)},
i0A(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dI(d,new C.chG(v,v.bQ(B.dv(14,0,0,0,0,0).a)))
w=B.B(w,w.$ti.k("M.E"))
return w},
hve(d){var w,v,u,t,s,r,q,p,o,n,m=C.i0A(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.cV(m,0,B.dy(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.d5(s),12)===0?12:A.o.F(B.d5(s),12)
q=B.d5(s)>=12?"PM":"AM"
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
chE:function chE(){},
chF:function chF(){},
chB:function chB(d){this.a=d},
chC:function chC(){},
chD:function chD(){},
chG:function chG(d,e){this.a=d
this.b=e},
hYf(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n5(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
htw(d){var w=A.o.F(B.d5(d),12)===0?12:A.o.F(B.d5(d),12),v=B.d5(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bX(d)+" "+w+":"+A.a.b1(A.o.v(B.fM(d)),2,"0")+" "+v},
VY(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$VY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$VY)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aW(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.X.aP(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d3(s,x.f)
p=B.cE(p,new C.c9n(),p.$ti.k("M.E"),x.Q)
p=B.B(p,B.a4(p).k("M.E"))
A.d.b0(p,new C.c9o())
u=p
w=1
break}catch(n){r=B.aa(n)
$.am.$1("[call-memory] load: "+B.v(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$VY,v)},
b0C(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b0C=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b0C)
case 2:u=g
t=B.cV(e,0,B.dy(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,ab<q,@>>")
r=B.B(new B.N(t,new C.c9l(),r),r.k("ak.E"))
w=3
return B.b(u.aG("String","ngmy_call_memory_v1_"+s,A.X.av(r,null)),$async$b0C)
case 3:return B.h(null,v)}})
return B.i($async$b0C,v)},
b0D(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b0D=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.S(x.N,x.Q)
o=J
w=2
return B.b(C.VY(d),$async$b0D)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gP(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=B.B(new B.b8(p,u),u.k("M.E"))
A.d.b0(q,new C.c9m())
w=5
return B.b(C.b0C(d,q),$async$b0D)
case 5:return B.h(null,v)}})
return B.i($async$b0D,v)},
c9p(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c9p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.VY(d),$async$c9p)
case 3:t=s.dI(g,new C.c9q(e.bQ(-72e8),e.bQ(72e8)))
t=B.B(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9p,v)},
htx(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWL()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.az(s,0,177)+"\u2026":s)+"\n"}}r=r.gL(d)>e?u+("\u2026 and "+(r.gL(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
itk(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c0(B.bD(p),B.bL(p),B.bX(p),0,0,0,0,0)
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
hKi(d){var w=B.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rU:function rU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c9n:function c9n(){},
c9o:function c9o(){},
c9l:function c9l(){},
c9m:function c9m(){},
c9q:function c9q(d,e){this.a=d
this.b=e},
hvh(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lU(t,w,v,u==null?null:J.k(u))},
i0G(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b9(v,new C.chO(),x.bP)
v=B.B(v,v.$ti.k("ak.E"))}if(v==null)v=D.dqO
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.iC(r,w,v,u,t,typeof d.h(0,s)=="number"?A.i.M(B.dF(d.h(0,s))):0)},
i0F(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.ieL(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.i.M(B.dF(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.i.M(B.dF(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b9(s,new C.chM(),x.u)
s=B.B(s,s.$ti.k("ak.E"))}return new C.iq(p,w,v,u,s==null?D.aDA:s,t)},
ieM(d){var w,v,u,t=B.J([F.zU,"investments",A.nV,"games",A.jz,"loans",A.hH,"withdrawals",A.jT,"deposits",A.l7,"civic",A.kl,"store",A.r7,"jobs",A.nU,"refunds",A.eY,"account",A.lw,"music",A.zK,"help"],x.dk,x.N)
for(w=new B.cd(t,B.a4(t).k("cd<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
ieL(d){switch(d){case"investments":return F.zU
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
nk(d){var w=B.a([new C.lU("text",d,null,null)],x.a)
return w},
aiF(){var w=null,v=x.v
return B.a([new C.iq("investments","Investments",F.zU,4280468830,B.a([new C.iC("inv1","How do I buy an investment plan?",C.nk("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.iC("inv2","When do I get paid from my plan?",C.nk("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.iC("inv3","Can I have more than one plan?",C.nk("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.iq("games","Games",A.nV,4287323382,B.a([new C.iC("gam1","How do NGMY games work?",C.nk("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.iC("gam2","Why did my game payout change?",C.nk("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.iq("loans","Loans",A.jz,4294538006,B.a([new C.iC("loan1","How do I apply for a loan?",C.nk("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.iC("loan2","What is the repayment period?",C.nk("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.iq("withdrawals","Withdrawals",A.hH,4282090230,B.a([new C.iC("wd1","How do I withdraw money?",C.nk("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.iC("wd2","Why is my withdrawal pending?",C.nk("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.iq("deposits","Deposits",A.jT,4279548070,B.a([new C.iC("dep1","How do I deposit funds?",C.nk("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.iC("dep2","How long until my deposit posts?",C.nk("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.iq("civic","Civic Registry",A.l7,4289170426,B.a([new C.iC("civ1","What is Civic Registry?",C.nk("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.iC("civ2","What does \u201cmissed\u201d mean on my profile?",C.nk("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.iq("store","NGMY Store",A.kl,4293675161,B.a([new C.iC("sto1","How do I buy from NGMY Store?",C.nk("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.iC("sto2","How do I sell in the store?",C.nk("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.iq("jobs","Jobs & Creator",A.r7,4293548044,B.a([new C.iC("job1","How do I find jobs?",C.nk("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.iC("job2","How do I post a job?",C.nk("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.iq("refunds","Refunds",A.nU,4293870660,B.a([new C.iC("ref1","Can I get a refund?",C.nk("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.iC("ref2","How long do refunds take?",C.nk("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.iq("account","Account",A.eY,4281908728,B.a([new C.iC("acc1","How do I update my profile?",C.nk("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.iC("acc2","I forgot my password \u2014 what now?",C.nk("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.iq("music","Music Charts",A.lw,4290807036,B.a([new C.iC("mus1","What are Music Charts?",C.nk("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.iC("mus2","How do I upload music?",C.nk("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.iq("help","Help Center",A.zK,4279080072,B.a([new C.iC("hlp1","Where can I get live help?",C.nk("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.iC("hlp2","How do daily Helper limits work?",C.nk("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hvi(d){var w,v=J.a7(d),u=v.gau(d)
if(u)return C.aiF()
v=v.dO(d,new C.chR(),x.i)
w=B.B(v,v.$ti.k("ak.E"))
A.d.b0(w,new C.chS())
return w.length===0?C.aiF():w},
hvj(d){var w=J.b9(d,new C.chT(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
return B.J(["categories",w,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
asf(d){return C.i0H(d)},
i0H(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$asf=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$asf)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_kb_v1",A.X.av(C.hvj(d),null)),$async$asf)
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
return B.i($async$asf,v)},
chQ(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$chQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chQ)
case 7:r=e
q=B.aW(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aiF()
u=l
w=1
break}p=A.X.aP(0,q,null)
if(!x.f.b(p)){l=C.aiF()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.aiF()
u=l
w=1
break}n=C.hvi(o)
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
l=C.aiF()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chQ,v)},
b2G(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b2G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2G)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f4("ngmy_helper_kb",null,!1,A.bN),$async$b2G)
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
return B.i($async$b2G,v)},
b2H(d){return C.i0I(d)},
i0I(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b2H=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ca(),$async$b2H)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hS("ngmy_helper_kb",d,!1,!1,A.cS,null),$async$b2H)
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
return B.i($async$b2H,v)},
asg(){var w=0,v=B.j(x.I),u,t,s,r
var $async$asg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chQ(),$async$asg)
case 3:s=e
w=4
return B.b(C.b2G(),$async$asg)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hvi(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.asf(t),$async$asg)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asg,v)},
chU(d){var w=0,v=B.j(x.y),u
var $async$chU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asf(d),$async$chU)
case 3:u=C.b2H(C.hvj(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chU,v)},
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
chP:function chP(){},
chO:function chO(){},
iq:function iq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chN:function chN(){},
chM:function chM(){},
chR:function chR(){},
chS:function chS(){},
chT:function chT(){},
bc2:function bc2(d){this.a=d},
WX:function WX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGb:function aGb(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
ec6:function ec6(){},
ec7:function ec7(){},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d){this.a=d},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebL:function ebL(d){this.a=d},
ebM:function ebM(d,e,f){this.a=d
this.b=e
this.c=f},
ebJ:function ebJ(d){this.a=d},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ec_:function ec_(d){this.a=d},
ebS:function ebS(d){this.a=d},
ebT:function ebT(d,e,f){this.a=d
this.b=e
this.c=f},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e,f){this.a=d
this.b=e
this.c=f},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e){this.a=d
this.b=e},
ebU:function ebU(d,e,f){this.a=d
this.b=e
this.c=f},
ebO:function ebO(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ec5:function ec5(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec3:function ec3(){},
ec2:function ec2(d,e){this.a=d
this.b=e},
QJ:function QJ(d,e){this.c=d
this.a=e},
be0:function be0(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cXs:function cXs(d){this.a=d},
cXr:function cXr(d,e){this.a=d
this.b=e},
cXp:function cXp(d,e){this.a=d
this.b=e},
cXt:function cXt(d){this.a=d},
cXq:function cXq(d,e){this.a=d
this.b=e},
cXo:function cXo(d,e){this.a=d
this.b=e},
cXu:function cXu(d){this.a=d},
cXv:function cXv(d,e){this.a=d
this.b=e},
a1w:function a1w(d,e,f){this.c=d
this.d=e
this.a=f},
aId:function aId(){this.d=$
this.c=this.a=null},
f4q:function f4q(d,e){this.a=d
this.b=e},
f4r:function f4r(d){this.a=d},
f4x:function f4x(){},
f4w:function f4w(d,e){this.a=d
this.b=e},
f4v:function f4v(d,e){this.a=d
this.b=e},
f4s:function f4s(d,e){this.a=d
this.b=e},
f4u:function f4u(d,e,f){this.a=d
this.b=e
this.c=f},
f4t:function f4t(d,e,f){this.a=d
this.b=e
this.c=f},
a1v:function a1v(d,e){this.c=d
this.a=e},
aIc:function aIc(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f4m:function f4m(d,e){this.a=d
this.b=e},
f4k:function f4k(d){this.a=d},
f4l:function f4l(d,e){this.a=d
this.b=e},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4p:function f4p(d){this.a=d},
f4n:function f4n(d,e){this.a=d
this.b=e},
i0D(d){var w=new B.N(d,new C.chJ(),B.T(d).k("N<1,q>")).aN(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
chK(d,e,f){return C.i0E(d,e,f)},
i0E(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$chK=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Lf([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.rm(B.nn(b3),C.i0D(b6)+"\n\nAdmin instruction:\n"+b4,A.i7,null,null),$async$chK)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Lf([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d2(s,"```"))s=A.a.el(J.hoR(s,B.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.af("\\s*```$",!0,!1,!1,!1),"")
r=A.X.aP(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Lf([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Lf([a3,"AI did not return any categories.",p,o])
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
J.c4(a0,C.hvh(B.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c4(a0,new C.lU("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.v(f)
b1=J.t(e,"question")
J.c4(g,new C.iC("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.i0C(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?A.i.M(B.dF(J.t(j,"colorValue"))):4284773515
J.c4(m,new C.iq(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.Lf([m,null,p,a3])
w=1
break}catch(b7){a2=B.aa(b7)
a3=B.v(a2)
a4=B.a([],x.Y)
u=new B.Lf([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chK,v)},
i0C(d){switch(d){case"investments":return F.zU
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
irI(d,e,f){var w,v,u,t=B.bs(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bk(t,new C.fU8(f))
if(w>=0){t[w]=J.fl(e).cR0(f,t[w].f)
return t}}A.d.u(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bgh(u)
return t},
chJ:function chJ(){},
fU8:function fU8(d){this.a=d},
dem:function dem(d){this.a=d},
WY:function WY(d,e,f){this.c=d
this.d=e
this.a=f},
aGd:function aGd(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
ecH:function ecH(){},
ecn:function ecn(d,e){this.a=d
this.b=e},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecr:function ecr(d,e,f){this.a=d
this.b=e
this.c=f},
ecj:function ecj(){},
eck:function eck(){},
ecl:function ecl(){},
ecm:function ecm(){},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecy:function ecy(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecD:function ecD(){},
ecE:function ecE(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
i8E(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new B.GB(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
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
dsS:function dsS(d){this.a=d},
aDO:function aDO(d,e){this.a=d
this.b=e},
ase:function ase(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGc:function aGc(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
ecg:function ecg(d,e){this.a=d
this.b=e},
ech:function ech(d,e){this.a=d
this.b=e},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d){this.a=d},
eci:function eci(){},
ecb:function ecb(d,e){this.a=d
this.b=e},
eca:function eca(d,e){this.a=d
this.b=e},
ecd:function ecd(){},
ecf:function ecf(){},
ece:function ece(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecc:function ecc(d,e){this.a=d
this.b=e},
aDM:function aDM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
adr:function adr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b2F:function b2F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chL:function chL(d){this.a=d},
adi:function adi(d,e,f){this.c=d
this.d=e
this.a=f},
cQK:function cQK(d){this.a=d},
cQL:function cQL(){},
cQM:function cQM(d){this.a=d},
aDN:function aDN(d,e,f){this.c=d
this.d=e
this.a=f},
bka:function bka(){this.c=this.a=this.d=null},
dsT:function dsT(d,e){this.a=d
this.b=e},
dsV:function dsV(d,e){this.a=d
this.b=e},
dsU:function dsU(d){this.a=d},
i2a(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
i2b(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
i29(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hDQ(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.fy3(),x.cc).gL(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
isY(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.i29(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
at4:function at4(d,e){this.a=d
this.b=e},
JM:function JM(d,e){this.a=d
this.b=e},
rZ:function rZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fy3:function fy3(){},
ash:function ash(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGe:function aGe(d,e,f,g,h,i,j){var _=this
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
ecV:function ecV(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecO:function ecO(){},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecR:function ecR(){},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecT:function ecT(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ed1:function ed1(d,e){this.a=d
this.b=e},
ecZ:function ecZ(){},
ed_:function ed_(d,e){this.a=d
this.b=e},
ed0:function ed0(d,e){this.a=d
this.b=e},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e){this.a=d
this.b=e},
ed3:function ed3(d){this.a=d},
ed2:function ed2(d){this.a=d},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ed4:function ed4(d,e){this.a=d
this.b=e},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecI:function ecI(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
aOy:function aOy(){},
chW(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$chW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.Us
w=1
break}w=3
return B.b(B.az(),$async$chW)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aW(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Us
w=1
break}try{q=B.a1(x.f.a(A.X.aP(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WZ(p,o,n,q)
w=1
break}catch(l){s=B.aa(l)
$.am.$1("[helper-perms] load: "+B.v(s))
u=D.Us
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$chW,v)},
asi(d,e){var w=0,v=B.j(x.H),u
var $async$asi=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$asi)
case 4:w=3
return B.b(g.aG("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.X.av(e.ak(),null)),$async$asi)
case 3:case 1:return B.h(u,v)}})
return B.i($async$asi,v)},
chV(d){var w=0,v=B.j(x.gp),u,t
var $async$chV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.WZ(!0,!0,!0,!0)
w=3
return B.b(C.asi(d,t),$async$chV)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chV,v)},
hKj(d){var w=A.a.i(d.toLowerCase()),v=B.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hKh(d){var w=B.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WZ:function WZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHC(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bHC=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b2A(h),$async$bHC)
case 3:if(j){w=1
break}w=4
return B.b(C.asa(h),$async$bHC)
case 4:if(d.e==null){w=1
break}t=B.qY(d,!0)
t.toString
s=B.dm()
s.b=B.pG(new C.h6i(g,e,f,s),!1,!1)
t.me(0,s.bm())
case 1:return B.h(u,v)}})
return B.i($async$bHC,v)},
h6i:function h6i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h6h:function h6h(d){this.a=d},
a0g:function a0g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDc:function aDc(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dqd:function dqd(d){this.a=d},
dqe:function dqe(d,e,f){this.a=d
this.b=e
this.c=f},
dqj:function dqj(){},
dqi:function dqi(d){this.a=d},
dqf:function dqf(d){this.a=d},
dqg:function dqg(){},
dqh:function dqh(d){this.a=d},
aNp:function aNp(){},
i1E(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
i1D(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asQ(d){return C.i1B(d)},
i1B(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bN),$async$asQ)
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
return B.i($async$asQ,v)},
b3v(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b3v=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.i1E(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$b3v)
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
return B.i($async$b3v,v)},
hvK(d){var w,v=A.a.i(d)
if(A.a.X(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aX(v,14))
return w.length===0?null:w}return null},
i1C(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.aS(e,new C.cjK(A.a.i(d.toLowerCase()),w))},
hvL(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qk(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.qk(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.qk(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qk(!1,0,"Verification code does not match this deposit.")
if(!C.i1C(e,d,w))return new C.qk(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
hdY(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.e_V
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aI(t.h(d,u))
return new C.OV(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aI(t.h(d,u))
return new C.OV(!0,!1,!0,!1)}B.aI(t.h(d,u))
return new C.OV(!0,!1,!1,!1)},
cjQ(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$cjQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hvK(d)
if(s==null){u=D.Uu
w=1
break}w=3
return B.b(C.asQ(s),$async$cjQ)
case 3:t=g
if(t==null){u=D.Uu
w=1
break}u=C.hdY(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjQ,v)},
b3x(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b3x=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3v(d),$async$b3x)
case 3:s=g
if(s==null||s.length===0){u=D.Uu
w=1
break}w=4
return B.b(C.asQ(s),$async$b3x)
case 4:t=g
if(t==null){u=D.Uu
w=1
break}u=C.hdY(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3x,v)},
cjR(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$cjR=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b3v(d),$async$cjR)
case 3:t=j
if(t==null||t.length===0){u=new C.qk(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Xh(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjR,v)},
Xh(d,e,f,g,h){return C.i1F(d,e,f,g,h)},
i1F(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xh=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hvK(a4)
if(a0==null){u=new C.qk(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.asQ(a0),$async$Xh)
case 3:k=a8
if(k==null){u=new C.qk(!1,0,y.m)
w=1
break}j=C.hdY(k,a5)
if(j.b){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qk(!1,0,y.u)
w=1
break}if(j.c){u=new C.qk(!1,0,y.j)
w=1
break}i=C.hvL(a2,a3,a5,k,a6)
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
return B.b(B.f4("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bN),$async$Xh)
case 8:p=a8
if(p==null){u=new C.qk(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.qk(!1,0,"This deposit code was already used.")
w=1
break}o=C.hvL(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dH(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hS("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cS,null),$async$Xh)
case 9:n=J.t(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hS("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.J(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cS,null),$async$Xh)
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
return B.i($async$Xh,v)},
OV:function OV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qk:function qk(d,e,f){this.a=d
this.b=e
this.c=f},
cjK:function cjK(d,e){this.a=d
this.b=e},
cjY(d,e){var w
B.hkL(d,e,!1)
B.rl(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bx(!0,!1,d.d,w)},
a9j(d,e){if(d==null)return!1
return B.bD(d)===e.gck()&&B.bL(d)===e.gcg()&&B.bX(d)===e.gcv()},
i1N(d){var w=B.d5(d)*60+B.fM(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hvS(d){if(B.d5(d)>=12)return!1
if(B.lA(d)===6||B.lA(d)===7)return!1
return!0},
ck1(d){var w=d.c?d.bU():d
return w.cZ(B.c0(B.bD(w),B.bL(w),B.bX(w),12,0,0,0,0))},
he1(d,e){var w,v,u,t=d.gDb()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9j(d.fx,e)&&d.fy>0.0001)return A.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.ck1(w))return 0
v=B.c0(e.gck(),e.gcg(),e.gcv(),12,0,0,0,0)
if(!e.cZ(v))return t
if(!e.cb(w))return 0
u=A.o.ar(v.bA(w).a,1000)
if(u<=0)return t
return A.i.D(t*(A.o.D(A.o.ar(e.bA(w).a,1000),0,u)/u),0,t)},
he0(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9j(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.aS(e,new C.cjX(s))&&C.ck1(t)){r=d.gDb()
v=r>0
if(v){q=new B.d9(s,d.a,r,A.hc,A.fz,"Clock-in daily earnings (local)",null,null,A.cx,p)
C.cjY(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9j(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9j(o,p)&&!C.ck1(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cjX:function cjX(d){this.a=d},
igX(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gH(v.split("@"))
return"Member"},
iyl(d,e,f,g,h,i){return B.hF(d,new C.asR(f,e,i,g,h,null),!0,null,x.H)},
hA7(d){var w,v,u=d.c?d.bU():d,t=B.d5(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bX(u)+"/"+B.bD(u)+" \xb7 "+w+":"+A.a.b1(A.o.v(B.fM(u)),2,"0")+" "+v},
hI2(d){var w=d.x
if(w===A.dI)return"Processing"
if(w===A.kP)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ipg(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fY)return"Deposit"
if(w===A.f4)return"Withdrawal"
return v.length!==0?v:w.b},
igB(d){var w=d.d,v=w===A.fY||w===A.ph||w===A.hc||w===A.kQ,u=d.x
if(u===A.dI)return w===A.f4?-d.c:0
if(u!==A.cx)return 0
w=d.c
return v?w:-w},
ipP(d,e){var w,v,u,t,s,r,q=B.B(d,x.o)
A.d.b0(q,new C.fPW())
w=B.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.I)(q),++t,v=r){s=q[t]
r=v-C.igB(s)
if(r<0)r=0
w.n(0,s.a,new B.brJ(v,r))}return w},
asR:function asR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGB:function aGB(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
erm:function erm(d){this.a=d},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
erL:function erL(d,e){this.a=d
this.b=e},
erM:function erM(){},
erN:function erN(d){this.a=d},
erO:function erO(){},
erP:function erP(d){this.a=d},
erQ:function erQ(d,e,f){this.a=d
this.b=e
this.c=f},
erR:function erR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erG:function erG(d,e){this.a=d
this.b=e},
ern:function ern(d,e,f){this.a=d
this.b=e
this.c=f},
erH:function erH(){},
erI:function erI(){},
erJ:function erJ(d){this.a=d},
erK:function erK(){},
err:function err(d,e){this.a=d
this.b=e},
ers:function ers(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erA:function erA(){},
erx:function erx(d){this.a=d},
ery:function ery(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erC:function erC(d,e,f){this.a=d
this.b=e
this.c=f},
erD:function erD(d){this.a=d},
erF:function erF(d){this.a=d},
erE:function erE(d){this.a=d},
ert:function ert(d){this.a=d},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
erV:function erV(){},
erW:function erW(){},
es_:function es_(d){this.a=d},
erT:function erT(d){this.a=d},
es0:function es0(d){this.a=d},
erS:function erS(d){this.a=d},
es1:function es1(d){this.a=d},
erX:function erX(d){this.a=d},
erY:function erY(d){this.a=d},
erZ:function erZ(d){this.a=d},
erU:function erU(d){this.a=d},
erq:function erq(d){this.a=d},
erp:function erp(d){this.a=d},
ero:function ero(d){this.a=d},
erw:function erw(d,e){this.a=d
this.b=e},
erv:function erv(d,e){this.a=d
this.b=e},
aE_:function aE_(d,e,f,g,h,i,j,k,l,m){var _=this
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
duD:function duD(){},
duE:function duE(){},
duF:function duF(d,e,f){this.a=d
this.b=e
this.c=f},
duC:function duC(d){this.a=d},
duG:function duG(d,e){this.a=d
this.b=e},
duB:function duB(d){this.a=d},
aDZ:function aDZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkU:function bkU(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
duw:function duw(d){this.a=d},
dux:function dux(d){this.a=d},
duy:function duy(d){this.a=d},
duz:function duz(){},
duA:function duA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
duv:function duv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
duu:function duu(d){this.a=d},
beu:function beu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bet:function bet(d,e,f){this.b=d
this.d=e
this.a=f},
bes:function bes(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aE0:function aE0(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aE1:function aE1(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
duX:function duX(){},
duY:function duY(){},
duZ:function duZ(){},
duJ:function duJ(d){this.a=d},
duI:function duI(d,e){this.a=d
this.b=e},
duH:function duH(d,e){this.a=d
this.b=e},
duU:function duU(d,e){this.a=d
this.b=e},
duW:function duW(d,e){this.a=d
this.b=e},
duV:function duV(d,e){this.a=d
this.b=e},
duT:function duT(){},
duS:function duS(d){this.a=d},
duR:function duR(){},
duM:function duM(d){this.a=d},
duN:function duN(){},
duO:function duO(d){this.a=d},
duP:function duP(d){this.a=d},
duL:function duL(){},
duQ:function duQ(d){this.a=d},
duK:function duK(d){this.a=d},
bdU:function bdU(d){this.a=d},
fPW:function fPW(){},
bz5:function bz5(d,e){this.b=d
this.a=e},
aNF:function aNF(){},
bB4:function bB4(){},
ilT(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bq(d,new C.fHD(v,g))
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
aRR(d){var w,v=J.a7(d),u=B.aI(v.h(d,"matchesTotal")),t=u==null?null:A.i.M(u)
if(t==null)t=1
v=B.aI(v.h(d,"matchesPlayed"))
w=v==null?null:A.i.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
ix_(d,e){var w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.h0j(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiU(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(C.aRR(u)<=0){t=J.cF(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ioz(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aRR(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aRR(d)>0},
ioy(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=B.aI(i.h(d,"matchesTotal")),g=h==null?null:A.i.M(h)
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
ilS(d,e){var w
C.aiU(e)
w=B.T(e).k("Y<1>")
w=B.B(new B.Y(e,new C.fHC(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uA(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gP(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
iim(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hkk(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.iim(x.f.b(u)?B.a1(u,r,q):B.S(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bGq(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bGq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bGq)
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
return B.i($async$bGq,v)},
bFs(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bFs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bGq(),$async$bFs)
case 3:u=t.hkk(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFs,v)},
M1(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$M1=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hFc.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bA(p)
t=t.a>B.dv(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hFc.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.S7(A.ch,q),$async$M1)
case 5:case 4:s=$.hFb.h(0,q)
if(s==null){u=C.uA(e,q)
w=1
break}r=C.uA(B.bFz(e,B.a([s],x._)),q)
if(r!=null)B.hn5(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$M1,v)},
ixe(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
return}}},
ieS(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=B.iB(8,new C.fvF(r),!0,q)
return B.J(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.J(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ilR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ag())
r=C.ieS(u,f)
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
ixc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a7(u)
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
hn4(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ag())
return}}},
fZJ(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fZJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiU(d)
t=$.hjz
if(t==null)s=$.hjz=B.S7(A.ch,null).fw(new C.fZK())
else s=t
w=3
return B.b(s,$async$fZJ)
case 3:r=f
if(r==null){u=B.bs(new B.N(d,new C.fZL(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bFz(d,r)
A.d.a8(d)
A.d.u(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZJ,v)},
aiV(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aiV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aiU(d)
t=B.T(d).k("N<1,ab<q,@>>")
t=B.B(new B.N(d,new C.fXl(),t),t.k("ak.E"))
w=3
return B.b(B.S7(t,null),$async$aiV)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bFz(d,s)
A.d.a8(d)
A.d.u(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiV,v)},
aSO(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aSO=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.hn4(d,e,f)
t=C.uA(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.S7(B.a([B.a1(t,x.N,x.z)],x._),e),$async$aSO)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uA(s,e)
if(r!=null)B.hn5(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSO,v)},
itI(d,e,f){var w
C.hn4(d,e,f)
w=$.hjn.h(0,e)
if(w!=null)w.a1(0)
$.hjn.n(0,e,B.cy(A.lT,new C.fXm(e,d)))},
hdJ(d,e){return new C.b2i(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fHD:function fHD(d,e){this.a=d
this.b=e},
h0j:function h0j(d){this.a=d},
fHC:function fHC(d){this.a=d},
fvF:function fvF(d){this.a=d},
fZK:function fZK(){},
fZL:function fZL(){},
fXl:function fXl(){},
fXm:function fXm(d,e){this.a=d
this.b=e},
b2i:function b2i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
ixI(d,e,f){return B.bU(A.L,null,new C.h1v(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
h1v:function h1v(d,e){this.a=d
this.b=e},
a13:function a13(d,e,f){this.c=d
this.d=e
this.a=f},
aGp:function aGp(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
em_:function em_(d){this.a=d},
em2:function em2(d){this.a=d},
em3:function em3(d){this.a=d},
em1:function em1(d){this.a=d},
em4:function em4(d){this.a=d},
em5:function em5(d,e){this.a=d
this.b=e},
em0:function em0(d,e){this.a=d
this.b=e},
is5(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.j4
w=t.toLowerCase()
v=B.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.j4
v=Date.now()
u=C.ihF(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kJ("calendar",B.J(["title",C.ihE(t,w),"start",u.ag(),"end",u.bQ(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ihE(d,e){var w,v,u,t,s,r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hG1(A.a.i(t))}s=B.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hG1(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hG1(d){var w
if(d.length===0)return d
w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fGA(),B.T(w).k("N<1,q>")).aN(0," ")},
ihF(d,e){var w,v,u,t,s,r,q,p,o=B.c0(B.bD(e),B.bL(e),B.bX(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bQ(864e8)
else if(!A.a.q(d,"today"))for(w=D.aKM.gdQ(D.aKM),w=w.gae(w);w.C();){v=w.gP(w)
u=v.a
if(B.cT(d,u,0)){t=C.igA(o,v.b)
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
igA(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.lA(w)===e){u=!0
if(v<=0){t=d.bQ(36e8)
s=w.a
if(s>=t.gbt())u=s===t.gbt()&&w.b<t.gcG()}}else u=!1
if(u)return w
w=w.bQ(r)}return d.bQ(r)},
fGA:function fGA(){},
is6(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
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
q=C.idG(w,j)
if(q==null||q.length===0)return A.j4
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
return B.a([new B.kJ("call",B.J(["name",q],t,t))],x.Z)}return A.j4},
idG(d,e){var w,v,u,t,s,r,q=[B.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.il5(t)}r=B.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
il5(d){var w=A.a.fj(d,B.af("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fGz(),B.T(w).k("N<1,q>")).aN(0," ")},
fGz:function fGz(){},
hKq(d){var w=new B.N(d,new C.h_1(),B.T(d).k("N<1,ab<q,@>>")).c0(0,new C.h_2())
w=B.B(w,w.$ti.k("M.E"))
return w},
h_1:function h_1(){},
h_2:function h_2(){},
is9(d,e){var w,v,u,t,s,r,q,p,o
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
return B.a([new B.kJ("send_email",t)],x.Z)},
irf(d,e){var w
if(e)return d
w=J.dI(d,new C.fTk())
w=B.B(w,w.$ti.k("M.E"))
return w},
fTk:function fTk(){},
itF(d){switch(d){case"blackjack_vegas":return D.e4a
case"roulette_euro":return D.e3V
case"slots_jackpot":return D.e41
case"poker_texas":return D.e44
case"chess_royale":return D.e3W
case"connect_four_pro":return D.e3X
case"domino_block":return D.e3Z
case"plinko_prizes":return D.e46
case"spin_wheel":return D.e43
case"baccarat_punto":return D.e3Y
case"craps_table":return D.e45
case"casino_war":return D.e4_
case"bingo_live":return D.e42
case"solitaire_klondike":return D.e49
case"backgammon_pro":return D.e3U
case"billiards_snooker":return D.e47
case"profit_solve":return D.e48
default:return D.e40}},
fXc(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.K(A.aQ,A.r,1.5)
u=B.a([new B.ac(0,A.H,A.w.j(0.35),A.et,6)],x.V)
return B.o(p,B.as(B.W(A.nR,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.n(p,p,v,w,u,D.cbY,A.m),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bE:A.a_
w=B.m(8)
v=B.K(A.bn,A.r,1)
u=B.a([new B.ac(0,A.H,A.w.j(0.28),A.et,6)],x.V)
return B.o(p,B.x(B.a([new B.D(D.bKm,B.c(D.cKK[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b_,B.as(B.c(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b_],x.p),A.D,p,A.e,A.h,0,A.p),A.f,p,p,new B.n(A.hS,p,v,w,u,p,A.m),p,74,p,p,p,p,p,52)},
iuV(d,e){var w,v=null,u=B.m(18),t=B.K(A.aQ,A.r,3),s=B.a([new B.ac(0,A.H,A.aD.j(0.5),A.J,20)],x.V),r=B.T(e).k("N<1,h8>")
r=B.B(new B.N(e,new C.fZs(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.o(v,B.x(B.a([D.fS6,A.af,B.A(r,A.l,v,A.b9,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.n(v,v,t,u,s,D.cch,A.m),v,v,v,v,H.anL,v,v,v),A.aB,B.db(A.atT,v,D.fSK,d,B.bn(A.aQ,v,v,v,A.dz,v,A.a1Z,v,v,v,v,v))],w),A.l,v,A.e,A.h,0,A.p)},
pD:function pD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
btT:function btT(d,e){this.b=d
this.a=e},
fZs:function fZs(){},
i2m(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.c1(8,0,!1,w)
u=B.c1(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=B.c1(7,0,!1,w)
return new C.ath(B.S(p,x.z),n,u,s,r,t,q,new B.at(A.ax,$.ax()))},
imr(d,e,f,g,h){var w=new C.fJo(f,h)
switch(d){case"checkers_deluxe":return C.ice(h,g,e,w)
case"tic_tac_go":return C.ilj(h,g,e,w)
case"blackjack_vegas":return C.ibx(h,g,e,new C.fJi(w))
case"roulette_euro":return C.ijy(h,g,e,new C.fJj(w))
case"slots_jackpot":return C.iko(h,g,e,new C.fJk(w))
case"billiards_snooker":return C.iip(h,g,e,new C.fJl(w))
case"connect_four_pro":return C.icB(h,g,e,w)
case"profit_solve":return C.iis(h,g,e,new C.fJm(w))
default:return C.ica(d,h,g,e,new C.fJn(w))}},
ice(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),u=B.m(12),t=B.K(D.a_l,A.r,8),s=B.a([new B.ac(0,A.H,A.w.j(0.4),A.J,16)],x.V)
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.as(new B.fG(1,B.o(w,B.bw(B.m(6),B.iA(!0,w,w,A.y,D.fqu,new C.fsG(d,e,f,g),64,w,A.e0,A.ah,!1),A.aq),A.f,w,w,new B.n(w,w,t,u,s,w,A.m),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
ilj(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),w),B.E(B.as(new B.fG(1,B.cf(new C.fGW(d,e,f,g)),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
ibx(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.xS,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.u(s,new B.N(q,new C.frY(),B.T(q).k("N<1,w>")))
else A.d.u(s,B.a([C.fXc(q[0],!1),A.bm,C.fXc(0,!0)],t))
s=B.A(s,A.l,v,A.b9,A.h,0,v,v)
r=B.c("Total: "+d.a4Y(d.ay),v,v,v,v,v,v,D.fMW,v,v,v)
q=d.ay
w=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.frZ(),w),w.k("ak.E"))
q=B.c_(A.fM,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eI,u,v),D.fZi,A.am,s,A.aB,D.h63,r,A.am,q,A.b_,B.A(B.a([B.E(B.bJ(D.fTd,v,d.CW?v:new C.fs_(d,e,f,g),v),1),A.ab,B.E(B.bJ(D.h8y,v,new C.fs0(d,e,f,g),v),1)],t),A.l,v,A.e,A.h,0,v,v)],t),A.l,v,A.e,A.h,0,A.p)},
ijy(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),u=d.cx,t=B.a([new B.ac(0,A.H,A.w.j(0.45),A.cz,16)],x.V)
t=B.a([new B.D(A.eI,v,w),B.o(w,B.b4(w,w,w,new C.btT(u,w),A.az),A.f,w,w,new B.n(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jx,B.c("Result: "+B.v(v),w,w,w,w,w,w,D.fzQ,w,w,w),w))
t.push(A.af)
t.push(B.c_(A.fM,B.iB(6,new C.fDP(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
iko(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),u=d.db,t=B.T(u).k("N<1,q>")
u=B.B(new B.N(u,new C.fFM(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eI,v,w),C.iuV(new C.fFN(d,e,f,g),u)],x.p),A.l,w,A.e,A.h,0,A.p)},
iip(d,e,f,g){var w=null,v=B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),u=B.m(20),t=B.K(A.iT,A.r,12),s=x.V,r=B.a([new B.ac(0,A.H,A.w.j(0.45),A.dm,18)],s),q=x.p
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.o(w,new B.an(A.a0,w,A.ad,A.t,B.a([B.ao(w,B.o(w,w,A.f,w,w,D.b8W,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ao(28,B.o(w,w,A.f,w,w,A.ag1,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.eK(A.z,d.dx,B.o(w,w,A.f,w,w,new B.n(A.aQ,w,w,B.m(2),B.a([new B.ac(0,A.H,A.w.j(0.3),A.J,4)],s),w,A.m),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.n(w,w,t,u,r,D.eGG,A.m),w,w,w,A.f7,w,w,w,w),1),B.l0(A.bj,w,w,1,0,new C.fCE(d,f),d.dy),B.bJ(D.fYj,w,new C.fCF(d,e,g,f),w)],q),A.l,w,A.e,A.h,0,A.p)},
icB(d,e,f,g){var w,v=null,u=B.c(d.c,v,v,v,v,v,v,D.xS,A.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new B.bz(1,A.bd,B.ay(v,B.x(B.iB(6,new C.ft8(d,w),!0,t),A.l,v,A.my,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ft9(d,w,e,f,g),v,v,v,v,v,v,!1,A.a4),v)
return B.x(B.a([new B.D(A.eI,u,v),B.E(B.as(new B.fG(1.1666666666666667,B.A(s,A.dK,v,A.e,A.h,0,v,v),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
iis(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.c(d.c,w,w,w,w,w,w,D.xS,A.K,w,w),w),B.c(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iP,w,w,w),B.c(d.fy,w,w,w,w,w,w,I.acJ,A.K,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),d.id,w,w,w,w,w,2,D.c7y,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fCQ(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,A.dk,!0,A.a7,w,A.ao,w,w,w,w),B.bJ(D.fWR,w,new C.fCR(d,e,g,f),w)],x.p),A.l,w,A.e,A.h,0,A.p)},
ica(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gks(),k=e.d
k=k==null?n:k.c
w=C.itF(d)
v=D.aKB.h(0,d)
if(v==null)v=d
m=B.c(m,n,n,n,n,n,n,A.kO,A.K,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.K(s.j(0.5),A.r,2)
q=B.a([new B.ac(0,A.H,w.c.j(0.35),A.eO,24)],x.V)
p=B.c(w.e,n,n,n,n,n,n,A.Ll,n,n,n)
o=B.c(v,n,n,n,n,n,n,A.mH,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.v(k)+" at the table"
k=x.p
q=B.E(B.as(B.o(n,B.x(B.a([p,A.T,o,A.P,B.c(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.dc,B.W(w.f,s.j(0.85),n,n,n,48)],k),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(n,n,r,u,q,new B.a8(A.aX,A.b4,A.x,t,n,n),A.m),n,n,n,A.f7,A.ae,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.af,q,A.P,new B.a5(1/0,n,B.bJ(D.h7E,n,new C.fst(f,e,g,h),B.bn(s,n,n,n,A.d.gH(t).iW()>0.4?A.w:A.c,n,A.cn,n,n,n,n,n)),n)],k),A.l,n,A.e,A.h,0,A.p)},
FD:function FD(d,e){this.a=d
this.b=e},
ath:function ath(d,e,f,g,h,i,j,k){var _=this
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
clD:function clD(){},
clE:function clE(){},
clC:function clC(){},
clF:function clF(){},
clB:function clB(){},
clH:function clH(){},
clI:function clI(){},
clA:function clA(d){this.a=d},
clG:function clG(){},
clz:function clz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJo:function fJo(d,e){this.a=d
this.b=e},
fJi:function fJi(d){this.a=d},
fJj:function fJj(d){this.a=d},
fJk:function fJk(d){this.a=d},
fJl:function fJl(d){this.a=d},
fJm:function fJm(d){this.a=d},
fJn:function fJn(d){this.a=d},
fsG:function fsG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsF:function fsF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGW:function fGW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGV:function fGV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fGU:function fGU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frY:function frY(){},
frZ:function frZ(){},
fs_:function fs_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs0:function fs0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDP:function fDP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDO:function fDO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFM:function fFM(){},
fFN:function fFN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCE:function fCE(d,e){this.a=d
this.b=e},
fCF:function fCF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ft9:function ft9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ft8:function ft8(d,e){this.a=d
this.b=e},
fCQ:function fCQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCR:function fCR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fst:function fst(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ipi(d){var w,v=B.T(d).k("Y<1>")
v=B.pN(new B.Y(d,new C.fOZ(),v),120,v.k("M.E"))
w=B.cE(v,new C.fP_(),B.a4(v).k("M.E"),x.N).aN(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fOZ:function fOZ(){},
fP_:function fP_(){},
aj5(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
auc:function auc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aHd:function aHd(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
eU8:function eU8(){},
aP9:function aP9(){},
i0k(){var w=$.Jz
if(w<=0)return;--w
$.Jz=w
if(w===0){w=$.hv3
if(w!=null)w.$0()}},
cgR(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arR(d){var w=0,v=B.j(x.H),u,t
var $async$arR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.hdE.I(0,t)
w=4
return B.b(B.az(),$async$arR)
case 4:w=3
return B.b(f.aG("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$arR)
case 3:case 1:return B.h(u,v)}})
return B.i($async$arR,v)},
arQ(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$arQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cgR(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.hdE.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$arQ)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k3(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arQ,v)},
WW(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$WW)
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
return B.i($async$WW,v)},
b2z(d){return C.i0x(d)},
i0x(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2z=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2z)
case 6:s=f
w=7
return B.b(s.aG("String","ngmy_helper_ai_usage_v1",A.X.av(d,null)),$async$b2z)
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
return B.i($async$b2z,v)},
b2x(d,e){var w,v,u,t,s=J.t(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.afD(0,new B.V(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bi(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.afD(typeof v=="number"?A.o.D(A.i.M(v),0,999999):0,t)},
b2y(d,e){if(A.o.ar(e.bA(d.b).a,36e8)>=24)return new B.afD(0,e)
return d},
chu(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$chu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.WW(),$async$chu)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.b2y(C.b2x(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chu,v)},
chv(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$chv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.WW(),$async$chv)
case 3:t=g
s=Date.now()
r=C.b2y(C.b2x(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bQ(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chv,v)},
i0y(d){var w,v,u,t=d.a,s=A.o.ar(t,1e6)
if(s<=0)return"0s"
w=A.o.ar(t,36e8)
v=A.o.ar(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.b1(A.o.v(v),2,"0")+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.b1(A.o.v(u),2,"0")+"s"
return""+u+"s"},
b2A(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b2A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.WW(),$async$b2A)
case 3:t=p.b2y(o.b2x(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b2A)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=B.k3(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2A,v)},
asa(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$asa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.WW(),$async$asa)
case 3:t=s.b2y(r.b2x(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$asa)
case 5:w=4
return B.b(f.aG("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$asa)
case 4:case 1:return B.h(u,v)}})
return B.i($async$asa,v)},
asb(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$asb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.WW(),$async$asb)
case 3:s=g
r=Date.now()
q=C.b2y(C.b2x(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.J(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return B.b(C.b2z(s),$async$asb)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asb,v)},
aiG(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aiG=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fg("")
if(!d.d){p=!0
if(!C.hKi(a0))if(!C.hKh(a0)){p=B.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hKi(a0)?3:4
break
case 3:o=C.itk(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c9p(e,o),$async$aiG)
case 7:n=a2
p=J.a7(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.htw(o)+":\n"
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
return B.b(B.MX("text/plain"),$async$aiG)
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
case 13:case 9:w=C.hKh(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a8X(e),$async$aiG)
case 17:m=f.hve(a2)+"\n"
p.a+=m
case 16:p=B.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.VY(e),$async$aiG)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cK(i)){p=h
m=C.htx(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aiG,v)},
i1V(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ck6(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ck6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hvX(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bN),$async$ck6)
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
return B.i($async$ck6,v)},
asU(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f4("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bN),$async$asU)
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
u=new B.aIH(m,p,n)
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
return B.i($async$asU,v)},
b3E(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b3E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.i1V(q)?3:4
break
case 3:w=5
return B.b(C.ck6(q),$async$b3E)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asU(t)
w=1
break
case 4:if(A.a.X(q,"NGMYLOCALSYNC1|")){u=C.asU(A.a.i(A.a.aX(q,15)))
w=1
break}w=A.a.X(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.asU(A.a.i(A.a.aX(q,15))),$async$b3E)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aIH(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3E,v)},
hwc(d){var w=d.bK
if(w>=0)return w
return 1},
aiT(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aiT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aT_(d,e),$async$aiT)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.HI(d,null,null,!1,!0,""),$async$aiT)
case 5:w=4
return B.b(t.$1(h),$async$aiT)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aiT,v)},
is4(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.j4
w=a1.toLowerCase()
v=B.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return A.j4
s=new B.V(Date.now(),0,!1)
r=B.dm()
q=B.dm()
p=C.ihD(w)
if(p!=null){v=p.a
r.b=s.bQ(v)
q.b=C.hEO(a1,w)
if(J.z(q.bm(),"Wake up")&&A.o.ar(v,e)<=180)q.b="Reminder \u2014 "+A.o.ar(v,e)+" min"}else{if(t!=null){v=B.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.el(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hEP(v[2],v[4],v[3])
o=v[3]
m=B.cb(o==null?"":o,null)
if(m==null)m=0
l=B.c0(B.bD(s),B.bL(s),B.bX(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bQ(a0)
r.b=B.c0(B.bD(l),B.bL(l),B.bX(l),n,m,0,0,0).bQ(-36e8)
if(r.bm().cZ(s.bQ(e)))r.b=J.c4(r.bm(),A.oE)
v=C.ilP(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.b1(A.o.v(m),2,"0")+" "+j)}else{l=B.c0(B.bD(s),B.bL(s),B.bX(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bQ(a0)
i=B.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hEP(o[1],o[3],o[2])
o=o[2]
g=B.cb(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c0(B.bD(l),B.bL(l),B.bX(l),h,g,0,0,0)
r.b=f.cZ(s.bQ(3e7))&&!v?f.bQ(a0):f
q.b=C.hEO(a1,w)}}v=x.N
return B.a([new B.kJ("alarm",B.J(["title",q.bm(),"start",r.bm().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ihD(d){var w,v,u,t,s,r,q=[B.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
ilP(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hEP(d,e,f){var w,v=B.cb(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hEO(d,e){var w,v,u,t
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
i2f(d){var w,v,u,t,s=J.a7(d)
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
C.bv7.prototype={
pg(d,e){return this.a.$2(d,e)}}
C.Gf.prototype={
T(){return new C.aKM(this.$ti.k("aKM<Gf.T,Gf.S>"))}}
C.aKM.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new B.hx(A.Ha,v,null,null,w.$ti.k("hx<1>"))
u.e=w
u.Xk()},
by(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aQL()
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.Ha,w.b,w.c,w.d,w.$ti)}v.Xk()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.d()
return v.my(d,w)},
t(){this.aQL()
this.a3()},
Xk(){var w,v=this
v.d=v.a.c.lQ(new C.fg6(v),new C.fg7(v),new C.fg8(v))
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.a0t,w.b,w.c,w.d,w.$ti)},
aQL(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.ay4.prototype={
my(d,e){return this.e.$2(d,e)}}
C.anc.prototype={
T(){return C.i9_()},
bu(){return this.r.$0()}}
C.rg.prototype={}
C.aCS.prototype={
aeI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.huC(r)
if(r.x==null||r.c7.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.huE(s),$async$aeI)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
YO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asS(t.a.c),$async$YO)
case 3:if(e!=null&&t.c!=null)t.a.bu()
r=!C.cgR(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.arQ(t.a.c),$async$YO)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.l(new C.dmE(t,s))
if(!s)t.aeI()
case 1:return B.h(u,v)}})
return B.i($async$YO,v)},
aei(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aei=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bGq(),$async$aei)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dmP(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aei,v)},
Z(){var w,v,u=this
u.bzn()
$.tV=$.tV+1
w=u.a
$.bGv=w.c.a
w=w.d.bd
v=B.T(w).k("N<1,ab<q,@>>")
w=B.B(new B.N(w,new C.dn6(),v),v.k("ak.E"))
u.f=w
u.aei()
u.Kx()
u.YO()
u.e=B.dg(A.oC,new C.dn7(u))},
Kx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aiU(t.a.d.bd)
w=3
return B.b(C.fZJ(t.a.d.bd),$async$Kx)
case 3:s=e
if(t.c==null){w=1
break}C.aiU(t.a.d.bd)
if(s!=null)t.l(new C.dmX(t,s))
else t.l(new C.dmY(t))
case 1:return B.h(u,v)}})
return B.i($async$Kx,v)},
t(){C.b2k()
var w=this.e
if(w!=null)w.a1(0)
this.bzm()},
ajA(d,e,f){return this.czP(d,e,f)},
czP(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ajA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bd
o=o.c
s=d.b
C.ilT(n,o.a,o.c,d.a,s,f,e,p)
t.a.bu()
w=3
return B.b(C.aiV(t.a.d.bd),$async$ajA)
case 3:if(t.c==null){w=1
break}t.l(new C.dn_(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ajA,v)},
Jh(d,e){return this.ckG(d,e)},
c7s(d){return this.Jh(d,null)},
ckG(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.uA(t.a.d.bd,A.a.i(e))
if(s!=null&&C.aRR(s)<=0){t.c.K(x.q).f.U(D.aVW)
w=1
break}}w=5
return B.b(C.arQ(t.a.c),$async$Jh)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.hdF(r,C.fTv(q.c),p),$async$Jh)
case 6:w=1
break
case 4:o=new C.dmS(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hF(r,new C.aFJ(p,q.d,q.f,q.r,new C.dmT(o),q.w,C.fTv(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hF(q,new C.anb(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dmU(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
c4z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiU(i.a.d.bd)
C.aiU(i.f)
w=C.ix_(i.a.c.a,i.f)
v=C.ilS(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bM
if(!u){t=A.d.gH(w)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=J.a7(t)
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
return B.o(h,B.x(B.a([D.h1F,B.c(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.od,h,h,h),A.P,B.A(B.a([B.E(B.dU(A.LC,new C.dmK(i,t),h),1),A.ab,B.E(B.bJ(D.hb4,h,new C.dmL(i,t),h),1)],n),A.l,h,A.e,A.h,0,h,h)],n),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.aD,h,s,u,h,h,A.m),h,h,h,A.e8,A.bk,h,h,1/0)}m=A.d.gH(v)
l=A.d.dB(i.y,new C.dmM(m),new C.dmN(i))
k=C.hkk(m,i.a.c.a,i.r)
j=C.aRR(m)
u=B.m(14)
s=B.K(A.aT,A.r,1)
r=j===1?"":"s"
return B.o(h,B.x(B.a([D.fUo,B.c(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.od,h,h,h),A.av,B.c(C.ioy(m,i.a.c.a),h,h,h,h,h,h,A.Wy,h,h,h),A.P,B.bJ(D.h0W,h,new C.dmO(i,l,m),h)],x.p),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(A.bp,h,s,u,h,h,A.m),h,h,h,A.e8,A.bk,h,h,1/0)},
bWe(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fm_.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.EQ(w[v])
t=A.i.D(u.d*0.58,0.12,0.3)
l.push(new B.rD(u.a,u.b,A.i.D(u.c*0.92,0,0.9),t).jd())}s=A.d.gH(w)
w=B.m(16)
t=B.m(18)
r=B.K(B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1)
q=x.V
p=B.a([new B.ac(0,A.H,B.a0(89,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.ia,12)],q)
o=x.p
o=B.a([new B.a5(100,n,B.as(B.W(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iZ,B.x(B.a([B.A(B.a([B.E(B.c(d.b,n,n,n,n,n,n,A.jX,n,n,n),1)],o),A.l,n,A.e,A.h,0,n,n),A.av,B.c(d.c,n,2,A.a2,n,n,n,A.q7,n,n,n)],o),A.D,n,A.b9,A.h,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c51,n,n,n,new C.dmG(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.a1f,B.o(n,D.c2Z,A.f,n,n,new B.n(B.a0(71,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),n,B.K(B.a0(A.i.S(229.5),s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.r,1.6),n,B.a([new B.ac(0,A.H,B.a0(89,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aM(!1,w,!0,B.o(n,B.A(o,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,r,t,p,new B.a8(A.ay,A.aC,A.x,l,n,n),A.m),n,92,n,A.e8,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dmH(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=B.O(d).ax.a===A.I?A.nE:A.qB,k=m?A.iR.j(0.94):A.c.j(0.94),j=m?A.c:A.a_,i=m?A.iR:A.c,h=m?A.c.j(0.08):A.bn,g=m?A.c:A.a_,f=m?A.bs:A.cg
if(!o.x)return C.aSp(n,l,B.as(B.n3(n,m?A.c:A.bj,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fTv(o.a.c)
return new C.OE(o.a.w,w,!0,o.gaVQ(),n)}w=B.aD(d,A.dF,x.w).w
v=B.m(12)
u=B.K(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ac(0,A.H,A.w.j(0.04),A.cN,12))
r=x.p
s=B.a([B.o(n,B.A(B.a([B.E(B.c("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.wq(new C.dn3(o,f,g),n,$.aTU(),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(i,n,u,v,s,n,A.m),n,n,n,n,A.a1u,n,n,1/0),A.T,o.c4z()],r)
v=o.y
A.d.u(s,new B.N(v,o.gbWd(),B.T(v).k("N<1,w>")))
w=B.cc(B.x(s,A.l,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,new B.P(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.ac(0,A.H,A.w.j(m?0.28:0.08),A.ia,15)],t)
u=B.K(m?A.c.j(0.1):A.bn,A.r,1)
t=B.aH(n,n,n,n,B.W(A.eJ,j,n,n,n,18),n,n,n,o.gaVQ(),n,n,n,n,n,n)
q=B.E(B.as(B.c("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.oS(!0,C.aSp(n,l,new B.an(A.a0,n,A.ad,A.f,B.a([w,B.ao(n,B.bm(!1,new B.D(A.OR,B.o(n,B.A(B.a([t,q,new B.D(A.iZ,B.o(n,B.A(B.a([D.c04,A.e3,C.asH(new C.dn4(o),A.kO,o.a.c.a)],r),A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.n(A.d3,n,n,p,n,n,A.m),n,n,n,n,A.hg,n,n,n),n)],r),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(k,n,u,s,v,n,A.m),n,60,n,n,A.n7,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dn5(o),x.K)},
aVR(){var w,v
this.a.bu()
w=this.d
v=w>0?B.J(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.j3(w,v)}}
C.aFJ.prototype={
T(){return new C.bmT()},
hK(d){return this.e.$1(d)},
bu(){return this.f.$0()},
aK4(){return this.r.$0()}}
C.bmT.prototype={
Z(){this.bAo()
this.d=B.Wm(this.a.d.bh)
$.tV=$.tV+1},
t(){C.b2k()
this.bAn()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.d()
return new C.arf(v,new C.e0c(w),u,new C.e0d(w),new C.e0e(w,d),new C.e0f(w),null)}}
C.anb.prototype={
T(){return new C.aCR(new B.at(A.ax,$.ax()))},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()},
aK4(){return this.z.$0()}}
C.aCR.prototype={
Z(){this.bzl()
this.a.toString
$.tV=$.tV+1},
t(){C.b2k()
var w=this.d
w.V$=$.ax()
w.R$=0
this.bzk()},
a3M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.OO()
w=5
return B.b(C.arQ(t.a.c),$async$a3M)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.hdF(s,C.fTv(r.c),q),$async$a3M)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.uA(s.d.bd,A.a.i(r))
if(p!=null&&C.aRR(p)<=0){t.c.K(x.q).f.U(D.aVW)
w=1
break}}o=B.cG(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.U(D.ftE)
w=1
break}m=B.Mb(t.a.c.a,new C.dmy(t))
if(m+0.001<n){t.c.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Not enough balance for this bet \u2014 you have $"+B.dG(m)+", the bet is $"+B.dG(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aK4()
s=t.a
s.toString
r=A.o.v(1000*Date.now())
q=t.a
s.hK(new B.d9(r,q.c.a,n,A.kx,A.fz,"Game bet: "+q.f,null,null,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
if(D.flM.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hF(s,new C.aq4(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hF(s,new C.and(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a3M,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.Iy,o,o,o,new C.dmB(d),o,o,o,o,o,o),k=p.a,j=B.c(k.f,o,o,o,o,o,o,A.cH,o,o,o),i=B.m(12),h=x.p
j=B.eR(B.a([B.o(o,B.as(C.asH(new C.dmC(p),A.iP,k.c.a),o,o,o),A.f,o,o,new B.n(A.d3,o,o,i,o,o,A.m),o,o,o,D.bEv,A.f2,o,o,o)],h),o,o,!0,!0,D.a0o,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.K(A.aT,A.r,1)
k=B.W(D.bRL,D.by8,o,o,o,28)
w=p.a
v=B.c(w.f,o,o,o,o,o,o,A.mH,o,o,o)
w=B.c(w.r,o,o,o,o,o,o,A.od,o,o,o)
u=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.m(12)
s=x.a3
s=B.B(new B.N(B.a([2,5,10,25],x.t),new C.dmD(p),s),s.k("ak.E"))
s=B.A(s,A.l,o,A.e,A.h,0,o,o)
r=B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
t=B.o(o,B.x(B.a([D.hcL,A.T,s,A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.d,o,o,o,o,o,2,B.bA(o,new B.b6(4,B.m(10),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m4,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,A.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(u,o,o,t,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.K(B.a0(102,A.a8l.m()>>>16&255,A.a8l.m()>>>8&255,A.a8l.m()&255),A.r,1)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
q=B.m(10)
q=B.o(o,B.x(B.a([D.fTL,B.c("+ $"+A.i.ac(n*0.46,2),o,o,o,o,o,o,D.fJp,o,o,o),B.c("(46% return on $"+A.i.ac(p.e,2)+" bet)",o,o,o,o,o,o,A.q7,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,q,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)
s=B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
n=B.m(10)
u=B.o(o,B.x(B.a([D.h1X,A.P,q,A.P,B.o(o,B.x(B.a([D.fOw,B.c("$"+A.i.ac(m,2),o,o,o,o,o,o,D.fy1,o,o,o),B.c("8 pairs \xd7 $"+A.i.ac(m,2)+" each",o,o,o,o,o,o,A.q7,o,o,o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(s,o,o,n,o,o,A.m),o,o,o,o,A.cr,o,o,1/0)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(D.btq,o,r,u,o,o,A.m),o,o,o,o,A.bT,o,o,1/0)
r=B.fv(o,o,A.bj,o,o,o,o,o,o,A.c,o,A.hl,o,o,o,o,o,o,o,o)
return C.aSp(j,D.a0o,B.cc(B.o(o,B.x(B.a([k,A.av,v,A.bB,w,A.T,t,A.P,u,A.T,new B.a5(1/0,o,B.iz(B.c("Start Game ($"+A.i.ac(p.e,2)+")",o,o,o,o,o,o,A.cd,o,o,o),p.gcDN(),r),o)],h),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,i,l,o,D.cbh,A.m),o,o,o,o,A.eR,o,o,1/0),A.t,o,A.y,o,o,A.a1x,o,o,A.ah))}}
C.and.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.aCT(A.cU,new B.at(A.ax,$.ax()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aR(u),B.aR(u),B.a([],v),B.a([],v),B.a([],v))},
hK(d){return this.y.$1(d)},
bu(){return this.z.$0()}}
C.aCT.prototype={
ghR(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rX(d){return this.bUm(d)},
bUm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AS()
r=t.PA()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.acI(d),$async$rX)
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
FT(d,e,f,g){return this.cBv(d,e,f,g)},
cBv(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$FT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bHy(s,C.bHe(),C.hmu(),d,e,f,g),$async$FT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$FT,v)},
AS(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b6i(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.d()
return u+C.aj5(t,s.e.a.a)
case"memory":return s.ghR()&&D.nh.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aB4()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.bd
case"reflex":return s.a0
default:u=s.b_
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aB4(){var w,v,u=this.x1
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
case"pattern":return C.hko()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b_
if(w!=null)return w.b
return 1}},
by(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c7)return
w=u.a
v=C.fTA(w.e,w.d.y2)
if(v!==C.fTA(d.e,d.d.y2)&&u.c!=null)u.l(new C.doq(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bzp()
w=i.a
w.toString
$.tV=$.tV+1
i.Q=C.fTA(w.e,w.d.y2)
i.b9a()
i.ae2()
if(i.ghR()){i.c7=!0
i.cT="Connecting to match\u2026"
i.bT="Both players enter the room together \u2014 play starts at the same time."
i.PY()
i.adG()
i.bn=B.dg(A.h5,new C.dot(i))}if(A.d.q(D.T8,i.a.e)){w=i.ghR()
v=i.a
if(w){w=v.d.bd
v=v.Q
v.toString
u=C.uA(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a7(u)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.b2i(!1,w,k.length===0||A.a.q(k,"@")?C.hkk(u,v,null):k,p,l,s)}else{w=w.c
w=C.hdJ(w.c,w.a)}w=i.bG=w}else{w=v.c
w=i.bG=C.hdJ(w.c,w.a)}v=C.i2m()
v.bt3(i.a.e,i.d,w)
i.b_=v
i.r=v.c
if(i.ghR()){w=i.a
v=w.d.bd
w=w.Q
w.toString
u=C.uA(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b_
w.toString
w.beC(i.a.e,B.a1(m,x.N,x.z),i.a.c.a)
w=i.b_
i.r=w.c
if(w.e){if(w.r)j=D.UD
else j=w.f===!0?D.rg:D.JR
i.AU(j)}}}i.b3=B.dg(A.n6,new C.dou(i))
if(i.ghR())i.bi=B.dg(A.n5,new C.dov(i))}if(i.ghR()&&!A.d.q(D.T8,i.a.e))i.bi=B.dg(A.n5,new C.dow(i))
i.as=B.dg(A.fQ,new C.dox(i))},
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
return B.b(C.bFs(p,t.a.c.a),$async$PY)
case 5:o=e
if(t.c!=null)t.l(new C.dnG(t,o))
w=1
break
case 4:w=6
return B.b(C.M1(q,t.a.d.bd,!1),$async$PY)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bFs(n,t.a.c.a),$async$PY)
case 7:o=e
if(t.c!=null)t.l(new C.dnH(t,o))
case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
akG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$akG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M1(r,s.d.bd,!1),$async$akG)
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
t.aQx(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.i.M(j)
else{h=j==null?null:J.k(j)
i=B.cb(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bq(t.fy,new C.do9(t))
if(i!=null&&t.fr.length!==0){s=B.B(t.dy,x.S)
A.d.u(s,t.dy)
r=new B.e_()
r.cU(i)
A.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.l(new C.doa())}case 1:return B.h(u,v)}})
return B.i($async$akG,v)},
adG(){var w=0,v=B.j(x.H),u=this
var $async$adG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a24(!0),$async$adG)
case 2:return B.h(null,v)}})
return B.i($async$adG,v)},
a24(d){return this.cqF(d)},
cqE(){return this.a24(!1)},
cqF(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a24=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.M1(q,s.d.bd,b3),$async$a24)
case 3:o=b5
if(o==null)o=C.uA(t.a.d.bd,q)
if(o==null){w=1
break}s=J.a7(o)
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
if(a9){C.itI(t.a.d.bd,q,j)
t.a.bu()}if(t.c==null){w=1
break}b0=t.bH
if(b0==null)b0="your opponent"
if(!a5){t.l(new C.dnW(b2,t,b0))
w=1
break}if(s==null){t.l(new C.dnX(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.cZ(s)){s=s.bA(b1).a
r=A.o.ar(s,1e6)
t.l(new C.dnY(b2,t,r+(A.o.F(A.o.ar(s,1000),1000)>0?1:0)))
w=1
break}if(t.c7){t.l(new C.dnZ(b2,t))
b2=t.a.e
if(b2==="pattern")t.aav()
else if(b2==="memory"){t.b99()
if(t.c!=null)t.l(new C.do_())}}b2=t.bn
if(b2!=null)b2.a1(0)
t.bn=null
case 1:return B.h(u,v)}})
return B.i($async$a24,v)},
aRt(d){var w,v,u,t,s=this
if(d!=null){w=new B.e_()
w.cU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aRs(){return this.aRt(null)},
aav(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aav=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghR()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.co6()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.M1(q,s.d.bd,!1),$async$aav)
case 5:r=t.b53(e)
case 4:if(t.c==null){w=1
break}t.aRt(r)
t.l(new C.dn8(t))
t.Eu()
case 1:return B.h(u,v)}})
return B.i($async$aav,v)},
b53(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return A.i.M(v)
u=v==null?t:J.k(v)
return B.cb(u==null?"":u,t)},
co6(){var w=this.a,v=w.Q
if(v==null)return null
return this.b53(C.uA(w.d.bd,v))},
ae2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ae2)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eq(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.l(new C.dnF(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
pD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pD)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bI0().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.aG("Int","ngmy_game_"+n+"_"+o,r),$async$pD)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pD,v)},
a43(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a43=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.b_==null||t.f||t.aZ){w=1
break}if(t.c7){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.M1(r,s.d.bd,!1),$async$a43)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bd
s=s.Q
s.toString
p=C.uA(r,s)
s=p==null
if(!s){r=J.cF(p)
r.a8(p)
r.u(p,q)}r=J.a7(q)
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
s.beC(r.e,n,r.c.a)
r=t.b_
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.UD
else k=r.f===!0?D.rg:D.JR
w=7
return B.b(t.AU(k),$async$a43)
case 7:w=5
break
case 6:if(t.c!=null)t.l(new C.dob())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a43,v)},
aiy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aiy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghR()||q.b_==null||q.a.Q==null||q.aZ){w=1
break}q.aZ=!0
t=3
o=q.b_
o.toString
p=o.cU7(q.a.e)
o=q.a
n=o.d.bd
o=o.Q
o.toString
w=6
return B.b(C.aSO(n,o,p),$async$aiy)
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
AU(d){return this.c0I(d)},
c0I(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.acH(s,s),$async$AU)
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
a12(d,e){return this.cip(d,e)},
cip(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a12=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghR()?3:5
break
case 3:w=6
return B.b(t.aiy(),$async$a12)
case 6:if(d===D.rf){w=1
break}w=4
break
case 5:if(d===D.rf){w=1
break}case 4:w=7
return B.b(t.AU(d),$async$a12)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a12,v)},
adW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uA(s.d.bd,q)
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
return B.b(C.aSO(t.a.d.bd,q,l),$async$adW)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$adW,v)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghR()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.uA(s.d.bd,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a1(o,s,r):B.S(s,r)
n.n(0,"gameOver",!0)
C.hn4(t.a.d.bd,q,n)
C.ixc(t.a.d.bd,q)
w=3
return B.b(C.aiV(t.a.d.bd),$async$Ix)
case 3:t.a.bu()
case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
t(){var w,v=this
if(v.ghR()&&!v.f)v.adW()
else if(!v.f)v.c7t()
C.b2k();++v.RG
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
v.bzo()},
cH6(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.d()
v=v<=0||w.b_==null}if(v)return
if(w.c7)return
v=w.b_
v.toString
w.a.toString
if(v.a>=v.b){w.uB("Goal completed!")
return}v=++w.rx
if(v%5===0)w.l(new C.dok())},
b9a(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b99()
break
case"scramble":r.bh=0
r.b9b()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dzY[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.ci)
break
case"math":r.y2=0
r.b98()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b9c()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e0(v,s)
if(!r.ct6()){w=J.e4(9,w)
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
r.aRs()
w=B.v(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Eu()}break
case"color":r.bd=0
r.b93()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.bap()
break
default:if(A.d.q(D.T8,w)){w=r.b_
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b6i(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ct6(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b9c(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
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
b98(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bI0().length-6)u.at=0
w=$.bI0()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b9b(){var w=this,v=w.w=D.daQ[A.o.F(w.at+w.bh,105)]
w.ax=C.ixt(v)
w.ay=B.c1(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.ci)},
bap(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=B.cy(B.dv(0,0,0,120+w.d.aw(280),0,0),new C.do8(w))},
c0L(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rX("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ar(new B.V(v,0,!1).bA(u).a,1000)}if(w<520){t.l(new C.dnD(t))
v=t.a0
if(v>=5){t.pD()
t.uB("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.bap()
t.l(new C.dnE())}}else t.rX("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cGk(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bk(t.ay,new C.dof())
if(u<0)return
t.l(new C.dog(t,u,v,d))},
cGl(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.l(new C.doh(u,d,v))},
bL9(){var w,v,u=this
if(u.f)return
if(A.d.aS(u.ay,new C.dn9())){u.c.K(x.q).f.U(D.fty)
return}w=A.d.hh(u.ay)
v=u.w
v===$&&B.d()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.l(new C.dna(u))
if(u.ghR()&&D.nh.q(0,u.a.e))u.a2j()
if(u.bh>=5){u.pD()
if(u.ghR()&&D.nh.q(0,u.a.e))u.nm(!0)
else u.uB("All 5 words unscrambled!")}else{u.b9b()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.l(new C.dnb())}}else u.rX("Wrong word \u2014 paid for "+u.bh+"/5.")},
b93(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.bd*11,4),t=v[w.d.aw(4)]
w.aO=t
w.aL=v[u]
w.aR=[A.dQ,A.dN,A.it,A.tL][u]
w.w=t},
aQx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
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
b99(){var w,v,u,t,s,r,q,p=this
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
p.aQx(s)}else A.d.e0(p.fr,p.d)},
cpZ(d){var w,v,u,t=this
if(t.c7)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.l(new C.dnP(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.l(new C.dnQ(t,v,u))
if(t.ghR()&&D.nh.q(0,t.a.e))t.a2j()
if(t.go.a>=t.fr.length){t.pD()
if(t.ghR()&&D.nh.q(0,t.a.e))t.nm(!0)
else t.aB7()}return}t.k1=!0
B.bN(D.bDs,new C.dnR(t),x.c)},
b8x(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.d()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.l(new C.do0(u))
if(u.y1>=5){u.pD()
u.uB("All 5 questions correct!")}else{u.b9c()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.l(new C.do1())}}else u.rX(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.l(new C.do2(u))
if(u.y2>=6){u.pD()
u.uB("All 6 math questions correct!")}else{u.b98()
u.r="Question "+(u.y2+1)+" of 6"
u.l(new C.do3())}}else{u.X5(u.y2+1)
u.rX(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.l(new C.do4(u))
if(u.bd>=5){u.pD()
u.uB("All 5 color rounds correct!")}else{u.b93()
u.r="Round "+(u.bd+1)+" of 5 \u2014 tap the COLOR of the text"
u.l(new C.do5())}}else u.rX("Wrong color \u2014 paid for "+u.bd+"/5.")
return}if(v){u.pD()
u.aB7()}else u.c.K(x.q).f.U(D.fui)},
cGj(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.ce(q.k4,0)
v=A.o.ar(d,3)
u=A.o.F(d,3)
t=A.o.ar(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.l(new C.doe(q,d,w))
if(A.d.hh(q.k4)==="123456780"){q.pD()
q.aB7()}}},
RM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$RM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.l(new C.dnS(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dnT(t,q).$0()
t.c.er()
w=6
return B.b(B.bN(A.l0,null,r),$async$RM)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dnU(t).$0()
t.c.er()
w=7
return B.b(B.bN(A.ka,null,r),$async$RM)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.l(new C.dnV(t))
case 1:return B.h(u,v)}})
return B.i($async$RM,v)},
cGm(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rX("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.l(new C.doi(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pD()
u.uB("Perfect Simon run!")
return}u.l(new C.doj(u))
u.RM()}},
Eu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Eu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.l(new C.dnc(t))
s=x.H
w=3
return B.b(B.bN(A.jw,null,s),$async$Eu)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dnd(t,o).$0()
t.c.er()
w=7
return B.b(B.bN(A.a16,null,s),$async$Eu)
case 7:if(t.c==null){w=1
break}new C.dne(t).$0()
t.c.er()
w=8
return B.b(B.bN(A.iX,null,s),$async$Eu)
case 8:case 5:r.length===q||(0,B.I)(r),++p
w=4
break
case 6:if(t.c!=null)t.l(new C.dnf(t))
case 1:return B.h(u,v)}})
return B.i($async$Eu,v)},
X5(d){return this.bFG(d)},
bFG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$X5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$X5)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bI0().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.aG("Int","ngmy_game_"+q+"_"+r,o),$async$X5)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$X5,v)},
cGg(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rX("Wrong tile \u2014 paid for "+v.aB4()+"/"+C.hko()+" moves.")
return}v.l(new C.doc(v,w))
if(v.ghR()&&D.nh.q(0,v.a.e))v.a2j()
if(v.x1>=w)if(v.x2>=7){v.pD()
if(v.ghR()&&D.nh.q(0,v.a.e))v.nm(!0)
else v.uB("All 7 pattern rounds correct!")}else{v.l(new C.dod(v))
v.Eu()}},
K6(d,e){return this.com(d,e)},
uB(d){return this.K6(null,d)},
aB7(){return this.K6(null,null)},
com(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$K6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.l(new C.dnN(t,r))
q=A.o.v(1000*Date.now())
s=t.a
p=new B.d9(q,s.c.a,r,A.hc,A.fz,"Game payout: "+s.f,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiR(p,!0)
t.a.hK(p)
t.a.bu()
o=e==null?"+$"+A.i.ac(r,2)+" added to your balance!":e
s=t.a
C.vf(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.FT(d,o,"YOU WIN!",!0),$async$K6)
case 3:w=4
return B.b(C.aiJ(t.a.f,o),$async$K6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K6,v)},
FR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$FR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghR()&&D.nh.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cAz(),$async$FR)
case 5:w=1
break
case 4:s=t.AS()
r=t.PA()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.acI("Time's up \u2014 no progress to pay."),$async$FR)
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
RT(d){return this.csM(d)},
a2j(){return this.RT(!1)},
csM(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return B.b(C.M1(q,r.a.d.bd,!1),$async$RT)
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
for(a6=i,a6=new B.dq(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gP(a8)
e=typeof f=="number"?A.i.M(f):B.cb(J.k(f),null)
if(e!=null)J.c4(h,e)}}a6=h
a6=B.B(a6,B.a4(a6).k("cj.E"))
A.d.ff(a6)
J.aJ(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?B.a1(d,a3,a5):B.S(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aSO(r.a.d.bd,q,m),$async$RT)
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
nm(d){return this.cAA(d)},
cAz(){return this.nm(!1)},
cAA(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
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
return B.b(C.M1(q,s.d.bd,!0),$async$nm)
case 7:o=b7
n=t.PA()
w=o==null?8:9
break
case 8:m=A.i.D(t.AS()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.acI("Time's up \u2014 no progress to pay."),$async$nm)
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
case 9:s=J.a7(o)
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
return B.b(t.acI("Time's up \u2014 no progress to pay."),$async$nm)
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
t.l(new C.do6(t,a8,a2))
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
Fg(d,e,f){return this.cok(d,e,f)},
cok(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Fg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b3
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.l(new C.dnL(t,r,d))
s=A.o.v(1000*Date.now())
q=t.a
p=new B.d9(s,q.c.a,r,A.hc,A.fz,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiR(p,!0)
t.a.hK(p)
t.a.bu()
if(t.c==null){w=1
break}o=A.i.S(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.d()
m=q+C.aj5(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cC(t.cy,0,new C.dnM()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.i.ac(r,2)+" ("+n+"% \u2014 "+B.v(k)+" mistakes/missed)":"+$"+A.i.ac(r,2)+" ("+n+"% of full prize)"
q=t.a
C.vf(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.FT(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Fg)
case 3:w=4
return B.b(C.aiJ(t.a.f,j),$async$Fg)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Fg,v)},
c7t(){var w,v,u,t,s,r,q,p,o=this,n=null
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
acH(d,e){return this.bW8(d,e)},
bW8(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acH=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(t.FT(d,"Nobody won, so your $"+A.i.ac(t.a.x,2)+" stake was returned.","DRAW",!1),$async$acH)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acH,v)},
Z9(d,e){return this.bW9(d,e)},
acI(d){return this.Z9(null,d)},
bW9(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
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
v=B.aH(n,n,n,n,A.atf,n,n,n,new C.dol(d),n,n,n,n,n,n)
if(o.ghR()){u=o.bH
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.c(u?t.f+" vs "+B.v(o.bH):t.f,n,2,A.a2,n,n,n,A.fI,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.o(n,C.asH(new C.dom(o),A.ob,t.c.a),A.f,n,n,new B.n(A.d3,n,n,r,n,n,A.m),n,n,n,n,A.h6,n,n,n)],q),A.l,n,A.e,A.h,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.o(n,B.A(B.a([B.E(B.c("Win $"+A.i.ac(t.x*1.46,2)+" \xb7 stake $"+A.i.ac(o.a.x,2)+" \u2022 Progress "+o.AS()+"/"+o.PA(),n,n,n,n,n,n,D.fDB,n,n,n),1),new C.arS(o.a.c.a,new C.don(o),n),A.ab,D.bWw,A.db,B.c(""+w+":"+m,n,n,n,n,n,n,A.oc,n,n,n)],q),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.n(n,n,n,v,n,new B.a8(A.a5,A.a9,A.x,s,n,n),A.m),n,n,n,n,A.hr,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,u>")
m=B.B(new B.N(v,new C.doo(),m),m.k("ak.E"))
w=B.m(14)
v=B.K(A.aT,A.r,1)
p=C.aSp(n,D.bhh,B.bm(!0,new B.D(A.OO,B.x(B.a([r,s,A.P,new B.fh(new C.dop(o),n),A.am,B.E(B.o(n,o.bW7(),A.f,n,n,new B.n(n,n,v,w,n,new B.a8(A.a5,A.a9,A.x,m,n,n),A.m),n,n,n,n,A.cr,n,n,n),1)],q),A.al,n,A.e,A.h,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c7)return p
m=B.a0(140,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255)
w=B.a0(242,A.iV.m()>>>16&255,A.iV.m()>>>8&255,A.iV.m()&255)
v=B.m(18)
u=B.K(A.aT,A.r,1)
return new B.an(A.a0,n,A.ad,A.t,B.a([p,B.bS(0,B.o(A.z,new B.dp(!1,B.o(n,B.x(B.a([D.fpB,A.af,B.c(o.cT,n,n,n,n,n,n,D.fFa,A.K,n,n),A.am,B.c(o.bT,n,n,n,n,n,n,D.fDh,A.K,n,n)],q),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.n(w,n,u,v,n,n,A.m),n,n,n,A.ti,A.zg,n,n,n),n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c8t(){var w=this.k3
return B.cf(new C.dnK(this,w,A.i.cD(this.fr.length/w)))},
bW7(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c8t()
if(m==="scramble"){m=o.r
m===$&&B.d()
w=x.l
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q7,n,n,n),B.c("Words "+o.bh+"/5",n,n,n,n,n,n,A.Fs,n,n,n),A.af,B.c("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a0(166,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c_(A.fM,B.iB(o.ay.length,new C.dns(o),!0,w),A.br,n,6,6),A.aO,B.c_(A.fM,B.iB(o.ch.length,new C.dnt(o),!0,w),A.br,n,8,8),A.aO,new B.a5(1/0,n,B.iz(D.h5D,o.gbL8(),B.fv(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cn,n,n,n,n,n,n,n)),n)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.d()
return new C.auc(m,o.e,new C.dnu(o),new C.dnv(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.d()
m=B.a([B.c(m,n,n,n,n,n,n,A.q7,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.c(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.Fs,n,n,n))
m.push(A.af)
if(o.a.e==="sequence"){w=o.aH
w===$&&B.d()
w+=", ?"}else w=o.CW
m.push(new B.dk(A.dC,A.z,A.f,B.c(w,n,n,n,n,n,n,A.mH,A.K,n,n),n))
m.push(A.aO)
w=o.x
A.d.u(m,new B.N(w,new C.dnw(o),B.T(w).k("N<1,w>")))
return B.x(m,A.l,n,A.e,A.h,0,A.p)}if(m==="puzzle")return B.cf(new C.dnx(o))
if(m==="simon"){m=o.r
m===$&&B.d()
return B.x(B.a([B.c(m,n,n,n,n,n,n,A.q7,n,n,n),B.c("Progress "+o.p3+"/21",n,n,n,n,n,n,A.Fs,n,n,n),A.P,B.E(B.l_(1,B.iB(4,new C.dny(o),!0,x.l),2,10,10,n,A.e0,!1),1)],x.p),A.l,n,A.e,A.h,0,A.p)}if(m==="pattern")return B.cf(new C.dnz(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dQ,A.dN,A.it,A.tL]
m=o.r
m===$&&B.d()
m=B.c(m,n,n,n,n,n,n,A.q7,n,n,n)
w=B.c("Round "+o.bd+"/5",n,n,n,n,n,n,A.Fs,n,n,n)
v=o.aL
v===$&&B.d()
s=o.aR
s===$&&B.d()
s=B.a([m,w,A.af,B.c(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fv(n,n,B.a0(217,m.m()>>>16&255,m.m()>>>8&255,m.m()&255),n,n,n,n,n,n,A.c,n,n,A.f6,n,n,n,n,n,n,n)
r[q]=new B.D(A.cy,new B.a5(1/0,n,B.iz(B.c(u[q],n,n,n,n,n,n,A.cH,n,n,n),new C.dnA(o,u,q),m),n),n)}A.d.u(s,r)
return B.x(s,A.l,n,A.e,A.h,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bj:A.c9
w=o.r
w===$&&B.d()
w=B.c(w,n,n,n,n,n,n,A.acx,A.K,n,n)
v=B.c("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fAt,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.c(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aD(s,A.bY,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qs(B.ay(A.c1,B.cU(n,B.x(B.a([w,A.P,v,A.b_,s,A.b_,new B.D(A.Hl,B.c(m,n,n,n,n,n,n,B.l(n,n,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.l,n,A.b9,A.h,0,A.p),p,n,A.b0,n,L.CK,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc0K(),n,n,n,n,n,n,!1,A.a4))}if(A.d.q(D.T8,m)&&o.b_!=null){m=o.a.e
w=o.b_
w.toString
return C.imr(m,new C.dnB(o),new C.dnC(o),o.d,w)}m=o.r
m===$&&B.d()
return B.as(B.c(m,n,n,n,n,n,n,A.dk,n,n,n),n,n,n)}}
C.ao_.prototype={
T(){return new C.bjX()},
cZX(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bjX.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=B.aD(a3,A.dF,a0).w
a0=B.aD(a3,A.dF,a0).w
v=x.p
u=B.a([B.bUJ(!1,e.a.r,"INVESTMENT PLANS",d),A.dc],v)
t=a1.x
if(t!=null){s=t.d.bU()
r=A.a.b1(A.o.v(B.bL(s)),2,"0")
q=A.a.aX(A.o.v(B.bD(s)+1),2)
p=B.m(18)
o=B.K(A.Ct,A.r,2.2)
n=x.V
m=B.a([new B.ac(0,A.H,B.a0(89,A.rO.m()>>>16&255,A.rO.m()>>>8&255,A.rO.m()&255),A.eO,20),new B.ac(0,A.H,B.a0(102,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.dm,14)],n)
l=B.ao(d,B.o(d,d,A.f,d,d,new B.n(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),d,d,d,d,d,A.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=B.m(10)
j=B.K(A.Ct,A.r,3.4)
n=B.a([new B.ac(0,A.H,B.a0(166,A.rO.m()>>>16&255,A.rO.m()>>>8&255,A.rO.m()&255),A.dO,10),new B.ac(0,A.H,B.a0(89,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.cN,6)],n)
n=B.A(B.a([B.o(d,d,A.f,d,d,new B.n(d,d,j,k,n,new B.a8(A.ay,A.aC,A.x,D.dmQ,D.cXg,d),A.m),d,42,d,d,d,d,d,56),A.b_,e.bbk(a3,!0)],v),A.l,d,A.e,A.h,0,d,d)
k=B.Ep(t.a,1,A.a2,D.fIz)
j=t.b
i=t.c
h=B.Ep("Making $"+B.dG(j*i)+" Daily",1,A.a2,D.fIO)
g=B.Ep(e.b64(j),1,A.a2,D.fBl)
q=B.A(B.a([B.E(B.x(B.a([D.fZp,B.Ep(a1.c,1,A.a2,D.aY_)],v),A.D,d,A.e,A.h,0,A.p),1),B.x(B.a([D.fZa,B.c(r+"/"+q,d,d,d,d,d,d,D.aY_,d,d,d)],v),A.dK,d,A.e,A.h,0,A.p)],v),A.l,d,A.e,A.h,0,d,d)
r=B.o(d,d,A.f,B.a0(89,D.yF.m()>>>16&255,D.yF.m()>>>8&255,D.yF.m()&255),d,d,d,1,d,d,d,d,d,d)
i=B.A(B.a([e.atU("INVESTED","$"+B.dG(j),!0),e.atU("DAILY ROI",A.i.ac(i*100,2)+"%",!0),e.atU("DAYS LEFT",""+(261-t.f)+" d",!0)],v),A.l,d,A.j6,A.h,0,d,d)
j=B.dG(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
A.d.u(u,B.a([D.h59,A.rq,B.o(d,new B.an(A.a0,d,A.ad,A.t,B.a([l,B.x(B.a([n,A.P,D.fXN,A.bB,k,A.av,h,A.av,g,A.P,q,A.am,r,A.am,i,A.av,B.Ep("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,A.a2,D.fHV)],v),A.D,d,A.e,A.N,0,A.p)],v),d),A.f,d,d,new B.n(d,d,o,p,m,D.cc9,A.m),d,d,d,d,A.bH,d,d,1/0),A.abS],v))}u.push(D.fPi)
u.push(A.rq)
A.d.u(u,new B.N(a2,new C.ds_(e,a3),B.T(a2).k("N<1,w>")))
return B.c5(d,A.L,B.bm(!1,B.cc(B.x(u,A.D,d,A.e,A.h,0,A.p),A.t,d,A.y,d,d,new B.P(20,a0.r.b+10,20,124+w.r.d),d,d,A.ah),!0,!1,A.ag,!0,!1),d,!1,!1,d,d)},
bbk(d,e){var w=null,v=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(8),t=B.K(A.k6,A.r,1)
return B.o(w,B.A(B.a([B.W(A.a3R,A.c,w,w,w,16),A.db,B.c("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.eS,w,w,w)},
b64(d){var w=A.a.b1(A.o.v(A.i.S(d*100)),4,"0")
return"****  ****  ****  "+A.a.aX(w,w.length-4)},
atU(d,e,f){var w=null,v=B.a0(217,D.yF.m()>>>16&255,D.yF.m()>>>8&255,D.yF.m()&255)
v=B.c(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bB,B.Ep(e,w,w,B.l(w,w,A.Cq,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.D,w,A.e,A.h,0,A.p)},
cqt(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd3O(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.ac(0,A.H,B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.UY,16),new B.ac(0,A.H,B.a0(115,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),A.dm,14),new B.ac(0,A.H,B.a0(51,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.cN,8)],p)
n=B.ao(d,B.o(d,d,A.f,d,d,new B.n(d,d,d,d,d,new B.bT(A.z,0.5,A.x,d,0,B.a([B.a0(89,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),B.a0(0,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.K(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a0(242,k.m()>>>16&255,k.m()>>>8&255,k.m()&255)
j=B.a0(A.i.S(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
i=B.b1(4279150057)
h=x.p
p=B.A(B.a([new B.a5(44,44,new B.an(A.a0,d,A.ad,A.f,B.a([B.ao(d,B.eK(A.z,0.7853981633974483,B.o(d,d,A.f,d,d,new B.n(d,d,l,m,B.a([new B.ac(0.5,A.H,k,A.J,14),new B.ac(0,A.H,j,A.J,6),new B.ac(0,A.H,B.a0(140,i.m()>>>16&255,i.m()>>>8&255,i.m()&255),new B.r(0,2),4)],p),D.caH,A.m),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eG2],h),d),d),A.b_,e.bbk(b2,!0)],h),A.l,d,A.e,A.h,0,d,d)
a6=B.Ep(a6,1,A.a2,D.fxJ)
i=B.Ep(e.b64(a3),1,A.a2,D.fNu)
j=B.A(B.a([e.b5v(A.i.ac(2.86,2)+"%"),A.e3,e.b5v("261d")],h),A.l,d,A.e,A.h,0,d,d)
k=B.E(B.x(B.a([D.fQE,B.Ep("$"+B.dG(a3),1,A.a2,D.fMd)],h),A.D,d,A.e,A.h,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.c(m,d,d,d,d,d,d,D.fyz,d,d,d)],h),A.dK,d,A.e,A.h,0,d,d)
k=B.o(d,d,A.f,B.a0(89,A.bz.m()>>>16&255,A.bz.m()>>>8&255,A.bz.m()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.E(e.aBm("Daily","$"+B.dG(a4)),1),A.e3,B.E(e.aBm("Total","$"+B.dG(a4*261)),1),A.e3,B.E(e.aBm("Days","261"),1)],h),A.l,d,A.e,A.h,0,d,d)
g=q?d:new C.drZ(e,b3,a3,t)
f=A.i.S(127.5)
f=B.fv(d,d,A.bs,B.a0(f,A.an.m()>>>16&255,A.an.m()>>>8&255,A.an.m()&255),B.a0(f,A.bn.m()>>>16&255,A.bn.m()>>>8&255,A.bn.m()&255),d,3,d,d,A.aS,d,d,d,d,new B.ba(B.m(10),D.b77),d,d,d,d,d)
return B.o(d,new B.an(A.a0,d,A.ad,A.f,B.a([n,B.x(B.a([p,A.bB,D.h_9,A.bB,a6,A.cT,i,A.fH,j,A.fH,m,A.fH,k,A.fH,l,A.P,new B.a5(1/0,40,B.iz(new B.dk(A.dv,A.z,A.f,B.c(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fz5,d,d,d),d),g,f),d)],h),A.D,d,A.e,A.N,0,A.p)],h),d),A.f,d,d,new B.n(d,d,w,a0,o,D.ccL,A.m),d,d,d,A.kG,D.bFe,d,d,1/0)},
b5v(d){var w=null,v=B.a0(115,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(5),t=B.K(A.cA,A.r,1)
return B.o(w,B.c(d,w,w,w,w,w,w,D.fy7,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.zk,w,w,w)},
aBm(d,e){var w=null,v=B.a0(97,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),u=B.m(7),t=B.K(A.bn,A.r,1)
return B.o(w,B.x(B.a([B.c(d,w,w,w,w,w,w,D.fIg,w,w,w),A.rr,new B.dk(A.dC,A.a5,A.f,B.c(e,w,w,w,w,w,w,D.fLc,w,w,w),w)],x.p),A.D,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.lX,w,w,w)}}
C.ak2.prototype={
T(){var w=null,v=B.a([],x._),u=$.ax()
return new C.azU(v,new B.at(A.ax,u),new B.at(A.ax,u),B.mS(0,w,w),new B.i6(),D.Us,C.aiF(),B.a([],x.fw),B.aR(x.N),B.mS(0,w,w))}}
C.azU.prototype={
Z(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=B.Am(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=B.bs(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t].a
if(s.length!==0)u.I(0,s)}r.ae7()
r.PX()
r.atv()
r.cDz()
r.cDP()
$.aU.x1$.push(new C.cOv(r))
r.a.toString},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.asg(),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.cNQ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
gaD_(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPR())return!0
return!1},
gPR(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaYO(){var w,v=this.CW
if(v==null)return A.bF
w=v.bA(new B.V(Date.now(),0,!1))
return w.a<0?A.bF:w},
bGt(){var w=this
if(w.a.c.w)return
if(w.gPR()){if(!w.cx)w.l(new C.cNG(w))}else if(w.cx)w.l(new C.cNH(w))},
cwL(){this.l(new C.cO_(this))},
uK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$uK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.l(new C.cNX(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.l(new C.cNY(t))
w=1
break}w=3
return B.b(C.chu(o.a,s),$async$uK)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.chv(t.a.c.a,s),$async$uK)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.l(new C.cNZ(t,r,q))
t.cFI()
t.bGt()
if(r===3)t.a_f(r)}case 1:return B.h(u,v)}})
return B.i($async$uK,v)},
a_f(d){return this.c8l(d)},
c8l(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bHC(q,r,new C.cNS(t),d,s.c.a),$async$a_f)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_f,v)},
yg(d){return this.bI0(d)},
atv(){return this.yg(!1)},
bI0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a9A(k,C.hKq(l.d)),$async$yg)
case 3:j=m
w=4
return B.b(C.chW(k),$async$yg)
case 4:s=j.a=f
w=5
return B.b(B.at8(k),$async$yg)
case 5:r=f
w=!s.a&&J.cK(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WZ(!0,l,q,p)
m.a=s
w=8
return B.b(C.asi(k,s),$async$yg)
case 8:case 7:w=9
return B.b(C.VY(k),$async$yg)
case 9:o=f
w=10
return B.b(C.a8X(k),$async$yg)
case 10:n=f
if(t.c==null){w=1
break}t.l(new C.cNI(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$yg,v)},
Ro(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ro=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.PX(),$async$Ro)
case 3:s=t.c
if(s==null){w=1
break}r=B.ed(new C.cNV(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).cc(r),$async$Ro)
case 4:w=5
return B.b(t.PX(),$async$Ro)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ro,v)},
cHZ(){this.l(new C.cOi(this))},
cDP(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=B.dg(A.pD,new C.cOc(w))},
cFI(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPR()||w.CW==null)return
w.id=B.dg(A.fQ,new C.cOf(w))},
cDz(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=B.dg(A.jP,new C.cOb(w))
w.FZ()},
FZ(){return this.cFH()},
cFH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return B.b(B.az(),$async$FZ)
case 7:q=e
p=B.aW(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.X.aP(0,p,null)
if(x.f.b(o)){m=B.E6(B.a1(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return B.b(B.Me(),$async$FZ)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aSo(),$async$FZ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return B.b(q.aG("String","app_config",A.X.av(k.ak(),null)),$async$FZ)
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
break}if(i.a!==r.ay)r.l(new C.cOd(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$FZ,v)},
ba1(){A.d.b0(this.f,new C.cOa())},
ae7(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ae7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.O5(t.a.c.a),$async$ae7)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cK(q)){A.d.u(s,q)
A.d.b0(s,new C.cNN())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.J(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.l(new C.cNO(t,s))
t.a3f(!0)
B.bN(A.jw,new C.cNP(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
ahW(){var w=0,v=B.j(x.H),u=this
var $async$ahW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.apP(u.a.c.a,u.f),$async$ahW)
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
ad4(d){var w,v=this
v.l(new C.cNL(v,d))
w=v.e
w===$&&B.d()
if(w.f.length!==0)w.BZ(d,A.cl,A.l0)
else $.aU.x1$.push(new C.cNM(v,d))
if(d===0)v.a3f(!0)
if(d===1)v.cyP(!0)},
a3f(d){$.aU.x1$.push(new C.cO2(this,d))},
aCD(){return this.a3f(!1)},
a2z(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a2R(),$async$a2z)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.l(new C.cNW(t))
case 1:return B.h(u,v)}})
return B.i($async$a2z,v)},
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
return B.b(C.asb(a9.a,b0),$async$nl)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.uK(),$async$nl)
case 10:q.l(new C.cO3(q))
w=1
break
case 8:w=11
return B.b(q.uK(),$async$nl)
case 11:if(q.c!=null&&q.ch===3)q.a_f(3)
case 6:case 4:q.l(new C.cO4(q,c5))
C.VK(q.a.c.a,"user",c5)
q.aCD()
t=13
a8={}
w=16
return B.b(q.a2z(),$async$nl)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a2R(),$async$nl)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.l(new C.cO5(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=B.bFG("",null)
q.l(new C.cO6(q,p))
C.VK(q.a.c.a,"ai",p)
q.aCD()
r=[1]
w=14
break}o=B.nn(a9)
a9=q.a
n=""
m=C.hKq(a9.d)
w=C.hKj(c5)?20:21
break
case 20:w=22
return B.b(C.chV(q.a.c.a),$async$nl)
case 22:q.db=c9
w=23
return B.b(q.yg(!0),$async$nl)
case 23:case 21:w=24
return B.b(B.a9A(q.a.c.a,m),$async$nl)
case 24:l=c9
k=C.i2f(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.b1(A.o.v(B.bL(b3)),2,"0")
b4=A.a.b1(A.o.v(B.bX(b3)),2,"0")
b5=A.a.b1(A.o.v(B.d5(b3)),2,"0")
b6=A.a.b1(A.o.v(B.fM(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.VY(q.a.c.a),$async$nl)
case 25:i=c9
h=C.htx(i,25)
w=26
return B.b(C.a8X(q.a.c.a),$async$nl)
case 26:g=c9
f=C.hve(g)
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
return B.b(C.aiG(a9,q.a.c.a,c5),$async$nl)
case 27:a0=c9
a1=""
if(C.hKj(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.v(d)
b4=B.v(j)
b5=q.a.c.w?"\n"+C.ipi(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.v(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.v(a0)+"\n":""
c0=B.v(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hXA(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.v(c5)
w=28
return B.b(B.rm(o,a2,A.i7,null,null),$async$nl)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=B.bFG(a8.a,a3.a)
a4=c2
a5=B.hJA(a4)
c3=a5.a
a8.b=c3
if(A.d.gau(c3)){a9=B.B(C.is4(c5),x.an)
a6=a9
J.h2(a6,C.is5(c5))
J.h2(a6,C.is6(c5))
J.h2(a6,B.hJ0(c5))
J.h2(a6,C.is9(c5,q.a.c.w))
a8.b=a6}c3=C.irf(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aiY(c3,a6,m,q.a.c.a),$async$nl)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.l(new C.cO7(a8,q,a7))
C.VK(q.a.c.a,"ai",a7)
if(J.cK(a8.b)&&q.c!=null)q.KN(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.l(new C.cO8(q))
C.VK(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.l(new C.cO9(q))
q.aCD()
q.ahW()
if(!q.a.c.w)q.uK()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nl,v)},
cpn(d){var w=B.S(x.N,x.z)
w.n(0,"type",d.a)
w.u(0,d.b)
return w},
cpo(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return A.j4
w=B.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gP(v)
if(u.b(r)){q=B.cl3(B.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
KN(d){return this.cxj(d)},
cxj(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return B.b(C.aiT(p,o,new C.cO0(t,p)),$async$KN)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.HI(p,null,o,!1,!0,t.a.c.a),$async$KN)
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
return B.b(B.HI(p,l.f,o,k,n,j),$async$KN)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a7(p)
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
return B.b(C.b0D(p,B.a([new C.rU("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$KN)
case 14:t.atv()
case 13:p=t.c.K(r).f
o=B.c(m,null,null,null,null,null,null,null,null,null,null)
p.U(new B.b0(o,A.dr,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$KN,v)},
T7(d){return this.cGa(d)},
cGa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$T7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aiT(d,n,new C.cOh(t)),$async$T7)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.HI(d,null,n,!1,!0,t.a.c.a),$async$T7)
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
return B.b(B.HI(d,q.f,r,p,n,o),$async$T7)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(s,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$T7,v)},
cyP(d){$.aU.x1$.push(new C.cO1(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.O(d).ax.a===A.I,j=k?A.bA:A.Cz,i=m.d
i===$&&B.d()
w=x.O
w=k?B.a([A.alm,D.boy],w):B.a([A.aN,A.yA],w)
v=B.m(22)
u=B.a([new B.ac(0,A.H,B.a0(71,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),A.cz,16)],x.V)
t=m.a.c.w?m.gckW():l
s=B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
r=B.K(A.bV,A.r,1.5)
t=B.ay(l,B.o(l,C.hit(m.a.f.Q,48),A.f,l,l,new B.n(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a4)
r=B.c("NGMY Helper",l,1,A.a2,l,l,l,A.dn,l,l,l)
s=B.o(l,l,A.f,l,l,D.b9e,l,8,l,l,l,l,l,8)
if(m.gaD_()&&m.d===0)q=m.gPR()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.o(l,B.A(B.a([t,A.ba,B.E(B.x(B.a([r,A.bB,B.A(B.a([s,A.bm,B.E(B.c(q,l,1,A.a2,l,l,l,B.l(l,l,B.a0(A.i.S(229.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),l,l,l,l,l,l,l,l,11,l,l,A.cF,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.l,l,A.e,A.h,0,l,l)],p),A.D,l,A.e,A.h,0,A.p),1),B.aH(l,l,l,l,A.nX,l,l,l,new C.cOn(d),l,l,l,l,l,l)],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(l,l,l,v,u,new B.a8(A.ay,A.aC,A.x,w,l,l),A.m),l,l,l,E.ank,D.bG1,l,l,l)
v=k?D.uy:A.c
u=B.m(14)
t=B.K(k?A.bw:A.dP,A.r,1)
u=B.o(l,B.A(B.a([m.bKT(),m.cFU(1,A.lw,"Music")],p),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.n(v,l,t,u,l,l,A.m),l,l,l,l,A.eB,l,l,l)
t=m.e
t===$&&B.d()
if(m.gaD_()){v=B.a([],p)
if(m.gPR()){s=B.a0(38,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255)
r=B.m(12)
q=B.K(B.a0(115,A.dr.m()>>>16&255,A.dr.m()>>>8&255,A.dr.m()&255),A.r,1)
v.push(new B.D(A.OP,B.o(l,B.c(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.i0y(m.gaYO())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fKD,A.K,l,l),A.f,l,l,new B.n(s,l,q,r,l,l,A.m),l,l,l,l,A.ez,l,l,1/0),l))}if(m.cy&&!m.gPR()){s=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
r=B.m(12)
q=B.m(12)
o=B.W(A.kh,k?A.iH:A.hQ,l,l,l,16)
v.push(new B.D(A.OP,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,new B.D(A.ez,B.A(B.a([o,A.bm,B.c("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iH:A.hQ,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.l,l,A.b9,A.h,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcwK(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcHY():l
v.push(B.E(new C.ase(s,q,new C.cOo(),r,o,l),1))
v=B.x(v,A.l,l,A.e,A.h,0,A.p)}else v=m.bKU(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hwc(r)
t=B.a([w,A.af,new B.D(A.i4,u,l),A.P,B.E(B.hxa(B.a([v,new C.ash(q,o,n,new C.cOp(m,d),s,l)],p),A.t,t,A.y,new C.cOq(m),l),1)],p)
if(m.d===0&&!m.gaD_()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a6W:D.a6e
w.push(new B.a5(l,36,B.hM(A.t,l,new C.cOr(m),v.length,l,l,A.aM,new C.cOs(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aF:A.dZ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a0(64,r.m()>>>16&255,r.m()>>>8&255,r.m()&255)
q=B.m(22)
o=B.m(22)
n=k?A.aT:A.ft
u=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),v,l,l,l,l,l,2,B.bA(l,new B.b6(4,q,A.a1),l,A.CS,l,l,l,l,!0,new B.b6(4,o,new B.aw(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cOt(m),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a7,l,A.ao,l,A.aWL,l,l),1)
s=m.at
r=s?l:m.gczQ()
w.push(B.A(B.a([u,new B.JV(v,A.aN,l),A.bm,B.aF(!1,A.a3,!0,l,B.aM(!1,l,!0,new B.a5(44,44,s?D.eyR:N.at7,l),A.cQ,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aN,0,l,l,A.cQ,l,l,A.aj)],p),A.dK,l,A.e,A.h,0,l,l))
w=B.x(w,A.l,l,A.e,A.N,0,A.p)
v=k?A.lO:A.c
t.push(B.uB(A.un,B.o(l,new B.D(A.CN,w,l),A.f,l,l,new B.n(v,l,B.K(k?B.a0(41,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(18,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.r,1),A.un,l,l,A.m),l,l,l,l,l,l,l,l),14,!1))}return new B.XP(i,new C.cOu(m),B.c5(l,j,B.bm(!0,B.x(t,A.l,l,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bKT(){var w,v,u,t,s,r,q=null,p=this.d
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
if(w)r=v?A.c:A.aw
else r=A.cC
return B.E(B.ay(q,B.cU(q,B.A(B.a([s,A.bm,B.c("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.b9,A.h,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.m),A.eD,q,q,q,q,A.qS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cNJ(this),q,q,q,q,q,q,!1,A.a4),1)},
cFU(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
if(w)r=v?A.c:A.aw
else r=A.cC
r=B.a([s,A.bm,B.c(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.ay(q,B.cU(q,B.A(r,A.l,q,A.b9,A.h,0,q,q),q,q,A.b0,new B.n(p,q,t,u,q,q,A.m),A.eD,q,q,q,q,A.qS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cOg(this,d),q,q,q,q,q,q,!1,A.a4),1)},
bKU(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bv8:B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
w=B.m(18)
v=B.K(d?A.dq:A.bn,A.r,1)
u=q===0?1:q
return B.o(s,B.kt(!0,s,t.ok,new C.cNK(t,e,d),u,s,A.bS,s,s,!1,!1),A.f,s,s,new B.n(r,s,v,w,s,s,A.m),s,s,s,A.i4,s,s,s,s)},
aS6(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.z(n.h(d,"role"),"user"),l=m?A.j4:this.cpo(d),k=m?A.my:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.u(i,B.a([new B.a5(28,28,C.hit(this.a.f.Q,28),o),A.ab],j))
w=m?A.dK:A.D
j=B.a([],j)
if(h)j.push(D.ez7)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aN
else u=e?A.a03:A.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.K(e?A.bw:A.bn,A.r,1)
q=B.a([new B.ac(0,A.H,B.a0(10,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.dO,6)],x.V)
if(f)n=B.c("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aF:A.dZ,o,o,o,o,o,o,o,o,12,A.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ac:A.bs
p=B.c(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.hec(m,B.o(o,n,A.f,o,o,new B.n(u,o,r,new B.be(A.jW,A.jW,new B.aP(t,t),new B.aP(s,s)),q,o,A.m),o,o,o,o,Y.wP,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hJF(l,e,this.gcG9()))
i.push(new B.dc(1,A.ck,B.x(j,w,o,A.e,A.h,0,A.p),o))
if(m)i.push(A.db)
return new B.D(A.da,B.A(i,A.dK,o,k,A.h,0,o,o),o)},
bKS(d,e){return this.aS6(d,e,!1)}}
C.aNh.prototype={
Z(){this.a4()
$.zm().aV(0,this.gFa())},
t(){$.zm().a6(0,this.gFa())
this.a3()}}
C.aNi.prototype={
Z(){this.a4()
$.zm().aV(0,this.gFa())},
t(){$.zm().a6(0,this.gFa())
this.a3()}}
C.aNj.prototype={
Z(){this.a4()
$.zm().aV(0,this.gFa())},
t(){$.zm().a6(0,this.gFa())
this.a3()}}
C.aOg.prototype={
Z(){this.a4()
$.zm().aV(0,this.gFa())},
t(){$.zm().a6(0,this.gFa())
this.a3()}}
C.XE.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.apy.prototype={
T(){return new C.aEZ()}}
C.aEZ.prototype={
Z(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=B.bs(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B4(d,e){return this.cLK(d,e)},
cLK(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$B4=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.dIw(q,e))
t=3
w=6
return B.b(d.$0(),$async$B4)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.l(new C.dIx(q))
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
break}t.l(new C.dIn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$By,v)},
abx(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$abx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$abx)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.d()
q=t.e
q===$&&B.d()
p=t.f
p===$&&B.d()
u=B.OW(s,B.L0(B.c4V(r,q,s,p).f1(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abx,v)},
YT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$YT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pF(s,t.a.c,!1),$async$YT)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.B4(new C.dIl(t),"Preparing download\u2026"),$async$YT)
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
return B.b(t.B4(new C.dIv(t),"Creating QR code\u2026"),$async$a_s)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_s,v)},
a_r(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ik6(r),$async$a_r)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.B4(new C.dIk(t,s),"Looking up code\u2026"),$async$a_r)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_r,v)},
af0(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$af0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xV.cq().N2(A.Tr,A.v2,!0),$async$af0)
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
case 6:u=B.HF()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af0,v)},
AI(d,e,f){return this.bNc(d,e,f)},
aTr(d,e){return this.AI(d,!1,e)},
bNb(d){return this.AI(d,!1,!1)},
bNc(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$AI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$AI)
case 3:if(t.c==null){w=1
break}if(!C.c5_(d,t.a.c,null)){t.lg(C.c50(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.d()
s=!C.hXh(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ikj(s,q,t.a.c,d),$async$AI)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m0(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.d()
r=o}w=5
return B.b(B.rY(s,p,r,!1,null,null,d.ax),$async$AI)
case 5:if(t.c==null){w=1
break}t.l(new C.dIj(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$AI,v)},
af_(){var w=0,v=B.j(x.H),u=this
var $async$af_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.B4(new C.dIm(u),"Reading file\u2026"),$async$af_)
case 2:return B.h(null,v)}})
return B.i($async$af_,v)},
Ya(d){return this.bOw(d)},
bOw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ya=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.d()
s=new B.d9("local_qr_dep_"+1000*r,q.a,d,A.fY,A.fz,"Admin deposit ($"+B.dG(d)+")",null,null,A.cx,new B.V(Date.now(),0,!1))
C.cjY(t.d,s)
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
b9p(d){var w=null
return B.ce(w,w,!0,w,new C.dIt(),d,w,!0,!0,x.N)},
Xc(d){return this.bGn(d)},
bGn(d){var w=0,v=B.j(x.H),u,t=this,s
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
Fv(d){return this.cul(d)},
cul(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$Fv)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b3x(d,t.a.c),$async$Fv)
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
return B.b(t.b9p(r),$async$Fv)
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
return B.b(C.cjR(d,o,n.a,r,p),$async$Fv)
case 7:w=6
return B.b(t.Xc(f),$async$Fv)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Fv,v)},
Fw(d){return this.cum(d)},
cum(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.By(),$async$Fw)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.cjQ(d,t.a.c),$async$Fw)
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
return B.b(t.b9p(r),$async$Fw)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.d()
n=t.d
n===$&&B.d()
w=7
return B.b(C.Xh(o,n.a,d,r,p),$async$Fw)
case 7:w=6
return B.b(t.Xc(f),$async$Fw)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Fw,v)},
Qb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Qb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.DN()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).cc(B.ed(new C.dIo(),!0,null,x.N)),$async$Qb)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.X(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.B4(new C.dIp(t,r),"Applying deposit\u2026"),$async$Qb)
case 6:w=1
break
case 5:w=7
return B.b(t.B4(new C.dIq(t,r),"Loading\u2026"),$async$Qb)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Qb,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=n?A.nE:A.qB,l=n?A.c:A.a_,k=n?A.aR:A.an,j=B.aD(d,A.dF,x.w).w,i=n?A.bw:A.w.j(0.06),h=x.p
i=B.A(B.a([B.aM(!1,o,!0,B.o(A.z,B.W(A.eJ,l,o,o,o,16),A.f,o,o,new B.n(i,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cQ,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dIy(d),o,o,o,o,o,o,o)],h),A.l,o,A.e,A.h,0,o,o)
w=B.c("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.c("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cF,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a26(D.bTT,"Download",A.a7a,u?o:p.gbU9(),o),1)
t=B.A(B.a([t,A.eu,B.E(new C.a26(A.jB,"Show QR",D.dDI,u?o:p.gca4(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r
s=B.E(new C.a26(D.bTU,"Upload",A.a6y,u?o:p.gca2(),o),1)
s=B.A(B.a([s,A.eu,B.E(new C.a26(A.jC,"Scan QR",D.db5,u?o:p.gca3(),o),1)],h),A.l,o,A.e,A.h,0,o,o)
u=p.r?o:p.gca1()
r=n?A.c.j(0.06):A.aV.j(0.08)
q=B.m(16)
j=B.a([B.cu(B.a([i,A.aB,w,A.P,v,A.lg,t,A.aB,s,A.aB,new C.bvE(A.ty,"Enter Code",A.a5V,u,o),A.lg,B.o(o,B.A(B.a([B.W(A.hs,A.aV,o,o,o,18),A.as,B.E(B.c("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.D,o,A.e,A.h,0,o,o),A.f,o,o,new B.n(r,o,o,q,o,o,A.m),o,o,o,o,A.jy,o,o,o)],h),o,o,new B.P(20,j.r.b+8,20,32),o,o,A.ah,!1)],h)
if(p.r){i=n?A.iR:A.c
w=p.w
if(w==null)w="Working\u2026"
j.push(B.ao(0,B.aF(!1,A.a3,!0,o,new B.D(A.CW,B.A(B.a([H.aVH,A.ba,B.E(B.c(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),A.l,o,A.e,A.h,0,o,o),o),A.f,i,8,o,o,o,o,o,A.aj),o,o,0,0,o,o))}return B.c5(o,m,B.bm(!1,new B.an(A.a0,o,A.ad,A.t,j,o),!0,!1,A.ag,!0,!1),o,!1,!1,o,o)}}
C.a26.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.x(B.a([B.o(v,B.W(w.c,A.c,v,v,v,30),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.af,B.c(w.d,v,v,v,v,v,v,A.uf,v,v,v)],x.p),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(v,v,v,r,q,new B.a8(A.ay,A.aC,A.x,s,v,v),A.m),v,140,v,v,A.bS,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.bvE.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.ac(0,A.H,A.d.gal(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(v,B.A(B.a([B.o(v,B.W(w.c,A.c,v,v,v,24),A.f,v,v,new B.n(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eu,B.c(w.d,v,v,v,v,v,v,A.uf,v,v,v)],x.p),A.l,v,A.b9,A.h,0,v,v),A.f,v,v,new B.n(v,v,v,r,q,new B.a8(A.ay,A.aC,A.x,s,v,v),A.m),v,v,v,v,D.bIf,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.a0K.prototype={
T(){return new C.bmo()}}
C.bmo.prototype={
gaz5(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a4()
w.S4()
w.f=B.dg(A.oC,new C.dIC(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a3()},
S4(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$S4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.vj(q.e,q.f),$async$S4)
case 3:q=e.a
s=B.c4V(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.OW(t.a.e,B.L0(s.f1(),null,"  ")),$async$S4)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.l(new C.dIz(t,r))
case 1:return B.h(u,v)}})
return B.i($async$S4,v)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.nE:A.qB,s=u?A.iR:A.c,r=u?A.c:A.bq,q=B.eR(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aYT,v,v,v,1,v,!0),p=B.m(24),o=B.K(A.aV.j(0.35),A.r,1),n=w.d,m=B.qi(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.c("Code: "+w.gaz5(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aV.j(0.12),i=B.m(20),h=x.p
i=B.aM(!1,k,!0,B.o(v,B.A(B.a([B.W(A.fS,A.aV,v,v,v,14),A.bm,B.c("Copy code",v,v,v,v,v,v,B.l(v,v,A.aV,v,v,v,v,v,v,v,v,12,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.n(j,v,v,i,v,v,A.m),v,v,v,v,A.lV,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dIA(w,d),v,v,v,v,v,v,v)
return B.c5(q,t,new B.D(A.ae,B.x(B.a([B.E(B.o(v,B.x(B.a([A.P,m,A.bx,l,A.P,i,A.aB,B.c("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.l,v,A.b9,A.h,0,A.p),A.f,v,v,new B.n(s,v,o,p,v,v,A.m),v,v,v,v,A.ae,v,v,1/0),1),A.aO,new B.a5(1/0,v,B.bJ(A.Bn,v,new C.dIB(d),B.bn(A.aV,v,v,v,v,A.hl,v,v,v,v,v,v)),v)],h),A.l,v,A.e,A.h,0,A.p),v),v,!1,!1,v,v)}}
C.a0L.prototype={
T(){return new C.bmp(B.A0(A.yZ,A.ol,A.vv))}}
C.bmp.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return B.c5(B.eR(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h5y,w,w,w,1,w,!0),A.w,B.A_(this.d,A.bZ,new C.dID(this,d)),w,!1,!1,w,w)}}
C.ag5.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.O(a0).ax.a===A.I,k=l?A.iR:A.c,j=l?A.c:A.a_,i=l?A.aR:A.an,h=l?A.aT:A.dP,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.K(A.aV.j(0.35),A.r,1)
v=B.a([new B.ac(0,A.H,A.aV.j(0.16),A.kL,36)],x.V)
u=B.o(m,D.c_1,A.f,m,m,new B.n(m,m,m,B.m(18),A.a79,D.ca_,A.m),m,58,m,m,m,m,m,58)
t=B.c("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.c("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.nE:A.qB
q=B.m(18)
p=B.K(A.aV.j(0.22),A.r,1)
o=x.p
g=B.a([new C.Rl("Account",A.a.i(this.d),i,j,m),A.T,new C.Rl("Balance","$"+B.dG(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.u(g,B.a([A.T,new C.Rl("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.Rl("Saved on",""+B.bL(f)+"/"+B.bX(f)+"/"+B.bD(f),i,j,m))
g.push(A.T)
g.push(new C.Rl("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.o(m,B.x(g,A.D,m,A.e,A.h,0,A.p),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.bS,m,m,1/0)
r=A.at.j(l?0.14:0.12)
q=B.m(14)
p=B.K(A.at.j(0.35),A.r,1)
n=B.W(A.tv,l?A.aQ:A.d6,m,m,m,16)
return B.eI(m,A.L,new B.cO(A.YC,new B.bP(new B.n(k,m,w,e,v,m,A.m),A.bl,new B.D(A.wU,B.x(B.a([u,A.aO,t,A.P,s,A.bx,g,A.aB,B.o(m,B.A(B.a([n,A.ab,B.E(B.c("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bL:A.ii,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.D,m,A.e,A.h,0,m,m),A.f,m,m,new B.n(r,m,p,q,m,m,A.m),m,m,m,m,A.ez,m,m,1/0),A.dc,B.A(B.a([B.E(B.dU(A.oe,new C.f9w(a0),B.di(m,m,m,m,m,m,m,m,m,j,m,m,A.cn,m,new B.ba(B.m(14),A.a1),new B.aw(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bJ(D.fOy,m,new C.f9x(a0),B.bn(A.aV,m,m,m,m,m,A.cn,m,new B.ba(B.m(14),A.a1),m,m,m)),2)],o),A.l,m,A.e,A.h,0,m,m)],o),A.l,m,A.e,A.N,0,A.p),m),m),m),m,m,m,A.eA,m,A.d7,m,m,m)}}
C.Rl.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a5(92,v,B.c(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.c(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.G,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.D,v,A.e,A.h,0,v,v)}}
C.a_S.prototype={
T(){return new C.aCa(new B.at(A.ax,$.ax()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aCa.prototype={
Z(){this.a4()
$.aU.x1$.push(new C.dhr(this))},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.e.t()
this.a3()},
ca6(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=u?A.c:A.a_,r=u?A.aR:A.an,q=u?A.nE:A.qB,p=u?A.aT:A.dP,o=B.m(24),n=B.K(A.aV.j(0.35),A.r,1),m=B.a([new B.ac(0,A.H,A.aV.j(0.18),A.fU,32)],x.V),l=B.o(v,W.atR,A.f,v,v,new B.n(v,v,v,B.m(18),A.a79,D.ccV,A.m),v,56,v,v,v,v,v,56),k=B.c("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.c("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.G,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uY(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bv7(new C.dho())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eI(v,A.L,new B.cO(A.MC,new B.bP(new B.n(t,v,n,o,m,v,A.m),A.bl,new B.D(A.wU,B.x(B.a([l,A.aO,k,A.P,j,A.e4,B.aN(!1,A.Z,!1,v,!0,A.t,v,B.aO(),w.d,v,v,v,v,v,2,B.bA(v,v,v,A.CV,v,v,"",v,!0,new B.b6(4,B.m(16),new B.aw(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b6(4,B.m(16),D.b75),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dhp(w),v,!1,v,v,!1,v,!0,v,A.ae,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mF,v,v,v,v),A.e4,B.A(B.a([B.E(B.dU(A.oe,new C.dhq(d),B.di(v,v,v,v,v,v,v,v,v,s,v,v,A.cn,v,new B.ba(B.m(14),A.a1),new B.aw(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bJ(D.fSp,v,w.gca5(),B.bn(A.aV,v,v,v,v,v,A.cn,v,new B.ba(B.m(14),A.a1),v,v,v)),2)],f),A.l,v,A.e,A.h,0,v,v)],f),A.l,v,A.e,A.N,0,A.p),v),v),v),v,v,v,A.P5,v,A.d7,v,v,v)}}
C.aq4.prototype={
T(){return new C.bmw(A.cU)},
hK(d){return this.x.$1(d)},
bu(){return this.y.$0()}}
C.bmw.prototype={
Z(){var w,v=this
v.a4()
w=v.a
w.toString
$.tV=$.tV+1
v.r=A.o.M(A.o.D(C.fTA(w.e,w.d.y2),1,600))
w=v.a
if(!J.lo(w.d.y2,w.e))v.r=C.ipL(v.a.e)
v.w=B.dg(A.fQ,new C.dP_(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.coe()
C.b2k()
this.a3()},
coe(){var w,v,u,t,s,r=this,q=null
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
KX(d,e){return this.cAv(d,e)},
b92(d){return this.KX(!1,d)},
cAu(d){return this.KX(d,"")},
cAv(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.bHy(s,C.bHe(),C.hmu(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KX)
case 5:w=1
break
case 4:n=B.ot(A.i.ac(t.a.w*1.46*r,2))
m=r>=1
t.l(new C.dOR(t,n,r))
s=A.o.v(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d9(s,p,n,A.hc,A.fz,q,null,null,A.cx,new B.V(Date.now(),0,!1))
B.aiR(l,!0)
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
return B.b(C.bHy(s,C.bHe(),C.hmu(),""+t.e+"/"+t.f,k,q,!0),$async$KX)
case 6:w=7
return B.b(C.aiJ(t.a.f,k),$async$KX)
case 7:case 1:return B.h(u,v)}})
return B.i($async$KX,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&B.d()
w=A.o.ar(n,60)
v=A.a.b1(A.o.v(A.o.F(n,60)),2,"0")
u=B.aH(o,o,o,o,A.QO,o,o,o,new C.dOU(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=B.E(B.x(B.a([B.c(t.f,o,1,A.a2,o,o,o,A.jX,o,o,o),B.c("Win $"+A.i.ac(t.w*1.46,2)+" \xb7 stake $"+A.i.ac(p.a.w,2),o,o,o,o,o,o,D.fCW,o,o,o)],s),A.D,o,A.e,A.h,0,A.p),1)
r=p.a.c.a
n=n<=10?A.aA:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.arS(r,new C.dOV(p),o),A.bm,B.cU(o,B.A(B.a([D.c3U,A.db,B.c(""+w+":"+v,o,o,o,o,o,o,A.iP,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o,o,A.b0,new B.n(n,o,o,q,o,o,A.m),A.a3,o,o,o,o,A.nM,o,o,o)],s),A.l,o,A.e,A.h,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aSp(o,D.bwi,B.bm(!0,B.x(B.a([new B.D(D.bKs,q,o),new C.Ow(w*r,w,v,o),new B.D(E.anO,B.A(B.a([B.E(B.bw(B.m(99),B.kc(A.bw,o,o,9,o,r,new B.mf(A.d.gH(n.r),x.dw)),A.aq),1),A.as,B.c(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fME,o,o,o)],s),A.l,o,A.e,A.h,0,o,o),o),B.E(new B.D(A.z7,B.bw(B.m(22),new B.bP(new B.n(o,o,o,o,o,new B.a8(A.aX,A.b4,A.x,B.a([A.d.gH(p.a.r).j(0.35),E.ald],x.O),o,o),A.m),A.bl,new B.dp(p.x,Q.hI9(p.a.e,new Q.A7(new C.dOW(p),new C.dOX(p),new C.dOY(p),p.d)),o),o),A.aq),o),1)],s),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.a8a.prototype={
B(d){var w=null,v=B.m(26),u=B.K(A.at.j(0.5),A.r,1),t=B.a([new B.ac(0,A.H,A.at.j(0.22),A.J,26)],x.V)
return B.eI(w,A.L,B.o(w,B.x(B.a([B.o(w,D.bYd,A.f,w,w,new B.n(A.at.j(0.16),w,B.K(A.at,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.h1i,A.P,B.c("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.P,B.c("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aO,new B.a5(1/0,w,B.bJ(D.fPk,w,new C.cdZ(d),B.bn(A.at,w,w,w,A.w,A.hl,w,w,new B.ba(B.m(14),A.a1),w,w,w)),w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.n(w,w,u,v,t,D.caF,A.m),w,w,w,w,D.bIG,w,w,w),w,w,w,A.a1W,w,A.d7,w,w,w)}}
C.apx.prototype={
T(){return new C.bmm(null,null)},
ga_(d){return this.e}}
C.bmm.prototype={
Z(){var w,v=this,u=null
v.a4()
w=v.d=B.bp(u,A.CJ,u,1,u,v)
w.dm()
w.dV$.I(0,new C.dI8(v))
w=B.bp(u,A.mj,u,1,u,v)
w.cK(0)
v.e=w
w=B.bp(u,A.Ov,u,1,u,v)
w.cK(0)
v.f=w
w.dm()
w.dV$.I(0,new C.dI9(v))
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
w.bzW()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Ts[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Ts[A.o.F(a9.w,5)]:b0
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
b3=B.a([B.e1(A.z,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,b0,B.a([new B.ac(6+e,A.H,A.aD.j(0.4+q*0.3),A.J,32+q*22),new B.ac(3,A.H,A.bb.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.o(b0,b0,A.f,b0,b0,new B.n(B.ap(A.bi,A.aQ,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ac(0,A.H,A.aD.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iW(B.wX(a4+a3),b0,A.z,!0,b0,a8,b0),new B.r(a6*a0+a5*b2*0.04,a7*a0)))}A.d.u(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(b2*0.5),B.a([new B.ac(b2*0.02,A.H,A.w.j(0.4+b1),A.J,b2*0.14)],e),b0,A.m),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.r(0,n+b3)))
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
if(a9.a.c)a2=D.dhf
else{a2=B.ap(A.c,A.kU,q*0.45)
a2.toString
a2=B.a([a2,A.cg,A.cA],x.O)}a4=B.ap(A.bP,A.aD,q*0.65)
a4.toString
a4=B.K(a4,A.r,3)
e=B.a([new B.ac(0,A.H,A.w.j(0.3),D.evn,16)],e)
if(!a9.a.c)e.push(new B.ac(p*3,A.H,A.aD.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.ac(0,A.H,A.c.j(0.9),A.UY,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bS(0,new B.bP(new B.n(b0,b0,b0,B.m(d),b0,new B.a8(new B.de(-1+Math.cos(j)*0.8,-1),new B.de(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.m),A.bl,b0,b0),0,0,0))
g.push(B.ao(b0,B.o(b0,b0,A.f,b0,b0,new B.n(b0,b0,b0,B.m(6),b0,new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.m),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.d8(A.w.j(0.18),A.dO,5)],x.C)
if(!a9.a.c)d.push(new B.d8(A.aD.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.uM(B.c(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b0,A.jw,b3),b0,b0,b0))
f.push(B.dO(B.fA(A.z,B.o(b0,new B.an(A.a0,b0,A.ad,A.t,g,b0),A.f,b0,b0,new B.n(b0,b0,a4,a1,e,new B.a8(A.ay,A.aC,A.x,a2,b0,b0),A.m),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.r(0,n)))
return new B.a5(h,h,new B.an(A.z,b0,A.ad,A.f,f,b0),b0)}}
C.aNP.prototype={
aY(){this.b8()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.Ow.prototype={
B(d){var w=null,v=new C.cgq(),u=v.$3("STAKE","$"+A.i.ac(this.e,2),A.c),t=B.m(18),s=B.K(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ac(0,A.H,A.aV.j(0.35),A.J,14)],x.V),q=x.p
return new B.D(A.OP,B.A(B.a([u,B.o(w,B.x(B.a([D.h_W,B.lC(new C.cgp(),w,A.b0,A.n4,w,w,new B.bt(w,this.c,x.e7),x.gR)],q),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(w,w,s,t,r,D.auJ,A.m),w,w,w,w,A.P1,w,w,w),v.$3("FULL WIN","$"+A.i.ac(this.d,2),A.bL)],q),A.l,w,A.e,A.h,0,w,w),w)}}
C.arS.prototype={
B(d){var w=null,v=B.m(99),u=B.K(A.k3.j(0.7),A.r,1)
return B.o(w,B.A(B.a([D.bWE,A.db,C.asH(this.d,A.oc,this.c)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(w,w,u,v,w,D.auJ,A.m),w,w,w,w,A.Pc,w,w,w)},
ge3(){return this.c}}
C.OE.prototype={
T(){return new C.bn6(null,null)}}
C.bn6.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.mj,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bAy()},
b2h(d,e){var w=this.a.d,v=B.T(w).k("N<1,q>"),u=B.B(new B.N(w,C.iw8(),v),v.k("ak.E"))
w=this.d
w===$&&B.d()
return B.c7(w,new C.e7N(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c5(w,D.akv,B.bm(!0,this.b2h(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.b2h(0,d)},
azU(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.o(w,B.W(d,f,w,w,w,17),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,32,w,w,w,w,w,32),A.as,B.E(B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w)}}
C.aOq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.aeX.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aD(d,A.dF,o).w.r.d,m=this.c,l=J.cF(m),k=l.eO(m,new C.e7Q()).gL(0),j=new B.ee(l.dO(m,new C.e7R(),x.cD),x.bG).cC(0,0,new C.e7S())
o=B.aD(d,A.bY,o).w
w=x.p
v=B.a([A.T,B.o(p,p,A.f,p,p,new B.n(A.aT,p,p,B.m(2),p,p,A.m),p,4,p,p,p,p,p,42),new B.D(A.ao5,B.A(B.a([B.o(p,D.c6r,A.f,p,p,new B.n(p,p,p,B.m(14),B.a([new B.ac(0,A.H,A.fe.j(0.45),A.J,14)],x.V),D.auC,A.m),p,44,p,p,p,p,p,44),A.ba,D.bMR,B.aH(p,p,p,p,A.ly,p,p,p,new C.e7T(d),p,p,p,p,p,p)],w),A.l,p,A.e,A.h,0,p,p),p)],w)
if(l.gcn(m)){u=C.hgJ("GAMES",""+l.gL(m),A.ey)
t=C.hgJ("WON",""+k,A.k3)
s=j>=0
r=s?"+":"-"
q=C.bDN(j)
s=s?A.k3:A.eW
v.push(new B.D(D.bGO,B.A(B.a([u,A.ab,t,A.ab,C.hgJ("NET",r+q,s)],w),A.l,p,A.e,A.h,0,p,p),p))}if(l.gau(m))v.push(new B.D(new B.P(24,36,24,24+n),B.x(B.a([B.W(D.bSC,A.c.j(0.35),p,p,p,52),A.af,B.c("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.G,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.c("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.l,p,A.e,A.h,0,A.p),p))
else v.push(new B.dc(1,A.ck,B.hM(A.t,p,new C.e7U(this),l.gL(m),new B.P(14,2,14,16+n),p,A.ah,new C.e7V(),!1),p))
return B.o(p,B.x(v,A.l,p,A.e,A.N,0,A.p),A.f,p,new B.aY(0,1/0,0,o.a.b*0.88),D.b9W,p,p,p,p,p,p,p,p)}}
C.aeW.prototype={
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
r=w}q=h.gbkT()
w=new C.e7P()
s=B.m(14)
p=B.a([r.j(0.13),D.bv1],x.O)
o=B.K(r.j(0.4),A.r,1)
n=B.W(g?A.mp:A.cB,r,i,i,i,16)
m=B.E(B.c(h.b,i,1,A.a2,i,i,i,A.ue,i,i,i),1)
l=r.j(0.2)
k=B.m(99)
k=B.o(i,B.c(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.n(l,i,i,k,i,i,A.m),i,i,i,i,D.bKk,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bDN(q)}else{l=g?"+":"-"
l+=C.bDN(h.d)}j=x.p
l=B.A(B.a([n,A.bm,m,k,A.bm,B.c(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.l,i,A.e,A.h,0,i,i)
k=C.e7O("STAKE",w.$1(h.w),A.c)
w=B.A(B.a([k,A.db,C.e7O("PAID",C.bDN(g?h.d:0),r),A.db,C.e7O("BEFORE",w.$1(h.x),A.ey),A.db,C.e7O("AFTER",w.$1(h.y),A.dA)],j),A.l,i,A.e,A.h,0,i,i)
n=C.irj(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.o(i,B.x(B.a([l,A.am,w,A.av,B.c(n+h,i,1,A.a2,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.al,i,A.e,A.h,0,A.p),A.f,i,i,new B.n(i,i,o,s,i,new B.a8(A.ay,A.aC,A.x,p,i,i),A.m),i,i,i,i,A.kd,i,i,i)}}
C.aCU.prototype={
T(){return new C.biC(A.cU,null,null)}}
C.biC.prototype={
Z(){var w,v,u,t=this
t.a4()
w=B.bp(null,A.n3,null,1,null,t)
w.cK(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.afk(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[A.a8m,A.tL,A.d3,A.c][w.aw(4)],[A.i6,A.ki,A.ea,A.x1][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&B.d()
w.t()
this.bzq()},
B(d){var w=null,v=this.d
v===$&&B.d()
return B.as(B.aF(!1,A.a3,!0,w,B.c7(v,new C.doz(this,d),w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)}}
C.afk.prototype={
ga_(d){return this.f}}
C.aNk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.b37.prototype={
B(d){return new B.wq(new C.ciR(this),null,new B.he(B.a([$.zm(),$.a4t()],x.U)),null)},
ge3(){return this.c}}
C.O8.prototype={
ci5(){if(this.c!=null)this.l(new C.c6f())}}
C.JH.prototype={}
C.arf.prototype={
T(){return new C.aFK(A.cU,new B.at(A.ax,$.ax()))},
cNv(){return this.d.$0()},
cZt(){return this.f.$0()},
cZh(d,e){return this.r.$2(d,e)},
d_4(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aFK.prototype={
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
avB(){var w=B.cG(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
BB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$BB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.avB()
if(s<2){t.azV("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cNv()<s){t.azV("Insufficient balance.")
w=1
break}if(!t.a.cZh(s,"Dice Roll bet")){t.azV("Could not place bet.")
w=1
break}t.a.toString
t.l(new C.e0i(t))}w=3
return B.b(C.cf8(t.a.e),$async$BB)
case 3:r=t.a
q=C.itA(r.e,r.c,t.d)
t.a.cZt()
B.b1I(t.a.e)
t.l(new C.e0j(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bN(new B.bf(1000*(40+p*6)),null,r),$async$BB)
case 7:if(t.c==null){w=1
break}new C.e0k(t).$0()
t.c.er()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bN(A.ka,null,r),$async$BB)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hl9(q)
t.l(new C.e0l(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.d_4(m,"Dice Roll "+n,o)
t.l(new C.e0m(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.i.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(m,2)+" added to your balance"
w=12
return B.b(C.bHy(r,C.bHe(),new C.e0n(t),n,k,"YOU WIN!",!0),$async$BB)
case 12:w=13
return B.b(C.aiJ("Dice Roll",l?"+$"+A.i.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(m,2)+" added to your balance"),$async$BB)
case 13:w=10
break
case 11:w=14
return B.b(C.bHy(r,C.bHe(),new C.e0o(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$BB)
case 14:C.vf(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$BB,v)},
azV(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.avB(),d=x.w,a0=B.aD(a2,A.dF,d).w,a1=Math.min(B.aD(a2,A.bY,d).w.a.a*0.44,200)
d=B.hu(A.at2,D.h7w,new C.e0r(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b_,B.o(f,B.A(B.a([A.asY,A.bm,C.asH(v.d,A.ja,u)],t),A.l,f,A.e,A.N,0,f,f),A.f,f,f,new B.n(A.d3,f,f,w,f,f,A.m),f,f,f,f,A.lW,f,f,f)],t),A.l,f,A.e,A.h,0,f,f)
u=g.z
v=B.a0(140,D.a0a.m()>>>16&255,D.a0a.m()>>>8&255,D.a0a.m()&255)
d=B.m(18)
s=B.K(B.a0(31,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
r=g.x
d=B.E(B.o(f,B.as(new C.apx(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.n(v,f,s,d,f,f,A.m),f,f,f,f,f,f,f,1/0),1)
v=B.c("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Ts[q]
o=C.hl9(p)
n=p>0?A.bj:A.aA
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.aw(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ac(1,A.H,n.j(0.65),A.J,14)],r):A.Tf
m=m?18:15
s.push(new B.bz(1,A.bd,new B.D(A.jg,B.o(A.z,B.c(o,f,f,f,f,f,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),A.f,f,f,new B.n(k,f,new B.bF(h,h,h,h),new B.be(j,j,j,j),n,f,A.m),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.af,v,A.am,B.A(s,A.l,f,A.e,A.h,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hl9(v)
s=g.r
s.toString
d.push(new B.D(A.jx,B.c("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.be:A.c_,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bK(A.a5,f,f,B.c("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a0(217,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),f,f,f,f,f,f,f,f,12,f,f,A.G,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.B(new B.N(B.a([2,5,10,25],x.n),new C.e0s(g),v),v.k("ak.E"))
s=g.y
r=B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v.push(B.E(new B.D(A.a21,B.aN(f,A.Z,!1,f,!0,A.t,f,B.aO(),g.e,f,f,f,f,f,2,B.bA(f,new B.b6(4,B.m(10),A.a1),f,A.jQ,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.m4,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.ak,f,f,f,f,f,A.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.hb,!0,A.K,f,A.ao,f,f,f,f),f),1))
d.push(B.A(v,A.l,f,A.e,A.h,0,f,f))
d.push(A.P)
d.push(new B.bK(A.a9,f,f,B.c("Perfect Score Profit: +$"+A.i.ac(g.avB()*0.46,2),f,f,f,f,f,f,I.aXB,f,f,f),f))
d.push(A.T)
d=B.E(new B.D(A.i4,B.x(d,A.al,f,A.e,A.h,0,A.p),f),1)
v=g.x?f:g.gcx1()
s=B.fv(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.ba(B.m(14),A.a1),f,f,f,f,f)
return C.aSp(f,D.a0o,B.bm(!0,B.x(B.a([new B.D(D.bKN,w,f),new C.Ow(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.P(14,4,14,8+a0.r.d),new B.a5(1/0,52,B.iz(B.c("\ud83c\udfb2 ROLL ($"+A.i.ac(e,2)+")",f,f,f,f,f,f,A.lF,f,f,f),v,s),f),f)],t),A.l,f,A.e,A.h,0,A.p),1)],t),A.l,f,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0))}}
C.arY.prototype={
T(){return new C.aG_(A.lc,new B.at(A.ax,$.ax()))},
cZ9(d){return this.e.$1(d)}}
C.aG_.prototype={
gauo(){var w,v=this.r
if(v===$){w=A.o.v(1e4+A.cU.aw(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gRv(){var w=this.d,v=this.a
return w===A.lc?A.a.i(v.f.a):A.a.i(v.f.b)},
gaaO(){var w=this.gRv(),v=B.af("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.V$=$.ax()
w.R$=0
this.a3()},
JN(d,e){return this.bNF(d,e)},
bNF(d,e){var w=0,v=B.j(x.H),u=this,t
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
q=r.d===A.lc?B.cD("https://cash.app/"+r.gaaO()+"/"+o,0,null):B.cD("bitcoin:"+r.gRv(),0,null)
t=4
w=7
return B.b(B.iQ(q,A.fp,null),$async$Rq)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.lc?r.gaaO():r.gRv()
w=10
return B.b(r.JN(n,r.d===A.lc?"Cash App tag":"Bitcoin address"),$async$Rq)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.lc?r.gaaO():r.gRv()
w=11
return B.b(r.JN(n,r.d===A.lc?"Cash App tag":"Bitcoin address"),$async$Rq)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rq,v)},
a1Z(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a1Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().blF(A.eT),$async$a1Z)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fs(),$async$a1Z)
case 4:s=e
t.l(new C.e80(t,A.a.c6(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a1Z,v)},
cei(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.lc?C.hJv(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.lc?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c(t,u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.U(B.b2(u,u,u,u,u,A.t,u,B.c("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).v(0)
w=v.a
t.cZ9(new B.d9(s,w.c.a,w.d,A.fY,v.d,r,v.f,v.gauo(),A.dI,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.j3(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eR(o,o,o,!0,!0,A.Cb,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.Iy,o,o,o,new C.e81(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fR3,o,o,o,1,o,!0),m=B.m(26),l=B.K(D.f0.j(0.25),A.r,1),k=x.V,j=B.a([new B.ac(0,A.H,A.b5.j(0.25),A.eO,24)],k),i=x.p
j=B.o(o,B.x(B.a([B.c("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.G,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,new B.dk(A.dC,A.z,A.f,B.c("$"+B.dG(p.a.d),o,o,o,o,o,o,D.fyV,o,o,o),o),A.am,B.c("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.f0.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,l,m,j,D.cdJ,A.m),o,o,o,o,A.aoi,o,o,o)
m=p.c8L()
l=p.aDG(1,"Send the money to NGMY Pay",p.ceg())
w=p.aDG(2,"Put this code in the payment note",p.bMf())
v=p.d===A.lc
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aDG(3,u,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.e,o,o,o,o,o,2,B.bA(o,o,o,o,o,o,o,o,!0,new B.b6(4,B.m(18),new B.aw(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.uN,!0,o,o,o,o,new B.b6(4,B.m(18),D.b70),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fAr,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.uf,!0,A.a7,o,A.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.f0:A.c
s=B.K(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bw(B.m(14),new B.cO(D.b8q,new B.FC(p.f,o),o),A.aq),A.P,D.fjl,A.av],i),A.l,o,A.e,A.h,0,A.p):B.x(B.a([B.o(o,D.c5B,A.f,o,o,new B.n(D.f0.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.fWB,A.cT,B.c("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.l,o,A.e,A.h,0,A.p)
return B.c5(n,A.Cb,B.as(new B.cO(A.afN,B.cu(B.a([j,A.bx,m,A.bx,l,w,t,p.baD(4,"Screenshot of your payment",B.ay(o,B.o(o,q,A.f,o,o,new B.n(A.uN,o,s,u,o,o,A.m),o,o,o,o,new B.P(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcq7(),o,o,o,o,o,o,!1,A.a4),!0),A.am,B.c(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o),A.aO,new B.a5(o,56,new B.bP(new B.n(o,o,o,B.m(18),B.a([new B.ac(0,A.H,A.b5.j(0.45),A.dm,18)],k),D.ccg,A.m),A.bl,B.lP(A.atF,D.h6H,p.gceh(),B.fv(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.ba(B.m(18),A.a1),o,o,o,o,o)),o),o)],i),o,o,D.bHO,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c8L(){var w=null,v=new C.e7X(this),u=B.m(18),t=B.K(A.c.j(0.06),A.r,1)
return B.o(w,B.A(B.a([v.$3(A.lc,A.hG,"Cash App"),A.e3,v.$3(A.aa8,D.asB,"Bitcoin")],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.n(A.uN,w,t,u,w,w,A.m),w,w,w,w,A.lX,w,w,w)},
baD(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.o(A.z,B.c(""+d,v,v,v,v,v,v,D.fG_,v,v,v),A.f,v,v,D.b99,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.o(v,v,A.f,D.f0.j(0.18),v,v,v,v,v,A.wL,v,v,v,2),1))
t=B.x(t,A.l,v,A.e,A.h,0,A.p)
w=g?12:20
return new B.F_(B.A(B.a([new B.a5(34,v,t,v),A.as,B.E(new B.D(new B.P(0,0,0,w),B.x(B.a([new B.D(A.a1j,B.c(e,v,v,v,v,v,v,A.Ln,v,v,v),v),f],u),A.al,v,A.e,A.h,0,A.p),v),1)],u),A.al,v,A.e,A.h,0,v,v),v)},
aDG(d,e,f){return this.baD(d,e,f,!1)},
ceg(){var w,v,u,t,s=this,r=null,q=s.d===A.lc?s.gaaO():s.gRv(),p=B.m(20),o=B.m(20),n=s.d===A.lc,m=n?D.cb9:D.cd4,l=B.a([new B.ac(0,A.H,(n?A.a_M:K.wv).j(0.35),A.cz,16)],x.V),k=B.m(12)
n=s.d===A.lc
w=n?A.hG:D.asB
k=B.o(r,B.W(w,n?A.a_M:K.wv,r,r,r,30),A.f,r,r,new B.n(A.c,r,r,k,r,r,A.m),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.c(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.lc
t=u?22:13
v=B.c(v,r,1,A.a2,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bB,v,A.av,B.A(B.a([D.c0L,A.db,B.c(s.d===A.lc?"Tap to pay $"+B.dG(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.ru,r,r,r)],u),A.l,r,A.e,A.h,0,r,r)],u),A.D,r,A.e,A.h,0,A.p),1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,p,!0,B.eE(B.A(B.a([k,A.ba,v,B.aH(r,r,r,r,D.c_J,r,r,r,w?r:new C.e8_(s,q),r,r,r,r,"Copy",r)],u),A.l,r,A.e,A.h,0,r,r),r,new B.n(r,r,r,o,l,m,A.m),r,A.anI,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gclf(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)},
bMf(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.K(A.b2.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gauo().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b2.j(0.28),A.b2.j(0.08)],u)
p=new B.aw(A.ey.j(0.4),1,A.r,-1)
k.push(B.o(A.z,B.c(s,o,o,o,o,o,o,A.qc,o,o,o),A.f,o,o,new B.n(o,o,new B.bF(p,p,p,p),new B.be(r,r,r,r),o,new B.a8(A.aX,A.b4,A.x,q,o,o),A.m),o,52,o,A.jg,o,o,o,42))}return B.o(o,B.x(B.a([B.A(k,A.l,o,A.b9,A.h,0,o,o),A.af,B.A(B.a([B.E(B.c('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ab,B.hu(A.a4V,D.h8H,new C.e7W(this),B.fr(o,o,o,o,o,o,o,o,o,o,o,A.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.l,o,A.e,A.h,0,o,o)],l),A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(A.uN,o,m,n,o,o,A.m),o,o,o,o,A.bH,o,o,o)}}
C.rT.prototype={
ak(){var w=this
return B.J(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rU.prototype={
ak(){var w=this
return B.J(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWL(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.htw(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aN(v," \xb7 ")},
giK(d){return this.c}}
C.lU.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.iC.prototype={
ak(){var w,v=this,u=B.S(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b9(v.c,new C.chP(),x.P)
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
bgh(d){var w=null
return this.amZ(w,w,w,w,d,w)},
cRm(d,e,f){return this.amZ(d,e,null,null,null,f)},
bgg(d){var w=null
return this.amZ(w,w,w,d,w,w)},
cR0(d,e){var w=null
return this.amZ(w,w,d,w,e,w)},
ak(){var w=this,v=C.ieM(w.c),u=w.e,t=B.T(u).k("N<1,ab<q,@>>")
u=B.B(new B.N(u,new C.chN(),t),t.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bc2.prototype={}
C.WX.prototype={
T(){return new C.aGb(new B.at(A.ax,$.ax()),B.mS(0,null,null),B.a([],x.m))},
Vh(d){return this.d.$1(d)}}
C.aGb.prototype={
Z(){var w,v=this
v.a4()
w=J.b9(v.a.c,new C.ec6(),x.i)
w=B.B(w,w.$ti.k("ak.E"))
A.d.b0(w,new C.ec7())
v.d=w
v.JX()},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.x.t()
this.a3()},
ag4(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ag4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.JX()
u.l(new C.ec0(u))
t=u.a
t.toString
s=u.d
s===$&&B.d()
w=2
return B.b(t.Vh(s),$async$ag4)
case 2:r=e
if(u.c!=null){u.l(new C.ec1(u))
t=u.c.K(x.q).f
s=B.c(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b2(null,null,null,r?A.dr:A.aA,null,A.t,null,s,null,A.Y,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ag4,v)},
aa0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.d()
s=new C.iq(q,"New Category",A.I8,4284773515,D.aDA,p.length)
t.l(new C.ebK(t,s))
t.JX()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ce(null,null,!0,null,new C.ebL(s),p,null,!0,!0,x.i),$async$aa0)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ebM(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$aa0,v)},
a2V(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.l(new C.ebY(t,p))
q.bP(0,A.ci)
q=t.a.e
s=t.d
s===$&&B.d()
w=3
return B.b(C.chK(p,q,s),$async$a2V)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.ebZ(t,r))
$.aU.x1$.push(new C.ec_(t))
case 1:return B.h(u,v)}})
return B.i($async$a2V,v)},
ac2(d){return this.bSv(d)},
bSv(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.d()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ebS(t),r,null,!0,!0,x.i),$async$ac2)
case 2:s=f
if(s!=null)u.l(new C.ebT(u,d,s))
return B.h(null,v)}})
return B.i($async$ac2,v)},
bQ9(d){this.l(new C.ebR(this,d))
this.JX()},
JX(){var w,v,u=this.d
u===$&&B.d()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bgh(v)},
ciB(d,e){var w={}
w.a=e
this.l(new C.ebX(w,this,d))},
a_7(d){return this.c7G(d)},
c7G(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$a_7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ed(new C.ebW(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).cc(t),$async$a_7)
case 2:return B.h(null,v)}})
return B.i($async$a_7,v)},
bIl(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.h1,A.bs],l):B.a([A.pp,A.eQ],l)
w=B.m(16)
v=B.K(m?A.d9.j(0.35):A.dA,A.r,1)
u=B.W(A.ea,m?A.dA:A.dX,n,n,n,n)
t=B.E(B.c("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?H.a3c:V.PE
r=x.p
s=B.a([B.aM(!1,n,!0,B.A(B.a([u,A.ab,t,B.W(s,m?A.bP:A.an,n,n,n,n)],r),A.l,n,A.e,A.h,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.ebO(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.uy:A.c).j(0.65)
p=B.m(12)
u.push(B.o(n,B.kt(!0,n,o.x,new C.ebP(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.afI,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.cr,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bs:A.aS
q=B.E(B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),t,n,n,n,n,n,2,B.bA(n,new B.b6(4,B.m(14),A.a1),n,A.eR,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.ebQ(o),n,!1,n,n,!1,n,!0,n,A.ae,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a7,n,A.ao,n,n,n,n),1)
m=o.f?n:o.gcxi()
p=B.bn(A.bp,n,n,n,n,n,A.jy,n,n,n,n,n)
u.push(B.A(B.a([q,new B.JV(t,A.bp,n),A.db,B.bJ(o.f?A.rp:D.asP,n,m,p)],r),A.dK,n,A.e,A.h,0,n,n))
A.d.u(s,u)}return B.cU(n,B.x(s,A.al,n,A.e,A.h,0,A.p),n,n,A.b0,new B.n(n,n,v,w,n,new B.a8(A.a5,A.a9,A.x,l,n,n),A.m),A.iX,n,n,n,A.Hr,A.bH,n,n,n)},
B(d){var w,v=this,u=null,t=B.O(d).ax.a===A.I,s=new C.bc2(t),r=t?A.bA:A.cg,q=t?A.bA:u,p=t?A.aS:A.a_,o=B.c("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcem()
if(n)n=A.L0
else n=B.W(A.zI,t?A.aS:A.a_,u,u,u,u)
w=x.p
o=B.eR(B.a([B.hu(n,B.c("Save",u,u,u,u,u,u,B.l(u,u,t?A.aS:A.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=B.aXD(A.aN,u,A.YQ,A.oX,D.h4U,v.gbEB())
q=v.bIl(s)
n=B.c("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.d()
return B.c5(o,r,B.x(B.a([q,new B.D(A.Hr,n,u),B.E(G.hy2(!1,new C.ec5(v,s),m.length,v.gciA(),D.bGA,u,!1),1)],w),A.al,u,A.e,A.h,0,A.p),u,!1,!1,p,u)}}
C.QJ.prototype={
T(){return new C.be0()}}
C.be0.prototype={
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
o=B.aN(s,A.Z,!1,s,!0,A.t,s,B.aO(),o,s,s,s,s,s,2,D.c7n,A.y,!0,s,!0,s,!1,s,A.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.ae,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a7,s,A.ao,s,s,s,s)
w=x.aS
w=B.B(new B.N(D.cec,new C.cXs(t),w),w.k("ak.E"))
w=B.c_(A.bI,w,A.br,s,8,8)
v=x.gN
v=B.B(new B.N(D.ddZ,new C.cXt(t),v),v.k("ak.E"))
u=x.p
v=B.cc(B.x(B.a([o,A.af,w,A.af,B.c_(A.bI,v,A.br,s,0,8)],u),A.l,s,A.e,A.N,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah)
return B.ek(B.a([B.bO(!1,A.dp,s,s,!0,s,s,s,new C.cXu(d),s,s),B.bJ(A.rv,s,new C.cXv(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1w.prototype={
T(){return new C.aId()},
pp(d){return this.d.$1(d)}}
C.aId.prototype={
Z(){this.a4()
this.d=B.bs(this.a.c.e,!0,x.u)},
azX(){var w=this.a,v=w.c,u=this.d
u===$&&B.d()
return w.pp(v.bgg(u))},
aa2(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aa2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.d()
w=2
return B.b(u.b4i(new C.iC("q_"+1000*s,"",D.dcp,null,!1,r.length)),$async$aa2)
case 2:t=e
if(t!=null){u.l(new C.f4q(u,t))
u.azX()}return B.h(null,v)}})
return B.i($async$aa2,v)},
b4i(d){var w,v=this.c
v.toString
w=B.ed(new C.f4r(d),!1,null,x.u)
return B.a6(v,!1).cc(w)},
B(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.bA:A.cg,s=u?A.bA:v,r=u?A.aS:A.a_,q=w.a.c
s=B.eR(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.c(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,v,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=B.aXD(A.aN,v,A.YQ,A.oX,D.haQ,w.gbF2())
q=w.d
q===$&&B.d()
q=q.length
if(q===0){q=B.as(B.c("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hM(A.t,v,new C.f4w(w,new C.bc2(u)),q,D.bGJ,v,A.ah,new C.f4x(),!1)
return B.c5(s,t,u,v,!1,!1,r,v)}}
C.a1v.prototype={
T(){return new C.aIc()}}
C.aIc.prototype={
Z(){var w,v=this
v.a4()
w=v.a.c
v.d=new B.at(new B.bc(w.b,A.b8,A.aP),$.ax())
w=B.bs(w.c,!0,x.bP)
v.e=w
if(A.d.gau(w))J.c4(v.e,D.a9h)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.d()
w.V$=$.ax()
w.R$=0
this.a3()},
ag3(){var w=0,v=B.j(x.H),u=this,t
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.DQ(78,1920),$async$ag3)
case 2:t=e
if(t!=null)u.l(new C.f4m(u,t))
return B.h(null,v)}})
return B.i($async$ag3,v)},
ahc(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ahc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ed(new C.f4k(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).cc(t),$async$ahc)
case 2:s=e
if(s!=null)u.l(new C.f4l(u,s))
return B.h(null,v)}})
return B.i($async$ahc,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.O(a1).ax.a===A.I,g=h?A.bA:A.cg,f=h?A.bA:i,e=h?A.aS:A.a_,d=B.c("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eR(B.a([B.db(M.a53,i,A.rv,new C.f4o(j,a1),B.bn(A.aN,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.c("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.G,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.an
w=B.ay(i,B.bw(e,B.aSu(B.m(14),A.bZ,140,A.Dc,v,w,1/0),A.aq),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcel(),i,i,i,i,i,i,!1,A.a4)
e=B.c("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,13,i,i,A.G,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bs:A.aS
u=B.m(16)
t=B.K(h?A.aL:A.bn,A.r,1)
s=j.d
s===$&&B.d()
r=B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=B.o(i,B.A(B.a([B.E(B.aN(i,A.Z,!1,i,!0,A.t,i,B.aO(),s,i,i,i,i,i,2,B.bA(i,A.eP,i,A.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,i,i,i,A.cF,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.ae,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a7,i,A.ao,i,i,i,i),1),new B.JV(j.d,i,i)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(v,i,t,u,i,i,A.m),i,i,i,i,A.eB,i,i,i)
u=B.c("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,i,i,i,A.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iV(A.aN,i,i,A.ag,i,new C.f4p(j),i,B.c("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.c("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.c("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.uy:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.K(A.bp.j(0.45),A.r,1)
m=B.o(i,D.bZm,A.f,i,i,new B.n(A.bp.j(0.12),i,i,B.m(12),i,i,A.m),i,i,i,i,A.bk,i,i,i)
l=B.c("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aS:A.a_,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.d()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.av,B.c(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.D,i,A.e,A.h,0,A.p),1)
return B.c5(d,g,B.cu(B.a([f,A.P,w,A.dc,e,A.P,v,A.aO,u,A.P,t,A.av,s,A.af,B.aF(!1,A.a3,!0,q,B.aM(!1,p,!0,B.o(i,B.A(B.a([m,A.eu,l,B.W(A.zE,h?A.bP:A.an,i,i,i,16)],a0),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.n(i,i,n,o,i,i,A.m),i,i,i,i,A.fo,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gckc(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.aj)],a0),i,i,A.bS,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.dem.prototype={}
C.WY.prototype={
T(){return new C.aGd(B.kb(!0,null,!0,!0,null,null,!1))}}
C.aGd.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dI(q.a.c,new C.ecH())
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
azY(d,e){var w,v,u,t,s,r=this.d
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
b2j(d){var w,v,u,t,s=this.d
s===$&&B.d()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.ol(w,v,v,u)
this.d.bP(0,new B.bc(t,B.ho(A.bC,v+u.length),A.aP))},
adL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.DQ(78,1920),$async$adL)
case 3:s=e
if(s==null){w=1
break}t.l(new C.ecn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$adL,v)},
Zy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i6().a7n(A.eT),$async$Zy)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fs(),$async$Zy)
case 4:t.l(new r.ecs(t,e))
case 1:return B.h(u,v)}})
return B.i($async$Zy,v)},
adM(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$adM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new B.at(A.ax,t)
r=new B.at(new B.bc("https://",A.b8,A.aP),t)
q=u.c
q.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ecq(s,r),q,null,!0,!0,x.y),$async$adM)
case 2:if(e===!0)u.l(new C.ecr(u,s,r))
s.V$=t
s.R$=0
r.V$=t
r.R$=0
return B.h(null,v)}})
return B.i($async$adM,v)},
bJi(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.d()
p=A.a.fj(p.a.a,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.ecj(),B.T(p).k("N<1,q>")).c0(0,new C.eck())
for(p=J.aT(w.a),v=new B.eL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gP(p)
if(A.a.X(s,"## "))q.push(new C.lU("heading",A.a.i(A.a.aX(s,3)),r,r))
else if(A.a.X(s,"\u2022 ")||A.a.X(s,"- "))q.push(new C.lU("bullets",new B.N(B.a(s.split("\n"),u),new C.ecl(),t).c0(0,new C.ecm()).aN(0,"\n"),r,r))
else q.push(new C.lU("text",s,r,r))}p=this.e
p===$&&B.d()
A.d.u(q,p)
if(q.length===0)q.push(D.a9h)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.O(d).ax.a===A.I,m=new C.dem(n),l=n?A.aw:A.hp,k=B.c(p.a.d,o,o,o,o,o,o,A.cH,o,o,o),j=x.p
k=B.eR(B.a([B.db(M.a53,o,A.ad1,new C.ecx(p,d),B.bn(A.aN,o,o,o,A.c,o,o,o,o,o,o,o)),A.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cu:A.hP
v=B.c_(A.bI,B.a([p.wm(A.PF,"Bold",new C.ecy(p),m),p.wm(A.a3e,"Italic",new C.ecz(p),m),p.wm(A.aqd,"Underline",new C.ecA(p),m),p.wm(Z.a3l,"Heading",new C.ecB(p),m),p.wm(A.PG,"Bullets",new C.ecC(p),m),p.wm(A.aqc,"Align",new C.ecD(),m),p.wm(A.HP,"Link",p.gc4p(),m),p.wm(A.qY,"Image",p.gc4o(),m),p.wm(O.a3z,"Video",p.gc4q(),m),p.wm(A.a4I,"Signature",new C.ecE(p),m),p.wm(O.PH,"Divider",new C.ecF(p),m)],j),A.br,o,4,4)
w=B.o(o,B.x(B.a([v,A.am,B.c("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bh,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.h,0,A.p),A.f,w,o,o,o,o,o,o,A.aoQ,o,o,o)
v=n?A.bA:A.c
u=B.m(12)
t=B.K(n?A.cP:A.dP,A.r,1)
s=B.a([new B.ac(0,A.H,A.w.j(n?0.35:0.08),A.cN,16)],x.V)
r=p.d
r===$&&B.d()
q=B.l(o,o,n?A.iE:A.aw,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bS,B.o(o,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),r,o,o,o,o,o,2,B.bA(o,A.eP,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.cW:A.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a7,o,A.ao,o,o,o,o),A.f,o,o,new B.n(v,o,t,u,s,o,A.m),o,o,o,o,R.CZ,o,o,o),o),1)],j)
n=p.e
n===$&&B.d()
if(n.length!==0){n=new B.id(n,B.T(n).k("id<1>"))
j.push(B.o(o,B.c_(A.bI,n.gdQ(n).dO(0,new C.ecG(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.OS,o,o,o))}return B.c5(k,l,B.x(j,A.l,o,A.e,A.h,0,A.p),o,!1,!1,o,o)},
wm(d,e,f,g){var w=null,v=g.a,u=v?A.bA:A.c,t=B.m(8),s=B.m(8)
return B.hd(B.aF(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.cr,B.W(d,v?A.iE:A.aw,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.aj),w,e,w,w)}}
C.dsS.prototype={}
C.aDO.prototype={
a7(){return"_KbView."+this.b}}
C.ase.prototype={
T(){return new C.aGc(D.b2p)},
cYl(d,e){return this.e.$2$size(d,e)}}
C.aGc.prototype={
gaCQ(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gP(w)
if(v.a===this.e)return v}return null},
gczx(){var w,v,u,t,s,r=this.gaCQ()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
cen(d){this.l(new C.ecg(this,d))},
clo(d){this.l(new C.ech(this,d))},
bHp(){this.l(new C.ec8(this))},
bHr(){this.l(new C.ec9(this))},
gba2(){var w=B.bs(this.a.c,!0,x.i)
A.d.b0(w,new C.eci())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.O(d).ax.a===A.I,f=new C.dsS(g),e=x.O
e=g?B.a([A.a_.j(0.9),A.bs.j(0.85)],e):B.a([A.eQ.j(0.55),A.nA.j(0.45)],e)
w=B.m(22)
v=B.K((g?A.aL:A.fv).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bIy(f)
break
case 1:g=i.gaCQ()
g.toString
g=i.bJg(f,g)
break
case 2:u=i.gaCQ()
u.toString
t=i.gczx()
t.toString
s=B.b1(u.d)
r=B.m(16)
r=B.o(h,B.c(t.b,h,h,h,h,h,h,D.fF_,h,h,h),A.f,h,h,new B.n(A.aN,h,h,r,h,h,A.m),h,h,h,h,A.bH,h,h,1/0)
q=g?A.aw:A.c
p=B.m(16)
o=B.K(g?A.aL:A.bn,A.r,1)
n=B.a([new B.ac(0,A.H,A.w.j(g?0.28:0.06),A.et,10)],x.V)
m=g?A.h1:A.pp
l=B.m(8)
k=B.W(A.oO,g?A.dA:A.dX,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aDM(f,i.gbHq(),u.c,s,"Answer",h),B.E(B.cu(B.a([r,A.af,B.o(h,B.x(B.a([B.o(h,B.A(B.a([k,A.e3,B.c("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dA:A.dX,h,h,h,h,h,h,h,h,11,h,h,A.G,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(m,h,h,l,h,h,A.m),h,h,h,A.e8,A.hr,h,h,h),new C.b2F(t.c,t.e,f,h)],j),A.D,h,A.e,A.h,0,A.p),A.f,h,h,new B.n(q,h,o,p,n,h,A.m),h,h,h,h,A.bS,h,h,1/0)],j),h,h,A.anB,h,h,A.ah,!1),1)],j),A.al,h,A.e,A.h,0,A.p)
g=j
break
default:g=h}return B.o(h,g,A.aq,h,h,new B.n(h,h,v,w,h,new B.a8(A.aX,A.b4,A.x,e,h,h),A.m),h,h,h,A.i4,h,h,h,h)},
b_m(d){var w,v,u,t=null,s=d.a,r=s?D.uy:A.c,q=A.aD.j(0.22)
q=B.a([new B.ac(0,A.H,q,A.J,14),new B.ac(0,A.H,A.w.j(s?0.28:0.06),A.J,8)],x.V)
w=B.K(s?A.aL:A.fv,A.r,2)
v=this.a
u=x.p
q=B.a([B.o(t,B.i4(v.cYl(v.d,72),A.aq),A.f,t,t,new B.n(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.u(q,B.a([A.am,B.c("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dr,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.l,t,A.e,A.h,0,A.p)},
bIy(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.ay(t,u.b_m(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a4):u.b_m(d),t,t,t)
w=d.a
v=B.c("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aS:A.a_,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cu(B.a([s,A.aB,v,A.am,B.c("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.iA(!0,t,t,A.y,E.aVN,new C.ecb(u,d),u.gba2().length,t,A.e0,A.ah,!0)],x.p),t,t,D.bGK,t,t,A.ah,!1)},
bJg(d,e){var w,v,u,t,s=null,r=B.bs(e.e,!0,x.u)
A.d.b0(r,new C.ecd())
w=B.b1(e.d)
v=d.a
u=B.c("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.c("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hM(A.t,s,new C.ece(this,r,d,e),t,A.wO,s,A.ah,new C.ecf(),!1)
return B.x(B.a([new C.aDM(d,this.gbHo(),e.c,w,e.b,s),new B.D(A.wQ,u,s),B.E(v,1)],x.p),A.al,s,A.e,A.h,0,A.p)}}
C.aDM.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.W(A.eJ,u?A.aS:A.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.o(v,B.W(w.e,s,v,v,v,22),A.f,v,v,new B.n(r,v,v,q,v,v,A.m),v,v,v,v,A.cr,v,v,v)
return new B.D(D.bK6,B.A(B.a([t,q,A.as,B.E(B.c(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aS:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v),v)}}
C.adr.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.uy:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.K(t?A.aL:A.bn,A.r,1),n=B.a([new B.ac(0,A.H,A.w.j(t?0.28:0.06),A.dO,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.o(w,B.W(v.c,u,w,w,w,22),A.f,w,w,new B.n(m,w,w,l,w,w,A.m),w,40,w,w,w,w,w,40)
return new B.fG(1,B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(w,B.x(B.a([l,A.am,B.c(v.b,w,2,A.a2,w,w,w,B.l(w,w,t?A.aS:A.a_,w,w,w,w,w,w,w,w,10,w,w,A.G,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.l,w,A.b9,A.h,0,A.p),A.f,w,w,new B.n(w,w,o,p,n,w,A.m),w,w,w,w,A.cr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj),w)}}
C.b2F.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.h1:A.pp
u=B.m(8)
t=B.W(A.vi,w?A.dA:A.dX,s,s,s,14)
p.push(B.o(s,B.A(B.a([t,A.db,B.c("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dA:A.dX,s,s,s,s,s,s,s,s,10,s,s,A.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.n(v,s,s,u,s,s,A.m),s,s,s,A.cy,A.eS,s,s,s))}A.d.u(p,J.b9(this.c,new C.chL(r),x.l))
return B.x(p,A.D,s,A.e,A.h,0,A.p)}}
C.adi.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bEr,B.c(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aS:A.a_,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hD,B.bw(B.m(12),B.aSu(r,A.bZ,160,A.qY,r,w,1/0),A.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hD,new C.aDN(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.wL,B.aM(!1,r,!0,B.c(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.ct:A.bp,r,A.nj,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cQK(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iR(v?A.aL:A.bn,r,r,r,r,r)
q=B.c(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cA:A.aL,r,r,r,r,r,r,r,r,r,A.cK,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.o(r,r,A.f,v?A.bP:A.an,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.z4,B.x(B.a([u,q,A.aO,t,A.av,B.c("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.D,r,A.e,A.h,0,A.p),r)
case"bullets":v=x.cl
q=B.B(new B.cN(new B.Y(B.a(q.b.split("\n"),x.s),new C.cQL(),x.cc),new C.cQM(s),v),v.k("M.E"))
return new B.D(A.kc,B.x(q,A.D,r,A.e,A.h,0,A.p),r)
case"divider":return new B.D(A.hD,B.iR(s.d.a?A.aL:A.bn,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bM
return new B.D(A.eI,C.i8E(q,s.d),r)}}}
C.aDN.prototype={
T(){return new C.bka()}}
C.bka.prototype={
Z(){this.a4()
this.ag5()},
ag5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ag5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d2(n,"http")&&!J.d2(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.ZU(B.cD(n,0,null),null)
w=7
return B.b(J.a4w(q),$async$ag5)
case 7:if(r.c==null){w=1
break}r.l(new C.dsT(r,q))
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
return B.i($async$ag5,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bs:A.ft
u=B.m(12)
return B.o(A.z,B.W(A.r6,w?A.bP:A.an,t,t,t,36),A.f,t,t,new B.n(v,t,t,u,t,t,A.m),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.ajF(v)
return B.bw(w,new B.fG(u,new B.an(A.z,t,A.ad,A.t,B.a([new B.AP(s,t),B.aH(t,t,t,t,B.W(v.f?A.aqk:A.PI,A.c,t,t,t,44),t,t,t,new C.dsV(this,s),t,t,t,t,t,t)],x.p),t),t),A.aq)}}
C.at4.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JM.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rZ.prototype={}
C.ash.prototype={
T(){var w=null
return new C.aGe(new B.at(A.ax,$.ax()),B.mS(0,w,w),B.a([],x.m),D.EA,D.aMD,w,w)},
ge3(){return this.d}}
C.aGe.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,A.nJ,null,1,null,v)
w.eU(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gH(D.a7G).a},
t(){var w=this,v=w.as
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ax()
v.R$=0
w.e.t()
w.bAH()},
gasV(){var w,v,u,t,s=this.x
if(s===D.EB)return null
s=s===D.EA
w=s?D.a7G:D.a6L
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gH(w):null},
cAk(d){return this.l(new C.ecV(this,d))},
aCC(){$.aU.x1$.push(new C.ecM(this))},
JO(d){return this.czL(d)},
b2k(){return this.JO(null)},
czL(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a1=A.d.aS(a0,new C.ecO())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.hDQ(a8)&&a1
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
l=C.hDQ(a8)&&!p
q.l(new C.ecP(q,a8))
q.aCC()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.l(new C.ecQ(q))
q.aCC()
w=1
break}t=5
j=B.nn(k)
i=new B.N(a0,new C.ecR(),B.T(a0).k("N<1,q>")).aN(0,"\n\n")
a0=C.isY(m,p,o,q.x,n,q.y,q.gasV(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.v(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.v(a8)
w=8
return B.b(B.rm(j,h,A.i7,null,null),$async$JO)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=B.bFG(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.l(new C.ecS(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.l(new C.ecT(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.l(new C.ecU(q))
q.aCC()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JO,v)},
bNn(){return this.JO("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.O(d).ax.a===A.I,p=q?A.GZ:D.bth,o=x.p
o=B.a([B.x(B.a([B.E(s.cz_(q),1),s.bMA(q)],o),A.l,r,A.e,A.h,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aQ.j(0.55)
v=s.r?r:s.gbNm()
u=B.m(28)
t=B.a([A.aQ,A.at],x.O)
o.push(B.ao(78,B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(D.ezb,r,new B.n(r,r,r,u,B.a([new B.ac(0,A.H,A.aQ.j(0.45),A.cN,16)],x.V),new B.a8(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r),A.o7,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.o7,r,r,A.aj),r,r,r,14,r,r))}return B.o(r,new B.an(A.a0,r,A.ad,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cz_(d){var w,v,u,t=this,s=null
if(t.x===D.EB)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.hfH(s,!1,A.L,0,0,w,B.hbX(t.cES(d),A.Z9,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.W(A.asD,A.aD.j(0.5),s,s,s,52)
w.push(B.b9e(new B.D(A.eA,B.x(B.a([u,A.aB,B.c("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aF:A.dZ,s,s,s,s,s,s,s,s,14,s,s,A.a8,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.c_(A.fM,B.a([t.akq("Full bongo love song ABAB",d),t.akq("Mix: group vs private jet \u2014 which flies?",d),t.akq("Song from John 3:16 + matching verses",d),t.akq("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.l,s,A.b9,A.h,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nG(D.bF7,B.Zi(new B.oV(new C.ecN(t,d),u+v,!0,!0,!0,0,B.tp(),s)),s))}return B.wb(0,s,A.t,t.e,A.y,s,s,T.afE,s,s,!1,s,A.ah,!1,w)},
cES(d){var w=this.as
w===$&&B.d()
return B.c7(w,new C.ed1(this,d),null)},
cEU(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.ed3(v),r=A.w.j(d?0.35:0.06),q=B.m(14),p=B.K(A.bb.j(0.35),A.r,1),o=v.gasV()
o=o==null?u:o.c
o=B.c(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Fl,u,u,u)
w=v.gasV()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.c(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bq,u,u,u,u,u,u,u,u,12,u,u,A.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.o(u,B.A(B.a([o,A.ab,w,B.W(v.w?A.Q8:A.ts,A.bb,u,u,u,20)],x.p),A.l,u,A.e,A.h,0,u,u),A.f,u,u,new B.n(r,u,p,q,u,u,A.m),u,u,u,u,A.nN,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)},
ay6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b5,A.aV],x.O)
break
case 1:w=B.a([A.bp,A.ct],x.O)
break
case 2:w=B.a([A.bD,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.ecL(this,d)
r=B.m(14)
w=m?new B.a8(A.a5,A.a9,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.c(f,n,n,n,n,n,n,A.Fl,n,n,n)
if(m)o=A.c
else o=g?A.ac:A.bq
return B.E(B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.cU(n,B.x(B.a([p,B.c(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.l,n,A.e,A.h,0,A.p),n,n,A.b0,new B.n(q,n,n,r,n,w,A.m),A.a3,n,n,n,n,A.jQ,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.aj),1)},
cEV(d,e){var w,v,u,t=this,s=null,r=t.x===D.EA?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bb.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.ed4(t,d)
u=B.c(d.c,s,s,s,s,s,s,A.Wh,s,s,s)
return B.aF(!1,A.a3,!0,q,B.aM(!1,w,!0,new B.D(A.h6,B.A(B.a([u,A.db,B.c(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bq,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.l,s,A.e,A.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.aj)},
akq(d,e){var w=null,v=B.c(d,w,w,w,w,w,w,A.acV,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.n1(w,u,v,w,this.r?w:new C.ecW(this,d),w,w,w,w)},
bMA(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.a_.j(0.95):A.c,n=B.K(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(A.aoA,B.c("$"+A.i.ac(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.EB?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),w,r,r,r,r,r,2,B.bA(r,A.eP,r,A.hg,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bV:A.hT,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ecI(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a7,r,A.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.ecJ(s)
l.push(B.A(B.a([v,new B.JV(w,A.aD,r),B.aF(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eE(u?D.ezs:D.c0U,r,D.ba1,42,r,42),A.cQ,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cQ,r,r,A.aj)],m),A.dK,r,A.e,A.h,0,r,r))
return B.o(r,B.x(l,A.al,r,A.e,A.N,0,A.p),A.f,r,r,new B.n(o,r,n,p,r,r,A.m),r,r,r,A.tg,A.a1o,r,r,r)}}
C.aOy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.WZ.prototype={
ak(){var w=this
return B.J(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a0g.prototype={
T(){return new C.aDc(null,null)},
bla(){return this.f.$0()}}
C.aDc.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,D.bDw,u,1,u,v)
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
w.bzv()},
cep(){var w=this.d
w===$&&B.d()
w.eJ(0).bF(new C.dqd(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aD(d,A.bY,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gceo(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.d()
e[v]=new B.E4(new C.dqe(k,v,d),j,w,j)}f=B.B(e,f)
w=k.d
w===$&&B.d()
u=B.m(28)
t=B.K(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ac(2,A.H,A.at.j(0.35),A.J,40),new B.ac(0,A.H,A.aN.j(0.25),A.fU,28)],x.V)
r=k.e
r===$&&B.d()
q=k.r
q===$&&B.d()
q=B.c7(new B.he(B.a([r,q],x.U)),new C.dqf(k),j)
r=B.oj(A.k0,D.h80,new C.dqg())
p=B.c("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cF,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.A(B.a([k.b2l(A.kk,"Resets in 24h"),A.ab,k.b2l(A.oO,"Help Topics ready")],o),A.l,j,A.b9,A.h,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dU(D.h27,new C.dqh(k),B.di(j,j,j,j,j,j,j,j,j,A.ac,j,j,A.kH,j,new B.ba(B.m(14),A.a1),new B.aw(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.m(14)
m.push(B.E(B.bJ(D.h7R,j,g,B.bn(A.aN,j,j,6,A.c,j,A.kH,A.aN.j(0.5),new B.ba(l,A.a1),j,j,j)),1))
f.push(B.as(B.ay(j,B.c7(w,new C.dqi(k),B.o(j,B.x(B.a([q,A.aB,r,A.T,p,A.P,n,A.bx,B.A(m,A.l,j,A.e,A.h,0,j,j)],o),A.l,j,A.e,A.N,0,A.p),A.f,j,j,new B.n(j,j,t,u,s,D.cad,A.m),j,j,j,j,U.aoq,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dqj(),j,j,j,j,j,j,!1,A.a4),j,j,j))
return B.aF(!1,A.a3,!0,j,B.ay(j,new B.an(A.a0,j,A.ad,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a4),A.f,h,0,j,j,j,j,j,A.aj)},
b2l(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.K(A.c.j(0.12),A.r,1)
return B.o(w,B.A(B.a([B.W(d,A.at,w,w,w,13),A.e3,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.h6,w,w,w)}}
C.aNp.prototype={
aY(){this.b8()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.OV.prototype={}
C.qk.prototype={}
C.asR.prototype={
T(){return new C.aGB(B.a([],x.E),B.a([],x.s))}}
C.aGB.prototype={
gatj(){return A.i.D(B.Mb(this.a.c.a,new C.erm(this)),0,1/0)},
aa8(){var w,v=this,u=v.d,t=v.gatj()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rl(u.a,t,!0,!1)},
Kj(d,e){var w,v,u,t=this,s=t.gatj(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gatj()
if(w<v-0.005)B.hJx(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rl(u.a,w,!0,!1)
B.rl(t.a.c.a,w,!0,!1)
B.Bx(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aU.bZ$.push(o)
w=$.Jz+1
$.Jz=w
if(w===1){w=$.hv0
if(w!=null)w.$0()}v=$.hdZ.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bs(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bs(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m0(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aS7(u,A.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.w5(w,u,r,q,s.e,p)}o.d=t}o.Q7()
o.aa8()
$.aU.x1$.push(new C.es2(o))
o.Q=B.dg(A.oD,new C.es3(o))
o.as=B.dg(A.fR,new C.es4(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aU.hZ(w)
C.i0k()
w.a3()},
cH5(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a9j(v,w)){if(C.he0(p,q.e)){q.l(new C.erL(q,p))
q.yI(!1,!0,!0)}else if(q.c!=null)q.l(new C.erM())
return}if(!C.ck1(v.c?v.bU():v)){q.l(new C.erN(p))
q.b2u(!1)
return}u=p.gDb()
if(u<=0)return
t=w.cZ(B.c0(B.bD(w),B.bL(w),B.bX(w),12,0,0,0,0))
s=C.he1(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.l(new C.erO())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.aS(q.e,new C.erP(r))){q.l(new C.erQ(p,w,u))
return}q.l(new C.erR(q,p,u,w))
q.aAD(new B.d9(r,p.a,u,A.hc,A.fz,"Clock-in daily earnings (local)",null,null,A.cx,w))},
jn(d){if(d===A.h_)this.Fq()},
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
T1(d){return this.cFF(d)},
cFF(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
return B.b(G.Ah(q.w,k,l,j,m,!1,n),$async$Fq)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.l(new C.erG(q,p))
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
Ou(d){return this.bGB(d)},
bGA(){return this.Ou(null)},
bGB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
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
if(l.d===A.fY&&l.x===A.cx&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.l(new C.ern(j,t,i))
q.u(0,p)
r=B.B(q,B.a4(q).k("cj.E"))
t.w=r
w=4
return B.b(B.asT(t.a.c.a,r),$async$Ou)
case 4:t.aA5(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.U(B.b2(null,null,null,null,null,A.t,null,B.c("Balance updated: +$"+B.dG(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ou,v)},
Kv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Kv=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.B(new B.Y(a2,new C.erH(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,q>")
e=B.B(new B.N(a2,new C.erI(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lH("transactions","id,status",null,null,null,B.J(["id",q],x.N,x.j),null,!0,null,null,!1,A.bN),$async$Kv)
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
j=A.d.bk(r.e,new C.erJ(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=A.cx
else a0=J.z(k,2)?A.kP:A.dI
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dI&&h===A.cx&&a3[j].d===A.fY)J.c4(a6,l)
if(i===A.dI&&h===A.kP&&r.e[j].d===A.f4){g=r.d
if(g!=null){r.Kj(g.d+r.e[j].c,!1)
r.aA5(!1,!0)}}}}if(o&&r.c!=null)r.l(new C.erK())
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
return B.b(r.bGA(),$async$Kv)
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
break}t.l(new C.err(t,h))
t.Q7()
t.aa8()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(G.Ah(s[0],p,q,o,r,!0,i),$async$QV)
case 4:i=e.a
n=i[4]
m=B.bs(i[2],!0,x.o)
l=i[5]
t.w=B.bs(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Q7()
t.aa8()
k=C.he0(n,m)
if(k)t.Kj(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aH>0
else s=!0
j=B.hvR(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Q7()
if(t.c==null){w=1
break}t.l(new C.ers(t,n,m,l))
if(i){t.yI(!1,!0,!0)
if(j==="reset"){B.huA(t.a.c.a)
i=t.c
if(i!=null)B.huD(i,null)}else if(j==="warn2"){B.huB(t.a.c.a)
i=t.c
if(i!=null)C.huE(i)}}else if(k)t.yI(!1,!0,!0)
else t.T1(!1)
case 1:return B.h(u,v)}})
return B.i($async$QV,v)},
yI(d,e,f){return this.cp4(d,e,f)},
aA5(d,e){return this.yI(d,!1,e)},
b2u(d){return this.yI(!1,d,!1)},
cp4(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
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
B.JF(t.w,p,q,s,o,r)
if(f)t.T1(d)
case 1:return B.h(u,v)}})
return B.i($async$yI,v)},
ceG(){this.l(new C.erA())
this.aA5(!1,!0)},
agQ(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cx&&B.tn(d)){w=r.a
w.f.$1(new B.d9(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cjY(q,d)
v=q.d=B.Mb(r.a.c.a,new C.erx(r))
r.at=r.a.c.d=v
B.rl(q.a,v,!0,!1)
if(r.c!=null)r.l(new C.ery(r,d))
r.yI(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d9(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dI
if(w&&d.d===A.fY)s=!1
else if(w&&d.d===A.f4){r.Kj(q.d-d.c,!0)
s=!0}else{C.cjY(q,d)
w=d.d
s=w===A.f4||w===A.kx
r.Kj(q.d,s)}r.l(new C.erz(r,d))
w=d.d
r.yI(s,e,w===A.f4||w===A.kx||d.x===A.cx||w===A.hc)},
aAD(d){return this.agQ(d,!0,!1)},
b3C(d,e){return this.agQ(d,!0,e)},
b3B(d,e){return this.agQ(d,e,!1)},
chP(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.ivl(u,e,d)){v.mt("This plan is already active.")
return}w=B.hJ1(u.a,d,e)
if(C.irp(u.a,v.e,w)){v.mt("You already own this plan.")
return}if(u.d<g){v.mt("Insufficient balance. Add funds in the Wallet tab first.")
return}v.l(new C.erB(v))
v.l(new C.erC(v,u,new B.w5(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.aAD(new B.d9(w,u.a,g,A.kx,A.fz,"Direct investment buy: "+d,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.l(new C.erD(v))
v.mt("Plan purchased: "+d)},
mt(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
a19(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a19=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.apy(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a19)
case 3:w=4
return B.b(t.QV(),$async$a19)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a19,v)},
ahj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.ak2(r,B.a([r],x.d9),A.Tg,t.a.d,t.gb3A(),t.gb2t(),null),!1,null,x.X),$async$ahj)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahj,v)},
ahh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hF(s,new C.anc(r,t.a.d,t.e,t.gb3A(),t.gb2t(),new C.erF(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ahh)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
aew(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.he0(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b2u(!0),$async$aew)
case 5:case 4:if(j.x==null){t.mt("Choose an investment plan first, then come back to clock in.")
t.l(new C.ert(t))
w=1
break}if(B.lA(r)===6||B.lA(r)===7){t.mt("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hvS(r)){t.mt("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9j(q,r)&&j.fy>0){t.mt("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aST(q,r))if(!B.aST(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.I)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aIz(m.y,l,m.a))}}q=B.hIp(q,r)}else q=p
else q=p}else q=!1
if(q){t.mt("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mt("You are already clocked in for today.")
w=1
break}k=C.i1N(r)
q=j.a
t.l(new C.eru(j,r,k))
t.b3B(new B.d9("local_clockin_manual_"+q+"_"+s,j.a,0,A.hc,A.fz,"Clock-in session started (local)",null,null,A.cx,r),!1)
t.mt("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.O(d).ax.a===A.I?A.nE:A.qB
if(l.d==null)return B.eb(A.lf,j,!0)
w=x.o
v=B.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fPG
u=u==null?k:u.$0()
u=J.aT(u==null?A.iM:u)
while(u.C()){t=u.gP(u)
q=t.a
if(q.length===0||v.an(0,q)||B.tn(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cT(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.B(new B.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
A.d.u(w,new B.Y(v,new C.erV(),B.T(v).k("Y<1>")))
A.d.b0(w,new C.erW())
v=l.d
v.toString
u=C.igX(l.a.c)
t=l.d
t.toString
t=B.eb(new C.ao_(t,l.a.e,l.z,l.gchO(),l.aXD(),D.hCx),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.aE0(l.aXD(),q,n,o,w,new C.erX(l),l.gcjV(),new C.erY(l),D.hCy),j,!0)
m=B.aD(d,k,x.w).w
n=l.y
return new B.XP(n,new C.erZ(l),B.aF(!1,A.a3,!0,k,new B.a5(1/0,m.a.b,new B.an(A.a0,k,A.ad,A.t,B.a([B.bS(0,B.eb(k,j,!0),0,0,0),B.bS(0,B.bm(!1,[new C.aE_(v,u,w,l.gc7I(),new C.es_(l),new C.es0(l),new C.es1(d),l.gckN(),l.gckI(),D.hCw),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.ao(0,l.bJ_(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.aj),k)},
aXD(){var w=null,v=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
return B.hd(B.aM(!1,w,!0,B.o(A.z,D.c5L,A.f,w,w,new B.n(w,w,B.K(D.f0.j(0.38),A.r,1),w,B.a([new B.ac(0,A.H,D.f0.j(0.18),A.J,16)],x.V),new B.a8(A.ay,A.aC,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cQ,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erq(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bJ_(){var w=null,v=B.m(27),u=B.K(A.aE.j(0.45),A.r,1),t=B.a([new B.ac(0,A.H,A.w.j(0.5),A.eO,24),new B.ac(-2,A.H,A.aE.j(0.12),A.J,18)],x.V)
return new B.D(A.OS,B.bm(!0,B.as(new B.cO(D.b8i,B.o(w,B.cf(new C.ero(this)),A.f,w,w,new B.n(w,w,u,v,t,D.c9E,A.m),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
c9o(d){var w=null,v=this.y===d,u=D.dgG[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dx(w,!0,w,B.ay(A.c1,B.qs(B.oD(v?B.W(s,D.ah_,new B.bl("on"+r,q),w,w,21):B.x(B.a([B.W(s,A.c.j(0.62),w,w,w,19),A.bB,B.c(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,new B.bl("off"+r,q),A.b9,A.h,0,A.p),A.iX,B.pX(),A.b0,A.b0,B.LS())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erw(this,d),w,w,w,w,w,w,!1,A.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.cc,w),1)}}
C.aE_.prototype={
c6j(d){return C.he1(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.O(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pN(new B.Y(v,new C.duD(),u),3,u.k("M.E"))
t=B.B(u,B.a4(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a9j(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hvS(r)
m=v.gDb()
l=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
k=B.K(D.f0.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ac(0,A.H,D.f0.j(0.18),A.J,16)],j)
l=B.aM(!1,e,!0,B.o(A.z,B.W(A.hG,D.f0,e,e,e,19),A.f,e,e,new B.n(e,e,k,e,i,new B.a8(A.ay,A.aC,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cQ,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.ac(0,A.H,A.b2.j(0.45),A.cN,16)],j)
h=B.m(12)
g=x.p
j=B.bUJ(!1,l,"GROWTH INCOME",B.aM(!1,i,!0,new B.a5(44,44,new B.an(A.a0,e,A.ad,A.f,B.a([B.o(A.z,B.o(A.z,D.bYK,A.f,e,e,new B.n(A.iV.j(0.78),e,e,h,e,e,A.m),e,36,e,e,e,e,e,36),A.f,e,e,new B.n(e,e,e,k,j,D.cbf,A.m),e,42,e,e,e,e,e,42),B.ao(e,B.o(A.z,D.c4K,A.f,e,e,new B.n(A.bt,e,B.K(D.ak0,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hyv(A.fQ,new C.duE(),k)
k=B.A(B.a([B.E(C.hyu(new C.duF(f,A.rN,n),new B.V(Date.now(),0,!1),h,k),1),A.pc,B.E(new B.wq(new C.duG(f,A.rN),e,new B.he(B.a([$.zm(),$.a4t()],x.U)),e),1)],g),A.l,e,A.e,A.h,0,e,e)
h=f.c9B(A.rN,D.f0)
v=B.E(f.cD9("Total Profit","$"+B.dG(v.e),A.rN),1)
u=u?e:s.b
return B.eb(B.cc(B.x(B.a([j,A.T,k,A.af,new C.aDZ(f.d,m,q,p,n,o,D.f0,f.gc6i(),f.f,e),A.af,h,A.T,B.A(B.a([v,A.pc,B.E(f.b9Y("Total Investment","$"+B.dG(u==null?0:u),A.rN,f.r),1)],g),A.l,e,A.e,A.h,0,e,e),A.T,f.c6f(d,t,D.f0,w)],g),A.al,e,A.e,A.h,0,A.p),A.t,e,A.y,e,e,A.a1V,e,e,A.ah),D.ak0,!0)},
aA4(d,e,f,g,h){var w=null,v=B.m(h),u=B.K(A.c.j(0.09),A.r,1),t=B.a([new B.ac(0,A.H,A.w.j(0.4),A.dm,18)],x.V)
return B.o(w,B.bw(B.m(h-1),new B.an(A.a0,w,A.ad,A.t,B.a([B.bS(0,new B.bP(new B.n(w,w,w,w,w,new B.bT(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.m),A.bl,w,w),0,0,0),new B.D(g,d,w)],x.p),w),A.aq),A.f,w,w,new B.n(w,w,u,v,t,D.ca7,A.m),w,w,w,w,w,w,w,w)},
b2s(d,e,f,g){return this.aA4(d,e,f,A.ag,g)},
bc7(d,e,f,g,h,i,j){var w=null,v=B.ao(-14,B.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.K(f.j(0.4),A.r,1),r=x.p,q=this.b2s(new B.a5(w,80,new B.an(A.a0,w,A.ad,A.t,B.a([v,new B.D(D.bFF,B.x(B.a([B.o(w,B.A(B.a([B.W(e,f,w,w,w,15),A.e3,B.c(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.n(u,w,s,t,w,w,A.m),w,w,w,w,A.aoF,w,w,w),A.b_,new B.dk(A.dv,A.a5,A.f,B.c(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),w)],r),A.D,w,A.e,A.h,0,A.p),w)],r),w),w),f,A.lH,22)
if(g==null)return q
return B.aM(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c9B(d,e){var w,v,u,t,s=null,r=B.K(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.o(s,s,A.f,s,s,new B.n(e,s,s,new B.be(v,v,v,v),s,s,A.m),s,D.d0d[w],s,D.bJk,s,s,s,5))}r=B.o(s,B.A(o,A.dK,s,A.b9,A.h,0,s,s),A.f,s,s,new B.n(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.h3V,A.bB,B.A(B.a([B.o(s,s,A.f,s,s,new B.n(e,s,s,s,B.a([new B.ac(0,A.H,e,A.J,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bm,new B.dc(1,A.ck,B.c("Live \xb7 real-time statistics",s,1,A.a2,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.l,s,A.e,A.h,0,s,s)],p),A.D,s,A.e,A.h,0,A.p),1)
o=B.m(16)
v=B.m(16)
u=A.w.j(0.3)
t=B.K(e.j(0.45),A.r,1.2)
return this.aA4(B.A(B.a([r,D.fpp,q,A.ab,B.aM(!1,o,!0,B.o(s,B.x(B.a([B.W(A.nV,e.j(0.95),s,s,s,21),A.rr,B.c("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.G,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.l,s,A.b9,A.h,0,A.p),A.f,s,s,new B.n(u,s,t,v,s,s,A.m),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.l,s,A.e,A.h,0,s,s),e,A.a5,A.a1s,26)},
b9Y(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bt:A.aH,s=B.o(v,v,A.f,v,v,new B.n(t,v,v,D.b6t,v,v,A.m),v,v,v,A.nL,v,v,v,5),r=x.p
r=B.a([s,A.ba,B.E(B.x(B.a([B.A(B.a([B.W(u?A.tw:A.zT,t,v,v,v,14),A.e3,new B.dc(1,A.ck,B.c(d,v,1,A.a2,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.l,v,A.e,A.h,0,v,v),A.am,new B.dk(A.dv,A.a5,A.f,B.c(e,v,1,v,v,v,v,D.fyM,v,v,v),v)],r),A.D,v,A.b9,A.h,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(X.OG,B.W(A.eK,A.c.j(0.35),v,v,v,v),v))
w=this.b2s(new B.a5(v,66,B.A(r,A.l,v,A.e,A.h,0,v,v),v),t,A.lI,20)
if(s)return w
return B.aM(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cD9(d,e,f){return this.b9Y(d,e,f,null)},
c6f(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.o(m,m,A.f,m,m,new B.n(f,m,m,m,B.a([new B.ac(0,A.H,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.c("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.VZ,k,A.b_,B.o(m,B.c(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(j,m,m,i,m,m,A.m),m,m,m,m,A.a27,m,m,m)],h),A.l,m,A.e,A.h,0,m,m),A.P],h)
if(e.length===0)i.push(new B.D(A.a1g,B.x(B.a([B.W(A.hs,g,m,m,m,30),A.am,B.c("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bB,B.c("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a8,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.l,m,A.e,A.h,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mE(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.f4||v===A.kx
t=u?A.hR:D.f0
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.aw(t.j(0.35),1,A.r,-1)
v=B.o(A.z,B.W(u?A.tw:A.vm,t,m,m,m,18),A.f,m,m,new B.n(m,m,new B.bF(r,r,r,r),new B.be(v,v,v,v),m,new B.a8(A.ay,A.aC,A.x,s,m,m),A.m),m,38,m,m,m,m,m,38)
s=B.c(C.ipg(j),m,1,A.a2,m,m,m,A.kO,m,m,m)
q=C.hA7(j.y)
s=B.x(B.a([s,A.bB,B.c(q,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,11,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.D,m,A.e,A.h,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dG(j.c)
q=B.o(m,B.c(o+"$"+n,m,m,m,m,m,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.n(q,m,m,new B.be(p,p,p,p),m,m,A.m),m,m,m,m,A.oG,m,m,m)
j=C.hI2(j)
k.push(new B.D(A.Hn,new B.c6(A.aM,A.e,A.h,A.l,m,A.p,m,0,B.a([v,A.ba,new B.bz(1,A.bd,s,m),B.x(B.a([q,A.cT,B.c(j,m,m,m,m,m,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),A.dK,m,A.e,A.h,0,A.p)],h),m),m))
A.d.u(i,k)}return this.aA4(B.x(i,A.l,m,A.e,A.h,0,A.p),f,A.aX,D.bFQ,26)}}
C.aDZ.prototype={
T(){return new C.bkU(null,null)},
cY0(d){return this.z.$1(d)},
cZk(){return this.Q.$0()}}
C.bkU.prototype={
Z(){var w,v=this,u=null
v.a4()
w=B.bp(u,A.qO,u,1,u,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bp(u,D.bDm,u,1,u,v)
w.cK(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bp(u,A.qR,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.bb7()},
gbdR(){var w=new B.V(Date.now(),0,!1)
if(B.lA(w)===6||B.lA(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
bb7(){var w=this,v=w.a,u=v.e||v.f||w.gbdR()
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
this.bb7()},
t(){var w=this,v=w.d
v===$&&B.d()
v.t()
v=w.e
v===$&&B.d()
v.t()
v=w.f
v===$&&B.d()
v.t()
w.bzM()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbdR()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aE:g.x
g=g.r?new C.duw(i):h
v=B.m(32)
s=B.m(32)
r=f?D.dzj:D.dzh
q=B.K((f?D.ps:A.b1).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ac(0,A.H,(f?A.aE:A.bb).j(0.16),A.fU,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.u(m,B.a([B.ao(h,i.ad1(D.ps,130),h,h,h,-24,-30,h),B.ao(-36,i.ad1(A.aE,140),h,h,-28,h,h,h)],n))
else A.d.u(m,B.a([B.ao(h,i.ad1(A.bb,120),h,h,h,-30,-36,h),B.ao(-40,i.ad1(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bw(l,new B.e6(B.c7(k,new C.dux(i),h),h),A.aq),h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.d()
m.push(B.bS(0,new B.dp(!0,B.bw(l,new B.e6(B.c7(k,new C.duy(i),h),h),A.aq),h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.K(A.c.j(0.16),A.r,1)
m.push(B.ao(h,new B.cO(D.b8p,B.o(h,B.A(B.a([B.o(h,h,A.f,h,h,new B.n(t,h,h,h,B.a([new B.ac(0,A.H,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ab,new B.dc(1,A.ck,B.c(u,h,1,A.a2,h,h,h,D.fEK,h,h,h),h)],n),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.n(k,h,j,l,h,h,A.m),h,h,h,h,A.hg,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hyv(A.fQ,new C.duz(),l)
m.push(C.hyu(new C.duA(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aM(!1,v,!0,B.cU(h,new B.an(A.a0,h,A.ad,A.f,m,h),h,h,A.b0,new B.n(h,h,q,s,o,new B.a8(A.ay,A.aC,A.x,r,h,h),A.m),A.CI,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ad1(d,e){var w=null
return new B.dp(!0,B.o(w,w,A.f,w,w,new B.n(w,w,w,w,w,new B.bT(A.z,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),w)}}
C.beu.prototype={
b2v(d,e,f,g){var w=new B.aG($.R().r,A.ai,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
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
a6.b2v(b2,new B.r(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=A.i.F(a7+p/3,1)
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
if(f>0.6&&g>0.35){i=$.hOd()
h=i.b
d=h.c
h=h.a.c
i.a2(b2,new B.r(-d/2,-h.gb9(h)/2))}m.restore()
break
case 1:$.R()
i=new B.ar(A.S,A.Q,A.V,A.W,A.U)
i.r=a9.j(g*0.95).gp(0)
a6.b2v(b2,o,3+g*3,i)
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
i.y=A.oH
b2.O(new B.r(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.bet.prototype={
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
if(o!=null)p.aj(o)
q.ab()
p=s+0.14361566416410484
o=new B.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(o)
n=q.f
if(n!=null)o.aj(n)
q.ab()
p=new B.aq(a0+Math.cos(p)*130,a2+Math.sin(p)*130)
r.push(p)
o=q.f
if(o!=null)p.aj(o)
q.ab()
p=new B.bx()
r.push(p)
r=q.f
if(r!=null)p.aj(r)
q.ab()
a5.af(q,a4)}a0=w*2
a2=A.i.F(a0,1)
a3=a5.c
J.br(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.jq(0,0.35)
a2=-a1
v=B.L()
v.sam(new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.fhT))
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
v=B.bu(D.fiq,A.F4)
u=new B.ar(A.S,A.Q,A.V,A.W,A.U)
u.r=D.aEL[A.o.F(t,6)].j(k*0.9).gp(0)
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
f=D.aEL[A.o.F(t+i,6)].j(k)
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
aD(d){return d.b!==this.b}}
C.bes.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new B.r(d,a0),a2=d-4,a3=a2-22
$.R()
w=B.L()
w.b=A.aa
w.c=14
v=f.d
w.r=(v?f.r:A.b1).j(0.22).gp(0)
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
o.sam(D.eGO.aA(0,B.bW(a1,a3)))
a4.aE(p,o)
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
if(g!=null)h.aj(g)
k.ab()}k.E(new B.aq(t,a0))
k.E(new B.bx())
$.R()
d=B.L()
a0=x.O
t=f.e
a0=v?B.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):B.a([t.j(0.22),D.f0.j(0.34),A.cX.j(0.62)],a0)
d.sam(new B.a8(A.aX,A.b4,A.x,a0,e,e).aA(0,B.bW(a1,a3)))
a4.af(k,d)
d=B.L()
d.b=A.aa
d.c=2
d.r=A.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aE0.prototype={
T(){var w=$.ax()
return new C.aE1(new B.at(A.ax,w),new B.at(A.ax,w))},
bl3(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aE1.prototype={
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
cF3(d){this.a.bl3(d,!0)
this.mt("Deposit submitted. Admin will review your payment proof.")
this.l(new C.duX())},
cDE(){var w,v,u=this,t=B.cG(u.d.a.a)
if(t==null||t<=0){u.mt("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hF(w,new C.arY(v.d,t,u.gcF2(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cLP(){var w,v,u,t,s=this,r=s.d,q=B.cG(r.a.a)
if(q==null||q<=0){s.mt("Enter an amount to withdraw.")
return}if(q<10){s.mt("Minimum withdrawal is $"+B.dG(10)+".")
return}w=s.a.d.d
if(q>w){s.mt("Insufficient balance. You have $"+B.dG(w)+".")
return}w=s.e
v=C.hJv(w.a.a)
if(v.length===0){s.mt("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bl3(new B.d9("wd_"+1000*Date.now(),s.a.d.a,q,A.f4,A.lc,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dG(u)+" \u2014 You receive: $"+B.dG(q-u),null,null,A.dI,new B.V(Date.now(),0,!1)),!0)
s.mt("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.ci)
w.bP(0,A.ci)
s.l(new C.duY())},
cIp(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
if(r.x!==A.cx||!this.aZA(r)||B.hmm(r))continue
q=r.d
p=q===A.f4||q===A.kx||q===A.eG
q=r.c
if(p)t+=q
else u+=q}return new B.bs2(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cIp(),p=s.a.r,o=new B.Y(p,new C.duZ(),B.T(p).k("Y<1>")).gL(0)
p=B.aD(d,A.dF,x.w).w
w=s.a
v=w.c
w=w.x
u=B.a([D.f0.j(0.24),A.a_.j(0.72)],x.O)
t=B.K(D.f0.j(0.38),A.r,1)
w=B.bUJ(!1,v,"WALLET",B.hd(B.aM(!1,r,!0,B.o(A.z,B.W(P.arU,D.f0,r,r,r,18),A.f,r,r,new B.n(r,r,t,r,r,new B.a8(A.ay,A.aC,A.x,u,r,r),A.a6),r,40,r,r,r,r,r,40),A.cQ,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bHv(q.a,q.b,o)
t=x.p
v=B.A(B.a([s.asS(A.vm,"Deposit",0),s.asS(A.tw,"Withdraw",1),s.asS(A.fT,"History",2)],t),A.l,r,A.rc,A.h,0,r,r)
return B.eb(B.bm(!1,B.cc(B.x(B.a([w,A.bx,u,A.dc,v,A.dc,B.oD(s.f===2?s.c37():s.c92(),A.im,B.pX(),A.b0,A.b0,B.LS())],t),A.al,r,A.e,A.h,0,A.p),A.t,r,A.y,r,r,new B.P(18,p.r.b+8,18,130),r,r,A.ah),!0,!1,A.ag,!0,!1),A.Cb,!0)},
bHv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.ce(g,"@")
v=A.a.az(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aX(g,w)}else v=g
w=B.m(26)
u=B.ao(h,i.aCn(220,0.1),h,h,h,-60,-70,h)
t=B.ao(-90,i.aCn(200,0.07),h,h,h,30,h,h)
s=B.ao(-60,i.aCn(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bS(0,new B.bP(new B.n(h,h,B.K(A.c.j(0.18),A.r,1),r,h,h,A.m),A.bl,h,h),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.o(h,B.b4(h,h,h,new C.bdU(h),A.az),A.f,h,h,new B.n(h,h,h,q,h,D.ccm,A.m),h,28,h,h,h,h,h,38),A.b_,D.hcK],p),A.l,h,A.e,A.h,0,h,h)
o=B.c("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=C.asH(new C.duJ(i),D.fKw,i.a.d.a)
m=B.a([B.E(i.aRX(A.qZ,"In",d),1),B.E(i.aRX(A.to,"Out",e),1)],p)
if(f>0){l=A.d3.j(0.22)
k=B.m(99)
j=B.K(A.jj.j(0.6),A.r,1)
m.push(B.o(h,B.c(""+f+" pending",h,h,h,h,h,h,D.fFI,h,h,h),A.f,h,h,new B.n(l,h,j,k,h,h,A.m),h,h,h,h,A.oG,h,h,h))}return new B.fG(1.62,B.bw(w,new B.an(A.a0,h,A.ad,A.t,B.a([D.eFZ,u,t,s,r,new B.D(S.tj,B.x(B.a([q,A.b_,o,A.bB,new B.dk(A.dv,A.a5,A.f,n,h),A.b_,B.A(m,A.l,h,A.e,A.h,0,h,h),A.am,B.c(v,h,1,A.a2,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.D,h,A.e,A.h,0,A.p),h)],p),h),A.aq),h)},
aCn(d,e){var w=null
return B.o(w,w,A.f,w,w,new B.n(w,w,B.K(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aRX(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.o(w,B.W(d,A.c,w,w,w,13),A.f,w,w,new B.n(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bm,new B.dc(1,A.ck,new B.dk(A.dv,A.a5,A.f,B.c(e+"  $"+B.dG(f),w,w,w,w,w,w,A.ob,w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w)},
asS(d,e,f){var w=null,v=this.f===f,u=v?D.cdL:new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.K(v?A.c.j(0.6):D.f0.j(0.25),A.r,1),s=v?B.a([new B.ac(0,A.H,A.aE.j(0.45),A.J,18)],x.V):w
u=B.cU(w,B.W(d,v?D.ah_:D.f0,w,w,w,26),w,w,A.cl,new B.n(w,w,t,w,s,u,A.a6),A.Hi,w,62,w,w,w,w,w,62)
return B.ay(A.c1,new B.a5(92,w,B.x(B.a([u,A.aVL,B.c(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.duI(this,f),w,w,w,w,w,w,!1,A.a4)},
c92(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.cG(a1.a.a)
if(a2==null)a2=0
w=a0?D.f0:A.ct
v=a2>0
u=new C.duU(e,w)
t=new C.duT()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.uN,A.uN],q)
o=B.K(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ac(0,A.H,A.w.j(0.35),A.eO,22)],n)
l=w.j(0.15)
l=B.o(d,B.W(a0?A.vm:A.tw,w,d,d,d,18),A.f,d,d,new B.n(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.c(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fI,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.as,k,B.o(d,B.A(B.a([B.W(A.hG,w,d,d,d,14),B.c("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.G,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.l,d,A.e,A.N,0,d,d),A.f,d,d,new B.n(j,d,d,i,d,d,A.m),d,d,d,d,A.lt,d,d,d)],h),A.l,d,A.e,A.h,0,d,d)
l=B.c("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bV,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uY(B.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.D(A.hV,l,d),A.db,B.aZk(new B.cO(D.b8I,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),a1,w,d,d,d,d,2,B.bA(d,A.eP,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,k,d,d,A.ec,d,d,d,1,d,d,!1,"\u2022",d,new C.duS(e),d,d,d,!1,d,d,!1,d,!0,d,A.ae,d,d,d,d,d,d,d,d,d,d,d,D.fNq,!0,A.K,d,A.ao,d,d,d,d),d),d)],h),A.D,d,A.b9,A.h,0,d,d)
a1=v?120:60
a1=B.as(B.cU(d,d,d,d,A.b0,new B.n(d,d,d,B.m(99),d,new B.a8(A.a5,A.a9,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.m),A.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dG(10)+" \xb7 admin sends it to your Cash App."
q=B.c(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a8,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.chI:D.cwx
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
l=a0?A.TG:A.a5F
n=B.a([new B.ac(0,A.H,(a0?A.b5:A.dX).j(0.45),A.dm,18)],n)
k=a0?e.gcDD():e.gcLO()
j=B.W(a0?A.a3C:A.m0,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dG(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dG(a2):"Request withdrawal"
a1.push(new B.a5(d,54,new B.bP(new B.n(d,d,d,q,n,new B.a8(A.a5,A.a9,A.x,l,d,d),A.m),A.bl,B.lP(j,B.c(i,d,d,d,d,d,d,A.m5,d,d,d),k,B.fv(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.ba(B.m(18),A.a1),d,d,d,d,d)),d),d))
return B.o(d,B.x(a1,A.al,d,A.e,A.h,0,A.p),A.f,d,d,new B.n(d,d,o,r,m,new B.a8(A.aX,A.b4,A.x,p,A.xr,d),A.m),d,d,new B.bl("form"+s,x.W),d,A.wR,d,d,d)},
c37(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.B(new B.Y(a2,new C.duM(a0),a3),a3.k("M.E"))
A.d.b0(a4,new C.duN())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.S(x.N,x.o)
a3=$.fPG
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?A.iM:a3)
while(a3.C()){v=a3.gP(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.I)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=B.B(new B.b8(a2,a3),a3.k("M.E"))
r=C.ipP(a2,B.Mb(a0.a.e,new C.duO(a0)))
a2=B.m(24)
a3=B.K(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bMO,B.aM(!1,v,!0,B.o(a1,D.fjn,A.f,a1,a1,new B.n(a1,a1,B.K(D.f0.j(0.4),A.r,1),u,a1,a1,A.m),a1,a1,a1,a1,A.lV,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.duP(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.l,a1,A.e,A.h,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.D(D.bEj,B.x(B.a([B.W(A.HR,A.c.j(0.25),a1,a1,a1,40),A.T,D.h9f],q),A.l,a1,A.e,A.h,0,A.p),a1))
else{v=B.a([],q)
for(p=B.cV(a4,0,B.dy(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gL(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
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
f=B.c(a0.bY5(n),a1,a1,a1,a1,a1,a1,A.ja,a1,a1,a1)
e=C.hA7(n.y)
d=A.c.j(0.5)
f=B.a([f,A.bB,B.c(e,a1,a1,a1,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(B.c(e,a1,1,A.a2,a1,a1,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==A.kP)f.push(new B.D(A.a1k,new B.Da(A.bI,5,4,A.br,B.a([a0.aQR("Before",m.b),a0.aQR("After",m.a)],q),a1),a1))
m=B.x(f,A.D,a1,A.e,A.h,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dG(f)
f=B.c(f,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hI2(n)
v.push(B.o(a1,new B.c6(A.aM,A.e,A.h,A.l,a1,A.p,a1,0,B.a([k,A.ba,new B.bz(1,A.bd,m,a1),A.ab,B.x(B.a([f,A.av,B.o(a1,B.c(n,a1,a1,a1,a1,a1,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.G,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.f,a1,a1,new B.n(e,a1,a1,new B.be(d,d,d,d),a1,a1,A.m),a1,a1,a1,a1,A.zj,a1,a1,a1)],q),A.dK,a1,A.e,A.h,0,A.p)],q),a1),A.f,a1,a1,new B.n(a1,a1,new B.bF(A.a1,A.a1,new B.aw(l,1,A.r,-1),A.a1),a1,a1,a1,A.m),a1,a1,a1,a1,A.qS,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hu(D.c2N,B.c("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cd,a1,a1,a1),new C.duQ(a0),B.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.f0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.u(u,v)}return B.o(a1,B.x(u,A.al,a1,A.e,A.h,0,A.p),A.f,a1,a1,new B.n(A.uN,a1,a3,a2,a1,a1,A.m),a1,a1,D.hC9,a1,D.bGF,a1,a1,a1)},
aQR(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.K(A.c.j(0.1),A.r,1),s=B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dG(e)
return B.o(w,B.Zs(B.cR(B.a([s,B.cR(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fKH,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.n8,w,w,w)},
aZA(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eG)return d.c>0
if(B.tn(d))return!1
if(v===A.fY||v===A.f4)return!0
if(v===A.ph||v===A.kx)return!0
if(v===A.kQ)return!0
if(v===A.hc)return A.a.q(w,"clock-in")||d.c>0
return!1},
bY5(d){var w,v=d.f
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
C.bdU.prototype={
a2(d,e){var w,v,u,t
$.R()
w=B.L()
w.r=D.bkl.j(0.55).gp(0)
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
C.bz5.prototype={
a2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new B.a2(0,p,s,p+80)
n=[A.bb,A.hd,A.bv][q]
$.R()
p=new B.ar(A.S,A.Q,A.V,A.W,A.U)
p.sam(new B.a8(A.aX,A.b4,A.x,B.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aA(0,o))
a1.aE(o,p)}for(m=0;m<46;++m){s=m*12.9898
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
h.r=A.py.j(0.35*i).gp(0)
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
t=A.py.j(0.5*Math.sin(h*3.141592653589793))
d=new B.jM(new B.es("z",a0,a0,A.cM,a0,a0,a0,a0,a0,a0,new B.F(!0,t,a0,a0,a0,a0,12+h*14,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),A.a7,A.bW,new B.ji(1),a0,a0,a0,a0,A.bX,a0,A.cw)
d.e5()
d.a2(a1,new B.r(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aNF.prototype={
aY(){this.b8()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.bB4.prototype={}
C.b2i.prototype={}
C.a13.prototype={
T(){return new C.aGp(new B.at(A.ax,$.ax()))},
d_v(d,e){return this.d.$2(d,e)}}
C.aGp.prototype={
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
b2A(){var w=this,v=A.a.i(w.d.a.a),u=B.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.l(new C.em_(w))
return}u=w.c
u.toString
B.a6(u,!1).N(null)
w.a.d_v(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aD(a0,A.eV,e).w
e=B.aD(a0,A.dF,e).w
w=B.as(B.o(f,f,A.f,f,f,new B.n(A.aT,f,f,B.m(2),f,f,A.m),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.o(f,D.c28,A.f,f,f,new B.n(f,f,f,f,B.a([new B.ac(0,A.H,A.fe.j(0.5),A.J,18)],v),D.auD,A.a6),f,52,f,f,f,f,f,52),A.eu,B.E(B.x(B.a([D.fXi,A.bB,B.c(g.a.c,f,1,A.a2,f,f,f,A.mH,f,f,f)],u),A.D,f,A.e,A.h,0,A.p),1),B.aH(f,f,f,f,D.c31,f,f,f,new C.em2(a0),f,f,f,f,f,f)],u),A.l,f,A.e,A.h,0,f,f)
s=g.b9G(A.eY,"You",A.ct)
r=A.aQ.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.D(A.l1,B.o(f,D.h0v,A.f,f,f,new B.n(r,f,B.K(A.aQ.j(0.6),A.r,1),q,f,f,A.m),f,f,f,f,A.h6,f,f,f),f),g.b9G(A.xa,"Your friend",A.c4)],u),A.l,f,A.e,A.h,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aN(f,A.Z,!0,f,!0,A.t,f,B.aO(),g.d,f,f,f,f,f,2,B.bA(f,f,f,f,f,f,f,f,!0,new B.b6(4,s,new B.aw(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b6(4,o,D.b7t),f,f,f,f,f,f,f,f,A.Fq,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c5G,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.ak,f,f,f,f,f,A.mG,f,f,f,1,f,f,!1,"\u2022",f,new C.em3(g),f,new C.em4(g),f,!1,f,f,!1,f,!0,f,A.ae,f,f,f,f,f,f,f,f,f,f,f,A.jI,!0,A.a7,f,A.ao,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.crw[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.auC:f
p=p?f:A.c.j(0.06)
k=new B.aw(g.e===l?A.aF:A.bw,1,A.r,-1)
j=""+l
i=B.c(j,f,f,f,f,f,f,A.dn,f,f,f)
j=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bz(1,A.bd,B.ay(f,B.cU(f,B.x(B.a([i,B.c(j,f,f,f,f,f,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),A.l,f,A.e,A.h,0,A.p),f,f,A.b0,new B.n(p,f,new B.bF(k,k,k,k),new B.be(s,s,s,s),f,n,A.m),A.eD,f,f,f,f,A.f6,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.em5(g,l),f,f,f,f,f,f,!1,A.a4),f)],u)
if(l!==7)s.push(A.ab)
A.d.u(r,s)}s=B.A(r,A.l,f,A.e,A.h,0,f,f)
r=B.A(B.a([B.W(A.l4,A.c.j(0.5),f,f,f,15),A.bm,B.E(B.c("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.l,f,A.e,A.h,0,f,f)
p=B.m(18)
v=B.a([new B.ac(0,A.H,A.bD.j(0.4),A.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.P(0,0,0,d.f.d+e.r.d),B.o(f,B.x(B.a([w,A.aO,t,A.bx,q,A.bx,D.h4y,A.am,o,A.aO,D.h93,A.P,s,A.aB,r,A.aO,new B.a5(f,54,new B.bP(new B.n(f,f,f,p,v,D.ccB,A.m),A.bl,B.hu(D.asP,B.c("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fI,f,f,f),g.gcf1(),f),f),f)],u),A.al,f,A.e,A.N,0,A.p),A.f,f,f,D.b9v,f,f,f,f,D.bI0,f,f,f),f)},
b9G(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.K(f.j(0.45),A.r,1)
return B.E(B.o(w,B.x(B.a([B.W(d,f,w,w,w,24),A.av,B.c(e,w,w,w,w,w,w,A.Fr,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,w,w,w,A.f6,w,w,w),1)}}
C.pD.prototype={}
C.btT.prototype={
a2(d,e){var w,v,u,t,s=null,r=e.a/2,q=new B.r(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.R()
v=new B.ar(A.S,A.Q,A.V,A.W,A.U)
if(w===0)r=A.bj
else r=(w&1)===0?A.bE:A.a_
v.r=r.gp(0)
d.cQ(B.bW(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.R()
r=B.L()
r.r=A.iT.gp(0)
r.b=A.aa
r.c=8
d.O(q,p,r)
r=B.L()
r.r=A.aQ.gp(0)
d.O(q,p*0.22,r)
r=this.b
if(r!=null){u=B.fs(s,A.cw,s,s,s,B.cR(s,s,s,s,s,s,s,s,s,A.aYl,B.v(r)),A.a7,A.bW,s,A.dD,A.bX)
u.e5()
r=u.b
t=r.c
r=r.a.c
u.a2(d,q.aJ(0,new B.r(t/2,r.gb9(r)/2)))}},
aD(d){return d.b!=this.b}}
C.FD.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.ath.prototype={
gks(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bt3(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.hdJ("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c3Y()
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
s.b0F(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aKB.h(0,d)
s.c=w==null?"Play to earn":w}},
beC(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gks()
if(o)return
o=x.N
s.x=B.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b9(w,new C.clD(),o)
v=B.B(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.B(v,o)
A.d.u(v,B.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cJ3(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b9(t,new C.clE(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.I(v,B.c1(7,0,!1,o))}if(B.iX(e.h(0,q)))o=B.dR(e.h(0,q))
else{o=B.cb(B.v(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bJS(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b9(t,new C.clF(),x.L)
o=B.B(o,o.$ti.k("ak.E"))
s.y=o}if(B.iX(e.h(0,p)))o=B.dR(e.h(0,p))
else{o=B.cb(B.v(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bLe(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.ato(e,f)
break}},
cU7(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bs(w.at,!0,q))
o.n(0,"turnEmail",w.aEy())
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
q=B.B(new B.N(q,new C.clH(),p),p.k("ak.E"))
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
q=B.B(new B.N(q,new C.clI(),p),p.k("ak.E"))
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
aEy(){var w,v,u,t=this
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
cJ3(d,e){var w,v,u,t,s,r="playerXEmail"
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
bJS(d,e){var w,v,u,t,s
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
bLe(d,e){var w,v,u,t,s,r,q
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
return A.a.i(J.k(s==null?u.aEy():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c3Y(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.iB(8,new C.clA(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b0F(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.ci)},
d3h(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
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
if(r.aaS(2)){r.acs(1)
return!0}if(r.aaS(1)){r.acs(2)
return!0}if(r.gks()&&r.z===2){r.bFL(f)
if(r.aaS(2)){r.acs(1)
return!0}if(r.aaS(1)){r.acs(2)
return!0}}}return!1},
acs(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bFL(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=B.a([],x.B)
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
aaS(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gP(t)===d)return!1
return!0},
d3j(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.rf
if(!s.gks()){w=s.d
w=w!=null&&!s.UZ("tic_tac_go",w.d)}else w=!1
if(w)return D.rf
if(s.gks())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.al6(v))return s.aWe(v,!0)
if(!A.d.q(s.at,""))return s.aWf()
s.ax=!s.ax
if(!s.gks()){s.x.n(0,"turnEmail",s.aEy())
s.c=s.b08()
return D.rf}if(s.gks()){t=s.cqi(e)
if(t>=0){s.at[t]="O"
if(s.al6("O"))return s.aWe("O",!1)
if(!A.d.q(s.at,""))return s.aWf()
s.ax=!0}}s.c=s.gks()?"Your turn \u2014 you are X":s.b08()
return D.rf},
b08(){var w=this.d
if(w==null)return"Take your turn"
return this.UZ("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aWe(d,e){var w,v,u=this
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
return e?D.rg:D.JR},
aWf(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.UD},
cqi(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.al6("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.al6("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dh7[u]
if(v[w].length===0)return w}return-1},
al6(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dpp[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4Y(d){return A.d.cC(d,0,new C.clG())},
cND(d){this.ay.push(1+d.aw(10))
if(this.a4Y(this.ay)>21)return!0
return!1},
cNE(d){var w,v,u,t=this
while(t.a4Y(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4Y(t.ay)
v=t.a4Y(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cTt(d,e){var w,v,u,t=this
if(t.e)return D.rf
if(!t.gks()){w=t.d
w=w!=null&&!t.UZ("connect_four_pro",w.d)}else w=!1
if(w)return D.rf
if(t.gks())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.rf
if(!t.aic(d,w))return D.rf
if(t.aaG(t.fx))return t.aWc(t.fx,!0)
if(t.aRG())return t.aWd()
w=t.fx===1?2:1
t.fx=w
if(t.gks()&&w===2){u=t.cpF(e)
if(u>=0){t.aic(u,2)
if(t.aaG(2))return t.aWc(2,!1)
if(t.aRG())return t.aWd()
t.fx=1}}t.c=t.gks()?"Your turn \u2014 drop a red disc":t.bJR()
return D.rf},
bJR(){var w=this.d
if(w==null)return"Drop a disc"
return this.UZ("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aic(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aRG(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aWc(d,e){var w,v,u,t=this
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
return e?D.rg:D.JR},
aWd(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.UD},
cpF(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aic(w,2)
v=r.aaG(2)
r.bck(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.aic(w,1)
u=r.aaG(1)
r.bck(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bck(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
aaG(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bJT(w,v,d))return!0}return!1},
bJT(d,e,f){var w,v,u,t,s=new C.clz(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bfA(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b0F(d)}return w.a>=w.b}}
C.auc.prototype={
T(){return new C.aHd(null,null)},
cZo(d){return this.e.$1(d)}}
C.aHd.prototype={
Z(){var w,v=this
v.a4()
w=B.bp(null,D.bDp,null,1,null,v)
w.eU(0,!0)
v.d=w
v.a.d.aV(0,v.gb36())
v.aAp()},
by(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.ci)
this.aAp()}},
aAp(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aj5(t,u)
C.aj5(t,u)
w.a.cZo(s)
w.a.toString
w.l(new C.eU8())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb36())
w=v.d
w===$&&B.d()
w.t()
v.bBi()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aj5(j,i),g=C.aj5(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.d()
u=new B.aP(1,1)
d.push(new B.x_(new B.d4(v,!1,B.o(l,l,A.f,l,l,new B.n(A.aQ,l,l,new B.be(u,u,u,u),B.a([new B.ac(0,A.H,A.aQ.j(0.6),A.J,6)],k),l,A.m),l,22,l,A.a1P,l,l,l,3),l),A.Vb,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.es(v,l,l,A.cM,l,l,l,l,l,l,D.fHv))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cF}else if(s===t){r=A.be
q=A.O}else{r=A.aA
q=A.G}d.push(new B.es(t,l,l,A.cM,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.d()
d.push(new B.x_(new B.d4(k,!1,B.o(l,l,A.f,A.aQ,l,l,l,22,l,l,l,l,l,3),l),A.Vb,l,l))}p=f===0?0:A.i.S(h/f*100)
k=A.w.j(0.35)
v=B.m(12)
u=B.K(A.aT,A.r,1)
o=x.p
v=B.o(l,B.x(B.a([B.A(B.a([m.b35("Correct",""+h,A.bj),A.ab,m.b35("Wrong / missed",""+(f-g),A.aA),A.b_,B.c(""+p+"% accuracy",l,l,l,l,l,l,D.fz3,l,l,l)],o),A.l,l,A.e,A.h,0,l,l),A.am,D.h1E],o),A.D,l,A.e,A.h,0,A.p),A.f,l,l,new B.n(k,l,u,v,l,l,A.m),l,l,l,l,A.bk,l,l,l)
u=B.E(B.cc(new B.abr(l,B.cR(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.af,u,A.T,B.aN(l,A.Z,!0,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.m(12),A.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b6(4,B.m(12),D.b7m),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,I.acJ,!0,A.a7,l,A.ao,l,l,l,l)],o),A.al,l,A.e,A.h,0,A.p)},
b35(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.o(w,B.c(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.n(v,w,w,u,w,w,A.m),w,w,w,w,A.h6,w,w,w)}}
C.aP9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","H(iq,iq)","~([y8?])","Q(rg)","rg()","H(rT,rT)","Q(rT)","H(rU,rU)","QJ(Z)","Q(iq)","cL(afk)","a0L(Z)","a_S(Z)","ag5(Z)","a8a(Z)","OE(Z)","aeX(Z,hx<ai<jq>>)","aeW(Z,H)","w(rg)","rT(ab<@,@>)","~(FD,ath)","Ow(Z)","ab<q,@>(rT)","rU(ab<@,@>)","ab<q,@>(kJ)","ab<q,@>(rU)","Q(rU)","ab<q,@>(lU)","lU(@)","ab<q,@>(iC)","iC(@)","iq(@)","aA<~>(kJ)","ab<q,@>(iq)","~(H,H)","iq(iq)","WX(Z)","aA<Q>(ai<iq>)","a0K(Z)","~(iq)","a1v(Z)","WY(Z)","q(iq)","Q(lU)","xN(bC<H,lU>)","adr(Z,H)","H(iC,iC)","adi(lU)","w(rZ)","bz(JM)","a0g(Z)","~(d9{bumpWalletRevision:Q,cloudRequest:Q})","~(q,G,G,G)","G(V)","~(d9)","a13(Z)","~(FD)","q(q)","a1w(Z)"])
C.cCt.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cCu(r,w,s.b,v,s.d)
t=s.e
r.b=B.dg(t,u)
v.r=new C.cCq(r)
v.e=new C.cCr(r,w)
v.f=new C.cCs(r,w,t,u)},
$S:0}
C.cCu.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.iw(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.aa(r)
u=B.cs(r)
s=v
q=u
p=B.Hd(s,q)
if(p==null)p=new B.jU(s,q==null?B.I0(s):q)
t=p
o.d.hD(t.a,t.b)
return}o.d.I(0,w)}else{o.e.a(null)
o.d.I(0,null)}},
$S:41}
C.cCq.prototype={
$0(){this.a.b.a1(0)
return $.HP()},
$S:2086}
C.cCr.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aaL.$0()
this.a.b.a1(0)},
$S:0}
C.cCs.prototype={
$0(){var w,v=this,u=v.b,t=B.dv(0,0,u.gbhL(),0,0,0)
u.fY(0)
u=v.c
w=v.a
w.b=B.cy(new B.bf(u.a-t.a),new C.cCp(w,u,v.d))},
$S:0}
C.cCp.prototype={
$0(){var w=this.c
this.a.b=B.dg(this.b,w)
w.$1(null)},
$S:0}
C.fg6.prototype={
$1(d){var w=this.a
w.l(new C.fg5(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fg5.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hx(D.am9,this.b,null,null,v.$ti.k("hx<1>"))},
$S:0}
C.fg8.prototype={
$2(d,e){var w=this.a
w.l(new C.fg3(w,d,e))},
$S:60}
C.fg3.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.d()
w.e=new B.hx(D.am9,null,this.b,this.c,v.$ti.k("hx<1>"))},
$S:0}
C.fg7.prototype={
$0(){var w=this.a
w.l(new C.fg4(w))},
$S:0}
C.fg4.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.d()
v.e=new B.hx(A.yV,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fTE.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cx},
$S:15}
C.fTw.prototype={
$1(d){return d},
$S:13}
C.fzM.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.o(A.z,new B.D(new B.P(u,0,u,0),B.c("NGMY",w,1,A.eU,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.afX,w,v,w,w,w,w,w,v)},
$S:159}
C.fzJ.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.fzK.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.kG(w,A.z,v.d,new C.fzI(v.e),A.h8,v.c,!0,v.b,null,null,v.a)},
$S:2087}
C.fzI.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.fzL.prototype={
$3(d,e,f){return this.a.$0()},
$S:144}
C.dmE.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dmP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dn6.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dn7.prototype={
$1(d){return this.a.Kx()},
$S:12}
C.dmX.prototype={
$0(){var w=J.b9(this.b,new C.dmW(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dmW.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmY.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmV(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmV.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dn_.prototype={
$0(){var w=this.a,v=w.a.d.bd,u=B.T(v).k("N<1,ab<q,@>>")
v=B.B(new B.N(v,new C.dmZ(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dmZ.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.dmS.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cgR(t.a.c)?2:3
break
case 2:w=4
return B.b(C.arR(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.l(new C.dmQ(t))
case 3:if(t.c!=null)t.l(new C.dmR(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:47}
C.dmQ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmR.prototype={
$0(){return this.a.d++},
$S:0}
C.dmT.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmU.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dmK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.ixe(t.a.d.bd,J.k(J.t(u.b,"id")),"rejected")
t.a.bu()
w=2
return B.b(C.aiV(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kx(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmL.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.ilR(t.a.d.bd,J.k(r.h(s,"id")),t.a.c.c)
t.a.bu()
w=2
return B.b(C.aiV(t.a.d.bd),$async$$0)
case 2:w=3
return B.b(t.Kx(),$async$$0)
case 3:t.Jh(A.d.dB(t.y,new C.dmI(s),new C.dmJ(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmI.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmJ.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmM.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dmN.prototype={
$0(){return A.d.gH(this.a.y)},
$S:z+5}
C.dmO.prototype={
$0(){return this.a.Jh(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dmH.prototype={
$0(){return this.a.c7s(this.b)},
$S:0}
C.dmG.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.ixI(u,w.b,new C.dmF(v,w))},
$S:0}
C.dmF.prototype={
$2(d,e){return this.a.ajA(this.b,d,e)},
$S:767}
C.dn5.prototype={
$2(d,e){if(d)return
this.a.aVR()},
$S:133}
C.dn3.prototype={
$2(d,e){var w=this.a
return new B.lb(C.b2h(w.a.c.a),new C.dn2(w,this.b,this.c),null,null,x.gH)},
$S:2089}
C.dn2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.c(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aF(!1,A.a3,!0,w,B.aM(!1,v,!0,new B.D(A.kd,B.bKg(A.d3,B.W(A.fT,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dn1(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.aj)},
$S:2090}
C.dn1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fPV(s.c.a,s.e).eG(new C.dn0())
w=2
return B.b(C.bHx(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn0.prototype={
$1(d){},
$S:31}
C.dn4.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0c.prototype={
$0(){var w=this.a
return B.Mb(w.a.c.a,new C.e0b(w))},
$S:83}
C.e0b.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0d.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.d()
u.bh=t.ak()
v.bu()
w.l(new C.e0a())},
$S:0}
C.e0a.prototype={
$0(){},
$S:0}
C.e0e.prototype={
$2(d,e){var w,v=this.a
if(!C.cgR(v.a.c)){if($.hdE.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.hdF(this.b,v.x,w)
return!1}C.arR(v.a.c.a)}if(B.Mb(v.a.c.a,new C.e09(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aK4()
w=v.a
w.toString
w.hK(new B.d9(A.o.v(1000*Date.now()),v.a.c.a,d,A.kx,A.fz,e,null,null,A.cx,new B.V(Date.now(),0,!1)))
v.a.bu()
return!0},
$S:2091}
C.e09.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.e0f.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.v(1000*Date.now()),t=this.a,s=t.a
s.hK(new B.d9(u,s.c.a,d,A.hc,A.fz,e,v,v,A.cx,new B.V(Date.now(),0,!1)))
t.a.bu()
w=f>0?"+$"+A.i.ac(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.i.ac(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.vf(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:2092}
C.dmy.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dmB.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dmC.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dmD.prototype={
$1(d){var w=null,v=this.a,u=B.fv(w,w,v.e===d?A.bj:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f7,B.iz(B.c("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dmA(v,d),u),w),1)},
$S:215}
C.dmA.prototype={
$0(){var w=this.a
return w.l(new C.dmz(w,this.b))},
$S:0}
C.dmz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.doq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dot.prototype={
$1(d){this.a.cqE()
return null},
$S:12}
C.dou.prototype={
$1(d){return this.a.cH6()},
$S:12}
C.dov.prototype={
$1(d){this.a.a43()
return null},
$S:12}
C.dow.prototype={
$1(d){this.a.akG()
return null},
$S:12}
C.dox.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c7)return
w=v.Q
w===$&&B.d()
if(w<=0){v.l(new C.dor(v))
w=v.as
if(w!=null)w.a1(0)
v.FR()
return}v.l(new C.dos(v))},
$S:12}
C.dor.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dos.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.d()
w.Q=v-1
return v},
$S:0}
C.dnG.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.dnH.prototype={
$0(){return this.a.bH=this.b},
$S:0}
C.do9.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.doa.prototype={
$0(){},
$S:0}
C.dnW.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Waiting for both players\u2026"
w.bT="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dnX.prototype={
$0(){var w=this.a
w.c7=!0
w.cT="Both players connected"
w.bT="Starting together in a moment\u2026"},
$S:0}
C.dnY.prototype={
$0(){var w=this.b
w.c7=!0
w.cT="Match starting together\u2026"
w.bT="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.dnZ.prototype={
$0(){this.b.c7=!1},
$S:0}
C.do_.prototype={
$0(){},
$S:0}
C.dn8.prototype={
$0(){var w=this.a,v=w.x2,u=B.v(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dnF.prototype={
$0(){var w=this.a
w.at=this.b
w.b9a()},
$S:0}
C.dob.prototype={
$0(){},
$S:0}
C.dok.prototype={
$0(){},
$S:0}
C.do8.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.do7(w))},
$S:0}
C.do7.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.dnD.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dnE.prototype={
$0(){},
$S:0}
C.dof.prototype={
$1(d){return d==null},
$S:216}
C.dog.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cH(v.ch,w.d)},
$S:0}
C.doh.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dn9.prototype={
$1(d){return d==null},
$S:216}
C.dna.prototype={
$0(){return this.a.bh++},
$S:0}
C.dnb.prototype={
$0(){},
$S:0}
C.dnP.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dnQ.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.I(0,t)
w=this.c
u.I(0,w)
if(v.ghR()&&D.nh.q(0,v.a.e)){u=v.id
u.I(0,t)
u.I(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.dnR.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.l(new C.dnO(w))},
$S:11}
C.dnO.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.do0.prototype={
$0(){return this.a.y1++},
$S:0}
C.do1.prototype={
$0(){},
$S:0}
C.do2.prototype={
$0(){return this.a.y2++},
$S:0}
C.do3.prototype={
$0(){},
$S:0}
C.do4.prototype={
$0(){return this.a.bd++},
$S:0}
C.do5.prototype={
$0(){},
$S:0}
C.doe.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dnS.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnT.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dnU.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dnV.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.doi.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.doj.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dnc.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnd.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dne.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dnf.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.doc.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dod.prototype={
$0(){var w,v=this.a;++v.x2
v.aRs()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.v(Math.min(w+2,7))+" tiles"},
$S:0}
C.dnN.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.do6.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnL.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dnM.prototype={
$2(d,e){return d+e.length},
$S:198}
C.dol.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dom.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.don.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dop.prototype={
$1(d){var w=this.a,v=w.PA(),u=v<=0?0:A.i.D(w.AS()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ow(w.f?s:s*u,s,t,null)},
$S:z+22}
C.doo.prototype={
$1(d){return d.bW(0.85)},
$S:185}
C.dnK.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghR()&&D.nh.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.c(p,w,w,w,w,w,w,A.ja,A.K,w,w),A.am,B.E(B.as(new B.a5(r*v+u,r*t+s,B.iA(!0,w,w,A.y,new B.hP(v,6,6,1,r),new C.dnJ(q,r),q.fr.length,w,A.e0,A.ah,!1),w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,A.p)},
$S:165}
C.dnJ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghR()&&D.nh.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghR()&&D.nh.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.auK:D.cag,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.auK:D.auD
v=o?B.K(A.dA,A.r,2):s
u=B.a([new B.ac(0,A.H,B.a0(51,A.w.m()>>>16&255,A.w.m()>>>8&255,A.w.m()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aM(!1,l,!0,B.cU(s,B.as(n?B.W(D.cFi[r.fr[e]],A.c,s,s,s,t):B.c("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b0,new B.n(s,s,v,k,u,w,A.m),A.eD,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dnI(r,e),s,s,s,s,s,s,s)},
$S:190}
C.dnI.prototype={
$0(){return this.a.cpZ(this.b)},
$S:0}
C.dns.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(89,A.bj.m()>>>16&255,A.bj.m()>>>8&255,A.bj.m()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.K(B.a0(64,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),A.r,1)
return B.aF(!1,A.a3,!0,r,B.aM(!1,q,!0,B.o(A.z,B.c(t?"":u,w,w,w,w,w,w,D.aXh,w,w,w),A.f,w,w,new B.n(w,w,o,p,w,w,A.m),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnr(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.aj)},
$S:757}
C.dnr.prototype={
$0(){return this.a.cGl(this.b)},
$S:0}
C.dnt.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a0(46,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
return B.aF(!1,A.a3,!0,B.m(10),B.aM(!1,B.m(10),!0,B.o(A.z,B.c(u,w,w,w,w,w,w,D.aXh,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dnq(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
$S:757}
C.dnq.prototype={
$0(){return this.a.cGk(this.b)},
$S:0}
C.dnu.prototype={
$1(d){return this.a.l(new C.dnp())},
$S:26}
C.dnp.prototype={
$0(){},
$S:0}
C.dnv.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.d()
w=C.aj5(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pD()
if(u.ghR()&&D.nh.q(0,u.a.e)){u.a2j()
u.nm(!0)}else{v=A.d.cC(u.cy,0,new C.dnn())
t=u.dx
if(t>=v)u.uB("All 5 sentences perfect \u2014 full payout!")
else u.Fg(t/v,t,v)}}else{if(u.ghR()&&D.nh.q(0,u.a.e))u.a2j()
u.l(new C.dno(u))}},
$S:0}
C.dnn.prototype={
$2(d,e){return d+e.length},
$S:198}
C.dno.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.ci)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dnw.prototype={
$1(d){var w=null,v=B.fv(w,w,B.a0(38,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),w,w,w,w,w,w,A.c,w,w,A.cn,w,w,w,w,w,w,w)
return new B.D(A.cy,new B.a5(1/0,w,B.iz(B.c(d,w,w,w,w,w,w,P.aXa,w,w,w),new C.dnm(this.a,d),v),w),w)},
$S:153}
C.dnm.prototype={
$0(){return this.a.b8x(this.b)},
$S:0}
C.dnx.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.d()
w=u*3+8
return B.x(B.a([B.c(s,v,v,v,v,v,v,A.q7,v,v,v),A.P,B.E(B.as(new B.a5(w,w,B.iA(!0,v,v,A.y,new B.hP(3,4,4,1,u),new C.dnl(t,u),9,v,A.e0,A.ah,!1),v),v,v,v),1)],x.p),A.l,v,A.e,A.h,0,A.p)},
$S:165}
C.dnl.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b6i(e),p=r===0
if(p)w=A.L
else w=q?A.bj:B.a0(51,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
v=B.m(10)
s=p?t:new C.dnh(s,e)
u=B.m(10)
p=p?"":""+r
return B.aF(!1,A.a3,!0,v,B.aM(!1,u,!0,B.as(B.c(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.aj)},
$S:86}
C.dnh.prototype={
$0(){return this.a.cGj(this.b)},
$S:0}
C.dny.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dnk(q,d)
p=B.m(16)
if(o)w=D.a6P[d]
else{w=D.a6P[d]
w=B.a0(31,w.m()>>>16&255,w.m()>>>8&255,w.m()&255)}v=B.m(16)
u=o?B.a0(A.i.S(127.5),A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255):B.a0(20,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255)
u=B.K(u,A.r,o?2:1)
t=x.V
if(o){s=D.a6P[d]
t=B.a([new B.ac(0,A.H,B.a0(217,s.m()>>>16&255,s.m()>>>8&255,s.m()&255),A.J,16)],t)}else t=B.a([],t)
return B.aM(!1,p,!0,B.cU(r,r,r,r,A.b0,new B.n(w,r,u,v,t,r,A.m),L.CK,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:2095}
C.dnk.prototype={
$0(){return this.a.cGm(this.b)},
$S:0}
C.dnz.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.d()
q=B.c(q,t,t,t,t,t,t,A.q7,t,t,t)
w=B.c("Move "+r.aB4()+"/"+C.hko(),t,t,t,t,t,t,A.Fs,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.c("Round "+v+"/7 \xb7 "+B.v(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a0(153,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.as(new B.a5(u,u,B.iA(!0,t,t,A.y,new B.hP(3,6,6,1,s),new C.dnj(r),9,t,A.e0,A.ah,!1),t),t,t,t),1)],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:165}
C.dnj.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bj:D.bmJ,q=u?A.ew:D.bxt
return B.aF(!1,A.a3,!0,w,B.aM(!1,t,!0,B.o(w,w,A.f,w,w,new B.n(r,w,B.K(q,A.r,u?2.5:1),s,w,w,A.m),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dng(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:86}
C.dng.prototype={
$0(){return this.a.cGg(this.b)},
$S:0}
C.dnA.prototype={
$0(){return this.a.b8x(this.b[this.c])},
$S:0}
C.dnB.prototype={
$0(){return this.a.l(new C.dni())},
$S:0}
C.dni.prototype={
$0(){},
$S:0}
C.dnC.prototype={
$2(d,e){this.a.a12(d,e)
return null},
$S:z+21}
C.ds_.prototype={
$1(d){return this.a.cqt(this.b,d)},
$S:2096}
C.drZ.prototype={
$0(){var w=this
return w.a.a.cZX(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cOv.prototype={
$1(d){var w=this.a
w.a2z()
w.uK()},
$S:7}
C.cNQ.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cNG.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cNH.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cO_.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cNX.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNY.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cNZ.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cNS.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.cNR(w))},
$S:0}
C.cNR.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cNI.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cNV.prototype={
$1(d){var w=this.a
return new C.WX(w.fx,new C.cNU(w),w.a.f.r,null)},
$S:z+37}
C.cNU.prototype={
$1(d){return this.boi(d)},
boi(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.chU(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.l(new C.cNT(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cNT.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cOi.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cOc.prototype={
$1(d){this.a.uK()
return null},
$S:12}
C.cOf.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ar(v.gaYO().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uK()
return}v.l(new C.cOe())},
$S:12}
C.cOe.prototype={
$0(){},
$S:0}
C.cOb.prototype={
$1(d){this.a.FZ()
return null},
$S:12}
C.cOd.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cOa.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:43}
C.cNN.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=B.bi(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h3(0,0),0,!1)
v=J.t(e,"at")
w=B.bi(J.k(v==null?"":v))
return u.aQ(0,w==null?new B.V(B.h3(0,0),0,!1):w)},
$S:43}
C.cNO.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.u(v,this.b)
w.ax=!0},
$S:0}
C.cNP.prototype={
$0(){var w=this.a
if(w.c!=null)w.a3f(!0)},
$S:11}
C.cNL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cNM.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
if(w.f.length!==0)w.V2(this.b)},
$S:7}
C.cO2.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
if(this.b)w.iv(v)
else w.mx(v,A.e7,A.l0)},
$S:7}
C.cNW.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cO3.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cO4.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.ba1()
w.r.bP(0,A.ci)
w.at=!0},
$S:0}
C.cO5.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cO6.prototype={
$0(){var w=this.a
w.f.push(B.J(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cO7.prototype={
$0(){var w,v=this.b,u=B.S(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cK(w.b)){w=J.b9(w.b,v.gcpm(),x.P)
w=B.B(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.ba1()},
$S:0}
C.cO8.prototype={
$0(){this.a.f.push(B.J(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cO9.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cO0.prototype={
$1(d){return this.boj(d)},
boj(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a7(s)
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
return B.b(C.asd(q,new C.rT("cal_"+1000*n,m,l,(o==null?p.bQ(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.atv()
case 4:k.c.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:402}
C.cOh.prototype={
$1(d){return this.bok(d)},
bok(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.U(B.b2(null,null,null,A.dr,null,A.t,null,B.c(d,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:402}
C.cO1.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.iv(v)},
$S:7}
C.cOu.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.d()
if(v>0)w.ad4(v-1)},
$S:0}
C.cOn.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.cOq.prototype={
$1(d){var w=this.a
w.l(new C.cOk(w,d))
if(d===0)w.a3f(!0)},
$S:26}
C.cOk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cOo.prototype={
$2$size(d,e){return C.hit(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:2097}
C.cOp.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hwc(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(G.at5(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cOl(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.asb(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.uK(),$async$$0)
case 15:p.l(new C.cOm(p))
p.ad4(0)
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
C.cOl.prototype={
$2(d,e){return this.bol(d,e)},
bol(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a3K(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:129}
C.cOm.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cOs.prototype={
$2(d,e){return A.ab},
$S:38}
C.cOr.prototype={
$2(d,e){var w=null,v=this.a,u=B.c((v.a.c.w?D.a6W:D.a6e)[e],w,w,w,w,w,w,A.qa,w,w,w),t=B.a0(31,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),s=B.a0(89,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255)
v=v.at?w:new C.cOj(v,e)
return B.n1(w,t,u,w,v,w,w,new B.aw(s,1,A.r,-1),w)},
$S:585}
C.cOj.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a6W:D.a6e
w.r.sb2(0,v[this.b])
w.nl()
return null},
$S:0}
C.cOt.prototype={
$1(d){var w=this.a
return w.at?null:w.nl()},
$S:2}
C.cNJ.prototype={
$0(){return this.a.ad4(0)},
$S:0}
C.cOg.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
C.cNK.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.o(v,D.c3N,A.f,v,v,new B.n(v,v,v,v,v,new B.a8(A.a5,A.a9,A.x,B.a([B.a0(51,A.aN.m()>>>16&255,A.aN.m()>>>8&255,A.aN.m()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.c("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aw,v,v,v,v,v,v,v,v,16,v,v,A.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.D(A.a1h,B.x(B.a([u,A.af,s,A.am,B.c("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aF:A.b6,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),v,v,v)}if(e<s)return u.bKS(t[e],w.c)
return u.aS6(B.J(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c4X.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.i.M(d)
return new B.V(B.h3(w>1e11?w:w*1000,0),0,!0).bU()}v=B.bi(J.k(d))
return v==null?null:v.bU()},
$S:370}
C.c4W.prototype={
$1(d){B.aI(d)
return(d==null?0:d)/100},
$S:847}
C.c4Z.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bi(J.k(d))
w=w==null?null:w.bU()}return w},
$S:370}
C.c4Y.prototype={
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
s=B.a65(A.a7L,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=B.a65(A.a6c,J.k(r==null?"system":r))
q=B.aW(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=B.a65(A.J0,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d9(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:822}
C.dIw.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dIx.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dIn.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dIl.prototype={
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
return B.b(C.hcF(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pE(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.abx(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).cc(B.ed(new C.dIu(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pE(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIu.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.d()
return new C.a0K(w.b,w.a,u,v,null)},
$S:z+39}
C.dIk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.i1D(q)?3:4
break
case 3:w=5
return B.b(t.a.Fv(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.b_P(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c50(s.a.c))
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
return B.b(s.aTr(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIj.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bs(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dIm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.af0(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hsY(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c5_(s,r.a.c,null)){r.lg(C.c50(r.a.c))
w=1
break}w=4
return B.b(r.bNb(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIt.prototype={
$1(d){var w=null,v=new B.at(A.ax,$.ax()),u=B.O(d).ax.a===A.I,t=u?A.iR:A.c,s=x.p,r=B.x(B.a([B.c("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ac:A.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),v,w,w,w,w,w,2,B.bA(w,new B.b6(4,B.m(14),A.du),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,A.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.ao,w,w,w,w)],s),A.D,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.dIr(d),w,w),B.bJ(D.fQH,w,new C.dIs(d,v),B.bn(A.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.h4T,w)},
$S:18}
C.dIr.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIs.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dIo.prototype={
$1(d){return D.hJP},
$S:z+12}
C.dIp.prototype={
$0(){return this.a.Fw(A.a.i(this.b))},
$S:1}
C.dIq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.b_P(t.b,r.a.c),$async$$0)
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
case 7:r.lg(C.c50(r.a.c))
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
return B.b(r.aTr(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dIy.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dIC.prototype={
$1(d){this.a.S4()
return null},
$S:12}
C.dIz.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dIA.prototype={
$0(){var w=null,v=this.a
B.fH(new B.fy(v.gaz5()))
this.b.K(x.q).f.U(B.b2(w,w,w,w,w,A.t,w,B.c("Code "+v.gaz5()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dIB.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dID.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.X(s,"NGMYSNAP1|")||A.a.X(s,"NGMYLOCALSYNC1|")||A.a.X(s,"NGMYLOCALLIVE1|")||A.a.X(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).N(s)
return}},
$S:169}
C.fEo.prototype={
$1(d){return D.hG4},
$S:z+13}
C.fFB.prototype={
$1(d){return new C.ag5(this.a,this.b,this.c,null)},
$S:z+14}
C.f9w.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f9x.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fX()},
$S:7}
C.dho.prototype={
$2(d,e){return e.amV(e.a.toUpperCase())},
$S:2098}
C.dhp.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).N(w)
return null},
$S:2}
C.dhq.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.c5J.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.aS(D.dyr,A.a.gjP(v))},
$S:4}
C.fPP.prototype={
$1(d){return d.a===this.a},
$S:2099}
C.fPQ.prototype={
$0(){return A.d.gH(A.E6)},
$S:2100}
C.dP_.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.l(new C.dOZ(v))
w=v.r
w===$&&B.d()
if(w<=0)v.b92("Time's up")},
$S:12}
C.dOZ.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.d()
w.r=v-1
return v},
$S:0}
C.dOR.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dOW.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.l(new C.dOT(w,d,e))},
$S:230}
C.dOT.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dOX.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.dOS(w))
w.cAu(!0)},
$S:0}
C.dOS.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dOY.prototype={
$1(d){this.a.b92(d)
return null},
$S:2}
C.dOU.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.dOV.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.ce_.prototype={
$1(d){return D.dWd},
$S:z+15}
C.cdZ.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fGq.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=B.aI(u.h(d,e)),s=t==null?v:A.i.M(t)
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
C.fGr.prototype={
$2(d,e){var w=B.aI(J.t(d,e))
w=w==null?null:A.i.M(w)
return w==null?0:w},
$S:563}
C.fGs.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:198}
C.fX8.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hEU(w,v):C.hiP(w,v)
if(u===3)++w.f
C.ahC(w,this.c,u)
return u},
$S:2102}
C.fXa.prototype={
$0(){return C.hEU(this.a,this.b)},
$S:98}
C.fX9.prototype={
$0(){return C.hiP(this.a,this.b)},
$S:98}
C.dI8.prototype={
$0(){var w=this.a
if(w.a.c)w.l(new C.dI7(w))},
$S:0}
C.dI7.prototype={
$0(){this.a.r=1+A.o.F(B.FY(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dI9.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.d()
u=u.x
u===$&&B.d()
w=A.i.be(u*10)
if(w!==v.w)v.l(new C.dI6(v,w))}},
$S:0}
C.dI6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cgq.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.G,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bB,new B.dk(A.dC,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.e,A.h,0,A.p),1)},
$S:2103}
C.cgp.prototype={
$3(d,e,f){var w=null
return B.c("$"+A.i.ac(e,2),w,w,w,w,w,w,A.mH,w,w,w)},
$S:498}
C.cgS.prototype={
$1(d){return new C.OE(this.a,this.b,!1,null,null)},
$S:z+16}
C.e7N.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.K(A.b2.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ac(2,A.H,A.b2.j(0.35),A.J,36),new B.ac(0,A.H,A.bD.j(0.175),A.J,24)],x.V)
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
o.push(B.o(g,D.bZS,A.f,g,g,new B.n(g,g,B.K(A.aQ.j(0.8),A.r,2.5),g,B.a([new B.ac(0,A.H,A.b2.j(0.55),A.cz,18)],n),A.vq,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.oj(A.k0,D.h2o,new C.e7J()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.c(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cF,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c_.j(0.12)
k=B.m(18)
j=B.K(A.c_.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.W(D.bTO,A.c_.j(0.95),g,g,g,20),A.ab,B.c("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c_.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.l,g,A.e,A.h,0,g,g),A.T,B.c("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.u(i,new B.N(m,new C.e7K(),B.T(m).k("N<1,w>")))
A.d.u(o,B.a([A.aO,B.o(g,B.x(i,A.D,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(l,g,j,k,g,g,A.m),g,g,g,g,A.bH,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.m(18)
k=B.K(A.b2.j(0.35),A.r,1)
o.push(B.o(g,B.x(B.a([f.azU(A.hs,"Unlimited games with an active plan",A.bb),A.P,f.azU(A.kk,"Weekday check-ins grow your balance",A.b2),A.P,f.azU(A.mp,"Compete, bet, and earn points",A.aQ)],p),A.l,g,A.e,A.h,0,A.p),A.f,g,g,new B.n(m,g,k,l,g,g,A.m),g,g,g,g,A.bH,g,g,1/0))
o.push(A.dc)
o.push(new B.a5(1/0,g,new B.bP(new B.n(g,g,g,B.m(16),B.a([new B.ac(0,A.H,A.bD.j(0.45),A.cz,16)],n),A.vq,A.m),A.bl,B.db(D.c2o,g,D.fYJ,new C.e7L(f,a0),B.bn(A.L,g,g,g,A.c,A.KZ,g,A.L,new B.ba(B.m(16),A.a1),g,g,g)),g),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bO(!1,B.c(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e7M(f,a0),g,g))
if(f.a.e)o.push(A.b_)
h=B.o(g,B.bw(v,new B.an(A.a0,g,A.ad,A.t,B.a([t,u,new B.D(new B.P(22,r,22,q),B.x(o,A.l,g,A.e,s,0,A.p),g)],p),g),A.aq),A.f,g,g,new B.n(g,g,e,d,w,D.cdd,A.m),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eI(g,A.L,h,g,g,g,A_.a1M,g,A.d7,g,g,g)},
$S:783}
C.e7J.prototype={
$1(d){return D.cc7.aA(0,d)},
$S:77}
C.e7K.prototype={
$1(d){var w=null
return new B.D(A.eI,B.A(B.a([B.W(A.a3L,A.c_.j(0.85),w,w,w,14),A.ab,B.E(B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$S:153}
C.e7L.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.e7M.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).N(null)},
$S:0}
C.fSc.prototype={
$1(d){if(d.gn1())this.a.a=d
return d.gn1()},
$S:667}
C.fS_.prototype={
$1(d){$.aU.x1$.push(new C.fRZ(this.a))},
$S:7}
C.fRZ.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fCI.prototype={
$1(d){return C.hF1(this.a,this.b+1)},
$S:7}
C.fTz.prototype={
$2(d,e){var w=B.aD(d,A.bY,x.w).w.a
return new B.a5(w.a,w.b,B.c5(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:130}
C.ch5.prototype={
$1(d){return d.r===this.a},
$S:256}
C.ch6.prototype={
$1(d){var w=$.aTU(),v=w.a
w.sp(0,v+1)
return v},
$S:2104}
C.ch7.prototype={
$1(d){},
$S:31}
C.ch4.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:256}
C.ch3.prototype={
$1(d){return d.f.cb(this.a)},
$S:256}
C.fzr.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:63}
C.h5l.prototype={
$1(d){return C.a8P(this.a)},
$S:112}
C.h5m.prototype={
$1(d){var w=$.aTU()
w.sp(0,w.a+1)},
$S:30}
C.h5n.prototype={
$1(d){},
$S:31}
C.h5o.prototype={
$1(d){return new B.kj($.aTU(),new C.h5k(this.a,this.b),null,null,x.am)},
$S:2105}
C.h5k.prototype={
$3(d,e,f){var w=this.b
return new B.lb(C.arX(this.a,!1),new C.h5j(w),w,null,x.gv)},
$S:2106}
C.h5j.prototype={
$2(d,e){var w=e.b
return new C.aeX(w==null?this.a:w,null)},
$S:z+17}
C.e7Q.prototype={
$1(d){return d.c},
$S:256}
C.e7R.prototype={
$1(d){return d.gbkT()},
$S:2107}
C.e7S.prototype={
$2(d,e){return d+e},
$S:87}
C.e7T.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.e7V.prototype={
$2(d,e){return A.P},
$S:38}
C.e7U.prototype={
$2(d,e){return new C.aeW(J.t(this.a.c,e),null)},
$S:z+18}
C.e7P.prototype={
$1(d){return d==null?"\u2026":C.bDN(d)},
$S:2108}
C.h5r.prototype={
$3(d,e,f){var w=this
return B.qs(new C.aCU(w.a,w.b,w.c,w.d,new C.h5p(d,w.e),new C.h5q(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.h5p.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hIq(this.b)},
$S:0}
C.h5q.prototype={
$0(){B.a6(this.a,!1).N(null)
C.hIq(this.b)},
$S:0}
C.doz.prototype={
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
A.d.u(w,new B.N(t,new C.doy(),B.T(t).k("N<1,w>")))}t=h.d
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
m=B.a([new B.ac(6,A.H,(h.a.c?A.dN:A.dQ).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dt()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.k5(-0.35)
r=B.a([A.akb,A.uB],r)
l.push(new B.a5(i,100,new B.an(A.z,i,A.ad,A.f,B.a([B.fA(A.z,B.o(i,D.bfP,A.f,i,i,new B.n(i,i,i,i,B.a([new B.ac(4,A.H,A.d3.j(0.6),A.J,24),new B.ac(0,A.H,A.w.j(0.3),A.dm,12)],n),new B.bT(A.z,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c5V)
l.push(A.aB)
l.push(B.c(h.a.d,i,i,i,i,i,i,A.WN,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.K(A.ep,A.r,4)
A.d.u(l,B.a([A.aB,D.fSt,A.P,B.o(i,B.c(r,i,i,i,i,i,i,D.fIf,A.K,i,i),A.f,i,i,new B.n(A.c,i,k,n,i,i,A.m),i,i,i,i,A.OJ,i,i,1/0)],g))}A.d.u(l,B.a([A.af,B.c(h.a.e,i,i,i,i,i,i,D.fLg,A.K,i,i)],g))
l.push(A.e4)
r=B.E(B.dU(D.fPV,h.a.r,B.di(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cn,i,i,D.b72,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.as,B.E(B.bJ(E.aYF,i,n,B.bn(A.c,i,i,i,h.c?A.ep:A.er,i,A.cn,i,i,i,i,i)),1)],g),A.l,i,A.e,A.h,0,i,i))
w.push(B.e1(A.z,B.o(i,B.x(l,A.l,i,A.e,A.N,0,A.p),A.f,i,i,new B.n(i,i,o,p,m,new B.a8(A.ay,A.aC,A.x,q,i,i),A.m),i,i,i,A.ae,A.aop,i,i,s),1+t*0.02,i,i))
return new B.an(A.z,i,A.ad,A.f,w,i)},
$S:120}
C.doy.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ao(w,B.d0(B.eK(A.z,d.d,B.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.ciR.prototype={
$2(d,e){var w=null,v=this.a,u=C.i12(B.Mb(v.c,v.d))
return B.c("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:2109}
C.ciQ.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:63}
C.c6f.prototype={
$0(){},
$S:0}
C.fym.prototype={
$1(d){return A.o.v(d)},
$S:82}
C.e0i.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e0j.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.e0k.prototype={
$0(){var w=this.a
return w.w=D.Ts[w.d.aw(5)]},
$S:0}
C.e0l.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.e0m.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.e0n.prototype={
$0(){var w=this.a
return w.l(new C.e0h(w))},
$S:0}
C.e0h.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0o.prototype={
$0(){var w=this.a
return w.l(new C.e0g(w))},
$S:0}
C.e0g.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.e0r.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e0s.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bj:B.a0(36,A.c.m()>>>16&255,A.c.m()>>>8&255,A.c.m()&255),r=B.m(10)
t=t.y?u:new C.e0q(t,d)
w=B.m(10)
v=A.i.ac(d,0)
return B.E(new B.D(A.jg,B.aF(!1,A.a3,!0,r,B.aM(!1,w,!0,new B.a5(u,38,B.as(B.c("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.aj),u),1)},
$S:2110}
C.e0q.prototype={
$0(){var w=this.a
return w.l(new C.e0p(w,this.b))},
$S:0}
C.e0p.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.ci)},
$S:0}
C.e80.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cL.gco().aK(this.c)},
$S:0}
C.e81.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.e7X.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.L,r=B.K(u?D.f0.j(0.5):A.L,A.r,1),q=B.W(e,u?D.f0:A.aF,w,w,w,20)
return B.E(B.ay(w,B.cU(w,B.A(B.a([q,A.bm,B.c(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aF,w,w,w,w,w,w,w,w,w,w,w,A.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.b9,A.h,0,w,w),w,w,A.b0,new B.n(s,w,r,t,w,w,A.m),A.a3,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7Z(v,d),w,w,w,w,w,w,!1,A.a4),1)},
$S:2111}
C.e7Z.prototype={
$0(){var w=this.a
return w.l(new C.e7Y(w,this.b))},
$S:0}
C.e7Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8_.prototype={
$0(){var w=this.a,v=w.d===A.lc?"Cash App tag":"Bitcoin address"
return w.JN(this.b,v)},
$S:0}
C.e7W.prototype={
$0(){var w=this.a
return w.JN(w.gauo(),"Code")},
$S:0}
C.chE.prototype={
$1(d){return C.hYe(B.a1(d,x.N,x.z))},
$S:z+20}
C.chF.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chB.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.chC.prototype={
$2(d,e){return d.c.aQ(0,e.c)},
$S:z+6}
C.chD.prototype={
$1(d){return d.ak()},
$S:z+23}
C.chG.prototype={
$1(d){var w=d.c
return!w.cZ(this.a.bQ(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c9n.prototype={
$1(d){return C.hYf(B.a1(d,x.N,x.z))},
$S:z+24}
C.c9o.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9l.prototype={
$1(d){return d.ak()},
$S:z+26}
C.c9m.prototype={
$2(d,e){return e.b.aQ(0,d.b)},
$S:z+8}
C.c9q.prototype={
$1(d){var w=d.b
return!w.cZ(this.a)&&!w.cb(this.b)},
$S:z+27}
C.chP.prototype={
$1(d){return d.ak()},
$S:z+28}
C.chO.prototype={
$1(d){return C.hvh(B.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.chN.prototype={
$1(d){return d.ak()},
$S:z+30}
C.chM.prototype={
$1(d){return C.i0G(B.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.chR.prototype={
$1(d){return C.i0F(B.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.chS.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.chT.prototype={
$1(d){return d.ak()},
$S:z+34}
C.ec6.prototype={
$1(d){return d.bgg(B.bs(d.e,!0,x.u))},
$S:z+36}
C.ec7.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ec0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ec1.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ebK.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.I(w,this.b)},
$S:0}
C.ebL.prototype={
$1(d){return new C.QJ(this.a,null)},
$S:z+9}
C.ebM.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.d()
w=A.d.bk(t,new C.ebJ(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cH(u.d,w)
u.JX()}},
$S:0}
C.ebJ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ebY.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.J(["role","admin","text",this.b],w,w))},
$S:0}
C.ebZ.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.J(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.d()
t.d=C.irI(v,w[0],w[3])
t.JX()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.J(["role","ai","text",t],w,w))}},
$S:0}
C.ec_.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd7(v).Q
v.toString
w.iv(v)}},
$S:7}
C.ebS.prototype={
$1(d){return new C.QJ(this.a,null)},
$S:z+9}
C.ebT.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebR.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.ebX.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.d()
v=A.d.cH(w,s)
A.d.ca(t.d,u.a,v)
t.JX()},
$S:0}
C.ebW.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.d()
w=this.b
return new C.a1w(u[w],new C.ebV(v,w),null)},
$S:z+59}
C.ebV.prototype={
$1(d){var w=this.a
return w.l(new C.ebU(w,this.b,d))},
$S:z+40}
C.ebU.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ebO.prototype={
$0(){var w=this.a
return w.l(new C.ebN(w))},
$S:0}
C.ebN.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ebP.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cA:A.aL
return new B.D(A.eI,B.c(t+": "+B.v(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a8:A.cF,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:125}
C.ebQ.prototype={
$1(d){return this.a.a2V()},
$S:2}
C.ec5.prototype={
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
q=B.o(n,B.W(A.arc,l?A.bP:A.an,n,n,n,20),A.f,n,n,new B.n(q,n,n,p,n,n,A.m),n,n,n,n,A.bT,n,n,n)
p=B.b1(r).j(0.12)
o=B.m(8)
o=B.o(n,B.W(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.n(p,n,n,o,n,n,A.m),n,n,n,n,A.hF,n,n,n)
r=B.A(B.a([o,A.as,B.E(B.c(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.G,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.l,n,A.e,A.h,0,n,n)
p=w.e.length
return new B.D(A.da,B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,new G.awM(q,e,!0,n),n,n,n,n,new C.ec2(m,e),!1,n,n,new B.ba(t,new B.aw(s,1,A.r,-1)),n,n,B.c("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.CM(n,n,n,n,n,new C.ec3(),A.J,new C.ec4(m,e),A.cr,n,n,n,n,x.N),n),A.f,v,0,n,n,n,n,n,A.aj),new B.bl(w.a,x.W))},
$S:125}
C.ec4.prototype={
$1(d){var w=this
if(d==="edit")w.a.ac2(w.b)
if(d==="questions")w.a.a_7(w.b)
if(d==="delete")w.a.bQ9(w.b)},
$S:2}
C.ec3.prototype={
$1(d){return D.d63},
$S:149}
C.ec2.prototype={
$0(){return this.a.a_7(this.b)},
$S:0}
C.cXs.prototype={
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
return B.aM(!1,s,!0,B.o(s,B.W(d,B.b1(t),s,s,s,s),A.f,s,s,new B.n(q,s,u,v,s,s,A.m),s,s,s,s,A.cr,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cXr(r,d),s,s,s,s,s,s,s)},
$S:2112}
C.cXr.prototype={
$0(){var w=this.a
return w.l(new C.cXp(w,this.b))},
$S:0}
C.cXp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXt.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.d()
return B.ay(w,B.hg(u,w,t===d?D.c3b:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cXq(v,d),w,w,w,w,w,w,!1,A.a4)},
$S:389}
C.cXq.prototype={
$0(){var w=this.a
return w.l(new C.cXo(w,this.b))},
$S:0}
C.cXo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cXu.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.cXv.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.d()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.d()
v=v.f
v===$&&B.d()
t=u.cRm(v,w,t)
B.a6(this.b,!1).N(t)
return null},
$S:0}
C.f4q.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return w.push(this.b)},
$S:0}
C.f4r.prototype={
$1(d){return new C.a1v(this.a,null)},
$S:z+41}
C.f4x.prototype={
$2(d,e){return A.P},
$S:38}
C.f4w.prototype={
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
r=B.bw(q,B.aSu(n,A.bZ,36,A.qY,l?A.bP:A.an,r,48),A.aq)}else r=B.W(D.a3u,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.c(q,n,2,A.a2,n,n,n,B.l(n,n,l?A.aS:A.a_,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aF(!1,A.a3,!0,u,B.dJ(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f4u(m,w,e),!1,n,n,new B.ba(t,new B.aw(s,1,A.r,-1)),n,n,B.c(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.c1s,n,n,n,new C.f4v(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.aj)},
$S:86}
C.f4v.prototype={
$0(){var w=this.a
w.l(new C.f4s(w,this.b))
w.azX()},
$S:0}
C.f4s.prototype={
$0(){var w=this.a.d
w===$&&B.d()
return A.d.cH(w,this.b)},
$S:0}
C.f4u.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b4i(u.b),$async$$0)
case 2:s=e
if(s!=null){t.l(new C.f4t(t,u.c,s))
t.azX()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.f4t.prototype={
$0(){var w,v=this.a.d
v===$&&B.d()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f4m.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f4k.prototype={
$1(d){var w=this.a.e
w===$&&B.d()
return new C.WY(w,"Answer Document",null)},
$S:z+42}
C.f4l.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f4o.prototype={
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
C.f4p.prototype={
$1(d){var w=this.a
return w.l(new C.f4n(w,d))},
$S:9}
C.f4n.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.chJ.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fU8.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ecH.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ecn.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lU("image","",this.b,null))},
$S:0}
C.ecs.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,new C.lU("video","","data:video/mp4;base64,"+A.cL.gco().aK(this.b),null))},
$S:0}
C.ecq.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.a,w,w,w,w,w,2,D.c7O,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w),B.aN(w,A.Z,!1,w,!0,A.t,w,B.aO(),this.b,w,w,w,w,w,2,D.c7N,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)],v),A.l,w,A.e,A.N,0,A.p)
return B.ek(B.a([B.bO(!1,A.dp,w,w,!0,w,w,w,new C.eco(d),w,w),B.bJ(D.h1R,w,new C.ecp(d),w)],v),w,w,w,u,w,w,w,w,D.fP7,w)},
$S:18}
C.eco.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ecp.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ecr.prototype={
$0(){var w,v=this.a.e
v===$&&B.d()
w=A.a.i(this.b.a.a)
return A.d.I(v,new C.lU("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.ecj.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eck.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecl.prototype={
$1(d){return A.a.i(A.a.el(d,B.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.ecm.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecx.prototype={
$0(){var w=this.a.bJi()
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.ecy.prototype={
$0(){return this.a.azY("**","**")},
$S:0}
C.ecz.prototype={
$0(){return this.a.azY("*","*")},
$S:0}
C.ecA.prototype={
$0(){return this.a.azY("__","__")},
$S:0}
C.ecB.prototype={
$0(){return this.a.b2j("## Section title")},
$S:0}
C.ecC.prototype={
$0(){return this.a.b2j("\u2022 First point\n\u2022 Second point")},
$S:0}
C.ecD.prototype={
$0(){},
$S:0}
C.ecE.prototype={
$0(){var w=this.a
w.l(new C.ecw(w))},
$S:0}
C.ecw.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.dZM)},
$S:0}
C.ecF.prototype={
$0(){var w=this.a
w.l(new C.ecv(w))},
$S:0}
C.ecv.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.I(w,D.dZN)},
$S:0}
C.ecG.prototype={
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
t=B.c(t,v,v,v,v,v,v,B.l(v,v,w?A.iE:A.aw,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?A.cu:A.hP
return B.Eh(v,w,A.atw,t,v,new C.ecu(this.a,d),v)},
$S:z+45}
C.ecu.prototype={
$0(){var w=this.a
return w.l(new C.ect(w,this.b))},
$S:0}
C.ect.prototype={
$0(){var w=this.a.e
w===$&&B.d()
return A.d.cH(w,this.b.a)},
$S:0}
C.ecg.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b2q},
$S:0}
C.ech.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hH8},
$S:0}
C.ec8.prototype={
$0(){var w=this.a
w.d=D.b2p
w.f=w.e=null},
$S:0}
C.ec9.prototype={
$0(){var w=this.a
w.d=D.b2q
w.f=null},
$S:0}
C.eci.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+2}
C.ecb.prototype={
$2(d,e){var w=this.a,v=w.gba2()[e]
return new C.adr(v,this.b,new C.eca(w,v),null)},
$S:z+46}
C.eca.prototype={
$0(){return this.a.cen(this.b.a)},
$S:0}
C.ecd.prototype={
$2(d,e){return A.o.aQ(d.f,e.f)},
$S:z+47}
C.ecf.prototype={
$2(d,e){return A.T},
$S:38}
C.ece.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.uy:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.K(r?A.aL:A.bn,A.r,1),l=B.a([new B.ac(0,A.H,A.w.j(r?0.28:0.06),A.dO,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bw(w,B.aSu(v,A.bZ,52,D.a3u,r?A.bP:A.an,j,52),A.aq))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.m(12)
k.push(B.o(t,B.W(D.a3u,B.b1(j),t,t,t,24),A.f,t,t,new B.n(w,t,t,v,t,t,A.m),t,52,t,t,t,t,t,52))}k.push(A.ba)
k.push(B.E(B.c(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aS:A.a_,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.W(A.eK,r?A.bP:A.an,t,t,t,22))
return B.aF(!1,A.a3,!0,p,B.aM(!1,o,!0,B.o(t,B.A(k,A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.n(t,t,m,n,l,t,A.m),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.ecc(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.aj)},
$S:86}
C.ecc.prototype={
$0(){return this.a.clo(this.b)},
$S:0}
C.chL.prototype={
$1(d){return new C.adi(d,this.a,null)},
$S:z+48}
C.cQK.prototype={
$0(){var w=this.a.c,v=w.c,u=B.om(v==null?w.b:v)
if(u!=null)B.iQ(u,A.fp,null)},
$S:0}
C.cQL.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cQM.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.c("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.nK,B.A(B.a([u,B.E(B.c(t,w,w,w,w,w,w,B.l(w,w,v?A.cA:A.aL,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.D,w,A.e,A.h,0,w,w),w)},
$S:153}
C.dsT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dsV.prototype={
$0(){return this.a.l(new C.dsU(this.b))},
$S:0}
C.dsU.prototype={
$0(){var w=this.a
return w.a.f?w.hj(0):w.qw(0)},
$S:0}
C.fy3.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.ecV.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.EA)w.z=v
else w.Q=v},
$S:0}
C.ecM.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd7(v).Q
v.toString
w.mx(v,A.cl,A.eX)},
$S:7}
C.ecO.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:99}
C.ecP.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","user","text",this.b],v,v))
w.d.bP(0,A.ci)
w.r=!0},
$S:0}
C.ecQ.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.J(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.ecR.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.v(w.h(d,"text"))},
$S:164}
C.ecS.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text",this.b],w,w))},
$S:0}
C.ecT.prototype={
$0(){var w=x.N
return this.a.f.push(B.J(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.ecU.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ecN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n3(l,A.bD.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bS,B.A(B.a([new B.a5(22,22,k,l),A.as,B.c("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aF:A.dZ,l,l,l,l,l,l,l,l,12,A.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.l,l,A.e,A.h,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a9:A.a5
k=k.c
k.toString
k=B.aD(k,A.bY,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a8(A.a5,A.a9,A.x,B.a([A.aD,A.bD.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a8(A.a5,A.a9,A.x,v?B.a([A.bs,A.a_],q):B.a([A.c,A.aS],q),l,l)}p=B.a([new B.ac(0,A.H,(u?A.bD:A.aD).j(0.22),A.ia,14)],x.V)
o=B.K(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.bn:A.bq
n=u?13.5:15
m=u?A.bo:A.cK
return new B.bK(t,l,l,B.o(l,B.c(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a8:A.cF,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aY(0,k.a.a*0.94,0,1/0),new B.n(l,l,o,new B.be(A.iv,A.iv,new B.aP(s,s),new B.aP(r,r)),p,q,A.m),l,l,l,A.kG,A.jy,l,l,l),l)},
$S:42}
C.ed1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.d()
w=m.x
w===$&&B.d()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.ain,A.a_,A.os],t):B.a([A.qu,A.qr,A.qs],t)
w=B.a([new B.ac(-4,A.H,A.aD.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.K(A.c.j(u?0.08:0.5),A.r,1)
q=B.dt()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.d()
q.fE(m*0.08)
q=B.fA(A.z,B.o(o,D.bYU,A.f,o,o,new B.n(o,o,B.K(A.aQ.j(0.6),A.r,2),o,o,D.eHc,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.oj(A.k0,D.h6E,new C.ecZ())
p=x.p
m=B.a([B.A(B.a([q,A.ba,B.E(B.x(B.a([m,B.c("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.b6,o,o,o,o,o,o,o,o,10,o,o,A.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.D,o,A.e,A.h,0,A.p),1)],p),A.l,o,A.e,A.h,0,o,o),A.af,B.A(B.a([n.ay6(D.EA,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ab,n.ay6(D.aMC,"English","\ud83c\uddec\ud83c\udde7",u),A.ab,n.ay6(D.EB,"Mix","\ud83d\udd25",u)],p),A.l,o,A.e,A.h,0,o,o)],p)
if(n.x!==D.EB){t=B.a([A.P,n.cEU(u)],p)
if(n.w){q=n.x===D.EA?D.a7G:D.a6L
p=B.T(q).k("N<1,w>")
q=B.B(new B.N(q,new C.ed_(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jx,B.c_(A.bI,q,A.br,o,6,6),o))}A.d.u(m,t)}else{t=B.a([A.bD.j(0.22),A.aD.j(0.12)],t)
q=B.m(12)
p=B.K(A.bD.j(0.45),A.r,1)
m.push(new B.D(A.jx,B.o(o,B.c('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.iC:A.k2,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.n(o,o,p,q,o,new B.a8(A.a5,A.a9,A.x,t,o,o),A.m),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.B(new B.N(D.dqw,new C.ed0(n,u),t),t.k("ak.E"))
m.push(B.A(n,A.l,o,A.e,A.h,0,o,o))
return B.o(o,B.x(m,A.al,o,A.e,A.h,0,A.p),A.f,o,o,new B.n(o,o,r,v,w,new B.a8(A.ay,A.aC,A.x,s,o,o),A.m),o,o,o,H.ang,H.anr,o,o,o)},
$S:90}
C.ecZ.prototype={
$1(d){return D.ccD.aA(0,d)},
$S:77}
C.ed_.prototype={
$1(d){return this.a.cEV(d,this.b)},
$S:z+49}
C.ed0.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aME?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.ecY(p,d)
s=C.i2a(d)
if(o)r=A.c
else r=v?A.ac:A.bq
r=B.c(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.i2b(d)
if(o)v=A.ac
else v=v?A.bV:A.dZ
return B.E(new B.D(new B.P(0,0,n,0),B.aF(!1,A.a3,!0,l,B.aM(!1,t,!0,new B.D(A.Hn,B.x(B.a([r,B.c(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.aj),q),1)},
$S:z+50}
C.ecY.prototype={
$0(){var w=this.a
return w.l(new C.ecX(w,this.b))},
$S:0}
C.ecX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ed3.prototype={
$0(){var w=this.a
return w.l(new C.ed2(w))},
$S:0}
C.ed2.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.ecL.prototype={
$0(){var w=this.a
return w.l(new C.ecK(w,this.b))},
$S:0}
C.ecK.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.EB
if(v===D.aMC&&w.Q==null)w.Q=A.d.gH(D.a6L).a},
$S:0}
C.ed4.prototype={
$0(){return this.a.cAk(this.b.a)},
$S:0}
C.ecW.prototype={
$0(){return this.a.JO(this.b)},
$S:0}
C.ecI.prototype={
$1(d){return this.a.b2k()},
$S:2}
C.ecJ.prototype={
$0(){return this.a.b2k()},
$S:0}
C.h6i.prototype={
$1(d){var w=this
return new C.a0g(w.a,w.b,w.c,new C.h6h(w.d),null)},
$S:z+51}
C.h6h.prototype={
$0(){return J.lJ(this.a.bm())},
$S:0}
C.dqd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bla()},
$S:30}
C.dqe.prototype={
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
$S:346}
C.dqj.prototype={
$0(){},
$S:0}
C.dqi.prototype={
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
C.dqf.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=0.55+r*0.45
r=B.o(t,t,A.f,t,t,new B.n(t,t,t,t,B.a([new B.ac(6,A.H,A.at.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.z,t,A.ad,A.t,B.a([r,new B.a5(96,96,B.n3(A.c.j(0.08),A.at,t,t,t,t,t,6,u/v,t),t),B.c(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.d8(A.at.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:120}
C.dqg.prototype={
$1(d){return D.ccH.aA(0,d)},
$S:77}
C.dqh.prototype={
$0(){var w=this.a
w.a.bla()
w.a.e.$0()},
$S:0}
C.cjK.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fY)if(d.x===A.dI){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cjX.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erm.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.es2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.QV()},
$S:7}
C.es3.prototype={
$1(d){var w=$.aU.p2$
if(w===A.ul||w===A.um)return
this.a.Fq()},
$S:12}
C.es4.prototype={
$1(d){this.a.cH5()},
$S:12}
C.erL.prototype={
$0(){this.a.Kj(this.b.d,!1)},
$S:0}
C.erM.prototype={
$0(){},
$S:0}
C.erN.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.erO.prototype={
$0(){},
$S:0}
C.erP.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erQ.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.erR.prototype={
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
C.erG.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bs(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bs(v[1],!0,x.N)
w.Q7()
w.aa8()},
$S:0}
C.ern.prototype={
$0(){this.b.Kj(this.c.d+this.a.a,!1)},
$S:0}
C.erH.prototype={
$1(d){var w=d.d
return(w===A.fY||w===A.f4)&&d.x===A.dI},
$S:15}
C.erI.prototype={
$1(d){return d.a},
$S:175}
C.erJ.prototype={
$1(d){return d.a===this.a},
$S:15}
C.erK.prototype={
$0(){},
$S:0}
C.err.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bs(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bs(v[0],!0,x.N)},
$S:0}
C.ers.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.erA.prototype={
$0(){},
$S:0}
C.erx.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.ery.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erz.prototype={
$0(){var w=this.a,v=B.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.erB.prototype={
$0(){return this.a.z=!0},
$S:0}
C.erC.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.w5(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.erD.prototype={
$0(){return this.a.z=!1},
$S:0}
C.erF.prototype={
$0(){var w=this.a
return w.l(new C.erE(w))},
$S:0}
C.erE.prototype={
$0(){return this.a.y=1},
$S:0}
C.ert.prototype={
$0(){return this.a.y=1},
$S:0}
C.eru.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.erV.prototype={
$1(d){return d.a.length===0},
$S:15}
C.erW.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.es_.prototype={
$0(){var w=this.a
return w.l(new C.erT(w))},
$S:0}
C.erT.prototype={
$0(){return this.a.y=1},
$S:0}
C.es0.prototype={
$0(){var w=this.a
return w.l(new C.erS(w))},
$S:0}
C.erS.prototype={
$0(){return this.a.y=2},
$S:0}
C.es1.prototype={
$0(){return B.j3(this.a,null)},
$S:0}
C.erX.prototype={
$2$cloudRequest(d,e){return this.a.b3C(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:2113}
C.erY.prototype={
$0(){return this.a.Fq()},
$S:1}
C.erZ.prototype={
$0(){var w=this.a
return w.l(new C.erU(w))},
$S:0}
C.erU.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.erq.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.erp(w))},
$S:0}
C.erp.prototype={
$0(){return this.a.y=0},
$S:0}
C.ero.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bIP(B.o(t,t,A.f,t,t,new B.n(t,t,B.K(A.c.j(0.55),A.r,1.2),t,B.a([new B.ac(1,A.H,A.aE.j(0.55),A.J,18)],x.V),D.caA,A.a6),t,t,t,t,t,t,t,t),A.ee,A.td,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c9o(u))
return new B.an(A.a0,t,A.ad,A.t,B.a([q,B.A(v,A.l,t,A.e,A.h,0,t,t)],w),t)},
$S:66}
C.erw.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eY()
w.l(new C.erv(w,v))},
$S:0}
C.erv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.duD.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fY||v===A.f4)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.duE.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:753}
C.duF.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dG(C.he1(v.c,u))
w=this.c?new C.duC(v):null
return v.bc7(this.b,A.oU,D.f0,w,"Today","$"+u,D.f0)},
$S:2115}
C.duC.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.duG.prototype={
$2(d,e){var w=this.a
return w.bc7(this.b,A.kg,A.ce,w.w,"Balance","$"+B.dG(B.Mb(w.c.a,new C.duB(w))),A.ct)},
$S:71}
C.duB.prototype={
$0(){return this.a.c.d},
$S:83}
C.duw.prototype={
$0(){this.a.a.cZk()
return null},
$S:0}
C.dux.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.d()
v=v.x
v===$&&B.d()
return B.b4(w,w,w,new C.bz5(v,w),A.az)},
$S:59}
C.duy.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.beu(v,!0,A.aE,D.ps,w)}else{v===$&&B.d()
v=v.x
v===$&&B.d()
v=new C.bet(v,D.ps,w)}return B.b4(w,w,w,v,A.az)},
$S:59}
C.duz.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:753}
C.duA.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cY0(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.i.D(v/u,0,1)}u=w.d
u===$&&B.d()
s=w.e
s===$&&B.d()
return B.c7(new B.he(B.a([u,s],x.U)),new C.duv(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:2116}
C.duv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.u(l,B.iB(7,new C.duu(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.d()
v=v.x
v===$&&B.d()
u=o.d
l.push(B.b4(n,n,n,new C.bes(o.c,v,k,u,D.ps,D.bz2,n),D.foH))
v=B.K(A.c.j(0.1),A.r,1.2)
if(k)t=A.vf
else t=o.e?A.x3:D.bU_
t=B.W(t,k?D.ps:A.b1,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.c(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.G,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dG(w.f&&w.d>0?w.d:o.f)}q=k?D.ps:A.c
w=B.c(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.K(u.j(0.5),A.r,1)
l.push(B.o(n,B.x(B.a([t,A.am,s,A.av,w,A.P,B.o(n,B.c(o.r,n,n,n,n,n,n,B.l(n,n,k?D.ps:A.py,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.n(p,n,u,q,n,n,A.m),n,n,n,n,A.lt,n,n,n)],m),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new B.n(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a5(276,276,new B.an(A.z,n,A.ad,A.f,l,n),n),n,n,n)},
$S:226}
C.duu.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.d()
r=r.x
r===$&&B.d()
w=A.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ao(s,new B.dp(!0,B.d0(B.o(s,s,A.f,s,s,new B.n(s,s,s,B.m(40),s,new B.bT(A.z,0.5,A.x,s,0,B.a([D.ps.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.m),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:234}
C.duX.prototype={
$0(){},
$S:0}
C.duY.prototype={
$0(){},
$S:0}
C.duZ.prototype={
$1(d){return d.x===A.dI},
$S:15}
C.duJ.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.duI.prototype={
$0(){var w,v
B.eY()
w=this.a
v=this.b
w.l(new C.duH(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f3(null,x.H)}},
$S:0}
C.duH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.duU.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.K(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jg,B.ay(v,B.cU(A.z,B.c("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ac,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b0,new B.n(q,v,p,r,v,v,A.m),A.hf,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.duW(u,d),v,v,v,v,v,v,!1,A.a4),v),1)},
$S:2118}
C.duW.prototype={
$0(){B.eY()
var w=this.a
w.l(new C.duV(w,this.b))},
$S:0}
C.duV.prototype={
$0(){var w=""+this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.duT.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.uV,B.A(B.a([v,A.b_,B.c(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:2119}
C.duS.prototype={
$1(d){return this.a.l(new C.duR())},
$S:2}
C.duR.prototype={
$0(){},
$S:0}
C.duM.prototype={
$1(d){return this.a.aZA(d)&&!B.hmm(d)},
$S:15}
C.duN.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.duO.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.duP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.l(new C.duL())
t.mt("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.duL.prototype={
$0(){},
$S:0}
C.duQ.prototype={
$0(){var w=this.a
return w.l(new C.duK(w))},
$S:0}
C.duK.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fPW.prototype={
$2(d,e){return e.y.aQ(0,d.y)},
$S:80}
C.fHD.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.h0j.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fHC.prototype={
$1(d){var w,v,u
if(!C.ioz(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bi(J.k(w==null?"":w))}if(u!=null&&A.o.ar(new B.V(Date.now(),0,!1).bA(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fvF.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.fZK.prototype={
$0(){return $.hjz=null},
$S:11}
C.fZL.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fXl.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:8}
C.fXm.prototype={
$0(){var w,v=this.a
$.hjn.W(0,v)
w=C.uA(this.b,v)
if(w!=null)B.S7(B.a([B.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.h1v.prototype={
$1(d){return new C.a13(this.a,this.b,null)},
$S:z+56}
C.em_.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.em2.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.em3.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.l(new C.em1(w))},
$S:2}
C.em1.prototype={
$0(){return this.a.f=""},
$S:0}
C.em4.prototype={
$1(d){return this.a.b2A()},
$S:2}
C.em5.prototype={
$0(){var w=this.a
return w.l(new C.em0(w,this.b))},
$S:0}
C.em0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fGA.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aX(d,1)},
$S:13}
C.fGz.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aX(d,1)},
$S:13}
C.h_1.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a1(d,x.N,x.z)
try{v=B.a1(v.a(d.ak()),x.N,x.z)
return v}catch(w){return B.S(x.N,x.z)}},
$S:14}
C.h_2.prototype={
$1(d){return J.cK(d)},
$S:4}
C.fTk.prototype={
$1(d){return d.a!=="send_email"},
$S:312}
C.fZs.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.m(10),t=B.K(A.aT,A.r,1)
return B.o(A.z,B.c(d,w,w,w,w,w,w,A.hm,w,w,w),A.f,w,w,new B.n(v,w,t,u,w,w,A.m),w,86,w,A.f7,w,w,w,72)},
$S:727}
C.clD.prototype={
$1(d){return J.k(d)},
$S:16}
C.clE.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clC(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(7,0,!1,x.S)},
$S:722}
C.clC.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:409}
C.clF.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b9(d,new C.clB(),x.S)
w=B.B(w,w.$ti.k("ak.E"))
return w}return B.c1(8,0,!1,x.S)},
$S:722}
C.clB.prototype={
$1(d){var w
if(B.iX(d))w=d
else{w=B.cb(J.k(d),null)
if(w==null)w=0}return w},
$S:409}
C.clH.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:718}
C.clI.prototype={
$1(d){return B.bs(d,!0,x.S)},
$S:718}
C.clA.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.clG.prototype={
$2(d,e){return d+e},
$S:68}
C.clz.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:68}
C.fJo.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fJi.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJj.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJk.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJl.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJm.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fJn.prototype={
$0(){return this.a.$1(D.rg)},
$S:0}
C.fsG.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ar(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.a_l:D.bkh
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.bn],w):B.a([A.bs,A.w],w)
v=n?A.aQ:A.dE
w=B.o(t,t,A.f,t,t,new B.n(t,t,B.K(v,A.r,n?3:1),t,B.a([new B.ac(0,A.H,A.w.j(0.35),A.dO,4)],x.V),new B.bT(A.z,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.ay(t,B.o(t,B.as(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fsF(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a4)},
$S:85}
C.fsF.prototype={
$0(){var w=this,v=w.a,u=v.d3h(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.rg:D.JR
w.f.$1(v)}},
$S:0}
C.fGW.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a5(u,u,B.iA(!0,v,v,A.y,A.aVM,new C.fGV(w.a,w.b,w.c,w.d,u),9,v,A.e0,A.ah,!1),v)},
$S:130}
C.fGV.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.aH:A.aA
return B.aF(!1,A.a3,!0,u,B.aM(!1,t,!0,B.as(B.c(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fGU(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.h1,0,v,v,v,v,v,A.aj)},
$S:86}
C.fGU.prototype={
$0(){var w=this,v=w.a.d3j(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.frY.prototype={
$1(d){return new B.D(A.jg,C.fXc(d,!1),null)},
$S:340}
C.frZ.prototype={
$1(d){return C.fXc(d,!1)},
$S:2123}
C.fs_.prototype={
$0(){var w=this,v=w.a
v.cND(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fs0.prototype={
$0(){var w=this
w.a.cNE(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fDP.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n1(v,A.bs,B.c(""+u,v,v,v,v,v,v,A.cd,v,v,v),A.dk,new C.fDO(w.a,w.b,u,w.c,w.d),v,v,new B.aw(A.c.j(0.2),1,A.r,-1),v)},
$S:2124}
C.fDO.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fFM.prototype={
$1(d){return D.duR[d]},
$S:82}
C.fFN.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fCE.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fCF.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.ft9.prototype={
$0(){var w=this,v=w.a.cTt(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.ft8.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=A.lQ
else w=u===1?A.dQ:A.tL
return new B.fG(1,B.o(v,v,A.f,v,v,new B.n(w,v,B.K(A.bw,A.r,1),v,v,v,A.a6),v,v,v,A.nP,v,v,v,v),v)},
$S:2125}
C.fCQ.prototype={
$1(d){var w=this
if(w.a.bfA(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fCR.prototype={
$0(){var w=this
if(w.a.bfA(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fst.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fOZ.prototype={
$1(d){var w=J.t(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fP_.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:55}
C.eU8.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aNh.prototype
w.bzl=w.Z
w.bzk=w.t
w=C.aNi.prototype
w.bzn=w.Z
w.bzm=w.t
w=C.aNj.prototype
w.bzp=w.Z
w.bzo=w.t
w=C.aOg.prototype
w.bAo=w.Z
w.bAn=w.t
w=C.aNP.prototype
w.bzW=w.t
w=C.aOq.prototype
w.bAy=w.t
w=C.aNk.prototype
w.bzq=w.t
w=C.aOy.prototype
w.bAH=w.t
w=C.aNp.prototype
w.bzv=w.t
w=C.aNF.prototype
w.bzM=w.t
w=C.aP9.prototype
w.bBi=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCS.prototype,"gbWd","bWe",19)
v(q,"gaVQ","aVR",1)
v(C.aCR.prototype,"gcDN","a3M",1)
v(q=C.aCT.prototype,"gc0K","c0L",1)
v(q,"gbL8","bL9",1)
v(q=C.azU.prototype,"gcwK","cwL",1)
v(q,"gckW","Ro",0)
v(q,"gcHY","cHZ",1)
v(q,"gczQ","nl",0)
w(q,"gcpm","cpn",25)
w(q,"gcG9","T7",33)
v(q=C.aEZ.prototype,"gbU9","YT",0)
v(q,"gca4","a_s",0)
v(q,"gca1","a_r",0)
v(q,"gca2","af_",0)
v(q,"gca3","Qb",0)
v(C.aCa.prototype,"gca5","ca6",1)
u(C,"iw8","i0n",58)
t(C,"hmu",0,null,["$1","$0"],["hIL",function(){return C.hIL(null)}],3,0)
t(C,"bHe",0,null,["$1","$0"],["hIK",function(){return C.hIK(null)}],3,0)
v(C.O8.prototype,"gFa","ci5",1)
v(C.aFK.prototype,"gcx1","BB",0)
v(q=C.aG_.prototype,"gclf","Rq",0)
v(q,"gcq7","a1Z",0)
v(q,"gceh","cei",1)
v(q=C.aGb.prototype,"gcem","ag4",0)
v(q,"gbEB","aa0",0)
v(q,"gcxi","a2V",0)
s(q,"gciA","ciB",35)
v(C.aId.prototype,"gbF2","aa2",1)
v(q=C.aIc.prototype,"gcel","ag3",0)
v(q,"gckc","ahc",0)
v(q=C.aGd.prototype,"gc4o","adL",0)
v(q,"gc4q","Zy",0)
v(q,"gc4p","adM",0)
v(q=C.aGc.prototype,"gbHo","bHp",1)
v(q,"gbHq","bHr",1)
v(C.aGe.prototype,"gbNm","bNn",1)
v(C.aDc.prototype,"gceo","cep",1)
v(q=C.aGB.prototype,"gb2t","ceG",1)
r(q,"gb3A",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["agQ","aAD","b3C","b3B"],52,0,0)
r(q,"gchO",0,4,null,["$4"],["chP"],53,0,0)
v(q,"gcjV","a19",0)
v(q,"gckN","ahj",0)
v(q,"gckI","ahh",0)
v(q,"gc7I","aew",0)
w(C.aE_.prototype,"gc6i","c6j",54)
w(q=C.aE1.prototype,"gcF2","cF3",55)
v(q,"gcDD","cDE",1)
v(q,"gcLO","cLP",1)
v(C.aGp.prototype,"gcf1","b2A",1)
v(C.aHd.prototype,"gb36","aAp",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.mC,[C.cCt,C.cCq,C.cCr,C.cCs,C.cCp,C.fg5,C.fg3,C.fg7,C.fg4,C.fzM,C.dmE,C.dmP,C.dmX,C.dmY,C.dn_,C.dmS,C.dmQ,C.dmR,C.dmT,C.dmU,C.dmK,C.dmL,C.dmJ,C.dmN,C.dmO,C.dmH,C.dmG,C.dn1,C.dn4,C.e0c,C.e0b,C.e0d,C.e0a,C.e09,C.dmy,C.dmB,C.dmC,C.dmA,C.dmz,C.doq,C.dor,C.dos,C.dnG,C.dnH,C.doa,C.dnW,C.dnX,C.dnY,C.dnZ,C.do_,C.dn8,C.dnF,C.dob,C.dok,C.do8,C.do7,C.dnD,C.dnE,C.dog,C.doh,C.dna,C.dnb,C.dnP,C.dnQ,C.dnR,C.dnO,C.do0,C.do1,C.do2,C.do3,C.do4,C.do5,C.doe,C.dnS,C.dnT,C.dnU,C.dnV,C.doi,C.doj,C.dnc,C.dnd,C.dne,C.dnf,C.doc,C.dod,C.dnN,C.do6,C.dnL,C.dol,C.dom,C.don,C.dnI,C.dnr,C.dnq,C.dnp,C.dnv,C.dno,C.dnm,C.dnh,C.dnk,C.dng,C.dnA,C.dnB,C.dni,C.drZ,C.cNQ,C.cNG,C.cNH,C.cO_,C.cNX,C.cNY,C.cNZ,C.cNS,C.cNR,C.cNI,C.cNT,C.cOi,C.cOe,C.cOd,C.cNO,C.cNP,C.cNL,C.cNW,C.cO3,C.cO4,C.cO5,C.cO6,C.cO7,C.cO8,C.cO9,C.cOu,C.cOn,C.cOk,C.cOp,C.cOm,C.cOj,C.cNJ,C.cOg,C.dIw,C.dIx,C.dIn,C.dIl,C.dIv,C.dIk,C.dIj,C.dIm,C.dIr,C.dIs,C.dIp,C.dIq,C.dIy,C.dIz,C.dIA,C.dIB,C.f9w,C.f9x,C.dhq,C.fPQ,C.dOZ,C.dOR,C.dOT,C.dOX,C.dOS,C.dOU,C.dOV,C.cdZ,C.fXa,C.fX9,C.dI8,C.dI7,C.dI9,C.dI6,C.e7L,C.e7M,C.e7T,C.h5p,C.h5q,C.c6f,C.e0i,C.e0j,C.e0k,C.e0l,C.e0m,C.e0n,C.e0h,C.e0o,C.e0g,C.e0r,C.e0q,C.e0p,C.e80,C.e81,C.e7Z,C.e7Y,C.e8_,C.e7W,C.ec0,C.ec1,C.ebK,C.ebM,C.ebY,C.ebZ,C.ebT,C.ebR,C.ebX,C.ebU,C.ebO,C.ebN,C.ec2,C.cXr,C.cXp,C.cXq,C.cXo,C.cXu,C.cXv,C.f4q,C.f4v,C.f4s,C.f4u,C.f4t,C.f4m,C.f4l,C.f4o,C.f4n,C.ecn,C.ecs,C.eco,C.ecp,C.ecr,C.ecx,C.ecy,C.ecz,C.ecA,C.ecB,C.ecC,C.ecD,C.ecE,C.ecw,C.ecF,C.ecv,C.ecu,C.ect,C.ecg,C.ech,C.ec8,C.ec9,C.eca,C.ecc,C.cQK,C.dsT,C.dsV,C.dsU,C.ecV,C.ecP,C.ecQ,C.ecS,C.ecT,C.ecU,C.ecY,C.ecX,C.ed3,C.ed2,C.ecL,C.ecK,C.ed4,C.ecW,C.ecJ,C.h6h,C.dqj,C.dqh,C.erm,C.erL,C.erM,C.erN,C.erO,C.erQ,C.erR,C.erG,C.ern,C.erK,C.err,C.ers,C.erA,C.erx,C.ery,C.erz,C.erB,C.erC,C.erD,C.erF,C.erE,C.ert,C.eru,C.es_,C.erT,C.es0,C.erS,C.es1,C.erY,C.erZ,C.erU,C.erq,C.erp,C.erw,C.erv,C.duC,C.duB,C.duw,C.duX,C.duY,C.duJ,C.duI,C.duH,C.duW,C.duV,C.duR,C.duO,C.duP,C.duL,C.duQ,C.duK,C.fZK,C.fXm,C.em_,C.em2,C.em1,C.em5,C.em0,C.fJi,C.fJj,C.fJk,C.fJl,C.fJm,C.fJn,C.fsF,C.fGU,C.fs_,C.fs0,C.fDO,C.fFN,C.fCF,C.ft9,C.fCR,C.fst,C.eU8])
u(B.kp,[C.cCu,C.fg6,C.fTE,C.fTw,C.fzJ,C.fzI,C.fzL,C.dn6,C.dn7,C.dmW,C.dmV,C.dmZ,C.dmI,C.dmM,C.dn0,C.e0f,C.dmD,C.dot,C.dou,C.dov,C.dow,C.dox,C.do9,C.dof,C.dn9,C.dop,C.doo,C.dns,C.dnt,C.dnu,C.dnw,C.dny,C.ds_,C.cOv,C.cNV,C.cNU,C.cOc,C.cOf,C.cOb,C.cNM,C.cO2,C.cO0,C.cOh,C.cO1,C.cOq,C.cOo,C.cOt,C.c4X,C.c4W,C.c4Z,C.c4Y,C.dIu,C.dIt,C.dIo,C.dIC,C.dID,C.fEo,C.fFB,C.dhr,C.dhp,C.c5J,C.fPP,C.dP_,C.dOY,C.ce_,C.fGq,C.fX8,C.cgq,C.cgp,C.cgS,C.e7J,C.e7K,C.fSc,C.fS_,C.fRZ,C.fCI,C.ch5,C.ch6,C.ch7,C.ch4,C.ch3,C.fzr,C.h5l,C.h5m,C.h5n,C.h5o,C.h5k,C.e7Q,C.e7R,C.e7P,C.h5r,C.doy,C.ciQ,C.fym,C.e0s,C.e7X,C.chE,C.chB,C.chD,C.chG,C.c9n,C.c9l,C.c9q,C.chP,C.chO,C.chN,C.chM,C.chR,C.chT,C.ec6,C.ebL,C.ebJ,C.ec_,C.ebS,C.ebW,C.ebV,C.ebQ,C.ec4,C.ec3,C.cXs,C.cXt,C.f4r,C.f4k,C.f4p,C.chJ,C.fU8,C.ecH,C.ecq,C.ecj,C.eck,C.ecl,C.ecm,C.ecG,C.chL,C.cQL,C.cQM,C.fy3,C.ecM,C.ecO,C.ecR,C.ecZ,C.ed_,C.ed0,C.ecI,C.h6i,C.dqd,C.dqg,C.cjK,C.cjX,C.es2,C.es3,C.es4,C.erP,C.erH,C.erI,C.erJ,C.erV,C.erX,C.duD,C.duE,C.duz,C.duu,C.duZ,C.duU,C.duT,C.duS,C.duM,C.fHD,C.h0j,C.fHC,C.fvF,C.fZL,C.fXl,C.h1v,C.em3,C.em4,C.fGA,C.fGz,C.h_1,C.h_2,C.fTk,C.fZs,C.clD,C.clE,C.clC,C.clF,C.clB,C.clH,C.clI,C.clA,C.fJo,C.frY,C.frZ,C.fDP,C.fFM,C.fCE,C.ft8,C.fCQ,C.fOZ,C.fP_])
t(C.bv7,B.jL)
u(B.ag,[C.Gf,C.anc,C.aFJ,C.anb,C.and,C.ao_,C.ak2,C.apy,C.a0K,C.a0L,C.a_S,C.aq4,C.apx,C.OE,C.aCU,C.arf,C.arY,C.WX,C.QJ,C.a1w,C.a1v,C.WY,C.ase,C.aDN,C.ash,C.a0g,C.asR,C.aDZ,C.aE0,C.a13,C.auc])
u(B.ah,[C.aKM,C.aNi,C.aOg,C.aNh,C.aNj,C.bjX,C.azU,C.aEZ,C.bmo,C.bmp,C.aCa,C.bmw,C.aNP,C.aOq,C.aNk,C.aFK,C.aG_,C.aGb,C.be0,C.aId,C.aIc,C.aGd,C.aGc,C.bka,C.aOy,C.aNp,C.bB4,C.aNF,C.aE1,C.aGp,C.aP9])
u(B.mh,[C.fg8,C.fzK,C.dmF,C.dn5,C.dn3,C.dn2,C.e0e,C.dnM,C.dnK,C.dnJ,C.dnn,C.dnx,C.dnl,C.dnz,C.dnj,C.dnC,C.cOa,C.cNN,C.cOl,C.cOs,C.cOr,C.cNK,C.dho,C.dOW,C.fGr,C.fGs,C.e7N,C.fTz,C.h5j,C.e7S,C.e7V,C.e7U,C.doz,C.ciR,C.chF,C.chC,C.c9o,C.c9m,C.chS,C.ec7,C.ebP,C.ec5,C.f4x,C.f4w,C.eci,C.ecb,C.ecd,C.ecf,C.ece,C.ecN,C.ed1,C.dqe,C.dqi,C.dqf,C.erW,C.ero,C.duF,C.duG,C.dux,C.duy,C.duA,C.duv,C.duN,C.fPW,C.clG,C.clz,C.fsG,C.fGW,C.fGV])
t(C.ay4,C.Gf)
u(B.aK,[C.rg,C.afk,C.O8,C.JH,C.rT,C.rU,C.lU,C.iC,C.iq,C.bc2,C.dem,C.dsS,C.rZ,C.WZ,C.OV,C.qk,C.b2i,C.pD,C.ath])
t(C.aCS,C.aNi)
t(C.bmT,C.aOg)
t(C.aCR,C.aNh)
t(C.aCT,C.aNj)
u(B.qz,[C.XE,C.aDO,C.at4,C.JM,C.FD])
u(B.av,[C.a26,C.bvE,C.ag5,C.Rl,C.a8a,C.Ow,C.arS,C.aeX,C.aeW,C.b37,C.aDM,C.adr,C.b2F,C.adi,C.aE_])
t(C.bmm,C.aNP)
t(C.bn6,C.aOq)
t(C.biC,C.aNk)
t(C.aGe,C.aOy)
t(C.aDc,C.aNp)
t(C.aGB,C.bB4)
t(C.bkU,C.aNF)
u(B.qa,[C.beu,C.bet,C.bes,C.bdU,C.bz5,C.btT])
t(C.aHd,C.aP9)
w(C.aNh,C.O8)
w(C.aNi,C.O8)
w(C.aNj,C.O8)
w(C.aOg,C.O8)
w(C.aNP,B.eO)
w(C.aOq,B.ch)
w(C.aNk,B.ch)
w(C.aOy,B.ch)
w(C.aNp,B.eO)
w(C.aNF,B.eO)
v(C.bB4,B.eG)
w(C.aP9,B.ch)})()
B.nL(b.typeUniverse,JSON.parse('{"bv7":{"jL":[]},"Gf":{"ag":[],"w":[]},"aKM":{"ah":["Gf<1,2>"]},"ay4":{"Gf":["1","hx<1>"],"ag":[],"w":[],"Gf.T":"1","Gf.S":"hx<1>"},"anc":{"ag":[],"w":[]},"aFJ":{"ag":[],"w":[]},"anb":{"ag":[],"w":[]},"and":{"ag":[],"w":[]},"ao_":{"ag":[],"w":[]},"ak2":{"ag":[],"w":[]},"aCS":{"ah":["anc"]},"bmT":{"ah":["aFJ"]},"aCR":{"ah":["anb"]},"aCT":{"ah":["and"]},"bjX":{"ah":["ao_"]},"azU":{"ah":["ak2"]},"apy":{"ag":[],"w":[]},"a0K":{"ag":[],"w":[]},"a0L":{"ag":[],"w":[]},"ag5":{"av":[],"w":[]},"a_S":{"ag":[],"w":[]},"aEZ":{"ah":["apy"]},"a26":{"av":[],"w":[]},"bvE":{"av":[],"w":[]},"bmo":{"ah":["a0K"]},"bmp":{"ah":["a0L"]},"Rl":{"av":[],"w":[]},"aCa":{"ah":["a_S"]},"aq4":{"ag":[],"w":[]},"bmw":{"ah":["aq4"]},"a8a":{"av":[],"w":[]},"apx":{"ag":[],"w":[]},"bmm":{"ah":["apx"]},"Ow":{"av":[],"w":[]},"arS":{"av":[],"w":[]},"OE":{"ag":[],"w":[]},"bn6":{"ah":["OE"]},"aeX":{"av":[],"w":[]},"aeW":{"av":[],"w":[]},"aCU":{"ag":[],"w":[]},"biC":{"ah":["aCU"]},"b37":{"av":[],"w":[]},"arf":{"ag":[],"w":[]},"aFK":{"ah":["arf"]},"arY":{"ag":[],"w":[]},"aG_":{"ah":["arY"]},"WX":{"ag":[],"w":[]},"QJ":{"ag":[],"w":[]},"a1w":{"ag":[],"w":[]},"a1v":{"ag":[],"w":[]},"aGb":{"ah":["WX"]},"be0":{"ah":["QJ"]},"aId":{"ah":["a1w"]},"aIc":{"ah":["a1v"]},"WY":{"ag":[],"w":[]},"aGd":{"ah":["WY"]},"ase":{"ag":[],"w":[]},"adr":{"av":[],"w":[]},"adi":{"av":[],"w":[]},"aDN":{"ag":[],"w":[]},"aGc":{"ah":["ase"]},"aDM":{"av":[],"w":[]},"b2F":{"av":[],"w":[]},"bka":{"ah":["aDN"]},"ash":{"ag":[],"w":[]},"aGe":{"ah":["ash"]},"a0g":{"ag":[],"w":[]},"aDc":{"ah":["a0g"]},"asR":{"ag":[],"w":[]},"aDZ":{"ag":[],"w":[]},"aE0":{"ag":[],"w":[]},"aGB":{"ah":["asR"],"eG":[]},"aE_":{"av":[],"w":[]},"bkU":{"ah":["aDZ"]},"beu":{"aB":[]},"bet":{"aB":[]},"bes":{"aB":[]},"aE1":{"ah":["aE0"]},"bdU":{"aB":[]},"bz5":{"aB":[]},"a13":{"ag":[],"w":[]},"aGp":{"ah":["a13"]},"btT":{"aB":[]},"auc":{"ag":[],"w":[]},"aHd":{"ah":["auc"]}}'))
B.a2w(b.typeUniverse,JSON.parse('{"O8":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aE
return{dw:w("mf<u?>"),gS:w("oE"),o:w("d9"),g5:w("xN"),M:w("dj<q>"),k:w("V"),gv:w("lb<ai<jq>>"),gh:w("lb<q>"),gH:w("lb<H>"),r:w("aA<~>"),dk:w("a_"),fw:w("U<oE>"),E:w("U<d9>"),V:w("U<ac>"),O:w("U<u>"),A:w("U<a_>"),R:w("U<o4>"),B:w("U<ai<H>>"),m:w("U<ab<q,q>>"),_:w("U<ab<q,@>>"),b:w("U<rT>"),x:w("U<rU>"),gi:w("U<jq>"),a:w("U<lU>"),Y:w("U<iq>"),v:w("U<iC>"),dA:w("U<JH>"),F:w("U<rZ>"),Z:w("U<kJ>"),g:w("U<hO>"),gK:w("U<+at,details,id(V,q,q)>"),C:w("U<d8>"),s:w("U<q>"),G:w("U<jL>"),eO:w("U<es>"),d9:w("U<eZ>"),p:w("U<w>"),n:w("U<G>"),t:w("U<H>"),U:w("U<aB?>"),d4:w("U<q?>"),ck:w("ai<rT>"),e:w("ai<rU>"),ac:w("ai<jq>"),dZ:w("ai<lU>"),I:w("ai<iq>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("ab<q,q>"),P:w("ab<q,@>"),f:w("ab<@,@>"),cl:w("cN<q,D>"),aS:w("N<a_,tL>"),dc:w("N<JM,bz>"),dv:w("N<q,q>"),bL:w("N<G,bz>"),a3:w("N<H,bz>"),gN:w("N<H,qc>"),w:w("kH"),b1:w("rT"),Q:w("rU"),bP:w("lU"),i:w("iq"),u:w("iC"),gp:w("WZ"),J:w("OV"),D:w("qk"),an:w("kJ"),c:w("cw"),K:w("aK"),d:w("jF<q>"),di:w("+outcome,snapshot(XE,a7v?)"),ee:w("+after,before(G,G)"),et:w("+categories,error,message,replaceId(ai<iq>,q?,q?,q?)"),cz:w("Kf"),bJ:w("du<q>"),N:w("q"),e7:w("bt<G>"),W:w("bl<q>"),am:w("kj<H>"),cc:w("Y<q>"),aM:w("ee<d9>"),bG:w("ee<G>"),l:w("w"),gm:w("rg"),ec:w("afk"),q:w("p6"),y:w("Q"),gR:w("G"),z:w("@"),S:w("H"),eG:w("d9?"),cJ:w("V?"),gw:w("ai<ab<q,@>>?"),bM:w("ai<@>?"),h:w("ab<q,@>?"),X:w("aK?"),gE:w("+code,qrPayload(q,q)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,q,q)?"),T:w("q?"),cD:w("G?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6t=new B.be(A.bJ,A.jE,A.bJ,A.jE)
D.f0=new B.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b70=new B.aw(D.f0,1,A.r,-1)
D.b72=new B.aw(A.ac,2,A.r,-1)
D.b75=new B.aw(A.aV,2,A.r,-1)
D.b77=new B.aw(A.cA,0.8,A.r,-1)
D.b7m=new B.aw(A.aQ,2,A.r,-1)
D.b7t=new B.aw(A.fe,1.6,A.r,-1)
D.b8i=new B.aY(0,330,0,1/0)
D.b8p=new B.aY(0,176,0,1/0)
D.b8q=new B.aY(0,1/0,0,260)
D.b8I=new B.aY(90,1/0,0,1/0)
D.bbI=new B.ac(0,A.H,A.dE,A.J,4)
D.dak=w([D.bbI],x.V)
D.b8W=new B.n(A.c,null,null,null,D.dak,null,A.a6)
D.d3G=w([D.f0,A.b5],x.O)
D.cdH=new B.a8(A.a5,A.a9,A.x,D.d3G,null,null)
D.b99=new B.n(null,null,null,null,null,D.cdH,A.a6)
D.b9e=new B.n(A.be,null,null,null,null,null,A.a6)
D.bn8=new B.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.drq=w([N.ahY,D.bn8],x.O)
D.ccM=new B.a8(A.aX,A.b4,A.x,D.drq,null,null)
D.b9v=new B.n(null,null,null,A.mO,null,D.ccM,A.m)
D.bvA=new B.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dEi=w([D.bvA,A.akr],x.O)
D.cbW=new B.a8(A.aX,A.b4,A.x,D.dEi,null,null)
D.b9W=new B.n(null,null,null,A.un,null,D.cbW,A.m)
D.dn0=w([A.aD,A.bD],x.O)
D.ccv=new B.a8(A.a5,A.a9,A.x,D.dn0,null,null)
D.ba1=new B.n(null,null,null,null,null,D.ccv,A.a6)
D.fDv=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYo=new B.C("\ud83c\udf89",null,D.fDv,null,null,null,null,null,null,null,null,null)
D.bfP=new B.cl(A.z,null,null,D.fYo,null)
D.bhh=new B.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.ah_=new B.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bkh=new B.u(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bkl=new B.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.ps=new B.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.uy=new B.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.ain=new B.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.bmJ=new B.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.yF=new B.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.boy=new B.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.a_l=new B.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ak0=new B.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.bth=new B.u(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.btq=new B.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.akv=new B.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.bv1=new B.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bv8=new B.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.bwi=new B.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.a0a=new B.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bxt=new B.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.by8=new B.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.a0o=new B.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bz2=new B.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.am9=new B.a5o(2,"active")
D.bDm=new B.bf(42e5)
D.bDp=new B.bf(53e4)
D.bDs=new B.bf(58e4)
D.bDw=new B.bf(82e4)
D.bEj=new B.P(0,30,0,30)
D.bEr=new B.P(0,4,0,8)
D.bEv=new B.P(0,8,12,8)
D.bF7=new B.P(12,0,12,88)
D.bFe=new B.P(12,11,12,10)
D.bFF=new B.P(13,10,12,10)
D.bFQ=new B.P(14,10,14,2)
D.bG1=new B.P(14,14,10,14)
D.bGA=new B.P(16,12,16,96)
D.bGF=new B.P(16,14,16,8)
D.bGJ=new B.P(16,16,16,96)
D.bGK=new B.P(16,18,16,16)
D.bGO=new B.P(16,4,16,10)
D.bHO=new B.P(18,6,18,40)
D.bI0=new B.P(20,10,20,20)
D.bIf=new B.P(20,18,20,18)
D.bIG=new B.P(22,22,22,16)
D.bJk=new B.P(2,0,2,10)
D.bK6=new B.P(4,8,12,4)
D.bKk=new B.P(6,1,6,1)
D.bKm=new B.P(6,4,0,0)
D.bKs=new B.P(6,6,12,4)
D.bKN=new B.P(8,4,12,8)
D.h11=new B.C("Activity",null,A.fI,null,null,null,null,null,null,null,null,null)
D.bMO=new B.bz(1,A.bd,D.h11,null)
D.h9J=new B.C("Game Receipts",null,A.u9,null,null,null,null,null,null,null,null,null)
D.fTe=new B.C("Your last 59 games \xb7 kept for 7 days",null,A.Wv,null,null,null,null,null,null,null,null,null)
D.d03=w([D.h9J,D.fTe],x.p)
D.bA8=new B.fo(A.ah,A.e,A.h,A.D,null,A.p,null,0,D.d03,null)
D.bMR=new B.bz(1,A.bd,D.bA8,null)
D.bRL=new B.a_(58607,"MaterialIcons",!1)
D.a3u=new B.a_(62178,"MaterialIcons",!1)
D.bSC=new B.a_(62410,"MaterialIcons",!1)
D.bTO=new B.a_(63258,"MaterialIcons",!1)
D.bTT=new B.a_(63304,"MaterialIcons",!1)
D.bTU=new B.a_(63306,"MaterialIcons",!1)
D.bU_=new B.a_(63330,"MaterialIcons",!1)
D.asB=new B.a_(984777,"MaterialIcons",!1)
D.bWw=new B.ae(A.Dh,13,A.ac,null,null,null)
D.bWE=new B.ae(A.jz,13,A.qF,null,null,null)
D.asP=new B.ae(A.m0,null,A.c,null,null,null)
D.bYd=new B.ae(A.Dx,34,A.at,null,null,null)
D.bYK=new B.ae(A.Dk,19,A.c,null,null,null)
D.bYU=new B.ae(A.aqX,24,A.aQ,null,null,null)
D.bZm=new B.ae(A.Dd,28,A.bp,null,null,null)
D.bZS=new B.ae(A.ase,42,A.c,null,null,null)
D.c_1=new B.ae(A.a4t,30,A.c,null,null,null)
D.c_J=new B.ae(A.fS,null,A.c,null,null,null)
D.c04=new B.ae(A.jz,16,A.c,null,null,null)
D.c0L=new B.ae(A.tx,13,A.c,null,null,null)
D.c0U=new B.ae(A.m0,18,A.c,null,null,null)
D.c1s=new B.ae(A.x2,null,A.dQ,null,null,null)
D.c28=new B.ae(A.nV,28,A.c,null,null,null)
D.c2o=new B.ae(A.oW,22,null,null,null,null)
D.c2N=new B.ae(A.ts,null,null,null,null,null)
D.c2Z=new B.ae(A.h9,28,A.c,null,null,null)
D.c31=new B.ae(A.cB,null,A.aR,null,null,null)
D.c3b=new B.ae(A.a3a,14,A.c,null,null,null)
D.c3N=new B.ae(A.I9,36,A.aN,null,null,null)
D.c3U=new B.ae(A.oR,16,A.c,null,null,null)
D.bnE=new B.u(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c4K=new B.ae(A.ea,9,D.bnE,null,null,null)
D.bUT=new B.a_(983146,"MaterialIcons",!1)
D.c51=new B.ae(D.bUT,null,A.aQ,null,null,null)
D.c5B=new B.ae(A.v5,28,D.f0,null,null,null)
D.c5G=new B.ae(A.tn,null,A.fe,null,null,null)
D.c5L=new B.ae(A.hG,20,D.f0,null,null,null)
D.bVg=new B.a_(983377,"MaterialIcons",!1)
D.c5V=new B.ae(D.bVg,64,A.c,null,null,null)
D.c6r=new B.ae(A.fT,24,A.c,null,null,null)
D.c7n=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7y=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7N=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c7O=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bla=new B.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.boX=new B.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.boz=new B.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.drK=w([D.bla,D.boX,D.boz],x.O)
D.c9E=new B.a8(A.ay,A.aC,A.x,D.drK,null,null)
D.dxn=w([A.bj,A.b5],x.O)
D.ca_=new B.a8(A.ay,A.aC,A.x,D.dxn,null,null)
D.bn0=new B.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.bu5=new B.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.daW=w([D.bn0,D.bu5],x.O)
D.ca7=new B.a8(A.ay,A.aC,A.x,D.daW,null,null)
D.dtr=w([A.bs,A.a_,A.ed],x.O)
D.cad=new B.a8(A.ay,A.aC,A.x,D.dtr,null,null)
D.cag=new B.a8(A.a5,A.a9,A.x,E.aAa,null,null)
D.da8=w([A.fe,A.ce],x.O)
D.auC=new B.a8(A.a5,A.a9,A.x,D.da8,null,null)
D.daD=w([A.fe,A.bD],x.O)
D.auD=new B.a8(A.a5,A.a9,A.x,D.daD,null,null)
D.aEn=w([D.ps,A.aE,A.c3],x.O)
D.caA=new B.a8(A.ay,A.aC,A.x,D.aEn,null,null)
D.bqW=new B.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d7Y=w([D.bqW,A.ahg,A.a_],x.O)
D.caF=new B.a8(A.ay,A.aC,A.x,D.d7Y,null,null)
D.b4q=new B.de(-0.8,-1)
D.b4s=new B.de(1.2,1)
D.d74=w([A.c,A.eQ,A.he,A.c,A.fv,A.aH,A.or],x.O)
D.dsL=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.caH=new B.a8(D.b4q,D.b4s,A.x,D.d74,D.dsL,null)
D.btW=new B.u(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.brd=new B.u(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.drJ=w([D.btW,D.brd],x.O)
D.cb9=new B.a8(A.a5,A.a9,A.x,D.drJ,null,null)
D.cbf=new B.a8(A.ay,A.aC,A.x,A.SZ,null,null)
D.dlW=w([A.a0e,A.yH],x.O)
D.cbh=new B.a8(A.a5,A.a9,A.x,D.dlW,null,null)
D.dqr=w([A.hq,A.h0],x.O)
D.auJ=new B.a8(A.a5,A.a9,A.x,D.dqr,null,null)
D.dwV=w([A.be,A.bQ],x.O)
D.auK=new B.a8(A.a5,A.a9,A.x,D.dwV,null,null)
D.cS7=w([A.dh,A.fr],x.O)
D.cbY=new B.a8(A.ay,A.aC,A.x,D.cS7,null,null)
D.d5Z=w([A.c,A.bb],x.O)
D.cc7=new B.a8(A.a5,A.a9,A.x,D.d5Z,null,null)
D.ajs=new B.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bk1=new B.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.dio=w([D.ajs,A.jO,A.rO,A.aE,D.bk1],x.O)
D.ceN=w([0,0.28,0.55,0.82,1],x.n)
D.cc9=new B.a8(A.ay,A.aC,A.x,D.dio,D.ceN,null)
D.ccg=new B.a8(A.a5,A.a9,A.x,A.TG,null,null)
D.cch=new B.a8(A.a5,A.a9,A.x,E.aCI,null,null)
D.ccm=new B.a8(A.a5,A.a9,A.x,D.aEn,null,null)
D.dcd=w([A.bD,A.fe],x.O)
D.ccB=new B.a8(A.a5,A.a9,A.x,D.dcd,null,null)
D.dBo=w([A.aD,A.bD,A.bb],x.O)
D.ccD=new B.a8(A.a5,A.a9,A.x,D.dBo,null,null)
D.dm6=w([A.at,A.bL,A.fP],x.O)
D.ccH=new B.a8(A.a5,A.a9,A.x,D.dm6,null,null)
D.dB7=w([A.bs,A.aL,A.bP,A.bn,A.aS,A.cA,A.an],x.O)
D.dgp=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.ccL=new B.a8(A.ay,A.aC,A.x,D.dB7,D.dgp,null)
D.ccV=new B.a8(A.ay,A.aC,A.x,A.a5V,null,null)
D.dmJ=w([K.wv,A.e6],x.O)
D.cd4=new B.a8(A.a5,A.a9,A.x,D.dmJ,null,null)
D.duZ=w([D.akv,D.ain,A.a_],x.O)
D.cdd=new B.a8(A.ay,A.aC,A.x,D.duZ,null,null)
D.bwO=new B.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d6z=w([A.ff,A.hq,D.bwO],x.O)
D.cdJ=new B.a8(A.ay,A.aC,A.x,D.d6z,null,null)
D.dcO=w([D.ps,A.aE],x.O)
D.cdL=new B.a8(A.ay,A.aC,A.x,D.dcO,null,null)
D.cec=w([F.zU,A.nV,A.jz,A.hH,A.jT,A.l7,A.kl,A.r7,A.nU,A.eY,A.lw,A.zK,A.I8],x.A)
D.chI=w([10,50,100,200],x.t)
D.crw=w([1,3,5,7],x.t)
D.cwx=w([25,50,100,250],x.t)
D.bUN=new B.a_(983104,"MaterialIcons",!1)
D.cFi=w([A.nV,A.ms,A.oW,A.lZ,A.hs,A.vf,D.bUN,A.a4o],x.A)
D.cKK=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cXg=w([0,0.22,0.5,0.78,1],x.n)
D.d0d=w([8,13,19],x.n)
D.a6e=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.h00=new B.C("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eFw=new B.jF("questions",!0,48,null,D.h00,null,x.d)
D.fQk=new B.C("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eFD=new B.jF("edit",!0,48,null,D.fQk,null,x.d)
D.h8e=new B.C("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new B.jF("delete",!0,48,null,D.h8e,null,x.d)
D.d63=w([D.eFw,D.eFD,D.eFv],B.aE("U<t2<q>>"))
D.daQ=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.db5=w([A.bU,A.fn],x.O)
D.a9h=new C.lU("text","",null,null)
D.dcp=w([D.a9h],x.a)
D.ddZ=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.f_P=new B.afH(A.kI,"Home")
D.eRm=new B.afH(A.oU,"Growth")
D.eWa=new B.afH(A.jz,"Wallet")
D.dgG=w([D.f_P,D.eRm,D.eWa],B.aE("U<+icon,label(a_,q)>"))
D.dh7=w([4,0,2,6,8,1,3,5,7],x.t)
D.dhf=w([A.c,A.cg,A.cA],x.O)
D.e2O=new C.rZ("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.e2R=new C.rZ("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.e2P=new C.rZ("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.e2J=new C.rZ("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.e2K=new C.rZ("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.e2S=new C.rZ("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a6L=w([D.e2O,D.e2R,D.e2P,D.e2J,D.e2K,D.e2S],x.F)
D.a6P=w([A.aA,A.bj,A.d9,A.at],x.O)
D.bnT=new B.u(1,1,0.8980392156862745,0.4,A.q)
D.dmQ=w([A.Zo,D.bnT,A.rO,A.iD,A.jO],x.O)
D.a6W=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.T8=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cFx=w([3,4,5],x.t)
D.cSL=w([6,7,8],x.t)
D.cej=w([0,3,6],x.t)
D.crB=w([1,4,7],x.t)
D.cz3=w([2,5,8],x.t)
D.ceo=w([0,4,8],x.t)
D.cz0=w([2,4,6],x.t)
D.dpp=w([I.ava,D.cFx,D.cSL,D.cej,D.crB,D.cz3,D.ceo,D.cz0],x.B)
D.aMD=new C.JM(0,"abab")
D.e2H=new C.JM(1,"aaaBbb")
D.aME=new C.JM(2,"aabb")
D.dqw=w([D.aMD,D.e2H,D.aME],B.aE("U<JM>"))
D.dqO=w([],x.a)
D.aDA=w([],x.v)
D.duR=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Ts=w([1,2,3,-1,-2],x.t)
D.dE3=w([A.iG,A.aD],x.O)
D.hGs=new C.rg("dice","Dice Roll","Roll for cash & prizes!",A.nR,D.dE3)
D.hGp=new C.rg("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.vc,A.aCc)
D.dxN=w([A.dr,A.bp],x.O)
D.hGn=new C.rg("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a4a,D.dxN)
D.dDu=w([A.dS,A.ny],x.O)
D.hGt=new C.rg("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a4o,D.dDu)
D.crg=w([A.jM,A.t1],x.O)
D.hGq=new C.rg("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",A.Q9,D.crg)
D.duQ=w([A.lP,D.a_l],x.O)
D.hGo=new C.rg("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ic,D.duQ)
D.hGr=new C.rg("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cB,A.nZ)
D.dwU=w([D.hGs,D.hGp,D.hGn,D.hGt,D.hGq,D.hGo,D.hGr],B.aE("U<rg>"))
D.dyr=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bt0=new B.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bsS=new B.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.alp=new B.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.dzh=w([D.bt0,D.bsS,D.alp],x.O)
D.bvt=new B.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.dzj=w([A.ahf,D.bvt,D.alp],x.O)
D.dzY=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aEL=w([D.ps,A.c,D.f0,A.c4,A.b1,A.aE],x.O)
D.e2M=new C.rZ("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.e2L=new C.rZ("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.e2I=new C.rZ("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.e2Q=new C.rZ("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.e2T=new C.rZ("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.e2N=new C.rZ("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a7G=w([D.e2M,D.e2L,D.e2I,D.e2Q,D.e2T,D.e2N],x.F)
D.dDI=w([A.ce,A.t1],x.O)
D.erW={checkers_deluxe:0,tic_tac_go:1}
D.aKB=new B.bq(D.erW,["Checkers Deluxe","Tic Tac Go"],B.aE("bq<q,q>"))
D.eqZ={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aKM=new B.bq(D.eqZ,[1,2,3,4,5,6,7],B.aE("bq<q,H>"))
D.dWd=new C.a8a(null)
D.dZM=new C.lU("signature","NGMY Support Team",null,null)
D.dZN=new C.lU("divider","",null,null)
D.Us=new C.WZ(!1,!1,!1,!1)
D.Uu=new C.OV(!1,!1,!1,!1)
D.e_V=new C.OV(!0,!0,!1,!1)
D.EA=new C.at4(0,"swahili")
D.aMC=new C.at4(1,"english")
D.EB=new C.at4(2,"mix")
D.doN=w([A.iT,A.ii,A.d6],x.O)
D.bTy=new B.a_(63118,"MaterialIcons",!1)
D.e3U=new C.pD(D.doN,A.h2,A.at,"BACKGAMMON","\ud83c\udfb2",D.bTy)
D.bVE=new B.a_(983637,"MaterialIcons",!1)
D.e3V=new C.pD(A.aF0,A.bj,A.er,"EURO WHEEL","\ud83c\udfa1",D.bVE)
D.dyM=w([A.a_,A.aL,A.bz],x.O)
D.e3W=new C.pD(D.dyM,A.aS,A.an,"ROYALE","\u265f\ufe0f",A.Q9)
D.daf=w([A.dh,A.bp,A.dX],x.O)
D.e3X=new C.pD(D.daf,A.aA,A.d9,"CONNECT 4","\ud83d\udd34",A.a4C)
D.dt5=w([A.dz,A.fr,A.t1],x.O)
D.e3Y=new C.pD(D.dt5,A.wx,A.ce,"PUNTO BANCO","\ud83d\udc8e",A.ms)
D.cS9=w([A.oq,A.iB,A.mf],x.O)
D.e3Z=new C.pD(D.cS9,A.jK,A.kD,"DOMINOES","\ud83c\udc53",A.asf)
D.dzw=w([A.yP,A.uC,A.hO],x.O)
D.e4_=new C.pD(D.dzw,A.Cx,A.hz,"WAR","\u2694\ufe0f",A.a3P)
D.e40=new C.pD(A.aEU,A.aQ,A.an,"PREMIUM","\ud83c\udfae",A.nR)
D.dce=w([A.kB,A.aD,A.dS],x.O)
D.e41=new C.pD(D.dce,A.ex,A.fe,"JACKPOT","\ud83c\udfb0",A.nR)
D.ds2=w([A.k2,A.lL,A.bD],x.O)
D.e42=new C.pD(D.ds2,A.qr,A.c4,"LIVE BINGO","\ud83c\udfb1",A.zD)
D.d3E=w([A.ii,A.e6,A.at],x.O)
D.bSZ=new B.a_(62865,"MaterialIcons",!1)
D.e43=new C.pD(D.d3E,A.uI,A.aQ,"BIG SPIN","\ud83c\udfa1",D.bSZ)
D.e44=new C.pD(A.a7D,A.bn,A.bj,"HOLD'EM","\u2660\ufe0f",A.jz)
D.dzX=w([A.ff,A.h0,A.b5],x.O)
D.bS6=new B.a_(61234,"MaterialIcons",!1)
D.e45=new C.pD(D.dzX,A.mg,A.aV,"CRAPS","\ud83c\udfb2",D.bS6)
D.d9q=w([A.fn,A.jr,A.bU],x.O)
D.e46=new C.pD(D.d9q,A.bL,A.bb,"PLINKO","\ud83d\udc8e",A.Qi)
D.bVo=new B.a_(983492,"MaterialIcons",!1)
D.e47=new C.pD(A.a7D,A.ew,A.bj,"SNOOKER","\ud83c\udfb1",D.bVo)
D.dxh=w([A.ff,A.h0,A.aV],x.O)
D.e48=new C.pD(D.dxh,A.uD,A.bv,"PROFIT LAB","\ud83d\udcb0",A.hG)
D.dxF=w([A.ed,A.ep,A.bj],x.O)
D.bTZ=new B.a_(63324,"MaterialIcons",!1)
D.e49=new C.pD(D.dxF,A.wz,A.be,"KLONDIKE","\ud83c\udccf",D.bTZ)
D.dpx=w([A.bA,A.bs,A.a_],x.O)
D.e4a=new C.pD(D.dpx,A.aQ,A.aL,"VEGAS TABLE","\ud83c\udccf",A.Ir)
D.rf=new C.FD(0,"continueGame")
D.rg=new C.FD(1,"youWin")
D.JR=new C.FD(2,"youLose")
D.UD=new C.FD(3,"draw")
D.aMR=new C.XE(0,"found")
D.emY=new C.XE(1,"foundLive")
D.a9y=new C.XE(2,"notFound")
D.aMS=new C.XE(3,"wrongAccount")
D.evn=new B.r(4,12)
D.eyR=new B.D(A.z9,A.ur,null)
D.bJJ=new B.P(4,0,0,3)
D.fAD=new B.F(!0,A.aN,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcS=new B.C("NGMY Helper",null,D.fAD,null,null,null,null,null,null,null,null,null)
D.ez7=new B.D(D.bJJ,D.hcS,null)
D.bTS=new B.a_(63284,"MaterialIcons",!1)
D.bZ9=new B.ae(D.bTS,18,A.pv,null,null,null)
D.fFA=new B.F(!0,A.pv,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUq=new B.C("Continue",null,D.fFA,null,null,null,null,null,null,null,null,null)
D.drk=w([D.bZ9,A.bm,D.fUq],x.p)
D.fjZ=new B.c6(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.drk,null)
D.ezb=new B.D(A.hW,D.fjZ,null)
D.ezs=new B.D(A.bT,A.ur,null)
D.bsC=new B.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dnv=w([A.hq,A.h0,A.cX,D.bsC],x.O)
D.ccO=new B.a8(A.ay,A.aC,A.x,D.dnv,A.DX,null)
D.ba4=new B.n(null,null,null,null,null,D.ccO,A.m)
D.bBo=new B.bP(D.ba4,A.bl,null,null)
D.eFZ=new B.cL(0,0,0,0,null,null,D.bBo,null)
D.c00=new B.ae(A.x0,11,A.c,null,null,null)
D.eG2=new B.cL(10,12,null,null,null,null,D.c00,null)
D.cX6=w([A.hQ,A.ed,A.lq],x.O)
D.eGG=new B.bT(A.BG,1.1,A.x,null,0,D.cX6,null,null)
D.buj=new B.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bnk=new B.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bpA=new B.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.dkY=w([D.buj,D.bnk,D.bpA],x.O)
D.eGO=new B.bT(A.aeP,1.05,A.x,null,0,D.dkY,null,null)
D.eHc=new B.bT(A.z,0.5,A.x,null,0,E.aBM,null,null)
D.fhT=new B.a2(-18,0,18,1)
D.fiq=new B.a2(-3,-5,3,5)
D.bZB=new B.ae(A.eb,16,D.f0,null,null,null)
D.aYz=new B.F(!0,D.f0,null,null,null,null,12,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ham=new B.C("Screenshot added \xb7 tap to change",null,D.aYz,null,null,null,null,null,null,null,null,null)
D.d77=w([D.bZB,A.bm,D.ham],x.p)
D.fjl=new B.c6(A.aM,A.b9,A.h,A.l,null,A.p,null,0,D.d77,null)
D.c2J=new B.ae(A.nT,15,D.f0,null,null,null)
D.h88=new B.C("Refresh",null,D.aYz,null,null,null,null,null,null,null,null,null)
D.d9B=w([D.c2J,A.db,D.h88],x.p)
D.fjn=new B.c6(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d9B,null)
D.eri={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.flA=new B.dj(D.eri,3,x.M)
D.er6={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.flM=new B.dj(D.er6,36,x.M)
D.er9={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fm_=new B.dj(D.er9,6,x.M)
D.esI={memory:0,typing:1,scramble:2,pattern:3}
D.nh=new B.dj(D.esI,4,x.M)
D.foH=new B.au(276,276)
D.fpp=new B.a5(13,null,null,null)
D.bgx=new B.fm(2.6,null,null,null,null,A.aQ,null,null,null,null)
D.fpB=new B.a5(26,26,D.bgx,null)
D.fqu=new B.hP(8,0,0,1,null)
D.hbz=new B.C("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aVW=new B.b0(D.hbz,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPm=new B.C("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fty=new B.b0(D.fPm,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fQw=new B.C("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new B.b0(D.fQw,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h8j=new B.C("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fui=new B.b0(D.h8j,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bts=new B.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fEs=new B.F(!0,D.bts,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new B.es("$",null,null,A.cM,null,null,null,null,null,null,D.fEs)
D.fxJ=new B.F(!0,A.a_,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy1=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy7=new B.F(!0,A.bs,null,null,null,null,9,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new B.F(!0,A.a_,null,null,null,null,9,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz3=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new B.F(!0,A.aQ,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new B.F(!0,D.f0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAt=new B.F(!0,A.bL,null,null,null,null,14,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new B.F(!0,A.Cq,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXh=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new B.F(!0,A.bL,null,null,null,null,11.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new B.F(!0,A.ac,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fDB=new B.F(!0,A.ac,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEK=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFa=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aG,null,null,null,null,null,null,null,null)
D.fFI=new B.F(!0,A.jj,null,null,null,null,10.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blA=new B.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.fG_=new B.F(!0,D.blA,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new B.F(!0,A.aA,null,null,null,null,17,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHV=new B.F(!0,D.ajs,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY_=new B.F(!0,A.Cq,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIf=new B.F(!0,A.ep,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIg=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new B.F(!0,A.Cq,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xS=new B.F(!0,A.c,null,null,null,null,13,A.G,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqF=new B.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fIO=new B.F(!0,D.bqF,null,null,null,null,12,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJp=new B.F(!0,A.U6,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKw=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new B.F(!0,A.iH,null,null,null,null,11,A.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKH=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLc=new B.F(!0,A.a_,null,null,null,null,10,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLg=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMd=new B.F(!0,A.a_,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fME=new B.F(!0,A.ac,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMW=new B.F(!0,A.be,null,null,null,null,14,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNu=new B.F(!0,A.a_,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOw=new B.C("Value per pair",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fOy=new B.C("Restore now",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fP7=new B.C("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aXK=new B.F(!0,A.cC,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPi=new B.C("AVAILABLE PLANS",null,D.aXK,null,null,null,null,null,null,null,null,null)
D.fPk=new B.C("I understand",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fPV=new B.C("Go Back",null,A.cH,null,null,null,null,null,null,null,null,null)
D.fBa=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQE=new B.C("PLAN VALUE",null,D.fBa,null,null,null,null,null,null,null,null,null)
D.fQH=new B.C("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fR3=new B.C("Deposit",null,A.WQ,null,null,null,null,null,null,null,null,null)
D.fLy=new B.F(!0,A.ex,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS6=new B.C("JACKPOT SLOTS",null,D.fLy,null,null,null,null,null,null,null,null,null)
D.fSp=new B.C("Restore",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fBg=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSt=new B.C("YOUR NUMBER",null,D.fBg,null,null,null,null,null,null,null,null,null)
D.fSK=new B.C("SPIN REELS",null,E.acs,null,null,null,null,null,null,null,null,null)
D.fTd=new B.C("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fTL=new B.C("Perfect Score Profit",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fUo=new B.C("Join room",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fWB=new B.C("Add payment screenshot",null,A.ja,null,null,null,null,null,null,null,null,null)
D.fWR=new B.C("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fKL=new B.F(!0,A.aQ,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXi=new B.C("INVITE A PLAYER",null,D.fKL,null,null,null,null,null,null,null,null,null)
D.fJO=new B.F(!0,A.Zo,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new B.C("NGMY GOLD LEADER",null,D.fJO,null,null,null,null,null,null,null,null,null)
D.fYj=new B.C("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fYJ=new B.C("Invest & Play",null,A.m5,null,null,null,null,null,null,null,null,null)
D.aXF=new B.F(!0,D.yF,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZa=new B.C("VALID THRU",null,D.aXF,null,null,null,null,null,null,null,null,null)
D.aYm=new B.F(!0,A.aF,null,null,null,null,11,A.G,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZi=new B.C("DEALER",null,D.aYm,null,null,null,null,null,null,null,null,null)
D.fZp=new B.C("CARDHOLDER",null,D.aXF,null,null,null,null,null,null,null,null,null)
D.fJf=new B.F(!0,A.bn,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_9=new B.C("NGMY PLATINUM",null,D.fJf,null,null,null,null,null,null,null,null,null)
D.fML=new B.F(!0,A.qF,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_W=new B.C("EARNED SO FAR",null,D.fML,null,null,null,null,null,null,null,null,null)
D.h0v=new B.C("VS",null,A.act,null,null,null,null,null,null,null,null,null)
D.h0W=new B.C("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.h1i=new B.C("One day left",null,A.acj,null,A.K,null,null,null,null,null,null,null)
D.h1E=new B.C("Keep typing \u2014 mistakes are counted in your payout",null,A.Fg,null,null,null,null,null,null,null,null,null)
D.h1F=new B.C("Multiplayer invite",null,A.iP,null,null,null,null,null,null,null,null,null)
D.h1R=new B.C("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new B.F(!0,A.U6,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1X=new B.C("\ud83d\udcb0 Partial Payout System",null,D.fzC,null,null,null,null,null,null,null,null,null)
D.h27=new B.C("Browse Topics",null,A.fb,null,null,null,null,null,null,null,null,null)
D.fyv=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2o=new B.C("Investment Required",null,D.fyv,null,A.K,null,null,null,null,null,null,null)
D.h3V=new B.C("Network Status",null,A.aWV,null,null,null,null,null,null,null,null,null)
D.aX1=new B.F(!0,A.ac,null,null,null,null,12.5,A.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4y=new B.C("Their account email",null,D.aX1,null,null,null,null,null,null,null,null,null)
D.h4T=new B.C("Verification code",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h4U=new B.C("Category",null,null,null,null,null,null,null,null,null,null,null)
D.h59=new B.C("ACTIVE ASSET",null,D.aXK,null,null,null,null,null,null,null,null,null)
D.h5y=new B.C("Scan QR",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h5D=new B.C("Check word",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h63=new B.C("YOUR HAND",null,D.aYm,null,null,null,null,null,null,null,null,null)
D.h6E=new B.C("NGMY Music Studio",null,A.jX,null,null,null,null,null,null,null,null,null)
D.h6H=new B.C("I sent it \u2014 submit deposit",null,A.m5,null,null,null,null,null,null,null,null,null)
D.h7w=new B.C("Back",null,A.Be,null,null,null,null,null,null,null,null,null)
D.fNI=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7E=new B.C("DEAL / PLAY ROUND",null,D.fNI,null,null,null,null,null,null,null,null,null)
D.h7R=new B.C("Got it \u2014 keep chatting",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h80=new B.C("3 Messages Left",null,A.aYc,null,null,null,null,null,null,null,null,null)
D.h8y=new B.C("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.h8H=new B.C("Copy",null,A.cH,null,null,null,null,null,null,null,null,null)
D.h93=new B.C("How many games?",null,D.aX1,null,null,null,null,null,null,null,null,null)
D.fIH=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9f=new B.C("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fIH,null,A.K,null,null,null,null,null,null,null)
D.haQ=new B.C("Question",null,null,null,null,null,null,null,null,null,null,null)
D.hb4=new B.C("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fO9=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcK=new B.C("NGMY  WALLET",null,D.fO9,null,null,null,null,null,null,null,null,null)
D.hcL=new B.C("Select Your Bet",null,A.hb,null,null,null,null,null,null,null,null,null)
D.hC9=new B.bl("history",x.W)
D.hCw=new B.bl("ngmy_local_home",x.W)
D.hCx=new B.bl("ngmy_local_invest",x.W)
D.hCy=new B.bl("ngmy_local_wallet",x.W)
D.hG4=new C.a_S(null)
D.b2p=new C.aDO(0,"grid")
D.b2q=new C.aDO(1,"questions")
D.hH8=new C.aDO(2,"answer")
D.hJP=new C.a0L(null)})();(function staticFields(){$.hdE=B.aR(x.N)
$.hFc=B.S(x.N,x.k)
$.hjz=null
$.hjn=B.S(x.N,B.aE("KD"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iF3","bI0",()=>C.imp())
w($,"iEQ","hOd",()=>{var v=null,u=B.fs(v,A.cw,v,v,v,D.fxt,A.a7,A.bW,v,A.dD,A.bX)
u.e5()
return u})})()};
(a=>{a["0xzNb7+7q0nvdnpb5IfbcfYvnCY="]=a.current})($__dart_deferred_initializers__);