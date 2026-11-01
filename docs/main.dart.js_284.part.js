((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,Q,A2,E,M,A3,N,A4,R,O,S,A5,T,A6,U,A7,A8,A9,Aa,Ab,Ac,V,Ad,C={
hgH(d,e,f){var w=null,v=f.k("G2<0>"),u=new A.G2(w,w,w,w,v)
$.yL()
u.d=new C.ctb(new A.y3(),e,u,f,d)
return new A.hW(u,v.k("hW<1>"))},
ctb:function ctb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctc:function ctc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ct8:function ct8(d){this.a=d},
ct9:function ct9(d,e){this.a=d
this.b=e},
cta:function cta(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ct7:function ct7(d,e,f){this.a=d
this.b=e
this.c=f},
brp:function brp(d){this.a=d},
hgG(d,e,f,g){return new C.avz(d,e,f,null,g.k("avz<0>"))},
Fh:function Fh(){},
aHY:function aHY(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
f3t:function f3t(d){this.a=d},
f3s:function f3s(d,e){this.a=d
this.b=e},
f3v:function f3v(d){this.a=d},
f3q:function f3q(d,e,f){this.a=d
this.b=e
this.c=f},
f3u:function f3u(d){this.a=d},
f3r:function f3r(d){this.a=d},
avz:function avz(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
i6j(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b6(w,1))
return w},
hqY(d){var w=C.i6j(d)
if(w.length===0)return""
return"$"+w},
fAM(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fAM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.T(Date.now(),0,!1).bS(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbq())o=o===t.gbq()&&p.b<t.gcC()
else o=!0
if(o){w=4
break}if(q.x!==B.cr){w=4
break}if(q.d!==B.fI){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.cT(m,"game payout:",0))if(!A.cT(m,"game partial:",0)){if(!A.cT(m,"multiplayer payout:",0))o=A.cT(m,"dice",0)&&q.e===B.fh
else o=l
l=o}if(!l){w=4
break}if(A.cT(m,"game payout:",0))k=B.a.i(B.a.b6(n,B.a.cH(m,"game payout:")+12))
else if(A.cT(m,"game partial:",0)){k=B.a.i(B.a.b6(n,B.a.cH(m,"game partial:")+13))
j=B.a.cH(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.cT(m,"multiplayer payout:",0)){k=B.a.i(B.a.b6(n,B.a.cH(m,"multiplayer payout:")+19))
j=B.a.cH(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.cT(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.uI(q.c,p,n,d,o,null,q.a,!0),$async$fAM)
case 6:case 4:e.length===s||(0,A.L)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fAM,v)},
iaV(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
i7m(d,e,f){return B.d.b4(e,new C.fEu(f,B.a.i(d.toLowerCase())))},
fEl(d){var w
C.hcX(d)
w=d.c6
return A.bp(new A.M(w,new C.fEm(),A.S(w).k("M<1,@>")),!0,x.N)},
hXY(d,e,f){var w,v,u,t,s,r,q=null,p=B.bX,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aW.toString
u=$.el().giv().b
if(u.a===0)t=1
else{new A.bc(u,A.a3(u).k("bc<2>")).gI(0)
u=$.l8()
s=u.d
t=s==null?u.ghf():s}w=B.k.dj(f*t)
v=new C.fmi(f)
if(J.d1(n,"data:image"))try{u=A.fQ(B.cG.aK(B.d.gal(J.lu(n,","))),B.A,w,new C.fmf(v),B.h_,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d1(n,"supabase://"))return new A.le(A.a1w(n),new C.fmg(f,e,p,w,v),q,q,x.gh)
return A.ks(n,B.A,w,new C.fmh(v),B.h_,p,!0,e,q,q,f)},
h1z(d,e){return new A.a7(e,e,A.i_(C.hXY(d,e,e),B.aq),null)},
hQl(){var w,v,u=A.a([],x._),t=x.N,s=A.C(D.dfc,x.gm)
for(w=0;w<36;++w){v=B.Cu[w]
s.push(new C.qM(v.a,v.b,v.c,v.e,v.f))}return new C.aA9(u,A.U(t,t),s)},
fEu:function fEu(d,e){this.a=d
this.b=e},
fEm:function fEm(){},
fmi:function fmi(d){this.a=d},
fmf:function fmf(d){this.a=d},
fmg:function fmg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fme:function fme(d){this.a=d},
fmh:function fmh(d){this.a=d},
al5:function al5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qM:function qM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aA9:function aA9(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dbG:function dbG(d,e){this.a=d
this.b=e},
dbR:function dbR(d,e){this.a=d
this.b=e},
dc8:function dc8(){},
dc9:function dc9(d){this.a=d},
dbZ:function dbZ(d,e){this.a=d
this.b=e},
dbY:function dbY(){},
dc_:function dc_(d){this.a=d},
dbX:function dbX(){},
dc1:function dc1(d){this.a=d},
dc0:function dc0(){},
dbU:function dbU(d){this.a=d},
dbS:function dbS(d){this.a=d},
dbT:function dbT(d){this.a=d},
dbV:function dbV(d){this.a=d},
dbW:function dbW(d){this.a=d},
dbM:function dbM(d,e){this.a=d
this.b=e},
dbN:function dbN(d,e){this.a=d
this.b=e},
dbK:function dbK(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbO:function dbO(d){this.a=d},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d,e,f){this.a=d
this.b=e
this.c=f},
dbJ:function dbJ(d,e){this.a=d
this.b=e},
dbI:function dbI(d,e){this.a=d
this.b=e},
dbH:function dbH(d,e){this.a=d
this.b=e},
dc7:function dc7(d){this.a=d},
dc5:function dc5(d,e,f){this.a=d
this.b=e
this.c=f},
dc4:function dc4(d,e,f){this.a=d
this.b=e
this.c=f},
dc3:function dc3(d,e){this.a=d
this.b=e},
dc2:function dc2(){},
dc6:function dc6(d){this.a=d},
aD_:function aD_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bjr:function bjr(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dQ7:function dQ7(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dQ5:function dQ5(){},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d){this.a=d},
dQa:function dQa(d){this.a=d},
al4:function al4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aA8:function aA8(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dbA:function dbA(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbB:function dbB(d,e){this.a=d
this.b=e},
al6:function al6(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAa:function aAa(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.a_=_.b8=_.bi=_.y2=_.y1=0
_.aB=_.aJ=_.aF=_.aA=$
_.bL=_.bb=_.b1=_.b2=null
_.aI=!1
_.bF=_.bh=null
_.c6=!1
_.ck=_.cL=""
_.c=_.a=_.bz=null},
dds:function dds(d,e){this.a=d
this.b=e},
ddv:function ddv(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddx:function ddx(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddt:function ddt(d){this.a=d},
ddu:function ddu(d){this.a=d},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
ddb:function ddb(d){this.a=d},
ddc:function ddc(){},
dcY:function dcY(d,e,f){this.a=d
this.b=e
this.c=f},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d,e,f){this.a=d
this.b=e
this.c=f},
dd0:function dd0(d,e){this.a=d
this.b=e},
dd1:function dd1(){},
dca:function dca(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
ddd:function ddd(){},
ddm:function ddm(){},
dda:function dda(d){this.a=d},
dd9:function dd9(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(){},
ddh:function ddh(){},
ddi:function ddi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddj:function ddj(d,e,f){this.a=d
this.b=e
this.c=f},
dcb:function dcb(){},
dcc:function dcc(d){this.a=d},
dcd:function dcd(){},
dcR:function dcR(d,e){this.a=d
this.b=e},
dcS:function dcS(d,e,f){this.a=d
this.b=e
this.c=f},
dcT:function dcT(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd3:function dd3(){},
dd4:function dd4(d){this.a=d},
dd5:function dd5(){},
dd6:function dd6(d){this.a=d},
dd7:function dd7(){},
ddg:function ddg(d,e,f){this.a=d
this.b=e
this.c=f},
dcU:function dcU(d){this.a=d},
dcV:function dcV(d,e){this.a=d
this.b=e},
dcW:function dcW(d){this.a=d},
dcX:function dcX(d){this.a=d},
ddk:function ddk(d){this.a=d},
ddl:function ddl(d){this.a=d},
dce:function dce(d){this.a=d},
dcf:function dcf(d,e){this.a=d
this.b=e},
dcg:function dcg(d){this.a=d},
dch:function dch(d){this.a=d},
dde:function dde(d,e){this.a=d
this.b=e},
ddf:function ddf(d){this.a=d},
dcP:function dcP(d,e){this.a=d
this.b=e},
dd8:function dd8(d,e,f){this.a=d
this.b=e
this.c=f},
dcN:function dcN(d,e,f){this.a=d
this.b=e
this.c=f},
dcO:function dcO(){},
ddn:function ddn(d){this.a=d},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddr:function ddr(d){this.a=d},
ddq:function ddq(){},
dcM:function dcM(d,e,f){this.a=d
this.b=e
this.c=f},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcu:function dcu(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcv:function dcv(d){this.a=d},
dcs:function dcs(d,e){this.a=d
this.b=e},
dcw:function dcw(d){this.a=d},
dcr:function dcr(){},
dcx:function dcx(d){this.a=d},
dcp:function dcp(){},
dcq:function dcq(d){this.a=d},
dcy:function dcy(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dcz:function dcz(d){this.a=d},
dcn:function dcn(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
dcA:function dcA(d){this.a=d},
dcm:function dcm(d,e){this.a=d
this.b=e},
dcB:function dcB(d){this.a=d},
dcl:function dcl(d){this.a=d},
dci:function dci(d,e){this.a=d
this.b=e},
dcC:function dcC(d,e,f){this.a=d
this.b=e
this.c=f},
dcD:function dcD(d){this.a=d},
dck:function dck(){},
dcE:function dcE(d){this.a=d},
alW:function alW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgz:function bgz(){this.c=this.a=null},
dh1:function dh1(d,e){this.a=d
this.b=e},
dh0:function dh0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aii:function aii(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
axl:function axl(d,e,f,g,h,i,j,k,l,m){var _=this
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
cEp:function cEp(d){this.a=d},
cDK:function cDK(d,e){this.a=d
this.b=e},
cDA:function cDA(d){this.a=d},
cDB:function cDB(d){this.a=d},
cDU:function cDU(d){this.a=d},
cDR:function cDR(d){this.a=d},
cDS:function cDS(d){this.a=d},
cDT:function cDT(d,e,f){this.a=d
this.b=e
this.c=f},
cDM:function cDM(d){this.a=d},
cDL:function cDL(d){this.a=d},
cDC:function cDC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cDP:function cDP(d){this.a=d},
cDO:function cDO(d){this.a=d},
cDN:function cDN(d,e){this.a=d
this.b=e},
cEc:function cEc(d){this.a=d},
cE6:function cE6(d){this.a=d},
cE9:function cE9(d){this.a=d},
cE8:function cE8(){},
cE5:function cE5(d){this.a=d},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE4:function cE4(){},
cDH:function cDH(){},
cDI:function cDI(d,e){this.a=d
this.b=e},
cDJ:function cDJ(d){this.a=d},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDG:function cDG(d,e){this.a=d
this.b=e},
cDX:function cDX(d,e){this.a=d
this.b=e},
cDQ:function cDQ(d){this.a=d},
cDY:function cDY(d){this.a=d},
cDZ:function cDZ(d,e){this.a=d
this.b=e},
cE_:function cE_(d,e){this.a=d
this.b=e},
cE0:function cE0(d,e){this.a=d
this.b=e},
cE1:function cE1(d,e,f){this.a=d
this.b=e
this.c=f},
cE2:function cE2(d){this.a=d},
cE3:function cE3(d){this.a=d},
cDV:function cDV(d,e){this.a=d
this.b=e},
cEb:function cEb(d){this.a=d},
cDW:function cDW(d,e){this.a=d
this.b=e},
cEo:function cEo(d){this.a=d},
cEh:function cEh(d){this.a=d},
cEk:function cEk(d){this.a=d},
cEe:function cEe(d,e){this.a=d
this.b=e},
cEi:function cEi(){},
cEj:function cEj(d,e){this.a=d
this.b=e},
cEf:function cEf(d){this.a=d},
cEg:function cEg(d){this.a=d},
cEm:function cEm(){},
cEl:function cEl(d){this.a=d},
cEd:function cEd(d,e){this.a=d
this.b=e},
cEn:function cEn(d){this.a=d},
cDD:function cDD(d){this.a=d},
cEa:function cEa(d,e){this.a=d
this.b=e},
cDE:function cDE(d,e,f){this.a=d
this.b=e
this.c=f},
aKn:function aKn(){},
aKo:function aKo(){},
aKp:function aKp(){},
aLl:function aLl(){},
bZN(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return!1
w=f==null?"":f
v=B.a.i(w.toLowerCase())
if(v.length!==0&&v!==s)return!1
u=B.a.i(d.b.toLowerCase())
if(u.length!==0&&u===s)return!0
w=B.a.i(e.toLowerCase())
t=B.a.i(d.a.toLowerCase())
if(t===s||t===(w+"+local.ngmy").toLowerCase())return!0
return!1},
bZO(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hDO(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aXJ(d,e){return C.hDP(d,e)},
hDP(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aXJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b0w(d),$async$aXJ)
case 3:p=g
if(p!=null){try{t=B.S.aL(0,p.c,null)
if(x.f.b(t)){s=C.hbh(A.a2(t,x.N,x.z))
if(s==null){u=new A.FY(D.a5z,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bZN(s,e,p.b)){u=new A.FY(D.aGS,null)
w=1
break}r=p.a?D.e2f:D.aGR
u=new A.FY(r,s)
w=1
break}}catch(o){}u=new A.FY(D.a5z,null)
w=1
break}s=C.hbi(d)
if(s==null){u=new A.FY(D.a5z,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bZN(s,e,null)){u=new A.FY(D.aGS,null)
w=1
break}u=new A.FY(D.aGR,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXJ,v)},
hbi(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.d1(w,"\ufeff"))w=J.mJ(w,1)
v=!1
if(J.d1(w,"NGMYSNAP1|")){v=!0
w=B.ch.cB(0,B.cG.aK(J.mJ(w,10)))}u=B.S.aL(0,w,null)
if(!x.f.b(u))return null
t=A.a2(u,x.N,x.z)
s=v?C.hDN(t):C.hbh(t)
return s}catch(r){return null}},
hDN(d){var w,v,u,t,s,r,q,p,o,n=new C.bZK(),m=new C.bZJ(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a2(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.T(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aJ(w.h(0,"d"))
p=new A.vv(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.A(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aJ(d.h(0,"qn"))
if(o==null)o=0
return new A.a5Y("","",v,u,t,s,r,q,n,m,o,p,B.ib,new A.T(Date.now(),0,!1),-1)},
hbh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.A(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bZM()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a2(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aJ(u.h(0,"amount"))
if(s==null)s=0
r=A.aJ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.T(Date.now(),0,!1)
p=A.aJ(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aJ(u.h(0,"daysClockedIn"))
n=new A.vv(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.C(new A.eb(J.b6(m,new C.bZL(w),x.eG),t),t.k("J.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aJ(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aJ(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.A(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aJ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aJ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.T(Date.now(),0,!1)
f=A.aJ(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.N(f)
return new A.a5Y(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fX2(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fX2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bZI(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(t.a,s,"_")
u=A.Gv(A.K0(t.eS(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fX2,v)},
W5:function W5(d,e){this.a=d
this.b=e},
bZK:function bZK(){},
bZJ:function bZJ(){},
bZM:function bZM(){},
bZL:function bZL(d){this.a=d},
i05(d){return A.ca(null,B.aW,!0,null,new C.fqt(),d,null,!0,!0,x.N)},
i0i(d,e,f,g){return A.ca(null,B.aW,!0,null,new C.frG(g,f,e),d,null,!0,!0,x.y)},
anu:function anu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCf:function aCf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dxy:function dxy(d,e){this.a=d
this.b=e},
dxz:function dxz(d){this.a=d},
dxp:function dxp(d,e){this.a=d
this.b=e},
dxn:function dxn(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxw:function dxw(d,e){this.a=d
this.b=e},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxl:function dxl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxo:function dxo(d){this.a=d},
dxv:function dxv(){},
dxt:function dxt(d){this.a=d},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxq:function dxq(){},
dxr:function dxr(d,e){this.a=d
this.b=e},
dxs:function dxs(d,e){this.a=d
this.b=e},
dxA:function dxA(d){this.a=d},
a0t:function a0t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brV:function brV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_5:function a_5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biZ:function biZ(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dxE:function dxE(d){this.a=d},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxD:function dxD(d){this.a=d},
a_6:function a_6(d){this.a=d},
bj_:function bj_(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dxF:function dxF(d,e){this.a=d
this.b=e},
fqt:function fqt(){},
frG:function frG(d,e,f){this.a=d
this.b=e
this.c=f},
aew:function aew(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eY8:function eY8(d){this.a=d},
eY9:function eY9(d){this.a=d},
Q0:function Q0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zd:function Zd(d){this.a=d},
azy:function azy(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d6A:function d6A(d){this.a=d},
d6x:function d6x(){},
d6y:function d6y(d){this.a=d},
d6z:function d6z(d){this.a=d},
U6(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$U6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.N_(s),$async$U6)
case 3:t=h
J.cf(t,A.F(["role",e,"text",B.a.i(f),"at",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z))
w=4
return A.b(A.anK(s,t),$async$U6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$U6,v)},
hE6(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.S(d).k("a_<1>")
v=A.C(new A.a_(d,new C.c_v(),w),w.k("J.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fQ(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.L)(u),++s){r=u[s]
q=J.a4(r)
p=J.A(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.u(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c_v:function c_v(){},
i5J(d){return B.d.dN(B.Cu,new C.fAG(d),new C.fAH()).r},
fAG:function fAG(d){this.a=d},
fAH:function fAH(){},
anZ:function anZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bj5:function bj5(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dE_:function dE_(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDR:function dDR(d,e,f){this.a=d
this.b=e
this.c=f},
dDW:function dDW(d){this.a=d},
dDT:function dDT(d,e,f){this.a=d
this.b=e
this.c=f},
dDX:function dDX(d){this.a=d},
dDS:function dDS(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDU:function dDU(d){this.a=d},
dDV:function dDV(d){this.a=d},
hcX(d){var w=A.c7z(new A.T(Date.now(),0,!1)),v=d.bh
if(v===w)return
d.bh=w
d.bF=0
d.c6=A.a([],x.s)},
hcZ(d){return A.ca(null,B.w.j(0.82),!0,null,new C.c7E(),d,null,!0,!0,x.H)},
a6B:function a6B(d){this.a=d},
c7E:function c7E(){},
c7D:function c7D(d){this.a=d},
hq9(){var w=new A.T(Date.now(),0,!1),v=w.bS(A.dE(4-A.mB(w),0,0,0,0,0).a),u=A.c1(A.bA(v),1,4,0,0,0,0,0)
return""+A.bA(v)+"-W"+B.a.aY(B.o.u(1+B.k.bl(B.o.am(v.bC(A.c1(A.bA(u),A.bH(u),A.bT(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fhj(d,e){var w,v,u,t,s,r,q=A.Ga(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.cc(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.F(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hVC(d,e){var w,v,u,t,s,r,q,p=A.Ga(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cc(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aJ(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
ieX(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Ga(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cc(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aJ(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
i0Z(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Ga(b5),b2=A.c8V(),b3=C.hq9()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a4(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.cc(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
q=A.aJ(r.h(s,a4))
o=q==null?a1:B.k.N(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a4(u)
v=A.aJ(w.h(u,a4))
v=v==null?a1:B.k.N(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aJ(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.fsu()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cc(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cc(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fhj(b4,b5)
w=J.a4(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a2(v.a(w.h(k,b0)),r,q):A.U(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cI(w,A.a3(w).k("cI<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a4(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a2(v.a(j.h(0,h)),r,q):A.U(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=A.aJ(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.c8(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aJ(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.c8(h,a1)}}}return a1},
hmM(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.av(w)]
if(t===3&&d.f>=d.e)t=e.hi()?1:2
return t},
h1R(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.av(w)]},
i1_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Ga(a3),a1=new C.fsv()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a4(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.cc(p,"+local.ngmy")?B.a.ap(p,0,p.length-11):p)!==a0)continue
if(a1.$2(s,h)+a1.$2(s,g)+a1.$2(s,f)<=0)continue
if(u!=null){r=r.h(s,e)
r=J.k(r==null?"":r)
q=J.q(u,e)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u==null)return null
o=a1.$2(u,h)
n=a1.$2(u,g)
m=a1.$2(u,f)
w=J.a4(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fsw(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.av(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.av(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.h1R(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
i0Y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aJ(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aJ(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hq9():A.c8V()
t=v+"|"+u
s=C.fhj(d,e)
h=J.a4(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aJ(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aJ(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.av(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
i9l(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bhY()
w=C.i1_(d,e,a0)
if(w!=null){if(w===3)++d.f
C.afY(d,e,w)
return w}v=C.i0Z(d,e)
if(v!=null){if(v===3)++d.f
C.afY(d,e,v)
return v}u=C.i0Y(d,e,a0)
if(u!=null)return new C.fHH(d,a0,e).$1(u)
t=C.fhj(d,e)
s=J.a4(t)
r=A.aJ(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aJ(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fHJ(d,a0)
if(C.hVC(d,e)>0){n=o.$0()
C.ieX(d,e)
C.afY(d,e,n)
return n}if(q>=d.c){n=new C.fHI(d,a0).$0()
C.afY(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.afY(d,e,n)
return n}s=x.t
m=A.a([],s)
l=A.a([],s)
for(s=[1,2,3],r=d.a,k=0;k<3;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)m.push(n)}for(s=[-1,-2],k=0;k<2;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)l.push(n)}h=B.o.D(d.b,5,95)
g=a0.av(100)<h
if(g&&m.length!==0){f=m[a0.av(m.length)]
if(f===3&&d.f>=d.e)f=a0.hi()?1:2}else{s=l.length
if(s!==0)f=l[a0.av(s)]
else f=g?1:-1}if(f===3)++d.f
C.afY(d,e,f)
return f},
c8N(d){var w=0,v=A.j(x.y),u
var $async$c8N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8M(d),$async$c8N)
case 3:if(f){u=!0
w=1
break}u=A.c8M(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8N,v)},
afY(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fhj(d,e),s=J.a4(t),r=A.aJ(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aJ(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fsu:function fsu(){},
fsv:function fsv(){},
fsw:function fsw(d,e){this.a=d
this.b=e},
fHH:function fHH(d,e,f){this.a=d
this.b=e
this.c=f},
fHJ:function fHJ(d,e){this.a=d
this.b=e},
fHI:function fHI(d,e){this.a=d
this.b=e},
ant:function ant(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biX:function biX(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cR$=d
_.b5$=e
_.c=_.a=null},
dxa:function dxa(d){this.a=d},
dx9:function dx9(d){this.a=d},
dxb:function dxb(d){this.a=d},
dx8:function dx8(d,e){this.a=d
this.b=e},
aKV:function aKV(){},
Nr:function Nr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c9C:function c9C(){},
c9B:function c9B(){},
apC:function apC(d,e,f){this.c=d
this.d=e
this.a=f},
fY3(d,e,f){return A.ca(null,B.w.j(0.88),!0,null,new C.ca3(f,e),d,null,!0,!0,x.H)},
hHV(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c8(r[0],null)
v=r[1]
u=A.c8(v,null)
t=A.c8(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.ir[u-1]:v)+" "+A.u(t)+", "+A.u(w)}return s},
Nz:function Nz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ca3:function ca3(d,e){this.a=d
this.b=e},
bjD:function bjD(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dXa:function dXa(d,e){this.a=d
this.b=e},
dX6:function dX6(){},
dX7:function dX7(){},
dX8:function dX8(d,e){this.a=d
this.b=e},
dX9:function dX9(d,e){this.a=d
this.b=e},
aLu:function aLu(){},
hq5(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bhu(new C.fD2(w))
w=w.a
return w==null?null:w.c.a},
hpY(d){$.aW.x1$.push(new C.fCQ(d))},
hqh(d){var w=$.t3().gbk(),v=w!=null
if(!v||w.c==null)return
if(C.hq5(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pC())w.eF()},
hqg(d){C.hmT(d,0)},
hmT(d,e){var w,v
if(e>4)return
w=d==null?$.t3().gbk():d
if(w==null||w.c==null)return
v=C.hq5(w)
if(v==="GameCenterScreen")return
if(D.eTo.t(0,v)&&w.pC()){w.eF()
$.aW.x1$.push(new C.foK(w,e))}},
aPr(d,e,f){return A.en(A.cq(new C.fEp(e,d,f)),e,!0)},
fD2:function fD2(d){this.a=d},
fCQ:function fCQ(d){this.a=d},
fCP:function fCP(d){this.a=d},
foK:function foK(d,e){this.a=d
this.b=e},
fEp:function fEp(d,e,f){this.a=d
this.b=e
this.c=f},
apG(d,e){var w=0,v=A.j(x.H),u
var $async$apG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Vc(e)
w=2
return A.b(A.apF(d,u),$async$apG)
case 2:A.a7d(d,u)
return A.h(null,v)}})
return A.i($async$apG,v)},
uI(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$uI=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.yr(g)
if(o.length===0){w=1
break}t=e==null?A.L7(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.NA(o),$async$uI)
case 3:q=m
if(j!=null&&j.length!==0&&J.qX(q,new C.cah(j))){w=1
break}p=e==null?new A.T(Date.now(),0,!1):e
J.pC(q,0,new A.jc(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.apG(o,q),$async$uI)
case 4:if(i==null||r==null||s)C.a7f(o).bB(new C.cai(),x.S).eR(new C.caj())
case 1:return A.h(u,v)}})
return A.i($async$uI,v)},
a7f(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hrf
m=A.yr(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.NA(m),$async$a7f)
case 3:t=f
s=J.cF(t)
if(!s.b4(t,new C.cag())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a7f)
case 4:r=f
q=J.a4(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.S.ao(s.h(t,o).ag(),null)!==B.S.ao(q.h(r,o).ag(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.apG(m,r),$async$a7f)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a7f,v)},
b_9(d){var w=0,v=A.j(x.S),u,t
var $async$b_9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fY6(d,!1),$async$b_9)
case 3:t=J
w=4
return A.b(C.apH(d,!1),$async$b_9)
case 4:u=t.dJ(f,new C.caf(new A.T(Date.now(),0,!1).bS(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_9,v)},
apH(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$apH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.yr(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.NA(r),$async$apH)
case 3:t=g
s=A.Vc(t)
if(s.length!==J.ad(t))C.apG(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apH,v)},
i7g(d){var w,v,u,t=new A.T(Date.now(),0,!1),s=t.bC(d).a,r=B.o.am(s,6e7)
if(r<1)return"Just now"
w=B.o.am(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.am(s,864e8)<1)return""+w+"h ago"
v=B.o.E(A.dk(d),12)===0?12:B.o.E(A.dk(d),12)
s=B.ir[A.bH(d)-1]
r=A.bA(d)===A.bA(t)?"":", "+A.bA(d)
w=B.a.aY(B.o.u(A.h4(d)),2,"0")
u=A.dk(d)<12?"AM":"PM"
return s+" "+A.bT(d)+r+" \xb7 "+v+":"+w+" "+u},
bzZ(d){var w=B.k.ab(Math.abs(d),2).split(".")
return"$"+A.oM(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fm_(),null)+"."+w[1]},
bDx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bDx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apH(e,!1),$async$bDx)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fY6(e,!0).bB(new C.fQ5(e),t).bB(new C.fQ6(),t).eR(new C.fQ7())
w=4
return A.b(A.bR(B.K,null,new C.fQ8(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bDx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bDx,v)},
h00(d,e,f){var w=null,v=B.c.j(0.05),u=A.n(14),t=A.I(f.j(0.35),B.q,1)
return A.E(A.p(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bC,A.eQ(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dw)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hC,w,w,w),1)},
dXb(d,e,f){var w=null,v=B.w.j(0.22),u=A.n(8),t=A.I(f.j(0.28),B.q,1)
return A.E(A.p(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.eQ(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e_)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.MQ,w,w,w),1)},
cah:function cah(d){this.a=d},
cai:function cai(){},
caj:function caj(){},
cag:function cag(){},
caf:function caf(d){this.a=d},
fm_:function fm_(){},
fQ5:function fQ5(d){this.a=d},
fQ6:function fQ6(){},
fQ7:function fQ7(){},
fQ8:function fQ8(d,e){this.a=d
this.b=e},
fQ4:function fQ4(d,e){this.a=d
this.b=e},
fQ3:function fQ3(d){this.a=d},
adk:function adk(d,e){this.c=d
this.a=e},
dXd:function dXd(){},
dXe:function dXe(){},
dXf:function dXf(){},
dXg:function dXg(d){this.a=d},
dXi:function dXi(){},
dXh:function dXh(d){this.a=d},
adj:function adj(d,e){this.c=d
this.a=e},
dXc:function dXc(){},
bDy(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hZ(B.aW,!1,w,d,new C.fQb(j,i,h,g,e,f),null,B.eM,!1,x.H)},
fQb:function fQb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQ9:function fQ9(d,e){this.a=d
this.b=e},
fQa:function fQa(d,e){this.a=d
this.b=e},
aAb:function aAb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfh:function bfh(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
ddB:function ddB(d,e){this.a=d
this.b=e},
ddA:function ddA(){},
adJ:function adJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aKq:function aKq(){},
aqs(d,e,f){return new C.b0_(f,d,e,null)},
hIy(d){var w=A.a(B.k.ab(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.oM(w[0],v,new C.cbS(),null)
return B.d.aG(w,".")},
b_c(){var w=$.tv
if((w>0?$.tv=w-1:w)<=0)$.tv=0},
ah7(d,e){var w=0,v=A.j(x.H),u
var $async$ah7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.h4B
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$ah7)
case 4:case 3:return A.h(null,v)}})
return A.i($async$ah7,v)},
b0_:function b0_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbT:function cbT(d){this.a=d},
cbS:function cbS(){},
N2:function N2(){},
c01:function c01(){},
h4_(d){if(d>0)return"+"+d
return""+d},
h3k(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fEq(d,e){var w=J.q(e,d)
if(w==null)w=A.fDc().h(0,d)
return w==null?90:w},
fkY(d,e){var w,v,u=A.aX(x.S)
while(u.a<3){w=e.av(41)-20
if(w===0)continue
u.L(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.L(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jU(u,new C.fkZ(),u.$ti.k("jU<co.E,m>")))
B.d.fp(v,e)
return v},
hlT(d,e,f){var w,v,u,t,s=A.aX(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.L(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.L(0,f[B.o.E(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.pj(s,3,s.$ti.k("co.E")))
B.d.fp(t,e)
return t},
i2q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eE()
b2.du(42)
for(w=x.s,v=0;v<200;++v){u=B.o.E(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.av(12)]
s=[2,3,5,6,7,10,11,13][b2.av(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.av(4)
p=B.o.am(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.IH("Simplify \u221a("+t*s+"x^"+q+")",m,C.hlT(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.u(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.av(35)
j=b2.av(4)===0?1:2+b2.av(4)
i=b2.av(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.IH("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fkY(k,b2)))}else if(u===2){k=2+b2.av(18)
j=b2.av(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.av(10)+2
b1.push(new C.IH("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fkY(g,b2)))}else b1.push(new C.IH("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fkY(k,b2)))}else if(u===3){e=b2.av(11)-5
o=b2.av(11)
n=b2.av(11)
d=b2.av(11)+2
l=b2.hi()?1:-1
a0=e+l*(b2.av(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jd(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.IH("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fkY(a0,b2)))}else{a6=2+b2.av(10)
a7=a6+2+b2.av(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.IH("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hlT(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
id9(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dx(A.a(d.split(""),u),x.bJ).h3(0)
for(w=0;w<12;++w){B.d.fp(t,B.cH)
v=B.d.h3(t)
if(v!==d)return v}return new A.dx(t,x.bJ).h3(0)},
IH:function IH(d,e,f){this.a=d
this.b=e
this.c=f},
fkZ:function fkZ(){},
ap3:function ap3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD0:function aD0(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dQd:function dQd(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQc:function dQc(d){this.a=d},
dQj:function dQj(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e){this.a=d
this.b=e},
apI:function apI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDh:function aDh(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dXA:function dXA(d,e,f){this.a=d
this.b=e
this.c=f},
dXB:function dXB(d){this.a=d},
dXw:function dXw(d){this.a=d},
dXy:function dXy(d,e){this.a=d
this.b=e},
dXx:function dXx(d,e){this.a=d
this.b=e},
dXz:function dXz(d,e){this.a=d
this.b=e},
dXv:function dXv(d){this.a=d},
hEL(d){var w,v,u,t,s,r,q,p=new A.T(Date.now(),0,!1),o=p.bS(36e8)
try{w=d.h(0,"start")
p=A.mQ(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=A.mQ(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.ro(w,u,t,s,r,q==null?null:J.k(q))},
a7l(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a7l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ay(),$async$a7l)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.S.aL(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.db(s,x.f)
p=A.cD(p,new C.caJ(),p.$ti.k("J.E"),x.b1)
p=A.C(p,A.a3(p).k("J.E"))
B.d.b_(p,new C.caK())
u=p
w=1
break}catch(n){r=A.ab(n)
$.am.$1("[calendar-memory] load: "+A.u(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a7l,v)},
aq0(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aq0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a7l(d),$async$aq0)
case 2:r=g
q=J.cF(r)
q.br(r,new C.caG(e))
q.L(r,e)
q.b_(r,new C.caH())
w=3
return A.b(A.ay(),$async$aq0)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.kD(r,80)
s=q.$ti.k("M<ak.E,a6<m,@>>")
q=A.C(new A.M(q,new C.caI(),s),s.k("ak.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.S.ao(q,null)),$async$aq0)
case 4:return A.h(null,v)}})
return A.i($async$aq0,v)},
hI6(d,e){var w=Date.now(),v=new A.T(w,0,!1).bU()
w=J.dJ(d,new C.caL(v,v.bS(A.dE(14,0,0,0,0,0).a)))
w=A.C(w,w.$ti.k("J.E"))
return w},
hdw(d){var w,v,u,t,s,r,q,p,o,n,m=C.hI6(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.d9(m,0,A.dG(20,"count",x.S),A.S(m).c),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.E(A.dk(s),12)===0?12:B.o.E(A.dk(s),12)
q=A.dk(s)>=12?"PM":"AM"
p=B.a.aY(B.o.u(A.h4(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bH(s)+"/"+A.bT(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
ro:function ro(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
caJ:function caJ(){},
caK:function caK(){},
caG:function caG(d){this.a=d},
caH:function caH(){},
caI:function caI(){},
caL:function caL(d,e){this.a=d
this.b=e},
hEM(d){var w,v,u,t,s,r,q,p,o=null,n=new A.T(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mQ(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
return new C.rp(w,u,t,s,r,q,J.k(p==null?"user":p))},
hbR(d){var w=B.o.E(A.dk(d),12)===0?12:B.o.E(A.dk(d),12),v=A.dk(d)>=12?"PM":"AM"
return""+A.bH(d)+"/"+A.bT(d)+" "+w+":"+B.a.aY(B.o.u(A.h4(d)),2,"0")+" "+v},
Uk(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Uk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ay(),$async$Uk)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.S.aL(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.db(s,x.f)
p=A.cD(p,new C.c37(),p.$ti.k("J.E"),x.Q)
p=A.C(p,A.a3(p).k("J.E"))
B.d.b_(p,new C.c38())
u=p
w=1
break}catch(n){r=A.ab(n)
$.am.$1("[call-memory] load: "+A.u(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Uk,v)},
aYv(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aYv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$aYv)
case 2:u=g
t=A.d9(e,0,A.dG(120,"count",x.S),A.S(e).c).dJ(0)
s=B.a.i(d.toLowerCase())
r=A.S(t).k("M<1,a6<m,@>>")
r=A.C(new A.M(t,new C.c35(),r),r.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.S.ao(r,null)),$async$aYv)
case 3:return A.h(null,v)}})
return A.i($async$aYv,v)},
aYw(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aYw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.U(x.N,x.Q)
o=J
w=2
return A.b(C.Uk(d),$async$aYw)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gR(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.C(new A.bc(p,u),u.k("J.E"))
B.d.b_(q,new C.c36())
w=5
return A.b(C.aYv(d,q),$async$aYw)
case 5:return A.h(null,v)}})
return A.i($async$aYw,v)},
c39(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c39=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Uk(d),$async$c39)
case 3:t=s.dJ(g,new C.c3a(e.bS(-72e8),e.bS(72e8)))
t=A.C(t,t.$ti.k("J.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c39,v)},
hbS(d,e){var w,v,u,t,s,r=J.a4(d)
if(r.gan(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kD(d,e),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gVu()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
i95(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.T(q,0,!1).bU(),o=d.toLowerCase(),n=A.c1(A.bA(p),A.bH(p),A.bT(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bS(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bS(r)
w=A.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cG(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c8(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c8(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.c1(A.bA(n),A.bH(n),A.bT(n),u,t,0,0,0)},
hrF(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rp:function rp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c37:function c37(){},
c38:function c38(){},
c35:function c35(){},
c36:function c36(){},
c3a:function c3a(d,e){this.a=d
this.b=e},
hdz(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lE(t,w,v,u==null?null:J.k(u))},
hIc(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.caR(),x.bP)
v=A.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.d9C
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.A(d.h(0,"printable"),!0)
return new C.ir(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.dU(d.h(0,s))):0)},
hIb(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hVP(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.dU(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.dU(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.caP(),x.u)
s=A.C(s,s.$ti.k("ak.E"))}return new C.ia(p,w,v,u,s==null?D.axQ:s,t)},
hVQ(d){var w,v,u,t=A.F([G.C2,"investments",B.oZ,"games",B.jK,"loans",B.hF,"withdrawals",B.kz,"deposits",B.l4,"civic",B.l3,"store",B.rp,"jobs",B.mC,"refunds",B.eT,"account",B.lY,"music",B.ym,"help"],x.dk,x.N)
for(w=new A.cI(t,A.a3(t).k("cI<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hVP(d){switch(d){case"investments":return G.C2
case"games":return B.oZ
case"loans":return B.jK
case"withdrawals":return B.hF
case"deposits":return B.kz
case"civic":return B.l4
case"store":return B.l3
case"jobs":return B.rp
case"refunds":return B.mC
case"account":return B.eT
case"music":return B.lY
default:return B.ym}},
n4(d){var w=A.a([new C.lE("text",d,null,null)],x.a)
return w},
ah4(){var w=null,v=x.v
return A.a([new C.ia("investments","Investments",G.C2,4280468830,A.a([new C.ir("inv1","How do I buy an investment plan?",C.n4("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ir("inv2","When do I get paid from my plan?",C.n4("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ir("inv3","Can I have more than one plan?",C.n4("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.ia("games","Games",B.oZ,4287323382,A.a([new C.ir("gam1","How do NGMY games work?",C.n4("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ir("gam2","Why did my game payout change?",C.n4("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.ia("loans","Loans",B.jK,4294538006,A.a([new C.ir("loan1","How do I apply for a loan?",C.n4("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ir("loan2","What is the repayment period?",C.n4("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.ia("withdrawals","Withdrawals",B.hF,4282090230,A.a([new C.ir("wd1","How do I withdraw money?",C.n4("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ir("wd2","Why is my withdrawal pending?",C.n4("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.ia("deposits","Deposits",B.kz,4279548070,A.a([new C.ir("dep1","How do I deposit funds?",C.n4("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ir("dep2","How long until my deposit posts?",C.n4("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.ia("civic","Civic Registry",B.l4,4289170426,A.a([new C.ir("civ1","What is Civic Registry?",C.n4("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ir("civ2","What does \u201cmissed\u201d mean on my profile?",C.n4("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.ia("store","NGMY Store",B.l3,4293675161,A.a([new C.ir("sto1","How do I buy from NGMY Store?",C.n4("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ir("sto2","How do I sell in the store?",C.n4("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.ia("jobs","Jobs & Creator",B.rp,4293548044,A.a([new C.ir("job1","How do I find jobs?",C.n4("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ir("job2","How do I post a job?",C.n4("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.ia("refunds","Refunds",B.mC,4293870660,A.a([new C.ir("ref1","Can I get a refund?",C.n4("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ir("ref2","How long do refunds take?",C.n4("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.ia("account","Account",B.eT,4281908728,A.a([new C.ir("acc1","How do I update my profile?",C.n4("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ir("acc2","I forgot my password \u2014 what now?",C.n4("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.ia("music","Music Charts",B.lY,4290807036,A.a([new C.ir("mus1","What are Music Charts?",C.n4("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ir("mus2","How do I upload music?",C.n4("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.ia("help","Help Center",B.ym,4279080072,A.a([new C.ir("hlp1","Where can I get live help?",C.n4("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ir("hlp2","How do daily Helper limits work?",C.n4("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hdA(d){var w,v=J.a4(d),u=v.gan(d)
if(u)return C.ah4()
v=v.dA(d,new C.caU(),x.i)
w=A.C(v,v.$ti.k("ak.E"))
B.d.b_(w,new C.caV())
return w.length===0?C.ah4():w},
hdB(d){var w=J.b6(d,new C.caW(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
return A.F(["categories",w,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z)},
aq2(d){return C.hId(d)},
hId(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aq2=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aq2)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.S.ao(C.hdB(d),null)),$async$aq2)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.ab(p)
$.am.$1("[helper kb] local save: "+A.u(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aq2,v)},
caT(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$caT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$caT)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.ah4()
u=l
w=1
break}p=B.S.aL(0,q,null)
if(!x.f.b(p)){l=C.ah4()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.ah4()
u=l
w=1
break}n=C.hdA(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.ab(j)
$.am.$1("[helper kb] local load: "+A.u(m))
l=C.ah4()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$caT,v)},
b_x(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b_x=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c3(),$async$b_x)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f7("ngmy_helper_kb",null,!1,B.bJ),$async$b_x)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
$.am.$1("[helper kb] cloud fetch: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b_x,v)},
b_y(d){return C.hIe(d)},
hIe(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b_y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c3(),$async$b_y)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hJ("ngmy_helper_kb",d,!1,!1,B.cI,null),$async$b_y)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
$.am.$1("[helper kb] cloud upsert: "+A.u(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b_y,v)},
aq3(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aq3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.caT(),$async$aq3)
case 3:s=e
w=4
return A.b(C.b_x(),$async$aq3)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.hdA(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aq2(t),$async$aq3)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq3,v)},
caX(d){var w=0,v=A.j(x.y),u
var $async$caX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aq2(d),$async$caX)
case 3:u=C.b_y(C.hdB(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caX,v)},
lE:function lE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ir:function ir(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
caS:function caS(){},
caR:function caR(){},
ia:function ia(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
caQ:function caQ(){},
caP:function caP(){},
caU:function caU(){},
caV:function caV(){},
caW:function caW(){},
b8S:function b8S(d){this.a=d},
Vj:function Vj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDt:function aDt(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
e0f:function e0f(){},
e0g:function e0g(){},
e09:function e09(d){this.a=d},
e0a:function e0a(d){this.a=d},
e_T:function e_T(d,e){this.a=d
this.b=e},
e_U:function e_U(d){this.a=d},
e_V:function e_V(d,e,f){this.a=d
this.b=e
this.c=f},
e_S:function e_S(d){this.a=d},
e06:function e06(d,e){this.a=d
this.b=e},
e07:function e07(d,e){this.a=d
this.b=e},
e08:function e08(d){this.a=d},
e00:function e00(d){this.a=d},
e01:function e01(d,e,f){this.a=d
this.b=e
this.c=f},
e0_:function e0_(d,e){this.a=d
this.b=e},
e05:function e05(d,e,f){this.a=d
this.b=e
this.c=f},
e04:function e04(d,e){this.a=d
this.b=e},
e03:function e03(d,e){this.a=d
this.b=e},
e02:function e02(d,e,f){this.a=d
this.b=e
this.c=f},
e_X:function e_X(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d){this.a=d},
e0e:function e0e(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0c:function e0c(){},
e0b:function e0b(d,e){this.a=d
this.b=e},
Ps:function Ps(d,e){this.c=d
this.a=e},
baI:function baI(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cMQ:function cMQ(d){this.a=d},
cMP:function cMP(d,e){this.a=d
this.b=e},
cMN:function cMN(d,e){this.a=d
this.b=e},
cMR:function cMR(d){this.a=d},
cMO:function cMO(d,e){this.a=d
this.b=e},
cMM:function cMM(d,e){this.a=d
this.b=e},
cMS:function cMS(d){this.a=d},
cMT:function cMT(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f){this.c=d
this.d=e
this.a=f},
aFr:function aFr(){this.d=$
this.c=this.a=null},
eT2:function eT2(d,e){this.a=d
this.b=e},
eT3:function eT3(d){this.a=d},
eT9:function eT9(){},
eT8:function eT8(d,e){this.a=d
this.b=e},
eT7:function eT7(d,e){this.a=d
this.b=e},
eT4:function eT4(d,e){this.a=d
this.b=e},
eT6:function eT6(d,e,f){this.a=d
this.b=e
this.c=f},
eT5:function eT5(d,e,f){this.a=d
this.b=e
this.c=f},
a_S:function a_S(d,e){this.c=d
this.a=e},
aFq:function aFq(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eSX:function eSX(d){this.a=d},
eSY:function eSY(d,e){this.a=d
this.b=e},
eT0:function eT0(d,e){this.a=d
this.b=e},
eT1:function eT1(d){this.a=d},
eT_:function eT_(d,e){this.a=d
this.b=e},
hI9(d){var w=new A.M(d,new C.caM(),A.S(d).k("M<1,m>")).aG(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
caN(d,e,f){return C.hIa(d,e,f)},
hIa(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$caN=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Kf([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qT(A.n7(b3),C.hI9(b6)+"\n\nAdmin instruction:\n"+b4,B.hG,null,null),$async$caN)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Kf([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.d1(s,"```"))s=B.a.ei(J.h7r(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.S.aL(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Kf([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a2(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.cn(n)){a3=A.a([],x.Y)
u=new A.Kf([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=A.a2(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.u(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=A.a2(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gR(a9)
J.cf(a0,C.hdz(A.a2(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lE("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.u(f)
b1=J.q(e,"question")
J.cf(g,new C.ir("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.A(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hI8(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.dU(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.ia(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new A.Kf([m,null,p,a3])
w=1
break}catch(b7){a2=A.ab(b7)
a3=A.u(a2)
a4=A.a([],x.Y)
u=new A.Kf([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$caN,v)},
hI8(d){switch(d){case"investments":return G.C2
case"games":return B.oZ
case"loans":return B.jK
case"withdrawals":return B.hF
case"deposits":return B.kz
case"civic":return B.l4
case"store":return B.l3
case"jobs":return B.rp
case"refunds":return B.mC
case"account":return B.eT
case"music":return B.lY
default:return B.ym}},
i7C(d,e,f){var w,v,u,t=A.bp(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=B.d.bg(t,new C.fEN(f))
if(w>=0){t[w]=J.fs(e).cJz(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bc_(u)
return t},
caM:function caM(){},
fEN:function fEN(d){this.a=d},
d3v:function d3v(d){this.a=d},
Vk:function Vk(d,e,f){this.c=d
this.d=e
this.a=f},
aDv:function aDv(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
e0Q:function e0Q(){},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0A:function e0A(d,e,f){this.a=d
this.b=e
this.c=f},
e0s:function e0s(){},
e0t:function e0t(){},
e0u:function e0u(){},
e0v:function e0v(){},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0M:function e0M(){},
e0N:function e0N(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0C:function e0C(d,e){this.a=d
this.b=e},
hQ_(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).l3(0,d),w=new A.JK(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cs:B.aJ
m.push(new A.eu(p,n,n,B.cP,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cs:B.aJ
m.push(new A.eu(p,n,n,B.cP,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,B.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cs:B.aJ
m.push(new A.eu(p,n,n,B.cP,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,B.cF,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cs:B.aJ
m.push(new A.eu(p,n,n,B.cP,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mP,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b6(d,t)
m.push(A.cZ(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cs:B.aJ,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tF(n,n,n,B.eH,n,n,!0,n,A.cZ(m,n,n,n,n,n,n,n,n,n,n),B.a4,n,n,B.di,B.c3)},
dhU:function dhU(d){this.a=d},
aB4:function aB4(d,e){this.a=d
this.b=e},
aq1:function aq1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDu:function aDu(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0r:function e0r(){},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0m:function e0m(){},
e0o:function e0o(){},
e0n:function e0n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0l:function e0l(d,e){this.a=d
this.b=e},
aB2:function aB2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
abR:function abR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_w:function b_w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
caO:function caO(d){this.a=d},
abJ:function abJ(d,e,f){this.c=d
this.d=e
this.a=f},
cGw:function cGw(d){this.a=d},
cGx:function cGx(){},
cGy:function cGy(d){this.a=d},
aB3:function aB3(d,e,f){this.c=d
this.d=e
this.a=f},
bgN:function bgN(){this.c=this.a=this.d=null},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhX:function dhX(d,e){this.a=d
this.b=e},
dhW:function dhW(d){this.a=d},
hJH(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hJI(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hJG(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hlO(d){var w
if(new A.a_(A.a(d.split("\n"),x.s),new C.fkI(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
i8L(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hJG(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aqP:function aqP(d,e){this.a=d
this.b=e},
IM:function IM(d,e){this.a=d
this.b=e},
rv:function rv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkI:function fkI(){},
aq4:function aq4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDw:function aDw(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bt$=i
_.a9$=j
_.c=_.a=null},
e13:function e13(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e0X:function e0X(){},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(){},
e10:function e10(d,e){this.a=d
this.b=e},
e11:function e11(d){this.a=d},
e12:function e12(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e){this.a=d
this.b=e},
e17:function e17(){},
e18:function e18(d,e){this.a=d
this.b=e},
e19:function e19(d,e){this.a=d
this.b=e},
e16:function e16(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e1c:function e1c(d){this.a=d},
e1b:function e1b(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0T:function e0T(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e14:function e14(d,e){this.a=d
this.b=e},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
aLC:function aLC(){},
caZ(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$caZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.RU
w=1
break}w=3
return A.b(A.ay(),$async$caZ)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aU(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.RU
w=1
break}try{q=A.a2(x.f.a(B.S.aL(0,t,null)),x.N,x.z)
p=J.A(q.h(0,"contacts"),!0)
o=J.A(q.h(0,"calendar"),!0)
n=J.A(q.h(0,"calls"),!0)
q=J.A(q.h(0,"allGrantedOnce"),!0)
u=new C.Vl(p,o,n,q)
w=1
break}catch(l){s=A.ab(l)
$.am.$1("[helper-perms] load: "+A.u(s))
u=D.RU
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$caZ,v)},
aq5(d,e){var w=0,v=A.j(x.H),u
var $async$aq5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ay(),$async$aq5)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.S.ao(e.ag(),null)),$async$aq5)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aq5,v)},
caY(d){var w=0,v=A.j(x.gp),u,t
var $async$caY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Vl(!0,!0,!0,!0)
w=3
return A.b(C.aq5(d,t),$async$caY)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caY,v)},
hrG(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hrE(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Vl:function Vl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bDE(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bDE=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.b_s(h),$async$bDE)
case 3:if(j){w=1
break}w=4
return A.b(C.apY(h),$async$bDE)
case 4:if(d.e==null){w=1
break}t=A.qA(d,!0)
t.toString
s=A.dj()
s.b=A.or(new C.fQW(g,e,f,s),!1,!1)
t.lV(0,s.bj())
case 1:return A.h(u,v)}})
return A.i($async$bDE,v)},
fQW:function fQW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQV:function fQV(d){this.a=d},
ZC:function ZC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAu:function aAu(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
dfe:function dfe(d){this.a=d},
dff:function dff(d,e,f){this.a=d
this.b=e
this.c=f},
dfk:function dfk(){},
dfj:function dfj(d){this.a=d},
dfg:function dfg(d){this.a=d},
dfh:function dfh(){},
dfi:function dfi(d){this.a=d},
aKv:function aKv(){},
hJ9(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aK(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hJ8(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
aqB(d){return C.hJ6(d)},
hJ6(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aqB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f7("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bJ),$async$aqB)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
$.am.$1("[local deposit qr] load: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqB,v)},
b0n(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b0n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hJ9(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f7("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bJ),$async$b0n)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.A(J.q(r,"redeemed"),!0)){u=null
w=1
break}p=J.q(r,"token")
p=B.a.i(J.k(p==null?"":p))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ab(m)
$.am.$1("[local deposit qr] code lookup: "+A.u(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b0n,v)},
hdZ(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b6(v,14))
return w.length===0?null:w}return null},
hJ7(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b4(e,new C.ccM(B.a.i(d.toLowerCase()),w))},
he_(d,e,f,g,h){var w,v,u=J.a4(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pV(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pV(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pV(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pV(!1,0,"Verification code does not match this deposit.")
if(!C.hJ7(e,d,w))return new C.pV(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fYm(d,e){var w,v,u="amount",t=J.a4(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dGs
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aJ(t.h(d,u))
return new C.NM(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aJ(t.h(d,u))
return new C.NM(!0,!1,!0,!1)}A.aJ(t.h(d,u))
return new C.NM(!0,!1,!1,!1)},
ccS(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$ccS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.hdZ(d)
if(s==null){u=D.RW
w=1
break}w=3
return A.b(C.aqB(s),$async$ccS)
case 3:t=g
if(t==null){u=D.RW
w=1
break}u=C.fYm(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ccS,v)},
b0p(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$b0p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b0n(d),$async$b0p)
case 3:s=g
if(s==null||s.length===0){u=D.RW
w=1
break}w=4
return A.b(C.aqB(s),$async$b0p)
case 4:t=g
if(t==null){u=D.RW
w=1
break}u=C.fYm(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0p,v)},
ccT(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$ccT=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b0n(d),$async$ccT)
case 3:t=j
if(t==null||t.length===0){u=new C.pV(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.VG(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ccT,v)},
VG(d,e,f,g,h){return C.hJa(d,e,f,g,h)},
hJa(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$VG=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hdZ(a4)
if(a0==null){u=new C.pV(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.aqB(a0),$async$VG)
case 3:k=a8
if(k==null){u=new C.pV(!1,0,y.m)
w=1
break}j=C.fYm(k,a5)
if(j.b){u=new C.pV(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pV(!1,0,y.u)
w=1
break}if(j.c){u=new C.pV(!1,0,y.j)
w=1
break}i=C.he_(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aJ(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pV(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.T(Date.now(),0,!1).a6().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f7("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bJ),$async$VG)
case 8:p=a8
if(p==null){u=new C.pV(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pV(!1,0,"This deposit code was already used.")
w=1
break}o=C.he_(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dQ(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hJ("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cI,null),$async$VG)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return A.b(A.hJ("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.F(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cI,null),$async$VG)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.ab(a1)
$.am.$1("[local deposit qr] redeem: "+A.u(l))
u=new C.pV(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pV(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$VG,v)},
NM:function NM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pV:function pV(d,e,f){this.a=d
this.b=e
this.c=f},
ccM:function ccM(d,e){this.a=d
this.b=e},
cd_(d,e){var w
A.h3B(d,e,!1)
A.qS(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.AV(!0,!1,d.d,w)},
a7I(d,e){if(d==null)return!1
return A.bA(d)===e.gcj()&&A.bH(d)===e.gcf()&&A.bT(d)===e.gcw()},
hJi(d){var w=A.dk(d)*60+A.h4(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
he6(d){if(A.dk(d)>=12)return!1
if(A.mB(d)===6||A.mB(d)===7)return!1
return!0},
cd3(d){var w=d.c?d.bU():d
return w.d_(A.c1(A.bA(w),A.bH(w),A.bT(w),12,0,0,0,0))},
fYq(d,e){var w,v,u,t=d.gCl()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a7I(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cd3(w))return 0
v=A.c1(e.gcj(),e.gcf(),e.gcw(),12,0,0,0,0)
if(!e.d_(v))return t
if(!e.cd(w))return 0
u=B.o.am(v.bC(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.am(e.bC(w).a,1000),0,u)/u),0,t)},
fYp(d,e){var w,v,u,t,s,r,q,p=new A.T(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a7I(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b4(e,new C.ccZ(s))&&C.cd3(t)){r=d.gCl()
v=r>0
if(v){q=new A.d4(s,d.a,r,B.fI,B.fh,"Clock-in daily earnings (local)",null,null,B.cr,p)
C.cd_(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a7I(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a7I(o,p)&&!C.cd3(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
ccZ:function ccZ(d){this.a=d},
hXX(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gI(v.split("@"))
return"Member"},
idY(d,e,f,g,h,i){return A.hE(d,new C.aqC(f,e,i,g,h,null),!0,null,x.H)},
hin(d){var w,v,u=d.c?d.bU():d,t=A.dk(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bH(u)+"/"+A.bT(u)+"/"+A.bA(u)+" \xb7 "+w+":"+B.a.aY(B.o.u(A.h4(u)),2,"0")+" "+v},
hpz(d){var w=d.x
if(w===B.dv)return"Processing"
if(w===B.kk)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
i5e(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fu)return"Deposit"
if(w===B.eP)return"Withdrawal"
return v.length!==0?v:w.b},
hXC(d){var w=d.d,v=w===B.fu||w===B.oA||w===B.fI||w===B.kl,u=d.x
if(u===B.dv)return w===B.eP?-d.c:0
if(u!==B.cr)return 0
w=d.c
return v?w:-w},
i5N(d,e){var w,v,u,t,s,r,q=A.C(d,x.o)
B.d.b_(q,new C.fAN())
w=A.U(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.L)(q),++t,v=r){s=q[t]
r=v-C.hXC(s)
if(r<0)r=0
w.n(0,s.a,new A.boc(v,r))}return w},
aqC:function aqC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDT:function aDT(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
efE:function efE(d){this.a=d},
egk:function egk(d){this.a=d},
egl:function egl(d){this.a=d},
egm:function egm(d){this.a=d},
eg2:function eg2(d,e){this.a=d
this.b=e},
eg3:function eg3(){},
eg4:function eg4(d){this.a=d},
eg5:function eg5(){},
eg6:function eg6(d){this.a=d},
eg7:function eg7(d,e,f){this.a=d
this.b=e
this.c=f},
eg8:function eg8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efY:function efY(d,e){this.a=d
this.b=e},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
efZ:function efZ(){},
eg_:function eg_(){},
eg0:function eg0(d){this.a=d},
eg1:function eg1(){},
efJ:function efJ(d,e){this.a=d
this.b=e},
efK:function efK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efS:function efS(){},
efP:function efP(d){this.a=d},
efQ:function efQ(d,e){this.a=d
this.b=e},
efR:function efR(d,e){this.a=d
this.b=e},
efT:function efT(d){this.a=d},
efU:function efU(d,e,f){this.a=d
this.b=e
this.c=f},
efV:function efV(d){this.a=d},
efX:function efX(d){this.a=d},
efW:function efW(d){this.a=d},
efL:function efL(d){this.a=d},
efM:function efM(d,e,f){this.a=d
this.b=e
this.c=f},
egc:function egc(){},
egd:function egd(){},
egh:function egh(d){this.a=d},
ega:function ega(d){this.a=d},
egi:function egi(d){this.a=d},
eg9:function eg9(d){this.a=d},
egj:function egj(d){this.a=d},
ege:function ege(d){this.a=d},
egf:function egf(d){this.a=d},
egg:function egg(d){this.a=d},
egb:function egb(d){this.a=d},
efI:function efI(d){this.a=d},
efH:function efH(d){this.a=d},
efG:function efG(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
aBg:function aBg(d,e,f,g,h,i,j,k,l,m){var _=this
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
djI:function djI(){},
djJ:function djJ(){},
djK:function djK(d,e,f){this.a=d
this.b=e
this.c=f},
djH:function djH(d){this.a=d},
djL:function djL(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
aBf:function aBf(d,e,f,g,h,i,j,k,l,m){var _=this
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
bhv:function bhv(d,e){var _=this
_.f=_.e=_.d=$
_.cR$=d
_.b5$=e
_.c=_.a=null},
djB:function djB(d){this.a=d},
djC:function djC(d){this.a=d},
djD:function djD(d){this.a=d},
djE:function djE(){},
djF:function djF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
djA:function djA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
djz:function djz(d){this.a=d},
bbe:function bbe(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bbd:function bbd(d,e,f){this.b=d
this.d=e
this.a=f},
bbc:function bbc(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aBh:function aBh(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aBi:function aBi(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dk1:function dk1(){},
dk2:function dk2(){},
dk3:function dk3(){},
djO:function djO(d){this.a=d},
djN:function djN(d,e){this.a=d
this.b=e},
djM:function djM(d,e){this.a=d
this.b=e},
djZ:function djZ(d,e){this.a=d
this.b=e},
dk0:function dk0(d,e){this.a=d
this.b=e},
dk_:function dk_(d,e){this.a=d
this.b=e},
djY:function djY(){},
djX:function djX(d){this.a=d},
djW:function djW(){},
djR:function djR(d){this.a=d},
djS:function djS(){},
djT:function djT(d){this.a=d},
djU:function djU(d){this.a=d},
djQ:function djQ(){},
djV:function djV(d){this.a=d},
djP:function djP(d){this.a=d},
baD:function baD(d){this.a=d},
fAN:function fAN(){},
bvi:function bvi(d,e){this.b=d
this.a=e},
aKL:function aKL(){},
bxf:function bxf(){},
i1M(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.br(d,new C.fts(v,g))
w=A.U(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.T(Date.now(),0,!1).ac())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.L(d,w)},
aOT(d){var w,v=J.a4(d),u=A.aJ(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.D(t-(w==null?0:w),0,t)},
icF(d,e){var w=A.S(e).k("a_<1>")
w=A.C(new A.a_(e,new C.fLf(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
ahi(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
if(C.aOT(u)<=0){t=J.cF(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
i4t(d,e){var w,v,u,t=J.a4(d),s=t.h(d,"status")
if(!J.A(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.A(s==null?"":s,"complete"))return!1
if(C.aOT(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aOT(d)>0},
i4s(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a4(d),h=A.aJ(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aJ(i.h(d,"matchesPlayed"))
w=h==null?null:B.k.N(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.a2(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a2(p,s,r):A.U(s,r)
h=q.h(0,"player1Email")
if(h==null)h=q.h(0,"playerXEmail")
if(h==null)h=i.h(d,"fromEmail")
n=B.a.i(J.k(h==null?"":h).toLowerCase())
h=q.h(0,"player2Email")
if(h==null)h=q.h(0,"playerOEmail")
i=h==null?i.h(d,"toEmail"):h
m=B.a.i(J.k(i==null?"":i).toLowerCase())
if(n===u&&m.length!==0)l=m
else l=m===u&&n.length!==0?n:null
k=J.A(o.h(0,u),!0)
j=l!=null&&J.A(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
i1L(d,e){var w
C.ahi(e)
w=A.S(e).k("a_<1>")
w=A.C(new A.a_(e,new C.ftr(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
u6(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gR(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hZh(d,e,f){var w,v,u,t="fromName",s=J.a4(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(f,"toEmail")
w=B.a.i(J.k(r==null?"":r).toLowerCase())
r=d.h(0,"player1Email")
if(r==null)r=d.h(0,"playerXEmail")
v=B.a.i(J.k(r==null?q:r).toLowerCase())
r=d.h(0,"player2Email")
if(r==null)r=d.h(0,"playerOEmail")
u=B.a.i(J.k(r==null?w:r).toLowerCase())
if(e===v){r=d.h(0,"player1Name")
if(r==null)r=d.h(0,"playerXName")
s=r==null?s.h(f,t):r
return B.a.i(J.k(s==null?"":s))}if(e===u){r=d.h(0,"player2Name")
if(r==null)r=d.h(0,"playerOName")
s=r==null?s.h(f,"toName"):r
return B.a.i(J.k(s==null?"":s))}if(e===q){s=s.h(f,t)
return B.a.i(J.k(s==null?"":s))}if(e===w){s=s.h(f,"toName")
return B.a.i(J.k(s==null?"":s))}return""},
h3g(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a4(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hZh(x.f.b(u)?A.a2(u,r,q):A.U(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bCs(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bCs=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bCs)
case 7:r=e
q=A.aU(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.U(k,k)
w=1
break}p=B.S.aL(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.U(k,k)
w=1
break}k=x.N
o=A.U(k,k)
for(k=J.aV(p),j=x.f;k.C();){n=k.gR(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ad(m)!==0&&J.ad(l)!==0)J.aG(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=A.U(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCs,v)},
bBx(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bCs(),$async$bBx)
case 3:u=t.h3g(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBx,v)},
KZ(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$KZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hn2.h(0,q)
if(p!=null){t=new A.T(Date.now(),0,!1).bC(p)
t=t.a>A.dE(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hn2.n(0,q,new A.T(Date.now(),0,!1))
w=5
return A.b(A.QL(B.ca,q),$async$KZ)
case 5:case 4:s=$.hn1.h(0,q)
if(s==null){u=C.u6(e,q)
w=1
break}r=C.u6(A.bBD(e,A.a([s],x._)),q)
if(r!=null)A.h5H(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KZ,v)},
icU(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.T(Date.now(),0,!1).ac())
return}}},
hVX(d,e){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.F(["ttt",A.c2(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e2(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c2(7,0,!1,q)
return A.F(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e2(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.fig(r),!0,q)
return A.F(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.F(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
i1K(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.T(Date.now(),0,!1).ac())
r=C.hVX(u,f)
w=t.h(u,"fromEmail")
q=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.h(u,"toEmail")
p=B.a.i(J.k(w==null?"":w).toLowerCase())
w=r.h(0,l)
if(w==null)w=r.h(0,"playerXEmail")
o=B.a.i(J.k(w==null?q:w).toLowerCase())
w=r.h(0,k)
if(w==null)w=r.h(0,"playerOEmail")
n=B.a.i(J.k(w==null?p:w).toLowerCase())
w=o.length!==0
if(w)r.n(0,l,o)
s=n.length!==0
if(s)r.n(0,k,n)
m=A.U(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new A.T(Date.now(),0,!1).ac())
return}}},
icS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aJ(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aJ(t.h(u,"matchesTotal"))
q=w==null?null:B.k.N(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a2(p,w,s)
o.n(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=B.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=B.a.i(J.k(n==null?"":n).toLowerCase())
k=A.U(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",A.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.T(Date.now(),0,!1).ac())
return}},
h5G(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a2(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.T(Date.now(),0,!1).ac())
return}}},
fJY(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fJY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ahi(d)
t=$.h2y
if(t==null)s=$.h2y=A.QL(B.ca,null).fj(new C.fJZ())
else s=t
w=3
return A.b(s,$async$fJY)
case 3:r=f
if(r==null){u=A.bp(new A.M(d,new C.fK_(),A.S(d).k("M<1,@>")),!0,x.P)
w=1
break}q=A.bBD(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJY,v)},
ahj(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ahj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ahi(d)
t=A.S(d).k("M<1,a6<m,@>>")
t=A.C(new A.M(d,new C.fHU(),t),t.k("ak.E"))
w=3
return A.b(A.QL(t,null),$async$ahj)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bBD(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahj,v)},
aPM(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aPM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.h5G(d,e,f)
t=C.u6(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.QL(A.a([A.a2(t,x.N,x.z)],x._),e),$async$aPM)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.u6(s,e)
if(r!=null)A.h5H(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aPM,v)},
i9t(d,e,f){var w
C.h5G(d,e,f)
w=$.h2l.h(0,e)
if(w!=null)w.a7(0)
$.h2l.n(0,e,A.cM(B.lT,new C.fHV(e,d)))},
fY7(d,e){return new C.b_a(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fts:function fts(d,e){this.a=d
this.b=e},
fLf:function fLf(d){this.a=d},
ftr:function ftr(d){this.a=d},
fig:function fig(d){this.a=d},
fJZ:function fJZ(){},
fK_:function fK_(){},
fHU:function fHU(){},
fHV:function fHV(d,e){this.a=d
this.b=e},
b_a:function b_a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
idm(d,e,f){return A.bR(B.K,null,new C.fMn(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fMn:function fMn(d,e){this.a=d
this.b=e},
a_p:function a_p(d,e,f){this.c=d
this.d=e
this.a=f},
aDG:function aDG(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e9U:function e9U(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea_:function ea_(d,e){this.a=d
this.b=e},
e9V:function e9V(d,e){this.a=d
this.b=e},
i8_(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.is
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.is
v=Date.now()
u=C.hYB(w,new A.T(v,0,!1))
v=x.N
return A.a([new A.ku("calendar",A.F(["title",C.hYA(t,w),"start",u.ac(),"end",u.bS(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hYA(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cG(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hnP(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cG(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hnP(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
hnP(d){var w
if(d.length===0)return d
w=B.a.fI(d,A.af("\\s+",!0,!1,!1,!1))
return new A.M(w,new C.fsC(),A.S(w).k("M<1,m>")).aG(0," ")},
hYB(d,e){var w,v,u,t,s,r,q,p,o=A.c1(A.bA(e),A.bH(e),A.bT(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bS(864e8)
else if(!B.a.t(d,"today"))for(w=D.aEL.gdM(D.aEL),w=w.gae(w);w.C();){v=w.gR(w)
u=v.a
if(A.cT(d,u,0)){t=C.hXB(o,v.b)
o=t
break}}s=A.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(d)
if(s!=null){w=s.b
v=w[1]
r=A.c8(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c8(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.c1(A.bA(o),A.bH(o),A.bT(o),r,q,0,0,0)},
hXB(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mB(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbq())u=s===t.gbq()&&w.b<t.gcC()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fsC:function fsC(){},
i80(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.is
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cG(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aK(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hUN(w,j)
if(q==null||q.length===0)return B.is
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.ku("call",A.F(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.F(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.ku(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.ku("call",A.F(["name",q],t,t))],x.Z)}return B.is},
hUN(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cG(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:B.a.i(u)
if(t==null)t=""
u=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=B.a.i(A.aK(t,u,""))
u=A.af("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=B.a.i(A.aK(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=A.af("^\\d+$",!0,!1,!1,!1)
s=A.af("\\s",!0,!1,!1,!1)
s=A.aK(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.i14(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
i14(d){var w=B.a.fI(d,A.af("\\s+",!0,!1,!1,!1))
return new A.M(w,new C.fsB(),A.S(w).k("M<1,m>")).aG(0," ")},
fsB:function fsB(){},
hrN(d){var w=new A.M(d,new C.fKf(),A.S(d).k("M<1,a6<m,@>>")).c0(0,new C.fKg())
w=A.C(w,w.$ti.k("J.E"))
return w},
fKf:function fKf(){},
fKg:function fKg(){},
i83(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.is
w=B.a.i(d)
if(w.length===0)return B.is
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.is
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cG(w)
if(u==null)return B.is
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cG(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cG(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.U(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.ku("send_email",t)],x.Z)},
i7c(d,e){var w
if(e)return d
w=J.dJ(d,new C.fEa())
w=A.C(w,w.$ti.k("J.E"))
return w},
fEa:function fEa(){},
i9q(d){switch(d){case"blackjack_vegas":return D.dKs
case"roulette_euro":return D.dKc
case"slots_jackpot":return D.dKj
case"poker_texas":return D.dKm
case"chess_royale":return D.dKd
case"connect_four_pro":return D.dKe
case"domino_block":return D.dKg
case"plinko_prizes":return D.dKo
case"spin_wheel":return D.dKl
case"baccarat_punto":return D.dKf
case"craps_table":return D.dKn
case"casino_war":return D.dKh
case"bingo_live":return D.dKk
case"solitaire_klondike":return D.dKr
case"backgammon_pro":return D.dKb
case"billiards_snooker":return D.dKp
case"profit_solve":return D.dKq
default:return D.dKi}},
fHL(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.n(8)
v=A.I(B.aM,B.q,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.en,6)],x.V)
return A.p(p,A.av(A.X(B.my,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bZd,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.E(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.E(t,4)]
q=s?B.bz:B.M
w=A.n(8)
v=A.I(B.aL,B.q,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.en,6)],x.V)
return A.p(p,A.x(A.a([new A.D(D.byj,A.d(D.cwo[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b8,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b8],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.i3,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
iau(d,e){var w,v=null,u=A.n(18),t=A.I(B.aM,B.q,3),s=A.a([new A.ac(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.S(e).k("M<1,he>")
r=A.C(new A.M(e,new C.fJH(),r),r.k("ak.E"))
w=x.p
return A.x(A.a([A.p(v,A.x(A.a([D.fmZ,B.ac,A.B(r,B.m,v,B.b9,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bZz,B.n),v,v,v,v,I.aiz,v,v,v),B.aB,A.dn(B.aop,D.fnA,d,A.bo(B.aM,v,v,v,B.dy,v,Ai.Zw,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
p9:function p9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bqf:function bqf(d,e){this.b=d
this.a=e},
fJH:function fJH(){},
hJT(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e2(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c2(8,0,!1,w)
u=A.c2(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e2(6,o)
for(v=0;v<6;++v)q[v]=A.c2(7,0,!1,w)
return new C.aqY(A.U(p,x.z),n,u,s,r,t,q,new A.as(B.as,$.aw()))},
i2s(d,e,f,g,h){var w=new C.fuQ(f,h)
switch(d){case"checkers_deluxe":return C.hTp(h,g,e,w)
case"tic_tac_go":return C.i1f(h,g,e,w)
case"blackjack_vegas":return C.hSP(h,g,e,new C.fuK(w))
case"roulette_euro":return C.i_x(h,g,e,new C.fuL(w))
case"slots_jackpot":return C.i0n(h,g,e,new C.fuM(w))
case"billiards_snooker":return C.hZk(h,g,e,new C.fuN(w))
case"connect_four_pro":return C.hTQ(h,g,e,w)
case"profit_solve":return C.hZn(h,g,e,new C.fuO(w))
default:return C.hTm(d,h,g,e,new C.fuP(w))}},
hTp(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),u=A.n(12),t=A.I(D.Xc,B.q,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.x(A.a([new A.D(B.eK,v,w),A.E(A.av(new A.fM(1,A.p(w,A.by(A.n(6),A.im(!0,w,w,B.y,D.eY1,new C.ffy(d,e,f,g),64,w,B.dT,B.ag,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
i1f(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eK,A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),w),A.E(A.av(new A.fM(1,A.cq(new C.fsM(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hSP(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.wD,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.M(q,new C.ff2(),A.S(q).k("M<1,t>")))
else B.d.v(s,A.a([C.fHL(q[0],!1),B.bp,C.fHL(0,!0)],t))
s=A.B(s,B.m,v,B.b9,B.j,0,v,v)
r=A.d("Total: "+d.a3j(d.ay),v,v,v,v,v,v,D.fi8,v,v,v)
q=d.ay
w=A.S(q).k("M<1,t>")
q=A.C(new A.M(q,new C.ff3(),w),w.k("ak.E"))
q=A.bS(B.fJ,q,B.bq,6,6)
return A.x(A.a([new A.D(B.eK,u,v),D.ftR,B.am,s,B.aB,D.fBe,r,B.am,q,B.b8,A.B(A.a([A.E(A.bG(D.fo1,d.CW?v:new C.ff4(d,e,f,g),v),1),B.ab,A.E(A.bG(D.fDE,new C.ff5(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
i_x(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cC,16)],x.V)
t=A.a([new A.D(B.eK,v,w),A.p(w,A.b3(w,w,w,new C.bqf(u,w),B.ax),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.D(B.jI,A.d("Result: "+A.u(v),w,w,w,w,w,w,D.f67,w,w,w),w))
t.push(B.ac)
t.push(A.bS(B.fJ,A.ip(6,new C.fpW(d,e,f,g),!0,x.l),B.bq,6,6))
return A.x(t,B.m,w,B.e,B.j,0,B.p)},
i0n(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),u=d.db,t=A.S(u).k("M<1,m>")
u=A.C(new A.M(u,new C.frQ(),t),t.k("ak.E"))
return A.x(A.a([new A.D(B.eK,v,w),C.iau(new C.frR(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hZk(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),u=A.n(20),t=A.I(B.fA,B.q,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dp,18)],s),q=x.p
return A.x(A.a([new A.D(B.eK,v,w),A.E(A.p(w,new A.an(B.W,w,B.aa,B.r,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.b0N,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.abK,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eJ(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.n(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.ejK,B.n),w,w,w,B.eS,w,w,w,w),1),A.l1(B.bc,w,w,1,0,new C.foG(d,f),d.dy),A.bG(D.fsT,new C.foH(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hTQ(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.wD,B.L,v,v),t=x.l,s=J.e2(7,t)
for(w=0;w<7;++w)s[w]=new A.bB(1,B.bg,A.aB(v,A.x(A.ip(6,new C.ffZ(d,w),!0,t),B.m,v,B.m3,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fg_(d,w,e,f,g),v,v,v,v,v,v,!1,B.a5),v)
return A.x(A.a([new A.D(B.eK,u,v),A.E(A.av(new A.fM(1.1666666666666667,A.B(s,B.dz,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hZn(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eK,A.d(d.c,w,w,w,w,w,w,D.wD,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.ki,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aRu,B.L,w,w),A.aM(w,B.U,!1,w,!0,B.r,w,A.aN(),d.id,w,w,w,w,w,2,D.bV_,B.y,!0,w,!0,w,!1,w,B.aj,w,w,w,w,w,B.dQ,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.foT(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,B.dg,!0,B.a4,w,B.an,w,w,w,w),A.bG(D.frv,new C.foU(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hTm(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkc(),k=e.d
k=k==null?n:k.c
w=C.i9q(d)
v=D.aEA.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.lE,B.L,n,n)
u=A.n(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.q,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eV,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,Y.TW,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.nD,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.u(k)+" at the table"
k=x.p
q=A.E(A.av(A.p(n,A.x(A.a([p,B.R,o,B.O,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d8,A.X(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a9(B.b1,B.b5,B.x,t,n,n),B.n),n,n,n,B.eS,B.a9,n,n,1/0),n,n,n),1)
return A.x(A.a([m,B.ac,q,B.O,new A.a7(1/0,n,A.bG(D.fCL,new C.ffs(f,e,g,h),A.bo(s,n,n,n,B.d.gI(t).jo()>0.4?B.w:B.c,n,B.cm,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
EE:function EE(d,e){this.a=d
this.b=e},
aqY:function aqY(d,e,f,g,h,i,j,k){var _=this
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
cey:function cey(){},
cez:function cez(){},
cex:function cex(){},
ceA:function ceA(){},
cew:function cew(){},
ceC:function ceC(){},
ceD:function ceD(){},
cev:function cev(d){this.a=d},
ceB:function ceB(){},
ceu:function ceu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuQ:function fuQ(d,e){this.a=d
this.b=e},
fuK:function fuK(d){this.a=d},
fuL:function fuL(d){this.a=d},
fuM:function fuM(d){this.a=d},
fuN:function fuN(d){this.a=d},
fuO:function fuO(d){this.a=d},
fuP:function fuP(d){this.a=d},
ffy:function ffy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffx:function ffx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsM:function fsM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsL:function fsL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsK:function fsK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ff2:function ff2(){},
ff3:function ff3(){},
ff4:function ff4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff5:function ff5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpW:function fpW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpV:function fpV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frQ:function frQ(){},
frR:function frR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foG:function foG(d,e){this.a=d
this.b=e},
foH:function foH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fg_:function fg_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffZ:function ffZ(d,e){this.a=d
this.b=e},
foT:function foT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foU:function foU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffs:function ffs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i5g(d){var w,v=A.S(d).k("a_<1>")
v=A.pj(new A.a_(d,new C.fzQ(),v),120,v.k("J.E"))
w=A.cD(v,new C.fzR(),A.a3(v).k("J.E"),x.N).aG(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fzQ:function fzQ(){},
fzR:function fzR(){},
ahu(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
arS:function arS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aEu:function aEu(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
eIc:function eIc(){},
aMi:function aMi(){},
hHS(){var w=$.Iz
if(w<=0)return;--w
$.Iz=w
if(w===0){w=$.hdo
if(w!=null)w.$0()}},
ca2(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
apB(d){var w=0,v=A.j(x.H),u,t
var $async$apB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fY2.L(0,t)
w=4
return A.b(A.ay(),$async$apB)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$apB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$apB,v)},
apA(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$apA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.ca2(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fY2.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ay(),$async$apA)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.jO(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apA,v)},
Vi(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$Vi)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.U(x.N,x.z)
w=1
break}p=B.S.aL(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
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
case 6:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Vi,v)},
b_r(d){return C.hI3(d)},
hI3(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$b_r=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$b_r)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.S.ao(d,null)),$async$b_r)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$b_r,v)},
b_p(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.ae3(0,new A.T(Date.now(),0,!1))
w=J.a4(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.T(Date.now(),0,!1)
return new A.ae3(typeof v=="number"?B.o.D(B.k.N(v),0,999999):0,t)},
b_q(d,e){if(B.o.am(e.bC(d.b).a,36e8)>=24)return new A.ae3(0,e)
return d},
caz(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$caz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Vi(),$async$caz)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.b_q(C.b_p(t,d),new A.T(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caz,v)},
caA(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$caA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Vi(),$async$caA)
case 3:t=g
s=Date.now()
r=C.b_q(C.b_p(t,d),new A.T(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caA,v)},
hI4(d){var w,v,u,t=d.a,s=B.o.am(t,1e6)
if(s<=0)return"0s"
w=B.o.am(t,36e8)
v=B.o.am(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aY(B.o.u(v),2,"0")+"m "+B.a.aY(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aY(B.o.u(u),2,"0")+"s"
return""+u+"s"},
b_s(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$b_s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Vi(),$async$b_s)
case 3:t=p.b_q(o.b_p(f,d),new A.T(Date.now(),0,!1))
w=4
return A.b(A.ay(),$async$b_s)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a6().ac()
u=A.jO(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_s,v)},
apY(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$apY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Vi(),$async$apY)
case 3:t=s.b_q(r.b_p(f,d),new A.T(Date.now(),0,!1))
w=5
return A.b(A.ay(),$async$apY)
case 5:w=4
return A.b(f.aq("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a6().ac(),!0),$async$apY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$apY,v)},
apZ(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$apZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Vi(),$async$apZ)
case 3:s=g
r=Date.now()
q=C.b_q(C.b_p(s,d),new A.T(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.F(["count",r+1,"windowStart",q.b.a6().ac()],x.N,x.K))
w=4
return A.b(C.b_r(s),$async$apZ)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apZ,v)},
ah5(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ah5=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.ff("")
if(!d.d){p=!0
if(!C.hrF(a0))if(!C.hrE(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hrF(a0)?3:4
break
case 3:o=C.i95(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c39(e,o),$async$ah5)
case 7:n=a2
p=J.a4(n)
if(p.gcl(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hbR(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gR(p)
l=h
k="- "+m.gVu()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.S4("text/plain"),$async$ah5)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+A.u(q)+"\n\n"
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
case 13:case 9:w=C.hrE(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a7l(e),$async$ah5)
case 17:m=f.hdw(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Uk(e),$async$ah5)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hbS(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah5,v)},
hJq(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cd8(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cd8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.heb(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f7("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bJ),$async$cd8)
case 7:r=f
if(r!=null){p=J.q(r,"token")
p=B.a.i(J.k(p==null?"":p))
u=p
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ab(m)
$.am.$1("[local growth income stash] code lookup: "+A.u(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cd8,v)},
aqF(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aqF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f7("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bJ),$async$aqF)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.ch.cB(0,B.cG.aK(q))
m=J.A(J.q(r,"live"),!0)
u=new A.aFU(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.ab(j)
$.am.$1("[local growth income stash] consume: "+A.u(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqF,v)},
b0w(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$b0w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hJq(q)?3:4
break
case 3:w=5
return A.b(C.cd8(q),$async$b0w)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.aqF(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.aqF(B.a.i(B.a.b6(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.aqF(B.a.i(B.a.b6(q,15))),$async$b0w)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aFU(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0w,v)},
her(d){var w=d.bI
if(w>=0)return w
return 1},
ahh(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$ahh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aPY(d,e),$async$ahh)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.GK(d,null,null,!1,!0,""),$async$ahh)
case 5:w=4
return A.b(t.$1(h),$async$ahh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ahh,v)},
i7Z(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.is
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(w)
if(!u&&t==null)return B.is
s=new A.T(Date.now(),0,!1)
r=A.dj()
q=A.dj()
p=C.hYz(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hmF(a1,w)
if(J.A(q.bj(),"Wake up")&&B.o.am(v,e)<=180)q.b="Reminder \u2014 "+B.o.am(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.ei(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hmG(v[2],v[4],v[3])
o=v[3]
m=A.c8(o==null?"":o,null)
if(m==null)m=0
l=A.c1(A.bA(s),A.bH(s),A.bT(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bS(a0)
r.b=A.c1(A.bA(l),A.bH(l),A.bT(l),n,m,0,0,0).bS(-36e8)
if(r.bj().d_(s.bS(e)))r.b=J.cf(r.bj(),B.o5)
v=C.i1J(v[1])
k=B.o.E(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aY(B.o.u(m),2,"0")+" "+j)}else{l=A.c1(A.bA(s),A.bH(s),A.bT(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bS(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cG(w)
if(i!=null){o=i.b
h=C.hmG(o[1],o[3],o[2])
o=o[2]
g=A.c8(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c1(A.bA(l),A.bH(l),A.bT(l),h,g,0,0,0)
r.b=f.d_(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hmF(a1,w)}}v=x.N
return A.a([new A.ku("alarm",A.F(["title",q.bj(),"start",r.bj().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hYz(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cG(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c8(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a0(r,"sec"))return new A.ba(1e6*B.o.D(s,5,86400))
if(B.a.a0(r,"hour")||B.a.a0(r,"hr"))return new A.ba(36e8*B.o.D(s,1,168))
return new A.ba(6e7*B.o.D(s,1,10080))}return null},
i1J(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
hmG(d,e,f){var w,v=A.c8(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hmF(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cG(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hJM(d){var w,v,u,t,s=J.a4(d)
if(s.gan(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kD(d,80),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ae,I,W,G,Af,X,F,Y,P,Ag,Ah,Z,Ai,Aj,Ak,Al,A_,A0,K
J=c[1]
A=c[0]
B=c[2]
A1=c[193]
L=c[32]
Q=c[185]
A2=c[196]
E=c[177]
M=c[187]
A3=c[110]
N=c[129]
A4=c[183]
R=c[35]
O=c[73]
S=c[79]
A5=c[80]
T=c[152]
A6=c[188]
U=c[179]
A7=c[191]
A8=c[189]
A9=c[190]
Aa=c[186]
Ab=c[182]
Ac=c[65]
V=c[167]
Ad=c[111]
C=a.updateHolder(c[5],C)
D=c[176]
H=c[27]
Ae=c[64]
I=c[181]
W=c[122]
G=c[133]
Af=c[192]
X=c[28]
F=c[180]
Y=c[140]
P=c[95]
Ag=c[178]
Ah=c[195]
Z=c[184]
Ai=c[197]
Aj=c[135]
Ak=c[194]
Al=c[131]
A_=c[72]
A0=c[56]
K=c[54]
C.brp.prototype={
oD(d,e){return this.a.$2(d,e)}}
C.Fh.prototype={
S(){return new C.aHY(this.$ti.k("aHY<Fh.T,Fh.S>"))}}
C.aHY.prototype={
Z(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hK(B.Fl,v,null,null,w.$ti.k("hK<1>"))
u.e=w
u.W0()},
bv(d){var w,v=this
v.bG(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aNt()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hK(B.Fl,w.b,w.c,w.d,w.$ti)}v.W0()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mf(d,w)},
q(){this.aNt()
this.a2()},
W0(){var w,v=this
v.d=v.a.c.lz(new C.f3t(v),new C.f3u(v),new C.f3v(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hK(B.Y0,w.b,w.c,w.d,w.$ti)},
aNt(){var w=this.d
if(w!=null){w.a7(0)
this.d=null}}}
C.avz.prototype={
mf(d,e){return this.e.$2(d,e)}}
C.al5.prototype={
S(){return C.hQl()},
bs(){return this.r.$0()}}
C.qM.prototype={}
C.aA9.prototype={
acU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hcX(r)
if(r.x==null||r.c6.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hcZ(s),$async$acU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acU,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aqD(t.a.c),$async$Xo)
case 3:if(e!=null&&t.c!=null)t.a.bs()
r=!C.ca2(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.apA(t.a.c),$async$Xo)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dbG(t,s))
if(!s)t.acU()
case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
acv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bCs(),$async$acv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dbR(t,s))
case 1:return A.h(u,v)}})
return A.i($async$acv,v)},
Z(){var w,v,u=this
u.bup()
$.tv=$.tv+1
w=u.a
$.bCx=w.c.a
w=w.d.b8
v=A.S(w).k("M<1,a6<m,@>>")
w=A.C(new A.M(w,new C.dc8(),v),v.k("ak.E"))
u.f=w
u.acv()
u.JF()
u.Xo()
u.e=A.dv(B.o4,new C.dc9(u))},
JF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.ahi(t.a.d.b8)
w=3
return A.b(C.fJY(t.a.d.b8),$async$JF)
case 3:s=e
if(t.c==null){w=1
break}C.ahi(t.a.d.b8)
if(s!=null)t.m(new C.dbZ(t,s))
else t.m(new C.dc_(t))
case 1:return A.h(u,v)}})
return A.i($async$JF,v)},
q(){C.b_c()
var w=this.e
if(w!=null)w.a7(0)
this.buo()},
ahu(d,e,f){return this.csX(d,e,f)},
csX(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ahu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b8
o=o.c
s=d.b
C.i1M(n,o.a,o.c,d.a,s,f,e,p)
t.a.bs()
w=3
return A.b(C.ahj(t.a.d.b8),$async$ahu)
case 3:if(t.c==null){w=1
break}t.m(new C.dc1(t))
r=f===1?"1 game":""+f+" games"
t.c.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ahu,v)},
Iu(d,e){return this.ce_(d,e)},
c1G(d){return this.Iu(d,null)},
ce_(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.u6(t.a.d.b8,B.a.i(e))
if(s!=null&&C.aOT(s)<=0){t.c.K(x.q).f.U(D.aPj)
w=1
break}}w=5
return A.b(C.apA(t.a.c),$async$Iu)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fY3(r,C.fEl(q.c),p),$async$Iu)
case 6:w=1
break
case 4:o=new C.dbU(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hE(r,new C.aD_(p,q.d,q.f,q.r,new C.dbV(o),q.w,C.fEl(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hE(q,new C.al4(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dbW(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
c_3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.ahi(i.a.d.b8)
C.ahi(i.f)
w=C.icF(i.a.c.a,i.f)
v=C.i1L(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bI
if(!u){t=B.d.gI(w)
u=A.n(14)
s=A.I(B.b_,B.q,1)
r=J.a4(t)
q=r.h(t,"fromName")
q=A.u(q==null?r.h(t,"fromEmail"):q)
p=A.u(r.h(t,"gameTitle"))
o=A.aJ(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aJ(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.x(A.a([D.fx3,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.pn,h,h,h),B.O,A.B(A.a([A.E(A.dW(B.JF,new C.dbM(i,t),h),1),B.ab,A.E(A.bG(D.fG6,new C.dbN(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e7,B.bl,h,h,1/0)}m=B.d.gI(v)
l=B.d.dN(i.y,new C.dbO(m),new C.dbP(i))
k=C.h3g(m,i.a.c.a,i.r)
j=C.aOT(m)
u=A.n(14)
s=A.I(B.b_,B.q,1)
r=j===1?"":"s"
return A.p(h,A.x(A.a([D.fpb,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.pn,h,h,h),B.au,A.d(C.i4s(m,i.a.c.a),h,h,h,h,h,h,B.a8x,h,h,h),B.O,A.bG(D.fwk,new C.dbQ(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e7,B.bl,h,h,1/0)},
bQJ(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eTK.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.SX(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.vM(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iM())}s=B.d.gI(w)
w=A.n(16)
t=A.n(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jx,12)],q)
o=x.p
o=A.a([new A.a7(100,n,A.av(A.X(d.e,B.c,n,n,n,64),n,n,n),n),A.E(new A.D(B.io,A.x(A.a([A.B(A.a([A.E(A.d(d.b,n,n,n,n,n,n,B.kj,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.au,A.d(d.c,n,2,B.a2,n,n,n,B.pj,n,n,n)],o),B.F,n,B.b9,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bSz,n,n,n,new C.dbI(this,d),n,n,n,n,"Invite player",n))
o.push(new A.D(B.Mp,A.p(n,D.bQE,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1.6),n,A.a([new A.ac(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aL(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a9(B.az,B.aC,B.x,l,n,n),B.n),n,92,n,B.e7,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dbJ(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=A.P(d).ax.a===B.I?B.jj:B.pM,k=m?B.ih.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.ih:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bm:B.bL
if(!o.x)return C.aPr(n,l,A.av(A.mM(n,m?B.c:B.bc,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fEl(o.a.c)
return new C.Nz(o.a.w,w,!0,o.gaSo(),n)}w=A.aI(d,B.ec,x.w).w
v=A.n(12)
u=A.I(h,B.q,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.E(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.P,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tm(new C.dc5(o,f,g),n,$.aQN(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Z0,n,n,1/0),B.R,o.c_3()],r)
v=o.y
B.d.v(s,new A.M(v,o.gbQI(),A.S(v).k("M<1,t>")))
w=A.cc(A.x(s,B.m,n,B.e,B.j,0,B.p),B.r,n,B.y,n,new A.R(14,w.r.b+78,14,24),n,n,B.ag)
s=A.n(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.jx,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.q,1)
t=A.aH(n,n,n,n,A.X(B.eF,j,n,n,n,18),n,n,n,o.gaSo(),n,n,n,n,n,n)
q=A.E(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.n(20)
return A.os(!0,C.aPr(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bm(!1,new A.D(B.MC,A.p(n,A.B(A.a([t,q,new A.D(B.io,A.p(n,A.B(A.a([D.bNV,B.eg,C.aqs(new C.dc6(o),B.lE,o.a.c.a)],r),B.m,n,B.e,B.N,0,n,n),B.f,n,n,new A.o(B.cU,n,n,p,n,n,B.n),n,n,n,n,B.ha,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.mw,n,n,n),n),!0,!1,B.af,!0,!0),n,n,0,0,0,n)],r),n)),new C.dc7(o),x.K)},
aSp(){var w,v
this.a.bs()
w=this.d
v=w>0?A.F(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iR(w,v)}}
C.aD_.prototype={
S(){return new C.bjr()},
hA(d){return this.e.$1(d)},
bs(){return this.f.$0()},
aGY(){return this.r.$0()}}
C.bjr.prototype={
Z(){this.bvp()
this.d=A.UJ(this.a.d.bi)
$.tv=$.tv+1},
q(){C.b_c()
this.bvo()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.ap3(v,new C.dQ7(w),u,new C.dQ8(w),new C.dQ9(w,d),new C.dQa(w),null)}}
C.al4.prototype={
S(){return new C.aA8(new A.as(B.as,$.aw()))},
hA(d){return this.x.$1(d)},
bs(){return this.y.$0()},
aGY(){return this.z.$0()}}
C.aA8.prototype={
Z(){this.bun()
this.a.toString
$.tv=$.tv+1},
q(){C.b_c()
var w=this.d
w.T$=$.aw()
w.P$=0
this.bum()},
a24(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a24=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.NF()
w=5
return A.b(C.apA(t.a.c),$async$a24)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fY3(s,C.fEl(r.c),q),$async$a24)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.u6(s.d.b8,B.a.i(r))
if(p!=null&&C.aOT(p)<=0){t.c.K(x.q).f.U(D.aPj)
w=1
break}}o=A.d6(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.K(x.q).f.U(D.f04)
w=1
break}m=A.L7(t.a.c.a,new C.dbA(t))
if(m+0.001<n){t.c.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dC(m)+", the bet is $"+A.dC(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aGY()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hA(new A.d4(r,q.c.a,n,B.jV,B.fh,"Game bet: "+q.f,null,null,B.cr,new A.T(Date.now(),0,!1)))
t.a.bs()
if(D.eTy.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hE(s,new C.anZ(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hE(s,new C.al6(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a24,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.GM,o,o,o,new C.dbD(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cD,o,o,o),i=A.n(12),h=x.p
j=A.eF(A.a([A.p(o,A.av(C.aqs(new C.dbE(p),B.ki,k.c.a),o,o,o),B.f,o,o,new A.o(B.cU,o,o,i,o,o,B.n),o,o,o,D.bsL,B.fZ,o,o,o)],h),o,o,!0,!0,D.XY,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.n(16)
i=A.I(B.b_,B.q,1)
k=A.X(D.bEM,D.bmx,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.nD,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.pn,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.n(12)
s=x.a3
s=A.C(new A.M(A.a([2,5,10,25],x.t),new C.dbF(p),s),s.k("ak.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.x(A.a([D.fHJ,B.R,s,B.O,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.d,o,o,o,o,o,2,A.bs(o,new A.b4(4,A.n(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.kJ,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dQ,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.dg,!0,B.a4,o,B.an,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.n(12)
r=A.I(A.Z(102,B.a4A.l()>>>16&255,B.a4A.l()>>>8&255,B.a4A.l()&255),B.q,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.n(10)
q=A.p(o,A.x(A.a([D.foz,A.d("+ $"+B.k.ab(n*0.46,2),o,o,o,o,o,o,D.feY,o,o,o),A.d("(46% return on $"+B.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,B.pj,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cq,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.n(10)
u=A.p(o,A.x(A.a([D.fxk,B.O,q,B.O,A.p(o,A.x(A.a([D.fjF,A.d("$"+B.k.ab(m,2),o,o,o,o,o,o,D.f4t,o,o,o),A.d("8 pairs \xd7 $"+B.k.ab(m,2)+" each",o,o,o,o,o,o,B.pj,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cq,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.biB,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fq(o,o,B.bc,o,o,o,o,o,o,B.c,o,B.fS,o,o,o,o,o,o,o,o)
return C.aPr(j,D.XY,A.cc(A.p(o,A.x(A.a([k,B.au,v,B.bC,w,B.R,t,B.O,u,B.R,new A.a7(1/0,o,A.ik(A.d("Start Game ($"+B.k.ab(p.e,2)+")",o,o,o,o,o,o,B.ck,o,o,o),p.gcwS(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bYA,B.n),o,o,o,o,B.eR,o,o,1/0),B.r,o,B.y,o,E.ai9,o,o,B.ag))}}
C.al6.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aAa(B.cH,new A.as(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aX(u),A.aX(u),A.a([],v),A.a([],v),A.a([],v))},
hA(d){return this.y.$1(d)},
bs(){return this.z.$0()}}
C.aAa.prototype={
ghI(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
re(d){return this.bOX(d)},
bOX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$re=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.A8()
r=t.OA()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.aaW(d),$async$re)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tQ(d),$async$re)
case 9:w=7
break
case 8:w=10
return A.b(t.Ew(q,s,r),$async$re)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$re,v)},
F6(d,e,f,g){return this.cuD(d,e,f,g)},
cuD(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$F6=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bDy(s,C.bDc(),C.h5d(),d,e,f,g),$async$F6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$F6,v)},
A8(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b2g(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.ahu(t,s.e.a.a)
case"memory":return s.ghI()&&D.mN.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aya()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b8
case"reflex":return s.a_
default:u=s.b1
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aya(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
OA(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.h3k()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b1
if(w!=null)return w.b
return 1}},
bv(d){var w,v,u=this
u.bG(d)
if(u.f||u.c6)return
w=u.a
v=C.fEq(w.e,w.d.y2)
if(v!==C.fEq(d.e,d.d.y2)&&u.c!=null)u.m(new C.dds(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bur()
w=i.a
w.toString
$.tv=$.tv+1
i.Q=C.fEq(w.e,w.d.y2)
i.b5b()
i.acf()
if(i.ghI()){i.c6=!0
i.cL="Connecting to match\u2026"
i.ck="Both players enter the room together \u2014 play starts at the same time."
i.OW()
i.abT()
i.bh=A.dv(B.fB,new C.ddv(i))}if(B.d.t(D.QA,i.a.e)){w=i.ghI()
v=i.a
if(w){w=v.d.b8
v=v.Q
v.toString
u=C.u6(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a4(u)
s=t.h(u,"id")
J.k(s==null?"":s)
s=t.h(u,"fromEmail")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(u,"toEmail")
q=B.a.i(J.k(s==null?"":s).toLowerCase())
p=B.a.i(v.toLowerCase())
s=x.f
o=x.N
n=x.z
m=s.b(t.h(u,h))?A.a2(s.a(t.h(u,h)),o,n):A.U(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.b_a(!1,w,k.length===0||B.a.t(k,"@")?C.h3g(u,v,null):k,p,l,s)}else{w=w.c
w=C.fY7(w.c,w.a)}w=i.bL=w}else{w=v.c
w=i.bL=C.fY7(w.c,w.a)}v=C.hJT()
v.boo(i.a.e,i.d,w)
i.b1=v
i.r=v.c
if(i.ghI()){w=i.a
v=w.d.b8
w=w.Q
w.toString
u=C.u6(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.b1
w.toString
w.baq(i.a.e,A.a2(m,x.N,x.z),i.a.c.a)
w=i.b1
i.r=w.c
if(w.e){if(w.r)j=D.S4
else j=w.f===!0?D.ql:D.I4
i.Aa(j)}}}i.b2=A.dv(B.mr,new C.ddw(i))
if(i.ghI())i.bb=A.dv(B.nf,new C.ddx(i))}if(i.ghI()&&!B.d.t(D.QA,i.a.e))i.bb=A.dv(B.nf,new C.ddy(i))
i.as=A.dv(B.fY,new C.ddz(i))},
OW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghI()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.u6(s.d.b8,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bBx(p,t.a.c.a),$async$OW)
case 5:o=e
if(t.c!=null)t.m(new C.dcI(t,o))
w=1
break
case 4:w=6
return A.b(C.KZ(q,t.a.d.b8,!1),$async$OW)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bBx(n,t.a.c.a),$async$OW)
case 7:o=e
if(t.c!=null)t.m(new C.dcJ(t,o))
case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
aiD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aiD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghI()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.KZ(r,s.d.b8,!1),$async$aiD)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a2(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aNh(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c8(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.br(t.fy,new C.ddb(t))
if(i!=null&&t.fr.length!==0){s=A.C(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eE()
r.du(i)
B.d.fp(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.ddc())}case 1:return A.h(u,v)}})
return A.i($async$aiD,v)},
abT(){var w=0,v=A.j(x.H),u=this
var $async$abT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a0o(!0),$async$abT)
case 2:return A.h(null,v)}})
return A.i($async$abT,v)},
a0o(d){return this.cjQ(d)},
cjP(){return this.a0o(!1)},
cjQ(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a0o=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghI()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.KZ(q,s.d.b8,b3),$async$a0o)
case 3:o=b5
if(o==null)o=C.u6(t.a.d.b8,q)
if(o==null){w=1
break}s=J.a4(o)
r=s.h(o,"fromEmail")
n=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=B.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?A.a2(l,r,k):A.U(r,k)
i=j.h(0,"player1Email")
if(i==null)i=j.h(0,"playerXEmail")
h=B.a.i(J.k(i==null?n:i).toLowerCase())
i=j.h(0,"player2Email")
if(i==null)i=j.h(0,"playerOEmail")
g=B.a.i(J.k(i==null?m:i).toLowerCase())
i=h.length!==0
if(i)j.n(0,"player1Email",h)
f=g.length!==0
if(f)j.n(0,"player2Email",g)
e=j.h(0,"inGame")
d=s.b(e)?A.a2(e,r,k):A.U(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a2(a0,r,k):A.U(r,k)
a2=new A.T(Date.now(),0,!1).a6()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ac())}if(i&&!d.ai(0,h))d.n(0,h,!1)
if(f&&!d.ai(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.A(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ac())
s=!1
if(f)if(J.A(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ac())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bi(a3)
a4=s==null?null:s.bU()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.A(d.h(0,h),!0)&&J.A(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bi(J.k(r==null?"":r))
a6=r==null?null:r.bU()}else a6=null
if(f){r=a1.h(0,g)
r=A.bi(J.k(r==null?"":r))
a7=r==null?null:r.bU()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cd(a7)?a6:a7).bS(5e5)
if(!new A.T(Date.now(),0,!1).d_(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.a6().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.E(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.E(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.i9t(t.a.d.b8,q,j)
t.a.bs()}if(t.c==null){w=1
break}b0=t.bz
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dcY(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dcZ(t))
w=1
break}b1=new A.T(Date.now(),0,!1)
if(b1.d_(s)){s=s.bC(b1).a
r=B.o.am(s,1e6)
t.m(new C.dd_(b2,t,r+(B.o.E(B.o.am(s,1000),1000)>0?1:0)))
w=1
break}if(t.c6){t.m(new C.dd0(b2,t))
b2=t.a.e
if(b2==="pattern")t.a8K()
else if(b2==="memory"){t.b5a()
if(t.c!=null)t.m(new C.dd1())}}b2=t.bh
if(b2!=null)b2.a7(0)
t.bh=null
case 1:return A.h(u,v)}})
return A.i($async$a0o,v)},
aOb(d){var w,v,u,t,s=this
if(d!=null){w=new A.eE()
w.du(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e2(v,x.S)
for(t=0;t<v;++t)u[t]=w.av(9)
s.ry=u
s.x1=0
s.to=-1},
aOa(){return this.aOb(null)},
a8K(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a8K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghI()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.chk()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.KZ(q,s.d.b8,!1),$async$a8K)
case 5:r=t.b10(e)
case 4:if(t.c==null){w=1
break}t.aOb(r)
t.m(new C.dca(t))
t.DJ()
case 1:return A.h(u,v)}})
return A.i($async$a8K,v)},
b10(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c8(u==null?"":u,t)},
chk(){var w=this.a,v=w.Q
if(v==null)return null
return this.b10(C.u6(w.d.b8,v))},
acf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$acf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$acf)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eP(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dcH(t,s))
case 1:return A.h(u,v)}})
return A.i($async$acf,v)},
p8(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$p8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$p8)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bE1().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.E(u.at+5,s)
else{q=u.at
r=t?B.o.E(q+6,s):B.o.E(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$p8)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$p8,v)},
a2m(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a2m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghI()||t.b1==null||t.f||t.aI){w=1
break}if(t.c6){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.KZ(r,s.d.b8,!1),$async$a2m)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b8
s=s.Q
s.toString
p=C.u6(r,s)
s=p==null
if(!s){r=J.cF(p)
r.a8(p)
r.v(p,q)}r=J.a4(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a2(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cd(l)){w=1
break}s=t.b1
s.toString
r=t.a
s.baq(r.e,n,r.c.a)
r=t.b1
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.S4
else k=r.f===!0?D.ql:D.I4
w=7
return A.b(t.Aa(k),$async$a2m)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.ddd())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a2m,v)},
agu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$agu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghI()||q.b1==null||q.a.Q==null||q.aI){w=1
break}q.aI=!0
t=3
o=q.b1
o.toString
p=o.cMt(q.a.e)
o=q.a
n=o.d.b8
o=o.Q
o.toString
w=6
return A.b(C.aPM(n,o,p),$async$agu)
case 6:q.a.bs()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aI=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agu,v)},
Aa(d){return this.bW9(d)},
bW9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Aa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.b1==null){w=1
break}s=t.b1.w
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
return A.b(t.Je(s,s),$async$Aa)
case 9:w=4
break
case 6:w=10
return A.b(t.XK(s,s),$async$Aa)
case 10:w=4
break
case 7:w=11
return A.b(t.aaV(s,s),$async$Aa)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghI()?12:13
break
case 12:w=14
return A.b(t.HM(),$async$Aa)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$Aa,v)},
a_l(d,e){return this.cbL(d,e)},
cbL(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$a_l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghI()?3:5
break
case 3:w=6
return A.b(t.agu(),$async$a_l)
case 6:if(d===D.qk){w=1
break}w=4
break
case 5:if(d===D.qk){w=1
break}case 4:w=7
return A.b(t.Aa(d),$async$a_l)
case 7:case 1:return A.h(u,v)}})
return A.i($async$a_l,v)},
ac8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ac8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghI()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.u6(s.d.b8,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a2(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a2(k,r,m):A.U(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aPM(t.a.d.b8,q,l),$async$ac8)
case 3:t.a.bs()
case 1:return A.h(u,v)}})
return A.i($async$ac8,v)},
HM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghI()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.u6(s.d.b8,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a2(o,s,r):A.U(s,r)
n.n(0,"gameOver",!0)
C.h5G(t.a.d.b8,q,n)
C.icS(t.a.d.b8,q)
w=3
return A.b(C.ahj(t.a.d.b8),$async$HM)
case 3:t.a.bs()
case 1:return A.h(u,v)}})
return A.i($async$HM,v)},
q(){var w,v=this
if(v.ghI()&&!v.f)v.ac8()
else if(!v.f)v.c1H()
C.b_c();++v.RG
w=v.as
if(w!=null)w.a7(0)
w=v.b2
if(w!=null)w.a7(0)
w=v.cx
if(w!=null)w.a7(0)
w=v.bb
if(w!=null)w.a7(0)
w=v.bh
if(w!=null)w.a7(0)
w=v.e
w.T$=$.aw()
w.P$=0
v.buq()},
cA7(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b1==null}if(v)return
if(w.c6)return
v=w.b1
v.toString
w.a.toString
if(v.a>=v.b){w.tQ("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.ddm())},
b5b(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e2(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b5a()
break
case"scramble":r.bi=0
r.b5c()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.E(r.at,50)
v=J.e2(5,x.N)
for(t=0;t<5;++t)v[t]=D.dhZ[B.o.E(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,B.c9)
break
case"math":r.y2=0
r.b59()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b5d()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e2(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fp(v,s)
if(!r.cmf()){w=J.e2(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fp(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.av(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Qz()
break
case"pattern":if(r.ghI()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aOa()
w=A.u(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.DJ()}break
case"color":r.b8=0
r.b54()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a_=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b6l()
break
default:if(B.d.t(D.QA,w)){w=r.b1
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b2g(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cmf(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.E(v,2)===0},
b5d(){var w,v,u,t,s,r=this,q=B.o.E(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e2(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.aA=B.d.aG(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fp(t,r.d)
r.x=t},
b59(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bE1().length-6)u.at=0
w=$.bE1()
v=w[B.o.E(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b5c(){var w=this,v=w.w=D.cW9[B.o.E(w.at+w.bi,105)]
w.ax=C.id9(v)
w.ay=A.c2(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bP(0,B.c9)},
b6l(){var w=this,v=w.cx
if(v!=null)v.a7(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dE(0,0,0,120+w.d.av(280),0,0),new C.dda(w))},
bWc(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.re("Too early \u2014 paid for "+t.a_+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.am(new A.T(v,0,!1).bC(u).a,1000)}if(w<520){t.m(new C.dcF(t))
v=t.a_
if(v>=5){t.p8()
t.tQ("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b6l()
t.m(new C.dcG())}}else t.re("Too slow ("+w+"ms) \u2014 paid for "+t.a_+"/5.")},
czl(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bg(t.ay,new C.ddh())
if(u<0)return
t.m(new C.ddi(t,u,v,d))},
czm(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.ddj(u,d,v))},
bFX(){var w,v,u=this
if(u.f)return
if(B.d.b4(u.ay,new C.dcb())){u.c.K(x.q).f.U(D.f_Z)
return}w=B.d.h3(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dcc(u))
if(u.ghI()&&D.mN.t(0,u.a.e))u.a0C()
if(u.bi>=5){u.p8()
if(u.ghI()&&D.mN.t(0,u.a.e))u.n3(!0)
else u.tQ("All 5 words unscrambled!")}else{u.b5c()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.dcd())}}else u.re("Wrong word \u2014 paid for "+u.bi+"/5.")},
b54(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.E(w.at+w.b8*11,4),t=v[w.d.av(4)]
w.aB=t
w.aF=v[u]
w.aJ=[B.dJ,B.dA,B.hX,B.rB][u]
w.w=t},
aNh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aX(x.S)
for(s=J.jz(v),s=s.gae(s),r=x.j;s.C();){q=s.gR(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cw),n=p===g;q.C();){m=q.gR(q)
l=typeof m=="number"?B.k.N(m):A.c8(J.k(m),null)
if(l==null)continue
t.L(0,l)
if(n)w.L(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gR(w)
l=typeof m=="number"?B.k.N(m):A.c8(J.k(m),null)
if(l!=null)f.L(0,l)}}h.k2=B.k.bl(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aJ(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b5a(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.C(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghI()&&p.a.Q!=null){w=p.a
v=w.d.b8
w=w.Q
w.toString
u=C.u6(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a2(t,w,v):A.U(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c8(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eE()
v.du(q)
B.d.fp(w,v)}else B.d.fp(w,p.d)
p.aNh(s)}else B.d.fp(p.fr,p.d)},
cja(d){var w,v,u,t=this
if(t.c6)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.dcR(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dcS(t,v,u))
if(t.ghI()&&D.mN.t(0,t.a.e))t.a0C()
if(t.go.a>=t.fr.length){t.p8()
if(t.ghI()&&D.mN.t(0,t.a.e))t.n3(!0)
else t.ayd()}return}t.k1=!0
A.bM(D.brI,new C.dcT(t),x.c)},
b4y(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dd2(u))
if(u.y1>=5){u.p8()
u.tQ("All 5 questions correct!")}else{u.b5d()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dd3())}}else u.re(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dd4(u))
if(u.y2>=6){u.p8()
u.tQ("All 6 math questions correct!")}else{u.b59()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dd5())}}else{u.VP(u.y2+1)
u.re(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dd6(u))
if(u.b8>=5){u.p8()
u.tQ("All 5 color rounds correct!")}else{u.b54()
u.r="Round "+(u.b8+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dd7())}}else u.re("Wrong color \u2014 paid for "+u.b8+"/5.")
return}if(v){u.p8()
u.ayd()}else u.c.K(x.q).f.U(D.f0I)},
czk(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cH(q.k4,0)
v=B.o.am(d,3)
u=B.o.E(d,3)
t=B.o.am(w,3)
s=B.o.E(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.ddg(q,d,w))
if(B.d.h3(q.k4)==="123456780"){q.p8()
q.ayd()}}},
Qz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dcU(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dcV(t,q).$0()
t.c.eh()
w=6
return A.b(A.bM(B.kV,null,r),$async$Qz)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dcW(t).$0()
t.c.eh()
w=7
return A.b(A.bM(B.jG,null,r),$async$Qz)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dcX(t))
case 1:return A.h(u,v)}})
return A.i($async$Qz,v)},
czn(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.re("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.ddk(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.p8()
u.tQ("Perfect Simon run!")
return}u.m(new C.ddl(u))
u.Qz()}},
DJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dce(t))
s=x.H
w=3
return A.b(A.bM(B.jo,null,s),$async$DJ)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dcf(t,o).$0()
t.c.eh()
w=7
return A.b(A.bM(B.YE,null,s),$async$DJ)
case 7:if(t.c==null){w=1
break}new C.dcg(t).$0()
t.c.eh()
w=8
return A.b(A.bM(B.iI,null,s),$async$DJ)
case 8:case 5:r.length===q||(0,A.L)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dch(t))
case 1:return A.h(u,v)}})
return A.i($async$DJ,v)},
VP(d){return this.bAB(d)},
bAB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$VP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ay(),$async$VP)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bE1().length
o=B.o.E(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$VP)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$VP,v)},
czi(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.re("Wrong tile \u2014 paid for "+v.aya()+"/"+C.h3k()+" moves.")
return}v.m(new C.dde(v,w))
if(v.ghI()&&D.mN.t(0,v.a.e))v.a0C()
if(v.x1>=w)if(v.x2>=7){v.p8()
if(v.ghI()&&D.mN.t(0,v.a.e))v.n3(!0)
else v.tQ("All 7 pattern rounds correct!")}else{v.m(new C.ddf(v))
v.DJ()}},
Je(d,e){return this.chA(d,e)},
tQ(d){return this.Je(null,d)},
ayd(){return this.Je(null,null)},
chA(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Je=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a7(0)
s=t.b2
if(s!=null)s.a7(0)
r=t.a.x*1.46
t.m(new C.dcP(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d4(q,s.c.a,r,B.fI,B.fh,"Game payout: "+s.f,null,null,B.cr,new A.T(Date.now(),0,!1))
A.ahf(p,!0)
t.a.hA(p)
t.a.bs()
o=e==null?"+$"+B.k.ab(r,2)+" added to your balance!":e
s=t.a
C.uI(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.F6(d,o,"YOU WIN!",!0),$async$Je)
case 3:w=4
return A.b(C.ah7(t.a.f,o),$async$Je)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
F4(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$F4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghI()&&D.mN.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.ctH(),$async$F4)
case 5:w=1
break
case 4:s=t.A8()
r=t.OA()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.aaW("Time's up \u2014 no progress to pay."),$async$F4)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tQ("Complete! Max payout earned."),$async$F4)
case 12:w=10
break
case 11:w=13
return A.b(t.Ew(q,s,r),$async$F4)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$F4,v)},
QG(d){return this.clW(d)},
a0C(){return this.QG(!1)},
clW(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$QG=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghI()&&D.mN.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.T(Date.now(),0,!1)
a2=r.bF
if(a2!=null&&a1.bC(a2).a<3e6){w=1
break}r.bF=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.u6(a2.d.b8,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.KZ(q,r.a.d.b8,!1),$async$QG)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a2(n,a3,a5):A.U(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.a2(l,a3,a5):A.U(a3,a5)
J.aG(k,p,r.A8())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a2(j,a3,a5):A.U(a3,a5)
a6=r.id
a6=A.C(a6,A.a3(a6).k("co.E"))
B.d.fq(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aX(x.S)
for(a6=i,a6=new A.du(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gR(a8)
e=typeof f=="number"?B.k.N(f):A.c8(J.k(f),null)
if(e!=null)J.cf(h,e)}}a6=h
a6=A.C(a6,A.a3(a6).k("co.E"))
B.d.fq(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a2(d,a3,a5):A.U(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aPM(r.a.d.b8,q,m),$async$QG)
case 11:r.a.bs()
t=2
w=6
break
case 4:t=3
b0=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QG,v)},
n3(d){return this.ctI(d)},
ctH(){return this.n3(!1)},
ctI(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$n3=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghI()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.F4(),$async$n3)
case 5:w=1
break
case 4:w=6
return A.b(t.QG(!0),$async$n3)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.KZ(q,s.d.b8,!0),$async$n3)
case 7:o=b7
n=t.OA()
w=o==null?8:9
break
case 8:m=B.k.D(t.A8()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.aaW("Time's up \u2014 no progress to pay."),$async$n3)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tQ("Complete! Max payout earned."),$async$n3)
case 17:w=15
break
case 16:w=18
return A.b(t.Ew(m,t.A8(),n),$async$n3)
case 18:case 15:case 11:w=19
return A.b(t.HM(),$async$n3)
case 19:w=1
break
case 9:s=J.a4(o)
r=s.h(o,"fromEmail")
l=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=B.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?A.a2(i,r,h):A.U(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a2(f,r,h):A.U(r,h)
d=A.aJ(e.h(0,p))
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.A8()
d=A.aJ(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.aaW("Time's up \u2014 no progress to pay."),$async$n3)
case 22:w=23
return A.b(t.HM(),$async$n3)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aJ((s.b(a3)?A.a2(a3,r,h):A.U(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a7(0)
r=t.b2
if(r!=null)r.a7(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dd8(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.hA(new A.d4(h,b0,a9,B.fI,B.fh,d,null,null,B.cr,new A.T(Date.now(),0,!1)))
t.a.bs()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.ab(a9,2)+" (includes opponent bonus $"+B.k.ab(a7,2)+")":"+$"+B.k.ab(a8,2)+" (your progress payout)"
s=t.a
C.uI(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.F6(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$n3)
case 24:w=25
return A.b(t.HM(),$async$n3)
case 25:case 1:return A.h(u,v)}})
return A.i($async$n3,v)},
Ew(d,e,f){return this.chy(d,e,f)},
chy(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ew=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a7(0)
s=t.b2
if(s!=null)s.a7(0)
r=t.a.x*1.46*d
t.m(new C.dcN(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d4(s,q.c.a,r,B.fI,B.fh,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cr,new A.T(Date.now(),0,!1))
A.ahf(p,!0)
t.a.hA(p)
t.a.bs()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.ahu(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cJ(t.cy,0,new C.dcO()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.ab(r,2)+" ("+n+"% \u2014 "+A.u(k)+" mistakes/missed)":"+$"+B.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.uI(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.F6(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Ew)
case 3:w=4
return A.b(C.ah7(t.a.f,j),$async$Ew)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ew,v)},
c1H(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.A8()
v=o.OA()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.o2(B.k.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hA(new A.d4(q,p.c.a,s,B.fI,B.fh,"Game partial: "+p.f+" ("+A.u(w)+"/"+A.u(v)+", left early)",n,n,B.cr,new A.T(Date.now(),0,!1)))
o.a.bs()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.uI(s,n,"Left early \xb7 +$"+B.k.ab(s,2)+" ("+A.u(w)+"/"+A.u(v)+")",q,r,p,n,!0)},
aaV(d,e){return this.bQD(d,e)},
bQD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a7(0)
s=t.b2
if(s!=null)s.a7(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hA(new A.d4(r,q,p,B.fI,B.fh,"Game payout: "+s+" (draw, stake returned)",null,null,B.cr,new A.T(o,0,!1)))
t.a.bs()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.uI(o,null,"Draw. Your $"+B.k.ab(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.F6(d,"Nobody won, so your $"+B.k.ab(t.a.x,2)+" stake was returned.","DRAW",!1),$async$aaV)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaV,v)},
XK(d,e){return this.bQE(d,e)},
aaW(d){return this.XK(null,d)},
bQE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a7(0)
s=t.b2
if(s!=null)s.a7(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.uI(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.F6(d,e,"YOU LOSE",!1),$async$XK)
case 3:case 1:return A.h(u,v)}})
return A.i($async$XK,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.am(m,60)
m=B.a.aY(B.o.u(B.o.E(m,60)),2,"0")
v=A.aH(n,n,n,n,B.anO,n,n,n,new C.ddn(d),n,n,n,n,n,n)
if(o.ghI()){u=o.bz
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.E(A.d(u?t.f+" vs "+A.u(o.bz):t.f,n,2,B.a2,n,n,n,B.fT,n,n,n),1)
r=A.n(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.aqs(new C.ddo(o),B.os,t.c.a),B.f,n,n,new A.o(B.cU,n,n,r,n,n,B.n),n,n,n,n,B.fO,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.n(10)
s=A.p(n,A.B(A.a([A.E(A.d("Win $"+B.k.ab(t.x*1.46,2)+" \xb7 stake $"+B.k.ab(o.a.x,2)+" \u2022 Progress "+o.A8()+"/"+o.OA(),n,n,n,n,n,n,D.f9z,n,n,n),1),new C.apC(o.a.c.a,new C.ddp(o),n),B.ab,D.bJv,B.dc,A.d(""+w+":"+m,n,n,n,n,n,n,B.nF,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a9(B.a3,B.a8,B.x,s,n,n),B.n),n,n,n,n,B.h9,n,n,n)
v=o.a.w
m=A.S(v).k("M<1,w>")
m=A.C(new A.M(v,new C.ddq(),m),m.k("ak.E"))
w=A.n(14)
v=A.I(B.b_,B.q,1)
p=C.aPr(n,D.b8I,A.bm(!0,new A.D(Ag.Z2,A.x(A.a([r,s,B.O,new A.fh(new C.ddr(o),n),B.am,A.E(A.p(n,o.bQC(),B.f,n,n,new A.o(n,n,v,w,n,new A.a9(B.a3,B.a8,B.x,m,n,n),B.n),n,n,n,n,B.cq,n,n,n),1)],q),B.ai,n,B.e,B.j,0,B.p),n),!0,!1,B.af,!0,!0))
if(!o.c6)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.iG.l()>>>16&255,B.iG.l()>>>8&255,B.iG.l()&255)
v=A.n(18)
u=A.I(B.b_,B.q,1)
return new A.an(B.W,n,B.aa,B.r,A.a([p,A.bU(0,A.p(B.A,A.e1(A.p(n,A.x(A.a([D.eX8,B.ac,A.d(o.cL,n,n,n,n,n,n,D.fb2,B.L,n,n),B.am,A.d(o.ck,n,n,n,n,n,n,D.f9g,B.L,n,n)],q),B.m,n,B.e,B.N,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.vH,B.xV,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c2G(){var w=this.k3
return A.cq(new C.dcM(this,w,B.k.dj(this.fr.length/w)))},
bQC(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c2G()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pj,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.DK,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.R,A.bS(B.fJ,A.ip(o.ay.length,new C.dcu(o),!0,w),B.bq,6,6),B.aR,A.bS(B.fJ,A.ip(o.ch.length,new C.dcv(o),!0,w),B.bq,8,8),B.aR,new A.a7(1/0,n,A.ik(D.fAP,o.gbFW(),A.fq(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cm,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.arS(m,o.e,new C.dcw(o),new C.dcx(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.pj,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.DK,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.aA
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.eQ(B.A,A.d(w,n,n,n,n,n,n,B.nD,B.L,n,n),B.f,B.dw))
m.push(B.aR)
w=o.x
B.d.v(m,new A.M(w,new C.dcy(o),A.S(w).k("M<1,t>")))
return A.x(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cq(new C.dcz(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pj,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.DK,n,n,n),B.O,A.E(A.m3(1,A.ip(4,new C.dcA(o),!0,x.l),2,10,10,n,B.dT,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cq(new C.dcB(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dJ,B.dA,B.hX,B.rB]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.pj,n,n,n)
w=A.d("Round "+o.b8+"/5",n,n,n,n,n,n,B.DK,n,n,n)
v=o.aF
v===$&&A.c()
s=o.aJ
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aR],x.p)
r=J.e2(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fq(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.fa,n,n,n,n,n,n,n)
r[q]=new A.D(B.cv,new A.a7(1/0,n,A.ik(new A.y(u[q],n,B.cD,n,n,n,n,n,n,n,n,n),new C.dcC(o,u,q),m),n),n)}B.d.v(s,r)
return A.x(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bc:B.cc
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a8s,B.L,n,n)
v=A.d("Fast taps "+o.a_+"/5",n,n,n,n,n,n,D.f6K,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bY,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rE(A.aB(B.c7,A.df(n,A.x(A.a([w,B.O,v,B.b8,s,B.b8,new A.D(B.Fx,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b9,B.j,0,B.p),p,n,B.bd,n,U.Bc,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbWb(),n,n,n,n,n,n,!1,B.a5))}if(B.d.t(D.QA,m)&&o.b1!=null){m=o.a.e
w=o.b1
w.toString
return C.i2s(m,new C.dcD(o),new C.dcE(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dg,n,n,n),n,n,n)}}
C.alW.prototype={
S(){return new C.bgz()},
cSe(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bgz.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.ec,x.w).w
w=x.p
v=A.a([A.bOH(!1,f.a.r,"INVESTMENT PLANS",e),B.d8],w)
u=a0.x
if(u!=null){t=u.d.bU()
s=B.a.aY(B.o.u(A.bH(t)),2,"0")
r=B.a.b6(B.o.u(A.bA(t)+1),2)
q=A.n(18)
p=A.I(W.Xx,B.q,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.Z(89,B.qT.l()>>>16&255,B.qT.l()>>>8&255,B.qT.l()&255),B.eV,20),new A.ac(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dp,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.n(10)
k=A.I(W.Xx,B.q,3.4)
o=A.a([new A.ac(0,B.G,A.Z(166,B.qT.l()>>>16&255,B.qT.l()>>>8&255,B.qT.l()&255),B.dE,10),new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.B(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a9(B.az,B.aC,B.x,D.d5Y,D.cIt,e),B.n),e,42,e,e,e,e,e,56),B.b8,f.b7c(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Dt(u.a,1,B.a2,D.fec)
k=u.b
j=u.c
i=A.Dt("Making $"+A.dC(k*j)+" Daily",1,B.a2,D.fep)
h=A.Dt(f.b22(k),1,B.a2,D.f7t)
r=A.B(A.a([A.E(A.x(A.a([D.ftX,A.Dt(a0.c,1,B.a2,D.aRd)],w),B.F,e,B.e,B.j,0,B.p),1),A.x(A.a([D.ftJ,A.d(s+"/"+r,e,e,e,e,e,e,D.aRd,e,e,e)],w),B.dz,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.xp.l()>>>16&255,D.xp.l()>>>8&255,D.xp.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.ar6("INVESTED","$"+A.dC(k),!0),f.ar6("DAILY ROI",B.k.ab(j*100,2)+"%",!0),f.ar6("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hH,B.j,0,e,e)
k=A.dC(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fAn,B.uR,A.p(e,new A.an(B.W,e,B.aa,B.r,A.a([m,A.x(A.a([o,B.O,D.fsm,B.bC,l,B.au,i,B.au,h,B.O,r,B.am,s,B.am,j,B.au,A.Dt("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.fdA)],w),B.F,e,B.e,B.N,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bZo,B.n),e,e,e,e,B.bB,e,e,1/0),B.a7K],w))}v.push(D.fkm)
v.push(B.uR)
B.d.v(v,new A.M(a1,new C.dh1(f,a2),A.S(a1).k("M<1,t>")))
return A.c6(e,B.K,A.bm(!1,A.cc(A.x(v,B.F,e,B.e,B.j,0,B.p),B.r,e,B.y,e,new A.R(20,10,20,124+d.r.d),e,e,B.ag),!0,!1,B.af,!0,!0),e,!1,!1,e,e)},
b7c(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.n(8),t=A.I(B.jm,B.q,1)
return A.p(w,A.B(A.a([A.X(B.alJ,B.c,w,w,w,16),B.dc,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
b22(d){var w=B.a.aY(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b6(w,w.length-4)},
ar6(d,e,f){var w=null,v=A.Z(217,D.xp.l()>>>16&255,D.xp.l()>>>8&255,D.xp.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.x(A.a([v,B.bC,A.Dt(e,w,w,A.l(w,w,E.AW,w,w,w,w,w,w,w,w,11,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cjE(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcWL(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
a0=A.n(18)
w=A.I(B.aQ,B.q,2)
p=x.V
o=A.a([new A.ac(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Sr,16),new A.ac(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dp,14),new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bV(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.n(5)
l=A.I(B.c,B.q,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.B(A.a([new A.a7(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eJ(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.v(0,2),4)],p),D.bY0,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.ej9],h),d),d),B.b8,e.b7c(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Dt(a6,1,B.a2,D.f4a)
i=A.Dt(e.b22(a3),1,B.a2,D.fiI)
j=A.B(A.a([e.b1u(B.k.ab(2.86,2)+"%"),B.eg,e.b1u("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.E(A.x(A.a([D.flC,A.Dt("$"+A.dC(a3),1,B.a2,D.fhv)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.f4X,d,d,d)],h),B.dz,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.br.l()>>>16&255,B.br.l()>>>8&255,B.br.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.E(e.ayq("Daily","$"+A.dC(a4)),1),B.eg,A.E(e.ayq("Total","$"+A.dC(a4*261)),1),B.eg,A.E(e.ayq("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dh0(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fq(d,d,B.bm,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aQ,d,d,d,d,new A.b7(A.n(10),D.aZZ),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.x(A.a([p,B.bC,D.fuF,B.bC,a6,B.cV,i,B.fF,j,B.fF,m,B.fF,k,B.fF,l,B.O,new A.a7(1/0,40,A.ik(A.eQ(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.f5n,d,d,d),B.f,B.e_),g,f),d)],h),B.F,d,B.e,B.N,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bZX,B.n),d,d,d,B.kW,D.btu,d,d,1/0)},
b1u(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.n(5),t=A.I(B.cs,B.q,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.f4z,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.FO,w,w,w)},
ayq(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.n(7),t=A.I(B.aL,B.q,1)
return A.p(w,A.x(A.a([A.d(d,w,w,w,w,w,w,D.fdY,w,w,w),B.uS,A.eQ(B.a3,A.d(e,w,w,w,w,w,w,D.fgy,w,w,w),B.f,B.dw)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lW,w,w,w)}}
C.aii.prototype={
S(){var w=null,v=A.a([],x._),u=$.aw()
return new C.axl(v,new A.as(B.as,u),new A.as(B.as,u),A.mD(0,w,w),new A.hT(),D.RU,C.ah4(),A.a([],x.fw),A.aX(x.N),A.mD(0,w,w))}}
C.axl.prototype={
Z(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.zI(0,1)
r.e!==$&&A.aP()
r.e=v
r.ay=w.f.aF
w=r.k3=A.bp(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t].a
if(s.length!==0)u.L(0,s)}r.ack()
r.OV()
r.aqJ()
r.cwE()
r.cwU()
$.aW.x1$.push(new C.cEp(r))
r.a.toString},
OV(){var w=0,v=A.j(x.H),u,t=this,s
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aq3(),$async$OV)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cDK(t,s))
case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
gaA5(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gOR())return!0
return!1},
gOR(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaVk(){var w,v=this.CW
if(v==null)return B.bx
w=v.bC(new A.T(Date.now(),0,!1))
return w.a<0?B.bx:w},
bBo(){var w=this
if(w.a.c.w)return
if(w.gOR()){if(!w.cx)w.m(new C.cDA(w))}else if(w.cx)w.m(new C.cDB(w))},
cpT(){this.m(new C.cDU(this))},
tX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cDR(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cDS(t))
w=1
break}w=3
return A.b(C.caz(o.a,s),$async$tX)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.caA(t.a.c.a,s),$async$tX)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cDT(t,r,q))
t.cyN()
t.bBo()
if(r===3)t.YN(r)}case 1:return A.h(u,v)}})
return A.i($async$tX,v)},
YN(d){return this.c2x(d)},
c2x(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bDE(q,r,new C.cDM(t),d,s.c.a),$async$YN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$YN,v)},
xt(d){return this.bCU(d)},
aqJ(){return this.xt(!1)},
bCU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a7Z(k,C.hrN(l.d)),$async$xt)
case 3:j=m
w=4
return A.b(C.caZ(k),$async$xt)
case 4:s=j.a=f
w=5
return A.b(A.aqS(k),$async$xt)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Vl(!0,l,q,p)
m.a=s
w=8
return A.b(C.aq5(k,s),$async$xt)
case 8:case 7:w=9
return A.b(C.Uk(k),$async$xt)
case 9:o=f
w=10
return A.b(C.a7l(k),$async$xt)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cDC(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$xt,v)},
Qd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Qd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.OV(),$async$Qd)
case 3:s=t.c
if(s==null){w=1
break}r=A.ea(new C.cDP(t),!1,null,x.H)
w=4
return A.b(A.a5(s,!1).cm(r),$async$Qd)
case 4:w=5
return A.b(t.OV(),$async$Qd)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qd,v)},
cAV(){this.m(new C.cEc(this))},
cwU(){var w=this,v=w.go
if(v!=null)v.a7(0)
if(w.a.c.w)return
w.go=A.dv(B.r8,new C.cE6(w))},
cyN(){var w=this,v=w.id
if(v!=null)v.a7(0)
w.id=null
if(!w.gOR()||w.CW==null)return
w.id=A.dv(B.fY,new C.cE9(w))},
cwE(){var w=this,v=w.fy
if(v!=null)v.a7(0)
w.fy=A.dv(B.jp,new C.cE5(w))
w.Fb()},
Fb(){return this.cyM()},
cyM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Fb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aF
t=4
w=7
return A.b(A.ay(),$async$Fb)
case 7:q=e
p=A.aU(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.S.aL(0,p,null)
if(x.f.b(o)){m=A.De(A.a2(o,x.N,x.z)).aF
i.a=m
r.a.f.aF=m}}w=10
return A.b(A.La(),$async$Fb)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aPq(),$async$Fb)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aF=l
w=14
return A.b(q.aq("String","app_config",B.S.ao(k.ag(),null)),$async$Fb)
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
break}if(i.a!==r.ay)r.m(new C.cE7(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fb,v)},
b60(){B.d.b_(this.f,new C.cE4())},
ack(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ack=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.N_(t.a.c.a),$async$ack)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cJ(q)){B.d.v(s,q)
B.d.b_(s,new C.cDH())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.F(["role","ai","text",r,"at",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z))}t.m(new C.cDI(t,s))
t.a1z(!0)
A.bM(B.jo,new C.cDJ(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$ack,v)},
afS(){var w=0,v=A.j(x.H),u=this
var $async$afS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.anK(u.a.c.a,u.f),$async$afS)
case 2:return A.h(null,v)}})
return A.i($async$afS,v)},
bv(d){this.bG(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a7(0)
u=v.go
if(u!=null)u.a7(0)
u=v.id
if(u!=null)u.a7(0)
u=v.r
w=$.aw()
u.T$=w
u.P$=0
u=v.w
u.T$=w
u.P$=0
v.ok.q()
v.x.q()
u=v.e
u===$&&A.c()
u.q()
v.a2()},
abi(d){var w,v=this
v.m(new C.cDF(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.B8(d,B.cu,B.kV)
else $.aW.x1$.push(new C.cDG(v,d))
if(d===0)v.a1z(!0)
if(d===1)v.crU(!0)},
a1z(d){$.aW.x1$.push(new C.cDX(this,d))},
azI(){return this.a1z(!1)},
a0T(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a19(),$async$a0T)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cDQ(t))
case 1:return A.h(u,v)}})
return A.i($async$a0T,v)},
n2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$n2=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.ad(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.apZ(a9.a,b0),$async$n2)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tX(),$async$n2)
case 10:q.m(new C.cDY(q))
w=1
break
case 8:w=11
return A.b(q.tX(),$async$n2)
case 11:if(q.c!=null&&q.ch===3)q.YN(3)
case 6:case 4:q.m(new C.cDZ(q,c5))
C.U6(q.a.c.a,"user",c5)
q.azI()
t=13
a8={}
w=16
return A.b(q.a0T(),$async$n2)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a19(),$async$n2)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cE_(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bBK("",null)
q.m(new C.cE0(q,p))
C.U6(q.a.c.a,"ai",p)
q.azI()
r=[1]
w=14
break}o=A.n7(a9)
a9=q.a
n=""
m=C.hrN(a9.d)
w=C.hrG(c5)?20:21
break
case 20:w=22
return A.b(C.caY(q.a.c.a),$async$n2)
case 22:q.db=c9
w=23
return A.b(q.xt(!0),$async$n2)
case 23:case 21:w=24
return A.b(A.a7Z(q.a.c.a,m),$async$n2)
case 24:l=c9
k=C.hJM(l)
a9=k
b2=Date.now()
b3=new A.T(b2,0,!1).bU()
b2=B.a.aY(B.o.u(A.bH(b3)),2,"0")
b4=B.a.aY(B.o.u(A.bT(b3)),2,"0")
b5=B.a.aY(B.o.u(A.dk(b3)),2,"0")
b6=B.a.aY(B.o.u(A.h4(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bA(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Uk(q.a.c.a),$async$n2)
case 25:i=c9
h=C.hbS(i,25)
w=26
return A.b(C.a7l(q.a.c.a),$async$n2)
case 26:g=c9
f=C.hdw(g)
a9=q.db
b2=q.dx
b4=q.dy
b5=q.fr
b2=a9.a?"GRANTED ("+b2+" names linked)":'NOT YET \u2014 ask user to say "allow access" ONCE, then never ask again'
b5=a9.b?"GRANTED ("+b5+" NGMY events saved)":'NOT YET \u2014 one-time "allow access"'
b4=a9.c?"GRANTED ("+b4+" saved calls)":'NOT YET \u2014 one-time "allow access"'
b4="NGMY DEVICE CONNECTIONS (saved on this phone \u2014 do not ask again if granted):\n"+("- Contacts: "+b2+"\n")+("- Calendar: "+b5+"\n")+("- Calls / voicemail memory: "+b4+"\n")
b2=a9.d?b4+"User already granted access on this device \u2014 NEVER ask for screenshots, manual contact linking, or permission again unless they revoked.\n":b4
e=B.a.i(b2.charCodeAt(0)==0?b2:b2)
b2=h
b4=f
b5=e
b5=b5.length!==0?b5+"\n":""
b2=b2.length!==0?b2+"\n":""
b4=b4.length!==0?b4+"\n":""
d='NGMY EXCLUSIVE SUPERPOWERS \u2014 user commands only; NEVER ask for screenshots, invoices, or manual uploads.\n\nThe user talks naturally. You do the work:\n- "Who called me at 2 AM?" \u2192 search CALL MEMORY (if access granted). Give name, number, what they said.\n- "What\'s on my calendar?" \u2192 read CALENDAR MEMORY below.\n- "Wake me at 7" / "Set alarm in 2 minutes" / "Timer for 1 hour" \u2192 alarm action (ISO start = now + duration when relative).\n- "Open Video Studio" / "Open Play Zone" / "Open Phone Unlock" \u2192 open_tool action so the app opens inside NGMY.\n- "Call Mom" / "Text John" \u2192 phone actions by contact name.\n- "NGMY morning brief" \u2192 summarize calls + calendar + wallet from LIVE DB.\n- "Allow access" / "Yes connect" \u2192 confirm everything is now linked permanently on this device.\n\nCALL DETECTIVE rules:\n- iPhone/web cannot read Apple\'s call log directly. After user says "allow access" ONCE, NGMY remembers calls from device sync (when available) and calls made through NGMY.\n- NEVER ask the user to upload call screenshots or paste voicemail unless they voluntarily send it in chat.\n- If access not granted yet, ask ONCE: "Say allow access once and I\'ll connect your contacts, calendar, and calls on this phone permanently."\n- If access granted but no match, say you checked memory and found nothing at that time \u2014 suggest they may have had a blocked/private number.\n\n'+b5+"\n"+b2+"\n"+b4+"\n"
w=27
return A.b(C.ah5(a9,q.a.c.a,c5),$async$n2)
case 27:a0=c9
a1=""
if(C.hrG(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.u(d)
b4=A.u(j)
b5=q.a.c.w?"\n"+C.i5g(m)+"\n":""
b6=J.ad(n)!==0?"\n"+A.u(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+A.u(a0)+"\n":""
c0=A.u(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hE6(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.u(c5)
w=28
return A.b(A.qT(o,a2,B.hG,null,null),$async$n2)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bBK(a8.a,a3.a)
a4=c2
a5=A.hr2(a4)
c3=a5.a
a8.b=c3
if(B.d.gan(c3)){a9=A.C(C.i7Z(c5),x.an)
a6=a9
J.h6(a6,C.i8_(c5))
J.h6(a6,C.i80(c5))
J.h6(a6,A.hqu(c5))
J.h6(a6,C.i83(c5,q.a.c.w))
a8.b=a6}c3=C.i7c(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.ahm(c3,a6,m,q.a.c.a),$async$n2)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cE1(a8,q,a7))
C.U6(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.JU(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cE2(q))
C.U6(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cE3(q))
q.azI()
q.afS()
if(!q.a.c.w)q.tX()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$n2,v)},
ciB(d){var w=A.U(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
ciC(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.is
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gR(v)
if(u.b(r)){q=A.ce5(A.a2(r,t,s))
if(q!=null)w.push(q)}}return w},
JU(d){return this.cqr(d)},
cqr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$JU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gR(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.ahh(p,o,new C.cDV(t,p)),$async$JU)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.GK(p,null,o,!1,!0,t.a.c.a),$async$JU)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.K(r).f
p.U(new A.b1(new A.y(m,null,null,null,null,null,null,null,null,null,null,null),B.cc,null,null,null,null,null,null,null,null,null,null,null,B.lo,!1,null,null,null,B.r,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.GK(p,l.f,o,k,n,j),$async$JU)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a4(p)
n=o.h(p,"name")
h=B.a.i(n==null?"":n)
p=o.h(p,"phone")
g=B.a.i(p==null?"":p)
p=t.a.c.a
o=Date.now()
n=Date.now()
l=g.length!==0?g:null
k=h.length!==0?h:null
w=14
return A.b(C.aYw(p,A.a([new C.rp("out_"+1000*o,new A.T(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$JU)
case 14:t.aqJ()
case 13:p=t.c.K(r).f
p.U(new A.b1(new A.y(m,null,null,null,null,null,null,null,null,null,null,null),B.cS,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$JU,v)},
RX(d){return this.czf(d)},
czf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$RX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.ahh(d,n,new C.cEb(t)),$async$RX)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.GK(d,null,n,!1,!0,t.a.c.a),$async$RX)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(A.b2(null,null,null,B.cc,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.lo,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.GK(d,q.f,r,p,n,o),$async$RX)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.K(x.q).f.U(A.b2(null,null,null,B.cS,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RX,v)},
crU(d){$.aW.x1$.push(new C.cDW(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.P(d).ax.a===B.I,j=k?B.db:B.B0,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.agl,D.beD],w):A.a([B.aK,B.xl],w)
v=A.n(22)
u=A.a([new A.ac(0,B.G,A.Z(71,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.cC,16)],x.V)
t=m.a.c.w?m.gcee():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.bV,B.q,1.5)
t=A.aB(l,A.p(l,C.h1z(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a5)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.de,l,l,l)
s=A.p(l,l,B.f,l,l,D.b15,l,8,l,l,l,l,l,8)
if(m.gaA5()&&m.d===0)q=m.gOR()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.be,A.E(A.x(A.a([r,B.bC,A.B(A.a([s,B.bp,A.E(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cx,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mF,l,l,l,new C.cEh(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a9(B.az,B.aC,B.x,w,l,l),B.n),l,l,l,F.ai8,D.bua,l,l,l)
v=k?D.tn:B.c
u=A.n(14)
t=A.I(k?B.bD:B.e3,B.q,1)
u=A.p(l,A.B(A.a([m.bFH(),m.cyZ(1,B.lY,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.el,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaA5()){v=A.a([],p)
if(m.gOR()){s=A.Z(38,B.cS.l()>>>16&255,B.cS.l()>>>8&255,B.cS.l()&255)
r=A.n(12)
q=A.I(A.Z(115,B.cS.l()>>>16&255,B.cS.l()>>>8&255,B.cS.l()&255),B.q,1)
v.push(new A.D(B.Mz,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hI4(m.gaVk())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fg2,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.ek,l,l,1/0),l))}if(m.cy&&!m.gOR()){s=A.Z(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
r=A.n(12)
q=A.n(12)
o=A.X(B.q2,k?B.j2:B.hm,l,l,l,16)
v.push(new A.D(B.Mz,A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,new A.D(B.ek,A.B(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.j2:B.hm,l,l,l,l,l,l,l,l,12,l,l,B.P,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b9,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcpS(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ah),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcAU():l
v.push(A.E(new C.aq1(s,q,new C.cEi(),r,o,l),1))
v=A.x(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bFI(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.her(r)
t=A.a([w,B.ac,new A.D(B.hS,u,l),B.O,A.E(A.hfp(A.a([v,new C.aq4(q,o,n,new C.cEj(m,d),s,l)],p),B.r,t,B.y,new C.cEk(m),l),1)],p)
if(m.d===0&&!m.gaA5()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a3c:D.a2x
w.push(new A.a7(l,36,A.hN(l,new C.cEl(m),v.length,l,l,B.aP,new C.cEm(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.O)
v=m.r
u=A.l(l,l,k?B.c:B.bk,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dB,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.n(22)
o=A.n(22)
n=k?B.b_:B.fe
u=A.E(A.aM(l,B.U,!1,l,!0,B.r,l,A.aN(),v,l,l,l,l,l,2,A.bs(l,new A.b4(4,q,B.Y),l,B.Bm,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.q,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.aj,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cEn(m),l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a4,l,B.an,l,B.aQ7,l,l),1)
s=m.at
r=s?l:m.gcsY()
w.push(A.B(A.a([u,new A.IV(v,B.aK,l),B.bp,A.aF(!1,B.a1,!0,l,A.aL(!1,l,!0,new A.a7(44,44,s?D.ecA:T.anG,l),B.cM,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aK,0,l,l,B.cM,l,l,B.ah)],p),B.dz,l,B.e,B.j,0,l,l))
w=A.x(w,B.m,l,B.e,B.N,0,B.p)
v=k?B.lj:B.c
t.push(A.u7(B.tb,A.p(l,new A.D(B.Fy,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.q,1),B.tb,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Wg(i,new C.cEo(m),A.c6(l,j,A.bm(!0,A.x(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),l,!1,!1,l,l),l)},
bFH(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.P(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.n(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.q,1):q
s=A.X(B.u4,w?B.aK:B.cX,q,q,q,17)
if(w)r=v?B.c:B.aw
else r=B.cX
return A.E(A.aB(q,A.df(q,A.B(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,q,B.bd,new A.o(p,q,t,u,q,q,B.n),B.eJ,q,q,q,B.tQ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cDD(this),q,q,q,q,q,q,!1,B.a5),1)},
cyZ(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.P(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.n(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.q,1):q
s=A.X(e,w?B.aK:B.cX,q,q,q,17)
if(w)r=v?B.c:B.aw
else r=B.cX
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.E(A.aB(q,A.df(q,A.B(r,B.m,q,B.b9,B.j,0,q,q),q,q,B.bd,new A.o(p,q,t,u,q,q,B.n),B.eJ,q,q,q,B.tQ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cEa(this,d),q,q,q,q,q,q,!1,B.a5),1)},
bFI(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bk3:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.n(18)
v=A.I(d?B.dn:B.aL,B.q,1)
u=q===0?1:q
return A.p(s,A.ke(!0,s,t.ok,new C.cDE(t,e,d),u,s,B.bP,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hS,s,s,s,s)},
aOM(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a4(d),m=J.A(n.h(d,"role"),"user"),l=m?B.is:this.ciC(d),k=m?B.m3:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a7(28,28,C.h1z(this.a.f.Q,28),o),B.ab],j))
w=m?B.dz:B.F
j=A.a([],j)
if(h)j.push(D.ecQ)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aK
else u=e?B.XJ:B.aQ
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bD:B.aL,B.q,1)
q=A.a([new A.ac(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dE,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dB,o,o,o,o,o,o,o,o,12,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bm
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fYB(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bn(B.lc,B.lc,new A.aS(t,t),new A.aS(s,s)),q,o,B.n),o,o,o,o,Ad.Bl,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hr7(l,e,this.gcze()))
i.push(new A.dq(1,B.co,A.x(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.dc)
return new A.D(B.d9,A.B(i,B.dz,o,k,B.j,0,o,o),o)},
bFG(d,e){return this.aOM(d,e,!1)}}
C.aKn.prototype={
Z(){this.a1()
$.yN().aQ(0,this.gEq())},
q(){$.yN().a4(0,this.gEq())
this.a2()}}
C.aKo.prototype={
Z(){this.a1()
$.yN().aQ(0,this.gEq())},
q(){$.yN().a4(0,this.gEq())
this.a2()}}
C.aKp.prototype={
Z(){this.a1()
$.yN().aQ(0,this.gEq())},
q(){$.yN().a4(0,this.gEq())
this.a2()}}
C.aLl.prototype={
Z(){this.a1()
$.yN().aQ(0,this.gEq())},
q(){$.yN().a4(0,this.gEq())
this.a2()}}
C.W5.prototype={
a5(){return"NgmySnapshotResolveOutcome."+this.b}}
C.anu.prototype={
S(){return new C.aCf()}}
C.aCf.prototype={
Z(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bp(w.e,!0,x.o)
v.f=v.a.f},
l0(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Al(d,e){return this.cEw(d,e)},
cEw(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Al=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dxy(q,e))
t=3
w=6
return A.b(d.$0(),$async$Al)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dxz(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Al,v)},
AK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$AK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.uL(r,q),$async$AK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dxp(t,s))
case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
a9M(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a9M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AK(),$async$a9M)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.NN(s,A.K0(A.bZI(r,q,s,p).eS(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a9M,v)},
Xu(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.pb(s,t.a.c,!1),$async$Xu)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Al(new C.dxn(t),"Preparing download\u2026"),$async$Xu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xu,v)},
YY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.pb(s,t.a.c,!1),$async$YY)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Al(new C.dxx(t),"Creating QR code\u2026"),$async$YY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YY,v)},
YX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i05(r),$async$YX)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Al(new C.dxm(t,s),"Looking up code\u2026"),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
ada(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ada=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xi.c7().M6(B.QV,B.tY,!0),$async$ada)
case 7:r=e
p=r
q=p==null?null:J.fs(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aH.gan(p)}else p=!1
if(p){p=q.c
p.toString
p=A.js(p,0,null)
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
case 6:u=A.GG()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ada,v)},
A_(d,e,f){return this.bI3(d,e,f)},
aQ0(d,e){return this.A_(d,!1,e)},
bI2(d){return this.A_(d,!1,!1)},
bI3(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AK(),$async$A_)
case 3:if(t.c==null){w=1
break}if(!C.bZN(d,t.a.c,null)){t.l0(C.bZO(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hDO(d,s)}if(s){t.l0(y.B)
w=1
break}r=d.as
q=J.cn(r)
s=t.c
s.toString
w=4
return A.b(C.i0i(s,q,t.a.c,d),$async$A_)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lN(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.rt(s,p,r,!1,null,null,d.ax),$async$A_)
case 5:if(t.c==null){w=1
break}t.m(new C.dxl(t,p,r,d))
t.l0("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$A_,v)},
ad9(){var w=0,v=A.j(x.H),u=this
var $async$ad9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Al(new C.dxo(u),"Reading file\u2026"),$async$ad9)
case 2:return A.h(null,v)}})
return A.i($async$ad9,v)},
WO(d){return this.bJk(d)},
bJk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d4("local_qr_dep_"+1000*r,q.a,d,B.fu,B.fh,"Admin deposit ($"+A.dC(d)+")",null,null,B.cr,new A.T(Date.now(),0,!1))
C.cd_(t.d,s)
q=t.e
q===$&&A.c()
r=A.C(q,x.o)
r.push(s)
w=3
return A.b(A.rt(t.a.c,t.d,r,!0,null,null,null),$async$WO)
case 3:w=4
return A.b(t.AK(),$async$WO)
case 4:if(t.c==null){w=1
break}t.l0("Deposited $"+A.dC(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$WO,v)},
b5p(d){var w=null
return A.ca(w,w,!0,w,new C.dxv(),d,w,!0,!0,x.N)},
VV(d){return this.bBi(d)},
bBi(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$VV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.WO(d.b),$async$VV)
case 5:w=1
break
case 4:s=d.c
t.l0(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$VV,v)},
EL(d){return this.cnu(d)},
cnu(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$EL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AK(),$async$EL)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.b0p(d,t.a.c),$async$EL)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.l0("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.l0(y.y)
u=!0
w=1
break}if(s.c){t.l0(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b5p(r),$async$EL)
case 5:q=f
if(q==null||B.a.i(q).length===0){u=!0
w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.ccT(d,o,n.a,r,p),$async$EL)
case 7:w=6
return A.b(t.VV(f),$async$EL)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EL,v)},
EM(d){return this.cnv(d)},
cnv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$EM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AK(),$async$EM)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.ccS(d,t.a.c),$async$EM)
case 4:s=f
if(!s.a){t.l0(y.m)
w=1
break}if(s.b){t.l0("This deposit code was already used.")
w=1
break}if(s.d){t.l0(y.y)
w=1
break}if(s.c){t.l0(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b5p(r),$async$EM)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.VG(o,n.a,d,r,p),$async$EM)
case 7:w=6
return A.b(t.VV(f),$async$EM)
case 6:case 1:return A.h(u,v)}})
return A.i($async$EM,v)},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CX()){t.l0("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cm(A.ea(new C.dxq(),!0,null,x.N)),$async$P9)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.Al(new C.dxr(t,r),"Applying deposit\u2026"),$async$P9)
case 6:w=1
break
case 5:w=7
return A.b(t.Al(new C.dxs(t,r),"Loading\u2026"),$async$P9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=n?B.jj:B.pM,l=n?B.c:B.M,k=n?B.aS:B.ak,j=n?B.bD:B.w.j(0.06),i=x.p
j=A.B(A.a([A.aL(!1,o,!0,A.p(B.A,A.X(B.eF,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cM,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dxA(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cx,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.E(new C.a0t(D.bGT,"Download",E.a3s,u?o:p.gbOL(),o),1)
t=A.B(A.a([t,B.ep,A.E(new C.a0t(B.jv,"Show QR",D.dll,u?o:p.gc4c(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.E(new C.a0t(D.bGU,"Upload",B.a2T,u?o:p.gc4a(),o),1)
s=A.B(A.a([s,B.ep,A.E(new C.a0t(B.j5,"Scan QR",D.cWo,u?o:p.gc4b(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc49()
r=n?B.c.j(0.06):B.aV.j(0.08)
q=A.n(16)
q=A.a([A.cw(A.a([j,B.aB,w,B.O,v,B.kH,t,B.aB,s,B.aB,new C.brV(B.rm,"Enter Code",B.a2c,u,o),B.kH,A.p(o,A.B(A.a([A.X(B.hb,B.aV,o,o,o,18),B.at,A.E(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.jq,o,o,o)],i),o,Ac.MN,o,o,B.ag,!1)],i)
if(p.r){j=n?B.ih:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.D(B.Bp,A.B(A.a([I.aP4,B.be,A.E(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ah),o,o,0,0,o,o))}return A.c6(o,m,A.bm(!1,new A.an(B.W,o,B.aa,B.r,q,o),!0,!1,B.af,!0,!0),o,!1,!1,o,o)}}
C.a0t.prototype={
B(d){var w=this,v=null,u=A.n(22),t=A.n(22),s=w.e,r=A.n(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(v,A.x(A.a([A.p(v,A.X(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.t_,v,v,v)],x.p),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a9(B.az,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.bP,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.brV.prototype={
B(d){var w=this,v=null,u=A.n(22),t=A.n(22),s=w.e,r=A.n(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.X(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ep,A.d(w.d,v,v,v,v,v,v,B.t_,v,v,v)],x.p),B.m,v,B.b9,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a9(B.az,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.bwf,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_5.prototype={
S(){return new C.biZ()}}
C.biZ.prototype={
gawi(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a1()
w.QS()
w.f=A.dv(B.o4,new C.dxE(w))},
q(){var w=this.f
if(w!=null)w.a7(0)
this.a2()},
QS(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.uL(q.e,q.f),$async$QS)
case 3:q=e.a
s=A.bZI(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.NN(t.a.e,A.K0(s.eS(),null,"  ")),$async$QS)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dxB(t,r))
case 1:return A.h(u,v)}})
return A.i($async$QS,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.jj:B.pM,s=u?B.ih:B.c,r=u?B.c:B.bk,q=A.eF(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aS5,v,v,v,1,v,!0),p=A.n(24),o=A.I(B.aV.j(0.35),B.q,1),n=w.d,m=A.pT(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gawi(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.n(20),j=B.aV.j(0.12),i=A.n(20),h=x.p
i=A.aL(!1,k,!0,A.p(v,A.B(A.a([A.X(B.fQ,B.aV,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aV,v,v,v,v,v,v,v,v,12,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.N,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.mu,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dxC(w,d),v,v,v,v,v,v,v)
return A.c6(q,t,new A.D(B.a9,A.x(A.a([A.E(A.p(v,A.x(A.a([B.O,m,B.by,l,B.O,i,B.aB,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a9,v,v,1/0),1),B.aR,new A.a7(1/0,v,A.bG(B.zY,new C.dxD(d),A.bo(B.aV,v,v,v,v,B.fS,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.a_6.prototype={
S(){return new C.bj_(A.zm(B.xF,B.nN,B.un))}}
C.bj_.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fAK,w,w,w,1,w,!0),B.w,A.zl(this.d,B.bX,new C.dxF(this,d)),w,!1,!1,w,w)}}
C.aew.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.P(a0).ax.a===B.I,k=l?B.ih:B.c,j=l?B.c:B.M,i=l?B.aS:B.ak,h=l?B.b_:B.e3,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.n(26)
w=A.I(B.aV.j(0.35),B.q,1)
v=A.a([new A.ac(0,B.G,B.aV.j(0.16),B.ke,36)],x.V)
u=A.p(m,D.bMY,B.f,m,m,new A.o(m,m,m,A.n(18),B.a3r,D.bXm,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.jj:B.pM
q=A.n(18)
p=A.I(B.aV.j(0.22),B.q,1)
o=x.p
g=A.a([new C.Q0("Account",B.a.i(this.d),i,j,m),B.R,new C.Q0("Balance","$"+A.dC(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.R,new C.Q0("Investment",d,i,j,m)],o))
g.push(B.R)
g.push(new C.Q0("Saved on",""+A.bH(f)+"/"+A.bT(f)+"/"+A.bA(f),i,j,m))
g.push(B.R)
g.push(new C.Q0("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.x(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bP,m,m,1/0)
r=B.aF.j(l?0.14:0.12)
q=A.n(14)
p=A.I(B.aF.j(0.35),B.q,1)
n=A.X(B.yp,l?B.aM:B.d6,m,m,m,16)
return A.eL(m,B.K,new A.cS(B.VM,A.c0(new A.D(B.xY,A.x(A.a([u,B.aR,t,B.O,s,B.by,g,B.aB,A.p(m,A.B(A.a([n,B.ab,A.E(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bM:B.ij,m,m,m,m,m,m,m,m,11.5,m,m,B.P,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.ek,m,m,1/0),B.d8,A.B(A.a([A.E(A.dW(B.nG,new C.eY8(a0),A.dg(m,m,m,m,m,m,m,m,m,j,m,m,B.cm,m,new A.b7(A.n(14),B.Y),new A.az(h,1,B.q,-1),m,m,m,m)),1),B.at,A.E(A.bG(D.fjH,new C.eY9(a0),A.bo(B.aV,m,m,m,m,m,B.cm,m,new A.b7(A.n(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.N,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bf),m),m,m,m,B.ez,B.d1,m,m,m)}}
C.Q0.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a7(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.E(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Zd.prototype={
S(){return new C.azy(new A.as(B.as,$.aw()),A.jV(!0,null,!0,!0,null,null,!1))}}
C.azy.prototype={
Z(){this.a1()
$.aW.x1$.push(new C.d6A(this))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c4e(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a5(v,!1).O(w)
return null},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.ih:B.c,s=u?B.c:B.M,r=u?B.aS:B.ak,q=u?B.jj:B.pM,p=u?B.b_:B.e3,o=A.n(24),n=A.I(B.aV.j(0.35),B.q,1),m=A.a([new A.ac(0,B.G,B.aV.j(0.18),B.fR,32)],x.V),l=A.p(v,Ab.aon,B.f,v,v,new A.o(v,v,v,A.n(18),B.a3r,D.c_6,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.H,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.up(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.brp(new C.d6x())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.P,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eL(v,B.K,new A.cS(A4.KA,A.c0(new A.D(B.xY,A.x(A.a([l,B.aR,k,B.O,j,B.dZ,A.aM(!1,B.U,!1,v,!0,B.r,v,A.aN(),w.d,v,v,v,v,v,2,A.bs(v,v,v,B.FE,v,v,"",v,!0,new A.b4(4,A.n(16),new A.az(p,1,B.q,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.n(16),D.aZX),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.aj,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d6y(w),v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.m9,v,v,v,v),B.dZ,A.B(A.a([A.E(A.dW(B.nG,new C.d6z(d),A.dg(v,v,v,v,v,v,v,v,v,s,v,v,B.cm,v,new A.b7(A.n(14),B.Y),new A.az(p,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fnh,w.gc4d(),A.bo(B.aV,v,v,v,v,v,B.cm,v,new A.b7(A.n(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.N,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bf),v),v,v,v,B.MP,B.d1,v,v,v)}}
C.anZ.prototype={
S(){return new C.bj5(B.cH)},
hA(d){return this.x.$1(d)},
bs(){return this.y.$0()}}
C.bj5.prototype={
Z(){var w,v=this
v.a1()
w=v.a
w.toString
$.tv=$.tv+1
v.r=B.o.N(B.o.D(C.fEq(w.e,w.d.y2),1,600))
w=v.a
if(!J.lt(w.d.y2,w.e))v.r=C.i5J(v.a.e)
v.w=A.dv(B.fY,new C.dE_(v))},
q(){var w=this.w
if(w!=null)w.a7(0)
this.chs()
C.b_c()
this.a2()},
chs(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.o2(B.k.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hA(new A.d4(t,s.c.a,u,B.fI,B.fh,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cr,new A.T(Date.now(),0,!1)))
r.a.bs()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.uI(u,q,"Left early \xb7 +$"+B.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
K1(d,e){return this.ctD(d,e)},
b52(d){return this.K1(!1,d)},
ctC(d){return this.K1(d,"")},
ctD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$K1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a7(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.k.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.uI(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bDy(s,C.bDc(),C.h5d(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$K1)
case 5:w=1
break
case 4:n=A.o2(B.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dDR(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d4(s,p,n,B.fI,B.fh,q,null,null,B.cr,new A.T(Date.now(),0,!1))
A.ahf(l,!0)
t.a.hA(l)
t.a.bs()
if(m)k="+$"+B.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.ab(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.uI(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bDy(s,C.bDc(),C.h5d(),""+t.e+"/"+t.f,k,q,!0),$async$K1)
case 6:w=7
return A.b(C.ah7(t.a.f,k),$async$K1)
case 7:case 1:return A.h(u,v)}})
return A.i($async$K1,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.am(m,60)
v=B.a.aY(B.o.u(B.o.E(m,60)),2,"0")
u=A.aH(n,n,n,n,B.aoq,n,n,n,new C.dDU(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.E(A.x(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kj,n,n,n),A.d("Win $"+B.k.ab(t.w*1.46,2)+" \xb7 stake $"+B.k.ab(o.a.w,2),n,n,n,n,n,n,D.f8Y,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.av:B.c.j(0.1)
q=A.n(99)
q=A.B(A.a([u,t,new C.apC(r,new C.dDV(o),n),B.bp,A.df(n,A.B(A.a([D.bRu,B.dc,A.d(""+w+":"+v,n,n,n,n,n,n,B.ki,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bd,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.ra,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.E(A.by(A.n(99),A.m6(B.bD,n,n,9,n,r,new A.lZ(B.d.gI(m.r),x.dw)),B.aq),1),B.at,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.fhS,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.n(22)
u=A.a([B.d.gI(o.a.r).j(0.35),F.agd],x.O)
p=o.x
return C.aPr(n,D.bl1,A.bm(!0,A.x(A.a([new A.D(D.bym,q,n),new C.Nr(w*r,w,v,n),new A.D(F.aiC,m,n),A.E(new A.D(B.YT,A.by(t,A.c0(A.e1(X.hpG(o.a.e,new X.zt(new C.dDW(o),new C.dDX(o),new C.dDY(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a9(B.b1,B.b5,B.x,u,n,n),B.n),B.bf),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.a6B.prototype={
B(d){var w=null,v=A.n(26),u=A.I(B.aF.j(0.5),B.q,1),t=A.a([new A.ac(0,B.G,B.aF.j(0.22),B.J,26)],x.V)
return A.eL(w,B.K,A.p(w,A.x(A.a([A.p(w,D.bLa,B.f,w,w,new A.o(B.aF.j(0.16),w,A.I(B.aF,B.q,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.aB,D.fwH,B.O,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.O,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aR,new A.a7(1/0,w,A.bG(D.fkp,new C.c7D(d),A.bo(B.aF,w,w,w,B.w,B.fS,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bXZ,B.n),w,w,w,w,D.bwG,w,w,w),w,w,w,B.aj8,B.d1,w,w,w)}}
C.ant.prototype={
S(){return new C.biX(null,null)},
gY(d){return this.e}}
C.biX.prototype={
Z(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.Bb,u,1,u,v)
w.dd()
w.dW$.L(0,new C.dxa(v))
w=A.bj(u,B.mp,u,1,u,v)
w.cM(0)
v.e=w
w=A.bj(u,B.Mf,u,1,u,v)
w.cM(0)
v.f=w
w.dd()
w.dW$.L(0,new C.dxb(v))
if(v.a.c){v.d.cM(0)
v.e.bR(0)
v.f.bR(0)}},
bv(d){var w,v,u=this
u.bG(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cM(0)
w=u.e
w===$&&A.c()
w.bR(0)
w=u.f
w===$&&A.c()
w.bR(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bR(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.buY()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.QW[B.o.E(a9.r,5)]:b4
w=!b3&&b4==null?D.QW[B.o.E(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.u(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.u(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.cS:B.bz
else if(w!=null){b1=(w>0?B.cS:B.bz).j(0.45)
u=b1}else u=B.c
b1=a9.a.c
if(b1){b3=a9.d
b3===$&&A.c()
b3=b3.x
b3===$&&A.c()
t=b3*3.141592653589793*2}else t=0
b3=a9.e
b3===$&&A.c()
b3=b3.x
b3===$&&A.c()
s=b3*3.141592653589793*2
b3=a9.f
b3===$&&A.c()
b3=b3.x
b3===$&&A.c()
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
f=A.a([],g)
if(!a9.a.c){e=q*8
d=x.V
b3=A.a([A.ef(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ac(3,B.G,B.b7.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.bu,B.aM,B.o.E(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dX(new A.iJ(A.wn(a4+a3),b0,B.A,!0,b0,a8,b0),new A.v(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dX(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.n(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.v(0,n+b3)))
b1=A.dp()
d=b1.a
d.$flags&2&&A.aj(d)
d[11]=0.0025
b1.mO(o)
b1.jR(k,k,k,1)
b1.kb(l)
b1.fF(m)
d=b2*0.2
a1=A.n(d)
if(a9.a.c)a2=D.d0T
else{a2=A.aq(B.c,B.kp,q*0.45)
a2.toString
a2=A.a([a2,B.bL,B.cs],x.O)}a4=A.aq(B.bK,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.q,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.e9G,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.Sr,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bU(0,A.c0(b0,new A.o(b0,b0,b0,A.n(d),b0,new A.a9(new A.dc(-1+Math.cos(j)*0.8,-1),new A.dc(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bf),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.n(6),b0,new A.a9(B.a3,B.a8,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cR(B.w.j(0.18),B.dE,5)],x.C)
if(!a9.a.c)d.push(new A.cR(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.vw(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bd,B.jo,b3),b0,b0,b0))
f.push(A.dX(A.fw(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.r,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a9(B.az,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.v(0,n)))
return new A.a7(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aKV.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.Nr.prototype={
B(d){var w=null,v=new C.c9C(),u=v.$3("STAKE","$"+B.k.ab(this.e,2),B.c),t=A.n(18),s=A.I(B.bv.j(0.7),B.q,1.4),r=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.J,14)],x.V),q=x.p
return new A.D(B.Mz,A.B(A.a([u,A.p(w,A.x(A.a([D.fvn,A.mG(new C.c9B(),w,B.bd,B.ne,w,w,new A.bq(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.apc,B.n),w,w,w,w,B.MK,w,w,w),v.$3("FULL WIN","$"+B.k.ab(this.d,2),B.bM)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.apC.prototype={
B(d){var w=null,v=A.n(99),u=A.I(B.jD.j(0.7),B.q,1)
return A.p(w,A.B(A.a([D.bJD,B.dc,C.aqs(this.d,B.nF,this.c)],x.p),B.m,w,B.e,B.N,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.apc,B.n),w,w,w,w,B.MU,w,w,w)},
ge2(){return this.c}}
C.Nz.prototype={
S(){return new C.bjD(null,null)}}
C.bjD.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.mp,null,1,null,v)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bvy()},
aNG(d,e){var w=this.a.d,v=A.S(w).k("M<1,m>"),u=A.C(new A.M(w,C.ibG(),v),v.k("ak.E"))
w=this.d
w===$&&A.c()
return A.c7(w,new C.dXa(this,u),null)},
B(d){var w=null
if(this.a.e)return A.c6(w,D.afG,A.bm(!0,this.aNG(0,d),!0,!1,B.af,!0,!0),w,!1,!1,w,w)
return this.aNG(0,d)},
ax3(d,e,f){var w=null,v=f.j(0.16),u=A.n(10)
return A.B(A.a([A.p(w,A.X(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.at,A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aLu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.adk.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.ec,o).w.r.d,m=this.c,l=J.cF(m),k=l.eQ(m,new C.dXd()).gM(0),j=new A.eb(l.dA(m,new C.dXe(),x.cD),x.bG).cJ(0,0,new C.dXf())
o=A.aI(d,B.bY,o).w
w=x.p
v=A.a([B.R,A.p(p,p,B.f,p,p,new A.o(B.b_,p,p,A.n(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.D(B.aiQ,A.B(A.a([A.p(p,D.bTU,B.f,p,p,new A.o(p,p,p,A.n(14),A.a([new A.ac(0,B.G,B.f0.j(0.45),B.J,14)],x.V),D.ap6,B.n),p,44,p,p,p,p,p,44),B.be,D.bAC,A.aH(p,p,p,p,B.lw,p,p,p,new C.dXg(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcl(m)){u=C.h00("GAMES",""+l.gM(m),B.eD)
t=C.h00("WON",""+k,B.jD)
s=j>=0
r=s?"+":"-"
q=C.bzZ(j)
s=s?B.jD:B.f1
v.push(new A.D(D.buT,A.B(A.a([u,B.ab,t,B.ab,C.h00("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gan(m))v.push(new A.D(new A.R(24,36,24,24+n),A.x(A.a([A.X(D.bFC,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.am,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dq(1,B.co,A.hN(p,new C.dXh(this),l.gM(m),new A.R(14,2,14,16+n),p,B.ag,new C.dXi(),!1),p))
return A.p(p,A.x(v,B.m,p,B.e,B.N,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.b1N,p,p,p,p,p,p,p,p)}}
C.adj.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!B.a.t(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&B.a.a0(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=B.c8
else if(u)r=B.ds
else{w=v?B.aM:B.bv
r=w}q=h.gbgD()
w=new C.dXc()
s=A.n(14)
p=A.a([r.j(0.13),D.bjX],x.O)
o=A.I(r.j(0.4),B.q,1)
n=A.X(g?B.mz:B.cB,r,i,i,i,16)
m=A.E(A.d(h.b,i,1,B.a2,i,i,i,B.rZ,i,i,i),1)
l=r.j(0.2)
k=A.n(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.byh,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bzZ(q)}else{l=g?"+":"-"
l+=C.bzZ(h.d)}j=x.p
l=A.B(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dXb("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.dc,C.dXb("PAID",C.bzZ(g?h.d:0),r),B.dc,C.dXb("BEFORE",w.$1(h.x),B.eD),B.dc,C.dXb("AFTER",w.$1(h.y),B.ds)],j),B.m,i,B.e,B.j,0,i,i)
n=C.i7g(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.x(A.a([l,B.am,w,B.au,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.ai,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a9(B.az,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l_,i,i,i)}}
C.aAb.prototype={
S(){return new C.bfh(B.cH,null,null)}}
C.bfh.prototype={
Z(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.mq,null,1,null,t)
w.cM(0)
t.d=w
v=J.e2(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.adJ(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[Z.a4B,B.rB,B.cU,B.c][w.av(4)],[B.i9,B.lr,B.dY,B.G2][w.av(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bus()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c7(v,new C.ddB(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ah),w,w,w)}}
C.adJ.prototype={
gY(d){return this.f}}
C.aKq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.b0_.prototype={
B(d){return new A.tm(new C.cbT(this),null,new A.hb(A.a([$.yN(),$.a2I()],x.U)),null)},
ge2(){return this.c}}
C.N2.prototype={
cbr(){if(this.c!=null)this.m(new C.c01())}}
C.IH.prototype={}
C.ap3.prototype={
S(){return new C.aD0(B.cH,new A.as(B.as,$.aw()))},
cG7(){return this.d.$0()},
cRL(){return this.f.$0()},
cRz(d,e){return this.r.$2(d,e)},
cSm(d,e,f){return this.w.$3$bonus(d,e,f)},
ge2(){return this.c}}
C.aD0.prototype={
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a2()},
asP(){var w=A.d6(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
AM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$AM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.asP()
if(s<2){t.ax4("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cG7()<s){t.ax4("Insufficient balance.")
w=1
break}if(!t.a.cRz(s,"Dice Roll bet")){t.ax4("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dQd(t))}w=3
return A.b(C.c8N(t.a.e),$async$AM)
case 3:r=t.a
q=C.i9l(r.e,r.c,t.d)
t.a.cRL()
A.aZA(t.a.e)
t.m(new C.dQe(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bM(new A.ba(1000*(40+p*6)),null,r),$async$AM)
case 7:if(t.c==null){w=1
break}new C.dQf(t).$0()
t.c.eh()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bM(B.jG,null,r),$async$AM)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.h4_(q)
t.m(new C.dQg(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cSm(m,"Dice Roll "+n,o)
t.m(new C.dQh(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(m,2)+" added to your balance"
w=12
return A.b(C.bDy(r,C.bDc(),new C.dQi(t),n,k,"YOU WIN!",!0),$async$AM)
case 12:w=13
return A.b(C.ah7("Dice Roll",l?"+$"+B.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(m,2)+" added to your balance"),$async$AM)
case 13:w=10
break
case 11:w=14
return A.b(C.bDy(r,C.bDc(),new C.dQj(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$AM)
case 14:C.uI(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$AM,v)},
ax4(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.asP(),d=x.w,a0=A.aI(a2,B.ec,d).w,a1=Math.min(A.aI(a2,B.bY,d).w.a.a*0.44,200)
d=A.hn(Q.anB,D.fCD,new C.dQm(a2),f)
w=A.n(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b8,A.p(f,A.B(A.a([B.anx,B.bp,C.aqs(v.d,B.jb,u)],t),B.m,f,B.e,B.N,0,f,f),B.f,f,f,new A.o(B.cU,f,f,w,f,f,B.n),f,f,f,f,B.lp,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.XP.l()>>>16&255,D.XP.l()>>>8&255,D.XP.l()&255)
d=A.n(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
r=g.x
d=A.E(A.p(f,A.av(new C.ant(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a7,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.QW[q]
o=C.h4_(p)
n=p>0?B.bc:B.av
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aS(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.q,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.QH
m=m?18:15
s.push(new A.bB(1,B.bg,new A.D(B.jr,A.p(B.A,new A.y(o,f,new A.H(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bO(h,h,h,h),new A.bn(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.am,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.h4_(v)
s=g.r
s.toString
d.push(new A.D(B.jI,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.aZ:B.c8,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.R)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.am)
v=x.bL
v=A.C(new A.M(A.a([2,5,10,25],x.n),new C.dQn(g),v),v.k("ak.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.E(new A.D(B.Zz,A.aM(f,B.U,!1,f,!0,B.r,f,A.aN(),g.e,f,f,f,f,f,2,A.bs(f,new A.b4(4,A.n(10),B.Y),f,B.jH,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.kJ,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.aj,f,f,f,f,f,B.dQ,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.hw,!0,B.L,f,B.an,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.O)
d.push(new A.bI(B.a8,f,f,A.d("Perfect Score Profit: +$"+B.k.ab(g.asP()*0.46,2),f,f,f,f,f,f,D.fb1,f,f,f),f))
d.push(B.R)
d=A.E(new A.D(B.hS,A.x(d,B.ai,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcqb()
s=A.fq(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.n(14),B.Y),f,f,f,f,f)
return C.aPr(f,D.XY,A.bm(!0,A.x(A.a([new A.D(D.byI,w,f),new C.Nr(u,e*1.46,e,f),A.E(A.x(A.a([d,new A.D(new A.R(14,4,14,8+a0.r.d),new A.a7(1/0,52,A.ik(A.d("\ud83c\udfb2 ROLL ($"+B.k.ab(e,2)+")",f,f,f,f,f,f,B.le,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.apI.prototype={
S(){return new C.aDh(B.kE,new A.as(B.as,$.aw()))},
cRr(d){return this.e.$1(d)}}
C.aDh.prototype={
garC(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cH.av(89999))
this.r!==$&&A.bL()
this.r=w
v=w}return v},
gQk(){var w=this.d,v=this.a
return w===B.kE?B.a.i(v.f.a):B.a.i(v.f.b)},
ga91(){var w=this.gQk(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aK(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a2()},
IY(d,e){return this.bIu(d,e)},
bIu(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$IY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fO(new A.fF(d)),$async$IY)
case 2:A.eY()
t=u.c
if(t!=null)t.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$IY,v)},
Qf(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gQk().length===0){r.c.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jl()
o=B.k.ab(r.a.d,2)
q=r.d===B.kE?A.cE("https://cash.app/"+r.ga91()+"/"+o,0,null):A.cE("bitcoin:"+r.gQk(),0,null)
t=4
w=7
return A.b(A.iW(q,B.fn,null),$async$Qf)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kE?r.ga91():r.gQk()
w=10
return A.b(r.IY(n,r.d===B.kE?"Cash App tag":"Bitcoin address"),$async$Qf)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kE?r.ga91():r.gQk()
w=11
return A.b(r.IY(n,r.d===B.kE?"Cash App tag":"Bitcoin address"),$async$Qf)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qf,v)},
a0i(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hT().bhm(B.eG),$async$a0i)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fe(),$async$a0i)
case 4:s=e
t.m(new C.dXA(t,B.a.cc(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
c7R(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kE?C.hqY(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kE?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.K(x.q).f.U(A.b2(u,u,u,u,u,B.r,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.T,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.K(x.q).f.U(A.b2(u,u,u,u,u,B.r,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.T,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.T(Date.now(),0,!1).u(0)
w=v.a
t.cRr(new A.d4(s,w.c.a,w.d,B.fu,v.d,r,v.f,v.garC(),B.dv,new A.T(Date.now(),0,!1)))
w=v.c
w.toString
A.iR(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eF(o,o,o,!0,!0,B.AG,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.GM,o,o,o,new C.dXB(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fm_,o,o,o,1,o,!0),m=A.n(26),l=A.I(D.eL.j(0.25),B.q,1),k=x.V,j=A.a([new A.ac(0,B.G,B.b0.j(0.25),B.eV,24)],k),i=x.p
j=A.p(o,A.x(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.am,A.eQ(B.A,A.d("$"+A.dC(p.a.d),o,o,o,o,o,o,D.f5f,o,o,o),B.f,B.dw),B.am,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eL.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.c_X,B.n),o,o,o,o,D.bwj,o,o,o)
m=p.c2Y()
l=p.aAL(1,"Send the money to NGMY Pay",p.c7P())
w=p.aAL(2,"Put this code in the payment note",p.bH4())
v=p.d===B.kE
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aAL(3,u,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.e,o,o,o,o,o,2,A.bs(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.n(18),new A.az(B.c.j(0.08),1,B.q,-1)),o,o,o,o,o,B.tD,!0,o,o,o,o,new A.b4(4,A.n(18),D.aZS),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.f6I,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.t_,!0,B.a4,o,B.an,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.n(20)
s=r?D.eL:B.c
s=A.I(s.j(r?0.5:0.12),B.q,1.4)
q=r?A.x(A.a([A.by(A.n(14),new A.cS(D.b0h,new A.ED(p.f,o),o),B.aq),B.O,D.eRv,B.au],i),B.m,o,B.e,B.j,0,B.p):A.x(A.a([A.p(o,D.bT4,B.f,o,o,new A.o(D.eL.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.R,D.frg,B.cV,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b6y(4,"Screenshot of your payment",A.aB(o,A.p(o,q,B.f,o,o,new A.o(B.tD,o,s,u,o,o,B.n),o,o,o,o,new A.R(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcjj(),o,o,o,o,o,o,!1,B.a5),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a7,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.n(18)
k=A.a([new A.ac(0,B.G,B.b0.j(0.45),B.dp,18)],k)
return A.c6(n,B.AG,A.av(new A.cS(B.abx,A.cw(A.a([j,B.by,m,B.by,l,w,t,v,B.am,u,B.aR,new A.a7(o,56,A.c0(A.ly(D.bRJ,D.fBR,p.gc7Q(),A.fq(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.n(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bZy,B.n),B.bf),o)],i),o,D.bvO,o,o,B.ag,!1),o),o,o,o),o,!1,!1,o,o)},
c2Y(){var w=null,v=new C.dXw(this),u=A.n(18),t=A.I(B.c.j(0.06),B.q,1)
return A.p(w,A.B(A.a([v.$3(B.kE,B.hT,"Cash App"),B.eg,v.$3(B.a61,D.anh,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.tD,w,t,u,w,w,B.n),w,w,w,w,B.lW,w,w,w)},
b6y(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.fbN,v,v,v),B.f,v,v,D.b10,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.E(A.p(v,v,B.f,D.eL.j(0.18),v,v,v,v,v,B.vB,v,v,v,2),1))
t=A.x(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.E1(A.B(A.a([new A.a7(34,v,t,v),B.at,A.E(new A.D(new A.R(0,0,0,w),A.x(A.a([new A.D(B.YR,A.d(e,v,v,v,v,v,v,A5.TX,v,v,v),v),f],u),B.ai,v,B.e,B.j,0,B.p),v),1)],u),B.ai,v,B.e,B.j,0,v,v),v)},
aAL(d,e,f){return this.b6y(d,e,f,!1)},
c7P(){var w,v,u,t,s=this,r=null,q=s.d===B.kE?s.ga91():s.gQk(),p=A.n(20),o=A.n(20),n=s.d===B.kE,m=n?D.bYt:D.c_g,l=A.a([new A.ac(0,B.G,(n?D.afV:D.WN).j(0.35),B.cC,16)],x.V),k=A.n(12)
n=s.d===B.kE
w=n?B.hT:D.anh
k=A.p(r,A.X(w,n?D.afV:D.WN,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kE
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.E(A.x(A.a([n,B.bC,v,B.au,A.B(A.a([D.bOw,B.dc,A.d(s.d===B.kE?"Tap to pay $"+A.dC(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.qz,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aL(!1,p,!0,A.eH(A.B(A.a([k,B.be,v,A.aH(r,r,r,r,D.bNA,r,r,r,w?r:new C.dXz(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.aiw,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcey(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
bH4(){var w,v,u,t,s,r,q,p,o=null,n=A.n(20),m=A.I(B.b6.j(0.35),B.q,1),l=x.p,k=A.a([],l)
for(w=this.garC().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aS(12,12)
q=A.a([B.b6.j(0.28),B.b6.j(0.08)],u)
p=new A.az(B.eD.j(0.4),1,B.q,-1)
k.push(A.p(B.A,new A.y(s,o,B.DL,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bO(p,p,p,p),new A.bn(r,r,r,r),o,new A.a9(B.b1,B.b5,B.x,q,o,o),B.n),o,52,o,B.jr,o,o,o,42))}return A.p(o,A.x(A.a([A.B(k,B.m,o,B.b9,B.j,0,o,o),B.ac,A.B(A.a([A.E(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hn(B.a1h,D.fDN,new C.dXv(this),A.fz(o,o,o,o,o,o,o,o,o,o,o,B.eD,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.tD,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.ro.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rp.prototype={
ag(){var w=this
return A.F(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gVu(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.hbR(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aG(v," \xb7 ")},
gkz(d){return this.c}}
C.lE.prototype={
ag(){var w,v=this,u=A.U(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.ir.prototype={
ag(){var w,v=this,u=A.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.caS(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.ia.prototype={
akO(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.ia(v,u,t,s,r,h==null?w.f:h)},
bc_(d){var w=null
return this.akO(w,w,w,w,d,w)},
cJU(d,e,f){return this.akO(d,e,null,null,null,f)},
bbZ(d){var w=null
return this.akO(w,w,w,d,w,w)},
cJz(d,e){var w=null
return this.akO(w,w,d,w,e,w)},
ag(){var w=this,v=C.hVQ(w.c),u=w.e,t=A.S(u).k("M<1,a6<m,@>>")
u=A.C(new A.M(u,new C.caQ(),t),t.k("ak.E"))
return A.F(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b8S.prototype={}
C.Vj.prototype={
S(){return new C.aDt(new A.as(B.as,$.aw()),A.mD(0,null,null),A.a([],x.m))},
U0(d){return this.d.$1(d)}}
C.aDt.prototype={
Z(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.e0f(),x.i)
w=A.C(w,w.$ti.k("ak.E"))
B.d.b_(w,new C.e0g())
v.d=w
v.J6()},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.x.q()
this.a2()},
ae6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.J6()
u.m(new C.e09(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.U0(s),$async$ae6)
case 2:r=e
if(u.c!=null){u.m(new C.e0a(u))
t=u.c.K(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(A.b2(null,null,null,r?B.cS:B.av,null,B.r,null,s,null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$ae6,v)},
a8e(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a8e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.ia(q,"New Category",B.Gl,4284773515,D.axQ,p.length)
t.m(new C.e_T(t,s))
t.J6()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.e_U(s),p,null,!0,!0,x.i),$async$a8e)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e_V(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a8e,v)},
a1g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a1g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.e06(t,p))
q.bP(0,B.c9)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.caN(p,q,s),$async$a1g)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e07(t,r))
$.aW.x1$.push(new C.e08(t))
case 1:return A.h(u,v)}})
return A.i($async$a1g,v)},
aae(d){return this.bNc(d)},
bNc(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aae=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.e00(t),r,null,!0,!0,x.i),$async$aae)
case 2:s=f
if(s!=null)u.m(new C.e01(u,d,s))
return A.h(null,v)}})
return A.i($async$aae,v)},
bKV(d){this.m(new C.e0_(this,d))
this.J6()},
J6(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bc_(v)},
cbX(d,e){var w={}
w.a=e
this.m(new C.e05(w,this,d))},
YE(d){return this.c1T(d)},
c1T(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$YE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.ea(new C.e04(u,d),!1,null,x.H)
w=2
return A.b(A.a5(s,!1).cm(t),$async$YE)
case 2:return A.h(null,v)}})
return A.i($async$YE,v)},
bDd(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fz,B.bm],l):A.a([B.nS,B.ex],l)
w=A.n(16)
v=A.I(m?B.d_.j(0.35):B.ds,B.q,1)
u=A.X(B.dY,m?B.ds:B.dN,n,n,n,n)
t=A.E(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a_M:Aa.Ng
r=x.p
s=A.a([A.aL(!1,n,!0,A.B(A.a([u,B.ab,t,A.X(s,m?B.bK:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.e_X(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.R],r)
t=o.y
if(t.length!==0){q=(m?D.tn:B.c).j(0.65)
p=A.n(12)
u.push(A.p(n,A.ke(!0,n,o.x,new C.e_Y(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.abs,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cq,n,n,n))}u.push(B.O)
t=o.w
q=A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bK:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bm:B.aQ
q=A.E(A.aM(n,B.U,!1,n,!0,B.r,n,A.aN(),t,n,n,n,n,n,2,A.bs(n,new A.b4(4,A.n(14),B.Y),n,B.eR,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.e_Z(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a4,n,B.an,n,n,n,n),1)
m=o.f?n:o.gcqq()
p=A.bo(B.bj,n,n,n,n,n,B.jq,n,n,n,n,n)
u.push(A.B(A.a([q,new A.IV(t,B.bj,n),B.dc,A.bG(o.f?B.qw:D.anq,m,p)],r),B.dz,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.df(n,A.x(s,B.ai,n,B.e,B.j,0,B.p),n,n,B.bd,new A.o(n,n,v,w,n,new A.a9(B.a3,B.a8,B.x,l,n,n),B.n),B.iI,n,n,B.FB,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.P(d).ax.a===B.I,s=new C.b8S(t),r=t?B.db:B.bL,q=t?B.db:u,p=t?B.aQ:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc7V()
if(n)n=B.Tu
else n=A.X(B.yi,t?B.aQ:B.M,u,u,u,u)
w=x.p
o=A.eF(A.a([A.hn(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aUz(B.aK,u,O.VX,B.oc,D.fA7,v.gbzw())
q=v.bDd(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bK:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.c6(o,r,A.x(A.a([q,new A.D(B.FB,n,u),A.E(H.hgh(!1,new C.e0e(v,s),m.length,v.gcbW(),D.buF,u,!1),1)],w),B.ai,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Ps.prototype={
S(){return new C.baI()}}
C.baI.prototype={
Z(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.as(new A.bb(w.b,B.b4,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?D.tn:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bk,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,B.U,!1,s,!0,B.r,s,A.aN(),o,s,s,s,s,s,2,D.bUP,B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bk,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a4,s,B.an,s,s,s,s)
w=x.aS
w=A.C(new A.M(D.c0l,new C.cMQ(t),w),w.k("ak.E"))
w=A.bS(B.bA,w,B.bq,8,8)
v=x.gN
v=A.C(new A.M(D.cYY,new C.cMR(t),v),v.k("ak.E"))
u=x.p
v=A.cc(A.x(A.a([o,B.ac,w,B.ac,A.bS(B.bA,v,B.bq,0,8)],u),B.m,s,B.e,B.N,0,B.p),B.r,s,B.y,s,s,s,s,B.ag)
return A.em(A.a([A.bK(!1,B.dh,s,s,!0,s,s,new C.cMS(d),s,s),A.bG(B.pp,new C.cMT(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a_T.prototype={
S(){return new C.aFr()},
oM(d){return this.d.$1(d)}}
C.aFr.prototype={
Z(){this.a1()
this.d=A.bp(this.a.c.e,!0,x.u)},
ax6(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oM(v.bbZ(u))},
a8g(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.b0f(new C.ir("q_"+1000*s,"",D.cXx,null,!1,r.length)),$async$a8g)
case 2:t=e
if(t!=null){u.m(new C.eT2(u,t))
u.ax6()}return A.h(null,v)}})
return A.i($async$a8g,v)},
b0f(d){var w,v=this.c
v.toString
w=A.ea(new C.eT3(d),!1,null,x.u)
return A.a5(v,!1).cm(w)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.db:B.bL,s=u?B.db:v,r=u?B.aQ:B.M,q=w.a.c
s=A.eF(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aUz(B.aK,v,O.VX,B.oc,D.fFU,w.gbzY())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bK:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hN(v,new C.eT8(w,new C.b8S(u)),q,D.buO,v,B.ag,new C.eT9(),!1)
return A.c6(s,t,u,v,!1,!1,r,v)}}
C.a_S.prototype={
S(){return new C.aFq()}}
C.aFq.prototype={
Z(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.as(new A.bb(w.b,B.b4,B.aN),$.aw())
w=A.bp(w.c,!0,x.bP)
v.e=w
if(B.d.gan(w))J.cf(v.e,D.a5j)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
ae5(){var w=0,v=A.j(x.H),u=this,t
var $async$ae5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.GH(78,1920),$async$ae5)
case 2:t=e
if(t!=null)u.m(new C.eSZ(u,t))
return A.h(null,v)}})
return A.i($async$ae5,v)},
af8(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.ea(new C.eSX(u),!1,null,x.dZ)
w=2
return A.b(A.a5(r,!1).cm(t),$async$af8)
case 2:s=e
if(s!=null)u.m(new C.eSY(u,s))
return A.h(null,v)}})
return A.i($async$af8,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.P(a1).ax.a===B.I,g=h?B.db:B.bL,f=h?B.db:i,e=h?B.aQ:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eF(A.a([A.dn(S.a1q,B.pp,new C.eT0(j,a1),A.bo(B.aK,i,i,i,B.c,i,i,i,i,i,i,i)),B.at],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.n(14)
w=j.f
v=h?B.bK:B.ak
w=A.aB(i,A.by(e,K.aPu(A.n(14),B.bX,140,B.BH,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc7U(),i,i,i,i,i,i,!1,B.a5)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bm:B.aQ
u=A.n(16)
t=A.I(h?B.aJ:B.aL,B.q,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a7,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.E(A.aM(i,B.U,!1,i,!0,B.r,i,A.aN(),s,i,i,i,i,i,2,A.bs(i,B.eB,i,B.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cx,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.aj,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a9,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a4,i,B.an,i,i,i,i),1),new A.IV(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.el,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a7,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iI(B.aK,i,i,B.af,i,new C.eT1(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.tn:B.c
q=A.n(16)
p=A.n(16)
o=A.n(16)
n=A.I(B.bj.j(0.45),B.q,1)
m=A.p(i,D.bMk,B.f,i,i,new A.o(B.bj.j(0.12),i,i,A.n(12),i,i,B.n),i,i,i,i,B.bl,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ad(k)
l=A.E(A.x(A.a([l,B.au,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.c6(d,g,A.cw(A.a([f,B.O,w,B.d8,e,B.O,v,B.aR,u,B.O,t,B.au,s,B.ac,A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(i,A.B(A.a([m,B.ep,l,A.X(B.BN,h?B.bK:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fD,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcdw(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ah)],a0),i,B.bP,i,i,B.ag,!1),i,!1,!1,i,i)}}
C.d3v.prototype={}
C.Vk.prototype={
S(){return new C.aDv(A.jV(!0,null,!0,!0,null,null,!1))}}
C.aDv.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dJ(q.a.c,new C.e0Q())
w=A.C(w,w.$ti.k("J.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aV(q.a.c);w.C();){u=w.gR(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aG(v,"\n\n")
q.d=new A.as(new A.bb(w,B.b4,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
ax7(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geE())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.oO(v,r,u,t)
this.d.bP(0,new A.bb(s,A.hi(B.bw,r+t.length),B.aN))},
aZr(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.oO(w,v,v,u)
this.d.bP(0,new A.bb(t,A.hi(B.bw,v+u.length),B.aN))},
abY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$abY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.GH(78,1920),$async$abY)
case 3:s=e
if(s==null){w=1
break}t.m(new C.e0w(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abY,v)},
Y8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hT().a5H(B.eG),$async$Y8)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fe(),$async$Y8)
case 4:t.m(new r.e0B(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
abZ(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$abZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.as(B.as,t)
r=new A.as(new A.bb("https://",B.b4,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.e0z(s,r),q,null,!0,!0,x.y),$async$abZ)
case 2:if(e===!0)u.m(new C.e0A(u,s,r))
s.T$=t
s.P$=0
r.T$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$abZ,v)},
bEa(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fI(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.M(p,new C.e0s(),A.S(p).k("M<1,m>")).c0(0,new C.e0t())
for(p=J.aV(w.a),v=new A.f2(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gR(p)
if(B.a.a0(s,"## "))q.push(new C.lE("heading",B.a.i(B.a.b6(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lE("bullets",new A.M(A.a(s.split("\n"),u),new C.e0u(),t).c0(0,new C.e0v()).aG(0,"\n"),r,r))
else q.push(new C.lE("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a5j)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.d3v(n),l=n?B.aw:B.fL,k=A.d(p.a.d,o,o,o,o,o,o,B.cD,o,o,o),j=x.p
k=A.eF(A.a([A.dn(S.a1q,B.a8W,new C.e0G(p,d),A.bo(B.aK,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cp:B.iE
v=A.bS(B.bA,A.a([p.vC(E.Nh,"Bold",new C.e0H(p),m),p.vC(E.a_O,"Italic",new C.e0I(p),m),p.vC(E.akK,"Underline",new C.e0J(p),m),p.vC(Ae.a_V,"Heading",new C.e0K(p),m),p.vC(O.Ni,"Bullets",new C.e0L(p),m),p.vC(E.akJ,"Align",new C.e0M(),m),p.vC(B.G3,"Link",p.gbZV(),m),p.vC(B.q1,"Image",p.gbZU(),m),p.vC(A_.a06,"Video",p.gbZW(),m),p.vC(M.a14,"Signature",new C.e0N(p),m),p.vC(A_.Nj,"Divider",new C.e0O(p),m)],j),B.bq,4,4)
w=A.p(o,A.x(A.a([v,B.am,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dt:B.bn,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.ai,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.ajy,o,o,o)
v=n?B.db:B.c
u=A.n(12)
t=A.I(n?B.ee:B.e3,B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.j_:B.aw,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.E(new A.D(B.bP,A.p(o,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),r,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dt:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a4,o,B.an,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A6.Br,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.i3(n,A.S(n).k("i3<1>"))
j.push(A.p(o,A.bS(B.bA,n.gdM(n).dA(0,new C.e0P(p,m),x.g5).dJ(0),B.bq,0,8),B.f,o,o,o,o,o,o,o,B.MD,o,o,o))}return A.c6(k,l,A.x(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
vC(d,e,f,g){var w=null,v=g.a,u=v?B.db:B.c,t=A.n(8),s=A.n(8)
return A.hx(A.aF(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.D(B.cq,A.X(d,v?B.j_:B.aw,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ah),w,e,w,w)}}
C.dhU.prototype={}
C.aB4.prototype={
a5(){return"_KbView."+this.b}}
C.aq1.prototype={
S(){return new C.aDu(D.aVY)},
cQG(d,e){return this.e.$2$size(d,e)}}
C.aDu.prototype={
gazU(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gR(w)
if(v.a===this.e)return v}return null},
gcsD(){var w,v,u,t,s,r=this.gazU()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c7W(d){this.m(new C.e0p(this,d))},
ceH(d){this.m(new C.e0q(this,d))},
bCk(){this.m(new C.e0h(this))},
bCm(){this.m(new C.e0i(this))},
gb61(){var w=A.bp(this.a.c,!0,x.i)
B.d.b_(w,new C.e0r())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=new C.dhU(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bm.j(0.85)],e):A.a([B.ex.j(0.55),B.n3.j(0.45)],e)
w=A.n(22)
v=A.I((g?B.aJ:B.f9).j(0.55),B.q,1)
switch(i.d.a){case 0:g=i.bDq(f)
break
case 1:g=i.gazU()
g.toString
g=i.bE8(f,g)
break
case 2:u=i.gazU()
u.toString
t=i.gcsD()
t.toString
s=A.b0(u.d)
r=A.n(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.faR,h,h,h),B.f,h,h,new A.o(B.aK,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aw:B.c
p=A.n(16)
o=A.I(g?B.aJ:B.aL,B.q,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.en,10)],x.V)
m=g?B.fz:B.nS
l=A.n(8)
k=A.X(B.o9,g?B.ds:B.dN,h,h,h,14)
j=x.p
j=A.x(A.a([new C.aB2(f,i.gbCl(),u.c,s,"Answer",h),A.E(A.cw(A.a([r,B.ac,A.p(h,A.x(A.a([A.p(h,A.B(A.a([k,B.eg,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.ds:B.dN,h,h,h,h,h,h,h,h,11,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.N,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e7,B.h9,h,h,h),new C.b_w(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bP,h,h,1/0)],j),h,B.bux,h,h,B.ag,!1),1)],j),B.ai,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a9(B.b1,B.b5,B.x,e,h,h),B.n),h,h,h,B.hS,h,h,h,h)},
aWL(d){var w,v,u,t=null,s=d.a,r=s?D.tn:B.c,q=B.aE.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aJ:B.f9,B.q,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.i_(v.cQG(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.am,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.cS,t,t,t,t,t,t,t,t,12,t,t,B.P,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.x(q,B.m,t,B.e,B.j,0,B.p)},
bDq(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aB(t,u.aWL(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a5):u.aWL(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aQ:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cw(A.a([s,B.aB,v,B.am,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bK:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.by,A.im(!0,t,t,B.y,F.aP9,new C.e0k(u,d),u.gb61().length,t,B.dT,B.ag,!0)],x.p),t,D.buP,t,t,B.ag,!1)},
bE8(d,e){var w,v,u,t,s=null,r=A.bp(e.e,!0,x.u)
B.d.b_(r,new C.e0m())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hN(s,new C.e0n(this,r,d,e),t,B.vF,s,B.ag,new C.e0o(),!1)
return A.x(A.a([new C.aB2(d,this.gbCj(),e.c,w,e.b,s),new A.D(Aj.vG,u,s),A.E(v,1)],x.p),B.ai,s,B.e,B.j,0,B.p)}}
C.aB2.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.X(B.eF,u?B.aQ:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.n(12)
q=A.p(v,A.X(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cq,v,v,v)
return new A.D(D.by4,A.B(A.a([t,q,B.at,A.E(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.abR.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.tn:B.c,r=A.n(14),q=A.n(14),p=A.n(14),o=A.I(t?B.aJ:B.aL,B.q,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dE,6)],x.V),m=u.j(0.15),l=A.n(12)
l=A.p(w,A.X(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fM(1,A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(w,A.x(A.a([l,B.am,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aQ:B.M,w,w,w,w,w,w,w,w,10,w,w,B.H,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ah),w)}}
C.b_w.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fz:B.nS
u=A.n(8)
t=A.X(B.uc,w?B.ds:B.dN,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.dc,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.ds:B.dN,s,s,s,s,s,s,s,s,10,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.N,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cv,B.eE,s,s,s))}B.d.v(p,J.b6(this.c,new C.caO(r),x.l))
return A.x(p,B.F,s,B.e,B.j,0,B.p)}}
C.abJ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.D(D.bsI,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aQ:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.D(B.hC,A.by(A.n(12),K.aPu(r,B.bX,160,B.q1,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.D(B.hC,new C.aB3(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.D(B.vB,A.aL(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cl:B.bj,r,B.mP,r,r,r,r,r,r,r,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cGw(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iC(v?B.aJ:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cs:B.aJ,r,r,r,r,r,r,r,r,r,B.cF,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bK:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.D(B.Be,A.x(A.a([u,q,B.aR,t,B.au,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bK:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.C(new A.cP(new A.a_(A.a(q.b.split("\n"),x.s),new C.cGx(),x.cc),new C.cGy(s),v),v.k("J.E"))
return new A.D(B.kX,A.x(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.D(B.hC,A.iC(s.d.a?B.aJ:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bI
return new A.D(B.eK,C.hQ_(q,s.d),r)}}}
C.aB3.prototype={
S(){return new C.bgN()}}
C.bgN.prototype={
Z(){this.a1()
this.ae7()},
ae7(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ae7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d1(n,"http")&&!J.d1(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Yg(A.cE(n,0,null),null)
w=7
return A.b(J.ahZ(q),$async$ae7)
case 7:if(r.c==null){w=1
break}r.m(new C.dhV(r,q))
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae7,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bm:B.fe
u=A.n(12)
return A.p(B.A,A.X(B.qc,w?B.bK:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.n(12)
v=s.a
u=J.ahX(v)
return A.by(w,new A.fM(u,new A.an(B.A,t,B.aa,B.r,A.a([new A.Af(s,t),A.aH(t,t,t,t,A.X(v.f?B.akR:B.Nk,B.c,t,t,t,44),t,t,t,new C.dhX(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.aqP.prototype={
a5(){return"NgmyMusicLane."+this.b}}
C.IM.prototype={
a5(){return"NgmyMusicRhymeScheme."+this.b}}
C.rv.prototype={}
C.aq4.prototype={
S(){var w=null
return new C.aDw(new A.as(B.as,$.aw()),A.mD(0,w,w),A.a([],x.m),D.CV,D.aGD,w,w)},
ge2(){return this.d}}
C.aDw.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.nc,null,1,null,v)
w.fh(0,!0)
v.as!==$&&A.aP()
v.as=w
v.z=B.d.gI(D.a3U).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.T$=$.aw()
v.P$=0
w.e.q()
w.bvH()},
gaq8(){var w,v,u,t,s=this.x
if(s===D.CW)return null
s=s===D.CV
w=s?D.a3U:D.a30
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gI(w):null},
cts(d){return this.m(new C.e13(this,d))},
azH(){$.aW.x1$.push(new C.e0V(this))},
IZ(d){return this.csT(d)},
aZs(){return this.IZ(null)},
csT(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$IZ=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$IZ)
case 3:e=b2
if(!e){w=1
break}A.jW()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b4(a0,new C.e0X())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.hlO(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!B.a.t(d,"bible"))if(!B.a.t(d,"scripture")){if(!B.a.t(d,"biblia"))if(!B.a.t(d,"andiko"))if(!B.a.t(d,"gospel verse")){a5=A.af("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=A.af("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.hlO(a8)&&!p
q.m(new C.e0Y(q,a8))
q.azH()
k=B.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.e0Z(q))
q.azH()
w=1
break}t=5
j=A.n7(k)
i=new A.M(a0,new C.e1_(),A.S(a0).k("M<1,m>")).aG(0,"\n\n")
a0=C.i8L(m,p,o,q.x,n,q.y,q.gaq8(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+A.u(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.u(a8)
w=8
return A.b(A.qT(j,h,B.hG,null,null),$async$IZ)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bBK(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.e10(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.e11(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.e12(q))
q.azH()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IZ,v)},
bIe(){return this.IZ("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.P(d).ax.a===B.I,p=q?B.F8:D.biu,o=x.p
o=A.a([A.x(A.a([A.E(s.cs4(q),1),s.bHr(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbId()
u=A.n(28)
t=A.a([B.aM,B.aF],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aL(!1,r,!0,A.eH(D.ecT,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a9(B.a3,B.a8,B.x,t,r,r),B.n),r,r,r),B.rV,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rV,r,r,B.ah),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.r,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cs4(d){var w,v,u,t=this,s=null
if(t.x===D.CW)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.h_2(s,!1,B.K,0,0,w,A.fWh(t.cxW(d),B.Wg,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.X(B.ani,B.aE.j(0.5),s,s,s,52)
w.push(A.b66(new A.D(B.ez,A.x(A.a([u,B.aB,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dB,s,s,s,s,s,s,s,s,14,s,s,B.a7,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.aB,A.bS(B.fJ,A.a([t.ail("Full bongo love song ABAB",d),t.ail("Mix: group vs private jet \u2014 which flies?",d),t.ail("Song from John 3:16 + matching verses",d),t.ail("Fix my rhyme \u2014 paste your lines",d)],v),B.bq,8,8)],v),B.m,s,B.b9,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nU(D.btn,A.XH(new A.ov(new C.e0W(t,d),u+v,!0,!0,!0,0,A.t1(),s)),s))}return A.vD(0,s,B.r,t.e,B.y,s,s,A8.abo,s,s,!1,s,B.ag,!1,w)},
cxW(d){var w=this.as
w===$&&A.c()
return A.c7(w,new C.e1a(this,d),null)},
cxY(d){var w,v=this,u=null,t=A.n(14),s=v.r?u:new C.e1c(v),r=B.w.j(d?0.35:0.06),q=A.n(14),p=A.I(B.b7.j(0.35),B.q,1),o=v.gaq8()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Jn,u,u,u)
w=v.gaq8()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.E(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(u,A.B(A.a([o,B.ab,w,A.X(v.w?B.NL:B.rh,B.b7,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.nj,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
avk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.b0,B.aV],x.O)
break
case 1:w=A.a([B.bj,B.cl],x.O)
break
case 2:w=A.a([B.bE,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.n(14)
t=A.n(14)
s=this.r?n:new C.e0U(this,d)
r=A.n(14)
w=m?new A.a9(B.a3,B.a8,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Jn,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bk
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.df(n,A.x(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bd,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jH,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ah),1)},
cxZ(d,e){var w,v,u,t=this,s=null,r=t.x===D.CV?t.z:t.Q,q=A.n(20)
if(r===d.a)r=B.b7.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.n(20)
v=t.r?s:new C.e1d(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.TM,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aL(!1,w,!0,new A.D(B.fO,A.B(A.a([u,B.dc,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bk,s,s,s,s,s,s,s,s,10,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.N,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ah)},
ail(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a8P,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mL(w,u,v,w,this.r?w:new C.e14(this,d),w,w,w,w)},
bHr(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.n(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.q,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.D(G.aji,A.d("$"+B.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bk,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.CW?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.E(A.aM(r,B.U,!1,r,!0,B.r,r,A.aN(),w,r,r,r,r,r,2,A.bs(r,B.eB,r,B.ha,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bV:B.hP,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.aj,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.e0R(s),r,!1,r,r,!1,r,!0,r,B.a9,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a4,r,B.an,r,r,r,r),1)
u=s.r
t=u?r:new C.e0S(s)
l.push(A.B(A.a([v,new A.IV(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aL(!1,r,!0,A.eH(u?D.ed5:D.bOF,r,D.b1T,42,r,42),B.cM,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cM,r,r,B.ah)],m),B.dz,r,B.e,B.j,0,r,r))
return A.p(r,A.x(l,B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.vD,B.YX,r,r,r)}}
C.aLC.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
C.Vl.prototype={
ag(){var w=this
return A.F(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.ZC.prototype={
S(){return new C.aAu(null,null)},
bgT(){return this.f.$0()}}
C.aAu.prototype={
Z(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.brM,u,1,u,v)
w.cs(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.pT,u,1,u,v)
w.fh(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.lo,u,1,u,v)
w.cM(0)
v.f!==$&&A.aP()
v.f=w
w=A.bj(u,B.xI,u,1,u,v)
w.cs(0)
v.r!==$&&A.aP()
v.r=w},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
v=w.r
v===$&&A.c()
v.q()
w.bux()},
c7Y(){var w=this.d
w===$&&A.c()
w.eA(0).bB(new C.dfe(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bY,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc7X(),f=x.l,e=J.e2(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.Db(new C.dff(k,v,d),j,w,j)}f=A.C(e,f)
w=k.d
w===$&&A.c()
u=A.n(28)
t=A.I(B.c.j(0.22),B.q,1.5)
s=A.a([new A.ac(2,B.G,B.aF.j(0.35),B.J,40),new A.ac(0,B.G,B.aK.j(0.25),B.fR,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c7(new A.hb(A.a([r,q],x.U)),new C.dfg(k),j)
r=A.nT(B.jA,D.fD7,new C.dfh())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cx,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aZt(B.jL,"Resets in 24h"),B.ab,k.aZt(B.o9,"Help Topics ready")],o),B.m,j,B.b9,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.E(A.dW(D.fxv,new C.dfi(k),A.dg(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.mt,j,new A.b7(A.n(14),B.Y),new A.az(l,1,B.q,-1),j,j,j,j)),1))
k.a.toString
m.push(B.at)
k.a.toString
l=A.n(14)
m.push(A.E(A.bG(D.fCY,g,A.bo(B.aK,j,j,6,B.c,j,B.mt,B.aK.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aB(j,A.c7(w,new C.dfj(k),A.p(j,A.x(A.a([q,B.aB,r,B.R,p,B.O,n,B.by,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.N,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bXA,B.n),j,j,j,j,A9.aja,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dfk(),j,j,j,j,j,j,!1,B.a5),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aB(j,new A.an(B.W,j,B.aa,B.r,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a5),B.f,h,0,j,j,j,j,j,B.ah)},
aZt(d,e){var w=null,v=B.c.j(0.08),u=A.n(20),t=A.I(B.c.j(0.12),B.q,1)
return A.p(w,A.B(A.a([A.X(d,B.aF,w,w,w,13),B.eg,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fO,w,w,w)}}
C.aKv.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.NM.prototype={}
C.pV.prototype={}
C.aqC.prototype={
S(){return new C.aDT(A.a([],x.E),A.a([],x.s))}}
C.aDT.prototype={
gaqx(){return B.k.D(A.L7(this.a.c.a,new C.efE(this)),0,1/0)},
a8o(){var w,v=this,u=v.d,t=v.gaqx()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qS(u.a,t,!0,!1)},
Jr(d,e){var w,v,u,t=this,s=t.gaqx(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gaqx()
if(w<v-0.005)A.hr_(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qS(u.a,w,!0,!1)
A.qS(t.a.c.a,w,!0,!1)
A.AV(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aW.bY$.push(o)
w=$.Iz+1
$.Iz=w
if(w===1){w=$.hdl
if(w!=null)w.$0()}v=$.fYn.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bp(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bp(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lN(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aP9(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.vv(w,u,r,q,s.e,p)}o.d=t}o.P5()
o.a8o()
$.aW.x1$.push(new C.egk(o))
o.Q=A.dv(B.nd,new C.egl(o))
o.as=A.dv(B.fN,new C.egm(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a7(0)
v=w.as
if(v!=null)v.a7(0)
$.aW.hP(w)
C.hHS()
w.a2()},
cA6(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.T(Date.now(),0,!1)
v=p.r
if(!C.a7I(v,w)){if(C.fYp(p,q.e)){q.m(new C.eg2(q,p))
q.xT(!1,!0,!0)}else if(q.c!=null)q.m(new C.eg3())
return}if(!C.cd3(v.c?v.bU():v)){q.m(new C.eg4(p))
q.aZB(!1)
return}u=p.gCl()
if(u<=0)return
t=w.d_(A.c1(A.bA(w),A.bH(w),A.bT(w),12,0,0,0,0))
s=C.fYq(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.eg5())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b4(q.e,new C.eg6(r))){q.m(new C.eg7(p,w,u))
return}q.m(new C.eg8(q,p,u,w))
q.axI(new A.d4(r,p.a,u,B.fI,B.fh,"Clock-in daily earnings (local)",null,null,B.cr,w))},
j8(d){if(d===B.fw)this.EG()},
P5(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bh=p.bh
w.c6=A.bp(p.c6,!0,x.N)
w=this.a.c
w.bF=p.c6.length
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
q=new A.vv(u,t,s,r,v.e,q)
u=q}w.x=u},
RP(d){return this.cyK(d)},
cyK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$RP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.P5()
t.Jr(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dT(s,x.H),$async$RP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$RP,v)},
EG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$EG=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.zC(q.w,k,l,j,m,!1,n),$async$EG)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.efY(q,p))
q.RP(!1)}w=8
return A.b(q.JD(),$async$EG)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.ab(h)
$.am.$1("[growth income] pull wallet: "+A.u(o))
w=9
return A.b(q.JD(),$async$EG)
case 9:r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.x=!1
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EG,v)},
Ny(d){return this.bBw(d)},
bBv(){return this.Ny(null)},
bBw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Ny=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ay(),$async$Ny)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.dd(t.w,x.N)
r=s.tg("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kH(d,A.S(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.L)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fu&&l.x===B.cr&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.efF(j,t,i))
q.v(0,p)
r=A.C(q,A.a3(q).k("co.E"))
t.w=r
w=4
return A.b(A.aqE(t.a.c.a,r),$async$Ny)
case 4:t.axf(!1,!0)
r=t.c
if(r!=null)r.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Balance updated: +$"+A.dC(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ny,v)},
JD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$JD=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.S(a2).k("a_<1>")
a4=A.C(new A.a_(a2,new C.efZ(),a3),a3.k("J.E"))
a5=a4
a6=A.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.S(a2).k("M<1,m>")
e=A.C(new A.M(a2,new C.eg_(),a3),a3.k("ak.E"))
q=e
w=9
return A.b(A.ls("transactions","id,status",null,null,null,A.F(["id",q],x.N,x.j),null,!0,null,null,!1,B.bJ),$async$JD)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gR(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aJ(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=B.d.bg(r.e,new C.eg0(l))
if(j<0)continue
i=r.e[j].x
if(J.A(k,1))a0=B.cr
else a0=J.A(k,2)?B.kk:B.dv
h=a0
if(!J.A(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dv&&h===B.cr&&a3[j].d===B.fu)J.cf(a6,l)
if(i===B.dv&&h===B.kk&&r.e[j].d===B.eP){g=r.d
if(g!=null){r.Jr(g.d+r.e[j].c,!1)
r.axf(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.eg1())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.ab(a7)
$.am.$1("[growth income] refresh deposit status: "+A.u(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return A.b(r.Ny(a6),$async$JD)
case 13:w=11
break
case 12:w=14
return A.b(r.bBv(),$async$JD)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JD,v)},
PM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.uL(i.a,i),$async$PM)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.efJ(t,h))
t.P5()
t.a8o()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.zC(s[0],p,q,o,r,!0,i),$async$PM)
case 4:i=e.a
n=i[4]
m=A.bp(i[2],!0,x.o)
l=i[5]
t.w=A.bp(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.P5()
t.a8o()
k=C.fYp(n,m)
if(k)t.Jr(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a_&&s.aA>0
else s=!0
j=A.he5(n,m,new A.T(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.P5()
if(t.c==null){w=1
break}t.m(new C.efK(t,n,m,l))
if(i){t.xT(!1,!0,!0)
if(j==="reset"){A.hcV(t.a.c.a)
i=t.c
if(i!=null)A.hcY(i,null)}else if(j==="warn2"){A.hcW(t.a.c.a)
i=t.c
if(i!=null)C.hcZ(i)}}else if(k)t.xT(!1,!0,!0)
else t.RP(!1)
case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
xT(d,e,f){return this.cii(d,e,f)},
axf(d,e){return this.xT(d,!1,e)},
aZB(d){return this.xT(!1,d,!1)},
cii(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.T(Date.now(),0,!1).a6()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.rt(r,o,q,!1,t.w,s,p),$async$xT)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.IF(t.w,p,q,s,o,r)
if(f)t.RP(d)
case 1:return A.h(u,v)}})
return A.i($async$xT,v)},
c8c(){this.m(new C.efS())
this.axf(!1,!0)},
aeM(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cr&&A.t_(d)){w=r.a
w.f.$1(new A.d4(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cd_(q,d)
v=q.d=A.L7(r.a.c.a,new C.efP(r))
r.at=r.a.c.d=v
A.qS(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.efQ(r,d))
r.xT(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d4(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dv
if(w&&d.d===B.fu)s=!1
else if(w&&d.d===B.eP){r.Jr(q.d-d.c,!0)
s=!0}else{C.cd_(q,d)
w=d.d
s=w===B.eP||w===B.jV
r.Jr(q.d,s)}r.m(new C.efR(r,d))
w=d.d
r.xT(s,e,w===B.eP||w===B.jV||d.x===B.cr||w===B.fI)},
axI(d){return this.aeM(d,!0,!1)},
b_z(d,e){return this.aeM(d,!0,e)},
b_y(d,e){return this.aeM(d,e,!1)},
cba(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iaV(u,e,d)){v.ma("This plan is already active.")
return}w=A.hqv(u.a,d,e)
if(C.i7m(u.a,v.e,w)){v.ma("You already own this plan.")
return}if(u.d<g){v.ma("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.efT(v))
v.m(new C.efU(v,u,new A.vv(d,e,0.0286,new A.T(Date.now(),0,!1),0,0)))
v.axI(new A.d4(w,u.a,g,B.jV,B.fh,"Direct investment buy: "+d,null,null,B.cr,new A.T(Date.now(),0,!1)))
v.m(new C.efV(v))
v.ma("Plan purchased: "+d)},
ma(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
a_s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hE(s,new C.anu(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a_s)
case 3:w=4
return A.b(t.PM(),$async$a_s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
aff(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hE(s,new C.aii(r,A.a([r],x.d9),B.QI,t.a.d,t.gb_x(),t.gaZA(),null),!1,null,x.X),$async$aff)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aff,v)},
afd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hE(s,new C.al5(r,t.a.d,t.e,t.gb_x(),t.gaZA(),new C.efX(t),null),!1,"LocalGrowthGameCenter",x.X),$async$afd)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afd,v)},
acJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$acJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.T(s,0,!1)
w=C.fYp(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aZB(!0),$async$acJ)
case 5:case 4:if(j.x==null){t.ma("Choose an investment plan first, then come back to clock in.")
t.m(new C.efL(t))
w=1
break}if(A.mB(r)===6||A.mB(r)===7){t.ma("Clock-in opens Monday through Friday.")
w=1
break}if(!C.he6(r)){t.ma("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a7I(q,r)&&j.fy>0){t.ma("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aPR(q,r))if(!A.aPR(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.L)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aFM(m.y,l,m.a))}}q=A.hpX(q,r)}else q=p
else q=p}else q=!1
if(q){t.ma("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.ma("You are already clocked in for today.")
w=1
break}k=C.hJi(r)
q=j.a
t.m(new C.efM(j,r,k))
t.b_y(new A.d4("local_clockin_manual_"+q+"_"+s,j.a,0,B.fI,B.fh,"Clock-in session started (local)",null,null,B.cr,r),!1)
t.ma("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$acJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I?B.jj:B.pM
if(l.d==null)return A.en(B.kG,j,!0)
w=x.o
v=A.U(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fAx
u=u==null?k:u.$0()
u=J.aV(u==null?B.ib:u)
while(u.C()){t=u.gR(u)
q=t.a
if(q.length===0||v.ai(0,q)||A.t_(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.cT(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.C(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a_(v,new C.egc(),A.S(v).k("a_<1>")))
B.d.b_(w,new C.egd())
v=l.d
v.toString
u=C.hXX(l.a.c)
t=l.d
t.toString
t=A.en(new C.alW(t,l.a.e,l.z,l.gcb9(),l.aU9(),D.h1L),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.en(new C.aBh(l.aU9(),q,n,o,w,new C.ege(l),l.gcdf(),new C.egf(l),D.h1M),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.Wg(n,new C.egg(l),A.aF(!1,B.a1,!0,k,new A.a7(1/0,m.a.b,new A.an(B.W,k,B.aa,B.r,A.a([A.bU(0,A.en(k,j,!0),0,0,0),A.bU(0,A.bm(!1,[new C.aBg(v,u,w,l.gc1V(),new C.egh(l),new C.egi(l),new C.egj(d),l.gce5(),l.gce1(),D.h1K),t,o][n],!0,!1,B.af,!0,!0),0,0,0),A.ao(0,l.bDS(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ah),k)},
aU9(){var w=null,v=A.a([D.eL.j(0.24),B.M.j(0.72)],x.O)
return A.hx(A.aL(!1,w,!0,A.p(B.A,D.bTe,B.f,w,w,new A.o(w,w,A.I(D.eL.j(0.38),B.q,1),w,A.a([new A.ac(0,B.G,D.eL.j(0.18),B.J,16)],x.V),new A.a9(B.az,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efI(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bDS(){var w=null,v=A.n(27),u=A.I(B.ay.j(0.45),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eV,24),new A.ac(-2,B.G,B.ay.j(0.12),B.J,18)],x.V)
return new A.D(B.MD,A.bm(!0,A.av(new A.cS(D.b0a,A.p(w,A.cq(new C.efG(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bX2,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.af,!0,!1),w)},
c3z(d){var w=null,v=this.y===d,u=D.d0k[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.E(A.ds(w,!0,w,A.aB(B.c7,A.rE(A.qm(v?A.X(s,D.acK,new A.cy("on"+r,q),w,w,21):A.x(A.a([A.X(s,B.c.j(0.62),w,w,w,19),B.bC,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cy("off"+r,q),B.b9,B.j,0,B.p),B.iI,A.rW(),B.bd,B.bd,A.a1H())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.efO(this,d),w,w,w,w,w,w,!1,B.a5),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c6,w),1)}}
C.aBg.prototype={
c0F(d){return C.fYq(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.P(d)
w=B.c.j(0.58)
v=f.e
u=A.S(v).k("a_<1>")
u=A.pj(new A.a_(v,new C.djI(),u),3,u.k("J.E"))
t=A.C(u,A.a3(u).k("J.E"))
v=f.c
s=v.x
r=new A.T(Date.now(),0,!1)
q=v.f
p=C.a7I(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.he6(r)
m=v.gCl()
l=A.a([D.eL.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eL.j(0.38),B.q,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eL.j(0.18),B.J,16)],j)
l=A.aL(!1,e,!0,A.p(B.A,A.X(B.hT,D.eL,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a9(B.az,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cM,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.n(14)
k=A.n(14)
j=A.a([new A.ac(0,B.G,B.b6.j(0.45),B.cJ,16)],j)
h=A.n(12)
g=x.p
j=A.bOH(!1,l,"GROWTH INCOME",A.aL(!1,i,!0,new A.a7(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bLI,B.f,e,e,new A.o(B.iG.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bYy,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bSi,B.f,e,e,new A.o(B.bH,e,A.I(D.afl,B.q,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hgH(B.fY,new C.djJ(),k)
k=A.B(A.a([A.E(C.hgG(new C.djK(f,B.qS,n),new A.T(Date.now(),0,!1),h,k),1),B.op,A.E(new A.tm(new C.djL(f,B.qS),e,new A.hb(A.a([$.yN(),$.a2I()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c3M(B.qS,D.eL)
v=A.E(f.cwc("Total Profit","$"+A.dC(v.e),B.qS),1)
u=u?e:s.b
return A.en(A.cc(A.x(A.a([j,B.R,k,B.ac,new C.aBf(f.d,m,q,p,n,o,D.eL,f.gc0E(),f.f,e),B.ac,h,B.R,A.B(A.a([v,B.op,A.E(f.b5X("Total Investment","$"+A.dC(u==null?0:u),B.qS,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.R,f.c0B(d,t,D.eL,w)],g),B.ai,e,B.e,B.j,0,B.p),B.r,e,B.y,e,B.Zs,e,e,B.ag),D.afl,!0)},
axe(d,e,f,g,h){var w=null,v=A.n(h),u=A.I(B.c.j(0.09),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],x.V)
return A.p(w,A.by(A.n(h-1),new A.an(B.W,w,B.aa,B.r,A.a([A.bU(0,A.c0(w,new A.o(w,w,w,w,w,new A.bV(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bf),0,0,0),new A.D(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bXt,B.n),w,w,w,w,w,w,w,w)},
aZz(d,e,f,g){return this.axe(d,e,f,B.af,g)},
b7V(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.n(30),s=A.I(f.j(0.4),B.q,1),r=x.p,q=this.aZz(new A.a7(w,80,new A.an(B.W,w,B.aa,B.r,A.a([v,new A.D(D.btR,A.x(A.a([A.p(w,A.B(A.a([A.X(e,f,w,w,w,15),B.eg,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.N,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.ajo,w,w,w),B.b8,A.eQ(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e_)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.lg,22)
if(g==null)return q
return A.aL(!1,A.n(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c3M(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.q,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aS(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bn(v,v,v,v),s,s,B.n),s,D.cMj[w],s,D.bxl,s,s,s,5))}r=A.p(s,A.B(o,B.dz,s,B.b9,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.E(A.x(A.a([D.fze,B.bC,A.B(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dq(1,B.co,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.n(16)
v=A.n(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.q,1.2)
return this.axe(A.B(A.a([r,D.eWX,q,B.ab,A.aL(!1,o,!0,A.p(s,A.x(A.a([A.X(B.oZ,e.j(0.95),s,s,s,21),B.uS,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.YZ,26)},
b5X(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.bH:B.aO,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aZn,v,v,B.n),v,v,v,B.ni,v,v,v,5),r=x.p
r=A.a([s,B.be,A.E(A.x(A.a([A.B(A.a([A.X(u?B.ua:B.yx,t,v,v,v,14),B.eg,new A.dq(1,B.co,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.am,A.eQ(B.a3,A.d(e,v,1,v,v,v,v,D.f57,v,v,v),B.f,B.e_)],r),B.F,v,B.b9,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.D(B.Mo,A.X(B.eA,B.c.j(0.35),v,v,v,v),v))
w=this.aZz(new A.a7(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lI,20)
if(s)return w
return A.aL(!1,A.n(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cwc(d,e,f){return this.b5X(d,e,f,null)},
c0B(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.n(20),h=x.p
i=A.a([A.B(A.a([l,B.a7G,k,B.b8,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.ZG,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.O],h)
if(e.length===0)i.push(new A.D(B.YO,A.x(A.a([A.X(B.hb,g,m,m,m,30),B.am,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bC,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.mn(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eP||v===B.jV
t=u?B.iX:D.eL
g=B.c.j(0.5)
v=new A.aS(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.q,-1)
v=A.p(B.A,A.X(u?B.ua:B.w2,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bO(r,r,r,r),new A.bn(v,v,v,v),m,new A.a9(B.az,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.i5e(j)
q=C.hin(j.y)
s=A.x(A.a([new A.y(s,m,B.lE,m,m,m,m,B.a2,m,1,m,m),B.bC,new A.y(q,m,new A.H(!0,g,m,m,m,m,11,B.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aS(20,20)
o=u?"-":"+"
n=A.dC(j.c)
q=A.p(m,new A.y(o+"$"+n,m,new A.H(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bn(p,p,p,p),m,m,B.n),m,m,m,m,B.o7,m,m,m)
j=C.hpz(j)
k.push(new A.D(P.Mt,new A.ci(B.aP,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.be,new A.bB(1,B.bg,s,m),A.x(A.a([q,B.cV,new A.y(j,m,new A.H(!0,g,m,m,m,m,10,B.P,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dz,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.axe(A.x(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.btZ,26)}}
C.aBf.prototype={
S(){return new C.bhv(null,null)},
cQo(d){return this.z.$1(d)},
cRC(){return this.Q.$0()}}
C.bhv.prototype={
Z(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pW,u,1,u,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,D.brD,u,1,u,v)
w.cM(0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.tO,u,1,u,v)
v.f!==$&&A.aP()
v.f=w
v.b7_()},
gb9D(){var w=new A.T(Date.now(),0,!1)
if(A.mB(w)===6||A.mB(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b7_(){var w=this,v=w.a,u=v.e||v.f||w.gb9D()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cM(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bR(0)}}},
bv(d){this.bG(d)
this.b7_()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.buO()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb9D()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.ay:g.x
g=g.r?new C.djB(i):h
v=A.n(32)
s=A.n(32)
r=f?D.dho:D.dhm
q=A.I((f?D.oJ:B.b3).j(0.28),B.q,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.ay:B.b7).j(0.16),B.fR,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.abf(D.oJ,130),h,h,h,-24,-30,h),A.ao(-36,i.abf(B.ay,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.abf(B.b7,120),h,h,h,-30,-36,h),A.ao(-40,i.abf(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.n(32)
k=i.f
k===$&&A.c()
m.push(A.bU(0,A.e1(A.by(l,new A.ey(A.c7(k,new C.djC(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.n(32)
k=i.f
k===$&&A.c()
m.push(A.bU(0,A.e1(A.by(l,new A.ey(A.c7(k,new C.djD(i),h),h),B.aq),!0,h),0,0,0))}l=A.n(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.q,1)
m.push(A.ao(h,new A.cS(D.b0g,A.p(h,A.B(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dq(1,B.co,A.d(u,h,1,B.a2,h,h,h,D.faC,h,h,h),h)],n),B.m,h,B.e,B.N,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.ha,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hgH(B.fY,new C.djE(),l)
m.push(C.hgG(new C.djF(i,f,t,e,w),new A.T(Date.now(),0,!1),j,l))
return A.aL(!1,v,!0,A.df(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bd,new A.o(h,h,q,s,o,new A.a9(B.az,B.aC,B.x,r,h,h),B.n),B.Ba,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
abf(d,e){var w=null
return A.e1(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bV(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.bbe.prototype={
aZC(d,e,f,g){var w=new A.aO($.W().r,B.ao,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.F(new A.b5(v,t))
w.F(new A.cW(v,u,v+f,u))
w.F(new A.cW(v,u,v,u+f))
w.F(new A.cW(v,u,v-f,u))
w.F(new A.cW(v,u,v,t))
w.F(new A.bE())
d.aR(w,g)},
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.E(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.E(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.E(u,3))+u)+1)/2
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aZC(b2,new A.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.E(b0+o/3,1)
$.W()
m=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.H()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.E(w*(1+B.o.E(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.E(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.E(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bx(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.W()
d=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hvc()
g=h.b
a0=g.c
g=g.a.c
h.a3(b2,new A.v(-a0/2,-g.gbc(g)/2))}a8.restore()
break
case 1:$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aZC(b2,new A.v(h,g),3+f*3,a0)
break
case 2:$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.W()
a3=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a3.c=1.8
a3.d=B.bT
a3.r=b0.j(f*0.8).gp(0)
l=a3.H()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.W()
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.W()
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gp(0)
g.z=N.mJ
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
au(d){return d.b!==this.b}}
C.bbd.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.W(),a4=A.N()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aO(a3,B.ao,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ap(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.H()
q=p.gbK().a.snapshot()
w.drawPath((p.e=new A.cC(q)).a,n)
n.delete()}a0=v*2
a2=B.k.E(a0,1)
J.bx(w.save())
w.translate(a2*(d+240)-120,0)
a5.jc(0,0.35)
a2=-a1
a3=A.N()
a3.sar(new A.a9(B.a3,B.a8,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eQ9))
a5.aV(new A.a8(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.E(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.E(v*(1+B.o.E(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bx(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.E(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bw(D.eQG,B.ST)
u=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.ayY[B.o.E(s,6)].j(k*0.9).gp(0)
n=u.H()
w.drawRRect(A.er(a3),n)
n.delete()
w.restore()}j=[new A.v(d*0.18,a1*0.2),new A.v(d*0.82,a1*0.26),new A.v(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.E(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.ayY[B.o.E(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.c=2
q.d=B.bT
q.r=f.gp(0)
n=q.H()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.gp(0)
n=q.H()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.W()
a2=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gp(0)
n=a2.H()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
au(d){return d.b!==this.b}}
C.bbc.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.v(a0,a1),a3=a0-4,a4=a3-22
$.W()
w=A.N()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.b3).j(0.22).gp(0)
a5.af(a2,a3-7,w)
w=A.N()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.af(a2,a3-1,w)
w=A.N()
w.b=B.ae
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a5.af(a2,a4+8,w)
u=A.N()
u.c=1.5
u.d=B.bT
u.r=(v?e.f:B.c).j(0.22).gp(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.H()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bx(s.save())
w=$.W().r
t=x.g
p=new A.aO(w,B.ao,d,d,A.a([],t))
p.F(new A.k7(A.bW(a2,a4)))
a5.qy(0,p)
p=A.bW(a2,a4)
o=A.N()
o.sar(D.ejR.aw(0,A.bW(a2,a4)))
a5.aV(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aO(w,B.ao,d,d,t)
g=a0-a4
a1+=4
h.F(new A.b5(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ap(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bD(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.F(new A.ap(w,a1))
h.F(new A.bE())
$.W()
a0=A.N()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eL.j(0.34),B.cT.j(0.62)],a1)
a0.sar(new A.a9(B.b1,B.b5,B.x,a1,d,d).aw(0,A.bW(a2,a4)))
a5.aR(h,a0)
a0=A.N()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aR(h,a0)}s.restore()},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aBh.prototype={
S(){var w=$.aw()
return new C.aBi(new A.as(B.as,w),new A.as(B.as,w))},
bgM(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aBi.prototype={
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
ma(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
cy7(d){this.a.bgM(d,!0)
this.ma("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dk1())},
cwJ(){var w,v,u=this,t=A.d6(u.d.a.a)
if(t==null||t<=0){u.ma("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hE(w,new C.apI(v.d,t,u.gcy6(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cEB(){var w,v,u,t,s=this,r=s.d,q=A.d6(r.a.a)
if(q==null||q<=0){s.ma("Enter an amount to withdraw.")
return}if(q<10){s.ma("Minimum withdrawal is $"+A.dC(10)+".")
return}w=s.a.d.d
if(q>w){s.ma("Insufficient balance. You have $"+A.dC(w)+".")
return}w=s.e
v=C.hqY(w.a.a)
if(v.length===0){s.ma("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bgM(new A.d4("wd_"+1000*Date.now(),s.a.d.a,q,B.eP,B.kE,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dC(u)+" \u2014 You receive: $"+A.dC(q-u),null,null,B.dv,new A.T(Date.now(),0,!1)),!0)
s.ma("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,B.c9)
w.bP(0,B.c9)
s.m(new C.dk2())},
cBn(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.x!==B.cr||!this.aW0(r)||A.h55(r))continue
q=r.d
p=q===B.eP||q===B.jV||q===B.eu
q=r.c
if(p)t+=q
else u+=q}return new A.box(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cBn(),q=t.a.r,p=new A.a_(q,new C.dk3(),A.S(q).k("a_<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eL.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eL.j(0.38),B.q,1)
q=A.bOH(!1,w,"WALLET",A.hx(A.aL(!1,s,!0,A.p(B.A,A.X(V.amB,D.eL,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a9(B.az,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cM,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bCq(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.aq5(B.w2,"Deposit",0),t.aq5(B.ua,"Withdraw",1),t.aq5(B.hc,"History",2)],u),B.m,s,B.qh,B.j,0,s,s)
return A.en(A.bm(!1,A.cc(A.x(A.a([q,B.by,v,B.d8,w,B.d8,A.qm(t.f===2?t.bYF():t.c3d(),B.il,A.rW(),B.bd,B.bd,A.a1H())],u),B.ai,s,B.e,B.j,0,B.p),B.r,s,B.y,s,D.bvQ,s,s,B.ag),!0,!1,B.af,!0,!0),B.AG,!0)},
bCq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cH(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b6(g,w)}else v=g
w=A.n(26)
u=A.ao(h,i.azr(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.azr(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.azr(150,0.05),h,h,-40,h,h,h)
r=A.n(26)
r=A.bU(0,A.c0(h,new A.o(h,h,A.I(B.c.j(0.18),B.q,1),r,h,h,B.n),B.bf),0,0,0)
q=A.n(6)
p=x.p
q=A.B(A.a([A.p(h,A.b3(h,h,h,new C.baD(h),B.ax),B.f,h,h,new A.o(h,h,h,q,h,D.bZC,B.n),h,28,h,h,h,h,h,38),B.b8,D.fHI],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.P,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.eQ(B.a3,C.aqs(new C.djO(i),D.ffX,i.a.d.a),B.f,B.e_)
m=A.a([A.E(i.aOE(B.u2,"In",d),1),A.E(i.aOE(B.vR,"Out",e),1)],p)
if(f>0){l=B.cU.j(0.22)
k=A.n(99)
j=A.I(B.iO.j(0.6),B.q,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.fbz,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.o7,h,h,h))}return new A.fM(1.62,A.by(w,new A.an(B.W,h,B.aa,B.r,A.a([D.ej5,u,t,s,r,new A.D(A7.rb,A.x(A.a([q,B.b8,o,B.bC,n,B.b8,A.B(m,B.m,h,B.e,B.j,0,h,h),B.am,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a7,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
azr(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.q,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aOE(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.X(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dq(1,B.co,A.eQ(B.a3,A.d(e+"  $"+A.dC(f),w,w,w,w,w,w,B.os,w,w,w),B.f,B.e_),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aq5(d,e,f){var w=null,v=this.f===f,u=v?D.c_Y:new A.a9(B.a3,B.a8,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eL.j(0.25),B.q,1),s=v?A.a([new A.ac(0,B.G,B.ay.j(0.45),B.J,18)],x.V):w
u=A.df(w,A.X(d,v?D.acK:D.eL,w,w,w,26),w,w,B.cu,new A.o(w,w,t,w,s,u,B.a6),B.Fu,w,62,w,w,w,w,62)
return A.aB(B.c7,new A.a7(92,w,A.x(A.a([u,D.eXT,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aS,w,w,w,w,w,w,w,w,12.5,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.djN(this,f),w,w,w,w,w,w,!1,B.a5)},
c3d(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d6(a1.a.a)
if(a2==null)a2=0
w=a0?D.eL:B.cl
v=a2>0
u=new C.djZ(e,w)
t=new C.djY()
s=e.f
r=A.n(26)
q=x.O
p=A.a([w.j(0.1),B.tD,B.tD],q)
o=A.I(w.j(0.22),B.q,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eV,22)],n)
l=w.j(0.15)
l=A.p(d,A.X(a0?B.w2:B.ua,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.E(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fT,d,d,d),1)
j=B.c.j(0.06)
i=A.n(99)
h=x.p
i=A.B(A.a([l,B.at,k,A.p(d,A.B(A.a([A.X(B.hT,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.N,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kZ,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bV,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.up(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.D(B.i6,l,d),B.dc,A.aWf(new A.cS(D.b0z,A.aM(d,B.U,!1,d,!0,B.r,d,A.aN(),a1,w,d,d,d,d,2,A.bs(d,B.eB,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.aj,d,d,k,d,d,B.dW,d,d,d,1,d,d,!1,"\u2022",d,new C.djX(e),d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,D.fiE,!0,B.L,d,B.an,d,d,d,d),d),d)],h),B.F,d,B.b9,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.df(d,d,d,d,B.bd,new A.o(d,d,d,A.n(99),d,new A.a9(B.a3,B.a8,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dC(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a7,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.c3H:D.cir
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.by,k,B.am,a1,B.O,q,B.aB,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.X(B.hT,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.P,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.aB,A.aM(d,B.U,!1,d,!0,B.r,d,A.aN(),e.e,d,d,d,d,d,2,A.bs(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.n(16),new A.az(B.c.j(0.08),1,B.q,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.n(16),new A.az(w,1,B.q,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.aj,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,B.mQ,!0,B.a4,d,B.an,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.n(16)
B.d.v(l,A.a([B.ac,A.p(d,A.x(A.a([t.$2("Amount","$"+A.dC(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dC(a2*0.15),B.f1),A.iC(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dC(a2*0.85),!0,D.eL)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.i7,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aR)
q=A.n(18)
l=a0?B.R6:B.atr
n=A.a([new A.ac(0,B.G,(a0?B.b0:B.dN).j(0.45),B.dp,18)],n)
k=a0?e.gcwI():e.gcEA()
j=A.X(a0?B.Ny:B.lu,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dC(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dC(a2):"Request withdrawal"
a1.push(new A.a7(d,54,A.c0(A.ly(j,A.d(i,d,d,d,d,d,d,B.ov,d,d,d),k,A.fq(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.n(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a9(B.a3,B.a8,B.x,l,d,d),B.n),B.bf),d))
return A.p(d,A.x(a1,B.ai,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a9(B.b1,B.b5,B.x,p,B.QB,d),B.n),d,d,new A.cy("form"+s,x.W),d,B.xW,d,d,d)},
bYF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.S(a2).k("a_<1>"),a4=A.C(new A.a_(a2,new C.djR(a0),a3),a3.k("J.E"))
B.d.b_(a4,new C.djS())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.U(x.N,x.o)
a3=$.fAx
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.ib:a3)
while(a3.C()){v=a3.gR(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.L)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.C(new A.bc(a2,a3),a3.k("J.E"))
r=C.i5N(a2,A.L7(a0.a.e,new C.djT(a0)))
a2=A.n(24)
a3=A.I(B.c.j(0.07),B.q,1)
v=A.n(99)
u=A.n(99)
q=x.p
u=A.a([A.B(A.a([D.bAz,A.aL(!1,v,!0,A.p(a1,D.eRx,B.f,a1,a1,new A.o(a1,a1,A.I(D.eL.j(0.4),B.q,1),u,a1,a1,B.n),a1,a1,a1,a1,B.mu,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.djU(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.R],q)
if(a4.length===0)u.push(new A.D(D.bsA,A.x(A.a([A.X(B.G5,B.c.j(0.25),a1,a1,a1,40),B.R,D.fEl],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.d9(a4,0,A.dG(a0.r,"count",x.S),A.S(a4).c),o=p.$ti,p=new A.bQ(p,p.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eP||k===B.jV||k===B.eu
if(l===B.cr)i=j?B.c8:D.eL
else i=l===B.dv?B.iO:B.h3
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.q,-1)
k=A.p(a1,A.X(j?B.ua:B.w2,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bO(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bSx(n)
e=C.hin(n.y)
d=B.c.j(0.5)
f=A.a([new A.y(f,a1,B.jb,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bC,new A.y(e,a1,new A.H(!0,d,a1,a1,a1,a1,11,B.a7,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.y(e,a1,new A.H(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.kk)f.push(new A.D(E.ahM,new A.Cm(B.bA,5,4,B.bq,A.a([a0.aNz("Before",m.b),a0.aNz("After",m.a)],q),a1),a1))
m=A.x(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dC(f)
e=i.j(0.14)
d=new A.aS(99,99)
n=C.hpz(n)
v.push(A.p(a1,new A.ci(B.aP,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.be,new A.bB(1,B.bg,m,a1),B.ab,A.x(A.a([new A.y(f,a1,new A.H(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.au,A.p(a1,new A.y(n,a1,new A.H(!0,i,a1,a1,a1,a1,9.5,B.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bn(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.Bu,a1,a1,a1)],q),B.dz,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bO(B.Y,B.Y,new A.az(l,1,B.q,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.tQ,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hn(D.bQs,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ck,a1,a1,a1),new C.djV(a0),A.fz(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eL,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.x(u,B.ai,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.tD,a1,a3,a2,a1,a1,B.n),a1,a1,D.h1F,a1,D.buK,a1,a1,a1)},
aNz(d,e){var w=null,v=B.c.j(0.05),u=A.n(7),t=A.I(B.c.j(0.1),B.q,1),s=A.cZ(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dC(e)
return A.p(w,A.XS(A.cZ(A.a([s,A.cZ(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fg6,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nl,w,w,w)},
aW0(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eu)return d.c>0
if(A.t_(d))return!1
if(v===B.fu||v===B.eP)return!0
if(v===B.oA||v===B.jV)return!0
if(v===B.kl)return!0
if(v===B.fI)return B.a.t(w,"clock-in")||d.c>0
return!1},
bSx(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in"))return"Clock-in earnings"
if(B.a.t(w,"crown daily reward"))return B.a.t(w,"queen")?"Queen crown reward":"King crown reward"
if(B.a.t(w,"investment"))return"Investment"
switch(d.d.a){case 0:return"Deposit"
case 1:return"Withdrawal"
case 2:return"Added"
case 3:return"Spent"
case 6:return"Claim"
case 4:return"Earnings"
case 5:return"Contribution"}}}
C.baD.prototype={
a3(d,e){var w,v,u,t
$.W()
w=A.N()
w.r=D.bbe.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bE(new A.v(u,0),new A.v(u,t),w)
u=v*0.65
d.bE(new A.v(u,0),new A.v(u,t),w)
t*=0.5
d.bE(new A.v(0,t),new A.v(v,t),w)},
au(d){return!1}}
C.bvi.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a8(0,o,s,o+80)
m=[B.b7,B.h5,B.bv][p]
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.sar(new A.a9(B.b1,B.b5,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
l=o.H()
q.drawRect(A.c_(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.E(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.E(k,9)===0){f=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f.r=B.oN.j(0.35*g).gp(0)
f.c=1
l=f.H()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.H()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.E(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bT
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.E(v+k*0.25,1)
t=B.oN.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.jM(new A.eu("z",a2,a2,B.cP,a2,a2,a2,a2,a2,a2,new A.H(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a4,B.c4,new A.jv(1),a2,a2,a2,a2,B.c3,a2)
a1.el()
a1.a3(a3,new A.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
au(d){return d.b!==this.b}}
C.aKL.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.bxf.prototype={}
C.b_a.prototype={}
C.a_p.prototype={
S(){return new C.aDG(new A.as(B.as,$.aw()))},
cSM(d,e){return this.d.$2(d,e)}}
C.aDG.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
aZG(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e9U(w))
return}u=w.c
u.toString
A.a5(u,!1).O(null)
w.a.cSM(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eI,e).w
e=A.aI(a0,B.ec,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b_,f,f,A.n(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bPR,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.f0.j(0.5),B.J,18)],v),D.ap7,B.a6),f,52,f,f,f,f,f,52),B.ep,A.E(A.x(A.a([D.frX,B.bC,A.d(g.a.c,f,1,B.a2,f,f,f,B.nD,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bQG,f,f,f,new C.e9X(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b5F(B.eT,"You",B.cl)
r=B.aM.j(0.15)
q=A.n(99)
q=A.B(A.a([s,new A.D(B.kY,A.p(f,D.fvV,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.q,1),q,f,f,B.n),f,f,f,f,B.fO,f,f,f),f),g.b5F(B.vZ,"Your friend",B.bU)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.n(16)
p=B.c.j(0.12)
o=A.n(16)
n=g.f
if(n.length===0)n=f
o=A.aM(f,B.U,!0,f,!0,B.r,f,A.aN(),g.d,f,f,f,f,f,2,A.bs(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.q,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.b_l),f,f,f,f,f,f,f,f,N.DI,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bT9,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.aj,f,f,f,f,f,B.ma,f,f,f,1,f,f,!1,"\u2022",f,new C.e9Y(g),f,new C.e9Z(g),f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.iS,!0,B.a4,f,B.an,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.cds[m]
s=new A.aS(14,14)
p=g.e===l
n=p?D.ap6:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.aA:B.bD,1,B.q,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bB(1,B.bg,A.aB(f,A.df(f,A.x(A.a([new A.y(j,f,B.de,f,f,f,f,f,f,f,f,f),new A.y(i,f,new A.H(!0,h,f,f,f,f,10,B.P,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bd,new A.o(p,f,new A.bO(k,k,k,k),new A.bn(s,s,s,s),f,n,B.n),B.eJ,f,f,f,B.fa,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ea_(g,l),f,f,f,f,f,f,!1,B.a5),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.X(B.lt,B.c.j(0.5),f,f,f,15),B.bp,A.E(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.n(18)
v=A.a([new A.ac(0,B.G,B.bE.j(0.4),B.cC,18)],v)
n=g.e
j=n===1?"":"s"
return new A.D(new A.R(0,0,0,d.f.d+e.r.d),A.p(f,A.x(A.a([w,B.aR,t,B.by,q,B.by,D.fzN,B.am,o,B.aR,D.fE9,B.O,s,B.aB,r,B.aR,new A.a7(f,54,A.c0(A.hn(D.anq,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fT,f,f,f),g.gc8y(),f),new A.o(f,f,f,p,v,D.bZM,B.n),B.bf),f)],u),B.ai,f,B.e,B.N,0,B.p),B.f,f,f,D.b1m,f,f,f,f,D.bw2,f,f,f),f)},
b5F(d,e,f){var w=null,v=f.j(0.1),u=A.n(16),t=A.I(f.j(0.45),B.q,1)
return A.E(A.p(w,A.x(A.a([A.X(d,f,w,w,w,24),B.au,A.d(e,w,w,w,w,w,w,B.Jz,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fa,w,w,w),1)}}
C.p9.prototype={}
C.bqf.prototype={
a3(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.W()
v=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bc
else u=(w&1)===0?B.bz:B.M
v.r=u.gp(0)
u=A.bW(p,o)
t=v.H()
q.drawArc.apply(q,[A.c_(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.W()
q=A.N()
q.r=B.fA.gp(0)
q.b=B.ae
q.c=8
d.af(p,o,q)
q=A.N()
q.r=B.aM.gp(0)
d.af(p,o*0.22,q)
q=this.b
if(q!=null){s=A.fU(r,r,r,r,A.cZ(r,r,r,r,r,r,r,r,r,B.aRv,A.u(q)),B.a4,B.c4,r,B.dM,B.c3)
s.el()
q=s.b
u=q.c
q=q.a.c
s.a3(d,p.aC(0,new A.v(u/2,q.gbc(q)/2)))}},
au(d){return d.b!=this.b}}
C.EE.prototype={
a5(){return"NgmyProMoveResult."+this.b}}
C.aqY.prototype={
gkc(){var w=this.d
w=w==null?null:w.a
return w!==!1},
boo(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fY7("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bZu()
w=s.gkc()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c2(9,"",!1,x.N)
s.ax=!0
if(s.gkc())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.av(10),1+e.av(10)],w)
s.ch=A.a([1+e.av(10),1+e.av(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.av(6),e.av(6),e.av(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.aj()*3.141592653589793*2
s.c=s.gkc()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e2(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkc())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aXZ(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aEA.h(0,d)
s.c=w==null?"Play to earn":w}},
baq(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkc()
if(o)return
o=x.N
s.x=A.a2(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.cey(),o)
v=A.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=A.C(v,o)
B.d.v(v,A.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cC_(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aqC(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.cez(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.L(v,A.c2(7,0,!1,o))}if(A.iK(e.h(0,q)))o=A.eh(e.h(0,q))
else{o=A.c8(A.u(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bEK(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aqC(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.ceA(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.y=o}if(A.iK(e.h(0,p)))o=A.eh(e.h(0,p))
else{o=A.c8(A.u(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bG0(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aqC(e,f)
break}},
cMt(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a2(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bp(w.at,!0,q))
o.n(0,"turnEmail",w.aBA())
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
p=A.S(q).k("M<1,ai<G>>")
q=A.C(new A.M(q,new C.ceC(),p),p.k("ak.E"))
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
p=A.S(q).k("M<1,ai<G>>")
q=A.C(new A.M(q,new C.ceD(),p),p.k("ak.E"))
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
default:q=A.dQ(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aBA(){var w,v,u,t=this
if(t.gkc()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
aqC(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
v.r=J.A(d.h(0,"isDraw"),!0)
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
cC_(d,e){var w,v,u,t,s,r="playerXEmail"
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=B.a.i(e.toLowerCase())
w=d.h(0,"turnEmail")
u=B.a.i(J.k(w==null?"":w).toLowerCase())
w=d.h(0,"playerXName")
t=J.k(w==null?"X":w)
w=d.h(0,"playerOName")
s=J.k(w==null?"O":w)
if(u===v){w=d.h(0,r)
return"Your turn ("+(u===B.a.i(J.k(w==null?"":w).toLowerCase())?"X":"O")+")"}w=d.h(0,r)
return(u===B.a.i(J.k(w==null?"":w).toLowerCase())?t:s)+"'s turn"},
bEK(d,e){var w,v,u,t,s
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=B.a.i(e.toLowerCase())
w=d.h(0,"player1Email")
u=B.a.i(J.k(w==null?"":w).toLowerCase())
w=d.h(0,"player1Name")
t=J.k(w==null?"Player 1":w)
w=d.h(0,"player2Name")
s=J.k(w==null?"Player 2":w)
if(this.fx===1)return v===u?"Your turn \u2014 drop a red disc":t+"'s turn (red)"
return v===u?s+"'s turn (gold)":"Your turn \u2014 drop a gold disc"},
bG0(d,e){var w,v,u,t,s,r,q
if(this.e){w=this.w
return w.length!==0?w:"Game over"}v=B.a.i(e.toLowerCase())
w=d.h(0,"player1Email")
u=B.a.i(J.k(w==null?"":w).toLowerCase())
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
TJ(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkc())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aBA():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bZu(){var w,v,u=this,t=J.e2(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.cev(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aXZ(d){var w=20+d.av(80),v=w+10+d.av(50),u=4+d.av(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,B.c9)},
cWi(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkc())w=1
else{v=r.d
v=v==null?null:v.d
w=r.TJ(q,v==null?"":v)?r.z:-1}if(!r.gkc()){v=r.d
v=v==null?null:v.d
v=!r.TJ(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkc()?r.z:w
if(!r.gkc()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkc()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.E(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a94(2)){r.aaG(1)
return!0}if(r.a94(1)){r.aaG(2)
return!0}if(r.gkc()&&r.z===2){r.bAG(f)
if(r.a94(2)){r.aaG(1)
return!0}if(r.a94(1)){r.aaG(2)
return!0}}}return!1},
aaG(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gkc()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bAG(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.E(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.av(w)]
J.aG(n.y[o[2]],o[3],2)
J.aG(n.y[o[0]],o[1],0)
n.z=1},
a94(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gR(t)===d)return!1
return!0},
cWj(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.qk
if(!s.gkc()){w=s.d
w=w!=null&&!s.TJ("tic_tac_go",w.d)}else w=!1
if(w)return D.qk
if(s.gkc())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.aj4(v))return s.aSM(v,!0)
if(!B.d.t(s.at,""))return s.aSN()
s.ax=!s.ax
if(!s.gkc()){s.x.n(0,"turnEmail",s.aBA())
s.c=s.aXv()
return D.qk}if(s.gkc()){t=s.cju(e)
if(t>=0){s.at[t]="O"
if(s.aj4("O"))return s.aSM("O",!1)
if(!B.d.t(s.at,""))return s.aSN()
s.ax=!0}}s.c=s.gkc()?"Your turn \u2014 you are X":s.aXv()
return D.qk},
aXv(){var w=this.d
if(w==null)return"Take your turn"
return this.TJ("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aSM(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gkc()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.ql:D.I4},
aSN(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.S4},
cju(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.aj4("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.aj4("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.d0K[u]
if(v[w].length===0)return w}return-1},
aj4(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.d8m[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a3j(d){return B.d.cJ(d,0,new C.ceB())},
cGc(d){this.ay.push(1+d.av(10))
if(this.a3j(this.ay)>21)return!0
return!1},
cGd(d){var w,v,u,t=this
while(t.a3j(t.ch)<17)t.ch.push(1+d.av(10))
t.CW=!0
w=t.a3j(t.ay)
v=t.a3j(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cLV(d,e){var w,v,u,t=this
if(t.e)return D.qk
if(!t.gkc()){w=t.d
w=w!=null&&!t.TJ("connect_four_pro",w.d)}else w=!1
if(w)return D.qk
if(t.gkc())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.qk
if(!t.ag8(d,w))return D.qk
if(t.a8V(t.fx))return t.aSK(t.fx,!0)
if(t.aOo())return t.aSL()
w=t.fx===1?2:1
t.fx=w
if(t.gkc()&&w===2){u=t.ciS(e)
if(u>=0){t.ag8(u,2)
if(t.a8V(2))return t.aSK(2,!1)
if(t.aOo())return t.aSL()
t.fx=1}}t.c=t.gkc()?"Your turn \u2014 drop a red disc":t.bEJ()
return D.qk},
bEJ(){var w=this.d
if(w==null)return"Drop a disc"
return this.TJ("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ag8(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aOo(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aSK(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gkc()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.ql:D.I4},
aSL(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.S4},
ciS(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ag8(w,2)
v=r.a8V(2)
r.b86(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ag8(w,1)
u=r.a8V(1)
r.b86(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.av(s)]},
b86(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a8V(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bEL(w,v,d))return!0}return!1},
bEL(d,e,f){var w,v,u,t=new C.ceu(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
bbm(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aXZ(d)}return w.a>=w.b}}
C.arS.prototype={
S(){return new C.aEu(null,null)},
cRG(d){return this.e.$1(d)}}
C.aEu.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,D.brG,null,1,null,v)
w.fh(0,!0)
v.d=w
v.a.d.aQ(0,v.gb_7())
v.axv()},
bv(d){var w
this.bG(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,B.c9)
this.axv()}},
axv(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ahu(t,u)
C.ahu(t,u)
w.a.cRG(s)
w.a.toString
w.m(new C.eIc())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a4(0,v.gb_7())
w=v.d
w===$&&A.c()
w.q()
v.bwn()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ahu(j,i),g=C.ahu(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aS(1,1)
d.push(new A.wq(new A.d0(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bn(u,u,u,u),A.a([new A.ac(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.ML,l,l,l,3),l),B.SF,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eu(v,l,l,B.cP,l,l,l,l,l,l,D.fde))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cx}else if(s===t){r=B.aZ
q=B.P}else{r=B.av
q=B.H}d.push(new A.eu(t,l,l,B.cP,l,l,l,l,l,l,new A.H(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.wq(new A.d0(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.SF,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.n(12)
u=A.I(B.b_,B.q,1)
o=x.p
v=A.p(l,A.x(A.a([A.B(A.a([m.b_6("Correct",""+h,B.bc),B.ab,m.b_6("Wrong / missed",""+(f-g),B.av),B.b8,A.d(""+p+"% accuracy",l,l,l,l,l,l,G.a88,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.am,D.fx2],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bl,l,l,l)
u=A.E(A.cc(new A.a9S(l,A.cZ(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.r,l,B.y,l,l,l,l,B.ag),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.x(A.a([v,B.ac,u,B.R,A.aM(l,B.U,!0,l,!0,B.r,l,A.aN(),k,l,l,l,l,l,2,A.bs(l,new A.b4(4,A.n(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.n(12),D.b_e),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.aj,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,D.aRu,!0,B.a4,l,B.an,l,l,l,l)],o),B.ai,l,B.e,B.j,0,B.p)},
b_6(d,e,f){var w=null,v=f.j(0.15),u=A.n(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fO,w,w,w)}}
C.aMi.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a4(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b0()
this.by()}}
var z=a.updateTypes(["aA<~>()","~()","G(ia,ia)","~([xw?])","Q(qM)","qM()","G(ro,ro)","Q(ro)","G(rp,rp)","Ps(Y)","Q(ia)","cL(adJ)","a_6(Y)","Zd(Y)","aew(Y)","a6B(Y)","Nz(Y)","adk(Y,hK<ai<jc>>)","adj(Y,G)","t(qM)","ro(a6<@,@>)","~(EE,aqY)","Nr(Y)","a6<m,@>(ro)","rp(a6<@,@>)","a6<m,@>(ku)","a6<m,@>(rp)","Q(rp)","a6<m,@>(lE)","lE(@)","a6<m,@>(ir)","ir(@)","ia(@)","aA<~>(ku)","a6<m,@>(ia)","~(G,G)","ia(ia)","Vj(Y)","aA<Q>(ai<ia>)","a_5(Y)","~(ia)","a_S(Y)","Vk(Y)","m(ia)","Q(lE)","x9(bv<G,lE>)","abR(Y,G)","G(ir,ir)","abJ(lE)","t(rv)","bB(IM)","ZC(Y)","~(d4{bumpWalletRevision:Q,cloudRequest:Q})","~(m,K,K,K)","K(T)","~(d4)","a_p(Y)","~(EE)","m(m)","a_T(Y)"])
C.ctb.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.ctc(r,w,s.b,v,s.d)
t=s.e
r.b=A.dv(t,u)
v.r=new C.ct8(r)
v.e=new C.ct9(r,w)
v.f=new C.cta(r,w,t,u)},
$S:0}
C.ctc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.kC(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.ab(r)
u=A.cj(r)
s=v
q=u
p=A.Gd(s,q)
if(p==null)p=new A.j8(s,q==null?A.a2W(s):q)
t=p
o.d.ht(t.a,t.b)
return}o.d.L(0,w)}else{o.e.a(null)
o.d.L(0,null)}},
$S:42}
C.ct8.prototype={
$0(){this.a.b.a7(0)
return $.GT()},
$S:1626}
C.ct9.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.a9a.$0()
this.a.b.a7(0)},
$S:0}
C.cta.prototype={
$0(){var w,v=this,u=v.b,t=A.dE(0,0,u.gbdu(),0,0,0)
u.hG(0)
u=v.c
w=v.a
w.b=A.cM(new A.ba(u.a-t.a),new C.ct7(w,u,v.d))},
$S:0}
C.ct7.prototype={
$0(){var w=this.c
this.a.b=A.dv(this.b,w)
w.$1(null)},
$S:0}
C.f3t.prototype={
$1(d){var w=this.a
w.m(new C.f3s(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.f3s.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hK(D.agY,this.b,null,null,v.$ti.k("hK<1>"))},
$S:0}
C.f3v.prototype={
$2(d,e){var w=this.a
w.m(new C.f3q(w,d,e))},
$S:56}
C.f3q.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hK(D.agY,null,this.b,this.c,v.$ti.k("hK<1>"))},
$S:0}
C.f3u.prototype={
$0(){var w=this.a
w.m(new C.f3r(w))},
$S:0}
C.f3r.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hK(B.B3,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fEu.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cr},
$S:16}
C.fEm.prototype={
$1(d){return d},
$S:14}
C.fmi.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.D(new A.R(u,0,u,0),A.d("NGMY",w,1,B.eH,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.abF,w,v,w,w,w,w,w,v)},
$S:154}
C.fmf.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.fmg.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.ks(w,B.A,v.d,new C.fme(v.e),B.h_,v.c,!0,v.b,null,null,v.a)},
$S:1627}
C.fme.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.fmh.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.dbG.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dbR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dc8.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dc9.prototype={
$1(d){return this.a.JF()},
$S:12}
C.dbZ.prototype={
$0(){var w=J.b6(this.b,new C.dbY(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dbY.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dc_.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.dbX(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dbX.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dc1.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=A.S(v).k("M<1,a6<m,@>>")
v=A.C(new A.M(v,new C.dc0(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dc0.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dbU.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.ca2(t.a.c)?2:3
break
case 2:w=4
return A.b(C.apB(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dbS(t))
case 3:if(t.c!=null)t.m(new C.dbT(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:52}
C.dbS.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dbT.prototype={
$0(){return this.a.d++},
$S:0}
C.dbV.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dbW.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dbM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.icU(t.a.d.b8,J.k(J.q(u.b,"id")),"rejected")
t.a.bs()
w=2
return A.b(C.ahj(t.a.d.b8),$async$$0)
case 2:w=3
return A.b(t.JF(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a4(s)
C.i1K(t.a.d.b8,J.k(r.h(s,"id")),t.a.c.c)
t.a.bs()
w=2
return A.b(C.ahj(t.a.d.b8),$async$$0)
case 2:w=3
return A.b(t.JF(),$async$$0)
case 3:t.Iu(B.d.dN(t.y,new C.dbK(s),new C.dbL(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbK.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.dbL.prototype={
$0(){return B.d.gI(this.a.y)},
$S:z+5}
C.dbO.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.dbP.prototype={
$0(){return B.d.gI(this.a.y)},
$S:z+5}
C.dbQ.prototype={
$0(){return this.a.Iu(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.dbJ.prototype={
$0(){return this.a.c1G(this.b)},
$S:0}
C.dbI.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.idm(u,w.b,new C.dbH(v,w))},
$S:0}
C.dbH.prototype={
$2(d,e){return this.a.ahu(this.b,d,e)},
$S:653}
C.dc7.prototype={
$2(d,e){if(d)return
this.a.aSp()},
$S:122}
C.dc5.prototype={
$2(d,e){var w=this.a
return new A.le(C.b_9(w.a.c.a),new C.dc4(w,this.b,this.c),null,null,x.gH)},
$S:1629}
C.dc4.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.n(12)
v=A.n(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aL(!1,v,!0,new A.D(B.l_,A.bGb(B.cU,A.X(B.hc,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dc3(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ah)},
$S:1630}
C.dc3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fAM(s.c.a,s.e).eR(new C.dc2())
w=2
return A.b(C.bDx(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dc2.prototype={
$1(d){},
$S:30}
C.dc6.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dQ7.prototype={
$0(){var w=this.a
return A.L7(w.a.c.a,new C.dQ6(w))},
$S:79}
C.dQ6.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dQ8.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ag()
v.bs()
w.m(new C.dQ5())},
$S:0}
C.dQ5.prototype={
$0(){},
$S:0}
C.dQ9.prototype={
$2(d,e){var w,v=this.a
if(!C.ca2(v.a.c)){if($.fY2.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fY3(this.b,v.x,w)
return!1}C.apB(v.a.c.a)}if(A.L7(v.a.c.a,new C.dQ4(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aGY()
w=v.a
w.toString
w.hA(new A.d4(B.o.u(1000*Date.now()),v.a.c.a,d,B.jV,B.fh,e,null,null,B.cr,new A.T(Date.now(),0,!1)))
v.a.bs()
return!0},
$S:1631}
C.dQ4.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dQa.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hA(new A.d4(u,s.c.a,d,B.fI,B.fh,e,v,v,B.cr,new A.T(Date.now(),0,!1)))
t.a.bs()
w=f>0?"+$"+B.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.uI(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1632}
C.dbA.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dbD.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dbE.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dbF.prototype={
$1(d){var w=null,v=this.a,u=A.fq(w,w,v.e===d?B.bc:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.E(new A.D(B.eS,A.ik(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dbC(v,d),u),w),1)},
$S:206}
C.dbC.prototype={
$0(){var w=this.a
return w.m(new C.dbB(w,this.b))},
$S:0}
C.dbB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dds.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ddv.prototype={
$1(d){this.a.cjP()
return null},
$S:12}
C.ddw.prototype={
$1(d){return this.a.cA7()},
$S:12}
C.ddx.prototype={
$1(d){this.a.a2m()
return null},
$S:12}
C.ddy.prototype={
$1(d){this.a.aiD()
return null},
$S:12}
C.ddz.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c6)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.ddt(v))
w=v.as
if(w!=null)w.a7(0)
v.F4()
return}v.m(new C.ddu(v))},
$S:12}
C.ddt.prototype={
$0(){return this.a.Q=0},
$S:0}
C.ddu.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.dcI.prototype={
$0(){return this.a.bz=this.b},
$S:0}
C.dcJ.prototype={
$0(){return this.a.bz=this.b},
$S:0}
C.ddb.prototype={
$1(d){return this.a.go.t(0,d)},
$S:33}
C.ddc.prototype={
$0(){},
$S:0}
C.dcY.prototype={
$0(){var w=this.b
w.c6=!0
w.cL="Waiting for both players\u2026"
w.ck="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dcZ.prototype={
$0(){var w=this.a
w.c6=!0
w.cL="Both players connected"
w.ck="Starting together in a moment\u2026"},
$S:0}
C.dd_.prototype={
$0(){var w=this.b
w.c6=!0
w.cL="Match starting together\u2026"
w.ck="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.dd0.prototype={
$0(){this.b.c6=!1},
$S:0}
C.dd1.prototype={
$0(){},
$S:0}
C.dca.prototype={
$0(){var w=this.a,v=w.x2,u=A.u(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dcH.prototype={
$0(){var w=this.a
w.at=this.b
w.b5b()},
$S:0}
C.ddd.prototype={
$0(){},
$S:0}
C.ddm.prototype={
$0(){},
$S:0}
C.dda.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dd9(w))},
$S:0}
C.dd9.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.T(Date.now(),0,!1)},
$S:0}
C.dcF.prototype={
$0(){var w=this.a;++w.a_
w.y=!1
w.z=null},
$S:0}
C.dcG.prototype={
$0(){},
$S:0}
C.ddh.prototype={
$1(d){return d==null},
$S:236}
C.ddi.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cA(v.ch,w.d)},
$S:0}
C.ddj.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dcb.prototype={
$1(d){return d==null},
$S:236}
C.dcc.prototype={
$0(){return this.a.bi++},
$S:0}
C.dcd.prototype={
$0(){},
$S:0}
C.dcR.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dcS.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.L(0,t)
w=this.c
u.L(0,w)
if(v.ghI()&&D.mN.t(0,v.a.e)){u=v.id
u.L(0,t)
u.L(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.dcT.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dcQ(w))},
$S:11}
C.dcQ.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.dd2.prototype={
$0(){return this.a.y1++},
$S:0}
C.dd3.prototype={
$0(){},
$S:0}
C.dd4.prototype={
$0(){return this.a.y2++},
$S:0}
C.dd5.prototype={
$0(){},
$S:0}
C.dd6.prototype={
$0(){return this.a.b8++},
$S:0}
C.dd7.prototype={
$0(){},
$S:0}
C.ddg.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dcU.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dcV.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dcW.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dcX.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.ddk.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.ddl.prototype={
$0(){var w=this.a
w.ok.push(w.d.av(4))
w.p2=0},
$S:0}
C.dce.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dcf.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dcg.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dch.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dde.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.ddf.prototype={
$0(){var w,v=this.a;++v.x2
v.aOa()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.u(Math.min(w+2,7))+" tiles"},
$S:0}
C.dcP.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dd8.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dcN.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dcO.prototype={
$2(d,e){return d+e.length},
$S:216}
C.ddn.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.ddo.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.ddp.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.ddr.prototype={
$1(d){var w=this.a,v=w.OA(),u=v<=0?0:B.k.D(w.A8()/v,0,1),t=w.a.x,s=t*1.46
return new C.Nr(w.f?s:s*u,s,t,null)},
$S:z+22}
C.ddq.prototype={
$1(d){return d.bV(0.85)},
$S:159}
C.dcM.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghI()&&D.mN.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.x(A.a([A.d(p,w,w,w,w,w,w,B.jb,B.L,w,w),B.am,A.E(A.av(new A.a7(r*v+u,r*t+s,A.im(!0,w,w,B.y,new A.hQ(v,6,6,1,r),new C.dcL(q,r),q.fr.length,w,B.dT,B.ag,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:153}
C.dcL.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghI()&&D.mN.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghI()&&D.mN.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.apd:D.bXD,l=A.n(10),k=A.n(10)
if(p)w=m
else if(o)w=m
else w=n?D.apd:D.ap7
v=o?A.I(B.ds,B.q,2):s
u=A.a([new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aL(!1,l,!0,A.df(s,A.av(n?A.X(D.cr1[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bd,new A.o(s,s,v,k,u,w,B.n),B.eJ,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dcK(r,e),s,s,s,s,s,s,s)},
$S:183}
C.dcK.prototype={
$0(){return this.a.cja(this.b)},
$S:0}
C.dcu.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bc.l()>>>16&255,B.bc.l()>>>8&255,B.bc.l()&255),r=A.n(10),q=A.n(10),p=A.n(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aQy,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dct(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ah)},
$S:656}
C.dct.prototype={
$0(){return this.a.czm(this.b)},
$S:0}
C.dcv.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.n(10),A.aL(!1,A.n(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aQy,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dcs(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ah)},
$S:656}
C.dcs.prototype={
$0(){return this.a.czl(this.b)},
$S:0}
C.dcw.prototype={
$1(d){return this.a.m(new C.dcr())},
$S:29}
C.dcr.prototype={
$0(){},
$S:0}
C.dcx.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.ahu(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.p8()
if(u.ghI()&&D.mN.t(0,u.a.e)){u.a0C()
u.n3(!0)}else{v=B.d.cJ(u.cy,0,new C.dcp())
t=u.dx
if(t>=v)u.tQ("All 5 sentences perfect \u2014 full payout!")
else u.Ew(t/v,t,v)}}else{if(u.ghI()&&D.mN.t(0,u.a.e))u.a0C()
u.m(new C.dcq(u))}},
$S:0}
C.dcp.prototype={
$2(d,e){return d+e.length},
$S:216}
C.dcq.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,B.c9)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dcy.prototype={
$1(d){var w=null,v=A.fq(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cm,w,w,w,w,w,w,w)
return new A.D(B.cv,new A.a7(1/0,w,A.ik(A.d(d,w,w,w,w,w,w,V.aQr,w,w,w),new C.dco(this.a,d),v),w),w)},
$S:142}
C.dco.prototype={
$0(){return this.a.b4y(this.b)},
$S:0}
C.dcz.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.x(A.a([A.d(s,v,v,v,v,v,v,B.pj,v,v,v),B.O,A.E(A.av(new A.a7(w,w,A.im(!0,v,v,B.y,new A.hQ(3,4,4,1,u),new C.dcn(t,u),9,v,B.dT,B.ag,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:153}
C.dcn.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b2g(e),p=r===0
if(p)w=B.K
else w=q?B.bc:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.n(10)
s=p?t:new C.dcj(s,e)
u=A.n(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ah)},
$S:77}
C.dcj.prototype={
$0(){return this.a.czk(this.b)},
$S:0}
C.dcA.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dcm(q,d)
p=A.n(16)
if(o)w=D.a35[d]
else{w=D.a35[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.n(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.q,o?2:1)
t=x.V
if(o){s=D.a35[d]
t=A.a([new A.ac(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aL(!1,p,!0,A.df(r,r,r,r,B.bd,new A.o(w,r,u,v,t,r,B.n),U.Bc,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1636}
C.dcm.prototype={
$0(){return this.a.czn(this.b)},
$S:0}
C.dcB.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.pj,t,t,t)
w=A.d("Move "+r.aya()+"/"+C.h3k(),t,t,t,t,t,t,B.DK,t,t,t)
v=r.x2
u=s*3+12
return A.x(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.u(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.E(A.av(new A.a7(u,u,A.im(!0,t,t,B.y,new A.hQ(3,6,6,1,s),new C.dcl(r),9,t,B.dT,B.ag,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:153}
C.dcl.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.n(10),s=A.n(10),r=u?B.bc:D.bdc,q=u?B.et:D.bm2
return A.aF(!1,B.a1,!0,w,A.aL(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.q,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.dci(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:77}
C.dci.prototype={
$0(){return this.a.czi(this.b)},
$S:0}
C.dcC.prototype={
$0(){return this.a.b4y(this.b[this.c])},
$S:0}
C.dcD.prototype={
$0(){return this.a.m(new C.dck())},
$S:0}
C.dck.prototype={
$0(){},
$S:0}
C.dcE.prototype={
$2(d,e){this.a.a_l(d,e)
return null},
$S:z+21}
C.dh1.prototype={
$1(d){return this.a.cjE(this.b,d)},
$S:1637}
C.dh0.prototype={
$0(){var w=this
return w.a.a.cSe(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cEp.prototype={
$1(d){var w=this.a
w.a0T()
w.tX()},
$S:8}
C.cDK.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cDA.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cDB.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cDU.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cDR.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cDS.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cDT.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cDM.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cDL(w))},
$S:0}
C.cDL.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cDC.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cDP.prototype={
$1(d){var w=this.a
return new C.Vj(w.fx,new C.cDO(w),w.a.f.r,null)},
$S:z+37}
C.cDO.prototype={
$1(d){return this.bjW(d)},
bjW(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.caX(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cDN(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cDN.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cEc.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cE6.prototype={
$1(d){this.a.tX()
return null},
$S:12}
C.cE9.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.am(v.gaVk().a,1e6)<=0){w=v.id
if(w!=null)w.a7(0)
v.tX()
return}v.m(new C.cE8())},
$S:12}
C.cE8.prototype={
$0(){},
$S:0}
C.cE5.prototype={
$1(d){this.a.Fb()
return null},
$S:12}
C.cE7.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cE4.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.T(A.fX(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aM(0,w==null?new A.T(A.fX(0,0,!1),0,!1):w)},
$S:43}
C.cDH.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.T(A.fX(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aM(0,w==null?new A.T(A.fX(0,0,!1),0,!1):w)},
$S:43}
C.cDI.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cDJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.a1z(!0)},
$S:11}
C.cDF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cDG.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.TN(this.b)},
$S:8}
C.cDX.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gd0(v).Q
v.toString
if(this.b)w.ib(v)
else w.me(v,B.dV,B.kV)},
$S:8}
C.cDQ.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cDY.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cDZ.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","user","text",this.b,"at",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z))
w.b60()
w.r.bP(0,B.c9)
w.at=!0},
$S:0}
C.cE_.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cE0.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","ai","text",this.b,"at",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.cE1.prototype={
$0(){var w,v=this.b,u=A.U(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.T(Date.now(),0,!1).a6().ac())
w=this.a
if(J.cJ(w.b)){w=J.b6(w.b,v.gciA(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b60()},
$S:0}
C.cE2.prototype={
$0(){this.a.f.push(A.F(["role","ai","text",y.g,"at",new A.T(Date.now(),0,!1).a6().ac()],x.N,x.z))},
$S:0}
C.cE3.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cDV.prototype={
$1(d){return this.bjX(d)},
bjX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a4(s)
q=r.h(s,"start")
p=A.bi(q==null?"":q)
q=r.h(s,"end")
o=A.bi(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=B.a.i(m==null?"Event":m)
l=p.bU()
w=5
return A.b(C.aq0(q,new C.ro("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.aqJ()
case 4:k.c.K(x.q).f.U(A.b2(null,null,null,B.cS,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:406}
C.cEb.prototype={
$1(d){return this.bjY(d)},
bjY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.K(x.q).f.U(A.b2(null,null,null,B.cS,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:406}
C.cDW.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gd0(v).Q
v.toString
w.ib(v)},
$S:8}
C.cEo.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.abi(v-1)},
$S:0}
C.cEh.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.cEk.prototype={
$1(d){var w=this.a
w.m(new C.cEe(w,d))
if(d===0)w.a1z(!0)},
$S:29}
C.cEe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cEi.prototype={
$2$size(d,e){return C.h1z(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1638}
C.cEj.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.her(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aqQ(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cEf(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.apZ(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tX(),$async$$0)
case 15:p.m(new C.cEg(p))
p.abi(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tX(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:62}
C.cEf.prototype={
$2(d,e){return this.bjZ(d,e)},
bjZ(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a20(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:120}
C.cEg.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cEm.prototype={
$2(d,e){return B.ab},
$S:37}
C.cEl.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a3c:D.a2x)[e],w,w,w,w,w,w,B.pl,w,w,w),t=A.Z(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),s=A.Z(89,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
v=v.at?w:new C.cEd(v,e)
return A.mL(w,t,u,w,v,w,w,new A.az(s,1,B.q,-1),w)},
$S:504}
C.cEd.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a3c:D.a2x
w.r.saW(0,v[this.b])
w.n2()
return null},
$S:0}
C.cEn.prototype={
$1(d){var w=this.a
return w.at?null:w.n2()},
$S:2}
C.cDD.prototype={
$0(){return this.a.abi(0)},
$S:0}
C.cEa.prototype={
$0(){return this.a.abi(this.b)},
$S:0}
C.cDE.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bRn,B.f,v,v,new A.o(v,v,v,v,v,new A.a9(B.a3,B.a8,B.x,A.a([A.Z(51,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aw,v,v,v,v,v,v,v,v,16,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.D(B.YP,A.x(A.a([u,B.ac,s,B.am,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aW,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bFG(t[e],w.c)
return u.aOM(A.F(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.bZK.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.T(A.fX(w>1e11?w:w*1000,0,!0),0,!0).bU()}v=A.bi(J.k(d))
return v==null?null:v.bU()},
$S:295}
C.bZJ.prototype={
$1(d){A.aJ(d)
return(d==null?0:d)/100},
$S:569}
C.bZM.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bU()}return w},
$S:295}
C.bZL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a2(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aJ(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a4y(B.a4_,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a4y(B.a2v,J.k(r==null?"system":r))
q=A.aU(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a4y(B.He,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.T(Date.now(),0,!1)
return new A.d4(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:595}
C.dxy.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dxz.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dxp.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bp(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dxn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.AK(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fX2(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.pa(o.a.c,!1),$async$$0)
case 4:o.l0(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a9M(),$async$$0)
case 3:q=e
if(q==null){r.l0("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a5(s,!1).cm(A.ea(new C.dxw(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.pa(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxw.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.a_5(w.b,w.a,u,v,null)},
$S:z+39}
C.dxm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hJ8(q)?3:4
break
case 3:w=5
return A.b(t.a.EL(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aXJ(q,s.a.c),$async$$0)
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
case 9:s.l0(C.bZO(s.a.c))
w=1
break
case 10:s.l0("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.l0(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.A_(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aQ0(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxl.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bp(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dxo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.ada(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.hbi(q)
if(s==null){r.l0("Could not read that backup file.")
w=1
break}if(!C.bZN(s,r.a.c,null)){r.l0(C.bZO(r.a.c))
w=1
break}w=4
return A.b(r.bI2(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxv.prototype={
$1(d){var w=null,v=new A.as(B.as,$.aw()),u=A.P(d).ax.a===B.I,t=u?B.ih:B.c,s=x.p,r=A.x(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.aB,A.aM(w,B.U,!0,w,!0,B.r,w,A.aN(),v,w,w,w,w,w,2,A.bs(w,new A.b4(4,A.n(14),B.dj),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.aj,w,w,w,w,w,B.dQ,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.an,w,w,w,w)],s),B.F,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.dxt(d),w,w),A.bG(D.flE,new C.dxu(d,v),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fA6,w)},
$S:21}
C.dxt.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dxu.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).O(w)
return null},
$S:0}
C.dxq.prototype={
$1(d){return D.h7u},
$S:z+12}
C.dxr.prototype={
$0(){return this.a.EM(B.a.i(this.b))},
$S:1}
C.dxs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aXJ(t.b,r.a.c),$async$$0)
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
return A.b(r.A_(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.l0(C.bZO(r.a.c))
w=1
break
case 8:r.l0("Could not read that QR code for your account.")
w=1
break
case 9:r.l0(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aQ0(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxA.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dxE.prototype={
$1(d){this.a.QS()
return null},
$S:12}
C.dxB.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dxC.prototype={
$0(){var w=null,v=this.a
A.fO(new A.fF(v.gawi()))
this.b.K(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d("Code "+v.gawi()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dxD.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dxF.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:177}
C.fqt.prototype={
$1(d){return D.h4Q},
$S:z+13}
C.frG.prototype={
$1(d){return new C.aew(this.a,this.b,this.c,null)},
$S:z+14}
C.eY8.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eY9.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d6A.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:8}
C.d6x.prototype={
$2(d,e){return e.akL(e.a.toUpperCase())},
$S:1639}
C.d6y.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a5(v,!1).O(w)
return null},
$S:2}
C.d6z.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.c_v.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b4(D.dgA,B.a.gkL(v))},
$S:4}
C.fAG.prototype={
$1(d){return d.a===this.a},
$S:1640}
C.fAH.prototype={
$0(){return B.d.gI(B.Cu)},
$S:1641}
C.dE_.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dDZ(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b52("Time's up")},
$S:12}
C.dDZ.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dDR.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dDW.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dDT(w,d,e))},
$S:140}
C.dDT.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dDX.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dDS(w))
w.ctC(!0)},
$S:0}
C.dDS.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dDY.prototype={
$1(d){this.a.b52(d)
return null},
$S:2}
C.dDU.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dDV.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c7E.prototype={
$1(d){return D.dC1},
$S:z+15}
C.c7D.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fsu.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a4(d),t=A.aJ(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aJ(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aJ(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1642}
C.fsv.prototype={
$2(d,e){var w=A.aJ(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:566}
C.fsw.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:216}
C.fHH.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hmM(w,v):C.h1R(w,v)
if(u===3)++w.f
C.afY(w,this.c,u)
return u},
$S:1643}
C.fHJ.prototype={
$0(){return C.hmM(this.a,this.b)},
$S:100}
C.fHI.prototype={
$0(){return C.h1R(this.a,this.b)},
$S:100}
C.dxa.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dx9(w))},
$S:0}
C.dx9.prototype={
$0(){this.a.r=1+B.o.E(A.C0(new A.T(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dxb.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bl(u*10)
if(w!==v.w)v.m(new C.dx8(v,w))}},
$S:0}
C.dx8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c9C.prototype={
$3(d,e,f){var w=null
return A.E(A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bC,A.eQ(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dw)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1644}
C.c9B.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.ab(e,2),w,w,w,w,w,w,B.nD,w,w,w)},
$S:434}
C.ca3.prototype={
$1(d){return new C.Nz(this.a,this.b,!1,null,null)},
$S:z+16}
C.dXa.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.n(e?0:30)
e=e?g:A.I(B.b6.j(0.5),B.q,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b6.j(0.35),B.J,36),new A.ac(0,B.G,B.bE.j(0.175),B.J,24)],x.V)
v=A.n(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bV(B.A,0.5,B.x,g,0,A.a([B.b7.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bV(B.A,0.5,B.x,g,0,A.a([B.bE.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.N
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.O)
n=x.V
o.push(A.p(g,D.bMP,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.q,2.5),g,A.a([new A.ac(0,B.G,B.b6.j(0.55),B.cC,18)],n),E.uk,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aR)
o.push(A.nT(B.jA,D.fxK,new C.dX6()))
o.push(B.O)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cx,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.c8.j(0.12)
k=A.n(18)
j=A.I(B.c8.j(0.45),B.q,1)
i=A.a([A.B(A.a([A.X(D.bGN,B.c8.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.c8.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.R,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.R],p)
B.d.v(i,new A.M(m,new C.dX7(),A.S(m).k("M<1,t>")))
B.d.v(o,A.a([B.aR,A.p(g,A.x(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.by)
m=B.w.j(0.35)
l=A.n(18)
k=A.I(B.b6.j(0.35),B.q,1)
o.push(A.p(g,A.x(A.a([f.ax3(B.hb,"Unlimited games with an active plan",B.b7),B.O,f.ax3(B.jL,"Weekday check-ins grow your balance",B.b6),B.O,f.ax3(B.mz,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d8)
l=A.n(16)
n=A.a([new A.ac(0,B.G,B.bE.j(0.45),B.cC,16)],n)
o.push(new A.a7(1/0,g,A.c0(A.dn(D.bQ6,D.fth,new C.dX8(f,a0),A.bo(B.K,g,g,g,B.c,B.J5,g,B.K,new A.b7(A.n(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.uk,B.n),B.bf),g))
o.push(B.O)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dX9(f,a0),g,g))
if(f.a.e)o.push(B.b8)
h=A.p(g,A.by(v,new A.an(B.W,g,B.aa,B.r,A.a([t,u,new A.D(new A.R(22,r,22,q),A.x(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.c_p,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eL(g,B.K,h,g,g,g,Af.Zk,B.d1,g,g,g)},
$S:657}
C.dX6.prototype={
$1(d){return D.bZn.aw(0,d)},
$S:66}
C.dX7.prototype={
$1(d){var w=null
return new A.D(B.eK,A.B(A.a([A.X(A1.a0i,B.c8.j(0.85),w,w,w,14),B.ab,A.E(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:142}
C.dX8.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a5(this.b,!1).O(null)
w.a.c.$0()}},
$S:0}
C.dX9.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a5(this.b,!1).O(null)},
$S:0}
C.fD2.prototype={
$1(d){if(d.gmJ())this.a.a=d
return d.gmJ()},
$S:730}
C.fCQ.prototype={
$1(d){$.aW.x1$.push(new C.fCP(this.a))},
$S:8}
C.fCP.prototype={
$1(d){return this.a.$0()},
$S:8}
C.foK.prototype={
$1(d){return C.hmT(this.a,this.b+1)},
$S:8}
C.fEp.prototype={
$2(d,e){var w=A.aI(d,B.bY,x.w).w.a
return new A.a7(w.a,w.b,A.c6(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:171}
C.cah.prototype={
$1(d){return d.r===this.a},
$S:240}
C.cai.prototype={
$1(d){var w=$.aQN(),v=w.a
w.sp(0,v+1)
return v},
$S:1646}
C.caj.prototype={
$1(d){},
$S:30}
C.cag.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:240}
C.caf.prototype={
$1(d){return d.f.cd(this.a)},
$S:240}
C.fm_.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:69}
C.fQ5.prototype={
$1(d){return C.a7f(this.a)},
$S:104}
C.fQ6.prototype={
$1(d){var w=$.aQN()
w.sp(0,w.a+1)},
$S:31}
C.fQ7.prototype={
$1(d){},
$S:30}
C.fQ8.prototype={
$1(d){return new A.jN($.aQN(),new C.fQ4(this.a,this.b),null,null,x.am)},
$S:1647}
C.fQ4.prototype={
$3(d,e,f){var w=this.b
return new A.le(C.apH(this.a,!1),new C.fQ3(w),w,null,x.gv)},
$S:1648}
C.fQ3.prototype={
$2(d,e){var w=e.b
return new C.adk(w==null?this.a:w,null)},
$S:z+17}
C.dXd.prototype={
$1(d){return d.c},
$S:240}
C.dXe.prototype={
$1(d){return d.gbgD()},
$S:1649}
C.dXf.prototype={
$2(d,e){return d+e},
$S:89}
C.dXg.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dXi.prototype={
$2(d,e){return B.O},
$S:37}
C.dXh.prototype={
$2(d,e){return new C.adj(J.q(this.a.c,e),null)},
$S:z+18}
C.dXc.prototype={
$1(d){return d==null?"\u2026":C.bzZ(d)},
$S:1650}
C.fQb.prototype={
$3(d,e,f){var w=this
return A.rE(new C.aAb(w.a,w.b,w.c,w.d,new C.fQ9(d,w.e),new C.fQa(d,w.f),null))},
$C:"$3",
$R:3,
$S:95}
C.fQ9.prototype={
$0(){A.a5(this.a,!1).O(null)
C.hpY(this.b)},
$S:0}
C.fQa.prototype={
$0(){A.a5(this.a,!1).O(null)
C.hpY(this.b)},
$S:0}
C.ddB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&A.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.aj()*260
u.c=1.5+w.aj()*3}}g=x.p
w=A.a([],g)
if(h.a.c){t=h.f
B.d.v(w,new A.M(t,new C.ddA(),A.S(t).k("M<1,t>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bc,B.ew,B.dX],r):A.a([B.av,B.eC,B.es],r)
p=A.n(26)
o=A.I(B.c.j(0.4),B.q,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dA:B.dJ).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dp()
j=k.a
j.$flags&2&&A.aj(j)
j[11]=0.001
k.kb(-0.35)
r=A.a([Z.afs,B.tr],r)
l.push(new A.a7(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fw(B.A,A.p(i,D.b7h,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cU.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dp,12)],n),new A.bV(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bTo)
l.push(B.aB)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a8I,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.n(18)
k=A.I(B.ew,B.q,4)
B.d.v(l,A.a([B.aB,D.fnl,B.O,A.p(i,A.d(r,i,i,i,i,i,i,D.fdX,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.YN,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.fgC,B.L,i,i)],g))
l.push(B.dZ)
r=A.E(A.dW(D.fkV,h.a.r,A.dg(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cm,i,i,D.aZU,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.at,A.E(A.bG(F.aRT,n,A.bo(B.c,i,i,i,h.c?B.ew:B.eC,i,B.cm,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.ef(B.A,A.p(i,A.x(l,B.m,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a9(B.az,B.aC,B.x,q,i,i),B.n),i,i,i,B.a9,B.aj9,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:118}
C.ddA.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.de(A.eJ(B.A,d.d,A.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cbT.prototype={
$2(d,e){var w=null,v=this.a,u=C.hIy(A.L7(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1651}
C.cbS.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:69}
C.c01.prototype={
$0(){},
$S:0}
C.fkZ.prototype={
$1(d){return B.o.u(d)},
$S:82}
C.dQd.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dQe.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dQf.prototype={
$0(){var w=this.a
return w.w=D.QW[w.d.av(5)]},
$S:0}
C.dQg.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dQh.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dQi.prototype={
$0(){var w=this.a
return w.m(new C.dQc(w))},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dQj.prototype={
$0(){var w=this.a
return w.m(new C.dQb(w))},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dQm.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dQn.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bc:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.n(10)
t=t.y?u:new C.dQl(t,d)
w=A.n(10)
v=B.k.ab(d,0)
return A.E(new A.D(B.jr,A.aF(!1,B.a1,!0,r,A.aL(!1,w,!0,new A.a7(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ah),u),1)},
$S:1652}
C.dQl.prototype={
$0(){var w=this.a
return w.m(new C.dQk(w,this.b))},
$S:0}
C.dQk.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,B.c9)},
$S:0}
C.dXA.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cL.gct().aK(this.c)},
$S:0}
C.dXB.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dXw.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.n(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eL.j(0.5):B.K,B.q,1),q=A.X(e,u?D.eL:B.aA,w,w,w,20)
return A.E(A.aB(w,A.df(w,A.B(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b9,B.j,0,w,w),w,w,B.bd,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dXy(v,d),w,w,w,w,w,w,!1,B.a5),1)},
$S:1653}
C.dXy.prototype={
$0(){var w=this.a
return w.m(new C.dXx(w,this.b))},
$S:0}
C.dXx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXz.prototype={
$0(){var w=this.a,v=w.d===B.kE?"Cash App tag":"Bitcoin address"
return w.IY(this.b,v)},
$S:0}
C.dXv.prototype={
$0(){var w=this.a
return w.IY(w.garC(),"Code")},
$S:0}
C.caJ.prototype={
$1(d){return C.hEL(A.a2(d,x.N,x.z))},
$S:z+20}
C.caK.prototype={
$2(d,e){return d.c.aM(0,e.c)},
$S:z+6}
C.caG.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.caH.prototype={
$2(d,e){return d.c.aM(0,e.c)},
$S:z+6}
C.caI.prototype={
$1(d){return d.ag()},
$S:z+23}
C.caL.prototype={
$1(d){var w=d.c
return!w.d_(this.a.bS(-36e8))&&!w.cd(this.b)},
$S:z+7}
C.c37.prototype={
$1(d){return C.hEM(A.a2(d,x.N,x.z))},
$S:z+24}
C.c38.prototype={
$2(d,e){return e.b.aM(0,d.b)},
$S:z+8}
C.c35.prototype={
$1(d){return d.ag()},
$S:z+26}
C.c36.prototype={
$2(d,e){return e.b.aM(0,d.b)},
$S:z+8}
C.c3a.prototype={
$1(d){var w=d.b
return!w.d_(this.a)&&!w.cd(this.b)},
$S:z+27}
C.caS.prototype={
$1(d){return d.ag()},
$S:z+28}
C.caR.prototype={
$1(d){return C.hdz(A.a2(x.f.a(d),x.N,x.z))},
$S:z+29}
C.caQ.prototype={
$1(d){return d.ag()},
$S:z+30}
C.caP.prototype={
$1(d){return C.hIc(A.a2(x.f.a(d),x.N,x.z))},
$S:z+31}
C.caU.prototype={
$1(d){return C.hIb(A.a2(x.f.a(d),x.N,x.z))},
$S:z+32}
C.caV.prototype={
$2(d,e){return B.o.aM(d.f,e.f)},
$S:z+2}
C.caW.prototype={
$1(d){return d.ag()},
$S:z+34}
C.e0f.prototype={
$1(d){return d.bbZ(A.bp(d.e,!0,x.u))},
$S:z+36}
C.e0g.prototype={
$2(d,e){return B.o.aM(d.f,e.f)},
$S:z+2}
C.e09.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e0a.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_T.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.L(w,this.b)},
$S:0}
C.e_U.prototype={
$1(d){return new C.Ps(this.a,null)},
$S:z+9}
C.e_V.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bg(t,new C.e_S(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cA(u.d,w)
u.J6()}},
$S:0}
C.e_S.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e06.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.F(["role","admin","text",this.b],w,w))},
$S:0}
C.e07.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.F(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.i7C(v,w[0],w[3])
t.J6()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.F(["role","ai","text",t],w,w))}},
$S:0}
C.e08.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gd0(v).Q
v.toString
w.ib(v)}},
$S:8}
C.e00.prototype={
$1(d){return new C.Ps(this.a,null)},
$S:z+9}
C.e01.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e0_.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cA(w,this.b)},
$S:0}
C.e05.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cA(w,s)
B.d.c9(t.d,u.a,v)
t.J6()},
$S:0}
C.e04.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.a_T(u[w],new C.e03(v,w),null)},
$S:z+59}
C.e03.prototype={
$1(d){var w=this.a
return w.m(new C.e02(w,this.b,d))},
$S:z+40}
C.e02.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e_X.prototype={
$0(){var w=this.a
return w.m(new C.e_W(w))},
$S:0}
C.e_W.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e_Y.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cs:B.aJ
return new A.D(B.eK,A.d(t+": "+A.u(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a7:B.cx,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:115}
C.e_Z.prototype={
$1(d){return this.a.a1g()},
$S:2}
C.e0e.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.tn:B.c
u=A.n(16)
t=A.n(16)
s=l?B.aJ:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.n(12)
q=A.p(n,A.X(B.alQ,l?B.bK:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.n(8)
o=A.p(n,A.X(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hD,n,n,n)
r=A.B(A.a([o,B.at,A.E(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.D(B.d9,A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,new H.auj(q,e,!0,n),n,n,n,n,new C.e0b(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.q,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bK:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.C_(n,n,n,new C.e0c(),B.J,new C.e0d(m,e),B.cq,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ah),new A.cy(w.a,x.W))},
$S:115}
C.e0d.prototype={
$1(d){var w=this
if(d==="edit")w.a.aae(w.b)
if(d==="questions")w.a.YE(w.b)
if(d==="delete")w.a.bKV(w.b)},
$S:2}
C.e0c.prototype={
$1(d){return D.cMs},
$S:133}
C.e0b.prototype={
$0(){return this.a.YE(this.b)},
$S:0}
C.cMQ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b0(q).j(0.2)}else q=B.cX.j(0.1)
v=A.n(10)
if(w){u=r.f
u===$&&A.c()
u=A.b0(u)}else u=B.K
u=A.I(u,B.q,1)
t=r.f
t===$&&A.c()
return A.aL(!1,s,!0,A.p(s,A.X(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cq,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cMP(r,d),s,s,s,s,s,s,s)},
$S:1654}
C.cMP.prototype={
$0(){var w=this.a
return w.m(new C.cMN(w,this.b))},
$S:0}
C.cMN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cMR.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aB(w,A.h7(u,w,t===d?D.bQP:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cMO(v,d),w,w,w,w,w,w,!1,B.a5)},
$S:445}
C.cMO.prototype={
$0(){var w=this.a
return w.m(new C.cMM(w,this.b))},
$S:0}
C.cMM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cMS.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cMT.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cJU(v,w,t)
A.a5(this.b,!1).O(t)
return null},
$S:0}
C.eT2.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eT3.prototype={
$1(d){return new C.a_S(this.a,null)},
$S:z+41}
C.eT9.prototype={
$2(d,e){return B.O},
$S:37}
C.eT8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.tn:B.c
u=A.n(14)
t=A.n(14)
s=l?B.aJ:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.n(8)
r=A.by(q,K.aPu(n,B.bX,36,B.q1,l?B.bK:B.ak,r,48),B.aq)}else r=A.X(D.a02,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eT6(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.q,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bK:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bPb,n,n,n,new C.eT7(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ah)},
$S:77}
C.eT7.prototype={
$0(){var w=this.a
w.m(new C.eT4(w,this.b))
w.ax6()},
$S:0}
C.eT4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cA(w,this.b)},
$S:0}
C.eT6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.b0f(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eT5(t,u.c,s))
t.ax6()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eT5.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eSZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eSX.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Vk(w,"Answer Document",null)},
$S:z+42}
C.eSY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eT0.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a5(this.b,!1).O(new C.ir(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eT1.prototype={
$1(d){var w=this.a
return w.m(new C.eT_(w,d))},
$S:9}
C.eT_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.caM.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fEN.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e0Q.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.e0w.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lE("image","",this.b,null))},
$S:0}
C.e0B.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lE("video","","data:video/mp4;base64,"+B.cL.gct().aK(this.b),null))},
$S:0}
C.e0z.prototype={
$1(d){var w=null,v=x.p,u=A.x(A.a([A.aM(w,B.U,!1,w,!0,B.r,w,A.aN(),this.a,w,w,w,w,w,2,D.bVf,B.y,!0,w,!0,w,!1,w,B.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a4,w,B.an,w,w,w,w),A.aM(w,B.U,!1,w,!0,B.r,w,A.aN(),this.b,w,w,w,w,w,2,D.bVe,B.y,!0,w,!0,w,!1,w,B.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a4,w,B.an,w,w,w,w)],v),B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.e0x(d),w,w),A.bG(D.fxe,new C.e0y(d),w)],v),w,w,w,u,w,w,w,w,D.fkd,w)},
$S:21}
C.e0x.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e0y.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e0A.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.L(v,new C.lE("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.e0s.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.e0t.prototype={
$1(d){return d.length!==0},
$S:3}
C.e0u.prototype={
$1(d){return B.a.i(B.a.ei(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.e0v.prototype={
$1(d){return d.length!==0},
$S:3}
C.e0G.prototype={
$0(){var w=this.a.bEa()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.e0H.prototype={
$0(){return this.a.ax7("**","**")},
$S:0}
C.e0I.prototype={
$0(){return this.a.ax7("*","*")},
$S:0}
C.e0J.prototype={
$0(){return this.a.ax7("__","__")},
$S:0}
C.e0K.prototype={
$0(){return this.a.aZr("## Section title")},
$S:0}
C.e0L.prototype={
$0(){return this.a.aZr("\u2022 First point\n\u2022 Second point")},
$S:0}
C.e0M.prototype={
$0(){},
$S:0}
C.e0N.prototype={
$0(){var w=this.a
w.m(new C.e0F(w))},
$S:0}
C.e0F.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dFo)},
$S:0}
C.e0O.prototype={
$0(){var w=this.a
w.m(new C.e0E(w))},
$S:0}
C.e0E.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dFp)},
$S:0}
C.e0P.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.j_:B.aw,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cp:B.iE
return A.Do(u,v,B.ao4,w,u,new C.e0D(this.a,d),u)},
$S:z+45}
C.e0D.prototype={
$0(){var w=this.a
return w.m(new C.e0C(w,this.b))},
$S:0}
C.e0C.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cA(w,this.b.a)},
$S:0}
C.e0p.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aVZ},
$S:0}
C.e0q.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.h6g},
$S:0}
C.e0h.prototype={
$0(){var w=this.a
w.d=D.aVY
w.f=w.e=null},
$S:0}
C.e0i.prototype={
$0(){var w=this.a
w.d=D.aVZ
w.f=null},
$S:0}
C.e0r.prototype={
$2(d,e){return B.o.aM(d.f,e.f)},
$S:z+2}
C.e0k.prototype={
$2(d,e){var w=this.a,v=w.gb61()[e]
return new C.abR(v,this.b,new C.e0j(w,v),null)},
$S:z+46}
C.e0j.prototype={
$0(){return this.a.c7W(this.b.a)},
$S:0}
C.e0m.prototype={
$2(d,e){return B.o.aM(d.f,e.f)},
$S:z+47}
C.e0o.prototype={
$2(d,e){return B.R},
$S:37}
C.e0n.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.tn:B.c,p=A.n(16),o=A.n(16),n=A.n(16),m=A.I(r?B.aJ:B.aL,B.q,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dE,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.n(10)
v=A.n(10)
k.push(A.by(w,K.aPu(v,B.bX,52,D.a02,r?B.bK:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.n(12)
k.push(A.p(t,A.X(D.a02,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.be)
k.push(A.E(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.M,t,t,t,t,t,t,t,t,13,t,t,B.P,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.X(B.eA,r?B.bK:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aL(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.e0l(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ah)},
$S:77}
C.e0l.prototype={
$0(){return this.a.ceH(this.b)},
$S:0}
C.caO.prototype={
$1(d){return new C.abJ(d,this.a,null)},
$S:z+48}
C.cGw.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oz(v==null?w.b:v)
if(u!=null)A.iW(u,B.fn,null)},
$S:0}
C.cGx.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cGy.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cs:B.aJ,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.D(B.nh,A.B(A.a([u,A.E(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cs:B.aJ,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:142}
C.dhV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dhX.prototype={
$0(){return this.a.m(new C.dhW(this.b))},
$S:0}
C.dhW.prototype={
$0(){var w=this.a
return w.a.f?w.ha(0):w.pW(0)},
$S:0}
C.fkI.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.e13.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.CV)w.z=v
else w.Q=v},
$S:0}
C.e0V.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gd0(v).Q
v.toString
w.me(v,B.cu,B.eM)},
$S:8}
C.e0X.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:91}
C.e0Y.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","user","text",this.b],v,v))
w.d.bP(0,B.c9)
w.r=!0},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.e1_.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.u(w.h(d,"text"))},
$S:149}
C.e10.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text",this.b],w,w))},
$S:0}
C.e11.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.e12.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e0W.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mM(l,B.bE.j(0.9),l,l,l,l,l,2,l,l)
return new A.D(B.bP,A.B(A.a([new A.a7(22,22,k,l),B.at,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dB,l,l,l,l,l,l,l,l,12,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a8:B.a3
k=k.c
k.toString
k=A.aI(k,B.bY,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a9(B.a3,B.a8,B.x,A.a([B.aE,B.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a9(B.a3,B.a8,B.x,v?A.a([B.bm,B.M],q):A.a([B.c,B.aQ],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bE:B.aE).j(0.22),B.jx,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.q,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bk
n=u?13.5:15
m=u?B.bo:B.cF
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a7:B.cx,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bn(B.iw,B.iw,new A.aS(s,s),new A.aS(r,r)),p,q,B.n),l,l,l,B.kW,B.jq,l,l,l),l)},
$S:41}
C.e1a.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.n(22)
u=this.b
t=x.O
s=u?A.a([D.adT,B.M,B.nW],t):A.a([B.pF,B.pB,B.pE],t)
w=A.a([new A.ac(-4,B.G,B.aE.j(0.35+w*0.25),B.dp,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.q,1)
q=A.dp()
p=q.a
p.$flags&2&&A.aj(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fF(m*0.08)
q=A.fw(B.A,A.p(o,D.bLT,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.q,2),o,o,D.ekf,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nT(B.jA,D.fBO,new C.e17())
p=x.p
m=A.a([A.B(A.a([q,B.be,A.E(A.x(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aS:B.aW,o,o,o,o,o,o,o,o,10,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.B(A.a([n.avk(D.CV,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.avk(D.aGC,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.avk(D.CW,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.CW){t=A.a([B.O,n.cxY(u)],p)
if(n.w){q=n.x===D.CV?D.a3U:D.a30
p=A.S(q).k("M<1,t>")
q=A.C(new A.M(q,new C.e18(n,u),p),p.k("ak.E"))
t.push(new A.D(B.jI,A.bS(B.bA,q,B.bq,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bE.j(0.22),B.aE.j(0.12)],t)
q=A.n(12)
p=A.I(B.bE.j(0.45),B.q,1)
m.push(new A.D(B.jI,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.iC:B.ks,o,o,o,o,o,o,o,o,10,o,o,B.P,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a9(B.a3,B.a8,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.O)
t=x.dc
n=A.C(new A.M(D.d9m,new C.e19(n,u),t),t.k("ak.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.x(m,B.ai,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a9(B.az,B.aC,B.x,s,o,o),B.n),o,o,o,I.ai3,I.aih,o,o,o)},
$S:94}
C.e17.prototype={
$1(d){return D.bZO.aw(0,d)},
$S:66}
C.e18.prototype={
$1(d){return this.a.cxZ(d,this.b)},
$S:z+49}
C.e19.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aGE?6:0,m=o?5:0,l=A.n(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.n(12)
p=p.r?q:new C.e16(p,d)
s=C.hJH(d)
if(o)r=B.c
else r=v?B.ad:B.bk
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hJI(d)
if(o)v=B.ad
else v=v?B.bV:B.dB
return A.E(new A.D(new A.R(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aL(!1,t,!0,new A.D(P.Mt,A.x(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ah),q),1)},
$S:z+50}
C.e16.prototype={
$0(){var w=this.a
return w.m(new C.e15(w,this.b))},
$S:0}
C.e15.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e1c.prototype={
$0(){var w=this.a
return w.m(new C.e1b(w))},
$S:0}
C.e1b.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e0U.prototype={
$0(){var w=this.a
return w.m(new C.e0T(w,this.b))},
$S:0}
C.e0T.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.CW
if(v===D.aGC&&w.Q==null)w.Q=B.d.gI(D.a30).a},
$S:0}
C.e1d.prototype={
$0(){return this.a.cts(this.b.a)},
$S:0}
C.e14.prototype={
$0(){return this.a.IZ(this.b)},
$S:0}
C.e0R.prototype={
$1(d){return this.a.aZs()},
$S:2}
C.e0S.prototype={
$0(){return this.a.aZs()},
$S:0}
C.fQW.prototype={
$1(d){var w=this
return new C.ZC(w.a,w.b,w.c,new C.fQV(w.d),null)},
$S:z+51}
C.fQV.prototype={
$0(){return J.lY(this.a.bj())},
$S:0}
C.dfe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bgT()},
$S:31}
C.dff.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aI(m,B.bY,u).w
s=Math.cos(v)
u=A.aI(m,B.bY,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dY:B.hb
o=B.o.E(w,4)
q=q?B.aF:B.aK
return A.ao(n,A.de(A.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:321}
C.dfk.prototype={
$0(){},
$S:0}
C.dfj.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.mV.az(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dp()
u=w.a
u.$flags&2&&A.aj(u)
u[11]=0.0028
w.fF(t*0.08)
w.kb(0.12)
return A.ef(B.A,A.fw(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:47}
C.dfg.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aF.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.r,A.a([r,new A.a7(96,96,A.mM(B.c.j(0.08),B.aF,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cR(B.aF.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:118}
C.dfh.prototype={
$1(d){return D.bZS.aw(0,d)},
$S:66}
C.dfi.prototype={
$0(){var w=this.a
w.a.bgT()
w.a.e.$0()},
$S:0}
C.ccM.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fu)if(d.x===B.dv){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.ccZ.prototype={
$1(d){return d.a===this.a},
$S:16}
C.efE.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.egk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.PM()},
$S:8}
C.egl.prototype={
$1(d){var w=$.aW.p2$
if(w===B.t9||w===B.ta)return
this.a.EG()},
$S:12}
C.egm.prototype={
$1(d){this.a.cA6()},
$S:12}
C.eg2.prototype={
$0(){this.a.Jr(this.b.d,!1)},
$S:0}
C.eg3.prototype={
$0(){},
$S:0}
C.eg4.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.eg5.prototype={
$0(){},
$S:0}
C.eg6.prototype={
$1(d){return d.a===this.a},
$S:16}
C.eg7.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.eg8.prototype={
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
C.efY.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bp(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bp(v[1],!0,x.N)
w.P5()
w.a8o()},
$S:0}
C.efF.prototype={
$0(){this.b.Jr(this.c.d+this.a.a,!1)},
$S:0}
C.efZ.prototype={
$1(d){var w=d.d
return(w===B.fu||w===B.eP)&&d.x===B.dv},
$S:16}
C.eg_.prototype={
$1(d){return d.a},
$S:158}
C.eg0.prototype={
$1(d){return d.a===this.a},
$S:16}
C.eg1.prototype={
$0(){},
$S:0}
C.efJ.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bp(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bp(v[0],!0,x.N)},
$S:0}
C.efK.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.efS.prototype={
$0(){},
$S:0}
C.efP.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.efQ.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.efR.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.efT.prototype={
$0(){return this.a.z=!0},
$S:0}
C.efU.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.vv(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.efV.prototype={
$0(){return this.a.z=!1},
$S:0}
C.efX.prototype={
$0(){var w=this.a
return w.m(new C.efW(w))},
$S:0}
C.efW.prototype={
$0(){return this.a.y=1},
$S:0}
C.efL.prototype={
$0(){return this.a.y=1},
$S:0}
C.efM.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.egc.prototype={
$1(d){return d.a.length===0},
$S:16}
C.egd.prototype={
$2(d,e){return e.y.aM(0,d.y)},
$S:72}
C.egh.prototype={
$0(){var w=this.a
return w.m(new C.ega(w))},
$S:0}
C.ega.prototype={
$0(){return this.a.y=1},
$S:0}
C.egi.prototype={
$0(){var w=this.a
return w.m(new C.eg9(w))},
$S:0}
C.eg9.prototype={
$0(){return this.a.y=2},
$S:0}
C.egj.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.ege.prototype={
$2$cloudRequest(d,e){return this.a.b_z(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1656}
C.egf.prototype={
$0(){return this.a.EG()},
$S:1}
C.egg.prototype={
$0(){var w=this.a
return w.m(new C.egb(w))},
$S:0}
C.egb.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.efI.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.efH(w))},
$S:0}
C.efH.prototype={
$0(){return this.a.y=0},
$S:0}
C.efG.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bEL(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.q,1.2),t,A.a([new A.ac(1,B.G,B.ay.j(0.55),B.J,18)],x.V),D.bXU,B.a6),t,t,t,t,t,t,t,t),B.ey,B.r7,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c3z(u))
return new A.an(B.W,t,B.aa,B.r,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:64}
C.efO.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eY()
w.m(new C.efN(w,v))},
$S:0}
C.efN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djI.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fu||v===B.eP)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.djJ.prototype={
$1(d){return new A.T(Date.now(),0,!1)},
$S:659}
C.djK.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.T(Date.now(),0,!1)
u=A.dC(C.fYq(v.c,u))
w=this.c?new C.djH(v):null
return v.b7V(this.b,B.qb,D.eL,w,"Today","$"+u,D.eL)},
$S:1658}
C.djH.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.djL.prototype={
$2(d,e){var w=this.a
return w.b7V(this.b,B.k7,B.cb,w.w,"Balance","$"+A.dC(A.L7(w.c.a,new C.djG(w))),B.cl)},
$S:59}
C.djG.prototype={
$0(){return this.a.c.d},
$S:79}
C.djB.prototype={
$0(){this.a.a.cRC()
return null},
$S:0}
C.djC.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bvi(v,w),B.ax)},
$S:71}
C.djD.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bbe(v,!0,B.ay,D.oJ,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bbd(v,D.oJ,w)}return A.b3(w,w,w,v,B.ax)},
$S:71}
C.djE.prototype={
$1(d){return new A.T(Date.now(),0,!1)},
$S:659}
C.djF.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.T(Date.now(),0,!1)
w=r.a
v=w.a.cQo(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c7(new A.hb(A.a([u,s],x.U)),new C.djA(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1659}
C.djA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.djz(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.bbc(o.c,v,k,u,D.oJ,D.bnm,n),D.eWe))
v=A.I(B.c.j(0.1),B.q,1.2)
if(k)t=B.vW
else t=o.e?B.vP:D.bH0
t=A.X(t,k?D.oJ:B.b3,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dC(w.f&&w.d>0?w.d:o.f)}q=k?D.oJ:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.n(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.q,1)
l.push(A.p(n,A.x(A.a([t,B.am,s,B.au,w,B.O,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.oJ:B.oN,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kZ,n,n,n)],m),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a7(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:227}
C.djz.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.E(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.E(d,3)
t=B.o.E(d,2)
return A.ao(s,A.e1(A.de(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.n(40),s,new A.bV(B.A,0.5,B.x,s,0,A.a([D.oJ.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:225}
C.dk1.prototype={
$0(){},
$S:0}
C.dk2.prototype={
$0(){},
$S:0}
C.dk3.prototype={
$1(d){return d.x===B.dv},
$S:16}
C.djO.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.djN.prototype={
$0(){var w,v
A.eY()
w=this.a
v=this.b
w.m(new C.djM(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f9(null,x.H)}},
$S:0}
C.djM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.djZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.n(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.q,1)
return A.E(new A.D(B.jr,A.aB(v,A.df(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bd,new A.o(q,v,p,r,v,v,B.n),B.hB,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dk0(u,d),v,v,v,v,v,v,!1,B.a5),v),1)},
$S:1661}
C.dk0.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.dk_(w,this.b))},
$S:0}
C.dk_.prototype={
$0(){var w=""+this.b
this.a.d.saW(0,w)
return w},
$S:0}
C.djY.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.D(B.xN,A.B(A.a([v,B.b8,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1662}
C.djX.prototype={
$1(d){return this.a.m(new C.djW())},
$S:2}
C.djW.prototype={
$0(){},
$S:0}
C.djR.prototype={
$1(d){return this.a.aW0(d)&&!A.h55(d)},
$S:16}
C.djS.prototype={
$2(d,e){return e.y.aM(0,d.y)},
$S:72}
C.djT.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.djU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dT(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.djQ())
t.ma("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djQ.prototype={
$0(){},
$S:0}
C.djV.prototype={
$0(){var w=this.a
return w.m(new C.djP(w))},
$S:0}
C.djP.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fAN.prototype={
$2(d,e){return e.y.aM(0,d.y)},
$S:72}
C.fts.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.A(v,this.b)){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fLf.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.ftr.prototype={
$1(d){var w,v,u
if(!C.i4t(d,this.a))return!1
w=J.a4(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.am(new A.T(Date.now(),0,!1).bC(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fig.prototype={
$1(d){var w=this.a
if(B.o.E(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:73}
C.fJZ.prototype={
$0(){return $.h2y=null},
$S:11}
C.fK_.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fHU.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fHV.prototype={
$0(){var w,v=this.a
$.h2l.W(0,v)
w=C.u6(this.b,v)
if(w!=null)A.QL(A.a([A.a2(w,x.N,x.z)],x._),v)},
$S:0}
C.fMn.prototype={
$1(d){return new C.a_p(this.a,this.b,null)},
$S:z+56}
C.e9U.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e9X.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e9Y.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e9W(w))},
$S:2}
C.e9W.prototype={
$0(){return this.a.f=""},
$S:0}
C.e9Z.prototype={
$1(d){return this.a.aZG()},
$S:2}
C.ea_.prototype={
$0(){var w=this.a
return w.m(new C.e9V(w,this.b))},
$S:0}
C.e9V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fsC.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b6(d,1)},
$S:14}
C.fsB.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b6(d,1)},
$S:14}
C.fKf.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a2(d,x.N,x.z)
try{v=A.a2(v.a(d.ag()),x.N,x.z)
return v}catch(w){return A.U(x.N,x.z)}},
$S:13}
C.fKg.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fEa.prototype={
$1(d){return d.a!=="send_email"},
$S:315}
C.fJH.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.n(10),t=A.I(B.b_,B.q,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.hK,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eS,w,w,w,72)},
$S:661}
C.cey.prototype={
$1(d){return J.k(d)},
$S:17}
C.cez.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cex(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c2(7,0,!1,x.S)},
$S:662}
C.cex.prototype={
$1(d){var w
if(A.iK(d))w=d
else{w=A.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:398}
C.ceA.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cew(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c2(8,0,!1,x.S)},
$S:662}
C.cew.prototype={
$1(d){var w
if(A.iK(d))w=d
else{w=A.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:398}
C.ceC.prototype={
$1(d){return A.bp(d,!0,x.S)},
$S:663}
C.ceD.prototype={
$1(d){return A.bp(d,!0,x.S)},
$S:663}
C.cev.prototype={
$1(d){var w=this.a
if(B.o.E(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:73}
C.ceB.prototype={
$2(d,e){return d+e},
$S:74}
C.ceu.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.fuQ.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fuK.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.fuL.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.fuM.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.fuN.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.fuO.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.fuP.prototype={
$0(){return this.a.$1(D.ql)},
$S:0}
C.ffy.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.am(e,8),r=B.o.E(e,8),q=B.o.E(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Xc:D.bba
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bm,B.w],w)
v=n?B.aM:B.dr
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.q,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dE,4)],x.V),new A.bV(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aB(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ffx(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a5)},
$S:78}
C.ffx.prototype={
$0(){var w=this,v=w.a,u=v.cWi(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.ql:D.I4
w.f.$1(v)}},
$S:0}
C.fsM.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a7(u,u,A.im(!0,v,v,B.y,Q.aP8,new C.fsL(w.a,w.b,w.c,w.d,u),9,v,B.dT,B.ag,!1),v)},
$S:171}
C.fsL.prototype={
$2(d,e){var w=this,v=null,u=A.n(12),t=A.n(12),s=w.a,r=s.at[e],q=r==="X"?B.aO:B.av
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fsK(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fz,0,v,v,v,v,v,B.ah)},
$S:77}
C.fsK.prototype={
$0(){var w=this,v=w.a.cWj(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.ff2.prototype={
$1(d){return new A.D(B.jr,C.fHL(d,!1),null)},
$S:338}
C.ff3.prototype={
$1(d){return C.fHL(d,!1)},
$S:1666}
C.ff4.prototype={
$0(){var w=this,v=w.a
v.cGc(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.ff5.prototype={
$0(){var w=this
w.a.cGd(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fpW.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mL(v,B.bm,A.d(""+u,v,v,v,v,v,v,B.ck,v,v,v),B.dg,new C.fpV(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.q,-1),v)},
$S:1667}
C.fpV.prototype={
$0(){var w=this,v=w.a,u=w.b.av(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.frQ.prototype={
$1(d){return D.ddl[d]},
$S:82}
C.frR.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.av(6),s.av(6),s.av(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.foG.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.foH.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fg_.prototype={
$0(){var w=this,v=w.a.cLV(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.ffZ.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.mo
else w=u===1?B.dJ:B.rB
return new A.fM(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bD,B.q,1),v,v,v,B.a6),v,v,v,B.mv,v,v,v,v),v)},
$S:1668}
C.foT.prototype={
$1(d){var w=this
if(w.a.bbm(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.foU.prototype={
$0(){var w=this
if(w.a.bbm(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.ffs.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fzQ.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fzR.prototype={
$1(d){var w,v=J.a4(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:53}
C.eIc.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aKn.prototype
w.bun=w.Z
w.bum=w.q
w=C.aKo.prototype
w.bup=w.Z
w.buo=w.q
w=C.aKp.prototype
w.bur=w.Z
w.buq=w.q
w=C.aLl.prototype
w.bvp=w.Z
w.bvo=w.q
w=C.aKV.prototype
w.buY=w.q
w=C.aLu.prototype
w.bvy=w.q
w=C.aKq.prototype
w.bus=w.q
w=C.aLC.prototype
w.bvH=w.q
w=C.aKv.prototype
w.bux=w.q
w=C.aKL.prototype
w.buO=w.q
w=C.aMi.prototype
w.bwn=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aA9.prototype,"gbQI","bQJ",19)
v(q,"gaSo","aSp",1)
v(C.aA8.prototype,"gcwS","a24",1)
v(q=C.aAa.prototype,"gbWb","bWc",1)
v(q,"gbFW","bFX",1)
v(q=C.axl.prototype,"gcpS","cpT",1)
v(q,"gcee","Qd",0)
v(q,"gcAU","cAV",1)
v(q,"gcsY","n2",0)
w(q,"gciA","ciB",25)
w(q,"gcze","RX",33)
v(q=C.aCf.prototype,"gbOL","Xu",0)
v(q,"gc4c","YY",0)
v(q,"gc49","YX",0)
v(q,"gc4a","ad9",0)
v(q,"gc4b","P9",0)
v(C.azy.prototype,"gc4d","c4e",1)
u(C,"ibG","hHV",58)
t(C,"h5d",0,null,["$1","$0"],["hqh",function(){return C.hqh(null)}],3,0)
t(C,"bDc",0,null,["$1","$0"],["hqg",function(){return C.hqg(null)}],3,0)
v(C.N2.prototype,"gEq","cbr",1)
v(C.aD0.prototype,"gcqb","AM",0)
v(q=C.aDh.prototype,"gcey","Qf",0)
v(q,"gcjj","a0i",0)
v(q,"gc7Q","c7R",1)
v(q=C.aDt.prototype,"gc7V","ae6",0)
v(q,"gbzw","a8e",0)
v(q,"gcqq","a1g",0)
s(q,"gcbW","cbX",35)
v(C.aFr.prototype,"gbzY","a8g",1)
v(q=C.aFq.prototype,"gc7U","ae5",0)
v(q,"gcdw","af8",0)
v(q=C.aDv.prototype,"gbZU","abY",0)
v(q,"gbZW","Y8",0)
v(q,"gbZV","abZ",0)
v(q=C.aDu.prototype,"gbCj","bCk",1)
v(q,"gbCl","bCm",1)
v(C.aDw.prototype,"gbId","bIe",1)
v(C.aAu.prototype,"gc7X","c7Y",1)
v(q=C.aDT.prototype,"gaZA","c8c",1)
r(q,"gb_x",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["aeM","axI","b_z","b_y"],52,0,0)
r(q,"gcb9",0,4,null,["$4"],["cba"],53,0,0)
v(q,"gcdf","a_s",0)
v(q,"gce5","aff",0)
v(q,"gce1","afd",0)
v(q,"gc1V","acJ",0)
w(C.aBg.prototype,"gc0E","c0F",54)
w(q=C.aBi.prototype,"gcy6","cy7",55)
v(q,"gcwI","cwJ",1)
v(q,"gcEA","cEB",1)
v(C.aDG.prototype,"gc8y","aZG",1)
v(C.aEu.prototype,"gb_7","axv",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.ja,[C.ctb,C.ct8,C.ct9,C.cta,C.ct7,C.f3s,C.f3q,C.f3u,C.f3r,C.fmi,C.dbG,C.dbR,C.dbZ,C.dc_,C.dc1,C.dbU,C.dbS,C.dbT,C.dbV,C.dbW,C.dbM,C.dbN,C.dbL,C.dbP,C.dbQ,C.dbJ,C.dbI,C.dc3,C.dc6,C.dQ7,C.dQ6,C.dQ8,C.dQ5,C.dQ4,C.dbA,C.dbD,C.dbE,C.dbC,C.dbB,C.dds,C.ddt,C.ddu,C.dcI,C.dcJ,C.ddc,C.dcY,C.dcZ,C.dd_,C.dd0,C.dd1,C.dca,C.dcH,C.ddd,C.ddm,C.dda,C.dd9,C.dcF,C.dcG,C.ddi,C.ddj,C.dcc,C.dcd,C.dcR,C.dcS,C.dcT,C.dcQ,C.dd2,C.dd3,C.dd4,C.dd5,C.dd6,C.dd7,C.ddg,C.dcU,C.dcV,C.dcW,C.dcX,C.ddk,C.ddl,C.dce,C.dcf,C.dcg,C.dch,C.dde,C.ddf,C.dcP,C.dd8,C.dcN,C.ddn,C.ddo,C.ddp,C.dcK,C.dct,C.dcs,C.dcr,C.dcx,C.dcq,C.dco,C.dcj,C.dcm,C.dci,C.dcC,C.dcD,C.dck,C.dh0,C.cDK,C.cDA,C.cDB,C.cDU,C.cDR,C.cDS,C.cDT,C.cDM,C.cDL,C.cDC,C.cDN,C.cEc,C.cE8,C.cE7,C.cDI,C.cDJ,C.cDF,C.cDQ,C.cDY,C.cDZ,C.cE_,C.cE0,C.cE1,C.cE2,C.cE3,C.cEo,C.cEh,C.cEe,C.cEj,C.cEg,C.cEd,C.cDD,C.cEa,C.dxy,C.dxz,C.dxp,C.dxn,C.dxx,C.dxm,C.dxl,C.dxo,C.dxt,C.dxu,C.dxr,C.dxs,C.dxA,C.dxB,C.dxC,C.dxD,C.eY8,C.eY9,C.d6z,C.fAH,C.dDZ,C.dDR,C.dDT,C.dDX,C.dDS,C.dDU,C.dDV,C.c7D,C.fHJ,C.fHI,C.dxa,C.dx9,C.dxb,C.dx8,C.dX8,C.dX9,C.dXg,C.fQ9,C.fQa,C.c01,C.dQd,C.dQe,C.dQf,C.dQg,C.dQh,C.dQi,C.dQc,C.dQj,C.dQb,C.dQm,C.dQl,C.dQk,C.dXA,C.dXB,C.dXy,C.dXx,C.dXz,C.dXv,C.e09,C.e0a,C.e_T,C.e_V,C.e06,C.e07,C.e01,C.e0_,C.e05,C.e02,C.e_X,C.e_W,C.e0b,C.cMP,C.cMN,C.cMO,C.cMM,C.cMS,C.cMT,C.eT2,C.eT7,C.eT4,C.eT6,C.eT5,C.eSZ,C.eSY,C.eT0,C.eT_,C.e0w,C.e0B,C.e0x,C.e0y,C.e0A,C.e0G,C.e0H,C.e0I,C.e0J,C.e0K,C.e0L,C.e0M,C.e0N,C.e0F,C.e0O,C.e0E,C.e0D,C.e0C,C.e0p,C.e0q,C.e0h,C.e0i,C.e0j,C.e0l,C.cGw,C.dhV,C.dhX,C.dhW,C.e13,C.e0Y,C.e0Z,C.e10,C.e11,C.e12,C.e16,C.e15,C.e1c,C.e1b,C.e0U,C.e0T,C.e1d,C.e14,C.e0S,C.fQV,C.dfk,C.dfi,C.efE,C.eg2,C.eg3,C.eg4,C.eg5,C.eg7,C.eg8,C.efY,C.efF,C.eg1,C.efJ,C.efK,C.efS,C.efP,C.efQ,C.efR,C.efT,C.efU,C.efV,C.efX,C.efW,C.efL,C.efM,C.egh,C.ega,C.egi,C.eg9,C.egj,C.egf,C.egg,C.egb,C.efI,C.efH,C.efO,C.efN,C.djH,C.djG,C.djB,C.dk1,C.dk2,C.djO,C.djN,C.djM,C.dk0,C.dk_,C.djW,C.djT,C.djU,C.djQ,C.djV,C.djP,C.fJZ,C.fHV,C.e9U,C.e9X,C.e9W,C.ea_,C.e9V,C.fuK,C.fuL,C.fuM,C.fuN,C.fuO,C.fuP,C.ffx,C.fsK,C.ff4,C.ff5,C.fpV,C.frR,C.foH,C.fg_,C.foU,C.ffs,C.eIc])
u(A.i0,[C.ctc,C.f3t,C.fEu,C.fEm,C.fmf,C.fme,C.fmh,C.dc8,C.dc9,C.dbY,C.dbX,C.dc0,C.dbK,C.dbO,C.dc2,C.dQa,C.dbF,C.ddv,C.ddw,C.ddx,C.ddy,C.ddz,C.ddb,C.ddh,C.dcb,C.ddr,C.ddq,C.dcu,C.dcv,C.dcw,C.dcy,C.dcA,C.dh1,C.cEp,C.cDP,C.cDO,C.cE6,C.cE9,C.cE5,C.cDG,C.cDX,C.cDV,C.cEb,C.cDW,C.cEk,C.cEi,C.cEn,C.bZK,C.bZJ,C.bZM,C.bZL,C.dxw,C.dxv,C.dxq,C.dxE,C.dxF,C.fqt,C.frG,C.d6A,C.d6y,C.c_v,C.fAG,C.dE_,C.dDY,C.c7E,C.fsu,C.fHH,C.c9C,C.c9B,C.ca3,C.dX6,C.dX7,C.fD2,C.fCQ,C.fCP,C.foK,C.cah,C.cai,C.caj,C.cag,C.caf,C.fm_,C.fQ5,C.fQ6,C.fQ7,C.fQ8,C.fQ4,C.dXd,C.dXe,C.dXc,C.fQb,C.ddA,C.cbS,C.fkZ,C.dQn,C.dXw,C.caJ,C.caG,C.caI,C.caL,C.c37,C.c35,C.c3a,C.caS,C.caR,C.caQ,C.caP,C.caU,C.caW,C.e0f,C.e_U,C.e_S,C.e08,C.e00,C.e04,C.e03,C.e_Z,C.e0d,C.e0c,C.cMQ,C.cMR,C.eT3,C.eSX,C.eT1,C.caM,C.fEN,C.e0Q,C.e0z,C.e0s,C.e0t,C.e0u,C.e0v,C.e0P,C.caO,C.cGx,C.cGy,C.fkI,C.e0V,C.e0X,C.e1_,C.e17,C.e18,C.e19,C.e0R,C.fQW,C.dfe,C.dfh,C.ccM,C.ccZ,C.egk,C.egl,C.egm,C.eg6,C.efZ,C.eg_,C.eg0,C.egc,C.ege,C.djI,C.djJ,C.djE,C.djz,C.dk3,C.djZ,C.djY,C.djX,C.djR,C.fts,C.fLf,C.ftr,C.fig,C.fK_,C.fHU,C.fMn,C.e9Y,C.e9Z,C.fsC,C.fsB,C.fKf,C.fKg,C.fEa,C.fJH,C.cey,C.cez,C.cex,C.ceA,C.cew,C.ceC,C.ceD,C.cev,C.fuQ,C.ff2,C.ff3,C.fpW,C.frQ,C.foG,C.ffZ,C.foT,C.fzQ,C.fzR])
t(C.brp,A.iU)
u(A.ag,[C.Fh,C.al5,C.aD_,C.al4,C.al6,C.alW,C.aii,C.anu,C.a_5,C.a_6,C.Zd,C.anZ,C.ant,C.Nz,C.aAb,C.ap3,C.apI,C.Vj,C.Ps,C.a_T,C.a_S,C.Vk,C.aq1,C.aB3,C.aq4,C.ZC,C.aqC,C.aBf,C.aBh,C.a_p,C.arS])
u(A.ah,[C.aHY,C.aKo,C.aLl,C.aKn,C.aKp,C.bgz,C.axl,C.aCf,C.biZ,C.bj_,C.azy,C.bj5,C.aKV,C.aLu,C.aKq,C.aD0,C.aDh,C.aDt,C.baI,C.aFr,C.aFq,C.aDv,C.aDu,C.bgN,C.aLC,C.aKv,C.bxf,C.aKL,C.aBi,C.aDG,C.aMi])
u(A.ko,[C.f3v,C.fmg,C.dbH,C.dc7,C.dc5,C.dc4,C.dQ9,C.dcO,C.dcM,C.dcL,C.dcp,C.dcz,C.dcn,C.dcB,C.dcl,C.dcE,C.cE4,C.cDH,C.cEf,C.cEm,C.cEl,C.cDE,C.d6x,C.dDW,C.fsv,C.fsw,C.dXa,C.fEp,C.fQ3,C.dXf,C.dXi,C.dXh,C.ddB,C.cbT,C.caK,C.caH,C.c38,C.c36,C.caV,C.e0g,C.e_Y,C.e0e,C.eT9,C.eT8,C.e0r,C.e0k,C.e0m,C.e0o,C.e0n,C.e0W,C.e1a,C.dff,C.dfj,C.dfg,C.egd,C.efG,C.djK,C.djL,C.djC,C.djD,C.djF,C.djA,C.djS,C.fAN,C.ceB,C.ceu,C.ffy,C.fsM,C.fsL])
t(C.avz,C.Fh)
u(A.aD,[C.qM,C.adJ,C.N2,C.IH,C.ro,C.rp,C.lE,C.ir,C.ia,C.b8S,C.d3v,C.dhU,C.rv,C.Vl,C.NM,C.pV,C.b_a,C.p9,C.aqY])
t(C.aA9,C.aKo)
t(C.bjr,C.aLl)
t(C.aA8,C.aKn)
t(C.aAa,C.aKp)
u(A.md,[C.W5,C.aB4,C.aqP,C.IM,C.EE])
u(A.au,[C.a0t,C.brV,C.aew,C.Q0,C.a6B,C.Nr,C.apC,C.adk,C.adj,C.b0_,C.aB2,C.abR,C.b_w,C.abJ,C.aBg])
t(C.biX,C.aKV)
t(C.bjD,C.aLu)
t(C.bfh,C.aKq)
t(C.aDw,C.aLC)
t(C.aAu,C.aKv)
t(C.aDT,C.bxf)
t(C.bhv,C.aKL)
u(A.mP,[C.bbe,C.bbd,C.bbc,C.baD,C.bvi,C.bqf])
t(C.aEu,C.aMi)
w(C.aKn,C.N2)
w(C.aKo,C.N2)
w(C.aKp,C.N2)
w(C.aLl,C.N2)
w(C.aKV,A.eW)
w(C.aLu,A.c9)
w(C.aKq,A.c9)
w(C.aLC,A.c9)
w(C.aKv,A.eW)
w(C.aKL,A.eW)
v(C.bxf,A.eB)
w(C.aMi,A.c9)})()
A.k3(b.typeUniverse,JSON.parse('{"brp":{"iU":[]},"Fh":{"ag":[],"t":[]},"aHY":{"ah":["Fh<1,2>"]},"avz":{"Fh":["1","hK<1>"],"ag":[],"t":[],"Fh.T":"1","Fh.S":"hK<1>"},"al5":{"ag":[],"t":[]},"aD_":{"ag":[],"t":[]},"al4":{"ag":[],"t":[]},"al6":{"ag":[],"t":[]},"alW":{"ag":[],"t":[]},"aii":{"ag":[],"t":[]},"aA9":{"ah":["al5"]},"bjr":{"ah":["aD_"]},"aA8":{"ah":["al4"]},"aAa":{"ah":["al6"]},"bgz":{"ah":["alW"]},"axl":{"ah":["aii"]},"anu":{"ag":[],"t":[]},"a_5":{"ag":[],"t":[]},"a_6":{"ag":[],"t":[]},"aew":{"au":[],"t":[]},"Zd":{"ag":[],"t":[]},"aCf":{"ah":["anu"]},"a0t":{"au":[],"t":[]},"brV":{"au":[],"t":[]},"biZ":{"ah":["a_5"]},"bj_":{"ah":["a_6"]},"Q0":{"au":[],"t":[]},"azy":{"ah":["Zd"]},"anZ":{"ag":[],"t":[]},"bj5":{"ah":["anZ"]},"a6B":{"au":[],"t":[]},"ant":{"ag":[],"t":[]},"biX":{"ah":["ant"]},"Nr":{"au":[],"t":[]},"apC":{"au":[],"t":[]},"Nz":{"ag":[],"t":[]},"bjD":{"ah":["Nz"]},"adk":{"au":[],"t":[]},"adj":{"au":[],"t":[]},"aAb":{"ag":[],"t":[]},"bfh":{"ah":["aAb"]},"b0_":{"au":[],"t":[]},"ap3":{"ag":[],"t":[]},"aD0":{"ah":["ap3"]},"apI":{"ag":[],"t":[]},"aDh":{"ah":["apI"]},"Vj":{"ag":[],"t":[]},"Ps":{"ag":[],"t":[]},"a_T":{"ag":[],"t":[]},"a_S":{"ag":[],"t":[]},"aDt":{"ah":["Vj"]},"baI":{"ah":["Ps"]},"aFr":{"ah":["a_T"]},"aFq":{"ah":["a_S"]},"Vk":{"ag":[],"t":[]},"aDv":{"ah":["Vk"]},"aq1":{"ag":[],"t":[]},"abR":{"au":[],"t":[]},"abJ":{"au":[],"t":[]},"aB3":{"ag":[],"t":[]},"aDu":{"ah":["aq1"]},"aB2":{"au":[],"t":[]},"b_w":{"au":[],"t":[]},"bgN":{"ah":["aB3"]},"aq4":{"ag":[],"t":[]},"aDw":{"ah":["aq4"]},"ZC":{"ag":[],"t":[]},"aAu":{"ah":["ZC"]},"aqC":{"ag":[],"t":[]},"aBf":{"ag":[],"t":[]},"aBh":{"ag":[],"t":[]},"aDT":{"ah":["aqC"],"eB":[]},"aBg":{"au":[],"t":[]},"bhv":{"ah":["aBf"]},"bbe":{"aC":[]},"bbd":{"aC":[]},"bbc":{"aC":[]},"aBi":{"ah":["aBh"]},"baD":{"aC":[]},"bvi":{"aC":[]},"a_p":{"ag":[],"t":[]},"aDG":{"ah":["a_p"]},"bqf":{"aC":[]},"arS":{"ag":[],"t":[]},"aEu":{"ah":["arS"]}}'))
A.Kq(b.typeUniverse,JSON.parse('{"N2":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.ax
return{dw:w("lZ<w?>"),gS:w("oa"),o:w("d4"),g5:w("x9"),M:w("dD<m>"),k:w("T"),gv:w("le<ai<jc>>"),gh:w("le<m>"),gH:w("le<G>"),r:w("aA<~>"),dk:w("a0"),fw:w("O<oa>"),E:w("O<d4>"),V:w("O<ac>"),O:w("O<w>"),A:w("O<a0>"),R:w("O<ni>"),B:w("O<ai<G>>"),m:w("O<a6<m,m>>"),_:w("O<a6<m,@>>"),b:w("O<ro>"),x:w("O<rp>"),gi:w("O<jc>"),a:w("O<lE>"),Y:w("O<ia>"),v:w("O<ir>"),dA:w("O<IH>"),F:w("O<rv>"),Z:w("O<ku>"),g:w("O<hv>"),gK:w("O<+at,details,id(T,m,m)>"),C:w("O<cR>"),s:w("O<m>"),G:w("O<iU>"),eO:w("O<eu>"),d9:w("O<eZ>"),p:w("O<t>"),n:w("O<K>"),t:w("O<G>"),U:w("O<aC?>"),d4:w("O<m?>"),ck:w("ai<ro>"),e:w("ai<rp>"),ac:w("ai<jc>"),dZ:w("ai<lE>"),I:w("ai<ia>"),j:w("ai<@>"),L:w("ai<G>"),eq:w("a6<m,m>"),P:w("a6<m,@>"),f:w("a6<@,@>"),cl:w("cP<m,D>"),aS:w("M<a0,tl>"),dc:w("M<IM,bB>"),dv:w("M<m,m>"),bL:w("M<K,bB>"),a3:w("M<G,bB>"),gN:w("M<G,pJ>"),w:w("iE"),b1:w("ro"),Q:w("rp"),bP:w("lE"),i:w("ia"),u:w("ir"),gp:w("Vl"),J:w("NM"),D:w("pV"),an:w("ku"),c:w("cr"),K:w("aD"),d:w("jq<m>"),di:w("+outcome,snapshot(W5,a5Y?)"),ee:w("+after,before(K,K)"),et:w("+categories,error,message,replaceId(ai<ia>,m?,m?,m?)"),cz:w("F4"),bJ:w("dx<m>"),N:w("m"),e7:w("bq<K>"),W:w("cy<m>"),am:w("jN<G>"),cc:w("a_<m>"),aM:w("eb<d4>"),bG:w("eb<K>"),l:w("t"),gm:w("qM"),ec:w("adJ"),q:w("n2"),y:w("Q"),gR:w("K"),z:w("@"),S:w("G"),eG:w("d4?"),cJ:w("T?"),gw:w("ai<a6<m,@>>?"),bM:w("ai<@>?"),h:w("a6<m,@>?"),X:w("aD?"),gE:w("+code,qrPayload(m,m)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,m,m)?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZn=new A.bn(B.bG,B.ix,B.bG,B.ix)
D.eL=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aZS=new A.az(D.eL,1,B.q,-1)
D.aZU=new A.az(B.ad,2,B.q,-1)
D.aZX=new A.az(B.aV,2,B.q,-1)
D.aZZ=new A.az(B.cs,0.8,B.q,-1)
D.b_e=new A.az(B.aM,2,B.q,-1)
D.b_l=new A.az(B.f0,1.6,B.q,-1)
D.b0a=new A.aY(0,330,0,1/0)
D.b0g=new A.aY(0,176,0,1/0)
D.b0h=new A.aY(0,1/0,0,260)
D.b0z=new A.aY(90,1/0,0,1/0)
D.b3o=new A.ac(0,B.G,B.dr,B.J,4)
D.cVJ=w([D.b3o],x.V)
D.b0N=new A.o(B.c,null,null,null,D.cVJ,null,B.a6)
D.cPK=w([D.eL,B.b0],x.O)
D.c_V=new A.a9(B.a3,B.a8,B.x,D.cPK,null,null)
D.b10=new A.o(null,null,null,null,null,D.c_V,B.a6)
D.b15=new A.o(B.aZ,null,null,null,null,null,B.a6)
D.bdx=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.dab=w([T.adu,D.bdx],x.O)
D.bZY=new A.a9(B.b1,B.b5,B.x,D.dab,null,null)
D.b1m=new A.o(null,null,null,B.mf,null,D.bZY,B.n)
D.bkp=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.dlT=w([D.bkp,M.afD],x.O)
D.bZb=new A.a9(B.b1,B.b5,B.x,D.dlT,null,null)
D.b1N=new A.o(null,null,null,B.tb,null,D.bZb,B.n)
D.d68=w([B.aE,B.bE],x.O)
D.bZG=new A.a9(B.a3,B.a8,B.x,D.d68,null,null)
D.b1T=new A.o(null,null,null,null,null,D.bZG,B.a6)
D.f9t=new A.H(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsZ=new A.y("\ud83c\udf89",null,D.f9t,null,null,null,null,null,null,null,null,null)
D.b7h=new A.cp(B.A,null,null,D.fsZ,null)
D.b8I=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.acK=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.bba=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.bbe=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.oJ=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.tn=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.adT=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.bdc=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.WN=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.xp=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.beD=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.Xc=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.afl=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.biu=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.biB=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.afG=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.afV=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bjX=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.bk3=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bl1=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.XP=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bm2=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bmx=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.XY=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bnm=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.agY=new A.a3T(2,"active")
D.brD=new A.ba(42e5)
D.brG=new A.ba(53e4)
D.brI=new A.ba(58e4)
D.brM=new A.ba(82e4)
D.bsA=new A.R(0,30,0,30)
D.bsI=new A.R(0,4,0,8)
D.bsL=new A.R(0,8,12,8)
D.btn=new A.R(12,0,12,88)
D.btu=new A.R(12,11,12,10)
D.btR=new A.R(13,10,12,10)
D.btZ=new A.R(14,10,14,2)
D.bua=new A.R(14,14,10,14)
D.buF=new A.R(16,12,16,96)
D.buK=new A.R(16,14,16,8)
D.buO=new A.R(16,16,16,96)
D.buP=new A.R(16,18,16,16)
D.buT=new A.R(16,4,16,10)
D.bvO=new A.R(18,6,18,40)
D.bvQ=new A.R(18,8,18,130)
D.bw2=new A.R(20,10,20,20)
D.bwf=new A.R(20,18,20,18)
D.bwj=new A.R(20,20,20,22)
D.bwG=new A.R(22,22,22,16)
D.bxl=new A.R(2,0,2,10)
D.by4=new A.R(4,8,12,4)
D.byh=new A.R(6,1,6,1)
D.byj=new A.R(6,4,0,0)
D.bym=new A.R(6,6,12,4)
D.byI=new A.R(8,4,12,8)
D.fwq=new A.y("Activity",null,B.fT,null,null,null,null,null,null,null,null,null)
D.bAz=new A.bB(1,B.bg,D.fwq,null)
D.fEN=new A.y("Game Receipts",null,A3.rW,null,null,null,null,null,null,null,null,null)
D.fo2=new A.y("Your last 59 games \xb7 kept for 7 days",null,P.a8t,null,null,null,null,null,null,null,null,null)
D.cMb=w([D.fEN,D.fo2],x.p)
D.bos=new A.fn(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cMb,null)
D.bAC=new A.bB(1,B.bg,D.bos,null)
D.bEM=new A.a0(58607,"MaterialIcons",!1)
D.a02=new A.a0(62178,"MaterialIcons",!1)
D.bFC=new A.a0(62410,"MaterialIcons",!1)
D.bGN=new A.a0(63258,"MaterialIcons",!1)
D.bGT=new A.a0(63304,"MaterialIcons",!1)
D.bGU=new A.a0(63306,"MaterialIcons",!1)
D.bH0=new A.a0(63330,"MaterialIcons",!1)
D.anh=new A.a0(984777,"MaterialIcons",!1)
D.bJv=new A.ae(B.G9,13,B.ad,null,null,null)
D.bJD=new A.ae(B.jK,13,B.pP,null,null,null)
D.anq=new A.ae(B.lu,null,B.c,null,null,null)
D.bLa=new A.ae(B.BZ,34,B.aF,null,null,null)
D.bLI=new A.ae(B.Gd,19,B.c,null,null,null)
D.bFV=new A.a0(62804,"MaterialIcons",!1)
D.bLT=new A.ae(D.bFV,24,B.aM,null,null,null)
D.bMk=new A.ae(B.BI,28,B.bj,null,null,null)
D.bMP=new A.ae(B.amW,42,B.c,null,null,null)
D.bMY=new A.ae(B.a0R,30,B.c,null,null,null)
D.bNA=new A.ae(B.fQ,null,B.c,null,null,null)
D.bNV=new A.ae(B.jK,16,B.c,null,null,null)
D.bOw=new A.ae(B.rl,13,B.c,null,null,null)
D.bOF=new A.ae(B.lu,18,B.c,null,null,null)
D.bPb=new A.ae(B.vO,null,B.dJ,null,null,null)
D.bPR=new A.ae(B.oZ,28,B.c,null,null,null)
D.bQ6=new A.ae(B.nq,22,null,null,null,null)
D.bQs=new A.ae(B.rh,null,null,null,null,null)
D.bQE=new A.ae(B.iM,28,B.c,null,null,null)
D.bQG=new A.ae(B.cB,null,B.aS,null,null,null)
D.bQP=new A.ae(B.a_K,14,B.c,null,null,null)
D.bRn=new A.ae(B.NU,36,B.aK,null,null,null)
D.bRu=new A.ae(B.p_,16,B.c,null,null,null)
D.bRJ=new A.ae(B.e8,null,null,null,null,null)
D.bdU=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bSi=new A.ae(B.dY,9,D.bdU,null,null,null)
D.bHQ=new A.a0(983146,"MaterialIcons",!1)
D.bSz=new A.ae(D.bHQ,null,B.aM,null,null,null)
D.bT4=new A.ae(B.u0,28,D.eL,null,null,null)
D.bT9=new A.ae(B.u1,null,B.f0,null,null,null)
D.bTe=new A.ae(B.hT,20,D.eL,null,null,null)
D.bIb=new A.a0(983377,"MaterialIcons",!1)
D.bTo=new A.ae(D.bIb,64,B.c,null,null,null)
D.bTU=new A.ae(B.hc,24,B.c,null,null,null)
D.bUP=new A.e5(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bV_=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVe=new A.e5(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVf=new A.e5(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bbY=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.beY=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.beE=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.dau=w([D.bbY,D.beY,D.beE],x.O)
D.bX2=new A.a9(B.az,B.aC,B.x,D.dau,null,null)
D.dfF=w([B.bc,B.b0],x.O)
D.bXm=new A.a9(B.az,B.aC,B.x,D.dfF,null,null)
D.bdq=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bj6=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cWf=w([D.bdq,D.bj6],x.O)
D.bXt=new A.a9(B.az,B.aC,B.x,D.cWf,null,null)
D.dc5=w([B.bm,B.M,B.dX],x.O)
D.bXA=new A.a9(B.az,B.aC,B.x,D.dc5,null,null)
D.bXD=new A.a9(B.a3,B.a8,B.x,F.auD,null,null)
D.cVB=w([B.f0,B.cb],x.O)
D.ap6=new A.a9(B.a3,B.a8,B.x,D.cVB,null,null)
D.cVZ=w([B.f0,B.bE],x.O)
D.ap7=new A.a9(B.a3,B.a8,B.x,D.cVZ,null,null)
D.ayD=w([D.oJ,B.ay,B.c0],x.O)
D.bXU=new A.a9(B.az,B.aC,B.x,D.ayD,null,null)
D.bgu=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cTC=w([D.bgu,E.acX,B.M],x.O)
D.bXZ=new A.a9(B.az,B.aC,B.x,D.cTC,null,null)
D.aXK=new A.dc(-0.8,-1)
D.aXM=new A.dc(1.2,1)
D.cSN=w([B.c,B.ex,B.fW,B.c,B.f9,B.aO,B.mZ],x.O)
D.dbs=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bY0=new A.a9(D.aXK,D.aXM,B.x,D.cSN,D.dbs,null)
D.bj_=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bgJ=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.dat=w([D.bj_,D.bgJ],x.O)
D.bYt=new A.a9(B.a3,B.a8,B.x,D.dat,null,null)
D.bYy=new A.a9(B.az,B.aC,B.x,B.Qr,null,null)
D.d5c=w([E.XS,B.xr],x.O)
D.bYA=new A.a9(B.a3,B.a8,B.x,D.d5c,null,null)
D.d9i=w([B.fX,B.fy],x.O)
D.apc=new A.a9(B.a3,B.a8,B.x,D.d9i,null,null)
D.dfd=w([B.aZ,B.bS],x.O)
D.apd=new A.a9(B.a3,B.a8,B.x,D.dfd,null,null)
D.cDA=w([B.d5,B.fc],x.O)
D.bZd=new A.a9(B.az,B.aC,B.x,D.cDA,null,null)
D.cRO=w([B.c,B.b7],x.O)
D.bZn=new A.a9(B.a3,B.a8,B.x,D.cRO,null,null)
D.aeR=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.baV=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.d1W=w([D.aeR,B.jk,B.qT,B.ay,D.baV],x.O)
D.c0P=w([0,0.28,0.55,0.82,1],x.n)
D.bZo=new A.a9(B.az,B.aC,B.x,D.d1W,D.c0P,null)
D.bZy=new A.a9(B.a3,B.a8,B.x,B.R6,null,null)
D.bZz=new A.a9(B.a3,B.a8,B.x,F.ax3,null,null)
D.bZC=new A.a9(B.a3,B.a8,B.x,D.ayD,null,null)
D.cXm=w([B.bE,B.f0],x.O)
D.bZM=new A.a9(B.a3,B.a8,B.x,D.cXm,null,null)
D.dje=w([B.aE,B.bE,B.b7],x.O)
D.bZO=new A.a9(B.a3,B.a8,B.x,D.dje,null,null)
D.d5l=w([B.aF,B.bM,B.fl],x.O)
D.bZS=new A.a9(B.a3,B.a8,B.x,D.d5l,null,null)
D.diW=w([B.bm,B.aJ,B.bK,B.aL,B.aQ,B.cs,B.ak],x.O)
D.d05=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bZX=new A.a9(B.az,B.aC,B.x,D.diW,D.d05,null)
D.c_6=new A.a9(B.az,B.aC,B.x,B.a2c,null,null)
D.d5S=w([D.WN,B.dS],x.O)
D.c_g=new A.a9(B.a3,B.a8,B.x,D.d5S,null,null)
D.ddv=w([D.afG,D.adT,B.M],x.O)
D.c_p=new A.a9(B.az,B.aC,B.x,D.ddv,null,null)
D.blt=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cSk=w([B.f2,B.fX,D.blt],x.O)
D.c_X=new A.a9(B.az,B.aC,B.x,D.cSk,null,null)
D.cXT=w([D.oJ,B.ay],x.O)
D.c_Y=new A.a9(B.az,B.aC,B.x,D.cXT,null,null)
D.c0l=w([G.C2,B.oZ,B.jK,B.hF,B.kz,B.l4,B.l3,B.rp,B.mC,B.eT,B.lY,B.ym,B.Gl],x.A)
D.c3H=w([10,50,100,200],x.t)
D.cds=w([1,3,5,7],x.t)
D.cir=w([25,50,100,250],x.t)
D.bHL=new A.a0(983104,"MaterialIcons",!1)
D.cr1=w([B.oZ,B.lZ,B.nq,B.ls,B.hb,B.vW,D.bHL,B.a0N],x.A)
D.cwo=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cIt=w([0,0.22,0.5,0.78,1],x.n)
D.cMj=w([8,13,19],x.n)
D.a2x=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fvs=new A.y("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eiG=new A.jq("questions",48,D.fvs,null,x.d)
D.fli=new A.y("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eiL=new A.jq("edit",48,D.fli,null,x.d)
D.fDk=new A.y("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eiR=new A.jq("delete",48,D.fDk,null,x.d)
D.cMs=w([D.eiG,D.eiL,D.eiR],A.ax("O<pd<m>>"))
D.cW9=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cWo=w([B.bQ,B.f3],x.O)
D.a5j=new C.lE("text","",null,null)
D.cXx=w([D.a5j],x.a)
D.cYY=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eCL=new A.ae7(B.lX,"Home")
D.etO=new A.ae7(B.qb,"Growth")
D.eyf=new A.ae7(B.jK,"Wallet")
D.d0k=w([D.eCL,D.etO,D.eyf],A.ax("O<+icon,label(a0,m)>"))
D.d0K=w([4,0,2,6,8,1,3,5,7],x.t)
D.d0T=w([B.c,B.bL,B.cs],x.O)
D.dJ5=new C.rv("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dJ8=new C.rv("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dJ6=new C.rv("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dJ0=new C.rv("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dJ1=new C.rv("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dJ9=new C.rv("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a30=w([D.dJ5,D.dJ8,D.dJ6,D.dJ0,D.dJ1,D.dJ9],x.F)
D.a35=w([B.av,B.bc,B.d_,B.aF],x.O)
D.be4=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.d5Y=w([B.Wn,D.be4,B.qT,B.i4,B.jk],x.O)
D.a3c=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.QA=w(["checkers_deluxe","tic_tac_go"],x.s)
D.c0o=w([0,1,2],x.t)
D.crf=w([3,4,5],x.t)
D.cE9=w([6,7,8],x.t)
D.c0q=w([0,3,6],x.t)
D.cdx=w([1,4,7],x.t)
D.ckX=w([2,5,8],x.t)
D.c0u=w([0,4,8],x.t)
D.ckU=w([2,4,6],x.t)
D.d8m=w([D.c0o,D.crf,D.cE9,D.c0q,D.cdx,D.ckX,D.c0u,D.ckU],x.B)
D.aGD=new C.IM(0,"abab")
D.dIZ=new C.IM(1,"aaaBbb")
D.aGE=new C.IM(2,"aabb")
D.d9m=w([D.aGD,D.dIZ,D.aGE],A.ax("O<IM>"))
D.d9C=w([],x.a)
D.axQ=w([],x.v)
D.ddl=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.QW=w([1,2,3,-1,-2],x.t)
D.dlG=w([B.j0,B.aE],x.O)
D.h57=new C.qM("dice","Dice Roll","Roll for cash & prizes!",B.my,D.dlG)
D.h54=new C.qM("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.rj,B.awA)
D.dg0=w([B.cS,B.bj],x.O)
D.h52=new C.qM("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a0C,D.dg0)
D.dl6=w([B.dP,B.n2],x.O)
D.h58=new C.qM("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a0N,D.dl6)
D.cdc=w([B.k_,B.pN],x.O)
D.h55=new C.qM("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a0n,D.cdc)
D.ddk=w([M.lm,D.Xc],x.O)
D.h53=new C.qM("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Go,D.ddk)
D.h56=new C.qM("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cB,Ak.nt)
D.dfc=w([D.h57,D.h54,D.h52,D.h58,D.h55,D.h53,D.h56],A.ax("O<qM>"))
D.dgA=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bih=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bi9=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.agn=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.dhm=w([D.bih,D.bi9,D.agn],x.O)
D.bkk=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.dho=w([B.acW,D.bkk,D.agn],x.O)
D.dhZ=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.ayY=w([D.oJ,B.c,D.eL,B.bU,B.b3,B.ay],x.O)
D.dJ3=new C.rv("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dJ2=new C.rv("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dJ_=new C.rv("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dJ7=new C.rv("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dJa=new C.rv("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dJ4=new C.rv("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a3U=w([D.dJ3,D.dJ2,D.dJ_,D.dJ7,D.dJa,D.dJ4],x.F)
D.dll=w([B.cb,B.pN],x.O)
D.e79={checkers_deluxe:0,tic_tac_go:1}
D.aEA=new A.bk(D.e79,["Checkers Deluxe","Tic Tac Go"],A.ax("bk<m,m>"))
D.e69={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aEL=new A.bk(D.e69,[1,2,3,4,5,6,7],A.ax("bk<m,G>"))
D.dC1=new C.a6B(null)
D.dFo=new C.lE("signature","NGMY Support Team",null,null)
D.dFp=new C.lE("divider","",null,null)
D.RU=new C.Vl(!1,!1,!1,!1)
D.RW=new C.NM(!1,!1,!1,!1)
D.dGs=new C.NM(!0,!0,!1,!1)
D.CV=new C.aqP(0,"swahili")
D.aGC=new C.aqP(1,"english")
D.CW=new C.aqP(2,"mix")
D.d7O=w([B.fA,B.ij,B.d6],x.O)
D.bGB=new A.a0(63118,"MaterialIcons",!1)
D.dKb=new C.p9(D.d7O,B.fK,B.aF,"BACKGAMMON","\ud83c\udfb2",D.bGB)
D.bIA=new A.a0(983637,"MaterialIcons",!1)
D.dKc=new C.p9(Ah.az7,B.bc,B.eC,"EURO WHEEL","\ud83c\udfa1",D.bIA)
D.dgV=w([B.M,B.aJ,B.br],x.O)
D.dKd=new C.p9(D.dgV,B.aQ,B.ak,"ROYALE","\u265f\ufe0f",F.a0n)
D.cVE=w([B.d5,B.bj,B.dN],x.O)
D.dKe=new C.p9(D.cVE,B.av,B.d_,"CONNECT 4","\ud83d\udd34",B.a0Z)
D.dbJ=w([B.dy,B.fc,B.pN],x.O)
D.dKf=new C.p9(D.dbJ,B.vi,B.cb,"PUNTO BANCO","\ud83d\udc8e",B.lZ)
D.cDC=w([B.nV,B.ig,B.lP],x.O)
D.dKg=new C.p9(D.cDC,B.jd,B.k0,"DOMINOES","\ud83c\udc53",B.amY)
D.dhz=w([B.xx,B.ts,B.hk],x.O)
D.dKh=new C.p9(D.dhz,B.B_,B.h4,"WAR","\u2694\ufe0f",N.a0l)
D.dKi=new C.p9(B.az2,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.my)
D.cXn=w([B.jg,B.aE,B.dP],x.O)
D.dKj=new C.p9(D.cXn,B.dR,B.f0,"JACKPOT","\ud83c\udfb0",B.my)
D.daM=w([B.ks,B.lO,B.bE],x.O)
D.dKk=new C.p9(D.daM,B.pB,B.bU,"LIVE BINGO","\ud83c\udfb1",B.yg)
D.cPI=w([B.ij,B.dS,B.aF],x.O)
D.bG0=new A.a0(62865,"MaterialIcons",!1)
D.dKl=new C.p9(D.cPI,B.tx,B.aM,"BIG SPIN","\ud83c\udfa1",D.bG0)
D.dKm=new C.p9(B.a3R,B.aL,B.bc,"HOLD'EM","\u2660\ufe0f",B.jK)
D.dhY=w([B.f2,B.fy,B.b0],x.O)
D.bF6=new A.a0(61234,"MaterialIcons",!1)
D.dKn=new C.p9(D.dhY,B.lQ,B.aV,"CRAPS","\ud83c\udfb2",D.bF6)
D.cUV=w([B.f3,B.iW,B.bQ],x.O)
D.dKo=new C.p9(D.cUV,B.bM,B.b7,"PLINKO","\ud83d\udc8e",Al.NV)
D.bIl=new A.a0(983492,"MaterialIcons",!1)
D.dKp=new C.p9(B.a3R,B.et,B.bc,"SNOOKER","\ud83c\udfb1",D.bIl)
D.dfA=w([B.f2,B.fy,B.aV],x.O)
D.dKq=new C.p9(D.dfA,B.tt,B.bv,"PROFIT LAB","\ud83d\udcb0",B.hT)
D.dfU=w([B.dX,B.ew,B.bc],x.O)
D.bGZ=new A.a0(63324,"MaterialIcons",!1)
D.dKr=new C.p9(D.dfU,B.vq,B.aZ,"KLONDIKE","\ud83c\udccf",D.bGZ)
D.d8t=w([B.db,B.bm,B.M],x.O)
D.dKs=new C.p9(D.d8t,B.aM,B.aJ,"VEGAS TABLE","\ud83c\udccf",A2.GD)
D.qk=new C.EE(0,"continueGame")
D.ql=new C.EE(1,"youWin")
D.I4=new C.EE(2,"youLose")
D.S4=new C.EE(3,"draw")
D.aGR=new C.W5(0,"found")
D.e2f=new C.W5(1,"foundLive")
D.a5z=new C.W5(2,"notFound")
D.aGS=new C.W5(3,"wrongAccount")
D.e9G=new A.v(4,12)
D.ecA=new A.D(B.xO,B.tf,null)
D.bxJ=new A.R(4,0,0,3)
D.f6R=new A.H(!0,B.aK,null,null,null,null,10,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHQ=new A.y("NGMY Helper",null,D.f6R,null,null,null,null,null,null,null,null,null)
D.ecQ=new A.D(D.bxJ,D.fHQ,null)
D.bGR=new A.a0(63284,"MaterialIcons",!1)
D.bM7=new A.ae(D.bGR,18,B.oL,null,null,null)
D.fbr=new A.H(!0,B.oL,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new A.y("Continue",null,D.fbr,null,null,null,null,null,null,null,null,null)
D.da5=w([D.bM7,B.bp,D.fpd],x.p)
D.eS6=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.da5,null)
D.ecT=new A.D(B.i7,D.eS6,null)
D.ed5=new A.D(B.bR,B.tf,null)
D.bhR=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.d6z=w([B.fX,B.fy,B.cT,D.bhR],x.O)
D.c__=new A.a9(B.az,B.aC,B.x,D.d6z,B.Cl,null)
D.b1W=new A.o(null,null,null,null,null,D.c__,B.n)
D.bpE=new A.kS(D.b1W,B.bf,null,null)
D.ej5=new A.cL(0,0,0,0,null,null,D.bpE,null)
D.bNR=new A.ae(B.vN,11,B.c,null,null,null)
D.ej9=new A.cL(10,12,null,null,null,null,D.bNR,null)
D.cIk=w([B.hm,B.dX,B.lk],x.O)
D.ejK=new A.bV(B.Kf,1.1,B.x,null,0,D.cIk,null,null)
D.bjk=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.bdI=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.bfw=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.d4g=w([D.bjk,D.bdI,D.bfw],x.O)
D.ejR=new A.bV(B.aax,1.05,B.x,null,0,D.d4g,null,null)
D.ekf=new A.bV(B.A,0.5,B.x,null,0,Y.a2M,null,null)
D.eQ9=new A.a8(-18,0,18,1)
D.eQG=new A.a8(-3,-5,3,5)
D.bMy=new A.ae(B.e8,16,D.eL,null,null,null)
D.aRM=new A.H(!0,D.eL,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFs=new A.y("Screenshot added \xb7 tap to change",null,D.aRM,null,null,null,null,null,null,null,null,null)
D.cSQ=w([D.bMy,B.bp,D.fFs],x.p)
D.eRv=new A.ci(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.cSQ,null)
D.bQo=new A.ae(B.k8,15,D.eL,null,null,null)
D.fDe=new A.y("Refresh",null,D.aRM,null,null,null,null,null,null,null,null,null)
D.cV5=w([D.bQo,B.dc,D.fDe],x.p)
D.eRx=new A.ci(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.cV5,null)
D.e6B={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eTo=new A.dD(D.e6B,3,x.M)
D.e6l={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eTy=new A.dD(D.e6l,36,x.M)
D.e6o={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eTK=new A.dD(D.e6o,6,x.M)
D.e7T={memory:0,typing:1,scramble:2,pattern:3}
D.mN=new A.dD(D.e7T,4,x.M)
D.eWe=new A.ar(276,276)
D.eWX=new A.a7(13,null,null,null)
D.b7Z=new A.fk(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eX8=new A.a7(26,26,D.b7Z,null)
D.eXT=new A.a7(null,7,null,null)
D.eY1=new A.hQ(8,0,0,1,null)
D.fGB=new A.y("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aPj=new A.b1(D.fGB,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fkr=new A.y("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.f_Z=new A.b1(D.fkr,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.flu=new A.y("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.f04=new A.b1(D.flu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fDp=new A.y("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.f0I=new A.b1(D.fDp,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.biD=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.fam=new A.H(!0,D.biD,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new A.eu("$",null,null,B.cP,null,null,null,null,null,null,D.fam)
D.f4a=new A.H(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4t=new A.H(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4z=new A.H(!0,B.bm,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4X=new A.H(!0,B.M,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f57=new A.H(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5f=new A.H(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new A.H(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new A.H(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6I=new A.H(!0,D.eL,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6K=new A.H(!0,B.bM,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7t=new A.H(!0,E.AW,null,null,null,null,13,B.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQy=new A.H(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Y=new A.H(!0,B.bM,null,null,null,null,11.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9g=new A.H(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.f9z=new A.H(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faC=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faR=new A.H(!0,B.c,null,null,null,null,14,B.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb1=new A.H(!0,B.aZ,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new A.H(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.fbz=new A.H(!0,B.iO,null,null,null,null,10.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bcj=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.fbN=new A.H(!0,D.bcj,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fde=new A.H(!0,B.av,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdA=new A.H(!0,D.aeR,null,null,null,null,9,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRd=new A.H(!0,E.AW,null,null,null,null,11,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdX=new A.H(!0,B.ew,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdY=new A.H(!0,B.br,null,null,null,null,7,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fec=new A.H(!0,E.AW,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wD=new A.H(!0,B.c,null,null,null,null,13,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bgk=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.fep=new A.H(!0,D.bgk,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feY=new A.H(!0,B.Rz,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffX=new A.H(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg2=new A.H(!0,B.j2,null,null,null,null,11,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg6=new A.H(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRu=new A.H(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgy=new A.H(!0,B.M,null,null,null,null,10,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgC=new A.H(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.H(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new A.H(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new A.H(!0,B.aZ,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new A.H(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new A.H(!0,B.M,null,null,null,null,11,B.P,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new A.y("Value per pair",null,B.hJ,null,null,null,null,null,null,null,null,null)
D.fjH=new A.y("Restore now",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fkd=new A.y("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aR_=new A.H(!0,B.cX,null,null,null,null,12,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkm=new A.y("AVAILABLE PLANS",null,D.aR_,null,null,null,null,null,null,null,null,null)
D.fkp=new A.y("I understand",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fkV=new A.y("Go Back",null,B.cD,null,null,null,null,null,null,null,null,null)
D.f7k=new A.H(!0,B.br,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flC=new A.y("PLAN VALUE",null,D.f7k,null,null,null,null,null,null,null,null,null)
D.flE=new A.y("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fm_=new A.y("Deposit",null,B.Uf,null,null,null,null,null,null,null,null,null)
D.fgR=new A.H(!0,B.dR,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmZ=new A.y("JACKPOT SLOTS",null,D.fgR,null,null,null,null,null,null,null,null,null)
D.fnh=new A.y("Restore",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f7n=new A.H(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new A.y("YOUR NUMBER",null,D.f7n,null,null,null,null,null,null,null,null,null)
D.fnA=new A.y("SPIN REELS",null,F.a8o,null,null,null,null,null,null,null,null,null)
D.fo1=new A.y("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.foz=new A.y("Perfect Score Profit",null,B.hJ,null,null,null,null,null,null,null,null,null)
D.fpb=new A.y("Join room",null,B.ki,null,null,null,null,null,null,null,null,null)
D.frg=new A.y("Add payment screenshot",null,B.jb,null,null,null,null,null,null,null,null,null)
D.frv=new A.y("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new A.H(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frX=new A.y("INVITE A PLAYER",null,D.fg8,null,null,null,null,null,null,null,null,null)
D.ffl=new A.H(!0,B.Wn,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new A.y("NGMY GOLD LEADER",null,D.ffl,null,null,null,null,null,null,null,null,null)
D.fsT=new A.y("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fth=new A.y("Invest & Play",null,B.ov,null,null,null,null,null,null,null,null,null)
D.aQU=new A.H(!0,D.xp,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.y("VALID THRU",null,D.aQU,null,null,null,null,null,null,null,null,null)
D.aRw=new A.H(!0,B.aA,null,null,null,null,11,B.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new A.y("DEALER",null,D.aRw,null,null,null,null,null,null,null,null,null)
D.ftX=new A.y("CARDHOLDER",null,D.aQU,null,null,null,null,null,null,null,null,null)
D.feR=new A.H(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.y("NGMY PLATINUM",null,D.feR,null,null,null,null,null,null,null,null,null)
D.fhZ=new A.H(!0,B.pP,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.y("EARNED SO FAR",null,D.fhZ,null,null,null,null,null,null,null,null,null)
D.fvV=new A.y("VS",null,B.aQO,null,null,null,null,null,null,null,null,null)
D.fwk=new A.y("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fwH=new A.y("One day left",null,B.a8d,null,B.L,null,null,null,null,null,null,null)
D.fx2=new A.y("Keep typing \u2014 mistakes are counted in your payout",null,B.Dz,null,null,null,null,null,null,null,null,null)
D.fx3=new A.y("Multiplayer invite",null,B.ki,null,null,null,null,null,null,null,null,null)
D.fxe=new A.y("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new A.H(!0,B.Rz,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxk=new A.y("\ud83d\udcb0 Partial Payout System",null,D.f5V,null,null,null,null,null,null,null,null,null)
D.fxv=new A.y("Browse Topics",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f4U=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxK=new A.y("Investment Required",null,D.f4U,null,B.L,null,null,null,null,null,null,null)
D.f4q=new A.H(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fze=new A.y("Network Status",null,D.f4q,null,null,null,null,null,null,null,null,null)
D.fzN=new A.y("Their account email",null,G.a8a,null,null,null,null,null,null,null,null,null)
D.fA6=new A.y("Verification code",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fA7=new A.y("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fAn=new A.y("ACTIVE ASSET",null,D.aR_,null,null,null,null,null,null,null,null,null)
D.fAK=new A.y("Scan QR",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fAP=new A.y("Check word",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fBe=new A.y("YOUR HAND",null,D.aRw,null,null,null,null,null,null,null,null,null)
D.fBO=new A.y("NGMY Music Studio",null,B.kj,null,null,null,null,null,null,null,null,null)
D.fBR=new A.y("I sent it \u2014 submit deposit",null,B.ov,null,null,null,null,null,null,null,null,null)
D.fCD=new A.y("Back",null,B.Dy,null,null,null,null,null,null,null,null,null)
D.fiT=new A.H(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCL=new A.y("DEAL / PLAY ROUND",null,D.fiT,null,null,null,null,null,null,null,null,null)
D.fCY=new A.y("Got it \u2014 keep chatting",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fD7=new A.y("3 Messages Left",null,B.aRk,null,null,null,null,null,null,null,null,null)
D.fDE=new A.y("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fDN=new A.y("Copy",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fE9=new A.y("How many games?",null,G.a8a,null,null,null,null,null,null,null,null,null)
D.fej=new A.H(!0,B.aA,null,null,null,null,null,B.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new A.y("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fej,null,B.L,null,null,null,null,null,null,null)
D.fFU=new A.y("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new A.y("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fji=new A.H(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHI=new A.y("NGMY  WALLET",null,D.fji,null,null,null,null,null,null,null,null,null)
D.fHJ=new A.y("Select Your Bet",null,B.hw,null,null,null,null,null,null,null,null,null)
D.h1F=new A.cy("history",x.W)
D.h1K=new A.cy("ngmy_local_home",x.W)
D.h1L=new A.cy("ngmy_local_invest",x.W)
D.h1M=new A.cy("ngmy_local_wallet",x.W)
D.h4Q=new C.Zd(null)
D.aVY=new C.aB4(0,"grid")
D.aVZ=new C.aB4(1,"questions")
D.h6g=new C.aB4(2,"answer")
D.h7u=new C.a_6(null)})();(function staticFields(){$.fY2=A.aX(x.N)
$.hn2=A.U(x.N,x.k)
$.h2y=null
$.h2l=A.U(x.N,A.ax("wl"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iku","bE1",()=>C.i2q())
w($,"ikg","hvc",()=>{var v=null,u=A.fU(v,v,v,v,D.f3V,B.a4,B.c4,v,B.dM,B.c3)
u.el()
return u})})()};
(a=>{a["hUvQST+7FOzZkIsmXuzqrLUmWtI="]=a.current})($__dart_deferred_initializers__);