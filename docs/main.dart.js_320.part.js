((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,K,A1,L,P,A2,E,M,A3,Q,A4,R,N,A5,S,A6,T,A7,U,A8,A9,Aa,Ab,Ac,Ad,V,G,W,Ae,C={
hpC(d,e,f){var w=null,v=f.k("Gw<0>"),u=new B.Gw(w,w,w,w,v)
$.vN()
u.d=new C.czi(new B.vj(),e,u,f,d)
return new B.i0(u,v.k("i0<1>"))},
czi:function czi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czj:function czj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czf:function czf(d){this.a=d},
czg:function czg(d,e){this.a=d
this.b=e},
czh:function czh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cze:function cze(d,e,f){this.a=d
this.b=e
this.c=f},
btu:function btu(d){this.a=d},
hpB(d,e,f,g){return new C.awS(d,e,f,null,g.k("awS<0>"))},
FK:function FK(){},
aJr:function aJr(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fa7:function fa7(d){this.a=d},
fa6:function fa6(d,e){this.a=d
this.b=e},
fa9:function fa9(d){this.a=d},
fa4:function fa4(d,e,f){this.a=d
this.b=e
this.c=f},
fa8:function fa8(d){this.a=d},
fa5:function fa5(d){this.a=d},
awS:function awS(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
igk(d){var w=A.a.i(d)
while(A.a.a0(w,"$"))w=A.a.i(A.a.b3(w,1))
return w},
hAb(d){var w=C.igk(d)
if(w.length===0)return""
return"$"+w},
fIZ(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fIZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.V(Date.now(),0,!1).bS(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbr())o=o===t.gbr()&&p.b<t.gcE()
else o=!0
if(o){w=4
break}if(q.x!==A.cs){w=4
break}if(q.d!==A.fT){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.cV(m,"game payout:",0))if(!B.cV(m,"game partial:",0)){if(!B.cV(m,"multiplayer payout:",0))o=B.cV(m,"dice",0)&&q.e===A.fn
else o=l
l=o}if(!l){w=4
break}if(B.cV(m,"game payout:",0))k=A.a.i(A.a.b3(n,A.a.cp(m,"game payout:")+12))
else if(B.cV(m,"game partial:",0)){k=A.a.i(A.a.b3(n,A.a.cp(m,"game partial:")+13))
j=A.a.cp(k,"(")
if(j>0)k=A.a.i(A.a.au(k,0,j))}else if(B.cV(m,"multiplayer payout:",0)){k=A.a.i(A.a.b3(n,A.a.cp(m,"multiplayer payout:")+19))
j=A.a.cp(k,"(")
if(j>0)k=A.a.i(A.a.au(k,0,j))}else k=B.cV(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.v2(q.c,p,n,d,o,null,q.a,!0),$async$fIZ)
case 6:case 4:e.length===s||(0,B.K)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fIZ,v)},
il_(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ihn(d,e,f){return A.d.b_(e,new C.fMH(f,A.a.i(d.toLowerCase())))},
fMy(d){var w
C.hlR(d)
w=d.c8
return B.bp(new B.N(w,new C.fMz(),B.T(w).k("N<1,@>")),!0,x.N)},
i6K(d,e,f){var w,v,u,t,s,r,q=null,p=A.bY,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aW.toString
u=$.ep().giE().b
if(u.a===0)t=1
else{new B.b9(u,B.a6(u).k("b9<2>")).gI(0)
u=$.lk()
s=u.d
t=s==null?u.gho():s}w=A.k.cO(f*t)
v=new C.ftw(f)
if(J.d3(n,"data:image"))try{u=B.fU(A.cF.aP(A.d.gak(J.lH(n,","))),A.A,w,new C.ftt(v),A.h9,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d3(n,"supabase://"))return new B.l4(B.a2g(n),new C.ftu(f,e,p,w,v),q,q,x.gh)
return B.ky(n,A.A,w,new C.ftv(v),A.h9,p,!0,e,q,q,f)},
hal(d,e){return new B.a4(e,e,B.hW(C.i6K(d,e,e),A.ap),null)},
hZP(){var w,v,u=B.a([],x._),t=x.N,s=B.C(D.dph,x.gm)
for(w=0;w<36;++w){v=A.Df[w]
s.push(new C.r6(v.a,v.b,v.c,v.e,v.f))}return new C.aBE(u,B.U(t,t),s)},
fMH:function fMH(d,e){this.a=d
this.b=e},
fMz:function fMz(){},
ftw:function ftw(d){this.a=d},
ftt:function ftt(d){this.a=d},
ftu:function ftu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fts:function fts(d){this.a=d},
ftv:function ftv(d){this.a=d},
am2:function am2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
r6:function r6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aBE:function aBE(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dix:function dix(d,e){this.a=d
this.b=e},
diI:function diI(d,e){this.a=d
this.b=e},
dj_:function dj_(){},
dj0:function dj0(d){this.a=d},
diQ:function diQ(d,e){this.a=d
this.b=e},
diP:function diP(){},
diR:function diR(d){this.a=d},
diO:function diO(){},
diT:function diT(d){this.a=d},
diS:function diS(){},
diL:function diL(d){this.a=d},
diJ:function diJ(d){this.a=d},
diK:function diK(d){this.a=d},
diM:function diM(d){this.a=d},
diN:function diN(d){this.a=d},
diD:function diD(d,e){this.a=d
this.b=e},
diE:function diE(d,e){this.a=d
this.b=e},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
diF:function diF(d){this.a=d},
diG:function diG(d){this.a=d},
diH:function diH(d,e,f){this.a=d
this.b=e
this.c=f},
diA:function diA(d,e){this.a=d
this.b=e},
diz:function diz(d,e){this.a=d
this.b=e},
diy:function diy(d,e){this.a=d
this.b=e},
diZ:function diZ(d){this.a=d},
diX:function diX(d,e,f){this.a=d
this.b=e
this.c=f},
diW:function diW(d,e,f){this.a=d
this.b=e
this.c=f},
diV:function diV(d,e){this.a=d
this.b=e},
diU:function diU(){},
diY:function diY(d){this.a=d},
aEt:function aEt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
blo:function blo(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dWC:function dWC(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWD:function dWD(d){this.a=d},
dWA:function dWA(){},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWz:function dWz(d){this.a=d},
dWF:function dWF(d){this.a=d},
am1:function am1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBD:function aBD(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dir:function dir(d){this.a=d},
diu:function diu(d){this.a=d},
div:function div(d){this.a=d},
diw:function diw(d){this.a=d},
dit:function dit(d,e){this.a=d
this.b=e},
dis:function dis(d,e){this.a=d
this.b=e},
am3:function am3(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBF:function aBF(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.a_=_.b8=_.bk=_.y2=_.y1=0
_.aC=_.aM=_.aH=_.aB=$
_.bM=_.be=_.b4=_.b5=null
_.aL=!1
_.bG=_.bj=null
_.c8=!1
_.cl=_.cL=""
_.c=_.a=_.bD=null},
dkj:function dkj(d,e){this.a=d
this.b=e},
dkm:function dkm(d){this.a=d},
dkn:function dkn(d){this.a=d},
dko:function dko(d){this.a=d},
dkp:function dkp(d){this.a=d},
dkq:function dkq(d){this.a=d},
dkk:function dkk(d){this.a=d},
dkl:function dkl(d){this.a=d},
djz:function djz(d,e){this.a=d
this.b=e},
djA:function djA(d,e){this.a=d
this.b=e},
dk2:function dk2(d){this.a=d},
dk3:function dk3(){},
djP:function djP(d,e,f){this.a=d
this.b=e
this.c=f},
djQ:function djQ(d){this.a=d},
djR:function djR(d,e,f){this.a=d
this.b=e
this.c=f},
djS:function djS(d,e){this.a=d
this.b=e},
djT:function djT(){},
dj1:function dj1(d){this.a=d},
djy:function djy(d,e){this.a=d
this.b=e},
dk4:function dk4(){},
dkd:function dkd(){},
dk1:function dk1(d){this.a=d},
dk0:function dk0(d){this.a=d},
djw:function djw(d){this.a=d},
djx:function djx(){},
dk8:function dk8(){},
dk9:function dk9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dka:function dka(d,e,f){this.a=d
this.b=e
this.c=f},
dj2:function dj2(){},
dj3:function dj3(d){this.a=d},
dj4:function dj4(){},
djI:function djI(d,e){this.a=d
this.b=e},
djJ:function djJ(d,e,f){this.a=d
this.b=e
this.c=f},
djK:function djK(d){this.a=d},
djH:function djH(d){this.a=d},
djU:function djU(d){this.a=d},
djV:function djV(){},
djW:function djW(d){this.a=d},
djX:function djX(){},
djY:function djY(d){this.a=d},
djZ:function djZ(){},
dk7:function dk7(d,e,f){this.a=d
this.b=e
this.c=f},
djL:function djL(d){this.a=d},
djM:function djM(d,e){this.a=d
this.b=e},
djN:function djN(d){this.a=d},
djO:function djO(d){this.a=d},
dkb:function dkb(d){this.a=d},
dkc:function dkc(d){this.a=d},
dj5:function dj5(d){this.a=d},
dj6:function dj6(d,e){this.a=d
this.b=e},
dj7:function dj7(d){this.a=d},
dj8:function dj8(d){this.a=d},
dk5:function dk5(d,e){this.a=d
this.b=e},
dk6:function dk6(d){this.a=d},
djG:function djG(d,e){this.a=d
this.b=e},
dk_:function dk_(d,e,f){this.a=d
this.b=e
this.c=f},
djE:function djE(d,e,f){this.a=d
this.b=e
this.c=f},
djF:function djF(){},
dke:function dke(d){this.a=d},
dkf:function dkf(d){this.a=d},
dkg:function dkg(d){this.a=d},
dki:function dki(d){this.a=d},
dkh:function dkh(){},
djD:function djD(d,e,f){this.a=d
this.b=e
this.c=f},
djC:function djC(d,e){this.a=d
this.b=e},
djB:function djB(d,e){this.a=d
this.b=e},
djl:function djl(d){this.a=d},
djk:function djk(d,e){this.a=d
this.b=e},
djm:function djm(d){this.a=d},
djj:function djj(d,e){this.a=d
this.b=e},
djn:function djn(d){this.a=d},
dji:function dji(){},
djo:function djo(d){this.a=d},
djg:function djg(){},
djh:function djh(d){this.a=d},
djp:function djp(d){this.a=d},
djf:function djf(d,e){this.a=d
this.b=e},
djq:function djq(d){this.a=d},
dje:function dje(d,e){this.a=d
this.b=e},
dja:function dja(d,e){this.a=d
this.b=e},
djr:function djr(d){this.a=d},
djd:function djd(d,e){this.a=d
this.b=e},
djs:function djs(d){this.a=d},
djc:function djc(d){this.a=d},
dj9:function dj9(d,e){this.a=d
this.b=e},
djt:function djt(d,e,f){this.a=d
this.b=e
this.c=f},
dju:function dju(d){this.a=d},
djb:function djb(){},
djv:function djv(d){this.a=d},
amT:function amT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bit:function bit(){this.c=this.a=null},
dnU:function dnU(d,e){this.a=d
this.b=e},
dnT:function dnT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aj0:function aj0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
ayG:function ayG(d,e,f,g,h,i,j,k,l,m){var _=this
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
cL_:function cL_(d){this.a=d},
cKk:function cKk(d,e){this.a=d
this.b=e},
cKa:function cKa(d){this.a=d},
cKb:function cKb(d){this.a=d},
cKu:function cKu(d){this.a=d},
cKr:function cKr(d){this.a=d},
cKs:function cKs(d){this.a=d},
cKt:function cKt(d,e,f){this.a=d
this.b=e
this.c=f},
cKm:function cKm(d){this.a=d},
cKl:function cKl(d){this.a=d},
cKc:function cKc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKp:function cKp(d){this.a=d},
cKo:function cKo(d){this.a=d},
cKn:function cKn(d,e){this.a=d
this.b=e},
cKN:function cKN(d){this.a=d},
cKH:function cKH(d){this.a=d},
cKK:function cKK(d){this.a=d},
cKJ:function cKJ(){},
cKG:function cKG(d){this.a=d},
cKI:function cKI(d,e){this.a=d
this.b=e},
cKF:function cKF(){},
cKh:function cKh(){},
cKi:function cKi(d,e){this.a=d
this.b=e},
cKj:function cKj(d){this.a=d},
cKf:function cKf(d,e){this.a=d
this.b=e},
cKg:function cKg(d,e){this.a=d
this.b=e},
cKx:function cKx(d,e){this.a=d
this.b=e},
cKq:function cKq(d){this.a=d},
cKy:function cKy(d){this.a=d},
cKz:function cKz(d,e){this.a=d
this.b=e},
cKA:function cKA(d,e){this.a=d
this.b=e},
cKB:function cKB(d,e){this.a=d
this.b=e},
cKC:function cKC(d,e,f){this.a=d
this.b=e
this.c=f},
cKD:function cKD(d){this.a=d},
cKE:function cKE(d){this.a=d},
cKv:function cKv(d,e){this.a=d
this.b=e},
cKM:function cKM(d){this.a=d},
cKw:function cKw(d,e){this.a=d
this.b=e},
cKZ:function cKZ(d){this.a=d},
cKS:function cKS(d){this.a=d},
cKV:function cKV(d){this.a=d},
cKP:function cKP(d,e){this.a=d
this.b=e},
cKT:function cKT(){},
cKU:function cKU(d,e){this.a=d
this.b=e},
cKQ:function cKQ(d){this.a=d},
cKR:function cKR(d){this.a=d},
cKX:function cKX(){},
cKW:function cKW(d){this.a=d},
cKO:function cKO(d,e){this.a=d
this.b=e},
cKY:function cKY(d){this.a=d},
cKd:function cKd(d){this.a=d},
cKL:function cKL(d,e){this.a=d
this.b=e},
cKe:function cKe(d,e,f){this.a=d
this.b=e
this.c=f},
aLY:function aLY(){},
aLZ:function aLZ(){},
aM_:function aM_(){},
aMV:function aMV(){},
c2Q(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
c2R(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hNf(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aZp(d,e){return C.hNg(d,e)},
hNg(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$aZp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b2c(d),$async$aZp)
case 3:p=g
if(p!=null){try{t=A.X.aN(0,p.c,null)
if(x.f.b(t)){s=C.hkb(B.a2(t,x.N,x.z))
if(s==null){u=new B.Gr(D.a7x,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c2Q(s,e,p.b)){u=new B.Gr(D.aKh,null)
w=1
break}r=p.a?D.ect:D.aKg
u=new B.Gr(r,s)
w=1
break}}catch(o){}u=new B.Gr(D.a7x,null)
w=1
break}s=C.hkc(d)
if(s==null){u=new B.Gr(D.a7x,null)
w=1
break}if(A.a.i(e).length!==0&&!C.c2Q(s,e,null)){u=new B.Gr(D.aKh,null)
w=1
break}u=new B.Gr(D.aKg,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZp,v)},
hkc(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.d3(w,"\ufeff"))w=J.nm(w,1)
v=!1
if(J.d3(w,"NGMYSNAP1|")){v=!0
w=A.ch.cB(0,A.cF.aP(J.nm(w,10)))}u=A.X.aN(0,w,null)
if(!x.f.b(u))return null
t=B.a2(u,x.N,x.z)
s=v?C.hNe(t):C.hkb(t)
return s}catch(r){return null}},
hNe(d){var w,v,u,t,s,r,q,p,o,n=new C.c2N(),m=new C.c2M(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.a2(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aK(w.h(0,"d"))
p=new B.vS(v,u,t,s,r,A.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.A(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=B.aK(d.h(0,"qn"))
if(o==null)o=0
return new B.a6F("","",v,u,t,s,r,q,n,m,o,p,A.iv,new B.V(Date.now(),0,!1),-1)},
hkb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.A(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c2P()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=B.a2(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=B.aK(u.h(0,"amount"))
if(s==null)s=0
r=B.aK(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new B.V(Date.now(),0,!1)
p=B.aK(u.h(0,"totalEarned"))
if(p==null)p=0
o=B.aK(u.h(0,"daysClockedIn"))
n=new B.vS(t,s,r,q,p,A.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.C(new B.ef(J.b7(m,new C.c2O(w),x.eG),t),t.k("M.E"))}else l=B.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=B.aK(d.h(0,"accountBalance"))
if(q==null)q=0
p=B.aK(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.A(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=B.aK(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=B.aK(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new B.V(Date.now(),0,!1)
f=B.aK(d.h(0,"walletStateRevision"))
f=f==null?null:A.k.N(f)
return new B.a6F(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
h4F(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$h4F=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.c2L(d,e,f,g)
s=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aL(t.a,s,"_")
u=B.GY(B.Kv(t.f_(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4F,v)},
WH:function WH(d,e){this.a=d
this.b=e},
c2N:function c2N(){},
c2M:function c2M(){},
c2P:function c2P(){},
c2O:function c2O(d){this.a=d},
i9W(d){return B.ch(null,A.aS,!0,null,new C.fy2(),d,null,!0,!0,x.N)},
ia8(d,e,f,g){return B.ch(null,A.aS,!0,null,new C.fzf(g,f,e),d,null,!0,!0,x.y)},
aoq:function aoq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDK:function aDK(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEn:function dEn(d){this.a=d},
dEd:function dEd(d,e){this.a=d
this.b=e},
dEb:function dEb(d){this.a=d},
dEl:function dEl(d){this.a=d},
dEk:function dEk(d,e){this.a=d
this.b=e},
dEa:function dEa(d,e){this.a=d
this.b=e},
dE9:function dE9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEc:function dEc(d){this.a=d},
dEj:function dEj(){},
dEh:function dEh(d){this.a=d},
dEi:function dEi(d,e){this.a=d
this.b=e},
dEe:function dEe(){},
dEf:function dEf(d,e){this.a=d
this.b=e},
dEg:function dEg(d,e){this.a=d
this.b=e},
dEo:function dEo(d){this.a=d},
a1b:function a1b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bu_:function bu_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_O:function a_O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkW:function bkW(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dEs:function dEs(d){this.a=d},
dEp:function dEp(d,e){this.a=d
this.b=e},
dEq:function dEq(d,e){this.a=d
this.b=e},
dEr:function dEr(d){this.a=d},
a_P:function a_P(d){this.a=d},
bkX:function bkX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dEt:function dEt(d,e){this.a=d
this.b=e},
fy2:function fy2(){},
fzf:function fzf(d,e,f){this.a=d
this.b=e
this.c=f},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f3z:function f3z(d){this.a=d},
f3A:function f3A(d){this.a=d},
QI:function QI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZV:function ZV(d){this.a=d},
aAY:function aAY(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddq:function ddq(d){this.a=d},
ddn:function ddn(){},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
US(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$US=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.Ny(s),$async$US)
case 3:t=h
J.cc(t,B.H(["role",e,"text",A.a.i(f),"at",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z))
w=4
return B.b(B.aoG(s,t),$async$US)
case 4:case 1:return B.h(u,v)}})
return B.i($async$US,v)},
hNy(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("Y<1>")
v=B.C(new B.Y(d,new C.c3y(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fQ(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.K)(u),++s){r=u[s]
q=J.a7(r)
p=J.A(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c3y:function c3y(){},
ifJ(d){return A.d.dN(A.Df,new C.fIT(d),new C.fIU()).r},
fIT:function fIT(d){this.a=d},
fIU:function fIU(){},
aoW:function aoW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bl3:function bl3(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dKQ:function dKQ(d){this.a=d},
dKP:function dKP(d){this.a=d},
dKH:function dKH(d,e,f){this.a=d
this.b=e
this.c=f},
dKM:function dKM(d){this.a=d},
dKJ:function dKJ(d,e,f){this.a=d
this.b=e
this.c=f},
dKN:function dKN(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKO:function dKO(d){this.a=d},
dKK:function dKK(d){this.a=d},
dKL:function dKL(d){this.a=d},
hlR(d){var w=B.cbD(new B.V(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bG=0
d.c8=B.a([],x.s)},
hlT(d){return B.ch(null,A.w.j(0.82),!0,null,new C.cbI(),d,null,!0,!0,x.H)},
a7h:function a7h(d){this.a=d},
cbI:function cbI(){},
cbH:function cbH(d){this.a=d},
hzn(){var w=new B.V(Date.now(),0,!1),v=w.bS(B.dA(4-B.mn(w),0,0,0,0,0).a),u=B.c3(B.bC(v),1,4,0,0,0,0,0)
return""+B.bC(v)+"-W"+A.a.aY(A.o.u(1+A.k.bf(A.o.ao(v.bF(B.c3(B.bC(u),B.bL(u),B.bW(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
foC(d,e){var w,v,u,t,s,r,q=B.GE(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=J.r(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c9(r,"+local.ngmy")?A.a.au(r,0,r.length-11):r)===q)return t}t=B.H(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
i4l(d,e){var w,v,u,t,s,r,q,p=B.GE(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c9(q,"+local.ngmy")?A.a.au(q,0,q.length-11):q)===p){w=B.aK(s.h(t,"winsLeft"))
w=w==null?null:A.k.N(w)
return w==null?0:w}}return 0},
ip6(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.GE(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c9(q,"+local.ngmy")?A.a.au(q,0,q.length-11):q)===n){w=B.aK(s.h(t,o))
w=w==null?null:A.k.N(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
iaP(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.GE(b5),b2=B.ccZ(),b3=C.hzn()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c9(p,a3)?A.a.au(p,0,p.length-11):p)!==b1)continue
q=B.aK(r.h(s,a4))
o=q==null?a1:A.k.N(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.r(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a7(u)
v=B.aK(w.h(u,a4))
v=v==null?a1:A.k.N(v)
w.n(u,a4,(v==null?1:v)-1)
w=B.aK(w.h(u,"outcome"))
w=w==null?a1:A.k.N(w)
return w==null?1:w}n=new C.fA2()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=J.r(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c9(p,a3)?A.a.au(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=J.r(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c9(p,a3)?A.a.au(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.foC(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.a2(v.a(w.h(k,b0)),r,q):B.U(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new B.cE(w,B.a6(w).k("cE<1,2>")).gaf(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?B.a2(v.a(j.h(0,h)),r,q):B.U(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=B.aK(d.h(0,a6))
a0=g==null?a1:A.k.N(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return B.ce(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=B.aK(d.h(0,a8))
a0=g==null?a1:A.k.N(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return B.ce(h,a1)}}}return a1},
hvK(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.ap(w)]
if(t===3&&d.f>=d.e)t=e.ha()?1:2
return t},
haE(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.ap(w)]},
iaQ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.GE(a3),a1=new C.fA3()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c9(p,"+local.ngmy")?A.a.au(p,0,p.length-11):p)!==a0)continue
if(a1.$2(s,h)+a1.$2(s,g)+a1.$2(s,f)<=0)continue
if(u!=null){r=r.h(s,e)
r=J.k(r==null?"":r)
q=J.r(u,e)
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
q=new C.fA4(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.ap(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.ap(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.haE(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
iaO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aK(i.h(0,"wins")),g=h==null?m:A.k.N(h)
if(g==null)g=0
h=B.aK(i.h(0,"loses"))
w=h==null?m:A.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hzn():B.ccZ()
t=v+"|"+u
s=C.foC(d,e)
h=J.a7(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=B.aK(h.h(s,k))
q=r==null?m:A.k.N(r)
if(q==null)q=0
r=B.aK(h.h(s,j))
p=r==null?m:A.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.ap(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
ijo(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bjS()
w=C.iaQ(d,e,a0)
if(w!=null){if(w===3)++d.f
C.agD(d,e,w)
return w}v=C.iaP(d,e)
if(v!=null){if(v===3)++d.f
C.agD(d,e,v)
return v}u=C.iaO(d,e,a0)
if(u!=null)return new C.fPV(d,a0,e).$1(u)
t=C.foC(d,e)
s=J.a7(t)
r=B.aK(s.h(t,"winStreak"))
q=r==null?null:A.k.N(r)
if(q==null)q=0
s=B.aK(s.h(t,"loseStreak"))
p=s==null?null:A.k.N(s)
if(p==null)p=0
o=new C.fPX(d,a0)
if(C.i4l(d,e)>0){n=o.$0()
C.ip6(d,e)
C.agD(d,e,n)
return n}if(q>=d.c){n=new C.fPW(d,a0).$0()
C.agD(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.agD(d,e,n)
return n}s=x.t
m=B.a([],s)
l=B.a([],s)
for(s=[1,2,3],r=d.a,k=0;k<3;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)m.push(n)}for(s=[-1,-2],k=0;k<2;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)l.push(n)}h=A.o.E(d.b,5,95)
g=a0.ap(100)<h
if(g&&m.length!==0){f=m[a0.ap(m.length)]
if(f===3&&d.f>=d.e)f=a0.ha()?1:2}else{s=l.length
if(s!==0)f=l[a0.ap(s)]
else f=g?1:-1}if(f===3)++d.f
C.agD(d,e,f)
return f},
ccR(d){var w=0,v=B.j(x.y),u
var $async$ccR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ccQ(d),$async$ccR)
case 3:if(f){u=!0
w=1
break}u=B.ccQ(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ccR,v)},
agD(d,e,f){var w,v="winStreak",u="loseStreak",t=C.foC(d,e),s=J.a7(t),r=B.aK(s.h(t,v)),q=r==null?null:A.k.N(r)
if(q==null)q=0
r=B.aK(s.h(t,u))
w=r==null?null:A.k.N(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fA2:function fA2(){},
fA3:function fA3(){},
fA4:function fA4(d,e){this.a=d
this.b=e},
fPV:function fPV(d,e,f){this.a=d
this.b=e
this.c=f},
fPX:function fPX(d,e){this.a=d
this.b=e},
fPW:function fPW(d,e){this.a=d
this.b=e},
aop:function aop(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkU:function bkU(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cP$=d
_.b7$=e
_.c=_.a=null},
dDZ:function dDZ(d){this.a=d},
dDY:function dDY(d){this.a=d},
dE_:function dE_(d){this.a=d},
dDX:function dDX(d,e){this.a=d
this.b=e},
aMv:function aMv(){},
O_:function O_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ce2:function ce2(){},
ce1:function ce1(){},
aqE:function aqE(d,e,f){this.c=d
this.d=e
this.a=f},
h5G(d,e,f){return B.ch(null,A.w.j(0.88),!0,null,new C.ceu(f,e),d,null,!0,!0,x.H)},
hRm(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.ce(r[0],null)
v=r[1]
u=B.ce(v,null)
t=B.ce(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.iN[u-1]:v)+" "+B.w(t)+", "+B.w(w)}return s},
O7:function O7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ceu:function ceu(d,e){this.a=d
this.b=e},
blC:function blC(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
e3c:function e3c(d,e){this.a=d
this.b=e},
e38:function e38(){},
e39:function e39(){},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3b:function e3b(d,e){this.a=d
this.b=e},
aN4:function aN4(){},
hzj(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bjq(new C.fLf(w))
w=w.a
return w==null?null:w.c.a},
hzb(d){$.aW.x1$.push(new C.fL2(d))},
hzv(d){var w=$.tk().gbl(),v=w!=null
if(!v||w.c==null)return
if(C.hzj(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pT())w.eN()},
hzu(d){C.hvR(d,0)},
hvR(d,e){var w,v
if(e>4)return
w=d==null?$.tk().gbl():d
if(w==null||w.c==null)return
v=C.hzj(w)
if(v==="GameCenterScreen")return
if(D.f7e.q(0,v)&&w.pT()){w.eN()
$.aW.x1$.push(new C.fwj(w,e))}},
aR_(d,e,f){return B.ec(B.cu(new C.fMC(e,d,f)),e,!0)},
fLf:function fLf(d){this.a=d},
fL2:function fL2(d){this.a=d},
fL1:function fL1(d){this.a=d},
fwj:function fwj(d,e){this.a=d
this.b=e},
fMC:function fMC(d,e,f){this.a=d
this.b=e
this.c=f},
aqI(d,e){var w=0,v=B.j(x.H),u
var $async$aqI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.VV(e)
w=2
return B.b(B.aqH(d,u),$async$aqI)
case 2:B.a7U(d,u)
return B.h(null,v)}})
return B.i($async$aqI,v)},
v2(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$v2=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.yI(g)
if(o.length===0){w=1
break}t=e==null?B.LB(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.O8(o),$async$v2)
case 3:q=m
if(j!=null&&j.length!==0&&J.rh(q,new C.ceI(j))){w=1
break}p=e==null?new B.V(Date.now(),0,!1):e
J.pR(q,0,new B.jp(A.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.aqI(o,q),$async$v2)
case 4:if(i==null||r==null||s)C.a7W(o).bJ(new C.ceJ(),x.S).eK(new C.ceK())
case 1:return B.h(u,v)}})
return B.i($async$v2,v)},
a7W(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a7W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.hAt
m=B.yI(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.O8(m),$async$a7W)
case 3:t=f
s=J.cF(t)
if(!s.b_(t,new C.ceH())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a7W)
case 4:r=f
q=J.a7(r)
if(q.gK(r)!==s.gK(t)){w=1
break}for(p=!1,o=0;o<s.gK(t);++o)if(A.X.aq(s.h(t,o).ah(),null)!==A.X.aq(q.h(r,o).ah(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.aqI(m,r),$async$a7W)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a7W,v)},
b0Q(d){var w=0,v=B.j(x.S),u,t
var $async$b0Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.h5J(d,!1),$async$b0Q)
case 3:t=J
w=4
return B.b(C.aqJ(d,!1),$async$b0Q)
case 4:u=t.dJ(f,new C.ceG(new B.V(Date.now(),0,!1).bS(-864e8))).gK(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0Q,v)},
aqJ(d,e){var w=0,v=B.j(x.ac),u,t,s,r
var $async$aqJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=B.yI(d)
if(r.length===0){u=B.a([],x.gi)
w=1
break}w=3
return B.b(B.O8(r),$async$aqJ)
case 3:t=g
s=B.VV(t)
if(s.length!==J.ad(t))C.aqI(r,s)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqJ,v)},
ihh(d){var w,v,u,t=new B.V(Date.now(),0,!1),s=t.bF(d).a,r=A.o.ao(s,6e7)
if(r<1)return"Just now"
w=A.o.ao(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ao(s,864e8)<1)return""+w+"h ago"
v=A.o.F(B.dh(d),12)===0?12:A.o.F(B.dh(d),12)
s=A.iN[B.bL(d)-1]
r=B.bC(d)===B.bC(t)?"":", "+B.bC(d)
w=A.a.aY(A.o.u(B.fS(d)),2,"0")
u=B.dh(d)<12?"AM":"PM"
return s+" "+B.bW(d)+r+" \xb7 "+v+":"+w+" "+u},
bC7(d){var w=A.k.ac(Math.abs(d),2).split(".")
return"$"+B.p_(w[0],B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.ft9(),null)+"."+w[1]},
bFI(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bFI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aqJ(e,!1),$async$bFI)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.h5J(e,!0).bJ(new C.fYw(e),t).bJ(new C.fYx(),t).eK(new C.fYy())
w=4
return B.b(B.bV(A.L,null,new C.fYz(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bFI)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bFI,v)},
h8J(d,e,f){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.L(f.j(0.35),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bF,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dz)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hA,w,w,w),1)},
e3d(d,e,f){var w=null,v=A.w.j(0.22),u=B.n(8),t=B.L(f.j(0.28),A.r,1)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.eO(A.a5,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e3)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.O1,w,w,w),1)},
ceI:function ceI(d){this.a=d},
ceJ:function ceJ(){},
ceK:function ceK(){},
ceH:function ceH(){},
ceG:function ceG(d){this.a=d},
ft9:function ft9(){},
fYw:function fYw(d){this.a=d},
fYx:function fYx(){},
fYy:function fYy(){},
fYz:function fYz(d,e){this.a=d
this.b=e},
fYv:function fYv(d,e){this.a=d
this.b=e},
fYu:function fYu(d){this.a=d},
adZ:function adZ(d,e){this.c=d
this.a=e},
e3f:function e3f(){},
e3g:function e3g(){},
e3h:function e3h(){},
e3i:function e3i(d){this.a=d},
e3k:function e3k(){},
e3j:function e3j(d){this.a=d},
adY:function adY(d,e){this.c=d
this.a=e},
e3e:function e3e(){},
bFJ(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.i3(A.aS,!1,w,d,new C.fYC(j,i,h,g,e,f),null,A.eR,!1,x.H)},
fYC:function fYC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYA:function fYA(d,e){this.a=d
this.b=e},
fYB:function fYB(d,e){this.a=d
this.b=e},
aBG:function aBG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bh9:function bh9(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bw$=e
_.a8$=f
_.c=_.a=null},
dks:function dks(d,e){this.a=d
this.b=e},
dkr:function dkr(){},
aem:function aem(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aM0:function aM0(){},
aru(d,e,f){return new C.b1G(f,d,e,null)},
hS0(d){var w=B.a(A.k.ac(d,2).split("."),x.s),v=B.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.p_(w[0],v,new C.cgh(),null)
return A.d.aI(w,".")},
b0T(){var w=$.tN
if((w>0?$.tN=w-1:w)<=0)$.tN=0},
ahO(d,e){var w=0,v=B.j(x.H),u
var $async$ahO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.hdn
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$ahO)
case 4:case 3:return B.h(null,v)}})
return B.i($async$ahO,v)},
b1G:function b1G(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgi:function cgi(d){this.a=d},
cgh:function cgh(){},
NB:function NB(){},
c44:function c44(){},
hcM(d){if(d>0)return"+"+d
return""+d},
hc7(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fMD(d,e){var w=J.r(e,d)
if(w==null)w=B.fLp().h(0,d)
return w==null?90:w},
fs6(d,e){var w,v,u=B.aV(x.S)
while(u.a<3){w=e.ap(41)-20
if(w===0)continue
u.M(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.M(0,d+v*7+3)
v=B.a([A.o.u(d)],x.s)
A.d.v(v,new B.k5(u,new C.fs7(),u.$ti.k("k5<cs.E,m>")))
A.d.e_(v,e)
return v},
huR(d,e,f){var w,v,u,t,s=B.aV(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.M(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.M(0,f[A.o.F(u,5)]+u);++u}t=B.a([d],x.s)
A.d.v(t,B.pA(s,3,s.$ti.k("cs.E")))
A.d.e_(t,e)
return t},
ico(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.e6()
b2.cZ(42)
for(w=x.s,v=0;v<200;++v){u=A.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.ap(12)]
s=[2,3,5,6,7,10,11,13][b2.ap(8)]
r=A.k.N(Math.sqrt(t))
q=2+b2.ap(4)
p=A.o.ao(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.Ja("Simplify \u221a("+t*s+"x^"+q+")",m,C.huR(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.ap(35)
j=b2.ap(4)===0?1:2+b2.ap(4)
i=b2.ap(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.Ja("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fs6(k,b2)))}else if(u===2){k=2+b2.ap(18)
j=b2.ap(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.ap(10)+2
b1.push(new C.Ja("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fs6(g,b2)))}else b1.push(new C.Ja("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fs6(k,b2)))}else if(u===3){e=b2.ap(11)-5
o=b2.ap(11)
n=b2.ap(11)
d=b2.ap(11)+2
l=b2.ha()?1:-1
a0=e+l*(b2.ap(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.k.jo(a4)?""+A.k.N(a4):"\u221a"+a3
b1.push(new C.Ja("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fs6(a0,b2)))}else{a6=2+b2.ap(10)
a7=a6+2+b2.ap(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.Ja("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.huR(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
inh(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dy(B.a(d.split(""),u),x.bJ).hf(0)
for(w=0;w<12;++w){A.d.e_(t,A.cM)
v=A.d.hf(t)
if(v!==d)return v}return new B.dy(t,x.bJ).hf(0)},
Ja:function Ja(d,e,f){this.a=d
this.b=e
this.c=f},
fs7:function fs7(){},
aq1:function aq1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEu:function aEu(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dWI:function dWI(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWN:function dWN(d){this.a=d},
dWH:function dWH(d){this.a=d},
dWO:function dWO(d){this.a=d},
dWG:function dWG(d){this.a=d},
dWR:function dWR(d){this.a=d},
dWS:function dWS(d){this.a=d},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWP:function dWP(d,e){this.a=d
this.b=e},
aqK:function aqK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEK:function aEK(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e3q:function e3q(d,e,f){this.a=d
this.b=e
this.c=f},
e3r:function e3r(d){this.a=d},
e3m:function e3m(d){this.a=d},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3l:function e3l(d){this.a=d},
hOc(d){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=p.bS(36e8)
try{w=d.h(0,"start")
p=B.n4(J.k(w==null?"":w)).bU()
w=d.h(0,"end")
o=B.n4(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rJ(w,u,t,s,r,q==null?null:J.k(q))},
a81(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a81=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.az(),$async$a81)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aS(J.r(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.X.aN(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cH(p,new C.cf9(),p.$ti.k("M.E"),x.b1)
p=B.C(p,B.a6(p).k("M.E"))
A.d.aX(p,new C.cfa())
u=p
w=1
break}catch(n){r=B.ab(n)
$.am.$1("[calendar-memory] load: "+B.w(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a81,v)},
ar3(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$ar3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a81(d),$async$ar3)
case 2:r=g
q=J.cF(r)
q.bs(r,new C.cf6(e))
q.M(r,e)
q.aX(r,new C.cf7())
w=3
return B.b(B.az(),$async$ar3)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.kQ(r,80)
s=q.$ti.k("N<ak.E,a8<m,@>>")
q=B.C(new B.N(q,new C.cf8(),s),s.k("ak.E"))
w=4
return B.b(u.ar("String","ngmy_helper_calendar_v1_"+t,A.X.aq(q,null)),$async$ar3)
case 4:return B.h(null,v)}})
return B.i($async$ar3,v)},
hRy(d,e){var w=Date.now(),v=new B.V(w,0,!1).bU()
w=J.dJ(d,new C.cfb(v,v.bS(B.dA(14,0,0,0,0,0).a)))
w=B.C(w,w.$ti.k("M.E"))
return w},
hmq(d){var w,v,u,t,s,r,q,p,o,n,m=C.hRy(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.d2(m,0,B.dz(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bS(w,w.gK(0),v.k("bS<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.F(B.dh(s),12)===0?12:A.o.F(B.dh(s),12)
q=B.dh(s)>=12?"PM":"AM"
p=A.a.aY(A.o.u(B.fS(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bL(s)+"/"+B.bW(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
rJ:function rJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cf9:function cf9(){},
cfa:function cfa(){},
cf6:function cf6(d){this.a=d},
cf7:function cf7(){},
cf8:function cf8(){},
cfb:function cfb(d,e){this.a=d
this.b=e},
hOd(d){var w,v,u,t,s,r,q,p,o=null,n=new B.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.n4(J.k(w==null?"":w)).bU()}catch(v){}w=d.h(0,"id")
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
return new C.rK(w,u,t,s,r,q,J.k(p==null?"user":p))},
hkL(d){var w=A.o.F(B.dh(d),12)===0?12:A.o.F(B.dh(d),12),v=B.dh(d)>=12?"PM":"AM"
return""+B.bL(d)+"/"+B.bW(d)+" "+w+":"+A.a.aY(A.o.u(B.fS(d)),2,"0")+" "+v},
V5(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$V5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.az(),$async$V5)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aS(J.r(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.X.aN(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.de(s,x.f)
p=B.cH(p,new C.c7b(),p.$ti.k("M.E"),x.Q)
p=B.C(p,B.a6(p).k("M.E"))
A.d.aX(p,new C.c7c())
u=p
w=1
break}catch(n){r=B.ab(n)
$.am.$1("[call-memory] load: "+B.w(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$V5,v)},
b_b(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$b_b=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$b_b)
case 2:u=g
t=B.d2(e,0,B.dz(120,"count",x.S),B.T(e).c).dq(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("N<1,a8<m,@>>")
r=B.C(new B.N(t,new C.c79(),r),r.k("ak.E"))
w=3
return B.b(u.ar("String","ngmy_call_memory_v1_"+s,A.X.aq(r,null)),$async$b_b)
case 3:return B.h(null,v)}})
return B.i($async$b_b,v)},
b_c(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$b_c=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.U(x.N,x.Q)
o=J
w=2
return B.b(C.V5(d),$async$b_c)
case 2:u=o.aX(g)
case 3:if(!u.C()){w=4
break}t=u.gS(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b9<2>")
q=B.C(new B.b9(p,u),u.k("M.E"))
A.d.aX(q,new C.c7a())
w=5
return B.b(C.b_b(d,q),$async$b_c)
case 5:return B.h(null,v)}})
return B.i($async$b_c,v)},
c7d(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$c7d=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.V5(d),$async$c7d)
case 3:t=s.dJ(g,new C.c7e(e.bS(-72e8),e.bS(72e8)))
t=B.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c7d,v)},
hkM(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gan(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kQ(d,e),v=w.$ti,w=new B.bS(w,w.gK(0),v.k("bS<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWc()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.au(s,0,177)+"\u2026":s)+"\n"}}r=r.gK(d)>e?u+("\u2026 and "+(r.gK(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
ij8(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.V(q,0,!1).bU(),o=d.toLowerCase(),n=B.c3(B.bC(p),B.bL(p),B.bW(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bS(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bS(r)
w=B.ag("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cD(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.ce(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.ce(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=A.a.q(o,"am")||A.a.q(o,"morning")||A.a.q(o,"night")
if(v)if(A.a.q(o,"pm")||A.a.q(o,"afternoon")||A.a.q(o,"evening"))u=u<12?u+12:u
if(q&&A.a.q(o,"pm"))u=u<12?u+12:u
return B.c3(B.bC(n),B.bL(n),B.bW(n),u,t,0,0,0)},
hAT(d){var w=B.ag("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rK:function rK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c7b:function c7b(){},
c7c:function c7c(){},
c79:function c79(){},
c7a:function c7a(){},
c7e:function c7e(d,e){this.a=d
this.b=e},
hmt(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lT(t,w,v,u==null?null:J.k(u))},
hRE(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b7(v,new C.cfh(),x.bP)
v=B.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.djl
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.A(d.h(0,"printable"),!0)
return new C.it(r,w,v,u,t,typeof d.h(0,s)=="number"?A.k.N(B.e3(d.h(0,s))):0)},
hRD(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.i4z(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.k.N(B.e3(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.k.N(B.e3(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b7(s,new C.cff(),x.u)
s=B.C(s,s.$ti.k("ak.E"))}return new C.ic(p,w,v,u,s==null?D.aB5:s,t)},
i4A(d){var w,v,u,t=B.H([G.CH,"investments",A.or,"games",A.jZ,"loans",A.hT,"withdrawals",A.jH,"deposits",A.lg,"civic",A.le,"store",A.rU,"jobs",A.oq,"refunds",A.f0,"account",A.lc,"music",A.z_,"help"],x.dk,x.N)
for(w=new B.cE(t,B.a6(t).k("cE<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
i4z(d){switch(d){case"investments":return G.CH
case"games":return A.or
case"loans":return A.jZ
case"withdrawals":return A.hT
case"deposits":return A.jH
case"civic":return A.lg
case"store":return A.le
case"jobs":return A.rU
case"refunds":return A.oq
case"account":return A.f0
case"music":return A.lc
default:return A.z_}},
nh(d){var w=B.a([new C.lT("text",d,null,null)],x.a)
return w},
ahL(){var w=null,v=x.v
return B.a([new C.ic("investments","Investments",G.CH,4280468830,B.a([new C.it("inv1","How do I buy an investment plan?",C.nh("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.it("inv2","When do I get paid from my plan?",C.nh("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.it("inv3","Can I have more than one plan?",C.nh("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.ic("games","Games",A.or,4287323382,B.a([new C.it("gam1","How do NGMY games work?",C.nh("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.it("gam2","Why did my game payout change?",C.nh("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.ic("loans","Loans",A.jZ,4294538006,B.a([new C.it("loan1","How do I apply for a loan?",C.nh("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.it("loan2","What is the repayment period?",C.nh("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.ic("withdrawals","Withdrawals",A.hT,4282090230,B.a([new C.it("wd1","How do I withdraw money?",C.nh("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.it("wd2","Why is my withdrawal pending?",C.nh("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.ic("deposits","Deposits",A.jH,4279548070,B.a([new C.it("dep1","How do I deposit funds?",C.nh("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.it("dep2","How long until my deposit posts?",C.nh("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.ic("civic","Civic Registry",A.lg,4289170426,B.a([new C.it("civ1","What is Civic Registry?",C.nh("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.it("civ2","What does \u201cmissed\u201d mean on my profile?",C.nh("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.ic("store","NGMY Store",A.le,4293675161,B.a([new C.it("sto1","How do I buy from NGMY Store?",C.nh("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.it("sto2","How do I sell in the store?",C.nh("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.ic("jobs","Jobs & Creator",A.rU,4293548044,B.a([new C.it("job1","How do I find jobs?",C.nh("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.it("job2","How do I post a job?",C.nh("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.ic("refunds","Refunds",A.oq,4293870660,B.a([new C.it("ref1","Can I get a refund?",C.nh("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.it("ref2","How long do refunds take?",C.nh("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.ic("account","Account",A.f0,4281908728,B.a([new C.it("acc1","How do I update my profile?",C.nh("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.it("acc2","I forgot my password \u2014 what now?",C.nh("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.ic("music","Music Charts",A.lc,4290807036,B.a([new C.it("mus1","What are Music Charts?",C.nh("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.it("mus2","How do I upload music?",C.nh("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.ic("help","Help Center",A.z_,4279080072,B.a([new C.it("hlp1","Where can I get live help?",C.nh("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.it("hlp2","How do daily Helper limits work?",C.nh("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hmu(d){var w,v=J.a7(d),u=v.gan(d)
if(u)return C.ahL()
v=v.dH(d,new C.cfk(),x.i)
w=B.C(v,v.$ti.k("ak.E"))
A.d.aX(w,new C.cfl())
return w.length===0?C.ahL():w},
hmv(d){var w=J.b7(d,new C.cfm(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
return B.H(["categories",w,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z)},
ar5(d){return C.hRF(d)},
hRF(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$ar5=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ar5)
case 6:s=f
w=7
return B.b(s.ar("String","ngmy_helper_kb_v1",A.X.aq(C.hmv(d),null)),$async$ar5)
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
return B.i($async$ar5,v)},
cfj(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cfj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cfj)
case 7:r=e
q=B.aS(J.r(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.ahL()
u=l
w=1
break}p=A.X.aN(0,q,null)
if(!x.f.b(p)){l=C.ahL()
u=l
w=1
break}o=J.r(p,"categories")
if(!x.j.b(o)){l=C.ahL()
u=l
w=1
break}n=C.hmu(o)
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
l=C.ahL()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cfj,v)},
b1d(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b1d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1d)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.f7("ngmy_helper_kb",null,!1,A.bJ),$async$b1d)
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
return B.i($async$b1d,v)},
b1e(d){return C.hRG(d)},
hRG(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b1e=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1e)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hO("ngmy_helper_kb",d,!1,!1,A.cH,null),$async$b1e)
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
return B.i($async$b1e,v)},
ar6(){var w=0,v=B.j(x.I),u,t,s,r
var $async$ar6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.cfj(),$async$ar6)
case 3:s=e
w=4
return B.b(C.b1d(),$async$ar6)
case 4:r=e
w=r!=null&&x.j.b(J.r(r,"categories"))?5:6
break
case 5:t=C.hmu(x.j.a(J.r(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.ar5(t),$async$ar6)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ar6,v)},
cfn(d){var w=0,v=B.j(x.y),u
var $async$cfn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ar5(d),$async$cfn)
case 3:u=C.b1e(C.hmv(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfn,v)},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
it:function it(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cfi:function cfi(){},
cfh:function cfh(){},
ic:function ic(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cfg:function cfg(){},
cff:function cff(){},
cfk:function cfk(){},
cfl:function cfl(){},
cfm:function cfm(){},
baF:function baF(d){this.a=d},
W0:function W0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEW:function aEW(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
e7v:function e7v(){},
e7w:function e7w(){},
e7p:function e7p(d){this.a=d},
e7q:function e7q(d){this.a=d},
e78:function e78(d,e){this.a=d
this.b=e},
e79:function e79(d){this.a=d},
e7a:function e7a(d,e,f){this.a=d
this.b=e
this.c=f},
e77:function e77(d){this.a=d},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7o:function e7o(d){this.a=d},
e7g:function e7g(d){this.a=d},
e7h:function e7h(d,e,f){this.a=d
this.b=e
this.c=f},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e,f){this.a=d
this.b=e
this.c=f},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7i:function e7i(d,e,f){this.a=d
this.b=e
this.c=f},
e7c:function e7c(d){this.a=d},
e7b:function e7b(d){this.a=d},
e7d:function e7d(d,e){this.a=d
this.b=e},
e7e:function e7e(d){this.a=d},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7s:function e7s(){},
e7r:function e7r(d,e){this.a=d
this.b=e},
Q5:function Q5(d,e){this.c=d
this.a=e},
bcw:function bcw(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cTz:function cTz(d){this.a=d},
cTy:function cTy(d,e){this.a=d
this.b=e},
cTw:function cTw(d,e){this.a=d
this.b=e},
cTA:function cTA(d){this.a=d},
cTx:function cTx(d,e){this.a=d
this.b=e},
cTv:function cTv(d,e){this.a=d
this.b=e},
cTB:function cTB(d){this.a=d},
cTC:function cTC(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e,f){this.c=d
this.d=e
this.a=f},
aGT:function aGT(){this.d=$
this.c=this.a=null},
eZt:function eZt(d,e){this.a=d
this.b=e},
eZu:function eZu(d){this.a=d},
eZA:function eZA(){},
eZz:function eZz(d,e){this.a=d
this.b=e},
eZy:function eZy(d,e){this.a=d
this.b=e},
eZv:function eZv(d,e){this.a=d
this.b=e},
eZx:function eZx(d,e,f){this.a=d
this.b=e
this.c=f},
eZw:function eZw(d,e,f){this.a=d
this.b=e
this.c=f},
a0z:function a0z(d,e){this.c=d
this.a=e},
aGS:function aGS(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZn:function eZn(d){this.a=d},
eZo:function eZo(d,e){this.a=d
this.b=e},
eZr:function eZr(d,e){this.a=d
this.b=e},
eZs:function eZs(d){this.a=d},
eZq:function eZq(d,e){this.a=d
this.b=e},
hRB(d){var w=new B.N(d,new C.cfc(),B.T(d).k("N<1,m>")).aI(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
cfd(d,e,f){return C.hRC(d,e,f)},
hRC(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$cfd=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.KK([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.re(B.nk(b3),C.hRB(b6)+"\n\nAdmin instruction:\n"+b4,A.hU,null,null),$async$cfd)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.KK([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.d3(s,"```"))s=A.a.em(J.hgg(s,B.ag("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ag("\\s*```$",!0,!1,!1,!1),"")
r=A.X.aN(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.KK([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=B.a2(r,a4,a5)
a6=J.r(q,"message")
p=a6==null?null:J.k(a6)
a6=J.r(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.r(q,"categories")
a6=x.j
if(!a6.b(n)||J.ct(n)){a3=B.a([],x.Y)
u=new B.KK([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=B.a2(a3.a(J.r(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.w(k)
h=J.r(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=B.a2(a3.a(J.r(h,f)),a4,a5)
d=J.r(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aX(d);a9.C();){a1=a9.gS(a9)
J.cc(a0,C.hmt(B.a2(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.r(e,"answer")
J.cc(a0,new C.lT("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.w(f)
b1=J.r(e,"question")
J.cc(g,new C.it("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.A(J.r(e,"printable"),!0),f))}a9=J.r(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.r(j,"iconKey")
b0=C.hRA(J.k(b0==null?"help":b0))
b1=typeof J.r(j,"colorValue")=="number"?A.k.N(B.e3(J.r(j,"colorValue"))):4284773515
J.cc(m,new C.ic(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new B.KK([m,null,p,a3])
w=1
break}catch(b7){a2=B.ab(b7)
a3=B.w(a2)
a4=B.a([],x.Y)
u=new B.KK([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$cfd,v)},
hRA(d){switch(d){case"investments":return G.CH
case"games":return A.or
case"loans":return A.jZ
case"withdrawals":return A.hT
case"deposits":return A.jH
case"civic":return A.lg
case"store":return A.le
case"jobs":return A.rU
case"refunds":return A.oq
case"account":return A.f0
case"music":return A.lc
default:return A.z_}},
ihD(d,e,f){var w,v,u,t=B.bp(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=A.d.bg(t,new C.fN_(f))
if(w>=0){t[w]=J.fv(e).cN8(f,t[w].f)
return t}}A.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bdV(u)
return t},
cfc:function cfc(){},
fN_:function fN_(d){this.a=d},
dal:function dal(d){this.a=d},
W1:function W1(d,e,f){this.c=d
this.d=e
this.a=f},
aEY:function aEY(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
e85:function e85(){},
e7M:function e7M(d,e){this.a=d
this.b=e},
e7R:function e7R(d,e){this.a=d
this.b=e},
e7P:function e7P(d,e){this.a=d
this.b=e},
e7N:function e7N(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7Q:function e7Q(d,e,f){this.a=d
this.b=e
this.c=f},
e7I:function e7I(){},
e7J:function e7J(){},
e7K:function e7K(){},
e7L:function e7L(){},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e8_:function e8_(d){this.a=d},
e80:function e80(d){this.a=d},
e81:function e81(){},
e82:function e82(d){this.a=d},
e7V:function e7V(d){this.a=d},
e83:function e83(d){this.a=d},
e7U:function e7U(d){this.a=d},
e84:function e84(d,e){this.a=d
this.b=e},
e7T:function e7T(d,e){this.a=d
this.b=e},
e7S:function e7S(d,e){this.a=d
this.b=e},
hZt(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ag("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).lh(0,d),w=new B.Kf(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.au(d,t,q)
o=u?A.cq:A.aK
m.push(new B.es(p,n,n,A.cL,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.cq:A.aK
m.push(new B.es(p,n,n,A.cL,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.cq:A.aK
m.push(new B.es(p,n,n,A.cL,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cD,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.cq:A.aK
m.push(new B.es(p,n,n,A.cL,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.n2,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.b3(d,t)
m.push(B.cT(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.cq:A.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.tY(n,n,n,A.eM,n,n,!0,n,B.cT(m,n,n,n,n,n,n,n,n,n,n),A.a4,n,n,A.dj,A.bV)},
doM:function doM(d){this.a=d},
aCz:function aCz(d,e){this.a=d
this.b=e},
ar4:function ar4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEX:function aEX(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
e7F:function e7F(d,e){this.a=d
this.b=e},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7x:function e7x(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7H:function e7H(){},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7C:function e7C(){},
e7E:function e7E(){},
e7D:function e7D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7B:function e7B(d,e){this.a=d
this.b=e},
aCx:function aCx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acu:function acu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1c:function b1c(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfe:function cfe(d){this.a=d},
acn:function acn(d,e,f){this.c=d
this.d=e
this.a=f},
cN5:function cN5(d){this.a=d},
cN6:function cN6(){},
cN7:function cN7(d){this.a=d},
aCy:function aCy(d,e,f){this.c=d
this.d=e
this.a=f},
biI:function biI(){this.c=this.a=this.d=null},
doN:function doN(d,e){this.a=d
this.b=e},
doP:function doP(d,e){this.a=d
this.b=e},
doO:function doO(d){this.a=d},
hT9(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hTa(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hT8(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
huM(d){var w
if(new B.Y(B.a(d.split("\n"),x.s),new C.frR(),x.cc).gK(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
iiM(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hT8(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
arS:function arS(d,e){this.a=d
this.b=e},
Jf:function Jf(d,e){this.a=d
this.b=e},
rQ:function rQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frR:function frR(){},
ar7:function ar7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEZ:function aEZ(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bw$=i
_.a8$=j
_.c=_.a=null},
e8j:function e8j(d,e){this.a=d
this.b=e},
e8a:function e8a(d){this.a=d},
e8c:function e8c(){},
e8d:function e8d(d,e){this.a=d
this.b=e},
e8e:function e8e(d){this.a=d},
e8f:function e8f(){},
e8g:function e8g(d,e){this.a=d
this.b=e},
e8h:function e8h(d){this.a=d},
e8i:function e8i(d){this.a=d},
e8b:function e8b(d,e){this.a=d
this.b=e},
e8q:function e8q(d,e){this.a=d
this.b=e},
e8n:function e8n(){},
e8o:function e8o(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e8m:function e8m(d,e){this.a=d
this.b=e},
e8l:function e8l(d,e){this.a=d
this.b=e},
e8s:function e8s(d){this.a=d},
e8r:function e8r(d){this.a=d},
e89:function e89(d,e){this.a=d
this.b=e},
e88:function e88(d,e){this.a=d
this.b=e},
e8t:function e8t(d,e){this.a=d
this.b=e},
e8k:function e8k(d,e){this.a=d
this.b=e},
e86:function e86(d){this.a=d},
e87:function e87(d){this.a=d},
aNc:function aNc(){},
cfp(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$cfp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.T9
w=1
break}w=3
return B.b(B.az(),$async$cfp)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aS(J.r(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.T9
w=1
break}try{q=B.a2(x.f.a(A.X.aN(0,t,null)),x.N,x.z)
p=J.A(q.h(0,"contacts"),!0)
o=J.A(q.h(0,"calendar"),!0)
n=J.A(q.h(0,"calls"),!0)
q=J.A(q.h(0,"allGrantedOnce"),!0)
u=new C.W2(p,o,n,q)
w=1
break}catch(l){s=B.ab(l)
$.am.$1("[helper-perms] load: "+B.w(s))
u=D.T9
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$cfp,v)},
ar8(d,e){var w=0,v=B.j(x.H),u
var $async$ar8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.az(),$async$ar8)
case 4:w=3
return B.b(g.ar("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.X.aq(e.ah(),null)),$async$ar8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ar8,v)},
cfo(d){var w=0,v=B.j(x.gp),u,t
var $async$cfo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.W2(!0,!0,!0,!0)
w=3
return B.b(C.ar8(d,t),$async$cfo)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfo,v)},
hAU(d){var w=A.a.i(d.toLowerCase()),v=B.ag("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ag("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ag("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ag("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hAS(d){var w=B.ag("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
W2:function W2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bFP(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bFP=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.b18(h),$async$bFP)
case 3:if(j){w=1
break}w=4
return B.b(C.ar0(h),$async$bFP)
case 4:if(d.e==null){w=1
break}t=B.qR(d,!0)
t.toString
s=B.dl()
s.b=B.oF(new C.fZm(g,e,f,s),!1,!1)
t.m2(0,s.bi())
case 1:return B.h(u,v)}})
return B.i($async$bFP,v)},
fZm:function fZm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZl:function fZl(d){this.a=d},
a_j:function a_j(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBZ:function aBZ(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cP$=d
_.b7$=e
_.c=_.a=null},
dm6:function dm6(d){this.a=d},
dm7:function dm7(d,e,f){this.a=d
this.b=e
this.c=f},
dmc:function dmc(){},
dmb:function dmb(d){this.a=d},
dm8:function dm8(d){this.a=d},
dm9:function dm9(){},
dma:function dma(d){this.a=d},
aM5:function aM5(){},
hSC(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hSB(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
arD(d){return C.hSz(d)},
hSz(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$arD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.f7("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bJ),$async$arD)
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
return B.i($async$arD,v)},
b23(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b23=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hSC(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f7("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bJ),$async$b23)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.A(J.r(r,"redeemed"),!0)){u=null
w=1
break}p=J.r(r,"token")
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
return B.i($async$b23,v)},
hmU(d){var w,v=A.a.i(d)
if(A.a.a0(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.b3(v,14))
return w.length===0?null:w}return null},
hSA(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.b_(e,new C.chb(A.a.i(d.toLowerCase()),w))},
hmV(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.q8(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.q8(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.q8(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.q8(!1,0,"Verification code does not match this deposit.")
if(!C.hSA(e,d,w))return new C.q8(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
h5Z(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dQH
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aK(t.h(d,u))
return new C.Om(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aK(t.h(d,u))
return new C.Om(!0,!1,!0,!1)}B.aK(t.h(d,u))
return new C.Om(!0,!1,!1,!1)},
chh(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$chh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.hmU(d)
if(s==null){u=D.Tb
w=1
break}w=3
return B.b(C.arD(s),$async$chh)
case 3:t=g
if(t==null){u=D.Tb
w=1
break}u=C.h5Z(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chh,v)},
b25(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$b25=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b23(d),$async$b25)
case 3:s=g
if(s==null||s.length===0){u=D.Tb
w=1
break}w=4
return B.b(C.arD(s),$async$b25)
case 4:t=g
if(t==null){u=D.Tb
w=1
break}u=C.h5Z(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b25,v)},
chi(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$chi=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.b23(d),$async$chi)
case 3:t=j
if(t==null||t.length===0){u=new C.q8(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Wl(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chi,v)},
Wl(d,e,f,g,h){return C.hSD(d,e,f,g,h)},
hSD(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wl=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hmU(a4)
if(a0==null){u=new C.q8(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.arD(a0),$async$Wl)
case 3:k=a8
if(k==null){u=new C.q8(!1,0,y.m)
w=1
break}j=C.h5Z(k,a5)
if(j.b){u=new C.q8(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.q8(!1,0,y.u)
w=1
break}if(j.c){u=new C.q8(!1,0,y.j)
w=1
break}i=C.hmV(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aK(J.r(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.q8(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.V(Date.now(),0,!1).a9().ae()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.f7("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bJ),$async$Wl)
case 8:p=a8
if(p==null){u=new C.q8(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.r(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.q8(!1,0,"This deposit code was already used.")
w=1
break}o=C.hmV(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dO(p,f,e)
J.aJ(n,"redeemedBy",q)
J.aJ(n,"redeemedAt",r)
w=9
return B.b(B.hO("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cH,null),$async$Wl)
case 9:n=J.r(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return B.b(B.hO("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.H(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cH,null),$async$Wl)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.ab(a1)
$.am.$1("[local deposit qr] redeem: "+B.w(l))
u=new C.q8(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.q8(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wl,v)},
Om:function Om(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
q8:function q8(d,e,f){this.a=d
this.b=e
this.c=f},
chb:function chb(d,e){this.a=d
this.b=e},
chp(d,e){var w
B.hcn(d,e,!1)
B.rb(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bb(!0,!1,d.d,w)},
a8o(d,e){if(d==null)return!1
return B.bC(d)===e.gck()&&B.bL(d)===e.gcg()&&B.bW(d)===e.gcw()},
hSL(d){var w=B.dh(d)*60+B.fS(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hn1(d){if(B.dh(d)>=12)return!1
if(B.mn(d)===6||B.mn(d)===7)return!1
return!0},
cht(d){var w=d.c?d.bU():d
return w.d3(B.c3(B.bC(w),B.bL(w),B.bW(w),12,0,0,0,0))},
h62(d,e){var w,v,u,t=d.gCB()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a8o(d.fx,e)&&d.fy>0.0001)return A.k.E(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bU()
if(!C.cht(w))return 0
v=B.c3(e.gck(),e.gcg(),e.gcw(),12,0,0,0,0)
if(!e.d3(v))return t
if(!e.ce(w))return 0
u=A.o.ao(v.bF(w).a,1000)
if(u<=0)return t
return A.k.E(t*(A.o.E(A.o.ao(e.bF(w).a,1000),0,u)/u),0,t)},
h61(d,e){var w,v,u,t,s,r,q,p=new B.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a8o(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bU():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.b_(e,new C.cho(s))&&C.cht(t)){r=d.gCB()
v=r>0
if(v){q=new B.d7(s,d.a,r,A.fT,A.fn,"Clock-in daily earnings (local)",null,null,A.cs,p)
C.chp(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a8o(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a8o(o,p)&&!C.cht(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cho:function cho(d){this.a=d},
i6J(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gI(v.split("@"))
return"Member"},
io5(d,e,f,g,h,i){return B.hI(d,new C.arE(f,e,i,g,h,null),!0,null,x.H)},
hre(d){var w,v,u=d.c?d.bU():d,t=B.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bL(u)+"/"+B.bW(u)+"/"+B.bC(u)+" \xb7 "+w+":"+A.a.aY(A.o.u(B.fS(u)),2,"0")+" "+v},
hyN(d){var w=d.x
if(w===A.dy)return"Processing"
if(w===A.kA)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ife(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fH)return"Deposit"
if(w===A.eW)return"Withdrawal"
return v.length!==0?v:w.b},
i6o(d){var w=d.d,v=w===A.fH||w===A.oU||w===A.fT||w===A.kB,u=d.x
if(u===A.dy)return w===A.eW?-d.c:0
if(u!==A.cs)return 0
w=d.c
return v?w:-w},
ifN(d,e){var w,v,u,t,s,r,q=B.C(d,x.o)
A.d.aX(q,new C.fJ_())
w=B.U(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.K)(q),++t,v=r){s=q[t]
r=v-C.i6o(s)
if(r<0)r=0
w.n(0,s.a,new B.bqd(v,r))}return w},
arE:function arE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFk:function aFk(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
emz:function emz(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
enh:function enh(d){this.a=d},
emY:function emY(d,e){this.a=d
this.b=e},
emZ:function emZ(){},
en_:function en_(d){this.a=d},
en0:function en0(){},
en1:function en1(d){this.a=d},
en2:function en2(d,e,f){this.a=d
this.b=e
this.c=f},
en3:function en3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emT:function emT(d,e){this.a=d
this.b=e},
emA:function emA(d,e,f){this.a=d
this.b=e
this.c=f},
emU:function emU(){},
emV:function emV(){},
emW:function emW(d){this.a=d},
emX:function emX(){},
emE:function emE(d,e){this.a=d
this.b=e},
emF:function emF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emN:function emN(){},
emK:function emK(d){this.a=d},
emL:function emL(d,e){this.a=d
this.b=e},
emM:function emM(d,e){this.a=d
this.b=e},
emO:function emO(d){this.a=d},
emP:function emP(d,e,f){this.a=d
this.b=e
this.c=f},
emQ:function emQ(d){this.a=d},
emS:function emS(d){this.a=d},
emR:function emR(d){this.a=d},
emG:function emG(d){this.a=d},
emH:function emH(d,e,f){this.a=d
this.b=e
this.c=f},
en7:function en7(){},
en8:function en8(){},
enc:function enc(d){this.a=d},
en5:function en5(d){this.a=d},
end:function end(d){this.a=d},
en4:function en4(d){this.a=d},
ene:function ene(d){this.a=d},
en9:function en9(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d){this.a=d},
en6:function en6(d){this.a=d},
emD:function emD(d){this.a=d},
emC:function emC(d){this.a=d},
emB:function emB(d){this.a=d},
emJ:function emJ(d,e){this.a=d
this.b=e},
emI:function emI(d,e){this.a=d
this.b=e},
aCL:function aCL(d,e,f,g,h,i,j,k,l,m){var _=this
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
dqx:function dqx(){},
dqy:function dqy(){},
dqz:function dqz(d,e,f){this.a=d
this.b=e
this.c=f},
dqw:function dqw(d){this.a=d},
dqA:function dqA(d,e){this.a=d
this.b=e},
dqv:function dqv(d){this.a=d},
aCK:function aCK(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjr:function bjr(d,e){var _=this
_.f=_.e=_.d=$
_.cP$=d
_.b7$=e
_.c=_.a=null},
dqq:function dqq(d){this.a=d},
dqr:function dqr(d){this.a=d},
dqs:function dqs(d){this.a=d},
dqt:function dqt(){},
dqu:function dqu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dqp:function dqp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dqo:function dqo(d){this.a=d},
bd1:function bd1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bd0:function bd0(d,e,f){this.b=d
this.d=e
this.a=f},
bd_:function bd_(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aCM:function aCM(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aCN:function aCN(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dqR:function dqR(){},
dqS:function dqS(){},
dqT:function dqT(){},
dqD:function dqD(d){this.a=d},
dqC:function dqC(d,e){this.a=d
this.b=e},
dqB:function dqB(d,e){this.a=d
this.b=e},
dqO:function dqO(d,e){this.a=d
this.b=e},
dqQ:function dqQ(d,e){this.a=d
this.b=e},
dqP:function dqP(d,e){this.a=d
this.b=e},
dqN:function dqN(){},
dqM:function dqM(d){this.a=d},
dqL:function dqL(){},
dqG:function dqG(d){this.a=d},
dqH:function dqH(){},
dqI:function dqI(d){this.a=d},
dqJ:function dqJ(d){this.a=d},
dqF:function dqF(){},
dqK:function dqK(d){this.a=d},
dqE:function dqE(d){this.a=d},
bcq:function bcq(d){this.a=d},
fJ_:function fJ_(){},
bxp:function bxp(d,e){this.b=d
this.a=e},
aMl:function aMl(){},
bzr:function bzr(){},
ibI(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bs(d,new C.fB9(v,g))
w=B.U(x.N,x.z)
w.n(0,"id",A.o.u(1000*Date.now()))
w.n(0,"fromEmail",A.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&A.a.i(k).length!==0)w.n(0,"toName",A.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new B.V(Date.now(),0,!1).ae())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
A.d.M(d,w)},
aQr(d){var w,v=J.a7(d),u=B.aK(v.h(d,"matchesTotal")),t=u==null?null:A.k.N(u)
if(t==null)t=1
v=B.aK(v.h(d,"matchesPlayed"))
w=v==null?null:A.k.N(v)
return A.o.E(t-(w==null?0:w),0,t)},
imN(d,e){var w=B.T(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fTG(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
ahZ(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(C.aQr(u)<=0){t=J.cF(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ies(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.A(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.A(s==null?"":s,"complete"))return!1
if(C.aQr(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aQr(d)>0},
ier(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=B.aK(i.h(d,"matchesTotal")),g=h==null?null:A.k.N(h)
if(g==null)g=1
h=B.aK(i.h(d,"matchesPlayed"))
w=h==null?null:A.k.N(h)
v=(w==null?0:w)+1
u=A.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=B.a2(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?B.a2(p,s,r):B.U(s,r)
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
k=J.A(o.h(0,u),!0)
j=l!=null&&J.A(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
ibH(d,e){var w
C.ahZ(e)
w=B.T(e).k("Y<1>")
w=B.C(new B.Y(e,new C.fB8(A.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
ur(d,e){var w,v,u
for(w=J.aX(d);w.C();){v=w.gS(w)
u=J.r(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
i86(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
hc3(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.i86(x.f.b(u)?B.a2(u,r,q):B.U(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.r(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bED(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bED=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$bED)
case 7:r=e
q=B.aS(J.r(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.U(k,k)
w=1
break}p=A.X.aN(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.U(k,k)
w=1
break}k=x.N
o=B.U(k,k)
for(k=J.aX(p),j=x.f;k.C();){n=k.gS(k)
if(!j.b(n))continue
i=J.r(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.r(n,"username")
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
u=B.U(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bED,v)},
bDI(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bDI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bED(),$async$bDI)
case 3:u=t.hc3(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDI,v)},
Ls(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$Ls=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.hw0.h(0,q)
if(p!=null){t=new B.V(Date.now(),0,!1).bF(p)
t=t.a>B.dA(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hw0.n(0,q,new B.V(Date.now(),0,!1))
w=5
return B.b(B.Ru(A.ca,q),$async$Ls)
case 5:case 4:s=$.hw_.h(0,q)
if(s==null){u=C.ur(e,q)
w=1
break}r=C.ur(B.bDO(e,B.a([s],x._)),q)
if(r!=null)B.heu(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Ls,v)},
in1(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ae())
return}}},
i4H(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.H(["ttt",B.bZ(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.bZ(7,0,!1,q)
return B.H(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.ir(8,new C.fpB(r),!0,q)
return B.H(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.H(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ibG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new B.V(Date.now(),0,!1).ae())
r=C.i4H(u,f)
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
m=B.U(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ae())
return}}},
in_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aK(t.h(u,i))
w=w==null?null:A.k.N(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=B.aK(t.h(u,"matchesTotal"))
q=w==null?null:A.k.N(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=B.a2(p,w,s)
o.n(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=A.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=A.a.i(J.k(n==null?"":n).toLowerCase())
k=B.U(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",B.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ae())
return}},
het(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",B.a2(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new B.V(Date.now(),0,!1).ae())
return}}},
fSd(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fSd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.ahZ(d)
t=$.hbl
if(t==null)s=$.hbl=B.Ru(A.ca,null).fs(new C.fSe())
else s=t
w=3
return B.b(s,$async$fSd)
case 3:r=f
if(r==null){u=B.bp(new B.N(d,new C.fSf(),B.T(d).k("N<1,@>")),!0,x.P)
w=1
break}q=B.bDO(d,r)
A.d.aa(d)
A.d.v(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSd,v)},
ai_(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ai_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.ahZ(d)
t=B.T(d).k("N<1,a8<m,@>>")
t=B.C(new B.N(d,new C.fQ7(),t),t.k("ak.E"))
w=3
return B.b(B.Ru(t,null),$async$ai_)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bDO(d,s)
A.d.aa(d)
A.d.v(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ai_,v)},
aRk(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aRk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.het(d,e,f)
t=C.ur(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.Ru(B.a([B.a2(t,x.N,x.z)],x._),e),$async$aRk)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.ur(s,e)
if(r!=null)B.heu(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRk,v)},
ijw(d,e,f){var w
C.het(d,e,f)
w=$.hb8.h(0,e)
if(w!=null)w.a2(0)
$.hb8.n(0,e,B.cD(A.lE,new C.fQ8(e,d)))},
h5K(d,e){return new C.b0R(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
fB9:function fB9(d,e){this.a=d
this.b=e},
fTG:function fTG(d){this.a=d},
fB8:function fB8(d){this.a=d},
fpB:function fpB(d){this.a=d},
fSe:function fSe(){},
fSf:function fSf(){},
fQ7:function fQ7(){},
fQ8:function fQ8(d,e){this.a=d
this.b=e},
b0R:function b0R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
inu(d,e,f){return B.bV(A.L,null,new C.fUN(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fUN:function fUN(d,e){this.a=d
this.b=e},
a07:function a07(d,e,f){this.c=d
this.d=e
this.a=f},
aF8:function aF8(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
ehh:function ehh(d){this.a=d},
ehk:function ehk(d){this.a=d},
ehl:function ehl(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehi:function ehi(d,e){this.a=d
this.b=e},
ii0(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.iO
w=t.toLowerCase()
v=B.ag("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.iO
v=Date.now()
u=C.i7q(w,new B.V(v,0,!1))
v=x.N
return B.a([new B.kA("calendar",B.H(["title",C.i7p(t,w),"start",u.ae(),"end",u.bS(36e8).ae(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
i7p(d,e){var w,v,u,t,s,r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ag("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cD(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hwR(A.a.i(t))}s=B.ag("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cD(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hwR(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hwR(d){var w
if(d.length===0)return d
w=A.a.ft(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fAa(),B.T(w).k("N<1,m>")).aI(0," ")},
i7q(d,e){var w,v,u,t,s,r,q,p,o=B.c3(B.bC(e),B.bL(e),B.bW(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bS(864e8)
else if(!A.a.q(d,"today"))for(w=D.aI9.gdW(D.aI9),w=w.gaf(w);w.C();){v=w.gS(w)
u=v.a
if(B.cV(d,u,0)){t=C.i6n(o,v.b)
o=t
break}}s=B.ag("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(d)
if(s!=null){w=s.b
v=w[1]
r=B.ce(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.ce(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.c3(B.bC(o),B.bL(o),B.bW(o),r,q,0,0,0)},
i6n(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mn(w)===e){u=!0
if(v<=0){t=d.bS(36e8)
s=w.a
if(s>=t.gbr())u=s===t.gbr()&&w.b<t.gcE()}}else u=!1
if(u)return w
w=w.bS(r)}return d.bS(r)},
fAa:function fAa(){},
ii1(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.iO
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.ag("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cD(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.i3r(w,j)
if(q==null||q.length===0)return A.iO
t=B.ag("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.ag("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.kA("call",B.H(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.H(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return B.a([new B.kA(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.kA("call",B.H(["name",q],t,t))],x.Z)}return A.iO},
i3r(d,e){var w,v,u,t,s,r,q=[B.ag("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ag("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ag("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cD(d)
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
if(u)return C.iaW(t)}r=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
iaW(d){var w=A.a.ft(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.N(w,new C.fA9(),B.T(w).k("N<1,m>")).aI(0," ")},
fA9:function fA9(){},
hB0(d){var w=new B.N(d,new C.fSv(),B.T(d).k("N<1,a8<m,@>>")).bZ(0,new C.fSw())
w=B.C(w,w.$ti.k("M.E"))
return w},
fSv:function fSv(){},
fSw:function fSw(){},
ii4(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.iO
w=A.a.i(d)
if(w.length===0)return A.iO
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.iO
u=B.ag("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cD(w)
if(u==null)return A.iO
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.ag("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cD(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.ag("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cD(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.U(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return B.a([new B.kA("send_email",t)],x.Z)},
ihd(d,e){var w
if(e)return d
w=J.dJ(d,new C.fMn())
w=B.C(w,w.$ti.k("M.E"))
return w},
fMn:function fMn(){},
ijt(d){switch(d){case"blackjack_vegas":return D.dUG
case"roulette_euro":return D.dUq
case"slots_jackpot":return D.dUx
case"poker_texas":return D.dUA
case"chess_royale":return D.dUr
case"connect_four_pro":return D.dUs
case"domino_block":return D.dUu
case"plinko_prizes":return D.dUC
case"spin_wheel":return D.dUz
case"baccarat_punto":return D.dUt
case"craps_table":return D.dUB
case"casino_war":return D.dUv
case"bingo_live":return D.dUy
case"solitaire_klondike":return D.dUF
case"backgammon_pro":return D.dUp
case"billiards_snooker":return D.dUD
case"profit_solve":return D.dUE
default:return D.dUw}},
fPZ(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.n(8)
v=B.L(A.aT,A.r,1.5)
u=B.a([new B.ac(0,A.G,A.w.j(0.35),A.en,6)],x.V)
return B.p(p,B.at(B.X(A.om,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.f,p,p,new B.o(p,p,v,w,u,D.c61,A.n),p,74,p,p,p,p,p,52)}t=A.o.E(d,1,13)
s=t===1||t>=10||A.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.F(t,4)]
q=s?A.bB:A.O
w=B.n(8)
v=B.L(A.aN,A.r,1)
u=B.a([new B.ac(0,A.G,A.w.j(0.28),A.en,6)],x.V)
return B.p(p,B.x(B.a([new B.D(D.bFh,B.d(D.cEq[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b2,B.at(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b2],x.p),A.E,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(A.i2,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
ikz(d,e){var w,v=null,u=B.n(18),t=B.L(A.aT,A.r,3),s=B.a([new B.ac(0,A.G,A.aD.j(0.5),A.I,20)],x.V),r=B.T(e).k("N<1,h4>")
r=B.C(new B.N(e,new C.fRX(),r),r.k("ak.E"))
w=x.p
return B.x(B.a([B.p(v,B.x(B.a([D.fD6,A.ae,B.B(r,A.m,v,A.b9,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(v,v,t,u,s,D.c6n,A.n),v,v,v,v,I.aly,v,v,v),A.aB,B.di(A.arw,D.fDI,d,B.bo(A.aT,v,v,v,A.dv,v,Am.a09,v,v,v,v,v))],w),A.m,v,A.e,A.i,0,A.p)},
pp:function pp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bsi:function bsi(d,e){this.b=d
this.a=e},
fRX:function fRX(){},
hTl(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.bZ(8,0,!1,w)
u=B.bZ(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=B.bZ(7,0,!1,w)
return new C.as4(B.U(p,x.z),n,u,s,r,t,q,new B.au(A.at,$.aw()))},
icq(d,e,f,g,h){var w=new C.fCI(f,h)
switch(d){case"checkers_deluxe":return C.i2_(h,g,e,w)
case"tic_tac_go":return C.iba(h,g,e,w)
case"blackjack_vegas":return C.i1k(h,g,e,new C.fCC(w))
case"roulette_euro":return C.i9n(h,g,e,new C.fCD(w))
case"slots_jackpot":return C.iad(h,g,e,new C.fCE(w))
case"billiards_snooker":return C.i89(h,g,e,new C.fCF(w))
case"connect_four_pro":return C.i2q(h,g,e,w)
case"profit_solve":return C.i8c(h,g,e,new C.fCG(w))
default:return C.i1X(d,h,g,e,new C.fCH(w))}},
i2_(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),u=B.n(12),t=B.L(D.YN,A.r,8),s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,16)],x.V)
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.at(new B.fK(1,B.p(w,B.bx(B.n(6),B.ip(!0,w,w,A.y,D.fc1,new C.fmP(d,e,f,g),64,w,A.dS,A.ah,!1),A.ap),A.f,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.m,w,A.e,A.i,0,A.p)},
iba(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),w),B.E(B.at(new B.fK(1,B.cu(new C.fAt(d,e,f,g)),w),w,w,w),1)],x.p),A.m,w,A.e,A.i,0,A.p)},
i1k(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.x7,A.K,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.v(s,new B.N(q,new C.fma(),B.T(q).k("N<1,v>")))
else A.d.v(s,B.a([C.fPZ(q[0],!1),A.bm,C.fPZ(0,!0)],t))
s=B.B(s,A.m,v,A.b9,A.i,0,v,v)
r=B.d("Total: "+d.a4a(d.ay),v,v,v,v,v,v,D.fy1,v,v,v)
q=d.ay
w=B.T(q).k("N<1,v>")
q=B.C(new B.N(q,new C.fmb(),w),w.k("ak.E"))
q=B.bX(A.fI,q,A.br,v,6,6)
return B.x(B.a([new B.D(A.eI,u,v),D.fKc,A.am,s,A.aB,D.fRP,r,A.am,q,A.b2,B.B(B.a([B.E(B.bI(D.fEb,v,d.CW?v:new C.fmc(d,e,f,g),v),1),A.ad,B.E(B.bI(D.fUk,v,new C.fmd(d,e,f,g),v),1)],t),A.m,v,A.e,A.i,0,v,v)],t),A.m,v,A.e,A.i,0,A.p)},
i9n(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),u=d.cx,t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.cy,16)],x.V)
t=B.a([new B.D(A.eI,v,w),B.p(w,B.b4(w,w,w,new C.bsi(u,w),A.ax),A.f,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.D(A.jB,B.d("Result: "+B.w(v),w,w,w,w,w,w,D.flj,w,w,w),w))
t.push(A.ae)
t.push(B.bX(A.fI,B.ir(6,new C.fxv(d,e,f,g),!0,x.l),A.br,w,6,6))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
iad(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),u=d.db,t=B.T(u).k("N<1,m>")
u=B.C(new B.N(u,new C.fzp(),t),t.k("ak.E"))
return B.x(B.a([new B.D(A.eI,v,w),C.ikz(new C.fzq(d,e,f,g),u)],x.p),A.m,w,A.e,A.i,0,A.p)},
i89(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),u=B.n(20),t=B.L(A.fV,A.r,12),s=x.V,r=B.a([new B.ac(0,A.G,A.w.j(0.45),A.ds,18)],s),q=x.p
return B.x(B.a([new B.D(A.eI,v,w),B.E(B.p(w,new B.an(A.a_,w,A.ab,A.t,B.a([B.ap(w,B.p(w,w,A.f,w,w,D.b5d,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.ap(28,B.p(w,w,A.f,w,w,A.adU,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.at(B.eM(A.A,d.dx,B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.n(2),B.a([new B.ac(0,A.G,A.w.j(0.3),A.I,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.f,w,w,new B.o(w,w,t,u,r,D.evX,A.n),w,w,w,A.f_,w,w,w,w),1),B.kS(A.bf,w,w,1,0,new C.fwf(d,f),d.dy),B.bI(D.fJd,w,new C.fwg(d,e,g,f),w)],q),A.m,w,A.e,A.i,0,A.p)},
i2q(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.x7,A.K,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new B.by(1,A.bb,B.aA(v,B.x(B.ir(6,new C.fnf(d,w),!0,t),A.m,v,A.mk,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fng(d,w,e,f,g),v,v,v,v,v,v,!1,A.a3),v)
return B.x(B.a([new B.D(A.eI,u,v),B.E(B.at(new B.fK(1.1666666666666667,B.B(s,A.dI,v,A.e,A.i,0,v,v),v),v,v,v),1)],x.p),A.m,v,A.e,A.i,0,A.p)},
i8c(d,e,f,g){var w=null
return B.x(B.a([new B.D(A.eI,B.d(d.c,w,w,w,w,w,w,D.x7,A.K,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.iw,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aVi,A.K,w,w),B.aM(w,A.Y,!1,w,!0,A.t,w,B.aN(),d.id,w,w,w,w,w,2,D.c1K,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,A.dW,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fws(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,A.df,!0,A.a4,w,A.an,w,w,w,w),B.bI(D.fHP,w,new C.fwt(d,e,g,f),w)],x.p),A.m,w,A.e,A.i,0,A.p)},
i1X(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkn(),k=e.d
k=k==null?n:k.c
w=C.ijt(d)
v=D.aHZ.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.lr,A.K,n,n)
u=B.n(22)
t=w.a
s=w.b
r=B.L(s.j(0.5),A.r,2)
q=B.a([new B.ac(0,A.G,w.c.j(0.35),A.eU,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,Ak.Kp,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.n3,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.w(k)+" at the table"
k=x.p
q=B.E(B.at(B.p(n,B.x(B.a([p,A.W,o,A.N,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),A.d4,B.X(w.f,s.j(0.85),n,n,n,48)],k),A.m,n,A.b9,A.i,0,A.p),A.f,n,n,new B.o(n,n,r,u,q,new B.a9(A.b0,A.b6,A.x,t,n,n),A.n),n,n,n,A.f_,A.aa,n,n,1/0),n,n,n),1)
return B.x(B.a([m,A.ae,q,A.N,new B.a4(1/0,n,B.bI(D.fTq,n,new C.fmJ(f,e,g,h),B.bo(s,n,n,n,A.d.gI(t).iQ()>0.4?A.w:A.c,n,A.cm,n,n,n,n,n)),n)],k),A.m,n,A.e,A.i,0,A.p)},
F5:function F5(d,e){this.a=d
this.b=e},
as4:function as4(d,e,f,g,h,i,j,k){var _=this
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
cj4:function cj4(){},
cj5:function cj5(){},
cj3:function cj3(){},
cj6:function cj6(){},
cj2:function cj2(){},
cj8:function cj8(){},
cj9:function cj9(){},
cj1:function cj1(d){this.a=d},
cj7:function cj7(){},
cj0:function cj0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCI:function fCI(d,e){this.a=d
this.b=e},
fCC:function fCC(d){this.a=d},
fCD:function fCD(d){this.a=d},
fCE:function fCE(d){this.a=d},
fCF:function fCF(d){this.a=d},
fCG:function fCG(d){this.a=d},
fCH:function fCH(d){this.a=d},
fmP:function fmP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmO:function fmO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAt:function fAt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAs:function fAs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAr:function fAr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fma:function fma(){},
fmb:function fmb(){},
fmc:function fmc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmd:function fmd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxv:function fxv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxu:function fxu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzp:function fzp(){},
fzq:function fzq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwf:function fwf(d,e){this.a=d
this.b=e},
fwg:function fwg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fng:function fng(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnf:function fnf(d,e){this.a=d
this.b=e},
fws:function fws(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwt:function fwt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmJ:function fmJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ifg(d){var w,v=B.T(d).k("Y<1>")
v=B.pA(new B.Y(d,new C.fI2(),v),120,v.k("M.E"))
w=B.cH(v,new C.fI3(),B.a6(v).k("M.E"),x.N).aI(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fI2:function fI2(){},
fI3:function fI3(){},
aia(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
at_:function at_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aFV:function aFV(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
eOl:function eOl(){},
aNO:function aNO(){},
hRj(){var w=$.J2
if(w<=0)return;--w
$.J2=w
if(w===0){w=$.hmi
if(w!=null)w.$0()}},
cet(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
aqD(d){var w=0,v=B.j(x.H),u,t
var $async$aqD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.h5F.M(0,t)
w=4
return B.b(B.az(),$async$aqD)
case 4:w=3
return B.b(f.ar("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$aqD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aqD,v)},
aqC(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aqC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.cet(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.h5F.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.az(),$async$aqC)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.k_(J.r(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqC,v)},
W_(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$W_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$W_)
case 7:r=e
q=B.aS(J.r(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.U(x.N,x.z)
w=1
break}p=A.X.aN(0,q,null)
if(x.f.b(p)){o=B.a2(p,x.N,x.z)
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
case 6:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W_,v)},
b17(d){return C.hRv(d)},
hRv(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b17=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b17)
case 6:s=f
w=7
return B.b(s.ar("String","ngmy_helper_ai_usage_v1",A.X.aq(d,null)),$async$b17)
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
return B.i($async$b17,v)},
b15(d,e){var w,v,u,t,s=J.r(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.aeE(0,new B.V(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bk(u==null?"":u)
if(t==null)t=new B.V(Date.now(),0,!1)
return new B.aeE(typeof v=="number"?A.o.E(A.k.N(v),0,999999):0,t)},
b16(d,e){if(A.o.ao(e.bF(d.b).a,36e8)>=24)return new B.aeE(0,e)
return d},
cf_(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$cf_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.W_(),$async$cf_)
case 3:t=g
s=Date.now()
u=A.o.E(e-C.b16(C.b15(t,d),new B.V(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf_,v)},
cf0(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$cf0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.W_(),$async$cf0)
case 3:t=g
s=Date.now()
r=C.b16(C.b15(t,d),new B.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bS(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf0,v)},
hRw(d){var w,v,u,t=d.a,s=A.o.ao(t,1e6)
if(s<=0)return"0s"
w=A.o.ao(t,36e8)
v=A.o.ao(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.aY(A.o.u(v),2,"0")+"m "+A.a.aY(A.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.aY(A.o.u(u),2,"0")+"s"
return""+u+"s"},
b18(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$b18=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.W_(),$async$b18)
case 3:t=p.b16(o.b15(f,d),new B.V(Date.now(),0,!1))
w=4
return B.b(B.az(),$async$b18)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.a9().ae()
u=B.k_(J.r(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b18,v)},
ar0(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$ar0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.W_(),$async$ar0)
case 3:t=s.b16(r.b15(f,d),new B.V(Date.now(),0,!1))
w=5
return B.b(B.az(),$async$ar0)
case 5:w=4
return B.b(f.ar("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.a9().ae(),!0),$async$ar0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ar0,v)},
ar1(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$ar1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.W_(),$async$ar1)
case 3:s=g
r=Date.now()
q=C.b16(C.b15(s,d),new B.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aJ(s,t,B.H(["count",r+1,"windowStart",q.b.a9().ae()],x.N,x.K))
w=4
return B.b(C.b17(s),$async$ar1)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ar1,v)},
ahM(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ahM=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.fi("")
if(!d.d){p=!0
if(!C.hAT(a0))if(!C.hAS(a0)){p=B.ag("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hAT(a0)?3:4
break
case 3:o=C.ij8(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.c7d(e,o),$async$ahM)
case 7:n=a2
p=J.a7(n)
if(p.gcm(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hkL(o)+":\n"
m.a+=l
for(p=p.gaf(n);p.C();){m=p.gS(p)
l=h
k="- "+m.gWc()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ag("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.Ml("text/plain"),$async$ahM)
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
case 13:case 9:w=C.hAS(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a81(e),$async$ahM)
case 17:m=f.hmq(a2)+"\n"
p.a+=m
case 16:p=B.ag("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.V5(e),$async$ahM)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cL(i)){p=h
m=C.hkM(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ahM,v)},
hST(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
chy(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$chy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.hn6(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.f7("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bJ),$async$chy)
case 7:r=f
if(r!=null){p=J.r(r,"token")
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
return B.i($async$chy,v)},
arH(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$arH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.f7("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bJ),$async$arH)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.r(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.r(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.ch.cB(0,A.cF.aP(q))
m=J.A(J.r(r,"live"),!0)
u=new B.aHm(m,p,n)
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
return B.i($async$arH,v)},
b2c(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$b2c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hST(q)?3:4
break
case 3:w=5
return B.b(C.chy(q),$async$b2c)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.arH(t)
w=1
break
case 4:if(A.a.a0(q,"NGMYLOCALSYNC1|")){u=C.arH(A.a.i(A.a.b3(q,15)))
w=1
break}w=A.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.arH(A.a.i(A.a.b3(q,15))),$async$b2c)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aHm(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2c,v)},
hnm(d){var w=d.bK
if(w>=0)return w
return 1},
ahY(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$ahY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aRw(d,e),$async$ahY)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.Hd(d,null,null,!1,!0,""),$async$ahY)
case 5:w=4
return B.b(t.$1(h),$async$ahY)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ahY,v)},
ii_(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.iO
w=a1.toLowerCase()
v=B.ag("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ag("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(w)
if(!u&&t==null)return A.iO
s=new B.V(Date.now(),0,!1)
r=B.dl()
q=B.dl()
p=C.i7o(w)
if(p!=null){v=p.a
r.b=s.bS(v)
q.b=C.hvD(a1,w)
if(J.A(q.bi(),"Wake up")&&A.o.ao(v,e)<=180)q.b="Reminder \u2014 "+A.o.ao(v,e)+" min"}else{if(t!=null){v=B.ag("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.em(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hvE(v[2],v[4],v[3])
o=v[3]
m=B.ce(o==null?"":o,null)
if(m==null)m=0
l=B.c3(B.bC(s),B.bL(s),B.bW(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bS(a0)
r.b=B.c3(B.bC(l),B.bL(l),B.bW(l),n,m,0,0,0).bS(-36e8)
if(r.bi().d3(s.bS(e)))r.b=J.cc(r.bi(),A.og)
v=C.ibE(v[1])
k=A.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.aY(A.o.u(m),2,"0")+" "+j)}else{l=B.c3(B.bC(s),B.bL(s),B.bW(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bS(a0)
i=B.ag("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(w)
if(i!=null){o=i.b
h=C.hvE(o[1],o[3],o[2])
o=o[2]
g=B.ce(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.c3(B.bC(l),B.bL(l),B.bW(l),h,g,0,0,0)
r.b=f.d3(s.bS(3e7))&&!v?f.bS(a0):f
q.b=C.hvD(a1,w)}}v=x.N
return B.a([new B.kA("alarm",B.H(["title",q.bi(),"start",r.bi().ae(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
i7o(d){var w,v,u,t,s,r,q=[B.ag("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ag("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ag("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cD(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.ce(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.a0(r,"sec"))return new B.bc(1e6*A.o.E(s,5,86400))
if(A.a.a0(r,"hour")||A.a.a0(r,"hr"))return new B.bc(36e8*A.o.E(s,1,168))
return new B.bc(6e7*A.o.E(s,1,10080))}return null},
ibE(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
hvE(d,e,f){var w,v=B.ce(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.E(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hvD(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.ag("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hTe(d){var w,v,u,t,s=J.a7(d)
if(s.gan(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kQ(d,80),v=w.$ti,w=new B.bS(w,w.gK(0),v.k("bS<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gK(d)>80?u+("\u2026 and "+(s.gK(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Af,I,X,Ag,Y,F,Ah,O,Ai,Aj,Ak,Al,Z,Am,An,Ao,Ap,A_,A0
J=c[1]
B=c[0]
A=c[2]
K=c[61]
A1=c[204]
L=c[36]
P=c[196]
A2=c[209]
E=c[188]
M=c[198]
A3=c[119]
Q=c[142]
A4=c[194]
R=c[40]
N=c[81]
A5=c[157]
S=c[86]
A6=c[87]
T=c[165]
A7=c[199]
U=c[190]
A8=c[202]
A9=c[200]
Aa=c[201]
Ab=c[197]
Ac=c[193]
Ad=c[73]
V=c[134]
G=c[205]
W=c[180]
Ae=c[120]
C=a.updateHolder(c[6],C)
D=c[187]
H=c[30]
Af=c[72]
I=c[192]
X=c[116]
Ag=c[203]
Y=c[31]
F=c[191]
Ah=c[151]
O=c[101]
Ai=c[154]
Aj=c[189]
Ak=c[155]
Al=c[207]
Z=c[195]
Am=c[210]
An=c[147]
Ao=c[206]
Ap=c[208]
A_=c[80]
A0=c[64]
C.btu.prototype={
oQ(d,e){return this.a.$2(d,e)}}
C.FK.prototype={
R(){return new C.aJr(this.$ti.k("aJr<FK.T,FK.S>"))}}
C.aJr.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a
v=w.f
w=new B.hw(A.Gk,v,null,null,w.$ti.k("hw<1>"))
u.e=w
u.WK()},
bz(d){var w,v=this
v.bH(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aP5()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.Gk,w.b,w.c,w.d,w.$ti)}v.WK()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mm(d,w)},
t(){this.aP5()
this.a1()},
WK(){var w,v=this
v.d=v.a.c.lG(new C.fa7(v),new C.fa8(v),new C.fa9(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.ZF,w.b,w.c,w.d,w.$ti)},
aP5(){var w=this.d
if(w!=null){w.a2(0)
this.d=null}}}
C.awS.prototype={
mm(d,e){return this.e.$2(d,e)}}
C.am2.prototype={
R(){return C.hZP()},
bv(){return this.r.$0()}}
C.r6.prototype={}
C.aBE.prototype={
adN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hlR(r)
if(r.x==null||r.c8.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hlT(s),$async$adN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$adN,v)},
Ya(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ya=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arF(t.a.c),$async$Ya)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cet(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return B.b(C.aqC(t.a.c),$async$Ya)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dix(t,s))
if(!s)t.adN()
case 1:return B.h(u,v)}})
return B.i($async$Ya,v)},
ado(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ado=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bED(),$async$ado)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.diI(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ado,v)},
Z(){var w,v,u=this
u.bwU()
$.tN=$.tN+1
w=u.a
$.bEI=w.c.a
w=w.d.b8
v=B.T(w).k("N<1,a8<m,@>>")
w=B.C(new B.N(w,new C.dj_(),v),v.k("ak.E"))
u.f=w
u.ado()
u.K2()
u.Ya()
u.e=B.df(A.of,new C.dj0(u))},
K2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$K2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.ahZ(t.a.d.b8)
w=3
return B.b(C.fSd(t.a.d.b8),$async$K2)
case 3:s=e
if(t.c==null){w=1
break}C.ahZ(t.a.d.b8)
if(s!=null)t.m(new C.diQ(t,s))
else t.m(new C.diR(t))
case 1:return B.h(u,v)}})
return B.i($async$K2,v)},
t(){C.b0T()
var w=this.e
if(w!=null)w.a2(0)
this.bwT()},
aix(d,e,f){return this.cwc(d,e,f)},
cwc(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aix=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.r(t.r,q)
o=t.a
n=o.d.b8
o=o.c
s=d.b
C.ibI(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return B.b(C.ai_(t.a.d.b8),$async$aix)
case 3:if(t.c==null){w=1
break}t.m(new C.diT(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aix,v)},
IQ(d,e){return this.chc(d,e)},
c4t(d){return this.IQ(d,null)},
chc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.ur(t.a.d.b8,A.a.i(e))
if(s!=null&&C.aQr(s)<=0){t.c.L(x.q).f.U(D.aSZ)
w=1
break}}w=5
return B.b(C.aqC(t.a.c),$async$IQ)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.h5G(r,C.fMy(q.c),p),$async$IQ)
case 6:w=1
break
case 4:o=new C.diL(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hI(r,new C.aEt(p,q.d,q.f,q.r,new C.diM(o),q.w,C.fMy(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hI(q,new C.am1(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.diN(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$IQ,v)},
c1M(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.ahZ(i.a.d.b8)
C.ahZ(i.f)
w=C.imN(i.a.c.a,i.f)
v=C.ibH(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bK
if(!u){t=A.d.gI(w)
u=B.n(14)
s=B.L(A.aX,A.r,1)
r=J.a7(t)
q=r.h(t,"fromName")
q=B.w(q==null?r.h(t,"fromEmail"):q)
p=B.w(r.h(t,"gameTitle"))
o=B.aK(r.h(t,g))
o=o==null?h:A.k.N(o)
if(o==null)o=1
r=B.aK(r.h(t,g))
r=r==null?h:A.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.p(h,B.x(B.a([D.fNv,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.oQ,h,h,h),A.N,B.B(B.a([B.E(B.dT(A.KJ,new C.diD(i,t),h),1),A.ad,B.E(B.bI(D.fWO,h,new C.diE(i,t),h),1)],n),A.m,h,A.e,A.i,0,h,h)],n),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(A.aD,h,s,u,h,h,A.n),h,h,h,A.ee,A.bg,h,h,1/0)}m=A.d.gI(v)
l=A.d.dN(i.y,new C.diF(m),new C.diG(i))
k=C.hc3(m,i.a.c.a,i.r)
j=C.aQr(m)
u=B.n(14)
s=B.L(A.aX,A.r,1)
r=j===1?"":"s"
return B.p(h,B.x(B.a([D.fFm,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.oQ,h,h,h),A.av,B.d(C.ier(m,i.a.c.a),h,h,h,h,h,h,A.Vl,h,h,h),A.N,B.bI(D.fMM,h,new C.diH(i,l,m),h)],x.p),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(A.bl,h,s,u,h,h,A.n),h,h,h,A.ee,A.bg,h,h,1/0)},
bTn(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.f7C.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.TI(w[v])
t=A.k.E(u.d*0.58,0.12,0.3)
l.push(new B.w5(u.a,u.b,A.k.E(u.c*0.92,0,0.9),t).jY())}s=A.d.gI(w)
w=B.n(16)
t=B.n(18)
r=B.L(B.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.ac(0,A.G,B.a_(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.j6,12)],q)
o=x.p
o=B.a([new B.a4(100,n,B.at(B.X(d.e,A.c,n,n,n,64),n,n,n),n),B.E(new B.D(A.iJ,B.x(B.a([B.B(B.a([B.E(B.d(d.b,n,n,n,n,n,n,A.ka,n,n,n),1)],o),A.m,n,A.e,A.i,0,n,n),A.av,B.d(d.c,n,2,A.a1,n,n,n,A.pF,n,n,n)],o),A.E,n,A.b9,A.i,0,A.p),n),1)],o)
if(m)o.push(B.aH(n,n,n,n,D.c_f,n,n,n,new C.diz(this,d),n,n,n,n,"Invite player",n))
o.push(new B.D(A.NB,B.p(n,D.bYk,A.f,n,n,new B.o(B.a_(71,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),n,B.L(B.a_(A.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.ac(0,A.G,B.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.I,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aO(!1,w,!0,B.p(n,B.B(o,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,r,t,p,new B.a9(A.az,A.aE,A.x,l,n,n),A.n),n,92,n,A.ee,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.diA(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=B.R(d).ax.a===A.J?A.jw:A.qa,k=m?A.iz.j(0.94):A.c.j(0.94),j=m?A.c:A.O,i=m?A.iz:A.c,h=m?A.c.j(0.08):A.aN,g=m?A.c:A.O,f=m?A.bo:A.bN
if(!o.x)return C.aR_(n,l,B.at(B.n1(n,m?A.c:A.bf,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fMy(o.a.c)
return new C.O7(o.a.w,w,!0,o.gaU_(),n)}w=B.aG(d,A.eh,x.w).w
v=B.n(12)
u=B.L(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.ac(0,A.G,A.w.j(0.04),A.cI,12))
r=x.p
s=B.a([B.p(n,B.B(B.a([B.E(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.U,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.tE(new C.diX(o,f,g),n,$.aSq(),n)],r),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.a_E,n,n,1/0),A.W,o.c1M()],r)
v=o.y
A.d.v(s,new B.N(v,o.gbTm(),B.T(v).k("N<1,v>")))
w=B.ci(B.x(s,A.m,n,A.e,A.i,0,A.p),A.t,n,A.y,n,new B.Q(14,w.r.b+78,14,24),n,n,A.ah)
s=B.n(35)
v=B.a([new B.ac(0,A.G,A.w.j(m?0.28:0.08),A.j6,15)],t)
u=B.L(m?A.c.j(0.1):A.aN,A.r,1)
t=B.aH(n,n,n,n,B.X(A.eK,j,n,n,n,18),n,n,n,o.gaU_(),n,n,n,n,n,n)
q=B.E(B.at(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.n(20)
return B.oG(!0,C.aR_(n,l,new B.an(A.a_,n,A.ab,A.f,B.a([w,B.ap(n,B.bn(!1,new B.D(A.NN,B.p(n,B.B(B.a([t,q,new B.D(A.iJ,B.p(n,B.B(B.a([D.bVv,A.ec,C.aru(new C.diY(o),A.lr,o.a.c.a)],r),A.m,n,A.e,A.P,0,n,n),A.f,n,n,new B.o(A.cW,n,n,p,n,n,A.n),n,n,n,n,A.h8,n,n,n),n)],r),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.mM,n,n,n),n),!0,!1,A.af,!0,!0),n,n,0,0,0,n)],r),n)),new C.diZ(o),x.K)},
aU0(){var w,v
this.a.bv()
w=this.d
v=w>0?B.H(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.iZ(w,v)}}
C.aEt.prototype={
R(){return new C.blo()},
hJ(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aIt(){return this.r.$0()}}
C.blo.prototype={
Z(){this.bxT()
this.d=B.Vs(this.a.d.bk)
$.tN=$.tN+1},
t(){C.b0T()
this.bxS()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.aq1(v,new C.dWC(w),u,new C.dWD(w),new C.dWE(w,d),new C.dWF(w),null)}}
C.am1.prototype={
R(){return new C.aBD(new B.au(A.at,$.aw()))},
hJ(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aIt(){return this.z.$0()}}
C.aBD.prototype={
Z(){this.bwS()
this.a.toString
$.tN=$.tN+1},
t(){C.b0T()
var w=this.d
w.T$=$.aw()
w.P$=0
this.bwR()},
a2W(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.Of()
w=5
return B.b(C.aqC(t.a.c),$async$a2W)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.h5G(s,C.fMy(r.c),q),$async$a2W)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.ur(s.d.b8,A.a.i(r))
if(p!=null&&C.aQr(p)<=0){t.c.L(x.q).f.U(D.aSZ)
w=1
break}}o=B.d5(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.U(D.ff8)
w=1
break}m=B.LB(t.a.c.a,new C.dir(t))
if(m+0.001<n){t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dF(m)+", the bet is $"+B.dF(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aIt()
s=t.a
s.toString
r=A.o.u(1000*Date.now())
q=t.a
s.hJ(new B.d7(r,q.c.a,n,A.kb,A.fn,"Game bet: "+q.f,null,null,A.cs,new B.V(Date.now(),0,!1)))
t.a.bv()
if(D.f7p.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hI(s,new C.aoW(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hI(s,new C.am3(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a2W,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aH(o,o,o,o,A.HM,o,o,o,new C.diu(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cz,o,o,o),i=B.n(12),h=x.p
j=B.eI(B.a([B.p(o,B.at(C.aru(new C.div(p),A.iw,k.c.a),o,o,o),A.f,o,o,new B.o(A.cW,o,o,i,o,o,A.n),o,o,o,D.bzx,A.eZ,o,o,o)],h),o,o,!0,!0,D.ZC,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.n(16)
i=B.L(A.aX,A.r,1)
k=B.X(D.bMn,D.btf,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.n3,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.oQ,o,o,o)
u=B.a_(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.n(12)
s=x.a3
s=B.C(new B.N(B.a([2,5,10,25],x.t),new C.diw(p),s),s.k("ak.E"))
s=B.B(s,A.m,o,A.e,A.i,0,o,o)
r=B.a_(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.x(B.a([D.fYu,A.W,s,A.N,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.d,o,o,o,o,o,2,B.bs(o,new B.b5(4,B.n(10),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ms,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,A.dW,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a4,o,A.an,o,o,o,o)],h),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
u=B.n(12)
r=B.L(B.a_(102,A.a6y.l()>>>16&255,A.a6y.l()>>>8&255,A.a6y.l()&255),A.r,1)
s=B.a_(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.n(10)
q=B.p(o,B.x(B.a([D.fEK,B.d("+ $"+A.k.ac(n*0.46,2),o,o,o,o,o,o,D.fuD,o,o,o),B.d("(46% return on $"+A.k.ac(p.e,2)+" bet)",o,o,o,o,o,o,A.pF,o,o,o)],h),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.ck,o,o,1/0)
s=B.a_(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.n(10)
u=B.p(o,B.x(B.a([D.fNN,A.N,q,A.N,B.p(o,B.x(B.a([D.fzA,B.d("$"+A.k.ac(m,2),o,o,o,o,o,o,D.fjy,o,o,o),B.d("8 pairs \xd7 $"+A.k.ac(m,2)+" each",o,o,o,o,o,o,A.pF,o,o,o)],h),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.ck,o,o,1/0)],h),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(D.boS,o,r,u,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
r=B.fr(o,o,A.bf,o,o,o,o,o,o,A.c,o,A.h0,o,o,o,o,o,o,o,o)
return C.aR_(j,D.ZC,B.ci(B.p(o,B.x(B.a([k,A.av,v,A.bF,w,A.W,t,A.N,u,A.W,new B.a4(1/0,o,B.im(B.d("Start Game ($"+A.k.ac(p.e,2)+")",o,o,o,o,o,o,A.ce,o,o,o),p.gcA9(),r),o)],h),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,i,l,o,D.c5o,A.n),o,o,o,o,A.eS,o,o,1/0),A.t,o,A.y,o,E.al9,o,o,A.ah))}}
C.am3.prototype={
R(){var w=x.s,v=x.t,u=x.S
return new C.aBF(A.cM,new B.au(A.at,$.aw()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aV(u),B.aV(u),B.a([],v),B.a([],v),B.a([],v))},
hJ(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aBF.prototype={
ghQ(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
rC(d){return this.bRx(d)},
bRx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$rC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.Al()
r=t.P_()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.abN(d),$async$rC)
case 5:w=1
break
case 4:q=A.k.E(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.ud(d),$async$rC)
case 9:w=7
break
case 8:w=10
return B.b(t.EP(q,s,r),$async$rC)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$rC,v)},
Fp(d,e,f,g){return this.cxS(d,e,f,g)},
cxS(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$Fp=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bFJ(s,C.bFo(),C.he_(),d,e,f,g),$async$Fp)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Fp,v)},
Al(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b45(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aia(t,s.e.a.a)
case"memory":return s.ghQ()&&D.n0.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.azx()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bk
case"color":return s.b8
case"reflex":return s.a_
default:u=s.b4
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
azx(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
P_(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hc7()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b4
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bH(d)
if(u.f||u.c8)return
w=u.a
v=C.fMD(w.e,w.d.y2)
if(v!==C.fMD(d.e,d.d.y2)&&u.c!=null)u.m(new C.dkj(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bwW()
w=i.a
w.toString
$.tN=$.tN+1
i.Q=C.fMD(w.e,w.d.y2)
i.b6X()
i.ad7()
if(i.ghQ()){i.c8=!0
i.cL="Connecting to match\u2026"
i.cl="Both players enter the room together \u2014 play starts at the same time."
i.Pm()
i.acL()
i.bj=B.df(A.fO,new C.dkm(i))}if(A.d.q(D.RQ,i.a.e)){w=i.ghQ()
v=i.a
if(w){w=v.d.b8
v=v.Q
v.toString
u=C.ur(w,v)
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
m=s.b(t.h(u,h))?B.a2(s.a(t.h(u,h)),o,n):B.U(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.b0R(!1,w,k.length===0||A.a.q(k,"@")?C.hc3(u,v,null):k,p,l,s)}else{w=w.c
w=C.h5K(w.c,w.a)}w=i.bM=w}else{w=v.c
w=i.bM=C.h5K(w.c,w.a)}v=C.hTl()
v.bqE(i.a.e,i.d,w)
i.b4=v
i.r=v.c
if(i.ghQ()){w=i.a
v=w.d.b8
w=w.Q
w.toString
u=C.ur(v,w)
m=u==null?null:J.r(u,h)
if(x.f.b(m)){w=i.b4
w.toString
w.bcl(i.a.e,B.a2(m,x.N,x.z),i.a.c.a)
w=i.b4
i.r=w.c
if(w.e){if(w.r)j=D.Tk
else j=w.f===!0?D.qO:D.J5
i.An(j)}}}i.b5=B.df(A.mJ,new C.dkn(i))
if(i.ghQ())i.be=B.df(A.nr,new C.dko(i))}if(i.ghQ()&&!A.d.q(D.RQ,i.a.e))i.be=B.df(A.nr,new C.dkp(i))
i.as=B.df(A.fB,new C.dkq(i))},
Pm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghQ()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ur(s.d.b8,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bDI(p,t.a.c.a),$async$Pm)
case 5:o=e
if(t.c!=null)t.m(new C.djz(t,o))
w=1
break
case 4:w=6
return B.b(C.Ls(q,t.a.d.b8,!1),$async$Pm)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bDI(n,t.a.c.a),$async$Pm)
case 7:o=e
if(t.c!=null)t.m(new C.djA(t,o))
case 1:return B.h(u,v)}})
return B.i($async$Pm,v)},
ajD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ajD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghQ()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.Ls(r,s.d.b8,!1),$async$ajD)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.r(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=B.a2(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aOT(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.k.N(j)
else{h=j==null?null:J.k(j)
i=B.ce(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bs(t.fy,new C.dk2(t))
if(i!=null&&t.fr.length!==0){s=B.C(t.dy,x.S)
A.d.v(s,t.dy)
r=new B.e6()
r.cZ(i)
A.d.e_(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dk3())}case 1:return B.h(u,v)}})
return B.i($async$ajD,v)},
acL(){var w=0,v=B.j(x.H),u=this
var $async$acL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a1d(!0),$async$acL)
case 2:return B.h(null,v)}})
return B.i($async$acL,v)},
a1d(d){return this.cn5(d)},
cn4(){return this.a1d(!1)},
cn5(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1d=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghQ()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.Ls(q,s.d.b8,b3),$async$a1d)
case 3:o=b5
if(o==null)o=C.ur(t.a.d.b8,q)
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
j=s.b(l)?B.a2(l,r,k):B.U(r,k)
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
d=s.b(e)?B.a2(e,r,k):B.U(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?B.a2(a0,r,k):B.U(r,k)
a2=new B.V(Date.now(),0,!1).a9()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ae())}if(i&&!d.aj(0,h))d.n(0,h,!1)
if(f&&!d.aj(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.A(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ae())
s=!1
if(f)if(J.A(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ae())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=B.bk(a3)
a4=s==null?null:s.bU()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.A(d.h(0,h),!0)&&J.A(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bk(J.k(r==null?"":r))
a6=r==null?null:r.bU()}else a6=null
if(f){r=a1.h(0,g)
r=B.bk(J.k(r==null?"":r))
a7=r==null?null:r.bU()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.ce(a7)?a6:a7).bS(5e5)
if(!new B.V(Date.now(),0,!1).d3(a8)){a4=b2.a=a8.bS(4e6)
j.n(0,"startAt",a4.a9().ae())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",A.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",A.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.ijw(t.a.d.b8,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bD
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.djP(b2,t,b0))
w=1
break}if(s==null){t.m(new C.djQ(t))
w=1
break}b1=new B.V(Date.now(),0,!1)
if(b1.d3(s)){s=s.bF(b1).a
r=A.o.ao(s,1e6)
t.m(new C.djR(b2,t,r+(A.o.F(A.o.ao(s,1000),1000)>0?1:0)))
w=1
break}if(t.c8){t.m(new C.djS(b2,t))
b2=t.a.e
if(b2==="pattern")t.a9D()
else if(b2==="memory"){t.b6W()
if(t.c!=null)t.m(new C.djT())}}b2=t.bj
if(b2!=null)b2.a2(0)
t.bj=null
case 1:return B.h(u,v)}})
return B.i($async$a1d,v)},
aPO(d){var w,v,u,t,s=this
if(d!=null){w=new B.e6()
w.cZ(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.ap(9)
s.ry=u
s.x1=0
s.to=-1},
aPN(){return this.aPO(null)},
a9D(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghQ()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.ckz()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.Ls(q,s.d.b8,!1),$async$a9D)
case 5:r=t.b2S(e)
case 4:if(t.c==null){w=1
break}t.aPO(r)
t.m(new C.dj1(t))
t.E1()
case 1:return B.h(u,v)}})
return B.i($async$a9D,v)},
b2S(d){var w,v,u,t=null
if(d==null)return t
w=J.r(d,"sessionState")
if(!x.f.b(w))return t
v=J.r(w,"patternSeed")
if(typeof v=="number")return A.k.N(v)
u=v==null?t:J.k(v)
return B.ce(u==null?"":u,t)},
ckz(){var w=this.a,v=w.Q
if(v==null)return null
return this.b2S(C.ur(w.d.b8,v))},
ad7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ad7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ad7)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.ev(J.r(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.djy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ad7,v)},
pm(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.az(),$async$pm)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bGc().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.F(u.at+5,s)
else{q=u.at
r=t?A.o.F(q+6,s):A.o.F(q+1,s)}w=3
return B.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$pm)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$pm,v)},
a3d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghQ()||t.b4==null||t.f||t.aL){w=1
break}if(t.c8){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.Ls(r,s.d.b8,!1),$async$a3d)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b8
s=s.Q
s.toString
p=C.ur(r,s)
s=p==null
if(!s){r=J.cF(p)
r.aa(p)
r.v(p,q)}r=J.a7(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.a2(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bk(J.k(r==null?"":r))
s=s?null:J.r(p,"sessionUpdatedAt")
l=B.bk(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.ce(l)){w=1
break}s=t.b4
s.toString
r=t.a
s.bcl(r.e,n,r.c.a)
r=t.b4
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Tk
else k=r.f===!0?D.qO:D.J5
w=7
return B.b(t.An(k),$async$a3d)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dk4())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a3d,v)},
ahw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ahw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghQ()||q.b4==null||q.a.Q==null||q.aL){w=1
break}q.aL=!0
t=3
o=q.b4
o.toString
p=o.cQc(q.a.e)
o=q.a
n=o.d.b8
o=o.Q
o.toString
w=6
return B.b(C.aRk(n,o,p),$async$ahw)
case 6:q.a.bv()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aL=!1
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ahw,v)},
An(d){return this.bYQ(d)},
bYQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$An=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.b4==null){w=1
break}s=t.b4.w
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
return B.b(t.JC(s,s),$async$An)
case 9:w=4
break
case 6:w=10
return B.b(t.Yw(s,s),$async$An)
case 10:w=4
break
case 7:w=11
return B.b(t.abM(s,s),$async$An)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghQ()?12:13
break
case 12:w=14
return B.b(t.I8(),$async$An)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$An,v)},
a0a(d,e){return this.ceY(d,e)},
ceY(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$a0a=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghQ()?3:5
break
case 3:w=6
return B.b(t.ahw(),$async$a0a)
case 6:if(d===D.qN){w=1
break}w=4
break
case 5:if(d===D.qN){w=1
break}case 4:w=7
return B.b(t.An(d),$async$a0a)
case 7:case 1:return B.h(u,v)}})
return B.i($async$a0a,v)},
ad0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ad0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghQ()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ur(s.d.b8,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.r(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=B.a2(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?B.a2(k,r,m):B.U(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aRk(t.a.d.b8,q,l),$async$ad0)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$ad0,v)},
I8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$I8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghQ()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ur(s.d.b8,q)
if(p==null){w=1
break}o=J.r(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.a2(o,s,r):B.U(s,r)
n.n(0,"gameOver",!0)
C.het(t.a.d.b8,q,n)
C.in_(t.a.d.b8,q)
w=3
return B.b(C.ai_(t.a.d.b8),$async$I8)
case 3:t.a.bv()
case 1:return B.h(u,v)}})
return B.i($async$I8,v)},
t(){var w,v=this
if(v.ghQ()&&!v.f)v.ad0()
else if(!v.f)v.c4u()
C.b0T();++v.RG
w=v.as
if(w!=null)w.a2(0)
w=v.b5
if(w!=null)w.a2(0)
w=v.cx
if(w!=null)w.a2(0)
w=v.be
if(w!=null)w.a2(0)
w=v.bj
if(w!=null)w.a2(0)
w=v.e
w.T$=$.aw()
w.P$=0
v.bwV()},
cDp(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.b4==null}if(v)return
if(w.c8)return
v=w.b4
v.toString
w.a.toString
if(v.a>=v.b){w.ud("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dkd())},
b6X(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b6W()
break
case"scramble":r.bk=0
r.b6Y()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.dse[A.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,A.cb)
break
case"math":r.y2=0
r.b6V()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b6Z()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.e_(v,s)
if(!r.cpv()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.e_(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.aa(w)
w.push(r.d.ap(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.R7()
break
case"pattern":if(r.ghQ()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aPN()
w=B.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.E1()}break
case"color":r.b8=0
r.b6Q()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a_=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b89()
break
default:if(A.d.q(D.RQ,w)){w=r.b4
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b45(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cpv(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.F(v,2)===0},
b6Z(){var w,v,u,t,s,r=this,q=A.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.k.N(Math.pow(p,v))}u=A.k.N(Math.pow(p,o))
r.w=A.o.u(u)
r.aB=A.d.aI(n,", ")
q=r.w
t=x.s
s=B.a([A.o.u(u+p),A.o.u(u-p),A.o.u(u+p*2)],t)
t=B.a([q],t)
A.d.v(t,s)
A.d.e_(t,r.d)
r.x=t},
b6V(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bGc().length-6)u.at=0
w=$.bGc()
v=w[A.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b6Y(){var w=this,v=w.w=D.d3Z[A.o.F(w.at+w.bk,105)]
w.ax=C.inh(v)
w.ay=B.bZ(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bP(0,A.cb)},
b89(){var w=this,v=w.cx
if(v!=null)v.a2(0)
w.y=!1
w.z=null
w.cx=B.cD(B.dA(0,0,0,120+w.d.ap(280),0,0),new C.dk1(w))},
bYT(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rC("Too early \u2014 paid for "+t.a_+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ao(new B.V(v,0,!1).bF(u).a,1000)}if(w<520){t.m(new C.djw(t))
v=t.a_
if(v>=5){t.pm()
t.ud("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b89()
t.m(new C.djx())}}else t.rC("Too slow ("+w+"ms) \u2014 paid for "+t.a_+"/5.")},
cCE(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bg(t.ay,new C.dk8())
if(u<0)return
t.m(new C.dk9(t,u,v,d))},
cCF(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dka(u,d,v))},
bIp(){var w,v,u=this
if(u.f)return
if(A.d.b_(u.ay,new C.dj2())){u.c.L(x.q).f.U(D.ff2)
return}w=A.d.hf(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dj3(u))
if(u.ghQ()&&D.n0.q(0,u.a.e))u.a1s()
if(u.bk>=5){u.pm()
if(u.ghQ()&&D.n0.q(0,u.a.e))u.nc(!0)
else u.ud("All 5 words unscrambled!")}else{u.b6Y()
u.r="Word "+(u.bk+1)+" of 5 \u2014 place letters in order"
u.m(new C.dj4())}}else u.rC("Wrong word \u2014 paid for "+u.bk+"/5.")},
b6Q(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.F(w.at+w.b8*11,4),t=v[w.d.ap(4)]
w.aC=t
w.aH=v[u]
w.aM=[A.dJ,A.dE,A.id,A.t2][u]
w.w=t},
aOT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.aa(0)
w=h.id
w.aa(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aV(x.S)
for(s=J.k2(v),s=s.gaf(s),r=x.j;s.C();){q=s.gS(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aX(r.b(o)?o:A.cv),n=p===g;q.C();){m=q.gS(q)
l=typeof m=="number"?A.k.N(m):B.ce(J.k(m),null)
if(l==null)continue
t.M(0,l)
if(n)w.M(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aX(k);w.C();){m=w.gS(w)
l=typeof m=="number"?A.k.N(m):B.ce(J.k(m),null)
if(l!=null)f.M(0,l)}}h.k2=A.k.bf(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aK(J.r(j,g))
i=f==null?null:A.k.N(f)
if(i!=null)h.fx=i}},
b6W(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.aa(0)
p.id.aa(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.C(p.dy,x.S)
A.d.v(w,p.dy)
p.fr=w
if(p.ghQ()&&p.a.Q!=null){w=p.a
v=w.d.b8
w=w.Q
w.toString
u=C.ur(v,w)
t=u==null?null:J.r(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.a2(t,w,v):B.U(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.k.N(r)
else{w=r==null?null:J.k(r)
q=B.ce(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.e6()
v.cZ(q)
A.d.e_(w,v)}else A.d.e_(w,p.d)
p.aOT(s)}else A.d.e_(p.fr,p.d)},
cmq(d){var w,v,u,t=this
if(t.c8)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.m(new C.djI(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.djJ(t,v,u))
if(t.ghQ()&&D.n0.q(0,t.a.e))t.a1s()
if(t.go.a>=t.fr.length){t.pm()
if(t.ghQ()&&D.n0.q(0,t.a.e))t.nc(!0)
else t.azA()}return}t.k1=!0
B.bP(D.byu,new C.djK(t),x.c)},
b6k(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.djU(u))
if(u.y1>=5){u.pm()
u.ud("All 5 questions correct!")}else{u.b6Z()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.djV())}}else u.rC(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.djW(u))
if(u.y2>=6){u.pm()
u.ud("All 6 math questions correct!")}else{u.b6V()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.djX())}}else{u.Wx(u.y2+1)
u.rC(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.djY(u))
if(u.b8>=5){u.pm()
u.ud("All 5 color rounds correct!")}else{u.b6Q()
u.r="Round "+(u.b8+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.djZ())}}else u.rC("Wrong color \u2014 paid for "+u.b8+"/5.")
return}if(v){u.pm()
u.azA()}else u.c.L(x.q).f.U(D.ffM)},
cCD(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cp(q.k4,0)
v=A.o.ao(d,3)
u=A.o.F(d,3)
t=A.o.ao(w,3)
s=A.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dk7(q,d,w))
if(A.d.hf(q.k4)==="123456780"){q.pm()
q.azA()}}},
R7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$R7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.djL(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.djM(t,q).$0()
t.c.eq()
w=6
return B.b(B.bP(A.kL,null,r),$async$R7)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.djN(t).$0()
t.c.eq()
w=7
return B.b(B.bP(A.jV,null,r),$async$R7)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.djO(t))
case 1:return B.h(u,v)}})
return B.i($async$R7,v)},
cCG(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rC("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dkb(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pm()
u.ud("Perfect Simon run!")
return}u.m(new C.dkc(u))
u.R7()}},
E1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$E1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dj5(t))
s=x.H
w=3
return B.b(B.bP(A.ji,null,s),$async$E1)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dj6(t,o).$0()
t.c.eq()
w=7
return B.b(B.bP(A.a_i,null,s),$async$E1)
case 7:if(t.c==null){w=1
break}new C.dj7(t).$0()
t.c.eq()
w=8
return B.b(B.bP(A.iG,null,s),$async$E1)
case 8:case 5:r.length===q||(0,B.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dj8(t))
case 1:return B.h(u,v)}})
return B.i($async$E1,v)},
Wx(d){return this.bD2(d)},
bD2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Wx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.az(),$async$Wx)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bGc().length
o=A.o.F(t.at+d,p)
w=4
return B.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$Wx)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$Wx,v)},
cCB(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rC("Wrong tile \u2014 paid for "+v.azx()+"/"+C.hc7()+" moves.")
return}v.m(new C.dk5(v,w))
if(v.ghQ()&&D.n0.q(0,v.a.e))v.a1s()
if(v.x1>=w)if(v.x2>=7){v.pm()
if(v.ghQ()&&D.n0.q(0,v.a.e))v.nc(!0)
else v.ud("All 7 pattern rounds correct!")}else{v.m(new C.dk6(v))
v.E1()}},
JC(d,e){return this.ckP(d,e)},
ud(d){return this.JC(null,d)},
azA(){return this.JC(null,null)},
ckP(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a2(0)
s=t.b5
if(s!=null)s.a2(0)
r=t.a.x*1.46
t.m(new C.djG(t,r))
q=A.o.u(1000*Date.now())
s=t.a
p=new B.d7(q,s.c.a,r,A.fT,A.fn,"Game payout: "+s.f,null,null,A.cs,new B.V(Date.now(),0,!1))
B.ahW(p,!0)
t.a.hJ(p)
t.a.bv()
o=e==null?"+$"+A.k.ac(r,2)+" added to your balance!":e
s=t.a
C.v2(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Fp(d,o,"YOU WIN!",!0),$async$JC)
case 3:w=4
return B.b(C.ahO(t.a.f,o),$async$JC)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JC,v)},
Fn(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Fn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghQ()&&D.n0.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cwW(),$async$Fn)
case 5:w=1
break
case 4:s=t.Al()
r=t.P_()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.abN("Time's up \u2014 no progress to pay."),$async$Fn)
case 8:w=1
break
case 7:q=A.k.E(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.ud("Complete! Max payout earned."),$async$Fn)
case 12:w=10
break
case 11:w=13
return B.b(t.EP(q,s,r),$async$Fn)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$Fn,v)},
Rf(d){return this.cpa(d)},
a1s(){return this.Rf(!1)},
cpa(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Rf=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghQ()&&D.n0.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.V(Date.now(),0,!1)
a2=r.bG
if(a2!=null&&a1.bF(a2).a<3e6){w=1
break}r.bG=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.ur(a2.d.b8,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.Ls(q,r.a.d.b8,!1),$async$Rf)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.r(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.a2(n,a3,a5):B.U(a3,a5)
l=J.r(m,"scores")
k=a2.b(l)?B.a2(l,a3,a5):B.U(a3,a5)
J.aJ(k,p,r.Al())
J.aJ(m,"scores",k)
if(r.a.e==="memory"){j=J.r(m,"memoryMatchedBy")
i=a2.b(j)?B.a2(j,a3,a5):B.U(a3,a5)
a6=r.id
a6=B.C(a6,B.a6(a6).k("cs.E"))
A.d.fh(a6)
J.aJ(i,p,a6)
J.aJ(m,"memoryMatchedBy",i)
h=B.aV(x.S)
for(a6=i,a6=new B.du(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aX(g);a8.C();){f=a8.gS(a8)
e=typeof f=="number"?A.k.N(f):B.ce(J.k(f),null)
if(e!=null)J.cc(h,e)}}a6=h
a6=B.C(a6,B.a6(a6).k("cs.E"))
A.d.fh(a6)
J.aJ(m,"memoryMatched",a6)}d=J.r(m,"wagers")
a0=a2.b(d)?B.a2(d,a3,a5):B.U(a3,a5)
J.aJ(a0,p,r.a.x)
J.aJ(m,"wagers",a0)
w=11
return B.b(C.aRk(r.a.d.b8,q,m),$async$Rf)
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
return B.i($async$Rf,v)},
nc(d){return this.cwX(d)},
cwW(){return this.nc(!1)},
cwX(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$nc=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghQ()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.Fn(),$async$nc)
case 5:w=1
break
case 4:w=6
return B.b(t.Rf(!0),$async$nc)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.Ls(q,s.d.b8,!0),$async$nc)
case 7:o=b7
n=t.P_()
w=o==null?8:9
break
case 8:m=A.k.E(t.Al()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.abN("Time's up \u2014 no progress to pay."),$async$nc)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.ud("Complete! Max payout earned."),$async$nc)
case 17:w=15
break
case 16:w=18
return B.b(t.EP(m,t.Al(),n),$async$nc)
case 18:case 15:case 11:w=19
return B.b(t.I8(),$async$nc)
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
g=s.b(i)?B.a2(i,r,h):B.U(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.a2(f,r,h):B.U(r,h)
d=B.aK(e.h(0,p))
a0=d==null?null:A.k.N(d)
if(a0==null)a0=t.Al()
d=B.aK(e.h(0,j))
a1=d==null?null:A.k.N(d)
if(a1==null)a1=0
a2=A.k.E(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.abN("Time's up \u2014 no progress to pay."),$async$nc)
case 22:w=23
return B.b(t.I8(),$async$nc)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aK((s.b(a3)?B.a2(a3,r,h):B.U(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a2(0)
r=t.b5
if(r!=null)r.a2(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dk_(t,a8,a2))
r=t.a
r.toString
h=A.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.k.ac(a7,2):d+" ("+b1+"/"+b2+")"
r.hJ(new B.d7(h,b0,a9,A.fT,A.fn,d,null,null,A.cs,new B.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.k.ac(a9,2)+" (includes opponent bonus $"+A.k.ac(a7,2)+")":"+$"+A.k.ac(a8,2)+" (your progress payout)"
s=t.a
C.v2(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.Fp(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$nc)
case 24:w=25
return B.b(t.I8(),$async$nc)
case 25:case 1:return B.h(u,v)}})
return B.i($async$nc,v)},
EP(d,e,f){return this.ckN(d,e,f)},
ckN(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$EP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a2(0)
s=t.b5
if(s!=null)s.a2(0)
r=t.a.x*1.46*d
t.m(new C.djE(t,r,d))
s=A.o.u(1000*Date.now())
q=t.a
p=new B.d7(s,q.c.a,r,A.fT,A.fn,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cs,new B.V(Date.now(),0,!1))
B.ahW(p,!0)
t.a.hJ(p)
t.a.bv()
if(t.c==null){w=1
break}o=A.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aia(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cG(t.cy,0,new C.djF()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.k.ac(r,2)+" ("+n+"% \u2014 "+B.w(k)+" mistakes/missed)":"+$"+A.k.ac(r,2)+" ("+n+"% of full prize)"
q=t.a
C.v2(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.Fp(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$EP)
case 3:w=4
return B.b(C.ahO(t.a.f,j),$async$EP)
case 4:case 1:return B.h(u,v)}})
return B.i($async$EP,v)},
c4u(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.Al()
v=o.P_()}catch(u){return}if(v<=0||w<=0)return
t=A.k.E(w/v,0,1)
s=B.og(A.k.ac(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.u(1000*Date.now())
p=o.a
r.hJ(new B.d7(q,p.c.a,s,A.fT,A.fn,"Game partial: "+p.f+" ("+B.w(w)+"/"+B.w(v)+", left early)",n,n,A.cs,new B.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.v2(s,n,"Left early \xb7 +$"+A.k.ac(s,2)+" ("+B.w(w)+"/"+B.w(v)+")",q,r,p,n,!0)},
abM(d,e){return this.bTh(d,e)},
bTh(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$abM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a2(0)
s=t.b5
if(s!=null)s.a2(0)
r=A.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hJ(new B.d7(r,q,p,A.fT,A.fn,"Game payout: "+s+" (draw, stake returned)",null,null,A.cs,new B.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.v2(o,null,"Draw. Your $"+A.k.ac(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Fp(d,"Nobody won, so your $"+A.k.ac(t.a.x,2)+" stake was returned.","DRAW",!1),$async$abM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$abM,v)},
Yw(d,e){return this.bTi(d,e)},
abN(d){return this.Yw(null,d)},
bTi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Yw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a2(0)
s=t.b5
if(s!=null)s.a2(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.v2(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.Fp(d,e,"YOU LOSE",!1),$async$Yw)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yw,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.ao(m,60)
m=A.a.aY(A.o.u(A.o.F(m,60)),2,"0")
v=B.aH(n,n,n,n,A.aqU,n,n,n,new C.dke(d),n,n,n,n,n,n)
if(o.ghQ()){u=o.bD
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.E(B.d(u?t.f+" vs "+B.w(o.bD):t.f,n,2,A.a1,n,n,n,A.fy,n,n,n),1)
r=B.n(10)
q=x.p
r=B.B(B.a([v,s,B.p(n,C.aru(new C.dkf(o),A.oO,t.c.a),A.f,n,n,new B.o(A.cW,n,n,r,n,n,A.n),n,n,n,n,A.h7,n,n,n)],q),A.m,n,A.e,A.i,0,n,n)
t=o.a
s=t.w
v=B.n(10)
s=B.p(n,B.B(B.a([B.E(B.d("Win $"+A.k.ac(t.x*1.46,2)+" \xb7 stake $"+A.k.ac(o.a.x,2)+" \u2022 Progress "+o.Al()+"/"+o.P_(),n,n,n,n,n,n,D.fp_,n,n,n),1),new C.aqE(o.a.c.a,new C.dkg(o),n),A.ad,D.bR1,A.db,B.d(""+w+":"+m,n,n,n,n,n,n,A.nO,n,n,n)],q),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,n,v,n,new B.a9(A.a5,A.a8,A.x,s,n,n),A.n),n,n,n,n,A.h6,n,n,n)
v=o.a.w
m=B.T(v).k("N<1,t>")
m=B.C(new B.N(v,new C.dkh(),m),m.k("ak.E"))
w=B.n(14)
v=B.L(A.aX,A.r,1)
p=C.aR_(n,D.bdm,B.bn(!0,new B.D(Aj.a_F,B.x(B.a([r,s,A.N,new B.fg(new C.dki(o),n),A.am,B.E(B.p(n,o.bTg(),A.f,n,n,new B.o(n,n,v,w,n,new B.a9(A.a5,A.a8,A.x,m,n,n),A.n),n,n,n,n,A.ck,n,n,n),1)],q),A.ak,n,A.e,A.i,0,A.p),n),!0,!1,A.af,!0,!0))
if(!o.c8)return p
m=B.a_(140,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255)
w=B.a_(242,A.iD.l()>>>16&255,A.iD.l()>>>8&255,A.iD.l()&255)
v=B.n(18)
u=B.L(A.aX,A.r,1)
return new B.an(A.a_,n,A.ab,A.t,B.a([p,B.bT(0,B.p(A.A,B.e_(B.p(n,B.x(B.a([D.fb7,A.ae,B.d(o.cL,n,n,n,n,n,n,D.fqw,A.K,n,n),A.am,B.d(o.cl,n,n,n,n,n,n,D.foH,A.K,n,n)],q),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.rH,A.yy,n,n,n),!1,n),A.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c5t(){var w=this.k3
return B.cu(new C.djD(this,w,A.k.cO(this.fr.length/w)))},
bTg(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c5t()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pF,n,n,n),B.d("Words "+o.bk+"/5",n,n,n,n,n,n,A.EA,n,n,n),A.ae,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.a_(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.W,B.bX(A.fI,B.ir(o.ay.length,new C.djl(o),!0,w),A.br,n,6,6),A.aQ,B.bX(A.fI,B.ir(o.ch.length,new C.djm(o),!0,w),A.br,n,8,8),A.aQ,new B.a4(1/0,n,B.im(D.fRo,o.gbIo(),B.fr(n,n,A.aD,n,n,n,n,n,n,A.c,n,n,A.cm,n,n,n,n,n,n,n)),n)],x.p),A.m,n,A.e,A.i,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.at_(m,o.e,new C.djn(o),new C.djo(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.pF,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.EA,n,n,n))
m.push(A.ae)
if(o.a.e==="sequence"){w=o.aB
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(B.eO(A.A,B.d(w,n,n,n,n,n,n,A.n3,A.K,n,n),A.f,A.dz))
m.push(A.aQ)
w=o.x
A.d.v(m,new B.N(w,new C.djp(o),B.T(w).k("N<1,v>")))
return B.x(m,A.m,n,A.e,A.i,0,A.p)}if(m==="puzzle")return B.cu(new C.djq(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.x(B.a([B.d(m,n,n,n,n,n,n,A.pF,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.EA,n,n,n),A.N,B.E(B.kR(1,B.ir(4,new C.djr(o),!0,x.l),2,10,10,n,A.dS,!1),1)],x.p),A.m,n,A.e,A.i,0,A.p)}if(m==="pattern")return B.cu(new C.djs(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dJ,A.dE,A.id,A.t2]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.pF,n,n,n)
w=B.d("Round "+o.b8+"/5",n,n,n,n,n,n,A.EA,n,n,n)
v=o.aH
v===$&&B.c()
s=o.aM
s===$&&B.c()
s=B.a([m,w,A.ae,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aQ],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fr(n,n,B.a_(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.fg,n,n,n,n,n,n,n)
r[q]=new B.D(A.ct,new B.a4(1/0,n,B.im(new B.y(u[q],n,A.cz,n,n,n,n,n,n,n,n,n),new C.djt(o,u,q),m),n),n)}A.d.v(s,r)
return B.x(s,A.m,n,A.e,A.i,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bf:A.cd
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.aaq,A.K,n,n)
v=B.d("Fast taps "+o.a_+"/5",n,n,n,n,n,n,D.flX,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aG(s,A.bZ,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.rY(B.aA(A.c6,B.cY(n,B.x(B.a([w,A.N,v,A.b2,s,A.b2,new B.D(A.Gw,B.d(m,n,n,n,n,n,n,B.l(n,n,B.a_(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.m,n,A.b9,A.i,0,A.p),p,n,A.b5,n,U.BS,n,n,n,n,n,n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbYS(),n,n,n,n,n,n,!1,A.a3))}if(A.d.q(D.RQ,m)&&o.b4!=null){m=o.a.e
w=o.b4
w.toString
return C.icq(m,new C.dju(o),new C.djv(o),o.d,w)}m=o.r
m===$&&B.c()
return B.at(B.d(m,n,n,n,n,n,n,A.df,n,n,n),n,n,n)}}
C.amT.prototype={
R(){return new C.bit()},
cW3(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bit.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=B.aG(a2,A.eh,x.w).w
w=x.p
v=B.a([B.bSC(!1,f.a.r,"INVESTMENT PLANS",e),A.d4],w)
u=a0.x
if(u!=null){t=u.d.bU()
s=A.a.aY(A.o.u(B.bL(t)),2,"0")
r=A.a.b3(A.o.u(B.bC(t)+1),2)
q=B.n(18)
p=B.L(V.G3,A.r,2.2)
o=x.V
n=B.a([new B.ac(0,A.G,B.a_(89,A.rl.l()>>>16&255,A.rl.l()>>>8&255,A.rl.l()&255),A.eU,20),new B.ac(0,A.G,B.a_(102,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.ds,14)],o)
m=B.ap(e,B.p(e,e,A.f,e,e,new B.o(B.a_(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),e,e,e,e,e,A.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=B.n(10)
k=B.L(V.G3,A.r,3.4)
o=B.a([new B.ac(0,A.G,B.a_(166,A.rl.l()>>>16&255,A.rl.l()>>>8&255,A.rl.l()&255),A.dC,10),new B.ac(0,A.G,B.a_(89,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cI,6)],o)
o=B.B(B.a([B.p(e,e,A.f,e,e,new B.o(e,e,k,l,o,new B.a9(A.az,A.aE,A.x,D.dfv,D.cQK,e),A.n),e,42,e,e,e,e,e,56),A.b2,f.b93(a2,!0)],w),A.m,e,A.e,A.i,0,e,e)
l=B.DT(u.a,1,A.a1,D.ftO)
k=u.b
j=u.c
i=B.DT("Making $"+B.dF(k*j)+" Daily",1,A.a1,D.fu2)
h=B.DT(f.b3S(k),1,A.a1,D.fmN)
r=B.B(B.a([B.E(B.x(B.a([D.fKi,B.DT(a0.c,1,A.a1,D.aV_)],w),A.E,e,A.e,A.i,0,A.p),1),B.x(B.a([D.fK4,B.d(s+"/"+r,e,e,e,e,e,e,D.aV_,e,e,e)],w),A.dI,e,A.e,A.i,0,A.p)],w),A.m,e,A.e,A.i,0,e,e)
s=B.p(e,e,A.f,B.a_(89,D.y0.l()>>>16&255,D.y0.l()>>>8&255,D.y0.l()&255),e,e,e,1,e,e,e,e,e,e)
j=B.B(B.a([f.asv("INVESTED","$"+B.dF(k),!0),f.asv("DAILY ROI",A.k.ac(j*100,2)+"%",!0),f.asv("DAYS LEFT",""+(261-u.f)+" d",!0)],w),A.m,e,A.iP,A.i,0,e,e)
k=B.dF(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
A.d.v(v,B.a([D.fQX,A.vp,B.p(e,new B.an(A.a_,e,A.ab,A.t,B.a([m,B.x(B.a([o,A.N,D.fIG,A.bF,l,A.av,i,A.av,h,A.N,r,A.am,s,A.am,j,A.av,B.DT("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,A.a1,D.ft9)],w),A.E,e,A.e,A.P,0,A.p)],w),e),A.f,e,e,new B.o(e,e,p,q,n,D.c6d,A.n),e,e,e,e,A.bD,e,e,1/0),A.a9N],w))}v.push(D.fAl)
v.push(A.vp)
A.d.v(v,new B.N(a1,new C.dnU(f,a2),B.T(a1).k("N<1,v>")))
return B.c6(e,A.L,B.bn(!1,B.ci(B.x(v,A.E,e,A.e,A.i,0,A.p),A.t,e,A.y,e,new B.Q(20,10,20,124+d.r.d),e,e,A.ah),!0,!1,A.af,!0,!0),e,!1,!1,e,e)},
b93(d,e){var w=null,v=B.a_(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.n(8),t=B.L(A.jS,A.r,1)
return B.p(w,B.B(B.a([B.X(A.aoP,A.c,w,w,w,16),A.db,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eJ,w,w,w)},
b3S(d){var w=A.a.aY(A.o.u(A.k.V(d*100)),4,"0")
return"****  ****  ****  "+A.a.b3(w,w.length-4)},
asv(d,e,f){var w=null,v=B.a_(217,D.y0.l()>>>16&255,D.y0.l()>>>8&255,D.y0.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.x(B.a([v,A.bF,B.DT(e,w,w,B.l(w,w,E.By,w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.E,w,A.e,A.i,0,A.p)},
cmU(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd_J(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
a0=B.n(18)
w=B.L(A.aP,A.r,2)
p=x.V
o=B.a([new B.ac(0,A.G,B.a_(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.TF,16),new B.ac(0,A.G,B.a_(115,A.al.l()>>>16&255,A.al.l()>>>8&255,A.al.l()&255),A.ds,14),new B.ac(0,A.G,B.a_(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.cI,8)],p)
n=B.ap(d,B.p(d,d,A.f,d,d,new B.o(d,d,d,d,d,new B.c_(A.A,0.5,A.x,d,0,B.a([B.a_(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.a_(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.n(5)
l=B.L(A.c,A.r,2.2)
k=B.b1(4286436348)
k=B.a_(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.a_(A.k.V(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.b1(4279150057)
h=x.p
p=B.B(B.a([new B.a4(44,44,new B.an(A.a_,d,A.ab,A.f,B.a([B.ap(d,B.eM(A.A,0.7853981633974483,B.p(d,d,A.f,d,d,new B.o(d,d,l,m,B.a([new B.ac(0.5,A.G,k,A.I,14),new B.ac(0,A.G,j,A.I,6),new B.ac(0,A.G,B.a_(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.u(0,2),4)],p),D.c4O,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.evl],h),d),d),A.b2,e.b93(b2,!0)],h),A.m,d,A.e,A.i,0,d,d)
a6=B.DT(a6,1,A.a1,D.fje)
i=B.DT(e.b3S(a3),1,A.a1,D.fyB)
j=B.B(B.a([e.b3i(A.k.ac(2.86,2)+"%"),A.ec,e.b3i("261d")],h),A.m,d,A.e,A.i,0,d,d)
k=B.E(B.x(B.a([D.fBH,B.DT("$"+B.dF(a3),1,A.a1,D.fxm)],h),A.E,d,A.e,A.i,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.B(B.a([k,B.d(m,d,d,d,d,d,d,D.fk3,d,d,d)],h),A.dI,d,A.e,A.i,0,d,d)
k=B.p(d,d,A.f,B.a_(89,A.bt.l()>>>16&255,A.bt.l()>>>8&255,A.bt.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.B(B.a([B.E(e.azP("Daily","$"+B.dF(a4)),1),A.ec,B.E(e.azP("Total","$"+B.dF(a4*261)),1),A.ec,B.E(e.azP("Days","261"),1)],h),A.m,d,A.e,A.i,0,d,d)
g=q?d:new C.dnT(e,b3,a3,t)
f=A.k.V(127.5)
f=B.fr(d,d,A.bo,B.a_(f,A.al.l()>>>16&255,A.al.l()>>>8&255,A.al.l()&255),B.a_(f,A.aN.l()>>>16&255,A.aN.l()>>>8&255,A.aN.l()&255),d,3,d,d,A.aP,d,d,d,d,new B.b8(B.n(10),D.b3q),d,d,d,d,d)
return B.p(d,new B.an(A.a_,d,A.ab,A.f,B.a([n,B.x(B.a([p,A.bF,D.fL1,A.bF,a6,A.cS,i,A.fG,j,A.fG,m,A.fG,k,A.fG,l,A.N,new B.a4(1/0,40,B.im(B.eO(A.A,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fkx,d,d,d),A.f,A.e3),g,f),d)],h),A.E,d,A.e,A.P,0,A.p)],h),d),A.f,d,d,new B.o(d,d,w,a0,o,D.c6N,A.n),d,d,d,A.kM,D.bAi,d,d,1/0)},
b3i(d){var w=null,v=B.a_(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.n(5),t=B.L(A.cq,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.fjE,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.C7,w,w,w)},
azP(d,e){var w=null,v=B.a_(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.n(7),t=B.L(A.aN,A.r,1)
return B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,D.ftx,w,w,w),A.vq,B.eO(A.a5,B.d(e,w,w,w,w,w,w,D.fwn,w,w,w),A.f,A.dz)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.mb,w,w,w)}}
C.aj0.prototype={
R(){var w=null,v=B.a([],x._),u=$.aw()
return new C.ayG(v,new B.au(A.at,u),new B.au(A.at,u),B.mT(0,w,w),new B.hY(),D.T9,C.ahL(),B.a([],x.fw),B.aV(x.N),B.mT(0,w,w))}}
C.ayG.prototype={
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a
w.toString
r.d=0
v=B.A0(0,1)
r.e!==$&&B.aQ()
r.e=v
r.ay=w.f.aH
w=r.k3=B.bp(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t].a
if(s.length!==0)u.M(0,s)}r.adc()
r.Pl()
r.as6()
r.czW()
r.cAb()
$.aW.x1$.push(new C.cL_(r))
r.a.toString},
Pl(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ar6(),$async$Pl)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cKk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pl,v)},
gaBt(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPg())return!0
return!1},
gPg(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaWY(){var w,v=this.CW
if(v==null)return A.bC
w=v.bF(new B.V(Date.now(),0,!1))
return w.a<0?A.bC:w},
bDQ(){var w=this
if(w.a.c.w)return
if(w.gPg()){if(!w.cx)w.m(new C.cKa(w))}else if(w.cx)w.m(new C.cKb(w))},
ct7(){this.m(new C.cKu(this))},
um(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$um=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cKr(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cKs(t))
w=1
break}w=3
return B.b(C.cf_(o.a,s),$async$um)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.cf0(t.a.c.a,s),$async$um)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cKt(t,r,q))
t.cC4()
t.bDQ()
if(r===3)t.ZA(r)}case 1:return B.h(u,v)}})
return B.i($async$um,v)},
ZA(d){return this.c5k(d)},
c5k(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bFP(q,r,new C.cKm(t),d,s.c.a),$async$ZA)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZA,v)},
xK(d){return this.bFm(d)},
as6(){return this.xK(!1)},
bFm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a8F(k,C.hB0(l.d)),$async$xK)
case 3:j=m
w=4
return B.b(C.cfp(k),$async$xK)
case 4:s=j.a=f
w=5
return B.b(B.arW(k),$async$xK)
case 5:r=f
w=!s.a&&J.cL(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.W2(!0,l,q,p)
m.a=s
w=8
return B.b(C.ar8(k,s),$async$xK)
case 8:case 7:w=9
return B.b(C.V5(k),$async$xK)
case 9:o=f
w=10
return B.b(C.a81(k),$async$xK)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cKc(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$xK,v)},
QL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$QL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Pl(),$async$QL)
case 3:s=t.c
if(s==null){w=1
break}r=B.ej(new C.cKp(t),!1,null,x.H)
w=4
return B.b(B.a5(s,!1).cc(r),$async$QL)
case 4:w=5
return B.b(t.Pl(),$async$QL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$QL,v)},
cEc(){this.m(new C.cKN(this))},
cAb(){var w=this,v=w.go
if(v!=null)v.a2(0)
if(w.a.c.w)return
w.go=B.df(A.rE,new C.cKH(w))},
cC4(){var w=this,v=w.id
if(v!=null)v.a2(0)
w.id=null
if(!w.gPg()||w.CW==null)return
w.id=B.df(A.fB,new C.cKK(w))},
czW(){var w=this,v=w.fy
if(v!=null)v.a2(0)
w.fy=B.df(A.jz,new C.cKG(w))
w.Fv()},
Fv(){return this.cC3()},
cC3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Fv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aH
t=4
w=7
return B.b(B.az(),$async$Fv)
case 7:q=e
p=B.aS(J.r(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.X.aN(0,p,null)
if(x.f.b(o)){m=B.DE(B.a2(o,x.N,x.z)).aH
i.a=m
r.a.f.aH=m}}w=10
return B.b(B.LE(),$async$Fv)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aQZ(),$async$Fv)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aH=l
w=14
return B.b(q.ar("String","app_config",A.X.aq(k.ah(),null)),$async$Fv)
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
break}if(i.a!==r.ay)r.m(new C.cKI(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Fv,v)},
b7M(){A.d.aX(this.f,new C.cKF())},
adc(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Ny(t.a.c.a),$async$adc)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cL(q)){A.d.v(s,q)
A.d.aX(s,new C.cKh())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.H(["role","ai","text",r,"at",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z))}t.m(new C.cKi(t,s))
t.a2q(!0)
B.bP(A.ji,new C.cKj(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$adc,v)},
agV(){var w=0,v=B.j(x.H),u=this
var $async$agV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aoG(u.a.c.a,u.f),$async$agV)
case 2:return B.h(null,v)}})
return B.i($async$agV,v)},
bz(d){this.bH(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a2(0)
u=v.go
if(u!=null)u.a2(0)
u=v.id
if(u!=null)u.a2(0)
u=v.r
w=$.aw()
u.T$=w
u.P$=0
u=v.w
u.T$=w
u.P$=0
v.ok.t()
v.x.t()
u=v.e
u===$&&B.c()
u.t()
v.a1()},
ac9(d){var w,v=this
v.m(new C.cKf(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.Bl(d,A.cu,A.kL)
else $.aW.x1$.push(new C.cKg(v,d))
if(d===0)v.a2q(!0)
if(d===1)v.cvc(!0)},
a2q(d){$.aW.x1$.push(new C.cKx(this,d))},
aB6(){return this.a2q(!1)},
a1I(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.a1U(),$async$a1I)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.m(new C.cKq(t))
case 1:return B.h(u,v)}})
return B.i($async$a1I,v)},
nb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$nb=B.e(function(c8,c9){if(c8===1){s.push(c9)
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
return B.b(C.ar1(a9.a,b0),$async$nb)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.um(),$async$nb)
case 10:q.m(new C.cKy(q))
w=1
break
case 8:w=11
return B.b(q.um(),$async$nb)
case 11:if(q.c!=null&&q.ch===3)q.ZA(3)
case 6:case 4:q.m(new C.cKz(q,c5))
C.US(q.a.c.a,"user",c5)
q.aB6()
t=13
a8={}
w=16
return B.b(q.a1I(),$async$nb)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.a1U(),$async$nb)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cKA(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bDV("",null)
q.m(new C.cKB(q,p))
C.US(q.a.c.a,"ai",p)
q.aB6()
r=[1]
w=14
break}o=B.nk(a9)
a9=q.a
n=""
m=C.hB0(a9.d)
w=C.hAU(c5)?20:21
break
case 20:w=22
return B.b(C.cfo(q.a.c.a),$async$nb)
case 22:q.db=c9
w=23
return B.b(q.xK(!0),$async$nb)
case 23:case 21:w=24
return B.b(B.a8F(q.a.c.a,m),$async$nb)
case 24:l=c9
k=C.hTe(l)
a9=k
b2=Date.now()
b3=new B.V(b2,0,!1).bU()
b2=A.a.aY(A.o.u(B.bL(b3)),2,"0")
b4=A.a.aY(A.o.u(B.bW(b3)),2,"0")
b5=A.a.aY(A.o.u(B.dh(b3)),2,"0")
b6=A.a.aY(A.o.u(B.fS(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bC(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.V5(q.a.c.a),$async$nb)
case 25:i=c9
h=C.hkM(i,25)
w=26
return B.b(C.a81(q.a.c.a),$async$nb)
case 26:g=c9
f=C.hmq(g)
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
return B.b(C.ahM(a9,q.a.c.a,c5),$async$nb)
case 27:a0=c9
a1=""
if(C.hAU(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.w(d)
b4=B.w(j)
b5=q.a.c.w?"\n"+C.ifg(m)+"\n":""
b6=J.ad(n)!==0?"\n"+B.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+B.w(a0)+"\n":""
c0=B.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hNy(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.w(c5)
w=28
return B.b(B.re(o,a2,A.hU,null,null),$async$nb)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bDV(a8.a,a3.a)
a4=c2
a5=B.hAg(a4)
c3=a5.a
a8.b=c3
if(A.d.gan(c3)){a9=B.C(C.ii_(c5),x.an)
a6=a9
J.ha(a6,C.ii0(c5))
J.ha(a6,C.ii1(c5))
J.ha(a6,B.hzI(c5))
J.ha(a6,C.ii4(c5,q.a.c.w))
a8.b=a6}c3=C.ihd(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.ai2(c3,a6,m,q.a.c.a),$async$nb)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cKC(a8,q,a7))
C.US(q.a.c.a,"ai",a7)
if(J.cL(a8.b)&&q.c!=null)q.Kh(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cKD(q))
C.US(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cKE(q))
q.aB6()
q.agV()
if(!q.a.c.w)q.um()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$nb,v)},
clQ(d){var w=B.U(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
clR(d){var w,v,u,t,s,r,q,p=J.r(d,"phoneActions")
if(!x.j.b(p))return A.iO
w=B.a([],x.Z)
for(v=J.aX(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gS(v)
if(u.b(r)){q=B.civ(B.a2(r,t,s))
if(q!=null)w.push(q)}}return w},
Kh(d){return this.ctH(d)},
ctH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Kh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aX(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gS(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.ahY(p,o,new C.cKv(t,p)),$async$Kh)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.Hd(p,null,o,!1,!0,t.a.c.a),$async$Kh)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
p.U(new B.b2(new B.y(m,null,null,null,null,null,null,null,null,null,null,null),A.cd,null,null,null,null,null,null,null,null,null,null,null,A.lF,!1,null,null,null,A.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.Hd(p,l.f,o,k,n,j),$async$Kh)
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
return B.b(C.b_c(p,B.a([new C.rK("out_"+1000*o,new B.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Kh)
case 14:t.as6()
case 13:p=t.c.L(r).f
p.U(new B.b2(new B.y(m,null,null,null,null,null,null,null,null,null,null,null),A.cT,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kh,v)},
Sv(d){return this.cCx(d)},
cCx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Sv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.ahY(d,n,new C.cKM(t)),$async$Sv)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.Hd(d,null,n,!1,!0,t.a.c.a),$async$Sv)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b3(null,null,null,A.cd,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.lF,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.Hd(d,q.f,r,p,n,o),$async$Sv)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(B.b3(null,null,null,A.cT,null,A.t,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Sv,v)},
cvc(d){$.aW.x1$.push(new C.cKw(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.R(d).ax.a===A.J,j=k?A.dd:A.BH,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.aja,D.bkh],w):B.a([A.aM,A.xW],w)
v=B.n(22)
u=B.a([new B.ac(0,A.G,B.a_(71,A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255),A.cy,16)],x.V)
t=m.a.c.w?m.gchs():l
s=B.a_(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.L(A.bU,A.r,1.5)
t=B.aA(l,B.p(l,C.hal(m.a.f.Q,48),A.f,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.a3)
r=B.d("NGMY Helper",l,1,A.a1,l,l,l,A.de,l,l,l)
s=B.p(l,l,A.f,l,l,D.b5w,l,8,l,l,l,l,l,8)
if(m.gaBt()&&m.d===0)q=m.gPg()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.B(B.a([t,A.bd,B.E(B.x(B.a([r,A.bF,B.B(B.a([s,A.bm,B.E(B.d(q,l,1,A.a1,l,l,l,B.l(l,l,B.a_(A.k.V(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cA,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.m,l,A.e,A.i,0,l,l)],p),A.E,l,A.e,A.i,0,A.p),1),B.aH(l,l,l,l,A.mT,l,l,l,new C.cKS(d),l,l,l,l,l,l)],p),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(l,l,l,v,u,new B.a9(A.az,A.aE,A.x,w,l,l),A.n),l,l,l,F.al8,D.bB1,l,l,l)
v=k?D.tP:A.c
u=B.n(14)
t=B.L(k?A.bz:A.e2,A.r,1)
u=B.p(l,B.B(B.a([m.bI9(),m.cCg(1,A.lc,"Music")],p),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.ev,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaBt()){v=B.a([],p)
if(m.gPg()){s=B.a_(38,A.cT.l()>>>16&255,A.cT.l()>>>8&255,A.cT.l()&255)
r=B.n(12)
q=B.L(B.a_(115,A.cT.l()>>>16&255,A.cT.l()>>>8&255,A.cT.l()&255),A.r,1)
v.push(new B.D(A.NK,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hRw(m.gaWY())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fvP,A.K,l,l),A.f,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.eB,l,l,1/0),l))}if(m.cy&&!m.gPg()){s=B.a_(31,A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255)
r=B.n(12)
q=B.n(12)
o=B.X(A.ko,k?A.ir:A.hi,l,l,l,16)
v.push(new B.D(A.NK,B.aI(!1,A.a2,!0,r,B.aO(!1,q,!0,new B.D(A.eB,B.B(B.a([o,A.bm,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.ir:A.hi,l,l,l,l,l,l,l,l,12,l,l,A.U,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.m,l,A.b9,A.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gct6(),l,l,l,l,l,l,l),A.f,s,0,l,l,l,l,l,A.ai),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcEb():l
v.push(B.E(new C.ar4(s,q,new C.cKT(),r,o,l),1))
v=B.x(v,A.m,l,A.e,A.i,0,A.p)}else v=m.bIa(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hnm(r)
t=B.a([w,A.ae,new B.D(A.hQ,u,l),A.N,B.E(B.hok(B.a([v,new C.ar7(q,o,n,new C.cKU(m,d),s,l)],p),A.t,t,A.y,new C.cKV(m),l),1)],p)
if(m.d===0&&!m.gaBt()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a5a:D.a4s
w.push(new B.a4(l,36,B.hS(l,new C.cKW(m),v.length,l,l,A.aL,new C.cKX(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.N)
v=m.r
u=B.l(l,l,k?A.c:A.bk,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aC:A.dL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.w:A.c
r=B.a_(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.n(22)
o=B.n(22)
n=k?A.aX:A.fj
u=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),v,l,l,l,l,l,2,B.bs(l,new B.b5(4,q,A.a0),l,A.C0,l,l,l,l,!0,new B.b5(4,o,new B.ay(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cKY(m),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a4,l,A.an,l,A.aTM,l,l),1)
s=m.at
r=s?l:m.gcwd()
w.push(B.B(B.a([u,new B.Jp(v,A.aM,l),A.bm,B.aI(!1,A.a2,!0,l,B.aO(!1,l,!0,new B.a4(44,44,s?D.eo9:T.aqM,l),A.cO,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.f,A.aM,0,l,l,A.cO,l,l,A.ai)],p),A.dI,l,A.e,A.i,0,l,l))
w=B.x(w,A.m,l,A.e,A.P,0,A.p)
v=k?A.lB:A.c
t.push(B.us(A.tE,B.p(l,new B.D(A.Gz,w,l),A.f,l,l,new B.o(v,l,B.L(k?B.a_(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a_(18,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.r,1),A.tE,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.WR(i,new C.cKZ(m),B.c6(l,j,B.bn(!0,B.x(t,A.m,l,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),l,!1,!1,l,l),l)},
bI9(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.R(p).ax.a===A.J
if(w)p=B.a_(A.k.V(255*(v?0.25:0.12)),A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255)
else p=A.L
u=B.n(11)
t=w?B.L(B.a_(A.k.V(127.5),A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255),A.r,1):q
s=B.X(A.uy,w?A.aM:A.cY,q,q,q,17)
if(w)r=v?A.c:A.au
else r=A.cY
return B.E(B.aA(q,B.cY(q,B.B(B.a([s,A.bm,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.b9,A.i,0,q,q),q,q,A.b5,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.rF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cKd(this),q,q,q,q,q,q,!1,A.a3),1)},
cCg(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.R(p).ax.a===A.J
if(w)p=B.a_(A.k.V(255*(v?0.25:0.12)),A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255)
else p=A.L
u=B.n(11)
t=w?B.L(B.a_(A.k.V(127.5),A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255),A.r,1):q
s=B.X(e,w?A.aM:A.cY,q,q,q,17)
if(w)r=v?A.c:A.au
else r=A.cY
r=B.a([s,A.bm,B.d(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.E(B.aA(q,B.cY(q,B.B(r,A.m,q,A.b9,A.i,0,q,q),q,q,A.b5,new B.o(p,q,t,u,q,q,A.n),A.eH,q,q,q,q,A.rF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cKL(this,d),q,q,q,q,q,q,!1,A.a3),1)},
bIa(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bqt:B.a_(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.n(18)
v=B.L(d?A.dr:A.aN,A.r,1)
u=q===0?1:q
return B.p(s,B.kl(!0,s,t.ok,new C.cKe(t,e,d),u,s,A.bQ,s,s,!1,!1),A.f,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.hQ,s,s,s,s)},
aQo(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.A(n.h(d,"role"),"user"),l=m?A.iO:this.clR(d),k=m?A.mk:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.v(i,B.a([new B.a4(28,28,C.hal(this.a.f.Q,28),o),A.ad],j))
w=m?A.dI:A.E
j=B.a([],j)
if(h)j.push(D.eor)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aM
else u=e?A.Zk:A.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.L(e?A.bz:A.aN,A.r,1)
q=B.a([new B.ac(0,A.G,B.a_(10,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.dC,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aC:A.dL,o,o,o,o,o,o,o,o,12,A.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ac:A.bo
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.h6d(m,B.p(o,n,A.f,o,o,new B.o(u,o,r,new B.bh(A.jK,A.jK,new B.aP(t,t),new B.aP(s,s)),q,o,A.n),o,o,o,o,Ae.wb,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.hAl(l,e,this.gcCw()))
i.push(new B.ds(1,A.cn,B.x(j,w,o,A.e,A.i,0,A.p),o))
if(m)i.push(A.db)
return new B.D(A.d1,B.B(i,A.dI,o,k,A.i,0,o,o),o)},
bI8(d,e){return this.aQo(d,e,!1)}}
C.aLY.prototype={
Z(){this.a3()
$.z2().aT(0,this.gEJ())},
t(){$.z2().a5(0,this.gEJ())
this.a1()}}
C.aLZ.prototype={
Z(){this.a3()
$.z2().aT(0,this.gEJ())},
t(){$.z2().a5(0,this.gEJ())
this.a1()}}
C.aM_.prototype={
Z(){this.a3()
$.z2().aT(0,this.gEJ())},
t(){$.z2().a5(0,this.gEJ())
this.a1()}}
C.aMV.prototype={
Z(){this.a3()
$.z2().aT(0,this.gEJ())},
t(){$.z2().a5(0,this.gEJ())
this.a1()}}
C.WH.prototype={
a6(){return"NgmySnapshotResolveOutcome."+this.b}}
C.aoq.prototype={
R(){return new C.aDK()}}
C.aDK.prototype={
Z(){var w,v=this
v.a3()
w=v.a
v.d=w.d
v.e=B.bp(w.e,!0,x.o)
v.f=v.a.f},
le(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Ay(d,e){return this.cHS(d,e)},
cHS(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ay=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dEm(q,e))
t=3
w=6
return B.b(d.$0(),$async$Ay)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dEn(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ay,v)},
AY(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$AY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.v5(r,q),$async$AY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dEd(t,s))
case 1:return B.h(u,v)}})
return B.i($async$AY,v)},
aaE(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$aaE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AY(),$async$aaE)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.On(s,B.Kv(B.c2L(r,q,s,p).f_(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaE,v)},
Yg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Yg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pr(s,t.a.c,!1),$async$Yg)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.Ay(new C.dEb(t),"Preparing download\u2026"),$async$Yg)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yg,v)},
ZM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ZM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.pr(s,t.a.c,!1),$async$ZM)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.Ay(new C.dEl(t),"Creating QR code\u2026"),$async$ZM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZM,v)},
ZL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i9W(r),$async$ZL)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.Ay(new C.dEa(t,s),"Looking up code\u2026"),$async$ZL)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZL,v)},
ae5(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ae5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.xB.ca().MA(A.Sa,A.us,!0),$async$ae5)
case 7:r=e
p=r
q=p==null?null:J.fv(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aG.gan(p)}else p=!1
if(p){p=q.c
p.toString
p=B.jG(p,0,null)
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
case 6:u=B.H9()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae5,v)},
Ac(d,e,f){return this.bKs(d,e,f)},
aRD(d,e){return this.Ac(d,!1,e)},
bKr(d){return this.Ac(d,!1,!1)},
bKs(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ac=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AY(),$async$Ac)
case 3:if(t.c==null){w=1
break}if(!C.c2Q(d,t.a.c,null)){t.le(C.c2R(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hNf(d,s)}if(s){t.le(y.B)
w=1
break}r=d.as
q=J.ct(r)
s=t.c
s.toString
w=4
return B.b(C.ia8(s,q,t.a.c,d),$async$Ac)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.m0(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rO(s,p,r,!1,null,null,d.ax),$async$Ac)
case 5:if(t.c==null){w=1
break}t.m(new C.dE9(t,p,r,d))
t.le("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$Ac,v)},
ae4(){var w=0,v=B.j(x.H),u=this
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.Ay(new C.dEc(u),"Reading file\u2026"),$async$ae4)
case 2:return B.h(null,v)}})
return B.i($async$ae4,v)},
Xz(d){return this.bLK(d)},
bLK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Xz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.d7("local_qr_dep_"+1000*r,q.a,d,A.fH,A.fn,"Admin deposit ($"+B.dF(d)+")",null,null,A.cs,new B.V(Date.now(),0,!1))
C.chp(t.d,s)
q=t.e
q===$&&B.c()
r=B.C(q,x.o)
r.push(s)
w=3
return B.b(B.rO(t.a.c,t.d,r,!0,null,null,null),$async$Xz)
case 3:w=4
return B.b(t.AY(),$async$Xz)
case 4:if(t.c==null){w=1
break}t.le("Deposited $"+B.dF(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Xz,v)},
b7a(d){var w=null
return B.ch(w,w,!0,w,new C.dEj(),d,w,!0,!0,x.N)},
WD(d){return this.bDK(d)},
bDK(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$WD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Xz(d.b),$async$WD)
case 5:w=1
break
case 4:s=d.c
t.le(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$WD,v)},
F3(d){return this.cqJ(d)},
cqJ(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$F3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AY(),$async$F3)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.b25(d,t.a.c),$async$F3)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.le("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.le(y.y)
u=!0
w=1
break}if(s.c){t.le(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return B.b(t.b7a(r),$async$F3)
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
return B.b(C.chi(d,o,n.a,r,p),$async$F3)
case 7:w=6
return B.b(t.WD(f),$async$F3)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$F3,v)},
F4(d){return this.cqK(d)},
cqK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$F4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AY(),$async$F4)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.chh(d,t.a.c),$async$F4)
case 4:s=f
if(!s.a){t.le(y.m)
w=1
break}if(s.b){t.le("This deposit code was already used.")
w=1
break}if(s.d){t.le(y.y)
w=1
break}if(s.c){t.le(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return B.b(t.b7a(r),$async$F4)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Wl(o,n.a,d,r,p),$async$F4)
case 7:w=6
return B.b(t.WD(f),$async$F4)
case 6:case 1:return B.h(u,v)}})
return B.i($async$F4,v)},
PA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.Dl()){t.le("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a5(s,!1).cc(B.ej(new C.dEe(),!0,null,x.N)),$async$PA)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a0(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.Ay(new C.dEf(t,r),"Applying deposit\u2026"),$async$PA)
case 6:w=1
break
case 5:w=7
return B.b(t.Ay(new C.dEg(t,r),"Loading\u2026"),$async$PA)
case 7:case 1:return B.h(u,v)}})
return B.i($async$PA,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.R(d).ax.a===A.J,m=n?A.jw:A.qa,l=n?A.c:A.O,k=n?A.aR:A.al,j=n?A.bz:A.w.j(0.06),i=x.p
j=B.B(B.a([B.aO(!1,o,!0,B.p(A.A,B.X(A.eK,l,o,o,o,16),A.f,o,o,new B.o(j,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cO,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dEo(d),o,o,o,o,o,o,o)],i),A.m,o,A.e,A.i,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cA,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.E(new C.a1b(D.bOr,"Download",E.a5p,u?o:p.gbRk(),o),1)
t=B.B(B.a([t,A.es,B.E(new C.a1b(A.jG,"Show QR",D.dvL,u?o:p.gc72(),o),1)],i),A.m,o,A.e,A.i,0,o,o)
u=p.r
s=B.E(new C.a1b(D.bOs,"Upload",A.a4Q,u?o:p.gc70(),o),1)
s=B.B(B.a([s,A.es,B.E(new C.a1b(A.jk,"Scan QR",D.d4d,u?o:p.gc71(),o),1)],i),A.m,o,A.e,A.i,0,o,o)
u=p.r?o:p.gc7_()
r=n?A.c.j(0.06):A.aW.j(0.08)
q=B.n(16)
q=B.a([B.cl(B.a([j,A.aB,w,A.N,v,A.kX,t,A.aB,s,A.aB,new C.bu_(A.rQ,"Enter Code",A.a47,u,o),A.kX,B.p(o,B.B(B.a([B.X(A.ho,A.aW,o,o,o,18),A.as,B.E(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a7,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.E,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.jj,o,o,o)],i),o,o,Ad.NY,o,o,A.ah,!1)],i)
if(p.r){j=n?A.iz:A.c
w=p.w
if(w==null)w="Working\u2026"
q.push(B.ap(0,B.aI(!1,A.a2,!0,o,new B.D(A.C3,B.B(B.a([I.aSM,A.bd,B.E(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.m,o,A.e,A.i,0,o,o),o),A.f,j,8,o,o,o,o,o,A.ai),o,o,0,0,o,o))}return B.c6(o,m,B.bn(!1,new B.an(A.a_,o,A.ab,A.t,q,o),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.a1b.prototype={
B(d){var w=this,v=null,u=B.n(22),t=B.n(22),s=w.e,r=B.n(22),q=B.a([new B.ac(0,A.G,A.d.gak(s).j(0.35),A.ds,16)],x.V),p=A.c.j(0.22)
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(v,B.x(B.a([B.p(v,B.X(w.c,A.c,v,v,v,30),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.ae,B.d(w.d,v,v,v,v,v,v,A.tv,v,v,v)],x.p),A.m,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(v,v,v,r,q,new B.a9(A.az,A.aE,A.x,s,v,v),A.n),v,140,v,v,A.bQ,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.bu_.prototype={
B(d){var w=this,v=null,u=B.n(22),t=B.n(22),s=w.e,r=B.n(22),q=B.a([new B.ac(0,A.G,A.d.gak(s).j(0.35),A.ds,16)],x.V),p=A.c.j(0.22)
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(v,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,24),A.f,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.es,B.d(w.d,v,v,v,v,v,v,A.tv,v,v,v)],x.p),A.m,v,A.b9,A.i,0,v,v),A.f,v,v,new B.o(v,v,v,r,q,new B.a9(A.az,A.aE,A.x,s,v,v),A.n),v,v,v,v,D.bDc,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.a_O.prototype={
R(){return new C.bkW()}}
C.bkW.prototype={
gaxD(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a3()
w.Rr()
w.f=B.df(A.of,new C.dEs(w))},
t(){var w=this.f
if(w!=null)w.a2(0)
this.a1()},
Rr(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Rr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.v5(q.e,q.f),$async$Rr)
case 3:q=e.a
s=B.c2L(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.On(t.a.e,B.Kv(s.f_(),null,"  ")),$async$Rr)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dEp(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Rr,v)},
B(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.jw:A.qa,s=u?A.iz:A.c,r=u?A.c:A.bk,q=B.eI(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aVS,v,v,v,1,v,!0),p=B.n(24),o=B.L(A.aW.j(0.35),A.r,1),n=w.d,m=B.q6(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gaxD(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.n(20),j=A.aW.j(0.12),i=B.n(20),h=x.p
i=B.aO(!1,k,!0,B.p(v,B.B(B.a([B.X(A.fQ,A.aW,v,v,v,14),A.bm,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aW,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.m,v,A.e,A.P,0,v,v),A.f,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.mL,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dEq(w,d),v,v,v,v,v,v,v)
return B.c6(q,t,new B.D(A.aa,B.x(B.a([B.E(B.p(v,B.x(B.a([A.N,m,A.bx,l,A.N,i,A.aB,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aR:A.al,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.K,v,v)],h),A.m,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.aa,v,v,1/0),1),A.aQ,new B.a4(1/0,v,B.bI(A.Ax,v,new C.dEr(d),B.bo(A.aW,v,v,v,v,A.h0,v,v,v,v,v,v)),v)],h),A.m,v,A.e,A.i,0,A.p),v),v,!1,!1,v,v)}}
C.a_P.prototype={
R(){return new C.bkX(B.zF(A.yh,A.nV,A.uT))}}
C.bkX.prototype={
t(){this.d.t()
this.a1()},
B(d){var w=null
return B.c6(B.eI(w,w,w,!0,!0,A.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fRj,w,w,w,1,w,!0),A.w,B.zE(this.d,A.bY,new C.dEt(this,d)),w,!1,!1,w,w)}}
C.af6.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.R(a0).ax.a===A.J,k=l?A.iz:A.c,j=l?A.c:A.O,i=l?A.aR:A.al,h=l?A.aX:A.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.n(26)
w=B.L(A.aW.j(0.35),A.r,1)
v=B.a([new B.ac(0,A.G,A.aW.j(0.16),A.kv,36)],x.V)
u=B.p(m,D.bUw,A.f,m,m,new B.o(m,m,m,B.n(18),A.a5o,D.c49,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.K,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.K,m,m)
r=l?A.jw:A.qa
q=B.n(18)
p=B.L(A.aW.j(0.22),A.r,1)
o=x.p
g=B.a([new C.QI("Account",A.a.i(this.d),i,j,m),A.W,new C.QI("Balance","$"+B.dF(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.v(g,B.a([A.W,new C.QI("Investment",d,i,j,m)],o))
g.push(A.W)
g.push(new C.QI("Saved on",""+B.bL(f)+"/"+B.bW(f)+"/"+B.bC(f),i,j,m))
g.push(A.W)
g.push(new C.QI("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.x(g,A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.bQ,m,m,1/0)
r=A.ay.j(l?0.14:0.12)
q=B.n(14)
p=B.L(A.ay.j(0.35),A.r,1)
n=B.X(A.ww,l?A.aT:A.d0,m,m,m,16)
return B.eU(m,A.L,new B.cU(A.Xi,B.c4(new B.D(A.yA,B.x(B.a([u,A.aQ,t,A.N,s,A.bx,g,A.aB,B.p(m,B.B(B.a([n,A.ad,B.E(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bM:A.iq,m,m,m,m,m,m,m,m,11.5,m,m,A.U,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.E,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.eB,m,m,1/0),A.d4,B.B(B.a([B.E(B.dT(A.nP,new C.f3z(a0),B.dj(m,m,m,m,m,m,m,m,m,j,m,m,A.cm,m,new B.b8(B.n(14),A.a0),new B.ay(h,1,A.r,-1),m,m,m,m)),1),A.as,B.E(B.bI(D.fzC,m,new C.f3A(a0),B.bo(A.aW,m,m,m,m,m,A.cm,m,new B.b8(B.n(14),A.a0),m,m,m)),2)],o),A.m,m,A.e,A.i,0,m,m)],o),A.m,m,A.e,A.P,0,A.p),m),new B.o(k,m,w,e,v,m,A.n),A.bh),m),m,m,m,A.eu,A.d8,m,m,m)}}
C.QI.prototype={
B(d){var w=this,v=null
return B.B(B.a([new B.a4(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.E(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.E,v,A.e,A.i,0,v,v)}}
C.ZV.prototype={
R(){return new C.aAY(new B.au(A.at,$.aw()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aAY.prototype={
Z(){this.a3()
$.aW.x1$.push(new C.ddq(this))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a1()},
c74(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a5(v,!1).O(w)
return null},
B(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.iz:A.c,s=u?A.c:A.O,r=u?A.aR:A.al,q=u?A.jw:A.qa,p=u?A.aX:A.e2,o=B.n(24),n=B.L(A.aW.j(0.35),A.r,1),m=B.a([new B.ac(0,A.G,A.aW.j(0.18),A.h_,32)],x.V),l=B.p(v,Ac.aru,A.f,v,v,new B.o(v,v,v,B.n(18),A.a5o,D.c6X,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.K,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.K,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.H,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uM(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.btu(new C.ddn())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.U,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eU(v,A.L,new B.cU(A4.LE,B.c4(new B.D(A.yA,B.x(B.a([l,A.aQ,k,A.N,j,A.dT,B.aM(!1,A.Y,!1,v,!0,A.t,v,B.aN(),w.d,v,v,v,v,v,2,B.bs(v,v,v,A.GF,v,v,"",v,!0,new B.b5(4,B.n(16),new B.ay(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b5(4,B.n(16),D.b3o),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.y,!0,v,!1,v,!1,w.e,A.aj,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.ddo(w),v,!1,v,v,!1,v,!0,v,A.aa,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.K,v,A.mq,v,v,v,v),A.dT,B.B(B.a([B.E(B.dT(A.nP,new C.ddp(d),B.dj(v,v,v,v,v,v,v,v,v,s,v,v,A.cm,v,new B.b8(B.n(14),A.a0),new B.ay(p,1,A.r,-1),v,v,v,v)),1),A.as,B.E(B.bI(D.fDo,v,w.gc73(),B.bo(A.aW,v,v,v,v,v,A.cm,v,new B.b8(B.n(14),A.a0),v,v,v)),2)],f),A.m,v,A.e,A.i,0,v,v)],f),A.m,v,A.e,A.P,0,A.p),v),new B.o(t,v,n,o,m,v,A.n),A.bh),v),v,v,v,A.O0,A.d8,v,v,v)}}
C.aoW.prototype={
R(){return new C.bl3(A.cM)},
hJ(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bl3.prototype={
Z(){var w,v=this
v.a3()
w=v.a
w.toString
$.tN=$.tN+1
v.r=A.o.N(A.o.E(C.fMD(w.e,w.d.y2),1,600))
w=v.a
if(!J.lF(w.d.y2,w.e))v.r=C.ifJ(v.a.e)
v.w=B.df(A.fB,new C.dKQ(v))},
t(){var w=this.w
if(w!=null)w.a2(0)
this.ckH()
C.b0T()
this.a1()},
ckH(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.k.E(r.e/w,0,1)
if(v<=0)return
u=B.og(A.k.ac(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.u(1000*Date.now())
s=r.a
w.hJ(new B.d7(t,s.c.a,u,A.fT,A.fn,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cs,new B.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.v2(u,q,"Left early \xb7 +$"+A.k.ac(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Kp(d,e){return this.cwS(d,e)},
b6P(d){return this.Kp(!1,d)},
cwR(d){return this.Kp(d,"")},
cwS(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Kp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a2(0)
if(d)r=1
else{s=t.f
r=s<=0?0:A.k.E(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.v2(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bFJ(s,C.bFo(),C.he_(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Kp)
case 5:w=1
break
case 4:n=B.og(A.k.ac(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dKH(t,n,r))
s=A.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.d7(s,p,n,A.fT,A.fn,q,null,null,A.cs,new B.V(Date.now(),0,!1))
B.ahW(l,!0)
t.a.hJ(l)
t.a.bv()
if(m)k="+$"+A.k.ac(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.k.ac(n,2)+" ("+A.k.V(r*100)+"% of the prize)"}q=t.a
C.v2(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bFJ(s,C.bFo(),C.he_(),""+t.e+"/"+t.f,k,q,!0),$async$Kp)
case 6:w=7
return B.b(C.ahO(t.a.f,k),$async$Kp)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Kp,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&B.c()
w=A.o.ao(m,60)
v=A.a.aY(A.o.u(A.o.F(m,60)),2,"0")
u=B.aH(n,n,n,n,A.PB,n,n,n,new C.dKK(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=B.E(B.x(B.a([B.d(t.f,n,1,A.a1,n,n,n,A.ka,n,n,n),B.d("Win $"+A.k.ac(t.w*1.46,2)+" \xb7 stake $"+A.k.ac(o.a.w,2),n,n,n,n,n,n,D.fom,n,n,n)],s),A.E,n,A.e,A.i,0,A.p),1)
r=o.a.c.a
m=m<=10?A.aw:A.c.j(0.1)
q=B.n(99)
q=B.B(B.a([u,t,new C.aqE(r,new C.dKL(o),n),A.bm,B.cY(n,B.B(B.a([D.bZc,A.db,B.d(""+w+":"+v,n,n,n,n,n,n,A.iw,n,n,n)],s),A.m,n,A.e,A.i,0,n,n),n,n,A.b5,new B.o(m,n,n,q,n,n,A.n),A.a2,n,n,n,n,A.qn,n,n,n)],s),A.m,n,A.e,A.i,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=B.B(B.a([B.E(B.bx(B.n(99),B.kk(A.bz,n,n,9,n,r,new B.lI(A.d.gI(m.r),x.dw)),A.ap),1),A.as,B.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.fxL,n,n,n)],s),A.m,n,A.e,A.i,0,n,n)
t=B.n(22)
u=B.a([A.d.gI(o.a.r).j(0.35),F.aj0],x.O)
p=o.x
return C.aR_(n,D.brz,B.bn(!0,B.x(B.a([new B.D(D.bFn,q,n),new C.O_(w*r,w,v,n),new B.D(F.alB,m,n),B.E(new B.D(A.BW,B.bx(t,B.c4(B.e_(Y.hyU(o.a.e,new Y.zM(new C.dKM(o),new C.dKN(o),new C.dKO(o),o.d)),p,n),new B.o(n,n,n,n,n,new B.a9(A.b0,A.b6,A.x,u,n,n),A.n),A.bh),A.ap),n),1)],s),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0))}}
C.a7h.prototype={
B(d){var w=null,v=B.n(26),u=B.L(A.ay.j(0.5),A.r,1),t=B.a([new B.ac(0,A.G,A.ay.j(0.22),A.I,26)],x.V)
return B.eU(w,A.L,B.p(w,B.x(B.a([B.p(w,D.bSJ,A.f,w,w,new B.o(A.ay.j(0.16),w,B.L(A.ay,A.r,2),w,w,w,A.a6),w,68,w,w,w,w,w,68),A.aB,D.fN8,A.N,B.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.N,B.d("The count starts again from zero next month.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aQ,new B.a4(1/0,w,B.bI(D.fAn,w,new C.cbH(d),B.bo(A.ay,w,w,w,A.w,A.h0,w,w,new B.b8(B.n(14),A.a0),w,w,w)),w)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(w,w,u,v,t,D.c4M,A.n),w,w,w,w,D.bDD,w,w,w),w,w,w,A.am9,A.d8,w,w,w)}}
C.aop.prototype={
R(){return new C.bkU(null,null)},
gY(d){return this.e}}
C.bkU.prototype={
Z(){var w,v=this,u=null
v.a3()
w=v.d=B.bm(u,A.BR,u,1,u,v)
w.dh()
w.dT$.M(0,new C.dDZ(v))
w=B.bm(u,A.m6,u,1,u,v)
w.cM(0)
v.e=w
w=B.bm(u,A.Ns,u,1,u,v)
w.cM(0)
v.f=w
w.dh()
w.dT$.M(0,new C.dE_(v))
if(v.a.c){v.d.cM(0)
v.e.bR(0)
v.f.bR(0)}},
bz(d){var w,v,u=this
u.bH(d)
w=u.a.c
if(w){v=u.d
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&B.c()
w.cM(0)
w=u.e
w===$&&B.c()
w.bR(0)
w=u.f
w===$&&B.c()
w.bR(0)}else if(!w&&d.c){w=u.d
w===$&&B.c()
w.bR(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.f
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)}},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bxs()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Sb[A.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Sb[A.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.w(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.w(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.cT:A.bB
else if(w!=null){b1=(w>0?A.cT:A.bB).j(0.45)
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
b3=B.a([B.ee(A.A,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,b0,B.a([new B.ac(6+e,A.G,A.aD.j(0.4+q*0.3),A.I,32+q*22),new B.ac(3,A.G,A.b8.j(0.2+p*0.25),A.I,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.p(b0,b0,A.f,b0,b0,new B.o(B.ar(A.bq,A.aT,A.o.F(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.ac(0,A.G,A.aD.j(0.7),A.I,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dR(new B.iQ(B.wG(a4+a3),b0,A.A,!0,b0,a8,b0),new B.u(a6*a0+a5*b2*0.04,a7*a0)))}A.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dR(B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,B.n(b2*0.5),B.a([new B.ac(b2*0.02,A.G,A.w.j(0.4+b1),A.I,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.u(0,n+b3)))
b1=B.dt()
d=b1.a
d.$flags&2&&B.aj(d)
d[11]=0.0025
b1.mV(o)
b1.k0(k,k,k,1)
b1.km(l)
b1.fN(m)
d=b2*0.2
a1=B.n(d)
if(a9.a.c)a2=D.da4
else{a2=B.ar(A.c,A.kF,q*0.45)
a2.toString
a2=B.a([a2,A.bN,A.cq],x.O)}a4=B.ar(A.bL,A.aD,q*0.65)
a4.toString
a4=B.L(a4,A.r,3)
e=B.a([new B.ac(0,A.G,A.w.j(0.3),D.ekC,16)],e)
if(!a9.a.c)e.push(new B.ac(p*3,A.G,A.aD.j(0.3+q*0.4),A.I,24+p*16))
e.push(new B.ac(0,A.G,A.c.j(0.9),A.TF,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bT(0,B.c4(b0,new B.o(b0,b0,b0,B.n(d),b0,new B.a9(new B.da(-1+Math.cos(j)*0.8,-1),new B.da(1,1),A.x,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.bh),0,0,0))
g.push(B.ap(b0,B.p(b0,b0,A.f,b0,b0,new B.o(b0,b0,b0,B.n(6),b0,new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cW(A.w.j(0.18),A.dC,5)],x.C)
if(!a9.a.c)d.push(new B.cW(A.aD.j(0.4+q*0.35),A.I,12+p*10))
g.push(B.at(B.vT(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b5,A.ji,b3),b0,b0,b0))
f.push(B.dR(B.fA(A.A,B.p(b0,new B.an(A.a_,b0,A.ab,A.t,g,b0),A.f,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a9(A.az,A.aE,A.x,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.u(0,n)))
return new B.a4(h,h,new B.an(A.A,b0,A.ab,A.f,f,b0),b0)}}
C.aMv.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.O_.prototype={
B(d){var w=null,v=new C.ce2(),u=v.$3("STAKE","$"+A.k.ac(this.e,2),A.c),t=B.n(18),s=B.L(A.bv.j(0.7),A.r,1.4),r=B.a([new B.ac(0,A.G,A.aW.j(0.35),A.I,14)],x.V),q=x.p
return new B.D(A.NK,B.B(B.a([u,B.p(w,B.x(B.a([D.fLO,B.ly(new C.ce1(),w,A.b5,A.mI,w,w,new B.bq(w,this.c,x.e7),x.gR)],q),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,s,t,r,D.asj,A.n),w,w,w,w,A.NW,w,w,w),v.$3("FULL WIN","$"+A.k.ac(this.d,2),A.bM)],q),A.m,w,A.e,A.i,0,w,w),w)}}
C.aqE.prototype={
B(d){var w=null,v=B.n(99),u=B.L(A.jP.j(0.7),A.r,1)
return B.p(w,B.B(B.a([D.bR9,A.db,C.aru(this.d,A.nO,this.c)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,u,v,w,D.asj,A.n),w,w,w,w,A.O5,w,w,w)},
ge2(){return this.c}}
C.O7.prototype={
R(){return new C.blC(null,null)}}
C.blC.prototype={
Z(){var w,v=this
v.a3()
w=B.bm(null,A.m6,null,1,null,v)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.by2()},
aPi(d,e){var w=this.a.d,v=B.T(w).k("N<1,m>"),u=B.C(new B.N(w,C.ilM(),v),v.k("ak.E"))
w=this.d
w===$&&B.c()
return B.cb(w,new C.e3c(this,u),null)},
B(d){var w=null
if(this.a.e)return B.c6(w,D.aij,B.bn(!0,this.aPi(0,d),!0,!1,A.af,!0,!0),w,!1,!1,w,w)
return this.aPi(0,d)},
ayq(d,e,f){var w=null,v=f.j(0.16),u=B.n(10)
return B.B(B.a([B.p(w,B.X(d,f,w,w,w,17),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.as,B.E(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.i,0,w,w)}}
C.aN4.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.adZ.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aG(d,A.eh,o).w.r.d,m=this.c,l=J.cF(m),k=l.eO(m,new C.e3f()).gK(0),j=new B.ef(l.dH(m,new C.e3g(),x.cD),x.bG).cG(0,0,new C.e3h())
o=B.aG(d,A.bZ,o).w
w=x.p
v=B.a([A.W,B.p(p,p,A.f,p,p,new B.o(A.aX,p,p,B.n(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.D(A.alQ,B.B(B.a([B.p(p,D.c0C,A.f,p,p,new B.o(p,p,p,B.n(14),B.a([new B.ac(0,A.G,A.f8.j(0.45),A.I,14)],x.V),D.asd,A.n),p,44,p,p,p,p,p,44),A.bd,D.bHG,B.aH(p,p,p,p,A.li,p,p,p,new C.e3i(d),p,p,p,p,p,p)],w),A.m,p,A.e,A.i,0,p,p),p)],w)
if(l.gcm(m)){u=C.h8J("GAMES",""+l.gK(m),A.eG)
t=C.h8J("WON",""+k,A.jP)
s=j>=0
r=s?"+":"-"
q=C.bC7(j)
s=s?A.jP:A.eO
v.push(new B.D(D.bBN,B.B(B.a([u,A.ad,t,A.ad,C.h8J("NET",r+q,s)],w),A.m,p,A.e,A.i,0,p,p),p))}if(l.gan(m))v.push(new B.D(new B.Q(24,36,24,24+n),B.x(B.a([B.X(D.bNd,A.c.j(0.35),p,p,p,52),A.ae,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.am,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],w),A.m,p,A.e,A.i,0,A.p),p))
else v.push(new B.ds(1,A.cn,B.hS(p,new C.e3j(this),l.gK(m),new B.Q(14,2,14,16+n),p,A.ah,new C.e3k(),!1),p))
return B.p(p,B.x(v,A.m,p,A.e,A.P,0,A.p),A.f,p,new B.aZ(0,1/0,0,o.a.b*0.88),D.b6d,p,p,p,p,p,p,p,p)}}
C.adY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!A.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&A.a.a0(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=A.c0
else if(u)r=A.du
else{w=v?A.aT:A.bv
r=w}q=h.gbiy()
w=new C.e3e()
s=B.n(14)
p=B.a([r.j(0.13),D.bqm],x.O)
o=B.L(r.j(0.4),A.r,1)
n=B.X(g?A.mP:A.cx,r,i,i,i,16)
m=B.E(B.d(h.b,i,1,A.a1,i,i,i,A.tu,i,i,i),1)
l=r.j(0.2)
k=B.n(99)
k=B.p(i,B.d(t,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,A.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),A.f,i,i,new B.o(l,i,i,k,i,i,A.n),i,i,i,i,D.bFf,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bC7(q)}else{l=g?"+":"-"
l+=C.bC7(h.d)}j=x.p
l=B.B(B.a([n,A.bm,m,k,A.bm,B.d(l,i,i,i,i,i,i,B.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.m,i,A.e,A.i,0,i,i)
k=C.e3d("STAKE",w.$1(h.w),A.c)
w=B.B(B.a([k,A.db,C.e3d("PAID",C.bC7(g?h.d:0),r),A.db,C.e3d("BEFORE",w.$1(h.x),A.eG),A.db,C.e3d("AFTER",w.$1(h.y),A.du)],j),A.m,i,A.e,A.i,0,i,i)
n=C.ihh(h.f)
h=A.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return B.p(i,B.x(B.a([l,A.am,w,A.av,B.d(n+h,i,1,A.a1,i,i,i,B.l(i,i,A.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),A.ak,i,A.e,A.i,0,A.p),A.f,i,i,new B.o(i,i,o,s,i,new B.a9(A.az,A.aE,A.x,p,i,i),A.n),i,i,i,i,A.kO,i,i,i)}}
C.aBG.prototype={
R(){return new C.bh9(A.cM,null,null)}}
C.bh9.prototype={
Z(){var w,v,u,t=this
t.a3()
w=B.bm(null,A.m7,null,1,null,t)
w.cM(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.aem(40+w.ag()*260,-20+w.ag()*40,1.5+w.ag()*3,w.ag()*3.141592653589793,0.7+w.ag()*0.3,12+w.ag()*16,[Z.a6z,A.t2,A.cW,A.c][w.ap(4)],[A.ia,A.kp,A.e5,A.H2][w.ap(4)])
t.f=v},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bwX()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.at(B.aI(!1,A.a2,!0,w,B.cb(v,new C.dks(this,d),w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)}}
C.aem.prototype={
gY(d){return this.f}}
C.aM0.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.b1G.prototype={
B(d){return new B.tE(new C.cgi(this),null,new B.h9(B.a([$.z2(),$.a3r()],x.U)),null)},
ge2(){return this.c}}
C.NB.prototype={
ceE(){if(this.c!=null)this.m(new C.c44())}}
C.Ja.prototype={}
C.aq1.prototype={
R(){return new C.aEu(A.cM,new B.au(A.at,$.aw()))},
cJC(){return this.d.$0()},
cVA(){return this.f.$0()},
cVo(d,e){return this.r.$2(d,e)},
cWb(d,e,f){return this.w.$3$bonus(d,e,f)},
ge2(){return this.c}}
C.aEu.prototype={
t(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a1()},
aub(){var w=B.d5(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
B_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$B_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.aub()
if(s<2){t.ayr("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cJC()<s){t.ayr("Insufficient balance.")
w=1
break}if(!t.a.cVo(s,"Dice Roll bet")){t.ayr("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dWI(t))}w=3
return B.b(C.ccR(t.a.e),$async$B_)
case 3:r=t.a
q=C.ijo(r.e,r.c,t.d)
t.a.cVA()
B.b0g(t.a.e)
t.m(new C.dWJ(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bP(new B.bc(1000*(40+p*6)),null,r),$async$B_)
case 7:if(t.c==null){w=1
break}new C.dWK(t).$0()
t.c.eq()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bP(A.jV,null,r),$async$B_)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hcM(q)
t.m(new C.dWL(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cWb(m,"Dice Roll "+n,o)
t.m(new C.dWM(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.k.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ac(m,2)+" added to your balance"
w=12
return B.b(C.bFJ(r,C.bFo(),new C.dWN(t),n,k,"YOU WIN!",!0),$async$B_)
case 12:w=13
return B.b(C.ahO("Dice Roll",l?"+$"+A.k.ac(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ac(m,2)+" added to your balance"),$async$B_)
case 13:w=10
break
case 11:w=14
return B.b(C.bFJ(r,C.bFo(),new C.dWO(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$B_)
case 14:C.v2(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$B_,v)},
ayr(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.aub(),d=x.w,a0=B.aG(a2,A.eh,d).w,a1=Math.min(B.aG(a2,A.bZ,d).w.a.a*0.44,200)
d=B.ht(P.aqH,D.fTi,new C.dWR(a2),f)
w=B.n(20)
v=g.a
u=v.c
t=x.p
w=B.B(B.a([d,A.b2,B.p(f,B.B(B.a([A.aqC,A.bm,C.aru(v.d,A.j8,u)],t),A.m,f,A.e,A.P,0,f,f),A.f,f,f,new B.o(A.cW,f,f,w,f,f,A.n),f,f,f,f,A.lG,f,f,f)],t),A.m,f,A.e,A.i,0,f,f)
u=g.z
v=B.a_(140,D.Zq.l()>>>16&255,D.Zq.l()>>>8&255,D.Zq.l()&255)
d=B.n(18)
s=B.L(B.a_(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.E(B.p(f,B.at(new C.aop(r,r?g.w:g.r,a1,f),f,f,f),A.f,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a7,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Sb[q]
o=C.hcM(p)
n=p>0?A.bf:A.aw
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.aP(10,10)
i=m?A.c:n.j(0.7)
h=new B.ay(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.ac(1,A.G,n.j(0.65),A.I,14)],r):A.RX
m=m?18:15
s.push(new B.by(1,A.bb,new B.D(A.jC,B.p(A.A,new B.y(o,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),A.f,f,f,new B.o(k,f,new B.bG(h,h,h,h),new B.bh(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.ae,v,A.am,B.B(s,A.m,f,A.e,A.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hcM(v)
s=g.r
s.toString
d.push(new B.D(A.jB,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.ba:A.c0,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.W)
d.push(new B.bN(A.a5,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.a_(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.am)
v=x.bL
v=B.C(new B.N(B.a([2,5,10,25],x.n),new C.dWS(g),v),v.k("ak.E"))
s=g.y
r=B.a_(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.E(new B.D(A.a0c,B.aM(f,A.Y,!1,f,!0,A.t,f,B.aN(),g.e,f,f,f,f,f,2,B.bs(f,new B.b5(4,B.n(10),A.a0),f,A.jW,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.ms,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,!s,!1,f,A.aj,f,f,f,f,f,A.dW,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.aa,f,f,f,f,f,f,f,f,f,f,f,A.fS,!0,A.K,f,A.an,f,f,f,f),f),1))
d.push(B.B(v,A.m,f,A.e,A.i,0,f,f))
d.push(A.N)
d.push(new B.bN(A.a8,f,f,B.d("Perfect Score Profit: +$"+A.k.ac(g.aub()*0.46,2),f,f,f,f,f,f,X.aUB,f,f,f),f))
d.push(A.W)
d=B.E(new B.D(A.hQ,B.x(d,A.ak,f,A.e,A.i,0,A.p),f),1)
v=g.x?f:g.gctq()
s=B.fr(f,f,A.aD,f,f,f,f,f,f,A.c,f,f,f,f,new B.b8(B.n(14),A.a0),f,f,f,f,f)
return C.aR_(f,D.ZC,B.bn(!0,B.x(B.a([new B.D(D.bFJ,w,f),new C.O_(u,e*1.46,e,f),B.E(B.x(B.a([d,new B.D(new B.Q(14,4,14,8+a0.r.d),new B.a4(1/0,52,B.im(B.d("\ud83c\udfb2 ROLL ($"+A.k.ac(e,2)+")",f,f,f,f,f,f,A.ls,f,f,f),v,s),f),f)],t),A.m,f,A.e,A.i,0,A.p),1)],t),A.m,f,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0))}}
C.aqK.prototype={
R(){return new C.aEK(A.kV,new B.au(A.at,$.aw()))},
cVg(d){return this.e.$1(d)}}
C.aEK.prototype={
gasZ(){var w,v=this.r
if(v===$){w=A.o.u(1e4+A.cM.ap(89999))
this.r!==$&&B.bE()
this.r=w
v=w}return v},
gQS(){var w=this.d,v=this.a
return w===A.kV?A.a.i(v.f.a):A.a.i(v.f.b)},
ga9W(){var w=this.gQS(),v=B.ag("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a1()},
Jk(d,e){return this.bKT(d,e)},
bKT(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$Jk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fL(new B.fE(d)),$async$Jk)
case 2:B.eZ()
t=u.c
if(t!=null)t.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$Jk,v)},
QN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gQS().length===0){r.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.jR()
o=A.k.ac(r.a.d,2)
q=r.d===A.kV?B.cI("https://cash.app/"+r.ga9W()+"/"+o,0,null):B.cI("bitcoin:"+r.gQS(),0,null)
t=4
w=7
return B.b(B.j3(q,A.fw,null),$async$QN)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.kV?r.ga9W():r.gQS()
w=10
return B.b(r.Jk(n,r.d===A.kV?"Cash App tag":"Bitcoin address"),$async$QN)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.kV?r.ga9W():r.gQS()
w=11
return B.b(r.Jk(n,r.d===A.kV?"Cash App tag":"Bitcoin address"),$async$QN)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QN,v)},
a17(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a17=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().bjj(A.eL),$async$a17)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fn(),$async$a17)
case 4:s=e
t.m(new C.e3q(t,A.a.c9(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$a17,v)},
caT(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.kV?C.hAb(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.kV?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.U(B.b3(u,u,u,u,u,A.t,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.Z,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.U(B.b3(u,u,u,u,u,A.t,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.Z,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.V(Date.now(),0,!1).u(0)
w=v.a
t.cVg(new B.d7(s,w.c.a,w.d,A.fH,v.d,r,v.f,v.gasZ(),A.dy,new B.V(Date.now(),0,!1)))
w=v.c
w.toString
B.iZ(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eI(o,o,o,!0,!0,A.Bi,o,1,!0,o,0,!1,o,!1,A.c,o,B.aH(o,o,o,o,A.HM,o,o,o,new C.e3r(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fC6,o,o,o,1,o,!0),m=B.n(26),l=B.L(D.eQ.j(0.25),A.r,1),k=x.V,j=B.a([new B.ac(0,A.G,A.b1.j(0.25),A.eU,24)],k),i=x.p
j=B.p(o,B.x(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.am,B.eO(A.A,B.d("$"+B.dF(p.a.d),o,o,o,o,o,o,D.fkn,o,o,o),A.f,A.dz),A.am,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.eQ.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,l,m,j,D.c7L,A.n),o,o,o,o,D.bDg,o,o,o)
m=p.c5L()
l=p.aC8(1,"Send the money to NGMY Pay",p.caR())
w=p.aC8(2,"Put this code in the payment note",p.bJv())
v=p.d===A.kV
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aC8(3,u,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.e,o,o,o,o,o,2,B.bs(o,o,o,o,o,o,o,o,!0,new B.b5(4,B.n(18),new B.ay(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.u6,!0,o,o,o,o,new B.b5(4,B.n(18),D.b3j),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.flV,t,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.tv,!0,A.a4,o,A.an,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.n(20)
s=r?D.eQ:A.c
s=B.L(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.x(B.a([B.bx(B.n(14),new B.cU(D.b4J,new B.F4(p.f,o),o),A.ap),A.N,D.f5k,A.av],i),A.m,o,A.e,A.i,0,A.p):B.x(B.a([B.p(o,D.c_M,A.f,o,o,new B.o(D.eQ.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.W,D.fHz,A.cS,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.i,0,A.p)
v=p.b8n(4,"Screenshot of your payment",B.aA(o,B.p(o,q,A.f,o,o,new B.o(A.u6,o,s,u,o,o,A.n),o,o,o,o,new B.Q(v,v,v,v),o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcmz(),o,o,o,o,o,o,!1,A.a3),!0)
u=B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a7,o,1.4,!0,o,o,o,o,o,o,o,o),A.K,o,o)
s=B.n(18)
k=B.a([new B.ac(0,A.G,A.b1.j(0.45),A.ds,18)],k)
return B.c6(n,A.Bi,B.at(new B.cU(A.adE,B.cl(B.a([j,A.bx,m,A.bx,l,w,t,v,A.am,u,A.aQ,new B.a4(o,56,B.c4(B.lN(D.bZr,D.fSs,p.gcaS(),B.fr(o,o,A.L,o,o,o,o,o,o,A.c,o,o,o,A.L,new B.b8(B.n(18),A.a0),o,o,o,o,o)),new B.o(o,o,o,s,k,D.c6m,A.n),A.bh),o)],i),o,o,D.bCL,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c5L(){var w=null,v=new C.e3m(this),u=B.n(18),t=B.L(A.c.j(0.06),A.r,1)
return B.p(w,B.B(B.a([v.$3(A.kV,A.i8,"Cash App"),A.ec,v.$3(A.a86,D.aqi,"Bitcoin")],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(A.u6,w,t,u,w,w,A.n),w,w,w,w,A.mb,w,w,w)},
b8n(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.A,B.d(""+d,v,v,v,v,v,v,D.frk,v,v,v),A.f,v,v,D.b5r,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.E(B.p(v,v,A.f,D.eQ.j(0.18),v,v,v,v,v,A.w7,v,v,v,2),1))
t=B.x(t,A.m,v,A.e,A.i,0,A.p)
w=g?12:20
return new B.Et(B.B(B.a([new B.a4(34,v,t,v),A.as,B.E(new B.D(new B.Q(0,0,0,w),B.x(B.a([new B.D(A.a_v,B.d(e,v,v,v,v,v,v,A6.Kr,v,v,v),v),f],u),A.ak,v,A.e,A.i,0,A.p),v),1)],u),A.ak,v,A.e,A.i,0,v,v),v)},
aC8(d,e,f){return this.b8n(d,e,f,!1)},
caR(){var w,v,u,t,s=this,r=null,q=s.d===A.kV?s.ga9W():s.gQS(),p=B.n(20),o=B.n(20),n=s.d===A.kV,m=n?D.c5g:D.c75,l=B.a([new B.ac(0,A.G,(n?D.aiF:D.Ym).j(0.35),A.cy,16)],x.V),k=B.n(12)
n=s.d===A.kV
w=n?A.i8:D.aqi
k=B.p(r,B.X(w,n?D.aiF:D.Ym,r,r,r,30),A.f,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.kV
t=u?22:13
v=B.d(v,r,1,A.a1,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.E(B.x(B.a([n,A.bF,v,A.av,B.B(B.a([D.bW9,A.db,B.d(s.d===A.kV?"Tap to pay $"+B.dF(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.r1,r,r,r)],u),A.m,r,A.e,A.i,0,r,r)],u),A.E,r,A.e,A.i,0,A.p),1)
return B.aI(!1,A.a2,!0,r,B.aO(!1,p,!0,B.eK(B.B(B.a([k,A.bd,v,B.aH(r,r,r,r,D.bVa,r,r,r,w?r:new C.e3p(s,q),r,r,r,r,"Copy",r)],u),A.m,r,A.e,A.i,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.alv,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gchM(),r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)},
bJv(){var w,v,u,t,s,r,q,p,o=null,n=B.n(20),m=B.L(A.b7.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gasZ().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.aP(12,12)
q=B.a([A.b7.j(0.28),A.b7.j(0.08)],u)
p=new B.ay(A.eG.j(0.4),1,A.r,-1)
k.push(B.p(A.A,new B.y(s,o,A.pK,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(o,o,new B.bG(p,p,p,p),new B.bh(r,r,r,r),o,new B.a9(A.b0,A.b6,A.x,q,o,o),A.n),o,52,o,A.jC,o,o,o,42))}return B.p(o,B.x(B.a([B.B(k,A.m,o,A.b9,A.i,0,o,o),A.ae,B.B(B.a([B.E(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ad,B.ht(A.a36,D.fUt,new C.e3l(this),B.fy(o,o,o,o,o,o,o,o,o,o,o,A.eG,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.m,o,A.e,A.i,0,o,o)],l),A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(A.u6,o,m,n,o,o,A.n),o,o,o,o,A.bD,o,o,o)}}
C.rJ.prototype={
ah(){var w=this
return B.H(["id",w.a,"title",w.b,"start",w.c.ae(),"end",w.d.ae(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rK.prototype={
ah(){var w=this
return B.H(["id",w.a,"when",w.b.ae(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWc(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.hkL(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aI(v," \xb7 ")},
giU(d){return this.c}}
C.lT.prototype={
ah(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.it.prototype={
ah(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b7(v.c,new C.cfi(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.ic.prototype={
alT(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.ic(v,u,t,s,r,h==null?w.f:h)},
bdV(d){var w=null
return this.alT(w,w,w,w,d,w)},
cNt(d,e,f){return this.alT(d,e,null,null,null,f)},
bdU(d){var w=null
return this.alT(w,w,w,d,w,w)},
cN8(d,e){var w=null
return this.alT(w,w,d,w,e,w)},
ah(){var w=this,v=C.i4A(w.c),u=w.e,t=B.T(u).k("N<1,a8<m,@>>")
u=B.C(new B.N(u,new C.cfg(),t),t.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.baF.prototype={}
C.W0.prototype={
R(){return new C.aEW(new B.au(A.at,$.aw()),B.mT(0,null,null),B.a([],x.m))},
UE(d){return this.d.$1(d)}}
C.aEW.prototype={
Z(){var w,v=this
v.a3()
w=J.b7(v.a.c,new C.e7v(),x.i)
w=B.C(w,w.$ti.k("ak.E"))
A.d.aX(w,new C.e7w())
v.d=w
v.Ju()},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.x.t()
this.a1()},
af3(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$af3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.Ju()
u.m(new C.e7p(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.UE(s),$async$af3)
case 2:r=e
if(u.c!=null){u.m(new C.e7q(u))
t=u.c.L(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(B.b3(null,null,null,r?A.cT:A.aw,null,A.t,null,s,null,A.Z,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$af3,v)},
a97(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a97=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.ic(q,"New Category",A.Hl,4284773515,D.aB5,p.length)
t.m(new C.e78(t,s))
t.Ju()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.ch(null,null,!0,null,new C.e79(s),p,null,!0,!0,x.i),$async$a97)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e7a(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a97,v)},
a25(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a25=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.e7m(t,p))
q.bP(0,A.cb)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.cfd(p,q,s),$async$a25)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e7n(t,r))
$.aW.x1$.push(new C.e7o(t))
case 1:return B.h(u,v)}})
return B.i($async$a25,v)},
ab7(d){return this.bPH(d)},
bPH(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ab7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.e7g(t),r,null,!0,!0,x.i),$async$ab7)
case 2:s=f
if(s!=null)u.m(new C.e7h(u,d,s))
return B.h(null,v)}})
return B.i($async$ab7,v)},
bNm(d){this.m(new C.e7f(this,d))
this.Ju()},
Ju(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bdV(v)},
cf9(d,e){var w={}
w.a=e
this.m(new C.e7l(w,this,d))},
Zr(d){return this.c4G(d)},
c4G(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$Zr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.ej(new C.e7k(u,d),!1,null,x.H)
w=2
return B.b(B.a5(s,!1).cc(t),$async$Zr)
case 2:return B.h(null,v)}})
return B.i($async$Zr,v)},
bFH(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fN,A.bo],l):B.a([A.o_,A.eA],l)
w=B.n(16)
v=B.L(m?A.d3.j(0.35):A.du,A.r,1)
u=B.X(A.e5,m?A.du:A.dF,n,n,n,n)
t=B.E(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aP:A.O,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a1p:Ab.Ot
r=x.p
s=B.a([B.aO(!1,n,!0,B.B(B.a([u,A.ad,t,B.X(s,m?A.bL:A.al,n,n,n,n)],r),A.m,n,A.e,A.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.e7c(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.W],r)
t=o.y
if(t.length!==0){q=(m?D.tP:A.c).j(0.65)
p=B.n(12)
u.push(B.p(n,B.kl(!0,n,o.x,new C.e7d(o,d),t.length,n,n,n,n,!1,!1),A.f,n,A.adz,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.ck,n,n,n))}u.push(A.N)
t=o.w
q=B.l(n,n,m?A.aP:A.O,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bL:A.al,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bo:A.aP
q=B.E(B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),t,n,n,n,n,n,2,B.bs(n,new B.b5(4,B.n(14),A.a0),n,A.eS,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.e7e(o),n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a4,n,A.an,n,n,n,n),1)
m=o.f?n:o.gctG()
p=B.bo(A.bl,n,n,n,n,n,A.jj,n,n,n,n,n)
u.push(B.B(B.a([q,new B.Jp(t,A.bl,n),A.db,B.bI(o.f?A.qZ:D.aqt,n,m,p)],r),A.dI,n,A.e,A.i,0,n,n))
A.d.v(s,u)}return B.cY(n,B.x(s,A.ak,n,A.e,A.i,0,A.p),n,n,A.b5,new B.o(n,n,v,w,n,new B.a9(A.a5,A.a8,A.x,l,n,n),A.n),A.iG,n,n,n,A.GC,A.bD,n,n,n)},
B(d){var w,v=this,u=null,t=B.R(d).ax.a===A.J,s=new C.baF(t),r=t?A.dd:A.bN,q=t?A.dd:u,p=t?A.aP:A.O,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aP:A.O,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gcaX()
if(n)n=A.UM
else n=B.X(A.yY,t?A.aP:A.O,u,u,u,u)
w=x.p
o=B.eI(B.a([B.ht(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aP:A.O,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aWg(A.aM,u,N.Xt,A.ow,D.fQH,v.gbBY())
q=v.bFH(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bL:A.al,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.c6(o,r,B.x(B.a([q,new B.D(A.GC,n,u),B.E(H.hpc(!1,new C.e7u(v,s),m.length,v.gcf8(),D.bBz,u,!1),1)],w),A.ak,u,A.e,A.i,0,A.p),u,!1,!1,p,u)}}
C.Q5.prototype={
R(){return new C.bcw()}}
C.bcw.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.bb(w.b,A.b4,A.aO),$.aw())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&B.c()
w.T$=$.aw()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=B.R(d).ax.a===A.J,q=r?D.tP:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bk,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aM(s,A.Y,!1,s,!0,A.t,s,B.aN(),o,s,s,s,s,s,2,D.c1z,A.y,!0,s,!0,s,!1,s,A.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.aa,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bk,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a4,s,A.an,s,s,s,s)
w=x.aS
w=B.C(new B.N(D.c8a,new C.cTz(t),w),w.k("ak.E"))
w=B.bX(A.bG,w,A.br,s,8,8)
v=x.gN
v=B.C(new B.N(D.d6X,new C.cTA(t),v),v.k("ak.E"))
u=x.p
v=B.ci(B.x(B.a([o,A.ae,w,A.ae,B.bX(A.bG,v,A.br,s,0,8)],u),A.m,s,A.e,A.P,0,A.p),A.t,s,A.y,s,s,s,s,A.ah)
return B.ei(B.a([B.bM(!1,A.di,s,s,!0,s,s,s,new C.cTB(d),s,s),B.bI(A.r2,s,new C.cTC(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a0A.prototype={
R(){return new C.aGT()},
oZ(d){return this.d.$1(d)}}
C.aGT.prototype={
Z(){this.a3()
this.d=B.bp(this.a.c.e,!0,x.u)},
ayt(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.oZ(v.bdU(u))},
a99(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a99=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.b27(new C.it("q_"+1000*s,"",D.d5t,null,!1,r.length)),$async$a99)
case 2:t=e
if(t!=null){u.m(new C.eZt(u,t))
u.ayt()}return B.h(null,v)}})
return B.i($async$a99,v)},
b27(d){var w,v=this.c
v.toString
w=B.ej(new C.eZu(d),!1,null,x.u)
return B.a5(v,!1).cc(w)},
B(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.dd:A.bN,s=u?A.dd:v,r=u?A.aP:A.O,q=w.a.c
s=B.eI(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aP:A.O,v,v,v,v,v,v,v,v,v,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aWg(A.aM,v,N.Xt,A.ow,D.fWA,w.gbCp())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.at(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bL:A.al,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hS(v,new C.eZz(w,new C.baF(u)),q,D.bBI,v,A.ah,new C.eZA(),!1)
return B.c6(s,t,u,v,!1,!1,r,v)}}
C.a0z.prototype={
R(){return new C.aGS()}}
C.aGS.prototype={
Z(){var w,v=this
v.a3()
w=v.a.c
v.d=new B.au(new B.bb(w.b,A.b4,A.aO),$.aw())
w=B.bp(w.c,!0,x.bP)
v.e=w
if(A.d.gan(w))J.cc(v.e,D.a7h)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&B.c()
w.T$=$.aw()
w.P$=0
this.a1()},
af2(){var w=0,v=B.j(x.H),u=this,t
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(A0.Ha(78,1920),$async$af2)
case 2:t=e
if(t!=null)u.m(new C.eZp(u,t))
return B.h(null,v)}})
return B.i($async$af2,v)},
agb(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$agb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.ej(new C.eZn(u),!1,null,x.dZ)
w=2
return B.b(B.a5(r,!1).cc(t),$async$agb)
case 2:s=e
if(s!=null)u.m(new C.eZo(u,s))
return B.h(null,v)}})
return B.i($async$agb,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.R(a1).ax.a===A.J,g=h?A.dd:A.bN,f=h?A.dd:i,e=h?A.aP:A.O,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eI(B.a([B.di(S.a3f,A.r2,new C.eZr(j,a1),B.bo(A.aM,i,i,i,A.c,i,i,i,i,i,i,i)),A.as],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.n(14)
w=j.f
v=h?A.bL:A.al
w=B.aA(i,B.bx(e,K.aR2(B.n(14),A.bY,140,A.Cg,v,w,1/0),A.ap),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gcaW(),i,i,i,i,i,i,!1,A.a3)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,13,i,i,A.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bo:A.aP
u=B.n(16)
t=B.L(h?A.aK:A.aN,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,15,i,i,A.a7,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.B(B.a([B.E(B.aM(i,A.Y,!1,i,!0,A.t,i,B.aN(),s,i,i,i,i,i,2,B.bs(i,A.eF,i,A.bg,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bL:A.al,i,i,i,i,i,i,i,i,i,i,i,A.cA,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.y,!0,i,!0,i,!1,i,A.aj,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.aa,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a4,i,A.an,i,i,i,i),1),new B.Jp(j.d,i,i)],a0),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.ev,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,i,i,i,A.a7,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iP(A.aM,i,i,A.af,i,new C.eZs(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bL:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bL:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.tP:A.c
q=B.n(16)
p=B.n(16)
o=B.n(16)
n=B.L(A.bl.j(0.45),A.r,1)
m=B.p(i,D.bTS,A.f,i,i,new B.o(A.bl.j(0.12),i,i,B.n(12),i,i,A.n),i,i,i,i,A.bg,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aP:A.O,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.ad(k)
l=B.E(B.x(B.a([l,A.av,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bL:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.E,i,A.e,A.i,0,A.p),1)
return B.c6(d,g,B.cl(B.a([f,A.N,w,A.d4,e,A.N,v,A.aQ,u,A.N,t,A.av,s,A.ae,B.aI(!1,A.a2,!0,q,B.aO(!1,p,!0,B.p(i,B.B(B.a([m,A.es,l,B.X(A.yX,h?A.bL:A.al,i,i,i,16)],a0),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fm,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcgJ(),i,i,i,i,i,i,i),A.f,r,0,i,i,i,i,i,A.ai)],a0),i,i,A.bQ,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.dal.prototype={}
C.W1.prototype={
R(){return new C.aEY(B.k6(!0,null,!0,!0,null,null,!1))}}
C.aEY.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a3()
w=J.dJ(q.a.c,new C.e85())
w=B.C(w,w.$ti.k("M.E"))
q.e=w
v=B.a([],x.s)
for(w=J.aX(q.a.c);w.C();){u=w.gS(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(A.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=A.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=A.d.aI(v,"\n\n")
q.d=new B.au(new B.bb(w,A.b4,A.aO),$.aw())},
t(){var w=this.d
w===$&&B.c()
w.T$=$.aw()
w.P$=0
this.f.t()
this.a1()},
ayu(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.geM())return
v=r.a
r=w.a
u=w.b
t=d+A.a.au(v,r,u)+e
s=A.a.p5(v,r,u,t)
this.d.bP(0,new B.bb(s,B.hm(A.bA,r+t.length),A.aO))},
b0b(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.E(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.p5(w,v,v,u)
this.d.bP(0,new B.bb(t,B.hm(A.bA,v+u.length),A.aO))},
acQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A0.Ha(78,1920),$async$acQ)
case 3:s=e
if(s==null){w=1
break}t.m(new C.e7M(t,s))
case 1:return B.h(u,v)}})
return B.i($async$acQ,v)},
YW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a6B(A.eL),$async$YW)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fn(),$async$YW)
case 4:t.m(new r.e7R(t,e))
case 1:return B.h(u,v)}})
return B.i($async$YW,v)},
acR(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$acR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new B.au(A.at,t)
r=new B.au(new B.bb("https://",A.b4,A.aO),t)
q=u.c
q.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.e7P(s,r),q,null,!0,!0,x.y),$async$acR)
case 2:if(e===!0)u.m(new C.e7Q(u,s,r))
s.T$=t
s.P$=0
r.T$=t
r.P$=0
return B.h(null,v)}})
return B.i($async$acR,v)},
bGE(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.ft(p.a.a,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(p,new C.e7I(),B.T(p).k("N<1,m>")).bZ(0,new C.e7J())
for(p=J.aX(w.a),v=new B.eR(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gS(p)
if(A.a.a0(s,"## "))q.push(new C.lT("heading",A.a.i(A.a.b3(s,3)),r,r))
else if(A.a.a0(s,"\u2022 ")||A.a.a0(s,"- "))q.push(new C.lT("bullets",new B.N(B.a(s.split("\n"),u),new C.e7K(),t).bZ(0,new C.e7L()).aI(0,"\n"),r,r))
else q.push(new C.lT("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.v(q,p)
if(q.length===0)q.push(D.a7h)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.R(d).ax.a===A.J,m=new C.dal(n),l=n?A.au:A.fW,k=B.d(p.a.d,o,o,o,o,o,o,A.cz,o,o,o),j=x.p
k=B.eI(B.a([B.di(S.a3f,A.aaV,new C.e7W(p,d),B.bo(A.aM,o,o,o,A.c,o,o,o,o,o,o,o)),A.ad],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.cr:A.iA
v=B.bX(A.bG,B.a([p.vU(E.Ou,"Bold",new C.e7X(p),m),p.vU(E.a1r,"Italic",new C.e7Y(p),m),p.vU(E.anQ,"Underline",new C.e7Z(p),m),p.vU(Af.a1y,"Heading",new C.e8_(p),m),p.vU(N.Ov,"Bullets",new C.e80(p),m),p.vU(E.anP,"Align",new C.e81(),m),p.vU(A.H3,"Link",p.gc1C(),m),p.vU(A.qt,"Image",p.gc1B(),m),p.vU(A_.a1K,"Video",p.gc1D(),m),p.vU(M.a2U,"Signature",new C.e82(p),m),p.vU(A_.Ow,"Divider",new C.e83(p),m)],j),A.br,o,4,4)
w=B.p(o,B.x(B.a([v,A.am,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.dn:A.bn,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.ak,o,A.e,A.i,0,A.p),A.f,w,o,o,o,o,o,o,E.amz,o,o,o)
v=n?A.dd:A.c
u=B.n(12)
t=B.L(n?A.e9:A.e2,A.r,1)
s=B.a([new B.ac(0,A.G,A.w.j(n?0.35:0.08),A.cI,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.jg:A.au,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.E(new B.D(A.bQ,B.p(o,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),r,o,o,o,o,o,2,B.bs(o,A.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.dn:A.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!0,p.f,A.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a4,o,A.an,o,o,o,o),A.f,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A7.C5,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.i5(n,B.T(n).k("i5<1>"))
j.push(B.p(o,B.bX(A.bG,n.gdW(n).dH(0,new C.e84(p,m),x.g5).dq(0),A.br,o,0,8),A.f,o,o,o,o,o,o,o,A.NO,o,o,o))}return B.c6(k,l,B.x(j,A.m,o,A.e,A.i,0,A.p),o,!1,!1,o,o)},
vU(d,e,f,g){var w=null,v=g.a,u=v?A.dd:A.c,t=B.n(8),s=B.n(8)
return B.hf(B.aI(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.ck,B.X(d,v?A.jg:A.au,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w,e,w,w)}}
C.doM.prototype={}
C.aCz.prototype={
a6(){return"_KbView."+this.b}}
C.ar4.prototype={
R(){return new C.aEX(D.b_3)},
cUr(d,e){return this.e.$2$size(d,e)}}
C.aEX.prototype={
gaBj(){var w,v
if(this.e==null)return null
for(w=J.aX(this.a.c);w.C();){v=w.gS(w)
if(v.a===this.e)return v}return null},
gcvU(){var w,v,u,t,s,r=this.gaBj()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
caY(d){this.m(new C.e7F(this,d))},
chV(d){this.m(new C.e7G(this,d))},
bEM(){this.m(new C.e7x(this))},
bEO(){this.m(new C.e7y(this))},
gb7N(){var w=B.bp(this.a.c,!0,x.i)
A.d.aX(w,new C.e7H())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.R(d).ax.a===A.J,f=new C.doM(g),e=x.O
e=g?B.a([A.O.j(0.9),A.bo.j(0.85)],e):B.a([A.eA.j(0.55),A.nh.j(0.45)],e)
w=B.n(22)
v=B.L((g?A.aK:A.fl).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bFU(f)
break
case 1:g=i.gaBj()
g.toString
g=i.bGC(f,g)
break
case 2:u=i.gaBj()
u.toString
t=i.gcvU()
t.toString
s=B.b1(u.d)
r=B.n(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.fql,h,h,h),A.f,h,h,new B.o(A.aM,h,h,r,h,h,A.n),h,h,h,h,A.bD,h,h,1/0)
q=g?A.au:A.c
p=B.n(16)
o=B.L(g?A.aK:A.aN,A.r,1)
n=B.a([new B.ac(0,A.G,A.w.j(g?0.28:0.06),A.en,10)],x.V)
m=g?A.fN:A.o_
l=B.n(8)
k=B.X(A.on,g?A.du:A.dF,h,h,h,14)
j=x.p
j=B.x(B.a([new C.aCx(f,i.gbEN(),u.c,s,"Answer",h),B.E(B.cl(B.a([r,A.ae,B.p(h,B.x(B.a([B.p(h,B.B(B.a([k,A.ec,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.du:A.dF,h,h,h,h,h,h,h,h,11,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.ee,A.h6,h,h,h),new C.b1c(t.c,t.e,f,h)],j),A.E,h,A.e,A.i,0,A.p),A.f,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.bQ,h,h,1/0)],j),h,h,A.alp,h,h,A.ah,!1),1)],j),A.ak,h,A.e,A.i,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.ap,h,h,new B.o(h,h,v,w,h,new B.a9(A.b0,A.b6,A.x,e,h,h),A.n),h,h,h,A.hQ,h,h,h,h)},
aYr(d){var w,v,u,t=null,s=d.a,r=s?D.tP:A.c,q=A.aD.j(0.22)
q=B.a([new B.ac(0,A.G,q,A.I,14),new B.ac(0,A.G,A.w.j(s?0.28:0.06),A.I,8)],x.V)
w=B.L(s?A.aK:A.fl,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.hW(v.cUr(v.d,72),A.ap),A.f,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.v(q,B.a([A.am,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.cT,t,t,t,t,t,t,t,t,12,t,t,A.U,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.x(q,A.m,t,A.e,A.i,0,A.p)},
bFU(d){var w,v,u=this,t=null,s=u.a.r
s=B.at(s!=null?B.aA(t,u.aYr(d),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.a3):u.aYr(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aP:A.O,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t)
return B.cl(B.a([s,A.aB,v,A.am,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bL:A.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.K,t,t),A.bx,B.ip(!0,t,t,A.y,F.aSQ,new C.e7A(u,d),u.gb7N().length,t,A.dS,A.ah,!0)],x.p),t,t,D.bBJ,t,t,A.ah,!1)},
bGC(d,e){var w,v,u,t,s=null,r=B.bp(e.e,!0,x.u)
A.d.aX(r,new C.e7C())
w=B.b1(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bL:A.al,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.at(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bL:A.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hS(s,new C.e7D(this,r,d,e),t,A.wa,s,A.ah,new C.e7E(),!1)
return B.x(B.a([new C.aCx(d,this.gbEL(),e.c,w,e.b,s),new B.D(An.wc,u,s),B.E(v,1)],x.p),A.ak,s,A.e,A.i,0,A.p)}}
C.aCx.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aH(v,v,v,v,B.X(A.eK,u?A.aP:A.O,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.n(12)
q=B.p(v,B.X(w.e,s,v,v,v,22),A.f,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.ck,v,v,v)
return new B.D(D.bF1,B.B(B.a([t,q,A.as,B.E(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aP:A.O,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v),v)}}
C.acu.prototype={
B(d){var w=null,v=this.c,u=B.b1(v.d),t=this.d.a,s=t?D.tP:A.c,r=B.n(14),q=B.n(14),p=B.n(14),o=B.L(t?A.aK:A.aN,A.r,1),n=B.a([new B.ac(0,A.G,A.w.j(t?0.28:0.06),A.dC,6)],x.V),m=u.j(0.15),l=B.n(12)
l=B.p(w,B.X(v.c,u,w,w,w,22),A.f,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fK(1,B.aI(!1,A.a2,!0,r,B.aO(!1,q,!0,B.p(w,B.x(B.a([l,A.am,B.d(v.b,w,2,A.a1,w,w,w,B.l(w,w,t?A.aP:A.O,w,w,w,w,w,w,w,w,10,w,w,A.H,w,1.1,!0,w,w,w,w,w,w,w,w),A.K,w,w)],x.p),A.m,w,A.b9,A.i,0,A.p),A.f,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.ck,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai),w)}}
C.b1c.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fN:A.o_
u=B.n(8)
t=B.X(A.uI,w?A.du:A.dF,s,s,s,14)
p.push(B.p(s,B.B(B.a([t,A.db,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.du:A.dF,s,s,s,s,s,s,s,s,10,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.ct,A.eJ,s,s,s))}A.d.v(p,J.b7(this.c,new C.cfe(r),x.l))
return B.x(p,A.E,s,A.e,A.i,0,A.p)}}
C.acn.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.D(D.bzt,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aP:A.O,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.D(A.hA,B.bx(B.n(12),K.aR2(r,A.bY,160,A.qt,r,w,1/0),A.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.D(A.hA,new C.aCy(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.D(A.w7,B.aO(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cp:A.bl,r,A.n2,r,r,r,r,r,r,r,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cN5(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.iJ(v?A.aK:A.aN,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.cq:A.aK,r,r,r,r,r,r,r,r,r,A.cD,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.f,v?A.bL:A.al,r,r,r,1,r,r,r,r,r,120)
return new B.D(A.BU,B.x(B.a([u,q,A.aQ,t,A.av,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bL:A.al,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.E,r,A.e,A.i,0,A.p),r)
case"bullets":v=x.cl
q=B.C(new B.cP(new B.Y(B.a(q.b.split("\n"),x.s),new C.cN6(),x.cc),new C.cN7(s),v),v.k("M.E"))
return new B.D(A.kN,B.x(q,A.E,r,A.e,A.i,0,A.p),r)
case"divider":return new B.D(A.hA,B.iJ(s.d.a?A.aK:A.aN,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bK
return new B.D(A.eI,C.hZt(q,s.d),r)}}}
C.aCy.prototype={
R(){return new C.biI()}}
C.biI.prototype={
Z(){this.a3()
this.af4()},
af4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$af4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d3(n,"http")&&!J.d3(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.YW(B.cI(n,0,null),null)
w=7
return B.b(J.aiG(q),$async$af4)
case 7:if(r.c==null){w=1
break}r.m(new C.doN(r,q))
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
return B.i($async$af4,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a1()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bo:A.fj
u=B.n(12)
return B.p(A.A,B.X(A.qF,w?A.bL:A.al,t,t,t,36),A.f,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.n(12)
v=s.a
u=J.aiE(v)
return B.bx(w,new B.fK(u,new B.an(A.A,t,A.ab,A.t,B.a([new B.Av(s,t),B.aH(t,t,t,t,B.X(v.f?A.anX:A.Ox,A.c,t,t,t,44),t,t,t,new C.doP(this,s),t,t,t,t,t,t)],x.p),t),t),A.ap)}}
C.arS.prototype={
a6(){return"NgmyMusicLane."+this.b}}
C.Jf.prototype={
a6(){return"NgmyMusicRhymeScheme."+this.b}}
C.rQ.prototype={}
C.ar7.prototype={
R(){var w=null
return new C.aEZ(new B.au(A.at,$.aw()),B.mT(0,w,w),B.a([],x.m),D.DH,D.aK2,w,w)},
ge2(){return this.d}}
C.aEZ.prototype={
Z(){var w,v=this
v.a3()
w=B.bm(null,A.np,null,1,null,v)
w.fp(0,!0)
v.as!==$&&B.aQ()
v.as=w
v.z=A.d.gI(D.a5S).a},
t(){var w=this,v=w.as
v===$&&B.c()
v.t()
v=w.d
v.T$=$.aw()
v.P$=0
w.e.t()
w.byb()},
garv(){var w,v,u,t,s=this.x
if(s===D.DI)return null
s=s===D.DH
w=s?D.a5S:D.a4Z
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gI(w):null},
cwH(d){return this.m(new C.e8j(this,d))},
aB5(){$.aW.x1$.push(new C.e8a(this))},
Jl(d){return this.cw8(d)},
b0c(){return this.Jl(null)},
cw8(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Jl=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$Jl)
case 3:e=b2
if(!e){w=1
break}B.jQ()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.b_(a0,new C.e8c())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.huM(a8)&&a1
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
l=C.huM(a8)&&!p
q.m(new C.e8d(q,a8))
q.aB5()
k=A.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.e8e(q))
q.aB5()
w=1
break}t=5
j=B.nk(k)
i=new B.N(a0,new C.e8f(),B.T(a0).k("N<1,m>")).aI(0,"\n\n")
a0=C.iiM(m,p,o,q.x,n,q.y,q.garv(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+B.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.w(a8)
w=8
return B.b(B.re(j,h,A.hU,null,null),$async$Jl)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bDV(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.e8g(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.e8h(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.e8i(q))
q.aB5()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jl,v)},
bKD(){return this.Jl("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.R(d).ax.a===A.J,p=q?A.G9:D.boJ,o=x.p
o=B.a([B.x(B.a([B.E(s.cvn(q),1),s.bJQ(q)],o),A.m,r,A.e,A.i,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aT.j(0.55)
v=s.r?r:s.gbKC()
u=B.n(28)
t=B.a([A.aT,A.ay],x.O)
o.push(B.ap(78,B.aI(!1,A.a2,!0,r,B.aO(!1,r,!0,B.eK(D.eou,r,new B.o(r,r,r,u,B.a([new B.ac(0,A.G,A.aT.j(0.45),A.cI,16)],x.V),new B.a9(A.a5,A.a8,A.x,t,r,r),A.n),r,r,r),A.to,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.f,A.L,10,r,w,A.to,r,r,A.ai),r,r,r,14,r,r))}return B.p(r,new B.an(A.a_,r,A.ab,A.t,o,r),A.f,p,r,r,r,r,r,r,r,r,r,r)},
cvn(d){var w,v,u,t=this,s=null
if(t.x===D.DI)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.h7I(s,!1,A.L,0,0,w,B.h3W(t.cBe(d),A.XO,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.X(A.aqj,A.aD.j(0.5),s,s,s,52)
w.push(B.b7O(new B.D(A.eu,B.x(B.a([u,A.aB,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aC:A.dL,s,s,s,s,s,s,s,s,14,s,s,A.a7,s,1.45,!0,s,s,s,s,s,s,s,s),A.K,s,s),A.aB,B.bX(A.fI,B.a([t.ajn("Full bongo love song ABAB",d),t.ajn("Mix: group vs private jet \u2014 which flies?",d),t.ajn("Song from John 3:16 + matching verses",d),t.ajn("Fix my rhyme \u2014 paste your lines",d)],v),A.br,s,8,8)],v),A.m,s,A.b9,A.i,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.o7(D.bAa,B.Yk(new B.oJ(new C.e8b(t,d),u+v,!0,!0,!0,0,B.ti(),s)),s))}return B.w_(0,s,A.t,t.e,A.y,s,s,A9.adv,s,s,!1,s,A.ah,!1,w)},
cBe(d){var w=this.as
w===$&&B.c()
return B.cb(w,new C.e8q(this,d),null)},
cBg(d){var w,v=this,u=null,t=B.n(14),s=v.r?u:new C.e8s(v),r=A.w.j(d?0.35:0.06),q=B.n(14),p=B.L(A.b8.j(0.35),A.r,1),o=v.garv()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.Eu,u,u,u)
w=v.garv()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.E(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bk,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(u,B.B(B.a([o,A.ad,w,B.X(v.w?A.OW:A.rN,A.b8,u,u,u,20)],x.p),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.nu,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)},
awH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.b1,A.aW],x.O)
break
case 1:w=B.a([A.bl,A.cp],x.O)
break
case 2:w=B.a([A.bE,A.aD],x.O)
break
default:w=n}v=m?6:0
u=B.n(14)
t=B.n(14)
s=this.r?n:new C.e89(this,d)
r=B.n(14)
w=m?new B.a9(A.a5,A.a8,A.x,w,n,n):n
if(m)q=n
else q=A.w.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.Eu,n,n,n)
if(m)o=A.c
else o=g?A.ac:A.bk
return B.E(B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.cY(n,B.x(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.m,n,A.e,A.i,0,A.p),n,n,A.b5,new B.o(q,n,n,r,n,w,A.n),A.a2,n,n,n,n,A.jW,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.f,n,v,n,n,n,n,n,A.ai),1)},
cBh(d,e){var w,v,u,t=this,s=null,r=t.x===D.DH?t.z:t.Q,q=B.n(20)
if(r===d.a)r=A.b8.j(e?0.25:0.15)
else r=A.w.j(e?0.2:0.04)
w=B.n(20)
v=t.r?s:new C.e8t(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.V6,s,s,s)
return B.aI(!1,A.a2,!0,q,B.aO(!1,w,!0,new B.D(A.h7,B.B(B.a([u,A.db,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bk,s,s,s,s,s,s,s,s,10,s,s,A.U,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.m,s,A.e,A.P,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.f,r,0,s,s,s,s,s,A.ai)},
ajn(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.aaO,w,w,w),u=A.aD.j(e?0.2:0.1)
return B.n_(w,u,v,w,this.r?w:new C.e8k(this,d),w,w,w,w)},
bJQ(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.n(22),o=d?A.O.j(0.95):A.c,n=B.L(A.aD.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.D(Ai.amj,B.d("$"+A.k.ac(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aT.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bk,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.DI?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),w,r,r,r,r,r,2,B.bs(r,A.eF,r,A.h8,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.bU:A.hy,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.e86(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a4,r,A.an,r,r,r,r),1)
u=s.r
t=u?r:new C.e87(s)
l.push(B.B(B.a([v,new B.Jp(w,A.aD,r),B.aI(!1,A.a2,!0,r,B.aO(!1,r,!0,B.eK(u?D.eoK:D.bWi,r,D.b6j,42,r,42),A.cO,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.f,r,0,r,r,A.cO,r,r,A.ai)],m),A.dI,r,A.e,A.i,0,r,r))
return B.p(r,B.x(l,A.ak,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.ul,A.a_z,r,r,r)}}
C.aNc.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.W2.prototype={
ah(){var w=this
return B.H(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a_j.prototype={
R(){return new C.aBZ(null,null)},
biP(){return this.f.$0()}}
C.aBZ.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bm(u,D.byy,u,1,u,v)
w.cq(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bm(u,A.qh,u,1,u,v)
w.fp(0,!0)
v.e!==$&&B.aQ()
v.e=w
w=B.bm(u,A.lF,u,1,u,v)
w.cM(0)
v.f!==$&&B.aQ()
v.f=w
w=B.bm(u,A.yk,u,1,u,v)
w.cq(0)
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
w.bx1()},
cb_(){var w=this.d
w===$&&B.c()
w.eG(0).bJ(new C.dm6(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aG(d,A.bZ,x.w).w.a.a-32,360),h=A.w.j(0.82),g=k.gcaZ(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.DB(new C.dm7(k,v,d),j,w,j)}f=B.C(e,f)
w=k.d
w===$&&B.c()
u=B.n(28)
t=B.L(A.c.j(0.22),A.r,1.5)
s=B.a([new B.ac(2,A.G,A.ay.j(0.35),A.I,40),new B.ac(0,A.G,A.aM.j(0.25),A.h_,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.cb(new B.h9(B.a([r,q],x.U)),new C.dm8(k),j)
r=B.o6(A.jN,D.fTN,new C.dm9())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cA,j,1.45,!0,j,j,j,j,j,j,j,j),A.K,j,j)
o=x.p
n=B.B(B.a([k.b0d(A.k0,"Resets in 24h"),A.ad,k.b0d(A.on,"Help Topics ready")],o),A.m,j,A.b9,A.i,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.E(B.dT(D.fNY,new C.dma(k),B.dj(j,j,j,j,j,j,j,j,j,A.ac,j,j,A.m9,j,new B.b8(B.n(14),A.a0),new B.ay(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.as)
k.a.toString
l=B.n(14)
m.push(B.E(B.bI(D.fTD,j,g,B.bo(A.aM,j,j,6,A.c,j,A.m9,A.aM.j(0.5),new B.b8(l,A.a0),j,j,j)),1))
f.push(B.at(B.aA(j,B.cb(w,new C.dmb(k),B.p(j,B.x(B.a([q,A.aB,r,A.W,p,A.N,n,A.bx,B.B(m,A.m,j,A.e,A.i,0,j,j)],o),A.m,j,A.e,A.P,0,A.p),A.f,j,j,new B.o(j,j,t,u,s,D.c4m,A.n),j,j,j,j,Aa.amb,j,j,i)),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dmc(),j,j,j,j,j,j,!1,A.a3),j,j,j))
return B.aI(!1,A.a2,!0,j,B.aA(j,new B.an(A.a_,j,A.ab,A.t,f,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.a3),A.f,h,0,j,j,j,j,j,A.ai)},
b0d(d,e){var w=null,v=A.c.j(0.08),u=B.n(20),t=B.L(A.c.j(0.12),A.r,1)
return B.p(w,B.B(B.a([B.X(d,A.ay,w,w,w,13),A.ec,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.h7,w,w,w)}}
C.aM5.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.Om.prototype={}
C.q8.prototype={}
C.arE.prototype={
R(){return new C.aFk(B.a([],x.E),B.a([],x.s))}}
C.aFk.prototype={
garU(){return A.k.E(B.LB(this.a.c.a,new C.emz(this)),0,1/0)},
a9h(){var w,v=this,u=v.d,t=v.garU()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.rb(u.a,t,!0,!1)},
JP(d,e){var w,v,u,t=this,s=t.garU(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.garU()
if(w<v-0.005)B.hAd(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.rb(u.a,w,!0,!1)
B.rb(t.a.c.a,w,!0,!1)
B.Bb(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a3()
$.aW.c1$.push(o)
w=$.J2+1
$.J2=w
if(w===1){w=$.hmf
if(w!=null)w.$0()}v=$.h6_.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bp(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bp(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.m0(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aQI(u,A.k.E(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.vS(w,u,r,q,s.e,p)}o.d=t}o.Pw()
o.a9h()
$.aW.x1$.push(new C.enf(o))
o.Q=B.df(A.nq,new C.eng(o))
o.as=B.df(A.fY,new C.enh(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a2(0)
v=w.as
if(v!=null)v.a2(0)
$.aW.hV(w)
C.hRj()
w.a1()},
cDo(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.V(Date.now(),0,!1)
v=p.r
if(!C.a8o(v,w)){if(C.h61(p,q.e)){q.m(new C.emY(q,p))
q.yb(!1,!0,!0)}else if(q.c!=null)q.m(new C.emZ())
return}if(!C.cht(v.c?v.bU():v)){q.m(new C.en_(p))
q.b0m(!1)
return}u=p.gCB()
if(u<=0)return
t=w.d3(B.c3(B.bC(w),B.bL(w),B.bW(w),12,0,0,0,0))
s=C.h62(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.en0())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.b_(q.e,new C.en1(r))){q.m(new C.en2(p,w,u))
return}q.m(new C.en3(q,p,u,w))
q.az5(new B.d7(r,p.a,u,A.fT,A.fn,"Clock-in daily earnings (local)",null,null,A.cs,w))},
ji(d){if(d===A.fK)this.EZ()},
Pw(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bj=p.bj
w.c8=B.bp(p.c8,!0,x.N)
w=this.a.c
w.bG=p.c8.length
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
q=new B.vS(u,t,s,r,v.e,q)
u=q}w.x=u},
Sn(d){return this.cC1(d)},
cC1(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Sn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Pw()
t.JP(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dV(s,x.H),$async$Sn)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Sn,v)},
EZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$EZ=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(H.zW(q.w,k,l,j,m,!1,n),$async$EZ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.emT(q,p))
q.Sn(!1)}w=8
return B.b(q.K0(),$async$EZ)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.ab(h)
$.am.$1("[growth income] pull wallet: "+B.w(o))
w=9
return B.b(q.K0(),$async$EZ)
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
return B.i($async$EZ,v)},
NY(d){return this.bDY(d)},
bDX(){return this.NY(null)},
bDY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$NY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.az(),$async$NY)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.dg(t.w,x.N)
r=s.tH("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.jU(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.K)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fH&&l.x===A.cs&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.emA(j,t,i))
q.v(0,p)
r=B.C(q,B.a6(q).k("cs.E"))
t.w=r
w=4
return B.b(B.arG(t.a.c.a,r),$async$NY)
case 4:t.ayC(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Balance updated: +$"+B.dF(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$NY,v)},
K0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$K0=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("Y<1>")
a4=B.C(new B.Y(a2,new C.emU(),a3),a3.k("M.E"))
a5=a4
a6=B.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("N<1,m>")
e=B.C(new B.N(a2,new C.emV(),a3),a3.k("ak.E"))
q=e
w=9
return B.b(B.lE("transactions","id,status",null,null,null,B.H(["id",q],x.N,x.j),null,!0,null,null,!1,A.bJ),$async$K0)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aX(p);a2.C();){n=a2.gS(a2)
m=n
a3=J.r(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aK(J.r(m,"status"))
d=a3==null?null:A.k.N(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=A.d.bg(r.e,new C.emW(l))
if(j<0)continue
i=r.e[j].x
if(J.A(k,1))a0=A.cs
else a0=J.A(k,2)?A.kA:A.dy
h=a0
if(!J.A(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dy&&h===A.cs&&a3[j].d===A.fH)J.cc(a6,l)
if(i===A.dy&&h===A.kA&&r.e[j].d===A.eW){g=r.d
if(g!=null){r.JP(g.d+r.e[j].c,!1)
r.ayC(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.emX())
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
return B.b(r.NY(a6),$async$K0)
case 13:w=11
break
case 12:w=14
return B.b(r.bDX(),$async$K0)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$K0,v)},
Qi(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Qi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return B.b(B.v5(i.a,i),$async$Qi)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.emE(t,h))
t.Pw()
t.a9h()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.zW(s[0],p,q,o,r,!0,i),$async$Qi)
case 4:i=e.a
n=i[4]
m=B.bp(i[2],!0,x.o)
l=i[5]
t.w=B.bp(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Pw()
t.a9h()
k=C.h61(n,m)
if(k)t.JP(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a_&&s.aB>0
else s=!0
j=B.hn0(n,m,new B.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Pw()
if(t.c==null){w=1
break}t.m(new C.emF(t,n,m,l))
if(i){t.yb(!1,!0,!0)
if(j==="reset"){B.hlP(t.a.c.a)
i=t.c
if(i!=null)B.hlS(i,null)}else if(j==="warn2"){B.hlQ(t.a.c.a)
i=t.c
if(i!=null)C.hlT(i)}}else if(k)t.yb(!1,!0,!0)
else t.Sn(!1)
case 1:return B.h(u,v)}})
return B.i($async$Qi,v)},
yb(d,e,f){return this.clx(d,e,f)},
ayC(d,e){return this.yb(d,!1,e)},
b0m(d){return this.yb(!1,d,!1)},
clx(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.V(Date.now(),0,!1).a9()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rO(r,o,q,!1,t.w,s,p),$async$yb)
case 3:p=t.a.c.a
q=t.e
r=t.f
B.J8(t.w,p,q,s,o,r)
if(f)t.Sn(d)
case 1:return B.h(u,v)}})
return B.i($async$yb,v)},
cbg(){this.m(new C.emN())
this.ayC(!1,!0)},
afP(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cs&&B.tg(d)){w=r.a
w.f.$1(new B.d7(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.chp(q,d)
v=q.d=B.LB(r.a.c.a,new C.emK(r))
r.at=r.a.c.d=v
B.rb(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.emL(r,d))
r.yb(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.d7(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dy
if(w&&d.d===A.fH)s=!1
else if(w&&d.d===A.eW){r.JP(q.d-d.c,!0)
s=!0}else{C.chp(q,d)
w=d.d
s=w===A.eW||w===A.kb
r.JP(q.d,s)}r.m(new C.emM(r,d))
w=d.d
r.yb(s,e,w===A.eW||w===A.kb||d.x===A.cs||w===A.fT)},
az5(d){return this.afP(d,!0,!1)},
b1q(d,e){return this.afP(d,!0,e)},
b1p(d,e){return this.afP(d,e,!1)},
cen(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.il_(u,e,d)){v.mh("This plan is already active.")
return}w=B.hzJ(u.a,d,e)
if(C.ihn(u.a,v.e,w)){v.mh("You already own this plan.")
return}if(u.d<g){v.mh("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.emO(v))
v.m(new C.emP(v,u,new B.vS(d,e,0.0286,new B.V(Date.now(),0,!1),0,0)))
v.az5(new B.d7(w,u.a,g,A.kb,A.fn,"Direct investment buy: "+d,null,null,A.cs,new B.V(Date.now(),0,!1)))
v.m(new C.emQ(v))
v.mh("Plan purchased: "+d)},
mh(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
a0h(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.aoq(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0h)
case 3:w=4
return B.b(t.Qi(),$async$a0h)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a0h,v)},
agi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.aj0(r,B.a([r],x.d9),A.RY,t.a.d,t.gb1o(),t.gb0l(),null),!1,null,x.X),$async$agi)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agi,v)},
agg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hI(s,new C.am2(r,t.a.d,t.e,t.gb1o(),t.gb0l(),new C.emS(t),null),!1,"LocalGrowthGameCenter",x.X),$async$agg)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
adC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.V(s,0,!1)
w=C.h61(j,t.e)?3:4
break
case 3:w=5
return B.b(t.b0m(!0),$async$adC)
case 5:case 4:if(j.x==null){t.mh("Choose an investment plan first, then come back to clock in.")
t.m(new C.emG(t))
w=1
break}if(B.mn(r)===6||B.mn(r)===7){t.mh("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hn1(r)){t.mh("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a8o(q,r)&&j.fy>0){t.mh("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.aRp(q,r))if(!B.aRp(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aHe(m.y,l,m.a))}}q=B.hza(q,r)}else q=p
else q=p}else q=!1
if(q){t.mh("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mh("You are already clocked in for today.")
w=1
break}k=C.hSL(r)
q=j.a
t.m(new C.emH(j,r,k))
t.b1p(new B.d7("local_clockin_manual_"+q+"_"+s,j.a,0,A.fT,A.fn,"Clock-in session started (local)",null,null,A.cs,r),!1)
t.mh("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$adC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.R(d).ax.a===A.J?A.jw:A.qa
if(l.d==null)return B.ec(A.kx,j,!0)
w=x.o
v=B.U(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fIK
u=u==null?k:u.$0()
u=J.aX(u==null?A.iv:u)
while(u.C()){t=u.gS(u)
q=t.a
if(q.length===0||v.aj(0,q)||B.tg(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.cV(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=B.C(new B.b9(v,v.$ti.k("b9<2>")),w)
v=l.e
A.d.v(w,new B.Y(v,new C.en7(),B.T(v).k("Y<1>")))
A.d.aX(w,new C.en8())
v=l.d
v.toString
u=C.i6J(l.a.c)
t=l.d
t.toString
t=B.ec(new C.amT(t,l.a.e,l.z,l.gcem(),l.aVK(),D.hlz),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ec(new C.aCM(l.aVK(),q,n,o,w,new C.en9(l),l.gcgs(),new C.ena(l),D.hlA),j,!0)
m=B.aG(d,k,x.w).w
n=l.y
return new B.WR(n,new C.enb(l),B.aI(!1,A.a2,!0,k,new B.a4(1/0,m.a.b,new B.an(A.a_,k,A.ab,A.t,B.a([B.bT(0,B.ec(k,j,!0),0,0,0),B.bT(0,B.bn(!1,[new C.aCL(v,u,w,l.gc4I(),new C.enc(l),new C.end(l),new C.ene(d),l.gchj(),l.gche(),D.hly),t,o][n],!0,!1,A.af,!0,!0),0,0,0),B.ap(0,l.bGl(),k,k,0,0,k,k)],x.p),k),k),A.f,j,0,k,k,k,k,k,A.ai),k)},
aVK(){var w=null,v=B.a([D.eQ.j(0.24),A.O.j(0.72)],x.O)
return B.hf(B.aO(!1,w,!0,B.p(A.A,D.c_W,A.f,w,w,new B.o(w,w,B.L(D.eQ.j(0.38),A.r,1),w,B.a([new B.ac(0,A.G,D.eQ.j(0.18),A.I,16)],x.V),new B.a9(A.az,A.aE,A.x,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cO,!0,w,w,w,w,w,w,w,w,w,w,w,new C.emD(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bGl(){var w=null,v=B.n(27),u=B.L(A.aA.j(0.45),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.5),A.eU,24),new B.ac(-2,A.G,A.aA.j(0.12),A.I,18)],x.V)
return new B.D(A.NO,B.bn(!0,B.at(new B.cU(D.b4C,B.p(w,B.cu(new C.emB(this)),A.f,w,w,new B.o(w,w,u,v,t,D.c3P,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.af,!0,!1),w)},
c6n(d){var w=null,v=this.y===d,u=D.d9w[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.E(B.dw(w,!0,w,B.aA(A.c6,B.rY(B.p4(v?B.X(s,D.aeU,new B.bQ("on"+r,q),w,w,21):B.x(B.a([B.X(s,A.c.j(0.62),w,w,w,19),A.bF,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,new B.bQ("off"+r,q),A.b9,A.i,0,A.p),A.iG,B.qv(),A.b5,A.b5,B.Lh())),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.emJ(this,d),w,w,w,w,w,w,!1,A.a3),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.c8,w),1)}}
C.aCL.prototype={
c3p(d){return C.h62(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.R(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("Y<1>")
u=B.pA(new B.Y(v,new C.dqx(),u),3,u.k("M.E"))
t=B.C(u,B.a6(u).k("M.E"))
v=f.c
s=v.x
r=new B.V(Date.now(),0,!1)
q=v.f
p=C.a8o(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hn1(r)
m=v.gCB()
l=B.a([D.eQ.j(0.24),A.O.j(0.72)],x.O)
k=B.L(D.eQ.j(0.38),A.r,1)
j=x.V
i=B.a([new B.ac(0,A.G,D.eQ.j(0.18),A.I,16)],j)
l=B.aO(!1,e,!0,B.p(A.A,B.X(A.i8,D.eQ,e,e,e,19),A.f,e,e,new B.o(e,e,k,e,i,new B.a9(A.az,A.aE,A.x,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cO,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.n(14)
k=B.n(14)
j=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.cI,16)],j)
h=B.n(12)
g=x.p
j=B.bSC(!1,l,"GROWTH INCOME",B.aO(!1,i,!0,new B.a4(44,44,new B.an(A.a_,e,A.ab,A.f,B.a([B.p(A.A,B.p(A.A,D.bTg,A.f,e,e,new B.o(A.iD.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.f,e,e,new B.o(e,e,e,k,j,D.c5m,A.n),e,42,e,e,e,e,e,42),B.ap(e,B.p(A.A,D.c__,A.f,e,e,new B.o(A.bs,e,B.L(D.ahU,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hpC(A.fB,new C.dqy(),k)
k=B.B(B.a([B.E(C.hpB(new C.dqz(f,A.rk,n),new B.V(Date.now(),0,!1),h,k),1),A.oM,B.E(new B.tE(new C.dqA(f,A.rk),e,new B.h9(B.a([$.z2(),$.a3r()],x.U)),e),1)],g),A.m,e,A.e,A.i,0,e,e)
h=f.c6A(A.rk,D.eQ)
v=B.E(f.czw("Total Profit","$"+B.dF(v.e),A.rk),1)
u=u?e:s.b
return B.ec(B.ci(B.x(B.a([j,A.W,k,A.ae,new C.aCK(f.d,m,q,p,n,o,D.eQ,f.gc3o(),f.f,e),A.ae,h,A.W,B.B(B.a([v,A.oM,B.E(f.b7I("Total Investment","$"+B.dF(u==null?0:u),A.rk,f.r),1)],g),A.m,e,A.e,A.i,0,e,e),A.W,f.c3l(d,t,D.eQ,w)],g),A.ak,e,A.e,A.i,0,A.p),A.t,e,A.y,e,A.a06,e,e,A.ah),D.ahU,!0)},
ayB(d,e,f,g,h){var w=null,v=B.n(h),u=B.L(A.c.j(0.09),A.r,1),t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.ds,18)],x.V)
return B.p(w,B.bx(B.n(h-1),new B.an(A.a_,w,A.ab,A.t,B.a([B.bT(0,B.c4(w,new B.o(w,w,w,w,w,new B.c_(f,1.15,A.x,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.bh),0,0,0),new B.D(g,d,w)],x.p),w),A.ap),A.f,w,w,new B.o(w,w,u,v,t,D.c4g,A.n),w,w,w,w,w,w,w,w)},
b0k(d,e,f,g){return this.ayB(d,e,f,A.af,g)},
b9O(d,e,f,g,h,i,j){var w=null,v=B.ap(-14,B.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.n(30),s=B.L(f.j(0.4),A.r,1),r=x.p,q=this.b0k(new B.a4(w,80,new B.an(A.a_,w,A.ab,A.t,B.a([v,new B.D(D.bAG,B.x(B.a([B.p(w,B.B(B.a([B.X(e,f,w,w,w,15),A.ec,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.amp,w,w,w),A.b2,B.eO(A.a5,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e3)],r),A.E,w,A.e,A.i,0,A.p),w)],r),w),w),f,A.lu,22)
if(g==null)return q
return B.aO(!1,B.n(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c6A(d,e){var w,v,u,t,s=null,r=B.L(e.j(0.55),A.r,2),q=e.j(0.12),p=x.p,o=B.a([],p)
for(w=0;w<3;++w){v=new B.aP(3,3)
o.push(B.p(s,s,A.f,s,s,new B.o(e,s,s,new B.bh(v,v,v,v),s,s,A.n),s,D.cUD[w],s,D.bEi,s,s,s,5))}r=B.p(s,B.B(o,A.dI,s,A.b9,A.i,0,s,s),A.f,s,s,new B.o(q,s,r,s,s,s,A.a6),s,42,s,s,s,s,s,42)
q=B.E(B.x(B.a([D.fPL,A.bF,B.B(B.a([B.p(s,s,A.f,s,s,new B.o(e,s,s,s,B.a([new B.ac(0,A.G,e,A.I,6)],x.V),s,A.a6),s,7,s,s,s,s,s,7),A.bm,new B.ds(1,A.cn,B.d("Live \xb7 real-time statistics",s,1,A.a1,s,s,s,B.l(s,s,A.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,A.a7,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),A.m,s,A.e,A.i,0,s,s)],p),A.E,s,A.e,A.i,0,A.p),1)
o=B.n(16)
v=B.n(16)
u=A.w.j(0.3)
t=B.L(e.j(0.45),A.r,1.2)
return this.ayB(B.B(B.a([r,D.faW,q,A.ad,B.aO(!1,o,!0,B.p(s,B.x(B.a([B.X(A.or,e.j(0.95),s,s,s,21),A.vq,B.d("PLAY",s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,A.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),A.m,s,A.b9,A.i,0,A.p),A.f,s,s,new B.o(u,s,t,v,s,s,A.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),A.m,s,A.e,A.i,0,s,s),e,A.a5,A.a_C,26)},
b7I(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.bs:A.aJ,s=B.p(v,v,A.f,v,v,new B.o(t,v,v,D.b2N,v,v,A.n),v,v,v,A.nt,v,v,v,5),r=x.p
r=B.a([s,A.bd,B.E(B.x(B.a([B.B(B.a([B.X(u?A.uG:A.z6,t,v,v,v,14),A.ec,new B.ds(1,A.cn,B.d(d,v,1,A.a1,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.m,v,A.e,A.i,0,v,v),A.am,B.eO(A.a5,B.d(e,v,1,v,v,v,v,D.fkf,v,v,v),A.f,A.e3)],r),A.E,v,A.b9,A.i,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.D(A.Gx,B.X(A.eE,A.c.j(0.35),v,v,v,v),v))
w=this.b0k(new B.a4(v,66,B.B(r,A.m,v,A.e,A.i,0,v,v),v),t,A.lv,20)
if(s)return w
return B.aO(!1,B.n(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
czw(d,e,f){return this.b7I(d,e,f,null)},
c3l(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.f,m,m,new B.o(f,m,m,m,B.a([new B.ac(0,A.G,f,A.I,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.n(20),h=x.p
i=B.a([B.B(B.a([l,A.a9J,k,A.b2,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.f,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.a0j,m,m,m)],h),A.m,m,A.e,A.i,0,m,m),A.N],h)
if(e.length===0)i.push(new B.D(A.a_r,B.x(B.a([B.X(A.ho,g,m,m,m,30),A.am,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bF,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a7,m,m,!0,m,m,m,m,m,m,m,m),A.K,m,m)],h),A.m,m,A.e,A.i,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.mC(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.eW||v===A.kb
t=u?A.i1:D.eQ
g=A.c.j(0.5)
v=new B.aP(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ay(t.j(0.35),1,A.r,-1)
v=B.p(A.A,B.X(u?A.uG:A.wC,t,m,m,m,18),A.f,m,m,new B.o(m,m,new B.bG(r,r,r,r),new B.bh(v,v,v,v),m,new B.a9(A.az,A.aE,A.x,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=C.ife(j)
q=C.hre(j.y)
s=B.x(B.a([new B.y(s,m,A.lr,m,m,m,m,A.a1,m,1,m,m),A.bF,new B.y(q,m,new B.F(!0,g,m,m,m,m,11,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.E,m,A.e,A.i,0,A.p)
q=t.j(0.14)
p=new B.aP(20,20)
o=u?"-":"+"
n=B.dF(j.c)
q=B.p(m,new B.y(o+"$"+n,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),A.f,m,m,new B.o(q,m,m,new B.bh(p,p,p,p),m,m,A.n),m,m,m,m,A.oi,m,m,m)
j=C.hyN(j)
k.push(new B.D(O.NF,new B.ca(A.aL,A.e,A.i,A.m,m,A.p,m,0,B.a([v,A.bd,new B.by(1,A.bb,s,m),B.x(B.a([q,A.cS,new B.y(j,m,new B.F(!0,g,m,m,m,m,10,A.U,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.dI,m,A.e,A.i,0,A.p)],h),m),m))
A.d.v(i,k)}return this.ayB(B.x(i,A.m,m,A.e,A.i,0,A.p),f,A.b0,D.bAQ,26)}}
C.aCK.prototype={
R(){return new C.bjr(null,null)},
cU6(d){return this.z.$1(d)},
cVr(){return this.Q.$0()}}
C.bjr.prototype={
Z(){var w,v=this,u=null
v.a3()
w=B.bm(u,A.qj,u,1,u,v)
w.cM(0)
v.d!==$&&B.aQ()
v.d=w
w=B.bm(u,D.byo,u,1,u,v)
w.cM(0)
v.e!==$&&B.aQ()
v.e=w
w=B.bm(u,A.uh,u,1,u,v)
v.f!==$&&B.aQ()
v.f=w
v.b8R()},
gbbw(){var w=new B.V(Date.now(),0,!1)
if(B.mn(w)===6||B.mn(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b8R(){var w=this,v=w.a,u=v.e||v.f||w.gbbw()
if(u){v=w.f
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&B.c()
v.cM(0)}else{if(!u){v=w.f
v===$&&B.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&B.c()
v.bR(0)}}},
bz(d){this.bH(d)
this.b8R()},
t(){var w=this,v=w.d
v===$&&B.c()
v.t()
v=w.e
v===$&&B.c()
v.t()
v=w.f
v===$&&B.c()
v.t()
w.bxi()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbbw()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.aA:g.x
g=g.r?new C.dqq(i):h
v=B.n(32)
s=B.n(32)
r=f?D.drz:D.drx
q=B.L((f?D.p2:A.b_).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.ac(0,A.G,(f?A.aA:A.b8).j(0.16),A.h_,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.v(m,B.a([B.ap(h,i.ac6(D.p2,130),h,h,h,-24,-30,h),B.ap(-36,i.ac6(A.aA,140),h,h,-28,h,h,h)],n))
else A.d.v(m,B.a([B.ap(h,i.ac6(A.b8,120),h,h,h,-30,-36,h),B.ap(-40,i.ac6(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.n(32)
k=i.f
k===$&&B.c()
m.push(B.bT(0,B.e_(B.bx(l,new B.er(B.cb(k,new C.dqr(i),h),h),A.ap),!0,h),0,0,0))}if(f){l=B.n(32)
k=i.f
k===$&&B.c()
m.push(B.bT(0,B.e_(B.bx(l,new B.er(B.cb(k,new C.dqs(i),h),h),A.ap),!0,h),0,0,0))}l=B.n(999)
k=A.c.j(0.06)
j=B.L(A.c.j(0.16),A.r,1)
m.push(B.ap(h,new B.cU(D.b4I,B.p(h,B.B(B.a([B.p(h,h,A.f,h,h,new B.o(t,h,h,h,B.a([new B.ac(0,A.G,t.j(0.5),A.I,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ad,new B.ds(1,A.cn,B.d(u,h,1,A.a1,h,h,h,D.fq6,h,h,h),h)],n),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.h8,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hpC(A.fB,new C.dqt(),l)
m.push(C.hpB(new C.dqu(i,f,t,e,w),new B.V(Date.now(),0,!1),j,l))
return B.aO(!1,v,!0,B.cY(h,new B.an(A.a_,h,A.ab,A.f,m,h),h,h,A.b5,new B.o(h,h,q,s,o,new B.a9(A.az,A.aE,A.x,r,h,h),A.n),A.BQ,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
ac6(d,e){var w=null
return B.e_(B.p(w,w,A.f,w,w,new B.o(w,w,w,w,w,new B.c_(A.A,0.5,A.x,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.bd1.prototype={
b0n(d,e,f,g){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.D(new B.aY(v,t))
w.D(new B.c5(v,u,v+f,u))
w.D(new B.c5(v,u,v,u+f))
w.D(new B.c5(v,u,v-f,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bt())
d.aK(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.F(u,3))+u)+1)/2
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=A.c.j(0.1+r*0.5).gp(0)
a7.b0n(b2,new B.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=A.k.F(b0+o/3,1)
$.S()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.b=A.a9
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.G()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=A.k.F(w*(1+A.o.F(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+A.o.F(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=A.k.E(Math.sin(k*3.141592653589793),0,1)
switch(A.o.F(u,4)){case 0:e=A.k.E(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bl(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=b0.j(f).gp(0)
l=d.G()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.b=A.a9
h.c=1.2
h.r=p.j(f).gp(0)
l=h.G()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hEx()
g=h.b
a0=g.c
g=g.a.c
h.a4(b2,new B.u(-a0/2,-g.gba(g)/2))}a8.restore()
break
case 1:$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.r=p.j(f*0.95).gp(0)
a7.b0n(b2,new B.u(h,g),3+f*3,a0)
break
case 2:$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.r=A.c.j(f*0.8).gp(0)
l=a0.G()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.S()
a3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3.c=1.8
a3.d=A.by
a3.r=b0.j(f*0.8).gp(0)
l=a3.G()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=p.j(o*0.85).gp(0)
l=g.G()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=b0.j(0.28).gp(0)
g.z=Q.oE
l=g.G()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
av(d){return d.b!==this.b}}
C.bd0.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.S(),a4=B.J()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=B.a([],t)
p=new B.aF(a3,A.ag,e,e,q)
o=r-0.14361566416410484
q.push(new B.aY(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.aq(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new B.aq(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new B.aq(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.bt())
n=a4.G()
q=p.gbu().a.snapshot()
w.drawPath((p.e=new B.cd(q)).a,n)
n.delete()}a0=v*2
a2=A.k.F(a0,1)
J.bl(w.save())
w.translate(a2*(d+240)-120,0)
a5.io(0,0.35)
a2=-a1
a3=B.J()
a3.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aA(0,D.f3R))
a5.aQ(new B.a3(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=A.k.F(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=A.k.F(v*(1+A.o.F(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bl(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+A.o.F(s,3))*180/3.141592653589793,0,0)
a3=A.k.E(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=A.k.E(a3,0,1)
a3=B.br(D.f4p,A.U8)
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.r=D.aCf[A.o.F(s,6)].j(k*0.9).gp(0)
n=u.G()
w.drawRRect(B.e7(a3),n)
n.delete()
w.restore()}j=[new B.u(d*0.18,a1*0.2),new B.u(d*0.82,a1*0.26),new B.u(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=A.k.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=A.k.E(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.aCf[A.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.c=2
q.d=A.by
q.r=f.gp(0)
n=q.G()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=f.gp(0)
n=q.G()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.S()
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.r=A.c.j(k).gp(0)
n=a2.G()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
av(d){return d.b!==this.b}}
C.bd_.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new B.u(a0,a1),a3=a0-4,a4=a3-22
$.S()
w=B.J()
w.b=A.a9
w.c=14
v=e.d
w.r=(v?e.r:A.b_).j(0.22).gp(0)
a5.ad(a2,a3-7,w)
w=B.J()
w.b=A.a9
w.c=1.7
w.r=(v?e.f:A.c).j(0.28).gp(0)
a5.ad(a2,a3-1,w)
w=B.J()
w.b=A.a9
w.c=1.6
w.r=A.c.j(0.16).gp(0)
a5.ad(a2,a4+8,w)
u=B.J()
u.c=1.5
u.d=A.by
u.r=(v?e.f:A.c).j(0.22).gp(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.G()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bl(s.save())
w=$.S().r
t=x.g
p=new B.aF(w,A.ag,d,d,B.a([],t))
p.D(new B.jM(B.bY(a2,a4)))
a5.mM(0,p)
p=B.bY(a2,a4)
o=B.J()
o.sam(D.ew2.aA(0,B.bY(a2,a4)))
a5.aQ(p,o)
k=A.k.E(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=B.a([],t)
h=new B.aF(w,A.ag,d,d,t)
g=a0-a4
a1+=4
h.D(new B.aY(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new B.aq(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bx(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.D(new B.aq(w,a1))
h.D(new B.bt())
$.S()
a0=B.J()
a1=x.O
w=e.e
a1=v?B.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):B.a([w.j(0.22),D.eQ.j(0.34),A.cQ.j(0.62)],a1)
a0.sam(new B.a9(A.b0,A.b6,A.x,a1,d,d).aA(0,B.bY(a2,a4)))
a5.aK(h,a0)
a0=B.J()
a0.b=A.a9
a0.c=2
a0.r=A.c.j(v?0.28:0.14).gp(0)
a5.aK(h,a0)}s.restore()},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aCM.prototype={
R(){var w=$.aw()
return new C.aCN(new B.au(A.at,w),new B.au(A.at,w))},
biI(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aCN.prototype={
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a1()},
mh(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
cBq(d){this.a.biI(d,!0)
this.mh("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dqR())},
cA0(){var w,v,u=this,t=B.d5(u.d.a.a)
if(t==null||t<=0){u.mh("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hI(w,new C.aqK(v.d,t,u.gcBp(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cHX(){var w,v,u,t,s=this,r=s.d,q=B.d5(r.a.a)
if(q==null||q<=0){s.mh("Enter an amount to withdraw.")
return}if(q<10){s.mh("Minimum withdrawal is $"+B.dF(10)+".")
return}w=s.a.d.d
if(q>w){s.mh("Insufficient balance. You have $"+B.dF(w)+".")
return}w=s.e
v=C.hAb(w.a.a)
if(v.length===0){s.mh("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.biI(new B.d7("wd_"+1000*Date.now(),s.a.d.a,q,A.eW,A.kV,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dF(u)+" \u2014 You receive: $"+B.dF(q-u),null,null,A.dy,new B.V(Date.now(),0,!1)),!0)
s.mh("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,A.cb)
w.bP(0,A.cb)
s.m(new C.dqS())},
cED(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
if(r.x!==A.cs||!this.aXH(r)||B.hdS(r))continue
q=r.d
p=q===A.eW||q===A.kb||q===A.eC
q=r.c
if(p)t+=q
else u+=q}return new B.bqx(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cED(),q=t.a.r,p=new B.Y(q,new C.dqT(),B.T(q).k("Y<1>")).gK(0)
q=t.a
w=q.c
q=q.x
v=B.a([D.eQ.j(0.24),A.O.j(0.72)],x.O)
u=B.L(D.eQ.j(0.38),A.r,1)
q=B.bSC(!1,w,"WALLET",B.hf(B.aO(!1,s,!0,B.p(A.A,B.X(W.apG,D.eQ,s,s,s,18),A.f,s,s,new B.o(s,s,u,s,s,new B.a9(A.az,A.aE,A.x,v,s,s),A.a6),s,40,s,s,s,s,s,40),A.cO,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bES(r.a,r.b,p)
u=x.p
w=B.B(B.a([t.ars(A.wC,"Deposit",0),t.ars(A.uG,"Withdraw",1),t.ars(A.hq,"History",2)],u),A.m,s,A.qK,A.i,0,s,s)
return B.ec(B.bn(!1,B.ci(B.x(B.a([q,A.bx,v,A.d4,w,A.d4,B.p4(t.f===2?t.c0l():t.c61(),A.iH,B.qv(),A.b5,A.b5,B.Lh())],u),A.ak,s,A.e,A.i,0,A.p),A.t,s,A.y,s,D.bCM,s,s,A.ah),!0,!1,A.af,!0,!0),A.Bi,!0)},
bES(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cp(g,"@")
v=A.a.au(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.b3(g,w)}else v=g
w=B.n(26)
u=B.ap(h,i.aAQ(220,0.1),h,h,h,-60,-70,h)
t=B.ap(-90,i.aAQ(200,0.07),h,h,h,30,h,h)
s=B.ap(-60,i.aAQ(150,0.05),h,h,-40,h,h,h)
r=B.n(26)
r=B.bT(0,B.c4(h,new B.o(h,h,B.L(A.c.j(0.18),A.r,1),r,h,h,A.n),A.bh),0,0,0)
q=B.n(6)
p=x.p
q=B.B(B.a([B.p(h,B.b4(h,h,h,new C.bcq(h),A.ax),A.f,h,h,new B.o(h,h,h,q,h,D.c6r,A.n),h,28,h,h,h,h,h,38),A.b2,D.fYt],p),A.m,h,A.e,A.i,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.U,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=B.eO(A.a5,C.aru(new C.dqD(i),D.fvI,i.a.d.a),A.f,A.e3)
m=B.a([B.E(i.aQg(A.qu,"In",d),1),B.E(i.aQg(A.rK,"Out",e),1)],p)
if(f>0){l=A.cW.j(0.22)
k=B.n(99)
j=B.L(A.j4.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.fr2,h,h,h),A.f,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.oi,h,h,h))}return new B.fK(1.62,B.bx(w,new B.an(A.a_,h,A.ab,A.t,B.a([D.evh,u,t,s,r,new B.D(A8.rI,B.x(B.a([q,A.b2,o,A.bF,n,A.b2,B.B(m,A.m,h,A.e,A.i,0,h,h),A.am,B.d(v,h,1,A.a1,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a7,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.E,h,A.e,A.i,0,A.p),h)],p),h),A.ap),h)},
aAQ(d,e){var w=null
return B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aQg(d,e,f){var w=null,v=A.c.j(0.16)
return B.B(B.a([B.p(w,B.X(d,A.c,w,w,w,13),A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bm,new B.ds(1,A.cn,B.eO(A.a5,B.d(e+"  $"+B.dF(f),w,w,w,w,w,w,A.oO,w,w,w),A.f,A.e3),w)],x.p),A.m,w,A.e,A.i,0,w,w)},
ars(d,e,f){var w=null,v=this.f===f,u=v?D.c7M:new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.L(v?A.c.j(0.6):D.eQ.j(0.25),A.r,1),s=v?B.a([new B.ac(0,A.G,A.aA.j(0.45),A.I,18)],x.V):w
u=B.cY(w,B.X(d,v?D.aeU:D.eQ,w,w,w,26),w,w,A.cu,new B.o(w,w,t,w,s,u,A.a6),A.Gt,w,62,w,w,w,w,w,62)
return B.aA(A.c6,new B.a4(92,w,B.x(B.a([u,D.fbT,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aR,w,w,w,w,w,w,w,w,12.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dqC(this,f),w,w,w,w,w,w,!1,A.a3)},
c61(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.d5(a1.a.a)
if(a2==null)a2=0
w=a0?D.eQ:A.cp
v=a2>0
u=new C.dqO(e,w)
t=new C.dqN()
s=e.f
r=B.n(26)
q=x.O
p=B.a([w.j(0.1),A.u6,A.u6],q)
o=B.L(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.ac(0,A.G,A.w.j(0.35),A.eU,22)],n)
l=w.j(0.15)
l=B.p(d,B.X(a0?A.wC:A.uG,w,d,d,d,18),A.f,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.E(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fy,d,d,d),1)
j=A.c.j(0.06)
i=B.n(99)
h=x.p
i=B.B(B.a([l,A.as,k,B.p(d,B.B(B.a([B.X(A.i8,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.m,d,A.e,A.P,0,d,d),A.f,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.la,d,d,d)],h),A.m,d,A.e,A.i,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.bU,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uM(B.ag("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.B(B.a([new B.D(A.i7,l,d),A.db,B.aXX(new B.cU(D.b50,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),a1,w,d,d,d,d,2,B.bs(d,A.eF,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,k,d,d,A.e1,d,d,d,1,d,d,!1,"\u2022",d,new C.dqM(e),d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,D.fyx,!0,A.K,d,A.an,d,d,d,d),d),d)],h),A.E,d,A.b9,A.i,0,d,d)
a1=v?120:60
a1=B.at(B.cY(d,d,d,d,A.b5,new B.o(d,d,d,B.n(99),d,new B.a9(A.a5,A.a8,A.x,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.a2,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dF(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a7,d,1.35,!0,d,d,d,d,d,d,d,d),A.K,d,d)
l=B.a([],h)
j=a0?D.cbC:D.cqn
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bx,k,A.am,a1,A.N,q,A.aB,B.B(l,A.m,d,A.e,A.i,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.X(A.i8,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.U,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aB,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),e.e,d,d,d,d,d,2,B.bs(d,d,d,d,d,d,d,d,!0,new B.b5(4,B.n(16),new B.ay(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b5(4,B.n(16),new B.ay(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.n5,!0,A.a4,d,A.an,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.n(16)
A.d.v(l,B.a([A.ae,B.p(d,B.x(B.a([t.$2("Amount","$"+B.dF(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dF(a2*0.15),A.eO),B.iJ(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dF(a2*0.85),!0,D.eQ)],h),A.m,d,A.e,A.i,0,A.p),A.f,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.it,d,d,d)],h))}A.d.v(a1,l)}a1.push(A.aQ)
q=B.n(18)
l=a0?A.Sn:A.a3S
n=B.a([new B.ac(0,A.G,(a0?A.b1:A.dF).j(0.45),A.ds,18)],n)
k=a0?e.gcA_():e.gcHW()
j=B.X(a0?A.OL:A.lL,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dF(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dF(a2):"Request withdrawal"
a1.push(new B.a4(d,54,B.c4(B.lN(j,B.d(i,d,d,d,d,d,d,A.nN,d,d,d),k,B.fr(d,d,A.L,d,d,d,d,d,d,A.c,d,d,d,A.L,new B.b8(B.n(18),A.a0),d,d,d,d,d)),new B.o(d,d,d,q,n,new B.a9(A.a5,A.a8,A.x,l,d,d),A.n),A.bh),d))
return B.p(d,B.x(a1,A.ak,d,A.e,A.i,0,A.p),A.f,d,d,new B.o(d,d,o,r,m,new B.a9(A.b0,A.b6,A.x,p,A.Dg,d),A.n),d,d,new B.bQ("form"+s,x.W),d,A.wd,d,d,d)},
c0l(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("Y<1>"),a4=B.C(new B.Y(a2,new C.dqG(a0),a3),a3.k("M.E"))
A.d.aX(a4,new C.dqH())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.U(x.N,x.o)
a3=$.fIK
a3=a3==null?a1:a3.$0()
a3=J.aX(a3==null?A.iv:a3)
while(a3.C()){v=a3.gS(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b9<2>")
a2=B.C(new B.b9(a2,a3),a3.k("M.E"))
r=C.ifN(a2,B.LB(a0.a.e,new C.dqI(a0)))
a2=B.n(24)
a3=B.L(A.c.j(0.07),A.r,1)
v=B.n(99)
u=B.n(99)
q=x.p
u=B.a([B.B(B.a([D.bHD,B.aO(!1,v,!0,B.p(a1,D.f5m,A.f,a1,a1,new B.o(a1,a1,B.L(D.eQ.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.mL,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dqJ(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.m,a1,A.e,A.i,0,a1,a1),A.W],q)
if(a4.length===0)u.push(new B.D(D.bzl,B.x(B.a([B.X(A.H5,A.c.j(0.25),a1,a1,a1,40),A.W,D.fV1],q),A.m,a1,A.e,A.i,0,A.p),a1))
else{v=B.a([],q)
for(p=B.d2(a4,0,B.dz(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bS(p,p.gK(0),o.k("bS<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.eW||k===A.kb||k===A.eC
if(l===A.cs)i=j?A.c0:D.eQ
else i=l===A.dy?A.j4:A.fb
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ay(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.X(j?A.uG:A.wC,i,a1,a1,a1,19),A.f,a1,a1,new B.o(k,a1,new B.bG(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bVd(n)
e=C.hre(n.y)
d=A.c.j(0.5)
f=B.a([new B.y(f,a1,A.j8,a1,a1,a1,a1,a1,a1,a1,a1,a1),A.bF,new B.y(e,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a7,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(new B.y(e,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,A.a1,a1,1,a1,a1))}if(m!=null&&n.x!==A.kA)f.push(new B.D(E.akO,new B.CK(A.bG,5,4,A.br,B.a([a0.aPb("Before",m.b),a0.aPb("After",m.a)],q),a1),a1))
m=B.x(f,A.E,a1,A.e,A.i,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dF(f)
e=i.j(0.14)
d=new B.aP(99,99)
n=C.hyN(n)
v.push(B.p(a1,new B.ca(A.aL,A.e,A.i,A.m,a1,A.p,a1,0,B.a([k,A.bd,new B.by(1,A.bb,m,a1),A.ad,B.x(B.a([new B.y(f,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.av,B.p(a1,new B.y(n,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.f,a1,a1,new B.o(e,a1,a1,new B.bh(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.yD,a1,a1,a1)],q),A.dI,a1,A.e,A.i,0,A.p)],q),a1),A.f,a1,a1,new B.o(a1,a1,new B.bG(A.a0,A.a0,new B.ay(l,1,A.r,-1),A.a0),a1,a1,a1,A.n),a1,a1,a1,a1,A.rF,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.ht(D.bY8,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.ce,a1,a1,a1),new C.dqK(a0),B.fy(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eQ,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.v(u,v)}return B.p(a1,B.x(u,A.ak,a1,A.e,A.i,0,A.p),A.f,a1,a1,new B.o(A.u6,a1,a3,a2,a1,a1,A.n),a1,a1,D.hlm,a1,D.bBE,a1,a1,a1)},
aPb(d,e){var w=null,v=A.c.j(0.05),u=B.n(7),t=B.L(A.c.j(0.1),A.r,1),s=B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dF(e)
return B.p(w,B.Yu(B.cT(B.a([s,B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fvT,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.mN,w,w,w)},
aXH(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eC)return d.c>0
if(B.tg(d))return!1
if(v===A.fH||v===A.eW)return!0
if(v===A.oU||v===A.kb)return!0
if(v===A.kB)return!0
if(v===A.fT)return A.a.q(w,"clock-in")||d.c>0
return!1},
bVd(d){var w,v=d.f
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
C.bcq.prototype={
a4(d,e){var w,v,u,t
$.S()
w=B.J()
w.r=D.bgn.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bo(new B.u(u,0),new B.u(u,t),w)
u=v*0.65
d.bo(new B.u(u,0),new B.u(u,t),w)
t*=0.5
d.bo(new B.u(0,t),new B.u(v,t),w)},
av(d){return!1}}
C.bxp.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new B.a3(0,o,s,o+80)
m=[A.b8,A.hh,A.bv][p]
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(new B.a9(A.b0,A.b6,A.x,B.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aA(0,n))
l=o.G()
q.drawRect(B.bH(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.F(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.S()
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.c.j(0.55*g).gp(0)
l=r.G()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(A.o.F(k,9)===0){f=new B.ao(A.Q,A.M,A.S,A.T,A.R)
f.r=A.p6.j(0.35*g).gp(0)
f.c=1
l=f.G()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.G()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=A.k.F(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.r=A.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=A.by
l=a0.G()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=A.k.F(v+k*0.25,1)
t=A.p6.j(0.5*Math.sin(f*3.141592653589793))
a1=new B.iH(new B.es("z",a2,a2,A.cL,a2,a2,a2,a2,a2,a2,new B.F(!0,t,a2,a2,a2,a2,12+f*14,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.bX,new B.jg(1),a2,a2,a2,a2,A.bV,a2)
a1.eg()
a1.a4(a3,new B.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
av(d){return d.b!==this.b}}
C.aMl.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.bzr.prototype={}
C.b0R.prototype={}
C.a07.prototype={
R(){return new C.aF8(new B.au(A.at,$.aw()))},
cWC(d,e){return this.d.$2(d,e)}}
C.aF8.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a1()},
b0s(){var w=this,v=A.a.i(w.d.a.a),u=B.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.ehh(w))
return}u=w.c
u.toString
B.a5(u,!1).O(null)
w.a.cWC(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aG(a0,A.eN,e).w
e=B.aG(a0,A.eh,e).w
w=B.at(B.p(f,f,A.f,f,f,new B.o(A.aX,f,f,B.n(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.B(B.a([B.p(f,D.bXw,A.f,f,f,new B.o(f,f,f,f,B.a([new B.ac(0,A.G,A.f8.j(0.5),A.I,18)],v),D.ase,A.a6),f,52,f,f,f,f,f,52),A.es,B.E(B.x(B.a([D.fIf,A.bF,B.d(g.a.c,f,1,A.a1,f,f,f,A.n3,f,f,f)],u),A.E,f,A.e,A.i,0,A.p),1),B.aH(f,f,f,f,D.bYn,f,f,f,new C.ehk(a0),f,f,f,f,f,f)],u),A.m,f,A.e,A.i,0,f,f)
s=g.b7q(A.f0,"You",A.cp)
r=A.aT.j(0.15)
q=B.n(99)
q=B.B(B.a([s,new B.D(A.km,B.p(f,D.fMm,A.f,f,f,new B.o(r,f,B.L(A.aT.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.h7,f,f,f),f),g.b7q(A.wx,"Your friend",A.c_)],u),A.m,f,A.e,A.i,0,f,f)
r=A.c.j(0.06)
s=B.n(16)
p=A.c.j(0.12)
o=B.n(16)
n=g.f
if(n.length===0)n=f
o=B.aM(f,A.Y,!0,f,!0,A.t,f,B.aN(),g.d,f,f,f,f,f,2,B.bs(f,f,f,f,f,f,f,f,!0,new B.b5(4,s,new B.ay(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b5(4,o,D.b3N),f,f,f,f,f,f,f,f,Q.Ey,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c_R,f,f,f,f,f,f,f,f,f,f,f,f),A.y,!0,f,!0,f,!1,f,A.aj,f,f,f,f,f,A.mr,f,f,f,1,f,f,!1,"\u2022",f,new C.ehl(g),f,new C.ehm(g),f,!1,f,f,!1,f,!0,f,A.aa,f,f,f,f,f,f,f,f,f,f,f,A.jq,!0,A.a4,f,A.an,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.clo[m]
s=new B.aP(14,14)
p=g.e===l
n=p?D.asd:f
p=p?f:A.c.j(0.06)
k=new B.ay(g.e===l?A.aC:A.bz,1,A.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.by(1,A.bb,B.aA(f,B.cY(f,B.x(B.a([new B.y(j,f,A.de,f,f,f,f,f,f,f,f,f),new B.y(i,f,new B.F(!0,h,f,f,f,f,10,A.U,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),A.m,f,A.e,A.i,0,A.p),f,f,A.b5,new B.o(p,f,new B.bG(k,k,k,k),new B.bh(s,s,s,s),f,n,A.n),A.eH,f,f,f,f,A.fg,f,f,f),A.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ehn(g,l),f,f,f,f,f,f,!1,A.a3),f)],u)
if(l!==7)s.push(A.ad)
A.d.v(r,s)}s=B.B(r,A.m,f,A.e,A.i,0,f,f)
r=B.B(B.a([B.X(A.lK,A.c.j(0.5),f,f,f,15),A.bm,B.E(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.m,f,A.e,A.i,0,f,f)
p=B.n(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.cy,18)],v)
n=g.e
j=n===1?"":"s"
return new B.D(new B.Q(0,0,0,d.f.d+e.r.d),B.p(f,B.x(B.a([w,A.aQ,t,A.bx,q,A.bx,D.fQn,A.am,o,A.aQ,D.fUQ,A.N,s,A.aB,r,A.aQ,new B.a4(f,54,B.c4(B.ht(D.aqt,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fy,f,f,f),g.gcbC(),f),new B.o(f,f,f,p,v,D.c6C,A.n),A.bh),f)],u),A.ak,f,A.e,A.P,0,A.p),A.f,f,f,D.b5N,f,f,f,f,D.bCZ,f,f,f),f)},
b7q(d,e,f){var w=null,v=f.j(0.1),u=B.n(16),t=B.L(f.j(0.45),A.r,1)
return B.E(B.p(w,B.x(B.a([B.X(d,f,w,w,w,24),A.av,B.d(e,w,w,w,w,w,w,A.KD,w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fg,w,w,w),1)}}
C.pp.prototype={}
C.bsi.prototype={
a4(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new B.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.S()
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
if(w===0)u=A.bf
else u=(w&1)===0?A.bB:A.O
v.r=u.gp(0)
u=B.bY(p,o)
t=v.G()
q.drawArc.apply(q,[B.bH(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.S()
q=B.J()
q.r=A.fV.gp(0)
q.b=A.a9
q.c=8
d.ad(p,o,q)
q=B.J()
q.r=A.aT.gp(0)
d.ad(p,o*0.22,q)
q=this.b
if(q!=null){s=B.fz(r,r,r,r,B.cT(r,r,r,r,r,r,r,r,r,A.aVj,B.w(q)),A.a4,A.bX,r,A.dA,A.bV)
s.eg()
q=s.b
u=q.c
q=q.a.c
s.a4(d,p.aF(0,new B.u(u/2,q.gba(q)/2)))}},
av(d){return d.b!=this.b}}
C.F5.prototype={
a6(){return"NgmyProMoveResult."+this.b}}
C.as4.prototype={
gkn(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bqE(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.h5K("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c1b()
w=s.gkn()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.bZ(9,"",!1,x.N)
s.ax=!0
if(s.gkn())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=B.a([1+e.ap(10),1+e.ap(10)],w)
s.ch=B.a([1+e.ap(10),1+e.ap(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=B.a([e.ap(6),e.ap(6),e.ap(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ag()*3.141592653589793*2
s.c=s.gkn()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.bZ(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkn())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aZI(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aHZ.h(0,d)
s.c=w==null?"Play to earn":w}},
bcl(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkn()
if(o)return
o=x.N
s.x=B.a2(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b7(w,new C.cj4(),o)
v=B.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=B.C(v,o)
A.d.v(v,B.bZ(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cFg(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.arZ(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b7(t,new C.cj5(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.M(v,B.bZ(7,0,!1,o))}if(B.iS(e.h(0,q)))o=B.eh(e.h(0,q))
else{o=B.ce(B.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bHd(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.arZ(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b7(t,new C.cj6(),x.L)
o=B.C(o,o.$ti.k("ak.E"))
s.y=o}if(B.iS(e.h(0,p)))o=B.eh(e.h(0,p))
else{o=B.ce(B.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bIt(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.arZ(e,f)
break}},
cQc(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.a2(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",B.bp(w.at,!0,q))
o.n(0,"turnEmail",w.aCZ())
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
q=B.C(new B.N(q,new C.cj8(),p),p.k("ak.E"))
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
q=B.C(new B.N(q,new C.cj9(),p),p.k("ak.E"))
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
default:q=B.dO(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aCZ(){var w,v,u,t=this
if(t.gkn()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=A.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
arZ(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cFg(d,e){var w,v,u,t,s,r="playerXEmail"
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
bHd(d,e){var w,v,u,t,s
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
bIt(d,e){var w,v,u,t,s,r,q
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
Uk(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkn())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.aCZ():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c1b(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ir(8,new C.cj1(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aZI(d){var w=20+d.ap(80),v=w+10+d.ap(50),u=4+d.ap(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,A.cb)},
d_c(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkn())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Uk(q,v==null?"":v)?r.z:-1}if(!r.gkn()){v=r.d
v=v==null?null:v.d
v=!r.Uk(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkn()?r.z:w
if(!r.gkn()&&u!==r.z)return!1
t=J.r(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkn()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.F(d+e,2)===1){J.aJ(r.y[d],e,r.z)
J.aJ(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a9Z(2)){r.abx(1)
return!0}if(r.a9Z(1)){r.abx(2)
return!0}if(r.gkn()&&r.z===2){r.bD7(f)
if(r.a9Z(2)){r.abx(1)
return!0}if(r.a9Z(1)){r.abx(2)
return!0}}}return!1},
abx(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gkn()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bD7(d){var w,v,u,t,s,r,q,p,o,n=this,m=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.r(n.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.r(n.y[q],p)===0&&A.o.F(q+p,2)===1)m.push(B.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.ap(w)]
J.aJ(n.y[o[2]],o[3],2)
J.aJ(n.y[o[0]],o[1],0)
n.z=1},
a9Z(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=J.aX(w[u]);t.C();)if(t.gS(t)===d)return!1
return!0},
d_e(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.qN
if(!s.gkn()){w=s.d
w=w!=null&&!s.Uk("tic_tac_go",w.d)}else w=!1
if(w)return D.qN
if(s.gkn())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ak4(v))return s.aUn(v,!0)
if(!A.d.q(s.at,""))return s.aUo()
s.ax=!s.ax
if(!s.gkn()){s.x.n(0,"turnEmail",s.aCZ())
s.c=s.aZc()
return D.qN}if(s.gkn()){t=s.cmK(e)
if(t>=0){s.at[t]="O"
if(s.ak4("O"))return s.aUn("O",!1)
if(!A.d.q(s.at,""))return s.aUo()
s.ax=!0}}s.c=s.gkn()?"Your turn \u2014 you are X":s.aZc()
return D.qN},
aZc(){var w=this.d
if(w==null)return"Take your turn"
return this.Uk("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aUn(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gkn()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.qO:D.J5},
aUo(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Tk},
cmK(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ak4("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ak4("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.d9X[u]
if(v[w].length===0)return w}return-1},
ak4(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.di0[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4a(d){return A.d.cG(d,0,new C.cj7())},
cJJ(d){this.ay.push(1+d.ap(10))
if(this.a4a(this.ay)>21)return!0
return!1},
cJK(d){var w,v,u,t=this
while(t.a4a(t.ch)<17)t.ch.push(1+d.ap(10))
t.CW=!0
w=t.a4a(t.ay)
v=t.a4a(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cPB(d,e){var w,v,u,t=this
if(t.e)return D.qN
if(!t.gkn()){w=t.d
w=w!=null&&!t.Uk("connect_four_pro",w.d)}else w=!1
if(w)return D.qN
if(t.gkn())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.qN
if(!t.ahb(d,w))return D.qN
if(t.a9O(t.fx))return t.aUl(t.fx,!0)
if(t.aQ0())return t.aUm()
w=t.fx===1?2:1
t.fx=w
if(t.gkn()&&w===2){u=t.cm6(e)
if(u>=0){t.ahb(u,2)
if(t.a9O(2))return t.aUl(2,!1)
if(t.aQ0())return t.aUm()
t.fx=1}}t.c=t.gkn()?"Your turn \u2014 drop a red disc":t.bHc()
return D.qN},
bHc(){var w=this.d
if(w==null)return"Drop a disc"
return this.Uk("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ahb(d,e){var w
for(w=5;w>=0;--w)if(J.r(this.fr[w],d)===0){J.aJ(this.fr[w],d,e)
return!0}return!1},
aQ0(){for(var w=0;w<7;++w)if(J.r(this.fr[0],w)===0)return!1
return!0},
aUl(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gkn()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.qO:D.J5},
aUm(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Tk},
cm6(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.r(r.fr[0],w)!==0)continue
r.ahb(w,2)
v=r.a9O(2)
r.ba_(w)
if(v)return w}for(w=0;w<7;++w){if(J.r(r.fr[0],w)!==0)continue
r.ahb(w,1)
u=r.a9O(1)
r.ba_(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.r(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.ap(s)]},
ba_(d){var w
for(w=0;w<6;++w)if(J.r(this.fr[w],d)!==0){J.aJ(this.fr[w],d,0)
return}},
a9O(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.r(this.fr[w],v)!==d)continue
if(this.bHe(w,v,d))return!0}return!1},
bHe(d,e,f){var w,v,u,t=new C.cj0(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
bdh(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aZI(d)}return w.a>=w.b}}
C.at_.prototype={
R(){return new C.aFV(null,null)},
cVv(d){return this.e.$1(d)}}
C.aFV.prototype={
Z(){var w,v=this
v.a3()
w=B.bm(null,D.byr,null,1,null,v)
w.fp(0,!0)
v.d=w
v.a.d.aT(0,v.gb0U())
v.ayT()},
bz(d){var w
this.bH(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,A.cb)
this.ayT()}},
ayT(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aia(t,u)
C.aia(t,u)
w.a.cVv(s)
w.a.toString
w.m(new C.eOl())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a5(0,v.gb0U())
w=v.d
w===$&&B.c()
w.t()
v.byN()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aia(j,i),g=C.aia(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.aP(1,1)
d.push(new B.wJ(new B.d1(v,!1,B.p(l,l,A.f,l,l,new B.o(A.aT,l,l,new B.bh(u,u,u,u),B.a([new B.ac(0,A.G,A.aT.j(0.6),A.I,6)],k),l,A.n),l,22,l,A.a00,l,l,l,3),l),A.TT,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.es(v,l,l,A.cL,l,l,l,l,l,l,D.fsN))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cA}else if(s===t){r=A.ba
q=A.U}else{r=A.aw
q=A.H}d.push(new B.es(t,l,l,A.cL,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.wJ(new B.d1(k,!1,B.p(l,l,A.f,A.aT,l,l,l,22,l,l,l,l,l,3),l),A.TT,l,l))}p=f===0?0:A.k.V(h/f*100)
k=A.w.j(0.35)
v=B.n(12)
u=B.L(A.aX,A.r,1)
o=x.p
v=B.p(l,B.x(B.a([B.B(B.a([m.b0T("Correct",""+h,A.bf),A.ad,m.b0T("Wrong / missed",""+(f-g),A.aw),A.b2,B.d(""+p+"% accuracy",l,l,l,l,l,l,D.fkw,l,l,l)],o),A.m,l,A.e,A.i,0,l,l),A.am,D.fNu],o),A.E,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bg,l,l,l)
u=B.E(B.ci(new B.aax(l,B.cT(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.t,l,A.y,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.w.j(0.35)
return B.x(B.a([v,A.ae,u,A.W,B.aM(l,A.Y,!0,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.n(12),A.a0),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b5(4,B.n(12),D.b3G),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,D.aVi,!0,A.a4,l,A.an,l,l,l,l)],o),A.ak,l,A.e,A.i,0,A.p)},
b0T(d,e,f){var w=null,v=f.j(0.15),u=B.n(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.h7,w,w,w)}}
C.aNO.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
var z=a.updateTypes(["aB<~>()","~()","G(ic,ic)","~([xQ?])","P(r6)","r6()","G(rJ,rJ)","P(rJ)","G(rK,rK)","Q5(Z)","P(ic)","cO(aem)","a_P(Z)","ZV(Z)","af6(Z)","a7h(Z)","O7(Z)","adZ(Z,hw<ai<jp>>)","adY(Z,G)","v(r6)","rJ(a8<@,@>)","~(F5,as4)","O_(Z)","a8<m,@>(rJ)","rK(a8<@,@>)","a8<m,@>(kA)","a8<m,@>(rK)","P(rK)","a8<m,@>(lT)","lT(@)","a8<m,@>(it)","it(@)","ic(@)","aB<~>(kA)","a8<m,@>(ic)","~(G,G)","ic(ic)","W0(Z)","aB<P>(ai<ic>)","a_O(Z)","~(ic)","a0z(Z)","W1(Z)","m(ic)","P(lT)","xr(bA<G,lT>)","acu(Z,G)","G(it,it)","acn(lT)","v(rQ)","by(Jf)","a_j(Z)","~(d7{bumpWalletRevision:P,cloudRequest:P})","~(m,I,I,I)","I(V)","~(d7)","a07(Z)","~(F5)","m(m)","a0A(Z)"])
C.czi.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.czj(r,w,s.b,v,s.d)
t=s.e
r.b=B.df(t,u)
v.r=new C.czf(r)
v.e=new C.czg(r,w)
v.f=new C.czh(r,w,t,u)},
$S:0}
C.czj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.jW(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.ab(r)
u=B.co(r)
s=v
q=u
p=B.GH(s,q)
if(p==null)p=new B.jl(s,q==null?B.a3E(s):q)
t=p
o.d.hC(t.a,t.b)
return}o.d.M(0,w)}else{o.e.a(null)
o.d.M(0,null)}},
$S:43}
C.czf.prototype={
$0(){this.a.b.a2(0)
return $.Hk()},
$S:1638}
C.czg.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.a9R.$0()
this.a.b.a2(0)},
$S:0}
C.czh.prototype={
$0(){var w,v=this,u=v.b,t=B.dA(0,0,u.gbfl(),0,0,0)
u.fZ(0)
u=v.c
w=v.a
w.b=B.cD(new B.bc(u.a-t.a),new C.cze(w,u,v.d))},
$S:0}
C.cze.prototype={
$0(){var w=this.c
this.a.b=B.df(this.b,w)
w.$1(null)},
$S:0}
C.fa7.prototype={
$1(d){var w=this.a
w.m(new C.fa6(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fa6.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.ajX,this.b,null,null,v.$ti.k("hw<1>"))},
$S:0}
C.fa9.prototype={
$2(d,e){var w=this.a
w.m(new C.fa4(w,d,e))},
$S:55}
C.fa4.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hw(D.ajX,null,this.b,this.c,v.$ti.k("hw<1>"))},
$S:0}
C.fa8.prototype={
$0(){var w=this.a
w.m(new C.fa5(w))},
$S:0}
C.fa5.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hw(A.yc,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fMH.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cs},
$S:16}
C.fMz.prototype={
$1(d){return d},
$S:14}
C.ftw.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.A,new B.D(new B.Q(u,0,u,0),B.d("NGMY",w,1,A.eM,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.f,w,w,A.adP,w,v,w,w,w,w,w,v)},
$S:146}
C.ftt.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.ftu.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.ky(w,A.A,v.d,new C.fts(v.e),A.h9,v.c,!0,v.b,null,null,v.a)},
$S:1639}
C.fts.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.ftv.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.dix.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.diI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dj_.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.dj0.prototype={
$1(d){return this.a.K2()},
$S:11}
C.diQ.prototype={
$0(){var w=J.b7(this.b,new C.diP(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.diP.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.diR.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=B.T(v).k("N<1,a8<m,@>>")
v=B.C(new B.N(v,new C.diO(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.diO.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.diT.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=B.T(v).k("N<1,a8<m,@>>")
v=B.C(new B.N(v,new C.diS(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.diS.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.diL.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cet(t.a.c)?2:3
break
case 2:w=4
return B.b(C.aqD(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.diJ(t))
case 3:if(t.c!=null)t.m(new C.diK(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:51}
C.diJ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.diK.prototype={
$0(){return this.a.d++},
$S:0}
C.diM.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.diN.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.diD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.in1(t.a.d.b8,J.k(J.r(u.b,"id")),"rejected")
t.a.bv()
w=2
return B.b(C.ai_(t.a.d.b8),$async$$0)
case 2:w=3
return B.b(t.K2(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.diE.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.ibG(t.a.d.b8,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return B.b(C.ai_(t.a.d.b8),$async$$0)
case 2:w=3
return B.b(t.K2(),$async$$0)
case 3:t.IQ(A.d.dN(t.y,new C.diB(s),new C.diC(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.diB.prototype={
$1(d){return d.a===J.r(this.a,"gameId")},
$S:z+4}
C.diC.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.diF.prototype={
$1(d){return d.a===J.r(this.a,"gameId")},
$S:z+4}
C.diG.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.diH.prototype={
$0(){return this.a.IQ(this.b,J.k(J.r(this.c,"id")))},
$S:0}
C.diA.prototype={
$0(){return this.a.c4t(this.b)},
$S:0}
C.diz.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.inu(u,w.b,new C.diy(v,w))},
$S:0}
C.diy.prototype={
$2(d,e){return this.a.aix(this.b,d,e)},
$S:678}
C.diZ.prototype={
$2(d,e){if(d)return
this.a.aU0()},
$S:124}
C.diX.prototype={
$2(d,e){var w=this.a
return new B.l4(C.b0Q(w.a.c.a),new C.diW(w,this.b,this.c),null,null,x.gH)},
$S:1641}
C.diW.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.n(12)
v=B.n(12)
u=B.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,new B.D(A.kO,B.bIm(A.cW,B.X(A.hq,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.diV(this.a,d),t,t,t,t,t,t,t),A.f,this.b,0,t,t,t,t,t,A.ai)},
$S:1642}
C.diV.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fIZ(s.c.a,s.e).eK(new C.diU())
w=2
return B.b(C.bFI(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.diU.prototype={
$1(d){},
$S:30}
C.diY.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dWC.prototype={
$0(){var w=this.a
return B.LB(w.a.c.a,new C.dWB(w))},
$S:81}
C.dWB.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dWD.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bk=t.ah()
v.bv()
w.m(new C.dWA())},
$S:0}
C.dWA.prototype={
$0(){},
$S:0}
C.dWE.prototype={
$2(d,e){var w,v=this.a
if(!C.cet(v.a.c)){if($.h5F.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.h5G(this.b,v.x,w)
return!1}C.aqD(v.a.c.a)}if(B.LB(v.a.c.a,new C.dWz(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aIt()
w=v.a
w.toString
w.hJ(new B.d7(A.o.u(1000*Date.now()),v.a.c.a,d,A.kb,A.fn,e,null,null,A.cs,new B.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1643}
C.dWz.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dWF.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.u(1000*Date.now()),t=this.a,s=t.a
s.hJ(new B.d7(u,s.c.a,d,A.fT,A.fn,e,v,v,A.cs,new B.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+A.k.ac(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ac(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.v2(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1644}
C.dir.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.diu.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.div.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.diw.prototype={
$1(d){var w=null,v=this.a,u=B.fr(w,w,v.e===d?A.bf:B.a_(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.E(new B.D(A.f_,B.im(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dit(v,d),u),w),1)},
$S:231}
C.dit.prototype={
$0(){var w=this.a
return w.m(new C.dis(w,this.b))},
$S:0}
C.dis.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dkj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dkm.prototype={
$1(d){this.a.cn4()
return null},
$S:11}
C.dkn.prototype={
$1(d){return this.a.cDp()},
$S:11}
C.dko.prototype={
$1(d){this.a.a3d()
return null},
$S:11}
C.dkp.prototype={
$1(d){this.a.ajD()
return null},
$S:11}
C.dkq.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c8)return
w=v.Q
w===$&&B.c()
if(w<=0){v.m(new C.dkk(v))
w=v.as
if(w!=null)w.a2(0)
v.Fn()
return}v.m(new C.dkl(v))},
$S:11}
C.dkk.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dkl.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.djz.prototype={
$0(){return this.a.bD=this.b},
$S:0}
C.djA.prototype={
$0(){return this.a.bD=this.b},
$S:0}
C.dk2.prototype={
$1(d){return this.a.go.q(0,d)},
$S:34}
C.dk3.prototype={
$0(){},
$S:0}
C.djP.prototype={
$0(){var w=this.b
w.c8=!0
w.cL="Waiting for both players\u2026"
w.cl="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.djQ.prototype={
$0(){var w=this.a
w.c8=!0
w.cL="Both players connected"
w.cl="Starting together in a moment\u2026"},
$S:0}
C.djR.prototype={
$0(){var w=this.b
w.c8=!0
w.cL="Match starting together\u2026"
w.cl="Both players start in "+A.o.E(this.c,1,99)+"s"},
$S:0}
C.djS.prototype={
$0(){this.b.c8=!1},
$S:0}
C.djT.prototype={
$0(){},
$S:0}
C.dj1.prototype={
$0(){var w=this.a,v=w.x2,u=B.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.djy.prototype={
$0(){var w=this.a
w.at=this.b
w.b6X()},
$S:0}
C.dk4.prototype={
$0(){},
$S:0}
C.dkd.prototype={
$0(){},
$S:0}
C.dk1.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dk0(w))},
$S:0}
C.dk0.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.V(Date.now(),0,!1)},
$S:0}
C.djw.prototype={
$0(){var w=this.a;++w.a_
w.y=!1
w.z=null},
$S:0}
C.djx.prototype={
$0(){},
$S:0}
C.dk8.prototype={
$1(d){return d==null},
$S:256}
C.dk9.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cz(v.ch,w.d)},
$S:0}
C.dka.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dj2.prototype={
$1(d){return d==null},
$S:256}
C.dj3.prototype={
$0(){return this.a.bk++},
$S:0}
C.dj4.prototype={
$0(){},
$S:0}
C.djI.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.djJ.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.M(0,t)
w=this.c
u.M(0,w)
if(v.ghQ()&&D.n0.q(0,v.a.e)){u=v.id
u.M(0,t)
u.M(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.djK.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.djH(w))},
$S:12}
C.djH.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.djU.prototype={
$0(){return this.a.y1++},
$S:0}
C.djV.prototype={
$0(){},
$S:0}
C.djW.prototype={
$0(){return this.a.y2++},
$S:0}
C.djX.prototype={
$0(){},
$S:0}
C.djY.prototype={
$0(){return this.a.b8++},
$S:0}
C.djZ.prototype={
$0(){},
$S:0}
C.dk7.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.djL.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.djM.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.djN.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.djO.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dkb.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dkc.prototype={
$0(){var w=this.a
w.ok.push(w.d.ap(4))
w.p2=0},
$S:0}
C.dj5.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dj6.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dj7.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dj8.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dk5.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dk6.prototype={
$0(){var w,v=this.a;++v.x2
v.aPN()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.djG.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dk_.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.djE.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.djF.prototype={
$2(d,e){return d+e.length},
$S:215}
C.dke.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.dkf.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dkg.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dki.prototype={
$1(d){var w=this.a,v=w.P_(),u=v<=0?0:A.k.E(w.Al()/v,0,1),t=w.a.x,s=t*1.46
return new C.O_(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dkh.prototype={
$1(d){return d.bV(0.85)},
$S:160}
C.djD.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghQ()&&D.n0.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.x(B.a([B.d(p,w,w,w,w,w,w,A.j8,A.K,w,w),A.am,B.E(B.at(new B.a4(r*v+u,r*t+s,B.ip(!0,w,w,A.y,new B.hL(v,6,6,1,r),new C.djC(q,r),q.fr.length,w,A.dS,A.ah,!1),w),w,w,w),1)],x.p),A.m,w,A.e,A.i,0,A.p)},
$S:151}
C.djC.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghQ()&&D.n0.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghQ()&&D.n0.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.ask:D.c4p,l=B.n(10),k=B.n(10)
if(p)w=m
else if(o)w=m
else w=n?D.ask:D.ase
v=o?B.L(A.du,A.r,2):s
u=B.a([new B.ac(0,A.G,B.a_(51,A.w.l()>>>16&255,A.w.l()>>>8&255,A.w.l()&255),A.I,4)],x.V)
t=this.b*0.42
return B.aO(!1,l,!0,B.cY(s,B.at(n?B.X(D.cz2[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b5,new B.o(s,s,v,k,u,w,A.n),A.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.djB(r,e),s,s,s,s,s,s,s)},
$S:191}
C.djB.prototype={
$0(){return this.a.cmq(this.b)},
$S:0}
C.djl.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.a_(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a_(89,A.bf.l()>>>16&255,A.bf.l()>>>8&255,A.bf.l()&255),r=B.n(10),q=B.n(10),p=B.n(10),o=B.L(B.a_(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aI(!1,A.a2,!0,r,B.aO(!1,q,!0,B.p(A.A,B.d(t?"":u,w,w,w,w,w,w,D.aUf,w,w,w),A.f,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djk(v,d),w,w,w,w,w,w,w),A.f,s,0,w,w,w,w,w,A.ai)},
$S:683}
C.djk.prototype={
$0(){return this.a.cCF(this.b)},
$S:0}
C.djm.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.a_(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aI(!1,A.a2,!0,B.n(10),B.aO(!1,B.n(10),!0,B.p(A.A,B.d(u,w,w,w,w,w,w,D.aUf,w,w,w),A.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djj(v,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
$S:683}
C.djj.prototype={
$0(){return this.a.cCE(this.b)},
$S:0}
C.djn.prototype={
$1(d){return this.a.m(new C.dji())},
$S:32}
C.dji.prototype={
$0(){},
$S:0}
C.djo.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aia(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pm()
if(u.ghQ()&&D.n0.q(0,u.a.e)){u.a1s()
u.nc(!0)}else{v=A.d.cG(u.cy,0,new C.djg())
t=u.dx
if(t>=v)u.ud("All 5 sentences perfect \u2014 full payout!")
else u.EP(t/v,t,v)}}else{if(u.ghQ()&&D.n0.q(0,u.a.e))u.a1s()
u.m(new C.djh(u))}},
$S:0}
C.djg.prototype={
$2(d,e){return d+e.length},
$S:215}
C.djh.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,A.cb)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.djp.prototype={
$1(d){var w=null,v=B.fr(w,w,B.a_(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.cm,w,w,w,w,w,w,w)
return new B.D(A.ct,new B.a4(1/0,w,B.im(B.d(d,w,w,w,w,w,w,W.aU8,w,w,w),new C.djf(this.a,d),v),w),w)},
$S:138}
C.djf.prototype={
$0(){return this.a.b6k(this.b)},
$S:0}
C.djq.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.x(B.a([B.d(s,v,v,v,v,v,v,A.pF,v,v,v),A.N,B.E(B.at(new B.a4(w,w,B.ip(!0,v,v,A.y,new B.hL(3,4,4,1,u),new C.dje(t,u),9,v,A.dS,A.ah,!1),v),v,v,v),1)],x.p),A.m,v,A.e,A.i,0,A.p)},
$S:151}
C.dje.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b45(e),p=r===0
if(p)w=A.L
else w=q?A.bf:B.a_(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.n(10)
s=p?t:new C.dja(s,e)
u=B.n(10)
p=p?"":""+r
return B.aI(!1,A.a2,!0,v,B.aO(!1,u,!0,B.at(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.f,w,0,t,t,t,t,t,A.ai)},
$S:79}
C.dja.prototype={
$0(){return this.a.cCD(this.b)},
$S:0}
C.djr.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.djd(q,d)
p=B.n(16)
if(o)w=D.a53[d]
else{w=D.a53[d]
w=B.a_(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.n(16)
u=o?B.a_(A.k.V(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.a_(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.L(u,A.r,o?2:1)
t=x.V
if(o){s=D.a53[d]
t=B.a([new B.ac(0,A.G,B.a_(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.I,16)],t)}else t=B.a([],t)
return B.aO(!1,p,!0,B.cY(r,r,r,r,A.b5,new B.o(w,r,u,v,t,r,A.n),U.BS,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1648}
C.djd.prototype={
$0(){return this.a.cCG(this.b)},
$S:0}
C.djs.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.pF,t,t,t)
w=B.d("Move "+r.azx()+"/"+C.hc7(),t,t,t,t,t,t,A.EA,t,t,t)
v=r.x2
u=s*3+12
return B.x(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.a_(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.E(B.at(new B.a4(u,u,B.ip(!0,t,t,A.y,new B.hL(3,6,6,1,s),new C.djc(r),9,t,A.dS,A.ah,!1),t),t,t,t),1)],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:151}
C.djc.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.n(10),s=B.n(10),r=u?A.bf:D.biF,q=u?A.ep:D.bsF
return B.aI(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,w,A.f,w,w,new B.o(r,w,B.L(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.L,w,w,w,w,w,w,w,w,new C.dj9(v,e),w,w,w,w,A.L,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.dj9.prototype={
$0(){return this.a.cCB(this.b)},
$S:0}
C.djt.prototype={
$0(){return this.a.b6k(this.b[this.c])},
$S:0}
C.dju.prototype={
$0(){return this.a.m(new C.djb())},
$S:0}
C.djb.prototype={
$0(){},
$S:0}
C.djv.prototype={
$2(d,e){this.a.a0a(d,e)
return null},
$S:z+21}
C.dnU.prototype={
$1(d){return this.a.cmU(this.b,d)},
$S:1649}
C.dnT.prototype={
$0(){var w=this
return w.a.a.cW3(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cL_.prototype={
$1(d){var w=this.a
w.a1I()
w.um()},
$S:8}
C.cKk.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cKa.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cKb.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cKu.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cKr.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cKs.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cKt.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cKm.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cKl(w))},
$S:0}
C.cKl.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cKc.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cKp.prototype={
$1(d){var w=this.a
return new C.W0(w.fx,new C.cKo(w),w.a.f.r,null)},
$S:z+37}
C.cKo.prototype={
$1(d){return this.blV(d)},
blV(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.cfn(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cKn(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+38}
C.cKn.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cKN.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cKH.prototype={
$1(d){this.a.um()
return null},
$S:11}
C.cKK.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ao(v.gaWY().a,1e6)<=0){w=v.id
if(w!=null)w.a2(0)
v.um()
return}v.m(new C.cKJ())},
$S:11}
C.cKJ.prototype={
$0(){},
$S:0}
C.cKG.prototype={
$1(d){this.a.Fv()
return null},
$S:11}
C.cKI.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cKF.prototype={
$2(d,e){var w,v=J.r(d,"at"),u=B.bk(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h_(0,0,!1),0,!1)
v=J.r(e,"at")
w=B.bk(J.k(v==null?"":v))
return u.aO(0,w==null?new B.V(B.h_(0,0,!1),0,!1):w)},
$S:41}
C.cKh.prototype={
$2(d,e){var w,v=J.r(d,"at"),u=B.bk(J.k(v==null?"":v))
if(u==null)u=new B.V(B.h_(0,0,!1),0,!1)
v=J.r(e,"at")
w=B.bk(J.k(v==null?"":v))
return u.aO(0,w==null?new B.V(B.h_(0,0,!1),0,!1):w)},
$S:41}
C.cKi.prototype={
$0(){var w=this.a,v=w.f
A.d.aa(v)
A.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cKj.prototype={
$0(){var w=this.a
if(w.c!=null)w.a2q(!0)},
$S:12}
C.cKf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cKg.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.Uo(this.b)},
$S:8}
C.cKx.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gd4(v).Q
v.toString
if(this.b)w.il(v)
else w.ml(v,A.dU,A.kL)},
$S:8}
C.cKq.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cKy.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cKz.prototype={
$0(){var w=this.a
w.f.push(B.H(["role","user","text",this.b,"at",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z))
w.b7M()
w.r.bP(0,A.cb)
w.at=!0},
$S:0}
C.cKA.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cKB.prototype={
$0(){var w=this.a
w.f.push(B.H(["role","ai","text",this.b,"at",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z))
w.at=!1},
$S:0}
C.cKC.prototype={
$0(){var w,v=this.b,u=B.U(x.N,x.z)
J.aJ(u,"role","ai")
J.aJ(u,"text",this.c)
J.aJ(u,"at",new B.V(Date.now(),0,!1).a9().ae())
w=this.a
if(J.cL(w.b)){w=J.b7(w.b,v.gclP(),x.P)
w=B.C(w,w.$ti.k("ak.E"))
J.aJ(u,"phoneActions",w)}v.f.push(u)
v.b7M()},
$S:0}
C.cKD.prototype={
$0(){this.a.f.push(B.H(["role","ai","text",y.g,"at",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z))},
$S:0}
C.cKE.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cKv.prototype={
$1(d){return this.blW(d)},
blW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a7(s)
q=r.h(s,"start")
p=B.bk(q==null?"":q)
q=r.h(s,"end")
o=B.bk(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bU()
w=5
return B.b(C.ar3(q,new C.rJ("cal_"+1000*n,m,l,(o==null?p.bS(36e8):o).bU(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.as6()
case 4:k.c.L(x.q).f.U(B.b3(null,null,null,A.cT,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:433}
C.cKM.prototype={
$1(d){return this.blX(d)},
blX(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,A.cT,null,A.t,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:433}
C.cKw.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gd4(v).Q
v.toString
w.il(v)},
$S:8}
C.cKZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.ac9(v-1)},
$S:0}
C.cKS.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.cKV.prototype={
$1(d){var w=this.a
w.m(new C.cKP(w,d))
if(d===0)w.a2q(!0)},
$S:32}
C.cKP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cKT.prototype={
$2$size(d,e){return C.hal(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1650}
C.cKU.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hnm(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.arT(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cKQ(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.ar1(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.um(),$async$$0)
case 15:p.m(new C.cKR(p))
p.ac9(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.um(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:62}
C.cKQ.prototype={
$2(d,e){return this.blY(d,e)},
blY(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a2K(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:130}
C.cKR.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cKX.prototype={
$2(d,e){return A.ad},
$S:37}
C.cKW.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a5a:D.a4s)[e],w,w,w,w,w,w,A.pI,w,w,w),t=B.a_(31,A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255),s=B.a_(89,A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255)
v=v.at?w:new C.cKO(v,e)
return B.n_(w,t,u,w,v,w,w,new B.ay(s,1,A.r,-1),w)},
$S:514}
C.cKO.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a5a:D.a4s
w.r.saZ(0,v[this.b])
w.nb()
return null},
$S:0}
C.cKY.prototype={
$1(d){var w=this.a
return w.at?null:w.nb()},
$S:2}
C.cKd.prototype={
$0(){return this.a.ac9(0)},
$S:0}
C.cKL.prototype={
$0(){return this.a.ac9(this.b)},
$S:0}
C.cKe.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.bZ5,A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,B.a([B.a_(51,A.aM.l()>>>16&255,A.aM.l()>>>8&255,A.aM.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.au,v,v,v,v,v,v,v,v,16,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.at(new B.D(A.a_s,B.x(B.a([u,A.ae,s,A.am,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aC:A.aS,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),v,v,v)}if(e<s)return u.bI8(t[e],w.c)
return u.aQo(B.H(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.c2N.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.k.N(d)
return new B.V(B.h_(w>1e11?w:w*1000,0,!0),0,!0).bU()}v=B.bk(J.k(d))
return v==null?null:v.bU()},
$S:282}
C.c2M.prototype={
$1(d){B.aK(d)
return(d==null?0:d)/100},
$S:620}
C.c2P.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bk(J.k(d))
w=w==null?null:w.bU()}return w},
$S:282}
C.c2O.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.a2(d,x.N,x.z)
try{v=J.r(w,"id")
v=J.k(v==null?"":v)
u=J.r(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aK(J.r(w,"amount"))
if(t==null)t=0
s=J.r(w,"type")
s=B.a5f(A.a5X,J.k(s==null?"reimbursement":s))
r=J.r(w,"method")
r=B.a5f(A.a4q,J.k(r==null?"system":r))
q=B.aS(J.r(w,"sourceDetails"))
p=J.r(w,"status")
p=B.a5f(A.Ie,J.k(p==null?"approved":p))
o=this.a.$1(J.r(w,"timestamp"))
if(o==null)o=new B.V(Date.now(),0,!1)
return new B.d7(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:566}
C.dEm.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dEn.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dEd.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dEb.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.AY(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.h4F(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.pq(o.a.c,!1),$async$$0)
case 4:o.le(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dEl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aaE(),$async$$0)
case 3:q=e
if(q==null){r.le("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a5(s,!1).cc(B.ej(new C.dEk(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.pq(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dEk.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.a_O(w.b,w.a,u,v,null)},
$S:z+39}
C.dEa.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hSB(q)?3:4
break
case 3:w=5
return B.b(t.a.F3(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.aZp(q,s.a.c),$async$$0)
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
case 9:s.le(C.c2R(s.a.c))
w=1
break
case 10:s.le("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.le(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return B.b(s.Ac(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aRD(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dE9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bp(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dEc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.ae5(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.hkc(q)
if(s==null){r.le("Could not read that backup file.")
w=1
break}if(!C.c2Q(s,r.a.c,null)){r.le(C.c2R(r.a.c))
w=1
break}w=4
return B.b(r.bKr(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dEj.prototype={
$1(d){var w=null,v=new B.au(A.at,$.aw()),u=B.R(d).ax.a===A.J,t=u?A.iz:A.c,s=x.p,r=B.x(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ac:A.al,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aB,B.aM(w,A.Y,!0,w,!0,A.t,w,B.aN(),v,w,w,w,w,w,2,B.bs(w,new B.b5(4,B.n(14),A.dk),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,A.dW,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.K,w,A.an,w,w,w,w)],s),A.E,w,A.e,A.P,0,A.p)
return B.ei(B.a([B.bM(!1,A.di,w,w,!0,w,w,w,new C.dEh(d),w,w),B.bI(D.fBK,w,new C.dEi(d,v),B.bo(A.aW,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fQG,w)},
$S:18}
C.dEh.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dEi.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.dEe.prototype={
$1(d){return D.hsm},
$S:z+12}
C.dEf.prototype={
$0(){return this.a.F4(A.a.i(this.b))},
$S:1}
C.dEg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.aZp(t.b,r.a.c),$async$$0)
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
return B.b(r.Ac(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.le(C.c2R(r.a.c))
w=1
break
case 8:r.le("Could not read that QR code for your account.")
w=1
break
case 9:r.le(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return B.b(r.aRD(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dEo.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dEs.prototype={
$1(d){this.a.Rr()
return null},
$S:11}
C.dEp.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dEq.prototype={
$0(){var w=null,v=this.a
B.fL(new B.fE(v.gaxD()))
this.b.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d("Code "+v.gaxD()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dEr.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dEt.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a0(s,"NGMYSNAP1|")||A.a.a0(s,"NGMYLOCALSYNC1|")||A.a.a0(s,"NGMYLOCALLIVE1|")||A.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a5(this.b,!1).O(s)
return}},
$S:199}
C.fy2.prototype={
$1(d){return D.hoM},
$S:z+13}
C.fzf.prototype={
$1(d){return new C.af6(this.a,this.b,this.c,null)},
$S:z+14}
C.f3z.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f3A.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ddq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fY()},
$S:8}
C.ddn.prototype={
$2(d,e){return e.alP(e.a.toUpperCase())},
$S:1651}
C.ddo.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a5(v,!1).O(w)
return null},
$S:2}
C.ddp.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.c3y.prototype={
$1(d){var w=J.r(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.b_(D.dqK,A.a.gkZ(v))},
$S:4}
C.fIT.prototype={
$1(d){return d.a===this.a},
$S:1652}
C.fIU.prototype={
$0(){return A.d.gI(A.Df)},
$S:1653}
C.dKQ.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dKP(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b6P("Time's up")},
$S:11}
C.dKP.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dKH.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dKM.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dKJ(w,d,e))},
$S:214}
C.dKJ.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.E(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dKN.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dKI(w))
w.cwR(!0)},
$S:0}
C.dKI.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dKO.prototype={
$1(d){this.a.b6P(d)
return null},
$S:2}
C.dKK.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.dKL.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.cbI.prototype={
$1(d){return D.dMh},
$S:z+15}
C.cbH.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fA2.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=B.aK(u.h(d,e)),s=t==null?v:A.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=B.aK(u.h(d,f))
w=t==null?v:A.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=B.aK(u.h(d,"outcome"))
return u==null?v:A.k.N(u)},
$S:1654}
C.fA3.prototype={
$2(d,e){var w=B.aK(J.r(d,e))
w=w==null?null:A.k.N(w)
return w==null?0:w},
$S:530}
C.fA4.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:215}
C.fPV.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hvK(w,v):C.haE(w,v)
if(u===3)++w.f
C.agD(w,this.c,u)
return u},
$S:1655}
C.fPX.prototype={
$0(){return C.hvK(this.a,this.b)},
$S:96}
C.fPW.prototype={
$0(){return C.haE(this.a,this.b)},
$S:96}
C.dDZ.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dDY(w))},
$S:0}
C.dDY.prototype={
$0(){this.a.r=1+A.o.F(B.Fp(new B.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dE_.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.k.bf(u*10)
if(w!==v.w)v.m(new C.dDX(v,w))}},
$S:0}
C.dDX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ce2.prototype={
$3(d,e,f){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bF,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dz)],x.p),A.m,w,A.e,A.i,0,A.p),1)},
$S:1656}
C.ce1.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.k.ac(e,2),w,w,w,w,w,w,A.n3,w,w,w)},
$S:387}
C.ceu.prototype={
$1(d){return new C.O7(this.a,this.b,!1,null,null)},
$S:z+16}
C.e3c.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.n(e?0:30)
e=e?g:B.L(A.b7.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.ac(2,A.G,A.b7.j(0.35),A.I,36),new B.ac(0,A.G,A.bE.j(0.175),A.I,24)],x.V)
v=B.n(f.a.e?0:30)
u=x.O
t=B.ap(g,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.c_(A.A,0.5,A.x,g,0,B.a([A.b8.j(0.22),A.L],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.ap(-50,B.p(g,g,A.f,g,g,new B.o(g,g,g,g,g,new B.c_(A.A,0.5,A.x,g,0,B.a([A.bE.j(0.18),A.L],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.i:A.P
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.N)
n=x.V
o.push(B.p(g,D.bUm,A.f,g,g,new B.o(g,g,B.L(A.aT.j(0.8),A.r,2.5),g,B.a([new B.ac(0,A.G,A.b7.j(0.55),A.cy,18)],n),E.uQ,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aQ)
o.push(B.o6(A.jN,D.fOd,new C.e38()))
o.push(A.N)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cA,g,1.45,!0,g,g,g,g,g,g,g,g),A.K,g,g))
m=this.b
if(m.length!==0){l=A.c0.j(0.12)
k=B.n(18)
j=B.L(A.c0.j(0.45),A.r,1)
i=B.a([B.B(B.a([B.X(D.bOm,A.c0.j(0.95),g,g,g,20),A.ad,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.c0.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.m,g,A.e,A.i,0,g,g),A.W,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.W],p)
A.d.v(i,new B.N(m,new C.e39(),B.T(m).k("N<1,v>")))
A.d.v(o,B.a([A.aQ,B.p(g,B.x(i,A.E,g,A.e,A.i,0,A.p),A.f,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bD,g,g,1/0)],p))}o.push(A.bx)
m=A.w.j(0.35)
l=B.n(18)
k=B.L(A.b7.j(0.35),A.r,1)
o.push(B.p(g,B.x(B.a([f.ayq(A.ho,"Unlimited games with an active plan",A.b8),A.N,f.ayq(A.k0,"Weekday check-ins grow your balance",A.b7),A.N,f.ayq(A.mP,"Compete, bet, and earn points",A.aT)],p),A.m,g,A.e,A.i,0,A.p),A.f,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bD,g,g,1/0))
o.push(A.d4)
l=B.n(16)
n=B.a([new B.ac(0,A.G,A.bE.j(0.45),A.cy,16)],n)
o.push(new B.a4(1/0,g,B.c4(B.di(D.bXM,D.fJD,new C.e3a(f,a0),B.bo(A.L,g,g,g,A.c,A.K8,g,A.L,new B.b8(B.n(16),A.a0),g,g,g)),new B.o(g,g,g,l,n,E.uQ,A.n),A.bh),g))
o.push(A.N)
n=f.a.e?"Back":"Maybe later"
o.push(B.bM(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e3b(f,a0),g,g))
if(f.a.e)o.push(A.b2)
h=B.p(g,B.bx(v,new B.an(A.a_,g,A.ab,A.t,B.a([t,u,new B.D(new B.Q(22,r,22,q),B.x(o,A.m,g,A.e,s,0,A.p),g)],p),g),A.ap),A.f,g,g,new B.o(g,g,e,d,w,D.c7e,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eU(g,A.L,h,g,g,g,Ag.a_Y,A.d8,g,g,g)},
$S:685}
C.e38.prototype={
$1(d){return D.c6c.aA(0,d)},
$S:68}
C.e39.prototype={
$1(d){var w=null
return new B.D(A.eI,B.B(B.a([B.X(A1.a1Y,A.c0.j(0.85),w,w,w,14),A.ad,B.E(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$S:138}
C.e3a.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a5(this.b,!1).O(null)
w.a.c.$0()}},
$S:0}
C.e3b.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a5(this.b,!1).O(null)},
$S:0}
C.fLf.prototype={
$1(d){if(d.gmQ())this.a.a=d
return d.gmQ()},
$S:565}
C.fL2.prototype={
$1(d){$.aW.x1$.push(new C.fL1(this.a))},
$S:8}
C.fL1.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fwj.prototype={
$1(d){return C.hvR(this.a,this.b+1)},
$S:8}
C.fMC.prototype={
$2(d,e){var w=B.aG(d,A.bZ,x.w).w.a
return new B.a4(w.a,w.b,B.c6(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:155}
C.ceI.prototype={
$1(d){return d.r===this.a},
$S:252}
C.ceJ.prototype={
$1(d){var w=$.aSq(),v=w.a
w.sp(0,v+1)
return v},
$S:1658}
C.ceK.prototype={
$1(d){},
$S:30}
C.ceH.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:252}
C.ceG.prototype={
$1(d){return d.f.ce(this.a)},
$S:252}
C.ft9.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:75}
C.fYw.prototype={
$1(d){return C.a7W(this.a)},
$S:105}
C.fYx.prototype={
$1(d){var w=$.aSq()
w.sp(0,w.a+1)},
$S:29}
C.fYy.prototype={
$1(d){},
$S:30}
C.fYz.prototype={
$1(d){return new B.jZ($.aSq(),new C.fYv(this.a,this.b),null,null,x.am)},
$S:1659}
C.fYv.prototype={
$3(d,e,f){var w=this.b
return new B.l4(C.aqJ(this.a,!1),new C.fYu(w),w,null,x.gv)},
$S:1660}
C.fYu.prototype={
$2(d,e){var w=e.b
return new C.adZ(w==null?this.a:w,null)},
$S:z+17}
C.e3f.prototype={
$1(d){return d.c},
$S:252}
C.e3g.prototype={
$1(d){return d.gbiy()},
$S:1661}
C.e3h.prototype={
$2(d,e){return d+e},
$S:80}
C.e3i.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.e3k.prototype={
$2(d,e){return A.N},
$S:37}
C.e3j.prototype={
$2(d,e){return new C.adY(J.r(this.a.c,e),null)},
$S:z+18}
C.e3e.prototype={
$1(d){return d==null?"\u2026":C.bC7(d)},
$S:1662}
C.fYC.prototype={
$3(d,e,f){var w=this
return B.rY(new C.aBG(w.a,w.b,w.c,w.d,new C.fYA(d,w.e),new C.fYB(d,w.f),null))},
$C:"$3",
$R:3,
$S:97}
C.fYA.prototype={
$0(){B.a5(this.a,!1).O(null)
C.hzb(this.b)},
$S:0}
C.fYB.prototype={
$0(){B.a5(this.a,!1).O(null)
C.hzb(this.b)},
$S:0}
C.dks.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&B.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ag()*260
u.c=1.5+w.ag()*3}}g=x.p
w=B.a([],g)
if(h.a.c){t=h.f
A.d.v(w,new B.N(t,new C.dkr(),B.T(t).k("N<1,v>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bf,A.ej,A.dY],r):B.a([A.aw,A.el,A.ek],r)
p=B.n(26)
o=B.L(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.ac(6,A.G,(h.a.c?A.dE:A.dJ).j(0.5),A.I,36)],n)
l=B.a([],g)
if(h.a.c){k=B.dt()
j=k.a
j.$flags&2&&B.aj(j)
j[11]=0.001
k.km(-0.35)
r=B.a([Z.ai2,A.tU],r)
l.push(new B.a4(i,100,new B.an(A.A,i,A.ab,A.f,B.a([B.fA(A.A,B.p(i,D.bbX,A.f,i,i,new B.o(i,i,i,i,B.a([new B.ac(4,A.G,A.cW.j(0.6),A.I,24),new B.ac(0,A.G,A.w.j(0.3),A.ds,12)],n),new B.c_(A.A,0.5,A.x,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c05)
l.push(A.aB)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.KC,A.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.n(18)
k=B.L(A.ej,A.r,4)
A.d.v(l,B.a([A.aB,D.fDs,A.N,B.p(i,B.d(r,i,i,i,i,i,i,D.ftw,A.K,i,i),A.f,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.NE,i,i,1/0)],g))}A.d.v(l,B.a([A.ae,B.d(h.a.e,i,i,i,i,i,i,D.fwr,A.K,i,i)],g))
l.push(A.dT)
r=B.E(B.dT(D.fAY,h.a.r,B.dj(i,i,i,i,i,i,i,i,i,A.c,i,i,A.cm,i,i,D.b3l,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.B(B.a([r,A.as,B.E(B.bI(F.aVE,i,n,B.bo(A.c,i,i,i,h.c?A.ej:A.el,i,A.cm,i,i,i,i,i)),1)],g),A.m,i,A.e,A.i,0,i,i))
w.push(B.ee(A.A,B.p(i,B.x(l,A.m,i,A.e,A.P,0,A.p),A.f,i,i,new B.o(i,i,o,p,m,new B.a9(A.az,A.aE,A.x,q,i,i),A.n),i,i,i,A.aa,A.ama,i,i,s),1+t*0.02,i,i))
return new B.an(A.A,i,A.ab,A.f,w,i)},
$S:114}
C.dkr.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.ap(w,B.db(B.eM(A.A,d.d,B.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cgi.prototype={
$2(d,e){var w=null,v=this.a,u=C.hS0(B.LB(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1663}
C.cgh.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:75}
C.c44.prototype={
$0(){},
$S:0}
C.fs7.prototype={
$1(d){return A.o.u(d)},
$S:73}
C.dWI.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dWJ.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dWK.prototype={
$0(){var w=this.a
return w.w=D.Sb[w.d.ap(5)]},
$S:0}
C.dWL.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dWN.prototype={
$0(){var w=this.a
return w.m(new C.dWH(w))},
$S:0}
C.dWH.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dWO.prototype={
$0(){var w=this.a
return w.m(new C.dWG(w))},
$S:0}
C.dWG.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dWR.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.dWS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bf:B.a_(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.n(10)
t=t.y?u:new C.dWQ(t,d)
w=B.n(10)
v=A.k.ac(d,0)
return B.E(new B.D(A.jC,B.aI(!1,A.a2,!0,r,B.aO(!1,w,!0,new B.a4(u,38,B.at(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.f,s,0,u,u,u,u,u,A.ai),u),1)},
$S:1664}
C.dWQ.prototype={
$0(){var w=this.a
return w.m(new C.dWP(w,this.b))},
$S:0}
C.dWP.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,A.cb)},
$S:0}
C.e3q.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cK.gcu().aP(this.c)},
$S:0}
C.e3r.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.e3m.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.n(14),s=u?A.c.j(0.1):A.L,r=B.L(u?D.eQ.j(0.5):A.L,A.r,1),q=B.X(e,u?D.eQ:A.aC,w,w,w,20)
return B.E(B.aA(w,B.cY(w,B.B(B.a([q,A.bm,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aC,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.b9,A.i,0,w,w),w,w,A.b5,new B.o(s,w,r,t,w,w,A.n),A.a2,w,46,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3o(v,d),w,w,w,w,w,w,!1,A.a3),1)},
$S:1665}
C.e3o.prototype={
$0(){var w=this.a
return w.m(new C.e3n(w,this.b))},
$S:0}
C.e3n.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3p.prototype={
$0(){var w=this.a,v=w.d===A.kV?"Cash App tag":"Bitcoin address"
return w.Jk(this.b,v)},
$S:0}
C.e3l.prototype={
$0(){var w=this.a
return w.Jk(w.gasZ(),"Code")},
$S:0}
C.cf9.prototype={
$1(d){return C.hOc(B.a2(d,x.N,x.z))},
$S:z+20}
C.cfa.prototype={
$2(d,e){return d.c.aO(0,e.c)},
$S:z+6}
C.cf6.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.cf7.prototype={
$2(d,e){return d.c.aO(0,e.c)},
$S:z+6}
C.cf8.prototype={
$1(d){return d.ah()},
$S:z+23}
C.cfb.prototype={
$1(d){var w=d.c
return!w.d3(this.a.bS(-36e8))&&!w.ce(this.b)},
$S:z+7}
C.c7b.prototype={
$1(d){return C.hOd(B.a2(d,x.N,x.z))},
$S:z+24}
C.c7c.prototype={
$2(d,e){return e.b.aO(0,d.b)},
$S:z+8}
C.c79.prototype={
$1(d){return d.ah()},
$S:z+26}
C.c7a.prototype={
$2(d,e){return e.b.aO(0,d.b)},
$S:z+8}
C.c7e.prototype={
$1(d){var w=d.b
return!w.d3(this.a)&&!w.ce(this.b)},
$S:z+27}
C.cfi.prototype={
$1(d){return d.ah()},
$S:z+28}
C.cfh.prototype={
$1(d){return C.hmt(B.a2(x.f.a(d),x.N,x.z))},
$S:z+29}
C.cfg.prototype={
$1(d){return d.ah()},
$S:z+30}
C.cff.prototype={
$1(d){return C.hRE(B.a2(x.f.a(d),x.N,x.z))},
$S:z+31}
C.cfk.prototype={
$1(d){return C.hRD(B.a2(x.f.a(d),x.N,x.z))},
$S:z+32}
C.cfl.prototype={
$2(d,e){return A.o.aO(d.f,e.f)},
$S:z+2}
C.cfm.prototype={
$1(d){return d.ah()},
$S:z+34}
C.e7v.prototype={
$1(d){return d.bdU(B.bp(d.e,!0,x.u))},
$S:z+36}
C.e7w.prototype={
$2(d,e){return A.o.aO(d.f,e.f)},
$S:z+2}
C.e7p.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7q.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e78.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.M(w,this.b)},
$S:0}
C.e79.prototype={
$1(d){return new C.Q5(this.a,null)},
$S:z+9}
C.e7a.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bg(t,new C.e77(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cz(u.d,w)
u.Ju()}},
$S:0}
C.e77.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e7m.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.H(["role","admin","text",this.b],w,w))},
$S:0}
C.e7n.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.H(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.ihD(v,w[0],w[3])
t.Ju()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.H(["role","ai","text",t],w,w))}},
$S:0}
C.e7o.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gd4(v).Q
v.toString
w.il(v)}},
$S:8}
C.e7g.prototype={
$1(d){return new C.Q5(this.a,null)},
$S:z+9}
C.e7h.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e7f.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cz(w,this.b)},
$S:0}
C.e7l.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cz(w,s)
A.d.c6(t.d,u.a,v)
t.Ju()},
$S:0}
C.e7k.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.a0A(u[w],new C.e7j(v,w),null)},
$S:z+59}
C.e7j.prototype={
$1(d){var w=this.a
return w.m(new C.e7i(w,this.b,d))},
$S:z+40}
C.e7i.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
return w.m(new C.e7b(w))},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e7d.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.cq:A.aK
return new B.D(A.eI,B.d(t+": "+B.w(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a7:A.cA,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:120}
C.e7e.prototype={
$1(d){return this.a.a25()},
$S:2}
C.e7u.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.tP:A.c
u=B.n(16)
t=B.n(16)
s=l?A.aK:A.aN
r=w.d
q=B.b1(r).j(0.15)
p=B.n(12)
q=B.p(n,B.X(A.aoU,l?A.bL:A.al,n,n,n,20),A.f,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bT,n,n,n)
p=B.b1(r).j(0.12)
o=B.n(8)
o=B.p(n,B.X(w.c,B.b1(r),n,n,n,18),A.f,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hR,n,n,n)
r=B.B(B.a([o,A.as,B.E(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aP:A.O,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.m,n,A.e,A.i,0,n,n)
p=w.e.length
return new B.D(A.d1,B.aI(!1,A.a2,!0,u,B.dH(!1,n,n,n,!0,n,n,n,!0,n,n,new H.avA(q,e,!0,n),n,n,n,n,new C.e7r(m,e),!1,n,n,new B.b8(t,new B.ay(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bL:A.al,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.Cl(n,n,n,new C.e7s(),A.I,new C.e7t(m,e),A.ck,n,x.N),n),A.f,v,0,n,n,n,n,n,A.ai),new B.bQ(w.a,x.W))},
$S:120}
C.e7t.prototype={
$1(d){var w=this
if(d==="edit")w.a.ab7(w.b)
if(d==="questions")w.a.Zr(w.b)
if(d==="delete")w.a.bNm(w.b)},
$S:2}
C.e7s.prototype={
$1(d){return D.cUN},
$S:143}
C.e7r.prototype={
$0(){return this.a.Zr(this.b)},
$S:0}
C.cTz.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.c()
w=d.a===q.a
if(w){q=r.f
q===$&&B.c()
q=B.b1(q).j(0.2)}else q=A.cY.j(0.1)
v=B.n(10)
if(w){u=r.f
u===$&&B.c()
u=B.b1(u)}else u=A.L
u=B.L(u,A.r,1)
t=r.f
t===$&&B.c()
return B.aO(!1,s,!0,B.p(s,B.X(d,B.b1(t),s,s,s,s),A.f,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.ck,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cTy(r,d),s,s,s,s,s,s,s)},
$S:1666}
C.cTy.prototype={
$0(){var w=this.a
return w.m(new C.cTw(w,this.b))},
$S:0}
C.cTw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTA.prototype={
$1(d){var w=null,v=this.a,u=B.b1(d),t=v.f
t===$&&B.c()
return B.aA(w,B.hb(u,w,t===d?D.bYw:w,w,14),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cTx(v,d),w,w,w,w,w,w,!1,A.a3)},
$S:442}
C.cTx.prototype={
$0(){var w=this.a
return w.m(new C.cTv(w,this.b))},
$S:0}
C.cTv.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cTB.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.cTC.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cNt(v,w,t)
B.a5(this.b,!1).O(t)
return null},
$S:0}
C.eZt.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.eZu.prototype={
$1(d){return new C.a0z(this.a,null)},
$S:z+41}
C.eZA.prototype={
$2(d,e){return A.N},
$S:37}
C.eZz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.tP:A.c
u=B.n(14)
t=B.n(14)
s=l?A.aK:A.aN
r=w.d
if(r!=null&&r.length!==0){q=B.n(8)
r=B.bx(q,K.aR2(n,A.bY,36,A.qt,l?A.bL:A.al,r,48),A.ap)}else r=B.X(D.a1G,B.b1(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a1,n,n,n,B.l(n,n,l?A.aP:A.O,n,n,n,n,n,n,n,n,n,n,n,A.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return B.aI(!1,A.a2,!0,u,B.dH(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.eZx(m,w,e),!1,n,n,new B.b8(t,new B.ay(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bL:A.al,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aH(n,n,n,n,D.bWR,n,n,n,new C.eZy(m,e),n,n,n,n,n,n),n),A.f,v,0,n,n,n,n,n,A.ai)},
$S:79}
C.eZy.prototype={
$0(){var w=this.a
w.m(new C.eZv(w,this.b))
w.ayt()},
$S:0}
C.eZv.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cz(w,this.b)},
$S:0}
C.eZx.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.b27(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eZw(t,u.c,s))
t.ayt()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eZw.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eZp.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eZn.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.W1(w,"Answer Document",null)},
$S:z+42}
C.eZo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZr.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a5(this.b,!1).O(new C.it(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eZs.prototype={
$1(d){var w=this.a
return w.m(new C.eZq(w,d))},
$S:9}
C.eZq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cfc.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fN_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e85.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.e7M.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.M(w,new C.lT("image","",this.b,null))},
$S:0}
C.e7R.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.M(w,new C.lT("video","","data:video/mp4;base64,"+A.cK.gcu().aP(this.b),null))},
$S:0}
C.e7P.prototype={
$1(d){var w=null,v=x.p,u=B.x(B.a([B.aM(w,A.Y,!1,w,!0,A.t,w,B.aN(),this.a,w,w,w,w,w,2,D.c2_,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w),B.aM(w,A.Y,!1,w,!0,A.t,w,B.aN(),this.b,w,w,w,w,w,2,D.c1Z,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)],v),A.m,w,A.e,A.P,0,A.p)
return B.ei(B.a([B.bM(!1,A.di,w,w,!0,w,w,w,new C.e7N(d),w,w),B.bI(D.fNH,w,new C.e7O(d),w)],v),w,w,w,u,w,w,w,w,D.fAb,w)},
$S:18}
C.e7N.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e7O.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e7Q.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.M(v,new C.lT("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.e7I.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.e7J.prototype={
$1(d){return d.length!==0},
$S:3}
C.e7K.prototype={
$1(d){return A.a.i(A.a.em(d,B.ag("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.e7L.prototype={
$1(d){return d.length!==0},
$S:3}
C.e7W.prototype={
$0(){var w=this.a.bGE()
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.e7X.prototype={
$0(){return this.a.ayu("**","**")},
$S:0}
C.e7Y.prototype={
$0(){return this.a.ayu("*","*")},
$S:0}
C.e7Z.prototype={
$0(){return this.a.ayu("__","__")},
$S:0}
C.e8_.prototype={
$0(){return this.a.b0b("## Section title")},
$S:0}
C.e80.prototype={
$0(){return this.a.b0b("\u2022 First point\n\u2022 Second point")},
$S:0}
C.e81.prototype={
$0(){},
$S:0}
C.e82.prototype={
$0(){var w=this.a
w.m(new C.e7V(w))},
$S:0}
C.e7V.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.M(w,D.dPF)},
$S:0}
C.e83.prototype={
$0(){var w=this.a
w.m(new C.e7U(w))},
$S:0}
C.e7U.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.M(w,D.dPG)},
$S:0}
C.e84.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=B.d(w,u,u,u,u,u,u,B.l(u,u,v?A.jg:A.au,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?A.cr:A.iA
return B.DP(u,v,A.ara,w,u,new C.e7T(this.a,d),u)},
$S:z+45}
C.e7T.prototype={
$0(){var w=this.a
return w.m(new C.e7S(w,this.b))},
$S:0}
C.e7S.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cz(w,this.b.a)},
$S:0}
C.e7F.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b_4},
$S:0}
C.e7G.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hqn},
$S:0}
C.e7x.prototype={
$0(){var w=this.a
w.d=D.b_3
w.f=w.e=null},
$S:0}
C.e7y.prototype={
$0(){var w=this.a
w.d=D.b_4
w.f=null},
$S:0}
C.e7H.prototype={
$2(d,e){return A.o.aO(d.f,e.f)},
$S:z+2}
C.e7A.prototype={
$2(d,e){var w=this.a,v=w.gb7N()[e]
return new C.acu(v,this.b,new C.e7z(w,v),null)},
$S:z+46}
C.e7z.prototype={
$0(){return this.a.caY(this.b.a)},
$S:0}
C.e7C.prototype={
$2(d,e){return A.o.aO(d.f,e.f)},
$S:z+47}
C.e7E.prototype={
$2(d,e){return A.W},
$S:37}
C.e7D.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.tP:A.c,p=B.n(16),o=B.n(16),n=B.n(16),m=B.L(r?A.aK:A.aN,A.r,1),l=B.a([new B.ac(0,A.G,A.w.j(r?0.28:0.06),A.dC,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.n(10)
v=B.n(10)
k.push(B.bx(w,K.aR2(v,A.bY,52,D.a1G,r?A.bL:A.al,j,52),A.ap))}else{j=u.d.d
w=B.b1(j).j(0.15)
v=B.n(12)
k.push(B.p(t,B.X(D.a1G,B.b1(j),t,t,t,24),A.f,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bd)
k.push(B.E(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aP:A.O,t,t,t,t,t,t,t,t,13,t,t,A.U,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.X(A.eE,r?A.bL:A.al,t,t,t,22))
return B.aI(!1,A.a2,!0,p,B.aO(!1,o,!0,B.p(t,B.B(k,A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bg,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.e7B(u.a,s),t,t,t,t,t,t,t),A.f,q,0,t,t,t,t,t,A.ai)},
$S:79}
C.e7B.prototype={
$0(){return this.a.chV(this.b)},
$S:0}
C.cfe.prototype={
$1(d){return new C.acn(d,this.a,null)},
$S:z+48}
C.cN5.prototype={
$0(){var w=this.a.c,v=w.c,u=B.oa(v==null?w.b:v)
if(u!=null)B.j3(u,A.fw,null)},
$S:0}
C.cN6.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cN7.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.cq:A.aK,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.D(A.ns,B.B(B.a([u,B.E(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.cq:A.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.E,w,A.e,A.i,0,w,w),w)},
$S:138}
C.doN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.doP.prototype={
$0(){return this.a.m(new C.doO(this.b))},
$S:0}
C.doO.prototype={
$0(){var w=this.a
return w.a.f?w.hh(0):w.qh(0)},
$S:0}
C.frR.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.e8j.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.DH)w.z=v
else w.Q=v},
$S:0}
C.e8a.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gd4(v).Q
v.toString
w.ml(v,A.cu,A.eR)},
$S:8}
C.e8c.prototype={
$1(d){return J.r(d,"role")==="ai"},
$S:94}
C.e8d.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.H(["role","user","text",this.b],v,v))
w.d.bP(0,A.cb)
w.r=!0},
$S:0}
C.e8e.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.H(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.e8f.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.w(w.h(d,"text"))},
$S:153}
C.e8g.prototype={
$0(){var w=x.N
return this.a.f.push(B.H(["role","ai","text",this.b],w,w))},
$S:0}
C.e8h.prototype={
$0(){var w=x.N
return this.a.f.push(B.H(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.e8i.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e8b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.n1(l,A.bE.j(0.9),l,l,l,l,l,2,l,l)
return new B.D(A.bQ,B.B(B.a([new B.a4(22,22,k,l),A.as,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aC:A.dL,l,l,l,l,l,l,l,l,12,A.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.m,l,A.e,A.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a8:A.a5
k=k.c
k.toString
k=B.aG(k,A.bZ,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a9(A.a5,A.a8,A.x,B.a([A.aD,A.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a9(A.a5,A.a8,A.x,v?B.a([A.bo,A.O],q):B.a([A.c,A.aP],q),l,l)}p=B.a([new B.ac(0,A.G,(u?A.bE:A.aD).j(0.22),A.j6,14)],x.V)
o=B.L(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.aN:A.bk
n=u?13.5:15
m=u?A.bp:A.cD
return new B.bN(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a7:A.cA,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.f,l,new B.aZ(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.bh(A.ih,A.ih,new B.aP(s,s),new B.aP(r,r)),p,q,A.n),l,l,l,A.kM,A.jj,l,l,l),l)},
$S:42}
C.e8q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([D.agb,A.O,A.o4],t):B.a([A.q1,A.pZ,A.q0],t)
w=B.a([new B.ac(-4,A.G,A.aD.j(0.35+w*0.25),A.ds,28)],x.V)
r=B.L(A.c.j(u?0.08:0.5),A.r,1)
q=B.dt()
p=q.a
p.$flags&2&&B.aj(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fN(m*0.08)
q=B.fA(A.A,B.p(o,D.bTq,A.f,o,o,new B.o(o,o,B.L(A.aT.j(0.6),A.r,2),o,o,D.ewr,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.o6(A.jN,D.fSp,new C.e8n())
p=x.p
m=B.a([B.B(B.a([q,A.bd,B.E(B.x(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aR:A.aS,o,o,o,o,o,o,o,o,10,o,o,A.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.E,o,A.e,A.i,0,A.p),1)],p),A.m,o,A.e,A.i,0,o,o),A.ae,B.B(B.a([n.awH(D.DH,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ad,n.awH(D.aK1,"English","\ud83c\uddec\ud83c\udde7",u),A.ad,n.awH(D.DI,"Mix","\ud83d\udd25",u)],p),A.m,o,A.e,A.i,0,o,o)],p)
if(n.x!==D.DI){t=B.a([A.N,n.cBg(u)],p)
if(n.w){q=n.x===D.DH?D.a5S:D.a4Z
p=B.T(q).k("N<1,v>")
q=B.C(new B.N(q,new C.e8o(n,u),p),p.k("ak.E"))
t.push(new B.D(A.jB,B.bX(A.bG,q,A.br,o,6,6),o))}A.d.v(m,t)}else{t=B.a([A.bE.j(0.22),A.aD.j(0.12)],t)
q=B.n(12)
p=B.L(A.bE.j(0.45),A.r,1)
m.push(new B.D(A.jB,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.io:A.kf,o,o,o,o,o,o,o,o,10,o,o,A.U,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.f,o,o,new B.o(o,o,p,q,o,new B.a9(A.a5,A.a8,A.x,t,o,o),A.n),o,o,o,o,A.bT,o,o,o),o))}m.push(A.N)
t=x.dc
n=B.C(new B.N(D.dj4,new C.e8p(n,u),t),t.k("ak.E"))
m.push(B.B(n,A.m,o,A.e,A.i,0,o,o))
return B.p(o,B.x(m,A.ak,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,r,v,w,new B.a9(A.az,A.aE,A.x,s,o,o),A.n),o,o,o,I.al4,I.alg,o,o,o)},
$S:98}
C.e8n.prototype={
$1(d){return D.c6E.aA(0,d)},
$S:68}
C.e8o.prototype={
$1(d){return this.a.cBh(d,this.b)},
$S:z+49}
C.e8p.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aK3?6:0,m=o?5:0,l=B.n(12)
if(o){w=this.b
v=w?A.aD.j(0.45):A.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.n(12)
p=p.r?q:new C.e8m(p,d)
s=C.hT9(d)
if(o)r=A.c
else r=v?A.ac:A.bk
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hTa(d)
if(o)v=A.ac
else v=v?A.bU:A.dL
return B.E(new B.D(new B.Q(0,0,n,0),B.aI(!1,A.a2,!0,l,B.aO(!1,t,!0,new B.D(O.NF,B.x(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.f,w,m,q,q,q,q,q,A.ai),q),1)},
$S:z+50}
C.e8m.prototype={
$0(){var w=this.a
return w.m(new C.e8l(w,this.b))},
$S:0}
C.e8l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e8s.prototype={
$0(){var w=this.a
return w.m(new C.e8r(w))},
$S:0}
C.e8r.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e89.prototype={
$0(){var w=this.a
return w.m(new C.e88(w,this.b))},
$S:0}
C.e88.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.DI
if(v===D.aK1&&w.Q==null)w.Q=A.d.gI(D.a4Z).a},
$S:0}
C.e8t.prototype={
$0(){return this.a.cwH(this.b.a)},
$S:0}
C.e8k.prototype={
$0(){return this.a.Jl(this.b)},
$S:0}
C.e86.prototype={
$1(d){return this.a.b0c()},
$S:2}
C.e87.prototype={
$0(){return this.a.b0c()},
$S:0}
C.fZm.prototype={
$1(d){var w=this
return new C.a_j(w.a,w.b,w.c,new C.fZl(w.d),null)},
$S:z+51}
C.fZl.prototype={
$0(){return J.lG(this.a.bi())},
$S:0}
C.dm6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.biP()},
$S:29}
C.dm7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aG(m,A.bZ,u).w
s=Math.cos(v)
u=B.aG(m,A.bZ,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.e5:A.ho
o=A.o.F(w,4)
q=q?A.ay:A.aM
return B.ap(n,B.db(B.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:304}
C.dmc.prototype={
$0(){},
$S:0}
C.dmb.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.lw.aw(0,A.k.E(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.dt()
u=w.a
u.$flags&2&&B.aj(u)
u[11]=0.0028
w.fN(t*0.08)
w.km(0.12)
return B.ee(A.A,B.fA(A.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:46}
C.dm8.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.p(t,t,A.f,t,t,new B.o(t,t,t,t,B.a([new B.ac(6,A.G,A.ay.j(w*0.5),A.I,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.an(A.A,t,A.ab,A.t,B.a([r,new B.a4(96,96,B.n1(A.c.j(0.08),A.ay,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cW(A.ay.j(w),A.I,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:114}
C.dm9.prototype={
$1(d){return D.c6I.aA(0,d)},
$S:68}
C.dma.prototype={
$0(){var w=this.a
w.a.biP()
w.a.e.$0()},
$S:0}
C.chb.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fH)if(d.x===A.dy){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.cho.prototype={
$1(d){return d.a===this.a},
$S:16}
C.emz.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.enf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Qi()},
$S:8}
C.eng.prototype={
$1(d){var w=$.aW.p2$
if(w===A.tC||w===A.tD)return
this.a.EZ()},
$S:11}
C.enh.prototype={
$1(d){this.a.cDo()},
$S:11}
C.emY.prototype={
$0(){this.a.JP(this.b.d,!1)},
$S:0}
C.emZ.prototype={
$0(){},
$S:0}
C.en_.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.en0.prototype={
$0(){},
$S:0}
C.en1.prototype={
$1(d){return d.a===this.a},
$S:16}
C.en2.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.en3.prototype={
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
C.emT.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bp(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bp(v[1],!0,x.N)
w.Pw()
w.a9h()},
$S:0}
C.emA.prototype={
$0(){this.b.JP(this.c.d+this.a.a,!1)},
$S:0}
C.emU.prototype={
$1(d){var w=d.d
return(w===A.fH||w===A.eW)&&d.x===A.dy},
$S:16}
C.emV.prototype={
$1(d){return d.a},
$S:168}
C.emW.prototype={
$1(d){return d.a===this.a},
$S:16}
C.emX.prototype={
$0(){},
$S:0}
C.emE.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bp(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bp(v[0],!0,x.N)},
$S:0}
C.emF.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.emN.prototype={
$0(){},
$S:0}
C.emK.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.emL.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.emM.prototype={
$0(){var w=this.a,v=B.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.emO.prototype={
$0(){return this.a.z=!0},
$S:0}
C.emP.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.vS(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.emQ.prototype={
$0(){return this.a.z=!1},
$S:0}
C.emS.prototype={
$0(){var w=this.a
return w.m(new C.emR(w))},
$S:0}
C.emR.prototype={
$0(){return this.a.y=1},
$S:0}
C.emG.prototype={
$0(){return this.a.y=1},
$S:0}
C.emH.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.en7.prototype={
$1(d){return d.a.length===0},
$S:16}
C.en8.prototype={
$2(d,e){return e.y.aO(0,d.y)},
$S:77}
C.enc.prototype={
$0(){var w=this.a
return w.m(new C.en5(w))},
$S:0}
C.en5.prototype={
$0(){return this.a.y=1},
$S:0}
C.end.prototype={
$0(){var w=this.a
return w.m(new C.en4(w))},
$S:0}
C.en4.prototype={
$0(){return this.a.y=2},
$S:0}
C.ene.prototype={
$0(){return B.iZ(this.a,null)},
$S:0}
C.en9.prototype={
$2$cloudRequest(d,e){return this.a.b1q(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1668}
C.ena.prototype={
$0(){return this.a.EZ()},
$S:1}
C.enb.prototype={
$0(){var w=this.a
return w.m(new C.en6(w))},
$S:0}
C.en6.prototype={
$0(){var w=this.a
return w.y=A.o.E(w.y-1,0,2)},
$S:0}
C.emD.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.emC(w))},
$S:0}
C.emC.prototype={
$0(){return this.a.y=0},
$S:0}
C.emB.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bGW(B.p(t,t,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.55),A.r,1.2),t,B.a([new B.ac(1,A.G,A.aA.j(0.55),A.I,18)],x.V),D.c4H,A.a6),t,t,t,t,t,t,t,t),A.et,A.rD,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.c6n(u))
return new B.an(A.a_,t,A.ab,A.t,B.a([q,B.B(v,A.m,t,A.e,A.i,0,t,t)],w),t)},
$S:66}
C.emJ.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eZ()
w.m(new C.emI(w,v))},
$S:0}
C.emI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dqx.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fH||v===A.eW)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dqy.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:688}
C.dqz.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.V(Date.now(),0,!1)
u=B.dF(C.h62(v.c,u))
w=this.c?new C.dqw(v):null
return v.b9O(this.b,A.qE,D.eQ,w,"Today","$"+u,D.eQ)},
$S:1670}
C.dqw.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dqA.prototype={
$2(d,e){var w=this.a
return w.b9O(this.b,A.kn,A.cf,w.w,"Balance","$"+B.dF(B.LB(w.c.a,new C.dqv(w))),A.cp)},
$S:59}
C.dqv.prototype={
$0(){return this.a.c.d},
$S:81}
C.dqq.prototype={
$0(){this.a.a.cVr()
return null},
$S:0}
C.dqr.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b4(w,w,w,new C.bxp(v,w),A.ax)},
$S:63}
C.dqs.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.bd1(v,!0,A.aA,D.p2,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.bd0(v,D.p2,w)}return B.b4(w,w,w,v,A.ax)},
$S:63}
C.dqt.prototype={
$1(d){return new B.V(Date.now(),0,!1)},
$S:688}
C.dqu.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.V(Date.now(),0,!1)
w=r.a
v=w.a.cU6(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.k.E(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.cb(new B.h9(B.a([u,s],x.U)),new C.dqp(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1671}
C.dqp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.v(l,B.ir(7,new C.dqo(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b4(n,n,n,new C.bd_(o.c,v,k,u,D.p2,D.bu4,n),D.fad))
v=B.L(A.c.j(0.1),A.r,1.2)
if(k)t=A.wt
else t=o.e?A.wn:D.bOy
t=B.X(t,k?D.p2:A.b_,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dF(w.f&&w.d>0?w.d:o.f)}q=k?D.p2:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.n(999)
p=u.j(0.16)
u=B.L(u.j(0.5),A.r,1)
l.push(B.p(n,B.x(B.a([t,A.am,s,A.av,w,A.N,B.p(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.p2:A.p6,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.la,n,n,n)],m),A.m,n,A.b9,A.i,0,A.p),A.f,n,n,new B.o(A.L,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.at(new B.a4(276,276,new B.an(A.A,n,A.ab,A.f,l,n),n),n,n,n)},
$S:221}
C.dqo.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.F(d,3)
t=A.o.F(d,2)
return B.ap(s,B.e_(B.db(B.p(s,s,A.f,s,s,new B.o(s,s,s,B.n(40),s,new B.c_(A.A,0.5,A.x,s,0,B.a([D.p2.j(0.38),A.c.j(0.08),A.L],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:217}
C.dqR.prototype={
$0(){},
$S:0}
C.dqS.prototype={
$0(){},
$S:0}
C.dqT.prototype={
$1(d){return d.x===A.dy},
$S:16}
C.dqD.prototype={
$0(){return this.a.a.d.d},
$S:81}
C.dqC.prototype={
$0(){var w,v
B.eZ()
w=this.a
v=this.b
w.m(new C.dqB(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f9(null,x.H)}},
$S:0}
C.dqB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dqO.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.n(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.L(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.E(new B.D(A.jC,B.aA(v,B.cY(A.A,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ac,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b5,new B.o(q,v,p,r,v,v,A.n),A.h5,v,38,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dqQ(u,d),v,v,v,v,v,v,!1,A.a3),v),1)},
$S:1673}
C.dqQ.prototype={
$0(){B.eZ()
var w=this.a
w.m(new C.dqP(w,this.b))},
$S:0}
C.dqP.prototype={
$0(){var w=""+this.b
this.a.d.saZ(0,w)
return w},
$S:0}
C.dqN.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.D(A.w6,B.B(B.a([v,A.b2,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1674}
C.dqM.prototype={
$1(d){return this.a.m(new C.dqL())},
$S:2}
C.dqL.prototype={
$0(){},
$S:0}
C.dqG.prototype={
$1(d){return this.a.aXH(d)&&!B.hdS(d)},
$S:16}
C.dqH.prototype={
$2(d,e){return e.y.aO(0,d.y)},
$S:77}
C.dqI.prototype={
$0(){return this.a.a.d.d},
$S:81}
C.dqJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dV(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dqF())
t.mh("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dqF.prototype={
$0(){},
$S:0}
C.dqK.prototype={
$0(){var w=this.a
return w.m(new C.dqE(w))},
$S:0}
C.dqE.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fJ_.prototype={
$2(d,e){return e.y.aO(0,d.y)},
$S:77}
C.fB9.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.A(v,this.b)){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fTG.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fB8.prototype={
$1(d){var w,v,u
if(!C.ies(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bk(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bk(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bk(J.k(w==null?"":w))}if(u!=null&&A.o.ao(new B.V(Date.now(),0,!1).bF(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fpB.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.fSe.prototype={
$0(){return $.hbl=null},
$S:12}
C.fSf.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.fQ7.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:7}
C.fQ8.prototype={
$0(){var w,v=this.a
$.hb8.W(0,v)
w=C.ur(this.b,v)
if(w!=null)B.Ru(B.a([B.a2(w,x.N,x.z)],x._),v)},
$S:0}
C.fUN.prototype={
$1(d){return new C.a07(this.a,this.b,null)},
$S:z+56}
C.ehh.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.ehk.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ehl.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.ehj(w))},
$S:2}
C.ehj.prototype={
$0(){return this.a.f=""},
$S:0}
C.ehm.prototype={
$1(d){return this.a.b0s()},
$S:2}
C.ehn.prototype={
$0(){var w=this.a
return w.m(new C.ehi(w,this.b))},
$S:0}
C.ehi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fAa.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.b3(d,1)},
$S:14}
C.fA9.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.b3(d,1)},
$S:14}
C.fSv.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.a2(d,x.N,x.z)
try{v=B.a2(v.a(d.ah()),x.N,x.z)
return v}catch(w){return B.U(x.N,x.z)}},
$S:13}
C.fSw.prototype={
$1(d){return J.cL(d)},
$S:4}
C.fMn.prototype={
$1(d){return d.a!=="send_email"},
$S:312}
C.fRX.prototype={
$1(d){var w=null,v=A.w.j(0.35),u=B.n(10),t=B.L(A.aX,A.r,1)
return B.p(A.A,B.d(d,w,w,w,w,w,w,A.hv,w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.f_,w,w,w,72)},
$S:689}
C.cj4.prototype={
$1(d){return J.k(d)},
$S:17}
C.cj5.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b7(d,new C.cj3(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.bZ(7,0,!1,x.S)},
$S:692}
C.cj3.prototype={
$1(d){var w
if(B.iS(d))w=d
else{w=B.ce(J.k(d),null)
if(w==null)w=0}return w},
$S:453}
C.cj6.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b7(d,new C.cj2(),x.S)
w=B.C(w,w.$ti.k("ak.E"))
return w}return B.bZ(8,0,!1,x.S)},
$S:692}
C.cj2.prototype={
$1(d){var w
if(B.iS(d))w=d
else{w=B.ce(J.k(d),null)
if(w==null)w=0}return w},
$S:453}
C.cj8.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:693}
C.cj9.prototype={
$1(d){return B.bp(d,!0,x.S)},
$S:693}
C.cj1.prototype={
$1(d){var w=this.a
if(A.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.cj7.prototype={
$2(d,e){return d+e},
$S:65}
C.cj0.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.r(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:65}
C.fCI.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fCC.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fCD.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fCE.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fCF.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fCG.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fCH.prototype={
$0(){return this.a.$1(D.qO)},
$S:0}
C.fmP.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ao(e,8),r=A.o.F(e,8),q=A.o.F(s+r,2),p=u.a,o=J.r(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.YN:D.bgj
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.aN],w):B.a([A.bo,A.w],w)
v=n?A.aT:A.dm
w=B.p(t,t,A.f,t,t,new B.o(t,t,B.L(v,A.r,n?3:1),t,B.a([new B.ac(0,A.G,A.w.j(0.35),A.dC,4)],x.V),new B.c_(A.A,0.5,A.x,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.aA(t,B.p(t,B.at(w,t,t,t),A.f,q,t,t,t,t,t,t,t,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fmO(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.a3)},
$S:84}
C.fmO.prototype={
$0(){var w=this,v=w.a,u=v.d_c(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.qO:D.J5
w.f.$1(v)}},
$S:0}
C.fAt.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a4(u,u,B.ip(!0,v,v,A.y,P.aSP,new C.fAs(w.a,w.b,w.c,w.d,u),9,v,A.dS,A.ah,!1),v)},
$S:155}
C.fAs.prototype={
$2(d,e){var w=this,v=null,u=B.n(12),t=B.n(12),s=w.a,r=s.at[e],q=r==="X"?A.aJ:A.aw
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.at(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fAr(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.f,A.fN,0,v,v,v,v,v,A.ai)},
$S:79}
C.fAr.prototype={
$0(){var w=this,v=w.a.d_e(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fma.prototype={
$1(d){return new B.D(A.jC,C.fPZ(d,!1),null)},
$S:302}
C.fmb.prototype={
$1(d){return C.fPZ(d,!1)},
$S:1678}
C.fmc.prototype={
$0(){var w=this,v=w.a
v.cJJ(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fmd.prototype={
$0(){var w=this
w.a.cJK(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fxv.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n_(v,A.bo,B.d(""+u,v,v,v,v,v,v,A.ce,v,v,v),A.df,new C.fxu(w.a,w.b,u,w.c,w.d),v,v,new B.ay(A.c.j(0.2),1,A.r,-1),v)},
$S:1679}
C.fxu.prototype={
$0(){var w=this,v=w.a,u=w.b.ap(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fzp.prototype={
$1(d){return D.dne[d]},
$S:73}
C.fzq.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.ap(6),s.ap(6),s.ap(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fwf.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fwg.prototype={
$0(){var w=this,v=w.a
if(w.b.ag()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fng.prototype={
$0(){var w=this,v=w.a.cPB(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fnf.prototype={
$1(d){var w,v=null,u=J.r(this.a.fr[5-d],this.b)
if(u===0)w=A.mF
else w=u===1?A.dJ:A.t2
return new B.fK(1,B.p(v,v,A.f,v,v,new B.o(w,v,B.L(A.bz,A.r,1),v,v,v,A.a6),v,v,v,A.nw,v,v,v,v),v)},
$S:1680}
C.fws.prototype={
$1(d){var w=this
if(w.a.bdh(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fwt.prototype={
$0(){var w=this
if(w.a.bdh(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fmJ.prototype={
$0(){var w=this
if(w.a.ag()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fI2.prototype={
$1(d){var w=J.r(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fI3.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:53}
C.eOl.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aLY.prototype
w.bwS=w.Z
w.bwR=w.t
w=C.aLZ.prototype
w.bwU=w.Z
w.bwT=w.t
w=C.aM_.prototype
w.bwW=w.Z
w.bwV=w.t
w=C.aMV.prototype
w.bxT=w.Z
w.bxS=w.t
w=C.aMv.prototype
w.bxs=w.t
w=C.aN4.prototype
w.by2=w.t
w=C.aM0.prototype
w.bwX=w.t
w=C.aNc.prototype
w.byb=w.t
w=C.aM5.prototype
w.bx1=w.t
w=C.aMl.prototype
w.bxi=w.t
w=C.aNO.prototype
w.byN=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aBE.prototype,"gbTm","bTn",19)
v(q,"gaU_","aU0",1)
v(C.aBD.prototype,"gcA9","a2W",1)
v(q=C.aBF.prototype,"gbYS","bYT",1)
v(q,"gbIo","bIp",1)
v(q=C.ayG.prototype,"gct6","ct7",1)
v(q,"gchs","QL",0)
v(q,"gcEb","cEc",1)
v(q,"gcwd","nb",0)
w(q,"gclP","clQ",25)
w(q,"gcCw","Sv",33)
v(q=C.aDK.prototype,"gbRk","Yg",0)
v(q,"gc72","ZM",0)
v(q,"gc7_","ZL",0)
v(q,"gc70","ae4",0)
v(q,"gc71","PA",0)
v(C.aAY.prototype,"gc73","c74",1)
u(C,"ilM","hRm",58)
t(C,"he_",0,null,["$1","$0"],["hzv",function(){return C.hzv(null)}],3,0)
t(C,"bFo",0,null,["$1","$0"],["hzu",function(){return C.hzu(null)}],3,0)
v(C.NB.prototype,"gEJ","ceE",1)
v(C.aEu.prototype,"gctq","B_",0)
v(q=C.aEK.prototype,"gchM","QN",0)
v(q,"gcmz","a17",0)
v(q,"gcaS","caT",1)
v(q=C.aEW.prototype,"gcaX","af3",0)
v(q,"gbBY","a97",0)
v(q,"gctG","a25",0)
s(q,"gcf8","cf9",35)
v(C.aGT.prototype,"gbCp","a99",1)
v(q=C.aGS.prototype,"gcaW","af2",0)
v(q,"gcgJ","agb",0)
v(q=C.aEY.prototype,"gc1B","acQ",0)
v(q,"gc1D","YW",0)
v(q,"gc1C","acR",0)
v(q=C.aEX.prototype,"gbEL","bEM",1)
v(q,"gbEN","bEO",1)
v(C.aEZ.prototype,"gbKC","bKD",1)
v(C.aBZ.prototype,"gcaZ","cb_",1)
v(q=C.aFk.prototype,"gb0l","cbg",1)
r(q,"gb1o",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["afP","az5","b1q","b1p"],52,0,0)
r(q,"gcem",0,4,null,["$4"],["cen"],53,0,0)
v(q,"gcgs","a0h",0)
v(q,"gchj","agi",0)
v(q,"gche","agg",0)
v(q,"gc4I","adC",0)
w(C.aCL.prototype,"gc3o","c3p",54)
w(q=C.aCN.prototype,"gcBp","cBq",55)
v(q,"gcA_","cA0",1)
v(q,"gcHW","cHX",1)
v(C.aF8.prototype,"gcbC","b0s",1)
v(C.aFV.prototype,"gb0U","ayT",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.iI,[C.czi,C.czf,C.czg,C.czh,C.cze,C.fa6,C.fa4,C.fa8,C.fa5,C.ftw,C.dix,C.diI,C.diQ,C.diR,C.diT,C.diL,C.diJ,C.diK,C.diM,C.diN,C.diD,C.diE,C.diC,C.diG,C.diH,C.diA,C.diz,C.diV,C.diY,C.dWC,C.dWB,C.dWD,C.dWA,C.dWz,C.dir,C.diu,C.div,C.dit,C.dis,C.dkj,C.dkk,C.dkl,C.djz,C.djA,C.dk3,C.djP,C.djQ,C.djR,C.djS,C.djT,C.dj1,C.djy,C.dk4,C.dkd,C.dk1,C.dk0,C.djw,C.djx,C.dk9,C.dka,C.dj3,C.dj4,C.djI,C.djJ,C.djK,C.djH,C.djU,C.djV,C.djW,C.djX,C.djY,C.djZ,C.dk7,C.djL,C.djM,C.djN,C.djO,C.dkb,C.dkc,C.dj5,C.dj6,C.dj7,C.dj8,C.dk5,C.dk6,C.djG,C.dk_,C.djE,C.dke,C.dkf,C.dkg,C.djB,C.djk,C.djj,C.dji,C.djo,C.djh,C.djf,C.dja,C.djd,C.dj9,C.djt,C.dju,C.djb,C.dnT,C.cKk,C.cKa,C.cKb,C.cKu,C.cKr,C.cKs,C.cKt,C.cKm,C.cKl,C.cKc,C.cKn,C.cKN,C.cKJ,C.cKI,C.cKi,C.cKj,C.cKf,C.cKq,C.cKy,C.cKz,C.cKA,C.cKB,C.cKC,C.cKD,C.cKE,C.cKZ,C.cKS,C.cKP,C.cKU,C.cKR,C.cKO,C.cKd,C.cKL,C.dEm,C.dEn,C.dEd,C.dEb,C.dEl,C.dEa,C.dE9,C.dEc,C.dEh,C.dEi,C.dEf,C.dEg,C.dEo,C.dEp,C.dEq,C.dEr,C.f3z,C.f3A,C.ddp,C.fIU,C.dKP,C.dKH,C.dKJ,C.dKN,C.dKI,C.dKK,C.dKL,C.cbH,C.fPX,C.fPW,C.dDZ,C.dDY,C.dE_,C.dDX,C.e3a,C.e3b,C.e3i,C.fYA,C.fYB,C.c44,C.dWI,C.dWJ,C.dWK,C.dWL,C.dWM,C.dWN,C.dWH,C.dWO,C.dWG,C.dWR,C.dWQ,C.dWP,C.e3q,C.e3r,C.e3o,C.e3n,C.e3p,C.e3l,C.e7p,C.e7q,C.e78,C.e7a,C.e7m,C.e7n,C.e7h,C.e7f,C.e7l,C.e7i,C.e7c,C.e7b,C.e7r,C.cTy,C.cTw,C.cTx,C.cTv,C.cTB,C.cTC,C.eZt,C.eZy,C.eZv,C.eZx,C.eZw,C.eZp,C.eZo,C.eZr,C.eZq,C.e7M,C.e7R,C.e7N,C.e7O,C.e7Q,C.e7W,C.e7X,C.e7Y,C.e7Z,C.e8_,C.e80,C.e81,C.e82,C.e7V,C.e83,C.e7U,C.e7T,C.e7S,C.e7F,C.e7G,C.e7x,C.e7y,C.e7z,C.e7B,C.cN5,C.doN,C.doP,C.doO,C.e8j,C.e8d,C.e8e,C.e8g,C.e8h,C.e8i,C.e8m,C.e8l,C.e8s,C.e8r,C.e89,C.e88,C.e8t,C.e8k,C.e87,C.fZl,C.dmc,C.dma,C.emz,C.emY,C.emZ,C.en_,C.en0,C.en2,C.en3,C.emT,C.emA,C.emX,C.emE,C.emF,C.emN,C.emK,C.emL,C.emM,C.emO,C.emP,C.emQ,C.emS,C.emR,C.emG,C.emH,C.enc,C.en5,C.end,C.en4,C.ene,C.ena,C.enb,C.en6,C.emD,C.emC,C.emJ,C.emI,C.dqw,C.dqv,C.dqq,C.dqR,C.dqS,C.dqD,C.dqC,C.dqB,C.dqQ,C.dqP,C.dqL,C.dqI,C.dqJ,C.dqF,C.dqK,C.dqE,C.fSe,C.fQ8,C.ehh,C.ehk,C.ehj,C.ehn,C.ehi,C.fCC,C.fCD,C.fCE,C.fCF,C.fCG,C.fCH,C.fmO,C.fAr,C.fmc,C.fmd,C.fxu,C.fzq,C.fwg,C.fng,C.fwt,C.fmJ,C.eOl])
u(B.hz,[C.czj,C.fa7,C.fMH,C.fMz,C.ftt,C.fts,C.ftv,C.dj_,C.dj0,C.diP,C.diO,C.diS,C.diB,C.diF,C.diU,C.dWF,C.diw,C.dkm,C.dkn,C.dko,C.dkp,C.dkq,C.dk2,C.dk8,C.dj2,C.dki,C.dkh,C.djl,C.djm,C.djn,C.djp,C.djr,C.dnU,C.cL_,C.cKp,C.cKo,C.cKH,C.cKK,C.cKG,C.cKg,C.cKx,C.cKv,C.cKM,C.cKw,C.cKV,C.cKT,C.cKY,C.c2N,C.c2M,C.c2P,C.c2O,C.dEk,C.dEj,C.dEe,C.dEs,C.dEt,C.fy2,C.fzf,C.ddq,C.ddo,C.c3y,C.fIT,C.dKQ,C.dKO,C.cbI,C.fA2,C.fPV,C.ce2,C.ce1,C.ceu,C.e38,C.e39,C.fLf,C.fL2,C.fL1,C.fwj,C.ceI,C.ceJ,C.ceK,C.ceH,C.ceG,C.ft9,C.fYw,C.fYx,C.fYy,C.fYz,C.fYv,C.e3f,C.e3g,C.e3e,C.fYC,C.dkr,C.cgh,C.fs7,C.dWS,C.e3m,C.cf9,C.cf6,C.cf8,C.cfb,C.c7b,C.c79,C.c7e,C.cfi,C.cfh,C.cfg,C.cff,C.cfk,C.cfm,C.e7v,C.e79,C.e77,C.e7o,C.e7g,C.e7k,C.e7j,C.e7e,C.e7t,C.e7s,C.cTz,C.cTA,C.eZu,C.eZn,C.eZs,C.cfc,C.fN_,C.e85,C.e7P,C.e7I,C.e7J,C.e7K,C.e7L,C.e84,C.cfe,C.cN6,C.cN7,C.frR,C.e8a,C.e8c,C.e8f,C.e8n,C.e8o,C.e8p,C.e86,C.fZm,C.dm6,C.dm9,C.chb,C.cho,C.enf,C.eng,C.enh,C.en1,C.emU,C.emV,C.emW,C.en7,C.en9,C.dqx,C.dqy,C.dqt,C.dqo,C.dqT,C.dqO,C.dqN,C.dqM,C.dqG,C.fB9,C.fTG,C.fB8,C.fpB,C.fSf,C.fQ7,C.fUN,C.ehl,C.ehm,C.fAa,C.fA9,C.fSv,C.fSw,C.fMn,C.fRX,C.cj4,C.cj5,C.cj3,C.cj6,C.cj2,C.cj8,C.cj9,C.cj1,C.fCI,C.fma,C.fmb,C.fxv,C.fzp,C.fwf,C.fnf,C.fws,C.fI2,C.fI3])
t(C.btu,B.j1)
u(B.af,[C.FK,C.am2,C.aEt,C.am1,C.am3,C.amT,C.aj0,C.aoq,C.a_O,C.a_P,C.ZV,C.aoW,C.aop,C.O7,C.aBG,C.aq1,C.aqK,C.W0,C.Q5,C.a0A,C.a0z,C.W1,C.ar4,C.aCy,C.ar7,C.a_j,C.arE,C.aCK,C.aCM,C.a07,C.at_])
u(B.ah,[C.aJr,C.aLZ,C.aMV,C.aLY,C.aM_,C.bit,C.ayG,C.aDK,C.bkW,C.bkX,C.aAY,C.bl3,C.aMv,C.aN4,C.aM0,C.aEu,C.aEK,C.aEW,C.bcw,C.aGT,C.aGS,C.aEY,C.aEX,C.biI,C.aNc,C.aM5,C.bzr,C.aMl,C.aCN,C.aF8,C.aNO])
u(B.jx,[C.fa9,C.ftu,C.diy,C.diZ,C.diX,C.diW,C.dWE,C.djF,C.djD,C.djC,C.djg,C.djq,C.dje,C.djs,C.djc,C.djv,C.cKF,C.cKh,C.cKQ,C.cKX,C.cKW,C.cKe,C.ddn,C.dKM,C.fA3,C.fA4,C.e3c,C.fMC,C.fYu,C.e3h,C.e3k,C.e3j,C.dks,C.cgi,C.cfa,C.cf7,C.c7c,C.c7a,C.cfl,C.e7w,C.e7d,C.e7u,C.eZA,C.eZz,C.e7H,C.e7A,C.e7C,C.e7E,C.e7D,C.e8b,C.e8q,C.dm7,C.dmb,C.dm8,C.en8,C.emB,C.dqz,C.dqA,C.dqr,C.dqs,C.dqu,C.dqp,C.dqH,C.fJ_,C.cj7,C.cj0,C.fmP,C.fAt,C.fAs])
t(C.awS,C.FK)
u(B.aD,[C.r6,C.aem,C.NB,C.Ja,C.rJ,C.rK,C.lT,C.it,C.ic,C.baF,C.dal,C.doM,C.rQ,C.W2,C.Om,C.q8,C.b0R,C.pp,C.as4])
t(C.aBE,C.aLZ)
t(C.blo,C.aMV)
t(C.aBD,C.aLY)
t(C.aBF,C.aM_)
u(B.lB,[C.WH,C.aCz,C.arS,C.Jf,C.F5])
u(B.ax,[C.a1b,C.bu_,C.af6,C.QI,C.a7h,C.O_,C.aqE,C.adZ,C.adY,C.b1G,C.aCx,C.acu,C.b1c,C.acn,C.aCL])
t(C.bkU,C.aMv)
t(C.blC,C.aN4)
t(C.bh9,C.aM0)
t(C.aEZ,C.aNc)
t(C.aBZ,C.aM5)
t(C.aFk,C.bzr)
t(C.bjr,C.aMl)
u(B.mg,[C.bd1,C.bd0,C.bd_,C.bcq,C.bxp,C.bsi])
t(C.aFV,C.aNO)
w(C.aLY,C.NB)
w(C.aLZ,C.NB)
w(C.aM_,C.NB)
w(C.aMV,C.NB)
w(C.aMv,B.eQ)
w(C.aN4,B.cg)
w(C.aM0,B.cg)
w(C.aNc,B.cg)
w(C.aM5,B.eQ)
w(C.aMl,B.eQ)
v(C.bzr,B.eE)
w(C.aNO,B.cg)})()
B.j2(b.typeUniverse,JSON.parse('{"btu":{"j1":[]},"FK":{"af":[],"v":[]},"aJr":{"ah":["FK<1,2>"]},"awS":{"FK":["1","hw<1>"],"af":[],"v":[],"FK.T":"1","FK.S":"hw<1>"},"am2":{"af":[],"v":[]},"aEt":{"af":[],"v":[]},"am1":{"af":[],"v":[]},"am3":{"af":[],"v":[]},"amT":{"af":[],"v":[]},"aj0":{"af":[],"v":[]},"aBE":{"ah":["am2"]},"blo":{"ah":["aEt"]},"aBD":{"ah":["am1"]},"aBF":{"ah":["am3"]},"bit":{"ah":["amT"]},"ayG":{"ah":["aj0"]},"aoq":{"af":[],"v":[]},"a_O":{"af":[],"v":[]},"a_P":{"af":[],"v":[]},"af6":{"ax":[],"v":[]},"ZV":{"af":[],"v":[]},"aDK":{"ah":["aoq"]},"a1b":{"ax":[],"v":[]},"bu_":{"ax":[],"v":[]},"bkW":{"ah":["a_O"]},"bkX":{"ah":["a_P"]},"QI":{"ax":[],"v":[]},"aAY":{"ah":["ZV"]},"aoW":{"af":[],"v":[]},"bl3":{"ah":["aoW"]},"a7h":{"ax":[],"v":[]},"aop":{"af":[],"v":[]},"bkU":{"ah":["aop"]},"O_":{"ax":[],"v":[]},"aqE":{"ax":[],"v":[]},"O7":{"af":[],"v":[]},"blC":{"ah":["O7"]},"adZ":{"ax":[],"v":[]},"adY":{"ax":[],"v":[]},"aBG":{"af":[],"v":[]},"bh9":{"ah":["aBG"]},"b1G":{"ax":[],"v":[]},"aq1":{"af":[],"v":[]},"aEu":{"ah":["aq1"]},"aqK":{"af":[],"v":[]},"aEK":{"ah":["aqK"]},"W0":{"af":[],"v":[]},"Q5":{"af":[],"v":[]},"a0A":{"af":[],"v":[]},"a0z":{"af":[],"v":[]},"aEW":{"ah":["W0"]},"bcw":{"ah":["Q5"]},"aGT":{"ah":["a0A"]},"aGS":{"ah":["a0z"]},"W1":{"af":[],"v":[]},"aEY":{"ah":["W1"]},"ar4":{"af":[],"v":[]},"acu":{"ax":[],"v":[]},"acn":{"ax":[],"v":[]},"aCy":{"af":[],"v":[]},"aEX":{"ah":["ar4"]},"aCx":{"ax":[],"v":[]},"b1c":{"ax":[],"v":[]},"biI":{"ah":["aCy"]},"ar7":{"af":[],"v":[]},"aEZ":{"ah":["ar7"]},"a_j":{"af":[],"v":[]},"aBZ":{"ah":["a_j"]},"arE":{"af":[],"v":[]},"aCK":{"af":[],"v":[]},"aCM":{"af":[],"v":[]},"aFk":{"ah":["arE"],"eE":[]},"aCL":{"ax":[],"v":[]},"bjr":{"ah":["aCK"]},"bd1":{"aC":[]},"bd0":{"aC":[]},"bd_":{"aC":[]},"aCN":{"ah":["aCM"]},"bcq":{"aC":[]},"bxp":{"aC":[]},"a07":{"af":[],"v":[]},"aF8":{"ah":["a07"]},"bsi":{"aC":[]},"at_":{"af":[],"v":[]},"aFV":{"ah":["at_"]}}'))
B.D2(b.typeUniverse,JSON.parse('{"NB":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.as
return{dw:w("lI<t?>"),gS:w("oo"),o:w("d7"),g5:w("xr"),M:w("dx<m>"),k:w("V"),gv:w("l4<ai<jp>>"),gh:w("l4<m>"),gH:w("l4<G>"),r:w("aB<~>"),dk:w("a0"),fw:w("O<oo>"),E:w("O<d7>"),V:w("O<ac>"),O:w("O<t>"),A:w("O<a0>"),R:w("O<nu>"),B:w("O<ai<G>>"),m:w("O<a8<m,m>>"),_:w("O<a8<m,@>>"),b:w("O<rJ>"),x:w("O<rK>"),gi:w("O<jp>"),a:w("O<lT>"),Y:w("O<ic>"),v:w("O<it>"),dA:w("O<Ja>"),F:w("O<rQ>"),Z:w("O<kA>"),g:w("O<fW>"),gK:w("O<+at,details,id(V,m,m)>"),C:w("O<cW>"),s:w("O<m>"),G:w("O<j1>"),eO:w("O<es>"),d9:w("O<f_>"),p:w("O<v>"),n:w("O<I>"),t:w("O<G>"),U:w("O<aC?>"),d4:w("O<m?>"),ck:w("ai<rJ>"),e:w("ai<rK>"),ac:w("ai<jp>"),dZ:w("ai<lT>"),I:w("ai<ic>"),j:w("ai<@>"),L:w("ai<G>"),eq:w("a8<m,m>"),P:w("a8<m,@>"),f:w("a8<@,@>"),cl:w("cP<m,D>"),aS:w("N<a0,tD>"),dc:w("N<Jf,by>"),dv:w("N<m,m>"),bL:w("N<I,by>"),a3:w("N<G,by>"),gN:w("N<G,pY>"),w:w("iC"),b1:w("rJ"),Q:w("rK"),bP:w("lT"),i:w("ic"),u:w("it"),gp:w("W2"),J:w("Om"),D:w("q8"),an:w("kA"),c:w("cv"),K:w("aD"),d:w("jD<m>"),di:w("+outcome,snapshot(WH,a6F?)"),ee:w("+after,before(I,I)"),et:w("+categories,error,message,replaceId(ai<ic>,m?,m?,m?)"),cz:w("Fw"),bJ:w("dy<m>"),N:w("m"),e7:w("bq<I>"),W:w("bQ<m>"),am:w("jZ<G>"),cc:w("Y<m>"),aM:w("ef<d7>"),bG:w("ef<I>"),l:w("v"),gm:w("r6"),ec:w("aem"),q:w("mu"),y:w("P"),gR:w("I"),z:w("@"),S:w("G"),eG:w("d7?"),cJ:w("V?"),gw:w("ai<a8<m,@>>?"),bM:w("ai<@>?"),h:w("a8<m,@>?"),X:w("aD?"),gE:w("+code,qrPayload(m,m)?"),bY:w("+isLive,ownerEmail,snapshotJson(P,m,m)?"),T:w("m?"),cD:w("I?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2N=new B.bh(A.bH,A.ii,A.bH,A.ii)
D.eQ=new B.t(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.q)
D.b3j=new B.ay(D.eQ,1,A.r,-1)
D.b3l=new B.ay(A.ac,2,A.r,-1)
D.b3o=new B.ay(A.aW,2,A.r,-1)
D.b3q=new B.ay(A.cq,0.8,A.r,-1)
D.b3G=new B.ay(A.aT,2,A.r,-1)
D.b3N=new B.ay(A.f8,1.6,A.r,-1)
D.b4C=new B.aZ(0,330,0,1/0)
D.b4I=new B.aZ(0,176,0,1/0)
D.b4J=new B.aZ(0,1/0,0,260)
D.b50=new B.aZ(90,1/0,0,1/0)
D.b7R=new B.ac(0,A.G,A.dm,A.I,4)
D.d3w=w([D.b7R],x.V)
D.b5d=new B.o(A.c,null,null,null,D.d3w,null,A.a6)
D.cY6=w([D.eQ,A.b1],x.O)
D.c7J=new B.a9(A.a5,A.a8,A.x,D.cY6,null,null)
D.b5r=new B.o(null,null,null,null,null,D.c7J,A.a6)
D.b5w=new B.o(A.ba,null,null,null,null,null,A.a6)
D.bj1=new B.t(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.q)
D.djX=w([T.afM,D.bj1],x.O)
D.c6O=new B.a9(A.b0,A.b6,A.x,D.djX,null,null)
D.b5N=new B.o(null,null,null,A.mw,null,D.c6O,A.n)
D.bqS=new B.t(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.q)
D.dwk=w([D.bqS,M.aig],x.O)
D.c6_=new B.a9(A.b0,A.b6,A.x,D.dwk,null,null)
D.b6d=new B.o(null,null,null,A.tE,null,D.c6_,A.n)
D.dfH=w([A.aD,A.bE],x.O)
D.c6w=new B.a9(A.a5,A.a8,A.x,D.dfH,null,null)
D.b6j=new B.o(null,null,null,null,null,D.c6w,A.a6)
D.foU=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJj=new B.y("\ud83c\udf89",null,D.foU,null,null,null,null,null,null,null,null,null)
D.bbX=new B.cf(A.A,null,null,D.fJj,null)
D.bdm=new B.t(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.q)
D.aeU=new B.t(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.q)
D.bgj=new B.t(1,0.8431372549019608,0.8,0.7843137254901961,A.q)
D.bgn=new B.t(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.q)
D.p2=new B.t(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.q)
D.tP=new B.t(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.q)
D.agb=new B.t(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.q)
D.biF=new B.t(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.q)
D.Ym=new B.t(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.q)
D.y0=new B.t(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.q)
D.bkh=new B.t(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.q)
D.YN=new B.t(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.q)
D.ahU=new B.t(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.q)
D.boJ=new B.t(1,0.9529411764705882,0.9411764705882353,1,A.q)
D.boS=new B.t(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.q)
D.aij=new B.t(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.q)
D.aiF=new B.t(1,0,0.8392156862745098,0.30980392156862746,A.q)
D.bqm=new B.t(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.q)
D.bqt=new B.t(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.q)
D.brz=new B.t(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.q)
D.Zq=new B.t(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.q)
D.bsF=new B.t(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.q)
D.btf=new B.t(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.q)
D.ZC=new B.t(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.q)
D.bu4=new B.t(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.q)
D.ajX=new B.a4z(2,"active")
D.byo=new B.bc(42e5)
D.byr=new B.bc(53e4)
D.byu=new B.bc(58e4)
D.byy=new B.bc(82e4)
D.bzl=new B.Q(0,30,0,30)
D.bzt=new B.Q(0,4,0,8)
D.bzx=new B.Q(0,8,12,8)
D.bAa=new B.Q(12,0,12,88)
D.bAi=new B.Q(12,11,12,10)
D.bAG=new B.Q(13,10,12,10)
D.bAQ=new B.Q(14,10,14,2)
D.bB1=new B.Q(14,14,10,14)
D.bBz=new B.Q(16,12,16,96)
D.bBE=new B.Q(16,14,16,8)
D.bBI=new B.Q(16,16,16,96)
D.bBJ=new B.Q(16,18,16,16)
D.bBN=new B.Q(16,4,16,10)
D.bCL=new B.Q(18,6,18,40)
D.bCM=new B.Q(18,8,18,130)
D.bCZ=new B.Q(20,10,20,20)
D.bDc=new B.Q(20,18,20,18)
D.bDg=new B.Q(20,20,20,22)
D.bDD=new B.Q(22,22,22,16)
D.bEi=new B.Q(2,0,2,10)
D.bF1=new B.Q(4,8,12,4)
D.bFf=new B.Q(6,1,6,1)
D.bFh=new B.Q(6,4,0,0)
D.bFn=new B.Q(6,6,12,4)
D.bFJ=new B.Q(8,4,12,8)
D.fMS=new B.y("Activity",null,A.fy,null,null,null,null,null,null,null,null,null)
D.bHD=new B.by(1,A.bb,D.fMS,null)
D.fVt=new B.y("Game Receipts",null,A3.tp,null,null,null,null,null,null,null,null,null)
D.fEc=new B.y("Your last 59 games \xb7 kept for 7 days",null,O.aar,null,null,null,null,null,null,null,null,null)
D.cUu=w([D.fVt,D.fEc],x.p)
D.bvc=new B.fk(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.cUu,null)
D.bHG=new B.by(1,A.bb,D.bvc,null)
D.bMn=new B.a0(58607,"MaterialIcons",!1)
D.a1G=new B.a0(62178,"MaterialIcons",!1)
D.bNd=new B.a0(62410,"MaterialIcons",!1)
D.bOm=new B.a0(63258,"MaterialIcons",!1)
D.bOr=new B.a0(63304,"MaterialIcons",!1)
D.bOs=new B.a0(63306,"MaterialIcons",!1)
D.bOy=new B.a0(63330,"MaterialIcons",!1)
D.aqi=new B.a0(984777,"MaterialIcons",!1)
D.bR1=new B.ae(A.H9,13,A.ac,null,null,null)
D.bR9=new B.ae(A.jZ,13,A.qd,null,null,null)
D.aqt=new B.ae(A.lL,null,A.c,null,null,null)
D.bSJ=new B.ae(A.CC,34,A.ay,null,null,null)
D.bTg=new B.ae(A.Hf,19,A.c,null,null,null)
D.bTq=new B.ae(A.aoA,24,A.aT,null,null,null)
D.bTS=new B.ae(A.Ch,28,A.bl,null,null,null)
D.bUm=new B.ae(A.apZ,42,A.c,null,null,null)
D.bUw=new B.ae(A.a2C,30,A.c,null,null,null)
D.bVa=new B.ae(A.fQ,null,A.c,null,null,null)
D.bVv=new B.ae(A.jZ,16,A.c,null,null,null)
D.bW9=new B.ae(A.rP,13,A.c,null,null,null)
D.bWi=new B.ae(A.lL,18,A.c,null,null,null)
D.bWR=new B.ae(A.wm,null,A.dJ,null,null,null)
D.bXw=new B.ae(A.or,28,A.c,null,null,null)
D.bXM=new B.ae(A.ou,22,null,null,null,null)
D.bY8=new B.ae(A.rN,null,null,null,null,null)
D.bYk=new B.ae(A.hp,28,A.c,null,null,null)
D.bYn=new B.ae(A.cx,null,A.aR,null,null,null)
D.bYw=new B.ae(A.a1n,14,A.c,null,null,null)
D.bZ5=new B.ae(A.P4,36,A.aM,null,null,null)
D.bZc=new B.ae(A.os,16,A.c,null,null,null)
D.bZr=new B.ae(A.e6,null,null,null,null,null)
D.bjr=new B.t(1,0.23137254901960785,0.16470588235294117,0,A.q)
D.c__=new B.ae(A.e5,9,D.bjr,null,null,null)
D.bPq=new B.a0(983146,"MaterialIcons",!1)
D.c_f=new B.ae(D.bPq,null,A.aT,null,null,null)
D.c_M=new B.ae(A.uv,28,D.eQ,null,null,null)
D.c_R=new B.ae(A.uw,null,A.f8,null,null,null)
D.c_W=new B.ae(A.i8,20,D.eQ,null,null,null)
D.bPK=new B.a0(983377,"MaterialIcons",!1)
D.c05=new B.ae(D.bPK,64,A.c,null,null,null)
D.c0C=new B.ae(A.hq,24,A.c,null,null,null)
D.c1z=new B.e8(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1K=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1Z=new B.e8(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2_=new B.e8(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bhc=new B.t(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.q)
D.bkG=new B.t(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.q)
D.bki=new B.t(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.q)
D.dkf=w([D.bhc,D.bkG,D.bki],x.O)
D.c3P=new B.a9(A.az,A.aE,A.x,D.dkf,null,null)
D.dpM=w([A.bf,A.b1],x.O)
D.c49=new B.a9(A.az,A.aE,A.x,D.dpM,null,null)
D.biV=new B.t(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.q)
D.bpt=new B.t(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.q)
D.d45=w([D.biV,D.bpt],x.O)
D.c4g=new B.a9(A.az,A.aE,A.x,D.d45,null,null)
D.dlV=w([A.bo,A.O,A.dY],x.O)
D.c4m=new B.a9(A.az,A.aE,A.x,D.dlV,null,null)
D.c4p=new B.a9(A.a5,A.a8,A.x,F.axI,null,null)
D.d3m=w([A.f8,A.cf],x.O)
D.asd=new B.a9(A.a5,A.a8,A.x,D.d3m,null,null)
D.d3N=w([A.f8,A.bE],x.O)
D.ase=new B.a9(A.a5,A.a8,A.x,D.d3N,null,null)
D.aBT=w([D.p2,A.aA,A.c3],x.O)
D.c4H=new B.a9(A.az,A.aE,A.x,D.aBT,null,null)
D.bmv=new B.t(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,A.q)
D.d1b=w([D.bmv,E.af9,A.O],x.O)
D.c4M=new B.a9(A.az,A.aE,A.x,D.d1b,null,null)
D.b0Z=new B.da(-0.8,-1)
D.b10=new B.da(1.2,1)
D.d0i=w([A.c,A.eA,A.hl,A.c,A.fl,A.aJ,A.nd],x.O)
D.dlg=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.c4O=new B.a9(D.b0Z,D.b10,A.x,D.d0i,D.dlg,null)
D.bpl=new B.t(1,0,0.7607843137254902,0.26666666666666666,A.q)
D.bmL=new B.t(1,0,0.6392156862745098,0.22745098039215686,A.q)
D.dke=w([D.bpl,D.bmL],x.O)
D.c5g=new B.a9(A.a5,A.a8,A.x,D.dke,null,null)
D.c5m=new B.a9(A.az,A.aE,A.x,A.RH,null,null)
D.deF=w([E.Zu,A.y2],x.O)
D.c5o=new B.a9(A.a5,A.a8,A.x,D.deF,null,null)
D.dj0=w([A.h4,A.fM],x.O)
D.asj=new B.a9(A.a5,A.a8,A.x,D.dj0,null,null)
D.dpi=w([A.ba,A.bP],x.O)
D.ask=new B.a9(A.a5,A.a8,A.x,D.dpi,null,null)
D.cLK=w([A.d7,A.fe],x.O)
D.c61=new B.a9(A.az,A.aE,A.x,D.cLK,null,null)
D.d_j=w([A.c,A.b8],x.O)
D.c6c=new B.a9(A.a5,A.a8,A.x,D.d_j,null,null)
D.ahj=new B.t(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.q)
D.bg1=new B.t(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.q)
D.db9=w([D.ahj,A.jx,A.rl,A.aA,D.bg1],x.O)
D.c8I=w([0,0.28,0.55,0.82,1],x.n)
D.c6d=new B.a9(A.az,A.aE,A.x,D.db9,D.c8I,null)
D.c6m=new B.a9(A.a5,A.a8,A.x,A.Sn,null,null)
D.c6n=new B.a9(A.a5,A.a8,A.x,F.aAd,null,null)
D.c6r=new B.a9(A.a5,A.a8,A.x,D.aBT,null,null)
D.d5h=w([A.bE,A.f8],x.O)
D.c6C=new B.a9(A.a5,A.a8,A.x,D.d5h,null,null)
D.dtz=w([A.aD,A.bE,A.b8],x.O)
D.c6E=new B.a9(A.a5,A.a8,A.x,D.dtz,null,null)
D.deQ=w([A.ay,A.bM,A.fs],x.O)
D.c6I=new B.a9(A.a5,A.a8,A.x,D.deQ,null,null)
D.dti=w([A.bo,A.aK,A.bL,A.aN,A.aP,A.cq,A.al],x.O)
D.d9g=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.c6N=new B.a9(A.az,A.aE,A.x,D.dti,D.d9g,null)
D.c6X=new B.a9(A.az,A.aE,A.x,A.a47,null,null)
D.dfp=w([D.Ym,A.dZ],x.O)
D.c75=new B.a9(A.a5,A.a8,A.x,D.dfp,null,null)
D.dno=w([D.aij,D.agb,A.O],x.O)
D.c7e=new B.a9(A.az,A.aE,A.x,D.dno,null,null)
D.bs0=new B.t(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.q)
D.d_R=w([A.f9,A.h4,D.bs0],x.O)
D.c7L=new B.a9(A.az,A.aE,A.x,D.d_R,null,null)
D.d5Q=w([D.p2,A.aA],x.O)
D.c7M=new B.a9(A.az,A.aE,A.x,D.d5Q,null,null)
D.c8a=w([G.CH,A.or,A.jZ,A.hT,A.jH,A.lg,A.le,A.rU,A.oq,A.f0,A.lc,A.z_,A.Hl],x.A)
D.cbC=w([10,50,100,200],x.t)
D.clo=w([1,3,5,7],x.t)
D.cqn=w([25,50,100,250],x.t)
D.bPl=new B.a0(983104,"MaterialIcons",!1)
D.cz2=w([A.or,A.me,A.ou,A.lI,A.ho,A.wt,D.bPl,A.a2y],x.A)
D.cEq=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cQK=w([0,0.22,0.5,0.78,1],x.n)
D.cUD=w([8,13,19],x.n)
D.a4s=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fLU=new B.y("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.euS=new B.jD("questions",48,D.fLU,null,x.d)
D.fBn=new B.y("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.euX=new B.jD("edit",48,D.fBn,null,x.d)
D.fU0=new B.y("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.ev2=new B.jD("delete",48,D.fU0,null,x.d)
D.cUN=w([D.euS,D.euX,D.ev2],B.as("O<pu<m>>"))
D.d3Z=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.d4d=w([A.bS,A.eP],x.O)
D.a7h=new C.lT("text","",null,null)
D.d5t=w([D.a7h],x.a)
D.d6X=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ePO=new B.aeI(A.lJ,"Home")
D.eGo=new B.aeI(A.qE,"Growth")
D.eL9=new B.aeI(A.jZ,"Wallet")
D.d9w=w([D.ePO,D.eGo,D.eL9],B.as("O<+icon,label(a0,m)>"))
D.d9X=w([4,0,2,6,8,1,3,5,7],x.t)
D.da4=w([A.c,A.bN,A.cq],x.O)
D.dTj=new C.rQ("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dTm=new C.rQ("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dTk=new C.rQ("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dTe=new C.rQ("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dTf=new C.rQ("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dTn=new C.rQ("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a4Z=w([D.dTj,D.dTm,D.dTk,D.dTe,D.dTf,D.dTn],x.F)
D.a53=w([A.aw,A.bf,A.d3,A.ay],x.O)
D.bjF=new B.t(1,1,0.8980392156862745,0.4,A.q)
D.dfv=w([A.XX,D.bjF,A.rl,A.ip,A.jx],x.O)
D.a5a=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.RQ=w(["checkers_deluxe","tic_tac_go"],x.s)
D.czh=w([3,4,5],x.t)
D.cMl=w([6,7,8],x.t)
D.c8f=w([0,3,6],x.t)
D.clt=w([1,4,7],x.t)
D.csV=w([2,5,8],x.t)
D.c8k=w([0,4,8],x.t)
D.csS=w([2,4,6],x.t)
D.di0=w([X.asK,D.czh,D.cMl,D.c8f,D.clt,D.csV,D.c8k,D.csS],x.B)
D.aK2=new C.Jf(0,"abab")
D.dTc=new C.Jf(1,"aaaBbb")
D.aK3=new C.Jf(2,"aabb")
D.dj4=w([D.aK2,D.dTc,D.aK3],B.as("O<Jf>"))
D.djl=w([],x.a)
D.aB5=w([],x.v)
D.dne=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Sb=w([1,2,3,-1,-2],x.t)
D.dw5=w([A.iY,A.aD],x.O)
D.hp3=new C.r6("dice","Dice Roll","Roll for cash & prizes!",A.om,D.dw5)
D.hp0=new C.r6("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.uD,A.azK)
D.dqa=w([A.cT,A.bl],x.O)
D.hoZ=new C.r6("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.a2j,D.dqa)
D.dvw=w([A.dH,A.ng],x.O)
D.hp4=new C.r6("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.a2y,D.dvw)
D.cl8=w([A.kh,A.qb],x.O)
D.hp1=new C.r6("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a26,D.cl8)
D.dnd=w([M.lC,D.YN],x.O)
D.hp_=new C.r6("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ho,D.dnd)
D.hp2=new C.r6("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cx,Ao.nB)
D.dph=w([D.hp3,D.hp0,D.hoZ,D.hp4,D.hp1,D.hp_,D.hp2],B.as("O<r6>"))
D.dqK=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bot=new B.t(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.q)
D.bok=new B.t(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.q)
D.ajc=new B.t(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.q)
D.drx=w([D.bot,D.bok,D.ajc],x.O)
D.bqN=new B.t(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.q)
D.drz=w([A.af8,D.bqN,D.ajc],x.O)
D.dse=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aCf=w([D.p2,A.c,D.eQ,A.c_,A.b_,A.aA],x.O)
D.dTh=new C.rQ("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dTg=new C.rQ("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dTd=new C.rQ("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dTl=new C.rQ("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dTo=new C.rQ("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dTi=new C.rQ("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a5S=w([D.dTh,D.dTg,D.dTd,D.dTl,D.dTo,D.dTi],x.F)
D.dvL=w([A.cf,A.qb],x.O)
D.ehl={checkers_deluxe:0,tic_tac_go:1}
D.aHZ=new B.bu(D.ehl,["Checkers Deluxe","Tic Tac Go"],B.as("bu<m,m>"))
D.egs={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aI9=new B.bu(D.egs,[1,2,3,4,5,6,7],B.as("bu<m,G>"))
D.dMh=new C.a7h(null)
D.dPF=new C.lT("signature","NGMY Support Team",null,null)
D.dPG=new C.lT("divider","",null,null)
D.T9=new C.W2(!1,!1,!1,!1)
D.Tb=new C.Om(!1,!1,!1,!1)
D.dQH=new C.Om(!0,!0,!1,!1)
D.DH=new C.arS(0,"swahili")
D.aK1=new C.arS(1,"english")
D.DI=new C.arS(2,"mix")
D.dhq=w([A.fV,A.iq,A.d0],x.O)
D.bO8=new B.a0(63118,"MaterialIcons",!1)
D.dUp=new C.pp(D.dhq,A.fU,A.ay,"BACKGAMMON","\ud83c\udfb2",D.bO8)
D.bQ6=new B.a0(983637,"MaterialIcons",!1)
D.dUq=new C.pp(Al.aCu,A.bf,A.el,"EURO WHEEL","\ud83c\udfa1",D.bQ6)
D.dr3=w([A.O,A.aK,A.bt],x.O)
D.dUr=new C.pp(D.dr3,A.aP,A.al,"ROYALE","\u265f\ufe0f",F.a26)
D.d3r=w([A.d7,A.bl,A.dF],x.O)
D.dUs=new C.pp(D.d3r,A.aw,A.d3,"CONNECT 4","\ud83d\udd34",A.a2N)
D.dlx=w([A.dv,A.fe,A.qb],x.O)
D.dUt=new C.pp(D.dlx,A.vU,A.cf,"PUNTO BANCO","\ud83d\udc8e",A.me)
D.cLM=w([A.o3,A.iy,A.m2],x.O)
D.dUu=new C.pp(D.cLM,A.js,A.ki,"DOMINOES","\ud83c\udc53",A.aq_)
D.drM=w([A.y8,A.tV,A.hx],x.O)
D.dUv=new C.pp(D.drM,A.BF,A.hf,"WAR","\u2694\ufe0f",A5.a21)
D.dUw=new C.pp(A.aCo,A.aT,A.al,"PREMIUM","\ud83c\udfae",A.om)
D.d5i=w([A.ju,A.aD,A.dH],x.O)
D.dUx=new C.pp(D.d5i,A.dB,A.f8,"JACKPOT","\ud83c\udfb0",A.om)
D.dkx=w([A.kf,A.l4,A.bE],x.O)
D.dUy=new C.pp(D.dkx,A.pZ,A.c_,"LIVE BINGO","\ud83c\udfb1",A.yW)
D.cY4=w([A.iq,A.dZ,A.ay],x.O)
D.bNA=new B.a0(62865,"MaterialIcons",!1)
D.dUz=new C.pp(D.cY4,A.u1,A.aT,"BIG SPIN","\ud83c\udfa1",D.bNA)
D.dUA=new C.pp(A.a5O,A.aN,A.bf,"HOLD'EM","\u2660\ufe0f",A.jZ)
D.dsd=w([A.f9,A.fM,A.b1],x.O)
D.bMI=new B.a0(61234,"MaterialIcons",!1)
D.dUB=new C.pp(D.dsd,A.m3,A.aW,"CRAPS","\ud83c\udfb2",D.bMI)
D.d2G=w([A.eP,A.jd,A.bS],x.O)
D.dUC=new C.pp(D.d2G,A.bM,A.b8,"PLINKO","\ud83d\udc8e",Ap.P5)
D.bPS=new B.a0(983492,"MaterialIcons",!1)
D.dUD=new C.pp(A.a5O,A.ep,A.bf,"SNOOKER","\ud83c\udfb1",D.bPS)
D.dpG=w([A.f9,A.fM,A.aW],x.O)
D.dUE=new C.pp(D.dpG,A.tW,A.bv,"PROFIT LAB","\ud83d\udcb0",A.i8)
D.dq2=w([A.dY,A.ej,A.bf],x.O)
D.bOx=new B.a0(63324,"MaterialIcons",!1)
D.dUF=new C.pp(D.dq2,A.w_,A.ba,"KLONDIKE","\ud83c\udccf",D.bOx)
D.di9=w([A.dd,A.bo,A.O],x.O)
D.dUG=new C.pp(D.di9,A.aT,A.aK,"VEGAS TABLE","\ud83c\udccf",A2.HD)
D.qN=new C.F5(0,"continueGame")
D.qO=new C.F5(1,"youWin")
D.J5=new C.F5(2,"youLose")
D.Tk=new C.F5(3,"draw")
D.aKg=new C.WH(0,"found")
D.ect=new C.WH(1,"foundLive")
D.a7x=new C.WH(2,"notFound")
D.aKh=new C.WH(3,"wrongAccount")
D.ekC=new B.u(4,12)
D.eo9=new B.D(A.yq,A.tI,null)
D.bEG=new B.Q(4,0,0,3)
D.fm5=new B.F(!0,A.aM,null,null,null,null,10,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYB=new B.y("NGMY Helper",null,D.fm5,null,null,null,null,null,null,null,null,null)
D.eor=new B.D(D.bEG,D.fYB,null)
D.bOq=new B.a0(63284,"MaterialIcons",!1)
D.bTF=new B.ae(D.bOq,18,A.p4,null,null,null)
D.fqV=new B.F(!0,A.p4,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFo=new B.y("Continue",null,D.fqV,null,null,null,null,null,null,null,null,null)
D.djR=w([D.bTF,A.bm,D.fFo],x.p)
D.f5X=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.djR,null)
D.eou=new B.D(A.it,D.f5X,null)
D.eoK=new B.D(A.bT,A.tI,null)
D.bo1=new B.t(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.q)
D.dg8=w([A.h4,A.fM,A.cQ,D.bo1],x.O)
D.c6Q=new B.a9(A.az,A.aE,A.x,D.dg8,A.D3,null)
D.b6m=new B.o(null,null,null,null,null,D.c6Q,A.n)
D.bwp=new B.l2(D.b6m,A.bh,null,null)
D.evh=new B.cO(0,0,0,0,null,null,D.bwp,null)
D.bVr=new B.ae(A.wl,11,A.c,null,null,null)
D.evl=new B.cO(10,12,null,null,null,null,D.bVr,null)
D.cQA=w([A.hi,A.dY,A.l8],x.O)
D.evX=new B.c_(A.Li,1.1,A.x,null,0,D.cQA,null,null)
D.bpH=new B.t(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.q)
D.bjc=new B.t(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.q)
D.bli=new B.t(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.q)
D.ddE=w([D.bpH,D.bjc,D.bli],x.O)
D.ew2=new B.c_(A.acF,1.05,A.x,null,0,D.ddE,null,null)
D.ewr=new B.c_(A.A,0.5,A.x,null,0,Ah.a4J,null,null)
D.f3R=new B.a3(-18,0,18,1)
D.f4p=new B.a3(-3,-5,3,5)
D.bU5=new B.ae(A.e6,16,D.eQ,null,null,null)
D.aVx=new B.F(!0,D.eQ,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW8=new B.y("Screenshot added \xb7 tap to change",null,D.aVx,null,null,null,null,null,null,null,null,null)
D.d0l=w([D.bU5,A.bm,D.fW8],x.p)
D.f5k=new B.ca(A.aL,A.b9,A.i,A.m,null,A.p,null,0,D.d0l,null)
D.bY4=new B.ae(A.op,15,D.eQ,null,null,null)
D.fTV=new B.y("Refresh",null,D.aVx,null,null,null,null,null,null,null,null,null)
D.d2Q=w([D.bY4,A.db,D.fTV],x.p)
D.f5m=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.d2Q,null)
D.egL={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.f7e=new B.dx(D.egL,3,x.M)
D.egA={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.f7p=new B.dx(D.egA,36,x.M)
D.egD={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.f7C=new B.dx(D.egD,6,x.M)
D.ei5={memory:0,typing:1,scramble:2,pattern:3}
D.n0=new B.dx(D.ei5,4,x.M)
D.fad=new B.av(276,276)
D.faW=new B.a4(13,null,null,null)
D.bcD=new B.fl(2.6,null,null,null,null,A.aT,null,null,null,null)
D.fb7=new B.a4(26,26,D.bcD,null)
D.fbT=new B.a4(null,7,null,null)
D.fc1=new B.hL(8,0,0,1,null)
D.fXi=new B.y("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aSZ=new B.b2(D.fXi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fAp=new B.y("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new B.b2(D.fAp,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fBz=new B.y("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new B.b2(D.fBz,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fU5=new B.y("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.b2(D.fU5,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.boU=new B.t(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.q)
D.fpP=new B.F(!0,D.boU,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new B.es("$",null,null,A.cL,null,null,null,null,null,null,D.fpP)
D.fje=new B.F(!0,A.O,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjE=new B.F(!0,A.bo,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.F(!0,A.O,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new B.F(!0,A.aT,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flj=new B.F(!0,A.aT,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flV=new B.F(!0,D.eQ,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flX=new B.F(!0,A.bM,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmN=new B.F(!0,E.By,null,null,null,null,13,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUf=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fom=new B.F(!0,A.bM,null,null,null,null,11.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new B.F(!0,A.ac,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.aF,null,null,null,null,null,null,null,null)
D.fp_=new B.F(!0,A.ac,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new B.F(!0,A.c,null,null,null,null,14,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.aF,null,null,null,null,null,null,null,null)
D.fr2=new B.F(!0,A.j4,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bhB=new B.t(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.q)
D.frk=new B.F(!0,D.bhB,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsN=new B.F(!0,A.aw,null,null,null,null,17,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new B.F(!0,D.ahj,null,null,null,null,9,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV_=new B.F(!0,E.By,null,null,null,null,11,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new B.F(!0,A.ej,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new B.F(!0,A.bt,null,null,null,null,7,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftO=new B.F(!0,E.By,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.x7=new B.F(!0,A.c,null,null,null,null,13,A.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bmi=new B.t(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.q)
D.fu2=new B.F(!0,D.bmi,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new B.F(!0,A.SP,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvI=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new B.F(!0,A.ir,null,null,null,null,11,A.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVi=new B.F(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new B.F(!0,A.O,null,null,null,null,10,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new B.F(!0,A.O,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxL=new B.F(!0,A.ac,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy1=new B.F(!0,A.ba,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyx=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyB=new B.F(!0,A.O,null,null,null,null,11,A.U,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzA=new B.y("Value per pair",null,A.he,null,null,null,null,null,null,null,null,null)
D.fzC=new B.y("Restore now",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fAb=new B.y("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aUL=new B.F(!0,A.cY,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new B.y("AVAILABLE PLANS",null,D.aUL,null,null,null,null,null,null,null,null,null)
D.fAn=new B.y("I understand",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fAY=new B.y("Go Back",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fmC=new B.F(!0,A.bt,null,null,null,null,8,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new B.y("PLAN VALUE",null,D.fmC,null,null,null,null,null,null,null,null,null)
D.fBK=new B.y("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new B.y("Deposit",null,A.VD,null,null,null,null,null,null,null,null,null)
D.fwG=new B.F(!0,A.dB,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD6=new B.y("JACKPOT SLOTS",null,D.fwG,null,null,null,null,null,null,null,null,null)
D.fDo=new B.y("Restore",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fmI=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new B.y("YOUR NUMBER",null,D.fmI,null,null,null,null,null,null,null,null,null)
D.fDI=new B.y("SPIN REELS",null,F.aal,null,null,null,null,null,null,null,null,null)
D.fEb=new B.y("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fEK=new B.y("Perfect Score Profit",null,A.he,null,null,null,null,null,null,null,null,null)
D.fFm=new B.y("Join room",null,A.iw,null,null,null,null,null,null,null,null,null)
D.fHz=new B.y("Add payment screenshot",null,A.j8,null,null,null,null,null,null,null,null,null)
D.fHP=new B.y("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fvW=new B.F(!0,A.aT,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIf=new B.y("INVITE A PLAYER",null,D.fvW,null,null,null,null,null,null,null,null,null)
D.fv1=new B.F(!0,A.XX,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIG=new B.y("NGMY GOLD LEADER",null,D.fv1,null,null,null,null,null,null,null,null,null)
D.fJd=new B.y("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fJD=new B.y("Invest & Play",null,A.nN,null,null,null,null,null,null,null,null,null)
D.aUF=new B.F(!0,D.y0,null,null,null,null,8,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK4=new B.y("VALID THRU",null,D.aUF,null,null,null,null,null,null,null,null,null)
D.aVk=new B.F(!0,A.aC,null,null,null,null,11,A.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKc=new B.y("DEALER",null,D.aVk,null,null,null,null,null,null,null,null,null)
D.fKi=new B.y("CARDHOLDER",null,D.aUF,null,null,null,null,null,null,null,null,null)
D.fuu=new B.F(!0,A.aN,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new B.y("NGMY PLATINUM",null,D.fuu,null,null,null,null,null,null,null,null,null)
D.fxS=new B.F(!0,A.qd,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLO=new B.y("EARNED SO FAR",null,D.fxS,null,null,null,null,null,null,null,null,null)
D.fMm=new B.y("VS",null,A.aUz,null,null,null,null,null,null,null,null,null)
D.fMM=new B.y("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fN8=new B.y("One day left",null,A.aad,null,A.K,null,null,null,null,null,null,null)
D.fNu=new B.y("Keep typing \u2014 mistakes are counted in your payout",null,A.Ep,null,null,null,null,null,null,null,null,null)
D.fNv=new B.y("Multiplayer invite",null,A.iw,null,null,null,null,null,null,null,null,null)
D.fNH=new B.y("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fl5=new B.F(!0,A.SP,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNN=new B.y("\ud83d\udcb0 Partial Payout System",null,D.fl5,null,null,null,null,null,null,null,null,null)
D.fNY=new B.y("Browse Topics",null,A.f5,null,null,null,null,null,null,null,null,null)
D.fk0=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new B.y("Investment Required",null,D.fk0,null,A.K,null,null,null,null,null,null,null)
D.fjv=new B.F(!0,A.c,null,null,null,null,16.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPL=new B.y("Network Status",null,D.fjv,null,null,null,null,null,null,null,null,null)
D.aU_=new B.F(!0,A.ac,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQn=new B.y("Their account email",null,D.aU_,null,null,null,null,null,null,null,null,null)
D.fQG=new B.y("Verification code",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fQH=new B.y("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fQX=new B.y("ACTIVE ASSET",null,D.aUL,null,null,null,null,null,null,null,null,null)
D.fRj=new B.y("Scan QR",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fRo=new B.y("Check word",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fRP=new B.y("YOUR HAND",null,D.aVk,null,null,null,null,null,null,null,null,null)
D.fSp=new B.y("NGMY Music Studio",null,A.ka,null,null,null,null,null,null,null,null,null)
D.fSs=new B.y("I sent it \u2014 submit deposit",null,A.nN,null,null,null,null,null,null,null,null,null)
D.fTi=new B.y("Back",null,A.Ao,null,null,null,null,null,null,null,null,null)
D.fyN=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTq=new B.y("DEAL / PLAY ROUND",null,D.fyN,null,null,null,null,null,null,null,null,null)
D.fTD=new B.y("Got it \u2014 keep chatting",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fTN=new B.y("3 Messages Left",null,A.aV9,null,null,null,null,null,null,null,null,null)
D.fUk=new B.y("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fUt=new B.y("Copy",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fUQ=new B.y("How many games?",null,D.aU_,null,null,null,null,null,null,null,null,null)
D.ftW=new B.F(!0,A.aC,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV1=new B.y("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.ftW,null,A.K,null,null,null,null,null,null,null)
D.fWA=new B.y("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fWO=new B.y("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fzd=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYt=new B.y("NGMY  WALLET",null,D.fzd,null,null,null,null,null,null,null,null,null)
D.fYu=new B.y("Select Your Bet",null,A.fS,null,null,null,null,null,null,null,null,null)
D.hlm=new B.bQ("history",x.W)
D.hly=new B.bQ("ngmy_local_home",x.W)
D.hlz=new B.bQ("ngmy_local_invest",x.W)
D.hlA=new B.bQ("ngmy_local_wallet",x.W)
D.hoM=new C.ZV(null)
D.b_3=new C.aCz(0,"grid")
D.b_4=new C.aCz(1,"questions")
D.hqn=new C.aCz(2,"answer")
D.hsm=new C.a_P(null)})();(function staticFields(){$.h5F=B.aV(x.N)
$.hw0=B.U(x.N,x.k)
$.hbl=null
$.hb8=B.U(x.N,B.as("u7"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iuE","bGc",()=>C.ico())
w($,"iuq","hEx",()=>{var v=null,u=B.fz(v,v,v,v,D.fiZ,A.a4,A.bX,v,A.dA,A.bV)
u.eg()
return u})})()};
(a=>{a["HKGfJQtuG4Z8EBhC1A3LqCeK1N8="]=a.current})($__dart_deferred_initializers__);